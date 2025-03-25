import { css as v, LitElement as p, html as c } from "lit";
import { property as a, state as x1 } from "lit/decorators.js";
import { ifDefined as g } from "lit/directives/if-defined.js";
/*!
   * New York State Design System (v1.1.1)
   * Description: A design system for New York State's digital products.
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
 */
const o0 = v`
  :host {
    /* Global Alert Styles */
    --_nys-alert-border-width: var(--nys-border-width-lg, 4px);
    --_nys-alert-border-radius: var(--nys-radius-md, 4px);
    --_nys-alert-hover-border-radius: var(--nys-radius-sm, 2px);
    --_nys-alert-text-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-alert-link-color: var(
      --nys-color-link,
      var(--nys-color-blue-600, #004dd1)
    );
    --_nys-alert-link-hover-color: var(
      --nys-color-link-strong,
      var(--nys-color-blue-700, #003ba1)
    );
    --_nys-alert-link-active-color: var(
      --nys-color-link-strongest,
      var(--nys-color-blue-800, #002971)
    );
    --_nys-alert-spacing: var(--nys-space-250, 20px);
    --_nys-alert-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-alert-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-alert-lineheight: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-alert-letterspacing: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-alert-font-weight-regular: var(--nys-font-weight-regular, 400);
    --_nys-alert-font-weight-semibold: var(--nys-font-weight-semibold, 600);

    /* Border specifics */
    --_nys-alert-color-border-left: var(
      --nys-color-base,
      var(--nys-color-neutral-600, #62666a)
    );

    /* Background type specifics */
    --_nys-alert-color-bg: var(
      --nys-color-base-weak,
      var(--nys-color-neutral-10, #f6f6f6)
    );

    /* Theme Icon */
    --_nys-alert-gap-space-150: var(--nys-space-150, 12px);
    --_nys-alert-gap-space-50: var(--nys-space-50, 4px);
  }

  .nys-alert__icon {
    margin-top: 1.5px; /* this margin is to just better align the icon with the texts */
  }

  /* Main alert container */
  .nys-alert__container {
    display: flex;
    background-color: var(--_nys-alert-color-bg);
    border-left: var(--_nys-alert-border-width) solid
      var(--_nys-alert-color-border-left);
    border-radius: var(--_nys-alert-border-radius);
    color: var(--_nys-alert-text-color);
    padding: var(--_nys-alert-spacing);
    font-style: normal;
    font-family: var(--_nys-alert-font-family);
    font-size: var(--_nys-alert-font-size);
    line-height: var(--_nys-alert-lineheight);
    letter-spacing: var(--_nys-alert-letterspacing);
    gap: var(--_nys-alert-gap-space-150);
    text-align: left;
  }

  /* Links */
  a,
  a:visited {
    font-weight: var(--_nys-alert-font-weight-semibold);
    font-size: var(--_nys-alert-font-size);
    color: var(--_nys-alert-link-color);
  }
  a:hover {
    color: var(--_nys-alert-link-hover-color);
  }
  a:active {
    color: var(--_nys-alert-link-active-color);
  }

  /* For HTML elements put into the slot */
  ::slotted(a) {
    color: var(--_nys-alert-link-color);
  }

  /* Handles both header and description text */
  .nys-alert__texts {
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: var(--_nys-alert-gap-space-50);
  }

  .nys-alert__header {
    margin: 0;
    font-weight: var(--_nys-alert-font-weight-semibold);
  }

  .nys-alert__text {
    font-weight: var(--_nys-alert-font-weight-regular);
    margin: 0;
  }

  /* For HTML elements put into the slot */
  ::slotted(*) {
    font-weight: var(--_nys-alert-font-weight-regular);
    margin: 0;
  }

  .close-container {
    margin-left: auto;
  }

  /* Centered variant: For no descriptions, we remove the <slot name="text"> via JS logic. In styling, centers the icon for a compact layout. */
  .nys-alert--centered {
    display: flex;
    align-items: center;
  }
  .nys-alert--centered .nys-alert__header {
    margin: 0;
  }
  .nys-alert--centered div[part="nys-alert__icon"] {
    margin-top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Action Statement */
  .nys-alert__actions {
    display: flex;
    gap: var(--_nys-alert-gap-space-150);
    flex-wrap: wrap;
  }

  /* Dismiss Button */
  #dismiss-btn {
    --_nys-button-width: var(--nys-size-400, 32px);
    --_nys-button-height: var(--nys-size-400, 32px);
    --_nys-button-padding-y: 0;
    --_nys-button-padding-x: 0;
  }

  /* Alert Types */
  :host([type="info"]) {
    --_nys-alert-color-border-left: var(
      --nys-color-info,
      var(--nys-color-blue-600, #004dd1)
    );
    --_nys-alert-color-bg: var(
      --nys-color-info-weak,
      var(--nys-color-blue-50, #e5effa)
    );
  }
  :host([type="success"]) {
    --_nys-alert-color-border-left: var(
      --nys-color-success,
      var(--nys-color-green-600, #1e752e)
    );
    --_nys-alert-color-bg: var(
      --nys-color-success-weak,
      var(--nys-color-green-50, #e8f1ea)
    );
  }
  :host([type="warning"]) {
    --_nys-alert-color-border-left: var(
      --nys-color-warning,
      var(--nys-color-yellow-400, #face00)
    );
    --_nys-alert-color-bg: var(
      --nys-color-warning-weak,
      var(--nys-color-yellow-50, #fefae5)
    );
  }
  :host([type="danger"]) {
    --_nys-alert-color-border-left: var(
      --nys-color-danger,
      var(--nys-color-red-600, #b52c2c)
    );
    --_nys-alert-color-bg: var(
      --nys-color-danger-weak,
      var(--nys-color-red-50, #f7eaea)
    );
  }
  :host([type="emergency"]) {
    --_nys-alert-color-border-left: var(
      --nys-color-emergency,
      var(--nys-color-red-800, #721c1c)
    );
    --_nys-alert-color-bg: var(
      --nys-color-emergency,
      var(--nys-color-red-800, #721c1c)
    );
    --_nys-alert-text-color: var(
      --nys-color-text-reverse,
      var(--nys-color-white, #fff)
    );
    --_nys-alert-link-color: var(
      --nys-color-link-reverse-neutral,
      var(--nys-color-white, #fff)
    );
    --_nys-alert-link-hover-color: var(
      --nys-color-link-reverse-neutral,
      var(--nys-color-white, #fff)
    );
    --_nys-alert-link-active-color: var(
      --nys-color-link-reverse-neutral,
      var(--nys-color-white, #fff)
    );
  }
  :host([type="emergency"]) a:hover {
    text-decoration-thickness: 2px;
  }
  :host([type="emergency"]) a:active {
    text-decoration-thickness: 3px;
  }
`;
/*!
   * ▒█▄░▒█ ▒█░░▒█ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 
   * ▒█▒█▒█ ▒█▄▄▄█ ░▀▀▀▄▄ ▒█░▒█ ░▀▀▀▄▄ 
   * ▒█░░▀█ ░░▒█░░ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█
   * 
   * Icon Component v1.1.1
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const D5 = globalThis, k2 = D5.ShadowRoot && (D5.ShadyCSS === void 0 || D5.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, V3 = Symbol(), p7 = /* @__PURE__ */ new WeakMap();
let r0 = class {
  constructor(t, e, o) {
    if (this._$cssResult$ = !0, o !== V3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (k2 && t === void 0) {
      const o = e !== void 0 && e.length === 1;
      o && (t = p7.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), o && p7.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const n0 = (s) => new r0(typeof s == "string" ? s : s + "", void 0, V3), i0 = (s, t) => {
  if (k2) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const o = document.createElement("style"), r = D5.litNonce;
    r !== void 0 && o.setAttribute("nonce", r), o.textContent = e.cssText, s.appendChild(o);
  }
}, u7 = k2 ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const o of t.cssRules) e += o.cssText;
  return n0(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: l0, defineProperty: a0, getOwnPropertyDescriptor: C0, getOwnPropertyNames: c0, getOwnPropertySymbols: h0, getPrototypeOf: d0 } = Object, k1 = globalThis, v7 = k1.trustedTypes, p0 = v7 ? v7.emptyScript : "", y7 = k1.reactiveElementPolyfillSupport, m5 = (s, t) => s, X5 = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? p0 : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, A2 = (s, t) => !l0(s, t), g7 = { attribute: !0, type: String, converter: X5, reflect: !1, hasChanged: A2 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), k1.litPropertyMetadata ?? (k1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let r5 = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = g7) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const o = Symbol(), r = this.getPropertyDescriptor(t, o, e);
      r !== void 0 && a0(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, o) {
    const { get: r, set: n } = C0(this.prototype, t) ?? { get() {
      return this[e];
    }, set(i) {
      this[e] = i;
    } };
    return { get() {
      return r == null ? void 0 : r.call(this);
    }, set(i) {
      const l = r == null ? void 0 : r.call(this);
      n.call(this, i), this.requestUpdate(t, l, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? g7;
  }
  static _$Ei() {
    if (this.hasOwnProperty(m5("elementProperties"))) return;
    const t = d0(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(m5("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(m5("properties"))) {
      const e = this.properties, o = [...c0(e), ...h0(e)];
      for (const r of o) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [o, r] of e) this.elementProperties.set(o, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, o] of this.elementProperties) {
      const r = this._$Eu(e, o);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const r of o) e.unshift(u7(r));
    } else t !== void 0 && e.push(u7(t));
    return e;
  }
  static _$Eu(t, e) {
    const o = e.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const o of e.keys()) this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return i0(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostConnected) == null ? void 0 : o.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostDisconnected) == null ? void 0 : o.call(e);
    });
  }
  attributeChangedCallback(t, e, o) {
    this._$AK(t, o);
  }
  _$EC(t, e) {
    var o;
    const r = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, r);
    if (n !== void 0 && r.reflect === !0) {
      const i = (((o = r.converter) == null ? void 0 : o.toAttribute) !== void 0 ? r.converter : X5).toAttribute(e, r.type);
      this._$Em = t, i == null ? this.removeAttribute(n) : this.setAttribute(n, i), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const r = this.constructor, n = r._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const i = r.getPropertyOptions(n), l = typeof i.converter == "function" ? { fromAttribute: i.converter } : ((o = i.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? i.converter : X5;
      this._$Em = n, this[n] = l.fromAttribute(e, i.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, o) {
    if (t !== void 0) {
      if (o ?? (o = this.constructor.getPropertyOptions(t)), !(o.hasChanged ?? A2)(this[t], e)) return;
      this.P(t, e, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, o) {
    this._$AL.has(t) || this._$AL.set(t, e), o.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, i] of this._$Ep) this[n] = i;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [n, i] of r) i.wrapped !== !0 || this._$AL.has(n) || this[n] === void 0 || this.P(n, this[n], i);
    }
    let e = !1;
    const o = this._$AL;
    try {
      e = this.shouldUpdate(o), e ? (this.willUpdate(o), (t = this._$EO) == null || t.forEach((r) => {
        var n;
        return (n = r.hostUpdate) == null ? void 0 : n.call(r);
      }), this.update(o)) : this._$EU();
    } catch (r) {
      throw e = !1, this._$EU(), r;
    }
    e && this._$AE(o);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((o) => {
      var r;
      return (r = o.hostUpdated) == null ? void 0 : r.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
r5.elementStyles = [], r5.shadowRootOptions = { mode: "open" }, r5[m5("elementProperties")] = /* @__PURE__ */ new Map(), r5[m5("finalized")] = /* @__PURE__ */ new Map(), y7 == null || y7({ ReactiveElement: r5 }), (k1.reactiveElementVersions ?? (k1.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u0 = { attribute: !0, type: String, converter: X5, reflect: !1, hasChanged: A2 }, v0 = (s = u0, t, e) => {
  const { kind: o, metadata: r } = e;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), n.set(e.name, s), o === "accessor") {
    const { name: i } = e;
    return { set(l) {
      const C = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(i, C, s);
    }, init(l) {
      return l !== void 0 && this.P(i, void 0, s), l;
    } };
  }
  if (o === "setter") {
    const { name: i } = e;
    return function(l) {
      const C = this[i];
      t.call(this, l), this.requestUpdate(i, C, s);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function G1(s) {
  return (t, e) => typeof e == "object" ? v0(s, t, e) : ((o, r, n) => {
    const i = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, i ? { ...o, wrapped: !0 } : o), i ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(s, t, e);
}
const y0 = {
  // --------- UX Team Main Library (below) --------- //
  // *** CORE *** //
  account_circle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M3.85 15.1C4.7 14.45 5.65 13.9375 6.7 13.5625C7.75 13.1875 8.85 13 10 13C11.15 13 12.25 13.1875 13.3 13.5625C14.35 13.9375 15.3 14.45 16.15 15.1C16.7333 14.4167 17.1875 13.6417 17.5125 12.775C17.8375 11.9083 18 10.9833 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.9833 2.1625 11.9083 2.4875 12.775C2.8125 13.6417 3.26667 14.4167 3.85 15.1ZM10 11C9.01667 11 8.1875 10.6625 7.5125 9.9875C6.8375 9.3125 6.5 8.48333 6.5 7.5C6.5 6.51667 6.8375 5.6875 7.5125 5.0125C8.1875 4.3375 9.01667 4 10 4C10.9833 4 11.8125 4.3375 12.4875 5.0125C13.1625 5.6875 13.5 6.51667 13.5 7.5C13.5 8.48333 13.1625 9.3125 12.4875 9.9875C11.8125 10.6625 10.9833 11 10 11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  calendar_month: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V1C3 0.716667 3.09583 0.479167 3.2875 0.2875C3.47917 0.0958333 3.71667 0 4 0C4.28333 0 4.52083 0.0958333 4.7125 0.2875C4.90417 0.479167 5 0.716667 5 1V2H13V1C13 0.716667 13.0958 0.479167 13.2875 0.2875C13.4792 0.0958333 13.7167 0 14 0C14.2833 0 14.5208 0.0958333 14.7125 0.2875C14.9042 0.479167 15 0.716667 15 1V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6ZM9 12C8.71667 12 8.47917 11.9042 8.2875 11.7125C8.09583 11.5208 8 11.2833 8 11C8 10.7167 8.09583 10.4792 8.2875 10.2875C8.47917 10.0958 8.71667 10 9 10C9.28333 10 9.52083 10.0958 9.7125 10.2875C9.90417 10.4792 10 10.7167 10 11C10 11.2833 9.90417 11.5208 9.7125 11.7125C9.52083 11.9042 9.28333 12 9 12ZM5 12C4.71667 12 4.47917 11.9042 4.2875 11.7125C4.09583 11.5208 4 11.2833 4 11C4 10.7167 4.09583 10.4792 4.2875 10.2875C4.47917 10.0958 4.71667 10 5 10C5.28333 10 5.52083 10.0958 5.7125 10.2875C5.90417 10.4792 6 10.7167 6 11C6 11.2833 5.90417 11.5208 5.7125 11.7125C5.52083 11.9042 5.28333 12 5 12ZM13 12C12.7167 12 12.4792 11.9042 12.2875 11.7125C12.0958 11.5208 12 11.2833 12 11C12 10.7167 12.0958 10.4792 12.2875 10.2875C12.4792 10.0958 12.7167 10 13 10C13.2833 10 13.5208 10.0958 13.7125 10.2875C13.9042 10.4792 14 10.7167 14 11C14 11.2833 13.9042 11.5208 13.7125 11.7125C13.5208 11.9042 13.2833 12 13 12ZM9 16C8.71667 16 8.47917 15.9042 8.2875 15.7125C8.09583 15.5208 8 15.2833 8 15C8 14.7167 8.09583 14.4792 8.2875 14.2875C8.47917 14.0958 8.71667 14 9 14C9.28333 14 9.52083 14.0958 9.7125 14.2875C9.90417 14.4792 10 14.7167 10 15C10 15.2833 9.90417 15.5208 9.7125 15.7125C9.52083 15.9042 9.28333 16 9 16ZM5 16C4.71667 16 4.47917 15.9042 4.2875 15.7125C4.09583 15.5208 4 15.2833 4 15C4 14.7167 4.09583 14.4792 4.2875 14.2875C4.47917 14.0958 4.71667 14 5 14C5.28333 14 5.52083 14.0958 5.7125 14.2875C5.90417 14.4792 6 14.7167 6 15C6 15.2833 5.90417 15.5208 5.7125 15.7125C5.52083 15.9042 5.28333 16 5 16ZM13 16C12.7167 16 12.4792 15.9042 12.2875 15.7125C12.0958 15.5208 12 15.2833 12 15C12 14.7167 12.0958 14.4792 12.2875 14.2875C12.4792 14.0958 12.7167 14 13 14C13.2833 14 13.5208 14.0958 13.7125 14.2875C13.9042 14.4792 14 14.7167 14 15C14 15.2833 13.9042 15.5208 13.7125 15.7125C13.5208 15.9042 13.2833 16 13 16Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  cancel: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 11.4L12.9 14.3C13.0833 14.4833 13.3167 14.575 13.6 14.575C13.8833 14.575 14.1167 14.4833 14.3 14.3C14.4833 14.1167 14.575 13.8833 14.575 13.6C14.575 13.3167 14.4833 13.0833 14.3 12.9L11.4 10L14.3 7.1C14.4833 6.91667 14.575 6.68333 14.575 6.4C14.575 6.11667 14.4833 5.88333 14.3 5.7C14.1167 5.51667 13.8833 5.425 13.6 5.425C13.3167 5.425 13.0833 5.51667 12.9 5.7L10 8.6L7.1 5.7C6.91667 5.51667 6.68333 5.425 6.4 5.425C6.11667 5.425 5.88333 5.51667 5.7 5.7C5.51667 5.88333 5.425 6.11667 5.425 6.4C5.425 6.68333 5.51667 6.91667 5.7 7.1L8.6 10L5.7 12.9C5.51667 13.0833 5.425 13.3167 5.425 13.6C5.425 13.8833 5.51667 14.1167 5.7 14.3C5.88333 14.4833 6.11667 14.575 6.4 14.575C6.68333 14.575 6.91667 14.4833 7.1 14.3L10 11.4ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
  <path d="M5.5565 9.1625L14.0315 0.687501C14.2315 0.487501 14.4648 0.387501 14.7315 0.387501C14.9982 0.387501 15.2315 0.487501 15.4315 0.687501C15.6315 0.887501 15.7315 1.125 15.7315 1.4C15.7315 1.675 15.6315 1.9125 15.4315 2.1125L6.2565 11.3125C6.0565 11.5125 5.82317 11.6125 5.5565 11.6125C5.28983 11.6125 5.0565 11.5125 4.8565 11.3125L0.556499 7.0125C0.356499 6.8125 0.260666 6.575 0.268999 6.3C0.277333 6.025 0.381499 5.7875 0.581499 5.5875C0.781499 5.3875 1.019 5.2875 1.294 5.2875C1.569 5.2875 1.8065 5.3875 2.0065 5.5875L5.5565 9.1625Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M7 8.4L2.1 13.3C1.91667 13.4833 1.68334 13.575 1.4 13.575C1.11667 13.575 0.883336 13.4833 0.700003 13.3C0.51667 13.1167 0.425003 12.8833 0.425003 12.6C0.425003 12.3167 0.51667 12.0833 0.700003 11.9L5.6 7L0.700003 2.1C0.51667 1.91667 0.425003 1.68334 0.425003 1.4C0.425003 1.11667 0.51667 0.883336 0.700003 0.700003C0.883336 0.51667 1.11667 0.425003 1.4 0.425003C1.68334 0.425003 1.91667 0.51667 2.1 0.700003L7 5.6L11.9 0.700003C12.0833 0.51667 12.3167 0.425003 12.6 0.425003C12.8833 0.425003 13.1167 0.51667 13.3 0.700003C13.4833 0.883336 13.575 1.11667 13.575 1.4C13.575 1.68334 13.4833 1.91667 13.3 2.1L8.4 7L13.3 11.9C13.4833 12.0833 13.575 12.3167 13.575 12.6C13.575 12.8833 13.4833 13.1167 13.3 13.3C13.1167 13.4833 12.8833 13.575 12.6 13.575C12.3167 13.575 12.0833 13.4833 11.9 13.3L7 8.4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8 11.575C7.86667 11.575 7.74167 11.5542 7.625 11.5125C7.50833 11.4708 7.4 11.4 7.3 11.3L3.7 7.7C3.5 7.5 3.40417 7.26667 3.4125 7C3.42083 6.73333 3.51667 6.5 3.7 6.3C3.9 6.1 4.1375 5.99583 4.4125 5.9875C4.6875 5.97917 4.925 6.075 5.125 6.275L7 8.15V1C7 0.716667 7.09583 0.479167 7.2875 0.2875C7.47917 0.0958333 7.71667 0 8 0C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1V8.15L10.875 6.275C11.075 6.075 11.3125 5.97917 11.5875 5.9875C11.8625 5.99583 12.1 6.1 12.3 6.3C12.4833 6.5 12.5792 6.73333 12.5875 7C12.5958 7.26667 12.5 7.5 12.3 7.7L8.7 11.3C8.6 11.4 8.49167 11.4708 8.375 11.5125C8.25833 11.5542 8.13333 11.575 8 11.575ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11C1.28333 11 1.52083 11.0958 1.7125 11.2875C1.90417 11.4792 2 11.7167 2 12V14H14V12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0958 14.7167 11 15 11C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  download_done: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M5.544 8.95L13.994 0.499997C14.194 0.299997 14.4315 0.199997 14.7065 0.199997C14.9815 0.199997 15.219 0.299997 15.419 0.499997C15.619 0.699997 15.719 0.937497 15.719 1.2125C15.719 1.4875 15.619 1.725 15.419 1.925L6.244 11.1C6.044 11.3 5.81067 11.4 5.544 11.4C5.27733 11.4 5.044 11.3 4.844 11.1L0.568998 6.825C0.368998 6.625 0.273165 6.3875 0.281498 6.1125C0.289832 5.8375 0.393998 5.6 0.593998 5.4C0.793998 5.2 1.0315 5.1 1.3065 5.1C1.5815 5.1 1.819 5.2 2.019 5.4L5.544 8.95ZM1.994 15.8C1.71066 15.8 1.47317 15.7042 1.2815 15.5125C1.08983 15.3208 0.993998 15.0833 0.993998 14.8C0.993998 14.5167 1.08983 14.2792 1.2815 14.0875C1.47317 13.8958 1.71066 13.8 1.994 13.8H13.994C14.2773 13.8 14.5148 13.8958 14.7065 14.0875C14.8982 14.2792 14.994 14.5167 14.994 14.8C14.994 15.0833 14.8982 15.3208 14.7065 15.5125C14.5148 15.7042 14.2773 15.8 13.994 15.8H1.994Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  drive_folder_upload: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
  <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H7.175C7.44167 0 7.69583 0.05 7.9375 0.15C8.17917 0.25 8.39167 0.391667 8.575 0.575L10 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM2 14H18V4H9.175L7.175 2H2V14ZM10 13C10.2833 13 10.5208 12.9042 10.7125 12.7125C10.9042 12.5208 11 12.2833 11 12V8.8L11.9 9.7C12.0833 9.88333 12.3167 9.975 12.6 9.975C12.8833 9.975 13.1167 9.88333 13.3 9.7C13.4833 9.51667 13.575 9.28333 13.575 9C13.575 8.71667 13.4833 8.48333 13.3 8.3L10.7 5.7C10.5 5.5 10.2667 5.4 10 5.4C9.73333 5.4 9.5 5.5 9.3 5.7L6.7 8.3C6.51667 8.48333 6.425 8.71667 6.425 9C6.425 9.28333 6.51667 9.51667 6.7 9.7C6.88333 9.88333 7.11667 9.975 7.4 9.975C7.68333 9.975 7.91667 9.88333 8.1 9.7L9 8.8V12C9 12.2833 9.09583 12.5208 9.2875 12.7125C9.47917 12.9042 9.71667 13 10 13Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  edit_square: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
  <path d="M2 21.0125C1.45 21.0125 0.979167 20.8167 0.5875 20.425C0.195833 20.0333 0 19.5625 0 19.0125V5.0125C0 4.4625 0.195833 3.99167 0.5875 3.6C0.979167 3.20834 1.45 3.0125 2 3.0125H8.525C8.85833 3.0125 9.10833 3.11667 9.275 3.325C9.44167 3.53334 9.525 3.7625 9.525 4.0125C9.525 4.2625 9.4375 4.49167 9.2625 4.7C9.0875 4.90834 8.83333 5.0125 8.5 5.0125H2V19.0125H16V12.4875C16 12.1542 16.1042 11.9042 16.3125 11.7375C16.5208 11.5708 16.75 11.4875 17 11.4875C17.25 11.4875 17.4792 11.5708 17.6875 11.7375C17.8958 11.9042 18 12.1542 18 12.4875V19.0125C18 19.5625 17.8042 20.0333 17.4125 20.425C17.0208 20.8167 16.55 21.0125 16 21.0125H2ZM6 14.0125V11.5875C6 11.3208 6.05 11.0667 6.15 10.825C6.25 10.5833 6.39167 10.3708 6.575 10.1875L15.175 1.5875C15.375 1.3875 15.6 1.2375 15.85 1.1375C16.1 1.0375 16.35 0.987503 16.6 0.987503C16.8667 0.987503 17.1208 1.0375 17.3625 1.1375C17.6042 1.2375 17.825 1.3875 18.025 1.5875L19.425 3.0125C19.6083 3.2125 19.75 3.43334 19.85 3.675C19.95 3.91667 20 4.1625 20 4.4125C20 4.6625 19.9542 4.90834 19.8625 5.15C19.7708 5.39167 19.625 5.6125 19.425 5.8125L10.825 14.4125C10.6417 14.5958 10.4292 14.7417 10.1875 14.85C9.94583 14.9583 9.69167 15.0125 9.425 15.0125H7C6.71667 15.0125 6.47917 14.9167 6.2875 14.725C6.09583 14.5333 6 14.2958 6 14.0125ZM8 13.0125H9.4L15.2 7.2125L14.5 6.5125L13.775 5.8125L8 11.5875V13.0125Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  help: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.95 16C10.3 16 10.5958 15.8792 10.8375 15.6375C11.0792 15.3958 11.2 15.1 11.2 14.75C11.2 14.4 11.0792 14.1042 10.8375 13.8625C10.5958 13.6208 10.3 13.5 9.95 13.5C9.6 13.5 9.30417 13.6208 9.0625 13.8625C8.82083 14.1042 8.7 14.4 8.7 14.75C8.7 15.1 8.82083 15.3958 9.0625 15.6375C9.30417 15.8792 9.6 16 9.95 16ZM9.05 12.15H10.9C10.9 11.6 10.9625 11.1667 11.0875 10.85C11.2125 10.5333 11.5667 10.1 12.15 9.55C12.5833 9.11667 12.925 8.70417 13.175 8.3125C13.425 7.92083 13.55 7.45 13.55 6.9C13.55 5.96667 13.2083 5.25 12.525 4.75C11.8417 4.25 11.0333 4 10.1 4C9.15 4 8.37917 4.25 7.7875 4.75C7.19583 5.25 6.78333 5.85 6.55 6.55L8.2 7.2C8.28333 6.9 8.47083 6.575 8.7625 6.225C9.05417 5.875 9.5 5.7 10.1 5.7C10.6333 5.7 11.0333 5.84583 11.3 6.1375C11.5667 6.42917 11.7 6.75 11.7 7.1C11.7 7.43333 11.6 7.74583 11.4 8.0375C11.2 8.32917 10.95 8.6 10.65 8.85C9.91667 9.5 9.46667 9.99167 9.3 10.325C9.13333 10.6583 9.05 11.2667 9.05 12.15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  language: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 20C8.63333 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3667 0 10C0 8.61667 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.63333 0 10 0C11.3833 0 12.6792 0.2625 13.8875 0.7875C15.0958 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90417 19.2125 6.1125C19.7375 7.32083 20 8.61667 20 10C20 11.3667 19.7375 12.6583 19.2125 13.875C18.6875 15.0917 17.9708 16.1542 17.0625 17.0625C16.1542 17.9708 15.0958 18.6875 13.8875 19.2125C12.6792 19.7375 11.3833 20 10 20ZM10 17.95C10.4333 17.35 10.8083 16.725 11.125 16.075C11.4417 15.425 11.7 14.7333 11.9 14H8.1C8.3 14.7333 8.55833 15.425 8.875 16.075C9.19167 16.725 9.56667 17.35 10 17.95ZM7.4 17.55C7.1 17 6.8375 16.4292 6.6125 15.8375C6.3875 15.2458 6.2 14.6333 6.05 14H3.1C3.58333 14.8333 4.1875 15.5583 4.9125 16.175C5.6375 16.7917 6.46667 17.25 7.4 17.55ZM12.6 17.55C13.5333 17.25 14.3625 16.7917 15.0875 16.175C15.8125 15.5583 16.4167 14.8333 16.9 14H13.95C13.8 14.6333 13.6125 15.2458 13.3875 15.8375C13.1625 16.4292 12.9 17 12.6 17.55ZM2.25 12H5.65C5.6 11.6667 5.5625 11.3375 5.5375 11.0125C5.5125 10.6875 5.5 10.35 5.5 10C5.5 9.65 5.5125 9.3125 5.5375 8.9875C5.5625 8.6625 5.6 8.33333 5.65 8H2.25C2.16667 8.33333 2.10417 8.6625 2.0625 8.9875C2.02083 9.3125 2 9.65 2 10C2 10.35 2.02083 10.6875 2.0625 11.0125C2.10417 11.3375 2.16667 11.6667 2.25 12ZM7.65 12H12.35C12.4 11.6667 12.4375 11.3375 12.4625 11.0125C12.4875 10.6875 12.5 10.35 12.5 10C12.5 9.65 12.4875 9.3125 12.4625 8.9875C12.4375 8.6625 12.4 8.33333 12.35 8H7.65C7.6 8.33333 7.5625 8.6625 7.5375 8.9875C7.5125 9.3125 7.5 9.65 7.5 10C7.5 10.35 7.5125 10.6875 7.5375 11.0125C7.5625 11.3375 7.6 11.6667 7.65 12ZM14.35 12H17.75C17.8333 11.6667 17.8958 11.3375 17.9375 11.0125C17.9792 10.6875 18 10.35 18 10C18 9.65 17.9792 9.3125 17.9375 8.9875C17.8958 8.6625 17.8333 8.33333 17.75 8H14.35C14.4 8.33333 14.4375 8.6625 14.4625 8.9875C14.4875 9.3125 14.5 9.65 14.5 10C14.5 10.35 14.4875 10.6875 14.4625 11.0125C14.4375 11.3375 14.4 11.6667 14.35 12ZM13.95 6H16.9C16.4167 5.16667 15.8125 4.44167 15.0875 3.825C14.3625 3.20833 13.5333 2.75 12.6 2.45C12.9 3 13.1625 3.57083 13.3875 4.1625C13.6125 4.75417 13.8 5.36667 13.95 6ZM8.1 6H11.9C11.7 5.26667 11.4417 4.575 11.125 3.925C10.8083 3.275 10.4333 2.65 10 2.05C9.56667 2.65 9.19167 3.275 8.875 3.925C8.55833 4.575 8.3 5.26667 8.1 6ZM3.1 6H6.05C6.2 5.36667 6.3875 4.75417 6.6125 4.1625C6.8375 3.57083 7.1 3 7.4 2.45C6.46667 2.75 5.6375 3.20833 4.9125 3.825C4.1875 4.44167 3.58333 5.16667 3.1 6Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
  <path d="M1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10H17C17.2833 10 17.5208 10.0958 17.7125 10.2875C17.9042 10.4792 18 10.7167 18 11C18 11.2833 17.9042 11.5208 17.7125 11.7125C17.5208 11.9042 17.2833 12 17 12H1ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H17C17.2833 5 17.5208 5.09583 17.7125 5.2875C17.9042 5.47917 18 5.71667 18 6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7H1ZM1 2C0.716667 2 0.479167 1.90417 0.2875 1.7125C0.0958333 1.52083 0 1.28333 0 1C0 0.716667 0.0958333 0.479167 0.2875 0.2875C0.479167 0.0958333 0.716667 0 1 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1C18 1.28333 17.9042 1.52083 17.7125 1.7125C17.5208 1.90417 17.2833 2 17 2H1Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  more_vert: `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16" fill="none">
  <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14C0 13.45 0.195833 12.9792 0.5875 12.5875C0.979167 12.1958 1.45 12 2 12C2.55 12 3.02083 12.1958 3.4125 12.5875C3.80417 12.9792 4 13.45 4 14C4 14.55 3.80417 15.0208 3.4125 15.4125C3.02083 15.8042 2.55 16 2 16ZM2 10C1.45 10 0.979167 9.80417 0.5875 9.4125C0.195833 9.02083 0 8.55 0 8C0 7.45 0.195833 6.97917 0.5875 6.5875C0.979167 6.19583 1.45 6 2 6C2.55 6 3.02083 6.19583 3.4125 6.5875C3.80417 6.97917 4 7.45 4 8C4 8.55 3.80417 9.02083 3.4125 9.4125C3.02083 9.80417 2.55 10 2 10ZM2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  open_in_new: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H8C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1C9 1.28333 8.90417 1.52083 8.7125 1.7125C8.52083 1.90417 8.28333 2 8 2H2V16H16V10C16 9.71667 16.0958 9.47917 16.2875 9.2875C16.4792 9.09583 16.7167 9 17 9C17.2833 9 17.5208 9.09583 17.7125 9.2875C17.9042 9.47917 18 9.71667 18 10V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM16 3.4L7.4 12C7.21667 12.1833 6.98333 12.275 6.7 12.275C6.41667 12.275 6.18333 12.1833 6 12C5.81667 11.8167 5.725 11.5833 5.725 11.3C5.725 11.0167 5.81667 10.7833 6 10.6L14.6 2H12C11.7167 2 11.4792 1.90417 11.2875 1.7125C11.0958 1.52083 11 1.28333 11 1C11 0.716667 11.0958 0.479167 11.2875 0.2875C11.4792 0.0958333 11.7167 0 12 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1V6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7C16.7167 7 16.4792 6.90417 16.2875 6.7125C16.0958 6.52083 16 6.28333 16 6V3.4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  publish: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M7 7.85L5.125 9.725C4.925 9.925 4.6875 10.0208 4.4125 10.0125C4.1375 10.0042 3.9 9.9 3.7 9.7C3.51667 9.5 3.42083 9.26667 3.4125 9C3.40417 8.73333 3.5 8.5 3.7 8.3L7.3 4.7C7.4 4.6 7.50833 4.52917 7.625 4.4875C7.74167 4.44583 7.86667 4.425 8 4.425C8.13333 4.425 8.25833 4.44583 8.375 4.4875C8.49167 4.52917 8.6 4.6 8.7 4.7L12.3 8.3C12.5 8.5 12.5958 8.73333 12.5875 9C12.5792 9.26667 12.4833 9.5 12.3 9.7C12.1 9.9 11.8625 10.0042 11.5875 10.0125C11.3125 10.0208 11.075 9.925 10.875 9.725L9 7.85V15C9 15.2833 8.90417 15.5208 8.7125 15.7125C8.52083 15.9042 8.28333 16 8 16C7.71667 16 7.47917 15.9042 7.2875 15.7125C7.09583 15.5208 7 15.2833 7 15V7.85ZM0 4V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V4C16 4.28333 15.9042 4.52083 15.7125 4.7125C15.5208 4.90417 15.2833 5 15 5C14.7167 5 14.4792 4.90417 14.2875 4.7125C14.0958 4.52083 14 4.28333 14 4V2H2V4C2 4.28333 1.90417 4.52083 1.7125 4.7125C1.52083 4.90417 1.28333 5 1 5C0.716667 5 0.479167 4.90417 0.2875 4.7125C0.0958333 4.52083 0 4.28333 0 4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M6.71249 13.2125C4.89583 13.2125 3.35833 12.5833 2.09999 11.325C0.841661 10.0667 0.212494 8.52917 0.212494 6.7125C0.212494 4.89583 0.841661 3.35834 2.09999 2.1C3.35833 0.841668 4.89583 0.212502 6.71249 0.212502C8.52916 0.212502 10.0667 0.841668 11.325 2.1C12.5833 3.35834 13.2125 4.89583 13.2125 6.7125C13.2125 7.44584 13.0958 8.1375 12.8625 8.7875C12.6292 9.4375 12.3125 10.0125 11.9125 10.5125L17.5125 16.1125C17.6958 16.2958 17.7875 16.5292 17.7875 16.8125C17.7875 17.0958 17.6958 17.3292 17.5125 17.5125C17.3292 17.6958 17.0958 17.7875 16.8125 17.7875C16.5292 17.7875 16.2958 17.6958 16.1125 17.5125L10.5125 11.9125C10.0125 12.3125 9.43749 12.6292 8.78749 12.8625C8.13749 13.0958 7.44583 13.2125 6.71249 13.2125ZM6.71249 11.2125C7.96249 11.2125 9.02499 10.775 9.89999 9.9C10.775 9.025 11.2125 7.9625 11.2125 6.7125C11.2125 5.4625 10.775 4.4 9.89999 3.525C9.02499 2.65 7.96249 2.2125 6.71249 2.2125C5.46249 2.2125 4.39999 2.65 3.52499 3.525C2.64999 4.4 2.21249 5.4625 2.21249 6.7125C2.21249 7.9625 2.64999 9.025 3.52499 9.9C4.39999 10.775 5.46249 11.2125 6.71249 11.2125Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  share: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.9 12.025 16.6667 12.075 16.3L5.05 12.2C4.78333 12.45 4.475 12.6458 4.125 12.7875C3.775 12.9292 3.4 13 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.4 7 3.775 7.07083 4.125 7.2125C4.475 7.35417 4.78333 7.55 5.05 7.8L12.075 3.7C12.0417 3.58333 12.0208 3.47083 12.0125 3.3625C12.0042 3.25417 12 3.13333 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6 6 14.225 5.92917 13.875 5.7875C13.525 5.64583 13.2167 5.45 12.95 5.2L5.925 9.3C5.95833 9.41667 5.97917 9.52917 5.9875 9.6375C5.99583 9.74583 6 9.86667 6 10C6 10.1333 5.99583 10.2542 5.9875 10.3625C5.97917 10.4708 5.95833 10.5833 5.925 10.7L12.95 14.8C13.2167 14.55 13.525 14.3542 13.875 14.2125C14.225 14.0708 14.6 14 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20ZM15 18C15.2833 18 15.5208 17.9042 15.7125 17.7125C15.9042 17.5208 16 17.2833 16 17C16 16.7167 15.9042 16.4792 15.7125 16.2875C15.5208 16.0958 15.2833 16 15 16C14.7167 16 14.4792 16.0958 14.2875 16.2875C14.0958 16.4792 14 16.7167 14 17C14 17.2833 14.0958 17.5208 14.2875 17.7125C14.4792 17.9042 14.7167 18 15 18ZM3 11C3.28333 11 3.52083 10.9042 3.7125 10.7125C3.90417 10.5208 4 10.2833 4 10C4 9.71667 3.90417 9.47917 3.7125 9.2875C3.52083 9.09583 3.28333 9 3 9C2.71667 9 2.47917 9.09583 2.2875 9.2875C2.09583 9.47917 2 9.71667 2 10C2 10.2833 2.09583 10.5208 2.2875 10.7125C2.47917 10.9042 2.71667 11 3 11ZM15 4C15.2833 4 15.5208 3.90417 15.7125 3.7125C15.9042 3.52083 16 3.28333 16 3C16 2.71667 15.9042 2.47917 15.7125 2.2875C15.5208 2.09583 15.2833 2 15 2C14.7167 2 14.4792 2.09583 14.2875 2.2875C14.0958 2.47917 14 2.71667 14 3C14 3.28333 14.0958 3.52083 14.2875 3.7125C14.4792 3.90417 14.7167 4 15 4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  sms: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
  <path d="M4 16L1.7 18.3C1.38333 18.6167 1.02083 18.6875 0.6125 18.5125C0.204167 18.3375 0 18.025 0 17.575V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4ZM3.15 14H18V2H2V15.125L3.15 14ZM6 9C6.28333 9 6.52083 8.90417 6.7125 8.7125C6.90417 8.52083 7 8.28333 7 8C7 7.71667 6.90417 7.47917 6.7125 7.2875C6.52083 7.09583 6.28333 7 6 7C5.71667 7 5.47917 7.09583 5.2875 7.2875C5.09583 7.47917 5 7.71667 5 8C5 8.28333 5.09583 8.52083 5.2875 8.7125C5.47917 8.90417 5.71667 9 6 9ZM10 9C10.2833 9 10.5208 8.90417 10.7125 8.7125C10.9042 8.52083 11 8.28333 11 8C11 7.71667 10.9042 7.47917 10.7125 7.2875C10.5208 7.09583 10.2833 7 10 7C9.71667 7 9.47917 7.09583 9.2875 7.2875C9.09583 7.47917 9 7.71667 9 8C9 8.28333 9.09583 8.52083 9.2875 8.7125C9.47917 8.90417 9.71667 9 10 9ZM14 9C14.2833 9 14.5208 8.90417 14.7125 8.7125C14.9042 8.52083 15 8.28333 15 8C15 7.71667 14.9042 7.47917 14.7125 7.2875C14.5208 7.09583 14.2833 7 14 7C13.7167 7 13.4792 7.09583 13.2875 7.2875C13.0958 7.47917 13 7.71667 13 8C13 8.28333 13.0958 8.52083 13.2875 8.7125C13.4792 8.90417 13.7167 9 14 9Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  thumb_down: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M2 13C1.46667 13 1 12.8 0.6 12.4C0.2 12 0 11.5333 0 11V9C0 8.88333 0.0125 8.75833 0.0375 8.625C0.0625 8.49167 0.1 8.36667 0.15 8.25L3.15 1.2C3.3 0.866667 3.55 0.583333 3.9 0.35C4.25 0.116667 4.61667 0 5 0H13C13.55 0 14.0208 0.195833 14.4125 0.5875C14.8042 0.979167 15 1.45 15 2V12.175C15 12.4417 14.9458 12.6958 14.8375 12.9375C14.7292 13.1792 14.5833 13.3917 14.4 13.575L8.975 18.975C8.725 19.2083 8.42917 19.35 8.0875 19.4C7.74583 19.45 7.41667 19.3917 7.1 19.225C6.78333 19.0583 6.55417 18.825 6.4125 18.525C6.27083 18.225 6.24167 17.9167 6.325 17.6L7.45 13H2ZM19 0C19.55 0 20.0208 0.195833 20.4125 0.5875C20.8042 0.979167 21 1.45 21 2V11C21 11.55 20.8042 12.0208 20.4125 12.4125C20.0208 12.8042 19.55 13 19 13C18.45 13 17.9792 12.8042 17.5875 12.4125C17.1958 12.0208 17 11.55 17 11V2C17 1.45 17.1958 0.979167 17.5875 0.5875C17.9792 0.195833 18.45 0 19 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  thumb_up: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M19 7.00001C19.5333 7.00001 20 7.20001 20.4 7.60001C20.8 8.00001 21 8.46668 21 9.00001V11C21 11.1167 20.9875 11.2417 20.9625 11.375C20.9375 11.5083 20.9 11.6333 20.85 11.75L17.85 18.8C17.7 19.1333 17.45 19.4167 17.1 19.65C16.75 19.8833 16.3833 20 16 20H8C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18V7.82501C6 7.55834 6.05417 7.30418 6.1625 7.06251C6.27083 6.82084 6.41667 6.60834 6.6 6.42501L12.025 1.02501C12.275 0.791677 12.5708 0.65001 12.9125 0.60001C13.2542 0.55001 13.5833 0.608344 13.9 0.77501C14.2167 0.941677 14.4458 1.17501 14.5875 1.47501C14.7292 1.77501 14.7583 2.08334 14.675 2.40001L13.55 7.00001H19ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V9.00001C0 8.45001 0.195833 7.97918 0.5875 7.58751C0.979167 7.19584 1.45 7.00001 2 7.00001C2.55 7.00001 3.02083 7.19584 3.4125 7.58751C3.80417 7.97918 4 8.45001 4 9.00001V18C4 18.55 3.80417 19.0208 3.4125 19.4125C3.02083 19.8042 2.55 20 2 20Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  upload_file: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
  <path d="M7 12.825V16C7 16.2833 7.09583 16.5208 7.2875 16.7125C7.47917 16.9042 7.71667 17 8 17C8.28333 17 8.52083 16.9042 8.7125 16.7125C8.90417 16.5208 9 16.2833 9 16V12.825L9.9 13.725C10 13.825 10.1125 13.9 10.2375 13.95C10.3625 14 10.4875 14.0208 10.6125 14.0125C10.7375 14.0042 10.8583 13.975 10.975 13.925C11.0917 13.875 11.2 13.8 11.3 13.7C11.4833 13.5 11.5792 13.2667 11.5875 13C11.5958 12.7333 11.5 12.5 11.3 12.3L8.7 9.7C8.6 9.6 8.49167 9.52917 8.375 9.4875C8.25833 9.44583 8.13333 9.425 8 9.425C7.86667 9.425 7.74167 9.44583 7.625 9.4875C7.50833 9.52917 7.4 9.6 7.3 9.7L4.7 12.3C4.5 12.5 4.40417 12.7333 4.4125 13C4.42083 13.2667 4.525 13.5 4.725 13.7C4.925 13.8833 5.15833 13.9792 5.425 13.9875C5.69167 13.9958 5.925 13.9 6.125 13.7L7 12.825ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9.175C9.44167 0 9.69583 0.05 9.9375 0.15C10.1792 0.25 10.3917 0.391667 10.575 0.575L15.425 5.425C15.6083 5.60833 15.75 5.82083 15.85 6.0625C15.95 6.30417 16 6.55833 16 6.825V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 6V2H2V18H14V7H10C9.71667 7 9.47917 6.90417 9.2875 6.7125C9.09583 6.52083 9 6.28333 9 6Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  visibility: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
  <path d="M11 12.5C12.25 12.5 13.3125 12.0625 14.1875 11.1875C15.0625 10.3125 15.5 9.25 15.5 8C15.5 6.75 15.0625 5.6875 14.1875 4.8125C13.3125 3.9375 12.25 3.5 11 3.5C9.75 3.5 8.6875 3.9375 7.8125 4.8125C6.9375 5.6875 6.5 6.75 6.5 8C6.5 9.25 6.9375 10.3125 7.8125 11.1875C8.6875 12.0625 9.75 12.5 11 12.5ZM11 10.7C10.25 10.7 9.6125 10.4375 9.0875 9.9125C8.5625 9.3875 8.3 8.75 8.3 8C8.3 7.25 8.5625 6.6125 9.0875 6.0875C9.6125 5.5625 10.25 5.3 11 5.3C11.75 5.3 12.3875 5.5625 12.9125 6.0875C13.4375 6.6125 13.7 7.25 13.7 8C13.7 8.75 13.4375 9.3875 12.9125 9.9125C12.3875 10.4375 11.75 10.7 11 10.7ZM11 15.5C8.56667 15.5 6.35 14.8208 4.35 13.4625C2.35 12.1042 0.9 10.2833 0 8C0.9 5.71667 2.35 3.89583 4.35 2.5375C6.35 1.17917 8.56667 0.5 11 0.5C13.4333 0.5 15.65 1.17917 17.65 2.5375C19.65 3.89583 21.1 5.71667 22 8C21.1 10.2833 19.65 12.1042 17.65 13.4625C15.65 14.8208 13.4333 15.5 11 15.5ZM11 13.5C12.8833 13.5 14.6125 13.0042 16.1875 12.0125C17.7625 11.0208 18.9667 9.68333 19.8 8C18.9667 6.31667 17.7625 4.97917 16.1875 3.9875C14.6125 2.99583 12.8833 2.5 11 2.5C9.11667 2.5 7.3875 2.99583 5.8125 3.9875C4.2375 4.97917 3.03333 6.31667 2.2 8C3.03333 9.68333 4.2375 11.0208 5.8125 12.0125C7.3875 13.0042 9.11667 13.5 11 13.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  visibility_off: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
  <path d="M15.1 10.6L13.65 9.15C13.8 8.36667 13.575 7.63333 12.975 6.95C12.375 6.26667 11.6 6 10.65 6.15L9.2 4.7C9.48333 4.56667 9.77083 4.46667 10.0625 4.4C10.3542 4.33333 10.6667 4.3 11 4.3C12.25 4.3 13.3125 4.7375 14.1875 5.6125C15.0625 6.4875 15.5 7.55 15.5 8.8C15.5 9.13333 15.4667 9.44583 15.4 9.7375C15.3333 10.0292 15.2333 10.3167 15.1 10.6ZM18.3 13.75L16.85 12.35C17.4833 11.8667 18.0458 11.3375 18.5375 10.7625C19.0292 10.1875 19.45 9.53333 19.8 8.8C18.9667 7.11667 17.7708 5.77917 16.2125 4.7875C14.6542 3.79583 12.9167 3.3 11 3.3C10.5167 3.3 10.0417 3.33333 9.575 3.4C9.10833 3.46667 8.65 3.56667 8.2 3.7L6.65 2.15C7.33333 1.86667 8.03333 1.65417 8.75 1.5125C9.46667 1.37083 10.2167 1.3 11 1.3C13.5167 1.3 15.7583 1.99583 17.725 3.3875C19.6917 4.77917 21.1167 6.58333 22 8.8C21.6167 9.78333 21.1125 10.6958 20.4875 11.5375C19.8625 12.3792 19.1333 13.1167 18.3 13.75ZM18.8 19.9L14.6 15.75C14.0167 15.9333 13.4292 16.0708 12.8375 16.1625C12.2458 16.2542 11.6333 16.3 11 16.3C8.48333 16.3 6.24167 15.6042 4.275 14.2125C2.30833 12.8208 0.883333 11.0167 0 8.8C0.35 7.91667 0.791667 7.09583 1.325 6.3375C1.85833 5.57917 2.46667 4.9 3.15 4.3L0.4 1.5L1.8 0.0999985L20.2 18.5L18.8 19.9ZM4.55 5.7C4.06667 6.13333 3.625 6.60833 3.225 7.125C2.825 7.64167 2.48333 8.2 2.2 8.8C3.03333 10.4833 4.22917 11.8208 5.7875 12.8125C7.34583 13.8042 9.08333 14.3 11 14.3C11.3333 14.3 11.6583 14.2792 11.975 14.2375C12.2917 14.1958 12.6167 14.15 12.95 14.1L12.05 13.15C11.8667 13.2 11.6917 13.2375 11.525 13.2625C11.3583 13.2875 11.1833 13.3 11 13.3C9.75 13.3 8.6875 12.8625 7.8125 11.9875C6.9375 11.1125 6.5 10.05 6.5 8.8C6.5 8.61667 6.5125 8.44167 6.5375 8.275C6.5625 8.10833 6.6 7.93333 6.65 7.75L4.55 5.7Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  notifications: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
  <path d="M1 17C0.716667 17 0.479167 16.9042 0.2875 16.7125C0.0958333 16.5208 0 16.2833 0 16C0 15.7167 0.0958333 15.4792 0.2875 15.2875C0.479167 15.0958 0.716667 15 1 15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V2.2C10.8333 2.53333 11.9167 3.2375 12.75 4.3125C13.5833 5.3875 14 6.61667 14 8V15H15C15.2833 15 15.5208 15.0958 15.7125 15.2875C15.9042 15.4792 16 15.7167 16 16C16 16.2833 15.9042 16.5208 15.7125 16.7125C15.5208 16.9042 15.2833 17 15 17H1ZM8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20ZM4 15H12V8C12 6.9 11.6083 5.95833 10.825 5.175C10.0417 4.39167 9.1 4 8 4C6.9 4 5.95833 4.39167 5.175 5.175C4.39167 5.95833 4 6.9 4 8V15Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  // *** Arrows *** //
  arrow_back: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.6125 8.9935L8.5125 13.8935C8.7125 14.0935 8.80834 14.3268 8.8 14.5935C8.79167 14.8602 8.6875 15.0935 8.4875 15.2935C8.2875 15.4768 8.05417 15.5727 7.7875 15.581C7.52083 15.5893 7.2875 15.4935 7.0875 15.2935L0.487502 8.6935C0.387502 8.5935 0.316668 8.48517 0.275002 8.3685C0.233335 8.25184 0.212502 8.12684 0.212502 7.9935C0.212502 7.86017 0.233335 7.73517 0.275002 7.6185C0.316668 7.50184 0.387502 7.3935 0.487502 7.2935L7.0875 0.693503C7.27083 0.510169 7.5 0.418503 7.775 0.418503C8.05 0.418503 8.2875 0.510169 8.4875 0.693503C8.6875 0.893503 8.7875 1.131 8.7875 1.406C8.7875 1.681 8.6875 1.9185 8.4875 2.1185L3.6125 6.9935H14.7875C15.0708 6.9935 15.3083 7.08934 15.5 7.281C15.6917 7.47267 15.7875 7.71017 15.7875 7.9935C15.7875 8.27684 15.6917 8.51434 15.5 8.706C15.3083 8.89767 15.0708 8.9935 14.7875 8.9935H3.6125Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Chevrons *** //
  chevron_down: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path d="M10.0065 8.5L17.3565 1.15C17.6065 0.899999 17.8981 0.779165 18.2315 0.787499C18.5648 0.795832 18.8565 0.924999 19.1065 1.175C19.3565 1.425 19.4815 1.71667 19.4815 2.05C19.4815 2.38333 19.3565 2.675 19.1065 2.925L11.4315 10.625C11.2315 10.825 11.0065 10.975 10.7565 11.075C10.5065 11.175 10.2565 11.225 10.0065 11.225C9.75646 11.225 9.50646 11.175 9.25646 11.075C9.00646 10.975 8.78146 10.825 8.58146 10.625L0.881458 2.925C0.631458 2.675 0.510625 2.37916 0.518958 2.0375C0.527291 1.69583 0.656458 1.4 0.906458 1.15C1.15646 0.899999 1.44812 0.774999 1.78146 0.774999C2.11479 0.774999 2.40646 0.899999 2.65646 1.15L10.0065 8.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  chevron_up: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path d="M9.99354 3.5L2.64354 10.85C2.39354 11.1 2.10188 11.2208 1.76854 11.2125C1.43521 11.2042 1.14354 11.075 0.893541 10.825C0.643541 10.575 0.518541 10.2833 0.518541 9.95C0.518541 9.61667 0.643541 9.325 0.893541 9.075L8.56854 1.375C8.76854 1.175 8.99354 1.025 9.24354 0.925002C9.49354 0.825002 9.74354 0.775002 9.99354 0.775002C10.2435 0.775002 10.4935 0.825002 10.7435 0.925002C10.9935 1.025 11.2185 1.175 11.4185 1.375L19.1185 9.075C19.3685 9.325 19.4894 9.62084 19.481 9.9625C19.4727 10.3042 19.3435 10.6 19.0935 10.85C18.8435 11.1 18.5519 11.225 18.2185 11.225C17.8852 11.225 17.5935 11.1 17.3435 10.85L9.99354 3.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  chevron_left: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M3.49999 10.0065L10.85 17.3565C11.1 17.6065 11.2208 17.8981 11.2125 18.2315C11.2042 18.5648 11.075 18.8565 10.825 19.1065C10.575 19.3565 10.2833 19.4815 9.94999 19.4815C9.61666 19.4815 9.32499 19.3565 9.07499 19.1065L1.37499 11.4315C1.17499 11.2315 1.02499 11.0065 0.924994 10.7565C0.824994 10.5065 0.774994 10.2565 0.774994 10.0065C0.774994 9.75645 0.824994 9.50645 0.924994 9.25645C1.02499 9.00645 1.17499 8.78145 1.37499 8.58145L9.07499 0.88145C9.32499 0.63145 9.62083 0.510617 9.96249 0.51895C10.3042 0.527284 10.6 0.65645 10.85 0.90645C11.1 1.15645 11.225 1.44812 11.225 1.78145C11.225 2.11478 11.1 2.40645 10.85 2.65645L3.49999 10.0065Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  chevron_right: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M8.50001 9.99355L1.15001 2.64355C0.900008 2.39355 0.779174 2.10188 0.787508 1.76855C0.795841 1.43521 0.925008 1.14355 1.17501 0.893548C1.42501 0.643548 1.71667 0.518548 2.05001 0.518548C2.38334 0.518548 2.67501 0.643548 2.92501 0.893548L10.625 8.56855C10.825 8.76855 10.975 8.99355 11.075 9.24355C11.175 9.49355 11.225 9.74355 11.225 9.99355C11.225 10.2435 11.175 10.4935 11.075 10.7435C10.975 10.9935 10.825 11.2185 10.625 11.4185L2.92501 19.1185C2.67501 19.3685 2.37917 19.4894 2.03751 19.481C1.69584 19.4727 1.40001 19.3435 1.15001 19.0935C0.900006 18.8435 0.775006 18.5519 0.775006 18.2185C0.775006 17.8852 0.900006 17.5935 1.15001 17.3435L8.50001 9.99355Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Environmental *** //
  ac_unit: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 15.85L6.425 18.375C6.24167 18.5583 6.0125 18.65 5.7375 18.65C5.4625 18.65 5.23333 18.55 5.05 18.35C4.85 18.1667 4.75 17.9375 4.75 17.6625C4.75 17.3875 4.85 17.15 5.05 16.95L9 13V11H7L3.025 14.975C2.84167 15.1583 2.6125 15.25 2.3375 15.25C2.0625 15.25 1.825 15.15 1.625 14.95C1.44167 14.7667 1.35 14.5375 1.35 14.2625C1.35 13.9875 1.44167 13.7583 1.625 13.575L4.15 11H0.975C0.691667 11 0.458333 10.9042 0.275 10.7125C0.0916667 10.5208 0 10.2833 0 10C0 9.71667 0.0958333 9.47917 0.2875 9.2875C0.479167 9.09583 0.716667 9 1 9H4.15L1.625 6.45C1.44167 6.26667 1.35 6.0375 1.35 5.7625C1.35 5.4875 1.45 5.25 1.65 5.05C1.83333 4.86667 2.0625 4.775 2.3375 4.775C2.6125 4.775 2.85 4.86667 3.05 5.05L7 9H9V7L5.025 3.05C4.84167 2.86667 4.75 2.6375 4.75 2.3625C4.75 2.0875 4.85 1.85 5.05 1.65C5.23333 1.46667 5.4625 1.375 5.7375 1.375C6.0125 1.375 6.24167 1.46667 6.425 1.65L9 4.15V1C9 0.716667 9.09583 0.479167 9.2875 0.2875C9.47917 0.0958333 9.71667 0 10 0C10.2833 0 10.5208 0.0958333 10.7125 0.2875C10.9042 0.479167 11 0.716667 11 1V4.15L13.55 1.65C13.7333 1.46667 13.9625 1.375 14.2375 1.375C14.5125 1.375 14.75 1.46667 14.95 1.65C15.1333 1.85 15.225 2.0875 15.225 2.3625C15.225 2.6375 15.1333 2.86667 14.95 3.05L11 7V9H13L16.95 5.05C17.1333 4.86667 17.3625 4.775 17.6375 4.775C17.9125 4.775 18.15 4.875 18.35 5.075C18.5333 5.25833 18.625 5.4875 18.625 5.7625C18.625 6.0375 18.5333 6.26667 18.35 6.45L15.85 9H19C19.2833 9 19.5208 9.09583 19.7125 9.2875C19.9042 9.47917 20 9.71667 20 10C20 10.2833 19.9042 10.5208 19.7125 10.7125C19.5208 10.9042 19.2833 11 19 11H15.85L18.35 13.575C18.5333 13.7583 18.625 13.9875 18.625 14.2625C18.625 14.5375 18.5333 14.7667 18.35 14.95C18.15 15.15 17.9125 15.25 17.6375 15.25C17.3625 15.25 17.1333 15.15 16.95 14.95L13 11H11V13L14.95 16.975C15.1333 17.1583 15.225 17.3875 15.225 17.6625C15.225 17.9375 15.125 18.175 14.925 18.375C14.7417 18.5583 14.5125 18.65 14.2375 18.65C13.9625 18.65 13.7333 18.5583 13.55 18.375L11 15.85V19.025C11 19.3083 10.9042 19.5417 10.7125 19.725C10.5208 19.9083 10.2833 20 10 20C9.71667 20 9.47917 19.9042 9.2875 19.7125C9.09583 19.5208 9 19.2833 9 19V15.85Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  air: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
  <path d="M9.5 17C8.96667 17 8.47083 16.8667 8.0125 16.6C7.55417 16.3333 7.18333 15.9667 6.9 15.5C6.71667 15.1667 6.7125 14.8333 6.8875 14.5C7.0625 14.1667 7.33333 14 7.7 14C7.91667 14 8.10833 14.0667 8.275 14.2C8.44167 14.3333 8.59167 14.4833 8.725 14.65C8.80833 14.7667 8.92083 14.8542 9.0625 14.9125C9.20417 14.9708 9.35 15 9.5 15C9.78333 15 10.0208 14.9042 10.2125 14.7125C10.4042 14.5208 10.5 14.2833 10.5 14C10.5 13.7167 10.4042 13.4792 10.2125 13.2875C10.0208 13.0958 9.78333 13 9.5 13H1C0.716667 13 0.479167 12.9042 0.2875 12.7125C0.0958333 12.5208 0 12.2833 0 12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11H9.5C10.3333 11 11.0417 11.2917 11.625 11.875C12.2083 12.4583 12.5 13.1667 12.5 14C12.5 14.8333 12.2083 15.5417 11.625 16.125C11.0417 16.7083 10.3333 17 9.5 17ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H13.5C13.9167 5 14.2708 4.85417 14.5625 4.5625C14.8542 4.27083 15 3.91667 15 3.5C15 3.08333 14.8542 2.72917 14.5625 2.4375C14.2708 2.14583 13.9167 2 13.5 2C13.2333 2 12.9833 2.0625 12.75 2.1875C12.5167 2.3125 12.3333 2.49167 12.2 2.725C12.0833 2.925 11.9417 3.10417 11.775 3.2625C11.6083 3.42083 11.4083 3.5 11.175 3.5C10.8417 3.5 10.5708 3.375 10.3625 3.125C10.1542 2.875 10.1 2.60833 10.2 2.325C10.4333 1.625 10.8542 1.0625 11.4625 0.6375C12.0708 0.2125 12.75 0 13.5 0C14.4667 0 15.2917 0.341667 15.975 1.025C16.6583 1.70833 17 2.53333 17 3.5C17 4.46667 16.6583 5.29167 15.975 5.975C15.2917 6.65833 14.4667 7 13.5 7H1ZM17.95 14.7C17.6167 14.85 17.2917 14.8292 16.975 14.6375C16.6583 14.4458 16.5 14.1667 16.5 13.8C16.5 13.5667 16.5792 13.3708 16.7375 13.2125C16.8958 13.0542 17.075 12.9167 17.275 12.8C17.5083 12.6667 17.6875 12.4833 17.8125 12.25C17.9375 12.0167 18 11.7667 18 11.5C18 11.0833 17.8542 10.7292 17.5625 10.4375C17.2708 10.1458 16.9167 10 16.5 10H1C0.716667 10 0.479167 9.90417 0.2875 9.7125C0.0958333 9.52083 0 9.28333 0 9C0 8.71667 0.0958333 8.47917 0.2875 8.2875C0.479167 8.09583 0.716667 8 1 8H16.5C17.4667 8 18.2917 8.34167 18.975 9.025C19.6583 9.70833 20 10.5333 20 11.5C20 12.2 19.8167 12.8375 19.45 13.4125C19.0833 13.9875 18.5833 14.4167 17.95 14.7Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  clear_day: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 4C10.7167 4 10.4792 3.90417 10.2875 3.7125C10.0958 3.52083 10 3.28333 10 3V1C10 0.716667 10.0958 0.479167 10.2875 0.2875C10.4792 0.0958333 10.7167 0 11 0C11.2833 0 11.5208 0.0958333 11.7125 0.2875C11.9042 0.479167 12 0.716667 12 1V3C12 3.28333 11.9042 3.52083 11.7125 3.7125C11.5208 3.90417 11.2833 4 11 4ZM15.95 6.05C15.7667 5.86667 15.675 5.6375 15.675 5.3625C15.675 5.0875 15.7667 4.85 15.95 4.65L17.35 3.225C17.55 3.025 17.7875 2.925 18.0625 2.925C18.3375 2.925 18.575 3.025 18.775 3.225C18.9583 3.40833 19.05 3.64167 19.05 3.925C19.05 4.20833 18.9583 4.44167 18.775 4.625L17.35 6.05C17.1667 6.23333 16.9333 6.325 16.65 6.325C16.3667 6.325 16.1333 6.23333 15.95 6.05ZM19 12C18.7167 12 18.4792 11.9042 18.2875 11.7125C18.0958 11.5208 18 11.2833 18 11C18 10.7167 18.0958 10.4792 18.2875 10.2875C18.4792 10.0958 18.7167 10 19 10H21C21.2833 10 21.5208 10.0958 21.7125 10.2875C21.9042 10.4792 22 10.7167 22 11C22 11.2833 21.9042 11.5208 21.7125 11.7125C21.5208 11.9042 21.2833 12 21 12H19ZM11 22C10.7167 22 10.4792 21.9042 10.2875 21.7125C10.0958 21.5208 10 21.2833 10 21V19C10 18.7167 10.0958 18.4792 10.2875 18.2875C10.4792 18.0958 10.7167 18 11 18C11.2833 18 11.5208 18.0958 11.7125 18.2875C11.9042 18.4792 12 18.7167 12 19V21C12 21.2833 11.9042 21.5208 11.7125 21.7125C11.5208 21.9042 11.2833 22 11 22ZM4.65 6.05L3.225 4.65C3.025 4.45 2.925 4.20833 2.925 3.925C2.925 3.64167 3.025 3.40833 3.225 3.225C3.40833 3.04167 3.64167 2.95 3.925 2.95C4.20833 2.95 4.44167 3.04167 4.625 3.225L6.05 4.65C6.23333 4.83333 6.325 5.06667 6.325 5.35C6.325 5.63333 6.23333 5.86667 6.05 6.05C5.85 6.23333 5.61667 6.325 5.35 6.325C5.08333 6.325 4.85 6.23333 4.65 6.05ZM17.35 18.775L15.95 17.35C15.7667 17.15 15.675 16.9125 15.675 16.6375C15.675 16.3625 15.7667 16.1333 15.95 15.95C16.1333 15.7667 16.3625 15.675 16.6375 15.675C16.9125 15.675 17.15 15.7667 17.35 15.95L18.775 17.35C18.975 17.5333 19.0708 17.7667 19.0625 18.05C19.0542 18.3333 18.9583 18.575 18.775 18.775C18.575 18.975 18.3333 19.075 18.05 19.075C17.7667 19.075 17.5333 18.975 17.35 18.775ZM1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10H3C3.28333 10 3.52083 10.0958 3.7125 10.2875C3.90417 10.4792 4 10.7167 4 11C4 11.2833 3.90417 11.5208 3.7125 11.7125C3.52083 11.9042 3.28333 12 3 12H1ZM3.225 18.775C3.04167 18.5917 2.95 18.3583 2.95 18.075C2.95 17.7917 3.04167 17.5583 3.225 17.375L4.65 15.95C4.83333 15.7667 5.0625 15.675 5.3375 15.675C5.6125 15.675 5.85 15.7667 6.05 15.95C6.25 16.15 6.35 16.3875 6.35 16.6625C6.35 16.9375 6.25 17.175 6.05 17.375L4.65 18.775C4.45 18.975 4.20833 19.075 3.925 19.075C3.64167 19.075 3.40833 18.975 3.225 18.775ZM11 17C9.33333 17 7.91667 16.4167 6.75 15.25C5.58333 14.0833 5 12.6667 5 11C5 9.33333 5.58333 7.91667 6.75 6.75C7.91667 5.58333 9.33333 5 11 5C12.6667 5 14.0833 5.58333 15.25 6.75C16.4167 7.91667 17 9.33333 17 11C17 12.6667 16.4167 14.0833 15.25 15.25C14.0833 16.4167 12.6667 17 11 17ZM11 15C12.1 15 13.0417 14.6083 13.825 13.825C14.6083 13.0417 15 12.1 15 11C15 9.9 14.6083 8.95833 13.825 8.175C13.0417 7.39167 12.1 7 11 7C9.9 7 8.95833 7.39167 8.175 8.175C7.39167 8.95833 7 9.9 7 11C7 12.1 7.39167 13.0417 8.175 13.825C8.95833 14.6083 9.9 15 11 15Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  coronavirus: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.25 20C9.05 20 8.875 19.925 8.725 19.775C8.575 19.625 8.5 19.45 8.5 19.25C8.5 19.05 8.575 18.875 8.725 18.725C8.875 18.575 9.05 18.5 9.25 18.5V16.95C8.55 16.8667 7.89167 16.7 7.275 16.45C6.65833 16.2 6.1 15.8667 5.6 15.45L4.525 16.55C4.675 16.7 4.75 16.875 4.75 17.075C4.75 17.275 4.675 17.45 4.525 17.6C4.375 17.75 4.2 17.825 4 17.825C3.8 17.825 3.625 17.75 3.475 17.6L2.4 16.55C2.25 16.4 2.175 16.2208 2.175 16.0125C2.175 15.8042 2.25 15.625 2.4 15.475C2.55 15.325 2.725 15.2542 2.925 15.2625C3.125 15.2708 3.3 15.3417 3.45 15.475L4.55 14.375C4.13333 13.8583 3.8 13.3 3.55 12.7C3.3 12.1 3.13333 11.45 3.05 10.75H1.5C1.5 10.95 1.425 11.125 1.275 11.275C1.125 11.425 0.95 11.5 0.75 11.5C0.55 11.5 0.375 11.425 0.225 11.275C0.075 11.125 0 10.95 0 10.75V9.25C0 9.05 0.075 8.875 0.225 8.725C0.375 8.575 0.55 8.5 0.75 8.5C0.95 8.5 1.125 8.575 1.275 8.725C1.425 8.875 1.5 9.05 1.5 9.25H3.05C3.13333 8.55 3.30417 7.9 3.5625 7.3C3.82083 6.7 4.15 6.14167 4.55 5.625L3.45 4.525C3.3 4.65833 3.125 4.72917 2.925 4.7375C2.725 4.74583 2.55 4.675 2.4 4.525C2.25 4.375 2.175 4.19583 2.175 3.9875C2.175 3.77917 2.25 3.6 2.4 3.45L3.45 2.4C3.6 2.25 3.77917 2.175 3.9875 2.175C4.19583 2.175 4.375 2.25 4.525 2.4C4.675 2.55 4.75 2.72917 4.75 2.9375C4.75 3.14583 4.675 3.325 4.525 3.475L5.6 4.55C6.11667 4.13333 6.675 3.8 7.275 3.55C7.875 3.3 8.525 3.13333 9.225 3.05V1.5C9.025 1.5 8.85417 1.425 8.7125 1.275C8.57083 1.125 8.5 0.95 8.5 0.75C8.5 0.55 8.575 0.375 8.725 0.225C8.875 0.075 9.05 0 9.25 0H10.75C10.95 0 11.125 0.075 11.275 0.225C11.425 0.375 11.5 0.55 11.5 0.75C11.5 0.95 11.425 1.125 11.275 1.275C11.125 1.425 10.95 1.5 10.75 1.5V3.05C11.45 3.13333 12.1 3.3 12.7 3.55C13.3 3.8 13.8583 4.13333 14.375 4.55L15.475 3.45C15.325 3.3 15.25 3.125 15.25 2.925C15.25 2.725 15.325 2.55 15.475 2.4C15.625 2.25 15.8042 2.175 16.0125 2.175C16.2208 2.175 16.4 2.25 16.55 2.4L17.6 3.475C17.75 3.625 17.825 3.8 17.825 4C17.825 4.2 17.75 4.375 17.6 4.525C17.45 4.675 17.2708 4.75 17.0625 4.75C16.8542 4.75 16.675 4.675 16.525 4.525L15.45 5.6C15.8667 6.11667 16.2 6.67917 16.45 7.2875C16.7 7.89583 16.8667 8.55 16.95 9.25H18.5C18.5 9.05 18.575 8.875 18.725 8.725C18.875 8.575 19.05 8.5 19.25 8.5C19.45 8.5 19.625 8.575 19.775 8.725C19.925 8.875 20 9.05 20 9.25V10.75C20 10.95 19.925 11.125 19.775 11.275C19.625 11.425 19.45 11.5 19.25 11.5C19.05 11.5 18.875 11.425 18.725 11.275C18.575 11.125 18.5 10.95 18.5 10.75H16.95C16.8667 11.45 16.7 12.1042 16.45 12.7125C16.2 13.3208 15.8667 13.8833 15.45 14.4L16.525 15.475C16.675 15.325 16.8542 15.25 17.0625 15.25C17.2708 15.25 17.45 15.325 17.6 15.475C17.75 15.625 17.825 15.8042 17.825 16.0125C17.825 16.2208 17.75 16.4 17.6 16.55L16.55 17.6C16.4 17.75 16.2208 17.825 16.0125 17.825C15.8042 17.825 15.625 17.75 15.475 17.6C15.325 17.45 15.2542 17.275 15.2625 17.075C15.2708 16.875 15.3417 16.7 15.475 16.55L14.375 15.45C13.8583 15.8667 13.3 16.2042 12.7 16.4625C12.1 16.7208 11.45 16.8917 10.75 16.975V18.5C10.95 18.5 11.125 18.575 11.275 18.725C11.425 18.875 11.5 19.05 11.5 19.25C11.5 19.45 11.425 19.625 11.275 19.775C11.125 19.925 10.95 20 10.75 20H9.25ZM10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM8.25 14C8.53333 14 8.77083 13.9042 8.9625 13.7125C9.15417 13.5208 9.25 13.2833 9.25 13C9.25 12.7167 9.15417 12.4792 8.9625 12.2875C8.77083 12.0958 8.53333 12 8.25 12C7.96667 12 7.72917 12.0958 7.5375 12.2875C7.34583 12.4792 7.25 12.7167 7.25 13C7.25 13.2833 7.34583 13.5208 7.5375 13.7125C7.72917 13.9042 7.96667 14 8.25 14ZM11.75 14C12.0333 14 12.2708 13.9042 12.4625 13.7125C12.6542 13.5208 12.75 13.2833 12.75 13C12.75 12.7167 12.6542 12.4792 12.4625 12.2875C12.2708 12.0958 12.0333 12 11.75 12C11.4667 12 11.2292 12.0958 11.0375 12.2875C10.8458 12.4792 10.75 12.7167 10.75 13C10.75 13.2833 10.8458 13.5208 11.0375 13.7125C11.2292 13.9042 11.4667 14 11.75 14ZM6.5 11C6.78333 11 7.02083 10.9042 7.2125 10.7125C7.40417 10.5208 7.5 10.2833 7.5 10C7.5 9.71667 7.40417 9.47917 7.2125 9.2875C7.02083 9.09583 6.78333 9 6.5 9C6.21667 9 5.97917 9.09583 5.7875 9.2875C5.59583 9.47917 5.5 9.71667 5.5 10C5.5 10.2833 5.59583 10.5208 5.7875 10.7125C5.97917 10.9042 6.21667 11 6.5 11ZM10 11C10.2833 11 10.5208 10.9042 10.7125 10.7125C10.9042 10.5208 11 10.2833 11 10C11 9.71667 10.9042 9.47917 10.7125 9.2875C10.5208 9.09583 10.2833 9 10 9C9.71667 9 9.47917 9.09583 9.2875 9.2875C9.09583 9.47917 9 9.71667 9 10C9 10.2833 9.09583 10.5208 9.2875 10.7125C9.47917 10.9042 9.71667 11 10 11ZM13.5 11C13.7833 11 14.0208 10.9042 14.2125 10.7125C14.4042 10.5208 14.5 10.2833 14.5 10C14.5 9.71667 14.4042 9.47917 14.2125 9.2875C14.0208 9.09583 13.7833 9 13.5 9C13.2167 9 12.9792 9.09583 12.7875 9.2875C12.5958 9.47917 12.5 9.71667 12.5 10C12.5 10.2833 12.5958 10.5208 12.7875 10.7125C12.9792 10.9042 13.2167 11 13.5 11ZM8.25 8C8.53333 8 8.77083 7.90417 8.9625 7.7125C9.15417 7.52083 9.25 7.28333 9.25 7C9.25 6.71667 9.15417 6.47917 8.9625 6.2875C8.77083 6.09583 8.53333 6 8.25 6C7.96667 6 7.72917 6.09583 7.5375 6.2875C7.34583 6.47917 7.25 6.71667 7.25 7C7.25 7.28333 7.34583 7.52083 7.5375 7.7125C7.72917 7.90417 7.96667 8 8.25 8ZM11.75 8C12.0333 8 12.2708 7.90417 12.4625 7.7125C12.6542 7.52083 12.75 7.28333 12.75 7C12.75 6.71667 12.6542 6.47917 12.4625 6.2875C12.2708 6.09583 12.0333 6 11.75 6C11.4667 6 11.2292 6.09583 11.0375 6.2875C10.8458 6.47917 10.75 6.71667 10.75 7C10.75 7.28333 10.8458 7.52083 11.0375 7.7125C11.2292 7.90417 11.4667 8 11.75 8Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  rainy: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M11.95 19.9C11.7 20.0333 11.4458 20.0542 11.1875 19.9625C10.9292 19.8708 10.7333 19.7 10.6 19.45L9.1 16.45C8.96667 16.2 8.94583 15.9458 9.0375 15.6875C9.12917 15.4292 9.3 15.2333 9.55 15.1C9.8 14.9667 10.0542 14.9458 10.3125 15.0375C10.5708 15.1292 10.7667 15.3 10.9 15.55L12.4 18.55C12.5333 18.8 12.5542 19.0542 12.4625 19.3125C12.3708 19.5708 12.2 19.7667 11.95 19.9ZM17.95 19.9C17.7 20.0333 17.4458 20.0542 17.1875 19.9625C16.9292 19.8708 16.7333 19.7 16.6 19.45L15.1 16.45C14.9667 16.2 14.9458 15.9458 15.0375 15.6875C15.1292 15.4292 15.3 15.2333 15.55 15.1C15.8 14.9667 16.0542 14.9458 16.3125 15.0375C16.5708 15.1292 16.7667 15.3 16.9 15.55L18.4 18.55C18.5333 18.8 18.5542 19.0542 18.4625 19.3125C18.3708 19.5708 18.2 19.7667 17.95 19.9ZM5.95 19.9C5.7 20.0333 5.44583 20.0542 5.1875 19.9625C4.92917 19.8708 4.73333 19.7 4.6 19.45L3.1 16.45C2.96667 16.2 2.94583 15.9458 3.0375 15.6875C3.12917 15.4292 3.3 15.2333 3.55 15.1C3.8 14.9667 4.05417 14.9458 4.3125 15.0375C4.57083 15.1292 4.76667 15.3 4.9 15.55L6.4 18.55C6.53333 18.8 6.55417 19.0542 6.4625 19.3125C6.37083 19.5708 6.2 19.7667 5.95 19.9ZM5.5 14C3.98333 14 2.6875 13.4625 1.6125 12.3875C0.5375 11.3125 0 10.0167 0 8.5C0 7.11667 0.458333 5.90833 1.375 4.875C2.29167 3.84167 3.425 3.23333 4.775 3.05C5.30833 2.1 6.0375 1.35417 6.9625 0.8125C7.8875 0.270833 8.9 0 10 0C11.5 0 12.8042 0.479167 13.9125 1.4375C15.0208 2.39583 15.6917 3.59167 15.925 5.025C17.075 5.125 18.0417 5.6 18.825 6.45C19.6083 7.3 20 8.31667 20 9.5C20 10.75 19.5625 11.8125 18.6875 12.6875C17.8125 13.5625 16.75 14 15.5 14H5.5ZM5.5 12H15.5C16.2 12 16.7917 11.7583 17.275 11.275C17.7583 10.7917 18 10.2 18 9.5C18 8.8 17.7583 8.20833 17.275 7.725C16.7917 7.24167 16.2 7 15.5 7H14V6C14 4.9 13.6083 3.95833 12.825 3.175C12.0417 2.39167 11.1 2 10 2C9.2 2 8.47083 2.21667 7.8125 2.65C7.15417 3.08333 6.65833 3.66667 6.325 4.4L6.075 5H5.45C4.5 5.03333 3.6875 5.3875 3.0125 6.0625C2.3375 6.7375 2 7.55 2 8.5C2 9.46667 2.34167 10.2917 3.025 10.975C3.70833 11.6583 4.53333 12 5.5 12Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Intent *** //
  check_circle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M8.6 11.8L6.45 9.65C6.26667 9.46667 6.03333 9.375 5.75 9.375C5.46667 9.375 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.1 14.1 8.33333 14.2 8.6 14.2C8.86667 14.2 9.1 14.1 9.3 13.9L14.95 8.25C15.1333 8.06667 15.225 7.83333 15.225 7.55C15.225 7.26667 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  emergency_home: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 21.025C10.7333 21.025 10.4791 20.975 10.2375 20.875C9.99581 20.775 9.77498 20.6333 9.57498 20.45L1.54998 12.425C1.36664 12.225 1.22498 12.0041 1.12498 11.7625C1.02498 11.5208 0.974976 11.2666 0.974976 11C0.974976 10.7333 1.02498 10.475 1.12498 10.225C1.22498 9.97498 1.36664 9.75831 1.54998 9.57498L9.57498 1.54998C9.77498 1.34998 9.99581 1.20414 10.2375 1.11248C10.4791 1.02081 10.7333 0.974976 11 0.974976C11.2666 0.974976 11.525 1.02081 11.775 1.11248C12.025 1.20414 12.2416 1.34998 12.425 1.54998L20.45 9.57498C20.65 9.75831 20.7958 9.97498 20.8875 10.225C20.9791 10.475 21.025 10.7333 21.025 11C21.025 11.2666 20.9791 11.5208 20.8875 11.7625C20.7958 12.0041 20.65 12.225 20.45 12.425L12.425 20.45C12.2416 20.6333 12.025 20.775 11.775 20.875C11.525 20.975 11.2666 21.025 11 21.025ZM11 19.025L19.025 11L11 2.97498L2.97498 11L11 19.025ZM9.99998 12H12V5.99998H9.99998V12ZM11 15C11.2833 15 11.5208 14.9041 11.7125 14.7125C11.9041 14.5208 12 14.2833 12 14C12 13.7166 11.9041 13.4791 11.7125 13.2875C11.5208 13.0958 11.2833 13 11 13C10.7166 13 10.4791 13.0958 10.2875 13.2875C10.0958 13.4791 9.99998 13.7166 9.99998 14C9.99998 14.2833 10.0958 14.5208 10.2875 14.7125C10.4791 14.9041 10.7166 15 11 15Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  error: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14C11 13.7167 10.9042 13.4792 10.7125 13.2875C10.5208 13.0958 10.2833 13 10 13C9.71667 13 9.47917 13.0958 9.2875 13.2875C9.09583 13.4792 9 13.7167 9 14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM9 11H11V5H9V11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.5208 6.90417 10.7125 6.7125C10.9042 6.52083 11 6.28333 11 6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6C9 6.28333 9.09583 6.52083 9.2875 6.7125C9.47917 6.90417 9.71667 7 10 7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
  <path d="M1.725 18C1.54167 18 1.375 17.9542 1.225 17.8625C1.075 17.7708 0.958337 17.65 0.875003 17.5C0.79167 17.35 0.745837 17.1875 0.737503 17.0125C0.72917 16.8375 0.775003 16.6667 0.875003 16.5L10.125 0.5C10.225 0.333333 10.3542 0.208333 10.5125 0.125C10.6708 0.0416667 10.8333 0 11 0C11.1667 0 11.3292 0.0416667 11.4875 0.125C11.6458 0.208333 11.775 0.333333 11.875 0.5L21.125 16.5C21.225 16.6667 21.2708 16.8375 21.2625 17.0125C21.2542 17.1875 21.2083 17.35 21.125 17.5C21.0417 17.65 20.925 17.7708 20.775 17.8625C20.625 17.9542 20.4583 18 20.275 18H1.725ZM3.45 16H18.55L11 3L3.45 16ZM11 15C11.2833 15 11.5208 14.9042 11.7125 14.7125C11.9042 14.5208 12 14.2833 12 14C12 13.7167 11.9042 13.4792 11.7125 13.2875C11.5208 13.0958 11.2833 13 11 13C10.7167 13 10.4792 13.0958 10.2875 13.2875C10.0958 13.4792 10 13.7167 10 14C10 14.2833 10.0958 14.5208 10.2875 14.7125C10.4792 14.9042 10.7167 15 11 15ZM11 12C11.2833 12 11.5208 11.9042 11.7125 11.7125C11.9042 11.5208 12 11.2833 12 11V8C12 7.71667 11.9042 7.47917 11.7125 7.2875C11.5208 7.09583 11.2833 7 11 7C10.7167 7 10.4792 7.09583 10.2875 7.2875C10.0958 7.47917 10 7.71667 10 8V11C10 11.2833 10.0958 11.5208 10.2875 11.7125C10.4792 11.9042 10.7167 12 11 12Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  // *** Social *** //
  social_facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M10.0367 0C4.49365 0 0 4.49365 0 10.0367C0 14.7436 3.24066 18.6932 7.61226 19.778V13.104H5.54269V10.0367H7.61226V8.7151C7.61226 5.29899 9.15832 3.7156 12.5122 3.7156C13.1481 3.7156 14.2453 3.84046 14.6942 3.96491V6.74509C14.4573 6.7202 14.0458 6.70775 13.5347 6.70775C11.8891 6.70775 11.2532 7.33123 11.2532 8.95196V10.0367H14.5316L13.9683 13.104H11.2532V20C16.223 19.3998 20.0739 15.1683 20.0739 10.0367C20.0735 4.49365 15.5798 0 10.0367 0Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_flickr: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M19.0909 0H0.909091C0.407014 0 0 0.407014 0 0.909091V19.0909C0 19.593 0.407014 20 0.909091 20H19.0909C19.593 20 20 19.593 20 19.0909V0.909091C20 0.407014 19.593 0 19.0909 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M6.36364 12.7273C7.86987 12.7273 9.09091 11.5062 9.09091 10C9.09091 8.49377 7.86987 7.27273 6.36364 7.27273C4.85741 7.27273 3.63636 8.49377 3.63636 10C3.63636 11.5062 4.85741 12.7273 6.36364 12.7273Z" fill="white"/>
  <path d="M13.6364 12.7273C15.1426 12.7273 16.3636 11.5062 16.3636 10C16.3636 8.49377 15.1426 7.27273 13.6364 7.27273C12.1301 7.27273 10.9091 8.49377 10.9091 10C10.9091 11.5062 12.1301 12.7273 13.6364 12.7273Z" fill="white"/>
  </svg>`,
  social_google_play: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M3.1202 0.508333L14.0372 6.79667L11.6972 9.14083L3.1202 0.508333ZM0.85845 0L10.8795 10L0.859282 20C0.349369 19.7742 0 19.2717 0 18.6875C0 18.6683 0 18.6492 0.000831831 18.6308V18.6333V1.3675C0 1.35167 0 1.3325 0 1.31333C0 0.729167 0.349369 0.226667 0.850132 0.00416667L0.859282 0.000833333L0.85845 0ZM17.4302 8.82833C17.7746 9.08417 17.995 9.49083 17.995 9.94833C17.995 9.96667 17.995 9.98417 17.9942 10.0025V10C17.9975 10.0358 18 10.0783 18 10.1208C18 10.5508 17.792 10.9325 17.471 11.1692L17.4676 11.1717L15.1277 12.4992L12.5939 10L15.1285 7.46083L17.4302 8.82833ZM3.1202 19.4917L11.698 10.8592L14.038 13.2033L3.1202 19.4917Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.002 1.80113C12.6744 1.80113 12.9908 1.81285 14.0418 1.85974C15.0186 1.90272 15.546 2.06681 15.8976 2.20356C16.3626 2.38328 16.6986 2.60207 17.0463 2.9498C17.3979 3.30143 17.6128 3.63352 17.7925 4.09846C17.9293 4.45009 18.0934 4.98144 18.1364 5.95429C18.1832 7.00918 18.195 7.32565 18.195 9.99414C18.195 12.6665 18.1832 12.983 18.1364 14.034C18.0934 15.0107 17.9293 15.5382 17.7925 15.8898C17.6128 16.3548 17.394 16.6908 17.0463 17.0385C16.6947 17.3901 16.3626 17.605 15.8976 17.7847C15.546 17.9215 15.0147 18.0856 14.0418 18.1285C12.9869 18.1754 12.6704 18.1871 10.002 18.1871C7.32956 18.1871 7.01309 18.1754 5.9621 18.1285C4.98535 18.0856 4.4579 17.9215 4.10627 17.7847C3.64134 17.605 3.30533 17.3862 2.95761 17.0385C2.60598 16.6869 2.39109 16.3548 2.21137 15.8898C2.07462 15.5382 1.91053 15.0068 1.86755 14.034C1.82067 12.9791 1.80895 12.6626 1.80895 9.99414C1.80895 7.32174 1.82067 7.00527 1.86755 5.95429C1.91053 4.97753 2.07462 4.45009 2.21137 4.09846C2.39109 3.63352 2.60988 3.29752 2.95761 2.9498C3.30924 2.59816 3.64134 2.38328 4.10627 2.20356C4.4579 2.06681 4.98926 1.90272 5.9621 1.85974C7.01309 1.81285 7.32956 1.80113 10.002 1.80113ZM10.002 0C7.28658 0 6.94667 0.011721 5.88006 0.0586052C4.81735 0.105489 4.08674 0.277398 3.4538 0.52354C2.79351 0.781403 2.23481 1.12131 1.68002 1.68002C1.12131 2.23481 0.781403 2.79351 0.52354 3.44989C0.277398 4.08674 0.105489 4.81344 0.0586052 5.87615C0.011721 6.94667 0 7.28658 0 10.002C0 12.7173 0.011721 13.0572 0.0586052 14.1239C0.105489 15.1866 0.277398 15.9172 0.52354 16.5501C0.781403 17.2104 1.12131 17.7691 1.68002 18.3239C2.23481 18.8787 2.79351 19.2225 3.44989 19.4765C4.08674 19.7226 4.81344 19.8945 5.87615 19.9414C6.94276 19.9883 7.28267 20 9.99805 20C12.7134 20 13.0533 19.9883 14.1199 19.9414C15.1827 19.8945 15.9133 19.7226 16.5462 19.4765C17.2026 19.2225 17.7613 18.8787 18.3161 18.3239C18.8709 17.7691 19.2147 17.2104 19.4686 16.554C19.7148 15.9172 19.8867 15.1905 19.9336 14.1278C19.9805 13.0611 19.9922 12.7212 19.9922 10.0059C19.9922 7.29049 19.9805 6.95058 19.9336 5.88396C19.8867 4.82125 19.7148 4.09064 19.4686 3.45771C19.2225 2.79351 18.8826 2.23481 18.3239 1.68002C17.7691 1.12522 17.2104 0.781403 16.554 0.527447C15.9172 0.281305 15.1905 0.109396 14.1278 0.0625122C13.0572 0.011721 12.7173 0 10.002 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M10.002 4.86423C7.16546 4.86423 4.86423 7.16546 4.86423 10.002C4.86423 12.8384 7.16546 15.1397 10.002 15.1397C12.8384 15.1397 15.1397 12.8384 15.1397 10.002C15.1397 7.16546 12.8384 4.86423 10.002 4.86423ZM10.002 13.3346C8.16175 13.3346 6.66927 11.8422 6.66927 10.002C6.66927 8.16175 8.16175 6.66927 10.002 6.66927C11.8422 6.66927 13.3346 8.16175 13.3346 10.002C13.3346 11.8422 11.8422 13.3346 10.002 13.3346Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M16.5423 4.66103C16.5423 5.32522 16.0031 5.86048 15.3428 5.86048C14.6786 5.86048 14.1434 5.32131 14.1434 4.66103C14.1434 3.99683 14.6826 3.46157 15.3428 3.46157C16.0031 3.46157 16.5423 4.00074 16.5423 4.66103Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_pinterest: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0C4.47656 0 0 4.47656 0 10C0 14.2383 2.63672 17.8555 6.35547 19.3125C6.26953 18.5195 6.1875 17.3086 6.39062 16.4453C6.57422 15.6641 7.5625 11.4766 7.5625 11.4766C7.5625 11.4766 7.26172 10.8789 7.26172 9.99219C7.26172 8.60156 8.06641 7.5625 9.07031 7.5625C9.92187 7.5625 10.3359 8.20312 10.3359 8.97266C10.3359 9.83203 9.78906 11.1133 9.50781 12.3008C9.27344 13.2969 10.0078 14.1094 10.9883 14.1094C12.7656 14.1094 14.1328 12.2344 14.1328 9.53125C14.1328 7.13672 12.4141 5.46094 9.95703 5.46094C7.11328 5.46094 5.44141 7.59375 5.44141 9.80078C5.44141 10.6602 5.77344 11.582 6.1875 12.082C6.26953 12.1797 6.28125 12.2695 6.25781 12.3672C6.18359 12.6836 6.01172 13.3633 5.98047 13.5C5.9375 13.6836 5.83594 13.7227 5.64453 13.6328C4.39453 13.0508 3.61328 11.2266 3.61328 9.75781C3.61328 6.60156 5.90625 3.70703 10.2188 3.70703C13.6875 3.70703 16.3828 6.17969 16.3828 9.48438C16.3828 12.9297 14.2109 15.7031 11.1953 15.7031C10.1836 15.7031 9.23047 15.1758 8.90234 14.5547C8.90234 14.5547 8.40234 16.4648 8.28125 16.9336C8.05469 17.8008 7.44531 18.8906 7.03906 19.5547C7.97656 19.8438 8.96875 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_rss: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M0 6.79688V10.6172C2.49219 10.6172 4.85156 11.6016 6.61719 13.3672C8.38281 15.1328 9.35938 17.4922 9.35938 19.9922V20H13.1953C13.1953 16.3594 11.7109 13.0703 9.32031 10.6719C6.9375 8.28125 3.64062 6.80469 0 6.79688Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M2.65625 14.6797C1.92188 14.6797 1.26562 14.9766 0.78125 15.4609C0.296875 15.9453 0 16.6016 0 17.3359C0 18.0625 0.296875 18.7188 0.78125 19.2031C1.26562 19.6797 1.92188 19.9766 2.65625 19.9766C3.39062 19.9766 4.04688 19.6875 4.53125 19.2031C5.01562 18.7188 5.3125 18.0625 5.3125 17.3359C5.3125 16.6016 5.01562 15.9453 4.53125 15.4609C4.04688 14.9766 3.39062 14.6797 2.65625 14.6797Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M14.1328 5.86719C10.5156 2.24219 5.52344 0 0.0078125 0V3.82031C8.92188 3.82812 16.1641 11.0859 16.1719 20H20C20 14.4844 17.7578 9.49219 14.1328 5.86719Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_snapchat: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M17.581 13.7331C14.4839 12.2334 13.9903 9.91793 13.9683 9.74618C13.9417 9.53815 13.9116 9.37458 14.141 9.16297C14.3623 8.95851 15.3439 8.35076 15.6162 8.16061C16.0664 7.84574 16.2647 7.53139 16.1185 7.14496C16.0163 6.87763 15.7675 6.77694 15.5053 6.77694C15.4227 6.77719 15.3402 6.78645 15.2596 6.80454C14.7649 6.91188 14.2846 7.15979 14.0066 7.22675C13.9732 7.23536 13.9389 7.23999 13.9044 7.24055C13.7562 7.24055 13.7 7.17461 13.7143 6.99622C13.7491 6.45543 13.8226 5.39991 13.7373 4.41391C13.6203 3.05733 13.1829 2.38517 12.6642 1.79071C12.4133 1.50242 11.2483 0.263916 8.99989 0.263916C6.75152 0.263916 5.58799 1.50242 5.33862 1.78713C4.81843 2.38159 4.38153 3.05375 4.26554 4.41033C4.1802 5.39633 4.25685 6.45134 4.28853 6.99264C4.29875 7.16234 4.24663 7.23697 4.09844 7.23697C4.06395 7.23638 4.02965 7.23175 3.99624 7.22317C3.71877 7.15621 3.23844 6.9083 2.7438 6.80096C2.66311 6.78287 2.5807 6.77361 2.49801 6.77336C2.23485 6.77336 1.98702 6.87559 1.88482 7.14139C1.73867 7.52781 1.93592 7.84217 2.38764 8.15703C2.66 8.34718 3.64161 8.95442 3.86287 9.15939C4.0918 9.371 4.06216 9.53457 4.03559 9.74261C4.01362 9.91691 3.51949 12.2324 0.422867 13.7295C0.241464 13.8175 -0.0671757 14.0035 0.477032 14.3041C1.33141 14.7764 1.90015 14.7258 2.34216 15.0105C2.71723 15.2522 2.49546 15.7736 2.76833 15.9617C3.10354 16.1933 4.09435 15.9454 5.37439 16.3681C6.44748 16.7218 7.0995 17.7211 9.00244 17.7211C10.9054 17.7211 11.5763 16.7172 12.6305 16.3681C13.908 15.9454 14.9008 16.1933 15.2366 15.9617C15.5089 15.7736 15.2877 15.2522 15.6627 15.0105C16.1047 14.7258 16.673 14.7764 17.5279 14.3041C18.071 14.0071 17.7624 13.821 17.581 13.7331Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_soundcloud: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="9" viewBox="0 0 20 9" fill="none">
  <path d="M0.966096 4.67021C0.923344 4.67021 0.888366 4.70539 0.882843 4.75393L0.68627 6.61519L0.882843 8.43512C0.888366 8.48366 0.923344 8.51905 0.966096 8.51905C1.00823 8.51905 1.04239 8.48429 1.04914 8.43533L1.27292 6.61498L1.04914 4.75372C1.04239 4.70433 1.00823 4.67021 0.966096 4.67021Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M0.226643 5.38326C0.185119 5.38326 0.151982 5.41632 0.146459 5.46444L0 6.61519L0.146459 7.74645C0.151777 7.79435 0.184914 7.82741 0.226643 7.82741C0.267144 7.82741 0.300077 7.79435 0.306622 7.74687L0.479877 6.61519L0.306622 5.46338C0.300077 5.41632 0.267144 5.38326 0.226643 5.38326Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M1.75178 4.3052C1.699 4.3052 1.65687 4.34802 1.65155 4.40695L1.46479 6.61519L1.65155 8.74268C1.65687 8.80181 1.699 8.84442 1.75178 8.84442C1.80353 8.84442 1.84567 8.80181 1.8518 8.74289L2.06372 6.61498L1.8518 4.40674C1.84567 4.34802 1.80353 4.3052 1.75178 4.3052Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M2.544 4.2272C2.48182 4.2272 2.4313 4.2785 2.42639 4.34675L2.25006 6.61583L2.42639 8.8105C2.4313 8.87833 2.48182 8.92984 2.544 8.92984C2.60516 8.92984 2.65548 8.87833 2.66121 8.8105L2.86147 6.61583L2.66121 4.34633C2.65548 4.2785 2.60516 4.2272 2.544 4.2272Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M3.47655 4.51017C3.47164 4.43281 3.41355 4.37367 3.34237 4.37367C3.27016 4.37367 3.21248 4.4326 3.20798 4.51081L3.04147 6.61561L3.20798 8.82873C3.21248 8.90652 3.27037 8.96566 3.34237 8.96566C3.41376 8.96566 3.47164 8.90674 3.47655 8.82895L3.66535 6.61561L3.47655 4.51017Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M4.14748 3.03702C4.06648 3.03702 4.0002 3.10528 3.99611 3.19239L3.83984 6.61668L3.99611 8.82958C4.00041 8.91564 4.06668 8.9841 4.14748 8.9841C4.22767 8.9841 4.29394 8.91585 4.29885 8.82895V8.82979L4.47558 6.61689L4.29885 3.19239C4.29374 3.10528 4.22746 3.03702 4.14748 3.03702Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M4.94625 2.2483C4.85564 2.2483 4.78179 2.32419 4.7777 2.42106C4.7777 2.42148 4.63145 6.62855 4.63145 6.62855L4.77791 8.82767C4.782 8.92412 4.85564 9 4.94625 9C5.03626 9 5.11071 8.92412 5.1146 8.82725V8.82852L5.28008 6.62855L5.1146 2.42106C5.11071 2.32419 5.03626 2.2483 4.94625 2.2483Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M5.77673 1.86804C5.6763 1.86804 5.59468 1.95198 5.5912 2.05881L5.45518 6.61773L5.5912 8.79418C5.59489 8.90017 5.6763 8.98389 5.77673 8.98389C5.87655 8.98389 5.95817 8.90017 5.96226 8.79355V8.79482L6.11588 6.61795L5.96226 2.05881C5.95796 1.95198 5.87655 1.86804 5.77673 1.86804Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M6.80337 1.90556C6.7999 1.78855 6.71092 1.69677 6.60107 1.69677C6.49041 1.69677 6.40143 1.78877 6.39836 1.90556L6.27236 6.61773L6.39857 8.78062C6.40164 8.89635 6.49041 8.98792 6.60107 8.98792C6.71092 8.98792 6.8001 8.89635 6.80337 8.77998L6.94533 6.61837L6.80337 1.90556Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M7.43176 1.8C7.31107 1.8 7.21473 1.89941 7.21186 2.02638L7.09609 6.61858L7.21227 8.76048C7.21493 8.88618 7.31107 8.98601 7.43176 8.98601C7.55162 8.98601 7.64797 8.88596 7.65124 8.75921V8.7609L7.78174 6.61816L7.65124 2.02574C7.64797 1.89899 7.55162 1.8 7.43176 1.8Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M8.26898 1.94986C8.13889 1.94986 8.03457 2.05732 8.03211 2.19425L7.92636 6.61858L8.03211 8.74776C8.03457 8.88342 8.13889 8.99046 8.26898 8.99046C8.39888 8.99046 8.50299 8.88342 8.50545 8.74628V8.74797L8.62409 6.61922L8.50545 2.19447C8.50299 2.05732 8.39888 1.94986 8.26898 1.94986Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M9.25288 1.13676C9.21278 1.10857 9.16431 1.09204 9.11255 1.09204C9.06223 1.09204 9.01539 1.10794 8.97591 1.13464C8.90657 1.18149 8.86014 1.26225 8.85891 1.35424L8.85809 1.40384L8.76277 6.61773C8.76277 6.6207 8.85891 8.73399 8.85891 8.73399C8.85891 8.73738 8.85932 8.73971 8.85952 8.74289C8.86239 8.80181 8.88387 8.85608 8.91844 8.89911C8.96528 8.95697 9.03503 8.99428 9.11255 8.99428C9.18149 8.99428 9.24429 8.96481 9.2901 8.91733C9.33613 8.87007 9.36518 8.80478 9.3664 8.73229L9.47338 6.61901L9.36661 1.35403C9.36497 1.26352 9.31997 1.18382 9.25288 1.13676Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M10.0903 0.637589C10.0502 0.612153 10.0028 0.597315 9.95265 0.597315C9.88801 0.597315 9.82848 0.621479 9.78164 0.661329C9.7215 0.712836 9.68264 0.790415 9.68141 0.87732L9.6808 0.906147L9.57034 6.61986L9.68141 8.70389C9.68366 8.85587 9.80496 8.98177 9.95265 8.98177C10.0997 8.98177 10.221 8.85587 10.2231 8.70198V8.70452L10.3437 6.62007L10.2235 0.876896C10.222 0.775365 10.1684 0.686552 10.0903 0.637589Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M17.5399 3.90141C17.2032 3.90141 16.8812 3.97221 16.5887 4.09918C16.3925 1.80212 14.5336 0 12.2659 0C11.7108 0 11.1701 0.113189 10.6923 0.304593C10.5068 0.379204 10.4577 0.455511 10.4558 0.60431V8.69456C10.4577 8.85036 10.5743 8.97181 10.7213 8.98686C10.7277 8.98771 17.5403 8.98686 17.5403 8.98686C18.8989 8.98686 20 7.85836 20 6.45028C19.9998 5.04263 18.8987 3.90141 17.5399 3.90141Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_tiktok: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
  <path d="M14.883 4.27729C14.7506 4.20752 14.6217 4.13104 14.4968 4.04813C14.1337 3.80333 13.8007 3.51489 13.5051 3.18901C12.7655 2.32613 12.4893 1.45076 12.3876 0.837875H12.3917C12.3067 0.32915 12.3418 0 12.3471 0H8.97851V13.2818C8.97851 13.4602 8.97851 13.6364 8.97116 13.8106C8.97116 13.8322 8.96911 13.8522 8.96789 13.8756C8.96789 13.8851 8.96789 13.8951 8.96584 13.9051C8.96584 13.9076 8.96584 13.9101 8.96584 13.9126C8.93034 14.3892 8.78052 14.8495 8.52957 15.2532C8.27862 15.6568 7.93424 15.9914 7.52671 16.2275C7.10197 16.4739 6.62159 16.6032 6.13293 16.6025C4.56344 16.6025 3.29143 15.2976 3.29143 13.686C3.29143 12.0744 4.56344 10.7695 6.13293 10.7695C6.43002 10.7692 6.72529 10.8169 7.00777 10.9107L7.01185 7.41338C6.15432 7.30043 5.28314 7.36992 4.45327 7.61747C3.62339 7.86502 2.85284 8.28524 2.19021 8.85164C1.6096 9.36603 1.12148 9.97979 0.747808 10.6653C0.605611 10.9153 0.0691014 11.9198 0.00413184 13.5502C-0.0367295 14.4755 0.235816 15.4342 0.365755 15.8305V15.8388C0.447477 16.0721 0.764153 16.8683 1.28023 17.5395C1.69638 18.078 2.18804 18.5509 2.73939 18.9432V18.9349L2.74756 18.9432C4.37834 20.0732 6.18645 19.999 6.18645 19.999C6.49945 19.9861 7.54795 19.999 8.73865 19.4236C10.0593 18.7857 10.8111 17.8354 10.8111 17.8354C11.2915 17.2675 11.6734 16.6204 11.9405 15.9217C12.2454 15.1047 12.3471 14.1247 12.3471 13.7331V6.68675C12.388 6.71175 12.9323 7.07881 12.9323 7.07881C12.9323 7.07881 13.7164 7.59129 14.9398 7.92502C15.8175 8.16251 17 8.21251 17 8.21251V4.80268C16.5857 4.84851 15.7443 4.71518 14.883 4.27729Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_tumblr: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M8.16675 20C5.16675 20 2.91675 18.4583 2.91675 14.75V8.83333H0.166748V5.625C3.16675 4.83333 4.41675 2.25 4.58342 0H7.70842V5.08333H11.3334V8.83333H7.70842V14C7.70842 15.5417 8.50008 16.0833 9.75008 16.0833H11.5001V20H8.16675Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_vimeo: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
  <path d="M19.8881 1.69862C19.5362 0.229472 17.8797 -0.185772 16.2069 0.0712117C15.3489 0.204969 12.4525 1.49916 11.4656 4.60025C13.2117 4.46356 14.1279 4.72713 13.9598 6.67303C13.8886 7.48846 13.4838 8.38049 13.0286 9.23624C12.5054 10.2241 11.5212 12.1601 10.2329 10.7655C9.0727 9.50732 9.16169 7.10527 8.89749 5.5037C8.74774 4.60315 8.59141 3.48589 8.30044 2.56221C8.05194 1.76626 7.47709 0.809563 6.77407 0.599948C6.01998 0.377956 5.08804 0.727832 4.54143 1.05518C2.83909 2.06578 1.56386 3.45811 0.102263 4.65849C-0.0821777 4.84616 0.0270352 5.00379 0.0891308 5.14342C0.299039 5.47202 0.380141 5.67144 0.780407 5.73002C1.81954 5.88433 2.8077 4.74937 3.4963 5.93241C3.9175 6.65239 4.0489 7.44205 4.31772 8.21766C4.67544 9.25684 4.95332 10.3843 5.2476 11.5768C5.74663 13.592 6.35542 16.6046 8.0787 17.3458C8.95631 17.7212 10.276 17.218 10.9437 16.8167C12.7553 15.7305 14.2286 14.2052 15.375 12.5542C18.3584 8.26088 19.7887 3.94699 19.9442 3.12531C20.0548 2.52978 19.9823 2.0383 19.8881 1.69862Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_x: `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
  <path d="M17.4256 0H20.8185L13.4062 8.47179L22.1262 20H15.2985L9.95077 13.0082L3.83179 20H0.436923L8.36513 10.9385L0 0H7.00103L11.8349 6.39077L17.4256 0ZM16.2349 17.9692H18.1149L5.97949 1.9241H3.96205L16.2349 17.9692Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
  <path d="M19.8008 3.03516C19.8008 3.03516 19.6055 1.65625 19.0039 1.05078C18.2422 0.253906 17.3906 0.25 17 0.203125C14.2031 -1.11759e-07 10.0039 0 10.0039 0H9.99609C9.99609 0 5.79688 -1.11759e-07 3 0.203125C2.60938 0.25 1.75781 0.253906 0.996094 1.05078C0.394531 1.65625 0.203125 3.03516 0.203125 3.03516C0.203125 3.03516 0 4.65625 0 6.27344V7.78906C0 9.40625 0.199219 11.0273 0.199219 11.0273C0.199219 11.0273 0.394531 12.4062 0.992187 13.0117C1.75391 13.8086 2.75391 13.7812 3.19922 13.8672C4.80078 14.0195 10 14.0664 10 14.0664C10 14.0664 14.2031 14.0586 17 13.8594C17.3906 13.8125 18.2422 13.8086 19.0039 13.0117C19.6055 12.4062 19.8008 11.0273 19.8008 11.0273C19.8008 11.0273 20 9.41016 20 7.78906V6.27344C20 4.65625 19.8008 3.03516 19.8008 3.03516ZM7.93359 9.62891V4.00781L13.3359 6.82812L7.93359 9.62891Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Filled *** //
  account_balance_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M3.22502 15.875V11.65C3.22502 11.2666 3.36252 10.9416 3.63752 10.675C3.91252 10.4083 4.24169 10.275 4.62502 10.275C5.00836 10.275 5.33336 10.4083 5.60002 10.675C5.86669 10.9416 6.00002 11.2666 6.00002 11.65V15.9C6.00002 16.2833 5.86669 16.6083 5.60002 16.875C5.33336 17.1416 5.00836 17.275 4.62502 17.275C4.24169 17.275 3.91252 17.1375 3.63752 16.8625C3.36252 16.5875 3.22502 16.2583 3.22502 15.875ZM9.62502 15.9V11.65C9.62502 11.2666 9.75836 10.9416 10.025 10.675C10.2917 10.4083 10.6167 10.275 11 10.275C11.3834 10.275 11.7084 10.4083 11.975 10.675C12.2417 10.9416 12.375 11.2666 12.375 11.65V15.9C12.375 16.2833 12.2417 16.6083 11.975 16.875C11.7084 17.1416 11.3834 17.275 11 17.275C10.6167 17.275 10.2917 17.1416 10.025 16.875C9.75836 16.6083 9.62502 16.2833 9.62502 15.9ZM1.72502 21.65C1.29169 21.65 0.920858 21.4958 0.612524 21.1875C0.304191 20.8791 0.150024 20.5083 0.150024 20.075C0.150024 19.6416 0.304191 19.2708 0.612524 18.9625C0.920858 18.6541 1.29169 18.5 1.72502 18.5H20.275C20.7084 18.5 21.0792 18.6541 21.3875 18.9625C21.6959 19.2708 21.85 19.6416 21.85 20.075C21.85 20.5083 21.6959 20.8791 21.3875 21.1875C21.0792 21.4958 20.7084 21.65 20.275 21.65H1.72502ZM16 15.875V11.65C16 11.2666 16.1375 10.9416 16.4125 10.675C16.6875 10.4083 17.0167 10.275 17.4 10.275C17.7834 10.275 18.1084 10.4083 18.375 10.675C18.6417 10.9416 18.775 11.2666 18.775 11.65V15.9C18.775 16.2833 18.6417 16.6083 18.375 16.875C18.1084 17.1416 17.7834 17.275 17.4 17.275C17.0167 17.275 16.6875 17.1375 16.4125 16.8625C16.1375 16.5875 16 16.2583 16 15.875ZM20.175 9.02495H1.65002C1.23336 9.02495 0.879191 8.87912 0.587524 8.58745C0.295858 8.29578 0.150024 7.94162 0.150024 7.52495V6.57495C0.150024 6.29162 0.225024 6.02912 0.375024 5.78745C0.525024 5.54578 0.725024 5.35828 0.975024 5.22495L9.60002 0.924951C10.0334 0.691618 10.5 0.574951 11 0.574951C11.5 0.574951 11.9667 0.691618 12.4 0.924951L20.925 5.17495C21.2084 5.30828 21.4334 5.51245 21.6 5.78745C21.7667 6.06245 21.85 6.36662 21.85 6.69995V7.32495C21.85 7.79162 21.6875 8.19162 21.3625 8.52495C21.0375 8.85828 20.6417 9.02495 20.175 9.02495Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  cancel_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M10.9242 12.3032L13.8242 15.2032C14.0075 15.3866 14.2408 15.4782 14.5242 15.4782C14.8075 15.4782 15.0408 15.3866 15.2242 15.2032C15.4075 15.0199 15.4992 14.7866 15.4992 14.5032C15.4992 14.2199 15.4075 13.9866 15.2242 13.8032L12.3242 10.9032L15.2242 8.00324C15.4075 7.81991 15.4992 7.58658 15.4992 7.30324C15.4992 7.01991 15.4075 6.78658 15.2242 6.60324C15.0408 6.41991 14.8075 6.32824 14.5242 6.32824C14.2408 6.32824 14.0075 6.41991 13.8242 6.60324L10.9242 9.50324L8.02416 6.60324C7.84083 6.41991 7.6075 6.32824 7.32416 6.32824C7.04083 6.32824 6.8075 6.41991 6.62416 6.60324C6.44083 6.78658 6.34916 7.01991 6.34916 7.30324C6.34916 7.58658 6.44083 7.81991 6.62416 8.00324L9.52416 10.9032L6.62416 13.8032C6.44083 13.9866 6.34916 14.2199 6.34916 14.5032C6.34916 14.7866 6.44083 15.0199 6.62416 15.2032C6.8075 15.3866 7.04083 15.4782 7.32416 15.4782C7.6075 15.4782 7.84083 15.3866 8.02416 15.2032L10.9242 12.3032ZM10.9242 20.9032C9.54083 20.9032 8.24083 20.6407 7.02416 20.1157C5.8075 19.5907 4.74916 18.8782 3.84916 17.9782C2.94916 17.0782 2.23666 16.0199 1.71166 14.8032C1.18666 13.5866 0.924164 12.2866 0.924164 10.9032C0.924164 9.51991 1.18666 8.21991 1.71166 7.00324C2.23666 5.78658 2.94916 4.72824 3.84916 3.82824C4.74916 2.92824 5.8075 2.21574 7.02416 1.69074C8.24083 1.16574 9.54083 0.903244 10.9242 0.903244C12.3075 0.903244 13.6075 1.16574 14.8242 1.69074C16.0408 2.21574 17.0992 2.92824 17.9992 3.82824C18.8992 4.72824 19.6117 5.78658 20.1367 7.00324C20.6617 8.21991 20.9242 9.51991 20.9242 10.9032C20.9242 12.2866 20.6617 13.5866 20.1367 14.8032C19.6117 16.0199 18.8992 17.0782 17.9992 17.9782C17.0992 18.8782 16.0408 19.5907 14.8242 20.1157C13.6075 20.6407 12.3075 20.9032 10.9242 20.9032Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  language_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 21.8499C9.51669 21.8499 8.11669 21.5624 6.80002 20.9874C5.48336 20.4124 4.33336 19.6332 3.35002 18.6499C2.36669 17.6666 1.58752 16.5166 1.01252 15.1999C0.437524 13.8832 0.150024 12.4832 0.150024 10.9999C0.150024 9.51657 0.437524 8.11657 1.01252 6.7999C1.58752 5.48324 2.36669 4.33324 3.35002 3.3499C4.33336 2.36657 5.48336 1.5874 6.80002 1.0124C8.11669 0.437402 9.51669 0.149902 11 0.149902C12.4834 0.149902 13.8834 0.437402 15.2 1.0124C16.5167 1.5874 17.6667 2.36657 18.65 3.3499C19.6334 4.33324 20.4125 5.48324 20.9875 6.7999C21.5625 8.11657 21.85 9.51657 21.85 10.9999C21.85 12.4832 21.5625 13.8832 20.9875 15.1999C20.4125 16.5166 19.6334 17.6666 18.65 18.6499C17.6667 19.6332 16.5167 20.4124 15.2 20.9874C13.8834 21.5624 12.4834 21.8499 11 21.8499ZM10.95 18.6749C11.3167 18.1082 11.6584 17.5041 11.975 16.8624C12.2917 16.2207 12.55 15.5499 12.75 14.8499H9.22502C9.42502 15.5499 9.67086 16.2207 9.96252 16.8624C10.2542 17.5041 10.5834 18.1082 10.95 18.6749ZM8.47502 18.2749C8.14169 17.7582 7.87919 17.2041 7.68752 16.6124C7.49586 16.0207 7.32502 15.4332 7.17502 14.8499H4.37502C4.80836 15.6499 5.37502 16.3499 6.07502 16.9499C6.77502 17.5499 7.57502 17.9916 8.47502 18.2749ZM13.45 18.2749C14.35 17.9916 15.1584 17.5499 15.875 16.9499C16.5917 16.3499 17.1667 15.6499 17.6 14.8499H14.8C14.65 15.4332 14.4709 16.0207 14.2625 16.6124C14.0542 17.2041 13.7834 17.7582 13.45 18.2749ZM3.55002 12.9249H6.77502C6.72502 12.5916 6.68752 12.2707 6.66252 11.9624C6.63752 11.6541 6.62502 11.3332 6.62502 10.9999C6.62502 10.6499 6.63752 10.3249 6.66252 10.0249C6.68752 9.7249 6.72502 9.40824 6.77502 9.0749H3.55002C3.46669 9.39157 3.40419 9.70407 3.36252 10.0124C3.32086 10.3207 3.30002 10.6499 3.30002 10.9999C3.30002 11.3332 3.32086 11.6582 3.36252 11.9749C3.40419 12.2916 3.46669 12.6082 3.55002 12.9249ZM8.77502 12.9249H13.2C13.25 12.5916 13.2792 12.2707 13.2875 11.9624C13.2959 11.6541 13.3 11.3332 13.3 10.9999C13.3 10.6499 13.2959 10.3249 13.2875 10.0249C13.2792 9.7249 13.25 9.40824 13.2 9.0749H8.77502C8.72502 9.40824 8.68752 9.7249 8.66252 10.0249C8.63752 10.3249 8.62502 10.6499 8.62502 10.9999C8.62502 11.3332 8.63752 11.6541 8.66252 11.9624C8.68752 12.2707 8.72502 12.5916 8.77502 12.9249ZM15.2 12.9249H18.4C18.4834 12.6082 18.5459 12.2916 18.5875 11.9749C18.6292 11.6582 18.65 11.3332 18.65 10.9999C18.65 10.6499 18.6292 10.3207 18.5875 10.0124C18.5459 9.70407 18.4834 9.39157 18.4 9.0749H15.2C15.2334 9.40824 15.2584 9.7249 15.275 10.0249C15.2917 10.3249 15.3 10.6499 15.3 10.9999C15.3 11.3332 15.2917 11.6541 15.275 11.9624C15.2584 12.2707 15.2334 12.5916 15.2 12.9249ZM14.8 7.1249H17.6C17.1667 6.3249 16.5917 5.62907 15.875 5.0374C15.1584 4.44574 14.35 4.00824 13.45 3.7249C13.7834 4.24157 14.0542 4.79157 14.2625 5.3749C14.4709 5.95824 14.65 6.54157 14.8 7.1249ZM9.22502 7.1249H12.75C12.5667 6.4249 12.3167 5.75824 12 5.1249C11.6834 4.49157 11.3334 3.89157 10.95 3.3249C10.5834 3.89157 10.2542 4.49157 9.96252 5.1249C9.67086 5.75824 9.42502 6.4249 9.22502 7.1249ZM4.37502 7.1249H7.17502C7.32502 6.54157 7.49586 5.95824 7.68752 5.3749C7.87919 4.79157 8.14169 4.24157 8.47502 3.7249C7.57502 4.00824 6.77502 4.44574 6.07502 5.0374C5.37502 5.62907 4.80836 6.3249 4.37502 7.1249Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  lock_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
  <path d="M3.30002 22.7751C2.43369 22.7751 1.69211 22.4667 1.07527 21.8498C0.458441 21.2328 0.150024 20.4913 0.150024 19.6251V10.2251C0.150024 9.35893 0.458441 8.61735 1.07527 8.00035C1.69211 7.38351 2.43369 7.0751 3.30002 7.0751H3.62502V5.8001C3.62502 4.28343 4.14586 2.99593 5.18752 1.9376C6.22919 0.879264 7.50002 0.350098 9.00002 0.350098C10.5 0.350098 11.7709 0.879264 12.8125 1.9376C13.8542 2.99593 14.375 4.28343 14.375 5.8001V7.0751H14.7C15.5662 7.0751 16.3078 7.38351 16.9248 8.00035C17.5416 8.61735 17.85 9.35893 17.85 10.2251V19.6251C17.85 20.4913 17.5416 21.2328 16.9248 21.8498C16.3078 22.4667 15.5662 22.7751 14.7 22.7751H3.30002ZM9.00002 16.9251C9.55002 16.9251 10.0209 16.7293 10.4125 16.3376C10.8042 15.9459 11 15.4751 11 14.9251C11 14.3751 10.8042 13.9043 10.4125 13.5126C10.0209 13.1209 9.55002 12.9251 9.00002 12.9251C8.45002 12.9251 7.97919 13.1209 7.58752 13.5126C7.19586 13.9043 7.00002 14.3751 7.00002 14.9251C7.00002 15.4751 7.19586 15.9459 7.58752 16.3376C7.97919 16.7293 8.45002 16.9251 9.00002 16.9251ZM6.77502 7.0751H11.225V5.8001C11.225 5.16126 11.0125 4.61818 10.5875 4.17085C10.1625 3.72368 9.63336 3.5001 9.00002 3.5001C8.36669 3.5001 7.83752 3.72368 7.41252 4.17085C6.98752 4.61818 6.77502 5.16126 6.77502 5.8001V7.0751Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`
}, g0 = v`
  :host {
    display: inline-block;
    --_nys-icon-size: 0.7em; /* If cap isn't supported, a fallback value of 0.7em is used, as it closely approximates the height of capital letters in most fonts. */
    box-sizing: content-box !important;
  }

  /* Use 'cap' if supported */
  @supports (font-size: 1cap) {
    :host {
      --_nys-icon-size: 1cap;
    }
  }

  /* SVG size and color is initially determined by the parent's font-size and text-color */
  .nys-icon--svg {
    width: var(--_nys-icon-size, 1em);
    height: var(--_nys-icon-size, 1em);
    display: block;
    white-space: nowrap;
  }

  /* Relative Sizes */
  .nys-icon--2xs {
    width: calc(var(--_nys-icon-size) * 0.75);
    height: calc(var(--_nys-icon-size) * 0.75);
  }
  .nys-icon--xs {
    width: calc(var(--_nys-icon-size) * 0.875);
    height: calc(var(--_nys-icon-size) * 0.875);
  }
  .nys-icon--sm {
    width: var(--_nys-icon-size);
    height: var(--_nys-icon-size);
  }
  .nys-icon--md {
    width: calc(var(--_nys-icon-size) * 1.125);
    height: calc(var(--_nys-icon-size) * 1.125);
  }
  .nys-icon--lg {
    width: calc(var(--_nys-icon-size) * 1.25);
    height: calc(var(--_nys-icon-size) * 1.25);
  }
  .nys-icon--xl {
    width: calc(var(--_nys-icon-size) * 1.5);
    height: calc(var(--_nys-icon-size) * 1.5);
  }
  .nys-icon--2xl {
    width: calc(var(--_nys-icon-size) * 1.875);
    height: calc(var(--_nys-icon-size) * 1.875);
  }
  .nys-icon--3xl {
    width: calc(var(--_nys-icon-size) * 2.25);
    height: calc(var(--_nys-icon-size) * 2.25);
  }
  .nys-icon--4xl {
    width: calc(var(--_nys-icon-size) * 3);
    height: calc(var(--_nys-icon-size) * 3);
  }

  /* Literal Sizing */
  .nys-icon--12 {
    width: 0.75rem;
    height: 0.75rem;
  }
  .nys-icon--16 {
    width: 1rem;
    height: 1rem;
  }
  .nys-icon--24 {
    width: 1.5rem;
    height: 1.5rem;
  }
  .nys-icon--32 {
    width: 2rem;
    height: 2rem;
  }
  .nys-icon--48 {
    width: 3rem;
    height: 3rem;
  }
  .nys-icon--64 {
    width: 4rem;
    height: 4rem;
  }

  /* Flipping Icons */
  .nys-icon--flip-horizontal {
    transform: scaleX(-1);
  }
  .nys-icon--flip-vertical {
    transform: scaleY(-1);
  }
  .nys-icon--flip-both {
    transform: scale(-1, -1);
  }
`;
var f0 = Object.defineProperty, w0 = Object.getOwnPropertyDescriptor, W1 = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? w0(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && f0(t, e, r), r;
}, n5;
const L1 = (n5 = class extends p {
  constructor() {
    super(...arguments), this.name = "", this.label = "", this.rotate = "0", this.flip = "", this.color = "", this._size = "sm";
  }
  get size() {
    return this._size;
  }
  set size(s) {
    this._size = n5.VALID_TYPES.includes(
      s
    ) ? s : "sm";
  }
  getIcon() {
    const s = y0[this.name], t = !!this.label;
    if (!s) return null;
    const e = new DOMParser().parseFromString(s, "image/svg+xml").documentElement;
    return e instanceof SVGElement ? (e.setAttribute("role", "img"), e.setAttribute("aria-label", t ? this.label : ""), e.setAttribute("aria-hidden", t ? "false" : "true"), e.style.rotate = `${this.rotate}deg`, e.style.color = this.color || "currentcolor", e.classList.add(`nys-icon--${this.size}`), e.classList.add("nys-icon--svg"), this.flip && e.classList.add(`nys-icon--flip-${this.flip}`), e) : null;
  }
  render() {
    const s = this.getIcon();
    return s ? c`${s}` : null;
  }
}, n5.styles = g0, n5.VALID_TYPES = [
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "12",
  "16",
  "24",
  "32",
  "48",
  "64"
], n5);
W1([
  G1({ type: String, reflect: !0 })
], L1.prototype, "name", 2);
W1([
  G1({ type: String })
], L1.prototype, "label", 2);
W1([
  G1({ type: String })
], L1.prototype, "rotate", 2);
W1([
  G1({ type: String })
], L1.prototype, "flip", 2);
W1([
  G1({ type: String })
], L1.prototype, "color", 2);
W1([
  G1({ reflect: !0 })
], L1.prototype, "size", 1);
let _0 = L1;
customElements.get("nys-icon") || customElements.define("nys-icon", _0);
/*!
   * 
   * ▒█▄░▒█ ▒█░░▒█ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 
   * ▒█▒█▒█ ▒█▄▄▄█ ░▀▀▀▄▄ ▒█░▒█ ░▀▀▀▄▄ 
   * ▒█░░▀█ ░░▒█░░ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█
   * 
   * Button Component v1.1.1
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const T5 = globalThis, P2 = T5.ShadowRoot && (T5.ShadyCSS === void 0 || T5.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, H3 = Symbol(), f7 = /* @__PURE__ */ new WeakMap();
let b0 = class {
  constructor(t, e, o) {
    if (this._$cssResult$ = !0, o !== H3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (P2 && t === void 0) {
      const o = e !== void 0 && e.length === 1;
      o && (t = f7.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), o && f7.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const m0 = (s) => new b0(typeof s == "string" ? s : s + "", void 0, H3), x0 = (s, t) => {
  if (P2) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const o = document.createElement("style"), r = T5.litNonce;
    r !== void 0 && o.setAttribute("nonce", r), o.textContent = e.cssText, s.appendChild(o);
  }
}, w7 = P2 ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const o of t.cssRules) e += o.cssText;
  return m0(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: L0, defineProperty: $0, getOwnPropertyDescriptor: M0, getOwnPropertyNames: Z0, getOwnPropertySymbols: V0, getPrototypeOf: H0 } = Object, A1 = globalThis, _7 = A1.trustedTypes, S0 = _7 ? _7.emptyScript : "", b7 = A1.reactiveElementPolyfillSupport, x5 = (s, t) => s, Q5 = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? S0 : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, z2 = (s, t) => !L0(s, t), m7 = { attribute: !0, type: String, converter: Q5, reflect: !1, hasChanged: z2 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), A1.litPropertyMetadata ?? (A1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let i5 = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = m7) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const o = Symbol(), r = this.getPropertyDescriptor(t, o, e);
      r !== void 0 && $0(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, o) {
    const { get: r, set: n } = M0(this.prototype, t) ?? { get() {
      return this[e];
    }, set(i) {
      this[e] = i;
    } };
    return { get() {
      return r == null ? void 0 : r.call(this);
    }, set(i) {
      const l = r == null ? void 0 : r.call(this);
      n.call(this, i), this.requestUpdate(t, l, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? m7;
  }
  static _$Ei() {
    if (this.hasOwnProperty(x5("elementProperties"))) return;
    const t = H0(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(x5("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(x5("properties"))) {
      const e = this.properties, o = [...Z0(e), ...V0(e)];
      for (const r of o) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [o, r] of e) this.elementProperties.set(o, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, o] of this.elementProperties) {
      const r = this._$Eu(e, o);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const r of o) e.unshift(w7(r));
    } else t !== void 0 && e.push(w7(t));
    return e;
  }
  static _$Eu(t, e) {
    const o = e.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const o of e.keys()) this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return x0(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostConnected) == null ? void 0 : o.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostDisconnected) == null ? void 0 : o.call(e);
    });
  }
  attributeChangedCallback(t, e, o) {
    this._$AK(t, o);
  }
  _$EC(t, e) {
    var o;
    const r = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, r);
    if (n !== void 0 && r.reflect === !0) {
      const i = (((o = r.converter) == null ? void 0 : o.toAttribute) !== void 0 ? r.converter : Q5).toAttribute(e, r.type);
      this._$Em = t, i == null ? this.removeAttribute(n) : this.setAttribute(n, i), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const r = this.constructor, n = r._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const i = r.getPropertyOptions(n), l = typeof i.converter == "function" ? { fromAttribute: i.converter } : ((o = i.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? i.converter : Q5;
      this._$Em = n, this[n] = l.fromAttribute(e, i.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, o) {
    if (t !== void 0) {
      if (o ?? (o = this.constructor.getPropertyOptions(t)), !(o.hasChanged ?? z2)(this[t], e)) return;
      this.P(t, e, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, o) {
    this._$AL.has(t) || this._$AL.set(t, e), o.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, i] of this._$Ep) this[n] = i;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [n, i] of r) i.wrapped !== !0 || this._$AL.has(n) || this[n] === void 0 || this.P(n, this[n], i);
    }
    let e = !1;
    const o = this._$AL;
    try {
      e = this.shouldUpdate(o), e ? (this.willUpdate(o), (t = this._$EO) == null || t.forEach((r) => {
        var n;
        return (n = r.hostUpdate) == null ? void 0 : n.call(r);
      }), this.update(o)) : this._$EU();
    } catch (r) {
      throw e = !1, this._$EU(), r;
    }
    e && this._$AE(o);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((o) => {
      var r;
      return (r = o.hostUpdated) == null ? void 0 : r.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
i5.elementStyles = [], i5.shadowRootOptions = { mode: "open" }, i5[x5("elementProperties")] = /* @__PURE__ */ new Map(), i5[x5("finalized")] = /* @__PURE__ */ new Map(), b7 == null || b7({ ReactiveElement: i5 }), (A1.reactiveElementVersions ?? (A1.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const E0 = { attribute: !0, type: String, converter: Q5, reflect: !1, hasChanged: z2 }, k0 = (s = E0, t, e) => {
  const { kind: o, metadata: r } = e;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), n.set(e.name, s), o === "accessor") {
    const { name: i } = e;
    return { set(l) {
      const C = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(i, C, s);
    }, init(l) {
      return l !== void 0 && this.P(i, void 0, s), l;
    } };
  }
  if (o === "setter") {
    const { name: i } = e;
    return function(l) {
      const C = this[i];
      t.call(this, l), this.requestUpdate(i, C, s);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function E(s) {
  return (t, e) => typeof e == "object" ? k0(s, t, e) : ((o, r, n) => {
    const i = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, i ? { ...o, wrapped: !0 } : o), i ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(s, t, e);
}
const A0 = v`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Button Styles */
    --_nys-button-width: fit-content;
    --_nys-button-height: var(--nys-size-600, 48px);
    --_nys-button-radius: var(--nys-border-radius-xl, 12px);
    --_nys-button-padding-y: var(--nys-space-150, 12px);
    --_nys-button-padding-x: var(--nys-space-250, 20px);
    --_nys-button-gap: var(--nys-space-100, 8px);
    --_nys-button-width-border: var(--nys-border-width-md, 2px);
    --_nys-button-width-focus: var(--nys-border-width-md, 2px);
    --_nys-button-offset-focus: var(--nys-space-2px, 2px);
    --_nys-button-color-focus: var(--nys-color-focus, #004dd1);

    /* Global Button Colors */
    --_nys-button-color-bg: var(--nys-color-theme, #154973);
    --_nys-button-color-text: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-theme, #154973);

    --_nys-button-color-bg-hover: var(--nys-color-theme-strong, #0e324f);
    --_nys-button-color-text-hover: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border-hover: var(--nys-color-theme-strong, #0e324f);

    --_nys-button-color-bg-active: var(--nys-color-theme-stronger, #081b2b);
    --_nys-button-color-text-active: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border-active: var(--nys-color-theme-stronger, #081b2b);

    --_nys-button-color-bg-disabled: var(--nys-color-neutral-10, #f6f6f6);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-color-border-disabled: var(--nys-color-neutral-10, #f6f6f6);

    /* Typography */
    --_nys-button-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-button-font-weight: var(--nys-font-weight-semibold, 600);
    --_nys-button-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-button-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
  }

  /* Sizes */
  :host([size="sm"]) {
    --_nys-button-height: var(--nys-size-500, 40px);
    --_nys-button-padding-y: var(--nys-space-100, 8px);
    --_nys-button-padding-x: var(--nys-space-200, 16px);
  }
  :host([size="md"]) {
    --_nys-button-height: var(--nys-size-600, 48px);
    --_nys-button-padding-y: var(--nys-space-150, 12px);
    --_nys-button-padding-x: var(--nys-space-250, 20px);
  }
  :host([size="lg"]) {
    --_nys-button-height: var(--nys-size-700, 56px);
    --_nys-button-padding-y: var(--nys-space-200, 16px);
    --_nys-button-padding-x: var(--nys-space-300, 24px);
  }
  :host([fullWidth]) {
    --_nys-button-width: 100%;
  }

  /* VARIANTS */

  /* Filled */
  :host([variant="filled"]) {
    /* Filled - Default */
    --_nys-button-color-bg: var(--nys-color-theme, #154973);
    --_nys-button-color-text: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Filled - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-theme-strong, #0e324f);
    --_nys-button-color-text-hover: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Filled - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-theme-stronger, #081b2b);
    --_nys-button-color-text-active: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Filled - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-neutral-10, #f6f6f6);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);
  }

  /* Outline */
  :host([variant="outline"]) {
    /* Outline - Default */
    --_nys-button-color-bg: var(--nys-color-surface, #ffffff);
    --_nys-button-color-text: var(--nys-color-theme, #154973);
    --_nys-button-color-border: var(--nys-color-theme, #154973);

    /* Outline - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-theme-weaker, #eff6fb);
    --_nys-button-color-text-hover: var(--nys-color-theme, #154973);
    --_nys-button-color-border-hover: var(--nys-color-theme, #154973);

    /* Outline - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-theme-weak, #cddde9);
    --_nys-button-color-text-active: var(--nys-color-theme, #154973);
    --_nys-button-color-border-active: var(--nys-color-theme, #154973);

    /* Outline - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-surface, #ffffff);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-color-border-disabled: var(--nys-color-neutral-100, #d0d0ce);
  }

  /* Text */
  :host([variant="text"]) {
    --_nys-button-height: fit-content;
    --_nys-button-radius: var(--nys-border-radius-md, 4px);
    --_nys-button-padding-y: var(--nys-space-2px, 2px);
    --_nys-button-padding-x: var(--nys-space-50, 4px);
    --_nys-button-width-border: 0px;
    --_nys-button-text-decoration: underline;

    /* Text - Default */
    --_nys-button-color-bg: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text: var(--nys-color-link, #004dd1);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Text - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-hover: var(--nys-color-link-strong, #003ba1);
    --_nys-button-color-border-hover: var(--nys-color-transparent, #ffffff00);

    /* Text - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-active: var(--nys-color-link-strongest, #002971);
    --_nys-button-color-border-active: var(--nys-color-transparent, #ffffff00);

    /* Text - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* Ghost */
  :host([variant="ghost"]) {
    /* Ghost - Default */
    --_nys-button-color-bg: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Ghost - Hover */
    --_nys-button-color-bg-hover: var(
      --nys-color-black-transparent-100,
      #0000001a
    );
    --_nys-button-color-text-hover: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border-hover: var(--nys-color-transparent, #ffffff00);

    /* Ghost - Active */
    --_nys-button-color-bg-active: var(
      --nys-color-black-transparent-200,
      #00000033
    );
    --_nys-button-color-text-active: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border-active: var(--nys-color-transparent, #ffffff00);

    /* Ghost - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* INVERTED VARIANTS */

  /* Filled Inverted */
  :host([variant="filled"][inverted]) {
    /* Filled Inverted - Default */
    --_nys-button-color-bg: var(--nys-color-surface, #ffffff);
    --_nys-button-color-text: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );

    /* Filled Inverted - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-neutral-100, #d0d0ce);
    --_nys-button-color-text-hover: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );

    /* Filled Inverted - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-neutral-300, #a7a9ab);
    --_nys-button-color-text-active: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );

    /* Filled Inverted - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #62666a);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* Outline Inverted */
  :host([variant="outline"][inverted]) {
    /* Outline Inverted - Default */
    --_nys-button-color-bg: var(--nys-color-surface-reverse, #1b1b1b);
    --_nys-button-color-text: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-ink-reverse, #ffffff);

    /* Outline Inverted - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-surface-reverse, #1b1b1b);
    --_nys-button-color-text-hover: var(--nys-color-text-reverse-weak, #d0d0ce);
    --_nys-button-color-border-hover: var(--nys-color-neutral-100, #d0d0ce);

    /* Outline Inverted - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-surface-reverse, #1b1b1b);
    --_nys-button-color-text-active: var(
      --nys-color-text-reverse-weaker,
      #bec0c1
    );
    --_nys-button-color-border-active: var(--nys-color-neutral-300, #a7a9ab);

    /* Outline Inverted - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-surface-reverse, #1b1b1b);
    --_nys-button-color-text-disabled: var(
      --nys-color-text-reverse-disabled,
      #62666a
    );
    --_nys-button-color-border-disabled: var(--nys-color-neutral-600, #62666a);
  }

  /* Text Inverted */
  :host([variant="text"][inverted]) {
    --_nys-button-height: fit-content;
    --_nys-button-radius: var(--nys-border-radius-md, 4px);
    --_nys-button-padding-y: var(--nys-space-2px, 2px);
    --_nys-button-padding-x: var(--nys-space-50, 4px);
    --_nys-button-width-border: 0px;
    --_nys-button-text-decoration: underline;

    /* Text Inverted - Default */
    --_nys-button-color-bg: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text: var(--nys-color-link-reverse, #a7a9ab);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Text Inverted - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-hover: var(
      --nys-color-link-reverse-strong,
      #ededed
    );
    --_nys-button-color-border-hover: var(--nys-color-transparent, #ffffff00);

    /* Text Inverted - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-active: var(
      --nys-color-reverse-strongest,
      #ffffff
    );
    --_nys-button-color-border-active: var(--nys-color-transparent, #ffffff00);

    /* Text Inverted - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-disabled: var(
      --nys-color-text-reverse-disabled,
      #62666a
    );
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* Ghost Inverted */
  :host([variant="ghost"][inverted]) {
    /* Ghost Inverted - Default */
    --_nys-button-color-bg: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Ghost Inverted - Hover */
    --_nys-button-color-bg-hover: var(
      --nys-color-white-transparent-100,
      #ffffff1a
    );
    --_nys-button-color-text-hover: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border-hover: var(--nys-color-transparent, #ffffff00);

    /* Ghost Inverted - Pressed/Active */
    --_nys-button-color-bg-active: var(
      --nys-color-white-transparent-200,
      #ffffff33
    );
    --_nys-button-color-text-active: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border-active: var(--nys-color-transparent, #ffffff00);

    /* Ghost Inverted - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #62666a);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  .nys-button {
    width: var(--_nys-button-width);
    height: var(--_nys-button-height);
    border-radius: var(--_nys-button-radius);
    padding: var(--_nys-button-padding-y) var(--_nys-button-padding-x);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--_nys-button-gap);
    font-family: var(--_nys-button-font-family);
    font-size: var(--_nys-button-font-size);
    font-weight: var(--_nys-button-font-weight);
    line-height: var(--_nys-button-line-height);
    text-decoration: var(--_nys-button-text-decoration);
    box-sizing: border-box;
    background-color: var(--_nys-button-color-bg);
    color: var(--_nys-button-color-text);
    border: solid var(--_nys-button-width-border)
      var(--_nys-button-color-border);
    cursor: pointer;
  }

  .nys-button:hover {
    background-color: var(--_nys-button-color-bg-hover);
    color: var(--_nys-button-color-text-hover);
    border-color: var(--_nys-button-color-border-hover);
  }

  .nys-button:active {
    background-color: var(--_nys-button-color-bg-active);
    color: var(--_nys-button-color-text-active);
    border-color: var(--_nys-button-color-border-active);
  }

  .nys-button:disabled,
  a[disabled] {
    background-color: var(--_nys-button-color-bg-disabled);
    color: var(--_nys-button-color-text-disabled);
    border-color: var(--_nys-button-color-border-disabled);
    cursor: not-allowed;
  }

  .nys-button__linkwrapper:has([disabled]) {
    cursor: not-allowed;
    width: fit-content;
  }

  /* Remove click functionality from disabled link button */
  a[disabled] {
    pointer-events: none;
  }

  a[disabled]:hover {
    background-color: var(--_nys-button-color-bg-disabled);
    color: var(--_nys-button-color-text-disabled);
    border-color: var(--_nys-button-color-border-disabled);
  }

  .nys-button * {
    cursor: pointer;
  }

  .nys-button:disabled * {
    cursor: not-allowed;
  }

  .nys-button:focus-visible {
    outline-offset: var(--_nys-button-offset-focus);
    outline: solid var(--_nys-button-width-focus) var(--_nys-button-color-focus);
  }

  .nys-button__text {
    display: flex;
    align-items: center;
    user-select: none;
  }
`;
/*!
   * ▒█▄░▒█ ▒█░░▒█ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 
   * ▒█▒█▒█ ▒█▄▄▄█ ░▀▀▀▄▄ ▒█░▒█ ░▀▀▀▄▄ 
   * ▒█░░▀█ ░░▒█░░ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█
   * 
   * Icon Component v1.1.1
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const q5 = globalThis, B2 = q5.ShadowRoot && (q5.ShadyCSS === void 0 || q5.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, S3 = Symbol(), x7 = /* @__PURE__ */ new WeakMap();
let P0 = class {
  constructor(t, e, o) {
    if (this._$cssResult$ = !0, o !== S3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (B2 && t === void 0) {
      const o = e !== void 0 && e.length === 1;
      o && (t = x7.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), o && x7.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const z0 = (s) => new P0(typeof s == "string" ? s : s + "", void 0, S3), B0 = (s, t) => {
  if (B2) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const o = document.createElement("style"), r = q5.litNonce;
    r !== void 0 && o.setAttribute("nonce", r), o.textContent = e.cssText, s.appendChild(o);
  }
}, L7 = B2 ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const o of t.cssRules) e += o.cssText;
  return z0(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: U0, defineProperty: O0, getOwnPropertyDescriptor: I0, getOwnPropertyNames: R0, getOwnPropertySymbols: D0, getPrototypeOf: T0 } = Object, P1 = globalThis, $7 = P1.trustedTypes, q0 = $7 ? $7.emptyScript : "", M7 = P1.reactiveElementPolyfillSupport, L5 = (s, t) => s, t2 = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? q0 : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, U2 = (s, t) => !U0(s, t), Z7 = { attribute: !0, type: String, converter: t2, reflect: !1, hasChanged: U2 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), P1.litPropertyMetadata ?? (P1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let l5 = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Z7) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const o = Symbol(), r = this.getPropertyDescriptor(t, o, e);
      r !== void 0 && O0(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, o) {
    const { get: r, set: n } = I0(this.prototype, t) ?? { get() {
      return this[e];
    }, set(i) {
      this[e] = i;
    } };
    return { get() {
      return r == null ? void 0 : r.call(this);
    }, set(i) {
      const l = r == null ? void 0 : r.call(this);
      n.call(this, i), this.requestUpdate(t, l, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Z7;
  }
  static _$Ei() {
    if (this.hasOwnProperty(L5("elementProperties"))) return;
    const t = T0(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(L5("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(L5("properties"))) {
      const e = this.properties, o = [...R0(e), ...D0(e)];
      for (const r of o) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [o, r] of e) this.elementProperties.set(o, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, o] of this.elementProperties) {
      const r = this._$Eu(e, o);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const r of o) e.unshift(L7(r));
    } else t !== void 0 && e.push(L7(t));
    return e;
  }
  static _$Eu(t, e) {
    const o = e.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const o of e.keys()) this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return B0(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostConnected) == null ? void 0 : o.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostDisconnected) == null ? void 0 : o.call(e);
    });
  }
  attributeChangedCallback(t, e, o) {
    this._$AK(t, o);
  }
  _$EC(t, e) {
    var o;
    const r = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, r);
    if (n !== void 0 && r.reflect === !0) {
      const i = (((o = r.converter) == null ? void 0 : o.toAttribute) !== void 0 ? r.converter : t2).toAttribute(e, r.type);
      this._$Em = t, i == null ? this.removeAttribute(n) : this.setAttribute(n, i), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const r = this.constructor, n = r._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const i = r.getPropertyOptions(n), l = typeof i.converter == "function" ? { fromAttribute: i.converter } : ((o = i.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? i.converter : t2;
      this._$Em = n, this[n] = l.fromAttribute(e, i.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, o) {
    if (t !== void 0) {
      if (o ?? (o = this.constructor.getPropertyOptions(t)), !(o.hasChanged ?? U2)(this[t], e)) return;
      this.P(t, e, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, o) {
    this._$AL.has(t) || this._$AL.set(t, e), o.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, i] of this._$Ep) this[n] = i;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [n, i] of r) i.wrapped !== !0 || this._$AL.has(n) || this[n] === void 0 || this.P(n, this[n], i);
    }
    let e = !1;
    const o = this._$AL;
    try {
      e = this.shouldUpdate(o), e ? (this.willUpdate(o), (t = this._$EO) == null || t.forEach((r) => {
        var n;
        return (n = r.hostUpdate) == null ? void 0 : n.call(r);
      }), this.update(o)) : this._$EU();
    } catch (r) {
      throw e = !1, this._$EU(), r;
    }
    e && this._$AE(o);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((o) => {
      var r;
      return (r = o.hostUpdated) == null ? void 0 : r.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
l5.elementStyles = [], l5.shadowRootOptions = { mode: "open" }, l5[L5("elementProperties")] = /* @__PURE__ */ new Map(), l5[L5("finalized")] = /* @__PURE__ */ new Map(), M7 == null || M7({ ReactiveElement: l5 }), (P1.reactiveElementVersions ?? (P1.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N0 = { attribute: !0, type: String, converter: t2, reflect: !1, hasChanged: U2 }, j0 = (s = N0, t, e) => {
  const { kind: o, metadata: r } = e;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), n.set(e.name, s), o === "accessor") {
    const { name: i } = e;
    return { set(l) {
      const C = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(i, C, s);
    }, init(l) {
      return l !== void 0 && this.P(i, void 0, s), l;
    } };
  }
  if (o === "setter") {
    const { name: i } = e;
    return function(l) {
      const C = this[i];
      t.call(this, l), this.requestUpdate(i, C, s);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function Y1(s) {
  return (t, e) => typeof e == "object" ? j0(s, t, e) : ((o, r, n) => {
    const i = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, i ? { ...o, wrapped: !0 } : o), i ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(s, t, e);
}
const F0 = {
  // --------- UX Team Main Library (below) --------- //
  // *** CORE *** //
  account_circle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M3.85 15.1C4.7 14.45 5.65 13.9375 6.7 13.5625C7.75 13.1875 8.85 13 10 13C11.15 13 12.25 13.1875 13.3 13.5625C14.35 13.9375 15.3 14.45 16.15 15.1C16.7333 14.4167 17.1875 13.6417 17.5125 12.775C17.8375 11.9083 18 10.9833 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.9833 2.1625 11.9083 2.4875 12.775C2.8125 13.6417 3.26667 14.4167 3.85 15.1ZM10 11C9.01667 11 8.1875 10.6625 7.5125 9.9875C6.8375 9.3125 6.5 8.48333 6.5 7.5C6.5 6.51667 6.8375 5.6875 7.5125 5.0125C8.1875 4.3375 9.01667 4 10 4C10.9833 4 11.8125 4.3375 12.4875 5.0125C13.1625 5.6875 13.5 6.51667 13.5 7.5C13.5 8.48333 13.1625 9.3125 12.4875 9.9875C11.8125 10.6625 10.9833 11 10 11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  calendar_month: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V1C3 0.716667 3.09583 0.479167 3.2875 0.2875C3.47917 0.0958333 3.71667 0 4 0C4.28333 0 4.52083 0.0958333 4.7125 0.2875C4.90417 0.479167 5 0.716667 5 1V2H13V1C13 0.716667 13.0958 0.479167 13.2875 0.2875C13.4792 0.0958333 13.7167 0 14 0C14.2833 0 14.5208 0.0958333 14.7125 0.2875C14.9042 0.479167 15 0.716667 15 1V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6ZM9 12C8.71667 12 8.47917 11.9042 8.2875 11.7125C8.09583 11.5208 8 11.2833 8 11C8 10.7167 8.09583 10.4792 8.2875 10.2875C8.47917 10.0958 8.71667 10 9 10C9.28333 10 9.52083 10.0958 9.7125 10.2875C9.90417 10.4792 10 10.7167 10 11C10 11.2833 9.90417 11.5208 9.7125 11.7125C9.52083 11.9042 9.28333 12 9 12ZM5 12C4.71667 12 4.47917 11.9042 4.2875 11.7125C4.09583 11.5208 4 11.2833 4 11C4 10.7167 4.09583 10.4792 4.2875 10.2875C4.47917 10.0958 4.71667 10 5 10C5.28333 10 5.52083 10.0958 5.7125 10.2875C5.90417 10.4792 6 10.7167 6 11C6 11.2833 5.90417 11.5208 5.7125 11.7125C5.52083 11.9042 5.28333 12 5 12ZM13 12C12.7167 12 12.4792 11.9042 12.2875 11.7125C12.0958 11.5208 12 11.2833 12 11C12 10.7167 12.0958 10.4792 12.2875 10.2875C12.4792 10.0958 12.7167 10 13 10C13.2833 10 13.5208 10.0958 13.7125 10.2875C13.9042 10.4792 14 10.7167 14 11C14 11.2833 13.9042 11.5208 13.7125 11.7125C13.5208 11.9042 13.2833 12 13 12ZM9 16C8.71667 16 8.47917 15.9042 8.2875 15.7125C8.09583 15.5208 8 15.2833 8 15C8 14.7167 8.09583 14.4792 8.2875 14.2875C8.47917 14.0958 8.71667 14 9 14C9.28333 14 9.52083 14.0958 9.7125 14.2875C9.90417 14.4792 10 14.7167 10 15C10 15.2833 9.90417 15.5208 9.7125 15.7125C9.52083 15.9042 9.28333 16 9 16ZM5 16C4.71667 16 4.47917 15.9042 4.2875 15.7125C4.09583 15.5208 4 15.2833 4 15C4 14.7167 4.09583 14.4792 4.2875 14.2875C4.47917 14.0958 4.71667 14 5 14C5.28333 14 5.52083 14.0958 5.7125 14.2875C5.90417 14.4792 6 14.7167 6 15C6 15.2833 5.90417 15.5208 5.7125 15.7125C5.52083 15.9042 5.28333 16 5 16ZM13 16C12.7167 16 12.4792 15.9042 12.2875 15.7125C12.0958 15.5208 12 15.2833 12 15C12 14.7167 12.0958 14.4792 12.2875 14.2875C12.4792 14.0958 12.7167 14 13 14C13.2833 14 13.5208 14.0958 13.7125 14.2875C13.9042 14.4792 14 14.7167 14 15C14 15.2833 13.9042 15.5208 13.7125 15.7125C13.5208 15.9042 13.2833 16 13 16Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  cancel: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 11.4L12.9 14.3C13.0833 14.4833 13.3167 14.575 13.6 14.575C13.8833 14.575 14.1167 14.4833 14.3 14.3C14.4833 14.1167 14.575 13.8833 14.575 13.6C14.575 13.3167 14.4833 13.0833 14.3 12.9L11.4 10L14.3 7.1C14.4833 6.91667 14.575 6.68333 14.575 6.4C14.575 6.11667 14.4833 5.88333 14.3 5.7C14.1167 5.51667 13.8833 5.425 13.6 5.425C13.3167 5.425 13.0833 5.51667 12.9 5.7L10 8.6L7.1 5.7C6.91667 5.51667 6.68333 5.425 6.4 5.425C6.11667 5.425 5.88333 5.51667 5.7 5.7C5.51667 5.88333 5.425 6.11667 5.425 6.4C5.425 6.68333 5.51667 6.91667 5.7 7.1L8.6 10L5.7 12.9C5.51667 13.0833 5.425 13.3167 5.425 13.6C5.425 13.8833 5.51667 14.1167 5.7 14.3C5.88333 14.4833 6.11667 14.575 6.4 14.575C6.68333 14.575 6.91667 14.4833 7.1 14.3L10 11.4ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
  <path d="M5.5565 9.1625L14.0315 0.687501C14.2315 0.487501 14.4648 0.387501 14.7315 0.387501C14.9982 0.387501 15.2315 0.487501 15.4315 0.687501C15.6315 0.887501 15.7315 1.125 15.7315 1.4C15.7315 1.675 15.6315 1.9125 15.4315 2.1125L6.2565 11.3125C6.0565 11.5125 5.82317 11.6125 5.5565 11.6125C5.28983 11.6125 5.0565 11.5125 4.8565 11.3125L0.556499 7.0125C0.356499 6.8125 0.260666 6.575 0.268999 6.3C0.277333 6.025 0.381499 5.7875 0.581499 5.5875C0.781499 5.3875 1.019 5.2875 1.294 5.2875C1.569 5.2875 1.8065 5.3875 2.0065 5.5875L5.5565 9.1625Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M7 8.4L2.1 13.3C1.91667 13.4833 1.68334 13.575 1.4 13.575C1.11667 13.575 0.883336 13.4833 0.700003 13.3C0.51667 13.1167 0.425003 12.8833 0.425003 12.6C0.425003 12.3167 0.51667 12.0833 0.700003 11.9L5.6 7L0.700003 2.1C0.51667 1.91667 0.425003 1.68334 0.425003 1.4C0.425003 1.11667 0.51667 0.883336 0.700003 0.700003C0.883336 0.51667 1.11667 0.425003 1.4 0.425003C1.68334 0.425003 1.91667 0.51667 2.1 0.700003L7 5.6L11.9 0.700003C12.0833 0.51667 12.3167 0.425003 12.6 0.425003C12.8833 0.425003 13.1167 0.51667 13.3 0.700003C13.4833 0.883336 13.575 1.11667 13.575 1.4C13.575 1.68334 13.4833 1.91667 13.3 2.1L8.4 7L13.3 11.9C13.4833 12.0833 13.575 12.3167 13.575 12.6C13.575 12.8833 13.4833 13.1167 13.3 13.3C13.1167 13.4833 12.8833 13.575 12.6 13.575C12.3167 13.575 12.0833 13.4833 11.9 13.3L7 8.4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8 11.575C7.86667 11.575 7.74167 11.5542 7.625 11.5125C7.50833 11.4708 7.4 11.4 7.3 11.3L3.7 7.7C3.5 7.5 3.40417 7.26667 3.4125 7C3.42083 6.73333 3.51667 6.5 3.7 6.3C3.9 6.1 4.1375 5.99583 4.4125 5.9875C4.6875 5.97917 4.925 6.075 5.125 6.275L7 8.15V1C7 0.716667 7.09583 0.479167 7.2875 0.2875C7.47917 0.0958333 7.71667 0 8 0C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1V8.15L10.875 6.275C11.075 6.075 11.3125 5.97917 11.5875 5.9875C11.8625 5.99583 12.1 6.1 12.3 6.3C12.4833 6.5 12.5792 6.73333 12.5875 7C12.5958 7.26667 12.5 7.5 12.3 7.7L8.7 11.3C8.6 11.4 8.49167 11.4708 8.375 11.5125C8.25833 11.5542 8.13333 11.575 8 11.575ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11C1.28333 11 1.52083 11.0958 1.7125 11.2875C1.90417 11.4792 2 11.7167 2 12V14H14V12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0958 14.7167 11 15 11C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  download_done: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M5.544 8.95L13.994 0.499997C14.194 0.299997 14.4315 0.199997 14.7065 0.199997C14.9815 0.199997 15.219 0.299997 15.419 0.499997C15.619 0.699997 15.719 0.937497 15.719 1.2125C15.719 1.4875 15.619 1.725 15.419 1.925L6.244 11.1C6.044 11.3 5.81067 11.4 5.544 11.4C5.27733 11.4 5.044 11.3 4.844 11.1L0.568998 6.825C0.368998 6.625 0.273165 6.3875 0.281498 6.1125C0.289832 5.8375 0.393998 5.6 0.593998 5.4C0.793998 5.2 1.0315 5.1 1.3065 5.1C1.5815 5.1 1.819 5.2 2.019 5.4L5.544 8.95ZM1.994 15.8C1.71066 15.8 1.47317 15.7042 1.2815 15.5125C1.08983 15.3208 0.993998 15.0833 0.993998 14.8C0.993998 14.5167 1.08983 14.2792 1.2815 14.0875C1.47317 13.8958 1.71066 13.8 1.994 13.8H13.994C14.2773 13.8 14.5148 13.8958 14.7065 14.0875C14.8982 14.2792 14.994 14.5167 14.994 14.8C14.994 15.0833 14.8982 15.3208 14.7065 15.5125C14.5148 15.7042 14.2773 15.8 13.994 15.8H1.994Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  drive_folder_upload: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
  <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H7.175C7.44167 0 7.69583 0.05 7.9375 0.15C8.17917 0.25 8.39167 0.391667 8.575 0.575L10 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM2 14H18V4H9.175L7.175 2H2V14ZM10 13C10.2833 13 10.5208 12.9042 10.7125 12.7125C10.9042 12.5208 11 12.2833 11 12V8.8L11.9 9.7C12.0833 9.88333 12.3167 9.975 12.6 9.975C12.8833 9.975 13.1167 9.88333 13.3 9.7C13.4833 9.51667 13.575 9.28333 13.575 9C13.575 8.71667 13.4833 8.48333 13.3 8.3L10.7 5.7C10.5 5.5 10.2667 5.4 10 5.4C9.73333 5.4 9.5 5.5 9.3 5.7L6.7 8.3C6.51667 8.48333 6.425 8.71667 6.425 9C6.425 9.28333 6.51667 9.51667 6.7 9.7C6.88333 9.88333 7.11667 9.975 7.4 9.975C7.68333 9.975 7.91667 9.88333 8.1 9.7L9 8.8V12C9 12.2833 9.09583 12.5208 9.2875 12.7125C9.47917 12.9042 9.71667 13 10 13Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  edit_square: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
  <path d="M2 21.0125C1.45 21.0125 0.979167 20.8167 0.5875 20.425C0.195833 20.0333 0 19.5625 0 19.0125V5.0125C0 4.4625 0.195833 3.99167 0.5875 3.6C0.979167 3.20834 1.45 3.0125 2 3.0125H8.525C8.85833 3.0125 9.10833 3.11667 9.275 3.325C9.44167 3.53334 9.525 3.7625 9.525 4.0125C9.525 4.2625 9.4375 4.49167 9.2625 4.7C9.0875 4.90834 8.83333 5.0125 8.5 5.0125H2V19.0125H16V12.4875C16 12.1542 16.1042 11.9042 16.3125 11.7375C16.5208 11.5708 16.75 11.4875 17 11.4875C17.25 11.4875 17.4792 11.5708 17.6875 11.7375C17.8958 11.9042 18 12.1542 18 12.4875V19.0125C18 19.5625 17.8042 20.0333 17.4125 20.425C17.0208 20.8167 16.55 21.0125 16 21.0125H2ZM6 14.0125V11.5875C6 11.3208 6.05 11.0667 6.15 10.825C6.25 10.5833 6.39167 10.3708 6.575 10.1875L15.175 1.5875C15.375 1.3875 15.6 1.2375 15.85 1.1375C16.1 1.0375 16.35 0.987503 16.6 0.987503C16.8667 0.987503 17.1208 1.0375 17.3625 1.1375C17.6042 1.2375 17.825 1.3875 18.025 1.5875L19.425 3.0125C19.6083 3.2125 19.75 3.43334 19.85 3.675C19.95 3.91667 20 4.1625 20 4.4125C20 4.6625 19.9542 4.90834 19.8625 5.15C19.7708 5.39167 19.625 5.6125 19.425 5.8125L10.825 14.4125C10.6417 14.5958 10.4292 14.7417 10.1875 14.85C9.94583 14.9583 9.69167 15.0125 9.425 15.0125H7C6.71667 15.0125 6.47917 14.9167 6.2875 14.725C6.09583 14.5333 6 14.2958 6 14.0125ZM8 13.0125H9.4L15.2 7.2125L14.5 6.5125L13.775 5.8125L8 11.5875V13.0125Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  help: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.95 16C10.3 16 10.5958 15.8792 10.8375 15.6375C11.0792 15.3958 11.2 15.1 11.2 14.75C11.2 14.4 11.0792 14.1042 10.8375 13.8625C10.5958 13.6208 10.3 13.5 9.95 13.5C9.6 13.5 9.30417 13.6208 9.0625 13.8625C8.82083 14.1042 8.7 14.4 8.7 14.75C8.7 15.1 8.82083 15.3958 9.0625 15.6375C9.30417 15.8792 9.6 16 9.95 16ZM9.05 12.15H10.9C10.9 11.6 10.9625 11.1667 11.0875 10.85C11.2125 10.5333 11.5667 10.1 12.15 9.55C12.5833 9.11667 12.925 8.70417 13.175 8.3125C13.425 7.92083 13.55 7.45 13.55 6.9C13.55 5.96667 13.2083 5.25 12.525 4.75C11.8417 4.25 11.0333 4 10.1 4C9.15 4 8.37917 4.25 7.7875 4.75C7.19583 5.25 6.78333 5.85 6.55 6.55L8.2 7.2C8.28333 6.9 8.47083 6.575 8.7625 6.225C9.05417 5.875 9.5 5.7 10.1 5.7C10.6333 5.7 11.0333 5.84583 11.3 6.1375C11.5667 6.42917 11.7 6.75 11.7 7.1C11.7 7.43333 11.6 7.74583 11.4 8.0375C11.2 8.32917 10.95 8.6 10.65 8.85C9.91667 9.5 9.46667 9.99167 9.3 10.325C9.13333 10.6583 9.05 11.2667 9.05 12.15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  language: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 20C8.63333 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3667 0 10C0 8.61667 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.63333 0 10 0C11.3833 0 12.6792 0.2625 13.8875 0.7875C15.0958 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90417 19.2125 6.1125C19.7375 7.32083 20 8.61667 20 10C20 11.3667 19.7375 12.6583 19.2125 13.875C18.6875 15.0917 17.9708 16.1542 17.0625 17.0625C16.1542 17.9708 15.0958 18.6875 13.8875 19.2125C12.6792 19.7375 11.3833 20 10 20ZM10 17.95C10.4333 17.35 10.8083 16.725 11.125 16.075C11.4417 15.425 11.7 14.7333 11.9 14H8.1C8.3 14.7333 8.55833 15.425 8.875 16.075C9.19167 16.725 9.56667 17.35 10 17.95ZM7.4 17.55C7.1 17 6.8375 16.4292 6.6125 15.8375C6.3875 15.2458 6.2 14.6333 6.05 14H3.1C3.58333 14.8333 4.1875 15.5583 4.9125 16.175C5.6375 16.7917 6.46667 17.25 7.4 17.55ZM12.6 17.55C13.5333 17.25 14.3625 16.7917 15.0875 16.175C15.8125 15.5583 16.4167 14.8333 16.9 14H13.95C13.8 14.6333 13.6125 15.2458 13.3875 15.8375C13.1625 16.4292 12.9 17 12.6 17.55ZM2.25 12H5.65C5.6 11.6667 5.5625 11.3375 5.5375 11.0125C5.5125 10.6875 5.5 10.35 5.5 10C5.5 9.65 5.5125 9.3125 5.5375 8.9875C5.5625 8.6625 5.6 8.33333 5.65 8H2.25C2.16667 8.33333 2.10417 8.6625 2.0625 8.9875C2.02083 9.3125 2 9.65 2 10C2 10.35 2.02083 10.6875 2.0625 11.0125C2.10417 11.3375 2.16667 11.6667 2.25 12ZM7.65 12H12.35C12.4 11.6667 12.4375 11.3375 12.4625 11.0125C12.4875 10.6875 12.5 10.35 12.5 10C12.5 9.65 12.4875 9.3125 12.4625 8.9875C12.4375 8.6625 12.4 8.33333 12.35 8H7.65C7.6 8.33333 7.5625 8.6625 7.5375 8.9875C7.5125 9.3125 7.5 9.65 7.5 10C7.5 10.35 7.5125 10.6875 7.5375 11.0125C7.5625 11.3375 7.6 11.6667 7.65 12ZM14.35 12H17.75C17.8333 11.6667 17.8958 11.3375 17.9375 11.0125C17.9792 10.6875 18 10.35 18 10C18 9.65 17.9792 9.3125 17.9375 8.9875C17.8958 8.6625 17.8333 8.33333 17.75 8H14.35C14.4 8.33333 14.4375 8.6625 14.4625 8.9875C14.4875 9.3125 14.5 9.65 14.5 10C14.5 10.35 14.4875 10.6875 14.4625 11.0125C14.4375 11.3375 14.4 11.6667 14.35 12ZM13.95 6H16.9C16.4167 5.16667 15.8125 4.44167 15.0875 3.825C14.3625 3.20833 13.5333 2.75 12.6 2.45C12.9 3 13.1625 3.57083 13.3875 4.1625C13.6125 4.75417 13.8 5.36667 13.95 6ZM8.1 6H11.9C11.7 5.26667 11.4417 4.575 11.125 3.925C10.8083 3.275 10.4333 2.65 10 2.05C9.56667 2.65 9.19167 3.275 8.875 3.925C8.55833 4.575 8.3 5.26667 8.1 6ZM3.1 6H6.05C6.2 5.36667 6.3875 4.75417 6.6125 4.1625C6.8375 3.57083 7.1 3 7.4 2.45C6.46667 2.75 5.6375 3.20833 4.9125 3.825C4.1875 4.44167 3.58333 5.16667 3.1 6Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
  <path d="M1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10H17C17.2833 10 17.5208 10.0958 17.7125 10.2875C17.9042 10.4792 18 10.7167 18 11C18 11.2833 17.9042 11.5208 17.7125 11.7125C17.5208 11.9042 17.2833 12 17 12H1ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H17C17.2833 5 17.5208 5.09583 17.7125 5.2875C17.9042 5.47917 18 5.71667 18 6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7H1ZM1 2C0.716667 2 0.479167 1.90417 0.2875 1.7125C0.0958333 1.52083 0 1.28333 0 1C0 0.716667 0.0958333 0.479167 0.2875 0.2875C0.479167 0.0958333 0.716667 0 1 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1C18 1.28333 17.9042 1.52083 17.7125 1.7125C17.5208 1.90417 17.2833 2 17 2H1Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  more_vert: `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16" fill="none">
  <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14C0 13.45 0.195833 12.9792 0.5875 12.5875C0.979167 12.1958 1.45 12 2 12C2.55 12 3.02083 12.1958 3.4125 12.5875C3.80417 12.9792 4 13.45 4 14C4 14.55 3.80417 15.0208 3.4125 15.4125C3.02083 15.8042 2.55 16 2 16ZM2 10C1.45 10 0.979167 9.80417 0.5875 9.4125C0.195833 9.02083 0 8.55 0 8C0 7.45 0.195833 6.97917 0.5875 6.5875C0.979167 6.19583 1.45 6 2 6C2.55 6 3.02083 6.19583 3.4125 6.5875C3.80417 6.97917 4 7.45 4 8C4 8.55 3.80417 9.02083 3.4125 9.4125C3.02083 9.80417 2.55 10 2 10ZM2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  open_in_new: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H8C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1C9 1.28333 8.90417 1.52083 8.7125 1.7125C8.52083 1.90417 8.28333 2 8 2H2V16H16V10C16 9.71667 16.0958 9.47917 16.2875 9.2875C16.4792 9.09583 16.7167 9 17 9C17.2833 9 17.5208 9.09583 17.7125 9.2875C17.9042 9.47917 18 9.71667 18 10V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM16 3.4L7.4 12C7.21667 12.1833 6.98333 12.275 6.7 12.275C6.41667 12.275 6.18333 12.1833 6 12C5.81667 11.8167 5.725 11.5833 5.725 11.3C5.725 11.0167 5.81667 10.7833 6 10.6L14.6 2H12C11.7167 2 11.4792 1.90417 11.2875 1.7125C11.0958 1.52083 11 1.28333 11 1C11 0.716667 11.0958 0.479167 11.2875 0.2875C11.4792 0.0958333 11.7167 0 12 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1V6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7C16.7167 7 16.4792 6.90417 16.2875 6.7125C16.0958 6.52083 16 6.28333 16 6V3.4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  publish: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M7 7.85L5.125 9.725C4.925 9.925 4.6875 10.0208 4.4125 10.0125C4.1375 10.0042 3.9 9.9 3.7 9.7C3.51667 9.5 3.42083 9.26667 3.4125 9C3.40417 8.73333 3.5 8.5 3.7 8.3L7.3 4.7C7.4 4.6 7.50833 4.52917 7.625 4.4875C7.74167 4.44583 7.86667 4.425 8 4.425C8.13333 4.425 8.25833 4.44583 8.375 4.4875C8.49167 4.52917 8.6 4.6 8.7 4.7L12.3 8.3C12.5 8.5 12.5958 8.73333 12.5875 9C12.5792 9.26667 12.4833 9.5 12.3 9.7C12.1 9.9 11.8625 10.0042 11.5875 10.0125C11.3125 10.0208 11.075 9.925 10.875 9.725L9 7.85V15C9 15.2833 8.90417 15.5208 8.7125 15.7125C8.52083 15.9042 8.28333 16 8 16C7.71667 16 7.47917 15.9042 7.2875 15.7125C7.09583 15.5208 7 15.2833 7 15V7.85ZM0 4V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V4C16 4.28333 15.9042 4.52083 15.7125 4.7125C15.5208 4.90417 15.2833 5 15 5C14.7167 5 14.4792 4.90417 14.2875 4.7125C14.0958 4.52083 14 4.28333 14 4V2H2V4C2 4.28333 1.90417 4.52083 1.7125 4.7125C1.52083 4.90417 1.28333 5 1 5C0.716667 5 0.479167 4.90417 0.2875 4.7125C0.0958333 4.52083 0 4.28333 0 4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M6.71249 13.2125C4.89583 13.2125 3.35833 12.5833 2.09999 11.325C0.841661 10.0667 0.212494 8.52917 0.212494 6.7125C0.212494 4.89583 0.841661 3.35834 2.09999 2.1C3.35833 0.841668 4.89583 0.212502 6.71249 0.212502C8.52916 0.212502 10.0667 0.841668 11.325 2.1C12.5833 3.35834 13.2125 4.89583 13.2125 6.7125C13.2125 7.44584 13.0958 8.1375 12.8625 8.7875C12.6292 9.4375 12.3125 10.0125 11.9125 10.5125L17.5125 16.1125C17.6958 16.2958 17.7875 16.5292 17.7875 16.8125C17.7875 17.0958 17.6958 17.3292 17.5125 17.5125C17.3292 17.6958 17.0958 17.7875 16.8125 17.7875C16.5292 17.7875 16.2958 17.6958 16.1125 17.5125L10.5125 11.9125C10.0125 12.3125 9.43749 12.6292 8.78749 12.8625C8.13749 13.0958 7.44583 13.2125 6.71249 13.2125ZM6.71249 11.2125C7.96249 11.2125 9.02499 10.775 9.89999 9.9C10.775 9.025 11.2125 7.9625 11.2125 6.7125C11.2125 5.4625 10.775 4.4 9.89999 3.525C9.02499 2.65 7.96249 2.2125 6.71249 2.2125C5.46249 2.2125 4.39999 2.65 3.52499 3.525C2.64999 4.4 2.21249 5.4625 2.21249 6.7125C2.21249 7.9625 2.64999 9.025 3.52499 9.9C4.39999 10.775 5.46249 11.2125 6.71249 11.2125Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  share: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.9 12.025 16.6667 12.075 16.3L5.05 12.2C4.78333 12.45 4.475 12.6458 4.125 12.7875C3.775 12.9292 3.4 13 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.4 7 3.775 7.07083 4.125 7.2125C4.475 7.35417 4.78333 7.55 5.05 7.8L12.075 3.7C12.0417 3.58333 12.0208 3.47083 12.0125 3.3625C12.0042 3.25417 12 3.13333 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6 6 14.225 5.92917 13.875 5.7875C13.525 5.64583 13.2167 5.45 12.95 5.2L5.925 9.3C5.95833 9.41667 5.97917 9.52917 5.9875 9.6375C5.99583 9.74583 6 9.86667 6 10C6 10.1333 5.99583 10.2542 5.9875 10.3625C5.97917 10.4708 5.95833 10.5833 5.925 10.7L12.95 14.8C13.2167 14.55 13.525 14.3542 13.875 14.2125C14.225 14.0708 14.6 14 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20ZM15 18C15.2833 18 15.5208 17.9042 15.7125 17.7125C15.9042 17.5208 16 17.2833 16 17C16 16.7167 15.9042 16.4792 15.7125 16.2875C15.5208 16.0958 15.2833 16 15 16C14.7167 16 14.4792 16.0958 14.2875 16.2875C14.0958 16.4792 14 16.7167 14 17C14 17.2833 14.0958 17.5208 14.2875 17.7125C14.4792 17.9042 14.7167 18 15 18ZM3 11C3.28333 11 3.52083 10.9042 3.7125 10.7125C3.90417 10.5208 4 10.2833 4 10C4 9.71667 3.90417 9.47917 3.7125 9.2875C3.52083 9.09583 3.28333 9 3 9C2.71667 9 2.47917 9.09583 2.2875 9.2875C2.09583 9.47917 2 9.71667 2 10C2 10.2833 2.09583 10.5208 2.2875 10.7125C2.47917 10.9042 2.71667 11 3 11ZM15 4C15.2833 4 15.5208 3.90417 15.7125 3.7125C15.9042 3.52083 16 3.28333 16 3C16 2.71667 15.9042 2.47917 15.7125 2.2875C15.5208 2.09583 15.2833 2 15 2C14.7167 2 14.4792 2.09583 14.2875 2.2875C14.0958 2.47917 14 2.71667 14 3C14 3.28333 14.0958 3.52083 14.2875 3.7125C14.4792 3.90417 14.7167 4 15 4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  sms: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
  <path d="M4 16L1.7 18.3C1.38333 18.6167 1.02083 18.6875 0.6125 18.5125C0.204167 18.3375 0 18.025 0 17.575V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4ZM3.15 14H18V2H2V15.125L3.15 14ZM6 9C6.28333 9 6.52083 8.90417 6.7125 8.7125C6.90417 8.52083 7 8.28333 7 8C7 7.71667 6.90417 7.47917 6.7125 7.2875C6.52083 7.09583 6.28333 7 6 7C5.71667 7 5.47917 7.09583 5.2875 7.2875C5.09583 7.47917 5 7.71667 5 8C5 8.28333 5.09583 8.52083 5.2875 8.7125C5.47917 8.90417 5.71667 9 6 9ZM10 9C10.2833 9 10.5208 8.90417 10.7125 8.7125C10.9042 8.52083 11 8.28333 11 8C11 7.71667 10.9042 7.47917 10.7125 7.2875C10.5208 7.09583 10.2833 7 10 7C9.71667 7 9.47917 7.09583 9.2875 7.2875C9.09583 7.47917 9 7.71667 9 8C9 8.28333 9.09583 8.52083 9.2875 8.7125C9.47917 8.90417 9.71667 9 10 9ZM14 9C14.2833 9 14.5208 8.90417 14.7125 8.7125C14.9042 8.52083 15 8.28333 15 8C15 7.71667 14.9042 7.47917 14.7125 7.2875C14.5208 7.09583 14.2833 7 14 7C13.7167 7 13.4792 7.09583 13.2875 7.2875C13.0958 7.47917 13 7.71667 13 8C13 8.28333 13.0958 8.52083 13.2875 8.7125C13.4792 8.90417 13.7167 9 14 9Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  thumb_down: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M2 13C1.46667 13 1 12.8 0.6 12.4C0.2 12 0 11.5333 0 11V9C0 8.88333 0.0125 8.75833 0.0375 8.625C0.0625 8.49167 0.1 8.36667 0.15 8.25L3.15 1.2C3.3 0.866667 3.55 0.583333 3.9 0.35C4.25 0.116667 4.61667 0 5 0H13C13.55 0 14.0208 0.195833 14.4125 0.5875C14.8042 0.979167 15 1.45 15 2V12.175C15 12.4417 14.9458 12.6958 14.8375 12.9375C14.7292 13.1792 14.5833 13.3917 14.4 13.575L8.975 18.975C8.725 19.2083 8.42917 19.35 8.0875 19.4C7.74583 19.45 7.41667 19.3917 7.1 19.225C6.78333 19.0583 6.55417 18.825 6.4125 18.525C6.27083 18.225 6.24167 17.9167 6.325 17.6L7.45 13H2ZM19 0C19.55 0 20.0208 0.195833 20.4125 0.5875C20.8042 0.979167 21 1.45 21 2V11C21 11.55 20.8042 12.0208 20.4125 12.4125C20.0208 12.8042 19.55 13 19 13C18.45 13 17.9792 12.8042 17.5875 12.4125C17.1958 12.0208 17 11.55 17 11V2C17 1.45 17.1958 0.979167 17.5875 0.5875C17.9792 0.195833 18.45 0 19 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  thumb_up: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M19 7.00001C19.5333 7.00001 20 7.20001 20.4 7.60001C20.8 8.00001 21 8.46668 21 9.00001V11C21 11.1167 20.9875 11.2417 20.9625 11.375C20.9375 11.5083 20.9 11.6333 20.85 11.75L17.85 18.8C17.7 19.1333 17.45 19.4167 17.1 19.65C16.75 19.8833 16.3833 20 16 20H8C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18V7.82501C6 7.55834 6.05417 7.30418 6.1625 7.06251C6.27083 6.82084 6.41667 6.60834 6.6 6.42501L12.025 1.02501C12.275 0.791677 12.5708 0.65001 12.9125 0.60001C13.2542 0.55001 13.5833 0.608344 13.9 0.77501C14.2167 0.941677 14.4458 1.17501 14.5875 1.47501C14.7292 1.77501 14.7583 2.08334 14.675 2.40001L13.55 7.00001H19ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V9.00001C0 8.45001 0.195833 7.97918 0.5875 7.58751C0.979167 7.19584 1.45 7.00001 2 7.00001C2.55 7.00001 3.02083 7.19584 3.4125 7.58751C3.80417 7.97918 4 8.45001 4 9.00001V18C4 18.55 3.80417 19.0208 3.4125 19.4125C3.02083 19.8042 2.55 20 2 20Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  upload_file: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
  <path d="M7 12.825V16C7 16.2833 7.09583 16.5208 7.2875 16.7125C7.47917 16.9042 7.71667 17 8 17C8.28333 17 8.52083 16.9042 8.7125 16.7125C8.90417 16.5208 9 16.2833 9 16V12.825L9.9 13.725C10 13.825 10.1125 13.9 10.2375 13.95C10.3625 14 10.4875 14.0208 10.6125 14.0125C10.7375 14.0042 10.8583 13.975 10.975 13.925C11.0917 13.875 11.2 13.8 11.3 13.7C11.4833 13.5 11.5792 13.2667 11.5875 13C11.5958 12.7333 11.5 12.5 11.3 12.3L8.7 9.7C8.6 9.6 8.49167 9.52917 8.375 9.4875C8.25833 9.44583 8.13333 9.425 8 9.425C7.86667 9.425 7.74167 9.44583 7.625 9.4875C7.50833 9.52917 7.4 9.6 7.3 9.7L4.7 12.3C4.5 12.5 4.40417 12.7333 4.4125 13C4.42083 13.2667 4.525 13.5 4.725 13.7C4.925 13.8833 5.15833 13.9792 5.425 13.9875C5.69167 13.9958 5.925 13.9 6.125 13.7L7 12.825ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9.175C9.44167 0 9.69583 0.05 9.9375 0.15C10.1792 0.25 10.3917 0.391667 10.575 0.575L15.425 5.425C15.6083 5.60833 15.75 5.82083 15.85 6.0625C15.95 6.30417 16 6.55833 16 6.825V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 6V2H2V18H14V7H10C9.71667 7 9.47917 6.90417 9.2875 6.7125C9.09583 6.52083 9 6.28333 9 6Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  visibility: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
  <path d="M11 12.5C12.25 12.5 13.3125 12.0625 14.1875 11.1875C15.0625 10.3125 15.5 9.25 15.5 8C15.5 6.75 15.0625 5.6875 14.1875 4.8125C13.3125 3.9375 12.25 3.5 11 3.5C9.75 3.5 8.6875 3.9375 7.8125 4.8125C6.9375 5.6875 6.5 6.75 6.5 8C6.5 9.25 6.9375 10.3125 7.8125 11.1875C8.6875 12.0625 9.75 12.5 11 12.5ZM11 10.7C10.25 10.7 9.6125 10.4375 9.0875 9.9125C8.5625 9.3875 8.3 8.75 8.3 8C8.3 7.25 8.5625 6.6125 9.0875 6.0875C9.6125 5.5625 10.25 5.3 11 5.3C11.75 5.3 12.3875 5.5625 12.9125 6.0875C13.4375 6.6125 13.7 7.25 13.7 8C13.7 8.75 13.4375 9.3875 12.9125 9.9125C12.3875 10.4375 11.75 10.7 11 10.7ZM11 15.5C8.56667 15.5 6.35 14.8208 4.35 13.4625C2.35 12.1042 0.9 10.2833 0 8C0.9 5.71667 2.35 3.89583 4.35 2.5375C6.35 1.17917 8.56667 0.5 11 0.5C13.4333 0.5 15.65 1.17917 17.65 2.5375C19.65 3.89583 21.1 5.71667 22 8C21.1 10.2833 19.65 12.1042 17.65 13.4625C15.65 14.8208 13.4333 15.5 11 15.5ZM11 13.5C12.8833 13.5 14.6125 13.0042 16.1875 12.0125C17.7625 11.0208 18.9667 9.68333 19.8 8C18.9667 6.31667 17.7625 4.97917 16.1875 3.9875C14.6125 2.99583 12.8833 2.5 11 2.5C9.11667 2.5 7.3875 2.99583 5.8125 3.9875C4.2375 4.97917 3.03333 6.31667 2.2 8C3.03333 9.68333 4.2375 11.0208 5.8125 12.0125C7.3875 13.0042 9.11667 13.5 11 13.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  visibility_off: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
  <path d="M15.1 10.6L13.65 9.15C13.8 8.36667 13.575 7.63333 12.975 6.95C12.375 6.26667 11.6 6 10.65 6.15L9.2 4.7C9.48333 4.56667 9.77083 4.46667 10.0625 4.4C10.3542 4.33333 10.6667 4.3 11 4.3C12.25 4.3 13.3125 4.7375 14.1875 5.6125C15.0625 6.4875 15.5 7.55 15.5 8.8C15.5 9.13333 15.4667 9.44583 15.4 9.7375C15.3333 10.0292 15.2333 10.3167 15.1 10.6ZM18.3 13.75L16.85 12.35C17.4833 11.8667 18.0458 11.3375 18.5375 10.7625C19.0292 10.1875 19.45 9.53333 19.8 8.8C18.9667 7.11667 17.7708 5.77917 16.2125 4.7875C14.6542 3.79583 12.9167 3.3 11 3.3C10.5167 3.3 10.0417 3.33333 9.575 3.4C9.10833 3.46667 8.65 3.56667 8.2 3.7L6.65 2.15C7.33333 1.86667 8.03333 1.65417 8.75 1.5125C9.46667 1.37083 10.2167 1.3 11 1.3C13.5167 1.3 15.7583 1.99583 17.725 3.3875C19.6917 4.77917 21.1167 6.58333 22 8.8C21.6167 9.78333 21.1125 10.6958 20.4875 11.5375C19.8625 12.3792 19.1333 13.1167 18.3 13.75ZM18.8 19.9L14.6 15.75C14.0167 15.9333 13.4292 16.0708 12.8375 16.1625C12.2458 16.2542 11.6333 16.3 11 16.3C8.48333 16.3 6.24167 15.6042 4.275 14.2125C2.30833 12.8208 0.883333 11.0167 0 8.8C0.35 7.91667 0.791667 7.09583 1.325 6.3375C1.85833 5.57917 2.46667 4.9 3.15 4.3L0.4 1.5L1.8 0.0999985L20.2 18.5L18.8 19.9ZM4.55 5.7C4.06667 6.13333 3.625 6.60833 3.225 7.125C2.825 7.64167 2.48333 8.2 2.2 8.8C3.03333 10.4833 4.22917 11.8208 5.7875 12.8125C7.34583 13.8042 9.08333 14.3 11 14.3C11.3333 14.3 11.6583 14.2792 11.975 14.2375C12.2917 14.1958 12.6167 14.15 12.95 14.1L12.05 13.15C11.8667 13.2 11.6917 13.2375 11.525 13.2625C11.3583 13.2875 11.1833 13.3 11 13.3C9.75 13.3 8.6875 12.8625 7.8125 11.9875C6.9375 11.1125 6.5 10.05 6.5 8.8C6.5 8.61667 6.5125 8.44167 6.5375 8.275C6.5625 8.10833 6.6 7.93333 6.65 7.75L4.55 5.7Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  notifications: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
  <path d="M1 17C0.716667 17 0.479167 16.9042 0.2875 16.7125C0.0958333 16.5208 0 16.2833 0 16C0 15.7167 0.0958333 15.4792 0.2875 15.2875C0.479167 15.0958 0.716667 15 1 15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V2.2C10.8333 2.53333 11.9167 3.2375 12.75 4.3125C13.5833 5.3875 14 6.61667 14 8V15H15C15.2833 15 15.5208 15.0958 15.7125 15.2875C15.9042 15.4792 16 15.7167 16 16C16 16.2833 15.9042 16.5208 15.7125 16.7125C15.5208 16.9042 15.2833 17 15 17H1ZM8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20ZM4 15H12V8C12 6.9 11.6083 5.95833 10.825 5.175C10.0417 4.39167 9.1 4 8 4C6.9 4 5.95833 4.39167 5.175 5.175C4.39167 5.95833 4 6.9 4 8V15Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  // *** Arrows *** //
  arrow_back: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.6125 8.9935L8.5125 13.8935C8.7125 14.0935 8.80834 14.3268 8.8 14.5935C8.79167 14.8602 8.6875 15.0935 8.4875 15.2935C8.2875 15.4768 8.05417 15.5727 7.7875 15.581C7.52083 15.5893 7.2875 15.4935 7.0875 15.2935L0.487502 8.6935C0.387502 8.5935 0.316668 8.48517 0.275002 8.3685C0.233335 8.25184 0.212502 8.12684 0.212502 7.9935C0.212502 7.86017 0.233335 7.73517 0.275002 7.6185C0.316668 7.50184 0.387502 7.3935 0.487502 7.2935L7.0875 0.693503C7.27083 0.510169 7.5 0.418503 7.775 0.418503C8.05 0.418503 8.2875 0.510169 8.4875 0.693503C8.6875 0.893503 8.7875 1.131 8.7875 1.406C8.7875 1.681 8.6875 1.9185 8.4875 2.1185L3.6125 6.9935H14.7875C15.0708 6.9935 15.3083 7.08934 15.5 7.281C15.6917 7.47267 15.7875 7.71017 15.7875 7.9935C15.7875 8.27684 15.6917 8.51434 15.5 8.706C15.3083 8.89767 15.0708 8.9935 14.7875 8.9935H3.6125Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Chevrons *** //
  chevron_down: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path d="M10.0065 8.5L17.3565 1.15C17.6065 0.899999 17.8981 0.779165 18.2315 0.787499C18.5648 0.795832 18.8565 0.924999 19.1065 1.175C19.3565 1.425 19.4815 1.71667 19.4815 2.05C19.4815 2.38333 19.3565 2.675 19.1065 2.925L11.4315 10.625C11.2315 10.825 11.0065 10.975 10.7565 11.075C10.5065 11.175 10.2565 11.225 10.0065 11.225C9.75646 11.225 9.50646 11.175 9.25646 11.075C9.00646 10.975 8.78146 10.825 8.58146 10.625L0.881458 2.925C0.631458 2.675 0.510625 2.37916 0.518958 2.0375C0.527291 1.69583 0.656458 1.4 0.906458 1.15C1.15646 0.899999 1.44812 0.774999 1.78146 0.774999C2.11479 0.774999 2.40646 0.899999 2.65646 1.15L10.0065 8.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  chevron_up: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path d="M9.99354 3.5L2.64354 10.85C2.39354 11.1 2.10188 11.2208 1.76854 11.2125C1.43521 11.2042 1.14354 11.075 0.893541 10.825C0.643541 10.575 0.518541 10.2833 0.518541 9.95C0.518541 9.61667 0.643541 9.325 0.893541 9.075L8.56854 1.375C8.76854 1.175 8.99354 1.025 9.24354 0.925002C9.49354 0.825002 9.74354 0.775002 9.99354 0.775002C10.2435 0.775002 10.4935 0.825002 10.7435 0.925002C10.9935 1.025 11.2185 1.175 11.4185 1.375L19.1185 9.075C19.3685 9.325 19.4894 9.62084 19.481 9.9625C19.4727 10.3042 19.3435 10.6 19.0935 10.85C18.8435 11.1 18.5519 11.225 18.2185 11.225C17.8852 11.225 17.5935 11.1 17.3435 10.85L9.99354 3.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  chevron_left: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M3.49999 10.0065L10.85 17.3565C11.1 17.6065 11.2208 17.8981 11.2125 18.2315C11.2042 18.5648 11.075 18.8565 10.825 19.1065C10.575 19.3565 10.2833 19.4815 9.94999 19.4815C9.61666 19.4815 9.32499 19.3565 9.07499 19.1065L1.37499 11.4315C1.17499 11.2315 1.02499 11.0065 0.924994 10.7565C0.824994 10.5065 0.774994 10.2565 0.774994 10.0065C0.774994 9.75645 0.824994 9.50645 0.924994 9.25645C1.02499 9.00645 1.17499 8.78145 1.37499 8.58145L9.07499 0.88145C9.32499 0.63145 9.62083 0.510617 9.96249 0.51895C10.3042 0.527284 10.6 0.65645 10.85 0.90645C11.1 1.15645 11.225 1.44812 11.225 1.78145C11.225 2.11478 11.1 2.40645 10.85 2.65645L3.49999 10.0065Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  chevron_right: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M8.50001 9.99355L1.15001 2.64355C0.900008 2.39355 0.779174 2.10188 0.787508 1.76855C0.795841 1.43521 0.925008 1.14355 1.17501 0.893548C1.42501 0.643548 1.71667 0.518548 2.05001 0.518548C2.38334 0.518548 2.67501 0.643548 2.92501 0.893548L10.625 8.56855C10.825 8.76855 10.975 8.99355 11.075 9.24355C11.175 9.49355 11.225 9.74355 11.225 9.99355C11.225 10.2435 11.175 10.4935 11.075 10.7435C10.975 10.9935 10.825 11.2185 10.625 11.4185L2.92501 19.1185C2.67501 19.3685 2.37917 19.4894 2.03751 19.481C1.69584 19.4727 1.40001 19.3435 1.15001 19.0935C0.900006 18.8435 0.775006 18.5519 0.775006 18.2185C0.775006 17.8852 0.900006 17.5935 1.15001 17.3435L8.50001 9.99355Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Environmental *** //
  ac_unit: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 15.85L6.425 18.375C6.24167 18.5583 6.0125 18.65 5.7375 18.65C5.4625 18.65 5.23333 18.55 5.05 18.35C4.85 18.1667 4.75 17.9375 4.75 17.6625C4.75 17.3875 4.85 17.15 5.05 16.95L9 13V11H7L3.025 14.975C2.84167 15.1583 2.6125 15.25 2.3375 15.25C2.0625 15.25 1.825 15.15 1.625 14.95C1.44167 14.7667 1.35 14.5375 1.35 14.2625C1.35 13.9875 1.44167 13.7583 1.625 13.575L4.15 11H0.975C0.691667 11 0.458333 10.9042 0.275 10.7125C0.0916667 10.5208 0 10.2833 0 10C0 9.71667 0.0958333 9.47917 0.2875 9.2875C0.479167 9.09583 0.716667 9 1 9H4.15L1.625 6.45C1.44167 6.26667 1.35 6.0375 1.35 5.7625C1.35 5.4875 1.45 5.25 1.65 5.05C1.83333 4.86667 2.0625 4.775 2.3375 4.775C2.6125 4.775 2.85 4.86667 3.05 5.05L7 9H9V7L5.025 3.05C4.84167 2.86667 4.75 2.6375 4.75 2.3625C4.75 2.0875 4.85 1.85 5.05 1.65C5.23333 1.46667 5.4625 1.375 5.7375 1.375C6.0125 1.375 6.24167 1.46667 6.425 1.65L9 4.15V1C9 0.716667 9.09583 0.479167 9.2875 0.2875C9.47917 0.0958333 9.71667 0 10 0C10.2833 0 10.5208 0.0958333 10.7125 0.2875C10.9042 0.479167 11 0.716667 11 1V4.15L13.55 1.65C13.7333 1.46667 13.9625 1.375 14.2375 1.375C14.5125 1.375 14.75 1.46667 14.95 1.65C15.1333 1.85 15.225 2.0875 15.225 2.3625C15.225 2.6375 15.1333 2.86667 14.95 3.05L11 7V9H13L16.95 5.05C17.1333 4.86667 17.3625 4.775 17.6375 4.775C17.9125 4.775 18.15 4.875 18.35 5.075C18.5333 5.25833 18.625 5.4875 18.625 5.7625C18.625 6.0375 18.5333 6.26667 18.35 6.45L15.85 9H19C19.2833 9 19.5208 9.09583 19.7125 9.2875C19.9042 9.47917 20 9.71667 20 10C20 10.2833 19.9042 10.5208 19.7125 10.7125C19.5208 10.9042 19.2833 11 19 11H15.85L18.35 13.575C18.5333 13.7583 18.625 13.9875 18.625 14.2625C18.625 14.5375 18.5333 14.7667 18.35 14.95C18.15 15.15 17.9125 15.25 17.6375 15.25C17.3625 15.25 17.1333 15.15 16.95 14.95L13 11H11V13L14.95 16.975C15.1333 17.1583 15.225 17.3875 15.225 17.6625C15.225 17.9375 15.125 18.175 14.925 18.375C14.7417 18.5583 14.5125 18.65 14.2375 18.65C13.9625 18.65 13.7333 18.5583 13.55 18.375L11 15.85V19.025C11 19.3083 10.9042 19.5417 10.7125 19.725C10.5208 19.9083 10.2833 20 10 20C9.71667 20 9.47917 19.9042 9.2875 19.7125C9.09583 19.5208 9 19.2833 9 19V15.85Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  air: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
  <path d="M9.5 17C8.96667 17 8.47083 16.8667 8.0125 16.6C7.55417 16.3333 7.18333 15.9667 6.9 15.5C6.71667 15.1667 6.7125 14.8333 6.8875 14.5C7.0625 14.1667 7.33333 14 7.7 14C7.91667 14 8.10833 14.0667 8.275 14.2C8.44167 14.3333 8.59167 14.4833 8.725 14.65C8.80833 14.7667 8.92083 14.8542 9.0625 14.9125C9.20417 14.9708 9.35 15 9.5 15C9.78333 15 10.0208 14.9042 10.2125 14.7125C10.4042 14.5208 10.5 14.2833 10.5 14C10.5 13.7167 10.4042 13.4792 10.2125 13.2875C10.0208 13.0958 9.78333 13 9.5 13H1C0.716667 13 0.479167 12.9042 0.2875 12.7125C0.0958333 12.5208 0 12.2833 0 12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11H9.5C10.3333 11 11.0417 11.2917 11.625 11.875C12.2083 12.4583 12.5 13.1667 12.5 14C12.5 14.8333 12.2083 15.5417 11.625 16.125C11.0417 16.7083 10.3333 17 9.5 17ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H13.5C13.9167 5 14.2708 4.85417 14.5625 4.5625C14.8542 4.27083 15 3.91667 15 3.5C15 3.08333 14.8542 2.72917 14.5625 2.4375C14.2708 2.14583 13.9167 2 13.5 2C13.2333 2 12.9833 2.0625 12.75 2.1875C12.5167 2.3125 12.3333 2.49167 12.2 2.725C12.0833 2.925 11.9417 3.10417 11.775 3.2625C11.6083 3.42083 11.4083 3.5 11.175 3.5C10.8417 3.5 10.5708 3.375 10.3625 3.125C10.1542 2.875 10.1 2.60833 10.2 2.325C10.4333 1.625 10.8542 1.0625 11.4625 0.6375C12.0708 0.2125 12.75 0 13.5 0C14.4667 0 15.2917 0.341667 15.975 1.025C16.6583 1.70833 17 2.53333 17 3.5C17 4.46667 16.6583 5.29167 15.975 5.975C15.2917 6.65833 14.4667 7 13.5 7H1ZM17.95 14.7C17.6167 14.85 17.2917 14.8292 16.975 14.6375C16.6583 14.4458 16.5 14.1667 16.5 13.8C16.5 13.5667 16.5792 13.3708 16.7375 13.2125C16.8958 13.0542 17.075 12.9167 17.275 12.8C17.5083 12.6667 17.6875 12.4833 17.8125 12.25C17.9375 12.0167 18 11.7667 18 11.5C18 11.0833 17.8542 10.7292 17.5625 10.4375C17.2708 10.1458 16.9167 10 16.5 10H1C0.716667 10 0.479167 9.90417 0.2875 9.7125C0.0958333 9.52083 0 9.28333 0 9C0 8.71667 0.0958333 8.47917 0.2875 8.2875C0.479167 8.09583 0.716667 8 1 8H16.5C17.4667 8 18.2917 8.34167 18.975 9.025C19.6583 9.70833 20 10.5333 20 11.5C20 12.2 19.8167 12.8375 19.45 13.4125C19.0833 13.9875 18.5833 14.4167 17.95 14.7Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  clear_day: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 4C10.7167 4 10.4792 3.90417 10.2875 3.7125C10.0958 3.52083 10 3.28333 10 3V1C10 0.716667 10.0958 0.479167 10.2875 0.2875C10.4792 0.0958333 10.7167 0 11 0C11.2833 0 11.5208 0.0958333 11.7125 0.2875C11.9042 0.479167 12 0.716667 12 1V3C12 3.28333 11.9042 3.52083 11.7125 3.7125C11.5208 3.90417 11.2833 4 11 4ZM15.95 6.05C15.7667 5.86667 15.675 5.6375 15.675 5.3625C15.675 5.0875 15.7667 4.85 15.95 4.65L17.35 3.225C17.55 3.025 17.7875 2.925 18.0625 2.925C18.3375 2.925 18.575 3.025 18.775 3.225C18.9583 3.40833 19.05 3.64167 19.05 3.925C19.05 4.20833 18.9583 4.44167 18.775 4.625L17.35 6.05C17.1667 6.23333 16.9333 6.325 16.65 6.325C16.3667 6.325 16.1333 6.23333 15.95 6.05ZM19 12C18.7167 12 18.4792 11.9042 18.2875 11.7125C18.0958 11.5208 18 11.2833 18 11C18 10.7167 18.0958 10.4792 18.2875 10.2875C18.4792 10.0958 18.7167 10 19 10H21C21.2833 10 21.5208 10.0958 21.7125 10.2875C21.9042 10.4792 22 10.7167 22 11C22 11.2833 21.9042 11.5208 21.7125 11.7125C21.5208 11.9042 21.2833 12 21 12H19ZM11 22C10.7167 22 10.4792 21.9042 10.2875 21.7125C10.0958 21.5208 10 21.2833 10 21V19C10 18.7167 10.0958 18.4792 10.2875 18.2875C10.4792 18.0958 10.7167 18 11 18C11.2833 18 11.5208 18.0958 11.7125 18.2875C11.9042 18.4792 12 18.7167 12 19V21C12 21.2833 11.9042 21.5208 11.7125 21.7125C11.5208 21.9042 11.2833 22 11 22ZM4.65 6.05L3.225 4.65C3.025 4.45 2.925 4.20833 2.925 3.925C2.925 3.64167 3.025 3.40833 3.225 3.225C3.40833 3.04167 3.64167 2.95 3.925 2.95C4.20833 2.95 4.44167 3.04167 4.625 3.225L6.05 4.65C6.23333 4.83333 6.325 5.06667 6.325 5.35C6.325 5.63333 6.23333 5.86667 6.05 6.05C5.85 6.23333 5.61667 6.325 5.35 6.325C5.08333 6.325 4.85 6.23333 4.65 6.05ZM17.35 18.775L15.95 17.35C15.7667 17.15 15.675 16.9125 15.675 16.6375C15.675 16.3625 15.7667 16.1333 15.95 15.95C16.1333 15.7667 16.3625 15.675 16.6375 15.675C16.9125 15.675 17.15 15.7667 17.35 15.95L18.775 17.35C18.975 17.5333 19.0708 17.7667 19.0625 18.05C19.0542 18.3333 18.9583 18.575 18.775 18.775C18.575 18.975 18.3333 19.075 18.05 19.075C17.7667 19.075 17.5333 18.975 17.35 18.775ZM1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10H3C3.28333 10 3.52083 10.0958 3.7125 10.2875C3.90417 10.4792 4 10.7167 4 11C4 11.2833 3.90417 11.5208 3.7125 11.7125C3.52083 11.9042 3.28333 12 3 12H1ZM3.225 18.775C3.04167 18.5917 2.95 18.3583 2.95 18.075C2.95 17.7917 3.04167 17.5583 3.225 17.375L4.65 15.95C4.83333 15.7667 5.0625 15.675 5.3375 15.675C5.6125 15.675 5.85 15.7667 6.05 15.95C6.25 16.15 6.35 16.3875 6.35 16.6625C6.35 16.9375 6.25 17.175 6.05 17.375L4.65 18.775C4.45 18.975 4.20833 19.075 3.925 19.075C3.64167 19.075 3.40833 18.975 3.225 18.775ZM11 17C9.33333 17 7.91667 16.4167 6.75 15.25C5.58333 14.0833 5 12.6667 5 11C5 9.33333 5.58333 7.91667 6.75 6.75C7.91667 5.58333 9.33333 5 11 5C12.6667 5 14.0833 5.58333 15.25 6.75C16.4167 7.91667 17 9.33333 17 11C17 12.6667 16.4167 14.0833 15.25 15.25C14.0833 16.4167 12.6667 17 11 17ZM11 15C12.1 15 13.0417 14.6083 13.825 13.825C14.6083 13.0417 15 12.1 15 11C15 9.9 14.6083 8.95833 13.825 8.175C13.0417 7.39167 12.1 7 11 7C9.9 7 8.95833 7.39167 8.175 8.175C7.39167 8.95833 7 9.9 7 11C7 12.1 7.39167 13.0417 8.175 13.825C8.95833 14.6083 9.9 15 11 15Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  coronavirus: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.25 20C9.05 20 8.875 19.925 8.725 19.775C8.575 19.625 8.5 19.45 8.5 19.25C8.5 19.05 8.575 18.875 8.725 18.725C8.875 18.575 9.05 18.5 9.25 18.5V16.95C8.55 16.8667 7.89167 16.7 7.275 16.45C6.65833 16.2 6.1 15.8667 5.6 15.45L4.525 16.55C4.675 16.7 4.75 16.875 4.75 17.075C4.75 17.275 4.675 17.45 4.525 17.6C4.375 17.75 4.2 17.825 4 17.825C3.8 17.825 3.625 17.75 3.475 17.6L2.4 16.55C2.25 16.4 2.175 16.2208 2.175 16.0125C2.175 15.8042 2.25 15.625 2.4 15.475C2.55 15.325 2.725 15.2542 2.925 15.2625C3.125 15.2708 3.3 15.3417 3.45 15.475L4.55 14.375C4.13333 13.8583 3.8 13.3 3.55 12.7C3.3 12.1 3.13333 11.45 3.05 10.75H1.5C1.5 10.95 1.425 11.125 1.275 11.275C1.125 11.425 0.95 11.5 0.75 11.5C0.55 11.5 0.375 11.425 0.225 11.275C0.075 11.125 0 10.95 0 10.75V9.25C0 9.05 0.075 8.875 0.225 8.725C0.375 8.575 0.55 8.5 0.75 8.5C0.95 8.5 1.125 8.575 1.275 8.725C1.425 8.875 1.5 9.05 1.5 9.25H3.05C3.13333 8.55 3.30417 7.9 3.5625 7.3C3.82083 6.7 4.15 6.14167 4.55 5.625L3.45 4.525C3.3 4.65833 3.125 4.72917 2.925 4.7375C2.725 4.74583 2.55 4.675 2.4 4.525C2.25 4.375 2.175 4.19583 2.175 3.9875C2.175 3.77917 2.25 3.6 2.4 3.45L3.45 2.4C3.6 2.25 3.77917 2.175 3.9875 2.175C4.19583 2.175 4.375 2.25 4.525 2.4C4.675 2.55 4.75 2.72917 4.75 2.9375C4.75 3.14583 4.675 3.325 4.525 3.475L5.6 4.55C6.11667 4.13333 6.675 3.8 7.275 3.55C7.875 3.3 8.525 3.13333 9.225 3.05V1.5C9.025 1.5 8.85417 1.425 8.7125 1.275C8.57083 1.125 8.5 0.95 8.5 0.75C8.5 0.55 8.575 0.375 8.725 0.225C8.875 0.075 9.05 0 9.25 0H10.75C10.95 0 11.125 0.075 11.275 0.225C11.425 0.375 11.5 0.55 11.5 0.75C11.5 0.95 11.425 1.125 11.275 1.275C11.125 1.425 10.95 1.5 10.75 1.5V3.05C11.45 3.13333 12.1 3.3 12.7 3.55C13.3 3.8 13.8583 4.13333 14.375 4.55L15.475 3.45C15.325 3.3 15.25 3.125 15.25 2.925C15.25 2.725 15.325 2.55 15.475 2.4C15.625 2.25 15.8042 2.175 16.0125 2.175C16.2208 2.175 16.4 2.25 16.55 2.4L17.6 3.475C17.75 3.625 17.825 3.8 17.825 4C17.825 4.2 17.75 4.375 17.6 4.525C17.45 4.675 17.2708 4.75 17.0625 4.75C16.8542 4.75 16.675 4.675 16.525 4.525L15.45 5.6C15.8667 6.11667 16.2 6.67917 16.45 7.2875C16.7 7.89583 16.8667 8.55 16.95 9.25H18.5C18.5 9.05 18.575 8.875 18.725 8.725C18.875 8.575 19.05 8.5 19.25 8.5C19.45 8.5 19.625 8.575 19.775 8.725C19.925 8.875 20 9.05 20 9.25V10.75C20 10.95 19.925 11.125 19.775 11.275C19.625 11.425 19.45 11.5 19.25 11.5C19.05 11.5 18.875 11.425 18.725 11.275C18.575 11.125 18.5 10.95 18.5 10.75H16.95C16.8667 11.45 16.7 12.1042 16.45 12.7125C16.2 13.3208 15.8667 13.8833 15.45 14.4L16.525 15.475C16.675 15.325 16.8542 15.25 17.0625 15.25C17.2708 15.25 17.45 15.325 17.6 15.475C17.75 15.625 17.825 15.8042 17.825 16.0125C17.825 16.2208 17.75 16.4 17.6 16.55L16.55 17.6C16.4 17.75 16.2208 17.825 16.0125 17.825C15.8042 17.825 15.625 17.75 15.475 17.6C15.325 17.45 15.2542 17.275 15.2625 17.075C15.2708 16.875 15.3417 16.7 15.475 16.55L14.375 15.45C13.8583 15.8667 13.3 16.2042 12.7 16.4625C12.1 16.7208 11.45 16.8917 10.75 16.975V18.5C10.95 18.5 11.125 18.575 11.275 18.725C11.425 18.875 11.5 19.05 11.5 19.25C11.5 19.45 11.425 19.625 11.275 19.775C11.125 19.925 10.95 20 10.75 20H9.25ZM10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM8.25 14C8.53333 14 8.77083 13.9042 8.9625 13.7125C9.15417 13.5208 9.25 13.2833 9.25 13C9.25 12.7167 9.15417 12.4792 8.9625 12.2875C8.77083 12.0958 8.53333 12 8.25 12C7.96667 12 7.72917 12.0958 7.5375 12.2875C7.34583 12.4792 7.25 12.7167 7.25 13C7.25 13.2833 7.34583 13.5208 7.5375 13.7125C7.72917 13.9042 7.96667 14 8.25 14ZM11.75 14C12.0333 14 12.2708 13.9042 12.4625 13.7125C12.6542 13.5208 12.75 13.2833 12.75 13C12.75 12.7167 12.6542 12.4792 12.4625 12.2875C12.2708 12.0958 12.0333 12 11.75 12C11.4667 12 11.2292 12.0958 11.0375 12.2875C10.8458 12.4792 10.75 12.7167 10.75 13C10.75 13.2833 10.8458 13.5208 11.0375 13.7125C11.2292 13.9042 11.4667 14 11.75 14ZM6.5 11C6.78333 11 7.02083 10.9042 7.2125 10.7125C7.40417 10.5208 7.5 10.2833 7.5 10C7.5 9.71667 7.40417 9.47917 7.2125 9.2875C7.02083 9.09583 6.78333 9 6.5 9C6.21667 9 5.97917 9.09583 5.7875 9.2875C5.59583 9.47917 5.5 9.71667 5.5 10C5.5 10.2833 5.59583 10.5208 5.7875 10.7125C5.97917 10.9042 6.21667 11 6.5 11ZM10 11C10.2833 11 10.5208 10.9042 10.7125 10.7125C10.9042 10.5208 11 10.2833 11 10C11 9.71667 10.9042 9.47917 10.7125 9.2875C10.5208 9.09583 10.2833 9 10 9C9.71667 9 9.47917 9.09583 9.2875 9.2875C9.09583 9.47917 9 9.71667 9 10C9 10.2833 9.09583 10.5208 9.2875 10.7125C9.47917 10.9042 9.71667 11 10 11ZM13.5 11C13.7833 11 14.0208 10.9042 14.2125 10.7125C14.4042 10.5208 14.5 10.2833 14.5 10C14.5 9.71667 14.4042 9.47917 14.2125 9.2875C14.0208 9.09583 13.7833 9 13.5 9C13.2167 9 12.9792 9.09583 12.7875 9.2875C12.5958 9.47917 12.5 9.71667 12.5 10C12.5 10.2833 12.5958 10.5208 12.7875 10.7125C12.9792 10.9042 13.2167 11 13.5 11ZM8.25 8C8.53333 8 8.77083 7.90417 8.9625 7.7125C9.15417 7.52083 9.25 7.28333 9.25 7C9.25 6.71667 9.15417 6.47917 8.9625 6.2875C8.77083 6.09583 8.53333 6 8.25 6C7.96667 6 7.72917 6.09583 7.5375 6.2875C7.34583 6.47917 7.25 6.71667 7.25 7C7.25 7.28333 7.34583 7.52083 7.5375 7.7125C7.72917 7.90417 7.96667 8 8.25 8ZM11.75 8C12.0333 8 12.2708 7.90417 12.4625 7.7125C12.6542 7.52083 12.75 7.28333 12.75 7C12.75 6.71667 12.6542 6.47917 12.4625 6.2875C12.2708 6.09583 12.0333 6 11.75 6C11.4667 6 11.2292 6.09583 11.0375 6.2875C10.8458 6.47917 10.75 6.71667 10.75 7C10.75 7.28333 10.8458 7.52083 11.0375 7.7125C11.2292 7.90417 11.4667 8 11.75 8Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  rainy: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M11.95 19.9C11.7 20.0333 11.4458 20.0542 11.1875 19.9625C10.9292 19.8708 10.7333 19.7 10.6 19.45L9.1 16.45C8.96667 16.2 8.94583 15.9458 9.0375 15.6875C9.12917 15.4292 9.3 15.2333 9.55 15.1C9.8 14.9667 10.0542 14.9458 10.3125 15.0375C10.5708 15.1292 10.7667 15.3 10.9 15.55L12.4 18.55C12.5333 18.8 12.5542 19.0542 12.4625 19.3125C12.3708 19.5708 12.2 19.7667 11.95 19.9ZM17.95 19.9C17.7 20.0333 17.4458 20.0542 17.1875 19.9625C16.9292 19.8708 16.7333 19.7 16.6 19.45L15.1 16.45C14.9667 16.2 14.9458 15.9458 15.0375 15.6875C15.1292 15.4292 15.3 15.2333 15.55 15.1C15.8 14.9667 16.0542 14.9458 16.3125 15.0375C16.5708 15.1292 16.7667 15.3 16.9 15.55L18.4 18.55C18.5333 18.8 18.5542 19.0542 18.4625 19.3125C18.3708 19.5708 18.2 19.7667 17.95 19.9ZM5.95 19.9C5.7 20.0333 5.44583 20.0542 5.1875 19.9625C4.92917 19.8708 4.73333 19.7 4.6 19.45L3.1 16.45C2.96667 16.2 2.94583 15.9458 3.0375 15.6875C3.12917 15.4292 3.3 15.2333 3.55 15.1C3.8 14.9667 4.05417 14.9458 4.3125 15.0375C4.57083 15.1292 4.76667 15.3 4.9 15.55L6.4 18.55C6.53333 18.8 6.55417 19.0542 6.4625 19.3125C6.37083 19.5708 6.2 19.7667 5.95 19.9ZM5.5 14C3.98333 14 2.6875 13.4625 1.6125 12.3875C0.5375 11.3125 0 10.0167 0 8.5C0 7.11667 0.458333 5.90833 1.375 4.875C2.29167 3.84167 3.425 3.23333 4.775 3.05C5.30833 2.1 6.0375 1.35417 6.9625 0.8125C7.8875 0.270833 8.9 0 10 0C11.5 0 12.8042 0.479167 13.9125 1.4375C15.0208 2.39583 15.6917 3.59167 15.925 5.025C17.075 5.125 18.0417 5.6 18.825 6.45C19.6083 7.3 20 8.31667 20 9.5C20 10.75 19.5625 11.8125 18.6875 12.6875C17.8125 13.5625 16.75 14 15.5 14H5.5ZM5.5 12H15.5C16.2 12 16.7917 11.7583 17.275 11.275C17.7583 10.7917 18 10.2 18 9.5C18 8.8 17.7583 8.20833 17.275 7.725C16.7917 7.24167 16.2 7 15.5 7H14V6C14 4.9 13.6083 3.95833 12.825 3.175C12.0417 2.39167 11.1 2 10 2C9.2 2 8.47083 2.21667 7.8125 2.65C7.15417 3.08333 6.65833 3.66667 6.325 4.4L6.075 5H5.45C4.5 5.03333 3.6875 5.3875 3.0125 6.0625C2.3375 6.7375 2 7.55 2 8.5C2 9.46667 2.34167 10.2917 3.025 10.975C3.70833 11.6583 4.53333 12 5.5 12Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Intent *** //
  check_circle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M8.6 11.8L6.45 9.65C6.26667 9.46667 6.03333 9.375 5.75 9.375C5.46667 9.375 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.1 14.1 8.33333 14.2 8.6 14.2C8.86667 14.2 9.1 14.1 9.3 13.9L14.95 8.25C15.1333 8.06667 15.225 7.83333 15.225 7.55C15.225 7.26667 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  emergency_home: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 21.025C10.7333 21.025 10.4791 20.975 10.2375 20.875C9.99581 20.775 9.77498 20.6333 9.57498 20.45L1.54998 12.425C1.36664 12.225 1.22498 12.0041 1.12498 11.7625C1.02498 11.5208 0.974976 11.2666 0.974976 11C0.974976 10.7333 1.02498 10.475 1.12498 10.225C1.22498 9.97498 1.36664 9.75831 1.54998 9.57498L9.57498 1.54998C9.77498 1.34998 9.99581 1.20414 10.2375 1.11248C10.4791 1.02081 10.7333 0.974976 11 0.974976C11.2666 0.974976 11.525 1.02081 11.775 1.11248C12.025 1.20414 12.2416 1.34998 12.425 1.54998L20.45 9.57498C20.65 9.75831 20.7958 9.97498 20.8875 10.225C20.9791 10.475 21.025 10.7333 21.025 11C21.025 11.2666 20.9791 11.5208 20.8875 11.7625C20.7958 12.0041 20.65 12.225 20.45 12.425L12.425 20.45C12.2416 20.6333 12.025 20.775 11.775 20.875C11.525 20.975 11.2666 21.025 11 21.025ZM11 19.025L19.025 11L11 2.97498L2.97498 11L11 19.025ZM9.99998 12H12V5.99998H9.99998V12ZM11 15C11.2833 15 11.5208 14.9041 11.7125 14.7125C11.9041 14.5208 12 14.2833 12 14C12 13.7166 11.9041 13.4791 11.7125 13.2875C11.5208 13.0958 11.2833 13 11 13C10.7166 13 10.4791 13.0958 10.2875 13.2875C10.0958 13.4791 9.99998 13.7166 9.99998 14C9.99998 14.2833 10.0958 14.5208 10.2875 14.7125C10.4791 14.9041 10.7166 15 11 15Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  error: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14C11 13.7167 10.9042 13.4792 10.7125 13.2875C10.5208 13.0958 10.2833 13 10 13C9.71667 13 9.47917 13.0958 9.2875 13.2875C9.09583 13.4792 9 13.7167 9 14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM9 11H11V5H9V11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.5208 6.90417 10.7125 6.7125C10.9042 6.52083 11 6.28333 11 6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6C9 6.28333 9.09583 6.52083 9.2875 6.7125C9.47917 6.90417 9.71667 7 10 7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
  <path d="M1.725 18C1.54167 18 1.375 17.9542 1.225 17.8625C1.075 17.7708 0.958337 17.65 0.875003 17.5C0.79167 17.35 0.745837 17.1875 0.737503 17.0125C0.72917 16.8375 0.775003 16.6667 0.875003 16.5L10.125 0.5C10.225 0.333333 10.3542 0.208333 10.5125 0.125C10.6708 0.0416667 10.8333 0 11 0C11.1667 0 11.3292 0.0416667 11.4875 0.125C11.6458 0.208333 11.775 0.333333 11.875 0.5L21.125 16.5C21.225 16.6667 21.2708 16.8375 21.2625 17.0125C21.2542 17.1875 21.2083 17.35 21.125 17.5C21.0417 17.65 20.925 17.7708 20.775 17.8625C20.625 17.9542 20.4583 18 20.275 18H1.725ZM3.45 16H18.55L11 3L3.45 16ZM11 15C11.2833 15 11.5208 14.9042 11.7125 14.7125C11.9042 14.5208 12 14.2833 12 14C12 13.7167 11.9042 13.4792 11.7125 13.2875C11.5208 13.0958 11.2833 13 11 13C10.7167 13 10.4792 13.0958 10.2875 13.2875C10.0958 13.4792 10 13.7167 10 14C10 14.2833 10.0958 14.5208 10.2875 14.7125C10.4792 14.9042 10.7167 15 11 15ZM11 12C11.2833 12 11.5208 11.9042 11.7125 11.7125C11.9042 11.5208 12 11.2833 12 11V8C12 7.71667 11.9042 7.47917 11.7125 7.2875C11.5208 7.09583 11.2833 7 11 7C10.7167 7 10.4792 7.09583 10.2875 7.2875C10.0958 7.47917 10 7.71667 10 8V11C10 11.2833 10.0958 11.5208 10.2875 11.7125C10.4792 11.9042 10.7167 12 11 12Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  // *** Social *** //
  social_facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M10.0367 0C4.49365 0 0 4.49365 0 10.0367C0 14.7436 3.24066 18.6932 7.61226 19.778V13.104H5.54269V10.0367H7.61226V8.7151C7.61226 5.29899 9.15832 3.7156 12.5122 3.7156C13.1481 3.7156 14.2453 3.84046 14.6942 3.96491V6.74509C14.4573 6.7202 14.0458 6.70775 13.5347 6.70775C11.8891 6.70775 11.2532 7.33123 11.2532 8.95196V10.0367H14.5316L13.9683 13.104H11.2532V20C16.223 19.3998 20.0739 15.1683 20.0739 10.0367C20.0735 4.49365 15.5798 0 10.0367 0Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_flickr: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M19.0909 0H0.909091C0.407014 0 0 0.407014 0 0.909091V19.0909C0 19.593 0.407014 20 0.909091 20H19.0909C19.593 20 20 19.593 20 19.0909V0.909091C20 0.407014 19.593 0 19.0909 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M6.36364 12.7273C7.86987 12.7273 9.09091 11.5062 9.09091 10C9.09091 8.49377 7.86987 7.27273 6.36364 7.27273C4.85741 7.27273 3.63636 8.49377 3.63636 10C3.63636 11.5062 4.85741 12.7273 6.36364 12.7273Z" fill="white"/>
  <path d="M13.6364 12.7273C15.1426 12.7273 16.3636 11.5062 16.3636 10C16.3636 8.49377 15.1426 7.27273 13.6364 7.27273C12.1301 7.27273 10.9091 8.49377 10.9091 10C10.9091 11.5062 12.1301 12.7273 13.6364 12.7273Z" fill="white"/>
  </svg>`,
  social_google_play: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M3.1202 0.508333L14.0372 6.79667L11.6972 9.14083L3.1202 0.508333ZM0.85845 0L10.8795 10L0.859282 20C0.349369 19.7742 0 19.2717 0 18.6875C0 18.6683 0 18.6492 0.000831831 18.6308V18.6333V1.3675C0 1.35167 0 1.3325 0 1.31333C0 0.729167 0.349369 0.226667 0.850132 0.00416667L0.859282 0.000833333L0.85845 0ZM17.4302 8.82833C17.7746 9.08417 17.995 9.49083 17.995 9.94833C17.995 9.96667 17.995 9.98417 17.9942 10.0025V10C17.9975 10.0358 18 10.0783 18 10.1208C18 10.5508 17.792 10.9325 17.471 11.1692L17.4676 11.1717L15.1277 12.4992L12.5939 10L15.1285 7.46083L17.4302 8.82833ZM3.1202 19.4917L11.698 10.8592L14.038 13.2033L3.1202 19.4917Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.002 1.80113C12.6744 1.80113 12.9908 1.81285 14.0418 1.85974C15.0186 1.90272 15.546 2.06681 15.8976 2.20356C16.3626 2.38328 16.6986 2.60207 17.0463 2.9498C17.3979 3.30143 17.6128 3.63352 17.7925 4.09846C17.9293 4.45009 18.0934 4.98144 18.1364 5.95429C18.1832 7.00918 18.195 7.32565 18.195 9.99414C18.195 12.6665 18.1832 12.983 18.1364 14.034C18.0934 15.0107 17.9293 15.5382 17.7925 15.8898C17.6128 16.3548 17.394 16.6908 17.0463 17.0385C16.6947 17.3901 16.3626 17.605 15.8976 17.7847C15.546 17.9215 15.0147 18.0856 14.0418 18.1285C12.9869 18.1754 12.6704 18.1871 10.002 18.1871C7.32956 18.1871 7.01309 18.1754 5.9621 18.1285C4.98535 18.0856 4.4579 17.9215 4.10627 17.7847C3.64134 17.605 3.30533 17.3862 2.95761 17.0385C2.60598 16.6869 2.39109 16.3548 2.21137 15.8898C2.07462 15.5382 1.91053 15.0068 1.86755 14.034C1.82067 12.9791 1.80895 12.6626 1.80895 9.99414C1.80895 7.32174 1.82067 7.00527 1.86755 5.95429C1.91053 4.97753 2.07462 4.45009 2.21137 4.09846C2.39109 3.63352 2.60988 3.29752 2.95761 2.9498C3.30924 2.59816 3.64134 2.38328 4.10627 2.20356C4.4579 2.06681 4.98926 1.90272 5.9621 1.85974C7.01309 1.81285 7.32956 1.80113 10.002 1.80113ZM10.002 0C7.28658 0 6.94667 0.011721 5.88006 0.0586052C4.81735 0.105489 4.08674 0.277398 3.4538 0.52354C2.79351 0.781403 2.23481 1.12131 1.68002 1.68002C1.12131 2.23481 0.781403 2.79351 0.52354 3.44989C0.277398 4.08674 0.105489 4.81344 0.0586052 5.87615C0.011721 6.94667 0 7.28658 0 10.002C0 12.7173 0.011721 13.0572 0.0586052 14.1239C0.105489 15.1866 0.277398 15.9172 0.52354 16.5501C0.781403 17.2104 1.12131 17.7691 1.68002 18.3239C2.23481 18.8787 2.79351 19.2225 3.44989 19.4765C4.08674 19.7226 4.81344 19.8945 5.87615 19.9414C6.94276 19.9883 7.28267 20 9.99805 20C12.7134 20 13.0533 19.9883 14.1199 19.9414C15.1827 19.8945 15.9133 19.7226 16.5462 19.4765C17.2026 19.2225 17.7613 18.8787 18.3161 18.3239C18.8709 17.7691 19.2147 17.2104 19.4686 16.554C19.7148 15.9172 19.8867 15.1905 19.9336 14.1278C19.9805 13.0611 19.9922 12.7212 19.9922 10.0059C19.9922 7.29049 19.9805 6.95058 19.9336 5.88396C19.8867 4.82125 19.7148 4.09064 19.4686 3.45771C19.2225 2.79351 18.8826 2.23481 18.3239 1.68002C17.7691 1.12522 17.2104 0.781403 16.554 0.527447C15.9172 0.281305 15.1905 0.109396 14.1278 0.0625122C13.0572 0.011721 12.7173 0 10.002 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M10.002 4.86423C7.16546 4.86423 4.86423 7.16546 4.86423 10.002C4.86423 12.8384 7.16546 15.1397 10.002 15.1397C12.8384 15.1397 15.1397 12.8384 15.1397 10.002C15.1397 7.16546 12.8384 4.86423 10.002 4.86423ZM10.002 13.3346C8.16175 13.3346 6.66927 11.8422 6.66927 10.002C6.66927 8.16175 8.16175 6.66927 10.002 6.66927C11.8422 6.66927 13.3346 8.16175 13.3346 10.002C13.3346 11.8422 11.8422 13.3346 10.002 13.3346Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M16.5423 4.66103C16.5423 5.32522 16.0031 5.86048 15.3428 5.86048C14.6786 5.86048 14.1434 5.32131 14.1434 4.66103C14.1434 3.99683 14.6826 3.46157 15.3428 3.46157C16.0031 3.46157 16.5423 4.00074 16.5423 4.66103Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_pinterest: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0C4.47656 0 0 4.47656 0 10C0 14.2383 2.63672 17.8555 6.35547 19.3125C6.26953 18.5195 6.1875 17.3086 6.39062 16.4453C6.57422 15.6641 7.5625 11.4766 7.5625 11.4766C7.5625 11.4766 7.26172 10.8789 7.26172 9.99219C7.26172 8.60156 8.06641 7.5625 9.07031 7.5625C9.92187 7.5625 10.3359 8.20312 10.3359 8.97266C10.3359 9.83203 9.78906 11.1133 9.50781 12.3008C9.27344 13.2969 10.0078 14.1094 10.9883 14.1094C12.7656 14.1094 14.1328 12.2344 14.1328 9.53125C14.1328 7.13672 12.4141 5.46094 9.95703 5.46094C7.11328 5.46094 5.44141 7.59375 5.44141 9.80078C5.44141 10.6602 5.77344 11.582 6.1875 12.082C6.26953 12.1797 6.28125 12.2695 6.25781 12.3672C6.18359 12.6836 6.01172 13.3633 5.98047 13.5C5.9375 13.6836 5.83594 13.7227 5.64453 13.6328C4.39453 13.0508 3.61328 11.2266 3.61328 9.75781C3.61328 6.60156 5.90625 3.70703 10.2188 3.70703C13.6875 3.70703 16.3828 6.17969 16.3828 9.48438C16.3828 12.9297 14.2109 15.7031 11.1953 15.7031C10.1836 15.7031 9.23047 15.1758 8.90234 14.5547C8.90234 14.5547 8.40234 16.4648 8.28125 16.9336C8.05469 17.8008 7.44531 18.8906 7.03906 19.5547C7.97656 19.8438 8.96875 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_rss: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M0 6.79688V10.6172C2.49219 10.6172 4.85156 11.6016 6.61719 13.3672C8.38281 15.1328 9.35938 17.4922 9.35938 19.9922V20H13.1953C13.1953 16.3594 11.7109 13.0703 9.32031 10.6719C6.9375 8.28125 3.64062 6.80469 0 6.79688Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M2.65625 14.6797C1.92188 14.6797 1.26562 14.9766 0.78125 15.4609C0.296875 15.9453 0 16.6016 0 17.3359C0 18.0625 0.296875 18.7188 0.78125 19.2031C1.26562 19.6797 1.92188 19.9766 2.65625 19.9766C3.39062 19.9766 4.04688 19.6875 4.53125 19.2031C5.01562 18.7188 5.3125 18.0625 5.3125 17.3359C5.3125 16.6016 5.01562 15.9453 4.53125 15.4609C4.04688 14.9766 3.39062 14.6797 2.65625 14.6797Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M14.1328 5.86719C10.5156 2.24219 5.52344 0 0.0078125 0V3.82031C8.92188 3.82812 16.1641 11.0859 16.1719 20H20C20 14.4844 17.7578 9.49219 14.1328 5.86719Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_snapchat: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M17.581 13.7331C14.4839 12.2334 13.9903 9.91793 13.9683 9.74618C13.9417 9.53815 13.9116 9.37458 14.141 9.16297C14.3623 8.95851 15.3439 8.35076 15.6162 8.16061C16.0664 7.84574 16.2647 7.53139 16.1185 7.14496C16.0163 6.87763 15.7675 6.77694 15.5053 6.77694C15.4227 6.77719 15.3402 6.78645 15.2596 6.80454C14.7649 6.91188 14.2846 7.15979 14.0066 7.22675C13.9732 7.23536 13.9389 7.23999 13.9044 7.24055C13.7562 7.24055 13.7 7.17461 13.7143 6.99622C13.7491 6.45543 13.8226 5.39991 13.7373 4.41391C13.6203 3.05733 13.1829 2.38517 12.6642 1.79071C12.4133 1.50242 11.2483 0.263916 8.99989 0.263916C6.75152 0.263916 5.58799 1.50242 5.33862 1.78713C4.81843 2.38159 4.38153 3.05375 4.26554 4.41033C4.1802 5.39633 4.25685 6.45134 4.28853 6.99264C4.29875 7.16234 4.24663 7.23697 4.09844 7.23697C4.06395 7.23638 4.02965 7.23175 3.99624 7.22317C3.71877 7.15621 3.23844 6.9083 2.7438 6.80096C2.66311 6.78287 2.5807 6.77361 2.49801 6.77336C2.23485 6.77336 1.98702 6.87559 1.88482 7.14139C1.73867 7.52781 1.93592 7.84217 2.38764 8.15703C2.66 8.34718 3.64161 8.95442 3.86287 9.15939C4.0918 9.371 4.06216 9.53457 4.03559 9.74261C4.01362 9.91691 3.51949 12.2324 0.422867 13.7295C0.241464 13.8175 -0.0671757 14.0035 0.477032 14.3041C1.33141 14.7764 1.90015 14.7258 2.34216 15.0105C2.71723 15.2522 2.49546 15.7736 2.76833 15.9617C3.10354 16.1933 4.09435 15.9454 5.37439 16.3681C6.44748 16.7218 7.0995 17.7211 9.00244 17.7211C10.9054 17.7211 11.5763 16.7172 12.6305 16.3681C13.908 15.9454 14.9008 16.1933 15.2366 15.9617C15.5089 15.7736 15.2877 15.2522 15.6627 15.0105C16.1047 14.7258 16.673 14.7764 17.5279 14.3041C18.071 14.0071 17.7624 13.821 17.581 13.7331Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_soundcloud: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="9" viewBox="0 0 20 9" fill="none">
  <path d="M0.966096 4.67021C0.923344 4.67021 0.888366 4.70539 0.882843 4.75393L0.68627 6.61519L0.882843 8.43512C0.888366 8.48366 0.923344 8.51905 0.966096 8.51905C1.00823 8.51905 1.04239 8.48429 1.04914 8.43533L1.27292 6.61498L1.04914 4.75372C1.04239 4.70433 1.00823 4.67021 0.966096 4.67021Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M0.226643 5.38326C0.185119 5.38326 0.151982 5.41632 0.146459 5.46444L0 6.61519L0.146459 7.74645C0.151777 7.79435 0.184914 7.82741 0.226643 7.82741C0.267144 7.82741 0.300077 7.79435 0.306622 7.74687L0.479877 6.61519L0.306622 5.46338C0.300077 5.41632 0.267144 5.38326 0.226643 5.38326Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M1.75178 4.3052C1.699 4.3052 1.65687 4.34802 1.65155 4.40695L1.46479 6.61519L1.65155 8.74268C1.65687 8.80181 1.699 8.84442 1.75178 8.84442C1.80353 8.84442 1.84567 8.80181 1.8518 8.74289L2.06372 6.61498L1.8518 4.40674C1.84567 4.34802 1.80353 4.3052 1.75178 4.3052Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M2.544 4.2272C2.48182 4.2272 2.4313 4.2785 2.42639 4.34675L2.25006 6.61583L2.42639 8.8105C2.4313 8.87833 2.48182 8.92984 2.544 8.92984C2.60516 8.92984 2.65548 8.87833 2.66121 8.8105L2.86147 6.61583L2.66121 4.34633C2.65548 4.2785 2.60516 4.2272 2.544 4.2272Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M3.47655 4.51017C3.47164 4.43281 3.41355 4.37367 3.34237 4.37367C3.27016 4.37367 3.21248 4.4326 3.20798 4.51081L3.04147 6.61561L3.20798 8.82873C3.21248 8.90652 3.27037 8.96566 3.34237 8.96566C3.41376 8.96566 3.47164 8.90674 3.47655 8.82895L3.66535 6.61561L3.47655 4.51017Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M4.14748 3.03702C4.06648 3.03702 4.0002 3.10528 3.99611 3.19239L3.83984 6.61668L3.99611 8.82958C4.00041 8.91564 4.06668 8.9841 4.14748 8.9841C4.22767 8.9841 4.29394 8.91585 4.29885 8.82895V8.82979L4.47558 6.61689L4.29885 3.19239C4.29374 3.10528 4.22746 3.03702 4.14748 3.03702Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M4.94625 2.2483C4.85564 2.2483 4.78179 2.32419 4.7777 2.42106C4.7777 2.42148 4.63145 6.62855 4.63145 6.62855L4.77791 8.82767C4.782 8.92412 4.85564 9 4.94625 9C5.03626 9 5.11071 8.92412 5.1146 8.82725V8.82852L5.28008 6.62855L5.1146 2.42106C5.11071 2.32419 5.03626 2.2483 4.94625 2.2483Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M5.77673 1.86804C5.6763 1.86804 5.59468 1.95198 5.5912 2.05881L5.45518 6.61773L5.5912 8.79418C5.59489 8.90017 5.6763 8.98389 5.77673 8.98389C5.87655 8.98389 5.95817 8.90017 5.96226 8.79355V8.79482L6.11588 6.61795L5.96226 2.05881C5.95796 1.95198 5.87655 1.86804 5.77673 1.86804Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M6.80337 1.90556C6.7999 1.78855 6.71092 1.69677 6.60107 1.69677C6.49041 1.69677 6.40143 1.78877 6.39836 1.90556L6.27236 6.61773L6.39857 8.78062C6.40164 8.89635 6.49041 8.98792 6.60107 8.98792C6.71092 8.98792 6.8001 8.89635 6.80337 8.77998L6.94533 6.61837L6.80337 1.90556Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M7.43176 1.8C7.31107 1.8 7.21473 1.89941 7.21186 2.02638L7.09609 6.61858L7.21227 8.76048C7.21493 8.88618 7.31107 8.98601 7.43176 8.98601C7.55162 8.98601 7.64797 8.88596 7.65124 8.75921V8.7609L7.78174 6.61816L7.65124 2.02574C7.64797 1.89899 7.55162 1.8 7.43176 1.8Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M8.26898 1.94986C8.13889 1.94986 8.03457 2.05732 8.03211 2.19425L7.92636 6.61858L8.03211 8.74776C8.03457 8.88342 8.13889 8.99046 8.26898 8.99046C8.39888 8.99046 8.50299 8.88342 8.50545 8.74628V8.74797L8.62409 6.61922L8.50545 2.19447C8.50299 2.05732 8.39888 1.94986 8.26898 1.94986Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M9.25288 1.13676C9.21278 1.10857 9.16431 1.09204 9.11255 1.09204C9.06223 1.09204 9.01539 1.10794 8.97591 1.13464C8.90657 1.18149 8.86014 1.26225 8.85891 1.35424L8.85809 1.40384L8.76277 6.61773C8.76277 6.6207 8.85891 8.73399 8.85891 8.73399C8.85891 8.73738 8.85932 8.73971 8.85952 8.74289C8.86239 8.80181 8.88387 8.85608 8.91844 8.89911C8.96528 8.95697 9.03503 8.99428 9.11255 8.99428C9.18149 8.99428 9.24429 8.96481 9.2901 8.91733C9.33613 8.87007 9.36518 8.80478 9.3664 8.73229L9.47338 6.61901L9.36661 1.35403C9.36497 1.26352 9.31997 1.18382 9.25288 1.13676Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M10.0903 0.637589C10.0502 0.612153 10.0028 0.597315 9.95265 0.597315C9.88801 0.597315 9.82848 0.621479 9.78164 0.661329C9.7215 0.712836 9.68264 0.790415 9.68141 0.87732L9.6808 0.906147L9.57034 6.61986L9.68141 8.70389C9.68366 8.85587 9.80496 8.98177 9.95265 8.98177C10.0997 8.98177 10.221 8.85587 10.2231 8.70198V8.70452L10.3437 6.62007L10.2235 0.876896C10.222 0.775365 10.1684 0.686552 10.0903 0.637589Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M17.5399 3.90141C17.2032 3.90141 16.8812 3.97221 16.5887 4.09918C16.3925 1.80212 14.5336 0 12.2659 0C11.7108 0 11.1701 0.113189 10.6923 0.304593C10.5068 0.379204 10.4577 0.455511 10.4558 0.60431V8.69456C10.4577 8.85036 10.5743 8.97181 10.7213 8.98686C10.7277 8.98771 17.5403 8.98686 17.5403 8.98686C18.8989 8.98686 20 7.85836 20 6.45028C19.9998 5.04263 18.8987 3.90141 17.5399 3.90141Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_tiktok: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
  <path d="M14.883 4.27729C14.7506 4.20752 14.6217 4.13104 14.4968 4.04813C14.1337 3.80333 13.8007 3.51489 13.5051 3.18901C12.7655 2.32613 12.4893 1.45076 12.3876 0.837875H12.3917C12.3067 0.32915 12.3418 0 12.3471 0H8.97851V13.2818C8.97851 13.4602 8.97851 13.6364 8.97116 13.8106C8.97116 13.8322 8.96911 13.8522 8.96789 13.8756C8.96789 13.8851 8.96789 13.8951 8.96584 13.9051C8.96584 13.9076 8.96584 13.9101 8.96584 13.9126C8.93034 14.3892 8.78052 14.8495 8.52957 15.2532C8.27862 15.6568 7.93424 15.9914 7.52671 16.2275C7.10197 16.4739 6.62159 16.6032 6.13293 16.6025C4.56344 16.6025 3.29143 15.2976 3.29143 13.686C3.29143 12.0744 4.56344 10.7695 6.13293 10.7695C6.43002 10.7692 6.72529 10.8169 7.00777 10.9107L7.01185 7.41338C6.15432 7.30043 5.28314 7.36992 4.45327 7.61747C3.62339 7.86502 2.85284 8.28524 2.19021 8.85164C1.6096 9.36603 1.12148 9.97979 0.747808 10.6653C0.605611 10.9153 0.0691014 11.9198 0.00413184 13.5502C-0.0367295 14.4755 0.235816 15.4342 0.365755 15.8305V15.8388C0.447477 16.0721 0.764153 16.8683 1.28023 17.5395C1.69638 18.078 2.18804 18.5509 2.73939 18.9432V18.9349L2.74756 18.9432C4.37834 20.0732 6.18645 19.999 6.18645 19.999C6.49945 19.9861 7.54795 19.999 8.73865 19.4236C10.0593 18.7857 10.8111 17.8354 10.8111 17.8354C11.2915 17.2675 11.6734 16.6204 11.9405 15.9217C12.2454 15.1047 12.3471 14.1247 12.3471 13.7331V6.68675C12.388 6.71175 12.9323 7.07881 12.9323 7.07881C12.9323 7.07881 13.7164 7.59129 14.9398 7.92502C15.8175 8.16251 17 8.21251 17 8.21251V4.80268C16.5857 4.84851 15.7443 4.71518 14.883 4.27729Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_tumblr: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M8.16675 20C5.16675 20 2.91675 18.4583 2.91675 14.75V8.83333H0.166748V5.625C3.16675 4.83333 4.41675 2.25 4.58342 0H7.70842V5.08333H11.3334V8.83333H7.70842V14C7.70842 15.5417 8.50008 16.0833 9.75008 16.0833H11.5001V20H8.16675Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_vimeo: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
  <path d="M19.8881 1.69862C19.5362 0.229472 17.8797 -0.185772 16.2069 0.0712117C15.3489 0.204969 12.4525 1.49916 11.4656 4.60025C13.2117 4.46356 14.1279 4.72713 13.9598 6.67303C13.8886 7.48846 13.4838 8.38049 13.0286 9.23624C12.5054 10.2241 11.5212 12.1601 10.2329 10.7655C9.0727 9.50732 9.16169 7.10527 8.89749 5.5037C8.74774 4.60315 8.59141 3.48589 8.30044 2.56221C8.05194 1.76626 7.47709 0.809563 6.77407 0.599948C6.01998 0.377956 5.08804 0.727832 4.54143 1.05518C2.83909 2.06578 1.56386 3.45811 0.102263 4.65849C-0.0821777 4.84616 0.0270352 5.00379 0.0891308 5.14342C0.299039 5.47202 0.380141 5.67144 0.780407 5.73002C1.81954 5.88433 2.8077 4.74937 3.4963 5.93241C3.9175 6.65239 4.0489 7.44205 4.31772 8.21766C4.67544 9.25684 4.95332 10.3843 5.2476 11.5768C5.74663 13.592 6.35542 16.6046 8.0787 17.3458C8.95631 17.7212 10.276 17.218 10.9437 16.8167C12.7553 15.7305 14.2286 14.2052 15.375 12.5542C18.3584 8.26088 19.7887 3.94699 19.9442 3.12531C20.0548 2.52978 19.9823 2.0383 19.8881 1.69862Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_x: `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
  <path d="M17.4256 0H20.8185L13.4062 8.47179L22.1262 20H15.2985L9.95077 13.0082L3.83179 20H0.436923L8.36513 10.9385L0 0H7.00103L11.8349 6.39077L17.4256 0ZM16.2349 17.9692H18.1149L5.97949 1.9241H3.96205L16.2349 17.9692Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
  <path d="M19.8008 3.03516C19.8008 3.03516 19.6055 1.65625 19.0039 1.05078C18.2422 0.253906 17.3906 0.25 17 0.203125C14.2031 -1.11759e-07 10.0039 0 10.0039 0H9.99609C9.99609 0 5.79688 -1.11759e-07 3 0.203125C2.60938 0.25 1.75781 0.253906 0.996094 1.05078C0.394531 1.65625 0.203125 3.03516 0.203125 3.03516C0.203125 3.03516 0 4.65625 0 6.27344V7.78906C0 9.40625 0.199219 11.0273 0.199219 11.0273C0.199219 11.0273 0.394531 12.4062 0.992187 13.0117C1.75391 13.8086 2.75391 13.7812 3.19922 13.8672C4.80078 14.0195 10 14.0664 10 14.0664C10 14.0664 14.2031 14.0586 17 13.8594C17.3906 13.8125 18.2422 13.8086 19.0039 13.0117C19.6055 12.4062 19.8008 11.0273 19.8008 11.0273C19.8008 11.0273 20 9.41016 20 7.78906V6.27344C20 4.65625 19.8008 3.03516 19.8008 3.03516ZM7.93359 9.62891V4.00781L13.3359 6.82812L7.93359 9.62891Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Filled *** //
  account_balance_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M3.22502 15.875V11.65C3.22502 11.2666 3.36252 10.9416 3.63752 10.675C3.91252 10.4083 4.24169 10.275 4.62502 10.275C5.00836 10.275 5.33336 10.4083 5.60002 10.675C5.86669 10.9416 6.00002 11.2666 6.00002 11.65V15.9C6.00002 16.2833 5.86669 16.6083 5.60002 16.875C5.33336 17.1416 5.00836 17.275 4.62502 17.275C4.24169 17.275 3.91252 17.1375 3.63752 16.8625C3.36252 16.5875 3.22502 16.2583 3.22502 15.875ZM9.62502 15.9V11.65C9.62502 11.2666 9.75836 10.9416 10.025 10.675C10.2917 10.4083 10.6167 10.275 11 10.275C11.3834 10.275 11.7084 10.4083 11.975 10.675C12.2417 10.9416 12.375 11.2666 12.375 11.65V15.9C12.375 16.2833 12.2417 16.6083 11.975 16.875C11.7084 17.1416 11.3834 17.275 11 17.275C10.6167 17.275 10.2917 17.1416 10.025 16.875C9.75836 16.6083 9.62502 16.2833 9.62502 15.9ZM1.72502 21.65C1.29169 21.65 0.920858 21.4958 0.612524 21.1875C0.304191 20.8791 0.150024 20.5083 0.150024 20.075C0.150024 19.6416 0.304191 19.2708 0.612524 18.9625C0.920858 18.6541 1.29169 18.5 1.72502 18.5H20.275C20.7084 18.5 21.0792 18.6541 21.3875 18.9625C21.6959 19.2708 21.85 19.6416 21.85 20.075C21.85 20.5083 21.6959 20.8791 21.3875 21.1875C21.0792 21.4958 20.7084 21.65 20.275 21.65H1.72502ZM16 15.875V11.65C16 11.2666 16.1375 10.9416 16.4125 10.675C16.6875 10.4083 17.0167 10.275 17.4 10.275C17.7834 10.275 18.1084 10.4083 18.375 10.675C18.6417 10.9416 18.775 11.2666 18.775 11.65V15.9C18.775 16.2833 18.6417 16.6083 18.375 16.875C18.1084 17.1416 17.7834 17.275 17.4 17.275C17.0167 17.275 16.6875 17.1375 16.4125 16.8625C16.1375 16.5875 16 16.2583 16 15.875ZM20.175 9.02495H1.65002C1.23336 9.02495 0.879191 8.87912 0.587524 8.58745C0.295858 8.29578 0.150024 7.94162 0.150024 7.52495V6.57495C0.150024 6.29162 0.225024 6.02912 0.375024 5.78745C0.525024 5.54578 0.725024 5.35828 0.975024 5.22495L9.60002 0.924951C10.0334 0.691618 10.5 0.574951 11 0.574951C11.5 0.574951 11.9667 0.691618 12.4 0.924951L20.925 5.17495C21.2084 5.30828 21.4334 5.51245 21.6 5.78745C21.7667 6.06245 21.85 6.36662 21.85 6.69995V7.32495C21.85 7.79162 21.6875 8.19162 21.3625 8.52495C21.0375 8.85828 20.6417 9.02495 20.175 9.02495Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  cancel_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M10.9242 12.3032L13.8242 15.2032C14.0075 15.3866 14.2408 15.4782 14.5242 15.4782C14.8075 15.4782 15.0408 15.3866 15.2242 15.2032C15.4075 15.0199 15.4992 14.7866 15.4992 14.5032C15.4992 14.2199 15.4075 13.9866 15.2242 13.8032L12.3242 10.9032L15.2242 8.00324C15.4075 7.81991 15.4992 7.58658 15.4992 7.30324C15.4992 7.01991 15.4075 6.78658 15.2242 6.60324C15.0408 6.41991 14.8075 6.32824 14.5242 6.32824C14.2408 6.32824 14.0075 6.41991 13.8242 6.60324L10.9242 9.50324L8.02416 6.60324C7.84083 6.41991 7.6075 6.32824 7.32416 6.32824C7.04083 6.32824 6.8075 6.41991 6.62416 6.60324C6.44083 6.78658 6.34916 7.01991 6.34916 7.30324C6.34916 7.58658 6.44083 7.81991 6.62416 8.00324L9.52416 10.9032L6.62416 13.8032C6.44083 13.9866 6.34916 14.2199 6.34916 14.5032C6.34916 14.7866 6.44083 15.0199 6.62416 15.2032C6.8075 15.3866 7.04083 15.4782 7.32416 15.4782C7.6075 15.4782 7.84083 15.3866 8.02416 15.2032L10.9242 12.3032ZM10.9242 20.9032C9.54083 20.9032 8.24083 20.6407 7.02416 20.1157C5.8075 19.5907 4.74916 18.8782 3.84916 17.9782C2.94916 17.0782 2.23666 16.0199 1.71166 14.8032C1.18666 13.5866 0.924164 12.2866 0.924164 10.9032C0.924164 9.51991 1.18666 8.21991 1.71166 7.00324C2.23666 5.78658 2.94916 4.72824 3.84916 3.82824C4.74916 2.92824 5.8075 2.21574 7.02416 1.69074C8.24083 1.16574 9.54083 0.903244 10.9242 0.903244C12.3075 0.903244 13.6075 1.16574 14.8242 1.69074C16.0408 2.21574 17.0992 2.92824 17.9992 3.82824C18.8992 4.72824 19.6117 5.78658 20.1367 7.00324C20.6617 8.21991 20.9242 9.51991 20.9242 10.9032C20.9242 12.2866 20.6617 13.5866 20.1367 14.8032C19.6117 16.0199 18.8992 17.0782 17.9992 17.9782C17.0992 18.8782 16.0408 19.5907 14.8242 20.1157C13.6075 20.6407 12.3075 20.9032 10.9242 20.9032Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  language_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 21.8499C9.51669 21.8499 8.11669 21.5624 6.80002 20.9874C5.48336 20.4124 4.33336 19.6332 3.35002 18.6499C2.36669 17.6666 1.58752 16.5166 1.01252 15.1999C0.437524 13.8832 0.150024 12.4832 0.150024 10.9999C0.150024 9.51657 0.437524 8.11657 1.01252 6.7999C1.58752 5.48324 2.36669 4.33324 3.35002 3.3499C4.33336 2.36657 5.48336 1.5874 6.80002 1.0124C8.11669 0.437402 9.51669 0.149902 11 0.149902C12.4834 0.149902 13.8834 0.437402 15.2 1.0124C16.5167 1.5874 17.6667 2.36657 18.65 3.3499C19.6334 4.33324 20.4125 5.48324 20.9875 6.7999C21.5625 8.11657 21.85 9.51657 21.85 10.9999C21.85 12.4832 21.5625 13.8832 20.9875 15.1999C20.4125 16.5166 19.6334 17.6666 18.65 18.6499C17.6667 19.6332 16.5167 20.4124 15.2 20.9874C13.8834 21.5624 12.4834 21.8499 11 21.8499ZM10.95 18.6749C11.3167 18.1082 11.6584 17.5041 11.975 16.8624C12.2917 16.2207 12.55 15.5499 12.75 14.8499H9.22502C9.42502 15.5499 9.67086 16.2207 9.96252 16.8624C10.2542 17.5041 10.5834 18.1082 10.95 18.6749ZM8.47502 18.2749C8.14169 17.7582 7.87919 17.2041 7.68752 16.6124C7.49586 16.0207 7.32502 15.4332 7.17502 14.8499H4.37502C4.80836 15.6499 5.37502 16.3499 6.07502 16.9499C6.77502 17.5499 7.57502 17.9916 8.47502 18.2749ZM13.45 18.2749C14.35 17.9916 15.1584 17.5499 15.875 16.9499C16.5917 16.3499 17.1667 15.6499 17.6 14.8499H14.8C14.65 15.4332 14.4709 16.0207 14.2625 16.6124C14.0542 17.2041 13.7834 17.7582 13.45 18.2749ZM3.55002 12.9249H6.77502C6.72502 12.5916 6.68752 12.2707 6.66252 11.9624C6.63752 11.6541 6.62502 11.3332 6.62502 10.9999C6.62502 10.6499 6.63752 10.3249 6.66252 10.0249C6.68752 9.7249 6.72502 9.40824 6.77502 9.0749H3.55002C3.46669 9.39157 3.40419 9.70407 3.36252 10.0124C3.32086 10.3207 3.30002 10.6499 3.30002 10.9999C3.30002 11.3332 3.32086 11.6582 3.36252 11.9749C3.40419 12.2916 3.46669 12.6082 3.55002 12.9249ZM8.77502 12.9249H13.2C13.25 12.5916 13.2792 12.2707 13.2875 11.9624C13.2959 11.6541 13.3 11.3332 13.3 10.9999C13.3 10.6499 13.2959 10.3249 13.2875 10.0249C13.2792 9.7249 13.25 9.40824 13.2 9.0749H8.77502C8.72502 9.40824 8.68752 9.7249 8.66252 10.0249C8.63752 10.3249 8.62502 10.6499 8.62502 10.9999C8.62502 11.3332 8.63752 11.6541 8.66252 11.9624C8.68752 12.2707 8.72502 12.5916 8.77502 12.9249ZM15.2 12.9249H18.4C18.4834 12.6082 18.5459 12.2916 18.5875 11.9749C18.6292 11.6582 18.65 11.3332 18.65 10.9999C18.65 10.6499 18.6292 10.3207 18.5875 10.0124C18.5459 9.70407 18.4834 9.39157 18.4 9.0749H15.2C15.2334 9.40824 15.2584 9.7249 15.275 10.0249C15.2917 10.3249 15.3 10.6499 15.3 10.9999C15.3 11.3332 15.2917 11.6541 15.275 11.9624C15.2584 12.2707 15.2334 12.5916 15.2 12.9249ZM14.8 7.1249H17.6C17.1667 6.3249 16.5917 5.62907 15.875 5.0374C15.1584 4.44574 14.35 4.00824 13.45 3.7249C13.7834 4.24157 14.0542 4.79157 14.2625 5.3749C14.4709 5.95824 14.65 6.54157 14.8 7.1249ZM9.22502 7.1249H12.75C12.5667 6.4249 12.3167 5.75824 12 5.1249C11.6834 4.49157 11.3334 3.89157 10.95 3.3249C10.5834 3.89157 10.2542 4.49157 9.96252 5.1249C9.67086 5.75824 9.42502 6.4249 9.22502 7.1249ZM4.37502 7.1249H7.17502C7.32502 6.54157 7.49586 5.95824 7.68752 5.3749C7.87919 4.79157 8.14169 4.24157 8.47502 3.7249C7.57502 4.00824 6.77502 4.44574 6.07502 5.0374C5.37502 5.62907 4.80836 6.3249 4.37502 7.1249Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  lock_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
  <path d="M3.30002 22.7751C2.43369 22.7751 1.69211 22.4667 1.07527 21.8498C0.458441 21.2328 0.150024 20.4913 0.150024 19.6251V10.2251C0.150024 9.35893 0.458441 8.61735 1.07527 8.00035C1.69211 7.38351 2.43369 7.0751 3.30002 7.0751H3.62502V5.8001C3.62502 4.28343 4.14586 2.99593 5.18752 1.9376C6.22919 0.879264 7.50002 0.350098 9.00002 0.350098C10.5 0.350098 11.7709 0.879264 12.8125 1.9376C13.8542 2.99593 14.375 4.28343 14.375 5.8001V7.0751H14.7C15.5662 7.0751 16.3078 7.38351 16.9248 8.00035C17.5416 8.61735 17.85 9.35893 17.85 10.2251V19.6251C17.85 20.4913 17.5416 21.2328 16.9248 21.8498C16.3078 22.4667 15.5662 22.7751 14.7 22.7751H3.30002ZM9.00002 16.9251C9.55002 16.9251 10.0209 16.7293 10.4125 16.3376C10.8042 15.9459 11 15.4751 11 14.9251C11 14.3751 10.8042 13.9043 10.4125 13.5126C10.0209 13.1209 9.55002 12.9251 9.00002 12.9251C8.45002 12.9251 7.97919 13.1209 7.58752 13.5126C7.19586 13.9043 7.00002 14.3751 7.00002 14.9251C7.00002 15.4751 7.19586 15.9459 7.58752 16.3376C7.97919 16.7293 8.45002 16.9251 9.00002 16.9251ZM6.77502 7.0751H11.225V5.8001C11.225 5.16126 11.0125 4.61818 10.5875 4.17085C10.1625 3.72368 9.63336 3.5001 9.00002 3.5001C8.36669 3.5001 7.83752 3.72368 7.41252 4.17085C6.98752 4.61818 6.77502 5.16126 6.77502 5.8001V7.0751Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`
}, G0 = v`
  :host {
    display: inline-block;
    --_nys-icon-size: 0.7em; /* If cap isn't supported, a fallback value of 0.7em is used, as it closely approximates the height of capital letters in most fonts. */
    box-sizing: content-box !important;
  }

  /* Use 'cap' if supported */
  @supports (font-size: 1cap) {
    :host {
      --_nys-icon-size: 1cap;
    }
  }

  /* SVG size and color is initially determined by the parent's font-size and text-color */
  .nys-icon--svg {
    width: var(--_nys-icon-size, 1em);
    height: var(--_nys-icon-size, 1em);
    display: block;
    white-space: nowrap;
  }

  /* Relative Sizes */
  .nys-icon--2xs {
    width: calc(var(--_nys-icon-size) * 0.75);
    height: calc(var(--_nys-icon-size) * 0.75);
  }
  .nys-icon--xs {
    width: calc(var(--_nys-icon-size) * 0.875);
    height: calc(var(--_nys-icon-size) * 0.875);
  }
  .nys-icon--sm {
    width: var(--_nys-icon-size);
    height: var(--_nys-icon-size);
  }
  .nys-icon--md {
    width: calc(var(--_nys-icon-size) * 1.125);
    height: calc(var(--_nys-icon-size) * 1.125);
  }
  .nys-icon--lg {
    width: calc(var(--_nys-icon-size) * 1.25);
    height: calc(var(--_nys-icon-size) * 1.25);
  }
  .nys-icon--xl {
    width: calc(var(--_nys-icon-size) * 1.5);
    height: calc(var(--_nys-icon-size) * 1.5);
  }
  .nys-icon--2xl {
    width: calc(var(--_nys-icon-size) * 1.875);
    height: calc(var(--_nys-icon-size) * 1.875);
  }
  .nys-icon--3xl {
    width: calc(var(--_nys-icon-size) * 2.25);
    height: calc(var(--_nys-icon-size) * 2.25);
  }
  .nys-icon--4xl {
    width: calc(var(--_nys-icon-size) * 3);
    height: calc(var(--_nys-icon-size) * 3);
  }

  /* Literal Sizing */
  .nys-icon--12 {
    width: 0.75rem;
    height: 0.75rem;
  }
  .nys-icon--16 {
    width: 1rem;
    height: 1rem;
  }
  .nys-icon--24 {
    width: 1.5rem;
    height: 1.5rem;
  }
  .nys-icon--32 {
    width: 2rem;
    height: 2rem;
  }
  .nys-icon--48 {
    width: 3rem;
    height: 3rem;
  }
  .nys-icon--64 {
    width: 4rem;
    height: 4rem;
  }

  /* Flipping Icons */
  .nys-icon--flip-horizontal {
    transform: scaleX(-1);
  }
  .nys-icon--flip-vertical {
    transform: scaleY(-1);
  }
  .nys-icon--flip-both {
    transform: scale(-1, -1);
  }
`;
var W0 = Object.defineProperty, Y0 = Object.getOwnPropertyDescriptor, K1 = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? Y0(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && W0(t, e, r), r;
}, a5;
const $1 = (a5 = class extends p {
  constructor() {
    super(...arguments), this.name = "", this.label = "", this.rotate = "0", this.flip = "", this.color = "", this._size = "sm";
  }
  get size() {
    return this._size;
  }
  set size(s) {
    this._size = a5.VALID_TYPES.includes(
      s
    ) ? s : "sm";
  }
  getIcon() {
    const s = F0[this.name], t = !!this.label;
    if (!s) return null;
    const e = new DOMParser().parseFromString(s, "image/svg+xml").documentElement;
    return e instanceof SVGElement ? (e.setAttribute("role", "img"), e.setAttribute("aria-label", t ? this.label : ""), e.setAttribute("aria-hidden", t ? "false" : "true"), e.style.rotate = `${this.rotate}deg`, e.style.color = this.color || "currentcolor", e.classList.add(`nys-icon--${this.size}`), e.classList.add("nys-icon--svg"), this.flip && e.classList.add(`nys-icon--flip-${this.flip}`), e) : null;
  }
  render() {
    const s = this.getIcon();
    return s ? c`${s}` : null;
  }
}, a5.styles = G0, a5.VALID_TYPES = [
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "12",
  "16",
  "24",
  "32",
  "48",
  "64"
], a5);
K1([
  Y1({ type: String, reflect: !0 })
], $1.prototype, "name", 2);
K1([
  Y1({ type: String })
], $1.prototype, "label", 2);
K1([
  Y1({ type: String })
], $1.prototype, "rotate", 2);
K1([
  Y1({ type: String })
], $1.prototype, "flip", 2);
K1([
  Y1({ type: String })
], $1.prototype, "color", 2);
K1([
  Y1({ reflect: !0 })
], $1.prototype, "size", 1);
let K0 = $1;
customElements.get("nys-icon") || customElements.define("nys-icon", K0);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e2 = globalThis, s2 = e2.trustedTypes, V7 = s2 ? s2.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, E3 = "$lit$", a1 = `lit$${Math.random().toFixed(9).slice(2)}$`, k3 = "?" + a1, J0 = `<${k3}>`, _1 = document, o2 = () => _1.createComment(""), A5 = (s) => s === null || typeof s != "object" && typeof s != "function", O2 = Array.isArray, X0 = (s) => O2(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function", $2 = `[ 	
\f\r]`, C5 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, H7 = /-->/g, S7 = />/g, v1 = RegExp(`>|${$2}(?:([^\\s"'>=/]+)(${$2}*=${$2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), E7 = /'/g, k7 = /"/g, A3 = /^(?:script|style|textarea|title)$/i, P5 = Symbol.for("lit-noChange"), $ = Symbol.for("lit-nothing"), A7 = /* @__PURE__ */ new WeakMap(), f1 = _1.createTreeWalker(_1, 129);
function P3(s, t) {
  if (!O2(s) || !s.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return V7 !== void 0 ? V7.createHTML(t) : t;
}
const Q0 = (s, t) => {
  const e = s.length - 1, o = [];
  let r, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", i = C5;
  for (let l = 0; l < e; l++) {
    const C = s[l];
    let u, d, h = -1, _ = 0;
    for (; _ < C.length && (i.lastIndex = _, d = i.exec(C), d !== null); ) _ = i.lastIndex, i === C5 ? d[1] === "!--" ? i = H7 : d[1] !== void 0 ? i = S7 : d[2] !== void 0 ? (A3.test(d[2]) && (r = RegExp("</" + d[2], "g")), i = v1) : d[3] !== void 0 && (i = v1) : i === v1 ? d[0] === ">" ? (i = r ?? C5, h = -1) : d[1] === void 0 ? h = -2 : (h = i.lastIndex - d[2].length, u = d[1], i = d[3] === void 0 ? v1 : d[3] === '"' ? k7 : E7) : i === k7 || i === E7 ? i = v1 : i === H7 || i === S7 ? i = C5 : (i = v1, r = void 0);
    const L = i === v1 && s[l + 1].startsWith("/>") ? " " : "";
    n += i === C5 ? C + J0 : h >= 0 ? (o.push(u), C.slice(0, h) + E3 + C.slice(h) + a1 + L) : C + a1 + (h === -2 ? l : L);
  }
  return [P3(s, n + (s[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), o];
};
let Z2 = class z3 {
  constructor({ strings: t, _$litType$: e }, o) {
    let r;
    this.parts = [];
    let n = 0, i = 0;
    const l = t.length - 1, C = this.parts, [u, d] = Q0(t, e);
    if (this.el = z3.createElement(u, o), f1.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (r = f1.nextNode()) !== null && C.length < l; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const h of r.getAttributeNames()) if (h.endsWith(E3)) {
          const _ = d[i++], L = r.getAttribute(h).split(a1), J = /([.?@])?(.*)/.exec(_);
          C.push({ type: 1, index: n, name: J[2], strings: L, ctor: J[1] === "." ? e8 : J[1] === "?" ? s8 : J[1] === "@" ? o8 : y2 }), r.removeAttribute(h);
        } else h.startsWith(a1) && (C.push({ type: 6, index: n }), r.removeAttribute(h));
        if (A3.test(r.tagName)) {
          const h = r.textContent.split(a1), _ = h.length - 1;
          if (_ > 0) {
            r.textContent = s2 ? s2.emptyScript : "";
            for (let L = 0; L < _; L++) r.append(h[L], o2()), f1.nextNode(), C.push({ type: 2, index: ++n });
            r.append(h[_], o2());
          }
        }
      } else if (r.nodeType === 8) if (r.data === k3) C.push({ type: 2, index: n });
      else {
        let h = -1;
        for (; (h = r.data.indexOf(a1, h + 1)) !== -1; ) C.push({ type: 7, index: n }), h += a1.length - 1;
      }
      n++;
    }
  }
  static createElement(t, e) {
    const o = _1.createElement("template");
    return o.innerHTML = t, o;
  }
};
function z1(s, t, e = s, o) {
  var r, n;
  if (t === P5) return t;
  let i = o !== void 0 ? (r = e._$Co) == null ? void 0 : r[o] : e._$Cl;
  const l = A5(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== l && ((n = i == null ? void 0 : i._$AO) == null || n.call(i, !1), l === void 0 ? i = void 0 : (i = new l(s), i._$AT(s, e, o)), o !== void 0 ? (e._$Co ?? (e._$Co = []))[o] = i : e._$Cl = i), i !== void 0 && (t = z1(s, i._$AS(s, t.values), i, o)), t;
}
let t8 = class {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: o } = this._$AD, r = ((t == null ? void 0 : t.creationScope) ?? _1).importNode(e, !0);
    f1.currentNode = r;
    let n = f1.nextNode(), i = 0, l = 0, C = o[0];
    for (; C !== void 0; ) {
      if (i === C.index) {
        let u;
        C.type === 2 ? u = new B3(n, n.nextSibling, this, t) : C.type === 1 ? u = new C.ctor(n, C.name, C.strings, this, t) : C.type === 6 && (u = new r8(n, this, t)), this._$AV.push(u), C = o[++l];
      }
      i !== (C == null ? void 0 : C.index) && (n = f1.nextNode(), i++);
    }
    return f1.currentNode = _1, r;
  }
  p(t) {
    let e = 0;
    for (const o of this._$AV) o !== void 0 && (o.strings !== void 0 ? (o._$AI(t, o, e), e += o.strings.length - 2) : o._$AI(t[e])), e++;
  }
}, B3 = class U3 {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, o, r) {
    this.type = 2, this._$AH = $, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = o, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = z1(this, t, e), A5(t) ? t === $ || t == null || t === "" ? (this._$AH !== $ && this._$AR(), this._$AH = $) : t !== this._$AH && t !== P5 && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : X0(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== $ && A5(this._$AH) ? this._$AA.nextSibling.data = t : this.T(_1.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var e;
    const { values: o, _$litType$: r } = t, n = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = Z2.createElement(P3(r.h, r.h[0]), this.options)), r);
    if (((e = this._$AH) == null ? void 0 : e._$AD) === n) this._$AH.p(o);
    else {
      const i = new t8(n, this), l = i.u(this.options);
      i.p(o), this.T(l), this._$AH = i;
    }
  }
  _$AC(t) {
    let e = A7.get(t.strings);
    return e === void 0 && A7.set(t.strings, e = new Z2(t)), e;
  }
  k(t) {
    O2(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let o, r = 0;
    for (const n of t) r === e.length ? e.push(o = new U3(this.O(o2()), this.O(o2()), this, this.options)) : o = e[r], o._$AI(n), r++;
    r < e.length && (this._$AR(o && o._$AB.nextSibling, r), e.length = r);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var o;
    for ((o = this._$AP) == null ? void 0 : o.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const r = t.nextSibling;
      t.remove(), t = r;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}, y2 = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, o, r, n) {
    this.type = 1, this._$AH = $, this._$AN = void 0, this.element = t, this.name = e, this._$AM = r, this.options = n, o.length > 2 || o[0] !== "" || o[1] !== "" ? (this._$AH = Array(o.length - 1).fill(new String()), this.strings = o) : this._$AH = $;
  }
  _$AI(t, e = this, o, r) {
    const n = this.strings;
    let i = !1;
    if (n === void 0) t = z1(this, t, e, 0), i = !A5(t) || t !== this._$AH && t !== P5, i && (this._$AH = t);
    else {
      const l = t;
      let C, u;
      for (t = n[0], C = 0; C < n.length - 1; C++) u = z1(this, l[o + C], e, C), u === P5 && (u = this._$AH[C]), i || (i = !A5(u) || u !== this._$AH[C]), u === $ ? t = $ : t !== $ && (t += (u ?? "") + n[C + 1]), this._$AH[C] = u;
    }
    i && !r && this.j(t);
  }
  j(t) {
    t === $ ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}, e8 = class extends y2 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === $ ? void 0 : t;
  }
}, s8 = class extends y2 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== $);
  }
}, o8 = class extends y2 {
  constructor(t, e, o, r, n) {
    super(t, e, o, r, n), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = z1(this, t, e, 0) ?? $) === P5) return;
    const o = this._$AH, r = t === $ && o !== $ || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive, n = t !== $ && (o === $ || r);
    r && this.element.removeEventListener(this.name, this, o), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}, r8 = class {
  constructor(t, e, o) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = o;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    z1(this, t);
  }
};
const P7 = e2.litHtmlPolyfillSupport;
P7 == null || P7(Z2, B3), (e2.litHtmlVersions ?? (e2.litHtmlVersions = [])).push("3.2.1");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i1 = (s) => s ?? $;
var n8 = Object.defineProperty, i8 = Object.getOwnPropertyDescriptor, k = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? i8(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && n8(t, e, r), r;
};
let l8 = 0;
var j;
const H = (j = class extends p {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this._size = "md", this.fullWidth = !1, this._variant = "filled", this.inverted = !1, this.label = "", this.prefixIcon = "", this.suffixIcon = "", this.disabled = !1, this.form = "", this.value = "", this._type = "button", this.onClick = () => {
    }, this.href = "", this._internals = this.attachInternals();
  }
  get size() {
    return this._size;
  }
  set size(s) {
    this._size = j.VALID_SIZES.includes(
      s
    ) ? s : "md";
  }
  get variant() {
    return this._variant;
  }
  set variant(s) {
    this._variant = j.VALID_VARIANTS.includes(
      s
    ) ? s : "filled";
  }
  get type() {
    return this._type;
  }
  set type(s) {
    this._type = j.VALID_TYPES.includes(
      s
    ) ? s : "button";
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = this._generateUniqueId());
  }
  /******************** Functions ********************/
  _generateUniqueId() {
    return `nys-button-${Date.now()}-${l8++}`;
  }
  _manageFormAction(s) {
    typeof this.onClick == "function" && this.onClick(s);
    const t = this._internals.form;
    if (t)
      switch (this.type) {
        case "submit":
          t.requestSubmit();
          break;
        case "reset":
          t.reset();
          break;
      }
  }
  /******************** Event Handlers ********************/
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(new Event("focus"));
  }
  // Handle blur event
  _handleBlur() {
    this.dispatchEvent(new Event("blur"));
  }
  _handleClick(s) {
    if (this.disabled) {
      s.preventDefault();
      return;
    }
    this._manageFormAction(s);
  }
  // Handle keydown for keyboard accessibility
  _handleKeydown(s) {
    (s.code === "Space" || s.code === "Enter") && (s.preventDefault(), this.disabled || this._manageFormAction(s));
  }
  render() {
    return c`
      ${this.href ? c`
            <div class="nys-button__linkwrapper">
              <a
                class="nys-button"
                id=${i1(this.id)}
                name=${i1(this.name ? this.name : void 0)}
                ?disabled=${this.disabled}
                aria-disabled="${this.disabled ? "true" : "false"}"
                form=${i1(this.form ? this.form : void 0)}
                value=${i1(this.value ? this.value : void 0)}
                href=${this.href}
                target="_blank"
                @click=${this._handleClick}
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
              >
                ${this.prefixIcon && this.variant !== "text" ? c`<slot name="prefix-icon">
                      <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                    </slot>` : ""}
                ${this.label ? c`<label class="nys-button__text">${this.label}</label>` : ""}
                ${this.suffixIcon && this.variant !== "text" ? c`<slot name="suffix-icon">
                      <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                    </slot>` : ""}
              </a>
            </div>
          ` : c`
            <button
              class="nys-button"
              id=${i1(this.id)}
              name=${i1(this.name ? this.name : void 0)}
              ?disabled=${this.disabled}
              form=${i1(this.form ? this.form : void 0)}
              value=${i1(this.value ? this.value : void 0)}
              type=${this.type}
              @click=${this._handleClick}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @keydown="${this._handleKeydown}"
            >
              ${this.prefixIcon && this.variant !== "text" ? c`<slot name="prefix-icon">
                    <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                  </slot>` : ""}
              ${this.label ? c`<label class="nys-button__text">${this.label}</label>` : ""}
              ${this.suffixIcon && this.variant !== "text" ? c`<slot name="suffix-icon">
                    <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                  </slot>` : ""}
            </button>
          `}
    `;
  }
}, j.VALID_SIZES = ["sm", "md", "lg"], j.VALID_VARIANTS = [
  "filled",
  "outline",
  "ghost",
  "text"
], j.VALID_TYPES = ["submit", "reset", "button"], j.styles = A0, j.formAssociated = !0, j);
k([
  E({ type: String })
], H.prototype, "id", 2);
k([
  E({ type: String, reflect: !0 })
], H.prototype, "name", 2);
k([
  E({ reflect: !0 })
], H.prototype, "size", 1);
k([
  E({ type: Boolean, reflect: !0 })
], H.prototype, "fullWidth", 2);
k([
  E({ reflect: !0 })
], H.prototype, "variant", 1);
k([
  E({ type: Boolean, reflect: !0 })
], H.prototype, "inverted", 2);
k([
  E({ type: String })
], H.prototype, "label", 2);
k([
  E({ type: String })
], H.prototype, "prefixIcon", 2);
k([
  E({ type: String })
], H.prototype, "suffixIcon", 2);
k([
  E({ type: Boolean, reflect: !0 })
], H.prototype, "disabled", 2);
k([
  E({ type: String })
], H.prototype, "form", 2);
k([
  E({ type: String })
], H.prototype, "value", 2);
k([
  E({ reflect: !0 })
], H.prototype, "type", 1);
k([
  E({ type: Function })
], H.prototype, "onClick", 2);
k([
  E({ type: String })
], H.prototype, "href", 2);
let a8 = H;
customElements.get("nys-button") || customElements.define("nys-button", a8);
var C8 = Object.defineProperty, c8 = Object.getOwnPropertyDescriptor, B = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? c8(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && C8(t, e, r), r;
};
let h8 = 0;
var c1;
const P = (c1 = class extends p {
  constructor() {
    super(...arguments), this.id = "", this.heading = "", this.icon = "", this.dismissible = !1, this.duration = 0, this.text = "", this.primaryAction = "", this.secondaryAction = "", this.primaryLabel = "Learn more", this.secondaryLabel = "Dismiss", this._alertClosed = !1, this._slotHasContent = !0, this._type = "info", this._timeoutId = null;
  }
  get type() {
    return this._type;
  }
  set type(t) {
    this._type = c1.VALID_TYPES.includes(
      t
    ) ? t : "base";
  }
  // Aria attributes based on the type
  get ariaAttributes() {
    const t = this.type === "danger" || this.type === "emergency" ? "alert" : this.type === "success" ? "status" : "region", e = t === "region" ? `${this.type} alert` : "";
    return { role: t, ariaLabel: e };
  }
  // For alerts that have durations, we set a timer to close them.
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
  /******************** Functions ********************/
  _generateUniqueId() {
    return `nys-alert-${Date.now()}-${h8++}`;
  }
  // Helper function for overriding default icons or checking special naming cases (e.g. type=success)
  _getIconName() {
    return this.icon ? this.icon : this._checkAltNaming();
  }
  _checkAltNaming() {
    return this.type === "success" ? "check_circle" : this.type === "base" ? "info" : this.type === "danger" ? "error" : this.type === "emergency" ? "emergency_home" : this.type;
  }
  _closeAlert() {
    this._alertClosed = !0, this.dispatchEvent(
      new CustomEvent("nys-alertClosed", {
        detail: { type: this.type, label: this.heading },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _checkSlotContent() {
    var e;
    const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("slot");
    if (t) {
      const o = t.assignedNodes({ flatten: !0 }).filter(
        (r) => {
          var n;
          return r.nodeType === Node.ELEMENT_NODE || r.nodeType === Node.TEXT_NODE && ((n = r.textContent) == null ? void 0 : n.trim());
        }
      );
      this._slotHasContent = o.length > 0;
    } else
      this._slotHasContent = !1;
  }
  render() {
    var o, r;
    const { role: t, ariaLabel: e } = this.ariaAttributes;
    return c`
      ${this._alertClosed ? "" : c` <div
            id=${this.id}
            class="nys-alert__container ${this._slotHasContent || ((o = this.text) == null ? void 0 : o.trim().length) > 0 ? "" : "nys-alert--centered"}"
            role=${t}
            aria-label=${g(
      e.trim() !== "" ? e : void 0
    )}
          >
            <div part="nys-alert__icon" class="nys-alert__icon">
              <nys-icon
                name="${this._getIconName()}"
                size="2xl"
                label="${this.type} icon"
              ></nys-icon>
            </div>
            <div class="nys-alert__texts">
              <h4 class="nys-alert__header">${this.heading}</h4>
              ${this._slotHasContent ? c`<slot></slot>` : ((r = this.text) == null ? void 0 : r.trim().length) > 0 ? c`<p class="nys-alert__text">${this.text}</p>` : ""}
              ${this.primaryAction || this.secondaryAction ? c`<div class="nys-alert__actions">
                    ${this.primaryAction ? c`<a
                          href=${g(this.primaryAction || void 0)}
                          class="nys-alert__action nys-alert__primary"
                        >
                          ${this.primaryLabel}
                        </a>` : ""}
                    ${this.secondaryAction ? c`<a
                          href=${g(this.secondaryAction || void 0)}
                          class="nys-alert__action nys-alert__secondary"
                        >
                          ${this.secondaryLabel}
                        </a>` : ""}
                  </div> ` : ""}
            </div>
            ${this.dismissible && this.type !== "emergency" ? c`<div class="close-container">
                  <nys-button
                    id="dismiss-btn"
                    variant="ghost"
                    prefixIcon="close"
                    size="sm"
                    @click=${this._closeAlert}
                  ></nys-button>
                </div>` : this.dismissible && this.type === "emergency" ? c`<div class="close-container">
                    <nys-button
                      id="dismiss-btn"
                      variant="ghost"
                      prefixIcon="close"
                      size="sm"
                      inverted
                      @click=${this._closeAlert}
                    ></nys-button>
                  </div>` : ""}
          </div>`}
    `;
  }
}, c1.styles = o0, c1.VALID_TYPES = [
  "base",
  "info",
  "success",
  "warning",
  "danger",
  "emergency"
], c1);
B([
  a({ type: String })
], P.prototype, "id", 2);
B([
  a({ type: String })
], P.prototype, "heading", 2);
B([
  a({ type: String })
], P.prototype, "icon", 2);
B([
  a({ type: Boolean, reflect: !0 })
], P.prototype, "dismissible", 2);
B([
  a({ type: Number, reflect: !0 })
], P.prototype, "duration", 2);
B([
  a({ type: String })
], P.prototype, "text", 2);
B([
  a({ type: String })
], P.prototype, "primaryAction", 2);
B([
  a({ type: String })
], P.prototype, "secondaryAction", 2);
B([
  a({ type: String })
], P.prototype, "primaryLabel", 2);
B([
  a({ type: String })
], P.prototype, "secondaryLabel", 2);
B([
  x1()
], P.prototype, "_alertClosed", 2);
B([
  x1()
], P.prototype, "_slotHasContent", 2);
B([
  a({ reflect: !0 })
], P.prototype, "type", 1);
let d8 = P;
customElements.get("nys-alert") || customElements.define("nys-alert", d8);
const p8 = v`
  :host {
    /* Global Avatar Styles */
    --_nys-avatar-shape: var(--nys-radius-round, 1776px);
    --_nys-avatar-border: var(--nys-font-size-6xl, 36px);
    --_nys-avatar-size: var(--nys-font-size-6xl, 36px);
  }

  .nys-avatar {
    display: inline-block;
  }

  .nys-component__component {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--_nys-avatar-shape);
    width: var(--_nys-avatar-size);
    height: var(--_nys-avatar-size);
    font-size: var(--_nys-avatar-size);
    overflow: hidden;
    box-sizing: border-box;
    color: white;
  }

  /* Shape */
  :host([shape="square"]) {
    --_nys-avatar-shape: var(--nys-radius-xs, var(--nys-space-1px, 1px));
  }

  :host([shape="rounded"]) {
    --_nys-avatar-shape: var(--nys-radius-md, var(--nys-space-50, 4px));
  }

  :host([shape="circle"]) {
    --_nys-avatar-shape: var(--nys-radius-round, 1776px);
  }

  div[part="nys-avatar__icon"] {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Content styles */
  .nys-avatar__initials {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: calc(var(--_nys-avatar-size) * 0.5);
    font-weight: bold;
    text-transform: uppercase;
  }

  .nys-avatar__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .nys-avatar__icon {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`;
var u8 = Object.defineProperty, v8 = Object.getOwnPropertyDescriptor, u1 = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? v8(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && u8(t, e, r), r;
};
let y8 = 0;
var h1;
const o1 = (h1 = class extends p {
  constructor() {
    super(...arguments), this.id = "", this.label = "", this.image = "", this.initials = "", this.icon = "", this.color = "#555", this.lazy = !1, this._shape = "circle";
  }
  get shape() {
    return this._shape;
  }
  // Setter for the `shape` property.
  set shape(t) {
    this._shape = h1.VALID_SHAPES.includes(
      t
    ) ? t : "circle", this.requestUpdate("shape");
  }
  /******************** Functions ********************/
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-avatar-${Date.now()}-${y8++}`);
  }
  render() {
    var t, e, o, r;
    return c`
      <label class="nys-avatar" id=${this.id}>
        <div class="nys-avatar__content">
          <div
            part="nys-avatar"
            class="nys-component__component"
            style="background-color: ${((t = this.color) == null ? void 0 : t.length) > 0 ? this.color : "#555"};"
            role=${g(this.image ? void 0 : "img")}
            aria-label=${g(this.image ? void 0 : this.label)}
          >
            ${((e = this.image) == null ? void 0 : e.length) > 0 ? c`<img
                  part="nys-avatar__image"
                  class="nys-avatar__image"
                  src=${this.image}
                  alt=${this.label}
                  loading=${this.lazy ? "lazy" : "eager"}
                />` : ((o = this.initials) == null ? void 0 : o.length) > 0 ? c`<span
                    part="nys-avatar__initials"
                    class="nys-avatar__initials"
                    aria-hidden="true"
                    >${this.initials}</span
                  >` : ((r = this.icon) == null ? void 0 : r.length) > 0 ? c`<div part="nys-avatar__icon">
                      <nys-icon
                        label="nys-avatar__icon"
                        name=${this.icon}
                        size="md"
                      ></nys-icon>
                    </div>` : c`<div part="nys-avatar__icon">
                      <slot>
                        <nys-icon
                          label="nys-avatar__icon"
                          name="account_circle"
                          size="md"
                        ></nys-icon>
                      </slot>
                    </div>`}
          </div>
        </div>
      </label>
    `;
  }
}, h1.styles = p8, h1.VALID_SHAPES = [
  "square",
  "rounded",
  "circle"
], h1);
u1([
  a({ type: String })
], o1.prototype, "id", 2);
u1([
  a({ type: String })
], o1.prototype, "label", 2);
u1([
  a({ type: String })
], o1.prototype, "image", 2);
u1([
  a({ type: String })
], o1.prototype, "initials", 2);
u1([
  a({ type: String })
], o1.prototype, "icon", 2);
u1([
  a({ type: String })
], o1.prototype, "color", 2);
u1([
  a({ type: Boolean, reflect: !0 })
], o1.prototype, "lazy", 2);
u1([
  a({ reflect: !0 })
], o1.prototype, "shape", 1);
let g8 = o1;
customElements.get("nys-avatar") || customElements.define("nys-avatar", g8);
const f8 = v`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Button Styles */
    --_nys-button-width: fit-content;
    --_nys-button-height: var(--nys-size-600, 48px);
    --_nys-button-radius: var(--nys-border-radius-xl, 12px);
    --_nys-button-padding-y: var(--nys-space-150, 12px);
    --_nys-button-padding-x: var(--nys-space-250, 20px);
    --_nys-button-gap: var(--nys-space-100, 8px);
    --_nys-button-width-border: var(--nys-border-width-md, 2px);
    --_nys-button-width-focus: var(--nys-border-width-md, 2px);
    --_nys-button-offset-focus: var(--nys-space-2px, 2px);
    --_nys-button-color-focus: var(--nys-color-focus, #004dd1);

    /* Global Button Colors */
    --_nys-button-color-bg: var(--nys-color-theme, #154973);
    --_nys-button-color-text: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-theme, #154973);

    --_nys-button-color-bg-hover: var(--nys-color-theme-strong, #0e324f);
    --_nys-button-color-text-hover: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border-hover: var(--nys-color-theme-strong, #0e324f);

    --_nys-button-color-bg-active: var(--nys-color-theme-stronger, #081b2b);
    --_nys-button-color-text-active: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border-active: var(--nys-color-theme-stronger, #081b2b);

    --_nys-button-color-bg-disabled: var(--nys-color-neutral-10, #f6f6f6);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-color-border-disabled: var(--nys-color-neutral-10, #f6f6f6);

    /* Typography */
    --_nys-button-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-button-font-weight: var(--nys-font-weight-semibold, 600);
    --_nys-button-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-button-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
  }

  /* Sizes */
  :host([size="sm"]) {
    --_nys-button-height: var(--nys-size-500, 40px);
    --_nys-button-padding-y: var(--nys-space-100, 8px);
    --_nys-button-padding-x: var(--nys-space-200, 16px);
  }
  :host([size="md"]) {
    --_nys-button-height: var(--nys-size-600, 48px);
    --_nys-button-padding-y: var(--nys-space-150, 12px);
    --_nys-button-padding-x: var(--nys-space-250, 20px);
  }
  :host([size="lg"]) {
    --_nys-button-height: var(--nys-size-700, 56px);
    --_nys-button-padding-y: var(--nys-space-200, 16px);
    --_nys-button-padding-x: var(--nys-space-300, 24px);
  }
  :host([fullWidth]) {
    --_nys-button-width: 100%;
  }

  /* VARIANTS */

  /* Filled */
  :host([variant="filled"]) {
    /* Filled - Default */
    --_nys-button-color-bg: var(--nys-color-theme, #154973);
    --_nys-button-color-text: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Filled - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-theme-strong, #0e324f);
    --_nys-button-color-text-hover: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Filled - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-theme-stronger, #081b2b);
    --_nys-button-color-text-active: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Filled - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-neutral-10, #f6f6f6);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);
  }

  /* Outline */
  :host([variant="outline"]) {
    /* Outline - Default */
    --_nys-button-color-bg: var(--nys-color-surface, #ffffff);
    --_nys-button-color-text: var(--nys-color-theme, #154973);
    --_nys-button-color-border: var(--nys-color-theme, #154973);

    /* Outline - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-theme-weaker, #eff6fb);
    --_nys-button-color-text-hover: var(--nys-color-theme, #154973);
    --_nys-button-color-border-hover: var(--nys-color-theme, #154973);

    /* Outline - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-theme-weak, #cddde9);
    --_nys-button-color-text-active: var(--nys-color-theme, #154973);
    --_nys-button-color-border-active: var(--nys-color-theme, #154973);

    /* Outline - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-surface, #ffffff);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-color-border-disabled: var(--nys-color-neutral-100, #d0d0ce);
  }

  /* Text */
  :host([variant="text"]) {
    --_nys-button-height: fit-content;
    --_nys-button-radius: var(--nys-border-radius-md, 4px);
    --_nys-button-padding-y: var(--nys-space-2px, 2px);
    --_nys-button-padding-x: var(--nys-space-50, 4px);
    --_nys-button-width-border: 0px;
    --_nys-button-text-decoration: underline;

    /* Text - Default */
    --_nys-button-color-bg: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text: var(--nys-color-link, #004dd1);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Text - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-hover: var(--nys-color-link-strong, #003ba1);
    --_nys-button-color-border-hover: var(--nys-color-transparent, #ffffff00);

    /* Text - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-active: var(--nys-color-link-strongest, #002971);
    --_nys-button-color-border-active: var(--nys-color-transparent, #ffffff00);

    /* Text - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* Ghost */
  :host([variant="ghost"]) {
    /* Ghost - Default */
    --_nys-button-color-bg: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Ghost - Hover */
    --_nys-button-color-bg-hover: var(
      --nys-color-black-transparent-100,
      #0000001a
    );
    --_nys-button-color-text-hover: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border-hover: var(--nys-color-transparent, #ffffff00);

    /* Ghost - Active */
    --_nys-button-color-bg-active: var(
      --nys-color-black-transparent-200,
      #00000033
    );
    --_nys-button-color-text-active: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border-active: var(--nys-color-transparent, #ffffff00);

    /* Ghost - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #bec0c1);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* INVERTED VARIANTS */

  /* Filled Inverted */
  :host([variant="filled"][inverted]) {
    /* Filled Inverted - Default */
    --_nys-button-color-bg: var(--nys-color-surface, #ffffff);
    --_nys-button-color-text: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );

    /* Filled Inverted - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-neutral-100, #d0d0ce);
    --_nys-button-color-text-hover: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );

    /* Filled Inverted - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-neutral-300, #a7a9ab);
    --_nys-button-color-text-active: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );

    /* Filled Inverted - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-text, #1b1b1b);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #62666a);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* Outline Inverted */
  :host([variant="outline"][inverted]) {
    /* Outline Inverted - Default */
    --_nys-button-color-bg: var(--nys-color-surface-reverse, #1b1b1b);
    --_nys-button-color-text: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-ink-reverse, #ffffff);

    /* Outline Inverted - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-surface-reverse, #1b1b1b);
    --_nys-button-color-text-hover: var(--nys-color-text-reverse-weak, #d0d0ce);
    --_nys-button-color-border-hover: var(--nys-color-neutral-100, #d0d0ce);

    /* Outline Inverted - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-surface-reverse, #1b1b1b);
    --_nys-button-color-text-active: var(
      --nys-color-text-reverse-weaker,
      #bec0c1
    );
    --_nys-button-color-border-active: var(--nys-color-neutral-300, #a7a9ab);

    /* Outline Inverted - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-surface-reverse, #1b1b1b);
    --_nys-button-color-text-disabled: var(
      --nys-color-text-reverse-disabled,
      #62666a
    );
    --_nys-button-color-border-disabled: var(--nys-color-neutral-600, #62666a);
  }

  /* Text Inverted */
  :host([variant="text"][inverted]) {
    --_nys-button-height: fit-content;
    --_nys-button-radius: var(--nys-border-radius-md, 4px);
    --_nys-button-padding-y: var(--nys-space-2px, 2px);
    --_nys-button-padding-x: var(--nys-space-50, 4px);
    --_nys-button-width-border: 0px;
    --_nys-button-text-decoration: underline;

    /* Text Inverted - Default */
    --_nys-button-color-bg: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text: var(--nys-color-link-reverse, #a7a9ab);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Text Inverted - Hover */
    --_nys-button-color-bg-hover: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-hover: var(
      --nys-color-link-reverse-strong,
      #ededed
    );
    --_nys-button-color-border-hover: var(--nys-color-transparent, #ffffff00);

    /* Text Inverted - Pressed/Active */
    --_nys-button-color-bg-active: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-active: var(
      --nys-color-reverse-strongest,
      #ffffff
    );
    --_nys-button-color-border-active: var(--nys-color-transparent, #ffffff00);

    /* Text Inverted - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-disabled: var(
      --nys-color-text-reverse-disabled,
      #62666a
    );
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  /* Ghost Inverted */
  :host([variant="ghost"][inverted]) {
    /* Ghost Inverted - Default */
    --_nys-button-color-bg: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border: var(--nys-color-transparent, #ffffff00);

    /* Ghost Inverted - Hover */
    --_nys-button-color-bg-hover: var(
      --nys-color-white-transparent-100,
      #ffffff1a
    );
    --_nys-button-color-text-hover: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border-hover: var(--nys-color-transparent, #ffffff00);

    /* Ghost Inverted - Pressed/Active */
    --_nys-button-color-bg-active: var(
      --nys-color-white-transparent-200,
      #ffffff33
    );
    --_nys-button-color-text-active: var(--nys-color-text-reverse, #ffffff);
    --_nys-button-color-border-active: var(--nys-color-transparent, #ffffff00);

    /* Ghost Inverted - Disabled */
    --_nys-button-color-bg-disabled: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-text-disabled: var(--nys-color-text-disabled, #62666a);
    --_nys-button-color-border-disabled: var(
      --nys-color-transparent,
      #ffffff00
    );
  }

  .nys-button {
    width: var(--_nys-button-width);
    height: var(--_nys-button-height);
    border-radius: var(--_nys-button-radius);
    padding: var(--_nys-button-padding-y) var(--_nys-button-padding-x);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--_nys-button-gap);
    font-family: var(--_nys-button-font-family);
    font-size: var(--_nys-button-font-size);
    font-weight: var(--_nys-button-font-weight);
    line-height: var(--_nys-button-line-height);
    text-decoration: var(--_nys-button-text-decoration);
    box-sizing: border-box;
    background-color: var(--_nys-button-color-bg);
    color: var(--_nys-button-color-text);
    border: solid var(--_nys-button-width-border)
      var(--_nys-button-color-border);
    cursor: pointer;
  }

  .nys-button:hover {
    background-color: var(--_nys-button-color-bg-hover);
    color: var(--_nys-button-color-text-hover);
    border-color: var(--_nys-button-color-border-hover);
  }

  .nys-button:active {
    background-color: var(--_nys-button-color-bg-active);
    color: var(--_nys-button-color-text-active);
    border-color: var(--_nys-button-color-border-active);
  }

  .nys-button:disabled,
  a[disabled] {
    background-color: var(--_nys-button-color-bg-disabled);
    color: var(--_nys-button-color-text-disabled);
    border-color: var(--_nys-button-color-border-disabled);
    cursor: not-allowed;
  }

  .nys-button__linkwrapper:has([disabled]) {
    cursor: not-allowed;
    width: fit-content;
  }

  /* Remove click functionality from disabled link button */
  a[disabled] {
    pointer-events: none;
  }

  a[disabled]:hover {
    background-color: var(--_nys-button-color-bg-disabled);
    color: var(--_nys-button-color-text-disabled);
    border-color: var(--_nys-button-color-border-disabled);
  }

  .nys-button * {
    cursor: pointer;
  }

  .nys-button:disabled * {
    cursor: not-allowed;
  }

  .nys-button:focus-visible {
    outline-offset: var(--_nys-button-offset-focus);
    outline: solid var(--_nys-button-width-focus) var(--_nys-button-color-focus);
  }

  .nys-button__text {
    display: flex;
    align-items: center;
    user-select: none;
  }
`;
var w8 = Object.defineProperty, _8 = Object.getOwnPropertyDescriptor, A = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? _8(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && w8(t, e, r), r;
};
let b8 = 0;
var z;
const S = (z = class extends p {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this._size = "md", this.fullWidth = !1, this._variant = "filled", this.inverted = !1, this.label = "", this.prefixIcon = "", this.suffixIcon = "", this.disabled = !1, this.form = "", this.value = "", this._type = "button", this.onClick = () => {
    }, this.href = "", this._internals = this.attachInternals();
  }
  get size() {
    return this._size;
  }
  set size(t) {
    this._size = z.VALID_SIZES.includes(
      t
    ) ? t : "md";
  }
  get variant() {
    return this._variant;
  }
  set variant(t) {
    this._variant = z.VALID_VARIANTS.includes(
      t
    ) ? t : "filled";
  }
  get type() {
    return this._type;
  }
  set type(t) {
    this._type = z.VALID_TYPES.includes(
      t
    ) ? t : "button";
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = this._generateUniqueId());
  }
  /******************** Functions ********************/
  _generateUniqueId() {
    return `nys-button-${Date.now()}-${b8++}`;
  }
  _manageFormAction(t) {
    typeof this.onClick == "function" && this.onClick(t);
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
  /******************** Event Handlers ********************/
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(new Event("focus"));
  }
  // Handle blur event
  _handleBlur() {
    this.dispatchEvent(new Event("blur"));
  }
  _handleClick(t) {
    if (this.disabled) {
      t.preventDefault();
      return;
    }
    this._manageFormAction(t);
  }
  // Handle keydown for keyboard accessibility
  _handleKeydown(t) {
    (t.code === "Space" || t.code === "Enter") && (t.preventDefault(), this.disabled || this._manageFormAction(t));
  }
  render() {
    return c`
      ${this.href ? c`
            <div class="nys-button__linkwrapper">
              <a
                class="nys-button"
                id=${g(this.id)}
                name=${g(this.name ? this.name : void 0)}
                ?disabled=${this.disabled}
                aria-disabled="${this.disabled ? "true" : "false"}"
                form=${g(this.form ? this.form : void 0)}
                value=${g(this.value ? this.value : void 0)}
                href=${this.href}
                target="_blank"
                @click=${this._handleClick}
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
              >
                ${this.prefixIcon && this.variant !== "text" ? c`<slot name="prefix-icon">
                      <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                    </slot>` : ""}
                ${this.label ? c`<label class="nys-button__text">${this.label}</label>` : ""}
                ${this.suffixIcon && this.variant !== "text" ? c`<slot name="suffix-icon">
                      <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                    </slot>` : ""}
              </a>
            </div>
          ` : c`
            <button
              class="nys-button"
              id=${g(this.id)}
              name=${g(this.name ? this.name : void 0)}
              ?disabled=${this.disabled}
              form=${g(this.form ? this.form : void 0)}
              value=${g(this.value ? this.value : void 0)}
              type=${this.type}
              @click=${this._handleClick}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @keydown="${this._handleKeydown}"
            >
              ${this.prefixIcon && this.variant !== "text" ? c`<slot name="prefix-icon">
                    <nys-icon size="16" name=${this.prefixIcon}></nys-icon>
                  </slot>` : ""}
              ${this.label ? c`<label class="nys-button__text">${this.label}</label>` : ""}
              ${this.suffixIcon && this.variant !== "text" ? c`<slot name="suffix-icon">
                    <nys-icon size="16" name=${this.suffixIcon}></nys-icon>
                  </slot>` : ""}
            </button>
          `}
    `;
  }
}, z.VALID_SIZES = ["sm", "md", "lg"], z.VALID_VARIANTS = [
  "filled",
  "outline",
  "ghost",
  "text"
], z.VALID_TYPES = ["submit", "reset", "button"], z.styles = f8, z.formAssociated = !0, z);
A([
  a({ type: String })
], S.prototype, "id", 2);
A([
  a({ type: String, reflect: !0 })
], S.prototype, "name", 2);
A([
  a({ reflect: !0 })
], S.prototype, "size", 1);
A([
  a({ type: Boolean, reflect: !0 })
], S.prototype, "fullWidth", 2);
A([
  a({ reflect: !0 })
], S.prototype, "variant", 1);
A([
  a({ type: Boolean, reflect: !0 })
], S.prototype, "inverted", 2);
A([
  a({ type: String })
], S.prototype, "label", 2);
A([
  a({ type: String })
], S.prototype, "prefixIcon", 2);
A([
  a({ type: String })
], S.prototype, "suffixIcon", 2);
A([
  a({ type: Boolean, reflect: !0 })
], S.prototype, "disabled", 2);
A([
  a({ type: String })
], S.prototype, "form", 2);
A([
  a({ type: String })
], S.prototype, "value", 2);
A([
  a({ reflect: !0 })
], S.prototype, "type", 1);
A([
  a({ type: Function })
], S.prototype, "onClick", 2);
A([
  a({ type: String })
], S.prototype, "href", 2);
let m8 = S;
customElements.get("nys-button") || customElements.define("nys-button", m8);
const O3 = v`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Checkbox Styles */
    --_nys-checkbox-size: var(--nys-size-400, 32px);
    --_nys-checkbox-radius: var(--nys-border-radius-md, 4px);
    --_nys-checkbox-width-border: var(--nys-border-width-md, 2px);
    --_nys-checkbox-color-focus: var(--nys-color-focus, #004dd1);
    --_nys-checkbox-width-focus: var(--nys-border-width-md, 2px);
    --_nys-checkbox-offset-focus: var(--nys-space-2px, 2px);
    /* space between checkbox and it's label */
    --_nys-checkbox-gap: var(--nys-space-150, 12px);
    /* space between checkboxes */
    --_nys-checkboxgroup-gap: var(--nys-space-200, 16px);

    /* Typography */
    --_nys-checkbox-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-checkbox-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-checkbox-font-weight-400: var(--nys-font-weight-regular, 400);
    --_nys-checkbox-font-weight-600: var(--nys-font-weight-semibold, 600);
    --_nys-checkbox-line-height: var(--nys-font-lineheight-ui-md, 24px);

    /* Global Checkbox Colors */
    --_nys-checkbox-color: var(
      --nys-color-ink,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-checkbox-required-color: var(
      --nys-color-danger,
      var(--nys-color-red-600, #b52c2c)
    );

    /* Default (Empty) */
    --_nys-checkbox-color-bg: var(--nys-color-ink-reverse, #ffffff);
    --_nys-checkbox-color-border: var(--nys-color-neutral-600, #62666a);
    /* Empty + Hovered */
    --_nys-checkbox-hover-color-bg: var(--nys-color-neutral-100, #d0d0de);
    --_nys-checkbox-hover-color-border: var(--nys-color-neutral-600, #62666a);
    /* Empty + Pressed */
    --_nys-checkbox-pressed-color-bg: var(--nys-color-neutral-200, #bec0c1);
    --_nys-checkbox-pressed-color-border: var(--nys-color-neutral-600, #62666a);
    /* Checked */
    --_nys-checkbox-checked-color-bg: var(--nys-color-theme, #154973);
    --_nys-checkbox-checked-color-border: var(--nys-color-theme, #154973);
    /* Checked + Hovered */
    --_nys-checkbox-checked-hover-color-bg: var(
      --nys-color-theme-strong,
      #0e324f
    );
    --_nys-checkbox-checked-hover-color-border: var(
      --nys-color-theme-strong,
      #0e324f
    );
    /* Checked + Pressed */
    --_nys-checkbox-checked-pressed-color-bg: var(
      --nys-color-theme-stronger,
      #081b2b
    );
    --_nys-checkbox-checked-pressed-color-border: var(
      --nys-color-theme-stronger,
      #081b2b
    );
    /* Disabled */
    --_nys-checkbox-disabled-color-bg: var(--nys-color-ink-reverse, #f0f0f0);
    --_nys-checkbox-disabled-color-border: var(
      --nys-color-neutral-400,
      #757575
    );
    --_nys-checkbox-disabled-color-text: var(
      --nys-color-text-disabled,
      #bec0c1
    );
    /* Disabled Checked */
    --_nys-checkbox-disabled-checked-color-bg: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
    --_nys-checkbox-disabled-checked-color-border: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
  }

  /* Small Variant */
  :host([size="sm"]) {
    --_nys-checkbox-size: var(--nys-size-300, 24px);
    --_nys-checkbox-radius: var(--nys-border-radius-sm, 2px);
    --_nys-checkboxgroup-gap: var(--nys-space-100, 8px);
    --_nys-checkbox-gap: var(--nys-space-100, 8px);
  }
  /* Medium Variant */
  :host([size="md"]) {
    --_nys-checkbox-size: var(--nys-size-400, 32px);
    --_nys-checkbox-radius: var(--nys-border-radius-md, 4px);
  }

  .nys-checkboxgroup {
    display: flex;
    flex-direction: column;
    gap: var(--nys-space-200, 16px);
    font-family: var(--_nys-checkbox-font-family);
    font-size: var(--_nys-checkbox-font-size);
    line-height: var(--_nys-checkbox-line-height);
  }

  .nys-checkboxgroup__content {
    display: flex;
    flex-direction: column;
    gap: var(--_nys-checkboxgroup-gap);
  }

  .nys-checkbox {
    display: flex;
    flex-direction: column;
    font-family: var(--_nys-checkbox-font-family);
    font-size: var(--_nys-checkbox-font-size);
    line-height: var(--_nys-checkbox-line-height);
  }

  /* wraps the single checkbox */
  .nys-checkbox__content {
    display: flex;
    gap: var(--_nys-checkbox-gap);
  }

  /* wraps the native checkbox and it's icon */
  .nys-checkbox__checkboxwrapper {
    position: relative;
    display: inline-block;
    max-height: var(--_nys-checkbox-size);
  }

  .nys-checkbox__icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -35%, 0); /* Centering the icon visually */
    pointer-events: none;
    color: white;
  }

  .nys-checkbox__checkbox {
    appearance: none;
    background-repeat: no-repeat;
    background-position: center;
    outline-offset: var(--_nys-checkbox-offset-focus);
    width: var(--_nys-checkbox-size);
    min-width: var(--_nys-checkbox-size);
    min-height: var(--_nys-checkbox-size);
    height: var(--_nys-checkbox-size);
    max-width: var(--_nys-checkbox-size);
    max-height: var(--_nys-checkbox-size);
    border: solid var(--_nys-checkbox-width-border)
      var(--_nys-checkbox-color-border);
    background-color: var(--_nys-checkbox-color-bg);
    border-radius: var(--_nys-checkbox-radius);
  }

  /* Pointer cursor for unchecked checkbox */
  .nys-checkbox:hover * {
    cursor: pointer;
  }

  /* Checked */
  .nys-checkbox__checkbox:not(:disabled):checked {
    background-color: var(--_nys-checkbox-checked-color-bg);
    border-color: var(--_nys-checkbox-checked-color-border);
  }

  /* Checked + Disabled */
  .nys-checkbox__checkbox:disabled:checked {
    background-color: var(--_nys-checkbox-disabled-checked-color-bg);
    border-color: var(--_nys-checkbox-disabled-checked-color-border);
  }

  /* Disabled */
  .nys-checkbox__checkbox:disabled {
    background-color: var(--_nys-checkbox-disabled-color-bg);
    border-color: var(--_nys-checkbox-disabled-color-border);
    cursor: not-allowed;
  }
  .nys-checkbox__content:has(.nys-checkbox__checkbox:disabled)
    .nys-checkbox__text
    * {
    color: var(--_nys-checkbox-disabled-color-text);
    cursor: not-allowed;
  }

  /* Hover - only allow hover on unchecked */
  .nys-checkbox__checkbox:hover:not(:disabled):not(:checked) {
    background-color: var(--_nys-checkbox-hover-color-bg);
    border-color: var(--_nys-checkbox-hover-color-border);
  }

  /* Pressed - only allow pressed on unchecked */
  .nys-checkbox__checkbox:active:not(:disabled):not(:checked) {
    background-color: var(--_nys-checkbox-pressed-color-bg);
    border-color: var(--_nys-checkbox-pressed-color-border);
  }

  /* Focused */
  .nys-checkbox__checkbox:focus {
    outline: solid var(--_nys-checkbox-width-focus)
      var(--_nys-checkbox-color-focus);
  }

  /* Checkbox Label Holder */
  .nys-checkbox__text {
    display: flex;
    flex-direction: column;
    margin: auto 0; /* Center text if single line label */
    align-items: flex-start;
  }

  /* Label styling */
  .nys-checkbox__label {
    font-weight: var(--_nys-checkbox-font-weight-400);
    color: var(--nys-color-text, #1b1b1b);
  }

  /* Description styling */
  .nys-checkbox__description {
    font-weight: var(--_nys-checkbox-font-weight-400);
    font-style: italic;
    text-align: left;
  }

  /* Required */
  .nys-checkbox__required {
    color: var(--_nys-checkbox-required-color);
  }

  .nys-checkbox__requiredwrapper {
    display: inline;
  }
`;
/*!
   * Label v1.1.1
   * Part of the New York State Design System
   * A design system for New York State's digital products.
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N5 = globalThis, I2 = N5.ShadowRoot && (N5.ShadyCSS === void 0 || N5.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, I3 = Symbol(), z7 = /* @__PURE__ */ new WeakMap();
let x8 = class {
  constructor(t, e, o) {
    if (this._$cssResult$ = !0, o !== I3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (I2 && t === void 0) {
      const o = e !== void 0 && e.length === 1;
      o && (t = z7.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), o && z7.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const L8 = (s) => new x8(typeof s == "string" ? s : s + "", void 0, I3), $8 = (s, t) => {
  if (I2) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const o = document.createElement("style"), r = N5.litNonce;
    r !== void 0 && o.setAttribute("nonce", r), o.textContent = e.cssText, s.appendChild(o);
  }
}, B7 = I2 ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const o of t.cssRules) e += o.cssText;
  return L8(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: M8, defineProperty: Z8, getOwnPropertyDescriptor: V8, getOwnPropertyNames: H8, getOwnPropertySymbols: S8, getPrototypeOf: E8 } = Object, B1 = globalThis, U7 = B1.trustedTypes, k8 = U7 ? U7.emptyScript : "", O7 = B1.reactiveElementPolyfillSupport, $5 = (s, t) => s, r2 = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? k8 : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, R2 = (s, t) => !M8(s, t), I7 = { attribute: !0, type: String, converter: r2, reflect: !1, hasChanged: R2 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), B1.litPropertyMetadata ?? (B1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let c5 = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = I7) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const o = Symbol(), r = this.getPropertyDescriptor(t, o, e);
      r !== void 0 && Z8(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, o) {
    const { get: r, set: n } = V8(this.prototype, t) ?? { get() {
      return this[e];
    }, set(i) {
      this[e] = i;
    } };
    return { get() {
      return r == null ? void 0 : r.call(this);
    }, set(i) {
      const l = r == null ? void 0 : r.call(this);
      n.call(this, i), this.requestUpdate(t, l, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? I7;
  }
  static _$Ei() {
    if (this.hasOwnProperty($5("elementProperties"))) return;
    const t = E8(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty($5("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($5("properties"))) {
      const e = this.properties, o = [...H8(e), ...S8(e)];
      for (const r of o) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [o, r] of e) this.elementProperties.set(o, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, o] of this.elementProperties) {
      const r = this._$Eu(e, o);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const r of o) e.unshift(B7(r));
    } else t !== void 0 && e.push(B7(t));
    return e;
  }
  static _$Eu(t, e) {
    const o = e.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const o of e.keys()) this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return $8(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostConnected) == null ? void 0 : o.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostDisconnected) == null ? void 0 : o.call(e);
    });
  }
  attributeChangedCallback(t, e, o) {
    this._$AK(t, o);
  }
  _$EC(t, e) {
    var o;
    const r = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, r);
    if (n !== void 0 && r.reflect === !0) {
      const i = (((o = r.converter) == null ? void 0 : o.toAttribute) !== void 0 ? r.converter : r2).toAttribute(e, r.type);
      this._$Em = t, i == null ? this.removeAttribute(n) : this.setAttribute(n, i), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const r = this.constructor, n = r._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const i = r.getPropertyOptions(n), l = typeof i.converter == "function" ? { fromAttribute: i.converter } : ((o = i.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? i.converter : r2;
      this._$Em = n, this[n] = l.fromAttribute(e, i.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, o) {
    if (t !== void 0) {
      if (o ?? (o = this.constructor.getPropertyOptions(t)), !(o.hasChanged ?? R2)(this[t], e)) return;
      this.P(t, e, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, o) {
    this._$AL.has(t) || this._$AL.set(t, e), o.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, i] of this._$Ep) this[n] = i;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [n, i] of r) i.wrapped !== !0 || this._$AL.has(n) || this[n] === void 0 || this.P(n, this[n], i);
    }
    let e = !1;
    const o = this._$AL;
    try {
      e = this.shouldUpdate(o), e ? (this.willUpdate(o), (t = this._$EO) == null || t.forEach((r) => {
        var n;
        return (n = r.hostUpdate) == null ? void 0 : n.call(r);
      }), this.update(o)) : this._$EU();
    } catch (r) {
      throw e = !1, this._$EU(), r;
    }
    e && this._$AE(o);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((o) => {
      var r;
      return (r = o.hostUpdated) == null ? void 0 : r.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
c5.elementStyles = [], c5.shadowRootOptions = { mode: "open" }, c5[$5("elementProperties")] = /* @__PURE__ */ new Map(), c5[$5("finalized")] = /* @__PURE__ */ new Map(), O7 == null || O7({ ReactiveElement: c5 }), (B1.reactiveElementVersions ?? (B1.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A8 = { attribute: !0, type: String, converter: r2, reflect: !1, hasChanged: R2 }, P8 = (s = A8, t, e) => {
  const { kind: o, metadata: r } = e;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), n.set(e.name, s), o === "accessor") {
    const { name: i } = e;
    return { set(l) {
      const C = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(i, C, s);
    }, init(l) {
      return l !== void 0 && this.P(i, void 0, s), l;
    } };
  }
  if (o === "setter") {
    const { name: i } = e;
    return function(l) {
      const C = this[i];
      t.call(this, l), this.requestUpdate(i, C, s);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function g2(s) {
  return (t, e) => typeof e == "object" ? P8(s, t, e) : ((o, r, n) => {
    const i = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, i ? { ...o, wrapped: !0 } : o), i ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(s, t, e);
}
const z8 = v`
  :host {
    /* Label Typography */
    --_nys-label-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-label-font-weight: var(--nys-font-weight-semibold, 600);
    --_nys-label-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-label-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-label-letter-spacing: var(--nys-font-letterspacing-ui-md, 0.044px);
    --_nys-label-font-color: var(--nys-color-text, #1b1b1b);

    /* Description */
    --nys-description-font-weight: var(--nys-font-weight-regular, 400);
    --nys-description-font-style: italic;
    --nys-description-font-color: var(--nys-color-text, #1b1b1b);

    /* Required Flag */
    --nys-required-font-color: var(--nys-color-danger, #b52c2c);

    /* Optional Flag */
    --nys-optional-font-weight: var(--nys-font-weight-regular, 400);
    --nys-optional-font-color: var(--nys-color-text-weak, #4a4d4f);

    /* Spacing */
    --_nys-label-flag-gap: var(--nys-space-2px, 2px);
  }

  .nys-label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: var(--_nys-label-font-family);
    font-size: var(--_nys-label-font-size);
    line-height: var(--_nys-label-line-height);
    letter-spacing: var(--_nys-label-letter-spacing);
  }

  .nys-label__labelwrapper {
    display: flex;
    gap: var(--_nys-label-flag-gap);
  }

  .nys-label__label {
    font-weight: var(--_nys-label-font-weight);
    color: var(--_nys-label-font-color);
  }

  .nys-label__description {
    font-weight: var(--nys-description-font-weight);
    font-style: var(--nys-description-font-style);
    color: var(--nys-description-font-color);
  }

  .nys-label__required {
    font-weight: var(--_nys-label-font-weight);
    color: var(--nys-required-font-color);
  }

  .nys-label__optional {
    font-weight: var(--nys-optional-font-weight);
    color: var(--nys-optional-font-color);
  }
`;
var B8 = Object.defineProperty, f2 = (s, t, e, o) => {
  for (var r = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = i(t, e, r) || r);
  return r && B8(t, e, r), r;
};
const R3 = class extends p {
  constructor() {
    super(...arguments), this.id = "", this.label = "", this.description = "", this.flag = "";
  }
  render() {
    return c`
      <div class="nys-label">
        <label for=${this.id} class="nys-label__label"
          >${this.label}
          ${this.flag === "required" ? c`<label class="nys-label__required">*</label>` : ""}
          ${this.flag === "optional" ? c`<label class="nys-label__optional">(Optional)</label>` : ""}</label
        >
        <label for=${this.id} class="nys-label__description">
          <slot name="description">${this.description}</slot>
        </label>
      </div>
    `;
  }
};
R3.styles = z8;
let U5 = R3;
f2([
  g2({ type: String })
], U5.prototype, "id");
f2([
  g2({ type: String })
], U5.prototype, "label");
f2([
  g2({ type: String })
], U5.prototype, "description");
f2([
  g2({ type: String })
], U5.prototype, "flag");
customElements.get("nys-label") || customElements.define("nys-label", U5);
/*!
   * Error Message v1.1.1
   * Part of the New York State Design System
   * A design system for New York State's digital products.
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j5 = globalThis, D2 = j5.ShadowRoot && (j5.ShadyCSS === void 0 || j5.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, D3 = Symbol(), R7 = /* @__PURE__ */ new WeakMap();
let U8 = class {
  constructor(t, e, o) {
    if (this._$cssResult$ = !0, o !== D3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (D2 && t === void 0) {
      const o = e !== void 0 && e.length === 1;
      o && (t = R7.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), o && R7.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const O8 = (s) => new U8(typeof s == "string" ? s : s + "", void 0, D3), I8 = (s, t) => {
  if (D2) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const o = document.createElement("style"), r = j5.litNonce;
    r !== void 0 && o.setAttribute("nonce", r), o.textContent = e.cssText, s.appendChild(o);
  }
}, D7 = D2 ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const o of t.cssRules) e += o.cssText;
  return O8(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: R8, defineProperty: D8, getOwnPropertyDescriptor: T8, getOwnPropertyNames: q8, getOwnPropertySymbols: N8, getPrototypeOf: j8 } = Object, U1 = globalThis, T7 = U1.trustedTypes, F8 = T7 ? T7.emptyScript : "", q7 = U1.reactiveElementPolyfillSupport, M5 = (s, t) => s, n2 = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? F8 : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, T2 = (s, t) => !R8(s, t), N7 = { attribute: !0, type: String, converter: n2, reflect: !1, hasChanged: T2 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), U1.litPropertyMetadata ?? (U1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let h5 = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = N7) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const o = Symbol(), r = this.getPropertyDescriptor(t, o, e);
      r !== void 0 && D8(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, o) {
    const { get: r, set: n } = T8(this.prototype, t) ?? { get() {
      return this[e];
    }, set(i) {
      this[e] = i;
    } };
    return { get() {
      return r == null ? void 0 : r.call(this);
    }, set(i) {
      const l = r == null ? void 0 : r.call(this);
      n.call(this, i), this.requestUpdate(t, l, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? N7;
  }
  static _$Ei() {
    if (this.hasOwnProperty(M5("elementProperties"))) return;
    const t = j8(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(M5("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(M5("properties"))) {
      const e = this.properties, o = [...q8(e), ...N8(e)];
      for (const r of o) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [o, r] of e) this.elementProperties.set(o, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, o] of this.elementProperties) {
      const r = this._$Eu(e, o);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const r of o) e.unshift(D7(r));
    } else t !== void 0 && e.push(D7(t));
    return e;
  }
  static _$Eu(t, e) {
    const o = e.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const o of e.keys()) this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return I8(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostConnected) == null ? void 0 : o.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostDisconnected) == null ? void 0 : o.call(e);
    });
  }
  attributeChangedCallback(t, e, o) {
    this._$AK(t, o);
  }
  _$EC(t, e) {
    var o;
    const r = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, r);
    if (n !== void 0 && r.reflect === !0) {
      const i = (((o = r.converter) == null ? void 0 : o.toAttribute) !== void 0 ? r.converter : n2).toAttribute(e, r.type);
      this._$Em = t, i == null ? this.removeAttribute(n) : this.setAttribute(n, i), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const r = this.constructor, n = r._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const i = r.getPropertyOptions(n), l = typeof i.converter == "function" ? { fromAttribute: i.converter } : ((o = i.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? i.converter : n2;
      this._$Em = n, this[n] = l.fromAttribute(e, i.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, o) {
    if (t !== void 0) {
      if (o ?? (o = this.constructor.getPropertyOptions(t)), !(o.hasChanged ?? T2)(this[t], e)) return;
      this.P(t, e, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, o) {
    this._$AL.has(t) || this._$AL.set(t, e), o.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, i] of this._$Ep) this[n] = i;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [n, i] of r) i.wrapped !== !0 || this._$AL.has(n) || this[n] === void 0 || this.P(n, this[n], i);
    }
    let e = !1;
    const o = this._$AL;
    try {
      e = this.shouldUpdate(o), e ? (this.willUpdate(o), (t = this._$EO) == null || t.forEach((r) => {
        var n;
        return (n = r.hostUpdate) == null ? void 0 : n.call(r);
      }), this.update(o)) : this._$EU();
    } catch (r) {
      throw e = !1, this._$EU(), r;
    }
    e && this._$AE(o);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((o) => {
      var r;
      return (r = o.hostUpdated) == null ? void 0 : r.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
h5.elementStyles = [], h5.shadowRootOptions = { mode: "open" }, h5[M5("elementProperties")] = /* @__PURE__ */ new Map(), h5[M5("finalized")] = /* @__PURE__ */ new Map(), q7 == null || q7({ ReactiveElement: h5 }), (U1.reactiveElementVersions ?? (U1.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G8 = { attribute: !0, type: String, converter: n2, reflect: !1, hasChanged: T2 }, W8 = (s = G8, t, e) => {
  const { kind: o, metadata: r } = e;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), n.set(e.name, s), o === "accessor") {
    const { name: i } = e;
    return { set(l) {
      const C = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(i, C, s);
    }, init(l) {
      return l !== void 0 && this.P(i, void 0, s), l;
    } };
  }
  if (o === "setter") {
    const { name: i } = e;
    return function(l) {
      const C = this[i];
      t.call(this, l), this.requestUpdate(i, C, s);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function q2(s) {
  return (t, e) => typeof e == "object" ? W8(s, t, e) : ((o, r, n) => {
    const i = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, i ? { ...o, wrapped: !0 } : o), i ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(s, t, e);
}
const Y8 = v`
  :host {
    --_nys-errormessage-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-errormessage-font-weight: var(--nys-font-weight-regular, 400);
    --_nys-errormessage-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-errormessage-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-errormessage-letter-spacing: var(
      --nys-font-letterspacing-ui-md,
      0.044px
    );
    --_nys-errormessage-color: var(
      --nys-color-danger,
      var(--nys-color-red-600, #b52c2c)
    );

    /* Spacing */
    --_nys-errormessage-gap: var(--nys-space-100, 8px);
    --_nys-errormessage-divider-gap: var(--nys-space-50, 4px);
    --_nys-errormessage-divider-width: var(--nys-border-width-sm, 1px);
  }

  .nys-errormessage {
    display: flex;
    align-items: center;
    gap: var(--_nys-errormessage-gap);
    font-family: var(--_nys-errormessage-font-family);
    font-weight: var(--_nys-errormessage-font-weight);
    font-size: var(--_nys-errormessage-font-size);
    line-height: var(--_nys-errormessage-line-height);
    letter-spacing: var(--_nys-errormessage-letter-spacing);
    color: var(--_nys-errormessage-color);
  }

  .nys-errormessage[showDivider] {
    padding-top: var(--_nys-errormessage-divider-gap);
    margin-top: var(--_nys-errormessage-divider-gap);
    border-top: var(--_nys-errormessage-divider-width) solid
      var(--_nys-errormessage-color);
  }
`;
/*!
   * ▒█▄░▒█ ▒█░░▒█ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 
   * ▒█▒█▒█ ▒█▄▄▄█ ░▀▀▀▄▄ ▒█░▒█ ░▀▀▀▄▄ 
   * ▒█░░▀█ ░░▒█░░ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█
   * 
   * Icon Component v1.1.1
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const F5 = globalThis, N2 = F5.ShadowRoot && (F5.ShadyCSS === void 0 || F5.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, T3 = Symbol(), j7 = /* @__PURE__ */ new WeakMap();
let K8 = class {
  constructor(t, e, o) {
    if (this._$cssResult$ = !0, o !== T3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (N2 && t === void 0) {
      const o = e !== void 0 && e.length === 1;
      o && (t = j7.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), o && j7.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const J8 = (s) => new K8(typeof s == "string" ? s : s + "", void 0, T3), X8 = (s, t) => {
  if (N2) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const o = document.createElement("style"), r = F5.litNonce;
    r !== void 0 && o.setAttribute("nonce", r), o.textContent = e.cssText, s.appendChild(o);
  }
}, F7 = N2 ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const o of t.cssRules) e += o.cssText;
  return J8(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Q8, defineProperty: t6, getOwnPropertyDescriptor: e6, getOwnPropertyNames: s6, getOwnPropertySymbols: o6, getPrototypeOf: r6 } = Object, O1 = globalThis, G7 = O1.trustedTypes, n6 = G7 ? G7.emptyScript : "", W7 = O1.reactiveElementPolyfillSupport, Z5 = (s, t) => s, i2 = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? n6 : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, j2 = (s, t) => !Q8(s, t), Y7 = { attribute: !0, type: String, converter: i2, reflect: !1, hasChanged: j2 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), O1.litPropertyMetadata ?? (O1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class d5 extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Y7) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const o = Symbol(), r = this.getPropertyDescriptor(t, o, e);
      r !== void 0 && t6(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, o) {
    const { get: r, set: n } = e6(this.prototype, t) ?? { get() {
      return this[e];
    }, set(i) {
      this[e] = i;
    } };
    return { get() {
      return r == null ? void 0 : r.call(this);
    }, set(i) {
      const l = r == null ? void 0 : r.call(this);
      n.call(this, i), this.requestUpdate(t, l, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Y7;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Z5("elementProperties"))) return;
    const t = r6(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Z5("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Z5("properties"))) {
      const e = this.properties, o = [...s6(e), ...o6(e)];
      for (const r of o) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [o, r] of e) this.elementProperties.set(o, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, o] of this.elementProperties) {
      const r = this._$Eu(e, o);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const r of o) e.unshift(F7(r));
    } else t !== void 0 && e.push(F7(t));
    return e;
  }
  static _$Eu(t, e) {
    const o = e.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const o of e.keys()) this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return X8(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostConnected) == null ? void 0 : o.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostDisconnected) == null ? void 0 : o.call(e);
    });
  }
  attributeChangedCallback(t, e, o) {
    this._$AK(t, o);
  }
  _$EC(t, e) {
    var o;
    const r = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, r);
    if (n !== void 0 && r.reflect === !0) {
      const i = (((o = r.converter) == null ? void 0 : o.toAttribute) !== void 0 ? r.converter : i2).toAttribute(e, r.type);
      this._$Em = t, i == null ? this.removeAttribute(n) : this.setAttribute(n, i), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const r = this.constructor, n = r._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const i = r.getPropertyOptions(n), l = typeof i.converter == "function" ? { fromAttribute: i.converter } : ((o = i.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? i.converter : i2;
      this._$Em = n, this[n] = l.fromAttribute(e, i.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, o) {
    if (t !== void 0) {
      if (o ?? (o = this.constructor.getPropertyOptions(t)), !(o.hasChanged ?? j2)(this[t], e)) return;
      this.P(t, e, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, o) {
    this._$AL.has(t) || this._$AL.set(t, e), o.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, i] of this._$Ep) this[n] = i;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [n, i] of r) i.wrapped !== !0 || this._$AL.has(n) || this[n] === void 0 || this.P(n, this[n], i);
    }
    let e = !1;
    const o = this._$AL;
    try {
      e = this.shouldUpdate(o), e ? (this.willUpdate(o), (t = this._$EO) == null || t.forEach((r) => {
        var n;
        return (n = r.hostUpdate) == null ? void 0 : n.call(r);
      }), this.update(o)) : this._$EU();
    } catch (r) {
      throw e = !1, this._$EU(), r;
    }
    e && this._$AE(o);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((o) => {
      var r;
      return (r = o.hostUpdated) == null ? void 0 : r.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
d5.elementStyles = [], d5.shadowRootOptions = { mode: "open" }, d5[Z5("elementProperties")] = /* @__PURE__ */ new Map(), d5[Z5("finalized")] = /* @__PURE__ */ new Map(), W7 == null || W7({ ReactiveElement: d5 }), (O1.reactiveElementVersions ?? (O1.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i6 = { attribute: !0, type: String, converter: i2, reflect: !1, hasChanged: j2 }, l6 = (s = i6, t, e) => {
  const { kind: o, metadata: r } = e;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), n.set(e.name, s), o === "accessor") {
    const { name: i } = e;
    return { set(l) {
      const C = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(i, C, s);
    }, init(l) {
      return l !== void 0 && this.P(i, void 0, s), l;
    } };
  }
  if (o === "setter") {
    const { name: i } = e;
    return function(l) {
      const C = this[i];
      t.call(this, l), this.requestUpdate(i, C, s);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function J1(s) {
  return (t, e) => typeof e == "object" ? l6(s, t, e) : ((o, r, n) => {
    const i = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, i ? { ...o, wrapped: !0 } : o), i ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(s, t, e);
}
const a6 = {
  // --------- UX Team Main Library (below) --------- //
  // *** CORE *** //
  account_circle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M3.85 15.1C4.7 14.45 5.65 13.9375 6.7 13.5625C7.75 13.1875 8.85 13 10 13C11.15 13 12.25 13.1875 13.3 13.5625C14.35 13.9375 15.3 14.45 16.15 15.1C16.7333 14.4167 17.1875 13.6417 17.5125 12.775C17.8375 11.9083 18 10.9833 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.9833 2.1625 11.9083 2.4875 12.775C2.8125 13.6417 3.26667 14.4167 3.85 15.1ZM10 11C9.01667 11 8.1875 10.6625 7.5125 9.9875C6.8375 9.3125 6.5 8.48333 6.5 7.5C6.5 6.51667 6.8375 5.6875 7.5125 5.0125C8.1875 4.3375 9.01667 4 10 4C10.9833 4 11.8125 4.3375 12.4875 5.0125C13.1625 5.6875 13.5 6.51667 13.5 7.5C13.5 8.48333 13.1625 9.3125 12.4875 9.9875C11.8125 10.6625 10.9833 11 10 11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  calendar_month: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V1C3 0.716667 3.09583 0.479167 3.2875 0.2875C3.47917 0.0958333 3.71667 0 4 0C4.28333 0 4.52083 0.0958333 4.7125 0.2875C4.90417 0.479167 5 0.716667 5 1V2H13V1C13 0.716667 13.0958 0.479167 13.2875 0.2875C13.4792 0.0958333 13.7167 0 14 0C14.2833 0 14.5208 0.0958333 14.7125 0.2875C14.9042 0.479167 15 0.716667 15 1V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6ZM9 12C8.71667 12 8.47917 11.9042 8.2875 11.7125C8.09583 11.5208 8 11.2833 8 11C8 10.7167 8.09583 10.4792 8.2875 10.2875C8.47917 10.0958 8.71667 10 9 10C9.28333 10 9.52083 10.0958 9.7125 10.2875C9.90417 10.4792 10 10.7167 10 11C10 11.2833 9.90417 11.5208 9.7125 11.7125C9.52083 11.9042 9.28333 12 9 12ZM5 12C4.71667 12 4.47917 11.9042 4.2875 11.7125C4.09583 11.5208 4 11.2833 4 11C4 10.7167 4.09583 10.4792 4.2875 10.2875C4.47917 10.0958 4.71667 10 5 10C5.28333 10 5.52083 10.0958 5.7125 10.2875C5.90417 10.4792 6 10.7167 6 11C6 11.2833 5.90417 11.5208 5.7125 11.7125C5.52083 11.9042 5.28333 12 5 12ZM13 12C12.7167 12 12.4792 11.9042 12.2875 11.7125C12.0958 11.5208 12 11.2833 12 11C12 10.7167 12.0958 10.4792 12.2875 10.2875C12.4792 10.0958 12.7167 10 13 10C13.2833 10 13.5208 10.0958 13.7125 10.2875C13.9042 10.4792 14 10.7167 14 11C14 11.2833 13.9042 11.5208 13.7125 11.7125C13.5208 11.9042 13.2833 12 13 12ZM9 16C8.71667 16 8.47917 15.9042 8.2875 15.7125C8.09583 15.5208 8 15.2833 8 15C8 14.7167 8.09583 14.4792 8.2875 14.2875C8.47917 14.0958 8.71667 14 9 14C9.28333 14 9.52083 14.0958 9.7125 14.2875C9.90417 14.4792 10 14.7167 10 15C10 15.2833 9.90417 15.5208 9.7125 15.7125C9.52083 15.9042 9.28333 16 9 16ZM5 16C4.71667 16 4.47917 15.9042 4.2875 15.7125C4.09583 15.5208 4 15.2833 4 15C4 14.7167 4.09583 14.4792 4.2875 14.2875C4.47917 14.0958 4.71667 14 5 14C5.28333 14 5.52083 14.0958 5.7125 14.2875C5.90417 14.4792 6 14.7167 6 15C6 15.2833 5.90417 15.5208 5.7125 15.7125C5.52083 15.9042 5.28333 16 5 16ZM13 16C12.7167 16 12.4792 15.9042 12.2875 15.7125C12.0958 15.5208 12 15.2833 12 15C12 14.7167 12.0958 14.4792 12.2875 14.2875C12.4792 14.0958 12.7167 14 13 14C13.2833 14 13.5208 14.0958 13.7125 14.2875C13.9042 14.4792 14 14.7167 14 15C14 15.2833 13.9042 15.5208 13.7125 15.7125C13.5208 15.9042 13.2833 16 13 16Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  cancel: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 11.4L12.9 14.3C13.0833 14.4833 13.3167 14.575 13.6 14.575C13.8833 14.575 14.1167 14.4833 14.3 14.3C14.4833 14.1167 14.575 13.8833 14.575 13.6C14.575 13.3167 14.4833 13.0833 14.3 12.9L11.4 10L14.3 7.1C14.4833 6.91667 14.575 6.68333 14.575 6.4C14.575 6.11667 14.4833 5.88333 14.3 5.7C14.1167 5.51667 13.8833 5.425 13.6 5.425C13.3167 5.425 13.0833 5.51667 12.9 5.7L10 8.6L7.1 5.7C6.91667 5.51667 6.68333 5.425 6.4 5.425C6.11667 5.425 5.88333 5.51667 5.7 5.7C5.51667 5.88333 5.425 6.11667 5.425 6.4C5.425 6.68333 5.51667 6.91667 5.7 7.1L8.6 10L5.7 12.9C5.51667 13.0833 5.425 13.3167 5.425 13.6C5.425 13.8833 5.51667 14.1167 5.7 14.3C5.88333 14.4833 6.11667 14.575 6.4 14.575C6.68333 14.575 6.91667 14.4833 7.1 14.3L10 11.4ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
  <path d="M5.5565 9.1625L14.0315 0.687501C14.2315 0.487501 14.4648 0.387501 14.7315 0.387501C14.9982 0.387501 15.2315 0.487501 15.4315 0.687501C15.6315 0.887501 15.7315 1.125 15.7315 1.4C15.7315 1.675 15.6315 1.9125 15.4315 2.1125L6.2565 11.3125C6.0565 11.5125 5.82317 11.6125 5.5565 11.6125C5.28983 11.6125 5.0565 11.5125 4.8565 11.3125L0.556499 7.0125C0.356499 6.8125 0.260666 6.575 0.268999 6.3C0.277333 6.025 0.381499 5.7875 0.581499 5.5875C0.781499 5.3875 1.019 5.2875 1.294 5.2875C1.569 5.2875 1.8065 5.3875 2.0065 5.5875L5.5565 9.1625Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M7 8.4L2.1 13.3C1.91667 13.4833 1.68334 13.575 1.4 13.575C1.11667 13.575 0.883336 13.4833 0.700003 13.3C0.51667 13.1167 0.425003 12.8833 0.425003 12.6C0.425003 12.3167 0.51667 12.0833 0.700003 11.9L5.6 7L0.700003 2.1C0.51667 1.91667 0.425003 1.68334 0.425003 1.4C0.425003 1.11667 0.51667 0.883336 0.700003 0.700003C0.883336 0.51667 1.11667 0.425003 1.4 0.425003C1.68334 0.425003 1.91667 0.51667 2.1 0.700003L7 5.6L11.9 0.700003C12.0833 0.51667 12.3167 0.425003 12.6 0.425003C12.8833 0.425003 13.1167 0.51667 13.3 0.700003C13.4833 0.883336 13.575 1.11667 13.575 1.4C13.575 1.68334 13.4833 1.91667 13.3 2.1L8.4 7L13.3 11.9C13.4833 12.0833 13.575 12.3167 13.575 12.6C13.575 12.8833 13.4833 13.1167 13.3 13.3C13.1167 13.4833 12.8833 13.575 12.6 13.575C12.3167 13.575 12.0833 13.4833 11.9 13.3L7 8.4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8 11.575C7.86667 11.575 7.74167 11.5542 7.625 11.5125C7.50833 11.4708 7.4 11.4 7.3 11.3L3.7 7.7C3.5 7.5 3.40417 7.26667 3.4125 7C3.42083 6.73333 3.51667 6.5 3.7 6.3C3.9 6.1 4.1375 5.99583 4.4125 5.9875C4.6875 5.97917 4.925 6.075 5.125 6.275L7 8.15V1C7 0.716667 7.09583 0.479167 7.2875 0.2875C7.47917 0.0958333 7.71667 0 8 0C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1V8.15L10.875 6.275C11.075 6.075 11.3125 5.97917 11.5875 5.9875C11.8625 5.99583 12.1 6.1 12.3 6.3C12.4833 6.5 12.5792 6.73333 12.5875 7C12.5958 7.26667 12.5 7.5 12.3 7.7L8.7 11.3C8.6 11.4 8.49167 11.4708 8.375 11.5125C8.25833 11.5542 8.13333 11.575 8 11.575ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11C1.28333 11 1.52083 11.0958 1.7125 11.2875C1.90417 11.4792 2 11.7167 2 12V14H14V12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0958 14.7167 11 15 11C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  download_done: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M5.544 8.95L13.994 0.499997C14.194 0.299997 14.4315 0.199997 14.7065 0.199997C14.9815 0.199997 15.219 0.299997 15.419 0.499997C15.619 0.699997 15.719 0.937497 15.719 1.2125C15.719 1.4875 15.619 1.725 15.419 1.925L6.244 11.1C6.044 11.3 5.81067 11.4 5.544 11.4C5.27733 11.4 5.044 11.3 4.844 11.1L0.568998 6.825C0.368998 6.625 0.273165 6.3875 0.281498 6.1125C0.289832 5.8375 0.393998 5.6 0.593998 5.4C0.793998 5.2 1.0315 5.1 1.3065 5.1C1.5815 5.1 1.819 5.2 2.019 5.4L5.544 8.95ZM1.994 15.8C1.71066 15.8 1.47317 15.7042 1.2815 15.5125C1.08983 15.3208 0.993998 15.0833 0.993998 14.8C0.993998 14.5167 1.08983 14.2792 1.2815 14.0875C1.47317 13.8958 1.71066 13.8 1.994 13.8H13.994C14.2773 13.8 14.5148 13.8958 14.7065 14.0875C14.8982 14.2792 14.994 14.5167 14.994 14.8C14.994 15.0833 14.8982 15.3208 14.7065 15.5125C14.5148 15.7042 14.2773 15.8 13.994 15.8H1.994Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  drive_folder_upload: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
  <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H7.175C7.44167 0 7.69583 0.05 7.9375 0.15C8.17917 0.25 8.39167 0.391667 8.575 0.575L10 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM2 14H18V4H9.175L7.175 2H2V14ZM10 13C10.2833 13 10.5208 12.9042 10.7125 12.7125C10.9042 12.5208 11 12.2833 11 12V8.8L11.9 9.7C12.0833 9.88333 12.3167 9.975 12.6 9.975C12.8833 9.975 13.1167 9.88333 13.3 9.7C13.4833 9.51667 13.575 9.28333 13.575 9C13.575 8.71667 13.4833 8.48333 13.3 8.3L10.7 5.7C10.5 5.5 10.2667 5.4 10 5.4C9.73333 5.4 9.5 5.5 9.3 5.7L6.7 8.3C6.51667 8.48333 6.425 8.71667 6.425 9C6.425 9.28333 6.51667 9.51667 6.7 9.7C6.88333 9.88333 7.11667 9.975 7.4 9.975C7.68333 9.975 7.91667 9.88333 8.1 9.7L9 8.8V12C9 12.2833 9.09583 12.5208 9.2875 12.7125C9.47917 12.9042 9.71667 13 10 13Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  edit_square: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
  <path d="M2 21.0125C1.45 21.0125 0.979167 20.8167 0.5875 20.425C0.195833 20.0333 0 19.5625 0 19.0125V5.0125C0 4.4625 0.195833 3.99167 0.5875 3.6C0.979167 3.20834 1.45 3.0125 2 3.0125H8.525C8.85833 3.0125 9.10833 3.11667 9.275 3.325C9.44167 3.53334 9.525 3.7625 9.525 4.0125C9.525 4.2625 9.4375 4.49167 9.2625 4.7C9.0875 4.90834 8.83333 5.0125 8.5 5.0125H2V19.0125H16V12.4875C16 12.1542 16.1042 11.9042 16.3125 11.7375C16.5208 11.5708 16.75 11.4875 17 11.4875C17.25 11.4875 17.4792 11.5708 17.6875 11.7375C17.8958 11.9042 18 12.1542 18 12.4875V19.0125C18 19.5625 17.8042 20.0333 17.4125 20.425C17.0208 20.8167 16.55 21.0125 16 21.0125H2ZM6 14.0125V11.5875C6 11.3208 6.05 11.0667 6.15 10.825C6.25 10.5833 6.39167 10.3708 6.575 10.1875L15.175 1.5875C15.375 1.3875 15.6 1.2375 15.85 1.1375C16.1 1.0375 16.35 0.987503 16.6 0.987503C16.8667 0.987503 17.1208 1.0375 17.3625 1.1375C17.6042 1.2375 17.825 1.3875 18.025 1.5875L19.425 3.0125C19.6083 3.2125 19.75 3.43334 19.85 3.675C19.95 3.91667 20 4.1625 20 4.4125C20 4.6625 19.9542 4.90834 19.8625 5.15C19.7708 5.39167 19.625 5.6125 19.425 5.8125L10.825 14.4125C10.6417 14.5958 10.4292 14.7417 10.1875 14.85C9.94583 14.9583 9.69167 15.0125 9.425 15.0125H7C6.71667 15.0125 6.47917 14.9167 6.2875 14.725C6.09583 14.5333 6 14.2958 6 14.0125ZM8 13.0125H9.4L15.2 7.2125L14.5 6.5125L13.775 5.8125L8 11.5875V13.0125Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  help: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.95 16C10.3 16 10.5958 15.8792 10.8375 15.6375C11.0792 15.3958 11.2 15.1 11.2 14.75C11.2 14.4 11.0792 14.1042 10.8375 13.8625C10.5958 13.6208 10.3 13.5 9.95 13.5C9.6 13.5 9.30417 13.6208 9.0625 13.8625C8.82083 14.1042 8.7 14.4 8.7 14.75C8.7 15.1 8.82083 15.3958 9.0625 15.6375C9.30417 15.8792 9.6 16 9.95 16ZM9.05 12.15H10.9C10.9 11.6 10.9625 11.1667 11.0875 10.85C11.2125 10.5333 11.5667 10.1 12.15 9.55C12.5833 9.11667 12.925 8.70417 13.175 8.3125C13.425 7.92083 13.55 7.45 13.55 6.9C13.55 5.96667 13.2083 5.25 12.525 4.75C11.8417 4.25 11.0333 4 10.1 4C9.15 4 8.37917 4.25 7.7875 4.75C7.19583 5.25 6.78333 5.85 6.55 6.55L8.2 7.2C8.28333 6.9 8.47083 6.575 8.7625 6.225C9.05417 5.875 9.5 5.7 10.1 5.7C10.6333 5.7 11.0333 5.84583 11.3 6.1375C11.5667 6.42917 11.7 6.75 11.7 7.1C11.7 7.43333 11.6 7.74583 11.4 8.0375C11.2 8.32917 10.95 8.6 10.65 8.85C9.91667 9.5 9.46667 9.99167 9.3 10.325C9.13333 10.6583 9.05 11.2667 9.05 12.15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  language: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 20C8.63333 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3667 0 10C0 8.61667 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.63333 0 10 0C11.3833 0 12.6792 0.2625 13.8875 0.7875C15.0958 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90417 19.2125 6.1125C19.7375 7.32083 20 8.61667 20 10C20 11.3667 19.7375 12.6583 19.2125 13.875C18.6875 15.0917 17.9708 16.1542 17.0625 17.0625C16.1542 17.9708 15.0958 18.6875 13.8875 19.2125C12.6792 19.7375 11.3833 20 10 20ZM10 17.95C10.4333 17.35 10.8083 16.725 11.125 16.075C11.4417 15.425 11.7 14.7333 11.9 14H8.1C8.3 14.7333 8.55833 15.425 8.875 16.075C9.19167 16.725 9.56667 17.35 10 17.95ZM7.4 17.55C7.1 17 6.8375 16.4292 6.6125 15.8375C6.3875 15.2458 6.2 14.6333 6.05 14H3.1C3.58333 14.8333 4.1875 15.5583 4.9125 16.175C5.6375 16.7917 6.46667 17.25 7.4 17.55ZM12.6 17.55C13.5333 17.25 14.3625 16.7917 15.0875 16.175C15.8125 15.5583 16.4167 14.8333 16.9 14H13.95C13.8 14.6333 13.6125 15.2458 13.3875 15.8375C13.1625 16.4292 12.9 17 12.6 17.55ZM2.25 12H5.65C5.6 11.6667 5.5625 11.3375 5.5375 11.0125C5.5125 10.6875 5.5 10.35 5.5 10C5.5 9.65 5.5125 9.3125 5.5375 8.9875C5.5625 8.6625 5.6 8.33333 5.65 8H2.25C2.16667 8.33333 2.10417 8.6625 2.0625 8.9875C2.02083 9.3125 2 9.65 2 10C2 10.35 2.02083 10.6875 2.0625 11.0125C2.10417 11.3375 2.16667 11.6667 2.25 12ZM7.65 12H12.35C12.4 11.6667 12.4375 11.3375 12.4625 11.0125C12.4875 10.6875 12.5 10.35 12.5 10C12.5 9.65 12.4875 9.3125 12.4625 8.9875C12.4375 8.6625 12.4 8.33333 12.35 8H7.65C7.6 8.33333 7.5625 8.6625 7.5375 8.9875C7.5125 9.3125 7.5 9.65 7.5 10C7.5 10.35 7.5125 10.6875 7.5375 11.0125C7.5625 11.3375 7.6 11.6667 7.65 12ZM14.35 12H17.75C17.8333 11.6667 17.8958 11.3375 17.9375 11.0125C17.9792 10.6875 18 10.35 18 10C18 9.65 17.9792 9.3125 17.9375 8.9875C17.8958 8.6625 17.8333 8.33333 17.75 8H14.35C14.4 8.33333 14.4375 8.6625 14.4625 8.9875C14.4875 9.3125 14.5 9.65 14.5 10C14.5 10.35 14.4875 10.6875 14.4625 11.0125C14.4375 11.3375 14.4 11.6667 14.35 12ZM13.95 6H16.9C16.4167 5.16667 15.8125 4.44167 15.0875 3.825C14.3625 3.20833 13.5333 2.75 12.6 2.45C12.9 3 13.1625 3.57083 13.3875 4.1625C13.6125 4.75417 13.8 5.36667 13.95 6ZM8.1 6H11.9C11.7 5.26667 11.4417 4.575 11.125 3.925C10.8083 3.275 10.4333 2.65 10 2.05C9.56667 2.65 9.19167 3.275 8.875 3.925C8.55833 4.575 8.3 5.26667 8.1 6ZM3.1 6H6.05C6.2 5.36667 6.3875 4.75417 6.6125 4.1625C6.8375 3.57083 7.1 3 7.4 2.45C6.46667 2.75 5.6375 3.20833 4.9125 3.825C4.1875 4.44167 3.58333 5.16667 3.1 6Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
  <path d="M1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10H17C17.2833 10 17.5208 10.0958 17.7125 10.2875C17.9042 10.4792 18 10.7167 18 11C18 11.2833 17.9042 11.5208 17.7125 11.7125C17.5208 11.9042 17.2833 12 17 12H1ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H17C17.2833 5 17.5208 5.09583 17.7125 5.2875C17.9042 5.47917 18 5.71667 18 6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7H1ZM1 2C0.716667 2 0.479167 1.90417 0.2875 1.7125C0.0958333 1.52083 0 1.28333 0 1C0 0.716667 0.0958333 0.479167 0.2875 0.2875C0.479167 0.0958333 0.716667 0 1 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1C18 1.28333 17.9042 1.52083 17.7125 1.7125C17.5208 1.90417 17.2833 2 17 2H1Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  more_vert: `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16" fill="none">
  <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14C0 13.45 0.195833 12.9792 0.5875 12.5875C0.979167 12.1958 1.45 12 2 12C2.55 12 3.02083 12.1958 3.4125 12.5875C3.80417 12.9792 4 13.45 4 14C4 14.55 3.80417 15.0208 3.4125 15.4125C3.02083 15.8042 2.55 16 2 16ZM2 10C1.45 10 0.979167 9.80417 0.5875 9.4125C0.195833 9.02083 0 8.55 0 8C0 7.45 0.195833 6.97917 0.5875 6.5875C0.979167 6.19583 1.45 6 2 6C2.55 6 3.02083 6.19583 3.4125 6.5875C3.80417 6.97917 4 7.45 4 8C4 8.55 3.80417 9.02083 3.4125 9.4125C3.02083 9.80417 2.55 10 2 10ZM2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  open_in_new: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H8C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1C9 1.28333 8.90417 1.52083 8.7125 1.7125C8.52083 1.90417 8.28333 2 8 2H2V16H16V10C16 9.71667 16.0958 9.47917 16.2875 9.2875C16.4792 9.09583 16.7167 9 17 9C17.2833 9 17.5208 9.09583 17.7125 9.2875C17.9042 9.47917 18 9.71667 18 10V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM16 3.4L7.4 12C7.21667 12.1833 6.98333 12.275 6.7 12.275C6.41667 12.275 6.18333 12.1833 6 12C5.81667 11.8167 5.725 11.5833 5.725 11.3C5.725 11.0167 5.81667 10.7833 6 10.6L14.6 2H12C11.7167 2 11.4792 1.90417 11.2875 1.7125C11.0958 1.52083 11 1.28333 11 1C11 0.716667 11.0958 0.479167 11.2875 0.2875C11.4792 0.0958333 11.7167 0 12 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1V6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7C16.7167 7 16.4792 6.90417 16.2875 6.7125C16.0958 6.52083 16 6.28333 16 6V3.4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  publish: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M7 7.85L5.125 9.725C4.925 9.925 4.6875 10.0208 4.4125 10.0125C4.1375 10.0042 3.9 9.9 3.7 9.7C3.51667 9.5 3.42083 9.26667 3.4125 9C3.40417 8.73333 3.5 8.5 3.7 8.3L7.3 4.7C7.4 4.6 7.50833 4.52917 7.625 4.4875C7.74167 4.44583 7.86667 4.425 8 4.425C8.13333 4.425 8.25833 4.44583 8.375 4.4875C8.49167 4.52917 8.6 4.6 8.7 4.7L12.3 8.3C12.5 8.5 12.5958 8.73333 12.5875 9C12.5792 9.26667 12.4833 9.5 12.3 9.7C12.1 9.9 11.8625 10.0042 11.5875 10.0125C11.3125 10.0208 11.075 9.925 10.875 9.725L9 7.85V15C9 15.2833 8.90417 15.5208 8.7125 15.7125C8.52083 15.9042 8.28333 16 8 16C7.71667 16 7.47917 15.9042 7.2875 15.7125C7.09583 15.5208 7 15.2833 7 15V7.85ZM0 4V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V4C16 4.28333 15.9042 4.52083 15.7125 4.7125C15.5208 4.90417 15.2833 5 15 5C14.7167 5 14.4792 4.90417 14.2875 4.7125C14.0958 4.52083 14 4.28333 14 4V2H2V4C2 4.28333 1.90417 4.52083 1.7125 4.7125C1.52083 4.90417 1.28333 5 1 5C0.716667 5 0.479167 4.90417 0.2875 4.7125C0.0958333 4.52083 0 4.28333 0 4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M6.71249 13.2125C4.89583 13.2125 3.35833 12.5833 2.09999 11.325C0.841661 10.0667 0.212494 8.52917 0.212494 6.7125C0.212494 4.89583 0.841661 3.35834 2.09999 2.1C3.35833 0.841668 4.89583 0.212502 6.71249 0.212502C8.52916 0.212502 10.0667 0.841668 11.325 2.1C12.5833 3.35834 13.2125 4.89583 13.2125 6.7125C13.2125 7.44584 13.0958 8.1375 12.8625 8.7875C12.6292 9.4375 12.3125 10.0125 11.9125 10.5125L17.5125 16.1125C17.6958 16.2958 17.7875 16.5292 17.7875 16.8125C17.7875 17.0958 17.6958 17.3292 17.5125 17.5125C17.3292 17.6958 17.0958 17.7875 16.8125 17.7875C16.5292 17.7875 16.2958 17.6958 16.1125 17.5125L10.5125 11.9125C10.0125 12.3125 9.43749 12.6292 8.78749 12.8625C8.13749 13.0958 7.44583 13.2125 6.71249 13.2125ZM6.71249 11.2125C7.96249 11.2125 9.02499 10.775 9.89999 9.9C10.775 9.025 11.2125 7.9625 11.2125 6.7125C11.2125 5.4625 10.775 4.4 9.89999 3.525C9.02499 2.65 7.96249 2.2125 6.71249 2.2125C5.46249 2.2125 4.39999 2.65 3.52499 3.525C2.64999 4.4 2.21249 5.4625 2.21249 6.7125C2.21249 7.9625 2.64999 9.025 3.52499 9.9C4.39999 10.775 5.46249 11.2125 6.71249 11.2125Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  share: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.9 12.025 16.6667 12.075 16.3L5.05 12.2C4.78333 12.45 4.475 12.6458 4.125 12.7875C3.775 12.9292 3.4 13 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.4 7 3.775 7.07083 4.125 7.2125C4.475 7.35417 4.78333 7.55 5.05 7.8L12.075 3.7C12.0417 3.58333 12.0208 3.47083 12.0125 3.3625C12.0042 3.25417 12 3.13333 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6 6 14.225 5.92917 13.875 5.7875C13.525 5.64583 13.2167 5.45 12.95 5.2L5.925 9.3C5.95833 9.41667 5.97917 9.52917 5.9875 9.6375C5.99583 9.74583 6 9.86667 6 10C6 10.1333 5.99583 10.2542 5.9875 10.3625C5.97917 10.4708 5.95833 10.5833 5.925 10.7L12.95 14.8C13.2167 14.55 13.525 14.3542 13.875 14.2125C14.225 14.0708 14.6 14 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20ZM15 18C15.2833 18 15.5208 17.9042 15.7125 17.7125C15.9042 17.5208 16 17.2833 16 17C16 16.7167 15.9042 16.4792 15.7125 16.2875C15.5208 16.0958 15.2833 16 15 16C14.7167 16 14.4792 16.0958 14.2875 16.2875C14.0958 16.4792 14 16.7167 14 17C14 17.2833 14.0958 17.5208 14.2875 17.7125C14.4792 17.9042 14.7167 18 15 18ZM3 11C3.28333 11 3.52083 10.9042 3.7125 10.7125C3.90417 10.5208 4 10.2833 4 10C4 9.71667 3.90417 9.47917 3.7125 9.2875C3.52083 9.09583 3.28333 9 3 9C2.71667 9 2.47917 9.09583 2.2875 9.2875C2.09583 9.47917 2 9.71667 2 10C2 10.2833 2.09583 10.5208 2.2875 10.7125C2.47917 10.9042 2.71667 11 3 11ZM15 4C15.2833 4 15.5208 3.90417 15.7125 3.7125C15.9042 3.52083 16 3.28333 16 3C16 2.71667 15.9042 2.47917 15.7125 2.2875C15.5208 2.09583 15.2833 2 15 2C14.7167 2 14.4792 2.09583 14.2875 2.2875C14.0958 2.47917 14 2.71667 14 3C14 3.28333 14.0958 3.52083 14.2875 3.7125C14.4792 3.90417 14.7167 4 15 4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  sms: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
  <path d="M4 16L1.7 18.3C1.38333 18.6167 1.02083 18.6875 0.6125 18.5125C0.204167 18.3375 0 18.025 0 17.575V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4ZM3.15 14H18V2H2V15.125L3.15 14ZM6 9C6.28333 9 6.52083 8.90417 6.7125 8.7125C6.90417 8.52083 7 8.28333 7 8C7 7.71667 6.90417 7.47917 6.7125 7.2875C6.52083 7.09583 6.28333 7 6 7C5.71667 7 5.47917 7.09583 5.2875 7.2875C5.09583 7.47917 5 7.71667 5 8C5 8.28333 5.09583 8.52083 5.2875 8.7125C5.47917 8.90417 5.71667 9 6 9ZM10 9C10.2833 9 10.5208 8.90417 10.7125 8.7125C10.9042 8.52083 11 8.28333 11 8C11 7.71667 10.9042 7.47917 10.7125 7.2875C10.5208 7.09583 10.2833 7 10 7C9.71667 7 9.47917 7.09583 9.2875 7.2875C9.09583 7.47917 9 7.71667 9 8C9 8.28333 9.09583 8.52083 9.2875 8.7125C9.47917 8.90417 9.71667 9 10 9ZM14 9C14.2833 9 14.5208 8.90417 14.7125 8.7125C14.9042 8.52083 15 8.28333 15 8C15 7.71667 14.9042 7.47917 14.7125 7.2875C14.5208 7.09583 14.2833 7 14 7C13.7167 7 13.4792 7.09583 13.2875 7.2875C13.0958 7.47917 13 7.71667 13 8C13 8.28333 13.0958 8.52083 13.2875 8.7125C13.4792 8.90417 13.7167 9 14 9Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  thumb_down: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M2 13C1.46667 13 1 12.8 0.6 12.4C0.2 12 0 11.5333 0 11V9C0 8.88333 0.0125 8.75833 0.0375 8.625C0.0625 8.49167 0.1 8.36667 0.15 8.25L3.15 1.2C3.3 0.866667 3.55 0.583333 3.9 0.35C4.25 0.116667 4.61667 0 5 0H13C13.55 0 14.0208 0.195833 14.4125 0.5875C14.8042 0.979167 15 1.45 15 2V12.175C15 12.4417 14.9458 12.6958 14.8375 12.9375C14.7292 13.1792 14.5833 13.3917 14.4 13.575L8.975 18.975C8.725 19.2083 8.42917 19.35 8.0875 19.4C7.74583 19.45 7.41667 19.3917 7.1 19.225C6.78333 19.0583 6.55417 18.825 6.4125 18.525C6.27083 18.225 6.24167 17.9167 6.325 17.6L7.45 13H2ZM19 0C19.55 0 20.0208 0.195833 20.4125 0.5875C20.8042 0.979167 21 1.45 21 2V11C21 11.55 20.8042 12.0208 20.4125 12.4125C20.0208 12.8042 19.55 13 19 13C18.45 13 17.9792 12.8042 17.5875 12.4125C17.1958 12.0208 17 11.55 17 11V2C17 1.45 17.1958 0.979167 17.5875 0.5875C17.9792 0.195833 18.45 0 19 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  thumb_up: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M19 7.00001C19.5333 7.00001 20 7.20001 20.4 7.60001C20.8 8.00001 21 8.46668 21 9.00001V11C21 11.1167 20.9875 11.2417 20.9625 11.375C20.9375 11.5083 20.9 11.6333 20.85 11.75L17.85 18.8C17.7 19.1333 17.45 19.4167 17.1 19.65C16.75 19.8833 16.3833 20 16 20H8C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18V7.82501C6 7.55834 6.05417 7.30418 6.1625 7.06251C6.27083 6.82084 6.41667 6.60834 6.6 6.42501L12.025 1.02501C12.275 0.791677 12.5708 0.65001 12.9125 0.60001C13.2542 0.55001 13.5833 0.608344 13.9 0.77501C14.2167 0.941677 14.4458 1.17501 14.5875 1.47501C14.7292 1.77501 14.7583 2.08334 14.675 2.40001L13.55 7.00001H19ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V9.00001C0 8.45001 0.195833 7.97918 0.5875 7.58751C0.979167 7.19584 1.45 7.00001 2 7.00001C2.55 7.00001 3.02083 7.19584 3.4125 7.58751C3.80417 7.97918 4 8.45001 4 9.00001V18C4 18.55 3.80417 19.0208 3.4125 19.4125C3.02083 19.8042 2.55 20 2 20Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  upload_file: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
  <path d="M7 12.825V16C7 16.2833 7.09583 16.5208 7.2875 16.7125C7.47917 16.9042 7.71667 17 8 17C8.28333 17 8.52083 16.9042 8.7125 16.7125C8.90417 16.5208 9 16.2833 9 16V12.825L9.9 13.725C10 13.825 10.1125 13.9 10.2375 13.95C10.3625 14 10.4875 14.0208 10.6125 14.0125C10.7375 14.0042 10.8583 13.975 10.975 13.925C11.0917 13.875 11.2 13.8 11.3 13.7C11.4833 13.5 11.5792 13.2667 11.5875 13C11.5958 12.7333 11.5 12.5 11.3 12.3L8.7 9.7C8.6 9.6 8.49167 9.52917 8.375 9.4875C8.25833 9.44583 8.13333 9.425 8 9.425C7.86667 9.425 7.74167 9.44583 7.625 9.4875C7.50833 9.52917 7.4 9.6 7.3 9.7L4.7 12.3C4.5 12.5 4.40417 12.7333 4.4125 13C4.42083 13.2667 4.525 13.5 4.725 13.7C4.925 13.8833 5.15833 13.9792 5.425 13.9875C5.69167 13.9958 5.925 13.9 6.125 13.7L7 12.825ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9.175C9.44167 0 9.69583 0.05 9.9375 0.15C10.1792 0.25 10.3917 0.391667 10.575 0.575L15.425 5.425C15.6083 5.60833 15.75 5.82083 15.85 6.0625C15.95 6.30417 16 6.55833 16 6.825V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 6V2H2V18H14V7H10C9.71667 7 9.47917 6.90417 9.2875 6.7125C9.09583 6.52083 9 6.28333 9 6Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  visibility: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
  <path d="M11 12.5C12.25 12.5 13.3125 12.0625 14.1875 11.1875C15.0625 10.3125 15.5 9.25 15.5 8C15.5 6.75 15.0625 5.6875 14.1875 4.8125C13.3125 3.9375 12.25 3.5 11 3.5C9.75 3.5 8.6875 3.9375 7.8125 4.8125C6.9375 5.6875 6.5 6.75 6.5 8C6.5 9.25 6.9375 10.3125 7.8125 11.1875C8.6875 12.0625 9.75 12.5 11 12.5ZM11 10.7C10.25 10.7 9.6125 10.4375 9.0875 9.9125C8.5625 9.3875 8.3 8.75 8.3 8C8.3 7.25 8.5625 6.6125 9.0875 6.0875C9.6125 5.5625 10.25 5.3 11 5.3C11.75 5.3 12.3875 5.5625 12.9125 6.0875C13.4375 6.6125 13.7 7.25 13.7 8C13.7 8.75 13.4375 9.3875 12.9125 9.9125C12.3875 10.4375 11.75 10.7 11 10.7ZM11 15.5C8.56667 15.5 6.35 14.8208 4.35 13.4625C2.35 12.1042 0.9 10.2833 0 8C0.9 5.71667 2.35 3.89583 4.35 2.5375C6.35 1.17917 8.56667 0.5 11 0.5C13.4333 0.5 15.65 1.17917 17.65 2.5375C19.65 3.89583 21.1 5.71667 22 8C21.1 10.2833 19.65 12.1042 17.65 13.4625C15.65 14.8208 13.4333 15.5 11 15.5ZM11 13.5C12.8833 13.5 14.6125 13.0042 16.1875 12.0125C17.7625 11.0208 18.9667 9.68333 19.8 8C18.9667 6.31667 17.7625 4.97917 16.1875 3.9875C14.6125 2.99583 12.8833 2.5 11 2.5C9.11667 2.5 7.3875 2.99583 5.8125 3.9875C4.2375 4.97917 3.03333 6.31667 2.2 8C3.03333 9.68333 4.2375 11.0208 5.8125 12.0125C7.3875 13.0042 9.11667 13.5 11 13.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  visibility_off: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
  <path d="M15.1 10.6L13.65 9.15C13.8 8.36667 13.575 7.63333 12.975 6.95C12.375 6.26667 11.6 6 10.65 6.15L9.2 4.7C9.48333 4.56667 9.77083 4.46667 10.0625 4.4C10.3542 4.33333 10.6667 4.3 11 4.3C12.25 4.3 13.3125 4.7375 14.1875 5.6125C15.0625 6.4875 15.5 7.55 15.5 8.8C15.5 9.13333 15.4667 9.44583 15.4 9.7375C15.3333 10.0292 15.2333 10.3167 15.1 10.6ZM18.3 13.75L16.85 12.35C17.4833 11.8667 18.0458 11.3375 18.5375 10.7625C19.0292 10.1875 19.45 9.53333 19.8 8.8C18.9667 7.11667 17.7708 5.77917 16.2125 4.7875C14.6542 3.79583 12.9167 3.3 11 3.3C10.5167 3.3 10.0417 3.33333 9.575 3.4C9.10833 3.46667 8.65 3.56667 8.2 3.7L6.65 2.15C7.33333 1.86667 8.03333 1.65417 8.75 1.5125C9.46667 1.37083 10.2167 1.3 11 1.3C13.5167 1.3 15.7583 1.99583 17.725 3.3875C19.6917 4.77917 21.1167 6.58333 22 8.8C21.6167 9.78333 21.1125 10.6958 20.4875 11.5375C19.8625 12.3792 19.1333 13.1167 18.3 13.75ZM18.8 19.9L14.6 15.75C14.0167 15.9333 13.4292 16.0708 12.8375 16.1625C12.2458 16.2542 11.6333 16.3 11 16.3C8.48333 16.3 6.24167 15.6042 4.275 14.2125C2.30833 12.8208 0.883333 11.0167 0 8.8C0.35 7.91667 0.791667 7.09583 1.325 6.3375C1.85833 5.57917 2.46667 4.9 3.15 4.3L0.4 1.5L1.8 0.0999985L20.2 18.5L18.8 19.9ZM4.55 5.7C4.06667 6.13333 3.625 6.60833 3.225 7.125C2.825 7.64167 2.48333 8.2 2.2 8.8C3.03333 10.4833 4.22917 11.8208 5.7875 12.8125C7.34583 13.8042 9.08333 14.3 11 14.3C11.3333 14.3 11.6583 14.2792 11.975 14.2375C12.2917 14.1958 12.6167 14.15 12.95 14.1L12.05 13.15C11.8667 13.2 11.6917 13.2375 11.525 13.2625C11.3583 13.2875 11.1833 13.3 11 13.3C9.75 13.3 8.6875 12.8625 7.8125 11.9875C6.9375 11.1125 6.5 10.05 6.5 8.8C6.5 8.61667 6.5125 8.44167 6.5375 8.275C6.5625 8.10833 6.6 7.93333 6.65 7.75L4.55 5.7Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  notifications: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
  <path d="M1 17C0.716667 17 0.479167 16.9042 0.2875 16.7125C0.0958333 16.5208 0 16.2833 0 16C0 15.7167 0.0958333 15.4792 0.2875 15.2875C0.479167 15.0958 0.716667 15 1 15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V2.2C10.8333 2.53333 11.9167 3.2375 12.75 4.3125C13.5833 5.3875 14 6.61667 14 8V15H15C15.2833 15 15.5208 15.0958 15.7125 15.2875C15.9042 15.4792 16 15.7167 16 16C16 16.2833 15.9042 16.5208 15.7125 16.7125C15.5208 16.9042 15.2833 17 15 17H1ZM8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20ZM4 15H12V8C12 6.9 11.6083 5.95833 10.825 5.175C10.0417 4.39167 9.1 4 8 4C6.9 4 5.95833 4.39167 5.175 5.175C4.39167 5.95833 4 6.9 4 8V15Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  // *** Arrows *** //
  arrow_back: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.6125 8.9935L8.5125 13.8935C8.7125 14.0935 8.80834 14.3268 8.8 14.5935C8.79167 14.8602 8.6875 15.0935 8.4875 15.2935C8.2875 15.4768 8.05417 15.5727 7.7875 15.581C7.52083 15.5893 7.2875 15.4935 7.0875 15.2935L0.487502 8.6935C0.387502 8.5935 0.316668 8.48517 0.275002 8.3685C0.233335 8.25184 0.212502 8.12684 0.212502 7.9935C0.212502 7.86017 0.233335 7.73517 0.275002 7.6185C0.316668 7.50184 0.387502 7.3935 0.487502 7.2935L7.0875 0.693503C7.27083 0.510169 7.5 0.418503 7.775 0.418503C8.05 0.418503 8.2875 0.510169 8.4875 0.693503C8.6875 0.893503 8.7875 1.131 8.7875 1.406C8.7875 1.681 8.6875 1.9185 8.4875 2.1185L3.6125 6.9935H14.7875C15.0708 6.9935 15.3083 7.08934 15.5 7.281C15.6917 7.47267 15.7875 7.71017 15.7875 7.9935C15.7875 8.27684 15.6917 8.51434 15.5 8.706C15.3083 8.89767 15.0708 8.9935 14.7875 8.9935H3.6125Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Chevrons *** //
  chevron_down: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path d="M10.0065 8.5L17.3565 1.15C17.6065 0.899999 17.8981 0.779165 18.2315 0.787499C18.5648 0.795832 18.8565 0.924999 19.1065 1.175C19.3565 1.425 19.4815 1.71667 19.4815 2.05C19.4815 2.38333 19.3565 2.675 19.1065 2.925L11.4315 10.625C11.2315 10.825 11.0065 10.975 10.7565 11.075C10.5065 11.175 10.2565 11.225 10.0065 11.225C9.75646 11.225 9.50646 11.175 9.25646 11.075C9.00646 10.975 8.78146 10.825 8.58146 10.625L0.881458 2.925C0.631458 2.675 0.510625 2.37916 0.518958 2.0375C0.527291 1.69583 0.656458 1.4 0.906458 1.15C1.15646 0.899999 1.44812 0.774999 1.78146 0.774999C2.11479 0.774999 2.40646 0.899999 2.65646 1.15L10.0065 8.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  chevron_up: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path d="M9.99354 3.5L2.64354 10.85C2.39354 11.1 2.10188 11.2208 1.76854 11.2125C1.43521 11.2042 1.14354 11.075 0.893541 10.825C0.643541 10.575 0.518541 10.2833 0.518541 9.95C0.518541 9.61667 0.643541 9.325 0.893541 9.075L8.56854 1.375C8.76854 1.175 8.99354 1.025 9.24354 0.925002C9.49354 0.825002 9.74354 0.775002 9.99354 0.775002C10.2435 0.775002 10.4935 0.825002 10.7435 0.925002C10.9935 1.025 11.2185 1.175 11.4185 1.375L19.1185 9.075C19.3685 9.325 19.4894 9.62084 19.481 9.9625C19.4727 10.3042 19.3435 10.6 19.0935 10.85C18.8435 11.1 18.5519 11.225 18.2185 11.225C17.8852 11.225 17.5935 11.1 17.3435 10.85L9.99354 3.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  chevron_left: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M3.49999 10.0065L10.85 17.3565C11.1 17.6065 11.2208 17.8981 11.2125 18.2315C11.2042 18.5648 11.075 18.8565 10.825 19.1065C10.575 19.3565 10.2833 19.4815 9.94999 19.4815C9.61666 19.4815 9.32499 19.3565 9.07499 19.1065L1.37499 11.4315C1.17499 11.2315 1.02499 11.0065 0.924994 10.7565C0.824994 10.5065 0.774994 10.2565 0.774994 10.0065C0.774994 9.75645 0.824994 9.50645 0.924994 9.25645C1.02499 9.00645 1.17499 8.78145 1.37499 8.58145L9.07499 0.88145C9.32499 0.63145 9.62083 0.510617 9.96249 0.51895C10.3042 0.527284 10.6 0.65645 10.85 0.90645C11.1 1.15645 11.225 1.44812 11.225 1.78145C11.225 2.11478 11.1 2.40645 10.85 2.65645L3.49999 10.0065Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  chevron_right: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M8.50001 9.99355L1.15001 2.64355C0.900008 2.39355 0.779174 2.10188 0.787508 1.76855C0.795841 1.43521 0.925008 1.14355 1.17501 0.893548C1.42501 0.643548 1.71667 0.518548 2.05001 0.518548C2.38334 0.518548 2.67501 0.643548 2.92501 0.893548L10.625 8.56855C10.825 8.76855 10.975 8.99355 11.075 9.24355C11.175 9.49355 11.225 9.74355 11.225 9.99355C11.225 10.2435 11.175 10.4935 11.075 10.7435C10.975 10.9935 10.825 11.2185 10.625 11.4185L2.92501 19.1185C2.67501 19.3685 2.37917 19.4894 2.03751 19.481C1.69584 19.4727 1.40001 19.3435 1.15001 19.0935C0.900006 18.8435 0.775006 18.5519 0.775006 18.2185C0.775006 17.8852 0.900006 17.5935 1.15001 17.3435L8.50001 9.99355Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Environmental *** //
  ac_unit: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 15.85L6.425 18.375C6.24167 18.5583 6.0125 18.65 5.7375 18.65C5.4625 18.65 5.23333 18.55 5.05 18.35C4.85 18.1667 4.75 17.9375 4.75 17.6625C4.75 17.3875 4.85 17.15 5.05 16.95L9 13V11H7L3.025 14.975C2.84167 15.1583 2.6125 15.25 2.3375 15.25C2.0625 15.25 1.825 15.15 1.625 14.95C1.44167 14.7667 1.35 14.5375 1.35 14.2625C1.35 13.9875 1.44167 13.7583 1.625 13.575L4.15 11H0.975C0.691667 11 0.458333 10.9042 0.275 10.7125C0.0916667 10.5208 0 10.2833 0 10C0 9.71667 0.0958333 9.47917 0.2875 9.2875C0.479167 9.09583 0.716667 9 1 9H4.15L1.625 6.45C1.44167 6.26667 1.35 6.0375 1.35 5.7625C1.35 5.4875 1.45 5.25 1.65 5.05C1.83333 4.86667 2.0625 4.775 2.3375 4.775C2.6125 4.775 2.85 4.86667 3.05 5.05L7 9H9V7L5.025 3.05C4.84167 2.86667 4.75 2.6375 4.75 2.3625C4.75 2.0875 4.85 1.85 5.05 1.65C5.23333 1.46667 5.4625 1.375 5.7375 1.375C6.0125 1.375 6.24167 1.46667 6.425 1.65L9 4.15V1C9 0.716667 9.09583 0.479167 9.2875 0.2875C9.47917 0.0958333 9.71667 0 10 0C10.2833 0 10.5208 0.0958333 10.7125 0.2875C10.9042 0.479167 11 0.716667 11 1V4.15L13.55 1.65C13.7333 1.46667 13.9625 1.375 14.2375 1.375C14.5125 1.375 14.75 1.46667 14.95 1.65C15.1333 1.85 15.225 2.0875 15.225 2.3625C15.225 2.6375 15.1333 2.86667 14.95 3.05L11 7V9H13L16.95 5.05C17.1333 4.86667 17.3625 4.775 17.6375 4.775C17.9125 4.775 18.15 4.875 18.35 5.075C18.5333 5.25833 18.625 5.4875 18.625 5.7625C18.625 6.0375 18.5333 6.26667 18.35 6.45L15.85 9H19C19.2833 9 19.5208 9.09583 19.7125 9.2875C19.9042 9.47917 20 9.71667 20 10C20 10.2833 19.9042 10.5208 19.7125 10.7125C19.5208 10.9042 19.2833 11 19 11H15.85L18.35 13.575C18.5333 13.7583 18.625 13.9875 18.625 14.2625C18.625 14.5375 18.5333 14.7667 18.35 14.95C18.15 15.15 17.9125 15.25 17.6375 15.25C17.3625 15.25 17.1333 15.15 16.95 14.95L13 11H11V13L14.95 16.975C15.1333 17.1583 15.225 17.3875 15.225 17.6625C15.225 17.9375 15.125 18.175 14.925 18.375C14.7417 18.5583 14.5125 18.65 14.2375 18.65C13.9625 18.65 13.7333 18.5583 13.55 18.375L11 15.85V19.025C11 19.3083 10.9042 19.5417 10.7125 19.725C10.5208 19.9083 10.2833 20 10 20C9.71667 20 9.47917 19.9042 9.2875 19.7125C9.09583 19.5208 9 19.2833 9 19V15.85Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  air: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
  <path d="M9.5 17C8.96667 17 8.47083 16.8667 8.0125 16.6C7.55417 16.3333 7.18333 15.9667 6.9 15.5C6.71667 15.1667 6.7125 14.8333 6.8875 14.5C7.0625 14.1667 7.33333 14 7.7 14C7.91667 14 8.10833 14.0667 8.275 14.2C8.44167 14.3333 8.59167 14.4833 8.725 14.65C8.80833 14.7667 8.92083 14.8542 9.0625 14.9125C9.20417 14.9708 9.35 15 9.5 15C9.78333 15 10.0208 14.9042 10.2125 14.7125C10.4042 14.5208 10.5 14.2833 10.5 14C10.5 13.7167 10.4042 13.4792 10.2125 13.2875C10.0208 13.0958 9.78333 13 9.5 13H1C0.716667 13 0.479167 12.9042 0.2875 12.7125C0.0958333 12.5208 0 12.2833 0 12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11H9.5C10.3333 11 11.0417 11.2917 11.625 11.875C12.2083 12.4583 12.5 13.1667 12.5 14C12.5 14.8333 12.2083 15.5417 11.625 16.125C11.0417 16.7083 10.3333 17 9.5 17ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H13.5C13.9167 5 14.2708 4.85417 14.5625 4.5625C14.8542 4.27083 15 3.91667 15 3.5C15 3.08333 14.8542 2.72917 14.5625 2.4375C14.2708 2.14583 13.9167 2 13.5 2C13.2333 2 12.9833 2.0625 12.75 2.1875C12.5167 2.3125 12.3333 2.49167 12.2 2.725C12.0833 2.925 11.9417 3.10417 11.775 3.2625C11.6083 3.42083 11.4083 3.5 11.175 3.5C10.8417 3.5 10.5708 3.375 10.3625 3.125C10.1542 2.875 10.1 2.60833 10.2 2.325C10.4333 1.625 10.8542 1.0625 11.4625 0.6375C12.0708 0.2125 12.75 0 13.5 0C14.4667 0 15.2917 0.341667 15.975 1.025C16.6583 1.70833 17 2.53333 17 3.5C17 4.46667 16.6583 5.29167 15.975 5.975C15.2917 6.65833 14.4667 7 13.5 7H1ZM17.95 14.7C17.6167 14.85 17.2917 14.8292 16.975 14.6375C16.6583 14.4458 16.5 14.1667 16.5 13.8C16.5 13.5667 16.5792 13.3708 16.7375 13.2125C16.8958 13.0542 17.075 12.9167 17.275 12.8C17.5083 12.6667 17.6875 12.4833 17.8125 12.25C17.9375 12.0167 18 11.7667 18 11.5C18 11.0833 17.8542 10.7292 17.5625 10.4375C17.2708 10.1458 16.9167 10 16.5 10H1C0.716667 10 0.479167 9.90417 0.2875 9.7125C0.0958333 9.52083 0 9.28333 0 9C0 8.71667 0.0958333 8.47917 0.2875 8.2875C0.479167 8.09583 0.716667 8 1 8H16.5C17.4667 8 18.2917 8.34167 18.975 9.025C19.6583 9.70833 20 10.5333 20 11.5C20 12.2 19.8167 12.8375 19.45 13.4125C19.0833 13.9875 18.5833 14.4167 17.95 14.7Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  clear_day: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 4C10.7167 4 10.4792 3.90417 10.2875 3.7125C10.0958 3.52083 10 3.28333 10 3V1C10 0.716667 10.0958 0.479167 10.2875 0.2875C10.4792 0.0958333 10.7167 0 11 0C11.2833 0 11.5208 0.0958333 11.7125 0.2875C11.9042 0.479167 12 0.716667 12 1V3C12 3.28333 11.9042 3.52083 11.7125 3.7125C11.5208 3.90417 11.2833 4 11 4ZM15.95 6.05C15.7667 5.86667 15.675 5.6375 15.675 5.3625C15.675 5.0875 15.7667 4.85 15.95 4.65L17.35 3.225C17.55 3.025 17.7875 2.925 18.0625 2.925C18.3375 2.925 18.575 3.025 18.775 3.225C18.9583 3.40833 19.05 3.64167 19.05 3.925C19.05 4.20833 18.9583 4.44167 18.775 4.625L17.35 6.05C17.1667 6.23333 16.9333 6.325 16.65 6.325C16.3667 6.325 16.1333 6.23333 15.95 6.05ZM19 12C18.7167 12 18.4792 11.9042 18.2875 11.7125C18.0958 11.5208 18 11.2833 18 11C18 10.7167 18.0958 10.4792 18.2875 10.2875C18.4792 10.0958 18.7167 10 19 10H21C21.2833 10 21.5208 10.0958 21.7125 10.2875C21.9042 10.4792 22 10.7167 22 11C22 11.2833 21.9042 11.5208 21.7125 11.7125C21.5208 11.9042 21.2833 12 21 12H19ZM11 22C10.7167 22 10.4792 21.9042 10.2875 21.7125C10.0958 21.5208 10 21.2833 10 21V19C10 18.7167 10.0958 18.4792 10.2875 18.2875C10.4792 18.0958 10.7167 18 11 18C11.2833 18 11.5208 18.0958 11.7125 18.2875C11.9042 18.4792 12 18.7167 12 19V21C12 21.2833 11.9042 21.5208 11.7125 21.7125C11.5208 21.9042 11.2833 22 11 22ZM4.65 6.05L3.225 4.65C3.025 4.45 2.925 4.20833 2.925 3.925C2.925 3.64167 3.025 3.40833 3.225 3.225C3.40833 3.04167 3.64167 2.95 3.925 2.95C4.20833 2.95 4.44167 3.04167 4.625 3.225L6.05 4.65C6.23333 4.83333 6.325 5.06667 6.325 5.35C6.325 5.63333 6.23333 5.86667 6.05 6.05C5.85 6.23333 5.61667 6.325 5.35 6.325C5.08333 6.325 4.85 6.23333 4.65 6.05ZM17.35 18.775L15.95 17.35C15.7667 17.15 15.675 16.9125 15.675 16.6375C15.675 16.3625 15.7667 16.1333 15.95 15.95C16.1333 15.7667 16.3625 15.675 16.6375 15.675C16.9125 15.675 17.15 15.7667 17.35 15.95L18.775 17.35C18.975 17.5333 19.0708 17.7667 19.0625 18.05C19.0542 18.3333 18.9583 18.575 18.775 18.775C18.575 18.975 18.3333 19.075 18.05 19.075C17.7667 19.075 17.5333 18.975 17.35 18.775ZM1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10H3C3.28333 10 3.52083 10.0958 3.7125 10.2875C3.90417 10.4792 4 10.7167 4 11C4 11.2833 3.90417 11.5208 3.7125 11.7125C3.52083 11.9042 3.28333 12 3 12H1ZM3.225 18.775C3.04167 18.5917 2.95 18.3583 2.95 18.075C2.95 17.7917 3.04167 17.5583 3.225 17.375L4.65 15.95C4.83333 15.7667 5.0625 15.675 5.3375 15.675C5.6125 15.675 5.85 15.7667 6.05 15.95C6.25 16.15 6.35 16.3875 6.35 16.6625C6.35 16.9375 6.25 17.175 6.05 17.375L4.65 18.775C4.45 18.975 4.20833 19.075 3.925 19.075C3.64167 19.075 3.40833 18.975 3.225 18.775ZM11 17C9.33333 17 7.91667 16.4167 6.75 15.25C5.58333 14.0833 5 12.6667 5 11C5 9.33333 5.58333 7.91667 6.75 6.75C7.91667 5.58333 9.33333 5 11 5C12.6667 5 14.0833 5.58333 15.25 6.75C16.4167 7.91667 17 9.33333 17 11C17 12.6667 16.4167 14.0833 15.25 15.25C14.0833 16.4167 12.6667 17 11 17ZM11 15C12.1 15 13.0417 14.6083 13.825 13.825C14.6083 13.0417 15 12.1 15 11C15 9.9 14.6083 8.95833 13.825 8.175C13.0417 7.39167 12.1 7 11 7C9.9 7 8.95833 7.39167 8.175 8.175C7.39167 8.95833 7 9.9 7 11C7 12.1 7.39167 13.0417 8.175 13.825C8.95833 14.6083 9.9 15 11 15Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  coronavirus: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.25 20C9.05 20 8.875 19.925 8.725 19.775C8.575 19.625 8.5 19.45 8.5 19.25C8.5 19.05 8.575 18.875 8.725 18.725C8.875 18.575 9.05 18.5 9.25 18.5V16.95C8.55 16.8667 7.89167 16.7 7.275 16.45C6.65833 16.2 6.1 15.8667 5.6 15.45L4.525 16.55C4.675 16.7 4.75 16.875 4.75 17.075C4.75 17.275 4.675 17.45 4.525 17.6C4.375 17.75 4.2 17.825 4 17.825C3.8 17.825 3.625 17.75 3.475 17.6L2.4 16.55C2.25 16.4 2.175 16.2208 2.175 16.0125C2.175 15.8042 2.25 15.625 2.4 15.475C2.55 15.325 2.725 15.2542 2.925 15.2625C3.125 15.2708 3.3 15.3417 3.45 15.475L4.55 14.375C4.13333 13.8583 3.8 13.3 3.55 12.7C3.3 12.1 3.13333 11.45 3.05 10.75H1.5C1.5 10.95 1.425 11.125 1.275 11.275C1.125 11.425 0.95 11.5 0.75 11.5C0.55 11.5 0.375 11.425 0.225 11.275C0.075 11.125 0 10.95 0 10.75V9.25C0 9.05 0.075 8.875 0.225 8.725C0.375 8.575 0.55 8.5 0.75 8.5C0.95 8.5 1.125 8.575 1.275 8.725C1.425 8.875 1.5 9.05 1.5 9.25H3.05C3.13333 8.55 3.30417 7.9 3.5625 7.3C3.82083 6.7 4.15 6.14167 4.55 5.625L3.45 4.525C3.3 4.65833 3.125 4.72917 2.925 4.7375C2.725 4.74583 2.55 4.675 2.4 4.525C2.25 4.375 2.175 4.19583 2.175 3.9875C2.175 3.77917 2.25 3.6 2.4 3.45L3.45 2.4C3.6 2.25 3.77917 2.175 3.9875 2.175C4.19583 2.175 4.375 2.25 4.525 2.4C4.675 2.55 4.75 2.72917 4.75 2.9375C4.75 3.14583 4.675 3.325 4.525 3.475L5.6 4.55C6.11667 4.13333 6.675 3.8 7.275 3.55C7.875 3.3 8.525 3.13333 9.225 3.05V1.5C9.025 1.5 8.85417 1.425 8.7125 1.275C8.57083 1.125 8.5 0.95 8.5 0.75C8.5 0.55 8.575 0.375 8.725 0.225C8.875 0.075 9.05 0 9.25 0H10.75C10.95 0 11.125 0.075 11.275 0.225C11.425 0.375 11.5 0.55 11.5 0.75C11.5 0.95 11.425 1.125 11.275 1.275C11.125 1.425 10.95 1.5 10.75 1.5V3.05C11.45 3.13333 12.1 3.3 12.7 3.55C13.3 3.8 13.8583 4.13333 14.375 4.55L15.475 3.45C15.325 3.3 15.25 3.125 15.25 2.925C15.25 2.725 15.325 2.55 15.475 2.4C15.625 2.25 15.8042 2.175 16.0125 2.175C16.2208 2.175 16.4 2.25 16.55 2.4L17.6 3.475C17.75 3.625 17.825 3.8 17.825 4C17.825 4.2 17.75 4.375 17.6 4.525C17.45 4.675 17.2708 4.75 17.0625 4.75C16.8542 4.75 16.675 4.675 16.525 4.525L15.45 5.6C15.8667 6.11667 16.2 6.67917 16.45 7.2875C16.7 7.89583 16.8667 8.55 16.95 9.25H18.5C18.5 9.05 18.575 8.875 18.725 8.725C18.875 8.575 19.05 8.5 19.25 8.5C19.45 8.5 19.625 8.575 19.775 8.725C19.925 8.875 20 9.05 20 9.25V10.75C20 10.95 19.925 11.125 19.775 11.275C19.625 11.425 19.45 11.5 19.25 11.5C19.05 11.5 18.875 11.425 18.725 11.275C18.575 11.125 18.5 10.95 18.5 10.75H16.95C16.8667 11.45 16.7 12.1042 16.45 12.7125C16.2 13.3208 15.8667 13.8833 15.45 14.4L16.525 15.475C16.675 15.325 16.8542 15.25 17.0625 15.25C17.2708 15.25 17.45 15.325 17.6 15.475C17.75 15.625 17.825 15.8042 17.825 16.0125C17.825 16.2208 17.75 16.4 17.6 16.55L16.55 17.6C16.4 17.75 16.2208 17.825 16.0125 17.825C15.8042 17.825 15.625 17.75 15.475 17.6C15.325 17.45 15.2542 17.275 15.2625 17.075C15.2708 16.875 15.3417 16.7 15.475 16.55L14.375 15.45C13.8583 15.8667 13.3 16.2042 12.7 16.4625C12.1 16.7208 11.45 16.8917 10.75 16.975V18.5C10.95 18.5 11.125 18.575 11.275 18.725C11.425 18.875 11.5 19.05 11.5 19.25C11.5 19.45 11.425 19.625 11.275 19.775C11.125 19.925 10.95 20 10.75 20H9.25ZM10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM8.25 14C8.53333 14 8.77083 13.9042 8.9625 13.7125C9.15417 13.5208 9.25 13.2833 9.25 13C9.25 12.7167 9.15417 12.4792 8.9625 12.2875C8.77083 12.0958 8.53333 12 8.25 12C7.96667 12 7.72917 12.0958 7.5375 12.2875C7.34583 12.4792 7.25 12.7167 7.25 13C7.25 13.2833 7.34583 13.5208 7.5375 13.7125C7.72917 13.9042 7.96667 14 8.25 14ZM11.75 14C12.0333 14 12.2708 13.9042 12.4625 13.7125C12.6542 13.5208 12.75 13.2833 12.75 13C12.75 12.7167 12.6542 12.4792 12.4625 12.2875C12.2708 12.0958 12.0333 12 11.75 12C11.4667 12 11.2292 12.0958 11.0375 12.2875C10.8458 12.4792 10.75 12.7167 10.75 13C10.75 13.2833 10.8458 13.5208 11.0375 13.7125C11.2292 13.9042 11.4667 14 11.75 14ZM6.5 11C6.78333 11 7.02083 10.9042 7.2125 10.7125C7.40417 10.5208 7.5 10.2833 7.5 10C7.5 9.71667 7.40417 9.47917 7.2125 9.2875C7.02083 9.09583 6.78333 9 6.5 9C6.21667 9 5.97917 9.09583 5.7875 9.2875C5.59583 9.47917 5.5 9.71667 5.5 10C5.5 10.2833 5.59583 10.5208 5.7875 10.7125C5.97917 10.9042 6.21667 11 6.5 11ZM10 11C10.2833 11 10.5208 10.9042 10.7125 10.7125C10.9042 10.5208 11 10.2833 11 10C11 9.71667 10.9042 9.47917 10.7125 9.2875C10.5208 9.09583 10.2833 9 10 9C9.71667 9 9.47917 9.09583 9.2875 9.2875C9.09583 9.47917 9 9.71667 9 10C9 10.2833 9.09583 10.5208 9.2875 10.7125C9.47917 10.9042 9.71667 11 10 11ZM13.5 11C13.7833 11 14.0208 10.9042 14.2125 10.7125C14.4042 10.5208 14.5 10.2833 14.5 10C14.5 9.71667 14.4042 9.47917 14.2125 9.2875C14.0208 9.09583 13.7833 9 13.5 9C13.2167 9 12.9792 9.09583 12.7875 9.2875C12.5958 9.47917 12.5 9.71667 12.5 10C12.5 10.2833 12.5958 10.5208 12.7875 10.7125C12.9792 10.9042 13.2167 11 13.5 11ZM8.25 8C8.53333 8 8.77083 7.90417 8.9625 7.7125C9.15417 7.52083 9.25 7.28333 9.25 7C9.25 6.71667 9.15417 6.47917 8.9625 6.2875C8.77083 6.09583 8.53333 6 8.25 6C7.96667 6 7.72917 6.09583 7.5375 6.2875C7.34583 6.47917 7.25 6.71667 7.25 7C7.25 7.28333 7.34583 7.52083 7.5375 7.7125C7.72917 7.90417 7.96667 8 8.25 8ZM11.75 8C12.0333 8 12.2708 7.90417 12.4625 7.7125C12.6542 7.52083 12.75 7.28333 12.75 7C12.75 6.71667 12.6542 6.47917 12.4625 6.2875C12.2708 6.09583 12.0333 6 11.75 6C11.4667 6 11.2292 6.09583 11.0375 6.2875C10.8458 6.47917 10.75 6.71667 10.75 7C10.75 7.28333 10.8458 7.52083 11.0375 7.7125C11.2292 7.90417 11.4667 8 11.75 8Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  rainy: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M11.95 19.9C11.7 20.0333 11.4458 20.0542 11.1875 19.9625C10.9292 19.8708 10.7333 19.7 10.6 19.45L9.1 16.45C8.96667 16.2 8.94583 15.9458 9.0375 15.6875C9.12917 15.4292 9.3 15.2333 9.55 15.1C9.8 14.9667 10.0542 14.9458 10.3125 15.0375C10.5708 15.1292 10.7667 15.3 10.9 15.55L12.4 18.55C12.5333 18.8 12.5542 19.0542 12.4625 19.3125C12.3708 19.5708 12.2 19.7667 11.95 19.9ZM17.95 19.9C17.7 20.0333 17.4458 20.0542 17.1875 19.9625C16.9292 19.8708 16.7333 19.7 16.6 19.45L15.1 16.45C14.9667 16.2 14.9458 15.9458 15.0375 15.6875C15.1292 15.4292 15.3 15.2333 15.55 15.1C15.8 14.9667 16.0542 14.9458 16.3125 15.0375C16.5708 15.1292 16.7667 15.3 16.9 15.55L18.4 18.55C18.5333 18.8 18.5542 19.0542 18.4625 19.3125C18.3708 19.5708 18.2 19.7667 17.95 19.9ZM5.95 19.9C5.7 20.0333 5.44583 20.0542 5.1875 19.9625C4.92917 19.8708 4.73333 19.7 4.6 19.45L3.1 16.45C2.96667 16.2 2.94583 15.9458 3.0375 15.6875C3.12917 15.4292 3.3 15.2333 3.55 15.1C3.8 14.9667 4.05417 14.9458 4.3125 15.0375C4.57083 15.1292 4.76667 15.3 4.9 15.55L6.4 18.55C6.53333 18.8 6.55417 19.0542 6.4625 19.3125C6.37083 19.5708 6.2 19.7667 5.95 19.9ZM5.5 14C3.98333 14 2.6875 13.4625 1.6125 12.3875C0.5375 11.3125 0 10.0167 0 8.5C0 7.11667 0.458333 5.90833 1.375 4.875C2.29167 3.84167 3.425 3.23333 4.775 3.05C5.30833 2.1 6.0375 1.35417 6.9625 0.8125C7.8875 0.270833 8.9 0 10 0C11.5 0 12.8042 0.479167 13.9125 1.4375C15.0208 2.39583 15.6917 3.59167 15.925 5.025C17.075 5.125 18.0417 5.6 18.825 6.45C19.6083 7.3 20 8.31667 20 9.5C20 10.75 19.5625 11.8125 18.6875 12.6875C17.8125 13.5625 16.75 14 15.5 14H5.5ZM5.5 12H15.5C16.2 12 16.7917 11.7583 17.275 11.275C17.7583 10.7917 18 10.2 18 9.5C18 8.8 17.7583 8.20833 17.275 7.725C16.7917 7.24167 16.2 7 15.5 7H14V6C14 4.9 13.6083 3.95833 12.825 3.175C12.0417 2.39167 11.1 2 10 2C9.2 2 8.47083 2.21667 7.8125 2.65C7.15417 3.08333 6.65833 3.66667 6.325 4.4L6.075 5H5.45C4.5 5.03333 3.6875 5.3875 3.0125 6.0625C2.3375 6.7375 2 7.55 2 8.5C2 9.46667 2.34167 10.2917 3.025 10.975C3.70833 11.6583 4.53333 12 5.5 12Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Intent *** //
  check_circle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M8.6 11.8L6.45 9.65C6.26667 9.46667 6.03333 9.375 5.75 9.375C5.46667 9.375 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.1 14.1 8.33333 14.2 8.6 14.2C8.86667 14.2 9.1 14.1 9.3 13.9L14.95 8.25C15.1333 8.06667 15.225 7.83333 15.225 7.55C15.225 7.26667 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  emergency_home: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 21.025C10.7333 21.025 10.4791 20.975 10.2375 20.875C9.99581 20.775 9.77498 20.6333 9.57498 20.45L1.54998 12.425C1.36664 12.225 1.22498 12.0041 1.12498 11.7625C1.02498 11.5208 0.974976 11.2666 0.974976 11C0.974976 10.7333 1.02498 10.475 1.12498 10.225C1.22498 9.97498 1.36664 9.75831 1.54998 9.57498L9.57498 1.54998C9.77498 1.34998 9.99581 1.20414 10.2375 1.11248C10.4791 1.02081 10.7333 0.974976 11 0.974976C11.2666 0.974976 11.525 1.02081 11.775 1.11248C12.025 1.20414 12.2416 1.34998 12.425 1.54998L20.45 9.57498C20.65 9.75831 20.7958 9.97498 20.8875 10.225C20.9791 10.475 21.025 10.7333 21.025 11C21.025 11.2666 20.9791 11.5208 20.8875 11.7625C20.7958 12.0041 20.65 12.225 20.45 12.425L12.425 20.45C12.2416 20.6333 12.025 20.775 11.775 20.875C11.525 20.975 11.2666 21.025 11 21.025ZM11 19.025L19.025 11L11 2.97498L2.97498 11L11 19.025ZM9.99998 12H12V5.99998H9.99998V12ZM11 15C11.2833 15 11.5208 14.9041 11.7125 14.7125C11.9041 14.5208 12 14.2833 12 14C12 13.7166 11.9041 13.4791 11.7125 13.2875C11.5208 13.0958 11.2833 13 11 13C10.7166 13 10.4791 13.0958 10.2875 13.2875C10.0958 13.4791 9.99998 13.7166 9.99998 14C9.99998 14.2833 10.0958 14.5208 10.2875 14.7125C10.4791 14.9041 10.7166 15 11 15Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  error: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14C11 13.7167 10.9042 13.4792 10.7125 13.2875C10.5208 13.0958 10.2833 13 10 13C9.71667 13 9.47917 13.0958 9.2875 13.2875C9.09583 13.4792 9 13.7167 9 14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM9 11H11V5H9V11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.5208 6.90417 10.7125 6.7125C10.9042 6.52083 11 6.28333 11 6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6C9 6.28333 9.09583 6.52083 9.2875 6.7125C9.47917 6.90417 9.71667 7 10 7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
  <path d="M1.725 18C1.54167 18 1.375 17.9542 1.225 17.8625C1.075 17.7708 0.958337 17.65 0.875003 17.5C0.79167 17.35 0.745837 17.1875 0.737503 17.0125C0.72917 16.8375 0.775003 16.6667 0.875003 16.5L10.125 0.5C10.225 0.333333 10.3542 0.208333 10.5125 0.125C10.6708 0.0416667 10.8333 0 11 0C11.1667 0 11.3292 0.0416667 11.4875 0.125C11.6458 0.208333 11.775 0.333333 11.875 0.5L21.125 16.5C21.225 16.6667 21.2708 16.8375 21.2625 17.0125C21.2542 17.1875 21.2083 17.35 21.125 17.5C21.0417 17.65 20.925 17.7708 20.775 17.8625C20.625 17.9542 20.4583 18 20.275 18H1.725ZM3.45 16H18.55L11 3L3.45 16ZM11 15C11.2833 15 11.5208 14.9042 11.7125 14.7125C11.9042 14.5208 12 14.2833 12 14C12 13.7167 11.9042 13.4792 11.7125 13.2875C11.5208 13.0958 11.2833 13 11 13C10.7167 13 10.4792 13.0958 10.2875 13.2875C10.0958 13.4792 10 13.7167 10 14C10 14.2833 10.0958 14.5208 10.2875 14.7125C10.4792 14.9042 10.7167 15 11 15ZM11 12C11.2833 12 11.5208 11.9042 11.7125 11.7125C11.9042 11.5208 12 11.2833 12 11V8C12 7.71667 11.9042 7.47917 11.7125 7.2875C11.5208 7.09583 11.2833 7 11 7C10.7167 7 10.4792 7.09583 10.2875 7.2875C10.0958 7.47917 10 7.71667 10 8V11C10 11.2833 10.0958 11.5208 10.2875 11.7125C10.4792 11.9042 10.7167 12 11 12Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  // *** Social *** //
  social_facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M10.0367 0C4.49365 0 0 4.49365 0 10.0367C0 14.7436 3.24066 18.6932 7.61226 19.778V13.104H5.54269V10.0367H7.61226V8.7151C7.61226 5.29899 9.15832 3.7156 12.5122 3.7156C13.1481 3.7156 14.2453 3.84046 14.6942 3.96491V6.74509C14.4573 6.7202 14.0458 6.70775 13.5347 6.70775C11.8891 6.70775 11.2532 7.33123 11.2532 8.95196V10.0367H14.5316L13.9683 13.104H11.2532V20C16.223 19.3998 20.0739 15.1683 20.0739 10.0367C20.0735 4.49365 15.5798 0 10.0367 0Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_flickr: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M19.0909 0H0.909091C0.407014 0 0 0.407014 0 0.909091V19.0909C0 19.593 0.407014 20 0.909091 20H19.0909C19.593 20 20 19.593 20 19.0909V0.909091C20 0.407014 19.593 0 19.0909 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M6.36364 12.7273C7.86987 12.7273 9.09091 11.5062 9.09091 10C9.09091 8.49377 7.86987 7.27273 6.36364 7.27273C4.85741 7.27273 3.63636 8.49377 3.63636 10C3.63636 11.5062 4.85741 12.7273 6.36364 12.7273Z" fill="white"/>
  <path d="M13.6364 12.7273C15.1426 12.7273 16.3636 11.5062 16.3636 10C16.3636 8.49377 15.1426 7.27273 13.6364 7.27273C12.1301 7.27273 10.9091 8.49377 10.9091 10C10.9091 11.5062 12.1301 12.7273 13.6364 12.7273Z" fill="white"/>
  </svg>`,
  social_google_play: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M3.1202 0.508333L14.0372 6.79667L11.6972 9.14083L3.1202 0.508333ZM0.85845 0L10.8795 10L0.859282 20C0.349369 19.7742 0 19.2717 0 18.6875C0 18.6683 0 18.6492 0.000831831 18.6308V18.6333V1.3675C0 1.35167 0 1.3325 0 1.31333C0 0.729167 0.349369 0.226667 0.850132 0.00416667L0.859282 0.000833333L0.85845 0ZM17.4302 8.82833C17.7746 9.08417 17.995 9.49083 17.995 9.94833C17.995 9.96667 17.995 9.98417 17.9942 10.0025V10C17.9975 10.0358 18 10.0783 18 10.1208C18 10.5508 17.792 10.9325 17.471 11.1692L17.4676 11.1717L15.1277 12.4992L12.5939 10L15.1285 7.46083L17.4302 8.82833ZM3.1202 19.4917L11.698 10.8592L14.038 13.2033L3.1202 19.4917Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.002 1.80113C12.6744 1.80113 12.9908 1.81285 14.0418 1.85974C15.0186 1.90272 15.546 2.06681 15.8976 2.20356C16.3626 2.38328 16.6986 2.60207 17.0463 2.9498C17.3979 3.30143 17.6128 3.63352 17.7925 4.09846C17.9293 4.45009 18.0934 4.98144 18.1364 5.95429C18.1832 7.00918 18.195 7.32565 18.195 9.99414C18.195 12.6665 18.1832 12.983 18.1364 14.034C18.0934 15.0107 17.9293 15.5382 17.7925 15.8898C17.6128 16.3548 17.394 16.6908 17.0463 17.0385C16.6947 17.3901 16.3626 17.605 15.8976 17.7847C15.546 17.9215 15.0147 18.0856 14.0418 18.1285C12.9869 18.1754 12.6704 18.1871 10.002 18.1871C7.32956 18.1871 7.01309 18.1754 5.9621 18.1285C4.98535 18.0856 4.4579 17.9215 4.10627 17.7847C3.64134 17.605 3.30533 17.3862 2.95761 17.0385C2.60598 16.6869 2.39109 16.3548 2.21137 15.8898C2.07462 15.5382 1.91053 15.0068 1.86755 14.034C1.82067 12.9791 1.80895 12.6626 1.80895 9.99414C1.80895 7.32174 1.82067 7.00527 1.86755 5.95429C1.91053 4.97753 2.07462 4.45009 2.21137 4.09846C2.39109 3.63352 2.60988 3.29752 2.95761 2.9498C3.30924 2.59816 3.64134 2.38328 4.10627 2.20356C4.4579 2.06681 4.98926 1.90272 5.9621 1.85974C7.01309 1.81285 7.32956 1.80113 10.002 1.80113ZM10.002 0C7.28658 0 6.94667 0.011721 5.88006 0.0586052C4.81735 0.105489 4.08674 0.277398 3.4538 0.52354C2.79351 0.781403 2.23481 1.12131 1.68002 1.68002C1.12131 2.23481 0.781403 2.79351 0.52354 3.44989C0.277398 4.08674 0.105489 4.81344 0.0586052 5.87615C0.011721 6.94667 0 7.28658 0 10.002C0 12.7173 0.011721 13.0572 0.0586052 14.1239C0.105489 15.1866 0.277398 15.9172 0.52354 16.5501C0.781403 17.2104 1.12131 17.7691 1.68002 18.3239C2.23481 18.8787 2.79351 19.2225 3.44989 19.4765C4.08674 19.7226 4.81344 19.8945 5.87615 19.9414C6.94276 19.9883 7.28267 20 9.99805 20C12.7134 20 13.0533 19.9883 14.1199 19.9414C15.1827 19.8945 15.9133 19.7226 16.5462 19.4765C17.2026 19.2225 17.7613 18.8787 18.3161 18.3239C18.8709 17.7691 19.2147 17.2104 19.4686 16.554C19.7148 15.9172 19.8867 15.1905 19.9336 14.1278C19.9805 13.0611 19.9922 12.7212 19.9922 10.0059C19.9922 7.29049 19.9805 6.95058 19.9336 5.88396C19.8867 4.82125 19.7148 4.09064 19.4686 3.45771C19.2225 2.79351 18.8826 2.23481 18.3239 1.68002C17.7691 1.12522 17.2104 0.781403 16.554 0.527447C15.9172 0.281305 15.1905 0.109396 14.1278 0.0625122C13.0572 0.011721 12.7173 0 10.002 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M10.002 4.86423C7.16546 4.86423 4.86423 7.16546 4.86423 10.002C4.86423 12.8384 7.16546 15.1397 10.002 15.1397C12.8384 15.1397 15.1397 12.8384 15.1397 10.002C15.1397 7.16546 12.8384 4.86423 10.002 4.86423ZM10.002 13.3346C8.16175 13.3346 6.66927 11.8422 6.66927 10.002C6.66927 8.16175 8.16175 6.66927 10.002 6.66927C11.8422 6.66927 13.3346 8.16175 13.3346 10.002C13.3346 11.8422 11.8422 13.3346 10.002 13.3346Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M16.5423 4.66103C16.5423 5.32522 16.0031 5.86048 15.3428 5.86048C14.6786 5.86048 14.1434 5.32131 14.1434 4.66103C14.1434 3.99683 14.6826 3.46157 15.3428 3.46157C16.0031 3.46157 16.5423 4.00074 16.5423 4.66103Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_pinterest: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0C4.47656 0 0 4.47656 0 10C0 14.2383 2.63672 17.8555 6.35547 19.3125C6.26953 18.5195 6.1875 17.3086 6.39062 16.4453C6.57422 15.6641 7.5625 11.4766 7.5625 11.4766C7.5625 11.4766 7.26172 10.8789 7.26172 9.99219C7.26172 8.60156 8.06641 7.5625 9.07031 7.5625C9.92187 7.5625 10.3359 8.20312 10.3359 8.97266C10.3359 9.83203 9.78906 11.1133 9.50781 12.3008C9.27344 13.2969 10.0078 14.1094 10.9883 14.1094C12.7656 14.1094 14.1328 12.2344 14.1328 9.53125C14.1328 7.13672 12.4141 5.46094 9.95703 5.46094C7.11328 5.46094 5.44141 7.59375 5.44141 9.80078C5.44141 10.6602 5.77344 11.582 6.1875 12.082C6.26953 12.1797 6.28125 12.2695 6.25781 12.3672C6.18359 12.6836 6.01172 13.3633 5.98047 13.5C5.9375 13.6836 5.83594 13.7227 5.64453 13.6328C4.39453 13.0508 3.61328 11.2266 3.61328 9.75781C3.61328 6.60156 5.90625 3.70703 10.2188 3.70703C13.6875 3.70703 16.3828 6.17969 16.3828 9.48438C16.3828 12.9297 14.2109 15.7031 11.1953 15.7031C10.1836 15.7031 9.23047 15.1758 8.90234 14.5547C8.90234 14.5547 8.40234 16.4648 8.28125 16.9336C8.05469 17.8008 7.44531 18.8906 7.03906 19.5547C7.97656 19.8438 8.96875 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_rss: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M0 6.79688V10.6172C2.49219 10.6172 4.85156 11.6016 6.61719 13.3672C8.38281 15.1328 9.35938 17.4922 9.35938 19.9922V20H13.1953C13.1953 16.3594 11.7109 13.0703 9.32031 10.6719C6.9375 8.28125 3.64062 6.80469 0 6.79688Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M2.65625 14.6797C1.92188 14.6797 1.26562 14.9766 0.78125 15.4609C0.296875 15.9453 0 16.6016 0 17.3359C0 18.0625 0.296875 18.7188 0.78125 19.2031C1.26562 19.6797 1.92188 19.9766 2.65625 19.9766C3.39062 19.9766 4.04688 19.6875 4.53125 19.2031C5.01562 18.7188 5.3125 18.0625 5.3125 17.3359C5.3125 16.6016 5.01562 15.9453 4.53125 15.4609C4.04688 14.9766 3.39062 14.6797 2.65625 14.6797Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M14.1328 5.86719C10.5156 2.24219 5.52344 0 0.0078125 0V3.82031C8.92188 3.82812 16.1641 11.0859 16.1719 20H20C20 14.4844 17.7578 9.49219 14.1328 5.86719Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_snapchat: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M17.581 13.7331C14.4839 12.2334 13.9903 9.91793 13.9683 9.74618C13.9417 9.53815 13.9116 9.37458 14.141 9.16297C14.3623 8.95851 15.3439 8.35076 15.6162 8.16061C16.0664 7.84574 16.2647 7.53139 16.1185 7.14496C16.0163 6.87763 15.7675 6.77694 15.5053 6.77694C15.4227 6.77719 15.3402 6.78645 15.2596 6.80454C14.7649 6.91188 14.2846 7.15979 14.0066 7.22675C13.9732 7.23536 13.9389 7.23999 13.9044 7.24055C13.7562 7.24055 13.7 7.17461 13.7143 6.99622C13.7491 6.45543 13.8226 5.39991 13.7373 4.41391C13.6203 3.05733 13.1829 2.38517 12.6642 1.79071C12.4133 1.50242 11.2483 0.263916 8.99989 0.263916C6.75152 0.263916 5.58799 1.50242 5.33862 1.78713C4.81843 2.38159 4.38153 3.05375 4.26554 4.41033C4.1802 5.39633 4.25685 6.45134 4.28853 6.99264C4.29875 7.16234 4.24663 7.23697 4.09844 7.23697C4.06395 7.23638 4.02965 7.23175 3.99624 7.22317C3.71877 7.15621 3.23844 6.9083 2.7438 6.80096C2.66311 6.78287 2.5807 6.77361 2.49801 6.77336C2.23485 6.77336 1.98702 6.87559 1.88482 7.14139C1.73867 7.52781 1.93592 7.84217 2.38764 8.15703C2.66 8.34718 3.64161 8.95442 3.86287 9.15939C4.0918 9.371 4.06216 9.53457 4.03559 9.74261C4.01362 9.91691 3.51949 12.2324 0.422867 13.7295C0.241464 13.8175 -0.0671757 14.0035 0.477032 14.3041C1.33141 14.7764 1.90015 14.7258 2.34216 15.0105C2.71723 15.2522 2.49546 15.7736 2.76833 15.9617C3.10354 16.1933 4.09435 15.9454 5.37439 16.3681C6.44748 16.7218 7.0995 17.7211 9.00244 17.7211C10.9054 17.7211 11.5763 16.7172 12.6305 16.3681C13.908 15.9454 14.9008 16.1933 15.2366 15.9617C15.5089 15.7736 15.2877 15.2522 15.6627 15.0105C16.1047 14.7258 16.673 14.7764 17.5279 14.3041C18.071 14.0071 17.7624 13.821 17.581 13.7331Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_soundcloud: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="9" viewBox="0 0 20 9" fill="none">
  <path d="M0.966096 4.67021C0.923344 4.67021 0.888366 4.70539 0.882843 4.75393L0.68627 6.61519L0.882843 8.43512C0.888366 8.48366 0.923344 8.51905 0.966096 8.51905C1.00823 8.51905 1.04239 8.48429 1.04914 8.43533L1.27292 6.61498L1.04914 4.75372C1.04239 4.70433 1.00823 4.67021 0.966096 4.67021Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M0.226643 5.38326C0.185119 5.38326 0.151982 5.41632 0.146459 5.46444L0 6.61519L0.146459 7.74645C0.151777 7.79435 0.184914 7.82741 0.226643 7.82741C0.267144 7.82741 0.300077 7.79435 0.306622 7.74687L0.479877 6.61519L0.306622 5.46338C0.300077 5.41632 0.267144 5.38326 0.226643 5.38326Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M1.75178 4.3052C1.699 4.3052 1.65687 4.34802 1.65155 4.40695L1.46479 6.61519L1.65155 8.74268C1.65687 8.80181 1.699 8.84442 1.75178 8.84442C1.80353 8.84442 1.84567 8.80181 1.8518 8.74289L2.06372 6.61498L1.8518 4.40674C1.84567 4.34802 1.80353 4.3052 1.75178 4.3052Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M2.544 4.2272C2.48182 4.2272 2.4313 4.2785 2.42639 4.34675L2.25006 6.61583L2.42639 8.8105C2.4313 8.87833 2.48182 8.92984 2.544 8.92984C2.60516 8.92984 2.65548 8.87833 2.66121 8.8105L2.86147 6.61583L2.66121 4.34633C2.65548 4.2785 2.60516 4.2272 2.544 4.2272Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M3.47655 4.51017C3.47164 4.43281 3.41355 4.37367 3.34237 4.37367C3.27016 4.37367 3.21248 4.4326 3.20798 4.51081L3.04147 6.61561L3.20798 8.82873C3.21248 8.90652 3.27037 8.96566 3.34237 8.96566C3.41376 8.96566 3.47164 8.90674 3.47655 8.82895L3.66535 6.61561L3.47655 4.51017Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M4.14748 3.03702C4.06648 3.03702 4.0002 3.10528 3.99611 3.19239L3.83984 6.61668L3.99611 8.82958C4.00041 8.91564 4.06668 8.9841 4.14748 8.9841C4.22767 8.9841 4.29394 8.91585 4.29885 8.82895V8.82979L4.47558 6.61689L4.29885 3.19239C4.29374 3.10528 4.22746 3.03702 4.14748 3.03702Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M4.94625 2.2483C4.85564 2.2483 4.78179 2.32419 4.7777 2.42106C4.7777 2.42148 4.63145 6.62855 4.63145 6.62855L4.77791 8.82767C4.782 8.92412 4.85564 9 4.94625 9C5.03626 9 5.11071 8.92412 5.1146 8.82725V8.82852L5.28008 6.62855L5.1146 2.42106C5.11071 2.32419 5.03626 2.2483 4.94625 2.2483Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M5.77673 1.86804C5.6763 1.86804 5.59468 1.95198 5.5912 2.05881L5.45518 6.61773L5.5912 8.79418C5.59489 8.90017 5.6763 8.98389 5.77673 8.98389C5.87655 8.98389 5.95817 8.90017 5.96226 8.79355V8.79482L6.11588 6.61795L5.96226 2.05881C5.95796 1.95198 5.87655 1.86804 5.77673 1.86804Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M6.80337 1.90556C6.7999 1.78855 6.71092 1.69677 6.60107 1.69677C6.49041 1.69677 6.40143 1.78877 6.39836 1.90556L6.27236 6.61773L6.39857 8.78062C6.40164 8.89635 6.49041 8.98792 6.60107 8.98792C6.71092 8.98792 6.8001 8.89635 6.80337 8.77998L6.94533 6.61837L6.80337 1.90556Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M7.43176 1.8C7.31107 1.8 7.21473 1.89941 7.21186 2.02638L7.09609 6.61858L7.21227 8.76048C7.21493 8.88618 7.31107 8.98601 7.43176 8.98601C7.55162 8.98601 7.64797 8.88596 7.65124 8.75921V8.7609L7.78174 6.61816L7.65124 2.02574C7.64797 1.89899 7.55162 1.8 7.43176 1.8Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M8.26898 1.94986C8.13889 1.94986 8.03457 2.05732 8.03211 2.19425L7.92636 6.61858L8.03211 8.74776C8.03457 8.88342 8.13889 8.99046 8.26898 8.99046C8.39888 8.99046 8.50299 8.88342 8.50545 8.74628V8.74797L8.62409 6.61922L8.50545 2.19447C8.50299 2.05732 8.39888 1.94986 8.26898 1.94986Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M9.25288 1.13676C9.21278 1.10857 9.16431 1.09204 9.11255 1.09204C9.06223 1.09204 9.01539 1.10794 8.97591 1.13464C8.90657 1.18149 8.86014 1.26225 8.85891 1.35424L8.85809 1.40384L8.76277 6.61773C8.76277 6.6207 8.85891 8.73399 8.85891 8.73399C8.85891 8.73738 8.85932 8.73971 8.85952 8.74289C8.86239 8.80181 8.88387 8.85608 8.91844 8.89911C8.96528 8.95697 9.03503 8.99428 9.11255 8.99428C9.18149 8.99428 9.24429 8.96481 9.2901 8.91733C9.33613 8.87007 9.36518 8.80478 9.3664 8.73229L9.47338 6.61901L9.36661 1.35403C9.36497 1.26352 9.31997 1.18382 9.25288 1.13676Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M10.0903 0.637589C10.0502 0.612153 10.0028 0.597315 9.95265 0.597315C9.88801 0.597315 9.82848 0.621479 9.78164 0.661329C9.7215 0.712836 9.68264 0.790415 9.68141 0.87732L9.6808 0.906147L9.57034 6.61986L9.68141 8.70389C9.68366 8.85587 9.80496 8.98177 9.95265 8.98177C10.0997 8.98177 10.221 8.85587 10.2231 8.70198V8.70452L10.3437 6.62007L10.2235 0.876896C10.222 0.775365 10.1684 0.686552 10.0903 0.637589Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M17.5399 3.90141C17.2032 3.90141 16.8812 3.97221 16.5887 4.09918C16.3925 1.80212 14.5336 0 12.2659 0C11.7108 0 11.1701 0.113189 10.6923 0.304593C10.5068 0.379204 10.4577 0.455511 10.4558 0.60431V8.69456C10.4577 8.85036 10.5743 8.97181 10.7213 8.98686C10.7277 8.98771 17.5403 8.98686 17.5403 8.98686C18.8989 8.98686 20 7.85836 20 6.45028C19.9998 5.04263 18.8987 3.90141 17.5399 3.90141Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_tiktok: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
  <path d="M14.883 4.27729C14.7506 4.20752 14.6217 4.13104 14.4968 4.04813C14.1337 3.80333 13.8007 3.51489 13.5051 3.18901C12.7655 2.32613 12.4893 1.45076 12.3876 0.837875H12.3917C12.3067 0.32915 12.3418 0 12.3471 0H8.97851V13.2818C8.97851 13.4602 8.97851 13.6364 8.97116 13.8106C8.97116 13.8322 8.96911 13.8522 8.96789 13.8756C8.96789 13.8851 8.96789 13.8951 8.96584 13.9051C8.96584 13.9076 8.96584 13.9101 8.96584 13.9126C8.93034 14.3892 8.78052 14.8495 8.52957 15.2532C8.27862 15.6568 7.93424 15.9914 7.52671 16.2275C7.10197 16.4739 6.62159 16.6032 6.13293 16.6025C4.56344 16.6025 3.29143 15.2976 3.29143 13.686C3.29143 12.0744 4.56344 10.7695 6.13293 10.7695C6.43002 10.7692 6.72529 10.8169 7.00777 10.9107L7.01185 7.41338C6.15432 7.30043 5.28314 7.36992 4.45327 7.61747C3.62339 7.86502 2.85284 8.28524 2.19021 8.85164C1.6096 9.36603 1.12148 9.97979 0.747808 10.6653C0.605611 10.9153 0.0691014 11.9198 0.00413184 13.5502C-0.0367295 14.4755 0.235816 15.4342 0.365755 15.8305V15.8388C0.447477 16.0721 0.764153 16.8683 1.28023 17.5395C1.69638 18.078 2.18804 18.5509 2.73939 18.9432V18.9349L2.74756 18.9432C4.37834 20.0732 6.18645 19.999 6.18645 19.999C6.49945 19.9861 7.54795 19.999 8.73865 19.4236C10.0593 18.7857 10.8111 17.8354 10.8111 17.8354C11.2915 17.2675 11.6734 16.6204 11.9405 15.9217C12.2454 15.1047 12.3471 14.1247 12.3471 13.7331V6.68675C12.388 6.71175 12.9323 7.07881 12.9323 7.07881C12.9323 7.07881 13.7164 7.59129 14.9398 7.92502C15.8175 8.16251 17 8.21251 17 8.21251V4.80268C16.5857 4.84851 15.7443 4.71518 14.883 4.27729Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_tumblr: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M8.16675 20C5.16675 20 2.91675 18.4583 2.91675 14.75V8.83333H0.166748V5.625C3.16675 4.83333 4.41675 2.25 4.58342 0H7.70842V5.08333H11.3334V8.83333H7.70842V14C7.70842 15.5417 8.50008 16.0833 9.75008 16.0833H11.5001V20H8.16675Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_vimeo: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
  <path d="M19.8881 1.69862C19.5362 0.229472 17.8797 -0.185772 16.2069 0.0712117C15.3489 0.204969 12.4525 1.49916 11.4656 4.60025C13.2117 4.46356 14.1279 4.72713 13.9598 6.67303C13.8886 7.48846 13.4838 8.38049 13.0286 9.23624C12.5054 10.2241 11.5212 12.1601 10.2329 10.7655C9.0727 9.50732 9.16169 7.10527 8.89749 5.5037C8.74774 4.60315 8.59141 3.48589 8.30044 2.56221C8.05194 1.76626 7.47709 0.809563 6.77407 0.599948C6.01998 0.377956 5.08804 0.727832 4.54143 1.05518C2.83909 2.06578 1.56386 3.45811 0.102263 4.65849C-0.0821777 4.84616 0.0270352 5.00379 0.0891308 5.14342C0.299039 5.47202 0.380141 5.67144 0.780407 5.73002C1.81954 5.88433 2.8077 4.74937 3.4963 5.93241C3.9175 6.65239 4.0489 7.44205 4.31772 8.21766C4.67544 9.25684 4.95332 10.3843 5.2476 11.5768C5.74663 13.592 6.35542 16.6046 8.0787 17.3458C8.95631 17.7212 10.276 17.218 10.9437 16.8167C12.7553 15.7305 14.2286 14.2052 15.375 12.5542C18.3584 8.26088 19.7887 3.94699 19.9442 3.12531C20.0548 2.52978 19.9823 2.0383 19.8881 1.69862Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_x: `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
  <path d="M17.4256 0H20.8185L13.4062 8.47179L22.1262 20H15.2985L9.95077 13.0082L3.83179 20H0.436923L8.36513 10.9385L0 0H7.00103L11.8349 6.39077L17.4256 0ZM16.2349 17.9692H18.1149L5.97949 1.9241H3.96205L16.2349 17.9692Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
  <path d="M19.8008 3.03516C19.8008 3.03516 19.6055 1.65625 19.0039 1.05078C18.2422 0.253906 17.3906 0.25 17 0.203125C14.2031 -1.11759e-07 10.0039 0 10.0039 0H9.99609C9.99609 0 5.79688 -1.11759e-07 3 0.203125C2.60938 0.25 1.75781 0.253906 0.996094 1.05078C0.394531 1.65625 0.203125 3.03516 0.203125 3.03516C0.203125 3.03516 0 4.65625 0 6.27344V7.78906C0 9.40625 0.199219 11.0273 0.199219 11.0273C0.199219 11.0273 0.394531 12.4062 0.992187 13.0117C1.75391 13.8086 2.75391 13.7812 3.19922 13.8672C4.80078 14.0195 10 14.0664 10 14.0664C10 14.0664 14.2031 14.0586 17 13.8594C17.3906 13.8125 18.2422 13.8086 19.0039 13.0117C19.6055 12.4062 19.8008 11.0273 19.8008 11.0273C19.8008 11.0273 20 9.41016 20 7.78906V6.27344C20 4.65625 19.8008 3.03516 19.8008 3.03516ZM7.93359 9.62891V4.00781L13.3359 6.82812L7.93359 9.62891Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Filled *** //
  account_balance_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M3.22502 15.875V11.65C3.22502 11.2666 3.36252 10.9416 3.63752 10.675C3.91252 10.4083 4.24169 10.275 4.62502 10.275C5.00836 10.275 5.33336 10.4083 5.60002 10.675C5.86669 10.9416 6.00002 11.2666 6.00002 11.65V15.9C6.00002 16.2833 5.86669 16.6083 5.60002 16.875C5.33336 17.1416 5.00836 17.275 4.62502 17.275C4.24169 17.275 3.91252 17.1375 3.63752 16.8625C3.36252 16.5875 3.22502 16.2583 3.22502 15.875ZM9.62502 15.9V11.65C9.62502 11.2666 9.75836 10.9416 10.025 10.675C10.2917 10.4083 10.6167 10.275 11 10.275C11.3834 10.275 11.7084 10.4083 11.975 10.675C12.2417 10.9416 12.375 11.2666 12.375 11.65V15.9C12.375 16.2833 12.2417 16.6083 11.975 16.875C11.7084 17.1416 11.3834 17.275 11 17.275C10.6167 17.275 10.2917 17.1416 10.025 16.875C9.75836 16.6083 9.62502 16.2833 9.62502 15.9ZM1.72502 21.65C1.29169 21.65 0.920858 21.4958 0.612524 21.1875C0.304191 20.8791 0.150024 20.5083 0.150024 20.075C0.150024 19.6416 0.304191 19.2708 0.612524 18.9625C0.920858 18.6541 1.29169 18.5 1.72502 18.5H20.275C20.7084 18.5 21.0792 18.6541 21.3875 18.9625C21.6959 19.2708 21.85 19.6416 21.85 20.075C21.85 20.5083 21.6959 20.8791 21.3875 21.1875C21.0792 21.4958 20.7084 21.65 20.275 21.65H1.72502ZM16 15.875V11.65C16 11.2666 16.1375 10.9416 16.4125 10.675C16.6875 10.4083 17.0167 10.275 17.4 10.275C17.7834 10.275 18.1084 10.4083 18.375 10.675C18.6417 10.9416 18.775 11.2666 18.775 11.65V15.9C18.775 16.2833 18.6417 16.6083 18.375 16.875C18.1084 17.1416 17.7834 17.275 17.4 17.275C17.0167 17.275 16.6875 17.1375 16.4125 16.8625C16.1375 16.5875 16 16.2583 16 15.875ZM20.175 9.02495H1.65002C1.23336 9.02495 0.879191 8.87912 0.587524 8.58745C0.295858 8.29578 0.150024 7.94162 0.150024 7.52495V6.57495C0.150024 6.29162 0.225024 6.02912 0.375024 5.78745C0.525024 5.54578 0.725024 5.35828 0.975024 5.22495L9.60002 0.924951C10.0334 0.691618 10.5 0.574951 11 0.574951C11.5 0.574951 11.9667 0.691618 12.4 0.924951L20.925 5.17495C21.2084 5.30828 21.4334 5.51245 21.6 5.78745C21.7667 6.06245 21.85 6.36662 21.85 6.69995V7.32495C21.85 7.79162 21.6875 8.19162 21.3625 8.52495C21.0375 8.85828 20.6417 9.02495 20.175 9.02495Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  cancel_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M10.9242 12.3032L13.8242 15.2032C14.0075 15.3866 14.2408 15.4782 14.5242 15.4782C14.8075 15.4782 15.0408 15.3866 15.2242 15.2032C15.4075 15.0199 15.4992 14.7866 15.4992 14.5032C15.4992 14.2199 15.4075 13.9866 15.2242 13.8032L12.3242 10.9032L15.2242 8.00324C15.4075 7.81991 15.4992 7.58658 15.4992 7.30324C15.4992 7.01991 15.4075 6.78658 15.2242 6.60324C15.0408 6.41991 14.8075 6.32824 14.5242 6.32824C14.2408 6.32824 14.0075 6.41991 13.8242 6.60324L10.9242 9.50324L8.02416 6.60324C7.84083 6.41991 7.6075 6.32824 7.32416 6.32824C7.04083 6.32824 6.8075 6.41991 6.62416 6.60324C6.44083 6.78658 6.34916 7.01991 6.34916 7.30324C6.34916 7.58658 6.44083 7.81991 6.62416 8.00324L9.52416 10.9032L6.62416 13.8032C6.44083 13.9866 6.34916 14.2199 6.34916 14.5032C6.34916 14.7866 6.44083 15.0199 6.62416 15.2032C6.8075 15.3866 7.04083 15.4782 7.32416 15.4782C7.6075 15.4782 7.84083 15.3866 8.02416 15.2032L10.9242 12.3032ZM10.9242 20.9032C9.54083 20.9032 8.24083 20.6407 7.02416 20.1157C5.8075 19.5907 4.74916 18.8782 3.84916 17.9782C2.94916 17.0782 2.23666 16.0199 1.71166 14.8032C1.18666 13.5866 0.924164 12.2866 0.924164 10.9032C0.924164 9.51991 1.18666 8.21991 1.71166 7.00324C2.23666 5.78658 2.94916 4.72824 3.84916 3.82824C4.74916 2.92824 5.8075 2.21574 7.02416 1.69074C8.24083 1.16574 9.54083 0.903244 10.9242 0.903244C12.3075 0.903244 13.6075 1.16574 14.8242 1.69074C16.0408 2.21574 17.0992 2.92824 17.9992 3.82824C18.8992 4.72824 19.6117 5.78658 20.1367 7.00324C20.6617 8.21991 20.9242 9.51991 20.9242 10.9032C20.9242 12.2866 20.6617 13.5866 20.1367 14.8032C19.6117 16.0199 18.8992 17.0782 17.9992 17.9782C17.0992 18.8782 16.0408 19.5907 14.8242 20.1157C13.6075 20.6407 12.3075 20.9032 10.9242 20.9032Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  language_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 21.8499C9.51669 21.8499 8.11669 21.5624 6.80002 20.9874C5.48336 20.4124 4.33336 19.6332 3.35002 18.6499C2.36669 17.6666 1.58752 16.5166 1.01252 15.1999C0.437524 13.8832 0.150024 12.4832 0.150024 10.9999C0.150024 9.51657 0.437524 8.11657 1.01252 6.7999C1.58752 5.48324 2.36669 4.33324 3.35002 3.3499C4.33336 2.36657 5.48336 1.5874 6.80002 1.0124C8.11669 0.437402 9.51669 0.149902 11 0.149902C12.4834 0.149902 13.8834 0.437402 15.2 1.0124C16.5167 1.5874 17.6667 2.36657 18.65 3.3499C19.6334 4.33324 20.4125 5.48324 20.9875 6.7999C21.5625 8.11657 21.85 9.51657 21.85 10.9999C21.85 12.4832 21.5625 13.8832 20.9875 15.1999C20.4125 16.5166 19.6334 17.6666 18.65 18.6499C17.6667 19.6332 16.5167 20.4124 15.2 20.9874C13.8834 21.5624 12.4834 21.8499 11 21.8499ZM10.95 18.6749C11.3167 18.1082 11.6584 17.5041 11.975 16.8624C12.2917 16.2207 12.55 15.5499 12.75 14.8499H9.22502C9.42502 15.5499 9.67086 16.2207 9.96252 16.8624C10.2542 17.5041 10.5834 18.1082 10.95 18.6749ZM8.47502 18.2749C8.14169 17.7582 7.87919 17.2041 7.68752 16.6124C7.49586 16.0207 7.32502 15.4332 7.17502 14.8499H4.37502C4.80836 15.6499 5.37502 16.3499 6.07502 16.9499C6.77502 17.5499 7.57502 17.9916 8.47502 18.2749ZM13.45 18.2749C14.35 17.9916 15.1584 17.5499 15.875 16.9499C16.5917 16.3499 17.1667 15.6499 17.6 14.8499H14.8C14.65 15.4332 14.4709 16.0207 14.2625 16.6124C14.0542 17.2041 13.7834 17.7582 13.45 18.2749ZM3.55002 12.9249H6.77502C6.72502 12.5916 6.68752 12.2707 6.66252 11.9624C6.63752 11.6541 6.62502 11.3332 6.62502 10.9999C6.62502 10.6499 6.63752 10.3249 6.66252 10.0249C6.68752 9.7249 6.72502 9.40824 6.77502 9.0749H3.55002C3.46669 9.39157 3.40419 9.70407 3.36252 10.0124C3.32086 10.3207 3.30002 10.6499 3.30002 10.9999C3.30002 11.3332 3.32086 11.6582 3.36252 11.9749C3.40419 12.2916 3.46669 12.6082 3.55002 12.9249ZM8.77502 12.9249H13.2C13.25 12.5916 13.2792 12.2707 13.2875 11.9624C13.2959 11.6541 13.3 11.3332 13.3 10.9999C13.3 10.6499 13.2959 10.3249 13.2875 10.0249C13.2792 9.7249 13.25 9.40824 13.2 9.0749H8.77502C8.72502 9.40824 8.68752 9.7249 8.66252 10.0249C8.63752 10.3249 8.62502 10.6499 8.62502 10.9999C8.62502 11.3332 8.63752 11.6541 8.66252 11.9624C8.68752 12.2707 8.72502 12.5916 8.77502 12.9249ZM15.2 12.9249H18.4C18.4834 12.6082 18.5459 12.2916 18.5875 11.9749C18.6292 11.6582 18.65 11.3332 18.65 10.9999C18.65 10.6499 18.6292 10.3207 18.5875 10.0124C18.5459 9.70407 18.4834 9.39157 18.4 9.0749H15.2C15.2334 9.40824 15.2584 9.7249 15.275 10.0249C15.2917 10.3249 15.3 10.6499 15.3 10.9999C15.3 11.3332 15.2917 11.6541 15.275 11.9624C15.2584 12.2707 15.2334 12.5916 15.2 12.9249ZM14.8 7.1249H17.6C17.1667 6.3249 16.5917 5.62907 15.875 5.0374C15.1584 4.44574 14.35 4.00824 13.45 3.7249C13.7834 4.24157 14.0542 4.79157 14.2625 5.3749C14.4709 5.95824 14.65 6.54157 14.8 7.1249ZM9.22502 7.1249H12.75C12.5667 6.4249 12.3167 5.75824 12 5.1249C11.6834 4.49157 11.3334 3.89157 10.95 3.3249C10.5834 3.89157 10.2542 4.49157 9.96252 5.1249C9.67086 5.75824 9.42502 6.4249 9.22502 7.1249ZM4.37502 7.1249H7.17502C7.32502 6.54157 7.49586 5.95824 7.68752 5.3749C7.87919 4.79157 8.14169 4.24157 8.47502 3.7249C7.57502 4.00824 6.77502 4.44574 6.07502 5.0374C5.37502 5.62907 4.80836 6.3249 4.37502 7.1249Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  lock_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
  <path d="M3.30002 22.7751C2.43369 22.7751 1.69211 22.4667 1.07527 21.8498C0.458441 21.2328 0.150024 20.4913 0.150024 19.6251V10.2251C0.150024 9.35893 0.458441 8.61735 1.07527 8.00035C1.69211 7.38351 2.43369 7.0751 3.30002 7.0751H3.62502V5.8001C3.62502 4.28343 4.14586 2.99593 5.18752 1.9376C6.22919 0.879264 7.50002 0.350098 9.00002 0.350098C10.5 0.350098 11.7709 0.879264 12.8125 1.9376C13.8542 2.99593 14.375 4.28343 14.375 5.8001V7.0751H14.7C15.5662 7.0751 16.3078 7.38351 16.9248 8.00035C17.5416 8.61735 17.85 9.35893 17.85 10.2251V19.6251C17.85 20.4913 17.5416 21.2328 16.9248 21.8498C16.3078 22.4667 15.5662 22.7751 14.7 22.7751H3.30002ZM9.00002 16.9251C9.55002 16.9251 10.0209 16.7293 10.4125 16.3376C10.8042 15.9459 11 15.4751 11 14.9251C11 14.3751 10.8042 13.9043 10.4125 13.5126C10.0209 13.1209 9.55002 12.9251 9.00002 12.9251C8.45002 12.9251 7.97919 13.1209 7.58752 13.5126C7.19586 13.9043 7.00002 14.3751 7.00002 14.9251C7.00002 15.4751 7.19586 15.9459 7.58752 16.3376C7.97919 16.7293 8.45002 16.9251 9.00002 16.9251ZM6.77502 7.0751H11.225V5.8001C11.225 5.16126 11.0125 4.61818 10.5875 4.17085C10.1625 3.72368 9.63336 3.5001 9.00002 3.5001C8.36669 3.5001 7.83752 3.72368 7.41252 4.17085C6.98752 4.61818 6.77502 5.16126 6.77502 5.8001V7.0751Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`
}, C6 = v`
  :host {
    display: inline-block;
    --_nys-icon-size: 0.7em; /* If cap isn't supported, a fallback value of 0.7em is used, as it closely approximates the height of capital letters in most fonts. */
    box-sizing: content-box !important;
  }

  /* Use 'cap' if supported */
  @supports (font-size: 1cap) {
    :host {
      --_nys-icon-size: 1cap;
    }
  }

  /* SVG size and color is initially determined by the parent's font-size and text-color */
  .nys-icon--svg {
    width: var(--_nys-icon-size, 1em);
    height: var(--_nys-icon-size, 1em);
    display: block;
    white-space: nowrap;
  }

  /* Relative Sizes */
  .nys-icon--2xs {
    width: calc(var(--_nys-icon-size) * 0.75);
    height: calc(var(--_nys-icon-size) * 0.75);
  }
  .nys-icon--xs {
    width: calc(var(--_nys-icon-size) * 0.875);
    height: calc(var(--_nys-icon-size) * 0.875);
  }
  .nys-icon--sm {
    width: var(--_nys-icon-size);
    height: var(--_nys-icon-size);
  }
  .nys-icon--md {
    width: calc(var(--_nys-icon-size) * 1.125);
    height: calc(var(--_nys-icon-size) * 1.125);
  }
  .nys-icon--lg {
    width: calc(var(--_nys-icon-size) * 1.25);
    height: calc(var(--_nys-icon-size) * 1.25);
  }
  .nys-icon--xl {
    width: calc(var(--_nys-icon-size) * 1.5);
    height: calc(var(--_nys-icon-size) * 1.5);
  }
  .nys-icon--2xl {
    width: calc(var(--_nys-icon-size) * 1.875);
    height: calc(var(--_nys-icon-size) * 1.875);
  }
  .nys-icon--3xl {
    width: calc(var(--_nys-icon-size) * 2.25);
    height: calc(var(--_nys-icon-size) * 2.25);
  }
  .nys-icon--4xl {
    width: calc(var(--_nys-icon-size) * 3);
    height: calc(var(--_nys-icon-size) * 3);
  }

  /* Literal Sizing */
  .nys-icon--12 {
    width: 0.75rem;
    height: 0.75rem;
  }
  .nys-icon--16 {
    width: 1rem;
    height: 1rem;
  }
  .nys-icon--24 {
    width: 1.5rem;
    height: 1.5rem;
  }
  .nys-icon--32 {
    width: 2rem;
    height: 2rem;
  }
  .nys-icon--48 {
    width: 3rem;
    height: 3rem;
  }
  .nys-icon--64 {
    width: 4rem;
    height: 4rem;
  }

  /* Flipping Icons */
  .nys-icon--flip-horizontal {
    transform: scaleX(-1);
  }
  .nys-icon--flip-vertical {
    transform: scaleY(-1);
  }
  .nys-icon--flip-both {
    transform: scale(-1, -1);
  }
`;
var c6 = Object.defineProperty, h6 = Object.getOwnPropertyDescriptor, X1 = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? h6(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && c6(t, e, r), r;
}, p5;
const M1 = (p5 = class extends p {
  constructor() {
    super(...arguments), this.name = "", this.label = "", this.rotate = "0", this.flip = "", this.color = "", this._size = "sm";
  }
  get size() {
    return this._size;
  }
  set size(s) {
    this._size = p5.VALID_TYPES.includes(
      s
    ) ? s : "sm";
  }
  getIcon() {
    const s = a6[this.name], t = !!this.label;
    if (!s) return null;
    const e = new DOMParser().parseFromString(s, "image/svg+xml").documentElement;
    return e instanceof SVGElement ? (e.setAttribute("role", "img"), e.setAttribute("aria-label", t ? this.label : ""), e.setAttribute("aria-hidden", t ? "false" : "true"), e.style.rotate = `${this.rotate}deg`, e.style.color = this.color || "currentcolor", e.classList.add(`nys-icon--${this.size}`), e.classList.add("nys-icon--svg"), this.flip && e.classList.add(`nys-icon--flip-${this.flip}`), e) : null;
  }
  render() {
    const s = this.getIcon();
    return s ? c`${s}` : null;
  }
}, p5.styles = C6, p5.VALID_TYPES = [
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "12",
  "16",
  "24",
  "32",
  "48",
  "64"
], p5);
X1([
  J1({ type: String, reflect: !0 })
], M1.prototype, "name", 2);
X1([
  J1({ type: String })
], M1.prototype, "label", 2);
X1([
  J1({ type: String })
], M1.prototype, "rotate", 2);
X1([
  J1({ type: String })
], M1.prototype, "flip", 2);
X1([
  J1({ type: String })
], M1.prototype, "color", 2);
X1([
  J1({ reflect: !0 })
], M1.prototype, "size", 1);
let d6 = M1;
customElements.get("nys-icon") || customElements.define("nys-icon", d6);
var p6 = Object.defineProperty, F2 = (s, t, e, o) => {
  for (var r = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = i(t, e, r) || r);
  return r && p6(t, e, r), r;
};
const V2 = class extends p {
  // allows use of elementInternals' API
  constructor() {
    super(), this.showError = !1, this.errorMessage = "", this.showDivider = !1, this._internals = this.attachInternals();
  }
  render() {
    return c`${this.showError ? c`<div class="nys-errormessage" ?showDivider=${this.showDivider}>
          <nys-icon name="error" size="xl"></nys-icon>
          ${this._internals.validationMessage || this.errorMessage}
        </div>` : ""}`;
  }
};
V2.styles = Y8, V2.formAssociated = !0;
let w2 = V2;
F2([
  q2({ type: Boolean })
], w2.prototype, "showError");
F2([
  q2({ type: String })
], w2.prototype, "errorMessage");
F2([
  q2({ type: Boolean, reflect: !0 })
], w2.prototype, "showDivider");
customElements.get("nys-errormessage") || customElements.define("nys-errormessage", w2);
var u6 = Object.defineProperty, v6 = Object.getOwnPropertyDescriptor, r1 = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? v6(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && u6(t, e, r), r;
};
let y6 = 0;
var X;
const G = (X = class extends p {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.required = !1, this.optional = !1, this.showError = !1, this.errorMessage = "", this.label = "", this.description = "", this._size = "md", this._internals = this.attachInternals();
  }
  get size() {
    return this._size;
  }
  set size(t) {
    this._size = X.VALID_SIZES.includes(
      t
    ) ? t : "md";
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-checkbox-${Date.now()}-${y6++}`), this.addEventListener("change", this._handleCheckboxChange), this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("change", this._handleCheckboxChange), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this._setGroupExist();
  }
  updated(t) {
    t.has("required") && this.required && this._setupCheckboxRequired(), t.has("size") && this.updateCheckboxSize();
  }
  /********************** Functions **********************/
  _setGroupExist() {
    this.querySelectorAll("nys-checkbox").forEach((e) => {
      e.groupExist = !0;
    });
  }
  async _handleInvalid(t) {
    t.preventDefault(), this.showError = !0, this._manageCheckboxRequired();
    const e = this.querySelector("nys-checkbox"), o = e ? await e.getInputElement() : null;
    if (o) {
      const r = this._internals.form;
      r ? Array.from(r.elements).find((l) => {
        if (l.tagName.toLowerCase() === "nys-checkboxgroup") {
          if (Array.from(
            this.querySelectorAll("nys-checkbox")
          ).filter(
            (d) => d.checked
          ).length === 0)
            return l;
        } else
          return typeof l.checkValidity == "function" && !l.checkValidity();
      }) === this && o.focus() : o.focus();
    }
  }
  // Initial update on checkbox required attribute
  async _setupCheckboxRequired() {
    const t = this.querySelector("nys-checkbox"), e = this.errorMessage || "This field is required", o = t ? await t.getInputElement() : null;
    this._internals.setValidity(
      { valueMissing: !0 },
      e,
      o || this
    );
  }
  // Similar to how native forms handle multiple same-name fields, we group the selected values into a list for FormData.
  _handleCheckboxChange(t) {
    const e = t, { name: o } = e.detail, n = Array.from(this.querySelectorAll("nys-checkbox")).filter((i) => i.checked).map((i) => i.value);
    this.name = o, this._internals.setFormValue(n.join(", ")), this._manageCheckboxRequired();
  }
  // Updates the required attribute of each checkbox in the group
  async _manageCheckboxRequired() {
    if (this.required) {
      const t = this.errorMessage || "Please select at least one option.", e = this.querySelector("nys-checkbox"), o = e ? await e.getInputElement() : null;
      let r = !1;
      this.querySelectorAll("nys-checkbox").forEach((i) => {
        i.checked && (r = !0);
      }), r ? (this._internals.setValidity({}), this.showError = !1) : (this._internals.setValidity(
        { valueMissing: !0 },
        t,
        o || this
      ), this.showError = !0);
    }
  }
  // Updates the size of each checkbox in the group
  updateCheckboxSize() {
    this.querySelectorAll("nys-checkbox").forEach((e) => {
      e.setAttribute("size", this.size);
    });
  }
  render() {
    return c` <div
      class="nys-checkboxgroup"
      aria-required="${this.required ? "true" : "false"}"
      role="group"
    >
      <nys-label
        label=${this.label}
        description=${this.description}
        flag=${this.required ? "required" : this.optional ? "optional" : ""}
      >
        <slot name="description" slot="description">${this.description}</slot>
      </nys-label>
      <div class="nys-checkboxgroup__content">
        <slot></slot>
      </div>
      <nys-errormessage
        ?showError=${this.showError}
        errorMessage=${this._internals.validationMessage || this.errorMessage}
        showDivider
      ></nys-errormessage>
    </div>`;
  }
}, X.VALID_SIZES = ["sm", "md"], X.styles = O3, X.formAssociated = !0, X);
r1([
  a({ type: String })
], G.prototype, "id", 2);
r1([
  a({ type: String, reflect: !0 })
], G.prototype, "name", 2);
r1([
  a({ type: Boolean, reflect: !0 })
], G.prototype, "required", 2);
r1([
  a({ type: Boolean, reflect: !0 })
], G.prototype, "optional", 2);
r1([
  a({ type: Boolean, reflect: !0 })
], G.prototype, "showError", 2);
r1([
  a({ type: String })
], G.prototype, "errorMessage", 2);
r1([
  a({ type: String })
], G.prototype, "label", 2);
r1([
  a({ type: String })
], G.prototype, "description", 2);
r1([
  a({ reflect: !0 })
], G.prototype, "size", 1);
let g6 = G;
customElements.get("nys-checkboxgroup") || customElements.define("nys-checkboxgroup", g6);
var f6 = Object.defineProperty, w6 = Object.getOwnPropertyDescriptor, I = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? w6(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && f6(t, e, r), r;
};
let _6 = 0;
var Q;
const U = (Q = class extends p {
  // allows use of elementInternals' API
  constructor() {
    super(), this.checked = !1, this.disabled = !1, this.required = !1, this.label = "", this.description = "", this.id = "", this.name = "", this.value = "", this.showError = !1, this.errorMessage = "", this.groupExist = !1, this._size = "md", this._internals = this.attachInternals();
  }
  get size() {
    return this._size;
  }
  set size(t) {
    this._size = Q.VALID_SIZES.includes(
      t
    ) ? t : "md";
  }
  async getInputElement() {
    var t;
    return await this.updateComplete, ((t = this.shadowRoot) == null ? void 0 : t.querySelector("input")) || null;
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-checkbox-${Date.now()}-${_6++}`), this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this._setValue(), this._manageRequire();
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.checked = !1;
  }
  /********************** Form Integration **********************/
  _setValue() {
    this.groupExist || this._internals.setFormValue(this.checked ? this.value : null);
  }
  _manageRequire() {
    var o;
    const t = (o = this.shadowRoot) == null ? void 0 : o.querySelector("input"), e = this.errorMessage || "This field is required";
    t && (this.required && !this.checked ? (this._internals.ariaRequired = "true", this._internals.setValidity({ valueMissing: !0 }, e, t)) : this._internals.setValidity({}));
  }
  _setValidityMessage(t = "") {
    var o;
    const e = (o = this.shadowRoot) == null ? void 0 : o.querySelector("input");
    e && (this.showError = !!t, this.errorMessage.trim() && t !== "" && (t = this.errorMessage), this._internals.setValidity(
      t ? { customError: !0 } : {},
      t,
      e
    ));
  }
  _validate() {
    var o;
    const t = (o = this.shadowRoot) == null ? void 0 : o.querySelector("input");
    if (!t) return;
    let e = t.validationMessage;
    this._setValidityMessage(e);
  }
  /********************** Functions **********************/
  // This helper function is called to perform the element's native validation.
  checkValidity() {
    var e;
    if (this.required && !this.checked)
      return !1;
    const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("input");
    return t ? t.checkValidity() : !0;
  }
  _handleInvalid(t) {
    var o;
    t.preventDefault(), this.showError = !0, this._validate();
    const e = (o = this.shadowRoot) == null ? void 0 : o.querySelector("input");
    if (e) {
      const r = this._internals.form;
      r ? Array.from(r.elements).find(
        (l) => typeof l.checkValidity == "function" && !l.checkValidity()
      ) === this && e.focus() : e.focus();
    }
  }
  /******************** Event Handlers ********************/
  // Handle checkbox change event
  _handleChange(t) {
    const { checked: e } = t.target;
    this.checked = e, this.groupExist || this._internals.setFormValue(this.checked ? this.value : null), this._validate(), this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          checked: this.checked,
          name: this.name,
          value: this.value
        },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(new Event("focus"));
  }
  // Handle blur event
  _handleBlur() {
    this.dispatchEvent(new Event("blur"));
  }
  // Handle keydown for keyboard accessibility
  _handleKeydown(t) {
    t.code === "Space" && (t.preventDefault(), this.disabled || (this.checked = !this.checked, this._internals.setFormValue(this.checked ? this.value : null), this._manageRequire(), this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          checked: this.checked,
          name: this.name,
          value: this.value
        },
        bubbles: !0,
        composed: !0
      })
    )));
  }
  render() {
    return c`
      <div class="nys-checkbox">
        <label class="nys-checkbox__content">
          <div class="nys-checkbox__checkboxwrapper">
            <input
              id="${this.id}"
              class="nys-checkbox__checkbox"
              type="checkbox"
              name="${g(this.name ? this.name : void 0)}"
              .checked=${this.checked}
              ?disabled=${this.disabled}
              .value=${this.value}
              ?required="${this.required}"
              aria-checked="${this.checked}"
              aria-disabled="${this.disabled ? "true" : "false"}"
              aria-required="${this.required}"
              @change="${this._handleChange}"
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @keydown="${this._handleKeydown}"
            />
            ${this.checked ? c`<nys-icon
                  for="${this.id}"
                  name="check"
                  size="${this.size === "md" ? "2xl" : this.size === "sm" ? "sm" : "md"}"
                  class="nys-checkbox__icon"
                ></nys-icon>` : ""}
          </div>
          ${this.label && c` <div class="nys-checkbox__text">
            <div class="nys-checkbox__requiredwrapper">
              <label for=${this.id} class="nys-checkbox__label"
                >${this.label}</label
              >
              ${this.required ? c`<label class="nys-checkbox__required">*</label>` : ""}
            </div>
            <label for=${this.id} class="nys-checkbox__description">
              <slot name="description">${this.description}</slot>
            </label>
          </div>`}
        </label>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this._internals.validationMessage || this.errorMessage}
          showDivider
        ></nys-errormessage>
      </div>
    `;
  }
}, Q.VALID_SIZES = ["sm", "md"], Q.styles = O3, Q.formAssociated = !0, Q);
I([
  a({ type: Boolean, reflect: !0 })
], U.prototype, "checked", 2);
I([
  a({ type: Boolean, reflect: !0 })
], U.prototype, "disabled", 2);
I([
  a({ type: Boolean, reflect: !0 })
], U.prototype, "required", 2);
I([
  a({ type: String })
], U.prototype, "label", 2);
I([
  a({ type: String })
], U.prototype, "description", 2);
I([
  a({ type: String })
], U.prototype, "id", 2);
I([
  a({ type: String, reflect: !0 })
], U.prototype, "name", 2);
I([
  a({ type: String })
], U.prototype, "value", 2);
I([
  a({ type: Boolean, reflect: !0 })
], U.prototype, "showError", 2);
I([
  a({ type: String })
], U.prototype, "errorMessage", 2);
I([
  a({ type: Boolean })
], U.prototype, "groupExist", 2);
I([
  a({ reflect: !0 })
], U.prototype, "size", 1);
let b6 = U;
customElements.get("nys-checkbox") || customElements.define("nys-checkbox", b6);
const m6 = v`
  :host {
    --_nys-errormessage-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-errormessage-font-weight: var(--nys-font-weight-regular, 400);
    --_nys-errormessage-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-errormessage-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-errormessage-letter-spacing: var(
      --nys-font-letterspacing-ui-md,
      0.044px
    );
    --_nys-errormessage-color: var(
      --nys-color-danger,
      var(--nys-color-red-600, #b52c2c)
    );

    /* Spacing */
    --_nys-errormessage-gap: var(--nys-space-100, 8px);
    --_nys-errormessage-divider-gap: var(--nys-space-50, 4px);
    --_nys-errormessage-divider-width: var(--nys-border-width-sm, 1px);
  }

  .nys-errormessage {
    display: flex;
    align-items: center;
    gap: var(--_nys-errormessage-gap);
    font-family: var(--_nys-errormessage-font-family);
    font-weight: var(--_nys-errormessage-font-weight);
    font-size: var(--_nys-errormessage-font-size);
    line-height: var(--_nys-errormessage-line-height);
    letter-spacing: var(--_nys-errormessage-letter-spacing);
    color: var(--_nys-errormessage-color);
  }

  .nys-errormessage[showDivider] {
    padding-top: var(--_nys-errormessage-divider-gap);
    margin-top: var(--_nys-errormessage-divider-gap);
    border-top: var(--_nys-errormessage-divider-width) solid
      var(--_nys-errormessage-color);
  }
`;
var x6 = Object.defineProperty, G2 = (s, t, e, o) => {
  for (var r = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = i(t, e, r) || r);
  return r && x6(t, e, r), r;
};
const v2 = class v2 extends p {
  // allows use of elementInternals' API
  constructor() {
    super(), this.showError = !1, this.errorMessage = "", this.showDivider = !1, this._internals = this.attachInternals();
  }
  render() {
    return c`${this.showError ? c`<div class="nys-errormessage" ?showDivider=${this.showDivider}>
          <nys-icon name="error" size="xl"></nys-icon>
          ${this._internals.validationMessage || this.errorMessage}
        </div>` : ""}`;
  }
};
v2.styles = m6, v2.formAssociated = !0;
let I1 = v2;
G2([
  a({ type: Boolean })
], I1.prototype, "showError");
G2([
  a({ type: String })
], I1.prototype, "errorMessage");
G2([
  a({ type: Boolean, reflect: !0 })
], I1.prototype, "showDivider");
customElements.get("nys-errormessage") || customElements.define("nys-errormessage", I1);
const L6 = {
  // --------- UX Team Main Library (below) --------- //
  // *** CORE *** //
  account_circle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M3.85 15.1C4.7 14.45 5.65 13.9375 6.7 13.5625C7.75 13.1875 8.85 13 10 13C11.15 13 12.25 13.1875 13.3 13.5625C14.35 13.9375 15.3 14.45 16.15 15.1C16.7333 14.4167 17.1875 13.6417 17.5125 12.775C17.8375 11.9083 18 10.9833 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.9833 2.1625 11.9083 2.4875 12.775C2.8125 13.6417 3.26667 14.4167 3.85 15.1ZM10 11C9.01667 11 8.1875 10.6625 7.5125 9.9875C6.8375 9.3125 6.5 8.48333 6.5 7.5C6.5 6.51667 6.8375 5.6875 7.5125 5.0125C8.1875 4.3375 9.01667 4 10 4C10.9833 4 11.8125 4.3375 12.4875 5.0125C13.1625 5.6875 13.5 6.51667 13.5 7.5C13.5 8.48333 13.1625 9.3125 12.4875 9.9875C11.8125 10.6625 10.9833 11 10 11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  calendar_month: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V1C3 0.716667 3.09583 0.479167 3.2875 0.2875C3.47917 0.0958333 3.71667 0 4 0C4.28333 0 4.52083 0.0958333 4.7125 0.2875C4.90417 0.479167 5 0.716667 5 1V2H13V1C13 0.716667 13.0958 0.479167 13.2875 0.2875C13.4792 0.0958333 13.7167 0 14 0C14.2833 0 14.5208 0.0958333 14.7125 0.2875C14.9042 0.479167 15 0.716667 15 1V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6ZM9 12C8.71667 12 8.47917 11.9042 8.2875 11.7125C8.09583 11.5208 8 11.2833 8 11C8 10.7167 8.09583 10.4792 8.2875 10.2875C8.47917 10.0958 8.71667 10 9 10C9.28333 10 9.52083 10.0958 9.7125 10.2875C9.90417 10.4792 10 10.7167 10 11C10 11.2833 9.90417 11.5208 9.7125 11.7125C9.52083 11.9042 9.28333 12 9 12ZM5 12C4.71667 12 4.47917 11.9042 4.2875 11.7125C4.09583 11.5208 4 11.2833 4 11C4 10.7167 4.09583 10.4792 4.2875 10.2875C4.47917 10.0958 4.71667 10 5 10C5.28333 10 5.52083 10.0958 5.7125 10.2875C5.90417 10.4792 6 10.7167 6 11C6 11.2833 5.90417 11.5208 5.7125 11.7125C5.52083 11.9042 5.28333 12 5 12ZM13 12C12.7167 12 12.4792 11.9042 12.2875 11.7125C12.0958 11.5208 12 11.2833 12 11C12 10.7167 12.0958 10.4792 12.2875 10.2875C12.4792 10.0958 12.7167 10 13 10C13.2833 10 13.5208 10.0958 13.7125 10.2875C13.9042 10.4792 14 10.7167 14 11C14 11.2833 13.9042 11.5208 13.7125 11.7125C13.5208 11.9042 13.2833 12 13 12ZM9 16C8.71667 16 8.47917 15.9042 8.2875 15.7125C8.09583 15.5208 8 15.2833 8 15C8 14.7167 8.09583 14.4792 8.2875 14.2875C8.47917 14.0958 8.71667 14 9 14C9.28333 14 9.52083 14.0958 9.7125 14.2875C9.90417 14.4792 10 14.7167 10 15C10 15.2833 9.90417 15.5208 9.7125 15.7125C9.52083 15.9042 9.28333 16 9 16ZM5 16C4.71667 16 4.47917 15.9042 4.2875 15.7125C4.09583 15.5208 4 15.2833 4 15C4 14.7167 4.09583 14.4792 4.2875 14.2875C4.47917 14.0958 4.71667 14 5 14C5.28333 14 5.52083 14.0958 5.7125 14.2875C5.90417 14.4792 6 14.7167 6 15C6 15.2833 5.90417 15.5208 5.7125 15.7125C5.52083 15.9042 5.28333 16 5 16ZM13 16C12.7167 16 12.4792 15.9042 12.2875 15.7125C12.0958 15.5208 12 15.2833 12 15C12 14.7167 12.0958 14.4792 12.2875 14.2875C12.4792 14.0958 12.7167 14 13 14C13.2833 14 13.5208 14.0958 13.7125 14.2875C13.9042 14.4792 14 14.7167 14 15C14 15.2833 13.9042 15.5208 13.7125 15.7125C13.5208 15.9042 13.2833 16 13 16Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  cancel: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 11.4L12.9 14.3C13.0833 14.4833 13.3167 14.575 13.6 14.575C13.8833 14.575 14.1167 14.4833 14.3 14.3C14.4833 14.1167 14.575 13.8833 14.575 13.6C14.575 13.3167 14.4833 13.0833 14.3 12.9L11.4 10L14.3 7.1C14.4833 6.91667 14.575 6.68333 14.575 6.4C14.575 6.11667 14.4833 5.88333 14.3 5.7C14.1167 5.51667 13.8833 5.425 13.6 5.425C13.3167 5.425 13.0833 5.51667 12.9 5.7L10 8.6L7.1 5.7C6.91667 5.51667 6.68333 5.425 6.4 5.425C6.11667 5.425 5.88333 5.51667 5.7 5.7C5.51667 5.88333 5.425 6.11667 5.425 6.4C5.425 6.68333 5.51667 6.91667 5.7 7.1L8.6 10L5.7 12.9C5.51667 13.0833 5.425 13.3167 5.425 13.6C5.425 13.8833 5.51667 14.1167 5.7 14.3C5.88333 14.4833 6.11667 14.575 6.4 14.575C6.68333 14.575 6.91667 14.4833 7.1 14.3L10 11.4ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
  <path d="M5.5565 9.1625L14.0315 0.687501C14.2315 0.487501 14.4648 0.387501 14.7315 0.387501C14.9982 0.387501 15.2315 0.487501 15.4315 0.687501C15.6315 0.887501 15.7315 1.125 15.7315 1.4C15.7315 1.675 15.6315 1.9125 15.4315 2.1125L6.2565 11.3125C6.0565 11.5125 5.82317 11.6125 5.5565 11.6125C5.28983 11.6125 5.0565 11.5125 4.8565 11.3125L0.556499 7.0125C0.356499 6.8125 0.260666 6.575 0.268999 6.3C0.277333 6.025 0.381499 5.7875 0.581499 5.5875C0.781499 5.3875 1.019 5.2875 1.294 5.2875C1.569 5.2875 1.8065 5.3875 2.0065 5.5875L5.5565 9.1625Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M7 8.4L2.1 13.3C1.91667 13.4833 1.68334 13.575 1.4 13.575C1.11667 13.575 0.883336 13.4833 0.700003 13.3C0.51667 13.1167 0.425003 12.8833 0.425003 12.6C0.425003 12.3167 0.51667 12.0833 0.700003 11.9L5.6 7L0.700003 2.1C0.51667 1.91667 0.425003 1.68334 0.425003 1.4C0.425003 1.11667 0.51667 0.883336 0.700003 0.700003C0.883336 0.51667 1.11667 0.425003 1.4 0.425003C1.68334 0.425003 1.91667 0.51667 2.1 0.700003L7 5.6L11.9 0.700003C12.0833 0.51667 12.3167 0.425003 12.6 0.425003C12.8833 0.425003 13.1167 0.51667 13.3 0.700003C13.4833 0.883336 13.575 1.11667 13.575 1.4C13.575 1.68334 13.4833 1.91667 13.3 2.1L8.4 7L13.3 11.9C13.4833 12.0833 13.575 12.3167 13.575 12.6C13.575 12.8833 13.4833 13.1167 13.3 13.3C13.1167 13.4833 12.8833 13.575 12.6 13.575C12.3167 13.575 12.0833 13.4833 11.9 13.3L7 8.4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8 11.575C7.86667 11.575 7.74167 11.5542 7.625 11.5125C7.50833 11.4708 7.4 11.4 7.3 11.3L3.7 7.7C3.5 7.5 3.40417 7.26667 3.4125 7C3.42083 6.73333 3.51667 6.5 3.7 6.3C3.9 6.1 4.1375 5.99583 4.4125 5.9875C4.6875 5.97917 4.925 6.075 5.125 6.275L7 8.15V1C7 0.716667 7.09583 0.479167 7.2875 0.2875C7.47917 0.0958333 7.71667 0 8 0C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1V8.15L10.875 6.275C11.075 6.075 11.3125 5.97917 11.5875 5.9875C11.8625 5.99583 12.1 6.1 12.3 6.3C12.4833 6.5 12.5792 6.73333 12.5875 7C12.5958 7.26667 12.5 7.5 12.3 7.7L8.7 11.3C8.6 11.4 8.49167 11.4708 8.375 11.5125C8.25833 11.5542 8.13333 11.575 8 11.575ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11C1.28333 11 1.52083 11.0958 1.7125 11.2875C1.90417 11.4792 2 11.7167 2 12V14H14V12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0958 14.7167 11 15 11C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  download_done: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M5.544 8.95L13.994 0.499997C14.194 0.299997 14.4315 0.199997 14.7065 0.199997C14.9815 0.199997 15.219 0.299997 15.419 0.499997C15.619 0.699997 15.719 0.937497 15.719 1.2125C15.719 1.4875 15.619 1.725 15.419 1.925L6.244 11.1C6.044 11.3 5.81067 11.4 5.544 11.4C5.27733 11.4 5.044 11.3 4.844 11.1L0.568998 6.825C0.368998 6.625 0.273165 6.3875 0.281498 6.1125C0.289832 5.8375 0.393998 5.6 0.593998 5.4C0.793998 5.2 1.0315 5.1 1.3065 5.1C1.5815 5.1 1.819 5.2 2.019 5.4L5.544 8.95ZM1.994 15.8C1.71066 15.8 1.47317 15.7042 1.2815 15.5125C1.08983 15.3208 0.993998 15.0833 0.993998 14.8C0.993998 14.5167 1.08983 14.2792 1.2815 14.0875C1.47317 13.8958 1.71066 13.8 1.994 13.8H13.994C14.2773 13.8 14.5148 13.8958 14.7065 14.0875C14.8982 14.2792 14.994 14.5167 14.994 14.8C14.994 15.0833 14.8982 15.3208 14.7065 15.5125C14.5148 15.7042 14.2773 15.8 13.994 15.8H1.994Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  drive_folder_upload: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
  <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H7.175C7.44167 0 7.69583 0.05 7.9375 0.15C8.17917 0.25 8.39167 0.391667 8.575 0.575L10 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM2 14H18V4H9.175L7.175 2H2V14ZM10 13C10.2833 13 10.5208 12.9042 10.7125 12.7125C10.9042 12.5208 11 12.2833 11 12V8.8L11.9 9.7C12.0833 9.88333 12.3167 9.975 12.6 9.975C12.8833 9.975 13.1167 9.88333 13.3 9.7C13.4833 9.51667 13.575 9.28333 13.575 9C13.575 8.71667 13.4833 8.48333 13.3 8.3L10.7 5.7C10.5 5.5 10.2667 5.4 10 5.4C9.73333 5.4 9.5 5.5 9.3 5.7L6.7 8.3C6.51667 8.48333 6.425 8.71667 6.425 9C6.425 9.28333 6.51667 9.51667 6.7 9.7C6.88333 9.88333 7.11667 9.975 7.4 9.975C7.68333 9.975 7.91667 9.88333 8.1 9.7L9 8.8V12C9 12.2833 9.09583 12.5208 9.2875 12.7125C9.47917 12.9042 9.71667 13 10 13Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  edit_square: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
  <path d="M2 21.0125C1.45 21.0125 0.979167 20.8167 0.5875 20.425C0.195833 20.0333 0 19.5625 0 19.0125V5.0125C0 4.4625 0.195833 3.99167 0.5875 3.6C0.979167 3.20834 1.45 3.0125 2 3.0125H8.525C8.85833 3.0125 9.10833 3.11667 9.275 3.325C9.44167 3.53334 9.525 3.7625 9.525 4.0125C9.525 4.2625 9.4375 4.49167 9.2625 4.7C9.0875 4.90834 8.83333 5.0125 8.5 5.0125H2V19.0125H16V12.4875C16 12.1542 16.1042 11.9042 16.3125 11.7375C16.5208 11.5708 16.75 11.4875 17 11.4875C17.25 11.4875 17.4792 11.5708 17.6875 11.7375C17.8958 11.9042 18 12.1542 18 12.4875V19.0125C18 19.5625 17.8042 20.0333 17.4125 20.425C17.0208 20.8167 16.55 21.0125 16 21.0125H2ZM6 14.0125V11.5875C6 11.3208 6.05 11.0667 6.15 10.825C6.25 10.5833 6.39167 10.3708 6.575 10.1875L15.175 1.5875C15.375 1.3875 15.6 1.2375 15.85 1.1375C16.1 1.0375 16.35 0.987503 16.6 0.987503C16.8667 0.987503 17.1208 1.0375 17.3625 1.1375C17.6042 1.2375 17.825 1.3875 18.025 1.5875L19.425 3.0125C19.6083 3.2125 19.75 3.43334 19.85 3.675C19.95 3.91667 20 4.1625 20 4.4125C20 4.6625 19.9542 4.90834 19.8625 5.15C19.7708 5.39167 19.625 5.6125 19.425 5.8125L10.825 14.4125C10.6417 14.5958 10.4292 14.7417 10.1875 14.85C9.94583 14.9583 9.69167 15.0125 9.425 15.0125H7C6.71667 15.0125 6.47917 14.9167 6.2875 14.725C6.09583 14.5333 6 14.2958 6 14.0125ZM8 13.0125H9.4L15.2 7.2125L14.5 6.5125L13.775 5.8125L8 11.5875V13.0125Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  help: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.95 16C10.3 16 10.5958 15.8792 10.8375 15.6375C11.0792 15.3958 11.2 15.1 11.2 14.75C11.2 14.4 11.0792 14.1042 10.8375 13.8625C10.5958 13.6208 10.3 13.5 9.95 13.5C9.6 13.5 9.30417 13.6208 9.0625 13.8625C8.82083 14.1042 8.7 14.4 8.7 14.75C8.7 15.1 8.82083 15.3958 9.0625 15.6375C9.30417 15.8792 9.6 16 9.95 16ZM9.05 12.15H10.9C10.9 11.6 10.9625 11.1667 11.0875 10.85C11.2125 10.5333 11.5667 10.1 12.15 9.55C12.5833 9.11667 12.925 8.70417 13.175 8.3125C13.425 7.92083 13.55 7.45 13.55 6.9C13.55 5.96667 13.2083 5.25 12.525 4.75C11.8417 4.25 11.0333 4 10.1 4C9.15 4 8.37917 4.25 7.7875 4.75C7.19583 5.25 6.78333 5.85 6.55 6.55L8.2 7.2C8.28333 6.9 8.47083 6.575 8.7625 6.225C9.05417 5.875 9.5 5.7 10.1 5.7C10.6333 5.7 11.0333 5.84583 11.3 6.1375C11.5667 6.42917 11.7 6.75 11.7 7.1C11.7 7.43333 11.6 7.74583 11.4 8.0375C11.2 8.32917 10.95 8.6 10.65 8.85C9.91667 9.5 9.46667 9.99167 9.3 10.325C9.13333 10.6583 9.05 11.2667 9.05 12.15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  language: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 20C8.63333 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3667 0 10C0 8.61667 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.63333 0 10 0C11.3833 0 12.6792 0.2625 13.8875 0.7875C15.0958 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90417 19.2125 6.1125C19.7375 7.32083 20 8.61667 20 10C20 11.3667 19.7375 12.6583 19.2125 13.875C18.6875 15.0917 17.9708 16.1542 17.0625 17.0625C16.1542 17.9708 15.0958 18.6875 13.8875 19.2125C12.6792 19.7375 11.3833 20 10 20ZM10 17.95C10.4333 17.35 10.8083 16.725 11.125 16.075C11.4417 15.425 11.7 14.7333 11.9 14H8.1C8.3 14.7333 8.55833 15.425 8.875 16.075C9.19167 16.725 9.56667 17.35 10 17.95ZM7.4 17.55C7.1 17 6.8375 16.4292 6.6125 15.8375C6.3875 15.2458 6.2 14.6333 6.05 14H3.1C3.58333 14.8333 4.1875 15.5583 4.9125 16.175C5.6375 16.7917 6.46667 17.25 7.4 17.55ZM12.6 17.55C13.5333 17.25 14.3625 16.7917 15.0875 16.175C15.8125 15.5583 16.4167 14.8333 16.9 14H13.95C13.8 14.6333 13.6125 15.2458 13.3875 15.8375C13.1625 16.4292 12.9 17 12.6 17.55ZM2.25 12H5.65C5.6 11.6667 5.5625 11.3375 5.5375 11.0125C5.5125 10.6875 5.5 10.35 5.5 10C5.5 9.65 5.5125 9.3125 5.5375 8.9875C5.5625 8.6625 5.6 8.33333 5.65 8H2.25C2.16667 8.33333 2.10417 8.6625 2.0625 8.9875C2.02083 9.3125 2 9.65 2 10C2 10.35 2.02083 10.6875 2.0625 11.0125C2.10417 11.3375 2.16667 11.6667 2.25 12ZM7.65 12H12.35C12.4 11.6667 12.4375 11.3375 12.4625 11.0125C12.4875 10.6875 12.5 10.35 12.5 10C12.5 9.65 12.4875 9.3125 12.4625 8.9875C12.4375 8.6625 12.4 8.33333 12.35 8H7.65C7.6 8.33333 7.5625 8.6625 7.5375 8.9875C7.5125 9.3125 7.5 9.65 7.5 10C7.5 10.35 7.5125 10.6875 7.5375 11.0125C7.5625 11.3375 7.6 11.6667 7.65 12ZM14.35 12H17.75C17.8333 11.6667 17.8958 11.3375 17.9375 11.0125C17.9792 10.6875 18 10.35 18 10C18 9.65 17.9792 9.3125 17.9375 8.9875C17.8958 8.6625 17.8333 8.33333 17.75 8H14.35C14.4 8.33333 14.4375 8.6625 14.4625 8.9875C14.4875 9.3125 14.5 9.65 14.5 10C14.5 10.35 14.4875 10.6875 14.4625 11.0125C14.4375 11.3375 14.4 11.6667 14.35 12ZM13.95 6H16.9C16.4167 5.16667 15.8125 4.44167 15.0875 3.825C14.3625 3.20833 13.5333 2.75 12.6 2.45C12.9 3 13.1625 3.57083 13.3875 4.1625C13.6125 4.75417 13.8 5.36667 13.95 6ZM8.1 6H11.9C11.7 5.26667 11.4417 4.575 11.125 3.925C10.8083 3.275 10.4333 2.65 10 2.05C9.56667 2.65 9.19167 3.275 8.875 3.925C8.55833 4.575 8.3 5.26667 8.1 6ZM3.1 6H6.05C6.2 5.36667 6.3875 4.75417 6.6125 4.1625C6.8375 3.57083 7.1 3 7.4 2.45C6.46667 2.75 5.6375 3.20833 4.9125 3.825C4.1875 4.44167 3.58333 5.16667 3.1 6Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
  <path d="M1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10H17C17.2833 10 17.5208 10.0958 17.7125 10.2875C17.9042 10.4792 18 10.7167 18 11C18 11.2833 17.9042 11.5208 17.7125 11.7125C17.5208 11.9042 17.2833 12 17 12H1ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H17C17.2833 5 17.5208 5.09583 17.7125 5.2875C17.9042 5.47917 18 5.71667 18 6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7H1ZM1 2C0.716667 2 0.479167 1.90417 0.2875 1.7125C0.0958333 1.52083 0 1.28333 0 1C0 0.716667 0.0958333 0.479167 0.2875 0.2875C0.479167 0.0958333 0.716667 0 1 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1C18 1.28333 17.9042 1.52083 17.7125 1.7125C17.5208 1.90417 17.2833 2 17 2H1Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  more_vert: `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16" fill="none">
  <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14C0 13.45 0.195833 12.9792 0.5875 12.5875C0.979167 12.1958 1.45 12 2 12C2.55 12 3.02083 12.1958 3.4125 12.5875C3.80417 12.9792 4 13.45 4 14C4 14.55 3.80417 15.0208 3.4125 15.4125C3.02083 15.8042 2.55 16 2 16ZM2 10C1.45 10 0.979167 9.80417 0.5875 9.4125C0.195833 9.02083 0 8.55 0 8C0 7.45 0.195833 6.97917 0.5875 6.5875C0.979167 6.19583 1.45 6 2 6C2.55 6 3.02083 6.19583 3.4125 6.5875C3.80417 6.97917 4 7.45 4 8C4 8.55 3.80417 9.02083 3.4125 9.4125C3.02083 9.80417 2.55 10 2 10ZM2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  open_in_new: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H8C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1C9 1.28333 8.90417 1.52083 8.7125 1.7125C8.52083 1.90417 8.28333 2 8 2H2V16H16V10C16 9.71667 16.0958 9.47917 16.2875 9.2875C16.4792 9.09583 16.7167 9 17 9C17.2833 9 17.5208 9.09583 17.7125 9.2875C17.9042 9.47917 18 9.71667 18 10V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM16 3.4L7.4 12C7.21667 12.1833 6.98333 12.275 6.7 12.275C6.41667 12.275 6.18333 12.1833 6 12C5.81667 11.8167 5.725 11.5833 5.725 11.3C5.725 11.0167 5.81667 10.7833 6 10.6L14.6 2H12C11.7167 2 11.4792 1.90417 11.2875 1.7125C11.0958 1.52083 11 1.28333 11 1C11 0.716667 11.0958 0.479167 11.2875 0.2875C11.4792 0.0958333 11.7167 0 12 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1V6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7C16.7167 7 16.4792 6.90417 16.2875 6.7125C16.0958 6.52083 16 6.28333 16 6V3.4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  publish: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M7 7.85L5.125 9.725C4.925 9.925 4.6875 10.0208 4.4125 10.0125C4.1375 10.0042 3.9 9.9 3.7 9.7C3.51667 9.5 3.42083 9.26667 3.4125 9C3.40417 8.73333 3.5 8.5 3.7 8.3L7.3 4.7C7.4 4.6 7.50833 4.52917 7.625 4.4875C7.74167 4.44583 7.86667 4.425 8 4.425C8.13333 4.425 8.25833 4.44583 8.375 4.4875C8.49167 4.52917 8.6 4.6 8.7 4.7L12.3 8.3C12.5 8.5 12.5958 8.73333 12.5875 9C12.5792 9.26667 12.4833 9.5 12.3 9.7C12.1 9.9 11.8625 10.0042 11.5875 10.0125C11.3125 10.0208 11.075 9.925 10.875 9.725L9 7.85V15C9 15.2833 8.90417 15.5208 8.7125 15.7125C8.52083 15.9042 8.28333 16 8 16C7.71667 16 7.47917 15.9042 7.2875 15.7125C7.09583 15.5208 7 15.2833 7 15V7.85ZM0 4V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V4C16 4.28333 15.9042 4.52083 15.7125 4.7125C15.5208 4.90417 15.2833 5 15 5C14.7167 5 14.4792 4.90417 14.2875 4.7125C14.0958 4.52083 14 4.28333 14 4V2H2V4C2 4.28333 1.90417 4.52083 1.7125 4.7125C1.52083 4.90417 1.28333 5 1 5C0.716667 5 0.479167 4.90417 0.2875 4.7125C0.0958333 4.52083 0 4.28333 0 4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M6.71249 13.2125C4.89583 13.2125 3.35833 12.5833 2.09999 11.325C0.841661 10.0667 0.212494 8.52917 0.212494 6.7125C0.212494 4.89583 0.841661 3.35834 2.09999 2.1C3.35833 0.841668 4.89583 0.212502 6.71249 0.212502C8.52916 0.212502 10.0667 0.841668 11.325 2.1C12.5833 3.35834 13.2125 4.89583 13.2125 6.7125C13.2125 7.44584 13.0958 8.1375 12.8625 8.7875C12.6292 9.4375 12.3125 10.0125 11.9125 10.5125L17.5125 16.1125C17.6958 16.2958 17.7875 16.5292 17.7875 16.8125C17.7875 17.0958 17.6958 17.3292 17.5125 17.5125C17.3292 17.6958 17.0958 17.7875 16.8125 17.7875C16.5292 17.7875 16.2958 17.6958 16.1125 17.5125L10.5125 11.9125C10.0125 12.3125 9.43749 12.6292 8.78749 12.8625C8.13749 13.0958 7.44583 13.2125 6.71249 13.2125ZM6.71249 11.2125C7.96249 11.2125 9.02499 10.775 9.89999 9.9C10.775 9.025 11.2125 7.9625 11.2125 6.7125C11.2125 5.4625 10.775 4.4 9.89999 3.525C9.02499 2.65 7.96249 2.2125 6.71249 2.2125C5.46249 2.2125 4.39999 2.65 3.52499 3.525C2.64999 4.4 2.21249 5.4625 2.21249 6.7125C2.21249 7.9625 2.64999 9.025 3.52499 9.9C4.39999 10.775 5.46249 11.2125 6.71249 11.2125Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  share: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.9 12.025 16.6667 12.075 16.3L5.05 12.2C4.78333 12.45 4.475 12.6458 4.125 12.7875C3.775 12.9292 3.4 13 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.4 7 3.775 7.07083 4.125 7.2125C4.475 7.35417 4.78333 7.55 5.05 7.8L12.075 3.7C12.0417 3.58333 12.0208 3.47083 12.0125 3.3625C12.0042 3.25417 12 3.13333 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6 6 14.225 5.92917 13.875 5.7875C13.525 5.64583 13.2167 5.45 12.95 5.2L5.925 9.3C5.95833 9.41667 5.97917 9.52917 5.9875 9.6375C5.99583 9.74583 6 9.86667 6 10C6 10.1333 5.99583 10.2542 5.9875 10.3625C5.97917 10.4708 5.95833 10.5833 5.925 10.7L12.95 14.8C13.2167 14.55 13.525 14.3542 13.875 14.2125C14.225 14.0708 14.6 14 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20ZM15 18C15.2833 18 15.5208 17.9042 15.7125 17.7125C15.9042 17.5208 16 17.2833 16 17C16 16.7167 15.9042 16.4792 15.7125 16.2875C15.5208 16.0958 15.2833 16 15 16C14.7167 16 14.4792 16.0958 14.2875 16.2875C14.0958 16.4792 14 16.7167 14 17C14 17.2833 14.0958 17.5208 14.2875 17.7125C14.4792 17.9042 14.7167 18 15 18ZM3 11C3.28333 11 3.52083 10.9042 3.7125 10.7125C3.90417 10.5208 4 10.2833 4 10C4 9.71667 3.90417 9.47917 3.7125 9.2875C3.52083 9.09583 3.28333 9 3 9C2.71667 9 2.47917 9.09583 2.2875 9.2875C2.09583 9.47917 2 9.71667 2 10C2 10.2833 2.09583 10.5208 2.2875 10.7125C2.47917 10.9042 2.71667 11 3 11ZM15 4C15.2833 4 15.5208 3.90417 15.7125 3.7125C15.9042 3.52083 16 3.28333 16 3C16 2.71667 15.9042 2.47917 15.7125 2.2875C15.5208 2.09583 15.2833 2 15 2C14.7167 2 14.4792 2.09583 14.2875 2.2875C14.0958 2.47917 14 2.71667 14 3C14 3.28333 14.0958 3.52083 14.2875 3.7125C14.4792 3.90417 14.7167 4 15 4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  sms: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
  <path d="M4 16L1.7 18.3C1.38333 18.6167 1.02083 18.6875 0.6125 18.5125C0.204167 18.3375 0 18.025 0 17.575V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4ZM3.15 14H18V2H2V15.125L3.15 14ZM6 9C6.28333 9 6.52083 8.90417 6.7125 8.7125C6.90417 8.52083 7 8.28333 7 8C7 7.71667 6.90417 7.47917 6.7125 7.2875C6.52083 7.09583 6.28333 7 6 7C5.71667 7 5.47917 7.09583 5.2875 7.2875C5.09583 7.47917 5 7.71667 5 8C5 8.28333 5.09583 8.52083 5.2875 8.7125C5.47917 8.90417 5.71667 9 6 9ZM10 9C10.2833 9 10.5208 8.90417 10.7125 8.7125C10.9042 8.52083 11 8.28333 11 8C11 7.71667 10.9042 7.47917 10.7125 7.2875C10.5208 7.09583 10.2833 7 10 7C9.71667 7 9.47917 7.09583 9.2875 7.2875C9.09583 7.47917 9 7.71667 9 8C9 8.28333 9.09583 8.52083 9.2875 8.7125C9.47917 8.90417 9.71667 9 10 9ZM14 9C14.2833 9 14.5208 8.90417 14.7125 8.7125C14.9042 8.52083 15 8.28333 15 8C15 7.71667 14.9042 7.47917 14.7125 7.2875C14.5208 7.09583 14.2833 7 14 7C13.7167 7 13.4792 7.09583 13.2875 7.2875C13.0958 7.47917 13 7.71667 13 8C13 8.28333 13.0958 8.52083 13.2875 8.7125C13.4792 8.90417 13.7167 9 14 9Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  thumb_down: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M2 13C1.46667 13 1 12.8 0.6 12.4C0.2 12 0 11.5333 0 11V9C0 8.88333 0.0125 8.75833 0.0375 8.625C0.0625 8.49167 0.1 8.36667 0.15 8.25L3.15 1.2C3.3 0.866667 3.55 0.583333 3.9 0.35C4.25 0.116667 4.61667 0 5 0H13C13.55 0 14.0208 0.195833 14.4125 0.5875C14.8042 0.979167 15 1.45 15 2V12.175C15 12.4417 14.9458 12.6958 14.8375 12.9375C14.7292 13.1792 14.5833 13.3917 14.4 13.575L8.975 18.975C8.725 19.2083 8.42917 19.35 8.0875 19.4C7.74583 19.45 7.41667 19.3917 7.1 19.225C6.78333 19.0583 6.55417 18.825 6.4125 18.525C6.27083 18.225 6.24167 17.9167 6.325 17.6L7.45 13H2ZM19 0C19.55 0 20.0208 0.195833 20.4125 0.5875C20.8042 0.979167 21 1.45 21 2V11C21 11.55 20.8042 12.0208 20.4125 12.4125C20.0208 12.8042 19.55 13 19 13C18.45 13 17.9792 12.8042 17.5875 12.4125C17.1958 12.0208 17 11.55 17 11V2C17 1.45 17.1958 0.979167 17.5875 0.5875C17.9792 0.195833 18.45 0 19 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  thumb_up: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M19 7.00001C19.5333 7.00001 20 7.20001 20.4 7.60001C20.8 8.00001 21 8.46668 21 9.00001V11C21 11.1167 20.9875 11.2417 20.9625 11.375C20.9375 11.5083 20.9 11.6333 20.85 11.75L17.85 18.8C17.7 19.1333 17.45 19.4167 17.1 19.65C16.75 19.8833 16.3833 20 16 20H8C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18V7.82501C6 7.55834 6.05417 7.30418 6.1625 7.06251C6.27083 6.82084 6.41667 6.60834 6.6 6.42501L12.025 1.02501C12.275 0.791677 12.5708 0.65001 12.9125 0.60001C13.2542 0.55001 13.5833 0.608344 13.9 0.77501C14.2167 0.941677 14.4458 1.17501 14.5875 1.47501C14.7292 1.77501 14.7583 2.08334 14.675 2.40001L13.55 7.00001H19ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V9.00001C0 8.45001 0.195833 7.97918 0.5875 7.58751C0.979167 7.19584 1.45 7.00001 2 7.00001C2.55 7.00001 3.02083 7.19584 3.4125 7.58751C3.80417 7.97918 4 8.45001 4 9.00001V18C4 18.55 3.80417 19.0208 3.4125 19.4125C3.02083 19.8042 2.55 20 2 20Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  upload_file: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
  <path d="M7 12.825V16C7 16.2833 7.09583 16.5208 7.2875 16.7125C7.47917 16.9042 7.71667 17 8 17C8.28333 17 8.52083 16.9042 8.7125 16.7125C8.90417 16.5208 9 16.2833 9 16V12.825L9.9 13.725C10 13.825 10.1125 13.9 10.2375 13.95C10.3625 14 10.4875 14.0208 10.6125 14.0125C10.7375 14.0042 10.8583 13.975 10.975 13.925C11.0917 13.875 11.2 13.8 11.3 13.7C11.4833 13.5 11.5792 13.2667 11.5875 13C11.5958 12.7333 11.5 12.5 11.3 12.3L8.7 9.7C8.6 9.6 8.49167 9.52917 8.375 9.4875C8.25833 9.44583 8.13333 9.425 8 9.425C7.86667 9.425 7.74167 9.44583 7.625 9.4875C7.50833 9.52917 7.4 9.6 7.3 9.7L4.7 12.3C4.5 12.5 4.40417 12.7333 4.4125 13C4.42083 13.2667 4.525 13.5 4.725 13.7C4.925 13.8833 5.15833 13.9792 5.425 13.9875C5.69167 13.9958 5.925 13.9 6.125 13.7L7 12.825ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9.175C9.44167 0 9.69583 0.05 9.9375 0.15C10.1792 0.25 10.3917 0.391667 10.575 0.575L15.425 5.425C15.6083 5.60833 15.75 5.82083 15.85 6.0625C15.95 6.30417 16 6.55833 16 6.825V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 6V2H2V18H14V7H10C9.71667 7 9.47917 6.90417 9.2875 6.7125C9.09583 6.52083 9 6.28333 9 6Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  visibility: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
  <path d="M11 12.5C12.25 12.5 13.3125 12.0625 14.1875 11.1875C15.0625 10.3125 15.5 9.25 15.5 8C15.5 6.75 15.0625 5.6875 14.1875 4.8125C13.3125 3.9375 12.25 3.5 11 3.5C9.75 3.5 8.6875 3.9375 7.8125 4.8125C6.9375 5.6875 6.5 6.75 6.5 8C6.5 9.25 6.9375 10.3125 7.8125 11.1875C8.6875 12.0625 9.75 12.5 11 12.5ZM11 10.7C10.25 10.7 9.6125 10.4375 9.0875 9.9125C8.5625 9.3875 8.3 8.75 8.3 8C8.3 7.25 8.5625 6.6125 9.0875 6.0875C9.6125 5.5625 10.25 5.3 11 5.3C11.75 5.3 12.3875 5.5625 12.9125 6.0875C13.4375 6.6125 13.7 7.25 13.7 8C13.7 8.75 13.4375 9.3875 12.9125 9.9125C12.3875 10.4375 11.75 10.7 11 10.7ZM11 15.5C8.56667 15.5 6.35 14.8208 4.35 13.4625C2.35 12.1042 0.9 10.2833 0 8C0.9 5.71667 2.35 3.89583 4.35 2.5375C6.35 1.17917 8.56667 0.5 11 0.5C13.4333 0.5 15.65 1.17917 17.65 2.5375C19.65 3.89583 21.1 5.71667 22 8C21.1 10.2833 19.65 12.1042 17.65 13.4625C15.65 14.8208 13.4333 15.5 11 15.5ZM11 13.5C12.8833 13.5 14.6125 13.0042 16.1875 12.0125C17.7625 11.0208 18.9667 9.68333 19.8 8C18.9667 6.31667 17.7625 4.97917 16.1875 3.9875C14.6125 2.99583 12.8833 2.5 11 2.5C9.11667 2.5 7.3875 2.99583 5.8125 3.9875C4.2375 4.97917 3.03333 6.31667 2.2 8C3.03333 9.68333 4.2375 11.0208 5.8125 12.0125C7.3875 13.0042 9.11667 13.5 11 13.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  visibility_off: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
  <path d="M15.1 10.6L13.65 9.15C13.8 8.36667 13.575 7.63333 12.975 6.95C12.375 6.26667 11.6 6 10.65 6.15L9.2 4.7C9.48333 4.56667 9.77083 4.46667 10.0625 4.4C10.3542 4.33333 10.6667 4.3 11 4.3C12.25 4.3 13.3125 4.7375 14.1875 5.6125C15.0625 6.4875 15.5 7.55 15.5 8.8C15.5 9.13333 15.4667 9.44583 15.4 9.7375C15.3333 10.0292 15.2333 10.3167 15.1 10.6ZM18.3 13.75L16.85 12.35C17.4833 11.8667 18.0458 11.3375 18.5375 10.7625C19.0292 10.1875 19.45 9.53333 19.8 8.8C18.9667 7.11667 17.7708 5.77917 16.2125 4.7875C14.6542 3.79583 12.9167 3.3 11 3.3C10.5167 3.3 10.0417 3.33333 9.575 3.4C9.10833 3.46667 8.65 3.56667 8.2 3.7L6.65 2.15C7.33333 1.86667 8.03333 1.65417 8.75 1.5125C9.46667 1.37083 10.2167 1.3 11 1.3C13.5167 1.3 15.7583 1.99583 17.725 3.3875C19.6917 4.77917 21.1167 6.58333 22 8.8C21.6167 9.78333 21.1125 10.6958 20.4875 11.5375C19.8625 12.3792 19.1333 13.1167 18.3 13.75ZM18.8 19.9L14.6 15.75C14.0167 15.9333 13.4292 16.0708 12.8375 16.1625C12.2458 16.2542 11.6333 16.3 11 16.3C8.48333 16.3 6.24167 15.6042 4.275 14.2125C2.30833 12.8208 0.883333 11.0167 0 8.8C0.35 7.91667 0.791667 7.09583 1.325 6.3375C1.85833 5.57917 2.46667 4.9 3.15 4.3L0.4 1.5L1.8 0.0999985L20.2 18.5L18.8 19.9ZM4.55 5.7C4.06667 6.13333 3.625 6.60833 3.225 7.125C2.825 7.64167 2.48333 8.2 2.2 8.8C3.03333 10.4833 4.22917 11.8208 5.7875 12.8125C7.34583 13.8042 9.08333 14.3 11 14.3C11.3333 14.3 11.6583 14.2792 11.975 14.2375C12.2917 14.1958 12.6167 14.15 12.95 14.1L12.05 13.15C11.8667 13.2 11.6917 13.2375 11.525 13.2625C11.3583 13.2875 11.1833 13.3 11 13.3C9.75 13.3 8.6875 12.8625 7.8125 11.9875C6.9375 11.1125 6.5 10.05 6.5 8.8C6.5 8.61667 6.5125 8.44167 6.5375 8.275C6.5625 8.10833 6.6 7.93333 6.65 7.75L4.55 5.7Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  notifications: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
  <path d="M1 17C0.716667 17 0.479167 16.9042 0.2875 16.7125C0.0958333 16.5208 0 16.2833 0 16C0 15.7167 0.0958333 15.4792 0.2875 15.2875C0.479167 15.0958 0.716667 15 1 15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V2.2C10.8333 2.53333 11.9167 3.2375 12.75 4.3125C13.5833 5.3875 14 6.61667 14 8V15H15C15.2833 15 15.5208 15.0958 15.7125 15.2875C15.9042 15.4792 16 15.7167 16 16C16 16.2833 15.9042 16.5208 15.7125 16.7125C15.5208 16.9042 15.2833 17 15 17H1ZM8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20ZM4 15H12V8C12 6.9 11.6083 5.95833 10.825 5.175C10.0417 4.39167 9.1 4 8 4C6.9 4 5.95833 4.39167 5.175 5.175C4.39167 5.95833 4 6.9 4 8V15Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  // *** Arrows *** //
  arrow_back: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.6125 8.9935L8.5125 13.8935C8.7125 14.0935 8.80834 14.3268 8.8 14.5935C8.79167 14.8602 8.6875 15.0935 8.4875 15.2935C8.2875 15.4768 8.05417 15.5727 7.7875 15.581C7.52083 15.5893 7.2875 15.4935 7.0875 15.2935L0.487502 8.6935C0.387502 8.5935 0.316668 8.48517 0.275002 8.3685C0.233335 8.25184 0.212502 8.12684 0.212502 7.9935C0.212502 7.86017 0.233335 7.73517 0.275002 7.6185C0.316668 7.50184 0.387502 7.3935 0.487502 7.2935L7.0875 0.693503C7.27083 0.510169 7.5 0.418503 7.775 0.418503C8.05 0.418503 8.2875 0.510169 8.4875 0.693503C8.6875 0.893503 8.7875 1.131 8.7875 1.406C8.7875 1.681 8.6875 1.9185 8.4875 2.1185L3.6125 6.9935H14.7875C15.0708 6.9935 15.3083 7.08934 15.5 7.281C15.6917 7.47267 15.7875 7.71017 15.7875 7.9935C15.7875 8.27684 15.6917 8.51434 15.5 8.706C15.3083 8.89767 15.0708 8.9935 14.7875 8.9935H3.6125Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Chevrons *** //
  chevron_down: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path d="M10.0065 8.5L17.3565 1.15C17.6065 0.899999 17.8981 0.779165 18.2315 0.787499C18.5648 0.795832 18.8565 0.924999 19.1065 1.175C19.3565 1.425 19.4815 1.71667 19.4815 2.05C19.4815 2.38333 19.3565 2.675 19.1065 2.925L11.4315 10.625C11.2315 10.825 11.0065 10.975 10.7565 11.075C10.5065 11.175 10.2565 11.225 10.0065 11.225C9.75646 11.225 9.50646 11.175 9.25646 11.075C9.00646 10.975 8.78146 10.825 8.58146 10.625L0.881458 2.925C0.631458 2.675 0.510625 2.37916 0.518958 2.0375C0.527291 1.69583 0.656458 1.4 0.906458 1.15C1.15646 0.899999 1.44812 0.774999 1.78146 0.774999C2.11479 0.774999 2.40646 0.899999 2.65646 1.15L10.0065 8.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  chevron_up: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path d="M9.99354 3.5L2.64354 10.85C2.39354 11.1 2.10188 11.2208 1.76854 11.2125C1.43521 11.2042 1.14354 11.075 0.893541 10.825C0.643541 10.575 0.518541 10.2833 0.518541 9.95C0.518541 9.61667 0.643541 9.325 0.893541 9.075L8.56854 1.375C8.76854 1.175 8.99354 1.025 9.24354 0.925002C9.49354 0.825002 9.74354 0.775002 9.99354 0.775002C10.2435 0.775002 10.4935 0.825002 10.7435 0.925002C10.9935 1.025 11.2185 1.175 11.4185 1.375L19.1185 9.075C19.3685 9.325 19.4894 9.62084 19.481 9.9625C19.4727 10.3042 19.3435 10.6 19.0935 10.85C18.8435 11.1 18.5519 11.225 18.2185 11.225C17.8852 11.225 17.5935 11.1 17.3435 10.85L9.99354 3.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  chevron_left: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M3.49999 10.0065L10.85 17.3565C11.1 17.6065 11.2208 17.8981 11.2125 18.2315C11.2042 18.5648 11.075 18.8565 10.825 19.1065C10.575 19.3565 10.2833 19.4815 9.94999 19.4815C9.61666 19.4815 9.32499 19.3565 9.07499 19.1065L1.37499 11.4315C1.17499 11.2315 1.02499 11.0065 0.924994 10.7565C0.824994 10.5065 0.774994 10.2565 0.774994 10.0065C0.774994 9.75645 0.824994 9.50645 0.924994 9.25645C1.02499 9.00645 1.17499 8.78145 1.37499 8.58145L9.07499 0.88145C9.32499 0.63145 9.62083 0.510617 9.96249 0.51895C10.3042 0.527284 10.6 0.65645 10.85 0.90645C11.1 1.15645 11.225 1.44812 11.225 1.78145C11.225 2.11478 11.1 2.40645 10.85 2.65645L3.49999 10.0065Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  chevron_right: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M8.50001 9.99355L1.15001 2.64355C0.900008 2.39355 0.779174 2.10188 0.787508 1.76855C0.795841 1.43521 0.925008 1.14355 1.17501 0.893548C1.42501 0.643548 1.71667 0.518548 2.05001 0.518548C2.38334 0.518548 2.67501 0.643548 2.92501 0.893548L10.625 8.56855C10.825 8.76855 10.975 8.99355 11.075 9.24355C11.175 9.49355 11.225 9.74355 11.225 9.99355C11.225 10.2435 11.175 10.4935 11.075 10.7435C10.975 10.9935 10.825 11.2185 10.625 11.4185L2.92501 19.1185C2.67501 19.3685 2.37917 19.4894 2.03751 19.481C1.69584 19.4727 1.40001 19.3435 1.15001 19.0935C0.900006 18.8435 0.775006 18.5519 0.775006 18.2185C0.775006 17.8852 0.900006 17.5935 1.15001 17.3435L8.50001 9.99355Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Environmental *** //
  ac_unit: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 15.85L6.425 18.375C6.24167 18.5583 6.0125 18.65 5.7375 18.65C5.4625 18.65 5.23333 18.55 5.05 18.35C4.85 18.1667 4.75 17.9375 4.75 17.6625C4.75 17.3875 4.85 17.15 5.05 16.95L9 13V11H7L3.025 14.975C2.84167 15.1583 2.6125 15.25 2.3375 15.25C2.0625 15.25 1.825 15.15 1.625 14.95C1.44167 14.7667 1.35 14.5375 1.35 14.2625C1.35 13.9875 1.44167 13.7583 1.625 13.575L4.15 11H0.975C0.691667 11 0.458333 10.9042 0.275 10.7125C0.0916667 10.5208 0 10.2833 0 10C0 9.71667 0.0958333 9.47917 0.2875 9.2875C0.479167 9.09583 0.716667 9 1 9H4.15L1.625 6.45C1.44167 6.26667 1.35 6.0375 1.35 5.7625C1.35 5.4875 1.45 5.25 1.65 5.05C1.83333 4.86667 2.0625 4.775 2.3375 4.775C2.6125 4.775 2.85 4.86667 3.05 5.05L7 9H9V7L5.025 3.05C4.84167 2.86667 4.75 2.6375 4.75 2.3625C4.75 2.0875 4.85 1.85 5.05 1.65C5.23333 1.46667 5.4625 1.375 5.7375 1.375C6.0125 1.375 6.24167 1.46667 6.425 1.65L9 4.15V1C9 0.716667 9.09583 0.479167 9.2875 0.2875C9.47917 0.0958333 9.71667 0 10 0C10.2833 0 10.5208 0.0958333 10.7125 0.2875C10.9042 0.479167 11 0.716667 11 1V4.15L13.55 1.65C13.7333 1.46667 13.9625 1.375 14.2375 1.375C14.5125 1.375 14.75 1.46667 14.95 1.65C15.1333 1.85 15.225 2.0875 15.225 2.3625C15.225 2.6375 15.1333 2.86667 14.95 3.05L11 7V9H13L16.95 5.05C17.1333 4.86667 17.3625 4.775 17.6375 4.775C17.9125 4.775 18.15 4.875 18.35 5.075C18.5333 5.25833 18.625 5.4875 18.625 5.7625C18.625 6.0375 18.5333 6.26667 18.35 6.45L15.85 9H19C19.2833 9 19.5208 9.09583 19.7125 9.2875C19.9042 9.47917 20 9.71667 20 10C20 10.2833 19.9042 10.5208 19.7125 10.7125C19.5208 10.9042 19.2833 11 19 11H15.85L18.35 13.575C18.5333 13.7583 18.625 13.9875 18.625 14.2625C18.625 14.5375 18.5333 14.7667 18.35 14.95C18.15 15.15 17.9125 15.25 17.6375 15.25C17.3625 15.25 17.1333 15.15 16.95 14.95L13 11H11V13L14.95 16.975C15.1333 17.1583 15.225 17.3875 15.225 17.6625C15.225 17.9375 15.125 18.175 14.925 18.375C14.7417 18.5583 14.5125 18.65 14.2375 18.65C13.9625 18.65 13.7333 18.5583 13.55 18.375L11 15.85V19.025C11 19.3083 10.9042 19.5417 10.7125 19.725C10.5208 19.9083 10.2833 20 10 20C9.71667 20 9.47917 19.9042 9.2875 19.7125C9.09583 19.5208 9 19.2833 9 19V15.85Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  air: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
  <path d="M9.5 17C8.96667 17 8.47083 16.8667 8.0125 16.6C7.55417 16.3333 7.18333 15.9667 6.9 15.5C6.71667 15.1667 6.7125 14.8333 6.8875 14.5C7.0625 14.1667 7.33333 14 7.7 14C7.91667 14 8.10833 14.0667 8.275 14.2C8.44167 14.3333 8.59167 14.4833 8.725 14.65C8.80833 14.7667 8.92083 14.8542 9.0625 14.9125C9.20417 14.9708 9.35 15 9.5 15C9.78333 15 10.0208 14.9042 10.2125 14.7125C10.4042 14.5208 10.5 14.2833 10.5 14C10.5 13.7167 10.4042 13.4792 10.2125 13.2875C10.0208 13.0958 9.78333 13 9.5 13H1C0.716667 13 0.479167 12.9042 0.2875 12.7125C0.0958333 12.5208 0 12.2833 0 12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11H9.5C10.3333 11 11.0417 11.2917 11.625 11.875C12.2083 12.4583 12.5 13.1667 12.5 14C12.5 14.8333 12.2083 15.5417 11.625 16.125C11.0417 16.7083 10.3333 17 9.5 17ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H13.5C13.9167 5 14.2708 4.85417 14.5625 4.5625C14.8542 4.27083 15 3.91667 15 3.5C15 3.08333 14.8542 2.72917 14.5625 2.4375C14.2708 2.14583 13.9167 2 13.5 2C13.2333 2 12.9833 2.0625 12.75 2.1875C12.5167 2.3125 12.3333 2.49167 12.2 2.725C12.0833 2.925 11.9417 3.10417 11.775 3.2625C11.6083 3.42083 11.4083 3.5 11.175 3.5C10.8417 3.5 10.5708 3.375 10.3625 3.125C10.1542 2.875 10.1 2.60833 10.2 2.325C10.4333 1.625 10.8542 1.0625 11.4625 0.6375C12.0708 0.2125 12.75 0 13.5 0C14.4667 0 15.2917 0.341667 15.975 1.025C16.6583 1.70833 17 2.53333 17 3.5C17 4.46667 16.6583 5.29167 15.975 5.975C15.2917 6.65833 14.4667 7 13.5 7H1ZM17.95 14.7C17.6167 14.85 17.2917 14.8292 16.975 14.6375C16.6583 14.4458 16.5 14.1667 16.5 13.8C16.5 13.5667 16.5792 13.3708 16.7375 13.2125C16.8958 13.0542 17.075 12.9167 17.275 12.8C17.5083 12.6667 17.6875 12.4833 17.8125 12.25C17.9375 12.0167 18 11.7667 18 11.5C18 11.0833 17.8542 10.7292 17.5625 10.4375C17.2708 10.1458 16.9167 10 16.5 10H1C0.716667 10 0.479167 9.90417 0.2875 9.7125C0.0958333 9.52083 0 9.28333 0 9C0 8.71667 0.0958333 8.47917 0.2875 8.2875C0.479167 8.09583 0.716667 8 1 8H16.5C17.4667 8 18.2917 8.34167 18.975 9.025C19.6583 9.70833 20 10.5333 20 11.5C20 12.2 19.8167 12.8375 19.45 13.4125C19.0833 13.9875 18.5833 14.4167 17.95 14.7Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  clear_day: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 4C10.7167 4 10.4792 3.90417 10.2875 3.7125C10.0958 3.52083 10 3.28333 10 3V1C10 0.716667 10.0958 0.479167 10.2875 0.2875C10.4792 0.0958333 10.7167 0 11 0C11.2833 0 11.5208 0.0958333 11.7125 0.2875C11.9042 0.479167 12 0.716667 12 1V3C12 3.28333 11.9042 3.52083 11.7125 3.7125C11.5208 3.90417 11.2833 4 11 4ZM15.95 6.05C15.7667 5.86667 15.675 5.6375 15.675 5.3625C15.675 5.0875 15.7667 4.85 15.95 4.65L17.35 3.225C17.55 3.025 17.7875 2.925 18.0625 2.925C18.3375 2.925 18.575 3.025 18.775 3.225C18.9583 3.40833 19.05 3.64167 19.05 3.925C19.05 4.20833 18.9583 4.44167 18.775 4.625L17.35 6.05C17.1667 6.23333 16.9333 6.325 16.65 6.325C16.3667 6.325 16.1333 6.23333 15.95 6.05ZM19 12C18.7167 12 18.4792 11.9042 18.2875 11.7125C18.0958 11.5208 18 11.2833 18 11C18 10.7167 18.0958 10.4792 18.2875 10.2875C18.4792 10.0958 18.7167 10 19 10H21C21.2833 10 21.5208 10.0958 21.7125 10.2875C21.9042 10.4792 22 10.7167 22 11C22 11.2833 21.9042 11.5208 21.7125 11.7125C21.5208 11.9042 21.2833 12 21 12H19ZM11 22C10.7167 22 10.4792 21.9042 10.2875 21.7125C10.0958 21.5208 10 21.2833 10 21V19C10 18.7167 10.0958 18.4792 10.2875 18.2875C10.4792 18.0958 10.7167 18 11 18C11.2833 18 11.5208 18.0958 11.7125 18.2875C11.9042 18.4792 12 18.7167 12 19V21C12 21.2833 11.9042 21.5208 11.7125 21.7125C11.5208 21.9042 11.2833 22 11 22ZM4.65 6.05L3.225 4.65C3.025 4.45 2.925 4.20833 2.925 3.925C2.925 3.64167 3.025 3.40833 3.225 3.225C3.40833 3.04167 3.64167 2.95 3.925 2.95C4.20833 2.95 4.44167 3.04167 4.625 3.225L6.05 4.65C6.23333 4.83333 6.325 5.06667 6.325 5.35C6.325 5.63333 6.23333 5.86667 6.05 6.05C5.85 6.23333 5.61667 6.325 5.35 6.325C5.08333 6.325 4.85 6.23333 4.65 6.05ZM17.35 18.775L15.95 17.35C15.7667 17.15 15.675 16.9125 15.675 16.6375C15.675 16.3625 15.7667 16.1333 15.95 15.95C16.1333 15.7667 16.3625 15.675 16.6375 15.675C16.9125 15.675 17.15 15.7667 17.35 15.95L18.775 17.35C18.975 17.5333 19.0708 17.7667 19.0625 18.05C19.0542 18.3333 18.9583 18.575 18.775 18.775C18.575 18.975 18.3333 19.075 18.05 19.075C17.7667 19.075 17.5333 18.975 17.35 18.775ZM1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10H3C3.28333 10 3.52083 10.0958 3.7125 10.2875C3.90417 10.4792 4 10.7167 4 11C4 11.2833 3.90417 11.5208 3.7125 11.7125C3.52083 11.9042 3.28333 12 3 12H1ZM3.225 18.775C3.04167 18.5917 2.95 18.3583 2.95 18.075C2.95 17.7917 3.04167 17.5583 3.225 17.375L4.65 15.95C4.83333 15.7667 5.0625 15.675 5.3375 15.675C5.6125 15.675 5.85 15.7667 6.05 15.95C6.25 16.15 6.35 16.3875 6.35 16.6625C6.35 16.9375 6.25 17.175 6.05 17.375L4.65 18.775C4.45 18.975 4.20833 19.075 3.925 19.075C3.64167 19.075 3.40833 18.975 3.225 18.775ZM11 17C9.33333 17 7.91667 16.4167 6.75 15.25C5.58333 14.0833 5 12.6667 5 11C5 9.33333 5.58333 7.91667 6.75 6.75C7.91667 5.58333 9.33333 5 11 5C12.6667 5 14.0833 5.58333 15.25 6.75C16.4167 7.91667 17 9.33333 17 11C17 12.6667 16.4167 14.0833 15.25 15.25C14.0833 16.4167 12.6667 17 11 17ZM11 15C12.1 15 13.0417 14.6083 13.825 13.825C14.6083 13.0417 15 12.1 15 11C15 9.9 14.6083 8.95833 13.825 8.175C13.0417 7.39167 12.1 7 11 7C9.9 7 8.95833 7.39167 8.175 8.175C7.39167 8.95833 7 9.9 7 11C7 12.1 7.39167 13.0417 8.175 13.825C8.95833 14.6083 9.9 15 11 15Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  coronavirus: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.25 20C9.05 20 8.875 19.925 8.725 19.775C8.575 19.625 8.5 19.45 8.5 19.25C8.5 19.05 8.575 18.875 8.725 18.725C8.875 18.575 9.05 18.5 9.25 18.5V16.95C8.55 16.8667 7.89167 16.7 7.275 16.45C6.65833 16.2 6.1 15.8667 5.6 15.45L4.525 16.55C4.675 16.7 4.75 16.875 4.75 17.075C4.75 17.275 4.675 17.45 4.525 17.6C4.375 17.75 4.2 17.825 4 17.825C3.8 17.825 3.625 17.75 3.475 17.6L2.4 16.55C2.25 16.4 2.175 16.2208 2.175 16.0125C2.175 15.8042 2.25 15.625 2.4 15.475C2.55 15.325 2.725 15.2542 2.925 15.2625C3.125 15.2708 3.3 15.3417 3.45 15.475L4.55 14.375C4.13333 13.8583 3.8 13.3 3.55 12.7C3.3 12.1 3.13333 11.45 3.05 10.75H1.5C1.5 10.95 1.425 11.125 1.275 11.275C1.125 11.425 0.95 11.5 0.75 11.5C0.55 11.5 0.375 11.425 0.225 11.275C0.075 11.125 0 10.95 0 10.75V9.25C0 9.05 0.075 8.875 0.225 8.725C0.375 8.575 0.55 8.5 0.75 8.5C0.95 8.5 1.125 8.575 1.275 8.725C1.425 8.875 1.5 9.05 1.5 9.25H3.05C3.13333 8.55 3.30417 7.9 3.5625 7.3C3.82083 6.7 4.15 6.14167 4.55 5.625L3.45 4.525C3.3 4.65833 3.125 4.72917 2.925 4.7375C2.725 4.74583 2.55 4.675 2.4 4.525C2.25 4.375 2.175 4.19583 2.175 3.9875C2.175 3.77917 2.25 3.6 2.4 3.45L3.45 2.4C3.6 2.25 3.77917 2.175 3.9875 2.175C4.19583 2.175 4.375 2.25 4.525 2.4C4.675 2.55 4.75 2.72917 4.75 2.9375C4.75 3.14583 4.675 3.325 4.525 3.475L5.6 4.55C6.11667 4.13333 6.675 3.8 7.275 3.55C7.875 3.3 8.525 3.13333 9.225 3.05V1.5C9.025 1.5 8.85417 1.425 8.7125 1.275C8.57083 1.125 8.5 0.95 8.5 0.75C8.5 0.55 8.575 0.375 8.725 0.225C8.875 0.075 9.05 0 9.25 0H10.75C10.95 0 11.125 0.075 11.275 0.225C11.425 0.375 11.5 0.55 11.5 0.75C11.5 0.95 11.425 1.125 11.275 1.275C11.125 1.425 10.95 1.5 10.75 1.5V3.05C11.45 3.13333 12.1 3.3 12.7 3.55C13.3 3.8 13.8583 4.13333 14.375 4.55L15.475 3.45C15.325 3.3 15.25 3.125 15.25 2.925C15.25 2.725 15.325 2.55 15.475 2.4C15.625 2.25 15.8042 2.175 16.0125 2.175C16.2208 2.175 16.4 2.25 16.55 2.4L17.6 3.475C17.75 3.625 17.825 3.8 17.825 4C17.825 4.2 17.75 4.375 17.6 4.525C17.45 4.675 17.2708 4.75 17.0625 4.75C16.8542 4.75 16.675 4.675 16.525 4.525L15.45 5.6C15.8667 6.11667 16.2 6.67917 16.45 7.2875C16.7 7.89583 16.8667 8.55 16.95 9.25H18.5C18.5 9.05 18.575 8.875 18.725 8.725C18.875 8.575 19.05 8.5 19.25 8.5C19.45 8.5 19.625 8.575 19.775 8.725C19.925 8.875 20 9.05 20 9.25V10.75C20 10.95 19.925 11.125 19.775 11.275C19.625 11.425 19.45 11.5 19.25 11.5C19.05 11.5 18.875 11.425 18.725 11.275C18.575 11.125 18.5 10.95 18.5 10.75H16.95C16.8667 11.45 16.7 12.1042 16.45 12.7125C16.2 13.3208 15.8667 13.8833 15.45 14.4L16.525 15.475C16.675 15.325 16.8542 15.25 17.0625 15.25C17.2708 15.25 17.45 15.325 17.6 15.475C17.75 15.625 17.825 15.8042 17.825 16.0125C17.825 16.2208 17.75 16.4 17.6 16.55L16.55 17.6C16.4 17.75 16.2208 17.825 16.0125 17.825C15.8042 17.825 15.625 17.75 15.475 17.6C15.325 17.45 15.2542 17.275 15.2625 17.075C15.2708 16.875 15.3417 16.7 15.475 16.55L14.375 15.45C13.8583 15.8667 13.3 16.2042 12.7 16.4625C12.1 16.7208 11.45 16.8917 10.75 16.975V18.5C10.95 18.5 11.125 18.575 11.275 18.725C11.425 18.875 11.5 19.05 11.5 19.25C11.5 19.45 11.425 19.625 11.275 19.775C11.125 19.925 10.95 20 10.75 20H9.25ZM10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM8.25 14C8.53333 14 8.77083 13.9042 8.9625 13.7125C9.15417 13.5208 9.25 13.2833 9.25 13C9.25 12.7167 9.15417 12.4792 8.9625 12.2875C8.77083 12.0958 8.53333 12 8.25 12C7.96667 12 7.72917 12.0958 7.5375 12.2875C7.34583 12.4792 7.25 12.7167 7.25 13C7.25 13.2833 7.34583 13.5208 7.5375 13.7125C7.72917 13.9042 7.96667 14 8.25 14ZM11.75 14C12.0333 14 12.2708 13.9042 12.4625 13.7125C12.6542 13.5208 12.75 13.2833 12.75 13C12.75 12.7167 12.6542 12.4792 12.4625 12.2875C12.2708 12.0958 12.0333 12 11.75 12C11.4667 12 11.2292 12.0958 11.0375 12.2875C10.8458 12.4792 10.75 12.7167 10.75 13C10.75 13.2833 10.8458 13.5208 11.0375 13.7125C11.2292 13.9042 11.4667 14 11.75 14ZM6.5 11C6.78333 11 7.02083 10.9042 7.2125 10.7125C7.40417 10.5208 7.5 10.2833 7.5 10C7.5 9.71667 7.40417 9.47917 7.2125 9.2875C7.02083 9.09583 6.78333 9 6.5 9C6.21667 9 5.97917 9.09583 5.7875 9.2875C5.59583 9.47917 5.5 9.71667 5.5 10C5.5 10.2833 5.59583 10.5208 5.7875 10.7125C5.97917 10.9042 6.21667 11 6.5 11ZM10 11C10.2833 11 10.5208 10.9042 10.7125 10.7125C10.9042 10.5208 11 10.2833 11 10C11 9.71667 10.9042 9.47917 10.7125 9.2875C10.5208 9.09583 10.2833 9 10 9C9.71667 9 9.47917 9.09583 9.2875 9.2875C9.09583 9.47917 9 9.71667 9 10C9 10.2833 9.09583 10.5208 9.2875 10.7125C9.47917 10.9042 9.71667 11 10 11ZM13.5 11C13.7833 11 14.0208 10.9042 14.2125 10.7125C14.4042 10.5208 14.5 10.2833 14.5 10C14.5 9.71667 14.4042 9.47917 14.2125 9.2875C14.0208 9.09583 13.7833 9 13.5 9C13.2167 9 12.9792 9.09583 12.7875 9.2875C12.5958 9.47917 12.5 9.71667 12.5 10C12.5 10.2833 12.5958 10.5208 12.7875 10.7125C12.9792 10.9042 13.2167 11 13.5 11ZM8.25 8C8.53333 8 8.77083 7.90417 8.9625 7.7125C9.15417 7.52083 9.25 7.28333 9.25 7C9.25 6.71667 9.15417 6.47917 8.9625 6.2875C8.77083 6.09583 8.53333 6 8.25 6C7.96667 6 7.72917 6.09583 7.5375 6.2875C7.34583 6.47917 7.25 6.71667 7.25 7C7.25 7.28333 7.34583 7.52083 7.5375 7.7125C7.72917 7.90417 7.96667 8 8.25 8ZM11.75 8C12.0333 8 12.2708 7.90417 12.4625 7.7125C12.6542 7.52083 12.75 7.28333 12.75 7C12.75 6.71667 12.6542 6.47917 12.4625 6.2875C12.2708 6.09583 12.0333 6 11.75 6C11.4667 6 11.2292 6.09583 11.0375 6.2875C10.8458 6.47917 10.75 6.71667 10.75 7C10.75 7.28333 10.8458 7.52083 11.0375 7.7125C11.2292 7.90417 11.4667 8 11.75 8Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  rainy: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M11.95 19.9C11.7 20.0333 11.4458 20.0542 11.1875 19.9625C10.9292 19.8708 10.7333 19.7 10.6 19.45L9.1 16.45C8.96667 16.2 8.94583 15.9458 9.0375 15.6875C9.12917 15.4292 9.3 15.2333 9.55 15.1C9.8 14.9667 10.0542 14.9458 10.3125 15.0375C10.5708 15.1292 10.7667 15.3 10.9 15.55L12.4 18.55C12.5333 18.8 12.5542 19.0542 12.4625 19.3125C12.3708 19.5708 12.2 19.7667 11.95 19.9ZM17.95 19.9C17.7 20.0333 17.4458 20.0542 17.1875 19.9625C16.9292 19.8708 16.7333 19.7 16.6 19.45L15.1 16.45C14.9667 16.2 14.9458 15.9458 15.0375 15.6875C15.1292 15.4292 15.3 15.2333 15.55 15.1C15.8 14.9667 16.0542 14.9458 16.3125 15.0375C16.5708 15.1292 16.7667 15.3 16.9 15.55L18.4 18.55C18.5333 18.8 18.5542 19.0542 18.4625 19.3125C18.3708 19.5708 18.2 19.7667 17.95 19.9ZM5.95 19.9C5.7 20.0333 5.44583 20.0542 5.1875 19.9625C4.92917 19.8708 4.73333 19.7 4.6 19.45L3.1 16.45C2.96667 16.2 2.94583 15.9458 3.0375 15.6875C3.12917 15.4292 3.3 15.2333 3.55 15.1C3.8 14.9667 4.05417 14.9458 4.3125 15.0375C4.57083 15.1292 4.76667 15.3 4.9 15.55L6.4 18.55C6.53333 18.8 6.55417 19.0542 6.4625 19.3125C6.37083 19.5708 6.2 19.7667 5.95 19.9ZM5.5 14C3.98333 14 2.6875 13.4625 1.6125 12.3875C0.5375 11.3125 0 10.0167 0 8.5C0 7.11667 0.458333 5.90833 1.375 4.875C2.29167 3.84167 3.425 3.23333 4.775 3.05C5.30833 2.1 6.0375 1.35417 6.9625 0.8125C7.8875 0.270833 8.9 0 10 0C11.5 0 12.8042 0.479167 13.9125 1.4375C15.0208 2.39583 15.6917 3.59167 15.925 5.025C17.075 5.125 18.0417 5.6 18.825 6.45C19.6083 7.3 20 8.31667 20 9.5C20 10.75 19.5625 11.8125 18.6875 12.6875C17.8125 13.5625 16.75 14 15.5 14H5.5ZM5.5 12H15.5C16.2 12 16.7917 11.7583 17.275 11.275C17.7583 10.7917 18 10.2 18 9.5C18 8.8 17.7583 8.20833 17.275 7.725C16.7917 7.24167 16.2 7 15.5 7H14V6C14 4.9 13.6083 3.95833 12.825 3.175C12.0417 2.39167 11.1 2 10 2C9.2 2 8.47083 2.21667 7.8125 2.65C7.15417 3.08333 6.65833 3.66667 6.325 4.4L6.075 5H5.45C4.5 5.03333 3.6875 5.3875 3.0125 6.0625C2.3375 6.7375 2 7.55 2 8.5C2 9.46667 2.34167 10.2917 3.025 10.975C3.70833 11.6583 4.53333 12 5.5 12Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Intent *** //
  check_circle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M8.6 11.8L6.45 9.65C6.26667 9.46667 6.03333 9.375 5.75 9.375C5.46667 9.375 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.1 14.1 8.33333 14.2 8.6 14.2C8.86667 14.2 9.1 14.1 9.3 13.9L14.95 8.25C15.1333 8.06667 15.225 7.83333 15.225 7.55C15.225 7.26667 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  emergency_home: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 21.025C10.7333 21.025 10.4791 20.975 10.2375 20.875C9.99581 20.775 9.77498 20.6333 9.57498 20.45L1.54998 12.425C1.36664 12.225 1.22498 12.0041 1.12498 11.7625C1.02498 11.5208 0.974976 11.2666 0.974976 11C0.974976 10.7333 1.02498 10.475 1.12498 10.225C1.22498 9.97498 1.36664 9.75831 1.54998 9.57498L9.57498 1.54998C9.77498 1.34998 9.99581 1.20414 10.2375 1.11248C10.4791 1.02081 10.7333 0.974976 11 0.974976C11.2666 0.974976 11.525 1.02081 11.775 1.11248C12.025 1.20414 12.2416 1.34998 12.425 1.54998L20.45 9.57498C20.65 9.75831 20.7958 9.97498 20.8875 10.225C20.9791 10.475 21.025 10.7333 21.025 11C21.025 11.2666 20.9791 11.5208 20.8875 11.7625C20.7958 12.0041 20.65 12.225 20.45 12.425L12.425 20.45C12.2416 20.6333 12.025 20.775 11.775 20.875C11.525 20.975 11.2666 21.025 11 21.025ZM11 19.025L19.025 11L11 2.97498L2.97498 11L11 19.025ZM9.99998 12H12V5.99998H9.99998V12ZM11 15C11.2833 15 11.5208 14.9041 11.7125 14.7125C11.9041 14.5208 12 14.2833 12 14C12 13.7166 11.9041 13.4791 11.7125 13.2875C11.5208 13.0958 11.2833 13 11 13C10.7166 13 10.4791 13.0958 10.2875 13.2875C10.0958 13.4791 9.99998 13.7166 9.99998 14C9.99998 14.2833 10.0958 14.5208 10.2875 14.7125C10.4791 14.9041 10.7166 15 11 15Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  error: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14C11 13.7167 10.9042 13.4792 10.7125 13.2875C10.5208 13.0958 10.2833 13 10 13C9.71667 13 9.47917 13.0958 9.2875 13.2875C9.09583 13.4792 9 13.7167 9 14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM9 11H11V5H9V11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.5208 6.90417 10.7125 6.7125C10.9042 6.52083 11 6.28333 11 6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6C9 6.28333 9.09583 6.52083 9.2875 6.7125C9.47917 6.90417 9.71667 7 10 7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
  <path d="M1.725 18C1.54167 18 1.375 17.9542 1.225 17.8625C1.075 17.7708 0.958337 17.65 0.875003 17.5C0.79167 17.35 0.745837 17.1875 0.737503 17.0125C0.72917 16.8375 0.775003 16.6667 0.875003 16.5L10.125 0.5C10.225 0.333333 10.3542 0.208333 10.5125 0.125C10.6708 0.0416667 10.8333 0 11 0C11.1667 0 11.3292 0.0416667 11.4875 0.125C11.6458 0.208333 11.775 0.333333 11.875 0.5L21.125 16.5C21.225 16.6667 21.2708 16.8375 21.2625 17.0125C21.2542 17.1875 21.2083 17.35 21.125 17.5C21.0417 17.65 20.925 17.7708 20.775 17.8625C20.625 17.9542 20.4583 18 20.275 18H1.725ZM3.45 16H18.55L11 3L3.45 16ZM11 15C11.2833 15 11.5208 14.9042 11.7125 14.7125C11.9042 14.5208 12 14.2833 12 14C12 13.7167 11.9042 13.4792 11.7125 13.2875C11.5208 13.0958 11.2833 13 11 13C10.7167 13 10.4792 13.0958 10.2875 13.2875C10.0958 13.4792 10 13.7167 10 14C10 14.2833 10.0958 14.5208 10.2875 14.7125C10.4792 14.9042 10.7167 15 11 15ZM11 12C11.2833 12 11.5208 11.9042 11.7125 11.7125C11.9042 11.5208 12 11.2833 12 11V8C12 7.71667 11.9042 7.47917 11.7125 7.2875C11.5208 7.09583 11.2833 7 11 7C10.7167 7 10.4792 7.09583 10.2875 7.2875C10.0958 7.47917 10 7.71667 10 8V11C10 11.2833 10.0958 11.5208 10.2875 11.7125C10.4792 11.9042 10.7167 12 11 12Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  // *** Social *** //
  social_facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M10.0367 0C4.49365 0 0 4.49365 0 10.0367C0 14.7436 3.24066 18.6932 7.61226 19.778V13.104H5.54269V10.0367H7.61226V8.7151C7.61226 5.29899 9.15832 3.7156 12.5122 3.7156C13.1481 3.7156 14.2453 3.84046 14.6942 3.96491V6.74509C14.4573 6.7202 14.0458 6.70775 13.5347 6.70775C11.8891 6.70775 11.2532 7.33123 11.2532 8.95196V10.0367H14.5316L13.9683 13.104H11.2532V20C16.223 19.3998 20.0739 15.1683 20.0739 10.0367C20.0735 4.49365 15.5798 0 10.0367 0Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_flickr: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M19.0909 0H0.909091C0.407014 0 0 0.407014 0 0.909091V19.0909C0 19.593 0.407014 20 0.909091 20H19.0909C19.593 20 20 19.593 20 19.0909V0.909091C20 0.407014 19.593 0 19.0909 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M6.36364 12.7273C7.86987 12.7273 9.09091 11.5062 9.09091 10C9.09091 8.49377 7.86987 7.27273 6.36364 7.27273C4.85741 7.27273 3.63636 8.49377 3.63636 10C3.63636 11.5062 4.85741 12.7273 6.36364 12.7273Z" fill="white"/>
  <path d="M13.6364 12.7273C15.1426 12.7273 16.3636 11.5062 16.3636 10C16.3636 8.49377 15.1426 7.27273 13.6364 7.27273C12.1301 7.27273 10.9091 8.49377 10.9091 10C10.9091 11.5062 12.1301 12.7273 13.6364 12.7273Z" fill="white"/>
  </svg>`,
  social_google_play: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M3.1202 0.508333L14.0372 6.79667L11.6972 9.14083L3.1202 0.508333ZM0.85845 0L10.8795 10L0.859282 20C0.349369 19.7742 0 19.2717 0 18.6875C0 18.6683 0 18.6492 0.000831831 18.6308V18.6333V1.3675C0 1.35167 0 1.3325 0 1.31333C0 0.729167 0.349369 0.226667 0.850132 0.00416667L0.859282 0.000833333L0.85845 0ZM17.4302 8.82833C17.7746 9.08417 17.995 9.49083 17.995 9.94833C17.995 9.96667 17.995 9.98417 17.9942 10.0025V10C17.9975 10.0358 18 10.0783 18 10.1208C18 10.5508 17.792 10.9325 17.471 11.1692L17.4676 11.1717L15.1277 12.4992L12.5939 10L15.1285 7.46083L17.4302 8.82833ZM3.1202 19.4917L11.698 10.8592L14.038 13.2033L3.1202 19.4917Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.002 1.80113C12.6744 1.80113 12.9908 1.81285 14.0418 1.85974C15.0186 1.90272 15.546 2.06681 15.8976 2.20356C16.3626 2.38328 16.6986 2.60207 17.0463 2.9498C17.3979 3.30143 17.6128 3.63352 17.7925 4.09846C17.9293 4.45009 18.0934 4.98144 18.1364 5.95429C18.1832 7.00918 18.195 7.32565 18.195 9.99414C18.195 12.6665 18.1832 12.983 18.1364 14.034C18.0934 15.0107 17.9293 15.5382 17.7925 15.8898C17.6128 16.3548 17.394 16.6908 17.0463 17.0385C16.6947 17.3901 16.3626 17.605 15.8976 17.7847C15.546 17.9215 15.0147 18.0856 14.0418 18.1285C12.9869 18.1754 12.6704 18.1871 10.002 18.1871C7.32956 18.1871 7.01309 18.1754 5.9621 18.1285C4.98535 18.0856 4.4579 17.9215 4.10627 17.7847C3.64134 17.605 3.30533 17.3862 2.95761 17.0385C2.60598 16.6869 2.39109 16.3548 2.21137 15.8898C2.07462 15.5382 1.91053 15.0068 1.86755 14.034C1.82067 12.9791 1.80895 12.6626 1.80895 9.99414C1.80895 7.32174 1.82067 7.00527 1.86755 5.95429C1.91053 4.97753 2.07462 4.45009 2.21137 4.09846C2.39109 3.63352 2.60988 3.29752 2.95761 2.9498C3.30924 2.59816 3.64134 2.38328 4.10627 2.20356C4.4579 2.06681 4.98926 1.90272 5.9621 1.85974C7.01309 1.81285 7.32956 1.80113 10.002 1.80113ZM10.002 0C7.28658 0 6.94667 0.011721 5.88006 0.0586052C4.81735 0.105489 4.08674 0.277398 3.4538 0.52354C2.79351 0.781403 2.23481 1.12131 1.68002 1.68002C1.12131 2.23481 0.781403 2.79351 0.52354 3.44989C0.277398 4.08674 0.105489 4.81344 0.0586052 5.87615C0.011721 6.94667 0 7.28658 0 10.002C0 12.7173 0.011721 13.0572 0.0586052 14.1239C0.105489 15.1866 0.277398 15.9172 0.52354 16.5501C0.781403 17.2104 1.12131 17.7691 1.68002 18.3239C2.23481 18.8787 2.79351 19.2225 3.44989 19.4765C4.08674 19.7226 4.81344 19.8945 5.87615 19.9414C6.94276 19.9883 7.28267 20 9.99805 20C12.7134 20 13.0533 19.9883 14.1199 19.9414C15.1827 19.8945 15.9133 19.7226 16.5462 19.4765C17.2026 19.2225 17.7613 18.8787 18.3161 18.3239C18.8709 17.7691 19.2147 17.2104 19.4686 16.554C19.7148 15.9172 19.8867 15.1905 19.9336 14.1278C19.9805 13.0611 19.9922 12.7212 19.9922 10.0059C19.9922 7.29049 19.9805 6.95058 19.9336 5.88396C19.8867 4.82125 19.7148 4.09064 19.4686 3.45771C19.2225 2.79351 18.8826 2.23481 18.3239 1.68002C17.7691 1.12522 17.2104 0.781403 16.554 0.527447C15.9172 0.281305 15.1905 0.109396 14.1278 0.0625122C13.0572 0.011721 12.7173 0 10.002 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M10.002 4.86423C7.16546 4.86423 4.86423 7.16546 4.86423 10.002C4.86423 12.8384 7.16546 15.1397 10.002 15.1397C12.8384 15.1397 15.1397 12.8384 15.1397 10.002C15.1397 7.16546 12.8384 4.86423 10.002 4.86423ZM10.002 13.3346C8.16175 13.3346 6.66927 11.8422 6.66927 10.002C6.66927 8.16175 8.16175 6.66927 10.002 6.66927C11.8422 6.66927 13.3346 8.16175 13.3346 10.002C13.3346 11.8422 11.8422 13.3346 10.002 13.3346Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M16.5423 4.66103C16.5423 5.32522 16.0031 5.86048 15.3428 5.86048C14.6786 5.86048 14.1434 5.32131 14.1434 4.66103C14.1434 3.99683 14.6826 3.46157 15.3428 3.46157C16.0031 3.46157 16.5423 4.00074 16.5423 4.66103Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_pinterest: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0C4.47656 0 0 4.47656 0 10C0 14.2383 2.63672 17.8555 6.35547 19.3125C6.26953 18.5195 6.1875 17.3086 6.39062 16.4453C6.57422 15.6641 7.5625 11.4766 7.5625 11.4766C7.5625 11.4766 7.26172 10.8789 7.26172 9.99219C7.26172 8.60156 8.06641 7.5625 9.07031 7.5625C9.92187 7.5625 10.3359 8.20312 10.3359 8.97266C10.3359 9.83203 9.78906 11.1133 9.50781 12.3008C9.27344 13.2969 10.0078 14.1094 10.9883 14.1094C12.7656 14.1094 14.1328 12.2344 14.1328 9.53125C14.1328 7.13672 12.4141 5.46094 9.95703 5.46094C7.11328 5.46094 5.44141 7.59375 5.44141 9.80078C5.44141 10.6602 5.77344 11.582 6.1875 12.082C6.26953 12.1797 6.28125 12.2695 6.25781 12.3672C6.18359 12.6836 6.01172 13.3633 5.98047 13.5C5.9375 13.6836 5.83594 13.7227 5.64453 13.6328C4.39453 13.0508 3.61328 11.2266 3.61328 9.75781C3.61328 6.60156 5.90625 3.70703 10.2188 3.70703C13.6875 3.70703 16.3828 6.17969 16.3828 9.48438C16.3828 12.9297 14.2109 15.7031 11.1953 15.7031C10.1836 15.7031 9.23047 15.1758 8.90234 14.5547C8.90234 14.5547 8.40234 16.4648 8.28125 16.9336C8.05469 17.8008 7.44531 18.8906 7.03906 19.5547C7.97656 19.8438 8.96875 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_rss: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M0 6.79688V10.6172C2.49219 10.6172 4.85156 11.6016 6.61719 13.3672C8.38281 15.1328 9.35938 17.4922 9.35938 19.9922V20H13.1953C13.1953 16.3594 11.7109 13.0703 9.32031 10.6719C6.9375 8.28125 3.64062 6.80469 0 6.79688Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M2.65625 14.6797C1.92188 14.6797 1.26562 14.9766 0.78125 15.4609C0.296875 15.9453 0 16.6016 0 17.3359C0 18.0625 0.296875 18.7188 0.78125 19.2031C1.26562 19.6797 1.92188 19.9766 2.65625 19.9766C3.39062 19.9766 4.04688 19.6875 4.53125 19.2031C5.01562 18.7188 5.3125 18.0625 5.3125 17.3359C5.3125 16.6016 5.01562 15.9453 4.53125 15.4609C4.04688 14.9766 3.39062 14.6797 2.65625 14.6797Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M14.1328 5.86719C10.5156 2.24219 5.52344 0 0.0078125 0V3.82031C8.92188 3.82812 16.1641 11.0859 16.1719 20H20C20 14.4844 17.7578 9.49219 14.1328 5.86719Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_snapchat: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M17.581 13.7331C14.4839 12.2334 13.9903 9.91793 13.9683 9.74618C13.9417 9.53815 13.9116 9.37458 14.141 9.16297C14.3623 8.95851 15.3439 8.35076 15.6162 8.16061C16.0664 7.84574 16.2647 7.53139 16.1185 7.14496C16.0163 6.87763 15.7675 6.77694 15.5053 6.77694C15.4227 6.77719 15.3402 6.78645 15.2596 6.80454C14.7649 6.91188 14.2846 7.15979 14.0066 7.22675C13.9732 7.23536 13.9389 7.23999 13.9044 7.24055C13.7562 7.24055 13.7 7.17461 13.7143 6.99622C13.7491 6.45543 13.8226 5.39991 13.7373 4.41391C13.6203 3.05733 13.1829 2.38517 12.6642 1.79071C12.4133 1.50242 11.2483 0.263916 8.99989 0.263916C6.75152 0.263916 5.58799 1.50242 5.33862 1.78713C4.81843 2.38159 4.38153 3.05375 4.26554 4.41033C4.1802 5.39633 4.25685 6.45134 4.28853 6.99264C4.29875 7.16234 4.24663 7.23697 4.09844 7.23697C4.06395 7.23638 4.02965 7.23175 3.99624 7.22317C3.71877 7.15621 3.23844 6.9083 2.7438 6.80096C2.66311 6.78287 2.5807 6.77361 2.49801 6.77336C2.23485 6.77336 1.98702 6.87559 1.88482 7.14139C1.73867 7.52781 1.93592 7.84217 2.38764 8.15703C2.66 8.34718 3.64161 8.95442 3.86287 9.15939C4.0918 9.371 4.06216 9.53457 4.03559 9.74261C4.01362 9.91691 3.51949 12.2324 0.422867 13.7295C0.241464 13.8175 -0.0671757 14.0035 0.477032 14.3041C1.33141 14.7764 1.90015 14.7258 2.34216 15.0105C2.71723 15.2522 2.49546 15.7736 2.76833 15.9617C3.10354 16.1933 4.09435 15.9454 5.37439 16.3681C6.44748 16.7218 7.0995 17.7211 9.00244 17.7211C10.9054 17.7211 11.5763 16.7172 12.6305 16.3681C13.908 15.9454 14.9008 16.1933 15.2366 15.9617C15.5089 15.7736 15.2877 15.2522 15.6627 15.0105C16.1047 14.7258 16.673 14.7764 17.5279 14.3041C18.071 14.0071 17.7624 13.821 17.581 13.7331Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_soundcloud: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="9" viewBox="0 0 20 9" fill="none">
  <path d="M0.966096 4.67021C0.923344 4.67021 0.888366 4.70539 0.882843 4.75393L0.68627 6.61519L0.882843 8.43512C0.888366 8.48366 0.923344 8.51905 0.966096 8.51905C1.00823 8.51905 1.04239 8.48429 1.04914 8.43533L1.27292 6.61498L1.04914 4.75372C1.04239 4.70433 1.00823 4.67021 0.966096 4.67021Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M0.226643 5.38326C0.185119 5.38326 0.151982 5.41632 0.146459 5.46444L0 6.61519L0.146459 7.74645C0.151777 7.79435 0.184914 7.82741 0.226643 7.82741C0.267144 7.82741 0.300077 7.79435 0.306622 7.74687L0.479877 6.61519L0.306622 5.46338C0.300077 5.41632 0.267144 5.38326 0.226643 5.38326Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M1.75178 4.3052C1.699 4.3052 1.65687 4.34802 1.65155 4.40695L1.46479 6.61519L1.65155 8.74268C1.65687 8.80181 1.699 8.84442 1.75178 8.84442C1.80353 8.84442 1.84567 8.80181 1.8518 8.74289L2.06372 6.61498L1.8518 4.40674C1.84567 4.34802 1.80353 4.3052 1.75178 4.3052Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M2.544 4.2272C2.48182 4.2272 2.4313 4.2785 2.42639 4.34675L2.25006 6.61583L2.42639 8.8105C2.4313 8.87833 2.48182 8.92984 2.544 8.92984C2.60516 8.92984 2.65548 8.87833 2.66121 8.8105L2.86147 6.61583L2.66121 4.34633C2.65548 4.2785 2.60516 4.2272 2.544 4.2272Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M3.47655 4.51017C3.47164 4.43281 3.41355 4.37367 3.34237 4.37367C3.27016 4.37367 3.21248 4.4326 3.20798 4.51081L3.04147 6.61561L3.20798 8.82873C3.21248 8.90652 3.27037 8.96566 3.34237 8.96566C3.41376 8.96566 3.47164 8.90674 3.47655 8.82895L3.66535 6.61561L3.47655 4.51017Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M4.14748 3.03702C4.06648 3.03702 4.0002 3.10528 3.99611 3.19239L3.83984 6.61668L3.99611 8.82958C4.00041 8.91564 4.06668 8.9841 4.14748 8.9841C4.22767 8.9841 4.29394 8.91585 4.29885 8.82895V8.82979L4.47558 6.61689L4.29885 3.19239C4.29374 3.10528 4.22746 3.03702 4.14748 3.03702Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M4.94625 2.2483C4.85564 2.2483 4.78179 2.32419 4.7777 2.42106C4.7777 2.42148 4.63145 6.62855 4.63145 6.62855L4.77791 8.82767C4.782 8.92412 4.85564 9 4.94625 9C5.03626 9 5.11071 8.92412 5.1146 8.82725V8.82852L5.28008 6.62855L5.1146 2.42106C5.11071 2.32419 5.03626 2.2483 4.94625 2.2483Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M5.77673 1.86804C5.6763 1.86804 5.59468 1.95198 5.5912 2.05881L5.45518 6.61773L5.5912 8.79418C5.59489 8.90017 5.6763 8.98389 5.77673 8.98389C5.87655 8.98389 5.95817 8.90017 5.96226 8.79355V8.79482L6.11588 6.61795L5.96226 2.05881C5.95796 1.95198 5.87655 1.86804 5.77673 1.86804Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M6.80337 1.90556C6.7999 1.78855 6.71092 1.69677 6.60107 1.69677C6.49041 1.69677 6.40143 1.78877 6.39836 1.90556L6.27236 6.61773L6.39857 8.78062C6.40164 8.89635 6.49041 8.98792 6.60107 8.98792C6.71092 8.98792 6.8001 8.89635 6.80337 8.77998L6.94533 6.61837L6.80337 1.90556Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M7.43176 1.8C7.31107 1.8 7.21473 1.89941 7.21186 2.02638L7.09609 6.61858L7.21227 8.76048C7.21493 8.88618 7.31107 8.98601 7.43176 8.98601C7.55162 8.98601 7.64797 8.88596 7.65124 8.75921V8.7609L7.78174 6.61816L7.65124 2.02574C7.64797 1.89899 7.55162 1.8 7.43176 1.8Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M8.26898 1.94986C8.13889 1.94986 8.03457 2.05732 8.03211 2.19425L7.92636 6.61858L8.03211 8.74776C8.03457 8.88342 8.13889 8.99046 8.26898 8.99046C8.39888 8.99046 8.50299 8.88342 8.50545 8.74628V8.74797L8.62409 6.61922L8.50545 2.19447C8.50299 2.05732 8.39888 1.94986 8.26898 1.94986Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M9.25288 1.13676C9.21278 1.10857 9.16431 1.09204 9.11255 1.09204C9.06223 1.09204 9.01539 1.10794 8.97591 1.13464C8.90657 1.18149 8.86014 1.26225 8.85891 1.35424L8.85809 1.40384L8.76277 6.61773C8.76277 6.6207 8.85891 8.73399 8.85891 8.73399C8.85891 8.73738 8.85932 8.73971 8.85952 8.74289C8.86239 8.80181 8.88387 8.85608 8.91844 8.89911C8.96528 8.95697 9.03503 8.99428 9.11255 8.99428C9.18149 8.99428 9.24429 8.96481 9.2901 8.91733C9.33613 8.87007 9.36518 8.80478 9.3664 8.73229L9.47338 6.61901L9.36661 1.35403C9.36497 1.26352 9.31997 1.18382 9.25288 1.13676Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M10.0903 0.637589C10.0502 0.612153 10.0028 0.597315 9.95265 0.597315C9.88801 0.597315 9.82848 0.621479 9.78164 0.661329C9.7215 0.712836 9.68264 0.790415 9.68141 0.87732L9.6808 0.906147L9.57034 6.61986L9.68141 8.70389C9.68366 8.85587 9.80496 8.98177 9.95265 8.98177C10.0997 8.98177 10.221 8.85587 10.2231 8.70198V8.70452L10.3437 6.62007L10.2235 0.876896C10.222 0.775365 10.1684 0.686552 10.0903 0.637589Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M17.5399 3.90141C17.2032 3.90141 16.8812 3.97221 16.5887 4.09918C16.3925 1.80212 14.5336 0 12.2659 0C11.7108 0 11.1701 0.113189 10.6923 0.304593C10.5068 0.379204 10.4577 0.455511 10.4558 0.60431V8.69456C10.4577 8.85036 10.5743 8.97181 10.7213 8.98686C10.7277 8.98771 17.5403 8.98686 17.5403 8.98686C18.8989 8.98686 20 7.85836 20 6.45028C19.9998 5.04263 18.8987 3.90141 17.5399 3.90141Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_tiktok: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
  <path d="M14.883 4.27729C14.7506 4.20752 14.6217 4.13104 14.4968 4.04813C14.1337 3.80333 13.8007 3.51489 13.5051 3.18901C12.7655 2.32613 12.4893 1.45076 12.3876 0.837875H12.3917C12.3067 0.32915 12.3418 0 12.3471 0H8.97851V13.2818C8.97851 13.4602 8.97851 13.6364 8.97116 13.8106C8.97116 13.8322 8.96911 13.8522 8.96789 13.8756C8.96789 13.8851 8.96789 13.8951 8.96584 13.9051C8.96584 13.9076 8.96584 13.9101 8.96584 13.9126C8.93034 14.3892 8.78052 14.8495 8.52957 15.2532C8.27862 15.6568 7.93424 15.9914 7.52671 16.2275C7.10197 16.4739 6.62159 16.6032 6.13293 16.6025C4.56344 16.6025 3.29143 15.2976 3.29143 13.686C3.29143 12.0744 4.56344 10.7695 6.13293 10.7695C6.43002 10.7692 6.72529 10.8169 7.00777 10.9107L7.01185 7.41338C6.15432 7.30043 5.28314 7.36992 4.45327 7.61747C3.62339 7.86502 2.85284 8.28524 2.19021 8.85164C1.6096 9.36603 1.12148 9.97979 0.747808 10.6653C0.605611 10.9153 0.0691014 11.9198 0.00413184 13.5502C-0.0367295 14.4755 0.235816 15.4342 0.365755 15.8305V15.8388C0.447477 16.0721 0.764153 16.8683 1.28023 17.5395C1.69638 18.078 2.18804 18.5509 2.73939 18.9432V18.9349L2.74756 18.9432C4.37834 20.0732 6.18645 19.999 6.18645 19.999C6.49945 19.9861 7.54795 19.999 8.73865 19.4236C10.0593 18.7857 10.8111 17.8354 10.8111 17.8354C11.2915 17.2675 11.6734 16.6204 11.9405 15.9217C12.2454 15.1047 12.3471 14.1247 12.3471 13.7331V6.68675C12.388 6.71175 12.9323 7.07881 12.9323 7.07881C12.9323 7.07881 13.7164 7.59129 14.9398 7.92502C15.8175 8.16251 17 8.21251 17 8.21251V4.80268C16.5857 4.84851 15.7443 4.71518 14.883 4.27729Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_tumblr: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M8.16675 20C5.16675 20 2.91675 18.4583 2.91675 14.75V8.83333H0.166748V5.625C3.16675 4.83333 4.41675 2.25 4.58342 0H7.70842V5.08333H11.3334V8.83333H7.70842V14C7.70842 15.5417 8.50008 16.0833 9.75008 16.0833H11.5001V20H8.16675Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_vimeo: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
  <path d="M19.8881 1.69862C19.5362 0.229472 17.8797 -0.185772 16.2069 0.0712117C15.3489 0.204969 12.4525 1.49916 11.4656 4.60025C13.2117 4.46356 14.1279 4.72713 13.9598 6.67303C13.8886 7.48846 13.4838 8.38049 13.0286 9.23624C12.5054 10.2241 11.5212 12.1601 10.2329 10.7655C9.0727 9.50732 9.16169 7.10527 8.89749 5.5037C8.74774 4.60315 8.59141 3.48589 8.30044 2.56221C8.05194 1.76626 7.47709 0.809563 6.77407 0.599948C6.01998 0.377956 5.08804 0.727832 4.54143 1.05518C2.83909 2.06578 1.56386 3.45811 0.102263 4.65849C-0.0821777 4.84616 0.0270352 5.00379 0.0891308 5.14342C0.299039 5.47202 0.380141 5.67144 0.780407 5.73002C1.81954 5.88433 2.8077 4.74937 3.4963 5.93241C3.9175 6.65239 4.0489 7.44205 4.31772 8.21766C4.67544 9.25684 4.95332 10.3843 5.2476 11.5768C5.74663 13.592 6.35542 16.6046 8.0787 17.3458C8.95631 17.7212 10.276 17.218 10.9437 16.8167C12.7553 15.7305 14.2286 14.2052 15.375 12.5542C18.3584 8.26088 19.7887 3.94699 19.9442 3.12531C20.0548 2.52978 19.9823 2.0383 19.8881 1.69862Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_x: `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
  <path d="M17.4256 0H20.8185L13.4062 8.47179L22.1262 20H15.2985L9.95077 13.0082L3.83179 20H0.436923L8.36513 10.9385L0 0H7.00103L11.8349 6.39077L17.4256 0ZM16.2349 17.9692H18.1149L5.97949 1.9241H3.96205L16.2349 17.9692Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
  <path d="M19.8008 3.03516C19.8008 3.03516 19.6055 1.65625 19.0039 1.05078C18.2422 0.253906 17.3906 0.25 17 0.203125C14.2031 -1.11759e-07 10.0039 0 10.0039 0H9.99609C9.99609 0 5.79688 -1.11759e-07 3 0.203125C2.60938 0.25 1.75781 0.253906 0.996094 1.05078C0.394531 1.65625 0.203125 3.03516 0.203125 3.03516C0.203125 3.03516 0 4.65625 0 6.27344V7.78906C0 9.40625 0.199219 11.0273 0.199219 11.0273C0.199219 11.0273 0.394531 12.4062 0.992187 13.0117C1.75391 13.8086 2.75391 13.7812 3.19922 13.8672C4.80078 14.0195 10 14.0664 10 14.0664C10 14.0664 14.2031 14.0586 17 13.8594C17.3906 13.8125 18.2422 13.8086 19.0039 13.0117C19.6055 12.4062 19.8008 11.0273 19.8008 11.0273C19.8008 11.0273 20 9.41016 20 7.78906V6.27344C20 4.65625 19.8008 3.03516 19.8008 3.03516ZM7.93359 9.62891V4.00781L13.3359 6.82812L7.93359 9.62891Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Filled *** //
  account_balance_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M3.22502 15.875V11.65C3.22502 11.2666 3.36252 10.9416 3.63752 10.675C3.91252 10.4083 4.24169 10.275 4.62502 10.275C5.00836 10.275 5.33336 10.4083 5.60002 10.675C5.86669 10.9416 6.00002 11.2666 6.00002 11.65V15.9C6.00002 16.2833 5.86669 16.6083 5.60002 16.875C5.33336 17.1416 5.00836 17.275 4.62502 17.275C4.24169 17.275 3.91252 17.1375 3.63752 16.8625C3.36252 16.5875 3.22502 16.2583 3.22502 15.875ZM9.62502 15.9V11.65C9.62502 11.2666 9.75836 10.9416 10.025 10.675C10.2917 10.4083 10.6167 10.275 11 10.275C11.3834 10.275 11.7084 10.4083 11.975 10.675C12.2417 10.9416 12.375 11.2666 12.375 11.65V15.9C12.375 16.2833 12.2417 16.6083 11.975 16.875C11.7084 17.1416 11.3834 17.275 11 17.275C10.6167 17.275 10.2917 17.1416 10.025 16.875C9.75836 16.6083 9.62502 16.2833 9.62502 15.9ZM1.72502 21.65C1.29169 21.65 0.920858 21.4958 0.612524 21.1875C0.304191 20.8791 0.150024 20.5083 0.150024 20.075C0.150024 19.6416 0.304191 19.2708 0.612524 18.9625C0.920858 18.6541 1.29169 18.5 1.72502 18.5H20.275C20.7084 18.5 21.0792 18.6541 21.3875 18.9625C21.6959 19.2708 21.85 19.6416 21.85 20.075C21.85 20.5083 21.6959 20.8791 21.3875 21.1875C21.0792 21.4958 20.7084 21.65 20.275 21.65H1.72502ZM16 15.875V11.65C16 11.2666 16.1375 10.9416 16.4125 10.675C16.6875 10.4083 17.0167 10.275 17.4 10.275C17.7834 10.275 18.1084 10.4083 18.375 10.675C18.6417 10.9416 18.775 11.2666 18.775 11.65V15.9C18.775 16.2833 18.6417 16.6083 18.375 16.875C18.1084 17.1416 17.7834 17.275 17.4 17.275C17.0167 17.275 16.6875 17.1375 16.4125 16.8625C16.1375 16.5875 16 16.2583 16 15.875ZM20.175 9.02495H1.65002C1.23336 9.02495 0.879191 8.87912 0.587524 8.58745C0.295858 8.29578 0.150024 7.94162 0.150024 7.52495V6.57495C0.150024 6.29162 0.225024 6.02912 0.375024 5.78745C0.525024 5.54578 0.725024 5.35828 0.975024 5.22495L9.60002 0.924951C10.0334 0.691618 10.5 0.574951 11 0.574951C11.5 0.574951 11.9667 0.691618 12.4 0.924951L20.925 5.17495C21.2084 5.30828 21.4334 5.51245 21.6 5.78745C21.7667 6.06245 21.85 6.36662 21.85 6.69995V7.32495C21.85 7.79162 21.6875 8.19162 21.3625 8.52495C21.0375 8.85828 20.6417 9.02495 20.175 9.02495Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  cancel_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M10.9242 12.3032L13.8242 15.2032C14.0075 15.3866 14.2408 15.4782 14.5242 15.4782C14.8075 15.4782 15.0408 15.3866 15.2242 15.2032C15.4075 15.0199 15.4992 14.7866 15.4992 14.5032C15.4992 14.2199 15.4075 13.9866 15.2242 13.8032L12.3242 10.9032L15.2242 8.00324C15.4075 7.81991 15.4992 7.58658 15.4992 7.30324C15.4992 7.01991 15.4075 6.78658 15.2242 6.60324C15.0408 6.41991 14.8075 6.32824 14.5242 6.32824C14.2408 6.32824 14.0075 6.41991 13.8242 6.60324L10.9242 9.50324L8.02416 6.60324C7.84083 6.41991 7.6075 6.32824 7.32416 6.32824C7.04083 6.32824 6.8075 6.41991 6.62416 6.60324C6.44083 6.78658 6.34916 7.01991 6.34916 7.30324C6.34916 7.58658 6.44083 7.81991 6.62416 8.00324L9.52416 10.9032L6.62416 13.8032C6.44083 13.9866 6.34916 14.2199 6.34916 14.5032C6.34916 14.7866 6.44083 15.0199 6.62416 15.2032C6.8075 15.3866 7.04083 15.4782 7.32416 15.4782C7.6075 15.4782 7.84083 15.3866 8.02416 15.2032L10.9242 12.3032ZM10.9242 20.9032C9.54083 20.9032 8.24083 20.6407 7.02416 20.1157C5.8075 19.5907 4.74916 18.8782 3.84916 17.9782C2.94916 17.0782 2.23666 16.0199 1.71166 14.8032C1.18666 13.5866 0.924164 12.2866 0.924164 10.9032C0.924164 9.51991 1.18666 8.21991 1.71166 7.00324C2.23666 5.78658 2.94916 4.72824 3.84916 3.82824C4.74916 2.92824 5.8075 2.21574 7.02416 1.69074C8.24083 1.16574 9.54083 0.903244 10.9242 0.903244C12.3075 0.903244 13.6075 1.16574 14.8242 1.69074C16.0408 2.21574 17.0992 2.92824 17.9992 3.82824C18.8992 4.72824 19.6117 5.78658 20.1367 7.00324C20.6617 8.21991 20.9242 9.51991 20.9242 10.9032C20.9242 12.2866 20.6617 13.5866 20.1367 14.8032C19.6117 16.0199 18.8992 17.0782 17.9992 17.9782C17.0992 18.8782 16.0408 19.5907 14.8242 20.1157C13.6075 20.6407 12.3075 20.9032 10.9242 20.9032Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  language_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 21.8499C9.51669 21.8499 8.11669 21.5624 6.80002 20.9874C5.48336 20.4124 4.33336 19.6332 3.35002 18.6499C2.36669 17.6666 1.58752 16.5166 1.01252 15.1999C0.437524 13.8832 0.150024 12.4832 0.150024 10.9999C0.150024 9.51657 0.437524 8.11657 1.01252 6.7999C1.58752 5.48324 2.36669 4.33324 3.35002 3.3499C4.33336 2.36657 5.48336 1.5874 6.80002 1.0124C8.11669 0.437402 9.51669 0.149902 11 0.149902C12.4834 0.149902 13.8834 0.437402 15.2 1.0124C16.5167 1.5874 17.6667 2.36657 18.65 3.3499C19.6334 4.33324 20.4125 5.48324 20.9875 6.7999C21.5625 8.11657 21.85 9.51657 21.85 10.9999C21.85 12.4832 21.5625 13.8832 20.9875 15.1999C20.4125 16.5166 19.6334 17.6666 18.65 18.6499C17.6667 19.6332 16.5167 20.4124 15.2 20.9874C13.8834 21.5624 12.4834 21.8499 11 21.8499ZM10.95 18.6749C11.3167 18.1082 11.6584 17.5041 11.975 16.8624C12.2917 16.2207 12.55 15.5499 12.75 14.8499H9.22502C9.42502 15.5499 9.67086 16.2207 9.96252 16.8624C10.2542 17.5041 10.5834 18.1082 10.95 18.6749ZM8.47502 18.2749C8.14169 17.7582 7.87919 17.2041 7.68752 16.6124C7.49586 16.0207 7.32502 15.4332 7.17502 14.8499H4.37502C4.80836 15.6499 5.37502 16.3499 6.07502 16.9499C6.77502 17.5499 7.57502 17.9916 8.47502 18.2749ZM13.45 18.2749C14.35 17.9916 15.1584 17.5499 15.875 16.9499C16.5917 16.3499 17.1667 15.6499 17.6 14.8499H14.8C14.65 15.4332 14.4709 16.0207 14.2625 16.6124C14.0542 17.2041 13.7834 17.7582 13.45 18.2749ZM3.55002 12.9249H6.77502C6.72502 12.5916 6.68752 12.2707 6.66252 11.9624C6.63752 11.6541 6.62502 11.3332 6.62502 10.9999C6.62502 10.6499 6.63752 10.3249 6.66252 10.0249C6.68752 9.7249 6.72502 9.40824 6.77502 9.0749H3.55002C3.46669 9.39157 3.40419 9.70407 3.36252 10.0124C3.32086 10.3207 3.30002 10.6499 3.30002 10.9999C3.30002 11.3332 3.32086 11.6582 3.36252 11.9749C3.40419 12.2916 3.46669 12.6082 3.55002 12.9249ZM8.77502 12.9249H13.2C13.25 12.5916 13.2792 12.2707 13.2875 11.9624C13.2959 11.6541 13.3 11.3332 13.3 10.9999C13.3 10.6499 13.2959 10.3249 13.2875 10.0249C13.2792 9.7249 13.25 9.40824 13.2 9.0749H8.77502C8.72502 9.40824 8.68752 9.7249 8.66252 10.0249C8.63752 10.3249 8.62502 10.6499 8.62502 10.9999C8.62502 11.3332 8.63752 11.6541 8.66252 11.9624C8.68752 12.2707 8.72502 12.5916 8.77502 12.9249ZM15.2 12.9249H18.4C18.4834 12.6082 18.5459 12.2916 18.5875 11.9749C18.6292 11.6582 18.65 11.3332 18.65 10.9999C18.65 10.6499 18.6292 10.3207 18.5875 10.0124C18.5459 9.70407 18.4834 9.39157 18.4 9.0749H15.2C15.2334 9.40824 15.2584 9.7249 15.275 10.0249C15.2917 10.3249 15.3 10.6499 15.3 10.9999C15.3 11.3332 15.2917 11.6541 15.275 11.9624C15.2584 12.2707 15.2334 12.5916 15.2 12.9249ZM14.8 7.1249H17.6C17.1667 6.3249 16.5917 5.62907 15.875 5.0374C15.1584 4.44574 14.35 4.00824 13.45 3.7249C13.7834 4.24157 14.0542 4.79157 14.2625 5.3749C14.4709 5.95824 14.65 6.54157 14.8 7.1249ZM9.22502 7.1249H12.75C12.5667 6.4249 12.3167 5.75824 12 5.1249C11.6834 4.49157 11.3334 3.89157 10.95 3.3249C10.5834 3.89157 10.2542 4.49157 9.96252 5.1249C9.67086 5.75824 9.42502 6.4249 9.22502 7.1249ZM4.37502 7.1249H7.17502C7.32502 6.54157 7.49586 5.95824 7.68752 5.3749C7.87919 4.79157 8.14169 4.24157 8.47502 3.7249C7.57502 4.00824 6.77502 4.44574 6.07502 5.0374C5.37502 5.62907 4.80836 6.3249 4.37502 7.1249Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  lock_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
  <path d="M3.30002 22.7751C2.43369 22.7751 1.69211 22.4667 1.07527 21.8498C0.458441 21.2328 0.150024 20.4913 0.150024 19.6251V10.2251C0.150024 9.35893 0.458441 8.61735 1.07527 8.00035C1.69211 7.38351 2.43369 7.0751 3.30002 7.0751H3.62502V5.8001C3.62502 4.28343 4.14586 2.99593 5.18752 1.9376C6.22919 0.879264 7.50002 0.350098 9.00002 0.350098C10.5 0.350098 11.7709 0.879264 12.8125 1.9376C13.8542 2.99593 14.375 4.28343 14.375 5.8001V7.0751H14.7C15.5662 7.0751 16.3078 7.38351 16.9248 8.00035C17.5416 8.61735 17.85 9.35893 17.85 10.2251V19.6251C17.85 20.4913 17.5416 21.2328 16.9248 21.8498C16.3078 22.4667 15.5662 22.7751 14.7 22.7751H3.30002ZM9.00002 16.9251C9.55002 16.9251 10.0209 16.7293 10.4125 16.3376C10.8042 15.9459 11 15.4751 11 14.9251C11 14.3751 10.8042 13.9043 10.4125 13.5126C10.0209 13.1209 9.55002 12.9251 9.00002 12.9251C8.45002 12.9251 7.97919 13.1209 7.58752 13.5126C7.19586 13.9043 7.00002 14.3751 7.00002 14.9251C7.00002 15.4751 7.19586 15.9459 7.58752 16.3376C7.97919 16.7293 8.45002 16.9251 9.00002 16.9251ZM6.77502 7.0751H11.225V5.8001C11.225 5.16126 11.0125 4.61818 10.5875 4.17085C10.1625 3.72368 9.63336 3.5001 9.00002 3.5001C8.36669 3.5001 7.83752 3.72368 7.41252 4.17085C6.98752 4.61818 6.77502 5.16126 6.77502 5.8001V7.0751Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`
}, $6 = v`
  :host {
    display: inline-block;
    --_nys-icon-size: 0.7em; /* If cap isn't supported, a fallback value of 0.7em is used, as it closely approximates the height of capital letters in most fonts. */
    box-sizing: content-box !important;
  }

  /* Use 'cap' if supported */
  @supports (font-size: 1cap) {
    :host {
      --_nys-icon-size: 1cap;
    }
  }

  /* SVG size and color is initially determined by the parent's font-size and text-color */
  .nys-icon--svg {
    width: var(--_nys-icon-size, 1em);
    height: var(--_nys-icon-size, 1em);
    display: block;
    white-space: nowrap;
  }

  /* Relative Sizes */
  .nys-icon--2xs {
    width: calc(var(--_nys-icon-size) * 0.75);
    height: calc(var(--_nys-icon-size) * 0.75);
  }
  .nys-icon--xs {
    width: calc(var(--_nys-icon-size) * 0.875);
    height: calc(var(--_nys-icon-size) * 0.875);
  }
  .nys-icon--sm {
    width: var(--_nys-icon-size);
    height: var(--_nys-icon-size);
  }
  .nys-icon--md {
    width: calc(var(--_nys-icon-size) * 1.125);
    height: calc(var(--_nys-icon-size) * 1.125);
  }
  .nys-icon--lg {
    width: calc(var(--_nys-icon-size) * 1.25);
    height: calc(var(--_nys-icon-size) * 1.25);
  }
  .nys-icon--xl {
    width: calc(var(--_nys-icon-size) * 1.5);
    height: calc(var(--_nys-icon-size) * 1.5);
  }
  .nys-icon--2xl {
    width: calc(var(--_nys-icon-size) * 1.875);
    height: calc(var(--_nys-icon-size) * 1.875);
  }
  .nys-icon--3xl {
    width: calc(var(--_nys-icon-size) * 2.25);
    height: calc(var(--_nys-icon-size) * 2.25);
  }
  .nys-icon--4xl {
    width: calc(var(--_nys-icon-size) * 3);
    height: calc(var(--_nys-icon-size) * 3);
  }

  /* Literal Sizing */
  .nys-icon--12 {
    width: 0.75rem;
    height: 0.75rem;
  }
  .nys-icon--16 {
    width: 1rem;
    height: 1rem;
  }
  .nys-icon--24 {
    width: 1.5rem;
    height: 1.5rem;
  }
  .nys-icon--32 {
    width: 2rem;
    height: 2rem;
  }
  .nys-icon--48 {
    width: 3rem;
    height: 3rem;
  }
  .nys-icon--64 {
    width: 4rem;
    height: 4rem;
  }

  /* Flipping Icons */
  .nys-icon--flip-horizontal {
    transform: scaleX(-1);
  }
  .nys-icon--flip-vertical {
    transform: scaleY(-1);
  }
  .nys-icon--flip-both {
    transform: scale(-1, -1);
  }
`;
var M6 = Object.defineProperty, Z6 = Object.getOwnPropertyDescriptor, Q1 = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? Z6(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && M6(t, e, r), r;
}, d1;
const Z1 = (d1 = class extends p {
  constructor() {
    super(...arguments), this.name = "", this.label = "", this.rotate = "0", this.flip = "", this.color = "", this._size = "sm";
  }
  get size() {
    return this._size;
  }
  set size(t) {
    this._size = d1.VALID_TYPES.includes(
      t
    ) ? t : "sm";
  }
  getIcon() {
    const t = L6[this.name], e = !!this.label;
    if (!t) return null;
    const n = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
    return n instanceof SVGElement ? (n.setAttribute("role", "img"), n.setAttribute("aria-label", e ? this.label : ""), n.setAttribute("aria-hidden", e ? "false" : "true"), n.style.rotate = `${this.rotate}deg`, n.style.color = this.color || "currentcolor", n.classList.add(`nys-icon--${this.size}`), n.classList.add("nys-icon--svg"), this.flip && n.classList.add(`nys-icon--flip-${this.flip}`), n) : null;
  }
  render() {
    const t = this.getIcon();
    return t ? c`${t}` : null;
  }
}, d1.styles = $6, d1.VALID_TYPES = [
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "12",
  "16",
  "24",
  "32",
  "48",
  "64"
], d1);
Q1([
  a({ type: String, reflect: !0 })
], Z1.prototype, "name", 2);
Q1([
  a({ type: String })
], Z1.prototype, "label", 2);
Q1([
  a({ type: String })
], Z1.prototype, "rotate", 2);
Q1([
  a({ type: String })
], Z1.prototype, "flip", 2);
Q1([
  a({ type: String })
], Z1.prototype, "color", 2);
Q1([
  a({ reflect: !0 })
], Z1.prototype, "size", 1);
let V6 = Z1;
customElements.get("nys-icon") || customElements.define("nys-icon", V6);
const H6 = v`
  :host {
    /* Label Typography */
    --_nys-label-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-label-font-weight: var(--nys-font-weight-semibold, 600);
    --_nys-label-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-label-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-label-letter-spacing: var(--nys-font-letterspacing-ui-md, 0.044px);
    --_nys-label-font-color: var(--nys-color-text, #1b1b1b);

    /* Description */
    --nys-description-font-weight: var(--nys-font-weight-regular, 400);
    --nys-description-font-style: italic;
    --nys-description-font-color: var(--nys-color-text, #1b1b1b);

    /* Required Flag */
    --nys-required-font-color: var(--nys-color-danger, #b52c2c);

    /* Optional Flag */
    --nys-optional-font-weight: var(--nys-font-weight-regular, 400);
    --nys-optional-font-color: var(--nys-color-text-weak, #4a4d4f);

    /* Spacing */
    --_nys-label-flag-gap: var(--nys-space-2px, 2px);
  }

  .nys-label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: var(--_nys-label-font-family);
    font-size: var(--_nys-label-font-size);
    line-height: var(--_nys-label-line-height);
    letter-spacing: var(--_nys-label-letter-spacing);
  }

  .nys-label__labelwrapper {
    display: flex;
    gap: var(--_nys-label-flag-gap);
  }

  .nys-label__label {
    font-weight: var(--_nys-label-font-weight);
    color: var(--_nys-label-font-color);
  }

  .nys-label__description {
    font-weight: var(--nys-description-font-weight);
    font-style: var(--nys-description-font-style);
    color: var(--nys-description-font-color);
  }

  .nys-label__required {
    font-weight: var(--_nys-label-font-weight);
    color: var(--nys-required-font-color);
  }

  .nys-label__optional {
    font-weight: var(--nys-optional-font-weight);
    color: var(--nys-optional-font-color);
  }
`;
var S6 = Object.defineProperty, _2 = (s, t, e, o) => {
  for (var r = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = i(t, e, r) || r);
  return r && S6(t, e, r), r;
};
const a7 = class a7 extends p {
  constructor() {
    super(...arguments), this.id = "", this.label = "", this.description = "", this.flag = "";
  }
  render() {
    return c`
      <div class="nys-label">
        <label for=${this.id} class="nys-label__label"
          >${this.label}
          ${this.flag === "required" ? c`<label class="nys-label__required">*</label>` : ""}
          ${this.flag === "optional" ? c`<label class="nys-label__optional">(Optional)</label>` : ""}</label
        >
        <label for=${this.id} class="nys-label__description">
          <slot name="description">${this.description}</slot>
        </label>
      </div>
    `;
  }
};
a7.styles = H6;
let b1 = a7;
_2([
  a({ type: String })
], b1.prototype, "id");
_2([
  a({ type: String })
], b1.prototype, "label");
_2([
  a({ type: String })
], b1.prototype, "description");
_2([
  a({ type: String })
], b1.prototype, "flag");
customElements.get("nys-label") || customElements.define("nys-label", b1);
const q3 = v`
  :host {
    /* Global Radiobutton Styles */
    --_nys-radiobutton-size: var(--nys-size-400, 32px);
    --_nys-radiobutton-radius: var(--nys-border-radius-md, 4px);
    --_nys-radiobutton-width-border: var(--nys-border-width-md, 2px);
    --_nys-radiobutton-color-focus: var(--nys-color-focus, #004dd1);
    --_nys-radiobutton-width-focus: var(--nys-border-width-md, 2px);
    --_nys-radiobutton-offset-focus: var(--nys-space-2px, 2px);
    --_nys-radiobutton-gap: var(
      --nys-space-150,
      12px
    ); /* space between radio and it's label */
    --_nys-radiogroup-gap: var(
      --nys-space-200,
      16px
    ); /* space between radio buttons */

    /* Typography */
    --_nys-radiobutton-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-radiobutton-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-radiobutton-font-weight-400: var(--nys-font-weight-regular, 400);
    --_nys-radiobutton-font-weight-600: var(--nys-font-weight-semibold, 600);
    --_nys-radiobutton-line-height: var(--nys-font-lineheight-ui-md, 24px);

    /* Global Radio Button Colors */
    --_nys-radiobutton-color: var(
      --nys-color-ink,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-radiobutton-color-text: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );

    /* Default (Empty) */
    --_nys-radiobutton-color-bg: var(--nys-color-ink-reverse, #ffffff);
    --_nys-radiobutton-color-border: var(--nys-color-neutral-600, #62666a);
    /* Empty + Hovered */
    --_nys-radiobutton-hover-color-bg: var(--nys-color-neutral-50, #ededed);
    --_nys-radiobutton-hover-color-border: var(--nys-color-ink, #1b1b1b);
    /* Empty + Pressed */
    --_nys-radiobutton-pressed-color-bg: var(--nys-color-neutral-100, #d0d0ce);
    --_nys-radiobutton-pressed-color-border: var(--nys-color-ink, #1b1b1b);
    /* Checked */
    --_nys-radiobutton-checked-color-bg: var(--nys-color-theme, #154973);
    /* Checked + Hovered */
    --_nys-radiobutton-checked-hover-color-bg: var(
      --nys-color-theme-strong,
      var(--nys-color-state-blue-800, #0e324f)
    );
    --_nys-radiobutton-checked-hover-color-border: var(
      --nys-color-ink,
      #1b1b1b
    );
    /* Checked + Pressed */
    --_nys-radiobutton-checked-pressed-color-bg: var(
      --nys-color-theme-strong,
      var(--nys-color-state-blue-800, #0e324f)
    );
    --_nys-radiobutton-checked-pressed-color-border: var(
      --nys-color-ink,
      #1b1b1b
    );
    /* Disabled */
    --_nys-radiobutton-disabled-color-bg: var(--nys-color-ink-reverse, #f0f0f0);
    --_nys-radiobutton-disabled-color-text: var(
      --nys-color-text-disabled,
      var(--nys-color-neutral-200, #bec0c1)
    );
    --_nys-radiobutton-disabled-color-border: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
    /* Disabled Checked */
    --_nys-radiobutton-disabled-checked-color-bg: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
    --_nys-radiobutton-disabled-checked-color-border: var(
      --nys-color-neutral-100,
      #d0d0ce
    );
  }

  /* Small Variant */
  :host([size="sm"]) {
    --_nys-radiobutton-size: var(--nys-size-300, 24px);
    --_nys-radiobutton-radius: var(--nys-border-radius-sm, 2px);
    --_nys-radiogroup-gap: var(--nys-space-100, 8px);
    --_nys-radiobutton-gap: var(--nys-space-100, 8px);
  }
  /* Medium Variant */
  :host([size="md"]) {
    --_nys-radiobutton-size: var(--nys-size-400, 32px);
    --_nys-radiobutton-radius: var(--nys-border-radius-md, 4px);
    --_nys-radiogroup-gap: var(--nys-space-200, 16px);
    --_nys-radiobutton-gap: var(--nys-space-150, 12px);
  }

  .nys-radiogroup {
    display: flex;
    flex-direction: column;
    gap: var(--nys-space-200, 16px);
    font-family: var(--_nys-radiobutton-font-family);
    font-size: var(--_nys-radiobutton-font-size);
    line-height: var(--_nys-radiobutton-line-height);
  }

  .nys-radiogroup__content {
    gap: var(--_nys-radiogroup-gap);
    display: flex;
    flex-direction: column;
  }

  .nys-radiobutton {
    display: flex;
    align-items: center;
    font-family: var(--_nys-radiobutton-font-family);
    font-size: var(--_nys-radiobutton-font-size);
    line-height: var(--_nys-radiobutton-line-height);
  }

  .nys-radiobutton__radio {
    appearance: none;
    width: var(--_nys-radiobutton-size);
    height: var(--_nys-radiobutton-size);
    min-width: var(--_nys-radiobutton-size);
    min-height: var(--_nys-radiobutton-size);
    max-width: var(--_nys-radiobutton-size);
    max-height: var(--_nys-radiobutton-size);
    border: solid var(--_nys-radiobutton-width-border)
      var(--_nys-radiobutton-color-border);
    background-color: var(--_nys-radiobutton-color-bg);
    border-radius: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    margin-bottom: auto; /* Causes centered radio button if single line of label but top aligned if multiline */
  }

  /* Pointer cursor for unchecked radio button */
  .nys-radiobutton:hover * {
    cursor: pointer;
  }

  /* Checked */
  .nys-radiobutton__radio:not(:disabled):checked {
    background-image: url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" stroke="white" stroke-width="6"/></svg>');
    background-color: var(--_nys-radiobutton-checked-color-bg);
  }

  /* Checked + Disabled */
  .nys-radiobutton__radio:disabled:checked {
    background-image: url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" stroke="white" stroke-width="6"/></svg>');
    border-color: var(--_nys-radiobutton-disabled-checked-color-border);
    background-color: var(--_nys-radiobutton-disabled-checked-color-bg);
  }

  /* Disabled */
  .nys-radiobutton__radio:disabled {
    background-color: var(--_nys-radiobutton-disabled-color-bg);
    border-color: var(--_nys-radiobutton-disabled-color-border);
    cursor: not-allowed;
  }

  /* Hover - only allow hover on unchecked */
  .nys-radiobutton__radio:hover:not(:disabled):not(:checked) {
    border-color: var(--_nys-radiobutton-hover-color-border);
    background-color: var(--_nys-radiobutton-hover-color-bg);
  }

  /* Pressed - only allow pressed on unchecked */
  .nys-radiobutton__radio:active:not(:disabled):not(:checked) {
    border-color: var(--_nys-radiobutton-pressed-color-border);
    background-color: var(--_nys-radiobutton-pressed-color-bg);
  }

  /* Focused */
  .nys-radiobutton__radio:focus {
    outline: solid var(--_nys-radiobutton-width-focus)
      var(--_nys-radiobutton-color-focus);
    outline-offset: var(--_nys-radiobutton-offset-focus);
  }

  /* Radiobutton Label Holder */
  .nys-radiobutton__text {
    line-height: var(--_nys-radiobutton-line-height);
    display: flex;
    flex-direction: column;
  }

  /* Label styling */
  .nys-radiobutton__label {
    font-weight: var(--_nys-radiobutton-font-weight-400);
    color: var(--_nys-radiobutton-color-text);
  }

  /* Description styling */
  .nys-radiobutton__description {
    font-weight: var(--_nys-radiobutton-font-weight-400);
    font-style: italic;
    text-align: left;
  }

  /* gap between radio and it's label */
  .nys-radiobutton__label,
  .nys-radiobutton__description {
    margin-inline-start: var(--_nys-radiobutton-gap);
  }

  /* Disabled label */
  .nys-radiobutton__radio:disabled
    + .nys-radiobutton__text
    .nys-radiobutton__label,
  .nys-radiobutton__radio:disabled
    + .nys-radiobutton__text
    .nys-radiobutton__description {
    color: var(--_nys-radiobutton-disabled-color-text);
    cursor: not-allowed;
  }
`;
var E6 = Object.defineProperty, k6 = Object.getOwnPropertyDescriptor, W = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? k6(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && E6(t, e, r), r;
};
let A6 = 0;
var t1;
const q = (t1 = class extends p {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.required = !1, this.optional = !1, this.showError = !1, this.errorMessage = "", this.label = "", this.description = "", this.selectedValue = null, this._size = "md", this._internals = this.attachInternals();
  }
  get size() {
    return this._size;
  }
  set size(t) {
    this._size = t1.VALID_SIZES.includes(
      t
    ) ? t : "md";
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-radiogroup-${Date.now()}-${A6++}`), this.addEventListener("change", this._handleRadioButtonChange), this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("change", this._handleRadioButtonChange), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this._initializeCheckedRadioValue(), this._setValue(), this.setRadioButtonRequire();
  }
  updated(t) {
    (t.has("required") || t.has("selectedValue")) && this._manageRequire(), t.has("size") && this._updateRadioButtonsSize();
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.querySelectorAll("nys-radiobutton").forEach((e) => {
      e.formResetUpdate();
    });
  }
  /********************** Form Integration **********************/
  _setValue() {
    this._internals.setFormValue(this.selectedValue);
  }
  // Updates the "require" attribute of the first radiobutton underneath a radiogroup to ensure requirement for all radiobutton under the same name/group
  setRadioButtonRequire() {
    this.querySelectorAll("nys-radiobutton").forEach((e, o) => {
      this.required && o === 0 && e.setAttribute("required", "required");
    });
  }
  async _manageRequire() {
    const t = this.errorMessage || "Please select an option.", e = this.querySelector("nys-radiobutton"), o = e ? await e.getInputElement() : null;
    this.required && !this.selectedValue ? this._internals.setValidity(
      { valueMissing: !0 },
      t,
      o
    ) : (this.showError = !1, this._internals.setValidity({}, "", o));
  }
  // Need to account for if radiogroup already have a radiobutton checked at initialization
  _initializeCheckedRadioValue() {
    const t = this.querySelector("nys-radiobutton[checked]");
    t && (this.selectedValue = t.getAttribute("value"), this._internals.setFormValue(this.selectedValue));
  }
  /********************** Functions **********************/
  // Updates the size of each radiobutton underneath a radiogroup to ensure size standardization
  _updateRadioButtonsSize() {
    this.querySelectorAll("nys-radiobutton").forEach((e) => {
      e.setAttribute("size", this.size);
    });
  }
  // Keeps radiogroup informed of the name and value of its current selected radiobutton at each change
  _handleRadioButtonChange(t) {
    const e = t, { name: o, value: r } = e.detail;
    this.name = o, this.selectedValue = r, this._internals.setFormValue(this.selectedValue);
  }
  async _handleInvalid(t) {
    if (t.preventDefault(), this._internals.validity.valueMissing) {
      this.showError = !0, this._manageRequire();
      const e = this.querySelector("nys-radiobutton"), o = e ? await e.getInputElement() : null;
      if (o) {
        const r = this._internals.form;
        r ? Array.from(r.elements).find((l) => {
          if (l.tagName.toLowerCase() === "nys-radiogroup") {
            if (!l.querySelector("nys-radiobutton").checkValidity())
              return l;
          } else
            return typeof l.checkValidity == "function" && !l.checkValidity();
        }) === this && o.focus() : o.focus();
      }
    }
  }
  render() {
    return c` <div
      role="radiogroup"
      class="nys-radiogroup"
      aria-required="${this.required ? "true" : "false"}"
      aria-invalid="${this.showError ? "true" : "false"}"
    >
      <nys-label
        label=${this.label}
        description=${this.description}
        flag=${this.required ? "required" : this.optional ? "optional" : ""}
      >
        <slot name="description" slot="description">${this.description}</slot>
      </nys-label>
      <div class="nys-radiogroup__content">
        <slot></slot>
      </div>
      <nys-errormessage
        ?showError=${this.showError}
        errorMessage=${this._internals.validationMessage || this.errorMessage}
        showDivider
      ></nys-errormessage>
    </div>`;
  }
}, t1.VALID_SIZES = ["sm", "md"], t1.styles = q3, t1.formAssociated = !0, t1);
W([
  a({ type: String })
], q.prototype, "id", 2);
W([
  a({ type: String, reflect: !0 })
], q.prototype, "name", 2);
W([
  a({ type: Boolean, reflect: !0 })
], q.prototype, "required", 2);
W([
  a({ type: Boolean, reflect: !0 })
], q.prototype, "optional", 2);
W([
  a({ type: Boolean, reflect: !0 })
], q.prototype, "showError", 2);
W([
  a({ type: String })
], q.prototype, "errorMessage", 2);
W([
  a({ type: String })
], q.prototype, "label", 2);
W([
  a({ type: String })
], q.prototype, "description", 2);
W([
  x1()
], q.prototype, "selectedValue", 2);
W([
  a({ reflect: !0 })
], q.prototype, "size", 1);
let P6 = q;
customElements.get("nys-radiogroup") || customElements.define("nys-radiogroup", P6);
var z6 = Object.defineProperty, B6 = Object.getOwnPropertyDescriptor, n1 = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? B6(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && z6(t, e, r), r;
};
let U6 = 0;
var y;
const Y = (y = class extends p {
  constructor() {
    super(...arguments), this.checked = !1, this.disabled = !1, this.required = !1, this.label = "", this.description = "", this.id = "", this.name = "", this.value = "", this._size = "md";
  }
  get size() {
    return this._size;
  }
  set size(t) {
    this._size = y.VALID_SIZES.includes(
      t
    ) ? t : "md";
  }
  async getInputElement() {
    var t;
    return await this.updateComplete, ((t = this.shadowRoot) == null ? void 0 : t.querySelector("input")) || null;
  }
  // This callback is automatically called when the parent form is reset.
  formResetUpdate() {
    this.checked = !1;
  }
  /********************** Lifecycle updates **********************/
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-radiobutton-${Date.now()}-${U6++}`), this.checked && (y.buttonGroup[this.name] && (y.buttonGroup[this.name].checked = !1, y.buttonGroup[this.name].requestUpdate()), y.buttonGroup[this.name] = this);
  }
  updated(t) {
    t.has("checked") && this.checked && y.buttonGroup[this.name] !== this && (y.buttonGroup[this.name] && (y.buttonGroup[this.name].checked = !1, y.buttonGroup[this.name].requestUpdate()), y.buttonGroup[this.name] = this);
  }
  /******************** Function ********************/
  // This helper function is called to perform the element's native validation.
  checkValidity() {
    var e;
    if (this.required && !this.checked)
      return !1;
    const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("input");
    return t ? t.checkValidity() : !0;
  }
  /******************** Event Handlers ********************/
  // Handle radiobutton change event & unselection of other options in group
  _handleChange() {
    this.checked || (y.buttonGroup[this.name] && (y.buttonGroup[this.name].checked = !1, y.buttonGroup[this.name].requestUpdate()), y.buttonGroup[this.name] = this, this.checked = !0, this.dispatchEvent(
      new CustomEvent("change", {
        detail: { checked: this.checked, name: this.name, value: this.value },
        bubbles: !0,
        composed: !0
      })
    ));
  }
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(new Event("focus"));
  }
  // Handle blur event
  _handleBlur() {
    this.dispatchEvent(new Event("blur"));
  }
  // Handle keydown for keyboard accessibility
  _handleKeydown(t) {
    t.code === "Space" && (t.preventDefault(), !this.disabled && !this.checked && (y.buttonGroup[this.name] && (y.buttonGroup[this.name].checked = !1, y.buttonGroup[this.name].requestUpdate()), y.buttonGroup[this.name] = this, this.checked = !0, this.dispatchEvent(
      new CustomEvent("change", {
        detail: {
          checked: this.checked,
          name: this.name,
          value: this.value
        },
        bubbles: !0,
        composed: !0
      })
    )));
  }
  render() {
    return c`
      <label class="nys-radiobutton">
        <input
          id="${this.id}"
          class="nys-radiobutton__radio"
          type="radio"
          name="${g(this.name ? this.name : void 0)}"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          .value=${this.value}
          ?required="${this.required}"
          aria-checked="${this.checked ? "true" : "false"}"
          aria-disabled="${this.disabled ? "true" : "false"}"
          aria-required="${this.required ? "true" : "false"}"
          @change="${this._handleChange}"
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
          @keydown="${this._handleKeydown}"
        />
        ${this.label && c` <div class="nys-radiobutton__text">
          <label for=${this.id} class="nys-radiobutton__label"
            >${this.label}</label
          >
          <label for=${this.id} class="nys-radiobutton__description">
            <slot name="description">${this.description}</slot>
          </label>
        </div>`}
      </label>
    `;
  }
}, y.VALID_SIZES = ["sm", "md"], y.buttonGroup = {}, y.styles = q3, y);
n1([
  a({ type: Boolean, reflect: !0 })
], Y.prototype, "checked", 2);
n1([
  a({ type: Boolean, reflect: !0 })
], Y.prototype, "disabled", 2);
n1([
  a({ type: Boolean, reflect: !0 })
], Y.prototype, "required", 2);
n1([
  a({ type: String })
], Y.prototype, "label", 2);
n1([
  a({ type: String })
], Y.prototype, "description", 2);
n1([
  a({ type: String })
], Y.prototype, "id", 2);
n1([
  a({ type: String, reflect: !0 })
], Y.prototype, "name", 2);
n1([
  a({ type: String })
], Y.prototype, "value", 2);
n1([
  a({ reflect: !0 })
], Y.prototype, "size", 1);
let O6 = Y;
customElements.get("nys-radiobutton") || customElements.define("nys-radiobutton", O6);
const I6 = v`
  :host {
    /* Global Select Styles */
    --_nys-select-width: 100%;
    --_nys-select-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-select-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-select-font-weight: var(--nys-font-weight-regular, 400);
    --_nys-select-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-select-gap: var(--nys-space-50, 4px);
    --_nys-select-radius: var(--nys-radius-md, var(--nys-space-50, 4px));
    --_nys-select-padding: var(--nys-space-100, 8px) var(--nys-space-400, 32px)
      var(--nys-space-100, 8px) var(--nys-space-100, 8px);

    /* Global Select Colors */
    --_nys-select-text-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-select-icon-color: var(
      --nys-color-ink,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-select-error-color: var(
      --nys-color-danger,
      var(--nys-color-red-600, #b52c2c)
    );
    --_nys-select-bg-color: var(--nys-color-ink-reverse, #fff);
    --_nys-select-bg-disabled-color: var(--nys-color-neutral-50, #ededed);
    --_nys-select-text-disabled-color: var(
      --nys-color-text-disabled,
      var(--nys-color-neutral-200, #bec0c1)
    );
    --_nys-select-icon-disabled-color: var(--nys-color-neutral-200, #bec0c1);

    /* Select Outline & Border States */
    --_nys-select-border-default: var(--nys-border-width-sm, 1px) solid
      var(--nys-color-neutral-400, #909395);
    --_nys-select-border-focus: var(--nys-border-width-sm, 1px) solid
      var(--nys-color-focus, var(--nys-color-blue-600, #004dd1));
    --_nys-select-border-disabled: var(--nys-border-width-sm, 1px) solid
      var(--nys-color-neutral-200, #bec0c1);
    --_nys-select-border-hover: var(--nys-border-width-sm, 1px) solid
      var(--nys-color-neutral-900, #1b1b1b);
  }

  .nys-select {
    display: flex;
    flex-direction: column;
    gap: var(--_nys-select-gap);
    font-family: var(--_nys-select-font-family);
  }

  .nys-select__select {
    color: var(--_nys-select-text-color);
    font-weight: var(--_nys-select-font-weight);
    border-radius: var(--_nys-select-radius);
    border: var(--_nys-select-border-default);
    font-size: var(--_nys-select-font-size);
    padding: var(--_nys-select-padding);
    width: var(--_nys-select-width);
    min-width: var(--_nys-select-width);
    max-width: var(--_nys-select-width);
    text-indent: 1px;
    text-overflow: "";
    background: var(--_nys-select-bg-color);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    text-overflow: ellipsis;
  }

  .nys-select__selectwrapper {
    position: relative;
    display: inline-block;
    width: var(--_nys-select-width);
  }

  .nys-select__icon {
    color: var(--_nys-select-icon-color);
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  :host([width="sm"]) {
    --_nys-select-width: var(--nys-select-form-width-sm, 88px);
  }

  :host([width="md"]) {
    --_nys-select-width: var(--nys-select-form-width-md, 200px);
  }

  :host([width="lg"]) {
    --_nys-select-width: var(--nys-select-form-width-lg, 384px);
  }

  :host([width="full"]) {
    --_nys-select-width: 100%;
    flex: 1; /* stretches width for flex container */
  }

  /* Hover */
  .nys-select__select:hover:not(:disabled) {
    cursor: pointer;
    border: var(--_nys-select-border-hover);
    outline: var(--_nys-select-border-hover);
  }

  /* Focused */
  .nys-select__select:focus {
    border: var(--_nys-select-border-focus);
    outline: var(--_nys-select-border-focus);
  }

  /* When both focus and hover are active, prioritize focus */
  .nys-select__select:focus:hover {
    border: var(--_nys-select-border-focus);
    outline: var(--_nys-select-border-focus);
  }

  /* Disabled */
  .nys-select__select:disabled {
    background-color: var(--_nys-select-bg-disabled-color);
    border: var(--_nys-select-border-disabled);
    cursor: not-allowed;
    color: var(--_nys-select-text-disabled-color);
  }
  .nys-select__select:disabled ~ .nys-select__icon {
    color: var(--_nys-select-icon-disabled-color);
  }

  :host([showError]) {
    --_nys-select-border-default: var(--nys-border-width-sm, 1px) solid
      var(--_nys-select-error-color);
  }
`;
var R6 = Object.defineProperty, O5 = (s, t, e, o) => {
  for (var r = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = i(t, e, r) || r);
  return r && R6(t, e, r), r;
};
class V1 extends p {
  constructor() {
    super(...arguments), this.disabled = !1, this.selected = !1, this.value = "", this.label = "", this.hidden = !1;
  }
  firstUpdated() {
    var e;
    const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("slot");
    t && t.addEventListener("slotchange", () => {
      var r;
      const o = t.assignedNodes({ flatten: !0 });
      o.length > 0 && (this.label = ((r = o[0].textContent) == null ? void 0 : r.trim()) || "");
    });
  }
  render() {
    return c`
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
O5([
  a({ type: Boolean, reflect: !0 })
], V1.prototype, "disabled");
O5([
  a({ type: Boolean, reflect: !0 })
], V1.prototype, "selected");
O5([
  a({ type: String })
], V1.prototype, "value");
O5([
  a({ type: String })
], V1.prototype, "label");
O5([
  a({ type: Boolean, reflect: !0 })
], V1.prototype, "hidden");
customElements.define("nys-option", V1);
var D6 = Object.defineProperty, T6 = Object.getOwnPropertyDescriptor, R = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? T6(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && D6(t, e, r), r;
};
let q6 = 0;
var e1;
const O = (e1 = class extends p {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.label = "", this.description = "", this.value = "", this.disabled = !1, this.required = !1, this.optional = !1, this.form = "", this.showError = !1, this.errorMessage = "", this._width = "md", this._hasUserInteracted = !1, this._internals = this.attachInternals();
  }
  get width() {
    return this._width;
  }
  set width(t) {
    this._width = e1.VALID_WIDTHS.includes(
      t
    ) ? t : "full";
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-select-${Date.now()}-${q6++}`), this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this._setValue(), this._manageRequire();
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.value = "";
  }
  _handleSlotChange() {
    var r, n;
    const t = (r = this.shadowRoot) == null ? void 0 : r.querySelector(
      'slot:not([name="description"])'
    ), e = (n = this.shadowRoot) == null ? void 0 : n.querySelector("select");
    if (!t || !e) return;
    e.querySelectorAll("option:not([hidden])").forEach((i) => i.remove()), t.assignedElements({ flatten: !0 }).forEach((i) => {
      var l;
      if (i instanceof V1) {
        const C = document.createElement("option");
        C.value = i.value, C.textContent = i.label || ((l = i.textContent) == null ? void 0 : l.trim()) || "", C.disabled = i.disabled, C.selected = i.selected, e.appendChild(C);
      }
    });
  }
  /********************** Form Integration **********************/
  _setValue() {
    this._internals.setFormValue(this.value), this._manageRequire();
  }
  _manageRequire() {
    var r;
    const t = (r = this.shadowRoot) == null ? void 0 : r.querySelector("select");
    if (!t) return;
    const e = this.errorMessage || "Please select an option.";
    this.required && !this.value ? (this._internals.ariaRequired = "true", this._internals.setValidity({ valueMissing: !0 }, e, t)) : (this._internals.ariaRequired = "false", this._internals.setValidity({}), this._hasUserInteracted = !1);
  }
  _setValidityMessage(t = "") {
    var o;
    const e = (o = this.shadowRoot) == null ? void 0 : o.querySelector("select");
    e && (this.showError = !!t, this.errorMessage.trim() && t !== "" && (t = this.errorMessage), this._internals.setValidity(
      t ? { customError: !0 } : {},
      t,
      e
    ));
  }
  _validate() {
    var o;
    const t = (o = this.shadowRoot) == null ? void 0 : o.querySelector("select");
    if (!t) return;
    let e = t.validationMessage;
    this._manageRequire(), this._setValidityMessage(e);
  }
  /********************** Functions **********************/
  // This helper function is called to perform the element's native validation.
  checkValidity() {
    var e;
    const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("select");
    return t ? t.checkValidity() : !0;
  }
  _handleInvalid(t) {
    var o;
    t.preventDefault(), this._hasUserInteracted = !0, this._validate(), this.showError = !0;
    const e = (o = this.shadowRoot) == null ? void 0 : o.querySelector("select");
    if (e) {
      const r = this._internals.form;
      r ? Array.from(r.elements).find(
        (l) => typeof l.checkValidity == "function" && !l.checkValidity()
      ) === this && e.focus() : e.focus();
    }
  }
  /******************** Event Handlers ********************/
  // Handle change event to bubble up selected value
  _handleChange(t) {
    const e = t.target;
    this.value = e.value, this._internals.setFormValue(this.value), this._hasUserInteracted && this._validate(), this.dispatchEvent(
      new CustomEvent("change", {
        detail: { value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Handle input changes by update the value as select changes
  _handleInput() {
    this.dispatchEvent(new Event("input"));
  }
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(new Event("focus"));
  }
  // Handle blur event
  _handleBlur() {
    this._hasUserInteracted || (this._hasUserInteracted = !0), this._validate(), this.dispatchEvent(new Event("blur"));
  }
  // Check if the current value matches any option, and if so, set it as selected
  updated(t) {
    var e;
    if (super.updated(t), t.has("value")) {
      const o = (e = this.shadowRoot) == null ? void 0 : e.querySelector("select");
      o && (o.value = this.value);
    }
  }
  render() {
    return c`
      <div class="nys-select">
        <nys-label
          label=${this.label}
          description=${this.description}
          flag=${this.required ? "required" : this.optional ? "optional" : ""}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <div class="nys-select__selectwrapper">
          <select
            class="nys-select__select"
            name=${this.name}
            id=${this.id}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-disabled="${this.disabled}"
            aria-label="${this.label} ${this.description}"
            .value=${this.value}
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
            @change="${this._handleChange}"
            @input="${this._handleInput}"
          >
            <option hidden disabled selected value></option>
          </select>
          <slot
            @slotchange="${this._handleSlotChange}"
            style="display: none;"
          ></slot>
          <nys-icon
            name="chevron_down"
            size="lg"
            class="nys-select__icon"
          ></nys-icon>
        </div>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this._internals.validationMessage || this.errorMessage}
        ></nys-errormessage>
      </div>
    `;
  }
}, e1.VALID_WIDTHS = ["sm", "md", "lg", "full"], e1.styles = I6, e1.formAssociated = !0, e1);
R([
  a({ type: String })
], O.prototype, "id", 2);
R([
  a({ type: String, reflect: !0 })
], O.prototype, "name", 2);
R([
  a({ type: String })
], O.prototype, "label", 2);
R([
  a({ type: String })
], O.prototype, "description", 2);
R([
  a({ type: String })
], O.prototype, "value", 2);
R([
  a({ type: Boolean, reflect: !0 })
], O.prototype, "disabled", 2);
R([
  a({ type: Boolean, reflect: !0 })
], O.prototype, "required", 2);
R([
  a({ type: Boolean, reflect: !0 })
], O.prototype, "optional", 2);
R([
  a({ type: String })
], O.prototype, "form", 2);
R([
  a({ type: Boolean, reflect: !0 })
], O.prototype, "showError", 2);
R([
  a({ type: String })
], O.prototype, "errorMessage", 2);
R([
  a({ reflect: !0 })
], O.prototype, "width", 1);
let N6 = O;
customElements.get("nys-select") || customElements.define("nys-select", N6);
const j6 = v`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Text Input Styles */
    --_nys-textarea-width: 100%;
    --_nys-textarea-radius: var(--nys-radius-md, 4px);
    --_nys-textarea-width-border: var(--nys-border-width-sm, 1px);
    --_nys-textarea-color-border: var(--nys-color-neutral-400, #909395);
    --_nys-textarea-padding: var(--nys-space-100, 8px);
    --_nys-textarea-gap: var(--nys-space-50, 4px);
    --_nys-textarea-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-textarea-placeholder-color: var(
      --nys-color-text-weaker,
      var(--nys-color-neutral-500, #797c7f)
    );

    /* Hovered */
    --_nys-textarea-hover-color-outline: var(--nys-color-neutral-900, #1b1b1b);
    --_nys-textarea-hover-width-outline: var(--nys-border-width-sm, 1px);

    /* Focused */
    --_nys-textarea-focus-color-outline: var(--nys-color-focus, #004dd1);
    --_nys-textarea-focus-width-outline: var(--nys-border-width-sm, 1px);

    /* Disabled */
    --_nys-textarea-disabled-bg-color: var(--nys-color-neutral-10, #f6f6f6);
    --_nys-textarea-disabled-color-border: var(
      --nys-color-neutral-200,
      #bec0c1
    );
    --_nys-textarea-disabled-color-text: var(
      --nys-color-text-disabled,
      var(--nys-color-neutral-200, #bec0c1)
    );

    /* Global Font Styles */
    --_nys-textarea-family-ui: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-textarea-size-ui-md: var(--nys-font-size-ui-md, 16px);
    --_nys-textarea-weight-ui: var(--nys-font-weight-regular, 400);
    --_nys-textarea-lineheight-ui: var(--nys-font-lineheight-ui-md, 24px);
    --nys-textarea-letterspacing-ui: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-textarea-color-ui: var(--nys-color-ink, #1b1b1b);
  }

  :host([width="sm"]) {
    --_nys-textarea-width: var(--nys-form-width-sm, 88px);
  }

  :host([width="md"]) {
    --_nys-textarea-width: var(--nys-form-width-md, 200px);
  }

  :host([width="lg"]) {
    --_nys-textarea-width: var(--nys-form-width-lg, 384px);
  }

  :host([width="full"]) {
    --_nys-textarea-width: 100%;
    flex: 1; /* stretches width for flex container */
  }

  :host([showError]) {
    --_nys-textarea-color-border: var(--nys-color-danger, #b52c2c);
  }

  .nys-textarea {
    font-weight: var(--_nys-textarea-weight-ui);
    font-family: var(--_nys-textarea-family-ui);
    line-height: var(--_nys-textarea-lineheight-ui);
    letter-spacing: var(--nys-textarea-letterspacing-ui);
    color: var(--_nys-textarea-color-ui);
    gap: var(--_nys-textarea-gap);
    display: flex;
    flex-direction: column;
  }

  .nys-textarea__textarea {
    color: var(--_nys-textarea-color);
    font-size: var(--_nys-textarea-size-ui-md);
    border-radius: var(--_nys-textarea-radius);
    border: solid var(--_nys-textarea-color-border)
      var(--_nys-textarea-width-border);
    padding: var(--_nys-textarea-padding);
    width: var(--_nys-textarea-width);
    line-height: var(--_nys-textarea-lineheight-ui);
    min-width: var(--_nys-textarea-width);
    max-width: var(--_nys-textarea-width);
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  .nys-textarea__textarea::placeholder {
    color: var(--_nys-textarea-placeholder-color);
  }

  /* Resize */
  .nys-textarea__textarea.none {
    resize: none;
  }

  /* Hovered */
  .nys-textarea__textarea:hover:not(:disabled):not(:focus) {
    outline: solid var(--_nys-textarea-hover-width-outline)
      var(--_nys-textarea-hover-color-outline);
    border-color: var(--_nys-textarea-hover-color-outline);
  }

  /* Focused */
  .nys-textarea__textarea:focus {
    outline: solid var(--_nys-textarea-focus-width-outline)
      var(--_nys-textarea-focus-color-outline);
    border-color: var(--_nys-textarea-focus-color-outline);
    caret-color: var(--_nys-textarea-focus-color-outline);
  }

  /* Disabled */
  .nys-textarea__textarea:disabled,
  .nys-textarea__textarea:disabled::placeholder {
    background-color: var(--_nys-textarea-disabled-bg-color);
    border-color: var(--_nys-textarea-disabled-color-border);
    color: var(--_nys-textarea-disabled-color-text);
    cursor: not-allowed;
  }
`;
var F6 = Object.defineProperty, G6 = Object.getOwnPropertyDescriptor, V = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? G6(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && F6(t, e, r), r;
};
let W6 = 0;
var D;
const Z = (D = class extends p {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.label = "", this.description = "", this.placeholder = "", this.value = "", this.disabled = !1, this.readonly = !1, this.required = !1, this.optional = !1, this.form = "", this.maxlength = null, this.width = "full", this.rows = 4, this._resize = "vertical", this.showError = !1, this.errorMessage = "", this._hasUserInteracted = !1, this._internals = this.attachInternals();
  }
  get resize() {
    return this._resize;
  }
  set resize(t) {
    this._resize = D.VALID_RESIZE.includes(
      t
    ) ? t : "vertical";
  }
  updated(t) {
    t.has("width") && (this.width = D.VALID_WIDTHS.includes(this.width) ? this.width : "full"), t.has("rows") && (this.rows = this.rows ?? 4);
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-textarea-${Date.now()}-${W6++}`), this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this._setValue(), this._manageRequire();
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.value = "";
  }
  /********************** Form Integration **********************/
  _setValue() {
    this._manageRequire(), this._internals.setFormValue(this.value);
  }
  _manageRequire() {
    var r;
    const t = (r = this.shadowRoot) == null ? void 0 : r.querySelector("textarea");
    if (!t) return;
    const e = this.errorMessage || "This field is required";
    this.required && !this.value ? (this._internals.ariaRequired = "true", this._internals.setValidity({ valueMissing: !0 }, e, t)) : (this._internals.ariaRequired = "false", this._internals.setValidity({}), this._hasUserInteracted = !1);
  }
  _setValidityMessage(t = "") {
    var o;
    const e = (o = this.shadowRoot) == null ? void 0 : o.querySelector("textarea");
    e && (this.showError = !!t, this.errorMessage.trim() && t !== "" && (t = this.errorMessage), this._internals.setValidity(
      t ? { customError: !0 } : {},
      t,
      e
    ));
  }
  _validate() {
    var o;
    const t = (o = this.shadowRoot) == null ? void 0 : o.querySelector("textarea");
    if (!t) return;
    let e = t.validationMessage;
    this._setValidityMessage(e);
  }
  /********************** Functions **********************/
  // This helper function is called to perform the element's native validation.
  checkValidity() {
    var e;
    const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("textarea");
    return t ? t.checkValidity() : !0;
  }
  _handleInvalid(t) {
    var o;
    t.preventDefault(), this._hasUserInteracted = !0, this._validate();
    const e = (o = this.shadowRoot) == null ? void 0 : o.querySelector("textarea");
    if (e) {
      const r = this._internals.form;
      r ? Array.from(r.elements).find(
        (l) => typeof l.checkValidity == "function" && !l.checkValidity()
      ) === this && e.focus() : e.focus();
    }
  }
  /******************** Event Handlers ********************/
  // Handle input event to check pattern validity
  _handleInput(t) {
    const e = t.target;
    this.value = e.value, this._internals.setFormValue(this.value), this._hasUserInteracted && this._validate(), this.dispatchEvent(
      new CustomEvent("input", {
        detail: { value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(new Event("focus"));
  }
  // Handle blur event
  _handleBlur() {
    this._hasUserInteracted || (this._hasUserInteracted = !0), this._validate(), this.dispatchEvent(new Event("blur"));
  }
  // Handle change event to bubble up selected value
  _handleChange() {
    this.dispatchEvent(new Event("change"));
  }
  _handleSelect(t) {
    const e = t.target;
    this.value = e.value, this.dispatchEvent(
      new CustomEvent("select", {
        detail: { value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleSelectionChange(t) {
    const e = t.target;
    this.value = e.value, this.dispatchEvent(
      new CustomEvent("selectionchange", {
        detail: { value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    return c`
      <label class="nys-textarea">
        <nys-label
          label=${this.label}
          description=${this.description}
          flag=${this.required ? "required" : this.optional ? "optional" : ""}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <textarea
          class="nys-textarea__textarea ${this.resize}"
          name=${this.name}
          id=${this.id}
          ?disabled=${this.disabled}
          ?required=${this.required}
          ?readonly=${this.readonly}
          aria-disabled="${this.disabled}"
          .value=${this.value}
          placeholder=${g(
      this.placeholder ? this.placeholder : void 0
    )}
          maxlength=${g(
      this.maxlength !== "" ? this.maxlength : void 0
    )}
          .rows=${this.rows}
          form=${g(this.form || void 0)}
          @input=${this._handleInput}
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
          @change="${this._handleChange}"
          @select="${this._handleSelect}"
          @selectionchange="${this._handleSelectionChange}"
        ></textarea>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this._internals.validationMessage || this.errorMessage}
        ></nys-errormessage>
      </label>
    `;
  }
}, D.VALID_WIDTHS = ["sm", "md", "lg", "full"], D.VALID_RESIZE = ["vertical", "none"], D.styles = j6, D.formAssociated = !0, D);
V([
  a({ type: String })
], Z.prototype, "id", 2);
V([
  a({ type: String, reflect: !0 })
], Z.prototype, "name", 2);
V([
  a({ type: String })
], Z.prototype, "label", 2);
V([
  a({ type: String })
], Z.prototype, "description", 2);
V([
  a({ type: String })
], Z.prototype, "placeholder", 2);
V([
  a({ type: String })
], Z.prototype, "value", 2);
V([
  a({ type: Boolean, reflect: !0 })
], Z.prototype, "disabled", 2);
V([
  a({ type: Boolean, reflect: !0 })
], Z.prototype, "readonly", 2);
V([
  a({ type: Boolean, reflect: !0 })
], Z.prototype, "required", 2);
V([
  a({ type: Boolean, reflect: !0 })
], Z.prototype, "optional", 2);
V([
  a({ type: String })
], Z.prototype, "form", 2);
V([
  a({ type: Number })
], Z.prototype, "maxlength", 2);
V([
  a({ reflect: !0 })
], Z.prototype, "width", 2);
V([
  a({ type: Number })
], Z.prototype, "rows", 2);
V([
  a({ reflect: !0 })
], Z.prototype, "resize", 1);
V([
  a({ type: Boolean, reflect: !0 })
], Z.prototype, "showError", 2);
V([
  a({ type: String })
], Z.prototype, "errorMessage", 2);
let Y6 = Z;
customElements.get("nys-textarea") || customElements.define("nys-textarea", Y6);
const K6 = v`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Text Input Styles */
    --_nys-textinput-width: 100%;
    --_nys-textinput-radius: var(--nys-radius-md, 4px);
    --_nys-textinput-width-border: var(--nys-border-width-sm, 1px);
    --_nys-textinput-color-border: var(--nys-color-neutral-400, #909395);
    --_nys-textinput-text-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-textinput-placeholder-color: var(
      --nys-color-text-weaker,
      var(--nys-color-neutral-500, #797c7f)
    );
    --_nys-textinput-padding: var(--nys-space-100, 8px);
    --_nys-textinput-gap: var(--nys-space-50, 4px);
    --_nys-textinput-background-color: var(
      --nys-color-ink-reverse,
      var(--nys-color-white, #ffffff)
    );
    --_nys-textinput-icon-color: var(
      --nys-color-ink,
      var(--nys-color-neutral-900, #1b1b1b)
    );

    /* Hovered */
    --_nys-textinput-hover-color-outline: var(--nys-color-neutral-900, #1b1b1b);
    --_nys-textinput-hover-width-outline: var(--nys-border-width-sm, 1px);

    /* Focused */
    --_nys-textinput-focus-color-outline: var(--nys-color-focus, #004dd1);
    --_nys-textinput-focus-width-outline: var(--nys-border-width-sm, 1px);

    /* Disabled */
    --_nys-textinput-disabled-color: var(--nys-color-neutral-10, #f6f6f6);
    --_nys-textinput-disabled-color-border: var(
      --nys-color-neutral-200,
      #bec0c1
    );
    --_nys-textinput-disabled-color-text: var(
      --nys-color-text-disabled,
      var(--nys-color-neutral-200, #bec0c1)
    );

    /* Global Font Styles */
    --_nys-textinput-family-ui: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-textinput-size-ui-md: var(--nys-font-size-ui-md, 16px);
    --_nys-textinput-weight-ui: var(--nys-font-weight-regular, 400);
    --_nys-textinput-lineheight-ui: var(--nys-font-lineheight-ui-md, 24px);
    --nys-textinput-letterspacing-ui: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-textinput-color-ui: var(--nys-color-ink, #1b1b1b);
  }

  :host([width="sm"]) {
    --_nys-textinput-width: var(--nys-form-width-sm, 88px);
  }

  :host([width="md"]) {
    --_nys-textinput-width: var(--nys-form-width-md, 200px);
  }

  :host([width="lg"]) {
    --_nys-textinput-width: var(--nys-form-width-lg, 384px);
  }

  :host([width="full"]) {
    --_nys-textinput-width: 100%;
    flex: 1; /* stretches width for flex container */
  }

  :host([showError]) {
    --_nys-textinput-color-border: var(--nys-color-danger, #b52c2c);
  }

  .nys-textinput {
    font-weight: var(--_nys-textinput-weight-ui);
    font-family: var(--_nys-textinput-family-ui);
    line-height: var(--_nys-textinput-lineheight-ui);
    letter-spacing: var(--nys-textinput-letterspacing-ui);
    color: var(--_nys-textinput-color-ui);
    gap: var(--_nys-textinput-gap);
    display: flex;
    flex-direction: column;
  }

  .nys-textinput__input {
    color: var(--_nys-textinput-text-color);
    font-size: var(--_nys-textinput-size-ui-md);
    border-radius: var(--_nys-textinput-radius);
    border: solid var(--_nys-textinput-color-border)
      var(--_nys-textinput-width-border);
    padding: var(--_nys-textinput-padding);
    width: var(--_nys-textinput-width);
    min-width: var(--_nys-textinput-width);
    max-width: var(--_nys-textinput-width);
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    background-color: var(--_nys-textinput-background-color);
  }
  .nys-textinput__input::placeholder {
    color: var(--_nys-textinput-placeholder-color);
  }

  /* This container exist to mainly style the type="password" eye icon */
  .nys-input-container {
    position: relative;
  }
  .eye-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: var(--_nys-textinput-icon-color);
    background-color: var(--_nys-textinput-background-color);
  }

  /* Hovered */
  .nys-textinput__input:hover:not(:disabled):not(:focus) {
    outline: solid var(--_nys-textinput-hover-width-outline)
      var(--_nys-textinput-hover-color-outline);
    border-color: var(--_nys-textinput-hover-color-outline);
  }

  /* Focused */
  .nys-textinput__input:focus {
    outline: solid var(--_nys-textinput-focus-width-outline)
      var(--_nys-textinput-focus-color-outline);
    border-color: var(--_nys-textinput-focus-color-outline);
    caret-color: var(--_nys-textinput-focus-color-outline);
  }

  /* Disabled */
  .nys-textinput__input:disabled,
  .nys-input-container.disabled,
  .nys-input-container.disabled .eye-icon,
  .nys-textinput__input:disabled::placeholder {
    background-color: var(--_nys-textinput-disabled-color);
    border-color: var(--_nys-textinput-disabled-color-border);
    color: var(--_nys-textinput-disabled-color-text);
    cursor: not-allowed;
  }
`;
var J6 = Object.defineProperty, X6 = Object.getOwnPropertyDescriptor, b = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? X6(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && J6(t, e, r), r;
};
let Q6 = 0;
var T;
const f = (T = class extends p {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this._type = "text", this.label = "", this.description = "", this.placeholder = "", this.value = "", this.disabled = !1, this.readonly = !1, this.required = !1, this.optional = !1, this.form = "", this.pattern = "", this.maxlength = null, this.width = "full", this.step = null, this.min = null, this.max = null, this.showError = !1, this.errorMessage = "", this.showPassword = !1, this._originalErrorMessage = "", this._hasUserInteracted = !1, this._internals = this.attachInternals();
  }
  get type() {
    return this._type;
  }
  set type(t) {
    this._type = T.VALID_TYPES.includes(
      t
    ) ? t : "text";
  }
  // Ensure the "width" property is valid after updates
  updated(t) {
    t.has("width") && (this.width = T.VALID_WIDTHS.includes(this.width) ? this.width : "full");
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-textinput-${Date.now()}-${Q6++}`), this._originalErrorMessage = this.errorMessage, this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this._setValue(), this._manageRequire();
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.value = "";
  }
  /********************** Form Integration **********************/
  _setValue() {
    this._internals.setFormValue(this.value), this._manageRequire();
  }
  _manageRequire() {
    var r;
    const t = (r = this.shadowRoot) == null ? void 0 : r.querySelector("input");
    if (!t) return;
    const e = this.errorMessage || "This field is required";
    this.required && (!this.value || this.value.trim() === "") ? (this._internals.ariaRequired = "true", this._internals.setValidity({ valueMissing: !0 }, e, t)) : (this._internals.ariaRequired = "false", this._internals.setValidity({}), this._hasUserInteracted = !1);
  }
  _setValidityMessage(t = "") {
    var r;
    const e = (r = this.shadowRoot) == null ? void 0 : r.querySelector("input");
    if (!e) return;
    this.showError = !!t, this._originalErrorMessage.trim() && t !== "" ? this.errorMessage = this._originalErrorMessage : this.errorMessage = t;
    const o = t ? { customError: !0 } : {};
    this._internals.setValidity(o, this.errorMessage, e);
  }
  _validate() {
    var r;
    const t = (r = this.shadowRoot) == null ? void 0 : r.querySelector("input");
    if (!t) return;
    const e = t.validity;
    let o = "";
    e.valueMissing ? o = "This field is required" : e.typeMismatch ? o = "Invalid format for this type" : e.patternMismatch ? o = "Invalid format" : e.tooShort ? o = `Value is too short. Minimum length is ${t.minLength}` : e.tooLong ? o = `Value is too long. Maximum length is ${t.maxLength}` : e.rangeUnderflow ? o = `Value must be at least ${t.min}` : e.rangeOverflow ? o = `Value must be at most ${t.max}` : e.stepMismatch ? o = "Invalid step value" : o = t.validationMessage, this._setValidityMessage(o);
  }
  /********************** Functions **********************/
  // This helper function is called to perform the element's native validation.
  checkValidity() {
    var e;
    const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("input");
    return t ? t.checkValidity() : !0;
  }
  _handleInvalid(t) {
    var o;
    t.preventDefault(), this._hasUserInteracted = !0, this._validate();
    const e = (o = this.shadowRoot) == null ? void 0 : o.querySelector("input");
    if (e) {
      const r = this._internals.form;
      r ? Array.from(r.elements).find(
        (l) => typeof l.checkValidity == "function" && !l.checkValidity()
      ) === this && e.focus() : e.focus();
    }
  }
  _togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  /******************** Event Handlers ********************/
  // Handle input event to check pattern validity
  _handleInput(t) {
    const e = t.target;
    this.value = e.value, this._internals.setFormValue(this.value), this._hasUserInteracted && this._validate(), this.dispatchEvent(
      new CustomEvent("input", {
        detail: { value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(new Event("focus"));
  }
  // Handle blur event
  _handleBlur() {
    this._hasUserInteracted || (this._hasUserInteracted = !0), this._validate(), this.dispatchEvent(new Event("blur"));
  }
  // Handle change event
  _handleChange() {
    this.dispatchEvent(new Event("change"));
  }
  render() {
    return c`
      <div class="nys-textinput">
        <nys-label
          label=${this.label}
          description=${this.description}
          flag=${this.required ? "required" : this.optional ? "optional" : ""}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <div class="nys-input-container ${this.disabled ? "disabled" : ""}">
          <input
            class="nys-textinput__input"
            type=${this.type === "password" ? this.showPassword ? "text" : "password" : this.type}
            name=${this.name}
            id=${this.id}
            ?disabled=${this.disabled}
            ?required=${this.required}
            ?readonly=${this.readonly}
            aria-disabled="${this.disabled}"
            aria-label="${this.label} ${this.description}"
            .value=${this.value}
            placeholder=${g(
      this.placeholder ? this.placeholder : void 0
    )}
            pattern=${g(this.pattern ? this.pattern : void 0)}
            min=${g(this.min !== "" ? this.min : void 0)}
            maxlength=${g(
      this.maxlength !== "" ? this.maxlength : void 0
    )}
            step=${g(this.step !== "" ? this.step : void 0)}
            max=${g(this.max !== "" ? this.max : void 0)}
            form=${g(this.form ? this.form : void 0)}
            @input=${this._handleInput}
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
            @change="${this._handleChange}"
          />
          ${this.type === "password" ? c`<nys-icon
                class="eye-icon"
                @click=${() => !this.disabled && this._togglePasswordVisibility()}
                name=${this.showPassword ? "visibility_off" : "visibility"}
                size="3xl"
              ></nys-icon>` : ""}
        </div>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this.errorMessage}
        ></nys-errormessage>
      </div>
    `;
  }
}, T.VALID_TYPES = [
  "email",
  "number",
  "password",
  "search",
  "tel",
  "text",
  "url"
], T.VALID_WIDTHS = ["sm", "md", "lg", "full"], T.styles = K6, T.formAssociated = !0, T);
b([
  a({ type: String })
], f.prototype, "id", 2);
b([
  a({ type: String, reflect: !0 })
], f.prototype, "name", 2);
b([
  a({ reflect: !0 })
], f.prototype, "type", 1);
b([
  a({ type: String })
], f.prototype, "label", 2);
b([
  a({ type: String })
], f.prototype, "description", 2);
b([
  a({ type: String })
], f.prototype, "placeholder", 2);
b([
  a({ type: String })
], f.prototype, "value", 2);
b([
  a({ type: Boolean, reflect: !0 })
], f.prototype, "disabled", 2);
b([
  a({ type: Boolean, reflect: !0 })
], f.prototype, "readonly", 2);
b([
  a({ type: Boolean, reflect: !0 })
], f.prototype, "required", 2);
b([
  a({ type: Boolean, reflect: !0 })
], f.prototype, "optional", 2);
b([
  a({ type: String })
], f.prototype, "form", 2);
b([
  a({ type: String })
], f.prototype, "pattern", 2);
b([
  a({ type: Number })
], f.prototype, "maxlength", 2);
b([
  a({ reflect: !0 })
], f.prototype, "width", 2);
b([
  a({ type: Number })
], f.prototype, "step", 2);
b([
  a({ type: Number })
], f.prototype, "min", 2);
b([
  a({ type: Number })
], f.prototype, "max", 2);
b([
  a({ type: Boolean, reflect: !0 })
], f.prototype, "showError", 2);
b([
  a({ type: String })
], f.prototype, "errorMessage", 2);
b([
  x1()
], f.prototype, "showPassword", 2);
let t9 = f;
customElements.get("nys-textinput") || customElements.define("nys-textinput", t9);
const e9 = v`
  :host {
    /* Global Toggle Styles */
    --_nys-toggle-width: var(--nys-font-size-8xl, 44px);
    --_nys-toggle-height: var(--nys-size-300, 24px);
    --_nys-toggle-border-radius: var(--nys-radius-round, 1776px);
    --_nys-toggle-width-border: var(--nys-border-width-md, 2px);
    --_nys-toggle-slider-diameter: var(--nys-font-size-lg, 18px);
    --_nys-toggle-slider-offset: calc(
      (var(--_nys-toggle-height) - var(--_nys-toggle-slider-diameter)) / 2
    );
    --_nys-toggle-slider-checked-translate: calc(
      var(--_nys-toggle-width) - var(--_nys-toggle-slider-diameter) - var(
          --_nys-toggle-slider-offset
        ) -
        2px
    );
    --_nys-toggle-slider-round: var(--nys-radius-round, 1776px);
    /* space between toggle and it's label */
    --_nys-toggle-gap: var(--nys-space-150, 12px);

    --_nys-toggle-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-toggle-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-toggle-font-weight: var(--nys-font-weight-regular, 400);
    --_nys-toggle-line-height: var(--nys-font-lineheight-ui-md, 24px);

    --_nys-toggle-transition-duration: 0.3s;

    /* Focus outline */
    --_nys-toggle-border-focus-color: var(--nys-color-focus, #004dd1);
    --_nys-toggle-border-width-focus: var(--nys-border-width-md, 2px);

    /* Slider colors */
    --_nys-toggle-color-base: var(--nys-color-neutral-500, #797c7f);
    --_nys-toggle-color-base-weak: var(--nys-color-neutral-100, #d0d0ce);
    --_nys-toggle-color-theme: var(
      --nys-color-theme,
      var(--nys-color-state-blue-700, #154973)
    );
    --_nys-toggle-color-neutral: var(--nys-color-neutral-600, #62666a);
    --_nys-toggle-color-neutral-700: var(--nys-color-neutral-700, #4a4d4f);
    --_nys-toggle-color-theme-strong: var(
      --nys-color-theme-strong,
      var(--nys-color-state-blue-800, #0e324f)
    );
    --_nys-toggle-color-theme-stronger: var(
      --nys-color-theme-stronger,
      var(--nys-color-state-blue-900, #081b2b)
    );
    --_nys-toggle-color-ink-reverse: var(
      --nys-color-ink-reverse,
      var(--nys-color-white, #fff)
    );

    /* Font sizes, color, and spacing for labels, descriptions, and icons */
    --_nys-toggle-text-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-toggle-disabled-color: var(
      --nys-color-text-weaker,
      var(--nys-color-neutral-500, #797c7f)
    );
    --_nys-toggle-icon-font-size-xs: var(
      --nys-font-size-body-xs,
      var(--nys-font-size-xs, 12px)
    );
    --_nys-toggle-icon-font-size-sm: var(
      --nys-font-size-body-sm,
      var(--nys-font-size-sm, 14px)
    );
  }

  /* Slotted styling (e.g. HTML <p> tags for descriptions) */
  ::slotted([slot^="description"]) {
    font-style: italic;
    margin: 0;
  }
  slot[name="description"] {
    font-style: italic;
    text-align: left;
    display: flex;
  }

  /* Toggle switch overall container */
  .nys-toggle__content {
    display: flex;
    gap: var(--_nys-toggle-gap);
  }

  /* Label & description text container */
  .nys-toggle__text {
    color: var(--_nys-toggle-text-color);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: var(--_nys-toggle-font-size);
    font-family: var(--_nys-toggle-font-family);
    font-weight: var(--_nys-toggle-font-weight);
    line-height: var(--_nys-toggle-line-height);
  }

  .nys-toggle__content:has(input:disabled) .nys-toggle__text * {
    color: var(--_nys-toggle-disabled-color);
    cursor: not-allowed;
  }

  /* Toggle Switch component */
  .nys-toggle__toggle {
    position: relative;
    display: inline-block;
    width: var(--_nys-toggle-width);
    min-width: var(--_nys-toggle-width);
    max-width: var(--_nys-toggle-width);
    height: var(--_nys-toggle-height);
    min-height: var(--_nys-toggle-height);
    max-height: var(--_nys-toggle-height);
  }

  .nys-toggle__toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    border-radius: var(--_nys-toggle-border-radius);
    outline-offset: var(--_nys-toggle-width-border);
    width: var(--_nys-toggle-width);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--_nys-toggle-color-base);
  }

  .knob {
    content: "";
    position: absolute;
    height: var(--_nys-toggle-slider-diameter);
    width: var(--_nys-toggle-slider-diameter);
    left: var(--_nys-toggle-slider-offset);
    bottom: var(--_nys-toggle-slider-offset);
    border-radius: var(--_nys-toggle-slider-round);
    background-color: var(--_nys-toggle-color-ink-reverse, #fff);
    transition: all var(--_nys-toggle-transition-duration)
      cubic-bezier(0.27, 0.2, 0.25, 1.51);
    overflow: hidden;
    display: flex; /* Center icon inside the knob */
    align-items: center;
    justify-content: center;
  }

  /* Switch BG: Checked */
  input:checked + .slider {
    background-color: var(--_nys-toggle-color-theme, #154973);
  }

  /* Switch BG: Hover */
  .slider:hover {
    background-color: var(--_nys-toggle-color-neutral, #62666a);
  }

  /* Switch BG: Hover + Checked */
  input:checked + .slider:hover {
    background-color: var(--_nys-toggle-color-theme-strong, #0e324f);
  }

  /* Switch Icon color: Hover */
  .slider:hover .knob .toggle-icon {
    color: var(--_nys-toggle-color-neutral, #62666a);
  }

  /* Switch Icon color: Hover + Checked */
  input:checked:not(:disabled) + .slider:hover .knob .toggle-icon {
    color: var(--_nys-toggle-color-theme-strong, #0e324f);
  }

  /* Switch BG: Active */
  input:active:not(:disabled) + .slider {
    background-color: var(--_nys-toggle-color-neutral-700, #4a4d4f);
    outline: solid var(--_nys-toggle-border-width-focus)
      var(--_nys-toggle-border-focus-color);
  }

  /* Switch BG: Active + Checked */
  input:active:checked + .slider {
    background-color: var(--_nys-toggle-color-theme-stronger, #081b2b);
  }

  /* Switch Outline: Focus */
  input:focus + .slider {
    outline: solid var(--_nys-toggle-border-width-focus)
      var(--_nys-toggle-border-focus-color);
  }

  /* Switch Knob: Checked */
  input:checked + .slider .knob {
    transform: translateX(var(--_nys-toggle-slider-checked-translate));
  }

  /* Icon Styling */
  .toggle-icon {
    position: absolute;
    color: var(--_nys-toggle-color-base);
  }
  input:checked + .slider .knob .toggle-icon {
    color: var(--_nys-toggle-color-theme, #154973);
  }
  input:active + .slider .knob .toggle-icon {
    color: var(--_nys-toggle-color-neutral-700, #4a4d4f);
  }
  input:active:checked + .slider .knob .toggle-icon {
    color: var(--_nys-toggle-color-theme-stronger, #081b2b);
  }
  :host([size="sm"]) .toggle-icon {
    font-size: var(--_nys-toggle-icon-font-size-xs);
  }
  :host([size="md"]) .toggle-icon {
    font-size: var(--_nys-toggle-icon-font-size-sm);
  }
  /* If 'cap' is not supported, account for the extra padding from svg due to nys-icon's 'display:inline' */
  @supports not (font-size: 1cap) {
    :host([size="sm"]) .toggle-icon {
      font-size: var(--_nys-toggle-icon-font-size-xs);
    }
    :host([size="md"]) .toggle-icon {
      font-size: calc(var(--_nys-toggle-icon-font-size-sm) - 1px);
    }
  }

  /*** Disabled State ***/
  /* Switch BG: Disabled */
  input:disabled + .slider,
  input:disabled + .slider:hover {
    background-color: var(--_nys-toggle-color-base-weak, #d0d0ce);
    cursor: not-allowed;
  }
  input:disabled + .slider .knob .toggle-icon,
  input:disabled:active + .slider .knob .toggle-icon {
    color: var(--_nys-toggle-color-base-weak, #d0d0ce);
  }

  /* Sizes */
  :host([size="sm"]) {
    --_nys-toggle-width: var(--nys-toggle-font-size-6xl, 36px);
    --_nys-toggle-height: var(--nys-toggle-size-250, 20px);
    --_nys-toggle-slider-diameter: var(--nys-toggle--font-size-md, 16px);
    --_nys-icon-font-size: var(--nys-toggle-font-size-sm, 14px);
    --_nys-toggle-gap: var(--nys-space-100, 8px);
  }

  :host([size="md"]) {
    --_nys-toggle-width: var(--nys-toggle-font-size-8xl, 44px);
    --_nys-toggle-height: var(--nys-toggle-size-300, 24px);
    --_nys-toggle-slider-diameter: var(--nys-toggle-font-size-xl, 20px);
    --_nys-icon-font-size: var(--nys-toggle-font-size-md, 16px);
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --toggle-transition-duration: 0s; /* Disable animation */
    }
  }
`;
var s9 = Object.defineProperty, o9 = Object.getOwnPropertyDescriptor, K = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? o9(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && s9(t, e, r), r;
};
let r9 = 0;
var s1;
const N = (s1 = class extends p {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this.value = "", this.checked = !1, this.disabled = !1, this.noIcon = !1, this.label = "", this.description = "", this._size = "md", this.form = "", this._internals = this.attachInternals();
  }
  get size() {
    return this._size;
  }
  set size(t) {
    this._size = s1.VALID_SIZES.includes(
      t
    ) ? t : "md";
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-toggle-${Date.now()}-${r9++}`);
  }
  /********************** Form Integration **********************/
  // Update the internals whenever `checked` or `value` changes.
  updated(t) {
    (t.has("checked") || t.has("value")) && this._internals.setFormValue(this.checked ? this.value : null);
  }
  /********************** Functions **********************/
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(new Event("focus"));
  }
  // Handle blur event
  _handleBlur() {
    this.dispatchEvent(new Event("blur"));
  }
  _handleChange(t) {
    const { checked: e } = t.target;
    this.checked = e, this.dispatchEvent(
      new CustomEvent("change", {
        detail: { checked: this.checked },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleKeyDown(t) {
    !this.disabled && (t.key === " " || t.key === "Enter") && (t.preventDefault(), this.checked = !this.checked, this.dispatchEvent(
      new CustomEvent("change", {
        detail: { checked: this.checked },
        bubbles: !0,
        composed: !0
      })
    ));
  }
  render() {
    return c`
      <label class="nys-toggle">
        <div class="nys-toggle__content">
          <div class="nys-toggle__toggle">
            <input
              id="${this.id}"
              type="checkbox"
              name="${g(this.name ? this.name : void 0)}"
              .value=${this.value}
              form=${this.form}
              .checked=${this.checked}
              ?disabled=${this.disabled}
              role="switch"
              aria-checked="${this.checked ? "true" : "false"}"
              aria-disabled="${this.disabled ? "true" : "false"}"
              @change=${this._handleChange}
              @focus=${this._handleFocus}
              @blur=${this._handleBlur}
              @keydown=${this._handleKeyDown}
            />
            <span class="slider">
              <div class="knob">
                ${this.noIcon ? "" : c`<nys-icon
                      class="toggle-icon"
                      name="${this.checked ? "check" : "close"}"
                    ></nys-icon>`}
              </div>
            </span>
          </div>
          <div class="nys-toggle__text">
            <div class="nys-toggle__label">${this.label}</div>
            <slot name="description">${this.description}</slot>
          </div>
        </div>
      </label>
    `;
  }
}, s1.VALID_SIZES = ["sm", "md"], s1.styles = e9, s1.formAssociated = !0, s1);
K([
  a({ type: String })
], N.prototype, "id", 2);
K([
  a({ type: String, reflect: !0 })
], N.prototype, "name", 2);
K([
  a({ type: String })
], N.prototype, "value", 2);
K([
  a({ type: Boolean, reflect: !0 })
], N.prototype, "checked", 2);
K([
  a({ type: Boolean, reflect: !0 })
], N.prototype, "disabled", 2);
K([
  a({ type: Boolean })
], N.prototype, "noIcon", 2);
K([
  a({ type: String })
], N.prototype, "label", 2);
K([
  a({ type: String })
], N.prototype, "description", 2);
K([
  a({ reflect: !0 })
], N.prototype, "size", 1);
K([
  a({ type: String })
], N.prototype, "form", 2);
let n9 = N;
customElements.get("nys-toggle") || customElements.define("nys-toggle", n9);
const i9 = v`
  :host {
    /* Global Unav Header Styles */
    --_nys-unavheader-gutter: var(--nys-gutter-xs, 20px);
    --_nys-unavheader-bg-color: var(
      --nys-color-surface,
      var(--nys-color-white, #ffffff)
    );
    --_nys-unavheader-text-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );

    /* Trustbar, Search Bar, and Language */
    --_nys-unavheader-surface-raised-color: var(
      --nys-color-surface-raised,
      var(--nys-color-neutral-10, #f6f6f6)
    );

    /* Typography */
    font-size: var(--nys-font-size-ui-md, 16px);
    font-weight: var(--nys-font-weight-semibold, 600);
    line-height: var(--nys-font-lineheight-ui-md, 24px);
    font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
  }

  .nys-unavheader {
    background-color: var(--_nys-unavheader-bg-color);
    padding: var(--nys-space-100, 8px) var(--_nys-unavheader-gutter);
    display: flex;
    justify-content: center;
  }

  .nys-unavheader__maincontent {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    max-width: 1280px;
  }

  a#nys-unavheader__logolink {
    outline-offset: var(--nys-space-2px, 2px);
  }

  .nys-unavheader__logo svg {
    vertical-align: top;
    height: var(--nys-size-500, 40px);
    width: auto;
  }

  .nys-unavheader__toptrustbar {
    display: flex;
    justify-content: space-between;
    background-color: var(--nys-color-neutral-100, #d0d0ce);
    padding: var(--nys-space-100, 8px) var(--_nys-unavheader-gutter);
    min-height: var(--nys-space-400, 32px);
  }

  .nys-unavheader__left,
  .nys-unavheader__right {
    display: flex;
    align-items: center;
    gap: var(--nys-space-300, 24px);
  }

  #nys-unavheader__translate,
  #nys-unavheader__searchbutton {
    --_nys-button-color-text: var(--nys-color-state-blue-700, #154973);
    --_nys-button-color-text-hover: var(--nys-color-state-blue-700, #154973);
    --_nys-button-color-text-active: var(--nys-color-state-blue-700, #154973);
  }

  .nys-unavheader__iconbutton {
    --_nys-button-width: var(--nys-size-400, 32px);
    --_nys-button-height: var(--nys-size-400, 32px);
    --_nys-button-padding-y: 0;
    --_nys-button-padding-x: 0;
  }

  #nys-unavheader__search {
    width: var(--nys-form-width-md, 200px);
    transition: width 0.5s ease;
  }

  /* Grow size on focus */
  #nys-unavheader__search:focus {
    width: var(--nys-form-width-lg, 384px);
  }

  #nys-unavheader__official {
    width: max-content;
    color: var(--_nys-unavheader-text-color);
  }

  #nys-unavheader__know {
    width: max-content;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: var(--nys-space-50, 4px);

    --_nys-button-height: fit-content;
    --_nys-button-radius: var(--nys-border-radius-md, 4px);
    --_nys-button-padding-y: var(--nys-space-2px, 2px);
    --_nys-button-padding-x: var(--nys-space-50, 4px);
    --_nys-button-text-decoration: underline;
    --_nys-button-color-text: var(--nys-color-link, #004dd1);
    --_nys-button-color-text-hover: var(--nys-color-link-strong, #003ba1);
    --_nys-button-color-text-active: var(--nys-color-link-strongest, #002971);
    --_nys-button-color-bg-hover: var(--nys-color-transparent, #ffffff00);
    --_nys-button-color-bg-active: var(--nys-color-transparent, #ffffff00);

    /* typography */
    --_nys-button-font-size: var(--nys-font-size-ui-xs, 12px);
    --_nys-button-font-weight: var(--nys-font-weight-regular, 400);
    --_nys-button-line-height: var(--nys-font-lineheight-ui-xs, 20px);
    --_nys-button-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
  }

  .nys-unavheader__translatewrapper {
    position: relative;
  }

  .nys-unavheader__trustbar.hide,
  .nys-unavheader__languagelist.hide,
  .nys-unavheader__searchdropdown.hide {
    display: none;
  }

  .nys-unavheader__searchdropdown.show {
    background-color: var(--_nys-unavheader-surface-raised-color);
    padding: var(--nys-space-250, 20px) var(--_nys-unavheader-gutter);
  }

  .nys-unavheader__trustbar.show {
    background-color: var(--_nys-unavheader-surface-raised-color);
    color: var(--_nys-unavheader-text-color);
    display: flex;
    justify-content: center;
    padding: var(--nys-space-400, 32px) var(--_nys-unavheader-gutter);
    margin: auto;
  }

  .nys-unavheader__trustcontent {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: var(--nys-space-400, 24px);
    font-weight: var(--nys-font-weight-regular, 400);
    max-width: 1280px;
  }

  .nys-unavheader__trustcontentmessage {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: var(--nys-space-100, 8px);
    line-height: var(--nys-font-lineheight-ui-md, 32px);
  }

  .nys-unavheader__languagelist.show {
    position: absolute;
    display: flex;
    flex-direction: column;
    min-width: 100%;
    width: max-content;
    z-index: 99999;
    background-color: var(--_nys-unavheader-surface-raised-color);
    color: var(--nys-color-state-blue-700, #154973);
    margin-top: var(--nys-space-150, 12px);
    right: 0;
  }

  a.nys-unavheader__languagelink {
    padding: var(--nys-space-200, 16px) var(--nys-space-250, 20px);
    color: var(--nys-color-state-blue-700, #154973);
    text-decoration: none;
  }

  a.nys-unavheader__languagelink:hover {
    background-color: var(--nys-color-neutral-100, #d0d0ce);
  }

  a.nys-unavheader__languagelink:active {
    background-color: var(--nys-color-neutral-200, #bec0c1);
  }

  /* Breakpoints using NYSDS Grid Guidelines */
  @media (min-width: 0) {
    /* Mobile (XS) */
    :host() {
      --_nys-unavheader-gutter: var(--nys-gutter-xs, 20px);
    }
    .nys-unavheader__officialmessage {
      display: flex;
      flex-direction: column;
      /* Typography */
      font-size: var(--nys-font-size-ui-xs, 12px);
      font-weight: var(--nys-font-weight-regular, 400);
      line-height: var(--nys-font-lineheight-ui-xs, 20px);
      font-family: var(
        --nys-font-family-ui,
        var(
          --nys-font-family-sans,
          "Proxima Nova",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          sans-serif
        )
      );
    }
  }

  @media (min-width: 480px) {
    /* Mobile Large (SM - Above 480px) */
    :host() {
      --_nys-unavheader-gutter: var(--nys-gutter-sm, 20px);
    }
    .nys-unavheader__officialmessage {
      flex-direction: row;
      align-items: center;
      gap: var(--nys-space-100, 8px);
    }
  }

  @media (min-width: 768px) {
    /* Tablet (MD - Above 768px) */
    :host() {
      --_nys-unavheader-gutter: var(--nys-gutter-md, 32px);
    }
    .nys-unavheader__trustcontent {
      flex-direction: row;
    }
  }

  @media (min-width: 1024px) {
    /* Desktop (LG - Above 1024px) */
    :host() {
      --_nys-unavheader-gutter: var(--nys-gutter-lg, 32px);
    }
    .nys-unavheader__languagelist.show {
      margin-top: var(--nys-space-100, 8px);
    }
  }

  @media (min-width: 1280px) {
    /* Desktop Large (XL - Above 1280px) */
    :host {
      --_nys-unavheader-gutter: var(--nys-gutter-xl, 64px);
    }
  }
`, l9 = `<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
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
  <path d="M51.7107 54.9999C51.577 54.9999 51.4335 54.974 51.2939 54.8965C51.085 54.7803 50.9395 54.5876 50.8858 54.3551C50.8233 54.0868 50.8936 53.7868 51.082 53.5116L51.1426 53.4202C51.2041 53.3268 51.2685 53.2354 51.3407 53.1519C51.4218 53.0595 51.5047 52.995 51.5741 52.9493C51.5243 52.6691 51.5418 52.4267 51.5682 52.2061C51.5877 52.0233 51.6346 51.8683 51.6726 51.7451C51.6892 51.6925 51.7058 51.6388 51.7185 51.5812C51.8201 51.145 51.8855 50.7397 51.9206 50.3453C51.9528 49.9916 51.947 49.9846 51.8864 49.9061C51.7 49.6707 51.3847 49.5018 51.0498 49.3229C50.8878 49.2365 50.7286 49.1491 50.5754 49.0557C49.607 48.4536 48.6376 47.8505 47.6701 47.2465L47.3294 47.0339C47.2513 46.9862 47.1147 46.9156 46.9516 46.8282C45.8817 46.2659 45.172 45.8526 45.0539 45.2595C45.0363 45.173 44.9465 44.9644 44.884 44.864C44.8411 44.8611 44.7307 44.8521 44.6546 44.8471C44.3032 44.8183 43.7711 44.7726 43.3484 44.3196C43.2635 44.2272 43.1786 44.1408 43.1005 44.0583C42.5098 43.4443 42.0003 42.9148 41.9329 41.5993C41.9241 41.4275 41.9251 41.2506 41.928 41.0728C41.9339 40.5283 41.927 40.1836 41.7103 39.962C41.6078 39.8567 41.435 39.7862 41.2349 39.7037C40.9889 39.6034 40.7097 39.4881 40.45 39.2686C40.37 39.2 40.2792 39.1007 40.1776 38.9854C40.0712 38.8602 39.9082 38.6724 39.7969 38.6337C38.974 38.3436 37.986 38.3178 36.96 38.3178L3.07245 38.2909C2.85964 38.2909 2.66927 38.3138 2.48477 38.3347C2.07378 38.3823 1.60812 38.437 1.2313 38.0962C0.866192 37.7664 0.815429 37.2607 0.814452 36.8076L0.8125 34.3993C0.8125 34.2722 0.847644 34.147 0.913051 34.0387C1.22544 33.529 1.83265 33.2558 2.3686 33.0144C2.56872 32.924 2.77666 32.8316 2.88795 32.7571C3.17593 32.5623 3.43561 32.302 3.7109 32.0248C3.91688 31.8182 4.13068 31.6046 4.36887 31.4059C4.69786 31.1317 5.07078 30.931 5.43296 30.7372C5.74535 30.5703 6.03821 30.4124 6.24127 30.2395C6.38575 30.1173 6.49216 29.9146 6.61906 29.6792C6.75476 29.4238 6.90998 29.1337 7.15208 28.8804C7.41273 28.6081 7.7427 28.4194 8.03263 28.2535C8.69744 27.871 8.68182 27.8322 8.57736 27.5769C8.52855 27.4577 8.48072 27.3553 8.43972 27.2639C8.24447 26.8357 8.07754 26.4681 8.19078 25.7051C8.2025 25.6306 8.21616 25.5521 8.22983 25.4706C8.25619 25.3325 8.30305 25.0772 8.27571 25.0037C8.27571 25.0037 8.26204 24.9927 8.23471 24.9778C8.21128 24.9659 8.12928 24.9669 8.06875 24.9679C7.87448 24.9659 7.51914 24.9768 7.2497 24.6689C6.98124 24.3629 6.99686 23.9555 7.03982 23.6356C7.08179 23.3127 7.06032 23.1051 7.03982 22.9223C6.95684 22.1453 7.21358 21.7817 8.10097 21.424C10.7524 20.351 12.901 19.9884 14.8613 20.2805C14.9775 20.2974 15.1356 20.2656 15.3182 20.2269C15.5944 20.1702 15.9351 20.1017 16.312 20.1752L18.3952 20.5766C19.2475 20.7415 19.6653 20.9054 20.3047 21.4995C20.6327 21.8046 20.7655 21.7718 21.3327 21.5661C21.6168 21.4638 21.9399 21.3485 22.3323 21.2949C22.9727 21.2084 23.5731 21.2661 24.153 21.3227C24.4136 21.3475 24.6762 21.3734 24.9408 21.3843C25.2356 21.3952 25.6085 21.2561 25.9717 21.121C26.1318 21.0614 26.2889 21.0028 26.4412 20.9541C26.78 20.8468 27.0973 20.7991 27.4038 20.7514C27.5551 20.7266 27.7064 20.7037 27.8607 20.6729C27.8714 20.6531 27.8821 20.6332 27.8939 20.6113C27.9417 20.5249 27.9944 20.4345 28.0598 20.3411C28.3419 19.9497 28.7471 19.7003 29.0722 19.4966L29.2078 19.4122C29.5564 19.1916 29.8629 18.9879 30.105 18.7386C30.5423 18.2796 31.1232 18.3114 31.5108 18.3312C31.6455 18.3392 31.8495 18.3481 31.91 18.3223C32.1678 18.207 31.9413 17.3993 31.8065 16.9165C31.7119 16.5777 31.6299 16.2846 31.6133 16.0183C31.5664 15.2642 31.9764 14.7317 32.3064 14.3045C32.5651 13.9687 32.7213 13.7481 32.7164 13.5355C32.7164 13.4948 32.7027 13.4382 32.6851 13.3845C32.4587 13.4948 32.0955 13.6369 31.6796 13.4421C31.0129 13.1302 30.6468 12.0264 30.8508 11.3985C31.0197 10.8779 31.54 10.5421 31.9198 10.2957L32.0565 10.2053C32.3806 9.98471 32.7242 9.79792 33.0542 9.6181C33.5159 9.36873 33.9513 9.13227 34.2949 8.82726C34.4404 8.69711 34.5761 8.56994 34.7089 8.44376C35.0076 8.1626 35.3161 7.8715 35.6792 7.61319C35.7056 7.5188 35.728 7.34096 35.7437 7.22571C35.7729 7.00714 35.8022 6.78062 35.8803 6.5849C36.2513 5.64304 37.1592 4.90884 37.9597 4.25908C38.2252 4.04448 38.4771 3.84081 38.6743 3.65602C38.7992 3.53878 38.9222 3.42055 39.0452 3.30332C39.6388 2.73701 40.2509 2.15084 40.9967 1.68289C41.601 1.30536 42.3898 0.833439 43.1249 0.552274C44.0972 0.1807 44.5579 0.208518 45.4766 0.262168L45.6474 0.27111C47.3607 0.371455 49.1384 0.32476 50.8575 0.281045C51.7205 0.258194 52.5796 0.235343 53.4347 0.230376C53.6651 0.230376 54.0156 0.185667 54.3836 0.138972C55.6078 -0.0140291 56.994 -0.188888 57.7818 0.503592C58.1118 0.792705 58.2924 1.19806 58.3031 1.67594C58.311 2.05248 58.1567 2.33464 58.0435 2.54129C58.0064 2.60686 57.9527 2.7082 57.9458 2.74297C57.9488 2.73205 57.9849 2.78768 58.0103 2.82742C58.1362 3.01718 58.3686 3.37088 58.2748 3.89843C58.2397 4.10111 58.1811 4.3167 58.1216 4.53528C58.0464 4.81147 57.9693 5.09761 57.9624 5.31419C57.9498 5.69073 57.6335 5.99376 57.2703 5.97289C56.9013 5.95998 56.6104 5.64603 56.6231 5.26849C56.6367 4.89195 56.7392 4.50944 56.831 4.17264C56.8788 3.9948 56.9276 3.82094 56.9569 3.65502C56.9481 3.65502 56.9218 3.62323 56.8993 3.58746C56.791 3.42254 56.6065 3.14535 56.6065 2.73701C56.6065 2.36345 56.7607 2.08328 56.873 1.87862C56.9072 1.81702 56.9589 1.72462 56.9657 1.69084C56.9608 1.58354 56.9267 1.55274 56.9072 1.53685C56.5694 1.23979 55.2544 1.40372 54.5496 1.49313C54.1386 1.5438 53.752 1.59348 53.4435 1.59547C52.5971 1.60043 51.7439 1.62229 50.8907 1.64315C49.1442 1.68886 47.3382 1.73654 45.5722 1.63421L45.3985 1.62328C44.5345 1.57162 44.3022 1.55871 43.5964 1.82894C42.9618 2.07235 42.2101 2.5244 41.7006 2.84431C41.0699 3.23973 40.533 3.75338 39.9648 4.29683C39.8379 4.41804 39.712 4.53925 39.5831 4.65947C39.3479 4.87804 39.0794 5.09661 38.7953 5.32611C38.1237 5.87056 37.3642 6.48555 37.1231 7.09457C37.1065 7.14425 37.085 7.30221 37.0713 7.40753C37.0147 7.84666 36.9424 8.3931 36.5041 8.69016C36.1927 8.90277 35.9145 9.16704 35.6187 9.44523C35.4771 9.57935 35.3317 9.71546 35.1774 9.85257C34.7186 10.2629 34.1924 10.548 33.6838 10.8222C33.3675 10.9931 33.0698 11.1541 32.8033 11.3369C32.7554 11.3707 32.6978 11.4064 32.6373 11.4462C32.5114 11.5276 32.2332 11.7065 32.1346 11.8217C32.1424 11.8992 32.1726 12.0115 32.2117 12.1009C32.3757 12.0214 32.6041 11.924 32.8804 11.9459C33.6633 12.0135 34.0401 12.8937 34.0558 13.4988C34.0743 14.2191 33.677 14.7337 33.3587 15.145C33.0971 15.4868 32.9351 15.7074 32.9487 15.9319C32.9565 16.0511 33.0288 16.3114 33.0932 16.5419C33.3314 17.3933 33.7746 18.978 32.4479 19.5701C32.0965 19.7281 31.7314 19.7082 31.4375 19.6933C31.3126 19.6864 31.1046 19.6764 31.047 19.7023C30.7171 20.051 30.3227 20.3113 29.9166 20.5706L29.7692 20.663C29.5212 20.816 29.2654 20.976 29.1405 21.1488C29.1083 21.1935 29.0819 21.2412 29.0585 21.2859C28.9345 21.5085 28.7256 21.884 28.174 21.9993C27.9827 22.04 27.7943 22.0708 27.6059 22.0996C27.3364 22.1414 27.0807 22.1811 26.8386 22.2566C26.7087 22.2993 26.5711 22.35 26.4334 22.4017C25.9697 22.5745 25.4435 22.7732 24.8871 22.7474C24.5981 22.7355 24.3131 22.7087 24.027 22.6808C23.4989 22.6282 22.9981 22.5805 22.511 22.6481C22.2572 22.6828 22.0258 22.7653 21.7817 22.8537C21.1716 23.0733 20.3369 23.3733 19.4046 22.508C18.9927 22.1265 18.8267 22.049 18.1473 21.9178L16.065 21.5164C15.942 21.4936 15.775 21.5264 15.5818 21.5651C15.3289 21.6168 15.0136 21.6784 14.6719 21.6297C12.9508 21.3724 11.0218 21.7112 8.59689 22.6928C8.49829 22.7325 8.42703 22.7643 8.37431 22.7891C8.39579 22.9779 8.42312 23.2491 8.39091 23.6217C8.53343 23.6416 8.69353 23.6843 8.86047 23.7737C9.81228 24.2834 9.63461 25.256 9.5487 25.724C9.53601 25.7876 9.52528 25.8511 9.51551 25.9127C9.4628 26.2694 9.49501 26.3429 9.65511 26.6917C9.70392 26.798 9.75664 26.9162 9.81326 27.0543C10.3941 28.4681 9.28415 29.1039 8.68865 29.4447C8.46705 29.5719 8.23764 29.701 8.11268 29.8331C7.99944 29.9524 7.89987 30.1372 7.79541 30.3329C7.62945 30.6448 7.44104 30.9975 7.10522 31.2847C6.79088 31.5529 6.41894 31.7536 6.05871 31.9454C5.74144 32.1153 5.44077 32.2762 5.21623 32.464C5.02782 32.6219 4.84527 32.8048 4.65295 32.9985C4.34252 33.3085 4.02524 33.6294 3.62499 33.8976C3.41901 34.0347 3.17203 34.147 2.9104 34.2652C2.69661 34.3606 2.33443 34.5225 2.14992 34.6626L2.15383 36.8096C2.15383 36.8881 2.15578 36.9527 2.15871 37.0023C2.21533 36.9974 2.27586 36.9904 2.32662 36.9835C2.5287 36.9606 2.77959 36.9308 3.06952 36.9308L36.9581 36.9566C38.0573 36.9566 39.2141 36.9884 40.2304 37.3471C40.6755 37.5021 40.9801 37.8538 41.1812 38.0853C41.2281 38.1399 41.2681 38.1896 41.3052 38.2234C41.4018 38.3048 41.5551 38.3674 41.7328 38.441C42.0129 38.5562 42.3615 38.7003 42.6572 39.0043C43.2811 39.6411 43.2713 40.4469 43.2645 41.0927C43.2606 41.2417 43.2606 41.3897 43.2664 41.5328C43.3084 42.3326 43.5261 42.5581 44.0532 43.1055C44.1372 43.1929 44.2251 43.2853 44.3188 43.3847C44.3842 43.4542 44.5287 43.4701 44.761 43.491C45.0412 43.5138 45.3897 43.5417 45.6953 43.7751C46.0291 44.0275 46.2546 44.5888 46.3376 44.8809C46.5455 45.0846 47.2777 45.4711 47.5647 45.6211C47.7639 45.7264 47.9298 45.8158 48.0265 45.8754L48.3672 46.088C49.3346 46.6891 50.3011 47.2922 51.2705 47.8943C51.3993 47.9727 51.533 48.0463 51.6707 48.1188C52.0924 48.3443 52.5698 48.6006 52.9291 49.0567C53.3215 49.5544 53.2942 50.0045 53.259 50.4029C53.3156 50.2936 53.3781 50.1893 53.4513 50.0879C53.5841 49.8982 53.7393 49.7541 53.877 49.626C54.0136 49.4998 54.1073 49.4104 54.1396 49.3388C54.1132 49.2772 54.0527 49.1739 54.0117 49.1034C53.8487 48.8232 53.6271 48.4387 53.7315 47.9857C53.7725 47.8108 53.8789 47.6588 54.0283 47.5634C54.0849 47.5276 54.205 47.4591 54.3631 47.3717C54.5818 47.2495 55.1373 46.9405 55.475 46.71C54.9723 45.5913 55.1392 44.2163 55.2886 42.9843C55.3345 42.6038 55.3784 42.2451 55.3989 41.9222C55.4204 41.5467 55.7337 41.2606 56.1076 41.2834C56.4776 41.3063 56.7588 41.6301 56.7353 42.0057C56.7148 42.3693 56.667 42.7498 56.6182 43.1522C56.4776 44.3166 56.3165 45.637 56.833 46.3911C56.954 46.5669 56.994 46.7895 56.9452 47.0021C56.8417 47.4502 56.3898 47.7879 55.1958 48.4606C55.352 48.7308 55.5395 49.0904 55.4731 49.5167C55.4623 49.5812 55.4487 49.6428 55.4321 49.7015C55.766 49.5793 56.1154 49.464 56.4845 49.3577C57.8775 48.9543 59.3409 48.7745 61.225 48.7745C62.0587 48.7745 62.8006 48.5053 63.5874 48.2211C64.2103 47.9946 64.8546 47.7621 65.576 47.6508C66.1852 47.5555 66.5005 47.7562 66.7728 47.9688C66.8636 48.0403 66.93 48.09 67.0442 48.1357C67.3625 48.2619 67.7325 48.2211 68.1601 48.1754C68.5925 48.1277 69.0836 48.0731 69.5844 48.2042C69.8821 48.2837 70.09 48.5579 70.0861 48.8709C70.0744 50.0571 68.5076 50.5459 67.7549 50.7814L67.0384 51.0099C66.4985 51.1848 65.9567 51.3586 65.41 51.5176C65.1631 51.5881 64.918 51.6587 64.672 51.7223C64.3889 51.7948 64.099 51.9597 63.7944 52.1316C63.481 52.3094 63.1579 52.4922 62.786 52.6174C62.1426 52.83 61.4837 52.9413 60.6471 52.9761C60.4069 52.987 60.1746 53.0943 59.9295 53.2056C59.5674 53.3735 59.1154 53.5801 58.6107 53.4132C58.3949 53.3864 57.5534 53.6775 57.1502 53.8196C56.832 53.9289 56.5577 54.0242 56.3419 54.0759C55.598 54.2528 54.8415 54.3918 54.1103 54.527L53.5968 54.6223C53.1516 54.7058 52.7035 54.7922 52.2613 54.8926L52.2076 54.9085C52.0797 54.9482 51.9021 55.0038 51.7078 55.0038L51.7107 54.9999ZM53.0735 51.6746C53.0569 51.7471 53.0403 51.8196 53.0237 51.8941C53.0032 51.9806 52.9788 52.064 52.9544 52.1455C52.9281 52.2359 52.9066 52.3055 52.8988 52.3651C52.8793 52.5379 52.8773 52.6313 52.8978 52.7247C52.9495 52.9791 52.9388 53.1907 52.8949 53.3645C53.0482 53.3347 53.2024 53.3049 53.3566 53.2751L53.875 53.1808C54.5896 53.0486 55.3296 52.9125 56.0412 52.7436C56.1906 52.7078 56.4483 52.6194 56.7217 52.525C57.7721 52.1604 58.4994 51.9359 59.0295 52.1127C59.0646 52.1058 59.2559 52.0173 59.3828 51.9597C59.7001 51.8137 60.0945 51.6328 60.5924 51.611C61.3021 51.5812 61.8498 51.4908 62.372 51.3169C62.622 51.2345 62.8748 51.0914 63.1442 50.9374C63.5123 50.7298 63.892 50.5142 64.3469 50.3969C64.5793 50.3373 64.8136 50.2707 65.0459 50.2042C65.5789 50.0482 66.11 49.8773 66.6362 49.7064L67.1253 49.5514C66.9388 49.5246 66.7504 49.4779 66.56 49.4014C66.2672 49.2862 66.0836 49.1411 65.9616 49.0457C65.9313 49.0229 65.906 48.999 65.8757 48.9812C65.8737 48.9851 65.8405 48.9851 65.7781 48.9941C65.1845 49.0855 64.6281 49.2862 64.0394 49.4998C63.1794 49.8107 62.293 50.1326 61.2279 50.1326C59.4717 50.1326 58.1235 50.2966 56.8535 50.6642C55.7142 50.992 54.7868 51.3984 54.0166 51.9031C53.7901 52.0521 53.5001 52.0481 53.2776 51.8951C53.1917 51.8365 53.1214 51.76 53.0735 51.6716V51.6746Z" fill="#457AA5"/>
  <path d="M67.6348 51.8019C67.6348 51.8019 67.6173 51.782 67.6173 51.7303C67.6173 51.6787 67.6348 51.6588 67.6348 51.6588H68.5564C68.5564 51.6588 68.5749 51.6806 68.5749 51.7303C68.5749 51.78 68.5564 51.8019 68.5564 51.8019H68.1932V52.9205C68.1932 52.9205 68.1659 52.9404 68.0976 52.9404C68.0292 52.9404 67.998 52.9205 67.998 52.9205V51.8019H67.6348Z" fill="#457AA5"/>
  <path d="M69.4282 52.8659C69.4135 52.8748 69.3891 52.8858 69.3471 52.8858C69.3178 52.8858 69.2837 52.8798 69.27 52.8659L68.9889 52.1476C68.9723 52.1088 68.9459 52.0323 68.944 52.0214C68.944 52.0264 68.9371 52.1277 68.9332 52.1565L68.8815 52.9205C68.8815 52.9205 68.8561 52.9404 68.7858 52.9404C68.7155 52.9404 68.6862 52.9205 68.6862 52.9205L68.7839 51.6787C68.7839 51.6787 68.8112 51.6588 68.8776 51.6588C68.9518 51.6588 68.9781 51.6787 68.9781 51.6787L69.3042 52.5162L69.3471 52.6533C69.3481 52.6473 69.3774 52.5559 69.392 52.5162L69.7181 51.6787C69.7181 51.6787 69.7464 51.6588 69.8206 51.6588C69.886 51.6588 69.9124 51.6787 69.9124 51.6787L70.01 52.9205C70.01 52.9205 69.9807 52.9404 69.9104 52.9404C69.8401 52.9404 69.8167 52.9205 69.8167 52.9205L69.763 52.1546L69.7523 52.0194C69.7523 52.0194 69.722 52.1148 69.7093 52.1456L69.4282 52.8659Z" fill="#457AA5"/>
</svg>`;
/*!
   * ▒█▄░▒█ ▒█░░▒█ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 
   * ▒█▒█▒█ ▒█▄▄▄█ ░▀▀▀▄▄ ▒█░▒█ ░▀▀▀▄▄ 
   * ▒█░░▀█ ░░▒█░░ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█
   * 
   * TextInput Component v1.1.1
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G5 = globalThis, W2 = G5.ShadowRoot && (G5.ShadyCSS === void 0 || G5.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, N3 = Symbol(), K7 = /* @__PURE__ */ new WeakMap();
let a9 = class {
  constructor(s, t, e) {
    if (this._$cssResult$ = !0, e !== N3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = s, this.t = t;
  }
  get styleSheet() {
    let s = this.o;
    const t = this.t;
    if (W2 && s === void 0) {
      const e = t !== void 0 && t.length === 1;
      e && (s = K7.get(t)), s === void 0 && ((this.o = s = new CSSStyleSheet()).replaceSync(this.cssText), e && K7.set(t, s));
    }
    return s;
  }
  toString() {
    return this.cssText;
  }
};
const C9 = (s) => new a9(typeof s == "string" ? s : s + "", void 0, N3), c9 = (s, t) => {
  if (W2) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const o = document.createElement("style"), r = G5.litNonce;
    r !== void 0 && o.setAttribute("nonce", r), o.textContent = e.cssText, s.appendChild(o);
  }
}, J7 = W2 ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const o of t.cssRules) e += o.cssText;
  return C9(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: h9, defineProperty: d9, getOwnPropertyDescriptor: p9, getOwnPropertyNames: u9, getOwnPropertySymbols: v9, getPrototypeOf: y9 } = Object, R1 = globalThis, X7 = R1.trustedTypes, g9 = X7 ? X7.emptyScript : "", Q7 = R1.reactiveElementPolyfillSupport, V5 = (s, t) => s, l2 = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? g9 : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, Y2 = (s, t) => !h9(s, t), t3 = { attribute: !0, type: String, converter: l2, reflect: !1, hasChanged: Y2 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), R1.litPropertyMetadata ?? (R1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let u5 = class extends HTMLElement {
  static addInitializer(s) {
    this._$Ei(), (this.l ?? (this.l = [])).push(s);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(s, t = t3) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(s, t), !t.noAccessor) {
      const e = Symbol(), o = this.getPropertyDescriptor(s, e, t);
      o !== void 0 && d9(this.prototype, s, o);
    }
  }
  static getPropertyDescriptor(s, t, e) {
    const { get: o, set: r } = p9(this.prototype, s) ?? { get() {
      return this[t];
    }, set(n) {
      this[t] = n;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(n) {
      const i = o == null ? void 0 : o.call(this);
      r.call(this, n), this.requestUpdate(s, i, e);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(s) {
    return this.elementProperties.get(s) ?? t3;
  }
  static _$Ei() {
    if (this.hasOwnProperty(V5("elementProperties"))) return;
    const s = y9(this);
    s.finalize(), s.l !== void 0 && (this.l = [...s.l]), this.elementProperties = new Map(s.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(V5("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(V5("properties"))) {
      const t = this.properties, e = [...u9(t), ...v9(t)];
      for (const o of e) this.createProperty(o, t[o]);
    }
    const s = this[Symbol.metadata];
    if (s !== null) {
      const t = litPropertyMetadata.get(s);
      if (t !== void 0) for (const [e, o] of t) this.elementProperties.set(e, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, e] of this.elementProperties) {
      const o = this._$Eu(t, e);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s) {
    const t = [];
    if (Array.isArray(s)) {
      const e = new Set(s.flat(1 / 0).reverse());
      for (const o of e) t.unshift(J7(o));
    } else s !== void 0 && t.push(J7(s));
    return t;
  }
  static _$Eu(s, t) {
    const e = t.attribute;
    return e === !1 ? void 0 : typeof e == "string" ? e : typeof s == "string" ? s.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var s;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (s = this.constructor.l) == null || s.forEach((t) => t(this));
  }
  addController(s) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(s), this.renderRoot !== void 0 && this.isConnected && ((t = s.hostConnected) == null || t.call(s));
  }
  removeController(s) {
    var t;
    (t = this._$EO) == null || t.delete(s);
  }
  _$E_() {
    const s = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const e of t.keys()) this.hasOwnProperty(e) && (s.set(e, this[e]), delete this[e]);
    s.size > 0 && (this._$Ep = s);
  }
  createRenderRoot() {
    const s = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return c9(s, this.constructor.elementStyles), s;
  }
  connectedCallback() {
    var s;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (s = this._$EO) == null || s.forEach((t) => {
      var e;
      return (e = t.hostConnected) == null ? void 0 : e.call(t);
    });
  }
  enableUpdating(s) {
  }
  disconnectedCallback() {
    var s;
    (s = this._$EO) == null || s.forEach((t) => {
      var e;
      return (e = t.hostDisconnected) == null ? void 0 : e.call(t);
    });
  }
  attributeChangedCallback(s, t, e) {
    this._$AK(s, e);
  }
  _$EC(s, t) {
    var e;
    const o = this.constructor.elementProperties.get(s), r = this.constructor._$Eu(s, o);
    if (r !== void 0 && o.reflect === !0) {
      const n = (((e = o.converter) == null ? void 0 : e.toAttribute) !== void 0 ? o.converter : l2).toAttribute(t, o.type);
      this._$Em = s, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$Em = null;
    }
  }
  _$AK(s, t) {
    var e;
    const o = this.constructor, r = o._$Eh.get(s);
    if (r !== void 0 && this._$Em !== r) {
      const n = o.getPropertyOptions(r), i = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((e = n.converter) == null ? void 0 : e.fromAttribute) !== void 0 ? n.converter : l2;
      this._$Em = r, this[r] = i.fromAttribute(t, n.type), this._$Em = null;
    }
  }
  requestUpdate(s, t, e) {
    if (s !== void 0) {
      if (e ?? (e = this.constructor.getPropertyOptions(s)), !(e.hasChanged ?? Y2)(this[s], t)) return;
      this.P(s, t, e);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(s, t, e) {
    this._$AL.has(s) || this._$AL.set(s, t), e.reflect === !0 && this._$Em !== s && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(s);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const s = this.scheduleUpdate();
    return s != null && await s, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [r, n] of o) n.wrapped !== !0 || this._$AL.has(r) || this[r] === void 0 || this.P(r, this[r], n);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((o) => {
        var r;
        return (r = o.hostUpdate) == null ? void 0 : r.call(o);
      }), this.update(e)) : this._$EU();
    } catch (o) {
      throw t = !1, this._$EU(), o;
    }
    t && this._$AE(e);
  }
  willUpdate(s) {
  }
  _$AE(s) {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostUpdated) == null ? void 0 : o.call(e);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(s)), this.updated(s);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(s) {
    return !0;
  }
  update(s) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(s) {
  }
  firstUpdated(s) {
  }
};
u5.elementStyles = [], u5.shadowRootOptions = { mode: "open" }, u5[V5("elementProperties")] = /* @__PURE__ */ new Map(), u5[V5("finalized")] = /* @__PURE__ */ new Map(), Q7 == null || Q7({ ReactiveElement: u5 }), (R1.reactiveElementVersions ?? (R1.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const f9 = { attribute: !0, type: String, converter: l2, reflect: !1, hasChanged: Y2 }, w9 = (s = f9, t, e) => {
  const { kind: o, metadata: r } = e;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), n.set(e.name, s), o === "accessor") {
    const { name: i } = e;
    return { set(l) {
      const C = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(i, C, s);
    }, init(l) {
      return l !== void 0 && this.P(i, void 0, s), l;
    } };
  }
  if (o === "setter") {
    const { name: i } = e;
    return function(l) {
      const C = this[i];
      t.call(this, l), this.requestUpdate(i, C, s);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function m(s) {
  return (t, e) => typeof e == "object" ? w9(s, t, e) : ((o, r, n) => {
    const i = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, i ? { ...o, wrapped: !0 } : o), i ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(s, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function _9(s) {
  return m({ ...s, state: !0, attribute: !1 });
}
const b9 = v`
  :host {
    /* Anything that can be overridden should be defined here */

    /* Global Text Input Styles */
    --_nys-textinput-width: 100%;
    --_nys-textinput-radius: var(--nys-radius-md, 4px);
    --_nys-textinput-width-border: var(--nys-border-width-sm, 1px);
    --_nys-textinput-color-border: var(--nys-color-neutral-400, #909395);
    --_nys-textinput-text-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-textinput-placeholder-color: var(
      --nys-color-text-weaker,
      var(--nys-color-neutral-500, #797c7f)
    );
    --_nys-textinput-padding: var(--nys-space-100, 8px);
    --_nys-textinput-gap: var(--nys-space-50, 4px);
    --_nys-textinput-background-color: var(
      --nys-color-ink-reverse,
      var(--nys-color-white, #ffffff)
    );
    --_nys-textinput-icon-color: var(
      --nys-color-ink,
      var(--nys-color-neutral-900, #1b1b1b)
    );

    /* Hovered */
    --_nys-textinput-hover-color-outline: var(--nys-color-neutral-900, #1b1b1b);
    --_nys-textinput-hover-width-outline: var(--nys-border-width-sm, 1px);

    /* Focused */
    --_nys-textinput-focus-color-outline: var(--nys-color-focus, #004dd1);
    --_nys-textinput-focus-width-outline: var(--nys-border-width-sm, 1px);

    /* Disabled */
    --_nys-textinput-disabled-color: var(--nys-color-neutral-10, #f6f6f6);
    --_nys-textinput-disabled-color-border: var(
      --nys-color-neutral-200,
      #bec0c1
    );
    --_nys-textinput-disabled-color-text: var(
      --nys-color-text-disabled,
      var(--nys-color-neutral-200, #bec0c1)
    );

    /* Global Font Styles */
    --_nys-textinput-family-ui: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-textinput-size-ui-md: var(--nys-font-size-ui-md, 16px);
    --_nys-textinput-weight-ui: var(--nys-font-weight-regular, 400);
    --_nys-textinput-lineheight-ui: var(--nys-font-lineheight-ui-md, 24px);
    --nys-textinput-letterspacing-ui: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-textinput-color-ui: var(--nys-color-ink, #1b1b1b);
  }

  :host([width="sm"]) {
    --_nys-textinput-width: var(--nys-form-width-sm, 88px);
  }

  :host([width="md"]) {
    --_nys-textinput-width: var(--nys-form-width-md, 200px);
  }

  :host([width="lg"]) {
    --_nys-textinput-width: var(--nys-form-width-lg, 384px);
  }

  :host([width="full"]) {
    --_nys-textinput-width: 100%;
    flex: 1; /* stretches width for flex container */
  }

  :host([showError]) {
    --_nys-textinput-color-border: var(--nys-color-danger, #b52c2c);
  }

  .nys-textinput {
    font-weight: var(--_nys-textinput-weight-ui);
    font-family: var(--_nys-textinput-family-ui);
    line-height: var(--_nys-textinput-lineheight-ui);
    letter-spacing: var(--nys-textinput-letterspacing-ui);
    color: var(--_nys-textinput-color-ui);
    gap: var(--_nys-textinput-gap);
    display: flex;
    flex-direction: column;
  }

  .nys-textinput__input {
    color: var(--_nys-textinput-text-color);
    font-size: var(--_nys-textinput-size-ui-md);
    border-radius: var(--_nys-textinput-radius);
    border: solid var(--_nys-textinput-color-border)
      var(--_nys-textinput-width-border);
    padding: var(--_nys-textinput-padding);
    width: var(--_nys-textinput-width);
    min-width: var(--_nys-textinput-width);
    max-width: var(--_nys-textinput-width);
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    background-color: var(--_nys-textinput-background-color);
  }
  .nys-textinput__input::placeholder {
    color: var(--_nys-textinput-placeholder-color);
  }

  /* This container exist to mainly style the type="password" eye icon */
  .nys-input-container {
    position: relative;
  }
  .eye-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: var(--_nys-textinput-icon-color);
    background-color: var(--_nys-textinput-background-color);
  }

  /* Hovered */
  .nys-textinput__input:hover:not(:disabled):not(:focus) {
    outline: solid var(--_nys-textinput-hover-width-outline)
      var(--_nys-textinput-hover-color-outline);
    border-color: var(--_nys-textinput-hover-color-outline);
  }

  /* Focused */
  .nys-textinput__input:focus {
    outline: solid var(--_nys-textinput-focus-width-outline)
      var(--_nys-textinput-focus-color-outline);
    border-color: var(--_nys-textinput-focus-color-outline);
    caret-color: var(--_nys-textinput-focus-color-outline);
  }

  /* Disabled */
  .nys-textinput__input:disabled,
  .nys-input-container.disabled,
  .nys-input-container.disabled .eye-icon,
  .nys-textinput__input:disabled::placeholder {
    background-color: var(--_nys-textinput-disabled-color);
    border-color: var(--_nys-textinput-disabled-color-border);
    color: var(--_nys-textinput-disabled-color-text);
    cursor: not-allowed;
  }
`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const a2 = globalThis, C2 = a2.trustedTypes, e3 = C2 ? C2.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, j3 = "$lit$", C1 = `lit$${Math.random().toFixed(9).slice(2)}$`, F3 = "?" + C1, m9 = `<${F3}>`, m1 = document, c2 = () => m1.createComment(""), z5 = (s) => s === null || typeof s != "object" && typeof s != "function", K2 = Array.isArray, x9 = (s) => K2(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function", M2 = `[ 	
\f\r]`, v5 = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, s3 = /-->/g, o3 = />/g, y1 = RegExp(`>|${M2}(?:([^\\s"'>=/]+)(${M2}*=${M2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), r3 = /'/g, n3 = /"/g, G3 = /^(?:script|style|textarea|title)$/i, B5 = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), i3 = /* @__PURE__ */ new WeakMap(), w1 = m1.createTreeWalker(m1, 129);
function W3(s, t) {
  if (!K2(s) || !s.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return e3 !== void 0 ? e3.createHTML(t) : t;
}
const L9 = (s, t) => {
  const e = s.length - 1, o = [];
  let r, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", i = v5;
  for (let l = 0; l < e; l++) {
    const C = s[l];
    let u, d, h = -1, _ = 0;
    for (; _ < C.length && (i.lastIndex = _, d = i.exec(C), d !== null); ) _ = i.lastIndex, i === v5 ? d[1] === "!--" ? i = s3 : d[1] !== void 0 ? i = o3 : d[2] !== void 0 ? (G3.test(d[2]) && (r = RegExp("</" + d[2], "g")), i = y1) : d[3] !== void 0 && (i = y1) : i === y1 ? d[0] === ">" ? (i = r ?? v5, h = -1) : d[1] === void 0 ? h = -2 : (h = i.lastIndex - d[2].length, u = d[1], i = d[3] === void 0 ? y1 : d[3] === '"' ? n3 : r3) : i === n3 || i === r3 ? i = y1 : i === s3 || i === o3 ? i = v5 : (i = y1, r = void 0);
    const L = i === y1 && s[l + 1].startsWith("/>") ? " " : "";
    n += i === v5 ? C + m9 : h >= 0 ? (o.push(u), C.slice(0, h) + j3 + C.slice(h) + C1 + L) : C + C1 + (h === -2 ? l : L);
  }
  return [W3(s, n + (s[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), o];
};
let H2 = class Y3 {
  constructor({ strings: t, _$litType$: e }, o) {
    let r;
    this.parts = [];
    let n = 0, i = 0;
    const l = t.length - 1, C = this.parts, [u, d] = L9(t, e);
    if (this.el = Y3.createElement(u, o), w1.currentNode = this.el.content, e === 2 || e === 3) {
      const h = this.el.content.firstChild;
      h.replaceWith(...h.childNodes);
    }
    for (; (r = w1.nextNode()) !== null && C.length < l; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const h of r.getAttributeNames()) if (h.endsWith(j3)) {
          const _ = d[i++], L = r.getAttribute(h).split(C1), J = /([.?@])?(.*)/.exec(_);
          C.push({ type: 1, index: n, name: J[2], strings: L, ctor: J[1] === "." ? M9 : J[1] === "?" ? Z9 : J[1] === "@" ? V9 : b2 }), r.removeAttribute(h);
        } else h.startsWith(C1) && (C.push({ type: 6, index: n }), r.removeAttribute(h));
        if (G3.test(r.tagName)) {
          const h = r.textContent.split(C1), _ = h.length - 1;
          if (_ > 0) {
            r.textContent = C2 ? C2.emptyScript : "";
            for (let L = 0; L < _; L++) r.append(h[L], c2()), w1.nextNode(), C.push({ type: 2, index: ++n });
            r.append(h[_], c2());
          }
        }
      } else if (r.nodeType === 8) if (r.data === F3) C.push({ type: 2, index: n });
      else {
        let h = -1;
        for (; (h = r.data.indexOf(C1, h + 1)) !== -1; ) C.push({ type: 7, index: n }), h += C1.length - 1;
      }
      n++;
    }
  }
  static createElement(t, e) {
    const o = m1.createElement("template");
    return o.innerHTML = t, o;
  }
};
function D1(s, t, e = s, o) {
  var r, n;
  if (t === B5) return t;
  let i = o !== void 0 ? (r = e._$Co) == null ? void 0 : r[o] : e._$Cl;
  const l = z5(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== l && ((n = i == null ? void 0 : i._$AO) == null || n.call(i, !1), l === void 0 ? i = void 0 : (i = new l(s), i._$AT(s, e, o)), o !== void 0 ? (e._$Co ?? (e._$Co = []))[o] = i : e._$Cl = i), i !== void 0 && (t = D1(s, i._$AS(s, t.values), i, o)), t;
}
let $9 = class {
  constructor(s, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = s, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(s) {
    const { el: { content: t }, parts: e } = this._$AD, o = ((s == null ? void 0 : s.creationScope) ?? m1).importNode(t, !0);
    w1.currentNode = o;
    let r = w1.nextNode(), n = 0, i = 0, l = e[0];
    for (; l !== void 0; ) {
      if (n === l.index) {
        let C;
        l.type === 2 ? C = new K3(r, r.nextSibling, this, s) : l.type === 1 ? C = new l.ctor(r, l.name, l.strings, this, s) : l.type === 6 && (C = new H9(r, this, s)), this._$AV.push(C), l = e[++i];
      }
      n !== (l == null ? void 0 : l.index) && (r = w1.nextNode(), n++);
    }
    return w1.currentNode = m1, o;
  }
  p(s) {
    let t = 0;
    for (const e of this._$AV) e !== void 0 && (e.strings !== void 0 ? (e._$AI(s, e, t), t += e.strings.length - 2) : e._$AI(s[t])), t++;
  }
}, K3 = class J3 {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, o, r) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = o, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = D1(this, t, e), z5(t) ? t === M || t == null || t === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : t !== this._$AH && t !== B5 && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : x9(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== M && z5(this._$AH) ? this._$AA.nextSibling.data = t : this.T(m1.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var e;
    const { values: o, _$litType$: r } = t, n = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = H2.createElement(W3(r.h, r.h[0]), this.options)), r);
    if (((e = this._$AH) == null ? void 0 : e._$AD) === n) this._$AH.p(o);
    else {
      const i = new $9(n, this), l = i.u(this.options);
      i.p(o), this.T(l), this._$AH = i;
    }
  }
  _$AC(t) {
    let e = i3.get(t.strings);
    return e === void 0 && i3.set(t.strings, e = new H2(t)), e;
  }
  k(t) {
    K2(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let o, r = 0;
    for (const n of t) r === e.length ? e.push(o = new J3(this.O(c2()), this.O(c2()), this, this.options)) : o = e[r], o._$AI(n), r++;
    r < e.length && (this._$AR(o && o._$AB.nextSibling, r), e.length = r);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var o;
    for ((o = this._$AP) == null ? void 0 : o.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const r = t.nextSibling;
      t.remove(), t = r;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}, b2 = class {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(s, t, e, o, r) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = s, this.name = t, this._$AM = o, this.options = r, e.length > 2 || e[0] !== "" || e[1] !== "" ? (this._$AH = Array(e.length - 1).fill(new String()), this.strings = e) : this._$AH = M;
  }
  _$AI(s, t = this, e, o) {
    const r = this.strings;
    let n = !1;
    if (r === void 0) s = D1(this, s, t, 0), n = !z5(s) || s !== this._$AH && s !== B5, n && (this._$AH = s);
    else {
      const i = s;
      let l, C;
      for (s = r[0], l = 0; l < r.length - 1; l++) C = D1(this, i[e + l], t, l), C === B5 && (C = this._$AH[l]), n || (n = !z5(C) || C !== this._$AH[l]), C === M ? s = M : s !== M && (s += (C ?? "") + r[l + 1]), this._$AH[l] = C;
    }
    n && !o && this.j(s);
  }
  j(s) {
    s === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, s ?? "");
  }
}, M9 = class extends b2 {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(s) {
    this.element[this.name] = s === M ? void 0 : s;
  }
}, Z9 = class extends b2 {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(s) {
    this.element.toggleAttribute(this.name, !!s && s !== M);
  }
}, V9 = class extends b2 {
  constructor(s, t, e, o, r) {
    super(s, t, e, o, r), this.type = 5;
  }
  _$AI(s, t = this) {
    if ((s = D1(this, s, t, 0) ?? M) === B5) return;
    const e = this._$AH, o = s === M && e !== M || s.capture !== e.capture || s.once !== e.once || s.passive !== e.passive, r = s !== M && (e === M || o);
    o && this.element.removeEventListener(this.name, this, e), r && this.element.addEventListener(this.name, this, s), this._$AH = s;
  }
  handleEvent(s) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, s) : this._$AH.handleEvent(s);
  }
}, H9 = class {
  constructor(s, t, e) {
    this.element = s, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = e;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(s) {
    D1(this, s);
  }
};
const l3 = a2.litHtmlPolyfillSupport;
l3 == null || l3(H2, K3), (a2.litHtmlVersions ?? (a2.litHtmlVersions = [])).push("3.2.1");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const g1 = (s) => s ?? M;
/*!
   * ▒█▄░▒█ ▒█░░▒█ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 
   * ▒█▒█▒█ ▒█▄▄▄█ ░▀▀▀▄▄ ▒█░▒█ ░▀▀▀▄▄ 
   * ▒█░░▀█ ░░▒█░░ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█
   * 
   * Icon Component v1.1.1
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W5 = globalThis, J2 = W5.ShadowRoot && (W5.ShadyCSS === void 0 || W5.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, X3 = Symbol(), a3 = /* @__PURE__ */ new WeakMap();
let S9 = class {
  constructor(s, t, e) {
    if (this._$cssResult$ = !0, e !== X3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = s, this.t = t;
  }
  get styleSheet() {
    let s = this.o;
    const t = this.t;
    if (J2 && s === void 0) {
      const e = t !== void 0 && t.length === 1;
      e && (s = a3.get(t)), s === void 0 && ((this.o = s = new CSSStyleSheet()).replaceSync(this.cssText), e && a3.set(t, s));
    }
    return s;
  }
  toString() {
    return this.cssText;
  }
};
const E9 = (s) => new S9(typeof s == "string" ? s : s + "", void 0, X3), k9 = (s, t) => {
  if (J2) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const o = document.createElement("style"), r = W5.litNonce;
    r !== void 0 && o.setAttribute("nonce", r), o.textContent = e.cssText, s.appendChild(o);
  }
}, C3 = J2 ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const o of t.cssRules) e += o.cssText;
  return E9(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: A9, defineProperty: P9, getOwnPropertyDescriptor: z9, getOwnPropertyNames: B9, getOwnPropertySymbols: U9, getPrototypeOf: O9 } = Object, T1 = globalThis, c3 = T1.trustedTypes, I9 = c3 ? c3.emptyScript : "", h3 = T1.reactiveElementPolyfillSupport, H5 = (s, t) => s, h2 = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? I9 : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, X2 = (s, t) => !A9(s, t), d3 = { attribute: !0, type: String, converter: h2, reflect: !1, hasChanged: X2 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), T1.litPropertyMetadata ?? (T1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let y5 = class extends HTMLElement {
  static addInitializer(s) {
    this._$Ei(), (this.l ?? (this.l = [])).push(s);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(s, t = d3) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(s, t), !t.noAccessor) {
      const e = Symbol(), o = this.getPropertyDescriptor(s, e, t);
      o !== void 0 && P9(this.prototype, s, o);
    }
  }
  static getPropertyDescriptor(s, t, e) {
    const { get: o, set: r } = z9(this.prototype, s) ?? { get() {
      return this[t];
    }, set(n) {
      this[t] = n;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(n) {
      const i = o == null ? void 0 : o.call(this);
      r.call(this, n), this.requestUpdate(s, i, e);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(s) {
    return this.elementProperties.get(s) ?? d3;
  }
  static _$Ei() {
    if (this.hasOwnProperty(H5("elementProperties"))) return;
    const s = O9(this);
    s.finalize(), s.l !== void 0 && (this.l = [...s.l]), this.elementProperties = new Map(s.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(H5("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(H5("properties"))) {
      const t = this.properties, e = [...B9(t), ...U9(t)];
      for (const o of e) this.createProperty(o, t[o]);
    }
    const s = this[Symbol.metadata];
    if (s !== null) {
      const t = litPropertyMetadata.get(s);
      if (t !== void 0) for (const [e, o] of t) this.elementProperties.set(e, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, e] of this.elementProperties) {
      const o = this._$Eu(t, e);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s) {
    const t = [];
    if (Array.isArray(s)) {
      const e = new Set(s.flat(1 / 0).reverse());
      for (const o of e) t.unshift(C3(o));
    } else s !== void 0 && t.push(C3(s));
    return t;
  }
  static _$Eu(s, t) {
    const e = t.attribute;
    return e === !1 ? void 0 : typeof e == "string" ? e : typeof s == "string" ? s.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var s;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (s = this.constructor.l) == null || s.forEach((t) => t(this));
  }
  addController(s) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(s), this.renderRoot !== void 0 && this.isConnected && ((t = s.hostConnected) == null || t.call(s));
  }
  removeController(s) {
    var t;
    (t = this._$EO) == null || t.delete(s);
  }
  _$E_() {
    const s = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const e of t.keys()) this.hasOwnProperty(e) && (s.set(e, this[e]), delete this[e]);
    s.size > 0 && (this._$Ep = s);
  }
  createRenderRoot() {
    const s = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return k9(s, this.constructor.elementStyles), s;
  }
  connectedCallback() {
    var s;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (s = this._$EO) == null || s.forEach((t) => {
      var e;
      return (e = t.hostConnected) == null ? void 0 : e.call(t);
    });
  }
  enableUpdating(s) {
  }
  disconnectedCallback() {
    var s;
    (s = this._$EO) == null || s.forEach((t) => {
      var e;
      return (e = t.hostDisconnected) == null ? void 0 : e.call(t);
    });
  }
  attributeChangedCallback(s, t, e) {
    this._$AK(s, e);
  }
  _$EC(s, t) {
    var e;
    const o = this.constructor.elementProperties.get(s), r = this.constructor._$Eu(s, o);
    if (r !== void 0 && o.reflect === !0) {
      const n = (((e = o.converter) == null ? void 0 : e.toAttribute) !== void 0 ? o.converter : h2).toAttribute(t, o.type);
      this._$Em = s, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$Em = null;
    }
  }
  _$AK(s, t) {
    var e;
    const o = this.constructor, r = o._$Eh.get(s);
    if (r !== void 0 && this._$Em !== r) {
      const n = o.getPropertyOptions(r), i = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((e = n.converter) == null ? void 0 : e.fromAttribute) !== void 0 ? n.converter : h2;
      this._$Em = r, this[r] = i.fromAttribute(t, n.type), this._$Em = null;
    }
  }
  requestUpdate(s, t, e) {
    if (s !== void 0) {
      if (e ?? (e = this.constructor.getPropertyOptions(s)), !(e.hasChanged ?? X2)(this[s], t)) return;
      this.P(s, t, e);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(s, t, e) {
    this._$AL.has(s) || this._$AL.set(s, t), e.reflect === !0 && this._$Em !== s && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(s);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const s = this.scheduleUpdate();
    return s != null && await s, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [r, n] of o) n.wrapped !== !0 || this._$AL.has(r) || this[r] === void 0 || this.P(r, this[r], n);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((o) => {
        var r;
        return (r = o.hostUpdate) == null ? void 0 : r.call(o);
      }), this.update(e)) : this._$EU();
    } catch (o) {
      throw t = !1, this._$EU(), o;
    }
    t && this._$AE(e);
  }
  willUpdate(s) {
  }
  _$AE(s) {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostUpdated) == null ? void 0 : o.call(e);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(s)), this.updated(s);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(s) {
    return !0;
  }
  update(s) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(s) {
  }
  firstUpdated(s) {
  }
};
y5.elementStyles = [], y5.shadowRootOptions = { mode: "open" }, y5[H5("elementProperties")] = /* @__PURE__ */ new Map(), y5[H5("finalized")] = /* @__PURE__ */ new Map(), h3 == null || h3({ ReactiveElement: y5 }), (T1.reactiveElementVersions ?? (T1.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R9 = { attribute: !0, type: String, converter: h2, reflect: !1, hasChanged: X2 }, D9 = (s = R9, t, e) => {
  const { kind: o, metadata: r } = e;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), n.set(e.name, s), o === "accessor") {
    const { name: i } = e;
    return { set(l) {
      const C = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(i, C, s);
    }, init(l) {
      return l !== void 0 && this.P(i, void 0, s), l;
    } };
  }
  if (o === "setter") {
    const { name: i } = e;
    return function(l) {
      const C = this[i];
      t.call(this, l), this.requestUpdate(i, C, s);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function t5(s) {
  return (t, e) => typeof e == "object" ? D9(s, t, e) : ((o, r, n) => {
    const i = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, i ? { ...o, wrapped: !0 } : o), i ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(s, t, e);
}
const T9 = {
  // --------- UX Team Main Library (below) --------- //
  // *** CORE *** //
  account_circle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M3.85 15.1C4.7 14.45 5.65 13.9375 6.7 13.5625C7.75 13.1875 8.85 13 10 13C11.15 13 12.25 13.1875 13.3 13.5625C14.35 13.9375 15.3 14.45 16.15 15.1C16.7333 14.4167 17.1875 13.6417 17.5125 12.775C17.8375 11.9083 18 10.9833 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.9833 2.1625 11.9083 2.4875 12.775C2.8125 13.6417 3.26667 14.4167 3.85 15.1ZM10 11C9.01667 11 8.1875 10.6625 7.5125 9.9875C6.8375 9.3125 6.5 8.48333 6.5 7.5C6.5 6.51667 6.8375 5.6875 7.5125 5.0125C8.1875 4.3375 9.01667 4 10 4C10.9833 4 11.8125 4.3375 12.4875 5.0125C13.1625 5.6875 13.5 6.51667 13.5 7.5C13.5 8.48333 13.1625 9.3125 12.4875 9.9875C11.8125 10.6625 10.9833 11 10 11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  calendar_month: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V1C3 0.716667 3.09583 0.479167 3.2875 0.2875C3.47917 0.0958333 3.71667 0 4 0C4.28333 0 4.52083 0.0958333 4.7125 0.2875C4.90417 0.479167 5 0.716667 5 1V2H13V1C13 0.716667 13.0958 0.479167 13.2875 0.2875C13.4792 0.0958333 13.7167 0 14 0C14.2833 0 14.5208 0.0958333 14.7125 0.2875C14.9042 0.479167 15 0.716667 15 1V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6ZM9 12C8.71667 12 8.47917 11.9042 8.2875 11.7125C8.09583 11.5208 8 11.2833 8 11C8 10.7167 8.09583 10.4792 8.2875 10.2875C8.47917 10.0958 8.71667 10 9 10C9.28333 10 9.52083 10.0958 9.7125 10.2875C9.90417 10.4792 10 10.7167 10 11C10 11.2833 9.90417 11.5208 9.7125 11.7125C9.52083 11.9042 9.28333 12 9 12ZM5 12C4.71667 12 4.47917 11.9042 4.2875 11.7125C4.09583 11.5208 4 11.2833 4 11C4 10.7167 4.09583 10.4792 4.2875 10.2875C4.47917 10.0958 4.71667 10 5 10C5.28333 10 5.52083 10.0958 5.7125 10.2875C5.90417 10.4792 6 10.7167 6 11C6 11.2833 5.90417 11.5208 5.7125 11.7125C5.52083 11.9042 5.28333 12 5 12ZM13 12C12.7167 12 12.4792 11.9042 12.2875 11.7125C12.0958 11.5208 12 11.2833 12 11C12 10.7167 12.0958 10.4792 12.2875 10.2875C12.4792 10.0958 12.7167 10 13 10C13.2833 10 13.5208 10.0958 13.7125 10.2875C13.9042 10.4792 14 10.7167 14 11C14 11.2833 13.9042 11.5208 13.7125 11.7125C13.5208 11.9042 13.2833 12 13 12ZM9 16C8.71667 16 8.47917 15.9042 8.2875 15.7125C8.09583 15.5208 8 15.2833 8 15C8 14.7167 8.09583 14.4792 8.2875 14.2875C8.47917 14.0958 8.71667 14 9 14C9.28333 14 9.52083 14.0958 9.7125 14.2875C9.90417 14.4792 10 14.7167 10 15C10 15.2833 9.90417 15.5208 9.7125 15.7125C9.52083 15.9042 9.28333 16 9 16ZM5 16C4.71667 16 4.47917 15.9042 4.2875 15.7125C4.09583 15.5208 4 15.2833 4 15C4 14.7167 4.09583 14.4792 4.2875 14.2875C4.47917 14.0958 4.71667 14 5 14C5.28333 14 5.52083 14.0958 5.7125 14.2875C5.90417 14.4792 6 14.7167 6 15C6 15.2833 5.90417 15.5208 5.7125 15.7125C5.52083 15.9042 5.28333 16 5 16ZM13 16C12.7167 16 12.4792 15.9042 12.2875 15.7125C12.0958 15.5208 12 15.2833 12 15C12 14.7167 12.0958 14.4792 12.2875 14.2875C12.4792 14.0958 12.7167 14 13 14C13.2833 14 13.5208 14.0958 13.7125 14.2875C13.9042 14.4792 14 14.7167 14 15C14 15.2833 13.9042 15.5208 13.7125 15.7125C13.5208 15.9042 13.2833 16 13 16Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  cancel: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 11.4L12.9 14.3C13.0833 14.4833 13.3167 14.575 13.6 14.575C13.8833 14.575 14.1167 14.4833 14.3 14.3C14.4833 14.1167 14.575 13.8833 14.575 13.6C14.575 13.3167 14.4833 13.0833 14.3 12.9L11.4 10L14.3 7.1C14.4833 6.91667 14.575 6.68333 14.575 6.4C14.575 6.11667 14.4833 5.88333 14.3 5.7C14.1167 5.51667 13.8833 5.425 13.6 5.425C13.3167 5.425 13.0833 5.51667 12.9 5.7L10 8.6L7.1 5.7C6.91667 5.51667 6.68333 5.425 6.4 5.425C6.11667 5.425 5.88333 5.51667 5.7 5.7C5.51667 5.88333 5.425 6.11667 5.425 6.4C5.425 6.68333 5.51667 6.91667 5.7 7.1L8.6 10L5.7 12.9C5.51667 13.0833 5.425 13.3167 5.425 13.6C5.425 13.8833 5.51667 14.1167 5.7 14.3C5.88333 14.4833 6.11667 14.575 6.4 14.575C6.68333 14.575 6.91667 14.4833 7.1 14.3L10 11.4ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
  <path d="M5.5565 9.1625L14.0315 0.687501C14.2315 0.487501 14.4648 0.387501 14.7315 0.387501C14.9982 0.387501 15.2315 0.487501 15.4315 0.687501C15.6315 0.887501 15.7315 1.125 15.7315 1.4C15.7315 1.675 15.6315 1.9125 15.4315 2.1125L6.2565 11.3125C6.0565 11.5125 5.82317 11.6125 5.5565 11.6125C5.28983 11.6125 5.0565 11.5125 4.8565 11.3125L0.556499 7.0125C0.356499 6.8125 0.260666 6.575 0.268999 6.3C0.277333 6.025 0.381499 5.7875 0.581499 5.5875C0.781499 5.3875 1.019 5.2875 1.294 5.2875C1.569 5.2875 1.8065 5.3875 2.0065 5.5875L5.5565 9.1625Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M7 8.4L2.1 13.3C1.91667 13.4833 1.68334 13.575 1.4 13.575C1.11667 13.575 0.883336 13.4833 0.700003 13.3C0.51667 13.1167 0.425003 12.8833 0.425003 12.6C0.425003 12.3167 0.51667 12.0833 0.700003 11.9L5.6 7L0.700003 2.1C0.51667 1.91667 0.425003 1.68334 0.425003 1.4C0.425003 1.11667 0.51667 0.883336 0.700003 0.700003C0.883336 0.51667 1.11667 0.425003 1.4 0.425003C1.68334 0.425003 1.91667 0.51667 2.1 0.700003L7 5.6L11.9 0.700003C12.0833 0.51667 12.3167 0.425003 12.6 0.425003C12.8833 0.425003 13.1167 0.51667 13.3 0.700003C13.4833 0.883336 13.575 1.11667 13.575 1.4C13.575 1.68334 13.4833 1.91667 13.3 2.1L8.4 7L13.3 11.9C13.4833 12.0833 13.575 12.3167 13.575 12.6C13.575 12.8833 13.4833 13.1167 13.3 13.3C13.1167 13.4833 12.8833 13.575 12.6 13.575C12.3167 13.575 12.0833 13.4833 11.9 13.3L7 8.4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8 11.575C7.86667 11.575 7.74167 11.5542 7.625 11.5125C7.50833 11.4708 7.4 11.4 7.3 11.3L3.7 7.7C3.5 7.5 3.40417 7.26667 3.4125 7C3.42083 6.73333 3.51667 6.5 3.7 6.3C3.9 6.1 4.1375 5.99583 4.4125 5.9875C4.6875 5.97917 4.925 6.075 5.125 6.275L7 8.15V1C7 0.716667 7.09583 0.479167 7.2875 0.2875C7.47917 0.0958333 7.71667 0 8 0C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1V8.15L10.875 6.275C11.075 6.075 11.3125 5.97917 11.5875 5.9875C11.8625 5.99583 12.1 6.1 12.3 6.3C12.4833 6.5 12.5792 6.73333 12.5875 7C12.5958 7.26667 12.5 7.5 12.3 7.7L8.7 11.3C8.6 11.4 8.49167 11.4708 8.375 11.5125C8.25833 11.5542 8.13333 11.575 8 11.575ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11C1.28333 11 1.52083 11.0958 1.7125 11.2875C1.90417 11.4792 2 11.7167 2 12V14H14V12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0958 14.7167 11 15 11C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  download_done: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M5.544 8.95L13.994 0.499997C14.194 0.299997 14.4315 0.199997 14.7065 0.199997C14.9815 0.199997 15.219 0.299997 15.419 0.499997C15.619 0.699997 15.719 0.937497 15.719 1.2125C15.719 1.4875 15.619 1.725 15.419 1.925L6.244 11.1C6.044 11.3 5.81067 11.4 5.544 11.4C5.27733 11.4 5.044 11.3 4.844 11.1L0.568998 6.825C0.368998 6.625 0.273165 6.3875 0.281498 6.1125C0.289832 5.8375 0.393998 5.6 0.593998 5.4C0.793998 5.2 1.0315 5.1 1.3065 5.1C1.5815 5.1 1.819 5.2 2.019 5.4L5.544 8.95ZM1.994 15.8C1.71066 15.8 1.47317 15.7042 1.2815 15.5125C1.08983 15.3208 0.993998 15.0833 0.993998 14.8C0.993998 14.5167 1.08983 14.2792 1.2815 14.0875C1.47317 13.8958 1.71066 13.8 1.994 13.8H13.994C14.2773 13.8 14.5148 13.8958 14.7065 14.0875C14.8982 14.2792 14.994 14.5167 14.994 14.8C14.994 15.0833 14.8982 15.3208 14.7065 15.5125C14.5148 15.7042 14.2773 15.8 13.994 15.8H1.994Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  drive_folder_upload: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
  <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H7.175C7.44167 0 7.69583 0.05 7.9375 0.15C8.17917 0.25 8.39167 0.391667 8.575 0.575L10 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM2 14H18V4H9.175L7.175 2H2V14ZM10 13C10.2833 13 10.5208 12.9042 10.7125 12.7125C10.9042 12.5208 11 12.2833 11 12V8.8L11.9 9.7C12.0833 9.88333 12.3167 9.975 12.6 9.975C12.8833 9.975 13.1167 9.88333 13.3 9.7C13.4833 9.51667 13.575 9.28333 13.575 9C13.575 8.71667 13.4833 8.48333 13.3 8.3L10.7 5.7C10.5 5.5 10.2667 5.4 10 5.4C9.73333 5.4 9.5 5.5 9.3 5.7L6.7 8.3C6.51667 8.48333 6.425 8.71667 6.425 9C6.425 9.28333 6.51667 9.51667 6.7 9.7C6.88333 9.88333 7.11667 9.975 7.4 9.975C7.68333 9.975 7.91667 9.88333 8.1 9.7L9 8.8V12C9 12.2833 9.09583 12.5208 9.2875 12.7125C9.47917 12.9042 9.71667 13 10 13Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  edit_square: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
  <path d="M2 21.0125C1.45 21.0125 0.979167 20.8167 0.5875 20.425C0.195833 20.0333 0 19.5625 0 19.0125V5.0125C0 4.4625 0.195833 3.99167 0.5875 3.6C0.979167 3.20834 1.45 3.0125 2 3.0125H8.525C8.85833 3.0125 9.10833 3.11667 9.275 3.325C9.44167 3.53334 9.525 3.7625 9.525 4.0125C9.525 4.2625 9.4375 4.49167 9.2625 4.7C9.0875 4.90834 8.83333 5.0125 8.5 5.0125H2V19.0125H16V12.4875C16 12.1542 16.1042 11.9042 16.3125 11.7375C16.5208 11.5708 16.75 11.4875 17 11.4875C17.25 11.4875 17.4792 11.5708 17.6875 11.7375C17.8958 11.9042 18 12.1542 18 12.4875V19.0125C18 19.5625 17.8042 20.0333 17.4125 20.425C17.0208 20.8167 16.55 21.0125 16 21.0125H2ZM6 14.0125V11.5875C6 11.3208 6.05 11.0667 6.15 10.825C6.25 10.5833 6.39167 10.3708 6.575 10.1875L15.175 1.5875C15.375 1.3875 15.6 1.2375 15.85 1.1375C16.1 1.0375 16.35 0.987503 16.6 0.987503C16.8667 0.987503 17.1208 1.0375 17.3625 1.1375C17.6042 1.2375 17.825 1.3875 18.025 1.5875L19.425 3.0125C19.6083 3.2125 19.75 3.43334 19.85 3.675C19.95 3.91667 20 4.1625 20 4.4125C20 4.6625 19.9542 4.90834 19.8625 5.15C19.7708 5.39167 19.625 5.6125 19.425 5.8125L10.825 14.4125C10.6417 14.5958 10.4292 14.7417 10.1875 14.85C9.94583 14.9583 9.69167 15.0125 9.425 15.0125H7C6.71667 15.0125 6.47917 14.9167 6.2875 14.725C6.09583 14.5333 6 14.2958 6 14.0125ZM8 13.0125H9.4L15.2 7.2125L14.5 6.5125L13.775 5.8125L8 11.5875V13.0125Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  help: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.95 16C10.3 16 10.5958 15.8792 10.8375 15.6375C11.0792 15.3958 11.2 15.1 11.2 14.75C11.2 14.4 11.0792 14.1042 10.8375 13.8625C10.5958 13.6208 10.3 13.5 9.95 13.5C9.6 13.5 9.30417 13.6208 9.0625 13.8625C8.82083 14.1042 8.7 14.4 8.7 14.75C8.7 15.1 8.82083 15.3958 9.0625 15.6375C9.30417 15.8792 9.6 16 9.95 16ZM9.05 12.15H10.9C10.9 11.6 10.9625 11.1667 11.0875 10.85C11.2125 10.5333 11.5667 10.1 12.15 9.55C12.5833 9.11667 12.925 8.70417 13.175 8.3125C13.425 7.92083 13.55 7.45 13.55 6.9C13.55 5.96667 13.2083 5.25 12.525 4.75C11.8417 4.25 11.0333 4 10.1 4C9.15 4 8.37917 4.25 7.7875 4.75C7.19583 5.25 6.78333 5.85 6.55 6.55L8.2 7.2C8.28333 6.9 8.47083 6.575 8.7625 6.225C9.05417 5.875 9.5 5.7 10.1 5.7C10.6333 5.7 11.0333 5.84583 11.3 6.1375C11.5667 6.42917 11.7 6.75 11.7 7.1C11.7 7.43333 11.6 7.74583 11.4 8.0375C11.2 8.32917 10.95 8.6 10.65 8.85C9.91667 9.5 9.46667 9.99167 9.3 10.325C9.13333 10.6583 9.05 11.2667 9.05 12.15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  language: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 20C8.63333 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3667 0 10C0 8.61667 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.63333 0 10 0C11.3833 0 12.6792 0.2625 13.8875 0.7875C15.0958 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90417 19.2125 6.1125C19.7375 7.32083 20 8.61667 20 10C20 11.3667 19.7375 12.6583 19.2125 13.875C18.6875 15.0917 17.9708 16.1542 17.0625 17.0625C16.1542 17.9708 15.0958 18.6875 13.8875 19.2125C12.6792 19.7375 11.3833 20 10 20ZM10 17.95C10.4333 17.35 10.8083 16.725 11.125 16.075C11.4417 15.425 11.7 14.7333 11.9 14H8.1C8.3 14.7333 8.55833 15.425 8.875 16.075C9.19167 16.725 9.56667 17.35 10 17.95ZM7.4 17.55C7.1 17 6.8375 16.4292 6.6125 15.8375C6.3875 15.2458 6.2 14.6333 6.05 14H3.1C3.58333 14.8333 4.1875 15.5583 4.9125 16.175C5.6375 16.7917 6.46667 17.25 7.4 17.55ZM12.6 17.55C13.5333 17.25 14.3625 16.7917 15.0875 16.175C15.8125 15.5583 16.4167 14.8333 16.9 14H13.95C13.8 14.6333 13.6125 15.2458 13.3875 15.8375C13.1625 16.4292 12.9 17 12.6 17.55ZM2.25 12H5.65C5.6 11.6667 5.5625 11.3375 5.5375 11.0125C5.5125 10.6875 5.5 10.35 5.5 10C5.5 9.65 5.5125 9.3125 5.5375 8.9875C5.5625 8.6625 5.6 8.33333 5.65 8H2.25C2.16667 8.33333 2.10417 8.6625 2.0625 8.9875C2.02083 9.3125 2 9.65 2 10C2 10.35 2.02083 10.6875 2.0625 11.0125C2.10417 11.3375 2.16667 11.6667 2.25 12ZM7.65 12H12.35C12.4 11.6667 12.4375 11.3375 12.4625 11.0125C12.4875 10.6875 12.5 10.35 12.5 10C12.5 9.65 12.4875 9.3125 12.4625 8.9875C12.4375 8.6625 12.4 8.33333 12.35 8H7.65C7.6 8.33333 7.5625 8.6625 7.5375 8.9875C7.5125 9.3125 7.5 9.65 7.5 10C7.5 10.35 7.5125 10.6875 7.5375 11.0125C7.5625 11.3375 7.6 11.6667 7.65 12ZM14.35 12H17.75C17.8333 11.6667 17.8958 11.3375 17.9375 11.0125C17.9792 10.6875 18 10.35 18 10C18 9.65 17.9792 9.3125 17.9375 8.9875C17.8958 8.6625 17.8333 8.33333 17.75 8H14.35C14.4 8.33333 14.4375 8.6625 14.4625 8.9875C14.4875 9.3125 14.5 9.65 14.5 10C14.5 10.35 14.4875 10.6875 14.4625 11.0125C14.4375 11.3375 14.4 11.6667 14.35 12ZM13.95 6H16.9C16.4167 5.16667 15.8125 4.44167 15.0875 3.825C14.3625 3.20833 13.5333 2.75 12.6 2.45C12.9 3 13.1625 3.57083 13.3875 4.1625C13.6125 4.75417 13.8 5.36667 13.95 6ZM8.1 6H11.9C11.7 5.26667 11.4417 4.575 11.125 3.925C10.8083 3.275 10.4333 2.65 10 2.05C9.56667 2.65 9.19167 3.275 8.875 3.925C8.55833 4.575 8.3 5.26667 8.1 6ZM3.1 6H6.05C6.2 5.36667 6.3875 4.75417 6.6125 4.1625C6.8375 3.57083 7.1 3 7.4 2.45C6.46667 2.75 5.6375 3.20833 4.9125 3.825C4.1875 4.44167 3.58333 5.16667 3.1 6Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
  <path d="M1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10H17C17.2833 10 17.5208 10.0958 17.7125 10.2875C17.9042 10.4792 18 10.7167 18 11C18 11.2833 17.9042 11.5208 17.7125 11.7125C17.5208 11.9042 17.2833 12 17 12H1ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H17C17.2833 5 17.5208 5.09583 17.7125 5.2875C17.9042 5.47917 18 5.71667 18 6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7H1ZM1 2C0.716667 2 0.479167 1.90417 0.2875 1.7125C0.0958333 1.52083 0 1.28333 0 1C0 0.716667 0.0958333 0.479167 0.2875 0.2875C0.479167 0.0958333 0.716667 0 1 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1C18 1.28333 17.9042 1.52083 17.7125 1.7125C17.5208 1.90417 17.2833 2 17 2H1Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  more_vert: `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16" fill="none">
  <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14C0 13.45 0.195833 12.9792 0.5875 12.5875C0.979167 12.1958 1.45 12 2 12C2.55 12 3.02083 12.1958 3.4125 12.5875C3.80417 12.9792 4 13.45 4 14C4 14.55 3.80417 15.0208 3.4125 15.4125C3.02083 15.8042 2.55 16 2 16ZM2 10C1.45 10 0.979167 9.80417 0.5875 9.4125C0.195833 9.02083 0 8.55 0 8C0 7.45 0.195833 6.97917 0.5875 6.5875C0.979167 6.19583 1.45 6 2 6C2.55 6 3.02083 6.19583 3.4125 6.5875C3.80417 6.97917 4 7.45 4 8C4 8.55 3.80417 9.02083 3.4125 9.4125C3.02083 9.80417 2.55 10 2 10ZM2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  open_in_new: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H8C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1C9 1.28333 8.90417 1.52083 8.7125 1.7125C8.52083 1.90417 8.28333 2 8 2H2V16H16V10C16 9.71667 16.0958 9.47917 16.2875 9.2875C16.4792 9.09583 16.7167 9 17 9C17.2833 9 17.5208 9.09583 17.7125 9.2875C17.9042 9.47917 18 9.71667 18 10V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM16 3.4L7.4 12C7.21667 12.1833 6.98333 12.275 6.7 12.275C6.41667 12.275 6.18333 12.1833 6 12C5.81667 11.8167 5.725 11.5833 5.725 11.3C5.725 11.0167 5.81667 10.7833 6 10.6L14.6 2H12C11.7167 2 11.4792 1.90417 11.2875 1.7125C11.0958 1.52083 11 1.28333 11 1C11 0.716667 11.0958 0.479167 11.2875 0.2875C11.4792 0.0958333 11.7167 0 12 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1V6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7C16.7167 7 16.4792 6.90417 16.2875 6.7125C16.0958 6.52083 16 6.28333 16 6V3.4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  publish: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M7 7.85L5.125 9.725C4.925 9.925 4.6875 10.0208 4.4125 10.0125C4.1375 10.0042 3.9 9.9 3.7 9.7C3.51667 9.5 3.42083 9.26667 3.4125 9C3.40417 8.73333 3.5 8.5 3.7 8.3L7.3 4.7C7.4 4.6 7.50833 4.52917 7.625 4.4875C7.74167 4.44583 7.86667 4.425 8 4.425C8.13333 4.425 8.25833 4.44583 8.375 4.4875C8.49167 4.52917 8.6 4.6 8.7 4.7L12.3 8.3C12.5 8.5 12.5958 8.73333 12.5875 9C12.5792 9.26667 12.4833 9.5 12.3 9.7C12.1 9.9 11.8625 10.0042 11.5875 10.0125C11.3125 10.0208 11.075 9.925 10.875 9.725L9 7.85V15C9 15.2833 8.90417 15.5208 8.7125 15.7125C8.52083 15.9042 8.28333 16 8 16C7.71667 16 7.47917 15.9042 7.2875 15.7125C7.09583 15.5208 7 15.2833 7 15V7.85ZM0 4V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V4C16 4.28333 15.9042 4.52083 15.7125 4.7125C15.5208 4.90417 15.2833 5 15 5C14.7167 5 14.4792 4.90417 14.2875 4.7125C14.0958 4.52083 14 4.28333 14 4V2H2V4C2 4.28333 1.90417 4.52083 1.7125 4.7125C1.52083 4.90417 1.28333 5 1 5C0.716667 5 0.479167 4.90417 0.2875 4.7125C0.0958333 4.52083 0 4.28333 0 4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M6.71249 13.2125C4.89583 13.2125 3.35833 12.5833 2.09999 11.325C0.841661 10.0667 0.212494 8.52917 0.212494 6.7125C0.212494 4.89583 0.841661 3.35834 2.09999 2.1C3.35833 0.841668 4.89583 0.212502 6.71249 0.212502C8.52916 0.212502 10.0667 0.841668 11.325 2.1C12.5833 3.35834 13.2125 4.89583 13.2125 6.7125C13.2125 7.44584 13.0958 8.1375 12.8625 8.7875C12.6292 9.4375 12.3125 10.0125 11.9125 10.5125L17.5125 16.1125C17.6958 16.2958 17.7875 16.5292 17.7875 16.8125C17.7875 17.0958 17.6958 17.3292 17.5125 17.5125C17.3292 17.6958 17.0958 17.7875 16.8125 17.7875C16.5292 17.7875 16.2958 17.6958 16.1125 17.5125L10.5125 11.9125C10.0125 12.3125 9.43749 12.6292 8.78749 12.8625C8.13749 13.0958 7.44583 13.2125 6.71249 13.2125ZM6.71249 11.2125C7.96249 11.2125 9.02499 10.775 9.89999 9.9C10.775 9.025 11.2125 7.9625 11.2125 6.7125C11.2125 5.4625 10.775 4.4 9.89999 3.525C9.02499 2.65 7.96249 2.2125 6.71249 2.2125C5.46249 2.2125 4.39999 2.65 3.52499 3.525C2.64999 4.4 2.21249 5.4625 2.21249 6.7125C2.21249 7.9625 2.64999 9.025 3.52499 9.9C4.39999 10.775 5.46249 11.2125 6.71249 11.2125Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  share: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.9 12.025 16.6667 12.075 16.3L5.05 12.2C4.78333 12.45 4.475 12.6458 4.125 12.7875C3.775 12.9292 3.4 13 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.4 7 3.775 7.07083 4.125 7.2125C4.475 7.35417 4.78333 7.55 5.05 7.8L12.075 3.7C12.0417 3.58333 12.0208 3.47083 12.0125 3.3625C12.0042 3.25417 12 3.13333 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6 6 14.225 5.92917 13.875 5.7875C13.525 5.64583 13.2167 5.45 12.95 5.2L5.925 9.3C5.95833 9.41667 5.97917 9.52917 5.9875 9.6375C5.99583 9.74583 6 9.86667 6 10C6 10.1333 5.99583 10.2542 5.9875 10.3625C5.97917 10.4708 5.95833 10.5833 5.925 10.7L12.95 14.8C13.2167 14.55 13.525 14.3542 13.875 14.2125C14.225 14.0708 14.6 14 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20ZM15 18C15.2833 18 15.5208 17.9042 15.7125 17.7125C15.9042 17.5208 16 17.2833 16 17C16 16.7167 15.9042 16.4792 15.7125 16.2875C15.5208 16.0958 15.2833 16 15 16C14.7167 16 14.4792 16.0958 14.2875 16.2875C14.0958 16.4792 14 16.7167 14 17C14 17.2833 14.0958 17.5208 14.2875 17.7125C14.4792 17.9042 14.7167 18 15 18ZM3 11C3.28333 11 3.52083 10.9042 3.7125 10.7125C3.90417 10.5208 4 10.2833 4 10C4 9.71667 3.90417 9.47917 3.7125 9.2875C3.52083 9.09583 3.28333 9 3 9C2.71667 9 2.47917 9.09583 2.2875 9.2875C2.09583 9.47917 2 9.71667 2 10C2 10.2833 2.09583 10.5208 2.2875 10.7125C2.47917 10.9042 2.71667 11 3 11ZM15 4C15.2833 4 15.5208 3.90417 15.7125 3.7125C15.9042 3.52083 16 3.28333 16 3C16 2.71667 15.9042 2.47917 15.7125 2.2875C15.5208 2.09583 15.2833 2 15 2C14.7167 2 14.4792 2.09583 14.2875 2.2875C14.0958 2.47917 14 2.71667 14 3C14 3.28333 14.0958 3.52083 14.2875 3.7125C14.4792 3.90417 14.7167 4 15 4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  sms: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
  <path d="M4 16L1.7 18.3C1.38333 18.6167 1.02083 18.6875 0.6125 18.5125C0.204167 18.3375 0 18.025 0 17.575V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4ZM3.15 14H18V2H2V15.125L3.15 14ZM6 9C6.28333 9 6.52083 8.90417 6.7125 8.7125C6.90417 8.52083 7 8.28333 7 8C7 7.71667 6.90417 7.47917 6.7125 7.2875C6.52083 7.09583 6.28333 7 6 7C5.71667 7 5.47917 7.09583 5.2875 7.2875C5.09583 7.47917 5 7.71667 5 8C5 8.28333 5.09583 8.52083 5.2875 8.7125C5.47917 8.90417 5.71667 9 6 9ZM10 9C10.2833 9 10.5208 8.90417 10.7125 8.7125C10.9042 8.52083 11 8.28333 11 8C11 7.71667 10.9042 7.47917 10.7125 7.2875C10.5208 7.09583 10.2833 7 10 7C9.71667 7 9.47917 7.09583 9.2875 7.2875C9.09583 7.47917 9 7.71667 9 8C9 8.28333 9.09583 8.52083 9.2875 8.7125C9.47917 8.90417 9.71667 9 10 9ZM14 9C14.2833 9 14.5208 8.90417 14.7125 8.7125C14.9042 8.52083 15 8.28333 15 8C15 7.71667 14.9042 7.47917 14.7125 7.2875C14.5208 7.09583 14.2833 7 14 7C13.7167 7 13.4792 7.09583 13.2875 7.2875C13.0958 7.47917 13 7.71667 13 8C13 8.28333 13.0958 8.52083 13.2875 8.7125C13.4792 8.90417 13.7167 9 14 9Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  thumb_down: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M2 13C1.46667 13 1 12.8 0.6 12.4C0.2 12 0 11.5333 0 11V9C0 8.88333 0.0125 8.75833 0.0375 8.625C0.0625 8.49167 0.1 8.36667 0.15 8.25L3.15 1.2C3.3 0.866667 3.55 0.583333 3.9 0.35C4.25 0.116667 4.61667 0 5 0H13C13.55 0 14.0208 0.195833 14.4125 0.5875C14.8042 0.979167 15 1.45 15 2V12.175C15 12.4417 14.9458 12.6958 14.8375 12.9375C14.7292 13.1792 14.5833 13.3917 14.4 13.575L8.975 18.975C8.725 19.2083 8.42917 19.35 8.0875 19.4C7.74583 19.45 7.41667 19.3917 7.1 19.225C6.78333 19.0583 6.55417 18.825 6.4125 18.525C6.27083 18.225 6.24167 17.9167 6.325 17.6L7.45 13H2ZM19 0C19.55 0 20.0208 0.195833 20.4125 0.5875C20.8042 0.979167 21 1.45 21 2V11C21 11.55 20.8042 12.0208 20.4125 12.4125C20.0208 12.8042 19.55 13 19 13C18.45 13 17.9792 12.8042 17.5875 12.4125C17.1958 12.0208 17 11.55 17 11V2C17 1.45 17.1958 0.979167 17.5875 0.5875C17.9792 0.195833 18.45 0 19 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  thumb_up: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M19 7.00001C19.5333 7.00001 20 7.20001 20.4 7.60001C20.8 8.00001 21 8.46668 21 9.00001V11C21 11.1167 20.9875 11.2417 20.9625 11.375C20.9375 11.5083 20.9 11.6333 20.85 11.75L17.85 18.8C17.7 19.1333 17.45 19.4167 17.1 19.65C16.75 19.8833 16.3833 20 16 20H8C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18V7.82501C6 7.55834 6.05417 7.30418 6.1625 7.06251C6.27083 6.82084 6.41667 6.60834 6.6 6.42501L12.025 1.02501C12.275 0.791677 12.5708 0.65001 12.9125 0.60001C13.2542 0.55001 13.5833 0.608344 13.9 0.77501C14.2167 0.941677 14.4458 1.17501 14.5875 1.47501C14.7292 1.77501 14.7583 2.08334 14.675 2.40001L13.55 7.00001H19ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V9.00001C0 8.45001 0.195833 7.97918 0.5875 7.58751C0.979167 7.19584 1.45 7.00001 2 7.00001C2.55 7.00001 3.02083 7.19584 3.4125 7.58751C3.80417 7.97918 4 8.45001 4 9.00001V18C4 18.55 3.80417 19.0208 3.4125 19.4125C3.02083 19.8042 2.55 20 2 20Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  upload_file: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
  <path d="M7 12.825V16C7 16.2833 7.09583 16.5208 7.2875 16.7125C7.47917 16.9042 7.71667 17 8 17C8.28333 17 8.52083 16.9042 8.7125 16.7125C8.90417 16.5208 9 16.2833 9 16V12.825L9.9 13.725C10 13.825 10.1125 13.9 10.2375 13.95C10.3625 14 10.4875 14.0208 10.6125 14.0125C10.7375 14.0042 10.8583 13.975 10.975 13.925C11.0917 13.875 11.2 13.8 11.3 13.7C11.4833 13.5 11.5792 13.2667 11.5875 13C11.5958 12.7333 11.5 12.5 11.3 12.3L8.7 9.7C8.6 9.6 8.49167 9.52917 8.375 9.4875C8.25833 9.44583 8.13333 9.425 8 9.425C7.86667 9.425 7.74167 9.44583 7.625 9.4875C7.50833 9.52917 7.4 9.6 7.3 9.7L4.7 12.3C4.5 12.5 4.40417 12.7333 4.4125 13C4.42083 13.2667 4.525 13.5 4.725 13.7C4.925 13.8833 5.15833 13.9792 5.425 13.9875C5.69167 13.9958 5.925 13.9 6.125 13.7L7 12.825ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9.175C9.44167 0 9.69583 0.05 9.9375 0.15C10.1792 0.25 10.3917 0.391667 10.575 0.575L15.425 5.425C15.6083 5.60833 15.75 5.82083 15.85 6.0625C15.95 6.30417 16 6.55833 16 6.825V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 6V2H2V18H14V7H10C9.71667 7 9.47917 6.90417 9.2875 6.7125C9.09583 6.52083 9 6.28333 9 6Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  visibility: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
  <path d="M11 12.5C12.25 12.5 13.3125 12.0625 14.1875 11.1875C15.0625 10.3125 15.5 9.25 15.5 8C15.5 6.75 15.0625 5.6875 14.1875 4.8125C13.3125 3.9375 12.25 3.5 11 3.5C9.75 3.5 8.6875 3.9375 7.8125 4.8125C6.9375 5.6875 6.5 6.75 6.5 8C6.5 9.25 6.9375 10.3125 7.8125 11.1875C8.6875 12.0625 9.75 12.5 11 12.5ZM11 10.7C10.25 10.7 9.6125 10.4375 9.0875 9.9125C8.5625 9.3875 8.3 8.75 8.3 8C8.3 7.25 8.5625 6.6125 9.0875 6.0875C9.6125 5.5625 10.25 5.3 11 5.3C11.75 5.3 12.3875 5.5625 12.9125 6.0875C13.4375 6.6125 13.7 7.25 13.7 8C13.7 8.75 13.4375 9.3875 12.9125 9.9125C12.3875 10.4375 11.75 10.7 11 10.7ZM11 15.5C8.56667 15.5 6.35 14.8208 4.35 13.4625C2.35 12.1042 0.9 10.2833 0 8C0.9 5.71667 2.35 3.89583 4.35 2.5375C6.35 1.17917 8.56667 0.5 11 0.5C13.4333 0.5 15.65 1.17917 17.65 2.5375C19.65 3.89583 21.1 5.71667 22 8C21.1 10.2833 19.65 12.1042 17.65 13.4625C15.65 14.8208 13.4333 15.5 11 15.5ZM11 13.5C12.8833 13.5 14.6125 13.0042 16.1875 12.0125C17.7625 11.0208 18.9667 9.68333 19.8 8C18.9667 6.31667 17.7625 4.97917 16.1875 3.9875C14.6125 2.99583 12.8833 2.5 11 2.5C9.11667 2.5 7.3875 2.99583 5.8125 3.9875C4.2375 4.97917 3.03333 6.31667 2.2 8C3.03333 9.68333 4.2375 11.0208 5.8125 12.0125C7.3875 13.0042 9.11667 13.5 11 13.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  visibility_off: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
  <path d="M15.1 10.6L13.65 9.15C13.8 8.36667 13.575 7.63333 12.975 6.95C12.375 6.26667 11.6 6 10.65 6.15L9.2 4.7C9.48333 4.56667 9.77083 4.46667 10.0625 4.4C10.3542 4.33333 10.6667 4.3 11 4.3C12.25 4.3 13.3125 4.7375 14.1875 5.6125C15.0625 6.4875 15.5 7.55 15.5 8.8C15.5 9.13333 15.4667 9.44583 15.4 9.7375C15.3333 10.0292 15.2333 10.3167 15.1 10.6ZM18.3 13.75L16.85 12.35C17.4833 11.8667 18.0458 11.3375 18.5375 10.7625C19.0292 10.1875 19.45 9.53333 19.8 8.8C18.9667 7.11667 17.7708 5.77917 16.2125 4.7875C14.6542 3.79583 12.9167 3.3 11 3.3C10.5167 3.3 10.0417 3.33333 9.575 3.4C9.10833 3.46667 8.65 3.56667 8.2 3.7L6.65 2.15C7.33333 1.86667 8.03333 1.65417 8.75 1.5125C9.46667 1.37083 10.2167 1.3 11 1.3C13.5167 1.3 15.7583 1.99583 17.725 3.3875C19.6917 4.77917 21.1167 6.58333 22 8.8C21.6167 9.78333 21.1125 10.6958 20.4875 11.5375C19.8625 12.3792 19.1333 13.1167 18.3 13.75ZM18.8 19.9L14.6 15.75C14.0167 15.9333 13.4292 16.0708 12.8375 16.1625C12.2458 16.2542 11.6333 16.3 11 16.3C8.48333 16.3 6.24167 15.6042 4.275 14.2125C2.30833 12.8208 0.883333 11.0167 0 8.8C0.35 7.91667 0.791667 7.09583 1.325 6.3375C1.85833 5.57917 2.46667 4.9 3.15 4.3L0.4 1.5L1.8 0.0999985L20.2 18.5L18.8 19.9ZM4.55 5.7C4.06667 6.13333 3.625 6.60833 3.225 7.125C2.825 7.64167 2.48333 8.2 2.2 8.8C3.03333 10.4833 4.22917 11.8208 5.7875 12.8125C7.34583 13.8042 9.08333 14.3 11 14.3C11.3333 14.3 11.6583 14.2792 11.975 14.2375C12.2917 14.1958 12.6167 14.15 12.95 14.1L12.05 13.15C11.8667 13.2 11.6917 13.2375 11.525 13.2625C11.3583 13.2875 11.1833 13.3 11 13.3C9.75 13.3 8.6875 12.8625 7.8125 11.9875C6.9375 11.1125 6.5 10.05 6.5 8.8C6.5 8.61667 6.5125 8.44167 6.5375 8.275C6.5625 8.10833 6.6 7.93333 6.65 7.75L4.55 5.7Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  notifications: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
  <path d="M1 17C0.716667 17 0.479167 16.9042 0.2875 16.7125C0.0958333 16.5208 0 16.2833 0 16C0 15.7167 0.0958333 15.4792 0.2875 15.2875C0.479167 15.0958 0.716667 15 1 15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V2.2C10.8333 2.53333 11.9167 3.2375 12.75 4.3125C13.5833 5.3875 14 6.61667 14 8V15H15C15.2833 15 15.5208 15.0958 15.7125 15.2875C15.9042 15.4792 16 15.7167 16 16C16 16.2833 15.9042 16.5208 15.7125 16.7125C15.5208 16.9042 15.2833 17 15 17H1ZM8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20ZM4 15H12V8C12 6.9 11.6083 5.95833 10.825 5.175C10.0417 4.39167 9.1 4 8 4C6.9 4 5.95833 4.39167 5.175 5.175C4.39167 5.95833 4 6.9 4 8V15Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  // *** Arrows *** //
  arrow_back: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.6125 8.9935L8.5125 13.8935C8.7125 14.0935 8.80834 14.3268 8.8 14.5935C8.79167 14.8602 8.6875 15.0935 8.4875 15.2935C8.2875 15.4768 8.05417 15.5727 7.7875 15.581C7.52083 15.5893 7.2875 15.4935 7.0875 15.2935L0.487502 8.6935C0.387502 8.5935 0.316668 8.48517 0.275002 8.3685C0.233335 8.25184 0.212502 8.12684 0.212502 7.9935C0.212502 7.86017 0.233335 7.73517 0.275002 7.6185C0.316668 7.50184 0.387502 7.3935 0.487502 7.2935L7.0875 0.693503C7.27083 0.510169 7.5 0.418503 7.775 0.418503C8.05 0.418503 8.2875 0.510169 8.4875 0.693503C8.6875 0.893503 8.7875 1.131 8.7875 1.406C8.7875 1.681 8.6875 1.9185 8.4875 2.1185L3.6125 6.9935H14.7875C15.0708 6.9935 15.3083 7.08934 15.5 7.281C15.6917 7.47267 15.7875 7.71017 15.7875 7.9935C15.7875 8.27684 15.6917 8.51434 15.5 8.706C15.3083 8.89767 15.0708 8.9935 14.7875 8.9935H3.6125Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Chevrons *** //
  chevron_down: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path d="M10.0065 8.5L17.3565 1.15C17.6065 0.899999 17.8981 0.779165 18.2315 0.787499C18.5648 0.795832 18.8565 0.924999 19.1065 1.175C19.3565 1.425 19.4815 1.71667 19.4815 2.05C19.4815 2.38333 19.3565 2.675 19.1065 2.925L11.4315 10.625C11.2315 10.825 11.0065 10.975 10.7565 11.075C10.5065 11.175 10.2565 11.225 10.0065 11.225C9.75646 11.225 9.50646 11.175 9.25646 11.075C9.00646 10.975 8.78146 10.825 8.58146 10.625L0.881458 2.925C0.631458 2.675 0.510625 2.37916 0.518958 2.0375C0.527291 1.69583 0.656458 1.4 0.906458 1.15C1.15646 0.899999 1.44812 0.774999 1.78146 0.774999C2.11479 0.774999 2.40646 0.899999 2.65646 1.15L10.0065 8.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  chevron_up: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path d="M9.99354 3.5L2.64354 10.85C2.39354 11.1 2.10188 11.2208 1.76854 11.2125C1.43521 11.2042 1.14354 11.075 0.893541 10.825C0.643541 10.575 0.518541 10.2833 0.518541 9.95C0.518541 9.61667 0.643541 9.325 0.893541 9.075L8.56854 1.375C8.76854 1.175 8.99354 1.025 9.24354 0.925002C9.49354 0.825002 9.74354 0.775002 9.99354 0.775002C10.2435 0.775002 10.4935 0.825002 10.7435 0.925002C10.9935 1.025 11.2185 1.175 11.4185 1.375L19.1185 9.075C19.3685 9.325 19.4894 9.62084 19.481 9.9625C19.4727 10.3042 19.3435 10.6 19.0935 10.85C18.8435 11.1 18.5519 11.225 18.2185 11.225C17.8852 11.225 17.5935 11.1 17.3435 10.85L9.99354 3.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  chevron_left: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M3.49999 10.0065L10.85 17.3565C11.1 17.6065 11.2208 17.8981 11.2125 18.2315C11.2042 18.5648 11.075 18.8565 10.825 19.1065C10.575 19.3565 10.2833 19.4815 9.94999 19.4815C9.61666 19.4815 9.32499 19.3565 9.07499 19.1065L1.37499 11.4315C1.17499 11.2315 1.02499 11.0065 0.924994 10.7565C0.824994 10.5065 0.774994 10.2565 0.774994 10.0065C0.774994 9.75645 0.824994 9.50645 0.924994 9.25645C1.02499 9.00645 1.17499 8.78145 1.37499 8.58145L9.07499 0.88145C9.32499 0.63145 9.62083 0.510617 9.96249 0.51895C10.3042 0.527284 10.6 0.65645 10.85 0.90645C11.1 1.15645 11.225 1.44812 11.225 1.78145C11.225 2.11478 11.1 2.40645 10.85 2.65645L3.49999 10.0065Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  chevron_right: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M8.50001 9.99355L1.15001 2.64355C0.900008 2.39355 0.779174 2.10188 0.787508 1.76855C0.795841 1.43521 0.925008 1.14355 1.17501 0.893548C1.42501 0.643548 1.71667 0.518548 2.05001 0.518548C2.38334 0.518548 2.67501 0.643548 2.92501 0.893548L10.625 8.56855C10.825 8.76855 10.975 8.99355 11.075 9.24355C11.175 9.49355 11.225 9.74355 11.225 9.99355C11.225 10.2435 11.175 10.4935 11.075 10.7435C10.975 10.9935 10.825 11.2185 10.625 11.4185L2.92501 19.1185C2.67501 19.3685 2.37917 19.4894 2.03751 19.481C1.69584 19.4727 1.40001 19.3435 1.15001 19.0935C0.900006 18.8435 0.775006 18.5519 0.775006 18.2185C0.775006 17.8852 0.900006 17.5935 1.15001 17.3435L8.50001 9.99355Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Environmental *** //
  ac_unit: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 15.85L6.425 18.375C6.24167 18.5583 6.0125 18.65 5.7375 18.65C5.4625 18.65 5.23333 18.55 5.05 18.35C4.85 18.1667 4.75 17.9375 4.75 17.6625C4.75 17.3875 4.85 17.15 5.05 16.95L9 13V11H7L3.025 14.975C2.84167 15.1583 2.6125 15.25 2.3375 15.25C2.0625 15.25 1.825 15.15 1.625 14.95C1.44167 14.7667 1.35 14.5375 1.35 14.2625C1.35 13.9875 1.44167 13.7583 1.625 13.575L4.15 11H0.975C0.691667 11 0.458333 10.9042 0.275 10.7125C0.0916667 10.5208 0 10.2833 0 10C0 9.71667 0.0958333 9.47917 0.2875 9.2875C0.479167 9.09583 0.716667 9 1 9H4.15L1.625 6.45C1.44167 6.26667 1.35 6.0375 1.35 5.7625C1.35 5.4875 1.45 5.25 1.65 5.05C1.83333 4.86667 2.0625 4.775 2.3375 4.775C2.6125 4.775 2.85 4.86667 3.05 5.05L7 9H9V7L5.025 3.05C4.84167 2.86667 4.75 2.6375 4.75 2.3625C4.75 2.0875 4.85 1.85 5.05 1.65C5.23333 1.46667 5.4625 1.375 5.7375 1.375C6.0125 1.375 6.24167 1.46667 6.425 1.65L9 4.15V1C9 0.716667 9.09583 0.479167 9.2875 0.2875C9.47917 0.0958333 9.71667 0 10 0C10.2833 0 10.5208 0.0958333 10.7125 0.2875C10.9042 0.479167 11 0.716667 11 1V4.15L13.55 1.65C13.7333 1.46667 13.9625 1.375 14.2375 1.375C14.5125 1.375 14.75 1.46667 14.95 1.65C15.1333 1.85 15.225 2.0875 15.225 2.3625C15.225 2.6375 15.1333 2.86667 14.95 3.05L11 7V9H13L16.95 5.05C17.1333 4.86667 17.3625 4.775 17.6375 4.775C17.9125 4.775 18.15 4.875 18.35 5.075C18.5333 5.25833 18.625 5.4875 18.625 5.7625C18.625 6.0375 18.5333 6.26667 18.35 6.45L15.85 9H19C19.2833 9 19.5208 9.09583 19.7125 9.2875C19.9042 9.47917 20 9.71667 20 10C20 10.2833 19.9042 10.5208 19.7125 10.7125C19.5208 10.9042 19.2833 11 19 11H15.85L18.35 13.575C18.5333 13.7583 18.625 13.9875 18.625 14.2625C18.625 14.5375 18.5333 14.7667 18.35 14.95C18.15 15.15 17.9125 15.25 17.6375 15.25C17.3625 15.25 17.1333 15.15 16.95 14.95L13 11H11V13L14.95 16.975C15.1333 17.1583 15.225 17.3875 15.225 17.6625C15.225 17.9375 15.125 18.175 14.925 18.375C14.7417 18.5583 14.5125 18.65 14.2375 18.65C13.9625 18.65 13.7333 18.5583 13.55 18.375L11 15.85V19.025C11 19.3083 10.9042 19.5417 10.7125 19.725C10.5208 19.9083 10.2833 20 10 20C9.71667 20 9.47917 19.9042 9.2875 19.7125C9.09583 19.5208 9 19.2833 9 19V15.85Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  air: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
  <path d="M9.5 17C8.96667 17 8.47083 16.8667 8.0125 16.6C7.55417 16.3333 7.18333 15.9667 6.9 15.5C6.71667 15.1667 6.7125 14.8333 6.8875 14.5C7.0625 14.1667 7.33333 14 7.7 14C7.91667 14 8.10833 14.0667 8.275 14.2C8.44167 14.3333 8.59167 14.4833 8.725 14.65C8.80833 14.7667 8.92083 14.8542 9.0625 14.9125C9.20417 14.9708 9.35 15 9.5 15C9.78333 15 10.0208 14.9042 10.2125 14.7125C10.4042 14.5208 10.5 14.2833 10.5 14C10.5 13.7167 10.4042 13.4792 10.2125 13.2875C10.0208 13.0958 9.78333 13 9.5 13H1C0.716667 13 0.479167 12.9042 0.2875 12.7125C0.0958333 12.5208 0 12.2833 0 12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11H9.5C10.3333 11 11.0417 11.2917 11.625 11.875C12.2083 12.4583 12.5 13.1667 12.5 14C12.5 14.8333 12.2083 15.5417 11.625 16.125C11.0417 16.7083 10.3333 17 9.5 17ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H13.5C13.9167 5 14.2708 4.85417 14.5625 4.5625C14.8542 4.27083 15 3.91667 15 3.5C15 3.08333 14.8542 2.72917 14.5625 2.4375C14.2708 2.14583 13.9167 2 13.5 2C13.2333 2 12.9833 2.0625 12.75 2.1875C12.5167 2.3125 12.3333 2.49167 12.2 2.725C12.0833 2.925 11.9417 3.10417 11.775 3.2625C11.6083 3.42083 11.4083 3.5 11.175 3.5C10.8417 3.5 10.5708 3.375 10.3625 3.125C10.1542 2.875 10.1 2.60833 10.2 2.325C10.4333 1.625 10.8542 1.0625 11.4625 0.6375C12.0708 0.2125 12.75 0 13.5 0C14.4667 0 15.2917 0.341667 15.975 1.025C16.6583 1.70833 17 2.53333 17 3.5C17 4.46667 16.6583 5.29167 15.975 5.975C15.2917 6.65833 14.4667 7 13.5 7H1ZM17.95 14.7C17.6167 14.85 17.2917 14.8292 16.975 14.6375C16.6583 14.4458 16.5 14.1667 16.5 13.8C16.5 13.5667 16.5792 13.3708 16.7375 13.2125C16.8958 13.0542 17.075 12.9167 17.275 12.8C17.5083 12.6667 17.6875 12.4833 17.8125 12.25C17.9375 12.0167 18 11.7667 18 11.5C18 11.0833 17.8542 10.7292 17.5625 10.4375C17.2708 10.1458 16.9167 10 16.5 10H1C0.716667 10 0.479167 9.90417 0.2875 9.7125C0.0958333 9.52083 0 9.28333 0 9C0 8.71667 0.0958333 8.47917 0.2875 8.2875C0.479167 8.09583 0.716667 8 1 8H16.5C17.4667 8 18.2917 8.34167 18.975 9.025C19.6583 9.70833 20 10.5333 20 11.5C20 12.2 19.8167 12.8375 19.45 13.4125C19.0833 13.9875 18.5833 14.4167 17.95 14.7Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  clear_day: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 4C10.7167 4 10.4792 3.90417 10.2875 3.7125C10.0958 3.52083 10 3.28333 10 3V1C10 0.716667 10.0958 0.479167 10.2875 0.2875C10.4792 0.0958333 10.7167 0 11 0C11.2833 0 11.5208 0.0958333 11.7125 0.2875C11.9042 0.479167 12 0.716667 12 1V3C12 3.28333 11.9042 3.52083 11.7125 3.7125C11.5208 3.90417 11.2833 4 11 4ZM15.95 6.05C15.7667 5.86667 15.675 5.6375 15.675 5.3625C15.675 5.0875 15.7667 4.85 15.95 4.65L17.35 3.225C17.55 3.025 17.7875 2.925 18.0625 2.925C18.3375 2.925 18.575 3.025 18.775 3.225C18.9583 3.40833 19.05 3.64167 19.05 3.925C19.05 4.20833 18.9583 4.44167 18.775 4.625L17.35 6.05C17.1667 6.23333 16.9333 6.325 16.65 6.325C16.3667 6.325 16.1333 6.23333 15.95 6.05ZM19 12C18.7167 12 18.4792 11.9042 18.2875 11.7125C18.0958 11.5208 18 11.2833 18 11C18 10.7167 18.0958 10.4792 18.2875 10.2875C18.4792 10.0958 18.7167 10 19 10H21C21.2833 10 21.5208 10.0958 21.7125 10.2875C21.9042 10.4792 22 10.7167 22 11C22 11.2833 21.9042 11.5208 21.7125 11.7125C21.5208 11.9042 21.2833 12 21 12H19ZM11 22C10.7167 22 10.4792 21.9042 10.2875 21.7125C10.0958 21.5208 10 21.2833 10 21V19C10 18.7167 10.0958 18.4792 10.2875 18.2875C10.4792 18.0958 10.7167 18 11 18C11.2833 18 11.5208 18.0958 11.7125 18.2875C11.9042 18.4792 12 18.7167 12 19V21C12 21.2833 11.9042 21.5208 11.7125 21.7125C11.5208 21.9042 11.2833 22 11 22ZM4.65 6.05L3.225 4.65C3.025 4.45 2.925 4.20833 2.925 3.925C2.925 3.64167 3.025 3.40833 3.225 3.225C3.40833 3.04167 3.64167 2.95 3.925 2.95C4.20833 2.95 4.44167 3.04167 4.625 3.225L6.05 4.65C6.23333 4.83333 6.325 5.06667 6.325 5.35C6.325 5.63333 6.23333 5.86667 6.05 6.05C5.85 6.23333 5.61667 6.325 5.35 6.325C5.08333 6.325 4.85 6.23333 4.65 6.05ZM17.35 18.775L15.95 17.35C15.7667 17.15 15.675 16.9125 15.675 16.6375C15.675 16.3625 15.7667 16.1333 15.95 15.95C16.1333 15.7667 16.3625 15.675 16.6375 15.675C16.9125 15.675 17.15 15.7667 17.35 15.95L18.775 17.35C18.975 17.5333 19.0708 17.7667 19.0625 18.05C19.0542 18.3333 18.9583 18.575 18.775 18.775C18.575 18.975 18.3333 19.075 18.05 19.075C17.7667 19.075 17.5333 18.975 17.35 18.775ZM1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10H3C3.28333 10 3.52083 10.0958 3.7125 10.2875C3.90417 10.4792 4 10.7167 4 11C4 11.2833 3.90417 11.5208 3.7125 11.7125C3.52083 11.9042 3.28333 12 3 12H1ZM3.225 18.775C3.04167 18.5917 2.95 18.3583 2.95 18.075C2.95 17.7917 3.04167 17.5583 3.225 17.375L4.65 15.95C4.83333 15.7667 5.0625 15.675 5.3375 15.675C5.6125 15.675 5.85 15.7667 6.05 15.95C6.25 16.15 6.35 16.3875 6.35 16.6625C6.35 16.9375 6.25 17.175 6.05 17.375L4.65 18.775C4.45 18.975 4.20833 19.075 3.925 19.075C3.64167 19.075 3.40833 18.975 3.225 18.775ZM11 17C9.33333 17 7.91667 16.4167 6.75 15.25C5.58333 14.0833 5 12.6667 5 11C5 9.33333 5.58333 7.91667 6.75 6.75C7.91667 5.58333 9.33333 5 11 5C12.6667 5 14.0833 5.58333 15.25 6.75C16.4167 7.91667 17 9.33333 17 11C17 12.6667 16.4167 14.0833 15.25 15.25C14.0833 16.4167 12.6667 17 11 17ZM11 15C12.1 15 13.0417 14.6083 13.825 13.825C14.6083 13.0417 15 12.1 15 11C15 9.9 14.6083 8.95833 13.825 8.175C13.0417 7.39167 12.1 7 11 7C9.9 7 8.95833 7.39167 8.175 8.175C7.39167 8.95833 7 9.9 7 11C7 12.1 7.39167 13.0417 8.175 13.825C8.95833 14.6083 9.9 15 11 15Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  coronavirus: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.25 20C9.05 20 8.875 19.925 8.725 19.775C8.575 19.625 8.5 19.45 8.5 19.25C8.5 19.05 8.575 18.875 8.725 18.725C8.875 18.575 9.05 18.5 9.25 18.5V16.95C8.55 16.8667 7.89167 16.7 7.275 16.45C6.65833 16.2 6.1 15.8667 5.6 15.45L4.525 16.55C4.675 16.7 4.75 16.875 4.75 17.075C4.75 17.275 4.675 17.45 4.525 17.6C4.375 17.75 4.2 17.825 4 17.825C3.8 17.825 3.625 17.75 3.475 17.6L2.4 16.55C2.25 16.4 2.175 16.2208 2.175 16.0125C2.175 15.8042 2.25 15.625 2.4 15.475C2.55 15.325 2.725 15.2542 2.925 15.2625C3.125 15.2708 3.3 15.3417 3.45 15.475L4.55 14.375C4.13333 13.8583 3.8 13.3 3.55 12.7C3.3 12.1 3.13333 11.45 3.05 10.75H1.5C1.5 10.95 1.425 11.125 1.275 11.275C1.125 11.425 0.95 11.5 0.75 11.5C0.55 11.5 0.375 11.425 0.225 11.275C0.075 11.125 0 10.95 0 10.75V9.25C0 9.05 0.075 8.875 0.225 8.725C0.375 8.575 0.55 8.5 0.75 8.5C0.95 8.5 1.125 8.575 1.275 8.725C1.425 8.875 1.5 9.05 1.5 9.25H3.05C3.13333 8.55 3.30417 7.9 3.5625 7.3C3.82083 6.7 4.15 6.14167 4.55 5.625L3.45 4.525C3.3 4.65833 3.125 4.72917 2.925 4.7375C2.725 4.74583 2.55 4.675 2.4 4.525C2.25 4.375 2.175 4.19583 2.175 3.9875C2.175 3.77917 2.25 3.6 2.4 3.45L3.45 2.4C3.6 2.25 3.77917 2.175 3.9875 2.175C4.19583 2.175 4.375 2.25 4.525 2.4C4.675 2.55 4.75 2.72917 4.75 2.9375C4.75 3.14583 4.675 3.325 4.525 3.475L5.6 4.55C6.11667 4.13333 6.675 3.8 7.275 3.55C7.875 3.3 8.525 3.13333 9.225 3.05V1.5C9.025 1.5 8.85417 1.425 8.7125 1.275C8.57083 1.125 8.5 0.95 8.5 0.75C8.5 0.55 8.575 0.375 8.725 0.225C8.875 0.075 9.05 0 9.25 0H10.75C10.95 0 11.125 0.075 11.275 0.225C11.425 0.375 11.5 0.55 11.5 0.75C11.5 0.95 11.425 1.125 11.275 1.275C11.125 1.425 10.95 1.5 10.75 1.5V3.05C11.45 3.13333 12.1 3.3 12.7 3.55C13.3 3.8 13.8583 4.13333 14.375 4.55L15.475 3.45C15.325 3.3 15.25 3.125 15.25 2.925C15.25 2.725 15.325 2.55 15.475 2.4C15.625 2.25 15.8042 2.175 16.0125 2.175C16.2208 2.175 16.4 2.25 16.55 2.4L17.6 3.475C17.75 3.625 17.825 3.8 17.825 4C17.825 4.2 17.75 4.375 17.6 4.525C17.45 4.675 17.2708 4.75 17.0625 4.75C16.8542 4.75 16.675 4.675 16.525 4.525L15.45 5.6C15.8667 6.11667 16.2 6.67917 16.45 7.2875C16.7 7.89583 16.8667 8.55 16.95 9.25H18.5C18.5 9.05 18.575 8.875 18.725 8.725C18.875 8.575 19.05 8.5 19.25 8.5C19.45 8.5 19.625 8.575 19.775 8.725C19.925 8.875 20 9.05 20 9.25V10.75C20 10.95 19.925 11.125 19.775 11.275C19.625 11.425 19.45 11.5 19.25 11.5C19.05 11.5 18.875 11.425 18.725 11.275C18.575 11.125 18.5 10.95 18.5 10.75H16.95C16.8667 11.45 16.7 12.1042 16.45 12.7125C16.2 13.3208 15.8667 13.8833 15.45 14.4L16.525 15.475C16.675 15.325 16.8542 15.25 17.0625 15.25C17.2708 15.25 17.45 15.325 17.6 15.475C17.75 15.625 17.825 15.8042 17.825 16.0125C17.825 16.2208 17.75 16.4 17.6 16.55L16.55 17.6C16.4 17.75 16.2208 17.825 16.0125 17.825C15.8042 17.825 15.625 17.75 15.475 17.6C15.325 17.45 15.2542 17.275 15.2625 17.075C15.2708 16.875 15.3417 16.7 15.475 16.55L14.375 15.45C13.8583 15.8667 13.3 16.2042 12.7 16.4625C12.1 16.7208 11.45 16.8917 10.75 16.975V18.5C10.95 18.5 11.125 18.575 11.275 18.725C11.425 18.875 11.5 19.05 11.5 19.25C11.5 19.45 11.425 19.625 11.275 19.775C11.125 19.925 10.95 20 10.75 20H9.25ZM10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM8.25 14C8.53333 14 8.77083 13.9042 8.9625 13.7125C9.15417 13.5208 9.25 13.2833 9.25 13C9.25 12.7167 9.15417 12.4792 8.9625 12.2875C8.77083 12.0958 8.53333 12 8.25 12C7.96667 12 7.72917 12.0958 7.5375 12.2875C7.34583 12.4792 7.25 12.7167 7.25 13C7.25 13.2833 7.34583 13.5208 7.5375 13.7125C7.72917 13.9042 7.96667 14 8.25 14ZM11.75 14C12.0333 14 12.2708 13.9042 12.4625 13.7125C12.6542 13.5208 12.75 13.2833 12.75 13C12.75 12.7167 12.6542 12.4792 12.4625 12.2875C12.2708 12.0958 12.0333 12 11.75 12C11.4667 12 11.2292 12.0958 11.0375 12.2875C10.8458 12.4792 10.75 12.7167 10.75 13C10.75 13.2833 10.8458 13.5208 11.0375 13.7125C11.2292 13.9042 11.4667 14 11.75 14ZM6.5 11C6.78333 11 7.02083 10.9042 7.2125 10.7125C7.40417 10.5208 7.5 10.2833 7.5 10C7.5 9.71667 7.40417 9.47917 7.2125 9.2875C7.02083 9.09583 6.78333 9 6.5 9C6.21667 9 5.97917 9.09583 5.7875 9.2875C5.59583 9.47917 5.5 9.71667 5.5 10C5.5 10.2833 5.59583 10.5208 5.7875 10.7125C5.97917 10.9042 6.21667 11 6.5 11ZM10 11C10.2833 11 10.5208 10.9042 10.7125 10.7125C10.9042 10.5208 11 10.2833 11 10C11 9.71667 10.9042 9.47917 10.7125 9.2875C10.5208 9.09583 10.2833 9 10 9C9.71667 9 9.47917 9.09583 9.2875 9.2875C9.09583 9.47917 9 9.71667 9 10C9 10.2833 9.09583 10.5208 9.2875 10.7125C9.47917 10.9042 9.71667 11 10 11ZM13.5 11C13.7833 11 14.0208 10.9042 14.2125 10.7125C14.4042 10.5208 14.5 10.2833 14.5 10C14.5 9.71667 14.4042 9.47917 14.2125 9.2875C14.0208 9.09583 13.7833 9 13.5 9C13.2167 9 12.9792 9.09583 12.7875 9.2875C12.5958 9.47917 12.5 9.71667 12.5 10C12.5 10.2833 12.5958 10.5208 12.7875 10.7125C12.9792 10.9042 13.2167 11 13.5 11ZM8.25 8C8.53333 8 8.77083 7.90417 8.9625 7.7125C9.15417 7.52083 9.25 7.28333 9.25 7C9.25 6.71667 9.15417 6.47917 8.9625 6.2875C8.77083 6.09583 8.53333 6 8.25 6C7.96667 6 7.72917 6.09583 7.5375 6.2875C7.34583 6.47917 7.25 6.71667 7.25 7C7.25 7.28333 7.34583 7.52083 7.5375 7.7125C7.72917 7.90417 7.96667 8 8.25 8ZM11.75 8C12.0333 8 12.2708 7.90417 12.4625 7.7125C12.6542 7.52083 12.75 7.28333 12.75 7C12.75 6.71667 12.6542 6.47917 12.4625 6.2875C12.2708 6.09583 12.0333 6 11.75 6C11.4667 6 11.2292 6.09583 11.0375 6.2875C10.8458 6.47917 10.75 6.71667 10.75 7C10.75 7.28333 10.8458 7.52083 11.0375 7.7125C11.2292 7.90417 11.4667 8 11.75 8Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  rainy: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M11.95 19.9C11.7 20.0333 11.4458 20.0542 11.1875 19.9625C10.9292 19.8708 10.7333 19.7 10.6 19.45L9.1 16.45C8.96667 16.2 8.94583 15.9458 9.0375 15.6875C9.12917 15.4292 9.3 15.2333 9.55 15.1C9.8 14.9667 10.0542 14.9458 10.3125 15.0375C10.5708 15.1292 10.7667 15.3 10.9 15.55L12.4 18.55C12.5333 18.8 12.5542 19.0542 12.4625 19.3125C12.3708 19.5708 12.2 19.7667 11.95 19.9ZM17.95 19.9C17.7 20.0333 17.4458 20.0542 17.1875 19.9625C16.9292 19.8708 16.7333 19.7 16.6 19.45L15.1 16.45C14.9667 16.2 14.9458 15.9458 15.0375 15.6875C15.1292 15.4292 15.3 15.2333 15.55 15.1C15.8 14.9667 16.0542 14.9458 16.3125 15.0375C16.5708 15.1292 16.7667 15.3 16.9 15.55L18.4 18.55C18.5333 18.8 18.5542 19.0542 18.4625 19.3125C18.3708 19.5708 18.2 19.7667 17.95 19.9ZM5.95 19.9C5.7 20.0333 5.44583 20.0542 5.1875 19.9625C4.92917 19.8708 4.73333 19.7 4.6 19.45L3.1 16.45C2.96667 16.2 2.94583 15.9458 3.0375 15.6875C3.12917 15.4292 3.3 15.2333 3.55 15.1C3.8 14.9667 4.05417 14.9458 4.3125 15.0375C4.57083 15.1292 4.76667 15.3 4.9 15.55L6.4 18.55C6.53333 18.8 6.55417 19.0542 6.4625 19.3125C6.37083 19.5708 6.2 19.7667 5.95 19.9ZM5.5 14C3.98333 14 2.6875 13.4625 1.6125 12.3875C0.5375 11.3125 0 10.0167 0 8.5C0 7.11667 0.458333 5.90833 1.375 4.875C2.29167 3.84167 3.425 3.23333 4.775 3.05C5.30833 2.1 6.0375 1.35417 6.9625 0.8125C7.8875 0.270833 8.9 0 10 0C11.5 0 12.8042 0.479167 13.9125 1.4375C15.0208 2.39583 15.6917 3.59167 15.925 5.025C17.075 5.125 18.0417 5.6 18.825 6.45C19.6083 7.3 20 8.31667 20 9.5C20 10.75 19.5625 11.8125 18.6875 12.6875C17.8125 13.5625 16.75 14 15.5 14H5.5ZM5.5 12H15.5C16.2 12 16.7917 11.7583 17.275 11.275C17.7583 10.7917 18 10.2 18 9.5C18 8.8 17.7583 8.20833 17.275 7.725C16.7917 7.24167 16.2 7 15.5 7H14V6C14 4.9 13.6083 3.95833 12.825 3.175C12.0417 2.39167 11.1 2 10 2C9.2 2 8.47083 2.21667 7.8125 2.65C7.15417 3.08333 6.65833 3.66667 6.325 4.4L6.075 5H5.45C4.5 5.03333 3.6875 5.3875 3.0125 6.0625C2.3375 6.7375 2 7.55 2 8.5C2 9.46667 2.34167 10.2917 3.025 10.975C3.70833 11.6583 4.53333 12 5.5 12Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Intent *** //
  check_circle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M8.6 11.8L6.45 9.65C6.26667 9.46667 6.03333 9.375 5.75 9.375C5.46667 9.375 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.1 14.1 8.33333 14.2 8.6 14.2C8.86667 14.2 9.1 14.1 9.3 13.9L14.95 8.25C15.1333 8.06667 15.225 7.83333 15.225 7.55C15.225 7.26667 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  emergency_home: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 21.025C10.7333 21.025 10.4791 20.975 10.2375 20.875C9.99581 20.775 9.77498 20.6333 9.57498 20.45L1.54998 12.425C1.36664 12.225 1.22498 12.0041 1.12498 11.7625C1.02498 11.5208 0.974976 11.2666 0.974976 11C0.974976 10.7333 1.02498 10.475 1.12498 10.225C1.22498 9.97498 1.36664 9.75831 1.54998 9.57498L9.57498 1.54998C9.77498 1.34998 9.99581 1.20414 10.2375 1.11248C10.4791 1.02081 10.7333 0.974976 11 0.974976C11.2666 0.974976 11.525 1.02081 11.775 1.11248C12.025 1.20414 12.2416 1.34998 12.425 1.54998L20.45 9.57498C20.65 9.75831 20.7958 9.97498 20.8875 10.225C20.9791 10.475 21.025 10.7333 21.025 11C21.025 11.2666 20.9791 11.5208 20.8875 11.7625C20.7958 12.0041 20.65 12.225 20.45 12.425L12.425 20.45C12.2416 20.6333 12.025 20.775 11.775 20.875C11.525 20.975 11.2666 21.025 11 21.025ZM11 19.025L19.025 11L11 2.97498L2.97498 11L11 19.025ZM9.99998 12H12V5.99998H9.99998V12ZM11 15C11.2833 15 11.5208 14.9041 11.7125 14.7125C11.9041 14.5208 12 14.2833 12 14C12 13.7166 11.9041 13.4791 11.7125 13.2875C11.5208 13.0958 11.2833 13 11 13C10.7166 13 10.4791 13.0958 10.2875 13.2875C10.0958 13.4791 9.99998 13.7166 9.99998 14C9.99998 14.2833 10.0958 14.5208 10.2875 14.7125C10.4791 14.9041 10.7166 15 11 15Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  error: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14C11 13.7167 10.9042 13.4792 10.7125 13.2875C10.5208 13.0958 10.2833 13 10 13C9.71667 13 9.47917 13.0958 9.2875 13.2875C9.09583 13.4792 9 13.7167 9 14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM9 11H11V5H9V11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.5208 6.90417 10.7125 6.7125C10.9042 6.52083 11 6.28333 11 6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6C9 6.28333 9.09583 6.52083 9.2875 6.7125C9.47917 6.90417 9.71667 7 10 7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
  <path d="M1.725 18C1.54167 18 1.375 17.9542 1.225 17.8625C1.075 17.7708 0.958337 17.65 0.875003 17.5C0.79167 17.35 0.745837 17.1875 0.737503 17.0125C0.72917 16.8375 0.775003 16.6667 0.875003 16.5L10.125 0.5C10.225 0.333333 10.3542 0.208333 10.5125 0.125C10.6708 0.0416667 10.8333 0 11 0C11.1667 0 11.3292 0.0416667 11.4875 0.125C11.6458 0.208333 11.775 0.333333 11.875 0.5L21.125 16.5C21.225 16.6667 21.2708 16.8375 21.2625 17.0125C21.2542 17.1875 21.2083 17.35 21.125 17.5C21.0417 17.65 20.925 17.7708 20.775 17.8625C20.625 17.9542 20.4583 18 20.275 18H1.725ZM3.45 16H18.55L11 3L3.45 16ZM11 15C11.2833 15 11.5208 14.9042 11.7125 14.7125C11.9042 14.5208 12 14.2833 12 14C12 13.7167 11.9042 13.4792 11.7125 13.2875C11.5208 13.0958 11.2833 13 11 13C10.7167 13 10.4792 13.0958 10.2875 13.2875C10.0958 13.4792 10 13.7167 10 14C10 14.2833 10.0958 14.5208 10.2875 14.7125C10.4792 14.9042 10.7167 15 11 15ZM11 12C11.2833 12 11.5208 11.9042 11.7125 11.7125C11.9042 11.5208 12 11.2833 12 11V8C12 7.71667 11.9042 7.47917 11.7125 7.2875C11.5208 7.09583 11.2833 7 11 7C10.7167 7 10.4792 7.09583 10.2875 7.2875C10.0958 7.47917 10 7.71667 10 8V11C10 11.2833 10.0958 11.5208 10.2875 11.7125C10.4792 11.9042 10.7167 12 11 12Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  // *** Social *** //
  social_facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M10.0367 0C4.49365 0 0 4.49365 0 10.0367C0 14.7436 3.24066 18.6932 7.61226 19.778V13.104H5.54269V10.0367H7.61226V8.7151C7.61226 5.29899 9.15832 3.7156 12.5122 3.7156C13.1481 3.7156 14.2453 3.84046 14.6942 3.96491V6.74509C14.4573 6.7202 14.0458 6.70775 13.5347 6.70775C11.8891 6.70775 11.2532 7.33123 11.2532 8.95196V10.0367H14.5316L13.9683 13.104H11.2532V20C16.223 19.3998 20.0739 15.1683 20.0739 10.0367C20.0735 4.49365 15.5798 0 10.0367 0Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_flickr: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M19.0909 0H0.909091C0.407014 0 0 0.407014 0 0.909091V19.0909C0 19.593 0.407014 20 0.909091 20H19.0909C19.593 20 20 19.593 20 19.0909V0.909091C20 0.407014 19.593 0 19.0909 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M6.36364 12.7273C7.86987 12.7273 9.09091 11.5062 9.09091 10C9.09091 8.49377 7.86987 7.27273 6.36364 7.27273C4.85741 7.27273 3.63636 8.49377 3.63636 10C3.63636 11.5062 4.85741 12.7273 6.36364 12.7273Z" fill="white"/>
  <path d="M13.6364 12.7273C15.1426 12.7273 16.3636 11.5062 16.3636 10C16.3636 8.49377 15.1426 7.27273 13.6364 7.27273C12.1301 7.27273 10.9091 8.49377 10.9091 10C10.9091 11.5062 12.1301 12.7273 13.6364 12.7273Z" fill="white"/>
  </svg>`,
  social_google_play: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M3.1202 0.508333L14.0372 6.79667L11.6972 9.14083L3.1202 0.508333ZM0.85845 0L10.8795 10L0.859282 20C0.349369 19.7742 0 19.2717 0 18.6875C0 18.6683 0 18.6492 0.000831831 18.6308V18.6333V1.3675C0 1.35167 0 1.3325 0 1.31333C0 0.729167 0.349369 0.226667 0.850132 0.00416667L0.859282 0.000833333L0.85845 0ZM17.4302 8.82833C17.7746 9.08417 17.995 9.49083 17.995 9.94833C17.995 9.96667 17.995 9.98417 17.9942 10.0025V10C17.9975 10.0358 18 10.0783 18 10.1208C18 10.5508 17.792 10.9325 17.471 11.1692L17.4676 11.1717L15.1277 12.4992L12.5939 10L15.1285 7.46083L17.4302 8.82833ZM3.1202 19.4917L11.698 10.8592L14.038 13.2033L3.1202 19.4917Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.002 1.80113C12.6744 1.80113 12.9908 1.81285 14.0418 1.85974C15.0186 1.90272 15.546 2.06681 15.8976 2.20356C16.3626 2.38328 16.6986 2.60207 17.0463 2.9498C17.3979 3.30143 17.6128 3.63352 17.7925 4.09846C17.9293 4.45009 18.0934 4.98144 18.1364 5.95429C18.1832 7.00918 18.195 7.32565 18.195 9.99414C18.195 12.6665 18.1832 12.983 18.1364 14.034C18.0934 15.0107 17.9293 15.5382 17.7925 15.8898C17.6128 16.3548 17.394 16.6908 17.0463 17.0385C16.6947 17.3901 16.3626 17.605 15.8976 17.7847C15.546 17.9215 15.0147 18.0856 14.0418 18.1285C12.9869 18.1754 12.6704 18.1871 10.002 18.1871C7.32956 18.1871 7.01309 18.1754 5.9621 18.1285C4.98535 18.0856 4.4579 17.9215 4.10627 17.7847C3.64134 17.605 3.30533 17.3862 2.95761 17.0385C2.60598 16.6869 2.39109 16.3548 2.21137 15.8898C2.07462 15.5382 1.91053 15.0068 1.86755 14.034C1.82067 12.9791 1.80895 12.6626 1.80895 9.99414C1.80895 7.32174 1.82067 7.00527 1.86755 5.95429C1.91053 4.97753 2.07462 4.45009 2.21137 4.09846C2.39109 3.63352 2.60988 3.29752 2.95761 2.9498C3.30924 2.59816 3.64134 2.38328 4.10627 2.20356C4.4579 2.06681 4.98926 1.90272 5.9621 1.85974C7.01309 1.81285 7.32956 1.80113 10.002 1.80113ZM10.002 0C7.28658 0 6.94667 0.011721 5.88006 0.0586052C4.81735 0.105489 4.08674 0.277398 3.4538 0.52354C2.79351 0.781403 2.23481 1.12131 1.68002 1.68002C1.12131 2.23481 0.781403 2.79351 0.52354 3.44989C0.277398 4.08674 0.105489 4.81344 0.0586052 5.87615C0.011721 6.94667 0 7.28658 0 10.002C0 12.7173 0.011721 13.0572 0.0586052 14.1239C0.105489 15.1866 0.277398 15.9172 0.52354 16.5501C0.781403 17.2104 1.12131 17.7691 1.68002 18.3239C2.23481 18.8787 2.79351 19.2225 3.44989 19.4765C4.08674 19.7226 4.81344 19.8945 5.87615 19.9414C6.94276 19.9883 7.28267 20 9.99805 20C12.7134 20 13.0533 19.9883 14.1199 19.9414C15.1827 19.8945 15.9133 19.7226 16.5462 19.4765C17.2026 19.2225 17.7613 18.8787 18.3161 18.3239C18.8709 17.7691 19.2147 17.2104 19.4686 16.554C19.7148 15.9172 19.8867 15.1905 19.9336 14.1278C19.9805 13.0611 19.9922 12.7212 19.9922 10.0059C19.9922 7.29049 19.9805 6.95058 19.9336 5.88396C19.8867 4.82125 19.7148 4.09064 19.4686 3.45771C19.2225 2.79351 18.8826 2.23481 18.3239 1.68002C17.7691 1.12522 17.2104 0.781403 16.554 0.527447C15.9172 0.281305 15.1905 0.109396 14.1278 0.0625122C13.0572 0.011721 12.7173 0 10.002 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M10.002 4.86423C7.16546 4.86423 4.86423 7.16546 4.86423 10.002C4.86423 12.8384 7.16546 15.1397 10.002 15.1397C12.8384 15.1397 15.1397 12.8384 15.1397 10.002C15.1397 7.16546 12.8384 4.86423 10.002 4.86423ZM10.002 13.3346C8.16175 13.3346 6.66927 11.8422 6.66927 10.002C6.66927 8.16175 8.16175 6.66927 10.002 6.66927C11.8422 6.66927 13.3346 8.16175 13.3346 10.002C13.3346 11.8422 11.8422 13.3346 10.002 13.3346Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M16.5423 4.66103C16.5423 5.32522 16.0031 5.86048 15.3428 5.86048C14.6786 5.86048 14.1434 5.32131 14.1434 4.66103C14.1434 3.99683 14.6826 3.46157 15.3428 3.46157C16.0031 3.46157 16.5423 4.00074 16.5423 4.66103Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_pinterest: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0C4.47656 0 0 4.47656 0 10C0 14.2383 2.63672 17.8555 6.35547 19.3125C6.26953 18.5195 6.1875 17.3086 6.39062 16.4453C6.57422 15.6641 7.5625 11.4766 7.5625 11.4766C7.5625 11.4766 7.26172 10.8789 7.26172 9.99219C7.26172 8.60156 8.06641 7.5625 9.07031 7.5625C9.92187 7.5625 10.3359 8.20312 10.3359 8.97266C10.3359 9.83203 9.78906 11.1133 9.50781 12.3008C9.27344 13.2969 10.0078 14.1094 10.9883 14.1094C12.7656 14.1094 14.1328 12.2344 14.1328 9.53125C14.1328 7.13672 12.4141 5.46094 9.95703 5.46094C7.11328 5.46094 5.44141 7.59375 5.44141 9.80078C5.44141 10.6602 5.77344 11.582 6.1875 12.082C6.26953 12.1797 6.28125 12.2695 6.25781 12.3672C6.18359 12.6836 6.01172 13.3633 5.98047 13.5C5.9375 13.6836 5.83594 13.7227 5.64453 13.6328C4.39453 13.0508 3.61328 11.2266 3.61328 9.75781C3.61328 6.60156 5.90625 3.70703 10.2188 3.70703C13.6875 3.70703 16.3828 6.17969 16.3828 9.48438C16.3828 12.9297 14.2109 15.7031 11.1953 15.7031C10.1836 15.7031 9.23047 15.1758 8.90234 14.5547C8.90234 14.5547 8.40234 16.4648 8.28125 16.9336C8.05469 17.8008 7.44531 18.8906 7.03906 19.5547C7.97656 19.8438 8.96875 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_rss: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M0 6.79688V10.6172C2.49219 10.6172 4.85156 11.6016 6.61719 13.3672C8.38281 15.1328 9.35938 17.4922 9.35938 19.9922V20H13.1953C13.1953 16.3594 11.7109 13.0703 9.32031 10.6719C6.9375 8.28125 3.64062 6.80469 0 6.79688Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M2.65625 14.6797C1.92188 14.6797 1.26562 14.9766 0.78125 15.4609C0.296875 15.9453 0 16.6016 0 17.3359C0 18.0625 0.296875 18.7188 0.78125 19.2031C1.26562 19.6797 1.92188 19.9766 2.65625 19.9766C3.39062 19.9766 4.04688 19.6875 4.53125 19.2031C5.01562 18.7188 5.3125 18.0625 5.3125 17.3359C5.3125 16.6016 5.01562 15.9453 4.53125 15.4609C4.04688 14.9766 3.39062 14.6797 2.65625 14.6797Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M14.1328 5.86719C10.5156 2.24219 5.52344 0 0.0078125 0V3.82031C8.92188 3.82812 16.1641 11.0859 16.1719 20H20C20 14.4844 17.7578 9.49219 14.1328 5.86719Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_snapchat: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M17.581 13.7331C14.4839 12.2334 13.9903 9.91793 13.9683 9.74618C13.9417 9.53815 13.9116 9.37458 14.141 9.16297C14.3623 8.95851 15.3439 8.35076 15.6162 8.16061C16.0664 7.84574 16.2647 7.53139 16.1185 7.14496C16.0163 6.87763 15.7675 6.77694 15.5053 6.77694C15.4227 6.77719 15.3402 6.78645 15.2596 6.80454C14.7649 6.91188 14.2846 7.15979 14.0066 7.22675C13.9732 7.23536 13.9389 7.23999 13.9044 7.24055C13.7562 7.24055 13.7 7.17461 13.7143 6.99622C13.7491 6.45543 13.8226 5.39991 13.7373 4.41391C13.6203 3.05733 13.1829 2.38517 12.6642 1.79071C12.4133 1.50242 11.2483 0.263916 8.99989 0.263916C6.75152 0.263916 5.58799 1.50242 5.33862 1.78713C4.81843 2.38159 4.38153 3.05375 4.26554 4.41033C4.1802 5.39633 4.25685 6.45134 4.28853 6.99264C4.29875 7.16234 4.24663 7.23697 4.09844 7.23697C4.06395 7.23638 4.02965 7.23175 3.99624 7.22317C3.71877 7.15621 3.23844 6.9083 2.7438 6.80096C2.66311 6.78287 2.5807 6.77361 2.49801 6.77336C2.23485 6.77336 1.98702 6.87559 1.88482 7.14139C1.73867 7.52781 1.93592 7.84217 2.38764 8.15703C2.66 8.34718 3.64161 8.95442 3.86287 9.15939C4.0918 9.371 4.06216 9.53457 4.03559 9.74261C4.01362 9.91691 3.51949 12.2324 0.422867 13.7295C0.241464 13.8175 -0.0671757 14.0035 0.477032 14.3041C1.33141 14.7764 1.90015 14.7258 2.34216 15.0105C2.71723 15.2522 2.49546 15.7736 2.76833 15.9617C3.10354 16.1933 4.09435 15.9454 5.37439 16.3681C6.44748 16.7218 7.0995 17.7211 9.00244 17.7211C10.9054 17.7211 11.5763 16.7172 12.6305 16.3681C13.908 15.9454 14.9008 16.1933 15.2366 15.9617C15.5089 15.7736 15.2877 15.2522 15.6627 15.0105C16.1047 14.7258 16.673 14.7764 17.5279 14.3041C18.071 14.0071 17.7624 13.821 17.581 13.7331Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_soundcloud: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="9" viewBox="0 0 20 9" fill="none">
  <path d="M0.966096 4.67021C0.923344 4.67021 0.888366 4.70539 0.882843 4.75393L0.68627 6.61519L0.882843 8.43512C0.888366 8.48366 0.923344 8.51905 0.966096 8.51905C1.00823 8.51905 1.04239 8.48429 1.04914 8.43533L1.27292 6.61498L1.04914 4.75372C1.04239 4.70433 1.00823 4.67021 0.966096 4.67021Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M0.226643 5.38326C0.185119 5.38326 0.151982 5.41632 0.146459 5.46444L0 6.61519L0.146459 7.74645C0.151777 7.79435 0.184914 7.82741 0.226643 7.82741C0.267144 7.82741 0.300077 7.79435 0.306622 7.74687L0.479877 6.61519L0.306622 5.46338C0.300077 5.41632 0.267144 5.38326 0.226643 5.38326Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M1.75178 4.3052C1.699 4.3052 1.65687 4.34802 1.65155 4.40695L1.46479 6.61519L1.65155 8.74268C1.65687 8.80181 1.699 8.84442 1.75178 8.84442C1.80353 8.84442 1.84567 8.80181 1.8518 8.74289L2.06372 6.61498L1.8518 4.40674C1.84567 4.34802 1.80353 4.3052 1.75178 4.3052Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M2.544 4.2272C2.48182 4.2272 2.4313 4.2785 2.42639 4.34675L2.25006 6.61583L2.42639 8.8105C2.4313 8.87833 2.48182 8.92984 2.544 8.92984C2.60516 8.92984 2.65548 8.87833 2.66121 8.8105L2.86147 6.61583L2.66121 4.34633C2.65548 4.2785 2.60516 4.2272 2.544 4.2272Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M3.47655 4.51017C3.47164 4.43281 3.41355 4.37367 3.34237 4.37367C3.27016 4.37367 3.21248 4.4326 3.20798 4.51081L3.04147 6.61561L3.20798 8.82873C3.21248 8.90652 3.27037 8.96566 3.34237 8.96566C3.41376 8.96566 3.47164 8.90674 3.47655 8.82895L3.66535 6.61561L3.47655 4.51017Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M4.14748 3.03702C4.06648 3.03702 4.0002 3.10528 3.99611 3.19239L3.83984 6.61668L3.99611 8.82958C4.00041 8.91564 4.06668 8.9841 4.14748 8.9841C4.22767 8.9841 4.29394 8.91585 4.29885 8.82895V8.82979L4.47558 6.61689L4.29885 3.19239C4.29374 3.10528 4.22746 3.03702 4.14748 3.03702Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M4.94625 2.2483C4.85564 2.2483 4.78179 2.32419 4.7777 2.42106C4.7777 2.42148 4.63145 6.62855 4.63145 6.62855L4.77791 8.82767C4.782 8.92412 4.85564 9 4.94625 9C5.03626 9 5.11071 8.92412 5.1146 8.82725V8.82852L5.28008 6.62855L5.1146 2.42106C5.11071 2.32419 5.03626 2.2483 4.94625 2.2483Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M5.77673 1.86804C5.6763 1.86804 5.59468 1.95198 5.5912 2.05881L5.45518 6.61773L5.5912 8.79418C5.59489 8.90017 5.6763 8.98389 5.77673 8.98389C5.87655 8.98389 5.95817 8.90017 5.96226 8.79355V8.79482L6.11588 6.61795L5.96226 2.05881C5.95796 1.95198 5.87655 1.86804 5.77673 1.86804Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M6.80337 1.90556C6.7999 1.78855 6.71092 1.69677 6.60107 1.69677C6.49041 1.69677 6.40143 1.78877 6.39836 1.90556L6.27236 6.61773L6.39857 8.78062C6.40164 8.89635 6.49041 8.98792 6.60107 8.98792C6.71092 8.98792 6.8001 8.89635 6.80337 8.77998L6.94533 6.61837L6.80337 1.90556Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M7.43176 1.8C7.31107 1.8 7.21473 1.89941 7.21186 2.02638L7.09609 6.61858L7.21227 8.76048C7.21493 8.88618 7.31107 8.98601 7.43176 8.98601C7.55162 8.98601 7.64797 8.88596 7.65124 8.75921V8.7609L7.78174 6.61816L7.65124 2.02574C7.64797 1.89899 7.55162 1.8 7.43176 1.8Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M8.26898 1.94986C8.13889 1.94986 8.03457 2.05732 8.03211 2.19425L7.92636 6.61858L8.03211 8.74776C8.03457 8.88342 8.13889 8.99046 8.26898 8.99046C8.39888 8.99046 8.50299 8.88342 8.50545 8.74628V8.74797L8.62409 6.61922L8.50545 2.19447C8.50299 2.05732 8.39888 1.94986 8.26898 1.94986Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M9.25288 1.13676C9.21278 1.10857 9.16431 1.09204 9.11255 1.09204C9.06223 1.09204 9.01539 1.10794 8.97591 1.13464C8.90657 1.18149 8.86014 1.26225 8.85891 1.35424L8.85809 1.40384L8.76277 6.61773C8.76277 6.6207 8.85891 8.73399 8.85891 8.73399C8.85891 8.73738 8.85932 8.73971 8.85952 8.74289C8.86239 8.80181 8.88387 8.85608 8.91844 8.89911C8.96528 8.95697 9.03503 8.99428 9.11255 8.99428C9.18149 8.99428 9.24429 8.96481 9.2901 8.91733C9.33613 8.87007 9.36518 8.80478 9.3664 8.73229L9.47338 6.61901L9.36661 1.35403C9.36497 1.26352 9.31997 1.18382 9.25288 1.13676Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M10.0903 0.637589C10.0502 0.612153 10.0028 0.597315 9.95265 0.597315C9.88801 0.597315 9.82848 0.621479 9.78164 0.661329C9.7215 0.712836 9.68264 0.790415 9.68141 0.87732L9.6808 0.906147L9.57034 6.61986L9.68141 8.70389C9.68366 8.85587 9.80496 8.98177 9.95265 8.98177C10.0997 8.98177 10.221 8.85587 10.2231 8.70198V8.70452L10.3437 6.62007L10.2235 0.876896C10.222 0.775365 10.1684 0.686552 10.0903 0.637589Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M17.5399 3.90141C17.2032 3.90141 16.8812 3.97221 16.5887 4.09918C16.3925 1.80212 14.5336 0 12.2659 0C11.7108 0 11.1701 0.113189 10.6923 0.304593C10.5068 0.379204 10.4577 0.455511 10.4558 0.60431V8.69456C10.4577 8.85036 10.5743 8.97181 10.7213 8.98686C10.7277 8.98771 17.5403 8.98686 17.5403 8.98686C18.8989 8.98686 20 7.85836 20 6.45028C19.9998 5.04263 18.8987 3.90141 17.5399 3.90141Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_tiktok: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
  <path d="M14.883 4.27729C14.7506 4.20752 14.6217 4.13104 14.4968 4.04813C14.1337 3.80333 13.8007 3.51489 13.5051 3.18901C12.7655 2.32613 12.4893 1.45076 12.3876 0.837875H12.3917C12.3067 0.32915 12.3418 0 12.3471 0H8.97851V13.2818C8.97851 13.4602 8.97851 13.6364 8.97116 13.8106C8.97116 13.8322 8.96911 13.8522 8.96789 13.8756C8.96789 13.8851 8.96789 13.8951 8.96584 13.9051C8.96584 13.9076 8.96584 13.9101 8.96584 13.9126C8.93034 14.3892 8.78052 14.8495 8.52957 15.2532C8.27862 15.6568 7.93424 15.9914 7.52671 16.2275C7.10197 16.4739 6.62159 16.6032 6.13293 16.6025C4.56344 16.6025 3.29143 15.2976 3.29143 13.686C3.29143 12.0744 4.56344 10.7695 6.13293 10.7695C6.43002 10.7692 6.72529 10.8169 7.00777 10.9107L7.01185 7.41338C6.15432 7.30043 5.28314 7.36992 4.45327 7.61747C3.62339 7.86502 2.85284 8.28524 2.19021 8.85164C1.6096 9.36603 1.12148 9.97979 0.747808 10.6653C0.605611 10.9153 0.0691014 11.9198 0.00413184 13.5502C-0.0367295 14.4755 0.235816 15.4342 0.365755 15.8305V15.8388C0.447477 16.0721 0.764153 16.8683 1.28023 17.5395C1.69638 18.078 2.18804 18.5509 2.73939 18.9432V18.9349L2.74756 18.9432C4.37834 20.0732 6.18645 19.999 6.18645 19.999C6.49945 19.9861 7.54795 19.999 8.73865 19.4236C10.0593 18.7857 10.8111 17.8354 10.8111 17.8354C11.2915 17.2675 11.6734 16.6204 11.9405 15.9217C12.2454 15.1047 12.3471 14.1247 12.3471 13.7331V6.68675C12.388 6.71175 12.9323 7.07881 12.9323 7.07881C12.9323 7.07881 13.7164 7.59129 14.9398 7.92502C15.8175 8.16251 17 8.21251 17 8.21251V4.80268C16.5857 4.84851 15.7443 4.71518 14.883 4.27729Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_tumblr: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M8.16675 20C5.16675 20 2.91675 18.4583 2.91675 14.75V8.83333H0.166748V5.625C3.16675 4.83333 4.41675 2.25 4.58342 0H7.70842V5.08333H11.3334V8.83333H7.70842V14C7.70842 15.5417 8.50008 16.0833 9.75008 16.0833H11.5001V20H8.16675Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_vimeo: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
  <path d="M19.8881 1.69862C19.5362 0.229472 17.8797 -0.185772 16.2069 0.0712117C15.3489 0.204969 12.4525 1.49916 11.4656 4.60025C13.2117 4.46356 14.1279 4.72713 13.9598 6.67303C13.8886 7.48846 13.4838 8.38049 13.0286 9.23624C12.5054 10.2241 11.5212 12.1601 10.2329 10.7655C9.0727 9.50732 9.16169 7.10527 8.89749 5.5037C8.74774 4.60315 8.59141 3.48589 8.30044 2.56221C8.05194 1.76626 7.47709 0.809563 6.77407 0.599948C6.01998 0.377956 5.08804 0.727832 4.54143 1.05518C2.83909 2.06578 1.56386 3.45811 0.102263 4.65849C-0.0821777 4.84616 0.0270352 5.00379 0.0891308 5.14342C0.299039 5.47202 0.380141 5.67144 0.780407 5.73002C1.81954 5.88433 2.8077 4.74937 3.4963 5.93241C3.9175 6.65239 4.0489 7.44205 4.31772 8.21766C4.67544 9.25684 4.95332 10.3843 5.2476 11.5768C5.74663 13.592 6.35542 16.6046 8.0787 17.3458C8.95631 17.7212 10.276 17.218 10.9437 16.8167C12.7553 15.7305 14.2286 14.2052 15.375 12.5542C18.3584 8.26088 19.7887 3.94699 19.9442 3.12531C20.0548 2.52978 19.9823 2.0383 19.8881 1.69862Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_x: `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
  <path d="M17.4256 0H20.8185L13.4062 8.47179L22.1262 20H15.2985L9.95077 13.0082L3.83179 20H0.436923L8.36513 10.9385L0 0H7.00103L11.8349 6.39077L17.4256 0ZM16.2349 17.9692H18.1149L5.97949 1.9241H3.96205L16.2349 17.9692Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
  <path d="M19.8008 3.03516C19.8008 3.03516 19.6055 1.65625 19.0039 1.05078C18.2422 0.253906 17.3906 0.25 17 0.203125C14.2031 -1.11759e-07 10.0039 0 10.0039 0H9.99609C9.99609 0 5.79688 -1.11759e-07 3 0.203125C2.60938 0.25 1.75781 0.253906 0.996094 1.05078C0.394531 1.65625 0.203125 3.03516 0.203125 3.03516C0.203125 3.03516 0 4.65625 0 6.27344V7.78906C0 9.40625 0.199219 11.0273 0.199219 11.0273C0.199219 11.0273 0.394531 12.4062 0.992187 13.0117C1.75391 13.8086 2.75391 13.7812 3.19922 13.8672C4.80078 14.0195 10 14.0664 10 14.0664C10 14.0664 14.2031 14.0586 17 13.8594C17.3906 13.8125 18.2422 13.8086 19.0039 13.0117C19.6055 12.4062 19.8008 11.0273 19.8008 11.0273C19.8008 11.0273 20 9.41016 20 7.78906V6.27344C20 4.65625 19.8008 3.03516 19.8008 3.03516ZM7.93359 9.62891V4.00781L13.3359 6.82812L7.93359 9.62891Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Filled *** //
  account_balance_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M3.22502 15.875V11.65C3.22502 11.2666 3.36252 10.9416 3.63752 10.675C3.91252 10.4083 4.24169 10.275 4.62502 10.275C5.00836 10.275 5.33336 10.4083 5.60002 10.675C5.86669 10.9416 6.00002 11.2666 6.00002 11.65V15.9C6.00002 16.2833 5.86669 16.6083 5.60002 16.875C5.33336 17.1416 5.00836 17.275 4.62502 17.275C4.24169 17.275 3.91252 17.1375 3.63752 16.8625C3.36252 16.5875 3.22502 16.2583 3.22502 15.875ZM9.62502 15.9V11.65C9.62502 11.2666 9.75836 10.9416 10.025 10.675C10.2917 10.4083 10.6167 10.275 11 10.275C11.3834 10.275 11.7084 10.4083 11.975 10.675C12.2417 10.9416 12.375 11.2666 12.375 11.65V15.9C12.375 16.2833 12.2417 16.6083 11.975 16.875C11.7084 17.1416 11.3834 17.275 11 17.275C10.6167 17.275 10.2917 17.1416 10.025 16.875C9.75836 16.6083 9.62502 16.2833 9.62502 15.9ZM1.72502 21.65C1.29169 21.65 0.920858 21.4958 0.612524 21.1875C0.304191 20.8791 0.150024 20.5083 0.150024 20.075C0.150024 19.6416 0.304191 19.2708 0.612524 18.9625C0.920858 18.6541 1.29169 18.5 1.72502 18.5H20.275C20.7084 18.5 21.0792 18.6541 21.3875 18.9625C21.6959 19.2708 21.85 19.6416 21.85 20.075C21.85 20.5083 21.6959 20.8791 21.3875 21.1875C21.0792 21.4958 20.7084 21.65 20.275 21.65H1.72502ZM16 15.875V11.65C16 11.2666 16.1375 10.9416 16.4125 10.675C16.6875 10.4083 17.0167 10.275 17.4 10.275C17.7834 10.275 18.1084 10.4083 18.375 10.675C18.6417 10.9416 18.775 11.2666 18.775 11.65V15.9C18.775 16.2833 18.6417 16.6083 18.375 16.875C18.1084 17.1416 17.7834 17.275 17.4 17.275C17.0167 17.275 16.6875 17.1375 16.4125 16.8625C16.1375 16.5875 16 16.2583 16 15.875ZM20.175 9.02495H1.65002C1.23336 9.02495 0.879191 8.87912 0.587524 8.58745C0.295858 8.29578 0.150024 7.94162 0.150024 7.52495V6.57495C0.150024 6.29162 0.225024 6.02912 0.375024 5.78745C0.525024 5.54578 0.725024 5.35828 0.975024 5.22495L9.60002 0.924951C10.0334 0.691618 10.5 0.574951 11 0.574951C11.5 0.574951 11.9667 0.691618 12.4 0.924951L20.925 5.17495C21.2084 5.30828 21.4334 5.51245 21.6 5.78745C21.7667 6.06245 21.85 6.36662 21.85 6.69995V7.32495C21.85 7.79162 21.6875 8.19162 21.3625 8.52495C21.0375 8.85828 20.6417 9.02495 20.175 9.02495Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  cancel_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M10.9242 12.3032L13.8242 15.2032C14.0075 15.3866 14.2408 15.4782 14.5242 15.4782C14.8075 15.4782 15.0408 15.3866 15.2242 15.2032C15.4075 15.0199 15.4992 14.7866 15.4992 14.5032C15.4992 14.2199 15.4075 13.9866 15.2242 13.8032L12.3242 10.9032L15.2242 8.00324C15.4075 7.81991 15.4992 7.58658 15.4992 7.30324C15.4992 7.01991 15.4075 6.78658 15.2242 6.60324C15.0408 6.41991 14.8075 6.32824 14.5242 6.32824C14.2408 6.32824 14.0075 6.41991 13.8242 6.60324L10.9242 9.50324L8.02416 6.60324C7.84083 6.41991 7.6075 6.32824 7.32416 6.32824C7.04083 6.32824 6.8075 6.41991 6.62416 6.60324C6.44083 6.78658 6.34916 7.01991 6.34916 7.30324C6.34916 7.58658 6.44083 7.81991 6.62416 8.00324L9.52416 10.9032L6.62416 13.8032C6.44083 13.9866 6.34916 14.2199 6.34916 14.5032C6.34916 14.7866 6.44083 15.0199 6.62416 15.2032C6.8075 15.3866 7.04083 15.4782 7.32416 15.4782C7.6075 15.4782 7.84083 15.3866 8.02416 15.2032L10.9242 12.3032ZM10.9242 20.9032C9.54083 20.9032 8.24083 20.6407 7.02416 20.1157C5.8075 19.5907 4.74916 18.8782 3.84916 17.9782C2.94916 17.0782 2.23666 16.0199 1.71166 14.8032C1.18666 13.5866 0.924164 12.2866 0.924164 10.9032C0.924164 9.51991 1.18666 8.21991 1.71166 7.00324C2.23666 5.78658 2.94916 4.72824 3.84916 3.82824C4.74916 2.92824 5.8075 2.21574 7.02416 1.69074C8.24083 1.16574 9.54083 0.903244 10.9242 0.903244C12.3075 0.903244 13.6075 1.16574 14.8242 1.69074C16.0408 2.21574 17.0992 2.92824 17.9992 3.82824C18.8992 4.72824 19.6117 5.78658 20.1367 7.00324C20.6617 8.21991 20.9242 9.51991 20.9242 10.9032C20.9242 12.2866 20.6617 13.5866 20.1367 14.8032C19.6117 16.0199 18.8992 17.0782 17.9992 17.9782C17.0992 18.8782 16.0408 19.5907 14.8242 20.1157C13.6075 20.6407 12.3075 20.9032 10.9242 20.9032Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  language_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 21.8499C9.51669 21.8499 8.11669 21.5624 6.80002 20.9874C5.48336 20.4124 4.33336 19.6332 3.35002 18.6499C2.36669 17.6666 1.58752 16.5166 1.01252 15.1999C0.437524 13.8832 0.150024 12.4832 0.150024 10.9999C0.150024 9.51657 0.437524 8.11657 1.01252 6.7999C1.58752 5.48324 2.36669 4.33324 3.35002 3.3499C4.33336 2.36657 5.48336 1.5874 6.80002 1.0124C8.11669 0.437402 9.51669 0.149902 11 0.149902C12.4834 0.149902 13.8834 0.437402 15.2 1.0124C16.5167 1.5874 17.6667 2.36657 18.65 3.3499C19.6334 4.33324 20.4125 5.48324 20.9875 6.7999C21.5625 8.11657 21.85 9.51657 21.85 10.9999C21.85 12.4832 21.5625 13.8832 20.9875 15.1999C20.4125 16.5166 19.6334 17.6666 18.65 18.6499C17.6667 19.6332 16.5167 20.4124 15.2 20.9874C13.8834 21.5624 12.4834 21.8499 11 21.8499ZM10.95 18.6749C11.3167 18.1082 11.6584 17.5041 11.975 16.8624C12.2917 16.2207 12.55 15.5499 12.75 14.8499H9.22502C9.42502 15.5499 9.67086 16.2207 9.96252 16.8624C10.2542 17.5041 10.5834 18.1082 10.95 18.6749ZM8.47502 18.2749C8.14169 17.7582 7.87919 17.2041 7.68752 16.6124C7.49586 16.0207 7.32502 15.4332 7.17502 14.8499H4.37502C4.80836 15.6499 5.37502 16.3499 6.07502 16.9499C6.77502 17.5499 7.57502 17.9916 8.47502 18.2749ZM13.45 18.2749C14.35 17.9916 15.1584 17.5499 15.875 16.9499C16.5917 16.3499 17.1667 15.6499 17.6 14.8499H14.8C14.65 15.4332 14.4709 16.0207 14.2625 16.6124C14.0542 17.2041 13.7834 17.7582 13.45 18.2749ZM3.55002 12.9249H6.77502C6.72502 12.5916 6.68752 12.2707 6.66252 11.9624C6.63752 11.6541 6.62502 11.3332 6.62502 10.9999C6.62502 10.6499 6.63752 10.3249 6.66252 10.0249C6.68752 9.7249 6.72502 9.40824 6.77502 9.0749H3.55002C3.46669 9.39157 3.40419 9.70407 3.36252 10.0124C3.32086 10.3207 3.30002 10.6499 3.30002 10.9999C3.30002 11.3332 3.32086 11.6582 3.36252 11.9749C3.40419 12.2916 3.46669 12.6082 3.55002 12.9249ZM8.77502 12.9249H13.2C13.25 12.5916 13.2792 12.2707 13.2875 11.9624C13.2959 11.6541 13.3 11.3332 13.3 10.9999C13.3 10.6499 13.2959 10.3249 13.2875 10.0249C13.2792 9.7249 13.25 9.40824 13.2 9.0749H8.77502C8.72502 9.40824 8.68752 9.7249 8.66252 10.0249C8.63752 10.3249 8.62502 10.6499 8.62502 10.9999C8.62502 11.3332 8.63752 11.6541 8.66252 11.9624C8.68752 12.2707 8.72502 12.5916 8.77502 12.9249ZM15.2 12.9249H18.4C18.4834 12.6082 18.5459 12.2916 18.5875 11.9749C18.6292 11.6582 18.65 11.3332 18.65 10.9999C18.65 10.6499 18.6292 10.3207 18.5875 10.0124C18.5459 9.70407 18.4834 9.39157 18.4 9.0749H15.2C15.2334 9.40824 15.2584 9.7249 15.275 10.0249C15.2917 10.3249 15.3 10.6499 15.3 10.9999C15.3 11.3332 15.2917 11.6541 15.275 11.9624C15.2584 12.2707 15.2334 12.5916 15.2 12.9249ZM14.8 7.1249H17.6C17.1667 6.3249 16.5917 5.62907 15.875 5.0374C15.1584 4.44574 14.35 4.00824 13.45 3.7249C13.7834 4.24157 14.0542 4.79157 14.2625 5.3749C14.4709 5.95824 14.65 6.54157 14.8 7.1249ZM9.22502 7.1249H12.75C12.5667 6.4249 12.3167 5.75824 12 5.1249C11.6834 4.49157 11.3334 3.89157 10.95 3.3249C10.5834 3.89157 10.2542 4.49157 9.96252 5.1249C9.67086 5.75824 9.42502 6.4249 9.22502 7.1249ZM4.37502 7.1249H7.17502C7.32502 6.54157 7.49586 5.95824 7.68752 5.3749C7.87919 4.79157 8.14169 4.24157 8.47502 3.7249C7.57502 4.00824 6.77502 4.44574 6.07502 5.0374C5.37502 5.62907 4.80836 6.3249 4.37502 7.1249Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  lock_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
  <path d="M3.30002 22.7751C2.43369 22.7751 1.69211 22.4667 1.07527 21.8498C0.458441 21.2328 0.150024 20.4913 0.150024 19.6251V10.2251C0.150024 9.35893 0.458441 8.61735 1.07527 8.00035C1.69211 7.38351 2.43369 7.0751 3.30002 7.0751H3.62502V5.8001C3.62502 4.28343 4.14586 2.99593 5.18752 1.9376C6.22919 0.879264 7.50002 0.350098 9.00002 0.350098C10.5 0.350098 11.7709 0.879264 12.8125 1.9376C13.8542 2.99593 14.375 4.28343 14.375 5.8001V7.0751H14.7C15.5662 7.0751 16.3078 7.38351 16.9248 8.00035C17.5416 8.61735 17.85 9.35893 17.85 10.2251V19.6251C17.85 20.4913 17.5416 21.2328 16.9248 21.8498C16.3078 22.4667 15.5662 22.7751 14.7 22.7751H3.30002ZM9.00002 16.9251C9.55002 16.9251 10.0209 16.7293 10.4125 16.3376C10.8042 15.9459 11 15.4751 11 14.9251C11 14.3751 10.8042 13.9043 10.4125 13.5126C10.0209 13.1209 9.55002 12.9251 9.00002 12.9251C8.45002 12.9251 7.97919 13.1209 7.58752 13.5126C7.19586 13.9043 7.00002 14.3751 7.00002 14.9251C7.00002 15.4751 7.19586 15.9459 7.58752 16.3376C7.97919 16.7293 8.45002 16.9251 9.00002 16.9251ZM6.77502 7.0751H11.225V5.8001C11.225 5.16126 11.0125 4.61818 10.5875 4.17085C10.1625 3.72368 9.63336 3.5001 9.00002 3.5001C8.36669 3.5001 7.83752 3.72368 7.41252 4.17085C6.98752 4.61818 6.77502 5.16126 6.77502 5.8001V7.0751Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`
}, q9 = v`
  :host {
    display: inline-block;
    --_nys-icon-size: 0.7em; /* If cap isn't supported, a fallback value of 0.7em is used, as it closely approximates the height of capital letters in most fonts. */
    box-sizing: content-box !important;
  }

  /* Use 'cap' if supported */
  @supports (font-size: 1cap) {
    :host {
      --_nys-icon-size: 1cap;
    }
  }

  /* SVG size and color is initially determined by the parent's font-size and text-color */
  .nys-icon--svg {
    width: var(--_nys-icon-size, 1em);
    height: var(--_nys-icon-size, 1em);
    display: block;
    white-space: nowrap;
  }

  /* Relative Sizes */
  .nys-icon--2xs {
    width: calc(var(--_nys-icon-size) * 0.75);
    height: calc(var(--_nys-icon-size) * 0.75);
  }
  .nys-icon--xs {
    width: calc(var(--_nys-icon-size) * 0.875);
    height: calc(var(--_nys-icon-size) * 0.875);
  }
  .nys-icon--sm {
    width: var(--_nys-icon-size);
    height: var(--_nys-icon-size);
  }
  .nys-icon--md {
    width: calc(var(--_nys-icon-size) * 1.125);
    height: calc(var(--_nys-icon-size) * 1.125);
  }
  .nys-icon--lg {
    width: calc(var(--_nys-icon-size) * 1.25);
    height: calc(var(--_nys-icon-size) * 1.25);
  }
  .nys-icon--xl {
    width: calc(var(--_nys-icon-size) * 1.5);
    height: calc(var(--_nys-icon-size) * 1.5);
  }
  .nys-icon--2xl {
    width: calc(var(--_nys-icon-size) * 1.875);
    height: calc(var(--_nys-icon-size) * 1.875);
  }
  .nys-icon--3xl {
    width: calc(var(--_nys-icon-size) * 2.25);
    height: calc(var(--_nys-icon-size) * 2.25);
  }
  .nys-icon--4xl {
    width: calc(var(--_nys-icon-size) * 3);
    height: calc(var(--_nys-icon-size) * 3);
  }

  /* Literal Sizing */
  .nys-icon--12 {
    width: 0.75rem;
    height: 0.75rem;
  }
  .nys-icon--16 {
    width: 1rem;
    height: 1rem;
  }
  .nys-icon--24 {
    width: 1.5rem;
    height: 1.5rem;
  }
  .nys-icon--32 {
    width: 2rem;
    height: 2rem;
  }
  .nys-icon--48 {
    width: 3rem;
    height: 3rem;
  }
  .nys-icon--64 {
    width: 4rem;
    height: 4rem;
  }

  /* Flipping Icons */
  .nys-icon--flip-horizontal {
    transform: scaleX(-1);
  }
  .nys-icon--flip-vertical {
    transform: scaleY(-1);
  }
  .nys-icon--flip-both {
    transform: scale(-1, -1);
  }
`;
var N9 = Object.defineProperty, j9 = Object.getOwnPropertyDescriptor, e5 = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? j9(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && N9(t, e, r), r;
}, g5;
const H1 = (g5 = class extends p {
  constructor() {
    super(...arguments), this.name = "", this.label = "", this.rotate = "0", this.flip = "", this.color = "", this._size = "sm";
  }
  get size() {
    return this._size;
  }
  set size(s) {
    this._size = g5.VALID_TYPES.includes(
      s
    ) ? s : "sm";
  }
  getIcon() {
    const s = T9[this.name], t = !!this.label;
    if (!s) return null;
    const e = new DOMParser().parseFromString(s, "image/svg+xml").documentElement;
    return e instanceof SVGElement ? (e.setAttribute("role", "img"), e.setAttribute("aria-label", t ? this.label : ""), e.setAttribute("aria-hidden", t ? "false" : "true"), e.style.rotate = `${this.rotate}deg`, e.style.color = this.color || "currentcolor", e.classList.add(`nys-icon--${this.size}`), e.classList.add("nys-icon--svg"), this.flip && e.classList.add(`nys-icon--flip-${this.flip}`), e) : null;
  }
  render() {
    const s = this.getIcon();
    return s ? c`${s}` : null;
  }
}, g5.styles = q9, g5.VALID_TYPES = [
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "12",
  "16",
  "24",
  "32",
  "48",
  "64"
], g5);
e5([
  t5({ type: String, reflect: !0 })
], H1.prototype, "name", 2);
e5([
  t5({ type: String })
], H1.prototype, "label", 2);
e5([
  t5({ type: String })
], H1.prototype, "rotate", 2);
e5([
  t5({ type: String })
], H1.prototype, "flip", 2);
e5([
  t5({ type: String })
], H1.prototype, "color", 2);
e5([
  t5({ reflect: !0 })
], H1.prototype, "size", 1);
let F9 = H1;
customElements.get("nys-icon") || customElements.define("nys-icon", F9);
/*!
   * Label v1.1.1
   * Part of the New York State Design System
   * A design system for New York State's digital products.
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y5 = globalThis, Q2 = Y5.ShadowRoot && (Y5.ShadyCSS === void 0 || Y5.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Q3 = Symbol(), p3 = /* @__PURE__ */ new WeakMap();
let G9 = class {
  constructor(s, t, e) {
    if (this._$cssResult$ = !0, e !== Q3) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = s, this.t = t;
  }
  get styleSheet() {
    let s = this.o;
    const t = this.t;
    if (Q2 && s === void 0) {
      const e = t !== void 0 && t.length === 1;
      e && (s = p3.get(t)), s === void 0 && ((this.o = s = new CSSStyleSheet()).replaceSync(this.cssText), e && p3.set(t, s));
    }
    return s;
  }
  toString() {
    return this.cssText;
  }
};
const W9 = (s) => new G9(typeof s == "string" ? s : s + "", void 0, Q3), Y9 = (s, t) => {
  if (Q2) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const o = document.createElement("style"), r = Y5.litNonce;
    r !== void 0 && o.setAttribute("nonce", r), o.textContent = e.cssText, s.appendChild(o);
  }
}, u3 = Q2 ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const o of t.cssRules) e += o.cssText;
  return W9(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: K9, defineProperty: J9, getOwnPropertyDescriptor: X9, getOwnPropertyNames: Q9, getOwnPropertySymbols: t4, getPrototypeOf: e4 } = Object, q1 = globalThis, v3 = q1.trustedTypes, s4 = v3 ? v3.emptyScript : "", y3 = q1.reactiveElementPolyfillSupport, S5 = (s, t) => s, d2 = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? s4 : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, t7 = (s, t) => !K9(s, t), g3 = { attribute: !0, type: String, converter: d2, reflect: !1, hasChanged: t7 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), q1.litPropertyMetadata ?? (q1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let f5 = class extends HTMLElement {
  static addInitializer(s) {
    this._$Ei(), (this.l ?? (this.l = [])).push(s);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(s, t = g3) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(s, t), !t.noAccessor) {
      const e = Symbol(), o = this.getPropertyDescriptor(s, e, t);
      o !== void 0 && J9(this.prototype, s, o);
    }
  }
  static getPropertyDescriptor(s, t, e) {
    const { get: o, set: r } = X9(this.prototype, s) ?? { get() {
      return this[t];
    }, set(n) {
      this[t] = n;
    } };
    return { get() {
      return o == null ? void 0 : o.call(this);
    }, set(n) {
      const i = o == null ? void 0 : o.call(this);
      r.call(this, n), this.requestUpdate(s, i, e);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(s) {
    return this.elementProperties.get(s) ?? g3;
  }
  static _$Ei() {
    if (this.hasOwnProperty(S5("elementProperties"))) return;
    const s = e4(this);
    s.finalize(), s.l !== void 0 && (this.l = [...s.l]), this.elementProperties = new Map(s.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(S5("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(S5("properties"))) {
      const t = this.properties, e = [...Q9(t), ...t4(t)];
      for (const o of e) this.createProperty(o, t[o]);
    }
    const s = this[Symbol.metadata];
    if (s !== null) {
      const t = litPropertyMetadata.get(s);
      if (t !== void 0) for (const [e, o] of t) this.elementProperties.set(e, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, e] of this.elementProperties) {
      const o = this._$Eu(t, e);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(s) {
    const t = [];
    if (Array.isArray(s)) {
      const e = new Set(s.flat(1 / 0).reverse());
      for (const o of e) t.unshift(u3(o));
    } else s !== void 0 && t.push(u3(s));
    return t;
  }
  static _$Eu(s, t) {
    const e = t.attribute;
    return e === !1 ? void 0 : typeof e == "string" ? e : typeof s == "string" ? s.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var s;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (s = this.constructor.l) == null || s.forEach((t) => t(this));
  }
  addController(s) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(s), this.renderRoot !== void 0 && this.isConnected && ((t = s.hostConnected) == null || t.call(s));
  }
  removeController(s) {
    var t;
    (t = this._$EO) == null || t.delete(s);
  }
  _$E_() {
    const s = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const e of t.keys()) this.hasOwnProperty(e) && (s.set(e, this[e]), delete this[e]);
    s.size > 0 && (this._$Ep = s);
  }
  createRenderRoot() {
    const s = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Y9(s, this.constructor.elementStyles), s;
  }
  connectedCallback() {
    var s;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (s = this._$EO) == null || s.forEach((t) => {
      var e;
      return (e = t.hostConnected) == null ? void 0 : e.call(t);
    });
  }
  enableUpdating(s) {
  }
  disconnectedCallback() {
    var s;
    (s = this._$EO) == null || s.forEach((t) => {
      var e;
      return (e = t.hostDisconnected) == null ? void 0 : e.call(t);
    });
  }
  attributeChangedCallback(s, t, e) {
    this._$AK(s, e);
  }
  _$EC(s, t) {
    var e;
    const o = this.constructor.elementProperties.get(s), r = this.constructor._$Eu(s, o);
    if (r !== void 0 && o.reflect === !0) {
      const n = (((e = o.converter) == null ? void 0 : e.toAttribute) !== void 0 ? o.converter : d2).toAttribute(t, o.type);
      this._$Em = s, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$Em = null;
    }
  }
  _$AK(s, t) {
    var e;
    const o = this.constructor, r = o._$Eh.get(s);
    if (r !== void 0 && this._$Em !== r) {
      const n = o.getPropertyOptions(r), i = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((e = n.converter) == null ? void 0 : e.fromAttribute) !== void 0 ? n.converter : d2;
      this._$Em = r, this[r] = i.fromAttribute(t, n.type), this._$Em = null;
    }
  }
  requestUpdate(s, t, e) {
    if (s !== void 0) {
      if (e ?? (e = this.constructor.getPropertyOptions(s)), !(e.hasChanged ?? t7)(this[s], t)) return;
      this.P(s, t, e);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(s, t, e) {
    this._$AL.has(s) || this._$AL.set(s, t), e.reflect === !0 && this._$Em !== s && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(s);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const s = this.scheduleUpdate();
    return s != null && await s, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [r, n] of o) n.wrapped !== !0 || this._$AL.has(r) || this[r] === void 0 || this.P(r, this[r], n);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((o) => {
        var r;
        return (r = o.hostUpdate) == null ? void 0 : r.call(o);
      }), this.update(e)) : this._$EU();
    } catch (o) {
      throw t = !1, this._$EU(), o;
    }
    t && this._$AE(e);
  }
  willUpdate(s) {
  }
  _$AE(s) {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostUpdated) == null ? void 0 : o.call(e);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(s)), this.updated(s);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(s) {
    return !0;
  }
  update(s) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(s) {
  }
  firstUpdated(s) {
  }
};
f5.elementStyles = [], f5.shadowRootOptions = { mode: "open" }, f5[S5("elementProperties")] = /* @__PURE__ */ new Map(), f5[S5("finalized")] = /* @__PURE__ */ new Map(), y3 == null || y3({ ReactiveElement: f5 }), (q1.reactiveElementVersions ?? (q1.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const o4 = { attribute: !0, type: String, converter: d2, reflect: !1, hasChanged: t7 }, r4 = (s = o4, t, e) => {
  const { kind: o, metadata: r } = e;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), n.set(e.name, s), o === "accessor") {
    const { name: i } = e;
    return { set(l) {
      const C = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(i, C, s);
    }, init(l) {
      return l !== void 0 && this.P(i, void 0, s), l;
    } };
  }
  if (o === "setter") {
    const { name: i } = e;
    return function(l) {
      const C = this[i];
      t.call(this, l), this.requestUpdate(i, C, s);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function m2(s) {
  return (t, e) => typeof e == "object" ? r4(s, t, e) : ((o, r, n) => {
    const i = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, i ? { ...o, wrapped: !0 } : o), i ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(s, t, e);
}
const n4 = v`
  :host {
    /* Label Typography */
    --_nys-label-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-label-font-weight: var(--nys-font-weight-semibold, 600);
    --_nys-label-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-label-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-label-letter-spacing: var(--nys-font-letterspacing-ui-md, 0.044px);
    --_nys-label-font-color: var(--nys-color-text, #1b1b1b);

    /* Description */
    --nys-description-font-weight: var(--nys-font-weight-regular, 400);
    --nys-description-font-style: italic;
    --nys-description-font-color: var(--nys-color-text, #1b1b1b);

    /* Required Flag */
    --nys-required-font-color: var(--nys-color-danger, #b52c2c);

    /* Optional Flag */
    --nys-optional-font-weight: var(--nys-font-weight-regular, 400);
    --nys-optional-font-color: var(--nys-color-text-weak, #4a4d4f);

    /* Spacing */
    --_nys-label-flag-gap: var(--nys-space-2px, 2px);
  }

  .nys-label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: var(--_nys-label-font-family);
    font-size: var(--_nys-label-font-size);
    line-height: var(--_nys-label-line-height);
    letter-spacing: var(--_nys-label-letter-spacing);
  }

  .nys-label__labelwrapper {
    display: flex;
    gap: var(--_nys-label-flag-gap);
  }

  .nys-label__label {
    font-weight: var(--_nys-label-font-weight);
    color: var(--_nys-label-font-color);
  }

  .nys-label__description {
    font-weight: var(--nys-description-font-weight);
    font-style: var(--nys-description-font-style);
    color: var(--nys-description-font-color);
  }

  .nys-label__required {
    font-weight: var(--_nys-label-font-weight);
    color: var(--nys-required-font-color);
  }

  .nys-label__optional {
    font-weight: var(--nys-optional-font-weight);
    color: var(--nys-optional-font-color);
  }
`;
var i4 = Object.defineProperty, x2 = (s, t, e, o) => {
  for (var r = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = i(t, e, r) || r);
  return r && i4(t, e, r), r;
};
const t0 = class extends p {
  constructor() {
    super(...arguments), this.id = "", this.label = "", this.description = "", this.flag = "";
  }
  render() {
    return c`
      <div class="nys-label">
        <label for=${this.id} class="nys-label__label"
          >${this.label}
          ${this.flag === "required" ? c`<label class="nys-label__required">*</label>` : ""}
          ${this.flag === "optional" ? c`<label class="nys-label__optional">(Optional)</label>` : ""}</label
        >
        <label for=${this.id} class="nys-label__description">
          <slot name="description">${this.description}</slot>
        </label>
      </div>
    `;
  }
};
t0.styles = n4;
let I5 = t0;
x2([
  m2({ type: String })
], I5.prototype, "id");
x2([
  m2({ type: String })
], I5.prototype, "label");
x2([
  m2({ type: String })
], I5.prototype, "description");
x2([
  m2({ type: String })
], I5.prototype, "flag");
customElements.get("nys-label") || customElements.define("nys-label", I5);
/*!
   * Error Message v1.1.1
   * Part of the New York State Design System
   * A design system for New York State's digital products.
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const K5 = globalThis, e7 = K5.ShadowRoot && (K5.ShadyCSS === void 0 || K5.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, e0 = Symbol(), f3 = /* @__PURE__ */ new WeakMap();
let l4 = class {
  constructor(s, t, e) {
    if (this._$cssResult$ = !0, e !== e0) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = s, this.t = t;
  }
  get styleSheet() {
    let s = this.o;
    const t = this.t;
    if (e7 && s === void 0) {
      const e = t !== void 0 && t.length === 1;
      e && (s = f3.get(t)), s === void 0 && ((this.o = s = new CSSStyleSheet()).replaceSync(this.cssText), e && f3.set(t, s));
    }
    return s;
  }
  toString() {
    return this.cssText;
  }
};
const a4 = (s) => new l4(typeof s == "string" ? s : s + "", void 0, e0), C4 = (s, t) => {
  if (e7) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const o = document.createElement("style"), r = K5.litNonce;
    r !== void 0 && o.setAttribute("nonce", r), o.textContent = e.cssText, s.appendChild(o);
  }
}, w3 = e7 ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const o of t.cssRules) e += o.cssText;
  return a4(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: c4, defineProperty: h4, getOwnPropertyDescriptor: d4, getOwnPropertyNames: p4, getOwnPropertySymbols: u4, getPrototypeOf: v4 } = Object, N1 = globalThis, _3 = N1.trustedTypes, y4 = _3 ? _3.emptyScript : "", b3 = N1.reactiveElementPolyfillSupport, E5 = (s, t) => s, p2 = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? y4 : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, s7 = (s, t) => !c4(s, t), m3 = { attribute: !0, type: String, converter: p2, reflect: !1, hasChanged: s7 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), N1.litPropertyMetadata ?? (N1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class w5 extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = m3) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const o = Symbol(), r = this.getPropertyDescriptor(t, o, e);
      r !== void 0 && h4(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, o) {
    const { get: r, set: n } = d4(this.prototype, t) ?? { get() {
      return this[e];
    }, set(i) {
      this[e] = i;
    } };
    return { get() {
      return r == null ? void 0 : r.call(this);
    }, set(i) {
      const l = r == null ? void 0 : r.call(this);
      n.call(this, i), this.requestUpdate(t, l, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? m3;
  }
  static _$Ei() {
    if (this.hasOwnProperty(E5("elementProperties"))) return;
    const t = v4(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(E5("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(E5("properties"))) {
      const e = this.properties, o = [...p4(e), ...u4(e)];
      for (const r of o) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [o, r] of e) this.elementProperties.set(o, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, o] of this.elementProperties) {
      const r = this._$Eu(e, o);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const r of o) e.unshift(w3(r));
    } else t !== void 0 && e.push(w3(t));
    return e;
  }
  static _$Eu(t, e) {
    const o = e.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const o of e.keys()) this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return C4(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostConnected) == null ? void 0 : o.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostDisconnected) == null ? void 0 : o.call(e);
    });
  }
  attributeChangedCallback(t, e, o) {
    this._$AK(t, o);
  }
  _$EC(t, e) {
    var o;
    const r = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, r);
    if (n !== void 0 && r.reflect === !0) {
      const i = (((o = r.converter) == null ? void 0 : o.toAttribute) !== void 0 ? r.converter : p2).toAttribute(e, r.type);
      this._$Em = t, i == null ? this.removeAttribute(n) : this.setAttribute(n, i), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const r = this.constructor, n = r._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const i = r.getPropertyOptions(n), l = typeof i.converter == "function" ? { fromAttribute: i.converter } : ((o = i.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? i.converter : p2;
      this._$Em = n, this[n] = l.fromAttribute(e, i.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, o) {
    if (t !== void 0) {
      if (o ?? (o = this.constructor.getPropertyOptions(t)), !(o.hasChanged ?? s7)(this[t], e)) return;
      this.P(t, e, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, o) {
    this._$AL.has(t) || this._$AL.set(t, e), o.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, i] of this._$Ep) this[n] = i;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [n, i] of r) i.wrapped !== !0 || this._$AL.has(n) || this[n] === void 0 || this.P(n, this[n], i);
    }
    let e = !1;
    const o = this._$AL;
    try {
      e = this.shouldUpdate(o), e ? (this.willUpdate(o), (t = this._$EO) == null || t.forEach((r) => {
        var n;
        return (n = r.hostUpdate) == null ? void 0 : n.call(r);
      }), this.update(o)) : this._$EU();
    } catch (r) {
      throw e = !1, this._$EU(), r;
    }
    e && this._$AE(o);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((o) => {
      var r;
      return (r = o.hostUpdated) == null ? void 0 : r.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
w5.elementStyles = [], w5.shadowRootOptions = { mode: "open" }, w5[E5("elementProperties")] = /* @__PURE__ */ new Map(), w5[E5("finalized")] = /* @__PURE__ */ new Map(), b3 == null || b3({ ReactiveElement: w5 }), (N1.reactiveElementVersions ?? (N1.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const g4 = { attribute: !0, type: String, converter: p2, reflect: !1, hasChanged: s7 }, f4 = (s = g4, t, e) => {
  const { kind: o, metadata: r } = e;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), n.set(e.name, s), o === "accessor") {
    const { name: i } = e;
    return { set(l) {
      const C = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(i, C, s);
    }, init(l) {
      return l !== void 0 && this.P(i, void 0, s), l;
    } };
  }
  if (o === "setter") {
    const { name: i } = e;
    return function(l) {
      const C = this[i];
      t.call(this, l), this.requestUpdate(i, C, s);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function o7(s) {
  return (t, e) => typeof e == "object" ? f4(s, t, e) : ((o, r, n) => {
    const i = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, i ? { ...o, wrapped: !0 } : o), i ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(s, t, e);
}
const w4 = v`
  :host {
    --_nys-errormessage-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-errormessage-font-weight: var(--nys-font-weight-regular, 400);
    --_nys-errormessage-font-size: var(--nys-font-size-ui-md, 16px);
    --_nys-errormessage-line-height: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-errormessage-letter-spacing: var(
      --nys-font-letterspacing-ui-md,
      0.044px
    );
    --_nys-errormessage-color: var(
      --nys-color-danger,
      var(--nys-color-red-600, #b52c2c)
    );

    /* Spacing */
    --_nys-errormessage-gap: var(--nys-space-100, 8px);
    --_nys-errormessage-divider-gap: var(--nys-space-50, 4px);
    --_nys-errormessage-divider-width: var(--nys-border-width-sm, 1px);
  }

  .nys-errormessage {
    display: flex;
    align-items: center;
    gap: var(--_nys-errormessage-gap);
    font-family: var(--_nys-errormessage-font-family);
    font-weight: var(--_nys-errormessage-font-weight);
    font-size: var(--_nys-errormessage-font-size);
    line-height: var(--_nys-errormessage-line-height);
    letter-spacing: var(--_nys-errormessage-letter-spacing);
    color: var(--_nys-errormessage-color);
  }

  .nys-errormessage[showDivider] {
    padding-top: var(--_nys-errormessage-divider-gap);
    margin-top: var(--_nys-errormessage-divider-gap);
    border-top: var(--_nys-errormessage-divider-width) solid
      var(--_nys-errormessage-color);
  }
`;
/*!
   * ▒█▄░▒█ ▒█░░▒█ ▒█▀▀▀█ ▒█▀▀▄ ▒█▀▀▀█ 
   * ▒█▒█▒█ ▒█▄▄▄█ ░▀▀▀▄▄ ▒█░▒█ ░▀▀▀▄▄ 
   * ▒█░░▀█ ░░▒█░░ ▒█▄▄▄█ ▒█▄▄▀ ▒█▄▄▄█
   * 
   * Icon Component v1.1.1
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const J5 = globalThis, r7 = J5.ShadowRoot && (J5.ShadyCSS === void 0 || J5.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, s0 = Symbol(), x3 = /* @__PURE__ */ new WeakMap();
let _4 = class {
  constructor(s, t, e) {
    if (this._$cssResult$ = !0, e !== s0) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = s, this.t = t;
  }
  get styleSheet() {
    let s = this.o;
    const t = this.t;
    if (r7 && s === void 0) {
      const e = t !== void 0 && t.length === 1;
      e && (s = x3.get(t)), s === void 0 && ((this.o = s = new CSSStyleSheet()).replaceSync(this.cssText), e && x3.set(t, s));
    }
    return s;
  }
  toString() {
    return this.cssText;
  }
};
const b4 = (s) => new _4(typeof s == "string" ? s : s + "", void 0, s0), m4 = (s, t) => {
  if (r7) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const o = document.createElement("style"), r = J5.litNonce;
    r !== void 0 && o.setAttribute("nonce", r), o.textContent = e.cssText, s.appendChild(o);
  }
}, L3 = r7 ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const o of t.cssRules) e += o.cssText;
  return b4(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: x4, defineProperty: L4, getOwnPropertyDescriptor: $4, getOwnPropertyNames: M4, getOwnPropertySymbols: Z4, getPrototypeOf: V4 } = Object, j1 = globalThis, $3 = j1.trustedTypes, H4 = $3 ? $3.emptyScript : "", M3 = j1.reactiveElementPolyfillSupport, k5 = (s, t) => s, u2 = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? H4 : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, n7 = (s, t) => !x4(s, t), Z3 = { attribute: !0, type: String, converter: u2, reflect: !1, hasChanged: n7 };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j1.litPropertyMetadata ?? (j1.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class _5 extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Z3) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const o = Symbol(), r = this.getPropertyDescriptor(t, o, e);
      r !== void 0 && L4(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, o) {
    const { get: r, set: n } = $4(this.prototype, t) ?? { get() {
      return this[e];
    }, set(i) {
      this[e] = i;
    } };
    return { get() {
      return r == null ? void 0 : r.call(this);
    }, set(i) {
      const l = r == null ? void 0 : r.call(this);
      n.call(this, i), this.requestUpdate(t, l, o);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Z3;
  }
  static _$Ei() {
    if (this.hasOwnProperty(k5("elementProperties"))) return;
    const t = V4(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(k5("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(k5("properties"))) {
      const e = this.properties, o = [...M4(e), ...Z4(e)];
      for (const r of o) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [o, r] of e) this.elementProperties.set(o, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, o] of this.elementProperties) {
      const r = this._$Eu(e, o);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const o = new Set(t.flat(1 / 0).reverse());
      for (const r of o) e.unshift(L3(r));
    } else t !== void 0 && e.push(L3(t));
    return e;
  }
  static _$Eu(t, e) {
    const o = e.attribute;
    return o === !1 ? void 0 : typeof o == "string" ? o : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const o of e.keys()) this.hasOwnProperty(o) && (t.set(o, this[o]), delete this[o]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return m4(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostConnected) == null ? void 0 : o.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var o;
      return (o = e.hostDisconnected) == null ? void 0 : o.call(e);
    });
  }
  attributeChangedCallback(t, e, o) {
    this._$AK(t, o);
  }
  _$EC(t, e) {
    var o;
    const r = this.constructor.elementProperties.get(t), n = this.constructor._$Eu(t, r);
    if (n !== void 0 && r.reflect === !0) {
      const i = (((o = r.converter) == null ? void 0 : o.toAttribute) !== void 0 ? r.converter : u2).toAttribute(e, r.type);
      this._$Em = t, i == null ? this.removeAttribute(n) : this.setAttribute(n, i), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o;
    const r = this.constructor, n = r._$Eh.get(t);
    if (n !== void 0 && this._$Em !== n) {
      const i = r.getPropertyOptions(n), l = typeof i.converter == "function" ? { fromAttribute: i.converter } : ((o = i.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? i.converter : u2;
      this._$Em = n, this[n] = l.fromAttribute(e, i.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, o) {
    if (t !== void 0) {
      if (o ?? (o = this.constructor.getPropertyOptions(t)), !(o.hasChanged ?? n7)(this[t], e)) return;
      this.P(t, e, o);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, o) {
    this._$AL.has(t) || this._$AL.set(t, e), o.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, i] of this._$Ep) this[n] = i;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [n, i] of r) i.wrapped !== !0 || this._$AL.has(n) || this[n] === void 0 || this.P(n, this[n], i);
    }
    let e = !1;
    const o = this._$AL;
    try {
      e = this.shouldUpdate(o), e ? (this.willUpdate(o), (t = this._$EO) == null || t.forEach((r) => {
        var n;
        return (n = r.hostUpdate) == null ? void 0 : n.call(r);
      }), this.update(o)) : this._$EU();
    } catch (r) {
      throw e = !1, this._$EU(), r;
    }
    e && this._$AE(o);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((o) => {
      var r;
      return (r = o.hostUpdated) == null ? void 0 : r.call(o);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
_5.elementStyles = [], _5.shadowRootOptions = { mode: "open" }, _5[k5("elementProperties")] = /* @__PURE__ */ new Map(), _5[k5("finalized")] = /* @__PURE__ */ new Map(), M3 == null || M3({ ReactiveElement: _5 }), (j1.reactiveElementVersions ?? (j1.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const S4 = { attribute: !0, type: String, converter: u2, reflect: !1, hasChanged: n7 }, E4 = (s = S4, t, e) => {
  const { kind: o, metadata: r } = e;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), n.set(e.name, s), o === "accessor") {
    const { name: i } = e;
    return { set(l) {
      const C = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(i, C, s);
    }, init(l) {
      return l !== void 0 && this.P(i, void 0, s), l;
    } };
  }
  if (o === "setter") {
    const { name: i } = e;
    return function(l) {
      const C = this[i];
      t.call(this, l), this.requestUpdate(i, C, s);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function s5(s) {
  return (t, e) => typeof e == "object" ? E4(s, t, e) : ((o, r, n) => {
    const i = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, i ? { ...o, wrapped: !0 } : o), i ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(s, t, e);
}
const k4 = {
  // --------- UX Team Main Library (below) --------- //
  // *** CORE *** //
  account_circle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M3.85 15.1C4.7 14.45 5.65 13.9375 6.7 13.5625C7.75 13.1875 8.85 13 10 13C11.15 13 12.25 13.1875 13.3 13.5625C14.35 13.9375 15.3 14.45 16.15 15.1C16.7333 14.4167 17.1875 13.6417 17.5125 12.775C17.8375 11.9083 18 10.9833 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.9833 2.1625 11.9083 2.4875 12.775C2.8125 13.6417 3.26667 14.4167 3.85 15.1ZM10 11C9.01667 11 8.1875 10.6625 7.5125 9.9875C6.8375 9.3125 6.5 8.48333 6.5 7.5C6.5 6.51667 6.8375 5.6875 7.5125 5.0125C8.1875 4.3375 9.01667 4 10 4C10.9833 4 11.8125 4.3375 12.4875 5.0125C13.1625 5.6875 13.5 6.51667 13.5 7.5C13.5 8.48333 13.1625 9.3125 12.4875 9.9875C11.8125 10.6625 10.9833 11 10 11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  calendar_month: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V1C3 0.716667 3.09583 0.479167 3.2875 0.2875C3.47917 0.0958333 3.71667 0 4 0C4.28333 0 4.52083 0.0958333 4.7125 0.2875C4.90417 0.479167 5 0.716667 5 1V2H13V1C13 0.716667 13.0958 0.479167 13.2875 0.2875C13.4792 0.0958333 13.7167 0 14 0C14.2833 0 14.5208 0.0958333 14.7125 0.2875C14.9042 0.479167 15 0.716667 15 1V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6ZM9 12C8.71667 12 8.47917 11.9042 8.2875 11.7125C8.09583 11.5208 8 11.2833 8 11C8 10.7167 8.09583 10.4792 8.2875 10.2875C8.47917 10.0958 8.71667 10 9 10C9.28333 10 9.52083 10.0958 9.7125 10.2875C9.90417 10.4792 10 10.7167 10 11C10 11.2833 9.90417 11.5208 9.7125 11.7125C9.52083 11.9042 9.28333 12 9 12ZM5 12C4.71667 12 4.47917 11.9042 4.2875 11.7125C4.09583 11.5208 4 11.2833 4 11C4 10.7167 4.09583 10.4792 4.2875 10.2875C4.47917 10.0958 4.71667 10 5 10C5.28333 10 5.52083 10.0958 5.7125 10.2875C5.90417 10.4792 6 10.7167 6 11C6 11.2833 5.90417 11.5208 5.7125 11.7125C5.52083 11.9042 5.28333 12 5 12ZM13 12C12.7167 12 12.4792 11.9042 12.2875 11.7125C12.0958 11.5208 12 11.2833 12 11C12 10.7167 12.0958 10.4792 12.2875 10.2875C12.4792 10.0958 12.7167 10 13 10C13.2833 10 13.5208 10.0958 13.7125 10.2875C13.9042 10.4792 14 10.7167 14 11C14 11.2833 13.9042 11.5208 13.7125 11.7125C13.5208 11.9042 13.2833 12 13 12ZM9 16C8.71667 16 8.47917 15.9042 8.2875 15.7125C8.09583 15.5208 8 15.2833 8 15C8 14.7167 8.09583 14.4792 8.2875 14.2875C8.47917 14.0958 8.71667 14 9 14C9.28333 14 9.52083 14.0958 9.7125 14.2875C9.90417 14.4792 10 14.7167 10 15C10 15.2833 9.90417 15.5208 9.7125 15.7125C9.52083 15.9042 9.28333 16 9 16ZM5 16C4.71667 16 4.47917 15.9042 4.2875 15.7125C4.09583 15.5208 4 15.2833 4 15C4 14.7167 4.09583 14.4792 4.2875 14.2875C4.47917 14.0958 4.71667 14 5 14C5.28333 14 5.52083 14.0958 5.7125 14.2875C5.90417 14.4792 6 14.7167 6 15C6 15.2833 5.90417 15.5208 5.7125 15.7125C5.52083 15.9042 5.28333 16 5 16ZM13 16C12.7167 16 12.4792 15.9042 12.2875 15.7125C12.0958 15.5208 12 15.2833 12 15C12 14.7167 12.0958 14.4792 12.2875 14.2875C12.4792 14.0958 12.7167 14 13 14C13.2833 14 13.5208 14.0958 13.7125 14.2875C13.9042 14.4792 14 14.7167 14 15C14 15.2833 13.9042 15.5208 13.7125 15.7125C13.5208 15.9042 13.2833 16 13 16Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  cancel: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 11.4L12.9 14.3C13.0833 14.4833 13.3167 14.575 13.6 14.575C13.8833 14.575 14.1167 14.4833 14.3 14.3C14.4833 14.1167 14.575 13.8833 14.575 13.6C14.575 13.3167 14.4833 13.0833 14.3 12.9L11.4 10L14.3 7.1C14.4833 6.91667 14.575 6.68333 14.575 6.4C14.575 6.11667 14.4833 5.88333 14.3 5.7C14.1167 5.51667 13.8833 5.425 13.6 5.425C13.3167 5.425 13.0833 5.51667 12.9 5.7L10 8.6L7.1 5.7C6.91667 5.51667 6.68333 5.425 6.4 5.425C6.11667 5.425 5.88333 5.51667 5.7 5.7C5.51667 5.88333 5.425 6.11667 5.425 6.4C5.425 6.68333 5.51667 6.91667 5.7 7.1L8.6 10L5.7 12.9C5.51667 13.0833 5.425 13.3167 5.425 13.6C5.425 13.8833 5.51667 14.1167 5.7 14.3C5.88333 14.4833 6.11667 14.575 6.4 14.575C6.68333 14.575 6.91667 14.4833 7.1 14.3L10 11.4ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
  <path d="M5.5565 9.1625L14.0315 0.687501C14.2315 0.487501 14.4648 0.387501 14.7315 0.387501C14.9982 0.387501 15.2315 0.487501 15.4315 0.687501C15.6315 0.887501 15.7315 1.125 15.7315 1.4C15.7315 1.675 15.6315 1.9125 15.4315 2.1125L6.2565 11.3125C6.0565 11.5125 5.82317 11.6125 5.5565 11.6125C5.28983 11.6125 5.0565 11.5125 4.8565 11.3125L0.556499 7.0125C0.356499 6.8125 0.260666 6.575 0.268999 6.3C0.277333 6.025 0.381499 5.7875 0.581499 5.5875C0.781499 5.3875 1.019 5.2875 1.294 5.2875C1.569 5.2875 1.8065 5.3875 2.0065 5.5875L5.5565 9.1625Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
  <path d="M7 8.4L2.1 13.3C1.91667 13.4833 1.68334 13.575 1.4 13.575C1.11667 13.575 0.883336 13.4833 0.700003 13.3C0.51667 13.1167 0.425003 12.8833 0.425003 12.6C0.425003 12.3167 0.51667 12.0833 0.700003 11.9L5.6 7L0.700003 2.1C0.51667 1.91667 0.425003 1.68334 0.425003 1.4C0.425003 1.11667 0.51667 0.883336 0.700003 0.700003C0.883336 0.51667 1.11667 0.425003 1.4 0.425003C1.68334 0.425003 1.91667 0.51667 2.1 0.700003L7 5.6L11.9 0.700003C12.0833 0.51667 12.3167 0.425003 12.6 0.425003C12.8833 0.425003 13.1167 0.51667 13.3 0.700003C13.4833 0.883336 13.575 1.11667 13.575 1.4C13.575 1.68334 13.4833 1.91667 13.3 2.1L8.4 7L13.3 11.9C13.4833 12.0833 13.575 12.3167 13.575 12.6C13.575 12.8833 13.4833 13.1167 13.3 13.3C13.1167 13.4833 12.8833 13.575 12.6 13.575C12.3167 13.575 12.0833 13.4833 11.9 13.3L7 8.4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8 11.575C7.86667 11.575 7.74167 11.5542 7.625 11.5125C7.50833 11.4708 7.4 11.4 7.3 11.3L3.7 7.7C3.5 7.5 3.40417 7.26667 3.4125 7C3.42083 6.73333 3.51667 6.5 3.7 6.3C3.9 6.1 4.1375 5.99583 4.4125 5.9875C4.6875 5.97917 4.925 6.075 5.125 6.275L7 8.15V1C7 0.716667 7.09583 0.479167 7.2875 0.2875C7.47917 0.0958333 7.71667 0 8 0C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1V8.15L10.875 6.275C11.075 6.075 11.3125 5.97917 11.5875 5.9875C11.8625 5.99583 12.1 6.1 12.3 6.3C12.4833 6.5 12.5792 6.73333 12.5875 7C12.5958 7.26667 12.5 7.5 12.3 7.7L8.7 11.3C8.6 11.4 8.49167 11.4708 8.375 11.5125C8.25833 11.5542 8.13333 11.575 8 11.575ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11C1.28333 11 1.52083 11.0958 1.7125 11.2875C1.90417 11.4792 2 11.7167 2 12V14H14V12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0958 14.7167 11 15 11C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  download_done: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M5.544 8.95L13.994 0.499997C14.194 0.299997 14.4315 0.199997 14.7065 0.199997C14.9815 0.199997 15.219 0.299997 15.419 0.499997C15.619 0.699997 15.719 0.937497 15.719 1.2125C15.719 1.4875 15.619 1.725 15.419 1.925L6.244 11.1C6.044 11.3 5.81067 11.4 5.544 11.4C5.27733 11.4 5.044 11.3 4.844 11.1L0.568998 6.825C0.368998 6.625 0.273165 6.3875 0.281498 6.1125C0.289832 5.8375 0.393998 5.6 0.593998 5.4C0.793998 5.2 1.0315 5.1 1.3065 5.1C1.5815 5.1 1.819 5.2 2.019 5.4L5.544 8.95ZM1.994 15.8C1.71066 15.8 1.47317 15.7042 1.2815 15.5125C1.08983 15.3208 0.993998 15.0833 0.993998 14.8C0.993998 14.5167 1.08983 14.2792 1.2815 14.0875C1.47317 13.8958 1.71066 13.8 1.994 13.8H13.994C14.2773 13.8 14.5148 13.8958 14.7065 14.0875C14.8982 14.2792 14.994 14.5167 14.994 14.8C14.994 15.0833 14.8982 15.3208 14.7065 15.5125C14.5148 15.7042 14.2773 15.8 13.994 15.8H1.994Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  drive_folder_upload: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
  <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H7.175C7.44167 0 7.69583 0.05 7.9375 0.15C8.17917 0.25 8.39167 0.391667 8.575 0.575L10 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM2 14H18V4H9.175L7.175 2H2V14ZM10 13C10.2833 13 10.5208 12.9042 10.7125 12.7125C10.9042 12.5208 11 12.2833 11 12V8.8L11.9 9.7C12.0833 9.88333 12.3167 9.975 12.6 9.975C12.8833 9.975 13.1167 9.88333 13.3 9.7C13.4833 9.51667 13.575 9.28333 13.575 9C13.575 8.71667 13.4833 8.48333 13.3 8.3L10.7 5.7C10.5 5.5 10.2667 5.4 10 5.4C9.73333 5.4 9.5 5.5 9.3 5.7L6.7 8.3C6.51667 8.48333 6.425 8.71667 6.425 9C6.425 9.28333 6.51667 9.51667 6.7 9.7C6.88333 9.88333 7.11667 9.975 7.4 9.975C7.68333 9.975 7.91667 9.88333 8.1 9.7L9 8.8V12C9 12.2833 9.09583 12.5208 9.2875 12.7125C9.47917 12.9042 9.71667 13 10 13Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  edit_square: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
  <path d="M2 21.0125C1.45 21.0125 0.979167 20.8167 0.5875 20.425C0.195833 20.0333 0 19.5625 0 19.0125V5.0125C0 4.4625 0.195833 3.99167 0.5875 3.6C0.979167 3.20834 1.45 3.0125 2 3.0125H8.525C8.85833 3.0125 9.10833 3.11667 9.275 3.325C9.44167 3.53334 9.525 3.7625 9.525 4.0125C9.525 4.2625 9.4375 4.49167 9.2625 4.7C9.0875 4.90834 8.83333 5.0125 8.5 5.0125H2V19.0125H16V12.4875C16 12.1542 16.1042 11.9042 16.3125 11.7375C16.5208 11.5708 16.75 11.4875 17 11.4875C17.25 11.4875 17.4792 11.5708 17.6875 11.7375C17.8958 11.9042 18 12.1542 18 12.4875V19.0125C18 19.5625 17.8042 20.0333 17.4125 20.425C17.0208 20.8167 16.55 21.0125 16 21.0125H2ZM6 14.0125V11.5875C6 11.3208 6.05 11.0667 6.15 10.825C6.25 10.5833 6.39167 10.3708 6.575 10.1875L15.175 1.5875C15.375 1.3875 15.6 1.2375 15.85 1.1375C16.1 1.0375 16.35 0.987503 16.6 0.987503C16.8667 0.987503 17.1208 1.0375 17.3625 1.1375C17.6042 1.2375 17.825 1.3875 18.025 1.5875L19.425 3.0125C19.6083 3.2125 19.75 3.43334 19.85 3.675C19.95 3.91667 20 4.1625 20 4.4125C20 4.6625 19.9542 4.90834 19.8625 5.15C19.7708 5.39167 19.625 5.6125 19.425 5.8125L10.825 14.4125C10.6417 14.5958 10.4292 14.7417 10.1875 14.85C9.94583 14.9583 9.69167 15.0125 9.425 15.0125H7C6.71667 15.0125 6.47917 14.9167 6.2875 14.725C6.09583 14.5333 6 14.2958 6 14.0125ZM8 13.0125H9.4L15.2 7.2125L14.5 6.5125L13.775 5.8125L8 11.5875V13.0125Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  help: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.95 16C10.3 16 10.5958 15.8792 10.8375 15.6375C11.0792 15.3958 11.2 15.1 11.2 14.75C11.2 14.4 11.0792 14.1042 10.8375 13.8625C10.5958 13.6208 10.3 13.5 9.95 13.5C9.6 13.5 9.30417 13.6208 9.0625 13.8625C8.82083 14.1042 8.7 14.4 8.7 14.75C8.7 15.1 8.82083 15.3958 9.0625 15.6375C9.30417 15.8792 9.6 16 9.95 16ZM9.05 12.15H10.9C10.9 11.6 10.9625 11.1667 11.0875 10.85C11.2125 10.5333 11.5667 10.1 12.15 9.55C12.5833 9.11667 12.925 8.70417 13.175 8.3125C13.425 7.92083 13.55 7.45 13.55 6.9C13.55 5.96667 13.2083 5.25 12.525 4.75C11.8417 4.25 11.0333 4 10.1 4C9.15 4 8.37917 4.25 7.7875 4.75C7.19583 5.25 6.78333 5.85 6.55 6.55L8.2 7.2C8.28333 6.9 8.47083 6.575 8.7625 6.225C9.05417 5.875 9.5 5.7 10.1 5.7C10.6333 5.7 11.0333 5.84583 11.3 6.1375C11.5667 6.42917 11.7 6.75 11.7 7.1C11.7 7.43333 11.6 7.74583 11.4 8.0375C11.2 8.32917 10.95 8.6 10.65 8.85C9.91667 9.5 9.46667 9.99167 9.3 10.325C9.13333 10.6583 9.05 11.2667 9.05 12.15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  language: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 20C8.63333 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3667 0 10C0 8.61667 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.63333 0 10 0C11.3833 0 12.6792 0.2625 13.8875 0.7875C15.0958 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90417 19.2125 6.1125C19.7375 7.32083 20 8.61667 20 10C20 11.3667 19.7375 12.6583 19.2125 13.875C18.6875 15.0917 17.9708 16.1542 17.0625 17.0625C16.1542 17.9708 15.0958 18.6875 13.8875 19.2125C12.6792 19.7375 11.3833 20 10 20ZM10 17.95C10.4333 17.35 10.8083 16.725 11.125 16.075C11.4417 15.425 11.7 14.7333 11.9 14H8.1C8.3 14.7333 8.55833 15.425 8.875 16.075C9.19167 16.725 9.56667 17.35 10 17.95ZM7.4 17.55C7.1 17 6.8375 16.4292 6.6125 15.8375C6.3875 15.2458 6.2 14.6333 6.05 14H3.1C3.58333 14.8333 4.1875 15.5583 4.9125 16.175C5.6375 16.7917 6.46667 17.25 7.4 17.55ZM12.6 17.55C13.5333 17.25 14.3625 16.7917 15.0875 16.175C15.8125 15.5583 16.4167 14.8333 16.9 14H13.95C13.8 14.6333 13.6125 15.2458 13.3875 15.8375C13.1625 16.4292 12.9 17 12.6 17.55ZM2.25 12H5.65C5.6 11.6667 5.5625 11.3375 5.5375 11.0125C5.5125 10.6875 5.5 10.35 5.5 10C5.5 9.65 5.5125 9.3125 5.5375 8.9875C5.5625 8.6625 5.6 8.33333 5.65 8H2.25C2.16667 8.33333 2.10417 8.6625 2.0625 8.9875C2.02083 9.3125 2 9.65 2 10C2 10.35 2.02083 10.6875 2.0625 11.0125C2.10417 11.3375 2.16667 11.6667 2.25 12ZM7.65 12H12.35C12.4 11.6667 12.4375 11.3375 12.4625 11.0125C12.4875 10.6875 12.5 10.35 12.5 10C12.5 9.65 12.4875 9.3125 12.4625 8.9875C12.4375 8.6625 12.4 8.33333 12.35 8H7.65C7.6 8.33333 7.5625 8.6625 7.5375 8.9875C7.5125 9.3125 7.5 9.65 7.5 10C7.5 10.35 7.5125 10.6875 7.5375 11.0125C7.5625 11.3375 7.6 11.6667 7.65 12ZM14.35 12H17.75C17.8333 11.6667 17.8958 11.3375 17.9375 11.0125C17.9792 10.6875 18 10.35 18 10C18 9.65 17.9792 9.3125 17.9375 8.9875C17.8958 8.6625 17.8333 8.33333 17.75 8H14.35C14.4 8.33333 14.4375 8.6625 14.4625 8.9875C14.4875 9.3125 14.5 9.65 14.5 10C14.5 10.35 14.4875 10.6875 14.4625 11.0125C14.4375 11.3375 14.4 11.6667 14.35 12ZM13.95 6H16.9C16.4167 5.16667 15.8125 4.44167 15.0875 3.825C14.3625 3.20833 13.5333 2.75 12.6 2.45C12.9 3 13.1625 3.57083 13.3875 4.1625C13.6125 4.75417 13.8 5.36667 13.95 6ZM8.1 6H11.9C11.7 5.26667 11.4417 4.575 11.125 3.925C10.8083 3.275 10.4333 2.65 10 2.05C9.56667 2.65 9.19167 3.275 8.875 3.925C8.55833 4.575 8.3 5.26667 8.1 6ZM3.1 6H6.05C6.2 5.36667 6.3875 4.75417 6.6125 4.1625C6.8375 3.57083 7.1 3 7.4 2.45C6.46667 2.75 5.6375 3.20833 4.9125 3.825C4.1875 4.44167 3.58333 5.16667 3.1 6Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
  <path d="M1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10H17C17.2833 10 17.5208 10.0958 17.7125 10.2875C17.9042 10.4792 18 10.7167 18 11C18 11.2833 17.9042 11.5208 17.7125 11.7125C17.5208 11.9042 17.2833 12 17 12H1ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H17C17.2833 5 17.5208 5.09583 17.7125 5.2875C17.9042 5.47917 18 5.71667 18 6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7H1ZM1 2C0.716667 2 0.479167 1.90417 0.2875 1.7125C0.0958333 1.52083 0 1.28333 0 1C0 0.716667 0.0958333 0.479167 0.2875 0.2875C0.479167 0.0958333 0.716667 0 1 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1C18 1.28333 17.9042 1.52083 17.7125 1.7125C17.5208 1.90417 17.2833 2 17 2H1Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  more_vert: `<svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16" fill="none">
  <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14C0 13.45 0.195833 12.9792 0.5875 12.5875C0.979167 12.1958 1.45 12 2 12C2.55 12 3.02083 12.1958 3.4125 12.5875C3.80417 12.9792 4 13.45 4 14C4 14.55 3.80417 15.0208 3.4125 15.4125C3.02083 15.8042 2.55 16 2 16ZM2 10C1.45 10 0.979167 9.80417 0.5875 9.4125C0.195833 9.02083 0 8.55 0 8C0 7.45 0.195833 6.97917 0.5875 6.5875C0.979167 6.19583 1.45 6 2 6C2.55 6 3.02083 6.19583 3.4125 6.5875C3.80417 6.97917 4 7.45 4 8C4 8.55 3.80417 9.02083 3.4125 9.4125C3.02083 9.80417 2.55 10 2 10ZM2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  open_in_new: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H8C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1C9 1.28333 8.90417 1.52083 8.7125 1.7125C8.52083 1.90417 8.28333 2 8 2H2V16H16V10C16 9.71667 16.0958 9.47917 16.2875 9.2875C16.4792 9.09583 16.7167 9 17 9C17.2833 9 17.5208 9.09583 17.7125 9.2875C17.9042 9.47917 18 9.71667 18 10V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM16 3.4L7.4 12C7.21667 12.1833 6.98333 12.275 6.7 12.275C6.41667 12.275 6.18333 12.1833 6 12C5.81667 11.8167 5.725 11.5833 5.725 11.3C5.725 11.0167 5.81667 10.7833 6 10.6L14.6 2H12C11.7167 2 11.4792 1.90417 11.2875 1.7125C11.0958 1.52083 11 1.28333 11 1C11 0.716667 11.0958 0.479167 11.2875 0.2875C11.4792 0.0958333 11.7167 0 12 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1V6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7C16.7167 7 16.4792 6.90417 16.2875 6.7125C16.0958 6.52083 16 6.28333 16 6V3.4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  publish: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M7 7.85L5.125 9.725C4.925 9.925 4.6875 10.0208 4.4125 10.0125C4.1375 10.0042 3.9 9.9 3.7 9.7C3.51667 9.5 3.42083 9.26667 3.4125 9C3.40417 8.73333 3.5 8.5 3.7 8.3L7.3 4.7C7.4 4.6 7.50833 4.52917 7.625 4.4875C7.74167 4.44583 7.86667 4.425 8 4.425C8.13333 4.425 8.25833 4.44583 8.375 4.4875C8.49167 4.52917 8.6 4.6 8.7 4.7L12.3 8.3C12.5 8.5 12.5958 8.73333 12.5875 9C12.5792 9.26667 12.4833 9.5 12.3 9.7C12.1 9.9 11.8625 10.0042 11.5875 10.0125C11.3125 10.0208 11.075 9.925 10.875 9.725L9 7.85V15C9 15.2833 8.90417 15.5208 8.7125 15.7125C8.52083 15.9042 8.28333 16 8 16C7.71667 16 7.47917 15.9042 7.2875 15.7125C7.09583 15.5208 7 15.2833 7 15V7.85ZM0 4V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V4C16 4.28333 15.9042 4.52083 15.7125 4.7125C15.5208 4.90417 15.2833 5 15 5C14.7167 5 14.4792 4.90417 14.2875 4.7125C14.0958 4.52083 14 4.28333 14 4V2H2V4C2 4.28333 1.90417 4.52083 1.7125 4.7125C1.52083 4.90417 1.28333 5 1 5C0.716667 5 0.479167 4.90417 0.2875 4.7125C0.0958333 4.52083 0 4.28333 0 4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M6.71249 13.2125C4.89583 13.2125 3.35833 12.5833 2.09999 11.325C0.841661 10.0667 0.212494 8.52917 0.212494 6.7125C0.212494 4.89583 0.841661 3.35834 2.09999 2.1C3.35833 0.841668 4.89583 0.212502 6.71249 0.212502C8.52916 0.212502 10.0667 0.841668 11.325 2.1C12.5833 3.35834 13.2125 4.89583 13.2125 6.7125C13.2125 7.44584 13.0958 8.1375 12.8625 8.7875C12.6292 9.4375 12.3125 10.0125 11.9125 10.5125L17.5125 16.1125C17.6958 16.2958 17.7875 16.5292 17.7875 16.8125C17.7875 17.0958 17.6958 17.3292 17.5125 17.5125C17.3292 17.6958 17.0958 17.7875 16.8125 17.7875C16.5292 17.7875 16.2958 17.6958 16.1125 17.5125L10.5125 11.9125C10.0125 12.3125 9.43749 12.6292 8.78749 12.8625C8.13749 13.0958 7.44583 13.2125 6.71249 13.2125ZM6.71249 11.2125C7.96249 11.2125 9.02499 10.775 9.89999 9.9C10.775 9.025 11.2125 7.9625 11.2125 6.7125C11.2125 5.4625 10.775 4.4 9.89999 3.525C9.02499 2.65 7.96249 2.2125 6.71249 2.2125C5.46249 2.2125 4.39999 2.65 3.52499 3.525C2.64999 4.4 2.21249 5.4625 2.21249 6.7125C2.21249 7.9625 2.64999 9.025 3.52499 9.9C4.39999 10.775 5.46249 11.2125 6.71249 11.2125Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  share: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.9 12.025 16.6667 12.075 16.3L5.05 12.2C4.78333 12.45 4.475 12.6458 4.125 12.7875C3.775 12.9292 3.4 13 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.4 7 3.775 7.07083 4.125 7.2125C4.475 7.35417 4.78333 7.55 5.05 7.8L12.075 3.7C12.0417 3.58333 12.0208 3.47083 12.0125 3.3625C12.0042 3.25417 12 3.13333 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6 6 14.225 5.92917 13.875 5.7875C13.525 5.64583 13.2167 5.45 12.95 5.2L5.925 9.3C5.95833 9.41667 5.97917 9.52917 5.9875 9.6375C5.99583 9.74583 6 9.86667 6 10C6 10.1333 5.99583 10.2542 5.9875 10.3625C5.97917 10.4708 5.95833 10.5833 5.925 10.7L12.95 14.8C13.2167 14.55 13.525 14.3542 13.875 14.2125C14.225 14.0708 14.6 14 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20ZM15 18C15.2833 18 15.5208 17.9042 15.7125 17.7125C15.9042 17.5208 16 17.2833 16 17C16 16.7167 15.9042 16.4792 15.7125 16.2875C15.5208 16.0958 15.2833 16 15 16C14.7167 16 14.4792 16.0958 14.2875 16.2875C14.0958 16.4792 14 16.7167 14 17C14 17.2833 14.0958 17.5208 14.2875 17.7125C14.4792 17.9042 14.7167 18 15 18ZM3 11C3.28333 11 3.52083 10.9042 3.7125 10.7125C3.90417 10.5208 4 10.2833 4 10C4 9.71667 3.90417 9.47917 3.7125 9.2875C3.52083 9.09583 3.28333 9 3 9C2.71667 9 2.47917 9.09583 2.2875 9.2875C2.09583 9.47917 2 9.71667 2 10C2 10.2833 2.09583 10.5208 2.2875 10.7125C2.47917 10.9042 2.71667 11 3 11ZM15 4C15.2833 4 15.5208 3.90417 15.7125 3.7125C15.9042 3.52083 16 3.28333 16 3C16 2.71667 15.9042 2.47917 15.7125 2.2875C15.5208 2.09583 15.2833 2 15 2C14.7167 2 14.4792 2.09583 14.2875 2.2875C14.0958 2.47917 14 2.71667 14 3C14 3.28333 14.0958 3.52083 14.2875 3.7125C14.4792 3.90417 14.7167 4 15 4Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  sms: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
  <path d="M4 16L1.7 18.3C1.38333 18.6167 1.02083 18.6875 0.6125 18.5125C0.204167 18.3375 0 18.025 0 17.575V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H18C18.55 0 19.0208 0.195833 19.4125 0.5875C19.8042 0.979167 20 1.45 20 2V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H4ZM3.15 14H18V2H2V15.125L3.15 14ZM6 9C6.28333 9 6.52083 8.90417 6.7125 8.7125C6.90417 8.52083 7 8.28333 7 8C7 7.71667 6.90417 7.47917 6.7125 7.2875C6.52083 7.09583 6.28333 7 6 7C5.71667 7 5.47917 7.09583 5.2875 7.2875C5.09583 7.47917 5 7.71667 5 8C5 8.28333 5.09583 8.52083 5.2875 8.7125C5.47917 8.90417 5.71667 9 6 9ZM10 9C10.2833 9 10.5208 8.90417 10.7125 8.7125C10.9042 8.52083 11 8.28333 11 8C11 7.71667 10.9042 7.47917 10.7125 7.2875C10.5208 7.09583 10.2833 7 10 7C9.71667 7 9.47917 7.09583 9.2875 7.2875C9.09583 7.47917 9 7.71667 9 8C9 8.28333 9.09583 8.52083 9.2875 8.7125C9.47917 8.90417 9.71667 9 10 9ZM14 9C14.2833 9 14.5208 8.90417 14.7125 8.7125C14.9042 8.52083 15 8.28333 15 8C15 7.71667 14.9042 7.47917 14.7125 7.2875C14.5208 7.09583 14.2833 7 14 7C13.7167 7 13.4792 7.09583 13.2875 7.2875C13.0958 7.47917 13 7.71667 13 8C13 8.28333 13.0958 8.52083 13.2875 8.7125C13.4792 8.90417 13.7167 9 14 9Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  thumb_down: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M2 13C1.46667 13 1 12.8 0.6 12.4C0.2 12 0 11.5333 0 11V9C0 8.88333 0.0125 8.75833 0.0375 8.625C0.0625 8.49167 0.1 8.36667 0.15 8.25L3.15 1.2C3.3 0.866667 3.55 0.583333 3.9 0.35C4.25 0.116667 4.61667 0 5 0H13C13.55 0 14.0208 0.195833 14.4125 0.5875C14.8042 0.979167 15 1.45 15 2V12.175C15 12.4417 14.9458 12.6958 14.8375 12.9375C14.7292 13.1792 14.5833 13.3917 14.4 13.575L8.975 18.975C8.725 19.2083 8.42917 19.35 8.0875 19.4C7.74583 19.45 7.41667 19.3917 7.1 19.225C6.78333 19.0583 6.55417 18.825 6.4125 18.525C6.27083 18.225 6.24167 17.9167 6.325 17.6L7.45 13H2ZM19 0C19.55 0 20.0208 0.195833 20.4125 0.5875C20.8042 0.979167 21 1.45 21 2V11C21 11.55 20.8042 12.0208 20.4125 12.4125C20.0208 12.8042 19.55 13 19 13C18.45 13 17.9792 12.8042 17.5875 12.4125C17.1958 12.0208 17 11.55 17 11V2C17 1.45 17.1958 0.979167 17.5875 0.5875C17.9792 0.195833 18.45 0 19 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  thumb_up: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M19 7.00001C19.5333 7.00001 20 7.20001 20.4 7.60001C20.8 8.00001 21 8.46668 21 9.00001V11C21 11.1167 20.9875 11.2417 20.9625 11.375C20.9375 11.5083 20.9 11.6333 20.85 11.75L17.85 18.8C17.7 19.1333 17.45 19.4167 17.1 19.65C16.75 19.8833 16.3833 20 16 20H8C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18V7.82501C6 7.55834 6.05417 7.30418 6.1625 7.06251C6.27083 6.82084 6.41667 6.60834 6.6 6.42501L12.025 1.02501C12.275 0.791677 12.5708 0.65001 12.9125 0.60001C13.2542 0.55001 13.5833 0.608344 13.9 0.77501C14.2167 0.941677 14.4458 1.17501 14.5875 1.47501C14.7292 1.77501 14.7583 2.08334 14.675 2.40001L13.55 7.00001H19ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V9.00001C0 8.45001 0.195833 7.97918 0.5875 7.58751C0.979167 7.19584 1.45 7.00001 2 7.00001C2.55 7.00001 3.02083 7.19584 3.4125 7.58751C3.80417 7.97918 4 8.45001 4 9.00001V18C4 18.55 3.80417 19.0208 3.4125 19.4125C3.02083 19.8042 2.55 20 2 20Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  upload_file: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
  <path d="M7 12.825V16C7 16.2833 7.09583 16.5208 7.2875 16.7125C7.47917 16.9042 7.71667 17 8 17C8.28333 17 8.52083 16.9042 8.7125 16.7125C8.90417 16.5208 9 16.2833 9 16V12.825L9.9 13.725C10 13.825 10.1125 13.9 10.2375 13.95C10.3625 14 10.4875 14.0208 10.6125 14.0125C10.7375 14.0042 10.8583 13.975 10.975 13.925C11.0917 13.875 11.2 13.8 11.3 13.7C11.4833 13.5 11.5792 13.2667 11.5875 13C11.5958 12.7333 11.5 12.5 11.3 12.3L8.7 9.7C8.6 9.6 8.49167 9.52917 8.375 9.4875C8.25833 9.44583 8.13333 9.425 8 9.425C7.86667 9.425 7.74167 9.44583 7.625 9.4875C7.50833 9.52917 7.4 9.6 7.3 9.7L4.7 12.3C4.5 12.5 4.40417 12.7333 4.4125 13C4.42083 13.2667 4.525 13.5 4.725 13.7C4.925 13.8833 5.15833 13.9792 5.425 13.9875C5.69167 13.9958 5.925 13.9 6.125 13.7L7 12.825ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9.175C9.44167 0 9.69583 0.05 9.9375 0.15C10.1792 0.25 10.3917 0.391667 10.575 0.575L15.425 5.425C15.6083 5.60833 15.75 5.82083 15.85 6.0625C15.95 6.30417 16 6.55833 16 6.825V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 6V2H2V18H14V7H10C9.71667 7 9.47917 6.90417 9.2875 6.7125C9.09583 6.52083 9 6.28333 9 6Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  visibility: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
  <path d="M11 12.5C12.25 12.5 13.3125 12.0625 14.1875 11.1875C15.0625 10.3125 15.5 9.25 15.5 8C15.5 6.75 15.0625 5.6875 14.1875 4.8125C13.3125 3.9375 12.25 3.5 11 3.5C9.75 3.5 8.6875 3.9375 7.8125 4.8125C6.9375 5.6875 6.5 6.75 6.5 8C6.5 9.25 6.9375 10.3125 7.8125 11.1875C8.6875 12.0625 9.75 12.5 11 12.5ZM11 10.7C10.25 10.7 9.6125 10.4375 9.0875 9.9125C8.5625 9.3875 8.3 8.75 8.3 8C8.3 7.25 8.5625 6.6125 9.0875 6.0875C9.6125 5.5625 10.25 5.3 11 5.3C11.75 5.3 12.3875 5.5625 12.9125 6.0875C13.4375 6.6125 13.7 7.25 13.7 8C13.7 8.75 13.4375 9.3875 12.9125 9.9125C12.3875 10.4375 11.75 10.7 11 10.7ZM11 15.5C8.56667 15.5 6.35 14.8208 4.35 13.4625C2.35 12.1042 0.9 10.2833 0 8C0.9 5.71667 2.35 3.89583 4.35 2.5375C6.35 1.17917 8.56667 0.5 11 0.5C13.4333 0.5 15.65 1.17917 17.65 2.5375C19.65 3.89583 21.1 5.71667 22 8C21.1 10.2833 19.65 12.1042 17.65 13.4625C15.65 14.8208 13.4333 15.5 11 15.5ZM11 13.5C12.8833 13.5 14.6125 13.0042 16.1875 12.0125C17.7625 11.0208 18.9667 9.68333 19.8 8C18.9667 6.31667 17.7625 4.97917 16.1875 3.9875C14.6125 2.99583 12.8833 2.5 11 2.5C9.11667 2.5 7.3875 2.99583 5.8125 3.9875C4.2375 4.97917 3.03333 6.31667 2.2 8C3.03333 9.68333 4.2375 11.0208 5.8125 12.0125C7.3875 13.0042 9.11667 13.5 11 13.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  visibility_off: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
  <path d="M15.1 10.6L13.65 9.15C13.8 8.36667 13.575 7.63333 12.975 6.95C12.375 6.26667 11.6 6 10.65 6.15L9.2 4.7C9.48333 4.56667 9.77083 4.46667 10.0625 4.4C10.3542 4.33333 10.6667 4.3 11 4.3C12.25 4.3 13.3125 4.7375 14.1875 5.6125C15.0625 6.4875 15.5 7.55 15.5 8.8C15.5 9.13333 15.4667 9.44583 15.4 9.7375C15.3333 10.0292 15.2333 10.3167 15.1 10.6ZM18.3 13.75L16.85 12.35C17.4833 11.8667 18.0458 11.3375 18.5375 10.7625C19.0292 10.1875 19.45 9.53333 19.8 8.8C18.9667 7.11667 17.7708 5.77917 16.2125 4.7875C14.6542 3.79583 12.9167 3.3 11 3.3C10.5167 3.3 10.0417 3.33333 9.575 3.4C9.10833 3.46667 8.65 3.56667 8.2 3.7L6.65 2.15C7.33333 1.86667 8.03333 1.65417 8.75 1.5125C9.46667 1.37083 10.2167 1.3 11 1.3C13.5167 1.3 15.7583 1.99583 17.725 3.3875C19.6917 4.77917 21.1167 6.58333 22 8.8C21.6167 9.78333 21.1125 10.6958 20.4875 11.5375C19.8625 12.3792 19.1333 13.1167 18.3 13.75ZM18.8 19.9L14.6 15.75C14.0167 15.9333 13.4292 16.0708 12.8375 16.1625C12.2458 16.2542 11.6333 16.3 11 16.3C8.48333 16.3 6.24167 15.6042 4.275 14.2125C2.30833 12.8208 0.883333 11.0167 0 8.8C0.35 7.91667 0.791667 7.09583 1.325 6.3375C1.85833 5.57917 2.46667 4.9 3.15 4.3L0.4 1.5L1.8 0.0999985L20.2 18.5L18.8 19.9ZM4.55 5.7C4.06667 6.13333 3.625 6.60833 3.225 7.125C2.825 7.64167 2.48333 8.2 2.2 8.8C3.03333 10.4833 4.22917 11.8208 5.7875 12.8125C7.34583 13.8042 9.08333 14.3 11 14.3C11.3333 14.3 11.6583 14.2792 11.975 14.2375C12.2917 14.1958 12.6167 14.15 12.95 14.1L12.05 13.15C11.8667 13.2 11.6917 13.2375 11.525 13.2625C11.3583 13.2875 11.1833 13.3 11 13.3C9.75 13.3 8.6875 12.8625 7.8125 11.9875C6.9375 11.1125 6.5 10.05 6.5 8.8C6.5 8.61667 6.5125 8.44167 6.5375 8.275C6.5625 8.10833 6.6 7.93333 6.65 7.75L4.55 5.7Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  notifications: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
  <path d="M1 17C0.716667 17 0.479167 16.9042 0.2875 16.7125C0.0958333 16.5208 0 16.2833 0 16C0 15.7167 0.0958333 15.4792 0.2875 15.2875C0.479167 15.0958 0.716667 15 1 15H2V8C2 6.61667 2.41667 5.3875 3.25 4.3125C4.08333 3.2375 5.16667 2.53333 6.5 2.2V1.5C6.5 1.08333 6.64583 0.729167 6.9375 0.4375C7.22917 0.145833 7.58333 0 8 0C8.41667 0 8.77083 0.145833 9.0625 0.4375C9.35417 0.729167 9.5 1.08333 9.5 1.5V2.2C10.8333 2.53333 11.9167 3.2375 12.75 4.3125C13.5833 5.3875 14 6.61667 14 8V15H15C15.2833 15 15.5208 15.0958 15.7125 15.2875C15.9042 15.4792 16 15.7167 16 16C16 16.2833 15.9042 16.5208 15.7125 16.7125C15.5208 16.9042 15.2833 17 15 17H1ZM8 20C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18H10C10 18.55 9.80417 19.0208 9.4125 19.4125C9.02083 19.8042 8.55 20 8 20ZM4 15H12V8C12 6.9 11.6083 5.95833 10.825 5.175C10.0417 4.39167 9.1 4 8 4C6.9 4 5.95833 4.39167 5.175 5.175C4.39167 5.95833 4 6.9 4 8V15Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  // *** Arrows *** //
  arrow_back: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.6125 8.9935L8.5125 13.8935C8.7125 14.0935 8.80834 14.3268 8.8 14.5935C8.79167 14.8602 8.6875 15.0935 8.4875 15.2935C8.2875 15.4768 8.05417 15.5727 7.7875 15.581C7.52083 15.5893 7.2875 15.4935 7.0875 15.2935L0.487502 8.6935C0.387502 8.5935 0.316668 8.48517 0.275002 8.3685C0.233335 8.25184 0.212502 8.12684 0.212502 7.9935C0.212502 7.86017 0.233335 7.73517 0.275002 7.6185C0.316668 7.50184 0.387502 7.3935 0.487502 7.2935L7.0875 0.693503C7.27083 0.510169 7.5 0.418503 7.775 0.418503C8.05 0.418503 8.2875 0.510169 8.4875 0.693503C8.6875 0.893503 8.7875 1.131 8.7875 1.406C8.7875 1.681 8.6875 1.9185 8.4875 2.1185L3.6125 6.9935H14.7875C15.0708 6.9935 15.3083 7.08934 15.5 7.281C15.6917 7.47267 15.7875 7.71017 15.7875 7.9935C15.7875 8.27684 15.6917 8.51434 15.5 8.706C15.3083 8.89767 15.0708 8.9935 14.7875 8.9935H3.6125Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Chevrons *** //
  chevron_down: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path d="M10.0065 8.5L17.3565 1.15C17.6065 0.899999 17.8981 0.779165 18.2315 0.787499C18.5648 0.795832 18.8565 0.924999 19.1065 1.175C19.3565 1.425 19.4815 1.71667 19.4815 2.05C19.4815 2.38333 19.3565 2.675 19.1065 2.925L11.4315 10.625C11.2315 10.825 11.0065 10.975 10.7565 11.075C10.5065 11.175 10.2565 11.225 10.0065 11.225C9.75646 11.225 9.50646 11.175 9.25646 11.075C9.00646 10.975 8.78146 10.825 8.58146 10.625L0.881458 2.925C0.631458 2.675 0.510625 2.37916 0.518958 2.0375C0.527291 1.69583 0.656458 1.4 0.906458 1.15C1.15646 0.899999 1.44812 0.774999 1.78146 0.774999C2.11479 0.774999 2.40646 0.899999 2.65646 1.15L10.0065 8.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  chevron_up: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
  <path d="M9.99354 3.5L2.64354 10.85C2.39354 11.1 2.10188 11.2208 1.76854 11.2125C1.43521 11.2042 1.14354 11.075 0.893541 10.825C0.643541 10.575 0.518541 10.2833 0.518541 9.95C0.518541 9.61667 0.643541 9.325 0.893541 9.075L8.56854 1.375C8.76854 1.175 8.99354 1.025 9.24354 0.925002C9.49354 0.825002 9.74354 0.775002 9.99354 0.775002C10.2435 0.775002 10.4935 0.825002 10.7435 0.925002C10.9935 1.025 11.2185 1.175 11.4185 1.375L19.1185 9.075C19.3685 9.325 19.4894 9.62084 19.481 9.9625C19.4727 10.3042 19.3435 10.6 19.0935 10.85C18.8435 11.1 18.5519 11.225 18.2185 11.225C17.8852 11.225 17.5935 11.1 17.3435 10.85L9.99354 3.5Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  chevron_left: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M3.49999 10.0065L10.85 17.3565C11.1 17.6065 11.2208 17.8981 11.2125 18.2315C11.2042 18.5648 11.075 18.8565 10.825 19.1065C10.575 19.3565 10.2833 19.4815 9.94999 19.4815C9.61666 19.4815 9.32499 19.3565 9.07499 19.1065L1.37499 11.4315C1.17499 11.2315 1.02499 11.0065 0.924994 10.7565C0.824994 10.5065 0.774994 10.2565 0.774994 10.0065C0.774994 9.75645 0.824994 9.50645 0.924994 9.25645C1.02499 9.00645 1.17499 8.78145 1.37499 8.58145L9.07499 0.88145C9.32499 0.63145 9.62083 0.510617 9.96249 0.51895C10.3042 0.527284 10.6 0.65645 10.85 0.90645C11.1 1.15645 11.225 1.44812 11.225 1.78145C11.225 2.11478 11.1 2.40645 10.85 2.65645L3.49999 10.0065Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  chevron_right: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M8.50001 9.99355L1.15001 2.64355C0.900008 2.39355 0.779174 2.10188 0.787508 1.76855C0.795841 1.43521 0.925008 1.14355 1.17501 0.893548C1.42501 0.643548 1.71667 0.518548 2.05001 0.518548C2.38334 0.518548 2.67501 0.643548 2.92501 0.893548L10.625 8.56855C10.825 8.76855 10.975 8.99355 11.075 9.24355C11.175 9.49355 11.225 9.74355 11.225 9.99355C11.225 10.2435 11.175 10.4935 11.075 10.7435C10.975 10.9935 10.825 11.2185 10.625 11.4185L2.92501 19.1185C2.67501 19.3685 2.37917 19.4894 2.03751 19.481C1.69584 19.4727 1.40001 19.3435 1.15001 19.0935C0.900006 18.8435 0.775006 18.5519 0.775006 18.2185C0.775006 17.8852 0.900006 17.5935 1.15001 17.3435L8.50001 9.99355Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Environmental *** //
  ac_unit: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 15.85L6.425 18.375C6.24167 18.5583 6.0125 18.65 5.7375 18.65C5.4625 18.65 5.23333 18.55 5.05 18.35C4.85 18.1667 4.75 17.9375 4.75 17.6625C4.75 17.3875 4.85 17.15 5.05 16.95L9 13V11H7L3.025 14.975C2.84167 15.1583 2.6125 15.25 2.3375 15.25C2.0625 15.25 1.825 15.15 1.625 14.95C1.44167 14.7667 1.35 14.5375 1.35 14.2625C1.35 13.9875 1.44167 13.7583 1.625 13.575L4.15 11H0.975C0.691667 11 0.458333 10.9042 0.275 10.7125C0.0916667 10.5208 0 10.2833 0 10C0 9.71667 0.0958333 9.47917 0.2875 9.2875C0.479167 9.09583 0.716667 9 1 9H4.15L1.625 6.45C1.44167 6.26667 1.35 6.0375 1.35 5.7625C1.35 5.4875 1.45 5.25 1.65 5.05C1.83333 4.86667 2.0625 4.775 2.3375 4.775C2.6125 4.775 2.85 4.86667 3.05 5.05L7 9H9V7L5.025 3.05C4.84167 2.86667 4.75 2.6375 4.75 2.3625C4.75 2.0875 4.85 1.85 5.05 1.65C5.23333 1.46667 5.4625 1.375 5.7375 1.375C6.0125 1.375 6.24167 1.46667 6.425 1.65L9 4.15V1C9 0.716667 9.09583 0.479167 9.2875 0.2875C9.47917 0.0958333 9.71667 0 10 0C10.2833 0 10.5208 0.0958333 10.7125 0.2875C10.9042 0.479167 11 0.716667 11 1V4.15L13.55 1.65C13.7333 1.46667 13.9625 1.375 14.2375 1.375C14.5125 1.375 14.75 1.46667 14.95 1.65C15.1333 1.85 15.225 2.0875 15.225 2.3625C15.225 2.6375 15.1333 2.86667 14.95 3.05L11 7V9H13L16.95 5.05C17.1333 4.86667 17.3625 4.775 17.6375 4.775C17.9125 4.775 18.15 4.875 18.35 5.075C18.5333 5.25833 18.625 5.4875 18.625 5.7625C18.625 6.0375 18.5333 6.26667 18.35 6.45L15.85 9H19C19.2833 9 19.5208 9.09583 19.7125 9.2875C19.9042 9.47917 20 9.71667 20 10C20 10.2833 19.9042 10.5208 19.7125 10.7125C19.5208 10.9042 19.2833 11 19 11H15.85L18.35 13.575C18.5333 13.7583 18.625 13.9875 18.625 14.2625C18.625 14.5375 18.5333 14.7667 18.35 14.95C18.15 15.15 17.9125 15.25 17.6375 15.25C17.3625 15.25 17.1333 15.15 16.95 14.95L13 11H11V13L14.95 16.975C15.1333 17.1583 15.225 17.3875 15.225 17.6625C15.225 17.9375 15.125 18.175 14.925 18.375C14.7417 18.5583 14.5125 18.65 14.2375 18.65C13.9625 18.65 13.7333 18.5583 13.55 18.375L11 15.85V19.025C11 19.3083 10.9042 19.5417 10.7125 19.725C10.5208 19.9083 10.2833 20 10 20C9.71667 20 9.47917 19.9042 9.2875 19.7125C9.09583 19.5208 9 19.2833 9 19V15.85Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  air: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
  <path d="M9.5 17C8.96667 17 8.47083 16.8667 8.0125 16.6C7.55417 16.3333 7.18333 15.9667 6.9 15.5C6.71667 15.1667 6.7125 14.8333 6.8875 14.5C7.0625 14.1667 7.33333 14 7.7 14C7.91667 14 8.10833 14.0667 8.275 14.2C8.44167 14.3333 8.59167 14.4833 8.725 14.65C8.80833 14.7667 8.92083 14.8542 9.0625 14.9125C9.20417 14.9708 9.35 15 9.5 15C9.78333 15 10.0208 14.9042 10.2125 14.7125C10.4042 14.5208 10.5 14.2833 10.5 14C10.5 13.7167 10.4042 13.4792 10.2125 13.2875C10.0208 13.0958 9.78333 13 9.5 13H1C0.716667 13 0.479167 12.9042 0.2875 12.7125C0.0958333 12.5208 0 12.2833 0 12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11H9.5C10.3333 11 11.0417 11.2917 11.625 11.875C12.2083 12.4583 12.5 13.1667 12.5 14C12.5 14.8333 12.2083 15.5417 11.625 16.125C11.0417 16.7083 10.3333 17 9.5 17ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H13.5C13.9167 5 14.2708 4.85417 14.5625 4.5625C14.8542 4.27083 15 3.91667 15 3.5C15 3.08333 14.8542 2.72917 14.5625 2.4375C14.2708 2.14583 13.9167 2 13.5 2C13.2333 2 12.9833 2.0625 12.75 2.1875C12.5167 2.3125 12.3333 2.49167 12.2 2.725C12.0833 2.925 11.9417 3.10417 11.775 3.2625C11.6083 3.42083 11.4083 3.5 11.175 3.5C10.8417 3.5 10.5708 3.375 10.3625 3.125C10.1542 2.875 10.1 2.60833 10.2 2.325C10.4333 1.625 10.8542 1.0625 11.4625 0.6375C12.0708 0.2125 12.75 0 13.5 0C14.4667 0 15.2917 0.341667 15.975 1.025C16.6583 1.70833 17 2.53333 17 3.5C17 4.46667 16.6583 5.29167 15.975 5.975C15.2917 6.65833 14.4667 7 13.5 7H1ZM17.95 14.7C17.6167 14.85 17.2917 14.8292 16.975 14.6375C16.6583 14.4458 16.5 14.1667 16.5 13.8C16.5 13.5667 16.5792 13.3708 16.7375 13.2125C16.8958 13.0542 17.075 12.9167 17.275 12.8C17.5083 12.6667 17.6875 12.4833 17.8125 12.25C17.9375 12.0167 18 11.7667 18 11.5C18 11.0833 17.8542 10.7292 17.5625 10.4375C17.2708 10.1458 16.9167 10 16.5 10H1C0.716667 10 0.479167 9.90417 0.2875 9.7125C0.0958333 9.52083 0 9.28333 0 9C0 8.71667 0.0958333 8.47917 0.2875 8.2875C0.479167 8.09583 0.716667 8 1 8H16.5C17.4667 8 18.2917 8.34167 18.975 9.025C19.6583 9.70833 20 10.5333 20 11.5C20 12.2 19.8167 12.8375 19.45 13.4125C19.0833 13.9875 18.5833 14.4167 17.95 14.7Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  clear_day: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 4C10.7167 4 10.4792 3.90417 10.2875 3.7125C10.0958 3.52083 10 3.28333 10 3V1C10 0.716667 10.0958 0.479167 10.2875 0.2875C10.4792 0.0958333 10.7167 0 11 0C11.2833 0 11.5208 0.0958333 11.7125 0.2875C11.9042 0.479167 12 0.716667 12 1V3C12 3.28333 11.9042 3.52083 11.7125 3.7125C11.5208 3.90417 11.2833 4 11 4ZM15.95 6.05C15.7667 5.86667 15.675 5.6375 15.675 5.3625C15.675 5.0875 15.7667 4.85 15.95 4.65L17.35 3.225C17.55 3.025 17.7875 2.925 18.0625 2.925C18.3375 2.925 18.575 3.025 18.775 3.225C18.9583 3.40833 19.05 3.64167 19.05 3.925C19.05 4.20833 18.9583 4.44167 18.775 4.625L17.35 6.05C17.1667 6.23333 16.9333 6.325 16.65 6.325C16.3667 6.325 16.1333 6.23333 15.95 6.05ZM19 12C18.7167 12 18.4792 11.9042 18.2875 11.7125C18.0958 11.5208 18 11.2833 18 11C18 10.7167 18.0958 10.4792 18.2875 10.2875C18.4792 10.0958 18.7167 10 19 10H21C21.2833 10 21.5208 10.0958 21.7125 10.2875C21.9042 10.4792 22 10.7167 22 11C22 11.2833 21.9042 11.5208 21.7125 11.7125C21.5208 11.9042 21.2833 12 21 12H19ZM11 22C10.7167 22 10.4792 21.9042 10.2875 21.7125C10.0958 21.5208 10 21.2833 10 21V19C10 18.7167 10.0958 18.4792 10.2875 18.2875C10.4792 18.0958 10.7167 18 11 18C11.2833 18 11.5208 18.0958 11.7125 18.2875C11.9042 18.4792 12 18.7167 12 19V21C12 21.2833 11.9042 21.5208 11.7125 21.7125C11.5208 21.9042 11.2833 22 11 22ZM4.65 6.05L3.225 4.65C3.025 4.45 2.925 4.20833 2.925 3.925C2.925 3.64167 3.025 3.40833 3.225 3.225C3.40833 3.04167 3.64167 2.95 3.925 2.95C4.20833 2.95 4.44167 3.04167 4.625 3.225L6.05 4.65C6.23333 4.83333 6.325 5.06667 6.325 5.35C6.325 5.63333 6.23333 5.86667 6.05 6.05C5.85 6.23333 5.61667 6.325 5.35 6.325C5.08333 6.325 4.85 6.23333 4.65 6.05ZM17.35 18.775L15.95 17.35C15.7667 17.15 15.675 16.9125 15.675 16.6375C15.675 16.3625 15.7667 16.1333 15.95 15.95C16.1333 15.7667 16.3625 15.675 16.6375 15.675C16.9125 15.675 17.15 15.7667 17.35 15.95L18.775 17.35C18.975 17.5333 19.0708 17.7667 19.0625 18.05C19.0542 18.3333 18.9583 18.575 18.775 18.775C18.575 18.975 18.3333 19.075 18.05 19.075C17.7667 19.075 17.5333 18.975 17.35 18.775ZM1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10H3C3.28333 10 3.52083 10.0958 3.7125 10.2875C3.90417 10.4792 4 10.7167 4 11C4 11.2833 3.90417 11.5208 3.7125 11.7125C3.52083 11.9042 3.28333 12 3 12H1ZM3.225 18.775C3.04167 18.5917 2.95 18.3583 2.95 18.075C2.95 17.7917 3.04167 17.5583 3.225 17.375L4.65 15.95C4.83333 15.7667 5.0625 15.675 5.3375 15.675C5.6125 15.675 5.85 15.7667 6.05 15.95C6.25 16.15 6.35 16.3875 6.35 16.6625C6.35 16.9375 6.25 17.175 6.05 17.375L4.65 18.775C4.45 18.975 4.20833 19.075 3.925 19.075C3.64167 19.075 3.40833 18.975 3.225 18.775ZM11 17C9.33333 17 7.91667 16.4167 6.75 15.25C5.58333 14.0833 5 12.6667 5 11C5 9.33333 5.58333 7.91667 6.75 6.75C7.91667 5.58333 9.33333 5 11 5C12.6667 5 14.0833 5.58333 15.25 6.75C16.4167 7.91667 17 9.33333 17 11C17 12.6667 16.4167 14.0833 15.25 15.25C14.0833 16.4167 12.6667 17 11 17ZM11 15C12.1 15 13.0417 14.6083 13.825 13.825C14.6083 13.0417 15 12.1 15 11C15 9.9 14.6083 8.95833 13.825 8.175C13.0417 7.39167 12.1 7 11 7C9.9 7 8.95833 7.39167 8.175 8.175C7.39167 8.95833 7 9.9 7 11C7 12.1 7.39167 13.0417 8.175 13.825C8.95833 14.6083 9.9 15 11 15Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  coronavirus: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.25 20C9.05 20 8.875 19.925 8.725 19.775C8.575 19.625 8.5 19.45 8.5 19.25C8.5 19.05 8.575 18.875 8.725 18.725C8.875 18.575 9.05 18.5 9.25 18.5V16.95C8.55 16.8667 7.89167 16.7 7.275 16.45C6.65833 16.2 6.1 15.8667 5.6 15.45L4.525 16.55C4.675 16.7 4.75 16.875 4.75 17.075C4.75 17.275 4.675 17.45 4.525 17.6C4.375 17.75 4.2 17.825 4 17.825C3.8 17.825 3.625 17.75 3.475 17.6L2.4 16.55C2.25 16.4 2.175 16.2208 2.175 16.0125C2.175 15.8042 2.25 15.625 2.4 15.475C2.55 15.325 2.725 15.2542 2.925 15.2625C3.125 15.2708 3.3 15.3417 3.45 15.475L4.55 14.375C4.13333 13.8583 3.8 13.3 3.55 12.7C3.3 12.1 3.13333 11.45 3.05 10.75H1.5C1.5 10.95 1.425 11.125 1.275 11.275C1.125 11.425 0.95 11.5 0.75 11.5C0.55 11.5 0.375 11.425 0.225 11.275C0.075 11.125 0 10.95 0 10.75V9.25C0 9.05 0.075 8.875 0.225 8.725C0.375 8.575 0.55 8.5 0.75 8.5C0.95 8.5 1.125 8.575 1.275 8.725C1.425 8.875 1.5 9.05 1.5 9.25H3.05C3.13333 8.55 3.30417 7.9 3.5625 7.3C3.82083 6.7 4.15 6.14167 4.55 5.625L3.45 4.525C3.3 4.65833 3.125 4.72917 2.925 4.7375C2.725 4.74583 2.55 4.675 2.4 4.525C2.25 4.375 2.175 4.19583 2.175 3.9875C2.175 3.77917 2.25 3.6 2.4 3.45L3.45 2.4C3.6 2.25 3.77917 2.175 3.9875 2.175C4.19583 2.175 4.375 2.25 4.525 2.4C4.675 2.55 4.75 2.72917 4.75 2.9375C4.75 3.14583 4.675 3.325 4.525 3.475L5.6 4.55C6.11667 4.13333 6.675 3.8 7.275 3.55C7.875 3.3 8.525 3.13333 9.225 3.05V1.5C9.025 1.5 8.85417 1.425 8.7125 1.275C8.57083 1.125 8.5 0.95 8.5 0.75C8.5 0.55 8.575 0.375 8.725 0.225C8.875 0.075 9.05 0 9.25 0H10.75C10.95 0 11.125 0.075 11.275 0.225C11.425 0.375 11.5 0.55 11.5 0.75C11.5 0.95 11.425 1.125 11.275 1.275C11.125 1.425 10.95 1.5 10.75 1.5V3.05C11.45 3.13333 12.1 3.3 12.7 3.55C13.3 3.8 13.8583 4.13333 14.375 4.55L15.475 3.45C15.325 3.3 15.25 3.125 15.25 2.925C15.25 2.725 15.325 2.55 15.475 2.4C15.625 2.25 15.8042 2.175 16.0125 2.175C16.2208 2.175 16.4 2.25 16.55 2.4L17.6 3.475C17.75 3.625 17.825 3.8 17.825 4C17.825 4.2 17.75 4.375 17.6 4.525C17.45 4.675 17.2708 4.75 17.0625 4.75C16.8542 4.75 16.675 4.675 16.525 4.525L15.45 5.6C15.8667 6.11667 16.2 6.67917 16.45 7.2875C16.7 7.89583 16.8667 8.55 16.95 9.25H18.5C18.5 9.05 18.575 8.875 18.725 8.725C18.875 8.575 19.05 8.5 19.25 8.5C19.45 8.5 19.625 8.575 19.775 8.725C19.925 8.875 20 9.05 20 9.25V10.75C20 10.95 19.925 11.125 19.775 11.275C19.625 11.425 19.45 11.5 19.25 11.5C19.05 11.5 18.875 11.425 18.725 11.275C18.575 11.125 18.5 10.95 18.5 10.75H16.95C16.8667 11.45 16.7 12.1042 16.45 12.7125C16.2 13.3208 15.8667 13.8833 15.45 14.4L16.525 15.475C16.675 15.325 16.8542 15.25 17.0625 15.25C17.2708 15.25 17.45 15.325 17.6 15.475C17.75 15.625 17.825 15.8042 17.825 16.0125C17.825 16.2208 17.75 16.4 17.6 16.55L16.55 17.6C16.4 17.75 16.2208 17.825 16.0125 17.825C15.8042 17.825 15.625 17.75 15.475 17.6C15.325 17.45 15.2542 17.275 15.2625 17.075C15.2708 16.875 15.3417 16.7 15.475 16.55L14.375 15.45C13.8583 15.8667 13.3 16.2042 12.7 16.4625C12.1 16.7208 11.45 16.8917 10.75 16.975V18.5C10.95 18.5 11.125 18.575 11.275 18.725C11.425 18.875 11.5 19.05 11.5 19.25C11.5 19.45 11.425 19.625 11.275 19.775C11.125 19.925 10.95 20 10.75 20H9.25ZM10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM8.25 14C8.53333 14 8.77083 13.9042 8.9625 13.7125C9.15417 13.5208 9.25 13.2833 9.25 13C9.25 12.7167 9.15417 12.4792 8.9625 12.2875C8.77083 12.0958 8.53333 12 8.25 12C7.96667 12 7.72917 12.0958 7.5375 12.2875C7.34583 12.4792 7.25 12.7167 7.25 13C7.25 13.2833 7.34583 13.5208 7.5375 13.7125C7.72917 13.9042 7.96667 14 8.25 14ZM11.75 14C12.0333 14 12.2708 13.9042 12.4625 13.7125C12.6542 13.5208 12.75 13.2833 12.75 13C12.75 12.7167 12.6542 12.4792 12.4625 12.2875C12.2708 12.0958 12.0333 12 11.75 12C11.4667 12 11.2292 12.0958 11.0375 12.2875C10.8458 12.4792 10.75 12.7167 10.75 13C10.75 13.2833 10.8458 13.5208 11.0375 13.7125C11.2292 13.9042 11.4667 14 11.75 14ZM6.5 11C6.78333 11 7.02083 10.9042 7.2125 10.7125C7.40417 10.5208 7.5 10.2833 7.5 10C7.5 9.71667 7.40417 9.47917 7.2125 9.2875C7.02083 9.09583 6.78333 9 6.5 9C6.21667 9 5.97917 9.09583 5.7875 9.2875C5.59583 9.47917 5.5 9.71667 5.5 10C5.5 10.2833 5.59583 10.5208 5.7875 10.7125C5.97917 10.9042 6.21667 11 6.5 11ZM10 11C10.2833 11 10.5208 10.9042 10.7125 10.7125C10.9042 10.5208 11 10.2833 11 10C11 9.71667 10.9042 9.47917 10.7125 9.2875C10.5208 9.09583 10.2833 9 10 9C9.71667 9 9.47917 9.09583 9.2875 9.2875C9.09583 9.47917 9 9.71667 9 10C9 10.2833 9.09583 10.5208 9.2875 10.7125C9.47917 10.9042 9.71667 11 10 11ZM13.5 11C13.7833 11 14.0208 10.9042 14.2125 10.7125C14.4042 10.5208 14.5 10.2833 14.5 10C14.5 9.71667 14.4042 9.47917 14.2125 9.2875C14.0208 9.09583 13.7833 9 13.5 9C13.2167 9 12.9792 9.09583 12.7875 9.2875C12.5958 9.47917 12.5 9.71667 12.5 10C12.5 10.2833 12.5958 10.5208 12.7875 10.7125C12.9792 10.9042 13.2167 11 13.5 11ZM8.25 8C8.53333 8 8.77083 7.90417 8.9625 7.7125C9.15417 7.52083 9.25 7.28333 9.25 7C9.25 6.71667 9.15417 6.47917 8.9625 6.2875C8.77083 6.09583 8.53333 6 8.25 6C7.96667 6 7.72917 6.09583 7.5375 6.2875C7.34583 6.47917 7.25 6.71667 7.25 7C7.25 7.28333 7.34583 7.52083 7.5375 7.7125C7.72917 7.90417 7.96667 8 8.25 8ZM11.75 8C12.0333 8 12.2708 7.90417 12.4625 7.7125C12.6542 7.52083 12.75 7.28333 12.75 7C12.75 6.71667 12.6542 6.47917 12.4625 6.2875C12.2708 6.09583 12.0333 6 11.75 6C11.4667 6 11.2292 6.09583 11.0375 6.2875C10.8458 6.47917 10.75 6.71667 10.75 7C10.75 7.28333 10.8458 7.52083 11.0375 7.7125C11.2292 7.90417 11.4667 8 11.75 8Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  rainy: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
  <path d="M11.95 19.9C11.7 20.0333 11.4458 20.0542 11.1875 19.9625C10.9292 19.8708 10.7333 19.7 10.6 19.45L9.1 16.45C8.96667 16.2 8.94583 15.9458 9.0375 15.6875C9.12917 15.4292 9.3 15.2333 9.55 15.1C9.8 14.9667 10.0542 14.9458 10.3125 15.0375C10.5708 15.1292 10.7667 15.3 10.9 15.55L12.4 18.55C12.5333 18.8 12.5542 19.0542 12.4625 19.3125C12.3708 19.5708 12.2 19.7667 11.95 19.9ZM17.95 19.9C17.7 20.0333 17.4458 20.0542 17.1875 19.9625C16.9292 19.8708 16.7333 19.7 16.6 19.45L15.1 16.45C14.9667 16.2 14.9458 15.9458 15.0375 15.6875C15.1292 15.4292 15.3 15.2333 15.55 15.1C15.8 14.9667 16.0542 14.9458 16.3125 15.0375C16.5708 15.1292 16.7667 15.3 16.9 15.55L18.4 18.55C18.5333 18.8 18.5542 19.0542 18.4625 19.3125C18.3708 19.5708 18.2 19.7667 17.95 19.9ZM5.95 19.9C5.7 20.0333 5.44583 20.0542 5.1875 19.9625C4.92917 19.8708 4.73333 19.7 4.6 19.45L3.1 16.45C2.96667 16.2 2.94583 15.9458 3.0375 15.6875C3.12917 15.4292 3.3 15.2333 3.55 15.1C3.8 14.9667 4.05417 14.9458 4.3125 15.0375C4.57083 15.1292 4.76667 15.3 4.9 15.55L6.4 18.55C6.53333 18.8 6.55417 19.0542 6.4625 19.3125C6.37083 19.5708 6.2 19.7667 5.95 19.9ZM5.5 14C3.98333 14 2.6875 13.4625 1.6125 12.3875C0.5375 11.3125 0 10.0167 0 8.5C0 7.11667 0.458333 5.90833 1.375 4.875C2.29167 3.84167 3.425 3.23333 4.775 3.05C5.30833 2.1 6.0375 1.35417 6.9625 0.8125C7.8875 0.270833 8.9 0 10 0C11.5 0 12.8042 0.479167 13.9125 1.4375C15.0208 2.39583 15.6917 3.59167 15.925 5.025C17.075 5.125 18.0417 5.6 18.825 6.45C19.6083 7.3 20 8.31667 20 9.5C20 10.75 19.5625 11.8125 18.6875 12.6875C17.8125 13.5625 16.75 14 15.5 14H5.5ZM5.5 12H15.5C16.2 12 16.7917 11.7583 17.275 11.275C17.7583 10.7917 18 10.2 18 9.5C18 8.8 17.7583 8.20833 17.275 7.725C16.7917 7.24167 16.2 7 15.5 7H14V6C14 4.9 13.6083 3.95833 12.825 3.175C12.0417 2.39167 11.1 2 10 2C9.2 2 8.47083 2.21667 7.8125 2.65C7.15417 3.08333 6.65833 3.66667 6.325 4.4L6.075 5H5.45C4.5 5.03333 3.6875 5.3875 3.0125 6.0625C2.3375 6.7375 2 7.55 2 8.5C2 9.46667 2.34167 10.2917 3.025 10.975C3.70833 11.6583 4.53333 12 5.5 12Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Intent *** //
  check_circle: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M8.6 11.8L6.45 9.65C6.26667 9.46667 6.03333 9.375 5.75 9.375C5.46667 9.375 5.23333 9.46667 5.05 9.65C4.86667 9.83333 4.775 10.0667 4.775 10.35C4.775 10.6333 4.86667 10.8667 5.05 11.05L7.9 13.9C8.1 14.1 8.33333 14.2 8.6 14.2C8.86667 14.2 9.1 14.1 9.3 13.9L14.95 8.25C15.1333 8.06667 15.225 7.83333 15.225 7.55C15.225 7.26667 15.1333 7.03333 14.95 6.85C14.7667 6.66667 14.5333 6.575 14.25 6.575C13.9667 6.575 13.7333 6.66667 13.55 6.85L8.6 11.8ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  emergency_home: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 21.025C10.7333 21.025 10.4791 20.975 10.2375 20.875C9.99581 20.775 9.77498 20.6333 9.57498 20.45L1.54998 12.425C1.36664 12.225 1.22498 12.0041 1.12498 11.7625C1.02498 11.5208 0.974976 11.2666 0.974976 11C0.974976 10.7333 1.02498 10.475 1.12498 10.225C1.22498 9.97498 1.36664 9.75831 1.54998 9.57498L9.57498 1.54998C9.77498 1.34998 9.99581 1.20414 10.2375 1.11248C10.4791 1.02081 10.7333 0.974976 11 0.974976C11.2666 0.974976 11.525 1.02081 11.775 1.11248C12.025 1.20414 12.2416 1.34998 12.425 1.54998L20.45 9.57498C20.65 9.75831 20.7958 9.97498 20.8875 10.225C20.9791 10.475 21.025 10.7333 21.025 11C21.025 11.2666 20.9791 11.5208 20.8875 11.7625C20.7958 12.0041 20.65 12.225 20.45 12.425L12.425 20.45C12.2416 20.6333 12.025 20.775 11.775 20.875C11.525 20.975 11.2666 21.025 11 21.025ZM11 19.025L19.025 11L11 2.97498L2.97498 11L11 19.025ZM9.99998 12H12V5.99998H9.99998V12ZM11 15C11.2833 15 11.5208 14.9041 11.7125 14.7125C11.9041 14.5208 12 14.2833 12 14C12 13.7166 11.9041 13.4791 11.7125 13.2875C11.5208 13.0958 11.2833 13 11 13C10.7166 13 10.4791 13.0958 10.2875 13.2875C10.0958 13.4791 9.99998 13.7166 9.99998 14C9.99998 14.2833 10.0958 14.5208 10.2875 14.7125C10.4791 14.9041 10.7166 15 11 15Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  error: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14C11 13.7167 10.9042 13.4792 10.7125 13.2875C10.5208 13.0958 10.2833 13 10 13C9.71667 13 9.47917 13.0958 9.2875 13.2875C9.09583 13.4792 9 13.7167 9 14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM9 11H11V5H9V11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  info: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.5208 6.90417 10.7125 6.7125C10.9042 6.52083 11 6.28333 11 6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6C9 6.28333 9.09583 6.52083 9.2875 6.7125C9.47917 6.90417 9.71667 7 10 7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  warning: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
  <path d="M1.725 18C1.54167 18 1.375 17.9542 1.225 17.8625C1.075 17.7708 0.958337 17.65 0.875003 17.5C0.79167 17.35 0.745837 17.1875 0.737503 17.0125C0.72917 16.8375 0.775003 16.6667 0.875003 16.5L10.125 0.5C10.225 0.333333 10.3542 0.208333 10.5125 0.125C10.6708 0.0416667 10.8333 0 11 0C11.1667 0 11.3292 0.0416667 11.4875 0.125C11.6458 0.208333 11.775 0.333333 11.875 0.5L21.125 16.5C21.225 16.6667 21.2708 16.8375 21.2625 17.0125C21.2542 17.1875 21.2083 17.35 21.125 17.5C21.0417 17.65 20.925 17.7708 20.775 17.8625C20.625 17.9542 20.4583 18 20.275 18H1.725ZM3.45 16H18.55L11 3L3.45 16ZM11 15C11.2833 15 11.5208 14.9042 11.7125 14.7125C11.9042 14.5208 12 14.2833 12 14C12 13.7167 11.9042 13.4792 11.7125 13.2875C11.5208 13.0958 11.2833 13 11 13C10.7167 13 10.4792 13.0958 10.2875 13.2875C10.0958 13.4792 10 13.7167 10 14C10 14.2833 10.0958 14.5208 10.2875 14.7125C10.4792 14.9042 10.7167 15 11 15ZM11 12C11.2833 12 11.5208 11.9042 11.7125 11.7125C11.9042 11.5208 12 11.2833 12 11V8C12 7.71667 11.9042 7.47917 11.7125 7.2875C11.5208 7.09583 11.2833 7 11 7C10.7167 7 10.4792 7.09583 10.2875 7.2875C10.0958 7.47917 10 7.71667 10 8V11C10 11.2833 10.0958 11.5208 10.2875 11.7125C10.4792 11.9042 10.7167 12 11 12Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  // *** Social *** //
  social_facebook: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M10.0367 0C4.49365 0 0 4.49365 0 10.0367C0 14.7436 3.24066 18.6932 7.61226 19.778V13.104H5.54269V10.0367H7.61226V8.7151C7.61226 5.29899 9.15832 3.7156 12.5122 3.7156C13.1481 3.7156 14.2453 3.84046 14.6942 3.96491V6.74509C14.4573 6.7202 14.0458 6.70775 13.5347 6.70775C11.8891 6.70775 11.2532 7.33123 11.2532 8.95196V10.0367H14.5316L13.9683 13.104H11.2532V20C16.223 19.3998 20.0739 15.1683 20.0739 10.0367C20.0735 4.49365 15.5798 0 10.0367 0Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_flickr: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M19.0909 0H0.909091C0.407014 0 0 0.407014 0 0.909091V19.0909C0 19.593 0.407014 20 0.909091 20H19.0909C19.593 20 20 19.593 20 19.0909V0.909091C20 0.407014 19.593 0 19.0909 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M6.36364 12.7273C7.86987 12.7273 9.09091 11.5062 9.09091 10C9.09091 8.49377 7.86987 7.27273 6.36364 7.27273C4.85741 7.27273 3.63636 8.49377 3.63636 10C3.63636 11.5062 4.85741 12.7273 6.36364 12.7273Z" fill="white"/>
  <path d="M13.6364 12.7273C15.1426 12.7273 16.3636 11.5062 16.3636 10C16.3636 8.49377 15.1426 7.27273 13.6364 7.27273C12.1301 7.27273 10.9091 8.49377 10.9091 10C10.9091 11.5062 12.1301 12.7273 13.6364 12.7273Z" fill="white"/>
  </svg>`,
  social_google_play: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
  <path d="M3.1202 0.508333L14.0372 6.79667L11.6972 9.14083L3.1202 0.508333ZM0.85845 0L10.8795 10L0.859282 20C0.349369 19.7742 0 19.2717 0 18.6875C0 18.6683 0 18.6492 0.000831831 18.6308V18.6333V1.3675C0 1.35167 0 1.3325 0 1.31333C0 0.729167 0.349369 0.226667 0.850132 0.00416667L0.859282 0.000833333L0.85845 0ZM17.4302 8.82833C17.7746 9.08417 17.995 9.49083 17.995 9.94833C17.995 9.96667 17.995 9.98417 17.9942 10.0025V10C17.9975 10.0358 18 10.0783 18 10.1208C18 10.5508 17.792 10.9325 17.471 11.1692L17.4676 11.1717L15.1277 12.4992L12.5939 10L15.1285 7.46083L17.4302 8.82833ZM3.1202 19.4917L11.698 10.8592L14.038 13.2033L3.1202 19.4917Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_instagram: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.002 1.80113C12.6744 1.80113 12.9908 1.81285 14.0418 1.85974C15.0186 1.90272 15.546 2.06681 15.8976 2.20356C16.3626 2.38328 16.6986 2.60207 17.0463 2.9498C17.3979 3.30143 17.6128 3.63352 17.7925 4.09846C17.9293 4.45009 18.0934 4.98144 18.1364 5.95429C18.1832 7.00918 18.195 7.32565 18.195 9.99414C18.195 12.6665 18.1832 12.983 18.1364 14.034C18.0934 15.0107 17.9293 15.5382 17.7925 15.8898C17.6128 16.3548 17.394 16.6908 17.0463 17.0385C16.6947 17.3901 16.3626 17.605 15.8976 17.7847C15.546 17.9215 15.0147 18.0856 14.0418 18.1285C12.9869 18.1754 12.6704 18.1871 10.002 18.1871C7.32956 18.1871 7.01309 18.1754 5.9621 18.1285C4.98535 18.0856 4.4579 17.9215 4.10627 17.7847C3.64134 17.605 3.30533 17.3862 2.95761 17.0385C2.60598 16.6869 2.39109 16.3548 2.21137 15.8898C2.07462 15.5382 1.91053 15.0068 1.86755 14.034C1.82067 12.9791 1.80895 12.6626 1.80895 9.99414C1.80895 7.32174 1.82067 7.00527 1.86755 5.95429C1.91053 4.97753 2.07462 4.45009 2.21137 4.09846C2.39109 3.63352 2.60988 3.29752 2.95761 2.9498C3.30924 2.59816 3.64134 2.38328 4.10627 2.20356C4.4579 2.06681 4.98926 1.90272 5.9621 1.85974C7.01309 1.81285 7.32956 1.80113 10.002 1.80113ZM10.002 0C7.28658 0 6.94667 0.011721 5.88006 0.0586052C4.81735 0.105489 4.08674 0.277398 3.4538 0.52354C2.79351 0.781403 2.23481 1.12131 1.68002 1.68002C1.12131 2.23481 0.781403 2.79351 0.52354 3.44989C0.277398 4.08674 0.105489 4.81344 0.0586052 5.87615C0.011721 6.94667 0 7.28658 0 10.002C0 12.7173 0.011721 13.0572 0.0586052 14.1239C0.105489 15.1866 0.277398 15.9172 0.52354 16.5501C0.781403 17.2104 1.12131 17.7691 1.68002 18.3239C2.23481 18.8787 2.79351 19.2225 3.44989 19.4765C4.08674 19.7226 4.81344 19.8945 5.87615 19.9414C6.94276 19.9883 7.28267 20 9.99805 20C12.7134 20 13.0533 19.9883 14.1199 19.9414C15.1827 19.8945 15.9133 19.7226 16.5462 19.4765C17.2026 19.2225 17.7613 18.8787 18.3161 18.3239C18.8709 17.7691 19.2147 17.2104 19.4686 16.554C19.7148 15.9172 19.8867 15.1905 19.9336 14.1278C19.9805 13.0611 19.9922 12.7212 19.9922 10.0059C19.9922 7.29049 19.9805 6.95058 19.9336 5.88396C19.8867 4.82125 19.7148 4.09064 19.4686 3.45771C19.2225 2.79351 18.8826 2.23481 18.3239 1.68002C17.7691 1.12522 17.2104 0.781403 16.554 0.527447C15.9172 0.281305 15.1905 0.109396 14.1278 0.0625122C13.0572 0.011721 12.7173 0 10.002 0Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M10.002 4.86423C7.16546 4.86423 4.86423 7.16546 4.86423 10.002C4.86423 12.8384 7.16546 15.1397 10.002 15.1397C12.8384 15.1397 15.1397 12.8384 15.1397 10.002C15.1397 7.16546 12.8384 4.86423 10.002 4.86423ZM10.002 13.3346C8.16175 13.3346 6.66927 11.8422 6.66927 10.002C6.66927 8.16175 8.16175 6.66927 10.002 6.66927C11.8422 6.66927 13.3346 8.16175 13.3346 10.002C13.3346 11.8422 11.8422 13.3346 10.002 13.3346Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M16.5423 4.66103C16.5423 5.32522 16.0031 5.86048 15.3428 5.86048C14.6786 5.86048 14.1434 5.32131 14.1434 4.66103C14.1434 3.99683 14.6826 3.46157 15.3428 3.46157C16.0031 3.46157 16.5423 4.00074 16.5423 4.66103Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_pinterest: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10 0C4.47656 0 0 4.47656 0 10C0 14.2383 2.63672 17.8555 6.35547 19.3125C6.26953 18.5195 6.1875 17.3086 6.39062 16.4453C6.57422 15.6641 7.5625 11.4766 7.5625 11.4766C7.5625 11.4766 7.26172 10.8789 7.26172 9.99219C7.26172 8.60156 8.06641 7.5625 9.07031 7.5625C9.92187 7.5625 10.3359 8.20312 10.3359 8.97266C10.3359 9.83203 9.78906 11.1133 9.50781 12.3008C9.27344 13.2969 10.0078 14.1094 10.9883 14.1094C12.7656 14.1094 14.1328 12.2344 14.1328 9.53125C14.1328 7.13672 12.4141 5.46094 9.95703 5.46094C7.11328 5.46094 5.44141 7.59375 5.44141 9.80078C5.44141 10.6602 5.77344 11.582 6.1875 12.082C6.26953 12.1797 6.28125 12.2695 6.25781 12.3672C6.18359 12.6836 6.01172 13.3633 5.98047 13.5C5.9375 13.6836 5.83594 13.7227 5.64453 13.6328C4.39453 13.0508 3.61328 11.2266 3.61328 9.75781C3.61328 6.60156 5.90625 3.70703 10.2188 3.70703C13.6875 3.70703 16.3828 6.17969 16.3828 9.48438C16.3828 12.9297 14.2109 15.7031 11.1953 15.7031C10.1836 15.7031 9.23047 15.1758 8.90234 14.5547C8.90234 14.5547 8.40234 16.4648 8.28125 16.9336C8.05469 17.8008 7.44531 18.8906 7.03906 19.5547C7.97656 19.8438 8.96875 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_rss: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M0 6.79688V10.6172C2.49219 10.6172 4.85156 11.6016 6.61719 13.3672C8.38281 15.1328 9.35938 17.4922 9.35938 19.9922V20H13.1953C13.1953 16.3594 11.7109 13.0703 9.32031 10.6719C6.9375 8.28125 3.64062 6.80469 0 6.79688Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M2.65625 14.6797C1.92188 14.6797 1.26562 14.9766 0.78125 15.4609C0.296875 15.9453 0 16.6016 0 17.3359C0 18.0625 0.296875 18.7188 0.78125 19.2031C1.26562 19.6797 1.92188 19.9766 2.65625 19.9766C3.39062 19.9766 4.04688 19.6875 4.53125 19.2031C5.01562 18.7188 5.3125 18.0625 5.3125 17.3359C5.3125 16.6016 5.01562 15.9453 4.53125 15.4609C4.04688 14.9766 3.39062 14.6797 2.65625 14.6797Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M14.1328 5.86719C10.5156 2.24219 5.52344 0 0.0078125 0V3.82031C8.92188 3.82812 16.1641 11.0859 16.1719 20H20C20 14.4844 17.7578 9.49219 14.1328 5.86719Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_snapchat: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M17.581 13.7331C14.4839 12.2334 13.9903 9.91793 13.9683 9.74618C13.9417 9.53815 13.9116 9.37458 14.141 9.16297C14.3623 8.95851 15.3439 8.35076 15.6162 8.16061C16.0664 7.84574 16.2647 7.53139 16.1185 7.14496C16.0163 6.87763 15.7675 6.77694 15.5053 6.77694C15.4227 6.77719 15.3402 6.78645 15.2596 6.80454C14.7649 6.91188 14.2846 7.15979 14.0066 7.22675C13.9732 7.23536 13.9389 7.23999 13.9044 7.24055C13.7562 7.24055 13.7 7.17461 13.7143 6.99622C13.7491 6.45543 13.8226 5.39991 13.7373 4.41391C13.6203 3.05733 13.1829 2.38517 12.6642 1.79071C12.4133 1.50242 11.2483 0.263916 8.99989 0.263916C6.75152 0.263916 5.58799 1.50242 5.33862 1.78713C4.81843 2.38159 4.38153 3.05375 4.26554 4.41033C4.1802 5.39633 4.25685 6.45134 4.28853 6.99264C4.29875 7.16234 4.24663 7.23697 4.09844 7.23697C4.06395 7.23638 4.02965 7.23175 3.99624 7.22317C3.71877 7.15621 3.23844 6.9083 2.7438 6.80096C2.66311 6.78287 2.5807 6.77361 2.49801 6.77336C2.23485 6.77336 1.98702 6.87559 1.88482 7.14139C1.73867 7.52781 1.93592 7.84217 2.38764 8.15703C2.66 8.34718 3.64161 8.95442 3.86287 9.15939C4.0918 9.371 4.06216 9.53457 4.03559 9.74261C4.01362 9.91691 3.51949 12.2324 0.422867 13.7295C0.241464 13.8175 -0.0671757 14.0035 0.477032 14.3041C1.33141 14.7764 1.90015 14.7258 2.34216 15.0105C2.71723 15.2522 2.49546 15.7736 2.76833 15.9617C3.10354 16.1933 4.09435 15.9454 5.37439 16.3681C6.44748 16.7218 7.0995 17.7211 9.00244 17.7211C10.9054 17.7211 11.5763 16.7172 12.6305 16.3681C13.908 15.9454 14.9008 16.1933 15.2366 15.9617C15.5089 15.7736 15.2877 15.2522 15.6627 15.0105C16.1047 14.7258 16.673 14.7764 17.5279 14.3041C18.071 14.0071 17.7624 13.821 17.581 13.7331Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_soundcloud: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="9" viewBox="0 0 20 9" fill="none">
  <path d="M0.966096 4.67021C0.923344 4.67021 0.888366 4.70539 0.882843 4.75393L0.68627 6.61519L0.882843 8.43512C0.888366 8.48366 0.923344 8.51905 0.966096 8.51905C1.00823 8.51905 1.04239 8.48429 1.04914 8.43533L1.27292 6.61498L1.04914 4.75372C1.04239 4.70433 1.00823 4.67021 0.966096 4.67021Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M0.226643 5.38326C0.185119 5.38326 0.151982 5.41632 0.146459 5.46444L0 6.61519L0.146459 7.74645C0.151777 7.79435 0.184914 7.82741 0.226643 7.82741C0.267144 7.82741 0.300077 7.79435 0.306622 7.74687L0.479877 6.61519L0.306622 5.46338C0.300077 5.41632 0.267144 5.38326 0.226643 5.38326Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M1.75178 4.3052C1.699 4.3052 1.65687 4.34802 1.65155 4.40695L1.46479 6.61519L1.65155 8.74268C1.65687 8.80181 1.699 8.84442 1.75178 8.84442C1.80353 8.84442 1.84567 8.80181 1.8518 8.74289L2.06372 6.61498L1.8518 4.40674C1.84567 4.34802 1.80353 4.3052 1.75178 4.3052Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M2.544 4.2272C2.48182 4.2272 2.4313 4.2785 2.42639 4.34675L2.25006 6.61583L2.42639 8.8105C2.4313 8.87833 2.48182 8.92984 2.544 8.92984C2.60516 8.92984 2.65548 8.87833 2.66121 8.8105L2.86147 6.61583L2.66121 4.34633C2.65548 4.2785 2.60516 4.2272 2.544 4.2272Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M3.47655 4.51017C3.47164 4.43281 3.41355 4.37367 3.34237 4.37367C3.27016 4.37367 3.21248 4.4326 3.20798 4.51081L3.04147 6.61561L3.20798 8.82873C3.21248 8.90652 3.27037 8.96566 3.34237 8.96566C3.41376 8.96566 3.47164 8.90674 3.47655 8.82895L3.66535 6.61561L3.47655 4.51017Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M4.14748 3.03702C4.06648 3.03702 4.0002 3.10528 3.99611 3.19239L3.83984 6.61668L3.99611 8.82958C4.00041 8.91564 4.06668 8.9841 4.14748 8.9841C4.22767 8.9841 4.29394 8.91585 4.29885 8.82895V8.82979L4.47558 6.61689L4.29885 3.19239C4.29374 3.10528 4.22746 3.03702 4.14748 3.03702Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M4.94625 2.2483C4.85564 2.2483 4.78179 2.32419 4.7777 2.42106C4.7777 2.42148 4.63145 6.62855 4.63145 6.62855L4.77791 8.82767C4.782 8.92412 4.85564 9 4.94625 9C5.03626 9 5.11071 8.92412 5.1146 8.82725V8.82852L5.28008 6.62855L5.1146 2.42106C5.11071 2.32419 5.03626 2.2483 4.94625 2.2483Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M5.77673 1.86804C5.6763 1.86804 5.59468 1.95198 5.5912 2.05881L5.45518 6.61773L5.5912 8.79418C5.59489 8.90017 5.6763 8.98389 5.77673 8.98389C5.87655 8.98389 5.95817 8.90017 5.96226 8.79355V8.79482L6.11588 6.61795L5.96226 2.05881C5.95796 1.95198 5.87655 1.86804 5.77673 1.86804Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M6.80337 1.90556C6.7999 1.78855 6.71092 1.69677 6.60107 1.69677C6.49041 1.69677 6.40143 1.78877 6.39836 1.90556L6.27236 6.61773L6.39857 8.78062C6.40164 8.89635 6.49041 8.98792 6.60107 8.98792C6.71092 8.98792 6.8001 8.89635 6.80337 8.77998L6.94533 6.61837L6.80337 1.90556Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M7.43176 1.8C7.31107 1.8 7.21473 1.89941 7.21186 2.02638L7.09609 6.61858L7.21227 8.76048C7.21493 8.88618 7.31107 8.98601 7.43176 8.98601C7.55162 8.98601 7.64797 8.88596 7.65124 8.75921V8.7609L7.78174 6.61816L7.65124 2.02574C7.64797 1.89899 7.55162 1.8 7.43176 1.8Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M8.26898 1.94986C8.13889 1.94986 8.03457 2.05732 8.03211 2.19425L7.92636 6.61858L8.03211 8.74776C8.03457 8.88342 8.13889 8.99046 8.26898 8.99046C8.39888 8.99046 8.50299 8.88342 8.50545 8.74628V8.74797L8.62409 6.61922L8.50545 2.19447C8.50299 2.05732 8.39888 1.94986 8.26898 1.94986Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M9.25288 1.13676C9.21278 1.10857 9.16431 1.09204 9.11255 1.09204C9.06223 1.09204 9.01539 1.10794 8.97591 1.13464C8.90657 1.18149 8.86014 1.26225 8.85891 1.35424L8.85809 1.40384L8.76277 6.61773C8.76277 6.6207 8.85891 8.73399 8.85891 8.73399C8.85891 8.73738 8.85932 8.73971 8.85952 8.74289C8.86239 8.80181 8.88387 8.85608 8.91844 8.89911C8.96528 8.95697 9.03503 8.99428 9.11255 8.99428C9.18149 8.99428 9.24429 8.96481 9.2901 8.91733C9.33613 8.87007 9.36518 8.80478 9.3664 8.73229L9.47338 6.61901L9.36661 1.35403C9.36497 1.26352 9.31997 1.18382 9.25288 1.13676Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M10.0903 0.637589C10.0502 0.612153 10.0028 0.597315 9.95265 0.597315C9.88801 0.597315 9.82848 0.621479 9.78164 0.661329C9.7215 0.712836 9.68264 0.790415 9.68141 0.87732L9.6808 0.906147L9.57034 6.61986L9.68141 8.70389C9.68366 8.85587 9.80496 8.98177 9.95265 8.98177C10.0997 8.98177 10.221 8.85587 10.2231 8.70198V8.70452L10.3437 6.62007L10.2235 0.876896C10.222 0.775365 10.1684 0.686552 10.0903 0.637589Z" fill="var(--nys-icon-color, currentcolor)"/>
  <path d="M17.5399 3.90141C17.2032 3.90141 16.8812 3.97221 16.5887 4.09918C16.3925 1.80212 14.5336 0 12.2659 0C11.7108 0 11.1701 0.113189 10.6923 0.304593C10.5068 0.379204 10.4577 0.455511 10.4558 0.60431V8.69456C10.4577 8.85036 10.5743 8.97181 10.7213 8.98686C10.7277 8.98771 17.5403 8.98686 17.5403 8.98686C18.8989 8.98686 20 7.85836 20 6.45028C19.9998 5.04263 18.8987 3.90141 17.5399 3.90141Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_tiktok: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
  <path d="M14.883 4.27729C14.7506 4.20752 14.6217 4.13104 14.4968 4.04813C14.1337 3.80333 13.8007 3.51489 13.5051 3.18901C12.7655 2.32613 12.4893 1.45076 12.3876 0.837875H12.3917C12.3067 0.32915 12.3418 0 12.3471 0H8.97851V13.2818C8.97851 13.4602 8.97851 13.6364 8.97116 13.8106C8.97116 13.8322 8.96911 13.8522 8.96789 13.8756C8.96789 13.8851 8.96789 13.8951 8.96584 13.9051C8.96584 13.9076 8.96584 13.9101 8.96584 13.9126C8.93034 14.3892 8.78052 14.8495 8.52957 15.2532C8.27862 15.6568 7.93424 15.9914 7.52671 16.2275C7.10197 16.4739 6.62159 16.6032 6.13293 16.6025C4.56344 16.6025 3.29143 15.2976 3.29143 13.686C3.29143 12.0744 4.56344 10.7695 6.13293 10.7695C6.43002 10.7692 6.72529 10.8169 7.00777 10.9107L7.01185 7.41338C6.15432 7.30043 5.28314 7.36992 4.45327 7.61747C3.62339 7.86502 2.85284 8.28524 2.19021 8.85164C1.6096 9.36603 1.12148 9.97979 0.747808 10.6653C0.605611 10.9153 0.0691014 11.9198 0.00413184 13.5502C-0.0367295 14.4755 0.235816 15.4342 0.365755 15.8305V15.8388C0.447477 16.0721 0.764153 16.8683 1.28023 17.5395C1.69638 18.078 2.18804 18.5509 2.73939 18.9432V18.9349L2.74756 18.9432C4.37834 20.0732 6.18645 19.999 6.18645 19.999C6.49945 19.9861 7.54795 19.999 8.73865 19.4236C10.0593 18.7857 10.8111 17.8354 10.8111 17.8354C11.2915 17.2675 11.6734 16.6204 11.9405 15.9217C12.2454 15.1047 12.3471 14.1247 12.3471 13.7331V6.68675C12.388 6.71175 12.9323 7.07881 12.9323 7.07881C12.9323 7.07881 13.7164 7.59129 14.9398 7.92502C15.8175 8.16251 17 8.21251 17 8.21251V4.80268C16.5857 4.84851 15.7443 4.71518 14.883 4.27729Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_tumblr: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
  <path d="M8.16675 20C5.16675 20 2.91675 18.4583 2.91675 14.75V8.83333H0.166748V5.625C3.16675 4.83333 4.41675 2.25 4.58342 0H7.70842V5.08333H11.3334V8.83333H7.70842V14C7.70842 15.5417 8.50008 16.0833 9.75008 16.0833H11.5001V20H8.16675Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_vimeo: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
  <path d="M19.8881 1.69862C19.5362 0.229472 17.8797 -0.185772 16.2069 0.0712117C15.3489 0.204969 12.4525 1.49916 11.4656 4.60025C13.2117 4.46356 14.1279 4.72713 13.9598 6.67303C13.8886 7.48846 13.4838 8.38049 13.0286 9.23624C12.5054 10.2241 11.5212 12.1601 10.2329 10.7655C9.0727 9.50732 9.16169 7.10527 8.89749 5.5037C8.74774 4.60315 8.59141 3.48589 8.30044 2.56221C8.05194 1.76626 7.47709 0.809563 6.77407 0.599948C6.01998 0.377956 5.08804 0.727832 4.54143 1.05518C2.83909 2.06578 1.56386 3.45811 0.102263 4.65849C-0.0821777 4.84616 0.0270352 5.00379 0.0891308 5.14342C0.299039 5.47202 0.380141 5.67144 0.780407 5.73002C1.81954 5.88433 2.8077 4.74937 3.4963 5.93241C3.9175 6.65239 4.0489 7.44205 4.31772 8.21766C4.67544 9.25684 4.95332 10.3843 5.2476 11.5768C5.74663 13.592 6.35542 16.6046 8.0787 17.3458C8.95631 17.7212 10.276 17.218 10.9437 16.8167C12.7553 15.7305 14.2286 14.2052 15.375 12.5542C18.3584 8.26088 19.7887 3.94699 19.9442 3.12531C20.0548 2.52978 19.9823 2.0383 19.8881 1.69862Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  social_x: `<svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
  <path d="M17.4256 0H20.8185L13.4062 8.47179L22.1262 20H15.2985L9.95077 13.0082L3.83179 20H0.436923L8.36513 10.9385L0 0H7.00103L11.8349 6.39077L17.4256 0ZM16.2349 17.9692H18.1149L5.97949 1.9241H3.96205L16.2349 17.9692Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  social_youtube: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
  <path d="M19.8008 3.03516C19.8008 3.03516 19.6055 1.65625 19.0039 1.05078C18.2422 0.253906 17.3906 0.25 17 0.203125C14.2031 -1.11759e-07 10.0039 0 10.0039 0H9.99609C9.99609 0 5.79688 -1.11759e-07 3 0.203125C2.60938 0.25 1.75781 0.253906 0.996094 1.05078C0.394531 1.65625 0.203125 3.03516 0.203125 3.03516C0.203125 3.03516 0 4.65625 0 6.27344V7.78906C0 9.40625 0.199219 11.0273 0.199219 11.0273C0.199219 11.0273 0.394531 12.4062 0.992187 13.0117C1.75391 13.8086 2.75391 13.7812 3.19922 13.8672C4.80078 14.0195 10 14.0664 10 14.0664C10 14.0664 14.2031 14.0586 17 13.8594C17.3906 13.8125 18.2422 13.8086 19.0039 13.0117C19.6055 12.4062 19.8008 11.0273 19.8008 11.0273C19.8008 11.0273 20 9.41016 20 7.78906V6.27344C20 4.65625 19.8008 3.03516 19.8008 3.03516ZM7.93359 9.62891V4.00781L13.3359 6.82812L7.93359 9.62891Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  // *** Filled *** //
  account_balance_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M3.22502 15.875V11.65C3.22502 11.2666 3.36252 10.9416 3.63752 10.675C3.91252 10.4083 4.24169 10.275 4.62502 10.275C5.00836 10.275 5.33336 10.4083 5.60002 10.675C5.86669 10.9416 6.00002 11.2666 6.00002 11.65V15.9C6.00002 16.2833 5.86669 16.6083 5.60002 16.875C5.33336 17.1416 5.00836 17.275 4.62502 17.275C4.24169 17.275 3.91252 17.1375 3.63752 16.8625C3.36252 16.5875 3.22502 16.2583 3.22502 15.875ZM9.62502 15.9V11.65C9.62502 11.2666 9.75836 10.9416 10.025 10.675C10.2917 10.4083 10.6167 10.275 11 10.275C11.3834 10.275 11.7084 10.4083 11.975 10.675C12.2417 10.9416 12.375 11.2666 12.375 11.65V15.9C12.375 16.2833 12.2417 16.6083 11.975 16.875C11.7084 17.1416 11.3834 17.275 11 17.275C10.6167 17.275 10.2917 17.1416 10.025 16.875C9.75836 16.6083 9.62502 16.2833 9.62502 15.9ZM1.72502 21.65C1.29169 21.65 0.920858 21.4958 0.612524 21.1875C0.304191 20.8791 0.150024 20.5083 0.150024 20.075C0.150024 19.6416 0.304191 19.2708 0.612524 18.9625C0.920858 18.6541 1.29169 18.5 1.72502 18.5H20.275C20.7084 18.5 21.0792 18.6541 21.3875 18.9625C21.6959 19.2708 21.85 19.6416 21.85 20.075C21.85 20.5083 21.6959 20.8791 21.3875 21.1875C21.0792 21.4958 20.7084 21.65 20.275 21.65H1.72502ZM16 15.875V11.65C16 11.2666 16.1375 10.9416 16.4125 10.675C16.6875 10.4083 17.0167 10.275 17.4 10.275C17.7834 10.275 18.1084 10.4083 18.375 10.675C18.6417 10.9416 18.775 11.2666 18.775 11.65V15.9C18.775 16.2833 18.6417 16.6083 18.375 16.875C18.1084 17.1416 17.7834 17.275 17.4 17.275C17.0167 17.275 16.6875 17.1375 16.4125 16.8625C16.1375 16.5875 16 16.2583 16 15.875ZM20.175 9.02495H1.65002C1.23336 9.02495 0.879191 8.87912 0.587524 8.58745C0.295858 8.29578 0.150024 7.94162 0.150024 7.52495V6.57495C0.150024 6.29162 0.225024 6.02912 0.375024 5.78745C0.525024 5.54578 0.725024 5.35828 0.975024 5.22495L9.60002 0.924951C10.0334 0.691618 10.5 0.574951 11 0.574951C11.5 0.574951 11.9667 0.691618 12.4 0.924951L20.925 5.17495C21.2084 5.30828 21.4334 5.51245 21.6 5.78745C21.7667 6.06245 21.85 6.36662 21.85 6.69995V7.32495C21.85 7.79162 21.6875 8.19162 21.3625 8.52495C21.0375 8.85828 20.6417 9.02495 20.175 9.02495Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  cancel_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M10.9242 12.3032L13.8242 15.2032C14.0075 15.3866 14.2408 15.4782 14.5242 15.4782C14.8075 15.4782 15.0408 15.3866 15.2242 15.2032C15.4075 15.0199 15.4992 14.7866 15.4992 14.5032C15.4992 14.2199 15.4075 13.9866 15.2242 13.8032L12.3242 10.9032L15.2242 8.00324C15.4075 7.81991 15.4992 7.58658 15.4992 7.30324C15.4992 7.01991 15.4075 6.78658 15.2242 6.60324C15.0408 6.41991 14.8075 6.32824 14.5242 6.32824C14.2408 6.32824 14.0075 6.41991 13.8242 6.60324L10.9242 9.50324L8.02416 6.60324C7.84083 6.41991 7.6075 6.32824 7.32416 6.32824C7.04083 6.32824 6.8075 6.41991 6.62416 6.60324C6.44083 6.78658 6.34916 7.01991 6.34916 7.30324C6.34916 7.58658 6.44083 7.81991 6.62416 8.00324L9.52416 10.9032L6.62416 13.8032C6.44083 13.9866 6.34916 14.2199 6.34916 14.5032C6.34916 14.7866 6.44083 15.0199 6.62416 15.2032C6.8075 15.3866 7.04083 15.4782 7.32416 15.4782C7.6075 15.4782 7.84083 15.3866 8.02416 15.2032L10.9242 12.3032ZM10.9242 20.9032C9.54083 20.9032 8.24083 20.6407 7.02416 20.1157C5.8075 19.5907 4.74916 18.8782 3.84916 17.9782C2.94916 17.0782 2.23666 16.0199 1.71166 14.8032C1.18666 13.5866 0.924164 12.2866 0.924164 10.9032C0.924164 9.51991 1.18666 8.21991 1.71166 7.00324C2.23666 5.78658 2.94916 4.72824 3.84916 3.82824C4.74916 2.92824 5.8075 2.21574 7.02416 1.69074C8.24083 1.16574 9.54083 0.903244 10.9242 0.903244C12.3075 0.903244 13.6075 1.16574 14.8242 1.69074C16.0408 2.21574 17.0992 2.92824 17.9992 3.82824C18.8992 4.72824 19.6117 5.78658 20.1367 7.00324C20.6617 8.21991 20.9242 9.51991 20.9242 10.9032C20.9242 12.2866 20.6617 13.5866 20.1367 14.8032C19.6117 16.0199 18.8992 17.0782 17.9992 17.9782C17.0992 18.8782 16.0408 19.5907 14.8242 20.1157C13.6075 20.6407 12.3075 20.9032 10.9242 20.9032Z" fill="var(--nys-icon-color, currentcolor)"/>
  </svg>`,
  language_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11 21.8499C9.51669 21.8499 8.11669 21.5624 6.80002 20.9874C5.48336 20.4124 4.33336 19.6332 3.35002 18.6499C2.36669 17.6666 1.58752 16.5166 1.01252 15.1999C0.437524 13.8832 0.150024 12.4832 0.150024 10.9999C0.150024 9.51657 0.437524 8.11657 1.01252 6.7999C1.58752 5.48324 2.36669 4.33324 3.35002 3.3499C4.33336 2.36657 5.48336 1.5874 6.80002 1.0124C8.11669 0.437402 9.51669 0.149902 11 0.149902C12.4834 0.149902 13.8834 0.437402 15.2 1.0124C16.5167 1.5874 17.6667 2.36657 18.65 3.3499C19.6334 4.33324 20.4125 5.48324 20.9875 6.7999C21.5625 8.11657 21.85 9.51657 21.85 10.9999C21.85 12.4832 21.5625 13.8832 20.9875 15.1999C20.4125 16.5166 19.6334 17.6666 18.65 18.6499C17.6667 19.6332 16.5167 20.4124 15.2 20.9874C13.8834 21.5624 12.4834 21.8499 11 21.8499ZM10.95 18.6749C11.3167 18.1082 11.6584 17.5041 11.975 16.8624C12.2917 16.2207 12.55 15.5499 12.75 14.8499H9.22502C9.42502 15.5499 9.67086 16.2207 9.96252 16.8624C10.2542 17.5041 10.5834 18.1082 10.95 18.6749ZM8.47502 18.2749C8.14169 17.7582 7.87919 17.2041 7.68752 16.6124C7.49586 16.0207 7.32502 15.4332 7.17502 14.8499H4.37502C4.80836 15.6499 5.37502 16.3499 6.07502 16.9499C6.77502 17.5499 7.57502 17.9916 8.47502 18.2749ZM13.45 18.2749C14.35 17.9916 15.1584 17.5499 15.875 16.9499C16.5917 16.3499 17.1667 15.6499 17.6 14.8499H14.8C14.65 15.4332 14.4709 16.0207 14.2625 16.6124C14.0542 17.2041 13.7834 17.7582 13.45 18.2749ZM3.55002 12.9249H6.77502C6.72502 12.5916 6.68752 12.2707 6.66252 11.9624C6.63752 11.6541 6.62502 11.3332 6.62502 10.9999C6.62502 10.6499 6.63752 10.3249 6.66252 10.0249C6.68752 9.7249 6.72502 9.40824 6.77502 9.0749H3.55002C3.46669 9.39157 3.40419 9.70407 3.36252 10.0124C3.32086 10.3207 3.30002 10.6499 3.30002 10.9999C3.30002 11.3332 3.32086 11.6582 3.36252 11.9749C3.40419 12.2916 3.46669 12.6082 3.55002 12.9249ZM8.77502 12.9249H13.2C13.25 12.5916 13.2792 12.2707 13.2875 11.9624C13.2959 11.6541 13.3 11.3332 13.3 10.9999C13.3 10.6499 13.2959 10.3249 13.2875 10.0249C13.2792 9.7249 13.25 9.40824 13.2 9.0749H8.77502C8.72502 9.40824 8.68752 9.7249 8.66252 10.0249C8.63752 10.3249 8.62502 10.6499 8.62502 10.9999C8.62502 11.3332 8.63752 11.6541 8.66252 11.9624C8.68752 12.2707 8.72502 12.5916 8.77502 12.9249ZM15.2 12.9249H18.4C18.4834 12.6082 18.5459 12.2916 18.5875 11.9749C18.6292 11.6582 18.65 11.3332 18.65 10.9999C18.65 10.6499 18.6292 10.3207 18.5875 10.0124C18.5459 9.70407 18.4834 9.39157 18.4 9.0749H15.2C15.2334 9.40824 15.2584 9.7249 15.275 10.0249C15.2917 10.3249 15.3 10.6499 15.3 10.9999C15.3 11.3332 15.2917 11.6541 15.275 11.9624C15.2584 12.2707 15.2334 12.5916 15.2 12.9249ZM14.8 7.1249H17.6C17.1667 6.3249 16.5917 5.62907 15.875 5.0374C15.1584 4.44574 14.35 4.00824 13.45 3.7249C13.7834 4.24157 14.0542 4.79157 14.2625 5.3749C14.4709 5.95824 14.65 6.54157 14.8 7.1249ZM9.22502 7.1249H12.75C12.5667 6.4249 12.3167 5.75824 12 5.1249C11.6834 4.49157 11.3334 3.89157 10.95 3.3249C10.5834 3.89157 10.2542 4.49157 9.96252 5.1249C9.67086 5.75824 9.42502 6.4249 9.22502 7.1249ZM4.37502 7.1249H7.17502C7.32502 6.54157 7.49586 5.95824 7.68752 5.3749C7.87919 4.79157 8.14169 4.24157 8.47502 3.7249C7.57502 4.00824 6.77502 4.44574 6.07502 5.0374C5.37502 5.62907 4.80836 6.3249 4.37502 7.1249Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`,
  lock_filled: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="23" viewBox="0 0 18 23" fill="none">
  <path d="M3.30002 22.7751C2.43369 22.7751 1.69211 22.4667 1.07527 21.8498C0.458441 21.2328 0.150024 20.4913 0.150024 19.6251V10.2251C0.150024 9.35893 0.458441 8.61735 1.07527 8.00035C1.69211 7.38351 2.43369 7.0751 3.30002 7.0751H3.62502V5.8001C3.62502 4.28343 4.14586 2.99593 5.18752 1.9376C6.22919 0.879264 7.50002 0.350098 9.00002 0.350098C10.5 0.350098 11.7709 0.879264 12.8125 1.9376C13.8542 2.99593 14.375 4.28343 14.375 5.8001V7.0751H14.7C15.5662 7.0751 16.3078 7.38351 16.9248 8.00035C17.5416 8.61735 17.85 9.35893 17.85 10.2251V19.6251C17.85 20.4913 17.5416 21.2328 16.9248 21.8498C16.3078 22.4667 15.5662 22.7751 14.7 22.7751H3.30002ZM9.00002 16.9251C9.55002 16.9251 10.0209 16.7293 10.4125 16.3376C10.8042 15.9459 11 15.4751 11 14.9251C11 14.3751 10.8042 13.9043 10.4125 13.5126C10.0209 13.1209 9.55002 12.9251 9.00002 12.9251C8.45002 12.9251 7.97919 13.1209 7.58752 13.5126C7.19586 13.9043 7.00002 14.3751 7.00002 14.9251C7.00002 15.4751 7.19586 15.9459 7.58752 16.3376C7.97919 16.7293 8.45002 16.9251 9.00002 16.9251ZM6.77502 7.0751H11.225V5.8001C11.225 5.16126 11.0125 4.61818 10.5875 4.17085C10.1625 3.72368 9.63336 3.5001 9.00002 3.5001C8.36669 3.5001 7.83752 3.72368 7.41252 4.17085C6.98752 4.61818 6.77502 5.16126 6.77502 5.8001V7.0751Z" fill="var(--nys-icon-color, currentcolor)"/>
</svg>`
}, A4 = v`
  :host {
    display: inline-block;
    --_nys-icon-size: 0.7em; /* If cap isn't supported, a fallback value of 0.7em is used, as it closely approximates the height of capital letters in most fonts. */
    box-sizing: content-box !important;
  }

  /* Use 'cap' if supported */
  @supports (font-size: 1cap) {
    :host {
      --_nys-icon-size: 1cap;
    }
  }

  /* SVG size and color is initially determined by the parent's font-size and text-color */
  .nys-icon--svg {
    width: var(--_nys-icon-size, 1em);
    height: var(--_nys-icon-size, 1em);
    display: block;
    white-space: nowrap;
  }

  /* Relative Sizes */
  .nys-icon--2xs {
    width: calc(var(--_nys-icon-size) * 0.75);
    height: calc(var(--_nys-icon-size) * 0.75);
  }
  .nys-icon--xs {
    width: calc(var(--_nys-icon-size) * 0.875);
    height: calc(var(--_nys-icon-size) * 0.875);
  }
  .nys-icon--sm {
    width: var(--_nys-icon-size);
    height: var(--_nys-icon-size);
  }
  .nys-icon--md {
    width: calc(var(--_nys-icon-size) * 1.125);
    height: calc(var(--_nys-icon-size) * 1.125);
  }
  .nys-icon--lg {
    width: calc(var(--_nys-icon-size) * 1.25);
    height: calc(var(--_nys-icon-size) * 1.25);
  }
  .nys-icon--xl {
    width: calc(var(--_nys-icon-size) * 1.5);
    height: calc(var(--_nys-icon-size) * 1.5);
  }
  .nys-icon--2xl {
    width: calc(var(--_nys-icon-size) * 1.875);
    height: calc(var(--_nys-icon-size) * 1.875);
  }
  .nys-icon--3xl {
    width: calc(var(--_nys-icon-size) * 2.25);
    height: calc(var(--_nys-icon-size) * 2.25);
  }
  .nys-icon--4xl {
    width: calc(var(--_nys-icon-size) * 3);
    height: calc(var(--_nys-icon-size) * 3);
  }

  /* Literal Sizing */
  .nys-icon--12 {
    width: 0.75rem;
    height: 0.75rem;
  }
  .nys-icon--16 {
    width: 1rem;
    height: 1rem;
  }
  .nys-icon--24 {
    width: 1.5rem;
    height: 1.5rem;
  }
  .nys-icon--32 {
    width: 2rem;
    height: 2rem;
  }
  .nys-icon--48 {
    width: 3rem;
    height: 3rem;
  }
  .nys-icon--64 {
    width: 4rem;
    height: 4rem;
  }

  /* Flipping Icons */
  .nys-icon--flip-horizontal {
    transform: scaleX(-1);
  }
  .nys-icon--flip-vertical {
    transform: scaleY(-1);
  }
  .nys-icon--flip-both {
    transform: scale(-1, -1);
  }
`;
var P4 = Object.defineProperty, z4 = Object.getOwnPropertyDescriptor, o5 = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? z4(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && P4(t, e, r), r;
}, b5;
const S1 = (b5 = class extends p {
  constructor() {
    super(...arguments), this.name = "", this.label = "", this.rotate = "0", this.flip = "", this.color = "", this._size = "sm";
  }
  get size() {
    return this._size;
  }
  set size(s) {
    this._size = b5.VALID_TYPES.includes(
      s
    ) ? s : "sm";
  }
  getIcon() {
    const s = k4[this.name], t = !!this.label;
    if (!s) return null;
    const e = new DOMParser().parseFromString(s, "image/svg+xml").documentElement;
    return e instanceof SVGElement ? (e.setAttribute("role", "img"), e.setAttribute("aria-label", t ? this.label : ""), e.setAttribute("aria-hidden", t ? "false" : "true"), e.style.rotate = `${this.rotate}deg`, e.style.color = this.color || "currentcolor", e.classList.add(`nys-icon--${this.size}`), e.classList.add("nys-icon--svg"), this.flip && e.classList.add(`nys-icon--flip-${this.flip}`), e) : null;
  }
  render() {
    const s = this.getIcon();
    return s ? c`${s}` : null;
  }
}, b5.styles = A4, b5.VALID_TYPES = [
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "12",
  "16",
  "24",
  "32",
  "48",
  "64"
], b5);
o5([
  s5({ type: String, reflect: !0 })
], S1.prototype, "name", 2);
o5([
  s5({ type: String })
], S1.prototype, "label", 2);
o5([
  s5({ type: String })
], S1.prototype, "rotate", 2);
o5([
  s5({ type: String })
], S1.prototype, "flip", 2);
o5([
  s5({ type: String })
], S1.prototype, "color", 2);
o5([
  s5({ reflect: !0 })
], S1.prototype, "size", 1);
let B4 = S1;
customElements.get("nys-icon") || customElements.define("nys-icon", B4);
var U4 = Object.defineProperty, i7 = (s, t, e, o) => {
  for (var r = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = i(t, e, r) || r);
  return r && U4(t, e, r), r;
};
const S2 = class extends p {
  // allows use of elementInternals' API
  constructor() {
    super(), this.showError = !1, this.errorMessage = "", this.showDivider = !1, this._internals = this.attachInternals();
  }
  render() {
    return c`${this.showError ? c`<div class="nys-errormessage" ?showDivider=${this.showDivider}>
          <nys-icon name="error" size="xl"></nys-icon>
          ${this._internals.validationMessage || this.errorMessage}
        </div>` : ""}`;
  }
};
S2.styles = w4, S2.formAssociated = !0;
let L2 = S2;
i7([
  o7({ type: Boolean })
], L2.prototype, "showError");
i7([
  o7({ type: String })
], L2.prototype, "errorMessage");
i7([
  o7({ type: Boolean, reflect: !0 })
], L2.prototype, "showDivider");
customElements.get("nys-errormessage") || customElements.define("nys-errormessage", L2);
var O4 = Object.defineProperty, I4 = Object.getOwnPropertyDescriptor, x = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? I4(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && O4(t, e, r), r;
};
let R4 = 0;
var l1;
const w = (l1 = class extends p {
  // allows use of elementInternals' API
  constructor() {
    super(), this.id = "", this.name = "", this._type = "text", this.label = "", this.description = "", this.placeholder = "", this.value = "", this.disabled = !1, this.readonly = !1, this.required = !1, this.optional = !1, this.form = "", this.pattern = "", this.maxlength = null, this.width = "full", this.step = null, this.min = null, this.max = null, this.showError = !1, this.errorMessage = "", this.showPassword = !1, this._originalErrorMessage = "", this._hasUserInteracted = !1, this._internals = this.attachInternals();
  }
  get type() {
    return this._type;
  }
  set type(s) {
    this._type = l1.VALID_TYPES.includes(
      s
    ) ? s : "text";
  }
  // Ensure the "width" property is valid after updates
  updated(s) {
    s.has("width") && (this.width = l1.VALID_WIDTHS.includes(this.width) ? this.width : "full");
  }
  // Generate a unique ID if one is not provided
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-textinput-${Date.now()}-${R4++}`), this._originalErrorMessage = this.errorMessage, this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this._setValue(), this._manageRequire();
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.value = "";
  }
  /********************** Form Integration **********************/
  _setValue() {
    this._internals.setFormValue(this.value), this._manageRequire();
  }
  _manageRequire() {
    var s;
    const t = (s = this.shadowRoot) == null ? void 0 : s.querySelector("input");
    if (!t) return;
    const e = this.errorMessage || "This field is required";
    this.required && (!this.value || this.value.trim() === "") ? (this._internals.ariaRequired = "true", this._internals.setValidity({ valueMissing: !0 }, e, t)) : (this._internals.ariaRequired = "false", this._internals.setValidity({}), this._hasUserInteracted = !1);
  }
  _setValidityMessage(s = "") {
    var t;
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector("input");
    if (!e) return;
    this.showError = !!s, this._originalErrorMessage.trim() && s !== "" ? this.errorMessage = this._originalErrorMessage : this.errorMessage = s;
    const o = s ? { customError: !0 } : {};
    this._internals.setValidity(o, this.errorMessage, e);
  }
  _validate() {
    var s;
    const t = (s = this.shadowRoot) == null ? void 0 : s.querySelector("input");
    if (!t) return;
    const e = t.validity;
    let o = "";
    e.valueMissing ? o = "This field is required" : e.typeMismatch ? o = "Invalid format for this type" : e.patternMismatch ? o = "Invalid format" : e.tooShort ? o = `Value is too short. Minimum length is ${t.minLength}` : e.tooLong ? o = `Value is too long. Maximum length is ${t.maxLength}` : e.rangeUnderflow ? o = `Value must be at least ${t.min}` : e.rangeOverflow ? o = `Value must be at most ${t.max}` : e.stepMismatch ? o = "Invalid step value" : o = t.validationMessage, this._setValidityMessage(o);
  }
  /********************** Functions **********************/
  // This helper function is called to perform the element's native validation.
  checkValidity() {
    var s;
    const t = (s = this.shadowRoot) == null ? void 0 : s.querySelector("input");
    return t ? t.checkValidity() : !0;
  }
  _handleInvalid(s) {
    var t;
    s.preventDefault(), this._hasUserInteracted = !0, this._validate();
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector("input");
    if (e) {
      const o = this._internals.form;
      o ? Array.from(o.elements).find(
        (r) => typeof r.checkValidity == "function" && !r.checkValidity()
      ) === this && e.focus() : e.focus();
    }
  }
  _togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  /******************** Event Handlers ********************/
  // Handle input event to check pattern validity
  _handleInput(s) {
    const t = s.target;
    this.value = t.value, this._internals.setFormValue(this.value), this._hasUserInteracted && this._validate(), this.dispatchEvent(
      new CustomEvent("input", {
        detail: { value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  // Handle focus event
  _handleFocus() {
    this.dispatchEvent(new Event("focus"));
  }
  // Handle blur event
  _handleBlur() {
    this._hasUserInteracted || (this._hasUserInteracted = !0), this._validate(), this.dispatchEvent(new Event("blur"));
  }
  // Handle change event
  _handleChange() {
    this.dispatchEvent(new Event("change"));
  }
  render() {
    return c`
      <div class="nys-textinput">
        <nys-label
          label=${this.label}
          description=${this.description}
          flag=${this.required ? "required" : this.optional ? "optional" : ""}
        >
          <slot name="description" slot="description">${this.description}</slot>
        </nys-label>
        <div class="nys-input-container ${this.disabled ? "disabled" : ""}">
          <input
            class="nys-textinput__input"
            type=${this.type === "password" ? this.showPassword ? "text" : "password" : this.type}
            name=${this.name}
            id=${this.id}
            ?disabled=${this.disabled}
            ?required=${this.required}
            ?readonly=${this.readonly}
            aria-disabled="${this.disabled}"
            aria-label="${this.label} ${this.description}"
            .value=${this.value}
            placeholder=${g1(
      this.placeholder ? this.placeholder : void 0
    )}
            pattern=${g1(this.pattern ? this.pattern : void 0)}
            min=${g1(this.min !== "" ? this.min : void 0)}
            maxlength=${g1(
      this.maxlength !== "" ? this.maxlength : void 0
    )}
            step=${g1(this.step !== "" ? this.step : void 0)}
            max=${g1(this.max !== "" ? this.max : void 0)}
            form=${g1(this.form ? this.form : void 0)}
            @input=${this._handleInput}
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
            @change="${this._handleChange}"
          />
          ${this.type === "password" ? c`<nys-icon
                class="eye-icon"
                @click=${() => !this.disabled && this._togglePasswordVisibility()}
                name=${this.showPassword ? "visibility_off" : "visibility"}
                size="3xl"
              ></nys-icon>` : ""}
        </div>
        <nys-errormessage
          ?showError=${this.showError}
          errorMessage=${this.errorMessage}
        ></nys-errormessage>
      </div>
    `;
  }
}, l1.VALID_TYPES = [
  "email",
  "number",
  "password",
  "search",
  "tel",
  "text",
  "url"
], l1.VALID_WIDTHS = ["sm", "md", "lg", "full"], l1.styles = b9, l1.formAssociated = !0, l1);
x([
  m({ type: String })
], w.prototype, "id", 2);
x([
  m({ type: String, reflect: !0 })
], w.prototype, "name", 2);
x([
  m({ reflect: !0 })
], w.prototype, "type", 1);
x([
  m({ type: String })
], w.prototype, "label", 2);
x([
  m({ type: String })
], w.prototype, "description", 2);
x([
  m({ type: String })
], w.prototype, "placeholder", 2);
x([
  m({ type: String })
], w.prototype, "value", 2);
x([
  m({ type: Boolean, reflect: !0 })
], w.prototype, "disabled", 2);
x([
  m({ type: Boolean, reflect: !0 })
], w.prototype, "readonly", 2);
x([
  m({ type: Boolean, reflect: !0 })
], w.prototype, "required", 2);
x([
  m({ type: Boolean, reflect: !0 })
], w.prototype, "optional", 2);
x([
  m({ type: String })
], w.prototype, "form", 2);
x([
  m({ type: String })
], w.prototype, "pattern", 2);
x([
  m({ type: Number })
], w.prototype, "maxlength", 2);
x([
  m({ reflect: !0 })
], w.prototype, "width", 2);
x([
  m({ type: Number })
], w.prototype, "step", 2);
x([
  m({ type: Number })
], w.prototype, "min", 2);
x([
  m({ type: Number })
], w.prototype, "max", 2);
x([
  m({ type: Boolean, reflect: !0 })
], w.prototype, "showError", 2);
x([
  m({ type: String })
], w.prototype, "errorMessage", 2);
x([
  _9()
], w.prototype, "showPassword", 2);
let D4 = w;
customElements.get("nys-textinput") || customElements.define("nys-textinput", D4);
var T4 = Object.defineProperty, q4 = Object.getOwnPropertyDescriptor, E1 = (s, t, e, o) => {
  for (var r = o > 1 ? void 0 : o ? q4(t, e) : t, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = (o ? i(t, e, r) : i(r)) || r);
  return o && r && T4(t, e, r), r;
};
const C7 = class C7 extends p {
  constructor() {
    super(...arguments), this.trustbarVisible = !1, this.searchDropdownVisible = !1, this.languageVisible = !1, this.isSearchFocused = !1, this.hideTranslate = !1, this.hideSearch = !1, this.languages = [
      ["English", ""],
      ["Español", "es"],
      ["中文", "zh"],
      ["繁體中文", "zh-traditional"],
      ["Русский", "ru"],
      ["יידיש", "yi"],
      ["বাংলা", "bn"],
      ["한국어", "ko"],
      ["Kreyòl Ayisyen", "ht"],
      ["Italiano", "it"],
      ["العربية", "ar"],
      ["Polski", "pl"],
      ["Français", "fr"],
      ["اردو", "ur"]
    ];
  }
  get screenSize() {
    const t = window.innerWidth;
    return t < 480 ? "xs" : t < 768 ? "sm" : t < 1024 ? "md" : t < 1280 ? "lg" : "xl";
  }
  _getNysLogo() {
    return new DOMParser().parseFromString(l9, "image/svg+xml").documentElement;
  }
  _toggleTrustbar() {
    this.trustbarVisible = !this.trustbarVisible, this.trustbarVisible && (this.languageVisible = !1, this.searchDropdownVisible = !1);
  }
  _toggleLanguageList() {
    this.languageVisible = !this.languageVisible, this.languageVisible && (this.trustbarVisible = !1, this.searchDropdownVisible = !1);
  }
  _toggleSearchDropdown() {
    this.searchDropdownVisible = !this.searchDropdownVisible, this.searchDropdownVisible && (this.trustbarVisible = !1, this.languageVisible = !1);
  }
  _handleSearchFocus() {
    this.isSearchFocused = !0, this.trustbarVisible = !1, this.languageVisible = !1;
  }
  _handleSearchBlur() {
    this.isSearchFocused = !1;
  }
  _handleSearchKeyup(t) {
    if (t.key === "Escape" && (this._handleSearchBlur(), t.target.blur()), t.key === "Enter") {
      const e = t.target.value.trim();
      e !== "" && (window.location.href = `https://search.its.ny.gov/search/search.html?btnG=Search&client=default_frontend&output=xml_no_dtd&proxystylesheet=default_frontend&ulang=en&sort=date:D:L:d1&entqr=3&entqrm=0&wc=200&wc_mc=1&oe=UTF-8&ie=UTF-8&ud=1&site=default_collection&q=${e}+inurl:${window.location.hostname}&site=default_collection`);
    }
  }
  _updateScreenSize() {
    this.requestUpdate();
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("resize", this._updateScreenSize.bind(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback(), window.removeEventListener("resize", this._updateScreenSize.bind(this));
  }
  render() {
    return c`
      ${this.screenSize === "xs" || this.screenSize === "sm" ? c` <div class="nys-unavheader__toptrustbar">
              <div class="nys-unavheader__officialmessage">
                <label id="nys-unavheader__official"
                  >An official website of New York State</label
                >
                <nys-button
                  id="nys-unavheader__know"
                  label="Here's how you know"
                  variant="ghost"
                  size="sm"
                  suffixIcon="slotted"
                  @click="${this._toggleTrustbar}"
                >
                  <nys-icon
                    slot="suffix-icon"
                    size="12"
                    name=${this.trustbarVisible ? "chevron_up" : "chevron_down"}
                  ></nys-icon>
                </nys-button>
              </div>
              ${this.trustbarVisible ? c`<nys-button
                    id="nys-unavheader__closetrustbar"
                    class="nys-unavheader__iconbutton"
                    variant="ghost"
                    prefixIcon="close"
                    size="sm"
                    @click="${this._toggleTrustbar}"
                  ></nys-button>` : null}
            </div>
            <div
              class="nys-unavheader__trustbar ${this.trustbarVisible ? "show" : "hide"}"
            >
              <div class="nys-unavheader__trustcontent">
                <div class="nys-unavheader__trustcontentmessage">
                  <nys-icon size="3xl" name="account_balance_filled"></nys-icon>
                  <label><b>Official websites use ny.gov</b></label>
                  <label
                    >A <b>ny.gov</b> website belongs to an official New York
                    State government organization.</label
                  >
                </div>
                <div class="nys-unavheader__trustcontentmessage">
                  <nys-icon size="3xl" name="lock_filled"></nys-icon>
                  <label><b>Secure ny.gov websites use HTTPS</b></label>
                  <label
                    >A <b>lock icon</b> or <b>https://</b> means you've safely
                    connected to the ny.gov website. Share sensitive information
                    only on official, secure websites.</label
                  >
                </div>
              </div>
            </div>` : null}
      <header class="nys-unavheader" id="nys-universal-navigation">
        <div class="nys-unavheader__maincontent">
          <div class="nys-unavheader__left">
            <a
              href="https://ny.gov"
              target="_blank"
              id="nys-unavheader__logolink"
              aria-label="logo of New York State"
            >
              <div class="nys-unavheader__logo">${this._getNysLogo()}</div></a
            >
            ${this.screenSize === "md" || this.screenSize === "lg" || this.screenSize === "xl" ? c` <div class="nys-unavheader__officialmessage">
                  <label id="nys-unavheader__official"
                    >An official website of New York State</label
                  >
                  <nys-button
                    id="nys-unavheader__know"
                    label="Here's how you know"
                    variant="ghost"
                    size="sm"
                    suffixIcon="slotted"
                    @click="${this._toggleTrustbar}"
                  >
                    <nys-icon
                      slot="suffix-icon"
                      size="12"
                      name="${this.trustbarVisible ? "chevron_up" : "chevron_down"}"
                    ></nys-icon>
                  </nys-button>
                </div>` : null}
          </div>
          <div class="nys-unavheader__right">
            ${!this.isSearchFocused && !this.hideTranslate ? c`<div class="nys-unavheader__translatewrapper">
                  ${this.screenSize === "xs" || this.screenSize === "sm" || this.screenSize === "md" ? c`<nys-button
                        variant="ghost"
                        prefixIcon="language"
                        id="nys-unavheader__translate"
                        class="nys-unavheader__iconbutton"
                        @click="${this._toggleLanguageList}"
                      ></nys-button>` : c`<nys-button
                        variant="ghost"
                        label="Translate"
                        prefixIcon="language_filled"
                        suffixIcon=${this.languageVisible ? "chevron_up" : "chevron_down"}
                        id="nys-unavheader__translate"
                        @click="${this._toggleLanguageList}"
                      ></nys-button>`}
                  <div
                    class="nys-unavheader__languagelist ${this.languageVisible ? "show" : "hide"}"
                  >
                    ${this.languages.map(
      ([t, e]) => c`<a
                          class="nys-unavheader__languagelink"
                          target="_self"
                          href="https://${e ? e + "." : ""}${window.location.hostname}"
                          >${t}</a
                        >`
    )}
                  </div>
                </div>` : null}
            ${this.hideSearch ? null : this.screenSize === "xs" || this.screenSize === "sm" || this.screenSize === "md" ? c`<nys-button
                    variant="ghost"
                    prefixIcon="search"
                    id="nys-unavheader__searchbutton"
                    class="nys-unavheader__iconbutton"
                    @click="${this._toggleSearchDropdown}"
                  ></nys-button>` : c`<nys-textinput
                    id="nys-unavheader__search"
                    placeholder="Search"
                    type="search"
                    @focus="${this._handleSearchFocus}"
                    @blur="${this._handleSearchBlur}"
                    @keyup="${this._handleSearchKeyup}"
                  ></nys-textinput>`}
          </div>
        </div>
      </header>
      ${this.screenSize === "md" || this.screenSize === "lg" || this.screenSize === "xl" ? c` <div
            class="nys-unavheader__trustbar ${this.trustbarVisible ? "show" : "hide"}"
          >
            <div class="nys-unavheader__trustcontent">
              <div class="nys-unavheader__trustcontentmessage">
                <nys-icon size="3xl" name="account_balance_filled"></nys-icon>
                <label><b>Official websites use ny.gov</b></label>
                <label
                  >A <b>ny.gov</b> website belongs to an official New York State
                  government organization.</label
                >
              </div>
              <div class="nys-unavheader__trustcontentmessage">
                <nys-icon size="3xl" name="lock_filled"></nys-icon>
                <label><b>Secure ny.gov websites use HTTPS</b></label>
                <label
                  >A <b>lock icon</b> or <b>https://</b> means you've safely
                  connected to the ny.gov website. Share sensitive information
                  only on official, secure websites.</label
                >
              </div>
              <nys-button
                id="nys-unavheader__closetrustbar"
                class="nys-unavheader__iconbutton"
                variant="ghost"
                prefixIcon="close"
                size="sm"
                @click="${this._toggleTrustbar}"
              ></nys-button>
            </div>
          </div>` : null}
      <div
        class="nys-unavheader__searchdropdown ${this.searchDropdownVisible && (this.screenSize === "xs" || this.screenSize === "sm" || this.screenSize === "md") ? "show" : "hide"}"
      >
        <nys-textinput
          id="nys-unavheader__search"
          placeholder="Search"
          type="search"
          @focus="${this._handleSearchFocus}"
          @blur="${this._handleSearchBlur}"
          @keyup="${this._handleSearchKeyup}"
        ></nys-textinput>
      </div>
    `;
  }
};
C7.styles = i9;
let F = C7;
E1([
  a({ type: Boolean })
], F.prototype, "trustbarVisible", 2);
E1([
  a({ type: Boolean })
], F.prototype, "searchDropdownVisible", 2);
E1([
  a({ type: Boolean })
], F.prototype, "languageVisible", 2);
E1([
  a({ type: Boolean })
], F.prototype, "isSearchFocused", 2);
E1([
  a({ type: Boolean })
], F.prototype, "hideTranslate", 2);
E1([
  a({ type: Boolean })
], F.prototype, "hideSearch", 2);
E1([
  a({ type: String, reflect: !0 })
], F.prototype, "screenSize", 1);
customElements.get("nys-unavheader") || customElements.define("nys-unavheader", F);
const N4 = v`
  :host {
    /* Global Header Styles */
    --_nys-globalheader-text-color: var(
      --nys-color-text-reverse,
      var(--nys-color-white, #ffffff)
    );
    --_nys-globalheader-link-color: var(
      --nys-color-link-reverse-neutral,
      var(--nys-color-white, #fff)
    );
    --_nys-globalheader-background: var(
      --nys-color-theme,
      var(--nys-color-state-blue-700, #154973)
    );
    --_nys-globalheader-main-gap-spacing: var(--nys-space-300, 24px);
    --_nys-globalheader-padding: var(--nys-space-250, 20px);
    --_nys-globalheader-gutter: var(--nys-gutter-sm, 20px);
    --_nys-globalheader-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-globalheader-lineheight: normal;
    --_nys-globalheader-letterspacing: normal;
    --_nys-globalheader-font-weight-bold: var(--nys-font-weight-bold, 700);
    --_nys-globalheader-font-weight-semibold: var(
      --nys-font-weight-semibold,
      600
    );
    --_nys-globalheader-content-max-width: var(--nys-max-content-width, 1280px);

    /* Agency and App Name Styling */
    --_nys-globalheader-name-gap-spacing: var(--nys-space-100, 8px);
    --_nys-globalheader-font-size-main-name: var(
      --nys-font-size-agency-xl,
      var(--nys-font-size-2xl, 22px)
    );
    --_nys-globalheader-font-size-sub-name: var(
      --nys-font-size-agency-md,
      var(--nys-font-size-md, 16px)
    );
    --_nys-globalheader-font-family-agency: var(
      --nys-font-family-agency,
      "D Sari",
      Arial,
      sans-serif
    );

    /* Menu Content Styling */
    --_nys-globalfooter-link-gap-spacing-row: var(--nys-space-300, 24px);
    --_nys-globalfooter-link-gap-spacing-column: var(--nys-space-400, 32px);
    --_nys-globalheader-link-lineheight: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-globalheader-link-letterspacing: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-globalheader-link-weight-decoration: var(--nys-size-2px, 2px);

    /* Mobile Menu */
    --_nys-globalheader-mobile-btn-font-size: var(--nys-type-size-ui-xs, 12px);
    --_nys-globalheader-mobile-btn-lineheight: var(
      --nys-font-lineheight-ui-xs,
      20px
    );
    --_nys-globalheader-mobile-btn-letterspacing: var(
      --nys-font-letterspacing-ui-xs,
      0.057px
    );
    --_nys-globalheader-mobile-li-border-color: var(
      --nys-color-theme-mid,
      #457aa5
    );
    --_nys-globalheader-mobile-li-hover-bg: var(
      --nys-color-theme-strong,
      #0e324f
    );
    --_nys-globalheader-mobile-li-active-bg: var(
      --nys-color-theme-stronger,
      #081b2b
    );
  }

  /* Slotted content (menu links) basic resets */
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--_nys-globalheader-link-color);
    text-decoration: none;
    font-family: var(--_nys-globalheader-font-family);
    font-size: var(--_nys-globalheader-font-size-links);
    font-style: normal;
    font-weight: 400;
    line-height: var(--_nys-globalheader-link-lineheight);
    letter-spacing: var(--_nys-globalheader-link-letterspacing);
  }

  .nys-globalheader {
    display: flex;
    justify-content: center;
    padding: var(--_nys-globalheader-padding) var(--_nys-globalheader-gutter);
    background-color: var(--_nys-globalheader-background);
    color: var(--_nys-globalheader-text-color);
    width: 100%;
    box-sizing: border-box;
  }

  /* Main container */
  .nys-globalheader__main-container {
    display: flex;
    gap: var(--_nys-globalheader-main-gap-spacing);
    max-width: var(--_nys-globalheader-content-max-width);
    width: 100%;
  }

  /* Left-hand side Agency and App names */
  .nys-globalheader__name-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: var(--_nys-globalheader-name-gap-spacing);
  }
  .nys-globalheader__name {
    margin: 0;
    color: var(--_nys-globalheader-text-color);
    font-family: var(--_nys-globalheader-font-family-agency);
    font-size: var(--_nys-globalheader-font-size-main-name);
    font-style: normal;
    font-weight: var(--_nys-globalheader-font-weight-semibold);
    line-height: var(--_nys-globalheader-lineheight);
    letter-spacing: var(--_nys-globalheader-letterspacing);
    text-wrap: wrap;
  }

  .nys-globalheader__agencyName {
    font-size: var(--_nys-globalheader-font-size-sub-name);
  }

  /* Set the font size for the agency to be the main font if appName is not defined */
  .nys-globalheader__agencyName.main {
    font-size: var(--_nys-globalheader-font-size-main-name);
  }

  /* Slotted content */
  .nys-globalheader__content {
    display: none;
    font-family: var(--_nys-globalheader-font-family);
  }

  .nys-globalheader__content ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }

  .nys-globalheader__content ul a:hover {
    text-decoration: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: 7%;
    text-underline-offset: auto;
    text-underline-position: from-font;
  }

  .nys-globalheader__content ul a:active {
    text-decoration-thickness: var(--_nys-globalheader-link-weight-decoration);
  }

  /* Mobile Menu */
  .nys-globalheader__content-mobile {
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--_nys-globalheader-background);
    width: fit-content;
  }
  .nys-globalheader__content-mobile.close {
    display: none;
  }
  .nys-globalheader__content-mobile ul {
    display: flex;
    flex-direction: column;
  }
  .nys-globalheader__content-mobile ul li:first-child a {
    border-top: 1px solid var(--_nys-globalheader-text-color);
  }
  .nys-globalheader__content-mobile ul li a {
    display: flex;
    padding: 24px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-bottom: 1px solid var(--_nys-globalheader-mobile-li-border-color);
  }
  .nys-globalheader__content-mobile ul li a:hover {
    background: var(--_nys-globalheader-mobile-li-hover-bg);
  }
  .nys-globalheader__content-mobile ul li a:active {
    background: var(--_nys-globalheader-mobile-li-active-bg);
  }
  .nys-globalheader__name-container-link {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  /* Mobile Menu (OPEN/CLOSE Button Container) */
  .nys-globalheader__button-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nys-globalheader__mobile-menu-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
    width: 50px;
    height: 50px;
    background-color: var(--_nys-globalheader-background);
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    color: var(--_nys-globalheader-text-color);
  }
  .nys-globalheader__mobile-menu-button-text {
    font-size: var(--_nys-globalheader-mobile-btn-font-size);
    line-height: var(--_nys-globalheader-mobile-btn-lineheight);
    letter-spacing: var(--_nys-globalheader-mobile-btn-letterspacing);
  }

  /* Breakpoints using NYSDS Guidelines (Menu Links) */
  @media (min-width: 768px) {
    /* Tablet (MD - Above 768px) */
    .nys-globalheader__content {
      display: flex;
    }
    .nys-globalheader__content ul {
      flex-direction: row;
      gap: var(--_nys-globalfooter-link-gap-spacing-row)
        var(--_nys-globalfooter-link-gap-spacing-column);
    }
    .nys-globalheader__content-mobile,
    .nys-globalheader__button-container {
      display: none;
    }
    :host {
      --_nys-globalheader-main-gap-spacing: var(--nys-space-500, 40px);
      --_nys-globalheader-gutter: var(--nys-gutter-lg, 32px);
    }
  }

  @media (min-width: 1280px) {
    /* Large Desktop (XL - Above 1280px) */
    :host {
      --_nys-globalheader-gutter: var(--nys-gutter-xl, 64px);
    }
  }
`;
var j4 = Object.defineProperty, R5 = (s, t, e, o) => {
  for (var r = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = i(t, e, r) || r);
  return r && j4(t, e, r), r;
};
const c7 = class c7 extends p {
  constructor() {
    super(...arguments), this.appName = "", this.agencyName = "", this.homepageLink = "", this.slotHasContent = !0, this.isMobileMenuOpen = !1;
  }
  /**************** Lifecycle Methods ****************/
  firstUpdated() {
    var e;
    const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("slot");
    t == null || t.addEventListener("slotchange", () => this._handleSlotChange()), this._handleSlotChange();
  }
  /******************** Functions ********************/
  // Gets called when the slot content changes and directly appends the slotted elements into the shadow DOM
  _handleSlotChange() {
    var n, i, l;
    const t = (n = this.shadowRoot) == null ? void 0 : n.querySelector("slot");
    if (!t) return;
    const e = t == null ? void 0 : t.assignedNodes({ flatten: !0 }).filter((C) => C.nodeType === Node.ELEMENT_NODE);
    this.slotHasContent = e.length > 0;
    const o = (i = this.shadowRoot) == null ? void 0 : i.querySelector(
      ".nys-globalheader__content"
    ), r = (l = this.shadowRoot) == null ? void 0 : l.querySelector(
      ".nys-globalheader__content-mobile"
    );
    o && r && (o.innerHTML = "", r.innerHTML = "", e.forEach((C) => {
      if (C.nodeType === Node.ELEMENT_NODE) {
        const u = C.cloneNode(!0), d = C.cloneNode(!0);
        ["script", "iframe", "object", "embed"].forEach((_) => {
          u.querySelectorAll(_).forEach((L) => L.remove());
        }), o.appendChild(u), r.appendChild(d), C.remove();
      }
    }));
  }
  _toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
  render() {
    var t, e, o, r, n, i, l, C;
    return c`
      <header class="nys-globalheader">
        <div class="nys-globalheader__main-container">
          ${this.slotHasContent ? c` <div class="nys-globalheader__button-container">
                <button
                  class="nys-globalheader__mobile-menu-button"
                  @click="${this._toggleMobileMenu}"
                >
                  <nys-icon
                    name="${this.isMobileMenuOpen ? "close" : "menu"}"
                    size="32"
                    label="${this.isMobileMenuOpen ? "close" : "menu"} icon"
                  ></nys-icon>
                  <span class="nys-globalheader__mobile-menu-button-text"
                    >${this.isMobileMenuOpen ? "CLOSE" : "MENU"}</span
                  >
                </button>
              </div>` : ""}
          ${(t = this.homepageLink) != null && t.trim() ? c`<a
                class="nys-globalheader__name-container-link"
                href=${(n = this.homepageLink) == null ? void 0 : n.trim()}
              >
                <div class="nys-globalheader__name-container">
                  ${((i = this.appName) == null ? void 0 : i.trim().length) > 0 ? c`<div
                        class="nys-globalheader__appName nys-globalheader__name"
                      >
                        ${this.appName}
                      </div> ` : ""}
                  ${((l = this.agencyName) == null ? void 0 : l.trim().length) > 0 ? c`<div
                        class="nys-globalheader__agencyName nys-globalheader__name ${((C = this.appName) == null ? void 0 : C.trim().length) > 0 ? "" : "main"}"
                      >
                        ${this.agencyName}
                      </div> ` : ""}
                </div>
              </a>` : c`
                <div class="nys-globalheader__name-container">
                  ${((e = this.appName) == null ? void 0 : e.trim().length) > 0 ? c`<div
                        class="nys-globalheader__appName nys-globalheader__name"
                      >
                        ${this.appName}
                      </div> ` : ""}
                  ${((o = this.agencyName) == null ? void 0 : o.trim().length) > 0 ? c`<div
                        class="nys-globalheader__agencyName nys-globalheader__name ${((r = this.appName) == null ? void 0 : r.trim().length) > 0 ? "" : "main"}"
                      >
                        ${this.agencyName}
                      </div> ` : ""}
                </div>
              `}
          ${this.slotHasContent ? c`<div class="nys-globalheader__content">
                <slot
                  style="display: hidden"
                  @slotchange="${this._handleSlotChange}"
                ></slot>
              </div>` : ""}
        </div>
      </header>
      <div
        class="nys-globalheader__content-mobile ${this.isMobileMenuOpen ? "" : "close"}"
      ></div>
    `;
  }
};
c7.styles = N4;
let p1 = c7;
R5([
  a({ type: String })
], p1.prototype, "appName");
R5([
  a({ type: String })
], p1.prototype, "agencyName");
R5([
  a({ type: String })
], p1.prototype, "homepageLink");
R5([
  x1()
], p1.prototype, "slotHasContent");
R5([
  x1()
], p1.prototype, "isMobileMenuOpen");
customElements.get("nys-globalheader") || customElements.define("nys-globalheader", p1);
const F4 = v`
  :host {
    /* Global Footer Styles */
    --_nys-globalfooter-text-color: var(
      --nys-color-text,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-globalfooter-link-color: var(
      --nys-color-link-neutral,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-globalfooter-background: var(
      --nys-color-theme-weaker,
      var(--nys-color-state-blue-50, #eff6fb)
    );
    --_nys-globalfooter-gap-spacing: var(--nys-space-300, 24px);
    --_nys-globalfooter-padding: var(--nys-space-400, 32px);
    --_nys-globalfooter-gutter: var(--nys-gutter-sm, 20px);
    --_nys-globalfooter-font-size: var(
      --nys-font-size-agency-xl,
      var(--nys-font-size-2xl, 22px)
    );
    --_nys-globalfooter-font-size-links: var(
      --nys-font-size-body-md,
      var(--nys-font-size-md, 16px)
    );
    --_nys-globalfooter-lineheight: normal;
    --_nys-globalfooter-font-weight-semibold: var(
      --nys-font-weight-semibold,
      600
    );
    --_nys-globalfooter-content-max-width: var(--nys-max-content-width, 1280px);

    /* Agency Name */
    --_nys-globalfooter-font-family-agency: var(
      --nys-font-family-agency,
      "D Sari",
      Arial,
      sans-serif
    );

    /* Links */
    --_nys-globalfooter-link-gap-spacing-row: var(--nys-space-400, 32px);
    --_nys-globalfooter-link-gap-spacing-column: var(--nys-space-400, 32px);
    --_nys-globalfooter-lineheight-links: var(
      --nys-font-lineheight-ui-md,
      24px
    );
    --_nys-globalfooter-link-letterspacing: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-globalfooter-link-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-globalfooter-link-weight-decoration: var(--nys-size-2px, 2px);
  }

  .nys-globalfooter {
    display: flex;
    padding: var(--_nys-globalfooter-padding) var(--_nys-globalfooter-gutter);
    justify-content: center;
    background-color: var(--_nys-globalfooter-background);
    color: var(--_nys-globalfooter-text-color);
    width: 100%;
    box-sizing: border-box;
  }

  /* Main Container */
  .nys-globalfooter__main-container {
    display: flex;
    flex-direction: column;
    gap: var(--_nys-globalfooter-gap-spacing);
    width: 100%;
    max-width: var(--_nys-globalfooter-content-max-width);
  }

  /* The Agency Name */
  .nys-globalfooter__name {
    margin: 0;
    color: var(--_nys-globalfooter-text-color);
    font-family: var(--_nys-globalfooter-font-family-agency);
    font-size: var(--_nys-globalfooter-font-size);
    font-style: normal;
    font-weight: var(--_nys-globalfooter-font-weight-semibold);
    line-height: var(--_nys-globalfooter-lineheight);
    letter-spacing: normal;
  }

  /* Slotted content (menu links) basic resets */
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--_nys-globalfooter-link-color);
    text-decoration: none;
    font-family: var(--_nys-globalfooter-link-font-family);
    font-size: var(--_nys-globalfooter-font-size-links);
    font-style: normal;
    font-weight: var(--_nys-globalfooter-font-weight-semibold);
    line-height: var(--_nys-globalfooter-lineheight-links);
    letter-spacing: var(--_nys-globalfooter-link-letterspacing);
  }

  a:hover {
    text-decoration: underline;
  }
  a:active {
    text-decoration-thickness: var(--_nys-globalfooter-link-weight-decoration);
  }

  /* Specific layout for menu links (grouped or singular list of menus) */
  .nys-globalfooter__content {
    width: 100%;
  }

  .nys-globalfooter__content ul {
    display: flex;
    gap: var(--_nys-globalfooter-link-gap-spacing-row)
      var(--_nys-globalfooter-link-gap-spacing-column);
    flex-wrap: wrap;
  }

  /* Breakpoints using NYSDS Guidelines (Menu Links) */
  @media (min-width: 768px) {
    /* Tablet (MD - Above 768px) */
    :host {
      --_nys-globalfooter-gutter: var(--nys-gutter-lg, 32px);
      --_nys-globalfooter-link-gap-spacing-column: var(--nys-space-600, 48px);
    }
  }

  @media (min-width: 1280px) {
    /* Large Desktop (XL - Above 1280px) */
    :host {
      --_nys-globalfooter-gutter: var(--nys-gutter-xl, 64px);
    }
  }
`;
var G4 = Object.defineProperty, l7 = (s, t, e, o) => {
  for (var r = void 0, n = s.length - 1, i; n >= 0; n--)
    (i = s[n]) && (r = i(t, e, r) || r);
  return r && G4(t, e, r), r;
};
const h7 = class h7 extends p {
  constructor() {
    super(...arguments), this.agencyName = "", this.homepageLink = "", this.slotHasContent = !0;
  }
  /**************** Lifecycle Methods ****************/
  firstUpdated() {
    var e;
    const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector("slot");
    t == null || t.addEventListener("slotchange", () => this._handleSlotChange()), this._handleSlotChange();
  }
  /******************** Functions ********************/
  // Gets called when the slot content changes and directly appends the slotted elements into the shadow DOM
  _handleSlotChange() {
    var n, i;
    const t = (n = this.shadowRoot) == null ? void 0 : n.querySelector("slot");
    if (!t) return;
    const e = t == null ? void 0 : t.assignedNodes({ flatten: !0 }).filter((l) => l.nodeType === Node.ELEMENT_NODE);
    this.slotHasContent = e.length > 0;
    const o = (i = this.shadowRoot) == null ? void 0 : i.querySelector(
      ".nys-globalfooter__content"
    ), r = e == null ? void 0 : e.some(
      (l) => l.tagName === "H4"
    );
    o && (o.classList.toggle("columns", r), o.classList.toggle("small", !r), o.innerHTML = "", e.forEach((l) => {
      if (l.nodeType === Node.ELEMENT_NODE) {
        const C = l.cloneNode(!0);
        ["script", "iframe", "object", "embed"].forEach((d) => {
          C.querySelectorAll(d).forEach((h) => h.remove());
        }), o.appendChild(C), l.remove();
      }
    }));
  }
  render() {
    var t, e;
    return c`
      <footer class="nys-globalfooter">
        <div class="nys-globalfooter__main-container">
          ${(t = this.homepageLink) != null && t.trim() ? c`<a href=${(e = this.homepageLink) == null ? void 0 : e.trim()}>
                <p class="nys-globalfooter__name">${this.agencyName}</p>
              </a>` : c`<p class="nys-globalfooter__name">${this.agencyName}</p>`}
          ${this.slotHasContent ? c`<div class="nys-globalfooter__content">
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
h7.styles = F4;
let F1 = h7;
l7([
  a({ type: String })
], F1.prototype, "agencyName");
l7([
  a({ type: String })
], F1.prototype, "homepageLink");
l7([
  x1()
], F1.prototype, "slotHasContent");
customElements.get("nys-globalfooter") || customElements.define("nys-globalfooter", F1);
const W4 = v`
  :host {
    /* Global Footer Styles */
    --_nys-unavfooter-link-color: var(
      --nys-color-link-reverse-neutral,
      var(--nys-color-white, #ffffff)
    );
    --_nys-unavfooter-background: var(
      --nys-color-surface-reverse,
      var(--nys-color-neutral-900, #1b1b1b)
    );
    --_nys-unavfooter-gap-spacing: var(--nys-space-200, 16px);
    --_nys-unavfooter-padding: var(--nys-space-250, 20px);
    --_nys-unavfooter-gutter: var(--nys-gutter-sm, 20px);
    --_nys-unavfooter-font-size: var(
      --nys-font-size-agency-xl,
      var(--nys-font-size-2xl, 22px)
    );
    --_nys-unavfooter-font-size-links: var(
      --nys-font-size-body-md,
      var(--nys-font-size-md, 16px)
    );
    --_nys-unavfooter-font-weight-semibold: var(
      --nys-font-weight-semibold,
      600
    );
    --_nys-unavfooter-content-max-width: var(--nys-max-content-width, 1280px);

    /* Links */
    --_nys-unavfooter-link-gap-spacing-row: var(--nys-space-250, 20px);
    --_nys-unavfooter-link-gap-spacing-column: var(--nys-space-600, 48px);
    --_nys-unavfooter-link-lineheight: var(--nys-font-lineheight-ui-md, 24px);
    --_nys-unavfooter-link-letterspacing: var(
      --nys-font-letterspacing-ui-md,
      var(--nys-font-letterspacing-400, 0.044px)
    );
    --_nys-unavfooter-font-family: var(
      --nys-font-family-ui,
      var(
        --nys-font-family-sans,
        "Proxima Nova",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        sans-serif
      )
    );
    --_nys-unavfooter-link-weight-decoration: var(--nys-size-2px, 2px);
  }

  /* Slotted content (menu links) basic resets */
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--_nys-unavfooter-link-color);
    text-decoration: none;
    font-family: var(--_nys-unavfooter-font-family);
    font-size: var(--_nys-unavfooter-font-size-links);
    font-style: normal;
    font-weight: var(--_nys-unavfooter-font-weight-semibold);
    line-height: var(--_nys-unavfooter-link-lineheight);
    letter-spacing: var(--_nys-unavfooter-link-letterspacing);
    text-decoration-style: solid;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: 7%;
    text-underline-offset: auto;
    text-underline-position: from-font;
  }
  a:hover {
    text-decoration-line: underline;
  }
  a:active {
    text-decoration-thickness: var(--_nys-unavfooter-link-weight-decoration);
  }

  .nys-unavfooter {
    display: flex;
    flex-direction: column;
    gap: var(--_nys-unavfooter-gap-spacing);
    align-items: flex-start;
    background-color: var(--_nys-unavfooter-background);
    width: 100%;
    box-sizing: border-box;
  }

  /* Main container */
  .nys-unavfooter__main-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  /* Top level container for the footer (NYS Logo and Menu links) */
  .nys-unavfooter__container_menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: var(--_nys-unavfooter-content-max-width);
    padding: var(--_nys-unavfooter-padding) var(--_nys-unavfooter-gutter);
    gap: var(--_nys-unavfooter-gap-spacing);
    box-sizing: border-box;
  }

  .nys-unavfooter__logo a {
    display: flex;
    align-items: center;
    line-height: 0;
  }

  /* Specific layout for menu links (grouped or singular list of menus) */
  .nys-unavfooter__content {
    display: flex;
    align-items: center;
  }

  .nys-unavfooter__content ul {
    display: flex;
    justify-content: center;
    gap: var(--_nys-unavfooter-link-gap-spacing-row)
      var(--_nys-unavfooter-link-gap-spacing-column);
    flex-wrap: wrap;
  }

  /* Breakpoints using NYSDS Grid Guidelines (Menu Links) */
  @media (min-width: 768px) {
    /* Tablet (MD - Above 768px) */
    .nys-unavfooter__container_menu {
      flex-direction: row;
    }
    .nys-unavfooter__content ul {
      justify-content: flex-start;
    }
    :host {
      --_nys-unavfooter-gutter: var(--nys-gutter-lg, 32px);
      --_nys-unavfooter-link-gap-spacing-column: var(--nys-space-600, 48px);
      --_nys-unavfooter-gap-spacing: var(--nys-space-800, 64px);
    }
  }

  @media (min-width: 1280px) {
    /* Large Desktop (XL - Above 1280px) */
    :host {
      --_nys-unavfooter-gutter: var(--nys-gutter-xl, 64px);
    }
  }
`, Y4 = `<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
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
</svg>`, d7 = class d7 extends p {
  /**************** Functions ****************/
  _getNysLogo() {
    return new DOMParser().parseFromString(Y4, "image/svg+xml").documentElement;
  }
  render() {
    return c`
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
d7.styles = W4;
let E2 = d7;
customElements.get("nys-unavfooter") || customElements.define("nys-unavfooter", E2);
export {
  d8 as NysAlert,
  g8 as NysAvatar,
  m8 as NysButton,
  b6 as NysCheckbox,
  g6 as NysCheckboxgroup,
  I1 as NysErrorMessage,
  F1 as NysGlobalFooter,
  p1 as NysGlobalHeader,
  V6 as NysIcon,
  b1 as NysLabel,
  V1 as NysOption,
  O6 as NysRadiobutton,
  P6 as NysRadiogroup,
  N6 as NysSelect,
  Y6 as NysTextarea,
  t9 as NysTextinput,
  n9 as NysToggle,
  E2 as NysUnavFooter,
  F as NysUnavHeader
};
//# sourceMappingURL=nysds.es.js.map
