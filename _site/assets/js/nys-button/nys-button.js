import { LitElement, html, css } from 'lit';

class NysButton extends LitElement {
  static styles = css`
    :host {}

    /* Base Button Style */
    button {
      /* Color */
      color: var(--color-text-inverted); /* white */
      background-color: var(--color-bg-primary-default);
      border: solid 2px var(--color-border-primary-default);
      /* Space */
      padding: var(--space-inset-stretch-s);
      /* Layout */
      /* display: flex; */
      align-items: center;
      position: relative;
      /* Typography */
      font-family: var(--font-family-sans);
      font-size: var(--font-size-md);
      /* Everything Else */
      border-radius: var(--radius-md);
      cursor: pointer; 
    }
    button:focus,
    button.focus {
      outline-style: solid;
      outline-color: var(--color-focus-default);
      outline-width: 2px;
      outline-offset: 2px;
    }

    /* Primary */
    .primary {
      background-color: var(--color-bg-primary-default);
      border-color: var(--color-border-primary-default);
    }
    .primary:hover {
      background-color: var(--color-bg-primary-hovered);
      border-color: var(--color-border-primary-hovered);
    }
    .primary:focus {
      outline-style: solid;
      outline-color: var(--color-focus-default);
      outline-width: 2px;
      outline-offset: 2px;
    }
    .primary:active {
      background-color: var(--color-bg-primary-pressed);
      border-color: var(--color-border-primary-pressed);
    }

    /* Secondary */
    .secondary {
      color: var(--color-text-secondary-default);
      background-color: var(--color-bg-secondary-default);
      border-color: var(--color-border-secondary-default);
    }
    .secondary:hover {
      background-color: var(--color-bg-secondary-hovered);
      border-color: var(--color-border-secondary-hovered);
    }
    .secondary:active {
      background-color: var(--color-bg-secondary-pressed);
      border-color: var(--color-border-secondary-pressed);
    }

    /* Outline */
    .outline {
      color: var(--color-text-outline-default);
      background-color: var(--color-bg-outline-default);
    }
    .outline:hover {
      color: var(--color-text-outline-hovered);
      background-color: var(--color-bg-outline-hovered);
    }
    .outline:active {
      color: var(--color-text-outline-pressed);
      background-color: var(--color-bg-outline-pressed);
    }

    /* Disabled */
    button[disabled],
    button:disabled {
      color: var(--color-text-disabled);
      background-color: var(--color-bg-disabled);
      border-color: var(--color-border-disabled);
      cursor: default;
    }

    .icon {
      margin-right: var(--space-inline-default);
    }
  `;

  constructor() {
    super();
    this.iconHasContent = false;
    this.variant = 'primary';
    this.disabled = false;
    this.type = 'button';
    this.form = '';
    this.formaction = '';
    this.formenctype = '';
    this.formmethod = '';
    this.formnovalidate = false;
    this.formtarget = '';
  }

  firstUpdated() {
    const iconSlot = this.shadowRoot.querySelector('slot[name="icon"]');
    if (iconSlot) {
      iconSlot.addEventListener('slotchange', () => {
        this.iconHasContent = iconSlot.assignedNodes().length > 0;
        this.requestUpdate();
      });

      // Initial check
      this.iconHasContent = iconSlot.assignedNodes().length > 0;
    }
  }

  static get properties() {
    return {
      variant: { type: String },
      disabled: { type: Boolean, reflect: true },
      type: { type: String },
      form: { type: String },
      formaction: { type: String },
      formenctype: { type: String },
      formmethod: { type: String },
      formnovalidate: { type: Boolean },
      formtarget: { type: String },
    };
  }

  _handleClick(event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }

  render() {
    const buttonClass = [
      'button',
      this.variant ? `${this.variant}` : '',
    ].join(' ');

    return html`
      <button
        class="${buttonClass}"
        ?disabled="${this.disabled}"
        type="${this.type}"
        form="${this.form}"
        formaction="${this.formaction}"
        formenctype="${this.formenctype}"
        formmethod="${this.formmethod}"
        ?formnovalidate="${this.formnovalidate}"
        formtarget="${this.formtarget}"
        @click="${this._handleClick}"
      >
        ${this.iconHasContent ? html`<span class="icon"><slot name="icon"></slot></span>` : ''}
        <span class="label"><slot></slot></span>
      </button>
    `;
  }
}

customElements.define('nys-button', NysButton);