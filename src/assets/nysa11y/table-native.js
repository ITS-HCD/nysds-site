/**
 * NYSA11y Table (native)
 * Path: /assets/nysa11y/table-native.js
 * Depends on /assets/nysa11y/table-native.css
 */
const nysa11y = window.nysa11y || {};

class Table {
  #selectorRoot = '[data-component="table"].nysa11y';
  #selectorHeader = '[data-part="tableHead"] th';
  #selectorTbody = '[data-part="tableBody"]';
  #selectorButton = "button.column__sorter";

  constructor(options = {}) {
    this.container = options.container || document;
    this.init();
  }

  init() {
    const roots = this.container.querySelectorAll(this.#selectorRoot);
    if (!roots.length) return;

    roots.forEach((rootEl) => {
      this.#setupTable(rootEl);
    });
  }

  #setupTable = (rootEl) => {
    const headers = rootEl.querySelectorAll(this.#selectorHeader);
    headers.forEach((ch, i) => {
      const buttonNode = ch.querySelector(this.#selectorButton);
      if (buttonNode) {
        buttonNode.setAttribute("data-column-index", i);
        buttonNode.removeEventListener("click", this.#handleClick);
        buttonNode.addEventListener("click", this.#handleClick);
      }
    });

    // Sync ARIA from DOM state at setup
    let sortedIndex = -1;
    headers.forEach((ch, i) => {
      const buttonNode = ch.querySelector(this.#selectorButton);
      if (buttonNode && ch.hasAttribute("aria-sort")) {
        const value = ch.getAttribute("aria-sort");
        if (value !== "ascending" && value !== "descending") {
          ch.removeAttribute("aria-sort");
        } else {
          sortedIndex = i;
        }
      }
    });

    if (sortedIndex !== -1) {
      this.#updateSortedAttributes(rootEl, sortedIndex);
    }

    // Set initial alignments based on thead th data-align attributes
    this.#updateColumnAlignments(rootEl);

    // Watch for dynamic data-align changes/removals
    if (rootEl.__nysa11yTableAlignObserver) {
      rootEl.__nysa11yTableAlignObserver.disconnect();
    }

    const alignObserver = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-align") {
          this.#updateColumnAlignments(rootEl);
        }
      });
    });

    alignObserver.observe(rootEl, {
      attributes: true,
      subtree: true,
      attributeFilter: ["data-align"],
    });

    rootEl.__nysa11yTableAlignObserver = alignObserver;
  };

  #handleClick = (event) => {
    const buttonElement = event.currentTarget;
    const rootEl = buttonElement.closest(this.#selectorRoot);
    if (!rootEl) return;

    const columnIndex = buttonElement.getAttribute("data-column-index");
    this.#setColumnHeaderSort(rootEl, columnIndex);
  };

  #isTextNumeric = (text) => {
    const cleaned = text
      .trim()
      .replace(/^[\$\u20AC\u00A3\u00A5]/, "") // remove leading currency symbols
      .replace(/,/g, "") // remove commas
      .replace(/%$/, "") // remove trailing percent sign
      .trim();
    return /^[-+]?\d*\.?\d+$/.test(cleaned);
  };

  #updateSortedAttributes = (rootEl, columnIndex) => {
    const parsedIndex = typeof columnIndex === "string" ? parseInt(columnIndex, 10) : columnIndex;
    const tbodyNode = rootEl.querySelector(this.#selectorTbody);

    if (tbodyNode) {
      const rows = Array.from(tbodyNode.children);
      rows.forEach((rowNode) => {
        const rowCells = rowNode.querySelectorAll("th, td");
        rowCells.forEach((cell, i) => {
          if (i === parsedIndex) {
            cell.setAttribute("data-state", "sorted");
          } else {
            cell.removeAttribute("data-state");
          }
        });
      });
    }
  };

  #updateColumnAlignments = (rootEl) => {
    const headers = rootEl.querySelectorAll(this.#selectorHeader);
    const tbodyNode = rootEl.querySelector(this.#selectorTbody);
    if (!tbodyNode) return;

    const rows = Array.from(tbodyNode.children);

    headers.forEach((ch, columnIndex) => {
      const align = ch.getAttribute("data-align");

      rows.forEach((rowNode) => {
        const rowCells = rowNode.querySelectorAll("th, td");
        const cell = rowCells[columnIndex];
        if (cell) {
          // Remove existing alignment classes
          cell.classList.remove("align-center", "align-end");

          // Add new alignment class based on data-align
          if (align === "center") {
            cell.classList.add("align-center");
          } else if (align === "end") {
            cell.classList.add("align-end");
          }
        }
      });
    });
  };

  #setColumnHeaderSort = (rootEl, columnIndex) => {
    const parsedIndex = typeof columnIndex === "string" ? parseInt(columnIndex, 10) : columnIndex;
    const headers = rootEl.querySelectorAll(this.#selectorHeader);
    const tbodyNode = rootEl.querySelector(this.#selectorTbody);

    headers.forEach((ch, i) => {
      const buttonNode = ch.querySelector(this.#selectorButton);
      if (i === parsedIndex) {
        const value = ch.getAttribute("aria-sort");

        // Auto-detect numeric column if class "num" is not present
        let isNumber = ch.classList.contains("num");
        if (!isNumber && tbodyNode) {
          const rows = Array.from(tbodyNode.children);
          const cellValues = rows
            .map((rowNode) => {
              const rowCells = rowNode.querySelectorAll("th, td");
              const dataCell = rowCells[parsedIndex];
              return dataCell ? dataCell.textContent.trim() : "";
            })
            .filter((text) => text !== "" && text !== "N/A");

          if (cellValues.length > 0) {
            isNumber = cellValues.every(this.#isTextNumeric);
          }
        }

        const direction = value === "descending" ? "ascending" : "descending";

        ch.setAttribute("aria-sort", direction);
        this.#sortColumn(rootEl, parsedIndex, direction, isNumber);
        this.#updateSortedAttributes(rootEl, parsedIndex);
      } else {
        if (ch.hasAttribute("aria-sort") && buttonNode) {
          ch.removeAttribute("aria-sort");
        }
      }
    });
  };

  #sortColumn = (rootEl, columnIndex, sortValue, isNumber) => {
    const tbodyNode = rootEl.querySelector(this.#selectorTbody);
    if (!tbodyNode) return;

    const rows = Array.from(tbodyNode.children);
    const dataCells = rows.map((rowNode, index) => {
      const rowCells = rowNode.querySelectorAll("th, td");
      const dataCell = rowCells[columnIndex];
      const text = dataCell ? dataCell.textContent.trim() : "";
      const value = isNumber ? this.#parseNumber(text) : text.toLowerCase();

      return {
        index,
        value,
        rowNode,
      };
    });

    dataCells.sort((a, b) => {
      if (a.value === b.value) {
        return 0;
      }
      if (sortValue === "ascending") {
        if (isNumber) {
          return a.value - b.value;
        }
        return a.value < b.value ? -1 : 1;
      } else {
        if (isNumber) {
          return b.value - a.value;
        }
        return a.value > b.value ? -1 : 1;
      }
    });

    // Clear and append sorted rows
    tbodyNode.textContent = "";
    dataCells.forEach((cell) => {
      tbodyNode.appendChild(cell.rowNode);
    });
  };

  #parseNumber = (text) => {
    // Remove all characters except digits, minus signs, and decimal dots.
    const cleaned = text.replace(/[^\d.-]/g, "");
    const parsed = parseFloat(cleaned);
    return Number.isNaN(parsed) ? 0 : parsed;
  };
}

nysa11y.Table = Table;

document.addEventListener("DOMContentLoaded", () => {
  new nysa11y.Table();
});
