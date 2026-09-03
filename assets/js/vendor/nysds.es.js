import { LitElement as I, unsafeCSS as C, html as y, nothing as Wn } from "lit";
import { property as a, state as $, query as to } from "lit/decorators.js";
import { ifDefined as v } from "lit/directives/if-defined.js";
/*!
   * New York State Design System v1.21.0
   * Description: A design system for New York State's digital products.
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
 */
/*!
  * New York State Design System v1.21.0
  * Description: A design system for New York State's digital products.
  * Repository: https://github.com/its-hcd/nysds
  * License: MIT
*/
var ac = 0;
function lc(r) {
  return `${r}-${Date.now()}-${ac++}`;
}
function cc(r) {
  return r.filter((e) => !!e);
}
var dc = {
  labelledby: "ariaLabelledByElements",
  describedby: "ariaDescribedByElements"
}, hc = {
  labelledby: "aria-label",
  describedby: "aria-description"
};
function fr(r, e, t) {
  const n = cc(t), o = dc[e], s = hc[e], i = r;
  if (o && o in r && (i[o] = n.length ? n : null), !s) return;
  const d = n.map((p) => p.textContent?.trim() ?? "").filter(Boolean).join(" ");
  d ? r.setAttribute(s, d) : r.removeAttribute(s);
}
var hl = (r) => {
  class e extends r {
    get idPrefix() {
      return this.localName || "nys-element";
    }
    ensureId() {
      this.id || (this.id = lc(this.idPrefix));
    }
    connectedCallback() {
      super.connectedCallback(), this.ensureId();
    }
  }
  return e;
}, D = /* @__PURE__ */ hl(I), ul = (r) => {
  class e extends hl(r) {
    constructor(...n) {
      super(...n), this.__internals = null;
    }
    get internals() {
      if (this.__internals) return this.__internals;
      if (typeof this.attachInternals == "function") try {
        this.__internals = this.attachInternals();
      } catch {
        this.__internals = null;
      }
      return this.__internals;
    }
    get defaultRole() {
      return null;
    }
    setHostAria(n, o) {
      const s = this.internals;
      if (s && n in s) {
        s[n] = o;
        return;
      }
      const i = uc(n);
      o === null ? this.removeAttribute(i) : this.setAttribute(i, o);
    }
    reflectDefaultSemantics() {
      const n = this.defaultRole;
      n && this.setHostAria("role", n);
    }
    connectedCallback() {
      super.connectedCallback(), this.reflectDefaultSemantics();
    }
  }
  return e;
};
function uc(r) {
  if (r === "role") return "role";
  const e = r.replace(/^aria/, "");
  return "aria-" + e.charAt(0).toLowerCase() + e.slice(1);
}
var yc = /* @__PURE__ */ ul(I), pc = (r) => {
  const t = class t extends ul(r) {
    setFormValue(o) {
      this.internals?.setFormValue(o ?? null);
    }
    setValidityFromState(o, s, i) {
      const d = this.internals;
      if (!d) return;
      const p = Object.values(o).some(Boolean);
      p ? d.setValidity(o, s ?? "Invalid value", i) : d.setValidity({}), this.setHostAria("ariaInvalid", p ? "true" : "false");
    }
    clearValidity() {
      this.internals?.setValidity({}), this.setHostAria("ariaInvalid", "false");
    }
    checkValidity() {
      return this.internals?.checkValidity() ?? !0;
    }
    reportValidity() {
      return this.internals?.reportValidity() ?? !0;
    }
    formResetCallback() {
      this.clearValidity();
    }
  };
  t.formAssociated = !0;
  let e = t;
  return e;
}, pt = /* @__PURE__ */ pc(I);
/*!
   * █▄  █  █   █  █▀▀▀█  █▀▀▄  █▀▀▀█
   * █ █ █  █▄▄▄█  ▀▀▀▄▄  █   █ ▀▀▀▄▄
   * █  ▀█    █    █▄▄▄█  █▄▄▀  █▄▄▄█
   *
   * Icon Component v1.21.0
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
var fc = 0;
function bc(r) {
  return `${r}-${Date.now()}-${fc++}`;
}
var vc = (r) => {
  class e extends r {
    get idPrefix() {
      return this.localName || "nys-element";
    }
    ensureId() {
      this.id || (this.id = bc(this.idPrefix));
    }
    connectedCallback() {
      super.connectedCallback(), this.ensureId();
    }
  }
  return e;
}, _c = /* @__PURE__ */ vc(I), hi = globalThis.__nysIconRegistry ??= /* @__PURE__ */ new Map(), es = globalThis.__nysIconWatchers ??= /* @__PURE__ */ new Map(), oa = null, ra = null;
async function gc() {
  return oa || (ra ??= import("./nys-icon.library-Bi_7DKlD-YSs5zqZy.js").then((r) => oa = r.default), ra);
}
function mc() {
  if (globalThis.__nysIconDefaultRegistered || hi.has("default")) {
    globalThis.__nysIconDefaultRegistered = !0;
    return;
  }
  globalThis.__nysIconDefaultRegistered = !0, hi.set("default", { resolver: async (r) => {
    if (!r) return;
    const e = (await gc())[r];
    return e ? {
      type: "svg",
      content: e
    } : void 0;
  } });
}
function xc(r) {
  return mc(), hi.get(r);
}
function sa(r, e) {
  es.has(r) || es.set(r, /* @__PURE__ */ new Set()), es.get(r).add(e);
}
function ia(r, e) {
  es.get(r)?.delete(e);
}
function aa(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
  return n;
}
function wc(r) {
  if (Array.isArray(r)) return r;
}
function kc(r, e) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var n, o, s, i, d = [], p = !0, b = !1;
    try {
      if (s = (t = t.call(r)).next, e !== 0) for (; !(p = (n = s.call(t)).done) && (d.push(n.value), d.length !== e); p = !0) ;
    } catch (m) {
      b = !0, o = m;
    } finally {
      try {
        if (!p && t.return != null && (i = t.return(), Object(i) !== i)) return;
      } finally {
        if (b) throw o;
      }
    }
    return d;
  }
}
function Cc() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $c(r, e) {
  return wc(r) || kc(r, e) || Sc(r, e) || Cc();
}
function Sc(r, e) {
  if (r) {
    if (typeof r == "string") return aa(r, e);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? aa(r, e) : void 0;
  }
}
var yl = Object.entries, la = Object.setPrototypeOf, Ec = Object.isFrozen, Ac = Object.getPrototypeOf, Lc = Object.getOwnPropertyDescriptor, ve = Object.freeze, me = Object.seal, wo = Object.create, pl = typeof Reflect < "u" && Reflect, ui = pl.apply, yi = pl.construct;
ve || (ve = function(r) {
  return r;
});
me || (me = function(r) {
  return r;
});
ui || (ui = function(r, e) {
  for (var t = arguments.length, n = new Array(t > 2 ? t - 2 : 0), o = 2; o < t; o++) n[o - 2] = arguments[o];
  return r.apply(e, n);
});
yi || (yi = function(r) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) t[n - 1] = arguments[n];
  return new r(...t);
});
var Un = ce(Array.prototype.forEach), Tc = ce(Array.prototype.lastIndexOf), ca = ce(Array.prototype.pop), rr = ce(Array.prototype.push), Dc = ce(Array.prototype.splice), Eo = Array.isArray, dr = ce(String.prototype.toLowerCase), Ys = ce(String.prototype.toString), da = ce(String.prototype.match), sr = ce(String.prototype.replace), ha = ce(String.prototype.indexOf), zc = ce(String.prototype.trim), Ic = ce(Number.prototype.toString), Rc = ce(Boolean.prototype.toString), ua = typeof BigInt > "u" ? null : ce(BigInt.prototype.toString), ya = typeof Symbol > "u" ? null : ce(Symbol.prototype.toString), Ye = ce(Object.prototype.hasOwnProperty), ir = ce(Object.prototype.toString), Re = ce(RegExp.prototype.test), qn = Oc(TypeError);
function ce(r) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
    return ui(r, e, n);
  };
}
function Oc(r) {
  return function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return yi(r, t);
  };
}
function L(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : dr;
  if (la && la(r, null), !Eo(e)) return r;
  let n = e.length;
  for (; n--; ) {
    let o = e[n];
    if (typeof o == "string") {
      const s = t(o);
      s !== o && (Ec(e) || (e[n] = s), o = s);
    }
    r[o] = !0;
  }
  return r;
}
function Mc(r) {
  for (let e = 0; e < r.length; e++) Ye(r, e) || (r[e] = null);
  return r;
}
function nt(r) {
  const e = wo(null);
  for (const n of yl(r)) {
    var t = $c(n, 2);
    const o = t[0], s = t[1];
    Ye(r, o) && (Eo(s) ? e[o] = Mc(s) : s && typeof s == "object" && s.constructor === Object ? e[o] = nt(s) : e[o] = s);
  }
  return e;
}
function Pc(r) {
  switch (typeof r) {
    case "string":
      return r;
    case "number":
      return Ic(r);
    case "boolean":
      return Rc(r);
    case "bigint":
      return ua ? ua(r) : "0";
    case "symbol":
      return ya ? ya(r) : "Symbol()";
    case "undefined":
      return ir(r);
    case "function":
    case "object": {
      if (r === null) return ir(r);
      const e = r, t = kt(e, "toString");
      if (typeof t == "function") {
        const n = t(e);
        return typeof n == "string" ? n : ir(n);
      }
      return ir(r);
    }
    default:
      return ir(r);
  }
}
function kt(r, e) {
  for (; r !== null; ) {
    const n = Lc(r, e);
    if (n) {
      if (n.get) return ce(n.get);
      if (typeof n.value == "function") return ce(n.value);
    }
    r = Ac(r);
  }
  function t() {
    return null;
  }
  return t;
}
function Nc(r) {
  try {
    return Re(r, ""), !0;
  } catch {
    return !1;
  }
}
var pa = ve([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]), Gs = ve([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "enterkeyhint",
  "exportparts",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "inputmode",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "part",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]), Ks = ve([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]), Bc = ve([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]), Zs = ve([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]), Fc = ve([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]), fa = ve(["#text"]), ba = ve([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "command",
  "commandfor",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "exportparts",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inert",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "part",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns"
]), Xs = ve([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "mask-type",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "pointer-events",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-orientation",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "vector-effect",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]), va = ve([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnalign",
  "columnlines",
  "columnspacing",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lquote",
  "lspace",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]), jr = ve([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), qc = me(/{{[\w\W]*|^[\w\W]*}}/g), Hc = me(/<%[\w\W]*|^[\w\W]*%>/g), Vc = me(/\${[\w\W]*/g), Uc = me(/^data-[\-\w.\u00B7-\uFFFF]+$/), jc = me(/^aria-[\-\w]+$/), _a = me(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), Wc = me(/^(?:\w+script|data):/i), Yc = me(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), Gc = me(/^html$/i), Kc = me(/^[a-z][.\w]*(-[.\w]+)+$/i), ga = me(/<[/\w!]/g), ma = me(/<[/\w]/g), Zc = me(/<\/no(script|embed|frames)/i), Xc = me(/\/>/i), et = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
}, fl = [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
], Qc = ve(L({}, fl)), Jc = (function() {
  const r = {};
  return Un(fl, (e) => {
    r[e] = me(new RegExp("</" + e + "(?=[\\t\\n\\f\\r />])", "i"));
  }), ve(r);
})(), ed = function() {
  return typeof window > "u" ? null : window;
}, td = function(r, e) {
  if (typeof r != "object" || typeof r.createPolicy != "function") return null;
  let t = null;
  const n = "data-tt-policy-suffix";
  e && e.hasAttribute(n) && (t = e.getAttribute(n));
  const o = "dompurify" + (t ? "#" + t : "");
  try {
    return r.createPolicy(o, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
}, xa = function() {
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
}, vn = function(r, e, t, n) {
  return Ye(r, e) && Eo(r[e]) ? L(n.base ? nt(n.base) : {}, r[e], n.transform) : t;
}, Qs = function(r, e, t) {
  const n = Ye(r, e) ? r[e] : void 0;
  return n && typeof n == "object" ? nt(n) : t();
};
function bl() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ed();
  const e = (c) => bl(c);
  if (e.version = "3.4.14", e.removed = [], !r || !r.document || r.document.nodeType !== et.document || !r.Element)
    return e.isSupported = !1, e;
  let t = r.document;
  const n = t, o = n.currentScript;
  r.DocumentFragment;
  const s = r.HTMLTemplateElement, i = r.Node, d = r.Element, p = r.NodeFilter;
  r.NamedNodeMap === void 0 && (r.NamedNodeMap || r.MozNamedAttrMap), r.HTMLFormElement;
  const b = r.DOMParser, m = r.trustedTypes, x = d.prototype, k = kt(x, "cloneNode"), R = kt(x, "remove"), pe = kt(x, "nextSibling"), fe = kt(x, "childNodes"), oe = kt(x, "parentNode"), ie = kt(x, "shadowRoot"), Qe = kt(x, "attributes"), re = i && i.prototype ? kt(i.prototype, "nodeType") : null, be = i && i.prototype ? kt(i.prototype, "nodeName") : null, Se = i && i.prototype ? kt(i.prototype, "ownerDocument") : null, Ee = function(c) {
    return re ? re(c) : c.nodeType;
  }, Ft = function(c) {
    return be ? be(c) : c.nodeName;
  };
  if (typeof s == "function") {
    const c = t.createElement("template");
    c.content && c.content.ownerDocument && (t = c.content.ownerDocument);
  }
  let ge, se = "", ft, io = !1, sn = 0;
  const an = function() {
    if (sn > 0) throw qn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, qt = function(c) {
    an(), sn++;
    try {
      return ge.createHTML(c);
    } finally {
      sn--;
    }
  }, ln = function(c) {
    an(), sn++;
    try {
      return ge.createScriptURL(c);
    } finally {
      sn--;
    }
  }, Is = function() {
    return io || (ft = td(m, o), io = !0), ft;
  }, ao = t, cn = ao.implementation, lo = ao.createNodeIterator, Dr = ao.createDocumentFragment, Rs = ao.getElementsByTagName, Os = n.importNode;
  let H = xa();
  e.isSupported = typeof yl == "function" && typeof oe == "function" && cn && cn.createHTMLDocument !== void 0;
  const V = qc, Ms = Hc, Ps = Vc, Ns = Uc, Bs = jc, Fs = Wc, zr = Yc, Ir = Kc;
  let Rr = _a, q = null;
  const O = L({}, [
    ...pa,
    ...Gs,
    ...Ks,
    ...Zs,
    ...fa
  ]);
  let M = null;
  const P = L({}, [
    ...ba,
    ...Xs,
    ...va,
    ...jr
  ]);
  let We = Object.seal(wo(null, {
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
  })), De = null, dn = null;
  const bt = Object.seal(wo(null, {
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
  let vt = !0, co = !0, ho = !1, Uo = !0, _t = !1, ze = !0, Fe = !1, gt = !1, hn = null, Ht = null, un = !1, zt = !1, mt = !1, Vt = !1, Dn = !0, jo = !1;
  const Wo = "user-content-";
  let uo = !0, zn = !1, It = {}, Je = null;
  const Ut = L({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let Yo = null;
  const Go = L({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let Ko = null;
  const Zo = L({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]), In = "http://www.w3.org/1998/Math/MathML", jt = "http://www.w3.org/2000/svg", qe = "http://www.w3.org/1999/xhtml";
  let Ae = qe, Rt = !1, Rn = null;
  const Xo = L({}, [
    In,
    jt,
    qe
  ], Ys), Or = ve([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let yo = L({}, Or);
  const po = ve(["annotation-xml"]);
  let fo = L({}, po);
  const Qo = L({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let On = null;
  const Mn = ["application/xhtml+xml", "text/html"], qs = "text/html";
  let Q = null, N = null;
  const yn = t.createElement("form"), Mr = function(c) {
    return c instanceof RegExp || c instanceof Function;
  }, bo = function() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (N && N === c) return;
    (!c || typeof c != "object") && (c = {}), c = nt(c), On = Mn.indexOf(c.PARSER_MEDIA_TYPE) === -1 ? qs : c.PARSER_MEDIA_TYPE, Q = On === "application/xhtml+xml" ? Ys : dr, q = vn(c, "ALLOWED_TAGS", O, { transform: Q }), M = vn(c, "ALLOWED_ATTR", P, { transform: Q }), Rn = vn(c, "ALLOWED_NAMESPACES", Xo, { transform: Ys }), Ko = vn(c, "ADD_URI_SAFE_ATTR", Zo, {
      transform: Q,
      base: Zo
    }), Yo = vn(c, "ADD_DATA_URI_TAGS", Go, {
      transform: Q,
      base: Go
    }), Je = vn(c, "FORBID_CONTENTS", Ut, { transform: Q }), De = vn(c, "FORBID_TAGS", nt({}), { transform: Q }), dn = vn(c, "FORBID_ATTR", nt({}), { transform: Q }), It = Ye(c, "USE_PROFILES") ? c.USE_PROFILES && typeof c.USE_PROFILES == "object" ? nt(c.USE_PROFILES) : c.USE_PROFILES : !1, vt = c.ALLOW_ARIA_ATTR !== !1, co = c.ALLOW_DATA_ATTR !== !1, ho = c.ALLOW_UNKNOWN_PROTOCOLS || !1, Uo = c.ALLOW_SELF_CLOSE_IN_ATTR !== !1, _t = c.SAFE_FOR_TEMPLATES || !1, ze = c.SAFE_FOR_XML !== !1, Fe = c.WHOLE_DOCUMENT || !1, zt = c.RETURN_DOM || !1, mt = c.RETURN_DOM_FRAGMENT || !1, Vt = c.RETURN_TRUSTED_TYPE || !1, un = c.FORCE_BODY || !1, Dn = c.SANITIZE_DOM !== !1, jo = c.SANITIZE_NAMED_PROPS || !1, uo = c.KEEP_CONTENT !== !1, zn = c.IN_PLACE || !1, Rr = Nc(c.ALLOWED_URI_REGEXP) ? c.ALLOWED_URI_REGEXP : _a, Ae = typeof c.NAMESPACE == "string" ? c.NAMESPACE : qe, yo = Qs(c, "MATHML_TEXT_INTEGRATION_POINTS", () => L({}, Or)), fo = Qs(c, "HTML_INTEGRATION_POINTS", () => L({}, po));
    const u = Qs(c, "CUSTOM_ELEMENT_HANDLING", () => wo(null));
    if (We = wo(null), Ye(u, "tagNameCheck") && Mr(u.tagNameCheck) && (We.tagNameCheck = u.tagNameCheck), Ye(u, "attributeNameCheck") && Mr(u.attributeNameCheck) && (We.attributeNameCheck = u.attributeNameCheck), Ye(u, "allowCustomizedBuiltInElements") && typeof u.allowCustomizedBuiltInElements == "boolean" && (We.allowCustomizedBuiltInElements = u.allowCustomizedBuiltInElements), me(We), _t && (co = !1), mt && (zt = !0), It && (q = L({}, fa), M = wo(null), It.html === !0 && (L(q, pa), L(M, ba)), It.svg === !0 && (L(q, Gs), L(M, Xs), L(M, jr)), It.svgFilters === !0 && (L(q, Ks), L(M, Xs), L(M, jr)), It.mathMl === !0 && (L(q, Zs), L(M, va), L(M, jr))), bt.tagCheck = null, bt.attributeCheck = null, Ye(c, "ADD_TAGS") && (typeof c.ADD_TAGS == "function" ? bt.tagCheck = c.ADD_TAGS : Eo(c.ADD_TAGS) && (q === O && (q = nt(q)), L(q, c.ADD_TAGS, Q))), Ye(c, "ADD_ATTR") && (typeof c.ADD_ATTR == "function" ? bt.attributeCheck = c.ADD_ATTR : Eo(c.ADD_ATTR) && (M === P && (M = nt(M)), L(M, c.ADD_ATTR, Q))), Ye(c, "ADD_FORBID_CONTENTS") && Eo(c.ADD_FORBID_CONTENTS) && (Je === Ut && (Je = nt(Je)), L(Je, c.ADD_FORBID_CONTENTS, Q)), uo && (q["#text"] = !0), Fe && L(q, [
      "html",
      "head",
      "body"
    ]), q.table && (L(q, ["tbody"]), delete De.tbody), c.TRUSTED_TYPES_POLICY) {
      if (typeof c.TRUSTED_TYPES_POLICY.createHTML != "function") throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof c.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw qn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const l = ge;
      ge = c.TRUSTED_TYPES_POLICY;
      try {
        se = qt("");
      } catch (h) {
        throw ge = l, h;
      }
    } else c.TRUSTED_TYPES_POLICY === null ? (ge = void 0, se = "") : (ge === void 0 && (ge = Is()), ge && typeof se == "string" && (se = qt("")));
    ve && ve(c), N = c;
  }, vo = L({}, [
    ...Gs,
    ...Ks,
    ...Bc
  ]), Jo = L({}, [...Zs, ...Fc]), Pr = function(c, u, l) {
    return u.namespaceURI === qe ? c === "svg" : u.namespaceURI === In ? c === "svg" && (l === "annotation-xml" || yo[l]) : !!vo[c];
  }, Hs = function(c, u, l) {
    return u.namespaceURI === qe ? c === "math" : u.namespaceURI === jt ? c === "math" && fo[l] : !!Jo[c];
  }, Vs = function(c, u, l) {
    return u.namespaceURI === jt && !fo[l] || u.namespaceURI === In && !yo[l] ? !1 : !Jo[c] && (Qo[c] || !vo[c]);
  }, Us = function(c) {
    let u = oe(c);
    (!u || !u.tagName) && (u = {
      namespaceURI: Ae,
      tagName: "template"
    });
    const l = dr(c.tagName), h = dr(u.tagName);
    return Rn[c.namespaceURI] ? c.namespaceURI === jt ? Pr(l, u, h) : c.namespaceURI === In ? Hs(l, u, h) : c.namespaceURI === qe ? Vs(l, u, h) : !!(On === "application/xhtml+xml" && Rn[c.namespaceURI]) : !1;
  }, Wt = function(c) {
    rr(e.removed, { element: c });
    try {
      oe(c).removeChild(c);
    } catch {
      if (R(c), !oe(c)) throw qn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, xt = function(c, u, l) {
    try {
      c.removeAttributeNode(u);
    } catch {
      try {
        c.removeAttribute(l);
      } catch {
      }
    }
  }, Pn = function(c) {
    _o(c);
    const u = fe(c);
    if (u) {
      const h = [];
      Un(u, (f) => {
        rr(h, f);
      }), Un(h, (f) => {
        try {
          R(f);
        } catch {
        }
      });
    }
    const l = Qe(c);
    if (l) for (let h = l.length - 1; h >= 0; --h) {
      const f = l[h], _ = f && f.name;
      typeof _ == "string" && xt(c, f, _);
    }
  }, ct = function(c, u, l) {
    if (!l) try {
      l = u.getAttributeNode(c);
    } catch {
      l = null;
    }
    rr(e.removed, {
      attribute: l || null,
      from: u
    });
    try {
      l ? u.removeAttributeNode(l) : u.removeAttribute(c);
    } catch {
      try {
        u.removeAttribute(c);
      } catch {
      }
    }
    if (c === "is")
      if (zt || mt) try {
        Wt(u);
      } catch {
      }
      else try {
        u.setAttribute(c, "");
      } catch {
      }
  }, Yt = function(c) {
    const u = Qe(c);
    if (u)
      for (let l = u.length - 1; l >= 0; --l) {
        const h = u[l], f = h && h.name;
        typeof f != "string" || M[Q(f)] || xt(c, h, f);
      }
  }, _o = function(c) {
    const u = [c];
    for (; u.length > 0; ) {
      const l = u.pop();
      Ee(l) === et.element && Yt(l);
      const h = fe(l);
      if (h) for (let f = h.length - 1; f >= 0; --f) u.push(h[f]);
    }
  }, Nn = function(c, u) {
    return ze ? c === "patchsrc" ? !0 : c === "for" && u !== "label" && u !== "output" : !1;
  }, Nr = function(c) {
    if (!ze) return;
    const u = [c];
    for (; u.length > 0; ) {
      const l = u.pop(), h = Ee(l);
      if (h === et.processingInstruction || h === et.comment && Re(ma, l.data)) {
        try {
          R(l);
        } catch {
        }
        continue;
      }
      if (h === et.element) {
        const _ = l, g = Q(Ft(l));
        try {
          _.hasAttribute && _.hasAttribute("patchsrc") && _.removeAttribute("patchsrc"), _.hasAttribute && _.hasAttribute("for") && Nn("for", g) && _.removeAttribute("for");
        } catch {
        }
      }
      const f = fe(l);
      if (f) for (let _ = f.length - 1; _ >= 0; --_) u.push(f[_]);
    }
  }, Br = function(c) {
    let u = null, l = null;
    if (un) c = "<remove></remove>" + c;
    else {
      const _ = da(c, /^[\r\n\t ]+/);
      l = _ && _[0];
    }
    On === "application/xhtml+xml" && Ae === qe && (c = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + c + "</body></html>");
    const h = ge ? qt(c) : c;
    if (Ae === qe) try {
      u = new b().parseFromString(h, On);
    } catch {
    }
    if (!u || !u.documentElement) {
      u = cn.createDocument(Ae, "template", null);
      try {
        u.documentElement.innerHTML = Rt ? se : h;
      } catch {
      }
    }
    const f = u.body || u.documentElement;
    return c && l && f.insertBefore(t.createTextNode(l), f.childNodes[0] || null), Ae === qe ? Rs.call(u, Fe ? "html" : "body")[0] : Fe ? u.documentElement : f;
  }, er = function(c) {
    const u = Se ? Se(c) : c.ownerDocument;
    return lo.call(u || c, c, p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION, null);
  }, Bn = function(c) {
    return c = sr(c, V, " "), c = sr(c, Ms, " "), c = sr(c, Ps, " "), c;
  }, pn = function(c) {
    var u;
    c.normalize();
    const l = Se ? Se(c) : c.ownerDocument, h = lo.call(l || c, c, p.SHOW_TEXT | p.SHOW_COMMENT | p.SHOW_CDATA_SECTION | p.SHOW_PROCESSING_INSTRUCTION, null);
    let f = h.nextNode();
    for (; f; )
      f.data = Bn(f.data), f = h.nextNode();
    const _ = (u = c.querySelectorAll) === null || u === void 0 ? void 0 : u.call(c, "template");
    _ && Un(_, (g) => {
      wt(g.content) && pn(g.content);
    });
  }, fn = function(c) {
    const u = be ? be(c) : null;
    return typeof u != "string" || Q(u) !== "form" ? !1 : typeof c.nodeName != "string" || typeof c.textContent != "string" || typeof c.removeChild != "function" || c.attributes !== Qe(c) || typeof c.removeAttribute != "function" || typeof c.setAttribute != "function" || typeof c.namespaceURI != "string" || typeof c.insertBefore != "function" || typeof c.hasChildNodes != "function" || c.nodeType !== re(c) || c.childNodes !== fe(c);
  }, wt = function(c) {
    if (!re || typeof c != "object" || c === null) return !1;
    try {
      return re(c) === et.documentFragment;
    } catch {
      return !1;
    }
  }, dt = function(c) {
    if (!re || typeof c != "object" || c === null) return !1;
    try {
      return typeof re(c) == "number";
    } catch {
      return !1;
    }
  };
  function Ie(c, u, l) {
    c.length !== 0 && Un(c, (h) => {
      h.call(e, u, l, N);
    });
  }
  const ht = function(c, u) {
    return !!(ze && c.hasChildNodes() && !dt(c.firstElementChild) && Re(ga, c.textContent) && Re(ga, c.innerHTML) || ze && c.namespaceURI === qe && Qc[u] && (dt(c.firstElementChild) || typeof c.textContent == "string" && Re(Jc[u], c.textContent)) || c.nodeType === et.processingInstruction || ze && c.nodeType === et.comment && Re(ma, c.data));
  }, go = function(c, u) {
    if (c instanceof RegExp) return Re(c, u);
    if (c instanceof Function) {
      for (var l = arguments.length, h = new Array(l > 2 ? l - 2 : 0), f = 2; f < l; f++) h[f - 2] = arguments[f];
      return !!c(u, ...h);
    }
    return !1;
  }, mo = function(c, u, l) {
    if (!De[u] && Hr(u) && go(We.tagNameCheck, u)) return !1;
    if (uo && !Je[u]) {
      const h = oe(c), f = fe(c);
      if (f && h) {
        const _ = f.length;
        for (let g = _ - 1; g >= 0; --g) {
          const w = c === l ? k(f[g], !0) : f[g];
          h.insertBefore(w, pe(c));
        }
      }
    }
    return Wt(c), !0;
  }, Fr = function(c, u, l, h) {
    return c.length === 0 ? u : u === l || u === h ? nt(u) : u;
  }, tr = function(c, u) {
    return c === u || oe(c) !== null ? !1 : (zn && _o(c), !0);
  }, nr = function(c, u) {
    if (Ie(H.beforeSanitizeElements, c, null), tr(c, u)) return !0;
    if (fn(c))
      return Wt(c), !0;
    const l = Q(Ft(c));
    if (q = Fr(H.uponSanitizeElement, q, O, hn), Ie(H.uponSanitizeElement, c, {
      tagName: l,
      allowedTags: q
    }), tr(c, u)) return !0;
    if (ht(c, l))
      return Wt(c), !0;
    if (De[l] || !(bt.tagCheck instanceof Function && bt.tagCheck(l)) && !q[l]) {
      const h = mo(c, l, u);
      return h === !1 && Ie(H.afterSanitizeElements, c, null), h;
    }
    if (Ee(c) === et.element && !Us(c) || (l === "noscript" || l === "noembed" || l === "noframes") && Re(Zc, c.innerHTML))
      return Wt(c), !0;
    if (_t && c.nodeType === et.text) {
      const h = Bn(c.textContent);
      c.textContent !== h && (rr(e.removed, { element: c.cloneNode() }), c.textContent = h);
    }
    return Ie(H.afterSanitizeElements, c, null), !1;
  }, or = function(c, u, l) {
    if (dn[u] || Nn(u, c) || Dn && (u === "id" || u === "name") && (l in t || l in yn)) return !1;
    const h = M[u] || bt.attributeCheck instanceof Function && bt.attributeCheck(u, c);
    return co && Re(Ns, u) || vt && Re(Bs, u) ? !0 : h ? Ko[u] || Re(Rr, sr(l, zr, "")) || (u === "src" || u === "xlink:href" || u === "href") && c !== "script" && ha(l, "data:") === 0 && Yo[c] || ho && !Re(Fs, sr(l, zr, "")) ? !0 : !l : Hr(c) && go(We.tagNameCheck, c) && go(We.attributeNameCheck, u, c) || u === "is" && We.allowCustomizedBuiltInElements && go(We.tagNameCheck, l);
  }, qr = L({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Hr = function(c) {
    return !qr[dr(c)] && Re(Ir, c);
  }, Vr = function(c, u, l, h) {
    if (ge && typeof m == "object" && typeof m.getAttributeType == "function" && !l) switch (m.getAttributeType(c, u)) {
      case "TrustedHTML":
        return qt(h);
      case "TrustedScriptURL":
        return ln(h);
    }
    return h;
  }, js = function(c, u, l, h) {
    try {
      l ? c.setAttributeNS(l, u, h) : c.setAttribute(u, h), fn(c) ? Wt(c) : ca(e.removed);
    } catch {
      ct(u, c);
    }
  }, Ur = function(c) {
    Ie(H.beforeSanitizeAttributes, c, null);
    const u = c.attributes;
    if (!u || fn(c)) return;
    M = Fr(H.uponSanitizeAttribute, M, P, Ht);
    const l = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: M,
      forceKeepAttr: void 0
    };
    let h = u.length;
    const f = Q(c.nodeName);
    for (; h--; ) {
      const _ = u[h], g = _.name, w = _.namespaceURI, A = _.value, S = Q(g), U = A;
      let z = g === "value" ? U : zc(U);
      if (l.attrName = S, l.attrValue = z, l.keepAttr = !0, l.forceKeepAttr = void 0, Ie(H.uponSanitizeAttribute, c, l), z = l.attrValue, jo && (S === "id" || S === "name") && ha(z, Wo) !== 0 && (ct(g, c, _), z = Wo + z), ze && Re(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, z)) {
        ct(g, c, _);
        continue;
      }
      if (S === "attributename" && da(z, "href")) {
        ct(g, c, _);
        continue;
      }
      if (!l.forceKeepAttr) {
        if (!l.keepAttr) {
          ct(g, c, _);
          continue;
        }
        if (!Uo && Re(Xc, z)) {
          ct(g, c, _);
          continue;
        }
        if (_t && (z = Bn(z)), !or(f, S, z)) {
          ct(g, c, _);
          continue;
        }
        z = Vr(f, S, w, z), z !== U && js(c, g, w, z);
      }
    }
    Ie(H.afterSanitizeAttributes, c, null);
  }, Fn = function(c) {
    let u = null;
    const l = er(c);
    for (Ie(H.beforeSanitizeShadowDOM, c, null); u = l.nextNode(); )
      if (Ie(H.uponSanitizeShadowNode, u, null), nr(u, c), Ur(u), wt(u.content) && Fn(u.content), Ee(u) === et.element) {
        const h = ie(u);
        wt(h) && (bn(h), Fn(h));
      }
    Ie(H.afterSanitizeShadowDOM, c, null);
  }, bn = function(c) {
    const u = [{
      node: c,
      shadow: null
    }];
    for (; u.length > 0; ) {
      const l = u.pop();
      if (l.shadow) {
        Fn(l.shadow);
        continue;
      }
      const h = l.node, f = Ee(h) === et.element, _ = fe(h);
      if (_) for (let g = _.length - 1; g >= 0; --g) u.push({
        node: _[g],
        shadow: null
      });
      if (f) {
        const g = be ? be(h) : null;
        if (typeof g == "string" && Q(g) === "template") {
          const w = h.content;
          wt(w) && u.push({
            node: w,
            shadow: null
          });
        }
      }
      if (f) {
        const g = ie(h);
        wt(g) && u.push({
          node: null,
          shadow: g
        }, {
          node: g,
          shadow: null
        });
      }
    }
  };
  return e.sanitize = function(c) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = null, h = null, f = null, _ = null;
    if (Rt = !c, Rt && (c = "<!-->"), typeof c != "string" && !dt(c) && (c = Pc(c), typeof c != "string"))
      throw qn("dirty is not a string, aborting");
    if (!e.isSupported) return c;
    gt ? (q = hn, M = Ht) : bo(u), (H.uponSanitizeElement.length > 0 || H.uponSanitizeAttribute.length > 0) && (q = nt(q)), H.uponSanitizeAttribute.length > 0 && (M = nt(M)), e.removed = [];
    const g = zn && typeof c != "string" && dt(c);
    if (g) {
      Nr(c);
      const S = Ft(c);
      if (typeof S == "string") {
        const U = Q(S);
        if (!q[U] || De[U])
          throw Pn(c), qn("root node is forbidden and cannot be sanitized in-place");
      }
      if (fn(c))
        throw Pn(c), qn("root node is clobbered and cannot be sanitized in-place");
      try {
        bn(c);
      } catch (U) {
        throw Pn(c), U;
      }
    } else if (dt(c))
      l = Br("<!---->"), h = l.ownerDocument.importNode(c, !0), h.nodeType === et.element && h.nodeName === "BODY" || h.nodeName === "HTML" ? l = h : l.appendChild(h), bn(h);
    else {
      if (!zt && !_t && !Fe && c.indexOf("<") === -1) return ge && Vt ? qt(c) : c;
      if (l = Br(c), !l) return zt ? null : Vt ? se : "";
    }
    l && un && Wt(l.firstChild);
    const w = g ? c : l;
    try {
      const S = er(w);
      for (; f = S.nextNode(); )
        nr(f, w), Ur(f), wt(f.content) && Fn(f.content);
    } catch (S) {
      throw g && (Pn(c), Un(e.removed, (U) => {
        U.element && _o(U.element);
      })), S;
    }
    if (g)
      return Un(e.removed, (S) => {
        S.element && _o(S.element);
      }), _t && pn(c), c;
    if (zt) {
      if (_t && pn(l), mt)
        for (_ = Dr.call(l.ownerDocument); l.firstChild; ) _.appendChild(l.firstChild);
      else _ = l;
      return (M.shadowroot || M.shadowrootmode) && (_ = Os.call(n, _, !0)), _;
    }
    let A = Fe ? l.outerHTML : l.innerHTML;
    return Fe && q["!doctype"] && l.ownerDocument && l.ownerDocument.doctype && l.ownerDocument.doctype.name && Re(Gc, l.ownerDocument.doctype.name) && (A = "<!DOCTYPE " + l.ownerDocument.doctype.name + `>
` + A), _t && (A = Bn(A)), ge && Vt ? qt(A) : A;
  }, e.setConfig = function() {
    let c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    bo(c), gt = !0, hn = q, Ht = M;
  }, e.clearConfig = function() {
    N = null, gt = !1, hn = null, Ht = null, ge = ft, se = "";
  }, e.isValidAttribute = function(c, u, l) {
    N || bo({});
    const h = Q(c), f = Q(u);
    return or(h, f, l);
  }, e.addHook = function(c, u) {
    typeof u == "function" && Ye(H, c) && rr(H[c], u);
  }, e.removeHook = function(c, u) {
    if (Ye(H, c)) {
      if (u !== void 0) {
        const l = Tc(H[c], u);
        return l === -1 ? void 0 : Dc(H[c], l, 1)[0];
      }
      return ca(H[c]);
    }
  }, e.removeHooks = function(c) {
    Ye(H, c) && (H[c] = []);
  }, e.removeAllHooks = function() {
    H = xa();
  }, e;
}
var nd = bl(), Js = /* @__PURE__ */ new Map(), wa = /* @__PURE__ */ new Map();
function vl(r, e) {
  const t = nd.sanitize(r, {
    USE_PROFILES: {
      svg: !0,
      svgFilters: !0
    },
    FORBID_TAGS: ["script", "use"],
    FORBID_ATTR: [
      "onload",
      "onerror",
      "onbegin",
      "href",
      "xlink:href"
    ]
  }), n = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
  if (!(n instanceof SVGElement)) throw new Error(`Invalid SVG from ${e}`);
  return n;
}
async function od(r) {
  const e = await fetch(r);
  if (!e.ok) throw new Error(`Failed to load icon: ${e.status}`);
  return vl(await e.text(), r);
}
async function ka(r) {
  return Js.has(r) || Js.set(r, od(r)), (await Js.get(r)).cloneNode(!0);
}
function rd(r) {
  let e = wa.get(r);
  return e || (e = vl(r, "inline SVG source"), wa.set(r, e)), e.cloneNode(!0);
}
var sd = ":host{--_nys-icon-size:var(--nys-icon-size,.7em);vertical-align:middle;width:fit-content;height:fit-content;display:inline-block;box-sizing:content-box!important}@supports (font-size:1cap){:host{--_nys-icon-size:var(--nys-icon-size,1cap)}}.nys-icon--svg{width:var(--_nys-icon-size,1em);height:var(--_nys-icon-size,1em);white-space:nowrap;display:block}.nys-icon--xs{width:calc(var(--_nys-icon-size) * .75);height:calc(var(--_nys-icon-size) * .75)}.nys-icon--sm{width:calc(var(--_nys-icon-size) * .875);height:calc(var(--_nys-icon-size) * .875)}.nys-icon--md{width:var(--_nys-icon-size);height:var(--_nys-icon-size)}.nys-icon--lg{width:calc(var(--_nys-icon-size) * 1.125);height:calc(var(--_nys-icon-size) * 1.125)}.nys-icon--xl{width:calc(var(--_nys-icon-size) * 1.25);height:calc(var(--_nys-icon-size) * 1.25)}.nys-icon--2xl{width:calc(var(--_nys-icon-size) * 1.5);height:calc(var(--_nys-icon-size) * 1.5)}.nys-icon--3xl{width:calc(var(--_nys-icon-size) * 1.875);height:calc(var(--_nys-icon-size) * 1.875)}.nys-icon--4xl{width:calc(var(--_nys-icon-size) * 2.25);height:calc(var(--_nys-icon-size) * 2.25)}.nys-icon--5xl{width:calc(var(--_nys-icon-size) * 3);height:calc(var(--_nys-icon-size) * 3)}.nys-icon--12{width:.75rem;height:.75rem}.nys-icon--14{width:.875rem;height:.875rem}.nys-icon--16{width:1rem;height:1rem}.nys-icon--18{width:1.125rem;height:1.125rem}.nys-icon--20{width:1.25rem;height:1.25rem}.nys-icon--24{width:1.5rem;height:1.5rem}.nys-icon--32{width:2rem;height:2rem}.nys-icon--40{width:2.5rem;height:2.5rem}.nys-icon--50{width:3.125rem;height:3.125rem}.nys-icon--flip-horizontal{transform:scaleX(-1)}.nys-icon--flip-vertical{transform:scaleY(-1)}.nys-icon--flip-both{transform:scale(-1)}";
function Sn(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(r, e);
}
function En(r, e, t, n) {
  var o = arguments.length, s = o < 3 ? e : n, i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(r, e, t, n);
  else for (var d = r.length - 1; d >= 0; d--) (i = r[d]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, t, s) : i(e, t)) || s);
  return o > 3 && s && Object.defineProperty(e, t, s), s;
}
var gn, tn = (gn = class extends _c {
  constructor(...e) {
    super(...e), this.name = "", this.library = "default", this.ariaLabel = "", this.rotate = "0", this.flip = "", this.color = "", this.size = "md", this._svg = null, this._loadSeq = 0, this._loadPromise = null;
  }
  get updateComplete() {
    return (async () => {
      const e = await super.updateComplete;
      return await this._loadPromise, e;
    })();
  }
  connectedCallback() {
    super.connectedCallback(), this._reflectHostSemantics(), sa(this.library, this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), ia(this.library, this);
  }
  redraw() {
    this._loadIcon();
  }
  firstUpdated() {
    this._loadIcon();
  }
  updated(e) {
    if (e.has("name") && !gn._validName.test(this.name)) {
      console.warn(`nys-icon: invalid name "${this.name}" — ignored`), this._svg = null;
      return;
    }
    if (e.has("name") || e.has("library")) {
      if (e.has("library")) {
        const t = e.get("library");
        t && ia(t, this), sa(this.library, this);
      }
      this._loadIcon();
    }
    this._svg && (e.has("ariaLabel") || e.has("rotate") || e.has("flip") || e.has("color") || e.has("size")) ? this._applyAttributes(this._svg) : e.has("ariaLabel") && this._reflectHostSemantics();
  }
  _loadIcon() {
    const e = ++this._loadSeq;
    this._loadPromise = (async () => {
      const t = xc(this.library);
      if (!t || !this.name) {
        this._svg = null;
        return;
      }
      try {
        const n = await t.resolver(this.name);
        if (e !== this._loadSeq) return;
        if (!n) {
          this._svg = null;
          return;
        }
        const o = typeof n == "string" ? await ka(n) : n.type === "url" ? await ka(n.href) : rd(n.content);
        if (e !== this._loadSeq) return;
        t.mutator?.(o), this._applyAttributes(o), this._svg = o;
      } catch {
        e === this._loadSeq && (this._svg = null);
      }
    })();
  }
  _applyAttributes(e) {
    e.setAttribute("role", "img"), this.ariaLabel ? (e.setAttribute("aria-label", this.ariaLabel), e.removeAttribute("aria-hidden")) : (e.setAttribute("aria-hidden", "true"), e.removeAttribute("aria-label")), this.rotate && this.rotate !== "0" ? e.style.rotate = `${this.rotate}deg` : e.style.removeProperty("rotate"), e.style.color = this.color || "currentcolor", e.classList.add(`nys-icon--${this.size}`), e.classList.add("nys-icon--svg"), this.flip && e.classList.add(`nys-icon--flip-${this.flip}`), this._reflectHostSemantics();
  }
  _reflectHostSemantics() {
    this.ariaLabel ? (this.setAttribute("role", "img"), this.setAttribute("aria-label", this.ariaLabel), this.removeAttribute("aria-hidden")) : (this.removeAttribute("role"), this.removeAttribute("aria-label"), this.setAttribute("aria-hidden", "true"));
  }
  render() {
    return this._svg ? y`${this._svg}` : null;
  }
}, gn.styles = C(sd), gn._validName = /^[a-zA-Z0-9_-]+$/, gn);
En([a({
  type: String,
  reflect: !0
}), Sn("design:type", Object)], tn.prototype, "name", void 0);
En([a({
  type: String,
  reflect: !0
}), Sn("design:type", Object)], tn.prototype, "library", void 0);
En([a({ type: String }), Sn("design:type", Object)], tn.prototype, "ariaLabel", void 0);
En([a({ type: String }), Sn("design:type", Object)], tn.prototype, "rotate", void 0);
En([a({ type: String }), Sn("design:type", Object)], tn.prototype, "flip", void 0);
En([a({ type: String }), Sn("design:type", Object)], tn.prototype, "color", void 0);
En([a({ type: String }), Sn("design:type", String)], tn.prototype, "size", void 0);
En([$(), Sn("design:type", Object)], tn.prototype, "_svg", void 0);
customElements.get("nys-icon") || customElements.define("nys-icon", tn);
const _l = ':host{--_nys-accordion-border-radius: var(--nys-radius-md, 4px);--_nys-accordion-border-width: var(--nys-border-width-md, 2px);--_nys-accordion-border-color: var(--nys-color-neutral-50, #ededed);--_nys-accordion-padding--x: var(--nys-space-250, 20px);--_nys-accordion-padding--y: var(--nys-space-200, 16px);--_nys-accordion-outline-width: var(--nys-border-width-md, 2px);--_nys-accordion-outline-offset: var(--nys-space-2px, 2px);--_nys-accordion-outline-color: var(--nys-color-focus, #004dd1);--_nys-accordion-gap: var(--nys-space-100, 8px);--_nys-accordion-color--header: var( --nys-accordion-color--header, var(--nys-color-text, #1b1b1b) );--_nys-accordion-background-color--header: var( --nys-accordion-background-color--header, var(--nys-color-neutral-50, #ededed) );--_nys-accordion-background-color--header--hover: var( --nys-accordion-background-color--header--hover, var(--nys-color-neutral-100, #d0d0ce) );--_nys-accordionitem-gap: var(--nys-space-200, 16px);--_nys-accordionitem-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-accordionitem-padding: var( --nys-accordionitem-padding, var(--nys-space-200, 16px) var(--nys-space-250, 20px) );--_nys-accordion-content-max-width: var( --nys-accordion-content-max-width, 80ch );--_nys-accordion-font-size: var(--nys-font-size-ui-xl, 20px);--_nys-accordion-font-weight: var(--nys-font-weight-bold, 700);--_nys-accordion-line-height: var(--nys-font-lineheight-ui-xl, 28px);--_nys-accordion-letter-spacing: var(--nys-font-letterspacing-ui-xl, .017px);--_nys-accordion-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) )}::slotted(p),p{margin:0!important}.nys-accordionitem{font-family:var(--_nys-accordion-font-family);font-size:var(--_nys-accordion-font-size);font-weight:var(--_nys-accordion-font-weight);line-height:var(--_nys-accordion-line-height);letter-spacing:var(--_nys-accordion-letter-spacing);display:flex;flex-direction:column}.nys-accordionitem__title{margin:0;font:inherit;color:inherit;display:flex;flex:1;align-self:stretch}.nys-accordionitem__heading{all:unset;color:var(--_nys-accordion-color--header);flex:1;gap:var(--_nys-accordionitem-gap);display:flex;padding:var(--_nys-accordion-padding--y) var(--_nys-accordion-padding--x);align-items:center;align-self:stretch;border-radius:var(--_nys-accordion-border-radius);background-color:var(--_nys-accordion-background-color--header);cursor:pointer;transition:.05s all ease-in-out}.nys-accordionitem__heading:hover{border-radius:var(--_nys-accordion-border-radius);background-color:var(--_nys-accordion-background-color--header--hover)}.nys-accordionitem__heading:focus-visible{outline-offset:var(--_nys-accordion-outline-offset);outline:solid var(--_nys-accordion-outline-width) var(--_nys-accordion-outline-color)}.nys-accordionitem__heading .nys-accordionitem__heading-title{flex:1}.nys-accordionitem__content{height:0;overflow:hidden;transition:all .3s cubic-bezier(.4,0,.2,1) 0ms;visibility:hidden}.nys-accordionitem__content.expanded{visibility:visible}.nys-accordionitem__content-slot-container{display:flex;flex-direction:column;gap:var(--_nys-accordion-gap);align-self:stretch;padding:var(--_nys-accordionitem-padding);background-color:var(--_nys-accordionitem-background-color)}.nys-accordionitem__content-slot-container-text{max-width:var(--_nys-accordion-content-max-width)}.expand-icon{transition:all .3s cubic-bezier(.4,0,.2,1) 0ms}:host([expanded]) .expand-icon{transform:rotate(180deg)}:host([bordered][expanded]) .nys-accordionitem__heading{border-radius:var(--_nys-accordion-border-radius) var(--_nys-accordion-border-radius) 0 0}:host([bordered]) .nys-accordionitem__content-slot-container{border:var(--_nys-accordion-border-width) solid var(--_nys-accordion-border-color);border-top:none;border-radius:0 0 var(--_nys-accordion-border-radius) var(--_nys-accordion-border-radius)}.nys-accordion{display:flex;flex-direction:column;gap:var(--_nys-accordion-gap)}';
var id = Object.defineProperty, Ro = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && id(e, t, o), o;
};
const ad = "h3", ld = ["h2", "h3", "h4", "h5", "h6"];
function Ca(r) {
  if (typeof r != "string") return null;
  const e = r.trim().toLowerCase();
  return ld.includes(e) ? e : null;
}
const Ei = class Ei extends D {
  constructor() {
    super(...arguments), this.id = "", this.heading = "", this.headingLevel = "", this.expanded = !1, this.bordered = !1;
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback();
  }
  firstUpdated() {
    const e = this.shadowRoot?.querySelector("slot");
    this.expanded && e && e.addEventListener("slotchange", () => {
      this._updateHeight();
    });
  }
  updated(e) {
    (e.has("expanded") || e.has("bordered")) && this._updateHeight();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  /**
   * The level actually rendered: this item's own `headingLevel`, otherwise the
   * one set on the enclosing `nys-accordion`, otherwise the `h3` default.
   *
   * The group's value is read here rather than pushed down from the container
   * so there is a single source of truth per item and an item-level value
   * always wins. `nys-accordion` re-renders its items when its own level
   * changes (see `_notifyHeadingLevel` there).
   */
  _resolveHeadingLevel() {
    const e = Ca(this.headingLevel);
    if (e) return e;
    const t = this.closest("nys-accordion");
    return Ca(t?.headingLevel) ?? ad;
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
    this._contentContainer && (this.expanded ? requestAnimationFrame(() => {
      const e = this._contentContainer.scrollHeight;
      this._contentContainer.style.height = `${e}px`;
    }) : (this._contentContainer.style.height = "0", this._contentContainer.style.overflow = "hidden"));
  }
  /**
   * Helper Render Functions
   * --------------------------------------------------------------------------
   */
  /**
   * WAI-ARIA Accordion pattern: the toggle button must be contained in a
   * heading at the level appropriate for the surrounding page. A real `h2`-`h6`
   * element is used rather than `role="heading"` + `aria-level` so the trigger
   * carries native heading semantics everywhere — including the places that
   * read the DOM instead of the accessibility tree.
   */
  _renderHeading(e) {
    const t = "nys-accordionitem__title";
    switch (this._resolveHeadingLevel()) {
      case "h2":
        return y`<h2 class=${t}>${e}</h2>`;
      case "h4":
        return y`<h4 class=${t}>${e}</h4>`;
      case "h5":
        return y`<h5 class=${t}>${e}</h5>`;
      case "h6":
        return y`<h6 class=${t}>${e}</h6>`;
      default:
        return y`<h3 class=${t}>${e}</h3>`;
    }
  }
  render() {
    const e = `${this.id}-content`, t = `${this.id}-button`, n = y`<button
      id=${t}
      class="nys-accordionitem__heading"
      type="button"
      @click=${this._handleExpand}
      @keydown=${this._handleKeydown}
      aria-expanded=${this.expanded ? "true" : "false"}
      aria-controls=${e}
    >
      <span class="nys-accordionitem__heading-title">${this.heading}</span>
      <nys-icon class="expand-icon" name="chevron_down" size="24"></nys-icon>
    </button>`;
    return y`
      <div class="nys-accordionitem">
        ${this._renderHeading(n)}
        <!--
          The panel is a labelled region so it can be reached from the landmark
          list, named by the trigger that opens it. A collapsed panel is
          visibility:hidden, so it contributes no landmark at all: the list only
          ever holds the panels a user has actually opened (at most one under
          singleSelect), which is why the role is unconditional here.
        -->
        <div
          id=${e}
          class="nys-accordionitem__content ${this.expanded ? "expanded" : "collapsed"}"
          role="region"
          aria-labelledby=${t}
          @nys-child-resize=${this._updateHeight}
        >
          <div class="nys-accordionitem__content-slot-container">
            <div class="nys-accordionitem__content-slot-container-text">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
Ei.styles = C(_l);
let Kt = Ei;
Ro([
  a({ type: String, reflect: !0 })
], Kt.prototype, "id");
Ro([
  a({ type: String })
], Kt.prototype, "heading");
Ro([
  a({ type: String, reflect: !0 })
], Kt.prototype, "headingLevel");
Ro([
  a({ type: Boolean, reflect: !0 })
], Kt.prototype, "expanded");
Ro([
  a({ type: Boolean, reflect: !0 })
], Kt.prototype, "bordered");
Ro([
  to(".nys-accordionitem__content")
], Kt.prototype, "_contentContainer");
customElements.get("nys-accordionitem") || customElements.define("nys-accordionitem", Kt);
var cd = Object.defineProperty, ks = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && cd(e, t, o), o;
};
const Ai = class Ai extends D {
  constructor() {
    super(...arguments), this.id = "", this.singleSelect = !1, this.bordered = !1, this.headingLevel = "h3";
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback();
  }
  updated(e) {
    e.has("bordered") && this._applyBordered(), e.has("headingLevel") && this._notifyHeadingLevel();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _getAccordionItems() {
    return (this.shadowRoot?.querySelector("slot")?.assignedElements() || []).filter(
      (n) => n.tagName.toLowerCase() === "nys-accordionitem"
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
  /**
   * Items read the group's `headingLevel` themselves (so an item that sets its
   * own always wins), which means a change here is invisible to them until they
   * re-render. Ask them to.
   */
  _notifyHeadingLevel() {
    this._getAccordionItems().forEach((e) => {
      e.requestUpdate?.();
    });
  }
  render() {
    return y`<div
      class="nys-accordion"
      @nys-accordionitem-toggle=${this._onAccordionToggle}
    >
      <slot></slot>
    </div>`;
  }
};
Ai.styles = C(_l);
let Gn = Ai;
ks([
  a({ type: String, reflect: !0 })
], Gn.prototype, "id");
ks([
  a({ type: Boolean, reflect: !0 })
], Gn.prototype, "singleSelect");
ks([
  a({ type: Boolean, reflect: !0 })
], Gn.prototype, "bordered");
ks([
  a({ type: String, reflect: !0 })
], Gn.prototype, "headingLevel");
customElements.get("nys-accordion") || customElements.define("nys-accordion", Gn);
/*!
   * █▄  █  █   █  █▀▀▀█  █▀▀▄  █▀▀▀█
   * █ █ █  █▄▄▄█  ▀▀▀▄▄  █   █ ▀▀▀▄▄
   * █  ▀█    █    █▄▄▄█  █▄▄▀  █▄▄▄█
   *
   * Button Component v1.21.0
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
/*!
  * New York State Design System v1.21.0
  * Description: A design system for New York State's digital products.
  * Repository: https://github.com/its-hcd/nysds
  * License: MIT
*/
var dd = 0;
function hd(r) {
  return `${r}-${Date.now()}-${dd++}`;
}
var ud = (r) => {
  class e extends r {
    get idPrefix() {
      return this.localName || "nys-element";
    }
    ensureId() {
      this.id || (this.id = hd(this.idPrefix));
    }
    connectedCallback() {
      super.connectedCallback(), this.ensureId();
    }
  }
  return e;
}, yd = (r) => {
  class e extends ud(r) {
    constructor(...n) {
      super(...n), this.__internals = null;
    }
    get internals() {
      if (this.__internals) return this.__internals;
      if (typeof this.attachInternals == "function") try {
        this.__internals = this.attachInternals();
      } catch {
        this.__internals = null;
      }
      return this.__internals;
    }
    get defaultRole() {
      return null;
    }
    setHostAria(n, o) {
      const s = this.internals;
      if (s && n in s) {
        s[n] = o;
        return;
      }
      const i = pd(n);
      o === null ? this.removeAttribute(i) : this.setAttribute(i, o);
    }
    reflectDefaultSemantics() {
      const n = this.defaultRole;
      n && this.setHostAria("role", n);
    }
    connectedCallback() {
      super.connectedCallback(), this.reflectDefaultSemantics();
    }
  }
  return e;
};
function pd(r) {
  if (r === "role") return "role";
  const e = r.replace(/^aria/, "");
  return "aria-" + e.charAt(0).toLowerCase() + e.slice(1);
}
var fd = (r) => {
  const e = class extends yd(r) {
    setFormValue(o) {
      this.internals?.setFormValue(o ?? null);
    }
    setValidityFromState(o, s, i) {
      const d = this.internals;
      if (!d) return;
      const p = Object.values(o).some(Boolean);
      p ? d.setValidity(o, s ?? "Invalid value", i) : d.setValidity({}), this.setHostAria("ariaInvalid", p ? "true" : "false");
    }
    clearValidity() {
      this.internals?.setValidity({}), this.setHostAria("ariaInvalid", "false");
    }
    checkValidity() {
      return this.internals?.checkValidity() ?? !0;
    }
    reportValidity() {
      return this.internals?.reportValidity() ?? !0;
    }
    formResetCallback() {
      this.clearValidity();
    }
  };
  return e.formAssociated = !0, e;
}, bd = /* @__PURE__ */ fd(I);
const vd = ':host{--_nys-button-width: fit-content;--_nys-button-height: var(--nys-size-600, 48px);--_nys-button-border-radius: var(--nys-radius-xl, 12px);--_nys-button-padding--y: calc( var(--nys-space-150, 12px) - var(--nys-border-width-md, 2px) );--_nys-button-cursor: pointer;--_nys-button-padding--x: calc( var(--nys-space-250, 20px) - var(--nys-border-width-md, 2px) );--_nys-button-gap: var(--nys-space-100, 8px);--_nys-button-justify-content: center;--_nys-button-border-style: solid;--_nys-button-border-width: var(--nys-border-width-md, 2px);--_nys-button-outline-width: var(--nys-border-width-md, 2px);--_nys-button-outline-offset: var(--nys-space-2px, 2px);--_nys-button-outline-color: var(--nys-color-focus, #004dd1);--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-theme, #154973) );--_nys-button-color: var( --nys-button-color, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-theme-strong, #0e324f) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-theme-stronger, #081b2b) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00);--_nys-button-font-size: var(--nys-font-size-ui-md, 16px);--_nys-button-font-weight: var(--nys-font-weight-semibold, 600);--_nys-button-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-button-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-button-text-decoration: none;display:inline-flex;width:var(--_nys-button-width);vertical-align:middle}:host([size=sm]){--_nys-button-height: var(--nys-size-500, 40px);--_nys-button-padding--y: calc( var(--nys-space-100, 8px) - var(--nys-border-width-md, 2px) );--_nys-button-padding--x: calc( var(--nys-space-200, 16px) - var(--nys-border-width-md, 2px) )}:host([size=lg]){--_nys-button-height: var(--nys-size-700, 56px);--_nys-button-padding--y: calc( var(--nys-space-200, 16px) - var(--nys-border-width-md, 2px) );--_nys-button-padding--x: calc( var(--nys-space-300, 24px) - var(--nys-border-width-md, 2px) )}:host([fullWidth]){width:100%}:host([fullWidth]) .nys-button__linkwrapper{width:100%}:host([fullWidth]) .nys-button{width:100%}:host([variant=filled]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-theme, #154973) );--_nys-button-color: var( --nys-button-color, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-theme-strong, #0e324f) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color--hover: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-theme-stronger, #081b2b) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color--active: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1)}:host([variant=outline]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-surface, #ffffff) );--_nys-button-color: var(--nys-button-color, var(--nys-color-theme, #154973));--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-theme, #154973) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-theme-weaker, #eff6fb) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-theme, #154973) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-theme, #154973) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-theme-weak, #cddde9) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-theme, #154973) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-theme, #154973) );--_nys-button-background-color--disabled: var(--nys-color-surface, #ffffff);--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-button-border-color--disabled: var(--nys-color-neutral-100, #d0d0ce)}:host([variant=text]){--_nys-button-height: fit-content;--_nys-button-border-radius: var(--nys-radius-md, 4px);--_nys-button-padding--y: var(--nys-space-2px, 2px);--_nys-button-padding--x: 0;--_nys-button-border-width: 0px;--_nys-button-text-decoration: underline;--_nys-button-text-decoration-thickness: var( --nys-font-decoration-thickness-regular, 7% );--_nys-button-text-decoration-thickness--hover: var( --nys-font-decoration-thickness-strong, 14% );--_nys-button-text-decoration-thickness--active: var( --nys-font-decoration-thickness-strong, 14% );--_nys-button-gap: var(--nys-space-50, 4px);--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-color: var(--nys-button-color, var(--nys-color-link, #004dd1));--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-link-strong, #003ba1) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-link-strongest, #002971) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-transparent, #ffffff00 );--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00)}:host([variant=ghost]){--_nys-button-gap: var(--nys-space-50, 4px);--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-color: var(--nys-button-color, var(--nys-color-text, #1b1b1b));--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-black-transparent-100, #0000001a) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text, #1b1b1b) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-black-transparent-200, #00000033) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text, #1b1b1b) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-transparent, #ffffff00 );--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00)}:host([variant=filled][inverted]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-surface, #ffffff) );--_nys-button-color: var(--nys-button-color, var(--nys-color-text, #1b1b1b));--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00);--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-neutral-100, #d0d0ce) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text, #1b1b1b) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-neutral-300, #a7a9ab) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text, #1b1b1b) );--_nys-button-background-color--disabled: var(--nys-color-text, #1b1b1b);--_nys-button-color--disabled: var(--nys-color-text-disabled, #62666a)}:host([variant=outline][inverted]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-surface-reverse, #1b1b1b) );--_nys-button-color: var( --nys-button-color, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-ink-reverse, #ffffff) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-surface-reverse, #1b1b1b) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text-reverse-weak, #d0d0ce) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-neutral-100, #d0d0ce) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-surface-reverse, #1b1b1b) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text-reverse-weaker, #bec0c1) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-neutral-300, #a7a9ab) );--_nys-button-background-color--disabled: var( --nys-color-surface-reverse, #1b1b1b );--_nys-button-color--disabled: var( --nys-color-text-reverse-disabled, #62666a );--_nys-button-border-color--disabled: var(--nys-color-neutral-600, #62666a)}:host([variant=text][inverted]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-color: var( --nys-button-color, var(--nys-color-link-reverse, #a7a9ab) );--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-link-reverse-strong, #ededed) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-reverse-strongest, #ffffff) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-transparent, #ffffff00 );--_nys-button-color--disabled: var( --nys-color-text-reverse-disabled, #62666a );--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00)}:host([variant=ghost][inverted]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-color: var( --nys-button-color, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-white-transparent-200, #ffffff33) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-white-transparent-300, #ffffff4d) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-transparent, #ffffff00 );--_nys-button-color--disabled: var(--nys-color-text-disabled, #62666a);--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00)}:host([inverted]){--_nys-button-outline-color: var(--nys-color-focus-reverse, #7aa5e7)}:host([circle]){--_nys-button-width: var(--_nys-button-height);--_nys-button-border-radius: var(--nys-radius-round, 1776px);--_nys-button-padding--y: 0;--_nys-button-padding--x: 0}:host([circle]) .nys-button{max-width:var(--_nys-button-height);max-height:var(--_nys-button-height)}.nys-button{width:var(--_nys-button-width);min-height:var(--_nys-button-height);border-radius:var(--_nys-button-border-radius);padding:var(--_nys-button-padding--y) var(--_nys-button-padding--x);display:flex;align-items:center;justify-content:var(--_nys-button-justify-content);gap:var(--_nys-button-gap);font-family:var(--_nys-button-font-family);font-size:var(--_nys-button-font-size);font-weight:var(--_nys-button-font-weight);line-height:var(--_nys-button-line-height);text-decoration:var(--_nys-button-text-decoration);box-sizing:border-box;background-color:var(--_nys-button-background-color);color:var(--_nys-button-color);border-color:var(--_nys-button-border-color);border-style:var(--_nys-button-border-style);border-width:var(--_nys-button-border-width);cursor:var(--_nys-button-cursor)}.nys-button:hover{background-color:var(--_nys-button-background-color--hover);color:var(--_nys-button-color--hover);border-color:var(--_nys-button-border-color--hover);text-decoration-thickness:var(--_nys-button-text-decoration-thickness--hover, auto)}.nys-button:active,.nys-button.active{background-color:var(--_nys-button-background-color--active);color:var(--_nys-button-color--active);border-color:var(--_nys-button-border-color--active);text-decoration-thickness:var(--_nys-button-text-decoration-thickness--active, auto)}.nys-button:disabled,a[disabled]{background-color:var(--_nys-button-background-color--disabled);color:var(--_nys-button-color--disabled);border-color:var(--_nys-button-border-color--disabled);--_nys-button-cursor: not-allowed}a[disabled]{pointer-events:none}.nys-button:focus-visible,.active-focus{outline-offset:var(--_nys-button-outline-offset);outline:solid var(--_nys-button-outline-width) var(--_nys-button-outline-color)}.nys-button__text{display:flex;align-items:center;-webkit-user-select:none;user-select:none}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}';
var _d = Object.defineProperty, G = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && _d(e, t, o), o;
};
const pi = class extends bd {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this.size = "md", this.fullWidth = !1, this.variant = "filled", this.inverted = !1, this.label = "", this.ariaControls = "", this.ariaExpanded = "", this.ariaCurrent = "", this.prefixIcon = "", this.suffixIcon = "", this.circle = !1, this.icon = "", this.disabled = !1, this.form = null, this.value = "", this.ariaDescribedBy = "", this.type = "button", this.onClick = null, this.href = "", this.target = "_self", this._hasPrefixSlot = !1, this._hasSuffixSlot = !1, this._hasCircleSlot = !1;
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   *
   * Form association, ElementInternals, and id generation are provided by
   * NysFormControlElement (@nysds/internals). super.connectedCallback() assigns
   * an id when one is not provided (prefix = the element's localName).
   */
  _onPrefixSlotChange(e) {
    const t = e.target;
    this._hasPrefixSlot = t.assignedElements({ flatten: !0 }).length > 0;
  }
  _onSuffixSlotChange(e) {
    const t = e.target;
    this._hasSuffixSlot = t.assignedElements({ flatten: !0 }).length > 0;
  }
  _onCircleSlotChange(e) {
    const t = e.target;
    this._hasCircleSlot = t.assignedElements({ flatten: !0 }).length > 0;
  }
  _manageFormAction() {
    typeof this.onClick == "function" && this.onClick !== null && this.onClick(new Event("click"));
    const e = this.internals?.form;
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
        const n = this.renderRoot.querySelector(
          "a.nys-button"
        );
        n && n.click();
      } else
        this._handleAnyAttributeFunction(), this._handleClick(e);
    }
  }
  _handleKeyup(e) {
    (e.code === "Space" || e.code === "Enter" || e.key === " " || e.key === "Enter") && this.renderRoot.querySelector(".nys-button")?.classList.remove("active");
  }
  /**
   * Handles inline onclick attributes for keyboard activation.
   *
   * Native clicks execute inline onclick attributes automatically, but
   * keyboard activation of the custom element does not trigger that native
   * behavior. Dispatching a synthetic click lets the browser's own inline
   * event handler mechanism execute any onclick attribute safely without
   * eval() or new Function().
   */
  _handleAnyAttributeFunction() {
    this.click();
  }
  focus(e) {
    const t = this.renderRoot.querySelector(
      this.href ? "a.nys-button" : "button.nys-button"
    );
    t ? t.focus(e) : super.focus(e);
  }
  render() {
    return y`
      ${this.href ? y`
            <div class="nys-button__linkwrapper">
              <a
                class="nys-button"
                name=${v(this.name ? this.name : void 0)}
                ?disabled=${this.disabled}
                aria-disabled="${this.disabled ? "true" : "false"}"
                value=${v(this.value ? this.value : void 0)}
                href=${this.href}
                target=${this.target}
                @click=${this._handleClick}
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
                @keydown="${this._handleKeydown}"
                @keyup="${this._handleKeyup}"
                aria-describedby=${v(this.ariaDescribedBy || void 0)}
                aria-expanded=${v(this.ariaExpanded || void 0)}
                aria-current=${v(this.ariaCurrent || void 0)}
              >
                <slot
                  name="prefix-icon"
                  @slotchange=${this._onPrefixSlotChange}
                  ?hidden=${!this.prefixIcon && !this._hasPrefixSlot}
                >
                  ${this.prefixIcon ? y`<nys-icon
                        size="16"
                        name=${this.prefixIcon}
                      ></nys-icon>` : ""}
                </slot>
                ${this.circle ? y`<div class="nys-button__text sr-only">
                      ${this.label}
                    </div>` : this.label ? y`<div class="nys-button__text">${this.label}</div>` : y` <slot class="nys-button__default-slot"></slot> `}
                <slot
                  name="suffix-icon"
                  @slotchange=${this._onSuffixSlotChange}
                  ?hidden=${!this.suffixIcon && !this._hasSuffixSlot}
                >
                  ${this.suffixIcon ? y`<nys-icon
                        size="16"
                        name=${this.suffixIcon}
                      ></nys-icon>` : ""}
                </slot>
                <slot
                  name="circle-icon"
                  @slotchange=${this._onCircleSlotChange}
                  ?hidden=${!this.circle || !this.icon && !this._hasCircleSlot}
                >
                  ${this.icon ? y`<nys-icon
                        size=${this.size === "sm" ? "24" : this.size === "lg" ? "40" : "32"}
                        name=${this.icon}
                      ></nys-icon>` : ""}
                </slot>
              </a>
            </div>
          ` : y`
            <button
              class="nys-button"
              name=${v(this.name ? this.name : void 0)}
              ?disabled=${this.disabled}
              form=${v(this.form || void 0)}
              value=${v(this.value ? this.value : void 0)}
              type=${this.type}
              aria-controls=${v(this.ariaControls || void 0)}
              @click=${this._handleClick}
              @focus=${this._handleFocus}
              @blur=${this._handleBlur}
              @keydown=${this._handleKeydown}
              @keyup=${this._handleKeyup}
              aria-describedby=${v(this.ariaDescribedBy || void 0)}
              aria-expanded=${v(this.ariaExpanded || void 0)}
              aria-current=${v(this.ariaCurrent || void 0)}
            >
              <slot
                name="prefix-icon"
                @slotchange=${this._onPrefixSlotChange}
                ?hidden=${!this.prefixIcon && !this._hasPrefixSlot}
              >
                ${this.prefixIcon ? y`<nys-icon
                      size="16"
                      name=${this.prefixIcon}
                    ></nys-icon>` : ""}
              </slot>
              ${this.circle ? y`<div class="nys-button__text sr-only">
                    ${this.label}
                  </div>` : this.label ? y`<div class="nys-button__text">${this.label}</div>` : y` <slot class="nys-button__default-slot"></slot> `}
              <slot
                name="suffix-icon"
                @slotchange=${this._onSuffixSlotChange}
                ?hidden=${!this.suffixIcon && !this._hasSuffixSlot}
              >
                ${this.suffixIcon ? y`<nys-icon
                      size="16"
                      name=${this.suffixIcon}
                    ></nys-icon>` : ""}
              </slot>
              <slot
                name="circle-icon"
                @slotchange=${this._onCircleSlotChange}
                ?hidden=${!this.circle || !this.icon && !this._hasCircleSlot}
              >
                ${this.icon ? y`<nys-icon
                      size=${this.size === "sm" ? "24" : this.size === "lg" ? "40" : "32"}
                      name=${this.icon}
                    ></nys-icon>` : ""}
              </slot>
            </button>
          `}
    `;
  }
};
pi.styles = C(vd), pi.shadowRootOptions = {
  ...I.shadowRootOptions,
  delegatesFocus: !0
};
let W = pi;
G([
  a({ type: String, reflect: !0 })
], W.prototype, "id");
G([
  a({ type: String, reflect: !0 })
], W.prototype, "name");
G([
  a({ type: String, reflect: !0 })
], W.prototype, "size");
G([
  a({ type: Boolean, reflect: !0 })
], W.prototype, "fullWidth");
G([
  a({ type: String, reflect: !0 })
], W.prototype, "variant");
G([
  a({ type: Boolean, reflect: !0 })
], W.prototype, "inverted");
G([
  a({ type: String })
], W.prototype, "label");
G([
  a({ type: String })
], W.prototype, "ariaControls");
G([
  a({ type: String })
], W.prototype, "ariaExpanded");
G([
  a({ type: String })
], W.prototype, "ariaCurrent");
G([
  a({ type: String })
], W.prototype, "prefixIcon");
G([
  a({ type: String })
], W.prototype, "suffixIcon");
G([
  a({ type: Boolean, reflect: !0 })
], W.prototype, "circle");
G([
  a({ type: String })
], W.prototype, "icon");
G([
  a({ type: Boolean, reflect: !0 })
], W.prototype, "disabled");
G([
  a({ type: String, reflect: !0 })
], W.prototype, "form");
G([
  a({ type: String })
], W.prototype, "value");
G([
  a({ type: String })
], W.prototype, "ariaDescribedBy");
G([
  a({ type: String, reflect: !0 })
], W.prototype, "type");
G([
  a({ attribute: !1 })
], W.prototype, "onClick");
G([
  a({ type: String })
], W.prototype, "href");
G([
  a({ type: String, reflect: !0 })
], W.prototype, "target");
G([
  $()
], W.prototype, "_hasPrefixSlot");
G([
  $()
], W.prototype, "_hasSuffixSlot");
G([
  $()
], W.prototype, "_hasCircleSlot");
customElements.get("nys-button") || customElements.define("nys-button", W);
const gd = ':host{--_nys-alert-border-width: var(--nys-border-width-lg, 4px);--_nys-alert-border-radius: var(--nys-radius-md, 4px);--_nys-alert-color: var( --nys-alert-color, var(--nys-color-text, var(--nys-color-neutral-900, #1b1b1b)) );--_nys-alert-color--link: var( --nys-alert-color--link, var(--nys-color-link, var(--nys-color-blue-600, #004dd1)) );--_nys-alert-color--link--hover: var( --nys-alert-color--link--hover, var(--nys-color-link-strong, var(--nys-color-blue-700, #003ba1)) );--_nys-alert-color--link--active: var( --nys-alert-color--link--active, var(--nys-color-link-strongest, var(--nys-color-blue-800, #002971)) );--_nys-alert-padding: var(--nys-space-250, 20px);--_nys-alert-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-alert-font-size: var(--nys-font-size-ui-md, 16px);--_nys-alert-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-alert-letter-spacing: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) );--_nys-alert-font-weight--regular: var(--nys-font-weight-regular, 400);--_nys-alert-font-weight--semibold: var(--nys-font-weight-semibold, 600);--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-base, var(--nys-color-neutral-600, #62666a)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-base-weak, var(--nys-color-neutral-10, #f6f6f6)) );--_nys-alert-gap--icon: var(--nys-space-150, 12px);--_nys-alert-gap--text: var(--nys-space-50, 4px);--_nys-alert-gap--actions: var(--nys-space-150, 12px)}.nys-alert__container{display:flex;background-color:var(--_nys-alert-background-color);border-inline-start:var(--_nys-alert-border-width) solid var(--_nys-alert-border-color);border-radius:var(--_nys-alert-border-radius);color:var(--_nys-alert-color);padding:var(--_nys-alert-padding);font-style:normal;font-family:var(--_nys-alert-font-family);font-size:var(--_nys-alert-font-size);line-height:var(--_nys-alert-line-height);letter-spacing:var(--_nys-alert-letter-spacing);gap:var(--_nys-alert-gap--icon)}p{margin:0}::slotted(p){margin-bottom:0!important}.nys-alert__icon{margin-top:-2px}a,a:visited{font-weight:var(--_nys-alert-font-weight--semibold);font-size:var(--_nys-alert-font-size);color:var(--_nys-alert-color--link)}a:hover{color:var(--_nys-alert-color--link--hover)}a:active{color:var(--_nys-alert-color--link--active)}::slotted(a){color:var(--_nys-alert-color--link)}.nys-alert__texts{display:flex;flex-direction:column;flex:1;gap:var(--_nys-alert-gap--text)}.nys-alert__header{margin:0;font-weight:var(--_nys-alert-font-weight--semibold)}.nys-alert__text{font-weight:var(--_nys-alert-font-weight--regular);margin:0}::slotted(*){font-weight:var(--_nys-alert-font-weight--regular);margin:0}.nys-alert--centered{display:flex;align-items:center}.nys-alert--centered .nys-alert__header{margin-bottom:-3px}.nys-alert--centered div[part=nys-alert__icon]{margin-top:0;display:flex;align-items:center;justify-content:center}.nys-alert__actions{display:flex;gap:var(--_nys-alert-gap--actions);flex-wrap:wrap}#dismiss-btn{margin-top:-8px}:host([type=info]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-info, var(--nys-color-blue-600, #004dd1)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-info-weak, var(--nys-color-blue-50, #e5effa)) )}:host([type=success]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-success, var(--nys-color-green-600, #1e752e)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-success-weak, var(--nys-color-green-50, #e8f1ea)) )}:host([type=warning]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-warning, var(--nys-color-yellow-400, #face00)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-warning-weak, var(--nys-color-yellow-50, #fefae5)) )}:host([type=danger]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-danger, var(--nys-color-red-600, #b52c2c)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-danger-weak, var(--nys-color-red-50, #f7eaea)) )}:host([type=emergency]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-emergency, var(--nys-color-red-800, #721c1c)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-emergency, var(--nys-color-red-800, #721c1c)) );--_nys-alert-color: var( --nys-alert-color, var(--nys-color-text-reverse, var(--nys-color-white, #ffffff)) );--_nys-alert-color--link: var( --nys-alert-color--link, var(--nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff)) );--_nys-alert-color--link--hover: var( --nys-alert-color--link--hover, var(--nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff)) );--_nys-alert-color--link--active: var( --nys-alert-color--link--active, var(--nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff)) )}:host([type=emergency]) a:hover{text-decoration-thickness:2px}:host([type=emergency]) a:active{text-decoration-thickness:3px}';
var md = Object.defineProperty, at = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && md(e, t, o), o;
};
const Li = class Li extends D {
  constructor() {
    super(...arguments), this.id = "", this.heading = "", this.icon = "", this.dismissible = !1, this.duration = 0, this.text = "", this.primaryAction = "", this.secondaryAction = "", this.primaryLabel = "Learn more", this.secondaryLabel = "Dismiss", this.type = "base", this._alertClosed = !1, this._slotHasContent = !0, this._timeoutId = null;
  }
  /**
   * Returns the ARIA role and aria-live setting for the alert's live region based on type.
   * - `warning`/`danger`/`emergency` => role="alert", aria-live="assertive" (urgent, interrupts)
   * - `base`/`info`/`success` => role="status", aria-live="polite" (waits its turn)
   *
   * `aria-live` is set explicitly alongside `role` (rather than relying on the role's implicit
   * live-region semantics) for more consistent behavior across browser/AT combinations.
   */
  get ariaAttributes() {
    const e = this.type === "warning" || this.type === "danger" || this.type === "emergency";
    return {
      role: e ? "alert" : "status",
      ariaLive: e ? "assertive" : "polite"
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.duration > 0 && (this._timeoutId = setTimeout(() => {
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
        (n) => n.nodeType === Node.ELEMENT_NODE || n.nodeType === Node.TEXT_NODE && n.textContent?.trim()
      );
      await Promise.resolve(), this._slotHasContent = t.length > 0;
    } else
      await Promise.resolve(), this._slotHasContent = !1;
  }
  render() {
    const { role: e, ariaLive: t } = this.ariaAttributes;
    return y`
      ${this._alertClosed ? "" : y` <div
            class="nys-alert__container ${this._slotHasContent || this.text?.trim().length > 0 ? "" : "nys-alert--centered"}"
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
              aria-live=${t}
              aria-atomic="true"
            >
              ${this.heading?.trim() ? y`<p class="nys-alert__header">${this.heading}</p>` : ""}
              ${this._slotHasContent ? y`<slot></slot>` : this.text?.trim().length > 0 ? y`<p class="nys-alert__text">${this.text}</p>` : ""}
              ${this.primaryAction || this.secondaryAction ? y`<div class="nys-alert__actions">
                    ${this.primaryAction ? y`<a
                          href=${v(this.primaryAction || void 0)}
                          class="nys-alert__action nys-alert__primary"
                        >
                          ${this.primaryLabel}
                        </a>` : ""}
                    ${this.secondaryAction ? y`<a
                          href=${v(this.secondaryAction || void 0)}
                          class="nys-alert__action nys-alert__secondary"
                        >
                          ${this.secondaryLabel}
                        </a>` : ""}
                  </div> ` : ""}
            </div>
            ${this.dismissible ? y` <nys-button
                  id="dismiss-btn"
                  variant="ghost"
                  circle
                  icon="close"
                  size="sm"
                  ?inverted=${this.type === "emergency"}
                  label="${this.heading}, alert, Close"
                  @nys-click=${this._closeAlert}
                  style=${v(
      this.type === "emergency" ? "--_nys-button-outline-color: var(--nys-color-ink-reverse, var(--nys-color-white, #fff));" : void 0
    )}
                ></nys-button>` : ""}
          </div>`}
    `;
  }
};
Li.styles = C(gd);
let Pe = Li;
at([
  a({ type: String, reflect: !0 })
], Pe.prototype, "id");
at([
  a({ type: String })
], Pe.prototype, "heading");
at([
  a({ type: String })
], Pe.prototype, "icon");
at([
  a({ type: Boolean, reflect: !0 })
], Pe.prototype, "dismissible");
at([
  a({ type: Number, reflect: !0 })
], Pe.prototype, "duration");
at([
  a({ type: String })
], Pe.prototype, "text");
at([
  a({ type: String })
], Pe.prototype, "primaryAction");
at([
  a({ type: String })
], Pe.prototype, "secondaryAction");
at([
  a({ type: String })
], Pe.prototype, "primaryLabel");
at([
  a({ type: String })
], Pe.prototype, "secondaryLabel");
at([
  a({ type: String, reflect: !0 })
], Pe.prototype, "type");
at([
  $()
], Pe.prototype, "_alertClosed");
at([
  $()
], Pe.prototype, "_slotHasContent");
customElements.get("nys-alert") || customElements.define("nys-alert", Pe);
const xd = ":host{--_nys-avatar-border-radius: var(--nys-radius-round, 1776px);--_nys-avatar-size: var(--nys-avatar-size, var(--nys-font-size-6xl, 36px));--_nys-avatar-shape: var(--nys-radius-round, 1776px);--_nys-avatar-border-color: var(--nys-color-ink-reverse, #ffffff);--_nys-avatar-border-size: var(--nys-border-width-sm, 1px);--_nys-avatar-width: var(--nys-font-size-6xl, 36px);--_nys-avatar-color: var(--nys-color-theme, #154973);--_nys-avatar-background-color: var(--nys-color-theme-weaker, #eff6fb);--_nys-avatar-outline-color: var(--nys-color-focus, #004dd1);--_nys-avatar-outline-width: var(--nys-border-width-md, 2px);--_nys-avatar-outline-offset: var(--nys-space-2px, 2px)}.nys-avatar{display:inline-block}.nys-avatar__component{display:flex;justify-content:center;align-items:center;border-radius:var(--_nys-avatar-border-radius);width:var(--_nys-avatar-size);height:var(--_nys-avatar-size);font-size:var(--_nys-avatar-size);overflow:hidden;box-sizing:border-box;color:var(--_nys-avatar-color);background-color:var(--_nys-avatar-background-color);border:var(--_nys-avatar-border-size) solid var(--_nys-avatar-border-color);outline-offset:var(--_nys-avatar-outline-offset);transition:all .15s ease-in-out;-webkit-user-select:none;user-select:none}:host([interactive]:not([disabled])) button.nys-avatar__component{appearance:none;border:var(--_nys-avatar-border-size) solid var(--_nys-avatar-border-color);padding:0;cursor:pointer}:host([interactive]:not([disabled])) button.nys-avatar__component:hover{--_nys-avatar-background-color: var(--nys-color-theme-mid, #457aa5);--_nys-avatar-color: var(--nys-color-text-reverse, #ffffff)}:host([interactive]:not([disabled])) button.nys-avatar__component:active{--_nys-avatar-background-color: var(--nys-color-theme-strong, #0e324f);--_nys-avatar-color: var(--nys-color-text-reverse, #ffffff)}:host([interactive]:not([disabled])) button.nys-avatar__component:focus-visible{outline:solid var(--_nys-avatar-outline-width) var(--_nys-avatar-outline-color);outline-offset:var(--_nys-avatar-outline-offset)}:host([disabled]) .nys-avatar__component{--_nys-avatar-color: var(--nys-color-text-disabled, #bec0c1);--_nys-avatar-background-color: var(--nys-color-neutral-10, #f6f6f6);cursor:not-allowed}:host([disabled]) .nys-avatar__component:focus-within{outline:solid var(--_nys-avatar-outline-width) var(--_nys-avatar-outline-color)}div[part=nys-avatar__icon]{display:flex;align-items:center;justify-content:center}.nys-avatar__initials{display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:calc(var(--_nys-avatar-width) * .5);font-weight:700;text-transform:uppercase}.nys-avatar__image{width:100%;height:100%;object-fit:cover}.nys-avatar__icon{width:100%;height:100%;fill:currentcolor}";
var wd = Object.defineProperty, Pt = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && wd(e, t, o), o;
};
const Ti = class Ti extends D {
  constructor() {
    super(...arguments), this.id = "", this.ariaLabel = "", this.image = "", this.initials = "", this.icon = "", this.color = "", this.interactive = !1, this.disabled = !1, this.lazy = !1, this._slotHasContent = !1, this._warnedMissingName = !1;
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback();
  }
  updated(e) {
    super.updated(e), this._warnMissingInteractiveName();
  }
  async _handleSlotChange() {
    const e = this.shadowRoot?.querySelector("slot");
    if (!e) {
      this._slotHasContent = !1;
      return;
    }
    await Promise.resolve();
    const t = e.assignedNodes({ flatten: !0 }).filter(
      (n) => n.nodeType === Node.ELEMENT_NODE || n.nodeType === Node.TEXT_NODE && n.textContent?.trim()
    );
    this._slotHasContent = t.length > 0;
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  /**
   * The label with all whitespace — including the non-breaking space consumers
   * reach for when they want "no label but the prop is required" — collapsed and
   * trimmed. A name made only of blank characters is announced as an empty name,
   * so `" "` and `"&nbsp;"` must resolve to no label at all rather than to a
   * label the user can neither hear nor act on.
   */
  get _cleanAriaLabel() {
    return (this.ariaLabel ?? "").replace(/[\s\u00a0]+/g, " ").trim();
  }
  /**
   * Warns when an interactive avatar has no accessible name.
   *
   * An interactive avatar renders a `<button>`, and a button with no name is
   * unusable by screen reader and voice-control users (WCAG 4.1.2). The component
   * used to paper over this with a captive default name of "Avatar", which told
   * the user nothing ("button, avatar") and hid the mistake from audits (#1093).
   * The name is the author's to supply, so the component surfaces the gap here
   * instead of inventing one. `ariaLabel` deliberately stays optional —
   * decorative avatars are legitimate, and making it required would break the
   * consumers already shipping without it.
   */
  _warnMissingInteractiveName() {
    if (!this.interactive || this._cleanAriaLabel) {
      this._warnedMissingName = !1;
      return;
    }
    this._warnedMissingName || (this._warnedMissingName = !0, console.warn(
      `nys-avatar: interactive avatar "${this.id}" has no accessible name — set ariaLabel to describe who or what it represents (WCAG 4.1.2).`
    ));
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
    const e = "var(--nys-color-ink, #000)", t = "var(--nys-color-ink-reverse, #fff)", n = "var(--nys-color-text, #000)", o = "var(--nys-color-text-reverse, #fff)";
    if (!this.color) return;
    const s = document.createElement("div");
    s.style.color = this.color, document.body.appendChild(s);
    const i = getComputedStyle(s).color;
    document.body.removeChild(s);
    const d = i.match(/\d+/g);
    if (!d) return;
    const p = Number(d[0]), b = Number(d[1]), m = Number(d[2]), k = (0.299 * p + 0.587 * b + 0.114 * m) / 255 < 0.5;
    return this.initials?.length > 0 ? k ? o : n : k ? t : e;
  }
  render() {
    const e = this._cleanAriaLabel, t = this._colorStyle(), n = this.image?.length > 0 ? y`<img
            part="nys-avatar__image"
            class="nys-avatar__image"
            src=${this.image}
            alt=${e || ""}
            loading=${this.lazy ? "lazy" : "eager"}
          />` : this.initials?.length > 0 ? y`<span
              part="nys-avatar__initials"
              class="nys-avatar__initials"
              aria-hidden="true"
              >${this.initials}</span
            >` : y`<div part="nys-avatar__icon">
              <slot @slotchange=${this._handleSlotChange}></slot>
              ${this._slotHasContent ? null : y`<nys-icon
                    aria-hidden="true"
                    name=${this.icon?.length > 0 ? this.icon : "account_circle"}
                  ></nys-icon>`}
            </div>`, o = this.interactive ? y`<button
          part="nys-avatar"
          class="nys-avatar__component"
          style=${v(t || void 0)}
          aria-label=${v(e || void 0)}
          ?disabled=${this.disabled}
        >
          ${n}
        </button>` : y`<div
          part="nys-avatar"
          class="nys-avatar__component"
          style=${v(t || void 0)}
          role=${v(this.image ? void 0 : e ? "img" : void 0)}
          aria-label=${v(this.image ? void 0 : e || void 0)}
          aria-hidden=${v(this.image || e ? void 0 : "true")}
        >
          ${n}
        </div>`;
    return y`
      <div class="nys-avatar">
        <div class="nys-avatar__content">${o}</div>
      </div>
    `;
  }
};
Ti.styles = C(xd);
let st = Ti;
Pt([
  a({ type: String, reflect: !0 })
], st.prototype, "id");
Pt([
  a({ type: String })
], st.prototype, "ariaLabel");
Pt([
  a({ type: String })
], st.prototype, "image");
Pt([
  a({ type: String })
], st.prototype, "initials");
Pt([
  a({ type: String })
], st.prototype, "icon");
Pt([
  a({ type: String })
], st.prototype, "color");
Pt([
  a({ type: Boolean, reflect: !0 })
], st.prototype, "interactive");
Pt([
  a({ type: Boolean, reflect: !0 })
], st.prototype, "disabled");
Pt([
  a({ type: Boolean, reflect: !0 })
], st.prototype, "lazy");
Pt([
  $()
], st.prototype, "_slotHasContent");
customElements.get("nys-avatar") || customElements.define("nys-avatar", st);
const kd = ".nys-backtotop{--_nys-button-border-radius: var(--nys-radius-round, 1776px);--_nys-button-padding--y: var(--nys-space-100, 8px);--_nys-button-padding--x: var(--nys-space-200, 16px);position:fixed;bottom:1rem;right:1rem;z-index:9999;display:none}.left{left:1rem;right:auto}.visible{display:inline-flex}";
var Cd = Object.defineProperty, wr = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Cd(e, t, o), o;
};
const Di = class Di extends D {
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.position = "right", this.visible = !1, this.isMobile = !1, this.forceVisible = !1, this.mediaQuery = null, this._handleScroll = this._handleScroll.bind(this), this._handleResize = this._handleResize.bind(this);
  }
  connectedCallback() {
    super.connectedCallback(), !(typeof window > "u") && (this.mediaQuery = window.matchMedia("(max-width: 480px)"), this.forceVisible = this.hasAttribute("visible"), window.addEventListener("scroll", this._handleScroll), this.mediaQuery.addEventListener("change", this._handleResize), this._handleResize());
  }
  disconnectedCallback() {
    typeof window < "u" && (window.removeEventListener("scroll", this._handleScroll), this.mediaQuery?.removeEventListener("change", this._handleResize)), super.disconnectedCallback();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _handleScroll() {
    if (typeof window > "u" || this.forceVisible) return;
    const e = window.innerHeight, t = document.documentElement.scrollHeight;
    this.visible = t >= e * 4 && window.scrollY > e * 1.5;
  }
  _scrollToTop() {
    if (typeof window > "u") return;
    const t = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches ? "auto" : "smooth";
    if (window.scrollY === 0) {
      window.scrollTo({ top: 0, behavior: t }), this._moveFocusToTop();
      return;
    }
    window.scrollTo({ top: 0, behavior: t });
    const n = () => {
      window.removeEventListener("scroll", n), this._moveFocusToTop();
    };
    window.addEventListener("scroll", n, { once: !0 });
  }
  _moveFocusToTop() {
    document.body.hasAttribute("tabindex") || document.body.setAttribute("tabindex", "-1"), document.body.focus();
  }
  _handleResize() {
    this.mediaQuery && (this.isMobile = this.mediaQuery.matches);
  }
  render() {
    const e = [
      "nys-backtotop",
      this.position,
      this.visible ? "visible" : ""
    ].filter(Boolean).join(" ");
    return y`<nys-button
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
Di.styles = C(kd);
let xn = Di;
wr([
  a({ type: String, reflect: !0 })
], xn.prototype, "id");
wr([
  a({ type: String })
], xn.prototype, "position");
wr([
  a({ type: Boolean, reflect: !0 })
], xn.prototype, "visible");
wr([
  $()
], xn.prototype, "isMobile");
wr([
  $()
], xn.prototype, "forceVisible");
customElements.get("nys-backtotop") || customElements.define("nys-backtotop", xn);
const $d = '@charset "UTF-8";:host{--_nys-breadcrumbs-padding: var(--nys-space-150, 12px) var(--nys-space-250, 20px);--_nys-breadcrumbs-gap: var(--nys-space-100, 8px);--_nys-breadcrumbs-background: transparent;--_nys-breadcrumbitem-gap: var(--nys-space-50, 4px);--_nys-breadcrumbitem-color: var(--nys-color-text-weak, #4a4d4f);--_nys-breadcrumbitem-color--focus: var(--nys-color-focus, #004dd1);--_nys-breadcrumbitem-outline-width: var(--nys-border-width-md, 2px);--_nys-breadcrumbitem-outline-radius: var(--nys-radius-md, 4px);--_nys-breadcrumb-gap--ellipsis: var(--nys-space-100, 8px);--_nys-breadcrumb-color--ellipsis: var(--nys-color-text-weak, #4a4d4f);--_nys-breadcrumbs-font-size: var(--nys-font-size-ui-md, 16px);--_nys-breadcrumbs-font-weight: var(--nys-font-weight-semibold, 600);--_nys-breadcrumbs-font-weight--current: var(--nys-font-weight-regular, 400);--_nys-breadcrumbs-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-breadcrumbs-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-breadcrumbs-max-width--content: var( --nys-max-width--content, var(--nys-breadcrumbs-max-width--content, 1280px) )}.nys-breadcrumbs{padding:var(--_nys-breadcrumbs-padding);font-family:var(--_nys-breadcrumbs-font-family);font-size:var(--_nys-breadcrumbs-font-size);font-weight:var(--_nys-breadcrumbs-font-weight);line-height:var(--_nys-breadcrumbs-line-height);background:var(--_nys-breadcrumbs-background);display:flex;justify-content:center}.nys-breadcrumbs.nys-breadcrumbs--background-bar{--_nys-breadcrumbs-background: var(--nys-color-theme-faint, #f7fafd)}.nys-breadcrumbs ol{padding:0;margin:0;display:flex;align-items:center;justify-content:flex-start;flex-wrap:wrap;gap:var(--_nys-breadcrumbs-gap);list-style:none;max-width:var(--_nys-breadcrumbs-max-width--content);width:100%}:host([size=sm]){--_nys-breadcrumbs-font-size: var(--nys-font-size-ui-sm, 14px)}:host([disabled]) .nys-breadcrumbitem a{cursor:not-allowed;--_nys-breadcrumbitem-color: var(--nys-color-text-disabled, #cec0c1)}:host([disabled]) .nys-breadcrumbitem a:hover{text-decoration:none}:host([disabled]) .nys-breadcrumbs__ellipsis .ellipsis-btn{cursor:not-allowed;opacity:.4;pointer-events:none}:host([disabled]) .nys-breadcrumbs__ellipsis .ellipsis-btn:hover{text-decoration:none}:host([disabled]) nys-icon{color:var(--nys-color-text-disabled, #cec0c1)}.nys-breadcrumbitem{padding:0;display:flex;align-items:center;gap:var(--_nys-breadcrumbitem-gap);color:var(--_nys-breadcrumbitem-color);font-weight:var(--_nys-breadcrumbs-font-weight--current);white-space:nowrap}.nys-breadcrumbitem.hide{display:none}.nys-breadcrumbitem a{text-decoration:none;color:var(--_nys-breadcrumbitem-color);font-weight:var(--_nys-breadcrumbs-font-weight)}.nys-breadcrumbitem a:hover{text-decoration-line:underline;text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:14%;text-underline-offset:auto}.nys-breadcrumbitem a:active{text-decoration-thickness:14%;--_nys-breadcrumbitem-color: var(--nys-color-text)}.nys-breadcrumbitem a:focus-visible{border-radius:var(--_nys-breadcrumbitem-outline-radius);outline:var(--_nys-breadcrumbitem-outline-width) solid var(--_nys-breadcrumbitem-color--focus);outline-offset:2px}.nys-breadcrumbs__ellipsis{display:flex;gap:var(--_nys-breadcrumb-gap--ellipsis);margin:0;align-items:center;color:var(--_nys-breadcrumb-color--ellipsis)}.nys-breadcrumbs__ellipsis .ellipsis-btn{border:none;padding:0;background-color:inherit;text-decoration:none;font-family:var(--_nys-breadcrumbs-font-family);font-size:var(--_nys-breadcrumbs-font-size);font-weight:var(--_nys-breadcrumbs-font-weight);line-height:var(--_nys-breadcrumbs-line-height);color:var(--_nys-breadcrumb-color--ellipsis);cursor:pointer}.nys-breadcrumbs__ellipsis .ellipsis-btn:hover{text-decoration-line:underline;text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:7%;text-underline-offset:auto}.nys-breadcrumbs__ellipsis .ellipsis-btn:active{text-decoration-thickness:14%}.nys-breadcrumbs__ellipsis .ellipsis-btn:focus-visible{border-radius:var(--_nys-breadcrumbitem-outline-radius);outline:var(--_nys-breadcrumbitem-outline-width) solid var(--_nys-breadcrumbitem-color--focus);outline-offset:2px}.nys-breadcrumbs__ellipsis nys-icon{margin-top:-3px}:host-context([dir=rtl]) nys-icon{transform:scaleX(-1)}@media(min-width:480px){:host{--_nys-breadcrumbs-padding: var(--nys-space-150, 12px) var(--nys-space-250, 20px)}}@media(min-width:768px){:host{--_nys-breadcrumbs-padding: var(--nys-space-150, 12px) var(--nys-space-400, 32px)}}@media(min-width:1024px){:host{--_nys-breadcrumbs-padding: var(--nys-space-150, 12px) var(--nys-space-400, 32px)}}@media(min-width:1280px){:host{--_nys-breadcrumbs-padding: var(--nys-space-150, 12px) var(--nys-space-800, 64px)}}';
var Sd = Object.defineProperty, no = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Sd(e, t, o), o;
};
const zi = class zi extends D {
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
  connectedCallback() {
    super.connectedCallback(), this._mediaQuery = window.matchMedia("(max-width: 767px)"), this._mediaQuery.addEventListener("change", this._updateCollapseThreshold);
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
    )?.assignedElements({ flatten: !0 }) ?? []).find((n) => n.tagName === "OL") ?? null;
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
    const t = this._getAnchor(e), n = t?.getAttribute("href") ?? "", o = t?.textContent?.trim() ?? e.textContent?.trim() ?? "", s = document.createElement("li");
    s.className = "nys-breadcrumbitem";
    const i = document.createElement("nys-icon");
    i.setAttribute("name", "arrow_back"), i.setAttribute("size", "16");
    const d = document.createElement("a");
    return this.disabled || (d.href = n), d.textContent = o, this.disabled && d.setAttribute("aria-disabled", "true"), s.appendChild(i), s.appendChild(d), s;
  }
  _createCrumbElement(e, t) {
    const n = this._getAnchor(e), o = n?.getAttribute("href") ?? "", s = n?.textContent?.trim() ?? e.textContent?.trim() ?? "", i = document.createElement("li");
    if (i.className = "nys-breadcrumbitem", t)
      return i.setAttribute("aria-current", "page"), i.textContent = s, i;
    const d = document.createElement("a");
    this.disabled || (d.href = o), d.textContent = s, this.disabled && d.setAttribute("aria-disabled", "true");
    const p = document.createElement("nys-icon");
    return p.setAttribute("name", "chevron_right"), p.setAttribute("size", "14"), i.appendChild(d), i.appendChild(p), i;
  }
  /**
   * Main logic for cloning and handling user slots.
   * New <ol>, <li>, and <a> tags are created and rendered out as crumbs for the breadcrumbs trail.
   */
  _handleSlotChange() {
    const e = this._mediaQuery?.matches ?? window.innerWidth < 768, t = this.shadowRoot?.getElementById("crumb-list");
    if (!t) return;
    const n = this._getSlottedItems();
    if (n.length === 0) return;
    t.innerHTML = "";
    const o = (x = 0) => {
      const k = n[x].cloneNode(!0), R = this._createBackToParentElement(k);
      t.appendChild(R);
    };
    if (n.length === 1) {
      o();
      return;
    }
    if (e && this.backToParent) {
      const x = this._isCurrentPage(n[n.length - 1]);
      o(x ? n.length - 2 : n.length - 1);
      return;
    }
    const s = !this._manuallyExpanded && n.length > this._collapseThreshold, i = this.collapsed || s, d = n[n.length - 1], p = this._isCurrentPage(d), b = Math.min(1, n.length - 1), m = Math.min(
      p ? 2 : 1,
      n.length - b
    );
    n.forEach((x, k) => {
      const R = k < b, pe = k >= n.length - m, fe = R || pe, oe = i && !fe, ie = this._createCrumbElement(x, this._isCurrentPage(x));
      if (ie.setAttribute("data-cloned", "true"), oe && ie.classList.add("hide"), fe || ie.classList.add("intermediate"), t.appendChild(ie), k === b - 1 && i && n.length > 2) {
        const Qe = document.createElement("li");
        Qe.classList.add("nys-breadcrumbs__ellipsis");
        const re = document.createElement("a");
        re.classList.add("ellipsis-btn"), re.setAttribute("aria-label", "Show more links"), re.setAttribute("role", "button"), re.setAttribute("href", "#"), re.textContent = "…";
        const be = (Ee) => {
          Ee.preventDefault(), this._manuallyExpanded = !0, this.collapsed = !1, this._handleSlotChange(), this._dispatchExpandEvent(), this._moveFocusToFirstExpandCrumb();
        };
        re.addEventListener("click", be), re.addEventListener("keydown", (Ee) => {
          Ee.key === " " && be(Ee);
        });
        const Se = document.createElement("nys-icon");
        Se.setAttribute("name", "chevron_right"), Se.setAttribute("size", "14"), Qe.appendChild(re), Qe.appendChild(Se), t.appendChild(Qe);
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
    return y`<nav
      class="nys-breadcrumbs ${this.backgroundBar ? "nys-breadcrumbs--background-bar" : ""}"
      aria-label=${this.ariaLabel || "Breadcrumb"}
    >
      <ol id="crumb-list"></ol>
      <slot style="display: none;" @slotchange=${this._handleSlotChange}></slot>
    </nav>`;
  }
};
zi.styles = C($d);
let Mt = zi;
no([
  a({ type: String, reflect: !0 })
], Mt.prototype, "id");
no([
  a({ type: String })
], Mt.prototype, "ariaLabel");
no([
  a({ type: String, reflect: !0 })
], Mt.prototype, "size");
no([
  a({ type: Boolean })
], Mt.prototype, "backToParent");
no([
  a({ type: Boolean })
], Mt.prototype, "collapsed");
no([
  a({ type: Boolean })
], Mt.prototype, "backgroundBar");
no([
  a({ type: Boolean, reflect: !0 })
], Mt.prototype, "disabled");
customElements.get("nys-breadcrumbs") || customElements.define("nys-breadcrumbs", Mt);
const Ed = ':host{--_nys-button-width: fit-content;--_nys-button-height: var(--nys-size-600, 48px);--_nys-button-border-radius: var(--nys-radius-xl, 12px);--_nys-button-padding--y: calc( var(--nys-space-150, 12px) - var(--nys-border-width-md, 2px) );--_nys-button-cursor: pointer;--_nys-button-padding--x: calc( var(--nys-space-250, 20px) - var(--nys-border-width-md, 2px) );--_nys-button-gap: var(--nys-space-100, 8px);--_nys-button-justify-content: center;--_nys-button-border-style: solid;--_nys-button-border-width: var(--nys-border-width-md, 2px);--_nys-button-outline-width: var(--nys-border-width-md, 2px);--_nys-button-outline-offset: var(--nys-space-2px, 2px);--_nys-button-outline-color: var(--nys-color-focus, #004dd1);--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-theme, #154973) );--_nys-button-color: var( --nys-button-color, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-theme-strong, #0e324f) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-theme-stronger, #081b2b) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00);--_nys-button-font-size: var(--nys-font-size-ui-md, 16px);--_nys-button-font-weight: var(--nys-font-weight-semibold, 600);--_nys-button-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-button-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-button-text-decoration: none;display:inline-flex;width:var(--_nys-button-width);vertical-align:middle}:host([size=sm]){--_nys-button-height: var(--nys-size-500, 40px);--_nys-button-padding--y: calc( var(--nys-space-100, 8px) - var(--nys-border-width-md, 2px) );--_nys-button-padding--x: calc( var(--nys-space-200, 16px) - var(--nys-border-width-md, 2px) )}:host([size=lg]){--_nys-button-height: var(--nys-size-700, 56px);--_nys-button-padding--y: calc( var(--nys-space-200, 16px) - var(--nys-border-width-md, 2px) );--_nys-button-padding--x: calc( var(--nys-space-300, 24px) - var(--nys-border-width-md, 2px) )}:host([fullWidth]){width:100%}:host([fullWidth]) .nys-button__linkwrapper{width:100%}:host([fullWidth]) .nys-button{width:100%}:host([variant=filled]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-theme, #154973) );--_nys-button-color: var( --nys-button-color, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-theme-strong, #0e324f) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color--hover: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-theme-stronger, #081b2b) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color--active: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1)}:host([variant=outline]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-surface, #ffffff) );--_nys-button-color: var(--nys-button-color, var(--nys-color-theme, #154973));--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-theme, #154973) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-theme-weaker, #eff6fb) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-theme, #154973) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-theme, #154973) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-theme-weak, #cddde9) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-theme, #154973) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-theme, #154973) );--_nys-button-background-color--disabled: var(--nys-color-surface, #ffffff);--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-button-border-color--disabled: var(--nys-color-neutral-100, #d0d0ce)}:host([variant=text]){--_nys-button-height: fit-content;--_nys-button-border-radius: var(--nys-radius-md, 4px);--_nys-button-padding--y: var(--nys-space-2px, 2px);--_nys-button-padding--x: 0;--_nys-button-border-width: 0px;--_nys-button-text-decoration: underline;--_nys-button-text-decoration-thickness: var( --nys-font-decoration-thickness-regular, 7% );--_nys-button-text-decoration-thickness--hover: var( --nys-font-decoration-thickness-strong, 14% );--_nys-button-text-decoration-thickness--active: var( --nys-font-decoration-thickness-strong, 14% );--_nys-button-gap: var(--nys-space-50, 4px);--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-color: var(--nys-button-color, var(--nys-color-link, #004dd1));--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-link-strong, #003ba1) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-link-strongest, #002971) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-transparent, #ffffff00 );--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00)}:host([variant=ghost]){--_nys-button-gap: var(--nys-space-50, 4px);--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-color: var(--nys-button-color, var(--nys-color-text, #1b1b1b));--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-black-transparent-100, #0000001a) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text, #1b1b1b) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-black-transparent-200, #00000033) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text, #1b1b1b) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-transparent, #ffffff00 );--_nys-button-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00)}:host([variant=filled][inverted]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-surface, #ffffff) );--_nys-button-color: var(--nys-button-color, var(--nys-color-text, #1b1b1b));--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00);--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-neutral-100, #d0d0ce) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text, #1b1b1b) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-neutral-300, #a7a9ab) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text, #1b1b1b) );--_nys-button-background-color--disabled: var(--nys-color-text, #1b1b1b);--_nys-button-color--disabled: var(--nys-color-text-disabled, #62666a)}:host([variant=outline][inverted]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-surface-reverse, #1b1b1b) );--_nys-button-color: var( --nys-button-color, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-ink-reverse, #ffffff) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-surface-reverse, #1b1b1b) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text-reverse-weak, #d0d0ce) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-neutral-100, #d0d0ce) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-surface-reverse, #1b1b1b) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text-reverse-weaker, #bec0c1) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-neutral-300, #a7a9ab) );--_nys-button-background-color--disabled: var( --nys-color-surface-reverse, #1b1b1b );--_nys-button-color--disabled: var( --nys-color-text-reverse-disabled, #62666a );--_nys-button-border-color--disabled: var(--nys-color-neutral-600, #62666a)}:host([variant=text][inverted]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-color: var( --nys-button-color, var(--nys-color-link-reverse, #a7a9ab) );--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-link-reverse-strong, #ededed) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-reverse-strongest, #ffffff) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-transparent, #ffffff00 );--_nys-button-color--disabled: var( --nys-color-text-reverse-disabled, #62666a );--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00)}:host([variant=ghost][inverted]){--_nys-button-background-color: var( --nys-button-background-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-color: var( --nys-button-color, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color: var( --nys-button-border-color, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--hover: var( --nys-button-background-color--hover, var(--nys-color-white-transparent-200, #ffffff33) );--_nys-button-color--hover: var( --nys-button-color--hover, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color--hover: var( --nys-button-border-color--hover, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--active: var( --nys-button-background-color--active, var(--nys-color-white-transparent-300, #ffffff4d) );--_nys-button-color--active: var( --nys-button-color--active, var(--nys-color-text-reverse, #ffffff) );--_nys-button-border-color--active: var( --nys-button-border-color--active, var(--nys-color-transparent, #ffffff00) );--_nys-button-background-color--disabled: var( --nys-color-transparent, #ffffff00 );--_nys-button-color--disabled: var(--nys-color-text-disabled, #62666a);--_nys-button-border-color--disabled: var(--nys-color-transparent, #ffffff00)}:host([inverted]){--_nys-button-outline-color: var(--nys-color-focus-reverse, #7aa5e7)}:host([circle]){--_nys-button-width: var(--_nys-button-height);--_nys-button-border-radius: var(--nys-radius-round, 1776px);--_nys-button-padding--y: 0;--_nys-button-padding--x: 0}:host([circle]) .nys-button{max-width:var(--_nys-button-height);max-height:var(--_nys-button-height)}.nys-button{width:var(--_nys-button-width);min-height:var(--_nys-button-height);border-radius:var(--_nys-button-border-radius);padding:var(--_nys-button-padding--y) var(--_nys-button-padding--x);display:flex;align-items:center;justify-content:var(--_nys-button-justify-content);gap:var(--_nys-button-gap);font-family:var(--_nys-button-font-family);font-size:var(--_nys-button-font-size);font-weight:var(--_nys-button-font-weight);line-height:var(--_nys-button-line-height);text-decoration:var(--_nys-button-text-decoration);box-sizing:border-box;background-color:var(--_nys-button-background-color);color:var(--_nys-button-color);border-color:var(--_nys-button-border-color);border-style:var(--_nys-button-border-style);border-width:var(--_nys-button-border-width);cursor:var(--_nys-button-cursor)}.nys-button:hover{background-color:var(--_nys-button-background-color--hover);color:var(--_nys-button-color--hover);border-color:var(--_nys-button-border-color--hover);text-decoration-thickness:var(--_nys-button-text-decoration-thickness--hover, auto)}.nys-button:active,.nys-button.active{background-color:var(--_nys-button-background-color--active);color:var(--_nys-button-color--active);border-color:var(--_nys-button-border-color--active);text-decoration-thickness:var(--_nys-button-text-decoration-thickness--active, auto)}.nys-button:disabled,a[disabled]{background-color:var(--_nys-button-background-color--disabled);color:var(--_nys-button-color--disabled);border-color:var(--_nys-button-border-color--disabled);--_nys-button-cursor: not-allowed}a[disabled]{pointer-events:none}.nys-button:focus-visible,.active-focus{outline-offset:var(--_nys-button-outline-offset);outline:solid var(--_nys-button-outline-width) var(--_nys-button-outline-color)}.nys-button__text{display:flex;align-items:center;-webkit-user-select:none;user-select:none}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}';
var Ad = Object.defineProperty, K = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Ad(e, t, o), o;
};
const hs = class hs extends pt {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this.size = "md", this.fullWidth = !1, this.variant = "filled", this.inverted = !1, this.label = "", this.ariaControls = "", this.ariaExpanded = "", this.ariaCurrent = "", this.prefixIcon = "", this.suffixIcon = "", this.circle = !1, this.icon = "", this.disabled = !1, this.form = null, this.value = "", this.ariaDescribedBy = "", this.type = "button", this.onClick = null, this.href = "", this.target = "_self", this._hasPrefixSlot = !1, this._hasSuffixSlot = !1, this._hasCircleSlot = !1;
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   *
   * Form association, ElementInternals, and id generation are provided by
   * NysFormControlElement (@nysds/internals). super.connectedCallback() assigns
   * an id when one is not provided (prefix = the element's localName).
   */
  _onPrefixSlotChange(e) {
    const t = e.target;
    this._hasPrefixSlot = t.assignedElements({ flatten: !0 }).length > 0;
  }
  _onSuffixSlotChange(e) {
    const t = e.target;
    this._hasSuffixSlot = t.assignedElements({ flatten: !0 }).length > 0;
  }
  _onCircleSlotChange(e) {
    const t = e.target;
    this._hasCircleSlot = t.assignedElements({ flatten: !0 }).length > 0;
  }
  _manageFormAction() {
    typeof this.onClick == "function" && this.onClick !== null && this.onClick(new Event("click"));
    const e = this.internals?.form;
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
        const n = this.renderRoot.querySelector(
          "a.nys-button"
        );
        n && n.click();
      } else
        this._handleAnyAttributeFunction(), this._handleClick(e);
    }
  }
  _handleKeyup(e) {
    (e.code === "Space" || e.code === "Enter" || e.key === " " || e.key === "Enter") && this.renderRoot.querySelector(".nys-button")?.classList.remove("active");
  }
  /**
   * Handles inline onclick attributes for keyboard activation.
   *
   * Native clicks execute inline onclick attributes automatically, but
   * keyboard activation of the custom element does not trigger that native
   * behavior. Dispatching a synthetic click lets the browser's own inline
   * event handler mechanism execute any onclick attribute safely without
   * eval() or new Function().
   */
  _handleAnyAttributeFunction() {
    this.click();
  }
  focus(e) {
    const t = this.renderRoot.querySelector(
      this.href ? "a.nys-button" : "button.nys-button"
    );
    t ? t.focus(e) : super.focus(e);
  }
  render() {
    return y`
      ${this.href ? y`
            <div class="nys-button__linkwrapper">
              <a
                class="nys-button"
                name=${v(this.name ? this.name : void 0)}
                ?disabled=${this.disabled}
                aria-disabled="${this.disabled ? "true" : "false"}"
                value=${v(this.value ? this.value : void 0)}
                href=${this.href}
                target=${this.target}
                @click=${this._handleClick}
                @focus="${this._handleFocus}"
                @blur="${this._handleBlur}"
                @keydown="${this._handleKeydown}"
                @keyup="${this._handleKeyup}"
                aria-describedby=${v(this.ariaDescribedBy || void 0)}
                aria-expanded=${v(this.ariaExpanded || void 0)}
                aria-current=${v(this.ariaCurrent || void 0)}
              >
                <slot
                  name="prefix-icon"
                  @slotchange=${this._onPrefixSlotChange}
                  ?hidden=${!this.prefixIcon && !this._hasPrefixSlot}
                >
                  ${this.prefixIcon ? y`<nys-icon
                        size="16"
                        name=${this.prefixIcon}
                      ></nys-icon>` : ""}
                </slot>
                ${this.circle ? y`<div class="nys-button__text sr-only">
                      ${this.label}
                    </div>` : this.label ? y`<div class="nys-button__text">${this.label}</div>` : y` <slot class="nys-button__default-slot"></slot> `}
                <slot
                  name="suffix-icon"
                  @slotchange=${this._onSuffixSlotChange}
                  ?hidden=${!this.suffixIcon && !this._hasSuffixSlot}
                >
                  ${this.suffixIcon ? y`<nys-icon
                        size="16"
                        name=${this.suffixIcon}
                      ></nys-icon>` : ""}
                </slot>
                <slot
                  name="circle-icon"
                  @slotchange=${this._onCircleSlotChange}
                  ?hidden=${!this.circle || !this.icon && !this._hasCircleSlot}
                >
                  ${this.icon ? y`<nys-icon
                        size=${this.size === "sm" ? "24" : this.size === "lg" ? "40" : "32"}
                        name=${this.icon}
                      ></nys-icon>` : ""}
                </slot>
              </a>
            </div>
          ` : y`
            <button
              class="nys-button"
              name=${v(this.name ? this.name : void 0)}
              ?disabled=${this.disabled}
              form=${v(this.form || void 0)}
              value=${v(this.value ? this.value : void 0)}
              type=${this.type}
              aria-controls=${v(this.ariaControls || void 0)}
              @click=${this._handleClick}
              @focus=${this._handleFocus}
              @blur=${this._handleBlur}
              @keydown=${this._handleKeydown}
              @keyup=${this._handleKeyup}
              aria-describedby=${v(this.ariaDescribedBy || void 0)}
              aria-expanded=${v(this.ariaExpanded || void 0)}
              aria-current=${v(this.ariaCurrent || void 0)}
            >
              <slot
                name="prefix-icon"
                @slotchange=${this._onPrefixSlotChange}
                ?hidden=${!this.prefixIcon && !this._hasPrefixSlot}
              >
                ${this.prefixIcon ? y`<nys-icon
                      size="16"
                      name=${this.prefixIcon}
                    ></nys-icon>` : ""}
              </slot>
              ${this.circle ? y`<div class="nys-button__text sr-only">
                    ${this.label}
                  </div>` : this.label ? y`<div class="nys-button__text">${this.label}</div>` : y` <slot class="nys-button__default-slot"></slot> `}
              <slot
                name="suffix-icon"
                @slotchange=${this._onSuffixSlotChange}
                ?hidden=${!this.suffixIcon && !this._hasSuffixSlot}
              >
                ${this.suffixIcon ? y`<nys-icon
                      size="16"
                      name=${this.suffixIcon}
                    ></nys-icon>` : ""}
              </slot>
              <slot
                name="circle-icon"
                @slotchange=${this._onCircleSlotChange}
                ?hidden=${!this.circle || !this.icon && !this._hasCircleSlot}
              >
                ${this.icon ? y`<nys-icon
                      size=${this.size === "sm" ? "24" : this.size === "lg" ? "40" : "32"}
                      name=${this.icon}
                    ></nys-icon>` : ""}
              </slot>
            </button>
          `}
    `;
  }
};
hs.styles = C(Ed), hs.shadowRootOptions = {
  ...I.shadowRootOptions,
  delegatesFocus: !0
};
let B = hs;
K([
  a({ type: String, reflect: !0 })
], B.prototype, "id");
K([
  a({ type: String, reflect: !0 })
], B.prototype, "name");
K([
  a({ type: String, reflect: !0 })
], B.prototype, "size");
K([
  a({ type: Boolean, reflect: !0 })
], B.prototype, "fullWidth");
K([
  a({ type: String, reflect: !0 })
], B.prototype, "variant");
K([
  a({ type: Boolean, reflect: !0 })
], B.prototype, "inverted");
K([
  a({ type: String })
], B.prototype, "label");
K([
  a({ type: String })
], B.prototype, "ariaControls");
K([
  a({ type: String })
], B.prototype, "ariaExpanded");
K([
  a({ type: String })
], B.prototype, "ariaCurrent");
K([
  a({ type: String })
], B.prototype, "prefixIcon");
K([
  a({ type: String })
], B.prototype, "suffixIcon");
K([
  a({ type: Boolean, reflect: !0 })
], B.prototype, "circle");
K([
  a({ type: String })
], B.prototype, "icon");
K([
  a({ type: Boolean, reflect: !0 })
], B.prototype, "disabled");
K([
  a({ type: String, reflect: !0 })
], B.prototype, "form");
K([
  a({ type: String })
], B.prototype, "value");
K([
  a({ type: String })
], B.prototype, "ariaDescribedBy");
K([
  a({ type: String, reflect: !0 })
], B.prototype, "type");
K([
  a({ attribute: !1 })
], B.prototype, "onClick");
K([
  a({ type: String })
], B.prototype, "href");
K([
  a({ type: String, reflect: !0 })
], B.prototype, "target");
K([
  $()
], B.prototype, "_hasPrefixSlot");
K([
  $()
], B.prototype, "_hasSuffixSlot");
K([
  $()
], B.prototype, "_hasCircleSlot");
customElements.get("nys-button") || customElements.define("nys-button", B);
const Ld = ':host{--_nys-badge-width: fit-content;--_nys-badge-height: var(--nys-size-600, 48px);--_nys-badge-radius: var(--nys-radius-round, 1776px);--_nys-badge-padding: var(--nys-space-2-px, 2px) var(--nys-space-100, 8px);--_nys-badge-gap: var(--nys-space-50, 4px);--_nys-badge-color: var(--nys-color-ink, #000000);--_nys-badge-background-color: var(--nys-color-base-weak, #f6f6f6);--_nys-badge-border-color: var(--nys-color-base, #62666a);--_nys-badge-border-width: var(--nys-border-width-sm, 1px);--_nys-badge-font-size: var(--nys-font-size-ui-sm, 14px);--_nys-badge-font-weight: var(--nys-font-weight-semibold, 600);--_nys-badge-line-height: var(--nys-font-lineheight-ui-sm, 24px);--_nys-badge-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-badge-prefix-font-weight: var(--nys-font-weight-regular, 400)}:host([size=sm]){--_nys-badge-font-size: var(--nys-font-size-ui-xs, 12px);--_nys-badge-line-height: var(--nys-font-lineheight-ui-xs, 20px)}:host([intent=base]){--_nys-badge-background-color: var(--nys-color-base-weak, #f6f6f6);--_nys-badge-border-color: var(--nys-color-base, #62666a)}:host([intent=danger]),:host([intent=error]){--_nys-badge-background-color: var(--nys-color-danger-weak, #f7eaea);--_nys-badge-border-color: var(--nys-color-danger-strong, #721c1c)}:host([intent=emergency]){--_nys-badge-background-color: var(--nys-color-emergency, #721c1c);--_nys-badge-border-color: var(--nys-color-danger-strong, #721c1c);--_nys-badge-color: var(--nys-color-white, #ffffff)}:host([intent=emergency]) .nys-badge{--nys-icon-color: var(--nys-color-white, #ffffff)}:host([intent=info]){--_nys-badge-background-color: var(--nys-color-info-weak, #e5effa);--_nys-badge-border-color: var(--nys-color-info-strong, #002971)}:host([intent=success]){--_nys-badge-background-color: var(--nys-color-success-weak, #e8f1ea);--_nys-badge-border-color: var(--nys-color-success-strong, #0f3d18)}:host([intent=warning]){--_nys-badge-background-color: var(--nys-color-warning-weak, #fefae5);--_nys-badge-border-color: var(--nys-color-warning-strong, #6a5700)}:host([strong]){--_nys-badge-background-color: var(--_nys-badge-border-color);--_nys-badge-color: var(--nys-color-white, #ffffff)}:host([strong]) .nys-badge{--nys-icon-color: var(--nys-color-white, #ffffff)}:host([strong][intent=info]){--_nys-badge-border-color: var(--nys-color-info, #004dd1)}:host([strong][intent=success]){--_nys-badge-border-color: var(--nys-color-success, #1e752e)}:host([strong][intent=danger]),:host([strong][intent=error]){--_nys-badge-border-color: var(--nys-color-danger, #b52c2c)}:host([strong][intent=emergency]){--_nys-badge-border-color: var(--nys-color-emergency, #721c1c)}:host([strong][intent=warning]){--_nys-badge-border-color: var(--nys-color-warning, #face00);--_nys-badge-color: var(--nys-color-ink, #000000)}:host([strong][intent=warning]) .nys-badge{--nys-icon-color: var(--nys-color-ink, #000000)}.nys-badge{display:flex;width:fit-content;align-items:center;justify-content:center;gap:var(--_nys-badge-gap);padding:var(--_nys-badge-padding);border:var(--_nys-badge-border-width) solid var(--_nys-badge-border-color);background-color:var(--_nys-badge-background-color);color:var(--_nys-badge-color);border-radius:var(--_nys-badge-radius);font-family:var(--_nys-badge-font-family);font-size:var(--_nys-badge-font-size);font-weight:var(--_nys-badge-font-weight);line-height:var(--_nys-badge-line-height);cursor:default;--nys-icon-color: var(--_nys-badge-border-color)}.nys-badge__prefix{font-weight:var(--_nys-badge-prefix-font-weight)}.nys-badge__sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}';
var Td = Object.defineProperty, Dd = Object.getOwnPropertyDescriptor, Nt = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? Dd(e, t) : e, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = (n ? i(e, t, o) : i(o)) || o);
  return n && o && Td(e, t, o), o;
}, Ot;
const Lt = (Ot = class extends D {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this.size = "md", this.intent = "base", this.prefixLabel = "", this.label = "", this.srText = "", this.strong = !1, this._prefixIcon = "", this._suffixIcon = "";
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
    super.connectedCallback();
    const e = this.getAttribute("prefixicon");
    e !== null && this.prefixIcon === "" && (this.prefixIcon = e);
    const t = this.getAttribute("suffixicon");
    t !== null && this.suffixIcon === "" && (this.suffixIcon = t);
  }
  /**
   * Resolves the screen-reader-only text describing the badge's semantic intent.
   * Returns null when no intent description should be announced.
   */
  resolveIntentSrText() {
    return this.srText ? null : Ot.INTENT_SR_TEXT[this.intent] ?? null;
  }
  /**
   * Resolves which icon should be rendered.
   * @param icon The icon property value (string or boolean)
   * @returns Icon name or null if no icon should be rendered
   */
  resolveIcon(e) {
    return e === !0 ? Ot.DEFAULT_ICONS[this.intent] ?? "info" : typeof e == "string" && e.trim() !== "" ? e : null;
  }
  render() {
    const e = this.resolveIcon(this.prefixIcon), t = this.resolveIcon(this.suffixIcon), n = this.resolveIntentSrText();
    return y`
      <mark class="nys-badge">
        ${e ? y`<nys-icon size="16" name=${e}></nys-icon>` : ""}
        ${this.prefixLabel ? y`<div class="nys-badge__prefix">${this.prefixLabel}</div>` : ""}
        <div class="nys-badge__label">
          ${n ? y`<span class="nys-badge__sr-only"
                >${n + ": "}</span
              >` : ""}
          ${this.label}
          ${this.srText ? y`<span class="nys-badge__sr-only"
                >${": " + this.srText}</span
              >` : ""}
        </div>

        ${t ? y`<nys-icon size="16" name=${t}></nys-icon>` : ""}
      </mark>
    `;
  }
}, Ot.styles = C(Ld), Ot.DEFAULT_ICONS = {
  base: "info",
  info: "info",
  success: "check_circle",
  warning: "warning",
  danger: "error",
  error: "error",
  emergency: "emergency_home"
}, Ot.INTENT_SR_TEXT = {
  info: "Info",
  success: "Success",
  warning: "Warning",
  danger: "Danger",
  error: "Danger",
  emergency: "Emergency"
}, Ot);
Nt([
  a({
    type: String,
    reflect: !0,
    converter: {
      toAttribute: (r) => r || void 0
    }
  })
], Lt.prototype, "id", 2);
Nt([
  a({
    type: String,
    reflect: !0,
    converter: {
      toAttribute: (r) => r || void 0
    }
  })
], Lt.prototype, "name", 2);
Nt([
  a({ type: String, reflect: !0 })
], Lt.prototype, "size", 2);
Nt([
  a({ type: String, reflect: !0 })
], Lt.prototype, "intent", 2);
Nt([
  a({ type: String })
], Lt.prototype, "prefixLabel", 2);
Nt([
  a({ type: String })
], Lt.prototype, "label", 2);
Nt([
  a({ type: String })
], Lt.prototype, "srText", 2);
Nt([
  a({ type: Boolean, reflect: !0 })
], Lt.prototype, "strong", 2);
Nt([
  a({ type: String, attribute: "prefixicon" })
], Lt.prototype, "prefixIcon", 1);
Nt([
  a({ type: String, attribute: "suffixicon" })
], Lt.prototype, "suffixIcon", 1);
let zd = Lt;
customElements.get("nys-badge") || customElements.define("nys-badge", zd);
const Id = '@charset "UTF-8";:host{--_nys-card-width: 100%;--_nys-card-height: var( --nys-card-height, fit-content );--_nys-card-border-radius: var(--nys-radius-xl, 12px);--_nys-card-border-radius--media: 0;--_nys-card-border-color: var(--nys-color-neutral-200, #bec0c1);--_nys-card-padding--t: var(--nys-space-200, 16px);--_nys-card-padding--x: var(--nys-space-300, 24px);--_nys-card-padding--b: var(--nys-space-250, 20px);--_nys-card-padding-bottom--preheading: var(--nys-space-150, 12px);--_nys-card-background-color: var(--nys-color-surface, #ffffff);--_nys-card-gap: var(--nys-space-150, 12px);--_nys-card-padding--media-inset: var(--nys-space-300, 24px);--_nys-card-size--media-accent: var(--nys-space-800, 64px);--_nys-card-offset--media-accent: var(--nys-space-300, 24px);--_nys-card-border-radius--media-accent: var(--nys-radius-xxl, 16px);--_nys-card-background-color--media-accent: var(--nys-color-accent, #face00);--_nys-card-cursor: pointer;--_nys-card-border-color--hover: var(--nys-color-neutral-700, #4a4d4f);--_nys-card-border-color--active: var(--nys-color-neutral-900, #1b1b1b);--_nys-card-outline-color: var(--nys-color-focus, #004dd1);--_nys-card-outline-width: var(--nys-border-width-md, 2px);--_nys-card-outline-offset: var(--nys-space-2px, 2px);--_nys-card-color: var(--nys-color-text-weak, #4a4d4f);--_nys-card-font-family: var(--nys-font-family-ui, "Proxima Nova");--_nys-card-font-size: var(--nys-font-size-ui-md, 16px);--_nys-card-font-style: normal;--_nys-card-font-weight: 400;--_nys-card-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-card-letter-spacing: var(--nys-font-letterspacing-ui-md, .044px);display:block;width:var(--_nys-card-width);max-width:100%}:host([hidden]){display:none}:host([inset]){--_nys-card-border-radius--media: var(--nys-radius-md, 4px)}:host([inset]) .nys-card__media-container{padding:var(--_nys-card-padding--media-inset) var(--_nys-card-padding--media-inset) 0}:host([inset]) .nys-card--media-accent{right:calc(var(--_nys-card-offset--media-accent) + var(--_nys-card-padding--media-inset))}:host([elevated]) .nys-card{box-shadow:var(--nys-shadow-raised)}.nys-card{color:var(--_nys-card-color);font-family:var(--_nys-card-font-family);font-size:var(--_nys-card-font-size);font-style:var(--_nys-card-font-style);font-weight:var(--_nys-card-font-weight);line-height:var(--_nys-card-line-height);letter-spacing:var(--_nys-card-letter-spacing);width:100%;height:var(--_nys-card-height);display:flex;flex-direction:column;align-items:start;justify-content:center;border-radius:var(--_nys-card-border-radius);border:var(--nys-border-width-sm, 1px) solid var(--_nys-card-border-color);background-color:var(--_nys-card-background-color);overflow:hidden}.nys-card__media-container{position:relative;box-sizing:border-box;width:100%;height:fit-content}.nys-card__media-container ::slotted([slot=media]){display:block;max-width:100%;width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:var(--_nys-card-border-radius--media)}.nys-card__media-container .nys-card--media-accent{position:absolute;right:var(--_nys-card-offset--media-accent);bottom:var(--_nys-card-offset--media-accent);width:var(--_nys-card-size--media-accent);height:var(--_nys-card-size--media-accent);overflow:hidden;background-color:var(--_nys-card-background-color--media-accent);border-radius:var(--_nys-card-border-radius--media-accent);display:flex;justify-content:center;flex-direction:column;align-items:center;color:var(--nys-color-text);font-family:var(--nys-font-family-ui, "Proxima Nova");font-style:normal;font-weight:700}.nys-card__media-container .nys-card--media-accent[hidden]{display:none}.nys-card__media-container .nys-card--media-accent-month{padding:0;margin:0;font-size:var(--nys-font-size-ui-md, 16px);line-height:var(--nys-font-size-ui-md, 16px);letter-spacing:var(--nys-font-letterspacing-ui-md, .044px)}.nys-card__media-container .nys-card--media-accent-day{padding:0;margin:0;font-size:var(--nys-font-size-ui-xl, 20px);line-height:var(--nys-font-size-ui-xl, 20px);letter-spacing:var(--nys-font-letterspacing-ui-xl, .017px)}.nys-card__main-content{margin:var(--_nys-card-padding--t) var(--_nys-card-padding--x) var(--_nys-card-padding--b);display:flex;flex-direction:column;gap:var(--_nys-card-gap);flex:1 1 auto;width:-webkit-fill-available;width:-moz-available;width:fill-available}.nys-card__preheading{padding:0;margin:0;color:var(--nys-color-text-weak, #4a4d4f);font-family:var(--nys-font-family-ui, "Proxima Nova");font-size:var(--nys-font-size-ui-md, 16px);font-style:normal;font-weight:700;line-height:var(--nys-font-lineheight-ui-md, 24px);letter-spacing:var(--nys-font-letterspacing-ui-md, .044px)}.nys-card__preheading-slot{display:flex;flex-direction:row;padding-bottom:var(--_nys-card-padding-bottom--preheading)}.nys-card__preheading-slot[hidden]{display:none}.nys-card__heading{padding:0;margin:0;color:var(--nys-color-text);font-family:var(--nys-font-family-heading, "Proxima Nova");font-size:var(--nys-font-size-h2, 28px);font-style:normal;font-weight:700;line-height:var(--nys-font-lineheight-h2, 36px);letter-spacing:var(--nys-font-letterspacing-h2, .013px)}.nys-card__subheading{padding:0;margin:0;overflow:hidden;color:var(--nys-color-text-weak, #4a4d4f);text-overflow:ellipsis;font-family:var(--nys-font-family-ui, "Proxima Nova");font-size:var(--nys-font-size-ui-lg, 18px);font-style:normal;font-weight:600;line-height:var(--nys-font-lineheight-ui-lg, 28px);letter-spacing:var(--nys-font-letterspacing-ui-lg, .028px)}.nys-card__description{padding:0;margin:0;color:var(--nys-color-text-weak, #4a4d4f);font-family:var(--nys-font-family-ui, "Proxima Nova");font-size:var(--nys-font-size-ui-md, 16px);font-style:normal;font-weight:400;line-height:var(--nys-font-lineheight-ui-md, 24px);letter-spacing:var(--nys-font-letterspacing-ui-md, .044px)}.nys-card__footer{display:contents}.nys-card--clickable{appearance:none;padding:0;text-align:left;text-decoration:none;cursor:var(--_nys-card-cursor)}.nys-card--clickable:hover{border-color:var(--_nys-card-border-color--hover)}.nys-card--clickable:active{border-color:var(--_nys-card-border-color--active)}.nys-card--clickable:focus-visible{outline:solid var(--_nys-card-outline-width) var(--_nys-card-outline-color);outline-offset:var(--_nys-card-outline-offset)}::slotted([slot=preheading]){display:flex;flex-direction:row}::slotted([slot=footer]){width:-webkit-fill-available;width:-moz-available;width:fill-available;display:flex;flex-direction:row;margin:0 var(--_nys-card-padding--x) var(--nys-space-300)}';
var Rd = Object.defineProperty, Ve = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Rd(e, t, o), o;
};
const Ii = class Ii extends D {
  constructor() {
    super(...arguments), this.id = "", this.preheading = "", this.heading = "", this.headingLevel = "h2", this.subheading = "", this.description = "", this.inset = !1, this.elevated = !1, this.href = "", this.target = "_self", this.onClick = null, this._hasMedia = !1, this._hasPreheadingSlot = !1, this._accentMonth = "", this._accentDay = "";
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  // A card is interactive when it has somewhere to go or something to run:
  // `href` makes it a link, a click handler makes it a button. `onclick` is the
  // native handler, set by an inline `onclick="…"` attribute on the host.
  get isClickable() {
    return !!this.href || !!this.onClick || !!this.onclick;
  }
  renderHeading() {
    return this.heading ? {
      h1: y`<h1 class="nys-card__heading">${this.heading}</h1>`,
      h2: y`<h2 class="nys-card__heading">${this.heading}</h2>`,
      h3: y`<h3 class="nys-card__heading">${this.heading}</h3>`,
      h4: y`<h4 class="nys-card__heading">${this.heading}</h4>`,
      h5: y`<h5 class="nys-card__heading">${this.heading}</h5>`,
      h6: y`<h6 class="nys-card__heading">${this.heading}</h6>`
    }[this.headingLevel] : "";
  }
  // The accent's two lines live in the light DOM, so the shadow stylesheet
  // cannot reach them. Read their text instead and render it into the badge,
  // where the month and day styles apply: first line is the month, second the day.
  readMediaAccent(e) {
    const t = e.assignedElements({ flatten: !0 }), n = t.length > 1 ? t : Array.from(t[0]?.children ?? []);
    this._accentMonth = n[0]?.textContent?.trim() ?? "", this._accentDay = n[1]?.textContent?.trim() ?? "";
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  hasSlotContent(e) {
    return e.target.assignedNodes({ flatten: !0 }).length > 0;
  }
  handleMediaSlotChange(e) {
    this._hasMedia = this.hasSlotContent(e);
  }
  handlePreheadingSlotChange(e) {
    this._hasPreheadingSlot = this.hasSlotContent(e);
  }
  handleMediaAccentSlotChange(e) {
    this.readMediaAccent(e.target);
  }
  handleClick(e) {
    this.onClick?.(e), this.dispatchEvent(
      new Event("nys-click", { bubbles: !0, composed: !0 })
    );
  }
  handleFocus() {
    this.dispatchEvent(
      new Event("nys-focus", { bubbles: !0, composed: !0 })
    );
  }
  handleBlur() {
    this.dispatchEvent(
      new Event("nys-blur", { bubbles: !0, composed: !0 })
    );
  }
  render() {
    const e = !!(this._accentMonth || this._accentDay), t = !!this.preheading && !this._hasPreheadingSlot, n = y`
      <div class="nys-card__media-container" ?hidden=${!this._hasMedia}>
        <slot
          name="media"
          class="nys-card__media"
          @slotchange=${this.handleMediaSlotChange}
        ></slot>
        <div class="nys-card--media-accent" ?hidden=${!e}>
          <p class="nys-card--media-accent-month">${this._accentMonth}</p>
          <p class="nys-card--media-accent-day">${this._accentDay}</p>
        </div>
        <div class="nys-card__media-accent-source" hidden>
          <slot
            name="media-accent"
            @slotchange=${this.handleMediaAccentSlotChange}
          ></slot>
        </div>
      </div>
      <div class="nys-card__main-content">
        <div>
          ${t ? y`<p class="nys-card__preheading">${this.preheading}</p>` : ""}
          <slot
            name="preheading"
            class="nys-card__preheading-slot"
            ?hidden=${!this._hasPreheadingSlot}
            @slotchange=${this.handlePreheadingSlotChange}
          ></slot>
          ${this.renderHeading()}
          ${this.subheading ? y`<p class="nys-card__subheading">${this.subheading}</p>` : ""}
        </div>
        ${this.description ? y`<p class="nys-card__description">${this.description}</p>` : ""}
        <slot></slot>
      </div>
      <slot name="footer" class="nys-card__footer"></slot>
    `;
    return this.isClickable ? this.href ? y`<a
        class="nys-card nys-card--clickable"
        href=${this.href}
        target=${this.target}
        @click=${this.handleClick}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        >${n}</a
      >` : y`<button
      class="nys-card nys-card--clickable"
      type="button"
      @click=${this.handleClick}
      @focus=${this.handleFocus}
      @blur=${this.handleBlur}
    >
      ${n}
    </button>` : y`<div class="nys-card">${n}</div>`;
  }
};
Ii.styles = C(Id);
let xe = Ii;
Ve([
  a({ type: String, reflect: !0 })
], xe.prototype, "id");
Ve([
  a({ type: String })
], xe.prototype, "preheading");
Ve([
  a({ type: String })
], xe.prototype, "heading");
Ve([
  a({ type: String, reflect: !0 })
], xe.prototype, "headingLevel");
Ve([
  a({ type: String })
], xe.prototype, "subheading");
Ve([
  a({ type: String })
], xe.prototype, "description");
Ve([
  a({ type: Boolean })
], xe.prototype, "inset");
Ve([
  a({ type: Boolean, reflect: !0 })
], xe.prototype, "elevated");
Ve([
  a({ type: String })
], xe.prototype, "href");
Ve([
  a({ type: String, reflect: !0 })
], xe.prototype, "target");
Ve([
  a({ attribute: !1 })
], xe.prototype, "onClick");
Ve([
  $()
], xe.prototype, "_hasMedia");
Ve([
  $()
], xe.prototype, "_hasPreheadingSlot");
Ve([
  $()
], xe.prototype, "_accentMonth");
Ve([
  $()
], xe.prototype, "_accentDay");
customElements.get("nys-card") || customElements.define("nys-card", xe);
/*!
   * █▄  █  █   █  █▀▀▀█  █▀▀▄  █▀▀▀█
   * █ █ █  █▄▄▄█  ▀▀▀▄▄  █   █ ▀▀▀▄▄
   * █  ▀█    █    █▄▄▄█  █▄▄▀  █▄▄▄█
   *
   * Tooltip Component v1.21.0
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
var Od = 0;
function Md(r) {
  return `${r}-${Date.now()}-${Od++}`;
}
var Pd = (r) => {
  class e extends r {
    get idPrefix() {
      return this.localName || "nys-element";
    }
    ensureId() {
      this.id || (this.id = Md(this.idPrefix));
    }
    connectedCallback() {
      super.connectedCallback(), this.ensureId();
    }
  }
  return e;
}, Nd = /* @__PURE__ */ Pd(I), Bd = ':host{--_nys-tooltip-color:var(--nys-color-text-reverse,#fff);--_nys-tooltip-background-color:var(--nys-color-ink,#1b1b1b);--_nys-tooltip-border-radius:var(--nys-radius-md,4px);--_nys-tooltip-font-family:var(--nys-font-family-ui,var(--nys-font-family-sans,"Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif));--_nys-tooltip-font-size:var(--nys-font-size-ui-sm,14px);--_nys-tooltip-letter-spacing:var(--nys-font-letterspacing-ui-sm,.044px);--_nys-tooltip-line-height:var(--nys-font-lineheight-ui-sm,24px)}.nys-tooltip__content{width:max-content;max-width:400px;max-height:120px;padding:var(--nys-space-50,4px) var(--nys-space-100,8px);background-color:var(--_nys-tooltip-background-color);border-radius:var(--_nys-tooltip-border-radius);cursor:auto;z-index:1;position:fixed;top:0;left:0}.nys-tooltip__inner{color:var(--_nys-tooltip-color);font-family:var(--_nys-tooltip-font-family);font-size:var(--_nys-tooltip-font-size);font-weight:400;line-height:var(--_nys-tooltip-line-height);letter-spacing:var(--_nys-tooltip-letter-spacing);white-space:normal;overflow-wrap:anywhere;text-overflow:ellipsis;-webkit-line-clamp:4;line-clamp:4;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.nys-tooltip__arrow{background:url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"15\\" height=\\"6\\" viewBox=\\"0 0 15 6\\" fill=\\"none\\"><path d=\\"M8.15079 5.44218C7.7763 5.76317 7.2237 5.76317 6.84921 5.44218L0.5 0H14.5L8.15079 5.44218Z\\" fill=\\"%231B1B1B\\"/></svg>") 50% no-repeat;width:14px;height:6px;position:absolute}.nys-tooltip__content[active]{display:block}.fade-out{opacity:0;transition:opacity .2s ease-out}@media (prefers-reduced-motion:reduce){.fade-out{transition:none}}:host([position=top]) .nys-tooltip__arrow{top:100%;left:var(--arrow-offset-x,50%);transform:translate(-50%)}:host([position=bottom]) .nys-tooltip__arrow{bottom:100%;left:var(--arrow-offset-x,50%);transform:translate(-50%)rotate(180deg)}:host([position=left]) .nys-tooltip__arrow{margin-left:-4px;top:50%;left:100%;transform:translateY(-50%)rotate(-90deg)}:host([position=right]) .nys-tooltip__arrow{margin-right:-4px;top:50%;right:100%;transform:translateY(-50%)rotate(90deg)}:host([inverted]) .nys-tooltip__content{--_nys-tooltip-color:var(--nys-color-text,#1b1b1b);--_nys-tooltip-background-color:var(--nys-color-ink-reverse,#fff)}:host([inverted]) .nys-tooltip__arrow{background:url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"15\\" height=\\"6\\" viewBox=\\"0 0 15 6\\" fill=\\"none\\"><path d=\\"M8.15079 5.44218C7.7763 5.76317 7.2237 5.76317 6.84921 5.44218L0.5 0H14.5L8.15079 5.44218Z\\" fill=\\"white\\"/></svg>") 50% no-repeat}@media (width<=400px){.nys-tooltip__content{max-width:calc(100vw - 2rem)}}';
function Kn(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(r, e);
}
function Oo(r, e, t, n) {
  var o = arguments.length, s = o < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, t) : n, i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(r, e, t, n);
  else for (var d = r.length - 1; d >= 0; d--) (i = r[d]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, t, s) : i(e, t)) || s);
  return o > 3 && s && Object.defineProperty(e, t, s), s;
}
var Do, oo = (Do = class extends Nd {
  get position() {
    return this._position;
  }
  set position(e) {
    const t = this._position;
    this._position = e, this.requestUpdate("position", t), this._internallyUpdatingPosition || (this._userHasSetPosition = e !== null, this._originalUserPosition = e);
  }
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
      const e = this._getReferenceElement(), t = this.shadowRoot?.querySelector(".nys-tooltip__content");
      e !== document.activeElement && (!e || !t || this._triggerFadeOut(t));
    }, this._cancelFadeOut = () => {
      const e = this.shadowRoot?.querySelector(".nys-tooltip__content"), t = this._getReferenceElement();
      if (!e || !t) return;
      const n = e.matches(":hover"), o = t.matches(":hover"), s = document.activeElement === t;
      !n && !o && !s || (this._hideTimeout && (clearTimeout(this._hideTimeout), this._hideTimeout = null), e.classList.remove("fade-out"), this._active = !0);
    }, this._handleScrollOrResize = () => {
      !this._active || this._hideTimeout || this._showTooltip();
    }, this._handleEscapeKey = (e) => {
      if (e.key === "Escape" && this._active) {
        this._active = !1, this._removeScrollListeners();
        const t = this.shadowRoot?.querySelector(".nys-tooltip__content");
        t && this._resetTooltipPositioningStyles(t);
      }
    };
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("keydown", this._handleEscapeKey);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    const e = this._getReferenceElement(), t = this.shadowRoot?.querySelector(".nys-tooltip__content");
    e && t && (e.removeEventListener("mouseenter", this._showTooltip), e.removeEventListener("mouseenter", this._cancelFadeOut), e.removeEventListener("mouseleave", this._handleBlurOrMouseLeave), e.removeEventListener("focusin", this._showTooltip), e.removeEventListener("focusout", this._handleBlurOrMouseLeave), t.removeEventListener("mouseenter", this._cancelFadeOut), t.removeEventListener("mouseleave", this._handleBlurOrMouseLeave)), window.removeEventListener("keydown", this._handleEscapeKey);
  }
  async firstUpdated() {
    await this.updateComplete;
    const e = this._getReferenceElement(), t = this.shadowRoot?.querySelector(".nys-tooltip__content");
    !e || !t || (this.applyInverseTransform(), this._associateTrigger(e), this._applyTooltipPropToFormComponent(e), (e.tagName.toLowerCase() === "nys-button" || e.tagName.toLowerCase() === "nys-icon") && (this._applyFocusBehavior(e), e.addEventListener("mouseenter", this._showTooltip), e.addEventListener("mouseenter", this._cancelFadeOut), e.addEventListener("mouseleave", this._handleBlurOrMouseLeave), e.addEventListener("focusin", this._showTooltip), e.addEventListener("focusout", this._handleBlurOrMouseLeave), t.addEventListener("mouseenter", this._cancelFadeOut), t.addEventListener("mouseleave", this._handleBlurOrMouseLeave)));
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
  _addScrollListeners() {
    window.addEventListener("scroll", this._handleScrollOrResize, !0), this._resizeObserver = new ResizeObserver(() => {
      this._handleScrollOrResize();
    }), this._resizeObserver.observe(document.documentElement);
  }
  _removeScrollListeners() {
    window.removeEventListener("scroll", this._handleScrollOrResize, !0), this._resizeObserver?.disconnect(), this._resizeObserver = null;
  }
  _getReferenceElement() {
    const e = this.for;
    if (!e) return null;
    let t = document.getElementById(e);
    if (t) return t;
    const n = (o) => {
      for (const s of Array.from(o.querySelectorAll("*"))) {
        const i = s.shadowRoot;
        if (i) {
          const d = i.getElementById(e);
          if (d) return d;
          const p = n(i);
          if (p) return p;
        }
      }
      return null;
    };
    return n(document);
  }
  _associateTrigger(e) {
    if (!this.text?.trim()) return;
    const t = (e.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean);
    t.includes(this.id) || (t.push(this.id), e.setAttribute("aria-describedby", t.join(" ")));
  }
  async _passAria(e) {
    const t = e.tagName.toLowerCase();
    if (t === "nys-icon") e.setAttribute("ariaLabel", `Hint: ${this.text}`);
    else if (t === "nys-button") {
      const n = e, o = (n.ariaDescribedBy || "").split(/\s+/).filter(Boolean);
      o.includes(this.id) || (o.push(this.id), n.ariaDescribedBy = o.join(" "));
    }
  }
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
  async _applyFocusBehavior(e) {
    if (e.style.cursor = "pointer", e.tagName.toLowerCase() === "nys-icon") {
      "updateComplete" in e && await e.updateComplete;
      const t = e.shadowRoot?.querySelector("svg");
      t && t.setAttribute("tabindex", "0");
    }
  }
  _doesPositionFit(e) {
    const t = this._getReferenceElement(), n = this.shadowRoot?.querySelector(".nys-tooltip__content");
    if (!t || !n || e == null) return;
    const o = t.getBoundingClientRect(), s = n.getBoundingClientRect(), i = 8, d = {
      top: o.top - i,
      left: o.left - i,
      bottom: window.innerHeight - o.bottom - i,
      right: window.innerWidth - o.right - i
    };
    return {
      top: d.top >= s.height,
      bottom: d.bottom >= s.height,
      left: d.left >= s.width,
      right: d.right >= s.width
    }[e];
  }
  _userPositionTooltip() {
    const e = this.shadowRoot?.querySelector(".nys-tooltip__content"), t = this._getReferenceElement();
    e && t && (this._positionTooltipElement(t, e, this.position), this._shiftTooltipIntoViewport(e));
  }
  async _autoPositionTooltip() {
    const e = this._getReferenceElement(), t = this.shadowRoot?.querySelector(".nys-tooltip__content");
    if (!e || !t) return;
    const n = e.getBoundingClientRect(), o = 8, s = {
      top: n.top - o,
      left: n.left - o,
      bottom: window.innerHeight - n.bottom - o,
      right: window.innerWidth - n.right - o
    };
    let i = [
      "top",
      "bottom",
      "right",
      "left"
    ];
    if (this._userHasSetPosition && this._originalUserPosition) {
      const b = this._originalUserPosition;
      b === "left" ? i = [
        "left",
        "right",
        "top",
        "bottom"
      ] : b === "right" ? i = [
        "right",
        "left",
        "top",
        "bottom"
      ] : b === "top" ? i = [
        "top",
        "bottom",
        "right",
        "left"
      ] : b === "bottom" && (i = [
        "bottom",
        "top",
        "right",
        "left"
      ]);
    }
    for (const b of i) if (this._doesPositionFit(b)) {
      this._setInternalPosition(b), await this.updateComplete, this._positionTooltipElement(e, t, b), this._shiftTooltipIntoViewport(t);
      return;
    }
    let d = "top", p = s.top;
    for (const b of i) s[b] > p && (p = s[b], d = b);
    this._setInternalPosition(d), await this.updateComplete, this._positionTooltipElement(e, t, d), this._shiftTooltipIntoViewport(t);
  }
  _positionStartingBase() {
    const e = this.shadowRoot?.querySelector(".nys-tooltip__content");
    e && (e.style.top = "0px", e.style.left = "0px");
  }
  _positionTooltipElement(e, t, n) {
    const o = e.getBoundingClientRect(), s = t.getBoundingClientRect(), i = 8;
    let d = 0, p = 0;
    switch (n) {
      case "top":
        d = o.top - s.height - i, p = o.left + o.width / 2 - s.width / 2;
        break;
      case "bottom":
        d = o.bottom + i, p = o.left + o.width / 2 - s.width / 2;
        break;
      case "left":
        d = o.top + o.height / 2 - s.height / 2, p = o.left - s.width - i;
        break;
      case "right":
        d = o.top + o.height / 2 - s.height / 2, p = o.right + i;
        break;
      default:
        d = o.top - s.height - i, p = o.left + o.width / 2 - s.width / 2;
    }
    t.style.top = `${d}px`, t.style.left = `${p}px`;
  }
  applyInverseTransform() {
    document.querySelectorAll('div[scale="1"]').forEach((e) => {
      e.style.transform = "none";
    });
  }
  _setInternalPosition(e) {
    this._internallyUpdatingPosition = !0, this.position = e, this._internallyUpdatingPosition = !1;
  }
  _shiftTooltipIntoViewport(e) {
    const t = this._getReferenceElement();
    if (!t) return;
    const n = t.getBoundingClientRect(), o = e.getBoundingClientRect(), s = n.left + n.width / 2, i = o.left < 0, d = o.right > window.innerWidth;
    i ? (e.style.left = "10px", e.style.transform = "none") : d && (e.style.right = "0px", e.style.left = "auto", e.style.transform = "none");
    const p = e.getBoundingClientRect(), b = (s - p.left) / p.width, m = Math.max(0, Math.min(1, b)) * 100;
    e.style.setProperty("--arrow-offset-x", `${m}%`);
  }
  _resetTooltipPositioningStyles(e) {
    e.style.left = "", e.style.right = "", e.style.top = "", e.style.transform = "", e.style.removeProperty("--arrow-offset-x");
  }
  render() {
    return y`
      <div class="nys-tooltip__main">
        ${this.text?.trim() ? y`<div
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
}, Do.styles = C(Bd), Do);
Oo([a({
  type: String,
  reflect: !0
}), Kn("design:type", Object)], oo.prototype, "id", void 0);
Oo([a({ type: String }), Kn("design:type", Object)], oo.prototype, "text", void 0);
Oo([a({
  type: Boolean,
  reflect: !0
}), Kn("design:type", Object)], oo.prototype, "inverted", void 0);
Oo([a({ type: String }), Kn("design:type", Object)], oo.prototype, "for", void 0);
Oo([$(), Kn("design:type", Object)], oo.prototype, "_active", void 0);
Oo([
  a({
    type: String,
    reflect: !0
  }),
  Kn("design:type", Object),
  Kn("design:paramtypes", [])
], oo.prototype, "position", null);
customElements.get("nys-tooltip") || customElements.define("nys-tooltip", oo);
/*!
   * █▄  █  █   █  █▀▀▀█  █▀▀▄  █▀▀▀█
   * █ █ █  █▄▄▄█  ▀▀▀▄▄  █   █ ▀▀▀▄▄
   * █  ▀█    █    █▄▄▄█  █▄▄▀  █▄▄▄█
   *
   * Label Component v1.21.0
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
const Fd = ':host{--_nys-label-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-label-font-weight: var(--nys-font-weight-semibold, 600);--_nys-label-font-size: var(--nys-font-size-ui-md, 16px);--_nys-label-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-label-letter-spacing: var(--nys-font-letterspacing-ui-md, .044px);--_nys-label-color: var(--nys-color-text, #1b1b1b);--_nys-label-cursor: normal;--_nys-description-font-weight: var(--nys-font-weight-regular, 400);--_nys-description-font-style: normal;--_nys-description-font-color: var(--nys-color-text-weak, #4a4d4f);--_nys-required-font-color: var(--nys-color-danger, #b52c2c);--_nys-optional-font-weight: var(--nys-font-weight-regular, 400);--_nys-optional-font-color: var(--nys-color-text-weak, #4a4d4f);--_nys-label-gap: var(--nys-space-4px, 4px)}p{margin:0}.nys-label{display:flex;flex-direction:column;align-items:flex-start;font-family:var(--_nys-label-font-family);font-size:var(--_nys-label-font-size);line-height:var(--_nys-label-line-height);letter-spacing:var(--_nys-label-letter-spacing)}.nys-label *{cursor:var(--_nys-label-cursor)}.nys-label__label{display:flex;gap:var(--_nys-label-gap);text-align:left;font-weight:var(--_nys-label-font-weight);color:var(--_nys-label-color)}.nys-label__description{text-align:left;font-weight:var(--_nys-description-font-weight);font-style:var(--_nys-description-font-style);color:var(--_nys-description-font-color)}.nys-label__required{display:contents;font-weight:var(--_nys-label-font-weight);color:var(--_nys-required-font-color)}.nys-label__optional{display:contents;font-weight:var(--_nys-optional-font-weight);color:var(--_nys-optional-font-color)}.nys-label__tooltip-wrapper{display:flex;gap:2px;align-items:center}.nys-label.invert .nys-label__label,.nys-label.invert .nys-label__description,.nys-label.invert .nys-label__optional{color:var(--nys-color-text-reverse, #ffffff)}.nys-label.invert .nys-label__tooltip-icon{color:var(--nys-color-ink-reverse, #ffffff)}';
var qd = Object.defineProperty, Mo = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && qd(e, t, o), o;
};
let Hd = 0;
const gl = class extends I {
  constructor() {
    super(...arguments), this.id = "", this.label = "", this.description = "", this.flag = "", this.inverted = !1, this.tooltip = "", this._labelInternals = typeof this.attachInternals == "function" ? this.attachInternals() : null;
  }
  get _hasDescription() {
    const e = this.querySelector('[slot="description"]');
    return !!this.description || !!e;
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-label-${Date.now()}-${Hd++}`);
  }
  updated() {
    this._labelInternals && (this._labelInternals.ariaLabel = this.label || null);
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
    return y`
      <div class="nys-label ${this.inverted ? "invert" : ""}">
        <div class="nys-label__tooltip-wrapper">
          <label class="nys-label__label" @click=${this._dispatchLabelClick}
            >${this.label}
            ${this.flag === "required" ? y`<div class="nys-label__required" aria-hidden="true">
                  *
                </div>` : ""}
            ${this.flag === "optional" ? y`<div class="nys-label__optional">(Optional)</div>` : ""}</label
          >
          ${this.tooltip ? y`<nys-tooltip
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
        ${this._hasDescription ? y`<p
              class="nys-label__description"
              @click=${this._dispatchLabelClick}
            >
              <slot name="description">${this.description}</slot>
            </p>` : ""}
      </div>
    `;
  }
};
gl.styles = C(Fd);
let ro = gl;
Mo([
  a({ type: String, reflect: !0 })
], ro.prototype, "id");
Mo([
  a({ type: String })
], ro.prototype, "label");
Mo([
  a({ type: String })
], ro.prototype, "description");
Mo([
  a({ type: String })
], ro.prototype, "flag");
Mo([
  a({ type: Boolean, reflect: !0 })
], ro.prototype, "inverted");
Mo([
  a({ type: String })
], ro.prototype, "tooltip");
customElements.get("nys-label") || customElements.define("nys-label", ro);
/*!
   * █▄  █  █   █  █▀▀▀█  █▀▀▄  █▀▀▀█
   * █ █ █  █▄▄▄█  ▀▀▀▄▄  █   █ ▀▀▀▄▄
   * █  ▀█    █    █▄▄▄█  █▄▄▀  █▄▄▄█
   *
   * Error message Component v1.21.0
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
const Vd = ':host{--_nys-errormessage-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-errormessage-font-weight: var(--nys-font-weight-regular, 400);--_nys-errormessage-font-size: var(--nys-font-size-ui-md, 16px);--_nys-errormessage-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-errormessage-letter-spacing: var( --nys-font-letterspacing-ui-md, .044px );--_nys-errormessage-color: var(--nys-color-danger, #b52c2c);--_nys-errormessage-gap: var(--nys-space-100, 8px);--_nys-errormessage-padding--divider: var(--nys-space-50, 4px);--_nys-errormessage-width--divider: var(--nys-border-width-sm, 1px);--_nys-errormessage-margin-top: 0}.nys-errormessage{display:flex;align-items:center;gap:var(--_nys-errormessage-gap);font-family:var(--_nys-errormessage-font-family);font-weight:var(--_nys-errormessage-font-weight);font-size:var(--_nys-errormessage-font-size);line-height:var(--_nys-errormessage-line-height);letter-spacing:var(--_nys-errormessage-letter-spacing);color:var(--_nys-errormessage-color);margin-top:var(--_nys-errormessage-margin-top)}.nys-errormessage[showDivider]{padding-top:var(--_nys-errormessage-padding--divider);margin-top:var(--_nys-errormessage-padding--divider);border-top:var(--_nys-errormessage-width--divider) solid var(--_nys-errormessage-color)}nys-icon{margin-top:-2px}';
var Ud = Object.defineProperty, Cs = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Ud(e, t, o), o;
};
let jd = 0;
const ml = class extends I {
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.showError = !1, this.errorMessage = "", this.showDivider = !1, this._errInternals = typeof this.attachInternals == "function" ? this.attachInternals() : null, this.id || (this.id = `nys-errormessage-${Date.now()}-${jd++}`);
  }
  updated() {
    this._errInternals && (this._errInternals.ariaLabel = this.errorMessage || null);
  }
  render() {
    return y`<div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      class="nys-errormessage__region"
    >
      ${this.showError ? y`<div class="nys-errormessage" ?showDivider=${this.showDivider}>
            <nys-icon name="error" size="2xl"></nys-icon>
            ${this.errorMessage}
          </div>` : ""}
    </div>`;
  }
};
ml.styles = C(Vd);
let kr = ml;
Cs([
  a({ type: String, reflect: !0 })
], kr.prototype, "id");
Cs([
  a({ type: Boolean })
], kr.prototype, "showError");
Cs([
  a({ type: String })
], kr.prototype, "errorMessage");
Cs([
  a({ type: Boolean, reflect: !0 })
], kr.prototype, "showDivider");
customElements.get("nys-errormessage") || customElements.define("nys-errormessage", kr);
const xl = ':host{--_nys-checkbox-size: var(--nys-size-400, 32px);--_nys-checkbox-border-radius: var(--nys-radius-md, 4px);--_nys-checkbox-border-width: var(--nys-border-width-md, 2px);--_nys-checkbox-outline-color: var(--nys-color-focus, #004dd1);--_nys-checkbox-outline-width: var(--nys-border-width-md, 2px);--_nys-checkbox-outline-offset: var(--nys-space-2px, 2px);--_nys-checkbox-gap: var(--nys-space-150, 12px);--_nys-checkboxgroup-gap: var(--nys-space-200, 16px);--_nys-checkbox-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-checkbox-font-size: var(--nys-font-size-ui-md, 16px);--_nys-checkbox-font-weight: var(--nys-font-weight-regular, 400);--_nys-checkbox-font-weight--standalone: var(--nys-font-weight-semibold, 600);--_nys-checkbox-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-checkbox-color: var( --nys-color-ink, var(--nys-color-neutral-900, #1b1b1b) );--_nys-checkbox-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-checkbox-border-color: var(--nys-color-neutral-600, #62666a);--_nys-checkbox-background-color--hover: var(--nys-color-neutral-50, #ededed);--_nys-checkbox-border-color--hover: var(--nys-color-ink, #1b1b1b);--_nys-checkbox-background-color--active: var( --nys-color-neutral-100, #d0d0ce );--_nys-checkbox-border-color--active: var(--nys-color-ink, #1b1b1b);--_nys-checkbox-background-color--checked: var(--nys-color-theme, #154973);--_nys-checkbox-border-color--checked: var(--nys-color-theme, #154973);--_nys-checkbox-background-color--checked--hover: var( --nys-color-theme-strong, #0e324f );--_nys-checkbox-border-color--checked--hover: var( --nys-color-theme-strong, #0e324f );--_nys-checkbox-background-color--checked--active: var( --nys-color-theme-stronger, #081b2b );--_nys-checkbox-border-color--checked--active: var( --nys-color-theme-stronger, #081b2b );--_nys-checkbox-background-color--disabled: var( --nys-color-ink-reverse, #f0f0f0 );--_nys-checkbox-border-color--disabled: var(--nys-color-neutral-400, #757575);--_nys-checkbox-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-checkbox-background-color--checked--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-checkbox-border-color--checked--disabled: var( --nys-color-neutral-100, #d0d0ce )}:host([size=sm]){--_nys-checkbox-size: var(--nys-size-300, 24px);--_nys-checkbox-border-radius: var(--nys-radius-sm, 2px);--_nys-checkboxgroup-gap: var(--nys-space-100, 8px);--_nys-checkbox-gap: var(--nys-space-100, 8px)}:host([size=md]){--_nys-checkbox-size: var(--nys-size-400, 32px);--_nys-checkbox-border-radius: var(--nys-radius-md, 4px)}:host([tile]){--_nys-checkbox-border-width--tile: var(--nys-border-width-sm, 1px);--_nys-checkbox-border-radius--tile: var(--nys-radius-md, 4px);--_nys-checkbox-border-color--tile: var(--nys-color-neutral-100, #d0d0ce);--_nys-checkbox-background-color--tile: var(--nys-color-ink-reverse, #ffffff);--_nys-checkbox-padding--x--tile: var(--nys-space-250, 20px);--_nys-checkbox-padding--y--tile: var(--nys-space-200, 16px);--_nys-checkbox-border-color--tile--hover: var( --nys-color-neutral-700, #4a4d4f );--_nys-checkbox-background-color--tile--hover: var( --nys-color-ink-reverse, #ffffff );--_nys-checkbox-border-color--tile--active: var( --nys-color-neutral-900, #1b1b1b );--_nys-checkbox-background-color--tile--active: var( --nys-color-ink-reverse, #ffffff );--_nys-checkbox-border-color--tile--checked: var( --nys-color-theme-mid, #457aa5 );--_nys-checkbox-background-color--tile--checked: var( --nys-color-theme-faint, #f7fafd );--_nys-checkbox-background-color--tile--disabled: var( --nys-color-ink-reverse, #f0f0f0 );--_nys-checkbox-border-color--tile--disabled: var( --nys-color-neutral-100, #d0d0ce )}:host([tile][size=sm]){--_nys-checkbox-padding--x--tile: var(--nys-space-200, 16px);--_nys-checkbox-padding--y--tile: var(--nys-space-150, 12px)}:host([tile][showError]){--_nys-checkbox-border-color--tile: var(--nys-color-danger, #b52c2c);--_nys-checkbox-border-color--tile--hover: var(--nys-color-danger, #b52c2c);--_nys-checkbox-border-color--tile--active: var(--nys-color-danger, #b52c2c);--_nys-checkbox-border-color--tile--checked: var(--nys-color-danger, #b52c2c)}.single-error-message{--_nys-errormessage-margin-top: var(--nys-space-50, 4px)}.nys-checkboxgroup{display:flex;flex-direction:column;gap:var(--nys-space-200, 16px);font-family:var(--_nys-checkbox-font-family);font-size:var(--_nys-checkbox-font-size);line-height:var(--_nys-checkbox-line-height)}.nys-checkboxgroup__content{display:flex;flex-direction:column;gap:var(--_nys-checkboxgroup-gap)}.nys-checkbox{display:flex;flex-direction:column;border-radius:var(--_nys-checkbox-border-radius--tile);border:var(--_nys-checkbox-border-width--tile) solid var(--_nys-checkbox-border-color--tile);background:var(--_nys-checkbox-background-color--tile);padding:var(--_nys-checkbox-padding--y--tile) var(--_nys-checkbox-padding--x--tile)}.nys-checkbox .nys-checkbox__main-container{display:flex;font-family:var(--_nys-checkbox-font-family);font-size:var(--_nys-checkbox-font-size);line-height:var(--_nys-checkbox-line-height);align-items:center;gap:var(--_nys-checkbox-gap)}.nys-checkbox .nys-checkbox__main-container.has-description{align-items:flex-start}.nys-checkbox__checkbox-wrapper{position:relative;display:flex;justify-content:center;align-items:center;max-height:var(--_nys-checkbox-size)}.nys-checkbox__icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;color:var(--nys-color-ink-reverse, #ffffff)}.nys-checkbox__checkbox{appearance:none;background-repeat:no-repeat;background-position:center;width:var(--_nys-checkbox-size);min-width:var(--_nys-checkbox-size);min-height:var(--_nys-checkbox-size);height:var(--_nys-checkbox-size);max-width:var(--_nys-checkbox-size);max-height:var(--_nys-checkbox-size);border:solid var(--_nys-checkbox-border-width) var(--_nys-checkbox-border-color);background-color:var(--_nys-checkbox-background-color);border-radius:var(--_nys-checkbox-border-radius);outline-offset:var(--_nys-checkbox-outline-offset);outline:none;margin:0}.nys-checkbox:hover,.nys-checkbox:hover *{cursor:pointer}.nys-checkbox__checkbox:not(:disabled):checked{background-color:var(--_nys-checkbox-background-color--checked);border-color:var(--_nys-checkbox-border-color--checked)}:host([tile]) .nys-checkbox:has(.nys-checkbox__checkbox:not(:disabled):checked){border-color:var(--_nys-checkbox-border-color--tile--checked);background-color:var(--_nys-checkbox-background-color--tile--checked)}.nys-checkbox__checkbox:disabled:checked{background-color:var(--_nys-checkbox-background-color--checked--disabled);border-color:var(--_nys-checkbox-border-color--checked--disabled)}:host([tile]) .nys-checkbox:has(.nys-checkbox__checkbox:disabled:checked){border-color:var(--_nys-checkbox-border-color--tile--disabled);background-color:var(--_nys-checkbox-background-color--tile--disabled)}.nys-checkbox__checkbox:disabled{background-color:var(--_nys-checkbox-background-color--disabled);border-color:var(--_nys-checkbox-border-color--disabled);cursor:not-allowed}.nys-checkbox:has(.nys-checkbox__checkbox:disabled) *{color:var(--_nys-checkbox-color--disabled);cursor:not-allowed;--_nys-label-cursor: not-allowed;--_nys-label-color: var(--_nys-checkbox-color--disabled)}:host([tile]) .nys-checkbox:has(.nys-checkbox__checkbox:disabled){background-color:var(--_nys-checkbox-background-color--disabled);border-color:var(--_nys-checkbox-border-color--disabled);cursor:not-allowed}.nys-checkbox:hover .nys-checkbox__checkbox:not(:disabled):not(:checked),.nys-checkbox__checkbox:hover:not(:disabled):not(:checked){background-color:var(--_nys-checkbox-background-color--hover);border-color:var(--_nys-checkbox-border-color--hover)}:host([tile]) .nys-checkbox:hover:has(.nys-checkbox__checkbox:not(:disabled):not(:checked)){border-color:var(--_nys-checkbox-border-color--tile--hover);background-color:var(--_nys-checkbox-background-color--tile--hover);outline:solid var(--_nys-checkbox-border-width--tile) var(--_nys-checkbox-border-color--tile--hover)}.nys-checkbox:hover .nys-checkbox__checkbox:not(:disabled):checked,.nys-checkbox__checkbox:hover:not(:disabled):checked{border-color:var(--_nys-checkbox-border-color--checked--hover);background-color:var(--_nys-checkbox-background-color--checked--hover)}:host([tile]) .nys-checkbox:hover:has(.nys-checkbox__checkbox:not(:disabled):checked){outline:solid var(--_nys-checkbox-border-width--tile) var(--_nys-checkbox-border-color--tile--checked)}.nys-checkbox:active .nys-checkbox__checkbox:not(:disabled):not(:checked),.nys-checkbox__checkbox:active:not(:disabled):not(:checked){background-color:var(--_nys-checkbox-background-color--active);border-color:var(--_nys-checkbox-border-color--active)}:host([tile]) .nys-checkbox:has(.nys-checkbox__checkbox:active:not(:disabled):not(:checked)){border-color:var(--_nys-checkbox-border-color--tile--active);background-color:var(--_nys-checkbox-background-color--tile--active);outline:solid var(--_nys-checkbox-border-width--tile) var(--_nys-checkbox-border-color--tile--active)}.nys-checkbox:active .nys-checkbox__checkbox:not(:disabled):checked,.nys-checkbox__checkbox:active:not(:disabled):checked{border-color:var(--_nys-checkbox-border-color--checked--active);background-color:var(--_nys-checkbox-background-color--checked--active)}:host(:not([tile])) .nys-checkbox__checkbox:focus{outline:solid var(--_nys-checkbox-outline-width) var(--_nys-checkbox-outline-color)}:host([tile]) .nys-checkbox:has(*:focus-visible),:host([tile][showError]) .nys-checkbox:has(*:focus){outline:solid var(--_nys-checkbox-border-width--tile) var(--_nys-checkbox-outline-color)!important;border-color:var(--_nys-checkbox-outline-color)!important}:host(:not([tile])) .nys-checkbox__main-container>nys-label{--_nys-label-font-weight: var(--_nys-checkbox-font-weight)}:host(:not([tile])) .nys-checkbox__main-container>nys-label.standalone{--_nys-label-font-weight: var(--_nys-checkbox-font-weight--standalone)}:host([tile]) .nys-checkbox__main-container>nys-label{--_nys-description-font-style: normal}.nys-checkbox__required{color:var(--nys-color-danger, #b52c2c)}.nys-checkbox__requiredwrapper{display:flex;gap:3px}fieldset{all:unset;display:contents}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}.nys-checkbox__other-container{display:flex;padding-inline-start:calc(var(--_nys-checkbox-size) + var(--_nys-checkbox-gap))}';
var Wd = Object.defineProperty, Ue = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Wd(e, t, o), o;
};
const us = class us extends pt {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this.required = !1, this.optional = !1, this.showError = !1, this.errorMessage = "", this.label = "", this.description = "", this.tile = !1, this.tooltip = "", this.form = null, this.size = "md", this._slottedDescriptionText = "", this._hasOtherError = !1, this._otherErrorCheckbox = null, this._hasSharedNames = !1;
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   * Form association, ElementInternals, and id generation are provided by
   * NysFormControlElement (@nysds/internals).
   */
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("nys-change", this._handleCheckboxChange), this.addEventListener("nys-other-input", this._handleOtherInput), this.addEventListener("invalid", this._handleInvalid), this.addEventListener("nys-error", this._handleChildError), this.addEventListener("nys-error-clear", this._handleChildErrorClear);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("nys-change", this._handleCheckboxChange), this.removeEventListener("nys-other-input", this._handleOtherInput), this.removeEventListener("invalid", this._handleInvalid), this.removeEventListener("nys-error", this._handleChildError), this.removeEventListener("nys-error-clear", this._handleChildErrorClear);
  }
  firstUpdated() {
    this._setGroupExist(), this._updateCheckboxSize(), this._updateCheckboxTile(), this._updateCheckboxShowError();
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
    const e = Array.from(
      this.querySelectorAll("nys-checkbox")
    );
    this._hasSharedNames = this._checkSharedNames(e), e.forEach((t) => {
      t.groupExist = this._hasSharedNames;
    });
  }
  // Initial update on checkbox required attribute
  async _setupCheckboxRequired() {
    const e = this.querySelector("nys-checkbox"), t = this.errorMessage || "This field is required", n = e ? await e.getInputElement() : null;
    this.setValidityFromState(
      { valueMissing: !0 },
      t,
      n || this
    );
  }
  // Updates the required attribute of each checkbox in the group
  async _manageRequire() {
    if (!this.required) {
      this.clearValidity(), this.showError = !1;
      return;
    }
    const e = this.errorMessage || "You must make a selection to proceed.", t = Array.from(
      this.querySelectorAll("nys-checkbox")
    ), n = this._hasAtLeastOneChecked(), o = t ? await t[0].getInputElement().catch(() => null) : null;
    this.clearValidity(), this.showError = !1, n ? this._hasOtherError && this._otherErrorCheckbox && (this._setCustomOtherError(), this.showError = !0) : this._hasOtherError ? (this._setCustomOtherError(), this.showError = !0) : (this.setValidityFromState(
      { valueMissing: !0 },
      e,
      o ?? this
    ), this.showError = !0);
  }
  _setCustomOtherError() {
    const t = this._otherErrorCheckbox?.shadowRoot?.querySelector("nys-textinput") || this._otherErrorCheckbox;
    this.setValidityFromState(
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
    this._slottedDescriptionText = t.map((n) => n.textContent?.trim()).filter(Boolean).join(", ");
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.querySelectorAll("nys-checkbox").forEach((t) => {
      t.formResetCallback();
    }), this.setFormValue(""), this.showError = !1, this.clearValidity(), this.requestUpdate();
  }
  async _handleInvalid(e) {
    if (e.preventDefault(), this.internals?.validity.customError) {
      const s = Array.from(
        this.querySelectorAll("nys-checkbox")
      ).find(
        (i) => i.other && i.checked
      );
      if (s) {
        const i = s.shadowRoot?.querySelector("nys-textinput");
        if (i) {
          await i.updateComplete, i.focus();
          return;
        }
      }
    }
    this.showError = !0, await this._manageRequire();
    const t = this.querySelector("nys-checkbox"), n = t ? await t.getInputElement() : null;
    if (n) {
      const o = this.internals?.form;
      o ? Array.from(o.elements).find((d) => {
        if (d.tagName.toLowerCase() === "nys-checkboxgroup") {
          if (Array.from(
            this.querySelectorAll("nys-checkbox")
          ).filter(
            (m) => m.checked
          ).length === 0)
            return d;
        } else
          return typeof d.checkValidity == "function" && !d.checkValidity();
      }) === this && n.focus() : n.focus();
    }
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  // Similar to how native forms handle multiple same-name fields, we group the selected values into a list for FormData.
  _handleCheckboxChange(e) {
    const t = Array.from(
      this.querySelectorAll("nys-checkbox")
    );
    if (this._hasSharedNames) {
      const n = e, { name: o } = n.detail, s = t.filter((i) => i.checked).map((i) => i.value);
      this.name = o, this.setFormValue(s.join(", "));
    }
    this._checkOtherInputs(t), this._hasOtherError || this._manageRequire();
  }
  async _handleChildError(e) {
    e.stopPropagation();
    const { sourceCheckbox: t } = e.detail;
    t && (this._hasOtherError = !0, this._otherErrorCheckbox = t, this.showError = !0, this._setCustomOtherError());
  }
  _handleChildErrorClear(e) {
    const n = e.detail?.sourceCheckbox;
    this._otherErrorCheckbox && n !== this._otherErrorCheckbox || (this._hasOtherError = !1, this._otherErrorCheckbox = null, this.clearValidity(), this.showError = !1, this.required && !this._hasAtLeastOneChecked() && this._manageRequire());
  }
  _handleOtherInput() {
    const t = Array.from(
      this.querySelectorAll("nys-checkbox")
    ).filter((n) => n.checked).map((n) => n.value);
    this.setFormValue(t.join(", "));
  }
  async _checkOtherInputs(e) {
    for (const t of e)
      if (t.checked && t.other) {
        const n = t.value.trim();
        if (!t._hasUserInteracted)
          continue;
        if (!n || n === "") {
          this._hasOtherError = !0, this._otherErrorCheckbox = t, this._setCustomOtherError(), this.showError = !0;
          return;
        }
      }
    this._hasOtherError && (this._hasOtherError = !1, this._otherErrorCheckbox = null, this.required ? this._manageRequire() : (this.clearValidity(), this.showError = !1));
  }
  /** Drupal-like naming support **/
  _checkSharedNames(e) {
    if (e.length === 0) return !1;
    const t = e[0].name;
    return e.every((n) => n.name === t);
  }
  render() {
    return y`
      <fieldset
        aria-labelledby=${v(
      this.label ? this.id + "--label" : void 0
    )}
        aria-label=${v(
      this.label ? void 0 : `${this._slottedDescriptionText || this.description || ""}`.trim() || void 0
    )}
        class="nys-checkboxgroup"
        role="radiogroup"
      >
        <nys-label
          id="${this.id}--label"
          label=${this.label}
          description=${this.description}
          flag=${this.required ? "required" : this.optional ? "optional" : ""}
          tooltip=${this.tooltip}
        >
          <slot
            name="description"
            slot="description"
            @slotchange=${this._getSlotDescriptionForAria}
            >${this.description}</slot
          >
        </nys-label>
        <div class="nys-checkboxgroup__content">
          <slot></slot>
        </div>
        <nys-errormessage
          id=${this.id + "--error"}
          ?showError=${this.showError}
          errorMessage=${this.internals?.validationMessage || this.errorMessage}
          .showDivider=${!this.tile}
        ></nys-errormessage>
      </fieldset>
    `;
  }
};
us.styles = C(xl), us.shadowRootOptions = {
  ...I.shadowRootOptions,
  delegatesFocus: !0
};
let we = us;
Ue([
  a({ type: String, reflect: !0 })
], we.prototype, "id");
Ue([
  a({ type: String, reflect: !0 })
], we.prototype, "name");
Ue([
  a({ type: Boolean, reflect: !0 })
], we.prototype, "required");
Ue([
  a({ type: Boolean, reflect: !0 })
], we.prototype, "optional");
Ue([
  a({ type: Boolean, reflect: !0 })
], we.prototype, "showError");
Ue([
  a({ type: String })
], we.prototype, "errorMessage");
Ue([
  a({ type: String })
], we.prototype, "label");
Ue([
  a({ type: String })
], we.prototype, "description");
Ue([
  a({ type: Boolean, reflect: !0 })
], we.prototype, "tile");
Ue([
  a({ type: String })
], we.prototype, "tooltip");
Ue([
  a({ type: String, reflect: !0 })
], we.prototype, "form");
Ue([
  a({ type: String, reflect: !0 })
], we.prototype, "size");
Ue([
  $()
], we.prototype, "_slottedDescriptionText");
Ue([
  $()
], we.prototype, "_hasOtherError");
Ue([
  $()
], we.prototype, "_otherErrorCheckbox");
customElements.get("nys-checkboxgroup") || customElements.define("nys-checkboxgroup", we);
/*!
   * █▄  █  █   █  █▀▀▀█  █▀▀▄  █▀▀▀█
   * █ █ █  █▄▄▄█  ▀▀▀▄▄  █   █ ▀▀▀▄▄
   * █  ▀█    █    █▄▄▄█  █▄▄▀  █▄▄▄█
   *
   * Textinput Component v1.21.0
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
/*!
  * New York State Design System v1.21.0
  * Description: A design system for New York State's digital products.
  * Repository: https://github.com/its-hcd/nysds
  * License: MIT
*/
var Yd = 0;
function Gd(r) {
  return `${r}-${Date.now()}-${Yd++}`;
}
var Kd = (r) => {
  class e extends r {
    get idPrefix() {
      return this.localName || "nys-element";
    }
    ensureId() {
      this.id || (this.id = Gd(this.idPrefix));
    }
    connectedCallback() {
      super.connectedCallback(), this.ensureId();
    }
  }
  return e;
}, Zd = (r) => {
  class e extends Kd(r) {
    constructor(...n) {
      super(...n), this.__internals = null;
    }
    get internals() {
      if (this.__internals) return this.__internals;
      if (typeof this.attachInternals == "function") try {
        this.__internals = this.attachInternals();
      } catch {
        this.__internals = null;
      }
      return this.__internals;
    }
    get defaultRole() {
      return null;
    }
    setHostAria(n, o) {
      const s = this.internals;
      if (s && n in s) {
        s[n] = o;
        return;
      }
      const i = Xd(n);
      o === null ? this.removeAttribute(i) : this.setAttribute(i, o);
    }
    reflectDefaultSemantics() {
      const n = this.defaultRole;
      n && this.setHostAria("role", n);
    }
    connectedCallback() {
      super.connectedCallback(), this.reflectDefaultSemantics();
    }
  }
  return e;
};
function Xd(r) {
  if (r === "role") return "role";
  const e = r.replace(/^aria/, "");
  return "aria-" + e.charAt(0).toLowerCase() + e.slice(1);
}
var Qd = (r) => {
  const e = class extends Zd(r) {
    setFormValue(o) {
      this.internals?.setFormValue(o ?? null);
    }
    setValidityFromState(o, s, i) {
      const d = this.internals;
      if (!d) return;
      const p = Object.values(o).some(Boolean);
      p ? d.setValidity(o, s ?? "Invalid value", i) : d.setValidity({}), this.setHostAria("ariaInvalid", p ? "true" : "false");
    }
    clearValidity() {
      this.internals?.setValidity({}), this.setHostAria("ariaInvalid", "false");
    }
    checkValidity() {
      return this.internals?.checkValidity() ?? !0;
    }
    reportValidity() {
      return this.internals?.reportValidity() ?? !0;
    }
    formResetCallback() {
      this.clearValidity();
    }
  };
  return e.formAssociated = !0, e;
}, Jd = /* @__PURE__ */ Qd(I);
const eh = '@charset "UTF-8";:host{--_nys-textinput-width: 100%;--_nys-textinput-height: var(--nys-size-500, 40px);--_nys-textinput-border-radius: var(--nys-radius-md, 4px);--_nys-textinput-border-width: var(--nys-border-width-sm, 1px);--_nys-textinput-border-color: var(--nys-color-neutral-400, #909395);--_nys-textinput-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-textinput-color--placeholder: var( --nys-color-text-weaker, var(--nys-color-neutral-500, #797c7f) );--_nys-textinput-padding: var(--nys-space-100, 8px);--_nys-textinput-gap: var(--nys-space-50, 4px);--_nys-textinput-background-color: var( --nys-color-ink-reverse, var(--nys-color-white, #ffffff) );--_nys-textinput-outline-color--hover: var(--nys-color-neutral-900, #1b1b1b);--_nys-textinput-outline-width: var(--nys-border-width-sm, 1px);--_nys-textinput-outline-color--focus: var(--nys-color-focus, #004dd1);--_nys-textinput-background-color--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-textinput-border-color--disabled: var( --nys-color-neutral-200, #bec0c1 );--_nys-textinput-color--disabled: var( --nys-color-text-disabled, var(--nys-color-neutral-200, #bec0c1) );--_nys-textinput-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-textinput-font-size: var(--nys-font-size-ui-md, 16px);--_nys-textinput-font-weight: var(--nys-font-weight-regular, 400);--_nys-textinput-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-textinput-letter-spacing: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) )}:host([width=sm]){--_nys-textinput-width: var(--nys-form-width-sm, 88px)}:host([width=md]){--_nys-textinput-width: var(--nys-form-width-md, 200px)}:host([width=lg]){--_nys-textinput-width: var(--nys-form-width-lg, 384px)}:host([width=full]){--_nys-textinput-width: 100%;flex:1}:host([showError]){--_nys-textinput-border-color: var(--nys-color-danger, #b52c2c)}:host([inverted]){--_nys-textinput-outline-color--focus: var( --nys-color-focus-reverse, #7aa5e7 )}.nys-textinput{font-weight:var(--_nys-textinput-font-weight);font-family:var(--_nys-textinput-font-family);font-size:var(--_nys-textinput-font-size);line-height:var(--_nys-textinput-line-height);letter-spacing:var(--_nys-textinput-letter-spacing);color:var(--_nys-textinput-color);gap:var(--_nys-textinput-gap);display:flex;flex-direction:column}.nys-textinput__mask-overlay{position:absolute;margin:calc(var(--_nys-textinput-padding) + var(--_nys-textinput-border-width));color:var(--nys-color-text-weaker, #797c7f);display:inline;overflow:hidden;white-space:nowrap;font:inherit;letter-spacing:normal}.nys-textinput__input{color:var(--_nys-textinput-color);border-radius:var(--_nys-textinput-border-radius);border:solid var(--_nys-textinput-border-color) var(--_nys-textinput-border-width);outline:transparent solid var(--_nys-textinput-outline-width);padding:var(--_nys-textinput-padding);width:100%;height:var(--_nys-textinput-height);box-sizing:border-box;background-color:transparent;position:relative;font:inherit}.nys-textinput__input[type=search]::-webkit-search-cancel-button,.nys-textinput__input[type=search]::-webkit-search-decoration{appearance:none;display:none}.nys-textinput__input::placeholder{color:var(--_nys-textinput-color--placeholder)}.nys-textinput__buttoncontainer{width:var(--_nys-textinput-width);max-width:100%;display:flex}.nys-textinput__buttoncontainer.has-end-button .nys-textinput__input{border-start-end-radius:0;border-end-end-radius:0;border-inline-end:none}.nys-textinput__buttoncontainer.has-start-button .nys-textinput__input{border-start-start-radius:0;border-end-start-radius:0;border-inline-start:none}.nys-textinput__container{position:relative;display:flex;align-items:center;width:100%;background-color:var(--_nys-textinput-background-color);border-radius:var(--_nys-textinput-border-radius)}::slotted(nys-button){--_nys-button-height: var(--_nys-textinput-height);--_nys-button-border-radius: var(--_nys-textinput-border-radius);--_nys-button-background-color--disabled: var( --_nys-textinput-background-color--disabled );--_nys-button-border-color--disabled: var(--_nys-textinput-color--disabled);--_nys-button-color--disabled: var(--_nys-textinput-color--disabled);--_nys-button-border-width: var(--_nys-textinput-border-width);z-index:1}.nys-textinput__buttoncontainer.has-start-button ::slotted(nys-button){--_nys-button-border-radius: var(--_nys-textinput-border-radius) 0 0 var(--_nys-textinput-border-radius)}.nys-textinput__buttoncontainer.has-end-button ::slotted(nys-button){--_nys-button-border-radius: 0 var(--_nys-textinput-border-radius) var(--_nys-textinput-border-radius) 0}.inline-icon{position:absolute;right:var(--nys-space-50, 4px);top:50%;transform:translateY(-50%);cursor:pointer;color:var(--_nys-textinput-color--icon);--nys-button-background-color: var(--_nys-textinput-background-color);--nys-button-background-color--hover: var(--_nys-textinput-background-color);--nys-button-background-color--active: var(--_nys-textinput-background-color);--_nys-button-outline-focus: calc(var(--_nys-button-outline-width) * -1);--_nys-button-padding--y: var(--nys-space-50, 4px);--_nys-button-padding--x: var(--nys-space-50, 4px);--_nys-button-height: var(--nys-size-300, 32px);--_nys-button-width: var(--nys-size-400, 32px)}.nys-textinput__input:hover:not(:disabled):not(:focus):not([readonly]){outline-color:var(--_nys-textinput-outline-color--hover);border-color:var(--_nys-textinput-outline-color--hover)}.nys-textinput__input:focus:not([readonly]){outline-color:var(--_nys-textinput-outline-color--focus);border-color:var(--_nys-textinput-outline-color--focus);caret-color:var(--_nys-textinput-outline-color--focus)}.nys-textinput__input:disabled,.nys-textinput__input:disabled::placeholder,.nys-textinput__input:disabled+.eye-icon{background-color:var(--_nys-textinput-background-color--disabled);border-color:var(--_nys-textinput-border-color--disabled);color:var(--_nys-textinput-color--disabled);cursor:not-allowed}';
var th = Object.defineProperty, Z = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && th(e, t, o), o;
};
const fi = class extends Jd {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this.type = "text", this.label = "", this.description = "", this.placeholder = "", this.value = "", this.disabled = !1, this.readonly = !1, this.required = !1, this.optional = !1, this.tooltip = "", this.form = null, this.pattern = "", this.maxlength = null, this.ariaLabel = "", this.width = "full", this.step = null, this.min = null, this.max = null, this.inverted = !1, this.showError = !1, this.errorMessage = "", this.showPassword = !1, this._originalErrorMessage = "", this._hasUserInteracted = !1, this._maskPatterns = {
      tel: "(___) ___-____"
    };
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   * Form association, ElementInternals, and id generation are provided by
   * NysFormControlElement (@nysds/internals).
   */
  connectedCallback() {
    super.connectedCallback(), this._originalErrorMessage = this.errorMessage ?? "", this.addEventListener("invalid", this._handleInvalid);
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
      const t = this._maskPatterns[this.type], n = this._inputEl;
      if (n)
        if (t)
          this.maxlength === null && (n.maxLength = t.length), this._updateOverlay(n.value, t);
        else {
          this.maxlength === null && n.removeAttribute("maxLength");
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
    this.setFormValue(this.value), this._manageRequire();
  }
  _manageRequire() {
    const e = this._inputEl;
    if (!e) return;
    const t = this.errorMessage || "This field is required";
    this.required && (!this.value || this.value?.trim() === "") ? this.setValidityFromState({ valueMissing: !0 }, t, e) : (this.clearValidity(), this._hasUserInteracted = !1);
  }
  _setValidityMessage(e = "") {
    const t = this._inputEl;
    t && (this.showError = !!e, this._originalErrorMessage?.trim() && e !== "" ? this.errorMessage = this._originalErrorMessage : this.errorMessage = e, e ? this.setValidityFromState(
      { customError: !0 },
      this.errorMessage,
      t
    ) : this.clearValidity());
  }
  _validate() {
    const e = this._inputEl;
    if (!e) return;
    const t = e.validity;
    let n = "";
    t.valueMissing ? n = "This field is required" : t.typeMismatch ? n = "Invalid format for this type" : t.patternMismatch ? n = "Invalid format" : t.tooShort ? n = `Value is too short. Minimum length is ${e.minLength}` : t.tooLong ? n = `Value is too long. Maximum length is ${e.maxLength}` : t.rangeUnderflow ? n = `Value must be at least ${e.min}` : t.rangeOverflow ? n = `Value must be at most ${e.max}` : t.stepMismatch ? n = "Invalid step value" : n = e.validationMessage, this._setValidityMessage(n);
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.value = "";
    const e = this._inputEl;
    e && (e.value = ""), this.setFormValue(""), this.showError = !1, this.errorMessage = "", this.clearValidity(), this.showPassword = !1;
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
      const n = this.internals?.form;
      n ? Array.from(n.elements).find(
        (o) => typeof o.checkValidity == "function" && !o.checkValidity()
      ) === this && t.focus() : t.focus();
    }
  }
  _togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  _clearSearch() {
    this.value = "";
    const e = this._inputEl;
    e && (e.value = "", e.focus()), this.setFormValue(""), this._hasUserInteracted && this._validate(), this.dispatchEvent(
      new CustomEvent("nys-input", {
        detail: { id: this.id, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _updateOverlay(e, t) {
    const n = this.shadowRoot?.querySelector(
      ".nys-textinput__mask-overlay"
    );
    if (!n) return;
    const o = e, s = t.slice(o.length);
    n.textContent = o + s;
  }
  _applyMask(e, t) {
    const n = e.replace(/\D/g, "");
    let o = "";
    if (this.type === "tel")
      return n.length > 0 && (o = "(" + n.substring(0, 3)), n.length >= 4 && (o += ") " + n.substring(3, 6)), n.length > 6 && (o += "-" + n.substring(6, 10)), o;
    let s = 0;
    for (let i = 0; i < t.length; i++)
      if (t[i] === "_" || t[i].match(/[d9]/i))
        if (s < n.length)
          o += n[s++];
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
    let n = t.value;
    const o = this._maskPatterns[this.type];
    o && (n = this._applyMask(n, o), t.value = n, this._updateOverlay(n, o)), this.value = n, this.setFormValue(this.value), this._hasUserInteracted && this._validate(), this.dispatchEvent(
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
    ), n = this.shadowRoot?.querySelector(
      ".nys-textinput__buttoncontainer"
    );
    if (!t || !n) return;
    const o = t.assignedElements();
    let s = !1;
    o.forEach((i) => {
      i instanceof HTMLElement && i.tagName.toLowerCase() === "nys-button" && !s ? (s = !0, i.setAttribute("size", "sm"), i.setAttribute("variant", "primary"), this.disabled ? i.setAttribute("disabled", "true") : i.removeAttribute("disabled")) : (console.warn(
        "The '" + e + "' slot only accepts a single <nys-button> element. Removing invalid or extra node:",
        i
      ), i.remove());
    }), e === "startButton" ? n.classList.toggle("has-start-button", s) : e === "endButton" && n.classList.toggle("has-end-button", s);
  }
  render() {
    return y`
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
              aria-labelledby=${v(
      this.label ? this.id + "--label" : void 0
    )}
              aria-label=${v(
      !this.label && this.ariaLabel ? this.ariaLabel : void 0
    )}
              aria-required=${this.required}
              aria-disabled="${this.disabled}"
              aria-invalid=${this.showError ? "true" : "false"}
              aria-errormessage=${this.id + "--error"}
              aria-describedby=${v(
      this.showError ? this.id + "--error" : void 0
    )}
              .value=${this.value}
              placeholder=${v(
      this.placeholder ? this.placeholder : void 0
    )}
              pattern=${v(this.pattern ? this.pattern : void 0)}
              min=${v(this.min !== null ? this.min : void 0)}
              maxlength=${v(
      this.maxlength !== null ? this.maxlength : void 0
    )}
              step=${v(this.step !== null ? this.step : void 0)}
              max=${v(this.max !== null ? this.max : void 0)}
              form=${v(this.form || void 0)}
              @input=${this._handleInput}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
            />
            ${this.type === "password" ? y` <nys-button
                  class="inline-icon"
                  id="password-toggle"
                  ariaLabel="password toggle"
                  variant="ghost"
                  circle
                  size="sm"
                  @nys-click=${() => !this.disabled && this._togglePasswordVisibility()}
                >
                  <nys-icon
                    slot="circle-icon"
                    size="2xl"
                    name=${this.showPassword ? "visibility_off" : "visibility"}
                  ></nys-icon>
                </nys-button>` : ""}
            ${this.type === "search" && this.value && !this.disabled && !this.readonly ? y` <nys-button
                  class="inline-icon"
                  id="search-clear"
                  ariaLabel="clear search"
                  variant="ghost"
                  circle
                  size="sm"
                  @nys-click=${() => this._clearSearch()}
                >
                  <nys-icon
                    slot="circle-icon"
                    size="2xl"
                    name="close"
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
fi.styles = C(eh), fi.shadowRootOptions = {
  ...I.shadowRootOptions,
  delegatesFocus: !0
};
let Y = fi;
Z([
  a({ type: String, reflect: !0 })
], Y.prototype, "id");
Z([
  a({ type: String, reflect: !0 })
], Y.prototype, "name");
Z([
  a({ type: String, reflect: !0 })
], Y.prototype, "type");
Z([
  a({ type: String })
], Y.prototype, "label");
Z([
  a({ type: String })
], Y.prototype, "description");
Z([
  a({ type: String })
], Y.prototype, "placeholder");
Z([
  a({ type: String })
], Y.prototype, "value");
Z([
  a({ type: Boolean, reflect: !0 })
], Y.prototype, "disabled");
Z([
  a({ type: Boolean, reflect: !0 })
], Y.prototype, "readonly");
Z([
  a({ type: Boolean, reflect: !0 })
], Y.prototype, "required");
Z([
  a({ type: Boolean, reflect: !0 })
], Y.prototype, "optional");
Z([
  a({ type: String })
], Y.prototype, "tooltip");
Z([
  a({ type: String, reflect: !0 })
], Y.prototype, "form");
Z([
  a({ type: String })
], Y.prototype, "pattern");
Z([
  a({ type: Number })
], Y.prototype, "maxlength");
Z([
  a({ type: String })
], Y.prototype, "ariaLabel");
Z([
  a({ type: String, reflect: !0 })
], Y.prototype, "width");
Z([
  a({ type: Number })
], Y.prototype, "step");
Z([
  a({ type: Number })
], Y.prototype, "min");
Z([
  a({ type: Number })
], Y.prototype, "max");
Z([
  a({ type: Boolean, reflect: !0 })
], Y.prototype, "inverted");
Z([
  a({ type: Boolean, reflect: !0 })
], Y.prototype, "showError");
Z([
  a({ type: String })
], Y.prototype, "errorMessage");
Z([
  to("input")
], Y.prototype, "_inputEl");
Z([
  $()
], Y.prototype, "showPassword");
customElements.get("nys-textinput") || customElements.define("nys-textinput", Y);
var nh = Object.defineProperty, ue = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && nh(e, t, o), o;
};
const ys = class ys extends pt {
  constructor() {
    super(...arguments), this.checked = !1, this.disabled = !1, this.required = !1, this.label = "", this.description = "", this.id = "", this.name = "", this.value = "", this.form = null, this.showError = !1, this.errorMessage = "", this.groupExist = !1, this.tile = !1, this.tooltip = "", this.size = "md", this.other = !1, this.showOtherError = !1, this.labelledby = "", this.hideLabel = !1, this._mobileQuery = window.matchMedia("(max-width: 479px)"), this.isMobile = this._mobileQuery.matches, this._hasUserInteracted = !1, this._manageLabelClick = () => {
      const e = this.shadowRoot?.querySelector(
        ".nys-checkbox__main-container"
      ), t = this.shadowRoot?.querySelector("input");
      !e || !t || e.addEventListener("click", (n) => {
        n.target.tagName.toLowerCase() !== "input" && (this.disabled || (t.click(), t.focus()));
      });
    }, this._handleMobileQuery = () => {
      this.isMobile = this._mobileQuery.matches;
    };
  }
  // need this flag for "eager mode"
  async getInputElement() {
    return await this.updateComplete, this.shadowRoot?.querySelector("input") || null;
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   * Form association, ElementInternals, and id generation are provided by
   * NysFormControlElement (@nysds/internals).
   */
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("invalid", this._handleInvalid), this.addEventListener("blur", this._handleBlur), this._mobileQuery.addEventListener("change", this._handleMobileQuery);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid), this.removeEventListener("blur", this._handleBlur), this._mobileQuery.removeEventListener("change", this._handleMobileQuery);
  }
  firstUpdated() {
    this._setValue(), this._manageRequire(), this._manageLabelClick(), this.labelledby && this._syncExternalLabel();
  }
  willUpdate(e) {
    if (e.has("labelledby") && !this.labelledby) {
      const t = this.shadowRoot?.querySelector("input");
      t && fr(t, "labelledby", []);
    }
  }
  updated(e) {
    e.has("labelledby") && this.labelledby && this._syncExternalLabel();
  }
  /**
   * Point the native <input> at a light-DOM element that IDREF attributes cannot
   * reach across the shadow boundary. associateControlRefs sets the control's own
   * ariaLabelledByElements (honored in Chromium) plus a string aria-label fallback
   * for engines that do not yet resolve element references.
   *
   * Only ever called with an external labelledby set: with no external target the
   * native input keeps the internal same-root aria-labelledby IDREF that render()
   * emits, and must not be touched.
   */
  _syncExternalLabel() {
    const e = this.shadowRoot?.querySelector("input");
    if (!e) return;
    const t = this.getRootNode().getElementById(
      this.labelledby
    );
    fr(e, "labelledby", [t]);
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    this.groupExist || this.setFormValue(this.checked ? this.value : null);
  }
  _manageRequire() {
    const e = this.shadowRoot?.querySelector("input"), t = this.errorMessage || "This field is required";
    e && (this.required && !this.checked ? this.setValidityFromState({ valueMissing: !0 }, t, e) : this.clearValidity());
  }
  _setValidityMessage(e = "") {
    const t = this.shadowRoot?.querySelector("input");
    t && (this.showError = !!e, this.errorMessage?.trim() && e !== "" && (e = this.errorMessage), e ? this.setValidityFromState({ customError: !0 }, e, t) : this.clearValidity());
  }
  _validate() {
    const e = this.shadowRoot?.querySelector("input");
    if (!e) return;
    const t = e.validity;
    let n = "";
    t.valueMissing && (n = "This field is required"), this._setValidityMessage(n);
  }
  // Called automatically when the parent form is reset
  formResetCallback() {
    this.checked = !1, this.setFormValue(null);
    const e = this.shadowRoot?.querySelector("input");
    e && (e.checked = !1), this.showError = !1, this.errorMessage = "", this.clearValidity(), this.requestUpdate();
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
      const n = this.internals?.form;
      n ? Array.from(n.elements).find(
        (i) => typeof i.checkValidity == "function" && !i.checkValidity()
      ) === this && t.focus() : t.focus();
    }
  }
  get _hasDescription() {
    const e = this.querySelector('[slot="description"]');
    return !!this.description || !!e;
  }
  get _isStandalone() {
    return this.parentElement?.tagName.toLowerCase() !== "nys-checkboxgroup";
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
    const { checked: t } = e.target, n = this.checked;
    this.checked = t, this.groupExist || this.setFormValue(this.checked ? this.value : null), this.other && n && !t && (this.showOtherError = !1, this._hasUserInteracted = !1, this._dispatchClearError()), this._validate(), this._emitChangeEvent();
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
    e.code === "Space" && (e.preventDefault(), this.disabled || (this.checked = !this.checked, this.setFormValue(this.checked ? this.value : null), await this.updateComplete, this._validate(), this._emitChangeEvent()));
  }
  _handleTextInput(e) {
    let n = e.target.value;
    this.value = n, this._hasUserInteracted && this._validateOtherAndEmitError(), this._emitOtherInputEvent();
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
    return y`
      <div class="nys-checkbox">
        <div
          class="nys-checkbox__main-container ${this._hasDescription ? "has-description" : ""}"
        >
          <div class="nys-checkbox__checkbox-wrapper">
            <input
              id=${this.id + "--native"}
              class="nys-checkbox__checkbox"
              type="checkbox"
              name="${v(this.name ? this.name : void 0)}"
              .checked=${this.checked}
              ?disabled=${this.disabled}
              .value=${this.value}
              ?required="${this.required}"
              form=${v(this.form || void 0)}
              aria-checked="${this.checked}"
              aria-disabled="${this.disabled ? "true" : "false"}"
              aria-required="${this.required}"
              aria-invalid=${this.showError ? "true" : "false"}
              aria-errormessage=${this.id + "--error"}
              aria-describedby=${v(
      this.showError ? this.id + "--error" : void 0
    )}
              @change="${this._handleChange}"
              @focus="${this._handleFocus}"
              @keydown="${this._handleKeydown}"
              aria-labelledby=${v(
      !this.labelledby && (this.label || this.other) ? this.id + "--label" : void 0
    )}
            />
            ${this.checked ? y`<nys-icon
                  name="check"
                  size="${this.size === "md" ? "4xl" : this.size === "sm" ? "2xl" : "4xl"}"
                  class="nys-checkbox__icon"
                ></nys-icon>` : ""}
          </div>
          ${this.hideLabel || this.labelledby || !(this.label || this.other) ? Wn : y`<nys-label
                id="${this.id}--label"
                tooltip=${this.tooltip}
                label="${this.label || (this.other ? "Other" : "")}"
                description=${v(this.description || void 0)}
                flag=${v(this.required ? "required" : void 0)}
                class=${this._isStandalone ? "standalone" : ""}
              >
                <slot name="description" slot="description"
                  >${this.description}</slot
                >
              </nys-label>`}
        </div>
        <div class="nys-checkbox__other-container">
          ${this.other && this.checked ? y`
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
      ${this.parentElement?.tagName.toLowerCase() !== "nys-checkboxgroup" ? y`<nys-errormessage
            id=${this.id + "--error"}
            class="single-error-message"
            ?showError=${this.showError}
            errorMessage=${this.internals?.validationMessage || this.errorMessage}
            .showDivider=${!this.tile}
          ></nys-errormessage>` : ""}
    `;
  }
};
ys.styles = C(xl), ys.shadowRootOptions = {
  ...I.shadowRootOptions,
  delegatesFocus: !0
};
let J = ys;
ue([
  a({ type: Boolean, reflect: !0 })
], J.prototype, "checked");
ue([
  a({ type: Boolean, reflect: !0 })
], J.prototype, "disabled");
ue([
  a({ type: Boolean, reflect: !0 })
], J.prototype, "required");
ue([
  a({ type: String })
], J.prototype, "label");
ue([
  a({ type: String })
], J.prototype, "description");
ue([
  a({ type: String, reflect: !0 })
], J.prototype, "id");
ue([
  a({ type: String, reflect: !0 })
], J.prototype, "name");
ue([
  a({ type: String })
], J.prototype, "value");
ue([
  a({ type: String, reflect: !0 })
], J.prototype, "form");
ue([
  a({ type: Boolean, reflect: !0 })
], J.prototype, "showError");
ue([
  a({ type: String })
], J.prototype, "errorMessage");
ue([
  a({ type: Boolean })
], J.prototype, "groupExist");
ue([
  a({ type: Boolean, reflect: !0 })
], J.prototype, "tile");
ue([
  a({ type: String })
], J.prototype, "tooltip");
ue([
  a({ type: String, reflect: !0 })
], J.prototype, "size");
ue([
  a({ type: Boolean, reflect: !0 })
], J.prototype, "other");
ue([
  a({ type: Boolean })
], J.prototype, "showOtherError");
ue([
  a({ type: String })
], J.prototype, "labelledby");
ue([
  a({ type: Boolean })
], J.prototype, "hideLabel");
ue([
  $()
], J.prototype, "isMobile");
customElements.get("nys-checkbox") || customElements.define("nys-checkbox", J);
const oh = ':host{--_nys-combobox-width: 100%;--_nys-combobox-height: var(--nys-size-500, 40px);--_nys-combobox-border-radius: var(--nys-radius-md, 4px);--_nys-combobox-border-width: var(--nys-border-width-sm, 1px);--_nys-combobox-border-color: var(--nys-color-neutral-400, #909395);--_nys-combobox-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-combobox-padding: var(--nys-space-100, 8px) var(--nys-space-150, 12px);--_nys-combobox-gap: var(--nys-space-50, 4px);--_nys-combobox-background-color: var( --nys-color-ink-reverse, var(--nys-color-white, #ffffff) );--_nys-combobox-outline-color--hover: var(--nys-color-neutral-900, #1b1b1b);--_nys-combobox-outline-width: var(--nys-border-width-sm, 1px);--_nys-combobox-outline-color--focus: var(--nys-color-focus, #004dd1);--_nys-combobox-background-color--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-combobox-border-color--disabled: var(--nys-color-neutral-200, #bec0c1);--_nys-combobox-color--disabled: var( --nys-color-text-disabled, var(--nys-color-neutral-200, #bec0c1) );--_nys-combobox-background-color--dropdown: var( --nys-color-ink-reverse, var(--nys-color-white, #ffffff) );--_nys-combobox-border-color--dropdown: var(--nys-color-neutral-400, #909395);--_nys-combobox-shadow--dropdown: var( --nys-shadow-lg, 0 4px 8px rgba(0, 0, 0, .1) );--_nys-combobox-max-height--dropdown: var(--nys-size-3000, 300px);--_nys-combobox-padding--option: var(--nys-space-100, 8px) var(--nys-space-150, 12px);--_nys-combobox-background-color--option--hover: var( --nys-color-neutral-10, #f6f6f6 );--_nys-combobox-background-color--option--active: var( --nys-color-neutral-50, #ededed );--_nys-combobox-background-color--option--disabled: var( --nys-color-white, #ffffff );--_nys-combobox-color--option--disabled: var( --nys-color-text-disabled, #bec0c1 );--_nys-combobox-background-color--option--selected: var( --nys-theme-weaker, #eff6fb );--_nys-combobox-border-color--option--selected: var( --nys-color-theme-mid, #457aa5 );--_nys-combobox-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-combobox-font-size: var(--nys-font-size-ui-md, 16px);--_nys-combobox-font-weight: var(--nys-font-weight-regular, 400);--_nys-combobox-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-combobox-letter-spacing: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) )}:host([width=sm]){--_nys-combobox-width: var(--nys-form-width-sm, 88px)}:host([width=md]){--_nys-combobox-width: var(--nys-form-width-md, 200px)}:host([width=lg]){--_nys-combobox-width: var(--nys-form-width-lg, 384px)}:host([width=full]){--_nys-combobox-width: 100%;flex:1}:host([showError]){--_nys-combobox-border-color: var(--nys-color-danger, #b52c2c)}:host([inverted]){--_nys-combobox-outline-color--focus: var(--nys-color-focus-reverse, #7aa5e7)}.nys-combobox{font-weight:var(--_nys-combobox-font-weight);font-family:var(--_nys-combobox-font-family);font-size:var(--_nys-combobox-font-size);line-height:var(--_nys-combobox-line-height);letter-spacing:var(--_nys-combobox-letter-spacing);color:var(--_nys-combobox-color);gap:var(--_nys-combobox-gap);display:flex;flex-direction:column;position:relative}.nys-combobox__container{width:var(--_nys-combobox-width);max-width:100%;position:relative}.nys-combobox__input-wrapper{position:relative;display:flex;align-items:center;background-color:var(--_nys-combobox-background-color);border-radius:var(--_nys-combobox-border-radius)}.nys-combobox__input{color:var(--_nys-combobox-color);border-radius:var(--_nys-combobox-border-radius);border:solid var(--_nys-combobox-border-color) var(--_nys-combobox-border-width);outline-color:transparent;outline-width:var(--_nys-combobox-outline-width);outline-style:solid;padding:var(--_nys-combobox-padding);padding-right:calc(var(--nys-size-400, 32px) + var(--nys-space-100, 8px));width:100%;height:var(--_nys-combobox-height);box-sizing:border-box;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;background-color:transparent;font:inherit;cursor:text}.nys-combobox__input:not(:placeholder-shown){padding-right:calc(var(--nys-size-400, 32px) * 2 + var(--nys-space-100, 8px))}.nys-combobox__input:hover:not(:disabled):not(:focus):not([readonly]){outline-color:var(--_nys-combobox-outline-color--hover);border-color:var(--_nys-combobox-outline-color--hover)}.nys-combobox__input:focus:not([readonly]){outline-color:var(--_nys-combobox-outline-color--focus);border-color:var(--_nys-combobox-outline-color--focus);caret-color:var(--_nys-combobox-outline-color--focus)}.nys-combobox__input:disabled{background-color:var(--_nys-combobox-background-color--disabled);border-color:var(--_nys-combobox-border-color--disabled);color:var(--_nys-combobox-color--disabled);cursor:not-allowed}.nys-combobox__buttons{display:flex;position:absolute;right:var(--nys-space-150, 12px);gap:var(--nys-space-150, 12px)}.nys-combobox__buttons nys-button{--_nys-button-padding--y: var(--nys-space-50, 4px);--_nys-button-padding--x: var(--nys-space-50, 4px);--_nys-button-height: var(--nys-size-300, 32px);--_nys-button-width: var(--nys-size-400, 32px)}.nys-combobox__buttons .nys-combobox__chevron{border-inline-start:solid var(--nys-color-neutral-200, #bec0c1) var(--nys-border-width-sm, 1px);padding-inline-start:var(--nys-space-150, 12px)}.nys-combobox__listbox{position:absolute;left:0;right:0;top:calc(100% + var(--nys-space-50, 4px));background-color:var(--_nys-combobox-background-color--dropdown);border:solid var(--_nys-combobox-border-color--dropdown) var(--_nys-combobox-border-width);border-radius:var(--_nys-combobox-border-radius);box-shadow:var(--_nys-combobox-shadow--dropdown);max-height:var(--_nys-combobox-max-height--dropdown);overflow-y:auto;z-index:1000;box-sizing:border-box}.nys-combobox__listbox--above{top:auto;bottom:calc(100% + var(--nys-space-50, 4px))}.nys-combobox__option{padding:var(--_nys-combobox-padding--option);cursor:pointer;-webkit-user-select:none;user-select:none;transition:background-color .15s ease;border-bottom:var(--nys-border-width-sm, 1px) solid var(--nys-color-neutral-50, #ededed);background-color:var(--_nys-combobox-background-color)}.nys-combobox__option:hover:not([disabled]):not(.nys-combobox__option--selected){background-color:var(--_nys-combobox-background-color--option--hover)}.nys-combobox__option:active:not([disabled]):not(.nys-combobox__option--selected){background-color:var(--_nys-combobox-background-color--option--active)}.nys-combobox__option--selected:not([disabled]){background-color:var(--_nys-combobox-background-color--option--selected);border:var(--_nys-combobox-border-color--option--selected) solid 1px}.nys-combobox__option--focused:not([disabled]):not(:hover){outline:var(--_nys-combobox-outline-color--focus) solid 2px;outline-offset:-2px}.nys-combobox__option[disabled]{background-color:var(--_nys-combobox-background-color--option--disabled);color:var(--_nys-combobox-color--option--disabled);cursor:not-allowed}.nys-combobox__optgroup{padding:var(--nys-space-100, 8px) var(--nys-space-150, 12px);border-bottom:var(--nys-border-width-sm, 1px) solid var(--nys-color-neutral-50, #ededed);-webkit-user-select:none;user-select:none;color:var(--nys-color-text);font-family:var(--nys-font-family-ui, "Proxima Nova");font-size:var(--nys-font-size-ui-md, 16px);font-style:normal;font-weight:700;line-height:var(--nys-font-lineheight-ui-md, 24px);letter-spacing:var(--nys-font-letterspacing-ui-md, .044px)}.nys-combobox__optgroup~.nys-combobox__option{padding-left:var(--nys-space-300, 24px)}.nys-combobox__no-results{background-color:var(--_nys-combobox-background-color);padding:var(--_nys-combobox-padding--option);color:var(--_nys-combobox-color);cursor:not-allowed}.nys-combobox__listbox::-webkit-scrollbar{width:var(--nys-space-100, 8px)}.nys-combobox__listbox::-webkit-scrollbar-track{background:var(--nys-color-neutral-50, #eeeeee);border-radius:var(--_nys-combobox-border-radius)}.nys-combobox__listbox::-webkit-scrollbar-thumb{background:var(--nys-color-neutral-300, #a7a9ab);border-radius:var(--_nys-combobox-border-radius)}.nys-combobox__listbox::-webkit-scrollbar-thumb:hover{background:var(--nys-color-neutral-400, #909395)}';
var rh = Object.defineProperty, ne = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && rh(e, t, o), o;
};
const ps = class ps extends pt {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this.label = "", this.description = "", this.value = "", this.disabled = !1, this.required = !1, this.optional = !1, this.tooltip = "", this.form = null, this.width = "full", this.inverted = !1, this.showError = !1, this.errorMessage = "", this._isOpen = !1, this._filterText = "", this._highlightedIndex = -1, this._options = [], this._filteredOptions = [], this._dropdownAbove = !1, this._announcement = "", this._originalErrorMessage = "", this._hasUserInteracted = !1, this._selectedLabel = "", this._defaultValue = "", this._hasResolvedSlottedValue = !1, this._handleDocumentClick = (e) => {
      e.target === this || this.shadowRoot?.contains(e.target) || this._closeDropdown();
    };
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   * Form association, ElementInternals, and id generation are provided by
   * NysFormControlElement (@nysds/internals).
   */
  connectedCallback() {
    super.connectedCallback(), this._originalErrorMessage = this.errorMessage ?? "", this.addEventListener("invalid", this._handleInvalid), document.addEventListener("click", this._handleDocumentClick);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid), document.removeEventListener("click", this._handleDocumentClick);
  }
  firstUpdated() {
    this._setValue(), this._defaultValue = this.value;
  }
  // Derive display state from `value` before rendering, not after, so Lit
  // doesn't have to schedule a second update (see lit.dev/msg/change-in-update).
  willUpdate(e) {
    if (e.has("value")) {
      const t = this._options.find((n) => n.value === this.value);
      this._selectedLabel = t ? t.label : "", this._filterText = this._selectedLabel;
    }
  }
  updated(e) {
    e.has("value") && this._setValue(), e.has("_isOpen") && this._isOpen && this.updateComplete.then(() => {
      this._positionDropdown(), this._scrollToHighlighted();
    });
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
    const t = e.assignedElements({ flatten: !0 }), n = [];
    let o = "";
    if (t.forEach((s) => {
      if (s.tagName === "OPTION") {
        const i = s;
        n.push({
          value: i.value,
          label: i.textContent?.trim() || i.value,
          disabled: i.disabled
        }), i.selected && !o && (o = i.value);
      } else if (s.tagName === "OPTGROUP") {
        const i = s, d = i.label;
        Array.from(i.children).forEach((p) => {
          if (p.tagName === "OPTION") {
            const b = p;
            n.push({
              value: b.value,
              label: b.textContent?.trim() || b.value,
              disabled: b.disabled || i.disabled,
              group: d
            }), b.selected && !o && (o = b.value);
          }
        });
      }
    }), this._options = n, this._filteredOptions = n, this._hasResolvedSlottedValue || (this._hasResolvedSlottedValue = !0, !this.value && o && (this.value = o), this._defaultValue = this.value), this.value) {
      const s = this._options.find((i) => i.value === this.value);
      s && (this._selectedLabel = s.label, this._filterText = s.label);
    }
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    this.setFormValue(this.value), this._manageRequire();
  }
  _manageRequire() {
    const e = this.errorMessage || "This field is required";
    this.required && (!this.value || this.value?.trim() === "") ? this.setValidityFromState({ valueMissing: !0 }, e, this._input) : (this.clearValidity(), this._hasUserInteracted = !1);
  }
  _setValidityMessage(e = "") {
    this.showError = !!e, this._originalErrorMessage?.trim() && e !== "" ? this.errorMessage = this._originalErrorMessage : this.errorMessage = e, e ? this.setValidityFromState(
      { customError: !0 },
      this.errorMessage,
      this._input
    ) : this.clearValidity();
  }
  _validate() {
    if (!this._input) return;
    const e = this._input.validity;
    let t = "";
    const n = this._input && !this._options.some((o) => o.value === this.value);
    e.valueMissing || n ? t = "This field is required" : t = this._input.validationMessage, this._setValidityMessage(t);
  }
  formResetCallback() {
    this.value = this._defaultValue, this._filterText = this._defaultValue ? this._options.find((e) => e.value === this._defaultValue)?.label ?? "" : "", this._selectedLabel = this._filterText, this._input && (this._input.value = this._filterText), this.setFormValue(this.value), this.showError = !1, this.errorMessage = "", this.clearValidity(), this.requestUpdate();
  }
  checkValidity() {
    return this._input ? this._input.checkValidity() : !0;
  }
  _handleInvalid(e) {
    if (e.preventDefault(), this._hasUserInteracted = !0, this._validate(), this._input) {
      const t = this.internals?.form;
      t ? Array.from(t.elements).find(
        (s) => typeof s.checkValidity == "function" && !s.checkValidity()
      ) === this && this._input.focus() : this._input.focus();
    }
  }
  /**
   * Dropdown positioning
   * --------------------------------------------------------------------------
   */
  _positionDropdown() {
    if (!this._listbox || !this._input) return;
    const e = this._input.getBoundingClientRect(), t = this._listbox.offsetHeight, o = window.innerHeight - e.bottom, s = e.top;
    this._dropdownAbove = o < t && s > o;
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
      (n) => n.label.toLowerCase().includes(t)
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
    if (this._filteredOptions.filter((x) => !x.disabled).length === 0) return;
    let n = this._highlightedIndex + e;
    for (n < 0 ? n = this._filteredOptions.length - 1 : n >= this._filteredOptions.length && (n = 0); this._filteredOptions[n]?.disabled; )
      n += e, n < 0 && (n = this._filteredOptions.length - 1), n >= this._filteredOptions.length && (n = 0);
    this._highlightedIndex = n, this._scrollToHighlighted();
    const o = this._filteredOptions[n], s = this._filteredOptions[n - e], i = this._filteredOptions.filter(
      (x) => !x.disabled
    ), d = i.findIndex((x) => x.value === o.value) + 1, p = o.value === this.value ? "selected" : "unselected", m = o.group && o.group !== s?.group ? `${o.group}, ` : "";
    this._announcement = `${m} ${o.label} ${d} of ${i.length}, ${p}`;
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  _handleInput(e) {
    const t = e.target;
    this._filterText = t.value, this._filterOptions(this._filterText), this._isOpen || this._openDropdown(), this._highlightedIndex = 0;
    const n = this._filteredOptions.filter((o) => !o.disabled).length;
    this._announcement = n > 0 ? `${n} options available` : "No results found", this._hasUserInteracted && this._validate(), this.dispatchEvent(
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
    e.stopPropagation(), this.value = "", this._filterText = "", this._selectedLabel = "", this._filterOptions(""), this.setFormValue(""), this._closeDropdown(), this._input.focus(), this._handleChange();
  }
  _handleOptionClick(e) {
    e.disabled || this._selectOption(e);
  }
  _handleOptionMouseEnter(e) {
    this._highlightedIndex = e;
  }
  _selectOption(e) {
    this.value = e.value, this._selectedLabel = e.label, this._filterText = e.label, this.setFormValue(this.value), this._input.focus(), this._closeDropdown(), this._filterOptions(""), this._setValidityMessage(""), this._hasUserInteracted && this._validate(), this._handleChange();
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
    return this._filteredOptions.forEach((n, o) => {
      n.group && n.group !== e && (e = n.group, t.push(y`
          <div class="nys-combobox__optgroup" role="presentation">
            ${n.group}
          </div>
        `));
      const s = o === this._highlightedIndex, i = n.value === this.value;
      t.push(y`
        <div
          class="nys-combobox__option ${s ? "nys-combobox__option--focused" : ""} ${i ? "nys-combobox__option--selected" : ""}"
          role="option"
          id="${this.id}--option-${o}"
          data-index="${o}"
          aria-selected="${i}"
          aria-disabled="${n.disabled || !1}"
          ?disabled=${n.disabled}
          @click=${() => this._handleOptionClick(n)}
          @mouseenter=${() => this._handleOptionMouseEnter(o)}
        >
          ${n.label}
        </div>
      `);
    }), t.length === 0 ? y`
        <div class="nys-combobox__no-results" role="option">
          No results found
        </div>
      ` : t;
  }
  render() {
    return y`
      <div class="nys-combobox">
        <nys-label
          id="${this.id}--label"
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
              aria-labelledby=${v(
      this.label ? this.id + "--label" : void 0
    )}
              aria-label=${v(
      !this.label && this.description ? this.description : void 0
    )}
              aria-invalid=${this.showError ? "true" : "false"}
              aria-errormessage=${this.id + "--error"}
              aria-describedby=${v(
      this.showError ? this.id + "--error" : void 0
    )}
              .value=${this._filterText}
              form=${v(this.form || void 0)}
              @input=${this._handleInput}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @keydown="${this._handleKeyDown}"
            />
            <div class="nys-combobox__buttons">
              ${this.value ? y`
                    <nys-button
                      class="nys-combobox__clear"
                      label="Clear selection"
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
                label="Toggle dropdown"
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
          ${this._isOpen ? y`
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
          id=${this.id + "--error"}
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
ps.styles = C(oh), ps.shadowRootOptions = {
  ...I.shadowRootOptions,
  delegatesFocus: !0
};
let j = ps;
ne([
  a({ type: String, reflect: !0 })
], j.prototype, "id");
ne([
  a({ type: String, reflect: !0 })
], j.prototype, "name");
ne([
  a({ type: String })
], j.prototype, "label");
ne([
  a({ type: String })
], j.prototype, "description");
ne([
  a({ type: String })
], j.prototype, "value");
ne([
  a({ type: Boolean, reflect: !0 })
], j.prototype, "disabled");
ne([
  a({ type: Boolean, reflect: !0 })
], j.prototype, "required");
ne([
  a({ type: Boolean, reflect: !0 })
], j.prototype, "optional");
ne([
  a({ type: String })
], j.prototype, "tooltip");
ne([
  a({ type: String, reflect: !0 })
], j.prototype, "form");
ne([
  a({ type: String, reflect: !0 })
], j.prototype, "width");
ne([
  a({ type: Boolean, reflect: !0 })
], j.prototype, "inverted");
ne([
  a({ type: Boolean, reflect: !0 })
], j.prototype, "showError");
ne([
  a({ type: String })
], j.prototype, "errorMessage");
ne([
  $()
], j.prototype, "_isOpen");
ne([
  $()
], j.prototype, "_filterText");
ne([
  $()
], j.prototype, "_highlightedIndex");
ne([
  $()
], j.prototype, "_options");
ne([
  $()
], j.prototype, "_filteredOptions");
ne([
  $()
], j.prototype, "_dropdownAbove");
ne([
  $()
], j.prototype, "_announcement");
ne([
  to("input")
], j.prototype, "_input");
ne([
  to(".nys-combobox__listbox")
], j.prototype, "_listbox");
customElements.get("nys-combobox") || customElements.define("nys-combobox", j);
const sh = ':host{--_nys-datepicker-width: fit-content;--_nys-datepicker-width--input: var(--nys-form-width-md, 200px);--_nys-datepicker-gap: var(--nys-space-100, 8px);--_nys-datepicker-height: var(--nys-size-600, 48px);--_nys-datepicker-radius: var(--nys-radius-xl, 12px);--_nys-datepicker-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-datepicker-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-datepicker-space-sm: var(--nys-space-50, 4px);--_nys-datepicker-space-md: var(--nys-space-100, 8px);--_nys-datepicker-space-lg: var(--nys-space-150, 12px);--_nys-datepicker-border-width: var(--nys-border-width-sm, 1px);--_nys-datepicker-border-color: var(--nys-color-neutral-400, #909395);--_nys-datepicker-border-radius: var(--nys-radius-md, 4px);--_nys-datepicker-outline-color--hover: var(--nys-color-neutral-900, #1b1b1b);--_nys-datepicker-outline-color--focus: var(--nys-color-focus, #004dd1);--_nys-datepicker-font-size: var(--nys-font-size-ui-md, 16px);--_nys-datepicker-font-weight: var(--nys-font-weight-regular, 400);--_nys-datepicker-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-datepicker-letterspacing: var(--nys-font-letterspacing-ui-md, .044px);--_nys-datepicker-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-datepicker-text-color: var(--nys-color-text, #1b1b1b);--_nys-datepicker-text-disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-datepicker-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-datepicker-background-color--button--active: var( --nys-color-gray-100, #d0d0ce );--_nys-datepicker-padding--calendar: var(--nys-space-200, 16px);--_nys-datepicker-color--calendar--weekends: var( --nys-color-text-weaker, #797c7f );--_nys-datepicker-gap--calendar-row: var(--nys-space-2-px, 2px);--_nys-datepicker-font-size--date: var(--nys-font-size-ui-sm, 14px);--_nys-datepicker-background-color--date--hover: var( --nys-color-neutral-50, #ededed );--_nys-datepicker-background-color--date--active: var( --nys-color-neutral-100, #d0d0ce );--_nys-datepicker-background-color--date--selected: var( --nys-color-info-weak, #e5effa );--_nys-datepicker-focus-ring--date: var(--nys-color-link, #004dd1);--_nys-datepicker-color--date: var(--nys-color-text, #1b1b1b);--_nys-datepicker-color--date--hover: var(--nys-color-text, #1b1b1b);--_nys-datepicker-color--date--selected: var(--nys-color-info, #004dd1);--_nys-datepicker-color--date--disabled: var( --nys-color-text-disabled, #bec0c1 );--_nys-datepicker-border-color--date--disabled: var( --nys-color-neutral-200, #bec0c1 );--_nys-datepicker-background-color--navigation--hover: var( --nys-color-neutral-10, #f6f6f6 );--_nys-datepicker-background-color--navigation--pressed: var( --nys-color-neutral-50, #ededed );--_nys-datepicker-background-color--navigation--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-datepicker-color--navigation--hover: var( --nys-color-neutral-900, #1b1b1b );--_nys-datepicker-color--navigation--pressed: var( --nys-color-neutral-900, #1b1b1b );--_nys-datepicker-color--navigation--disabled: var( --nys-color-neutral-200, #bec0c1 );--_nys-datepicker-box-shadow-border--navigation: inset 0 0 0 1px var(--nys-color-neutral-900, #1b1b1b)}:host([width=lg]){--_nys-datepicker-width--input: var(--nys-form-width-lg, 384px)}:host([width=full]){--_nys-datepicker-width--input: 100%}:host([showError]){--_nys-datepicker-border-color: var(--nys-color-danger, #b52c2c)}:host([inverted]){--_nys-datepicker-outline-color--focus: var( --nys-color-focus-reverse, #7aa5e7 )}.nys-datepicker--container{position:relative;display:flex;flex-direction:column;gap:var(--_nys-datepicker-space-sm);font-family:var(--_nys-datepicker-font-family);font-size:var(--_nys-datepicker-font-size);font-weight:var(--_nys-datepicker-font-weight);line-height:var(--_nys-datepicker-line-height);width:100%}.nys-datepicker--container .nys-datepicker--input-container{position:relative;width:var(--_nys-datepicker-width--input);display:flex;cursor:pointer}.nys-datepicker--container .nys-datepicker--input-container.disabled #calendar-button{cursor:not-allowed;color:var(--_nys-datepicker-color--date--disabled)}.nys-datepicker--container .nys-datepicker--input-container .nys-datepicker--input{cursor:text;text-align:start;font-family:var(--_nys-datepicker-font-family);font-size:var(--_nys-datepicker-font-size);flex:1;height:24px;outline:transparent solid 1px;border-radius:var(--_nys-datepicker-border-radius);border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-border-color);background-color:var(--_nys-datepicker-background-color);padding:var(--_nys-datepicker-space-md) var(--_nys-datepicker-space-md) var(--_nys-datepicker-space-md) var(--_nys-datepicker-space-lg);color:var(--_nys-datepicker-color)}.nys-datepicker--container .nys-datepicker--input-container .nys-datepicker--input:hover{outline-color:var(--_nys-datepicker-outline-color--hover);border-color:var(--_nys-datepicker-outline-color--hover)}.nys-datepicker--container .nys-datepicker--input-container .nys-datepicker--input:focus{outline-color:var(--_nys-datepicker-outline-color--focus);border-color:var(--_nys-datepicker-outline-color--focus)}.nys-datepicker--container .nys-datepicker--input-container .nys-datepicker--input:disabled{border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--disabled);cursor:not-allowed;color:var(--_nys-datepicker-color--disabled)}.nys-datepicker--container .nys-datepicker--input-container .nys-datepicker--input::-webkit-date-and-time-value{text-align:start}.nys-datepicker--container .nys-datepicker--input-container input[type=date]::-webkit-inner-spin-button,.nys-datepicker--container .nys-datepicker--input-container input[type=date]::-webkit-calendar-picker-indicator{display:none;appearance:none}.nys-datepicker--container .nys-datepicker--input-container #calendar-button{display:flex;align-items:center;justify-content:center;padding:var(--_nys-datepicker-space-sm);border-radius:var(--_nys-datepicker-border-radius);border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-background-color);outline:transparent solid 1px;background-color:var(--_nys-datepicker-background-color);position:absolute;top:50%;right:var(--_nys-datepicker-space-sm);transform:translateY(-50%);cursor:pointer}.nys-datepicker--container .nys-datepicker--input-container #calendar-button:hover{outline-color:var(--_nys-datepicker-background-color--date--hover);border-color:var(--_nys-datepicker-background-color--date--hover);background:var(--_nys-datepicker-background-color--date--hover)}.nys-datepicker--container .nys-datepicker--input-container #calendar-button:active{outline-color:var(--_nys-datepicker-background-color--button--active);border-color:var(--_nys-datepicker-background-color--button--active);background:var(--_nys-datepicker-background-color--button--active)}.nys-datepicker--container .nys-datepicker--input-container #calendar-button:focus:not(:active):not(:disabled){outline-color:var(--_nys-datepicker-outline-color--focus);border-color:var(--_nys-datepicker-outline-color--focus)}.nys-datepicker--container .wc-datepicker--container{display:flex;width:fit-content}.nys-datepicker--container .wc-datepicker--container *{flex:1}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}wc-datepicker{display:none;padding:var(--_nys-datepicker-padding--calendar);border-radius:var(--_nys-datepicker-border-radius);border:var(--_nys-datepicker-border-width) solid var(--nys-color-neutral-100, #d0d0ce);background-color:var(--_nys-datepicker-background-color);box-shadow:0 4px 6px -1px var(--nys-color-black-transparent-100, rgba(27, 27, 27, .1)),0 4px 6px -1px var(--nys-color-black-transparent-50, rgba(27, 27, 27, .01));color:var(--_nys-datepicker-text-color);margin-bottom:3px}wc-datepicker.active{display:flex;flex-direction:column-reverse;position:absolute;z-index:1}wc-datepicker .position-top{box-shadow:0 -4px 6px -1px var(--nys-color-black-transparent-100, rgba(27, 27, 27, .1)),0 -4px 6px -1px var(--nys-color-black-transparent-50, rgba(27, 27, 27, .01))}wc-datepicker *,wc-datepicker *:before,wc-datepicker *:after{margin:0;box-sizing:border-box}.wc-datepicker{display:block;width:min-content;font-family:var(--_nys-datepicker-font-family);font-size:var(--_nys-datepicker-font-size--date);font-weight:400;line-height:var(--_nys-datepicker-line-height);letter-spacing:var(--_nys-datepicker-letterspacing)}.wc-datepicker--disabled *:disabled{opacity:.5;cursor:not-allowed}.wc-datepicker--disabled .wc-datepicker__date{cursor:not-allowed;opacity:.5}.wc-datepicker--disabled .wc-datepicker__date:focus{outline:none;border-color:var(--_nys-datepicker-border-color--date--disabled);box-shadow:none}.wc-datepicker--disabled .wc-datepicker__date:hover:not(.wc-datepicker__date--selected){background-color:transparent}.wc-datepicker--disabled .wc-datepicker__date--selected:hover{color:var(--_nys-datepicker-background-color);background-color:var(--_nys-datepicker-background-color--date--selected)}.wc-datepicker--disabled #wc-month-dropdown-icon{color:var(--_nys-datepicker-color--date--disabled)}.wc-datepicker__header{display:flex;align-items:center;gap:var(--_nys-datepicker-space-sm)}.wc-datepicker__current-month{display:flex;flex-grow:1;gap:var(--_nys-datepicker-space-sm)}.wc-datepicker__month-select,.wc-datepicker__year-select{display:flex;align-items:center;font-size:var(--_nys-datepicker-font-size);font-family:var(--_nys-datepicker-font-family);padding:var(--_nys-datepicker-space-md) var(--_nys-datepicker-space-lg);border:solid var(--_nys-datepicker-border-width) var(--_nys-datepicker-border-color);border-radius:.25rem;color:var(--_nys-datepicker-color);background-color:var(--_nys-datepicker-background-color);line-height:var(--_nys-datepicker-line-height)}.wc-datepicker__month-select:hover:not(:disabled),.wc-datepicker__year-select:hover:not(:disabled){border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--hover);background-color:var(--_nys-datepicker-background-color--navigation--hover);box-shadow:var(--_nys-datepicker-box-shadow-border--navigation)}.wc-datepicker__month-select:active:not(:disabled),.wc-datepicker__month-select[aria-pressed=true],.wc-datepicker__year-select:active:not(:disabled),.wc-datepicker__year-select[aria-pressed=true]{border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--pressed);background-color:var(--_nys-datepicker-background-color--navigation--pressed);box-shadow:var(--_nys-datepicker-box-shadow-border--navigation)}.wc-datepicker__month-select:disabled,.wc-datepicker__month-select[aria-disabled=true],.wc-datepicker__year-select:disabled,.wc-datepicker__year-select[aria-disabled=true]{border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--disabled);background-color:var(--_nys-datepicker-background-color--navigation--disabled);color:var(--_nys-datepicker-color--disabled)}.wc-datepicker .month-wrapper{position:relative;width:135px;display:flex;align-items:center;align-self:stretch}.wc-datepicker .month-wrapper #wc-month-dropdown-icon{position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none}.wc-datepicker__month-select{width:100%;max-width:100%;flex-grow:1;cursor:pointer;appearance:none;text-overflow:ellipsis;padding-right:var(--nys-space-400, 32px)}.wc-datepicker__month-select>*{width:91px;height:24px}.wc-datepicker__year-select{border:solid var(--_nys-datepicker-border-width) var(--_nys-datepicker-border-color);border-radius:.25rem;padding-right:var(--_nys-datepicker-space-sm);max-width:5rem}.wc-datepicker__previous-month-button,.wc-datepicker__next-month-button,.wc-datepicker__previous-year-button,.wc-datepicker__next-year-button{display:inline-flex;width:40px;max-width:40px;max-height:42px;padding:var(--_nys-datepicker-space-lg);justify-content:center;align-items:center;border:solid var(--_nys-datepicker-border-width) var(--_nys-datepicker-border-color);border-radius:.25rem;color:var(--_nys-datepicker-color--date);background-color:var(--_nys-datepicker-background-color);cursor:pointer}.wc-datepicker__previous-month-button:hover:not(:disabled),.wc-datepicker__next-month-button:hover:not(:disabled),.wc-datepicker__previous-year-button:hover:not(:disabled),.wc-datepicker__next-year-button:hover:not(:disabled){background-color:var(--_nys-datepicker-background-color--navigation--hover);box-shadow:var(--_nys-datepicker-box-shadow-border--navigation);border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--hover)}.wc-datepicker__previous-month-button:active:not(:disabled),.wc-datepicker__previous-month-button[aria-pressed=true],.wc-datepicker__next-month-button:active:not(:disabled),.wc-datepicker__next-month-button[aria-pressed=true],.wc-datepicker__previous-year-button:active:not(:disabled),.wc-datepicker__previous-year-button[aria-pressed=true],.wc-datepicker__next-year-button:active:not(:disabled),.wc-datepicker__next-year-button[aria-pressed=true]{background-color:var(--_nys-datepicker-background-color--navigation--pressed);box-shadow:var(--_nys-datepicker-box-shadow-border--navigation);border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--pressed)}.wc-datepicker__previous-month-button:disabled,.wc-datepicker__previous-month-button[aria-disabled=true],.wc-datepicker__next-month-button:disabled,.wc-datepicker__next-month-button[aria-disabled=true],.wc-datepicker__previous-year-button:disabled,.wc-datepicker__previous-year-button[aria-disabled=true],.wc-datepicker__next-year-button:disabled,.wc-datepicker__next-year-button[aria-disabled=true]{background-color:var(--_nys-datepicker-background-color--navigation--disabled);border:var(--_nys-datepicker-border-width) solid var(--_nys-datepicker-color--navigation--disabled);color:var(--_nys-datepicker-color--disabled)}.wc-datepicker__calendar{width:100%;table-layout:fixed;border-collapse:collapse}.wc-datepicker__weekday{padding:var(--_nys-datepicker-padding--calendar) 0 var(--_nys-datepicker-space-sm) 0;min-width:var(--nys-size-500, 40px);font-weight:600;aspect-ratio:1}.wc-datepicker__weekday>span{width:42.3px;height:24px;display:flex;justify-content:center;align-items:center}.wc-datepicker__weekday[aria-label=Saturday],.wc-datepicker__weekday[aria-label=Sunday]{color:var(--_nys-datepicker-color--calendar--weekends)}.wc-datepicker__date{padding:var(--_nys-datepicker-space-md);text-align:center;cursor:pointer;border-radius:var(--nys-radius-lg)}.wc-datepicker__date:focus,.wc-datepicker__date:focus-visible{outline:none}.wc-datepicker__date:focus{box-shadow:inset 0 0 0 2px var(--_nys-datepicker-focus-ring--date)}.wc-datepicker__date:hover:not(.wc-datepicker__date--selected):not(:active){color:var(--_nys-datepicker-color--date--hover);background-color:var(--_nys-datepicker-background-color--date--hover)}.wc-datepicker__date:active{color:var(--_nys-datepicker-color--date--hover);background-color:var(--_nys-datepicker-background-color--date--active)}.wc-datepicker__date>*{display:flex;justify-content:center;align-items:center;aspect-ratio:1;width:24.3px;height:24px}.wc-datepicker__date--today{font-weight:600;color:var(--_nys-datepicker-color--date--selected)}.wc-datepicker__date--today>*{font-style:normal;text-decoration-line:underline}.wc-datepicker__date--selected{text-decoration-line:none;background-color:var(--_nys-datepicker-background-color--date--selected);color:var(--_nys-datepicker-color--date--selected)}.wc-datepicker__date--selected>*{font-weight:600}.wc-datepicker__date--disabled{color:var(--_nys-datepicker-color--date--disabled);cursor:default}.wc-datepicker__date--disabled:not(.wc-datepicker__date--disabled--selected,.wc-datepicker__date--disabled--in-range):hover{background-color:transparent}.wc-datepicker__date.wc-datepicker__date--overflowing{color:var(--_nys-datepicker-text-disabled)}.wc-datepicker__date.wc-datepicker__date--overflowing:hover,.wc-datepicker__date.wc-datepicker__date--overflowing:active{color:var(--_nys-datepicker-color)}.wc-datepicker--button-container{display:flex;padding-top:var(--_nys-datepicker-space-lg);align-items:flex-end;gap:var(--_nys-datepicker-padding--calendar);align-self:stretch}.wc-datepicker tr.wc-datepicker__calendar-row.sc-wc-datepicker{display:flex;align-items:center;gap:var(--_nys-datepicker-gap--calendar-row);align-self:stretch}', ko = {
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
let Co, wl, $s, kl = !1, os = !1, xi = !1, rt = !1, $a = null, bi = !1;
const Zn = (r, e = "") => () => {
}, Sa = "http://www.w3.org/1999/xlink", Ea = {}, ih = "http://www.w3.org/2000/svg", ah = "http://www.w3.org/1999/xhtml", lh = (r) => r != null, wi = (r) => (r = typeof r, r === "object" || r === "function");
function ch(r) {
  var e, t, n;
  return (n = (t = (e = r.head) === null || e === void 0 ? void 0 : e.querySelector('meta[name="csp-nonce"]')) === null || t === void 0 ? void 0 : t.getAttribute("content")) !== null && n !== void 0 ? n : void 0;
}
const E = (r, e, ...t) => {
  let n = null, o = null, s = null, i = !1, d = !1;
  const p = [], b = (x) => {
    for (let k = 0; k < x.length; k++)
      n = x[k], Array.isArray(n) ? b(n) : n != null && typeof n != "boolean" && ((i = typeof r != "function" && !wi(n)) && (n = String(n)), i && d ? p[p.length - 1].$text$ += n : p.push(i ? rs(null, n) : n), d = i);
  };
  if (b(t), e) {
    e.key && (o = e.key), e.name && (s = e.name);
    {
      const x = e.className || e.class;
      x && (e.class = typeof x != "object" ? x : Object.keys(x).filter((k) => x[k]).join(" "));
    }
  }
  if (typeof r == "function")
    return r(e === null ? {} : e, p, hh);
  const m = rs(r, null);
  return m.$attrs$ = e, p.length > 0 && (m.$children$ = p), m.$key$ = o, m.$name$ = s, m;
}, rs = (r, e) => {
  const t = {
    $flags$: 0,
    $tag$: r,
    $text$: e,
    $elm$: null,
    $children$: null
  };
  return t.$attrs$ = null, t.$key$ = null, t.$name$ = null, t;
}, Cl = {}, dh = (r) => r && r.$tag$ === Cl, hh = {
  forEach: (r, e) => r.map(Aa).forEach(e),
  map: (r, e) => r.map(Aa).map(e).map(uh)
}, Aa = (r) => ({
  vattrs: r.$attrs$,
  vchildren: r.$children$,
  vkey: r.$key$,
  vname: r.$name$,
  vtag: r.$tag$,
  vtext: r.$text$
}), uh = (r) => {
  if (typeof r.vtag == "function") {
    const t = Object.assign({}, r.vattrs);
    return r.vkey && (t.key = r.vkey), r.vname && (t.name = r.vname), E(r.vtag, t, ...r.vchildren || []);
  }
  const e = rs(r.vtag, r.vtext);
  return e.$attrs$ = r.vattrs, e.$children$ = r.vchildren, e.$key$ = r.vkey, e.$name$ = r.vname, e;
}, yh = (r) => qh.map((e) => e(r)).find((e) => !!e), ph = (r, e) => r != null && !wi(r) ? e & 4 ? r === "false" ? !1 : r === "" || !!r : e & 2 ? parseFloat(r) : e & 1 ? String(r) : r : r, fh = (r) => r, La = (r, e, t) => {
  const n = fh(r);
  return {
    emit: (o) => bh(n, e, {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      detail: o
    })
  };
}, bh = (r, e, t) => {
  const n = Ne.ce(e, t);
  return r.dispatchEvent(n), n;
}, Ta = /* @__PURE__ */ new WeakMap(), vh = (r, e, t) => {
  let n = is.get(r);
  jh && t ? (n = n || new CSSStyleSheet(), typeof n == "string" ? n = e : n.replaceSync(e)) : n = e, is.set(r, n);
}, _h = (r, e, t, n) => {
  var o;
  let s = $l(e, t);
  const i = is.get(s);
  if (r = r.nodeType === 11 ? r : St, i)
    if (typeof i == "string") {
      r = r.head || r;
      let d = Ta.get(r), p;
      if (d || Ta.set(r, d = /* @__PURE__ */ new Set()), !d.has(s)) {
        {
          p = St.createElement("style"), p.innerHTML = i;
          const b = (o = Ne.$nonce$) !== null && o !== void 0 ? o : ch(St);
          b != null && p.setAttribute("nonce", b), r.insertBefore(p, r.querySelector("link"));
        }
        d && d.add(s);
      }
    } else r.adoptedStyleSheets.includes(i) || (r.adoptedStyleSheets = [...r.adoptedStyleSheets, i]);
  return s;
}, gh = (r) => {
  const e = r.$cmpMeta$, t = r.$hostElement$, n = e.$flags$, o = Zn("attachStyles", e.$tagName$), s = _h(t.shadowRoot ? t.shadowRoot : t.getRootNode(), e, r.$modeName$);
  n & 10 && (t["s-sc"] = s, t.classList.add(s + "-h"), n & 2 && t.classList.add(s + "-s")), o();
}, $l = (r, e) => "sc-" + (e && r.$flags$ & 32 ? r.$tagName$ + "-" + e : r.$tagName$), Da = (r, e, t, n, o, s) => {
  if (t !== n) {
    let i = Oa(r, e), d = e.toLowerCase();
    if (e === "class") {
      const p = r.classList, b = za(t), m = za(n);
      p.remove(...b.filter((x) => x && !m.includes(x))), p.add(...m.filter((x) => x && !b.includes(x)));
    } else if (e === "style") {
      for (const p in t)
        (!n || n[p] == null) && (p.includes("-") ? r.style.removeProperty(p) : r.style[p] = "");
      for (const p in n)
        (!t || n[p] !== t[p]) && (p.includes("-") ? r.style.setProperty(p, n[p]) : r.style[p] = n[p]);
    } else if (e !== "key")
      if (e === "ref")
        n && n(r);
      else if (!r.__lookupSetter__(e) && e[0] === "o" && e[1] === "n")
        e[2] === "-" ? e = e.slice(3) : Oa(Es, d) ? e = d.slice(2) : e = d[2] + e.slice(3), t && Ne.rel(r, e, t, !1), n && Ne.ael(r, e, n, !1);
      else {
        const p = wi(n);
        if ((i || p && n !== null) && !o)
          try {
            if (r.tagName.includes("-"))
              r[e] = n;
            else {
              const m = n ?? "";
              e === "list" ? i = !1 : (t == null || r[e] != m) && (r[e] = m);
            }
          } catch {
          }
        let b = !1;
        d !== (d = d.replace(/^xlink\:?/, "")) && (e = d, b = !0), n == null || n === !1 ? (n !== !1 || r.getAttribute(e) === "") && (b ? r.removeAttributeNS(Sa, e) : r.removeAttribute(e)) : (!i || s & 4 || o) && !p && (n = n === !0 ? "" : n, b ? r.setAttributeNS(Sa, e, n) : r.setAttribute(e, n));
      }
  }
}, mh = /\s/, za = (r) => r ? r.split(mh) : [], Sl = (r, e, t, n) => {
  const o = e.$elm$.nodeType === 11 && e.$elm$.host ? e.$elm$.host : e.$elm$, s = r && r.$attrs$ || Ea, i = e.$attrs$ || Ea;
  for (n in s)
    n in i || Da(o, n, s[n], void 0, t, e.$flags$);
  for (n in i)
    Da(o, n, s[n], i[n], t, e.$flags$);
}, ss = (r, e, t, n) => {
  const o = e.$children$[t];
  let s = 0, i, d, p;
  if (kl || (xi = !0, o.$tag$ === "slot" && (Co && n.classList.add(Co + "-s"), o.$flags$ |= o.$children$ ? (
    // slot element has fallback content
    2
  ) : (
    // slot element does not have fallback content
    1
  ))), o.$text$ !== null)
    i = o.$elm$ = St.createTextNode(o.$text$);
  else if (o.$flags$ & 1)
    i = o.$elm$ = St.createTextNode("");
  else {
    if (rt || (rt = o.$tag$ === "svg"), i = o.$elm$ = St.createElementNS(rt ? ih : ah, o.$flags$ & 2 ? "slot-fb" : o.$tag$), rt && o.$tag$ === "foreignObject" && (rt = !1), Sl(null, o, rt), lh(Co) && i["s-si"] !== Co && i.classList.add(i["s-si"] = Co), o.$children$)
      for (s = 0; s < o.$children$.length; ++s)
        d = ss(r, o, s, i), d && i.appendChild(d);
    o.$tag$ === "svg" ? rt = !1 : i.tagName === "foreignObject" && (rt = !0);
  }
  return i["s-hn"] = $s, o.$flags$ & 3 && (i["s-sr"] = !0, i["s-cr"] = wl, i["s-sn"] = o.$name$ || "", p = r && r.$children$ && r.$children$[t], p && p.$tag$ === o.$tag$ && r.$elm$ && br(r.$elm$, !1)), i;
}, br = (r, e) => {
  Ne.$flags$ |= 1;
  const t = r.childNodes;
  for (let n = t.length - 1; n >= 0; n--) {
    const o = t[n];
    o["s-hn"] !== $s && o["s-ol"] && (Ll(o).insertBefore(o, ki(o)), o["s-ol"].remove(), o["s-ol"] = void 0, xi = !0), e && br(o, e);
  }
  Ne.$flags$ &= -2;
}, El = (r, e, t, n, o, s) => {
  let i = r["s-cr"] && r["s-cr"].parentNode || r, d;
  for (i.shadowRoot && i.tagName === $s && (i = i.shadowRoot); o <= s; ++o)
    n[o] && (d = ss(null, t, o, r), d && (n[o].$elm$ = d, i.insertBefore(d, ki(e))));
}, Al = (r, e, t, n, o) => {
  for (; e <= t; ++e)
    (n = r[e]) && (o = n.$elm$, zl(n), os = !0, o["s-ol"] ? o["s-ol"].remove() : br(o, !0), o.remove());
}, xh = (r, e, t, n) => {
  let o = 0, s = 0, i = 0, d = 0, p = e.length - 1, b = e[0], m = e[p], x = n.length - 1, k = n[0], R = n[x], pe, fe;
  for (; o <= p && s <= x; )
    if (b == null)
      b = e[++o];
    else if (m == null)
      m = e[--p];
    else if (k == null)
      k = n[++s];
    else if (R == null)
      R = n[--x];
    else if (Wr(b, k))
      $o(b, k), b = e[++o], k = n[++s];
    else if (Wr(m, R))
      $o(m, R), m = e[--p], R = n[--x];
    else if (Wr(b, R))
      (b.$tag$ === "slot" || R.$tag$ === "slot") && br(b.$elm$.parentNode, !1), $o(b, R), r.insertBefore(b.$elm$, m.$elm$.nextSibling), b = e[++o], R = n[--x];
    else if (Wr(m, k))
      (b.$tag$ === "slot" || R.$tag$ === "slot") && br(m.$elm$.parentNode, !1), $o(m, k), r.insertBefore(m.$elm$, b.$elm$), m = e[--p], k = n[++s];
    else {
      for (i = -1, d = o; d <= p; ++d)
        if (e[d] && e[d].$key$ !== null && e[d].$key$ === k.$key$) {
          i = d;
          break;
        }
      i >= 0 ? (fe = e[i], fe.$tag$ !== k.$tag$ ? pe = ss(e && e[s], t, i, r) : ($o(fe, k), e[i] = void 0, pe = fe.$elm$), k = n[++s]) : (pe = ss(e && e[s], t, s, r), k = n[++s]), pe && Ll(b.$elm$).insertBefore(pe, ki(b.$elm$));
    }
  o > p ? El(r, n[x + 1] == null ? null : n[x + 1].$elm$, t, n, s, x) : s > x && Al(e, o, p);
}, Wr = (r, e) => r.$tag$ === e.$tag$ ? r.$tag$ === "slot" ? r.$name$ === e.$name$ : r.$key$ === e.$key$ : !1, ki = (r) => r && r["s-ol"] || r, Ll = (r) => (r["s-ol"] ? r["s-ol"] : r).parentNode, $o = (r, e) => {
  const t = e.$elm$ = r.$elm$, n = r.$children$, o = e.$children$, s = e.$tag$, i = e.$text$;
  let d;
  i === null ? (rt = s === "svg" ? !0 : s === "foreignObject" ? !1 : rt, s === "slot" || Sl(r, e, rt), n !== null && o !== null ? xh(t, n, e, o) : o !== null ? (r.$text$ !== null && (t.textContent = ""), El(t, null, e, o, 0, o.length - 1)) : n !== null && Al(n, 0, n.length - 1), rt && s === "svg" && (rt = !1)) : (d = t["s-cr"]) ? d.parentNode.textContent = i : r.$text$ !== i && (t.data = i);
}, Tl = (r) => {
  const e = r.childNodes;
  let t, n, o, s, i, d;
  for (n = 0, o = e.length; n < o; n++)
    if (t = e[n], t.nodeType === 1) {
      if (t["s-sr"]) {
        for (i = t["s-sn"], t.hidden = !1, s = 0; s < o; s++)
          if (d = e[s].nodeType, e[s]["s-hn"] !== t["s-hn"] || i !== "") {
            if (d === 1 && i === e[s].getAttribute("slot")) {
              t.hidden = !0;
              break;
            }
          } else if (d === 1 || d === 3 && e[s].textContent.trim() !== "") {
            t.hidden = !0;
            break;
          }
      }
      Tl(t);
    }
}, $t = [], Dl = (r) => {
  let e, t, n, o, s, i, d = 0;
  const p = r.childNodes, b = p.length;
  for (; d < b; d++) {
    if (e = p[d], e["s-sr"] && (t = e["s-cr"]) && t.parentNode)
      for (n = t.parentNode.childNodes, o = e["s-sn"], i = n.length - 1; i >= 0; i--)
        t = n[i], !t["s-cn"] && !t["s-nr"] && t["s-hn"] !== e["s-hn"] && (Ia(t, o) ? (s = $t.find((m) => m.$nodeToRelocate$ === t), os = !0, t["s-sn"] = t["s-sn"] || o, s ? s.$slotRefNode$ = e : $t.push({
          $slotRefNode$: e,
          $nodeToRelocate$: t
        }), t["s-sr"] && $t.map((m) => {
          Ia(m.$nodeToRelocate$, t["s-sn"]) && (s = $t.find((x) => x.$nodeToRelocate$ === t), s && !m.$slotRefNode$ && (m.$slotRefNode$ = s.$slotRefNode$));
        })) : $t.some((m) => m.$nodeToRelocate$ === t) || $t.push({
          $nodeToRelocate$: t
        }));
    e.nodeType === 1 && Dl(e);
  }
}, Ia = (r, e) => r.nodeType === 1 ? r.getAttribute("slot") === null && e === "" || r.getAttribute("slot") === e : r["s-sn"] === e ? !0 : e === "", zl = (r) => {
  r.$attrs$ && r.$attrs$.ref && r.$attrs$.ref(null), r.$children$ && r.$children$.map(zl);
}, wh = (r, e) => {
  const t = r.$hostElement$, n = r.$cmpMeta$, o = r.$vnode$ || rs(null, null), s = dh(e) ? e : E(null, null, e);
  $s = t.tagName, n.$attrsToReflect$ && (s.$attrs$ = s.$attrs$ || {}, n.$attrsToReflect$.map(([i, d]) => s.$attrs$[d] = t[i])), s.$tag$ = null, s.$flags$ |= 4, r.$vnode$ = s, s.$elm$ = o.$elm$ = t.shadowRoot || t, Co = t["s-sc"], wl = t["s-cr"], kl = (n.$flags$ & 1) !== 0, os = !1, $o(o, s);
  {
    if (Ne.$flags$ |= 1, xi) {
      Dl(s.$elm$);
      let i, d, p, b, m, x, k = 0;
      for (; k < $t.length; k++)
        i = $t[k], d = i.$nodeToRelocate$, d["s-ol"] || (p = St.createTextNode(""), p["s-nr"] = d, d.parentNode.insertBefore(d["s-ol"] = p, d));
      for (k = 0; k < $t.length; k++)
        if (i = $t[k], d = i.$nodeToRelocate$, i.$slotRefNode$) {
          for (b = i.$slotRefNode$.parentNode, m = i.$slotRefNode$.nextSibling, p = d["s-ol"]; p = p.previousSibling; )
            if (x = p["s-nr"], x && x["s-sn"] === d["s-sn"] && b === x.parentNode && (x = x.nextSibling, !x || !x["s-nr"])) {
              m = x;
              break;
            }
          (!m && b !== d.parentNode || d.nextSibling !== m) && d !== m && (!d["s-hn"] && d["s-ol"] && (d["s-hn"] = d["s-ol"].parentNode.nodeName), b.insertBefore(d, m));
        } else
          d.nodeType === 1 && (d.hidden = !0);
    }
    os && Tl(s.$elm$), Ne.$flags$ &= -2, $t.length = 0;
  }
}, kh = (r, e) => {
}, Il = (r, e) => (r.$flags$ |= 16, kh(r, r.$ancestorComponent$), Gh(() => Ch(r, e))), Ch = (r, e) => {
  const t = r.$hostElement$, n = Zn("scheduleUpdate", r.$cmpMeta$.$tagName$), o = t;
  let s;
  return e ? s = Ao(o, "componentWillLoad") : s = Ao(o, "componentWillUpdate"), s = Ra(s, () => Ao(o, "componentWillRender")), n(), Ra(s, () => $h(r, o, e));
}, $h = async (r, e, t) => {
  const n = r.$hostElement$, o = Zn("update", r.$cmpMeta$.$tagName$);
  n["s-rc"], t && gh(r);
  const s = Zn("render", r.$cmpMeta$.$tagName$);
  Sh(r, e, n), s(), o(), Eh(r);
}, Sh = (r, e, t) => {
  try {
    $a = e, e = e.render && e.render(), r.$flags$ &= -17, r.$flags$ |= 2, (ko.hasRenderFn || ko.reflect) && (ko.vdomRender || ko.reflect) && (ko.hydrateServerSide || wh(r, e));
  } catch (d) {
    Cr(d, r.$hostElement$);
  }
  return $a = null, null;
}, Eh = (r) => {
  const e = r.$cmpMeta$.$tagName$, t = r.$hostElement$, n = Zn("postUpdate", e), o = t;
  r.$ancestorComponent$, Ao(o, "componentDidRender"), r.$flags$ & 64 ? (Ao(o, "componentDidUpdate"), n()) : (r.$flags$ |= 64, Ao(o, "componentDidLoad"), n());
}, Ao = (r, e, t) => {
  if (r && r[e])
    try {
      return r[e](t);
    } catch (n) {
      Cr(n);
    }
}, Ra = (r, e) => r && r.then ? r.then(e) : e(), Ah = (r, e) => Ss(r).$instanceValues$.get(e), Lh = (r, e, t, n) => {
  const o = Ss(r), s = r, i = o.$instanceValues$.get(e), d = o.$flags$, p = s;
  t = ph(t, n.$members$[e][0]);
  const b = Number.isNaN(i) && Number.isNaN(t);
  if (t !== i && !b) {
    o.$instanceValues$.set(e, t);
    {
      if (n.$watchers$ && d & 128) {
        const x = n.$watchers$[e];
        x && x.map((k) => {
          try {
            p[k](t, i, e);
          } catch (R) {
            Cr(R, s);
          }
        });
      }
      if ((d & 18) === 2) {
        if (p.componentShouldUpdate && p.componentShouldUpdate(t, i, e) === !1)
          return;
        Il(o, !1);
      }
    }
  }
}, Th = (r, e, t) => {
  if (e.$members$) {
    r.watchers && (e.$watchers$ = r.watchers);
    const n = Object.entries(e.$members$), o = r.prototype;
    n.map(([s, [i]]) => {
      (i & 31 || i & 32) && Object.defineProperty(o, s, {
        get() {
          return Ah(this, s);
        },
        set(d) {
          Lh(this, s, d, e);
        },
        configurable: !0,
        enumerable: !0
      });
    });
    {
      const s = /* @__PURE__ */ new Map();
      o.attributeChangedCallback = function(i, d, p) {
        Ne.jmp(() => {
          const b = s.get(i);
          if (this.hasOwnProperty(b))
            p = this[b], delete this[b];
          else if (o.hasOwnProperty(b) && typeof this[b] == "number" && this[b] == p)
            return;
          this[b] = p === null && typeof this[b] == "boolean" ? !1 : p;
        });
      }, r.observedAttributes = n.filter(
        ([i, d]) => d[0] & 15
        /* MEMBER_FLAGS.HasAttribute */
      ).map(([i, d]) => {
        const p = d[1] || i;
        return s.set(p, i), d[0] & 512 && e.$attrsToReflect$.push([i, p]), p;
      });
    }
  }
  return r;
}, Dh = async (r, e, t, n, o) => {
  if ((e.$flags$ & 32) === 0 && (o = r.constructor, e.$flags$ |= 32, customElements.whenDefined(t.$tagName$).then(() => e.$flags$ |= 128), o.style)) {
    let i = o.style;
    typeof i != "string" && (i = i[e.$modeName$ = yh(r)]);
    const d = $l(t, e.$modeName$);
    if (!is.has(d)) {
      const p = Zn("registerStyles", t.$tagName$);
      vh(d, i, !!(t.$flags$ & 1)), p();
    }
  }
  e.$ancestorComponent$, Il(e, !0);
}, zh = (r) => {
}, Ih = (r) => {
  if ((Ne.$flags$ & 1) === 0) {
    const e = Ss(r), t = e.$cmpMeta$, n = Zn("connectedCallback", t.$tagName$);
    e.$flags$ & 1 ? (Rl(r, e, t.$listeners$), zh(e.$lazyInstance$)) : (e.$flags$ |= 1, t.$flags$ & 12 && Rh(r), t.$members$ && Object.entries(t.$members$).map(([o, [s]]) => {
      if (s & 31 && r.hasOwnProperty(o)) {
        const i = r[o];
        delete r[o], r[o] = i;
      }
    }), Dh(r, e, t)), n();
  }
}, Rh = (r) => {
  const e = r["s-cr"] = St.createComment("");
  e["s-cn"] = !0, r.insertBefore(e, r.firstChild);
}, Oh = (r) => {
  if ((Ne.$flags$ & 1) === 0) {
    const e = Ss(r);
    e.$rmListeners$ && (e.$rmListeners$.map((t) => t()), e.$rmListeners$ = void 0);
  }
}, Mh = (r, e) => {
  const t = {
    $flags$: e[0],
    $tagName$: e[1]
  };
  t.$members$ = e[2], t.$listeners$ = e[3], t.$watchers$ = r.$watchers$, t.$attrsToReflect$ = [];
  const n = r.prototype.connectedCallback, o = r.prototype.disconnectedCallback;
  return Object.assign(r.prototype, {
    __registerHost() {
      Fh(this, t);
    },
    connectedCallback() {
      Ih(this), n && n.call(this);
    },
    disconnectedCallback() {
      Oh(this), o && o.call(this);
    },
    __attachShadow() {
      this.attachShadow({
        mode: "open",
        delegatesFocus: !!(t.$flags$ & 16)
      });
    }
  }), r.is = t.$tagName$, Th(r, t);
}, Rl = (r, e, t, n) => {
  t && t.map(([o, s, i]) => {
    const d = Nh(r, o), p = Ph(e, i), b = Bh(o);
    Ne.ael(d, s, p, b), (e.$rmListeners$ = e.$rmListeners$ || []).push(() => Ne.rel(d, s, p, b));
  });
}, Ph = (r, e) => (t) => {
  try {
    ko.lazyLoad || r.$hostElement$[e](t);
  } catch (n) {
    Cr(n);
  }
}, Nh = (r, e) => e & 4 ? St : e & 8 ? Es : e & 16 ? St.body : r, Bh = (r) => Vh ? {
  passive: (r & 1) !== 0,
  capture: (r & 2) !== 0
} : (r & 2) !== 0, Ol = /* @__PURE__ */ new WeakMap(), Ss = (r) => Ol.get(r), Fh = (r, e) => {
  const t = {
    $flags$: 0,
    $hostElement$: r,
    $cmpMeta$: e,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  return Rl(r, t, e.$listeners$), Ol.set(r, t);
}, Oa = (r, e) => e in r, Cr = (r, e) => (0, console.error)(r, e), is = /* @__PURE__ */ new Map(), qh = [], Es = typeof window < "u" ? window : {}, St = Es.document || { head: {} }, Hh = Es.HTMLElement || class {
}, Ne = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (r) => r(),
  raf: (r) => requestAnimationFrame(r),
  ael: (r, e, t, n) => r.addEventListener(e, t, n),
  rel: (r, e, t, n) => r.removeEventListener(e, t, n),
  ce: (r, e) => new CustomEvent(r, e)
}, Vh = /* @__PURE__ */ (() => {
  let r = !1;
  try {
    St.addEventListener("e", null, Object.defineProperty({}, "passive", {
      get() {
        r = !0;
      }
    }));
  } catch {
  }
  return r;
})(), Uh = (r) => Promise.resolve(r), jh = /* @__PURE__ */ (() => {
  try {
    return new CSSStyleSheet(), typeof new CSSStyleSheet().replaceSync == "function";
  } catch {
  }
  return !1;
})(), Ma = [], Ml = [], Wh = (r, e) => (t) => {
  r.push(t), bi || (bi = !0, e && Ne.$flags$ & 4 ? Yh(vi) : Ne.raf(vi));
}, Pa = (r) => {
  for (let e = 0; e < r.length; e++)
    try {
      r[e](performance.now());
    } catch (t) {
      Cr(t);
    }
  r.length = 0;
}, vi = () => {
  Pa(Ma), Pa(Ml), (bi = Ma.length > 0) && Ne.raf(vi);
}, Yh = (r) => Uh().then(r), Gh = /* @__PURE__ */ Wh(Ml, !0);
function ts(r, e) {
  const t = new Date(r);
  return t.setDate(t.getDate() + e), t;
}
function Kh(r, e, t) {
  const n = [], o = as(r), s = o.getDay() === 0 ? 7 : o.getDay(), i = hr(r), d = i.getDay() === 0 ? 7 : i.getDay(), p = t === 1 ? 7 : t - 1, b = [], m = [];
  {
    let R = (7 - t + s) % 7, pe = ls(o);
    for (; R > 0; )
      b.push(pe), pe = ls(pe), R -= 1;
    b.reverse();
    let oe = (7 - d + p) % 7, ie = yr(i);
    for (; oe > 0; )
      m.push(ie), ie = yr(ie), oe -= 1;
  }
  let x = o;
  for (; x.getMonth() === r.getMonth(); )
    n.push(x), x = yr(x);
  return [...b, ...n, ...m];
}
function as(r) {
  return Me(/* @__PURE__ */ new Date(`${String(Nl(r)).padStart(4, "0")}-${String(Pl(r)).padStart(2, "0")}-01`));
}
function Hn(r) {
  if (r instanceof Date)
    return `${r.getFullYear()}-${String(r.getMonth() + 1).padStart(2, "0")}-${String(r.getDate()).padStart(2, "0")}`;
}
function hr(r) {
  const e = as(r);
  return e.setMonth(e.getMonth() + 1), e.setDate(e.getDate() - 1), e;
}
function Pl(r) {
  return r.getMonth() + 1;
}
function Zh(r) {
  return new Array(12).fill(void 0).map((e, t) => {
    const n = Me(/* @__PURE__ */ new Date(`2006-${String(t + 1).padStart(2, "0")}-01`));
    return Intl.DateTimeFormat(r, {
      month: "long"
    }).format(n);
  });
}
function yr(r) {
  return ts(r, 1);
}
function ei(r) {
  const e = new Date(r);
  return e.setDate(1), e.setMonth(e.getMonth() + 1), e;
}
function Na(r) {
  const e = new Date(r);
  return e.setFullYear(e.getFullYear() + 1), e;
}
function ls(r) {
  return ns(r, 1);
}
function ti(r) {
  const e = new Date(r);
  return e.setDate(1), e.setMonth(e.getMonth() - 1), e;
}
function Ba(r) {
  const e = new Date(r);
  return e.setFullYear(e.getFullYear() - 1), e;
}
function Xh(r, e) {
  return new Array(7).fill(void 0).map((t, n) => (r + n) % 7 + 1).map((t) => {
    const n = Me(/* @__PURE__ */ new Date(`2006-01-0${t}`));
    return [
      Intl.DateTimeFormat(e, {
        weekday: "short"
      }).format(n).slice(0, 3),
      Intl.DateTimeFormat(e, {
        weekday: "long"
      }).format(n)
    ];
  });
}
function Nl(r) {
  return r.getFullYear();
}
function Fa(r, e) {
  if (!r || !e || !e.from || !e.to)
    return !1;
  const t = e.from < e.to ? e.from : e.to, n = e.from < e.to ? e.to : e.from;
  return r >= t && r <= n;
}
function Gt(r, e) {
  return !r || !e ? !1 : r.getFullYear() === e.getFullYear() && r.getMonth() === e.getMonth() && r.getDate() === e.getDate();
}
function Me(r) {
  const e = new Date(r);
  return e.setMinutes(e.getMinutes() + e.getTimezoneOffset()), e;
}
function ns(r, e) {
  const t = new Date(r);
  return t.setDate(t.getDate() - e), t;
}
const Qh = ".visually-hidden.sc-wc-datepicker{position:absolute;overflow:hidden;width:1px;height:1px;white-space:nowrap;clip:rect(0 0 0 0);clip-path:inset(50%)}", Jh = {
  clearButton: "Clear value",
  monthSelect: "Select month",
  nextMonthButton: "Next month",
  nextYearButton: "Next year",
  picker: "Choose date",
  previousMonthButton: "Previous month",
  previousYearButton: "Previous year",
  todayButton: "Show today",
  yearSelect: "Select year"
}, eu = /* @__PURE__ */ Mh(class extends Hh {
  constructor() {
    super(), this.__registerHost(), this.selectDate = La(this, "selectDate"), this.changeMonth = La(this, "changeMonth"), this.disabled = !1, this.disableDate = () => !1, this.elementClassName = "wc-datepicker", this.firstDayOfWeek = 0, this.goToRangeStartOnSelect = !0, this.labels = Jh, this.locale = navigator?.language || "en-US", this.maxSearchDays = 365, this.showClearButton = !1, this.showMonthStepper = !0, this.showTodayButton = !1, this.showYearStepper = !1, this.startDate = Hn(/* @__PURE__ */ new Date()), this.pendingClick = !1, this.init = () => {
      this.currentDate = this.startDate ? Me(new Date(this.startDate)) : /* @__PURE__ */ new Date(), this.updateWeekdays(), this.handleMinDate(), this.handleMaxDate();
    }, this.getAvailableDate = (r, e) => {
      let t, n = !1;
      switch (e) {
        case "previousDay":
          t = ls(r);
          break;
        case "nextDay":
          t = yr(r);
          break;
        case "previousSameWeekDay":
          t = ns(r, 7);
          break;
        case "nextSameWeekDay":
          t = ts(r, 7);
          break;
        case "firstOfMonth":
          t = as(r);
          break;
        case "lastOfMonth":
          t = hr(r);
          break;
        case "previousMonth":
          t = ti(r);
          break;
        case "nextMonth":
          t = ei(r);
          break;
        case "previousYear":
          t = Ba(r);
          break;
        case "nextYear":
          t = Na(r);
          break;
      }
      for (; this.disableDate(t) && !n; ) {
        switch (e) {
          case "previousDay":
          case "lastOfMonth":
            t = ls(t);
            break;
          case "nextDay":
          case "firstOfMonth":
          case "previousMonth":
          case "nextMonth":
          case "previousYear":
          case "nextYear":
            t = yr(t);
            break;
          case "previousSameWeekDay":
            t = ns(t, 7);
            break;
          case "nextSameWeekDay":
            t = ts(t, 7);
            break;
        }
        switch (e) {
          case "firstOfMonth":
          case "lastOfMonth":
          case "previousYear":
          case "nextYear":
            n = t.getMonth() !== r.getMonth();
            break;
          case "previousMonth":
            n = t.getMonth() !== r.getMonth() - 1;
            break;
          case "nextMonth":
            n = t.getMonth() !== r.getMonth() + 1;
            break;
          default:
            n = !Fa(t, {
              from: ns(r, this.maxSearchDays),
              to: ts(r, this.maxSearchDays)
            });
            break;
        }
      }
      return n ? r : t;
    }, this.nextMonth = () => {
      this.updateCurrentDate(ei(this.currentDate));
    }, this.nextYear = () => {
      this.updateCurrentDate(Na(this.currentDate));
    }, this.previousMonth = () => {
      this.updateCurrentDate(ti(this.currentDate));
    }, this.previousYear = () => {
      this.updateCurrentDate(Ba(this.currentDate));
    }, this.showToday = () => {
      this.updateCurrentDate(/* @__PURE__ */ new Date());
    }, this.clear = () => {
      this.value = void 0, this.selectDate.emit(void 0);
    }, this.onClick = (r) => {
      if (this.disabled)
        return;
      this.pendingClick = !1;
      const e = r.target.closest("[data-date]");
      if (!e)
        return;
      const t = Me(new Date(e.dataset.date));
      this.isDateDisabled(t) || (this.updateCurrentDate(t), this.onSelectDate(t));
    }, this.onMonthSelect = (r) => {
      const e = +r.target.value - 1, t = this.currentDate.getDate(), n = new Date(this.currentDate.getFullYear(), e, 1), o = hr(n).getDate(), s = Math.min(t, o), i = new Date(this.currentDate.getFullYear(), e, s);
      this.updateCurrentDate(i);
    }, this.onYearSelect = (r) => {
      let e = +r.target.value;
      const t = r.target;
      isNaN(e) ? (e = (/* @__PURE__ */ new Date()).getFullYear(), t.value = String(e)) : e < 0 ? (e = 0, t.value = String(e)) : e > 9999 && (e = 9999, t.value = String(e));
      const n = this.currentDate.getDate(), o = this.currentDate.getMonth(), s = /* @__PURE__ */ new Date();
      s.setFullYear(e, o, 1);
      const i = hr(s).getDate(), d = Math.min(n, i), p = /* @__PURE__ */ new Date();
      p.setFullYear(e, o, d), this.updateCurrentDate(p);
    }, this.onKeyDown = (r) => {
      this.disabled || (r.code === "ArrowLeft" ? (r.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "previousDay"), !0)) : r.code === "ArrowRight" ? (r.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "nextDay"), !0)) : r.code === "ArrowUp" ? (r.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "previousSameWeekDay"), !0)) : r.code === "ArrowDown" ? (r.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "nextSameWeekDay"), !0)) : r.code === "PageUp" ? (r.preventDefault(), r.shiftKey ? this.updateCurrentDate(this.getAvailableDate(this.currentDate, "previousYear"), !0) : this.updateCurrentDate(this.getAvailableDate(this.currentDate, "previousMonth"), !0)) : r.code === "PageDown" ? (r.preventDefault(), r.shiftKey ? this.updateCurrentDate(this.getAvailableDate(this.currentDate, "nextYear"), !0) : this.updateCurrentDate(this.getAvailableDate(this.currentDate, "nextMonth"), !0)) : r.code === "Home" ? (r.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "firstOfMonth"), !0)) : r.code === "End" ? (r.preventDefault(), this.updateCurrentDate(this.getAvailableDate(this.currentDate, "lastOfMonth"), !0)) : (r.code === "Space" || r.code === "Enter") && (r.preventDefault(), this.isDateDisabled(this.currentDate) || this.onSelectDate(this.currentDate)));
    }, this.onMouseEnter = (r) => {
      if (this.disabled)
        return;
      const e = Me(new Date(r.target.closest("td").dataset.date));
      this.hoveredDate = e;
    }, this.onMouseLeave = () => {
      this.hoveredDate = void 0;
    }, this.onMouseDown = () => {
      this.pendingClick = !0;
    }, this.onFocus = (r) => {
      if (this.pendingClick)
        return;
      const e = Me(new Date(r.target.dataset.date));
      Gt(e, this.currentDate) || this.updateCurrentDate(e);
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
    this.currentDate = this.startDate ? Me(new Date(this.startDate)) : /* @__PURE__ */ new Date();
  }
  watchValue() {
    this.value && (Array.isArray(this.value) ? this.currentDate = this.value.length > 1 && !this.goToRangeStartOnSelect ? this.value[1] : this.value[0] : this.value instanceof Date && (this.currentDate = this.value));
  }
  handleMinDate() {
    this.minDate && this.currentDate < Me(new Date(this.minDate)) && (this.currentDate = Me(new Date(this.minDate)));
  }
  handleMaxDate() {
    this.maxDate && this.currentDate > Me(new Date(this.maxDate)) && (this.currentDate = Me(new Date(this.maxDate)));
  }
  componentDidRender() {
    this.moveFocusAfterMonthChanged && (this.focusDate(this.currentDate), this.moveFocusAfterMonthChanged = !1);
  }
  updateWeekdays() {
    this.weekdays = Xh(this.firstDayOfWeek === 0 ? 7 : this.firstDayOfWeek, this.locale);
  }
  getClassName(r) {
    return r ? `${this.elementClassName}__${r}` : this.elementClassName;
  }
  getCalendarRows() {
    const r = Kh(this.currentDate, !0, this.firstDayOfWeek === 0 ? 7 : this.firstDayOfWeek), e = [];
    for (let t = 0; t < r.length; t += 7) {
      const n = r.slice(t, t + 7);
      e.push(n);
    }
    return e;
  }
  getTitle() {
    if (this.value)
      if (this.isRangeValue(this.value)) {
        const r = Intl.DateTimeFormat(this.locale, {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(this.value[0]), e = this.value[1] ? Intl.DateTimeFormat(this.locale, {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(this.value[1]) : void 0;
        return e ? `${r} - ${e}` : r;
      } else
        return Intl.DateTimeFormat(this.locale, {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(this.value);
  }
  focusDate(r) {
    var e;
    (e = this.el.querySelector(`[data-date="${Hn(r)}"]`)) === null || e === void 0 || e.focus();
  }
  updateCurrentDate(r, e) {
    const t = r.getMonth(), n = r.getFullYear();
    if (n > 9999 || n < 0)
      return;
    (t !== this.currentDate.getMonth() || n !== this.currentDate.getFullYear()) && (this.changeMonth.emit({
      month: Pl(r),
      year: Nl(r),
      day: r.getDate()
    }), e && (this.moveFocusAfterMonthChanged = !0)), this.currentDate = r, e && this.focusDate(this.currentDate);
  }
  onSelectDate(r) {
    var e, t;
    if (!this.isDateDisabled(r))
      if (this.isRangeValue(this.value)) {
        const n = ((e = this.value) === null || e === void 0 ? void 0 : e[0]) === void 0 || this.value.length === 2 ? [r] : [this.value[0], r];
        n.length === 2 && n[0] > n[1] && n.reverse();
        const o = n[1] === void 0 ? [Hn(n[0])] : [Hn(n[0]), Hn(n[1])];
        this.value = n, this.selectDate.emit(o);
      } else {
        if (((t = this.value) === null || t === void 0 ? void 0 : t.getTime()) === r.getTime())
          return;
        this.value = r, this.selectDate.emit(Hn(r));
      }
  }
  // @ts-ignore
  isRangeValue(r) {
    return this.range;
  }
  get isPreviousMonthDisabled() {
    if (!this.minDate)
      return !1;
    const r = ti(this.currentDate), e = Me(new Date(this.minDate));
    return hr(r) < e;
  }
  get isNextMonthDisabled() {
    if (!this.maxDate)
      return !1;
    const r = ei(this.currentDate), e = Me(new Date(this.maxDate));
    return as(r) > e;
  }
  isDateDisabled(r) {
    if (this.disableDate(r))
      return !0;
    const e = this.minDate && r < Me(new Date(this.minDate)), t = this.maxDate && r > Me(new Date(this.maxDate));
    return !!(e || t);
  }
  render() {
    const r = this.showTodayButton || this.showClearButton;
    return E(Cl, null, E("div", { "aria-disabled": String(this.disabled), "aria-label": this.labels.picker, class: {
      [this.getClassName()]: !0,
      [`${this.getClassName()}--disabled`]: this.disabled
    }, role: "group" }, E("div", { class: this.getClassName("header") }, E("span", { "aria-atomic": "true", "aria-live": "polite", class: "visually-hidden" }, this.getTitle()), this.showYearStepper && E("button", { "aria-label": this.labels.previousYearButton, class: this.getClassName("previous-year-button"), disabled: this.disabled, innerHTML: this.previousYearButtonContent || void 0, onClick: this.previousYear, type: "button" }, E("svg", { fill: "none", height: "24", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", stroke: "currentColor", viewBox: "0 0 24 24", width: "24" }, E("polyline", { points: "11 17 6 12 11 7" }), E("polyline", { points: "18 17 13 12 18 7" }))), this.showMonthStepper && E("button", { "aria-label": this.labels.previousMonthButton, class: {
      [this.getClassName("previous-month-button")]: !0,
      [this.getClassName("next-month-button--disabled")]: this.isPreviousMonthDisabled
    }, disabled: this.disabled || this.isPreviousMonthDisabled, innerHTML: this.previousMonthButtonContent || void 0, onClick: this.previousMonth, type: "button" }, E("svg", { fill: "none", height: "24", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", stroke: "currentColor", viewBox: "0 0 24 24", width: "24" }, E("polyline", { points: "15 18 9 12 15 6" }))), E("span", { class: this.getClassName("current-month") }, E("select", { title: this.labels.monthSelect, "aria-label": this.labels.monthSelect, class: this.getClassName("month-select"), disabled: this.disabled, onChange: this.onMonthSelect }, Zh(this.locale).map((e, t) => E("option", { key: e, selected: this.currentDate.getMonth() === t, value: t + 1 }, e))), E("input", { title: this.labels.yearSelect, "aria-label": this.labels.yearSelect, class: this.getClassName("year-select"), disabled: this.disabled, max: 9999, maxLength: 4, min: 1, onChange: this.onYearSelect, type: "number", value: this.currentDate.getFullYear() })), this.showMonthStepper && E("button", { "aria-label": this.labels.nextMonthButton, class: {
      [this.getClassName("next-month-button")]: !0,
      [this.getClassName("next-month-button--disabled")]: this.isNextMonthDisabled
    }, disabled: this.disabled || this.isNextMonthDisabled, innerHTML: this.nextMonthButtonContent || void 0, onClick: this.nextMonth, type: "button" }, E("svg", { fill: "none", height: "24", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", stroke: "currentColor", viewBox: "0 0 24 24", width: "24" }, E("polyline", { points: "9 18 15 12 9 6" }))), this.showYearStepper && E("button", { "aria-label": this.labels.nextYearButton, class: this.getClassName("next-year-button"), disabled: this.disabled, innerHTML: this.nextYearButtonContent || void 0, onClick: this.nextYear, type: "button" }, E("svg", { fill: "none", height: "24", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", stroke: "currentColor", viewBox: "0 0 24 24", width: "24" }, E("polyline", { points: "13 17 18 12 13 7" }), E("polyline", { points: "6 17 11 12 6 7" })))), E("div", { class: this.getClassName("body") }, E("table", { class: this.getClassName("calendar"), onKeyDown: this.onKeyDown, role: "grid" }, E("thead", { class: this.getClassName("calendar-header") }, E("tr", { class: this.getClassName("weekday-row") }, this.weekdays.map((e) => E("th", { "aria-label": e[1], abbr: e[1], class: this.getClassName("weekday"), key: e[0], scope: "col" }, E("span", null, e[0]))))), E("tbody", null, this.getCalendarRows().map((e) => {
      const t = `row-${e[0].getMonth()}-${e[0].getDate()}`;
      return E("tr", { class: this.getClassName("calendar-row"), key: t }, e.map((n) => {
        var o, s, i, d, p;
        const b = Gt(n, this.currentDate), m = n.getMonth() !== this.currentDate.getMonth(), x = Array.isArray(this.value) ? Gt(n, this.value[0]) || Gt(n, this.value[1]) : Gt(n, this.value), k = this.isRangeValue ? Fa(n, {
          from: (o = this.value) === null || o === void 0 ? void 0 : o[0],
          to: ((s = this.value) === null || s === void 0 ? void 0 : s[1]) || this.hoveredDate || this.currentDate
        }) : !1, R = !((i = this.value) === null || i === void 0) && i[0] ? [
          (d = this.value) === null || d === void 0 ? void 0 : d[0],
          ((p = this.value) === null || p === void 0 ? void 0 : p[1]) || this.hoveredDate
        ].sort((Se, Ee) => Se - Ee) : [], pe = this.range && Gt(R[0], n), fe = this.range && Gt(R[1], n), oe = Gt(n, /* @__PURE__ */ new Date()), ie = this.isDateDisabled(n), Qe = `cell-${n.getMonth()}-${n.getDate()}`, re = {
          [this.getClassName("date")]: !0,
          [this.getClassName("date--current")]: b,
          [this.getClassName("date--disabled")]: ie,
          [this.getClassName("date--overflowing")]: m,
          [this.getClassName("date--today")]: oe,
          [this.getClassName("date--selected")]: x,
          [this.getClassName("date--in-range")]: k,
          [this.getClassName("date--start")]: pe,
          [this.getClassName("date--end")]: fe
        }, be = x ? "strong" : oe ? "em" : "span";
        return E("td", { "aria-disabled": String(ie), "aria-selected": x ? "true" : void 0, "aria-current": oe ? "date" : x ? "true" : void 0, class: re, "data-date": Hn(n), key: Qe, onClick: this.onClick, onMouseDown: this.onMouseDown, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, onFocus: this.onFocus, role: "gridcell", tabIndex: Gt(n, this.currentDate) && !this.disabled ? 0 : -1 }, E(be, { "aria-hidden": "true" }, n.getDate()), E("span", { class: "visually-hidden" }, Intl.DateTimeFormat(this.locale, {
          day: "numeric",
          month: "long",
          year: "numeric"
        }).format(n)));
      }));
    })))), r && E("div", { class: this.getClassName("footer") }, this.showTodayButton && E("button", { class: this.getClassName("today-button"), disabled: this.disabled, innerHTML: this.todayButtonContent || void 0, onClick: this.showToday, type: "button" }, this.labels.todayButton), this.showClearButton && E("button", { class: this.getClassName("clear-button"), disabled: this.disabled, innerHTML: this.clearButtonContent || void 0, onClick: this.clear, type: "button" }, this.labels.clearButton))));
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
    return Qh;
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
}]), tu = eu;
var nu = Object.defineProperty, le = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && nu(e, t, o), o;
};
customElements.get("wc-datepicker") || customElements.define("wc-datepicker", tu);
var Yn;
const ee = (Yn = class extends pt {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this.width = "full", this.hideTodayButton = !1, this.hideClearButton = !1, this.disabled = !1, this.required = !1, this.optional = !1, this.showError = !1, this.errorMessage = "", this.form = null, this.tooltip = "", this.type = "date", this.label = "", this.description = "", this.startDate = "", this.minDate = "", this.maxDate = "", this.inverted = !1, this.value = void 0, this.datepickerIsOpen = !1, this.DATEPICKER_GAP = 4, this._hasUserInteracted = !1, this._onKeydownEsc = (e) => {
      if (e.key !== "Escape" || e.code !== "Escape" || !this.datepickerIsOpen) return;
      e.preventDefault(), e.stopPropagation(), this.shadowRoot?.querySelector("wc-datepicker")?.classList.remove("active"), this.datepickerIsOpen = !1, this.removeEventListener("keydown", this._handleFocusTrap), this.shadowRoot?.querySelector("input")?.focus();
    }, this._handleScrollReposition = () => {
      this.datepickerIsOpen && this._positionDatepicker();
    };
  }
  // need this flag for "eager mode"
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   * Form association, ElementInternals, and id generation are provided by
   * NysFormControlElement (@nysds/internals).
   */
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("invalid", this._handleInvalid), this.addEventListener("focusout", this._handleBlur), this.addEventListener("keydown", this._onKeydownEsc);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._stopDatepickerPositioning(), this.removeEventListener("invalid", this._handleInvalid), this.removeEventListener("focusout", this._handleBlur), this.removeEventListener("keydown", this._onKeydownEsc);
  }
  async firstUpdated() {
    this._setValue(this.value), !(this._shouldUseNativeDatepicker() || !await this._whenWcDatepickerReady()) && (setTimeout(() => this._replaceButtonSVG(), 0), setTimeout(() => this._addMonthDropdownIcon(), 0), setTimeout(() => this._handleDateChange(), 0), setTimeout(() => this._onDocumentClick(), 0));
  }
  updated(e) {
    if (super.updated(e), e.has("value")) {
      const t = e.get("value"), n = this.value;
      !n && t !== n ? (this.setFormValue(""), this._manageRequire()) : n && this._setValue(n);
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
      this.value = void 0, this.setFormValue(""), this._manageRequire();
      return;
    }
    const t = e instanceof Date ? e : this._parseLocalDate(e), n = [
      t.getFullYear(),
      String(t.getMonth() + 1).padStart(2, "0"),
      String(t.getDate()).padStart(2, "0")
    ].join("-");
    this.value = t, this.setFormValue(n);
    const o = this.shadowRoot?.querySelector("input");
    o && (o.value = n);
    const s = this.shadowRoot?.querySelector("wc-datepicker");
    s && (s.value = t), this._manageRequire();
  }
  // Called to internally set the initial internalElement required flag.
  _manageRequire() {
    const e = this.shadowRoot?.querySelector("input");
    if (!e) return;
    const t = this.errorMessage || "This field is required.";
    this.required && !this.value ? this.setValidityFromState({ valueMissing: !0 }, t, e) : this.clearValidity();
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
    const t = this.shadowRoot?.querySelector("input");
    t && (!e && this.showError && this.errorMessage?.trim() || (this.showError = !!e, this.errorMessage?.trim() && e !== "" && (e = this.errorMessage), e ? this.setValidityFromState({ customError: !0 }, e, t) : this.clearValidity()));
  }
  // Handles native 'invalid' events
  _handleInvalid(e) {
    e.preventDefault(), this._hasUserInteracted = !0, this._validate();
    const t = this.shadowRoot?.querySelector("input");
    if (t) {
      const n = this.internals?.form;
      n ? Array.from(n.elements).find(
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
    ), n = e.querySelector(
      ".wc-datepicker__previous-month-button"
    );
    !t || !n || (n.innerHTML = `
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
      const n = document.createElement("span");
      n.className = "month-wrapper", t.parentNode?.insertBefore(n, t), n.appendChild(t);
      const o = document.createElement("nys-icon");
      o.setAttribute("name", "chevron_down"), o.setAttribute("id", "wc-month-dropdown-icon"), o.setAttribute("size", "20"), n.appendChild(o);
    }
  }
  // Creates a Date at local midnight to avoid UTC timezone shifting
  _parseLocalDate(e) {
    const [t, n, o] = e.split("-").map(Number);
    return new Date(t, n - 1, o);
  }
  _setTodayDate() {
    const e = /* @__PURE__ */ new Date();
    e.setHours(0, 0, 0, 0), this._setValue(e), this._setFocusOnTodayDate();
  }
  async _setFocusOnTodayDate(e = !1) {
    if (this.minDate) {
      const i = /* @__PURE__ */ new Date();
      i.setHours(0, 0, 0, 0);
      const d = this._parseLocalDate(this.minDate);
      if (i < d) return;
    }
    const t = /* @__PURE__ */ new Date();
    t.setHours(0, 0, 0, 0);
    const n = [
      t.getFullYear(),
      String(t.getMonth() + 1).padStart(2, "0"),
      String(t.getDate()).padStart(2, "0")
    ].join("-"), o = this.shadowRoot?.querySelector("wc-datepicker");
    if (!o) return;
    const s = o.querySelector(
      `td[data-date="${n}"]`
    );
    s && (e || s.focus());
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
      const n = t.composedPath(), o = this.shadowRoot?.querySelector(
        ".nys-datepicker--input-container"
      ), s = this.shadowRoot?.querySelector(
        ".wc-datepicker--container"
      ), i = this.shadowRoot?.querySelector("wc-datepicker");
      o && n.includes(o) || s && n.includes(s) || i && n.includes(i) || i?.classList.remove("active");
    };
    document.addEventListener("click", e);
  }
  _toggleDatepicker() {
    if (this.disabled) return;
    if (this._shouldUseNativeDatepicker()) {
      const n = this.shadowRoot?.querySelector(
        "input"
      );
      n && n.focus();
      return;
    }
    const t = this.shadowRoot?.querySelector("wc-datepicker")?.classList.toggle("active");
    this.datepickerIsOpen = !!t, t ? (this.value || this._setFocusOnTodayDate(), this._startDatepickerPositioning(), this.addEventListener("keydown", this._handleFocusTrap)) : this._stopDatepickerPositioning();
  }
  _openDatepicker() {
    if (this.disabled || this._shouldUseNativeDatepicker()) return;
    const e = this.shadowRoot?.querySelector("wc-datepicker");
    e && (this.value || this._setFocusOnTodayDate(!0), e?.classList.add("active"), this.datepickerIsOpen = !0, this._startDatepickerPositioning(), this.addEventListener("keydown", this._handleFocusTrap));
  }
  _handleDateChange() {
    const e = this.shadowRoot?.querySelector("wc-datepicker");
    e && e.addEventListener("selectDate", (t) => {
      const n = t.detail, o = this._parseLocalDate(n);
      if (this._isOutOfRange(o)) {
        e.classList.add("active");
        return;
      }
      this._setValue(o), this._validate(), this._dispatchInputEvent(), e.classList.remove("active"), this.datepickerIsOpen = !1, this.removeEventListener("keydown", this._handleFocusTrap);
    });
  }
  _handleTodayClick() {
    this.disabled || (this._setTodayDate(), this._hasUserInteracted = !0, this._validate(), this._dispatchInputEvent());
  }
  _handleClearClick() {
    if (this.disabled) return;
    this.value = void 0, this.setFormValue("");
    const e = this.shadowRoot?.querySelector("input");
    e && (e.value = ""), this._hasUserInteracted = !0, this._validate(), this._dispatchInputEvent();
  }
  _handleInputChange(e) {
    const t = e.target;
    if (!t) return;
    const n = this._getValidDateFromInput(t.value);
    if (!n) {
      t.value || (this.value = void 0, this.setFormValue(""), this._hasUserInteracted && this._validate());
      return;
    }
    this._setValue(n), this._hasUserInteracted && this._validate(), this._dispatchInputEvent();
  }
  _getValidDateFromInput(e) {
    const n = /^(\d{4})-(\d{2})-(\d{2})$/.exec(e);
    return !n || Number(n[1]) < 1e3 ? null : this._parseLocalDate(e);
  }
  _handleFocusTrap(e) {
    if (!this.datepickerIsOpen || e.key !== "Tab") return;
    const t = this.shadowRoot?.querySelector(
      ".wc-datepicker--container"
    );
    if (!t) return;
    const n = [
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "[tabindex]:not([tabindex='-1'])"
    ], o = [];
    if (t.querySelectorAll("nys-button").forEach((p) => {
      o.push(p);
    }), o.push(
      ...Array.from(
        t.querySelectorAll(n.join(","))
      ).filter((p) => p.offsetParent !== null)
    ), o.length === 0) return;
    const s = o[0], i = o[o.length - 1], d = this.shadowRoot?.activeElement;
    e.shiftKey ? d === s && (e.preventDefault(), i.focus()) : d === i && (e.preventDefault(), s.focus());
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
  /**
   * Auto-Positioning
   * --------------------------------------------------------------------------
   * Opens the calendar below the input by default. If there isn't enough
   * room below (and there's more room above), it opens above instead.
   */
  _positionDatepicker() {
    const e = this.shadowRoot?.querySelector("wc-datepicker"), t = this.shadowRoot?.querySelector(
      ".nys-datepicker--input-container"
    ), n = this.shadowRoot?.querySelector(
      ".nys-datepicker--container"
    );
    if (!e || !t || !n) return;
    e.classList.remove("position-top"), e.style.top = "";
    const o = e?.getBoundingClientRect();
    if (window.innerHeight - o?.bottom < this.DATEPICKER_GAP) {
      const i = t.getBoundingClientRect(), d = n.getBoundingClientRect(), p = i.top - d.top - o.height - this.DATEPICKER_GAP;
      e.style.top = `${p}px`, e.classList.add("position-top");
    }
  }
  _startDatepickerPositioning() {
    this._positionDatepicker(), window.addEventListener("scroll", this._handleScrollReposition, !0);
  }
  _stopDatepickerPositioning() {
    window.removeEventListener("scroll", this._handleScrollReposition, !0);
  }
  render() {
    const e = this._shouldUseNativeDatepicker();
    return y` <div class="nys-datepicker--container">
        <nys-label
          id="${this.id}--label"
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
            min=${v(this.minDate || void 0)}
            max=${this.maxDate || "9999-12-31"}
            ?required=${this.required}
            .value=${this.value instanceof Date ? this.value.toISOString().split("T")[0] : this.value || ""}
            ?disabled=${this.disabled}
            aria-labelledby=${v(
      this.label ? this.id + "--label" : void 0
    )}
            aria-label=${v(
      !this.label && this.ariaLabel ? this.ariaLabel : void 0
    )}
            aria-disabled=${v(this.disabled ? "true" : void 0)}
            aria-required=${v(this.required ? "true" : void 0)}
            aria-invalid=${this.showError ? "true" : "false"}
            aria-errormessage=${this.id + "--error"}
            aria-describedby=${v(
      this.showError ? this.id + "--error" : void 0
    )}
            @click=${this._openDatepicker}
            @input=${this._handleInputChange}
            @blur=${this._handleBlur}
            @keydown=${this._handleInputKeydown}
          />
          ${e ? null : y`
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
            start-date=${v(this.startDate ? this.startDate : void 0)}
            min-date=${v(this.minDate || void 0)}
            max-date=${v(this.maxDate || void 0)}
            role="dialog"
            aria-modal=${this.datepickerIsOpen ? "true" : "false"}
          >
            ${!this.hideTodayButton || !this.hideClearButton ? y`
                  <div class="wc-datepicker--button-container">
                    ${this.hideTodayButton ? null : y`
                          <nys-button
                            label="Today"
                            size="sm"
                            fullWidth
                            variant="outline"
                            ?disabled=${this.disabled}
                            @nys-click=${this._handleTodayClick}
                          ></nys-button>
                        `}
                    ${this.hideClearButton ? null : y`
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
        id=${this.id + "--error"}
        ?showError=${this.showError}
        errorMessage=${this.internals.validationMessage || this.errorMessage}
      ></nys-errormessage>`;
  }
}, Yn.styles = C(sh), Yn.shadowRootOptions = {
  ...I.shadowRootOptions,
  delegatesFocus: !0
}, Yn);
le([
  a({ type: String, reflect: !0 })
], ee.prototype, "id");
le([
  a({ type: String, reflect: !0 })
], ee.prototype, "name");
le([
  a({ type: String, reflect: !0 })
], ee.prototype, "width");
le([
  a({ type: Boolean })
], ee.prototype, "hideTodayButton");
le([
  a({ type: Boolean })
], ee.prototype, "hideClearButton");
le([
  a({ type: Boolean, reflect: !0 })
], ee.prototype, "disabled");
le([
  a({ type: Boolean, reflect: !0 })
], ee.prototype, "required");
le([
  a({ type: Boolean, reflect: !0 })
], ee.prototype, "optional");
le([
  a({ type: Boolean, reflect: !0 })
], ee.prototype, "showError");
le([
  a({ type: String })
], ee.prototype, "errorMessage");
le([
  a({ type: String, reflect: !0 })
], ee.prototype, "form");
le([
  a({ type: String })
], ee.prototype, "tooltip");
le([
  a({ type: String })
], ee.prototype, "type");
le([
  a({ type: String })
], ee.prototype, "label");
le([
  a({ type: String })
], ee.prototype, "description");
le([
  a({ type: String })
], ee.prototype, "startDate");
le([
  a({ type: String })
], ee.prototype, "minDate");
le([
  a({ type: String })
], ee.prototype, "maxDate");
le([
  a({ type: Boolean, reflect: !0 })
], ee.prototype, "inverted");
le([
  a({
    type: Object,
    converter: {
      fromAttribute: (r) => r ? ee.prototype._parseLocalDate(r) : void 0,
      toAttribute: (r) => r ? typeof r == "string" ? r : r.toISOString().split("T")[0] : ""
    }
  })
], ee.prototype, "value");
le([
  $()
], ee.prototype, "datepickerIsOpen");
let ou = ee;
customElements.get("nys-datepicker") || customElements.define("nys-datepicker", ou);
const ru = ":host{--_nys-divider-size: var(--nys-size-1px, 1px);--_nys-divider-color: var(--nys-color-neutral-500, #797c7f);--_nys-divider-width: 100%}:host([inverted]){--_nys-divider-color: var(--nys-color-ink-reverse, #ffffff)}:host([subtle]){--_nys-divider-color: var(--nys-color-neutral-100, #e4e5e6)}.nys-divider{width:var(--_nys-divider-width);height:var(--_nys-divider-size);background-color:var(--_nys-divider-color);flex:1 0 0;margin:0;border:none}";
var su = Object.defineProperty, Bl = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && su(e, t, o), o;
};
const Ri = class Ri extends yc {
  constructor() {
    super(...arguments), this.inverted = !1, this.subtle = !1;
  }
  /**
   * The host element IS the separator, so reflect role="separator" onto the host
   * via internals. A horizontal separator's implicit aria-orientation is
   * "horizontal", which matches this component, so no explicit orientation is set.
   */
  get defaultRole() {
    return "separator";
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return y`<hr
      class="nys-divider"
      role="presentation"
      aria-hidden="true"
    />`;
  }
};
Ri.styles = C(ru);
let vr = Ri;
Bl([
  a({ type: Boolean, reflect: !0 })
], vr.prototype, "inverted");
Bl([
  a({ type: Boolean, reflect: !0 })
], vr.prototype, "subtle");
customElements.get("nys-divider") || customElements.define("nys-divider", vr);
const Fl = ':host{--_nys-dropdownmenu-width: 180px;--_nys-dropdownmenu-height: 100%;--_nys-dropdownmenu-radius: var(--nys-radius-md, 4px);--_nys-dropdownmenu-border-width: var(--nys-border-width-sm, 1px);--_nys-dropdownmenu-border-color: var(--nys-color-neutral-100, #d0d0ce);--_nys-dropdownmenu-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-dropdownmenu-boxshadow-color-100: var( --nys-color-black-transparent-100, rgba(27, 27, 27, .1) );--_nys-dropdownmenu-boxshadow-color-50: var( --nys-color-black-transparent-50, rgba(27, 27, 27, .01) );--_nys-dropdownmenu-gap: var(--nys-space-2px, 2px);--_nys-dropdownmenu-padding: var(--nys-space-100, 8px);--_nys-dropdownmenu-font-size: var(--nys-font-size-ui-md, 16px);--_nys-dropdownmenu-font-weight: var(font-weight: 400);--_nys-dropdownmenu-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-dropdownmenu-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-dropdownmenuitem-color: var(--nys-color-text, #1b1b1b);--_nys-dropdownmenuitem-gap: var(--nys-space-100, 8px);--_nys-dropdownmenuitem-padding: var(--nys-space-200, 16px) var(--nys-space-100, 8px);--_nys-dropdownmenuitem-border-radius: var(--nys-radius-md, 4px);--_nys-dropdownmenuitem-background-color: var(--nys-color-white, #ffffff);--_nys-dropdownmenuitem-background-color--hover: var( --nys-color-neutral-10, #f6f6f6 );--_nys-dropdownmenuitem-background-color--active: var( --nys-color-neutral-50, #ededed );--_nys-dropdownmenuitem-color--disabled: var( --nys-color-text-disabled, #bec0c1 );--_nys-dropdownmenuitem-outline-width: var(--nys-border-width-md, 2px);--_nys-dropdownmenuitem-outline-color: var(--nys-color-focus, #004dd1)}.nys-dropdownmenu{position:fixed;top:0;left:0;z-index:1776}.nys-dropdownmenu.active ul{display:flex}.nys-dropdownmenu ul{display:none;align-items:flex-start;flex-direction:column;gap:var(--_nys-dropdownmenu-gap);width:var(--_nys-dropdownmenu-width);height:var(--_nys-dropdownmenu-height);border-radius:var(--_nys-dropdownmenu-radius);border:var(--_nys-dropdownmenu-border-width) solid var(--_nys-dropdownmenu-border-color);background-color:var(--_nys-dropdownmenu-background-color);box-shadow:0 4px 6px -1px var(--_nys-dropdownmenu-boxshadow-color-100),0 4px 6px -1px var(--_nys-dropdownmenu-boxshadow-color-50);padding:var(--_nys-dropdownmenu-padding);font-family:var(--_nys-dropdownmenu-font-family);font-size:var(--_nys-dropdownmenu-font-size);font-weight:var(--_nys-dropdownmenu-font-weight);line-height:var(--_nys-dropdownmenu-line-height);overflow:hidden;margin:0}.nys-dropdownmenuitem{list-style:none;width:var(--_nys-dropdownmenu-width);padding:0;margin:0}.nys-dropdownmenuitem a,.nys-dropdownmenuitem button{display:flex;gap:var(--_nys-dropdownmenuitem-gap);padding:var(--_nys-dropdownmenuitem-padding);border-radius:var(--_nys-dropdownmenuitem-border-radius);background-color:var(--_nys-dropdownmenuitem-background-color);width:100%;box-sizing:border-box;text-decoration:none;text-wrap:wrap;color:var(--_nys-dropdownmenuitem-color);transition:.05s ease-in-out all;border:none;font-family:var(--_nys-dropdownmenu-font-family);font-size:var(--_nys-dropdownmenu-font-size);font-weight:var(--_nys-dropdownmenu-font-weight);line-height:var(--_nys-dropdownmenu-line-height);cursor:pointer}.nys-dropdownmenuitem a nys-icon,.nys-dropdownmenuitem button nys-icon{margin-top:2.5px}.nys-dropdownmenuitem a:hover:not(.disabled):not([aria-disabled=true]),.nys-dropdownmenuitem button:hover:not(.disabled):not([aria-disabled=true]){background-color:var(--_nys-dropdownmenuitem-background-color--hover)}.nys-dropdownmenuitem a:active:not(.disabled):not([aria-disabled=true]),.nys-dropdownmenuitem button:active:not(.disabled):not([aria-disabled=true]){background-color:var(--_nys-dropdownmenuitem-background-color--active)}.nys-dropdownmenuitem a:focus-visible:not(.disabled):not([aria-disabled=true]):not([focus-ring-false]),.nys-dropdownmenuitem button:focus-visible:not(.disabled):not([aria-disabled=true]):not([focus-ring-false]){position:relative;outline:var(--_nys-dropdownmenuitem-outline-width) solid var(--_nys-dropdownmenuitem-outline-color)}.nys-dropdownmenuitem a.disabled,.nys-dropdownmenuitem a[aria-disabled=true],.nys-dropdownmenuitem button.disabled,.nys-dropdownmenuitem button[aria-disabled=true]{color:var(--_nys-dropdownmenuitem-color--disabled);pointer-events:none;cursor:default}';
var iu = Object.defineProperty, Po = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && iu(e, t, o), o;
};
const fs = class fs extends D {
  constructor() {
    super(...arguments), this.label = "", this.href = "", this.disabled = !1, this.target = "_self", this.prefixIcon = "", this.divider = "";
  }
  // super.connectedCallback() (NysElement) auto-assigns this.id when
  // one is not provided (prefix = localName, i.e. "nys-dropdownmenuitem-<ts>-<n>").
  // role="menuitem" intentionally stays on the inner <a>/<button>, so this
  // component keeps defaultRole = null and does not move a role onto the host.
  connectedCallback() {
    super.connectedCallback();
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
    return y`<li class="nys-dropdownmenuitem" role="presentation">
      ${e ? y` <a
            class=${this.disabled ? "disabled" : ""}
            href=${this.disabled ? "" : this.href}
            role="menuitem"
            aria-disabled="${this.disabled ? "true" : "false"}"
            aria-label=${this.label}
            tabindex=${this.disabled ? "-1" : "0"}
            @click="${this._handleClick}"
            target="${this.target}"
          >
            ${this.prefixIcon ? y`<nys-icon size="16" name=${this.prefixIcon}></nys-icon>` : ""}
            ${this.label}</a
          >` : y`
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
              ${this.prefixIcon ? y`<nys-icon size="16" name=${this.prefixIcon}></nys-icon>` : ""}
              ${this.label}
            </button>
          `}
    </li>`;
  }
};
fs.styles = C(Fl), fs.shadowRootOptions = {
  ...I.shadowRootOptions,
  delegatesFocus: !0
};
let Zt = fs;
Po([
  a({ type: String })
], Zt.prototype, "label");
Po([
  a({ type: String })
], Zt.prototype, "href");
Po([
  a({ type: Boolean, reflect: !0 })
], Zt.prototype, "disabled");
Po([
  a({ type: String })
], Zt.prototype, "target");
Po([
  a({ type: String })
], Zt.prototype, "prefixIcon");
Po([
  a({ type: String })
], Zt.prototype, "divider");
customElements.get("nys-dropdownmenuitem") || customElements.define("nys-dropdownmenuitem", Zt);
var au = Object.defineProperty, As = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && au(e, t, o), o;
};
const Oi = class Oi extends D {
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.for = "", this.showDropdown = !1, this.label = "", this.position = null, this._trigger = null, this._menuElement = null, this._ariaTarget = null, this._lastFocusedIndex = 0, this.GAP = 4, this._resizeObserver = null, this._toggleDropdown = async () => {
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
      const t = e?.composedPath(), n = t.includes(this), o = this._trigger && t.includes(this._trigger);
      !n && !o && this._closeDropdown();
    }, this._handleTriggerKeydown = (e) => {
      e.defaultPrevented || e.key === "Escape" && this.showDropdown && (e.preventDefault(), this._closeDropdown());
    }, this._handleMenuKeydown = (e) => {
      const t = this._getMenuItems(), n = t.indexOf(document.activeElement);
      switch (e.key) {
        case "Escape":
          e.preventDefault(), this._closeDropdown();
          break;
        case "ArrowDown":
        case "ArrowRight":
          e.preventDefault();
          const o = n < t.length - 1 ? n + 1 : 0;
          this._lastFocusedIndex = o, t[o].focus();
          break;
        case "ArrowUp":
        case "ArrowLeft":
          e.preventDefault();
          const s = n > 0 ? n - 1 : t.length - 1;
          this._lastFocusedIndex = s, t[s].focus();
          break;
        case "Tab":
          n >= t.length - 1 && !e.shiftKey && this._closeDropdown();
          break;
      }
    }, this._handleWindowScroll = () => {
      this.showDropdown && this._positionMenu();
    };
  }
  // super.connectedCallback() (NysElement) auto-assigns this.id when
  // one is not provided (prefix = localName, i.e. "nys-dropdownmenu-<ts>-<n>").
  // The menu/menuitem roles intentionally stay on the inner <ul>/items, so this
  // component keeps defaultRole = null and does not move a role onto the host.
  connectedCallback() {
    super.connectedCallback();
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
    const n = (o) => {
      for (const s of Array.from(o.querySelectorAll("*"))) {
        const i = s.shadowRoot;
        if (i) {
          const d = i.getElementById(e);
          if (d) return d;
          const p = n(i);
          if (p) return p;
        }
      }
      return null;
    };
    return n(document);
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
      (n) => n && !n.hasAttribute("disabled")
    );
  }
  async _focusOnItem(e = 0) {
    await new Promise((o) => requestAnimationFrame(o));
    const t = this._getMenuItems(), n = t[Math.min(e, t.length - 1)];
    n && n.focus();
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
    const t = this._checkSpaceAvailable(), n = this._menuElement.getBoundingClientRect();
    return this._checkPositionFits(
      e,
      t,
      n
    ) ? e : this._findBestAlternative(e, t, n);
  }
  /**
   * Auto Positioning of the dropdown menu relies on the best surrounding space available
   * to select the desirable position.
   */
  _autoPosition() {
    const e = this._checkSpaceAvailable(), t = this._menuElement.getBoundingClientRect(), n = "bottom-end";
    return this._checkPositionFits(n, e, t) ? n : this._findBestAlternative(n, e, t);
  }
  /**
   * Checks if the dropdown menu fits inside the viewport on the given side of the trigger.
   * Overrides user set position for auto-positioning if user's desire space is not available
   */
  _checkSpaceAvailable() {
    if (!this._trigger)
      return { top: 0, bottom: 0, start: 0, end: 0 };
    const e = this._trigger.getBoundingClientRect(), t = window.innerWidth, n = window.innerHeight;
    return {
      top: e.top,
      bottom: n - e.bottom,
      start: e.left,
      end: t - e.right
    };
  }
  _checkPositionFits(e, t, n) {
    const o = n.width, s = n.height, [i, d] = e.split("-"), p = i === "bottom" ? t.bottom >= s + this.GAP : t.top >= s + this.GAP, b = d === "start" ? t.end >= o : t.start >= o;
    return p && b;
  }
  /**
   * This position is called for when user's set position didn't fit OR auto positioning when default position doesn't fit
   * We look for the best alternative positions in order of preference base on the set position (e.g. bottom-start => bottom-end).
   * @param userPosition
   * @param space
   * @param menuRect
   */
  _findBestAlternative(e, t, n) {
    const [o, s] = e.split("-"), i = [
      `${o === "bottom" ? "top" : "bottom"}-${s}`,
      // Flip vertical
      `${o}-${s === "start" ? "end" : "start"}`,
      // Flip horizontal
      `${o === "bottom" ? "top" : "bottom"}-${s === "start" ? "end" : "start"}`
      // Flip both
    ];
    for (const d of i)
      if (this._checkPositionFits(d, t, n))
        return d;
    return this._findMostAvailableSpace(t);
  }
  _findMostAvailableSpace(e) {
    const t = e.bottom >= e.top ? "bottom" : "top", n = e.start >= e.end ? "start" : "end";
    return `${t}-${n}`;
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
    const t = this._trigger.getBoundingClientRect(), n = this._menuElement.getBoundingClientRect(), [o, s] = e.split("-");
    let i = 0, d = 0;
    return o === "bottom" ? i = t.bottom + this.GAP : i = t.top - n.height - this.GAP, s === "start" ? d = t.left : d = t.right - n.width, { top: i, left: d };
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
      const t = this._getMenuItems(), n = e.detail?.id, o = t.findIndex((s) => s.id === n);
      o !== -1 && (this._lastFocusedIndex = o), this._closeDropdown();
    });
  }
  render() {
    return y`<div
      class="nys-dropdownmenu ${this.showDropdown ? "active" : ""}"
      for=${this.for}
      ?hidden=${!this.showDropdown}
    >
      <ul role="menu" aria-label=${this.label || "Menu"}>
        <slot></slot>
      </ul>
    </div>`;
  }
};
Oi.styles = C(Fl);
let Xn = Oi;
As([
  a({ type: String, reflect: !0 })
], Xn.prototype, "for");
As([
  a({ type: Boolean })
], Xn.prototype, "showDropdown");
As([
  a({ type: String })
], Xn.prototype, "label");
As([
  a({ type: String, reflect: !0 })
], Xn.prototype, "position");
customElements.get("nys-dropdownmenu") || customElements.define("nys-dropdownmenu", Xn);
const lu = ':host{--_nys-errormessage-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-errormessage-font-weight: var(--nys-font-weight-regular, 400);--_nys-errormessage-font-size: var(--nys-font-size-ui-md, 16px);--_nys-errormessage-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-errormessage-letter-spacing: var( --nys-font-letterspacing-ui-md, .044px );--_nys-errormessage-color: var(--nys-color-danger, #b52c2c);--_nys-errormessage-gap: var(--nys-space-100, 8px);--_nys-errormessage-padding--divider: var(--nys-space-50, 4px);--_nys-errormessage-width--divider: var(--nys-border-width-sm, 1px);--_nys-errormessage-margin-top: 0}.nys-errormessage{display:flex;align-items:center;gap:var(--_nys-errormessage-gap);font-family:var(--_nys-errormessage-font-family);font-weight:var(--_nys-errormessage-font-weight);font-size:var(--_nys-errormessage-font-size);line-height:var(--_nys-errormessage-line-height);letter-spacing:var(--_nys-errormessage-letter-spacing);color:var(--_nys-errormessage-color);margin-top:var(--_nys-errormessage-margin-top)}.nys-errormessage[showDivider]{padding-top:var(--_nys-errormessage-padding--divider);margin-top:var(--_nys-errormessage-padding--divider);border-top:var(--_nys-errormessage-width--divider) solid var(--_nys-errormessage-color)}nys-icon{margin-top:-2px}';
var cu = Object.defineProperty, Ls = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && cu(e, t, o), o;
};
let du = 0;
const Mi = class Mi extends I {
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.showError = !1, this.errorMessage = "", this.showDivider = !1, this._errInternals = typeof this.attachInternals == "function" ? this.attachInternals() : null, this.id || (this.id = `nys-errormessage-${Date.now()}-${du++}`);
  }
  updated() {
    this._errInternals && (this._errInternals.ariaLabel = this.errorMessage || null);
  }
  render() {
    return y`<div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      class="nys-errormessage__region"
    >
      ${this.showError ? y`<div class="nys-errormessage" ?showDivider=${this.showDivider}>
            <nys-icon name="error" size="2xl"></nys-icon>
            ${this.errorMessage}
          </div>` : ""}
    </div>`;
  }
};
Mi.styles = C(lu);
let Qn = Mi;
Ls([
  a({ type: String, reflect: !0 })
], Qn.prototype, "id");
Ls([
  a({ type: Boolean })
], Qn.prototype, "showError");
Ls([
  a({ type: String })
], Qn.prototype, "errorMessage");
Ls([
  a({ type: Boolean, reflect: !0 })
], Qn.prototype, "showDivider");
customElements.get("nys-errormessage") || customElements.define("nys-errormessage", Qn);
async function hu(r, e) {
  if (!e || e.trim() === "") return !0;
  const t = e.toLowerCase().split(",").map((s) => s.trim()), n = r.name.toLowerCase(), o = n.includes(".") ? n.split(".").pop() : "";
  for (const s of t)
    if (s.startsWith(".") && s.slice(1) === o || s.endsWith("/*") && r.type.startsWith(s.slice(0, -1)) || r.type === s)
      return !0;
  return !1;
}
const uu = ':host{--_nys-fileitem-border-radius: var(--nys-radius-md, 4px);--_nys-fileitem-padding: var(--nys-space-100, 8px) var(--nys-space-200, 16px);--_nys-fileitem-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-fileitem-border-color: var(--nys-color-neutral-100, #d0d0ce);--_nys-fileitem-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-fileitem-font-size: var(--nys-font-size-ui-md, 16px);--_nys-fileitem-font-weight: var(--nys-font-weight-regular, 400);--_nys-fileitem-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-fileitem-letter-spacing: var(--nys-font-letterspacing-ui-md, .044px);--_nys-fileitem-background-color--progress: var( --nys-color-neutral-50, #ededed );--_nys-fileitem-background-color--progress--fill: var( --nys-color-info, #004dd1 )}.file-item{position:relative;border-radius:var(--_nys-fileitem-border-radius);border-width:var(--nys-border-width-sm, 1px);border-style:solid;border-color:var(--_nys-fileitem-border-color);background-color:var(--_nys-fileitem-background-color)}.file-item.error{--_nys-fileitem-border-color: var(--nys-color-danger, #b52c2c)}.file-item__main{display:flex;place-items:center center;gap:var(--_nys-fileinput-gap);padding:var(--_nys-fileitem-padding);height:56px;box-sizing:border-box}.file-item__info{display:flex;flex-direction:column;flex:1;min-width:0;font-family:var(--_nys-fileitem-font-family);font-size:var(--_nys-fileitem-font-size);font-style:normal;font-weight:var(--_nys-fileitem-font-weight);line-height:var(--_nys-fileitem-line-height);letter-spacing:var(--_nys-fileitem-letter-spacing)}.file-item__info-name{display:flex;max-width:100%;overflow:hidden;white-space:nowrap;align-items:center}.file-item__info-name-start{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex-shrink:1;min-width:0}.file-item p{margin:0}.file-item__error{color:var(--nys-color-danger, #b52c2c);text-overflow:ellipsis;font-weight:700}progress{position:absolute;bottom:0;display:flex;width:100%;height:6px;border-radius:var(--nys-radius-round, 1776px);background:var(--_nys-fileitem-background-color--progress--fill);overflow:hidden;appearance:none}progress::-moz-progress-bar{background-color:var(--_nys-fileitem-background-color--progress)}progress::-webkit-progress-value{background-color:var(--_nys-fileitem-background-color--progress--fill)}progress::-webkit-progress-bar{background-color:var(--_nys-fileitem-background-color--progress)}.file-icon[name=progress_activity]{animation:spin 1s linear infinite}.file-icon[name=error]{color:var(--nys-color-danger, #b52c2c)}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}';
var yu = Object.defineProperty, Ts = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && yu(e, t, o), o;
};
const bs = class bs extends D {
  constructor() {
    super(...arguments), this.filename = "", this.status = "pending", this.progress = 0, this.errorMessage = "";
  }
  /**
   * True when this item is actually in an error state. `aria-invalid` reflects
   * this rather than being hardcoded, so a healthy item is never announced as
   * invalid.
   */
  get _isInvalid() {
    return this.status === "error" || !!this.errorMessage;
  }
  /** True only when the error element is rendered, so the IDREF can resolve. */
  get _hasErrorText() {
    return !!this.errorMessage;
  }
  /**
   * Stable id of the element that holds the error text. `aria-errormessage` and
   * `aria-describedby` take an IDREF, so they must point at this — never at the
   * message text itself. Derived from the host id (auto-generated by NysElement)
   * rather than the filename, which is not id-safe and not stable.
   */
  get _errorId() {
    return `${this.id}--error`;
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
    const t = e.lastIndexOf("."), n = t !== -1 ? e.slice(t) : "", o = t !== -1 ? e.slice(0, t) : e, s = o.slice(0, o.length - 3), i = o.slice(-3);
    return { startPart: s, endPart: i, extension: n };
  }
  render() {
    const { startPart: e, endPart: t, extension: n } = this.splitFilename(this.filename);
    return y`
      <div
        class="file-item ${this.status}"
        aria-busy=${this.status === "processing" ? "true" : "false"}
        aria-label="You have selected ${this.filename}"
        aria-invalid=${this._isInvalid ? "true" : "false"}
        aria-errormessage=${v(
      this._hasErrorText ? this._errorId : void 0
    )}
        aria-describedby=${v(
      this._hasErrorText ? this._errorId : void 0
    )}
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
                >${t}${n}</span
              >
            </div>
            ${this.errorMessage ? y`<p
                  class="file-item__error"
                  role="alert"
                  aria-live="assertive"
                  id=${this._errorId}
                >
                  ${this.errorMessage}
                </p>` : null}
          </div>
          <nys-button
            circle
            icon="close"
            label="Remove file: ${this.filename}"
            size="sm"
            variant="ghost"
            @nys-click=${this._handleRemove}
          ></nys-button>
        </div>
        ${this.status === "processing" ? y`<div
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
bs.styles = C(uu), bs.shadowRootOptions = {
  ...I.shadowRootOptions,
  delegatesFocus: !0
};
let Jn = bs;
Ts([
  a({ type: String })
], Jn.prototype, "filename");
Ts([
  a({ type: String })
], Jn.prototype, "status");
Ts([
  a({ type: Number })
], Jn.prototype, "progress");
Ts([
  a({ type: String })
], Jn.prototype, "errorMessage");
customElements.get("nys-fileitem") || customElements.define("nys-fileitem", Jn);
const pu = ':host{--_nys-fileinput-gap: var(--nys-space-100, 8px);--_nys-fileinput-font-size: var(--nys-font-size-ui-md, 16px);--_nys-fileinput-font-weight: var(--nys-font-weight-semibold, 600);--_nys-fileinput-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-fileinput-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-fileinput-background-color--dropzone: var( --nys-color-ink-reverse, #ffffff );--_nys-fileinput-background-color--dropzone--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-fileinput-background-color--dropzone--active: var( --nys-color-theme-faint, #f7fafd );--_nys-fileinput-border-radius--dropzone: var( --nys-radius-lg, var(--nys-space-100, 8px) );--_nys-fileinput-border-style: dashed;--_nys-fileinput-border-color: var(--nys-color-neutral-200, #bec0c1);--_nys-fileinput-border-width: var(--nys-border-width-sm, 1px)}.nys-fileinput{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:var(--_nys-fileinput-gap);font-family:var(--_nys-fileinput-font-family);font-size:var(--_nys-fileinput-font-size);font-weight:var(--_nys-fileinput-font-weight);line-height:var(--_nys-fileinput-line-height)}:host([width=lg]) .nys-fileinput{max-width:var(--nys-form-width-lg, 384px)}ul{list-style-type:none;padding:0;margin:0;width:100%;display:flex;flex-direction:column;gap:var(--_nys-fileinput-gap)}.nys-fileinput__dropzone{display:flex;padding:var(--nys-space-400, 32px) var(--nys-space-200, 16px);justify-content:center;align-items:center;gap:12px;align-self:stretch;border-radius:var(--_nys-fileinput-border-radius--dropzone);outline:var(--_nys-fileinput-border-width) var(--_nys-fileinput-border-style) var(--_nys-fileinput-border-color);background-color:var(--_nys-fileinput-background-color--dropzone);transition:all 60ms ease-in-out}.nys-fileinput__dropzone:hover{cursor:pointer;--_nys-fileinput-border-width: var(--nys-border-width-md, 2px);--_nys-fileinput-border-color: var(--nys-color-neutral-700, #4a4d4f)}.nys-fileinput__dropzone.drag-active{--_nys-fileinput-border-width: var(--nys-border-width-md, 2px);--_nys-fileinput-border-color: var(--nys-color-theme, #154973);--_nys-fileinput-border-style: solid}.nys-fileinput__dropzone.error{--_nys-fileinput-border-color: var(--nys-color-danger, #b52c2c)}.nys-fileinput__dropzone.error:hover{--_nys-fileinput-border-width: var(--nys-border-width-md, 2px);--_nys-fileinput-border-color: var(--nys-color-emergency, #721c1c)}.nys-fileinput__dropzone.disabled{cursor:not-allowed;--_nys-fileinput-border-color: var(--nys-color-neutral-300, #a7a9ab);--_nys-fileinput-border-width: var(--nys-border-width-sm, 1px);background-color:var(--_nys-fileinput-background-color--dropzone--disabled);color:var(--_nys-fileinput-color--dropzone--disabled)}progress{display:flex;width:100%;height:6px;border-radius:var(--nys-radius-round, 1776px);background-color:var(--_nys-fileinput-progress-background);overflow:hidden;appearance:none;border:none}progress::-moz-progress-bar{background-color:var(--_nys-fileinput-progress-background)}progress::-webkit-progress-value{background-color:var(--_nys-fileinput-progress-background)}progress::-webkit-progress-bar{background-color:var(--_nys-fileinput-progress-background)}';
var fu = Object.defineProperty, bu = Object.getOwnPropertyDescriptor, $e = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? bu(e, t) : e, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = (n ? i(e, t, o) : i(o)) || o);
  return n && o && fu(e, t, o), o;
};
const vs = class vs extends pt {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this.label = "", this.description = "", this.multiple = !1, this.form = null, this.tooltip = "", this.accept = "", this.disabled = !1, this.required = !1, this.optional = !1, this.showError = !1, this.errorMessage = "", this.dropzone = !1, this.width = "full", this.inverted = !1, this._selectedFiles = [], this._dragActive = !1;
  }
  get files() {
    return this._selectedFiles.map((e) => e.file);
  }
  set files(e) {
    this._selectedFiles = [];
    const t = this.renderRoot?.querySelector(
      ".hidden-file-input"
    );
    t && (t.value = ""), (e ?? []).forEach((n) => this._saveSelectedFiles(n)), this._setValue(), this._validate(), this.requestUpdate();
  }
  get value() {
    return this._selectedFiles[0]?.file ?? null;
  }
  set value(e) {
    this.files = e ? [e] : [];
  }
  /**
   * Programmatically set the selection and await async validation/processing.
   * Same as assigning `files`, but resolves once every file has finished its
   * magic-byte validation and read — use when you need to read `checkValidity()`
   * or the settled selection immediately after.
   */
  async setFiles(e) {
    this._selectedFiles = [];
    const t = this.renderRoot?.querySelector(
      ".hidden-file-input"
    );
    t && (t.value = "");
    for (const n of e ?? [])
      await this._saveSelectedFiles(n);
    this._setValue(), this._validate(), this.requestUpdate();
  }
  get _isDropDisabled() {
    return this.disabled || !this.multiple && this._selectedFiles.length > 0;
  }
  get _innerNysButton() {
    return this.renderRoot.querySelector(
      '[name="file-btn"]'
    )?.shadowRoot?.querySelector(
      "button"
    );
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   * Form association, ElementInternals, and id generation are provided by
   * NysFormControlElement (@nysds/internals).
   */
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this._setValue();
  }
  updated() {
    this._syncControlErrorAssociation();
  }
  /**
   * Point the exposed control at the rendered <nys-errormessage> and, in
   * dropzone mode, at the "or drag here" instructional text.
   *
   * The native <input type="file"> is `hidden`, `aria-hidden` and `tabindex="-1"`,
   * so it is not in the accessibility tree and must not carry these
   * associations. The element a user actually reaches is the <button> inside the
   * "Choose file" <nys-button>'s shadow root — that's also the keyboard path for
   * the dropzone (Enter/Space opens the native file picker via real button
   * semantics); the dropzone `<div>` itself is a non-interactive, pointer-only
   * drop target and never receives focus.
   *
   * The button and these targets sit in different shadow roots, so an IDREF
   * written on the button would dangle. ARIA element reflection does cross into a
   * shadow-including ancestor tree, so associateControlRefs sets the control's own
   * ariaDescribedByElements (plus an aria-description string fallback for engines
   * that expose the IDL but do not yet honor it). aria-describedby — not
   * aria-errormessage — is what Blink actually surfaces for a control inside a
   * shadow root; see src/scripts/verify-a11y-names.mjs. aria-errormessage is set
   * through its element-reflection form where the engine supports it.
   */
  async _syncControlErrorAssociation() {
    const e = this.renderRoot?.querySelector('[name="file-btn"]');
    if (!e) return;
    customElements.get("nys-button") || await customElements.whenDefined("nys-button"), await e.updateComplete;
    const t = this._innerNysButton;
    if (!t) return;
    const n = this.showError ? this.renderRoot?.querySelector(
      "nys-errormessage"
    ) : null, o = this.dropzone && !this._dragActive ? this.renderRoot?.querySelector(
      ".nys-fileinput__dropzone-hint"
    ) : null;
    t.setAttribute("aria-invalid", n ? "true" : "false"), fr(t, "describedby", [o, n]);
    const s = this.internals?.validationMessage || this.errorMessage, i = [
      o?.textContent?.trim() || void 0,
      n && s ? s : void 0
    ].filter((p) => !!p);
    i.length ? t.setAttribute("aria-description", i.join(" ")) : t.removeAttribute("aria-description");
    const d = t;
    "ariaErrorMessageElements" in t && (d.ariaErrorMessageElements = n ? [n] : null);
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
        e.forEach((n) => {
          t.append(this.name, n);
        }), this.setFormValue(t);
      } else
        this.setFormValue(null);
    } else {
      const e = this._selectedFiles[0]?.file || null;
      this.setFormValue(e);
    }
    this._manageRequire();
  }
  // Called to internally set the initial internalElement required flag.
  _manageRequire() {
    const e = this.shadowRoot?.querySelector("input");
    if (!e) return;
    const t = this.errorMessage || "Please upload a file.";
    this.required && this._selectedFiles.length == 0 ? this.setValidityFromState({ valueMissing: !0 }, t, e) : this.clearValidity();
  }
  _setValidityMessage(e = "") {
    const t = this.shadowRoot?.querySelector("input");
    t && (this.showError = e === (this.errorMessage || "Please upload a file."), this.errorMessage?.trim() && e !== "" && (e = this.errorMessage), e ? this.setValidityFromState({ customError: !0 }, e, t) : this.clearValidity());
  }
  _validate() {
    const e = this._selectedFiles.some(
      (o) => o.status === "error"
    ), t = this.required && this._selectedFiles.length === 0;
    let n = "";
    t ? n = this.errorMessage || "Please upload a file." : e && (n = "One or more files are invalid."), this._setValidityMessage(n);
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
    e && (e.value = ""), this.setFormValue(null), this.showError = !1, this.errorMessage = "", this.clearValidity(), this.requestUpdate();
  }
  _handleInvalid(e) {
    e.preventDefault(), this._validate();
    const t = this._innerNysButton;
    if (t) {
      const n = this.internals?.form;
      n ? Array.from(n.elements).find(
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
    const n = {
      file: e,
      progress: 0,
      status: "pending"
    };
    return this._selectedFiles.push(n), await this._processFile(n), this._setValue(), this._validate(), n;
  }
  // Read the contents of stored files, this will indicate loading progress of the uploaded files
  async _processFile(e) {
    e.status = "processing";
    try {
      if (!await hu(e.file, this.accept)) {
        e.status = "error", e.errorMsg = "File type is invalid.", this.requestUpdate();
        return;
      }
      const n = new FileReader();
      n.onprogress = (o) => {
        if (o.lengthComputable) {
          const s = Math.round(o.loaded * 100 / o.total);
          e.progress = s, this.requestUpdate();
        }
      }, n.onload = () => {
        e.progress = 100, e.status = "done", this.requestUpdate();
      }, n.onerror = () => {
        e.status = "error", e.errorMsg = "Failed to load file.", this.requestUpdate();
      }, n.readAsArrayBuffer(e.file);
    } catch {
      e.status = "error", e.errorMsg = "Error validating file.", this.requestUpdate();
    }
  }
  // Fire nys-blur only when focus leaves the whole component, not when it
  // moves between internal controls (the button, remove buttons, etc.).
  // Uses focusout (bubbles) since blur does not.
  _handleBlur(e) {
    const t = e.relatedTarget;
    t && this.renderRoot.contains(t) || (this._validate(), this.dispatchEvent(
      new Event("nys-blur", { bubbles: !0, composed: !0 })
    ));
  }
  _dispatchChangeEvent(e) {
    this.dispatchEvent(
      new CustomEvent("nys-change", {
        detail: {
          id: this.id,
          files: this._selectedFiles,
          changedFiles: e
        },
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
  async _handleFileChange(e) {
    const n = e.target.files, o = n ? Array.from(n) : [], s = await this._addFiles(o);
    this.requestUpdate(), s.length && this._dispatchChangeEvent(s), this._handlePostFileSelectionFocus();
  }
  _handleFileRemove(e) {
    const t = e.detail.filename, n = this._selectedFiles.find(
      (o) => o.file.name === t
    );
    if (this._selectedFiles = this._selectedFiles.filter(
      (o) => o.file.name !== t
    ), this._selectedFiles.length === 0) {
      const o = this.shadowRoot?.querySelector(
        "input"
      );
      o && (o.value = "");
    }
    this._setValue(), this._validate(), this.requestUpdate(), n && this._dispatchChangeEvent([n]);
  }
  _onDragOver(e) {
    this.disabled || (e.stopPropagation(), e.preventDefault(), this._dragActive || (this._dragActive = !0, this.requestUpdate()));
  }
  // Mostly used for styling purpose
  _onDragLeave(e) {
    this.disabled || (e.stopPropagation(), e.preventDefault(), e.currentTarget === e.target && (this._dragActive = !1, this.requestUpdate()));
  }
  async _onDrop(e) {
    if (this.disabled) return;
    e.preventDefault(), this._dragActive = !1, this.requestUpdate();
    const t = e.dataTransfer?.files;
    if (!t) return;
    const n = Array.from(t), o = this.multiple ? n : [n[0]], s = await this._addFiles(o);
    this.requestUpdate(), s.length && this._dispatchChangeEvent(s);
  }
  async _addFiles(e) {
    return (await Promise.all(
      e.map((n) => this._saveSelectedFiles(n))
    )).filter(
      (n) => n !== void 0
    );
  }
  render() {
    return y`<div
      class="nys-fileinput"
      @nys-fileRemove=${this._handleFileRemove}
      @focusout=${this._handleBlur}
    >
      <nys-label
        id="${this.id}--label"
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
        id=${this.id + "--native"}
        class="hidden-file-input"
        tabindex="-1"
        type="file"
        name=${this.name}
        accept=${this.accept}
        form=${v(this.form || void 0)}
        ?multiple=${this.multiple}
        ?required=${this.required}
        ?disabled=${this.disabled || !this.multiple && this._selectedFiles.length > 0}
        aria-labelledby=${v(
      this.label ? this.id + "--label" : void 0
    )}
        aria-label=${v(
      !this.label && this.ariaLabel ? this.ariaLabel : void 0
    )}
        aria-disabled="${this.disabled}"
        aria-hidden="true"
        @change=${this._handleFileChange}
        hidden
      />

      ${this.dropzone ? y`<div
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
          >
            ${this._dragActive ? y`<p>Drop file to upload</p>` : y` <nys-button
                    id="choose-files-btn-drag"
                    name="file-btn"
                    label=${this.multiple ? "Choose files" : "Choose file"}
                    variant="outline"
                    ?disabled=${this._isDropDisabled}
                    @nys-click="${(e) => {
      e.preventDefault(), e.stopPropagation(), this._openFileDialog();
    }}"
                  ></nys-button>
                  <p
                    id="${this.id}--dropzone-hint"
                    class="nys-fileinput__dropzone-hint"
                  >
                    or drag here
                  </p>`}
          </div>` : y`<nys-button
            id="choose-files-btn"
            name="file-btn"
            label=${this.multiple ? "Choose files" : "Choose file"}
            variant="outline"
            ?disabled=${this.disabled || !this.multiple && this._selectedFiles.length > 0}
            @nys-click=${this._openFileDialog}
          ></nys-button>`}
      ${this.showError ? y`
            <nys-errormessage
              id=${this.id + "--error"}
              ?showError=${this.showError}
              errorMessage=${this.internals?.validationMessage || this.errorMessage}
            ></nys-errormessage>
          ` : null}
      ${this._selectedFiles.length > 0 ? y`
            <ul>
              ${this._selectedFiles.map(
      (e) => y`<li>
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
vs.styles = C(pu), vs.shadowRootOptions = {
  ...I.shadowRootOptions,
  delegatesFocus: !0
};
let ae = vs;
$e([
  a({ type: String, reflect: !0 })
], ae.prototype, "id", 2);
$e([
  a({ type: String, reflect: !0 })
], ae.prototype, "name", 2);
$e([
  a({ type: String })
], ae.prototype, "label", 2);
$e([
  a({ type: String })
], ae.prototype, "description", 2);
$e([
  a({ type: Boolean })
], ae.prototype, "multiple", 2);
$e([
  a({ type: String, reflect: !0 })
], ae.prototype, "form", 2);
$e([
  a({ type: String })
], ae.prototype, "tooltip", 2);
$e([
  a({ type: String })
], ae.prototype, "accept", 2);
$e([
  a({ type: Boolean, reflect: !0 })
], ae.prototype, "disabled", 2);
$e([
  a({ type: Boolean, reflect: !0 })
], ae.prototype, "required", 2);
$e([
  a({ type: Boolean, reflect: !0 })
], ae.prototype, "optional", 2);
$e([
  a({ type: Boolean, reflect: !0 })
], ae.prototype, "showError", 2);
$e([
  a({ type: String })
], ae.prototype, "errorMessage", 2);
$e([
  a({ type: Boolean })
], ae.prototype, "dropzone", 2);
$e([
  a({ type: String, reflect: !0 })
], ae.prototype, "width", 2);
$e([
  a({ type: Boolean, reflect: !0 })
], ae.prototype, "inverted", 2);
$e([
  a({ attribute: !1 })
], ae.prototype, "files", 1);
$e([
  a({ attribute: !1 })
], ae.prototype, "value", 1);
customElements.get("nys-fileinput") || customElements.define("nys-fileinput", ae);
const vu = `<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
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
</svg>`, _u = ':host{--_nys-globalheader-color: var( --nys-color-text-reverse, var(--nys-color-white, #ffffff) );--_nys-globalheader-link-color: var( --nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff) );--_nys-globalheader-background-color: var( --nys-color-theme, var(--nys-color-state-blue-700, #154973) );--_nys-globalheader-gap: var(--nys-space-150, 12px);--_nys-globalheader-padding--gutter: var(--nys-space-250, 20px) var(--nys-space-250, 20px) var(--nys-space-200, 16px);--_nys-globalheader-font-family--menu: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-globalheader-line-height: normal;--_nys-globalheader-letter-spacing: normal;--_nys-globalheader-font-weight: var(--nys-font-weight-semibold, 600);--_nys-globalheader-max-width--content: var( --nys-max-width--content, var(--nys-globalheader-max-width--content, 1280px) );--_nys-globalheader-gap--text: var(--nys-space-100, 8px);--_nys-globalheader-font-size--heading: var( --nys-font-size-agency-xl, var(--nys-font-size-2xl, 22px) );--_nys-globalheader-font-size--subheading: var( --nys-font-size-agency-md, var(--nys-font-size-md, 16px) );--_nys-globalheader-font-family--headings: var( --nys-font-family-agency, "D Sari", Arial, sans-serif );--_nys-globalheader-line-height--menu: var(--nys-font-lineheight-ui-md, 24px);--_nys-globalheader-letter-spacing--menu: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) );--_nys-globalheader-text-decoration-thickness--menu: var(--nys-size-2px, 2px);--_nys-globalheader-link-padding: var(--nys-space-300, 24px) var(--nys-space-200, 16px);--_nys-globalheader-font-size--menu-btn: var(--nys-font-size-ui-xs, 12px);--_nys-globalheader-line-height--menu-btn: var( --nys-font-lineheight-ui-xs, 20px );--_nys-globalheader-letter-spacing--menu-btn: var( --nys-font-letterspacing-ui-xs, .057px );--_nys-globalheader-border-color--menu: var(--nys-color-theme-mid, #457aa5);--_nys-globalheader-background-color--menu--hover: var( --nys-color-theme-strong, #0e324f );--_nys-globalheader-background-color--menu--active: var( --nys-color-theme-stronger, #081b2b )}ul{list-style-type:none;padding:0;margin:0}li{display:block;margin:0;padding:0;box-sizing:border-box}a{color:var(--_nys-globalheader-color);text-decoration:none;font-family:var(--_nys-globalheader-font-family--menu);font-style:normal;font-weight:400;line-height:var(--_nys-globalheader-line-height--menu);letter-spacing:var(--_nys-globalheader-letter-spacing--menu)}::slotted([slot=user-actions]){display:flex;align-items:center;margin-inline-start:auto;--_nys-button-outline-color: var( --nys-color-ink-reverse, var(--nys-color-white, #ffffff) )}.nys-globalheader{display:flex;padding:var(--_nys-globalheader-padding--gutter);background-color:var(--_nys-globalheader-background-color);color:var(--_nys-globalheader-color);width:100%;min-height:76px;box-sizing:border-box}a#nys-globalheader__logolink{outline-offset:var(--nys-space-2px, 2px);outline-color:var(--nys-color-ink-reverse, #ffffff);margin:auto 0}.nys-globalheader__logo svg{vertical-align:top;width:auto}.nys-globalheader__main-container{display:flex;margin:auto;gap:var(--_nys-globalheader-gap);max-width:var(--_nys-globalheader-max-width--content);width:100%}@media(min-width:1024px){.nys-globalheader__main-container{align-items:center}}.nys-globalheader__name-container{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:var(--_nys-globalheader-gap--text)}.nys-globalheader__name{margin:0;color:var(--_nys-globalheader-color);font-family:var(--_nys-globalheader-font-family--headings);font-size:var(--_nys-globalheader-font-size--heading);font-style:normal;font-weight:var(--_nys-globalheader-font-weight);line-height:var(--_nys-globalheader-line-height);letter-spacing:var(--_nys-globalheader-letter-spacing);overflow-wrap:break-word}.nys-globalheader__agencyName{font-size:var(--_nys-globalheader-font-size--subheading)}.nys-globalheader__agencyName.main{font-size:var(--_nys-globalheader-font-size--heading)}.nys-globalheader__content{display:none;font-family:var(--_nys-globalheader-font-family--menu)}.nys-globalheader__content ul{display:flex;flex-flow:column wrap;align-items:center}.nys-globalheader__content ul a:hover{text-decoration:underline;text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:7%;text-underline-offset:auto;text-underline-position:from-font}.nys-globalheader__content ul a:active{text-decoration-thickness:var(--_nys-globalheader-text-decoration-thickness--menu)}.nys-globalheader__content li.active a,.nys-globalheader__content-mobile li.active a{font-weight:700}.nys-globalheader__content li.active{border-bottom:8px solid var(--nys-color-theme-weak, #cddde9)}.nys-globalheader__content li.active a{margin-bottom:calc(-1 * var(--nys-space-100, 8px))}.nys-globalheader__content-mobile li.active a{border-left:8px solid var(--nys-color-theme-weak, #cddde9);border-bottom:1px solid var(--_nys-globalheader-border-color--menu)}.nys-globalheader__content ul li.active a:hover{text-decoration:none}.nys-globalheader__content-mobile{position:absolute;z-index:10;display:flex;flex-direction:column;justify-content:center;background-color:var(--_nys-globalheader-background-color);width:fit-content}.nys-globalheader__content-mobile.close{display:none}.nys-globalheader__content-mobile ul{display:flex;flex-direction:column}.nys-globalheader__content-mobile ul li:first-child a{border-top:1px solid var(--_nys-globalheader-color)}.nys-globalheader__content-mobile ul li a{display:flex;padding:24px;align-items:center;gap:8px;align-self:stretch;border-bottom:1px solid var(--_nys-globalheader-border-color--menu);background-color:var(--_nys-globalheader-background-color)}.nys-globalheader__content-mobile ul li a:hover{background-color:var(--_nys-globalheader-background-color--menu--hover)}.nys-globalheader__content-mobile ul li a:active{background-color:var(--_nys-globalheader-background-color--menu--active)}.nys-globalheader__name-container-link{display:flex;flex-direction:column;justify-content:center}.nys-globalheader__button-container{display:flex;justify-content:center;align-items:center}.nys-globalheader__mobile-menu-button{flex-direction:column;gap:3px;width:50px;height:50px;background-color:var(--_nys-globalheader-background-color);border:none;cursor:pointer;display:flex;justify-content:center;align-items:center;padding:0;color:var(--_nys-globalheader-color)}.nys-globalheader__mobile-menu-button-text{font-size:var(--_nys-globalheader-font-size--menu-btn);line-height:var(--_nys-globalheader-line-height--menu-btn);letter-spacing:var(--_nys-globalheader-letter-spacing--menu-btn)}@media(min-width:768px){:host{--_nys-globalheader-padding--gutter: var(--nys-space-250, 20px) var(--nys-size-400, 32px) var(--nys-size-200, 16px)}}@media(min-width:1024px){.nys-globalheader__content{display:flex}.nys-globalheader__content ul{flex-direction:row}.nys-globalheader__content-mobile,.nys-globalheader__button-container{display:none}li{display:flex;align-items:center;padding:var(--_nys-globalheader-link-padding)}:host{--_nys-globalheader-gap: var(--nys-space-500, 40px);--_nys-globalheader-padding--gutter: var(--nys-space-50, 4px) var(--nys-size-400, 32px) 0}}@media(min-width:1280px){:host{--_nys-globalheader-padding--gutter: var(--nys-space-50, 4px) var(--nys-space-800, 64px) 0}}';
var gu = Object.defineProperty, An = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && gu(e, t, o), o;
};
const ql = "[aria-current]:not([aria-current='false'])", qa = (r) => r.matches(ql), mu = [
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex^="-"])'
].join(", "), xu = ".nys-globalheader__mobile-menu-button", wu = "(min-width: 1024px)", ku = "Site", Cu = (r) => r.getClientRects().length > 0, Pi = class Pi extends D {
  constructor() {
    super(...arguments), this.id = "", this.appName = "", this.agencyName = "", this.homepageLink = "", this.nysLogo = !1, this.landmarkLabel = "", this._isMobileMenuOpen = !1, this._hasLinkContent = !1, this._authorSetsCurrent = !1, this._desktopMedia = window.matchMedia(wu), this._boundClickOutside = (e) => {
      if (!this._isMobileMenuOpen) return;
      e.composedPath().includes(this) || this._closeMobileMenu();
    }, this._boundBreakpointChange = (e) => {
      e.matches && this._closeMobileMenu();
    }, this._boundKeyDown = (e) => {
      if (this._isMobileMenuOpen) {
        if (e.key === "Escape") {
          e.preventDefault(), this._closeMobileMenu(!0);
          return;
        }
        e.key === "Tab" && this._trapMobileMenuFocus(e);
      }
    };
  }
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback(), document.addEventListener("click", this._boundClickOutside), document.addEventListener("keydown", this._boundKeyDown), this._desktopMedia.addEventListener("change", this._boundBreakpointChange);
  }
  firstUpdated() {
    this.shadowRoot?.querySelector("slot")?.addEventListener("slotchange", () => this._handleListSlotChange()), this._handleListSlotChange(), this._listenLinkClicks();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), document.removeEventListener("click", this._boundClickOutside), document.removeEventListener("keydown", this._boundKeyDown), this._desktopMedia.removeEventListener(
      "change",
      this._boundBreakpointChange
    );
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _highlightActiveLink(e) {
    const t = Array.from(e.querySelectorAll("a"));
    if (this._authorSetsCurrent) {
      t.forEach((s) => {
        s.closest("li")?.classList.toggle("active", qa(s));
      });
      return;
    }
    const n = window.location.pathname.replace(/\/+$/, "") || "/";
    let o = {
      li: null,
      length: 0
    };
    t.forEach((s) => {
      const i = this._normalizePath(s.getAttribute("href"));
      i && (i === "/" && n === "/" ? o = { li: s.closest("li"), length: 1 } : n.startsWith(i) && i.length > o.length && (o = {
        li: s.closest("li"),
        length: i.length
      }));
    }), t.forEach((s) => {
      s.closest("li")?.classList.remove("active"), s.removeAttribute("aria-current");
    }), o.li?.classList.add("active"), o.li?.querySelector("a")?.setAttribute("aria-current", "page");
  }
  // Gets called when the slot content changes and directly appends the slotted elements into the shadow DOM
  async _handleListSlotChange() {
    const e = this.shadowRoot?.querySelector(
      'slot:not([name="user-actions"])'
    );
    if (!e) return;
    const t = e.assignedNodes({ flatten: !0 }).filter((o) => o.nodeType === Node.ELEMENT_NODE);
    this._authorSetsCurrent = t.some(
      (o) => qa(o) || !!o.querySelector(ql)
    );
    const n = [
      this.shadowRoot?.querySelector(".nys-globalheader__content"),
      this.shadowRoot?.querySelector(".nys-globalheader__content-mobile")
    ];
    if (!n.some((o) => !o)) {
      for (const o of n)
        o.innerHTML = "", t.forEach((s) => {
          o.appendChild(s.cloneNode(!0));
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
  /** The toggle, which is both the trap's first stop and where focus returns. */
  get _menuButton() {
    return this.shadowRoot?.querySelector(xu) ?? null;
  }
  get _mobileNav() {
    return this.shadowRoot?.querySelector(
      ".nys-globalheader__content-mobile"
    ) ?? null;
  }
  /**
   * Closes the mobile menu.
   *
   * `restoreFocus` moves focus back to the toggle, which is required whenever the
   * menu is dismissed by keyboard: the closed menu is `display: none`, so focus
   * sitting on one of its links would otherwise be dropped to the top of the
   * document (WCAG 2.4.3 Focus Order). A click outside is a pointer gesture that
   * lands somewhere the user chose, so that path leaves focus alone.
   */
  _closeMobileMenu(e = !1) {
    this._isMobileMenuOpen && (this._isMobileMenuOpen = !1, e && this.updateComplete.then(() => this._menuButton?.focus()));
  }
  /**
   * Toggle first, then the menu's own links — the tab order a sighted keyboard
   * user sees, so the trap cycles in the order the menu reads.
   */
  _focusableMenuElements() {
    const e = this._mobileNav, t = e ? Array.from(e.querySelectorAll(mu)) : [];
    return [this._menuButton, ...t].filter(
      (n) => !!n && Cu(n)
    );
  }
  /**
   * The focused element, but only when it is one of the menu's own stops.
   *
   * `document.activeElement` reports the host for anything focused inside this
   * shadow root, so the shadow root's own `activeElement` is what identifies the
   * real stop.
   */
  _activeMenuElement(e) {
    const t = this.shadowRoot?.activeElement;
    return t && e.includes(t) ? t : null;
  }
  /**
   * Keeps Tab / Shift+Tab inside the open mobile menu (#1101).
   *
   * The open menu covers the page, so tabbing out of it silently moves focus to
   * content the user cannot see (WCAG 2.4.3, 2.1.2). Wrapping at both ends keeps
   * every stop reachable, and Escape (handled alongside this) is the documented
   * way out.
   */
  _trapMobileMenuFocus(e) {
    const t = this._focusableMenuElements();
    if (t.length === 0) return;
    const n = t[0], o = t[t.length - 1], s = this._activeMenuElement(t);
    if (!s) {
      e.preventDefault(), (e.shiftKey ? o : n).focus();
      return;
    }
    e.shiftKey && s === n ? (e.preventDefault(), o.focus()) : !e.shiftKey && s === o && (e.preventDefault(), n.focus());
  }
  // Listens for click events on links to mark them active
  _listenLinkClicks() {
    this.shadowRoot?.querySelectorAll(
      ".nys-globalheader__content, .nys-globalheader__content-mobile"
    )?.forEach((t) => {
      t?.addEventListener("click", (n) => {
        const s = n.target.closest("a");
        if (!s || this._authorSetsCurrent) return;
        t.querySelectorAll("li.active").forEach((d) => {
          d.classList.remove("active"), d.querySelector("a")?.removeAttribute("aria-current");
        });
        const i = s.closest("li");
        i && (i.classList.add("active"), s.setAttribute("aria-current", "page"));
      });
    });
  }
  /**
   * Id of the element that names the banner landmark, or undefined when this
   * header carries no title to point at.
   *
   * The documented pairing puts this header below `nys-unavheader`, which leaves a
   * page with two `banner` landmarks. Naming each one keeps landmark navigation
   * useful instead of announcing "banner, banner" (axe `landmark-unique`). The name
   * references the visible title rather than repeating it in an `aria-label`, so it
   * cannot drift out of sync and is translated along with the rest of the page.
   */
  get _bannerLabelledBy() {
    if (!this._landmarkLabelOverride) {
      if (this.appName?.trim()) return `${this.id}-appname`;
      if (this.agencyName?.trim()) return `${this.id}-agencyname`;
    }
  }
  /** The author's landmark name, or undefined when they gave none. */
  get _landmarkLabelOverride() {
    return this.landmarkLabel?.trim() || void 0;
  }
  /**
   * Literal name for the banner: the author's override, or the "Site" default when
   * there is no visible title to reference. Undefined whenever `_bannerLabelledBy`
   * has something to point at, so the landmark never carries both.
   */
  get _bannerLabel() {
    return this._landmarkLabelOverride ? this._landmarkLabelOverride : this._bannerLabelledBy ? void 0 : ku;
  }
  /**
   * App/agency title block. Rendered on its own so the linked and unlinked
   * variants cannot drift apart — the ids here are what names the banner.
   */
  _renderNameContainer() {
    return y`
      <div class="nys-globalheader__name-container">
        ${this.appName?.trim().length > 0 ? y`<div
              id="${this.id}-appname"
              class="nys-globalheader__appName nys-globalheader__name"
            >
              ${this.appName}
            </div> ` : ""}
        ${this.agencyName?.trim().length > 0 ? y`<div
              id="${this.id}-agencyname"
              class="nys-globalheader__agencyName nys-globalheader__name ${this.appName?.trim().length > 0 ? "" : "main"}"
            >
              ${this.agencyName}
            </div> ` : ""}
      </div>
    `;
  }
  _renderBrandMark() {
    return this.nysLogo ? y`${this._getNysLogo()}` : "";
  }
  _getNysLogo() {
    const n = new DOMParser().parseFromString(vu, "image/svg+xml").documentElement;
    return n.id = "nys-unavheader__logo", n;
  }
  render() {
    return y`
      <header
        class="nys-globalheader"
        aria-labelledby=${v(this._bannerLabelledBy)}
        aria-label=${v(this._bannerLabel)}
      >
        <div class="nys-globalheader__main-container">
          ${this._hasLinkContent ? y` <div class="nys-globalheader__button-container">
                <button
                  type="button"
                  class="nys-globalheader__mobile-menu-button"
                  aria-expanded="${this._isMobileMenuOpen}"
                  aria-controls="${this.id}-mobile-nav"
                  @click="${this._toggleMobileMenu}"
                >
                  <nys-icon
                    name="${this._isMobileMenuOpen ? "close" : "menu"}"
                    size="32"
                    aria-hidden="true"
                  ></nys-icon>
                  <span class="nys-globalheader__mobile-menu-button-text"
                    >${this._isMobileMenuOpen ? "CLOSE" : "MENU"}</span
                  >
                </button>
              </div>` : ""}
          ${this._renderBrandMark()}
          ${this.homepageLink?.trim() ? y`<a
                class="nys-globalheader__name-container-link"
                href=${this.homepageLink?.trim()}
              >
                ${this._renderNameContainer()}
              </a>` : this._renderNameContainer()}
          <nav
            class="nys-globalheader__content"
            aria-label="Primary"
            ?hidden="${!this._hasLinkContent}"
          ></nav>
          <slot
            style="display: none;"
            @slotchange="${this._handleListSlotChange}"
          ></slot>
          <slot name="user-actions"></slot>
        </div>
      </header>
      <nav
        id="${this.id}-mobile-nav"
        class="nys-globalheader__content-mobile ${this._isMobileMenuOpen ? "" : "close"}"
        aria-label="Primary mobile"
        ?hidden="${!this._hasLinkContent}"
      ></nav>
    `;
  }
};
Pi.styles = C(_u);
let Et = Pi;
An([
  a({ type: String, reflect: !0 })
], Et.prototype, "id");
An([
  a({ type: String })
], Et.prototype, "appName");
An([
  a({ type: String })
], Et.prototype, "agencyName");
An([
  a({ type: String })
], Et.prototype, "homepageLink");
An([
  a({ type: Boolean })
], Et.prototype, "nysLogo");
An([
  a({ type: String })
], Et.prototype, "landmarkLabel");
An([
  $()
], Et.prototype, "_isMobileMenuOpen");
An([
  $()
], Et.prototype, "_hasLinkContent");
customElements.get("nys-globalheader") || customElements.define("nys-globalheader", Et);
/*!
   * █▄  █  █   █  █▀▀▀█  █▀▀▄  █▀▀▀█
   * █ █ █  █▄▄▄█  ▀▀▀▄▄  █   █ ▀▀▀▄▄
   * █  ▀█    █    █▄▄▄█  █▄▄▀  █▄▄▄█
   *
   * Divider Component v1.21.0
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
var $u = 0;
function Su(r) {
  return `${r}-${Date.now()}-${$u++}`;
}
var Eu = (r) => {
  class e extends r {
    get idPrefix() {
      return this.localName || "nys-element";
    }
    ensureId() {
      this.id || (this.id = Su(this.idPrefix));
    }
    connectedCallback() {
      super.connectedCallback(), this.ensureId();
    }
  }
  return e;
}, Au = (r) => {
  class e extends Eu(r) {
    constructor(...n) {
      super(...n), this.__internals = null;
    }
    get internals() {
      if (this.__internals) return this.__internals;
      if (typeof this.attachInternals == "function") try {
        this.__internals = this.attachInternals();
      } catch {
        this.__internals = null;
      }
      return this.__internals;
    }
    get defaultRole() {
      return null;
    }
    setHostAria(n, o) {
      const s = this.internals;
      if (s && n in s) {
        s[n] = o;
        return;
      }
      const i = Lu(n);
      o === null ? this.removeAttribute(i) : this.setAttribute(i, o);
    }
    reflectDefaultSemantics() {
      const n = this.defaultRole;
      n && this.setHostAria("role", n);
    }
    connectedCallback() {
      super.connectedCallback(), this.reflectDefaultSemantics();
    }
  }
  return e;
};
function Lu(r) {
  if (r === "role") return "role";
  const e = r.replace(/^aria/, "");
  return "aria-" + e.charAt(0).toLowerCase() + e.slice(1);
}
var Tu = /* @__PURE__ */ Au(I), Du = ":host{--_nys-divider-size:var(--nys-size-1px,1px);--_nys-divider-color:var(--nys-color-neutral-500,#797c7f);--_nys-divider-width:100%}:host([inverted]){--_nys-divider-color:var(--nys-color-ink-reverse,#fff)}:host([subtle]){--_nys-divider-color:var(--nys-color-neutral-100,#e4e5e6)}.nys-divider{width:var(--_nys-divider-width);height:var(--_nys-divider-size);background-color:var(--_nys-divider-color);border:none;flex:1 0 0;margin:0}";
function Hl(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(r, e);
}
function Vl(r, e, t, n) {
  var o = arguments.length, s = o < 3 ? e : n, i;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(r, e, t, n);
  else for (var d = r.length - 1; d >= 0; d--) (i = r[d]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, t, s) : i(e, t)) || s);
  return o > 3 && s && Object.defineProperty(e, t, s), s;
}
var zo, Ci = (zo = class extends Tu {
  constructor(...e) {
    super(...e), this.inverted = !1, this.subtle = !1;
  }
  get defaultRole() {
    return "separator";
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    return y`<hr
      class="nys-divider"
      role="presentation"
      aria-hidden="true"
    />`;
  }
}, zo.styles = C(Du), zo);
Vl([a({
  type: Boolean,
  reflect: !0
}), Hl("design:type", Object)], Ci.prototype, "inverted", void 0);
Vl([a({
  type: Boolean,
  reflect: !0
}), Hl("design:type", Object)], Ci.prototype, "subtle", void 0);
customElements.get("nys-divider") || customElements.define("nys-divider", Ci);
const zu = ':host{--_nys-globalfooter-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-globalfooter-background-color: var( --nys-color-theme-weaker, var(--nys-color-state-blue-50, #eff6fb) );--_nys-globalfooter-gap: var(--nys-space-300, 24px);--_nys-globalfooter-gap--heading-container: var(--nys-space-150, 12px);--_nys-globalfooter-padding--y: var(--nys-space-400, 32px);--_nys-globalfooter-padding--gutter: var(--nys-gutter-sm, 20px);--_nys-globalfooter-font-size--agency: var( --nys-font-size-agency-xl, var(--nys-font-size-2xl, 22px) );--_nys-globalfooter-font-size--link: var( --nys-font-size-body-md, var(--nys-font-size-md, 16px) );--_nys-globalfooter-line-height--agency: normal;--_nys-globalfooter-font-weight--regular: var(--nys-font-weight-regular, 400);--_nys-globalfooter-font-weight--semibold: var( --nys-font-weight-semibold, 600 );--_nys-globalfooter-max-width--content: var( --nys-max-width--content, var(--nys-globalfooter-max-width--content, 1280px) );--_nys-globalfooter-font-family--agency: var( --nys-font-family-agency, "D Sari", Arial, sans-serif );--_nys-globalfooter-column-gap: var(--nys-space-400, 32px);--_nys-globalfooter-row-gap: var(--nys-space-400, 32px);--_nys-globalfooter-line-height--link: var(--nys-font-lineheight-ui-md, 24px);--_nys-globalfooter-letter-spacing: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) );--_nys-globalfooter-font-family--link: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-globalfooter-text-decoration-thickness: var(--nys-size-2px, 2px);--_nys-globalfooter-background--divider: var(--nys-color-theme, #154973);--_nys-globalfooter-margin--divider: var(--nys-space-50, 4px)}.nys-globalfooter{display:flex;padding:var(--_nys-globalfooter-padding--y) var(--_nys-globalfooter-padding--gutter);background-color:var(--_nys-globalfooter-background-color);color:var(--_nys-globalfooter-color);width:100%;box-sizing:border-box}.nys-globalfooter .nys-globalfooter__main-container{display:flex;flex-direction:column;margin:auto;gap:var(--_nys-globalfooter-gap);width:100%;max-width:var(--_nys-globalfooter-max-width--content)}.nys-globalfooter .nys-globalfooter__main-container .nys-globalfooter__heading-container{display:flex;flex-direction:column;gap:var(--_nys-globalfooter-gap--heading-container)}.nys-globalfooter .nys-globalfooter__main-container .nys-globalfooter__heading-container .nys-globalfooter__name{text-align:left;margin:0;color:var(--_nys-globalfooter-color);font-family:var(--_nys-globalfooter-font-family--agency);font-size:var(--_nys-globalfooter-font-size--agency);font-style:normal;font-weight:var(--_nys-globalfooter-font-weight--semibold);line-height:var(--_nys-globalfooter-line-height--agency);letter-spacing:normal}.nys-globalfooter .nys-globalfooter__main-container .nys-globalfooter__heading-container .nys-globalfooter__subheading{margin:0}ul{list-style-type:none;padding:0;margin:0}li{margin:0;padding:0}a,span{color:var(--_nys-globalfooter-color);text-decoration:none;font-family:var(--_nys-globalfooter-font-family--link);font-size:var(--_nys-globalfooter-font-size--link);font-style:normal;font-weight:var(--_nys-globalfooter-font-weight--semibold);line-height:var(--_nys-globalfooter-line-height--link);letter-spacing:var(--_nys-globalfooter-letter-spacing)}ul li>span+ul li a{font-weight:var(--_nys-globalfooter-font-weight--regular)}a:hover{text-decoration:underline}a:active{text-decoration-thickness:var(--_nys-globalfooter-text-decoration-thickness)}.nys-globalfooter__content{width:100%}.nys-globalfooter__content ul{display:flex;flex-flow:column wrap;gap:var(--_nys-globalfooter-row-gap) var(--_nys-globalfooter-column-gap)}.nys-globalfooter__content ul li:has(span~ul){flex:1;display:flex;flex-direction:column}.nys-globalfooter__content ul:has(li>span~ul){--_nys-globalfooter-column-gap: var(--nys-space-500, 40px)}.nys-globalfooter__content ul li>span~ul{display:flex;flex-direction:column;gap:var(--nys-space-200, 16px)}.divider{margin-top:var(--_nys-globalfooter-margin--divider);margin-bottom:var(--nys-space-300, 24px)}@media(min-width:768px){.nys-globalfooter__content ul{flex-direction:row}.nys-globalfooter__content ul li:has(span~ul){flex:1 0 205px}:host{--_nys-globalfooter-padding--gutter: var(--nys-gutter-lg, 32px);--_nys-globalfooter-row-gap: var(--nys-space-600, 48px)}}@media(min-width:1280px){:host{--_nys-globalfooter-padding--gutter: var(--nys-gutter-xl, 64px)}}';
var Iu = Object.defineProperty, No = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Iu(e, t, o), o;
};
const Ru = "Site", Ni = class Ni extends D {
  constructor() {
    super(...arguments), this.id = "", this.agencyName = "", this.agencySubheading = "", this.homepageLink = "", this.landmarkLabel = "", this.slotHasContent = !0;
  }
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  // No connectedCallback override is needed here: NysElement's own
  // connectedCallback already assigns an id when one is not provided, and it runs
  // automatically because this class does not override it. The contentinfo landmark
  // intentionally stays on the inner <footer> element (and is given an accessible
  // name from the agency name so multiple footers on a page are distinguishable),
  // so this component keeps defaultRole = null and does not move a role onto the host.
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
    const t = e?.assignedNodes({ flatten: !0 }).filter((s) => s.nodeType === Node.ELEMENT_NODE);
    await Promise.resolve(), this.slotHasContent = t.length > 0;
    const n = this.shadowRoot?.querySelector(
      ".nys-globalfooter__content"
    ), o = t?.some(
      (s) => s.tagName === "H4"
    );
    n && (n.classList.toggle("columns", o), n.classList.toggle("small", !o), n.innerHTML = "", t.forEach((i) => {
      if (i.nodeType === Node.ELEMENT_NODE) {
        const d = i.cloneNode(!0);
        ["script", "iframe", "object", "embed", "img"].forEach((b) => {
          d.querySelectorAll(b).forEach((m) => m.remove());
        }), n.appendChild(d), i.remove();
      }
    }), n.querySelectorAll("span").forEach((i) => {
      const d = document.createElement("nys-divider");
      d.classList.add("divider"), i.insertAdjacentElement("afterend", d);
    }));
  }
  /**
   * Id of the heading that names the contentinfo landmark, or undefined when no
   * agency name was given.
   *
   * The documented pairing puts this footer above `nys-unavfooter`, which leaves a
   * page with two `contentinfo` landmarks. Pointing at the visible heading rather
   * than repeating the agency name in an `aria-label` keeps the two in sync and lets
   * the name be translated along with the rest of the page.
   */
  get _contentinfoLabelledBy() {
    if (!this._landmarkLabelOverride)
      return this.agencyName?.trim() ? `${this.id}-name` : void 0;
  }
  /** The author's landmark name, or undefined when they gave none. */
  get _landmarkLabelOverride() {
    return this.landmarkLabel?.trim() || void 0;
  }
  /**
   * Literal name for the contentinfo: the author's override, or the "Site"
   * default when there is no agency heading to reference. Undefined whenever
   * `_contentinfoLabelledBy` has something to point at, so the landmark never
   * carries both.
   */
  get _contentinfoLabel() {
    return this._landmarkLabelOverride ? this._landmarkLabelOverride : this._contentinfoLabelledBy ? void 0 : Ru;
  }
  render() {
    const e = y`<h2
      id="${this.id}-name"
      class="nys-globalfooter__name"
    >
      ${this.agencyName}
    </h2>`;
    return y`
      <footer
        class="nys-globalfooter"
        aria-labelledby=${v(this._contentinfoLabelledBy)}
        aria-label=${v(this._contentinfoLabel)}
      >
        <div class="nys-globalfooter__main-container">
          <div class="nys-globalfooter__heading-container">
            ${this.homepageLink?.trim() ? y`<a href=${this.homepageLink?.trim()}>${e}</a>` : e}
            ${this.agencySubheading ? y`<p class="nys-globalfooter__subheading">
                  ${this.agencySubheading}
                </p>` : Wn}
          </div>
          ${this.slotHasContent ? y`<div class="nys-globalfooter__content">
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
Ni.styles = C(zu);
let Xt = Ni;
No([
  a({ type: String, reflect: !0 })
], Xt.prototype, "id");
No([
  a({ type: String })
], Xt.prototype, "agencyName");
No([
  a({ type: String })
], Xt.prototype, "agencySubheading");
No([
  a({ type: String })
], Xt.prototype, "homepageLink");
No([
  a({ type: String })
], Xt.prototype, "landmarkLabel");
No([
  $()
], Xt.prototype, "slotHasContent");
customElements.get("nys-globalfooter") || customElements.define("nys-globalfooter", Xt);
const _r = globalThis.__nysIconRegistry ??= /* @__PURE__ */ new Map(), Lo = globalThis.__nysIconWatchers ??= /* @__PURE__ */ new Map();
let ni = null, Ha = null;
async function Ou() {
  return ni || (Ha ??= import("./nys-icon.library-CwuPZJAc.js").then(
    (r) => ni = r.default
  ), Ha);
}
function Mu() {
  if (globalThis.__nysIconDefaultRegistered || _r.has("default")) {
    globalThis.__nysIconDefaultRegistered = !0;
    return;
  }
  globalThis.__nysIconDefaultRegistered = !0, _r.set("default", {
    resolver: async (r) => {
      if (!r) return;
      const t = (await Ou())[r];
      return t ? { type: "svg", content: t } : void 0;
    }
  });
}
function lf(r, e) {
  _r.set(r, e), Lo.get(r)?.forEach((t) => t.redraw());
}
function cf(r) {
  _r.delete(r), Lo.get(r)?.forEach((e) => e.redraw());
}
function Pu(r) {
  return Mu(), _r.get(r);
}
function Va(r, e) {
  Lo.has(r) || Lo.set(r, /* @__PURE__ */ new Set()), Lo.get(r).add(e);
}
function Ua(r, e) {
  Lo.get(r)?.delete(e);
}
/*! @license DOMPurify 3.4.14 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.14/LICENSE */
function ja(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = Array(e); t < e; t++) n[t] = r[t];
  return n;
}
function Nu(r) {
  if (Array.isArray(r)) return r;
}
function Bu(r, e) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var n, o, s, i, d = [], p = !0, b = !1;
    try {
      if (s = (t = t.call(r)).next, e !== 0) for (; !(p = (n = s.call(t)).done) && (d.push(n.value), d.length !== e); p = !0) ;
    } catch (m) {
      b = !0, o = m;
    } finally {
      try {
        if (!p && t.return != null && (i = t.return(), Object(i) !== i)) return;
      } finally {
        if (b) throw o;
      }
    }
    return d;
  }
}
function Fu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qu(r, e) {
  return Nu(r) || Bu(r, e) || Hu(r, e) || Fu();
}
function Hu(r, e) {
  if (r) {
    if (typeof r == "string") return ja(r, e);
    var t = {}.toString.call(r).slice(8, -1);
    return t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set" ? Array.from(r) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? ja(r, e) : void 0;
  }
}
const Ul = Object.entries, Wa = Object.setPrototypeOf, Vu = Object.isFrozen, Uu = Object.getPrototypeOf, ju = Object.getOwnPropertyDescriptor;
let _e = Object.freeze, ke = Object.seal, So = Object.create, jl = typeof Reflect < "u" && Reflect, _i = jl.apply, gi = jl.construct;
_e || (_e = function(e) {
  return e;
});
ke || (ke = function(e) {
  return e;
});
_i || (_i = function(e, t) {
  for (var n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++)
    o[s - 2] = arguments[s];
  return e.apply(t, o);
});
gi || (gi = function(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    n[o - 1] = arguments[o];
  return new e(...n);
});
const jn = de(Array.prototype.forEach), Wu = de(Array.prototype.lastIndexOf), Ya = de(Array.prototype.pop), ar = de(Array.prototype.push), Yu = de(Array.prototype.splice), To = Array.isArray, ur = de(String.prototype.toLowerCase), oi = de(String.prototype.toString), Ga = de(String.prototype.match), lr = de(String.prototype.replace), Ka = de(String.prototype.indexOf), Gu = de(String.prototype.trim), Ku = de(Number.prototype.toString), Zu = de(Boolean.prototype.toString), Za = typeof BigInt > "u" ? null : de(BigInt.prototype.toString), Xa = typeof Symbol > "u" ? null : de(Symbol.prototype.toString), Ge = de(Object.prototype.hasOwnProperty), cr = de(Object.prototype.toString), Oe = de(RegExp.prototype.test), Vn = Xu(TypeError);
function de(r) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
      n[o - 1] = arguments[o];
    return _i(r, e, n);
  };
}
function Xu(r) {
  return function() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return gi(r, t);
  };
}
function T(r, e) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ur;
  if (Wa && Wa(r, null), !To(e))
    return r;
  let n = e.length;
  for (; n--; ) {
    let o = e[n];
    if (typeof o == "string") {
      const s = t(o);
      s !== o && (Vu(e) || (e[n] = s), o = s);
    }
    r[o] = !0;
  }
  return r;
}
function Qu(r) {
  for (let e = 0; e < r.length; e++)
    Ge(r, e) || (r[e] = null);
  return r;
}
function ot(r) {
  const e = So(null);
  for (const n of Ul(r)) {
    var t = qu(n, 2);
    const o = t[0], s = t[1];
    Ge(r, o) && (To(s) ? e[o] = Qu(s) : s && typeof s == "object" && s.constructor === Object ? e[o] = ot(s) : e[o] = s);
  }
  return e;
}
function Ju(r) {
  switch (typeof r) {
    case "string":
      return r;
    case "number":
      return Ku(r);
    case "boolean":
      return Zu(r);
    case "bigint":
      return Za ? Za(r) : "0";
    case "symbol":
      return Xa ? Xa(r) : "Symbol()";
    case "undefined":
      return cr(r);
    case "function":
    case "object": {
      if (r === null)
        return cr(r);
      const e = r, t = Ct(e, "toString");
      if (typeof t == "function") {
        const n = t(e);
        return typeof n == "string" ? n : cr(n);
      }
      return cr(r);
    }
    default:
      return cr(r);
  }
}
function Ct(r, e) {
  for (; r !== null; ) {
    const n = ju(r, e);
    if (n) {
      if (n.get)
        return de(n.get);
      if (typeof n.value == "function")
        return de(n.value);
    }
    r = Uu(r);
  }
  function t() {
    return null;
  }
  return t;
}
function ey(r) {
  try {
    return Oe(r, ""), !0;
  } catch {
    return !1;
  }
}
const Qa = _e(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ri = _e(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), si = _e(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ty = _e(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ii = _e(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ny = _e(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ja = _e(["#text"]), el = _e(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "command", "commandfor", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns"]), ai = _e(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dominant-baseline", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "pointer-events", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-orientation", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "vector-effect", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), tl = _e(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Yr = _e(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), oy = ke(/{{[\w\W]*|^[\w\W]*}}/g), ry = ke(/<%[\w\W]*|^[\w\W]*%>/g), sy = ke(/\${[\w\W]*/g), iy = ke(/^data-[\-\w.\u00B7-\uFFFF]+$/), ay = ke(/^aria-[\-\w]+$/), nl = ke(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ly = ke(/^(?:\w+script|data):/i), cy = ke(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), dy = ke(/^html$/i), hy = ke(/^[a-z][.\w]*(-[.\w]+)+$/i), ol = ke(/<[/\w!]/g), rl = ke(/<[/\w]/g), uy = ke(/<\/no(script|embed|frames)/i), yy = ke(/\/>/i), tt = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  // Deprecated
  entityNode: 6,
  // Deprecated
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
  // Deprecated
}, Wl = ["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"], py = _e(T({}, Wl)), fy = (function() {
  const r = {};
  return jn(Wl, (e) => {
    r[e] = ke(new RegExp("</" + e + "(?=[\\t\\n\\f\\r />])", "i"));
  }), _e(r);
})(), by = function() {
  return typeof window > "u" ? null : window;
}, vy = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let n = null;
  const o = "data-tt-policy-suffix";
  t && t.hasAttribute(o) && (n = t.getAttribute(o));
  const s = "dompurify" + (n ? "#" + n : "");
  try {
    return e.createPolicy(s, {
      createHTML(i) {
        return i;
      },
      createScriptURL(i) {
        return i;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, sl = function() {
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
}, _n = function(e, t, n, o) {
  return Ge(e, t) && To(e[t]) ? T(o.base ? ot(o.base) : {}, e[t], o.transform) : n;
}, li = function(e, t, n) {
  const o = Ge(e, t) ? e[t] : void 0;
  return o && typeof o == "object" ? ot(o) : n();
};
function Yl() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : by();
  const e = (u) => Yl(u);
  if (e.version = "3.4.14", e.removed = [], !r || !r.document || r.document.nodeType !== tt.document || !r.Element)
    return e.isSupported = !1, e;
  let t = r.document;
  const n = t, o = n.currentScript;
  r.DocumentFragment;
  const s = r.HTMLTemplateElement, i = r.Node, d = r.Element, p = r.NodeFilter, b = r.NamedNodeMap;
  b === void 0 && (r.NamedNodeMap || r.MozNamedAttrMap), r.HTMLFormElement;
  const m = r.DOMParser, x = r.trustedTypes, k = d.prototype, R = Ct(k, "cloneNode"), pe = Ct(k, "remove"), fe = Ct(k, "nextSibling"), oe = Ct(k, "childNodes"), ie = Ct(k, "parentNode"), Qe = Ct(k, "shadowRoot"), re = Ct(k, "attributes"), be = i && i.prototype ? Ct(i.prototype, "nodeType") : null, Se = i && i.prototype ? Ct(i.prototype, "nodeName") : null, Ee = i && i.prototype ? Ct(i.prototype, "ownerDocument") : null, Ft = function(l) {
    return be ? be(l) : l.nodeType;
  }, ge = function(l) {
    return Se ? Se(l) : l.nodeName;
  };
  if (typeof s == "function") {
    const u = t.createElement("template");
    u.content && u.content.ownerDocument && (t = u.content.ownerDocument);
  }
  let se, ft = "", io, sn = !1, an = 0;
  const qt = function() {
    if (an > 0)
      throw Vn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, ln = function(l) {
    qt(), an++;
    try {
      return se.createHTML(l);
    } finally {
      an--;
    }
  }, Is = function(l) {
    qt(), an++;
    try {
      return se.createScriptURL(l);
    } finally {
      an--;
    }
  }, ao = function() {
    return sn || (io = vy(x, o), sn = !0), io;
  }, cn = t, lo = cn.implementation, Dr = cn.createNodeIterator, Rs = cn.createDocumentFragment, Os = cn.getElementsByTagName, H = n.importNode;
  let V = sl();
  e.isSupported = typeof Ul == "function" && typeof ie == "function" && lo && lo.createHTMLDocument !== void 0;
  const Ms = oy, Ps = ry, Ns = sy, Bs = iy, Fs = ay, zr = ly, Ir = cy, Rr = hy;
  let q = nl, O = null;
  const M = T({}, [...Qa, ...ri, ...si, ...ii, ...Ja]);
  let P = null;
  const We = T({}, [...el, ...ai, ...tl, ...Yr]);
  let De = Object.seal(So(null, {
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
  })), dn = null, bt = null;
  const vt = Object.seal(So(null, {
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
  let co = !0, ho = !0, Uo = !1, _t = !0, ze = !1, Fe = !0, gt = !1, hn = !1, Ht = null, un = null, zt = !1, mt = !1, Vt = !1, Dn = !1, jo = !0, Wo = !1;
  const uo = "user-content-";
  let zn = !0, It = !1, Je = {}, Ut = null;
  const Yo = T({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    // <selectedcontent> mirrors the selected <option>'s subtree, cloned by
    // the UA (customizable <select>) — including any on* handlers — and the
    // engine re-mirrors synchronously whenever a removal changes which
    // option/selectedcontent is current, even inside DOMPurify's inert
    // DOMParser document. Hoisting its children on removal re-inserts a fresh
    // mirror target ahead of the walk, which the engine refills, looping
    // forever (DoS) and amplifying output. Dropping its content on removal
    // (rather than hoisting) breaks that cascade; the content is a duplicate
    // of the option, which is sanitized on its own. See campaign-3 F1/F6.
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let Go = null;
  const Ko = T({}, ["audio", "video", "img", "source", "image", "track"]);
  let Zo = null;
  const In = T({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), jt = "http://www.w3.org/1998/Math/MathML", qe = "http://www.w3.org/2000/svg", Ae = "http://www.w3.org/1999/xhtml";
  let Rt = Ae, Rn = !1, Xo = null;
  const Or = T({}, [jt, qe, Ae], oi), yo = _e(["mi", "mo", "mn", "ms", "mtext"]);
  let po = T({}, yo);
  const fo = _e(["annotation-xml"]);
  let Qo = T({}, fo);
  const On = T({}, ["title", "style", "font", "a", "script"]);
  let Mn = null;
  const qs = ["application/xhtml+xml", "text/html"], Q = "text/html";
  let N = null, yn = null;
  const Mr = t.createElement("form"), bo = function(l) {
    return l instanceof RegExp || l instanceof Function;
  }, vo = function() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (yn && yn === l)
      return;
    (!l || typeof l != "object") && (l = {}), l = ot(l), Mn = // eslint-disable-next-line unicorn/prefer-includes
    qs.indexOf(l.PARSER_MEDIA_TYPE) === -1 ? Q : l.PARSER_MEDIA_TYPE, N = Mn === "application/xhtml+xml" ? oi : ur, O = _n(l, "ALLOWED_TAGS", M, {
      transform: N
    }), P = _n(l, "ALLOWED_ATTR", We, {
      transform: N
    }), Xo = _n(l, "ALLOWED_NAMESPACES", Or, {
      transform: oi
    }), Zo = _n(l, "ADD_URI_SAFE_ATTR", In, {
      transform: N,
      base: In
    }), Go = _n(l, "ADD_DATA_URI_TAGS", Ko, {
      transform: N,
      base: Ko
    }), Ut = _n(l, "FORBID_CONTENTS", Yo, {
      transform: N
    }), dn = _n(l, "FORBID_TAGS", ot({}), {
      transform: N
    }), bt = _n(l, "FORBID_ATTR", ot({}), {
      transform: N
    }), Je = Ge(l, "USE_PROFILES") ? l.USE_PROFILES && typeof l.USE_PROFILES == "object" ? ot(l.USE_PROFILES) : l.USE_PROFILES : !1, co = l.ALLOW_ARIA_ATTR !== !1, ho = l.ALLOW_DATA_ATTR !== !1, Uo = l.ALLOW_UNKNOWN_PROTOCOLS || !1, _t = l.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ze = l.SAFE_FOR_TEMPLATES || !1, Fe = l.SAFE_FOR_XML !== !1, gt = l.WHOLE_DOCUMENT || !1, mt = l.RETURN_DOM || !1, Vt = l.RETURN_DOM_FRAGMENT || !1, Dn = l.RETURN_TRUSTED_TYPE || !1, zt = l.FORCE_BODY || !1, jo = l.SANITIZE_DOM !== !1, Wo = l.SANITIZE_NAMED_PROPS || !1, zn = l.KEEP_CONTENT !== !1, It = l.IN_PLACE || !1, q = ey(l.ALLOWED_URI_REGEXP) ? l.ALLOWED_URI_REGEXP : nl, Rt = typeof l.NAMESPACE == "string" ? l.NAMESPACE : Ae, po = li(
      l,
      "MATHML_TEXT_INTEGRATION_POINTS",
      () => T({}, yo)
      // Default built-in map
    ), Qo = li(
      l,
      "HTML_INTEGRATION_POINTS",
      () => T({}, fo)
      // Default built-in map
    );
    const h = li(l, "CUSTOM_ELEMENT_HANDLING", () => So(null));
    if (De = So(null), Ge(h, "tagNameCheck") && bo(h.tagNameCheck) && (De.tagNameCheck = h.tagNameCheck), Ge(h, "attributeNameCheck") && bo(h.attributeNameCheck) && (De.attributeNameCheck = h.attributeNameCheck), Ge(h, "allowCustomizedBuiltInElements") && typeof h.allowCustomizedBuiltInElements == "boolean" && (De.allowCustomizedBuiltInElements = h.allowCustomizedBuiltInElements), ke(De), ze && (ho = !1), Vt && (mt = !0), Je && (O = T({}, Ja), P = So(null), Je.html === !0 && (T(O, Qa), T(P, el)), Je.svg === !0 && (T(O, ri), T(P, ai), T(P, Yr)), Je.svgFilters === !0 && (T(O, si), T(P, ai), T(P, Yr)), Je.mathMl === !0 && (T(O, ii), T(P, tl), T(P, Yr))), vt.tagCheck = null, vt.attributeCheck = null, Ge(l, "ADD_TAGS") && (typeof l.ADD_TAGS == "function" ? vt.tagCheck = l.ADD_TAGS : To(l.ADD_TAGS) && (O === M && (O = ot(O)), T(O, l.ADD_TAGS, N))), Ge(l, "ADD_ATTR") && (typeof l.ADD_ATTR == "function" ? vt.attributeCheck = l.ADD_ATTR : To(l.ADD_ATTR) && (P === We && (P = ot(P)), T(P, l.ADD_ATTR, N))), Ge(l, "ADD_FORBID_CONTENTS") && To(l.ADD_FORBID_CONTENTS) && (Ut === Yo && (Ut = ot(Ut)), T(Ut, l.ADD_FORBID_CONTENTS, N)), zn && (O["#text"] = !0), gt && T(O, ["html", "head", "body"]), O.table && (T(O, ["tbody"]), delete dn.tbody), l.TRUSTED_TYPES_POLICY) {
      if (typeof l.TRUSTED_TYPES_POLICY.createHTML != "function")
        throw Vn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof l.TRUSTED_TYPES_POLICY.createScriptURL != "function")
        throw Vn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const f = se;
      se = l.TRUSTED_TYPES_POLICY;
      try {
        ft = ln("");
      } catch (_) {
        throw se = f, _;
      }
    } else l.TRUSTED_TYPES_POLICY === null ? (se = void 0, ft = "") : (se === void 0 && (se = ao()), se && typeof ft == "string" && (ft = ln("")));
    _e && _e(l), yn = l;
  }, Jo = T({}, [...ri, ...si, ...ty]), Pr = T({}, [...ii, ...ny]), Hs = function(l, h, f) {
    return h.namespaceURI === Ae ? l === "svg" : h.namespaceURI === jt ? l === "svg" && (f === "annotation-xml" || po[f]) : !!Jo[l];
  }, Vs = function(l, h, f) {
    return h.namespaceURI === Ae ? l === "math" : h.namespaceURI === qe ? l === "math" && Qo[f] : !!Pr[l];
  }, Us = function(l, h, f) {
    return h.namespaceURI === qe && !Qo[f] || h.namespaceURI === jt && !po[f] ? !1 : !Pr[l] && (On[l] || !Jo[l]);
  }, Wt = function(l) {
    let h = ie(l);
    (!h || !h.tagName) && (h = {
      namespaceURI: Rt,
      tagName: "template"
    });
    const f = ur(l.tagName), _ = ur(h.tagName);
    return Xo[l.namespaceURI] ? l.namespaceURI === qe ? Hs(f, h, _) : l.namespaceURI === jt ? Vs(f, h, _) : l.namespaceURI === Ae ? Us(f, h, _) : !!(Mn === "application/xhtml+xml" && Xo[l.namespaceURI]) : !1;
  }, xt = function(l) {
    ar(e.removed, {
      element: l
    });
    try {
      ie(l).removeChild(l);
    } catch {
      if (pe(l), !ie(l))
        throw Vn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Pn = function(l, h, f) {
    try {
      l.removeAttributeNode(h);
    } catch {
      try {
        l.removeAttribute(f);
      } catch {
      }
    }
  }, ct = function(l) {
    Nn(l);
    const h = oe(l);
    if (h) {
      const _ = [];
      jn(h, (g) => {
        ar(_, g);
      }), jn(_, (g) => {
        try {
          pe(g);
        } catch {
        }
      });
    }
    const f = re(l);
    if (f)
      for (let _ = f.length - 1; _ >= 0; --_) {
        const g = f[_], w = g && g.name;
        typeof w == "string" && Pn(l, g, w);
      }
  }, Yt = function(l, h, f) {
    if (!f)
      try {
        f = h.getAttributeNode(l);
      } catch {
        f = null;
      }
    ar(e.removed, {
      attribute: f || null,
      from: h
    });
    try {
      f ? h.removeAttributeNode(f) : h.removeAttribute(l);
    } catch {
      try {
        h.removeAttribute(l);
      } catch {
      }
    }
    if (l === "is")
      if (mt || Vt)
        try {
          xt(h);
        } catch {
        }
      else
        try {
          h.setAttribute(l, "");
        } catch {
        }
  }, _o = function(l) {
    const h = re(l);
    if (h)
      for (let f = h.length - 1; f >= 0; --f) {
        const _ = h[f], g = _ && _.name;
        typeof g != "string" || P[N(g)] || Pn(l, _, g);
      }
  }, Nn = function(l) {
    const h = [l];
    for (; h.length > 0; ) {
      const f = h.pop();
      Ft(f) === tt.element && _o(f);
      const g = oe(f);
      if (g)
        for (let w = g.length - 1; w >= 0; --w)
          h.push(g[w]);
    }
  }, Nr = function(l, h) {
    return Fe ? l === "patchsrc" ? !0 : l === "for" && h !== "label" && h !== "output" : !1;
  }, Br = function(l) {
    if (!Fe)
      return;
    const h = [l];
    for (; h.length > 0; ) {
      const f = h.pop(), _ = Ft(f);
      if (_ === tt.processingInstruction || _ === tt.comment && Oe(rl, f.data)) {
        try {
          pe(f);
        } catch {
        }
        continue;
      }
      if (_ === tt.element) {
        const w = f, A = N(ge(f));
        try {
          w.hasAttribute && w.hasAttribute("patchsrc") && w.removeAttribute("patchsrc"), w.hasAttribute && w.hasAttribute("for") && Nr("for", A) && w.removeAttribute("for");
        } catch {
        }
      }
      const g = oe(f);
      if (g)
        for (let w = g.length - 1; w >= 0; --w)
          h.push(g[w]);
    }
  }, er = function(l) {
    let h = null, f = null;
    if (zt)
      l = "<remove></remove>" + l;
    else {
      const w = Ga(l, /^[\r\n\t ]+/);
      f = w && w[0];
    }
    Mn === "application/xhtml+xml" && Rt === Ae && (l = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + l + "</body></html>");
    const _ = se ? ln(l) : l;
    if (Rt === Ae)
      try {
        h = new m().parseFromString(_, Mn);
      } catch {
      }
    if (!h || !h.documentElement) {
      h = lo.createDocument(Rt, "template", null);
      try {
        h.documentElement.innerHTML = Rn ? ft : _;
      } catch {
      }
    }
    const g = h.body || h.documentElement;
    return l && f && g.insertBefore(t.createTextNode(f), g.childNodes[0] || null), Rt === Ae ? Os.call(h, gt ? "html" : "body")[0] : gt ? h.documentElement : g;
  }, Bn = function(l) {
    const h = Ee ? Ee(l) : l.ownerDocument;
    return Dr.call(
      h || l,
      l,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null
    );
  }, pn = function(l) {
    return l = lr(l, Ms, " "), l = lr(l, Ps, " "), l = lr(l, Ns, " "), l;
  }, fn = function(l) {
    var h;
    l.normalize();
    const f = Ee ? Ee(l) : l.ownerDocument, _ = Dr.call(
      f || l,
      l,
      // eslint-disable-next-line no-bitwise
      p.SHOW_TEXT | p.SHOW_COMMENT | p.SHOW_CDATA_SECTION | p.SHOW_PROCESSING_INSTRUCTION,
      null
    );
    let g = _.nextNode();
    for (; g; )
      g.data = pn(g.data), g = _.nextNode();
    const w = (h = l.querySelectorAll) === null || h === void 0 ? void 0 : h.call(l, "template");
    w && jn(w, (A) => {
      dt(A.content) && fn(A.content);
    });
  }, wt = function(l) {
    const h = Se ? Se(l) : null;
    return typeof h != "string" || N(h) !== "form" ? !1 : typeof l.nodeName != "string" || typeof l.textContent != "string" || typeof l.removeChild != "function" || // Realm-safe NamedNodeMap detection: equality against the cached
    // prototype getter. Clobbered .attributes (e.g. <input name="attributes">)
    // makes the direct read diverge from the cached read; a clean form
    // (same-realm OR foreign-realm) has both reads pointing at the same
    // canonical NamedNodeMap.
    l.attributes !== re(l) || typeof l.removeAttribute != "function" || typeof l.setAttribute != "function" || typeof l.namespaceURI != "string" || typeof l.insertBefore != "function" || typeof l.hasChildNodes != "function" || // NodeType clobbering probe. Cached Node.prototype.nodeType getter
    // returns the integer 1 for any Element regardless of realm; direct
    // read on a clobbered form (e.g. <input name="nodeType">) returns
    // the named child element. Cheap addition — nodeType is read from
    // an internal slot, no serialization cost — and removes a residual
    // clobbering surface used by several mXSS / PI / comment branches
    // in _sanitizeElements that compare currentNode.nodeType directly.
    l.nodeType !== be(l) || // HTMLFormElement has [LegacyOverrideBuiltIns]: a descendant named
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
    l.childNodes !== oe(l);
  }, dt = function(l) {
    if (!be || typeof l != "object" || l === null)
      return !1;
    try {
      return be(l) === tt.documentFragment;
    } catch {
      return !1;
    }
  }, Ie = function(l) {
    if (!be || typeof l != "object" || l === null)
      return !1;
    try {
      return typeof be(l) == "number";
    } catch {
      return !1;
    }
  };
  function ht(u, l, h) {
    u.length !== 0 && jn(u, (f) => {
      f.call(e, l, h, yn);
    });
  }
  const go = function(l, h) {
    return !!(Fe && l.hasChildNodes() && !Ie(l.firstElementChild) && Oe(ol, l.textContent) && Oe(ol, l.innerHTML) || Fe && l.namespaceURI === Ae && py[h] && (Ie(l.firstElementChild) || typeof l.textContent == "string" && Oe(fy[h], l.textContent)) || l.nodeType === tt.processingInstruction || Fe && l.nodeType === tt.comment && Oe(rl, l.data));
  }, mo = function(l, h) {
    if (l instanceof RegExp)
      return Oe(l, h);
    if (l instanceof Function) {
      for (var f = arguments.length, _ = new Array(f > 2 ? f - 2 : 0), g = 2; g < f; g++)
        _[g - 2] = arguments[g];
      return !!l(h, ..._);
    }
    return !1;
  }, Fr = function(l, h, f) {
    if (!dn[h] && Vr(h) && mo(De.tagNameCheck, h))
      return !1;
    if (zn && !Ut[h]) {
      const _ = ie(l), g = oe(l);
      if (g && _) {
        const w = g.length;
        for (let A = w - 1; A >= 0; --A) {
          const S = l === f ? R(g[A], !0) : g[A];
          _.insertBefore(S, fe(l));
        }
      }
    }
    return xt(l), !0;
  }, tr = function(l, h, f, _) {
    return l.length === 0 ? h : h === f || h === _ ? ot(h) : h;
  }, nr = function(l, h) {
    return l === h || ie(l) !== null ? !1 : (It && Nn(l), !0);
  }, or = function(l, h) {
    if (ht(V.beforeSanitizeElements, l, null), nr(l, h))
      return !0;
    if (wt(l))
      return xt(l), !0;
    const f = N(ge(l));
    if (O = tr(V.uponSanitizeElement, O, M, Ht), ht(V.uponSanitizeElement, l, {
      tagName: f,
      allowedTags: O
    }), nr(l, h))
      return !0;
    if (go(l, f))
      return xt(l), !0;
    if (dn[f] || !(vt.tagCheck instanceof Function && vt.tagCheck(f)) && !O[f]) {
      const g = Fr(l, f, h);
      return g === !1 && ht(V.afterSanitizeElements, l, null), g;
    }
    if (Ft(l) === tt.element && !Wt(l) || (f === "noscript" || f === "noembed" || f === "noframes") && Oe(uy, l.innerHTML))
      return xt(l), !0;
    if (ze && l.nodeType === tt.text) {
      const g = pn(l.textContent);
      l.textContent !== g && (ar(e.removed, {
        element: l.cloneNode()
      }), l.textContent = g);
    }
    return ht(V.afterSanitizeElements, l, null), !1;
  }, qr = function(l, h, f) {
    if (bt[h] || Nr(h, l) || jo && (h === "id" || h === "name") && (f in t || f in Mr))
      return !1;
    const _ = P[h] || vt.attributeCheck instanceof Function && vt.attributeCheck(h, l);
    return ho && Oe(Bs, h) || co && Oe(Fs, h) ? !0 : _ ? Zo[h] || Oe(q, lr(f, Ir, "")) || (h === "src" || h === "xlink:href" || h === "href") && l !== "script" && Ka(f, "data:") === 0 && Go[l] || Uo && !Oe(zr, lr(f, Ir, "")) ? !0 : !f : (
      // Condition a) covers a basically valid custom element tag name whose
      // tag passes the configured tagNameCheck and whose attribute name
      // passes the configured attributeNameCheck ...
      Vr(l) && mo(De.tagNameCheck, l) && mo(De.attributeNameCheck, h, l) || // Condition b) covers an `is` attribute whose value passes the
      // configured tagNameCheck while customized built-in elements are
      // allowed.
      h === "is" && De.allowCustomizedBuiltInElements && mo(De.tagNameCheck, f)
    );
  }, Hr = T({}, ["annotation-xml", "color-profile", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "missing-glyph"]), Vr = function(l) {
    return !Hr[ur(l)] && Oe(Rr, l);
  }, js = function(l, h, f, _) {
    if (se && typeof x == "object" && typeof x.getAttributeType == "function" && !f)
      switch (x.getAttributeType(l, h)) {
        case "TrustedHTML":
          return ln(_);
        case "TrustedScriptURL":
          return Is(_);
      }
    return _;
  }, Ur = function(l, h, f, _) {
    try {
      f ? l.setAttributeNS(f, h, _) : l.setAttribute(h, _), wt(l) ? xt(l) : Ya(e.removed);
    } catch {
      Yt(h, l);
    }
  }, Fn = function(l) {
    ht(V.beforeSanitizeAttributes, l, null);
    const h = l.attributes;
    if (!h || wt(l))
      return;
    P = tr(V.uponSanitizeAttribute, P, We, un);
    const f = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: P,
      forceKeepAttr: void 0
    };
    let _ = h.length;
    const g = N(l.nodeName);
    for (; _--; ) {
      const w = h[_], A = w.name, S = w.namespaceURI, U = w.value, z = N(A), Ws = U;
      let He = A === "value" ? Ws : Gu(Ws);
      if (f.attrName = z, f.attrValue = He, f.keepAttr = !0, f.forceKeepAttr = void 0, ht(V.uponSanitizeAttribute, l, f), He = f.attrValue, Wo && (z === "id" || z === "name") && Ka(He, uo) !== 0 && (Yt(A, l, w), He = uo + He), Fe && Oe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, He)) {
        Yt(A, l, w);
        continue;
      }
      if (z === "attributename" && Ga(He, "href")) {
        Yt(A, l, w);
        continue;
      }
      if (!f.forceKeepAttr) {
        if (!f.keepAttr) {
          Yt(A, l, w);
          continue;
        }
        if (!_t && Oe(yy, He)) {
          Yt(A, l, w);
          continue;
        }
        if (ze && (He = pn(He)), !qr(g, z, He)) {
          Yt(A, l, w);
          continue;
        }
        He = js(g, z, S, He), He !== Ws && Ur(l, A, S, He);
      }
    }
    ht(V.afterSanitizeAttributes, l, null);
  }, bn = function(l) {
    let h = null;
    const f = Bn(l);
    for (ht(V.beforeSanitizeShadowDOM, l, null); h = f.nextNode(); )
      if (ht(V.uponSanitizeShadowNode, h, null), or(h, l), Fn(h), dt(h.content) && bn(h.content), Ft(h) === tt.element) {
        const _ = Qe(h);
        dt(_) && (c(_), bn(_));
      }
    ht(V.afterSanitizeShadowDOM, l, null);
  }, c = function(l) {
    const h = [{
      node: l,
      shadow: null
    }];
    for (; h.length > 0; ) {
      const f = h.pop();
      if (f.shadow) {
        bn(f.shadow);
        continue;
      }
      const _ = f.node, w = Ft(_) === tt.element, A = oe(_);
      if (A)
        for (let S = A.length - 1; S >= 0; --S)
          h.push({
            node: A[S],
            shadow: null
          });
      if (w) {
        const S = Se ? Se(_) : null;
        if (typeof S == "string" && N(S) === "template") {
          const U = _.content;
          dt(U) && h.push({
            node: U,
            shadow: null
          });
        }
      }
      if (w) {
        const S = Qe(_);
        dt(S) && h.push({
          node: null,
          shadow: S
        }, {
          node: S,
          shadow: null
        });
      }
    }
  };
  return e.sanitize = function(u) {
    let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, h = null, f = null, _ = null, g = null;
    if (Rn = !u, Rn && (u = "<!-->"), typeof u != "string" && !Ie(u) && (u = Ju(u), typeof u != "string"))
      throw Vn("dirty is not a string, aborting");
    if (!e.isSupported)
      return u;
    hn ? (O = Ht, P = un) : vo(l), (V.uponSanitizeElement.length > 0 || V.uponSanitizeAttribute.length > 0) && (O = ot(O)), V.uponSanitizeAttribute.length > 0 && (P = ot(P)), e.removed = [];
    const w = It && typeof u != "string" && Ie(u);
    if (w) {
      Br(u);
      const U = ge(u);
      if (typeof U == "string") {
        const z = N(U);
        if (!O[z] || dn[z])
          throw ct(u), Vn("root node is forbidden and cannot be sanitized in-place");
      }
      if (wt(u))
        throw ct(u), Vn("root node is clobbered and cannot be sanitized in-place");
      try {
        c(u);
      } catch (z) {
        throw ct(u), z;
      }
    } else if (Ie(u))
      h = er("<!---->"), f = h.ownerDocument.importNode(u, !0), f.nodeType === tt.element && f.nodeName === "BODY" || f.nodeName === "HTML" ? h = f : h.appendChild(f), c(f);
    else {
      if (!mt && !ze && !gt && // eslint-disable-next-line unicorn/prefer-includes
      u.indexOf("<") === -1)
        return se && Dn ? ln(u) : u;
      if (h = er(u), !h)
        return mt ? null : Dn ? ft : "";
    }
    h && zt && xt(h.firstChild);
    const A = w ? u : h;
    try {
      const U = Bn(A);
      for (; _ = U.nextNode(); )
        or(_, A), Fn(_), dt(_.content) && bn(_.content);
    } catch (U) {
      throw w && (ct(u), jn(e.removed, (z) => {
        z.element && Nn(z.element);
      })), U;
    }
    if (w)
      return jn(e.removed, (U) => {
        U.element && Nn(U.element);
      }), ze && fn(u), u;
    if (mt) {
      if (ze && fn(h), Vt)
        for (g = Rs.call(h.ownerDocument); h.firstChild; )
          g.appendChild(h.firstChild);
      else
        g = h;
      return (P.shadowroot || P.shadowrootmode) && (g = H.call(n, g, !0)), g;
    }
    let S = gt ? h.outerHTML : h.innerHTML;
    return gt && O["!doctype"] && h.ownerDocument && h.ownerDocument.doctype && h.ownerDocument.doctype.name && Oe(dy, h.ownerDocument.doctype.name) && (S = "<!DOCTYPE " + h.ownerDocument.doctype.name + `>
` + S), ze && (S = pn(S)), se && Dn ? ln(S) : S;
  }, e.setConfig = function() {
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    vo(u), hn = !0, Ht = O, un = P;
  }, e.clearConfig = function() {
    yn = null, hn = !1, Ht = null, un = null, se = io, ft = "";
  }, e.isValidAttribute = function(u, l, h) {
    yn || vo({});
    const f = N(u), _ = N(l);
    return qr(f, _, h);
  }, e.addHook = function(u, l) {
    typeof l == "function" && Ge(V, u) && ar(V[u], l);
  }, e.removeHook = function(u, l) {
    if (Ge(V, u)) {
      if (l !== void 0) {
        const h = Wu(V[u], l);
        return h === -1 ? void 0 : Yu(V[u], h, 1)[0];
      }
      return Ya(V[u]);
    }
  }, e.removeHooks = function(u) {
    Ge(V, u) && (V[u] = []);
  }, e.removeAllHooks = function() {
    V = sl();
  }, e;
}
var _y = Yl();
const pr = /* @__PURE__ */ new Map(), mi = /* @__PURE__ */ new Map();
function Gl(r, e) {
  const t = _y.sanitize(r, {
    USE_PROFILES: { svg: !0, svgFilters: !0 },
    FORBID_TAGS: ["script", "use"],
    // <use> can SSRF to external hrefs
    FORBID_ATTR: ["onload", "onerror", "onbegin", "href", "xlink:href"]
  }), s = new DOMParser().parseFromString(t, "image/svg+xml").documentElement;
  if (!(s instanceof SVGElement))
    throw new Error(`Invalid SVG from ${e}`);
  return s;
}
async function gy(r) {
  const e = await fetch(r);
  if (!e.ok)
    throw new Error(`Failed to load icon: ${e.status}`);
  return Gl(await e.text(), r);
}
async function il(r) {
  return pr.has(r) || pr.set(r, gy(r)), (await pr.get(r)).cloneNode(!0);
}
function my(r) {
  let e = mi.get(r);
  return e || (e = Gl(r, "inline SVG source"), mi.set(r, e)), e.cloneNode(!0);
}
function df(r) {
  r ? pr.delete(r) : (pr.clear(), mi.clear());
}
const xy = ":host{display:inline-block;width:fit-content;height:fit-content;--_nys-icon-size: var( --nys-icon-size, .7em );box-sizing:content-box!important;vertical-align:middle}@supports (font-size: 1cap){:host{--_nys-icon-size: var(--nys-icon-size, 1cap)}}.nys-icon--svg{width:var(--_nys-icon-size, 1em);height:var(--_nys-icon-size, 1em);display:block;white-space:nowrap}.nys-icon--xs{width:calc(var(--_nys-icon-size) * .75);height:calc(var(--_nys-icon-size) * .75)}.nys-icon--sm{width:calc(var(--_nys-icon-size) * .875);height:calc(var(--_nys-icon-size) * .875)}.nys-icon--md{width:var(--_nys-icon-size);height:var(--_nys-icon-size)}.nys-icon--lg{width:calc(var(--_nys-icon-size) * 1.125);height:calc(var(--_nys-icon-size) * 1.125)}.nys-icon--xl{width:calc(var(--_nys-icon-size) * 1.25);height:calc(var(--_nys-icon-size) * 1.25)}.nys-icon--2xl{width:calc(var(--_nys-icon-size) * 1.5);height:calc(var(--_nys-icon-size) * 1.5)}.nys-icon--3xl{width:calc(var(--_nys-icon-size) * 1.875);height:calc(var(--_nys-icon-size) * 1.875)}.nys-icon--4xl{width:calc(var(--_nys-icon-size) * 2.25);height:calc(var(--_nys-icon-size) * 2.25)}.nys-icon--5xl{width:calc(var(--_nys-icon-size) * 3);height:calc(var(--_nys-icon-size) * 3)}.nys-icon--12{width:.75rem;height:.75rem}.nys-icon--14{width:.875rem;height:.875rem}.nys-icon--16{width:1rem;height:1rem}.nys-icon--18{width:1.125rem;height:1.125rem}.nys-icon--20{width:1.25rem;height:1.25rem}.nys-icon--24{width:1.5rem;height:1.5rem}.nys-icon--32{width:2rem;height:2rem}.nys-icon--40{width:2.5rem;height:2.5rem}.nys-icon--50{width:3.125rem;height:3.125rem}.nys-icon--flip-horizontal{transform:scaleX(-1)}.nys-icon--flip-vertical{transform:scaleY(-1)}.nys-icon--flip-both{transform:scale(-1)}";
var wy = Object.defineProperty, Ln = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && wy(e, t, o), o;
}, mn;
const nn = (mn = class extends D {
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
    super.connectedCallback(), this._reflectHostSemantics(), Va(this.library, this);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), Ua(this.library, this);
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
    if (e.has("name") && !mn._validName.test(this.name)) {
      console.warn(`nys-icon: invalid name "${this.name}" — ignored`), this._svg = null;
      return;
    }
    if (e.has("name") || e.has("library")) {
      if (e.has("library")) {
        const t = e.get("library");
        t && Ua(t, this), Va(this.library, this);
      }
      this._loadIcon();
    }
    this._svg && (e.has("ariaLabel") || e.has("rotate") || e.has("flip") || e.has("color") || e.has("size")) ? this._applyAttributes(this._svg) : e.has("ariaLabel") && this._reflectHostSemantics();
  }
  _loadIcon() {
    const e = ++this._loadSeq;
    this._loadPromise = (async () => {
      const t = Pu(this.library);
      if (!t || !this.name) {
        this._svg = null;
        return;
      }
      try {
        const n = await t.resolver(this.name);
        if (e !== this._loadSeq) return;
        if (!n) {
          this._svg = null;
          return;
        }
        const o = typeof n == "string" ? await il(n) : n.type === "url" ? await il(n.href) : my(n.content);
        if (e !== this._loadSeq) return;
        t.mutator?.(o), this._applyAttributes(o), this._svg = o;
      } catch {
        e === this._loadSeq && (this._svg = null);
      }
    })();
  }
  _applyAttributes(e) {
    e.setAttribute("role", "img"), this.ariaLabel ? (e.setAttribute("aria-label", this.ariaLabel), e.removeAttribute("aria-hidden")) : (e.setAttribute("aria-hidden", "true"), e.removeAttribute("aria-label")), this.rotate && this.rotate !== "0" ? e.style.rotate = `${this.rotate}deg` : e.style.removeProperty("rotate"), e.style.color = this.color || "currentcolor", e.classList.add(`nys-icon--${this.size}`), e.classList.add("nys-icon--svg"), this.flip && e.classList.add(`nys-icon--flip-${this.flip}`), this._reflectHostSemantics();
  }
  /**
   * Reflects the icon's accessible state onto the host:
   * - Labeled icon  -> role="img" + aria-label, no aria-hidden.
   * - Decorative    -> aria-hidden="true", no role/label.
   *
   * These are reflected as host *attributes* (rather than via
   * ElementInternals) on purpose: aria-hidden / role / aria-label in
   * attribute form have universal, consistent assistive-technology support,
   * whereas AT support for these states set through ElementInternals is still
   * uneven across browser/screen-reader combinations. The host role/label
   * therefore depend on runtime state (ariaLabel), so defaultRole stays null.
   */
  _reflectHostSemantics() {
    this.ariaLabel ? (this.setAttribute("role", "img"), this.setAttribute("aria-label", this.ariaLabel), this.removeAttribute("aria-hidden")) : (this.removeAttribute("role"), this.removeAttribute("aria-label"), this.setAttribute("aria-hidden", "true"));
  }
  render() {
    return this._svg ? y`${this._svg}` : null;
  }
}, mn.styles = C(xy), mn._validName = /^[a-zA-Z0-9_-]+$/, mn);
Ln([
  a({ type: String, reflect: !0 })
], nn.prototype, "name");
Ln([
  a({ type: String, reflect: !0 })
], nn.prototype, "library");
Ln([
  a({ type: String })
], nn.prototype, "ariaLabel");
Ln([
  a({ type: String })
], nn.prototype, "rotate");
Ln([
  a({ type: String })
], nn.prototype, "flip");
Ln([
  a({ type: String })
], nn.prototype, "color");
Ln([
  a({ type: String })
], nn.prototype, "size");
Ln([
  $()
], nn.prototype, "_svg");
let ky = nn;
customElements.get("nys-icon") || customElements.define("nys-icon", ky);
const Cy = '@charset "UTF-8";:host{--_nys-iconlistitem-gap: var(--nys-space-150, 12px);--_nys-iconlistitem-align-items: center;display:block;color:var(--nys-color-text);--_nys-iconlistitem-font-family: var( --nys-font-family-ui, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif );--_nys-iconlistitem-font-size: var(--nys-font-size-ui-lg, 18px);--_nys-iconlistitem-font-style: normal;--_nys-iconlistitem-font-weight: 600;--_nys-iconlistitem-line-height: var( --nys-font-lineheight-ui-lg, 28px );--_nys-iconlistitem-letter-spacing: var( --nys-font-letterspacing-ui-lg, .028px );--_nys-iconlistitem-color--divider: var(--nys-color-neutral-100, #d0d0ce);--_nys-iconlistitem-width--divider: var(--nys-size-1px, 1px);--_nys-iconlistitem-spacing--divider: var(--nys-space-150, 12px);--_nys-iconlistitem-padding--icon: var(--nys-space-50, 4px)}:host([data-has-secondary]){--_nys-iconlistitem-align-items: flex-start}.nys-iconlistitem{display:flex;gap:var(--_nys-iconlistitem-gap);align-items:var(--_nys-iconlistitem-align-items);padding-bottom:var(--_nys-iconlistitem-spacing--divider)}:host([divider]) .nys-iconlistitem{padding-bottom:var(--_nys-iconlistitem-spacing--divider);margin-bottom:var(--_nys-iconlistitem-spacing--divider);border-bottom:var(--_nys-iconlistitem-width--divider) solid var(--_nys-iconlistitem-color--divider)}.nys-iconlistitem__icon{padding:var(--_nys-iconlistitem-padding--icon)}.nys-iconlistitem__label{display:flex;flex-direction:column;font-family:var(--_nys-iconlistitem-font-family);font-size:var(--_nys-iconlistitem-font-size);font-style:var(--_nys-iconlistitem-font-style);font-weight:var(--_nys-iconlistitem-font-weight);line-height:var(--_nys-iconlistitem-line-height);letter-spacing:var(--_nys-iconlistitem-letter-spacing)}';
var $y = Object.defineProperty, Kl = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && $y(e, t, o), o;
};
const Bi = class Bi extends D {
  constructor() {
    super(...arguments), this.icon = "", this.divider = !1;
  }
  connectedCallback() {
    super.connectedCallback(), !this.hasAttribute("role") && this.parentElement?.tagName.toLowerCase() === "nys-iconlist" && this.setAttribute("role", "listitem");
  }
  _handleSecondarySlotChange(e) {
    const n = e.target.assignedNodes({ flatten: !0 }).length > 0;
    this.toggleAttribute("data-has-secondary", n);
  }
  render() {
    return y`
      <div class="nys-iconlistitem">
        <nys-icon
          name=${this.icon}
          size="20"
          class="nys-iconlistitem__icon"
        ></nys-icon>
        <div class="nys-iconlistitem__label">
          <slot></slot>
          <slot
            name="secondary"
            @slotchange=${this._handleSecondarySlotChange}
          ></slot>
        </div>
      </div>
    `;
  }
};
Bi.styles = C(Cy);
let gr = Bi;
Kl([
  a({ type: String })
], gr.prototype, "icon");
Kl([
  a({ type: Boolean, reflect: !0 })
], gr.prototype, "divider");
customElements.get("nys-iconlistitem") || customElements.define("nys-iconlistitem", gr);
const Sy = "nys-iconlist{--_nys-iconlist-width: 100%;display:block;width:var(--_nys-iconlist-width)}nys-iconlist>:not(nys-iconlistitem){display:none}";
var Ey = Object.defineProperty, Zl = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Ey(e, t, o), o;
};
let Gr = null;
function Ay() {
  Gr || typeof document > "u" || (Gr = new CSSStyleSheet(), Gr.replaceSync(Sy), document.adoptedStyleSheets = [...document.adoptedStyleSheets, Gr]);
}
class $i extends D {
  constructor() {
    super(...arguments), this.id = "", this.divider = !1, this._childObserver = new MutationObserver(() => this._syncDividers()), this._warnedChildren = /* @__PURE__ */ new WeakSet();
  }
  // The host must not be a shadow host: Chrome ≥150 demotes role="listitem"
  // on elements slotted into a shadow-host list, so the items have to be
  // direct DOM children of the element carrying role="list".
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback(), Ay(), this.hasAttribute("role") || this.setAttribute("role", "list"), this._childObserver.observe(this, { childList: !0 }), this._syncDividers();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._childObserver.disconnect();
  }
  updated(e) {
    super.updated(e), e.has("divider") && this._syncDividers();
  }
  _syncDividers() {
    const e = Array.from(this.children).filter(
      (t) => t.tagName.toLowerCase() === "nys-iconlistitem"
    );
    Array.from(this.children).forEach((t) => {
      t.tagName.toLowerCase() !== "nys-iconlistitem" && !this._warnedChildren.has(t) && (this._warnedChildren.add(t), console.warn(
        `nys-iconlist: <${t.tagName.toLowerCase()}> is not a <nys-iconlistitem> and will be hidden (display: none), removing it from the accessibility tree. Only <nys-iconlistitem> elements are supported as children.`,
        t
      ));
    }), e.forEach((t, n) => {
      t.toggleAttribute("divider", this.divider && n < e.length - 1);
    });
  }
}
Zl([
  a({ type: String, reflect: !0 })
], $i.prototype, "id");
Zl([
  a({ type: Boolean, reflect: !0 })
], $i.prototype, "divider");
customElements.get("nys-iconlist") || customElements.define("nys-iconlist", $i);
const Ly = ':host{--_nys-label-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-label-font-weight: var(--nys-font-weight-semibold, 600);--_nys-label-font-size: var(--nys-font-size-ui-md, 16px);--_nys-label-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-label-letter-spacing: var(--nys-font-letterspacing-ui-md, .044px);--_nys-label-color: var(--nys-color-text, #1b1b1b);--_nys-label-cursor: normal;--_nys-description-font-weight: var(--nys-font-weight-regular, 400);--_nys-description-font-style: normal;--_nys-description-font-color: var(--nys-color-text-weak, #4a4d4f);--_nys-required-font-color: var(--nys-color-danger, #b52c2c);--_nys-optional-font-weight: var(--nys-font-weight-regular, 400);--_nys-optional-font-color: var(--nys-color-text-weak, #4a4d4f);--_nys-label-gap: var(--nys-space-4px, 4px)}p{margin:0}.nys-label{display:flex;flex-direction:column;align-items:flex-start;font-family:var(--_nys-label-font-family);font-size:var(--_nys-label-font-size);line-height:var(--_nys-label-line-height);letter-spacing:var(--_nys-label-letter-spacing)}.nys-label *{cursor:var(--_nys-label-cursor)}.nys-label__label{display:flex;gap:var(--_nys-label-gap);text-align:left;font-weight:var(--_nys-label-font-weight);color:var(--_nys-label-color)}.nys-label__description{text-align:left;font-weight:var(--_nys-description-font-weight);font-style:var(--_nys-description-font-style);color:var(--_nys-description-font-color)}.nys-label__required{display:contents;font-weight:var(--_nys-label-font-weight);color:var(--_nys-required-font-color)}.nys-label__optional{display:contents;font-weight:var(--_nys-optional-font-weight);color:var(--_nys-optional-font-color)}.nys-label__tooltip-wrapper{display:flex;gap:2px;align-items:center}.nys-label.invert .nys-label__label,.nys-label.invert .nys-label__description,.nys-label.invert .nys-label__optional{color:var(--nys-color-text-reverse, #ffffff)}.nys-label.invert .nys-label__tooltip-icon{color:var(--nys-color-ink-reverse, #ffffff)}';
var Ty = Object.defineProperty, Bo = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Ty(e, t, o), o;
};
let Dy = 0;
const Fi = class Fi extends I {
  constructor() {
    super(...arguments), this.id = "", this.label = "", this.description = "", this.flag = "", this.inverted = !1, this.tooltip = "", this._labelInternals = typeof this.attachInternals == "function" ? this.attachInternals() : null;
  }
  get _hasDescription() {
    const e = this.querySelector('[slot="description"]');
    return !!this.description || !!e;
  }
  connectedCallback() {
    super.connectedCallback(), this.id || (this.id = `nys-label-${Date.now()}-${Dy++}`);
  }
  updated() {
    this._labelInternals && (this._labelInternals.ariaLabel = this.label || null);
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
    return y`
      <div class="nys-label ${this.inverted ? "invert" : ""}">
        <div class="nys-label__tooltip-wrapper">
          <label class="nys-label__label" @click=${this._dispatchLabelClick}
            >${this.label}
            ${this.flag === "required" ? y`<div class="nys-label__required" aria-hidden="true">
                  *
                </div>` : ""}
            ${this.flag === "optional" ? y`<div class="nys-label__optional">(Optional)</div>` : ""}</label
          >
          ${this.tooltip ? y`<nys-tooltip
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
        ${this._hasDescription ? y`<p
              class="nys-label__description"
              @click=${this._dispatchLabelClick}
            >
              <slot name="description">${this.description}</slot>
            </p>` : ""}
      </div>
    `;
  }
};
Fi.styles = C(Ly);
let Qt = Fi;
Bo([
  a({ type: String, reflect: !0 })
], Qt.prototype, "id");
Bo([
  a({ type: String })
], Qt.prototype, "label");
Bo([
  a({ type: String })
], Qt.prototype, "description");
Bo([
  a({ type: String })
], Qt.prototype, "flag");
Bo([
  a({ type: Boolean, reflect: !0 })
], Qt.prototype, "inverted");
Bo([
  a({ type: String })
], Qt.prototype, "tooltip");
customElements.get("nys-label") || customElements.define("nys-label", Qt);
const zy = ':host{--_nys-modal-width: 439px;--_nys-modal-min-width: 320px;--_nys-modal-border-radius: var(--nys-radius-lg, 8px);--_nys-modal-border-color: var(--nys-color-neutral-200, #bec0c1);--_nys-modal-border-width: 1px;--_nys-modal-background-color: var(--nys-color-surface, #ffffff);--_nys-modal-margin: var(--nys-space-250, 20px);--_nys-modal-padding: var(--nys-space-300, 24px);--_nys-modal-gap: var(--nys-space-200, 16px);--_nys-modal-background-color--overlay: var( --nys-color-black-transparent-700, rgba(27, 27, 27, .7) );--_nys-modal-gap--header: var(--nys-space-100, 8px);--_nys-modal-gap--footer: var(--nys-space-250, 20px);--_nys-modal-font-size: var( --nys-font-size-body-md, var(--nys-font-size-md, 16px) );--_nys-modal-font-size--subheader: var( --nys-font-size-body-lg, var(--nys-font-size-lg, 18px) );--_nys-modal-font-weight--header: var(--nys-font-weight-bold, 700);--_nys-modal-font-weight--subheader: var(--nys-font-weight-semibold, 600);--_nys-modal-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-modal-line-height--subheader: var(--nys-font-lineheight-body-lg, 28px);--_nys-modal-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) )}*{box-sizing:border-box}::slotted(*){max-width:100%;box-sizing:border-box}::slotted(p){margin:0!important}h2,p{flex:1;margin:0}.nys-modal-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;align-items:center;justify-content:center;z-index:1000;background:var(--_nys-modal-background-color--overlay)}.nys-modal{display:flex;flex-direction:column;max-height:calc(100vh - 2 * var(--_nys-modal-margin));margin:var(--_nys-modal-margin);padding:var(--_nys-modal-padding);gap:var(--_nys-modal-gap);width:var(--_nys-modal-width);border-radius:var(--_nys-modal-border-radius);border:var(--_nys-modal-border-width) solid var(--_nys-modal-border-color);font-family:var(--_nys-modal-font-family);font-size:var(--_nys-modal-font-size);line-height:var(--_nys-modal-line-height);background:var(--_nys-modal-background-color);position:relative;z-index:10000}.nys-modal_header{display:flex;flex-direction:column;align-items:flex-start;gap:var(--_nys-modal-gap--header)}.nys-modal_header p{font-size:var(--_nys-modal-font-size--subheader);font-weight:var(--_nys-modal-font-weight--subheader);line-height:var(--_nys-modal-line-height--subheader)}.nys-modal_header-inner{display:flex;align-items:center;justify-content:space-between;width:100%;font-weight:var(--_nys-modal-font-weight--header)}.nys-modal_body{display:flex;flex-direction:column;align-items:flex-start;min-height:0}.nys-modal_body-inner{overflow:auto;width:100%;max-height:100%}.nys-modal_body.hidden{display:none}.nys-modal_footer ::slotted(*){display:flex;flex-direction:column-reverse;justify-content:center;gap:var(--_nys-modal-gap--footer);align-self:stretch}.nys-modal_footer.hidden ::slotted(*){display:none}@media(min-width:480px){.nys-modal_footer ::slotted(*){flex-direction:row;justify-content:flex-end;align-items:center}.nys-modal{--_nys-modal-width: 439px}}@media(min-width:768px){.nys-modal{--_nys-modal-width: 600px}}@media(min-width:1024px){.nys-modal{--_nys-modal-width: 752px}}@media(min-width:1280px){.nys-modal{--_nys-modal-width: 840px}}';
var Iy = Object.defineProperty, on = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Iy(e, t, o), o;
};
const qi = class qi extends D {
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.heading = "", this.ariaLabel = "", this.subheading = "", this.open = !1, this.mandatory = !1, this.width = "md", this._actionButtonSlot = null, this._prevFocusedElement = null, this._originalBodyOverflow = null, this._mobileMedia = window.matchMedia("(max-width: 480px)"), this.hasBodySlots = !1, this.hasActionSlots = !1, this._boundHandleKeydown = (e) => this._handleKeydown(e), this._handleBodySlotChange = async () => {
      const e = this.shadowRoot?.querySelector("slot");
      e && (this.hasBodySlots = e.assignedNodes({ flatten: !0 }).some(
        (t) => t.nodeType === Node.ELEMENT_NODE || t.textContent?.trim()
      ));
    };
  }
  connectedCallback() {
    super.connectedCallback(), this._mobileMedia.addEventListener(
      "change",
      this._updateSlottedButtonWidth
    ), window.addEventListener("keydown", this._boundHandleKeydown);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._restoreBodyScroll(), this._mobileMedia.removeEventListener(
      "change",
      this._updateSlottedButtonWidth
    ), window.removeEventListener("keydown", this._boundHandleKeydown);
  }
  async updated(e) {
    e.has("open") && (this.open ? (this._hideBodyScroll(), this._dispatchOpenEvent(), await this.updateComplete, this._savePrevFocused(), this._focusOnModal()) : (this._restorePrevFocused(), this._restoreBodyScroll(), this._dispatchCloseEvent()));
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
      t.querySelectorAll("nys-button").forEach((n) => {
        e ? n?.setAttribute("fullWidth", "") : n?.removeAttribute("fullWidth");
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
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  async _handleKeydown(e) {
    if (this.open && (e.key === "Escape" && !this.mandatory && (e.preventDefault(), this._closeModal()), e.key === "Tab")) {
      const t = this.shadowRoot?.querySelector(".nys-modal");
      if (!t) return;
      const n = 'a[href], area[href], button:not([disabled]), details, iframe, object, input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [contentEditable="true"], [tabindex]:not([tabindex^="-"])', o = [], s = t.querySelector("nys-button");
      s && o.push(s);
      const i = Array.from(t.querySelectorAll("slot"));
      for (const d of i) {
        const p = d.assignedElements({ flatten: !0 });
        for (const b of p)
          b instanceof HTMLElement && b.matches(n) && o.push(b), b.querySelectorAll("nys-button").forEach(
            (m) => {
              o.push(m);
            }
          );
      }
      if (o.length > 0) {
        const d = o[0], p = o[o.length - 1];
        let b = document.activeElement, m = o.indexOf(
          b
        );
        if (e.shiftKey) {
          e.preventDefault();
          let x = m - 1;
          x < 0 && (x = o.length - 1), o[x].focus();
        } else
          b === p && (e.preventDefault(), d.focus());
      }
    }
  }
  _closeModal() {
    this.open = !1, this._dispatchCloseEvent();
  }
  render() {
    const e = !!this.heading?.trim(), t = e ? `${this.id}-heading` : void 0, n = e ? void 0 : this.ariaLabel?.trim() || void 0, o = this._getAriaDescribedBy() || void 0;
    return this.open ? y`<div class="nys-modal-overlay">
          <div
            class="nys-modal"
            tabindex="-1"
            role="dialog"
            aria-modal="true"
            aria-labelledby="${v(t)}"
            aria-label="${v(n)}"
            aria-describedby="${v(o)}"
          >
            <div class="nys-modal_header">
              <div class="nys-modal_header-inner">
                ${e ? y`<h2 id="${this.id}-heading">${this.heading}</h2>` : ""}
                ${this.mandatory ? "" : y`<nys-button
                      id="dismiss-modal"
                      circle
                      icon="close"
                      variant="ghost"
                      label="Close this window"
                      @nys-click=${this._closeModal}
                    ></nys-button>`}
              </div>
              ${this.subheading ? y`<p id="${this.id}-subheading">${this.subheading}</p>` : ""}
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
qi.styles = C(zy);
let ut = qi;
on([
  a({ type: String, reflect: !0 })
], ut.prototype, "id");
on([
  a({ type: String })
], ut.prototype, "heading");
on([
  a({ type: String })
], ut.prototype, "ariaLabel");
on([
  a({ type: String })
], ut.prototype, "subheading");
on([
  a({ type: Boolean, reflect: !0 })
], ut.prototype, "open");
on([
  a({ type: Boolean, reflect: !0 })
], ut.prototype, "mandatory");
on([
  a({ type: String, reflect: !0 })
], ut.prototype, "width");
on([
  $()
], ut.prototype, "hasBodySlots");
on([
  $()
], ut.prototype, "hasActionSlots");
customElements.get("nys-modal") || customElements.define("nys-modal", ut);
const Ry = ':host{--_nys-pagination-width: fit-content;--_nys-pagination-height: var(--nys-size-500, 40px);--_nys-pagination-radius: var(--nys-radius-xl, 12px);--_nys-pagination-gap: var(--nys-space-100, 8px);--_nys-pagination-font-size: var(--nys-font-size-ui-md, 16px);--_nys-pagination-font-weight: var(--nys-font-weight-semibold, 600);--_nys-pagination-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-pagination-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) )}.nys-pagination{width:var(--_nys-pagination-width);height:var(--_nys-pagination-height);border-radius:var(--_nys-pagination-radius);display:flex;align-items:center;justify-content:center;gap:var(--_nys-pagination-gap);font-family:var(--_nys-pagination-font-family);font-size:var(--_nys-pagination-font-size);font-weight:var(--_nys-pagination-font-weight);line-height:var(--_nys-pagination-line-height)}nys-button{--_nys-button-height: var(--_nys-pagination-height);--_nys-button-border-width: var(--nys-border-width-sm, 1px);--_nys-button-border-radius: var(--nys-radius-md, 4px);--_nys-button-padding--x: var(--nys-space-200, 16px)}nys-button[variant=outline]{--nys-button-background-color: var(--nys-color-ink-reverse, #ffffff);--nys-button-background-color--hover: var(--nys-color-neutral-10, #f6f6f6);--nys-button-background-color--active: var(--nys-color-neutral-50, #ededed);--nys-button-border-color: var(--nys-color-neutral-200, #bec0c1);--nys-button-border-color--hover: var(--nys-color-neutral-600, #62666a);--nys-button-border-color--active: var(--nys-color-neutral-900, #1b1b1b);--nys-button-color: var(--nys-color-link, #004dd1);--nys-button-color--hover: var(--nys-color-link-strong, #003ba1);--nys-button-color--active: var(--nys-color-link-strong, #003ba1)}nys-button[variant=filled]{--nys-button-background-color: var(--nys-color-link, #004dd1);--nys-button-background-color--hover: var(--nys-color-link-strong, #003ba1);--nys-button-background-color--active: var( --nys-color-link-strongest, #002971 );--nys-button-border-color: var(--nys-color-link, #004dd1);--nys-button-border-color--hover: var(--nys-color-link-strong, #003ba1);--nys-button-border-color--active: var(--nys-color-link-strongest, #002971);--nys-button-color: var(--nys-color-ink-reverse, #ffffff);--nys-button-color--hover: var(--nys-color-ink-reverse, #ffffff);--nys-button-color--active: var(--nys-color-ink-reverse, #ffffff)}nys-button#previous,nys-button#next,nys-button#previous--mobile,nys-button#next--mobile{--nys-button-color: var(--nys-color-text, #1b1b1b);--nys-button-color--hover: var(--nys-color-text, #1b1b1b);--nys-button-color--active: var(--nys-color-text, #1b1b1b);--_nys-button-padding--x: var(--nys-space-150, 12px)}nys-button#previous--mobile,nys-button#next--mobile{display:none}.nys-pagination__ellipsis{box-sizing:border-box;display:flex;align-items:center;justify-content:center;height:var(--_nys-pagination-height);padding-inline:var(--nys-space-2px, 2px);color:var(--nys-color-text, #1b1b1b)}:host([currentPage="3"]) #first-spacer,:host([_twoBeforeLast]) #last-spacer{display:none}@media(min-width:0)and (max-width:767px){nys-button#prev-page,nys-button#next-page{display:none}:host([currentPage="3"]) #first-spacer,:host([_twoBeforeLast]) #last-spacer{display:flex}nys-button#previous--mobile,nys-button#next--mobile{display:block}nys-button#previous,nys-button#next{display:none}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}';
var Oy = Object.defineProperty, $r = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Oy(e, t, o), o;
};
const Hi = class Hi extends D {
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   */
  constructor() {
    super(), this.id = "", this.name = "", this.currentPage = 1, this.totalPages = 1, this._twoBeforeLast = !1, this._focusKeyBeforeUpdate = null, this._focusRestoreToken = 0;
  }
  willUpdate(e) {
    if (this.totalPages < 1 && (this.totalPages = 1), e.has("currentPage") || e.has("totalPages")) {
      const t = this._clampPage(this.currentPage);
      t !== this.currentPage && (this.currentPage = t);
      const n = this.currentPage === this.totalPages - 2;
      n !== this._twoBeforeLast && (this._twoBeforeLast = n);
    }
    this._focusKeyBeforeUpdate = this._focusKeyOf(
      this.shadowRoot?.activeElement ?? null
    );
  }
  updated() {
    const e = this._focusKeyBeforeUpdate;
    this._focusKeyBeforeUpdate = null, e && this._restoreFocus(e);
  }
  connectedCallback() {
    super.connectedCallback();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _clampPage(e) {
    return e < 1 ? 1 : e > this.totalPages ? this.totalPages : e;
  }
  /**
   * Stable identity for a control in the shadow root, one that survives a re-render.
   *
   * DOM position is not that identity: the window of visible page numbers slides as the
   * user pages through, and Lit reuses the element sitting at a given position, so the
   * button under the user's focus silently starts navigating to a different page. Page
   * buttons are therefore identified by the page they navigate to, and the fixed
   * Previous/Next controls by their id.
   */
  _focusKeyOf(e) {
    if (!e) return null;
    const t = e.getAttribute("data-page");
    return t ? `page:${t}` : e.id ? `control:${e.id}` : null;
  }
  /** Resolve a focus key back to the control that now carries that identity. */
  _controlForKey(e) {
    const t = this.shadowRoot;
    if (!t) return null;
    const n = e.indexOf(":"), o = e.slice(0, n), s = e.slice(n + 1);
    return o === "page" ? t.querySelector(`nys-button[data-page="${s}"]`) : t.getElementById(s);
  }
  /**
   * A control has to be both enabled and rendered to take focus. `getClientRects()`
   * covers the responsive rules that swap the desktop Previous/Next for their
   * icon-only mobile twins, and hide the page neighbors on narrow screens.
   */
  _isFocusable(e) {
    return !!e && !e.hasAttribute("disabled") && e.getClientRects().length > 0;
  }
  /**
   * Where focus goes when the control the user was on is gone or has just been
   * disabled: the current page's button. It is always rendered, it is never disabled,
   * and it announces the page the user just landed on.
   */
  _fallbackFocusTarget() {
    const e = this.shadowRoot;
    if (!e) return null;
    const t = e.querySelector(
      `nys-button[data-page="${this.currentPage}"]`
    );
    return this._isFocusable(t) ? t : Array.from(
      e.querySelectorAll("nys-button")
    ).find((o) => this._isFocusable(o)) ?? null;
  }
  /**
   * Keep keyboard focus on the control the user was operating.
   *
   * Two things pull focus out from under them otherwise. Reaching the first or last page
   * disables Previous/Next while it still holds focus, which drops focus to `<body>` and
   * ends the keyboard journey. And activating a page slides the window of page numbers,
   * so the button that keeps focus by DOM position is now a different, non-current page.
   */
  async _restoreFocus(e) {
    const t = this.shadowRoot;
    if (!t) return;
    const n = Array.from(t.querySelectorAll("nys-button")), o = ++this._focusRestoreToken;
    if (await Promise.allSettled(
      n.map((d) => d.updateComplete)
    ), o !== this._focusRestoreToken || !this.isConnected) return;
    const s = this._controlForKey(e), i = this._isFocusable(s) ? s : this._fallbackFocusTarget();
    i && i !== t.activeElement && i.focus();
  }
  renderPageButtons() {
    const e = [], t = (p, b) => {
      const m = p === this.currentPage;
      e.push(y`
        <nys-button
          label=${String(p)}
          ariaCurrent=${v(m ? "page" : void 0)}
          data-page=${p}
          id=${v(b)}
          variant=${m ? "filled" : "outline"}
          size="sm"
          @nys-click="${() => this._handlePageClick(p)}"
        ></nys-button>
      `);
    }, n = (p) => {
      e.push(
        y`<span class="nys-pagination__ellipsis" id=${p} aria-hidden="true"
          >...</span
        >`
      );
    }, s = this.totalPages, i = this.currentPage - 1, d = this.currentPage + 1;
    return t(1), this.currentPage > 2 && n("first-spacer"), i > 1 && t(i, "prev-page"), this.currentPage !== 1 && this.currentPage !== s && t(this.currentPage, "current-page"), d < s && t(d, "next-page"), this.currentPage < s - 1 && n("last-spacer"), s > 1 && t(s), e;
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
    return this.totalPages <= 1 ? null : y`<nav class="nys-pagination" aria-label="Pagination">
      <nys-button
        id="previous"
        label="Previous"
        prefixIcon="chevron_left"
        variant="outline"
        size="sm"
        ?disabled=${this.currentPage === 1}
        @nys-click="${() => this._handlePageClick(this.currentPage - 1)}"
      ></nys-button>
      <nys-button
        id="previous--mobile"
        prefixIcon="chevron_left"
        variant="outline"
        size="sm"
        ?disabled=${this.currentPage === 1}
        @nys-click="${() => this._handlePageClick(this.currentPage - 1)}"
        ><span class="sr-only">Previous Page</span></nys-button
      >
      ${this.renderPageButtons()}
      <nys-button
        id="next"
        label="Next"
        suffixIcon="chevron_right"
        variant="outline"
        size="sm"
        ?disabled=${this.currentPage === this.totalPages}
        @nys-click="${() => this._handlePageClick(this.currentPage + 1)}"
      ></nys-button>
      <nys-button
        id="next--mobile"
        suffixIcon="chevron_right"
        variant="outline"
        size="sm"
        ?disabled=${this.currentPage === this.totalPages}
        @nys-click="${() => this._handlePageClick(this.currentPage + 1)}"
        ><span class="sr-only">Next Page</span></nys-button
      >
    </nav>`;
  }
  /****************** 🪡 in the Haystack Release ******/
  /****************** designsystem@its.ny.gov ********/
};
Hi.styles = C(Ry);
let wn = Hi;
$r([
  a({ type: String, reflect: !0 })
], wn.prototype, "id");
$r([
  a({ type: String, reflect: !0 })
], wn.prototype, "name");
$r([
  a({ type: Number, reflect: !0 })
], wn.prototype, "currentPage");
$r([
  a({ type: Number, reflect: !0 })
], wn.prototype, "totalPages");
$r([
  a({ type: Boolean, reflect: !0 })
], wn.prototype, "_twoBeforeLast");
customElements.get("nys-pagination") || customElements.define("nys-pagination", wn);
const My = '@charset "UTF-8";:host{display:block;--_nys-processlist-gap: var(--nys-space-150, 12px);--_nys-processlist-theme--step: var(--nys-color-theme, #154973);--_nys-processlist-theme--connector: var(--nys-color-theme-weak, #cddde9);--_nys-processlist-color--step: var(--_nys-processlist-theme--step);--_nys-processlist-background-color--step: var(--nys-color-surface, #ffffff);--_nys-processlist-border-color--step: var(--_nys-processlist-theme--step);--_nys-processlist-color--connector: var(--_nys-processlist-theme--connector);--_nys-processlist-width--connector: var(--nys-size-2px, 2px);--_nys-processlist-size--step: var(--nys-size-400, 32px);--_nys-processlistitem-min-height: var(--nys-space-600, 48px);--_nys-processlistitem-gap: var(--nys-space-250, 20px);--_nys-processlistitem-padding-top: var(--nys-space-50, 4px);--_nys-processlistitem-font-family: var(--nys-font-family-ui, "Proxima Nova");--_nys-processlistitem-font-size: var(--nys-font-size-ui-lg, 18px);--_nys-processlistitem-font-weight: 600;--_nys-processlistitem-line-height: var(--nys-font-lineheight-ui-lg, 28px);--_nys-processlistitem-letter-spacing: var( --nys-font-letterspacing-ui-lg, .028px );--_nys-processlistitem-font-size--description: var( --nys-font-size-ui-md, 16px );--_nys-processlistitem-font-weight--description: var( --nys-font-weight-regular, 400 );--_nys-processlistitem-line-height--description: var( --nys-font-lineheight-ui-md, 24px );--_nys-processlistitem-letter-spacing--description: var( --nys-font-letterspacing-ui-md, .044px );--_nys-processlistitem-color--label: var(--nys-color-text, #1b1b1b);--_nys-processlistitem-color--description: var( --nys-color-text-weak, #4a4d4f );--_nys-processlistitem-gap--text: var(--nys-space-4px, 4px)}.nys-processlistitem{display:flex;gap:var(--_nys-processlist-gap)}.nys-processlistitem__stepwrapper{min-height:var(--_nys-processlistitem-min-height);display:flex;align-items:center;flex-direction:column}.nys-processlistitem__step{min-width:var(--_nys-processlist-size--step);width:var(--_nys-processlist-size--step);max-width:var(--_nys-processlist-size--step);min-height:var(--_nys-processlist-size--step);height:var(--_nys-processlist-size--step);max-height:var(--_nys-processlist-size--step);display:flex;align-items:center;justify-content:center;color:var(--_nys-processlist-color--step);background-color:var(--_nys-processlist-background-color--step);border:solid var(--nys-size-1px) var(--_nys-processlist-border-color--step);border-radius:var(--nys-radius-round);text-align:center;font-family:var(--_nys-processlistitem-font-family);font-size:var(--_nys-processlistitem-font-size);font-style:normal;font-weight:var(--_nys-processlistitem-font-weight);line-height:var(--_nys-processlistitem-line-height);letter-spacing:var(--_nys-processlistitem-letter-spacing)}.nys-processlistitem__connector{height:-moz-available;height:-webkit-fill-available;height:fill-available;background-color:var(--_nys-processlist-color--connector);width:var(--_nys-processlist-width--connector)}:host(:last-of-type) .nys-processlistitem__connector{display:none}.nys-processlistitem__content{width:100%;margin-bottom:var(--_nys-processlistitem-gap);padding-top:var(--_nys-processlistitem-padding-top);display:flex;flex-direction:column;align-items:flex-start;gap:var(--_nys-processlistitem-gap--text);font-family:var(--_nys-processlistitem-font-family);font-style:normal;text-align:left}.nys-processlistitem__label{color:var(--_nys-processlistitem-color--label);font-size:var(--_nys-processlistitem-font-size);font-weight:var(--_nys-processlistitem-font-weight);line-height:var(--_nys-processlistitem-line-height);letter-spacing:var(--_nys-processlistitem-letter-spacing)}.nys-processlistitem__description{margin:0;color:var(--_nys-processlistitem-color--description);font-size:var(--_nys-processlistitem-font-size--description);font-weight:var(--_nys-processlistitem-font-weight--description);line-height:var(--_nys-processlistitem-line-height--description);letter-spacing:var(--_nys-processlistitem-letter-spacing--description)}';
var Py = Object.defineProperty, Si = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Py(e, t, o), o;
};
const Vi = class Vi extends D {
  constructor() {
    super(...arguments), this.label = "", this.description = "", this._step = 1;
  }
  /**
   * A description is shown when either the property or the slot has content, so an item with
   * neither renders no empty paragraph.
   */
  get _hasDescription() {
    return !!this.description || !!this.querySelector('[slot="description"]');
  }
  /**
   * Sets the rendered step number.
   * @internal Called by `<nys-processlist>`; not intended for direct use.
   */
  setStep(e) {
    this._step = e;
  }
  connectedCallback() {
    super.connectedCallback(), !this.hasAttribute("role") && this.parentElement?.tagName.toLowerCase() === "nys-processlist" && this.setAttribute("role", "listitem");
  }
  render() {
    return y`
      <div class="nys-processlistitem">
        <!-- Not aria-hidden: role="list" carries no ordering, so the rendered
             number is the only thing conveying sequence to assistive tech. -->
        <div class="nys-processlistitem__stepwrapper">
          <div class="nys-processlistitem__step">${this._step}</div>
          <div class="nys-processlistitem__connector"></div>
        </div>
        <div class="nys-processlistitem__content">
          <div class="nys-processlistitem__label">${this.label}</div>
          ${this._hasDescription ? y`<p class="nys-processlistitem__description">
                <slot name="description">${this.description}</slot>
              </p>` : ""}
        </div>
      </div>
    `;
  }
};
Vi.styles = C(My);
let Io = Vi;
Si([
  a({ type: String })
], Io.prototype, "label");
Si([
  a({ type: String })
], Io.prototype, "description");
Si([
  $()
], Io.prototype, "_step");
customElements.get("nys-processlistitem") || customElements.define("nys-processlistitem", Io);
const Ny = 'nys-processlist{display:block;max-width:784px}nys-processlist>:not(nys-processlistitem){display:none}nys-processlist[strong]>nys-processlistitem{--_nys-processlist-color--step: var(--nys-color-surface, #ffffff);--_nys-processlist-background-color--step: var( --_nys-processlist-theme--step )}nys-processlist[neutral]>nys-processlistitem{--_nys-processlist-theme--step: var(--nys-color-neutral-600, #62666a);--_nys-processlist-theme--connector: var(--nys-color-neutral-100, #d0d0ce)}nys-processlist[strong][neutral]>nys-processlistitem{--_nys-processlist-theme--connector: var(--nys-color-neutral-200, #bec0c1)}nys-processlist[size=sm]>nys-processlistitem{--_nys-processlistitem-font-family: var(--nys-font-family-ui, "Proxima Nova");--_nys-processlistitem-font-size: var(--nys-font-size-ui-sm, 14px);--_nys-processlistitem-font-weight: 600;--_nys-processlistitem-line-height: var(--nys-font-lineheight-ui-sm, 24px);--_nys-processlistitem-letter-spacing: var( --p-type-unpublished-font-letterspacing-ui-sm, .044px );--_nys-processlist-size--step: var(--nys-size-300, 24px);--_nys-processlistitem-padding-top: var(--nys-space-1px, 1px);--_nys-processlistitem-font-size--description: var( --nys-font-size-ui-sm, 14px );--_nys-processlistitem-line-height--description: var( --nys-font-lineheight-ui-sm, 24px );--_nys-processlistitem-letter-spacing--description: var( --nys-font-letterspacing-ui-sm, .044px )}';
var By = Object.defineProperty, Sr = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && By(e, t, o), o;
};
let Kr = null;
function Fy() {
  Kr || typeof document > "u" || (Kr = new CSSStyleSheet(), Kr.replaceSync(Ny), document.adoptedStyleSheets = [...document.adoptedStyleSheets, Kr]);
}
class Fo extends D {
  constructor() {
    super(...arguments), this.id = "", this.strong = !1, this.neutral = !1, this.size = "md", this.initialStep = 1, this._childObserver = new MutationObserver(() => this._syncSteps()), this._warnedChildren = /* @__PURE__ */ new WeakSet();
  }
  // The host must not be a shadow host: Chrome ≥150 demotes role="listitem"
  // on elements slotted into a shadow-host list, so the items have to be
  // direct DOM children of the element carrying role="list".
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback(), Fy(), this.hasAttribute("role") || this.setAttribute("role", "list"), this._childObserver.observe(this, { childList: !0 }), this._syncSteps();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._childObserver.disconnect();
  }
  updated(e) {
    super.updated(e), e.has("initialStep") && this._syncSteps();
  }
  // Ordering lives on the list, not the item, so numbers stay correct when
  // items are added, removed, or reordered.
  _syncSteps() {
    const e = Array.from(this.children).filter(
      (n) => n.tagName.toLowerCase() === "nys-processlistitem"
    );
    Array.from(this.children).forEach((n) => {
      n.tagName.toLowerCase() !== "nys-processlistitem" && !this._warnedChildren.has(n) && (this._warnedChildren.add(n), console.warn(
        `nys-processlist: <${n.tagName.toLowerCase()}> is not a <nys-processlistitem> and will be hidden (display: none), removing it from the accessibility tree. Only <nys-processlistitem> elements are supported as children.`,
        n
      ));
    });
    const t = Number.isFinite(this.initialStep) && this.initialStep >= 1 ? Math.floor(this.initialStep) : 1;
    e.forEach((n, o) => {
      n.setStep(o + t);
    });
  }
}
Sr([
  a({ type: String, reflect: !0 })
], Fo.prototype, "id");
Sr([
  a({ type: Boolean, reflect: !0 })
], Fo.prototype, "strong");
Sr([
  a({ type: Boolean, reflect: !0 })
], Fo.prototype, "neutral");
Sr([
  a({ type: String, reflect: !0 })
], Fo.prototype, "size");
Sr([
  a({ type: Number, reflect: !0 })
], Fo.prototype, "initialStep");
customElements.get("nys-processlist") || customElements.define("nys-processlist", Fo);
const qy = `nys-radiobutton{--_nys-radiobutton-size: var(--nys-size-400, 32px);--_nys-radiobutton-border-radius: var(--nys-radius-md, 4px);--_nys-radiobutton-border-width: var(--nys-border-width-md, 2px);--_nys-radiobutton-outline-color: var(--nys-color-focus, #004dd1);--_nys-radiobutton-outline-width: var(--nys-border-width-md, 2px);--_nys-radiobutton-outline-offset: var(--nys-space-2px, 2px);--_nys-radiobutton-gap: var(--nys-space-150, 12px);--_nys-radiogroup-gap: var(--nys-space-200, 16px);--_nys-radiobutton-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-radiobutton-font-size: var(--nys-font-size-ui-md, 16px);--_nys-radiobutton-font-weight--label: var(--nys-font-weight-regular, 400);--_nys-radiobutton-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-radiobutton-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-radiobutton-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-radiobutton-border-color: var(--nys-color-neutral-600, #62666a);--_nys-radiobutton-background-color--hover: var( --nys-color-neutral-50, #ededed );--_nys-radiobutton-border-color--hover: var(--nys-color-ink, #1b1b1b);--_nys-radiobutton-background-color--active: var( --nys-color-neutral-100, #d0d0ce );--_nys-radiobutton-border-color--active: var(--nys-color-ink, #1b1b1b);--_nys-radiobutton-background-color--checked: var(--nys-color-theme, #154973);--_nys-radiobutton-background-color--disabled: var( --nys-color-ink-reverse, #f0f0f0 );--_nys-radiobutton-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-radiobutton-border-color--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-radiobutton-background-color--checked--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-radiobutton-border-color--checked--disabled: var( --nys-color-neutral-100, #d0d0ce )}nys-radiobutton[size=sm]{--_nys-radiobutton-size: var(--nys-size-300, 24px);--_nys-radiobutton-border-radius: var(--nys-radius-sm, 2px);--_nys-radiogroup-gap: var(--nys-space-100, 8px);--_nys-radiobutton-gap: var(--nys-space-100, 8px)}nys-radiobutton[size=md]{--_nys-radiobutton-size: var(--nys-size-400, 32px);--_nys-radiobutton-border-radius: var(--nys-radius-md, 4px);--_nys-radiogroup-gap: var(--nys-space-200, 16px);--_nys-radiobutton-gap: var(--nys-space-150, 12px)}nys-radiobutton[tile]{--_nys-radiobutton-font-weight--label: var(--nys-font-weight-semibold, 600);--_nys-radiobutton-border-width--tile: var(--nys-border-width-sm, 1px);--_nys-radiobutton-border-radius--tile: var(--nys-radius-md, 4px);--_nys-radiobutton-border-color--tile: var(--nys-color-neutral-100, #d0d0ce);--_nys-radiobutton-background-color--tile: var( --nys-color-ink-reverse, #ffffff );--_nys-radiobutton-padding--x--tile: var(--nys-space-250, 20px);--_nys-radiobutton-padding--y--tile: var(--nys-space-200, 16px);--_nys-radiobutton-border-color--tile--hover: var( --nys-color-neutral-700, #4a4d4f );--_nys-radiobutton-background-color--tile--hover: var( --nys-color-ink-reverse, #ffffff );--_nys-radiobutton-border-color--tile--active: var( --nys-color-neutral-900, #1b1b1b );--_nys-radiobutton-background-color--tile--active: var( --nys-color-ink-reverse, #ffffff );--_nys-radiobutton-border-color--tile--checked: var( --nys-color-theme-mid, #457aa5 );--_nys-radiobutton-background-color--tile--checked: var( --nys-color-theme-faint, #f7fafd );--_nys-radiobutton-border-color--tile--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-radiobutton-background-color--tile--disabled: var( --nys-color-ink-reverse, #ffffff )}nys-radiobutton[tile][size=sm]{--_nys-radiobutton-padding--x--tile: var(--nys-space-200, 16px);--_nys-radiobutton-padding--y--tile: var(--nys-space-150, 12px)}.nys-radiogroup{display:flex;flex-direction:column;gap:var(--nys-space-200, 16px);font-family:var(--_nys-radiobutton-font-family);font-size:var(--_nys-radiobutton-font-size);line-height:var(--_nys-radiobutton-line-height)}.nys-radiogroup legend{margin-bottom:var(--nys-space-200, 16px)}.nys-radiogroup__content{gap:var(--_nys-radiogroup-gap);display:flex;flex-direction:column}.nys-radiobutton{display:flex;flex-direction:column;font-family:var(--_nys-radiobutton-font-family);font-size:var(--_nys-radiobutton-font-size);line-height:var(--_nys-radiobutton-line-height);border-radius:var(--_nys-radiobutton-border-radius--tile);border:var(--_nys-radiobutton-border-width--tile) solid var(--_nys-radiobutton-border-color--tile);background-color:var(--_nys-radiobutton-background-color--tile);padding:var(--_nys-radiobutton-padding--y--tile) var(--_nys-radiobutton-padding--x--tile)}.nys-radiobutton__radio{appearance:none;width:var(--_nys-radiobutton-size);height:var(--_nys-radiobutton-size);min-width:var(--_nys-radiobutton-size);min-height:var(--_nys-radiobutton-size);max-width:var(--_nys-radiobutton-size);max-height:var(--_nys-radiobutton-size);border:solid var(--_nys-radiobutton-border-width) var(--_nys-radiobutton-border-color);border-radius:100%;background-size:contain;outline-offset:var(--_nys-radiobutton-outline-offset);outline:none;margin:0 0 auto;box-sizing:border-box}.nys-radiobutton:hover,.nys-radiobutton:hover *{cursor:pointer}.nys-radiobutton__radio:not(:disabled):checked{background-image:url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" stroke="white" stroke-width="6"/></svg>');background-color:var(--_nys-radiobutton-background-color--checked)}nys-radiobutton[tile] .nys-radiobutton:has(.nys-radiobutton__radio:not(:disabled):checked){border-color:var(--_nys-radiobutton-border-color--tile--checked);background-color:var(--_nys-radiobutton-background-color--tile--checked)}nys-radiobutton[tile] .nys-radiobutton:has(.nys-radiobutton__radio:not(:disabled):checked:hover){cursor:default}.nys-radiobutton__radio:disabled:checked{background-image:url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" stroke="white" stroke-width="6"/></svg>');border-color:var(--_nys-radiobutton-border-color--checked--disabled);background-color:var(--_nys-radiobutton-background-color--checked--disabled)}nys-radiobutton[tile] .nys-radiobutton:has(.nys-radiobutton__radio:disabled){border-color:var(--_nys-radiobutton-border-color--tile--disabled);background-color:var(--_nys-radiobutton-background-color--tile--disabled)}.nys-radiobutton__radio:disabled{background-color:var(--_nys-radiobutton-background-color--disabled);border-color:var(--_nys-radiobutton-border-color--disabled);cursor:not-allowed}.nys-radiobutton__radio:hover:not(:disabled):not(:checked),.nys-radiobutton:hover .nys-radiobutton__radio:not(:disabled):not(:checked){border-color:var(--_nys-radiobutton-border-color--hover);background-color:var(--_nys-radiobutton-background-color--hover)}nys-radiobutton[tile] .nys-radiobutton:hover:has(.nys-radiobutton__radio:not(:disabled):not(:checked)){border-color:var(--_nys-radiobutton-border-color--tile--hover);background-color:var(--_nys-radiobutton-background-color--tile--hover);outline:solid var(--_nys-radiobutton-border-width--tile) var(--_nys-radiobutton-border-color--tile--hover)}.nys-radiobutton__radio:active:not(:disabled):not(:checked),.nys-radiobutton:active .nys-radiobutton__radio:not(:disabled):not(:checked){border-color:var(--_nys-radiobutton-border-color--active);background-color:var(--_nys-radiobutton-background-color--active)}nys-radiobutton[tile] .nys-radiobutton:active:has(.nys-radiobutton__radio:not(:disabled):not(:checked)){border-color:var(--_nys-radiobutton-border-color--tile--active);background-color:var(--_nys-radiobutton-background-color--tile--active);outline:solid var(--_nys-radiobutton-border-width--tile) var(--_nys-radiobutton-border-color--tile--active)}nys-radiobutton:focus-visible{outline:none}nys-radiobutton:focus-visible .nys-radiobutton__radio{outline:solid var(--_nys-radiobutton-outline-width) var(--_nys-radiobutton-outline-color)}.nys-radiobutton__radio:focus-visible,.nys-radiobutton__radio--force-outline{outline:solid var(--_nys-radiobutton-outline-width) var(--_nys-radiobutton-outline-color);outline-offset:var(--_nys-radiobutton-outline-offset)}.nys-radiobutton__main-container{display:flex;align-items:center}.nys-radiobutton__other-container{display:flex;padding-inline-start:calc(var(--_nys-radiobutton-size) + var(--_nys-radiobutton-gap))}.nys-radiobutton__main-container>nys-label{--_nys-label-font-weight: var(--_nys-radiobutton-font-weight--label);display:flex;padding-inline-start:var(--_nys-radiobutton-gap)}nys-radiobutton[tile] .nys-radiobutton__main-container>nys-label{--_nys-description-font-style: normal}.nys-radiobutton:has(.nys-radiobutton__radio:disabled) .nys-radiobutton__main-container>nys-label,.nys-radiobutton:has(.nys-radiobutton__radio:disabled) .nys-radiobutton__main-container>nys-label *{cursor:not-allowed;--_nys-label-cursor: not-allowed;--_nys-label-color: var(--_nys-radiobutton-color--disabled);--_nys-description-color: var(--_nys-radiobutton-color--disabled);color:var(--_nys-radiobutton-color--disabled)}`;
var Hy = Object.defineProperty, Be = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Hy(e, t, o), o;
};
let Zr = null;
function Vy() {
  Zr || typeof document > "u" || (Zr = new CSSStyleSheet(), Zr.replaceSync(qy), document.adoptedStyleSheets = [...document.adoptedStyleSheets, Zr]);
}
class Le extends pt {
  constructor() {
    super(...arguments), this.checked = !1, this.disabled = !1, this.required = !1, this.label = "", this.description = "", this.id = "", this.name = "", this.value = "", this.form = null, this.size = "md", this.tile = !1, this.other = !1, this.showOtherError = !1, this.labelledby = "", this.hideLabel = !1, this._handleInvalid = () => {
      this._inputEl?.classList.add("nys-radiobutton__radio--force-outline");
    }, this._handleFocusOut = () => {
      this._inputEl?.classList.remove("nys-radiobutton__radio--force-outline");
    }, this._handleWrapperClick = () => {
      this.disabled || this._inputEl?.click();
    };
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  createRenderRoot() {
    return this;
  }
  connectedCallback() {
    super.connectedCallback(), Vy();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this._isGrouped() || (this._updateGroupValidity(), this._forwardDescriptionSlot());
  }
  updated(e) {
    e.has("checked") && this.setHostAria("ariaChecked", String(this.checked)), e.has("disabled") && this.setHostAria("ariaDisabled", String(this.disabled)), e.has("required") && this.setHostAria("ariaRequired", String(this.required)), (e.has("checked") || e.has("value") || e.has("disabled")) && this.setFormValue(null), (e.has("checked") || e.has("required") || e.has("disabled")) && this._updateGroupValidity(), e.has("description") && (this._isGrouped() || this._forwardDescriptionSlot());
  }
  /**
   * Public validation API (Form Association)
   * --------------------------------------------------------------------------
   */
  get validity() {
    return this.internals?.validity;
  }
  get validationMessage() {
    return this.internals?.validationMessage ?? "";
  }
  // Check if any radios in the individual "name" group is checked.
  _isGroupChecked() {
    return this._getGroupMembers().some((e) => e.checked);
  }
  // Invalid only when required AND no member of the group is checked.
  // Grouped instances defer to nys-radiogroup.
  _updateValidity() {
    this._isGrouped() || !this._inputEl || (this.required && !this.disabled && !this._isGroupChecked() ? this.setValidityFromState(
      { valueMissing: !0 },
      "Please select an option.",
      this._inputEl
    ) : this.clearValidity());
  }
  _updateGroupValidity() {
    this._isGrouped() || this._getGroupMembers().forEach((e) => e._updateValidity());
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _isGrouped() {
    return !!this.closest("nys-radiogroup");
  }
  _getGroupMembers() {
    const e = this.getRootNode();
    return Array.from(
      e.querySelectorAll(
        `nys-radiobutton[name="${this.name}"]`
      )
    ).filter((n) => !n.closest("nys-radiogroup"));
  }
  // Unchecks every group member except the one just selected
  _uncheckOtherRadios(e) {
    this._getGroupMembers().filter((t) => t !== e).forEach((t) => t.checked = !1);
  }
  focus(e) {
    this._inputEl?.focus(e);
  }
  _forwardDescriptionSlot() {
    const e = this.querySelector('[slot="description"]'), t = this.querySelector("nys-label");
    e && t && t.appendChild(e);
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  async _handleChange() {
    this.checked || this.disabled || (this._inputEl?.classList.remove("nys-radiobutton__radio--force-outline"), this.checked = !0, this._isGrouped() || this._uncheckOtherRadios(this), this.dispatchEvent(
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
    ));
  }
  // Note to self:
  // Theoretically this function is no longer needed with the new change. But account for future revamp to "eat our own dog food"
  // within the radiogroup, we may need this function to keep track of navigation into the "other option". So keeping function until then.
  async _handleKeydown(e) {
    if (this._isGrouped()) return;
    const t = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (t === void 0 || this.closest("nys-radiogroup")) return;
    e.preventDefault();
    const n = this._getGroupMembers().filter((i) => !i.disabled);
    if (n.length <= 1) return;
    const o = (n.indexOf(this) + t + n.length) % n.length, s = n[o];
    s.checked = !0, this._uncheckOtherRadios(s), await s.updateComplete, s.focus();
  }
  /** The text the internal `<nys-label>` shows, and the last-resort name. */
  get _labelText() {
    return this.label || (this.other ? "Other" : "");
  }
  /**
   * This component renders into the light DOM (see createRenderRoot), so the
   * native <input>, the internal <nys-label>, and any external labelling element
   * all share one tree scope: a plain aria-labelledby IDREF resolves natively and
   * needs none of the cross-shadow machinery (associateControlRefs) that
   * nys-checkbox requires.
   *
   * When the referenced element is a <nys-label>, its text lives in ITS shadow
   * root; the reference still names the input because nys-label mirrors `label`
   * onto its host via ElementInternals.ariaLabel — do not remove that mirror.
   * That mirror is also why the internal label must NOT be aria-hidden: the name
   * is read from the element the user can see, which is the whole point.
   */
  get _hasExternalLabel() {
    return !!this.labelledby;
  }
  // The internal <nys-label> is dropped when hidden, when an external label
  // supersedes it, or when there is nothing to label with. `nothing` (not a
  // boolean) so lit never renders the literal string "false".
  get _renderInternalLabel() {
    return !this.hideLabel && !this._hasExternalLabel && !!this._labelText;
  }
  /** Id of the internal `<nys-label>`, which is also what names the input. */
  get _internalLabelId() {
    return `${this.id}-label`;
  }
  /**
   * The `aria-labelledby` IDREF for the native input, resolved in priority order:
   * an author-supplied `labelledby` first, then the visible internal label.
   *
   * Naming the input from the element the user can actually see is what keeps the
   * accessible name and the visible text identical (WCAG 2.5.3 Label in Name).
   * The old path built a separate `aria-label` string from the same `label` prop,
   * which is a copy that can drift and that voice-control users cannot rely on
   * (#1820). This component renders into the light DOM, so a plain IDREF resolves
   * natively in one tree scope.
   */
  get _labelledById() {
    if (this._hasExternalLabel) return this.labelledby;
    if (this._renderInternalLabel) return this._internalLabelId;
  }
  /**
   * Last-resort accessible name, used only when `hideLabel` suppressed the visible
   * label and no external `labelledby` was given. There is no element left to point
   * at, and a nameless radio is worse than a duplicated string.
   */
  get _fallbackAriaLabel() {
    return this._labelledById ? void 0 : this._labelText || void 0;
  }
  render() {
    return y`
      <div class="nys-radiobutton" @click=${this._handleWrapperClick}>
        <div class="nys-radiobutton__main-container">
          <input
            id="input-${this.id}"
            type="radio"
            class="nys-radiobutton__radio"
            name="${v(
      this.name && !this._isGrouped() ? this.name : void 0
    )}"
            .checked=${this.checked}
            ?disabled=${this.disabled}
            .value=${this.value}
            ?required="${this.required}"
            form=${v(this.form || void 0)}
            @change="${this._handleChange}"
            @keydown="${this._handleKeydown}"
            @blur="${this._handleFocusOut}"
            aria-labelledby=${v(this._labelledById)}
            aria-label=${v(this._fallbackAriaLabel)}
          />
          ${this._renderInternalLabel ? y`<nys-label
                id="${this._internalLabelId}"
                label="${this._labelText}"
                description=${v(this.description || void 0)}
              >
              </nys-label>` : Wn}
        </div>
      </div>
    `;
  }
}
Be([
  a({ type: Boolean, reflect: !0 })
], Le.prototype, "checked");
Be([
  a({ type: Boolean, reflect: !0 })
], Le.prototype, "disabled");
Be([
  a({ type: Boolean, reflect: !0 })
], Le.prototype, "required");
Be([
  a({ type: String })
], Le.prototype, "label");
Be([
  a({ type: String })
], Le.prototype, "description");
Be([
  a({ type: String, reflect: !0 })
], Le.prototype, "id");
Be([
  a({ type: String, reflect: !0 })
], Le.prototype, "name");
Be([
  a({ type: String })
], Le.prototype, "value");
Be([
  a({ type: String, reflect: !0 })
], Le.prototype, "form");
Be([
  a({ type: String, reflect: !0 })
], Le.prototype, "size");
Be([
  a({ type: Boolean, reflect: !0 })
], Le.prototype, "tile");
Be([
  a({ type: Boolean, reflect: !0 })
], Le.prototype, "other");
Be([
  a({ type: Boolean })
], Le.prototype, "showOtherError");
Be([
  a({ type: String })
], Le.prototype, "labelledby");
Be([
  a({ type: Boolean })
], Le.prototype, "hideLabel");
Be([
  to("input")
], Le.prototype, "_inputEl");
customElements.get("nys-radiobutton") || customElements.define("nys-radiobutton", Le);
const Uy = `:host{--_nys-radiobutton-size: var(--nys-size-400, 32px);--_nys-radiobutton-border-radius: var(--nys-radius-md, 4px);--_nys-radiobutton-border-width: var(--nys-border-width-md, 2px);--_nys-radiobutton-outline-color: var(--nys-color-focus, #004dd1);--_nys-radiobutton-outline-width: var(--nys-border-width-md, 2px);--_nys-radiobutton-outline-offset: var(--nys-space-2px, 2px);--_nys-radiobutton-gap: var(--nys-space-150, 12px);--_nys-radiogroup-gap: var(--nys-space-200, 16px);--_nys-radiobutton-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-radiobutton-font-size: var(--nys-font-size-ui-md, 16px);--_nys-radiobutton-font-weight--label: var(--nys-font-weight-regular, 400);--_nys-radiobutton-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-radiobutton-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-radiobutton-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-radiobutton-border-color: var(--nys-color-neutral-600, #62666a);--_nys-radiobutton-background-color--hover: var( --nys-color-neutral-50, #ededed );--_nys-radiobutton-border-color--hover: var(--nys-color-ink, #1b1b1b);--_nys-radiobutton-background-color--active: var( --nys-color-neutral-100, #d0d0ce );--_nys-radiobutton-border-color--active: var(--nys-color-ink, #1b1b1b);--_nys-radiobutton-background-color--checked: var(--nys-color-theme, #154973);--_nys-radiobutton-background-color--disabled: var( --nys-color-ink-reverse, #f0f0f0 );--_nys-radiobutton-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-radiobutton-border-color--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-radiobutton-background-color--checked--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-radiobutton-border-color--checked--disabled: var( --nys-color-neutral-100, #d0d0ce )}:host([size=sm]){--_nys-radiobutton-size: var(--nys-size-300, 24px);--_nys-radiobutton-border-radius: var(--nys-radius-sm, 2px);--_nys-radiogroup-gap: var(--nys-space-100, 8px);--_nys-radiobutton-gap: var(--nys-space-100, 8px)}:host([size=md]){--_nys-radiobutton-size: var(--nys-size-400, 32px);--_nys-radiobutton-border-radius: var(--nys-radius-md, 4px);--_nys-radiogroup-gap: var(--nys-space-200, 16px);--_nys-radiobutton-gap: var(--nys-space-150, 12px)}:host([tile]){--_nys-radiobutton-font-weight--label: var(--nys-font-weight-semibold, 600);--_nys-radiobutton-border-width--tile: var(--nys-border-width-sm, 1px);--_nys-radiobutton-border-radius--tile: var(--nys-radius-md, 4px);--_nys-radiobutton-border-color--tile: var(--nys-color-neutral-100, #d0d0ce);--_nys-radiobutton-background-color--tile: var( --nys-color-ink-reverse, #ffffff );--_nys-radiobutton-padding--x--tile: var(--nys-space-250, 20px);--_nys-radiobutton-padding--y--tile: var(--nys-space-200, 16px);--_nys-radiobutton-border-color--tile--hover: var( --nys-color-neutral-700, #4a4d4f );--_nys-radiobutton-background-color--tile--hover: var( --nys-color-ink-reverse, #ffffff );--_nys-radiobutton-border-color--tile--active: var( --nys-color-neutral-900, #1b1b1b );--_nys-radiobutton-background-color--tile--active: var( --nys-color-ink-reverse, #ffffff );--_nys-radiobutton-border-color--tile--checked: var( --nys-color-theme-mid, #457aa5 );--_nys-radiobutton-background-color--tile--checked: var( --nys-color-theme-faint, #f7fafd );--_nys-radiobutton-border-color--tile--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-radiobutton-background-color--tile--disabled: var( --nys-color-ink-reverse, #ffffff )}:host([tile][size=sm]){--_nys-radiobutton-padding--x--tile: var(--nys-space-200, 16px);--_nys-radiobutton-padding--y--tile: var(--nys-space-150, 12px)}:host([tile][showError]){--_nys-radiobutton-border-color--tile: var(--nys-color-danger, #b52c2c);--_nys-radiobutton-border-color--tile--hover: var( --nys-color-danger, #b52c2c );--_nys-radiobutton-border-color--tile--active: var( --nys-color-danger, #b52c2c );--_nys-radiobutton-border-color--tile--checked: var( --nys-color-danger, #b52c2c )}.nys-radiogroup{display:flex;flex-direction:column;gap:var(--nys-space-200, 16px);font-family:var(--_nys-radiobutton-font-family);font-size:var(--_nys-radiobutton-font-size);line-height:var(--_nys-radiobutton-line-height)}.nys-radiogroup legend{margin-bottom:var(--nys-space-200, 16px)}.nys-radiogroup__content{gap:var(--_nys-radiogroup-gap);display:flex;flex-direction:column}.nys-radiobutton{display:flex;flex-direction:column;font-family:var(--_nys-radiobutton-font-family);font-size:var(--_nys-radiobutton-font-size);line-height:var(--_nys-radiobutton-line-height);border-radius:var(--_nys-radiobutton-border-radius--tile);border:var(--_nys-radiobutton-border-width--tile) solid var(--_nys-radiobutton-border-color--tile);background-color:var(--_nys-radiobutton-background-color--tile);padding:var(--_nys-radiobutton-padding--y--tile) var(--_nys-radiobutton-padding--x--tile)}.nys-radiobutton__radio{appearance:none;width:var(--_nys-radiobutton-size);height:var(--_nys-radiobutton-size);min-width:var(--_nys-radiobutton-size);min-height:var(--_nys-radiobutton-size);max-width:var(--_nys-radiobutton-size);max-height:var(--_nys-radiobutton-size);border:solid var(--_nys-radiobutton-border-width) var(--_nys-radiobutton-border-color);background-color:var(--_nys-radiobutton-background-color);border-radius:100%;background-repeat:no-repeat;background-position:center;background-size:contain;outline-offset:var(--_nys-radiobutton-outline-offset);outline:none;margin:0 0 auto;box-sizing:border-box}.nys-radiobutton:hover,.nys-radiobutton:hover *{cursor:pointer}.nys-radiobutton__radio:not(:disabled):checked{background-image:url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" stroke="white" stroke-width="6"/></svg>');background-color:var(--_nys-radiobutton-background-color--checked)}:host([tile]) .nys-radiobutton:has(.nys-radiobutton__radio:not(:disabled):checked){border-color:var(--_nys-radiobutton-border-color--tile--checked);background-color:var(--_nys-radiobutton-background-color--tile--checked)}:host([tile]) .nys-radiobutton:has(.nys-radiobutton__radio:not(:disabled):checked:hover){cursor:default}.nys-radiobutton__radio:disabled:checked{background-image:url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="11" stroke="white" stroke-width="6"/></svg>');border-color:var(--_nys-radiobutton-border-color--checked--disabled);background-color:var(--_nys-radiobutton-background-color--checked--disabled)}:host([tile]) .nys-radiobutton:has(.nys-radiobutton__radio:disabled){border-color:var(--_nys-radiobutton-border-color--tile--disabled);background-color:var(--_nys-radiobutton-background-color--tile--disabled)}.nys-radiobutton__radio:disabled{background-color:var(--_nys-radiobutton-background-color--disabled);border-color:var(--_nys-radiobutton-border-color--disabled);cursor:not-allowed}.nys-radiobutton__radio:hover:not(:disabled):not(:checked),.nys-radiobutton:hover .nys-radiobutton__radio:not(:disabled):not(:checked){border-color:var(--_nys-radiobutton-border-color--hover);background-color:var(--_nys-radiobutton-background-color--hover)}:host([tile]) .nys-radiobutton:hover:has(.nys-radiobutton__radio:not(:disabled):not(:checked)){border-color:var(--_nys-radiobutton-border-color--tile--hover);background-color:var(--_nys-radiobutton-background-color--tile--hover);outline:solid var(--_nys-radiobutton-border-width--tile) var(--_nys-radiobutton-border-color--tile--hover)}.nys-radiobutton__radio:active:not(:disabled):not(:checked),.nys-radiobutton:active .nys-radiobutton__radio:not(:disabled):not(:checked){border-color:var(--_nys-radiobutton-border-color--active);background-color:var(--_nys-radiobutton-background-color--active)}:host([tile]) .nys-radiobutton:active:has(.nys-radiobutton__radio:not(:disabled):not(:checked)){border-color:var(--_nys-radiobutton-border-color--tile--active);background-color:var(--_nys-radiobutton-background-color--tile--active);outline:solid var(--_nys-radiobutton-border-width--tile) var(--_nys-radiobutton-border-color--tile--active)}:host(:focus-visible){outline:none}:host(:focus-visible) .nys-radiobutton__radio{outline:solid var(--_nys-radiobutton-outline-width) var(--_nys-radiobutton-outline-color)}.nys-radiobutton__radio:focus-visible,.nys-radiobutton__radio--invalid-focus{outline:solid var(--_nys-radiobutton-outline-width) var(--_nys-radiobutton-outline-color);outline-offset:var(--_nys-radiobutton-outline-offset)}.nys-radiobutton__main-container{display:flex;align-items:center}.nys-radiobutton__other-container{display:flex;padding-inline-start:calc(var(--_nys-radiobutton-size) + var(--_nys-radiobutton-gap))}.nys-radiobutton__main-container>nys-label{--_nys-label-font-weight: var(--_nys-radiobutton-font-weight--label);display:flex;padding-inline-start:var(--_nys-radiobutton-gap)}:host([tile]) .nys-radiobutton__main-container>nys-label{--_nys-description-font-style: normal}.nys-radiobutton:has(.nys-radiobutton__radio:disabled) .nys-radiobutton__main-container>nys-label,.nys-radiobutton:has(.nys-radiobutton__radio:disabled) .nys-radiobutton__main-container>nys-label *{cursor:not-allowed;--_nys-label-cursor: not-allowed;--_nys-label-color: var(--_nys-radiobutton-color--disabled);--_nys-description-color: var(--_nys-radiobutton-color--disabled);color:var(--_nys-radiobutton-color--disabled)}fieldset{all:unset;display:contents}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}`;
var jy = Object.defineProperty, Te = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && jy(e, t, o), o;
};
const _s = class _s extends pt {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this.required = !1, this.optional = !1, this.showError = !1, this.errorMessage = "", this.label = "", this.description = "", this.tile = !1, this.tooltip = "", this.form = null, this.size = "md", this._showOtherError = !1, this.selectedValue = null, this._slottedDescriptionText = "", this._radios = [], this.isMobile = !1, this._hasUserInteracted = !1, this._handleMobileQuery = () => {
      this.isMobile = this._mobileQuery.matches;
    }, this._handleRadiobtnClick = (e) => {
      e.disabled || this.shadowRoot?.querySelector(`#input-${e.id}`)?.click();
    };
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   * Form association, ElementInternals, and id generation are provided by
   * NysFormControlElement (@nysds/internals). super.connectedCallback()
   * assigns an id (prefix = localName) when one is not provided.
   */
  // The host is the semantic grouping element: expose role="radiogroup" on the
  // host's accessibility node via the shared ReflectsAriaMixin instead of a
  // hand-attached ElementInternals.
  get defaultRole() {
    return "radiogroup";
  }
  connectedCallback() {
    super.connectedCallback(), this._mobileQuery = window.matchMedia("(max-width: 479px)"), this.isMobile = this._mobileQuery.matches, this._mobileQuery.addEventListener("change", this._handleMobileQuery), this.addEventListener("invalid", this._handleInvalid), this._childObserver = new MutationObserver(() => {
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
    (e.has("required") || e.has("selectedValue")) && (this.showError || this._manageRequire()), e.has("size") && this._updateRadioButtonsSize(), this._updateGroupTabIndex(), this._forwardRadioDescriptions();
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    this.setFormValue(this.selectedValue);
  }
  _setRadioButtonRequire() {
    this.querySelectorAll("nys-radiobutton").forEach((t, n) => {
      this.required && n === 0 && t.setAttribute("required", "required");
    });
  }
  async _manageRequire() {
    const e = this.errorMessage || "Please select an option.", n = Array.from(this.querySelectorAll("nys-radiobutton"))[0];
    if (n) {
      const o = this.shadowRoot?.querySelector(
        `#input-${n.id}`
      );
      this.required && !this.selectedValue ? this.setValidityFromState(
        { valueMissing: !0 },
        e,
        o ?? n
        // pass the custom element, not shadow input
      ) : (this.showError = !1, this.clearValidity());
    }
  }
  checkValidity() {
    const e = Array.from(this.querySelectorAll("nys-radiobutton"));
    return !this.required || e.some((n) => n.checked);
  }
  // Need to account for if radiogroup already have a radiobutton checked at initialization
  _initializeCheckedRadioValue() {
    const e = this.querySelector("nys-radiobutton[checked]");
    e && (this.selectedValue = e.getAttribute("value"), this.setFormValue(this.selectedValue));
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
    ].includes(e.key) || (e.key === "ArrowLeft" || e.key === "ArrowRight") && e.composedPath().some((m) => m.tagName === "NYS-TEXTINPUT"))
      return;
    e.preventDefault();
    const n = this._getAllRadios().filter((b) => !b.disabled), o = e.target, s = n.find(
      (b) => this.shadowRoot?.querySelector(`#input-${b.id}`) === o
    ) || n.find((b) => b.checked) || n[0];
    let i = 0;
    ["ArrowUp", "ArrowLeft"].includes(e.key) ? i = -1 : ["ArrowDown", "ArrowRight"].includes(e.key) && (i = 1);
    let d = n.indexOf(s) + i;
    d < 0 && (d = n.length - 1), d >= n.length && (d = 0);
    const p = n[d];
    this._selectRadio(p), await this.updateComplete, this._updateGroupTabIndex(), this.shadowRoot?.querySelector(`#input-${p.id}`)?.focus();
  }
  _updateGroupTabIndex() {
    const e = this._getAllRadios(), t = e.find((n) => n.checked && !n.disabled) || e.find((n) => !n.disabled);
    e.forEach((n) => {
      const o = this.shadowRoot?.querySelector(
        `#input-${n.id}`
      );
      o && (o.tabIndex = n === t ? 0 : -1);
    });
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.querySelectorAll("nys-radiobutton").forEach((t) => {
      t.checked = !1;
    }), this.selectedValue = null, this.setFormValue(null), this.showError = !1, this.errorMessage = "", this.clearValidity(), this._hasUserInteracted = !1, this.requestUpdate();
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
    this._getAllRadios().forEach((n) => {
      n.checked = !1;
    }), e.checked = !0, this._showOtherError = !1, this._hasUserInteracted = !1, this.name = e.name, this.selectedValue = e.value, this.setFormValue(this.selectedValue), this.clearValidity(), this.showError = !1, this._updateGroupTabIndex(), this.requestUpdate(), this.dispatchEvent(
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
    this._slottedDescriptionText = t.map((n) => n.textContent?.trim()).filter(Boolean).join(", ");
  }
  _forwardRadioDescriptions() {
    this._radios.forEach((e) => {
      const t = e.querySelector(
        ':scope > [slot="description"]'
      );
      if (!t) return;
      const n = this.shadowRoot?.querySelector(`#${e.id}-label`);
      n && t.parentElement !== n && n.appendChild(t);
    });
  }
  /**
   * Event Handlers
   * --------------------------------------------------------------------------
   */
  async _handleInvalid(e) {
    e.preventDefault();
    const n = this._getAllRadios().find((s) => s.other && s.checked);
    if (n && n.value.trim() === "") {
      this.showError = !0, this._hasUserInteracted = !0, this._validateOtherAndEmitError(n), await this.updateComplete;
      const s = this.shadowRoot?.querySelector("nys-textinput");
      if (s) {
        await s.updateComplete, s.focus();
        return;
      }
    }
    this.showError = !0, await this._manageRequire();
    const o = this._getAllRadios().find(
      (s) => !s.disabled
    );
    if (o) {
      const s = () => {
        const d = this.shadowRoot?.querySelector(
          `#input-${o.id}`
        );
        d?.focus(), d?.classList.add("nys-radiobutton__radio--invalid-focus");
      }, i = this.internals?.form;
      i ? Array.from(i.elements).find(
        (b) => typeof b.checkValidity == "function" && !b.checkValidity()
      ) === this && s() : s();
    }
  }
  _handleTextInput(e, t) {
    const n = t.target;
    e.value = n.value, this.selectedValue = n.value, this.setFormValue(n.value), this._hasUserInteracted && this._validateOtherAndEmitError(e), this.dispatchEvent(
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
    const n = this.shadowRoot?.querySelector(
      `#input-${e.id}`
    );
    t ? (this.setValidityFromState(
      {
        customError: !0
      },
      "Please enter a value for this option.",
      n ?? e
    ), this.showError = !0) : (this.clearValidity(), this.showError = !1);
  }
  _handleOtherKeydown(e) {
    (e.key == "Space" || e.key === " ") && e.stopPropagation();
  }
  _handleGroupFocusout(e) {
    const t = e.relatedTarget;
    if (t && this.shadowRoot?.contains(t)) return;
    const n = this._getAllRadios().find(
      (o) => o.other && o.checked
    );
    n && n.value.trim() === "" && (this._hasUserInteracted = !0, this._validateOtherAndEmitError(n));
  }
  _handleRadiobtnFocus(e) {
    e.dispatchEvent(
      new CustomEvent("nys-focus", { bubbles: !0, composed: !0 })
    );
  }
  _handleRadiobtnBlur(e) {
    this.shadowRoot?.querySelector(
      `#input-${e.id}`
    )?.classList.remove("nys-radiobutton__radio--invalid-focus"), e.dispatchEvent(
      new CustomEvent("nys-blur", { bubbles: !0, composed: !0 })
    );
  }
  render() {
    return y` <slot
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
      (e, t) => y`
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
                    name="${v(e.name || void 0)}"
                    .checked=${e.checked}
                    ?disabled=${e.disabled}
                    .value=${e.value}
                    ?required=${this.required && t === 0}
                    form=${v(e.form || void 0)}
                    aria-labelledby=${v(
        e.label || e.other ? `${e.id}-label` : void 0
      )}
                    aria-invalid=${this.showError ? "true" : "false"}
                    aria-errormessage=${`${this.id}--error`}
                    aria-describedby=${v(
        this.showError ? `${this.id}--error` : void 0
      )}
                    @change=${() => this._selectRadio(e)}
                    @focus=${() => this._handleRadiobtnFocus(e)}
                    @blur=${() => this._handleRadiobtnBlur(e)}
                  />
                  ${(e.label || e.other) && y`<nys-label
                    id="${e.id}-label"
                    label="${e.label || (e.other ? "Other" : "")}"
                    description=${v(e.description || void 0)}
                  >
                  </nys-label>`}
                </div>
                <div class="nys-radiobutton__other-container">
                  ${e.other && e.checked ? y`
                        <nys-textinput
                          .value=${e.value}
                          id=${"radiobutton-other-" + e.id}
                          @nys-input=${(n) => this._handleTextInput(e, n)}
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
          id="${this.id}--error"
          ?showError=${this.showError}
          errorMessage=${this.internals.validationMessage || this.errorMessage}
          .showDivider=${!this.tile}
        ></nys-errormessage>
      </fieldset>`;
  }
};
_s.styles = C(Uy), _s.shadowRootOptions = {
  ...I.shadowRootOptions,
  delegatesFocus: !0
};
let he = _s;
Te([
  a({ type: String, reflect: !0 })
], he.prototype, "id");
Te([
  a({ type: String, reflect: !0 })
], he.prototype, "name");
Te([
  a({ type: Boolean, reflect: !0 })
], he.prototype, "required");
Te([
  a({ type: Boolean, reflect: !0 })
], he.prototype, "optional");
Te([
  a({ type: Boolean, reflect: !0 })
], he.prototype, "showError");
Te([
  a({ type: String })
], he.prototype, "errorMessage");
Te([
  a({ type: String })
], he.prototype, "label");
Te([
  a({ type: String })
], he.prototype, "description");
Te([
  a({ type: Boolean, reflect: !0 })
], he.prototype, "tile");
Te([
  a({ type: String })
], he.prototype, "tooltip");
Te([
  a({ type: String, reflect: !0 })
], he.prototype, "form");
Te([
  a({ type: String, reflect: !0 })
], he.prototype, "size");
Te([
  a({ type: Boolean })
], he.prototype, "_showOtherError");
Te([
  $()
], he.prototype, "selectedValue");
Te([
  $()
], he.prototype, "_slottedDescriptionText");
Te([
  $()
], he.prototype, "_radios");
Te([
  $()
], he.prototype, "isMobile");
customElements.get("nys-radiogroup") || customElements.define("nys-radiogroup", he);
var Wy = Object.defineProperty, Er = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Wy(e, t, o), o;
};
class kn extends I {
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
    return y`
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
Er([
  a({ type: Boolean, reflect: !0 })
], kn.prototype, "disabled");
Er([
  a({ type: Boolean, reflect: !0 })
], kn.prototype, "selected");
Er([
  a({ type: String })
], kn.prototype, "value");
Er([
  a({ type: String })
], kn.prototype, "label");
Er([
  a({ type: Boolean, reflect: !0 })
], kn.prototype, "hidden");
customElements.get("nys-option") || customElements.define("nys-option", kn);
const Yy = ':host{--_nys-select-width: 100%;--_nys-select-height: var(--nys-size-500, 40px);--_nys-select-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-select-font-size: var(--nys-font-size-ui-md, 16px);--_nys-select-font-weight: var(--nys-font-weight-regular, 400);--_nys-select-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-select-gap: var(--nys-space-50, 4px);--_nys-select-border-radius: var(--nys-radius-md, 4px);--_nys-select-padding: var(--nys-space-100, 8px) var(--nys-space-400, 32px) var(--nys-space-100, 8px) var(--nys-space-100, 8px);--_nys-select-color: var(--nys-color-text, #1b1b1b);--_nys-select-color--error: var( --nys-color-danger, var(--nys-color-red-600, #b52c2c) );--_nys-select-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-select-background-color--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-select-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-select-border-width: var(--nys-border-width-sm, 1px);--_nys-select-border-color: var(--nys-color-neutral-400, #909395);--_nys-select-border-color--hover: var(--nys-color-neutral-900, #1b1b1b);--_nys-select-border-color--focus: var(--nys-color-focus, #004dd1);--_nys-select-border-color--disabled: var(--nys-color-neutral-200, #bec0c1);--_nys-select-border-default: var(--nys-border-width-sm, 1px) solid var(--nys-color-neutral-400, #909395)}:host([inverted]){--_nys-select-border-color--focus: var(--nys-color-focus-reverse, #7aa5e7)}.nys-select{display:flex;flex-direction:column;gap:var(--_nys-select-gap);font-family:var(--_nys-select-font-family)}.nys-select__select{color:var(--_nys-select-color);font-weight:var(--_nys-select-font-weight);font-family:var(--_nys-select-font-family);border-radius:var(--_nys-select-border-radius);border:solid var(--_nys-select-border-width) var(--_nys-select-border-color);font-size:var(--_nys-select-font-size);padding:var(--_nys-select-padding);width:var(--_nys-select-width);height:var(--_nys-select-height);max-width:100%;text-indent:1px;background:var(--_nys-select-background-color);appearance:none;text-overflow:ellipsis}.nys-select__selectwrapper{position:relative;display:inline-block;width:var(--_nys-select-width);max-width:100%}.nys-select__icon{color:var(--_nys-select-color);position:absolute;right:10px;top:50%;transform:translateY(-50%);pointer-events:none}:host([width=sm]){--_nys-select-width: var(--nys-select-form-width-sm, 88px)}:host([width=md]){--_nys-select-width: var(--nys-select-form-width-md, 200px)}:host([width=lg]){--_nys-select-width: var(--nys-select-form-width-lg, 384px)}:host([width=full]){--_nys-select-width: 100%;flex:1}.nys-select__select:hover:not(:disabled){cursor:pointer;border-color:var(--_nys-select-border-color--hover);outline:solid var(--_nys-select-border-width) var(--_nys-select-border-color--hover)}.nys-select__select:focus{border-color:var(--_nys-select-border-color--focus);outline:solid var(--_nys-select-border-width) var(--_nys-select-border-color--focus)}.nys-select__select:disabled{background-color:var(--_nys-select-background-color--disabled);border-color:var(--_nys-select-border-color--disabled);cursor:not-allowed;color:var(--_nys-select-color--disabled)}.nys-select__select:disabled~.nys-select__icon{color:var(--_nys-select-color--disabled)}:host([showError]){--_nys-select-border-default: var(--nys-border-width-sm, 1px) solid var(--_nys-select-color--error)}';
var Gy = Object.defineProperty, je = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Gy(e, t, o), o;
};
const gs = class gs extends pt {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this.label = "", this.description = "", this.ariaLabel = "", this.value = "", this.disabled = !1, this.required = !1, this.optional = !1, this.tooltip = "", this.form = null, this.inverted = !1, this.showError = !1, this.errorMessage = "", this.width = "full", this._originalErrorMessage = "", this._hasUserInteracted = !1;
  }
  // need this flag for "eager mode"
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   * Form association, ElementInternals, and id generation are provided by
   * NysFormControlElement (@nysds/internals).
   */
  connectedCallback() {
    super.connectedCallback(), this._originalErrorMessage = this.errorMessage ?? "", this.addEventListener("invalid", this._handleInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeEventListener("invalid", this._handleInvalid);
  }
  firstUpdated() {
    this._setValue();
  }
  _handleSlotChange() {
    const e = this.shadowRoot?.querySelector(
      'slot:not([name="description"])'
    ), t = this.shadowRoot?.querySelector("select");
    if (!e || !t) return;
    if (Array.from(t.children).forEach((i) => {
      i.hasAttribute("data-native") || i.remove();
    }), e.assignedElements({ flatten: !0 }).forEach((i) => {
      if (i instanceof kn) {
        const d = document.createElement("option");
        d.value = i.value, d.textContent = i.label || i.textContent?.trim() || "", d.disabled = i.disabled, d.selected = i.selected, t.appendChild(d);
        return;
      }
      if (i.tagName === "OPTION") {
        const d = i, p = d.cloneNode(!0);
        p.disabled = d.disabled, p.selected = d.selected, t.appendChild(p);
        return;
      }
      if (i.tagName === "OPTGROUP") {
        const d = document.createElement("optgroup");
        d.label = i.label, i.disabled && (d.disabled = !0), Array.from(i.children).forEach((p) => {
          if (p instanceof kn) {
            const b = document.createElement("option");
            b.value = p.value, b.textContent = p.label || p.textContent?.trim() || "", b.disabled = p.disabled, b.selected = p.selected, d.appendChild(b);
          } else if (p.tagName === "OPTION") {
            const b = p.cloneNode(!0);
            d.appendChild(b);
          }
        }), t.appendChild(d);
        return;
      }
    }), !!this.value && Array.from(t.options).some((i) => i.value === this.value)) {
      t.value = this.value;
      return;
    }
    const s = Array.from(t.options).find((i) => i.selected);
    s && (this.value = s.value, this.setFormValue(this.value));
  }
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  _setValue() {
    this.setFormValue(this.value), this._manageRequire();
  }
  _manageRequire() {
    const e = this.shadowRoot?.querySelector("select");
    if (!e) return;
    const t = this.errorMessage || "This field is required.";
    this.required && !this.value ? this.setValidityFromState({ valueMissing: !0 }, t, e) : (this.clearValidity(), this._hasUserInteracted = !1);
  }
  _setValidityMessage(e = "") {
    const t = this.shadowRoot?.querySelector("select");
    t && (this.showError = !!e, this._originalErrorMessage?.trim() && e !== "" ? this.errorMessage = this._originalErrorMessage : this.errorMessage = e, e ? this.setValidityFromState(
      { customError: !0 },
      this.errorMessage,
      t
    ) : this.clearValidity());
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
    e && (e.value = "", Array.from(e.options).forEach((t) => t.selected = !1)), this.showError = !1, this.errorMessage = "", this.clearValidity(), this.requestUpdate();
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
      const n = this.internals?.form;
      n ? Array.from(n.elements).find(
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
    this.value = t.value, this.setFormValue(this.value), this.required && this.value && (this.showError = !1, this.errorMessage = "", this.clearValidity()), this._hasUserInteracted && this._validate(), this.dispatchEvent(
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
    return y`
      <div class="nys-select">
        <nys-label
          id="${this.id}--label"
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
            form=${v(this.form || void 0)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-disabled="${this.disabled}"
            aria-labelledby=${v(
      this.label ? this.id + "--label" : void 0
    )}
            aria-label=${v(
      !this.label && this.ariaLabel ? this.ariaLabel : void 0
    )}
            aria-invalid=${this.showError ? "true" : "false"}
            aria-errormessage=${this.id + "--error"}
            aria-describedby=${v(
      this.showError ? this.id + "--error" : void 0
    )}
            .value=${this.value}
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
            @change="${this._handleChange}"
          >
            <option data-native hidden disabled value=""></option>
          </select>
          <slot
            style="display: none;"
            @slotchange=${this._handleSlotChange}
          ></slot>
          <nys-icon
            name="chevron_down"
            size="2xl"
            class="nys-select__icon"
          ></nys-icon>
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
gs.styles = C(Yy), gs.shadowRootOptions = {
  ...I.shadowRootOptions,
  delegatesFocus: !0
};
let Ce = gs;
je([
  a({ type: String, reflect: !0 })
], Ce.prototype, "id");
je([
  a({ type: String, reflect: !0 })
], Ce.prototype, "name");
je([
  a({ type: String })
], Ce.prototype, "label");
je([
  a({ type: String })
], Ce.prototype, "description");
je([
  a({ type: String })
], Ce.prototype, "ariaLabel");
je([
  a({ type: String })
], Ce.prototype, "value");
je([
  a({ type: Boolean, reflect: !0 })
], Ce.prototype, "disabled");
je([
  a({ type: Boolean, reflect: !0 })
], Ce.prototype, "required");
je([
  a({ type: Boolean, reflect: !0 })
], Ce.prototype, "optional");
je([
  a({ type: String })
], Ce.prototype, "tooltip");
je([
  a({ type: String, reflect: !0 })
], Ce.prototype, "form");
je([
  a({ type: Boolean, reflect: !0 })
], Ce.prototype, "inverted");
je([
  a({ type: Boolean, reflect: !0 })
], Ce.prototype, "showError");
je([
  a({ type: String })
], Ce.prototype, "errorMessage");
je([
  a({ type: String, reflect: !0 })
], Ce.prototype, "width");
customElements.get("nys-select") || customElements.define("nys-select", Ce);
const Ky = '@charset "UTF-8";:host{--_nys-skipnav-padding--y: var(--nys-space-100, 8px);--_nys-skipnav-padding--x: var(--nys-space-200, 16px);--_nys-skipnav-gap: var(--nys-space-100, 8px);--_nys-skipnav-border-width: var(--nys-border-width-md, 2px);--_nys-skipnav-border-color: var(--nys-color-link, #004dd1);--_nys-skipnav-border-radius: var(--nys-radius-sm, 2px);--_nys-skipnav-outline-width: var(--nys-border-width-md, 2px);--_nys-skipnav-outline-offset: var(--nys-space-2px, 2px);--_nys-skipnav-outline-color: var(--nys-color-focus, #004dd1);--_nys-skipnav-font-size: var(--nys-font-size-ui-md, 16px);--_nys-skipnav-font-weight: var(--nys-font-weight-semibold, 600);--_nys-skipnav-letter-spacing: var(--nys-font-letterspacing-ui-md, .044px);--_nys-skipnav-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-skipnav-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-skipnav-color: var(--nys-color-link, #004dd1);--_nys-skipnav-background-color: var(--nys-color-surface, #ffffff)}.nys-skipnav__link{position:absolute;left:auto;top:-4.8rem;display:inline-flex;padding:var(--_nys-skipnav-padding--y) var(--_nys-skipnav-padding--x);align-items:flex-end;gap:var(--_nys-skipnav-gap);background:var(--_nys-skipnav-background-color);color:var(--_nys-skipnav-color);border:var(--_nys-skipnav-border-width) solid var(--_nys-skipnav-border-color);border-radius:var(--_nys-skipnav-border-radius);font-family:var(--_nys-skipnav-font-family);font-size:var(--_nys-skipnav-font-size);font-style:normal;font-weight:var(--_nys-skipnav-font-weight);line-height:var(--_nys-skipnav-line-height);letter-spacing:var(--_nys-skipnav-letter-spacing);text-decoration-line:underline;text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:7%;text-underline-offset:auto;text-underline-position:from-font;z-index:100;transition:.15s ease-in-out}.nys-skipnav__link:focus,.nys-skipnav__link.show{top:0;left:auto}.nys-skipnav__link:focus-visible{outline:solid var(--_nys-skipnav-outline-width) var(--_nys-skipnav-outline-color);outline-offset:var(--_nys-skipnav-outline-offset)}';
var Zy = Object.defineProperty, Xl = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Zy(e, t, o), o;
};
const Ui = class Ui extends D {
  constructor() {
    super(), this.id = "", this.href = "";
  }
  // super.connectedCallback() (NysElement) auto-assigns a unique id
  // (prefix = localName) when one is not provided. The accessible "skip link"
  // role lives on the inner native <a> element, so defaultRole stays null and no
  // role is reflected onto the host.
  connectedCallback() {
    super.connectedCallback();
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
    return y`
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
Ui.styles = C(Ky);
let mr = Ui;
Xl([
  a({ type: String, reflect: !0 })
], mr.prototype, "id");
Xl([
  a({ type: String })
], mr.prototype, "href");
customElements.get("nys-skipnav") || customElements.define("nys-skipnav", mr);
const Ql = ':host{--_nys-stepper-font-size: var(--nys-font-size-ui-md, 16px);--_nys-stepper-font-weight: var(--nys-font-weight-semibold, 600);--_nys-stepper-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-stepper-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-step-color: var(--nys-color-text, #1b1b1b);--_nys-stepper-background-color: var(--nys-color-surface-raised, #f6f6f6)}.nys-stepper{font-family:var(--_nys-stepper-font-family);font-size:var(--_nys-stepper-font-size);font-weight:var(--_nys-stepper-font-weight);line-height:var(--_nys-stepper-line-height);display:flex;flex-direction:column;counter-reset:step;background-color:var(--_nys-stepper-background-color);max-width:100%;height:100%}.nys-stepper__header{display:flex;flex-direction:column;padding:var(--nys-space-400, 32px) var(--nys-space-400, 32px) var(--nys-space-150, 12px)}::slotted(div[slot=actions]){display:flex;flex-wrap:wrap;justify-content:flex-start;gap:var(--nys-space-100, 8px);margin-bottom:var(--nys-space-300, 24px)}.nys-stepper__counter{display:none;text-decoration:underline;text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:7%;text-underline-offset:auto;text-underline-position:from-font;color:var(--nys-color-text, #1b1b1b);text-overflow:ellipsis;font-family:var(--nys-font-family-ui, "Proxima Nova");font-size:var(--nys-font-size-ui-md, 16px);font-style:normal;font-weight:400;line-height:var(--nys-font-size-ui-md, 16px);cursor:pointer;width:fit-content}.nys-stepper__steps{list-style:none;margin:0;display:flex;flex-direction:column;padding:var(--nys-space-150, 12px) var(--nys-space-400, 32px) var(--nys-space-400, 32px);overflow-y:scroll;height:fit-content;height:-moz-available;scrollbar-width:none;background:linear-gradient(var(--nys-color-surface-raised, #f6f6f6) 30%,rgba(255,255,255,0)) center top,linear-gradient(rgba(255,255,255,0),var(--nys-color-surface-raised, #f6f6f6) 70%) center bottom,linear-gradient(to bottom,#63636333,#0000) top,linear-gradient(to top,#63636333,#0000) bottom;background-repeat:no-repeat;background-size:100% 40px,100% 40px,100% 14px,100% 14px;background-attachment:local,local,scroll,scroll;background-color:var(--nys-color-surface-raised, #f6f6f6)}.nys-step{position:relative;counter-increment:step;display:flex;flex-direction:column}.nys-step__contentwrapper{appearance:none;-webkit-appearance:none;background:none;border:none;margin:0;padding:0;font:inherit;color:inherit;text-align:inherit;display:flex;flex-direction:row;align-items:center;gap:var(--nys-space-150, 12px);cursor:default;width:fit-content}.nys-step__contentwrapper:focus-visible{outline:solid var(--nys-color-focus, #004dd1) var(--nys-border-width-md, 2px);outline-offset:var(--nys-space-2px, 2px);border-radius:var(--nys-radius-md, 4px)}.nys-step__linewrapper{width:24px;display:flex;justify-content:center}.nys-step__line{width:var(--nys-size-1px, 1px);height:var(--nys-size-300, 24px);border-radius:var(--nys-radius-round, 1776px);background:var(--nys-color-black-transparent-200, rgba(27, 27, 27, .2));margin:var(--nys-space-100, 8px) 0}.nys-step__number{border-radius:var(--nys-radius-round, 1776px);border:var(--nys-size-1px, 1px) solid var(--nys-color-neutral-400, #909395);background:var(--nys-color-white-transparent-900, rgba(255, 255, 255, .9));width:var(--nys-size-300, 24px);min-width:var(--nys-size-300, 24px);max-width:var(--nys-size-300, 24px);height:var(--nys-size-300, 24px);min-height:var(--nys-size-300, 24px);max-height:var(--nys-size-300, 24px);display:flex;align-items:center;justify-content:center;text-align:center;color:var(--nys-color-text, #1b1b1b)}:host([previous]) .nys-step__number,:host([previous]) .nys-step__line,:host([current]) .nys-step__number,:host([current]) .nys-step__line{background-color:var(--nys-color-theme-stronger, #081b2b);color:var(--nys-color-text-reverse, #ffffff);border-color:var(--nys-color-theme-stronger, #081b2b)}:host([selected]) .nys-step__number{background-color:var(--nys-color-theme, #154973);color:var(--nys-color-text-reverse, #ffffff);border-color:var(--nys-color-theme, #154973);outline:var(--nys-size-50, 4px) solid var(--nys-color-theme-weak, #cddde9)}:host([first]) .nys-step__linewrapper{display:none!important}.nys-step__content{display:flex;flex-direction:column;gap:var(--nys-space-100, 8px)}.nys-step__label{color:var(--_nys-step-color);font-family:var(--_nys-stepper-font-family);font-size:var(--_nys-stepper-font-size);font-weight:var(--_nys-stepper-font-weight);line-height:var(--_nys-stepper-line-height);line-height:var(--nys-font-size-ui-md, 16px);letter-spacing:var(--nys-font-letterspacing-ui-md, .044px);text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:var(7%, 1.12px);text-underline-offset:auto}:host([current]) .nys-step__label,:host([previous]) .nys-step__label{text-decoration-line:underline}:host([current]) .nys-step__contentwrapper,:host([previous]) .nys-step__contentwrapper{cursor:pointer}:host([selected]) .nys-step__label{font-weight:700;text-decoration-line:none}:host([selected]) .nys-step__contentwrapper{cursor:default}:host([selected]) .nys-step__contentwrapper:focus-visible{outline-offset:6px}@media(max-width:1023px){.nys-stepper{max-width:1023px;width:100%}.nys-stepper__header{flex-direction:row-reverse;justify-content:space-between;padding:var(--nys-space-150, 12px);gap:var(--nys-space-200, 16px)}.nys-stepper__headertext{flex:1 1 0;min-width:0}::slotted(div[slot=actions]){margin-bottom:0;min-width:0;justify-content:end}.nys-stepper__counter{display:block}.nys-stepper__steps{flex-direction:row;gap:var(--nys-space-2px, 2px);padding:0}.nys-stepper__steps slot::slotted(*){flex:1}.nys-step__number{border-radius:0;border:none;background-color:var(--nys-color-neutral-200, #bec0c1);height:var(--nys-size-100, 8px);min-height:var(--nys-size-100, 8px);max-height:var(--nys-size-100, 8px);width:100%;min-width:100%;max-width:100%;color:transparent}:host([previous]) .nys-step__number,:host([current]) .nys-step__number{background-color:var(--nys-color-neutral-900, #1b1b1b);color:transparent}:host([selected]) .nys-step__number{background-color:var(--nys-color-theme-mid, #457aa5);outline:none}.nys-step__content,.nys-step__linewrapper{display:none}.nys-step__contentwrapper{cursor:default;pointer-events:none;width:auto}:host([isCompactExpanded]) .nys-step__content,:host([isCompactExpanded]) .nys-step__linewrapper{display:flex}:host([isCompactExpanded]) .nys-stepper__header{padding-bottom:var(--nys-space-250, 20px)}:host([isCompactExpanded]) .nys-stepper__steps{width:-webkit-fill-available;width:-moz-available;z-index:9999;overflow-y:auto;flex-direction:column;gap:0;padding:var(--nys-space-150, 12px) var(--nys-space-400, 32px) var(--nys-space-400, 32px)}:host([isCompactExpanded]) .nys-stepper__steps slot::slotted(*){flex:none}:host([isCompactExpanded]) .nys-step__number{border-radius:var(--nys-radius-round, 1776px);border:1px solid var(--nys-color-neutral-400, #909395);background:var(--nys-color-white-transparent-900, rgba(255, 255, 255, .9));width:var(--nys-space-300, 24px);min-width:var(--nys-space-300, 24px);max-width:var(--nys-space-300, 24px);height:var(--nys-space-300, 24px);min-height:var(--nys-space-300, 24px);max-height:var(--nys-space-300, 24px);color:var(--nys-color-text, #1b1b1b)}:host([isCompactExpanded][previous]) .nys-step__number,:host([isCompactExpanded][previous]) .nys-step__line,:host([isCompactExpanded][current]) .nys-step__number,:host([isCompactExpanded][current]) .nys-step__line{background:var(--nys-color-theme-stronger, #081b2b);color:var(--nys-color-text-reverse, #ffffff);border-color:var(--nys-color-theme-stronger, #081b2b)}:host([isCompactExpanded][selected]) .nys-step__number{background:var(--nys-color-theme, #154973);color:var(--nys-color-text-reverse, #ffffff);border-color:var(--nys-color-theme, #154973);outline:4px solid var(--nys-color-theme-weak, #cddde9)}:host([isCompactExpanded]) .nys-step__contentwrapper{pointer-events:all}}';
var Xy = Object.defineProperty, Tn = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Xy(e, t, o), o;
};
const ji = class ji extends D {
  constructor() {
    super(...arguments), this.selected = !1, this.current = !1, this.label = "", this.href = "", this.previous = !1, this.isCompactExpanded = !1, this.stepNumber = 0;
  }
  /** A step is navigable (focusable + activatable) when it is the displayed,
   * current, or a previously-reached step. Future steps are inert. */
  get _navigable() {
    return this.selected || this.current || this.hasAttribute("previous");
  }
  // ---------------------------------------------------------------------------
  // Lifecycle
  // ---------------------------------------------------------------------------
  /**
   * Sets `role="listitem"` on the host so the parent stepper's `<ol>` (which
   * only ever slots `<nys-step>` elements, never real `<li>`s) still forms a
   * valid ARIA list. This is what lets assistive technology announce each
   * step's position and count. Uses a plain attribute (not ElementInternals)
   * so `getAttribute("role")` keeps working for existing consumers/tests,
   * matching the convention used by `<nys-tab>`.
   */
  connectedCallback() {
    super.connectedCallback(), this.setAttribute("role", "listitem");
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
  render() {
    const e = this._navigable, t = this.stepNumber ? `${this.label}, step ${this.stepNumber}` : `${this.label} Step`, n = y`
      <div class="nys-step__number" aria-hidden="true">${this.stepNumber}</div>
      <div class="nys-step__content">
        <div class="nys-step__label">${this.label}</div>
      </div>
    `;
    return y`
      <div class="nys-step">
        <div class="nys-step__linewrapper">
          <div class="nys-step__line"></div>
        </div>
        ${e ? y`
              <button
                type="button"
                class="nys-step__contentwrapper"
                @click=${this._handleActivate}
                aria-label=${t}
                aria-current=${v(this.current ? "step" : void 0)}
              >
                ${n}
              </button>
            ` : y`
              <div
                class="nys-step__contentwrapper"
                aria-label=${t}
              >
                ${n}
              </div>
            `}
      </div>
    `;
  }
};
ji.styles = C(Ql);
let At = ji;
Tn([
  a({ type: Boolean, reflect: !0 })
], At.prototype, "selected");
Tn([
  a({ type: Boolean, reflect: !0 })
], At.prototype, "current");
Tn([
  a({ type: String })
], At.prototype, "label");
Tn([
  a({ type: String })
], At.prototype, "href");
Tn([
  a({ type: Boolean, reflect: !0 })
], At.prototype, "previous");
Tn([
  a({ type: Boolean })
], At.prototype, "isCompactExpanded");
Tn([
  a({ attribute: !1 })
], At.prototype, "onClick");
Tn([
  a({ type: Number })
], At.prototype, "stepNumber");
customElements.get("nys-step") || customElements.define("nys-step", At);
var Qy = Object.defineProperty, Ar = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Qy(e, t, o), o;
};
const Wi = class Wi extends D {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this.label = "", this.counterText = "initial", this.isCompactExpanded = !1, this._stepsNumbered = !1, this._onStepClick = async (e) => {
      const t = e.composedPath().find(
        (i) => i instanceof HTMLElement && i.tagName.toLowerCase() === "nys-step"
      );
      if (!t) return;
      const n = Array.from(this.querySelectorAll("nys-step")), o = n.findIndex(
        (i) => i.hasAttribute("current")
      ), s = n.indexOf(t);
      o !== -1 && s > o || t.hasAttribute("selected") || (n.forEach((i) => i.removeAttribute("selected")), t.setAttribute("selected", ""), this._updateCounter(), this.isCompactExpanded = !1);
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("nys-step-click", this._onStepClick), requestAnimationFrame(() => this._validateSteps());
  }
  disconnectedCallback() {
    this.removeEventListener("nys-step-click", this._onStepClick), super.disconnectedCallback();
  }
  _validateSteps() {
    Array.from(this.children).forEach((e) => {
      const t = e instanceof HTMLElement && e.tagName.toLowerCase() === "nys-step", n = e instanceof HTMLElement && e.hasAttribute("slot") && e.getAttribute("slot") === "actions";
      !t && !n && (console.warn(
        "Only <nys-step> elements or the <div slot='actions'> container are allowed as direct children of <nys-stepper>. Removing:",
        e
      ), e.remove());
    });
  }
  _validateButtonSlot(e) {
    const n = e.target.assignedElements();
    if (n.length !== 1 || n[0].tagName.toLowerCase() !== "div") {
      console.warn(
        "The 'actions' slot must have exactly one <div> as a direct child."
      );
      return;
    }
    const o = n[0];
    Array.from(o.children).forEach((s) => {
      s instanceof HTMLElement && s.tagName.toLowerCase() === "nys-button" ? (s.setAttribute("size", "sm"), s.hasAttribute("fullWidth") && (s.style.flex = "1 1 0")) : (console.warn(
        "The <div> inside 'actions' slot only accepts <nys-button> elements. Removing invalid node:",
        s
      ), s.remove());
    });
  }
  _updateCounter() {
    let e;
    if (this.isCompactExpanded)
      e = "Back to Form", this.style.height = "-webkit-fit-content", this.style.height = "-moz-fit-content", this.style.height = "fit-content";
    else {
      this.style.height = "auto";
      const t = this.querySelectorAll("nys-step"), n = Array.from(t).findIndex(
        (s) => s.hasAttribute("selected")
      ), o = t.length;
      e = n >= 0 ? `Step ${n + 1} of ${o}` : `Step 1 of ${o}`;
    }
    e !== this.counterText && (this.counterText = e);
  }
  willUpdate() {
    const e = this.querySelectorAll("nys-step");
    this._stepsNumbered || (e.forEach((s, i) => {
      s.stepNumber = i + 1;
    }), this._stepsNumbered = !0);
    let t = !1, n = !1, o = !1;
    e.forEach((s, i) => {
      s.current && (o ? s.current = !1 : o = !0), i === 0 ? s.setAttribute("first", "") : s.removeAttribute("first"), s.current ? (t = !0, s.previous = !1) : t ? s.previous = !1 : s.previous = !0, s.selected && (t || n ? s.selected = !1 : n = !0), this.isCompactExpanded ? s.setAttribute("isCompactExpanded", "") : s.removeAttribute("isCompactExpanded");
    }), n || (o ? e.forEach((s) => {
      s.current && !n && (s.setAttribute("selected", ""), n = !0);
    }) : e.length > 0 && (e[0].setAttribute("current", ""), e[0].setAttribute("selected", ""))), this._updateCounter();
  }
  _toggleCompact() {
    this.isCompactExpanded = !this.isCompactExpanded;
  }
  _handleCounterKeydown(e) {
    (e.key === " " || e.key === "Enter") && (e.preventDefault(), this._toggleCompact());
  }
  render() {
    return y`
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
        <nav
          class="nys-stepper__nav"
          aria-label=${this.label?.trim() ? `${this.label} progress` : "Progress"}
        >
          <ol class="nys-stepper__steps" role="list">
            <slot></slot>
          </ol>
        </nav>
      </div>
    `;
  }
};
Wi.styles = C(Ql);
let Cn = Wi;
Ar([
  a({ type: String, reflect: !0 })
], Cn.prototype, "id");
Ar([
  a({ type: String, reflect: !0 })
], Cn.prototype, "name");
Ar([
  a({ type: String })
], Cn.prototype, "label");
Ar([
  a({ type: String })
], Cn.prototype, "counterText");
Ar([
  a({ type: Boolean, reflect: !0 })
], Cn.prototype, "isCompactExpanded");
customElements.get("nys-stepper") || customElements.define("nys-stepper", Cn);
const Jl = ':host{--_nys-tabgroup-gap: var(--nys-space-100, 8px);--_nys-tabgroup-padding: var(--nys-space-50, 4px);--_nys-tabgroup-background-color: var(--nys-color-surface, #ffffff);--_nys-tab-border-width: 3px;--_nys-tab-border-radius: var(--nys-radius-md, 4px);--_nys-tab-border-color: var(--nys-color-neutral-50);--_nys-tab-border-color--hover: var(--nys-color-theme-weak, #cddde9);--_nys-tab-border-color--active: var(--nys-color-theme-mid, #457aa5);--_nys-tab-border-color--disabled: var(--_nys-tab-border-color);--_nys-tab-border-color--selected: var(--nys-color-theme, #154973);--_nys-tab-border-color--selected--hover: var( --nys-color-theme-strong, #0e324f );--_nys-tab-border-color--selected--active: var( --nys-color-theme-stronger, #081b2b );--_nys-tab-background-color: var(--nys-color-surface, #ffffff);--_nys-tab-background-color--hover: var(--nys-color-theme-weaker, #eff6fb);--_nys-tab-background-color--active: var(--nys-color-theme-weak, #cddde9);--_nys-tab-background-color--disabled: var(--_nys-tab-background-color);--_nys-tab-background-color--selected: var(--nys-color-neutral-10, #f6f6f6);--_nys-tab-color: var(--nys-color-text-weak, #4a4d4f);--_nys-tab-color--selected: var(--nys-color-text, #1b1b1b);--_nys-tab-color--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-tab-padding--x: var(--nys-space-150, 12px);--_nys-tab-padding--y: var(--nys-space-200, 16px);--_nys-tabpanel-padding: var(--nys-space-400, 32px);--_nys-tabpanel-max-height: var(--nys-tabpanel-max-height)}.nys-tab{display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;appearance:none;-webkit-appearance:none;padding:var(--_nys-tab-padding--y) var(--_nys-tab-padding--x);border-color:var(--_nys-tab-border-color);border-style:none none solid;border-width:var(--_nys-tab-border-width);border-radius:var(--_nys-tab-border-radius) var(--_nys-tab-border-radius) 0 0;background-color:var(--_nys-tab-background-color);color:var(--_nys-tab-color);font-family:var(--nys-font-family-ui, var(--nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif));font-size:var(--nys-font-size-ui-md, 16px);font-weight:var(--nys-font-weight-semibold, 600);line-height:var(--nys-size-200, 16px);text-decoration:none}:host(:not([disabled])) .nys-tab:hover{background-color:var(--_nys-tab-background-color--hover);border-color:var(--_nys-tab-border-color--hover);color:var(--_nys-tab-color)}:host(:not([disabled])) .nys-tab:active{background-color:var(--_nys-tab-background-color--active);border-color:var(--_nys-tab-border-color--active);color:var(--_nys-tab-color)}:host([disabled]) .nys-tab{background-color:var(--_nys-tab-background-color--disabled);border-color:var(--_nys-tab-border-color--disabled);color:var(--_nys-tab-color--disabled);cursor:not-allowed;pointer-events:auto}:host(:focus-visible){outline:none}:host(:focus-visible) .nys-tab{outline:solid var(--nys-border-width-md, 2px) var(--nys-color-focus, #004dd1);outline-offset:var(--nys-space-2px, 2px)}:host([selected]) .nys-tab{background-color:var(--_nys-tab-background-color--selected);border-color:var(--_nys-tab-border-color--selected);color:var(--_nys-tab-color--selected)}:host([selected]:not([disabled])) .nys-tab:hover{border-color:var(--_nys-tab-border-color--selected--hover)}:host([selected]:not([disabled])) .nys-tab:active{border-color:var(--_nys-tab-border-color--selected--active)}.nys-tabgroup{background-color:var(--_nys-tabgroup-background-color)}.nys-tabgroup__tabs-container{position:relative}.nys-tabgroup__tabs-container .scroll-shadow{position:absolute;top:50%;transform:translateY(-50%);z-index:2;opacity:0;pointer-events:none;transition:opacity .2s;height:calc(var(--nys-space-600, 48px) + var(--_nys-tab-border-width));width:var(--nys-space-200, 16px)}.nys-tabgroup__tabs-container .scroll-shadow--left{left:0;background-image:linear-gradient(to left,transparent,var(--nys-color-neutral-100, #d0d0ce))}.nys-tabgroup__tabs-container .scroll-shadow--right{right:0;background-image:linear-gradient(to right,transparent,var(--nys-color-neutral-100, #d0d0ce))}.nys-tabgroup__tabs-container .scroll-shadow.is-visible{opacity:1}.nys-tabgroup__tabs-container .nys-tabgroup__tabs-background{position:absolute;inset:0;margin:var(--_nys-tabgroup-padding);border-bottom:solid var(--_nys-tab-border-color) var(--_nys-tab-border-width)}.nys-tabgroup__tabs-container .nys-tabgroup__tabs{position:relative;display:flex;gap:var(--_nys-tabgroup-gap);overflow-x:auto;white-space:nowrap;-ms-overflow-style:none;scrollbar-width:none;padding:var(--_nys-tabgroup-padding)}.nys-tabgroup__tabs-container .nys-tabgroup__tabs::-webkit-scrollbar{display:none}.nys-tabgroup__tabs-container .nys-tabgroup__tabs slot{display:contents}';
var Jy = Object.defineProperty, Ds = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Jy(e, t, o), o;
};
const Yi = class Yi extends D {
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
    super.connectedCallback(), this.setAttribute("role", "tab"), this.setAttribute("tabindex", "-1"), this.hasAttribute("aria-selected") || this.setAttribute("aria-selected", this.selected ? "true" : "false"), this.addEventListener("keydown", this._onKeydown), this.addEventListener("focus", this._onFocus), this.addEventListener("blur", this._onBlur), this.addEventListener("click", this._onClick);
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
    return y`<span class="nys-tab">${this.label}</span>`;
  }
};
Yi.styles = C(Jl);
let eo = Yi;
Ds([
  a({ type: String, reflect: !0 })
], eo.prototype, "id");
Ds([
  a({ type: String })
], eo.prototype, "label");
Ds([
  a({ type: Boolean, reflect: !0 })
], eo.prototype, "selected");
Ds([
  a({ type: Boolean, reflect: !0 })
], eo.prototype, "disabled");
customElements.get("nys-tab") || customElements.define("nys-tab", eo);
var ep = Object.defineProperty, ec = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && ep(e, t, o), o;
};
const Gi = class Gi extends D {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this._updateScrollShadows = () => {
      const { scrollLeft: e, scrollWidth: t, clientWidth: n } = this._tabsEl, o = e > 0, s = e + n < t;
      this._shadowLeft.classList.toggle("is-visible", o), this._shadowRight.classList.toggle("is-visible", s);
    }, this._syncChildren = () => {
      const e = this._getTabs(), t = Array.from(this.children).filter(
        (i) => i.tagName.toLowerCase() === "nys-tabpanel"
      );
      e.forEach((i) => {
        i.getAttribute("slot") !== "tab" && i.setAttribute("slot", "tab");
      }), t.forEach((i) => {
        i.getAttribute("slot") !== "panel" && i.setAttribute("slot", "panel");
      });
      const n = this._pairPanels(e, t), o = e.findIndex(
        (i) => i.hasAttribute("selected")
      ), s = o !== -1 ? o : 0;
      this._applySelection(e, n, s);
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
    super.connectedCallback();
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
   * Returns all `<nys-tab>` light-DOM children in DOM order.
   *
   * Tabs are projected into the shadow-DOM tablist via the `tab` slot but
   * remain light-DOM children of the group, so they stay reachable by consumer
   * CSS and JavaScript.
   *
   * @returns An array of `HTMLElement` references to every `<nys-tab>` child.
   */
  _getTabs() {
    return Array.from(this.children).filter(
      (e) => e.tagName.toLowerCase() === "nys-tab"
    );
  }
  /**
   * Returns the `<nys-tabpanel>` light-DOM children ordered to align with
   * `_getTabs()` — i.e. `panels[i]` is the panel paired with `tabs[i]`.
   *
   * Pairing honors explicit `aria-labelledby` references first, then falls
   * back to source order for the remaining panels. See {@link _pairPanels}.
   *
   * @returns An array of `HTMLElement` references to every `<nys-tabpanel>`,
   *   in tab-paired order.
   */
  _getPanels() {
    const e = Array.from(this.children).filter(
      (t) => t.tagName.toLowerCase() === "nys-tabpanel"
    );
    return this._pairPanels(this._getTabs(), e);
  }
  /**
   * Orders `panels` to align 1:1 with `tabs`.
   *
   * A panel is paired with a tab when its `aria-labelledby` matches that tab's
   * `id`; explicit references win over position. Panels without a reference
   * fill the remaining tab slots in source order. Any panels whose reference
   * does not resolve to a tab are appended at the end.
   *
   * Idempotent: after `_applySelection` writes `aria-labelledby` onto every
   * panel, re-running this yields the same order.
   *
   * @param tabs - Ordered `<nys-tab>` elements.
   * @param panels - `<nys-tabpanel>` elements in source order.
   * @returns The panels reordered to tab-paired order.
   */
  _pairPanels(e, t) {
    const n = /* @__PURE__ */ new Map(), o = [];
    t.forEach((i) => {
      const d = i.getAttribute("aria-labelledby");
      d ? n.set(d, i) : o.push(i);
    });
    const s = [];
    return e.forEach((i) => {
      i.id && n.has(i.id) ? (s.push(n.get(i.id)), n.delete(i.id)) : o.length > 0 && s.push(o.shift());
    }), n.forEach((i) => s.push(i)), s;
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
  _applySelection(e, t, n) {
    e.forEach((o, s) => {
      const i = s === n, d = t[s];
      o.setAttribute("aria-selected", i ? "true" : "false"), o.setAttribute("tabindex", i ? "0" : "-1"), d?.id && o.setAttribute("aria-controls", d.id), i ? o.setAttribute("selected", "") : o.removeAttribute("selected");
    }), t.forEach((o, s) => {
      const i = s === n, d = e[s];
      d && o.setAttribute("aria-labelledby", d.id), i ? o.removeAttribute("hidden") : o.setAttribute("hidden", "");
    });
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
    const n = this._getTabs(), o = this._getPanels(), s = n.indexOf(t);
    s !== -1 && this._applySelection(n, o, s);
  }
  /**
   * Implements the
   * {@link https://www.w3.org/WAI/ARIA/apg/patterns/tabs/ ARIA Tabs Pattern}
   * keyboard interaction for a horizontal tablist:
   * - `ArrowRight` — moves focus to the next enabled tab (wraps).
   * - `ArrowLeft` — moves focus to the previous enabled tab (wraps).
   * - `Home` — moves focus to the first enabled tab.
   * - `End` — moves focus to the last enabled tab.
   *
   * Handled keys call `preventDefault()` so they don't trigger the browser's
   * default behavior (e.g. Home/End scrolling the page) — WCAG 2.1.1 Keyboard.
   *
   * Focus is moved without changing selection; Enter / Space on the newly
   * focused tab (handled by `<nys-tab>._onKeydown`) confirm selection.
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
    const t = this._getTabs().filter((i) => !i.hasAttribute("disabled"));
    if (t.length === 0) return;
    const n = e.composedPath().find(
      (i) => i.tagName?.toLowerCase() === "nys-tab"
    ), o = n ? t.indexOf(n) : -1;
    if (o === -1) return;
    let s = o;
    switch (e.key) {
      case "ArrowLeft":
        s = (o - 1 + t.length) % t.length;
        break;
      case "ArrowRight":
        s = (o + 1) % t.length;
        break;
      case "Home":
        s = 0;
        break;
      case "End":
        s = t.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault(), s !== o && t[s].focus?.();
  }
  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  render() {
    return y`
      <div class="nys-tabgroup" @nys-tab-select=${this._handleTabSelect}>
        <div class="nys-tabgroup__tabs-container">
          <div class="nys-tabgroup__tabs-background"></div>
          <div class="scroll-shadow scroll-shadow--left"></div>
          <div
            class="nys-tabgroup__tabs"
            role="tablist"
            aria-orientation="horizontal"
            aria-label=${this.name}
            @keydown=${this._handleKeydown}
          >
            <slot name="tab" @slotchange=${this._syncChildren}></slot>
          </div>
          <div class="scroll-shadow scroll-shadow--right"></div>
        </div>
        <div class="nys-tabgroup__panels">
          <slot name="panel" @slotchange=${this._syncChildren}></slot>
        </div>
        <slot @slotchange=${this._syncChildren}></slot>
      </div>
    `;
  }
};
Gi.styles = C(Jl);
let xr = Gi;
ec([
  a({ type: String, reflect: !0 })
], xr.prototype, "id");
ec([
  a({ type: String })
], xr.prototype, "name");
customElements.get("nys-tabgroup") || customElements.define("nys-tabgroup", xr);
const tp = ":host{display:block}:host([hidden]){display:none}", np = "nys-tabpanel{box-sizing:border-box;padding:var(--_nys-tabpanel-padding);background-color:var(--_nys-tabpanel-background-color);max-height:var(--_nys-tabpanel-max-height);overflow-y:auto}";
var op = Object.defineProperty, rp = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && op(e, t, o), o;
};
let Xr = null;
function sp() {
  Xr || typeof document > "u" || (Xr = new CSSStyleSheet(), Xr.replaceSync(np), document.adoptedStyleSheets = [...document.adoptedStyleSheets, Xr]);
}
const Ki = class Ki extends D {
  constructor() {
    super(...arguments), this.id = "";
  }
  // ---------------------------------------------------------------------------
  // Lifecycle
  // ---------------------------------------------------------------------------
  connectedCallback() {
    super.connectedCallback(), sp(), this.setAttribute("role", "tabpanel"), this.setAttribute("tabindex", "0");
  }
  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  render() {
    return y`<slot></slot>`;
  }
};
Ki.styles = C(tp);
let cs = Ki;
rp([
  a({ type: String, reflect: !0 })
], cs.prototype, "id");
customElements.get("nys-tabpanel") || customElements.define("nys-tabpanel", cs);
const ip = ':host{--_nys-table-width: 100%;--_nys-table-radius: var(--nys-radius-xl, 12px);--_nys-table-padding: var(--nys-space-100, 8px);--_nys-table-border-color: transparent;--_nys-table-border-width: 0;--_nys-table-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif ) );--_nys-table-font-size: var(--nys-font-size-ui-md, 16px);--_nys-table-font-weight: var(--nys-font-weight-regular, 400);--_nys-table-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-table-font-weight--th: 700;--_nys-table-padding--caption: var(--nys-space-250, 20px) var(--nys-space-150, 12px);--_nys-table-font-size--caption: var(--nys-font-size-ui-lg, 18px);--_nys-table-font-weight--caption: var(--nys-font-weight-bold, 700);--_nys-table-padding--cell--x: var(--nys-space-150, 12px);--_nys-table-padding--cell--y: var( --nys-table-padding--cell--y, var(--nys-space-200, 16px) );--_nys-table-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-table-background-color--striped: var(--nys-color-neutral-10, #f6f6f6);--_nys-table-color--code: var(--nys-color-red-600, #b52c2c);--_nys-table-background-color--code: var(--nys-color-neutral-10, #f6f6f6)}:host([bordered]){--_nys-table-border-color: var(--nys-color-neutral-100, #d0d0ce);--_nys-table-border-width: var(--nys-space-1px, 1px)}:host([download]){display:flex;flex-direction:column;gap:var(--nys-space-150, 12px)}.nys-table{width:var(--_nys-table-width)}', ap = 'nys-table table{width:var(--_nys-table-width);border-collapse:collapse;background-color:var(--_nys-table-background-color);font:var(--_nys-table-font-weight) var(--_nys-table-font-size)/var(--_nys-table-line-height) var(--_nys-table-font-family)}nys-table caption{padding:var(--_nys-table-padding--caption);font-size:var(--_nys-table-font-size--caption);font-weight:var(--_nys-table-font-weight--caption);text-align:start}nys-table caption div{display:flex;justify-content:space-between;align-items:center}nys-table td{padding:var(--_nys-table-padding--cell--y) var(--_nys-table-padding--cell--x);border:var(--_nys-table-border-width) solid var(--_nys-table-border-color)}nys-table td code{color:var(--_nys-table-color--code);background-color:var(--_nys-table-background-color--code);padding:var(--nys-space-1px) var(--nys-space-2px);border-radius:var(--nys-radius-md)}nys-table th{border:var(--_nys-table-border-width) solid var(--_nys-table-border-color);overflow:hidden;text-overflow:ellipsis;padding:var(--_nys-table-padding--cell--y) var(--_nys-table-padding--cell--x);text-align:left;font-weight:var(--_nys-table-font-weight--th)}nys-table th:has(nys-button){padding:0}nys-table th nys-button{margin:0;width:-moz-available;width:-webkit-fill-available;width:fill-available;justify-content:space-between;--_nys-button-border-width: 0;--_nys-button-border-radius: 0;--_nys-button-padding--x: var(--_nys-table-padding--cell--x);--_nys-button-justify-content: space-between;--_nys-button-outline-offset: -2px}nys-table th.nys-table__sortedcolumn{background-color:var(--nys-color-theme-weak, #cddde9)}nys-table td.nys-table__sortedcolumn{position:relative;z-index:0}nys-table td.nys-table__sortedcolumn:after{content:"";position:absolute;inset:0;background-color:var(--nys-color-theme, #154973);opacity:.1;pointer-events:none;z-index:-1}nys-table[striped] tbody tr:nth-child(odd){background-color:var(--_nys-table-background-color--striped)}nys-table[sortable] th{cursor:pointer}nys-table .sr-only{border:0!important;clip-path:inset(50%)!important;height:1px!important;overflow:hidden!important;margin:-1px!important;padding:0!important;position:absolute!important;width:1px!important;white-space:nowrap!important}';
var lp = Object.defineProperty, rn = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && lp(e, t, o), o;
};
let Qr = null;
function cp() {
  Qr || typeof document > "u" || (Qr = new CSSStyleSheet(), Qr.replaceSync(ap), document.adoptedStyleSheets = [...document.adoptedStyleSheets, Qr]);
}
const Zi = class Zi extends D {
  /**************** Lifecycle Methods ****************/
  constructor() {
    super(), this.id = "", this.name = "", this.striped = !1, this.sortable = !1, this.bordered = !1, this.download = "", this._sortColumn = null, this._sortDirection = "none", this._captionText = "", this._observer = null, this._enhancing = !1;
  }
  connectedCallback() {
    super.connectedCallback(), cp();
  }
  firstUpdated() {
    this._setupMutationObserver(), this._handleSlotChange();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._observer?.disconnect();
  }
  willUpdate() {
    const e = Array.from(this.children).find(
      (o) => o.tagName === "TABLE"
    );
    if (!e) return;
    const n = e.querySelector("caption")?.textContent?.trim() ?? "";
    this._captionText !== n && (this._captionText = n);
  }
  /******************** Functions ********************/
  // Returns the real slotted <table>. It stays a light-DOM child of the host
  // (projected through the <slot>, never cloned), so it remains reachable by
  // consumer CSS/JS and any embedded components stay interactive.
  _getSlottedTable() {
    return (this.shadowRoot?.querySelector(
      "slot"
    )?.assignedElements({ flatten: !0 }) ?? []).find((n) => n.tagName === "TABLE");
  }
  _observeTable(e) {
    this._observer?.observe(e, {
      childList: !0,
      subtree: !0,
      characterData: !0
    });
  }
  // Runs `fn` (which mutates the slotted table) with the MutationObserver
  // detached, then re-attaches it. Because we now enhance the real table in
  // place, our own writes would otherwise re-trigger the observer and loop.
  _withObserverPaused(e, t) {
    if (this._enhancing) {
      t();
      return;
    }
    this._enhancing = !0, this._observer?.disconnect();
    try {
      t();
    } finally {
      this._observeTable(e), this._enhancing = !1;
    }
  }
  _handleSlotChange() {
    const e = this._getSlottedTable();
    !e || this._enhancing || this._withObserverPaused(e, () => {
      this._normalizeTableDOM(e), this._applyHeaderScopes(e), this.sortable && this._addSortIcons(e);
    });
  }
  _setupMutationObserver() {
    this._observer = new MutationObserver(() => this._handleSlotChange());
    const e = this._getSlottedTable();
    e && this._observeTable(e);
  }
  _normalizeTableDOM(e) {
    const t = e.querySelector("thead"), n = e.querySelector("tbody");
    if (t && n) return;
    const o = e.querySelector(
      "caption"
    ), s = Array.from(e.querySelectorAll("tr"));
    if (s.length === 0) return;
    const i = document.createElement("thead"), d = document.createElement("tbody"), p = s.findIndex((b) => b.querySelector("th"));
    if (p === -1)
      s.forEach((b) => d.appendChild(b));
    else {
      const b = s[p];
      i.appendChild(b), s.forEach((m, x) => {
        x !== p && d.appendChild(m);
      });
    }
    if (e.innerHTML = "", o && e.appendChild(o), this.sortable) {
      const b = document.createElement("span");
      if (b.setAttribute("class", "sr-only"), b.textContent = "Column headers with buttons are sortable.", o)
        o.appendChild(b);
      else {
        const m = document.createElement("caption");
        m.appendChild(b), e.appendChild(m);
      }
    }
    e.appendChild(i), e.appendChild(d);
  }
  /**
   * Adds scope="col" to every column-header cell in the table head. Header cells
   * inside the body (row headers) are left untouched so authors can still mark
   * them scope="row" themselves; we only set a scope where one is missing.
   */
  _applyHeaderScopes(e) {
    e.querySelectorAll("thead th").forEach((n) => {
      n.hasAttribute("scope") || n.setAttribute("scope", "col");
    });
  }
  _addSortIcons(e) {
    const t = Array.from(e.querySelectorAll("thead th"));
    t.length !== 0 && t.forEach((n, o) => {
      if (n.querySelector("nys-button[part='sort-button']")) return;
      const s = n.textContent?.trim();
      if (!s) return;
      n.textContent = "";
      const i = document.createElement("nys-button");
      i.setAttribute("part", "sort-button"), i.setAttribute("variant", "ghost"), i.setAttribute("label", s), i.setAttribute("fullWidth", "true");
      const d = document.createElement("nys-icon");
      d.setAttribute("slot", "suffix-icon"), d.setAttribute("name", "height"), d.setAttribute("size", "24"), d.setAttribute("color", "var(--nys-color-text-weak, #4a4d4f)"), i.appendChild(d), i.addEventListener("nys-click", (p) => {
        p.stopPropagation(), this._onSortClick(o, e);
      }), n.appendChild(i);
    });
  }
  _updateSortIcons(e) {
    e.querySelectorAll("thead th").forEach((n, o) => {
      const s = n.querySelector("nys-button[part='sort-button']"), i = s?.querySelector(
        "nys-icon[slot='suffix-icon']"
      );
      if (!(!s || !i))
        if (o === this._sortColumn)
          switch (n.classList.add("nys-table__sortedcolumn"), this._sortDirection) {
            case "asc":
              i.setAttribute("name", "straight"), i.setAttribute("color", "var(--nys-color-ink, #1b1b1b)"), i.style.transform = "rotate(0deg)", n.setAttribute("aria-sort", "ascending");
              break;
            case "desc":
              i.setAttribute("name", "straight"), i.setAttribute("color", "var(--nys-color-ink, #1b1b1b)"), i.style.transform = "rotate(180deg)", n.setAttribute("aria-sort", "descending");
              break;
          }
        else
          n.classList.remove("nys-table__sortedcolumn"), i.setAttribute("name", "height"), i.setAttribute("color", "var(--nys-color-text-weak, #4a4d4f)"), i.style.transform = "", n.removeAttribute("aria-sort");
    });
  }
  _onSortClick(e, t) {
    const o = Array.from(t.querySelectorAll("thead th"))[e]?.querySelector("nys-button[part='sort-button']")?.getAttribute("label") ?? "", s = this._sortColumn !== e ? "asc" : this._sortDirection === "asc" ? "desc" : "asc";
    this._emitColumnSortEvent(
      e,
      o,
      s
    ) || (this._sortColumn = e, this._sortDirection = s, this._withObserverPaused(t, () => {
      this._updateSortIcons(t), this._sortTable(t, e, s);
    }));
  }
  _sortTable(e, t, n) {
    const o = e.querySelector("tbody");
    if (!o) return;
    const s = Array.from(o.querySelectorAll("tr"));
    s.sort((i, d) => {
      const p = i.children[t]?.textContent?.trim() ?? "", b = d.children[t]?.textContent?.trim() ?? "", m = Number(p), x = Number(b);
      let k;
      return !isNaN(m) && !isNaN(x) ? k = m - x : k = p.localeCompare(b), n === "asc" ? k : -k;
    }), s.forEach((i) => o.appendChild(i)), this._updateSortedColumnStyles(e);
  }
  _updateSortedColumnStyles(e) {
    e.querySelectorAll("tbody tr").forEach((n) => {
      Array.from(n.children).forEach((o, s) => {
        s === this._sortColumn ? o.classList.add("nys-table__sortedcolumn") : o.classList.remove("nys-table__sortedcolumn");
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
  _emitColumnSortEvent(e, t, n) {
    const o = new CustomEvent("nys-column-sort", {
      detail: { columnIndex: e, columnLabel: t, sortDirection: n },
      bubbles: !0,
      composed: !0,
      cancelable: !0
    });
    return this.dispatchEvent(o), o.defaultPrevented;
  }
  /****************** Render ******************/
  render() {
    return y`
      <div class="nys-table">
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
      ${this.download ? y` <nys-button
            id="${this.id}-download-button"
            label=${this._captionText ? `Download ${this._captionText}` : "Download table"}
            size="sm"
            variant="outline"
            prefixIcon="download"
            @nys-click=${this.downloadFile}
          ></nys-button>` : ""}
    `;
  }
};
Zi.styles = C(ip);
let yt = Zi;
rn([
  a({ type: String, reflect: !0 })
], yt.prototype, "id");
rn([
  a({ type: String, reflect: !0 })
], yt.prototype, "name");
rn([
  a({ type: Boolean, reflect: !0 })
], yt.prototype, "striped");
rn([
  a({ type: Boolean, reflect: !0 })
], yt.prototype, "sortable");
rn([
  a({ type: Boolean, reflect: !0 })
], yt.prototype, "bordered");
rn([
  a({ type: String, reflect: !0 })
], yt.prototype, "download");
rn([
  $()
], yt.prototype, "_sortColumn");
rn([
  $()
], yt.prototype, "_sortDirection");
rn([
  $()
], yt.prototype, "_captionText");
customElements.get("nys-table") || customElements.define("nys-table", yt);
const dp = ':host{--_nys-textarea-width: 100%;--_nys-textarea-border-radius: var(--nys-radius-md, 4px);--_nys-textarea-border-width: var(--nys-border-width-sm, 1px);--_nys-textarea-border-color: var(--nys-color-neutral-400, #909395);--_nys-textarea-padding: var(--nys-space-200, 16px);--_nys-textarea-gap: var(--nys-space-50, 4px);--_nys-textarea-color: var(--nys-color-ink, #1b1b1b);--_nys-textarea-color--placeholder: var( --nys-color-text-weaker, var(--nys-color-neutral-500, #797c7f) );--_nys-textarea-outline-color--hover: var(--nys-color-neutral-900, #1b1b1b);--_nys-textarea-outline-width: var(--nys-border-width-sm, 1px);--_nys-textarea-outline-color--focus: var(--nys-color-focus, #004dd1);--_nys-textarea-background-color--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-textarea-border-color--disabled: var(--nys-color-neutral-200, #bec0c1);--_nys-textarea-color--disabled: var( --nys-color-text-disabled, var(--nys-color-neutral-200, #bec0c1) );--_nys-textarea-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-textarea-font-size: var(--nys-font-size-ui-md, 16px);--_nys-textarea-font-weight: var(--nys-font-weight-regular, 400);--_nys-textarea-line-height: var(--nys-font-lineheight-ui-md, 24px);--nys-textarea-letterspacing-ui: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) )}:host([width=sm]){--_nys-textarea-width: var(--nys-form-width-sm, 88px)}:host([width=md]){--_nys-textarea-width: var(--nys-form-width-md, 200px)}:host([width=lg]){--_nys-textarea-width: var(--nys-form-width-lg, 384px)}:host([width=full]){--_nys-textarea-width: 100%;flex:1}:host([showError]){--_nys-textarea-border-color: var(--nys-color-danger, #b52c2c)}:host([inverted]){--_nys-textarea-outline-color--focus: var(--nys-color-focus-reverse, #7aa5e7)}.nys-textarea{font-weight:var(--_nys-textarea-font-weight);font-family:var(--_nys-textarea-font-family);line-height:var(--_nys-textarea-line-height);letter-spacing:var(--nys-textarea-letterspacing-ui);color:var(--_nys-textarea-color);gap:var(--_nys-textarea-gap);display:flex;flex-direction:column}.nys-textarea__textarea{color:var(--_nys-textarea-color);font-size:var(--_nys-textarea-font-size);font-family:var(--_nys-textarea-font-family);border-radius:var(--_nys-textarea-border-radius);border:solid var(--_nys-textarea-border-color) var(--_nys-textarea-border-width);padding:var(--_nys-textarea-padding);width:var(--_nys-textarea-width);line-height:var(--_nys-textarea-line-height);max-width:var(--_nys-textarea-width);box-sizing:border-box}.nys-textarea__textarea::placeholder{color:var(--_nys-textarea-color--placeholder)}.nys-textarea__textarea.none{resize:none}.nys-textarea__textarea:hover:not(:disabled):not(:focus):not([readonly]){outline:solid var(--_nys-textarea-outline-width) var(--_nys-textarea-outline-color--hover);border-color:var(--_nys-textarea-outline-color--hover)}.nys-textarea__textarea:focus:not([readonly]){outline:solid var(--_nys-textarea-outline-width) var(--_nys-textarea-outline-color--focus);border-color:var(--_nys-textarea-outline-color--focus);caret-color:var(--_nys-textarea-outline-color--focus)}.nys-textarea__textarea:disabled,.nys-textarea__textarea:disabled::placeholder{background-color:var(--_nys-textarea-background-color--disabled);border-color:var(--_nys-textarea-border-color--disabled);color:var(--_nys-textarea-color--disabled);cursor:not-allowed}';
var hp = Object.defineProperty, ye = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && hp(e, t, o), o;
};
const ms = class ms extends pt {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this.label = "", this.description = "", this.placeholder = "", this.value = "", this.disabled = !1, this.readonly = !1, this.required = !1, this.optional = !1, this.tooltip = "", this.inverted = !1, this.form = null, this.maxlength = null, this.width = "full", this.rows = 4, this.resize = "vertical", this.showError = !1, this.errorMessage = "", this.ariaLabel = "", this._hasUserInteracted = !1;
  }
  // need this flag for "eager mode"
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   * Form association, ElementInternals, and id generation are provided by
   * NysFormControlElement (@nysds/internals).
   */
  connectedCallback() {
    super.connectedCallback(), this.addEventListener("invalid", this._handleInvalid);
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
    this.setFormValue(this.value), this._manageRequire();
  }
  _manageRequire() {
    const e = this.shadowRoot?.querySelector("textarea");
    if (!e) return;
    const t = this.errorMessage || "This field is required";
    this.required && !this.value ? this.setValidityFromState({ valueMissing: !0 }, t, e) : (this.clearValidity(), this._hasUserInteracted = !1);
  }
  _setValidityMessage(e = "") {
    const t = this.shadowRoot?.querySelector("textarea");
    t && (this.showError = !!e, this.errorMessage?.trim() && e !== "" && (e = this.errorMessage), e ? this.setValidityFromState({ customError: !0 }, e, t) : this.clearValidity());
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
    e && (e.value = "", e.setAttribute("aria-invalid", "false")), this.showError = !1, this.clearValidity(), this.requestUpdate();
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
      const n = this.internals?.form;
      n ? Array.from(n.elements).find(
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
    this.value = t.value, this.setFormValue(this.value), this._hasUserInteracted && this._validate(), this.dispatchEvent(
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
    return y`
      <div class="nys-textarea">
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
        <textarea
          class="nys-textarea__textarea ${this.resize}"
          name=${this.name}
          id=${this.id}
          .value=${this.value}
          ?disabled=${this.disabled}
          ?required=${this.required && !this.readonly}
          ?readonly=${this.readonly}
          aria-disabled=${v(this.disabled ? "true" : void 0)}
          aria-required=${v(this.required ? "true" : void 0)}
          aria-labelledby=${v(
      this.label ? this.id + "--label" : void 0
    )}
          aria-label=${v(
      !this.label && this.ariaLabel ? this.ariaLabel : void 0
    )}
          aria-description=${v(this.description || void 0)}
          aria-invalid=${this.showError ? "true" : "false"}
          aria-errormessage=${this.id + "--error"}
          aria-describedby=${v(
      this.showError ? this.id + "--error" : void 0
    )}
          placeholder=${v(
      this.placeholder ? this.placeholder : void 0
    )}
          maxlength=${v(this.maxlength ?? void 0)}
          .rows=${this.rows}
          form=${v(this.form || void 0)}
          @input=${this._handleInput}
          @focus="${this._handleFocus}"
          @blur="${this._handleBlur}"
          @select="${this._handleSelect}"
          @selectionchange="${this._handleSelectionChange}"
        ></textarea>
        <nys-errormessage
          id=${this.id + "--error"}
          ?showError=${this.showError}
          errorMessage=${this.internals.validationMessage || this.errorMessage}
        ></nys-errormessage>
      </div>
    `;
  }
};
ms.styles = C(dp), ms.shadowRootOptions = {
  ...I.shadowRootOptions,
  delegatesFocus: !0
};
let te = ms;
ye([
  a({ type: String, reflect: !0 })
], te.prototype, "id");
ye([
  a({ type: String, reflect: !0 })
], te.prototype, "name");
ye([
  a({ type: String })
], te.prototype, "label");
ye([
  a({ type: String })
], te.prototype, "description");
ye([
  a({ type: String })
], te.prototype, "placeholder");
ye([
  a({ type: String })
], te.prototype, "value");
ye([
  a({ type: Boolean, reflect: !0 })
], te.prototype, "disabled");
ye([
  a({ type: Boolean, reflect: !0 })
], te.prototype, "readonly");
ye([
  a({ type: Boolean, reflect: !0 })
], te.prototype, "required");
ye([
  a({ type: Boolean, reflect: !0 })
], te.prototype, "optional");
ye([
  a({ type: String })
], te.prototype, "tooltip");
ye([
  a({ type: Boolean, reflect: !0 })
], te.prototype, "inverted");
ye([
  a({ type: String, reflect: !0 })
], te.prototype, "form");
ye([
  a({ type: Number })
], te.prototype, "maxlength");
ye([
  a({ type: String, reflect: !0 })
], te.prototype, "width");
ye([
  a({ type: Number })
], te.prototype, "rows");
ye([
  a({ type: String, reflect: !0 })
], te.prototype, "resize");
ye([
  a({ type: Boolean, reflect: !0 })
], te.prototype, "showError");
ye([
  a({ type: String })
], te.prototype, "errorMessage");
ye([
  a({ type: String })
], te.prototype, "ariaLabel");
customElements.get("nys-textarea") || customElements.define("nys-textarea", te);
const up = '@charset "UTF-8";:host{--_nys-textinput-width: 100%;--_nys-textinput-height: var(--nys-size-500, 40px);--_nys-textinput-border-radius: var(--nys-radius-md, 4px);--_nys-textinput-border-width: var(--nys-border-width-sm, 1px);--_nys-textinput-border-color: var(--nys-color-neutral-400, #909395);--_nys-textinput-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-textinput-color--placeholder: var( --nys-color-text-weaker, var(--nys-color-neutral-500, #797c7f) );--_nys-textinput-padding: var(--nys-space-100, 8px);--_nys-textinput-gap: var(--nys-space-50, 4px);--_nys-textinput-background-color: var( --nys-color-ink-reverse, var(--nys-color-white, #ffffff) );--_nys-textinput-outline-color--hover: var(--nys-color-neutral-900, #1b1b1b);--_nys-textinput-outline-width: var(--nys-border-width-sm, 1px);--_nys-textinput-outline-color--focus: var(--nys-color-focus, #004dd1);--_nys-textinput-background-color--disabled: var( --nys-color-neutral-10, #f6f6f6 );--_nys-textinput-border-color--disabled: var( --nys-color-neutral-200, #bec0c1 );--_nys-textinput-color--disabled: var( --nys-color-text-disabled, var(--nys-color-neutral-200, #bec0c1) );--_nys-textinput-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-textinput-font-size: var(--nys-font-size-ui-md, 16px);--_nys-textinput-font-weight: var(--nys-font-weight-regular, 400);--_nys-textinput-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-textinput-letter-spacing: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) )}:host([width=sm]){--_nys-textinput-width: var(--nys-form-width-sm, 88px)}:host([width=md]){--_nys-textinput-width: var(--nys-form-width-md, 200px)}:host([width=lg]){--_nys-textinput-width: var(--nys-form-width-lg, 384px)}:host([width=full]){--_nys-textinput-width: 100%;flex:1}:host([showError]){--_nys-textinput-border-color: var(--nys-color-danger, #b52c2c)}:host([inverted]){--_nys-textinput-outline-color--focus: var( --nys-color-focus-reverse, #7aa5e7 )}.nys-textinput{font-weight:var(--_nys-textinput-font-weight);font-family:var(--_nys-textinput-font-family);font-size:var(--_nys-textinput-font-size);line-height:var(--_nys-textinput-line-height);letter-spacing:var(--_nys-textinput-letter-spacing);color:var(--_nys-textinput-color);gap:var(--_nys-textinput-gap);display:flex;flex-direction:column}.nys-textinput__mask-overlay{position:absolute;margin:calc(var(--_nys-textinput-padding) + var(--_nys-textinput-border-width));color:var(--nys-color-text-weaker, #797c7f);display:inline;overflow:hidden;white-space:nowrap;font:inherit;letter-spacing:normal}.nys-textinput__input{color:var(--_nys-textinput-color);border-radius:var(--_nys-textinput-border-radius);border:solid var(--_nys-textinput-border-color) var(--_nys-textinput-border-width);outline:transparent solid var(--_nys-textinput-outline-width);padding:var(--_nys-textinput-padding);width:100%;height:var(--_nys-textinput-height);box-sizing:border-box;background-color:transparent;position:relative;font:inherit}.nys-textinput__input[type=search]::-webkit-search-cancel-button,.nys-textinput__input[type=search]::-webkit-search-decoration{appearance:none;display:none}.nys-textinput__input::placeholder{color:var(--_nys-textinput-color--placeholder)}.nys-textinput__buttoncontainer{width:var(--_nys-textinput-width);max-width:100%;display:flex}.nys-textinput__buttoncontainer.has-end-button .nys-textinput__input{border-start-end-radius:0;border-end-end-radius:0;border-inline-end:none}.nys-textinput__buttoncontainer.has-start-button .nys-textinput__input{border-start-start-radius:0;border-end-start-radius:0;border-inline-start:none}.nys-textinput__container{position:relative;display:flex;align-items:center;width:100%;background-color:var(--_nys-textinput-background-color);border-radius:var(--_nys-textinput-border-radius)}::slotted(nys-button){--_nys-button-height: var(--_nys-textinput-height);--_nys-button-border-radius: var(--_nys-textinput-border-radius);--_nys-button-background-color--disabled: var( --_nys-textinput-background-color--disabled );--_nys-button-border-color--disabled: var(--_nys-textinput-color--disabled);--_nys-button-color--disabled: var(--_nys-textinput-color--disabled);--_nys-button-border-width: var(--_nys-textinput-border-width);z-index:1}.nys-textinput__buttoncontainer.has-start-button ::slotted(nys-button){--_nys-button-border-radius: var(--_nys-textinput-border-radius) 0 0 var(--_nys-textinput-border-radius)}.nys-textinput__buttoncontainer.has-end-button ::slotted(nys-button){--_nys-button-border-radius: 0 var(--_nys-textinput-border-radius) var(--_nys-textinput-border-radius) 0}.inline-icon{position:absolute;right:var(--nys-space-50, 4px);top:50%;transform:translateY(-50%);cursor:pointer;color:var(--_nys-textinput-color--icon);--nys-button-background-color: var(--_nys-textinput-background-color);--nys-button-background-color--hover: var(--_nys-textinput-background-color);--nys-button-background-color--active: var(--_nys-textinput-background-color);--_nys-button-outline-focus: calc(var(--_nys-button-outline-width) * -1);--_nys-button-padding--y: var(--nys-space-50, 4px);--_nys-button-padding--x: var(--nys-space-50, 4px);--_nys-button-height: var(--nys-size-300, 32px);--_nys-button-width: var(--nys-size-400, 32px)}.nys-textinput__input:hover:not(:disabled):not(:focus):not([readonly]){outline-color:var(--_nys-textinput-outline-color--hover);border-color:var(--_nys-textinput-outline-color--hover)}.nys-textinput__input:focus:not([readonly]){outline-color:var(--_nys-textinput-outline-color--focus);border-color:var(--_nys-textinput-outline-color--focus);caret-color:var(--_nys-textinput-outline-color--focus)}.nys-textinput__input:disabled,.nys-textinput__input:disabled::placeholder,.nys-textinput__input:disabled+.eye-icon{background-color:var(--_nys-textinput-background-color--disabled);border-color:var(--_nys-textinput-border-color--disabled);color:var(--_nys-textinput-color--disabled);cursor:not-allowed}';
var yp = Object.defineProperty, X = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && yp(e, t, o), o;
};
const xs = class xs extends pt {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this.type = "text", this.label = "", this.description = "", this.placeholder = "", this.value = "", this.disabled = !1, this.readonly = !1, this.required = !1, this.optional = !1, this.tooltip = "", this.form = null, this.pattern = "", this.maxlength = null, this.ariaLabel = "", this.width = "full", this.step = null, this.min = null, this.max = null, this.inverted = !1, this.showError = !1, this.errorMessage = "", this.showPassword = !1, this._originalErrorMessage = "", this._hasUserInteracted = !1, this._maskPatterns = {
      tel: "(___) ___-____"
    };
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   * Form association, ElementInternals, and id generation are provided by
   * NysFormControlElement (@nysds/internals).
   */
  connectedCallback() {
    super.connectedCallback(), this._originalErrorMessage = this.errorMessage ?? "", this.addEventListener("invalid", this._handleInvalid);
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
      const t = this._maskPatterns[this.type], n = this._inputEl;
      if (n)
        if (t)
          this.maxlength === null && (n.maxLength = t.length), this._updateOverlay(n.value, t);
        else {
          this.maxlength === null && n.removeAttribute("maxLength");
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
    this.setFormValue(this.value), this._manageRequire();
  }
  _manageRequire() {
    const e = this._inputEl;
    if (!e) return;
    const t = this.errorMessage || "This field is required";
    this.required && (!this.value || this.value?.trim() === "") ? this.setValidityFromState({ valueMissing: !0 }, t, e) : (this.clearValidity(), this._hasUserInteracted = !1);
  }
  _setValidityMessage(e = "") {
    const t = this._inputEl;
    t && (this.showError = !!e, this._originalErrorMessage?.trim() && e !== "" ? this.errorMessage = this._originalErrorMessage : this.errorMessage = e, e ? this.setValidityFromState(
      { customError: !0 },
      this.errorMessage,
      t
    ) : this.clearValidity());
  }
  _validate() {
    const e = this._inputEl;
    if (!e) return;
    const t = e.validity;
    let n = "";
    t.valueMissing ? n = "This field is required" : t.typeMismatch ? n = "Invalid format for this type" : t.patternMismatch ? n = "Invalid format" : t.tooShort ? n = `Value is too short. Minimum length is ${e.minLength}` : t.tooLong ? n = `Value is too long. Maximum length is ${e.maxLength}` : t.rangeUnderflow ? n = `Value must be at least ${e.min}` : t.rangeOverflow ? n = `Value must be at most ${e.max}` : t.stepMismatch ? n = "Invalid step value" : n = e.validationMessage, this._setValidityMessage(n);
  }
  // This callback is automatically called when the parent form is reset.
  formResetCallback() {
    this.value = "";
    const e = this._inputEl;
    e && (e.value = ""), this.setFormValue(""), this.showError = !1, this.errorMessage = "", this.clearValidity(), this.showPassword = !1;
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
      const n = this.internals?.form;
      n ? Array.from(n.elements).find(
        (i) => typeof i.checkValidity == "function" && !i.checkValidity()
      ) === this && t.focus() : t.focus();
    }
  }
  _togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  _clearSearch() {
    this.value = "";
    const e = this._inputEl;
    e && (e.value = "", e.focus()), this.setFormValue(""), this._hasUserInteracted && this._validate(), this.dispatchEvent(
      new CustomEvent("nys-input", {
        detail: { id: this.id, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _updateOverlay(e, t) {
    const n = this.shadowRoot?.querySelector(
      ".nys-textinput__mask-overlay"
    );
    if (!n) return;
    const o = e, s = t.slice(o.length);
    n.textContent = o + s;
  }
  _applyMask(e, t) {
    const n = e.replace(/\D/g, "");
    let o = "";
    if (this.type === "tel")
      return n.length > 0 && (o = "(" + n.substring(0, 3)), n.length >= 4 && (o += ") " + n.substring(3, 6)), n.length > 6 && (o += "-" + n.substring(6, 10)), o;
    let s = 0;
    for (let i = 0; i < t.length; i++)
      if (t[i] === "_" || t[i].match(/[d9]/i))
        if (s < n.length)
          o += n[s++];
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
    let n = t.value;
    const o = this._maskPatterns[this.type];
    o && (n = this._applyMask(n, o), t.value = n, this._updateOverlay(n, o)), this.value = n, this.setFormValue(this.value), this._hasUserInteracted && this._validate(), this.dispatchEvent(
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
    ), n = this.shadowRoot?.querySelector(
      ".nys-textinput__buttoncontainer"
    );
    if (!t || !n) return;
    const o = t.assignedElements();
    let s = !1;
    o.forEach((i) => {
      i instanceof HTMLElement && i.tagName.toLowerCase() === "nys-button" && !s ? (s = !0, i.setAttribute("size", "sm"), i.setAttribute("variant", "primary"), this.disabled ? i.setAttribute("disabled", "true") : i.removeAttribute("disabled")) : (console.warn(
        "The '" + e + "' slot only accepts a single <nys-button> element. Removing invalid or extra node:",
        i
      ), i.remove());
    }), e === "startButton" ? n.classList.toggle("has-start-button", s) : e === "endButton" && n.classList.toggle("has-end-button", s);
  }
  render() {
    return y`
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
              aria-labelledby=${v(
      this.label ? this.id + "--label" : void 0
    )}
              aria-label=${v(
      !this.label && this.ariaLabel ? this.ariaLabel : void 0
    )}
              aria-required=${this.required}
              aria-disabled="${this.disabled}"
              aria-invalid=${this.showError ? "true" : "false"}
              aria-errormessage=${this.id + "--error"}
              aria-describedby=${v(
      this.showError ? this.id + "--error" : void 0
    )}
              .value=${this.value}
              placeholder=${v(
      this.placeholder ? this.placeholder : void 0
    )}
              pattern=${v(this.pattern ? this.pattern : void 0)}
              min=${v(this.min !== null ? this.min : void 0)}
              maxlength=${v(
      this.maxlength !== null ? this.maxlength : void 0
    )}
              step=${v(this.step !== null ? this.step : void 0)}
              max=${v(this.max !== null ? this.max : void 0)}
              form=${v(this.form || void 0)}
              @input=${this._handleInput}
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
            />
            ${this.type === "password" ? y` <nys-button
                  class="inline-icon"
                  id="password-toggle"
                  ariaLabel="password toggle"
                  variant="ghost"
                  circle
                  size="sm"
                  @nys-click=${() => !this.disabled && this._togglePasswordVisibility()}
                >
                  <nys-icon
                    slot="circle-icon"
                    size="2xl"
                    name=${this.showPassword ? "visibility_off" : "visibility"}
                  ></nys-icon>
                </nys-button>` : ""}
            ${this.type === "search" && this.value && !this.disabled && !this.readonly ? y` <nys-button
                  class="inline-icon"
                  id="search-clear"
                  ariaLabel="clear search"
                  variant="ghost"
                  circle
                  size="sm"
                  @nys-click=${() => this._clearSearch()}
                >
                  <nys-icon
                    slot="circle-icon"
                    size="2xl"
                    name="close"
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
xs.styles = C(up), xs.shadowRootOptions = {
  ...I.shadowRootOptions,
  delegatesFocus: !0
};
let F = xs;
X([
  a({ type: String, reflect: !0 })
], F.prototype, "id");
X([
  a({ type: String, reflect: !0 })
], F.prototype, "name");
X([
  a({ type: String, reflect: !0 })
], F.prototype, "type");
X([
  a({ type: String })
], F.prototype, "label");
X([
  a({ type: String })
], F.prototype, "description");
X([
  a({ type: String })
], F.prototype, "placeholder");
X([
  a({ type: String })
], F.prototype, "value");
X([
  a({ type: Boolean, reflect: !0 })
], F.prototype, "disabled");
X([
  a({ type: Boolean, reflect: !0 })
], F.prototype, "readonly");
X([
  a({ type: Boolean, reflect: !0 })
], F.prototype, "required");
X([
  a({ type: Boolean, reflect: !0 })
], F.prototype, "optional");
X([
  a({ type: String })
], F.prototype, "tooltip");
X([
  a({ type: String, reflect: !0 })
], F.prototype, "form");
X([
  a({ type: String })
], F.prototype, "pattern");
X([
  a({ type: Number })
], F.prototype, "maxlength");
X([
  a({ type: String })
], F.prototype, "ariaLabel");
X([
  a({ type: String, reflect: !0 })
], F.prototype, "width");
X([
  a({ type: Number })
], F.prototype, "step");
X([
  a({ type: Number })
], F.prototype, "min");
X([
  a({ type: Number })
], F.prototype, "max");
X([
  a({ type: Boolean, reflect: !0 })
], F.prototype, "inverted");
X([
  a({ type: Boolean, reflect: !0 })
], F.prototype, "showError");
X([
  a({ type: String })
], F.prototype, "errorMessage");
X([
  to("input")
], F.prototype, "_inputEl");
X([
  $()
], F.prototype, "showPassword");
customElements.get("nys-textinput") || customElements.define("nys-textinput", F);
const pp = ':host{--_nys-toggle-width: var(--nys-font-size-8xl, 44px);--_nys-toggle-height: var(--nys-size-300, 24px);--_nys-toggle-border-radius: var(--nys-radius-round, 1776px);--_nys-toggle-border-width: var(--nys-border-width-md, 2px);--_nys-toggle-size--knob: var(--nys-font-size-lg, 18px);--_nys-toggle-margin--knob: calc( (var(--_nys-toggle-height) - var(--_nys-toggle-size--knob)) / 2 );--_nys-toggle-transform--translateX: calc( var(--_nys-toggle-width) - var(--_nys-toggle-size--knob) - var( --_nys-toggle-margin--knob ) - 2px );--_nys-toggle-gap: var(--nys-space-150, 12px);--_nys-toggle-transition-duration: .3s;--_nys-toggle-outline-color: var(--nys-color-focus, #004dd1);--_nys-toggle-outline-width: var(--nys-border-width-md, 2px);--_nys-toggle-background-color: var(--nys-color-neutral-500, #797c7f);--_nys-toggle-background-color--disabled: var( --nys-color-neutral-100, #d0d0ce );--_nys-toggle-background-color--checked: var(--nys-color-theme, #154973);--_nys-toggle-background-color--hover: var(--nys-color-neutral-600, #62666a);--_nys-toggle-background-color--active: var(--nys-color-neutral-700, #4a4d4f);--_nys-toggle-background-color--checked--hover: var( --nys-color-theme-strong, #0e324f );--_nys-toggle-background-color--checked--active: var( --nys-color-theme-stronger, #081b2b );--_nys-toggle-color-ink-reverse: var(--nys-color-ink-reverse, #ffffff);--_nys-toggle-color--disabled: var(--nys-color-neutral-500, #797c7f)}:host([inverted]){--_nys-toggle-outline-color: var(--nys-color-focus-reverse, #7aa5e7)}.nys-toggle__content{display:flex;gap:var(--_nys-toggle-gap)}.nys-toggle__content nys-label{--_nys-label-font-weight: var(--nys-font-weight-semibold, 600)}.nys-toggle__content:has(input:disabled) nys-label{--_nys-label-color: var(--_nys-toggle-color--disabled);cursor:not-allowed}.nys-toggle__toggle{position:relative;display:inline-block;width:var(--_nys-toggle-width);min-width:var(--_nys-toggle-width);max-width:var(--_nys-toggle-width);height:var(--_nys-toggle-height);min-height:var(--_nys-toggle-height);max-height:var(--_nys-toggle-height)}.nys-toggle__toggle input{opacity:0;width:0;height:0}.nys-toggle__toggle input:checked+.slider{background-color:var(--_nys-toggle-background-color--checked)}.nys-toggle__toggle input:checked+.slider:hover{background-color:var(--_nys-toggle-background-color--checked--hover)}.nys-toggle__toggle input:checked+.slider:hover .knob .toggle-icon{color:var(--_nys-toggle-background-color--checked--hover)}.nys-toggle__toggle input:checked+.slider .knob{transform:translate(var(--_nys-toggle-transform--translateX))}.nys-toggle__toggle input:checked+.slider .knob .toggle-icon{color:var(--_nys-toggle-background-color--checked)}.nys-toggle__toggle input:active:not(:disabled)+.slider{background-color:var(--_nys-toggle-background-color--active);outline:solid var(--_nys-toggle-outline-width) var(--_nys-toggle-outline-color)}.nys-toggle__toggle input:active:not(:disabled)+.slider .knob .toggle-icon{color:var(--_nys-toggle-background-color--active)}.nys-toggle__toggle input:active:not(:disabled)+.slider:checked{background-color:var(--_nys-toggle-background-color--checked--active)}.nys-toggle__toggle input:active:not(:disabled)+.slider:checked .knob .toggle-icon{color:var(--_nys-toggle-background-color--checked--active)}.nys-toggle__toggle input:focus+.slider{outline:solid var(--_nys-toggle-outline-width) var(--_nys-toggle-outline-color)}.nys-toggle__toggle input:disabled+.slider{background-color:var(--_nys-toggle-background-color--disabled);cursor:not-allowed}.nys-toggle__toggle input:disabled+.slider:hover{background-color:var(--_nys-toggle-background-color--disabled)}.nys-toggle__toggle input:disabled+.slider .knob .toggle-icon{color:var(--_nys-toggle-background-color--disabled)}.slider{position:absolute;cursor:pointer;border-radius:var(--_nys-toggle-border-radius);outline-offset:var(--_nys-toggle-border-width);width:var(--_nys-toggle-width);inset:0;background-color:var(--_nys-toggle-background-color);display:flex;align-items:center}.slider:hover{background-color:var(--_nys-toggle-background-color--hover)}.slider:hover .knob .toggle-icon{color:var(--_nys-toggle-background-color--hover)}.knob{content:"";height:var(--_nys-toggle-size--knob);width:var(--_nys-toggle-size--knob);margin:var(--_nys-toggle-margin--knob);border-radius:var(--nys-radius-round, 1776px);background-color:var(--_nys-toggle-color-ink-reverse);transition:all var(--_nys-toggle-transition-duration) cubic-bezier(.27,.2,.25,1.51);overflow:hidden;display:flex;align-items:center;justify-content:center}.toggle-icon{position:absolute;color:var(--_nys-toggle-background-color)}:host([size=sm]){--_nys-toggle-width: var(--nys-size-450, 36px);--_nys-toggle-height: var(--nys-size-250, 20px);--_nys-toggle-size--knob: var(--nys-size-200, 16px);--_nys-toggle-gap: var(--nys-space-100, 8px)}:host([size=sm]) .toggle-icon{font-size:var(--nys-font-size-body-xs, 12px)}@supports not (font-size: 1cap){:host([size=sm]) .toggle-icon{font-size:var(--nys-font-size-body-xs, 12px)}}:host([size=md]){--_nys-toggle-width: var(--nys-size-550, 44px);--_nys-toggle-height: var(--nys-size-300, 24px);--_nys-toggle-size--knob: var(--nys-size-250, 20px)}:host([size=md]) .toggle-icon{font-size:var(--nys-font-size-body-sm, 14px)}@supports not (font-size: 1cap){:host([size=md]) .toggle-icon{font-size:calc(var(--nys-font-size-body-sm, 14px) - 1px)}}@media(prefers-reduced-motion:reduce){:host{--_nys-toggle-transition-duration: 0s}}';
var fp = Object.defineProperty, Tt = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && fp(e, t, o), o;
};
const ws = class ws extends pt {
  constructor() {
    super(...arguments), this.id = "", this.name = "", this.value = "", this.label = "", this.description = "", this.form = null, this.checked = !1, this.disabled = !1, this.noIcon = !1, this.inverted = !1, this.size = "md";
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   * Form association, ElementInternals, and id generation are provided by
   * NysFormControlElement (@nysds/internals). super.connectedCallback() assigns
   * an id (prefix = localName) when one is not provided.
   */
  /**
   * Form Integration
   * --------------------------------------------------------------------------
   */
  // Update the internals whenever `checked` or `value` changes.
  updated(e) {
    (e.has("checked") || e.has("value")) && this.setFormValue(this.checked ? this.value : null);
  }
  formResetCallback() {
    this.checked = !1, this.setFormValue(this.checked ? this.value : null), this.requestUpdate();
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
    return y`
      <div class="nys-toggle">
        <div class="nys-toggle__content">
          <div class="nys-toggle__toggle">
            <input
              id=${this.id}
              type="checkbox"
              name="${v(this.name ? this.name : void 0)}"
              .value=${this.value}
              form=${v(this.form || void 0)}
              .checked=${this.checked}
              ?disabled=${this.disabled}
              role="switch"
              aria-checked="${this.checked ? "true" : "false"}"
              aria-disabled="${this.disabled ? "true" : "false"}"
              aria-labelledby=${v(
      this.label ? this.id + "--label" : void 0
    )}
              aria-label=${v(this.label ? void 0 : "Toggle switch")}
              @click=${this._handleClick}
              @focus=${this._handleFocus}
              @blur=${this._handleBlur}
              @keydown=${this._handleKeyDown}
            />
            <span class="slider" @click=${this._handleSliderClick}>
              <div class="knob">
                ${this.noIcon ? "" : y`<nys-icon
                      class="toggle-icon"
                      name="${this.checked ? "check" : "close"}"
                      size="2xl"
                    ></nys-icon>`}
              </div>
            </span>
          </div>
          ${this.label && y`<nys-label
            id="${this.id}--label"
            label=${this.label}
            description=${v(this.description || void 0)}
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
ws.styles = C(pp), ws.shadowRootOptions = {
  ...I.shadowRootOptions,
  delegatesFocus: !0
};
let Ke = ws;
Tt([
  a({ type: String, reflect: !0 })
], Ke.prototype, "id");
Tt([
  a({ type: String, reflect: !0 })
], Ke.prototype, "name");
Tt([
  a({ type: String })
], Ke.prototype, "value");
Tt([
  a({ type: String })
], Ke.prototype, "label");
Tt([
  a({ type: String })
], Ke.prototype, "description");
Tt([
  a({ type: String, reflect: !0 })
], Ke.prototype, "form");
Tt([
  a({ type: Boolean, reflect: !0 })
], Ke.prototype, "checked");
Tt([
  a({ type: Boolean, reflect: !0 })
], Ke.prototype, "disabled");
Tt([
  a({ type: Boolean })
], Ke.prototype, "noIcon");
Tt([
  a({ type: Boolean, reflect: !0 })
], Ke.prototype, "inverted");
Tt([
  a({ type: String, reflect: !0 })
], Ke.prototype, "size");
customElements.get("nys-toggle") || customElements.define("nys-toggle", Ke);
const bp = `:host{--_nys-tooltip-color: var(--nys-color-text-reverse, #ffffff);--_nys-tooltip-background-color: var(--nys-color-ink, #1b1b1b);--_nys-tooltip-border-radius: var(--nys-radius-md, 4px);--_nys-tooltip-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-tooltip-font-size: var(--nys-font-size-ui-sm, 14px);--_nys-tooltip-letter-spacing: var(--nys-font-letterspacing-ui-sm, .044px);--_nys-tooltip-line-height: var(--nys-font-lineheight-ui-sm, 24px)}.nys-tooltip__content{position:fixed;top:0;left:0;max-width:400px;width:max-content;max-height:120px;padding:var(--nys-space-50, 4px) var(--nys-space-100, 8px);background-color:var(--_nys-tooltip-background-color);border-radius:var(--_nys-tooltip-border-radius);cursor:auto;z-index:1}.nys-tooltip__inner{color:var(--_nys-tooltip-color);font-family:var(--_nys-tooltip-font-family);font-size:var(--_nys-tooltip-font-size);font-weight:400;line-height:var(--_nys-tooltip-line-height);letter-spacing:var(--_nys-tooltip-letter-spacing);white-space:normal;overflow-wrap:anywhere;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;line-clamp:4;-webkit-box-orient:vertical}.nys-tooltip__arrow{position:absolute;width:14px;height:6px;background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="6" viewBox="0 0 15 6" fill="none"><path d="M8.15079 5.44218C7.7763 5.76317 7.2237 5.76317 6.84921 5.44218L0.5 0H14.5L8.15079 5.44218Z" fill="%231B1B1B"/></svg>') no-repeat center}.nys-tooltip__content[active]{display:block}.fade-out{opacity:0;transition:opacity .2s ease-out}@media(prefers-reduced-motion:reduce){.fade-out{transition:none}}:host([position=top]) .nys-tooltip__arrow{top:100%;left:var(--arrow-offset-x, 50%);transform:translate(-50%)}:host([position=bottom]) .nys-tooltip__arrow{bottom:100%;left:var(--arrow-offset-x, 50%);transform:translate(-50%) rotate(180deg)}:host([position=left]) .nys-tooltip__arrow{left:100%;top:50%;transform:translateY(-50%) rotate(-90deg);margin-left:-4px}:host([position=right]) .nys-tooltip__arrow{right:100%;top:50%;transform:translateY(-50%) rotate(90deg);margin-right:-4px}:host([inverted]) .nys-tooltip__content{--_nys-tooltip-color: var(--nys-color-text, #1b1b1b);--_nys-tooltip-background-color: var(--nys-color-ink-reverse, #ffffff)}:host([inverted]) .nys-tooltip__arrow{background:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="6" viewBox="0 0 15 6" fill="none"><path d="M8.15079 5.44218C7.7763 5.76317 7.2237 5.76317 6.84921 5.44218L0.5 0H14.5L8.15079 5.44218Z" fill="white"/></svg>') no-repeat center}@media(max-width:400px){.nys-tooltip__content{max-width:calc(100vw - 2rem)}}`;
var vp = Object.defineProperty, _p = Object.getOwnPropertyDescriptor, qo = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? _p(e, t) : e, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = (n ? i(e, t, o) : i(o)) || o);
  return n && o && vp(e, t, o), o;
};
const Xi = class Xi extends D {
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
      const n = e.matches(":hover"), o = t.matches(":hover"), s = document.activeElement === t;
      !n && !o && !s || (this._hideTimeout && (clearTimeout(this._hideTimeout), this._hideTimeout = null), e.classList.remove("fade-out"), this._active = !0);
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
    super.connectedCallback(), window.addEventListener("keydown", this._handleEscapeKey);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    const e = this._getReferenceElement(), t = this.shadowRoot?.querySelector(".nys-tooltip__content");
    e && t && (e.removeEventListener("mouseenter", this._showTooltip), e.removeEventListener("mouseenter", this._cancelFadeOut), e.removeEventListener("mouseleave", this._handleBlurOrMouseLeave), e.removeEventListener("focusin", this._showTooltip), e.removeEventListener("focusout", this._handleBlurOrMouseLeave), t.removeEventListener("mouseenter", this._cancelFadeOut), t.removeEventListener("mouseleave", this._handleBlurOrMouseLeave)), window.removeEventListener("keydown", this._handleEscapeKey);
  }
  async firstUpdated() {
    await this.updateComplete;
    const e = this._getReferenceElement(), t = this.shadowRoot?.querySelector(".nys-tooltip__content");
    !e || !t || (this.applyInverseTransform(), this._associateTrigger(e), this._applyTooltipPropToFormComponent(e), (e.tagName.toLowerCase() === "nys-button" || e.tagName.toLowerCase() === "nys-icon") && (this._applyFocusBehavior(e), e.addEventListener("mouseenter", this._showTooltip), e.addEventListener("mouseenter", this._cancelFadeOut), e.addEventListener("mouseleave", this._handleBlurOrMouseLeave), e.addEventListener("focusin", this._showTooltip), e.addEventListener("focusout", this._handleBlurOrMouseLeave), t.addEventListener("mouseenter", this._cancelFadeOut), t.addEventListener("mouseleave", this._handleBlurOrMouseLeave)));
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
    const n = (o) => {
      for (const s of Array.from(o.querySelectorAll("*"))) {
        const i = s.shadowRoot;
        if (i) {
          const d = i.getElementById(e);
          if (d) return d;
          const p = n(i);
          if (p) return p;
        }
      }
      return null;
    };
    return n(document);
  }
  /**
   * Programmatically associates the trigger with the tooltip via
   * `aria-describedby`, per the WAI-ARIA Tooltip pattern. The tooltip bubble
   * (`.nys-tooltip__content`) carries `role="tooltip"` and `id={this.id}`, so we
   * point the trigger's `aria-describedby` at that id. Preserves any existing
   * `aria-describedby` tokens the consumer already set, and avoids duplicates.
   */
  _associateTrigger(e) {
    if (!this.text?.trim()) return;
    const t = (e.getAttribute("aria-describedby") || "").split(/\s+/).filter(Boolean);
    t.includes(this.id) || (t.push(this.id), e.setAttribute("aria-describedby", t.join(" ")));
  }
  // We need to pass `ariaLabel` or `ariaDescription` to the nys-components so they can announce both their label and the tooltip's text
  async _passAria(e) {
    const t = e.tagName.toLowerCase();
    if (t === "nys-icon")
      e.setAttribute("ariaLabel", `Hint: ${this.text}`);
    else if (t === "nys-button") {
      const n = e, o = (n.ariaDescribedBy || "").split(/\s+/).filter(Boolean);
      o.includes(this.id) || (o.push(this.id), n.ariaDescribedBy = o.join(" "));
    }
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
      const n = e.shadowRoot?.querySelector("svg");
      n && n.setAttribute("tabindex", "0");
    }
  }
  /**
   * Checks if the tooltip fits inside the viewport on the given side of the trigger.
   * Used for auto-positioning. Ignores text overflow for now.
   */
  _doesPositionFit(e) {
    const t = this._getReferenceElement(), n = this.shadowRoot?.querySelector(".nys-tooltip__content");
    if (!t || !n || e == null) return;
    const o = t.getBoundingClientRect(), s = n.getBoundingClientRect(), i = 8, d = {
      top: o.top - i,
      left: o.left - i,
      bottom: window.innerHeight - o.bottom - i,
      right: window.innerWidth - o.right - i
    };
    return {
      top: d.top >= s.height,
      bottom: d.bottom >= s.height,
      left: d.left >= s.width,
      right: d.right >= s.width
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
    const n = e.getBoundingClientRect(), o = 8, s = {
      top: n.top - o,
      left: n.left - o,
      bottom: window.innerHeight - n.bottom - o,
      right: window.innerWidth - n.right - o
    };
    let i = [
      "top",
      "bottom",
      "right",
      "left"
    ];
    if (this._userHasSetPosition && this._originalUserPosition) {
      const b = this._originalUserPosition;
      b === "left" ? i = ["left", "right", "top", "bottom"] : b === "right" ? i = ["right", "left", "top", "bottom"] : b === "top" ? i = ["top", "bottom", "right", "left"] : b === "bottom" && (i = ["bottom", "top", "right", "left"]);
    }
    for (const b of i)
      if (this._doesPositionFit(b)) {
        this._setInternalPosition(b), await this.updateComplete, this._positionTooltipElement(e, t, b), this._shiftTooltipIntoViewport(t);
        return;
      }
    let d = "top", p = s.top;
    for (const b of i)
      s[b] > p && (p = s[b], d = b);
    this._setInternalPosition(d), await this.updateComplete, this._positionTooltipElement(e, t, d), this._shiftTooltipIntoViewport(t);
  }
  _positionStartingBase() {
    const e = this.shadowRoot?.querySelector(
      ".nys-tooltip__content"
    );
    e && (e.style.top = "0px", e.style.left = "0px");
  }
  _positionTooltipElement(e, t, n) {
    const o = e.getBoundingClientRect(), s = t.getBoundingClientRect(), i = 8;
    let d = 0, p = 0;
    switch (n) {
      case "top":
        d = o.top - s.height - i, p = o.left + o.width / 2 - s.width / 2;
        break;
      case "bottom":
        d = o.bottom + i, p = o.left + o.width / 2 - s.width / 2;
        break;
      case "left":
        d = o.top + o.height / 2 - s.height / 2, p = o.left - s.width - i;
        break;
      case "right":
        d = o.top + o.height / 2 - s.height / 2, p = o.right + i;
        break;
      default:
        d = o.top - s.height - i, p = o.left + o.width / 2 - s.width / 2;
        break;
    }
    t.style.top = `${d}px`, t.style.left = `${p}px`;
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
    const n = t.getBoundingClientRect(), o = e.getBoundingClientRect(), s = n.left + n.width / 2, i = o.left < 0, d = o.right > window.innerWidth;
    i ? (e.style.left = "10px", e.style.transform = "none") : d && (e.style.right = "0px", e.style.left = "auto", e.style.transform = "none");
    const p = e.getBoundingClientRect(), b = (s - p.left) / p.width, m = Math.max(0, Math.min(1, b)) * 100;
    e.style.setProperty("--arrow-offset-x", `${m}%`);
  }
  // Reposition tooltip back to original set position (e.g. top, left, bottom, right) to avoid positioning issue base on last position
  _resetTooltipPositioningStyles(e) {
    e.style.left = "", e.style.right = "", e.style.top = "", e.style.transform = "", e.style.removeProperty("--arrow-offset-x");
  }
  render() {
    return y`
      <div class="nys-tooltip__main">
        ${this.text?.trim() ? y`<div
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
Xi.styles = C(bp);
let Jt = Xi;
qo([
  a({ type: String, reflect: !0 })
], Jt.prototype, "id", 2);
qo([
  a({ type: String })
], Jt.prototype, "text", 2);
qo([
  a({ type: Boolean, reflect: !0 })
], Jt.prototype, "inverted", 2);
qo([
  a({ type: String })
], Jt.prototype, "for", 2);
qo([
  $()
], Jt.prototype, "_active", 2);
qo([
  a({ type: String, reflect: !0 })
], Jt.prototype, "position", 1);
customElements.get("nys-tooltip") || customElements.define("nys-tooltip", Jt);
/*!
   * █▄  █  █   █  █▀▀▀█  █▀▀▄  █▀▀▀█
   * █ █ █  █▄▄▄█  ▀▀▀▄▄  █   █ ▀▀▀▄▄
   * █  ▀█    █    █▄▄▄█  █▄▄▀  █▄▄▄█
   *
   * Alert Component v1.21.0
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
/*!
  * New York State Design System v1.21.0
  * Description: A design system for New York State's digital products.
  * Repository: https://github.com/its-hcd/nysds
  * License: MIT
*/
var gp = 0;
function mp(r) {
  return `${r}-${Date.now()}-${gp++}`;
}
var xp = (r) => {
  class e extends r {
    get idPrefix() {
      return this.localName || "nys-element";
    }
    ensureId() {
      this.id || (this.id = mp(this.idPrefix));
    }
    connectedCallback() {
      super.connectedCallback(), this.ensureId();
    }
  }
  return e;
}, wp = /* @__PURE__ */ xp(I);
const kp = ':host{--_nys-alert-border-width: var(--nys-border-width-lg, 4px);--_nys-alert-border-radius: var(--nys-radius-md, 4px);--_nys-alert-color: var( --nys-alert-color, var(--nys-color-text, var(--nys-color-neutral-900, #1b1b1b)) );--_nys-alert-color--link: var( --nys-alert-color--link, var(--nys-color-link, var(--nys-color-blue-600, #004dd1)) );--_nys-alert-color--link--hover: var( --nys-alert-color--link--hover, var(--nys-color-link-strong, var(--nys-color-blue-700, #003ba1)) );--_nys-alert-color--link--active: var( --nys-alert-color--link--active, var(--nys-color-link-strongest, var(--nys-color-blue-800, #002971)) );--_nys-alert-padding: var(--nys-space-250, 20px);--_nys-alert-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-alert-font-size: var(--nys-font-size-ui-md, 16px);--_nys-alert-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-alert-letter-spacing: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) );--_nys-alert-font-weight--regular: var(--nys-font-weight-regular, 400);--_nys-alert-font-weight--semibold: var(--nys-font-weight-semibold, 600);--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-base, var(--nys-color-neutral-600, #62666a)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-base-weak, var(--nys-color-neutral-10, #f6f6f6)) );--_nys-alert-gap--icon: var(--nys-space-150, 12px);--_nys-alert-gap--text: var(--nys-space-50, 4px);--_nys-alert-gap--actions: var(--nys-space-150, 12px)}.nys-alert__container{display:flex;background-color:var(--_nys-alert-background-color);border-inline-start:var(--_nys-alert-border-width) solid var(--_nys-alert-border-color);border-radius:var(--_nys-alert-border-radius);color:var(--_nys-alert-color);padding:var(--_nys-alert-padding);font-style:normal;font-family:var(--_nys-alert-font-family);font-size:var(--_nys-alert-font-size);line-height:var(--_nys-alert-line-height);letter-spacing:var(--_nys-alert-letter-spacing);gap:var(--_nys-alert-gap--icon)}p{margin:0}::slotted(p){margin-bottom:0!important}.nys-alert__icon{margin-top:-2px}a,a:visited{font-weight:var(--_nys-alert-font-weight--semibold);font-size:var(--_nys-alert-font-size);color:var(--_nys-alert-color--link)}a:hover{color:var(--_nys-alert-color--link--hover)}a:active{color:var(--_nys-alert-color--link--active)}::slotted(a){color:var(--_nys-alert-color--link)}.nys-alert__texts{display:flex;flex-direction:column;flex:1;gap:var(--_nys-alert-gap--text)}.nys-alert__header{margin:0;font-weight:var(--_nys-alert-font-weight--semibold)}.nys-alert__text{font-weight:var(--_nys-alert-font-weight--regular);margin:0}::slotted(*){font-weight:var(--_nys-alert-font-weight--regular);margin:0}.nys-alert--centered{display:flex;align-items:center}.nys-alert--centered .nys-alert__header{margin-bottom:-3px}.nys-alert--centered div[part=nys-alert__icon]{margin-top:0;display:flex;align-items:center;justify-content:center}.nys-alert__actions{display:flex;gap:var(--_nys-alert-gap--actions);flex-wrap:wrap}#dismiss-btn{margin-top:-8px}:host([type=info]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-info, var(--nys-color-blue-600, #004dd1)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-info-weak, var(--nys-color-blue-50, #e5effa)) )}:host([type=success]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-success, var(--nys-color-green-600, #1e752e)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-success-weak, var(--nys-color-green-50, #e8f1ea)) )}:host([type=warning]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-warning, var(--nys-color-yellow-400, #face00)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-warning-weak, var(--nys-color-yellow-50, #fefae5)) )}:host([type=danger]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-danger, var(--nys-color-red-600, #b52c2c)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-danger-weak, var(--nys-color-red-50, #f7eaea)) )}:host([type=emergency]){--_nys-alert-border-color: var( --nys-alert-border-color, var(--nys-color-emergency, var(--nys-color-red-800, #721c1c)) );--_nys-alert-background-color: var( --nys-alert-background-color, var(--nys-color-emergency, var(--nys-color-red-800, #721c1c)) );--_nys-alert-color: var( --nys-alert-color, var(--nys-color-text-reverse, var(--nys-color-white, #ffffff)) );--_nys-alert-color--link: var( --nys-alert-color--link, var(--nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff)) );--_nys-alert-color--link--hover: var( --nys-alert-color--link--hover, var(--nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff)) );--_nys-alert-color--link--active: var( --nys-alert-color--link--active, var(--nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff)) )}:host([type=emergency]) a:hover{text-decoration-thickness:2px}:host([type=emergency]) a:active{text-decoration-thickness:3px}';
var Cp = Object.defineProperty, lt = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Cp(e, t, o), o;
};
const tc = class extends wp {
  constructor() {
    super(...arguments), this.id = "", this.heading = "", this.icon = "", this.dismissible = !1, this.duration = 0, this.text = "", this.primaryAction = "", this.secondaryAction = "", this.primaryLabel = "Learn more", this.secondaryLabel = "Dismiss", this.type = "base", this._alertClosed = !1, this._slotHasContent = !0, this._timeoutId = null;
  }
  /**
   * Returns the ARIA role and aria-live setting for the alert's live region based on type.
   * - `warning`/`danger`/`emergency` => role="alert", aria-live="assertive" (urgent, interrupts)
   * - `base`/`info`/`success` => role="status", aria-live="polite" (waits its turn)
   *
   * `aria-live` is set explicitly alongside `role` (rather than relying on the role's implicit
   * live-region semantics) for more consistent behavior across browser/AT combinations.
   */
  get ariaAttributes() {
    const e = this.type === "warning" || this.type === "danger" || this.type === "emergency";
    return {
      role: e ? "alert" : "status",
      ariaLive: e ? "assertive" : "polite"
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.duration > 0 && (this._timeoutId = setTimeout(() => {
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
        (n) => n.nodeType === Node.ELEMENT_NODE || n.nodeType === Node.TEXT_NODE && n.textContent?.trim()
      );
      await Promise.resolve(), this._slotHasContent = t.length > 0;
    } else
      await Promise.resolve(), this._slotHasContent = !1;
  }
  render() {
    const { role: e, ariaLive: t } = this.ariaAttributes;
    return y`
      ${this._alertClosed ? "" : y` <div
            class="nys-alert__container ${this._slotHasContent || this.text?.trim().length > 0 ? "" : "nys-alert--centered"}"
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
              aria-live=${t}
              aria-atomic="true"
            >
              ${this.heading?.trim() ? y`<p class="nys-alert__header">${this.heading}</p>` : ""}
              ${this._slotHasContent ? y`<slot></slot>` : this.text?.trim().length > 0 ? y`<p class="nys-alert__text">${this.text}</p>` : ""}
              ${this.primaryAction || this.secondaryAction ? y`<div class="nys-alert__actions">
                    ${this.primaryAction ? y`<a
                          href=${v(this.primaryAction || void 0)}
                          class="nys-alert__action nys-alert__primary"
                        >
                          ${this.primaryLabel}
                        </a>` : ""}
                    ${this.secondaryAction ? y`<a
                          href=${v(this.secondaryAction || void 0)}
                          class="nys-alert__action nys-alert__secondary"
                        >
                          ${this.secondaryLabel}
                        </a>` : ""}
                  </div> ` : ""}
            </div>
            ${this.dismissible ? y` <nys-button
                  id="dismiss-btn"
                  variant="ghost"
                  circle
                  icon="close"
                  size="sm"
                  ?inverted=${this.type === "emergency"}
                  label="${this.heading}, alert, Close"
                  @nys-click=${this._closeAlert}
                  style=${v(
      this.type === "emergency" ? "--_nys-button-outline-color: var(--nys-color-ink-reverse, var(--nys-color-white, #fff));" : void 0
    )}
                ></nys-button>` : ""}
          </div>`}
    `;
  }
};
tc.styles = C(kp);
let Xe = tc;
lt([
  a({ type: String, reflect: !0 })
], Xe.prototype, "id");
lt([
  a({ type: String })
], Xe.prototype, "heading");
lt([
  a({ type: String })
], Xe.prototype, "icon");
lt([
  a({ type: Boolean, reflect: !0 })
], Xe.prototype, "dismissible");
lt([
  a({ type: Number, reflect: !0 })
], Xe.prototype, "duration");
lt([
  a({ type: String })
], Xe.prototype, "text");
lt([
  a({ type: String })
], Xe.prototype, "primaryAction");
lt([
  a({ type: String })
], Xe.prototype, "secondaryAction");
lt([
  a({ type: String })
], Xe.prototype, "primaryLabel");
lt([
  a({ type: String })
], Xe.prototype, "secondaryLabel");
lt([
  a({ type: String, reflect: !0 })
], Xe.prototype, "type");
lt([
  $()
], Xe.prototype, "_alertClosed");
lt([
  $()
], Xe.prototype, "_slotHasContent");
customElements.get("nys-alert") || customElements.define("nys-alert", Xe);
const $p = `<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
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
</svg>`, Sp = '@charset "UTF-8";:host{--_nys-unavheader-padding--gutter: var(--nys-gutter-xs, 20px);--_nys-unavheader-background-color: var( --nys-color-surface, var(--nys-color-white, #ffffff) );--_nys-unavheader-color: var( --nys-color-text, var(--nys-color-neutral-900, #1b1b1b) );--_nys-unavheader-max-width--content: var( --nys-max-width--content, var(--nys-unavheader-max-width--content, 1280px) );--_nys-unavheader-background-color--section-raised: var( --nys-color-surface-raised, var(--nys-color-neutral-10, #f6f6f6) );font-size:var(--nys-font-size-ui-md, 16px);font-weight:var(--nys-font-weight-semibold, 600);line-height:var(--nys-font-lineheight-ui-md, 24px);font-family:var(--nys-font-family-ui, var(--nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif))}.nys-unavheader{display:flex;flex-direction:column}.nys-unavheader>*{padding:0 var(--_nys-unavheader-padding--gutter)}.nys-unavheader__alert.wrapper{order:3;background-color:var(--_nys-unavheader-alert-background-color)}.nys-unavheader__alert.wrapper[data-type=info]{--_nys-unavheader-alert-background-color: var(--nys-color-info, #004dd1);--_nys-alert-color: var(--nys-color-ink-reverse, #ffffff);--_nys-alert-color--link: var(--nys-color-ink-reverse, #ffffff);--_nys-alert-color--link--hover: var(--nys-color-ink-reverse, #ffffff);--_nys-alert-color--link--active: var(--nys-color-ink-reverse, #ffffff)}.nys-unavheader__alert.wrapper[data-type=success]{--_nys-unavheader-alert-background-color: var(--nys-color-success, #1e752e);--_nys-alert-color: var(--nys-color-ink-reverse, #ffffff);--_nys-alert-color--link: var(--nys-color-ink-reverse, #ffffff);--_nys-alert-color--link--hover: var(--nys-color-ink-reverse, #ffffff);--_nys-alert-color--link--active: var(--nys-color-ink-reverse, #ffffff)}.nys-unavheader__alert.wrapper[data-type=warning]{--_nys-unavheader-alert-background-color: var(--nys-color-warning, #face00);--_nys-alert-color: var(--nys-color-ink, #1b1b1b);--_nys-alert-color--link: var(--nys-color-ink, #1b1b1b);--_nys-alert-color--link--hover: var(--nys-color-ink, #1b1b1b);--_nys-alert-color--link--active: var(--nys-color-ink, #1b1b1b)}.nys-unavheader__alert.wrapper[data-type=danger]{--_nys-unavheader-alert-background-color: var(--nys-color-danger, #b52c2c);--_nys-alert-color: var(--nys-color-ink-reverse, #ffffff);--_nys-alert-color--link: var(--nys-color-ink-reverse, #ffffff);--_nys-alert-color--link--hover: var(--nys-color-ink-reverse, #ffffff);--_nys-alert-color--link--active: var(--nys-color-ink-reverse, #ffffff)}.nys-unavheader__alert.wrapper[data-type=emergency]{--_nys-unavheader-alert-background-color: var( --nys-color-emergency, #721c1c );--_nys-alert-color: var(--nys-color-ink-reverse, #ffffff);--_nys-alert-color--link: var(--nys-color-ink-reverse, #ffffff);--_nys-alert-color--link--hover: var(--nys-color-ink-reverse, #ffffff);--_nys-alert-color--link--active: var(--nys-color-ink-reverse, #ffffff)}.nys-unavheader__alert.wrapper[data-type=base]{--_nys-unavheader-alert-background-color: var(--nys-color-base, #62666a);--_nys-alert-color: var(--nys-color-ink-reverse, #ffffff);--_nys-alert-color--link: var(--nys-color-ink-reverse, #ffffff);--_nys-alert-color--link--hover: var(--nys-color-ink-reverse, #ffffff);--_nys-alert-color--link--active: var(--nys-color-ink-reverse, #ffffff)}.nys-unavheader__alert.wrapper nys-alert{--_nys-alert-background-color: var( --_nys-unavheader-alert-background-color );--_nys-alert-border-radius: 0;--_nys-alert-border-width: 0;--_nys-alert-padding: var(--nys-space-250, 20px) 0;display:block;max-width:var(--_nys-unavheader-max-width--content);margin:0 auto}.nys-unavheader__alert-text{font-weight:var(--nys-font-weight-regular, 400)}.nys-unavheader__main.wrapper{background-color:var(--_nys-unavheader-background-color)}.nys-unavheader__main.content{display:flex;align-items:center;justify-content:space-between;gap:var(--nys-space-300, 24px);padding-top:var(--nys-space-100, 8px);padding-bottom:var(--nys-space-100, 8px)}.nys-unavheader__spacer{flex:1}.nys-unavheader__trustbar.wrapper{background-color:var(--nys-color-neutral-100, #d0d0ce);padding-top:var(--nys-space-100, 8px);padding-bottom:var(--nys-space-100, 8px)}.nys-unavheader__trustbar.wrapper>.content,.nys-unavheader__trustbar.wrapper>.content *{cursor:pointer}.nys-unavheader__trustbar.inline,.nys-unavheader__trustbar.inline #nys-unavheader__official{background-color:transparent;cursor:default}.nys-unavheader__trustbar>.content,.nys-unavheader__trustbar.inline{display:flex;align-items:center;gap:var(--nys-space-100, 8px);height:fit-content;font-size:var(--nys-font-size-ui-xs, 12px);font-weight:var(--nys-font-weight-regular, 400);line-height:var(--nys-font-lineheight-ui-xs, 20px);font-family:var(--nys-font-family-ui, var(--nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif))}a#nys-unavheader__logolink{outline-offset:var(--nys-space-2px, 2px)}.nys-unavheader__logo svg{vertical-align:top;height:var(--nys-size-500, 40px);width:auto}#nys-unavheader__know,#nys-unavheader__know--inline{width:max-content;display:flex;align-items:center;cursor:pointer;gap:var(--nys-space-50, 4px);--_nys-button-padding--x: var(--nys-space-50, 4px);--_nys-button-padding--y: var(--nys-space-2px, 2px);--_nys-button-height: var(--nys-font-lineheight-ui-xs, 20px);--_nys-button-border-radius: var(--nys-radius-md, 4px);--_nys-button-border-width: 0px;--_nys-button-font-size: var(--nys-font-size-ui-xs, 12px);--_nys-button-font-weight: var(--nys-font-weight-regular, 400);--_nys-button-line-height: var(--nys-font-lineheight-ui-xs, 20px);--_nys-button-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) )}.hide{display:none}.nys-unavheader__trustpanel.wrapper.show{background-color:var(--_nys-unavheader-background-color--section-raised);display:flex;padding-top:var(--nys-space-400, 32px);padding-bottom:var(--nys-space-400, 32px)}.nys-unavheader__messagewrapper{display:flex;gap:var(--nys-space-400, 32px)}.nys-unavheader__trustpanel.content{display:flex;flex-direction:row-reverse}.nys-unavheader__trustcontentmessage{flex:1;display:flex;flex-direction:column;gap:var(--nys-space-100, 8px);font-family:var(--nys-font-family-ui, "Proxima Nova");font-size:var(--nys-font-size-ui-sm, 14px);font-style:normal;font-weight:400;line-height:var(--nys-font-lineheight-ui-sm, 24px);letter-spacing:var(--nys-font-letterspacing-ui-sm, .044px)}.nys-unavheader__searchdropdown.wrapper{background-color:var(--_nys-unavheader-background-color--section-raised);padding-top:var(--nys-space-250, 20px);padding-bottom:var(--nys-space-250, 20px)}.nys-unavheader__trustpanel.wrapper>.content,.nys-unavheader__main.wrapper>.content,.nys-unavheader__trustbar>.content,.nys-unavheader__searchdropdown.wrapper>.content{max-width:var(--_nys-unavheader-max-width--content);margin:0 auto}.nys-unavheader__search{max-width:var(--nys-form-width-md, 200px);transition:max-width .5s ease;--_nys-textinput-gap: 0px}.nys-unavheader__search:focus{width:var(--nys-form-width-lg, 384px);max-width:var(--nys-form-width-lg, 384px)}#nys-unavheader__translate--desktop,#nys-unavheader__translate--mobile,#nys-unavheader__searchbutton{--nys-button-color: var(--nys-color-state-blue-700, #154973);--nys-button-color--hover: var(--nys-color-state-blue-700, #154973);--nys-button-color--active: var(--nys-color-state-blue-700, #154973);--_nys-button-border-width: 0px}.nys-unavheader__iconbutton{--_nys-button-width: var(--nys-size-400, 32px);--_nys-button-height: var(--nys-size-400, 32px);--_nys-button-padding--y: 0;--_nys-button-padding--x: 0}.nys-unavheader__translatewrapper{position:relative}.nys-unavheader__languagelist.show{position:absolute;display:flex;flex-direction:column;min-width:fit-content;width:max-content;z-index:99999;background-color:var(--_nys-unavheader-background-color--section-raised);color:var(--nys-color-state-blue-700, #154973);margin-top:var(--nys-space-150, 12px);right:0}.nys-unavheader__languagelink{--_nys-button-padding: var(--nys-space-200, 16px) var(--nys-space-250, 20px);--nys-button-color: var(--nys-color-state-blue-700, #154973);--nys-button-color--hover: var(--nys-color-state-blue-700, #154973);--nys-button-color--active: var(--nys-color-state-blue-700, #154973);--_nys-button-border-radius: 0;--_nys-button-justify-content: start;--_nys-button-outline-width: var(--nys-border-width-md, 2px);--_nys-button-outline-offset: calc(-1 * var(--nys-border-width-md, 2px))}@media(min-width:0)and (max-width:479px){:host{--_nys-unavheader-padding--gutter: var(--nys-gutter-xs, 20px)}#nys-unavheader__know{--_nys-button-padding--x: 0px;--_nys-button-padding--y: 0px;--_nys-button-height: var(--nys-space-200, 16px)}.nys-unavheader__trustbar>.content{flex-direction:column;align-items:flex-start;gap:0;line-height:16px}.nys-unavheader__trustbar.wrapper{padding-top:var(--nys-space-50, 4px);padding-bottom:var(--nys-space-50, 4px)}.nys-unavheader__trustbar.inline{display:none}.nys-unavheader__messagewrapper{flex-direction:column}#nys-unavheader__translate--desktop,#nys-unavheader__searchbar{display:none}}@media(min-width:480px)and (max-width:767px){:host{--_nys-unavheader-padding--gutter: var(--nys-gutter-sm, 20px)}.nys-unavheader__trustbar.inline{display:none}.nys-unavheader__messagewrapper{flex-direction:column}#nys-unavheader__translate--desktop,#nys-unavheader__searchbar{display:none}}@media(min-width:768px)and (max-width:1023px){:host{--_nys-unavheader-padding--gutter: var(--nys-gutter-md, 32px)}.nys-unavheader__trustbar.wrapper,#nys-unavheader__translate--desktop,#nys-unavheader__searchbar{display:none}.nys-unavheader__trustpanel.wrapper.show{order:2}}@media(min-width:1024px)and (max-width:1279px){:host{--_nys-unavheader-padding--gutter: var(--nys-gutter-lg, 32px)}.nys-unavheader__trustbar.wrapper,#nys-unavheader__translate--mobile,#nys-unavheader__searchbutton[circle],.nys-unavheader__searchdropdown.wrapper{display:none}.nys-unavheader__languagelist.show{margin-top:var(--nys-space-100, 8px)}.nys-unavheader__trustpanel.wrapper.show{order:2}}@media(min-width:1280px){:host{--_nys-unavheader-padding--gutter: var(--nys-gutter-xl, 64px)}.nys-unavheader__trustbar.wrapper,#nys-unavheader__translate--mobile,#nys-unavheader__searchbutton[circle],.nys-unavheader__searchdropdown.wrapper{display:none}.nys-unavheader__languagelist.show{margin-top:var(--nys-space-100, 8px)}.nys-unavheader__trustpanel.wrapper.show{order:2}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border:0}';
var Ep = Object.defineProperty, Bt = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Ep(e, t, o), o;
};
const Ap = "https://alerts-cta.static-assets.ny.gov/alerts.json", Lp = {
  high: "emergency",
  medium: "warning",
  low: "info",
  // Feed authors may also use the design system's own vocabulary
  emergency: "emergency",
  danger: "danger",
  warning: "warning",
  success: "success",
  info: "info",
  base: "base"
}, Tp = {
  virus: "coronavirus",
  coronavirus: "coronavirus",
  snow: "ac_unit",
  snowflake: "ac_unit",
  winter: "ac_unit",
  ac_unit: "ac_unit",
  wind: "air",
  air: "air",
  sun: "clear_day",
  heat: "clear_day",
  clear_day: "clear_day",
  rain: "rainy",
  flood: "rainy",
  rainy: "rainy",
  alert: "warning",
  warning: "warning",
  emergency: "emergency_home",
  emergency_home: "emergency_home",
  error: "error",
  info: "info",
  notifications: "notifications",
  schedule: "schedule",
  location_on: "location_on"
}, Dp = (r) => r?.trim().toLowerCase() === "on", ci = "nys-unavheader__languagelist", zp = "Translate", di = "nys-unavheader__languagelink", xo = [
  "nys-unavheader__translate--desktop",
  "nys-unavheader__translate--mobile"
], al = (r) => r.shadowRoot?.querySelector("button") ?? r, Ip = {
  zh: "zh-Hans",
  "zh-traditional": "zh-Hant"
}, Rp = (r) => Ip[r] ?? r, ll = "New York State", Qi = class Qi extends D {
  constructor() {
    super(...arguments), this.trustbarVisible = !1, this.searchDropdownVisible = !1, this.languageVisible = !1, this.isSearchFocused = !1, this.hideTranslate = !1, this.hideSearch = !1, this.searchUrl = "", this.landmarkLabel = ll, this.languages = [
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
    ], this._translateTrigger = xo[0], this._activeOption = 0, this._openWithFocus = null, this._alerts = [], this._alertRequest = null;
  }
  /**
   * Lifecycle Methods
   * --------------------------------------------------------------------------
   * connectedCallback is inherited from NysElement, which assigns an
   * auto-generated host id (prefix "nys-unavheader") when none is provided. The
   * banner landmark intentionally lives on the inner <header> element, so this
   * component keeps defaultRole = null and does not move a role onto the host.
   */
  connectedCallback() {
    super.connectedCallback(), this._loadAlerts();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._alertRequest?.abort(), this._alertRequest = null;
  }
  updated(e) {
    if (super.updated(e), this.hideTranslate || (this._syncTranslateTriggerAria(), this._syncLanguageMenuAria(), !e.has("languageVisible"))) return;
    if (!this.languageVisible) {
      this._openWithFocus = null, this._activeOption = 0;
      return;
    }
    const t = this._openWithFocus;
    this._openWithFocus = null, t && this._focusOption(t === "first" ? 0 : -1);
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _getNysLogo() {
    return new DOMParser().parseFromString($p, "image/svg+xml").documentElement;
  }
  _toggleTrustbar(e) {
    if (this.trustbarVisible = !this.trustbarVisible, this.trustbarVisible && (this.languageVisible = !1, this.searchDropdownVisible = !1), e === "no focus") return;
    if (e === "nys-unavheader__know--inline" || !e) {
      const n = this.trustbarVisible ? "nys-unavheader__closetrustbar" : "nys-unavheader__know--inline";
      this.updateComplete.then(() => {
        this.shadowRoot?.getElementById(n)?.focus();
      });
    }
  }
  _toggleLanguageList(e) {
    e && (this._translateTrigger = e), this.languageVisible = !this.languageVisible, this.languageVisible && (this.trustbarVisible = !1, this.searchDropdownVisible = !1);
  }
  /**
   * Closes the menu and puts focus back on the trigger. The open list is the only
   * thing keeping the language buttons focusable, so closing it while focus sits on
   * one would drop focus to the top of the page (WCAG 2.4.3).
   */
  _closeLanguageList() {
    this.languageVisible && (this.languageVisible = !1, this.updateComplete.then(() => {
      (this.shadowRoot?.getElementById(this._translateTrigger) ?? this.shadowRoot?.getElementById(xo[1]))?.focus();
    }));
  }
  /**
   * `nys-button` renders the real `<button>` inside its own shadow root, so an
   * `aria-expanded` written on the host never reaches the element that carries the
   * button role — assistive tech was never told the translate menu collapses. Mirror
   * the state onto the inner control, the same way `nys-dropdownmenu` does for its
   * trigger (WCAG 4.1.2).
   */
  async _syncTranslateTriggerAria() {
    for (const e of xo) {
      const t = this.shadowRoot?.getElementById(
        e
      );
      t && (await t.updateComplete, al(t).setAttribute("aria-haspopup", "menu"));
    }
  }
  /** The language options, in the order they are rendered. */
  _languageOptions() {
    return Array.from(
      this.shadowRoot?.querySelectorAll(
        `.${di}`
      ) ?? []
    );
  }
  /**
   * Menu semantics for the options, and the same shadow-root problem as the trigger:
   * `role="menuitem"` and the tab stop have to land on the real `<button>`, not on
   * the `nys-button` host. The hosts carry `role="presentation"` in the template so
   * they don't sit between the menu and its items in the accessibility tree.
   */
  async _syncLanguageMenuAria() {
    const e = this._languageOptions();
    e.length && (this._activeOption > e.length - 1 && (this._activeOption = 0), await Promise.all(e.map((t) => t.updateComplete)), e.forEach((t, n) => {
      const o = al(t);
      o.setAttribute("role", "menuitem"), o.setAttribute(
        "tabindex",
        n === this._activeOption ? "0" : "-1"
      );
    }));
  }
  /**
   * Moves both focus and the tab stop to an option, wrapping at either end. Index
   * -1 is the last option, so "previous from the first" and "End" are the same call.
   */
  async _focusOption(e) {
    const t = this._languageOptions();
    if (!t.length) return;
    const n = t.length;
    this._activeOption = (e % n + n) % n, await this._syncLanguageMenuAria(), t[this._activeOption]?.focus();
  }
  _toggleSearchDropdown() {
    this.searchDropdownVisible = !this.searchDropdownVisible, this.searchDropdownVisible && (this.trustbarVisible = !1, this.languageVisible = !1);
  }
  _handleLanguageSelect(e) {
    this._closeLanguageList();
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
        const n = e.code === "en" ? "" : `${e.code}.`;
        window.location.href = `https://${n}${window.location.hostname}`;
      }
  }
  /**
   * Keyboard model for the translate menu (APG menu button):
   * - on the trigger: Down/Up open the menu on its first/last option, Enter/Space
   *   open it on the first option, Escape closes it
   * - in the menu: Down/Up step and wrap, Home/End jump to either end, Enter/Space
   *   pick the option (native `<button>` activation), Escape closes the menu and
   *   returns focus to the trigger
   *
   * Type-ahead is deliberately left out. Each label is written in its own script, so
   * matching typed characters would mean transliteration plus an IME to be usable —
   * "e" finds nothing in "Español" for anyone who would need it. The pattern lists
   * type-ahead as optional.
   */
  _handleTranslateKeydown(e) {
    const t = e.target;
    if (t) {
      if (e.key === "Escape") {
        if (!this.languageVisible) return;
        e.stopPropagation(), this._closeLanguageList();
        return;
      }
      xo.includes(t.id) ? this._handleTriggerKeydown(e, t.id) : t.classList.contains(di) && this._handleOptionKeydown(e);
    }
  }
  _handleTriggerKeydown(e, t) {
    switch (e.key) {
      case "ArrowDown":
      case "ArrowUp": {
        e.preventDefault();
        const n = e.key === "ArrowDown" ? "first" : "last";
        this.languageVisible ? this._focusOption(n === "first" ? 0 : -1) : (this._openWithFocus = n, this._toggleLanguageList(t));
        break;
      }
      case "Enter":
      case " ":
      case "Spacebar":
        this._openWithFocus = this.languageVisible ? null : "first";
        break;
    }
  }
  _handleOptionKeydown(e) {
    const t = this._languageOptions().indexOf(e.target);
    if (!(t < 0))
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault(), this._focusOption(t + 1);
          break;
        case "ArrowUp":
          e.preventDefault(), this._focusOption(t - 1);
          break;
        case "Home":
          e.preventDefault(), this._focusOption(0);
          break;
        case "End":
          e.preventDefault(), this._focusOption(-1);
          break;
      }
  }
  /**
   * Focus leaving the menu closes it — that is what Tab and Shift+Tab do under the
   * menu button pattern, and it also covers clicking away. Closing without touching
   * focus is the point here: the browser is already moving it somewhere else.
   */
  _handleTranslateFocusout(e) {
    if (!this.languageVisible) return;
    const t = e.currentTarget, n = e.relatedTarget;
    n && t.contains(n) || (this.languageVisible = !1);
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
    const n = (this.shadowRoot?.getElementById(
      e
    )).value?.trim();
    n !== "" && this._handleSearch(n);
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
  async _loadAlerts() {
    if (typeof fetch != "function") return;
    this._alertRequest?.abort();
    const e = new AbortController();
    this._alertRequest = e;
    const t = await this._readFeed(e);
    if (!t) return;
    const n = Array.isArray(t.alert) ? t.alert : t.alert ? [t.alert] : [];
    this._alerts = n.filter((o) => Dp(o?.status));
  }
  /** Fetches the alert feed. Resolves to null on any failure. */
  async _readFeed(e) {
    try {
      const t = await fetch(Ap, {
        signal: e.signal,
        credentials: "omit",
        // An alert that is switched off must go away everywhere on the next page
        // load, so never read (or write) the HTTP cache for this
        cache: "no-store"
      });
      if (!t.ok)
        throw new Error(`Responded with ${t.status}`);
      const n = await t.json();
      return e.signal.aborted ? null : n;
    } catch {
      return null;
    }
  }
  /** Feed severity → `nys-alert` type. */
  _alertType(e) {
    return Lp[e?.trim().toLowerCase() ?? ""] ?? "info";
  }
  /**
   * Feed icon name → `nys-icon` name. Unknown names resolve to "", which leaves
   * `nys-alert` to draw the default icon for the alert's type.
   */
  _alertIcon(e) {
    const t = e?.trim().toLowerCase().replace(/\s+/g, "_");
    return t && Tp[t] || "";
  }
  /**
   * One full-bleed band per published alert, so alerts of different severities keep
   * their own background instead of sharing one. The body is slotted rather than
   * passed as `text`/`primaryAction` so the link can carry the feed's `linkAriaLabel`.
   */
  _renderAlerts() {
    return this._alerts.map((e) => this._renderAlert(e));
  }
  _renderAlert(e) {
    if (!e.headline?.trim() && !e.description?.trim()) return Wn;
    const t = this._alertType(e.severity), n = this._alertIcon(e.icon), o = e.linkTitle?.trim() || "Learn more";
    return y`
      <div class="nys-unavheader__alert wrapper" data-type=${t}>
        <nys-alert
          class="content"
          type=${t}
          heading=${e.headline ?? ""}
          icon=${n}
        >
          ${e.description ? y`<p class="nys-unavheader__alert-text">
                ${e.description}
              </p>` : Wn}
          ${e.link ? y`<a
                class="nys-unavheader__alert-link"
                href=${e.link}
                aria-label=${e.linkAriaLabel?.trim() || Wn}
                >${o}</a
              >` : Wn}
        </nys-alert>
      </div>
    `;
  }
  /**
   * The banner's accessible name. A blank override would put the page back where
   * #1795 found it — two unnamed banners — so it falls back to the default.
   */
  get _landmarkLabel() {
    return this.landmarkLabel?.trim() || ll;
  }
  render() {
    return y`
      <header class="nys-unavheader" aria-label=${this._landmarkLabel}>
        <div
          class="nys-unavheader__trustbar wrapper"
          @click="${(e) => {
      e.target.closest("nys-button") || this._toggleTrustbar("no focus");
    }}"
        >
          <div class="content">
            <span class="nys-unavheader__official"
              >An official website of New York State</span
            >
            <nys-button
              id="nys-unavheader__know"
              label="Here's how you know"
              variant="text"
              size="sm"
              ariaControls="nys-unavheader__trustpanel"
              ariaExpanded="${this.trustbarVisible}"
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
          id="nys-unavheader__trustpanel"
          id="nys-unavheader__trustpanel"
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
              label="Close this notice"
              ariaControls="nys-unavheader__trustpanel"
              ariaExpanded="${this.trustbarVisible}"
              @nys-click="${() => this._toggleTrustbar("nys-unavheader__know--inline")}"
            ></nys-button>
            <div class="nys-unavheader__messagewrapper">
              <div
                class="nys-unavheader__trustcontentmessage"
                id="trust_official"
              >
                <nys-icon size="3xl" name="account_balance_filled"></nys-icon>
                <span><b>Official websites use ny.gov</b></span>
                <span
                  >A <b>ny.gov</b> website belongs to an official New York State
                  government organization.</span
                >
              </div>
              <div
                class="nys-unavheader__trustcontentmessage"
                id="trust_secure"
              >
                <nys-icon size="3xl" name="lock_filled"></nys-icon>
                <span><b>Secure ny.gov websites use HTTPS</b></span>
                <span
                  >A <b>lock icon</b> or <b>https://</b> means you've safely
                  connected to the ny.gov website. Share sensitive information
                  only on official, secure websites.</span
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
              <span id="nys-unavheader__official"
                >An official website of New York State</span
              >
              <nys-button
                id="nys-unavheader__know--inline"
                label="Here's how you know"
                ariaControls="nys-unavheader__trustpanel"
                ariaExpanded="${this.trustbarVisible}"
                variant="text"
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
            ${this.hideTranslate ? null : y`<div
                  class="nys-unavheader__translatewrapper"
                  @keydown=${this._handleTranslateKeydown}
                  @focusout=${this._handleTranslateFocusout}
                >
                  <nys-button
                    variant="ghost"
                    circle
                    label="Translate"
                    ariaControls="${ci}"
                    ariaExpanded="${this.languageVisible}"
                    id="nys-unavheader__translate--mobile"
                    class="nys-unavheader__iconbutton"
                    @nys-click=${() => this._toggleLanguageList(xo[1])}
                  >
                    <nys-icon
                      slot="circle-icon"
                      name="language"
                      size="16"
                    ></nys-icon>
                  </nys-button>
                  ${this.isSearchFocused ? null : y`
                        <nys-button
                          variant="ghost"
                          label="Translate"
                          ariaControls="${ci}"
                          ariaExpanded="${this.languageVisible}"
                          size="sm"
                          prefixIcon="language"
                          suffixIcon=${this.languageVisible ? "chevron_up" : "chevron_down"}
                          id="nys-unavheader__translate--desktop"
                          @nys-click="${() => this._toggleLanguageList(xo[0])}"
                        ></nys-button>
                      `}
                  <div
                    id="${ci}"
                    role="menu"
                    aria-label="${zp}"
                    class="nys-unavheader__languagelist ${this.languageVisible ? "show" : "hide"}"
                  >
                    ${this.languages.map(
      (e) => (
        // role="presentation" drops the nys-button host out of the
        // accessibility tree, so the menu owns the menuitem inside
        // it directly instead of a generic wrapper. The menuitem
        // role and the roving tabindex are written onto that inner
        // button by _syncLanguageMenuAria.
        y`<nys-button
                          role="presentation"
                          variant="ghost"
                          fullWidth
                          lang="${Rp(e.code)}"
                          label="${e.label}"
                          class="${di}"
                          @click="${() => this._handleLanguageSelect(e)}"
                        ></nys-button>`
      )
    )}
                  </div>
                </div>`}
            ${this.hideSearch ? null : y`
                  <nys-button
                    variant="ghost"
                    circle
                    label="Search"
                    ariaControls="nys-unavheader__searchdropdown"
                    ariaExpanded="${this.searchDropdownVisible}"
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
                      @nys-click=${() => {
      this._handleSearchButton("nys-unavheader__searchbar");
    }}
                      ><span class="sr-only">Search</span></nys-button
                    >
                  </nys-textinput>
                `}
          </div>
        </div>
        <div
          id="nys-unavheader__searchdropdown"
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
                @nys-click=${() => {
      this._handleSearchButton("nys-unavheader__searchbardropdown");
    }}
                ><span class="sr-only">Search</span></nys-button
              ></nys-textinput
            >
          </div>
        </div>
        ${this._renderAlerts()}
      </header>
    `;
  }
};
Qi.styles = C(Sp);
let it = Qi;
Bt([
  a({ type: Boolean })
], it.prototype, "trustbarVisible");
Bt([
  a({ type: Boolean })
], it.prototype, "searchDropdownVisible");
Bt([
  a({ type: Boolean })
], it.prototype, "languageVisible");
Bt([
  a({ type: Boolean })
], it.prototype, "isSearchFocused");
Bt([
  a({ type: Boolean })
], it.prototype, "hideTranslate");
Bt([
  a({ type: Boolean })
], it.prototype, "hideSearch");
Bt([
  a({ type: String })
], it.prototype, "searchUrl");
Bt([
  a({ type: String })
], it.prototype, "landmarkLabel");
Bt([
  a({ type: Array })
], it.prototype, "languages");
Bt([
  $()
], it.prototype, "_alerts");
customElements.get("nys-unavheader") || customElements.define("nys-unavheader", it);
const Op = `<svg xmlns="http://www.w3.org/2000/svg" width="91" height="55" viewBox="0 0 91 55" fill="none">
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
</svg>`, Mp = ':host{--_nys-unavfooter-color: var( --nys-color-link-reverse-neutral, var(--nys-color-white, #ffffff) );--_nys-unavfooter-background-color: var(--nys-color-surface-reverse, #1b1b1b);--_nys-unavfooter-gap: var(--nys-space-200, 16px);--_nys-unavfooter-padding: var(--nys-space-250, 20px);--_nys-unavfooter-padding--gutter: var(--nys-gutter-sm, 20px);--_nys-unavfooter-font-size: var( --nys-font-size-body-md, var(--nys-font-size-md, 16px) );--_nys-unavfooter-font-weight: var(--nys-font-weight-semibold, 600);--_nys-unavfooter-max-width--content: var( --nys-max-width--content, var(--nys-unavfooter-max-width--content, 1280px) );--_nys-unavfooter-row-gap: var(--nys-space-250, 20px);--_nys-unavfooter-column-gap: var(--nys-space-600, 48px);--_nys-unavfooter-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-unavfooter-letter-spacing: var( --nys-font-letterspacing-ui-md, var(--nys-font-letterspacing-400, .044px) );--_nys-unavfooter-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-unavfooter-text-decoration-thickness: var(--nys-size-2px, 2px);box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}ul{list-style-type:none;padding:0;margin:0}li{margin:0;padding:0}a{color:var(--_nys-unavfooter-color);text-decoration:none;font-family:var(--_nys-unavfooter-font-family);font-size:var(--_nys-unavfooter-font-size);font-style:normal;font-weight:var(--_nys-unavfooter-font-weight);line-height:var(--_nys-unavfooter-line-height);letter-spacing:var(--_nys-unavfooter-letter-spacing);text-decoration-style:solid;text-decoration-skip-ink:auto;text-decoration-thickness:7%;text-underline-offset:auto;text-underline-position:from-font}a:hover{text-decoration-line:underline}a:active{text-decoration-thickness:var(--_nys-unavfooter-text-decoration-thickness)}.nys-unavfooter{background-color:var(--_nys-unavfooter-background-color);width:100%;padding:var(--_nys-unavfooter-padding) var(--_nys-unavfooter-padding--gutter)}.nys-unavfooter__main-container{display:flex;max-width:var(--_nys-unavfooter-max-width--content);margin:auto}.nys-unavfooter__container_menu{display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:100%;max-width:var(--_nys-unavfooter-max-width--content);gap:var(--_nys-unavfooter-gap)}.nys-unavfooter__logo a{display:flex;align-items:center;line-height:0}.nys-unavfooter__content{display:flex;align-items:center}.nys-unavfooter__content ul{display:flex;justify-content:center;gap:var(--_nys-unavfooter-row-gap) var(--_nys-unavfooter-column-gap);flex-wrap:wrap}@media(min-width:768px){.nys-unavfooter__container_menu{flex-direction:row;justify-content:center}.nys-unavfooter__content ul{justify-content:flex-start}:host{--_nys-unavfooter-padding--gutter: var(--nys-gutter-lg, 32px);--_nys-unavfooter-column-gap: var(--nys-space-600, 48px);--_nys-unavfooter-gap-spacing: var(--nys-space-800, 64px)}}@media(min-width:1280px){:host{--_nys-unavfooter-padding--gutter: var(--nys-gutter-xl, 64px)}}';
var Pp = Object.defineProperty, Np = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Pp(e, t, o), o;
};
const cl = "New York State", Ji = class Ji extends D {
  constructor() {
    super(...arguments), this.landmarkLabel = cl;
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _getNysLogo() {
    const n = new DOMParser().parseFromString(Op, "image/svg+xml").documentElement;
    return n.setAttribute("aria-hidden", "true"), n.setAttribute("focusable", "false"), n;
  }
  /**
   * The contentinfo's accessible name. A blank override would put the page back
   * where #1795 found it — two unnamed contentinfo landmarks — so it falls back
   * to the default.
   */
  get _landmarkLabel() {
    return this.landmarkLabel?.trim() || cl;
  }
  render() {
    return y`
      <footer class="nys-unavfooter" aria-label=${this._landmarkLabel}>
        <div class="nys-unavfooter__main-container">
          <div class="nys-unavfooter__container_menu">
            <div class="nys-unavfooter__logo">
              <a
                href="https://www.ny.gov"
                target="_blank"
                rel="noopener noreferrer"
                id="nys-unavheader__logolink"
                aria-label="New York State home page (opens in a new tab)"
                >${this._getNysLogo()}</a
              >
            </div>
            <nav class="nys-unavfooter__content" aria-label="New York State">
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
            </nav>
          </div>
        </div>
      </footer>
    `;
  }
};
Ji.styles = C(Mp);
let ds = Ji;
Np([
  a({ type: String })
], ds.prototype, "landmarkLabel");
customElements.get("nys-unavfooter") || customElements.define("nys-unavfooter", ds);
const nc = ':host{--_nys-verticalnav-color: var(--nys-color-text-weak, #4a4d4f);--_nys-verticalnav-background-color: var(--nys-color-surface, #ffffff);--_nys-verticalnav-border-color: var(--nys-color-neutral-50, #bec0c1);--_nys-verticalnav-font-size: var(--nys-font-size-ui-md, 16px);--_nys-verticalnav-font-size--header: var(--nys-font-size-ui-lg, 18px);--_nys-verticalnav-font-weight--header: var(--nys-font-weight-semibold, 600);--_nys-verticalnav-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-verticalnav-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-verticalnav-trigger--hover: var(--nys-color-neutral-10, #f6f6f6);--_nys-verticalnav-trigger--active: var(--nys-color-neutral-50, #ededed);--_nys-verticalnav-trigger--disabled: var(--nys-color-text-disabled, #bec0c1);--_nys-verticalnav-trigger--focus: var(--nys-color-focus, #004dd1);--_nys-verticalnav-trigger--current: var(--nys-color-theme-faint, #f7fafd);--_nys-verticalnav-trigger--current--hover: var( --nys-color-theme-weaker, #eff6fb );--_nys-verticalnav-trigger--current--active: var( --nys-color-theme-weak, #cddde9 )}nys-accordion{--nys-accordionitem-padding: var(--nys-space-100, 8px) var(--nys-space-150, 12px);--nys-accordion-content-max-width: 100%}.nys-verticalnav{display:flex;flex-direction:column;background-color:var(--_nys-verticalnav-background-color);font-family:var(--_nys-verticalnav-font-family);font-size:var(--_nys-verticalnav-font-size);font-weight:var(--_nys-verticalnav-font-weight);line-height:var(--_nys-verticalnav-line-height);padding:0;width:auto;height:100%;box-sizing:border-box}@media(min-width:1024px){.nys-verticalnav{max-width:249px;min-width:204px;width:100%;border-right:1px solid var(--_nys-verticalnav-border-color);gap:10px}}.nys-verticalnav .nys-verticalnav__heading{color:var(--_nys-verticalnav-color);border-top:none;font-size:var(--_nys-verticalnav-font-size--header);font-weight:var(--_nys-verticalnav-font-weight--header);text-transform:none;margin:0;margin-left:var(--nys-space-150, 12px)}.nys-verticalnavgroup__trigger{display:flex;align-items:center;justify-content:space-between;width:100%;padding:var(--nys-space-100, 8px) var(--nys-space-200, 16px) var(--nys-space-100, 8px) var(--nys-space-150, 12px);background-color:transparent;border:none;cursor:pointer;color:var(--_nys-verticalnav-color);font-family:var(--_nys-verticalnav-font-family);font-size:var(--_nys-verticalnav-font-size);font-weight:var(--_nys-verticalnav-font-weight--header);line-height:var(--_nys-verticalnav-line-height)}.nys-verticalnavgroup__trigger:not(:disabled):hover{background-color:var(--_nys-verticalnav-trigger--hover)}.nys-verticalnavgroup__trigger:not(:disabled):active{background-color:var(--_nys-verticalnav-trigger--active)}.nys-verticalnavgroup__trigger:focus-visible{outline:var(--nys-border-width-md, 2px) solid var(--_nys-verticalnav-trigger--focus);outline-offset:-2px}.nys-verticalnavgroup__trigger:disabled{color:var(--_nys-verticalnav-trigger--disabled)}.nys-verticalnavgroup__chevron{transition:transform .3s cubic-bezier(.4,0,.2,1) 0ms}@media(prefers-reduced-motion:reduce){.nys-verticalnavgroup__chevron{transition:none}}.nys-verticalnavgroup__items{display:none;--_nys-verticalnav-link-indent: var(--nys-space-300, 24px)}:host([disabled]) .nys-verticalnavgroup__trigger:disabled{color:var(--_nys-verticalnav-trigger--disabled);cursor:not-allowed}:host([expanded]) .nys-verticalnavgroup__chevron{transform:rotate(180deg)}:host([expanded]) .nys-verticalnavgroup__items{display:block}:host([active]:not([expanded])) .nys-verticalnavgroup__trigger{background-color:var(--_nys-verticalnav-trigger--current)}:host([active]:not([expanded])) .nys-verticalnavgroup__trigger:hover{background-color:var(--_nys-verticalnav-trigger--current--hover)}:host([active]:not([expanded])) .nys-verticalnavgroup__trigger:active{background-color:var(--_nys-verticalnav-trigger--current--active)}', Bp = 'nys-verticalnav{--_nys-verticalnav-font-size: var(--nys-font-size-ui-md, 16px);--_nys-verticalnav-font-size--header: var(--nys-font-size-ui-lg, 18px);--_nys-verticalnav-font-size--subheader: var(--nys-font-size-ui-sm, 14px);--_nys-verticalnav-font-weight: var(--nys-font-weight-semibold, 600);--_nys-verticalnav-font-weight--group-links: var( --nys-font-weight-regular, 400 );--_nys-verticalnav-font-weight--subheader: var(--nys-font-weight-bold, 700);--_nys-verticalnav-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-verticalnav-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) )}nys-verticalnav ul{list-style-type:none;padding:0;margin:0;display:flex;flex-direction:column;gap:var(--nys-space-100, 8px)}@media(min-width:1024px){nys-verticalnav ul{gap:0}}nys-verticalnav ul ul{display:flex;flex-direction:column}nys-verticalnav ul li{display:flex;flex-direction:column;margin:0}nys-verticalnav ul a{color:var(--nys-color-text-weak, #4a4d4f);display:flex;padding:var(--nys-space-100, 8px) var(--nys-space-100, 8px) var(--nys-space-100, 8px) var(--nys-space-150, 12px);text-decoration:none;font-family:var(--_nys-verticalnav-font-family);font-size:var(--_nys-verticalnav-font-size);font-weight:var(--_nys-verticalnav-font-weight);line-height:var(--_nys-verticalnav-line-height)}nys-verticalnav ul a:not([aria-disabled=true]):hover{color:var(--nys-color-text, #1b1b1b);background-color:var(--nys-color-neutral-10, #f6f6f6);text-decoration:none}nys-verticalnav ul a:not([aria-disabled=true]):active{background-color:var(--nys-color-neutral-50, #ededed)}nys-verticalnav ul a:focus-visible{outline:var(--nys-border-width-md, 2px) solid var(--nys-color-focus, #004dd1);outline-offset:-2px}nys-verticalnav ul a:focus{color:var(--nys-color-text, #1b1b1b);text-decoration:none}nys-verticalnav ul a[aria-disabled=true]{color:var(--nys-color-text-disabled, #bec0c1);cursor:not-allowed;text-decoration:none}nys-verticalnav ul a[aria-current=page]{color:var(--nys-color-text, #1b1b1b);background-color:var(--nys-color-theme-faint, #f7fafd);border-left:var(--nys-border-width-md, 2px) solid var(--nys-color-theme, #154973)}nys-verticalnav ul a[aria-current=page]:not(:disabled):hover{background-color:var(--nys-color-theme-weaker, #eff6fb)}nys-verticalnav ul a[aria-current=page]:not(:disabled):active{background-color:var(--nys-color-theme-weak, #cddde9)}nys-verticalnav ul li :is(h1,h2,h3,h4,h5,h6){font-family:var(--_nys-verticalnav-font-family);font-size:var(--_nys-verticalnav-font-size--subheader);font-weight:var(--_nys-verticalnav-font-weight--subheader);line-height:var(--_nys-verticalnav-line-height);padding:var(--nys-space-250, 20px) var(--nys-space-100, 8px) var(--nys-space-100, 8px) var(--nys-space-150, 12px);margin:0;text-transform:uppercase;color:var(--nys-color-text, #1b1b1b)}nys-verticalnavgroup ul{gap:0}nys-verticalnavgroup ul li{margin-bottom:0}nys-verticalnavgroup ul li a{color:var(--nys-color-text, #1b1b1b);padding:var(--nys-space-100, 8px) var(--nys-space-100, 8px) var(--nys-space-100, 8px) var(--nys-space-300, 24px);font-family:var(--_nys-verticalnav-font-family);font-size:var(--_nys-verticalnav-font-size);font-weight:var(--_nys-verticalnav-font-weight--group-links);line-height:var(--_nys-verticalnav-line-height)}@media(max-width:1023px){nys-verticalnav ul>li:not(:last-child){border-bottom:var(--nys-size-1px, 1px) solid var(--nys-color-neutral-100, #e4e5e6)}nys-verticalnav ul>li:not(:last-child) a{margin-bottom:var(--nys-space-100, 8px)}nys-verticalnav nys-verticalnavgroup ul>li:not(:last-child){border-bottom:none}}';
var Fp = Object.defineProperty, Lr = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Fp(e, t, o), o;
};
const ea = class ea extends D {
  constructor() {
    super(...arguments), this.id = "", this.label = "", this.expanded = !1, this.disabled = !1, this.active = !1;
  }
  // Ids come from NysElement (prefix = localName, shape
  // "nys-verticalnavgroup-<ts>-<n>"). The previous local counter generated ids
  // prefixed "nys-verticalnav-" from a counter that started at 0 independently of
  // the nav's, so a group and a nav created in the same millisecond could collide
  // and the group's aria-controls could resolve to the wrong element.
  _toggle() {
    this.disabled || (this.expanded = !this.expanded, this.dispatchEvent(
      new CustomEvent("nys-child-resize", {
        bubbles: !0,
        composed: !0
      })
    ), this.dispatchEvent(
      new CustomEvent("nys-verticalnavgroup-toggle", {
        detail: { id: this.id, label: this.label, expanded: this.expanded },
        bubbles: !0,
        composed: !0
      })
    ));
  }
  render() {
    const e = `${this.id}-content`;
    return y`
      <button
        class="nys-verticalnavgroup__trigger"
        @click=${this._toggle}
        aria-controls=${e}
        aria-expanded=${this.expanded}
        ?disabled=${this.disabled}
      >
        <span class="nys-verticalnavgroup__label">${this.label}</span>
        <nys-icon
          name="chevron_down"
          class="nys-verticalnavgroup__chevron"
          size="16"
        ></nys-icon>
      </button>
      <div class="nys-verticalnavgroup__items" id=${e}>
        <slot></slot>
      </div>
    `;
  }
};
ea.styles = C(nc);
let $n = ea;
Lr([
  a({ type: String, reflect: !0 })
], $n.prototype, "id");
Lr([
  a({ type: String })
], $n.prototype, "label");
Lr([
  a({ type: Boolean, reflect: !0 })
], $n.prototype, "expanded");
Lr([
  a({ type: Boolean, reflect: !0 })
], $n.prototype, "disabled");
Lr([
  a({ type: Boolean, reflect: !0 })
], $n.prototype, "active");
customElements.get("nys-verticalnavgroup") || customElements.define("nys-verticalnavgroup", $n);
/*!
   * █▄  █  █   █  █▀▀▀█  █▀▀▄  █▀▀▀█
   * █ █ █  █▄▄▄█  ▀▀▀▄▄  █   █ ▀▀▀▄▄
   * █  ▀█    █    █▄▄▄█  █▄▄▀  █▄▄▄█
   *
   * Accordion Component v1.21.0
   * Part of the New York State Design System
   * Repository: https://github.com/its-hcd/nysds
   * License: MIT
*/
/*!
  * New York State Design System v1.21.0
  * Description: A design system for New York State's digital products.
  * Repository: https://github.com/its-hcd/nysds
  * License: MIT
*/
var qp = 0;
function Hp(r) {
  return `${r}-${Date.now()}-${qp++}`;
}
var Vp = (r) => {
  class e extends r {
    get idPrefix() {
      return this.localName || "nys-element";
    }
    ensureId() {
      this.id || (this.id = Hp(this.idPrefix));
    }
    connectedCallback() {
      super.connectedCallback(), this.ensureId();
    }
  }
  return e;
}, oc = /* @__PURE__ */ Vp(I);
const rc = ':host{--_nys-accordion-border-radius: var(--nys-radius-md, 4px);--_nys-accordion-border-width: var(--nys-border-width-md, 2px);--_nys-accordion-border-color: var(--nys-color-neutral-50, #ededed);--_nys-accordion-padding--x: var(--nys-space-250, 20px);--_nys-accordion-padding--y: var(--nys-space-200, 16px);--_nys-accordion-outline-width: var(--nys-border-width-md, 2px);--_nys-accordion-outline-offset: var(--nys-space-2px, 2px);--_nys-accordion-outline-color: var(--nys-color-focus, #004dd1);--_nys-accordion-gap: var(--nys-space-100, 8px);--_nys-accordion-color--header: var( --nys-accordion-color--header, var(--nys-color-text, #1b1b1b) );--_nys-accordion-background-color--header: var( --nys-accordion-background-color--header, var(--nys-color-neutral-50, #ededed) );--_nys-accordion-background-color--header--hover: var( --nys-accordion-background-color--header--hover, var(--nys-color-neutral-100, #d0d0ce) );--_nys-accordionitem-gap: var(--nys-space-200, 16px);--_nys-accordionitem-background-color: var(--nys-color-ink-reverse, #ffffff);--_nys-accordionitem-padding: var( --nys-accordionitem-padding, var(--nys-space-200, 16px) var(--nys-space-250, 20px) );--_nys-accordion-content-max-width: var( --nys-accordion-content-max-width, 80ch );--_nys-accordion-font-size: var(--nys-font-size-ui-xl, 20px);--_nys-accordion-font-weight: var(--nys-font-weight-bold, 700);--_nys-accordion-line-height: var(--nys-font-lineheight-ui-xl, 28px);--_nys-accordion-letter-spacing: var(--nys-font-letterspacing-ui-xl, .017px);--_nys-accordion-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) )}::slotted(p),p{margin:0!important}.nys-accordionitem{font-family:var(--_nys-accordion-font-family);font-size:var(--_nys-accordion-font-size);font-weight:var(--_nys-accordion-font-weight);line-height:var(--_nys-accordion-line-height);letter-spacing:var(--_nys-accordion-letter-spacing);display:flex;flex-direction:column}.nys-accordionitem__title{margin:0;font:inherit;color:inherit;display:flex;flex:1;align-self:stretch}.nys-accordionitem__heading{all:unset;color:var(--_nys-accordion-color--header);flex:1;gap:var(--_nys-accordionitem-gap);display:flex;padding:var(--_nys-accordion-padding--y) var(--_nys-accordion-padding--x);align-items:center;align-self:stretch;border-radius:var(--_nys-accordion-border-radius);background-color:var(--_nys-accordion-background-color--header);cursor:pointer;transition:.05s all ease-in-out}.nys-accordionitem__heading:hover{border-radius:var(--_nys-accordion-border-radius);background-color:var(--_nys-accordion-background-color--header--hover)}.nys-accordionitem__heading:focus-visible{outline-offset:var(--_nys-accordion-outline-offset);outline:solid var(--_nys-accordion-outline-width) var(--_nys-accordion-outline-color)}.nys-accordionitem__heading .nys-accordionitem__heading-title{flex:1}.nys-accordionitem__content{height:0;overflow:hidden;transition:all .3s cubic-bezier(.4,0,.2,1) 0ms;visibility:hidden}.nys-accordionitem__content.expanded{visibility:visible}.nys-accordionitem__content-slot-container{display:flex;flex-direction:column;gap:var(--_nys-accordion-gap);align-self:stretch;padding:var(--_nys-accordionitem-padding);background-color:var(--_nys-accordionitem-background-color)}.nys-accordionitem__content-slot-container-text{max-width:var(--_nys-accordion-content-max-width)}.expand-icon{transition:all .3s cubic-bezier(.4,0,.2,1) 0ms}:host([expanded]) .expand-icon{transform:rotate(180deg)}:host([bordered][expanded]) .nys-accordionitem__heading{border-radius:var(--_nys-accordion-border-radius) var(--_nys-accordion-border-radius) 0 0}:host([bordered]) .nys-accordionitem__content-slot-container{border:var(--_nys-accordion-border-width) solid var(--_nys-accordion-border-color);border-top:none;border-radius:0 0 var(--_nys-accordion-border-radius) var(--_nys-accordion-border-radius)}.nys-accordion{display:flex;flex-direction:column;gap:var(--_nys-accordion-gap)}';
var Up = Object.defineProperty, Ho = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Up(e, t, o), o;
};
const jp = "h3", Wp = ["h2", "h3", "h4", "h5", "h6"];
function dl(r) {
  if (typeof r != "string") return null;
  const e = r.trim().toLowerCase();
  return Wp.includes(e) ? e : null;
}
const sc = class extends oc {
  constructor() {
    super(...arguments), this.id = "", this.heading = "", this.headingLevel = "", this.expanded = !1, this.bordered = !1;
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback();
  }
  firstUpdated() {
    const e = this.shadowRoot?.querySelector("slot");
    this.expanded && e && e.addEventListener("slotchange", () => {
      this._updateHeight();
    });
  }
  updated(e) {
    (e.has("expanded") || e.has("bordered")) && this._updateHeight();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  /**
   * The level actually rendered: this item's own `headingLevel`, otherwise the
   * one set on the enclosing `nys-accordion`, otherwise the `h3` default.
   *
   * The group's value is read here rather than pushed down from the container
   * so there is a single source of truth per item and an item-level value
   * always wins. `nys-accordion` re-renders its items when its own level
   * changes (see `_notifyHeadingLevel` there).
   */
  _resolveHeadingLevel() {
    const e = dl(this.headingLevel);
    if (e) return e;
    const t = this.closest("nys-accordion");
    return dl(t?.headingLevel) ?? jp;
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
    this._contentContainer && (this.expanded ? requestAnimationFrame(() => {
      const e = this._contentContainer.scrollHeight;
      this._contentContainer.style.height = `${e}px`;
    }) : (this._contentContainer.style.height = "0", this._contentContainer.style.overflow = "hidden"));
  }
  /**
   * Helper Render Functions
   * --------------------------------------------------------------------------
   */
  /**
   * WAI-ARIA Accordion pattern: the toggle button must be contained in a
   * heading at the level appropriate for the surrounding page. A real `h2`-`h6`
   * element is used rather than `role="heading"` + `aria-level` so the trigger
   * carries native heading semantics everywhere — including the places that
   * read the DOM instead of the accessibility tree.
   */
  _renderHeading(e) {
    const t = "nys-accordionitem__title";
    switch (this._resolveHeadingLevel()) {
      case "h2":
        return y`<h2 class=${t}>${e}</h2>`;
      case "h4":
        return y`<h4 class=${t}>${e}</h4>`;
      case "h5":
        return y`<h5 class=${t}>${e}</h5>`;
      case "h6":
        return y`<h6 class=${t}>${e}</h6>`;
      default:
        return y`<h3 class=${t}>${e}</h3>`;
    }
  }
  render() {
    const e = `${this.id}-content`, t = `${this.id}-button`, n = y`<button
      id=${t}
      class="nys-accordionitem__heading"
      type="button"
      @click=${this._handleExpand}
      @keydown=${this._handleKeydown}
      aria-expanded=${this.expanded ? "true" : "false"}
      aria-controls=${e}
    >
      <span class="nys-accordionitem__heading-title">${this.heading}</span>
      <nys-icon class="expand-icon" name="chevron_down" size="24"></nys-icon>
    </button>`;
    return y`
      <div class="nys-accordionitem">
        ${this._renderHeading(n)}
        <!--
          The panel is a labelled region so it can be reached from the landmark
          list, named by the trigger that opens it. A collapsed panel is
          visibility:hidden, so it contributes no landmark at all: the list only
          ever holds the panels a user has actually opened (at most one under
          singleSelect), which is why the role is unconditional here.
        -->
        <div
          id=${e}
          class="nys-accordionitem__content ${this.expanded ? "expanded" : "collapsed"}"
          role="region"
          aria-labelledby=${t}
          @nys-child-resize=${this._updateHeight}
        >
          <div class="nys-accordionitem__content-slot-container">
            <div class="nys-accordionitem__content-slot-container-text">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
sc.styles = C(rc);
let so = sc;
Ho([
  a({ type: String, reflect: !0 })
], so.prototype, "id");
Ho([
  a({ type: String })
], so.prototype, "heading");
Ho([
  a({ type: String, reflect: !0 })
], so.prototype, "headingLevel");
Ho([
  a({ type: Boolean, reflect: !0 })
], so.prototype, "expanded");
Ho([
  a({ type: Boolean, reflect: !0 })
], so.prototype, "bordered");
Ho([
  to(".nys-accordionitem__content")
], so.prototype, "_contentContainer");
customElements.get("nys-accordionitem") || customElements.define("nys-accordionitem", so);
var Yp = Object.defineProperty, zs = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Yp(e, t, o), o;
};
const ic = class extends oc {
  constructor() {
    super(...arguments), this.id = "", this.singleSelect = !1, this.bordered = !1, this.headingLevel = "h3";
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback();
  }
  updated(e) {
    e.has("bordered") && this._applyBordered(), e.has("headingLevel") && this._notifyHeadingLevel();
  }
  /**
   * Functions
   * --------------------------------------------------------------------------
   */
  _getAccordionItems() {
    return (this.shadowRoot?.querySelector("slot")?.assignedElements() || []).filter(
      (e) => e.tagName.toLowerCase() === "nys-accordionitem"
    );
  }
  _onAccordionToggle(e) {
    if (!this.singleSelect) return;
    const t = e.detail.id;
    e.detail.expanded && this._getAccordionItems().forEach((n) => {
      n.id !== t && n.expanded && (n.expanded = !1);
    });
  }
  _applyBordered() {
    this._getAccordionItems().forEach((e) => {
      e.bordered = this.bordered;
    });
  }
  /**
   * Items read the group's `headingLevel` themselves (so an item that sets its
   * own always wins), which means a change here is invisible to them until they
   * re-render. Ask them to.
   */
  _notifyHeadingLevel() {
    this._getAccordionItems().forEach((e) => {
      e.requestUpdate?.();
    });
  }
  render() {
    return y`<div
      class="nys-accordion"
      @nys-accordionitem-toggle=${this._onAccordionToggle}
    >
      <slot></slot>
    </div>`;
  }
};
ic.styles = C(rc);
let Tr = ic;
zs([
  a({ type: String, reflect: !0 })
], Tr.prototype, "id");
zs([
  a({ type: Boolean, reflect: !0 })
], Tr.prototype, "singleSelect");
zs([
  a({ type: Boolean, reflect: !0 })
], Tr.prototype, "bordered");
zs([
  a({ type: String, reflect: !0 })
], Tr.prototype, "headingLevel");
customElements.get("nys-accordion") || customElements.define("nys-accordion", Tr);
var Gp = Object.defineProperty, Vo = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Gp(e, t, o), o;
};
let Jr = null;
function Kp() {
  Jr || typeof document > "u" || (Jr = new CSSStyleSheet(), Jr.replaceSync(Bp), document.adoptedStyleSheets = [...document.adoptedStyleSheets, Jr]);
}
const ta = class ta extends D {
  constructor() {
    super(...arguments), this.id = "", this.heading = "Page navigation", this.hideHeading = !1, this.headingLevel = "h2", this.expanded = !1, this._isMobile = !1, this._mediaQuery = null, this._handleAccordionToggle = (e) => {
      this.expanded = e.detail.expanded, this.dispatchEvent(
        new CustomEvent("nys-verticalnav-toggle", {
          detail: { id: this.id, expanded: this.expanded },
          bubbles: !0,
          composed: !0
        })
      );
    }, this._handleResize = (e) => {
      this._isMobile = e.matches;
    }, this._handleSlotChange = () => {
      this._applyActiveState();
    }, this._handleHeaderSlotChange = () => {
      this._syncNavLabel();
    };
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  connectedCallback() {
    super.connectedCallback(), Kp(), this._mediaQuery = window.matchMedia("(max-width: 1023px)") ?? null, this._isMobile = this._mediaQuery.matches ?? !1, this._mediaQuery.addEventListener("change", this._handleResize);
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._mediaQuery?.removeEventListener("change", this._handleResize);
  }
  updated() {
    this._syncNavLabel();
  }
  /**
   * Public API for controlling the mobile accordion from outside the component
   * --------------------------------------------------------------------------
   */
  open() {
    this.expanded = !0;
  }
  close() {
    this.expanded = !1;
  }
  toggle() {
    this.expanded = !this.expanded;
  }
  /**
   * The element a consumer supplied to the `header` slot, or null when the slot is
   * empty (in which case the generated heading renders as the slot's fallback).
   */
  _slottedHeader() {
    return (this.shadowRoot?.querySelector(
      'slot[name="header"]'
    )?.assignedElements({ flatten: !1 }) ?? [])[0] ?? null;
  }
  /**
   * Give the <nav> landmark an accessible name.
   *
   * The generated heading is the header slot's FALLBACK content, so it does not
   * exist once a consumer fills that slot — an `aria-labelledby` IDREF pointing at
   * it would dangle and leave the landmark unnamed (WCAG 4.1.2 / 2.4.1). When the
   * slot is filled, the name comes from the consumer's heading, which lives in the
   * light DOM and cannot be reached by an IDREF from inside the shadow root:
   * `associateControlRefs` sets the nav's own `ariaLabelledByElements` (element
   * references may point into an enclosing scope) plus a string fallback for engines
   * that do not yet honor them. The `heading` property is the intended name, so it
   * overrides the fallback string derived from the slotted content's full text.
   *
   * When the slot is empty the same-root IDREF to the generated heading is used, and
   * a hidden heading falls back to `aria-label`. All of this is applied imperatively
   * (never as template bindings) so Lit cannot fight the attributes written here.
   */
  _syncNavLabel() {
    const e = this.shadowRoot?.querySelector("nav");
    if (!e) return;
    const t = this._slottedHeader();
    if (t) {
      e.removeAttribute("aria-labelledby"), fr(e, "labelledby", [t]), this.heading && e.setAttribute("aria-label", this.heading);
      return;
    }
    fr(e, "labelledby", []);
    const n = this.shadowRoot?.querySelector(
      ".nys-verticalnav__heading"
    );
    n && !this.hideHeading ? (e.setAttribute("aria-labelledby", n.id), e.removeAttribute("aria-label")) : (e.removeAttribute("aria-labelledby"), e.setAttribute("aria-label", this.heading));
  }
  _applyActiveState() {
    this.querySelectorAll('a[aria-disabled="true"]:not([href])').forEach(
      (e) => {
        e.hasAttribute("role") || e.setAttribute("role", "link"), e.hasAttribute("tabindex") || e.setAttribute("tabindex", "0");
      }
    ), this.querySelectorAll("nys-verticalnavgroup").forEach((e) => {
      e.querySelector('a[aria-current="page"]') && (e.setAttribute("expanded", ""), e.setAttribute("active", ""));
    });
  }
  /**
   * Helper Render Functions
   * --------------------------------------------------------------------------
   */
  _renderHeading() {
    if (this.hideHeading) return y``;
    const e = `${this.id}-heading`, t = {
      h1: y`<h1 id=${e} class="nys-verticalnav__heading">
        ${this.heading}
      </h1>`,
      h2: y`<h2 id=${e} class="nys-verticalnav__heading">
        ${this.heading}
      </h2>`,
      h3: y`<h3 id=${e} class="nys-verticalnav__heading">
        ${this.heading}
      </h3>`,
      h4: y`<h4 id=${e} class="nys-verticalnav__heading">
        ${this.heading}
      </h4>`,
      h5: y`<h5 id=${e} class="nys-verticalnav__heading">
        ${this.heading}
      </h5>`,
      h6: y`<h6 id=${e} class="nys-verticalnav__heading">
        ${this.heading}
      </h6>`
    };
    return y`<slot name="header" @slotchange=${this._handleHeaderSlotChange}>
      ${t[this.headingLevel]}
    </slot>`;
  }
  // The <nav> landmark's accessible name is applied imperatively in
  // _syncNavLabel(); see the note there on why it is not bound in the template.
  renderContentDesktop() {
    return y` <nav class="nys-verticalnav nys-verticalnav--desktop">
      ${this._renderHeading()}
      <slot @slotchange=${this._handleSlotChange}></slot>
      <slot name="footer"></slot>
    </nav>`;
  }
  /**
   * The heading level for the mobile disclosure trigger.
   *
   * Below 1024px the navigation heading IS the accordion trigger, so it has to
   * land at the same outline position the desktop heading occupies — otherwise
   * the nav's place in the outline changes with the viewport. `nys-accordion`
   * runs h2-h6 (a disclosure trigger is never a page title), so the one level
   * this nav offers that it does not, `h1`, maps to the next valid level.
   */
  _accordionHeadingLevel() {
    return this.headingLevel === "h1" ? "h2" : this.headingLevel;
  }
  renderContentMobile() {
    return y` <nav class="nys-verticalnav nys-verticalnav--mobile">
      <nys-accordion bordered>
        <nys-accordionitem
          id="${this.id}-accordion"
          heading="${this.heading}"
          headingLevel="${this._accordionHeadingLevel()}"
          ?expanded=${this.expanded}
          @nys-accordionitem-toggle=${this._handleAccordionToggle}
        >
          <!-- The header slot is rendered here too: omitting it below 1024px made a
          consumer's custom header vanish entirely (WCAG 1.3.1). No fallback heading
          is needed — the accordion's own header already shows the heading text. -->
          <slot
            name="header"
            @slotchange=${this._handleHeaderSlotChange}
          ></slot>
          <slot @slotchange=${this._handleSlotChange}></slot>
          <slot name="footer"></slot>
        </nys-accordionitem>
      </nys-accordion>
    </nav>`;
  }
  render() {
    return this._isMobile ? this.renderContentMobile() : this.renderContentDesktop();
  }
};
ta.styles = C(nc);
let en = ta;
Vo([
  a({ type: String, reflect: !0 })
], en.prototype, "id");
Vo([
  a({ type: String, reflect: !0 })
], en.prototype, "heading");
Vo([
  a({ type: Boolean, reflect: !0 })
], en.prototype, "hideHeading");
Vo([
  a({ type: String, reflect: !0 })
], en.prototype, "headingLevel");
Vo([
  a({ type: Boolean, reflect: !0 })
], en.prototype, "expanded");
Vo([
  $()
], en.prototype, "_isMobile");
customElements.get("nys-verticalnav") || customElements.define("nys-verticalnav", en);
const Zp = '@charset "UTF-8";:host{--_nys-video-width: fit-content;--_nys-video-height: var(--nys-size-600, 48px);--_nys-video-radius: var(--nys-radius-lg, 8px);--_nys-video-padding: var(--nys-space-100, 8px);--_nys-video-gap: var(--nys-space-100, 8px);--_nys-video-font-size: var(--nys-font-size-ui-md, 16px);--_nys-video-font-weight: var(--nys-font-weight-semibold, 600);--_nys-video-line-height: var(--nys-font-lineheight-ui-md, 24px);--_nys-video-font-family: var( --nys-font-family-ui, var( --nys-font-family-sans, "Proxima Nova", "Helvetica Neue", "Helvetica", "Arial", sans-serif ) );--_nys-video-background-color--play-button: var( --nys-color-black-transparent-600, rgba(27, 27, 27, .6) );--_nys-video-outline-color--play-button: var(--nys-color-focus, #004dd1);--_nys-video-outline-width--play-button: 3.5px;--_nys-video-svg-color--play-button: var( --nys-color-white-transparent-400, rgba(255, 255, 255, .4) );--_nys-video-color--title-text: var(--nys-color-text-reverse, #ffffff);--_nys-video-background-color--title-text: var( --nys-color-ink, var(--nys-color-neutral-900, #1b1b1b) );--_nys-video-padding--title-text: var(--nys-space-250, 20px);display:block;width:100%;max-width:675px}:host([size=full]){max-width:none}:host([size=sm]){min-width:320px;max-width:439px}:host([size=full]) .nys-video .nys-video__title-text{position:absolute;bottom:0;--_nys-video-background-color--title-text: var( --nys-color-black-transparent-900, rgba(27, 27, 27, .9) )}@media(min-width:480px){.nys-video:not(.nys-video--sm):not(.nys-video--md) .nys-video__title-text{position:absolute;bottom:0;--_nys-video-background-color--title-text: var( --nys-color-black-transparent-900, rgba(27, 27, 27, .9) )}}.nys-video{border-radius:var(--_nys-video-radius);display:flex;flex-direction:column;position:relative;overflow:hidden}.nys-video .nys-video__ratio-box{aspect-ratio:16/9;position:relative}.nys-video .nys-video__ratio-box iframe,.nys-video .nys-video__ratio-box .nys-video__thumbnail{position:absolute;top:0;left:0;width:100%;height:100%;display:block;border:none}.nys-video .nys-video__ratio-box .nys-video__thumbnail{padding:0;background-color:transparent}.nys-video .nys-video__ratio-box .nys-video__thumbnail img{width:100%;height:100%;object-fit:cover}.nys-video .nys-video__ratio-box .nys-video__thumbnail .nys-video__play-icon{position:absolute;inset:0;width:100%;height:100%;padding:0;border:none;background-color:transparent;cursor:pointer;display:flex;align-items:center;justify-content:center}.nys-video .nys-video__ratio-box .nys-video__thumbnail .nys-video__play-icon .nys-video__play-badge{width:96px;height:96px;background-color:var(--_nys-video-background-color--play-button);border-radius:50%;display:flex;align-items:center;justify-content:center}.nys-video .nys-video__ratio-box .nys-video__thumbnail .nys-video__play-icon svg{display:flex;margin-left:10px}.nys-video .nys-video__ratio-box .nys-video__thumbnail .nys-video__play-icon:focus-visible{outline:var(--_nys-video-outline-width--play-button) solid var(--_nys-video-outline-color--play-button);outline-offset:calc(-1 * var(--_nys-video-outline-width--play-button))}.nys-video .nys-video__ratio-box .nys-video__thumbnail .nys-video__play-icon:hover{--_nys-video-background-color--play-button: var( --nys-color-black-transparent-700, rgba(27, 27, 27, .7) )}.nys-video .nys-video__ratio-box .nys-video__thumbnail .nys-video__play-icon:active{--_nys-video-background-color--play-button: var( --nys-color-black-transparent-800, rgba(27, 27, 27, .8) )}.nys-video .nys-video__ratio-box .nys-video__thumbnail .nys-video__play-icon:disabled{cursor:not-allowed}.nys-video--disabled .nys-video__ratio-box{cursor:not-allowed}.nys-video--disabled .nys-video__ratio-box .nys-video__thumbnail .nys-video__play-icon,.nys-video--disabled .nys-video__ratio-box .nys-video__thumbnail .nys-video__play-icon:hover,.nys-video--disabled .nys-video__ratio-box .nys-video__thumbnail .nys-video__play-icon:active{--_nys-video-background-color--play-button: var( --nys-color-black-transparent-200, rgba(27, 27, 27, .2) )}.nys-video--disabled .nys-video__ratio-box .nys-video__thumbnail .nys-video__play-icon svg{fill:var(--_nys-video-svg-color--play-button)}.nys-video .nys-video__title-text{width:100%;padding:var(--_nys-video-padding--title-text);background-color:var(--_nys-video-background-color--title-text);box-sizing:border-box;color:var(--_nys-video-color--title-text);display:flex;justify-content:start;font-family:var(--_nys-video-font-family);font-size:var(--_nys-video-font-size);font-weight:var(--_nys-video-font-weight);line-height:var(--_nys-video-line-height)}.nys-video .nys-video__title-text p{margin:0}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;border:0}';
var Xp = Object.defineProperty, Dt = (r, e, t, n) => {
  for (var o = void 0, s = r.length - 1, i; s >= 0; s--)
    (i = r[s]) && (o = i(e, t, o) || o);
  return o && Xp(e, t, o), o;
};
const na = class na extends D {
  constructor() {
    super(...arguments), this.id = "", this.titleText = "", this.videourl = "", this.size = "", this.loading = "lazy", this.starttime = 0, this.thumbnail = null, this.autoplay = !1, this.disabled = !1, this._playerActive = !1, this._announcement = "", this._adPlaying = !1;
  }
  /**
   * Lifecycle methods
   * --------------------------------------------------------------------------
   */
  // super.connectedCallback() (NysElement) assigns an auto-generated
  // id (prefix = localName) when one is not provided. The assertive live region
  // stays on the inner .nys-video__announcer element so only playback/ad state is
  // announced; the host carries no role (defaultRole stays null) — the <iframe>
  // and the play <button> carry their own semantics.
  connectedCallback() {
    super.connectedCallback(), this.autoplay && this._announceVideoVO();
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
            onStateChange: (n) => {
              this._adPlaying || n.data === window.YT.PlayerState.PLAYING && (this._announcement = this.autoplay ? "Video is playing, muted" : "Video is playing", setTimeout(() => this._announcement = "", 1e3));
            },
            // // NOTE: onAdStateChange is not officially documented by YouTube.
            // It is a real event fired by the IFrame player, discovered through community reverse-engineering
            onAdStateChange: (n) => {
              this._adPlaying = n.data === window.YT.PlayerState.PLAYING, this._adPlaying && (this._announcement = "Advertisement is playing", setTimeout(() => this._announcement = "", 1e3));
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
    return y`
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
    return this.disabled ? y`<svg
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
        </svg>` : y`<svg
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
      return y``;
    const e = this._getEmbedUrl();
    if (!e) return y``;
    const t = this.size || "md";
    return !this._playerActive && !this.autoplay ? y`
        <div
          class="nys-video nys-video--${t} ${this.disabled ? "nys-video--disabled" : ""}"
        >
          ${this._renderAnnouncer()}
          <div class="nys-video__ratio-box">
            <div class="nys-video__thumbnail">
              <img src=${this._getThumbnailUrl()} alt="" />
              <button
                class="nys-video__play-icon"
                aria-label="Play ${this.titleText}"
                ?disabled=${this.disabled}
                @click=${this._handleThumbnailClick}
              >
                <span class="nys-video__play-badge">
                  ${this._renderPlayIcon()}
                </span>
              </button>
            </div>
          </div>
          ${this.titleText && y`<div class="nys-video__title-text">
            <p>${this.titleText}</p>
          </div>`}
        </div>
      ` : y`<div class="nys-video nys-video--${t}">
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
na.styles = C(Zp);
let Ze = na;
Dt([
  a({ type: String, reflect: !0 })
], Ze.prototype, "id");
Dt([
  a({ type: String, reflect: !0 })
], Ze.prototype, "titleText");
Dt([
  a({ type: String })
], Ze.prototype, "videourl");
Dt([
  a({ type: String, reflect: !0 })
], Ze.prototype, "size");
Dt([
  a({ type: String })
], Ze.prototype, "loading");
Dt([
  a({ type: Number })
], Ze.prototype, "starttime");
Dt([
  a({ type: String })
], Ze.prototype, "thumbnail");
Dt([
  a({ type: Boolean })
], Ze.prototype, "autoplay");
Dt([
  a({ type: Boolean, reflect: !0 })
], Ze.prototype, "disabled");
Dt([
  $()
], Ze.prototype, "_playerActive");
Dt([
  $()
], Ze.prototype, "_announcement");
customElements.get("nys-video") || customElements.define("nys-video", Ze);
export {
  Ap as NYS_ALERT_URL,
  Gn as NysAccordion,
  Kt as NysAccordionItem,
  Pe as NysAlert,
  st as NysAvatar,
  xn as NysBacktotop,
  zd as NysBadge,
  Mt as NysBreadcrumbs,
  B as NysButton,
  xe as NysCard,
  J as NysCheckbox,
  we as NysCheckboxgroup,
  j as NysCombobox,
  ou as NysDatepicker,
  vr as NysDivider,
  Xn as NysDropdownMenu,
  Zt as NysDropdownMenuItem,
  Qn as NysErrorMessage,
  ae as NysFileinput,
  Xt as NysGlobalFooter,
  Et as NysGlobalHeader,
  ky as NysIcon,
  $i as NysIconlist,
  gr as NysIconlistitem,
  Qt as NysLabel,
  ut as NysModal,
  kn as NysOption,
  wn as NysPagination,
  Fo as NysProcesslist,
  Io as NysProcesslistitem,
  Le as NysRadiobutton,
  he as NysRadiogroup,
  Ce as NysSelect,
  mr as NysSkipnav,
  At as NysStep,
  Cn as NysStepper,
  eo as NysTab,
  xr as NysTabgroup,
  yt as NysTable,
  cs as NysTabpanel,
  te as NysTextarea,
  F as NysTextinput,
  Ke as NysToggle,
  Jt as NysTooltip,
  ds as NysUnavFooter,
  it as NysUnavHeader,
  en as NysVerticalnav,
  $n as NysVerticalnavGroup,
  Ze as NysVideo,
  df as clearIconCache,
  Pu as getIconLibrary,
  lf as registerIconLibrary,
  cf as unregisterIconLibrary
};
//# sourceMappingURL=nysds.es.js.map
