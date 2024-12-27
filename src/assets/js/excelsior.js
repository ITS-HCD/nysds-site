(function(r,M){typeof exports=="object"&&typeof module<"u"?M(exports):typeof define=="function"&&define.amd?define(["exports"],M):(r=typeof globalThis<"u"?globalThis:r||self,M(r.Excelsior={}))})(this,function(r){"use strict";/*!
    * 
    * ░█▀▀▀ ▀▄░▄▀ ░█▀▀█ ░█▀▀▀ ░█─── ░█▀▀▀█ ▀█▀ ░█▀▀▀█ ░█▀▀█ 
    * ░█▀▀▀ ─░█── ░█─── ░█▀▀▀ ░█─── ─▀▀▀▄▄ ░█─ ░█──░█ ░█▄▄▀ 
    * ░█▄▄▄ ▄▀░▀▄ ░█▄▄█ ░█▄▄▄ ░█▄▄█ ░█▄▄▄█ ▄█▄ ░█▄▄▄█ ░█─░█
    * 
    * New York State's Excelsior Design System (v0.0.1)
    * Description: A design system for New York State's digital products.
    * Repository: https://github.com/its-hcd/excelsior
    * License: MIT
  *//**
  * @license
  * Copyright 2019 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */var U1,V;const M=globalThis,C1=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r1=Symbol(),y1=new WeakMap;let w1=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==r1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(C1&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=y1.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&y1.set(e,t))}return t}toString(){return this.cssText}};const q1=o=>new w1(typeof o=="string"?o:o+"",void 0,r1),_=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,C)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[C+1],o[0]);return new w1(e,o,r1)},I1=(o,t)=>{if(C1)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=M.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},f1=C1?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return q1(e)})(o):o;/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const{is:j1,defineProperty:G1,getOwnPropertyDescriptor:F1,getOwnPropertyNames:W1,getOwnPropertySymbols:Y1,getPrototypeOf:K1}=Object,Z=globalThis,b1=Z.trustedTypes,J1=b1?b1.emptyScript:"",n1=Z.reactiveElementPolyfillSupport,I=(o,t)=>o,X={toAttribute(o,t){switch(t){case Boolean:o=o?J1:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},l1=(o,t)=>!j1(o,t),m1={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:l1};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Z.litPropertyMetadata??(Z.litPropertyMetadata=new WeakMap);let T=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=m1){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&G1(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:C}=F1(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const c=s==null?void 0:s.call(this);C.call(this,n),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??m1}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const t=K1(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const e=this.properties,i=[...W1(e),...Y1(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(f1(s))}else t!==void 0&&e.push(f1(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return I1(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var C;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((C=i.converter)==null?void 0:C.toAttribute)!==void 0?i.converter:X).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var C;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((C=n.converter)==null?void 0:C.fromAttribute)!==void 0?n.converter:X;this._$Em=s,this[s]=c.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??l1)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[C,n]of this._$Ep)this[C]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[C,n]of s)n.wrapped!==!0||this._$AL.has(C)||this[C]===void 0||this.P(C,this[C],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var C;return(C=s.hostUpdate)==null?void 0:C.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[I("elementProperties")]=new Map,T[I("finalized")]=new Map,n1==null||n1({ReactiveElement:T}),(Z.reactiveElementVersions??(Z.reactiveElementVersions=[])).push("2.0.4");/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const j=globalThis,Q=j.trustedTypes,_1=Q?Q.createPolicy("lit-html",{createHTML:o=>o}):void 0,L1="$lit$",H=`lit$${Math.random().toFixed(9).slice(2)}$`,$1="?"+H,X1=`<${$1}>`,E=document,G=()=>E.createComment(""),F=o=>o===null||typeof o!="object"&&typeof o!="function",a1=Array.isArray,Q1=o=>a1(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",c1=`[ 	
 \f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x1=/-->/g,M1=/>/g,A=RegExp(`>|${c1}(?:([^\\s"'>=/]+)(${c1}*=${c1}*(?:[^ 	
 \f\r"'\`<>=]|("|')|))|$)`,"g"),Z1=/'/g,H1=/"/g,V1=/^(?:script|style|textarea|title)$/i,t5=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),h=t5(1),k=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),S1=new WeakMap,N=E.createTreeWalker(E,129);function E1(o,t){if(!a1(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return _1!==void 0?_1.createHTML(t):t}const e5=(o,t)=>{const e=o.length-1,i=[];let s,C=t===2?"<svg>":t===3?"<math>":"",n=W;for(let c=0;c<e;c++){const a=o[c];let u,y,d=-1,x=0;for(;x<a.length&&(n.lastIndex=x,y=n.exec(a),y!==null);)x=n.lastIndex,n===W?y[1]==="!--"?n=x1:y[1]!==void 0?n=M1:y[2]!==void 0?(V1.test(y[2])&&(s=RegExp("</"+y[2],"g")),n=A):y[3]!==void 0&&(n=A):n===A?y[0]===">"?(n=s??W,d=-1):y[1]===void 0?d=-2:(d=n.lastIndex-y[2].length,u=y[1],n=y[3]===void 0?A:y[3]==='"'?H1:Z1):n===H1||n===Z1?n=A:n===x1||n===M1?n=W:(n=A,s=void 0);const S=n===A&&o[c+1].startsWith("/>")?" ":"";C+=n===W?a+X1:d>=0?(i.push(u),a.slice(0,d)+L1+a.slice(d)+H+S):a+H+(d===-2?c:S)}return[E1(o,C+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};let h1=class R1{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let C=0,n=0;const c=t.length-1,a=this.parts,[u,y]=e5(t,e);if(this.el=R1.createElement(u,i),N.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=N.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const d of s.getAttributeNames())if(d.endsWith(L1)){const x=y[n++],S=s.getAttribute(d).split(H),o1=/([.?@])?(.*)/.exec(x);a.push({type:1,index:C,name:o1[2],strings:S,ctor:o1[1]==="."?s5:o1[1]==="?"?o5:o1[1]==="@"?C5:t1}),s.removeAttribute(d)}else d.startsWith(H)&&(a.push({type:6,index:C}),s.removeAttribute(d));if(V1.test(s.tagName)){const d=s.textContent.split(H),x=d.length-1;if(x>0){s.textContent=Q?Q.emptyScript:"";for(let S=0;S<x;S++)s.append(d[S],G()),N.nextNode(),a.push({type:2,index:++C});s.append(d[x],G())}}}else if(s.nodeType===8)if(s.data===$1)a.push({type:2,index:C});else{let d=-1;for(;(d=s.data.indexOf(H,d+1))!==-1;)a.push({type:7,index:C}),d+=H.length-1}C++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}};function O(o,t,e=o,i){var n,c;if(t===k)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const C=F(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==C&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),C===void 0?s=void 0:(s=new C(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=O(o,s._$AS(o,t.values),s,i)),t}let i5=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??E).importNode(e,!0);N.currentNode=s;let C=N.nextNode(),n=0,c=0,a=i[0];for(;a!==void 0;){if(n===a.index){let u;a.type===2?u=new d1(C,C.nextSibling,this,t):a.type===1?u=new a.ctor(C,a.name,a.strings,this,t):a.type===6&&(u=new r5(C,this,t)),this._$AV.push(u),a=i[++c]}n!==(a==null?void 0:a.index)&&(C=N.nextNode(),n++)}return N.currentNode=E,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},d1=class D1{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),F(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Q1(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){var C;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=h1.createElement(E1(i.h,i.h[0]),this.options)),i);if(((C=this._$AH)==null?void 0:C._$AD)===s)this._$AH.p(e);else{const n=new i5(s,this),c=n.u(this.options);n.p(e),this.T(c),this._$AH=n}}_$AC(t){let e=S1.get(t.strings);return e===void 0&&S1.set(t.strings,e=new h1(t)),e}k(t){a1(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const C of t)s===e.length?e.push(i=new D1(this.O(G()),this.O(G()),this,this.options)):i=e[s],i._$AI(C),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},t1=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,C){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=C,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,s){const C=this.strings;let n=!1;if(C===void 0)t=O(this,t,e,0),n=!F(t)||t!==this._$AH&&t!==k,n&&(this._$AH=t);else{const c=t;let a,u;for(t=C[0],a=0;a<C.length-1;a++)u=O(this,c[i+a],e,a),u===k&&(u=this._$AH[a]),n||(n=!F(u)||u!==this._$AH[a]),u===p?t=p:t!==p&&(t+=(u??"")+C[a+1]),this._$AH[a]=u}n&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},s5=class extends t1{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}},o5=class extends t1{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}};class C5 extends t1{constructor(t,e,i,s,C){super(t,e,i,s,C),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??p)===k)return;const i=this._$AH,s=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,C=t!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),C&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}let r5=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}};const p1=j.litHtmlPolyfillSupport;p1==null||p1(h1,d1),(j.litHtmlVersions??(j.litHtmlVersions=[])).push("3.2.1");const n5=(o,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const C=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new d1(t.insertBefore(G(),C),C,void 0,e??{})}return s._$AI(o),s};/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */let w=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=n5(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return k}};w._$litElement$=!0,w.finalized=!0,(U1=globalThis.litElementHydrateSupport)==null||U1.call(globalThis,{LitElement:w});const g1=globalThis.litElementPolyfillSupport;g1==null||g1({LitElement:w}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.1.1");/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const z=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const l5={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:l1},a5=(o=l5,t,e)=>{const{kind:i,metadata:s}=e;let C=globalThis.litPropertyMetadata.get(s);if(C===void 0&&globalThis.litPropertyMetadata.set(s,C=new Map),C.set(e.name,o),i==="accessor"){const{name:n}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(n,a,o)},init(c){return c!==void 0&&this.P(n,void 0,o),c}}}if(i==="setter"){const{name:n}=e;return function(c){const a=this[n];t.call(this,c),this.requestUpdate(n,a,o)}}throw Error("Unsupported decorator location: "+i)};function l(o){return(t,e)=>typeof e=="object"?a5(o,t,e):((i,s,C)=>{const n=s.hasOwnProperty(C);return s.constructor.createProperty(C,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,C):void 0})(o,t,e)}/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */function A1(o){return l({...o,state:!0,attribute:!1})}/**
  * @license
  * Copyright 2018 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const e1=o=>o??p,c5=_`
   .nys-checkbox {
     display: flex;
     flex: 1;
     flex-direction: row;
     align-items: center;
     font-family: Arial, sans-serif;
   }
 
   .nys-checkbox__input {
     appearance: none;
     width: var(--checkbox-size, 32px);
     height: var(--checkbox-size, 32px);
     border: 3px solid var(--form-color-border, #1b1b1b);
     background-color: var(--form-color-bg, white);
     cursor: pointer;
     margin-bottom: 4px;
     border-radius: var(--form-radius, 4px);
     background-repeat: no-repeat;
     background-position: center;
   }
 
   /* Checked */
   .nys-checkbox__input:not(:disabled):checked {
     background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path style="fill: %23ffffff" d="M11.941,28.877l-11.941-11.942l5.695-5.696l6.246,6.246l14.364-14.364L32,8.818"/></svg>');
     border-color: var(--color-border-primary, #154973);
     background-color: var(--color-bg-primary, #154973);
   }
 
   /* Checked + Disabled */
   .nys-checkbox__input:disabled:checked {
     background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path style="fill: %23ededed" d="M11.941,28.877l-11.941-11.942l5.695-5.696l6.246,6.246l14.364-14.364L32,8.818"/></svg>');
     border-color: var(--color-border-disabled, #757575);
     background-color: var(--color-bg-disabled, #757575);
   }
 
   /* Disabled */
   .nys-checkbox__input:disabled {
     background-color: var(--form-unchecked-color-bg-disabled, #f0f0f0);
     border-color: var(--form-unchecked-color-border-disabled, #757575);
     cursor: not-allowed;
   }
 
   /* Focused */
   .nys-checkbox__input:focus {
     outline-offset: 3px;
     outline: 3px solid var(--form-focus-color, #007bff);
   }
 
   /* Checkbox Label Holder */
   .nys-checkbox__text {
     margin-left: 8px;
   }
 
   /* Label styling */
   .nys-checkbox__label {
     font-size: 16px;
     font-weight: 500;
     color: var(--form-label-color, #1b1b1b);
   }
 
   /* Help text styling */
   .nys-checkbox__description {
     font-size: 12px;
     color: var(--form-help-text-color, gray);
   }
 
   /* Disabled label */
   .nys-checkbox__input:disabled + .nys-checkbox__text .nys-checkbox__label {
     color: var(--form-label-color-disabled, #757575);
   }
 `;var h5=Object.defineProperty,d5=Object.getOwnPropertyDescriptor,L=(o,t,e,i)=>{for(var s=i>1?void 0:i?d5(t,e):t,C=o.length-1,n;C>=0;C--)(n=o[C])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&h5(t,e,s),s};let p5=0;r.NysCheckbox=class extends w{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.required=!1,this.label="",this.description="",this.id="",this.name="",this.value=""}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-checkbox-${Date.now()}-${p5++}`)}_handleChange(t){const{checked:e}=t.target;this.checked=e,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("focus"))}_handleBlur(){this.dispatchEvent(new Event("blur"))}_handleKeydown(t){t.code==="Space"&&(t.preventDefault(),this.disabled||(this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))))}render(){return h`
       <label class="nys-checkbox">
         <input
           id="${this.id}"
           class="nys-checkbox__input"
           type="checkbox"
           name="${e1(this.name?this.name:void 0)}"
           .checked=${this.checked}
           ?disabled=${this.disabled}
           .value=${this.value}
           ?required="${this.required}"
           aria-checked="${this.checked}"
           aria-disabled="${this.disabled}"
           aria-required="${this.required}"
           @change="${this._handleChange}"
           @focus="${this._handleFocus}"
           @blur="${this._handleBlur}"
           @keydown="${this._handleKeydown}"
         />
         <div class="nys-checkbox__text">
           <div class="nys-checkbox__label">${this.label}</div>
           ${this.description?h`<div class="nys-checkbox__description">
                 ${this.description}
               </div>`:""}
         </div>
       </label>
     `}},r.NysCheckbox.styles=c5,L([l({type:Boolean})],r.NysCheckbox.prototype,"checked",2),L([l({type:Boolean})],r.NysCheckbox.prototype,"disabled",2),L([l({type:Boolean})],r.NysCheckbox.prototype,"required",2),L([l({type:String})],r.NysCheckbox.prototype,"label",2),L([l({type:String})],r.NysCheckbox.prototype,"description",2),L([l({type:String})],r.NysCheckbox.prototype,"id",2),L([l({type:String})],r.NysCheckbox.prototype,"name",2),L([l({type:String})],r.NysCheckbox.prototype,"value",2),r.NysCheckbox=L([z("nys-checkbox")],r.NysCheckbox);const g5=_`
   .nys-radiobutton {
     display: flex;
     flex: 1;
     flex-direction: row;
     align-items: center;
     font-family: Arial, sans-serif;
   }
 
   .nys-radiobutton__input {
     appearance: none;
     width: var(--radiobutton-size, 32px);
     height: var(--radiobutton-size, 32px);
     border: 3px solid var(--form-color-border, #1b1b1b);
     background-color: var(--form-color-bg, white);
     cursor: pointer;
     margin-bottom: 4px;
     border-radius: var(--form-radius, 100%);
     background-repeat: no-repeat;
     background-position: center;
     background-size: contain;
   }
 
   /* Checked */
   .nys-radiobutton__input:not(:disabled):checked {
     background-image: url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="10.5" stroke="white" stroke-width="4"/></svg>');
     border-color: var(--color-border-primary, #154973);
     background-color: var(--color-bg-primary, #154973);
   }
 
   /* Checked + Disabled */
   .nys-radiobutton__input:disabled:checked {
     background-image: url('data:image/svg+xml;utf8,<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="10.5" stroke="white" stroke-width="4"/></svg>');
     border-color: var(--color-border-disabled, #757575);
     background-color: var(--color-bg-disabled, #757575);
   }
 
   /* Disabled */
   .nys-radiobutton__input:disabled {
     background-color: var(--form-unchecked-color-bg-disabled, #f0f0f0);
     border-color: var(--form-unchecked-color-border-disabled, #757575);
     cursor: not-allowed;
   }
 
   /* Focused */
   .nys-radiobutton__input:focus {
     outline-offset: 3px;
     outline: 3px solid var(--form-focus-color, #007bff);
   }
 
   /* Radiobutton Label Holder */
   .nys-radiobutton__text {
     margin-left: 8px;
   }
 
   /* Label styling */
   .nys-radiobutton__label {
     font-size: 16px;
     font-weight: 500;
     color: var(--form-label-color, #1b1b1b);
   }
 
   /* Help text styling */
   .nys-radiobutton__description {
     font-size: 12px;
     color: var(--form-help-text-color, gray);
   }
 
   /* Disabled label */
   .nys-radiobutton__input:disabled
     + .nys-radiobutton__text
     .nys-radiobutton__label {
     color: var(--form-label-color-disabled, #757575);
   }
 `;var u5=Object.defineProperty,v5=Object.getOwnPropertyDescriptor,$=(o,t,e,i)=>{for(var s=i>1?void 0:i?v5(t,e):t,C=o.length-1,n;C>=0;C--)(n=o[C])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&u5(t,e,s),s};let y5=0;r.NysRadiobutton=class extends w{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.required=!1,this.label="",this.description="",this.id="",this.name="",this.value=""}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-radiobutton-${Date.now()}-${y5++}`),this.checked&&(r.NysRadiobutton.buttonGroup[this.name]&&(r.NysRadiobutton.buttonGroup[this.name].checked=!1,r.NysRadiobutton.buttonGroup[this.name].requestUpdate()),r.NysRadiobutton.buttonGroup[this.name]=this)}updated(t){t.has("checked")&&this.checked&&r.NysRadiobutton.buttonGroup[this.name]!==this&&(r.NysRadiobutton.buttonGroup[this.name]&&(r.NysRadiobutton.buttonGroup[this.name].checked=!1,r.NysRadiobutton.buttonGroup[this.name].requestUpdate()),r.NysRadiobutton.buttonGroup[this.name]=this)}_handleChange(t){const{checked:e}=t.target;this.checked=e,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("focus"))}_handleBlur(){this.dispatchEvent(new Event("blur"))}_handleKeydown(t){t.code==="Space"&&(t.preventDefault(),!this.disabled&&!this.checked&&(r.NysRadiobutton.buttonGroup[this.name]&&(r.NysRadiobutton.buttonGroup[this.name].checked=!1,r.NysRadiobutton.buttonGroup[this.name].requestUpdate()),r.NysRadiobutton.buttonGroup[this.name]=this,this.checked=!0,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))))}_handleClick(){this.checked||(r.NysRadiobutton.buttonGroup[this.name]&&(r.NysRadiobutton.buttonGroup[this.name].checked=!1,r.NysRadiobutton.buttonGroup[this.name].requestUpdate()),r.NysRadiobutton.buttonGroup[this.name]=this,this.checked=!0)}render(){return h`
       <label class="nys-radiobutton">
         <input
           id="${this.id}"
           class="nys-radiobutton__input"
           type="radio"
           name="${e1(this.name?this.name:void 0)}"
           .checked=${this.checked}
           ?disabled=${this.disabled}
           .value=${this.value}
           ?required="${this.required}"
           aria-checked="${this.checked}"
           aria-disabled="${this.disabled}"
           aria-required="${this.required}"
           @change="${this._handleChange}"
           @focus="${this._handleFocus}"
           @blur="${this._handleBlur}"
           @keydown="${this._handleKeydown}"
           @click="${this._handleClick}"
         />
         <div class="nys-radiobutton__text">
           <div class="nys-radiobutton__label">${this.label}</div>
           ${this.description?h`<div class="nys-radiobutton__description">
                 ${this.description}
               </div>`:""}
         </div>
       </label>
     `}},r.NysRadiobutton.buttonGroup={},r.NysRadiobutton.styles=g5,$([l({type:Boolean})],r.NysRadiobutton.prototype,"checked",2),$([l({type:Boolean})],r.NysRadiobutton.prototype,"disabled",2),$([l({type:Boolean})],r.NysRadiobutton.prototype,"required",2),$([l({type:String})],r.NysRadiobutton.prototype,"label",2),$([l({type:String})],r.NysRadiobutton.prototype,"description",2),$([l({type:String})],r.NysRadiobutton.prototype,"id",2),$([l({type:String})],r.NysRadiobutton.prototype,"name",2),$([l({type:String})],r.NysRadiobutton.prototype,"value",2),r.NysRadiobutton=$([z("nys-radiobutton")],r.NysRadiobutton);const w5=_`
   .nys-alert__icon {
     margin-right: 0.8rem;
   }
 
   .nys-alert__container {
     display: flex;
     background-color: #f0f0f0;
     border-left: 0.5rem solid #adadad;
     color: #1b1b1b;
     padding: 1rem 1.5rem;
     font-family:
       Source Sans Pro Web,
       Helvetica Neue,
       Helvetica,
       Roboto,
       Arial,
       sans-serif;
     font-size: 1.06rem;
     line-height: 1.5;
   }
 
   .nys-alert__text {
     position: relative;
     display: flex;
     flex-direction: column;
   }
 
   .nys-alert__label {
     margin: 0 0 0.5rem 0;
     font-family:
       Source Sans Pro Web,
       Helvetica Neue,
       Helvetica,
       Roboto,
       Arial,
       sans-serif;
     font-size: 1.33rem;
     line-height: 0.9;
   }
 
   slot[name="text"] {
     margin: 0;
   }
   ::slotted(p) {
     margin: 0;
   }
 
   .close-container {
     margin-left: auto;
   }
   .close-button {
     background: none;
     border: none;
     display: flex;
     cursor: pointer;
     color: currentColor;
   }
 
   /* Slim variant: Disables the heading via JS logic. In styling, centers the icon for a compact layout. */
   .nys-alert--slim {
     display: flex;
     align-items: center;
   }
 
   /* Alert Types */
   .nys-alert--info {
     background-color: #e7f6f8;
     border-left-color: #00bde3;
   }
   .nys-alert--warning {
     background-color: #faf3d1;
     border-left-color: #ffbe2e;
   }
   .nys-alert--success {
     background-color: #ecf3ec;
     border-left-color: #00a91c;
   }
   .nys-alert--error {
     background-color: #f4e3db;
     border-left-color: #d54309;
   }
   .nys-alert--emergency {
     background-color: #9c3d10;
     border-left-color: #9c3d10;
     color: #fff;
   }
 `;/*!
    * 
    * ░█▀▀▀ ▀▄░▄▀ ░█▀▀█ ░█▀▀▀ ░█─── ░█▀▀▀█ ▀█▀ ░█▀▀▀█ ░█▀▀█ 
    * ░█▀▀▀ ─░█── ░█─── ░█▀▀▀ ░█─── ─▀▀▀▄▄ ░█─ ░█──░█ ░█▄▄▀ 
    * ░█▄▄▄ ▄▀░▀▄ ░█▄▄█ ░█▄▄▄ ░█▄▄█ ░█▄▄▄█ ▄█▄ ░█▄▄▄█ ░█─░█
    * 
    * Icon Component v0.0.1
    * Part of New York State's Excelsior Design System (v0.0.1)
    * A design system for New York State's digital products.
    * Repository: https://github.com/its-hcd/excelsior
    * License: MIT
 *//**
  * @license
  * Copyright 2019 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const i1=globalThis,u1=i1.ShadowRoot&&(i1.ShadyCSS===void 0||i1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,k1=Symbol(),N1=new WeakMap;let f5=class{constructor(o,t,e){if(this._$cssResult$=!0,e!==k1)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=o,this.t=t}get styleSheet(){let o=this.o;const t=this.t;if(u1&&o===void 0){const e=t!==void 0&&t.length===1;e&&(o=N1.get(t)),o===void 0&&((this.o=o=new CSSStyleSheet).replaceSync(this.cssText),e&&N1.set(t,o))}return o}toString(){return this.cssText}};const b5=o=>new f5(typeof o=="string"?o:o+"",void 0,k1),m5=(o,t)=>{if(u1)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=i1.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},z1=u1?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return b5(e)})(o):o;/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const{is:_5,defineProperty:L5,getOwnPropertyDescriptor:$5,getOwnPropertyNames:x5,getOwnPropertySymbols:M5,getPrototypeOf:Z5}=Object,U=globalThis,B1=U.trustedTypes,H5=B1?B1.emptyScript:"",P1=U.reactiveElementPolyfillSupport,Y=(o,t)=>o,s1={toAttribute(o,t){switch(t){case Boolean:o=o?H5:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},v1=(o,t)=>!_5(o,t),T1={attribute:!0,type:String,converter:s1,reflect:!1,hasChanged:v1};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),U.litPropertyMetadata??(U.litPropertyMetadata=new WeakMap);class K extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=T1){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&L5(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:C}=$5(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const c=s==null?void 0:s.call(this);C.call(this,n),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??T1}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;const t=Z5(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){const e=this.properties,i=[...x5(e),...M5(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(z1(s))}else t!==void 0&&e.push(z1(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return m5(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var i;const s=this.constructor.elementProperties.get(t),C=this.constructor._$Eu(t,s);if(C!==void 0&&s.reflect===!0){const n=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:s1).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(C):this.setAttribute(C,n),this._$Em=null}}_$AK(t,e){var i;const s=this.constructor,C=s._$Eh.get(t);if(C!==void 0&&this._$Em!==C){const n=s.getPropertyOptions(C),c=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:s1;this._$Em=C,this[C]=c.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??v1)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[C,n]of this._$Ep)this[C]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[C,n]of s)n.wrapped!==!0||this._$AL.has(C)||this[C]===void 0||this.P(C,this[C],n)}let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$EO)==null||t.forEach(s=>{var C;return(C=s.hostUpdate)==null?void 0:C.call(s)}),this.update(i)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[Y("elementProperties")]=new Map,K[Y("finalized")]=new Map,P1==null||P1({ReactiveElement:K}),(U.reactiveElementVersions??(U.reactiveElementVersions=[])).push("2.0.4");/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const V5={attribute:!0,type:String,converter:s1,reflect:!1,hasChanged:v1},S5=(o=V5,t,e)=>{const{kind:i,metadata:s}=e;let C=globalThis.litPropertyMetadata.get(s);if(C===void 0&&globalThis.litPropertyMetadata.set(s,C=new Map),C.set(e.name,o),i==="accessor"){const{name:n}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(n,a,o)},init(c){return c!==void 0&&this.P(n,void 0,o),c}}}if(i==="setter"){const{name:n}=e;return function(c){const a=this[n];t.call(this,c),this.requestUpdate(n,a,o)}}throw Error("Unsupported decorator location: "+i)};function R(o){return(t,e)=>typeof e=="object"?S5(o,t,e):((i,s,C)=>{const n=s.hasOwnProperty(C);return s.constructor.createProperty(C,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,C):void 0})(o,t,e)}const E5={edit_square:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
   <path d="M2 21.0125C1.45 21.0125 0.979167 20.8167 0.5875 20.425C0.195833 20.0333 0 19.5625 0 19.0125V5.0125C0 4.4625 0.195833 3.99167 0.5875 3.6C0.979167 3.20834 1.45 3.0125 2 3.0125H8.525C8.85833 3.0125 9.10833 3.11667 9.275 3.325C9.44167 3.53334 9.525 3.7625 9.525 4.0125C9.525 4.2625 9.4375 4.49167 9.2625 4.7C9.0875 4.90834 8.83333 5.0125 8.5 5.0125H2V19.0125H16V12.4875C16 12.1542 16.1042 11.9042 16.3125 11.7375C16.5208 11.5708 16.75 11.4875 17 11.4875C17.25 11.4875 17.4792 11.5708 17.6875 11.7375C17.8958 11.9042 18 12.1542 18 12.4875V19.0125C18 19.5625 17.8042 20.0333 17.4125 20.425C17.0208 20.8167 16.55 21.0125 16 21.0125H2ZM6 14.0125V11.5875C6 11.3208 6.05 11.0667 6.15 10.825C6.25 10.5833 6.39167 10.3708 6.575 10.1875L15.175 1.5875C15.375 1.3875 15.6 1.2375 15.85 1.1375C16.1 1.0375 16.35 0.987503 16.6 0.987503C16.8667 0.987503 17.1208 1.0375 17.3625 1.1375C17.6042 1.2375 17.825 1.3875 18.025 1.5875L19.425 3.0125C19.6083 3.2125 19.75 3.43334 19.85 3.675C19.95 3.91667 20 4.1625 20 4.4125C20 4.6625 19.9542 4.90834 19.8625 5.15C19.7708 5.39167 19.625 5.6125 19.425 5.8125L10.825 14.4125C10.6417 14.5958 10.4292 14.7417 10.1875 14.85C9.94583 14.9583 9.69167 15.0125 9.425 15.0125H7C6.71667 15.0125 6.47917 14.9167 6.2875 14.725C6.09583 14.5333 6 14.2958 6 14.0125ZM8 13.0125H9.4L15.2 7.2125L14.5 6.5125L13.775 5.8125L8 11.5875V13.0125Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,publish:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
   <path d="M7 7.85L5.125 9.725C4.925 9.925 4.6875 10.0208 4.4125 10.0125C4.1375 10.0042 3.9 9.9 3.7 9.7C3.51667 9.5 3.42083 9.26667 3.4125 9C3.40417 8.73333 3.5 8.5 3.7 8.3L7.3 4.7C7.4 4.6 7.50833 4.52917 7.625 4.4875C7.74167 4.44583 7.86667 4.425 8 4.425C8.13333 4.425 8.25833 4.44583 8.375 4.4875C8.49167 4.52917 8.6 4.6 8.7 4.7L12.3 8.3C12.5 8.5 12.5958 8.73333 12.5875 9C12.5792 9.26667 12.4833 9.5 12.3 9.7C12.1 9.9 11.8625 10.0042 11.5875 10.0125C11.3125 10.0208 11.075 9.925 10.875 9.725L9 7.85V15C9 15.2833 8.90417 15.5208 8.7125 15.7125C8.52083 15.9042 8.28333 16 8 16C7.71667 16 7.47917 15.9042 7.2875 15.7125C7.09583 15.5208 7 15.2833 7 15V7.85ZM0 4V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V4C16 4.28333 15.9042 4.52083 15.7125 4.7125C15.5208 4.90417 15.2833 5 15 5C14.7167 5 14.4792 4.90417 14.2875 4.7125C14.0958 4.52083 14 4.28333 14 4V2H2V4C2 4.28333 1.90417 4.52083 1.7125 4.7125C1.52083 4.90417 1.28333 5 1 5C0.716667 5 0.479167 4.90417 0.2875 4.7125C0.0958333 4.52083 0 4.28333 0 4Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,download:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
   <path d="M8 11.575C7.86667 11.575 7.74167 11.5542 7.625 11.5125C7.50833 11.4708 7.4 11.4 7.3 11.3L3.7 7.7C3.5 7.5 3.40417 7.26667 3.4125 7C3.42083 6.73333 3.51667 6.5 3.7 6.3C3.9 6.1 4.1375 5.99583 4.4125 5.9875C4.6875 5.97917 4.925 6.075 5.125 6.275L7 8.15V1C7 0.716667 7.09583 0.479167 7.2875 0.2875C7.47917 0.0958333 7.71667 0 8 0C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1V8.15L10.875 6.275C11.075 6.075 11.3125 5.97917 11.5875 5.9875C11.8625 5.99583 12.1 6.1 12.3 6.3C12.4833 6.5 12.5792 6.73333 12.5875 7C12.5958 7.26667 12.5 7.5 12.3 7.7L8.7 11.3C8.6 11.4 8.49167 11.4708 8.375 11.5125C8.25833 11.5542 8.13333 11.575 8 11.575ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11C1.28333 11 1.52083 11.0958 1.7125 11.2875C1.90417 11.4792 2 11.7167 2 12V14H14V12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0958 14.7167 11 15 11C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,download_done:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
   <path d="M5.544 8.95L13.994 0.499997C14.194 0.299997 14.4315 0.199997 14.7065 0.199997C14.9815 0.199997 15.219 0.299997 15.419 0.499997C15.619 0.699997 15.719 0.937497 15.719 1.2125C15.719 1.4875 15.619 1.725 15.419 1.925L6.244 11.1C6.044 11.3 5.81067 11.4 5.544 11.4C5.27733 11.4 5.044 11.3 4.844 11.1L0.568998 6.825C0.368998 6.625 0.273165 6.3875 0.281498 6.1125C0.289832 5.8375 0.393998 5.6 0.593998 5.4C0.793998 5.2 1.0315 5.1 1.3065 5.1C1.5815 5.1 1.819 5.2 2.019 5.4L5.544 8.95ZM1.994 15.8C1.71066 15.8 1.47317 15.7042 1.2815 15.5125C1.08983 15.3208 0.993998 15.0833 0.993998 14.8C0.993998 14.5167 1.08983 14.2792 1.2815 14.0875C1.47317 13.8958 1.71066 13.8 1.994 13.8H13.994C14.2773 13.8 14.5148 13.8958 14.7065 14.0875C14.8982 14.2792 14.994 14.5167 14.994 14.8C14.994 15.0833 14.8982 15.3208 14.7065 15.5125C14.5148 15.7042 14.2773 15.8 13.994 15.8H1.994Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,upload_file:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
   <path d="M7 12.825V16C7 16.2833 7.09583 16.5208 7.2875 16.7125C7.47917 16.9042 7.71667 17 8 17C8.28333 17 8.52083 16.9042 8.7125 16.7125C8.90417 16.5208 9 16.2833 9 16V12.825L9.9 13.725C10 13.825 10.1125 13.9 10.2375 13.95C10.3625 14 10.4875 14.0208 10.6125 14.0125C10.7375 14.0042 10.8583 13.975 10.975 13.925C11.0917 13.875 11.2 13.8 11.3 13.7C11.4833 13.5 11.5792 13.2667 11.5875 13C11.5958 12.7333 11.5 12.5 11.3 12.3L8.7 9.7C8.6 9.6 8.49167 9.52917 8.375 9.4875C8.25833 9.44583 8.13333 9.425 8 9.425C7.86667 9.425 7.74167 9.44583 7.625 9.4875C7.50833 9.52917 7.4 9.6 7.3 9.7L4.7 12.3C4.5 12.5 4.40417 12.7333 4.4125 13C4.42083 13.2667 4.525 13.5 4.725 13.7C4.925 13.8833 5.15833 13.9792 5.425 13.9875C5.69167 13.9958 5.925 13.9 6.125 13.7L7 12.825ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9.175C9.44167 0 9.69583 0.05 9.9375 0.15C10.1792 0.25 10.3917 0.391667 10.575 0.575L15.425 5.425C15.6083 5.60833 15.75 5.82083 15.85 6.0625C15.95 6.30417 16 6.55833 16 6.825V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 6V2H2V18H14V7H10C9.71667 7 9.47917 6.90417 9.2875 6.7125C9.09583 6.52083 9 6.28333 9 6Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,drive_folder_upload:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
   <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H7.175C7.44167 0 7.69583 0.05 7.9375 0.15C8.17917 0.25 8.39167 0.391667 8.575 0.575L10 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM2 14H18V4H9.175L7.175 2H2V14ZM10 13C10.2833 13 10.5208 12.9042 10.7125 12.7125C10.9042 12.5208 11 12.2833 11 12V8.8L11.9 9.7C12.0833 9.88333 12.3167 9.975 12.6 9.975C12.8833 9.975 13.1167 9.88333 13.3 9.7C13.4833 9.51667 13.575 9.28333 13.575 9C13.575 8.71667 13.4833 8.48333 13.3 8.3L10.7 5.7C10.5 5.5 10.2667 5.4 10 5.4C9.73333 5.4 9.5 5.5 9.3 5.7L6.7 8.3C6.51667 8.48333 6.425 8.71667 6.425 9C6.425 9.28333 6.51667 9.51667 6.7 9.7C6.88333 9.88333 7.11667 9.975 7.4 9.975C7.68333 9.975 7.91667 9.88333 8.1 9.7L9 8.8V12C9 12.2833 9.09583 12.5208 9.2875 12.7125C9.47917 12.9042 9.71667 13 10 13Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,more_vert:`<svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16" fill="none">
   <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14C0 13.45 0.195833 12.9792 0.5875 12.5875C0.979167 12.1958 1.45 12 2 12C2.55 12 3.02083 12.1958 3.4125 12.5875C3.80417 12.9792 4 13.45 4 14C4 14.55 3.80417 15.0208 3.4125 15.4125C3.02083 15.8042 2.55 16 2 16ZM2 10C1.45 10 0.979167 9.80417 0.5875 9.4125C0.195833 9.02083 0 8.55 0 8C0 7.45 0.195833 6.97917 0.5875 6.5875C0.979167 6.19583 1.45 6 2 6C2.55 6 3.02083 6.19583 3.4125 6.5875C3.80417 6.97917 4 7.45 4 8C4 8.55 3.80417 9.02083 3.4125 9.4125C3.02083 9.80417 2.55 10 2 10ZM2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,chevron_back:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
   <path d="M3.6125 8.9935L8.5125 13.8935C8.7125 14.0935 8.80834 14.3268 8.8 14.5935C8.79167 14.8602 8.6875 15.0935 8.4875 15.2935C8.2875 15.4768 8.05417 15.5727 7.7875 15.581C7.52083 15.5893 7.2875 15.4935 7.0875 15.2935L0.487502 8.6935C0.387502 8.5935 0.316668 8.48517 0.275002 8.3685C0.233335 8.25184 0.212502 8.12684 0.212502 7.9935C0.212502 7.86017 0.233335 7.73517 0.275002 7.6185C0.316668 7.50184 0.387502 7.3935 0.487502 7.2935L7.0875 0.693503C7.27083 0.510169 7.5 0.418503 7.775 0.418503C8.05 0.418503 8.2875 0.510169 8.4875 0.693503C8.6875 0.893503 8.7875 1.131 8.7875 1.406C8.7875 1.681 8.6875 1.9185 8.4875 2.1185L3.6125 6.9935H14.7875C15.0708 6.9935 15.3083 7.08934 15.5 7.281C15.6917 7.47267 15.7875 7.71017 15.7875 7.9935C15.7875 8.27684 15.6917 8.51434 15.5 8.706C15.3083 8.89767 15.0708 8.9935 14.7875 8.9935H3.6125Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,chevron_left:`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
   <path d="M3.49999 10.0065L10.85 17.3565C11.1 17.6065 11.2208 17.8981 11.2125 18.2315C11.2042 18.5648 11.075 18.8565 10.825 19.1065C10.575 19.3565 10.2833 19.4815 9.94999 19.4815C9.61666 19.4815 9.32499 19.3565 9.07499 19.1065L1.37499 11.4315C1.17499 11.2315 1.02499 11.0065 0.924994 10.7565C0.824994 10.5065 0.774994 10.2565 0.774994 10.0065C0.774994 9.75645 0.824994 9.50645 0.924994 9.25645C1.02499 9.00645 1.17499 8.78145 1.37499 8.58145L9.07499 0.88145C9.32499 0.63145 9.62083 0.510617 9.96249 0.51895C10.3042 0.527284 10.6 0.65645 10.85 0.90645C11.1 1.15645 11.225 1.44812 11.225 1.78145C11.225 2.11478 11.1 2.40645 10.85 2.65645L3.49999 10.0065Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,chevron_right:`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
   <path d="M8.50001 9.99355L1.15001 2.64355C0.900008 2.39355 0.779174 2.10188 0.787508 1.76855C0.795841 1.43521 0.925008 1.14355 1.17501 0.893548C1.42501 0.643548 1.71667 0.518548 2.05001 0.518548C2.38334 0.518548 2.67501 0.643548 2.92501 0.893548L10.625 8.56855C10.825 8.76855 10.975 8.99355 11.075 9.24355C11.175 9.49355 11.225 9.74355 11.225 9.99355C11.225 10.2435 11.175 10.4935 11.075 10.7435C10.975 10.9935 10.825 11.2185 10.625 11.4185L2.92501 19.1185C2.67501 19.3685 2.37917 19.4894 2.03751 19.481C1.69584 19.4727 1.40001 19.3435 1.15001 19.0935C0.900006 18.8435 0.775006 18.5519 0.775006 18.2185C0.775006 17.8852 0.900006 17.5935 1.15001 17.3435L8.50001 9.99355Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,chevron_down:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
   <path d="M10.0065 8.5L17.3565 1.15C17.6065 0.899999 17.8981 0.779165 18.2315 0.787499C18.5648 0.795832 18.8565 0.924999 19.1065 1.175C19.3565 1.425 19.4815 1.71667 19.4815 2.05C19.4815 2.38333 19.3565 2.675 19.1065 2.925L11.4315 10.625C11.2315 10.825 11.0065 10.975 10.7565 11.075C10.5065 11.175 10.2565 11.225 10.0065 11.225C9.75646 11.225 9.50646 11.175 9.25646 11.075C9.00646 10.975 8.78146 10.825 8.58146 10.625L0.881458 2.925C0.631458 2.675 0.510625 2.37916 0.518958 2.0375C0.527291 1.69583 0.656458 1.4 0.906458 1.15C1.15646 0.899999 1.44812 0.774999 1.78146 0.774999C2.11479 0.774999 2.40646 0.899999 2.65646 1.15L10.0065 8.5Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,chevron_up:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
   <path d="M9.99354 3.5L2.64354 10.85C2.39354 11.1 2.10188 11.2208 1.76854 11.2125C1.43521 11.2042 1.14354 11.075 0.893541 10.825C0.643541 10.575 0.518541 10.2833 0.518541 9.95C0.518541 9.61667 0.643541 9.325 0.893541 9.075L8.56854 1.375C8.76854 1.175 8.99354 1.025 9.24354 0.925002C9.49354 0.825002 9.74354 0.775002 9.99354 0.775002C10.2435 0.775002 10.4935 0.825002 10.7435 0.925002C10.9935 1.025 11.2185 1.175 11.4185 1.375L19.1185 9.075C19.3685 9.325 19.4894 9.62084 19.481 9.9625C19.4727 10.3042 19.3435 10.6 19.0935 10.85C18.8435 11.1 18.5519 11.225 18.2185 11.225C17.8852 11.225 17.5935 11.1 17.3435 10.85L9.99354 3.5Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
   <path d="M5.5565 9.1625L14.0315 0.687501C14.2315 0.487501 14.4648 0.387501 14.7315 0.387501C14.9982 0.387501 15.2315 0.487501 15.4315 0.687501C15.6315 0.887501 15.7315 1.125 15.7315 1.4C15.7315 1.675 15.6315 1.9125 15.4315 2.1125L6.2565 11.3125C6.0565 11.5125 5.82317 11.6125 5.5565 11.6125C5.28983 11.6125 5.0565 11.5125 4.8565 11.3125L0.556499 7.0125C0.356499 6.8125 0.260666 6.575 0.268999 6.3C0.277333 6.025 0.381499 5.7875 0.581499 5.5875C0.781499 5.3875 1.019 5.2875 1.294 5.2875C1.569 5.2875 1.8065 5.3875 2.0065 5.5875L5.5565 9.1625Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,calendar_month:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
   <path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V1C3 0.716667 3.09583 0.479167 3.2875 0.2875C3.47917 0.0958333 3.71667 0 4 0C4.28333 0 4.52083 0.0958333 4.7125 0.2875C4.90417 0.479167 5 0.716667 5 1V2H13V1C13 0.716667 13.0958 0.479167 13.2875 0.2875C13.4792 0.0958333 13.7167 0 14 0C14.2833 0 14.5208 0.0958333 14.7125 0.2875C14.9042 0.479167 15 0.716667 15 1V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6ZM9 12C8.71667 12 8.47917 11.9042 8.2875 11.7125C8.09583 11.5208 8 11.2833 8 11C8 10.7167 8.09583 10.4792 8.2875 10.2875C8.47917 10.0958 8.71667 10 9 10C9.28333 10 9.52083 10.0958 9.7125 10.2875C9.90417 10.4792 10 10.7167 10 11C10 11.2833 9.90417 11.5208 9.7125 11.7125C9.52083 11.9042 9.28333 12 9 12ZM5 12C4.71667 12 4.47917 11.9042 4.2875 11.7125C4.09583 11.5208 4 11.2833 4 11C4 10.7167 4.09583 10.4792 4.2875 10.2875C4.47917 10.0958 4.71667 10 5 10C5.28333 10 5.52083 10.0958 5.7125 10.2875C5.90417 10.4792 6 10.7167 6 11C6 11.2833 5.90417 11.5208 5.7125 11.7125C5.52083 11.9042 5.28333 12 5 12ZM13 12C12.7167 12 12.4792 11.9042 12.2875 11.7125C12.0958 11.5208 12 11.2833 12 11C12 10.7167 12.0958 10.4792 12.2875 10.2875C12.4792 10.0958 12.7167 10 13 10C13.2833 10 13.5208 10.0958 13.7125 10.2875C13.9042 10.4792 14 10.7167 14 11C14 11.2833 13.9042 11.5208 13.7125 11.7125C13.5208 11.9042 13.2833 12 13 12ZM9 16C8.71667 16 8.47917 15.9042 8.2875 15.7125C8.09583 15.5208 8 15.2833 8 15C8 14.7167 8.09583 14.4792 8.2875 14.2875C8.47917 14.0958 8.71667 14 9 14C9.28333 14 9.52083 14.0958 9.7125 14.2875C9.90417 14.4792 10 14.7167 10 15C10 15.2833 9.90417 15.5208 9.7125 15.7125C9.52083 15.9042 9.28333 16 9 16ZM5 16C4.71667 16 4.47917 15.9042 4.2875 15.7125C4.09583 15.5208 4 15.2833 4 15C4 14.7167 4.09583 14.4792 4.2875 14.2875C4.47917 14.0958 4.71667 14 5 14C5.28333 14 5.52083 14.0958 5.7125 14.2875C5.90417 14.4792 6 14.7167 6 15C6 15.2833 5.90417 15.5208 5.7125 15.7125C5.52083 15.9042 5.28333 16 5 16ZM13 16C12.7167 16 12.4792 15.9042 12.2875 15.7125C12.0958 15.5208 12 15.2833 12 15C12 14.7167 12.0958 14.4792 12.2875 14.2875C12.4792 14.0958 12.7167 14 13 14C13.2833 14 13.5208 14.0958 13.7125 14.2875C13.9042 14.4792 14 14.7167 14 15C14 15.2833 13.9042 15.5208 13.7125 15.7125C13.5208 15.9042 13.2833 16 13 16Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,check_circle:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,cancel:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M10 11.4L12.9 14.3C13.0833 14.4833 13.3167 14.575 13.6 14.575C13.8833 14.575 14.1167 14.4833 14.3 14.3C14.4833 14.1167 14.575 13.8833 14.575 13.6C14.575 13.3167 14.4833 13.0833 14.3 12.9L11.4 10L14.3 7.1C14.4833 6.91667 14.575 6.68333 14.575 6.4C14.575 6.11667 14.4833 5.88333 14.3 5.7C14.1167 5.51667 13.8833 5.425 13.6 5.425C13.3167 5.425 13.0833 5.51667 12.9 5.7L10 8.6L7.1 5.7C6.91667 5.51667 6.68333 5.425 6.4 5.425C6.11667 5.425 5.88333 5.51667 5.7 5.7C5.51667 5.88333 5.425 6.11667 5.425 6.4C5.425 6.68333 5.51667 6.91667 5.7 7.1L8.6 10L5.7 12.9C5.51667 13.0833 5.425 13.3167 5.425 13.6C5.425 13.8833 5.51667 14.1167 5.7 14.3C5.88333 14.4833 6.11667 14.575 6.4 14.575C6.68333 14.575 6.91667 14.4833 7.1 14.3L10 11.4ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,cancel_filled:`<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
   <path d="M10.9242 12.3032L13.8242 15.2032C14.0075 15.3866 14.2408 15.4782 14.5242 15.4782C14.8075 15.4782 15.0408 15.3866 15.2242 15.2032C15.4075 15.0199 15.4992 14.7866 15.4992 14.5032C15.4992 14.2199 15.4075 13.9866 15.2242 13.8032L12.3242 10.9032L15.2242 8.00324C15.4075 7.81991 15.4992 7.58658 15.4992 7.30324C15.4992 7.01991 15.4075 6.78658 15.2242 6.60324C15.0408 6.41991 14.8075 6.32824 14.5242 6.32824C14.2408 6.32824 14.0075 6.41991 13.8242 6.60324L10.9242 9.50324L8.02416 6.60324C7.84083 6.41991 7.6075 6.32824 7.32416 6.32824C7.04083 6.32824 6.8075 6.41991 6.62416 6.60324C6.44083 6.78658 6.34916 7.01991 6.34916 7.30324C6.34916 7.58658 6.44083 7.81991 6.62416 8.00324L9.52416 10.9032L6.62416 13.8032C6.44083 13.9866 6.34916 14.2199 6.34916 14.5032C6.34916 14.7866 6.44083 15.0199 6.62416 15.2032C6.8075 15.3866 7.04083 15.4782 7.32416 15.4782C7.6075 15.4782 7.84083 15.3866 8.02416 15.2032L10.9242 12.3032ZM10.9242 20.9032C9.54083 20.9032 8.24083 20.6407 7.02416 20.1157C5.8075 19.5907 4.74916 18.8782 3.84916 17.9782C2.94916 17.0782 2.23666 16.0199 1.71166 14.8032C1.18666 13.5866 0.924164 12.2866 0.924164 10.9032C0.924164 9.51991 1.18666 8.21991 1.71166 7.00324C2.23666 5.78658 2.94916 4.72824 3.84916 3.82824C4.74916 2.92824 5.8075 2.21574 7.02416 1.69074C8.24083 1.16574 9.54083 0.903244 10.9242 0.903244C12.3075 0.903244 13.6075 1.16574 14.8242 1.69074C16.0408 2.21574 17.0992 2.92824 17.9992 3.82824C18.8992 4.72824 19.6117 5.78658 20.1367 7.00324C20.6617 8.21991 20.9242 9.51991 20.9242 10.9032C20.9242 12.2866 20.6617 13.5866 20.1367 14.8032C19.6117 16.0199 18.8992 17.0782 17.9992 17.9782C17.0992 18.8782 16.0408 19.5907 14.8242 20.1157C13.6075 20.6407 12.3075 20.9032 10.9242 20.9032Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,close:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
   <path d="M7 8.4L2.1 13.3C1.91667 13.4833 1.68334 13.575 1.4 13.575C1.11667 13.575 0.883336 13.4833 0.700003 13.3C0.51667 13.1167 0.425003 12.8833 0.425003 12.6C0.425003 12.3167 0.51667 12.0833 0.700003 11.9L5.6 7L0.700003 2.1C0.51667 1.91667 0.425003 1.68334 0.425003 1.4C0.425003 1.11667 0.51667 0.883336 0.700003 0.700003C0.883336 0.51667 1.11667 0.425003 1.4 0.425003C1.68334 0.425003 1.91667 0.51667 2.1 0.700003L7 5.6L11.9 0.700003C12.0833 0.51667 12.3167 0.425003 12.6 0.425003C12.8833 0.425003 13.1167 0.51667 13.3 0.700003C13.4833 0.883336 13.575 1.11667 13.575 1.4C13.575 1.68334 13.4833 1.91667 13.3 2.1L8.4 7L13.3 11.9C13.4833 12.0833 13.575 12.3167 13.575 12.6C13.575 12.8833 13.4833 13.1167 13.3 13.3C13.1167 13.4833 12.8833 13.575 12.6 13.575C12.3167 13.575 12.0833 13.4833 11.9 13.3L7 8.4Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,language:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M10 20C8.63333 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3667 0 10C0 8.61667 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.63333 0 10 0C11.3833 0 12.6792 0.2625 13.8875 0.7875C15.0958 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90417 19.2125 6.1125C19.7375 7.32083 20 8.61667 20 10C20 11.3667 19.7375 12.6583 19.2125 13.875C18.6875 15.0917 17.9708 16.1542 17.0625 17.0625C16.1542 17.9708 15.0958 18.6875 13.8875 19.2125C12.6792 19.7375 11.3833 20 10 20ZM10 17.95C10.4333 17.35 10.8083 16.725 11.125 16.075C11.4417 15.425 11.7 14.7333 11.9 14H8.1C8.3 14.7333 8.55833 15.425 8.875 16.075C9.19167 16.725 9.56667 17.35 10 17.95ZM7.4 17.55C7.1 17 6.8375 16.4292 6.6125 15.8375C6.3875 15.2458 6.2 14.6333 6.05 14H3.1C3.58333 14.8333 4.1875 15.5583 4.9125 16.175C5.6375 16.7917 6.46667 17.25 7.4 17.55ZM12.6 17.55C13.5333 17.25 14.3625 16.7917 15.0875 16.175C15.8125 15.5583 16.4167 14.8333 16.9 14H13.95C13.8 14.6333 13.6125 15.2458 13.3875 15.8375C13.1625 16.4292 12.9 17 12.6 17.55ZM2.25 12H5.65C5.6 11.6667 5.5625 11.3375 5.5375 11.0125C5.5125 10.6875 5.5 10.35 5.5 10C5.5 9.65 5.5125 9.3125 5.5375 8.9875C5.5625 8.6625 5.6 8.33333 5.65 8H2.25C2.16667 8.33333 2.10417 8.6625 2.0625 8.9875C2.02083 9.3125 2 9.65 2 10C2 10.35 2.02083 10.6875 2.0625 11.0125C2.10417 11.3375 2.16667 11.6667 2.25 12ZM7.65 12H12.35C12.4 11.6667 12.4375 11.3375 12.4625 11.0125C12.4875 10.6875 12.5 10.35 12.5 10C12.5 9.65 12.4875 9.3125 12.4625 8.9875C12.4375 8.6625 12.4 8.33333 12.35 8H7.65C7.6 8.33333 7.5625 8.6625 7.5375 8.9875C7.5125 9.3125 7.5 9.65 7.5 10C7.5 10.35 7.5125 10.6875 7.5375 11.0125C7.5625 11.3375 7.6 11.6667 7.65 12ZM14.35 12H17.75C17.8333 11.6667 17.8958 11.3375 17.9375 11.0125C17.9792 10.6875 18 10.35 18 10C18 9.65 17.9792 9.3125 17.9375 8.9875C17.8958 8.6625 17.8333 8.33333 17.75 8H14.35C14.4 8.33333 14.4375 8.6625 14.4625 8.9875C14.4875 9.3125 14.5 9.65 14.5 10C14.5 10.35 14.4875 10.6875 14.4625 11.0125C14.4375 11.3375 14.4 11.6667 14.35 12ZM13.95 6H16.9C16.4167 5.16667 15.8125 4.44167 15.0875 3.825C14.3625 3.20833 13.5333 2.75 12.6 2.45C12.9 3 13.1625 3.57083 13.3875 4.1625C13.6125 4.75417 13.8 5.36667 13.95 6ZM8.1 6H11.9C11.7 5.26667 11.4417 4.575 11.125 3.925C10.8083 3.275 10.4333 2.65 10 2.05C9.56667 2.65 9.19167 3.275 8.875 3.925C8.55833 4.575 8.3 5.26667 8.1 6ZM3.1 6H6.05C6.2 5.36667 6.3875 4.75417 6.6125 4.1625C6.8375 3.57083 7.1 3 7.4 2.45C6.46667 2.75 5.6375 3.20833 4.9125 3.825C4.1875 4.44167 3.58333 5.16667 3.1 6Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,search:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
   <path d="M6.71249 13.2125C4.89583 13.2125 3.35833 12.5833 2.09999 11.325C0.841661 10.0667 0.212494 8.52917 0.212494 6.7125C0.212494 4.89583 0.841661 3.35834 2.09999 2.1C3.35833 0.841668 4.89583 0.212502 6.71249 0.212502C8.52916 0.212502 10.0667 0.841668 11.325 2.1C12.5833 3.35834 13.2125 4.89583 13.2125 6.7125C13.2125 7.44584 13.0958 8.1375 12.8625 8.7875C12.6292 9.4375 12.3125 10.0125 11.9125 10.5125L17.5125 16.1125C17.6958 16.2958 17.7875 16.5292 17.7875 16.8125C17.7875 17.0958 17.6958 17.3292 17.5125 17.5125C17.3292 17.6958 17.0958 17.7875 16.8125 17.7875C16.5292 17.7875 16.2958 17.6958 16.1125 17.5125L10.5125 11.9125C10.0125 12.3125 9.43749 12.6292 8.78749 12.8625C8.13749 13.0958 7.44583 13.2125 6.71249 13.2125ZM6.71249 11.2125C7.96249 11.2125 9.02499 10.775 9.89999 9.9C10.775 9.025 11.2125 7.9625 11.2125 6.7125C11.2125 5.4625 10.775 4.4 9.89999 3.525C9.02499 2.65 7.96249 2.2125 6.71249 2.2125C5.46249 2.2125 4.39999 2.65 3.52499 3.525C2.64999 4.4 2.21249 5.4625 2.21249 6.7125C2.21249 7.9625 2.64999 9.025 3.52499 9.9C4.39999 10.775 5.46249 11.2125 6.71249 11.2125Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,menu:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
   <path d="M1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10H17C17.2833 10 17.5208 10.0958 17.7125 10.2875C17.9042 10.4792 18 10.7167 18 11C18 11.2833 17.9042 11.5208 17.7125 11.7125C17.5208 11.9042 17.2833 12 17 12H1ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H17C17.2833 5 17.5208 5.09583 17.7125 5.2875C17.9042 5.47917 18 5.71667 18 6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7H1ZM1 2C0.716667 2 0.479167 1.90417 0.2875 1.7125C0.0958333 1.52083 0 1.28333 0 1C0 0.716667 0.0958333 0.479167 0.2875 0.2875C0.479167 0.0958333 0.716667 0 1 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1C18 1.28333 17.9042 1.52083 17.7125 1.7125C17.5208 1.90417 17.2833 2 17 2H1Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,visibility:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
   <path d="M11 12.5C12.25 12.5 13.3125 12.0625 14.1875 11.1875C15.0625 10.3125 15.5 9.25 15.5 8C15.5 6.75 15.0625 5.6875 14.1875 4.8125C13.3125 3.9375 12.25 3.5 11 3.5C9.75 3.5 8.6875 3.9375 7.8125 4.8125C6.9375 5.6875 6.5 6.75 6.5 8C6.5 9.25 6.9375 10.3125 7.8125 11.1875C8.6875 12.0625 9.75 12.5 11 12.5ZM11 10.7C10.25 10.7 9.6125 10.4375 9.0875 9.9125C8.5625 9.3875 8.3 8.75 8.3 8C8.3 7.25 8.5625 6.6125 9.0875 6.0875C9.6125 5.5625 10.25 5.3 11 5.3C11.75 5.3 12.3875 5.5625 12.9125 6.0875C13.4375 6.6125 13.7 7.25 13.7 8C13.7 8.75 13.4375 9.3875 12.9125 9.9125C12.3875 10.4375 11.75 10.7 11 10.7ZM11 15.5C8.56667 15.5 6.35 14.8208 4.35 13.4625C2.35 12.1042 0.9 10.2833 0 8C0.9 5.71667 2.35 3.89583 4.35 2.5375C6.35 1.17917 8.56667 0.5 11 0.5C13.4333 0.5 15.65 1.17917 17.65 2.5375C19.65 3.89583 21.1 5.71667 22 8C21.1 10.2833 19.65 12.1042 17.65 13.4625C15.65 14.8208 13.4333 15.5 11 15.5ZM11 13.5C12.8833 13.5 14.6125 13.0042 16.1875 12.0125C17.7625 11.0208 18.9667 9.68333 19.8 8C18.9667 6.31667 17.7625 4.97917 16.1875 3.9875C14.6125 2.99583 12.8833 2.5 11 2.5C9.11667 2.5 7.3875 2.99583 5.8125 3.9875C4.2375 4.97917 3.03333 6.31667 2.2 8C3.03333 9.68333 4.2375 11.0208 5.8125 12.0125C7.3875 13.0042 9.11667 13.5 11 13.5Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,visibility_off:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
   <path d="M15.1 10.6L13.65 9.15C13.8 8.36667 13.575 7.63333 12.975 6.95C12.375 6.26667 11.6 6 10.65 6.15L9.2 4.7C9.48333 4.56667 9.77083 4.46667 10.0625 4.4C10.3542 4.33333 10.6667 4.3 11 4.3C12.25 4.3 13.3125 4.7375 14.1875 5.6125C15.0625 6.4875 15.5 7.55 15.5 8.8C15.5 9.13333 15.4667 9.44583 15.4 9.7375C15.3333 10.0292 15.2333 10.3167 15.1 10.6ZM18.3 13.75L16.85 12.35C17.4833 11.8667 18.0458 11.3375 18.5375 10.7625C19.0292 10.1875 19.45 9.53333 19.8 8.8C18.9667 7.11667 17.7708 5.77917 16.2125 4.7875C14.6542 3.79583 12.9167 3.3 11 3.3C10.5167 3.3 10.0417 3.33333 9.575 3.4C9.10833 3.46667 8.65 3.56667 8.2 3.7L6.65 2.15C7.33333 1.86667 8.03333 1.65417 8.75 1.5125C9.46667 1.37083 10.2167 1.3 11 1.3C13.5167 1.3 15.7583 1.99583 17.725 3.3875C19.6917 4.77917 21.1167 6.58333 22 8.8C21.6167 9.78333 21.1125 10.6958 20.4875 11.5375C19.8625 12.3792 19.1333 13.1167 18.3 13.75ZM18.8 19.9L14.6 15.75C14.0167 15.9333 13.4292 16.0708 12.8375 16.1625C12.2458 16.2542 11.6333 16.3 11 16.3C8.48333 16.3 6.24167 15.6042 4.275 14.2125C2.30833 12.8208 0.883333 11.0167 0 8.8C0.35 7.91667 0.791667 7.09583 1.325 6.3375C1.85833 5.57917 2.46667 4.9 3.15 4.3L0.4 1.5L1.8 0.0999985L20.2 18.5L18.8 19.9ZM4.55 5.7C4.06667 6.13333 3.625 6.60833 3.225 7.125C2.825 7.64167 2.48333 8.2 2.2 8.8C3.03333 10.4833 4.22917 11.8208 5.7875 12.8125C7.34583 13.8042 9.08333 14.3 11 14.3C11.3333 14.3 11.6583 14.2792 11.975 14.2375C12.2917 14.1958 12.6167 14.15 12.95 14.1L12.05 13.15C11.8667 13.2 11.6917 13.2375 11.525 13.2625C11.3583 13.2875 11.1833 13.3 11 13.3C9.75 13.3 8.6875 12.8625 7.8125 11.9875C6.9375 11.1125 6.5 10.05 6.5 8.8C6.5 8.61667 6.5125 8.44167 6.5375 8.275C6.5625 8.10833 6.6 7.93333 6.65 7.75L4.55 5.7Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,thumb_up:`<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
   <path d="M19 7.00001C19.5333 7.00001 20 7.20001 20.4 7.60001C20.8 8.00001 21 8.46668 21 9.00001V11C21 11.1167 20.9875 11.2417 20.9625 11.375C20.9375 11.5083 20.9 11.6333 20.85 11.75L17.85 18.8C17.7 19.1333 17.45 19.4167 17.1 19.65C16.75 19.8833 16.3833 20 16 20H8C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18V7.82501C6 7.55834 6.05417 7.30418 6.1625 7.06251C6.27083 6.82084 6.41667 6.60834 6.6 6.42501L12.025 1.02501C12.275 0.791677 12.5708 0.65001 12.9125 0.60001C13.2542 0.55001 13.5833 0.608344 13.9 0.77501C14.2167 0.941677 14.4458 1.17501 14.5875 1.47501C14.7292 1.77501 14.7583 2.08334 14.675 2.40001L13.55 7.00001H19ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V9.00001C0 8.45001 0.195833 7.97918 0.5875 7.58751C0.979167 7.19584 1.45 7.00001 2 7.00001C2.55 7.00001 3.02083 7.19584 3.4125 7.58751C3.80417 7.97918 4 8.45001 4 9.00001V18C4 18.55 3.80417 19.0208 3.4125 19.4125C3.02083 19.8042 2.55 20 2 20Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,thumb_down:`<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
   <path d="M2 13C1.46667 13 1 12.8 0.6 12.4C0.2 12 0 11.5333 0 11V9C0 8.88333 0.0125 8.75833 0.0375 8.625C0.0625 8.49167 0.1 8.36667 0.15 8.25L3.15 1.2C3.3 0.866667 3.55 0.583333 3.9 0.35C4.25 0.116667 4.61667 0 5 0H13C13.55 0 14.0208 0.195833 14.4125 0.5875C14.8042 0.979167 15 1.45 15 2V12.175C15 12.4417 14.9458 12.6958 14.8375 12.9375C14.7292 13.1792 14.5833 13.3917 14.4 13.575L8.975 18.975C8.725 19.2083 8.42917 19.35 8.0875 19.4C7.74583 19.45 7.41667 19.3917 7.1 19.225C6.78333 19.0583 6.55417 18.825 6.4125 18.525C6.27083 18.225 6.24167 17.9167 6.325 17.6L7.45 13H2ZM19 0C19.55 0 20.0208 0.195833 20.4125 0.5875C20.8042 0.979167 21 1.45 21 2V11C21 11.55 20.8042 12.0208 20.4125 12.4125C20.0208 12.8042 19.55 13 19 13C18.45 13 17.9792 12.8042 17.5875 12.4125C17.1958 12.0208 17 11.55 17 11V2C17 1.45 17.1958 0.979167 17.5875 0.5875C17.9792 0.195833 18.45 0 19 0Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,account_circle:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M3.85 15.1C4.7 14.45 5.65 13.9375 6.7 13.5625C7.75 13.1875 8.85 13 10 13C11.15 13 12.25 13.1875 13.3 13.5625C14.35 13.9375 15.3 14.45 16.15 15.1C16.7333 14.4167 17.1875 13.6417 17.5125 12.775C17.8375 11.9083 18 10.9833 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.9833 2.1625 11.9083 2.4875 12.775C2.8125 13.6417 3.26667 14.4167 3.85 15.1ZM10 11C9.01667 11 8.1875 10.6625 7.5125 9.9875C6.8375 9.3125 6.5 8.48333 6.5 7.5C6.5 6.51667 6.8375 5.6875 7.5125 5.0125C8.1875 4.3375 9.01667 4 10 4C10.9833 4 11.8125 4.3375 12.4875 5.0125C13.1625 5.6875 13.5 6.51667 13.5 7.5C13.5 8.48333 13.1625 9.3125 12.4875 9.9875C11.8125 10.6625 10.9833 11 10 11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,help:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M9.95 16C10.3 16 10.5958 15.8792 10.8375 15.6375C11.0792 15.3958 11.2 15.1 11.2 14.75C11.2 14.4 11.0792 14.1042 10.8375 13.8625C10.5958 13.6208 10.3 13.5 9.95 13.5C9.6 13.5 9.30417 13.6208 9.0625 13.8625C8.82083 14.1042 8.7 14.4 8.7 14.75C8.7 15.1 8.82083 15.3958 9.0625 15.6375C9.30417 15.8792 9.6 16 9.95 16ZM9.05 12.15H10.9C10.9 11.6 10.9625 11.1667 11.0875 10.85C11.2125 10.5333 11.5667 10.1 12.15 9.55C12.5833 9.11667 12.925 8.70417 13.175 8.3125C13.425 7.92083 13.55 7.45 13.55 6.9C13.55 5.96667 13.2083 5.25 12.525 4.75C11.8417 4.25 11.0333 4 10.1 4C9.15 4 8.37917 4.25 7.7875 4.75C7.19583 5.25 6.78333 5.85 6.55 6.55L8.2 7.2C8.28333 6.9 8.47083 6.575 8.7625 6.225C9.05417 5.875 9.5 5.7 10.1 5.7C10.6333 5.7 11.0333 5.84583 11.3 6.1375C11.5667 6.42917 11.7 6.75 11.7 7.1C11.7 7.43333 11.6 7.74583 11.4 8.0375C11.2 8.32917 10.95 8.6 10.65 8.85C9.91667 9.5 9.46667 9.99167 9.3 10.325C9.13333 10.6583 9.05 11.2667 9.05 12.15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,share:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
   <path d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.9 12.025 16.6667 12.075 16.3L5.05 12.2C4.78333 12.45 4.475 12.6458 4.125 12.7875C3.775 12.9292 3.4 13 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.4 7 3.775 7.07083 4.125 7.2125C4.475 7.35417 4.78333 7.55 5.05 7.8L12.075 3.7C12.0417 3.58333 12.0208 3.47083 12.0125 3.3625C12.0042 3.25417 12 3.13333 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6 6 14.225 5.92917 13.875 5.7875C13.525 5.64583 13.2167 5.45 12.95 5.2L5.925 9.3C5.95833 9.41667 5.97917 9.52917 5.9875 9.6375C5.99583 9.74583 6 9.86667 6 10C6 10.1333 5.99583 10.2542 5.9875 10.3625C5.97917 10.4708 5.95833 10.5833 5.925 10.7L12.95 14.8C13.2167 14.55 13.525 14.3542 13.875 14.2125C14.225 14.0708 14.6 14 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20ZM15 18C15.2833 18 15.5208 17.9042 15.7125 17.7125C15.9042 17.5208 16 17.2833 16 17C16 16.7167 15.9042 16.4792 15.7125 16.2875C15.5208 16.0958 15.2833 16 15 16C14.7167 16 14.4792 16.0958 14.2875 16.2875C14.0958 16.4792 14 16.7167 14 17C14 17.2833 14.0958 17.5208 14.2875 17.7125C14.4792 17.9042 14.7167 18 15 18ZM3 11C3.28333 11 3.52083 10.9042 3.7125 10.7125C3.90417 10.5208 4 10.2833 4 10C4 9.71667 3.90417 9.47917 3.7125 9.2875C3.52083 9.09583 3.28333 9 3 9C2.71667 9 2.47917 9.09583 2.2875 9.2875C2.09583 9.47917 2 9.71667 2 10C2 10.2833 2.09583 10.5208 2.2875 10.7125C2.47917 10.9042 2.71667 11 3 11ZM15 4C15.2833 4 15.5208 3.90417 15.7125 3.7125C15.9042 3.52083 16 3.28333 16 3C16 2.71667 15.9042 2.47917 15.7125 2.2875C15.5208 2.09583 15.2833 2 15 2C14.7167 2 14.4792 2.09583 14.2875 2.2875C14.0958 2.47917 14 2.71667 14 3C14 3.28333 14.0958 3.52083 14.2875 3.7125C14.4792 3.90417 14.7167 4 15 4Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,info:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
 <path d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.5208 6.90417 10.7125 6.7125C10.9042 6.52083 11 6.28333 11 6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6C9 6.28333 9.09583 6.52083 9.2875 6.7125C9.47917 6.90417 9.71667 7 10 7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,warning:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
 <path d="M1.725 18C1.54167 18 1.375 17.9542 1.225 17.8625C1.075 17.7708 0.958337 17.65 0.875003 17.5C0.79167 17.35 0.745837 17.1875 0.737503 17.0125C0.72917 16.8375 0.775003 16.6667 0.875003 16.5L10.125 0.5C10.225 0.333333 10.3542 0.208333 10.5125 0.125C10.6708 0.0416667 10.8333 0 11 0C11.1667 0 11.3292 0.0416667 11.4875 0.125C11.6458 0.208333 11.775 0.333333 11.875 0.5L21.125 16.5C21.225 16.6667 21.2708 16.8375 21.2625 17.0125C21.2542 17.1875 21.2083 17.35 21.125 17.5C21.0417 17.65 20.925 17.7708 20.775 17.8625C20.625 17.9542 20.4583 18 20.275 18H1.725ZM3.45 16H18.55L11 3L3.45 16ZM11 15C11.2833 15 11.5208 14.9042 11.7125 14.7125C11.9042 14.5208 12 14.2833 12 14C12 13.7167 11.9042 13.4792 11.7125 13.2875C11.5208 13.0958 11.2833 13 11 13C10.7167 13 10.4792 13.0958 10.2875 13.2875C10.0958 13.4792 10 13.7167 10 14C10 14.2833 10.0958 14.5208 10.2875 14.7125C10.4792 14.9042 10.7167 15 11 15ZM11 12C11.2833 12 11.5208 11.9042 11.7125 11.7125C11.9042 11.5208 12 11.2833 12 11V8C12 7.71667 11.9042 7.47917 11.7125 7.2875C11.5208 7.09583 11.2833 7 11 7C10.7167 7 10.4792 7.09583 10.2875 7.2875C10.0958 7.47917 10 7.71667 10 8V11C10 11.2833 10.0958 11.5208 10.2875 11.7125C10.4792 11.9042 10.7167 12 11 12Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,error:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
 <path d="M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14C11 13.7167 10.9042 13.4792 10.7125 13.2875C10.5208 13.0958 10.2833 13 10 13C9.71667 13 9.47917 13.0958 9.2875 13.2875C9.09583 13.4792 9 13.7167 9 14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM9 11H11V5H9V11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,emergency:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
   <path d="M11 21.025C10.7333 21.025 10.4791 20.975 10.2375 20.875C9.99581 20.775 9.77498 20.6333 9.57498 20.45L1.54998 12.425C1.36664 12.225 1.22498 12.0041 1.12498 11.7625C1.02498 11.5208 0.974976 11.2666 0.974976 11C0.974976 10.7333 1.02498 10.475 1.12498 10.225C1.22498 9.97498 1.36664 9.75831 1.54998 9.57498L9.57498 1.54998C9.77498 1.34998 9.99581 1.20414 10.2375 1.11248C10.4791 1.02081 10.7333 0.974976 11 0.974976C11.2666 0.974976 11.525 1.02081 11.775 1.11248C12.025 1.20414 12.2416 1.34998 12.425 1.54998L20.45 9.57498C20.65 9.75831 20.7958 9.97498 20.8875 10.225C20.9791 10.475 21.025 10.7333 21.025 11C21.025 11.2666 20.9791 11.5208 20.8875 11.7625C20.7958 12.0041 20.65 12.225 20.45 12.425L12.425 20.45C12.2416 20.6333 12.025 20.775 11.775 20.875C11.525 20.975 11.2666 21.025 11 21.025ZM11 19.025L19.025 11L11 2.97498L2.97498 11L11 19.025ZM9.99998 12H12V5.99998H9.99998V12ZM11 15C11.2833 15 11.5208 14.9041 11.7125 14.7125C11.9041 14.5208 12 14.2833 12 14C12 13.7166 11.9041 13.4791 11.7125 13.2875C11.5208 13.0958 11.2833 13 11 13C10.7166 13 10.4791 13.0958 10.2875 13.2875C10.0958 13.4791 9.99998 13.7166 9.99998 14C9.99998 14.2833 10.0958 14.5208 10.2875 14.7125C10.4791 14.9041 10.7166 15 11 15Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_facebook:`<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
   <path d="M10.0367 0C4.49365 0 0 4.49365 0 10.0367C0 14.7436 3.24066 18.6932 7.61226 19.778V13.104H5.54269V10.0367H7.61226V8.7151C7.61226 5.29899 9.15832 3.7156 12.5122 3.7156C13.1481 3.7156 14.2453 3.84046 14.6942 3.96491V6.74509C14.4573 6.7202 14.0458 6.70775 13.5347 6.70775C11.8891 6.70775 11.2532 7.33123 11.2532 8.95196V10.0367H14.5316L13.9683 13.104H11.2532V20C16.223 19.3998 20.0739 15.1683 20.0739 10.0367C20.0735 4.49365 15.5798 0 10.0367 0Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_instagram:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M10.002 1.80113C12.6744 1.80113 12.9908 1.81285 14.0418 1.85974C15.0186 1.90272 15.546 2.06681 15.8976 2.20356C16.3626 2.38328 16.6986 2.60207 17.0463 2.9498C17.3979 3.30143 17.6128 3.63352 17.7925 4.09846C17.9293 4.45009 18.0934 4.98144 18.1364 5.95429C18.1832 7.00918 18.195 7.32565 18.195 9.99414C18.195 12.6665 18.1832 12.983 18.1364 14.034C18.0934 15.0107 17.9293 15.5382 17.7925 15.8898C17.6128 16.3548 17.394 16.6908 17.0463 17.0385C16.6947 17.3901 16.3626 17.605 15.8976 17.7847C15.546 17.9215 15.0147 18.0856 14.0418 18.1285C12.9869 18.1754 12.6704 18.1871 10.002 18.1871C7.32956 18.1871 7.01309 18.1754 5.9621 18.1285C4.98535 18.0856 4.4579 17.9215 4.10627 17.7847C3.64134 17.605 3.30533 17.3862 2.95761 17.0385C2.60598 16.6869 2.39109 16.3548 2.21137 15.8898C2.07462 15.5382 1.91053 15.0068 1.86755 14.034C1.82067 12.9791 1.80895 12.6626 1.80895 9.99414C1.80895 7.32174 1.82067 7.00527 1.86755 5.95429C1.91053 4.97753 2.07462 4.45009 2.21137 4.09846C2.39109 3.63352 2.60988 3.29752 2.95761 2.9498C3.30924 2.59816 3.64134 2.38328 4.10627 2.20356C4.4579 2.06681 4.98926 1.90272 5.9621 1.85974C7.01309 1.81285 7.32956 1.80113 10.002 1.80113ZM10.002 0C7.28658 0 6.94667 0.011721 5.88006 0.0586052C4.81735 0.105489 4.08674 0.277398 3.4538 0.52354C2.79351 0.781403 2.23481 1.12131 1.68002 1.68002C1.12131 2.23481 0.781403 2.79351 0.52354 3.44989C0.277398 4.08674 0.105489 4.81344 0.0586052 5.87615C0.011721 6.94667 0 7.28658 0 10.002C0 12.7173 0.011721 13.0572 0.0586052 14.1239C0.105489 15.1866 0.277398 15.9172 0.52354 16.5501C0.781403 17.2104 1.12131 17.7691 1.68002 18.3239C2.23481 18.8787 2.79351 19.2225 3.44989 19.4765C4.08674 19.7226 4.81344 19.8945 5.87615 19.9414C6.94276 19.9883 7.28267 20 9.99805 20C12.7134 20 13.0533 19.9883 14.1199 19.9414C15.1827 19.8945 15.9133 19.7226 16.5462 19.4765C17.2026 19.2225 17.7613 18.8787 18.3161 18.3239C18.8709 17.7691 19.2147 17.2104 19.4686 16.554C19.7148 15.9172 19.8867 15.1905 19.9336 14.1278C19.9805 13.0611 19.9922 12.7212 19.9922 10.0059C19.9922 7.29049 19.9805 6.95058 19.9336 5.88396C19.8867 4.82125 19.7148 4.09064 19.4686 3.45771C19.2225 2.79351 18.8826 2.23481 18.3239 1.68002C17.7691 1.12522 17.2104 0.781403 16.554 0.527447C15.9172 0.281305 15.1905 0.109396 14.1278 0.0625122C13.0572 0.011721 12.7173 0 10.002 0Z" fill="var(--nys-icon-color, currentcolor)"/>
   <path d="M10.002 4.86423C7.16546 4.86423 4.86423 7.16546 4.86423 10.002C4.86423 12.8384 7.16546 15.1397 10.002 15.1397C12.8384 15.1397 15.1397 12.8384 15.1397 10.002C15.1397 7.16546 12.8384 4.86423 10.002 4.86423ZM10.002 13.3346C8.16175 13.3346 6.66927 11.8422 6.66927 10.002C6.66927 8.16175 8.16175 6.66927 10.002 6.66927C11.8422 6.66927 13.3346 8.16175 13.3346 10.002C13.3346 11.8422 11.8422 13.3346 10.002 13.3346Z" fill="var(--nys-icon-color, currentcolor)"/>
   <path d="M16.5423 4.66103C16.5423 5.32522 16.0031 5.86048 15.3428 5.86048C14.6786 5.86048 14.1434 5.32131 14.1434 4.66103C14.1434 3.99683 14.6826 3.46157 15.3428 3.46157C16.0031 3.46157 16.5423 4.00074 16.5423 4.66103Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_x:`<svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
   <path d="M17.4256 0H20.8185L13.4062 8.47179L22.1262 20H15.2985L9.95077 13.0082L3.83179 20H0.436923L8.36513 10.9385L0 0H7.00103L11.8349 6.39077L17.4256 0ZM16.2349 17.9692H18.1149L5.97949 1.9241H3.96205L16.2349 17.9692Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_youtube:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
   <path d="M19.8008 3.03516C19.8008 3.03516 19.6055 1.65625 19.0039 1.05078C18.2422 0.253906 17.3906 0.25 17 0.203125C14.2031 -1.11759e-07 10.0039 0 10.0039 0H9.99609C9.99609 0 5.79688 -1.11759e-07 3 0.203125C2.60938 0.25 1.75781 0.253906 0.996094 1.05078C0.394531 1.65625 0.203125 3.03516 0.203125 3.03516C0.203125 3.03516 0 4.65625 0 6.27344V7.78906C0 9.40625 0.199219 11.0273 0.199219 11.0273C0.199219 11.0273 0.394531 12.4062 0.992187 13.0117C1.75391 13.8086 2.75391 13.7812 3.19922 13.8672C4.80078 14.0195 10 14.0664 10 14.0664C10 14.0664 14.2031 14.0586 17 13.8594C17.3906 13.8125 18.2422 13.8086 19.0039 13.0117C19.6055 12.4062 19.8008 11.0273 19.8008 11.0273C19.8008 11.0273 20 9.41016 20 7.78906V6.27344C20 4.65625 19.8008 3.03516 19.8008 3.03516ZM7.93359 9.62891V4.00781L13.3359 6.82812L7.93359 9.62891Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_flickr:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M19.0909 0H0.909091C0.407014 0 0 0.407014 0 0.909091V19.0909C0 19.593 0.407014 20 0.909091 20H19.0909C19.593 20 20 19.593 20 19.0909V0.909091C20 0.407014 19.593 0 19.0909 0Z" fill="var(--nys-icon-color, currentcolor)"/>
   <path d="M6.36364 12.7273C7.86987 12.7273 9.09091 11.5062 9.09091 10C9.09091 8.49377 7.86987 7.27273 6.36364 7.27273C4.85741 7.27273 3.63636 8.49377 3.63636 10C3.63636 11.5062 4.85741 12.7273 6.36364 12.7273Z" fill="white"/>
   <path d="M13.6364 12.7273C15.1426 12.7273 16.3636 11.5062 16.3636 10C16.3636 8.49377 15.1426 7.27273 13.6364 7.27273C12.1301 7.27273 10.9091 8.49377 10.9091 10C10.9091 11.5062 12.1301 12.7273 13.6364 12.7273Z" fill="white"/>
 </svg>`,social_linkedin:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
 <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_soundcloud:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="9" viewBox="0 0 20 9" fill="none">
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
 </svg>`,social_tumblr:`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
   <path d="M8.16675 20C5.16675 20 2.91675 18.4583 2.91675 14.75V8.83333H0.166748V5.625C3.16675 4.83333 4.41675 2.25 4.58342 0H7.70842V5.08333H11.3334V8.83333H7.70842V14C7.70842 15.5417 8.50008 16.0833 9.75008 16.0833H11.5001V20H8.16675Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_snapchat:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
   <path d="M17.581 13.7331C14.4839 12.2334 13.9903 9.91793 13.9683 9.74618C13.9417 9.53815 13.9116 9.37458 14.141 9.16297C14.3623 8.95851 15.3439 8.35076 15.6162 8.16061C16.0664 7.84574 16.2647 7.53139 16.1185 7.14496C16.0163 6.87763 15.7675 6.77694 15.5053 6.77694C15.4227 6.77719 15.3402 6.78645 15.2596 6.80454C14.7649 6.91188 14.2846 7.15979 14.0066 7.22675C13.9732 7.23536 13.9389 7.23999 13.9044 7.24055C13.7562 7.24055 13.7 7.17461 13.7143 6.99622C13.7491 6.45543 13.8226 5.39991 13.7373 4.41391C13.6203 3.05733 13.1829 2.38517 12.6642 1.79071C12.4133 1.50242 11.2483 0.263916 8.99989 0.263916C6.75152 0.263916 5.58799 1.50242 5.33862 1.78713C4.81843 2.38159 4.38153 3.05375 4.26554 4.41033C4.1802 5.39633 4.25685 6.45134 4.28853 6.99264C4.29875 7.16234 4.24663 7.23697 4.09844 7.23697C4.06395 7.23638 4.02965 7.23175 3.99624 7.22317C3.71877 7.15621 3.23844 6.9083 2.7438 6.80096C2.66311 6.78287 2.5807 6.77361 2.49801 6.77336C2.23485 6.77336 1.98702 6.87559 1.88482 7.14139C1.73867 7.52781 1.93592 7.84217 2.38764 8.15703C2.66 8.34718 3.64161 8.95442 3.86287 9.15939C4.0918 9.371 4.06216 9.53457 4.03559 9.74261C4.01362 9.91691 3.51949 12.2324 0.422867 13.7295C0.241464 13.8175 -0.0671757 14.0035 0.477032 14.3041C1.33141 14.7764 1.90015 14.7258 2.34216 15.0105C2.71723 15.2522 2.49546 15.7736 2.76833 15.9617C3.10354 16.1933 4.09435 15.9454 5.37439 16.3681C6.44748 16.7218 7.0995 17.7211 9.00244 17.7211C10.9054 17.7211 11.5763 16.7172 12.6305 16.3681C13.908 15.9454 14.9008 16.1933 15.2366 15.9617C15.5089 15.7736 15.2877 15.2522 15.6627 15.0105C16.1047 14.7258 16.673 14.7764 17.5279 14.3041C18.071 14.0071 17.7624 13.821 17.581 13.7331Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_tiktok:`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
   <path d="M14.883 4.27729C14.7506 4.20752 14.6217 4.13104 14.4968 4.04813C14.1337 3.80333 13.8007 3.51489 13.5051 3.18901C12.7655 2.32613 12.4893 1.45076 12.3876 0.837875H12.3917C12.3067 0.32915 12.3418 0 12.3471 0H8.97851V13.2818C8.97851 13.4602 8.97851 13.6364 8.97116 13.8106C8.97116 13.8322 8.96911 13.8522 8.96789 13.8756C8.96789 13.8851 8.96789 13.8951 8.96584 13.9051C8.96584 13.9076 8.96584 13.9101 8.96584 13.9126C8.93034 14.3892 8.78052 14.8495 8.52957 15.2532C8.27862 15.6568 7.93424 15.9914 7.52671 16.2275C7.10197 16.4739 6.62159 16.6032 6.13293 16.6025C4.56344 16.6025 3.29143 15.2976 3.29143 13.686C3.29143 12.0744 4.56344 10.7695 6.13293 10.7695C6.43002 10.7692 6.72529 10.8169 7.00777 10.9107L7.01185 7.41338C6.15432 7.30043 5.28314 7.36992 4.45327 7.61747C3.62339 7.86502 2.85284 8.28524 2.19021 8.85164C1.6096 9.36603 1.12148 9.97979 0.747808 10.6653C0.605611 10.9153 0.0691014 11.9198 0.00413184 13.5502C-0.0367295 14.4755 0.235816 15.4342 0.365755 15.8305V15.8388C0.447477 16.0721 0.764153 16.8683 1.28023 17.5395C1.69638 18.078 2.18804 18.5509 2.73939 18.9432V18.9349L2.74756 18.9432C4.37834 20.0732 6.18645 19.999 6.18645 19.999C6.49945 19.9861 7.54795 19.999 8.73865 19.4236C10.0593 18.7857 10.8111 17.8354 10.8111 17.8354C11.2915 17.2675 11.6734 16.6204 11.9405 15.9217C12.2454 15.1047 12.3471 14.1247 12.3471 13.7331V6.68675C12.388 6.71175 12.9323 7.07881 12.9323 7.07881C12.9323 7.07881 13.7164 7.59129 14.9398 7.92502C15.8175 8.16251 17 8.21251 17 8.21251V4.80268C16.5857 4.84851 15.7443 4.71518 14.883 4.27729Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_rss:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M0 6.79688V10.6172C2.49219 10.6172 4.85156 11.6016 6.61719 13.3672C8.38281 15.1328 9.35938 17.4922 9.35938 19.9922V20H13.1953C13.1953 16.3594 11.7109 13.0703 9.32031 10.6719C6.9375 8.28125 3.64062 6.80469 0 6.79688Z" fill="var(--nys-icon-color, currentcolor)"/>
   <path d="M2.65625 14.6797C1.92188 14.6797 1.26562 14.9766 0.78125 15.4609C0.296875 15.9453 0 16.6016 0 17.3359C0 18.0625 0.296875 18.7188 0.78125 19.2031C1.26562 19.6797 1.92188 19.9766 2.65625 19.9766C3.39062 19.9766 4.04688 19.6875 4.53125 19.2031C5.01562 18.7188 5.3125 18.0625 5.3125 17.3359C5.3125 16.6016 5.01562 15.9453 4.53125 15.4609C4.04688 14.9766 3.39062 14.6797 2.65625 14.6797Z" fill="var(--nys-icon-color, currentcolor)"/>
   <path d="M14.1328 5.86719C10.5156 2.24219 5.52344 0 0.0078125 0V3.82031C8.92188 3.82812 16.1641 11.0859 16.1719 20H20C20 14.4844 17.7578 9.49219 14.1328 5.86719Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_pinterest:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M10 0C4.47656 0 0 4.47656 0 10C0 14.2383 2.63672 17.8555 6.35547 19.3125C6.26953 18.5195 6.1875 17.3086 6.39062 16.4453C6.57422 15.6641 7.5625 11.4766 7.5625 11.4766C7.5625 11.4766 7.26172 10.8789 7.26172 9.99219C7.26172 8.60156 8.06641 7.5625 9.07031 7.5625C9.92187 7.5625 10.3359 8.20312 10.3359 8.97266C10.3359 9.83203 9.78906 11.1133 9.50781 12.3008C9.27344 13.2969 10.0078 14.1094 10.9883 14.1094C12.7656 14.1094 14.1328 12.2344 14.1328 9.53125C14.1328 7.13672 12.4141 5.46094 9.95703 5.46094C7.11328 5.46094 5.44141 7.59375 5.44141 9.80078C5.44141 10.6602 5.77344 11.582 6.1875 12.082C6.26953 12.1797 6.28125 12.2695 6.25781 12.3672C6.18359 12.6836 6.01172 13.3633 5.98047 13.5C5.9375 13.6836 5.83594 13.7227 5.64453 13.6328C4.39453 13.0508 3.61328 11.2266 3.61328 9.75781C3.61328 6.60156 5.90625 3.70703 10.2188 3.70703C13.6875 3.70703 16.3828 6.17969 16.3828 9.48438C16.3828 12.9297 14.2109 15.7031 11.1953 15.7031C10.1836 15.7031 9.23047 15.1758 8.90234 14.5547C8.90234 14.5547 8.40234 16.4648 8.28125 16.9336C8.05469 17.8008 7.44531 18.8906 7.03906 19.5547C7.97656 19.8438 8.96875 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_google_play:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
   <path d="M3.1202 0.508333L14.0372 6.79667L11.6972 9.14083L3.1202 0.508333ZM0.85845 0L10.8795 10L0.859282 20C0.349369 19.7742 0 19.2717 0 18.6875C0 18.6683 0 18.6492 0.000831831 18.6308V18.6333V1.3675C0 1.35167 0 1.3325 0 1.31333C0 0.729167 0.349369 0.226667 0.850132 0.00416667L0.859282 0.000833333L0.85845 0ZM17.4302 8.82833C17.7746 9.08417 17.995 9.49083 17.995 9.94833C17.995 9.96667 17.995 9.98417 17.9942 10.0025V10C17.9975 10.0358 18 10.0783 18 10.1208C18 10.5508 17.792 10.9325 17.471 11.1692L17.4676 11.1717L15.1277 12.4992L12.5939 10L15.1285 7.46083L17.4302 8.82833ZM3.1202 19.4917L11.698 10.8592L14.038 13.2033L3.1202 19.4917Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_vimeo:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
   <path d="M19.8881 1.69862C19.5362 0.229472 17.8797 -0.185772 16.2069 0.0712117C15.3489 0.204969 12.4525 1.49916 11.4656 4.60025C13.2117 4.46356 14.1279 4.72713 13.9598 6.67303C13.8886 7.48846 13.4838 8.38049 13.0286 9.23624C12.5054 10.2241 11.5212 12.1601 10.2329 10.7655C9.0727 9.50732 9.16169 7.10527 8.89749 5.5037C8.74774 4.60315 8.59141 3.48589 8.30044 2.56221C8.05194 1.76626 7.47709 0.809563 6.77407 0.599948C6.01998 0.377956 5.08804 0.727832 4.54143 1.05518C2.83909 2.06578 1.56386 3.45811 0.102263 4.65849C-0.0821777 4.84616 0.0270352 5.00379 0.0891308 5.14342C0.299039 5.47202 0.380141 5.67144 0.780407 5.73002C1.81954 5.88433 2.8077 4.74937 3.4963 5.93241C3.9175 6.65239 4.0489 7.44205 4.31772 8.21766C4.67544 9.25684 4.95332 10.3843 5.2476 11.5768C5.74663 13.592 6.35542 16.6046 8.0787 17.3458C8.95631 17.7212 10.276 17.218 10.9437 16.8167C12.7553 15.7305 14.2286 14.2052 15.375 12.5542C18.3584 8.26088 19.7887 3.94699 19.9442 3.12531C20.0548 2.52978 19.9823 2.0383 19.8881 1.69862Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,clear_day:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
   <path d="M11 4C10.7167 4 10.4792 3.90417 10.2875 3.7125C10.0958 3.52083 10 3.28333 10 3V1C10 0.716667 10.0958 0.479167 10.2875 0.2875C10.4792 0.0958333 10.7167 0 11 0C11.2833 0 11.5208 0.0958333 11.7125 0.2875C11.9042 0.479167 12 0.716667 12 1V3C12 3.28333 11.9042 3.52083 11.7125 3.7125C11.5208 3.90417 11.2833 4 11 4ZM15.95 6.05C15.7667 5.86667 15.675 5.6375 15.675 5.3625C15.675 5.0875 15.7667 4.85 15.95 4.65L17.35 3.225C17.55 3.025 17.7875 2.925 18.0625 2.925C18.3375 2.925 18.575 3.025 18.775 3.225C18.9583 3.40833 19.05 3.64167 19.05 3.925C19.05 4.20833 18.9583 4.44167 18.775 4.625L17.35 6.05C17.1667 6.23333 16.9333 6.325 16.65 6.325C16.3667 6.325 16.1333 6.23333 15.95 6.05ZM19 12C18.7167 12 18.4792 11.9042 18.2875 11.7125C18.0958 11.5208 18 11.2833 18 11C18 10.7167 18.0958 10.4792 18.2875 10.2875C18.4792 10.0958 18.7167 10 19 10H21C21.2833 10 21.5208 10.0958 21.7125 10.2875C21.9042 10.4792 22 10.7167 22 11C22 11.2833 21.9042 11.5208 21.7125 11.7125C21.5208 11.9042 21.2833 12 21 12H19ZM11 22C10.7167 22 10.4792 21.9042 10.2875 21.7125C10.0958 21.5208 10 21.2833 10 21V19C10 18.7167 10.0958 18.4792 10.2875 18.2875C10.4792 18.0958 10.7167 18 11 18C11.2833 18 11.5208 18.0958 11.7125 18.2875C11.9042 18.4792 12 18.7167 12 19V21C12 21.2833 11.9042 21.5208 11.7125 21.7125C11.5208 21.9042 11.2833 22 11 22ZM4.65 6.05L3.225 4.65C3.025 4.45 2.925 4.20833 2.925 3.925C2.925 3.64167 3.025 3.40833 3.225 3.225C3.40833 3.04167 3.64167 2.95 3.925 2.95C4.20833 2.95 4.44167 3.04167 4.625 3.225L6.05 4.65C6.23333 4.83333 6.325 5.06667 6.325 5.35C6.325 5.63333 6.23333 5.86667 6.05 6.05C5.85 6.23333 5.61667 6.325 5.35 6.325C5.08333 6.325 4.85 6.23333 4.65 6.05ZM17.35 18.775L15.95 17.35C15.7667 17.15 15.675 16.9125 15.675 16.6375C15.675 16.3625 15.7667 16.1333 15.95 15.95C16.1333 15.7667 16.3625 15.675 16.6375 15.675C16.9125 15.675 17.15 15.7667 17.35 15.95L18.775 17.35C18.975 17.5333 19.0708 17.7667 19.0625 18.05C19.0542 18.3333 18.9583 18.575 18.775 18.775C18.575 18.975 18.3333 19.075 18.05 19.075C17.7667 19.075 17.5333 18.975 17.35 18.775ZM1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10H3C3.28333 10 3.52083 10.0958 3.7125 10.2875C3.90417 10.4792 4 10.7167 4 11C4 11.2833 3.90417 11.5208 3.7125 11.7125C3.52083 11.9042 3.28333 12 3 12H1ZM3.225 18.775C3.04167 18.5917 2.95 18.3583 2.95 18.075C2.95 17.7917 3.04167 17.5583 3.225 17.375L4.65 15.95C4.83333 15.7667 5.0625 15.675 5.3375 15.675C5.6125 15.675 5.85 15.7667 6.05 15.95C6.25 16.15 6.35 16.3875 6.35 16.6625C6.35 16.9375 6.25 17.175 6.05 17.375L4.65 18.775C4.45 18.975 4.20833 19.075 3.925 19.075C3.64167 19.075 3.40833 18.975 3.225 18.775ZM11 17C9.33333 17 7.91667 16.4167 6.75 15.25C5.58333 14.0833 5 12.6667 5 11C5 9.33333 5.58333 7.91667 6.75 6.75C7.91667 5.58333 9.33333 5 11 5C12.6667 5 14.0833 5.58333 15.25 6.75C16.4167 7.91667 17 9.33333 17 11C17 12.6667 16.4167 14.0833 15.25 15.25C14.0833 16.4167 12.6667 17 11 17ZM11 15C12.1 15 13.0417 14.6083 13.825 13.825C14.6083 13.0417 15 12.1 15 11C15 9.9 14.6083 8.95833 13.825 8.175C13.0417 7.39167 12.1 7 11 7C9.9 7 8.95833 7.39167 8.175 8.175C7.39167 8.95833 7 9.9 7 11C7 12.1 7.39167 13.0417 8.175 13.825C8.95833 14.6083 9.9 15 11 15Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,air:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
   <path d="M9.5 17C8.96667 17 8.47083 16.8667 8.0125 16.6C7.55417 16.3333 7.18333 15.9667 6.9 15.5C6.71667 15.1667 6.7125 14.8333 6.8875 14.5C7.0625 14.1667 7.33333 14 7.7 14C7.91667 14 8.10833 14.0667 8.275 14.2C8.44167 14.3333 8.59167 14.4833 8.725 14.65C8.80833 14.7667 8.92083 14.8542 9.0625 14.9125C9.20417 14.9708 9.35 15 9.5 15C9.78333 15 10.0208 14.9042 10.2125 14.7125C10.4042 14.5208 10.5 14.2833 10.5 14C10.5 13.7167 10.4042 13.4792 10.2125 13.2875C10.0208 13.0958 9.78333 13 9.5 13H1C0.716667 13 0.479167 12.9042 0.2875 12.7125C0.0958333 12.5208 0 12.2833 0 12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11H9.5C10.3333 11 11.0417 11.2917 11.625 11.875C12.2083 12.4583 12.5 13.1667 12.5 14C12.5 14.8333 12.2083 15.5417 11.625 16.125C11.0417 16.7083 10.3333 17 9.5 17ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H13.5C13.9167 5 14.2708 4.85417 14.5625 4.5625C14.8542 4.27083 15 3.91667 15 3.5C15 3.08333 14.8542 2.72917 14.5625 2.4375C14.2708 2.14583 13.9167 2 13.5 2C13.2333 2 12.9833 2.0625 12.75 2.1875C12.5167 2.3125 12.3333 2.49167 12.2 2.725C12.0833 2.925 11.9417 3.10417 11.775 3.2625C11.6083 3.42083 11.4083 3.5 11.175 3.5C10.8417 3.5 10.5708 3.375 10.3625 3.125C10.1542 2.875 10.1 2.60833 10.2 2.325C10.4333 1.625 10.8542 1.0625 11.4625 0.6375C12.0708 0.2125 12.75 0 13.5 0C14.4667 0 15.2917 0.341667 15.975 1.025C16.6583 1.70833 17 2.53333 17 3.5C17 4.46667 16.6583 5.29167 15.975 5.975C15.2917 6.65833 14.4667 7 13.5 7H1ZM17.95 14.7C17.6167 14.85 17.2917 14.8292 16.975 14.6375C16.6583 14.4458 16.5 14.1667 16.5 13.8C16.5 13.5667 16.5792 13.3708 16.7375 13.2125C16.8958 13.0542 17.075 12.9167 17.275 12.8C17.5083 12.6667 17.6875 12.4833 17.8125 12.25C17.9375 12.0167 18 11.7667 18 11.5C18 11.0833 17.8542 10.7292 17.5625 10.4375C17.2708 10.1458 16.9167 10 16.5 10H1C0.716667 10 0.479167 9.90417 0.2875 9.7125C0.0958333 9.52083 0 9.28333 0 9C0 8.71667 0.0958333 8.47917 0.2875 8.2875C0.479167 8.09583 0.716667 8 1 8H16.5C17.4667 8 18.2917 8.34167 18.975 9.025C19.6583 9.70833 20 10.5333 20 11.5C20 12.2 19.8167 12.8375 19.45 13.4125C19.0833 13.9875 18.5833 14.4167 17.95 14.7Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,coronavirus:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M9.25 20C9.05 20 8.875 19.925 8.725 19.775C8.575 19.625 8.5 19.45 8.5 19.25C8.5 19.05 8.575 18.875 8.725 18.725C8.875 18.575 9.05 18.5 9.25 18.5V16.95C8.55 16.8667 7.89167 16.7 7.275 16.45C6.65833 16.2 6.1 15.8667 5.6 15.45L4.525 16.55C4.675 16.7 4.75 16.875 4.75 17.075C4.75 17.275 4.675 17.45 4.525 17.6C4.375 17.75 4.2 17.825 4 17.825C3.8 17.825 3.625 17.75 3.475 17.6L2.4 16.55C2.25 16.4 2.175 16.2208 2.175 16.0125C2.175 15.8042 2.25 15.625 2.4 15.475C2.55 15.325 2.725 15.2542 2.925 15.2625C3.125 15.2708 3.3 15.3417 3.45 15.475L4.55 14.375C4.13333 13.8583 3.8 13.3 3.55 12.7C3.3 12.1 3.13333 11.45 3.05 10.75H1.5C1.5 10.95 1.425 11.125 1.275 11.275C1.125 11.425 0.95 11.5 0.75 11.5C0.55 11.5 0.375 11.425 0.225 11.275C0.075 11.125 0 10.95 0 10.75V9.25C0 9.05 0.075 8.875 0.225 8.725C0.375 8.575 0.55 8.5 0.75 8.5C0.95 8.5 1.125 8.575 1.275 8.725C1.425 8.875 1.5 9.05 1.5 9.25H3.05C3.13333 8.55 3.30417 7.9 3.5625 7.3C3.82083 6.7 4.15 6.14167 4.55 5.625L3.45 4.525C3.3 4.65833 3.125 4.72917 2.925 4.7375C2.725 4.74583 2.55 4.675 2.4 4.525C2.25 4.375 2.175 4.19583 2.175 3.9875C2.175 3.77917 2.25 3.6 2.4 3.45L3.45 2.4C3.6 2.25 3.77917 2.175 3.9875 2.175C4.19583 2.175 4.375 2.25 4.525 2.4C4.675 2.55 4.75 2.72917 4.75 2.9375C4.75 3.14583 4.675 3.325 4.525 3.475L5.6 4.55C6.11667 4.13333 6.675 3.8 7.275 3.55C7.875 3.3 8.525 3.13333 9.225 3.05V1.5C9.025 1.5 8.85417 1.425 8.7125 1.275C8.57083 1.125 8.5 0.95 8.5 0.75C8.5 0.55 8.575 0.375 8.725 0.225C8.875 0.075 9.05 0 9.25 0H10.75C10.95 0 11.125 0.075 11.275 0.225C11.425 0.375 11.5 0.55 11.5 0.75C11.5 0.95 11.425 1.125 11.275 1.275C11.125 1.425 10.95 1.5 10.75 1.5V3.05C11.45 3.13333 12.1 3.3 12.7 3.55C13.3 3.8 13.8583 4.13333 14.375 4.55L15.475 3.45C15.325 3.3 15.25 3.125 15.25 2.925C15.25 2.725 15.325 2.55 15.475 2.4C15.625 2.25 15.8042 2.175 16.0125 2.175C16.2208 2.175 16.4 2.25 16.55 2.4L17.6 3.475C17.75 3.625 17.825 3.8 17.825 4C17.825 4.2 17.75 4.375 17.6 4.525C17.45 4.675 17.2708 4.75 17.0625 4.75C16.8542 4.75 16.675 4.675 16.525 4.525L15.45 5.6C15.8667 6.11667 16.2 6.67917 16.45 7.2875C16.7 7.89583 16.8667 8.55 16.95 9.25H18.5C18.5 9.05 18.575 8.875 18.725 8.725C18.875 8.575 19.05 8.5 19.25 8.5C19.45 8.5 19.625 8.575 19.775 8.725C19.925 8.875 20 9.05 20 9.25V10.75C20 10.95 19.925 11.125 19.775 11.275C19.625 11.425 19.45 11.5 19.25 11.5C19.05 11.5 18.875 11.425 18.725 11.275C18.575 11.125 18.5 10.95 18.5 10.75H16.95C16.8667 11.45 16.7 12.1042 16.45 12.7125C16.2 13.3208 15.8667 13.8833 15.45 14.4L16.525 15.475C16.675 15.325 16.8542 15.25 17.0625 15.25C17.2708 15.25 17.45 15.325 17.6 15.475C17.75 15.625 17.825 15.8042 17.825 16.0125C17.825 16.2208 17.75 16.4 17.6 16.55L16.55 17.6C16.4 17.75 16.2208 17.825 16.0125 17.825C15.8042 17.825 15.625 17.75 15.475 17.6C15.325 17.45 15.2542 17.275 15.2625 17.075C15.2708 16.875 15.3417 16.7 15.475 16.55L14.375 15.45C13.8583 15.8667 13.3 16.2042 12.7 16.4625C12.1 16.7208 11.45 16.8917 10.75 16.975V18.5C10.95 18.5 11.125 18.575 11.275 18.725C11.425 18.875 11.5 19.05 11.5 19.25C11.5 19.45 11.425 19.625 11.275 19.775C11.125 19.925 10.95 20 10.75 20H9.25ZM10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM8.25 14C8.53333 14 8.77083 13.9042 8.9625 13.7125C9.15417 13.5208 9.25 13.2833 9.25 13C9.25 12.7167 9.15417 12.4792 8.9625 12.2875C8.77083 12.0958 8.53333 12 8.25 12C7.96667 12 7.72917 12.0958 7.5375 12.2875C7.34583 12.4792 7.25 12.7167 7.25 13C7.25 13.2833 7.34583 13.5208 7.5375 13.7125C7.72917 13.9042 7.96667 14 8.25 14ZM11.75 14C12.0333 14 12.2708 13.9042 12.4625 13.7125C12.6542 13.5208 12.75 13.2833 12.75 13C12.75 12.7167 12.6542 12.4792 12.4625 12.2875C12.2708 12.0958 12.0333 12 11.75 12C11.4667 12 11.2292 12.0958 11.0375 12.2875C10.8458 12.4792 10.75 12.7167 10.75 13C10.75 13.2833 10.8458 13.5208 11.0375 13.7125C11.2292 13.9042 11.4667 14 11.75 14ZM6.5 11C6.78333 11 7.02083 10.9042 7.2125 10.7125C7.40417 10.5208 7.5 10.2833 7.5 10C7.5 9.71667 7.40417 9.47917 7.2125 9.2875C7.02083 9.09583 6.78333 9 6.5 9C6.21667 9 5.97917 9.09583 5.7875 9.2875C5.59583 9.47917 5.5 9.71667 5.5 10C5.5 10.2833 5.59583 10.5208 5.7875 10.7125C5.97917 10.9042 6.21667 11 6.5 11ZM10 11C10.2833 11 10.5208 10.9042 10.7125 10.7125C10.9042 10.5208 11 10.2833 11 10C11 9.71667 10.9042 9.47917 10.7125 9.2875C10.5208 9.09583 10.2833 9 10 9C9.71667 9 9.47917 9.09583 9.2875 9.2875C9.09583 9.47917 9 9.71667 9 10C9 10.2833 9.09583 10.5208 9.2875 10.7125C9.47917 10.9042 9.71667 11 10 11ZM13.5 11C13.7833 11 14.0208 10.9042 14.2125 10.7125C14.4042 10.5208 14.5 10.2833 14.5 10C14.5 9.71667 14.4042 9.47917 14.2125 9.2875C14.0208 9.09583 13.7833 9 13.5 9C13.2167 9 12.9792 9.09583 12.7875 9.2875C12.5958 9.47917 12.5 9.71667 12.5 10C12.5 10.2833 12.5958 10.5208 12.7875 10.7125C12.9792 10.9042 13.2167 11 13.5 11ZM8.25 8C8.53333 8 8.77083 7.90417 8.9625 7.7125C9.15417 7.52083 9.25 7.28333 9.25 7C9.25 6.71667 9.15417 6.47917 8.9625 6.2875C8.77083 6.09583 8.53333 6 8.25 6C7.96667 6 7.72917 6.09583 7.5375 6.2875C7.34583 6.47917 7.25 6.71667 7.25 7C7.25 7.28333 7.34583 7.52083 7.5375 7.7125C7.72917 7.90417 7.96667 8 8.25 8ZM11.75 8C12.0333 8 12.2708 7.90417 12.4625 7.7125C12.6542 7.52083 12.75 7.28333 12.75 7C12.75 6.71667 12.6542 6.47917 12.4625 6.2875C12.2708 6.09583 12.0333 6 11.75 6C11.4667 6 11.2292 6.09583 11.0375 6.2875C10.8458 6.47917 10.75 6.71667 10.75 7C10.75 7.28333 10.8458 7.52083 11.0375 7.7125C11.2292 7.90417 11.4667 8 11.75 8Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,ac_unit:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M9 15.85L6.425 18.375C6.24167 18.5583 6.0125 18.65 5.7375 18.65C5.4625 18.65 5.23333 18.55 5.05 18.35C4.85 18.1667 4.75 17.9375 4.75 17.6625C4.75 17.3875 4.85 17.15 5.05 16.95L9 13V11H7L3.025 14.975C2.84167 15.1583 2.6125 15.25 2.3375 15.25C2.0625 15.25 1.825 15.15 1.625 14.95C1.44167 14.7667 1.35 14.5375 1.35 14.2625C1.35 13.9875 1.44167 13.7583 1.625 13.575L4.15 11H0.975C0.691667 11 0.458333 10.9042 0.275 10.7125C0.0916667 10.5208 0 10.2833 0 10C0 9.71667 0.0958333 9.47917 0.2875 9.2875C0.479167 9.09583 0.716667 9 1 9H4.15L1.625 6.45C1.44167 6.26667 1.35 6.0375 1.35 5.7625C1.35 5.4875 1.45 5.25 1.65 5.05C1.83333 4.86667 2.0625 4.775 2.3375 4.775C2.6125 4.775 2.85 4.86667 3.05 5.05L7 9H9V7L5.025 3.05C4.84167 2.86667 4.75 2.6375 4.75 2.3625C4.75 2.0875 4.85 1.85 5.05 1.65C5.23333 1.46667 5.4625 1.375 5.7375 1.375C6.0125 1.375 6.24167 1.46667 6.425 1.65L9 4.15V1C9 0.716667 9.09583 0.479167 9.2875 0.2875C9.47917 0.0958333 9.71667 0 10 0C10.2833 0 10.5208 0.0958333 10.7125 0.2875C10.9042 0.479167 11 0.716667 11 1V4.15L13.55 1.65C13.7333 1.46667 13.9625 1.375 14.2375 1.375C14.5125 1.375 14.75 1.46667 14.95 1.65C15.1333 1.85 15.225 2.0875 15.225 2.3625C15.225 2.6375 15.1333 2.86667 14.95 3.05L11 7V9H13L16.95 5.05C17.1333 4.86667 17.3625 4.775 17.6375 4.775C17.9125 4.775 18.15 4.875 18.35 5.075C18.5333 5.25833 18.625 5.4875 18.625 5.7625C18.625 6.0375 18.5333 6.26667 18.35 6.45L15.85 9H19C19.2833 9 19.5208 9.09583 19.7125 9.2875C19.9042 9.47917 20 9.71667 20 10C20 10.2833 19.9042 10.5208 19.7125 10.7125C19.5208 10.9042 19.2833 11 19 11H15.85L18.35 13.575C18.5333 13.7583 18.625 13.9875 18.625 14.2625C18.625 14.5375 18.5333 14.7667 18.35 14.95C18.15 15.15 17.9125 15.25 17.6375 15.25C17.3625 15.25 17.1333 15.15 16.95 14.95L13 11H11V13L14.95 16.975C15.1333 17.1583 15.225 17.3875 15.225 17.6625C15.225 17.9375 15.125 18.175 14.925 18.375C14.7417 18.5583 14.5125 18.65 14.2375 18.65C13.9625 18.65 13.7333 18.5583 13.55 18.375L11 15.85V19.025C11 19.3083 10.9042 19.5417 10.7125 19.725C10.5208 19.9083 10.2833 20 10 20C9.71667 20 9.47917 19.9042 9.2875 19.7125C9.09583 19.5208 9 19.2833 9 19V15.85Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,rainy:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
   <path d="M11.95 19.9C11.7 20.0333 11.4458 20.0542 11.1875 19.9625C10.9292 19.8708 10.7333 19.7 10.6 19.45L9.1 16.45C8.96667 16.2 8.94583 15.9458 9.0375 15.6875C9.12917 15.4292 9.3 15.2333 9.55 15.1C9.8 14.9667 10.0542 14.9458 10.3125 15.0375C10.5708 15.1292 10.7667 15.3 10.9 15.55L12.4 18.55C12.5333 18.8 12.5542 19.0542 12.4625 19.3125C12.3708 19.5708 12.2 19.7667 11.95 19.9ZM17.95 19.9C17.7 20.0333 17.4458 20.0542 17.1875 19.9625C16.9292 19.8708 16.7333 19.7 16.6 19.45L15.1 16.45C14.9667 16.2 14.9458 15.9458 15.0375 15.6875C15.1292 15.4292 15.3 15.2333 15.55 15.1C15.8 14.9667 16.0542 14.9458 16.3125 15.0375C16.5708 15.1292 16.7667 15.3 16.9 15.55L18.4 18.55C18.5333 18.8 18.5542 19.0542 18.4625 19.3125C18.3708 19.5708 18.2 19.7667 17.95 19.9ZM5.95 19.9C5.7 20.0333 5.44583 20.0542 5.1875 19.9625C4.92917 19.8708 4.73333 19.7 4.6 19.45L3.1 16.45C2.96667 16.2 2.94583 15.9458 3.0375 15.6875C3.12917 15.4292 3.3 15.2333 3.55 15.1C3.8 14.9667 4.05417 14.9458 4.3125 15.0375C4.57083 15.1292 4.76667 15.3 4.9 15.55L6.4 18.55C6.53333 18.8 6.55417 19.0542 6.4625 19.3125C6.37083 19.5708 6.2 19.7667 5.95 19.9ZM5.5 14C3.98333 14 2.6875 13.4625 1.6125 12.3875C0.5375 11.3125 0 10.0167 0 8.5C0 7.11667 0.458333 5.90833 1.375 4.875C2.29167 3.84167 3.425 3.23333 4.775 3.05C5.30833 2.1 6.0375 1.35417 6.9625 0.8125C7.8875 0.270833 8.9 0 10 0C11.5 0 12.8042 0.479167 13.9125 1.4375C15.0208 2.39583 15.6917 3.59167 15.925 5.025C17.075 5.125 18.0417 5.6 18.825 6.45C19.6083 7.3 20 8.31667 20 9.5C20 10.75 19.5625 11.8125 18.6875 12.6875C17.8125 13.5625 16.75 14 15.5 14H5.5ZM5.5 12H15.5C16.2 12 16.7917 11.7583 17.275 11.275C17.7583 10.7917 18 10.2 18 9.5C18 8.8 17.7583 8.20833 17.275 7.725C16.7917 7.24167 16.2 7 15.5 7H14V6C14 4.9 13.6083 3.95833 12.825 3.175C12.0417 2.39167 11.1 2 10 2C9.2 2 8.47083 2.21667 7.8125 2.65C7.15417 3.08333 6.65833 3.66667 6.325 4.4L6.075 5H5.45C4.5 5.03333 3.6875 5.3875 3.0125 6.0625C2.3375 6.7375 2 7.55 2 8.5C2 9.46667 2.34167 10.2917 3.025 10.975C3.70833 11.6583 4.53333 12 5.5 12Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,open_in_new:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
   <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H8C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1C9 1.28333 8.90417 1.52083 8.7125 1.7125C8.52083 1.90417 8.28333 2 8 2H2V16H16V10C16 9.71667 16.0958 9.47917 16.2875 9.2875C16.4792 9.09583 16.7167 9 17 9C17.2833 9 17.5208 9.09583 17.7125 9.2875C17.9042 9.47917 18 9.71667 18 10V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM16 3.4L7.4 12C7.21667 12.1833 6.98333 12.275 6.7 12.275C6.41667 12.275 6.18333 12.1833 6 12C5.81667 11.8167 5.725 11.5833 5.725 11.3C5.725 11.0167 5.81667 10.7833 6 10.6L14.6 2H12C11.7167 2 11.4792 1.90417 11.2875 1.7125C11.0958 1.52083 11 1.28333 11 1C11 0.716667 11.0958 0.479167 11.2875 0.2875C11.4792 0.0958333 11.7167 0 12 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1V6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7C16.7167 7 16.4792 6.90417 16.2875 6.7125C16.0958 6.52083 16 6.28333 16 6V3.4Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`},A5=_`
   :host {
     --nys-icon-color: currentcolor;
     --nys-icon-size: 1em;
   }
 
   /* Use 'cap' if supported */
   @supports (font-size: 1cap) {
     :host {
       --nys-icon-size: 1cap;
     }
   }
 
   /* SVG size and color is initially determined by the parent's font-size and text-color */
   .nys-icon--svg {
     width: var(--nys-icon-size, 1em);
     height: var(--nys-icon-size, 1em);
     display: inline-block;
     white-space: nowrap;
   }
 
   /* Relative Sizes */
   .nys-icon--2xs {
     width: calc(var(--nys-icon-size) * 0.75);
     height: calc(var(--nys-icon-size) * 0.75);
   }
   .nys-icon--xs {
     width: calc(var(--nys-icon-size) * 0.875);
     height: calc(var(--nys-icon-size) * 0.875);
   }
   .nys-icon--sm {
     width: var(--nys-icon-size);
     height: var(--nys-icon-size);
   }
   .nys-icon--md {
     width: calc(var(--nys-icon-size) * 1.125);
     height: calc(var(--nys-icon-size) * 1.125);
   }
   .nys-icon--lg {
     width: calc(var(--nys-icon-size) * 1.25);
     height: calc(var(--nys-icon-size) * 1.25);
   }
   .nys-icon--xl {
     width: calc(var(--nys-icon-size) * 1.5);
     height: calc(var(--nys-icon-size) * 1.5);
   }
   .nys-icon--2xl {
     width: calc(var(--nys-icon-size) * 1.875);
     height: calc(var(--nys-icon-size) * 1.875);
   }
   .nys-icon--3xl {
     width: calc(var(--nys-icon-size) * 2.25);
     height: calc(var(--nys-icon-size) * 2.25);
   }
   .nys-icon--4xl {
     width: calc(var(--nys-icon-size) * 3);
     height: calc(var(--nys-icon-size) * 3);
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
 `;var k5=Object.defineProperty,N5=Object.getOwnPropertyDescriptor,D=(o,t,e,i)=>{for(var s=i>1?void 0:i?N5(t,e):t,C=o.length-1,n;C>=0;C--)(n=o[C])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&k5(t,e,s),s},J;const B=(J=class extends w{constructor(){super(...arguments),this.name="",this.label="",this.rotate="0",this.flip="",this.color="",this._size="sm"}get size(){return this._size}set size(o){this._size=J.VALID_TYPES.includes(o)?o:"sm"}getIcon(){const o=E5[this.name],t=!!this.label;if(!o)return null;const e=new DOMParser().parseFromString(o,"image/svg+xml").documentElement;return e instanceof SVGElement?(e.setAttribute("role","img"),e.setAttribute("aria-label",t?this.label:""),e.setAttribute("aria-hidden",t?"false":"true"),e.style.rotate=`${this.rotate}deg`,e.style.color=this.color||"currentcolor",e.classList.add(`nys-icon--${this.size}`),e.classList.add("nys-icon--svg"),this.flip&&e.classList.add(`nys-icon--flip-${this.flip}`),e):null}render(){return this.getIcon()}},J.styles=A5,J.VALID_TYPES=["2xs","xs","sm","md","lg","xl","2xl","3xl","4xl","12","16","24","32","48","64"],J);D([R({type:String})],B.prototype,"name",2),D([R({type:String})],B.prototype,"label",2),D([R({type:String})],B.prototype,"rotate",2),D([R({type:String})],B.prototype,"flip",2),D([R({type:String})],B.prototype,"color",2),D([R({reflect:!0})],B.prototype,"size",1);let z5=B;customElements.get("nys-icon")||customElements.define("nys-icon",z5);var B5=Object.defineProperty,P5=Object.getOwnPropertyDescriptor,m=(o,t,e,i)=>{for(var s=i>1?void 0:i?P5(t,e):t,C=o.length-1,n;C>=0;C--)(n=o[C])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&B5(t,e,s),s};let T5=0;r.NysAlert=class extends w{constructor(){super(...arguments),this.id="",this.heading="",this.icon="",this.isSlim=!1,this.dismissible=!1,this.duration=0,this.text="",this._alertClosed=!1,this._theme="info",this._timeoutId=null}get theme(){return this._theme}set theme(t){this._theme=r.NysAlert.VALID_TYPES.includes(t)?t:"info"}get ariaAttributes(){const t=this.theme==="error"||this.theme==="emergency"?"alert":this.theme==="success"?"status":"region",e=t==="region"?`${this.theme} alert`:"";return{role:t,ariaLabel:e}}connectedCallback(){super.connectedCallback(),this.id||(this.id=this._generateUniqueId()),this.duration>0&&(this._timeoutId=setTimeout(()=>{this._closeAlert()},this.duration))}disconnectedCallback(){this._timeoutId&&clearTimeout(this._timeoutId),super.disconnectedCallback()}_generateUniqueId(){return`nys-alert-${Date.now()}-${T5++}`}_getIconName(){return this.icon?this.icon:this._checkAltNaming()}_checkAltNaming(){return this.theme==="success"?"check_circle":this.theme}_closeAlert(){this._alertClosed=!0,this.dispatchEvent(new CustomEvent("nys-alertClosed",{detail:{theme:this.theme,label:this.heading},bubbles:!0,composed:!0}))}render(){const{role:t,ariaLabel:e}=this.ariaAttributes;return h`
       ${this._alertClosed?"":h` <div
             id=${this.id}
             class="nys-alert__container nys-alert--${this.theme}"
             role=${t}
             aria-label=${e1(e.trim()!==""?e:void 0)}
           >
             <div
               class="nys-alert__icon ${this.isSlim?"nys-alert--slim":""}"
             >
               <nys-icon
                 name="${this._getIconName()}"
                 size="2xl"
                 label="${this.theme} icon"
               ></nys-icon>
             </div>
             <div class="nys-alert__text">
               ${this.isSlim?"":h`<h4 class="nys-alert__label">${this.heading}</h4>`}
               <slot name="text">${this.text}</slot>
             </div>
             ${this.dismissible?h`<div class="close-container">
                   <button class="close-button" @click=${this._closeAlert}>
                     <nys-icon
                       name="close"
                       size="lg"
                       label="close icon"
                     ></nys-icon>
                   </button>
                 </div>`:""}
           </div>`}
     `}},r.NysAlert.styles=w5,r.NysAlert.VALID_TYPES=["info","warning","success","error","emergency"],m([l({type:String})],r.NysAlert.prototype,"id",2),m([l({type:String})],r.NysAlert.prototype,"heading",2),m([l({type:String})],r.NysAlert.prototype,"icon",2),m([l({type:Boolean})],r.NysAlert.prototype,"isSlim",2),m([l({type:Boolean})],r.NysAlert.prototype,"dismissible",2),m([l({type:Number})],r.NysAlert.prototype,"duration",2),m([l({type:String})],r.NysAlert.prototype,"text",2),m([A1()],r.NysAlert.prototype,"_alertClosed",2),m([l({reflect:!0})],r.NysAlert.prototype,"theme",1),r.NysAlert=m([z("nys-alert")],r.NysAlert);const O5={edit_square:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
   <path d="M2 21.0125C1.45 21.0125 0.979167 20.8167 0.5875 20.425C0.195833 20.0333 0 19.5625 0 19.0125V5.0125C0 4.4625 0.195833 3.99167 0.5875 3.6C0.979167 3.20834 1.45 3.0125 2 3.0125H8.525C8.85833 3.0125 9.10833 3.11667 9.275 3.325C9.44167 3.53334 9.525 3.7625 9.525 4.0125C9.525 4.2625 9.4375 4.49167 9.2625 4.7C9.0875 4.90834 8.83333 5.0125 8.5 5.0125H2V19.0125H16V12.4875C16 12.1542 16.1042 11.9042 16.3125 11.7375C16.5208 11.5708 16.75 11.4875 17 11.4875C17.25 11.4875 17.4792 11.5708 17.6875 11.7375C17.8958 11.9042 18 12.1542 18 12.4875V19.0125C18 19.5625 17.8042 20.0333 17.4125 20.425C17.0208 20.8167 16.55 21.0125 16 21.0125H2ZM6 14.0125V11.5875C6 11.3208 6.05 11.0667 6.15 10.825C6.25 10.5833 6.39167 10.3708 6.575 10.1875L15.175 1.5875C15.375 1.3875 15.6 1.2375 15.85 1.1375C16.1 1.0375 16.35 0.987503 16.6 0.987503C16.8667 0.987503 17.1208 1.0375 17.3625 1.1375C17.6042 1.2375 17.825 1.3875 18.025 1.5875L19.425 3.0125C19.6083 3.2125 19.75 3.43334 19.85 3.675C19.95 3.91667 20 4.1625 20 4.4125C20 4.6625 19.9542 4.90834 19.8625 5.15C19.7708 5.39167 19.625 5.6125 19.425 5.8125L10.825 14.4125C10.6417 14.5958 10.4292 14.7417 10.1875 14.85C9.94583 14.9583 9.69167 15.0125 9.425 15.0125H7C6.71667 15.0125 6.47917 14.9167 6.2875 14.725C6.09583 14.5333 6 14.2958 6 14.0125ZM8 13.0125H9.4L15.2 7.2125L14.5 6.5125L13.775 5.8125L8 11.5875V13.0125Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,publish:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
   <path d="M7 7.85L5.125 9.725C4.925 9.925 4.6875 10.0208 4.4125 10.0125C4.1375 10.0042 3.9 9.9 3.7 9.7C3.51667 9.5 3.42083 9.26667 3.4125 9C3.40417 8.73333 3.5 8.5 3.7 8.3L7.3 4.7C7.4 4.6 7.50833 4.52917 7.625 4.4875C7.74167 4.44583 7.86667 4.425 8 4.425C8.13333 4.425 8.25833 4.44583 8.375 4.4875C8.49167 4.52917 8.6 4.6 8.7 4.7L12.3 8.3C12.5 8.5 12.5958 8.73333 12.5875 9C12.5792 9.26667 12.4833 9.5 12.3 9.7C12.1 9.9 11.8625 10.0042 11.5875 10.0125C11.3125 10.0208 11.075 9.925 10.875 9.725L9 7.85V15C9 15.2833 8.90417 15.5208 8.7125 15.7125C8.52083 15.9042 8.28333 16 8 16C7.71667 16 7.47917 15.9042 7.2875 15.7125C7.09583 15.5208 7 15.2833 7 15V7.85ZM0 4V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H14C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2V4C16 4.28333 15.9042 4.52083 15.7125 4.7125C15.5208 4.90417 15.2833 5 15 5C14.7167 5 14.4792 4.90417 14.2875 4.7125C14.0958 4.52083 14 4.28333 14 4V2H2V4C2 4.28333 1.90417 4.52083 1.7125 4.7125C1.52083 4.90417 1.28333 5 1 5C0.716667 5 0.479167 4.90417 0.2875 4.7125C0.0958333 4.52083 0 4.28333 0 4Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,download:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
   <path d="M8 11.575C7.86667 11.575 7.74167 11.5542 7.625 11.5125C7.50833 11.4708 7.4 11.4 7.3 11.3L3.7 7.7C3.5 7.5 3.40417 7.26667 3.4125 7C3.42083 6.73333 3.51667 6.5 3.7 6.3C3.9 6.1 4.1375 5.99583 4.4125 5.9875C4.6875 5.97917 4.925 6.075 5.125 6.275L7 8.15V1C7 0.716667 7.09583 0.479167 7.2875 0.2875C7.47917 0.0958333 7.71667 0 8 0C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1V8.15L10.875 6.275C11.075 6.075 11.3125 5.97917 11.5875 5.9875C11.8625 5.99583 12.1 6.1 12.3 6.3C12.4833 6.5 12.5792 6.73333 12.5875 7C12.5958 7.26667 12.5 7.5 12.3 7.7L8.7 11.3C8.6 11.4 8.49167 11.4708 8.375 11.5125C8.25833 11.5542 8.13333 11.575 8 11.575ZM2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11C1.28333 11 1.52083 11.0958 1.7125 11.2875C1.90417 11.4792 2 11.7167 2 12V14H14V12C14 11.7167 14.0958 11.4792 14.2875 11.2875C14.4792 11.0958 14.7167 11 15 11C15.2833 11 15.5208 11.0958 15.7125 11.2875C15.9042 11.4792 16 11.7167 16 12V14C16 14.55 15.8042 15.0208 15.4125 15.4125C15.0208 15.8042 14.55 16 14 16H2Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,download_done:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
   <path d="M5.544 8.95L13.994 0.499997C14.194 0.299997 14.4315 0.199997 14.7065 0.199997C14.9815 0.199997 15.219 0.299997 15.419 0.499997C15.619 0.699997 15.719 0.937497 15.719 1.2125C15.719 1.4875 15.619 1.725 15.419 1.925L6.244 11.1C6.044 11.3 5.81067 11.4 5.544 11.4C5.27733 11.4 5.044 11.3 4.844 11.1L0.568998 6.825C0.368998 6.625 0.273165 6.3875 0.281498 6.1125C0.289832 5.8375 0.393998 5.6 0.593998 5.4C0.793998 5.2 1.0315 5.1 1.3065 5.1C1.5815 5.1 1.819 5.2 2.019 5.4L5.544 8.95ZM1.994 15.8C1.71066 15.8 1.47317 15.7042 1.2815 15.5125C1.08983 15.3208 0.993998 15.0833 0.993998 14.8C0.993998 14.5167 1.08983 14.2792 1.2815 14.0875C1.47317 13.8958 1.71066 13.8 1.994 13.8H13.994C14.2773 13.8 14.5148 13.8958 14.7065 14.0875C14.8982 14.2792 14.994 14.5167 14.994 14.8C14.994 15.0833 14.8982 15.3208 14.7065 15.5125C14.5148 15.7042 14.2773 15.8 13.994 15.8H1.994Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,upload_file:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
   <path d="M7 12.825V16C7 16.2833 7.09583 16.5208 7.2875 16.7125C7.47917 16.9042 7.71667 17 8 17C8.28333 17 8.52083 16.9042 8.7125 16.7125C8.90417 16.5208 9 16.2833 9 16V12.825L9.9 13.725C10 13.825 10.1125 13.9 10.2375 13.95C10.3625 14 10.4875 14.0208 10.6125 14.0125C10.7375 14.0042 10.8583 13.975 10.975 13.925C11.0917 13.875 11.2 13.8 11.3 13.7C11.4833 13.5 11.5792 13.2667 11.5875 13C11.5958 12.7333 11.5 12.5 11.3 12.3L8.7 9.7C8.6 9.6 8.49167 9.52917 8.375 9.4875C8.25833 9.44583 8.13333 9.425 8 9.425C7.86667 9.425 7.74167 9.44583 7.625 9.4875C7.50833 9.52917 7.4 9.6 7.3 9.7L4.7 12.3C4.5 12.5 4.40417 12.7333 4.4125 13C4.42083 13.2667 4.525 13.5 4.725 13.7C4.925 13.8833 5.15833 13.9792 5.425 13.9875C5.69167 13.9958 5.925 13.9 6.125 13.7L7 12.825ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H9.175C9.44167 0 9.69583 0.05 9.9375 0.15C10.1792 0.25 10.3917 0.391667 10.575 0.575L15.425 5.425C15.6083 5.60833 15.75 5.82083 15.85 6.0625C15.95 6.30417 16 6.55833 16 6.825V18C16 18.55 15.8042 19.0208 15.4125 19.4125C15.0208 19.8042 14.55 20 14 20H2ZM9 6V2H2V18H14V7H10C9.71667 7 9.47917 6.90417 9.2875 6.7125C9.09583 6.52083 9 6.28333 9 6Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,drive_folder_upload:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
   <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H7.175C7.44167 0 7.69583 0.05 7.9375 0.15C8.17917 0.25 8.39167 0.391667 8.575 0.575L10 2H18C18.55 2 19.0208 2.19583 19.4125 2.5875C19.8042 2.97917 20 3.45 20 4V14C20 14.55 19.8042 15.0208 19.4125 15.4125C19.0208 15.8042 18.55 16 18 16H2ZM2 14H18V4H9.175L7.175 2H2V14ZM10 13C10.2833 13 10.5208 12.9042 10.7125 12.7125C10.9042 12.5208 11 12.2833 11 12V8.8L11.9 9.7C12.0833 9.88333 12.3167 9.975 12.6 9.975C12.8833 9.975 13.1167 9.88333 13.3 9.7C13.4833 9.51667 13.575 9.28333 13.575 9C13.575 8.71667 13.4833 8.48333 13.3 8.3L10.7 5.7C10.5 5.5 10.2667 5.4 10 5.4C9.73333 5.4 9.5 5.5 9.3 5.7L6.7 8.3C6.51667 8.48333 6.425 8.71667 6.425 9C6.425 9.28333 6.51667 9.51667 6.7 9.7C6.88333 9.88333 7.11667 9.975 7.4 9.975C7.68333 9.975 7.91667 9.88333 8.1 9.7L9 8.8V12C9 12.2833 9.09583 12.5208 9.2875 12.7125C9.47917 12.9042 9.71667 13 10 13Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,more_vert:`<svg xmlns="http://www.w3.org/2000/svg" width="4" height="16" viewBox="0 0 4 16" fill="none">
   <path d="M2 16C1.45 16 0.979167 15.8042 0.5875 15.4125C0.195833 15.0208 0 14.55 0 14C0 13.45 0.195833 12.9792 0.5875 12.5875C0.979167 12.1958 1.45 12 2 12C2.55 12 3.02083 12.1958 3.4125 12.5875C3.80417 12.9792 4 13.45 4 14C4 14.55 3.80417 15.0208 3.4125 15.4125C3.02083 15.8042 2.55 16 2 16ZM2 10C1.45 10 0.979167 9.80417 0.5875 9.4125C0.195833 9.02083 0 8.55 0 8C0 7.45 0.195833 6.97917 0.5875 6.5875C0.979167 6.19583 1.45 6 2 6C2.55 6 3.02083 6.19583 3.4125 6.5875C3.80417 6.97917 4 7.45 4 8C4 8.55 3.80417 9.02083 3.4125 9.4125C3.02083 9.80417 2.55 10 2 10ZM2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,chevron_back:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
   <path d="M3.6125 8.9935L8.5125 13.8935C8.7125 14.0935 8.80834 14.3268 8.8 14.5935C8.79167 14.8602 8.6875 15.0935 8.4875 15.2935C8.2875 15.4768 8.05417 15.5727 7.7875 15.581C7.52083 15.5893 7.2875 15.4935 7.0875 15.2935L0.487502 8.6935C0.387502 8.5935 0.316668 8.48517 0.275002 8.3685C0.233335 8.25184 0.212502 8.12684 0.212502 7.9935C0.212502 7.86017 0.233335 7.73517 0.275002 7.6185C0.316668 7.50184 0.387502 7.3935 0.487502 7.2935L7.0875 0.693503C7.27083 0.510169 7.5 0.418503 7.775 0.418503C8.05 0.418503 8.2875 0.510169 8.4875 0.693503C8.6875 0.893503 8.7875 1.131 8.7875 1.406C8.7875 1.681 8.6875 1.9185 8.4875 2.1185L3.6125 6.9935H14.7875C15.0708 6.9935 15.3083 7.08934 15.5 7.281C15.6917 7.47267 15.7875 7.71017 15.7875 7.9935C15.7875 8.27684 15.6917 8.51434 15.5 8.706C15.3083 8.89767 15.0708 8.9935 14.7875 8.9935H3.6125Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,chevron_left:`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
   <path d="M3.49999 10.0065L10.85 17.3565C11.1 17.6065 11.2208 17.8981 11.2125 18.2315C11.2042 18.5648 11.075 18.8565 10.825 19.1065C10.575 19.3565 10.2833 19.4815 9.94999 19.4815C9.61666 19.4815 9.32499 19.3565 9.07499 19.1065L1.37499 11.4315C1.17499 11.2315 1.02499 11.0065 0.924994 10.7565C0.824994 10.5065 0.774994 10.2565 0.774994 10.0065C0.774994 9.75645 0.824994 9.50645 0.924994 9.25645C1.02499 9.00645 1.17499 8.78145 1.37499 8.58145L9.07499 0.88145C9.32499 0.63145 9.62083 0.510617 9.96249 0.51895C10.3042 0.527284 10.6 0.65645 10.85 0.90645C11.1 1.15645 11.225 1.44812 11.225 1.78145C11.225 2.11478 11.1 2.40645 10.85 2.65645L3.49999 10.0065Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,chevron_right:`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
   <path d="M8.50001 9.99355L1.15001 2.64355C0.900008 2.39355 0.779174 2.10188 0.787508 1.76855C0.795841 1.43521 0.925008 1.14355 1.17501 0.893548C1.42501 0.643548 1.71667 0.518548 2.05001 0.518548C2.38334 0.518548 2.67501 0.643548 2.92501 0.893548L10.625 8.56855C10.825 8.76855 10.975 8.99355 11.075 9.24355C11.175 9.49355 11.225 9.74355 11.225 9.99355C11.225 10.2435 11.175 10.4935 11.075 10.7435C10.975 10.9935 10.825 11.2185 10.625 11.4185L2.92501 19.1185C2.67501 19.3685 2.37917 19.4894 2.03751 19.481C1.69584 19.4727 1.40001 19.3435 1.15001 19.0935C0.900006 18.8435 0.775006 18.5519 0.775006 18.2185C0.775006 17.8852 0.900006 17.5935 1.15001 17.3435L8.50001 9.99355Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,chevron_down:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
   <path d="M10.0065 8.5L17.3565 1.15C17.6065 0.899999 17.8981 0.779165 18.2315 0.787499C18.5648 0.795832 18.8565 0.924999 19.1065 1.175C19.3565 1.425 19.4815 1.71667 19.4815 2.05C19.4815 2.38333 19.3565 2.675 19.1065 2.925L11.4315 10.625C11.2315 10.825 11.0065 10.975 10.7565 11.075C10.5065 11.175 10.2565 11.225 10.0065 11.225C9.75646 11.225 9.50646 11.175 9.25646 11.075C9.00646 10.975 8.78146 10.825 8.58146 10.625L0.881458 2.925C0.631458 2.675 0.510625 2.37916 0.518958 2.0375C0.527291 1.69583 0.656458 1.4 0.906458 1.15C1.15646 0.899999 1.44812 0.774999 1.78146 0.774999C2.11479 0.774999 2.40646 0.899999 2.65646 1.15L10.0065 8.5Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,chevron_up:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
   <path d="M9.99354 3.5L2.64354 10.85C2.39354 11.1 2.10188 11.2208 1.76854 11.2125C1.43521 11.2042 1.14354 11.075 0.893541 10.825C0.643541 10.575 0.518541 10.2833 0.518541 9.95C0.518541 9.61667 0.643541 9.325 0.893541 9.075L8.56854 1.375C8.76854 1.175 8.99354 1.025 9.24354 0.925002C9.49354 0.825002 9.74354 0.775002 9.99354 0.775002C10.2435 0.775002 10.4935 0.825002 10.7435 0.925002C10.9935 1.025 11.2185 1.175 11.4185 1.375L19.1185 9.075C19.3685 9.325 19.4894 9.62084 19.481 9.9625C19.4727 10.3042 19.3435 10.6 19.0935 10.85C18.8435 11.1 18.5519 11.225 18.2185 11.225C17.8852 11.225 17.5935 11.1 17.3435 10.85L9.99354 3.5Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,check:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" viewBox="0 0 16 12" fill="none">
   <path d="M5.5565 9.1625L14.0315 0.687501C14.2315 0.487501 14.4648 0.387501 14.7315 0.387501C14.9982 0.387501 15.2315 0.487501 15.4315 0.687501C15.6315 0.887501 15.7315 1.125 15.7315 1.4C15.7315 1.675 15.6315 1.9125 15.4315 2.1125L6.2565 11.3125C6.0565 11.5125 5.82317 11.6125 5.5565 11.6125C5.28983 11.6125 5.0565 11.5125 4.8565 11.3125L0.556499 7.0125C0.356499 6.8125 0.260666 6.575 0.268999 6.3C0.277333 6.025 0.381499 5.7875 0.581499 5.5875C0.781499 5.3875 1.019 5.2875 1.294 5.2875C1.569 5.2875 1.8065 5.3875 2.0065 5.5875L5.5565 9.1625Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,calendar_month:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
   <path d="M2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V4C0 3.45 0.195833 2.97917 0.5875 2.5875C0.979167 2.19583 1.45 2 2 2H3V1C3 0.716667 3.09583 0.479167 3.2875 0.2875C3.47917 0.0958333 3.71667 0 4 0C4.28333 0 4.52083 0.0958333 4.7125 0.2875C4.90417 0.479167 5 0.716667 5 1V2H13V1C13 0.716667 13.0958 0.479167 13.2875 0.2875C13.4792 0.0958333 13.7167 0 14 0C14.2833 0 14.5208 0.0958333 14.7125 0.2875C14.9042 0.479167 15 0.716667 15 1V2H16C16.55 2 17.0208 2.19583 17.4125 2.5875C17.8042 2.97917 18 3.45 18 4V18C18 18.55 17.8042 19.0208 17.4125 19.4125C17.0208 19.8042 16.55 20 16 20H2ZM2 18H16V8H2V18ZM2 6H16V4H2V6ZM9 12C8.71667 12 8.47917 11.9042 8.2875 11.7125C8.09583 11.5208 8 11.2833 8 11C8 10.7167 8.09583 10.4792 8.2875 10.2875C8.47917 10.0958 8.71667 10 9 10C9.28333 10 9.52083 10.0958 9.7125 10.2875C9.90417 10.4792 10 10.7167 10 11C10 11.2833 9.90417 11.5208 9.7125 11.7125C9.52083 11.9042 9.28333 12 9 12ZM5 12C4.71667 12 4.47917 11.9042 4.2875 11.7125C4.09583 11.5208 4 11.2833 4 11C4 10.7167 4.09583 10.4792 4.2875 10.2875C4.47917 10.0958 4.71667 10 5 10C5.28333 10 5.52083 10.0958 5.7125 10.2875C5.90417 10.4792 6 10.7167 6 11C6 11.2833 5.90417 11.5208 5.7125 11.7125C5.52083 11.9042 5.28333 12 5 12ZM13 12C12.7167 12 12.4792 11.9042 12.2875 11.7125C12.0958 11.5208 12 11.2833 12 11C12 10.7167 12.0958 10.4792 12.2875 10.2875C12.4792 10.0958 12.7167 10 13 10C13.2833 10 13.5208 10.0958 13.7125 10.2875C13.9042 10.4792 14 10.7167 14 11C14 11.2833 13.9042 11.5208 13.7125 11.7125C13.5208 11.9042 13.2833 12 13 12ZM9 16C8.71667 16 8.47917 15.9042 8.2875 15.7125C8.09583 15.5208 8 15.2833 8 15C8 14.7167 8.09583 14.4792 8.2875 14.2875C8.47917 14.0958 8.71667 14 9 14C9.28333 14 9.52083 14.0958 9.7125 14.2875C9.90417 14.4792 10 14.7167 10 15C10 15.2833 9.90417 15.5208 9.7125 15.7125C9.52083 15.9042 9.28333 16 9 16ZM5 16C4.71667 16 4.47917 15.9042 4.2875 15.7125C4.09583 15.5208 4 15.2833 4 15C4 14.7167 4.09583 14.4792 4.2875 14.2875C4.47917 14.0958 4.71667 14 5 14C5.28333 14 5.52083 14.0958 5.7125 14.2875C5.90417 14.4792 6 14.7167 6 15C6 15.2833 5.90417 15.5208 5.7125 15.7125C5.52083 15.9042 5.28333 16 5 16ZM13 16C12.7167 16 12.4792 15.9042 12.2875 15.7125C12.0958 15.5208 12 15.2833 12 15C12 14.7167 12.0958 14.4792 12.2875 14.2875C12.4792 14.0958 12.7167 14 13 14C13.2833 14 13.5208 14.0958 13.7125 14.2875C13.9042 14.4792 14 14.7167 14 15C14 15.2833 13.9042 15.5208 13.7125 15.7125C13.5208 15.9042 13.2833 16 13 16Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,check_circle:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,cancel:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M10 11.4L12.9 14.3C13.0833 14.4833 13.3167 14.575 13.6 14.575C13.8833 14.575 14.1167 14.4833 14.3 14.3C14.4833 14.1167 14.575 13.8833 14.575 13.6C14.575 13.3167 14.4833 13.0833 14.3 12.9L11.4 10L14.3 7.1C14.4833 6.91667 14.575 6.68333 14.575 6.4C14.575 6.11667 14.4833 5.88333 14.3 5.7C14.1167 5.51667 13.8833 5.425 13.6 5.425C13.3167 5.425 13.0833 5.51667 12.9 5.7L10 8.6L7.1 5.7C6.91667 5.51667 6.68333 5.425 6.4 5.425C6.11667 5.425 5.88333 5.51667 5.7 5.7C5.51667 5.88333 5.425 6.11667 5.425 6.4C5.425 6.68333 5.51667 6.91667 5.7 7.1L8.6 10L5.7 12.9C5.51667 13.0833 5.425 13.3167 5.425 13.6C5.425 13.8833 5.51667 14.1167 5.7 14.3C5.88333 14.4833 6.11667 14.575 6.4 14.575C6.68333 14.575 6.91667 14.4833 7.1 14.3L10 11.4ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,cancel_filled:`<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
   <path d="M10.9242 12.3032L13.8242 15.2032C14.0075 15.3866 14.2408 15.4782 14.5242 15.4782C14.8075 15.4782 15.0408 15.3866 15.2242 15.2032C15.4075 15.0199 15.4992 14.7866 15.4992 14.5032C15.4992 14.2199 15.4075 13.9866 15.2242 13.8032L12.3242 10.9032L15.2242 8.00324C15.4075 7.81991 15.4992 7.58658 15.4992 7.30324C15.4992 7.01991 15.4075 6.78658 15.2242 6.60324C15.0408 6.41991 14.8075 6.32824 14.5242 6.32824C14.2408 6.32824 14.0075 6.41991 13.8242 6.60324L10.9242 9.50324L8.02416 6.60324C7.84083 6.41991 7.6075 6.32824 7.32416 6.32824C7.04083 6.32824 6.8075 6.41991 6.62416 6.60324C6.44083 6.78658 6.34916 7.01991 6.34916 7.30324C6.34916 7.58658 6.44083 7.81991 6.62416 8.00324L9.52416 10.9032L6.62416 13.8032C6.44083 13.9866 6.34916 14.2199 6.34916 14.5032C6.34916 14.7866 6.44083 15.0199 6.62416 15.2032C6.8075 15.3866 7.04083 15.4782 7.32416 15.4782C7.6075 15.4782 7.84083 15.3866 8.02416 15.2032L10.9242 12.3032ZM10.9242 20.9032C9.54083 20.9032 8.24083 20.6407 7.02416 20.1157C5.8075 19.5907 4.74916 18.8782 3.84916 17.9782C2.94916 17.0782 2.23666 16.0199 1.71166 14.8032C1.18666 13.5866 0.924164 12.2866 0.924164 10.9032C0.924164 9.51991 1.18666 8.21991 1.71166 7.00324C2.23666 5.78658 2.94916 4.72824 3.84916 3.82824C4.74916 2.92824 5.8075 2.21574 7.02416 1.69074C8.24083 1.16574 9.54083 0.903244 10.9242 0.903244C12.3075 0.903244 13.6075 1.16574 14.8242 1.69074C16.0408 2.21574 17.0992 2.92824 17.9992 3.82824C18.8992 4.72824 19.6117 5.78658 20.1367 7.00324C20.6617 8.21991 20.9242 9.51991 20.9242 10.9032C20.9242 12.2866 20.6617 13.5866 20.1367 14.8032C19.6117 16.0199 18.8992 17.0782 17.9992 17.9782C17.0992 18.8782 16.0408 19.5907 14.8242 20.1157C13.6075 20.6407 12.3075 20.9032 10.9242 20.9032Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,close:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
   <path d="M7 8.4L2.1 13.3C1.91667 13.4833 1.68334 13.575 1.4 13.575C1.11667 13.575 0.883336 13.4833 0.700003 13.3C0.51667 13.1167 0.425003 12.8833 0.425003 12.6C0.425003 12.3167 0.51667 12.0833 0.700003 11.9L5.6 7L0.700003 2.1C0.51667 1.91667 0.425003 1.68334 0.425003 1.4C0.425003 1.11667 0.51667 0.883336 0.700003 0.700003C0.883336 0.51667 1.11667 0.425003 1.4 0.425003C1.68334 0.425003 1.91667 0.51667 2.1 0.700003L7 5.6L11.9 0.700003C12.0833 0.51667 12.3167 0.425003 12.6 0.425003C12.8833 0.425003 13.1167 0.51667 13.3 0.700003C13.4833 0.883336 13.575 1.11667 13.575 1.4C13.575 1.68334 13.4833 1.91667 13.3 2.1L8.4 7L13.3 11.9C13.4833 12.0833 13.575 12.3167 13.575 12.6C13.575 12.8833 13.4833 13.1167 13.3 13.3C13.1167 13.4833 12.8833 13.575 12.6 13.575C12.3167 13.575 12.0833 13.4833 11.9 13.3L7 8.4Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,language:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M10 20C8.63333 20 7.34167 19.7375 6.125 19.2125C4.90833 18.6875 3.84583 17.9708 2.9375 17.0625C2.02917 16.1542 1.3125 15.0917 0.7875 13.875C0.2625 12.6583 0 11.3667 0 10C0 8.61667 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.63333 0 10 0C11.3833 0 12.6792 0.2625 13.8875 0.7875C15.0958 1.3125 16.1542 2.02917 17.0625 2.9375C17.9708 3.84583 18.6875 4.90417 19.2125 6.1125C19.7375 7.32083 20 8.61667 20 10C20 11.3667 19.7375 12.6583 19.2125 13.875C18.6875 15.0917 17.9708 16.1542 17.0625 17.0625C16.1542 17.9708 15.0958 18.6875 13.8875 19.2125C12.6792 19.7375 11.3833 20 10 20ZM10 17.95C10.4333 17.35 10.8083 16.725 11.125 16.075C11.4417 15.425 11.7 14.7333 11.9 14H8.1C8.3 14.7333 8.55833 15.425 8.875 16.075C9.19167 16.725 9.56667 17.35 10 17.95ZM7.4 17.55C7.1 17 6.8375 16.4292 6.6125 15.8375C6.3875 15.2458 6.2 14.6333 6.05 14H3.1C3.58333 14.8333 4.1875 15.5583 4.9125 16.175C5.6375 16.7917 6.46667 17.25 7.4 17.55ZM12.6 17.55C13.5333 17.25 14.3625 16.7917 15.0875 16.175C15.8125 15.5583 16.4167 14.8333 16.9 14H13.95C13.8 14.6333 13.6125 15.2458 13.3875 15.8375C13.1625 16.4292 12.9 17 12.6 17.55ZM2.25 12H5.65C5.6 11.6667 5.5625 11.3375 5.5375 11.0125C5.5125 10.6875 5.5 10.35 5.5 10C5.5 9.65 5.5125 9.3125 5.5375 8.9875C5.5625 8.6625 5.6 8.33333 5.65 8H2.25C2.16667 8.33333 2.10417 8.6625 2.0625 8.9875C2.02083 9.3125 2 9.65 2 10C2 10.35 2.02083 10.6875 2.0625 11.0125C2.10417 11.3375 2.16667 11.6667 2.25 12ZM7.65 12H12.35C12.4 11.6667 12.4375 11.3375 12.4625 11.0125C12.4875 10.6875 12.5 10.35 12.5 10C12.5 9.65 12.4875 9.3125 12.4625 8.9875C12.4375 8.6625 12.4 8.33333 12.35 8H7.65C7.6 8.33333 7.5625 8.6625 7.5375 8.9875C7.5125 9.3125 7.5 9.65 7.5 10C7.5 10.35 7.5125 10.6875 7.5375 11.0125C7.5625 11.3375 7.6 11.6667 7.65 12ZM14.35 12H17.75C17.8333 11.6667 17.8958 11.3375 17.9375 11.0125C17.9792 10.6875 18 10.35 18 10C18 9.65 17.9792 9.3125 17.9375 8.9875C17.8958 8.6625 17.8333 8.33333 17.75 8H14.35C14.4 8.33333 14.4375 8.6625 14.4625 8.9875C14.4875 9.3125 14.5 9.65 14.5 10C14.5 10.35 14.4875 10.6875 14.4625 11.0125C14.4375 11.3375 14.4 11.6667 14.35 12ZM13.95 6H16.9C16.4167 5.16667 15.8125 4.44167 15.0875 3.825C14.3625 3.20833 13.5333 2.75 12.6 2.45C12.9 3 13.1625 3.57083 13.3875 4.1625C13.6125 4.75417 13.8 5.36667 13.95 6ZM8.1 6H11.9C11.7 5.26667 11.4417 4.575 11.125 3.925C10.8083 3.275 10.4333 2.65 10 2.05C9.56667 2.65 9.19167 3.275 8.875 3.925C8.55833 4.575 8.3 5.26667 8.1 6ZM3.1 6H6.05C6.2 5.36667 6.3875 4.75417 6.6125 4.1625C6.8375 3.57083 7.1 3 7.4 2.45C6.46667 2.75 5.6375 3.20833 4.9125 3.825C4.1875 4.44167 3.58333 5.16667 3.1 6Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,search:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
   <path d="M6.71249 13.2125C4.89583 13.2125 3.35833 12.5833 2.09999 11.325C0.841661 10.0667 0.212494 8.52917 0.212494 6.7125C0.212494 4.89583 0.841661 3.35834 2.09999 2.1C3.35833 0.841668 4.89583 0.212502 6.71249 0.212502C8.52916 0.212502 10.0667 0.841668 11.325 2.1C12.5833 3.35834 13.2125 4.89583 13.2125 6.7125C13.2125 7.44584 13.0958 8.1375 12.8625 8.7875C12.6292 9.4375 12.3125 10.0125 11.9125 10.5125L17.5125 16.1125C17.6958 16.2958 17.7875 16.5292 17.7875 16.8125C17.7875 17.0958 17.6958 17.3292 17.5125 17.5125C17.3292 17.6958 17.0958 17.7875 16.8125 17.7875C16.5292 17.7875 16.2958 17.6958 16.1125 17.5125L10.5125 11.9125C10.0125 12.3125 9.43749 12.6292 8.78749 12.8625C8.13749 13.0958 7.44583 13.2125 6.71249 13.2125ZM6.71249 11.2125C7.96249 11.2125 9.02499 10.775 9.89999 9.9C10.775 9.025 11.2125 7.9625 11.2125 6.7125C11.2125 5.4625 10.775 4.4 9.89999 3.525C9.02499 2.65 7.96249 2.2125 6.71249 2.2125C5.46249 2.2125 4.39999 2.65 3.52499 3.525C2.64999 4.4 2.21249 5.4625 2.21249 6.7125C2.21249 7.9625 2.64999 9.025 3.52499 9.9C4.39999 10.775 5.46249 11.2125 6.71249 11.2125Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,menu:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" fill="none">
   <path d="M1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10H17C17.2833 10 17.5208 10.0958 17.7125 10.2875C17.9042 10.4792 18 10.7167 18 11C18 11.2833 17.9042 11.5208 17.7125 11.7125C17.5208 11.9042 17.2833 12 17 12H1ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H17C17.2833 5 17.5208 5.09583 17.7125 5.2875C17.9042 5.47917 18 5.71667 18 6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7H1ZM1 2C0.716667 2 0.479167 1.90417 0.2875 1.7125C0.0958333 1.52083 0 1.28333 0 1C0 0.716667 0.0958333 0.479167 0.2875 0.2875C0.479167 0.0958333 0.716667 0 1 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1C18 1.28333 17.9042 1.52083 17.7125 1.7125C17.5208 1.90417 17.2833 2 17 2H1Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,visibility:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
   <path d="M11 12.5C12.25 12.5 13.3125 12.0625 14.1875 11.1875C15.0625 10.3125 15.5 9.25 15.5 8C15.5 6.75 15.0625 5.6875 14.1875 4.8125C13.3125 3.9375 12.25 3.5 11 3.5C9.75 3.5 8.6875 3.9375 7.8125 4.8125C6.9375 5.6875 6.5 6.75 6.5 8C6.5 9.25 6.9375 10.3125 7.8125 11.1875C8.6875 12.0625 9.75 12.5 11 12.5ZM11 10.7C10.25 10.7 9.6125 10.4375 9.0875 9.9125C8.5625 9.3875 8.3 8.75 8.3 8C8.3 7.25 8.5625 6.6125 9.0875 6.0875C9.6125 5.5625 10.25 5.3 11 5.3C11.75 5.3 12.3875 5.5625 12.9125 6.0875C13.4375 6.6125 13.7 7.25 13.7 8C13.7 8.75 13.4375 9.3875 12.9125 9.9125C12.3875 10.4375 11.75 10.7 11 10.7ZM11 15.5C8.56667 15.5 6.35 14.8208 4.35 13.4625C2.35 12.1042 0.9 10.2833 0 8C0.9 5.71667 2.35 3.89583 4.35 2.5375C6.35 1.17917 8.56667 0.5 11 0.5C13.4333 0.5 15.65 1.17917 17.65 2.5375C19.65 3.89583 21.1 5.71667 22 8C21.1 10.2833 19.65 12.1042 17.65 13.4625C15.65 14.8208 13.4333 15.5 11 15.5ZM11 13.5C12.8833 13.5 14.6125 13.0042 16.1875 12.0125C17.7625 11.0208 18.9667 9.68333 19.8 8C18.9667 6.31667 17.7625 4.97917 16.1875 3.9875C14.6125 2.99583 12.8833 2.5 11 2.5C9.11667 2.5 7.3875 2.99583 5.8125 3.9875C4.2375 4.97917 3.03333 6.31667 2.2 8C3.03333 9.68333 4.2375 11.0208 5.8125 12.0125C7.3875 13.0042 9.11667 13.5 11 13.5Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,visibility_off:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
   <path d="M15.1 10.6L13.65 9.15C13.8 8.36667 13.575 7.63333 12.975 6.95C12.375 6.26667 11.6 6 10.65 6.15L9.2 4.7C9.48333 4.56667 9.77083 4.46667 10.0625 4.4C10.3542 4.33333 10.6667 4.3 11 4.3C12.25 4.3 13.3125 4.7375 14.1875 5.6125C15.0625 6.4875 15.5 7.55 15.5 8.8C15.5 9.13333 15.4667 9.44583 15.4 9.7375C15.3333 10.0292 15.2333 10.3167 15.1 10.6ZM18.3 13.75L16.85 12.35C17.4833 11.8667 18.0458 11.3375 18.5375 10.7625C19.0292 10.1875 19.45 9.53333 19.8 8.8C18.9667 7.11667 17.7708 5.77917 16.2125 4.7875C14.6542 3.79583 12.9167 3.3 11 3.3C10.5167 3.3 10.0417 3.33333 9.575 3.4C9.10833 3.46667 8.65 3.56667 8.2 3.7L6.65 2.15C7.33333 1.86667 8.03333 1.65417 8.75 1.5125C9.46667 1.37083 10.2167 1.3 11 1.3C13.5167 1.3 15.7583 1.99583 17.725 3.3875C19.6917 4.77917 21.1167 6.58333 22 8.8C21.6167 9.78333 21.1125 10.6958 20.4875 11.5375C19.8625 12.3792 19.1333 13.1167 18.3 13.75ZM18.8 19.9L14.6 15.75C14.0167 15.9333 13.4292 16.0708 12.8375 16.1625C12.2458 16.2542 11.6333 16.3 11 16.3C8.48333 16.3 6.24167 15.6042 4.275 14.2125C2.30833 12.8208 0.883333 11.0167 0 8.8C0.35 7.91667 0.791667 7.09583 1.325 6.3375C1.85833 5.57917 2.46667 4.9 3.15 4.3L0.4 1.5L1.8 0.0999985L20.2 18.5L18.8 19.9ZM4.55 5.7C4.06667 6.13333 3.625 6.60833 3.225 7.125C2.825 7.64167 2.48333 8.2 2.2 8.8C3.03333 10.4833 4.22917 11.8208 5.7875 12.8125C7.34583 13.8042 9.08333 14.3 11 14.3C11.3333 14.3 11.6583 14.2792 11.975 14.2375C12.2917 14.1958 12.6167 14.15 12.95 14.1L12.05 13.15C11.8667 13.2 11.6917 13.2375 11.525 13.2625C11.3583 13.2875 11.1833 13.3 11 13.3C9.75 13.3 8.6875 12.8625 7.8125 11.9875C6.9375 11.1125 6.5 10.05 6.5 8.8C6.5 8.61667 6.5125 8.44167 6.5375 8.275C6.5625 8.10833 6.6 7.93333 6.65 7.75L4.55 5.7Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,thumb_up:`<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
   <path d="M19 7.00001C19.5333 7.00001 20 7.20001 20.4 7.60001C20.8 8.00001 21 8.46668 21 9.00001V11C21 11.1167 20.9875 11.2417 20.9625 11.375C20.9375 11.5083 20.9 11.6333 20.85 11.75L17.85 18.8C17.7 19.1333 17.45 19.4167 17.1 19.65C16.75 19.8833 16.3833 20 16 20H8C7.45 20 6.97917 19.8042 6.5875 19.4125C6.19583 19.0208 6 18.55 6 18V7.82501C6 7.55834 6.05417 7.30418 6.1625 7.06251C6.27083 6.82084 6.41667 6.60834 6.6 6.42501L12.025 1.02501C12.275 0.791677 12.5708 0.65001 12.9125 0.60001C13.2542 0.55001 13.5833 0.608344 13.9 0.77501C14.2167 0.941677 14.4458 1.17501 14.5875 1.47501C14.7292 1.77501 14.7583 2.08334 14.675 2.40001L13.55 7.00001H19ZM2 20C1.45 20 0.979167 19.8042 0.5875 19.4125C0.195833 19.0208 0 18.55 0 18V9.00001C0 8.45001 0.195833 7.97918 0.5875 7.58751C0.979167 7.19584 1.45 7.00001 2 7.00001C2.55 7.00001 3.02083 7.19584 3.4125 7.58751C3.80417 7.97918 4 8.45001 4 9.00001V18C4 18.55 3.80417 19.0208 3.4125 19.4125C3.02083 19.8042 2.55 20 2 20Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,thumb_down:`<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
   <path d="M2 13C1.46667 13 1 12.8 0.6 12.4C0.2 12 0 11.5333 0 11V9C0 8.88333 0.0125 8.75833 0.0375 8.625C0.0625 8.49167 0.1 8.36667 0.15 8.25L3.15 1.2C3.3 0.866667 3.55 0.583333 3.9 0.35C4.25 0.116667 4.61667 0 5 0H13C13.55 0 14.0208 0.195833 14.4125 0.5875C14.8042 0.979167 15 1.45 15 2V12.175C15 12.4417 14.9458 12.6958 14.8375 12.9375C14.7292 13.1792 14.5833 13.3917 14.4 13.575L8.975 18.975C8.725 19.2083 8.42917 19.35 8.0875 19.4C7.74583 19.45 7.41667 19.3917 7.1 19.225C6.78333 19.0583 6.55417 18.825 6.4125 18.525C6.27083 18.225 6.24167 17.9167 6.325 17.6L7.45 13H2ZM19 0C19.55 0 20.0208 0.195833 20.4125 0.5875C20.8042 0.979167 21 1.45 21 2V11C21 11.55 20.8042 12.0208 20.4125 12.4125C20.0208 12.8042 19.55 13 19 13C18.45 13 17.9792 12.8042 17.5875 12.4125C17.1958 12.0208 17 11.55 17 11V2C17 1.45 17.1958 0.979167 17.5875 0.5875C17.9792 0.195833 18.45 0 19 0Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,account_circle:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M3.85 15.1C4.7 14.45 5.65 13.9375 6.7 13.5625C7.75 13.1875 8.85 13 10 13C11.15 13 12.25 13.1875 13.3 13.5625C14.35 13.9375 15.3 14.45 16.15 15.1C16.7333 14.4167 17.1875 13.6417 17.5125 12.775C17.8375 11.9083 18 10.9833 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.9833 2.1625 11.9083 2.4875 12.775C2.8125 13.6417 3.26667 14.4167 3.85 15.1ZM10 11C9.01667 11 8.1875 10.6625 7.5125 9.9875C6.8375 9.3125 6.5 8.48333 6.5 7.5C6.5 6.51667 6.8375 5.6875 7.5125 5.0125C8.1875 4.3375 9.01667 4 10 4C10.9833 4 11.8125 4.3375 12.4875 5.0125C13.1625 5.6875 13.5 6.51667 13.5 7.5C13.5 8.48333 13.1625 9.3125 12.4875 9.9875C11.8125 10.6625 10.9833 11 10 11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,help:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M9.95 16C10.3 16 10.5958 15.8792 10.8375 15.6375C11.0792 15.3958 11.2 15.1 11.2 14.75C11.2 14.4 11.0792 14.1042 10.8375 13.8625C10.5958 13.6208 10.3 13.5 9.95 13.5C9.6 13.5 9.30417 13.6208 9.0625 13.8625C8.82083 14.1042 8.7 14.4 8.7 14.75C8.7 15.1 8.82083 15.3958 9.0625 15.6375C9.30417 15.8792 9.6 16 9.95 16ZM9.05 12.15H10.9C10.9 11.6 10.9625 11.1667 11.0875 10.85C11.2125 10.5333 11.5667 10.1 12.15 9.55C12.5833 9.11667 12.925 8.70417 13.175 8.3125C13.425 7.92083 13.55 7.45 13.55 6.9C13.55 5.96667 13.2083 5.25 12.525 4.75C11.8417 4.25 11.0333 4 10.1 4C9.15 4 8.37917 4.25 7.7875 4.75C7.19583 5.25 6.78333 5.85 6.55 6.55L8.2 7.2C8.28333 6.9 8.47083 6.575 8.7625 6.225C9.05417 5.875 9.5 5.7 10.1 5.7C10.6333 5.7 11.0333 5.84583 11.3 6.1375C11.5667 6.42917 11.7 6.75 11.7 7.1C11.7 7.43333 11.6 7.74583 11.4 8.0375C11.2 8.32917 10.95 8.6 10.65 8.85C9.91667 9.5 9.46667 9.99167 9.3 10.325C9.13333 10.6583 9.05 11.2667 9.05 12.15ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,share:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
   <path d="M15 20C14.1667 20 13.4583 19.7083 12.875 19.125C12.2917 18.5417 12 17.8333 12 17C12 16.9 12.025 16.6667 12.075 16.3L5.05 12.2C4.78333 12.45 4.475 12.6458 4.125 12.7875C3.775 12.9292 3.4 13 3 13C2.16667 13 1.45833 12.7083 0.875 12.125C0.291667 11.5417 0 10.8333 0 10C0 9.16667 0.291667 8.45833 0.875 7.875C1.45833 7.29167 2.16667 7 3 7C3.4 7 3.775 7.07083 4.125 7.2125C4.475 7.35417 4.78333 7.55 5.05 7.8L12.075 3.7C12.0417 3.58333 12.0208 3.47083 12.0125 3.3625C12.0042 3.25417 12 3.13333 12 3C12 2.16667 12.2917 1.45833 12.875 0.875C13.4583 0.291667 14.1667 0 15 0C15.8333 0 16.5417 0.291667 17.125 0.875C17.7083 1.45833 18 2.16667 18 3C18 3.83333 17.7083 4.54167 17.125 5.125C16.5417 5.70833 15.8333 6 15 6C14.6 6 14.225 5.92917 13.875 5.7875C13.525 5.64583 13.2167 5.45 12.95 5.2L5.925 9.3C5.95833 9.41667 5.97917 9.52917 5.9875 9.6375C5.99583 9.74583 6 9.86667 6 10C6 10.1333 5.99583 10.2542 5.9875 10.3625C5.97917 10.4708 5.95833 10.5833 5.925 10.7L12.95 14.8C13.2167 14.55 13.525 14.3542 13.875 14.2125C14.225 14.0708 14.6 14 15 14C15.8333 14 16.5417 14.2917 17.125 14.875C17.7083 15.4583 18 16.1667 18 17C18 17.8333 17.7083 18.5417 17.125 19.125C16.5417 19.7083 15.8333 20 15 20ZM15 18C15.2833 18 15.5208 17.9042 15.7125 17.7125C15.9042 17.5208 16 17.2833 16 17C16 16.7167 15.9042 16.4792 15.7125 16.2875C15.5208 16.0958 15.2833 16 15 16C14.7167 16 14.4792 16.0958 14.2875 16.2875C14.0958 16.4792 14 16.7167 14 17C14 17.2833 14.0958 17.5208 14.2875 17.7125C14.4792 17.9042 14.7167 18 15 18ZM3 11C3.28333 11 3.52083 10.9042 3.7125 10.7125C3.90417 10.5208 4 10.2833 4 10C4 9.71667 3.90417 9.47917 3.7125 9.2875C3.52083 9.09583 3.28333 9 3 9C2.71667 9 2.47917 9.09583 2.2875 9.2875C2.09583 9.47917 2 9.71667 2 10C2 10.2833 2.09583 10.5208 2.2875 10.7125C2.47917 10.9042 2.71667 11 3 11ZM15 4C15.2833 4 15.5208 3.90417 15.7125 3.7125C15.9042 3.52083 16 3.28333 16 3C16 2.71667 15.9042 2.47917 15.7125 2.2875C15.5208 2.09583 15.2833 2 15 2C14.7167 2 14.4792 2.09583 14.2875 2.2875C14.0958 2.47917 14 2.71667 14 3C14 3.28333 14.0958 3.52083 14.2875 3.7125C14.4792 3.90417 14.7167 4 15 4Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,info:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
 <path d="M9 15H11V9H9V15ZM10 7C10.2833 7 10.5208 6.90417 10.7125 6.7125C10.9042 6.52083 11 6.28333 11 6C11 5.71667 10.9042 5.47917 10.7125 5.2875C10.5208 5.09583 10.2833 5 10 5C9.71667 5 9.47917 5.09583 9.2875 5.2875C9.09583 5.47917 9 5.71667 9 6C9 6.28333 9.09583 6.52083 9.2875 6.7125C9.47917 6.90417 9.71667 7 10 7ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,warning:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
 <path d="M1.725 18C1.54167 18 1.375 17.9542 1.225 17.8625C1.075 17.7708 0.958337 17.65 0.875003 17.5C0.79167 17.35 0.745837 17.1875 0.737503 17.0125C0.72917 16.8375 0.775003 16.6667 0.875003 16.5L10.125 0.5C10.225 0.333333 10.3542 0.208333 10.5125 0.125C10.6708 0.0416667 10.8333 0 11 0C11.1667 0 11.3292 0.0416667 11.4875 0.125C11.6458 0.208333 11.775 0.333333 11.875 0.5L21.125 16.5C21.225 16.6667 21.2708 16.8375 21.2625 17.0125C21.2542 17.1875 21.2083 17.35 21.125 17.5C21.0417 17.65 20.925 17.7708 20.775 17.8625C20.625 17.9542 20.4583 18 20.275 18H1.725ZM3.45 16H18.55L11 3L3.45 16ZM11 15C11.2833 15 11.5208 14.9042 11.7125 14.7125C11.9042 14.5208 12 14.2833 12 14C12 13.7167 11.9042 13.4792 11.7125 13.2875C11.5208 13.0958 11.2833 13 11 13C10.7167 13 10.4792 13.0958 10.2875 13.2875C10.0958 13.4792 10 13.7167 10 14C10 14.2833 10.0958 14.5208 10.2875 14.7125C10.4792 14.9042 10.7167 15 11 15ZM11 12C11.2833 12 11.5208 11.9042 11.7125 11.7125C11.9042 11.5208 12 11.2833 12 11V8C12 7.71667 11.9042 7.47917 11.7125 7.2875C11.5208 7.09583 11.2833 7 11 7C10.7167 7 10.4792 7.09583 10.2875 7.2875C10.0958 7.47917 10 7.71667 10 8V11C10 11.2833 10.0958 11.5208 10.2875 11.7125C10.4792 11.9042 10.7167 12 11 12Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,error:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
 <path d="M10 15C10.2833 15 10.5208 14.9042 10.7125 14.7125C10.9042 14.5208 11 14.2833 11 14C11 13.7167 10.9042 13.4792 10.7125 13.2875C10.5208 13.0958 10.2833 13 10 13C9.71667 13 9.47917 13.0958 9.2875 13.2875C9.09583 13.4792 9 13.7167 9 14C9 14.2833 9.09583 14.5208 9.2875 14.7125C9.47917 14.9042 9.71667 15 10 15ZM9 11H11V5H9V11ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM10 18C12.2333 18 14.125 17.225 15.675 15.675C17.225 14.125 18 12.2333 18 10C18 7.76667 17.225 5.875 15.675 4.325C14.125 2.775 12.2333 2 10 2C7.76667 2 5.875 2.775 4.325 4.325C2.775 5.875 2 7.76667 2 10C2 12.2333 2.775 14.125 4.325 15.675C5.875 17.225 7.76667 18 10 18Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,emergency:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
   <path d="M11 21.025C10.7333 21.025 10.4791 20.975 10.2375 20.875C9.99581 20.775 9.77498 20.6333 9.57498 20.45L1.54998 12.425C1.36664 12.225 1.22498 12.0041 1.12498 11.7625C1.02498 11.5208 0.974976 11.2666 0.974976 11C0.974976 10.7333 1.02498 10.475 1.12498 10.225C1.22498 9.97498 1.36664 9.75831 1.54998 9.57498L9.57498 1.54998C9.77498 1.34998 9.99581 1.20414 10.2375 1.11248C10.4791 1.02081 10.7333 0.974976 11 0.974976C11.2666 0.974976 11.525 1.02081 11.775 1.11248C12.025 1.20414 12.2416 1.34998 12.425 1.54998L20.45 9.57498C20.65 9.75831 20.7958 9.97498 20.8875 10.225C20.9791 10.475 21.025 10.7333 21.025 11C21.025 11.2666 20.9791 11.5208 20.8875 11.7625C20.7958 12.0041 20.65 12.225 20.45 12.425L12.425 20.45C12.2416 20.6333 12.025 20.775 11.775 20.875C11.525 20.975 11.2666 21.025 11 21.025ZM11 19.025L19.025 11L11 2.97498L2.97498 11L11 19.025ZM9.99998 12H12V5.99998H9.99998V12ZM11 15C11.2833 15 11.5208 14.9041 11.7125 14.7125C11.9041 14.5208 12 14.2833 12 14C12 13.7166 11.9041 13.4791 11.7125 13.2875C11.5208 13.0958 11.2833 13 11 13C10.7166 13 10.4791 13.0958 10.2875 13.2875C10.0958 13.4791 9.99998 13.7166 9.99998 14C9.99998 14.2833 10.0958 14.5208 10.2875 14.7125C10.4791 14.9041 10.7166 15 11 15Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_facebook:`<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
   <path d="M10.0367 0C4.49365 0 0 4.49365 0 10.0367C0 14.7436 3.24066 18.6932 7.61226 19.778V13.104H5.54269V10.0367H7.61226V8.7151C7.61226 5.29899 9.15832 3.7156 12.5122 3.7156C13.1481 3.7156 14.2453 3.84046 14.6942 3.96491V6.74509C14.4573 6.7202 14.0458 6.70775 13.5347 6.70775C11.8891 6.70775 11.2532 7.33123 11.2532 8.95196V10.0367H14.5316L13.9683 13.104H11.2532V20C16.223 19.3998 20.0739 15.1683 20.0739 10.0367C20.0735 4.49365 15.5798 0 10.0367 0Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_instagram:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M10.002 1.80113C12.6744 1.80113 12.9908 1.81285 14.0418 1.85974C15.0186 1.90272 15.546 2.06681 15.8976 2.20356C16.3626 2.38328 16.6986 2.60207 17.0463 2.9498C17.3979 3.30143 17.6128 3.63352 17.7925 4.09846C17.9293 4.45009 18.0934 4.98144 18.1364 5.95429C18.1832 7.00918 18.195 7.32565 18.195 9.99414C18.195 12.6665 18.1832 12.983 18.1364 14.034C18.0934 15.0107 17.9293 15.5382 17.7925 15.8898C17.6128 16.3548 17.394 16.6908 17.0463 17.0385C16.6947 17.3901 16.3626 17.605 15.8976 17.7847C15.546 17.9215 15.0147 18.0856 14.0418 18.1285C12.9869 18.1754 12.6704 18.1871 10.002 18.1871C7.32956 18.1871 7.01309 18.1754 5.9621 18.1285C4.98535 18.0856 4.4579 17.9215 4.10627 17.7847C3.64134 17.605 3.30533 17.3862 2.95761 17.0385C2.60598 16.6869 2.39109 16.3548 2.21137 15.8898C2.07462 15.5382 1.91053 15.0068 1.86755 14.034C1.82067 12.9791 1.80895 12.6626 1.80895 9.99414C1.80895 7.32174 1.82067 7.00527 1.86755 5.95429C1.91053 4.97753 2.07462 4.45009 2.21137 4.09846C2.39109 3.63352 2.60988 3.29752 2.95761 2.9498C3.30924 2.59816 3.64134 2.38328 4.10627 2.20356C4.4579 2.06681 4.98926 1.90272 5.9621 1.85974C7.01309 1.81285 7.32956 1.80113 10.002 1.80113ZM10.002 0C7.28658 0 6.94667 0.011721 5.88006 0.0586052C4.81735 0.105489 4.08674 0.277398 3.4538 0.52354C2.79351 0.781403 2.23481 1.12131 1.68002 1.68002C1.12131 2.23481 0.781403 2.79351 0.52354 3.44989C0.277398 4.08674 0.105489 4.81344 0.0586052 5.87615C0.011721 6.94667 0 7.28658 0 10.002C0 12.7173 0.011721 13.0572 0.0586052 14.1239C0.105489 15.1866 0.277398 15.9172 0.52354 16.5501C0.781403 17.2104 1.12131 17.7691 1.68002 18.3239C2.23481 18.8787 2.79351 19.2225 3.44989 19.4765C4.08674 19.7226 4.81344 19.8945 5.87615 19.9414C6.94276 19.9883 7.28267 20 9.99805 20C12.7134 20 13.0533 19.9883 14.1199 19.9414C15.1827 19.8945 15.9133 19.7226 16.5462 19.4765C17.2026 19.2225 17.7613 18.8787 18.3161 18.3239C18.8709 17.7691 19.2147 17.2104 19.4686 16.554C19.7148 15.9172 19.8867 15.1905 19.9336 14.1278C19.9805 13.0611 19.9922 12.7212 19.9922 10.0059C19.9922 7.29049 19.9805 6.95058 19.9336 5.88396C19.8867 4.82125 19.7148 4.09064 19.4686 3.45771C19.2225 2.79351 18.8826 2.23481 18.3239 1.68002C17.7691 1.12522 17.2104 0.781403 16.554 0.527447C15.9172 0.281305 15.1905 0.109396 14.1278 0.0625122C13.0572 0.011721 12.7173 0 10.002 0Z" fill="var(--nys-icon-color, currentcolor)"/>
   <path d="M10.002 4.86423C7.16546 4.86423 4.86423 7.16546 4.86423 10.002C4.86423 12.8384 7.16546 15.1397 10.002 15.1397C12.8384 15.1397 15.1397 12.8384 15.1397 10.002C15.1397 7.16546 12.8384 4.86423 10.002 4.86423ZM10.002 13.3346C8.16175 13.3346 6.66927 11.8422 6.66927 10.002C6.66927 8.16175 8.16175 6.66927 10.002 6.66927C11.8422 6.66927 13.3346 8.16175 13.3346 10.002C13.3346 11.8422 11.8422 13.3346 10.002 13.3346Z" fill="var(--nys-icon-color, currentcolor)"/>
   <path d="M16.5423 4.66103C16.5423 5.32522 16.0031 5.86048 15.3428 5.86048C14.6786 5.86048 14.1434 5.32131 14.1434 4.66103C14.1434 3.99683 14.6826 3.46157 15.3428 3.46157C16.0031 3.46157 16.5423 4.00074 16.5423 4.66103Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_x:`<svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
   <path d="M17.4256 0H20.8185L13.4062 8.47179L22.1262 20H15.2985L9.95077 13.0082L3.83179 20H0.436923L8.36513 10.9385L0 0H7.00103L11.8349 6.39077L17.4256 0ZM16.2349 17.9692H18.1149L5.97949 1.9241H3.96205L16.2349 17.9692Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_youtube:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
   <path d="M19.8008 3.03516C19.8008 3.03516 19.6055 1.65625 19.0039 1.05078C18.2422 0.253906 17.3906 0.25 17 0.203125C14.2031 -1.11759e-07 10.0039 0 10.0039 0H9.99609C9.99609 0 5.79688 -1.11759e-07 3 0.203125C2.60938 0.25 1.75781 0.253906 0.996094 1.05078C0.394531 1.65625 0.203125 3.03516 0.203125 3.03516C0.203125 3.03516 0 4.65625 0 6.27344V7.78906C0 9.40625 0.199219 11.0273 0.199219 11.0273C0.199219 11.0273 0.394531 12.4062 0.992187 13.0117C1.75391 13.8086 2.75391 13.7812 3.19922 13.8672C4.80078 14.0195 10 14.0664 10 14.0664C10 14.0664 14.2031 14.0586 17 13.8594C17.3906 13.8125 18.2422 13.8086 19.0039 13.0117C19.6055 12.4062 19.8008 11.0273 19.8008 11.0273C19.8008 11.0273 20 9.41016 20 7.78906V6.27344C20 4.65625 19.8008 3.03516 19.8008 3.03516ZM7.93359 9.62891V4.00781L13.3359 6.82812L7.93359 9.62891Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_flickr:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M19.0909 0H0.909091C0.407014 0 0 0.407014 0 0.909091V19.0909C0 19.593 0.407014 20 0.909091 20H19.0909C19.593 20 20 19.593 20 19.0909V0.909091C20 0.407014 19.593 0 19.0909 0Z" fill="var(--nys-icon-color, currentcolor)"/>
   <path d="M6.36364 12.7273C7.86987 12.7273 9.09091 11.5062 9.09091 10C9.09091 8.49377 7.86987 7.27273 6.36364 7.27273C4.85741 7.27273 3.63636 8.49377 3.63636 10C3.63636 11.5062 4.85741 12.7273 6.36364 12.7273Z" fill="white"/>
   <path d="M13.6364 12.7273C15.1426 12.7273 16.3636 11.5062 16.3636 10C16.3636 8.49377 15.1426 7.27273 13.6364 7.27273C12.1301 7.27273 10.9091 8.49377 10.9091 10C10.9091 11.5062 12.1301 12.7273 13.6364 12.7273Z" fill="white"/>
 </svg>`,social_linkedin:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
 <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42188 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_soundcloud:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="9" viewBox="0 0 20 9" fill="none">
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
 </svg>`,social_tumblr:`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
   <path d="M8.16675 20C5.16675 20 2.91675 18.4583 2.91675 14.75V8.83333H0.166748V5.625C3.16675 4.83333 4.41675 2.25 4.58342 0H7.70842V5.08333H11.3334V8.83333H7.70842V14C7.70842 15.5417 8.50008 16.0833 9.75008 16.0833H11.5001V20H8.16675Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_snapchat:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
   <path d="M17.581 13.7331C14.4839 12.2334 13.9903 9.91793 13.9683 9.74618C13.9417 9.53815 13.9116 9.37458 14.141 9.16297C14.3623 8.95851 15.3439 8.35076 15.6162 8.16061C16.0664 7.84574 16.2647 7.53139 16.1185 7.14496C16.0163 6.87763 15.7675 6.77694 15.5053 6.77694C15.4227 6.77719 15.3402 6.78645 15.2596 6.80454C14.7649 6.91188 14.2846 7.15979 14.0066 7.22675C13.9732 7.23536 13.9389 7.23999 13.9044 7.24055C13.7562 7.24055 13.7 7.17461 13.7143 6.99622C13.7491 6.45543 13.8226 5.39991 13.7373 4.41391C13.6203 3.05733 13.1829 2.38517 12.6642 1.79071C12.4133 1.50242 11.2483 0.263916 8.99989 0.263916C6.75152 0.263916 5.58799 1.50242 5.33862 1.78713C4.81843 2.38159 4.38153 3.05375 4.26554 4.41033C4.1802 5.39633 4.25685 6.45134 4.28853 6.99264C4.29875 7.16234 4.24663 7.23697 4.09844 7.23697C4.06395 7.23638 4.02965 7.23175 3.99624 7.22317C3.71877 7.15621 3.23844 6.9083 2.7438 6.80096C2.66311 6.78287 2.5807 6.77361 2.49801 6.77336C2.23485 6.77336 1.98702 6.87559 1.88482 7.14139C1.73867 7.52781 1.93592 7.84217 2.38764 8.15703C2.66 8.34718 3.64161 8.95442 3.86287 9.15939C4.0918 9.371 4.06216 9.53457 4.03559 9.74261C4.01362 9.91691 3.51949 12.2324 0.422867 13.7295C0.241464 13.8175 -0.0671757 14.0035 0.477032 14.3041C1.33141 14.7764 1.90015 14.7258 2.34216 15.0105C2.71723 15.2522 2.49546 15.7736 2.76833 15.9617C3.10354 16.1933 4.09435 15.9454 5.37439 16.3681C6.44748 16.7218 7.0995 17.7211 9.00244 17.7211C10.9054 17.7211 11.5763 16.7172 12.6305 16.3681C13.908 15.9454 14.9008 16.1933 15.2366 15.9617C15.5089 15.7736 15.2877 15.2522 15.6627 15.0105C16.1047 14.7258 16.673 14.7764 17.5279 14.3041C18.071 14.0071 17.7624 13.821 17.581 13.7331Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_tiktok:`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
   <path d="M14.883 4.27729C14.7506 4.20752 14.6217 4.13104 14.4968 4.04813C14.1337 3.80333 13.8007 3.51489 13.5051 3.18901C12.7655 2.32613 12.4893 1.45076 12.3876 0.837875H12.3917C12.3067 0.32915 12.3418 0 12.3471 0H8.97851V13.2818C8.97851 13.4602 8.97851 13.6364 8.97116 13.8106C8.97116 13.8322 8.96911 13.8522 8.96789 13.8756C8.96789 13.8851 8.96789 13.8951 8.96584 13.9051C8.96584 13.9076 8.96584 13.9101 8.96584 13.9126C8.93034 14.3892 8.78052 14.8495 8.52957 15.2532C8.27862 15.6568 7.93424 15.9914 7.52671 16.2275C7.10197 16.4739 6.62159 16.6032 6.13293 16.6025C4.56344 16.6025 3.29143 15.2976 3.29143 13.686C3.29143 12.0744 4.56344 10.7695 6.13293 10.7695C6.43002 10.7692 6.72529 10.8169 7.00777 10.9107L7.01185 7.41338C6.15432 7.30043 5.28314 7.36992 4.45327 7.61747C3.62339 7.86502 2.85284 8.28524 2.19021 8.85164C1.6096 9.36603 1.12148 9.97979 0.747808 10.6653C0.605611 10.9153 0.0691014 11.9198 0.00413184 13.5502C-0.0367295 14.4755 0.235816 15.4342 0.365755 15.8305V15.8388C0.447477 16.0721 0.764153 16.8683 1.28023 17.5395C1.69638 18.078 2.18804 18.5509 2.73939 18.9432V18.9349L2.74756 18.9432C4.37834 20.0732 6.18645 19.999 6.18645 19.999C6.49945 19.9861 7.54795 19.999 8.73865 19.4236C10.0593 18.7857 10.8111 17.8354 10.8111 17.8354C11.2915 17.2675 11.6734 16.6204 11.9405 15.9217C12.2454 15.1047 12.3471 14.1247 12.3471 13.7331V6.68675C12.388 6.71175 12.9323 7.07881 12.9323 7.07881C12.9323 7.07881 13.7164 7.59129 14.9398 7.92502C15.8175 8.16251 17 8.21251 17 8.21251V4.80268C16.5857 4.84851 15.7443 4.71518 14.883 4.27729Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_rss:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M0 6.79688V10.6172C2.49219 10.6172 4.85156 11.6016 6.61719 13.3672C8.38281 15.1328 9.35938 17.4922 9.35938 19.9922V20H13.1953C13.1953 16.3594 11.7109 13.0703 9.32031 10.6719C6.9375 8.28125 3.64062 6.80469 0 6.79688Z" fill="var(--nys-icon-color, currentcolor)"/>
   <path d="M2.65625 14.6797C1.92188 14.6797 1.26562 14.9766 0.78125 15.4609C0.296875 15.9453 0 16.6016 0 17.3359C0 18.0625 0.296875 18.7188 0.78125 19.2031C1.26562 19.6797 1.92188 19.9766 2.65625 19.9766C3.39062 19.9766 4.04688 19.6875 4.53125 19.2031C5.01562 18.7188 5.3125 18.0625 5.3125 17.3359C5.3125 16.6016 5.01562 15.9453 4.53125 15.4609C4.04688 14.9766 3.39062 14.6797 2.65625 14.6797Z" fill="var(--nys-icon-color, currentcolor)"/>
   <path d="M14.1328 5.86719C10.5156 2.24219 5.52344 0 0.0078125 0V3.82031C8.92188 3.82812 16.1641 11.0859 16.1719 20H20C20 14.4844 17.7578 9.49219 14.1328 5.86719Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_pinterest:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M10 0C4.47656 0 0 4.47656 0 10C0 14.2383 2.63672 17.8555 6.35547 19.3125C6.26953 18.5195 6.1875 17.3086 6.39062 16.4453C6.57422 15.6641 7.5625 11.4766 7.5625 11.4766C7.5625 11.4766 7.26172 10.8789 7.26172 9.99219C7.26172 8.60156 8.06641 7.5625 9.07031 7.5625C9.92187 7.5625 10.3359 8.20312 10.3359 8.97266C10.3359 9.83203 9.78906 11.1133 9.50781 12.3008C9.27344 13.2969 10.0078 14.1094 10.9883 14.1094C12.7656 14.1094 14.1328 12.2344 14.1328 9.53125C14.1328 7.13672 12.4141 5.46094 9.95703 5.46094C7.11328 5.46094 5.44141 7.59375 5.44141 9.80078C5.44141 10.6602 5.77344 11.582 6.1875 12.082C6.26953 12.1797 6.28125 12.2695 6.25781 12.3672C6.18359 12.6836 6.01172 13.3633 5.98047 13.5C5.9375 13.6836 5.83594 13.7227 5.64453 13.6328C4.39453 13.0508 3.61328 11.2266 3.61328 9.75781C3.61328 6.60156 5.90625 3.70703 10.2188 3.70703C13.6875 3.70703 16.3828 6.17969 16.3828 9.48438C16.3828 12.9297 14.2109 15.7031 11.1953 15.7031C10.1836 15.7031 9.23047 15.1758 8.90234 14.5547C8.90234 14.5547 8.40234 16.4648 8.28125 16.9336C8.05469 17.8008 7.44531 18.8906 7.03906 19.5547C7.97656 19.8438 8.96875 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_google_play:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
   <path d="M3.1202 0.508333L14.0372 6.79667L11.6972 9.14083L3.1202 0.508333ZM0.85845 0L10.8795 10L0.859282 20C0.349369 19.7742 0 19.2717 0 18.6875C0 18.6683 0 18.6492 0.000831831 18.6308V18.6333V1.3675C0 1.35167 0 1.3325 0 1.31333C0 0.729167 0.349369 0.226667 0.850132 0.00416667L0.859282 0.000833333L0.85845 0ZM17.4302 8.82833C17.7746 9.08417 17.995 9.49083 17.995 9.94833C17.995 9.96667 17.995 9.98417 17.9942 10.0025V10C17.9975 10.0358 18 10.0783 18 10.1208C18 10.5508 17.792 10.9325 17.471 11.1692L17.4676 11.1717L15.1277 12.4992L12.5939 10L15.1285 7.46083L17.4302 8.82833ZM3.1202 19.4917L11.698 10.8592L14.038 13.2033L3.1202 19.4917Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,social_vimeo:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
   <path d="M19.8881 1.69862C19.5362 0.229472 17.8797 -0.185772 16.2069 0.0712117C15.3489 0.204969 12.4525 1.49916 11.4656 4.60025C13.2117 4.46356 14.1279 4.72713 13.9598 6.67303C13.8886 7.48846 13.4838 8.38049 13.0286 9.23624C12.5054 10.2241 11.5212 12.1601 10.2329 10.7655C9.0727 9.50732 9.16169 7.10527 8.89749 5.5037C8.74774 4.60315 8.59141 3.48589 8.30044 2.56221C8.05194 1.76626 7.47709 0.809563 6.77407 0.599948C6.01998 0.377956 5.08804 0.727832 4.54143 1.05518C2.83909 2.06578 1.56386 3.45811 0.102263 4.65849C-0.0821777 4.84616 0.0270352 5.00379 0.0891308 5.14342C0.299039 5.47202 0.380141 5.67144 0.780407 5.73002C1.81954 5.88433 2.8077 4.74937 3.4963 5.93241C3.9175 6.65239 4.0489 7.44205 4.31772 8.21766C4.67544 9.25684 4.95332 10.3843 5.2476 11.5768C5.74663 13.592 6.35542 16.6046 8.0787 17.3458C8.95631 17.7212 10.276 17.218 10.9437 16.8167C12.7553 15.7305 14.2286 14.2052 15.375 12.5542C18.3584 8.26088 19.7887 3.94699 19.9442 3.12531C20.0548 2.52978 19.9823 2.0383 19.8881 1.69862Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,clear_day:`<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
   <path d="M11 4C10.7167 4 10.4792 3.90417 10.2875 3.7125C10.0958 3.52083 10 3.28333 10 3V1C10 0.716667 10.0958 0.479167 10.2875 0.2875C10.4792 0.0958333 10.7167 0 11 0C11.2833 0 11.5208 0.0958333 11.7125 0.2875C11.9042 0.479167 12 0.716667 12 1V3C12 3.28333 11.9042 3.52083 11.7125 3.7125C11.5208 3.90417 11.2833 4 11 4ZM15.95 6.05C15.7667 5.86667 15.675 5.6375 15.675 5.3625C15.675 5.0875 15.7667 4.85 15.95 4.65L17.35 3.225C17.55 3.025 17.7875 2.925 18.0625 2.925C18.3375 2.925 18.575 3.025 18.775 3.225C18.9583 3.40833 19.05 3.64167 19.05 3.925C19.05 4.20833 18.9583 4.44167 18.775 4.625L17.35 6.05C17.1667 6.23333 16.9333 6.325 16.65 6.325C16.3667 6.325 16.1333 6.23333 15.95 6.05ZM19 12C18.7167 12 18.4792 11.9042 18.2875 11.7125C18.0958 11.5208 18 11.2833 18 11C18 10.7167 18.0958 10.4792 18.2875 10.2875C18.4792 10.0958 18.7167 10 19 10H21C21.2833 10 21.5208 10.0958 21.7125 10.2875C21.9042 10.4792 22 10.7167 22 11C22 11.2833 21.9042 11.5208 21.7125 11.7125C21.5208 11.9042 21.2833 12 21 12H19ZM11 22C10.7167 22 10.4792 21.9042 10.2875 21.7125C10.0958 21.5208 10 21.2833 10 21V19C10 18.7167 10.0958 18.4792 10.2875 18.2875C10.4792 18.0958 10.7167 18 11 18C11.2833 18 11.5208 18.0958 11.7125 18.2875C11.9042 18.4792 12 18.7167 12 19V21C12 21.2833 11.9042 21.5208 11.7125 21.7125C11.5208 21.9042 11.2833 22 11 22ZM4.65 6.05L3.225 4.65C3.025 4.45 2.925 4.20833 2.925 3.925C2.925 3.64167 3.025 3.40833 3.225 3.225C3.40833 3.04167 3.64167 2.95 3.925 2.95C4.20833 2.95 4.44167 3.04167 4.625 3.225L6.05 4.65C6.23333 4.83333 6.325 5.06667 6.325 5.35C6.325 5.63333 6.23333 5.86667 6.05 6.05C5.85 6.23333 5.61667 6.325 5.35 6.325C5.08333 6.325 4.85 6.23333 4.65 6.05ZM17.35 18.775L15.95 17.35C15.7667 17.15 15.675 16.9125 15.675 16.6375C15.675 16.3625 15.7667 16.1333 15.95 15.95C16.1333 15.7667 16.3625 15.675 16.6375 15.675C16.9125 15.675 17.15 15.7667 17.35 15.95L18.775 17.35C18.975 17.5333 19.0708 17.7667 19.0625 18.05C19.0542 18.3333 18.9583 18.575 18.775 18.775C18.575 18.975 18.3333 19.075 18.05 19.075C17.7667 19.075 17.5333 18.975 17.35 18.775ZM1 12C0.716667 12 0.479167 11.9042 0.2875 11.7125C0.0958333 11.5208 0 11.2833 0 11C0 10.7167 0.0958333 10.4792 0.2875 10.2875C0.479167 10.0958 0.716667 10 1 10H3C3.28333 10 3.52083 10.0958 3.7125 10.2875C3.90417 10.4792 4 10.7167 4 11C4 11.2833 3.90417 11.5208 3.7125 11.7125C3.52083 11.9042 3.28333 12 3 12H1ZM3.225 18.775C3.04167 18.5917 2.95 18.3583 2.95 18.075C2.95 17.7917 3.04167 17.5583 3.225 17.375L4.65 15.95C4.83333 15.7667 5.0625 15.675 5.3375 15.675C5.6125 15.675 5.85 15.7667 6.05 15.95C6.25 16.15 6.35 16.3875 6.35 16.6625C6.35 16.9375 6.25 17.175 6.05 17.375L4.65 18.775C4.45 18.975 4.20833 19.075 3.925 19.075C3.64167 19.075 3.40833 18.975 3.225 18.775ZM11 17C9.33333 17 7.91667 16.4167 6.75 15.25C5.58333 14.0833 5 12.6667 5 11C5 9.33333 5.58333 7.91667 6.75 6.75C7.91667 5.58333 9.33333 5 11 5C12.6667 5 14.0833 5.58333 15.25 6.75C16.4167 7.91667 17 9.33333 17 11C17 12.6667 16.4167 14.0833 15.25 15.25C14.0833 16.4167 12.6667 17 11 17ZM11 15C12.1 15 13.0417 14.6083 13.825 13.825C14.6083 13.0417 15 12.1 15 11C15 9.9 14.6083 8.95833 13.825 8.175C13.0417 7.39167 12.1 7 11 7C9.9 7 8.95833 7.39167 8.175 8.175C7.39167 8.95833 7 9.9 7 11C7 12.1 7.39167 13.0417 8.175 13.825C8.95833 14.6083 9.9 15 11 15Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,air:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
   <path d="M9.5 17C8.96667 17 8.47083 16.8667 8.0125 16.6C7.55417 16.3333 7.18333 15.9667 6.9 15.5C6.71667 15.1667 6.7125 14.8333 6.8875 14.5C7.0625 14.1667 7.33333 14 7.7 14C7.91667 14 8.10833 14.0667 8.275 14.2C8.44167 14.3333 8.59167 14.4833 8.725 14.65C8.80833 14.7667 8.92083 14.8542 9.0625 14.9125C9.20417 14.9708 9.35 15 9.5 15C9.78333 15 10.0208 14.9042 10.2125 14.7125C10.4042 14.5208 10.5 14.2833 10.5 14C10.5 13.7167 10.4042 13.4792 10.2125 13.2875C10.0208 13.0958 9.78333 13 9.5 13H1C0.716667 13 0.479167 12.9042 0.2875 12.7125C0.0958333 12.5208 0 12.2833 0 12C0 11.7167 0.0958333 11.4792 0.2875 11.2875C0.479167 11.0958 0.716667 11 1 11H9.5C10.3333 11 11.0417 11.2917 11.625 11.875C12.2083 12.4583 12.5 13.1667 12.5 14C12.5 14.8333 12.2083 15.5417 11.625 16.125C11.0417 16.7083 10.3333 17 9.5 17ZM1 7C0.716667 7 0.479167 6.90417 0.2875 6.7125C0.0958333 6.52083 0 6.28333 0 6C0 5.71667 0.0958333 5.47917 0.2875 5.2875C0.479167 5.09583 0.716667 5 1 5H13.5C13.9167 5 14.2708 4.85417 14.5625 4.5625C14.8542 4.27083 15 3.91667 15 3.5C15 3.08333 14.8542 2.72917 14.5625 2.4375C14.2708 2.14583 13.9167 2 13.5 2C13.2333 2 12.9833 2.0625 12.75 2.1875C12.5167 2.3125 12.3333 2.49167 12.2 2.725C12.0833 2.925 11.9417 3.10417 11.775 3.2625C11.6083 3.42083 11.4083 3.5 11.175 3.5C10.8417 3.5 10.5708 3.375 10.3625 3.125C10.1542 2.875 10.1 2.60833 10.2 2.325C10.4333 1.625 10.8542 1.0625 11.4625 0.6375C12.0708 0.2125 12.75 0 13.5 0C14.4667 0 15.2917 0.341667 15.975 1.025C16.6583 1.70833 17 2.53333 17 3.5C17 4.46667 16.6583 5.29167 15.975 5.975C15.2917 6.65833 14.4667 7 13.5 7H1ZM17.95 14.7C17.6167 14.85 17.2917 14.8292 16.975 14.6375C16.6583 14.4458 16.5 14.1667 16.5 13.8C16.5 13.5667 16.5792 13.3708 16.7375 13.2125C16.8958 13.0542 17.075 12.9167 17.275 12.8C17.5083 12.6667 17.6875 12.4833 17.8125 12.25C17.9375 12.0167 18 11.7667 18 11.5C18 11.0833 17.8542 10.7292 17.5625 10.4375C17.2708 10.1458 16.9167 10 16.5 10H1C0.716667 10 0.479167 9.90417 0.2875 9.7125C0.0958333 9.52083 0 9.28333 0 9C0 8.71667 0.0958333 8.47917 0.2875 8.2875C0.479167 8.09583 0.716667 8 1 8H16.5C17.4667 8 18.2917 8.34167 18.975 9.025C19.6583 9.70833 20 10.5333 20 11.5C20 12.2 19.8167 12.8375 19.45 13.4125C19.0833 13.9875 18.5833 14.4167 17.95 14.7Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,coronavirus:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M9.25 20C9.05 20 8.875 19.925 8.725 19.775C8.575 19.625 8.5 19.45 8.5 19.25C8.5 19.05 8.575 18.875 8.725 18.725C8.875 18.575 9.05 18.5 9.25 18.5V16.95C8.55 16.8667 7.89167 16.7 7.275 16.45C6.65833 16.2 6.1 15.8667 5.6 15.45L4.525 16.55C4.675 16.7 4.75 16.875 4.75 17.075C4.75 17.275 4.675 17.45 4.525 17.6C4.375 17.75 4.2 17.825 4 17.825C3.8 17.825 3.625 17.75 3.475 17.6L2.4 16.55C2.25 16.4 2.175 16.2208 2.175 16.0125C2.175 15.8042 2.25 15.625 2.4 15.475C2.55 15.325 2.725 15.2542 2.925 15.2625C3.125 15.2708 3.3 15.3417 3.45 15.475L4.55 14.375C4.13333 13.8583 3.8 13.3 3.55 12.7C3.3 12.1 3.13333 11.45 3.05 10.75H1.5C1.5 10.95 1.425 11.125 1.275 11.275C1.125 11.425 0.95 11.5 0.75 11.5C0.55 11.5 0.375 11.425 0.225 11.275C0.075 11.125 0 10.95 0 10.75V9.25C0 9.05 0.075 8.875 0.225 8.725C0.375 8.575 0.55 8.5 0.75 8.5C0.95 8.5 1.125 8.575 1.275 8.725C1.425 8.875 1.5 9.05 1.5 9.25H3.05C3.13333 8.55 3.30417 7.9 3.5625 7.3C3.82083 6.7 4.15 6.14167 4.55 5.625L3.45 4.525C3.3 4.65833 3.125 4.72917 2.925 4.7375C2.725 4.74583 2.55 4.675 2.4 4.525C2.25 4.375 2.175 4.19583 2.175 3.9875C2.175 3.77917 2.25 3.6 2.4 3.45L3.45 2.4C3.6 2.25 3.77917 2.175 3.9875 2.175C4.19583 2.175 4.375 2.25 4.525 2.4C4.675 2.55 4.75 2.72917 4.75 2.9375C4.75 3.14583 4.675 3.325 4.525 3.475L5.6 4.55C6.11667 4.13333 6.675 3.8 7.275 3.55C7.875 3.3 8.525 3.13333 9.225 3.05V1.5C9.025 1.5 8.85417 1.425 8.7125 1.275C8.57083 1.125 8.5 0.95 8.5 0.75C8.5 0.55 8.575 0.375 8.725 0.225C8.875 0.075 9.05 0 9.25 0H10.75C10.95 0 11.125 0.075 11.275 0.225C11.425 0.375 11.5 0.55 11.5 0.75C11.5 0.95 11.425 1.125 11.275 1.275C11.125 1.425 10.95 1.5 10.75 1.5V3.05C11.45 3.13333 12.1 3.3 12.7 3.55C13.3 3.8 13.8583 4.13333 14.375 4.55L15.475 3.45C15.325 3.3 15.25 3.125 15.25 2.925C15.25 2.725 15.325 2.55 15.475 2.4C15.625 2.25 15.8042 2.175 16.0125 2.175C16.2208 2.175 16.4 2.25 16.55 2.4L17.6 3.475C17.75 3.625 17.825 3.8 17.825 4C17.825 4.2 17.75 4.375 17.6 4.525C17.45 4.675 17.2708 4.75 17.0625 4.75C16.8542 4.75 16.675 4.675 16.525 4.525L15.45 5.6C15.8667 6.11667 16.2 6.67917 16.45 7.2875C16.7 7.89583 16.8667 8.55 16.95 9.25H18.5C18.5 9.05 18.575 8.875 18.725 8.725C18.875 8.575 19.05 8.5 19.25 8.5C19.45 8.5 19.625 8.575 19.775 8.725C19.925 8.875 20 9.05 20 9.25V10.75C20 10.95 19.925 11.125 19.775 11.275C19.625 11.425 19.45 11.5 19.25 11.5C19.05 11.5 18.875 11.425 18.725 11.275C18.575 11.125 18.5 10.95 18.5 10.75H16.95C16.8667 11.45 16.7 12.1042 16.45 12.7125C16.2 13.3208 15.8667 13.8833 15.45 14.4L16.525 15.475C16.675 15.325 16.8542 15.25 17.0625 15.25C17.2708 15.25 17.45 15.325 17.6 15.475C17.75 15.625 17.825 15.8042 17.825 16.0125C17.825 16.2208 17.75 16.4 17.6 16.55L16.55 17.6C16.4 17.75 16.2208 17.825 16.0125 17.825C15.8042 17.825 15.625 17.75 15.475 17.6C15.325 17.45 15.2542 17.275 15.2625 17.075C15.2708 16.875 15.3417 16.7 15.475 16.55L14.375 15.45C13.8583 15.8667 13.3 16.2042 12.7 16.4625C12.1 16.7208 11.45 16.8917 10.75 16.975V18.5C10.95 18.5 11.125 18.575 11.275 18.725C11.425 18.875 11.5 19.05 11.5 19.25C11.5 19.45 11.425 19.625 11.275 19.775C11.125 19.925 10.95 20 10.75 20H9.25ZM10 15C11.3833 15 12.5625 14.5125 13.5375 13.5375C14.5125 12.5625 15 11.3833 15 10C15 8.61667 14.5125 7.4375 13.5375 6.4625C12.5625 5.4875 11.3833 5 10 5C8.61667 5 7.4375 5.4875 6.4625 6.4625C5.4875 7.4375 5 8.61667 5 10C5 11.3833 5.4875 12.5625 6.4625 13.5375C7.4375 14.5125 8.61667 15 10 15ZM8.25 14C8.53333 14 8.77083 13.9042 8.9625 13.7125C9.15417 13.5208 9.25 13.2833 9.25 13C9.25 12.7167 9.15417 12.4792 8.9625 12.2875C8.77083 12.0958 8.53333 12 8.25 12C7.96667 12 7.72917 12.0958 7.5375 12.2875C7.34583 12.4792 7.25 12.7167 7.25 13C7.25 13.2833 7.34583 13.5208 7.5375 13.7125C7.72917 13.9042 7.96667 14 8.25 14ZM11.75 14C12.0333 14 12.2708 13.9042 12.4625 13.7125C12.6542 13.5208 12.75 13.2833 12.75 13C12.75 12.7167 12.6542 12.4792 12.4625 12.2875C12.2708 12.0958 12.0333 12 11.75 12C11.4667 12 11.2292 12.0958 11.0375 12.2875C10.8458 12.4792 10.75 12.7167 10.75 13C10.75 13.2833 10.8458 13.5208 11.0375 13.7125C11.2292 13.9042 11.4667 14 11.75 14ZM6.5 11C6.78333 11 7.02083 10.9042 7.2125 10.7125C7.40417 10.5208 7.5 10.2833 7.5 10C7.5 9.71667 7.40417 9.47917 7.2125 9.2875C7.02083 9.09583 6.78333 9 6.5 9C6.21667 9 5.97917 9.09583 5.7875 9.2875C5.59583 9.47917 5.5 9.71667 5.5 10C5.5 10.2833 5.59583 10.5208 5.7875 10.7125C5.97917 10.9042 6.21667 11 6.5 11ZM10 11C10.2833 11 10.5208 10.9042 10.7125 10.7125C10.9042 10.5208 11 10.2833 11 10C11 9.71667 10.9042 9.47917 10.7125 9.2875C10.5208 9.09583 10.2833 9 10 9C9.71667 9 9.47917 9.09583 9.2875 9.2875C9.09583 9.47917 9 9.71667 9 10C9 10.2833 9.09583 10.5208 9.2875 10.7125C9.47917 10.9042 9.71667 11 10 11ZM13.5 11C13.7833 11 14.0208 10.9042 14.2125 10.7125C14.4042 10.5208 14.5 10.2833 14.5 10C14.5 9.71667 14.4042 9.47917 14.2125 9.2875C14.0208 9.09583 13.7833 9 13.5 9C13.2167 9 12.9792 9.09583 12.7875 9.2875C12.5958 9.47917 12.5 9.71667 12.5 10C12.5 10.2833 12.5958 10.5208 12.7875 10.7125C12.9792 10.9042 13.2167 11 13.5 11ZM8.25 8C8.53333 8 8.77083 7.90417 8.9625 7.7125C9.15417 7.52083 9.25 7.28333 9.25 7C9.25 6.71667 9.15417 6.47917 8.9625 6.2875C8.77083 6.09583 8.53333 6 8.25 6C7.96667 6 7.72917 6.09583 7.5375 6.2875C7.34583 6.47917 7.25 6.71667 7.25 7C7.25 7.28333 7.34583 7.52083 7.5375 7.7125C7.72917 7.90417 7.96667 8 8.25 8ZM11.75 8C12.0333 8 12.2708 7.90417 12.4625 7.7125C12.6542 7.52083 12.75 7.28333 12.75 7C12.75 6.71667 12.6542 6.47917 12.4625 6.2875C12.2708 6.09583 12.0333 6 11.75 6C11.4667 6 11.2292 6.09583 11.0375 6.2875C10.8458 6.47917 10.75 6.71667 10.75 7C10.75 7.28333 10.8458 7.52083 11.0375 7.7125C11.2292 7.90417 11.4667 8 11.75 8Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,ac_unit:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
   <path d="M9 15.85L6.425 18.375C6.24167 18.5583 6.0125 18.65 5.7375 18.65C5.4625 18.65 5.23333 18.55 5.05 18.35C4.85 18.1667 4.75 17.9375 4.75 17.6625C4.75 17.3875 4.85 17.15 5.05 16.95L9 13V11H7L3.025 14.975C2.84167 15.1583 2.6125 15.25 2.3375 15.25C2.0625 15.25 1.825 15.15 1.625 14.95C1.44167 14.7667 1.35 14.5375 1.35 14.2625C1.35 13.9875 1.44167 13.7583 1.625 13.575L4.15 11H0.975C0.691667 11 0.458333 10.9042 0.275 10.7125C0.0916667 10.5208 0 10.2833 0 10C0 9.71667 0.0958333 9.47917 0.2875 9.2875C0.479167 9.09583 0.716667 9 1 9H4.15L1.625 6.45C1.44167 6.26667 1.35 6.0375 1.35 5.7625C1.35 5.4875 1.45 5.25 1.65 5.05C1.83333 4.86667 2.0625 4.775 2.3375 4.775C2.6125 4.775 2.85 4.86667 3.05 5.05L7 9H9V7L5.025 3.05C4.84167 2.86667 4.75 2.6375 4.75 2.3625C4.75 2.0875 4.85 1.85 5.05 1.65C5.23333 1.46667 5.4625 1.375 5.7375 1.375C6.0125 1.375 6.24167 1.46667 6.425 1.65L9 4.15V1C9 0.716667 9.09583 0.479167 9.2875 0.2875C9.47917 0.0958333 9.71667 0 10 0C10.2833 0 10.5208 0.0958333 10.7125 0.2875C10.9042 0.479167 11 0.716667 11 1V4.15L13.55 1.65C13.7333 1.46667 13.9625 1.375 14.2375 1.375C14.5125 1.375 14.75 1.46667 14.95 1.65C15.1333 1.85 15.225 2.0875 15.225 2.3625C15.225 2.6375 15.1333 2.86667 14.95 3.05L11 7V9H13L16.95 5.05C17.1333 4.86667 17.3625 4.775 17.6375 4.775C17.9125 4.775 18.15 4.875 18.35 5.075C18.5333 5.25833 18.625 5.4875 18.625 5.7625C18.625 6.0375 18.5333 6.26667 18.35 6.45L15.85 9H19C19.2833 9 19.5208 9.09583 19.7125 9.2875C19.9042 9.47917 20 9.71667 20 10C20 10.2833 19.9042 10.5208 19.7125 10.7125C19.5208 10.9042 19.2833 11 19 11H15.85L18.35 13.575C18.5333 13.7583 18.625 13.9875 18.625 14.2625C18.625 14.5375 18.5333 14.7667 18.35 14.95C18.15 15.15 17.9125 15.25 17.6375 15.25C17.3625 15.25 17.1333 15.15 16.95 14.95L13 11H11V13L14.95 16.975C15.1333 17.1583 15.225 17.3875 15.225 17.6625C15.225 17.9375 15.125 18.175 14.925 18.375C14.7417 18.5583 14.5125 18.65 14.2375 18.65C13.9625 18.65 13.7333 18.5583 13.55 18.375L11 15.85V19.025C11 19.3083 10.9042 19.5417 10.7125 19.725C10.5208 19.9083 10.2833 20 10 20C9.71667 20 9.47917 19.9042 9.2875 19.7125C9.09583 19.5208 9 19.2833 9 19V15.85Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,rainy:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
   <path d="M11.95 19.9C11.7 20.0333 11.4458 20.0542 11.1875 19.9625C10.9292 19.8708 10.7333 19.7 10.6 19.45L9.1 16.45C8.96667 16.2 8.94583 15.9458 9.0375 15.6875C9.12917 15.4292 9.3 15.2333 9.55 15.1C9.8 14.9667 10.0542 14.9458 10.3125 15.0375C10.5708 15.1292 10.7667 15.3 10.9 15.55L12.4 18.55C12.5333 18.8 12.5542 19.0542 12.4625 19.3125C12.3708 19.5708 12.2 19.7667 11.95 19.9ZM17.95 19.9C17.7 20.0333 17.4458 20.0542 17.1875 19.9625C16.9292 19.8708 16.7333 19.7 16.6 19.45L15.1 16.45C14.9667 16.2 14.9458 15.9458 15.0375 15.6875C15.1292 15.4292 15.3 15.2333 15.55 15.1C15.8 14.9667 16.0542 14.9458 16.3125 15.0375C16.5708 15.1292 16.7667 15.3 16.9 15.55L18.4 18.55C18.5333 18.8 18.5542 19.0542 18.4625 19.3125C18.3708 19.5708 18.2 19.7667 17.95 19.9ZM5.95 19.9C5.7 20.0333 5.44583 20.0542 5.1875 19.9625C4.92917 19.8708 4.73333 19.7 4.6 19.45L3.1 16.45C2.96667 16.2 2.94583 15.9458 3.0375 15.6875C3.12917 15.4292 3.3 15.2333 3.55 15.1C3.8 14.9667 4.05417 14.9458 4.3125 15.0375C4.57083 15.1292 4.76667 15.3 4.9 15.55L6.4 18.55C6.53333 18.8 6.55417 19.0542 6.4625 19.3125C6.37083 19.5708 6.2 19.7667 5.95 19.9ZM5.5 14C3.98333 14 2.6875 13.4625 1.6125 12.3875C0.5375 11.3125 0 10.0167 0 8.5C0 7.11667 0.458333 5.90833 1.375 4.875C2.29167 3.84167 3.425 3.23333 4.775 3.05C5.30833 2.1 6.0375 1.35417 6.9625 0.8125C7.8875 0.270833 8.9 0 10 0C11.5 0 12.8042 0.479167 13.9125 1.4375C15.0208 2.39583 15.6917 3.59167 15.925 5.025C17.075 5.125 18.0417 5.6 18.825 6.45C19.6083 7.3 20 8.31667 20 9.5C20 10.75 19.5625 11.8125 18.6875 12.6875C17.8125 13.5625 16.75 14 15.5 14H5.5ZM5.5 12H15.5C16.2 12 16.7917 11.7583 17.275 11.275C17.7583 10.7917 18 10.2 18 9.5C18 8.8 17.7583 8.20833 17.275 7.725C16.7917 7.24167 16.2 7 15.5 7H14V6C14 4.9 13.6083 3.95833 12.825 3.175C12.0417 2.39167 11.1 2 10 2C9.2 2 8.47083 2.21667 7.8125 2.65C7.15417 3.08333 6.65833 3.66667 6.325 4.4L6.075 5H5.45C4.5 5.03333 3.6875 5.3875 3.0125 6.0625C2.3375 6.7375 2 7.55 2 8.5C2 9.46667 2.34167 10.2917 3.025 10.975C3.70833 11.6583 4.53333 12 5.5 12Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`,open_in_new:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
   <path d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H8C8.28333 0 8.52083 0.0958333 8.7125 0.2875C8.90417 0.479167 9 0.716667 9 1C9 1.28333 8.90417 1.52083 8.7125 1.7125C8.52083 1.90417 8.28333 2 8 2H2V16H16V10C16 9.71667 16.0958 9.47917 16.2875 9.2875C16.4792 9.09583 16.7167 9 17 9C17.2833 9 17.5208 9.09583 17.7125 9.2875C17.9042 9.47917 18 9.71667 18 10V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.0208 17.8042 16.55 18 16 18H2ZM16 3.4L7.4 12C7.21667 12.1833 6.98333 12.275 6.7 12.275C6.41667 12.275 6.18333 12.1833 6 12C5.81667 11.8167 5.725 11.5833 5.725 11.3C5.725 11.0167 5.81667 10.7833 6 10.6L14.6 2H12C11.7167 2 11.4792 1.90417 11.2875 1.7125C11.0958 1.52083 11 1.28333 11 1C11 0.716667 11.0958 0.479167 11.2875 0.2875C11.4792 0.0958333 11.7167 0 12 0H17C17.2833 0 17.5208 0.0958333 17.7125 0.2875C17.9042 0.479167 18 0.716667 18 1V6C18 6.28333 17.9042 6.52083 17.7125 6.7125C17.5208 6.90417 17.2833 7 17 7C16.7167 7 16.4792 6.90417 16.2875 6.7125C16.0958 6.52083 16 6.28333 16 6V3.4Z" fill="var(--nys-icon-color, currentcolor)"/>
 </svg>`},U5=_`
   :host {
     --nys-icon-color: currentcolor;
     --nys-icon-size: 1em;
   }
 
   /* Use 'cap' if supported */
   @supports (font-size: 1cap) {
     :host {
       --nys-icon-size: 1cap;
     }
   }
 
   /* SVG size and color is initially determined by the parent's font-size and text-color */
   .nys-icon--svg {
     width: var(--nys-icon-size, 1em);
     height: var(--nys-icon-size, 1em);
     display: inline-block;
     white-space: nowrap;
   }
 
   /* Relative Sizes */
   .nys-icon--2xs {
     width: calc(var(--nys-icon-size) * 0.75);
     height: calc(var(--nys-icon-size) * 0.75);
   }
   .nys-icon--xs {
     width: calc(var(--nys-icon-size) * 0.875);
     height: calc(var(--nys-icon-size) * 0.875);
   }
   .nys-icon--sm {
     width: var(--nys-icon-size);
     height: var(--nys-icon-size);
   }
   .nys-icon--md {
     width: calc(var(--nys-icon-size) * 1.125);
     height: calc(var(--nys-icon-size) * 1.125);
   }
   .nys-icon--lg {
     width: calc(var(--nys-icon-size) * 1.25);
     height: calc(var(--nys-icon-size) * 1.25);
   }
   .nys-icon--xl {
     width: calc(var(--nys-icon-size) * 1.5);
     height: calc(var(--nys-icon-size) * 1.5);
   }
   .nys-icon--2xl {
     width: calc(var(--nys-icon-size) * 1.875);
     height: calc(var(--nys-icon-size) * 1.875);
   }
   .nys-icon--3xl {
     width: calc(var(--nys-icon-size) * 2.25);
     height: calc(var(--nys-icon-size) * 2.25);
   }
   .nys-icon--4xl {
     width: calc(var(--nys-icon-size) * 3);
     height: calc(var(--nys-icon-size) * 3);
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
 `;var R5=Object.defineProperty,D5=Object.getOwnPropertyDescriptor,q=(o,t,e,i)=>{for(var s=i>1?void 0:i?D5(t,e):t,C=o.length-1,n;C>=0;C--)(n=o[C])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&R5(t,e,s),s};const P=(V=class extends w{constructor(){super(...arguments),this.name="",this.label="",this.rotate="0",this.flip="",this.color="",this._size="sm"}get size(){return this._size}set size(t){this._size=V.VALID_TYPES.includes(t)?t:"sm"}getIcon(){const t=O5[this.name],e=!!this.label;if(!t)return null;const C=new DOMParser().parseFromString(t,"image/svg+xml").documentElement;return C instanceof SVGElement?(C.setAttribute("role","img"),C.setAttribute("aria-label",e?this.label:""),C.setAttribute("aria-hidden",e?"false":"true"),C.style.rotate=`${this.rotate}deg`,C.style.color=this.color||"currentcolor",C.classList.add(`nys-icon--${this.size}`),C.classList.add("nys-icon--svg"),this.flip&&C.classList.add(`nys-icon--flip-${this.flip}`),C):null}render(){return this.getIcon()}},V.styles=U5,V.VALID_TYPES=["2xs","xs","sm","md","lg","xl","2xl","3xl","4xl","12","16","24","32","48","64"],V);q([l({type:String})],P.prototype,"name",2),q([l({type:String})],P.prototype,"label",2),q([l({type:String})],P.prototype,"rotate",2),q([l({type:String})],P.prototype,"flip",2),q([l({type:String})],P.prototype,"color",2),q([l({reflect:!0})],P.prototype,"size",1);let O1=P;customElements.get("nys-icon")||customElements.define("nys-icon",O1);const q5=_`
   .nys-select {
     font-family: Arial, sans-serif;
     width: -webkit-fill-available;
     width: -moz-available;
     width: fill-available;
   }
 
   .nys-select__select {
     border-radius: 0.25rem;
     border: solid 1px gray;
     font-size: 16px;
     padding: 0.5rem;
     width: -webkit-fill-available;
     width: -moz-available;
     width: fill-available;
     text-indent: 1px;
     text-overflow: "";
     background: white;
     -webkit-appearance: none;
   }
 
   .nys-select__selectwrapper {
     position: relative;
     display: inline-block;
     width: -webkit-fill-available;
     width: -moz-available;
     width: fill-available;
   }
 
   .nys-select__icon {
     position: absolute;
     right: 10px;
     top: 50%;
     transform: translateY(-50%);
     pointer-events: none;
   }
 
   .nys-select__select.xs {
     padding: 0.125rem;
   }
 
   .nys-select__select.sm {
     padding: 0.25rem;
   }
 
   .nys-select__select.md {
     padding: 0.5rem;
   }
 
   .nys-select__select.lg {
     font-size: 20px;
   }
 
   .nys-select__select.xl {
     font-size: 24px;
   }
 
   /* Focused */
   .nys-select__select:focus {
     outline-offset: 3px;
     outline: 3px solid var(--form-focus-color, #007bff);
   }
 
   /* Disabled */
   .nys-select__select:disabled {
     background-color: #f0f0f0;
     border-color: #757575;
     cursor: not-allowed;
   }
 
   /* Required */
   .nys-select__required {
     color: red;
     margin-left: 0.25rem;
   }
 
   .nys-select__requiredwrapper {
     display: flex;
   }
 
   /* Label styling */
   .nys-select__text {
     padding-bottom: 0.25rem;
   }
 
   .nys-select__label {
     font-size: 16px;
     font-weight: 500;
     color: var(--form-label-color, #1b1b1b);
   }
 
   /* Help text styling */
   .nys-select__description {
     font-size: 12px;
     color: var(--form-help-text-color, gray);
     font-style: italic;
   }
 
   /* Error Message Styling */
   .nys-select__error {
     padding-top: var(--nys-spacing, 0.75rem);
     color: var(--nys-error, #b52c2c);
   }
 
   .nys-select__selecterror {
     border-color: var(--nys-error, #b52c2c); /* border of <select> */
   }
 `;/**
  * @license
  * Copyright 2017 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const I5={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},j5=o=>(...t)=>({_$litDirective$:o,values:t});class G5{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
  * @license
  * Copyright 2018 Google LLC
  * SPDX-License-Identifier: BSD-3-Clause
  */const F5=j5(class extends G5{constructor(o){var t;if(super(o),o.type!==I5.ATTRIBUTE||o.name!=="class"||((t=o.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(t=>o[t]).join(" ")+" "}update(o,[t]){var i,s;if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(C=>C!=="")));for(const C in t)t[C]&&!((i=this.nt)!=null&&i.has(C))&&this.st.add(C);return this.render(t)}const e=o.element.classList;for(const C of this.st)C in t||(e.remove(C),this.st.delete(C));for(const C in t){const n=!!t[C];n===this.st.has(C)||(s=this.nt)!=null&&s.has(C)||(n?(e.add(C),this.st.add(C)):(e.remove(C),this.st.delete(C)))}return k}});var W5=Object.defineProperty,Y5=Object.getOwnPropertyDescriptor,f=(o,t,e,i)=>{for(var s=i>1?void 0:i?Y5(t,e):t,C=o.length-1,n;C>=0;C--)(n=o[C])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&W5(t,e,s),s};r.NysSelect=class extends w{constructor(){super(...arguments),this.id="",this.name="",this.label="",this.description="",this.value="",this.disabled=!1,this.required=!1,this.form="",this.size="",this.hasError=!1,this.errorMessage="",this._options=[]}_handleSlotChange(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("slot");if(t){const i=t.assignedElements({flatten:!0});this._options=i.filter(s=>s instanceof HTMLOptionElement).map(s=>({value:s.value,text:s.textContent||""}))}this.requestUpdate()}_handleFocus(){this.dispatchEvent(new Event("focus"))}_handleBlur(){this.dispatchEvent(new Event("blur"))}updated(t){var e;if(super.updated(t),t.has("value")){const i=(e=this.shadowRoot)==null?void 0:e.querySelector("select");i&&(i.value=this.value)}}render(){const t={"nys-select__select":!0,"nys-select__selecterror":this.hasError,[this.size]:!!this.size};return h`
       <div class="nys-select">
         ${this.label&&h` <div class="nys-select__text">
           <div class="nys-select__requiredwrapper">
             <label for=${this.id} class="nys-select__label"
               >${this.label}</label
             >
             ${this.required?h`<label class="nys-select__required">*</label>`:""}
           </div>
           <label for=${this.id} class="nys-select__description">
             ${this.description}
           </label>
         </div>`}
         <div class="nys-select__requiredwrapper">
           <div class="nys-select__selectwrapper">
             <select
               class="${F5(t)}"
               name=${this.name}
               id=${this.id}
               ?disabled=${this.disabled}
               ?required=${this.required}
               aria-disabled="${this.disabled}"
               aria-label="${this.label} ${this.description}"
               value=${this.value}
               @focus="${this._handleFocus}"
               @blur="${this._handleBlur}"
             >
               <option hidden disabled selected value></option>
               ${this._options.map(e=>h`<option value=${e.value}>${e.text}</option>`)}
             </select>
             <slot
               @slotchange="${this._handleSlotChange}"
               style="display: none;"
             ></slot>
             <slot name="icon">
               <nys-icon
                 name="chevron_down"
                 size="lg"
                 class="nys-select__icon"
               ></nys-icon>
             </slot>
           </div>
           ${this.required&&!this.label?h`<label class="nys-select__required">*</label>`:""}
         </div>
         ${this.hasError&&this.errorMessage?h`<div class="nys-select__error">
               <nys-icon name="error"></nys-icon>
               ${this.errorMessage}
             </div>`:""}
       </div>
     `}},r.NysSelect.styles=q5,f([l({type:String})],r.NysSelect.prototype,"id",2),f([l({type:String})],r.NysSelect.prototype,"name",2),f([l({type:String})],r.NysSelect.prototype,"label",2),f([l({type:String})],r.NysSelect.prototype,"description",2),f([l({type:String})],r.NysSelect.prototype,"value",2),f([l({type:Boolean})],r.NysSelect.prototype,"disabled",2),f([l({type:Boolean})],r.NysSelect.prototype,"required",2),f([l({type:String})],r.NysSelect.prototype,"form",2),f([l({type:String})],r.NysSelect.prototype,"size",2),f([l({type:Boolean})],r.NysSelect.prototype,"hasError",2),f([l({type:String})],r.NysSelect.prototype,"errorMessage",2),f([A1()],r.NysSelect.prototype,"_options",2),r.NysSelect=f([z("nys-select")],r.NysSelect);const K5=_`
   .nys-textarea {
     font-family: Arial, sans-serif;
   }
 
   .nys-textarea__textarea {
     border-radius: 0.25rem;
     border: solid 1px gray;
     font-size: 16px;
     padding: 0.5rem;
     width: -webkit-fill-available;
     width: -moz-available;
     width: fill-available;
     resize: vertical;
   }
 
   /* Sizes */
   .nys-textarea__textarea.xs {
     padding: 0.125rem;
   }
 
   .nys-textarea__textarea.sm {
     padding: 0.25rem;
   }
 
   .nys-textarea__textarea.lg {
     font-size: 20px;
   }
 
   .nys-textarea__textarea.xl {
     font-size: 24px;
   }
 
   /* Resize */
   .nys-textarea__textarea.none {
     resize: none;
   }
 
   /* Focused */
   .nys-textarea__textarea:focus {
     outline-offset: 3px;
     outline: 3px solid var(--form-focus-color, #007bff);
   }
 
   /* Disabled */
   .nys-textarea__textarea:disabled {
     background-color: #f0f0f0;
     border-color: #757575;
     cursor: not-allowed;
   }
 
   .nys-textarea__required {
     color: red;
     margin-left: 0.25rem;
   }
 
   .nys-textarea__requiredwrapper {
     display: flex;
   }
 
   .nys-textarea__text {
     display: flex;
     flex-direction: column;
     margin-bottom: 0.25rem;
   }
 
   /* Label styling */
   .nys-textarea__label {
     font-size: 16px;
     font-weight: 500;
     color: var(--form-label-color, #1b1b1b);
   }
 
   /* Help text styling */
   .nys-textarea__description {
     font-size: 12px;
     color: var(--form-help-text-color, gray);
     font-style: italic;
   }
   ::slotted([slot^="description"]) {
     margin: 0;
   }
 
   /* Error Message Styling */
   .nys-textarea__error {
     color: var(--nys-warning, #b52c2c);
     padding-top: 0.25rem;
   }
 `;var J5=Object.defineProperty,X5=Object.getOwnPropertyDescriptor,v=(o,t,e,i)=>{for(var s=i>1?void 0:i?X5(t,e):t,C=o.length-1,n;C>=0;C--)(n=o[C])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&J5(t,e,s),s};r.NysTextarea=class extends w{constructor(){super(),this.id="",this.name="",this.label="",this.description="",this.placeholder="",this.value="",this.disabled=!1,this.readonly=!1,this.required=!1,this.form="",this.maxlength=null,this.size="",this.rows=null,this._resize="vertical",this.errorMessage=""}get resize(){return this._resize}set resize(t){this._resize=r.NysTextarea.VALID_RESIZE.includes(t)?t:"vertical"}_handleInput(t){const i=t.target.checkValidity();this.dispatchEvent(new CustomEvent("nys-checkValidity",{detail:{checkValidity:i},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("focus"))}_handleBlur(){this.dispatchEvent(new Event("blur"))}render(){return h`
       <label class="nys-textarea">
         ${this.label&&h` <div class="nys-textarea__text">
           <div class="nys-textarea__requiredwrapper">
             <div class="nys-textarea__label">${this.label}</div>
             ${this.required?h`<div class="nys-textarea__required">*</div>`:""}
           </div>
           <slot class="nys-textarea__description" name="description">
             ${this.description}
           </slot>
         </div>`}
         <div class="nys-textarea__requiredwrapper">
           <textarea
             class="nys-textarea__textarea ${this.size} ${this.resize}"
             name=${this.name}
             id=${this.id}
             ?disabled=${this.disabled}
             ?required=${this.required}
             ?readonly=${this.readonly}
             aria-disabled="${this.disabled}"
             .value=${this.value}
             placeholder=${this.placeholder}
             maxlength=${this.maxlength}
             rows=${this.rows}
             form=${this.form}
             @input=${this._handleInput}
             @focus="${this._handleFocus}"
             @blur="${this._handleBlur}"
           ></textarea>
           ${this.required&&!this.label?h`<div class="nys-textarea__required">*</div>`:""}
         </div>
         ${this.errorMessage&&h`<div class="nys-textarea__error">
           <nys-icon name="error"></nys-icon>
           ${this.errorMessage}
         </div>`}
       </label>
     `}},r.NysTextarea.VALID_RESIZE=["vertical","none"],r.NysTextarea.styles=K5,v([l({type:String})],r.NysTextarea.prototype,"id",2),v([l({type:String})],r.NysTextarea.prototype,"name",2),v([l({type:String})],r.NysTextarea.prototype,"label",2),v([l({type:String})],r.NysTextarea.prototype,"description",2),v([l({type:String})],r.NysTextarea.prototype,"placeholder",2),v([l({type:String})],r.NysTextarea.prototype,"value",2),v([l({type:Boolean})],r.NysTextarea.prototype,"disabled",2),v([l({type:Boolean})],r.NysTextarea.prototype,"readonly",2),v([l({type:Boolean})],r.NysTextarea.prototype,"required",2),v([l({type:String})],r.NysTextarea.prototype,"form",2),v([l({type:Number})],r.NysTextarea.prototype,"maxlength",2),v([l({type:String})],r.NysTextarea.prototype,"size",2),v([l({type:Number})],r.NysTextarea.prototype,"rows",2),v([l({reflect:!0})],r.NysTextarea.prototype,"resize",1),v([l({type:String})],r.NysTextarea.prototype,"errorMessage",2),r.NysTextarea=v([z("nys-textarea")],r.NysTextarea);const Q5=_`
   .nys-textinput {
     font-family: Arial, sans-serif;
   }
 
   .nys-textinput__input {
     border-radius: 0.25rem;
     border: solid 1px gray;
     font-size: 16px;
     padding: 0.5rem;
     width: -webkit-fill-available;
     width: -moz-available;
     width: fill-available;
   }
 
   .xs {
     padding: 0.125rem;
   }
 
   .sm {
     padding: 0.25rem;
   }
 
   .lg {
     font-size: 20px;
   }
 
   .xl {
     font-size: 24px;
   }
 
   /* Focused */
   .nys-textinput__input:focus {
     outline-offset: 3px;
     outline: 3px solid var(--form-focus-color, #007bff);
   }
 
   /* Disabled */
   .nys-textinput__input:disabled {
     background-color: #f0f0f0;
     border-color: #757575;
     cursor: not-allowed;
   }
 
   .nys-textinput__required {
     color: red;
     margin-left: 0.25rem;
   }
 
   .nys-textinput__requiredwrapper {
     display: flex;
   }
 
   .nys-textinput__text {
     display: flex;
     margin-bottom: 0.25rem;
   }
 
   .nys-textinput__label_labelwrapper {
     display: flex;
     flex-direction: column;
   }
 
   /* Label styling */
   .nys-textinput__label {
     font-size: 16px;
     font-weight: 500;
     color: var(--form-label-color, #1b1b1b);
   }
 
   /* Help text styling */
   .nys-textinput__description {
     font-size: 12px;
     color: var(--form-help-text-color, gray);
     font-style: italic;
   }
 
   /* Pattern validation styling */
   .nys-textinput__validation {
     padding-top: 0.5rem;
   }
 
   .nys-textinput__input:invalid + .nys-textinput__validation:after {
     color: red;
     content: " invalid";
     font-weight: bold;
   }
 
   .nys-textinput__input:valid + .nys-textinput__validation:after {
     color: green;
     content: " valid";
     font-weight: bold;
   }
 
   .nys-textinput__input:placeholder-shown + .nys-textinput__validation:after {
     color: black;
     content: " empty";
     font-weight: bold;
   }
 `;var t2=Object.defineProperty,e2=Object.getOwnPropertyDescriptor,g=(o,t,e,i)=>{for(var s=i>1?void 0:i?e2(t,e):t,C=o.length-1,n;C>=0;C--)(n=o[C])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&t2(t,e,s),s};r.NysTextinput=class extends w{constructor(){super(),this.id="",this.name="",this._type="text",this.label="",this.description="",this.placeholder="",this.value="",this.disabled=!1,this.readonly=!1,this.required=!1,this.form="",this.pattern="",this.maxlength=null,this.size="",this.step=null,this.min=null,this.max=null}get type(){return this._type}set type(t){this._type=r.NysTextinput.VALID_TYPES.includes(t)?t:"text"}_handleInput(t){const i=t.target.checkValidity();this.dispatchEvent(new CustomEvent("nys-checkValidity",{detail:{checkValidity:i},bubbles:!0,composed:!0}))}_handleFocus(){this.dispatchEvent(new Event("focus"))}_handleBlur(){this.dispatchEvent(new Event("blur"))}render(){return h`
       <div class="nys-textinput">
         ${(this.label||this.description)&&h` <div class="nys-textinput__text">
           <div class="nys-textinput__label_labelwrapper">
             <label for=${this.id} class="nys-textinput__label"
               >${this.label}</label
             >
             <label for=${this.id} class="nys-textinput__description"
               >${this.description}</label
             >
           </div>
           ${this.required&&(this.label||this.description)?h`<label class="nys-textinput__required">*</label>`:""}
         </div>`}
         <div class="nys-textinput__requiredwrapper">
           <input
             class="nys-textinput__input ${this.size}"
             type=${this.type}
             name=${this.name}
             id=${this.id}
             ?disabled=${this.disabled}
             ?required=${this.required}
             ?readonly=${this.readonly}
             aria-disabled="${this.disabled}"
             aria-label="${this.label} ${this.description}"
             .value=${this.value}
             placeholder=${this.placeholder}
             maxlength=${this.maxlength}
             pattern=${this.pattern}
             step=${this.step}
             min=${this.min}
             max=${this.max}
             form=${this.form}
             @input=${this._handleInput}
             @focus="${this._handleFocus}"
             @blur="${this._handleBlur}"
           />
           ${this.required&&!this.label&&!this.description?h`<label class="nys-textinput__required">*</label>`:""}
         </div>
       </div>
     `}},r.NysTextinput.VALID_TYPES=["email","number","password","search","tel","text","url"],r.NysTextinput.styles=Q5,g([l({type:String})],r.NysTextinput.prototype,"id",2),g([l({type:String})],r.NysTextinput.prototype,"name",2),g([l({reflect:!0})],r.NysTextinput.prototype,"type",1),g([l({type:String})],r.NysTextinput.prototype,"label",2),g([l({type:String})],r.NysTextinput.prototype,"description",2),g([l({type:String})],r.NysTextinput.prototype,"placeholder",2),g([l({type:String})],r.NysTextinput.prototype,"value",2),g([l({type:Boolean})],r.NysTextinput.prototype,"disabled",2),g([l({type:Boolean})],r.NysTextinput.prototype,"readonly",2),g([l({type:Boolean})],r.NysTextinput.prototype,"required",2),g([l({type:String})],r.NysTextinput.prototype,"form",2),g([l({type:String})],r.NysTextinput.prototype,"pattern",2),g([l({type:Number})],r.NysTextinput.prototype,"maxlength",2),g([l({type:String})],r.NysTextinput.prototype,"size",2),g([l({type:Number})],r.NysTextinput.prototype,"step",2),g([l({type:Number})],r.NysTextinput.prototype,"min",2),g([l({type:Number})],r.NysTextinput.prototype,"max",2),r.NysTextinput=g([z("nys-textinput")],r.NysTextinput);const i2=_`
   :host {
     --toggle-width: 44px;
     --toggle-height: 24px;
     --slider-diameter: 18px;
     --slider-offset: calc((var(--toggle-height) - var(--slider-diameter)) / 2);
     --slider-checked-translate: calc(
       var(--toggle-width) - var(--slider-diameter) - var(--slider-offset) - 2px
     );
 
     /* Slider colors */
     --nys-color-base: #797c7f;
     --nys-color-base-weaker: #d0d0ce;
     --nys-color-theme: #154973;
     --nys-color-theme-strong: #0e324f;
     --nys-color-theme-stronger: #081b2b;
     --nys-color-ink-reverse: #fff;
 
     /* Font sizes and spacing for labels/descriptions and icons */
     --label-font-size: 14px;
     --description-font-size: 12px;
     --description-spacing: 7px;
     --icon-font-size: 12px;
   }
 
   /* Slotted styling (e.g. HTML <p> tags for descriptions)*/
   ::slotted([slot^="description"]) {
     font-size: var(--description-font-size);
     color: gray;
     margin: 0;
   }
   slot[name="description"] {
     font-size: var(--description-font-size);
     color: gray;
     margin: 0;
   }
 
   /* Toggle switch overall container */
   .nys-toggle__content {
     display: flex;
     align-items: center;
     gap: 10px;
   }
 
   /* Label & description text container */
   .nys-toggle__text {
     display: flex;
     flex-direction: column;
     font-size: var(--label-font-size);
   }
 
   .nys-toggle__text.disabled {
     color: var(--nys-color-base, #797c7f);
   }
 
   /* Toggle Switch component */
   .nys-toggle__toggle {
     position: relative;
     display: inline-block;
     width: var(--toggle-width);
     height: var(--toggle-height);
   }
 
   .nys-toggle__toggle input {
     opacity: 0;
     width: 0;
     height: 0;
   }
 
   .slider {
     position: absolute;
     cursor: pointer;
     border-radius: 34px;
     width: var(--toggle-width);
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background-color: var(--nys-color-base, #797c7f);
     transition: all 0.3s cubic-bezier(0.27, 0.2, 0.25, 1.51);
   }
 
   .knob {
     content: "";
     position: absolute;
     height: var(--slider-diameter);
     width: var(--slider-diameter);
     left: var(--slider-offset);
     bottom: var(--slider-offset);
     border-radius: 50%;
     background-color: var(--nys-color-ink-reverse, #fff);
     transition: 0.3s;
     overflow: hidden;
     display: flex; /* Center icon inside the knob */
     align-items: center;
     justify-content: center;
   }
 
   /* Switch BG: Checked */
   input:checked + .slider {
     background-color: var(--nys-color-theme, #154973);
   }
 
   /* Switch BG: Hover */
   input:hover + .slider {
     background-color: var(--nys-color-base, #797c7f);
   }
 
   /* Switch BG: Hover + Checked*/
   input:checked:hover + .slider {
     background-color: var(--nys-color-theme-strong, #0e324f);
   }
 
   /* Switch BG: Active */
   input:active + .slider {
     background-color: var(--nys-color-theme-stronger, #081b2b);
   }
 
   /* Switch Outline: Focus */
   input:focus + .slider {
     box-shadow:
       0 0 0 1.5px white,
       0 0 0 3px var(--nys-color-base, #797c7f);
   }
 
   /* Switch Outline: Focus and checked */
   input:checked:focus + .slider {
     box-shadow:
       0 0 0 1.5px white,
       0 0 0 3px var(--nys-color-theme-strong, #0e324f);
   }
 
   /* Switch Knob: Checked */
   input:checked + .slider .knob {
     transform: translateX(var(--slider-checked-translate));
   }
 
   /* Icon Styling */
   .toggle-icon {
     position: absolute;
     color: var(--nys-color-base, #797c7f);
   }
   input:checked + .slider .knob .toggle-icon {
     color: var(--nys-color-theme, #154973);
   }
   :host([size="sm"]) .toggle-icon {
     font-size: var(--icon-font-size);
   }
   :host([size="md"]) .toggle-icon {
     font-size: var(--icon-font-size);
   }
   /* If 'cap' is not supported, account for the extra padding from svg due to nys-icon's 'display:inline' */
   @supports not (font-size: 1cap) {
     :host([size="sm"]) .toggle-icon {
       font-size: var(--icon-font-size);
     }
     :host([size="md"]) .toggle-icon {
       font-size: calc(var(--icon-font-size) - 1px);
     }
   }
 
   /*** Disabled State ***/
   /* Switch BG: Disabled */
   input:disabled + .slider {
     background-color: var(--nys-color-base-weaker, #d0d0ce);
     cursor: not-allowed;
   }
   input:disabled + .slider .knob .toggle-icon {
     color: var(--nys-color-base-weaker, #d0d0ce);
   }
 
   /* Sizes */
   :host([size="sm"]) {
     --toggle-width: 36px;
     --toggle-height: 20px;
     --slider-diameter: 16px;
     --label-font-size: 12px;
     --description-font-size: 10px;
     --description-spacing: 5px;
     --icon-font-size: 13px;
   }
 
   :host([size="md"]) {
     --toggle-width: 44px;
     --toggle-height: 24px;
     --slider-diameter: 20px;
     --label-font-size: 14px;
     --description-font-size: 12px;
     --description-spacing: 7px;
     --icon-font-size: 16px;
   }
 `;var s2=Object.defineProperty,o2=Object.getOwnPropertyDescriptor,b=(o,t,e,i)=>{for(var s=i>1?void 0:i?o2(t,e):t,C=o.length-1,n;C>=0;C--)(n=o[C])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&s2(t,e,s),s};let C2=0;r.NysToggle=class extends w{constructor(){super(...arguments),this.id="",this.name="",this.value="",this.checked=!1,this.disabled=!1,this.required=!1,this.noIcon=!1,this.label="",this.description="",this._size="md",this.form=""}get size(){return this._size}set size(t){this._size=r.NysToggle.VALID_SIZES.includes(t)?t:"md"}connectedCallback(){super.connectedCallback(),this.id||(this.id=`nys-checkbox-${Date.now()}-${C2++}`)}_handleFocus(){this.dispatchEvent(new Event("focus"))}_handleBlur(){this.dispatchEvent(new Event("blur"))}_handleChange(t){const{checked:e}=t.target;this.checked=e,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))}_handleKeyDown(t){!this.disabled&&(t.key===" "||t.key==="Enter")&&(t.preventDefault(),this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0})))}render(){return h`
       <label class="nys-toggle">
         <div class="nys-toggle__content">
           <div class="nys-toggle__toggle">
             <input
               id="${this.id}"
               type="checkbox"
               name="${e1(this.name?this.name:void 0)}"
               .value=${this.value}
               form=${this.form}
               .checked=${this.checked}
               ?disabled=${this.disabled}
               ?required="${this.required}"
               role="switch"
               aria-checked="${this.checked}"
               aria-disabled="${this.disabled}"
               aria-required="${this.required}"
               @change=${this._handleChange}
               @focus=${this._handleFocus}
               @blur=${this._handleBlur}
               @keydown=${this._handleKeyDown}
             />
             <span class="slider">
               <div class="knob">
                 ${this.noIcon?"":h`<nys-icon
                       class="toggle-icon"
                       name="${this.checked?"check":"close"}"
                       size="xs"
                     ></nys-icon>`}
               </div>
             </span>
           </div>
           <div class="nys-toggle__text ${this.disabled?"disabled":""}">
             <div class="nys-toggle__label">${this.label}</div>
             <slot name="description">${this.description}</slot>
           </div>
         </div>
       </label>
     `}},r.NysToggle.styles=i2,r.NysToggle.VALID_SIZES=["sm","md"],b([l({type:String})],r.NysToggle.prototype,"id",2),b([l({type:String})],r.NysToggle.prototype,"name",2),b([l({type:String})],r.NysToggle.prototype,"value",2),b([l({type:Boolean})],r.NysToggle.prototype,"checked",2),b([l({type:Boolean})],r.NysToggle.prototype,"disabled",2),b([l({type:Boolean})],r.NysToggle.prototype,"required",2),b([l({type:Boolean})],r.NysToggle.prototype,"noIcon",2),b([l({type:String})],r.NysToggle.prototype,"label",2),b([l({type:String})],r.NysToggle.prototype,"description",2),b([l({reflect:!0})],r.NysToggle.prototype,"size",1),b([l({type:String})],r.NysToggle.prototype,"form",2),r.NysToggle=b([z("nys-toggle")],r.NysToggle),r.NysIcon=O1,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
 //# sourceMappingURL=excelsior.js.map
 