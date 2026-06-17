import { LitElement as m, unsafeCSS as w, html as h } from "lit";
import { property as a, query as Go, state as $ } from "lit/decorators.js";
import { ifDefined as g } from "lit/directives/if-defined.js";
/*!
   * New York State Design System v1.19.1-alpha-1
   * Description: A design system for New York State's digital products.
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
 */
const dr = ':host{--_nys-accordion-border-radius: var(--nys-radius-md, 4px);--_nys-accordion-border-width: var(--nys-border-width-md, 2px);--_nys-accordion-border-color: var(--nys-color-neutral-50, #ededed);--_nys-accordion-padding--x: var(--nys-space-250, 20px);--_nys-accordion-padding--y: var(--nys-space-200, 16px);--_nys-accordion-outline-width: var(--nys-border-width-md, 2px);--_nys-accordion-outline-offset: var(--nys-space-2px, 2px);--_nys-accordion-outline-color: var(--nys-color-focus, #004dd1);--_nys-accordion-gap: var(--nys-space-100, 8px);--_nys-accordion-background-color--header: var( --nys-accordion-background-color--header, var(--nys-color-neutral-50, #ededed) );--_nys-accordion-background-color--header--hover: var( --nys-accordion-background-color--header--hover, var(--nys-color-neutral-100, #d0d0ce) );--_nys-accordionitem-gap: var(--nys-space-200, 16px);--_nys-accordionitem-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-accordionitem-padding: var(--nys-space-200, 16px) var(--local-xx-spacing-205, 20px);--_nys-accordion-content-max-width: var( --nys-accordion-content-max-width, 80ch );--_nys-accordion-font-size: var(--nys-type-size-ui-xl, 20px);--_nys-accordion-font-weight: var(--nys-font-weight-bold, 700);--_nys-accordion-line-height: var(--nys-font-lineheight-ui-xl, 28px);--_nys-accordion-letter-spacing: var(--nys-font-letterspacing-ui-xl, .017px);--_nys-accordion-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) )}::slotted(p),p{margin:0!important}.nys-accordionitem{font-family:var(--_nys-accordion-font-family);font-size:var(--_nys-accordion-font-size);font-weight:var(--_nys-accordion-font-weight);line-height:var(--_nys-accordion-line-height);letter-spacing:var(--_nys-accordion-letter-spacing);display:flex}.nys-accordionitem__heading{all:unset;flex:1;gap:var(--_nys-accordionitem-gap);display:flex;padding:var(--_nys-accordion-padding--y) var(--_nys-accordion-padding--x);align-items:center;align-self:stretch;border-radius:var(--_nys-accordion-border-radius);background-color:var(--_nys-accordion-background-color--header);cursor:pointer;transition:.05s all ease-in-out}.nys-accordionitem__heading:hover{border-radius:var(--_nys-accordion-border-radius);background-color:var(--_nys-accordion-background-color--header--hover)}.nys-accordionitem__heading:focus-visible{outline-offset:var(--_nys-accordion-outline-offset);outline:solid var(--_nys-accordion-outline-width) var(--_nys-accordion-outline-color)}.nys-accordionitem__heading .nys-accordionitem__heading-title{flex:1}.nys-accordionitem__content{height:0;overflow:hidden;transition:all .3s cubic-bezier(.4,0,.2,1) 0ms;visibility:hidden}.nys-accordionitem__content.expanded{visibility:visible}.nys-accordionitem__content-slot-container{display:flex;flex-direction:column;align-items:flex-start;gap:var(--_nys-accordion-gap);align-self:stretch;padding:var(--_nys-accordionitem-padding);background-color:var(--_nys-accordionitem-background-color)}.nys-accordionitem__content-slot-container-text{max-width:var(--_nys-accordion-content-max-width)}.expand-icon{transition:all .3s cubic-bezier(.4,0,.2,1) 0ms}:host([expanded]) .expand-icon{transform:rotate(180deg)}:host([bordered][expanded]) .nys-accordionitem__heading{border-radius:var(--_nys-accordion-border-radius) var(--_nys-accordion-border-radius) 0 0}:host([bordered]) .nys-accordionitem__content-slot-container{border:var(--_nys-accordion-border-width) solid var(--_nys-accordion-border-color);border-radius:0 0 var(--_nys-accordion-border-radius) var(--_nys-accordion-border-radius)}.nys-accordion{display:flex;flex-direction:column;gap:var(--_nys-accordion-gap)}';
var Xr = Object.defineProperty, _o = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Xr(e, t, o), o;
};
let Jr = 0;
const Rs = class Rs extends m {
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.heading = "", this.expanded = !1, this.bordered = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = this._generateUniqueId());
  }
  firstUpdated() {
    const e = this.shadowRoot?.querySelector("slot");
    this.expanded && e && e.addEventListener("slotchange", () => {
      this._updateHeight();
    });
  }
  updated(e) {
    e.has("expanded") && this._updateHeight();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _generateUniqueId() {
    return `nys-accordionitem-${Date.now()}-${Jr++}`;
  }
  _dispatchEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-accordionitem-toggle", {
        detail: { id: this.id, heading: this.heading, expanded: this.expanded },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleExpand() {
    this.expanded = !this.expanded, this._updateHeight(), this._dispatchEvent();
  }
  _handleKeydown(e) {
    (e.key === " " || e.key === "Enter") && (e.preventDefault(), this._handleExpand());
  }
  _updateHeight() {
    if (this._contentContainer)
      if (this.expanded) {
        const e = this._contentContainer.scrollHeight;
        this._contentContainer.style.height = `${e}px`;
      } else
        this._contentContainer.style.height = "0", this._contentContainer.style.overflow = "hidden";
  }
  render() {
    const e = `${this.id}-content`;
    return h`
    <div class="nys-accordionitem">
      <button
        class="nys-accordionitem__heading"
        type="button"
        @click=${this._handleExpand}
        @keydown=${this._handleKeydown}
        aria-expanded=${this.expanded ? "true" : "false"}
        aria-controls=${e}
      >
        <span class="nys-accordionitem__heading-title">${this.heading}</span>
        <nys-icon class="expand-icon" name="chevron_down" size="24"></nys-icon>
      </button>
      </div>
      <div id=${e} class="nys-accordionitem__content ${this.expanded ? "expanded" : "collapsed"}" role="region">
        <div class="nys-accordionitem__content-slot-container">
          <div class="nys-accordionitem__content-slot-container-text">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>`;
  }
};
Rs.styles = w(dr);
let it = Rs;
_o([
  a({ type: String, reflect: !0 })
], it.prototype, "id");
_o([
  a({ type: String })
], it.prototype, "heading");
_o([
  a({ type: Boolean, reflect: !0 })
], it.prototype, "expanded");
_o([
  a({ type: Boolean, reflect: !0 })
], it.prototype, "bordered");
_o([
  Go(".nys-accordionitem__content")
], it.prototype, "_contentContainer");
customElements.get("nys-accordionitem") || customElements.define("nys-accordionitem", it);
var ei = Object.defineProperty, Ls = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && ei(e, t, o), o;
};
let ti = 0;
const Ps = class Ps extends m {
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.singleSelect = !1, this.bordered = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = this._generateUniqueId());
  }
  updated(e) {
    e.has("bordered") && this._applyBordered();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _generateUniqueId() {
    return `nys-accordion-${Date.now()}-${ti++}`;
  }
  _getAccordionItems() {
    return (this.shadowRoot?.querySelector("slot")?.assignedElements() || []).filter(
      (s) => s.tagName.toLowerCase() === "nys-accordionitem"
    );
  }
  _onAccordionToggle(e) {
    if (!this.singleSelect) return;
    const t = e.detail.id;
    e.detail.expanded && this._getAccordionItems().forEach((o) => {
      o.id !== t && o.expanded && (o.expanded = !1);
    });
  }
  _applyBordered() {
    this._getAccordionItems().forEach((e) => {
      e.bordered = this.bordered;
    });
  }
  render() {
    return h`<div
      class="nys-accordion"
      @nys-accordionitem-toggle=${this._onAccordionToggle}
    >
      <slot></slot>
    </div>`;
  }
};
Ps.styles = w(dr);
let Pt = Ps;
Ls([
  a({ type: String, reflect: !0 })
], Pt.prototype, "id");
Ls([
  a({ type: Boolean, reflect: !0 })
], Pt.prototype, "singleSelect");
Ls([
  a({ type: Boolean, reflect: !0 })
], Pt.prototype, "bordered");
customElements.get("nys-accordion") || customElements.define("nys-accordion", Pt);
const oi = ':host{--_nys-alert-border-width: var(--nys-border-width-lg, 4px);--_nys-alert-border-radius: var(--nys-radius-md, 4px);--_nys-alert-color: var( --nys-alert-color, var(--nys-color-text, var(--nys-color-neutral-900, #1b1b1b)) );--_nys-alert-color--link: var( --nys-alert-color--link, var(--nys-color-link, var(--nys-color-blue-600, #004dd1)) );--_nys-alert-color--link--hover: var( --nys-alert-color--link--hover, var(--nys-color-link-strong, var(--nys-color-blue-700, #003ba1)) );--_nys-alert-color--link--active: var( --nys-alert-color--link--active, var(--nys-color-link-strongest, var(--nys-color-blue-800, #002971)) );--_nys-alert-padding: var(--nys-space-250, 20px);--_nys-alert-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-alert-font-size: var(--nys-font-size-ui-md, 16px);--_nys-alert-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-alert-letter-spacing: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) );--_nys-alert-font-weight--regular: var(--nys-font-weight-regular, 400);--_nys-alert-font-weight--semibold: var(--nys-font-weight-semibold, 600);--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-base, var(--nys-color-neutral-600, #62666a)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-base-weak, var(--nys-color-neutral-10, #f6f6f6)) );--_nys-alert-gap--icon: var(--nys-space-150, 12px);--_nys-alert-gap--text: var(--nys-space-50, 4px);--_nys-alert-gap--actions: var(--nys-space-150, 12px)}.nys-alert__container{display:flex;background-color:var(--_nys-alert-background-color);border-inline-start:var(--_nys-alert-border-width) solid var(--_nys-alert-border-color);border-radius:var(--_nys-alert-border-radius);color:var(--_nys-alert-color);padding:var(--_nys-alert-padding);font-style:normal;font-family:var(--_nys-alert-font-family);font-size:var(--_nys-alert-font-size);line-height:var(--_nys-alert-line-height);letter-spacing:var(--_nys-alert-letter-spacing);gap:var(--_nys-alert-gap--icon)}p{margin:0}::slotted(p){margin-bottom:0!important}.nys-alert__icon{margin-top:-2px}a,a:visited{font-weight:var(--_nys-alert-font-weight--semibold);font-size:var(--_nys-alert-font-size);color:var(--_nys-alert-color--link)}a:hover{color:var(--_nys-alert-color--link--hover)}a:active{color:var(--_nys-alert-color--link--active)}::slotted(a){color:var(--_nys-alert-color--link)}.nys-alert__texts{position:relative;display:flex;flex-direction:column;flex:1;gap:var(--_nys-alert-gap--text)}.nys-alert__header{margin:0;font-weight:var(--_nys-alert-font-weight--semibold)}.nys-alert__text{font-weight:var(--_nys-alert-font-weight--regular);margin:0}::slotted(*){font-weight:var(--_nys-alert-font-weight--regular);margin:0}.nys-alert--centered{display:flex;align-items:center}.nys-alert--centered .nys-alert__header{margin-bottom:-3px}.nys-alert--centered div[part=nys-alert__icon]{margin-top:0;display:flex;align-items:center;justify-content:center}.nys-alert__actions{display:flex;gap:var(--_nys-alert-gap--actions);flex-wrap:wrap}#dismiss-btn{margin-top:-8px}:host([type=info]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-info, var(--nys-color-blue-600, #004dd1)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-info-weak, var(--nys-color-blue-50, #e5effa)) )}:host([type=success]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-success, var(--nys-color-green-600, #1e752e)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-success-weak, var(--nys-color-green-50, #e8f1ea)) )}:host([type=warning]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-warning, var(--nys-color-yellow-400, #face00)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-warning-weak, var(--nys-color-yellow-50, #fefae5)) )}:host([type=danger]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-danger, var(--nys-color-red-600, #b52c2c)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-danger-weak, var(--nys-color-red-50, #f7eaea)) )}:host([type=emergency]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-emergency, var(--nys-color-red-800, #721c1c)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-emergency, var(--nys-color-red-800, #721c1c)) );--_nys-alert-color: var( --nys-alert-color, var(--nys-color-text-reverse, var(--nys-color-white, #ffffff)) );--_nys-alert-color--link: var( --nys-alert-color--link, var(--nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff)) );--_nys-alert-color--link--hover: var( --nys-alert-color--link--hover, var(--nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff)) );--_nys-alert-color--link--active: var( --nys-alert-color--link--active, var(--nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff)) )}:host([type=emergency]) a:hover{text-decoration-thickness:2px}:host([type=emergency]) a:active{text-decoration-thickness:3px}';
var si = Object.defineProperty, xe = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && si(e, t, o), o;
};
let ni = 0;
const Bs = class Bs extends m {
  constructor() {
    super(...arguments), this.id = "", this.heading = "", this.icon = "", this.dismissible = !1, this.duration = 0, this.text = "", this.primaryAction = "", this.secondaryAction = "", this.primaryLabel = "Learn more", this.secondaryLabel = "Dismiss", this.type = "base", this._alertClosed = !1, this._slotHasContent = !0, this._timeoutId = null;
  }
  /**
   * Returns ARIA role and label based on alert type.
   * - 'alert' => assertive live region (implied)
   * - 'status' => polite live region
   * - 'region' => generic, requires aria-label
   */
  get ariaAttributes() {
    const e = this.type === "danger" || this.type === "emergency" ? "alert" : this.type === "success" ? "status" : "region", t = e === "region" ? `${this.type} alert` : "";
    return { role: e, ariaLabel: t };
  }
  /**
   * Returns live-region type for screen readers if applicable.
   * - 'polite' for status role
   * - undefined for alert (since it's implicitly assertive) or region
   */
  get liveRegion() {
    if (this.ariaAttributes.role === "status") return "polite";
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = this._generateUniqueId()), this.duration > 0 && (this._timeoutId = setTimeout(() => {
      this._closeAlert();
    }, this.duration));
  }
  disconnectedCallback() {
    this._timeoutId && clearTimeout(this._timeoutId), super.disconnectedCallback();
  }
  firstUpdated() {
    this._checkSlotContent();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _generateUniqueId() {
    return `nys-alert-${Date.now()}-${ni++}`;
  }
  _resolveIconName() {
    return this.icon || this._checkAltNaming();
  }
  _checkAltNaming() {
    return this.type === "success" ? "check_circle" : this.type === "base" ? "info" : this.type === "danger" ? "error" : this.type === "emergency" ? "emergency_home" : this.type;
  }
  _closeAlert() {
    this._alertClosed = !0, this.dispatchEvent(
      new CustomEvent("nys-close", {
        detail: { id: this.id, type: this.type, label: this.heading },
        bubbles: !0,
        composed: !0
      })
    );
  }
  /**
   * Checks whether the default slot has content.
   * Updates `_slotHasContent` accordingly.
   */
  async _checkSlotContent() {
    const e = this.shadowRoot?.querySelector("slot");
    if (e) {
      const t = e.assignedNodes({ flatten: !0 }).filter(
        (s) => s.nodeType === Node.ELEMENT_NODE || s.nodeType === Node.TEXT_NODE && s.textContent?.trim()
      );
      await Promise.resolve(), this._slotHasContent = t.length > 0;
    } else
      await Promise.resolve(), this._slotHasContent = !1;
  }
  render() {
    const { role: e, ariaLabel: t } = this.ariaAttributes;
    return h`
      ${this._alertClosed ? "" : h` <div
            class="nys-alert__container ${this._slotHasContent || this.text?.trim().length > 0 ? "" : "nys-alert--centered"}"
            aria-label=${g(
      t.trim() !== "" ? t : void 0
    )}
          >
            <div part="nys-alert__icon" class="nys-alert__icon">
              <nys-icon
                name="${this._resolveIconName()}"
                size="3xl"
                label="${this.type} icon"
              ></nys-icon>
            </div>
            <div
              class="nys-alert__texts"
              role=${e}
              aria-live=${g(this.liveRegion)}
            >
              ${this.heading?.trim() ? h`<p class="nys-alert__header">${this.heading}</p>` : ""}
              ${this._slotHasContent ? h`<slot></slot>` : this.text?.trim().length > 0 ? h`<p class="nys-alert__text">${this.text}</p>` : ""}
              ${this.primaryAction || this.secondaryAction ? h`<div class="nys-alert__actions">
                    ${this.primaryAction ? h`<a
                          href=${g(this.primaryAction || void 0)}
                          class="nys-alert__action nys-alert__primary"
                        >
                          ${this.primaryLabel}
                        </a>` : ""}
                    ${this.secondaryAction ? h`<a
                          href=${g(this.secondaryAction || void 0)}
                          class="nys-alert__action nys-alert__secondary"
                        >
                          ${this.secondaryLabel}
                        </a>` : ""}
                  </div> ` : ""}
            </div>
            ${this.dismissible ? h` <nys-button
                  id="dismiss-btn"
                  variant="ghost"
                  circle
                  icon="close"
                  size="sm"
                  ?inverted=${this.type === "emergency"}
                  ariaLabel="${this.heading}, alert, Close"
                  @nys-click=${this._closeAlert}
                  style=${g(
      this.type === "emergency" ? "--_nys-button-outline-color: var(--nys-color-ink-reverse, var(--nys-color-white, #fff));" : void 0
    )}
                ></nys-button>` : ""}
          </div>`}
    `;
  }
};
Bs.styles = w(oi);
let ae = Bs;
xe([
  a({ type: String, reflect: !0 })
], ae.prototype, "id");
xe([
  a({ type: String })
], ae.prototype, "heading");
xe([
  a({ type: String })
], ae.prototype, "icon");
xe([
  a({ type: Boolean, reflect: !0 })
], ae.prototype, "dismissible");
xe([
  a({ type: Number, reflect: !0 })
], ae.prototype, "duration");
xe([
  a({ type: String })
], ae.prototype, "text");
xe([
  a({ type: String })
], ae.prototype, "primaryAction");
xe([
  a({ type: String })
], ae.prototype, "secondaryAction");
xe([
  a({ type: String })
], ae.prototype, "primaryLabel");
xe([
  a({ type: String })
], ae.prototype, "secondaryLabel");
xe([
  a({ type: String, reflect: !0 })
], ae.prototype, "type");
xe([
  $()
], ae.prototype, "_alertClosed");
xe([
  $()
], ae.prototype, "_slotHasContent");
customElements.get("nys-alert") || customElements.define("nys-alert", ae);
const ri = ":host{--_nys-avatar-border-radius: var(--nys-radius-round, 1776px);--_nys-avatar-size: var(--nys-avatar-size, var(--nys-font-size-6xl, 36px));--_nys-avatar-shape: var(--nys-radius-round, 1776px);--_nys-avatar-border-color: var(--nys-color-ink-reverse, #ffffff);--_nys-avatar-border-size: var(--nys-border-width-sm, 1px);--_nys-avatar-width: var(--nys-font-size-6xl, 36px);--_nys-avatar-color: var(--nys-color-theme, #154973);--_nys-avatar-background-color: var(--nys-color-theme-weaker, #eff6fb);--_nys-avatar-outline-color: var(--nys-color-focus, #004dd1);--_nys-avatar-outline-width: var(--nys-border-width-md, 2px);--_nys-avatar-outline-offset: var(--nys-space-2px, 2px)}.nys-avatar{display:inline-block}.nys-avatar__component{display:flex;justify-content:center;align-items:center;border-radius:var(--_nys-avatar-border-radius);width:var(--_nys-avatar-size);height:var(--_nys-avatar-size);font-size:var(--_nys-avatar-size);overflow:hidden;box-sizing:border-box;color:var(--_nys-avatar-color);background-color:var(--_nys-avatar-background-color);border:var(--_nys-avatar-border-size) solid var(--_nys-avatar-border-color);outline-offset:var(--_nys-avatar-outline-offset);transition:all .15s ease-in-out;-webkit-user-select:none;user-select:none}:host([interactive]:not([disabled])) button.nys-avatar__component{appearance:none;border:var(--_nys-avatar-border-size) solid var(--_nys-avatar-border-color);padding:0;cursor:pointer}:host([interactive]:not([disabled])) button.nys-avatar__component:hover{--_nys-avatar-background-color: var(--nys-color-theme-mid, #457aa5);--_nys-avatar-color: var(--nys-color-text-reverse, #ffffff)}:host([interactive]:not([disabled])) button.nys-avatar__component:active{--_nys-avatar-background-color: var(--nys-color-theme-strong, #0e324f);--_nys-avatar-color: var(--nys-color-text-reverse, #ffffff)}:host([interactive]:not([disabled])) button.nys-avatar__component:focus-visible{outline:solid var(--_nys-avatar-outline-width) var(--_nys-avatar-outline-color);outline-offset:var(--_nys-avatar-outline-offset)}:host([disabled]) .nys-avatar__component{--_nys-avatar-color: var(--nys-color-text-disabled, #bec0c1);--_nys-avatar-background-color: var(--nys-color-neutral-10, #f6f6f6);cursor:not-allowed}:host([disabled]) .nys-avatar__component:focus-within{outline:solid var(--_nys-avatar-outline-width) var(--_nys-avatar-outline-color)}div[part=nys-avatar__icon]{display:flex;align-items:center;justify-content:center}.nys-avatar__initials{display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:calc(var(--_nys-avatar-width) * .5);font-weight:700;text-transform:uppercase}.nys-avatar__image{width:100%;height:100%;object-fit:cover}.nys-avatar__icon{width:100%;height:100%;fill:currentcolor}";
var ii = Object.defineProperty, je = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && ii(e, t, o), o;
};
let ai = 0;
const Ns = class Ns extends m {
  constructor() {
    super(...arguments), this.id = "", this.ariaLabel = "", this.image = "", this.initials = "", this.icon = "", this.color = "", this.interactive = !1, this.disabled = !1, this.lazy = !1, this._slotHasContent = !1;
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-avatar-${Date.now()}-${ai++}`);
  }
  async _handleSlotChange() {
    const e = this.shadowRoot?.querySelector("slot");
    if (!e) {
      this._slotHasContent = !1;
      return;
    }
    await Promise.resolve();
    const t = e.assignedNodes({ flatten: !0 }).filter(
      (s) => s.nodeType === Node.ELEMENT_NODE || s.nodeType === Node.TEXT_NODE && s.textContent?.trim()
    );
    this._slotHasContent = t.length > 0;
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  get _cleanAriaLabel() {
    return (this.ariaLabel ?? "").replace(/[\s\u00a0]+/g, " ").trim();
  }
  _colorStyle() {
    if (!this.color) return "";
    const e = this.getContrastForeground() ?? "";
    return `--_nys-avatar-background-color: ${this.color}; --_nys-avatar-color: ${e}; color: ${e}`;
  }
  /**
   * Computes the appropriate foreground color (icon or initials)
   * based on the avatar's background color for sufficient contrast.
   *
   * @returns CSS color string for foreground
   */
  getContrastForeground() {
    const e = "var(--nys-color-ink, #000)", t = "var(--nys-color-ink-reverse, #fff)", s = "var(--nys-color-text, #000)", o = "var(--nys-color-text-reverse, #fff)";
    if (!this.color) return;
    const r = document.createElement("div");
    r.style.color = this.color, document.body.appendChild(r);
    const i = getComputedStyle(r).color;
    document.body.removeChild(r);
    const c = i.match(/\d+/g);
    if (!c) return;
    const d = Number(c[0]), u = Number(c[1]), f = Number(c[2]), b = (0.299 * d + 0.587 * u + 0.114 * f) / 255 < 0.5;
    return this.initials?.length > 0 ? b ? o : s : b ? t : e;
  }
  render() {
    const e = this._cleanAriaLabel, t = this._colorStyle(), s = this.image?.length > 0 ? h`<img
            part="nys-avatar__image"
            class="nys-avatar__image"
            src=${this.image}
            alt=${e || ""}
            loading=${this.lazy ? "lazy" : "eager"}
          />` : this.initials?.length > 0 ? h`<span
              part="nys-avatar__initials"
              class="nys-avatar__initials"
              aria-hidden="true"
              >${this.initials}</span
            >` : h`<div part="nys-avatar__icon">
              <slot @slotchange=${this._handleSlotChange}></slot>
              ${this._slotHasContent ? null : h`<nys-icon
                    label="nys-avatar__icon"
                    name=${this.icon?.length > 0 ? this.icon : "account_circle"}
                  ></nys-icon>`}
            </div>`, o = this.interactive ? h`<button
          part="nys-avatar"
          class="nys-avatar__component"
          style=${g(t || void 0)}
          aria-label=${g(e || void 0)}
          ?disabled=${this.disabled}
        >
          ${s}
        </button>` : h`<div
          part="nys-avatar"
          class="nys-avatar__component"
          style=${g(t || void 0)}
          role=${g(this.image ? void 0 : e ? "img" : void 0)}
          aria-label=${g(this.image ? void 0 : e || void 0)}
          aria-hidden=${g(this.image || e ? void 0 : "true")}
        >
          ${s}
        </div>`;
    return h`
      <div class="nys-avatar">
        <div class="nys-avatar__content">${o}</div>
      </div>
    `;
  }
};
Ns.styles = w(ri);
let me = Ns;
je([
  a({ type: String, reflect: !0 })
], me.prototype, "id");
je([
  a({ type: String })
], me.prototype, "ariaLabel");
je([
  a({ type: String })
], me.prototype, "image");
je([
  a({ type: String })
], me.prototype, "initials");
je([
  a({ type: String })
], me.prototype, "icon");
je([
  a({ type: String })
], me.prototype, "color");
je([
  a({ type: Boolean, reflect: !0 })
], me.prototype, "interactive");
je([
  a({ type: Boolean, reflect: !0 })
], me.prototype, "disabled");
je([
  a({ type: Boolean, reflect: !0 })
], me.prototype, "lazy");
je([
  $()
], me.prototype, "_slotHasContent");
customElements.get("nys-avatar") || customElements.define("nys-avatar", me);
const li = ".nys-backtotop{--_nys-button-border-radius: var(--nys-radius-round, 1776px);--_nys-button-padding--y: var(--nys-space-100, 8px);--_nys-button-padding--x: var(--nys-space-200, 16px);position:fixed;bottom:1rem;right:1rem;z-index:9999;display:none}.left{left:1rem;right:auto}.visible{display:inline-flex}";
var ci = Object.defineProperty, Ko = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && ci(e, t, o), o;
};
const qs = class qs extends m {
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.position = "right", this.visible = !1, this.isMobile = !1, this.forceVisible = !1, this._handleScroll = this._handleScroll.bind(this), this._handleResize = this._handleResize.bind(this), this.mediaQuery = window.matchMedia("(max-width: 480px)");
  }
  connectedCallback() {
    super.connectedCallback(), this.forceVisible = this.hasAttribute("visible"), window.addEventListener("scroll", this._handleScroll), this.mediaQuery.addEventListener("change", this._handleResize), this._handleResize();
  }
  disconnectedCallback() {
    window.removeEventListener("scroll", this._handleScroll), this.mediaQuery.removeEventListener("change", this._handleResize), super.disconnectedCallback();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _handleScroll() {
    if (this.forceVisible) return;
    const e = window.innerHeight, t = document.documentElement.scrollHeight;
    this.visible = t >= e * 4 && window.scrollY > e * 1.5;
  }
  _scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const e = () => {
      window.removeEventListener("scroll", e), this._moveFocusToTop();
    };
    window.addEventListener("scroll", e, { once: !0 });
  }
  _moveFocusToTop() {
    document.body.hasAttribute("tabindex") || document.body.setAttribute("tabindex", "-1"), document.body.focus();
  }
  _handleResize() {
    this.isMobile = this.mediaQuery.matches;
  }
  render() {
    const e = [
      "nys-backtotop",
      this.position,
      this.visible ? "visible" : ""
    ].filter(Boolean).join(" ");
    return h`<nys-button
      id="nys-backtotop"
      prefixIcon="chevron_up"
      variant="outline"
      label="Back to top"
      size="sm"
      class="${e}"
      ?circle=${this.isMobile}
      @nys-click=${this._scrollToTop}
    ></nys-button>`;
  }
};
qs.styles = w(li);
let vt = qs;
Ko([
  a({ type: String })
], vt.prototype, "position");
Ko([
  a({ type: Boolean, reflect: !0 })
], vt.prototype, "visible");
Ko([
  $()
], vt.prototype, "isMobile");
Ko([
  $()
], vt.prototype, "forceVisible");
customElements.get("nys-backtotop") || customElements.define("nys-backtotop", vt);
const di = '@charset "UTF-8";:host{--_nys-breadcrumbs-padding: var(--nys-space-150, 12px) var(--nys-space-250, 20px);--_nys-breadcrumbs-gap: var(--nys-space-100, 8px);--_nys-breadcrumbs-background: transparent;--_nys-breadcrumbitem-gap: var(--nys-space-50, 4px);--_nys-breadcrumbitem-color: var(--nys-color-text-weak, #4a4d4f);--_nys-breadcrumbitem-color--focus: var(--nys-color-focus, #004dd1);--_nys-breadcrumbitem-outline-width: var(--nys-border-width-md, 2px);--_nys-breadcrumbitem-outline-radius: var(--nys-radius-md, 4px);--_nys-breadcrumb-gap--ellipsis: var(--nys-space-100, 8px);--_nys-breadcrumb-color--ellipsis: var(--nys-color-text-weak, #4a4d4f);--_nys-breadcrumbs-font-size: var(--nys-font-size-ui-md, 16px);--_nys-breadcrumbs-font-weight: var(--nys-font-weight-semibold, 600);--_nys-breadcrumbs-font-weight--current: var(--nys-font-weight-regular, 400);--_nys-breadcrumbs-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-breadcrumbs-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-breadcrumbs-max-width: var(--nys-max-content-width, 1280px)}.nys-breadcrumbs{padding:var(--_nys-breadcrumbs-padding);font-family:var(--_nys-breadcrumbs-font-family);font-size:var(--_nys-breadcrumbs-font-size);font-weight:var(--_nys-breadcrumbs-font-weight);line-height:var(--_nys-breadcrumbs-line-height);background:var(--_nys-breadcrumbs-background);display:flex;justify-content:center}.nys-breadcrumbs.nys-breadcrumbs--background-bar{--_nys-breadcrumbs-background: var(--nys-color-theme-faint, #f7fafd)}.nys-breadcrumbs ol{padding:0;margin:0;display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap;gap:var(--_nys-breadcrumbs-gap);list-style:none;max-width:var(--_nys-breadcrumbs-max-width);width:100%}:host([size=sm]){--_nys-breadcrumbs-font-size: var(--nys-font-size-ui-sm, 14px)}:host([disabled]) .nys-breadcrumbitem a{cursor:not-allowed;--_nys-breadcrumbitem-color: var(--nys-color-text-disabled, #cec0c1)}:host([disabled]) .nys-breadcrumbitem a:hover{text-decoration:none}:host([disabled]) .nys-breadcrumbs__ellipsis .ellipsis-btn{cursor:not-allowed;opacity:.4;pointer-events:none}:host([disabled]) .nys-breadcrumbs__ellipsis .ellipsis-btn:hover{text-decoration:none}:host([disabled]) nys-icon{color:var(--nys-color-text-disabled, #cec0c1)}.nys-breadcrumbitem{padding:0;display:flex;align-items:center;gap:var(--_nys-breadcrumbitem-gap);color:var(--_nys-breadcrumbitem-color);font-weight:var(--_nys-breadcrumbs-font-weight--current);white-space:nowrap}.nys-breadcrumbitem.hide{display:none}.nys-breadcrumbitem a{text-decoration:none;color:var(--_nys-breadcrumbitem-color);font-weight:var(--_nys-breadcrumbs-font-weight)}.nys-breadcrumbitem a:hover{text-decoration-line:underline;text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:14%;text-underline-offset:auto}.nys-breadcrumbitem a:active{text-decoration-thickness:14%;--_nys-breadcrumbitem-color: var(--nys-color-text)}.nys-breadcrumbitem a:focus-visible{border-radius:var(--_nys-breadcrumbitem-outline-radius);outline:var(--_nys-breadcrumbitem-outline-width) solid var(--_nys-breadcrumbitem-color--focus);outline-offset:2px}.nys-breadcrumbs__ellipsis{display:flex;gap:var(--_nys-breadcrumb-gap--ellipsis);margin:0;align-items:center;color:var(--_nys-breadcrumb-color--ellipsis)}.nys-breadcrumbs__ellipsis .ellipsis-btn{border:none;padding:0;background-color:inherit;text-decoration:none;font-family:var(--_nys-breadcrumbs-font-family);font-size:var(--_nys-breadcrumbs-font-size);font-weight:var(--_nys-breadcrumbs-font-weight);line-height:var(--_nys-breadcrumbs-line-height);color:var(--_nys-breadcrumb-color--ellipsis);cursor:pointer}.nys-breadcrumbs__ellipsis .ellipsis-btn:hover{text-decoration-line:underline;text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:7%;text-underline-offset:auto}.nys-breadcrumbs__ellipsis .ellipsis-btn:active{text-decoration-thickness:14%}.nys-breadcrumbs__ellipsis .ellipsis-btn:focus-visible{border-radius:var(--_nys-breadcrumbitem-outline-radius);outline:var(--_nys-breadcrumbitem-outline-width) solid var(--_nys-breadcrumbitem-color--focus);outline-offset:2px}.nys-breadcrumbs__ellipsis nys-icon{margin-top:-3px}:host-context([dir=rtl]) nys-icon{transform:scaleX(-1)}@media(min-width:480px){:host{--_nys-breadcrumbs-padding: var(--nys-space-150, 12px) var(--nys-space-250, 20px)}}@media(min-width:768px){:host{--_nys-breadcrumbs-padding: var(--nys-space-150, 12px) var(--nys-space-400, 32px)}}@media(min-width:1024px){:host{--_nys-breadcrumbs-padding: var(--nys-space-150, 12px) var(--nys-space-400, 32px)}}@media(min-width:1280px){:host{--_nys-breadcrumbs-padding: var(--nys-space-150, 12px) var(--nys-space-800, 64px)}}';
var hi = Object.defineProperty, wt = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && hi(e, t, o), o;
};
let ui = 0;
const Fs = class Fs extends m {
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.ariaLabel = "", this.size = "md", this.backToParent = !1, this.collapsed = !1, this.backgroundBar = !1, this.disabled = !1, this._collapseThreshold = 5, this._manuallyExpanded = !1, this._mediaQuery = null, this._updateCollapseThreshold = () => {
      const t = this._mediaQuery?.matches ?? window.innerWidth < 768 ? 3 : 5;
      t !== this._collapseThreshold && (this._collapseThreshold = t, this._manuallyExpanded = !1, this._handleSlotChange());
    };
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-breadcrumbs-${Date.now()}-${ui++}`), this._mediaQuery = window.matchMedia("(max-width: 767px)"), this._mediaQuery.addEventListener("change", this._updateCollapseThreshold);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._mediaQuery?.removeEventListener(
      "change",
      this._updateCollapseThreshold
    ), this._mediaQuery = null;
  }
  firstUpdated() {
    this._handleSlotChange();
  }
  updated(e) {
    (e.has("collapsed") || e.has("backToParent") || e.has("disabled")) && this._handleSlotChange();
  }
  _getSlottedOl() {
    return (this.shadowRoot?.querySelector(
      "slot"
    )?.assignedElements({ flatten: !0 }) ?? []).find((s) => s.tagName === "OL") ?? null;
  }
  _getSlottedItems() {
    const e = this._getSlottedOl();
    return e ? Array.from(e.children).filter(
      (t) => t.tagName === "LI"
    ) : [];
  }
  _getAnchor(e) {
    return e.querySelector("a");
  }
  _isCurrentPage(e) {
    return !this._getAnchor(e);
  }
  _createBackToParentElement(e) {
    const t = this._getAnchor(e), s = t?.getAttribute("href") ?? "", o = t?.textContent?.trim() ?? e.textContent?.trim(), r = document.createElement("li");
    r.className = "nys-breadcrumbitem";
    const i = document.createElement("nys-icon");
    i.setAttribute("name", "arrow_back"), i.setAttribute("size", "16");
    const c = document.createElement("a");
    return this.disabled || (c.href = s), c.textContent = o, this.disabled && c.setAttribute("aria-disabled", "true"), r.appendChild(i), r.appendChild(c), r;
  }
  _createCrumbElement(e, t) {
    const s = this._getAnchor(e), o = s?.getAttribute("href") ?? "", r = s?.textContent?.trim() ?? e.textContent?.trim() ?? "", i = document.createElement("li");
    if (i.className = "nys-breadcrumbitem", t)
      return i.textContent = r, i;
    const c = document.createElement("a");
    this.disabled || (c.href = o), c.textContent = r, this.disabled && c.setAttribute("aria-disabled", "true");
    const d = document.createElement("nys-icon");
    return d.setAttribute("name", "chevron_right"), d.setAttribute("size", "14"), i.appendChild(c), i.appendChild(d), i;
  }
  /**
   * Main logic for cloning and handling user slots.
   * New <ol>, <li>, and <a> tags are created and rendered out as crumbs for the breadcrumbs trail.
   */
  _handleSlotChange() {
    const e = this._mediaQuery?.matches ?? window.innerWidth < 768, t = this.shadowRoot?.getElementById("crumb-list");
    if (!t) return;
    const s = this._getSlottedItems();
    if (s.length === 0) return;
    t.innerHTML = "";
    const o = (y = 0) => {
      const b = s[y].cloneNode(!0), E = this._createBackToParentElement(b);
      t.appendChild(E);
    };
    if (s.length === 1) {
      o();
      return;
    }
    if (e && this.backToParent) {
      const y = this._isCurrentPage(s[s.length - 1]);
      o(y ? s.length - 2 : s.length - 1);
      return;
    }
    const r = !this._manuallyExpanded && s.length > this._collapseThreshold, i = this.collapsed || r, c = s[s.length - 1], d = this._isCurrentPage(c), u = Math.min(1, s.length - 1), f = Math.min(
      d ? 2 : 1,
      s.length - u
    );
    s.forEach((y, b) => {
      const E = b < u, Y = b >= s.length - f, he = E || Y, _e = i && !he, se = this._createCrumbElement(y, this._isCurrentPage(y));
      if (se.setAttribute("data-cloned", "true"), _e && se.classList.add("hide"), he || se.classList.add("intermediate"), t.appendChild(se), b === u - 1 && i && s.length > 2) {
        const De = document.createElement("li");
        De.classList.add("nys-breadcrumbs__ellipsis");
        const ke = document.createElement("a");
        ke.classList.add("ellipsis-btn"), ke.setAttribute("aria-label", "Show more links"), ke.setAttribute("role", "button"), ke.setAttribute("href", "#"), ke.textContent = "…";
        const ne = (R) => {
          R.preventDefault(), this._manuallyExpanded = !0, this.collapsed = !1, this._handleSlotChange(), this._dispatchExpandEvent(), this._moveFocusToFirstExpandCrumb();
        };
        ke.addEventListener("click", ne), ke.addEventListener("keydown", (R) => {
          R.key === " " && ne(R);
        });
        const Ce = document.createElement("nys-icon");
        Ce.setAttribute("name", "chevron_right"), Ce.setAttribute("size", "14"), De.appendChild(ke), De.appendChild(Ce), t.appendChild(De);
      }
    });
  }
  _moveFocusToFirstExpandCrumb() {
    setTimeout(() => {
      this.shadowRoot?.getElementById("crumb-list")?.querySelector("li[data-cloned].intermediate")?.querySelector("a")?.focus();
    }, 0);
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _dispatchExpandEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-expand", {
        detail: { id: this.id },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return h`<nav
      class="nys-breadcrumbs ${this.backgroundBar ? "nys-breadcrumbs--background-bar" : ""}"
      aria-label=${this.ariaLabel || "path to this page"}
    >
      <ol id="crumb-list"></ol>
      <slot style="display: none;" @slotchange=${this._handleSlotChange}></slot>
    </nav>`;
  }
};
Fs.styles = w(di);
let Ue = Fs;
wt([
  a({ type: String, reflect: !0 })
], Ue.prototype, "id");
wt([
  a({ type: String })
], Ue.prototype, "ariaLabel");
wt([
  a({ type: String, reflect: !0 })
], Ue.prototype, "size");
wt([
  a({ type: Boolean })
], Ue.prototype, "backToParent");
wt([
  a({ type: Boolean })
], Ue.prototype, "collapsed");
wt([
  a({ type: Boolean })
], Ue.prototype, "backgroundBar");
wt([
  a({ type: Boolean, reflect: !0 })
], Ue.prototype, "disabled");
customElements.get("nys-breadcrumbs") || customElements.define("nys-breadcrumbs", Ue);
const pi = ':host{--_nys-button-width: fit-content;--_nys-button-height: var(--nys-size-600, 48px);--_nys-button-border-radius: var(--nys-radius-xl, 12px);--_nys-button-padding--y: calc( var(--nys-space-150, 12px) - var(--nys-border-width-md, 2px) );--_nys-button-cursor: pointer;--_nys-button-padding--x: calc( var(--nys-space-250, 20px) - var(--nys-border-width-md, 2px) );--_nys-button-gap: var(--nys-space-100, 8px);--_nys-button-justify-content: center;--_nys-button-border-style: solid;--_nys-button-border-width: var(--nys-border-width-md, 2px);--_nys-button-outline-width: var(--nys-border-width-md, 2px);--_nys-button-outline-offset: var(--nys-space-2px, 2px);--_nys-button-outline-color: var(--nys-color-focus, #004dd1);--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-theme, #154973) );--_nys-button-color: var( --nys-button-color, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-theme-strong, #0e324f) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-theme-stronger, #081b2b) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00);--_nys-button-font-size: var(--nys-font-size-ui-md, 16px);--_nys-button-font-weight: var(--nys-font-weight-semibold, 600);--_nys-button-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-button-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-button-text-decoration: none;display:inline-flex;width:var(--_nys-button-width);vertical-align:middle}:host([size=sm]){--_nys-button-height: var(--nys-size-500, 40px);--_nys-button-padding--y: calc( var(--nys-space-100, 8px) - var(--nys-border-width-md, 2px) );--_nys-button-padding--x: calc( var(--nys-space-200, 16px) - var(--nys-border-width-md, 2px) )}:host([size=lg]){--_nys-button-height: var(--nys-size-700, 56px);--_nys-button-padding--y: calc( var(--nys-space-200, 16px) - var(--nys-border-width-md, 2px) );--_nys-button-padding--x: calc( var(--nys-space-300, 24px) - var(--nys-border-width-md, 2px) )}:host([fullWidth]){width:100%}:host([fullWidth]) .nys-button__linkwrapper{width:100%}:host([fullWidth]) .nys-button{width:100%}:host([variant=outline]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-surface, #ffffff) );--_nys-button-color: var(--nys-button-color, var(--nys-color-theme, #154973));--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-theme, #154973) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-theme-weaker, #eff6fb) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-theme, #154973) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-theme, #154973) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-theme-weak, #cddde9) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-theme, #154973) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-theme, #154973) );--_nys-button-background-color--disabled: var(--nys-color-surface, #ffffff);--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-button-border-color--disabled: var(--nys-color-neutral-100, #d0d0ce)}:host([variant=text]){--_nys-button-height: fit-content;--_nys-button-border-radius: var(--nys-radius-md, 4px);--_nys-button-padding--y: var(--nys-space-2px, 2px);--_nys-button-padding--x: 0;--_nys-button-border-width: 0px;--_nys-button-text-decoration: underline;--_nys-button-gap: var(--nys-space-50, 4px);--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-color: var(--nys-button-color, var(--nys-color-link, #004dd1));--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-link-strong, #003ba1) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-link-strongest, #002971) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-transparent, #ffffff00 );--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00)}:host([variant=ghost]){--_nys-button-gap: var(--nys-space-50, 4px);--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-color: var(--nys-button-color, var(--nys-color-text, #1b1b1b));--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-black-transparent-100, #0000001a) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text, #1b1b1b) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-black-transparent-200, #00000033) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text, #1b1b1b) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-transparent, #ffffff00 );--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00)}:host([variant=filled][inverted]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-surface, #ffffff) );--_nys-button-color: var(--nys-button-color, var(--nys-color-text, #1b1b1b));--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00);--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-neutral-100, #d0d0ce) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text, #1b1b1b) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-neutral-300, #a7a9ab) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text, #1b1b1b) );--_nys-button-background-color--disabled: var(--nys-color-text, #1b1b1b);--_nys-button-color--disabled: var(--nys-color-text-disabled, #62666a)}:host([variant=outline][inverted]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-surface-reverse, #1b1b1b) );--_nys-button-color: var( --nys-button-color, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-ink-reverse, #ffffff) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-surface-reverse, #1b1b1b) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text-reverse-weak, #d0d0ce) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-neutral-100, #d0d0ce) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-surface-reverse, #1b1b1b) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text-reverse-weaker, #bec0c1) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-neutral-300, #a7a9ab) );--_nys-button-background-color--disabled: var( --nys-color-surface-reverse, #1b1b1b );--_nys-button-color--disabled: var( --nys-color-text-reverse-disabled, #62666a );--_nys-button-border-color--disabled: var(--nys-color-neutral-600, #62666a)}:host([variant=text][inverted]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-color: var( --nys-button-color, var(--nys-color-link-reverse, #a7a9ab) );--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-link-reverse-strong, #ededed) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-reverse-strongest, #ffffff) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-transparent, #ffffff00 );--_nys-button-color--disabled: var( --nys-color-text-reverse-disabled, #62666a );--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00)}:host([variant=ghost][inverted]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-color: var( --nys-button-color, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-white-transparent-200, #ffffff33) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-white-transparent-300, #ffffff4d) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-transparent, #ffffff00 );--_nys-button-color--disabled: var(--nys-color-text-disabled, #62666a);--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00)}:host([inverted]){--_nys-button-outline-color: var(--nys-color-focus-reverse, #7aa5e7)}:host([circle]){--_nys-button-width: var(--_nys-button-height);--_nys-button-border-radius: var(--nys-radius-round, 1776px);--_nys-button-padding--y: 0;--_nys-button-padding--x: 0}:host([circle]) .nys-button{max-width:var(--_nys-button-height);max-height:var(--_nys-button-height)}.nys-button{width:var(--_nys-button-width);min-height:var(--_nys-button-height);border-radius:var(--_nys-button-border-radius);padding:var(--_nys-button-padding--y) var(--_nys-button-padding--x);display:flex;align-items:center;justify-content:var(--_nys-button-justify-content);gap:var(--_nys-button-gap);font-family:var(--_nys-button-font-family);font-size:var(--_nys-button-font-size);font-weight:var(--_nys-button-font-weight);line-height:var(--_nys-button-line-height);text-decoration:var(--_nys-button-text-decoration);box-sizing:border-box;background-color:var(--_nys-button-background-color);color:var(--_nys-button-color);border-color:var(--_nys-button-border-color);border-style:var(--_nys-button-border-style);border-width:var(--_nys-button-border-width);cursor:var(--_nys-button-cursor)}.nys-button:hover{background-color:var(--_nys-button-background-color--hover);color:var(--_nys-button-color--hover);border-color:var(--_nys-button-border-color--hover)}.nys-button:active,.nys-button.active{background-color:var(--_nys-button-background-color--active);color:var(--_nys-button-color--active);border-color:var(--_nys-button-border-color--active)}.nys-button:disabled,a[disabled]{background-color:var(--_nys-button-background-color--disabled);color:var(--_nys-button-color--disabled);border-color:var(--_nys-button-border-color--disabled);--_nys-button-cursor: not-allowed}a[disabled]{pointer-events:none}.nys-button:focus-visible{outline-offset:var(--_nys-button-outline-offset);outline:solid var(--_nys-button-outline-width) var(--_nys-button-outline-color)}.nys-button__text{display:flex;align-items:center;-webkit-user-select:none;user-select:none}';
var yi = Object.defineProperty, z = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && yi(e, t, o), o;
};
let fi = 0;
const oo = class oo extends m {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.size = "md", this.fullWidth = !1, this.variant = "filled", this.inverted = !1, this.label = "", this.ariaLabel = "", this.ariaControls = "", this.prefixIcon = "", this.suffixIcon = "", this.circle = !1, this.icon = "", this.disabled = !1, this.form = null, this.value = "", this.ariaDescription = "", this.type = "button", this.onClick = null, this.href = "", this.target = "_self", this._hasPrefixSlot = !1, this._hasSuffixSlot = !1, this._internals = this.attachInternals();
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = this._generateUniqueId());
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _generateUniqueId() {
    return `nys-button-${Date.now()}-${fi++}`;
  }
  _onPrefixSlotChange(e) {
    const t = e.target;
    this._hasPrefixSlot = t.assignedElements({ flatten: !0 }).length > 0;
  }
  _onSuffixSlotChange(e) {
    const t = e.target;
    this._hasSuffixSlot = t.assignedElements({ flatten: !0 }).length > 0;
  }
  _manageFormAction() {
    typeof this.onClick == "function" && this.onClick !== null && this.onClick(new Event("click"));
    const e = this._internals.form;
    if (e)
      switch (this.type) {
        case "submit":
          e.requestSubmit();
          break;
        case "reset":
          e.reset();
          break;
      }
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _handleFocus() {
    this.dispatchEvent(
      new Event("nys-focus", { bubbles: !0, composed: !0 })
    );
  }
  _handleBlur() {
    this.shadowRoot?.querySelector(".nys-button")?.classList.remove("active-focus"), this.dispatchEvent(
      new Event("nys-blur", { bubbles: !0, composed: !0 })
    );
  }
  _handleClick(e) {
    if (this.disabled) {
      e.preventDefault();
      return;
    }
    this._manageFormAction(), this.dispatchEvent(
      new Event("nys-click", { bubbles: !0, composed: !0 })
    );
  }
  _handleKeydown(e) {
    if (e.code === "Space" || e.code === "Enter" || e.key === " " || e.key === "Enter") {
      if (this.disabled) return;
      e.preventDefault();
      const t = this.renderRoot.querySelector(".nys-button");
      if (t?.classList.add("active"), setTimeout(() => t?.classList.remove("active"), 150), this.href) {
        const s = this.renderRoot.querySelector(
          "a.nys-button"
        );
        s && s.click();
      } else
        this._handleAnyAttributeFunction(), this._handleClick(e);
    }
  }
  _handleKeyup(e) {
    (e.code === "Space" || e.code === "Enter" || e.key === " " || e.key === "Enter") && this.renderRoot.querySelector(".nys-button")?.classList.remove("active");
  }
  /**
   * A Solution to the Vanilla JS & Native HTML keydown:
   *
   * Handles inline onClick attributes set as strings in vanilla HTML
   * (e.g. <nys-button onClick="doSomething()">).
   *
   * When onClick is set this way, it is a DOM attribute (not a property)
   * so this.onClick remains null. Native clicks execute the attribute
   * automatically, but keydown events do not, so we invoke it manually here.
   */
  _handleAnyAttributeFunction() {
    const e = this.getAttribute("onClick");
    e && new Function("return " + e)();
  }
  focus(e) {
    const t = this.renderRoot.querySelector(
      this.href ? "a.nys-button" : "button.nys-button"
    );
    t ? t.focus(e) : super.focus(e);
  }
  render() {
    return h`
      ${this.href ? h`
            <div class="nys-button__linkwrapper">
              <a
                class="nys-button"
                name=${g(this.name ? this.name : void 0)}
                ?disabled=${this.disabled}
                aria-disabled="${this.disabled ? "true" : "false"}"
                value=${g(this.value ? this.value : void 0)}
                href=${this.href}
                target=${this.target}
                @click=${this._handleClick}
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
                @keydown="${this._handleKeydown}"
                @keyup="${this._handleKeyup}"
                tabindex="${this.disabled ? -1 : 0}"
                aria-label=${g(
      this.ariaLabel || this.label || (this.circle ? this.icon : null) || "button"
    )}
                aria-description=${g(this.ariaDescription || void 0)}
              >
                <slot
                  name="prefix-icon"
                  @slotchange=${this._onPrefixSlotChange}
                  ?hidden=${!this.prefixIcon && !this._hasPrefixSlot}
                >
                  ${this.prefixIcon ? h`<nys-icon
                        size="16"
                        name=${this.prefixIcon}
                      ></nys-icon>` : ""}
                </slot>
                ${this.label && !this.circle ? h`<div class="nys-button__text">${this.label}</div>` : ""}
                <slot
                  name="suffix-icon"
                  @slotchange=${this._onSuffixSlotChange}
                  ?hidden=${!this.suffixIcon && !this._hasSuffixSlot}
                >
                  ${this.suffixIcon ? h`<nys-icon
                        size="16"
                        name=${this.suffixIcon}
                      ></nys-icon>` : ""}
                </slot>
                ${this.circle && this.icon ? h`<slot name="circle-icon"
                      ><nys-icon
                        size=${this.size === "sm" ? "24" : this.size === "lg" ? "40" : "32"}
                        name=${this.icon}
                      ></nys-icon
                    ></slot>` : ""}
              </a>
            </div>
          ` : h`
            <button
              class="nys-button"
              name=${g(this.name ? this.name : void 0)}
              ?disabled=${this.disabled}
              aria-disabled="${this.disabled ? "true" : "false"}"
              form=${g(this.form || void 0)}
              value=${g(this.value ? this.value : void 0)}
              type=${this.type}
              aria-controls=${g(this.ariaControls || void 0)}
              @click=${this._handleClick}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @keydown="${this._handleKeydown}"
              @keyup="${this._handleKeyup}"
              tabindex="${this.disabled ? -1 : 0}"
              aria-label=${g(
      this.ariaLabel || this.label || (this.circle ? this.icon : null) || this.prefixIcon || this.suffixIcon || "button"
    )}
              aria-description=${g(this.ariaDescription || void 0)}
              role="button"
            >
              <slot
                name="prefix-icon"
                @slotchange=${this._onPrefixSlotChange}
                ?hidden=${!this.prefixIcon && !this._hasPrefixSlot}
              >
                ${this.prefixIcon ? h`<nys-icon
                      size="16"
                      name=${this.prefixIcon}
                    ></nys-icon>` : ""}
              </slot>
              ${this.label && !this.circle ? h`<div class="nys-button__text">${this.label}</div>` : ""}
              <slot
                name="suffix-icon"
                @slotchange=${this._onSuffixSlotChange}
                ?hidden=${!this.suffixIcon && !this._hasSuffixSlot}
              >
                ${this.suffixIcon ? h`<nys-icon
                      size="16"
                      name=${this.suffixIcon}
                    ></nys-icon>` : ""}
              </slot>
              ${this.circle && this.icon ? h`<slot name="circle-icon">
                    <nys-icon
                      size=${this.size === "sm" ? "24" : this.size === "lg" ? "40" : "32"}
                      name=${this.icon}
                    ></nys-icon>
                  </slot>` : ""}
            </button>
          `}
    `;
  }
};
oo.styles = w(pi), oo.shadowRootOptions = {
  ...m.shadowRootOptions,
  delegatesFocus: !0
}, oo.formAssociated = !0;
let L = oo;
z([
  a({ type: String, reflect: !0 })
], L.prototype, "id");
z([
  a({ type: String, reflect: !0 })
], L.prototype, "name");
z([
  a({ type: String, reflect: !0 })
], L.prototype, "size");
z([
  a({ type: Boolean, reflect: !0 })
], L.prototype, "fullWidth");
z([
  a({ type: String, reflect: !0 })
], L.prototype, "variant");
z([
  a({ type: Boolean, reflect: !0 })
], L.prototype, "inverted");
z([
  a({ type: String })
], L.prototype, "label");
z([
  a({ type: String })
], L.prototype, "ariaLabel");
z([
  a({ type: String })
], L.prototype, "ariaControls");
z([
  a({ type: String })
], L.prototype, "prefixIcon");
z([
  a({ type: String })
], L.prototype, "suffixIcon");
z([
  a({ type: Boolean, reflect: !0 })
], L.prototype, "circle");
z([
  a({ type: String })
], L.prototype, "icon");
z([
  a({ type: Boolean, reflect: !0 })
], L.prototype, "disabled");
z([
  a({ type: String, reflect: !0 })
], L.prototype, "form");
z([
  a({ type: String })
], L.prototype, "value");
z([
  a({ type: String })
], L.prototype, "ariaDescription");
z([
  a({ type: String, reflect: !0 })
], L.prototype, "type");
z([
  a({ attribute: !1 })
], L.prototype, "onClick");
z([
  a({ type: String })
], L.prototype, "href");
z([
  a({ type: String, reflect: !0 })
], L.prototype, "target");
z([
  $()
], L.prototype, "_hasPrefixSlot");
z([
  $()
], L.prototype, "_hasSuffixSlot");
customElements.get("nys-button") || customElements.define("nys-button", L);
const bi = ':host{--_nys-badge-width: fit-content;--_nys-badge-height: var(--nys-size-600, 48px);--_nys-badge-radius: var(--nys-radius-round, 1776px);--_nys-badge-padding: var(--nys-space-2-px, 2px) var(--nys-space-100, 8px);--_nys-badge-gap: var(--nys-space-50, 4px);--_nys-badge-color: var(--nys-color-ink, #000000);--_nys-badge-background-color: var(--nys-color-base-weak, #f6f6f6);--_nys-badge-border-color: var(--nys-color-base, #62666a);--_nys-badge-border-width: var(--nys-border-width-sm, 1px);--_nys-badge-font-size: var(--nys-font-size-ui-sm, 14px);--_nys-badge-font-weight: var(--nys-font-weight-semibold, 600);--_nys-badge-line-height: var(--nys-font-lineheight-ui-sm, 24px);--_nys-badge-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-badge-prefix-font-weight: var(--nys-font-weight-regular, 400)}:host([size=sm]){--_nys-badge-font-size: var(--nys-font-size-ui-xs, 12px);--_nys-badge-line-height: var(--nys-font-lineheight-ui-xs, 20px)}:host([intent=neutral]){--_nys-badge-background-color: var(--nys-color-base-weak, #f6f6f6);--_nys-badge-border-color: var(--nys-color-base, #62666a)}:host([intent=error]){--_nys-badge-background-color: var(--nys-color-error-weak, #f7eaea);--_nys-badge-border-color: var(--nys-color-error-strong, #721c1c)}:host([intent=success]){--_nys-badge-background-color: var(--nys-color-success-weak, #e8f1ea);--_nys-badge-border-color: var(--nys-color-success-strong, #0f3d18)}:host([intent=warning]){--_nys-badge-background-color: var(--nys-color-warning-weak, #fefae5);--_nys-badge-border-color: var(--nys-color-warning-strong, #6a5700)}:host([variant=strong]){--_nys-badge-background-color: var(--_nys-badge-border-color);--_nys-badge-color: var(--nys-color-white, #ffffff)}:host([variant=strong]) .nys-badge{--nys-icon-color: var(--nys-color-white, #ffffff)}:host([variant=strong][intent=success]){--_nys-badge-border-color: var(--nys-color-success, #1e752e)}:host([variant=strong][intent=warning]){--_nys-badge-border-color: var(--nys-color-warning, #face00);--_nys-badge-color: var(--nys-color-ink, #000000)}:host([variant=strong][intent=warning]) .nys-badge{--nys-icon-color: var(--nys-color-ink, #000000)}.nys-badge{position:relative;display:flex;width:fit-content;align-items:center;justify-content:center;gap:var(--_nys-badge-gap);padding:var(--_nys-badge-padding);border:var(--_nys-badge-border-width) solid var(--_nys-badge-border-color);background-color:var(--_nys-badge-background-color);color:var(--_nys-badge-color);border-radius:var(--_nys-badge-radius);font-family:var(--_nys-badge-font-family);font-size:var(--_nys-badge-font-size);font-weight:var(--_nys-badge-font-weight);line-height:var(--_nys-badge-line-height);cursor:default;--nys-icon-color: var(--_nys-badge-border-color)}.nys-badge__prefix{font-weight:var(--_nys-badge-prefix-font-weight)}.nys-badge__sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}';
var vi = Object.defineProperty, _i = Object.getOwnPropertyDescriptor, We = (n, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? _i(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && vi(e, t, o), o;
};
let gi = 0;
var st;
const Re = (st = class extends m {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this.size = "md", this.intent = "neutral", this.prefixLabel = "", this.label = "", this.srText = "", this.variant = "", this._prefixIcon = "", this._suffixIcon = "";
  }
  get prefixIcon() {
    return this._prefixIcon;
  }
  set prefixIcon(e) {
    e === "" || e === null ? this._prefixIcon = !0 : e === "false" || e === !1 ? this._prefixIcon = "" : this._prefixIcon = e;
  }
  get suffixIcon() {
    return this._suffixIcon;
  }
  set suffixIcon(e) {
    e === "" || e === null ? this._suffixIcon = !0 : e === "false" || e === !1 ? this._suffixIcon = "" : this._suffixIcon = e;
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-badge-${Date.now()}-${gi++}`);
    const e = this.getAttribute("prefixicon");
    e !== null && this.prefixIcon === "" && (this.prefixIcon = e);
    const t = this.getAttribute("suffixicon");
    t !== null && this.suffixIcon === "" && (this.suffixIcon = t);
  }
  /**
   * Resolves which icon should be rendered.
   * @param icon The icon property value (string or boolean)
   * @returns Icon name or null if no icon should be rendered
   */
  resolveIcon(e) {
    return e === !0 ? st.DEFAULT_ICONS[this.intent] ?? "info" : typeof e == "string" && e.trim() !== "" ? e : null;
  }
  render() {
    const e = this.resolveIcon(this.prefixIcon), t = this.resolveIcon(this.suffixIcon);
    return h`
      <mark class="nys-badge">
        ${e ? h`<nys-icon size="16" name=${e}></nys-icon>` : ""}
        ${this.prefixLabel ? h`<div class="nys-badge__prefix">${this.prefixLabel}</div>` : ""}
        <div class="nys-badge__label">
          ${this.label}
          ${this.srText ? h`<span class="nys-badge__sr-only"
                >${": " + this.srText}</span
              >` : ""}
        </div>

        ${t ? h`<nys-icon size="16" name=${t}></nys-icon>` : ""}
      </mark>
    `;
  }
}, st.styles = w(bi), st.DEFAULT_ICONS = {
  neutral: "info",
  error: "emergency_home",
  success: "check_circle",
  warning: "warning"
}, st);
We([
  a({ type: String, reflect: !0 })
], Re.prototype, "id", 2);
We([
  a({ type: String, reflect: !0 })
], Re.prototype, "name", 2);
We([
  a({ type: String, reflect: !0 })
], Re.prototype, "size", 2);
We([
  a({ type: String, reflect: !0 })
], Re.prototype, "intent", 2);
We([
  a({ type: String })
], Re.prototype, "prefixLabel", 2);
We([
  a({ type: String })
], Re.prototype, "label", 2);
We([
  a({ type: String })
], Re.prototype, "srText", 2);
We([
  a({ type: String, reflect: !0 })
], Re.prototype, "variant", 2);
We([
  a({ type: String, attribute: "prefixicon" })
], Re.prototype, "prefixIcon", 1);
We([
  a({ type: String, attribute: "suffixicon" })
], Re.prototype, "suffixIcon", 1);
let mi = Re;
customElements.get("nys-badge") || customElements.define("nys-badge", mi);
const hr = ':host{--_nys-checkbox-size: var(--nys-size-400, 32px);--_nys-checkbox-border-radius: var(--nys-radius-md, 4px);--_nys-checkbox-border-width: var(--nys-border-width-md, 2px);--_nys-checkbox-outline-color: var(--nys-color-focus, #004dd1);--_nys-checkbox-outline-width: var(--nys-border-width-md, 2px);--_nys-checkbox-outline-offset: var(--nys-space-2px, 2px);--_nys-checkbox-gap: var(--nys-space-150, 12px);--_nys-checkboxgroup-gap: var(--nys-space-200, 16px);--_nys-checkbox-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-checkbox-font-size: var(--nys-font-size-ui-md, 16px);--_nys-checkbox-font-weight: var(--nys-font-weight-regular, 400);--_nys-checkbox-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-checkbox-color: var( --nys-color-ink, var(--nys-color-neutral-900, #1b1b1b) );--_nys-checkbox-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-checkbox-border-color: var(--nys-color-neutral-600, #62666a);--_nys-checkbox-background-color--hover: var(--nys-color-neutral-50, #ededed);--_nys-checkbox-border-color--hover: var(--nys-color-ink, #1b1b1b);--_nys-checkbox-background-color--active: var( --nys-color-neutral-100, #d0d0ce );--_nys-checkbox-border-color--active: var(--nys-color-ink, #1b1b1b);--_nys-checkbox-background-color--checked: var(--nys-color-theme, #154973);--_nys-checkbox-border-color--checked: var(--nys-color-theme, #154973);--_nys-checkbox-background-color--checked--hover: var( --nys-color-theme-strong, #0e324f );--_nys-checkbox-border-color--checked--hover: var( --nys-color-theme-strong, #0e324f );--_nys-checkbox-background-color--checked--active: var( --nys-color-theme-stronger, #081b2b );--_nys-checkbox-border-color--checked--active: var( --nys-color-theme-stronger, #081b2b );--_nys-checkbox-background-color--disabled: var( --nys-color-ink-reverse, #f0f0f0 );--_nys-checkbox-border-color--disabled: var(--nys-color-neutral-400, #757575);--_nys-checkbox-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-checkbox-background-color--checked--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-checkbox-border-color--checked--disabled: var( --nys-color-neutral-100, #d0d0ce )}:host([size=sm]){--_nys-checkbox-size: var(--nys-size-300, 24px);--_nys-checkbox-border-radius: var(--nys-radius-sm, 2px);--_nys-checkboxgroup-gap: var(--nys-space-100, 8px);--_nys-checkbox-gap: var(--nys-space-100, 8px)}:host([size=md]){--_nys-checkbox-size: var(--nys-size-400, 32px);--_nys-checkbox-border-radius: var(--nys-radius-md, 4px)}:host([tile]){--_nys-checkbox-border-width--tile: var(--nys-border-width-sm, 1px);--_nys-checkbox-border-radius--tile: var(--nys-radius-md, 4px);--_nys-checkbox-border-color--tile: var(--nys-color-neutral-100, #d0d0ce);--_nys-checkbox-background-color--tile: var(--nys-color-ink-reverse, #ffffff);--_nys-checkbox-padding--x--tile: var(--nys-space-250, 20px);--_nys-checkbox-padding--y--tile: var(--nys-space-200, 16px);--_nys-checkbox-border-color--tile--hover: var( --nys-color-neutral-700, #4a4d4f );--_nys-checkbox-background-color--tile--hover: var( --nys-color-ink-reverse, #ffffff );--_nys-checkbox-border-color--tile--active: var( --nys-color-neutral-900, #1b1b1b );--_nys-checkbox-background-color--tile--active: var( --nys-color-ink-reverse, #ffffff );--_nys-checkbox-border-color--tile--checked: var( --nys-color-theme-mid, #457aa5 );--_nys-checkbox-background-color--tile--checked: var( --nys-color-theme-faint, #f7fafd );--_nys-checkbox-background-color--tile--disabled: var( --nys-color-ink-reverse, #f0f0f0 );--_nys-checkbox-border-color--tile--disabled: var( --nys-color-neutral-100, #d0d0ce )}:host([tile][size=sm]){--_nys-checkbox-padding--x--tile: var(--nys-space-200, 16px);--_nys-checkbox-padding--y--tile: var(--nys-space-150, 12px)}:host([tile][showError]){--_nys-checkbox-border-color--tile: var(--nys-color-danger, #b52c2c);--_nys-checkbox-border-color--tile--hover: var(--nys-color-danger, #b52c2c);--_nys-checkbox-border-color--tile--active: var(--nys-color-danger, #b52c2c);--_nys-checkbox-border-color--tile--checked: var(--nys-color-danger, #b52c2c)}#single-error-message{--_nys-errormessage-margin-top: var(--nys-space-50, 4px)}.nys-checkboxgroup{display:flex;flex-direction:column;gap:var(--nys-space-200, 16px);font-family:var(--_nys-checkbox-font-family);font-size:var(--_nys-checkbox-font-size);line-height:var(--_nys-checkbox-line-height)}.nys-checkboxgroup__content{display:flex;flex-direction:column;gap:var(--_nys-checkboxgroup-gap)}.nys-checkbox{display:flex;flex-direction:column;border-radius:var(--_nys-checkbox-border-radius--tile);border:var(--_nys-checkbox-border-width--tile) solid var(--_nys-checkbox-border-color--tile);background:var(--_nys-checkbox-background-color--tile);padding:var(--_nys-checkbox-padding--y--tile) var(--_nys-checkbox-padding--x--tile)}.nys-checkbox .nys-checkbox__main-container{display:flex;font-family:var(--_nys-checkbox-font-family);font-size:var(--_nys-checkbox-font-size);line-height:var(--_nys-checkbox-line-height);align-items:center;gap:var(--_nys-checkbox-gap)}.nys-checkbox .nys-checkbox__main-container.has-description{align-items:flex-start}.nys-checkbox__checkbox-wrapper{position:relative;display:flex;justify-content:center;align-items:center;max-height:var(--_nys-checkbox-size)}.nys-checkbox__icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;color:var(--nys-color-ink-reverse, #ffffff)}.nys-checkbox__checkbox{appearance:none;background-repeat:no-repeat;background-position:center;width:var(--_nys-checkbox-size);min-width:var(--_nys-checkbox-size);min-height:var(--_nys-checkbox-size);height:var(--_nys-checkbox-size);max-width:var(--_nys-checkbox-size);max-height:var(--_nys-checkbox-size);border:solid var(--_nys-checkbox-border-width) var(--_nys-checkbox-border-color);background-color:var(--_nys-checkbox-background-color);border-radius:var(--_nys-checkbox-border-radius);outline-offset:var(--_nys-checkbox-outline-offset);outline:none;margin:0}.nys-checkbox:hover,.nys-checkbox:hover *{cursor:pointer}.nys-checkbox__checkbox:not(:disabled):checked{background-color:var(--_nys-checkbox-background-color--checked);border-color:var(--_nys-checkbox-border-color--checked)}:host([tile]) .nys-checkbox:has(.nys-checkbox__checkbox:not(:disabled):checked){border-color:var(--_nys-checkbox-border-color--tile--checked);background-color:var(--_nys-checkbox-background-color--tile--checked)}.nys-checkbox__checkbox:disabled:checked{background-color:var(--_nys-checkbox-background-color--checked--disabled);border-color:var(--_nys-checkbox-border-color--checked--disabled)}:host([tile]) .nys-checkbox:has(.nys-checkbox__checkbox:disabled:checked){border-color:var(--_nys-checkbox-border-color--tile--disabled);background-color:var(--_nys-checkbox-background-color--tile--disabled)}.nys-checkbox__checkbox:disabled{background-color:var(--_nys-checkbox-background-color--disabled);border-color:var(--_nys-checkbox-border-color--disabled);cursor:not-allowed}.nys-checkbox:has(.nys-checkbox__checkbox:disabled) *{color:var(--_nys-checkbox-color--disabled);cursor:not-allowed;--_nys-label-cursor: not-allowed;--_nys-label-color: var(--_nys-checkbox-color--disabled)}:host([tile]) .nys-checkbox:has(.nys-checkbox__checkbox:disabled){background-color:var(--_nys-checkbox-background-color--disabled);border-color:var(--_nys-checkbox-border-color--disabled);cursor:not-allowed}.nys-checkbox:hover .nys-checkbox__checkbox:not(:disabled):not(:checked),.nys-checkbox__checkbox:hover:not(:disabled):not(:checked){background-color:var(--_nys-checkbox-background-color--hover);border-color:var(--_nys-checkbox-border-color--hover)}:host([tile]) .nys-checkbox:hover:has(.nys-checkbox__checkbox:not(:disabled):not(:checked)){border-color:var(--_nys-checkbox-border-color--tile--hover);background-color:var(--_nys-checkbox-background-color--tile--hover);outline:solid var(--_nys-checkbox-border-width--tile) var(--_nys-checkbox-border-color--tile--hover)}.nys-checkbox:hover .nys-checkbox__checkbox:not(:disabled):checked,.nys-checkbox__checkbox:hover:not(:disabled):checked{border-color:var(--_nys-checkbox-border-color--checked--hover);background-color:var(--_nys-checkbox-background-color--checked--hover)}:host([tile]) .nys-checkbox:hover:has(.nys-checkbox__checkbox:not(:disabled):checked){outline:solid var(--_nys-checkbox-border-width--tile) var(--_nys-checkbox-border-color--tile--checked)}.nys-checkbox:active .nys-checkbox__checkbox:not(:disabled):not(:checked),.nys-checkbox__checkbox:active:not(:disabled):not(:checked){background-color:var(--_nys-checkbox-background-color--active);border-color:var(--_nys-checkbox-border-color--active)}:host([tile]) .nys-checkbox:has(.nys-checkbox__checkbox:active:not(:disabled):not(:checked)){border-color:var(--_nys-checkbox-border-color--tile--active);background-color:var(--_nys-checkbox-background-color--tile--active);outline:solid var(--_nys-checkbox-border-width--tile) var(--_nys-checkbox-border-color--tile--active)}.nys-checkbox:active .nys-checkbox__checkbox:not(:disabled):checked,.nys-checkbox__checkbox:active:not(:disabled):checked{border-color:var(--_nys-checkbox-border-color--checked--active);background-color:var(--_nys-checkbox-background-color--checked--active)}:host(:not([tile])) .nys-checkbox__checkbox:focus{outline:solid var(--_nys-checkbox-outline-width) var(--_nys-checkbox-outline-color)}:host([tile]) .nys-checkbox:has(*:focus-visible),:host([tile][showError]) .nys-checkbox:has(*:focus){outline:solid var(--_nys-checkbox-border-width--tile) var(--_nys-checkbox-outline-color)!important;border-color:var(--_nys-checkbox-outline-color)!important}:host(:not([tile])) .nys-checkbox__main-container>nys-label{--_nys-label-font-weight: var(--_nys-checkbox-font-weight)}:host([tile]) .nys-checkbox__main-container>nys-label{--_nys-description-font-style: normal}.nys-checkbox__required{color:var(--nys-color-danger, #b52c2c)}.nys-checkbox__requiredwrapper{display:flex;gap:3px}fieldset{all:unset;display:contents}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}.nys-checkbox__other-container{display:flex;padding-inline-start:calc(var(--_nys-checkbox-size) + var(--_nys-checkbox-gap))}';
var xi = Object.defineProperty, ye = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && xi(e, t, o), o;
};
let wi = 0;
const so = class so extends m {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.required = !1, this.optional = !1, this.showError = !1, this.errorMessage = "", this.label = "", this.description = "", this.tile = !1, this.tooltip = "", this.form = null, this.size = "md", this._slottedDescriptionText = "", this._hasOtherError = !1, this._otherErrorCheckbox = null, this._internals = this.attachInternals();
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-checkboxgroup-${Date.now()}-${wi++}`), this.addEventListener("nys-change", this._handleCheckboxChange), this.addEventListener("nys-other-input", this._handleOtherInput), this.addEventListener("invalid", this._handleInvalid), this.addEventListener("nys-error", this._handleChildError), this.addEventListener("nys-error-clear", this._handleChildErrorClear);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("nys-change", this._handleCheckboxChange), this.removeEventListener("nys-other-input", this._handleOtherInput), this.removeEventListener("invalid", this._handleInvalid), this.removeEventListener("nys-error", this._handleChildError), this.removeEventListener("nys-error-clear", this._handleChildErrorClear);
  }
  firstUpdated() {
    this._setGroupExist(), this._updateCheckboxSize(), this._updateCheckboxTile(), this._updateCheckboxShowError(), this._getSlotDescriptionForAria();
  }
  updated(e) {
    e.has("required") && this.required && this._setupCheckboxRequired(), e.has("size") && this._updateCheckboxSize(), e.has("tile") && this._updateCheckboxTile(), e.has("showError") && this._updateCheckboxShowError(), e.has("form") && this._updateCheckboxForm();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _hasAtLeastOneChecked() {
    return Array.from(this.querySelectorAll("nys-checkbox")).some(
      (e) => e.checked
    );
  }
  _setGroupExist() {
    this.querySelectorAll("nys-checkbox").forEach((t) => {
      t.groupExist = !0;
    });
  }
  // Initial update on checkbox required attribute
  async _setupCheckboxRequired() {
    const e = this.querySelector("nys-checkbox"), t = this.errorMessage || "This field is required", s = e ? await e.getInputElement() : null;
    this._internals.setValidity(
      { valueMissing: !0 },
      t,
      s || this
    );
  }
  // Updates the required attribute of each checkbox in the group
  async _manageRequire() {
    if (!this.required) return;
    const e = this.errorMessage || "You must make a selection to proceed.", t = Array.from(
      this.querySelectorAll("nys-checkbox")
    ), s = this._hasAtLeastOneChecked(), o = t ? await t[0].getInputElement().catch(() => null) : null;
    this._internals.setValidity({}), this.showError = !1, s ? this._hasOtherError && this._otherErrorCheckbox && (this._setCustomOtherError(), this.showError = !0) : this._hasOtherError ? (this._setCustomOtherError(), this.showError = !0) : (this._internals.setValidity(
      { valueMissing: !0 },
      e,
      o ?? this
    ), this.showError = !0);
  }
  _setCustomOtherError() {
    const t = this._otherErrorCheckbox?.shadowRoot?.querySelector("nys-textinput") || this._otherErrorCheckbox;
    this._internals.setValidity(
      { customError: !0 },
      "Please complete this field.",
      t
    );
  }
  // Updates the size of each checkbox in the group
  _updateCheckboxSize() {
    this.querySelectorAll("nys-checkbox").forEach((t) => {
      t.setAttribute("size", this.size);
    });
  }
  _updateCheckboxTile() {
    this.querySelectorAll("nys-checkbox").forEach((t) => {
      this.tile ? t.toggleAttribute("tile", !0) : t.removeAttribute("tile");
    });
  }
  _updateCheckboxShowError() {
    this.querySelectorAll("nys-checkbox").forEach((t) => {
      this.showError ? t.setAttribute("showError", "") : t.removeAttribute("showError");
    });
  }
  _updateCheckboxForm() {
    this.querySelectorAll("nys-checkbox").forEach((t) => {
      this.showError && this.form !== null ? t.setAttribute("form", this.form) : t.removeAttribute("form");
    });
  }
  // Get the slotted text contents so native VO can attempt to announce it within the legend in the fieldset
  _getSlotDescriptionForAria() {
    const t = this.shadowRoot?.querySelector(
      'slot[name="description"]'
    )?.assignedNodes({ flatten: !0 }) || [];
    this._slottedDescriptionText = t.map((s) => s.textContent?.trim()).filter(Boolean).join(", ");
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.querySelectorAll("nys-checkbox").forEach((t) => {
      t.formResetCallback();
    }), this._internals.setFormValue(""), this.showError = !1, this._internals.setValidity({}), this.requestUpdate();
  }
  async _handleInvalid(e) {
    if (e.preventDefault(), this._internals.validity.customError) {
      const r = Array.from(
        this.querySelectorAll("nys-checkbox")
      ).find(
        (i) => i.other && i.checked
      );
      if (r) {
        const i = r.shadowRoot?.querySelector("nys-textinput");
        if (i) {
          await i.updateComplete, i.focus();
          return;
        }
      }
    }
    this.showError = !0, await this._manageRequire();
    const t = this.querySelector("nys-checkbox"), s = t ? await t.getInputElement() : null;
    if (s) {
      const o = this._internals.form;
      o ? Array.from(o.elements).find((c) => {
        if (c.tagName.toLowerCase() === "nys-checkboxgroup") {
          if (Array.from(
            this.querySelectorAll("nys-checkbox")
          ).filter(
            (f) => f.checked
          ).length === 0)
            return c;
        } else
          return typeof c.checkValidity == "function" && !c.checkValidity();
      }) === this && s.focus() : s.focus();
    }
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  // Similar to how native forms handle multiple same-name fields, we group the selected values into a list for FormData.
  _handleCheckboxChange(e) {
    const t = e, { name: s } = t.detail, o = Array.from(
      this.querySelectorAll("nys-checkbox")
    ), r = o.filter((i) => i.checked).map((i) => i.value);
    this.name = s, this._internals.setFormValue(r.join(", ")), this._checkOtherInputs(o), this._hasOtherError || this._manageRequire();
  }
  async _handleChildError(e) {
    e.stopPropagation();
    const { sourceCheckbox: t } = e.detail;
    t && (this._hasOtherError = !0, this._otherErrorCheckbox = t, this.showError = !0, this._setCustomOtherError());
  }
  _handleChildErrorClear(e) {
    const s = e.detail?.sourceCheckbox;
    this._otherErrorCheckbox && s !== this._otherErrorCheckbox || (this._hasOtherError = !1, this._otherErrorCheckbox = null, this._internals.setValidity({}), this.showError = !1, this.required && !this._hasAtLeastOneChecked() && this._manageRequire());
  }
  _handleOtherInput() {
    const t = Array.from(
      this.querySelectorAll("nys-checkbox")
    ).filter((s) => s.checked).map((s) => s.value);
    this._internals.setFormValue(t.join(", "));
  }
  async _checkOtherInputs(e) {
    for (const t of e)
      if (t.checked && t.other) {
        const s = t.value.trim();
        if (!t._hasUserInteracted)
          continue;
        if (!s || s === "") {
          this._hasOtherError = !0, this._otherErrorCheckbox = t, this._setCustomOtherError(), this.showError = !0;
          return;
        }
      }
    this._hasOtherError && (this._hasOtherError = !1, this._otherErrorCheckbox = null, this.required ? this._manageRequire() : (this._internals.setValidity({}), this.showError = !1));
  }
  render() {
    return h`
      <fieldset
        aria-label="${this.label}${this._slottedDescriptionText ? ` ${this._slottedDescriptionText}` : this.description ? ` ${this.description}` : ""}"
        class="nys-checkboxgroup"
        role="radiogroup"
      >
        <nys-label
          label=${this.label}
          description=${this.description}
          flag=${this.required ? "required" : this.optional ? "optional" : ""}
          tooltip=${this.tooltip}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <div class="nys-checkboxgroup__content">
          <slot></slot>
        </div>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this._internals.validationMessage || this.errorMessage}
          .showDivider=${!this.tile}
        ></nys-errormessage>
      </fieldset>
    `;
  }
};
so.styles = w(hr), so.shadowRootOptions = {
  ...m.shadowRootOptions,
  delegatesFocus: !0
}, so.formAssociated = !0;
let X = so;
ye([
  a({ type: String, reflect: !0 })
], X.prototype, "id");
ye([
  a({ type: String, reflect: !0 })
], X.prototype, "name");
ye([
  a({ type: Boolean, reflect: !0 })
], X.prototype, "required");
ye([
  a({ type: Boolean, reflect: !0 })
], X.prototype, "optional");
ye([
  a({ type: Boolean, reflect: !0 })
], X.prototype, "showError");
ye([
  a({ type: String })
], X.prototype, "errorMessage");
ye([
  a({ type: String })
], X.prototype, "label");
ye([
  a({ type: String })
], X.prototype, "description");
ye([
  a({ type: Boolean, reflect: !0 })
], X.prototype, "tile");
ye([
  a({ type: String })
], X.prototype, "tooltip");
ye([
  a({ type: String, reflect: !0 })
], X.prototype, "form");
ye([
  a({ type: String, reflect: !0 })
], X.prototype, "size");
ye([
  $()
], X.prototype, "_slottedDescriptionText");
ye([
  $()
], X.prototype, "_hasOtherError");
ye([
  $()
], X.prototype, "_otherErrorCheckbox");
customElements.get("nys-checkboxgroup") || customElements.define("nys-checkboxgroup", X);
var ki = Object.defineProperty, J = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && ki(e, t, o), o;
};
let Ci = 0;
const no = class no extends m {
  // allows use of elementInternals' API
  constructor() {
    super(), this.checked = !1, this.disabled = !1, this.required = !1, this.label = "", this.description = "", this.id = "", this.name = "", this.value = "", this.form = null, this.showError = !1, this.errorMessage = "", this.groupExist = !1, this.tile = !1, this.tooltip = "", this.size = "md", this.other = !1, this.showOtherError = !1, this._mobileQuery = window.matchMedia("(max-width: 479px)"), this.isMobile = this._mobileQuery.matches, this._hasUserInteracted = !1, this._manageLabelClick = () => {
      const e = this.shadowRoot?.querySelector(
        ".nys-checkbox__main-container"
      ), t = this.shadowRoot?.querySelector("input");
      !e || !t || e.addEventListener("click", (s) => {
        s.target.tagName.toLowerCase() !== "input" && (this.disabled || (t.click(), t.focus()));
      });
    }, this._handleMobileQuery = () => {
      this.isMobile = this._mobileQuery.matches;
    }, this._internals = this.attachInternals();
  }
  // need this flag for "eager mode"
  async getInputElement() {
    return await this.updateComplete, this.shadowRoot?.querySelector("input") || null;
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-checkbox-${Date.now()}-${Ci++}`), this.addEventListener("invalid", this._handleInvalid), this.addEventListener("blur", this._handleBlur), this._mobileQuery.addEventListener("change", this._handleMobileQuery);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid), this.removeEventListener("blur", this._handleBlur), this._mobileQuery.removeEventListener("change", this._handleMobileQuery);
  }
  firstUpdated() {
    this._setValue(), this._manageRequire(), this._manageLabelClick();
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    this.groupExist || this._internals.setFormValue(this.checked ? this.value : null);
  }
  _manageRequire() {
    const e = this.shadowRoot?.querySelector("input"), t = this.errorMessage || "This field is required";
    e && (this.required && !this.checked ? (this._internals.ariaInvalid = "true", this._internals.setValidity({ valueMissing: !0 }, t, e)) : (this._internals.ariaInvalid = "false", this._internals.setValidity({})));
  }
  _setValidityMessage(e = "") {
    const t = this.shadowRoot?.querySelector("input");
    t && (this.showError = !!e, this.errorMessage?.trim() && e !== "" && (e = this.errorMessage), this._internals.setValidity(
      e ? { customError: !0 } : {},
      e,
      t
    ));
  }
  _validate() {
    const e = this.shadowRoot?.querySelector("input");
    if (!e) return;
    const t = e.validity;
    let s = "";
    t.valueMissing && (s = "This field is required"), this._setValidityMessage(s);
  }
  // Called automatically when the parent form is reset
  formResetCallback() {
    this.checked = !1, this._internals.setFormValue(null);
    const e = this.shadowRoot?.querySelector("input");
    e && (e.checked = !1), this.showError = !1, this.errorMessage = "", this._internals.setValidity({}), this.requestUpdate();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  // This helper function is called to perform the element's native validation.
  checkValidity() {
    if (this.required && !this.checked)
      return !1;
    const e = this.shadowRoot?.querySelector("input");
    return e ? e.checkValidity() : !0;
  }
  _handleInvalid(e) {
    e.preventDefault(), this.showError = !0, this._validate();
    const t = this.shadowRoot?.querySelector("input");
    if (t) {
      const s = this._internals.form;
      s ? Array.from(s.elements).find(
        (i) => typeof i.checkValidity == "function" && !i.checkValidity()
      ) === this && t.focus() : t.focus();
    }
  }
  get _hasDescription() {
    const e = this.querySelector('[slot="description"]');
    return !!this.description || !!e;
  }
  _emitChangeEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-change", {
        detail: {
          id: this.id,
          checked: this.checked,
          name: this.name,
          value: this.value
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _emitOtherInputEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-other-input", {
        detail: {
          id: this.id,
          name: this.name,
          value: this.value
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Handle checkbox change event
  async _handleChange(e) {
    const { checked: t } = e.target, s = this.checked;
    this.checked = t, this.groupExist || this._internals.setFormValue(this.checked ? this.value : null), this.other && s && !t && (this.showOtherError = !1, this._hasUserInteracted = !1, this._dispatchClearError()), this._validate(), this._emitChangeEvent();
  }
  _handleFocus() {
    this.dispatchEvent(new Event("nys-focus"));
  }
  _handleBlur() {
    this.dispatchEvent(new Event("nys-blur")), this.other && this.checked && (this._hasUserInteracted = !0, this._validateOtherAndEmitError());
  }
  _handleTextInputBlur() {
    this._hasUserInteracted = !0, this._validateOtherAndEmitError();
  }
  async _handleKeydown(e) {
    e.code === "Space" && (e.preventDefault(), this.disabled || (this.checked = !this.checked, this._internals.setFormValue(this.checked ? this.value : null), await this.updateComplete, this._validate(), this._emitChangeEvent()));
  }
  _handleTextInput(e) {
    let s = e.target.value;
    this.value = s, this._hasUserInteracted && this._validateOtherAndEmitError(), this._emitOtherInputEvent();
  }
  _validateOtherAndEmitError() {
    if (!this.other) return;
    if (!this.checked || !this._hasUserInteracted) {
      this.showOtherError = !1, this._dispatchClearError();
      return;
    }
    const e = this.value.trim() === "";
    this.showOtherError = e, e ? this.dispatchEvent(
      new CustomEvent("nys-error", {
        detail: {
          id: this.id,
          name: this.name,
          type: "other",
          message: "Please enter a value for this option.",
          sourceCheckbox: this
        },
        bubbles: !0,
        composed: !0
      })
    ) : this._dispatchClearError();
  }
  _dispatchClearError() {
    this.dispatchEvent(
      new CustomEvent("nys-error-clear", {
        detail: { sourceCheckbox: this },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return h`
      <div class="nys-checkbox">
        <div
          class="nys-checkbox__main-container ${this._hasDescription ? "has-description" : ""}"
        >
          <div class="nys-checkbox__checkbox-wrapper">
            <input
              id=${this.id + "--native"}
              class="nys-checkbox__checkbox"
              type="checkbox"
              name="${g(this.name ? this.name : void 0)}"
              .checked=${this.checked}
              ?disabled=${this.disabled}
              .value=${this.value}
              ?required="${this.required}"
              form=${g(this.form || void 0)}
              aria-checked="${this.checked}"
              aria-disabled="${this.disabled ? "true" : "false"}"
              aria-required="${this.required}"
              aria-describedby="group-info"
              @change="${this._handleChange}"
              @focus="${this._handleFocus}"
              @keydown="${this._handleKeydown}"
              aria-label=${this.label || g(this.other ? "Other" : void 0)}
            />
            ${this.checked ? h`<nys-icon
                  name="check"
                  size="${this.size === "md" ? "4xl" : this.size === "sm" ? "2xl" : "4xl"}"
                  class="nys-checkbox__icon"
                ></nys-icon>` : ""}
          </div>
          ${(this.label || this.other) && h`
            <nys-label
              aria-hidden="true"
              tooltip=${this.tooltip}
              label="${this.label || (this.other ? "Other" : "")}"
              description=${g(this.description || void 0)}
              flag=${g(this.required ? "required" : void 0)}
            >
              <slot name="description" slot="description"
                >${this.description}</slot
              >
            </nys-label>
          `}
        </div>
        <div class="nys-checkbox__other-container">
          ${this.other && this.checked ? h`
                <nys-textinput
                  .value=${this.value}
                  id=${"radiobutton-other-" + this.id}
                  @nys-input=${this._handleTextInput}
                  @nys-blur=${this._handleTextInputBlur}
                  ariaLabel="Other"
                  aria-invalid=${this.showOtherError ? "true" : "false"}
                  width=${this.isMobile ? "full" : "md"}
                  ?disabled=${this.disabled}
                ></nys-textinput>
              ` : ""}
        </div>
      </div>
      ${this.parentElement?.tagName.toLowerCase() !== "nys-checkboxgroup" ? h`<nys-errormessage
            id="single-error-message"
            ?showError=${this.showError}
            errorMessage=${this._internals.validationMessage || this.errorMessage}
            .showDivider=${!this.tile}
          ></nys-errormessage>` : ""}
    `;
  }
};
no.styles = w(hr), no.shadowRootOptions = {
  ...m.shadowRootOptions,
  delegatesFocus: !0
}, no.formAssociated = !0;
let V = no;
J([
  a({ type: Boolean, reflect: !0 })
], V.prototype, "checked");
J([
  a({ type: Boolean, reflect: !0 })
], V.prototype, "disabled");
J([
  a({ type: Boolean, reflect: !0 })
], V.prototype, "required");
J([
  a({ type: String })
], V.prototype, "label");
J([
  a({ type: String })
], V.prototype, "description");
J([
  a({ type: String, reflect: !0 })
], V.prototype, "id");
J([
  a({ type: String, reflect: !0 })
], V.prototype, "name");
J([
  a({ type: String })
], V.prototype, "value");
J([
  a({ type: String, reflect: !0 })
], V.prototype, "form");
J([
  a({ type: Boolean, reflect: !0 })
], V.prototype, "showError");
J([
  a({ type: String })
], V.prototype, "errorMessage");
J([
  a({ type: Boolean })
], V.prototype, "groupExist");
J([
  a({ type: Boolean, reflect: !0 })
], V.prototype, "tile");
J([
  a({ type: String })
], V.prototype, "tooltip");
J([
  a({ type: String, reflect: !0 })
], V.prototype, "size");
J([
  a({ type: Boolean, reflect: !0 })
], V.prototype, "other");
J([
  a({ type: Boolean })
], V.prototype, "showOtherError");
J([
  $()
], V.prototype, "isMobile");
customElements.get("nys-checkbox") || customElements.define("nys-checkbox", V);
const $i = ':host{--_nys-combobox-width: 100%;--_nys-combobox-height: var(--nys-size-500, 40px);--_nys-combobox-border-radius: var(--nys-radius-md, 4px);--_nys-combobox-border-width: var(--nys-border-width-sm, 1px);--_nys-combobox-border-color: var(--nys-color-neutral-400, #909395);--_nys-combobox-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-combobox-padding: var(--nys-space-100, 8px) var(--nys-space-150, 12px);--_nys-combobox-gap: var(--nys-space-50, 4px);--_nys-combobox-background-color: var( --nys-color-ink-reverse, var(--nys-color-white, #ffffff) );--_nys-combobox-outline-color--hover: var(--nys-color-neutral-900, #1b1b1b);--_nys-combobox-outline-width: var(--nys-border-width-sm, 1px);--_nys-combobox-outline-color--focus: var(--nys-color-focus, #004dd1);--_nys-combobox-background-color--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-combobox-border-color--disabled: var(--nys-color-neutral-200, #bec0c1);--_nys-combobox-color--disabled: var( --nys-color-text-disabled, var(--nys-color-neutral-200, #bec0c1) );--_nys-combobox-background-color--dropdown: var( --nys-color-ink-reverse, var(--nys-color-white, #ffffff) );--_nys-combobox-border-color--dropdown: var(--nys-color-neutral-400, #909395);--_nys-combobox-shadow--dropdown: var( --nys-shadow-lg, 0 4px 8px rgba(0, 0, 0, .1) );--_nys-combobox-max-height--dropdown: var(--nys-size-3000, 300px);--_nys-combobox-padding--option: var(--nys-space-100, 8px) var(--nys-space-150, 12px);--_nys-combobox-background-color--option--hover: var( --nys-color-neutral-10, #f6f6f6 );--_nys-combobox-background-color--option--active: var( --nys-color-neutral-50, #ededed );--_nys-combobox-background-color--option--disabled: var( --nys-color-white, #ffffff );--_nys-combobox-color--option--disabled: var( --nys-color-text-disabled, #bec0c1 );--_nys-combobox-background-color--option--selected: var( --nys-theme-weaker, #eff6fb );--_nys-combobox-border-color--option--selected: var( --nys-color-theme-mid, #457aa5 );--_nys-combobox-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-combobox-font-size: var(--nys-font-size-ui-md, 16px);--_nys-combobox-font-weight: var(--nys-font-weight-regular, 400);--_nys-combobox-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-combobox-letter-spacing: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) )}:host([width=sm]){--_nys-combobox-width: var(--nys-form-width-sm, 88px)}:host([width=md]){--_nys-combobox-width: var(--nys-form-width-md, 200px)}:host([width=lg]){--_nys-combobox-width: var(--nys-form-width-lg, 384px)}:host([width=full]){--_nys-combobox-width: 100%;flex:1}:host([showError]){--_nys-combobox-border-color: var(--nys-color-danger, #b52c2c)}:host([inverted]){--_nys-combobox-outline-color--focus: var(--nys-color-focus-reverse, #7aa5e7)}.nys-combobox{font-weight:var(--_nys-combobox-font-weight);font-family:var(--_nys-combobox-font-family);font-size:var(--_nys-combobox-font-size);line-height:var(--_nys-combobox-line-height);letter-spacing:var(--_nys-combobox-letter-spacing);color:var(--_nys-combobox-color);gap:var(--_nys-combobox-gap);display:flex;flex-direction:column;position:relative}.nys-combobox__container{width:var(--_nys-combobox-width);max-width:100%;position:relative}.nys-combobox__input-wrapper{position:relative;display:flex;align-items:center;background-color:var(--_nys-combobox-background-color);border-radius:var(--_nys-combobox-border-radius)}.nys-combobox__input{color:var(--_nys-combobox-color);border-radius:var(--_nys-combobox-border-radius);border:solid var(--_nys-combobox-border-color) var(--_nys-combobox-border-width);outline-color:transparent;outline-width:var(--_nys-combobox-outline-width);outline-style:solid;padding:var(--_nys-combobox-padding);padding-right:calc(var(--nys-size-400, 32px) + var(--nys-space-100, 8px));width:100%;height:var(--_nys-combobox-height);box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;background-color:transparent;font:inherit;cursor:text}.nys-combobox__input:not(:placeholder-shown){padding-right:calc(var(--nys-size-400, 32px) * 2 + var(--nys-space-100, 8px))}.nys-combobox__input:hover:not(:disabled):not(:focus):not([readonly]){outline-color:var(--_nys-combobox-outline-color--hover);border-color:var(--_nys-combobox-outline-color--hover)}.nys-combobox__input:focus:not([readonly]){outline-color:var(--_nys-combobox-outline-color--focus);border-color:var(--_nys-combobox-outline-color--focus);caret-color:var(--_nys-combobox-outline-color--focus)}.nys-combobox__input:disabled{background-color:var(--_nys-combobox-background-color--disabled);border-color:var(--_nys-combobox-border-color--disabled);color:var(--_nys-combobox-color--disabled);cursor:not-allowed}.nys-combobox__buttons{display:flex;position:absolute;right:var(--nys-space-150, 12px);gap:var(--nys-space-150, 12px)}.nys-combobox__buttons nys-button{--_nys-button-padding--y: var(--nys-space-50, 4px);--_nys-button-padding--x: var(--nys-space-50, 4px);--_nys-button-height: var(--nys-size-300, 32px);--_nys-button-width: var(--nys-size-400, 32px)}.nys-combobox__buttons .nys-combobox__chevron{border-inline-start:solid var(--nys-color-neutral-200, #bec0c1) var(--nys-border-width-sm, 1px);padding-inline-start:var(--nys-space-150, 12px)}.nys-combobox__listbox{position:absolute;left:0;right:0;top:calc(100% + var(--nys-space-50, 4px));background-color:var(--_nys-combobox-background-color--dropdown);border:solid var(--_nys-combobox-border-color--dropdown) var(--_nys-combobox-border-width);border-radius:var(--_nys-combobox-border-radius);box-shadow:var(--_nys-combobox-shadow--dropdown);max-height:var(--_nys-combobox-max-height--dropdown);overflow-y:auto;z-index:1000;box-sizing:border-box}.nys-combobox__listbox--above{top:auto;bottom:calc(100% + var(--nys-space-50, 4px))}.nys-combobox__option{padding:var(--_nys-combobox-padding--option);cursor:pointer;-webkit-user-select:none;user-select:none;transition:background-color .15s ease;border-bottom:var(--nys-border-width-sm, 1px) solid var(--nys-color-neutral-50, #ededed);background-color:var(--_nys-combobox-background-color)}.nys-combobox__option:hover:not([disabled]):not(.nys-combobox__option--selected){background-color:var(--_nys-combobox-background-color--option--hover)}.nys-combobox__option:active:not([disabled]):not(.nys-combobox__option--selected){background-color:var(--_nys-combobox-background-color--option--active)}.nys-combobox__option--selected:not([disabled]){background-color:var(--_nys-combobox-background-color--option--selected);border:var(--_nys-combobox-border-color--option--selected) solid 1px}.nys-combobox__option--focused:not([disabled]):not(:hover){outline:var(--_nys-combobox-outline-color--focus) solid 2px;outline-offset:-2px}.nys-combobox__option[disabled]{background-color:var(--_nys-combobox-background-color--option--disabled);color:var(--_nys-combobox-color--option--disabled);cursor:not-allowed}.nys-combobox__optgroup{padding:var(--nys-space-100, 8px) var(--nys-space-150, 12px);border-bottom:var(--nys-border-width-sm, 1px) solid var(--nys-color-neutral-50, #ededed);-webkit-user-select:none;user-select:none;color:var(--nys-color-text);font-family:var(--nys-font-family-ui, "Proxima Nova");font-size:var(--nys-font-size-ui-md, 16px);font-style:normal;font-weight:700;line-height:var(--nys-font-lineheight-ui-md, 24px);letter-spacing:var(--nys-font-letterspacing-ui-md, .044px)}.nys-combobox__optgroup~.nys-combobox__option{padding-left:var(--nys-space-300, 24px)}.nys-combobox__no-results{background-color:var(--_nys-combobox-background-color);padding:var(--_nys-combobox-padding--option);color:var(--_nys-combobox-color);cursor:not-allowed}.nys-combobox__listbox::-webkit-scrollbar{width:var(--nys-space-100, 8px)}.nys-combobox__listbox::-webkit-scrollbar-track{background:var(--nys-color-neutral-50, #eeeeee);border-radius:var(--_nys-combobox-border-radius)}.nys-combobox__listbox::-webkit-scrollbar-thumb{background:var(--nys-color-neutral-300, #a7a9ab);border-radius:var(--_nys-combobox-border-radius)}.nys-combobox__listbox::-webkit-scrollbar-thumb:hover{background:var(--nys-color-neutral-400, #909395)}';
var Ei = Object.defineProperty, O = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Ei(e, t, o), o;
};
let Si = 0;
const ro = class ro extends m {
  constructor() {
    super(), this.id = "", this.name = "", this.label = "", this.description = "", this.value = "", this.disabled = !1, this.required = !1, this.optional = !1, this.tooltip = "", this.form = null, this.width = "full", this.inverted = !1, this.showError = !1, this.errorMessage = "", this._isOpen = !1, this._filterText = "", this._highlightedIndex = -1, this._options = [], this._filteredOptions = [], this._dropdownAbove = !1, this._announcement = "", this._originalErrorMessage = "", this._hasUserInteracted = !1, this._selectedLabel = "", this._defaultValue = "", this._handleDocumentClick = (e) => {
      e.target === this || this.shadowRoot?.contains(e.target) || this._closeDropdown();
    }, this._internals = this.attachInternals();
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-combobox-${Date.now()}-${Si++}`), this._originalErrorMessage = this.errorMessage ?? "", this.addEventListener("invalid", this._handleInvalid), document.addEventListener("click", this._handleDocumentClick);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid), document.removeEventListener("click", this._handleDocumentClick);
  }
  firstUpdated() {
    this._handleSlotChange();
    const e = this.shadowRoot?.querySelector(
      'slot:not([name="description"])'
    );
    if (!this.value && e) {
      const t = e.assignedElements({ flatten: !0 });
      for (const s of t)
        if (s.tagName === "OPTION" && s.selected) {
          this.value = s.value;
          break;
        } else if (s.tagName === "OPTGROUP") {
          for (const o of s.children)
            if (o.tagName === "OPTION" && o.selected) {
              this.value = o.value;
              break;
            }
          if (this.value) break;
        }
    }
    this._setValue(), this._defaultValue = this.value;
  }
  updated(e) {
    if (e.has("value")) {
      const t = this._options.find((s) => s.value === this.value);
      this._selectedLabel = t ? t.label : "", this._filterText = this._selectedLabel, this._setValue();
    }
    e.has("_isOpen") && this._isOpen && (this._positionDropdown(), this.updateComplete.then(() => {
      this._scrollToHighlighted();
    }));
  }
  /**
   * Slot handling
   * --------------------------------------------------------------------------
   */
  _handleSlotChange() {
    const e = this.shadowRoot?.querySelector(
      'slot:not([name="description"])'
    );
    if (!e) return;
    const t = e.assignedElements({ flatten: !0 }), s = [];
    if (t.forEach((o) => {
      if (o.tagName === "OPTION") {
        const r = o;
        s.push({
          value: r.value,
          label: r.textContent?.trim() || r.value,
          disabled: r.disabled
        });
      } else if (o.tagName === "OPTGROUP") {
        const r = o, i = r.label;
        Array.from(r.children).forEach((c) => {
          if (c.tagName === "OPTION") {
            const d = c;
            s.push({
              value: d.value,
              label: d.textContent?.trim() || d.value,
              disabled: d.disabled || r.disabled,
              group: i
            });
          }
        });
      }
    }), this._options = s, this._filteredOptions = s, this.value) {
      const o = this._options.find((r) => r.value === this.value);
      o && (this._selectedLabel = o.label, this._filterText = o.label);
    }
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    this._internals.setFormValue(this.value), this._manageRequire();
  }
  _manageRequire() {
    const e = this.errorMessage || "This field is required";
    this.required && (!this.value || this.value?.trim() === "") ? (this._internals.ariaInvalid = "true", this._internals.setValidity({ valueMissing: !0 }, e, this._input)) : (this._internals.ariaInvalid = "false", this._internals.setValidity({}), this._hasUserInteracted = !1);
  }
  _setValidityMessage(e = "") {
    this.showError = !!e, this._originalErrorMessage?.trim() && e !== "" ? this.errorMessage = this._originalErrorMessage : this.errorMessage = e;
    const t = e ? { customError: !0 } : {};
    this._internals.setValidity(t, this.errorMessage, this._input);
  }
  _validate() {
    if (!this._input) return;
    const e = this._input.validity;
    let t = "";
    const s = this._input && !this._options.some((o) => o.value === this.value);
    e.valueMissing || s ? t = "This field is required" : t = this._input.validationMessage, this._setValidityMessage(t);
  }
  formResetCallback() {
    this.value = this._defaultValue, this._filterText = this._defaultValue ? this._options.find((e) => e.value === this._defaultValue)?.label ?? "" : "", this._selectedLabel = this._filterText, this._input && (this._input.value = this._filterText), this._internals.setFormValue(this.value), this.showError = !1, this.errorMessage = "", this._internals.setValidity({}), this.requestUpdate();
  }
  checkValidity() {
    return this._input ? this._input.checkValidity() : !0;
  }
  _handleInvalid(e) {
    if (e.preventDefault(), this._hasUserInteracted = !0, this._validate(), this._input) {
      const t = this._internals.form;
      t ? Array.from(t.elements).find(
        (r) => typeof r.checkValidity == "function" && !r.checkValidity()
      ) === this && this._input.focus() : this._input.focus();
    }
  }
  /**
   * Dropdown positioning
   * --------------------------------------------------------------------------
   */
  _positionDropdown() {
    if (!this._listbox || !this._input) return;
    const e = this._input.getBoundingClientRect(), t = this._listbox.offsetHeight, o = window.innerHeight - e.bottom, r = e.top;
    this._dropdownAbove = o < t && r > o;
  }
  /**
   * Filtering
   * --------------------------------------------------------------------------
   */
  _filterOptions(e) {
    if (!e) {
      this._filteredOptions = this._options;
      return;
    }
    const t = e.toLowerCase();
    this._filteredOptions = this._options.filter(
      (s) => s.label.toLowerCase().includes(t)
    );
  }
  /**
   * Keyboard navigation
   * --------------------------------------------------------------------------
   */
  _scrollToHighlighted() {
    if (!this._listbox || this._highlightedIndex < 0) return;
    const e = this._listbox.querySelector(
      `[data-index="${this._highlightedIndex}"]`
    );
    e && e.scrollIntoView({ block: "nearest" });
  }
  _handleKeyDown(e) {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault(), this._isOpen ? this._moveHighlight(1) : this._openDropdown();
        break;
      case "ArrowUp":
        e.preventDefault(), this._isOpen ? this._moveHighlight(-1) : this._openDropdown();
        break;
      case "Enter":
        e.preventDefault(), this._isOpen && this._highlightedIndex >= 0 && this._selectOption(this._filteredOptions[this._highlightedIndex]);
        break;
      case "Escape":
        e.preventDefault(), this._closeDropdown(), this._filterText = this._selectedLabel;
        break;
      case "Tab":
        this._isOpen && (this._closeDropdown(), this._filterText = this._selectedLabel);
        break;
    }
  }
  _moveHighlight(e) {
    if (this._filteredOptions.filter((y) => !y.disabled).length === 0) return;
    let s = this._highlightedIndex + e;
    for (s < 0 ? s = this._filteredOptions.length - 1 : s >= this._filteredOptions.length && (s = 0); this._filteredOptions[s]?.disabled; )
      s += e, s < 0 && (s = this._filteredOptions.length - 1), s >= this._filteredOptions.length && (s = 0);
    this._highlightedIndex = s, this._scrollToHighlighted();
    const o = this._filteredOptions[s], r = this._filteredOptions[s - e], i = this._filteredOptions.filter(
      (y) => !y.disabled
    ), c = i.findIndex((y) => y.value === o.value) + 1, d = o.value === this.value ? "selected" : "unselected", f = o.group && o.group !== r?.group ? `${o.group}, ` : "";
    this._announcement = `${f} ${o.label} ${c} of ${i.length}, ${d}`;
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _handleInput(e) {
    const t = e.target;
    this._filterText = t.value, this._filterOptions(this._filterText), this._isOpen || this._openDropdown(), this._highlightedIndex = 0;
    const s = this._filteredOptions.filter((o) => !o.disabled).length;
    this._announcement = s > 0 ? `${s} options available` : "No results found", this._hasUserInteracted && this._validate(), this.dispatchEvent(
      new CustomEvent("nys-input", {
        detail: { id: this.id, value: this._filterText },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleFocus() {
    this.dispatchEvent(
      new Event("nys-focus", { bubbles: !0, composed: !0 })
    );
  }
  _handleBlur(e) {
    const t = e.relatedTarget;
    t && this._listbox?.contains(t) || ((!this.value || this._filterText !== this._selectedLabel) && (this._filterText = this._selectedLabel, this._filterOptions("")), this._closeDropdown(), this._hasUserInteracted || (this._hasUserInteracted = !0), this._validate(), this.dispatchEvent(
      new Event("nys-blur", { bubbles: !0, composed: !0 })
    ));
  }
  _handleIconClick() {
    this.disabled || (this._isOpen ? this._closeDropdown() : (this._input.focus(), this._openDropdown()));
  }
  _handleClearClick(e) {
    e.stopPropagation(), this.value = "", this._filterText = "", this._selectedLabel = "", this._filterOptions(""), this._internals.setFormValue(""), this._closeDropdown(), this._input.focus(), this._handleChange();
  }
  _handleOptionClick(e) {
    e.disabled || this._selectOption(e);
  }
  _handleOptionMouseEnter(e) {
    this._highlightedIndex = e;
  }
  _selectOption(e) {
    this.value = e.value, this._selectedLabel = e.label, this._filterText = e.label, this._internals.setFormValue(this.value), this._input.focus(), this._closeDropdown(), this._filterOptions(""), this._setValidityMessage(""), this._hasUserInteracted && this._validate(), this._handleChange();
  }
  _handleChange() {
    this.dispatchEvent(
      new CustomEvent("nys-change", {
        detail: { id: this.id, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _openDropdown() {
    this._isOpen = !0, this._highlightedIndex = this._filteredOptions.findIndex(
      (e) => e.value === this.value
    ), this._highlightedIndex < 0 && (this._highlightedIndex = 0);
  }
  _closeDropdown() {
    this._isOpen = !1, this._highlightedIndex = -1;
  }
  /**
   * Render helpers
   * --------------------------------------------------------------------------
   */
  _renderOptions() {
    let e = "";
    const t = [];
    return this._filteredOptions.forEach((s, o) => {
      s.group && s.group !== e && (e = s.group, t.push(h`
          <div class="nys-combobox__optgroup" role="presentation">
            ${s.group}
          </div>
        `));
      const r = o === this._highlightedIndex, i = s.value === this.value;
      t.push(h`
        <div
          class="nys-combobox__option ${r ? "nys-combobox__option--focused" : ""} ${i ? "nys-combobox__option--selected" : ""}"
          role="option"
          id="${this.id}--option-${o}"
          data-index="${o}"
          aria-selected="${i}"
          aria-disabled="${s.disabled || !1}"
          ?disabled=${s.disabled}
          @click=${() => this._handleOptionClick(s)}
          @mouseenter=${() => this._handleOptionMouseEnter(o)}
        >
          ${s.label}
        </div>
      `);
    }), t.length === 0 ? h`
        <div class="nys-combobox__no-results" role="option">
          No results found
        </div>
      ` : t;
  }
  render() {
    return h`
      <div class="nys-combobox">
        <nys-label
          label=${this.label}
          description=${this.description}
          flag=${this.required ? "required" : this.optional ? "optional" : ""}
          tooltip=${this.tooltip}
          ?inverted=${this.inverted}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <div
          class="nys-combobox__container ${this._isOpen ? "nys-combobox__container--open" : ""}"
        >
          <div class="nys-combobox__input-wrapper">
            <input
              class="nys-combobox__input"
              type="text"
              role="combobox"
              aria-autocomplete="list"
              aria-expanded="${this._isOpen}"
              aria-controls="${this.id}--listbox"
              aria-activedescendant="${this._highlightedIndex >= 0 ? `${this.id}--option-${this._highlightedIndex}` : ""}"
              name=${this.name}
              id=${this.id + "--native"}
              ?disabled=${this.disabled}
              ?required=${this.required}
              aria-required=${this.required}
              aria-disabled="${this.disabled}"
              aria-label="${[this.label, this.description].filter(Boolean).join(" ")}"
              .value=${this._filterText}
              form=${g(this.form || void 0)}
              @input=${this._handleInput}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @keydown="${this._handleKeyDown}"
            />
            <div class="nys-combobox__buttons">
              ${this.value ? h`
                    <nys-button
                      class="nys-combobox__clear"
                      ariaLabel="clear selection"
                      variant="ghost"
                      size="sm"
                      circle
                      @nys-click=${this._handleClearClick}
                      ?disabled=${this.disabled}
                    >
                      <nys-icon
                        slot="suffix-icon"
                        size="20"
                        name="close"
                      ></nys-icon>
                    </nys-button>
                  ` : ""}
              <nys-button
                class="nys-combobox__chevron"
                ariaLabel="toggle dropdown"
                variant="ghost"
                size="sm"
                circle
                @nys-click=${this._handleIconClick}
                ?disabled=${this.disabled}
              >
                <nys-icon
                  slot="suffix-icon"
                  size="20"
                  name="chevron_down"
                ></nys-icon>
              </nys-button>
            </div>
          </div>
          ${this._isOpen ? h`
                <div
                  class="nys-combobox__listbox ${this._dropdownAbove ? "nys-combobox__listbox--above" : ""}"
                  id="${this.id}--listbox"
                  role="listbox"
                  tabindex="-1"
                >
                  ${this._renderOptions()}
                </div>
              ` : ""}
        </div>
        <slot
          style="display: none;"
          @slotchange=${this._handleSlotChange}
        ></slot>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this.errorMessage}
        ></nys-errormessage>
        <div
          aria-live="polite"
          aria-atomic="true"
          style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;"
        >
          ${this._announcement}
        </div>
      </div>
    `;
  }
};
ro.styles = w($i), ro.shadowRootOptions = {
  ...m.shadowRootOptions,
  delegatesFocus: !0
}, ro.formAssociated = !0;
let A = ro;
O([
  a({ type: String, reflect: !0 })
], A.prototype, "id");
O([
  a({ type: String, reflect: !0 })
], A.prototype, "name");
O([
  a({ type: String })
], A.prototype, "label");
O([
  a({ type: String })
], A.prototype, "description");
O([
  a({ type: String })
], A.prototype, "value");
O([
  a({ type: Boolean, reflect: !0 })
], A.prototype, "disabled");
O([
  a({ type: Boolean, reflect: !0 })
], A.prototype, "required");
O([
  a({ type: Boolean, reflect: !0 })
], A.prototype, "optional");
O([
  a({ type: String })
], A.prototype, "tooltip");
O([
  a({ type: String, reflect: !0 })
], A.prototype, "form");
O([
  a({ type: String, reflect: !0 })
], A.prototype, "width");
O([
  a({ type: Boolean, reflect: !0 })
], A.prototype, "inverted");
O([
  a({ type: Boolean, reflect: !0 })
], A.prototype, "showError");
O([
  a({ type: String })
], A.prototype, "errorMessage");
O([
  $()
], A.prototype, "_isOpen");
O([
  $()
], A.prototype, "_filterText");
O([
  $()
], A.prototype, "_highlightedIndex");
O([
  $()
], A.prototype, "_options");
O([
  $()
], A.prototype, "_filteredOptions");
O([
  $()
], A.prototype, "_dropdownAbove");
O([
  $()
], A.prototype, "_announcement");
O([
  Go("input")
], A.prototype, "_input");
O([
  Go(".nys-combobox__listbox")
], A.prototype, "_listbox");
customElements.get("nys-combobox") || customElements.define("nys-combobox", A);
const Di = ':host{--_nys-datepicker-width: fit-content;--_nys-datepicker-width--input: var(--nys-form-width-md, 200px);--_nys-datepicker-gap: var(--nys-space-100, 8px);--_nys-datepicker-height: var(--nys-size-600, 48px);--_nys-datepicker-radius: var(--nys-radius-xl, 12px);--_nys-datepicker-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-datepicker-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-datepicker-space-sm: var(--nys-space-50, 4px);--_nys-datepicker-space-md: var(--nys-space-100, 8px);--_nys-datepicker-space-lg: var(--nys-space-150, 12px);--_nys-datepicker-border-width: var(--nys-border-width-sm, 1px);--_nys-datepicker-border-color: var(--nys-color-neutral-400, #909395);--_nys-datepicker-border-radius: var(--nys-radius-md, 4px);--_nys-datepicker-outline-color--hover: var(--nys-color-neutral-900, #1b1b1b);--_nys-datepicker-outline-color--focus: var(--nys-color-focus, #004dd1);--_nys-datepicker-font-size: var(--nys-font-size-ui-md, 16px);--_nys-datepicker-font-weight: var(--nys-font-weight-regular, 400);--_nys-datepicker-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-datepicker-letterspacing: var(--nys-font-letterspacing-ui-md, .044px);--_nys-datepicker-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-datepicker-text-color: var(--nys-color-text, #1b1b1b);--_nys-datepicker-text-disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-datepicker-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-datepicker-background-color--button--active: var( --nys-color-gray-100, #d0d0ce );--_nys-datepicker-padding--calendar: var(--nys-space-200, 16px);--_nys-datepicker-color--calendar--weekends: var( --nys-color-text-weaker, #797c7f );--_nys-datepicker-gap--calendar-row: var(--nys-space-2-px, 2px);--_nys-datepicker-font-size--date: var(--nys-type-size-ui-sm, 14px);--_nys-datepicker-background-color--date--hover: var( --nys-color-neutral-50, #ededed );--_nys-datepicker-background-color--date--active: var( --nys-color-neutral-100, #d0d0ce );--_nys-datepicker-background-color--date--selected: var( --nys-color-info-weak, #e5effa );--_nys-datepicker-focus-ring--date: var(--nys-color-link, #004dd1);--_nys-datepicker-color--date: var(--nys-color-text, #1b1b1b);--_nys-datepicker-color--date--hover: var(--nys-color-text, #1b1b1b);--_nys-datepicker-color--date--selected: var(--nys-color-info, #004dd1);--_nys-datepicker-color--date--disabled: var( --nys-color-text-disabled, #bec0c1 );--_nys-datepicker-border-color--date--disabled: var( --nys-color-neutral-200, #bec0c1 );--_nys-datepicker-background-color--navigation--hover: var( --nys-color-neutral-10, #f6f6f6 );--_nys-datepicker-background-color--navigation--pressed: var( --nys-color-neutral-50, #ededed );--_nys-datepicker-background-color--navigation--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-datepicker-color--navigation--hover: var( --nys-color-neutral-900, #1b1b1b );--_nys-datepicker-color--navigation--pressed: var( --nys-color-neutral-900, #1b1b1b );--_nys-datepicker-color--navigation--disabled: var( --nys-color-neutral-200, #bec0c1 );--_nys-datepicker-box-shadow-border--navigation: inset 0 0 0 1px var(--nys-color-neutral-900, #1b1b1b)}:host([width=lg]){--_nys-datepicker-width--input: var(--nys-form-width-lg, 384px)}:host([width=full]){--_nys-datepicker-width--input: 100%}:host([showError]){--_nys-datepicker-border-color: var(--nys-color-danger, #b52c2c)}:host([inverted]){--_nys-datepicker-outline-color--focus: var( --nys-color-focus-reverse, #7aa5e7 )}.nys-datepicker--container{display:flex;flex-direction:column;gap:var(--_nys-datepicker-space-sm);font-family:var(--_nys-datepicker-font-family);font-size:var(--_nys-datepicker-font-size);font-weight:var(--_nys-datepicker-font-weight);line-height:var(--_nys-datepicker-line-height);width:100%}.nys-datepicker--container .nys-datepicker--input-container{position:relative;width:var(--_nys-datepicker-width--input);display:flex;cursor:pointer}.nys-datepicker--container .nys-datepicker--input-container.disabled #calendar-button{cursor:not-allowed;color:var(--_nys-datepicker-color--date--disabled)}.nys-datepicker--container .nys-datepicker--input-container .nys-datepicker--input{cursor:text;text-align:start;font-family:var(--_nys-datepicker-font-family);font-size:var(--_nys-datepicker-font-size);flex:1;height:24px;outline:transparent solid 1px;border-radius:var(--_nys-datepicker-border-radius);border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-border-color);background-color:var(--_nys-datepicker-background-color);padding:var(--_nys-datepicker-space-md) var(--_nys-datepicker-space-md) var(--_nys-datepicker-space-md) var(--_nys-datepicker-space-lg);color:var(--_nys-datepicker-color)}.nys-datepicker--container .nys-datepicker--input-container .nys-datepicker--input:hover{outline-color:var(--_nys-datepicker-outline-color--hover);border-color:var(--_nys-datepicker-outline-color--hover)}.nys-datepicker--container .nys-datepicker--input-container .nys-datepicker--input:focus{outline-color:var(--_nys-datepicker-outline-color--focus);border-color:var(--_nys-datepicker-outline-color--focus)}.nys-datepicker--container .nys-datepicker--input-container .nys-datepicker--input:disabled{border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--disabled);cursor:not-allowed;color:var(--_nys-datepicker-color--disabled)}.nys-datepicker--container .nys-datepicker--input-container .nys-datepicker--input::-webkit-date-and-time-value{text-align:start}.nys-datepicker--container .nys-datepicker--input-container input[type=date]::-webkit-inner-spin-button,.nys-datepicker--container .nys-datepicker--input-container input[type=date]::-webkit-calendar-picker-indicator{display:none;appearance:none}.nys-datepicker--container .nys-datepicker--input-container #calendar-button{display:flex;align-items:center;justify-content:center;padding:var(--_nys-datepicker-space-sm);border-radius:var(--_nys-datepicker-border-radius);border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-background-color);outline:transparent solid 1px;background-color:var(--_nys-datepicker-background-color);position:absolute;top:50%;right:var(--_nys-datepicker-space-sm);transform:translateY(-50%);cursor:pointer}.nys-datepicker--container .nys-datepicker--input-container #calendar-button:hover{outline-color:var(--_nys-datepicker-background-color--date--hover);border-color:var(--_nys-datepicker-background-color--date--hover);background:var(--_nys-datepicker-background-color--date--hover)}.nys-datepicker--container .nys-datepicker--input-container #calendar-button:active{outline-color:var(--_nys-datepicker-background-color--button--active);border-color:var(--_nys-datepicker-background-color--button--active);background:var(--_nys-datepicker-background-color--button--active)}.nys-datepicker--container .nys-datepicker--input-container #calendar-button:focus:not(:active):not(:disabled){outline-color:var(--_nys-datepicker-outline-color--focus);border-color:var(--_nys-datepicker-outline-color--focus)}.nys-datepicker--container .wc-datepicker--container{display:flex;width:fit-content}.nys-datepicker--container .wc-datepicker--container *{flex:1}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}wc-datepicker{display:none;padding:var(--_nys-datepicker-padding--calendar);border-radius:var(--_nys-datepicker-border-radius);border:var(--_nys-datepicker-border-width) solid var(--nys-color-neutral-100, #d0d0ce);background-color:var(--_nys-datepicker-background-color);box-shadow:0 4px 6px -1px var(--nys-color-black-transparent-100, rgba(27, 27, 27, .1)),0 4px 6px -1px var(--nys-color-black-transparent-50, rgba(27, 27, 27, .01));color:var(--_nys-datepicker-text-color);margin-bottom:3px}wc-datepicker.active{display:flex;flex-direction:column-reverse;position:absolute;z-index:1}wc-datepicker *,wc-datepicker *:before,wc-datepicker *:after{margin:0;box-sizing:border-box}.wc-datepicker{display:block;width:min-content;font-family:var(--_nys-datepicker-font-family);font-size:var(--_nys-datepicker-font-size--date);font-weight:400;line-height:var(--_nys-datepicker-line-height);letter-spacing:var(--_nys-datepicker-letterspacing)}.wc-datepicker--disabled *:disabled{opacity:.5;cursor:not-allowed}.wc-datepicker--disabled .wc-datepicker__date{cursor:not-allowed;opacity:.5}.wc-datepicker--disabled .wc-datepicker__date:focus{outline:none;border-color:var(--_nys-datepicker-border-color--date--disabled);box-shadow:none}.wc-datepicker--disabled .wc-datepicker__date:hover:not(.wc-datepicker__date--selected){background-color:transparent}.wc-datepicker--disabled .wc-datepicker__date--selected:hover{color:var(--_nys-datepicker-background-color);background-color:var(--_nys-datepicker-background-color--date--selected)}.wc-datepicker--disabled #wc-month-dropdown-icon{color:var(--_nys-datepicker-color--date--disabled)}.wc-datepicker__header{display:flex;align-items:center;gap:var(--_nys-datepicker-space-sm)}.wc-datepicker__current-month{display:flex;flex-grow:1;gap:var(--_nys-datepicker-space-sm)}.wc-datepicker__month-select,.wc-datepicker__year-select{display:flex;align-items:center;font-size:var(--_nys-datepicker-font-size);font-family:var(--_nys-datepicker-font-family);padding:var(--_nys-datepicker-space-md) var(--_nys-datepicker-space-lg);border:solid var(--_nys-datepicker-border-width) var(--_nys-datepicker-border-color);border-radius:.25rem;color:var(--_nys-datepicker-color);background-color:var(--_nys-datepicker-background-color);line-height:var(--_nys-datepicker-line-height)}.wc-datepicker__month-select:hover:not(:disabled),.wc-datepicker__year-select:hover:not(:disabled){border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--hover);background-color:var(--_nys-datepicker-background-color--navigation--hover);box-shadow:var(--_nys-datepicker-box-shadow-border--navigation)}.wc-datepicker__month-select:active:not(:disabled),.wc-datepicker__month-select[aria-pressed=true],.wc-datepicker__year-select:active:not(:disabled),.wc-datepicker__year-select[aria-pressed=true]{border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--pressed);background-color:var(--_nys-datepicker-background-color--navigation--pressed);box-shadow:var(--_nys-datepicker-box-shadow-border--navigation)}.wc-datepicker__month-select:disabled,.wc-datepicker__month-select[aria-disabled=true],.wc-datepicker__year-select:disabled,.wc-datepicker__year-select[aria-disabled=true]{border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--disabled);background-color:var(--_nys-datepicker-background-color--navigation--disabled);color:var(--_nys-datepicker-color--disabled)}.wc-datepicker .month-wrapper{position:relative;width:135px;display:flex;align-items:center;align-self:stretch}.wc-datepicker .month-wrapper #wc-month-dropdown-icon{position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none}.wc-datepicker__month-select{width:100%;max-width:100%;flex-grow:1;cursor:pointer;appearance:none;text-overflow:ellipsis;padding-right:var(--nys-space-400, 32px)}.wc-datepicker__month-select>*{width:91px;height:24px}.wc-datepicker__year-select{border:solid var(--_nys-datepicker-border-width) var(--_nys-datepicker-border-color);border-radius:.25rem;padding-right:var(--_nys-datepicker-space-sm);max-width:5rem}.wc-datepicker__previous-month-button,.wc-datepicker__next-month-button,.wc-datepicker__previous-year-button,.wc-datepicker__next-year-button{display:inline-flex;width:40px;max-width:40px;max-height:42px;padding:var(--_nys-datepicker-space-lg);justify-content:center;align-items:center;border:solid var(--_nys-datepicker-border-width) var(--_nys-datepicker-border-color);border-radius:.25rem;color:var(--_nys-datepicker-color--date);background-color:var(--_nys-datepicker-background-color);cursor:pointer}.wc-datepicker__previous-month-button:hover:not(:disabled),.wc-datepicker__next-month-button:hover:not(:disabled),.wc-datepicker__previous-year-button:hover:not(:disabled),.wc-datepicker__next-year-button:hover:not(:disabled){background-color:var(--_nys-datepicker-background-color--navigation--hover);box-shadow:var(--_nys-datepicker-box-shadow-border--navigation);border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--hover)}.wc-datepicker__previous-month-button:active:not(:disabled),.wc-datepicker__previous-month-button[aria-pressed=true],.wc-datepicker__next-month-button:active:not(:disabled),.wc-datepicker__next-month-button[aria-pressed=true],.wc-datepicker__previous-year-button:active:not(:disabled),.wc-datepicker__previous-year-button[aria-pressed=true],.wc-datepicker__next-year-button:active:not(:disabled),.wc-datepicker__next-year-button[aria-pressed=true]{background-color:var(--_nys-datepicker-background-color--navigation--pressed);box-shadow:var(--_nys-datepicker-box-shadow-border--navigation);border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--pressed)}.wc-datepicker__previous-month-button:disabled,.wc-datepicker__previous-month-button[aria-disabled=true],.wc-datepicker__next-month-button:disabled,.wc-datepicker__next-month-button[aria-disabled=true],.wc-datepicker__previous-year-button:disabled,.wc-datepicker__previous-year-button[aria-disabled=true],.wc-datepicker__next-year-button:disabled,.wc-datepicker__next-year-button[aria-disabled=true]{background-color:var(--_nys-datepicker-background-color--navigation--disabled);border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--disabled);color:var(--_nys-datepicker-color--disabled)}.wc-datepicker__calendar{width:100%;table-layout:fixed;border-collapse:collapse}.wc-datepicker__weekday{padding:var(--_nys-datepicker-padding--calendar) 0 var(--_nys-datepicker-space-sm) 0;min-width:var(--nys-size-500, 40px);font-weight:600;aspect-ratio:1}.wc-datepicker__weekday>span{width:42.3px;height:24px;display:flex;justify-content:center;align-items:center}.wc-datepicker__weekday[aria-label=Saturday],.wc-datepicker__weekday[aria-label=Sunday]{color:var(--_nys-datepicker-color--calendar--weekends)}.wc-datepicker__date{padding:var(--_nys-datepicker-space-md);text-align:center;cursor:pointer;border-radius:var(--nys-radius-lg)}.wc-datepicker__date:focus,.wc-datepicker__date:focus-visible{outline:none}.wc-datepicker__date:focus{box-shadow:inset 0 0 0 2px var(--_nys-datepicker-focus-ring--date)}.wc-datepicker__date:hover:not(.wc-datepicker__date--selected):not(:active){color:var(--_nys-datepicker-color--date--hover);background-color:var(--_nys-datepicker-background-color--date--hover)}.wc-datepicker__date:active{color:var(--_nys-datepicker-color--date--hover);background-color:var(--_nys-datepicker-background-color--date--active)}.wc-datepicker__date>*{display:flex;justify-content:center;align-items:center;aspect-ratio:1;width:24.3px;height:24px}.wc-datepicker__date--today{font-weight:600;color:var(--_nys-datepicker-color--date--selected)}.wc-datepicker__date--today>*{font-style:normal;text-decoration-line:underline}.wc-datepicker__date--selected{text-decoration-line:none;background-color:var(--_nys-datepicker-background-color--date--selected);color:var(--_nys-datepicker-color--date--selected)}.wc-datepicker__date--selected>*{font-weight:600}.wc-datepicker__date--disabled{color:var(--_nys-datepicker-color--date--disabled);cursor:default}.wc-datepicker__date--disabled:not(.wc-datepicker__date--disabled--selected,.wc-datepicker__date--disabled--in-range):hover{background-color:transparent}.wc-datepicker__date.wc-datepicker__date--overflowing{color:var(--_nys-datepicker-text-disabled)}.wc-datepicker__date.wc-datepicker__date--overflowing:hover,.wc-datepicker__date.wc-datepicker__date--overflowing:active{color:var(--_nys-datepicker-color)}.wc-datepicker--button-container{display:flex;padding-top:var(--_nys-datepicker-space-lg);align-items:flex-end;gap:var(--_nys-datepicker-padding--calendar);align-self:stretch}.wc-datepicker tr.wc-datepicker__calendar-row.sc-wc-datepicker{display:flex;align-items:center;gap:var(--_nys-datepicker-gap--calendar-row);align-self:stretch}', Tt = {
  allRenderFn: !1,
  cmpDidLoad: !0,
  cmpDidUnload: !1,
  cmpDidUpdate: !0,
  cmpDidRender: !0,
  cmpWillLoad: !0,
  cmpWillUpdate: !0,
  cmpWillRender: !0,
  connectedCallback: !0,
  disconnectedCallback: !0,
  element: !0,
  event: !0,
  hasRenderFn: !0,
  lifecycle: !0,
  hostListener: !0,
  hostListenerTargetWindow: !0,
  hostListenerTargetDocument: !0,
  hostListenerTargetBody: !0,
  hostListenerTargetParent: !1,
  hostListenerTarget: !0,
  member: !0,
  method: !0,
  mode: !0,
  observeAttribute: !0,
  prop: !0,
  propMutable: !0,
  reflect: !0,
  scoped: !0,
  shadowDom: !0,
  slot: !0,
  cssAnnotations: !0,
  state: !0,
  style: !0,
  svg: !0,
  updatable: !0,
  vdomAttribute: !0,
  vdomXlink: !0,
  vdomClass: !0,
  vdomFunctional: !0,
  vdomKey: !0,
  vdomListener: !0,
  vdomRef: !0,
  vdomPropOrAttr: !0,
  vdomRender: !0,
  vdomStyle: !0,
  vdomText: !0,
  watchCallback: !0,
  taskQueue: !0,
  hotModuleReplacement: !1,
  isDebug: !1,
  isDev: !1,
  isTesting: !1,
  hydrateServerSide: !1,
  hydrateClientSide: !1,
  lifecycleDOMEvents: !1,
  lazyLoad: !1,
  profile: !1,
  slotRelocation: !0,
  appendChildSlotFix: !1,
  cloneNodeFix: !1,
  hydratedAttribute: !1,
  hydratedClass: !0,
  safari10: !1,
  scriptDataOpts: !1,
  scopedSlotTextContentFix: !1,
  shadowDomShim: !1,
  slotChildNodesFix: !1,
  invisiblePrehydration: !0,
  propBoolean: !0,
  propNumber: !0,
  propString: !0,
  cssVarShim: !1,
  constructableCSS: !0,
  cmpShouldUpdate: !0,
  devTools: !1,
  dynamicImportShim: !1,
  shadowDelegatesFocus: !0,
  initializeNextTick: !1,
  asyncLoading: !1,
  asyncQueue: !1,
  transformTagName: !1,
  attachStyles: !0
};
let It, ur, Zo, pr = !1, No = !1, As = !1, ge = !1, Mn = null, Cs = !1;
const _t = (n, e = "") => () => {
}, zn = "http://www.w3.org/1999/xlink", On = {}, Li = "http://www.w3.org/2000/svg", Ai = "http://www.w3.org/1999/xhtml", Ti = (n) => n != null, Ts = (n) => (n = typeof n, n === "object" || n === "function");
function Ii(n) {
  var e, t, s;
  return (s = (t = (e = n.head) === null || e === void 0 ? void 0 : e.querySelector('meta[name="csp-nonce"]')) === null || t === void 0 ? void 0 : t.getAttribute("content")) !== null && s !== void 0 ? s : void 0;
}
const k = (n, e, ...t) => {
  let s = null, o = null, r = null, i = !1, c = !1;
  const d = [], u = (y) => {
    for (let b = 0; b < y.length; b++)
      s = y[b], Array.isArray(s) ? u(s) : s != null && typeof s != "boolean" && ((i = typeof n != "function" && !Ts(s)) && (s = String(s)), i && c ? d[d.length - 1].$text$ += s : d.push(i ? qo(null, s) : s), c = i);
  };
  if (u(t), e) {
    e.key && (o = e.key), e.name && (r = e.name);
    {
      const y = e.className || e.class;
      y && (e.class = typeof y != "object" ? y : Object.keys(y).filter((b) => y[b]).join(" "));
    }
  }
  if (typeof n == "function")
    return n(e === null ? {} : e, d, zi);
  const f = qo(n, null);
  return f.$attrs$ = e, d.length > 0 && (f.$children$ = d), f.$key$ = o, f.$name$ = r, f;
}, qo = (n, e) => {
  const t = {
    $flags$: 0,
    $tag$: n,
    $text$: e,
    $elm$: null,
    $children$: null
  };
  return t.$attrs$ = null, t.$key$ = null, t.$name$ = null, t;
}, yr = {}, Mi = (n) => n && n.$tag$ === yr, zi = {
  forEach: (n, e) => n.map(Rn).forEach(e),
  map: (n, e) => n.map(Rn).map(e).map(Oi)
}, Rn = (n) => ({
  vattrs: n.$attrs$,
  vchildren: n.$children$,
  vkey: n.$key$,
  vname: n.$name$,
  vtag: n.$tag$,
  vtext: n.$text$
}), Oi = (n) => {
  if (typeof n.vtag == "function") {
    const t = Object.assign({}, n.vattrs);
    return n.vkey && (t.key = n.vkey), n.vname && (t.name = n.vname), k(n.vtag, t, ...n.vchildren || []);
  }
  const e = qo(n.vtag, n.vtext);
  return e.$attrs$ = n.vattrs, e.$children$ = n.vchildren, e.$key$ = n.vkey, e.$name$ = n.vname, e;
}, Ri = (n) => da.map((e) => e(n)).find((e) => !!e), Pi = (n, e) => n != null && !Ts(n) ? e & 4 ? n === "false" ? !1 : n === "" || !!n : e & 2 ? parseFloat(n) : e & 1 ? String(n) : n : n, Bi = (n) => n, Pn = (n, e, t) => {
  const s = Bi(n);
  return {
    emit: (o) => Ni(s, e, {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      detail: o
    })
  };
}, Ni = (n, e, t) => {
  const s = le.ce(e, t);
  return n.dispatchEvent(s), s;
}, Bn = /* @__PURE__ */ new WeakMap(), qi = (n, e, t) => {
  let s = Vo.get(n);
  ya && t ? (s = s || new CSSStyleSheet(), typeof s == "string" ? s = e : s.replaceSync(e)) : s = e, Vo.set(n, s);
}, Fi = (n, e, t, s) => {
  var o;
  let r = fr(e, t);
  const i = Vo.get(r);
  if (n = n.nodeType === 11 ? n : Ie, i)
    if (typeof i == "string") {
      n = n.head || n;
      let c = Bn.get(n), d;
      if (c || Bn.set(n, c = /* @__PURE__ */ new Set()), !c.has(r)) {
        {
          d = Ie.createElement("style"), d.innerHTML = i;
          const u = (o = le.$nonce$) !== null && o !== void 0 ? o : Ii(Ie);
          u != null && d.setAttribute("nonce", u), n.insertBefore(d, n.querySelector("link"));
        }
        c && c.add(r);
      }
    } else n.adoptedStyleSheets.includes(i) || (n.adoptedStyleSheets = [...n.adoptedStyleSheets, i]);
  return r;
}, Vi = (n) => {
  const e = n.$cmpMeta$, t = n.$hostElement$, s = e.$flags$, o = _t("attachStyles", e.$tagName$), r = Fi(t.shadowRoot ? t.shadowRoot : t.getRootNode(), e, n.$modeName$);
  s & 10 && (t["s-sc"] = r, t.classList.add(r + "-h"), s & 2 && t.classList.add(r + "-s")), o();
}, fr = (n, e) => "sc-" + (e && n.$flags$ & 32 ? n.$tagName$ + "-" + e : n.$tagName$), Nn = (n, e, t, s, o, r) => {
  if (t !== s) {
    let i = Hn(n, e), c = e.toLowerCase();
    if (e === "class") {
      const d = n.classList, u = qn(t), f = qn(s);
      d.remove(...u.filter((y) => y && !f.includes(y))), d.add(...f.filter((y) => y && !u.includes(y)));
    } else if (e === "style") {
      for (const d in t)
        (!s || s[d] == null) && (d.includes("-") ? n.style.removeProperty(d) : n.style[d] = "");
      for (const d in s)
        (!t || s[d] !== t[d]) && (d.includes("-") ? n.style.setProperty(d, s[d]) : n.style[d] = s[d]);
    } else if (e !== "key")
      if (e === "ref")
        s && s(n);
      else if (!n.__lookupSetter__(e) && e[0] === "o" && e[1] === "n")
        e[2] === "-" ? e = e.slice(3) : Hn(Xo, c) ? e = c.slice(2) : e = c[2] + e.slice(3), t && le.rel(n, e, t, !1), s && le.ael(n, e, s, !1);
      else {
        const d = Ts(s);
        if ((i || d && s !== null) && !o)
          try {
            if (n.tagName.includes("-"))
              n[e] = s;
            else {
              const f = s ?? "";
              e === "list" ? i = !1 : (t == null || n[e] != f) && (n[e] = f);
            }
          } catch {
          }
        let u = !1;
        c !== (c = c.replace(/^xlink\:?/, "")) && (e = c, u = !0), s == null || s === !1 ? (s !== !1 || n.getAttribute(e) === "") && (u ? n.removeAttributeNS(zn, e) : n.removeAttribute(e)) : (!i || r & 4 || o) && !d && (s = s === !0 ? "" : s, u ? n.setAttributeNS(zn, e, s) : n.setAttribute(e, s));
      }
  }
}, Hi = /\s/, qn = (n) => n ? n.split(Hi) : [], br = (n, e, t, s) => {
  const o = e.$elm$.nodeType === 11 && e.$elm$.host ? e.$elm$.host : e.$elm$, r = n && n.$attrs$ || On, i = e.$attrs$ || On;
  for (s in r)
    s in i || Nn(o, s, r[s], void 0, t, e.$flags$);
  for (s in i)
    Nn(o, s, r[s], i[s], t, e.$flags$);
}, Fo = (n, e, t, s) => {
  const o = e.$children$[t];
  let r = 0, i, c, d;
  if (pr || (As = !0, o.$tag$ === "slot" && (It && s.classList.add(It + "-s"), o.$flags$ |= o.$children$ ? (
    // slot element has fallback content
    2
  ) : (
    // slot element does not have fallback content
    1
  ))), o.$text$ !== null)
    i = o.$elm$ = Ie.createTextNode(o.$text$);
  else if (o.$flags$ & 1)
    i = o.$elm$ = Ie.createTextNode("");
  else {
    if (ge || (ge = o.$tag$ === "svg"), i = o.$elm$ = Ie.createElementNS(ge ? Li : Ai, o.$flags$ & 2 ? "slot-fb" : o.$tag$), ge && o.$tag$ === "foreignObject" && (ge = !1), br(null, o, ge), Ti(It) && i["s-si"] !== It && i.classList.add(i["s-si"] = It), o.$children$)
      for (r = 0; r < o.$children$.length; ++r)
        c = Fo(n, o, r, i), c && i.appendChild(c);
    o.$tag$ === "svg" ? ge = !1 : i.tagName === "foreignObject" && (ge = !0);
  }
  return i["s-hn"] = Zo, o.$flags$ & 3 && (i["s-sr"] = !0, i["s-cr"] = ur, i["s-sn"] = o.$name$ || "", d = n && n.$children$ && n.$children$[t], d && d.$tag$ === o.$tag$ && n.$elm$ && po(n.$elm$, !1)), i;
}, po = (n, e) => {
  le.$flags$ |= 1;
  const t = n.childNodes;
  for (let s = t.length - 1; s >= 0; s--) {
    const o = t[s];
    o["s-hn"] !== Zo && o["s-ol"] && (gr(o).insertBefore(o, Is(o)), o["s-ol"].remove(), o["s-ol"] = void 0, As = !0), e && po(o, e);
  }
  le.$flags$ &= -2;
}, vr = (n, e, t, s, o, r) => {
  let i = n["s-cr"] && n["s-cr"].parentNode || n, c;
  for (i.shadowRoot && i.tagName === Zo && (i = i.shadowRoot); o <= r; ++o)
    s[o] && (c = Fo(null, t, o, n), c && (s[o].$elm$ = c, i.insertBefore(c, Is(e))));
}, _r = (n, e, t, s, o) => {
  for (; e <= t; ++e)
    (s = n[e]) && (o = s.$elm$, wr(s), No = !0, o["s-ol"] ? o["s-ol"].remove() : po(o, !0), o.remove());
}, Ui = (n, e, t, s) => {
  let o = 0, r = 0, i = 0, c = 0, d = e.length - 1, u = e[0], f = e[d], y = s.length - 1, b = s[0], E = s[y], Y, he;
  for (; o <= d && r <= y; )
    if (u == null)
      u = e[++o];
    else if (f == null)
      f = e[--d];
    else if (b == null)
      b = s[++r];
    else if (E == null)
      E = s[--y];
    else if (Oo(u, b))
      Mt(u, b), u = e[++o], b = s[++r];
    else if (Oo(f, E))
      Mt(f, E), f = e[--d], E = s[--y];
    else if (Oo(u, E))
      (u.$tag$ === "slot" || E.$tag$ === "slot") && po(u.$elm$.parentNode, !1), Mt(u, E), n.insertBefore(u.$elm$, f.$elm$.nextSibling), u = e[++o], E = s[--y];
    else if (Oo(f, b))
      (u.$tag$ === "slot" || E.$tag$ === "slot") && po(f.$elm$.parentNode, !1), Mt(f, b), n.insertBefore(f.$elm$, u.$elm$), f = e[--d], b = s[++r];
    else {
      for (i = -1, c = o; c <= d; ++c)
        if (e[c] && e[c].$key$ !== null && e[c].$key$ === b.$key$) {
          i = c;
          break;
        }
      i >= 0 ? (he = e[i], he.$tag$ !== b.$tag$ ? Y = Fo(e && e[r], t, i, n) : (Mt(he, b), e[i] = void 0, Y = he.$elm$), b = s[++r]) : (Y = Fo(e && e[r], t, r, n), b = s[++r]), Y && gr(u.$elm$).insertBefore(Y, Is(u.$elm$));
    }
  o > d ? vr(n, s[y + 1] == null ? null : s[y + 1].$elm$, t, s, r, y) : r > y && _r(e, o, d);
}, Oo = (n, e) => n.$tag$ === e.$tag$ ? n.$tag$ === "slot" ? n.$name$ === e.$name$ : n.$key$ === e.$key$ : !1, Is = (n) => n && n["s-ol"] || n, gr = (n) => (n["s-ol"] ? n["s-ol"] : n).parentNode, Mt = (n, e) => {
  const t = e.$elm$ = n.$elm$, s = n.$children$, o = e.$children$, r = e.$tag$, i = e.$text$;
  let c;
  i === null ? (ge = r === "svg" ? !0 : r === "foreignObject" ? !1 : ge, r === "slot" || br(n, e, ge), s !== null && o !== null ? Ui(t, s, e, o) : o !== null ? (n.$text$ !== null && (t.textContent = ""), vr(t, null, e, o, 0, o.length - 1)) : s !== null && _r(s, 0, s.length - 1), ge && r === "svg" && (ge = !1)) : (c = t["s-cr"]) ? c.parentNode.textContent = i : n.$text$ !== i && (t.data = i);
}, mr = (n) => {
  const e = n.childNodes;
  let t, s, o, r, i, c;
  for (s = 0, o = e.length; s < o; s++)
    if (t = e[s], t.nodeType === 1) {
      if (t["s-sr"]) {
        for (i = t["s-sn"], t.hidden = !1, r = 0; r < o; r++)
          if (c = e[r].nodeType, e[r]["s-hn"] !== t["s-hn"] || i !== "") {
            if (c === 1 && i === e[r].getAttribute("slot")) {
              t.hidden = !0;
              break;
            }
          } else if (c === 1 || c === 3 && e[r].textContent.trim() !== "") {
            t.hidden = !0;
            break;
          }
      }
      mr(t);
    }
}, Te = [], xr = (n) => {
  let e, t, s, o, r, i, c = 0;
  const d = n.childNodes, u = d.length;
  for (; c < u; c++) {
    if (e = d[c], e["s-sr"] && (t = e["s-cr"]) && t.parentNode)
      for (s = t.parentNode.childNodes, o = e["s-sn"], i = s.length - 1; i >= 0; i--)
        t = s[i], !t["s-cn"] && !t["s-nr"] && t["s-hn"] !== e["s-hn"] && (Fn(t, o) ? (r = Te.find((f) => f.$nodeToRelocate$ === t), No = !0, t["s-sn"] = t["s-sn"] || o, r ? r.$slotRefNode$ = e : Te.push({
          $slotRefNode$: e,
          $nodeToRelocate$: t
        }), t["s-sr"] && Te.map((f) => {
          Fn(f.$nodeToRelocate$, t["s-sn"]) && (r = Te.find((y) => y.$nodeToRelocate$ === t), r && !f.$slotRefNode$ && (f.$slotRefNode$ = r.$slotRefNode$));
        })) : Te.some((f) => f.$nodeToRelocate$ === t) || Te.push({
          $nodeToRelocate$: t
        }));
    e.nodeType === 1 && xr(e);
  }
}, Fn = (n, e) => n.nodeType === 1 ? n.getAttribute("slot") === null && e === "" || n.getAttribute("slot") === e : n["s-sn"] === e ? !0 : e === "", wr = (n) => {
  n.$attrs$ && n.$attrs$.ref && n.$attrs$.ref(null), n.$children$ && n.$children$.map(wr);
}, ji = (n, e) => {
  const t = n.$hostElement$, s = n.$cmpMeta$, o = n.$vnode$ || qo(null, null), r = Mi(e) ? e : k(null, null, e);
  Zo = t.tagName, s.$attrsToReflect$ && (r.$attrs$ = r.$attrs$ || {}, s.$attrsToReflect$.map(([i, c]) => r.$attrs$[c] = t[i])), r.$tag$ = null, r.$flags$ |= 4, n.$vnode$ = r, r.$elm$ = o.$elm$ = t.shadowRoot || t, It = t["s-sc"], ur = t["s-cr"], pr = (s.$flags$ & 1) !== 0, No = !1, Mt(o, r);
  {
    if (le.$flags$ |= 1, As) {
      xr(r.$elm$);
      let i, c, d, u, f, y, b = 0;
      for (; b < Te.length; b++)
        i = Te[b], c = i.$nodeToRelocate$, c["s-ol"] || (d = Ie.createTextNode(""), d["s-nr"] = c, c.parentNode.insertBefore(c["s-ol"] = d, c));
      for (b = 0; b < Te.length; b++)
        if (i = Te[b], c = i.$nodeToRelocate$, i.$slotRefNode$) {
          for (u = i.$slotRefNode$.parentNode, f = i.$slotRefNode$.nextSibling, d = c["s-ol"]; d = d.previousSibling; )
            if (y = d["s-nr"], y && y["s-sn"] === c["s-sn"] && u === y.parentNode && (y = y.nextSibling, !y || !y["s-nr"])) {
              f = y;
              break;
            }
          (!f && u !== c.parentNode || c.nextSibling !== f) && c !== f && (!c["s-hn"] && c["s-ol"] && (c["s-hn"] = c["s-ol"].parentNode.nodeName), u.insertBefore(c, f));
        } else
          c.nodeType === 1 && (c.hidden = !0);
    }
    No && mr(r.$elm$), le.$flags$ &= -2, Te.length = 0;
  }
}, Wi = (n, e) => {
}, kr = (n, e) => (n.$flags$ |= 16, Wi(n, n.$ancestorComponent$), va(() => Yi(n, e))), Yi = (n, e) => {
  const t = n.$hostElement$, s = _t("scheduleUpdate", n.$cmpMeta$.$tagName$), o = t;
  let r;
  return e ? r = Ot(o, "componentWillLoad") : r = Ot(o, "componentWillUpdate"), r = Vn(r, () => Ot(o, "componentWillRender")), s(), Vn(r, () => Gi(n, o, e));
}, Gi = async (n, e, t) => {
  const s = n.$hostElement$, o = _t("update", n.$cmpMeta$.$tagName$);
  s["s-rc"], t && Vi(n);
  const r = _t("render", n.$cmpMeta$.$tagName$);
  Ki(n, e, s), r(), o(), Zi(n);
}, Ki = (n, e, t) => {
  try {
    Mn = e, e = e.render && e.render(), n.$flags$ &= -17, n.$flags$ |= 2, (Tt.hasRenderFn || Tt.reflect) && (Tt.vdomRender || Tt.reflect) && (Tt.hydrateServerSide || ji(n, e));
  } catch (c) {
    go(c, n.$hostElement$);
  }
  return Mn = null, null;
}, Zi = (n) => {
  const e = n.$cmpMeta$.$tagName$, t = n.$hostElement$, s = _t("postUpdate", e), o = t;
  n.$ancestorComponent$, Ot(o, "componentDidRender"), n.$flags$ & 64 ? (Ot(o, "componentDidUpdate"), s()) : (n.$flags$ |= 64, Ot(o, "componentDidLoad"), s());
}, Ot = (n, e, t) => {
  if (n && n[e])
    try {
      return n[e](t);
    } catch (s) {
      go(s);
    }
}, Vn = (n, e) => n && n.then ? n.then(e) : e(), Qi = (n, e) => Qo(n).$instanceValues$.get(e), Xi = (n, e, t, s) => {
  const o = Qo(n), r = n, i = o.$instanceValues$.get(e), c = o.$flags$, d = r;
  t = Pi(t, s.$members$[e][0]);
  const u = Number.isNaN(i) && Number.isNaN(t);
  if (t !== i && !u) {
    o.$instanceValues$.set(e, t);
    {
      if (s.$watchers$ && c & 128) {
        const y = s.$watchers$[e];
        y && y.map((b) => {
          try {
            d[b](t, i, e);
          } catch (E) {
            go(E, r);
          }
        });
      }
      if ((c & 18) === 2) {
        if (d.componentShouldUpdate && d.componentShouldUpdate(t, i, e) === !1)
          return;
        kr(o, !1);
      }
    }
  }
}, Ji = (n, e, t) => {
  if (e.$members$) {
    n.watchers && (e.$watchers$ = n.watchers);
    const s = Object.entries(e.$members$), o = n.prototype;
    s.map(([r, [i]]) => {
      (i & 31 || i & 32) && Object.defineProperty(o, r, {
        get() {
          return Qi(this, r);
        },
        set(c) {
          Xi(this, r, c, e);
        },
        configurable: !0,
        enumerable: !0
      });
    });
    {
      const r = /* @__PURE__ */ new Map();
      o.attributeChangedCallback = function(i, c, d) {
        le.jmp(() => {
          const u = r.get(i);
          if (this.hasOwnProperty(u))
            d = this[u], delete this[u];
          else if (o.hasOwnProperty(u) && typeof this[u] == "number" && this[u] == d)
            return;
          this[u] = d === null && typeof this[u] == "boolean" ? !1 : d;
        });
      }, n.observedAttributes = s.filter(
        ([i, c]) => c[0] & 15
        /* MEMBER_FLAGS.HasAttribute */
      ).map(([i, c]) => {
        const d = c[1] || i;
        return r.set(d, i), c[0] & 512 && e.$attrsToReflect$.push([i, d]), d;
      });
    }
  }
  return n;
}, ea = async (n, e, t, s, o) => {
  if ((e.$flags$ & 32) === 0 && (o = n.constructor, e.$flags$ |= 32, customElements.whenDefined(t.$tagName$).then(() => e.$flags$ |= 128), o.style)) {
    let i = o.style;
    typeof i != "string" && (i = i[e.$modeName$ = Ri(n)]);
    const c = fr(t, e.$modeName$);
    if (!Vo.has(c)) {
      const d = _t("registerStyles", t.$tagName$);
      qi(c, i, !!(t.$flags$ & 1)), d();
    }
  }
  e.$ancestorComponent$, kr(e, !0);
}, ta = (n) => {
}, oa = (n) => {
  if ((le.$flags$ & 1) === 0) {
    const e = Qo(n), t = e.$cmpMeta$, s = _t("connectedCallback", t.$tagName$);
    e.$flags$ & 1 ? (Cr(n, e, t.$listeners$), ta(e.$lazyInstance$)) : (e.$flags$ |= 1, t.$flags$ & 12 && sa(n), t.$members$ && Object.entries(t.$members$).map(([o, [r]]) => {
      if (r & 31 && n.hasOwnProperty(o)) {
        const i = n[o];
        delete n[o], n[o] = i;
      }
    }), ea(n, e, t)), s();
  }
}, sa = (n) => {
  const e = n["s-cr"] = Ie.createComment("");
  e["s-cn"] = !0, n.insertBefore(e, n.firstChild);
}, na = (n) => {
  if ((le.$flags$ & 1) === 0) {
    const e = Qo(n);
    e.$rmListeners$ && (e.$rmListeners$.map((t) => t()), e.$rmListeners$ = void 0);
  }
}, ra = (n, e) => {
  const t = {
    $flags$: e[0],
    $tagName$: e[1]
  };
  t.$members$ = e[2], t.$listeners$ = e[3], t.$watchers$ = n.$watchers$, t.$attrsToReflect$ = [];
  const s = n.prototype.connectedCallback, o = n.prototype.disconnectedCallback;
  return Object.assign(n.prototype, {
    __registerHost() {
      ca(this, t);
    },
    connectedCallback() {
      oa(this), s && s.call(this);
    },
    disconnectedCallback() {
      na(this), o && o.call(this);
    },
    __attachShadow() {
      this.attachShadow({
        mode: "open",
        delegatesFocus: !!(t.$flags$ & 16)
      });
    }
  }), n.is = t.$tagName$, Ji(n, t);
}, Cr = (n, e, t, s) => {
  t && t.map(([o, r, i]) => {
    const c = aa(n, o), d = ia(e, i), u = la(o);
    le.ael(c, r, d, u), (e.$rmListeners$ = e.$rmListeners$ || []).push(() => le.rel(c, r, d, u));
  });
}, ia = (n, e) => (t) => {
  try {
    Tt.lazyLoad || n.$hostElement$[e](t);
  } catch (s) {
    go(s);
  }
}, aa = (n, e) => e & 4 ? Ie : e & 8 ? Xo : e & 16 ? Ie.body : n, la = (n) => ua ? {
  passive: (n & 1) !== 0,
  capture: (n & 2) !== 0
} : (n & 2) !== 0, $r = /* @__PURE__ */ new WeakMap(), Qo = (n) => $r.get(n), ca = (n, e) => {
  const t = {
    $flags$: 0,
    $hostElement$: n,
    $cmpMeta$: e,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  return Cr(n, t, e.$listeners$), $r.set(n, t);
}, Hn = (n, e) => e in n, go = (n, e) => (0, console.error)(n, e), Vo = /* @__PURE__ */ new Map(), da = [], Xo = typeof window < "u" ? window : {}, Ie = Xo.document || { head: {} }, ha = Xo.HTMLElement || class {
}, le = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (n) => n(),
  raf: (n) => requestAnimationFrame(n),
  ael: (n, e, t, s) => n.addEventListener(e, t, s),
  rel: (n, e, t, s) => n.removeEventListener(e, t, s),
  ce: (n, e) => new CustomEvent(n, e)
}, ua = /* @__PURE__ */ (() => {
  let n = !1;
  try {
    Ie.addEventListener("e", null, Object.defineProperty({}, "passive", {
      get() {
        n = !0;
      }
    }));
  } catch {
  }
  return n;
})(), pa = (n) => Promise.resolve(n), ya = /* @__PURE__ */ (() => {
  try {
    return new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == "function";
  } catch {
  }
  return !1;
})(), Un = [], Er = [], fa = (n, e) => (t) => {
  n.push(t), Cs || (Cs = !0, e && le.$flags$ & 4 ? ba($s) : le.raf($s));
}, jn = (n) => {
  for (let e = 0; e < n.length; e++)
    try {
      n[e](performance.now());
    } catch (t) {
      go(t);
    }
  n.length = 0;
}, $s = () => {
  jn(Un), jn(Er), (Cs = Un.length > 0) && le.raf($s);
}, ba = (n) => pa().then(n), va = /* @__PURE__ */ fa(Er, !0);
function Po(n, e) {
  const t = new Date(n);
  return t.setDate(t.getDate() + e), t;
}
function _a(n, e, t) {
  const s = [], o = Ho(n), r = o.getDay() === 0 ? 7 : o.getDay(), i = Xt(n), c = i.getDay() === 0 ? 7 : i.getDay(), d = t === 1 ? 7 : t - 1, u = [], f = [];
  {
    let E = (7 - t + r) % 7, Y = Uo(o);
    for (; E > 0; )
      u.push(Y), Y = Uo(Y), E -= 1;
    u.reverse();
    let _e = (7 - c + d) % 7, se = eo(i);
    for (; _e > 0; )
      f.push(se), se = eo(se), _e -= 1;
  }
  let y = o;
  for (; y.getMonth() === n.getMonth(); )
    s.push(y), y = eo(y);
  return [...u, ...s, ...f];
}
function Ho(n) {
  return ie(/* @__PURE__ */ new Date(`${String(Dr(n)).padStart(4, "0")}-${String(Sr(n)).padStart(2, "0")}-01`));
}
function bt(n) {
  if (n instanceof Date)
    return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`;
}
function Xt(n) {
  const e = Ho(n);
  return e.setMonth(e.getMonth() + 1), e.setDate(e.getDate() - 1), e;
}
function Sr(n) {
  return n.getMonth() + 1;
}
function ga(n) {
  return new Array(12).fill(void 0).map((e, t) => {
    const s = ie(/* @__PURE__ */ new Date(`2006-${String(t + 1).padStart(2, "0")}-01`));
    return Intl.DateTimeFormat(n, {
      month: "long"
    }).format(s);
  });
}
function eo(n) {
  return Po(n, 1);
}
function vs(n) {
  const e = new Date(n);
  return e.setDate(1), e.setMonth(e.getMonth() + 1), e;
}
function Wn(n) {
  const e = new Date(n);
  return e.setFullYear(e.getFullYear() + 1), e;
}
function Uo(n) {
  return Bo(n, 1);
}
function _s(n) {
  const e = new Date(n);
  return e.setDate(1), e.setMonth(e.getMonth() - 1), e;
}
function Yn(n) {
  const e = new Date(n);
  return e.setFullYear(e.getFullYear() - 1), e;
}
function ma(n, e) {
  return new Array(7).fill(void 0).map((t, s) => (n + s) % 7 + 1).map((t) => {
    const s = ie(/* @__PURE__ */ new Date(`2006-01-0${t}`));
    return [
      Intl.DateTimeFormat(e, {
        weekday: "short"
      }).format(s).slice(0, 3),
      Intl.DateTimeFormat(e, {
        weekday: "long"
      }).format(s)
    ];
  });
}
function Dr(n) {
  return n.getFullYear();
}
function Gn(n, e) {
  if (!n || !e || !e.from || !e.to)
    return !1;
  const t = e.from < e.to ? e.from : e.to, s = e.from < e.to ? e.to : e.from;
  return n >= t && n <= s;
}
function Ge(n, e) {
  return !n || !e ? !1 : n.getFullYear() === e.getFullYear() && n.getMonth() === e.getMonth() && n.getDate() === e.getDate();
}
function ie(n) {
  const e = new Date(n);
  return e.setMinutes(e.getMinutes() + e.getTimezoneOffset()), e;
}
function Bo(n, e) {
  const t = new Date(n);
  return t.setDate(t.getDate() - e), t;
}
const xa = ".visually-hidden.sc-wc-datepicker{position:absolute;overflow:hidden;width:1px;height:1px;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)}", wa = {
  clearButton: "Clear value",
  monthSelect: "Select month",
  nextMonthButton: "Next month",
  nextYearButton: "Next year",
  picker: "Choose date",
  previousMonthButton: "Previous month",
  previousYearButton: "Previous year",
  todayButton: "Show today",
  yearSelect: "Select year"
}, ka = /* @__PURE__ */ ra(class extends ha {
  constructor() {
    super(), this.__registerHost(), this.selectDate = Pn(this, "selectDate"), this.changeMonth = Pn(this, "changeMonth"), this.disabled = !1, this.disableDate = () => !1, this.elementClassName = "wc-datepicker", this.firstDayOfWeek = 0, this.goToRangeStartOnSelect = !0, this.labels = wa, this.locale = navigator?.language || "en-US", this.maxSearchDays = 365, this.showClearButton = !1, this.showMonthStepper = !0, this.showTodayButton = !1, this.showYearStepper = !1, this.startDate = bt(/* @__PURE__ */ new Date()), this.pendingClick = !1, this.init = () => {
      this.currentDate = this.startDate ? ie(new Date(this.startDate)) : /* @__PURE__ */ new Date(), this.updateWeekdays(), this.handleMinDate(), this.handleMaxDate();
    }, this.getAvailableDate = (n, e) => {
      let t, s = !1;
      switch (e) {
        case "previousDay":
          t = Uo(n);
          break;
        case "nextDay":
          t = eo(n);
          break;
        case "previousSameWeekDay":
          t = Bo(n, 7);
          break;
        case "nextSameWeekDay":
          t = Po(n, 7);
          break;
        case "firstOfMonth":
          t = Ho(n);
          break;
        case "lastOfMonth":
          t = Xt(n);
          break;
        case "previousMonth":
          t = _s(n);
          break;
        case "nextMonth":
          t = vs(n);
          break;
        case "previousYear":
          t = Yn(n);
          break;
        case "nextYear":
          t = Wn(n);
          break;
      }
      for (; this.disableDate(t) && !s; ) {
        switch (e) {
          case "previousDay":
          case "lastOfMonth":
            t = Uo(t);
            break;
          case "nextDay":
          case "firstOfMonth":
          case "previousMonth":
          case "nextMonth":
          case "previousYear":
          case "nextYear":
            t = eo(t);
            break;
          case "previousSameWeekDay":
            t = Bo(t, 7);
            break;
          case "nextSameWeekDay":
            t = Po(t, 7);
            break;
        }
        switch (e) {
          case "firstOfMonth":
          case "lastOfMonth":
          case "previousYear":
          case "nextYear":
            s = t.getMonth() !== n.getMonth();
            break;
          case "previousMonth":
            s = t.getMonth() !== n.getMonth() - 1;
            break;
          case "nextMonth":
            s = t.getMonth() !== n.getMonth() + 1;
            break;
          default:
            s = !Gn(t, {
              from: Bo(n, this.maxSearchDays),
              to: Po(n, this.maxSearchDays)
            });
            break;
        }
      }
      return s ? n : t;
    }, this.nextMonth = () => {
      this.updateCurrentDate(vs(this.currentDate));
    }, this.nextYear = () => {
      this.updateCurrentDate(Wn(this.currentDate));
    }, this.previousMonth = () => {
      this.updateCurrentDate(_s(this.currentDate));
    }, this.previousYear = () => {
      this.updateCurrentDate(Yn(this.currentDate));
    }, this.showToday = () => {
      this.updateCurrentDate(/* @__PURE__ */ new Date());
    }, this.clear = () => {
      this.value = void 0, this.selectDate.emit(void 0);
    }, this.onClick = (n) => {
      if (this.disabled)
        return;
      this.pendingClick = !1;
      const e = n.target.closest("[data-date]");
      if (!e)
        return;
      const t = ie(new Date(e.dataset.date));
      this.isDateDisabled(t) || (this.updateCurrentDate(t), this.onSelectDate(t));
    }, this.onMonthSelect = (n) => {
      const e = +n.target.value - 1, t = this.currentDate.getDate(), s = new Date(this.currentDate.getFullYear(), e, 1), o = Xt(s).getDate(), r = Math.min(t, o), i = new Date(this.currentDate.getFullYear(), e, r);
      this.updateCurrentDate(i);
    }, this.onYearSelect = (n) => {
      let e = +n.target.value;
      const t = n.target;
      isNaN(e) ? (e = (/* @__PURE__ */ new Date()).getFullYear(), t.value = String(e)) : e < 0 ? (e = 0, t.value = String(e)) : e > 9999 && (e = 9999, t.value = String(e));
      const s = this.currentDate.getDate(), o = this.currentDate.getMonth(), r = /* @__PURE__ */ new Date();
      r.setFullYear(e, o, 1);
      const i = Xt(r).getDate(), c = Math.min(s, i), d = /* @__PURE__ */ new Date();
      d.setFullYear(e, o, c), this.updateCurrentDate(d);
    }, this.onKeyDown = (n) => {
      this.disabled || (n.code === "ArrowLeft" ? (n.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "previousDay"), !0)) : n.code === "ArrowRight" ? (n.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "nextDay"), !0)) : n.code === "ArrowUp" ? (n.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "previousSameWeekDay"), !0)) : n.code === "ArrowDown" ? (n.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "nextSameWeekDay"), !0)) : n.code === "PageUp" ? (n.preventDefault(), n.shiftKey ? this.updateCurrentDate(this.getAvailableDate(this.currentDate, "previousYear"), !0) : this.updateCurrentDate(this.getAvailableDate(this.currentDate, "previousMonth"), !0)) : n.code === "PageDown" ? (n.preventDefault(), n.shiftKey ? this.updateCurrentDate(this.getAvailableDate(this.currentDate, "nextYear"), !0) : this.updateCurrentDate(this.getAvailableDate(this.currentDate, "nextMonth"), !0)) : n.code === "Home" ? (n.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "firstOfMonth"), !0)) : n.code === "End" ? (n.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "lastOfMonth"), !0)) : (n.code === "Space" || n.code === "Enter") && (n.preventDefault(), this.isDateDisabled(this.currentDate) || this.onSelectDate(this.currentDate)));
    }, this.onMouseEnter = (n) => {
      if (this.disabled)
        return;
      const e = ie(new Date(n.target.closest("td").dataset.date));
      this.hoveredDate = e;
    }, this.onMouseLeave = () => {
      this.hoveredDate = void 0;
    }, this.onMouseDown = () => {
      this.pendingClick = !0;
    }, this.onFocus = (n) => {
      if (this.pendingClick)
        return;
      const e = ie(new Date(n.target.dataset.date));
      Ge(e, this.currentDate) || this.updateCurrentDate(e);
    };
  }
  componentWillLoad() {
    this.init();
  }
  watchFirstDayOfWeek() {
    this.updateWeekdays();
  }
  watchLocale() {
    this.locale || (this.locale = navigator?.language || "en-US"), this.updateWeekdays();
  }
  watchRange() {
    this.value = void 0, this.selectDate.emit(void 0);
  }
  watchStartDate() {
    this.currentDate = this.startDate ? ie(new Date(this.startDate)) : /* @__PURE__ */ new Date();
  }
  watchValue() {
    this.value && (Array.isArray(this.value) ? this.currentDate = this.value.length > 1 && !this.goToRangeStartOnSelect ? this.value[1] : this.value[0] : this.value instanceof Date && (this.currentDate = this.value));
  }
  handleMinDate() {
    this.minDate && this.currentDate < ie(new Date(this.minDate)) && (this.currentDate = ie(new Date(this.minDate)));
  }
  handleMaxDate() {
    this.maxDate && this.currentDate > ie(new Date(this.maxDate)) && (this.currentDate = ie(new Date(this.maxDate)));
  }
  componentDidRender() {
    this.moveFocusAfterMonthChanged && (this.focusDate(this.currentDate), this.moveFocusAfterMonthChanged = !1);
  }
  updateWeekdays() {
    this.weekdays = ma(this.firstDayOfWeek === 0 ? 7 : this.firstDayOfWeek, this.locale);
  }
  getClassName(n) {
    return n ? `${this.elementClassName}__${n}` : this.elementClassName;
  }
  getCalendarRows() {
    const n = _a(this.currentDate, !0, this.firstDayOfWeek === 0 ? 7 : this.firstDayOfWeek), e = [];
    for (let t = 0; t < n.length; t += 7) {
      const s = n.slice(t, t + 7);
      e.push(s);
    }
    return e;
  }
  getTitle() {
    if (this.value)
      if (this.isRangeValue(this.value)) {
        const n = Intl.DateTimeFormat(this.locale, {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(this.value[0]), e = this.value[1] ? Intl.DateTimeFormat(this.locale, {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(this.value[1]) : void 0;
        return e ? `${n} - ${e}` : n;
      } else
        return Intl.DateTimeFormat(this.locale, {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(this.value);
  }
  focusDate(n) {
    var e;
    (e = this.el.querySelector(`[data-date="${bt(n)}"]`)) === null || e === void 0 || e.focus();
  }
  updateCurrentDate(n, e) {
    const t = n.getMonth(), s = n.getFullYear();
    if (s > 9999 || s < 0)
      return;
    (t !== this.currentDate.getMonth() || s !== this.currentDate.getFullYear()) && (this.changeMonth.emit({
      month: Sr(n),
      year: Dr(n),
      day: n.getDate()
    }), e && (this.moveFocusAfterMonthChanged = !0)), this.currentDate = n, e && this.focusDate(this.currentDate);
  }
  onSelectDate(n) {
    var e, t;
    if (!this.isDateDisabled(n))
      if (this.isRangeValue(this.value)) {
        const s = ((e = this.value) === null || e === void 0 ? void 0 : e[0]) === void 0 || this.value.length === 2 ? [n] : [this.value[0], n];
        s.length === 2 && s[0] > s[1] && s.reverse();
        const o = s[1] === void 0 ? [bt(s[0])] : [bt(s[0]), bt(s[1])];
        this.value = s, this.selectDate.emit(o);
      } else {
        if (((t = this.value) === null || t === void 0 ? void 0 : t.getTime()) === n.getTime())
          return;
        this.value = n, this.selectDate.emit(bt(n));
      }
  }
  // @ts-ignore
  isRangeValue(n) {
    return this.range;
  }
  get isPreviousMonthDisabled() {
    if (!this.minDate)
      return !1;
    const n = _s(this.currentDate), e = ie(new Date(this.minDate));
    return Xt(n) < e;
  }
  get isNextMonthDisabled() {
    if (!this.maxDate)
      return !1;
    const n = vs(this.currentDate), e = ie(new Date(this.maxDate));
    return Ho(n) > e;
  }
  isDateDisabled(n) {
    if (this.disableDate(n))
      return !0;
    const e = this.minDate && n < ie(new Date(this.minDate)), t = this.maxDate && n > ie(new Date(this.maxDate));
    return !!(e || t);
  }
  render() {
    const n = this.showTodayButton || this.showClearButton;
    return k(yr, null, k("div", { "aria-disabled": String(this.disabled), "aria-label": this.labels.picker, class: {
      [this.getClassName()]: !0,
      [`${this.getClassName()}--disabled`]: this.disabled
    }, role: "group" }, k("div", { class: this.getClassName("header") }, k("span", { "aria-atomic": "true", "aria-live": "polite", class: "visually-hidden" }, this.getTitle()), this.showYearStepper && k("button", { "aria-label": this.labels.previousYearButton, class: this.getClassName("previous-year-button"), disabled: this.disabled, innerHTML: this.previousYearButtonContent || void 0, onClick: this.previousYear, type: "button" }, k("svg", { fill: "none", height: "24", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", stroke: "currentColor", viewBox: "0 0 24 24", width: "24" }, k("polyline", { points: "11 17 6 12 11 7" }), k("polyline", { points: "18 17 13 12 18 7" }))), this.showMonthStepper && k("button", { "aria-label": this.labels.previousMonthButton, class: {
      [this.getClassName("previous-month-button")]: !0,
      [this.getClassName("next-month-button--disabled")]: this.isPreviousMonthDisabled
    }, disabled: this.disabled || this.isPreviousMonthDisabled, innerHTML: this.previousMonthButtonContent || void 0, onClick: this.previousMonth, type: "button" }, k("svg", { fill: "none", height: "24", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", stroke: "currentColor", viewBox: "0 0 24 24", width: "24" }, k("polyline", { points: "15 18 9 12 15 6" }))), k("span", { class: this.getClassName("current-month") }, k("select", { title: this.labels.monthSelect, "aria-label": this.labels.monthSelect, class: this.getClassName("month-select"), disabled: this.disabled, onChange: this.onMonthSelect }, ga(this.locale).map((e, t) => k("option", { key: e, selected: this.currentDate.getMonth() === t, value: t + 1 }, e))), k("input", { title: this.labels.yearSelect, "aria-label": this.labels.yearSelect, class: this.getClassName("year-select"), disabled: this.disabled, max: 9999, maxLength: 4, min: 1, onChange: this.onYearSelect, type: "number", value: this.currentDate.getFullYear() })), this.showMonthStepper && k("button", { "aria-label": this.labels.nextMonthButton, class: {
      [this.getClassName("next-month-button")]: !0,
      [this.getClassName("next-month-button--disabled")]: this.isNextMonthDisabled
    }, disabled: this.disabled || this.isNextMonthDisabled, innerHTML: this.nextMonthButtonContent || void 0, onClick: this.nextMonth, type: "button" }, k("svg", { fill: "none", height: "24", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", stroke: "currentColor", viewBox: "0 0 24 24", width: "24" }, k("polyline", { points: "9 18 15 12 9 6" }))), this.showYearStepper && k("button", { "aria-label": this.labels.nextYearButton, class: this.getClassName("next-year-button"), disabled: this.disabled, innerHTML: this.nextYearButtonContent || void 0, onClick: this.nextYear, type: "button" }, k("svg", { fill: "none", height: "24", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", stroke: "currentColor", viewBox: "0 0 24 24", width: "24" }, k("polyline", { points: "13 17 18 12 13 7" }), k("polyline", { points: "6 17 11 12 6 7" })))), k("div", { class: this.getClassName("body") }, k("table", { class: this.getClassName("calendar"), onKeyDown: this.onKeyDown, role: "grid" }, k("thead", { class: this.getClassName("calendar-header") }, k("tr", { class: this.getClassName("weekday-row") }, this.weekdays.map((e) => k("th", { "aria-label": e[1], abbr: e[1], class: this.getClassName("weekday"), key: e[0], scope: "col" }, k("span", null, e[0]))))), k("tbody", null, this.getCalendarRows().map((e) => {
      const t = `row-${e[0].getMonth()}-${e[0].getDate()}`;
      return k("tr", { class: this.getClassName("calendar-row"), key: t }, e.map((s) => {
        var o, r, i, c, d;
        const u = Ge(s, this.currentDate), f = s.getMonth() !== this.currentDate.getMonth(), y = Array.isArray(this.value) ? Ge(s, this.value[0]) || Ge(s, this.value[1]) : Ge(s, this.value), b = this.isRangeValue ? Gn(s, {
          from: (o = this.value) === null || o === void 0 ? void 0 : o[0],
          to: ((r = this.value) === null || r === void 0 ? void 0 : r[1]) || this.hoveredDate || this.currentDate
        }) : !1, E = !((i = this.value) === null || i === void 0) && i[0] ? [
          (c = this.value) === null || c === void 0 ? void 0 : c[0],
          ((d = this.value) === null || d === void 0 ? void 0 : d[1]) || this.hoveredDate
        ].sort((Ce, R) => Ce - R) : [], Y = this.range && Ge(E[0], s), he = this.range && Ge(E[1], s), _e = Ge(s, /* @__PURE__ */ new Date()), se = this.isDateDisabled(s), De = `cell-${s.getMonth()}-${s.getDate()}`, ke = {
          [this.getClassName("date")]: !0,
          [this.getClassName("date--current")]: u,
          [this.getClassName("date--disabled")]: se,
          [this.getClassName("date--overflowing")]: f,
          [this.getClassName("date--today")]: _e,
          [this.getClassName("date--selected")]: y,
          [this.getClassName("date--in-range")]: b,
          [this.getClassName("date--start")]: Y,
          [this.getClassName("date--end")]: he
        }, ne = y ? "strong" : _e ? "em" : "span";
        return k("td", { "aria-disabled": String(se), "aria-selected": y ? "true" : void 0, "aria-current": _e ? "date" : y ? "true" : void 0, class: ke, "data-date": bt(s), key: De, onClick: this.onClick, onMouseDown: this.onMouseDown, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onFocus: this.onFocus, role: "gridcell", tabIndex: Ge(s, this.currentDate) && !this.disabled ? 0 : -1 }, k(ne, { "aria-hidden": "true" }, s.getDate()), k("span", { class: "visually-hidden" }, Intl.DateTimeFormat(this.locale, {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(s)));
      }));
    })))), n && k("div", { class: this.getClassName("footer") }, this.showTodayButton && k("button", { class: this.getClassName("today-button"), disabled: this.disabled, innerHTML: this.todayButtonContent || void 0, onClick: this.showToday, type: "button" }, this.labels.todayButton), this.showClearButton && k("button", { class: this.getClassName("clear-button"), disabled: this.disabled, innerHTML: this.clearButtonContent || void 0, onClick: this.clear, type: "button" }, this.labels.clearButton))));
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      firstDayOfWeek: ["watchFirstDayOfWeek"],
      locale: ["watchLocale"],
      range: ["watchRange"],
      startDate: ["watchStartDate"],
      value: ["watchValue"],
      minDate: ["handleMinDate"],
      maxDate: ["handleMaxDate"]
    };
  }
  static get style() {
    return xa;
  }
}, [2, "wc-datepicker", {
  clearButtonContent: [1, "clear-button-content"],
  disabled: [4],
  disableDate: [16],
  elementClassName: [1, "element-class-name"],
  firstDayOfWeek: [2, "first-day-of-week"],
  goToRangeStartOnSelect: [4, "go-to-range-start-on-select"],
  range: [4],
  labels: [16],
  locale: [1],
  maxDate: [1, "max-date"],
  maxSearchDays: [2, "max-search-days"],
  minDate: [1, "min-date"],
  nextMonthButtonContent: [1, "next-month-button-content"],
  nextYearButtonContent: [1, "next-year-button-content"],
  previousMonthButtonContent: [1, "previous-month-button-content"],
  previousYearButtonContent: [1, "previous-year-button-content"],
  showClearButton: [4, "show-clear-button"],
  showMonthStepper: [4, "show-month-stepper"],
  showTodayButton: [4, "show-today-button"],
  showYearStepper: [4, "show-year-stepper"],
  startDate: [1, "start-date"],
  todayButtonContent: [1, "today-button-content"],
  value: [1040],
  currentDate: [32],
  hoveredDate: [32],
  weekdays: [32]
}]), Ca = ka;
var $a = Object.defineProperty, H = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && $a(e, t, o), o;
};
customElements.get("wc-datepicker") || customElements.define("wc-datepicker", Ca);
let Ea = 0;
var nt;
const M = (nt = class extends m {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.width = "md", this.hideTodayButton = !1, this.hideClearButton = !1, this.disabled = !1, this.required = !1, this.optional = !1, this.showError = !1, this.errorMessage = "", this.form = null, this.tooltip = "", this.type = "date", this.label = "", this.description = "", this.startDate = "", this.minDate = "", this.maxDate = "", this.inverted = !1, this.value = void 0, this.datepickerIsOpen = !1, this._hasUserInteracted = !1, this._onKeydownEsc = (e) => {
      if (e.key !== "Escape" || e.code !== "Escape" || !this.datepickerIsOpen) return;
      e.preventDefault(), e.stopPropagation(), this.shadowRoot?.querySelector("wc-datepicker")?.classList.remove("active"), this.datepickerIsOpen = !1, this.removeEventListener("keydown", this._handleFocusTrap), this.shadowRoot?.querySelector("input")?.focus();
    }, this._internals = this.attachInternals();
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-datepicker-${Date.now()}-${Ea++}`), this.addEventListener("invalid", this._handleInvalid), this.addEventListener("focusout", this._handleBlur), this.addEventListener("keydown", this._onKeydownEsc);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid), this.removeEventListener("focusout", this._handleBlur), this.removeEventListener("keydown", this._onKeydownEsc);
  }
  async firstUpdated() {
    this._setValue(this.value), !(this._shouldUseNativeDatepicker() || !await this._whenWcDatepickerReady()) && (setTimeout(() => this._replaceButtonSVG(), 0), setTimeout(() => this._addMonthDropdownIcon(), 0), setTimeout(() => this._handleDateChange(), 0), setTimeout(() => this._onDocumentClick(), 0));
  }
  updated(e) {
    if (super.updated(e), e.has("value")) {
      const t = e.get("value"), s = this.value;
      !s && t !== s ? (this._internals.setFormValue(""), this._manageRequire()) : s && this._setValue(s);
    }
  }
  async _whenWcDatepickerReady() {
    await customElements.whenDefined("wc-datepicker");
    const e = this.shadowRoot?.querySelector(
      "wc-datepicker"
    );
    return e ? ("updateComplete" in e && await e.updateComplete, await new Promise((t) => requestAnimationFrame(t)), e) : null;
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  /**
   * Form helper methods:
   * - _setValue: set internal value and trigger validation
   * - _manageRequire: handle required state
   * - _validate: actively validate and show errors
   * - checkValidity: passive boolean check without UI
   * - _setValidityMessage: sync validation message with UI and internals
   * - _handleInvalid: handle form invalid event and focus first invalid field
   */
  _setValue(e) {
    if (!e) {
      this.value = void 0, this._internals.setFormValue(""), this._manageRequire();
      return;
    }
    const t = e instanceof Date ? e : this._parseLocalDate(e), s = [
      t.getFullYear(),
      String(t.getMonth() + 1).padStart(2, "0"),
      String(t.getDate()).padStart(2, "0")
    ].join("-");
    this.value = t, this._internals.setFormValue(s);
    const o = this.shadowRoot?.querySelector("input");
    o && (o.value = s);
    const r = this.shadowRoot?.querySelector("wc-datepicker");
    r && (r.value = t), this._manageRequire();
  }
  // Called to internally set the initial internalElement required flag.
  _manageRequire() {
    const e = this.shadowRoot?.querySelector("input");
    if (!e) return;
    const t = this.errorMessage || "This field is required.";
    this.required && !this.value ? (this._internals.ariaInvalid = "true", this._internals.setValidity({ valueMissing: !0 }, t, e)) : (this._internals.ariaInvalid = "false", this._internals.setValidity({}));
  }
  /**
   * Actively validates the component:
   * - Updates internal validity state
   * - Updates UI (e.g. showError)
   * - Called on blur/change or form submission
   */
  _validate() {
    const e = this.shadowRoot?.querySelector("input");
    if (!e) return;
    this._manageRequire();
    let t = "";
    e.validity.valueMissing ? t = this.errorMessage || "This field is required." : t = e.validationMessage, this._setValidityMessage(t);
  }
  /**
   * Passive check of validity:
   * - Returns true/false
   * - Does NOT update UI or show errors
   * - Used in form submission checks
   */
  checkValidity() {
    const e = this.shadowRoot?.querySelector("input");
    return e ? e.checkValidity() : !0;
  }
  // Sets custom validity message
  _setValidityMessage(e = "") {
    if (!this._internals) return;
    const t = this.shadowRoot?.querySelector("input");
    t && (!e && this.showError && this.errorMessage?.trim() || (this.showError = !!e, this.errorMessage?.trim() && e !== "" && (e = this.errorMessage), this._internals.setValidity(
      e ? { customError: !0 } : {},
      e,
      t
    )));
  }
  // Handles native 'invalid' events
  _handleInvalid(e) {
    e.preventDefault(), this._hasUserInteracted = !0, this._validate();
    const t = this.shadowRoot?.querySelector("input");
    if (t) {
      const s = this._internals.form;
      s ? Array.from(s.elements).find(
        (i) => typeof i.checkValidity == "function" && !i.checkValidity()
      ) === this && t.focus() : t.focus();
    }
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  /**
   * Replaces the default wc-datepicker month navigation buttons
   * with NYS icon components for previous and next month.
   */
  _replaceButtonSVG() {
    const e = this.shadowRoot?.querySelector("wc-datepicker");
    if (!e) return;
    const t = e.querySelector(
      ".wc-datepicker__next-month-button"
    ), s = e.querySelector(
      ".wc-datepicker__previous-month-button"
    );
    !t || !s || (s.innerHTML = `
    <nys-icon name="arrow_back" size="18"></nys-icon>
  `, t.innerHTML = `
    <nys-icon name="arrow_forward" size="18"></nys-icon>
  `);
  }
  _addMonthDropdownIcon() {
    const e = this.shadowRoot?.querySelector("wc-datepicker");
    if (!e) return;
    const t = e.querySelector(
      ".wc-datepicker__month-select"
    );
    if (t && !t.parentElement?.classList.contains("month-wrapper")) {
      const s = document.createElement("span");
      s.className = "month-wrapper", t.parentNode?.insertBefore(s, t), s.appendChild(t);
      const o = document.createElement("nys-icon");
      o.setAttribute("name", "chevron_down"), o.setAttribute("id", "wc-month-dropdown-icon"), o.setAttribute("size", "20"), s.appendChild(o);
    }
  }
  // Creates a Date at local midnight to avoid UTC timezone shifting
  _parseLocalDate(e) {
    const [t, s, o] = e.split("-").map(Number);
    return new Date(t, s - 1, o);
  }
  _setTodayDate() {
    const e = /* @__PURE__ */ new Date();
    e.setHours(0, 0, 0, 0), this._setValue(e), this._setFocusOnTodayDate();
  }
  async _setFocusOnTodayDate(e = !1) {
    if (this.minDate) {
      const i = /* @__PURE__ */ new Date();
      i.setHours(0, 0, 0, 0);
      const c = this._parseLocalDate(this.minDate);
      if (i < c) return;
    }
    const t = /* @__PURE__ */ new Date();
    t.setHours(0, 0, 0, 0);
    const s = [
      t.getFullYear(),
      String(t.getMonth() + 1).padStart(2, "0"),
      String(t.getDate()).padStart(2, "0")
    ].join("-"), o = this.shadowRoot?.querySelector("wc-datepicker");
    if (!o) return;
    const r = o.querySelector(
      `td[data-date="${s}"]`
    );
    r && (e || r.focus());
  }
  _isOutOfRange(e) {
    if (this.minDate) {
      const t = this._parseLocalDate(this.minDate);
      if (e < t) return !0;
    }
    if (this.maxDate) {
      const t = this._parseLocalDate(this.maxDate);
      if (e > t) return !0;
    }
    return !1;
  }
  _dispatchInputEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-input", {
        detail: { id: this.id, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _handleInputKeydown(e) {
    this.disabled || this._shouldUseNativeDatepicker() || ((e.key == " " || e.code == "Space") && (e.preventDefault(), this._openDatepicker()), (e.key === "Escape" || e.code === "Escape") && (e.preventDefault(), this.shadowRoot?.querySelector("wc-datepicker")?.classList.remove("active")));
  }
  _handleBlur(e) {
    const t = e.relatedTarget;
    if (t && (this.contains(t) || this.shadowRoot?.contains(t)) || this.datepickerIsOpen && !t)
      return;
    this._hasUserInteracted || (this._hasUserInteracted = !0), this.shadowRoot?.querySelector("wc-datepicker")?.classList.remove("active"), this.datepickerIsOpen = !1, this._validate(), this.dispatchEvent(
      new Event("nys-blur", { bubbles: !0, composed: !0 })
    ), this.removeEventListener("keydown", this._handleFocusTrap);
  }
  // For when users click outside of the datepicker, we remove the calendar popup
  _onDocumentClick() {
    if (this._shouldUseNativeDatepicker()) return;
    const e = (t) => {
      const s = t.composedPath(), o = this.shadowRoot?.querySelector(
        ".nys-datepicker--input-container"
      ), r = this.shadowRoot?.querySelector(
        ".wc-datepicker--container"
      ), i = this.shadowRoot?.querySelector("wc-datepicker");
      o && s.includes(o) || r && s.includes(r) || i && s.includes(i) || i?.classList.remove("active");
    };
    document.addEventListener("click", e);
  }
  _toggleDatepicker() {
    if (this.disabled) return;
    if (this._shouldUseNativeDatepicker()) {
      const s = this.shadowRoot?.querySelector(
        "input"
      );
      s && s.focus();
      return;
    }
    const t = this.shadowRoot?.querySelector("wc-datepicker")?.classList.toggle("active");
    this.datepickerIsOpen = !!t, this.value || this._setFocusOnTodayDate(), this.addEventListener("keydown", this._handleFocusTrap);
  }
  _openDatepicker() {
    if (this.disabled || this._shouldUseNativeDatepicker()) return;
    const e = this.shadowRoot?.querySelector("wc-datepicker");
    e && (this.value || this._setFocusOnTodayDate(!0), e?.classList.add("active"), this.datepickerIsOpen = !0, this.addEventListener("keydown", this._handleFocusTrap));
  }
  _handleDateChange() {
    const e = this.shadowRoot?.querySelector("wc-datepicker");
    e && e.addEventListener("selectDate", (t) => {
      const s = t.detail, o = this._parseLocalDate(s);
      if (this._isOutOfRange(o)) {
        e.classList.add("active");
        return;
      }
      this._setValue(o), this._validate(), this._dispatchInputEvent(), e.classList.remove("active"), this.datepickerIsOpen = !1, this.removeEventListener("keydown", this._handleFocusTrap);
    });
  }
  _handleTodayClick() {
    this.disabled || (this._setTodayDate(), this._hasUserInteracted && this._validate());
  }
  _handleClearClick() {
    if (this.disabled) return;
    this.value = void 0, this._internals.setFormValue("");
    const e = this.shadowRoot?.querySelector("input");
    e && (e.value = ""), this._hasUserInteracted && this._validate();
  }
  _handleInputChange(e) {
    const t = e.target;
    if (!t) return;
    const s = this._getValidDateFromInput(t.value);
    if (!s) {
      t.value || (this.value = void 0, this._internals.setFormValue(""), this._hasUserInteracted && this._validate());
      return;
    }
    this._setValue(s), this._hasUserInteracted && this._validate(), this._dispatchInputEvent();
  }
  _getValidDateFromInput(e) {
    const s = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
    return !s || Number(s[1]) < 1e3 ? null : this._parseLocalDate(e);
  }
  _handleFocusTrap(e) {
    if (!this.datepickerIsOpen || e.key !== "Tab") return;
    const t = this.shadowRoot?.querySelector(
      ".wc-datepicker--container"
    );
    if (!t) return;
    const s = [
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "[tabindex]:not([tabindex='-1'])"
    ], o = [];
    if (t.querySelectorAll("nys-button").forEach((d) => {
      o.push(d);
    }), o.push(
      ...Array.from(
        t.querySelectorAll(s.join(","))
      ).filter((d) => d.offsetParent !== null)
    ), o.length === 0) return;
    const r = o[0], i = o[o.length - 1], c = this.shadowRoot?.activeElement;
    e.shiftKey ? c === r && (e.preventDefault(), i.focus()) : c === i && (e.preventDefault(), r.focus());
  }
  _isSafari() {
    const e = navigator.userAgent;
    return /Safari/.test(e) && !/Chrome|Chromium|Edg/.test(e);
  }
  /**
   * Determines whether the current device uses a coarse pointer.
   * A coarse pointer usually means touch-based input where precise pointing
   * is not expected, such as fingers on phones and most tablets.
   *
   * Note: This is not a guarantee of a mobile device.
   * Some non-mobile devices may also report a coarse pointer,
   * and some mobile devices may not.
   *
   * @returns `true` if the device reports a coarse pointer, otherwise `false`.
   */
  _isMobile() {
    return window.matchMedia("(pointer: coarse)").matches;
  }
  _shouldUseNativeDatepicker() {
    return this._isSafari() || this._isMobile();
  }
  render() {
    const e = this._shouldUseNativeDatepicker();
    return h` <div class="nys-datepicker--container">
        <nys-label
          label=${this.label}
          description=${this.description}
          flag=${this.required ? "required" : this.optional ? "optional" : ""}
          tooltip=${this.tooltip}
          ?inverted=${this.inverted}
        ></nys-label>
        <div
          class="nys-datepicker--input-container ${this.disabled ? "disabled" : ""}"
        >
          <input
            id=${this.id}
            class="nys-datepicker--input"
            type="date"
            min=${g(this.minDate || void 0)}
            max=${this.maxDate || "9999-12-31"}
            ?required=${this.required}
            .value=${this.value instanceof Date ? this.value.toISOString().split("T")[0] : this.value || ""}
            ?disabled=${this.disabled}
            aria-label=${g(this.label || void 0)}
            aria-disabled=${g(this.disabled ? "true" : void 0)}
            aria-required=${g(this.required ? "true" : void 0)}
            @click=${this._openDatepicker}
            @input=${this._handleInputChange}
            @blur=${this._handleBlur}
            @keydown=${this._handleInputKeydown}
          />
          ${e ? null : h`
                <button
                  id="calendar-button"
                  @click=${this._toggleDatepicker}
                  tabindex=${this.disabled ? "-1" : "0"}
                  ?disabled=${this.disabled}
                  aria-label="Open calendar"
                  aria-haspopup="dialog"
                  aria-controls="wc-datepicker-popup"
                  aria-expanded=${this.datepickerIsOpen ? "true" : "false"}
                >
                  <nys-icon name="calendar_month" size="24"></nys-icon>
                </button>
              `}
        </div>

        <div class="wc-datepicker--container">
          <wc-datepicker
            id="wc-datepicker-popup"
            locale="en-US"
            .value=${this.value instanceof Date ? this.value : this.value ? this._parseLocalDate(this.value) : void 0}
            ?disabled=${this.disabled}
            start-date=${g(this.startDate ? this.startDate : void 0)}
            min-date=${g(this.minDate || void 0)}
            max-date=${g(this.maxDate || void 0)}
            role="dialog"
            aria-modal=${this.datepickerIsOpen ? "true" : "false"}
          >
            ${!this.hideTodayButton || !this.hideClearButton ? h`
                  <div class="wc-datepicker--button-container">
                    ${this.hideTodayButton ? null : h`
                          <nys-button
                            label="Today"
                            size="sm"
                            fullWidth
                            variant="outline"
                            ?disabled=${this.disabled}
                            @nys-click=${this._handleTodayClick}
                          ></nys-button>
                        `}
                    ${this.hideClearButton ? null : h`
                          <nys-button
                            label="Clear"
                            size="sm"
                            fullWidth
                            variant="outline"
                            ?disabled=${this.disabled}
                            @nys-click=${this._handleClearClick}
                          ></nys-button>
                        `}
                  </div>
                ` : null}
          </wc-datepicker>
        </div>
      </div>
      <nys-errormessage
        ?showError=${this.showError}
        errorMessage=${this._internals.validationMessage || this.errorMessage}
      ></nys-errormessage>`;
  }
}, nt.styles = w(Di), nt.shadowRootOptions = {
  ...m.shadowRootOptions,
  delegatesFocus: !0
}, nt.formAssociated = !0, nt);
H([
  a({ type: String, reflect: !0 })
], M.prototype, "id");
H([
  a({ type: String, reflect: !0 })
], M.prototype, "name");
H([
  a({ type: String, reflect: !0 })
], M.prototype, "width");
H([
  a({ type: Boolean })
], M.prototype, "hideTodayButton");
H([
  a({ type: Boolean })
], M.prototype, "hideClearButton");
H([
  a({ type: Boolean, reflect: !0 })
], M.prototype, "disabled");
H([
  a({ type: Boolean, reflect: !0 })
], M.prototype, "required");
H([
  a({ type: Boolean, reflect: !0 })
], M.prototype, "optional");
H([
  a({ type: Boolean, reflect: !0 })
], M.prototype, "showError");
H([
  a({ type: String })
], M.prototype, "errorMessage");
H([
  a({ type: String, reflect: !0 })
], M.prototype, "form");
H([
  a({ type: String })
], M.prototype, "tooltip");
H([
  a({ type: String })
], M.prototype, "type");
H([
  a({ type: String })
], M.prototype, "label");
H([
  a({ type: String })
], M.prototype, "description");
H([
  a({ type: String })
], M.prototype, "startDate");
H([
  a({ type: String })
], M.prototype, "minDate");
H([
  a({ type: String })
], M.prototype, "maxDate");
H([
  a({ type: Boolean, reflect: !0 })
], M.prototype, "inverted");
H([
  a({
    type: Object,
    converter: {
      fromAttribute: (n) => n ? M.prototype._parseLocalDate(n) : void 0,
      toAttribute: (n) => n ? typeof n == "string" ? n : n.toISOString().split("T")[0] : ""
    }
  })
], M.prototype, "value");
H([
  $()
], M.prototype, "datepickerIsOpen");
let Sa = M;
customElements.get("nys-datepicker") || customElements.define("nys-datepicker", Sa);
const Da = ":host{--_nys-divider-size: var(--nys-size-1px, 1px);--_nys-divider-color: var(--nys-color-neutral-500, #797c7f);--_nys-divider-width: 100%}:host([inverted]){--_nys-divider-color: var(--nys-color-ink-reverse, #ffffff)}:host([subtle]){--_nys-divider-color: var(--nys-color-neutral-100, #e4e5e6)}.nys-divider{width:var(--_nys-divider-width);height:var(--_nys-divider-size);background-color:var(--_nys-divider-color);flex:1 0 0;margin:0;border:none}";
var La = Object.defineProperty, Lr = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && La(e, t, o), o;
};
let Aa = 0;
const Vs = class Vs extends m {
  constructor() {
    super(), this.inverted = !1, this.subtle = !1;
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = this._generateUniqueId());
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _generateUniqueId() {
    return `nys-divider-${Date.now()}-${Aa++}`;
  }
  render() {
    return h`<hr class="nys-divider" />`;
  }
};
Vs.styles = w(Da);
let yo = Vs;
Lr([
  a({ type: Boolean, reflect: !0 })
], yo.prototype, "inverted");
Lr([
  a({ type: Boolean, reflect: !0 })
], yo.prototype, "subtle");
customElements.get("nys-divider") || customElements.define("nys-divider", yo);
const Ar = ':host{--_nys-dropdownmenu-width: 180px;--_nys-dropdownmenu-height: 100%;--_nys-dropdownmenu-radius: var(--nys-radius-md, 4px);--_nys-dropdownmenu-border-width: var(--nys-border-width-sm, 1px);--_nys-dropdownmenu-border-color: var(--nys-color-neutral-100, #d0d0ce);--_nys-dropdownmenu-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-dropdownmenu-boxshadow-color-100: var( --nys-color-black-transparent-100, rgba(27, 27, 27, .1) );--_nys-dropdownmenu-boxshadow-color-50: var( --nys-color-black-transparent-50, rgba(27, 27, 27, .01) );--_nys-dropdownmenu-gap: var(--nys-space-2px, 2px);--_nys-dropdownmenu-padding: var(--nys-space-100, 8px);--_nys-dropdownmenu-font-size: var(--nys-font-size-ui-md, 16px);--_nys-dropdownmenu-font-weight: var(font-weight: 400);--_nys-dropdownmenu-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-dropdownmenu-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-dropdownmenuitem-color: var(--nys-color-text, #1b1b1b);--_nys-dropdownmenuitem-gap: var(--nys-space-100, 8px);--_nys-dropdownmenuitem-padding: var(--nys-space-200, 16px) var(--nys-space-100, 8px);--_nys-dropdownmenuitem-border-radius: var(--nys-radius-md, 4px);--_nys-dropdownmenuitem-background-color: var(--nys-color-white, #ffffff);--_nys-dropdownmenuitem-background-color--hover: var( --nys-color-neutral-10, #f6f6f6 );--_nys-dropdownmenuitem-background-color--active: var( --nys-color-neutral-50, #ededed );--_nys-dropdownmenuitem-color--disabled: var( --nys-color-text-disabled, #bec0c1 );--_nys-dropdownmenuitem-outline-width: var(--nys-border-width-md, 2px);--_nys-dropdownmenuitem-outline-color: var(--nys-color-focus, #004dd1)}.nys-dropdownmenu{position:fixed;top:0;left:0;z-index:1776}.nys-dropdownmenu.active ul{display:flex}.nys-dropdownmenu ul{display:none;align-items:flex-start;flex-direction:column;gap:var(--_nys-dropdownmenu-gap);width:var(--_nys-dropdownmenu-width);height:var(--_nys-dropdownmenu-height);border-radius:var(--_nys-dropdownmenu-radius);border:var(--_nys-dropdownmenu-border-width) solid var(--_nys-dropdownmenu-border-color);background-color:var(--_nys-dropdownmenu-background-color);box-shadow:0 4px 6px -1px var(--_nys-dropdownmenu-boxshadow-color-100),0 4px 6px -1px var(--_nys-dropdownmenu-boxshadow-color-50);padding:var(--_nys-dropdownmenu-padding);font-family:var(--_nys-dropdownmenu-font-family);font-size:var(--_nys-dropdownmenu-font-size);font-weight:var(--_nys-dropdownmenu-font-weight);line-height:var(--_nys-dropdownmenu-line-height);overflow:hidden;margin:0}.nys-dropdownmenuitem{list-style:none;width:var(--_nys-dropdownmenu-width);padding:0;margin:0}.nys-dropdownmenuitem a,.nys-dropdownmenuitem button{display:flex;gap:var(--_nys-dropdownmenuitem-gap);padding:var(--_nys-dropdownmenuitem-padding);border-radius:var(--_nys-dropdownmenuitem-border-radius);background-color:var(--_nys-dropdownmenuitem-background-color);width:100%;box-sizing:border-box;text-decoration:none;text-wrap:wrap;color:var(--_nys-dropdownmenuitem-color);transition:.05s ease-in-out all;border:none;font-family:var(--_nys-dropdownmenu-font-family);font-size:var(--_nys-dropdownmenu-font-size);font-weight:var(--_nys-dropdownmenu-font-weight);line-height:var(--_nys-dropdownmenu-line-height);cursor:pointer}.nys-dropdownmenuitem a nys-icon,.nys-dropdownmenuitem button nys-icon{margin-top:2.5px}.nys-dropdownmenuitem a:hover:not(.disabled):not([aria-disabled=true]),.nys-dropdownmenuitem button:hover:not(.disabled):not([aria-disabled=true]){background-color:var(--_nys-dropdownmenuitem-background-color--hover)}.nys-dropdownmenuitem a:active:not(.disabled):not([aria-disabled=true]),.nys-dropdownmenuitem button:active:not(.disabled):not([aria-disabled=true]){background-color:var(--_nys-dropdownmenuitem-background-color--active)}.nys-dropdownmenuitem a:focus-visible:not(.disabled):not([aria-disabled=true]):not([focus-ring-false]),.nys-dropdownmenuitem button:focus-visible:not(.disabled):not([aria-disabled=true]):not([focus-ring-false]){position:relative;outline:var(--_nys-dropdownmenuitem-outline-width) solid var(--_nys-dropdownmenuitem-outline-color)}.nys-dropdownmenuitem a.disabled,.nys-dropdownmenuitem a[aria-disabled=true],.nys-dropdownmenuitem button.disabled,.nys-dropdownmenuitem button[aria-disabled=true]{color:var(--_nys-dropdownmenuitem-color--disabled);pointer-events:none;cursor:default}';
var Ta = Object.defineProperty, qt = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Ta(e, t, o), o;
};
let Ia = 0;
const Wo = class Wo extends m {
  constructor() {
    super(...arguments), this.label = "", this.href = "", this.disabled = !1, this.target = "_self", this.prefixIcon = "", this.divider = "";
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-dropdownmenuitem-${Date.now()}-${Ia++}`);
  }
  _handleClick(e) {
    if (this.disabled) {
      e.preventDefault();
      return;
    }
    this.dispatchEvent(
      new CustomEvent("nys-click", {
        bubbles: !0,
        composed: !0,
        detail: {
          id: this.id,
          label: this.label,
          ...this.href && { href: this.href }
        }
      })
    );
  }
  render() {
    const e = !!this.href;
    return h`<li class="nys-dropdownmenuitem" role="presentation">
      ${e ? h` <a
            class=${this.disabled ? "disabled" : ""}
            href=${this.disabled ? "" : this.href}
            role="menuitem"
            aria-disabled="${this.disabled ? "true" : "false"}"
            aria-label=${this.label}
            tabindex=${this.disabled ? "-1" : "0"}
            @click="${this._handleClick}"
            target="${this.target}"
          >
            ${this.prefixIcon ? h`<nys-icon size="16" name=${this.prefixIcon}></nys-icon>` : ""}
            ${this.label}</a
          >` : h`
            <button
              class=${this.disabled ? "disabled" : ""}
              type="button"
              role="menuitem"
              aria-disabled="${this.disabled ? "true" : "false"}"
              aria-label=${this.label}
              tabindex=${this.disabled ? "-1" : "0"}
              ?disabled=${this.disabled}
              @click="${this._handleClick}"
            >
              ${this.prefixIcon ? h`<nys-icon size="16" name=${this.prefixIcon}></nys-icon>` : ""}
              ${this.label}
            </button>
          `}
    </li>`;
  }
};
Wo.styles = w(Ar), Wo.shadowRootOptions = {
  ...m.shadowRootOptions,
  delegatesFocus: !0
};
let Ke = Wo;
qt([
  a({ type: String })
], Ke.prototype, "label");
qt([
  a({ type: String })
], Ke.prototype, "href");
qt([
  a({ type: Boolean, reflect: !0 })
], Ke.prototype, "disabled");
qt([
  a({ type: String })
], Ke.prototype, "target");
qt([
  a({ type: String })
], Ke.prototype, "prefixIcon");
qt([
  a({ type: String })
], Ke.prototype, "divider");
customElements.get("nys-dropdownmenuitem") || customElements.define("nys-dropdownmenuitem", Ke);
var Ma = Object.defineProperty, Ms = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Ma(e, t, o), o;
};
let za = 0;
const Hs = class Hs extends m {
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.for = "", this.showDropdown = !1, this.position = null, this._trigger = null, this._menuElement = null, this._ariaTarget = null, this._lastFocusedIndex = 0, this.GAP = 4, this._resizeObserver = null, this._toggleDropdown = async () => {
      this.showDropdown = !this.showDropdown, this._ariaTarget?.setAttribute("aria-expanded", String(this.showDropdown)), this.showDropdown ? (window.addEventListener("scroll", this._handleWindowScroll, !0), this._resizeObserver = new ResizeObserver(() => {
        this.showDropdown && this._positionMenu();
      }), this._resizeObserver.observe(document.documentElement), document.addEventListener("click", this._handleDocumentClick), this._menuElement = this.shadowRoot?.querySelector(
        ".nys-dropdownmenu"
      ), this._menuElement.addEventListener("keydown", this._handleMenuKeydown), await this.updateComplete, this._positionMenu(), this._focusOnItem(this._lastFocusedIndex)) : (window.removeEventListener("scroll", this._handleWindowScroll, !0), document.removeEventListener("click", this._handleDocumentClick), this._menuElement.removeEventListener(
        "keydown",
        this._handleMenuKeydown
      ), this._resizeObserver?.disconnect(), this._resizeObserver = null);
    }, this._handleDocumentClick = (e) => {
      if (!this.showDropdown) return;
      const t = e?.composedPath(), s = t.includes(this), o = this._trigger && t.includes(this._trigger);
      !s && !o && this._closeDropdown();
    }, this._handleTriggerKeydown = (e) => {
      (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this._toggleDropdown()), e.key === "Escape" && this.showDropdown && (e.preventDefault(), this._closeDropdown());
    }, this._handleMenuKeydown = (e) => {
      const t = this._getMenuItems(), s = t.indexOf(document.activeElement);
      switch (e.key) {
        case "Escape":
          e.preventDefault(), this._closeDropdown();
          break;
        case "ArrowDown":
        case "ArrowRight":
          e.preventDefault();
          const o = s < t.length - 1 ? s + 1 : 0;
          this._lastFocusedIndex = o, t[o].focus();
          break;
        case "ArrowUp":
        case "ArrowLeft":
          e.preventDefault();
          const r = s > 0 ? s - 1 : t.length - 1;
          this._lastFocusedIndex = r, t[r].focus();
          break;
        case "Tab":
          s >= t.length - 1 && !e.shiftKey && this._closeDropdown();
          break;
      }
    }, this._handleWindowScroll = () => {
      this.showDropdown && this._positionMenu();
    };
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-dropdownmenu-${Date.now()}-${za++}`);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  async firstUpdated() {
    await this.updateComplete, this.applyInverseTransform(), this._connectTrigger(), this._handleMenuClick();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _findTrigger() {
    const e = this.for;
    if (!e) return null;
    let t = document.getElementById(e);
    if (t) return t;
    const s = (o) => {
      for (const r of Array.from(o.querySelectorAll("*"))) {
        const i = r.shadowRoot;
        if (i) {
          const c = i.getElementById(e);
          if (c) return c;
          const d = s(i);
          if (d) return d;
        }
      }
      return null;
    };
    return s(document);
  }
  _connectTrigger() {
    const e = this._findTrigger();
    if (!e) return;
    this._trigger = e;
    const t = e.tagName.toLowerCase() === "nys-button" ? e.shadowRoot?.querySelector("button") ?? e : e;
    t.setAttribute("aria-haspopup", "menu"), t.setAttribute("aria-expanded", "false"), this._ariaTarget = t, this._trigger.addEventListener("click", this._toggleDropdown), this._trigger.addEventListener("keydown", this._handleTriggerKeydown);
  }
  _closeDropdown() {
    this.showDropdown = !1, this._ariaTarget?.setAttribute("aria-expanded", "false"), this._trigger?.focus();
  }
  _getMenuItems() {
    return (this.shadowRoot?.querySelector("slot")?.assignedElements({ flatten: !0 }) || []).filter(
      (s) => s && !s.hasAttribute("disabled")
    );
  }
  async _focusOnItem(e = 0) {
    await new Promise((o) => requestAnimationFrame(o));
    const t = this._getMenuItems(), s = t[Math.min(e, t.length - 1)];
    s && s.focus();
  }
  // In some iframes (like Storybook's) or embedded containers , parent elements may have CSS transforms applied, creating a new coordinate context.
  // This function removes such transforms to prevent them from affecting tooltip positioning calculations.
  applyInverseTransform() {
    document.querySelectorAll('div[scale="1"]').forEach((e) => {
      e.style.transform = "none";
    });
  }
  /**
   * Position Logic
   * --------------------------------------------------------------------------
   */
  /**
   * The controller function for positioning the dropdown menu.
   * The logic diverts to if user sets position or we auto position the dropdown menu
   */
  _positionMenu() {
    if (!this._trigger || (this._menuElement = this.shadowRoot?.querySelector(
      ".nys-dropdownmenu"
    ), !this._menuElement)) return;
    const e = this.position ? this._setUserPosition(this.position) : this._autoPosition(), t = this._calculateCoordinates(e);
    this._applyPosition(t);
  }
  _setUserPosition(e) {
    const t = this._checkSpaceAvailable(), s = this._menuElement.getBoundingClientRect();
    return this._checkPositionFits(
      e,
      t,
      s
    ) ? e : this._findBestAlternative(e, t, s);
  }
  /**
   * Auto Positioning of the dropdown menu relies on the best surrounding space available
   * to select the desirable position.
   */
  _autoPosition() {
    const e = this._checkSpaceAvailable(), t = this._menuElement.getBoundingClientRect(), s = "bottom-end";
    return this._checkPositionFits(s, e, t) ? s : this._findBestAlternative(s, e, t);
  }
  /**
   * Checks if the dropdown menu fits inside the viewport on the given side of the trigger.
   * Overrides user set position for auto-positioning if user's desire space is not available
   */
  _checkSpaceAvailable() {
    if (!this._trigger)
      return { top: 0, bottom: 0, start: 0, end: 0 };
    const e = this._trigger.getBoundingClientRect(), t = window.innerWidth, s = window.innerHeight;
    return {
      top: e.top,
      bottom: s - e.bottom,
      start: e.left,
      end: t - e.right
    };
  }
  _checkPositionFits(e, t, s) {
    const o = s.width, r = s.height, [i, c] = e.split("-"), d = i === "bottom" ? t.bottom >= r + this.GAP : t.top >= r + this.GAP, u = c === "start" ? t.end >= o : t.start >= o;
    return d && u;
  }
  /**
   * This position is called for when user's set position didn't fit OR auto positioning when default position doesn't fit
   * We look for the best alternative positions in order of preference base on the set position (e.g. bottom-start => bottom-end).
   * @param userPosition
   * @param space
   * @param menuRect
   */
  _findBestAlternative(e, t, s) {
    const [o, r] = e.split("-"), i = [
      `${o === "bottom" ? "top" : "bottom"}-${r}`,
      // Flip vertical
      `${o}-${r === "start" ? "end" : "start"}`,
      // Flip horizontal
      `${o === "bottom" ? "top" : "bottom"}-${r === "start" ? "end" : "start"}`
      // Flip both
    ];
    for (const c of i)
      if (this._checkPositionFits(c, t, s))
        return c;
    return this._findMostAvailableSpace(t);
  }
  _findMostAvailableSpace(e) {
    const t = e.bottom >= e.top ? "bottom" : "top", s = e.start >= e.end ? "start" : "end";
    return `${t}-${s}`;
  }
  /**
   * A valid ideal position has been chosen.
   * This function calculates the coordinate of the trigger to properly position the dropdown menu.
   * @param position
   * @returns
   */
  _calculateCoordinates(e) {
    if (!this._trigger || !this._menuElement)
      return { top: 0, left: 0 };
    const t = this._trigger.getBoundingClientRect(), s = this._menuElement.getBoundingClientRect(), [o, r] = e.split("-");
    let i = 0, c = 0;
    return o === "bottom" ? i = t.bottom + this.GAP : i = t.top - s.height - this.GAP, r === "start" ? c = t.left : c = t.right - s.width, { top: i, left: c };
  }
  _applyPosition(e) {
    this._menuElement && (this._menuElement.style.top = `${e.top}px`, this._menuElement.style.left = `${e.left}px`);
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _handleMenuClick() {
    this.addEventListener("nys-click", (e) => {
      const t = this._getMenuItems(), s = e.detail?.id, o = t.findIndex((r) => r.id === s);
      o !== -1 && (this._lastFocusedIndex = o), this._closeDropdown();
    });
  }
  render() {
    return h`<div
      class="nys-dropdownmenu ${this.showDropdown ? "active" : ""}"
      for=${this.for}
      ?hidden=${!this.showDropdown}
    >
      <ul role="menu">
        <slot></slot>
      </ul>
    </div>`;
  }
};
Hs.styles = w(Ar);
let Bt = Hs;
Ms([
  a({ type: String, reflect: !0 })
], Bt.prototype, "for");
Ms([
  a({ type: Boolean })
], Bt.prototype, "showDropdown");
Ms([
  a({ type: String, reflect: !0 })
], Bt.prototype, "position");
customElements.get("nys-dropdownmenu") || customElements.define("nys-dropdownmenu", Bt);
const Oa = ':host{--_nys-errormessage-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-errormessage-font-weight: var(--nys-font-weight-regular, 400);--_nys-errormessage-font-size: var(--nys-font-size-ui-md, 16px);--_nys-errormessage-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-errormessage-letter-spacing: var( --nys-font-letterspacing-ui-md, .044px );--_nys-errormessage-color: var(--nys-color-danger, #b52c2c);--_nys-errormessage-gap: var(--nys-space-100, 8px);--_nys-errormessage-padding--divider: var(--nys-space-50, 4px);--_nys-errormessage-width--divider: var(--nys-border-width-sm, 1px);--_nys-errormessage-margin-top: 0}.nys-errormessage{display:flex;align-items:center;gap:var(--_nys-errormessage-gap);font-family:var(--_nys-errormessage-font-family);font-weight:var(--_nys-errormessage-font-weight);font-size:var(--_nys-errormessage-font-size);line-height:var(--_nys-errormessage-line-height);letter-spacing:var(--_nys-errormessage-letter-spacing);color:var(--_nys-errormessage-color);margin-top:var(--_nys-errormessage-margin-top)}.nys-errormessage[showDivider]{padding-top:var(--_nys-errormessage-padding--divider);margin-top:var(--_nys-errormessage-padding--divider);border-top:var(--_nys-errormessage-width--divider) solid var(--_nys-errormessage-color)}nys-icon{margin-top:-2px}';
var Ra = Object.defineProperty, Jo = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Ra(e, t, o), o;
};
let Pa = 0;
const Us = class Us extends m {
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.showError = !1, this.errorMessage = "", this.showDivider = !1, this.id || (this.id = `nys-errormessage-${Date.now()}-${Pa++}`);
  }
  render() {
    return h`<div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      class="nys-errormessage__region"
    >
      ${this.showError ? h`<div class="nys-errormessage" ?showDivider=${this.showDivider}>
            <nys-icon name="error" size="2xl"></nys-icon>
            ${this.errorMessage}
          </div>` : ""}
    </div>`;
  }
};
Us.styles = w(Oa);
let gt = Us;
Jo([
  a({ type: String, reflect: !0 })
], gt.prototype, "id");
Jo([
  a({ type: Boolean })
], gt.prototype, "showError");
Jo([
  a({ type: String })
], gt.prototype, "errorMessage");
Jo([
  a({ type: Boolean, reflect: !0 })
], gt.prototype, "showDivider");
customElements.get("nys-errormessage") || customElements.define("nys-errormessage", gt);
async function Ba(n, e) {
  if (!e || e.trim() === "") return !0;
  const t = e.toLowerCase().split(",").map((r) => r.trim()), s = n.name.toLowerCase(), o = s.includes(".") ? s.split(".").pop() : "";
  for (const r of t)
    if (r.startsWith(".") && r.slice(1) === o || r.endsWith("/*") && n.type.startsWith(r.slice(0, -1)) || n.type === r)
      return !0;
  return !1;
}
const Na = ':host{--_nys-fileitem-border-radius: var(--nys-radius-md, 4px);--_nys-fileitem-padding: var(--nys-space-100, 8px) var(--nys-space-200, 16px);--_nys-fileitem-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-fileitem-border-color: var(--nys-color-neutral-100, #d0d0ce);--_nys-fileitem-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-fileitem-font-size: var(--nys-font-size-ui-md, 16px);--_nys-fileitem-font-weight: var(--nys-font-weight-regular, 400);--_nys-fileitem-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-fileitem-letter-spacing: var(--nys-font-letterspacing-ui-md, .044px);--_nys-fileitem-background-color--progress: var( --nys-color-neutral-50, #ededed );--_nys-fileitem-background-color--progress--fill: var( --nys-color-info, #004dd1 )}.file-item{position:relative;border-radius:var(--_nys-fileitem-border-radius);border-width:var(--nys-border-width-sm, 1px);border-style:solid;border-color:var(--_nys-fileitem-border-color);background-color:var(--_nys-fileitem-background-color)}.file-item.error{--_nys-fileitem-border-color: var(--nys-color-danger, #b52c2c)}.file-item__main{display:flex;place-items:center center;gap:var(--_nys-fileinput-gap);padding:var(--_nys-fileitem-padding);height:56px;box-sizing:border-box}.file-item__info{display:flex;flex-direction:column;flex:1;min-width:0;font-family:var(--_nys-fileitem-font-family);font-size:var(--_nys-fileitem-font-size);font-style:normal;font-weight:var(--_nys-fileitem-font-weight);line-height:var(--_nys-fileitem-line-height);letter-spacing:var(--_nys-fileitem-letter-spacing)}.file-item__info-name{display:flex;max-width:100%;overflow:hidden;white-space:nowrap;align-items:center}.file-item__info-name-start{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-shrink:1;min-width:0}.file-item p{margin:0}.file-item__error{color:var(--nys-color-danger, #b52c2c);text-overflow:ellipsis;font-weight:700}progress{position:absolute;bottom:0;display:flex;width:100%;height:6px;border-radius:var(--nys-radius-round, 1776px);background:var(--_nys-fileitem-background-color--progress--fill);overflow:hidden;appearance:none}progress::-moz-progress-bar{background-color:var(--_nys-fileitem-background-color--progress)}progress::-webkit-progress-value{background-color:var(--_nys-fileitem-background-color--progress--fill)}progress::-webkit-progress-bar{background-color:var(--_nys-fileitem-background-color--progress)}.file-icon[name=progress_activity]{animation:spin 1s linear infinite}.file-icon[name=error]{color:var(--nys-color-danger, #b52c2c)}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}';
var qa = Object.defineProperty, es = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && qa(e, t, o), o;
};
const Yo = class Yo extends m {
  constructor() {
    super(...arguments), this.filename = "", this.status = "pending", this.progress = 0, this.errorMessage = "";
  }
  _handleRemove() {
    this.dispatchEvent(
      new CustomEvent("nys-fileRemove", {
        detail: { filename: this.filename },
        bubbles: !0,
        composed: !0
      })
    );
  }
  splitFilename(e) {
    const t = e.lastIndexOf("."), s = t !== -1 ? e.slice(t) : "", o = t !== -1 ? e.slice(0, t) : e, r = o.slice(0, o.length - 3), i = o.slice(-3);
    return { startPart: r, endPart: i, extension: s };
  }
  render() {
    const { startPart: e, endPart: t, extension: s } = this.splitFilename(this.filename);
    return h`
      <div
        class="file-item ${this.status}"
        aria-busy=${this.status === "processing" ? "true" : "false"}
        aria-label="You have selected ${this.filename}"
      >
        <div class="file-item__main" role="group">
          <nys-icon
            class="file-icon"
            name=${this.status === "processing" ? "progress_activity" : this.status === "error" ? "error" : "attach_file"}
            size="2xl"
          ></nys-icon>
          <div class="file-item__info">
            <div class="file-item__info-name">
              <span class="file-item__info-name-start">${e}</span>
              <span class="file-item__info-name-end"
                >${t}${s}</span
              >
            </div>
            ${this.errorMessage ? h`<p
                  class="file-item__error"
                  role="alert"
                  aria-live="assertive"
                  aria-invalid="true"
                  aria-errormessage=${this.errorMessage}
                  id="${this.filename}-error"
                >
                  ${this.errorMessage}
                </p>` : null}
          </div>
          <nys-button
            circle
            icon="close"
            ariaLabel="close button"
            size="sm"
            variant="ghost"
            @nys-click=${this._handleRemove}
            ariaLabel="Remove file: ${this.filename}"
          ></nys-button>
        </div>
        ${this.status === "processing" ? h`<div
              class="file-item__progress-container"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow="${this.progress}"
              aria-label="Upload progress for ${this.filename}"
            >
              <progress value=${this.progress} max="100"></progress>
            </div>` : null}
      </div>
    `;
  }
};
Yo.styles = w(Na), Yo.shadowRootOptions = {
  ...m.shadowRootOptions,
  delegatesFocus: !0
};
let mt = Yo;
es([
  a({ type: String })
], mt.prototype, "filename");
es([
  a({ type: String })
], mt.prototype, "status");
es([
  a({ type: Number })
], mt.prototype, "progress");
es([
  a({ type: String })
], mt.prototype, "errorMessage");
customElements.define("nys-fileitem", mt);
const Fa = ':host{--_nys-fileinput-gap: var(--nys-space-100, 8px);--_nys-fileinput-font-size: var(--nys-font-size-ui-md, 16px);--_nys-fileinput-font-weight: var(--nys-font-weight-semibold, 600);--_nys-fileinput-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-fileinput-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-fileinput-background-color--dropzone: var( --nys-color-ink-reverse, #ffffff );--_nys-fileinput-background-color--dropzone--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-fileinput-background-color--dropzone--active: var( --nys-color-theme-faint, #f7fafd );--_nys-fileinput-border-radius--dropzone: var( --nys-radius-lg, var(--nys-space-100, 8px) );--_nys-fileinput-border-style: dashed;--_nys-fileinput-border-color: var(--nys-color-neutral-200, #bec0c1);--_nys-fileinput-border-width: var(--nys-border-width-sm, 1px)}.nys-fileinput{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:var(--_nys-fileinput-gap);font-family:var(--_nys-fileinput-font-family);font-size:var(--_nys-fileinput-font-size);font-weight:var(--_nys-fileinput-font-weight);line-height:var(--_nys-fileinput-line-height)}:host([width=lg]) .nys-fileinput{max-width:var(--nys-form-width-lg, 384px)}ul{list-style-type:none;padding:0;margin:0;width:100%;display:flex;flex-direction:column;gap:var(--_nys-fileinput-gap)}.nys-fileinput__dropzone{display:flex;padding:var(--nys-space-400, 32px) var(--nys-space-200, 16px);justify-content:center;align-items:center;gap:12px;align-self:stretch;border-radius:var(--_nys-fileinput-border-radius--dropzone);outline:var(--_nys-fileinput-border-width) var(--_nys-fileinput-border-style) var(--_nys-fileinput-border-color);background-color:var(--_nys-fileinput-background-color--dropzone);transition:all 60ms ease-in-out}.nys-fileinput__dropzone:hover{cursor:pointer;--_nys-fileinput-border-width: var(--nys-border-width-md, 2px);--_nys-fileinput-border-color: var(--nys-color-neutral-700, #4a4d4f)}.nys-fileinput__dropzone.drag-active{--_nys-fileinput-border-width: var(--nys-border-width-md, 2px);--_nys-fileinput-border-color: var(--nys-color-theme, #154973);--_nys-fileinput-border-style: solid}.nys-fileinput__dropzone.error{--_nys-fileinput-border-color: var(--nys-color-danger, #b52c2c)}.nys-fileinput__dropzone.error:hover{--_nys-fileinput-border-width: var(--nys-border-width-md, 2px);--_nys-fileinput-border-color: var(--nys-color-emergency, #721c1c)}.nys-fileinput__dropzone.disabled{cursor:not-allowed;--_nys-fileinput-border-color: var(--nys-color-neutral-300, #a7a9ab);--_nys-fileinput-border-width: var(--nys-border-width-sm, 1px);background-color:var(--_nys-fileinput-background-color--dropzone--disabled);color:var(--_nys-fileinput-color--dropzone--disabled)}progress{display:flex;width:100%;height:6px;border-radius:var(--nys-radius-round, 1776px);background-color:var(--_nys-fileinput-progress-background);overflow:hidden;appearance:none;border:none}progress::-moz-progress-bar{background-color:var(--_nys-fileinput-progress-background)}progress::-webkit-progress-value{background-color:var(--_nys-fileinput-progress-background)}progress::-webkit-progress-bar{background-color:var(--_nys-fileinput-progress-background)}';
var Va = Object.defineProperty, de = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Va(e, t, o), o;
};
let Ha = 0;
const io = class io extends m {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.label = "", this.description = "", this.multiple = !1, this.form = null, this.tooltip = "", this.accept = "", this.disabled = !1, this.required = !1, this.optional = !1, this.showError = !1, this.errorMessage = "", this.dropzone = !1, this.width = "full", this.inverted = !1, this._selectedFiles = [], this._dragActive = !1, this._internals = this.attachInternals();
  }
  get _isDropDisabled() {
    return this.disabled || !this.multiple && this._selectedFiles.length > 0;
  }
  get _buttonAriaLabel() {
    return this._selectedFiles.length === 0 ? this.multiple ? "Choose files: " : "Choose file: " : this.multiple ? "Change files: " : "Change file: ";
  }
  get _buttonAriaDescription() {
    if (this._selectedFiles.length === 0)
      return `${this.label + " " + this.description}`;
    const e = this._selectedFiles.some(
      (o) => o.status === "error"
    );
    let t = "";
    if (this._selectedFiles.length === 1)
      t = `You have selected ${this._selectedFiles[0].file.name}.`;
    else {
      const o = this._selectedFiles.map((r) => r.file.name).join(", ");
      t = `You have selected ${this._selectedFiles.length} files: ${o}`;
    }
    return `${t}${e ? " Error: One or more files are not valid file types." : ""}`;
  }
  get _innerNysButton() {
    return this.renderRoot.querySelector(
      '[name="file-btn"]'
    )?.shadowRoot?.querySelector(
      "button"
    );
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-fileinput-${Date.now()}-${Ha++}`), this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this._setValue();
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    if (this.multiple) {
      const e = this._selectedFiles.map((t) => t.file);
      if (e.length > 0) {
        const t = new FormData();
        e.forEach((s) => {
          t.append(this.name, s);
        }), this._internals.setFormValue(t);
      } else
        this._internals.setFormValue(null);
    } else {
      const e = this._selectedFiles[0]?.file || null;
      this._internals.setFormValue(e);
    }
    this._manageRequire();
  }
  // Called to internally set the initial internalElement required flag.
  _manageRequire() {
    const e = this.shadowRoot?.querySelector("input");
    if (!e) return;
    const t = this.errorMessage || "Please upload a file.";
    this.required && this._selectedFiles.length == 0 ? (this._internals.ariaInvalid = "true", this._internals.setValidity({ valueMissing: !0 }, t, e)) : (this._internals.ariaInvalid = "false", this._internals.setValidity({}, "", e));
  }
  _setValidityMessage(e = "") {
    const t = this.shadowRoot?.querySelector("input");
    t && (this.showError = e === (this.errorMessage || "Please upload a file."), this.errorMessage?.trim() && e !== "" && (e = this.errorMessage), this._internals.setValidity(
      e ? { customError: !0 } : {},
      e,
      t
    ));
  }
  _validate() {
    const e = this._selectedFiles.some(
      (o) => o.status === "error"
    ), t = this.required && this._selectedFiles.length === 0;
    let s = "";
    t ? s = this.errorMessage || "Please upload a file." : e && (s = "One or more files are invalid."), this._setValidityMessage(s);
  }
  // This helper function is called to perform the element's native validation.
  checkValidity() {
    const e = this.shadowRoot?.querySelector("input");
    return e ? e.checkValidity() : !0;
  }
  // Called automatically when the parent form is reset
  formResetCallback() {
    this._selectedFiles = [];
    const e = this.shadowRoot?.querySelector(
      ".hidden-file-input"
    );
    e && (e.value = ""), this._internals.setFormValue(null), this.showError = !1, this.errorMessage = "", this._internals.setValidity({}), this.requestUpdate();
  }
  _handleInvalid(e) {
    e.preventDefault(), this._validate();
    const t = this._innerNysButton;
    if (t) {
      const s = this._internals.form;
      s ? Array.from(s.elements).find(
        (i) => typeof i.checkValidity == "function" && !i.checkValidity()
      ) === this && (t.focus(), t.classList.add("active-focus")) : (t.focus(), t.classList.add("active-focus"));
    }
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  // Store the files to be displayed
  async _saveSelectedFiles(e) {
    if (this._selectedFiles.some(
      (o) => o.file.name == e.name
    ) || !this.multiple && this._selectedFiles.length >= 1) return;
    const s = {
      file: e,
      progress: 0,
      status: "pending"
    };
    this._selectedFiles.push(s), await this._processFile(s), this._setValue(), this._validate();
  }
  // Read the contents of stored files, this will indicate loading progress of the uploaded files
  async _processFile(e) {
    e.status = "processing";
    try {
      if (!await Ba(e.file, this.accept)) {
        e.status = "error", e.errorMsg = "File type is invalid.", this.requestUpdate();
        return;
      }
      const s = new FileReader();
      s.onprogress = (o) => {
        if (o.lengthComputable) {
          const r = Math.round(o.loaded * 100 / o.total);
          e.progress = r, this.requestUpdate();
        }
      }, s.onload = () => {
        e.progress = 100, e.status = "done", this.requestUpdate();
      }, s.onerror = () => {
        e.status = "error", e.errorMsg = "Failed to load file.", this.requestUpdate();
      }, s.readAsArrayBuffer(e.file);
    } catch {
      e.status = "error", e.errorMsg = "Error validating file.", this.requestUpdate();
    }
  }
  _dispatchChangeEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-change", {
        detail: { id: this.id, files: this._selectedFiles },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _openFileDialog() {
    this.renderRoot.querySelector(
      ".hidden-file-input"
    )?.click();
  }
  _handlePostFileSelectionFocus() {
    if (this.multiple) {
      const e = this._innerNysButton;
      e && e.focus();
    } else
      this._focusFirstFileItemIfSingleMode();
  }
  async _focusFirstFileItemIfSingleMode() {
    if (!this.multiple) {
      await this.updateComplete;
      const t = this.renderRoot.querySelector(
        "nys-fileitem"
      )?.shadowRoot?.querySelector(
        ".file-item"
      );
      t && (t.setAttribute("tabindex", "-1"), t.focus());
    }
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  // Access the selected files & add new files to the internal list via the hidden <input type="file">
  _handleFileChange(e) {
    const s = e.target.files;
    (s ? Array.from(s) : []).map((r) => {
      this._saveSelectedFiles(r);
    }), this.requestUpdate(), this._dispatchChangeEvent(), this._handlePostFileSelectionFocus();
  }
  _handleFileRemove(e) {
    const t = e.detail.filename;
    if (this._selectedFiles = this._selectedFiles.filter(
      (s) => s.file.name !== t
    ), this._selectedFiles.length === 0) {
      const s = this.shadowRoot?.querySelector(
        "input"
      );
      s && (s.value = "");
    }
    this._setValue(), this._validate(), this.requestUpdate(), this._dispatchChangeEvent();
  }
  _onDragOver(e) {
    this.disabled || (e.stopPropagation(), e.preventDefault(), this._dragActive || (this._dragActive = !0, this.requestUpdate()));
  }
  // Mostly used for styling purpose
  _onDragLeave(e) {
    this.disabled || (e.stopPropagation(), e.preventDefault(), e.currentTarget === e.target && (this._dragActive = !1, this.requestUpdate()));
  }
  _onDrop(e) {
    if (this.disabled) return;
    e.preventDefault(), this._dragActive = !1, this.requestUpdate();
    const t = e.dataTransfer?.files;
    if (!t) return;
    const s = Array.from(t);
    this.multiple ? s.forEach((o) => {
      this._saveSelectedFiles(o);
    }) : this._saveSelectedFiles(s[0]), this.requestUpdate(), this._dispatchChangeEvent();
  }
  render() {
    return h`<div
      class="nys-fileinput"
      @nys-fileRemove=${this._handleFileRemove}
    >
      <nys-label
        label=${this.label}
        description=${this.description}
        flag=${this.required ? "required" : this.optional ? "optional" : ""}
        tooltip=${this.tooltip}
        ?inverted=${this.inverted}
        @nys-label-click=${this._openFileDialog}
      >
        <slot name="description" slot="description">${this.description}</slot>
      </nys-label>

      <input
        id=${this.id}
        class="hidden-file-input"
        tabindex="-1"
        type="file"
        name=${this.name}
        accept=${this.accept}
        form=${g(this.form || void 0)}
        ?multiple=${this.multiple}
        ?required=${this.required}
        ?disabled=${this.disabled || !this.multiple && this._selectedFiles.length > 0}
        aria-disabled="${this.disabled}"
        aria-hidden="true"
        @change=${this._handleFileChange}
        hidden
      />

      ${this.dropzone ? h`<div
            class="nys-fileinput__dropzone
            ${this._dragActive ? "drag-active" : ""}
            ${this._isDropDisabled ? "disabled" : ""}
            ${this.showError && !this._isDropDisabled ? "error" : ""}"
            @click=${this._isDropDisabled ? null : (e) => {
      e.target.closest("nys-button") || this._openFileDialog();
    }}
            @dragover=${this._isDropDisabled ? null : this._onDragOver}
            @dragleave=${this._isDropDisabled ? null : this._onDragLeave}
            @drop=${this._isDropDisabled ? null : this._onDrop}
            aria-label="Drag files here or choose from folder"
          >
            ${this._dragActive ? h`<p>Drop file to upload</p>` : h` <nys-button
                    id="choose-files-btn-drag"
                    name="file-btn"
                    label=${this.multiple ? "Choose files" : "Choose file"}
                    variant="outline"
                    ariaLabel=${this._buttonAriaLabel}
                    ariaDescription=${this._buttonAriaDescription}
                    ?disabled=${this._isDropDisabled}
                    @nys-click="${(e) => {
      e.preventDefault(), e.stopPropagation(), this._openFileDialog();
    }}"
                  ></nys-button>
                  <p>or drag here</p>`}
          </div>` : h`<nys-button
            id="choose-files-btn"
            name="file-btn"
            label=${this.multiple ? "Choose files" : "Choose file"}
            variant="outline"
            ariaLabel=${this._buttonAriaLabel}
            ariaDescription=${this._buttonAriaDescription}
            ?disabled=${this.disabled || !this.multiple && this._selectedFiles.length > 0}
            @nys-click=${this._openFileDialog}
          ></nys-button>`}
      ${this.showError ? h`
            <nys-errormessage
              ?showError=${this.showError}
              errorMessage=${this._internals.validationMessage || this.errorMessage}
            ></nys-errormessage>
          ` : null}
      ${this._selectedFiles.length > 0 ? h`
            <ul>
              ${this._selectedFiles.map(
      (e) => h`<li>
                    <nys-fileitem
                      filename=${e.file.name}
                      status=${e.status}
                      progress=${e.progress}
                      errorMessage=${e.errorMsg || ""}
                    ></nys-fileitem>
                  </li>`
    )}
            </ul>
          ` : null}
    </div>`;
  }
};
io.styles = w(Fa), io.shadowRootOptions = {
  ...m.shadowRootOptions,
  delegatesFocus: !0
}, io.formAssociated = !0;
let G = io;
de([
  a({ type: String, reflect: !0 })
], G.prototype, "id");
de([
  a({ type: String, reflect: !0 })
], G.prototype, "name");
de([
  a({ type: String })
], G.prototype, "label");
de([
  a({ type: String })
], G.prototype, "description");
de([
  a({ type: Boolean })
], G.prototype, "multiple");
de([
  a({ type: String, reflect: !0 })
], G.prototype, "form");
de([
  a({ type: String })
], G.prototype, "tooltip");
de([
  a({ type: String })
], G.prototype, "accept");
de([
  a({ type: Boolean, reflect: !0 })
], G.prototype, "disabled");
de([
  a({ type: Boolean, reflect: !0 })
], G.prototype, "required");
de([
  a({ type: Boolean, reflect: !0 })
], G.prototype, "optional");
de([
  a({ type: Boolean, reflect: !0 })
], G.prototype, "showError");
de([
  a({ type: String })
], G.prototype, "errorMessage");
de([
  a({ type: Boolean })
], G.prototype, "dropzone");
de([
  a({ type: String, reflect: !0 })
], G.prototype, "width");
de([
  a({ type: Boolean, reflect: !0 })
], G.prototype, "inverted");
customElements.get("nys-fileinput") || customElements.define("nys-fileinput", G);
window.__nysIconRegistry || (window.__nysIconRegistry = /* @__PURE__ */ new Map());
window.__nysIconWatchers || (window.__nysIconWatchers = /* @__PURE__ */ new Map());
const fo = window.__nysIconRegistry, Rt = window.__nysIconWatchers;
function Ua() {
  const n = /(?:^|\/)(?:nysds(?:\.es|\.min)?|nys-icon)\.js(?:[?#]|$)/;
  if (typeof document < "u") {
    const t = document.currentScript;
    if (t?.src) return new URL("./icons/", t.src).href;
    const o = Array.from(
      document.querySelectorAll("script[src]")
    ).find((r) => n.test(r.src));
    if (o?.src) return new URL("./icons/", o.src).href;
  }
  const e = import.meta.url;
  return e ? new URL("./icons/", e).href : new URL("./icons/", document.baseURI).href;
}
if (!fo.has("default")) {
  const n = Ua();
  fo.set("default", {
    resolver: (e) => e ? `${n}${e}.svg` : void 0
  });
}
function Oc(n, e) {
  fo.set(n, e), Rt.get(n)?.forEach((t) => t.redraw());
}
function Rc(n) {
  fo.delete(n), Rt.get(n)?.forEach((e) => e.redraw());
}
function ja(n) {
  return fo.get(n);
}
function Kn(n, e) {
  Rt.has(n) || Rt.set(n, /* @__PURE__ */ new Set()), Rt.get(n).add(e);
}
function Zn(n, e) {
  Rt.get(n)?.delete(e);
}
/*! @license DOMPurify 3.4.7 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.7/LICENSE */
function Qn(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, s = Array(e); t < e; t++) s[t] = n[t];
  return s;
}
function Wa(n) {
  if (Array.isArray(n)) return n;
}
function Ya(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var s, o, r, i, c = [], d = !0, u = !1;
    try {
      if (r = (t = t.call(n)).next, e !== 0) for (; !(d = (s = r.call(t)).done) && (c.push(s.value), c.length !== e); d = !0) ;
    } catch (f) {
      u = !0, o = f;
    } finally {
      try {
        if (!d && t.return != null && (i = t.return(), Object(i) !== i)) return;
      } finally {
        if (u) throw o;
      }
    }
    return c;
  }
}
function Ga() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ka(n, e) {
  return Wa(n) || Ya(n, e) || Za(n, e) || Ga();
}
function Za(n, e) {
  if (n) {
    if (typeof n == "string") return Qn(n, e);
    var t = {}.toString.call(n).slice(8, -1);
    return t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set" ? Array.from(n) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Qn(n, e) : void 0;
  }
}
const Tr = Object.entries, Xn = Object.setPrototypeOf, Qa = Object.isFrozen, Xa = Object.getPrototypeOf, Ja = Object.getOwnPropertyDescriptor;
let pe = Object.freeze, Ee = Object.seal, zt = Object.create, Ir = typeof Reflect < "u" && Reflect, Es = Ir.apply, Ss = Ir.construct;
pe || (pe = function(e) {
  return e;
});
Ee || (Ee = function(e) {
  return e;
});
Es || (Es = function(e, t) {
  for (var s = arguments.length, o = new Array(s > 2 ? s - 2 : 0), r = 2; r < s; r++)
    o[r - 2] = arguments[r];
  return e.apply(t, o);
});
Ss || (Ss = function(e) {
  for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    s[o - 1] = arguments[o];
  return new e(...s);
});
const Dt = j(Array.prototype.forEach), el = j(Array.prototype.lastIndexOf), Jn = j(Array.prototype.pop), Lt = j(Array.prototype.push), tl = j(Array.prototype.splice), ue = Array.isArray, Jt = j(String.prototype.toLowerCase), gs = j(String.prototype.toString), er = j(String.prototype.match), At = j(String.prototype.replace), tr = j(String.prototype.indexOf), ol = j(String.prototype.trim), sl = j(Number.prototype.toString), nl = j(Boolean.prototype.toString), or = typeof BigInt > "u" ? null : j(BigInt.prototype.toString), sr = typeof Symbol > "u" ? null : j(Symbol.prototype.toString), P = j(Object.prototype.hasOwnProperty), Zt = j(Object.prototype.toString), ee = j(RegExp.prototype.test), Qt = rl(TypeError);
function j(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      s[o - 1] = arguments[o];
    return Es(n, e, s);
  };
}
function rl(n) {
  return function() {
    for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
      t[s] = arguments[s];
    return Ss(n, t);
  };
}
function x(n, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Jt;
  if (Xn && Xn(n, null), !ue(e))
    return n;
  let s = e.length;
  for (; s--; ) {
    let o = e[s];
    if (typeof o == "string") {
      const r = t(o);
      r !== o && (Qa(e) || (e[s] = r), o = r);
    }
    n[o] = !0;
  }
  return n;
}
function il(n) {
  for (let e = 0; e < n.length; e++)
    P(n, e) || (n[e] = null);
  return n;
}
function re(n) {
  const e = zt(null);
  for (const s of Tr(n)) {
    var t = Ka(s, 2);
    const o = t[0], r = t[1];
    P(n, o) && (ue(r) ? e[o] = il(r) : r && typeof r == "object" && r.constructor === Object ? e[o] = re(r) : e[o] = r);
  }
  return e;
}
function al(n) {
  switch (typeof n) {
    case "string":
      return n;
    case "number":
      return sl(n);
    case "boolean":
      return nl(n);
    case "bigint":
      return or ? or(n) : "0";
    case "symbol":
      return sr ? sr(n) : "Symbol()";
    case "undefined":
      return Zt(n);
    case "function":
    case "object": {
      if (n === null)
        return Zt(n);
      const e = n, t = He(e, "toString");
      if (typeof t == "function") {
        const s = t(e);
        return typeof s == "string" ? s : Zt(s);
      }
      return Zt(n);
    }
    default:
      return Zt(n);
  }
}
function He(n, e) {
  for (; n !== null; ) {
    const s = Ja(n, e);
    if (s) {
      if (s.get)
        return j(s.get);
      if (typeof s.value == "function")
        return j(s.value);
    }
    n = Xa(n);
  }
  function t() {
    return null;
  }
  return t;
}
function ll(n) {
  try {
    return ee(n, ""), !0;
  } catch {
    return !1;
  }
}
const nr = pe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ms = pe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), xs = pe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), cl = pe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ws = pe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), dl = pe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), rr = pe(["#text"]), ir = pe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ks = pe(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ar = pe(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ro = pe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), hl = Ee(/{{[\w\W]*|^[\w\W]*}}/g), ul = Ee(/<%[\w\W]*|^[\w\W]*%>/g), pl = Ee(/\${[\w\W]*/g), yl = Ee(/^data-[\-\w.\u00B7-\uFFFF]+$/), fl = Ee(/^aria-[\-\w]+$/), lr = Ee(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), bl = Ee(/^(?:\w+script|data):/i), vl = Ee(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), _l = Ee(/^html$/i), gl = Ee(/^[a-z][.\w]*(-[.\w]+)+$/i), Ve = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, ml = function() {
  return typeof window > "u" ? null : window;
}, xl = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let s = null;
  const o = "data-tt-policy-suffix";
  t && t.hasAttribute(o) && (s = t.getAttribute(o));
  const r = "dompurify" + (s ? "#" + s : "");
  try {
    return e.createPolicy(r, {
      createHTML(i) {
        return i;
      },
      createScriptURL(i) {
        return i;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + r + " could not be created."), null;
  }
}, cr = function() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function Mr() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ml();
  const e = (_) => Mr(_);
  if (e.version = "3.4.7", e.removed = [], !n || !n.document || n.document.nodeType !== Ve.document || !n.Element)
    return e.isSupported = !1, e;
  let t = n.document;
  const s = t, o = s.currentScript;
  n.DocumentFragment;
  const r = n.HTMLTemplateElement, i = n.Node, c = n.Element, d = n.NodeFilter, u = n.NamedNodeMap;
  u === void 0 && (n.NamedNodeMap || n.MozNamedAttrMap), n.HTMLFormElement;
  const f = n.DOMParser, y = n.trustedTypes, b = c.prototype, E = He(b, "cloneNode"), Y = He(b, "remove"), he = He(b, "nextSibling"), _e = He(b, "childNodes"), se = He(b, "parentNode"), De = He(b, "shadowRoot"), ke = He(b, "attributes"), ne = i && i.prototype ? He(i.prototype, "nodeType") : null, Ce = i && i.prototype ? He(i.prototype, "nodeName") : null;
  if (typeof r == "function") {
    const _ = t.createElement("template");
    _.content && _.content.ownerDocument && (t = _.content.ownerDocument);
  }
  let R, Ut = "";
  const ko = t, os = ko.implementation, cn = ko.createNodeIterator, Br = ko.createDocumentFragment, Nr = ko.getElementsByTagName, qr = s.importNode;
  let Z = cr();
  e.isSupported = typeof Tr == "function" && typeof se == "function" && os && os.createHTMLDocument !== void 0;
  const Co = hl, $o = ul, Eo = pl, Fr = yl, Vr = fl, Hr = bl, dn = vl, Ur = gl;
  let hn = lr, N = null;
  const ss = x({}, [...nr, ...ms, ...xs, ...ws, ...rr]);
  let U = null;
  const ns = x({}, [...ir, ...ks, ...ar, ...Ro]);
  let q = Object.seal(zt(null, {
    tagNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeNameCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: !1
    }
  })), jt = null, So = null;
  const tt = Object.seal(zt(null, {
    tagCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    },
    attributeCheck: {
      writable: !0,
      configurable: !1,
      enumerable: !0,
      value: null
    }
  }));
  let un = !0, rs = !0, pn = !1, yn = !0, ot = !1, Wt = !0, yt = !1, is = !1, as = !1, kt = !1, Do = !1, Lo = !1, fn = !0, bn = !1;
  const vn = "user-content-";
  let ls = !0, Yt = !1, Ct = {}, Ne = null;
  const cs = x({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let _n = null;
  const gn = x({}, ["audio", "video", "img", "source", "image", "track"]);
  let ds = null;
  const mn = x({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ao = "http://www.w3.org/1998/Math/MathML", To = "http://www.w3.org/2000/svg", qe = "http://www.w3.org/1999/xhtml";
  let $t = qe, hs = !1, us = null;
  const jr = x({}, [Ao, To, qe], gs);
  let ps = x({}, ["mi", "mo", "mn", "ms", "mtext"]), ys = x({}, ["annotation-xml"]);
  const Wr = x({}, ["title", "style", "font", "a", "script"]);
  let Gt = null;
  const Yr = ["application/xhtml+xml", "text/html"], Gr = "text/html";
  let F = null, Et = null;
  const Kr = t.createElement("form"), xn = function(l) {
    return l instanceof RegExp || l instanceof Function;
  }, fs = function() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (Et && Et === l)
      return;
    (!l || typeof l != "object") && (l = {}), l = re(l), Gt = // eslint-disable-next-line unicorn/prefer-includes
    Yr.indexOf(l.PARSER_MEDIA_TYPE) === -1 ? Gr : l.PARSER_MEDIA_TYPE, F = Gt === "application/xhtml+xml" ? gs : Jt, N = P(l, "ALLOWED_TAGS") && ue(l.ALLOWED_TAGS) ? x({}, l.ALLOWED_TAGS, F) : ss, U = P(l, "ALLOWED_ATTR") && ue(l.ALLOWED_ATTR) ? x({}, l.ALLOWED_ATTR, F) : ns, us = P(l, "ALLOWED_NAMESPACES") && ue(l.ALLOWED_NAMESPACES) ? x({}, l.ALLOWED_NAMESPACES, gs) : jr, ds = P(l, "ADD_URI_SAFE_ATTR") && ue(l.ADD_URI_SAFE_ATTR) ? x(re(mn), l.ADD_URI_SAFE_ATTR, F) : mn, _n = P(l, "ADD_DATA_URI_TAGS") && ue(l.ADD_DATA_URI_TAGS) ? x(re(gn), l.ADD_DATA_URI_TAGS, F) : gn, Ne = P(l, "FORBID_CONTENTS") && ue(l.FORBID_CONTENTS) ? x({}, l.FORBID_CONTENTS, F) : cs, jt = P(l, "FORBID_TAGS") && ue(l.FORBID_TAGS) ? x({}, l.FORBID_TAGS, F) : re({}), So = P(l, "FORBID_ATTR") && ue(l.FORBID_ATTR) ? x({}, l.FORBID_ATTR, F) : re({}), Ct = P(l, "USE_PROFILES") ? l.USE_PROFILES && typeof l.USE_PROFILES == "object" ? re(l.USE_PROFILES) : l.USE_PROFILES : !1, un = l.ALLOW_ARIA_ATTR !== !1, rs = l.ALLOW_DATA_ATTR !== !1, pn = l.ALLOW_UNKNOWN_PROTOCOLS || !1, yn = l.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ot = l.SAFE_FOR_TEMPLATES || !1, Wt = l.SAFE_FOR_XML !== !1, yt = l.WHOLE_DOCUMENT || !1, kt = l.RETURN_DOM || !1, Do = l.RETURN_DOM_FRAGMENT || !1, Lo = l.RETURN_TRUSTED_TYPE || !1, as = l.FORCE_BODY || !1, fn = l.SANITIZE_DOM !== !1, bn = l.SANITIZE_NAMED_PROPS || !1, ls = l.KEEP_CONTENT !== !1, Yt = l.IN_PLACE || !1, hn = ll(l.ALLOWED_URI_REGEXP) ? l.ALLOWED_URI_REGEXP : lr, $t = typeof l.NAMESPACE == "string" ? l.NAMESPACE : qe, ps = P(l, "MATHML_TEXT_INTEGRATION_POINTS") && l.MATHML_TEXT_INTEGRATION_POINTS && typeof l.MATHML_TEXT_INTEGRATION_POINTS == "object" ? re(l.MATHML_TEXT_INTEGRATION_POINTS) : x({}, ["mi", "mo", "mn", "ms", "mtext"]), ys = P(l, "HTML_INTEGRATION_POINTS") && l.HTML_INTEGRATION_POINTS && typeof l.HTML_INTEGRATION_POINTS == "object" ? re(l.HTML_INTEGRATION_POINTS) : x({}, ["annotation-xml"]);
    const p = P(l, "CUSTOM_ELEMENT_HANDLING") && l.CUSTOM_ELEMENT_HANDLING && typeof l.CUSTOM_ELEMENT_HANDLING == "object" ? re(l.CUSTOM_ELEMENT_HANDLING) : zt(null);
    if (q = zt(null), P(p, "tagNameCheck") && xn(p.tagNameCheck) && (q.tagNameCheck = p.tagNameCheck), P(p, "attributeNameCheck") && xn(p.attributeNameCheck) && (q.attributeNameCheck = p.attributeNameCheck), P(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (q.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), ot && (rs = !1), Do && (kt = !0), Ct && (N = x({}, rr), U = zt(null), Ct.html === !0 && (x(N, nr), x(U, ir)), Ct.svg === !0 && (x(N, ms), x(U, ks), x(U, Ro)), Ct.svgFilters === !0 && (x(N, xs), x(U, ks), x(U, Ro)), Ct.mathMl === !0 && (x(N, ws), x(U, ar), x(U, Ro))), tt.tagCheck = null, tt.attributeCheck = null, P(l, "ADD_TAGS") && (typeof l.ADD_TAGS == "function" ? tt.tagCheck = l.ADD_TAGS : ue(l.ADD_TAGS) && (N === ss && (N = re(N)), x(N, l.ADD_TAGS, F))), P(l, "ADD_ATTR") && (typeof l.ADD_ATTR == "function" ? tt.attributeCheck = l.ADD_ATTR : ue(l.ADD_ATTR) && (U === ns && (U = re(U)), x(U, l.ADD_ATTR, F))), P(l, "ADD_URI_SAFE_ATTR") && ue(l.ADD_URI_SAFE_ATTR) && x(ds, l.ADD_URI_SAFE_ATTR, F), P(l, "FORBID_CONTENTS") && ue(l.FORBID_CONTENTS) && (Ne === cs && (Ne = re(Ne)), x(Ne, l.FORBID_CONTENTS, F)), P(l, "ADD_FORBID_CONTENTS") && ue(l.ADD_FORBID_CONTENTS) && (Ne === cs && (Ne = re(Ne)), x(Ne, l.ADD_FORBID_CONTENTS, F)), ls && (N["#text"] = !0), yt && x(N, ["html", "head", "body"]), N.table && (x(N, ["tbody"]), delete jt.tbody), l.TRUSTED_TYPES_POLICY) {
      if (typeof l.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Qt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof l.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Qt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      R = l.TRUSTED_TYPES_POLICY, Ut = R.createHTML("");
    } else
      R === void 0 && (R = xl(y, o)), R !== null && typeof Ut == "string" && (Ut = R.createHTML(""));
    (Z.uponSanitizeElement.length > 0 || Z.uponSanitizeAttribute.length > 0) && N === ss && (N = re(N)), Z.uponSanitizeAttribute.length > 0 && U === ns && (U = re(U)), pe && pe(l), Et = l;
  }, wn = x({}, [...ms, ...xs, ...cl]), kn = x({}, [...ws, ...dl]), Zr = function(l) {
    let p = se(l);
    (!p || !p.tagName) && (p = {
      namespaceURI: $t,
      tagName: "template"
    });
    const v = Jt(l.tagName), S = Jt(p.tagName);
    return us[l.namespaceURI] ? l.namespaceURI === To ? p.namespaceURI === qe ? v === "svg" : p.namespaceURI === Ao ? v === "svg" && (S === "annotation-xml" || ps[S]) : !!wn[v] : l.namespaceURI === Ao ? p.namespaceURI === qe ? v === "math" : p.namespaceURI === To ? v === "math" && ys[S] : !!kn[v] : l.namespaceURI === qe ? p.namespaceURI === To && !ys[S] || p.namespaceURI === Ao && !ps[S] ? !1 : !kn[v] && (Wr[v] || !wn[v]) : !!(Gt === "application/xhtml+xml" && us[l.namespaceURI]) : !1;
  }, Le = function(l) {
    Lt(e.removed, {
      element: l
    });
    try {
      se(l).removeChild(l);
    } catch {
      Y(l);
    }
  }, ft = function(l, p) {
    try {
      Lt(e.removed, {
        attribute: p.getAttributeNode(l),
        from: p
      });
    } catch {
      Lt(e.removed, {
        attribute: null,
        from: p
      });
    }
    if (p.removeAttribute(l), l === "is")
      if (kt || Do)
        try {
          Le(p);
        } catch {
        }
      else
        try {
          p.setAttribute(l, "");
        } catch {
        }
  }, Cn = function(l) {
    let p = null, v = null;
    if (as)
      l = "<remove></remove>" + l;
    else {
      const T = er(l, /^[\r\n\t ]+/);
      v = T && T[0];
    }
    Gt === "application/xhtml+xml" && $t === qe && (l = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + l + "</body></html>");
    const S = R ? R.createHTML(l) : l;
    if ($t === qe)
      try {
        p = new f().parseFromString(S, Gt);
      } catch {
      }
    if (!p || !p.documentElement) {
      p = os.createDocument($t, "template", null);
      try {
        p.documentElement.innerHTML = hs ? Ut : S;
      } catch {
      }
    }
    const C = p.body || p.documentElement;
    return l && v && C.insertBefore(t.createTextNode(v), C.childNodes[0] || null), $t === qe ? Nr.call(p, yt ? "html" : "body")[0] : yt ? p.documentElement : C;
  }, $n = function(l) {
    return cn.call(
      l.ownerDocument || l,
      l,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, En = function(l) {
    l.normalize();
    const p = cn.call(
      l.ownerDocument || l,
      l,
      // eslint-disable-next-line no-bitwise
      d.SHOW_TEXT | d.SHOW_COMMENT | d.SHOW_CDATA_SECTION | d.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let v = p.nextNode();
    for (; v; ) {
      let S = v.data;
      Dt([Co, $o, Eo], (C) => {
        S = At(S, C, " ");
      }), v.data = S, v = p.nextNode();
    }
  }, Io = function(l) {
    const p = Ce ? Ce(l) : null;
    return typeof p != "string" || F(p) !== "form" ? !1 : typeof l.nodeName != "string" || typeof l.textContent != "string" || typeof l.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    l.attributes !== ke(l) || typeof l.removeAttribute != "function" || typeof l.setAttribute != "function" || typeof l.namespaceURI != "string" || typeof l.insertBefore != "function" || typeof l.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    l.nodeType !== ne(l) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
    // "childNodes" shadows the prototype getter. Direct reads of
    // form.childNodes from a clobbered form return the named child
    // instead of the real NodeList, so any walk that reads it directly
    // skips the form's real children. Compare the direct read to the
    // cached Node.prototype getter — when the form's named-property
    // getter intercepts the read, the two values differ and we flag
    // the form. This catches every clobbering child type (input,
    // select, etc.) regardless of whether the named child happens to
    // carry a numeric .length, which a typeof-based probe would miss
    // (e.g. HTMLSelectElement.length is a defined unsigned-long).
    l.childNodes !== _e(l);
  }, Kt = function(l) {
    if (!ne || typeof l != "object" || l === null)
      return !1;
    try {
      return ne(l) === Ve.documentFragment;
    } catch {
      return !1;
    }
  }, Mo = function(l) {
    if (!ne || typeof l != "object" || l === null)
      return !1;
    try {
      return typeof ne(l) == "number";
    } catch {
      return !1;
    }
  };
  function Ye(_, l, p) {
    Dt(_, (v) => {
      v.call(e, l, p, Et);
    });
  }
  const Sn = function(l) {
    let p = null;
    if (Ye(Z.beforeSanitizeElements, l, null), Io(l))
      return Le(l), !0;
    const v = F(l.nodeName);
    if (Ye(Z.uponSanitizeElement, l, {
      tagName: v,
      allowedTags: N
    }), Wt && l.hasChildNodes() && !Mo(l.firstElementChild) && ee(/<[/\w!]/g, l.innerHTML) && ee(/<[/\w!]/g, l.textContent) || Wt && l.namespaceURI === qe && v === "style" && Mo(l.firstElementChild) || l.nodeType === Ve.progressingInstruction || Wt && l.nodeType === Ve.comment && ee(/<[/\w]/g, l.data))
      return Le(l), !0;
    if (jt[v] || !(tt.tagCheck instanceof Function && tt.tagCheck(v)) && !N[v]) {
      if (!jt[v] && Ln(v) && (q.tagNameCheck instanceof RegExp && ee(q.tagNameCheck, v) || q.tagNameCheck instanceof Function && q.tagNameCheck(v)))
        return !1;
      if (ls && !Ne[v]) {
        const C = se(l), T = _e(l);
        if (T && C) {
          const $e = T.length;
          for (let Fe = $e - 1; Fe >= 0; --Fe) {
            const Ae = E(T[Fe], !0);
            C.insertBefore(Ae, he(l));
          }
        }
      }
      return Le(l), !0;
    }
    return (ne ? ne(l) : l.nodeType) === Ve.element && !Zr(l) || (v === "noscript" || v === "noembed" || v === "noframes") && ee(/<\/no(script|embed|frames)/i, l.innerHTML) ? (Le(l), !0) : (ot && l.nodeType === Ve.text && (p = l.textContent, Dt([Co, $o, Eo], (C) => {
      p = At(p, C, " ");
    }), l.textContent !== p && (Lt(e.removed, {
      element: l.cloneNode()
    }), l.textContent = p)), Ye(Z.afterSanitizeElements, l, null), !1);
  }, Dn = function(l, p, v) {
    if (So[p] || fn && (p === "id" || p === "name") && (v in t || v in Kr))
      return !1;
    const S = U[p] || tt.attributeCheck instanceof Function && tt.attributeCheck(p, l);
    if (!(rs && !So[p] && ee(Fr, p))) {
      if (!(un && ee(Vr, p))) {
        if (!S || So[p]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Ln(l) && (q.tagNameCheck instanceof RegExp && ee(q.tagNameCheck, l) || q.tagNameCheck instanceof Function && q.tagNameCheck(l)) && (q.attributeNameCheck instanceof RegExp && ee(q.attributeNameCheck, p) || q.attributeNameCheck instanceof Function && q.attributeNameCheck(p, l)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            p === "is" && q.allowCustomizedBuiltInElements && (q.tagNameCheck instanceof RegExp && ee(q.tagNameCheck, v) || q.tagNameCheck instanceof Function && q.tagNameCheck(v)))
          ) return !1;
        } else if (!ds[p]) {
          if (!ee(hn, At(v, dn, ""))) {
            if (!((p === "src" || p === "xlink:href" || p === "href") && l !== "script" && tr(v, "data:") === 0 && _n[l])) {
              if (!(pn && !ee(Hr, At(v, dn, "")))) {
                if (v)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Qr = x({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Ln = function(l) {
    return !Qr[Jt(l)] && ee(Ur, l);
  }, An = function(l) {
    Ye(Z.beforeSanitizeAttributes, l, null);
    const p = l.attributes;
    if (!p || Io(l))
      return;
    const v = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: U,
      forceKeepAttr: void 0
    };
    let S = p.length;
    for (; S--; ) {
      const C = p[S], T = C.name, $e = C.namespaceURI, Fe = C.value, Ae = F(T), bs = Fe;
      let Q = T === "value" ? bs : ol(bs);
      if (v.attrName = Ae, v.attrValue = Q, v.keepAttr = !0, v.forceKeepAttr = void 0, Ye(Z.uponSanitizeAttribute, l, v), Q = v.attrValue, bn && (Ae === "id" || Ae === "name") && tr(Q, vn) !== 0 && (ft(T, l), Q = vn + Q), Wt && ee(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Q)) {
        ft(T, l);
        continue;
      }
      if (Ae === "attributename" && er(Q, "href")) {
        ft(T, l);
        continue;
      }
      if (v.forceKeepAttr)
        continue;
      if (!v.keepAttr) {
        ft(T, l);
        continue;
      }
      if (!yn && ee(/\/>/i, Q)) {
        ft(T, l);
        continue;
      }
      ot && Dt([Co, $o, Eo], (In) => {
        Q = At(Q, In, " ");
      });
      const Tn = F(l.nodeName);
      if (!Dn(Tn, Ae, Q)) {
        ft(T, l);
        continue;
      }
      if (R && typeof y == "object" && typeof y.getAttributeType == "function" && !$e)
        switch (y.getAttributeType(Tn, Ae)) {
          case "TrustedHTML": {
            Q = R.createHTML(Q);
            break;
          }
          case "TrustedScriptURL": {
            Q = R.createScriptURL(Q);
            break;
          }
        }
      if (Q !== bs)
        try {
          $e ? l.setAttributeNS($e, T, Q) : l.setAttribute(T, Q), Io(l) ? Le(l) : Jn(e.removed);
        } catch {
          ft(T, l);
        }
    }
    Ye(Z.afterSanitizeAttributes, l, null);
  }, zo = function(l) {
    let p = null;
    const v = $n(l);
    for (Ye(Z.beforeSanitizeShadowDOM, l, null); p = v.nextNode(); )
      if (Ye(Z.uponSanitizeShadowNode, p, null), Sn(p), An(p), Kt(p.content) && zo(p.content), (ne ? ne(p) : p.nodeType) === Ve.element) {
        const C = De ? De(p) : p.shadowRoot;
        Kt(C) && (St(C), zo(C));
      }
    Ye(Z.afterSanitizeShadowDOM, l, null);
  }, St = function(l) {
    const p = ne ? ne(l) : l.nodeType;
    if (p === Ve.element) {
      const C = De ? De(l) : l.shadowRoot;
      Kt(C) && (St(C), zo(C));
    }
    const v = _e ? _e(l) : l.childNodes;
    if (!v)
      return;
    const S = [];
    Dt(v, (C) => {
      Lt(S, C);
    });
    for (const C of S)
      St(C);
    if (p === Ve.element) {
      const C = Ce ? Ce(l) : null;
      if (typeof C == "string" && F(C) === "template") {
        const T = l.content;
        Kt(T) && St(T);
      }
    }
  };
  return e.sanitize = function(_) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, p = null, v = null, S = null, C = null;
    if (hs = !_, hs && (_ = "<!-->"), typeof _ != "string" && !Mo(_) && (_ = al(_), typeof _ != "string"))
      throw Qt("dirty is not a string, aborting");
    if (!e.isSupported)
      return _;
    if (is || fs(l), e.removed = [], typeof _ == "string" && (Yt = !1), Yt) {
      const Fe = Ce ? Ce(_) : _.nodeName;
      if (typeof Fe == "string") {
        const Ae = F(Fe);
        if (!N[Ae] || jt[Ae])
          throw Qt("root node is forbidden and cannot be sanitized in-place");
      }
      if (Io(_))
        throw Qt("root node is clobbered and cannot be sanitized in-place");
      St(_);
    } else if (Mo(_))
      p = Cn("<!---->"), v = p.ownerDocument.importNode(_, !0), v.nodeType === Ve.element && v.nodeName === "BODY" || v.nodeName === "HTML" ? p = v : p.appendChild(v), St(v);
    else {
      if (!kt && !ot && !yt && // eslint-disable-next-line unicorn/prefer-includes
      _.indexOf("<") === -1)
        return R && Lo ? R.createHTML(_) : _;
      if (p = Cn(_), !p)
        return kt ? null : Lo ? Ut : "";
    }
    p && as && Le(p.firstChild);
    const T = $n(Yt ? _ : p);
    for (; S = T.nextNode(); )
      Sn(S), An(S), Kt(S.content) && zo(S.content);
    if (Yt)
      return ot && En(_), _;
    if (kt) {
      if (ot && En(p), Do)
        for (C = Br.call(p.ownerDocument); p.firstChild; )
          C.appendChild(p.firstChild);
      else
        C = p;
      return (U.shadowroot || U.shadowrootmode) && (C = qr.call(s, C, !0)), C;
    }
    let $e = yt ? p.outerHTML : p.innerHTML;
    return yt && N["!doctype"] && p.ownerDocument && p.ownerDocument.doctype && p.ownerDocument.doctype.name && ee(_l, p.ownerDocument.doctype.name) && ($e = "<!DOCTYPE " + p.ownerDocument.doctype.name + `>
` + $e), ot && Dt([Co, $o, Eo], (Fe) => {
      $e = At($e, Fe, " ");
    }), R && Lo ? R.createHTML($e) : $e;
  }, e.setConfig = function() {
    let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    fs(_), is = !0;
  }, e.clearConfig = function() {
    Et = null, is = !1;
  }, e.isValidAttribute = function(_, l, p) {
    Et || fs({});
    const v = F(_), S = F(l);
    return Dn(v, S, p);
  }, e.addHook = function(_, l) {
    typeof l == "function" && Lt(Z[_], l);
  }, e.removeHook = function(_, l) {
    if (l !== void 0) {
      const p = el(Z[_], l);
      return p === -1 ? void 0 : tl(Z[_], p, 1)[0];
    }
    return Jn(Z[_]);
  }, e.removeHooks = function(_) {
    Z[_] = [];
  }, e.removeAllHooks = function() {
    Z = cr();
  }, e;
}
var wl = Mr();
const to = /* @__PURE__ */ new Map();
async function kl(n) {
  const e = await fetch(n);
  if (!e.ok)
    throw new Error(`Failed to load icon: ${e.status}`);
  const t = await e.text(), s = wl.sanitize(t, {
    USE_PROFILES: { svg: !0, svgFilters: !0 },
    FORBID_TAGS: ["script", "use"],
    // <use> can SSRF to external hrefs
    FORBID_ATTR: ["onload", "onerror", "onbegin", "href", "xlink:href"]
  }), i = new DOMParser().parseFromString(s, "image/svg+xml").documentElement;
  if (!(i instanceof SVGElement))
    throw new Error(`Invalid SVG from ${n}`);
  return i;
}
async function Cl(n) {
  return to.has(n) || to.set(n, kl(n)), (await to.get(n)).cloneNode(!0);
}
function Pc(n) {
  n ? to.delete(n) : to.clear();
}
const $l = ":host{display:inline-block;width:fit-content;height:fit-content;--_nys-icon-size: var( --nys-icon-size, .7em );box-sizing:content-box!important;vertical-align:middle}@supports (font-size: 1cap){:host{--_nys-icon-size: var(--nys-icon-size, 1cap)}}.nys-icon--svg{width:var(--_nys-icon-size, 1em);height:var(--_nys-icon-size, 1em);display:block;white-space:nowrap}.nys-icon--xs{width:calc(var(--_nys-icon-size) * .75);height:calc(var(--_nys-icon-size) * .75)}.nys-icon--sm{width:calc(var(--_nys-icon-size) * .875);height:calc(var(--_nys-icon-size) * .875)}.nys-icon--md{width:var(--_nys-icon-size);height:var(--_nys-icon-size)}.nys-icon--lg{width:calc(var(--_nys-icon-size) * 1.125);height:calc(var(--_nys-icon-size) * 1.125)}.nys-icon--xl{width:calc(var(--_nys-icon-size) * 1.25);height:calc(var(--_nys-icon-size) * 1.25)}.nys-icon--2xl{width:calc(var(--_nys-icon-size) * 1.5);height:calc(var(--_nys-icon-size) * 1.5)}.nys-icon--3xl{width:calc(var(--_nys-icon-size) * 1.875);height:calc(var(--_nys-icon-size) * 1.875)}.nys-icon--4xl{width:calc(var(--_nys-icon-size) * 2.25);height:calc(var(--_nys-icon-size) * 2.25)}.nys-icon--5xl{width:calc(var(--_nys-icon-size) * 3);height:calc(var(--_nys-icon-size) * 3)}.nys-icon--12{width:.75rem;height:.75rem}.nys-icon--14{width:.875rem;height:.875rem}.nys-icon--16{width:1rem;height:1rem}.nys-icon--18{width:1.125rem;height:1.125rem}.nys-icon--20{width:1.25rem;height:1.25rem}.nys-icon--24{width:1.5rem;height:1.5rem}.nys-icon--32{width:2rem;height:2rem}.nys-icon--40{width:2.5rem;height:2.5rem}.nys-icon--50{width:3.125rem;height:3.125rem}.nys-icon--flip-horizontal{transform:scaleX(-1)}.nys-icon--flip-vertical{transform:scaleY(-1)}.nys-icon--flip-both{transform:scale(-1)}";
var El = Object.defineProperty, dt = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && El(e, t, o), o;
}, rt;
const Je = (rt = class extends m {
  constructor() {
    super(...arguments), this.name = "", this.library = "default", this.ariaLabel = "", this.rotate = "0", this.flip = "", this.color = "", this.size = "md", this._svg = null, this._loadSeq = 0, this._loadPromise = null;
  }
  /** Resolves when the current icon load (if any) is complete. */
  get updateComplete() {
    return (async () => {
      const e = await super.updateComplete;
      return await this._loadPromise, e;
    })();
  }
  connectedCallback() {
    super.connectedCallback(), Kn(this.library, this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), Zn(this.library, this);
  }
  /** Called by the icon library registry when the current library changes. */
  redraw() {
    this._loadIcon();
  }
  /**
   * Lit calls firstUpdated after the first render, once all reactive
   * properties (including those set from the template) are resolved.
   * This guarantees the initial _loadIcon runs with the correct name
   * and library values, avoiding the race where updated() might not
   * fire for properties that equal their defaults.
   */
  firstUpdated() {
    this._loadIcon();
  }
  updated(e) {
    if (e.has("name") && !rt._validName.test(this.name)) {
      console.warn(`nys-icon: invalid name "${this.name}" — ignored`), this._svg = null;
      return;
    }
    if (e.has("name") || e.has("library")) {
      if (e.has("library")) {
        const t = e.get("library");
        t && Zn(t, this), Kn(this.library, this);
      }
      this._loadIcon();
    }
    this._svg && (e.has("ariaLabel") || e.has("rotate") || e.has("flip") || e.has("color") || e.has("size")) && this._applyAttributes(this._svg);
  }
  _loadIcon() {
    const e = ++this._loadSeq;
    this._loadPromise = (async () => {
      const t = ja(this.library);
      if (!t || !this.name) {
        this._svg = null;
        return;
      }
      const s = t.resolver(this.name);
      if (!s) {
        this._svg = null;
        return;
      }
      try {
        const o = await Cl(s);
        if (e !== this._loadSeq) return;
        t.mutator?.(o), this._applyAttributes(o), this._svg = o;
      } catch {
        e === this._loadSeq && (this._svg = null);
      }
    })();
  }
  _applyAttributes(e) {
    e.setAttribute("role", "img"), this.ariaLabel ? (e.setAttribute("aria-label", this.ariaLabel), e.removeAttribute("aria-hidden")) : (e.setAttribute("aria-hidden", "true"), e.removeAttribute("aria-label")), e.style.rotate = `${this.rotate}deg`, e.style.color = this.color || "currentcolor", e.classList.add(`nys-icon--${this.size}`), e.classList.add("nys-icon--svg"), this.flip && e.classList.add(`nys-icon--flip-${this.flip}`);
  }
  render() {
    return this._svg ? h`${this._svg}` : null;
  }
}, rt.styles = w($l), rt._validName = /^[a-zA-Z0-9_-]+$/, rt);
dt([
  a({ type: String, reflect: !0 })
], Je.prototype, "name");
dt([
  a({ type: String, reflect: !0 })
], Je.prototype, "library");
dt([
  a({ type: String })
], Je.prototype, "ariaLabel");
dt([
  a({ type: String })
], Je.prototype, "rotate");
dt([
  a({ type: String })
], Je.prototype, "flip");
dt([
  a({ type: String })
], Je.prototype, "color");
dt([
  a({ type: String })
], Je.prototype, "size");
dt([
  $()
], Je.prototype, "_svg");
let Sl = Je;
customElements.get("nys-icon") || customElements.define("nys-icon", Sl);
const Dl = ':host{--_nys-label-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-label-font-weight: var(--nys-font-weight-semibold, 600);--_nys-label-font-size: var(--nys-font-size-ui-md, 16px);--_nys-label-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-label-letter-spacing: var(--nys-font-letterspacing-ui-md, .044px);--_nys-label-color: var(--nys-color-text, #1b1b1b);--_nys-label-cursor: normal;--_nys-description-font-weight: var(--nys-font-weight-regular, 400);--_nys-description-font-style: normal;--_nys-description-font-color: var(--nys-color-text-weak, #4a4d4f);--_nys-required-font-color: var(--nys-color-danger, #b52c2c);--_nys-optional-font-weight: var(--nys-font-weight-regular, 400);--_nys-optional-font-color: var(--nys-color-text-weak, #4a4d4f);--_nys-label-gap: var(--nys-space-4px, 4px)}p{margin:0}.nys-label{display:flex;flex-direction:column;align-items:flex-start;font-family:var(--_nys-label-font-family);font-size:var(--_nys-label-font-size);line-height:var(--_nys-label-line-height);letter-spacing:var(--_nys-label-letter-spacing)}.nys-label *{cursor:var(--_nys-label-cursor)}.nys-label__label{display:flex;gap:var(--_nys-label-gap);text-align:left;font-weight:var(--_nys-label-font-weight);color:var(--_nys-label-color)}.nys-label__description{text-align:left;font-weight:var(--_nys-description-font-weight);font-style:var(--_nys-description-font-style);color:var(--_nys-description-font-color)}.nys-label__required{display:contents;font-weight:var(--_nys-label-font-weight);color:var(--_nys-required-font-color)}.nys-label__optional{display:contents;font-weight:var(--_nys-optional-font-weight);color:var(--_nys-optional-font-color)}.nys-label__tooltip-wrapper{display:flex;gap:2px;align-items:center}.nys-label.invert .nys-label__label,.nys-label.invert .nys-label__description,.nys-label.invert .nys-label__optional{color:var(--nys-color-text-reverse, #ffffff)}.nys-label.invert .nys-label__tooltip-icon{color:var(--nys-color-ink-reverse, #ffffff)}';
var Ll = Object.defineProperty, Ft = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Ll(e, t, o), o;
};
let Al = 0;
const js = class js extends m {
  constructor() {
    super(...arguments), this.id = "", this.label = "", this.description = "", this.flag = "", this.inverted = !1, this.tooltip = "";
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-label-${Date.now()}-${Al++}`);
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  /**
   * While most components don't need to listen for this event.
   * Special components like "nys-fileinput" and "nys-toggle" need to listen for label to execute their specific functionalities.
   */
  _dispatchLabelClick() {
    this.dispatchEvent(
      new CustomEvent("nys-label-click", { bubbles: !0, composed: !0 })
    );
  }
  render() {
    return h`
      <div class="nys-label ${this.inverted ? "invert" : ""}">
        <div class="nys-label__tooltip-wrapper">
          <label class="nys-label__label" @click=${this._dispatchLabelClick}
            >${this.label}
            ${this.flag === "required" ? h`<div class="nys-label__required" aria-hidden="true">
                  *
                </div>` : ""}
            ${this.flag === "optional" ? h`<div class="nys-label__optional">(Optional)</div>` : ""}</label
          >
          ${this.tooltip ? h`<nys-tooltip
                  text="${this.tooltip}"
                  position="top"
                  focusable
                  ?inverted=${this.inverted}
                  for="tooltip-icon-${this.id}"
                >
                </nys-tooltip>
                <nys-icon
                  id="tooltip-icon-${this.id}"
                  name="info"
                  size="3xl"
                ></nys-icon> ` : ""}
        </div>
        <p class="nys-label__description" @click=${this._dispatchLabelClick}>
          <slot name="description">${this.description}</slot>
        </p>
      </div>
    `;
  }
};
js.styles = w(Dl);
let Ze = js;
Ft([
  a({ type: String, reflect: !0 })
], Ze.prototype, "id");
Ft([
  a({ type: String })
], Ze.prototype, "label");
Ft([
  a({ type: String })
], Ze.prototype, "description");
Ft([
  a({ type: String })
], Ze.prototype, "flag");
Ft([
  a({ type: Boolean, reflect: !0 })
], Ze.prototype, "inverted");
Ft([
  a({ type: String })
], Ze.prototype, "tooltip");
customElements.get("nys-label") || customElements.define("nys-label", Ze);
const Tl = ':host{--_nys-modal-width: 439px;--_nys-modal-min-width: 320px;--_nys-modal-border-radius: var(--nys-radius-lg, 8px);--_nys-modal-border-color: var(--nys-color-neutral-200, #bec0c1);--_nys-modal-border-width: 1px;--_nys-modal-background-color: var(--nys-color-surface, #ffffff);--_nys-modal-margin: var(--nys-space-250, 20px);--_nys-modal-padding: var(--nys-space-300, 24px);--_nys-modal-gap: var(--nys-space-200, 16px);--_nys-modal-background-color--overlay: var( --nys-color-black-transparent-700, rgba(27, 27, 27, .7) );--_nys-modal-gap--header: var(--nys-space-100, 8px);--_nys-modal-gap--footer: var(--nys-space-250, 20px);--_nys-modal-font-size: var( --nys-font-size-body-md, var(--nys-font-size-md, 16px) );--_nys-modal-font-size--subheader: var( --nys-font-size-body-lg, var(--nys-font-size-lg, 18px) );--_nys-modal-font-weight--header: var(--nys-font-weight-bold, 700);--_nys-modal-font-weight--subheader: var(--nys-font-weight-semibold, 600);--_nys-modal-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-modal-line-height--subheader: var(--nys-font-lineheight-body-lg, 28px);--_nys-modal-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) )}*{box-sizing:border-box}::slotted(p){margin:0!important}h2,p{flex:1;margin:0}.nys-modal-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;z-index:1000;background:var(--_nys-modal-background-color--overlay)}.nys-modal{display:flex;flex-direction:column;margin:var(--_nys-modal-margin);padding:var(--_nys-modal-padding);gap:var(--_nys-modal-gap);width:var(--_nys-modal-width);border-radius:var(--_nys-modal-border-radius);border:var(--_nys-modal-border-width) solid var(--_nys-modal-border-color);font-family:var(--_nys-modal-font-family);font-size:var(--_nys-modal-font-size);line-height:var(--_nys-modal-line-height);background:var(--_nys-modal-background-color);position:relative;z-index:10000}.nys-modal_header{display:flex;flex-direction:column;align-items:flex-start;gap:var(--_nys-modal-gap--header)}.nys-modal_header p{font-size:var(--_nys-modal-font-size--subheader);font-weight:var(--_nys-modal-font-weight--subheader);line-height:var(--_nys-modal-line-height--subheader)}.nys-modal_header-inner{display:flex;align-items:center;width:100%;font-weight:var(--_nys-modal-font-weight--header)}.nys-modal_body{display:flex;flex-direction:column;align-items:flex-start}.nys-modal_body-inner{overflow:auto;width:100%;max-height:45vh}.nys-modal_body.hidden{display:none}.nys-modal_footer ::slotted(*){display:flex;flex-direction:column-reverse;justify-content:center;gap:var(--_nys-modal-gap--footer);align-self:stretch}.nys-modal_footer.hidden ::slotted(*){display:none}@media(min-width:480px){.nys-modal_body-inner{max-height:25vh}.nys-modal_footer ::slotted(*){flex-direction:row;justify-content:flex-end;align-items:center}.nys-modal{--_nys-modal-width: 439px}}@media(min-width:768px){.nys-modal{--_nys-modal-width: 600px}}@media(min-width:1024px){.nys-modal{--_nys-modal-width: 752px}}@media(min-width:1280px){.nys-modal{--_nys-modal-width: 840px}}';
var Il = Object.defineProperty, ht = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Il(e, t, o), o;
};
let Ml = 0;
const Ws = class Ws extends m {
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.heading = "", this.subheading = "", this.open = !1, this.mandatory = !1, this.width = "md", this._actionButtonSlot = null, this._prevFocusedElement = null, this._originalBodyOverflow = null, this._mobileMedia = window.matchMedia("(max-width: 480px)"), this.hasBodySlots = !1, this.hasActionSlots = !1, this._handleBodySlotChange = async () => {
      const e = this.shadowRoot?.querySelector("slot");
      e && (this.hasBodySlots = e.assignedNodes({ flatten: !0 }).some(
        (t) => t.nodeType === Node.ELEMENT_NODE || t.textContent?.trim()
      ));
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-modal-${Date.now()}-${Ml++}`), this._mobileMedia.addEventListener(
      "change",
      this._updateSlottedButtonWidth
    ), window.addEventListener("keydown", (e) => this._handleKeydown(e));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._restoreBodyScroll(), this._mobileMedia.removeEventListener(
      "change",
      this._updateSlottedButtonWidth
    ), window.removeEventListener("keydown", (e) => this._handleKeydown(e));
  }
  async updated(e) {
    e.has("open") && (this.open ? (this._hideBodyScroll(), this._dispatchOpenEvent(), await this.updateComplete, this._savePrevFocused(), this._focusOnModal(), this._updateDismissAria()) : (this._restorePrevFocused(), this._restoreBodyScroll(), this._dispatchCloseEvent(), this._updateDismissAria()));
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _hideBodyScroll() {
    this._originalBodyOverflow === null && (this._originalBodyOverflow = document.body.style.overflow), document.body.style.overflow = "hidden";
  }
  _restoreBodyScroll() {
    this._originalBodyOverflow !== null && (document.body.style.overflow = this._originalBodyOverflow, this._originalBodyOverflow = null);
  }
  _savePrevFocused() {
    this._prevFocusedElement = document.activeElement;
  }
  _focusOnModal() {
    this.shadowRoot?.querySelector(".nys-modal")?.focus();
  }
  async _restorePrevFocused() {
    this._prevFocusedElement?.focus(), this._prevFocusedElement = null;
  }
  // Determines whether we hide the action buttons slot container based on if user put in action buttons
  async _handleActionSlotChange() {
    const e = this.shadowRoot?.querySelector(
      'slot[name="actions"]'
    );
    e && (this.hasActionSlots = e.assignedNodes({ flatten: !0 }).some(
      (t) => t.nodeType === Node.ELEMENT_NODE || t.textContent?.trim()
    ), this._actionButtonSlot = e, this._updateSlottedButtonWidth());
  }
  // Design has it that the slotted action buttons should be fullWidth and display:column direction for mobile view.
  // Therefore, we need to account for mobile size and screen resizes
  _updateSlottedButtonWidth() {
    if (!this._actionButtonSlot) return;
    const e = this._mobileMedia.matches;
    this._actionButtonSlot.assignedElements().forEach((t) => {
      t.querySelectorAll("nys-button").forEach((s) => {
        e ? s?.setAttribute("fullWidth", "") : s?.removeAttribute("fullWidth");
      });
    });
  }
  _dispatchOpenEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-open", {
        detail: { id: this.id },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _dispatchCloseEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-close", {
        detail: { id: this.id },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _getAriaDescribedBy() {
    const e = [];
    return this.subheading && e.push(`${this.id}-subheading`), this.hasBodySlots && e.push(`${this.id}-desc`), e.join(" ");
  }
  /**
   * This exist to prevent the VO for dismiss button from announcing itself between the heading & subheading/slot content.
   * We add the "Close this window" ariaLabel after the initial VO is done
   */
  _updateDismissAria() {
    const e = this.shadowRoot?.querySelector("nys-button");
    e && (e.setAttribute("ariaLabel", " "), this.open && setTimeout(() => {
      e.setAttribute("ariaLabel", "Close this window");
    }, 100));
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  async _handleKeydown(e) {
    if (this.open && (e.key === "Escape" && !this.mandatory && (e.preventDefault(), this._closeModal()), e.key === "Tab")) {
      const t = this.shadowRoot?.querySelector(".nys-modal");
      if (!t) return;
      const s = 'a[href], area[href], button:not([disabled]), details, iframe, object, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [contentEditable="true"], [tabindex]:not([tabindex^="-"])', o = [], r = t.querySelector("nys-button");
      r && o.push(r);
      const i = Array.from(t.querySelectorAll("slot"));
      for (const c of i) {
        const d = c.assignedElements({ flatten: !0 });
        for (const u of d)
          u instanceof HTMLElement && u.matches(s) && o.push(u), u.querySelectorAll("nys-button").forEach(
            (f) => {
              o.push(f);
            }
          );
      }
      if (o.length > 0) {
        const c = o[0], d = o[o.length - 1];
        let u = document.activeElement, f = o.indexOf(
          u
        );
        if (e.shiftKey) {
          e.preventDefault();
          let y = f - 1;
          y < 0 && (y = o.length - 1), o[y].focus();
        } else
          u === d && (e.preventDefault(), c.focus());
      }
    }
  }
  _closeModal() {
    this.open = !1, this._dispatchCloseEvent();
  }
  render() {
    return this.open ? h`<div
          class="nys-modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="${this.id}-heading"
          aria-describedby="${this._getAriaDescribedBy()}"
        >
          <div class="nys-modal" tabindex="-1">
            <div class="nys-modal_header">
              <div class="nys-modal_header-inner">
                <h2 id="${this.id}-heading">${this.heading}</h2>
                ${this.mandatory ? "" : h`<nys-button
                      id="dismiss-modal"
                      circle
                      icon="close"
                      variant="ghost"
                      @nys-click=${this._closeModal}
                    ></nys-button>`}
              </div>
              ${this.subheading ? h`<p id="${this.id}-subheading">${this.subheading}</p>` : ""}
            </div>

            <div
              id="${this.id}-desc"
              class="nys-modal_body ${this.hasBodySlots ? "" : "hidden"}"
            >
              <div class="nys-modal_body-inner">
                <slot @slotchange=${this._handleBodySlotChange}></slot>
              </div>
            </div>

            <div
              class="nys-modal_footer ${this.hasActionSlots ? "" : "hidden"}"
            >
              <slot
                name="actions"
                @slotchange=${this._handleActionSlotChange}
              ></slot>
            </div>
          </div>
        </div>` : "";
  }
};
Ws.styles = w(Tl);
let Me = Ws;
ht([
  a({ type: String, reflect: !0 })
], Me.prototype, "id");
ht([
  a({ type: String })
], Me.prototype, "heading");
ht([
  a({ type: String })
], Me.prototype, "subheading");
ht([
  a({ type: Boolean, reflect: !0 })
], Me.prototype, "open");
ht([
  a({ type: Boolean, reflect: !0 })
], Me.prototype, "mandatory");
ht([
  a({ type: String, reflect: !0 })
], Me.prototype, "width");
ht([
  $()
], Me.prototype, "hasBodySlots");
ht([
  $()
], Me.prototype, "hasActionSlots");
customElements.get("nys-modal") || customElements.define("nys-modal", Me);
const zl = ':host{--_nys-pagination-width: fit-content;--_nys-pagination-height: var(--nys-size-500, 40px);--_nys-pagination-radius: var(--nys-radius-xl, 12px);--_nys-pagination-gap: var(--nys-space-100, 8px);--_nys-pagination-font-size: var(--nys-font-size-ui-md, 16px);--_nys-pagination-font-weight: var(--nys-font-weight-semibold, 600);--_nys-pagination-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-pagination-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) )}.nys-pagination{width:var(--_nys-pagination-width);height:var(--_nys-pagination-height);border-radius:var(--_nys-pagination-radius);display:flex;align-items:center;justify-content:center;gap:var(--_nys-pagination-gap);font-family:var(--_nys-pagination-font-family);font-size:var(--_nys-pagination-font-size);font-weight:var(--_nys-pagination-font-weight);line-height:var(--_nys-pagination-line-height)}nys-button{--_nys-button-height: var(--_nys-pagination-height);--_nys-button-border-width: var(--nys-border-width-sm, 1px);--_nys-button-border-radius: var(--nys-radius-md, 4px);--_nys-button-padding--x: var(--nys-space-200, 16px)}nys-button[variant=outline]{--nys-button-background-color: var(--nys-color-ink-reverse, #ffffff);--nys-button-background-color--hover: var(--nys-color-neutral-10, #f6f6f6);--nys-button-background-color--active: var(--nys-color-neutral-50, #ededed);--nys-button-border-color: var(--nys-color-neutral-200, #bec0c1);--nys-button-border-color--hover: var(--nys-color-neutral-600, #62666a);--nys-button-border-color--active: var(--nys-color-neutral-900, #1b1b1b);--nys-button-color: var(--nys-color-link, #004dd1);--nys-button-color--hover: var(--nys-color-link-strong, #003ba1);--nys-button-color--active: var(--nys-color-link-strong, #003ba1)}nys-button[variant=filled]{--nys-button-background-color: var(--nys-color-link, #004dd1);--nys-button-background-color--hover: var(--nys-color-link-strong, #003ba1);--nys-button-background-color--active: var( --nys-color-link-strongest, #002971 );--nys-button-border-color: var(--nys-color-link, #004dd1);--nys-button-border-color--hover: var(--nys-color-link-strong, #003ba1);--nys-button-border-color--active: var(--nys-color-link-strongest, #002971);--nys-button-color: var(--nys-color-ink-reverse, #ffffff);--nys-button-color--hover: var(--nys-color-ink-reverse, #ffffff);--nys-button-color--active: var(--nys-color-ink-reverse, #ffffff)}nys-button#previous,nys-button#next,nys-button#previous--mobile,nys-button#next--mobile{--nys-button-color: var(--nys-color-text, #1b1b1b);--nys-button-color--hover: var(--nys-color-text, #1b1b1b);--nys-button-color--active: var(--nys-color-text, #1b1b1b);--_nys-button-padding--x: var(--nys-space-150, 12px)}nys-button#previous--mobile,nys-button#next--mobile{display:none}nys-button.spacer{--nys-button-border-color: transparent;--nys-button-border-color--hover: transparent;--nys-button-border-color--active: transparent;--nys-button-background-color: transparent;--nys-button-background-color--hover: transparent;--nys-button-background-color--active: transparent;--nys-button-color: var(--nys-color-text, #1b1b1b);--nys-button-color--hover: var(--nys-color-text, #1b1b1b);--nys-button-color--active: var(--nys-color-text, #1b1b1b);--_nys-button-padding--x: var(--nys-space-1px, 1px);--_nys-button-cursor: default}:host([currentPage="3"]) nys-button#first-spacer,:host([_twoBeforeLast]) nys-button#last-spacer{display:none}@media(min-width:0)and (max-width:767px){nys-button#prev-page,nys-button#next-page{display:none}:host([currentPage="3"]) nys-button#first-spacer,:host([_twoBeforeLast]) nys-button#last-spacer{display:block}nys-button#previous--mobile,nys-button#next--mobile{display:block}nys-button#previous,nys-button#next{display:none}}';
var Ol = Object.defineProperty, mo = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Ol(e, t, o), o;
};
let Rl = 0;
const Ys = class Ys extends m {
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.name = "", this.currentPage = 1, this.totalPages = 1, this._twoBeforeLast = !1;
  }
  willUpdate(e) {
    if (this.totalPages < 1 && (this.totalPages = 1), e.has("currentPage") || e.has("totalPages")) {
      const t = this._clampPage(this.currentPage);
      t !== this.currentPage && (this.currentPage = t);
      const s = this.currentPage === this.totalPages - 2;
      s !== this._twoBeforeLast && (this._twoBeforeLast = s);
    }
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-pagination-${Date.now()}-${Rl++}`);
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _clampPage(e) {
    return e < 1 ? 1 : e > this.totalPages ? this.totalPages : e;
  }
  renderPageButtons() {
    const e = [], t = (d, u) => {
      e.push(h`
        <nys-button
          label=${String(d)}
          ariaLabel="Page ${d}${d === this.currentPage ? " - Current Page" : ""}"
          id=${g(u)}
          variant=${this.currentPage === d ? "filled" : "outline"}
          size="sm"
          @nys-click="${() => this._handlePageClick(d)}"
        ></nys-button>
      `);
    }, s = (d) => {
      e.push(
        h`<nys-button
          label="..."
          class="spacer"
          tabindex="-1"
          id=${d}
          size="sm"
        ></nys-button>`
      );
    }, r = this.totalPages, i = this.currentPage - 1, c = this.currentPage + 1;
    return t(1), this.currentPage > 2 && s("first-spacer"), i > 1 && t(i, "prev-page"), this.currentPage !== 1 && this.currentPage !== r && t(this.currentPage, "current-page"), c < r && t(c, "next-page"), this.currentPage < r - 1 && s("last-spacer"), r > 1 && t(r), e;
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _handlePageClick(e) {
    this.currentPage = this._clampPage(e), this.dispatchEvent(
      new CustomEvent("nys-change", {
        detail: { page: this.currentPage },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return this.totalPages <= 1 ? null : h`<div class="nys-pagination">
      <nys-button
        id="previous"
        label="Previous"
        ariaLabel="Previous Page"
        prefixIcon="chevron_left"
        variant="outline"
        size="sm"
        ?disabled=${this.currentPage === 1}
        @nys-click="${() => this._handlePageClick(this.currentPage - 1)}"
      ></nys-button>
      <nys-button
        id="previous--mobile"
        prefixIcon="chevron_left"
        ariaLabel="Previous Page"
        variant="outline"
        size="sm"
        ?disabled=${this.currentPage === 1}
        @nys-click="${() => this._handlePageClick(this.currentPage - 1)}"
      ></nys-button>
      ${this.renderPageButtons()}
      <nys-button
        id="next"
        label="Next"
        ariaLabel="Next Page"
        suffixIcon="chevron_right"
        variant="outline"
        size="sm"
        ?disabled=${this.currentPage === this.totalPages}
        @nys-click="${() => this._handlePageClick(this.currentPage + 1)}"
      ></nys-button>
      <nys-button
        id="next--mobile"
        suffixIcon="chevron_right"
        ariaLabel="Next Page"
        variant="outline"
        size="sm"
        ?disabled=${this.currentPage === this.totalPages}
        @nys-click="${() => this._handlePageClick(this.currentPage + 1)}"
      ></nys-button>
    </div>`;
  }
  /****************** 🪡 in the Haystack Release ******/
  /****************** designsystem@its.ny.gov ********/
};
Ys.styles = w(zl);
let at = Ys;
mo([
  a({ type: String, reflect: !0 })
], at.prototype, "id");
mo([
  a({ type: String, reflect: !0 })
], at.prototype, "name");
mo([
  a({ type: Number, reflect: !0 })
], at.prototype, "currentPage");
mo([
  a({ type: Number, reflect: !0 })
], at.prototype, "totalPages");
mo([
  a({ type: Boolean, reflect: !0 })
], at.prototype, "_twoBeforeLast");
customElements.get("nys-pagination") || customElements.define("nys-pagination", at);
const zr = `:host{--_nys-radiobutton-size: var(--nys-size-400, 32px);--_nys-radiobutton-border-radius: var(--nys-radius-md, 4px);--_nys-radiobutton-border-width: var(--nys-border-width-md, 2px);--_nys-radiobutton-outline-color: var(--nys-color-focus, #004dd1);--_nys-radiobutton-outline-width: var(--nys-border-width-md, 2px);--_nys-radiobutton-outline-offset: var(--nys-space-2px, 2px);--_nys-radiobutton-gap: var(--nys-space-150, 12px);--_nys-radiogroup-gap: var(--nys-space-200, 16px);--_nys-radiobutton-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-radiobutton-font-size: var(--nys-font-size-ui-md, 16px);--_nys-radiobutton-font-weight--label: var(--nys-font-weight-regular, 400);--_nys-radiobutton-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-radiobutton-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-radiobutton-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-radiobutton-border-color: var(--nys-color-neutral-600, #62666a);--_nys-radiobutton-background-color--hover: var( --nys-color-neutral-50, #ededed );--_nys-radiobutton-border-color--hover: var(--nys-color-ink, #1b1b1b);--_nys-radiobutton-background-color--active: var( --nys-color-neutral-100, #d0d0ce );--_nys-radiobutton-border-color--active: var(--nys-color-ink, #1b1b1b);--_nys-radiobutton-background-color--checked: var(--nys-color-theme, #154973);--_nys-radiobutton-background-color--disabled: var( --nys-color-ink-reverse, #f0f0f0 );--_nys-radiobutton-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-radiobutton-border-color--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-radiobutton-background-color--checked--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-radiobutton-border-color--checked--disabled: var( --nys-color-neutral-100, #d0d0ce )}:host([size=sm]){--_nys-radiobutton-size: var(--nys-size-300, 24px);--_nys-radiobutton-border-radius: var(--nys-radius-sm, 2px);--_nys-radiogroup-gap: var(--nys-space-100, 8px);--_nys-radiobutton-gap: var(--nys-space-100, 8px)}:host([size=md]){--_nys-radiobutton-size: var(--nys-size-400, 32px);--_nys-radiobutton-border-radius: var(--nys-radius-md, 4px);--_nys-radiogroup-gap: var(--nys-space-200, 16px);--_nys-radiobutton-gap: var(--nys-space-150, 12px)}:host([tile]){--_nys-radiobutton-font-weight--label: var(--nys-font-weight-semibold, 600);--_nys-radiobutton-border-width--tile: var(--nys-border-width-sm, 1px);--_nys-radiobutton-border-radius--tile: var(--nys-radius-md, 4px);--_nys-radiobutton-border-color--tile: var(--nys-color-neutral-100, #d0d0ce);--_nys-radiobutton-background-color--tile: var( --nys-color-ink-reverse, #ffffff );--_nys-radiobutton-padding--x--tile: var(--nys-space-250, 20px);--_nys-radiobutton-padding--y--tile: var(--nys-space-200, 16px);--_nys-radiobutton-border-color--tile--hover: var( --nys-color-neutral-700, #4a4d4f );--_nys-radiobutton-background-color--tile--hover: var( --nys-color-ink-reverse, #ffffff );--_nys-radiobutton-border-color--tile--active: var( --nys-color-neutral-900, #1b1b1b );--_nys-radiobutton-background-color--tile--active: var( --nys-color-ink-reverse, #ffffff );--_nys-radiobutton-border-color--tile--checked: var( --nys-color-theme-mid, #457aa5 );--_nys-radiobutton-background-color--tile--checked: var( --nys-color-theme-faint, #f7fafd );--_nys-radiobutton-border-color--tile--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-radiobutton-background-color--tile--disabled: var( --nys-color-ink-reverse, #ffffff )}:host([tile][size=sm]){--_nys-radiobutton-padding--x--tile: var(--nys-space-200, 16px);--_nys-radiobutton-padding--y--tile: var(--nys-space-150, 12px)}:host([tile][showError]){--_nys-radiobutton-border-color--tile: var(--nys-color-danger, #b52c2c);--_nys-radiobutton-border-color--tile--hover: var( --nys-color-danger, #b52c2c );--_nys-radiobutton-border-color--tile--active: var( --nys-color-danger, #b52c2c );--_nys-radiobutton-border-color--tile--checked: var( --nys-color-danger, #b52c2c )}.nys-radiogroup{display:flex;flex-direction:column;gap:var(--nys-space-200, 16px);font-family:var(--_nys-radiobutton-font-family);font-size:var(--_nys-radiobutton-font-size);line-height:var(--_nys-radiobutton-line-height)}.nys-radiogroup legend{margin-bottom:var(--nys-space-200, 16px)}.nys-radiogroup__content{gap:var(--_nys-radiogroup-gap);display:flex;flex-direction:column}.nys-radiobutton{display:flex;flex-direction:column;font-family:var(--_nys-radiobutton-font-family);font-size:var(--_nys-radiobutton-font-size);line-height:var(--_nys-radiobutton-line-height);border-radius:var(--_nys-radiobutton-border-radius--tile);border:var(--_nys-radiobutton-border-width--tile) solid var(--_nys-radiobutton-border-color--tile);background-color:var(--_nys-radiobutton-background-color--tile);padding:var(--_nys-radiobutton-padding--y--tile) var(--_nys-radiobutton-padding--x--tile)}.nys-radiobutton__radio{appearance:none;width:var(--_nys-radiobutton-size);height:var(--_nys-radiobutton-size);min-width:var(--_nys-radiobutton-size);min-height:var(--_nys-radiobutton-size);max-width:var(--_nys-radiobutton-size);max-height:var(--_nys-radiobutton-size);border:solid var(--_nys-radiobutton-border-width) var(--_nys-radiobutton-border-color);background-color:var(--_nys-radiobutton-background-color);border-radius:100%;background-repeat:no-repeat;background-position:center;background-size:contain;outline-offset:var(--_nys-radiobutton-outline-offset);outline:none;margin:0 0 auto;box-sizing:border-box}.nys-radiobutton:hover,.nys-radiobutton:hover *{cursor:pointer}.nys-radiobutton__radio:not(:disabled):checked{background-image:url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" stroke="white" stroke-width="6"/></svg>');background-color:var(--_nys-radiobutton-background-color--checked)}:host([tile]) .nys-radiobutton:has(.nys-radiobutton__radio:not(:disabled):checked){border-color:var(--_nys-radiobutton-border-color--tile--checked);background-color:var(--_nys-radiobutton-background-color--tile--checked)}:host([tile]) .nys-radiobutton:has(.nys-radiobutton__radio:not(:disabled):checked:hover){cursor:default}.nys-radiobutton__radio:disabled:checked{background-image:url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" stroke="white" stroke-width="6"/></svg>');border-color:var(--_nys-radiobutton-border-color--checked--disabled);background-color:var(--_nys-radiobutton-background-color--checked--disabled)}:host([tile]) .nys-radiobutton:has(.nys-radiobutton__radio:disabled){border-color:var(--_nys-radiobutton-border-color--tile--disabled);background-color:var(--_nys-radiobutton-background-color--tile--disabled)}.nys-radiobutton__radio:disabled{background-color:var(--_nys-radiobutton-background-color--disabled);border-color:var(--_nys-radiobutton-border-color--disabled);cursor:not-allowed}.nys-radiobutton__radio:hover:not(:disabled):not(:checked),.nys-radiobutton:hover .nys-radiobutton__radio:not(:disabled):not(:checked){border-color:var(--_nys-radiobutton-border-color--hover);background-color:var(--_nys-radiobutton-background-color--hover)}:host([tile]) .nys-radiobutton:hover:has(.nys-radiobutton__radio:not(:disabled):not(:checked)){border-color:var(--_nys-radiobutton-border-color--tile--hover);background-color:var(--_nys-radiobutton-background-color--tile--hover);outline:solid var(--_nys-radiobutton-border-width--tile) var(--_nys-radiobutton-border-color--tile--hover)}.nys-radiobutton__radio:active:not(:disabled):not(:checked),.nys-radiobutton:active .nys-radiobutton__radio:not(:disabled):not(:checked){border-color:var(--_nys-radiobutton-border-color--active);background-color:var(--_nys-radiobutton-background-color--active)}:host([tile]) .nys-radiobutton:active:has(.nys-radiobutton__radio:not(:disabled):not(:checked)){border-color:var(--_nys-radiobutton-border-color--tile--active);background-color:var(--_nys-radiobutton-background-color--tile--active);outline:solid var(--_nys-radiobutton-border-width--tile) var(--_nys-radiobutton-border-color--tile--active)}:host(:focus-visible){outline:none}:host(:focus-visible) .nys-radiobutton__radio{outline:solid var(--_nys-radiobutton-outline-width) var(--_nys-radiobutton-outline-color)}.nys-radiobutton__radio:focus-visible{outline:solid var(--_nys-radiobutton-outline-width) var(--_nys-radiobutton-outline-color);outline-offset:var(--_nys-radiobutton-outline-offset)}.nys-radiobutton__main-container{display:flex;align-items:center}.nys-radiobutton__other-container{display:flex;padding-inline-start:calc(var(--_nys-radiobutton-size) + var(--_nys-radiobutton-gap))}.nys-radiobutton__main-container>nys-label{--_nys-label-font-weight: var(--_nys-radiobutton-font-weight--label);display:flex;padding-inline-start:var(--_nys-radiobutton-gap)}:host([tile]) .nys-radiobutton__main-container>nys-label{--_nys-description-font-style: normal}.nys-radiobutton:has(.nys-radiobutton__radio:disabled) .nys-radiobutton__main-container>nys-label,.nys-radiobutton:has(.nys-radiobutton__radio:disabled) .nys-radiobutton__main-container>nys-label *{cursor:not-allowed;--_nys-label-cursor: not-allowed;--_nys-label-color: var(--_nys-radiobutton-color--disabled);--_nys-description-color: var(--_nys-radiobutton-color--disabled);color:var(--_nys-radiobutton-color--disabled)}fieldset{all:unset;display:contents}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}`;
var Pl = Object.defineProperty, we = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Pl(e, t, o), o;
};
let Bl = 0;
const Gs = class Gs extends m {
  constructor() {
    super(...arguments), this.checked = !1, this.disabled = !1, this.required = !1, this.label = "", this.description = "", this.id = "", this.name = "", this.value = "", this.form = null, this.size = "md", this.tile = !1, this.other = !1, this.showOtherError = !1;
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-radiobutton-${Date.now()}-${Bl++}`);
  }
  render() {
    return h``;
  }
};
Gs.styles = w(zr);
let ce = Gs;
we([
  a({ type: Boolean, reflect: !0 })
], ce.prototype, "checked");
we([
  a({ type: Boolean, reflect: !0 })
], ce.prototype, "disabled");
we([
  a({ type: Boolean, reflect: !0 })
], ce.prototype, "required");
we([
  a({ type: String })
], ce.prototype, "label");
we([
  a({ type: String })
], ce.prototype, "description");
we([
  a({ type: String, reflect: !0 })
], ce.prototype, "id");
we([
  a({ type: String, reflect: !0 })
], ce.prototype, "name");
we([
  a({ type: String })
], ce.prototype, "value");
we([
  a({ type: String, reflect: !0 })
], ce.prototype, "form");
we([
  a({ type: String, reflect: !0 })
], ce.prototype, "size");
we([
  a({ type: Boolean, reflect: !0 })
], ce.prototype, "tile");
we([
  a({ type: Boolean, reflect: !0 })
], ce.prototype, "other");
we([
  a({ type: Boolean })
], ce.prototype, "showOtherError");
customElements.get("nys-radiobutton") || customElements.define("nys-radiobutton", ce);
var Nl = Object.defineProperty, oe = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Nl(e, t, o), o;
};
let ql = 0;
const ao = class ao extends m {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.required = !1, this.optional = !1, this.showError = !1, this.errorMessage = "", this.label = "", this.description = "", this.tile = !1, this.tooltip = "", this.form = null, this.size = "md", this._showOtherError = !1, this.selectedValue = null, this._slottedDescriptionText = "", this._radios = [], this.isMobile = !1, this._hasUserInteracted = !1, this._handleMobileQuery = () => {
      this.isMobile = this._mobileQuery.matches;
    }, this._handleRadiobtnClick = (e) => {
      e.disabled || this.shadowRoot?.querySelector(`#input-${e.id}`)?.click();
    }, this._internals = this.attachInternals();
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-radiogroup-${Date.now()}-${ql++}`), this._mobileQuery = window.matchMedia("(max-width: 479px)"), this.isMobile = this._mobileQuery.matches, this._mobileQuery.addEventListener("change", this._handleMobileQuery), this.addEventListener("invalid", this._handleInvalid), this._childObserver = new MutationObserver(() => {
      this._radios = this._getAllRadios(), this.requestUpdate();
    }), this._childObserver.observe(this, { childList: !0 });
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid), this._mobileQuery.removeEventListener("change", this._handleMobileQuery), this._childObserver?.disconnect();
  }
  async firstUpdated() {
    await this.updateComplete, this._radios = this._getAllRadios(), this._initializeCheckedRadioValue(), this._setValue(), this._setRadioButtonRequire(), this._updateRadioButtonsSize(), this._getSlotDescriptionForAria(), this._initializeChildAttributes(), this._updateGroupTabIndex();
  }
  updated(e) {
    (e.has("required") || e.has("selectedValue")) && (this.showError || this._manageRequire()), e.has("size") && this._updateRadioButtonsSize(), this._updateGroupTabIndex();
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    this._internals.setFormValue(this.selectedValue);
  }
  _setRadioButtonRequire() {
    this.querySelectorAll("nys-radiobutton").forEach((t, s) => {
      this.required && s === 0 && t.setAttribute("required", "required");
    });
  }
  async _manageRequire() {
    const e = this.errorMessage || "Please select an option.", s = Array.from(this.querySelectorAll("nys-radiobutton"))[0];
    if (s) {
      const o = this.shadowRoot?.querySelector(
        `#input-${s.id}`
      );
      this.required && !this.selectedValue ? this._internals.setValidity(
        { valueMissing: !0 },
        e,
        o ?? s
        // pass the custom element, not shadow input
      ) : (this.showError = !1, this._internals.setValidity({}, "", s));
    }
  }
  checkValidity() {
    const e = Array.from(this.querySelectorAll("nys-radiobutton"));
    return !this.required || e.some((s) => s.checked);
  }
  // Need to account for if radiogroup already have a radiobutton checked at initialization
  _initializeCheckedRadioValue() {
    const e = this.querySelector("nys-radiobutton[checked]");
    e && (this.selectedValue = e.getAttribute("value"), this._internals.setFormValue(this.selectedValue));
  }
  // Core Keyboard & Click Logic
  _getAllRadios() {
    return Array.from(
      this.querySelectorAll("nys-radiobutton")
    );
  }
  // Arrow / Space / Enter navigation at group level
  async _handleKeyDown(e) {
    if (![
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      " ",
      "Enter"
    ].includes(e.key) || (e.key === "ArrowLeft" || e.key === "ArrowRight") && e.composedPath().some((f) => f.tagName === "NYS-TEXTINPUT"))
      return;
    e.preventDefault();
    const s = this._getAllRadios().filter((u) => !u.disabled), o = e.target, r = s.find(
      (u) => this.shadowRoot?.querySelector(`#input-${u.id}`) === o
    ) || s.find((u) => u.checked) || s[0];
    let i = 0;
    ["ArrowUp", "ArrowLeft"].includes(e.key) ? i = -1 : ["ArrowDown", "ArrowRight"].includes(e.key) && (i = 1);
    let c = s.indexOf(r) + i;
    c < 0 && (c = s.length - 1), c >= s.length && (c = 0);
    const d = s[c];
    this._selectRadio(d), await this.updateComplete, this._updateGroupTabIndex(), this.shadowRoot?.querySelector(`#input-${d.id}`)?.focus();
  }
  _updateGroupTabIndex() {
    const e = this._getAllRadios(), t = e.find((s) => s.checked && !s.disabled) || e.find((s) => !s.disabled);
    e.forEach((s) => {
      const o = this.shadowRoot?.querySelector(
        `#input-${s.id}`
      );
      o && (o.tabIndex = s === t ? 0 : -1);
    });
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.querySelectorAll("nys-radiobutton").forEach((t) => {
      t.checked = !1;
    }), this.selectedValue = null, this._internals.setFormValue(null), this.showError = !1, this.errorMessage = "", this._internals.setValidity({}), this._hasUserInteracted = !1, this.requestUpdate();
  }
  _handleSlotChange() {
    this._radios = Array.from(this.querySelectorAll("nys-radiobutton")), this.requestUpdate();
  }
  // Apply ARIA & initial tabindex to each child radio
  _initializeChildAttributes() {
    this._getAllRadios().forEach((t) => {
      t.getAttribute("tabindex") !== "-1" && t.setAttribute("tabindex", "-1");
    });
  }
  _updateRadioButtonsSize() {
    this.querySelectorAll("nys-radiobutton").forEach((t) => {
      t.getAttribute("size") !== this.size && t.setAttribute("size", this.size);
    });
  }
  _selectRadio(e) {
    if (e.checked || e.disabled) return;
    this._getAllRadios().forEach((s) => {
      s.checked = !1;
    }), e.checked = !0, this._showOtherError = !1, this._hasUserInteracted = !1, this.name = e.name, this.selectedValue = e.value, this._internals.setFormValue(this.selectedValue), this._internals.setValidity({}), this.showError = !1, this._updateGroupTabIndex(), this.requestUpdate(), this.dispatchEvent(
      new CustomEvent("nys-change", {
        detail: {
          id: e.id,
          checked: e.checked,
          name: e.name,
          value: e.value
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Get the slotted text contents so native VO can attempt to announce it within the legend in the fieldset
  _getSlotDescriptionForAria() {
    const t = this.shadowRoot?.querySelector(
      'slot[name="description"]'
    )?.assignedNodes({ flatten: !0 }) || [];
    this._slottedDescriptionText = t.map((s) => s.textContent?.trim()).filter(Boolean).join(", ");
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  async _handleInvalid(e) {
    e.preventDefault();
    const s = this._getAllRadios().find((r) => r.other && r.checked);
    if (s && s.value.trim() === "") {
      this.showError = !0, this._hasUserInteracted = !0, this._validateOtherAndEmitError(s), await this.updateComplete;
      const r = this.shadowRoot?.querySelector("nys-textinput");
      if (r) {
        await r.updateComplete, r.focus();
        return;
      }
    }
    this.showError = !0, await this._manageRequire();
    const o = this._getAllRadios().find(
      (r) => !r.disabled
    );
    if (o) {
      const r = () => {
        this.shadowRoot?.querySelector(`#input-${o.id}`)?.focus();
      }, i = this._internals.form;
      i ? Array.from(i.elements).find(
        (u) => typeof u.checkValidity == "function" && !u.checkValidity()
      ) === this && r() : r();
    }
  }
  _handleTextInput(e, t) {
    const s = t.target;
    e.value = s.value, this.selectedValue = s.value, this._internals.setFormValue(s.value), this._hasUserInteracted && this._validateOtherAndEmitError(e), this.dispatchEvent(
      new CustomEvent("nys-other-input", {
        detail: { id: e.id, name: e.name, value: e.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleTextInputBlur(e) {
    this._hasUserInteracted = !0, this._validateOtherAndEmitError(e);
  }
  _validateOtherAndEmitError(e) {
    if (!e.other) return;
    if (!e.checked || !this._hasUserInteracted) {
      this._showOtherError = !1;
      return;
    }
    const t = e.value.trim() === "";
    this._showOtherError = t;
    const s = this.shadowRoot?.querySelector(
      `#input-${e.id}`
    );
    t ? (this._internals.setValidity(
      {
        customError: !0
      },
      "Please enter a value for this option.",
      s ?? e
    ), this.showError = !0) : (this._internals.setValidity({}), this.showError = !1);
  }
  _handleOtherKeydown(e) {
    (e.key == "Space" || e.key === " ") && e.stopPropagation();
  }
  _handleGroupFocusout(e) {
    const t = e.relatedTarget;
    if (t && this.shadowRoot?.contains(t)) return;
    const s = this._getAllRadios().find(
      (o) => o.other && o.checked
    );
    s && s.value.trim() === "" && (this._hasUserInteracted = !0, this._validateOtherAndEmitError(s));
  }
  _handleRadiobtnFocus(e) {
    e.dispatchEvent(
      new CustomEvent("nys-focus", { bubbles: !0, composed: !0 })
    );
  }
  _handleRadiobtnBlur(e) {
    e.dispatchEvent(
      new CustomEvent("nys-blur", { bubbles: !0, composed: !0 })
    );
  }
  render() {
    return h` <slot
        style="display:none"
        @slotchange=${this._handleSlotChange}
      ></slot>
      <fieldset
        aria-label="${this.label}${this._slottedDescriptionText ? ` ${this._slottedDescriptionText}` : this.description ? ` ${this.description}` : ""}"
        role="radiogroup"
        aria-required=${this.required ? "true" : "false"}
        class="nys-radiogroup"
        @focusout=${this._handleGroupFocusout}
      >
        <legend>
          <nys-label
            label=${this.label}
            description=${this.description}
            flag=${this.required ? "required" : this.optional ? "optional" : ""}
            tooltip=${this.tooltip}
          >
            <slot name="description" slot="description"
              >${this.description}</slot
            >
          </nys-label>
        </legend>
        <div class="nys-radiogroup__content" @keydown=${this._handleKeyDown}>
          ${this._radios.map(
      (e, t) => h`
              <div
                class="nys-radiobutton"
                @click=${() => this._handleRadiobtnClick(e)}
              >
                <div class="nys-radiobutton__main-container">
                  <!-- <span class="nys-radiobutton__radio" tabindex="-1"></span> -->
                  <input
                    id="input-${e.id}"
                    type="radio"
                    class="nys-radiobutton__radio"
                    name="${g(e.name || void 0)}"
                    .checked=${e.checked}
                    ?disabled=${e.disabled}
                    .value=${e.value}
                    ?required=${this.required && t === 0}
                    form=${g(e.form || void 0)}
                    aria-label="${e.label || (e.other ? "Other" : "")}"
                    @change=${() => this._selectRadio(e)}
                    @focus=${() => this._handleRadiobtnFocus(e)}
                    @blur=${() => this._handleRadiobtnBlur(e)}
                  />
                  ${(e.label || e.other) && h`<nys-label
                    aria-hidden="true"
                    id="${e.id}-label"
                    label="${e.label || (e.other ? "Other" : "")}"
                    description=${g(e.description || void 0)}
                  >
                    <slot name="description" slot="description"
                      >${e.description}</slot
                    >
                  </nys-label> `}
                </div>
                <div class="nys-radiobutton__other-container">
                  ${e.other && e.checked ? h`
                        <nys-textinput
                          .value=${e.value}
                          id=${"radiobutton-other-" + e.id}
                          @nys-input=${(s) => this._handleTextInput(e, s)}
                          @nys-blur=${() => this._handleTextInputBlur(e)}
                          @keydown=${this._handleOtherKeydown}
                          @nys-focus=${() => e.classList.remove("focused")}
                          ariaLabel="Other"
                          aria-invalid=${e.showOtherError ? "true" : "false"}
                          width=${this.isMobile ? "full" : "md"}
                          ?disabled=${e.disabled}
                        ></nys-textinput>
                      ` : ""}
                </div>
              </div>
            `
    )}
        </div>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this._internals.validationMessage || this.errorMessage}
          .showDivider=${!this.tile}
        ></nys-errormessage>
      </fieldset>`;
  }
};
ao.styles = w(zr), ao.shadowRootOptions = {
  ...m.shadowRootOptions,
  delegatesFocus: !0
}, ao.formAssociated = !0;
let W = ao;
oe([
  a({ type: String, reflect: !0 })
], W.prototype, "id");
oe([
  a({ type: String, reflect: !0 })
], W.prototype, "name");
oe([
  a({ type: Boolean, reflect: !0 })
], W.prototype, "required");
oe([
  a({ type: Boolean, reflect: !0 })
], W.prototype, "optional");
oe([
  a({ type: Boolean, reflect: !0 })
], W.prototype, "showError");
oe([
  a({ type: String })
], W.prototype, "errorMessage");
oe([
  a({ type: String })
], W.prototype, "label");
oe([
  a({ type: String })
], W.prototype, "description");
oe([
  a({ type: Boolean, reflect: !0 })
], W.prototype, "tile");
oe([
  a({ type: String })
], W.prototype, "tooltip");
oe([
  a({ type: String, reflect: !0 })
], W.prototype, "form");
oe([
  a({ type: String, reflect: !0 })
], W.prototype, "size");
oe([
  a({ type: Boolean })
], W.prototype, "_showOtherError");
oe([
  $()
], W.prototype, "selectedValue");
oe([
  $()
], W.prototype, "_slottedDescriptionText");
oe([
  $()
], W.prototype, "_radios");
oe([
  $()
], W.prototype, "isMobile");
customElements.get("nys-radiogroup") || customElements.define("nys-radiogroup", W);
var Fl = Object.defineProperty, xo = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Fl(e, t, o), o;
};
class lt extends m {
  constructor() {
    super(...arguments), this.disabled = !1, this.selected = !1, this.value = "", this.label = "", this.hidden = !1;
  }
  firstUpdated() {
    const e = this.shadowRoot?.querySelector("slot");
    e && e.addEventListener("slotchange", () => {
      const t = e.assignedNodes({ flatten: !0 });
      t.length > 0 && (this.label = t[0].textContent?.trim() || "");
    });
  }
  render() {
    return h`
      <option
        ?disabled=${this.disabled}
        ?selected=${this.selected}
        value=${this.value}
        label=${this.label}
        ?hidden=${this.hidden}
      >
        <slot>${this.label}</slot>
      </option>
    `;
  }
}
xo([
  a({ type: Boolean, reflect: !0 })
], lt.prototype, "disabled");
xo([
  a({ type: Boolean, reflect: !0 })
], lt.prototype, "selected");
xo([
  a({ type: String })
], lt.prototype, "value");
xo([
  a({ type: String })
], lt.prototype, "label");
xo([
  a({ type: Boolean, reflect: !0 })
], lt.prototype, "hidden");
customElements.define("nys-option", lt);
const Vl = ':host{--_nys-select-width: 100%;--_nys-select-height: var(--nys-size-500, 40px);--_nys-select-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-select-font-size: var(--nys-font-size-ui-md, 16px);--_nys-select-font-weight: var(--nys-font-weight-regular, 400);--_nys-select-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-select-gap: var(--nys-space-50, 4px);--_nys-select-border-radius: var(--nys-radius-md, 4px);--_nys-select-padding: var(--nys-space-100, 8px) var(--nys-space-400, 32px) var(--nys-space-100, 8px) var(--nys-space-100, 8px);--_nys-select-color: var(--nys-color-text, #1b1b1b);--_nys-select-color--error: var( --nys-color-danger, var(--nys-color-red-600, #b52c2c) );--_nys-select-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-select-background-color--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-select-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-select-border-width: var(--nys-border-width-sm, 1px);--_nys-select-border-color: var(--nys-color-neutral-400, #909395);--_nys-select-border-color--hover: var(--nys-color-neutral-900, #1b1b1b);--_nys-select-border-color--focus: var(--nys-color-focus, #004dd1);--_nys-select-border-color--disabled: var(--nys-color-neutral-200, #bec0c1);--_nys-select-border-default: var(--nys-border-width-sm, 1px) solid var(--nys-color-neutral-400, #909395)}:host([inverted]){--_nys-select-border-color--focus: var(--nys-color-focus-reverse, #7aa5e7)}.nys-select{display:flex;flex-direction:column;gap:var(--_nys-select-gap);font-family:var(--_nys-select-font-family)}.nys-select__select{color:var(--_nys-select-color);font-weight:var(--_nys-select-font-weight);font-family:var(--_nys-select-font-family);border-radius:var(--_nys-select-border-radius);border:solid var(--_nys-select-border-width) var(--_nys-select-border-color);font-size:var(--_nys-select-font-size);padding:var(--_nys-select-padding);width:var(--_nys-select-width);height:var(--_nys-select-height);max-width:100%;text-indent:1px;background:var(--_nys-select-background-color);appearance:none;text-overflow:ellipsis}.nys-select__selectwrapper{position:relative;display:inline-block;width:var(--_nys-select-width);max-width:100%}.nys-select__icon{color:var(--_nys-select-color);position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none}:host([width=sm]){--_nys-select-width: var(--nys-select-form-width-sm, 88px)}:host([width=md]){--_nys-select-width: var(--nys-select-form-width-md, 200px)}:host([width=lg]){--_nys-select-width: var(--nys-select-form-width-lg, 384px)}:host([width=full]){--_nys-select-width: 100%;flex:1}.nys-select__select:hover:not(:disabled){cursor:pointer;border-color:var(--_nys-select-border-color--hover);outline:solid var(--_nys-select-border-width) var(--_nys-select-border-color--hover)}.nys-select__select:focus{border-color:var(--_nys-select-border-color--focus);outline:solid var(--_nys-select-border-width) var(--_nys-select-border-color--focus)}.nys-select__select:disabled{background-color:var(--_nys-select-background-color--disabled);border-color:var(--_nys-select-border-color--disabled);cursor:not-allowed;color:var(--_nys-select-color--disabled)}.nys-select__select:disabled~.nys-select__icon{color:var(--_nys-select-color--disabled)}:host([showError]){--_nys-select-border-default: var(--nys-border-width-sm, 1px) solid var(--_nys-select-color--error)}';
var Hl = Object.defineProperty, ve = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Hl(e, t, o), o;
};
let Ul = 0;
const lo = class lo extends m {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.label = "", this.description = "", this.value = "", this.disabled = !1, this.required = !1, this.optional = !1, this.tooltip = "", this.form = null, this.inverted = !1, this.showError = !1, this.errorMessage = "", this.width = "full", this._originalErrorMessage = "", this._hasUserInteracted = !1, this._internals = this.attachInternals();
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-select-${Date.now()}-${Ul++}`), this._originalErrorMessage = this.errorMessage ?? "", this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this.shadowRoot?.querySelector(
      'slot:not([name="description"])'
    ) && this._handleSlotChange(), this._setValue();
  }
  _handleSlotChange() {
    const e = this.shadowRoot?.querySelector(
      'slot:not([name="description"])'
    ), t = this.shadowRoot?.querySelector("select");
    if (!e || !t) return;
    Array.from(t.children).forEach((r) => {
      r.hasAttribute("data-native") || r.remove();
    }), e.assignedElements({ flatten: !0 }).forEach((r) => {
      if (r instanceof lt) {
        const i = document.createElement("option");
        i.value = r.value, i.textContent = r.label || r.textContent?.trim() || "", i.disabled = r.disabled, i.selected = r.selected, t.appendChild(i);
        return;
      }
      if (r.tagName === "OPTION") {
        const i = r, c = i.cloneNode(!0);
        c.setAttribute("data-native", "true"), c.disabled = i.disabled, c.selected = i.selected, t.appendChild(c);
        return;
      }
      if (r.tagName === "OPTGROUP") {
        const i = document.createElement("optgroup");
        i.label = r.label, r.disabled && (i.disabled = !0), Array.from(r.children).forEach((c) => {
          if (c instanceof lt) {
            const d = document.createElement("option");
            d.value = c.value, d.textContent = c.label || c.textContent?.trim() || "", d.disabled = c.disabled, d.selected = c.selected, i.appendChild(d);
          } else if (c.tagName === "OPTION") {
            const d = c.cloneNode(!0);
            i.appendChild(d);
          }
        }), t.appendChild(i);
        return;
      }
    });
    const o = Array.from(t.options).find((r) => r.selected);
    o && (this.value = o.value, this._internals.setFormValue(this.value));
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    this._internals.setFormValue(this.value), this._manageRequire();
  }
  _manageRequire() {
    const e = this.shadowRoot?.querySelector("select");
    if (!e) return;
    const t = this.errorMessage || "This field is required.";
    this.required && !this.value ? (this._internals.ariaInvalid = "true", this._internals.setValidity({ valueMissing: !0 }, t, e)) : (this._internals.ariaInvalid = "false", this._internals.setValidity({}), this._hasUserInteracted = !1);
  }
  _setValidityMessage(e = "") {
    const t = this.shadowRoot?.querySelector("select");
    if (!t) return;
    this.showError = !!e, this._originalErrorMessage?.trim() && e !== "" ? this.errorMessage = this._originalErrorMessage : this.errorMessage = e;
    const s = e ? { customError: !0 } : {};
    this._internals.setValidity(s, this.errorMessage, t);
  }
  _validate() {
    const e = this.shadowRoot?.querySelector("select");
    if (!e) return;
    let t = e.validationMessage;
    this._manageRequire(), this._setValidityMessage(t);
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.value = "";
    const e = this.shadowRoot?.querySelector("select");
    e && (e.value = "", Array.from(e.options).forEach((t) => t.selected = !1)), this.showError = !1, this.errorMessage = "", this._internals.setValidity({}), this.requestUpdate();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  // This helper function is called to perform the element's native validation.
  checkValidity() {
    const e = this.shadowRoot?.querySelector("select");
    return e ? e.checkValidity() : !0;
  }
  _handleInvalid(e) {
    e.preventDefault(), this._hasUserInteracted = !0, this._validate(), this.showError = !0;
    const t = this.shadowRoot?.querySelector("select");
    if (t) {
      const s = this._internals.form;
      s ? Array.from(s.elements).find(
        (i) => typeof i.checkValidity == "function" && !i.checkValidity()
      ) === this && t.focus() : t.focus();
    }
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  // Handle change event to bubble up selected value
  _handleChange(e) {
    const t = e.target;
    this.value = t.value, this._internals.setFormValue(this.value), this.required && this.value && (this.showError = !1, this.errorMessage = "", this._internals.setValidity({})), this._hasUserInteracted && this._validate(), this.dispatchEvent(
      new CustomEvent("nys-change", {
        detail: { id: this.id, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(
      new Event("nys-focus", { bubbles: !0, composed: !0 })
    );
  }
  // Handle blur event
  _handleBlur() {
    this._hasUserInteracted || (this._hasUserInteracted = !0), this._validate(), this.dispatchEvent(
      new Event("nys-blur", { bubbles: !0, composed: !0 })
    );
  }
  // Check if the current value matches any option, and if so, set it as selected
  updated(e) {
    if (super.updated(e), e.has("value")) {
      const t = this.shadowRoot?.querySelector("select");
      t && (t.value = this.value), this._setValue();
    }
  }
  render() {
    return h`
      <div class="nys-select">
        <nys-label
          label=${this.label}
          description=${this.description}
          flag=${this.required ? "required" : this.optional ? "optional" : ""}
          tooltip=${this.tooltip}
          ?inverted=${this.inverted}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <div class="nys-select__selectwrapper">
          <select
            class="nys-select__select"
            name=${this.name}
            id=${this.id + "--native"}
            form=${g(this.form || void 0)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-disabled="${this.disabled}"
            aria-label="${[this.label, this.description].filter(Boolean).join(" ")}"
            .value=${this.value}
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
            @change="${this._handleChange}"
          >
            <option data-native hidden disabled value=""></option>
          </select>
          <slot style="display: none;"></slot>
          <nys-icon
            name="chevron_down"
            size="2xl"
            class="nys-select__icon"
          ></nys-icon>
        </div>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this.errorMessage}
        ></nys-errormessage>
      </div>
    `;
  }
};
lo.styles = w(Vl), lo.shadowRootOptions = {
  ...m.shadowRootOptions,
  delegatesFocus: !0
}, lo.formAssociated = !0;
let te = lo;
ve([
  a({ type: String, reflect: !0 })
], te.prototype, "id");
ve([
  a({ type: String, reflect: !0 })
], te.prototype, "name");
ve([
  a({ type: String })
], te.prototype, "label");
ve([
  a({ type: String })
], te.prototype, "description");
ve([
  a({ type: String })
], te.prototype, "value");
ve([
  a({ type: Boolean, reflect: !0 })
], te.prototype, "disabled");
ve([
  a({ type: Boolean, reflect: !0 })
], te.prototype, "required");
ve([
  a({ type: Boolean, reflect: !0 })
], te.prototype, "optional");
ve([
  a({ type: String })
], te.prototype, "tooltip");
ve([
  a({ type: String, reflect: !0 })
], te.prototype, "form");
ve([
  a({ type: Boolean, reflect: !0 })
], te.prototype, "inverted");
ve([
  a({ type: Boolean, reflect: !0 })
], te.prototype, "showError");
ve([
  a({ type: String })
], te.prototype, "errorMessage");
ve([
  a({ type: String, reflect: !0 })
], te.prototype, "width");
customElements.get("nys-select") || customElements.define("nys-select", te);
const jl = ':host{--_nys-skipnav-padding--y: var(--nys-space-100, 8px);--_nys-skipnav-padding--x: var(--nys-space-200, 16px);--_nys-skipnav-gap: var(--nys-space-100, 8px);--_nys-skipnav-border-width: var(--nys-border-width-md, 2px);--_nys-skipnav-border-color: var(--nys-color-link, #004dd1);--_nys-skipnav-border-radius: var(--nys-radius-sm, 2px);--_nys-skipnav-font-size: var(--nys-font-size-ui-md, 16px);--_nys-skipnav-font-weight: var(--nys-font-weight-semibold, 600);--_nys-skipnav-letter-spacing: var(--nys-font-letterspacing-ui-md, .044px);--_nys-skipnav-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-skipnav-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-skipnav-color: var(--nys-color-link, #004dd1);--_nys-skipnav-background-color: var(--nys-color-surface, #ffffff)}.nys-skipnav__link{position:absolute;left:auto;top:-4.8rem;display:inline-flex;padding:var(--_nys-skipnav-padding--y) var(--_nys-skipnav-padding--x);align-items:flex-end;gap:var(--_nys-skipnav-gap);background:var(--_nys-skipnav-background-color);color:var(--_nys-skipnav-color);border:var(--_nys-skipnav-border-width) solid var(--_nys-skipnav-border-color);border-radius:var(--_nys-skipnav-border-radius);font-family:var(--_nys-skipnav-font-family);font-size:var(--_nys-skipnav-font-size);font-style:normal;font-weight:var(--_nys-skipnav-font-weight);line-height:var(--_nys-skipnav-line-height);letter-spacing:var(--_nys-skipnav-letter-spacing);text-decoration-line:underline;text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:7%;text-underline-offset:auto;text-underline-position:from-font;z-index:100;transition:.15s ease-in-out}.nys-skipnav__link:focus,.nys-skipnav__link.show{top:0;left:auto;outline:none}';
var Wl = Object.defineProperty, Or = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Wl(e, t, o), o;
};
const Ks = class Ks extends m {
  constructor() {
    super(), this.id = "", this.href = "";
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-skipnav-${Date.now()}`);
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _handleFocus() {
    this.shadowRoot?.querySelector(".nys-skipnav__link")?.classList.add("show");
  }
  _handleBlur() {
    this.shadowRoot?.querySelector(".nys-skipnav__link")?.classList.remove("show");
  }
  _handleClick() {
    const e = (this.href || "#main-content").replace("#", ""), t = document.getElementById(e);
    t && (t.setAttribute("tabindex", "-1"), t.focus(), t.style.outline = "none");
  }
  render() {
    return h`
      <div class="nys-skipnav">
        <a
          href=${this.href ? this.href : "#main-content"}
          tabindex="0"
          class="nys-skipnav__link"
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
          @click="${this._handleClick}"
        >
          Skip to main content
        </a>
      </div>
    `;
  }
};
Ks.styles = w(jl);
let bo = Ks;
Or([
  a({ type: String, reflect: !0 })
], bo.prototype, "id");
Or([
  a({ type: String })
], bo.prototype, "href");
customElements.get("nys-skipnav") || customElements.define("nys-skipnav", bo);
const Rr = ':host{--_nys-stepper-font-size: var(--nys-font-size-ui-md, 16px);--_nys-stepper-font-weight: var(--nys-font-weight-semibold, 600);--_nys-stepper-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-stepper-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-step-color: var(--nys-color-text, #1b1b1b);--_nys-stepper-background-color: var(--nys-color-surface-raised, #f6f6f6)}.nys-stepper{font-family:var(--_nys-stepper-font-family);font-size:var(--_nys-stepper-font-size);font-weight:var(--_nys-stepper-font-weight);line-height:var(--_nys-stepper-line-height);display:flex;flex-direction:column;counter-reset:step;background-color:var(--_nys-stepper-background-color);max-width:100%;height:100%}.nys-stepper__header{display:flex;flex-direction:column;padding:var(--nys-space-400, 32px) var(--nys-space-400, 32px) var(--nys-space-150, 12px)}::slotted(div[slot=actions]){display:flex;flex-wrap:wrap;justify-content:flex-start;gap:var(--nys-space-100, 8px);margin-bottom:var(--nys-space-300, 24px)}.nys-stepper__counter{display:none;text-decoration:underline;text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:7%;text-underline-offset:auto;text-underline-position:from-font;color:var(--nys-color-text, #1b1b1b);text-overflow:ellipsis;font-family:var(--nys-font-family-ui, "Proxima Nova");font-size:var(--nys-font-size-ui-md, 16px);font-style:normal;font-weight:400;line-height:var(--nys-font-size-ui-md, 16px);cursor:pointer;width:fit-content}.nys-stepper__steps{display:flex;flex-direction:column;padding:var(--nys-space-150, 12px) var(--nys-space-400, 32px) var(--nys-space-400, 32px);overflow-y:scroll;height:fit-content;height:-moz-available;scrollbar-width:none;background:linear-gradient(var(--nys-color-surface-raised, #f6f6f6) 30%,rgba(255,255,255,0)) center top,linear-gradient(rgba(255,255,255,0),var(--nys-color-surface-raised, #f6f6f6) 70%) center bottom,linear-gradient(to bottom,#63636333,#0000) top,linear-gradient(to top,#63636333,#0000) bottom;background-repeat:no-repeat;background-size:100% 40px,100% 40px,100% 14px,100% 14px;background-attachment:local,local,scroll,scroll;background-color:var(--nys-color-surface-raised, #f6f6f6)}.nys-step{position:relative;counter-increment:step;display:flex;flex-direction:column}.nys-step__contentwrapper{display:flex;flex-direction:row;align-items:center;gap:var(--nys-space-150, 12px);cursor:default;width:fit-content}.nys-step__contentwrapper:focus-visible{outline:solid var(--nys-color-focus, #004dd1) var(--nys-border-width-md, 2px);outline-offset:var(--nys-space-2px, 2px);border-radius:var(--nys-radius-md, 4px)}.nys-step__linewrapper{width:24px;display:flex;justify-content:center}.nys-step__line{width:var(--nys-size-1px, 1px);height:var(--nys-size-300, 24px);border-radius:var(--nys-radius-round, 1776px);background:var(--nys-color-black-transparent-200, rgba(27, 27, 27, .2));margin:var(--nys-space-100, 8px) 0}.nys-step__number{border-radius:var(--nys-radius-round, 1776px);border:var(--nys-size-1px, 1px) solid var(--nys-color-neutral-400, #909395);background:var(--nys-color-white-transparent-900, rgba(255, 255, 255, .9));width:var(--nys-size-300, 24px);min-width:var(--nys-size-300, 24px);max-width:var(--nys-size-300, 24px);height:var(--nys-size-300, 24px);min-height:var(--nys-size-300, 24px);max-height:var(--nys-size-300, 24px);display:flex;align-items:center;justify-content:center;text-align:center;color:var(--nys-color-text, #1b1b1b)}:host([previous]) .nys-step__number,:host([previous]) .nys-step__line,:host([current]) .nys-step__number,:host([current]) .nys-step__line{background-color:var(--nys-color-theme-stronger, #081b2b);color:var(--nys-color-text-reverse, #ffffff);border-color:var(--nys-color-theme-stronger, #081b2b)}:host([selected]) .nys-step__number{background-color:var(--nys-color-theme, #154973);color:var(--nys-color-text-reverse, #ffffff);border-color:var(--nys-color-theme, #154973);outline:var(--nys-size-50, 4px) solid var(--nys-color-theme-weak, #cddde9)}:host([first]) .nys-step__linewrapper{display:none!important}.nys-step__content{display:flex;flex-direction:column;gap:var(--nys-space-100, 8px)}.nys-step__label{color:var(--_nys-step-color);font-family:var(--_nys-stepper-font-family);font-size:var(--_nys-stepper-font-size);font-weight:var(--_nys-stepper-font-weight);line-height:var(--_nys-stepper-line-height);line-height:var(--nys-font-size-ui-md, 16px);letter-spacing:var(--nys-font-letterspacing-ui-md, .044px);text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:var(7%, 1.12px);text-underline-offset:auto}:host([current]) .nys-step__label,:host([previous]) .nys-step__label{text-decoration-line:underline}:host([current]) .nys-step__contentwrapper,:host([previous]) .nys-step__contentwrapper{cursor:pointer}:host([selected]) .nys-step__label{font-weight:700;text-decoration-line:none}:host([selected]) .nys-step__contentwrapper{cursor:default}:host([selected]) .nys-step__contentwrapper:focus-visible{outline-offset:6px}@media(max-width:1023px){.nys-stepper{max-width:1023px;width:100%}.nys-stepper__header{flex-direction:row-reverse;justify-content:space-between;padding:var(--nys-space-150, 12px);gap:var(--nys-space-200, 16px)}.nys-stepper__headertext{flex:1 1 0;min-width:0}::slotted(div[slot=actions]){margin-bottom:0;min-width:0;justify-content:end}.nys-stepper__counter{display:block}.nys-stepper__steps{flex-direction:row;gap:var(--nys-space-2px, 2px);padding:0}.nys-stepper__steps::slotted(*){flex:1}.nys-step__number{border-radius:0;border:none;background-color:var(--nys-color-neutral-200, #bec0c1);height:var(--nys-size-100, 8px);min-height:var(--nys-size-100, 8px);max-height:var(--nys-size-100, 8px);width:100%;min-width:100%;max-width:100%;color:transparent}:host([previous]) .nys-step__number,:host([current]) .nys-step__number{background-color:var(--nys-color-neutral-900, #1b1b1b);color:transparent}:host([selected]) .nys-step__number{background-color:var(--nys-color-theme-mid, #457aa5);outline:none}.nys-step__content,.nys-step__linewrapper{display:none}.nys-step__contentwrapper{cursor:default;pointer-events:none;width:auto}:host([isCompactExpanded]) .nys-step__content,:host([isCompactExpanded]) .nys-step__linewrapper{display:flex}:host([isCompactExpanded]) .nys-stepper__header{padding-bottom:var(--nys-space-250, 20px)}:host([isCompactExpanded]) .nys-stepper__steps{width:-webkit-fill-available;width:-moz-available;z-index:9999;overflow-y:auto;flex-direction:column;gap:0;padding:var(--nys-space-150, 12px) var(--nys-space-400, 32px) var(--nys-space-400, 32px)}:host([isCompactExpanded]) .nys-stepper__steps::slotted(*){flex:none}:host([isCompactExpanded]) .nys-step__number{border-radius:var(--nys-radius-round, 1776px);border:1px solid var(--nys-color-neutral-400, #909395);background:var(--nys-color-white-transparent-900, rgba(255, 255, 255, .9));width:var(--nys-space-300, 24px);min-width:var(--nys-space-300, 24px);max-width:var(--nys-space-300, 24px);height:var(--nys-space-300, 24px);min-height:var(--nys-space-300, 24px);max-height:var(--nys-space-300, 24px);color:var(--nys-color-text, #1b1b1b)}:host([isCompactExpanded][previous]) .nys-step__number,:host([isCompactExpanded][previous]) .nys-step__line,:host([isCompactExpanded][current]) .nys-step__number,:host([isCompactExpanded][current]) .nys-step__line{background:var(--nys-color-theme-stronger, #081b2b);color:var(--nys-color-text-reverse, #ffffff);border-color:var(--nys-color-theme-stronger, #081b2b)}:host([isCompactExpanded][selected]) .nys-step__number{background:var(--nys-color-theme, #154973);color:var(--nys-color-text-reverse, #ffffff);border-color:var(--nys-color-theme, #154973);outline:4px solid var(--nys-color-theme-weak, #cddde9)}:host([isCompactExpanded]) .nys-step__contentwrapper{pointer-events:all}}';
var Yl = Object.defineProperty, ut = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Yl(e, t, o), o;
};
const Zs = class Zs extends m {
  constructor() {
    super(...arguments), this.selected = !1, this.current = !1, this.label = "", this.href = "", this.previous = !1, this.isCompactExpanded = !1, this.stepNumber = 0;
  }
  _handleActivate(e) {
    typeof this.onClick == "function" && this.onClick(e);
    const t = new CustomEvent("nys-step-click", {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      detail: { href: this.href, label: this.label }
    });
    (this.hasAttribute("previous") || this.current) && !this.selected && (this.dispatchEvent(t), !t.defaultPrevented && this.href && (window.location.href = this.href));
  }
  _handleKeydown(e) {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), this._handleActivate(e));
  }
  render() {
    return h`
      <div class="nys-step">
        <div class="nys-step__linewrapper">
          <div class="nys-step__line"></div>
        </div>
        <div
          class="nys-step__contentwrapper"
          @click=${this._handleActivate}
          @keydown=${this._handleKeydown}
          ?disabled=${!(this.selected || this.current || this.hasAttribute("previous"))}
        >
          <div class="nys-step__number" tabindex="-1" aria-hidden="true">
            ${this.stepNumber}
          </div>
          <div class="nys-step__content" tabindex="-1" aria-hidden="true">
            <div
              class="nys-step__label"
              role="button"
              aria-label="${this.label} Step"
              tabindex=${this.selected || this.current || this.hasAttribute("previous") ? "0" : "-1"}
              aria-hidden="true"
            >
              ${this.label}
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
Zs.styles = w(Rr);
let ze = Zs;
ut([
  a({ type: Boolean, reflect: !0 })
], ze.prototype, "selected");
ut([
  a({ type: Boolean, reflect: !0 })
], ze.prototype, "current");
ut([
  a({ type: String })
], ze.prototype, "label");
ut([
  a({ type: String })
], ze.prototype, "href");
ut([
  a({ type: Boolean, reflect: !0 })
], ze.prototype, "previous");
ut([
  a({ type: Boolean })
], ze.prototype, "isCompactExpanded");
ut([
  a({ attribute: !1 })
], ze.prototype, "onClick");
ut([
  a({ type: Number })
], ze.prototype, "stepNumber");
customElements.get("nys-step") || customElements.define("nys-step", ze);
var Gl = Object.defineProperty, wo = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Gl(e, t, o), o;
};
let Kl = 0;
const Qs = class Qs extends m {
  constructor() {
    super(), this.id = "", this.name = "", this.label = "", this.counterText = "initial", this.isCompactExpanded = !1, this._stepsNumbered = !1, this._onStepClick = async (e) => {
      const t = e.composedPath().find(
        (i) => i instanceof HTMLElement && i.tagName.toLowerCase() === "nys-step"
      );
      if (!t) return;
      const s = Array.from(this.querySelectorAll("nys-step")), o = s.findIndex(
        (i) => i.hasAttribute("current")
      ), r = s.indexOf(t);
      o !== -1 && r > o || t.hasAttribute("selected") || (s.forEach((i) => i.removeAttribute("selected")), t.setAttribute("selected", ""), this._updateCounter(), this.isCompactExpanded = !1);
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("nys-step-click", this._onStepClick), requestAnimationFrame(() => this._validateSteps()), this.id || (this.id = `nys-stepper-${++Kl}-${Date.now()}`);
  }
  disconnectedCallback() {
    this.removeEventListener("nys-step-click", this._onStepClick), super.disconnectedCallback();
  }
  _validateSteps() {
    Array.from(this.children).forEach((e) => {
      const t = e instanceof HTMLElement && e.tagName.toLowerCase() === "nys-step", s = e instanceof HTMLElement && e.hasAttribute("slot") && e.getAttribute("slot") === "actions";
      !t && !s && (console.warn(
        "Only <nys-step> elements or the <div slot='actions'> container are allowed as direct children of <nys-stepper>. Removing:",
        e
      ), e.remove());
    });
  }
  _validateButtonSlot(e) {
    const s = e.target.assignedElements();
    if (s.length !== 1 || s[0].tagName.toLowerCase() !== "div") {
      console.warn(
        "The 'actions' slot must have exactly one <div> as a direct child."
      );
      return;
    }
    const o = s[0];
    Array.from(o.children).forEach((r) => {
      r instanceof HTMLElement && r.tagName.toLowerCase() === "nys-button" ? (r.setAttribute("size", "sm"), r.hasAttribute("fullWidth") && (r.style.flex = "1 1 0")) : (console.warn(
        "The <div> inside 'actions' slot only accepts <nys-button> elements. Removing invalid node:",
        r
      ), r.remove());
    });
  }
  _updateCounter() {
    let e;
    if (this.isCompactExpanded)
      e = "Back to Form", this.style.height = "-webkit-fit-content", this.style.height = "-moz-fit-content", this.style.height = "fit-content";
    else {
      this.style.height = "auto";
      const t = this.querySelectorAll("nys-step"), s = Array.from(t).findIndex(
        (r) => r.hasAttribute("selected")
      ), o = t.length;
      e = s >= 0 ? `Step ${s + 1} of ${o}` : `Step 1 of ${o}`;
    }
    e !== this.counterText && (this.counterText = e);
  }
  willUpdate() {
    const e = this.querySelectorAll("nys-step");
    this._stepsNumbered || (e.forEach((r, i) => {
      r.stepNumber = i + 1;
    }), this._stepsNumbered = !0);
    let t = !1, s = !1, o = !1;
    e.forEach((r, i) => {
      r.current && (o ? r.current = !1 : o = !0), i === 0 ? r.setAttribute("first", "") : r.removeAttribute("first"), r.current ? (t = !0, r.previous = !1) : t ? r.previous = !1 : r.previous = !0, r.selected && (t || s ? r.selected = !1 : s = !0), this.isCompactExpanded ? r.setAttribute("isCompactExpanded", "") : r.removeAttribute("isCompactExpanded");
    }), s || (o ? e.forEach((r) => {
      r.current && !s && (r.setAttribute("selected", ""), s = !0);
    }) : e.length > 0 && (e[0].setAttribute("current", ""), e[0].setAttribute("selected", ""))), this._updateCounter();
  }
  _toggleCompact() {
    this.isCompactExpanded = !this.isCompactExpanded;
  }
  _handleCounterKeydown(e) {
    (e.key === " " || e.key === "Enter") && (e.preventDefault(), this._toggleCompact());
  }
  render() {
    return h`
      <div class="nys-stepper" name=${this.name}>
        <div class="nys-stepper__header">
          <slot name="actions" @slotchange=${this._validateButtonSlot}></slot>
          <div class="nys-stepper__headertext">
            <div class="nys-stepper__label">${this.label}</div>
            <div
              class="nys-stepper__counter"
              @click=${this._toggleCompact}
              @keydown=${this._handleCounterKeydown}
              role="button"
              tabindex="0"
              aria-label=${this.isCompactExpanded ? "Collapse step navigation to view the form" : `Expand step navigation. You are on ${this.counterText}`}
              aria-expanded=${this.isCompactExpanded ? "true" : "false"}
            >
              ${this.counterText}
            </div>
          </div>
        </div>
        <slot class="nys-stepper__steps"></slot>
      </div>
    `;
  }
};
Qs.styles = w(Rr);
let ct = Qs;
wo([
  a({ type: String, reflect: !0 })
], ct.prototype, "id");
wo([
  a({ type: String, reflect: !0 })
], ct.prototype, "name");
wo([
  a({ type: String })
], ct.prototype, "label");
wo([
  a({ type: String })
], ct.prototype, "counterText");
wo([
  a({ type: Boolean, reflect: !0 })
], ct.prototype, "isCompactExpanded");
customElements.get("nys-stepper") || customElements.define("nys-stepper", ct);
const zs = ':host{--_nys-tabgroup-gap: var(--nys-space-100, 8px);--_nys-tabgroup-padding: var(--nys-space-50, 4px);--_nys-tabgroup-background-color: var(--nys-color-surface, #ffffff);--_nys-tab-border-width: 3px;--_nys-tab-border-radius: var(--nys-radius-md, 4px);--_nys-tab-border-color: var(--nys-color-neutral-50);--_nys-tab-border-color--hover: var(--nys-color-theme-weak, #cddde9);--_nys-tab-border-color--active: var(--nys-color-theme-mid, #457aa5);--_nys-tab-border-color--disabled: var(--_nys-tab-border-color);--_nys-tab-border-color--selected: var(--nys-color-theme, #154973);--_nys-tab-border-color--selected--hover: var( --nys-color-theme-strong, #0e324f );--_nys-tab-border-color--selected--active: var( --nys-color-theme-stronger, #081b2b );--_nys-tab-background-color: var(--nys-color-surface, #ffffff);--_nys-tab-background-color--hover: var(--nys-color-theme-weaker, #eff6fb);--_nys-tab-background-color--active: var(--nys-color-theme-weak, #cddde9);--_nys-tab-background-color--disabled: var(--_nys-tab-background-color);--_nys-tab-background-color--selected: var(--nys-color-neutral-10, #f6f6f6);--_nys-tab-color: var(--nys-color-text-weak, #4a4d4f);--_nys-tab-color--selected: var(--nys-color-text, #1b1b1b);--_nys-tab-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-tab-padding--x: var(--nys-space-150, 12px);--_nys-tab-padding--y: var(--nys-space-200, 16px);--_nys-tabpanel-padding: var(--nys-space-400, 32px);--_nys-tabpanel-max-height: var(--nys-tabpanel-max-height)}.nys-tab{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;appearance:none;-webkit-appearance:none;padding:var(--_nys-tab-padding--y) var(--_nys-tab-padding--x);border-color:var(--_nys-tab-border-color);border-style:none none solid;border-width:var(--_nys-tab-border-width);border-radius:var(--_nys-tab-border-radius) var(--_nys-tab-border-radius) 0 0;background-color:var(--_nys-tab-background-color);color:var(--_nys-tab-color);font-family:var(--nys-font-family-ui, var(--nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif));font-size:var(--nys-font-size-ui-md, 16px);font-weight:var(--nys-font-weight-semibold, 600);line-height:var(--nys-size-200, 16px);text-decoration:none}:host(:not([disabled])) .nys-tab:hover{background-color:var(--_nys-tab-background-color--hover);border-color:var(--_nys-tab-border-color--hover);color:var(--_nys-tab-color)}:host(:not([disabled])) .nys-tab:active{background-color:var(--_nys-tab-background-color--active);border-color:var(--_nys-tab-border-color--active);color:var(--_nys-tab-color)}:host([disabled]) .nys-tab{background-color:var(--_nys-tab-background-color--disabled);border-color:var(--_nys-tab-border-color--disabled);color:var(--_nys-tab-color--disabled);cursor:not-allowed;pointer-events:auto}:host(:focus-visible){outline:none}:host(:focus-visible) .nys-tab{outline:solid var(--nys-border-width-md, 2px) var(--nys-color-focus, #004dd1);outline-offset:var(--nys-space-2px, 2px)}:host([selected]) .nys-tab{background-color:var(--_nys-tab-background-color--selected);border-color:var(--_nys-tab-border-color--selected);color:var(--_nys-tab-color--selected)}:host([selected]:not([disabled])) .nys-tab:hover{border-color:var(--_nys-tab-border-color--selected--hover)}:host([selected]:not([disabled])) .nys-tab:active{border-color:var(--_nys-tab-border-color--selected--active)}.nys-tabgroup{background-color:var(--_nys-tabgroup-background-color)}.nys-tabgroup__tabs-container{position:relative}.nys-tabgroup__tabs-container .scroll-shadow{position:absolute;top:50%;transform:translateY(-50%);z-index:2;opacity:0;pointer-events:none;transition:opacity .2s;height:calc(var(--nys-space-600, 48px) + var(--_nys-tab-border-width));width:var(--nys-space-200, 16px)}.nys-tabgroup__tabs-container .scroll-shadow--left{left:0;background-image:linear-gradient(to left,transparent,var(--nys-color-neutral-100, #d0d0ce))}.nys-tabgroup__tabs-container .scroll-shadow--right{right:0;background-image:linear-gradient(to right,transparent,var(--nys-color-neutral-100, #d0d0ce))}.nys-tabgroup__tabs-container .scroll-shadow.is-visible{opacity:1}.nys-tabgroup__tabs-container .nys-tabgroup__tabs-background{position:absolute;inset:0;margin:var(--_nys-tabgroup-padding);border-bottom:solid var(--_nys-tab-border-color) var(--_nys-tab-border-width)}.nys-tabgroup__tabs-container .nys-tabgroup__tabs{position:relative;display:flex;gap:var(--_nys-tabgroup-gap);overflow-x:auto;white-space:nowrap;-ms-overflow-style:none;scrollbar-width:none;padding:var(--_nys-tabgroup-padding)}.nys-tabgroup__tabs-container .nys-tabgroup__tabs::-webkit-scrollbar{display:none}.nys-tabgroup__panels{padding:var(--_nys-tabpanel-padding);background-color:var(--_nys-tabpanel-background-color);max-height:var(--_nys-tabpanel-max-height);overflow-y:auto}';
var Zl = Object.defineProperty, ts = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Zl(e, t, o), o;
};
let Ql = 0;
const Xs = class Xs extends m {
  constructor() {
    super(...arguments), this.id = "", this.label = "", this.selected = !1, this.disabled = !1, this._onKeydown = (e) => {
      this.disabled || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), this._handleClick());
    }, this._onFocus = () => {
      this.dispatchEvent(
        new CustomEvent("nys-tab-focus", {
          bubbles: !0,
          composed: !0,
          detail: { id: this.id }
        })
      );
    }, this._onBlur = () => {
      this.dispatchEvent(
        new CustomEvent("nys-tab-blur", {
          bubbles: !0,
          composed: !0,
          detail: { id: this.id }
        })
      );
    }, this._onClick = () => {
      this._handleClick();
    };
  }
  // ---------------------------------------------------------------------------
  // Lifecycle
  // ---------------------------------------------------------------------------
  /**
   * Sets `role="tab"` and `tabindex="-1"` on the host (the element that AT
   * will read and that receives keyboard focus). Attaches host-level listeners
   * for keydown, focus, blur, and click so that interaction events work
   * correctly on the host element itself.
   *
   * Click is handled at the host level so iOS VoiceOver double-tap (which
   * dispatches `click` directly on the host because of `role="tab"`, bypassing
   * shadow-DOM children) activates the tab. Normal taps land on the inner
   * `<span>` and bubble up to this listener.
   *
   * `<nys-tabgroup>` overrides `tabindex` to `"0"` on the selected tab.
   */
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-tab-${Date.now()}-${Ql++}`), this.setAttribute("role", "tab"), this.setAttribute("tabindex", "-1"), this.addEventListener("keydown", this._onKeydown), this.addEventListener("focus", this._onFocus), this.addEventListener("blur", this._onBlur), this.addEventListener("click", this._onClick);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("keydown", this._onKeydown), this.removeEventListener("focus", this._onFocus), this.removeEventListener("blur", this._onBlur), this.removeEventListener("click", this._onClick);
  }
  /**
   * Keeps `aria-disabled` on the host in sync with the `disabled` property so
   * AT perceives the disabled state on the element it actually focuses.
   */
  updated(e) {
    e.has("disabled") && (this.disabled ? this.setAttribute("aria-disabled", "true") : this.removeAttribute("aria-disabled"));
  }
  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------
  /**
   * Focuses the host element. The host carries `role="tab"` and `tabindex`,
   * so it is the correct element for AT to land on.
   */
  focus(e) {
    super.focus(e);
  }
  /**
   * Focuses the host then dispatches `nys-tab-select`. Called from both the
   * click handler and the keydown handler.
   */
  _handleClick() {
    this.disabled || (this.focus(), this.dispatchEvent(
      new CustomEvent("nys-tab-select", {
        bubbles: !0,
        composed: !0,
        detail: { id: this.id, label: this.label }
      })
    ));
  }
  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  render() {
    return h`<span class="nys-tab">${this.label}</span>`;
  }
};
Xs.styles = w(zs);
let xt = Xs;
ts([
  a({ type: String, reflect: !0 })
], xt.prototype, "id");
ts([
  a({ type: String })
], xt.prototype, "label");
ts([
  a({ type: Boolean, reflect: !0 })
], xt.prototype, "selected");
ts([
  a({ type: Boolean, reflect: !0 })
], xt.prototype, "disabled");
customElements.get("nys-tab") || customElements.define("nys-tab", xt);
var Xl = Object.defineProperty, Pr = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Xl(e, t, o), o;
};
let Jl = 0;
const Js = class Js extends m {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this._updateScrollShadows = () => {
      const { scrollLeft: e, scrollWidth: t, clientWidth: s } = this._tabsEl, o = e > 0, r = e + s < t;
      this._shadowLeft.classList.toggle("is-visible", o), this._shadowRight.classList.toggle("is-visible", r);
    }, this._handleWheel = (e) => {
      e.deltaY !== 0 && (e.preventDefault(), this._tabsEl.scrollLeft += e.deltaY);
    };
  }
  // ---------------------------------------------------------------------------
  // Lifecycle
  // ---------------------------------------------------------------------------
  /**
   * Called when the element is inserted into the document.
   * Auto-generates a unique `id` if one was not provided.
   */
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-tabgroup-${Date.now()}-${Jl++}`);
  }
  /**
   * Called after the element's shadow DOM has been rendered for the first time.
   *
   * Caches references to the tab list and scroll-shadow elements, performs an
   * initial scroll-shadow evaluation, and attaches:
   * - A `scroll` event listener on `_tabsEl` to update shadows on scroll.
   * - A `ResizeObserver` on `_tabsEl` to update shadows when the container
   *   is resized.
   */
  firstUpdated() {
    const e = this.shadowRoot;
    this._tabsEl = e.querySelector(".nys-tabgroup__tabs"), this._shadowLeft = e.querySelector(".scroll-shadow--left"), this._shadowRight = e.querySelector(".scroll-shadow--right"), this._updateScrollShadows(), this._tabsEl.addEventListener("scroll", this._updateScrollShadows), this._tabsEl.addEventListener("wheel", this._handleWheel, {
      passive: !1
    }), this._resizeObserver = new ResizeObserver(
      () => this._updateScrollShadows()
    ), this._resizeObserver.observe(this._tabsEl);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._tabsEl?.removeEventListener("scroll", this._updateScrollShadows), this._tabsEl?.removeEventListener("wheel", this._handleWheel), this._resizeObserver?.disconnect(), this._resizeObserver = void 0;
  }
  /**
   * Returns all `<nys-tab>` elements currently residing in the shadow-DOM
   * tabs container, in DOM order.
   *
   * @returns An array of `HTMLElement` references to every `<nys-tab>` child.
   */
  _getTabs() {
    return Array.from(
      this.shadowRoot?.querySelector(".nys-tabgroup__tabs")?.querySelectorAll("nys-tab") ?? []
    );
  }
  /**
   * Returns all `<nys-tabpanel>` elements currently residing in the
   * shadow-DOM panels container, in DOM order.
   *
   * @returns An array of `HTMLElement` references to every `<nys-tabpanel>` child.
   */
  _getPanels() {
    return Array.from(
      this.shadowRoot?.querySelector(".nys-tabgroup__panels")?.querySelectorAll("nys-tabpanel") ?? []
    );
  }
  /**
   * Single source of truth for ARIA wiring, `tabindex`, and panel visibility.
   *
   * For each index `i`:
   * - Sets `selected` / removes `selected` attribute on `tabs[i]`.
   * - Sets `aria-controls` on `tabs[i]` to the `id` of `panels[i]`.
   * - Sets `aria-labelledby` on `panels[i]` to the `id` of `tabs[i]`.
   * - Removes `hidden` from `panels[selectedIndex]`; adds it to all others.
   *
   * Must be called any time the selected tab changes (initial render and
   * subsequent user interactions).
   *
   * @param tabs - Ordered array of `<nys-tab>` elements to update.
   * @param panels - Ordered array of `<nys-tabpanel>` elements to update.
   *   Must be the same length as `tabs` for correct pairing.
   * @param selectedIndex - Zero-based index of the tab/panel pair to activate.
   * @returns void
   */
  _applySelection(e, t, s) {
    e.forEach((o, r) => {
      const i = r === s, c = t[r];
      o.setAttribute("aria-selected", i ? "true" : "false"), o.setAttribute("tabindex", i ? "0" : "-1"), c?.id && o.setAttribute("aria-controls", c.id), i ? o.setAttribute("selected", "") : o.removeAttribute("selected");
    }), t.forEach((o, r) => {
      const i = r === s, c = e[r];
      c && o.setAttribute("aria-labelledby", c.id), i ? o.removeAttribute("hidden") : o.setAttribute("hidden", "");
    });
  }
  // ---------------------------------------------------------------------------
  // Event Handlers
  // ---------------------------------------------------------------------------
  /**
   * Handles `slotchange` on the default slot.
   *
   * Iterates over all assigned elements and moves each `<nys-tab>` into
   * `.nys-tabgroup__tabs` and each `<nys-tabpanel>` into
   * `.nys-tabgroup__panels`. If a panel has an `aria-labelledby` attribute,
   * it is explicitly paired with the tab it references; otherwise panels are
   * paired with tabs by index order. After sorting, calls `_applySelection`
   * using the first element that already has a `selected` attribute, or
   * index `0` if none is found.
   *
   * @param e - The `Event` fired by the `<slot>` element on slot change.
   * @returns void
   */
  _sortChildren(e) {
    const s = e.target.assignedElements(), o = this.shadowRoot?.querySelector(".nys-tabgroup__tabs"), r = this.shadowRoot?.querySelector(
      ".nys-tabgroup__panels"
    );
    if (!o || !r) return;
    const i = [], c = /* @__PURE__ */ new Map(), d = [];
    s.forEach((b) => {
      const E = b.tagName.toLowerCase();
      if (E === "nys-tab")
        o.appendChild(b), i.push(b);
      else if (E === "nys-tabpanel") {
        r.appendChild(b);
        const Y = b, he = Y.getAttribute("aria-labelledby");
        he ? c.set(he, Y) : d.push(Y);
      }
    });
    const u = [];
    i.forEach((b) => {
      const E = b.id;
      E && c.has(E) ? (u.push(c.get(E)), c.delete(E)) : d.length > 0 && u.push(d.shift());
    }), c.forEach((b) => u.push(b)), u.forEach((b) => r.appendChild(b));
    const f = i.findIndex(
      (b) => b.hasAttribute("selected")
    ), y = f !== -1 ? f : 0;
    this._applySelection(i, u, y);
  }
  /**
   * Handles the `nys-tab-select` custom event bubbled up from a child
   * `<nys-tab>`.
   *
   * Resolves the originating `<nys-tab>` via `composedPath()` (required
   * because the event crosses shadow DOM boundaries), determines its index
   * among the current tab list, and delegates to `_applySelection`.
   *
   * @param e - The `Event` (cast to `CustomEvent`) dispatched by `<nys-tab>`.
   * @returns void
   */
  _handleTabSelect(e) {
    const t = e.composedPath().find(
      (i) => i.tagName?.toLowerCase() === "nys-tab"
    );
    if (!t) return;
    const s = this._getTabs(), o = this._getPanels(), r = s.indexOf(t);
    r !== -1 && this._applySelection(s, o, r);
  }
  /**
   * Implements the ARIA radio-button keyboard pattern:
   * - `ArrowRight` — moves focus to the next enabled tab (wraps).
   * - `ArrowLeft` — moves focus to the previous enabled tab (wraps).
   *
   * Focus is moved without changing selection; Enter / Space on the newly
   * focused tab (handled by `<nys-tab>._handleKeydown`) confirm selection.
   *
   * The currently focused tab is resolved via `composedPath()` because focus
   * may sit on a shadow-DOM descendant of `<nys-tab>` rather than the host
   * itself.
   *
   * Disabled tabs are excluded from navigation and will never receive focus
   * via arrow keys.
   *
   * @param e - The `KeyboardEvent` from the tablist `keydown` listener.
   * @returns void
   */
  _handleKeydown(e) {
    const t = this._getTabs().filter((d) => !d.hasAttribute("disabled"));
    if (t.length === 0) return;
    const s = e.composedPath().find(
      (d) => d.tagName?.toLowerCase() === "nys-tab"
    ), o = s ? t.indexOf(s) : -1;
    if (o === -1) return;
    const r = "ArrowLeft", i = "ArrowRight";
    let c = o;
    switch (e.key) {
      case r:
        c = (o - 1 + t.length) % t.length;
        break;
      case i:
        c = (o + 1) % t.length;
        break;
      default:
        return;
    }
    c !== o && t[c].focus?.();
  }
  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  render() {
    return h`
      <div class="nys-tabgroup" @nys-tab-select=${this._handleTabSelect}>
        <div class="nys-tabgroup__tabs-container">
          <div class="nys-tabgroup__tabs-background"></div>
          <div class="scroll-shadow scroll-shadow--left"></div>
          <div
            class="nys-tabgroup__tabs"
            role="tablist"
            aria-label=${this.name}
            @keydown=${this._handleKeydown}
          ></div>
          <div class="scroll-shadow scroll-shadow--right"></div>
        </div>
        <div class="nys-tabgroup__panels"></div>
        <slot @slotchange=${this._sortChildren}></slot>
      </div>
    `;
  }
};
Js.styles = w(zs);
let vo = Js;
Pr([
  a({ type: String, reflect: !0 })
], vo.prototype, "id");
Pr([
  a({ type: String })
], vo.prototype, "name");
customElements.get("nys-tabgroup") || customElements.define("nys-tabgroup", vo);
var ec = Object.defineProperty, tc = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && ec(e, t, o), o;
};
let oc = 0;
const en = class en extends m {
  constructor() {
    super(...arguments), this.id = "";
  }
  // ---------------------------------------------------------------------------
  // Lifecycle
  // ---------------------------------------------------------------------------
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-tabpanel-${Date.now()}-${oc++}`), this.setAttribute("role", "tabpanel");
  }
  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  render() {
    return h`
      <div class="nys-tabpanel" tabindex="0">
        <slot></slot>
      </div>
    `;
  }
};
en.styles = w(zs);
let jo = en;
tc([
  a({ type: String, reflect: !0 })
], jo.prototype, "id");
customElements.get("nys-tabpanel") || customElements.define("nys-tabpanel", jo);
const sc = ':host{--_nys-table-width: 100%;--_nys-table-radius: var(--nys-radius-xl, 12px);--_nys-table-padding: var(--nys-space-100, 8px);--_nys-table-border-color: transparent;--_nys-table-border-width: 0;--_nys-table-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif ) );--_nys-table-font-size: var(--nys-font-size-ui-md, 16px);--_nys-table-font-weight: var(--nys-font-weight-regular, 400);--_nys-table-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-table-padding--caption: var(--nys-space-250, 20px) var(--nys-space-150, 12px);--_nys-table-font-size--caption: var(--nys-font-size-ui-lg, 18px);--_nys-table-font-weight--caption: var(--nys-font-weight-bold, 700);--_nys-table-padding--cell--x: var(--nys-space-150, 12px);--_nys-table-padding--cell--y: var( --nys-table-padding--cell--y, var(--nys-space-200, 16px) );--_nys-table-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-table-background-color--striped: var(--nys-color-neutral-10, #f6f6f6);--_nys-table-color--code: var(--nys-color-red-600, #b52c2c);--_nys-table-background-color--code: var(--nys-color-neutral-10, #f6f6f6)}:host([bordered]){--_nys-table-border-color: var(--nys-color-neutral-100, #d0d0ce);--_nys-table-border-width: var(--nys-space-1px, 1px)}:host([download]){display:flex;flex-direction:column;gap:var(--nys-space-150, 12px)}.nys-table{width:var(--_nys-table-width);font:var(--_nys-table-font-weight) var(--_nys-table-font-size)/var(--_nys-table-line-height) var(--_nys-table-font-family)}.nys-table table{width:var(--_nys-table-width);border-collapse:collapse;background-color:var(--_nys-table-background-color)}.nys-table caption{padding:var(--_nys-table-padding--caption);font-size:var(--_nys-table-font-size--caption);font-weight:var(--_nys-table-font-weight--caption);text-align:start}.nys-table caption div{display:flex;justify-content:space-between;align-items:center}.nys-table td{padding:var(--_nys-table-padding--cell--y) var(--_nys-table-padding--cell--x);border:var(--_nys-table-border-width) solid var(--_nys-table-border-color)}.nys-table td code{color:var(--_nys-table-color--code);background-color:var(--_nys-table-background-color--code);padding:var(--nys-space-1px) var(--nys-space-2px);border-radius:var(--nys-radius-md)}.nys-table th{border:var(--_nys-table-border-width) solid var(--_nys-table-border-color);overflow:hidden;text-overflow:ellipsis;padding:var(--_nys-table-padding--cell--y) var(--_nys-table-padding--cell--x);text-align:left}.nys-table th:has(nys-button){padding:0}.nys-table th p{margin:0}.nys-table th nys-button{margin:0;width:-moz-available;width:-webkit-fill-available;width:fill-available;justify-content:space-between;--_nys-button-border-width: 0;--_nys-button-border-radius: 0;--_nys-button-padding--x: var(--_nys-table-padding--cell--x);--_nys-button-justify-content: space-between;--_nys-button-outline-offset: -2px}.nys-table th.nys-table__sortedcolumn{background-color:var(--nys-color-theme-weak, #cddde9)}.nys-table td.nys-table__sortedcolumn{position:relative;z-index:0}.nys-table td.nys-table__sortedcolumn:after{content:"";position:absolute;inset:0;background-color:var(--nys-color-theme, #154973);opacity:.1;pointer-events:none;z-index:-1}:host([striped]) .nys-table tbody tr:nth-child(odd){background-color:var(--_nys-table-background-color--striped)}:host([sortable]) .nys-table th{cursor:pointer}.sr-only{border:0!important;clip-path:inset(50%)!important;height:1px!important;overflow:hidden!important;margin:-1px!important;padding:0!important;position:absolute!important;width:1px!important;white-space:nowrap!important}';
var nc = Object.defineProperty, et = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && nc(e, t, o), o;
};
let rc = 0;
const tn = class tn extends m {
  /**************** Lifecycle Methods ****************/
  constructor() {
    super(), this.id = "", this.name = "", this.striped = !1, this.sortable = !1, this.bordered = !1, this.download = "", this._sortColumn = null, this._sortDirection = "none", this._captionText = "", this._observer = null;
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-table-${Date.now()}-${rc++}`);
  }
  firstUpdated() {
    this.shadowRoot?.querySelector("slot")?.addEventListener("slotchange", () => this._handleSlotChange()), this._handleSlotChange(), this._setupMutationObserver();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._observer?.disconnect();
  }
  willUpdate() {
    const e = Array.from(this.children).find(
      (o) => o.tagName === "TABLE"
    );
    if (!e) return;
    const s = e.querySelector("caption")?.textContent?.trim() ?? "";
    this._captionText !== s && (this._captionText = s);
  }
  /******************** Functions ********************/
  _handleSlotChange() {
    const e = this.shadowRoot?.querySelector(
      "slot"
    ), t = this.shadowRoot?.querySelector(
      ".table-container"
    );
    if (!e || !t) return;
    t.innerHTML = "";
    const o = e.assignedElements({ flatten: !0 }).find((i) => i.tagName === "TABLE");
    if (!o) return;
    const r = o.cloneNode(!0);
    this._normalizeTableDOM(r), this.sortable && this._addSortIcons(r), t.appendChild(r);
  }
  _setupMutationObserver() {
    const e = this.shadowRoot?.querySelector(
      "slot"
    );
    if (!e) return;
    this._observer = new MutationObserver(() => {
      this._handleSlotChange();
    });
    const t = () => {
      const o = e.assignedElements({ flatten: !0 }).find(
        (r) => r.tagName === "TABLE"
      );
      o && this._observer?.observe(o, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    };
    t(), e.addEventListener("slotchange", t);
  }
  _normalizeTableDOM(e) {
    const t = e.querySelector("thead"), s = e.querySelector("tbody");
    if (t && s) return;
    const o = e.querySelector(
      "caption"
    ), r = Array.from(e.querySelectorAll("tr"));
    if (r.length === 0) return;
    const i = document.createElement("thead"), c = document.createElement("tbody"), d = r.findIndex((u) => u.querySelector("th"));
    if (d === -1)
      r.forEach((u) => c.appendChild(u));
    else {
      const u = r[d];
      u.querySelectorAll("th").forEach((f) => {
        Array.from(f.childNodes).forEach((y) => {
          if (y.nodeType === Node.TEXT_NODE && y.textContent?.trim()) {
            const b = document.createElement("p");
            b.textContent = y.textContent, f.replaceChild(b, y);
          }
        });
      }), i.appendChild(u), r.forEach((f, y) => {
        y !== d && c.appendChild(f);
      });
    }
    if (e.innerHTML = "", o && e.appendChild(o), this.sortable) {
      const u = document.createElement("span");
      if (u.setAttribute("class", "sr-only"), u.textContent = "Column headers with buttons are sortable.", o)
        o.appendChild(u);
      else {
        const f = document.createElement("caption");
        f.appendChild(u), e.appendChild(f);
      }
    }
    e.appendChild(i), e.appendChild(c);
  }
  _addSortIcons(e) {
    const t = Array.from(e.querySelectorAll("thead th"));
    t.length !== 0 && t.forEach((s, o) => {
      if (s.querySelector("nys-button[part='sort-button']")) return;
      const r = s.textContent?.trim();
      if (!r) return;
      s.textContent = "";
      const i = document.createElement("nys-button");
      i.setAttribute("part", "sort-button"), i.setAttribute("variant", "ghost"), i.setAttribute("label", r), i.setAttribute("fullWidth", "true");
      const c = document.createElement("nys-icon");
      c.setAttribute("slot", "suffix-icon"), c.setAttribute("name", "height"), c.setAttribute("size", "24"), c.setAttribute("color", "var(--nys-color-text-weak, #4a4d4f)"), i.appendChild(c), i.addEventListener("nys-click", (d) => {
        d.stopPropagation(), this._onSortClick(o, e);
      }), s.appendChild(i);
    });
  }
  _updateSortIcons(e) {
    e.querySelectorAll("thead th").forEach((s, o) => {
      const r = s.querySelector("nys-button[part='sort-button']"), i = r?.querySelector(
        "nys-icon[slot='suffix-icon']"
      );
      if (!(!r || !i))
        if (o === this._sortColumn)
          switch (s.classList.add("nys-table__sortedcolumn"), this._sortDirection) {
            case "asc":
              i.setAttribute("name", "straight"), i.setAttribute("color", "var(--nys-color-ink, #1b1b1b)"), i.style.transform = "rotate(0deg)", s.setAttribute("aria-sort", "ascending");
              break;
            case "desc":
              i.setAttribute("name", "straight"), i.setAttribute("color", "var(--nys-color-ink, #1b1b1b)"), i.style.transform = "rotate(180deg)", s.setAttribute("aria-sort", "descending");
              break;
          }
        else
          s.classList.remove("nys-table__sortedcolumn"), i.setAttribute("name", "height"), i.setAttribute("color", "var(--nys-color-text-weak, #4a4d4f)"), i.style.transform = "", s.removeAttribute("aria-sort");
    });
  }
  _onSortClick(e, t) {
    const o = Array.from(t.querySelectorAll("thead th"))[e]?.querySelector("nys-button[part='sort-button']")?.getAttribute("label") ?? "", r = this._sortColumn !== e ? "asc" : this._sortDirection === "asc" ? "desc" : "asc";
    this._emitColumnSortEvent(
      e,
      o,
      r
    ) || (this._sortColumn = e, this._sortDirection = r, this._updateSortIcons(t), this._sortTable(t, e, this._sortDirection));
  }
  _sortTable(e, t, s) {
    const o = e.querySelector("tbody");
    if (!o) return;
    const r = Array.from(o.querySelectorAll("tr"));
    r.sort((i, c) => {
      const d = i.children[t]?.textContent?.trim() ?? "", u = c.children[t]?.textContent?.trim() ?? "", f = Number(d), y = Number(u);
      let b;
      return !isNaN(f) && !isNaN(y) ? b = f - y : b = d.localeCompare(u), s === "asc" ? b : -b;
    }), r.forEach((i) => o.appendChild(i)), this._updateSortedColumnStyles(e);
  }
  _updateSortedColumnStyles(e) {
    e.querySelectorAll("tbody tr").forEach((s) => {
      Array.from(s.children).forEach((o, r) => {
        r === this._sortColumn ? o.classList.add("nys-table__sortedcolumn") : o.classList.remove("nys-table__sortedcolumn");
      });
    });
  }
  downloadFile() {
    const e = document.createElement("a");
    e.href = this.download, e.download = this.download.split("/").pop() || "table-data.csv", document.body.appendChild(e), e.click(), document.body.removeChild(e);
  }
  /****************** Event Handlers ******************/
  /**
   * Dispatches the `nys-column-sort` custom event.
   *
   * @param columnIndex - Zero-based index of the sorted column.
   * @param columnLabel - The text label of the sorted column header.
   * @param sortDirection - The new sort direction: "asc", "desc", or "none".
   */
  _emitColumnSortEvent(e, t, s) {
    const o = new CustomEvent("nys-column-sort", {
      detail: { columnIndex: e, columnLabel: t, sortDirection: s },
      bubbles: !0,
      composed: !0,
      cancelable: !0
    });
    return this.dispatchEvent(o), o.defaultPrevented;
  }
  /****************** Render ******************/
  render() {
    return h`
      <div class="nys-table">
        <div class="table-container"></div>
      </div>
      ${this.download ? h` <nys-button
            id="${this.id}-download-button"
            label="Download table"
            aria-label=${this._captionText ? `Download ${this._captionText}` : "Download table"}
            size="sm"
            variant="outline"
            prefixIcon="download"
            @nys-click=${this.downloadFile}
          ></nys-button>` : ""}
      <slot style="display:none"></slot>
    `;
  }
};
tn.styles = w(sc);
let Se = tn;
et([
  a({ type: String, reflect: !0 })
], Se.prototype, "id");
et([
  a({ type: String, reflect: !0 })
], Se.prototype, "name");
et([
  a({ type: Boolean, reflect: !0 })
], Se.prototype, "striped");
et([
  a({ type: Boolean, reflect: !0 })
], Se.prototype, "sortable");
et([
  a({ type: Boolean, reflect: !0 })
], Se.prototype, "bordered");
et([
  a({ type: String, reflect: !0 })
], Se.prototype, "download");
et([
  $()
], Se.prototype, "_sortColumn");
et([
  $()
], Se.prototype, "_sortDirection");
et([
  $()
], Se.prototype, "_captionText");
customElements.get("nys-table") || customElements.define("nys-table", Se);
const ic = ':host{--_nys-textarea-width: 100%;--_nys-textarea-border-radius: var(--nys-radius-md, 4px);--_nys-textarea-border-width: var(--nys-border-width-sm, 1px);--_nys-textarea-border-color: var(--nys-color-neutral-400, #909395);--_nys-textarea-padding: var(--nys-space-200, 16px);--_nys-textarea-gap: var(--nys-space-50, 4px);--_nys-textarea-color: var(--nys-color-ink, #1b1b1b);--_nys-textarea-color--placeholder: var( --nys-color-text-weaker, var(--nys-color-neutral-500, #797c7f) );--_nys-textarea-outline-color--hover: var(--nys-color-neutral-900, #1b1b1b);--_nys-textarea-outline-width: var(--nys-border-width-sm, 1px);--_nys-textarea-outline-color--focus: var(--nys-color-focus, #004dd1);--_nys-textarea-background-color--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-textarea-border-color--disabled: var(--nys-color-neutral-200, #bec0c1);--_nys-textarea-color--disabled: var( --nys-color-text-disabled, var(--nys-color-neutral-200, #bec0c1) );--_nys-textarea-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-textarea-font-size: var(--nys-font-size-ui-md, 16px);--_nys-textarea-font-weight: var(--nys-font-weight-regular, 400);--_nys-textarea-line-height: var(--nys-font-lineheight-ui-md, 24px);--nys-textarea-letterspacing-ui: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) )}:host([width=sm]){--_nys-textarea-width: var(--nys-form-width-sm, 88px)}:host([width=md]){--_nys-textarea-width: var(--nys-form-width-md, 200px)}:host([width=lg]){--_nys-textarea-width: var(--nys-form-width-lg, 384px)}:host([width=full]){--_nys-textarea-width: 100%;flex:1}:host([showError]){--_nys-textarea-border-color: var(--nys-color-danger, #b52c2c)}:host([inverted]){--_nys-textarea-outline-color--focus: var(--nys-color-focus-reverse, #7aa5e7)}.nys-textarea{font-weight:var(--_nys-textarea-font-weight);font-family:var(--_nys-textarea-font-family);line-height:var(--_nys-textarea-line-height);letter-spacing:var(--nys-textarea-letterspacing-ui);color:var(--_nys-textarea-color);gap:var(--_nys-textarea-gap);display:flex;flex-direction:column}.nys-textarea__textarea{color:var(--_nys-textarea-color);font-size:var(--_nys-textarea-font-size);font-family:var(--_nys-textarea-font-family);border-radius:var(--_nys-textarea-border-radius);border:solid var(--_nys-textarea-border-color) var(--_nys-textarea-border-width);padding:var(--_nys-textarea-padding);width:var(--_nys-textarea-width);line-height:var(--_nys-textarea-line-height);max-width:var(--_nys-textarea-width);box-sizing:border-box}.nys-textarea__textarea::placeholder{color:var(--_nys-textarea-color--placeholder)}.nys-textarea__textarea.none{resize:none}.nys-textarea__textarea:hover:not(:disabled):not(:focus):not([readonly]){outline:solid var(--_nys-textarea-outline-width) var(--_nys-textarea-outline-color--hover);border-color:var(--_nys-textarea-outline-color--hover)}.nys-textarea__textarea:focus:not([readonly]){outline:solid var(--_nys-textarea-outline-width) var(--_nys-textarea-outline-color--focus);border-color:var(--_nys-textarea-outline-color--focus);caret-color:var(--_nys-textarea-outline-color--focus)}.nys-textarea__textarea:disabled,.nys-textarea__textarea:disabled::placeholder{background-color:var(--_nys-textarea-background-color--disabled);border-color:var(--_nys-textarea-border-color--disabled);color:var(--_nys-textarea-color--disabled);cursor:not-allowed}';
var ac = Object.defineProperty, K = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && ac(e, t, o), o;
};
let lc = 0;
const co = class co extends m {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.label = "", this.description = "", this.placeholder = "", this.value = "", this.disabled = !1, this.readonly = !1, this.required = !1, this.optional = !1, this.tooltip = "", this.inverted = !1, this.form = null, this.maxlength = null, this.width = "full", this.rows = 4, this.resize = "vertical", this.showError = !1, this.errorMessage = "", this._hasUserInteracted = !1, this._internals = this.attachInternals();
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-textarea-${Date.now()}-${lc++}`), this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this._setValue();
  }
  async updated(e) {
    if (await Promise.resolve(), e.has("value") && this._setValue(), e.has("rows") && (this.rows = this.rows ?? 4), e.has("readonly") || e.has("required")) {
      const t = this.shadowRoot?.querySelector("textarea");
      t && (t.required = this.required && !this.readonly);
    }
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    this._internals.setFormValue(this.value), this._manageRequire();
  }
  _manageRequire() {
    const e = this.shadowRoot?.querySelector("textarea");
    if (!e) return;
    const t = this.errorMessage || "This field is required";
    this.required && !this.value ? (this._internals.ariaInvalid = "true", this._internals.setValidity({ valueMissing: !0 }, t, e)) : (this._internals.ariaInvalid = "false", this._internals.setValidity({}), this._hasUserInteracted = !1);
  }
  _setValidityMessage(e = "") {
    const t = this.shadowRoot?.querySelector("textarea");
    t && (this.showError = !!e, this.errorMessage?.trim() && e !== "" && (e = this.errorMessage), this._internals.setValidity(
      e ? { customError: !0 } : {},
      e,
      t
    ));
  }
  _validate() {
    const e = this.shadowRoot?.querySelector("textarea");
    if (!e) return;
    let t = e.validationMessage;
    this._setValidityMessage(t);
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.value = "";
    const e = this.shadowRoot?.querySelector("textarea");
    e && (e.value = "", e.setAttribute("aria-invalid", "false")), this.showError = !1, this._internals.setValidity({}), this.requestUpdate();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  // This helper function is called to perform the element's native validation.
  checkValidity() {
    const e = this.shadowRoot?.querySelector("textarea");
    return e ? e.checkValidity() : !0;
  }
  _handleInvalid(e) {
    e.preventDefault(), this._hasUserInteracted = !0, this._validate();
    const t = this.shadowRoot?.querySelector("textarea");
    if (t) {
      const s = this._internals.form;
      s ? Array.from(s.elements).find(
        (i) => typeof i.checkValidity == "function" && !i.checkValidity()
      ) === this && t.focus() : t.focus();
    }
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  // Handle input event to check pattern validity
  _handleInput(e) {
    const t = e.target;
    this.value = t.value, this._internals.setFormValue(this.value), this._hasUserInteracted && this._validate(), this.dispatchEvent(
      new CustomEvent("nys-input", {
        detail: { id: this.id, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(
      new Event("nys-focus", { bubbles: !0, composed: !0 })
    );
  }
  // Handle blur event
  _handleBlur() {
    this._hasUserInteracted || (this._hasUserInteracted = !0), this._validate(), this.dispatchEvent(
      new Event("nys-blur", { bubbles: !0, composed: !0 })
    );
  }
  _handleSelect(e) {
    const t = e.target;
    this.value = t.value, this.dispatchEvent(
      new CustomEvent("nys-select", {
        detail: { id: this.id, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleSelectionChange(e) {
    const t = e.target;
    this.value = t.value, this.dispatchEvent(
      new CustomEvent("nys-selectionchange", {
        detail: { id: this.id, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return h`
      <div class="nys-textarea">
        <nys-label
          label=${this.label}
          description=${this.description}
          flag=${this.required && !this.readonly ? "required" : this.optional ? "optional" : ""}
          tooltip=${this.tooltip}
          ?inverted=${this.inverted}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <textarea
          class="nys-textarea__textarea ${this.resize}"
          name=${this.name}
          id=${this.id}
          .value=${this.value}
          ?disabled=${this.disabled}
          ?required=${this.required && !this.readonly}
          ?readonly=${this.readonly}
          aria-disabled=${g(this.disabled ? "true" : void 0)}
          aria-required=${g(this.required ? "true" : void 0)}
          aria-label=${g(this.label || void 0)}
          aria-description=${g(this.description || void 0)}
          placeholder=${g(
      this.placeholder ? this.placeholder : void 0
    )}
          maxlength=${g(this.maxlength ?? void 0)}
          .rows=${this.rows}
          form=${g(this.form || void 0)}
          @input=${this._handleInput}
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
          @select="${this._handleSelect}"
          @selectionchange="${this._handleSelectionChange}"
        ></textarea>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this._internals.validationMessage || this.errorMessage}
        ></nys-errormessage>
      </div>
    `;
  }
};
co.styles = w(ic), co.shadowRootOptions = {
  ...m.shadowRootOptions,
  delegatesFocus: !0
}, co.formAssociated = !0;
let B = co;
K([
  a({ type: String, reflect: !0 })
], B.prototype, "id");
K([
  a({ type: String, reflect: !0 })
], B.prototype, "name");
K([
  a({ type: String })
], B.prototype, "label");
K([
  a({ type: String })
], B.prototype, "description");
K([
  a({ type: String })
], B.prototype, "placeholder");
K([
  a({ type: String })
], B.prototype, "value");
K([
  a({ type: Boolean, reflect: !0 })
], B.prototype, "disabled");
K([
  a({ type: Boolean, reflect: !0 })
], B.prototype, "readonly");
K([
  a({ type: Boolean, reflect: !0 })
], B.prototype, "required");
K([
  a({ type: Boolean, reflect: !0 })
], B.prototype, "optional");
K([
  a({ type: String })
], B.prototype, "tooltip");
K([
  a({ type: Boolean, reflect: !0 })
], B.prototype, "inverted");
K([
  a({ type: String, reflect: !0 })
], B.prototype, "form");
K([
  a({ type: Number })
], B.prototype, "maxlength");
K([
  a({ type: String, reflect: !0 })
], B.prototype, "width");
K([
  a({ type: Number })
], B.prototype, "rows");
K([
  a({ type: String, reflect: !0 })
], B.prototype, "resize");
K([
  a({ type: Boolean, reflect: !0 })
], B.prototype, "showError");
K([
  a({ type: String })
], B.prototype, "errorMessage");
customElements.get("nys-textarea") || customElements.define("nys-textarea", B);
const cc = ':host{--_nys-textinput-width: 100%;--_nys-textinput-height: var(--nys-size-500, 40px);--_nys-textinput-border-radius: var(--nys-radius-md, 4px);--_nys-textinput-border-width: var(--nys-border-width-sm, 1px);--_nys-textinput-border-color: var(--nys-color-neutral-400, #909395);--_nys-textinput-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-textinput-color--placeholder: var( --nys-color-text-weaker, var(--nys-color-neutral-500, #797c7f) );--_nys-textinput-padding: var(--nys-space-100, 8px);--_nys-textinput-gap: var(--nys-space-50, 4px);--_nys-textinput-background-color: var( --nys-color-ink-reverse, var(--nys-color-white, #ffffff) );--_nys-textinput-outline-color--hover: var(--nys-color-neutral-900, #1b1b1b);--_nys-textinput-outline-width: var(--nys-border-width-sm, 1px);--_nys-textinput-outline-color--focus: var(--nys-color-focus, #004dd1);--_nys-textinput-background-color--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-textinput-border-color--disabled: var( --nys-color-neutral-200, #bec0c1 );--_nys-textinput-color--disabled: var( --nys-color-text-disabled, var(--nys-color-neutral-200, #bec0c1) );--_nys-textinput-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-textinput-font-size: var(--nys-font-size-ui-md, 16px);--_nys-textinput-font-weight: var(--nys-font-weight-regular, 400);--_nys-textinput-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-textinput-letter-spacing: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) )}:host([width=sm]){--_nys-textinput-width: var(--nys-form-width-sm, 88px)}:host([width=md]){--_nys-textinput-width: var(--nys-form-width-md, 200px)}:host([width=lg]){--_nys-textinput-width: var(--nys-form-width-lg, 384px)}:host([width=full]){--_nys-textinput-width: 100%;flex:1}:host([showError]){--_nys-textinput-border-color: var(--nys-color-danger, #b52c2c)}:host([inverted]){--_nys-textinput-outline-color--focus: var( --nys-color-focus-reverse, #7aa5e7 )}.nys-textinput{font-weight:var(--_nys-textinput-font-weight);font-family:var(--_nys-textinput-font-family);font-size:var(--_nys-textinput-font-size);line-height:var(--_nys-textinput-line-height);letter-spacing:var(--_nys-textinput-letter-spacing);color:var(--_nys-textinput-color);gap:var(--_nys-textinput-gap);display:flex;flex-direction:column}.nys-textinput__mask-overlay{position:absolute;margin:calc(var(--_nys-textinput-padding) + var(--_nys-textinput-border-width));color:var(--nys-color-text-weaker, #797c7f);display:inline;overflow:hidden;white-space:nowrap;font:inherit;letter-spacing:normal}.nys-textinput__input{color:var(--_nys-textinput-color);border-radius:var(--_nys-textinput-border-radius);border:solid var(--_nys-textinput-border-color) var(--_nys-textinput-border-width);outline:transparent solid var(--_nys-textinput-outline-width);padding:var(--_nys-textinput-padding);width:100%;height:var(--_nys-textinput-height);box-sizing:border-box;background-color:transparent;position:relative;font:inherit}.nys-textinput__input::placeholder{color:var(--_nys-textinput-color--placeholder)}.nys-textinput__buttoncontainer{width:var(--_nys-textinput-width);max-width:100%;display:flex}.nys-textinput__buttoncontainer.has-end-button .nys-textinput__input{border-start-end-radius:0;border-end-end-radius:0;border-inline-end:none}.nys-textinput__buttoncontainer.has-start-button .nys-textinput__input{border-start-start-radius:0;border-end-start-radius:0;border-inline-start:none}.nys-textinput__container{position:relative;display:flex;align-items:center;width:100%;background-color:var(--_nys-textinput-background-color);border-radius:var(--_nys-textinput-border-radius)}::slotted(nys-button){--_nys-button-height: var(--_nys-textinput-height);--_nys-button-border-radius: var(--_nys-textinput-border-radius);--_nys-button-background-color--disabled: var( --_nys-textinput-background-color--disabled );--_nys-button-border-color--disabled: var(--_nys-textinput-color--disabled);--_nys-button-color--disabled: var(--_nys-textinput-color--disabled);--_nys-button-border-width: var(--_nys-textinput-border-width);z-index:1}.nys-textinput__buttoncontainer.has-start-button ::slotted(nys-button){--_nys-button-border-radius: var(--_nys-textinput-border-radius) 0 0 var(--_nys-textinput-border-radius)}.nys-textinput__buttoncontainer.has-end-button ::slotted(nys-button){--_nys-button-border-radius: 0 var(--_nys-textinput-border-radius) var(--_nys-textinput-border-radius) 0}.eye-icon{position:absolute;right:var(--nys-space-50, 4px);top:50%;transform:translateY(-50%);cursor:pointer;color:var(--_nys-textinput-color--icon);--nys-button-background-color: var(--_nys-textinput-background-color);--nys-button-background-color--hover: var(--_nys-textinput-background-color);--nys-button-background-color--active: var(--_nys-textinput-background-color);--_nys-button-outline-focus: calc(var(--_nys-button-outline-width) * -1);--_nys-button-padding--y: var(--nys-space-50, 4px);--_nys-button-padding--x: var(--nys-space-50, 4px);--_nys-button-height: var(--nys-size-300, 32px);--_nys-button-width: var(--nys-size-400, 32px)}.nys-textinput__input:hover:not(:disabled):not(:focus):not([readonly]){outline-color:var(--_nys-textinput-outline-color--hover);border-color:var(--_nys-textinput-outline-color--hover)}.nys-textinput__input:focus:not([readonly]){outline-color:var(--_nys-textinput-outline-color--focus);border-color:var(--_nys-textinput-outline-color--focus);caret-color:var(--_nys-textinput-outline-color--focus)}.nys-textinput__input:disabled,.nys-textinput__input:disabled::placeholder,.nys-textinput__input:disabled+.eye-icon{background-color:var(--_nys-textinput-background-color--disabled);border-color:var(--_nys-textinput-border-color--disabled);color:var(--_nys-textinput-color--disabled);cursor:not-allowed}';
var dc = Object.defineProperty, I = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && dc(e, t, o), o;
};
let hc = 0;
const ho = class ho extends m {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.type = "text", this.label = "", this.description = "", this.placeholder = "", this.value = "", this.disabled = !1, this.readonly = !1, this.required = !1, this.optional = !1, this.tooltip = "", this.form = null, this.pattern = "", this.maxlength = null, this.ariaLabel = "", this.width = "full", this.step = null, this.min = null, this.max = null, this.inverted = !1, this.showError = !1, this.errorMessage = "", this.showPassword = !1, this._originalErrorMessage = "", this._hasUserInteracted = !1, this._maskPatterns = {
      tel: "(___) ___-____"
    }, this._internals = this.attachInternals();
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-textinput-${Date.now()}-${hc++}`), this._originalErrorMessage = this.errorMessage ?? "", this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid);
  }
  async firstUpdated() {
    this._setValue();
  }
  // Ensure the "width" property is valid after updates
  async updated(e) {
    if (e.has("value") && this._setValue(), e.has("disabled") && (this._validateButtonSlot("startButton"), this._validateButtonSlot("endButton")), e.has("type")) {
      const t = this._maskPatterns[this.type], s = this._inputEl;
      if (s)
        if (t)
          this.maxlength === null && (s.maxLength = t.length), this._updateOverlay(s.value, t);
        else {
          this.maxlength === null && s.removeAttribute("maxLength");
          const o = this.shadowRoot?.querySelector(
            ".nys-textinput__mask-overlay"
          );
          o && (o.textContent = "");
        }
    }
    if (e.has("readonly") || e.has("required")) {
      const t = this._inputEl;
      t && (t.required = this.required && !this.readonly);
    }
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    this._internals.setFormValue(this.value), this._manageRequire();
  }
  _manageRequire() {
    const e = this._inputEl;
    if (!e) return;
    const t = this.errorMessage || "This field is required";
    this.required && (!this.value || this.value?.trim() === "") ? (this._internals.ariaInvalid = "true", this._internals.setValidity({ valueMissing: !0 }, t, e)) : (this._internals.ariaInvalid = "false", this._internals.setValidity({}), this._hasUserInteracted = !1);
  }
  _setValidityMessage(e = "") {
    const t = this._inputEl;
    if (!t) return;
    this.showError = !!e, this._originalErrorMessage?.trim() && e !== "" ? this.errorMessage = this._originalErrorMessage : this.errorMessage = e, this._internals.ariaInvalid = this.showError ? "true" : "false";
    const s = e ? { customError: !0 } : {};
    this._internals.setValidity(s, this.errorMessage, t);
  }
  _validate() {
    const e = this._inputEl;
    if (!e) return;
    const t = e.validity;
    let s = "";
    t.valueMissing ? s = "This field is required" : t.typeMismatch ? s = "Invalid format for this type" : t.patternMismatch ? s = "Invalid format" : t.tooShort ? s = `Value is too short. Minimum length is ${e.minLength}` : t.tooLong ? s = `Value is too long. Maximum length is ${e.maxLength}` : t.rangeUnderflow ? s = `Value must be at least ${e.min}` : t.rangeOverflow ? s = `Value must be at most ${e.max}` : t.stepMismatch ? s = "Invalid step value" : s = e.validationMessage, this._setValidityMessage(s);
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.value = "";
    const e = this._inputEl;
    e && (e.value = ""), this._internals.setFormValue(""), this.showError = !1, this.errorMessage = "", this._internals.setValidity({}), this._internals.ariaInvalid = "false", this.showPassword = !1;
    const t = this._maskPatterns[this.type];
    t && this._updateOverlay("", t), this.requestUpdate();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  // This helper function is called to perform the element's native validation.
  checkValidity() {
    const e = this._inputEl;
    return e ? e.checkValidity() : !0;
  }
  _handleInvalid(e) {
    e.preventDefault(), this._hasUserInteracted = !0, this._validate();
    const t = this._inputEl;
    if (t) {
      const s = this._internals.form;
      s ? Array.from(s.elements).find(
        (i) => typeof i.checkValidity == "function" && !i.checkValidity()
      ) === this && t.focus() : t.focus();
    }
  }
  _togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  _updateOverlay(e, t) {
    const s = this.shadowRoot?.querySelector(
      ".nys-textinput__mask-overlay"
    );
    if (!s) return;
    const o = e, r = t.slice(o.length);
    s.textContent = o + r;
  }
  _applyMask(e, t) {
    const s = e.replace(/\D/g, "");
    let o = "";
    if (this.type === "tel")
      return s.length > 0 && (o = "(" + s.substring(0, 3)), s.length >= 4 && (o += ") " + s.substring(3, 6)), s.length > 6 && (o += "-" + s.substring(6, 10)), o;
    let r = 0;
    for (let i = 0; i < t.length; i++)
      if (t[i] === "_" || t[i].match(/[d9]/i))
        if (r < s.length)
          o += s[r++];
        else
          break;
      else
        o += t[i];
    return o;
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  // Handle input event to check pattern validity
  _handleInput(e) {
    const t = e.target;
    let s = t.value;
    const o = this._maskPatterns[this.type];
    o && (s = this._applyMask(s, o), t.value = s, this._updateOverlay(s, o)), this.value = s, this._internals.setFormValue(this.value), this._hasUserInteracted && this._validate(), this.dispatchEvent(
      new CustomEvent("nys-input", {
        detail: { id: this.id, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(
      new Event("nys-focus", { bubbles: !0, composed: !0 })
    );
  }
  // Handle blur event
  _handleBlur() {
    this._hasUserInteracted || (this._hasUserInteracted = !0), this._validate(), this.dispatchEvent(
      new Event("nys-blur", { bubbles: !0, composed: !0 })
    );
  }
  _validateButtonSlot(e) {
    const t = this.shadowRoot?.querySelector(
      'slot[name="' + e + '"]'
    ), s = this.shadowRoot?.querySelector(
      ".nys-textinput__buttoncontainer"
    );
    if (!t || !s) return;
    const o = t.assignedElements();
    let r = !1;
    o.forEach((i) => {
      i instanceof HTMLElement && i.tagName.toLowerCase() === "nys-button" && !r ? (r = !0, i.setAttribute("size", "sm"), i.setAttribute("variant", "primary"), this.disabled ? i.setAttribute("disabled", "true") : i.removeAttribute("disabled")) : (console.warn(
        "The '" + e + "' slot only accepts a single <nys-button> element. Removing invalid or extra node:",
        i
      ), i.remove());
    }), e === "startButton" ? s.classList.toggle("has-start-button", r) : e === "endButton" && s.classList.toggle("has-end-button", r);
  }
  render() {
    return h`
      <div class="nys-textinput">
        <nys-label
          id="${this.id}--label"
          label=${this.label}
          description=${this.description}
          flag=${this.required && !this.readonly ? "required" : this.optional ? "optional" : ""}
          tooltip=${this.tooltip}
          ?inverted=${this.inverted}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <div class="nys-textinput__buttoncontainer">
          <slot
            name="startButton"
            @slotchange=${() => this._validateButtonSlot("startButton")}
          ></slot>
          <div class="nys-textinput__container">
            <span class="nys-textinput__mask-overlay"></span>
            <input
              class="nys-textinput__input"
              type=${this.type === "password" ? this.showPassword ? "text" : "password" : this.type}
              name=${this.name}
              id=${this.id + "--native"}
              ?disabled=${this.disabled}
              ?required=${this.required && !this.readonly}
              ?readonly=${this.readonly}
              aria-label=${g(
      [this.label, this.description].filter(Boolean).join(" ") || this.ariaLabel || void 0
    )}
              aria-required=${this.required}
              aria-disabled="${this.disabled}"
              aria-invalid=${this.showError ? "true" : "false"}
              aria-errormessage=${this.id + "--error"}
              .value=${this.value}
              placeholder=${g(
      this.placeholder ? this.placeholder : void 0
    )}
              pattern=${g(this.pattern ? this.pattern : void 0)}
              min=${g(this.min !== null ? this.min : void 0)}
              maxlength=${g(
      this.maxlength !== null ? this.maxlength : void 0
    )}
              step=${g(this.step !== null ? this.step : void 0)}
              max=${g(this.max !== null ? this.max : void 0)}
              form=${g(this.form || void 0)}
              @input=${this._handleInput}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
            />
            ${this.type === "password" ? h` <nys-button
                  class="eye-icon"
                  id="password-toggle"
                  ariaLabel="password toggle"
                  variant="ghost"
                  size="sm"
                  @nys-click=${() => !this.disabled && this._togglePasswordVisibility()}
                >
                  <nys-icon
                    slot="suffix-icon"
                    size="2xl"
                    name=${this.showPassword ? "visibility_off" : "visibility"}
                  ></nys-icon>
                </nys-button>` : ""}
          </div>
          <slot
            name="endButton"
            @slotchange=${() => this._validateButtonSlot("endButton")}
          ></slot>
        </div>
        <nys-errormessage
          id=${this.id + "--error"}
          ?showError=${this.showError}
          errorMessage=${this.errorMessage}
        ></nys-errormessage>
      </div>
    `;
  }
};
ho.styles = w(cc), ho.shadowRootOptions = {
  ...m.shadowRootOptions,
  delegatesFocus: !0
}, ho.formAssociated = !0;
let D = ho;
I([
  a({ type: String, reflect: !0 })
], D.prototype, "id");
I([
  a({ type: String, reflect: !0 })
], D.prototype, "name");
I([
  a({ type: String, reflect: !0 })
], D.prototype, "type");
I([
  a({ type: String })
], D.prototype, "label");
I([
  a({ type: String })
], D.prototype, "description");
I([
  a({ type: String })
], D.prototype, "placeholder");
I([
  a({ type: String })
], D.prototype, "value");
I([
  a({ type: Boolean, reflect: !0 })
], D.prototype, "disabled");
I([
  a({ type: Boolean, reflect: !0 })
], D.prototype, "readonly");
I([
  a({ type: Boolean, reflect: !0 })
], D.prototype, "required");
I([
  a({ type: Boolean, reflect: !0 })
], D.prototype, "optional");
I([
  a({ type: String })
], D.prototype, "tooltip");
I([
  a({ type: String, reflect: !0 })
], D.prototype, "form");
I([
  a({ type: String })
], D.prototype, "pattern");
I([
  a({ type: Number })
], D.prototype, "maxlength");
I([
  a({ type: String })
], D.prototype, "ariaLabel");
I([
  a({ type: String, reflect: !0 })
], D.prototype, "width");
I([
  a({ type: Number })
], D.prototype, "step");
I([
  a({ type: Number })
], D.prototype, "min");
I([
  a({ type: Number })
], D.prototype, "max");
I([
  a({ type: Boolean, reflect: !0 })
], D.prototype, "inverted");
I([
  a({ type: Boolean, reflect: !0 })
], D.prototype, "showError");
I([
  a({ type: String })
], D.prototype, "errorMessage");
I([
  Go("input")
], D.prototype, "_inputEl");
I([
  $()
], D.prototype, "showPassword");
customElements.get("nys-textinput") || customElements.define("nys-textinput", D);
const uc = ':host{--_nys-toggle-width: var(--nys-font-size-8xl, 44px);--_nys-toggle-height: var(--nys-size-300, 24px);--_nys-toggle-border-radius: var(--nys-radius-round, 1776px);--_nys-toggle-border-width: var(--nys-border-width-md, 2px);--_nys-toggle-size--knob: var(--nys-font-size-lg, 18px);--_nys-toggle-margin--knob: calc( (var(--_nys-toggle-height) - var(--_nys-toggle-size--knob)) / 2 );--_nys-toggle-transform--translateX: calc( var(--_nys-toggle-width) - var(--_nys-toggle-size--knob) - var( --_nys-toggle-margin--knob ) - 2px );--_nys-toggle-gap: var(--nys-space-150, 12px);--_nys-toggle-transition-duration: .3s;--_nys-toggle-outline-color: var(--nys-color-focus, #004dd1);--_nys-toggle-outline-width: var(--nys-border-width-md, 2px);--_nys-toggle-background-color: var(--nys-color-neutral-500, #797c7f);--_nys-toggle-background-color--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-toggle-background-color--checked: var(--nys-color-theme, #154973);--_nys-toggle-background-color--hover: var(--nys-color-neutral-600, #62666a);--_nys-toggle-background-color--active: var(--nys-color-neutral-700, #4a4d4f);--_nys-toggle-background-color--checked--hover: var( --nys-color-theme-strong, #0e324f );--_nys-toggle-background-color--checked--active: var( --nys-color-theme-stronger, #081b2b );--_nys-toggle-color-ink-reverse: var(--nys-color-ink-reverse, #ffffff);--_nys-toggle-color--disabled: var(--nys-color-neutral-500, #797c7f)}:host([inverted]){--_nys-toggle-outline-color: var(--nys-color-focus-reverse, #7aa5e7)}.nys-toggle__content{display:flex;gap:var(--_nys-toggle-gap)}.nys-toggle__content nys-label{--_nys-label-font-weight: var(--nys-font-weight-regular, 400)}.nys-toggle__content:has(input:disabled) nys-label{--_nys-label-color: var(--_nys-toggle-color--disabled);cursor:not-allowed}.nys-toggle__toggle{position:relative;display:inline-block;width:var(--_nys-toggle-width);min-width:var(--_nys-toggle-width);max-width:var(--_nys-toggle-width);height:var(--_nys-toggle-height);min-height:var(--_nys-toggle-height);max-height:var(--_nys-toggle-height)}.nys-toggle__toggle input{opacity:0;width:0;height:0}.nys-toggle__toggle input:checked+.slider{background-color:var(--_nys-toggle-background-color--checked)}.nys-toggle__toggle input:checked+.slider:hover{background-color:var(--_nys-toggle-background-color--checked--hover)}.nys-toggle__toggle input:checked+.slider:hover .knob .toggle-icon{color:var(--_nys-toggle-background-color--checked--hover)}.nys-toggle__toggle input:checked+.slider .knob{transform:translate(var(--_nys-toggle-transform--translateX))}.nys-toggle__toggle input:checked+.slider .knob .toggle-icon{color:var(--_nys-toggle-background-color--checked)}.nys-toggle__toggle input:active:not(:disabled)+.slider{background-color:var(--_nys-toggle-background-color--active);outline:solid var(--_nys-toggle-outline-width) var(--_nys-toggle-outline-color)}.nys-toggle__toggle input:active:not(:disabled)+.slider .knob .toggle-icon{color:var(--_nys-toggle-background-color--active)}.nys-toggle__toggle input:active:not(:disabled)+.slider:checked{background-color:var(--_nys-toggle-background-color--checked--active)}.nys-toggle__toggle input:active:not(:disabled)+.slider:checked .knob .toggle-icon{color:var(--_nys-toggle-background-color--checked--active)}.nys-toggle__toggle input:focus+.slider{outline:solid var(--_nys-toggle-outline-width) var(--_nys-toggle-outline-color)}.nys-toggle__toggle input:disabled+.slider{background-color:var(--_nys-toggle-background-color--disabled);cursor:not-allowed}.nys-toggle__toggle input:disabled+.slider:hover{background-color:var(--_nys-toggle-background-color--disabled)}.nys-toggle__toggle input:disabled+.slider .knob .toggle-icon{color:var(--_nys-toggle-background-color--disabled)}.slider{position:absolute;cursor:pointer;border-radius:var(--_nys-toggle-border-radius);outline-offset:var(--_nys-toggle-border-width);width:var(--_nys-toggle-width);inset:0;background-color:var(--_nys-toggle-background-color);display:flex;align-items:center}.slider:hover{background-color:var(--_nys-toggle-background-color--hover)}.slider:hover .knob .toggle-icon{color:var(--_nys-toggle-background-color--hover)}.knob{content:"";height:var(--_nys-toggle-size--knob);width:var(--_nys-toggle-size--knob);margin:var(--_nys-toggle-margin--knob);border-radius:var(--nys-radius-round, 1776px);background-color:var(--_nys-toggle-color-ink-reverse);transition:all var(--_nys-toggle-transition-duration) cubic-bezier(.27,.2,.25,1.51);overflow:hidden;display:flex;align-items:center;justify-content:center}.toggle-icon{position:absolute;color:var(--_nys-toggle-background-color)}:host([size=sm]){--_nys-toggle-width: var(--nys-size-450, 36px);--_nys-toggle-height: var(--nys-size-250, 20px);--_nys-toggle-size--knob: var(--nys-size-200, 16px);--_nys-toggle-gap: var(--nys-space-100, 8px)}:host([size=sm]) .toggle-icon{font-size:var(--nys-font-size-body-xs, 12px)}@supports not (font-size: 1cap){:host([size=sm]) .toggle-icon{font-size:var(--nys-font-size-body-xs, 12px)}}:host([size=md]){--_nys-toggle-width: var(--nys-size-550, 44px);--_nys-toggle-height: var(--nys-size-300, 24px);--_nys-toggle-size--knob: var(--nys-size-250, 20px)}:host([size=md]) .toggle-icon{font-size:var(--nys-font-size-body-sm, 14px)}@supports not (font-size: 1cap){:host([size=md]) .toggle-icon{font-size:calc(var(--nys-font-size-body-sm, 14px) - 1px)}}@media(prefers-reduced-motion:reduce){:host{--toggle-transition-duration: 0s}}';
var pc = Object.defineProperty, Pe = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && pc(e, t, o), o;
};
let yc = 0;
const uo = class uo extends m {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.value = "", this.label = "", this.description = "", this.form = null, this.checked = !1, this.disabled = !1, this.noIcon = !1, this.inverted = !1, this.size = "md", this._internals = this.attachInternals();
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-toggle-${Date.now()}-${yc++}`);
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  // Update the internals whenever `checked` or `value` changes.
  updated(e) {
    (e.has("checked") || e.has("value")) && this._internals.setFormValue(this.checked ? this.value : null);
  }
  formResetCallback() {
    this.checked = !1, this._internals.setFormValue(this.checked ? this.value : null), this.requestUpdate();
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _emitChangeEvent() {
    this.dispatchEvent(
      new CustomEvent("nys-change", {
        detail: { id: this.id, checked: this.checked },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(
      new Event("nys-focus", { bubbles: !0, composed: !0 })
    );
  }
  // Handle blur event
  _handleBlur() {
    this.dispatchEvent(
      new Event("nys-blur", { bubbles: !0, composed: !0 })
    );
  }
  _handleClick() {
    this.disabled || (this.checked = !this.checked, this._emitChangeEvent());
  }
  _handleSliderClick(e) {
    e.stopPropagation(), this._handleClick();
  }
  _handleKeyDown(e) {
    !this.disabled && (e.key === " " || e.key === "Enter") && (e.preventDefault(), this.checked = !this.checked, this._emitChangeEvent());
  }
  render() {
    return h`
      <div class="nys-toggle">
        <div class="nys-toggle__content">
          <div class="nys-toggle__toggle">
            <input
              id=${this.id}
              type="checkbox"
              name="${g(this.name ? this.name : void 0)}"
              .value=${this.value}
              form=${g(this.form || void 0)}
              .checked=${this.checked}
              ?disabled=${this.disabled}
              role="switch"
              aria-checked="${this.checked ? "true" : "false"}"
              aria-disabled="${this.disabled ? "true" : "false"}"
              aria-label="${this.label || "Toggle switch"}"
              @click=${this._handleClick}
              @focus=${this._handleFocus}
              @blur=${this._handleBlur}
              @keydown=${this._handleKeyDown}
            />
            <span class="slider" @click=${this._handleSliderClick}>
              <div class="knob">
                ${this.noIcon ? "" : h`<nys-icon
                      class="toggle-icon"
                      name="${this.checked ? "check" : "close"}"
                      size="2xl"
                    ></nys-icon>`}
              </div>
            </span>
          </div>
          ${this.label && h`<nys-label
            label=${this.label}
            description=${g(this.description || void 0)}
            ?inverted=${this.inverted}
            @nys-label-click=${this._handleClick}
          >
            <slot name="description" slot="description"
              >${this.description}</slot
            >
          </nys-label> `}
        </div>
      </div>
    `;
  }
};
uo.styles = w(uc), uo.shadowRootOptions = {
  ...m.shadowRootOptions,
  delegatesFocus: !0
}, uo.formAssociated = !0;
let fe = uo;
Pe([
  a({ type: String, reflect: !0 })
], fe.prototype, "id");
Pe([
  a({ type: String, reflect: !0 })
], fe.prototype, "name");
Pe([
  a({ type: String })
], fe.prototype, "value");
Pe([
  a({ type: String })
], fe.prototype, "label");
Pe([
  a({ type: String })
], fe.prototype, "description");
Pe([
  a({ type: String, reflect: !0 })
], fe.prototype, "form");
Pe([
  a({ type: Boolean, reflect: !0 })
], fe.prototype, "checked");
Pe([
  a({ type: Boolean, reflect: !0 })
], fe.prototype, "disabled");
Pe([
  a({ type: Boolean })
], fe.prototype, "noIcon");
Pe([
  a({ type: Boolean, reflect: !0 })
], fe.prototype, "inverted");
Pe([
  a({ type: String, reflect: !0 })
], fe.prototype, "size");
customElements.get("nys-toggle") || customElements.define("nys-toggle", fe);
const fc = `:host{--_nys-tooltip-color: var(--nys-color-text-reverse, #ffffff);--_nys-tooltip-background-color: var(--nys-color-ink, #1b1b1b);--_nys-tooltip-border-radius: var(--nys-radius-md, 4px);--_nys-tooltip-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-tooltip-font-size: var(--nys-type-size-ui-sm, 14px);--_nys-tooltip-letter-spacing: var(--nys-font-letterspacing-ui-sm, .044px);--_nys-tooltip-line-height: var(--nys-font-lineheight-ui-sm, 24px)}.nys-tooltip__content{position:fixed;top:0;left:0;max-width:400px;width:max-content;max-height:120px;padding:var(--nys-space-50, 4px) var(--nys-space-100, 8px);background-color:var(--_nys-tooltip-background-color);border-radius:var(--_nys-tooltip-border-radius);cursor:auto;z-index:1}.nys-tooltip__inner{color:var(--_nys-tooltip-color);font-family:var(--_nys-tooltip-font-family);font-size:var(--_nys-tooltip-font-size);font-weight:400;line-height:var(--_nys-tooltip-line-height);letter-spacing:var(--_nys-tooltip-letter-spacing);white-space:normal;overflow-wrap:anywhere;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;line-clamp:4;-webkit-box-orient:vertical}.nys-tooltip__arrow{position:absolute;width:14px;height:6px;background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="6" viewBox="0 0 15 6" fill="none"><path d="M8.15079 5.44218C7.7763 5.76317 7.2237 5.76317 6.84921 5.44218L0.5 0H14.5L8.15079 5.44218Z" fill="%231B1B1B"/></svg>') no-repeat center}.nys-tooltip__content[active]{display:block}.fade-out{opacity:0;transition:opacity .2s ease-out}:host([position=top]) .nys-tooltip__arrow{top:100%;left:var(--arrow-offset-x, 50%);transform:translate(-50%)}:host([position=bottom]) .nys-tooltip__arrow{bottom:100%;left:var(--arrow-offset-x, 50%);transform:translate(-50%) rotate(180deg)}:host([position=left]) .nys-tooltip__arrow{left:100%;top:50%;transform:translateY(-50%) rotate(-90deg);margin-left:-4px}:host([position=right]) .nys-tooltip__arrow{right:100%;top:50%;transform:translateY(-50%) rotate(90deg);margin-right:-4px}:host([inverted]) .nys-tooltip__content{--_nys-tooltip-color: var(--nys-color-text, #1b1b1b);--_nys-tooltip-background-color: var(--nys-color-ink-reverse, #ffffff)}:host([inverted]) .nys-tooltip__arrow{background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="6" viewBox="0 0 15 6" fill="none"><path d="M8.15079 5.44218C7.7763 5.76317 7.2237 5.76317 6.84921 5.44218L0.5 0H14.5L8.15079 5.44218Z" fill="white"/></svg>') no-repeat center}@media(max-width:400px){.nys-tooltip__content{max-width:calc(100vw - 2rem)}}`;
var bc = Object.defineProperty, vc = Object.getOwnPropertyDescriptor, Vt = (n, e, t, s) => {
  for (var o = s > 1 ? void 0 : s ? vc(e, t) : e, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = (s ? i(e, t, o) : i(o)) || o);
  return s && o && bc(e, t, o), o;
};
let _c = 0;
const on = class on extends m {
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.text = "", this.inverted = !1, this.for = "", this._active = !1, this._userHasSetPosition = !1, this._originalUserPosition = null, this._internallyUpdatingPosition = !1, this._hideTimeout = null, this._position = null, this._resizeObserver = null, this._showTooltip = () => {
      if (this._active = !0, this._addScrollListeners(), this._userHasSetPosition && this._originalUserPosition && this._doesPositionFit(this._originalUserPosition)) {
        this.position = this._originalUserPosition, this.updateComplete.then(() => {
          this._userPositionTooltip();
        });
        return;
      }
      this._autoPositionTooltip();
    }, this._handleBlurOrMouseLeave = () => {
      const e = this._getReferenceElement(), t = this.shadowRoot?.querySelector(
        ".nys-tooltip__content"
      );
      e !== document.activeElement && (!e || !t || this._triggerFadeOut(t));
    }, this._cancelFadeOut = () => {
      const e = this.shadowRoot?.querySelector(
        ".nys-tooltip__content"
      ), t = this._getReferenceElement();
      if (!e || !t) return;
      const s = e.matches(":hover"), o = t.matches(":hover"), r = document.activeElement === t;
      !s && !o && !r || (this._hideTimeout && (clearTimeout(this._hideTimeout), this._hideTimeout = null), e.classList.remove("fade-out"), this._active = !0);
    }, this._handleScrollOrResize = () => {
      !this._active || this._hideTimeout || this._showTooltip();
    }, this._handleEscapeKey = (e) => {
      if (e.key === "Escape" && this._active) {
        this._active = !1, this._removeScrollListeners();
        const t = this.shadowRoot?.querySelector(
          ".nys-tooltip__content"
        );
        t && this._resetTooltipPositioningStyles(t);
      }
    };
  }
  get position() {
    return this._position;
  }
  set position(e) {
    const t = this._position;
    this._position = e, this.requestUpdate("position", t), this._internallyUpdatingPosition || (this._userHasSetPosition = e !== null, this._originalUserPosition = e);
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-tooltip-${Date.now()}-${_c++}`), window.addEventListener("keydown", this._handleEscapeKey);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    const e = this._getReferenceElement(), t = this.shadowRoot?.querySelector(".nys-tooltip__content");
    e && t && (e.removeEventListener("mouseenter", this._showTooltip), e.removeEventListener("mouseenter", this._cancelFadeOut), e.removeEventListener("mouseleave", this._handleBlurOrMouseLeave), e.removeEventListener("focusin", this._showTooltip), e.removeEventListener("focusout", this._handleBlurOrMouseLeave), t.removeEventListener("mouseenter", this._cancelFadeOut), t.removeEventListener("mouseleave", this._handleBlurOrMouseLeave)), window.removeEventListener("keydown", this._handleEscapeKey);
  }
  async firstUpdated() {
    await this.updateComplete;
    const e = this._getReferenceElement(), t = this.shadowRoot?.querySelector(".nys-tooltip__content");
    !e || !t || (this.applyInverseTransform(), this._applyTooltipPropToFormComponent(e), (e.tagName.toLowerCase() === "nys-button" || e.tagName.toLowerCase() === "nys-icon") && (this._applyFocusBehavior(e), e.addEventListener("mouseenter", this._showTooltip), e.addEventListener("mouseenter", this._cancelFadeOut), e.addEventListener("mouseleave", this._handleBlurOrMouseLeave), e.addEventListener("focusin", this._showTooltip), e.addEventListener("focusout", this._handleBlurOrMouseLeave), t.addEventListener("mouseenter", this._cancelFadeOut), t.addEventListener("mouseleave", this._handleBlurOrMouseLeave)));
  }
  updated(e) {
    super.updated(e);
    const t = this._getReferenceElement();
    t && (this._positionStartingBase(), e.has("text") && (this._applyTooltipPropToFormComponent(t), this._active && this.updateComplete.then(() => this._showTooltip())));
  }
  _triggerFadeOut(e) {
    !e || this._hideTimeout || (e.classList.add("fade-out"), this._hideTimeout = window.setTimeout(() => {
      this._active = !1, this._removeScrollListeners(), this._positionStartingBase(), this._resetTooltipPositioningStyles(e), e.classList.remove("fade-out"), this._hideTimeout = null;
    }, 200));
  }
  // Listen to window scroll so a focus tooltip can auto position even when user move across the page
  _addScrollListeners() {
    window.addEventListener("scroll", this._handleScrollOrResize, !0), this._resizeObserver = new ResizeObserver(() => {
      this._handleScrollOrResize();
    }), this._resizeObserver.observe(document.documentElement);
  }
  _removeScrollListeners() {
    window.removeEventListener("scroll", this._handleScrollOrResize, !0), this._resizeObserver?.disconnect(), this._resizeObserver = null;
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _getReferenceElement() {
    const e = this.for;
    if (!e) return null;
    let t = document.getElementById(e);
    if (t) return t;
    const s = (o) => {
      for (const r of Array.from(o.querySelectorAll("*"))) {
        const i = r.shadowRoot;
        if (i) {
          const c = i.getElementById(e);
          if (c) return c;
          const d = s(i);
          if (d) return d;
        }
      }
      return null;
    };
    return s(document);
  }
  // We need to pass `ariaLabel` or `ariaDescription` to the nys-components so they can announce both their label and the tooltip's text
  async _passAria(e) {
    const t = e.tagName.toLowerCase();
    t === "nys-icon" ? e.setAttribute("ariaLabel", `Hint: ${this.text}`) : t === "nys-button" && e.setAttribute("ariaDescription", `, Hint: ${this.text}`);
  }
  /**
   * In React, the reference element found is often the native HTML element within the nys-component.
   * Therefore, this function accounts for the closest NYS component ancestor that supports a tooltip prop.
   */
  _applyTooltipPropToFormComponent(e) {
    const t = e.tagName.toLowerCase();
    if (t.startsWith("nys-")) {
      if (t === "nys-button" || t === "nys-icon") {
        this._applyFocusBehavior(e), this._passAria(e);
        return;
      }
      "tooltip" in e && (e.tooltip = this.text);
    }
  }
  // Applies focus behavior to an otherwise non focus element (i.e. nys-icon is non focusable by default)
  async _applyFocusBehavior(e) {
    if (e.style.cursor = "pointer", e.tagName.toLowerCase() === "nys-icon") {
      "updateComplete" in e && await e.updateComplete;
      const s = e.shadowRoot?.querySelector("svg");
      s && s.setAttribute("tabindex", "0");
    }
  }
  /**
   * Checks if the tooltip fits inside the viewport on the given side of the trigger.
   * Used for auto-positioning. Ignores text overflow for now.
   */
  _doesPositionFit(e) {
    const t = this._getReferenceElement(), s = this.shadowRoot?.querySelector(".nys-tooltip__content");
    if (!t || !s || e == null) return;
    const o = t.getBoundingClientRect(), r = s.getBoundingClientRect(), i = 8, c = {
      top: o.top - i,
      left: o.left - i,
      bottom: window.innerHeight - o.bottom - i,
      right: window.innerWidth - o.right - i
    };
    return {
      top: c.top >= r.height,
      bottom: c.bottom >= r.height,
      left: c.left >= r.width,
      right: c.right >= r.width
    }[e];
  }
  _userPositionTooltip() {
    const e = this.shadowRoot?.querySelector(
      ".nys-tooltip__content"
    ), t = this._getReferenceElement();
    e && t && (this._positionTooltipElement(t, e, this.position), this._shiftTooltipIntoViewport(e));
  }
  // Calculates the best placement based on available space (flips placement if it doesn't fit)
  async _autoPositionTooltip() {
    const e = this._getReferenceElement(), t = this.shadowRoot?.querySelector(
      ".nys-tooltip__content"
    );
    if (!e || !t) return;
    const s = e.getBoundingClientRect(), o = 8, r = {
      top: s.top - o,
      left: s.left - o,
      bottom: window.innerHeight - s.bottom - o,
      right: window.innerWidth - s.right - o
    };
    let i = [
      "top",
      "bottom",
      "right",
      "left"
    ];
    if (this._userHasSetPosition && this._originalUserPosition) {
      const u = this._originalUserPosition;
      u === "left" ? i = ["left", "right", "top", "bottom"] : u === "right" ? i = ["right", "left", "top", "bottom"] : u === "top" ? i = ["top", "bottom", "right", "left"] : u === "bottom" && (i = ["bottom", "top", "right", "left"]);
    }
    for (const u of i)
      if (this._doesPositionFit(u)) {
        this._setInternalPosition(u), await this.updateComplete, this._positionTooltipElement(e, t, u), this._shiftTooltipIntoViewport(t);
        return;
      }
    let c = "top", d = r.top;
    for (const u of i)
      r[u] > d && (d = r[u], c = u);
    this._setInternalPosition(c), await this.updateComplete, this._positionTooltipElement(e, t, c), this._shiftTooltipIntoViewport(t);
  }
  _positionStartingBase() {
    const e = this.shadowRoot?.querySelector(
      ".nys-tooltip__content"
    );
    e && (e.style.top = "0px", e.style.left = "0px");
  }
  _positionTooltipElement(e, t, s) {
    const o = e.getBoundingClientRect(), r = t.getBoundingClientRect(), i = 8;
    let c = 0, d = 0;
    switch (s) {
      case "top":
        c = o.top - r.height - i, d = o.left + o.width / 2 - r.width / 2;
        break;
      case "bottom":
        c = o.bottom + i, d = o.left + o.width / 2 - r.width / 2;
        break;
      case "left":
        c = o.top + o.height / 2 - r.height / 2, d = o.left - r.width - i;
        break;
      case "right":
        c = o.top + o.height / 2 - r.height / 2, d = o.right + i;
        break;
      default:
        c = o.top - r.height - i, d = o.left + o.width / 2 - r.width / 2;
        break;
    }
    t.style.top = `${c}px`, t.style.left = `${d}px`;
  }
  // In some iframes (like Storybook's) or embedded containers , parent elements may have CSS transforms applied, creating a new coordinate context.
  // This function removes such transforms to prevent them from affecting tooltip positioning calculations.
  applyInverseTransform() {
    document.querySelectorAll('div[scale="1"]').forEach((e) => {
      e.style.transform = "none";
    });
  }
  _setInternalPosition(e) {
    this._internallyUpdatingPosition = !0, this.position = e, this._internallyUpdatingPosition = !1;
  }
  // Determines if text of tooltip over-extends outside of viewport edge and adjust tooltip for horizontal overflow
  _shiftTooltipIntoViewport(e) {
    const t = this._getReferenceElement();
    if (!t) return;
    const s = t.getBoundingClientRect(), o = e.getBoundingClientRect(), r = s.left + s.width / 2, i = o.left < 0, c = o.right > window.innerWidth;
    i ? (e.style.left = "10px", e.style.transform = "none") : c && (e.style.right = "0px", e.style.left = "auto", e.style.transform = "none");
    const d = e.getBoundingClientRect(), u = (r - d.left) / d.width, f = Math.max(0, Math.min(1, u)) * 100;
    e.style.setProperty("--arrow-offset-x", `${f}%`);
  }
  // Reposition tooltip back to original set position (e.g. top, left, bottom, right) to avoid positioning issue base on last position
  _resetTooltipPositioningStyles(e) {
    e.style.left = "", e.style.right = "", e.style.top = "", e.style.transform = "", e.style.removeProperty("--arrow-offset-x");
  }
  render() {
    return h`
      <div class="nys-tooltip__main">
        ${this.text?.trim() ? h`<div
              id=${this.id}
              class="nys-tooltip__content"
              role="tooltip"
              aria-hidden=${this._active && !this._hideTimeout ? "false" : "true"}
              ?active=${this._active}
              style="visibility: ${this._active ? "visible" : "hidden"}; "
            >
              <div class="nys-tooltip__inner">${this.text}</div>
              <span class="nys-tooltip__arrow"></span>
            </div>` : ""}
      </div>
    `;
  }
};
on.styles = w(fc);
let Qe = on;
Vt([
  a({ type: String, reflect: !0 })
], Qe.prototype, "id", 2);
Vt([
  a({ type: String })
], Qe.prototype, "text", 2);
Vt([
  a({ type: Boolean, reflect: !0 })
], Qe.prototype, "inverted", 2);
Vt([
  a({ type: String })
], Qe.prototype, "for", 2);
Vt([
  $()
], Qe.prototype, "_active", 2);
Vt([
  a({ type: String, reflect: !0 })
], Qe.prototype, "position", 1);
customElements.get("nys-tooltip") || customElements.define("nys-tooltip", Qe);
const gc = `<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
  <path d="M55.1158 7.50499L58.2905 12.6494V7.5189C58.2905 7.5189 58.6487 7.26356 59.5098 7.26356C60.3708 7.26356 60.7378 7.5189 60.7378 7.5189V16.4327C60.7378 16.4327 60.3942 16.689 59.5215 16.689C58.6487 16.689 58.3295 16.4605 58.3295 16.4605L55.1421 11.3171V16.4337C55.1421 16.4337 54.7848 16.69 53.9111 16.69C53.0374 16.69 52.7065 16.4337 52.7065 16.4337V7.51989C52.7065 7.51989 53.0384 7.26456 53.9248 7.26456C54.8112 7.26456 55.1148 7.50697 55.1148 7.50697L55.1158 7.50499Z" fill="#457AA5"/>
  <path d="M67.2209 12.5948H64.9063V14.8709H68.2538C68.2538 14.8709 68.5047 15.1531 68.5047 15.772C68.5047 16.391 68.2538 16.688 68.2538 16.688H62.4589V7.26257H67.9892C67.9892 7.26257 68.2538 7.54572 68.2538 8.17859C68.2538 8.81146 67.9892 9.09362 67.9892 9.09362H64.9063V10.7637H67.2209C67.2209 10.7637 67.4728 11.0598 67.4728 11.6787C67.4728 12.2977 67.2209 12.5948 67.2209 12.5948Z" fill="#457AA5"/>
  <path d="M71.4802 16.4327L68.9791 7.5189C68.9791 7.5189 69.3491 7.26356 70.2101 7.26356C71.0711 7.26356 71.4275 7.5189 71.4275 7.5189L72.6839 12.0434C72.7766 12.3802 72.8166 12.6365 72.8557 12.7845C72.8557 12.7428 72.9221 12.3663 73.0011 12.0573L74.0984 7.5189C74.0984 7.5189 74.5211 7.26356 75.1176 7.26356C75.7141 7.26356 76.084 7.5189 76.084 7.5189L77.3004 12.7845C77.3004 12.6623 77.3795 12.3255 77.4586 12.0573L78.756 7.5189C78.7686 7.5189 79.1132 7.26356 79.9596 7.26356C80.806 7.26356 81.1897 7.5189 81.1897 7.5189L78.6496 16.4327C78.6496 16.4327 78.2922 16.6751 77.4859 16.689C76.5468 16.689 76.2158 16.4327 76.2158 16.4327L75.223 12.2987C75.1449 11.9887 75.0902 11.6529 75.0785 11.5844L74.9184 12.2987L73.9266 16.4327C73.9266 16.4327 73.583 16.689 72.7092 16.689C71.8355 16.689 71.4802 16.4327 71.4802 16.4327Z" fill="#457AA5"/>
  <path d="M54.3485 19.2195L55.4331 21.1579C55.804 21.8176 56.0022 22.5587 56.0285 22.6521C56.0559 22.5587 56.2404 21.8315 56.624 21.1579L57.735 19.2195C57.735 19.2195 58.0659 18.9771 58.8723 18.9771C59.786 18.9771 60.1697 19.2861 60.1697 19.2861L57.2449 24.4295V28.1453C57.2449 28.1453 56.9013 28.4026 56.0276 28.4026C55.1539 28.4026 54.8239 28.1453 54.8239 28.1453V24.3898L51.8991 19.2871C51.8991 19.2871 52.2965 18.9781 53.2082 18.9781C53.9892 18.9781 54.3465 19.2205 54.3465 19.2205L54.3485 19.2195Z" fill="#457AA5"/>
  <path d="M64.6017 28.497C61.4788 28.497 60.117 26.6381 60.117 23.7033C60.117 20.7684 61.4798 18.8827 64.6017 18.8827C67.7237 18.8827 69.0865 20.7674 69.0865 23.7033C69.0865 26.6391 67.711 28.497 64.6017 28.497ZM64.6017 26.6778C65.9235 26.6778 66.6391 25.4667 66.6391 23.7033C66.6391 21.9398 65.9235 20.7138 64.6017 20.7138C63.2799 20.7138 62.5653 21.9398 62.5653 23.7033C62.5653 25.4667 63.2789 26.6778 64.6017 26.6778Z" fill="#457AA5"/>
  <path d="M72.844 28.1463C72.844 28.1463 72.4867 28.4036 71.6129 28.4036C70.7392 28.4036 70.4083 28.1463 70.4083 28.1463V19.3546C70.4083 19.3546 71.4011 18.8837 73.2266 18.8837C75.9913 18.8837 77.275 19.9607 77.275 21.8454C77.275 23.7301 75.8722 24.4563 75.7004 24.4712L77.8432 28.0936C77.5796 28.2675 76.8523 28.4026 76.3623 28.4026C75.7267 28.4026 75.225 28.1741 75.225 28.1741L73.6113 25.3068C73.5175 25.1041 73.3858 24.9561 73.1612 24.9561H72.844V28.1463ZM73.5322 20.7148C73.1349 20.7148 72.844 20.7952 72.844 20.7952V23.138H73.5049C74.4694 23.138 74.8413 22.4514 74.8413 21.9269C74.8413 21.2403 74.3786 20.7148 73.5322 20.7148Z" fill="#457AA5"/>
  <path d="M87.211 28.0787C87.211 28.0787 86.5901 28.4026 85.5836 28.4026C84.7236 28.4026 84.3663 28.1741 84.3663 28.1741L81.2317 23.8384V28.1463C81.2317 28.1463 80.9007 28.4036 80.027 28.4036C79.1533 28.4036 78.797 28.1463 78.797 28.1463V19.2344C78.797 19.2344 79.1533 18.9781 80.027 18.9781C80.9007 18.9781 81.2317 19.2344 81.2317 19.2344V23.4221L84.2618 19.2205C84.2618 19.2205 84.6182 18.9781 85.4782 18.9781C86.4701 18.9781 86.8684 19.3139 86.8684 19.3139L83.9045 23.4221L87.212 28.0797L87.211 28.0787Z" fill="#457AA5"/>
  <path d="M58.9806 31.3374C59.1515 32.1988 58.7014 32.8853 58.1987 33.0602C57.7096 32.7244 56.9296 32.4273 56.1096 32.4273C55.2895 32.4273 54.8122 32.7502 54.8122 33.2082C54.8122 33.6394 55.1958 33.7874 56.214 34.1252L57.4841 34.5415C58.8479 34.9985 59.6933 35.7 59.6933 37.1803C59.6933 38.8911 58.5823 40.2105 55.8831 40.2105C53.9912 40.2105 52.8256 39.5637 52.4029 39.1335C52.2711 38.5007 52.6137 37.7059 53.1057 37.4505C53.5284 37.7744 54.7848 38.3934 56.0676 38.3934C56.8359 38.3934 57.2596 38.1112 57.2596 37.5986C57.2596 37.2359 57.034 37.0064 56.5049 36.8306L54.3758 36.1719C53.2365 35.8073 52.3775 34.9737 52.3775 33.6126C52.3775 31.6732 53.6729 30.5973 56.0676 30.5973C57.5895 30.5973 58.4779 31.0145 58.9806 31.3374Z" fill="#457AA5"/>
  <path d="M60.3542 32.5227C60.3542 32.5227 60.1023 32.2534 60.1023 31.6067C60.1023 30.9599 60.3542 30.6906 60.3542 30.6906H67.5382C67.5382 30.6906 67.7901 30.9738 67.7901 31.6067C67.7901 32.2395 67.5382 32.5227 67.5382 32.5227H65.1562V39.8608C65.1562 39.8608 64.8136 40.1161 63.9525 40.1161C63.0915 40.1161 62.7088 39.8608 62.7088 39.8608V32.5227H60.3542Z" fill="#457AA5"/>
  <path d="M72.7502 30.9341L76.3232 39.8201C76.3232 39.8201 75.9659 40.1171 75.0658 40.1171C74.2321 40.1171 73.9032 39.8747 73.9032 39.8747L73.254 38.3258H69.8538L69.2446 39.8747C69.2446 39.8747 68.901 40.1171 68.081 40.1171C67.1819 40.1171 66.7972 39.8201 66.7972 39.8201L70.3702 30.9341C70.3702 30.9341 70.7002 30.6916 71.5592 30.6916C72.4183 30.6916 72.7502 30.9341 72.7502 30.9341ZM70.5674 36.5216H72.5394L71.8775 34.9051C71.7457 34.5822 71.5729 33.9226 71.5583 33.855C71.5329 33.9226 71.3337 34.5822 71.2156 34.9051L70.5674 36.5216Z" fill="#457AA5"/>
  <path d="M75.5949 32.5227C75.5949 32.5227 75.3431 32.2534 75.3431 31.6067C75.3431 30.9599 75.5949 30.6906 75.5949 30.6906H82.779C82.779 30.6906 83.0298 30.9738 83.0298 31.6067C83.0298 32.2395 82.779 32.5227 82.779 32.5227H80.397V39.8608C80.397 39.8608 80.0543 40.1161 79.1933 40.1161C78.3323 40.1161 77.9496 39.8608 77.9496 39.8608V32.5227H75.5949Z" fill="#457AA5"/>
  <path d="M88.9047 36.0228H86.5891V38.299H89.9356C89.9356 38.299 90.1875 38.5821 90.1875 39.2001C90.1875 39.8181 89.9356 40.1161 89.9356 40.1161H84.1408V30.6897H89.6711C89.6711 30.6897 89.9356 30.9728 89.9356 31.6057C89.9356 32.2385 89.6711 32.5217 89.6711 32.5217H86.5882V34.1908H88.9038C88.9038 34.1908 89.1547 34.4879 89.1547 35.1078C89.1547 35.7278 88.9038 36.0219 88.9038 36.0219L88.9047 36.0228Z" fill="#457AA5"/>
  <path d="M51.7107 54.9999C51.577 54.9999 51.4335 54.974 51.2939 54.8965C51.085 54.7803 50.9395 54.5876 50.8858 54.3551C50.8233 54.0868 50.8936 53.7868 51.082 53.5116L51.1426 53.4202C51.2041 53.3268 51.2685 53.2354 51.3407 53.1519C51.4218 53.0595 51.5047 52.995 51.5741 52.9493C51.5243 52.6691 51.5418 52.4267 51.5682 52.2061C51.5877 52.0233 51.6346 51.8683 51.6726 51.7451C51.6892 51.6925 51.7058 51.6388 51.7185 51.5812C51.8201 51.145 51.8855 50.7397 51.9206 50.3453C51.9528 49.9916 51.947 49.9846 51.8864 49.9061C51.7 49.6707 51.3847 49.5018 51.0498 49.3229C50.8878 49.2365 50.7286 49.1491 50.5754 49.0557C49.607 48.4536 48.6376 47.8505 47.6701 47.2465L47.3294 47.0339C47.2513 46.9862 47.1147 46.9156 46.9516 46.8282C45.8817 46.2659 45.172 45.8526 45.0539 45.2595C45.0363 45.173 44.9465 44.9644 44.884 44.864C44.8411 44.8611 44.7307 44.8521 44.6546 44.8471C44.3032 44.8183 43.7711 44.7726 43.3484 44.3196C43.2635 44.2272 43.1786 44.1408 43.1005 44.0583C42.5098 43.4443 42.0003 42.9148 41.9329 41.5993C41.9241 41.4275 41.9251 41.2506 41.928 41.0728C41.9339 40.5283 41.927 40.1836 41.7103 39.962C41.6078 39.8567 41.435 39.7862 41.2349 39.7037C40.9889 39.6034 40.7097 39.4881 40.45 39.2686C40.37 39.2 40.2792 39.1007 40.1776 38.9854C40.0712 38.8602 39.9082 38.6724 39.7969 38.6337C38.974 38.3436 37.986 38.3178 36.96 38.3178L3.07245 38.2909C2.85964 38.2909 2.66927 38.3138 2.48477 38.3347C2.07378 38.3823 1.60812 38.437 1.2313 38.0962C0.866192 37.7664 0.815429 37.2607 0.814452 36.8076L0.8125 34.3993C0.8125 34.2722 0.847644 34.147 0.913051 34.0387C1.22544 33.529 1.83265 33.2558 2.3686 33.0144C2.56872 32.924 2.77666 32.8316 2.88795 32.7571C3.17593 32.5623 3.43561 32.302 3.7109 32.0248C3.91688 31.8182 4.13068 31.6046 4.36887 31.4059C4.69786 31.1317 5.07078 30.931 5.43296 30.7372C5.74535 30.5703 6.03821 30.4124 6.24127 30.2395C6.38575 30.1173 6.49216 29.9146 6.61906 29.6792C6.75476 29.4238 6.90998 29.1337 7.15208 28.8804C7.41273 28.6081 7.7427 28.4194 8.03263 28.2535C8.69744 27.871 8.68182 27.8322 8.57736 27.5769C8.52855 27.4577 8.48072 27.3553 8.43972 27.2639C8.24447 26.8357 8.07754 26.4681 8.19078 25.7051C8.2025 25.6306 8.21616 25.5521 8.22983 25.4706C8.25619 25.3325 8.30305 25.0772 8.27571 25.0037C8.27571 25.0037 8.26204 24.9927 8.23471 24.9778C8.21128 24.9659 8.12928 24.9669 8.06875 24.9679C7.87448 24.9659 7.51914 24.9768 7.2497 24.6689C6.98124 24.3629 6.99686 23.9555 7.03982 23.6356C7.08179 23.3127 7.06032 23.1051 7.03982 22.9223C6.95684 22.1453 7.21358 21.7817 8.10097 21.424C10.7524 20.351 12.901 19.9884 14.8613 20.2805C14.9775 20.2974 15.1356 20.2656 15.3182 20.2269C15.5944 20.1702 15.9351 20.1017 16.312 20.1752L18.3952 20.5766C19.2475 20.7415 19.6653 20.9054 20.3047 21.4995C20.6327 21.8046 20.7655 21.7718 21.3327 21.5661C21.6168 21.4638 21.9399 21.3485 22.3323 21.2949C22.9727 21.2084 23.5731 21.2661 24.153 21.3227C24.4136 21.3475 24.6762 21.3734 24.9408 21.3843C25.2356 21.3952 25.6085 21.2561 25.9717 21.121C26.1318 21.0614 26.2889 21.0028 26.4412 20.9541C26.78 20.8468 27.0973 20.7991 27.4038 20.7514C27.5551 20.7266 27.7064 20.7037 27.8607 20.6729C27.8714 20.6531 27.8821 20.6332 27.8939 20.6113C27.9417 20.5249 27.9944 20.4345 28.0598 20.3411C28.3419 19.9497 28.7471 19.7003 29.0722 19.4966L29.2078 19.4122C29.5564 19.1916 29.8629 18.9879 30.105 18.7386C30.5423 18.2796 31.1232 18.3114 31.5108 18.3312C31.6455 18.3392 31.8495 18.3481 31.91 18.3223C32.1678 18.207 31.9413 17.3993 31.8065 16.9165C31.7119 16.5777 31.6299 16.2846 31.6133 16.0183C31.5664 15.2642 31.9764 14.7317 32.3064 14.3045C32.5651 13.9687 32.7213 13.7481 32.7164 13.5355C32.7164 13.4948 32.7027 13.4382 32.6851 13.3845C32.4587 13.4948 32.0955 13.6369 31.6796 13.4421C31.0129 13.1302 30.6468 12.0264 30.8508 11.3985C31.0197 10.8779 31.54 10.5421 31.9198 10.2957L32.0565 10.2053C32.3806 9.98471 32.7242 9.79792 33.0542 9.6181C33.5159 9.36873 33.9513 9.13227 34.2949 8.82726C34.4404 8.69711 34.5761 8.56994 34.7089 8.44376C35.0076 8.1626 35.3161 7.8715 35.6792 7.61319C35.7056 7.5188 35.728 7.34096 35.7437 7.22571C35.7729 7.00714 35.8022 6.78062 35.8803 6.5849C36.2513 5.64304 37.1592 4.90884 37.9597 4.25908C38.2252 4.04448 38.4771 3.84081 38.6743 3.65602C38.7992 3.53878 38.9222 3.42055 39.0452 3.30332C39.6388 2.73701 40.2509 2.15084 40.9967 1.68289C41.601 1.30536 42.3898 0.833439 43.1249 0.552274C44.0972 0.1807 44.5579 0.208518 45.4766 0.262168L45.6474 0.27111C47.3607 0.371455 49.1384 0.32476 50.8575 0.281045C51.7205 0.258194 52.5796 0.235343 53.4347 0.230376C53.6651 0.230376 54.0156 0.185667 54.3836 0.138972C55.6078 -0.0140291 56.994 -0.188888 57.7818 0.503592C58.1118 0.792705 58.2924 1.19806 58.3031 1.67594C58.311 2.05248 58.1567 2.33464 58.0435 2.54129C58.0064 2.60686 57.9527 2.7082 57.9458 2.74297C57.9488 2.73205 57.9849 2.78768 58.0103 2.82742C58.1362 3.01718 58.3686 3.37088 58.2748 3.89843C58.2397 4.10111 58.1811 4.3167 58.1216 4.53528C58.0464 4.81147 57.9693 5.09761 57.9624 5.31419C57.9498 5.69073 57.6335 5.99376 57.2703 5.97289C56.9013 5.95998 56.6104 5.64603 56.6231 5.26849C56.6367 4.89195 56.7392 4.50944 56.831 4.17264C56.8788 3.9948 56.9276 3.82094 56.9569 3.65502C56.9481 3.65502 56.9218 3.62323 56.8993 3.58746C56.791 3.42254 56.6065 3.14535 56.6065 2.73701C56.6065 2.36345 56.7607 2.08328 56.873 1.87862C56.9072 1.81702 56.9589 1.72462 56.9657 1.69084C56.9608 1.58354 56.9267 1.55274 56.9072 1.53685C56.5694 1.23979 55.2544 1.40372 54.5496 1.49313C54.1386 1.5438 53.752 1.59348 53.4435 1.59547C52.5971 1.60043 51.7439 1.62229 50.8907 1.64315C49.1442 1.68886 47.3382 1.73654 45.5722 1.63421L45.3985 1.62328C44.5345 1.57162 44.3022 1.55871 43.5964 1.82894C42.9618 2.07235 42.2101 2.5244 41.7006 2.84431C41.0699 3.23973 40.533 3.75338 39.9648 4.29683C39.8379 4.41804 39.712 4.53925 39.5831 4.65947C39.3479 4.87804 39.0794 5.09661 38.7953 5.32611C38.1237 5.87056 37.3642 6.48555 37.1231 7.09457C37.1065 7.14425 37.085 7.30221 37.0713 7.40753C37.0147 7.84666 36.9424 8.3931 36.5041 8.69016C36.1927 8.90277 35.9145 9.16704 35.6187 9.44523C35.4771 9.57935 35.3317 9.71546 35.1774 9.85257C34.7186 10.2629 34.1924 10.548 33.6838 10.8222C33.3675 10.9931 33.0698 11.1541 32.8033 11.3369C32.7554 11.3707 32.6978 11.4064 32.6373 11.4462C32.5114 11.5276 32.2332 11.7065 32.1346 11.8217C32.1424 11.8992 32.1726 12.0115 32.2117 12.1009C32.3757 12.0214 32.6041 11.924 32.8804 11.9459C33.6633 12.0135 34.0401 12.8937 34.0558 13.4988C34.0743 14.2191 33.677 14.7337 33.3587 15.145C33.0971 15.4868 32.9351 15.7074 32.9487 15.9319C32.9565 16.0511 33.0288 16.3114 33.0932 16.5419C33.3314 17.3933 33.7746 18.978 32.4479 19.5701C32.0965 19.7281 31.7314 19.7082 31.4375 19.6933C31.3126 19.6864 31.1046 19.6764 31.047 19.7023C30.7171 20.051 30.3227 20.3113 29.9166 20.5706L29.7692 20.663C29.5212 20.816 29.2654 20.976 29.1405 21.1488C29.1083 21.1935 29.0819 21.2412 29.0585 21.2859C28.9345 21.5085 28.7256 21.884 28.174 21.9993C27.9827 22.04 27.7943 22.0708 27.6059 22.0996C27.3364 22.1414 27.0807 22.1811 26.8386 22.2566C26.7087 22.2993 26.5711 22.35 26.4334 22.4017C25.9697 22.5745 25.4435 22.7732 24.8871 22.7474C24.5981 22.7355 24.3131 22.7087 24.027 22.6808C23.4989 22.6282 22.9981 22.5805 22.511 22.6481C22.2572 22.6828 22.0258 22.7653 21.7817 22.8537C21.1716 23.0733 20.3369 23.3733 19.4046 22.508C18.9927 22.1265 18.8267 22.049 18.1473 21.9178L16.065 21.5164C15.942 21.4936 15.775 21.5264 15.5818 21.5651C15.3289 21.6168 15.0136 21.6784 14.6719 21.6297C12.9508 21.3724 11.0218 21.7112 8.59689 22.6928C8.49829 22.7325 8.42703 22.7643 8.37431 22.7891C8.39579 22.9779 8.42312 23.2491 8.39091 23.6217C8.53343 23.6416 8.69353 23.6843 8.86047 23.7737C9.81228 24.2834 9.63461 25.256 9.5487 25.724C9.53601 25.7876 9.52528 25.8511 9.51551 25.9127C9.4628 26.2694 9.49501 26.3429 9.65511 26.6917C9.70392 26.798 9.75664 26.9162 9.81326 27.0543C10.3941 28.4681 9.28415 29.1039 8.68865 29.4447C8.46705 29.5719 8.23764 29.701 8.11268 29.8331C7.99944 29.9524 7.89987 30.1372 7.79541 30.3329C7.62945 30.6448 7.44104 30.9975 7.10522 31.2847C6.79088 31.5529 6.41894 31.7536 6.05871 31.9454C5.74144 32.1153 5.44077 32.2762 5.21623 32.464C5.02782 32.6219 4.84527 32.8048 4.65295 32.9985C4.34252 33.3085 4.02524 33.6294 3.62499 33.8976C3.41901 34.0347 3.17203 34.147 2.9104 34.2652C2.69661 34.3606 2.33443 34.5225 2.14992 34.6626L2.15383 36.8096C2.15383 36.8881 2.15578 36.9527 2.15871 37.0023C2.21533 36.9974 2.27586 36.9904 2.32662 36.9835C2.5287 36.9606 2.77959 36.9308 3.06952 36.9308L36.9581 36.9566C38.0573 36.9566 39.2141 36.9884 40.2304 37.3471C40.6755 37.5021 40.9801 37.8538 41.1812 38.0853C41.2281 38.1399 41.2681 38.1896 41.3052 38.2234C41.4018 38.3048 41.5551 38.3674 41.7328 38.441C42.0129 38.5562 42.3615 38.7003 42.6572 39.0043C43.2811 39.6411 43.2713 40.4469 43.2645 41.0927C43.2606 41.2417 43.2606 41.3897 43.2664 41.5328C43.3084 42.3326 43.5261 42.5581 44.0532 43.1055C44.1372 43.1929 44.2251 43.2853 44.3188 43.3847C44.3842 43.4542 44.5287 43.4701 44.761 43.491C45.0412 43.5138 45.3897 43.5417 45.6953 43.7751C46.0291 44.0275 46.2546 44.5888 46.3376 44.8809C46.5455 45.0846 47.2777 45.4711 47.5647 45.6211C47.7639 45.7264 47.9298 45.8158 48.0265 45.8754L48.3672 46.088C49.3346 46.6891 50.3011 47.2922 51.2705 47.8943C51.3993 47.9727 51.533 48.0463 51.6707 48.1188C52.0924 48.3443 52.5698 48.6006 52.9291 49.0567C53.3215 49.5544 53.2942 50.0045 53.259 50.4029C53.3156 50.2936 53.3781 50.1893 53.4513 50.0879C53.5841 49.8982 53.7393 49.7541 53.877 49.626C54.0136 49.4998 54.1073 49.4104 54.1396 49.3388C54.1132 49.2772 54.0527 49.1739 54.0117 49.1034C53.8487 48.8232 53.6271 48.4387 53.7315 47.9857C53.7725 47.8108 53.8789 47.6588 54.0283 47.5634C54.0849 47.5276 54.205 47.4591 54.3631 47.3717C54.5818 47.2495 55.1373 46.9405 55.475 46.71C54.9723 45.5913 55.1392 44.2163 55.2886 42.9843C55.3345 42.6038 55.3784 42.2451 55.3989 41.9222C55.4204 41.5467 55.7337 41.2606 56.1076 41.2834C56.4776 41.3063 56.7588 41.6301 56.7353 42.0057C56.7148 42.3693 56.667 42.7498 56.6182 43.1522C56.4776 44.3166 56.3165 45.637 56.833 46.3911C56.954 46.5669 56.994 46.7895 56.9452 47.0021C56.8417 47.4502 56.3898 47.7879 55.1958 48.4606C55.352 48.7308 55.5395 49.0904 55.4731 49.5167C55.4623 49.5812 55.4487 49.6428 55.4321 49.7015C55.766 49.5793 56.1154 49.464 56.4845 49.3577C57.8775 48.9543 59.3409 48.7745 61.225 48.7745C62.0587 48.7745 62.8006 48.5053 63.5874 48.2211C64.2103 47.9946 64.8546 47.7621 65.576 47.6508C66.1852 47.5555 66.5005 47.7562 66.7728 47.9688C66.8636 48.0403 66.93 48.09 67.0442 48.1357C67.3625 48.2619 67.7325 48.2211 68.1601 48.1754C68.5925 48.1277 69.0836 48.0731 69.5844 48.2042C69.8821 48.2837 70.09 48.5579 70.0861 48.8709C70.0744 50.0571 68.5076 50.5459 67.7549 50.7814L67.0384 51.0099C66.4985 51.1848 65.9567 51.3586 65.41 51.5176C65.1631 51.5881 64.918 51.6587 64.672 51.7223C64.3889 51.7948 64.099 51.9597 63.7944 52.1316C63.481 52.3094 63.1579 52.4922 62.786 52.6174C62.1426 52.83 61.4837 52.9413 60.6471 52.9761C60.4069 52.987 60.1746 53.0943 59.9295 53.2056C59.5674 53.3735 59.1154 53.5801 58.6107 53.4132C58.3949 53.3864 57.5534 53.6775 57.1502 53.8196C56.832 53.9289 56.5577 54.0242 56.3419 54.0759C55.598 54.2528 54.8415 54.3918 54.1103 54.527L53.5968 54.6223C53.1516 54.7058 52.7035 54.7922 52.2613 54.8926L52.2076 54.9085C52.0797 54.9482 51.9021 55.0038 51.7078 55.0038L51.7107 54.9999ZM53.0735 51.6746C53.0569 51.7471 53.0403 51.8196 53.0237 51.8941C53.0032 51.9806 52.9788 52.064 52.9544 52.1455C52.9281 52.2359 52.9066 52.3055 52.8988 52.3651C52.8793 52.5379 52.8773 52.6313 52.8978 52.7247C52.9495 52.9791 52.9388 53.1907 52.8949 53.3645C53.0482 53.3347 53.2024 53.3049 53.3566 53.2751L53.875 53.1808C54.5896 53.0486 55.3296 52.9125 56.0412 52.7436C56.1906 52.7078 56.4483 52.6194 56.7217 52.525C57.7721 52.1604 58.4994 51.9359 59.0295 52.1127C59.0646 52.1058 59.2559 52.0173 59.3828 51.9597C59.7001 51.8137 60.0945 51.6328 60.5924 51.611C61.3021 51.5812 61.8498 51.4908 62.372 51.3169C62.622 51.2345 62.8748 51.0914 63.1442 50.9374C63.5123 50.7298 63.892 50.5142 64.3469 50.3969C64.5793 50.3373 64.8136 50.2707 65.0459 50.2042C65.5789 50.0482 66.11 49.8773 66.6362 49.7064L67.1253 49.5514C66.9388 49.5246 66.7504 49.4779 66.56 49.4014C66.2672 49.2862 66.0836 49.1411 65.9616 49.0457C65.9313 49.0229 65.906 48.999 65.8757 48.9812C65.8737 48.9851 65.8405 48.9851 65.7781 48.9941C65.1845 49.0855 64.6281 49.2862 64.0394 49.4998C63.1794 49.8107 62.293 50.1326 61.2279 50.1326C59.4717 50.1326 58.1235 50.2966 56.8535 50.6642C55.7142 50.992 54.7868 51.3984 54.0166 51.9031C53.7901 52.0521 53.5001 52.0481 53.2776 51.8951C53.1917 51.8365 53.1214 51.76 53.0735 51.6716V51.6746Z" fill="#154973"/>
  <path d="M67.6348 51.8019C67.6348 51.8019 67.6173 51.782 67.6173 51.7303C67.6173 51.6787 67.6348 51.6588 67.6348 51.6588H68.5564C68.5564 51.6588 68.5749 51.6806 68.5749 51.7303C68.5749 51.78 68.5564 51.8019 68.5564 51.8019H68.1932V52.9205C68.1932 52.9205 68.1659 52.9404 68.0976 52.9404C68.0292 52.9404 67.998 52.9205 67.998 52.9205V51.8019H67.6348Z" fill="#154973"/>
  <path d="M69.4282 52.8659C69.4135 52.8748 69.3891 52.8858 69.3471 52.8858C69.3178 52.8858 69.2837 52.8798 69.27 52.8659L68.9889 52.1476C68.9723 52.1088 68.9459 52.0323 68.944 52.0214C68.944 52.0264 68.9371 52.1277 68.9332 52.1565L68.8815 52.9205C68.8815 52.9205 68.8561 52.9404 68.7858 52.9404C68.7155 52.9404 68.6862 52.9205 68.6862 52.9205L68.7839 51.6787C68.7839 51.6787 68.8112 51.6588 68.8776 51.6588C68.9518 51.6588 68.9781 51.6787 68.9781 51.6787L69.3042 52.5162L69.3471 52.6533C69.3481 52.6473 69.3774 52.5559 69.392 52.5162L69.7181 51.6787C69.7181 51.6787 69.7464 51.6588 69.8206 51.6588C69.886 51.6588 69.9124 51.6787 69.9124 51.6787L70.01 52.9205C70.01 52.9205 69.9807 52.9404 69.9104 52.9404C69.8401 52.9404 69.8167 52.9205 69.8167 52.9205L69.763 52.1546L69.7523 52.0194C69.7523 52.0194 69.722 52.1148 69.7093 52.1456L69.4282 52.8659Z" fill="#154973"/>
</svg>`, mc = ':host{--_nys-unavheader-padding--gutter: var(--nys-gutter-xs, 20px);--_nys-unavheader-background-color: var( --nys-color-surface, var(--nys-color-white, #ffffff) );--_nys-unavheader-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-unavheader-background-color--section-raised: var( --nys-color-surface-raised, var(--nys-color-neutral-10, #f6f6f6) );font-size:var(--nys-font-size-ui-md, 16px);font-weight:var(--nys-font-weight-semibold, 600);line-height:var(--nys-font-lineheight-ui-md, 24px);font-family:var(--nys-font-family-ui, var(--nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif))}.nys-unavheader{display:flex;flex-direction:column}.nys-unavheader>*{padding:0 var(--_nys-unavheader-padding--gutter)}.nys-unavheader__main.wrapper{background-color:var(--_nys-unavheader-background-color)}.nys-unavheader__main.content{display:flex;align-items:center;justify-content:space-between;gap:var(--nys-space-300, 24px);padding-top:var(--nys-space-100, 8px);padding-bottom:var(--nys-space-100, 8px)}.nys-unavheader__spacer{flex:1}.nys-unavheader__trustbar.wrapper{background-color:var(--nys-color-neutral-100, #d0d0ce);padding-top:var(--nys-space-100, 8px);padding-bottom:var(--nys-space-100, 8px)}.nys-unavheader__trustbar.wrapper>.content,.nys-unavheader__trustbar.wrapper>.content *{cursor:pointer}.nys-unavheader__trustbar.inline,.nys-unavheader__trustbar.inline #nys-unavheader__official{background-color:transparent;cursor:default}.nys-unavheader__trustbar>.content,.nys-unavheader__trustbar.inline{display:flex;align-items:center;gap:var(--nys-space-100, 8px);height:fit-content;font-size:var(--nys-font-size-ui-xs, 12px);font-weight:var(--nys-font-weight-regular, 400);line-height:var(--nys-font-lineheight-ui-xs, 20px);font-family:var(--nys-font-family-ui, var(--nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif))}a#nys-unavheader__logolink{outline-offset:var(--nys-space-2px, 2px)}.nys-unavheader__logo svg{vertical-align:top;height:var(--nys-size-500, 40px);width:auto}#nys-unavheader__know,#nys-unavheader__know--inline{width:max-content;display:flex;align-items:center;cursor:pointer;gap:var(--nys-space-50, 4px);--_nys-button-height: var(--nys-font-lineheight-ui-xs, 20px);--_nys-button-border-radius: var(--nys-radius-md, 4px);--_nys-button-padding--y: var(--nys-space-2px, 2px);--_nys-button-padding--x: var(--nys-space-50, 4px);--_nys-button-border-width: 0px;--_nys-button-text-decoration: underline;--nys-button-color: var(--nys-color-link, #004dd1);--nys-button-color--hover: var(--nys-color-link-strong, #003ba1);--nys-button-color--active: var(--nys-color-link-strongest, #002971);--nys-button-background-color--hover: var(--nys-color-transparent, #ffffff00);--nys-button-background-color--active: var( --nys-color-transparent, #ffffff00 );--_nys-button-font-size: var(--nys-font-size-ui-xs, 12px);--_nys-button-font-weight: var(--nys-font-weight-regular, 400);--_nys-button-line-height: var(--nys-font-lineheight-ui-xs, 20px);--_nys-button-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) )}.hide{display:none}.nys-unavheader__trustpanel.wrapper.show{background-color:var(--_nys-unavheader-background-color--section-raised);display:flex;padding-top:var(--nys-space-400, 32px);padding-bottom:var(--nys-space-400, 32px)}.nys-unavheader__messagewrapper{display:flex;gap:var(--nys-space-400, 32px)}.nys-unavheader__trustpanel.content{display:flex;flex-direction:row-reverse}.nys-unavheader__trustcontentmessage{flex:1;display:flex;flex-direction:column;gap:var(--nys-space-100, 8px);font-family:var(--nys-type-family-ui, "Proxima Nova");font-size:var(--nys-type-size-ui-sm, 14px);font-style:normal;font-weight:400;line-height:var(--nys-typography-font-lineheight-ui-sm, 24px);letter-spacing:var(--nys-typography-font-letterspacing-ui-sm, .044px)}.nys-unavheader__searchdropdown.wrapper{background-color:var(--_nys-unavheader-background-color--section-raised);padding-top:var(--nys-space-250, 20px);padding-bottom:var(--nys-space-250, 20px)}.nys-unavheader__trustpanel.wrapper>.content,.nys-unavheader__main.wrapper>.content,.nys-unavheader__trustbar>.content,.nys-unavheader__searchdropdown.wrapper>.content{max-width:1280px;margin:0 auto}.nys-unavheader__search{max-width:var(--nys-form-width-md, 200px);transition:max-width .5s ease;--_nys-textinput-gap: 0px}.nys-unavheader__search:focus{width:var(--nys-form-width-lg, 384px);max-width:var(--nys-form-width-lg, 384px)}#nys-unavheader__translate--desktop,#nys-unavheader__translate--mobile,#nys-unavheader__searchbutton{--nys-button-color: var(--nys-color-state-blue-700, #154973);--nys-button-color--hover: var(--nys-color-state-blue-700, #154973);--nys-button-color--active: var(--nys-color-state-blue-700, #154973);--_nys-button-border-width: 0px}.nys-unavheader__iconbutton{--_nys-button-width: var(--nys-size-400, 32px);--_nys-button-height: var(--nys-size-400, 32px);--_nys-button-padding--y: 0;--_nys-button-padding--x: 0}.nys-unavheader__translatewrapper{position:relative}.nys-unavheader__languagelist.show{position:absolute;display:flex;flex-direction:column;min-width:fit-content;width:max-content;z-index:99999;background-color:var(--_nys-unavheader-background-color--section-raised);color:var(--nys-color-state-blue-700, #154973);margin-top:var(--nys-space-150, 12px);right:0}.nys-unavheader__languagelink{--_nys-button-padding: var(--nys-space-200, 16px) var(--nys-space-250, 20px);--nys-button-color: var(--nys-color-state-blue-700, #154973);--nys-button-color--hover: var(--nys-color-state-blue-700, #154973);--nys-button-color--active: var(--nys-color-state-blue-700, #154973);--_nys-button-border-radius: 0;--_nys-button-justify-content: start}@media(min-width:0)and (max-width:479px){:host{--_nys-unavheader-padding--gutter: var(--nys-gutter-xs, 20px)}#nys-unavheader__know{--_nys-button-padding--x: 0px;--_nys-button-padding--y: 0px;--_nys-button-height: var(--nys-space-200, 16px)}.nys-unavheader__trustbar>.content{flex-direction:column;align-items:flex-start;gap:0;line-height:16px}.nys-unavheader__trustbar.wrapper{padding-top:var(--nys-space-50, 4px);padding-bottom:var(--nys-space-50, 4px)}.nys-unavheader__trustbar.inline{display:none}.nys-unavheader__messagewrapper{flex-direction:column}#nys-unavheader__translate--desktop,#nys-unavheader__searchbar{display:none}}@media(min-width:480px)and (max-width:767px){:host{--_nys-unavheader-padding--gutter: var(--nys-gutter-sm, 20px)}.nys-unavheader__trustbar.inline{display:none}.nys-unavheader__messagewrapper{flex-direction:column}#nys-unavheader__translate--desktop,#nys-unavheader__searchbar{display:none}}@media(min-width:768px)and (max-width:1023px){:host{--_nys-unavheader-padding--gutter: var(--nys-gutter-md, 32px)}.nys-unavheader__trustbar.wrapper,#nys-unavheader__translate--desktop,#nys-unavheader__searchbar{display:none}.nys-unavheader__trustpanel.wrapper.show{order:2}}@media(min-width:1024px)and (max-width:1279px){:host{--_nys-unavheader-padding--gutter: var(--nys-gutter-lg, 32px)}.nys-unavheader__trustbar.wrapper,#nys-unavheader__translate--mobile,#nys-unavheader__searchbutton[circle],.nys-unavheader__searchdropdown.wrapper{display:none}.nys-unavheader__languagelist.show{margin-top:var(--nys-space-100, 8px)}.nys-unavheader__trustpanel.wrapper.show{order:2}}@media(min-width:1280px){:host{--_nys-unavheader-padding--gutter: var(--nys-gutter-xl, 64px)}.nys-unavheader__trustbar.wrapper,#nys-unavheader__translate--mobile,#nys-unavheader__searchbutton[circle],.nys-unavheader__searchdropdown.wrapper{display:none}.nys-unavheader__languagelist.show{margin-top:var(--nys-space-100, 8px)}.nys-unavheader__trustpanel.wrapper.show{order:2}}';
var xc = Object.defineProperty, pt = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && xc(e, t, o), o;
};
const sn = class sn extends m {
  constructor() {
    super(...arguments), this.trustbarVisible = !1, this.searchDropdownVisible = !1, this.languageVisible = !1, this.isSearchFocused = !1, this.hideTranslate = !1, this.hideSearch = !1, this.searchUrl = "", this.languages = [
      { code: "en", label: "English" },
      { code: "es", label: "Español" },
      { code: "zh", label: "中文" },
      { code: "zh-traditional", label: "繁體中文" },
      { code: "yi", label: "יידיש" },
      { code: "ru", label: "Русский" },
      { code: "bn", label: "বাংলা" },
      { code: "ko", label: "한국어" },
      { code: "ht", label: "Kreyòl Ayisyen" },
      { code: "it", label: "Italiano" },
      { code: "ar", label: "العربية" },
      { code: "pl", label: "Polski" },
      { code: "fr", label: "Français" },
      { code: "ur", label: "اردو" }
    ];
  }
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _getNysLogo() {
    return new DOMParser().parseFromString(gc, "image/svg+xml").documentElement;
  }
  _toggleTrustbar(e) {
    if (this.trustbarVisible = !this.trustbarVisible, this.trustbarVisible && (this.languageVisible = !1, this.searchDropdownVisible = !1), e === "no focus") return;
    if (e === "nys-unavheader__know--inline" || !e) {
      const s = this.trustbarVisible ? "nys-unavheader__closetrustbar" : "nys-unavheader__know--inline";
      this.updateComplete.then(() => {
        this.shadowRoot?.getElementById(s)?.focus();
      });
    }
  }
  _toggleLanguageList() {
    this.languageVisible = !this.languageVisible, this.languageVisible && (this.trustbarVisible = !1, this.searchDropdownVisible = !1);
  }
  _toggleSearchDropdown() {
    this.searchDropdownVisible = !this.searchDropdownVisible, this.searchDropdownVisible && (this.trustbarVisible = !1, this.languageVisible = !1);
  }
  _handleLanguageSelect(e) {
    this.languageVisible = !1;
    const t = new CustomEvent("nys-language-select", {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      detail: { language: e }
    });
    if (this.dispatchEvent(t), !t.defaultPrevented)
      if (e.url)
        window.location.href = e.url;
      else {
        const s = e.code === "en" ? "" : `${e.code}.`;
        window.location.href = `https://${s}${window.location.hostname}`;
      }
  }
  _handleSearchFocus() {
    this.isSearchFocused = !0, this.trustbarVisible = !1, this.languageVisible = !1;
  }
  _handleSearchBlur() {
    this.isSearchFocused = !1;
  }
  _handleSearchKeyup(e) {
    if (e.key === "Escape" && (this._handleSearchBlur(), e.target.blur()), e.key === "Enter") {
      const t = e.target.value?.trim();
      t !== "" && this._handleSearch(t);
    }
  }
  _handleSearchButton(e) {
    const s = (this.shadowRoot?.getElementById(
      e
    )).value?.trim();
    s !== "" && this._handleSearch(s);
  }
  _handleSearch(e) {
    const t = new CustomEvent("nys-search-submit", {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      detail: { query: e }
    });
    this.dispatchEvent(t), t.defaultPrevented || (this.searchUrl ? window.location.href = `${this.searchUrl}${encodeURIComponent(e)}` : window.location.href = `https://search.its.ny.gov/search/search.html?q=${encodeURIComponent(e)}+inurl:${window.location.hostname}&site=default_collection`);
  }
  render() {
    return h`
      <header class="nys-unavheader">
        <div
          class="nys-unavheader__trustbar wrapper"
          @click="${(e) => {
      e.target.closest("nys-button") || this._toggleTrustbar("no focus");
    }}"
        >
          <div class="content">
            <label id="nys-unavheader__official"
              >An official website of New York State</label
            >
            <nys-button
              id="nys-unavheader__know"
              label="Here's how you know"
              variant="ghost"
              size="sm"
              @nys-click="${(e) => {
      e.preventDefault(), e.stopPropagation(), this._toggleTrustbar("nys-unavheader__know");
    }}"
            >
              <nys-icon
                slot="suffix-icon"
                size="12"
                name="${this.trustbarVisible ? "chevron_up" : "chevron_down"}"
              ></nys-icon>
            </nys-button>
          </div>
        </div>
        <div
          class="nys-unavheader__trustpanel wrapper ${this.trustbarVisible ? "show" : "hide"}"
        >
          <div class="nys-unavheader__trustpanel content">
            <nys-button
              id="nys-unavheader__closetrustbar"
              class="nys-unavheader__iconbutton"
              variant="ghost"
              circle
              icon="close"
              size="sm"
              ariaLabel="Close this notice"
              aria-expanded="${this.trustbarVisible}"
              @nys-click="${() => this._toggleTrustbar("nys-unavheader__know--inline")}"
            ></nys-button>
            <div class="nys-unavheader__messagewrapper">
              <div
                class="nys-unavheader__trustcontentmessage"
                id="trust_official"
              >
                <nys-icon size="3xl" name="account_balance_filled"></nys-icon>
                <label><b>Official websites use ny.gov</b></label>
                <label
                  >A <b>ny.gov</b> website belongs to an official New York State
                  government organization.</label
                >
              </div>
              <div
                class="nys-unavheader__trustcontentmessage"
                id="trust_secure"
              >
                <nys-icon size="3xl" name="lock_filled"></nys-icon>
                <label><b>Secure ny.gov websites use HTTPS</b></label>
                <label
                  >A <b>lock icon</b> or <b>https://</b> means you've safely
                  connected to the ny.gov website. Share sensitive information
                  only on official, secure websites.</label
                >
              </div>
            </div>
          </div>
        </div>
        <div class="nys-unavheader__main wrapper" id="nys-universal-navigation">
          <div class="nys-unavheader__main content">
            <a
              href="https://www.ny.gov"
              id="nys-unavheader__logolink"
              aria-label="Visit the NY.gov homepage"
            >
              <div class="nys-unavheader__logo">${this._getNysLogo()}</div></a
            >
            <div class="nys-unavheader__trustbar inline">
              <label id="nys-unavheader__official"
                >An official website of New York State</label
              >
              <nys-button
                id="nys-unavheader__know--inline"
                label="Here's how you know"
                aria-controls="nys-unavheader__closetrustbar"
                aria-expanded="${this.trustbarVisible}"
                variant="ghost"
                size="sm"
                @nys-click="${() => this._toggleTrustbar("nys-unavheader__know--inline")}"
              >
                <nys-icon
                  slot="suffix-icon"
                  size="12"
                  name="${this.trustbarVisible ? "chevron_up" : "chevron_down"}"
                ></nys-icon>
              </nys-button>
            </div>
            <div class="nys-unavheader__spacer"></div>
            ${this.hideTranslate ? null : h`<div class="nys-unavheader__translatewrapper">
                  <nys-button
                    variant="ghost"
                    circle
                    ariaLabel="Translate"
                    aria-expanded="${this.languageVisible}"
                    id="nys-unavheader__translate--mobile"
                    class="nys-unavheader__iconbutton"
                    @nys-click=${this._toggleLanguageList}
                  >
                    <nys-icon
                      slot="circle-icon"
                      name="language"
                      size="16"
                    ></nys-icon>
                  </nys-button>
                  ${this.isSearchFocused ? null : h`
                        <nys-button
                          variant="ghost"
                          label="Translate"
                          aria-expanded="${this.languageVisible}"
                          size="sm"
                          prefixIcon="language"
                          suffixIcon=${this.languageVisible ? "chevron_up" : "chevron_down"}
                          id="nys-unavheader__translate--desktop"
                          @nys-click="${this._toggleLanguageList}"
                        ></nys-button>
                      `}
                  <div
                    class="nys-unavheader__languagelist ${this.languageVisible ? "show" : "hide"}"
                  >
                    ${this.languages.map(
      (e) => h`<nys-button
                          variant="ghost"
                          fullWidth
                          label="${e.label}"
                          class="nys-unavheader__languagelink"
                          @click="${() => this._handleLanguageSelect(e)}"
                        ></nys-button>`
    )}
                  </div>
                </div>`}
            ${this.hideSearch ? null : h`
                  <nys-button
                    variant="ghost"
                    circle
                    icon="search"
                    ariaLabel="Search"
                    aria-expanded="${this.searchDropdownVisible}"
                    id="nys-unavheader__searchbutton"
                    class="nys-unavheader__iconbutton"
                    @nys-click=${this._toggleSearchDropdown}
                  >
                    <nys-icon
                      slot="circle-icon"
                      name="search"
                      size="16"
                    ></nys-icon>
                  </nys-button>
                  <nys-textinput
                    class="nys-unavheader__search"
                    id="nys-unavheader__searchbar"
                    placeholder="Search"
                    type="search"
                    @focus="${this._handleSearchFocus}"
                    @blur="${this._handleSearchBlur}"
                    @keyup="${this._handleSearchKeyup}"
                  >
                    <nys-button
                      id="nys-unavheader__searchbar--button"
                      slot="endButton"
                      type="submit"
                      prefixIcon="search"
                      ariaLabel="Search"
                      @nys-click=${() => {
      this._handleSearchButton("nys-unavheader__searchbar");
    }}
                    ></nys-button>
                  </nys-textinput>
                `}
          </div>
        </div>
        <div
          class="nys-unavheader__searchdropdown wrapper ${this.searchDropdownVisible ? "show" : "hide"}"
        >
          <div class="content">
            <nys-textinput
              class="nys-unavheader__search"
              id="nys-unavheader__searchbardropdown"
              placeholder="Search"
              type="search"
              @focus="${this._handleSearchFocus}"
              @blur="${this._handleSearchBlur}"
              @keyup="${this._handleSearchKeyup}"
            >
              <nys-button
                id="nys-unavheader__searchbardropdown--button"
                slot="endButton"
                type="submit"
                prefixIcon="search"
                ariaLabel="Search"
                @nys-click=${() => {
      this._handleSearchButton("nys-unavheader__searchbardropdown");
    }}
              ></nys-button
            ></nys-textinput>
          </div>
        </div>
      </header>
    `;
  }
};
sn.styles = w(mc);
let Oe = sn;
pt([
  a({ type: Boolean })
], Oe.prototype, "trustbarVisible");
pt([
  a({ type: Boolean })
], Oe.prototype, "searchDropdownVisible");
pt([
  a({ type: Boolean })
], Oe.prototype, "languageVisible");
pt([
  a({ type: Boolean })
], Oe.prototype, "isSearchFocused");
pt([
  a({ type: Boolean })
], Oe.prototype, "hideTranslate");
pt([
  a({ type: Boolean })
], Oe.prototype, "hideSearch");
pt([
  a({ type: String })
], Oe.prototype, "searchUrl");
pt([
  a({ type: Array })
], Oe.prototype, "languages");
customElements.get("nys-unavheader") || customElements.define("nys-unavheader", Oe);
const wc = `<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
  <path d="M55.1158 7.50499L58.2905 12.6494V7.5189C58.2905 7.5189 58.6487 7.26356 59.5098 7.26356C60.3708 7.26356 60.7378 7.5189 60.7378 7.5189V16.4327C60.7378 16.4327 60.3942 16.689 59.5215 16.689C58.6487 16.689 58.3295 16.4605 58.3295 16.4605L55.1421 11.3171V16.4337C55.1421 16.4337 54.7848 16.69 53.9111 16.69C53.0374 16.69 52.7065 16.4337 52.7065 16.4337V7.51989C52.7065 7.51989 53.0384 7.26456 53.9248 7.26456C54.8112 7.26456 55.1148 7.50697 55.1148 7.50697L55.1158 7.50499Z" fill="white"/>
  <path d="M67.2209 12.5948H64.9063V14.8709H68.2538C68.2538 14.8709 68.5047 15.1531 68.5047 15.772C68.5047 16.391 68.2538 16.688 68.2538 16.688H62.4589V7.26257H67.9892C67.9892 7.26257 68.2538 7.54572 68.2538 8.17859C68.2538 8.81146 67.9892 9.09362 67.9892 9.09362H64.9063V10.7637H67.2209C67.2209 10.7637 67.4728 11.0598 67.4728 11.6787C67.4728 12.2977 67.2209 12.5948 67.2209 12.5948Z" fill="white"/>
  <path d="M71.4802 16.4327L68.9791 7.5189C68.9791 7.5189 69.3491 7.26356 70.2101 7.26356C71.0711 7.26356 71.4275 7.5189 71.4275 7.5189L72.6839 12.0434C72.7766 12.3802 72.8166 12.6365 72.8557 12.7845C72.8557 12.7428 72.9221 12.3663 73.0011 12.0573L74.0984 7.5189C74.0984 7.5189 74.5211 7.26356 75.1176 7.26356C75.7141 7.26356 76.084 7.5189 76.084 7.5189L77.3004 12.7845C77.3004 12.6623 77.3795 12.3255 77.4586 12.0573L78.756 7.5189C78.7686 7.5189 79.1132 7.26356 79.9596 7.26356C80.806 7.26356 81.1897 7.5189 81.1897 7.5189L78.6496 16.4327C78.6496 16.4327 78.2922 16.6751 77.4859 16.689C76.5468 16.689 76.2158 16.4327 76.2158 16.4327L75.223 12.2987C75.1449 11.9887 75.0902 11.6529 75.0785 11.5844L74.9184 12.2987L73.9266 16.4327C73.9266 16.4327 73.583 16.689 72.7092 16.689C71.8355 16.689 71.4802 16.4327 71.4802 16.4327Z" fill="white"/>
  <path d="M54.3485 19.2195L55.4331 21.1579C55.804 21.8176 56.0022 22.5587 56.0285 22.6521C56.0559 22.5587 56.2404 21.8315 56.624 21.1579L57.735 19.2195C57.735 19.2195 58.0659 18.9771 58.8723 18.9771C59.786 18.9771 60.1697 19.2861 60.1697 19.2861L57.2449 24.4295V28.1453C57.2449 28.1453 56.9013 28.4026 56.0276 28.4026C55.1539 28.4026 54.8239 28.1453 54.8239 28.1453V24.3898L51.8991 19.2871C51.8991 19.2871 52.2965 18.9781 53.2082 18.9781C53.9892 18.9781 54.3465 19.2205 54.3465 19.2205L54.3485 19.2195Z" fill="white"/>
  <path d="M64.6017 28.497C61.4788 28.497 60.117 26.6381 60.117 23.7033C60.117 20.7684 61.4798 18.8827 64.6017 18.8827C67.7237 18.8827 69.0865 20.7674 69.0865 23.7033C69.0865 26.6391 67.711 28.497 64.6017 28.497ZM64.6017 26.6778C65.9235 26.6778 66.6391 25.4667 66.6391 23.7033C66.6391 21.9398 65.9235 20.7138 64.6017 20.7138C63.2799 20.7138 62.5653 21.9398 62.5653 23.7033C62.5653 25.4667 63.2789 26.6778 64.6017 26.6778Z" fill="white"/>
  <path d="M72.844 28.1463C72.844 28.1463 72.4867 28.4036 71.6129 28.4036C70.7392 28.4036 70.4083 28.1463 70.4083 28.1463V19.3546C70.4083 19.3546 71.4011 18.8837 73.2266 18.8837C75.9913 18.8837 77.275 19.9607 77.275 21.8454C77.275 23.7301 75.8722 24.4563 75.7004 24.4712L77.8432 28.0936C77.5796 28.2675 76.8523 28.4026 76.3623 28.4026C75.7267 28.4026 75.225 28.1741 75.225 28.1741L73.6113 25.3068C73.5175 25.1041 73.3858 24.9561 73.1612 24.9561H72.844V28.1463ZM73.5322 20.7148C73.1349 20.7148 72.844 20.7952 72.844 20.7952V23.138H73.5049C74.4694 23.138 74.8413 22.4514 74.8413 21.9269C74.8413 21.2403 74.3786 20.7148 73.5322 20.7148Z" fill="white"/>
  <path d="M87.211 28.0787C87.211 28.0787 86.5901 28.4026 85.5836 28.4026C84.7236 28.4026 84.3663 28.1741 84.3663 28.1741L81.2317 23.8384V28.1463C81.2317 28.1463 80.9007 28.4036 80.027 28.4036C79.1533 28.4036 78.797 28.1463 78.797 28.1463V19.2344C78.797 19.2344 79.1533 18.9781 80.027 18.9781C80.9007 18.9781 81.2317 19.2344 81.2317 19.2344V23.4221L84.2618 19.2205C84.2618 19.2205 84.6182 18.9781 85.4782 18.9781C86.4701 18.9781 86.8684 19.3139 86.8684 19.3139L83.9045 23.4221L87.212 28.0797L87.211 28.0787Z" fill="white"/>
  <path d="M58.9806 31.3374C59.1515 32.1988 58.7014 32.8853 58.1987 33.0602C57.7096 32.7244 56.9296 32.4273 56.1096 32.4273C55.2895 32.4273 54.8122 32.7502 54.8122 33.2082C54.8122 33.6394 55.1958 33.7874 56.214 34.1252L57.4841 34.5415C58.8479 34.9985 59.6933 35.7 59.6933 37.1803C59.6933 38.8911 58.5823 40.2105 55.8831 40.2105C53.9912 40.2105 52.8256 39.5637 52.4029 39.1335C52.2711 38.5007 52.6137 37.7059 53.1057 37.4505C53.5284 37.7744 54.7848 38.3934 56.0676 38.3934C56.8359 38.3934 57.2596 38.1112 57.2596 37.5986C57.2596 37.2359 57.034 37.0064 56.5049 36.8306L54.3758 36.1719C53.2365 35.8073 52.3775 34.9737 52.3775 33.6126C52.3775 31.6732 53.6729 30.5973 56.0676 30.5973C57.5895 30.5973 58.4779 31.0145 58.9806 31.3374Z" fill="white"/>
  <path d="M60.3542 32.5227C60.3542 32.5227 60.1023 32.2534 60.1023 31.6067C60.1023 30.9599 60.3542 30.6906 60.3542 30.6906H67.5382C67.5382 30.6906 67.7901 30.9738 67.7901 31.6067C67.7901 32.2395 67.5382 32.5227 67.5382 32.5227H65.1562V39.8608C65.1562 39.8608 64.8136 40.1161 63.9525 40.1161C63.0915 40.1161 62.7088 39.8608 62.7088 39.8608V32.5227H60.3542Z" fill="white"/>
  <path d="M72.7502 30.9341L76.3232 39.8201C76.3232 39.8201 75.9659 40.1171 75.0658 40.1171C74.2321 40.1171 73.9032 39.8747 73.9032 39.8747L73.254 38.3258H69.8538L69.2446 39.8747C69.2446 39.8747 68.901 40.1171 68.081 40.1171C67.1819 40.1171 66.7972 39.8201 66.7972 39.8201L70.3702 30.9341C70.3702 30.9341 70.7002 30.6916 71.5592 30.6916C72.4183 30.6916 72.7502 30.9341 72.7502 30.9341ZM70.5674 36.5216H72.5394L71.8775 34.9051C71.7457 34.5822 71.5729 33.9226 71.5583 33.855C71.5329 33.9226 71.3337 34.5822 71.2156 34.9051L70.5674 36.5216Z" fill="white"/>
  <path d="M75.5949 32.5227C75.5949 32.5227 75.3431 32.2534 75.3431 31.6067C75.3431 30.9599 75.5949 30.6906 75.5949 30.6906H82.779C82.779 30.6906 83.0298 30.9738 83.0298 31.6067C83.0298 32.2395 82.779 32.5227 82.779 32.5227H80.397V39.8608C80.397 39.8608 80.0543 40.1161 79.1933 40.1161C78.3323 40.1161 77.9496 39.8608 77.9496 39.8608V32.5227H75.5949Z" fill="white"/>
  <path d="M88.9047 36.0228H86.5891V38.299H89.9356C89.9356 38.299 90.1875 38.5821 90.1875 39.2001C90.1875 39.8181 89.9356 40.1161 89.9356 40.1161H84.1408V30.6897H89.6711C89.6711 30.6897 89.9356 30.9728 89.9356 31.6057C89.9356 32.2385 89.6711 32.5217 89.6711 32.5217H86.5882V34.1908H88.9038C88.9038 34.1908 89.1547 34.4879 89.1547 35.1078C89.1547 35.7278 88.9038 36.0219 88.9038 36.0219L88.9047 36.0228Z" fill="white"/>
  <path d="M51.7107 54.9999C51.577 54.9999 51.4335 54.974 51.2939 54.8965C51.085 54.7803 50.9395 54.5876 50.8858 54.3551C50.8233 54.0868 50.8936 53.7868 51.082 53.5116L51.1426 53.4202C51.2041 53.3268 51.2685 53.2354 51.3407 53.1519C51.4218 53.0595 51.5047 52.995 51.5741 52.9493C51.5243 52.6691 51.5418 52.4267 51.5682 52.2061C51.5877 52.0233 51.6346 51.8683 51.6726 51.7451C51.6892 51.6925 51.7058 51.6388 51.7185 51.5812C51.8201 51.145 51.8855 50.7397 51.9206 50.3453C51.9528 49.9916 51.947 49.9846 51.8864 49.9061C51.7 49.6707 51.3847 49.5018 51.0498 49.3229C50.8878 49.2365 50.7286 49.1491 50.5754 49.0557C49.607 48.4536 48.6376 47.8505 47.6701 47.2465L47.3294 47.0339C47.2513 46.9862 47.1147 46.9156 46.9516 46.8282C45.8817 46.2659 45.172 45.8526 45.0539 45.2595C45.0363 45.173 44.9465 44.9644 44.884 44.864C44.8411 44.8611 44.7307 44.8521 44.6546 44.8471C44.3032 44.8183 43.7711 44.7726 43.3484 44.3196C43.2635 44.2272 43.1786 44.1408 43.1005 44.0583C42.5098 43.4443 42.0003 42.9148 41.9329 41.5993C41.9241 41.4275 41.9251 41.2506 41.928 41.0728C41.9339 40.5283 41.927 40.1836 41.7103 39.962C41.6078 39.8567 41.435 39.7862 41.2349 39.7037C40.9889 39.6034 40.7097 39.4881 40.45 39.2686C40.37 39.2 40.2792 39.1007 40.1776 38.9854C40.0712 38.8602 39.9082 38.6724 39.7969 38.6337C38.974 38.3436 37.986 38.3178 36.96 38.3178L3.07245 38.2909C2.85964 38.2909 2.66927 38.3138 2.48477 38.3347C2.07378 38.3823 1.60812 38.437 1.2313 38.0962C0.866192 37.7664 0.815429 37.2607 0.814452 36.8076L0.8125 34.3993C0.8125 34.2722 0.847644 34.147 0.913051 34.0387C1.22544 33.529 1.83265 33.2558 2.3686 33.0144C2.56872 32.924 2.77666 32.8316 2.88795 32.7571C3.17593 32.5623 3.43561 32.302 3.7109 32.0248C3.91688 31.8182 4.13068 31.6046 4.36887 31.4059C4.69786 31.1317 5.07078 30.931 5.43296 30.7372C5.74535 30.5703 6.03821 30.4124 6.24127 30.2395C6.38575 30.1173 6.49216 29.9146 6.61906 29.6792C6.75476 29.4238 6.90998 29.1337 7.15208 28.8804C7.41273 28.6081 7.7427 28.4194 8.03263 28.2535C8.69744 27.871 8.68182 27.8322 8.57736 27.5769C8.52855 27.4577 8.48072 27.3553 8.43972 27.2639C8.24447 26.8357 8.07754 26.4681 8.19078 25.7051C8.2025 25.6306 8.21616 25.5521 8.22983 25.4706C8.25619 25.3325 8.30305 25.0772 8.27571 25.0037C8.27571 25.0037 8.26204 24.9927 8.23471 24.9778C8.21128 24.9659 8.12928 24.9669 8.06875 24.9679C7.87448 24.9659 7.51914 24.9768 7.2497 24.6689C6.98124 24.3629 6.99686 23.9555 7.03982 23.6356C7.08179 23.3127 7.06032 23.1051 7.03982 22.9223C6.95684 22.1453 7.21358 21.7817 8.10097 21.424C10.7524 20.351 12.901 19.9884 14.8613 20.2805C14.9775 20.2974 15.1356 20.2656 15.3182 20.2269C15.5944 20.1702 15.9351 20.1017 16.312 20.1752L18.3952 20.5766C19.2475 20.7415 19.6653 20.9054 20.3047 21.4995C20.6327 21.8046 20.7655 21.7718 21.3327 21.5661C21.6168 21.4638 21.9399 21.3485 22.3323 21.2949C22.9727 21.2084 23.5731 21.2661 24.153 21.3227C24.4136 21.3475 24.6762 21.3734 24.9408 21.3843C25.2356 21.3952 25.6085 21.2561 25.9717 21.121C26.1318 21.0614 26.2889 21.0028 26.4412 20.9541C26.78 20.8468 27.0973 20.7991 27.4038 20.7514C27.5551 20.7266 27.7064 20.7037 27.8607 20.6729C27.8714 20.6531 27.8821 20.6332 27.8939 20.6113C27.9417 20.5249 27.9944 20.4345 28.0598 20.3411C28.3419 19.9497 28.7471 19.7003 29.0722 19.4966L29.2078 19.4122C29.5564 19.1916 29.8629 18.9879 30.105 18.7386C30.5423 18.2796 31.1232 18.3114 31.5108 18.3312C31.6455 18.3392 31.8495 18.3481 31.91 18.3223C32.1678 18.207 31.9413 17.3993 31.8065 16.9165C31.7119 16.5777 31.6299 16.2846 31.6133 16.0183C31.5664 15.2642 31.9764 14.7317 32.3064 14.3045C32.5651 13.9687 32.7213 13.7481 32.7164 13.5355C32.7164 13.4948 32.7027 13.4382 32.6851 13.3845C32.4587 13.4948 32.0955 13.6369 31.6796 13.4421C31.0129 13.1302 30.6468 12.0264 30.8508 11.3985C31.0197 10.8779 31.54 10.5421 31.9198 10.2957L32.0565 10.2053C32.3806 9.98471 32.7242 9.79792 33.0542 9.6181C33.5159 9.36873 33.9513 9.13227 34.2949 8.82726C34.4404 8.69711 34.5761 8.56994 34.7089 8.44376C35.0076 8.1626 35.3161 7.8715 35.6792 7.61319C35.7056 7.5188 35.728 7.34096 35.7437 7.22571C35.7729 7.00714 35.8022 6.78062 35.8803 6.5849C36.2513 5.64304 37.1592 4.90884 37.9597 4.25908C38.2252 4.04448 38.4771 3.84081 38.6743 3.65602C38.7992 3.53878 38.9222 3.42055 39.0452 3.30332C39.6388 2.73701 40.2509 2.15084 40.9967 1.68289C41.601 1.30536 42.3898 0.833439 43.1249 0.552274C44.0972 0.1807 44.5579 0.208518 45.4766 0.262168L45.6474 0.27111C47.3607 0.371455 49.1384 0.32476 50.8575 0.281045C51.7205 0.258194 52.5796 0.235343 53.4347 0.230376C53.6651 0.230376 54.0156 0.185667 54.3836 0.138972C55.6078 -0.0140291 56.994 -0.188888 57.7818 0.503592C58.1118 0.792705 58.2924 1.19806 58.3031 1.67594C58.311 2.05248 58.1567 2.33464 58.0435 2.54129C58.0064 2.60686 57.9527 2.7082 57.9458 2.74297C57.9488 2.73205 57.9849 2.78768 58.0103 2.82742C58.1362 3.01718 58.3686 3.37088 58.2748 3.89843C58.2397 4.10111 58.1811 4.3167 58.1216 4.53528C58.0464 4.81147 57.9693 5.09761 57.9624 5.31419C57.9498 5.69073 57.6335 5.99376 57.2703 5.97289C56.9013 5.95998 56.6104 5.64603 56.6231 5.26849C56.6367 4.89195 56.7392 4.50944 56.831 4.17264C56.8788 3.9948 56.9276 3.82094 56.9569 3.65502C56.9481 3.65502 56.9218 3.62323 56.8993 3.58746C56.791 3.42254 56.6065 3.14535 56.6065 2.73701C56.6065 2.36345 56.7607 2.08328 56.873 1.87862C56.9072 1.81702 56.9589 1.72462 56.9657 1.69084C56.9608 1.58354 56.9267 1.55274 56.9072 1.53685C56.5694 1.23979 55.2544 1.40372 54.5496 1.49313C54.1386 1.5438 53.752 1.59348 53.4435 1.59547C52.5971 1.60043 51.7439 1.62229 50.8907 1.64315C49.1442 1.68886 47.3382 1.73654 45.5722 1.63421L45.3985 1.62328C44.5345 1.57162 44.3022 1.55871 43.5964 1.82894C42.9618 2.07235 42.2101 2.5244 41.7006 2.84431C41.0699 3.23973 40.533 3.75338 39.9648 4.29683C39.8379 4.41804 39.712 4.53925 39.5831 4.65947C39.3479 4.87804 39.0794 5.09661 38.7953 5.32611C38.1237 5.87056 37.3642 6.48555 37.1231 7.09457C37.1065 7.14425 37.085 7.30221 37.0713 7.40753C37.0147 7.84666 36.9424 8.3931 36.5041 8.69016C36.1927 8.90277 35.9145 9.16704 35.6187 9.44523C35.4771 9.57935 35.3317 9.71546 35.1774 9.85257C34.7186 10.2629 34.1924 10.548 33.6838 10.8222C33.3675 10.9931 33.0698 11.1541 32.8033 11.3369C32.7554 11.3707 32.6978 11.4064 32.6373 11.4462C32.5114 11.5276 32.2332 11.7065 32.1346 11.8217C32.1424 11.8992 32.1726 12.0115 32.2117 12.1009C32.3757 12.0214 32.6041 11.924 32.8804 11.9459C33.6633 12.0135 34.0401 12.8937 34.0558 13.4988C34.0743 14.2191 33.677 14.7337 33.3587 15.145C33.0971 15.4868 32.9351 15.7074 32.9487 15.9319C32.9565 16.0511 33.0288 16.3114 33.0932 16.5419C33.3314 17.3933 33.7746 18.978 32.4479 19.5701C32.0965 19.7281 31.7314 19.7082 31.4375 19.6933C31.3126 19.6864 31.1046 19.6764 31.047 19.7023C30.7171 20.051 30.3227 20.3113 29.9166 20.5706L29.7692 20.663C29.5212 20.816 29.2654 20.976 29.1405 21.1488C29.1083 21.1935 29.0819 21.2412 29.0585 21.2859C28.9345 21.5085 28.7256 21.884 28.174 21.9993C27.9827 22.04 27.7943 22.0708 27.6059 22.0996C27.3364 22.1414 27.0807 22.1811 26.8386 22.2566C26.7087 22.2993 26.5711 22.35 26.4334 22.4017C25.9697 22.5745 25.4435 22.7732 24.8871 22.7474C24.5981 22.7355 24.3131 22.7087 24.027 22.6808C23.4989 22.6282 22.9981 22.5805 22.511 22.6481C22.2572 22.6828 22.0258 22.7653 21.7817 22.8537C21.1716 23.0733 20.3369 23.3733 19.4046 22.508C18.9927 22.1265 18.8267 22.049 18.1473 21.9178L16.065 21.5164C15.942 21.4936 15.775 21.5264 15.5818 21.5651C15.3289 21.6168 15.0136 21.6784 14.6719 21.6297C12.9508 21.3724 11.0218 21.7112 8.59689 22.6928C8.49829 22.7325 8.42703 22.7643 8.37431 22.7891C8.39579 22.9779 8.42312 23.2491 8.39091 23.6217C8.53343 23.6416 8.69353 23.6843 8.86047 23.7737C9.81228 24.2834 9.63461 25.256 9.5487 25.724C9.53601 25.7876 9.52528 25.8511 9.51551 25.9127C9.4628 26.2694 9.49501 26.3429 9.65511 26.6917C9.70392 26.798 9.75664 26.9162 9.81326 27.0543C10.3941 28.4681 9.28415 29.1039 8.68865 29.4447C8.46705 29.5719 8.23764 29.701 8.11268 29.8331C7.99944 29.9524 7.89987 30.1372 7.79541 30.3329C7.62945 30.6448 7.44104 30.9975 7.10522 31.2847C6.79088 31.5529 6.41894 31.7536 6.05871 31.9454C5.74144 32.1153 5.44077 32.2762 5.21623 32.464C5.02782 32.6219 4.84527 32.8048 4.65295 32.9985C4.34252 33.3085 4.02524 33.6294 3.62499 33.8976C3.41901 34.0347 3.17203 34.147 2.9104 34.2652C2.69661 34.3606 2.33443 34.5225 2.14992 34.6626L2.15383 36.8096C2.15383 36.8881 2.15578 36.9527 2.15871 37.0023C2.21533 36.9974 2.27586 36.9904 2.32662 36.9835C2.5287 36.9606 2.77959 36.9308 3.06952 36.9308L36.9581 36.9566C38.0573 36.9566 39.2141 36.9884 40.2304 37.3471C40.6755 37.5021 40.9801 37.8538 41.1812 38.0853C41.2281 38.1399 41.2681 38.1896 41.3052 38.2234C41.4018 38.3048 41.5551 38.3674 41.7328 38.441C42.0129 38.5562 42.3615 38.7003 42.6572 39.0043C43.2811 39.6411 43.2713 40.4469 43.2645 41.0927C43.2606 41.2417 43.2606 41.3897 43.2664 41.5328C43.3084 42.3326 43.5261 42.5581 44.0532 43.1055C44.1372 43.1929 44.2251 43.2853 44.3188 43.3847C44.3842 43.4542 44.5287 43.4701 44.761 43.491C45.0412 43.5138 45.3897 43.5417 45.6953 43.7751C46.0291 44.0275 46.2546 44.5888 46.3376 44.8809C46.5455 45.0846 47.2777 45.4711 47.5647 45.6211C47.7639 45.7264 47.9298 45.8158 48.0265 45.8754L48.3672 46.088C49.3346 46.6891 50.3011 47.2922 51.2705 47.8943C51.3993 47.9727 51.533 48.0463 51.6707 48.1188C52.0924 48.3443 52.5698 48.6006 52.9291 49.0567C53.3215 49.5544 53.2942 50.0045 53.259 50.4029C53.3156 50.2936 53.3781 50.1893 53.4513 50.0879C53.5841 49.8982 53.7393 49.7541 53.877 49.626C54.0136 49.4998 54.1073 49.4104 54.1396 49.3388C54.1132 49.2772 54.0527 49.1739 54.0117 49.1034C53.8487 48.8232 53.6271 48.4387 53.7315 47.9857C53.7725 47.8108 53.8789 47.6588 54.0283 47.5634C54.0849 47.5276 54.205 47.4591 54.3631 47.3717C54.5818 47.2495 55.1373 46.9405 55.475 46.71C54.9723 45.5913 55.1392 44.2163 55.2886 42.9843C55.3345 42.6038 55.3784 42.2451 55.3989 41.9222C55.4204 41.5467 55.7337 41.2606 56.1076 41.2834C56.4776 41.3063 56.7588 41.6301 56.7353 42.0057C56.7148 42.3693 56.667 42.7498 56.6182 43.1522C56.4776 44.3166 56.3165 45.637 56.833 46.3911C56.954 46.5669 56.994 46.7895 56.9452 47.0021C56.8417 47.4502 56.3898 47.7879 55.1958 48.4606C55.352 48.7308 55.5395 49.0904 55.4731 49.5167C55.4623 49.5812 55.4487 49.6428 55.4321 49.7015C55.766 49.5793 56.1154 49.464 56.4845 49.3577C57.8775 48.9543 59.3409 48.7745 61.225 48.7745C62.0587 48.7745 62.8006 48.5053 63.5874 48.2211C64.2103 47.9946 64.8546 47.7621 65.576 47.6508C66.1852 47.5555 66.5005 47.7562 66.7728 47.9688C66.8636 48.0403 66.93 48.09 67.0442 48.1357C67.3625 48.2619 67.7325 48.2211 68.1601 48.1754C68.5925 48.1277 69.0836 48.0731 69.5844 48.2042C69.8821 48.2837 70.09 48.5579 70.0861 48.8709C70.0744 50.0571 68.5076 50.5459 67.7549 50.7814L67.0384 51.0099C66.4985 51.1848 65.9567 51.3586 65.41 51.5176C65.1631 51.5881 64.918 51.6587 64.672 51.7223C64.3889 51.7948 64.099 51.9597 63.7944 52.1316C63.481 52.3094 63.1579 52.4922 62.786 52.6174C62.1426 52.83 61.4837 52.9413 60.6471 52.9761C60.4069 52.987 60.1746 53.0943 59.9295 53.2056C59.5674 53.3735 59.1154 53.5801 58.6107 53.4132C58.3949 53.3864 57.5534 53.6775 57.1502 53.8196C56.832 53.9289 56.5577 54.0242 56.3419 54.0759C55.598 54.2528 54.8415 54.3918 54.1103 54.527L53.5968 54.6223C53.1516 54.7058 52.7035 54.7922 52.2613 54.8926L52.2076 54.9085C52.0797 54.9482 51.9021 55.0038 51.7078 55.0038L51.7107 54.9999ZM53.0735 51.6746C53.0569 51.7471 53.0403 51.8196 53.0237 51.8941C53.0032 51.9806 52.9788 52.064 52.9544 52.1455C52.9281 52.2359 52.9066 52.3055 52.8988 52.3651C52.8793 52.5379 52.8773 52.6313 52.8978 52.7247C52.9495 52.9791 52.9388 53.1907 52.8949 53.3645C53.0482 53.3347 53.2024 53.3049 53.3566 53.2751L53.875 53.1808C54.5896 53.0486 55.3296 52.9125 56.0412 52.7436C56.1906 52.7078 56.4483 52.6194 56.7217 52.525C57.7721 52.1604 58.4994 51.9359 59.0295 52.1127C59.0646 52.1058 59.2559 52.0173 59.3828 51.9597C59.7001 51.8137 60.0945 51.6328 60.5924 51.611C61.3021 51.5812 61.8498 51.4908 62.372 51.3169C62.622 51.2345 62.8748 51.0914 63.1442 50.9374C63.5123 50.7298 63.892 50.5142 64.3469 50.3969C64.5793 50.3373 64.8136 50.2707 65.0459 50.2042C65.5789 50.0482 66.11 49.8773 66.6362 49.7064L67.1253 49.5514C66.9388 49.5246 66.7504 49.4779 66.56 49.4014C66.2672 49.2862 66.0836 49.1411 65.9616 49.0457C65.9313 49.0229 65.906 48.999 65.8757 48.9812C65.8737 48.9851 65.8405 48.9851 65.7781 48.9941C65.1845 49.0855 64.6281 49.2862 64.0394 49.4998C63.1794 49.8107 62.293 50.1326 61.2279 50.1326C59.4717 50.1326 58.1235 50.2966 56.8535 50.6642C55.7142 50.992 54.7868 51.3984 54.0166 51.9031C53.7901 52.0521 53.5001 52.0481 53.2776 51.8951C53.1917 51.8365 53.1214 51.76 53.0735 51.6716V51.6746Z" fill="white"/>
  <path d="M67.6348 51.8019C67.6348 51.8019 67.6173 51.782 67.6173 51.7303C67.6173 51.6787 67.6348 51.6588 67.6348 51.6588H68.5564C68.5564 51.6588 68.5749 51.6806 68.5749 51.7303C68.5749 51.78 68.5564 51.8019 68.5564 51.8019H68.1932V52.9205C68.1932 52.9205 68.1659 52.9404 68.0976 52.9404C68.0292 52.9404 67.998 52.9205 67.998 52.9205V51.8019H67.6348Z" fill="white"/>
  <path d="M69.4282 52.8659C69.4135 52.8748 69.3891 52.8858 69.3471 52.8858C69.3178 52.8858 69.2837 52.8798 69.27 52.8659L68.9889 52.1476C68.9723 52.1088 68.9459 52.0323 68.944 52.0214C68.944 52.0264 68.9371 52.1277 68.9332 52.1565L68.8815 52.9205C68.8815 52.9205 68.8561 52.9404 68.7858 52.9404C68.7155 52.9404 68.6862 52.9205 68.6862 52.9205L68.7839 51.6787C68.7839 51.6787 68.8112 51.6588 68.8776 51.6588C68.9518 51.6588 68.9781 51.6787 68.9781 51.6787L69.3042 52.5162L69.3471 52.6533C69.3481 52.6473 69.3774 52.5559 69.392 52.5162L69.7181 51.6787C69.7181 51.6787 69.7464 51.6588 69.8206 51.6588C69.886 51.6588 69.9124 51.6787 69.9124 51.6787L70.01 52.9205C70.01 52.9205 69.9807 52.9404 69.9104 52.9404C69.8401 52.9404 69.8167 52.9205 69.8167 52.9205L69.763 52.1546L69.7523 52.0194C69.7523 52.0194 69.722 52.1148 69.7093 52.1456L69.4282 52.8659Z" fill="white"/>
</svg>`, kc = ':host{--_nys-globalheader-color: var( --nys-color-text-reverse, var(--nys-color-white, #ffffff) );--_nys-globalheader-link-color: var( --nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff) );--_nys-globalheader-background-color: var( --nys-color-theme, var(--nys-color-state-blue-700, #154973) );--_nys-globalheader-gap: var(--nys-space-150, 12px);--_nys-globalheader-padding: var(--nys-space-250, 20px) var(--nys-space-250, 20px) var(--nys-space-200, 16px);--_nys-globalheader-font-family--menu: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-globalheader-line-height: normal;--_nys-globalheader-letter-spacing: normal;--_nys-globalheader-font-weight: var(--nys-font-weight-semibold, 600);--_nys-globalheader-max-width: var(--nys-max-content-width, 1280px);--_nys-globalheader-gap--text: var(--nys-space-100, 8px);--_nys-globalheader-font-size--heading: var( --nys-font-size-agency-xl, var(--nys-font-size-2xl, 22px) );--_nys-globalheader-font-size--subheading: var( --nys-font-size-agency-md, var(--nys-font-size-md, 16px) );--_nys-globalheader-font-family--headings: var( --nys-font-family-agency, "D Sari", Arial, sans-serif );--_nys-globalheader-line-height--menu: var(--nys-font-lineheight-ui-md, 24px);--_nys-globalheader-letter-spacing--menu: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) );--_nys-globalheader-text-decoration-thickness--menu: var(--nys-size-2px, 2px);--_nys-globalheader-link-padding: var(--nys-space-300, 24px) var(--nys-space-200, 16px);--_nys-globalheader-font-size--menu-btn: var(--nys-type-size-ui-xs, 12px);--_nys-globalheader-line-height--menu-btn: var( --nys-font-lineheight-ui-xs, 20px );--_nys-globalheader-letter-spacing--menu-btn: var( --nys-font-letterspacing-ui-xs, .057px );--_nys-globalheader-border-color--menu: var(--nys-color-theme-mid, #457aa5);--_nys-globalheader-background-color--menu--hover: var( --nys-color-theme-strong, #0e324f );--_nys-globalheader-background-color--menu--active: var( --nys-color-theme-stronger, #081b2b )}ul{list-style-type:none;padding:0;margin:0}li{display:block;margin:0;padding:0;box-sizing:border-box}a{color:var(--_nys-globalheader-color);text-decoration:none;font-family:var(--_nys-globalheader-font-family--menu);font-style:normal;font-weight:400;line-height:var(--_nys-globalheader-line-height--menu);letter-spacing:var(--_nys-globalheader-letter-spacing--menu)}::slotted([slot=user-actions]){display:flex;align-items:center;margin-inline-start:auto;--_nys-button-outline-color: var( --nys-color-ink-reverse, var(--nys-color-white, #ffffff) )}.nys-globalheader{display:flex;justify-content:center;padding:var(--_nys-globalheader-padding);background-color:var(--_nys-globalheader-background-color);color:var(--_nys-globalheader-color);width:100%;min-height:76px;box-sizing:border-box}a#nys-globalheader__logolink{outline-offset:var(--nys-space-2px, 2px);outline-color:var(--nys-color-ink-reverse, #ffffff);margin:auto 0}.nys-globalheader__logo svg{vertical-align:top;width:auto}.nys-globalheader__main-container{display:flex;gap:var(--_nys-globalheader-gap);max-width:var(--_nys-globalheader-max-width);width:100%}@media(min-width:1024px){.nys-globalheader__main-container{align-items:center}}.nys-globalheader__name-container{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:var(--_nys-globalheader-gap--text)}.nys-globalheader__name{margin:0;color:var(--_nys-globalheader-color);font-family:var(--_nys-globalheader-font-family--headings);font-size:var(--_nys-globalheader-font-size--heading);font-style:normal;font-weight:var(--_nys-globalheader-font-weight);line-height:var(--_nys-globalheader-line-height);letter-spacing:var(--_nys-globalheader-letter-spacing);overflow-wrap:break-word}.nys-globalheader__agencyName{font-size:var(--_nys-globalheader-font-size--subheading)}.nys-globalheader__agencyName.main{font-size:var(--_nys-globalheader-font-size--heading)}.nys-globalheader__content{display:none;font-family:var(--_nys-globalheader-font-family--menu)}.nys-globalheader__content ul{display:flex;flex-flow:column wrap;align-items:center}.nys-globalheader__content ul a:hover{text-decoration:underline;text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:7%;text-underline-offset:auto;text-underline-position:from-font}.nys-globalheader__content ul a:active{text-decoration-thickness:var(--_nys-globalheader-text-decoration-thickness--menu)}.nys-globalheader__content li.active a,.nys-globalheader__content-mobile li.active a{font-weight:700}.nys-globalheader__content li.active{border-bottom:8px solid var(--nys-color-theme-weak, #cddde9)}.nys-globalheader__content li.active a{margin-bottom:calc(-1 * var(--nys-space-100, 8px))}.nys-globalheader__content-mobile li.active a{border-left:8px solid var(--nys-color-theme-weak, #cddde9);border-bottom:1px solid var(--_nys-globalheader-border-color--menu)}.nys-globalheader__content ul li.active a:hover{text-decoration:none}.nys-globalheader__content-mobile{position:absolute;z-index:10;display:flex;flex-direction:column;justify-content:center;background-color:var(--_nys-globalheader-background-color);width:fit-content}.nys-globalheader__content-mobile.close{display:none}.nys-globalheader__content-mobile ul{display:flex;flex-direction:column}.nys-globalheader__content-mobile ul li:first-child a{border-top:1px solid var(--_nys-globalheader-color)}.nys-globalheader__content-mobile ul li a{display:flex;padding:24px;align-items:center;gap:8px;align-self:stretch;border-bottom:1px solid var(--_nys-globalheader-border-color--menu);background-color:var(--_nys-globalheader-background-color)}.nys-globalheader__content-mobile ul li a:hover{background-color:var(--_nys-globalheader-background-color--menu--hover)}.nys-globalheader__content-mobile ul li a:active{background-color:var(--_nys-globalheader-background-color--menu--active)}.nys-globalheader__name-container-link{display:flex;flex-direction:column;justify-content:center}.nys-globalheader__button-container{display:flex;justify-content:center;align-items:center}.nys-globalheader__mobile-menu-button{flex-direction:column;gap:3px;width:50px;height:50px;background-color:var(--_nys-globalheader-background-color);border:none;cursor:pointer;display:flex;justify-content:center;align-items:center;padding:0;color:var(--_nys-globalheader-color)}.nys-globalheader__mobile-menu-button-text{font-size:var(--_nys-globalheader-font-size--menu-btn);line-height:var(--_nys-globalheader-line-height--menu-btn);letter-spacing:var(--_nys-globalheader-letter-spacing--menu-btn)}@media(min-width:768px){:host{--_nys-globalheader-padding: var(--nys-space-250, 20px) var(--nys-size-400, 32px) var(--nys-size-200, 16px)}}@media(min-width:1024px){.nys-globalheader__content{display:flex}.nys-globalheader__content ul{flex-direction:row}.nys-globalheader__content-mobile,.nys-globalheader__button-container{display:none}li{display:flex;align-items:center;padding:var(--_nys-globalheader-link-padding)}:host{--_nys-globalheader-gap: var(--nys-space-500, 40px);--_nys-globalheader-padding: var(--nys-space-50, 4px) var(--nys-size-400, 32px) 0}}@media(min-width:1280px){:host{--_nys-globalheader-padding: var(--nys-space-50, 4px) var(--nys-space-800, 64px) 0}}';
var Cc = Object.defineProperty, Ht = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Cc(e, t, o), o;
};
const nn = class nn extends m {
  constructor() {
    super(...arguments), this.appName = "", this.agencyName = "", this.homepageLink = "", this.nysLogo = !1, this._isMobileMenuOpen = !1, this._hasLinkContent = !1, this._boundClickOutside = (e) => {
      if (!this._isMobileMenuOpen) return;
      e.composedPath().includes(this) || (this._isMobileMenuOpen = !1);
    }, this._boundKeyDown = (e) => {
      e.key !== "Escape" || !this._isMobileMenuOpen || window.matchMedia("pointer: coarse").matches || (this._isMobileMenuOpen = !1);
    };
  }
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  firstUpdated() {
    this.shadowRoot?.querySelector("slot")?.addEventListener("slotchange", () => this._handleListSlotChange()), this._handleListSlotChange(), this._listenLinkClicks(), document.addEventListener("click", this._boundClickOutside), document.addEventListener("keydown", this._boundKeyDown);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("click", this._boundClickOutside), document.removeEventListener("keydown", this._boundKeyDown);
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _highlightActiveLink(e) {
    const t = Array.from(e.querySelectorAll("a")), s = window.location.pathname.replace(/\/+$/, "") || "/";
    let o = {
      li: null,
      length: 0
    };
    t.forEach((r) => {
      const i = this._normalizePath(r.getAttribute("href"));
      i && (i === "/" && s === "/" ? o = { li: r.closest("li"), length: 1 } : s.startsWith(i) && i.length > o.length && (o = {
        li: r.closest("li"),
        length: i.length
      }));
    }), t.forEach((r) => r.closest("li")?.classList.remove("active")), o.li?.classList.add("active");
  }
  // Gets called when the slot content changes and directly appends the slotted elements into the shadow DOM
  async _handleListSlotChange() {
    const e = this.shadowRoot?.querySelector(
      'slot:not([name="user-actions"])'
    );
    if (!e) return;
    const t = e.assignedNodes({ flatten: !0 }).filter((o) => o.nodeType === Node.ELEMENT_NODE), s = [
      this.shadowRoot?.querySelector(".nys-globalheader__content"),
      this.shadowRoot?.querySelector(".nys-globalheader__content-mobile")
    ];
    if (!s.some((o) => !o)) {
      for (const o of s)
        o.innerHTML = "", t.forEach((r) => {
          o.appendChild(r.cloneNode(!0));
        }), this._highlightActiveLink(o);
      await this.updateComplete, this._hasLinkContent = t.length > 0;
    }
  }
  // Normalize paths so that links like "name", "/name/", and "/" match window.location.pathname.
  // This ensures consistent active-link behavior regardless of how hrefs are written.
  _normalizePath(e) {
    if (!e) return null;
    try {
      return new URL(e, window.location.origin).pathname.replace(/\/+$/, "") || "/";
    } catch {
      return null;
    }
  }
  _toggleMobileMenu() {
    this._isMobileMenuOpen = !this._isMobileMenuOpen;
  }
  // Listens for click events on links to mark them active
  _listenLinkClicks() {
    this.shadowRoot?.querySelectorAll(
      ".nys-globalheader__content, .nys-globalheader__content-mobile"
    )?.forEach((t) => {
      t?.addEventListener("click", (s) => {
        const r = s.target.closest("a");
        if (!r) return;
        t.querySelectorAll("li.active").forEach((c) => c.classList.remove("active"));
        const i = r.closest("li");
        i && i.classList.add("active");
      });
    });
  }
  _renderBrandMark() {
    return this.nysLogo ? h`${this._getNysLogo()}` : "";
  }
  _getNysLogo() {
    const s = new DOMParser().parseFromString(wc, "image/svg+xml").documentElement;
    return s.id = "nys-unavheader__logo", s;
  }
  render() {
    return h`
      <header class="nys-globalheader">
        <div class="nys-globalheader__main-container">
          ${this._hasLinkContent ? h` <div class="nys-globalheader__button-container">
                <button
                  class="nys-globalheader__mobile-menu-button"
                  @click="${this._toggleMobileMenu}"
                >
                  <nys-icon
                    name="${this._isMobileMenuOpen ? "close" : "menu"}"
                    size="32"
                    label="${this._isMobileMenuOpen ? "close" : "menu"} icon"
                  ></nys-icon>
                  <span class="nys-globalheader__mobile-menu-button-text"
                    >${this._isMobileMenuOpen ? "CLOSE" : "MENU"}</span
                  >
                </button>
              </div>` : ""}
          ${this._renderBrandMark()}
          ${this.homepageLink?.trim() ? h`<a
                class="nys-globalheader__name-container-link"
                href=${this.homepageLink?.trim()}
              >
                <div class="nys-globalheader__name-container">
                  ${this.appName?.trim().length > 0 ? h`<div
                        class="nys-globalheader__appName nys-globalheader__name"
                      >
                        ${this.appName}
                      </div> ` : ""}
                  ${this.agencyName?.trim().length > 0 ? h`<div
                        class="nys-globalheader__agencyName nys-globalheader__name ${this.appName?.trim().length > 0 ? "" : "main"}"
                      >
                        ${this.agencyName}
                      </div> ` : ""}
                </div>
              </a>` : h`
                <div class="nys-globalheader__name-container">
                  ${this.appName?.trim().length > 0 ? h`<div
                        class="nys-globalheader__appName nys-globalheader__name"
                      >
                        ${this.appName}
                      </div> ` : ""}
                  ${this.agencyName?.trim().length > 0 ? h`<div
                        class="nys-globalheader__agencyName nys-globalheader__name ${this.appName?.trim().length > 0 ? "" : "main"}"
                      >
                        ${this.agencyName}
                      </div> ` : ""}
                </div>
              `}
          <div class="nys-globalheader__content"></div>
          <slot
            style="display: none;"
            @slotchange="${this._handleListSlotChange}"
          ></slot>
          <slot name="user-actions"></slot>
        </div>
      </header>
      <div
        class="nys-globalheader__content-mobile ${this._isMobileMenuOpen ? "" : "close"}"
      ></div>
    `;
  }
};
nn.styles = w(kc);
let Xe = nn;
Ht([
  a({ type: String })
], Xe.prototype, "appName");
Ht([
  a({ type: String })
], Xe.prototype, "agencyName");
Ht([
  a({ type: String })
], Xe.prototype, "homepageLink");
Ht([
  a({ type: Boolean })
], Xe.prototype, "nysLogo");
Ht([
  $()
], Xe.prototype, "_isMobileMenuOpen");
Ht([
  $()
], Xe.prototype, "_hasLinkContent");
customElements.get("nys-globalheader") || customElements.define("nys-globalheader", Xe);
const $c = ':host{--_nys-globalfooter-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-globalfooter-background-color: var( --nys-color-theme-weaker, var(--nys-color-state-blue-50, #eff6fb) );--_nys-globalfooter-gap: var(--nys-space-300, 24px);--_nys-globalfooter-padding--y: var(--nys-space-400, 32px);--_nys-globalfooter-padding--gutter: var(--nys-gutter-sm, 20px);--_nys-globalfooter-font-size--agency: var( --nys-font-size-agency-xl, var(--nys-font-size-2xl, 22px) );--_nys-globalfooter-font-size--link: var( --nys-font-size-body-md, var(--nys-font-size-md, 16px) );--_nys-globalfooter-line-height--agency: normal;--_nys-globalfooter-font-weight--regular: var(--nys-font-weight-regular, 400);--_nys-globalfooter-font-weight--semibold: var( --nys-font-weight-semibold, 600 );--_nys-globalfooter-max-width: var(--nys-max-content-width, 1280px);--_nys-globalfooter-font-family--agency: var( --nys-font-family-agency, "D Sari", Arial, sans-serif );--_nys-globalfooter-column-gap: var(--nys-space-400, 32px);--_nys-globalfooter-row-gap: var(--nys-space-400, 32px);--_nys-globalfooter-line-height--link: var(--nys-font-lineheight-ui-md, 24px);--_nys-globalfooter-letter-spacing: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) );--_nys-globalfooter-font-family--link: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-globalfooter-text-decoration-thickness: var(--nys-size-2px, 2px);--_nys-globalfooter-background--divider: var(--nys-color-theme, #154973);--_nys-globalfooter-margin--divider: var(--nys-space-50, 4px)}.nys-globalfooter{display:flex;padding:var(--_nys-globalfooter-padding--y) var(--_nys-globalfooter-padding--gutter);justify-content:center;background-color:var(--_nys-globalfooter-background-color);color:var(--_nys-globalfooter-color);width:100%;box-sizing:border-box}.nys-globalfooter__main-container{display:flex;flex-direction:column;gap:var(--_nys-globalfooter-gap);width:100%;max-width:var(--_nys-globalfooter-max-width)}.nys-globalfooter__name{text-align:left;margin:0;color:var(--_nys-globalfooter-color);font-family:var(--_nys-globalfooter-font-family--agency);font-size:var(--_nys-globalfooter-font-size--agency);font-style:normal;font-weight:var(--_nys-globalfooter-font-weight--semibold);line-height:var(--_nys-globalfooter-line-height--agency);letter-spacing:normal}ul{list-style-type:none;padding:0;margin:0}li{margin:0;padding:0}a,span{color:var(--_nys-globalfooter-color);text-decoration:none;font-family:var(--_nys-globalfooter-font-family--link);font-size:var(--_nys-globalfooter-font-size--link);font-style:normal;font-weight:var(--_nys-globalfooter-font-weight--semibold);line-height:var(--_nys-globalfooter-line-height--link);letter-spacing:var(--_nys-globalfooter-letter-spacing)}ul li>span+ul li a{font-weight:var(--_nys-globalfooter-font-weight--regular)}a:hover{text-decoration:underline}a:active{text-decoration-thickness:var(--_nys-globalfooter-text-decoration-thickness)}.nys-globalfooter__content{width:100%}.nys-globalfooter__content ul{display:flex;flex-flow:column wrap;gap:var(--_nys-globalfooter-row-gap) var(--_nys-globalfooter-column-gap)}.nys-globalfooter__content ul li:has(span~ul){flex:1;display:flex;flex-direction:column}.nys-globalfooter__content ul:has(li>span~ul){--_nys-globalfooter-column-gap: var(--nys-space-500, 40px)}.nys-globalfooter__content ul li>span~ul{display:flex;flex-direction:column;gap:var(--nys-space-200, 16px)}.divider{margin-top:var(--_nys-globalfooter-margin--divider);margin-bottom:var(--nys-space-300, 24px)}@media(min-width:768px){.nys-globalfooter__content ul{flex-direction:row}.nys-globalfooter__content ul li:has(span~ul){flex:1 0 205px}:host{--_nys-globalfooter-padding--gutter: var(--nys-gutter-lg, 32px);--_nys-globalfooter-row-gap: var(--nys-space-600, 48px)}}@media(min-width:1280px){:host{--_nys-globalfooter-padding--gutter: var(--nys-gutter-xl, 64px)}}';
var Ec = Object.defineProperty, Os = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Ec(e, t, o), o;
};
const rn = class rn extends m {
  constructor() {
    super(...arguments), this.agencyName = "", this.homepageLink = "", this.slotHasContent = !0;
  }
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  firstUpdated() {
    this.shadowRoot?.querySelector("slot")?.addEventListener("slotchange", () => this._handleSlotChange()), this._handleSlotChange();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  // Gets called when the slot content changes and directly appends the slotted elements into the shadow DOM
  async _handleSlotChange() {
    const e = this.shadowRoot?.querySelector("slot");
    if (!e) return;
    const t = e?.assignedNodes({ flatten: !0 }).filter((r) => r.nodeType === Node.ELEMENT_NODE);
    await Promise.resolve(), this.slotHasContent = t.length > 0;
    const s = this.shadowRoot?.querySelector(
      ".nys-globalfooter__content"
    ), o = t?.some(
      (r) => r.tagName === "H4"
    );
    s && (s.classList.toggle("columns", o), s.classList.toggle("small", !o), s.innerHTML = "", t.forEach((i) => {
      if (i.nodeType === Node.ELEMENT_NODE) {
        const c = i.cloneNode(!0);
        ["script", "iframe", "object", "embed", "img"].forEach((u) => {
          c.querySelectorAll(u).forEach((f) => f.remove());
        }), s.appendChild(c), i.remove();
      }
    }), s.querySelectorAll("span").forEach((i) => {
      const c = document.createElement("nys-divider");
      c.classList.add("divider"), i.insertAdjacentElement("afterend", c);
    }));
  }
  render() {
    return h`
      <footer class="nys-globalfooter">
        <div class="nys-globalfooter__main-container">
          ${this.homepageLink?.trim() ? h`<a href=${this.homepageLink?.trim()}>
                <h2 class="nys-globalfooter__name">${this.agencyName}</h2>
              </a>` : h`<h2 class="nys-globalfooter__name">${this.agencyName}</h2>`}
          ${this.slotHasContent ? h`<div class="nys-globalfooter__content">
                <slot
                  style="display: hidden"
                  @slotchange="${this._handleSlotChange}"
                ></slot>
              </div>` : ""}
        </div>
      </footer>
    `;
  }
};
rn.styles = w($c);
let Nt = rn;
Os([
  a({ type: String })
], Nt.prototype, "agencyName");
Os([
  a({ type: String })
], Nt.prototype, "homepageLink");
Os([
  $()
], Nt.prototype, "slotHasContent");
customElements.get("nys-globalfooter") || customElements.define("nys-globalfooter", Nt);
const Sc = `<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
  <path d="M55.1158 7.50499L58.2905 12.6494V7.5189C58.2905 7.5189 58.6487 7.26356 59.5098 7.26356C60.3708 7.26356 60.7378 7.5189 60.7378 7.5189V16.4327C60.7378 16.4327 60.3942 16.689 59.5215 16.689C58.6487 16.689 58.3295 16.4605 58.3295 16.4605L55.1421 11.3171V16.4337C55.1421 16.4337 54.7848 16.69 53.9111 16.69C53.0374 16.69 52.7065 16.4337 52.7065 16.4337V7.51989C52.7065 7.51989 53.0384 7.26456 53.9248 7.26456C54.8112 7.26456 55.1148 7.50697 55.1148 7.50697L55.1158 7.50499Z" fill="white"/>
  <path d="M67.2209 12.5948H64.9063V14.8709H68.2538C68.2538 14.8709 68.5047 15.1531 68.5047 15.772C68.5047 16.391 68.2538 16.688 68.2538 16.688H62.4589V7.26257H67.9892C67.9892 7.26257 68.2538 7.54572 68.2538 8.17859C68.2538 8.81146 67.9892 9.09362 67.9892 9.09362H64.9063V10.7637H67.2209C67.2209 10.7637 67.4728 11.0598 67.4728 11.6787C67.4728 12.2977 67.2209 12.5948 67.2209 12.5948Z" fill="white"/>
  <path d="M71.4802 16.4327L68.9791 7.5189C68.9791 7.5189 69.3491 7.26356 70.2101 7.26356C71.0711 7.26356 71.4275 7.5189 71.4275 7.5189L72.6839 12.0434C72.7766 12.3802 72.8166 12.6365 72.8557 12.7845C72.8557 12.7428 72.9221 12.3663 73.0011 12.0573L74.0984 7.5189C74.0984 7.5189 74.5211 7.26356 75.1176 7.26356C75.7141 7.26356 76.084 7.5189 76.084 7.5189L77.3004 12.7845C77.3004 12.6623 77.3795 12.3255 77.4586 12.0573L78.756 7.5189C78.7686 7.5189 79.1132 7.26356 79.9596 7.26356C80.806 7.26356 81.1897 7.5189 81.1897 7.5189L78.6496 16.4327C78.6496 16.4327 78.2922 16.6751 77.4859 16.689C76.5468 16.689 76.2158 16.4327 76.2158 16.4327L75.223 12.2987C75.1449 11.9887 75.0902 11.6529 75.0785 11.5844L74.9184 12.2987L73.9266 16.4327C73.9266 16.4327 73.583 16.689 72.7092 16.689C71.8355 16.689 71.4802 16.4327 71.4802 16.4327Z" fill="white"/>
  <path d="M54.3485 19.2195L55.4331 21.1579C55.804 21.8176 56.0022 22.5587 56.0285 22.6521C56.0559 22.5587 56.2404 21.8315 56.624 21.1579L57.735 19.2195C57.735 19.2195 58.0659 18.9771 58.8723 18.9771C59.786 18.9771 60.1697 19.2861 60.1697 19.2861L57.2449 24.4295V28.1453C57.2449 28.1453 56.9013 28.4026 56.0276 28.4026C55.1539 28.4026 54.8239 28.1453 54.8239 28.1453V24.3898L51.8991 19.2871C51.8991 19.2871 52.2965 18.9781 53.2082 18.9781C53.9892 18.9781 54.3465 19.2205 54.3465 19.2205L54.3485 19.2195Z" fill="white"/>
  <path d="M64.6017 28.497C61.4788 28.497 60.117 26.6381 60.117 23.7033C60.117 20.7684 61.4798 18.8827 64.6017 18.8827C67.7237 18.8827 69.0865 20.7674 69.0865 23.7033C69.0865 26.6391 67.711 28.497 64.6017 28.497ZM64.6017 26.6778C65.9235 26.6778 66.6391 25.4667 66.6391 23.7033C66.6391 21.9398 65.9235 20.7138 64.6017 20.7138C63.2799 20.7138 62.5653 21.9398 62.5653 23.7033C62.5653 25.4667 63.2789 26.6778 64.6017 26.6778Z" fill="white"/>
  <path d="M72.844 28.1463C72.844 28.1463 72.4867 28.4036 71.6129 28.4036C70.7392 28.4036 70.4083 28.1463 70.4083 28.1463V19.3546C70.4083 19.3546 71.4011 18.8837 73.2266 18.8837C75.9913 18.8837 77.275 19.9607 77.275 21.8454C77.275 23.7301 75.8722 24.4563 75.7004 24.4712L77.8432 28.0936C77.5796 28.2675 76.8523 28.4026 76.3623 28.4026C75.7267 28.4026 75.225 28.1741 75.225 28.1741L73.6113 25.3068C73.5175 25.1041 73.3858 24.9561 73.1612 24.9561H72.844V28.1463ZM73.5322 20.7148C73.1349 20.7148 72.844 20.7952 72.844 20.7952V23.138H73.5049C74.4694 23.138 74.8413 22.4514 74.8413 21.9269C74.8413 21.2403 74.3786 20.7148 73.5322 20.7148Z" fill="white"/>
  <path d="M87.211 28.0787C87.211 28.0787 86.5901 28.4026 85.5836 28.4026C84.7236 28.4026 84.3663 28.1741 84.3663 28.1741L81.2317 23.8384V28.1463C81.2317 28.1463 80.9007 28.4036 80.027 28.4036C79.1533 28.4036 78.797 28.1463 78.797 28.1463V19.2344C78.797 19.2344 79.1533 18.9781 80.027 18.9781C80.9007 18.9781 81.2317 19.2344 81.2317 19.2344V23.4221L84.2618 19.2205C84.2618 19.2205 84.6182 18.9781 85.4782 18.9781C86.4701 18.9781 86.8684 19.3139 86.8684 19.3139L83.9045 23.4221L87.212 28.0797L87.211 28.0787Z" fill="white"/>
  <path d="M58.9806 31.3374C59.1515 32.1988 58.7014 32.8853 58.1987 33.0602C57.7096 32.7244 56.9296 32.4273 56.1096 32.4273C55.2895 32.4273 54.8122 32.7502 54.8122 33.2082C54.8122 33.6394 55.1958 33.7874 56.214 34.1252L57.4841 34.5415C58.8479 34.9985 59.6933 35.7 59.6933 37.1803C59.6933 38.8911 58.5823 40.2105 55.8831 40.2105C53.9912 40.2105 52.8256 39.5637 52.4029 39.1335C52.2711 38.5007 52.6137 37.7059 53.1057 37.4505C53.5284 37.7744 54.7848 38.3934 56.0676 38.3934C56.8359 38.3934 57.2596 38.1112 57.2596 37.5986C57.2596 37.2359 57.034 37.0064 56.5049 36.8306L54.3758 36.1719C53.2365 35.8073 52.3775 34.9737 52.3775 33.6126C52.3775 31.6732 53.6729 30.5973 56.0676 30.5973C57.5895 30.5973 58.4779 31.0145 58.9806 31.3374Z" fill="white"/>
  <path d="M60.3542 32.5227C60.3542 32.5227 60.1023 32.2534 60.1023 31.6067C60.1023 30.9599 60.3542 30.6906 60.3542 30.6906H67.5382C67.5382 30.6906 67.7901 30.9738 67.7901 31.6067C67.7901 32.2395 67.5382 32.5227 67.5382 32.5227H65.1562V39.8608C65.1562 39.8608 64.8136 40.1161 63.9525 40.1161C63.0915 40.1161 62.7088 39.8608 62.7088 39.8608V32.5227H60.3542Z" fill="white"/>
  <path d="M72.7502 30.9341L76.3232 39.8201C76.3232 39.8201 75.9659 40.1171 75.0658 40.1171C74.2321 40.1171 73.9032 39.8747 73.9032 39.8747L73.254 38.3258H69.8538L69.2446 39.8747C69.2446 39.8747 68.901 40.1171 68.081 40.1171C67.1819 40.1171 66.7972 39.8201 66.7972 39.8201L70.3702 30.9341C70.3702 30.9341 70.7002 30.6916 71.5592 30.6916C72.4183 30.6916 72.7502 30.9341 72.7502 30.9341ZM70.5674 36.5216H72.5394L71.8775 34.9051C71.7457 34.5822 71.5729 33.9226 71.5583 33.855C71.5329 33.9226 71.3337 34.5822 71.2156 34.9051L70.5674 36.5216Z" fill="white"/>
  <path d="M75.5949 32.5227C75.5949 32.5227 75.3431 32.2534 75.3431 31.6067C75.3431 30.9599 75.5949 30.6906 75.5949 30.6906H82.779C82.779 30.6906 83.0298 30.9738 83.0298 31.6067C83.0298 32.2395 82.779 32.5227 82.779 32.5227H80.397V39.8608C80.397 39.8608 80.0543 40.1161 79.1933 40.1161C78.3323 40.1161 77.9496 39.8608 77.9496 39.8608V32.5227H75.5949Z" fill="white"/>
  <path d="M88.9047 36.0228H86.5891V38.299H89.9356C89.9356 38.299 90.1875 38.5821 90.1875 39.2001C90.1875 39.8181 89.9356 40.1161 89.9356 40.1161H84.1408V30.6897H89.6711C89.6711 30.6897 89.9356 30.9728 89.9356 31.6057C89.9356 32.2385 89.6711 32.5217 89.6711 32.5217H86.5882V34.1908H88.9038C88.9038 34.1908 89.1547 34.4879 89.1547 35.1078C89.1547 35.7278 88.9038 36.0219 88.9038 36.0219L88.9047 36.0228Z" fill="white"/>
  <path d="M51.7107 54.9999C51.577 54.9999 51.4335 54.974 51.2939 54.8965C51.085 54.7803 50.9395 54.5876 50.8858 54.3551C50.8233 54.0868 50.8936 53.7868 51.082 53.5116L51.1426 53.4202C51.2041 53.3268 51.2685 53.2354 51.3407 53.1519C51.4218 53.0595 51.5047 52.995 51.5741 52.9493C51.5243 52.6691 51.5418 52.4267 51.5682 52.2061C51.5877 52.0233 51.6346 51.8683 51.6726 51.7451C51.6892 51.6925 51.7058 51.6388 51.7185 51.5812C51.8201 51.145 51.8855 50.7397 51.9206 50.3453C51.9528 49.9916 51.947 49.9846 51.8864 49.9061C51.7 49.6707 51.3847 49.5018 51.0498 49.3229C50.8878 49.2365 50.7286 49.1491 50.5754 49.0557C49.607 48.4536 48.6376 47.8505 47.6701 47.2465L47.3294 47.0339C47.2513 46.9862 47.1147 46.9156 46.9516 46.8282C45.8817 46.2659 45.172 45.8526 45.0539 45.2595C45.0363 45.173 44.9465 44.9644 44.884 44.864C44.8411 44.8611 44.7307 44.8521 44.6546 44.8471C44.3032 44.8183 43.7711 44.7726 43.3484 44.3196C43.2635 44.2272 43.1786 44.1408 43.1005 44.0583C42.5098 43.4443 42.0003 42.9148 41.9329 41.5993C41.9241 41.4275 41.9251 41.2506 41.928 41.0728C41.9339 40.5283 41.927 40.1836 41.7103 39.962C41.6078 39.8567 41.435 39.7862 41.2349 39.7037C40.9889 39.6034 40.7097 39.4881 40.45 39.2686C40.37 39.2 40.2792 39.1007 40.1776 38.9854C40.0712 38.8602 39.9082 38.6724 39.7969 38.6337C38.974 38.3436 37.986 38.3178 36.96 38.3178L3.07245 38.2909C2.85964 38.2909 2.66927 38.3138 2.48477 38.3347C2.07378 38.3823 1.60812 38.437 1.2313 38.0962C0.866192 37.7664 0.815429 37.2607 0.814452 36.8076L0.8125 34.3993C0.8125 34.2722 0.847644 34.147 0.913051 34.0387C1.22544 33.529 1.83265 33.2558 2.3686 33.0144C2.56872 32.924 2.77666 32.8316 2.88795 32.7571C3.17593 32.5623 3.43561 32.302 3.7109 32.0248C3.91688 31.8182 4.13068 31.6046 4.36887 31.4059C4.69786 31.1317 5.07078 30.931 5.43296 30.7372C5.74535 30.5703 6.03821 30.4124 6.24127 30.2395C6.38575 30.1173 6.49216 29.9146 6.61906 29.6792C6.75476 29.4238 6.90998 29.1337 7.15208 28.8804C7.41273 28.6081 7.7427 28.4194 8.03263 28.2535C8.69744 27.871 8.68182 27.8322 8.57736 27.5769C8.52855 27.4577 8.48072 27.3553 8.43972 27.2639C8.24447 26.8357 8.07754 26.4681 8.19078 25.7051C8.2025 25.6306 8.21616 25.5521 8.22983 25.4706C8.25619 25.3325 8.30305 25.0772 8.27571 25.0037C8.27571 25.0037 8.26204 24.9927 8.23471 24.9778C8.21128 24.9659 8.12928 24.9669 8.06875 24.9679C7.87448 24.9659 7.51914 24.9768 7.2497 24.6689C6.98124 24.3629 6.99686 23.9555 7.03982 23.6356C7.08179 23.3127 7.06032 23.1051 7.03982 22.9223C6.95684 22.1453 7.21358 21.7817 8.10097 21.424C10.7524 20.351 12.901 19.9884 14.8613 20.2805C14.9775 20.2974 15.1356 20.2656 15.3182 20.2269C15.5944 20.1702 15.9351 20.1017 16.312 20.1752L18.3952 20.5766C19.2475 20.7415 19.6653 20.9054 20.3047 21.4995C20.6327 21.8046 20.7655 21.7718 21.3327 21.5661C21.6168 21.4638 21.9399 21.3485 22.3323 21.2949C22.9727 21.2084 23.5731 21.2661 24.153 21.3227C24.4136 21.3475 24.6762 21.3734 24.9408 21.3843C25.2356 21.3952 25.6085 21.2561 25.9717 21.121C26.1318 21.0614 26.2889 21.0028 26.4412 20.9541C26.78 20.8468 27.0973 20.7991 27.4038 20.7514C27.5551 20.7266 27.7064 20.7037 27.8607 20.6729C27.8714 20.6531 27.8821 20.6332 27.8939 20.6113C27.9417 20.5249 27.9944 20.4345 28.0598 20.3411C28.3419 19.9497 28.7471 19.7003 29.0722 19.4966L29.2078 19.4122C29.5564 19.1916 29.8629 18.9879 30.105 18.7386C30.5423 18.2796 31.1232 18.3114 31.5108 18.3312C31.6455 18.3392 31.8495 18.3481 31.91 18.3223C32.1678 18.207 31.9413 17.3993 31.8065 16.9165C31.7119 16.5777 31.6299 16.2846 31.6133 16.0183C31.5664 15.2642 31.9764 14.7317 32.3064 14.3045C32.5651 13.9687 32.7213 13.7481 32.7164 13.5355C32.7164 13.4948 32.7027 13.4382 32.6851 13.3845C32.4587 13.4948 32.0955 13.6369 31.6796 13.4421C31.0129 13.1302 30.6468 12.0264 30.8508 11.3985C31.0197 10.8779 31.54 10.5421 31.9198 10.2957L32.0565 10.2053C32.3806 9.98471 32.7242 9.79792 33.0542 9.6181C33.5159 9.36873 33.9513 9.13227 34.2949 8.82726C34.4404 8.69711 34.5761 8.56994 34.7089 8.44376C35.0076 8.1626 35.3161 7.8715 35.6792 7.61319C35.7056 7.5188 35.728 7.34096 35.7437 7.22571C35.7729 7.00714 35.8022 6.78062 35.8803 6.5849C36.2513 5.64304 37.1592 4.90884 37.9597 4.25908C38.2252 4.04448 38.4771 3.84081 38.6743 3.65602C38.7992 3.53878 38.9222 3.42055 39.0452 3.30332C39.6388 2.73701 40.2509 2.15084 40.9967 1.68289C41.601 1.30536 42.3898 0.833439 43.1249 0.552274C44.0972 0.1807 44.5579 0.208518 45.4766 0.262168L45.6474 0.27111C47.3607 0.371455 49.1384 0.32476 50.8575 0.281045C51.7205 0.258194 52.5796 0.235343 53.4347 0.230376C53.6651 0.230376 54.0156 0.185667 54.3836 0.138972C55.6078 -0.0140291 56.994 -0.188888 57.7818 0.503592C58.1118 0.792705 58.2924 1.19806 58.3031 1.67594C58.311 2.05248 58.1567 2.33464 58.0435 2.54129C58.0064 2.60686 57.9527 2.7082 57.9458 2.74297C57.9488 2.73205 57.9849 2.78768 58.0103 2.82742C58.1362 3.01718 58.3686 3.37088 58.2748 3.89843C58.2397 4.10111 58.1811 4.3167 58.1216 4.53528C58.0464 4.81147 57.9693 5.09761 57.9624 5.31419C57.9498 5.69073 57.6335 5.99376 57.2703 5.97289C56.9013 5.95998 56.6104 5.64603 56.6231 5.26849C56.6367 4.89195 56.7392 4.50944 56.831 4.17264C56.8788 3.9948 56.9276 3.82094 56.9569 3.65502C56.9481 3.65502 56.9218 3.62323 56.8993 3.58746C56.791 3.42254 56.6065 3.14535 56.6065 2.73701C56.6065 2.36345 56.7607 2.08328 56.873 1.87862C56.9072 1.81702 56.9589 1.72462 56.9657 1.69084C56.9608 1.58354 56.9267 1.55274 56.9072 1.53685C56.5694 1.23979 55.2544 1.40372 54.5496 1.49313C54.1386 1.5438 53.752 1.59348 53.4435 1.59547C52.5971 1.60043 51.7439 1.62229 50.8907 1.64315C49.1442 1.68886 47.3382 1.73654 45.5722 1.63421L45.3985 1.62328C44.5345 1.57162 44.3022 1.55871 43.5964 1.82894C42.9618 2.07235 42.2101 2.5244 41.7006 2.84431C41.0699 3.23973 40.533 3.75338 39.9648 4.29683C39.8379 4.41804 39.712 4.53925 39.5831 4.65947C39.3479 4.87804 39.0794 5.09661 38.7953 5.32611C38.1237 5.87056 37.3642 6.48555 37.1231 7.09457C37.1065 7.14425 37.085 7.30221 37.0713 7.40753C37.0147 7.84666 36.9424 8.3931 36.5041 8.69016C36.1927 8.90277 35.9145 9.16704 35.6187 9.44523C35.4771 9.57935 35.3317 9.71546 35.1774 9.85257C34.7186 10.2629 34.1924 10.548 33.6838 10.8222C33.3675 10.9931 33.0698 11.1541 32.8033 11.3369C32.7554 11.3707 32.6978 11.4064 32.6373 11.4462C32.5114 11.5276 32.2332 11.7065 32.1346 11.8217C32.1424 11.8992 32.1726 12.0115 32.2117 12.1009C32.3757 12.0214 32.6041 11.924 32.8804 11.9459C33.6633 12.0135 34.0401 12.8937 34.0558 13.4988C34.0743 14.2191 33.677 14.7337 33.3587 15.145C33.0971 15.4868 32.9351 15.7074 32.9487 15.9319C32.9565 16.0511 33.0288 16.3114 33.0932 16.5419C33.3314 17.3933 33.7746 18.978 32.4479 19.5701C32.0965 19.7281 31.7314 19.7082 31.4375 19.6933C31.3126 19.6864 31.1046 19.6764 31.047 19.7023C30.7171 20.051 30.3227 20.3113 29.9166 20.5706L29.7692 20.663C29.5212 20.816 29.2654 20.976 29.1405 21.1488C29.1083 21.1935 29.0819 21.2412 29.0585 21.2859C28.9345 21.5085 28.7256 21.884 28.174 21.9993C27.9827 22.04 27.7943 22.0708 27.6059 22.0996C27.3364 22.1414 27.0807 22.1811 26.8386 22.2566C26.7087 22.2993 26.5711 22.35 26.4334 22.4017C25.9697 22.5745 25.4435 22.7732 24.8871 22.7474C24.5981 22.7355 24.3131 22.7087 24.027 22.6808C23.4989 22.6282 22.9981 22.5805 22.511 22.6481C22.2572 22.6828 22.0258 22.7653 21.7817 22.8537C21.1716 23.0733 20.3369 23.3733 19.4046 22.508C18.9927 22.1265 18.8267 22.049 18.1473 21.9178L16.065 21.5164C15.942 21.4936 15.775 21.5264 15.5818 21.5651C15.3289 21.6168 15.0136 21.6784 14.6719 21.6297C12.9508 21.3724 11.0218 21.7112 8.59689 22.6928C8.49829 22.7325 8.42703 22.7643 8.37431 22.7891C8.39579 22.9779 8.42312 23.2491 8.39091 23.6217C8.53343 23.6416 8.69353 23.6843 8.86047 23.7737C9.81228 24.2834 9.63461 25.256 9.5487 25.724C9.53601 25.7876 9.52528 25.8511 9.51551 25.9127C9.4628 26.2694 9.49501 26.3429 9.65511 26.6917C9.70392 26.798 9.75664 26.9162 9.81326 27.0543C10.3941 28.4681 9.28415 29.1039 8.68865 29.4447C8.46705 29.5719 8.23764 29.701 8.11268 29.8331C7.99944 29.9524 7.89987 30.1372 7.79541 30.3329C7.62945 30.6448 7.44104 30.9975 7.10522 31.2847C6.79088 31.5529 6.41894 31.7536 6.05871 31.9454C5.74144 32.1153 5.44077 32.2762 5.21623 32.464C5.02782 32.6219 4.84527 32.8048 4.65295 32.9985C4.34252 33.3085 4.02524 33.6294 3.62499 33.8976C3.41901 34.0347 3.17203 34.147 2.9104 34.2652C2.69661 34.3606 2.33443 34.5225 2.14992 34.6626L2.15383 36.8096C2.15383 36.8881 2.15578 36.9527 2.15871 37.0023C2.21533 36.9974 2.27586 36.9904 2.32662 36.9835C2.5287 36.9606 2.77959 36.9308 3.06952 36.9308L36.9581 36.9566C38.0573 36.9566 39.2141 36.9884 40.2304 37.3471C40.6755 37.5021 40.9801 37.8538 41.1812 38.0853C41.2281 38.1399 41.2681 38.1896 41.3052 38.2234C41.4018 38.3048 41.5551 38.3674 41.7328 38.441C42.0129 38.5562 42.3615 38.7003 42.6572 39.0043C43.2811 39.6411 43.2713 40.4469 43.2645 41.0927C43.2606 41.2417 43.2606 41.3897 43.2664 41.5328C43.3084 42.3326 43.5261 42.5581 44.0532 43.1055C44.1372 43.1929 44.2251 43.2853 44.3188 43.3847C44.3842 43.4542 44.5287 43.4701 44.761 43.491C45.0412 43.5138 45.3897 43.5417 45.6953 43.7751C46.0291 44.0275 46.2546 44.5888 46.3376 44.8809C46.5455 45.0846 47.2777 45.4711 47.5647 45.6211C47.7639 45.7264 47.9298 45.8158 48.0265 45.8754L48.3672 46.088C49.3346 46.6891 50.3011 47.2922 51.2705 47.8943C51.3993 47.9727 51.533 48.0463 51.6707 48.1188C52.0924 48.3443 52.5698 48.6006 52.9291 49.0567C53.3215 49.5544 53.2942 50.0045 53.259 50.4029C53.3156 50.2936 53.3781 50.1893 53.4513 50.0879C53.5841 49.8982 53.7393 49.7541 53.877 49.626C54.0136 49.4998 54.1073 49.4104 54.1396 49.3388C54.1132 49.2772 54.0527 49.1739 54.0117 49.1034C53.8487 48.8232 53.6271 48.4387 53.7315 47.9857C53.7725 47.8108 53.8789 47.6588 54.0283 47.5634C54.0849 47.5276 54.205 47.4591 54.3631 47.3717C54.5818 47.2495 55.1373 46.9405 55.475 46.71C54.9723 45.5913 55.1392 44.2163 55.2886 42.9843C55.3345 42.6038 55.3784 42.2451 55.3989 41.9222C55.4204 41.5467 55.7337 41.2606 56.1076 41.2834C56.4776 41.3063 56.7588 41.6301 56.7353 42.0057C56.7148 42.3693 56.667 42.7498 56.6182 43.1522C56.4776 44.3166 56.3165 45.637 56.833 46.3911C56.954 46.5669 56.994 46.7895 56.9452 47.0021C56.8417 47.4502 56.3898 47.7879 55.1958 48.4606C55.352 48.7308 55.5395 49.0904 55.4731 49.5167C55.4623 49.5812 55.4487 49.6428 55.4321 49.7015C55.766 49.5793 56.1154 49.464 56.4845 49.3577C57.8775 48.9543 59.3409 48.7745 61.225 48.7745C62.0587 48.7745 62.8006 48.5053 63.5874 48.2211C64.2103 47.9946 64.8546 47.7621 65.576 47.6508C66.1852 47.5555 66.5005 47.7562 66.7728 47.9688C66.8636 48.0403 66.93 48.09 67.0442 48.1357C67.3625 48.2619 67.7325 48.2211 68.1601 48.1754C68.5925 48.1277 69.0836 48.0731 69.5844 48.2042C69.8821 48.2837 70.09 48.5579 70.0861 48.8709C70.0744 50.0571 68.5076 50.5459 67.7549 50.7814L67.0384 51.0099C66.4985 51.1848 65.9567 51.3586 65.41 51.5176C65.1631 51.5881 64.918 51.6587 64.672 51.7223C64.3889 51.7948 64.099 51.9597 63.7944 52.1316C63.481 52.3094 63.1579 52.4922 62.786 52.6174C62.1426 52.83 61.4837 52.9413 60.6471 52.9761C60.4069 52.987 60.1746 53.0943 59.9295 53.2056C59.5674 53.3735 59.1154 53.5801 58.6107 53.4132C58.3949 53.3864 57.5534 53.6775 57.1502 53.8196C56.832 53.9289 56.5577 54.0242 56.3419 54.0759C55.598 54.2528 54.8415 54.3918 54.1103 54.527L53.5968 54.6223C53.1516 54.7058 52.7035 54.7922 52.2613 54.8926L52.2076 54.9085C52.0797 54.9482 51.9021 55.0038 51.7078 55.0038L51.7107 54.9999ZM53.0735 51.6746C53.0569 51.7471 53.0403 51.8196 53.0237 51.8941C53.0032 51.9806 52.9788 52.064 52.9544 52.1455C52.9281 52.2359 52.9066 52.3055 52.8988 52.3651C52.8793 52.5379 52.8773 52.6313 52.8978 52.7247C52.9495 52.9791 52.9388 53.1907 52.8949 53.3645C53.0482 53.3347 53.2024 53.3049 53.3566 53.2751L53.875 53.1808C54.5896 53.0486 55.3296 52.9125 56.0412 52.7436C56.1906 52.7078 56.4483 52.6194 56.7217 52.525C57.7721 52.1604 58.4994 51.9359 59.0295 52.1127C59.0646 52.1058 59.2559 52.0173 59.3828 51.9597C59.7001 51.8137 60.0945 51.6328 60.5924 51.611C61.3021 51.5812 61.8498 51.4908 62.372 51.3169C62.622 51.2345 62.8748 51.0914 63.1442 50.9374C63.5123 50.7298 63.892 50.5142 64.3469 50.3969C64.5793 50.3373 64.8136 50.2707 65.0459 50.2042C65.5789 50.0482 66.11 49.8773 66.6362 49.7064L67.1253 49.5514C66.9388 49.5246 66.7504 49.4779 66.56 49.4014C66.2672 49.2862 66.0836 49.1411 65.9616 49.0457C65.9313 49.0229 65.906 48.999 65.8757 48.9812C65.8737 48.9851 65.8405 48.9851 65.7781 48.9941C65.1845 49.0855 64.6281 49.2862 64.0394 49.4998C63.1794 49.8107 62.293 50.1326 61.2279 50.1326C59.4717 50.1326 58.1235 50.2966 56.8535 50.6642C55.7142 50.992 54.7868 51.3984 54.0166 51.9031C53.7901 52.0521 53.5001 52.0481 53.2776 51.8951C53.1917 51.8365 53.1214 51.76 53.0735 51.6716V51.6746Z" fill="white"/>
  <path d="M67.6348 51.8019C67.6348 51.8019 67.6173 51.782 67.6173 51.7303C67.6173 51.6787 67.6348 51.6588 67.6348 51.6588H68.5564C68.5564 51.6588 68.5749 51.6806 68.5749 51.7303C68.5749 51.78 68.5564 51.8019 68.5564 51.8019H68.1932V52.9205C68.1932 52.9205 68.1659 52.9404 68.0976 52.9404C68.0292 52.9404 67.998 52.9205 67.998 52.9205V51.8019H67.6348Z" fill="white"/>
  <path d="M69.4282 52.8659C69.4135 52.8748 69.3891 52.8858 69.3471 52.8858C69.3178 52.8858 69.2837 52.8798 69.27 52.8659L68.9889 52.1476C68.9723 52.1088 68.9459 52.0323 68.944 52.0214C68.944 52.0264 68.9371 52.1277 68.9332 52.1565L68.8815 52.9205C68.8815 52.9205 68.8561 52.9404 68.7858 52.9404C68.7155 52.9404 68.6862 52.9205 68.6862 52.9205L68.7839 51.6787C68.7839 51.6787 68.8112 51.6588 68.8776 51.6588C68.9518 51.6588 68.9781 51.6787 68.9781 51.6787L69.3042 52.5162L69.3471 52.6533C69.3481 52.6473 69.3774 52.5559 69.392 52.5162L69.7181 51.6787C69.7181 51.6787 69.7464 51.6588 69.8206 51.6588C69.886 51.6588 69.9124 51.6787 69.9124 51.6787L70.01 52.9205C70.01 52.9205 69.9807 52.9404 69.9104 52.9404C69.8401 52.9404 69.8167 52.9205 69.8167 52.9205L69.763 52.1546L69.7523 52.0194C69.7523 52.0194 69.722 52.1148 69.7093 52.1456L69.4282 52.8659Z" fill="white"/>
</svg>`, Dc = ':host{--_nys-unavfooter-color: var( --nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff) );--_nys-unavfooter-background-color: var(--nys-color-surface-reverse, #1b1b1b);--_nys-unavfooter-gap: var(--nys-space-200, 16px);--_nys-unavfooter-padding: var(--nys-space-250, 20px);--_nys-unavfooter-padding--gutter: var(--nys-gutter-sm, 20px);--_nys-unavfooter-font-size: var( --nys-font-size-body-md, var(--nys-font-size-md, 16px) );--_nys-unavfooter-font-weight: var(--nys-font-weight-semibold, 600);--_nys-unavfooter-max-width: var(--nys-max-content-width, 1280px);--_nys-unavfooter-row-gap: var(--nys-space-250, 20px);--_nys-unavfooter-column-gap: var(--nys-space-600, 48px);--_nys-unavfooter-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-unavfooter-letter-spacing: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) );--_nys-unavfooter-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-unavfooter-text-decoration-thickness: var(--nys-size-2px, 2px)}ul{list-style-type:none;padding:0;margin:0}li{margin:0;padding:0}a{color:var(--_nys-unavfooter-color);text-decoration:none;font-family:var(--_nys-unavfooter-font-family);font-size:var(--_nys-unavfooter-font-size);font-style:normal;font-weight:var(--_nys-unavfooter-font-weight);line-height:var(--_nys-unavfooter-line-height);letter-spacing:var(--_nys-unavfooter-letter-spacing);text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:7%;text-underline-offset:auto;text-underline-position:from-font}a:hover{text-decoration-line:underline}a:active{text-decoration-thickness:var(--_nys-unavfooter-text-decoration-thickness)}.nys-unavfooter{display:flex;flex-direction:column;gap:var(--_nys-unavfooter-gap);align-items:flex-start;background-color:var(--_nys-unavfooter-background-color);width:100%;box-sizing:border-box}.nys-unavfooter__main-container{display:flex;justify-content:center;width:100%}.nys-unavfooter__container_menu{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;max-width:var(--_nys-unavfooter-max-width);padding:var(--_nys-unavfooter-padding) var(--_nys-unavfooter-padding--gutter);gap:var(--_nys-unavfooter-gap);box-sizing:border-box}.nys-unavfooter__logo a{display:flex;align-items:center;line-height:0}.nys-unavfooter__content{display:flex;align-items:center}.nys-unavfooter__content ul{display:flex;justify-content:center;gap:var(--_nys-unavfooter-row-gap) var(--_nys-unavfooter-column-gap);flex-wrap:wrap}@media(min-width:768px){.nys-unavfooter__container_menu{flex-direction:row}.nys-unavfooter__content ul{justify-content:flex-start}:host{--_nys-unavfooter-padding--gutter: var(--nys-gutter-lg, 32px);--_nys-unavfooter-column-gap: var(--nys-space-600, 48px);--_nys-unavfooter-gap-spacing: var(--nys-space-800, 64px)}}@media(min-width:1280px){:host{--_nys-unavfooter-padding--gutter: var(--nys-gutter-xl, 64px)}}', an = class an extends m {
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _getNysLogo() {
    return new DOMParser().parseFromString(Sc, "image/svg+xml").documentElement;
  }
  render() {
    return h`
      <footer class="nys-unavfooter">
        <div class="nys-unavfooter__main-container">
          <div class="nys-unavfooter__container_menu">
            <div class="nys-unavfooter__logo">
              <a
                href="https://www.ny.gov"
                target="_blank"
                id="nys-unavheader__logolink"
                aria-label="logo of New York State"
                >${this._getNysLogo()}</a
              >
            </div>
            <div class="nys-unavfooter__content">
              <ul>
                <li><a href="https://www.ny.gov/agencies">Agencies</a></li>
                <li>
                  <a href="https://www.ny.gov/mobileapps">App Directory</a>
                </li>
                <li><a href="https://www.ny.gov/counties">Counties</a></li>
                <li><a href="https://www.ny.gov/events">Events</a></li>
                <li><a href="https://www.ny.gov/programs">Programs</a></li>
                <li><a href="https://www.ny.gov/services">Services</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
};
an.styles = w(Dc);
let Ds = an;
customElements.get("nys-unavfooter") || customElements.define("nys-unavfooter", Ds);
const Lc = '@charset "UTF-8";:host{--_nys-video-width: fit-content;--_nys-video-height: var(--nys-size-600, 48px);--_nys-video-radius: var(--nys-radius-lg, 8px);--_nys-video-padding: var(--nys-space-100, 8px);--_nys-video-gap: var(--nys-space-100, 8px);--_nys-video-font-size: var(--nys-font-size-ui-md, 16px);--_nys-video-font-weight: var(--nys-font-weight-semibold, 600);--_nys-video-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-video-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-video-background-color--play-button: var( --nys-color-black-transparent-600, rgba(27, 27, 27, .6) );--_nys-video-outline-color--play-button: var(--nys-color-focus, #004dd1);--_nys-video-svg-color--play-button: var( --nys-color-white-transparent-400, rgba(255, 255, 255, .4) );--_nys-video-color--title-text: var(--nys-color-text-reverse, #ffffff);--_nys-video-background-color--title-text: var( --nys-color-ink, var(--nys-color-neutral-900, #1b1b1b) );--_nys-video-padding--title-text: var(--nys-space-250, 20px)}.nys-video--full{width:100%}.nys-video--md{width:100%;max-width:675px}.nys-video--sm{width:100%;min-width:320px;max-width:439px}:host([size=full]) .nys-video .nys-video__title-text{position:absolute;bottom:0;--_nys-video-background-color--title-text: var( --nys-color-black-transparent-900, rgba(27, 27, 27, .9) )}@media(min-width:480px){.nys-video:not(.nys-video--sm):not(.nys-video--md) .nys-video__title-text{position:absolute;bottom:0;--_nys-video-background-color--title-text: var( --nys-color-black-transparent-900, rgba(27, 27, 27, .9) )}}.nys-video{border-radius:var(--_nys-video-radius);display:flex;flex-direction:column;position:relative;overflow:hidden}.nys-video .nys-video__ratio-box{aspect-ratio:16/9;position:relative}.nys-video .nys-video__ratio-box iframe,.nys-video .nys-video__ratio-box .nys-video__thumbnail{position:absolute;top:0;left:0;width:100%;height:100%;display:block;border:none}.nys-video .nys-video__ratio-box .nys-video__thumbnail{cursor:pointer;padding:0;background-color:transparent}.nys-video .nys-video__ratio-box .nys-video__thumbnail img{width:100%;height:100%;object-fit:cover}.nys-video .nys-video__ratio-box .nys-video__thumbnail .nys-video__play-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:96px;height:96px;background-color:var(--_nys-video-background-color--play-button);border:none;border-radius:50%;display:flex;align-items:center;justify-content:center;pointer-events:none}.nys-video .nys-video__ratio-box .nys-video__thumbnail .nys-video__play-icon svg{display:flex;margin-left:10px}.nys-video .nys-video__ratio-box .nys-video__thumbnail .nys-video__play-icon:focus-visible{outline:3.5px solid var(--_nys-video-outline-color--play-button);outline-offset:1px}.nys-video .nys-video__ratio-box .nys-video__thumbnail:hover .nys-video__play-icon{--_nys-video-background-color--play-button: var( --nys-color-black-transparent-700, rgba(27, 27, 27, .7) )}.nys-video .nys-video__ratio-box .nys-video__thumbnail:active .nys-video__play-icon{--_nys-video-background-color--play-button: var( --nys-color-black-transparent-800, rgba(27, 27, 27, .8) )}.nys-video--disabled .nys-video__ratio-box{cursor:not-allowed}.nys-video--disabled .nys-video__ratio-box .nys-video__thumbnail{pointer-events:none}.nys-video--disabled .nys-video__ratio-box .nys-video__thumbnail .nys-video__play-icon{--_nys-video-background-color--play-button: var( --nys-color-black-transparent-200, rgba(27, 27, 27, .2) )}.nys-video--disabled .nys-video__ratio-box .nys-video__thumbnail .nys-video__play-icon svg{fill:var(--_nys-video-svg-color--play-button)}.nys-video .nys-video__title-text{width:100%;padding:var(--_nys-video-padding--title-text);background-color:var(--_nys-video-background-color--title-text);box-sizing:border-box;color:var(--_nys-video-color--title-text);display:flex;justify-content:start;font-family:var(--_nys-video-font-family);font-size:var(--_nys-video-font-size);font-weight:var(--_nys-video-font-weight);line-height:var(--_nys-video-line-height)}.nys-video .nys-video__title-text p{margin:0}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}';
var Ac = Object.defineProperty, Be = (n, e, t, s) => {
  for (var o = void 0, r = n.length - 1, i; r >= 0; r--)
    (i = n[r]) && (o = i(e, t, o) || o);
  return o && Ac(e, t, o), o;
};
let Tc = 0;
const ln = class ln extends m {
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.titleText = "", this.videourl = "", this.size = "", this.loading = "lazy", this.starttime = 0, this.thumbnail = null, this.autoplay = !1, this.disabled = !1, this._playerActive = !1, this._announcement = "", this._adPlaying = !1;
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-video-${Date.now()}-${Tc++}`), this.autoplay && this._announceVideoVO();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _isValidYouTubeUrl() {
    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/.test(
      this.videourl
    );
  }
  _getVideoId() {
    const e = /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([^?&]+)/, t = this.videourl.match(e);
    return t ? t[1] : null;
  }
  _getThumbnailUrl() {
    return this.thumbnail ? this.thumbnail : `https://img.youtube.com/vi/${this._getVideoId()}/maxresdefault.jpg`;
  }
  _getEmbedUrl() {
    const e = this._getVideoId();
    if (!e) return null;
    const t = new URLSearchParams({
      autoplay: "1",
      enablejsapi: "1",
      ...this.autoplay && { mute: "1" },
      ...this.starttime > 0 && { start: String(this.starttime) }
    });
    return `https://www.youtube.com/embed/${e}?${t}`;
  }
  /**
   * Because I need to know if Youtube ADs are playing, I need to call YT's API.
   * Hence, the YT API setup below. The VO has 2 types of announcements:
   * - "Advertisement is playing"
   * - "Video is playing"
   *
   * YT IFrame Player API: https://developers.google.com/youtube/iframe_api_reference
   */
  _announceVideoVO() {
    const e = () => {
      this.updateComplete.then(() => {
        const t = this.shadowRoot?.querySelector("iframe");
        t && new window.YT.Player(t, {
          events: {
            onStateChange: (s) => {
              this._adPlaying || s.data === window.YT.PlayerState.PLAYING && (this._announcement = this.autoplay ? "Video is playing, muted" : "Video is playing", setTimeout(() => this._announcement = "", 1e3));
            },
            // // NOTE: onAdStateChange is not officially documented by YouTube.
            // It is a real event fired by the IFrame player, discovered through community reverse-engineering
            onAdStateChange: (s) => {
              this._adPlaying = s.data === window.YT.PlayerState.PLAYING, this._adPlaying && (this._announcement = "Advertisement is playing", setTimeout(() => this._announcement = "", 1e3));
            }
          }
        });
      });
    };
    if (window.YT?.Player)
      e();
    else {
      if (!document.getElementById("yt-iframe-api")) {
        const t = document.createElement("script");
        t.id = "yt-iframe-api", t.src = "https://www.youtube.com/iframe_api", document.head.appendChild(t);
      }
      window.onYouTubeIframeAPIReady = e;
    }
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _handleThumbnailClick() {
    this.disabled || (this._playerActive = !0, this.updateComplete.then(() => {
      const e = this.shadowRoot?.querySelector("iframe");
      e && e.addEventListener(
        "load",
        () => {
          e.focus();
        },
        { once: !0 }
      );
    }), this._announceVideoVO());
  }
  /**
   * Render Helpers
   * --------------------------------------------------------------------------
   */
  _renderAnnouncer() {
    return h`
      <div
        aria-live="assertive"
        aria-atomic="true"
        class="nys-video__announcer sr-only"
      >
        ${this._announcement}
      </div>
    `;
  }
  _renderPlayIcon() {
    return this.disabled ? h`<svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="35"
          viewBox="0 0 31 35"
          fill="none"
        >
          <path
            d="M29.4221 15.7357L2.568 0.231711C1.42656 -0.426849 0 0.396831 0 1.71395V32.7229C0 34.041 1.42656 34.8647 2.568 34.2052L29.4221 18.7012C30.5635 18.0426 30.5635 16.3952 29.4221 15.7357Z"
            fill="white"
            fill-opacity="0.4"
          />
        </svg>` : h`<svg
          aria-hidden="true"
          width="31"
          height="35"
          viewBox="0 0 31 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.4221 15.7357L2.568 0.231711C1.42656 -0.426849 0 0.396831 0 1.71395V32.7229C0 34.041 1.42656 34.8647 2.568 34.2052L29.4221 18.7012C30.5635 18.0426 30.5635 16.3952 29.4221 15.7357Z"
            fill="white"
          />
        </svg>`;
  }
  render() {
    if (!this._isValidYouTubeUrl())
      return h``;
    const e = this._getEmbedUrl();
    if (!e) return h``;
    const t = this.size || "md";
    return !this._playerActive && !this.autoplay ? h`
        <div
          class="nys-video nys-video--${t} ${this.disabled ? "nys-video--disabled" : ""}"
        >
          ${this._renderAnnouncer()}
          <div class="nys-video__ratio-box">
            <div
              class="nys-video__thumbnail"
              @click=${this._handleThumbnailClick}
            >
              <img src=${this._getThumbnailUrl()} alt="" />
              <button
                class="nys-video__play-icon"
                aria-label="Play ${this.titleText}"
                ?disabled=${this.disabled}
              >
                ${this._renderPlayIcon()}
              </button>
            </div>
          </div>
          ${this.titleText && h`<div class="nys-video__title-text">
            <p>${this.titleText}</p>
          </div>`}
        </div>
      ` : h`<div class="nys-video nys-video--${t}">
      ${this._renderAnnouncer()}
      <div class="nys-video__ratio-box">
        <iframe
          tabindex="0"
          src=${e}
          title=${this.titleText}
          aria-label=${this.titleText}
          loading=${this.loading}
          allowfullscreen
          frameborder="0"
          allow="accelerometer;autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>`;
  }
};
ln.styles = w(Lc);
let be = ln;
Be([
  a({ type: String, reflect: !0 })
], be.prototype, "id");
Be([
  a({ type: String, reflect: !0 })
], be.prototype, "titleText");
Be([
  a({ type: String })
], be.prototype, "videourl");
Be([
  a({ type: String, reflect: !0 })
], be.prototype, "size");
Be([
  a({ type: String })
], be.prototype, "loading");
Be([
  a({ type: Number })
], be.prototype, "starttime");
Be([
  a({ type: String })
], be.prototype, "thumbnail");
Be([
  a({ type: Boolean })
], be.prototype, "autoplay");
Be([
  a({ type: Boolean, reflect: !0 })
], be.prototype, "disabled");
Be([
  $()
], be.prototype, "_playerActive");
Be([
  $()
], be.prototype, "_announcement");
customElements.get("nys-video") || customElements.define("nys-video", be);
export {
  Pt as NysAccordion,
  it as NysAccordionItem,
  ae as NysAlert,
  me as NysAvatar,
  vt as NysBacktotop,
  mi as NysBadge,
  Ue as NysBreadcrumbs,
  L as NysButton,
  V as NysCheckbox,
  X as NysCheckboxgroup,
  A as NysCombobox,
  Sa as NysDatepicker,
  yo as NysDivider,
  Bt as NysDropdownMenu,
  Ke as NysDropdownMenuItem,
  gt as NysErrorMessage,
  G as NysFileinput,
  Nt as NysGlobalFooter,
  Xe as NysGlobalHeader,
  Sl as NysIcon,
  Ze as NysLabel,
  Me as NysModal,
  lt as NysOption,
  at as NysPagination,
  ce as NysRadiobutton,
  W as NysRadiogroup,
  te as NysSelect,
  bo as NysSkipnav,
  ze as NysStep,
  ct as NysStepper,
  xt as NysTab,
  vo as NysTabgroup,
  Se as NysTable,
  jo as NysTabpanel,
  B as NysTextarea,
  D as NysTextinput,
  fe as NysToggle,
  Qe as NysTooltip,
  Ds as NysUnavFooter,
  Oe as NysUnavHeader,
  be as NysVideo,
  Pc as clearIconCache,
  Oc as registerIconLibrary,
  Rc as unregisterIconLibrary
};
//# sourceMappingURL=nysds.es.js.map
