var $m=Object.defineProperty;var Bm=(o,u,s)=>u in o?$m(o,u,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[u]=s;var Bd=(o,u,s)=>Bm(o,typeof u!="symbol"?u+"":u,s);(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))h(p);new MutationObserver(p=>{for(const x of p)if(x.type==="childList")for(const k of x.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&h(k)}).observe(document,{childList:!0,subtree:!0});function s(p){const x={};return p.integrity&&(x.integrity=p.integrity),p.referrerPolicy&&(x.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?x.credentials="include":p.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function h(p){if(p.ep)return;p.ep=!0;const x=s(p);fetch(p.href,x)}})();var ng=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Um(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ro={exports:{}},bi={},Po={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function _m(){if(Ud)return ge;Ud=1;var o=Symbol.for("react.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),k=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),j=Symbol.iterator;function O(v){return v===null||typeof v!="object"?null:(v=j&&v[j]||v["@@iterator"],typeof v=="function"?v:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,H={};function D(v,g,_){this.props=v,this.context=g,this.refs=H,this.updater=_||E}D.prototype.isReactComponent={},D.prototype.setState=function(v,g){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,g,"setState")},D.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function re(){}re.prototype=D.prototype;function q(v,g,_){this.props=v,this.context=g,this.refs=H,this.updater=_||E}var W=q.prototype=new re;W.constructor=q,R(W,D.prototype),W.isPureReactComponent=!0;var X=Array.isArray,L=Object.prototype.hasOwnProperty,M={current:null},Y={key:!0,ref:!0,__self:!0,__source:!0};function P(v,g,_){var B,Z={},de=null,pe=null;if(g!=null)for(B in g.ref!==void 0&&(pe=g.ref),g.key!==void 0&&(de=""+g.key),g)L.call(g,B)&&!Y.hasOwnProperty(B)&&(Z[B]=g[B]);var ce=arguments.length-2;if(ce===1)Z.children=_;else if(1<ce){for(var we=Array(ce),Qe=0;Qe<ce;Qe++)we[Qe]=arguments[Qe+2];Z.children=we}if(v&&v.defaultProps)for(B in ce=v.defaultProps,ce)Z[B]===void 0&&(Z[B]=ce[B]);return{$$typeof:o,type:v,key:de,ref:pe,props:Z,_owner:M.current}}function Q(v,g){return{$$typeof:o,type:v.type,key:g,ref:v.ref,props:v.props,_owner:v._owner}}function oe(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function le(v){var g={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(_){return g[_]})}var me=/\/+/g;function xe(v,g){return typeof v=="object"&&v!==null&&v.key!=null?le(""+v.key):g.toString(36)}function be(v,g,_,B,Z){var de=typeof v;(de==="undefined"||de==="boolean")&&(v=null);var pe=!1;if(v===null)pe=!0;else switch(de){case"string":case"number":pe=!0;break;case"object":switch(v.$$typeof){case o:case u:pe=!0}}if(pe)return pe=v,Z=Z(pe),v=B===""?"."+xe(pe,0):B,X(Z)?(_="",v!=null&&(_=v.replace(me,"$&/")+"/"),be(Z,g,_,"",function(Qe){return Qe})):Z!=null&&(oe(Z)&&(Z=Q(Z,_+(!Z.key||pe&&pe.key===Z.key?"":(""+Z.key).replace(me,"$&/")+"/")+v)),g.push(Z)),1;if(pe=0,B=B===""?".":B+":",X(v))for(var ce=0;ce<v.length;ce++){de=v[ce];var we=B+xe(de,ce);pe+=be(de,g,_,we,Z)}else if(we=O(v),typeof we=="function")for(v=we.call(v),ce=0;!(de=v.next()).done;)de=de.value,we=B+xe(de,ce++),pe+=be(de,g,_,we,Z);else if(de==="object")throw g=String(v),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return pe}function Re(v,g,_){if(v==null)return v;var B=[],Z=0;return be(v,B,"","",function(de){return g.call(_,de,Z++)}),B}function He(v){if(v._status===-1){var g=v._result;g=g(),g.then(function(_){(v._status===0||v._status===-1)&&(v._status=1,v._result=_)},function(_){(v._status===0||v._status===-1)&&(v._status=2,v._result=_)}),v._status===-1&&(v._status=0,v._result=g)}if(v._status===1)return v._result.default;throw v._result}var Ne={current:null},G={transition:null},I={ReactCurrentDispatcher:Ne,ReactCurrentBatchConfig:G,ReactCurrentOwner:M};function K(){throw Error("act(...) is not supported in production builds of React.")}return ge.Children={map:Re,forEach:function(v,g,_){Re(v,function(){g.apply(this,arguments)},_)},count:function(v){var g=0;return Re(v,function(){g++}),g},toArray:function(v){return Re(v,function(g){return g})||[]},only:function(v){if(!oe(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ge.Component=D,ge.Fragment=s,ge.Profiler=p,ge.PureComponent=q,ge.StrictMode=h,ge.Suspense=c,ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,ge.act=K,ge.cloneElement=function(v,g,_){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var B=R({},v.props),Z=v.key,de=v.ref,pe=v._owner;if(g!=null){if(g.ref!==void 0&&(de=g.ref,pe=M.current),g.key!==void 0&&(Z=""+g.key),v.type&&v.type.defaultProps)var ce=v.type.defaultProps;for(we in g)L.call(g,we)&&!Y.hasOwnProperty(we)&&(B[we]=g[we]===void 0&&ce!==void 0?ce[we]:g[we])}var we=arguments.length-2;if(we===1)B.children=_;else if(1<we){ce=Array(we);for(var Qe=0;Qe<we;Qe++)ce[Qe]=arguments[Qe+2];B.children=ce}return{$$typeof:o,type:v.type,key:Z,ref:de,props:B,_owner:pe}},ge.createContext=function(v){return v={$$typeof:k,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:x,_context:v},v.Consumer=v},ge.createElement=P,ge.createFactory=function(v){var g=P.bind(null,v);return g.type=v,g},ge.createRef=function(){return{current:null}},ge.forwardRef=function(v){return{$$typeof:w,render:v}},ge.isValidElement=oe,ge.lazy=function(v){return{$$typeof:z,_payload:{_status:-1,_result:v},_init:He}},ge.memo=function(v,g){return{$$typeof:b,type:v,compare:g===void 0?null:g}},ge.startTransition=function(v){var g=G.transition;G.transition={};try{v()}finally{G.transition=g}},ge.unstable_act=K,ge.useCallback=function(v,g){return Ne.current.useCallback(v,g)},ge.useContext=function(v){return Ne.current.useContext(v)},ge.useDebugValue=function(){},ge.useDeferredValue=function(v){return Ne.current.useDeferredValue(v)},ge.useEffect=function(v,g){return Ne.current.useEffect(v,g)},ge.useId=function(){return Ne.current.useId()},ge.useImperativeHandle=function(v,g,_){return Ne.current.useImperativeHandle(v,g,_)},ge.useInsertionEffect=function(v,g){return Ne.current.useInsertionEffect(v,g)},ge.useLayoutEffect=function(v,g){return Ne.current.useLayoutEffect(v,g)},ge.useMemo=function(v,g){return Ne.current.useMemo(v,g)},ge.useReducer=function(v,g,_){return Ne.current.useReducer(v,g,_)},ge.useRef=function(v){return Ne.current.useRef(v)},ge.useState=function(v){return Ne.current.useState(v)},ge.useSyncExternalStore=function(v,g,_){return Ne.current.useSyncExternalStore(v,g,_)},ge.useTransition=function(){return Ne.current.useTransition()},ge.version="18.3.1",ge}var _d;function es(){return _d||(_d=1,Po.exports=_m()),Po.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd;function Km(){if(Kd)return bi;Kd=1;var o=es(),u=Symbol.for("react.element"),s=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function k(w,c,b){var z,j={},O=null,E=null;b!==void 0&&(O=""+b),c.key!==void 0&&(O=""+c.key),c.ref!==void 0&&(E=c.ref);for(z in c)h.call(c,z)&&!x.hasOwnProperty(z)&&(j[z]=c[z]);if(w&&w.defaultProps)for(z in c=w.defaultProps,c)j[z]===void 0&&(j[z]=c[z]);return{$$typeof:u,type:w,key:O,ref:E,props:j,_owner:p.current}}return bi.Fragment=s,bi.jsx=k,bi.jsxs=k,bi}var Vd;function Vm(){return Vd||(Vd=1,Ro.exports=Km()),Ro.exports}var i=Vm(),S=es();const Jm=Um(S);var za={},Fo={exports:{}},cr={},Lo={exports:{}},zo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jd;function qm(){return Jd||(Jd=1,(function(o){function u(G,I){var K=G.length;G.push(I);e:for(;0<K;){var v=K-1>>>1,g=G[v];if(0<p(g,I))G[v]=I,G[K]=g,K=v;else break e}}function s(G){return G.length===0?null:G[0]}function h(G){if(G.length===0)return null;var I=G[0],K=G.pop();if(K!==I){G[0]=K;e:for(var v=0,g=G.length,_=g>>>1;v<_;){var B=2*(v+1)-1,Z=G[B],de=B+1,pe=G[de];if(0>p(Z,K))de<g&&0>p(pe,Z)?(G[v]=pe,G[de]=K,v=de):(G[v]=Z,G[B]=K,v=B);else if(de<g&&0>p(pe,K))G[v]=pe,G[de]=K,v=de;else break e}}return I}function p(G,I){var K=G.sortIndex-I.sortIndex;return K!==0?K:G.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var x=performance;o.unstable_now=function(){return x.now()}}else{var k=Date,w=k.now();o.unstable_now=function(){return k.now()-w}}var c=[],b=[],z=1,j=null,O=3,E=!1,R=!1,H=!1,D=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(G){for(var I=s(b);I!==null;){if(I.callback===null)h(b);else if(I.startTime<=G)h(b),I.sortIndex=I.expirationTime,u(c,I);else break;I=s(b)}}function X(G){if(H=!1,W(G),!R)if(s(c)!==null)R=!0,He(L);else{var I=s(b);I!==null&&Ne(X,I.startTime-G)}}function L(G,I){R=!1,H&&(H=!1,re(P),P=-1),E=!0;var K=O;try{for(W(I),j=s(c);j!==null&&(!(j.expirationTime>I)||G&&!le());){var v=j.callback;if(typeof v=="function"){j.callback=null,O=j.priorityLevel;var g=v(j.expirationTime<=I);I=o.unstable_now(),typeof g=="function"?j.callback=g:j===s(c)&&h(c),W(I)}else h(c);j=s(c)}if(j!==null)var _=!0;else{var B=s(b);B!==null&&Ne(X,B.startTime-I),_=!1}return _}finally{j=null,O=K,E=!1}}var M=!1,Y=null,P=-1,Q=5,oe=-1;function le(){return!(o.unstable_now()-oe<Q)}function me(){if(Y!==null){var G=o.unstable_now();oe=G;var I=!0;try{I=Y(!0,G)}finally{I?xe():(M=!1,Y=null)}}else M=!1}var xe;if(typeof q=="function")xe=function(){q(me)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Re=be.port2;be.port1.onmessage=me,xe=function(){Re.postMessage(null)}}else xe=function(){D(me,0)};function He(G){Y=G,M||(M=!0,xe())}function Ne(G,I){P=D(function(){G(o.unstable_now())},I)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(G){G.callback=null},o.unstable_continueExecution=function(){R||E||(R=!0,He(L))},o.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<G?Math.floor(1e3/G):5},o.unstable_getCurrentPriorityLevel=function(){return O},o.unstable_getFirstCallbackNode=function(){return s(c)},o.unstable_next=function(G){switch(O){case 1:case 2:case 3:var I=3;break;default:I=O}var K=O;O=I;try{return G()}finally{O=K}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(G,I){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var K=O;O=G;try{return I()}finally{O=K}},o.unstable_scheduleCallback=function(G,I,K){var v=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?v+K:v):K=v,G){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=K+g,G={id:z++,callback:I,priorityLevel:G,startTime:K,expirationTime:g,sortIndex:-1},K>v?(G.sortIndex=K,u(b,G),s(c)===null&&G===s(b)&&(H?(re(P),P=-1):H=!0,Ne(X,K-v))):(G.sortIndex=g,u(c,G),R||E||(R=!0,He(L))),G},o.unstable_shouldYield=le,o.unstable_wrapCallback=function(G){var I=O;return function(){var K=O;O=I;try{return G.apply(this,arguments)}finally{O=K}}}})(zo)),zo}var qd;function Wm(){return qd||(qd=1,Lo.exports=qm()),Lo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd;function Ym(){if(Wd)return cr;Wd=1;var o=es(),u=Wm();function s(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h=new Set,p={};function x(e,r){k(e,r),k(e+"Capture",r)}function k(e,r){for(p[e]=r,e=0;e<r.length;e++)h.add(r[e])}var w=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),c=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z={},j={};function O(e){return c.call(j,e)?!0:c.call(z,e)?!1:b.test(e)?j[e]=!0:(z[e]=!0,!1)}function E(e,r,t,n){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function R(e,r,t,n){if(r===null||typeof r>"u"||E(e,r,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function H(e,r,t,n,a,l,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=l,this.removeEmptyString=d}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){D[e]=new H(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];D[r]=new H(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){D[e]=new H(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){D[e]=new H(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){D[e]=new H(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){D[e]=new H(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){D[e]=new H(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){D[e]=new H(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){D[e]=new H(e,5,!1,e.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(re,q);D[r]=new H(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(re,q);D[r]=new H(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(re,q);D[r]=new H(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){D[e]=new H(e,1,!1,e.toLowerCase(),null,!1,!1)}),D.xlinkHref=new H("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){D[e]=new H(e,1,!1,e.toLowerCase(),null,!0,!0)});function W(e,r,t,n){var a=D.hasOwnProperty(r)?D[r]:null;(a!==null?a.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(R(r,t,a,n)&&(t=null),n||a===null?O(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(r=a.attributeName,n=a.attributeNamespace,t===null?e.removeAttribute(r):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,n?e.setAttributeNS(n,r,t):e.setAttribute(r,t))))}var X=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),M=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),le=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),Ne=Symbol.for("react.offscreen"),G=Symbol.iterator;function I(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,v;function g(e){if(v===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);v=r&&r[1]||""}return`
`+v+e}var _=!1;function B(e,r){if(!e||_)return"";_=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var n=F}Reflect.construct(e,[],r)}else{try{r.call()}catch(F){n=F}e.call(r.prototype)}else{try{throw Error()}catch(F){n=F}e()}}catch(F){if(F&&n&&typeof F.stack=="string"){for(var a=F.stack.split(`
`),l=n.stack.split(`
`),d=a.length-1,m=l.length-1;1<=d&&0<=m&&a[d]!==l[m];)m--;for(;1<=d&&0<=m;d--,m--)if(a[d]!==l[m]){if(d!==1||m!==1)do if(d--,m--,0>m||a[d]!==l[m]){var f=`
`+a[d].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=d&&0<=m);break}}}finally{_=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?g(e):""}function Z(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1),e;case 11:return e=B(e.type.render,!1),e;case 1:return e=B(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case M:return"Portal";case Q:return"Profiler";case P:return"StrictMode";case xe:return"Suspense";case be:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case le:return(e.displayName||"Context")+".Consumer";case oe:return(e._context.displayName||"Context")+".Provider";case me:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Re:return r=e.displayName||null,r!==null?r:de(e.type)||"Memo";case He:r=e._payload,e=e._init;try{return de(e(r))}catch{}}return null}function pe(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(r);case 8:return r===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Qe(e){var r=we(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),n=""+e[r];if(!e.hasOwnProperty(r)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,l=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return a.call(this)},set:function(d){n=""+d,l.call(this,d)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function ut(e){e._valueTracker||(e._valueTracker=Qe(e))}function kr(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),n="";return e&&(n=we(e)?e.checked?"true":"false":e.value),e=n,e!==t?(r.setValue(e),!0):!1}function Ot(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fn(e,r){var t=r.checked;return K({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Ln(e,r){var t=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;t=ce(r.value!=null?r.value:t),e._wrapperState={initialChecked:n,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ji(e,r){r=r.checked,r!=null&&W(e,"checked",r,!1)}function rn(e,r){ji(e,r);var t=ce(r.value),n=r.type;if(t!=null)n==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?C(e,r.type,t):r.hasOwnProperty("defaultValue")&&C(e,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function zn(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function C(e,r,t){(r!=="number"||Ot(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var J=Array.isArray;function fe(e,r,t,n){if(e=e.options,r){r={};for(var a=0;a<t.length;a++)r["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=r.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&n&&(e[t].defaultSelected=!0)}else{for(t=""+ce(t),r=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}r!==null||e[a].disabled||(r=e[a])}r!==null&&(r.selected=!0)}}function je(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(s(91));return K({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $r(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(s(92));if(J(t)){if(1<t.length)throw Error(s(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:ce(t)}}function Gr(e,r){var t=ce(r.value),n=ce(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),n!=null&&(e.defaultValue=""+n)}function Rr(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function Si(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Br(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?Si(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mt,Ur=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,t,n,a){MSApp.execUnsafeLocalFunction(function(){return e(r,t,n,a)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(Mt=Mt||document.createElement("div"),Mt.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Mt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Ht(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var dt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ni=["Webkit","ms","Moz","O"];Object.keys(dt).forEach(function(e){Ni.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),dt[r]=dt[e]})});function On(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||dt.hasOwnProperty(e)&&dt[e]?(""+r).trim():r+"px"}function Se(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var n=t.indexOf("--")===0,a=On(t,r[t],n);t==="float"&&(t="cssFloat"),n?e.setProperty(t,a):e[t]=a}}var ct=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Pr(e,r){if(r){if(ct[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(s(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(s(61))}if(r.style!=null&&typeof r.style!="object")throw Error(s(62))}}function _r(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function tn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qr=null,nn=null,an=null;function is(e){if(e=ti(e)){if(typeof Qr!="function")throw Error(s(280));var r=e.stateNode;r&&(r=Wi(r),Qr(e.stateNode,e.type,r))}}function as(e){nn?an?an.push(e):an=[e]:nn=e}function ls(){if(nn){var e=nn,r=an;if(an=nn=null,is(e),r)for(e=0;e<r.length;e++)is(r[e])}}function os(e,r){return e(r)}function ss(){}var Va=!1;function us(e,r,t){if(Va)return e(r,t);Va=!0;try{return os(e,r,t)}finally{Va=!1,(nn!==null||an!==null)&&(ss(),ls())}}function Mn(e,r){var t=e.stateNode;if(t===null)return null;var n=Wi(t);if(n===null)return null;t=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,r,typeof t));return t}var Ja=!1;if(w)try{var Hn={};Object.defineProperty(Hn,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",Hn,Hn),window.removeEventListener("test",Hn,Hn)}catch{Ja=!1}function Jc(e,r,t,n,a,l,d,m,f){var F=Array.prototype.slice.call(arguments,3);try{r.apply(t,F)}catch($){this.onError($)}}var Dn=!1,Ei=null,Ci=!1,qa=null,qc={onError:function(e){Dn=!0,Ei=e}};function Wc(e,r,t,n,a,l,d,m,f){Dn=!1,Ei=null,Jc.apply(qc,arguments)}function Yc(e,r,t,n,a,l,d,m,f){if(Wc.apply(this,arguments),Dn){if(Dn){var F=Ei;Dn=!1,Ei=null}else throw Error(s(198));Ci||(Ci=!0,qa=F)}}function Dt(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function ds(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function cs(e){if(Dt(e)!==e)throw Error(s(188))}function Gc(e){var r=e.alternate;if(!r){if(r=Dt(e),r===null)throw Error(s(188));return r!==e?null:e}for(var t=e,n=r;;){var a=t.return;if(a===null)break;var l=a.alternate;if(l===null){if(n=a.return,n!==null){t=n;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===t)return cs(a),e;if(l===n)return cs(a),r;l=l.sibling}throw Error(s(188))}if(t.return!==n.return)t=a,n=l;else{for(var d=!1,m=a.child;m;){if(m===t){d=!0,t=a,n=l;break}if(m===n){d=!0,n=a,t=l;break}m=m.sibling}if(!d){for(m=l.child;m;){if(m===t){d=!0,t=l,n=a;break}if(m===n){d=!0,n=l,t=a;break}m=m.sibling}if(!d)throw Error(s(189))}}if(t.alternate!==n)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:r}function hs(e){return e=Gc(e),e!==null?ms(e):null}function ms(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=ms(e);if(r!==null)return r;e=e.sibling}return null}var ps=u.unstable_scheduleCallback,fs=u.unstable_cancelCallback,Qc=u.unstable_shouldYield,Xc=u.unstable_requestPaint,Ie=u.unstable_now,Zc=u.unstable_getCurrentPriorityLevel,Wa=u.unstable_ImmediatePriority,gs=u.unstable_UserBlockingPriority,Ti=u.unstable_NormalPriority,eh=u.unstable_LowPriority,bs=u.unstable_IdlePriority,Ri=null,Kr=null;function rh(e){if(Kr&&typeof Kr.onCommitFiberRoot=="function")try{Kr.onCommitFiberRoot(Ri,e,void 0,(e.current.flags&128)===128)}catch{}}var Fr=Math.clz32?Math.clz32:ih,th=Math.log,nh=Math.LN2;function ih(e){return e>>>=0,e===0?32:31-(th(e)/nh|0)|0}var Pi=64,Fi=4194304;function In(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Li(e,r){var t=e.pendingLanes;if(t===0)return 0;var n=0,a=e.suspendedLanes,l=e.pingedLanes,d=t&268435455;if(d!==0){var m=d&~a;m!==0?n=In(m):(l&=d,l!==0&&(n=In(l)))}else d=t&~a,d!==0?n=In(d):l!==0&&(n=In(l));if(n===0)return 0;if(r!==0&&r!==n&&(r&a)===0&&(a=n&-n,l=r&-r,a>=l||a===16&&(l&4194240)!==0))return r;if((n&4)!==0&&(n|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=n;0<r;)t=31-Fr(r),a=1<<t,n|=e[t],r&=~a;return n}function ah(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lh(e,r){for(var t=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var d=31-Fr(l),m=1<<d,f=a[d];f===-1?((m&t)===0||(m&n)!==0)&&(a[d]=ah(m,r)):f<=r&&(e.expiredLanes|=m),l&=~m}}function Ya(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vs(){var e=Pi;return Pi<<=1,(Pi&4194240)===0&&(Pi=64),e}function Ga(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function An(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Fr(r),e[r]=t}function oh(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Fr(t),l=1<<a;r[a]=0,n[a]=-1,e[a]=-1,t&=~l}}function Qa(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var n=31-Fr(t),a=1<<n;a&r|e[n]&r&&(e[n]|=r),t&=~a}}var Ee=0;function ks(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ys,Xa,xs,ws,js,Za=!1,zi=[],mt=null,pt=null,ft=null,$n=new Map,Bn=new Map,gt=[],sh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ss(e,r){switch(e){case"focusin":case"focusout":mt=null;break;case"dragenter":case"dragleave":pt=null;break;case"mouseover":case"mouseout":ft=null;break;case"pointerover":case"pointerout":$n.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bn.delete(r.pointerId)}}function Un(e,r,t,n,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:r,domEventName:t,eventSystemFlags:n,nativeEvent:l,targetContainers:[a]},r!==null&&(r=ti(r),r!==null&&Xa(r)),e):(e.eventSystemFlags|=n,r=e.targetContainers,a!==null&&r.indexOf(a)===-1&&r.push(a),e)}function uh(e,r,t,n,a){switch(r){case"focusin":return mt=Un(mt,e,r,t,n,a),!0;case"dragenter":return pt=Un(pt,e,r,t,n,a),!0;case"mouseover":return ft=Un(ft,e,r,t,n,a),!0;case"pointerover":var l=a.pointerId;return $n.set(l,Un($n.get(l)||null,e,r,t,n,a)),!0;case"gotpointercapture":return l=a.pointerId,Bn.set(l,Un(Bn.get(l)||null,e,r,t,n,a)),!0}return!1}function Ns(e){var r=It(e.target);if(r!==null){var t=Dt(r);if(t!==null){if(r=t.tag,r===13){if(r=ds(t),r!==null){e.blockedOn=r,js(e.priority,function(){xs(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oi(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=rl(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);ht=n,t.target.dispatchEvent(n),ht=null}else return r=ti(t),r!==null&&Xa(r),e.blockedOn=t,!1;r.shift()}return!0}function Es(e,r,t){Oi(e)&&t.delete(r)}function dh(){Za=!1,mt!==null&&Oi(mt)&&(mt=null),pt!==null&&Oi(pt)&&(pt=null),ft!==null&&Oi(ft)&&(ft=null),$n.forEach(Es),Bn.forEach(Es)}function _n(e,r){e.blockedOn===r&&(e.blockedOn=null,Za||(Za=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,dh)))}function Kn(e){function r(a){return _n(a,e)}if(0<zi.length){_n(zi[0],e);for(var t=1;t<zi.length;t++){var n=zi[t];n.blockedOn===e&&(n.blockedOn=null)}}for(mt!==null&&_n(mt,e),pt!==null&&_n(pt,e),ft!==null&&_n(ft,e),$n.forEach(r),Bn.forEach(r),t=0;t<gt.length;t++)n=gt[t],n.blockedOn===e&&(n.blockedOn=null);for(;0<gt.length&&(t=gt[0],t.blockedOn===null);)Ns(t),t.blockedOn===null&&gt.shift()}var ln=X.ReactCurrentBatchConfig,Mi=!0;function ch(e,r,t,n){var a=Ee,l=ln.transition;ln.transition=null;try{Ee=1,el(e,r,t,n)}finally{Ee=a,ln.transition=l}}function hh(e,r,t,n){var a=Ee,l=ln.transition;ln.transition=null;try{Ee=4,el(e,r,t,n)}finally{Ee=a,ln.transition=l}}function el(e,r,t,n){if(Mi){var a=rl(e,r,t,n);if(a===null)vl(e,r,n,Hi,t),Ss(e,n);else if(uh(a,e,r,t,n))n.stopPropagation();else if(Ss(e,n),r&4&&-1<sh.indexOf(e)){for(;a!==null;){var l=ti(a);if(l!==null&&ys(l),l=rl(e,r,t,n),l===null&&vl(e,r,n,Hi,t),l===a)break;a=l}a!==null&&n.stopPropagation()}else vl(e,r,n,null,t)}}var Hi=null;function rl(e,r,t,n){if(Hi=null,e=tn(n),e=It(e),e!==null)if(r=Dt(e),r===null)e=null;else if(t=r.tag,t===13){if(e=ds(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Hi=e,null}function Cs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zc()){case Wa:return 1;case gs:return 4;case Ti:case eh:return 16;case bs:return 536870912;default:return 16}default:return 16}}var bt=null,tl=null,Di=null;function Ts(){if(Di)return Di;var e,r=tl,t=r.length,n,a="value"in bt?bt.value:bt.textContent,l=a.length;for(e=0;e<t&&r[e]===a[e];e++);var d=t-e;for(n=1;n<=d&&r[t-n]===a[l-n];n++);return Di=a.slice(e,1<n?1-n:void 0)}function Ii(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Ai(){return!0}function Rs(){return!1}function mr(e){function r(t,n,a,l,d){this._reactName=t,this._targetInst=a,this.type=n,this.nativeEvent=l,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(t=e[m],this[m]=t?t(l):l[m]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ai:Rs,this.isPropagationStopped=Rs,this}return K(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ai)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ai)},persist:function(){},isPersistent:Ai}),r}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=mr(on),Vn=K({},on,{view:0,detail:0}),mh=mr(Vn),il,al,Jn,$i=K({},Vn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jn&&(Jn&&e.type==="mousemove"?(il=e.screenX-Jn.screenX,al=e.screenY-Jn.screenY):al=il=0,Jn=e),il)},movementY:function(e){return"movementY"in e?e.movementY:al}}),Ps=mr($i),ph=K({},$i,{dataTransfer:0}),fh=mr(ph),gh=K({},Vn,{relatedTarget:0}),ll=mr(gh),bh=K({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),vh=mr(bh),kh=K({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yh=mr(kh),xh=K({},on,{data:0}),Fs=mr(xh),wh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nh(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=Sh[e])?!!r[e]:!1}function ol(){return Nh}var Eh=K({},Vn,{key:function(e){if(e.key){var r=wh[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Ii(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ol,charCode:function(e){return e.type==="keypress"?Ii(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ii(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ch=mr(Eh),Th=K({},$i,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ls=mr(Th),Rh=K({},Vn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ol}),Ph=mr(Rh),Fh=K({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lh=mr(Fh),zh=K({},$i,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Oh=mr(zh),Mh=[9,13,27,32],sl=w&&"CompositionEvent"in window,qn=null;w&&"documentMode"in document&&(qn=document.documentMode);var Hh=w&&"TextEvent"in window&&!qn,zs=w&&(!sl||qn&&8<qn&&11>=qn),Os=" ",Ms=!1;function Hs(e,r){switch(e){case"keyup":return Mh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ds(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sn=!1;function Dh(e,r){switch(e){case"compositionend":return Ds(r);case"keypress":return r.which!==32?null:(Ms=!0,Os);case"textInput":return e=r.data,e===Os&&Ms?null:e;default:return null}}function Ih(e,r){if(sn)return e==="compositionend"||!sl&&Hs(e,r)?(e=Ts(),Di=tl=bt=null,sn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return zs&&r.locale!=="ko"?null:r.data;default:return null}}var Ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Is(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Ah[e.type]:r==="textarea"}function As(e,r,t,n){as(n),r=Vi(r,"onChange"),0<r.length&&(t=new nl("onChange","change",null,t,n),e.push({event:t,listeners:r}))}var Wn=null,Yn=null;function $h(e){nu(e,0)}function Bi(e){var r=mn(e);if(kr(r))return e}function Bh(e,r){if(e==="change")return r}var $s=!1;if(w){var ul;if(w){var dl="oninput"in document;if(!dl){var Bs=document.createElement("div");Bs.setAttribute("oninput","return;"),dl=typeof Bs.oninput=="function"}ul=dl}else ul=!1;$s=ul&&(!document.documentMode||9<document.documentMode)}function Us(){Wn&&(Wn.detachEvent("onpropertychange",_s),Yn=Wn=null)}function _s(e){if(e.propertyName==="value"&&Bi(Yn)){var r=[];As(r,Yn,e,tn(e)),us($h,r)}}function Uh(e,r,t){e==="focusin"?(Us(),Wn=r,Yn=t,Wn.attachEvent("onpropertychange",_s)):e==="focusout"&&Us()}function _h(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bi(Yn)}function Kh(e,r){if(e==="click")return Bi(r)}function Vh(e,r){if(e==="input"||e==="change")return Bi(r)}function Jh(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Lr=typeof Object.is=="function"?Object.is:Jh;function Gn(e,r){if(Lr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var a=t[n];if(!c.call(r,a)||!Lr(e[a],r[a]))return!1}return!0}function Ks(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vs(e,r){var t=Ks(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=r&&n>=r)return{node:t,offset:r-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ks(t)}}function Js(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Js(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function qs(){for(var e=window,r=Ot();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=Ot(e.document)}return r}function cl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function qh(e){var r=qs(),t=e.focusedElem,n=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&Js(t.ownerDocument.documentElement,t)){if(n!==null&&cl(t)){if(r=n.start,e=n.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,l=Math.min(n.start,a);n=n.end===void 0?l:Math.min(n.end,a),!e.extend&&l>n&&(a=n,n=l,l=a),a=Vs(t,l);var d=Vs(t,n);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(a.node,a.offset),e.removeAllRanges(),l>n?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wh=w&&"documentMode"in document&&11>=document.documentMode,un=null,hl=null,Qn=null,ml=!1;function Ws(e,r,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ml||un==null||un!==Ot(n)||(n=un,"selectionStart"in n&&cl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Qn&&Gn(Qn,n)||(Qn=n,n=Vi(hl,"onSelect"),0<n.length&&(r=new nl("onSelect","select",null,r,t),e.push({event:r,listeners:n}),r.target=un)))}function Ui(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var dn={animationend:Ui("Animation","AnimationEnd"),animationiteration:Ui("Animation","AnimationIteration"),animationstart:Ui("Animation","AnimationStart"),transitionend:Ui("Transition","TransitionEnd")},pl={},Ys={};w&&(Ys=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function _i(e){if(pl[e])return pl[e];if(!dn[e])return e;var r=dn[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in Ys)return pl[e]=r[t];return e}var Gs=_i("animationend"),Qs=_i("animationiteration"),Xs=_i("animationstart"),Zs=_i("transitionend"),eu=new Map,ru="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vt(e,r){eu.set(e,r),x(r,[e])}for(var fl=0;fl<ru.length;fl++){var gl=ru[fl],Yh=gl.toLowerCase(),Gh=gl[0].toUpperCase()+gl.slice(1);vt(Yh,"on"+Gh)}vt(Gs,"onAnimationEnd"),vt(Qs,"onAnimationIteration"),vt(Xs,"onAnimationStart"),vt("dblclick","onDoubleClick"),vt("focusin","onFocus"),vt("focusout","onBlur"),vt(Zs,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),x("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),x("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),x("onBeforeInput",["compositionend","keypress","textInput","paste"]),x("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xn));function tu(e,r,t){var n=e.type||"unknown-event";e.currentTarget=t,Yc(n,r,void 0,e),e.currentTarget=null}function nu(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],a=n.event;n=n.listeners;e:{var l=void 0;if(r)for(var d=n.length-1;0<=d;d--){var m=n[d],f=m.instance,F=m.currentTarget;if(m=m.listener,f!==l&&a.isPropagationStopped())break e;tu(a,m,F),l=f}else for(d=0;d<n.length;d++){if(m=n[d],f=m.instance,F=m.currentTarget,m=m.listener,f!==l&&a.isPropagationStopped())break e;tu(a,m,F),l=f}}}if(Ci)throw e=qa,Ci=!1,qa=null,e}function Pe(e,r){var t=r[Sl];t===void 0&&(t=r[Sl]=new Set);var n=e+"__bubble";t.has(n)||(iu(r,e,2,!1),t.add(n))}function bl(e,r,t){var n=0;r&&(n|=4),iu(t,e,n,r)}var Ki="_reactListening"+Math.random().toString(36).slice(2);function Zn(e){if(!e[Ki]){e[Ki]=!0,h.forEach(function(t){t!=="selectionchange"&&(Qh.has(t)||bl(t,!1,e),bl(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Ki]||(r[Ki]=!0,bl("selectionchange",!1,r))}}function iu(e,r,t,n){switch(Cs(r)){case 1:var a=ch;break;case 4:a=hh;break;default:a=el}t=a.bind(null,r,t,e),a=void 0,!Ja||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(r,t,{capture:!0,passive:a}):e.addEventListener(r,t,!0):a!==void 0?e.addEventListener(r,t,{passive:a}):e.addEventListener(r,t,!1)}function vl(e,r,t,n,a){var l=n;if((r&1)===0&&(r&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var m=n.stateNode.containerInfo;if(m===a||m.nodeType===8&&m.parentNode===a)break;if(d===4)for(d=n.return;d!==null;){var f=d.tag;if((f===3||f===4)&&(f=d.stateNode.containerInfo,f===a||f.nodeType===8&&f.parentNode===a))return;d=d.return}for(;m!==null;){if(d=It(m),d===null)return;if(f=d.tag,f===5||f===6){n=l=d;continue e}m=m.parentNode}}n=n.return}us(function(){var F=l,$=tn(t),U=[];e:{var A=eu.get(e);if(A!==void 0){var ee=nl,ne=e;switch(e){case"keypress":if(Ii(t)===0)break e;case"keydown":case"keyup":ee=Ch;break;case"focusin":ne="focus",ee=ll;break;case"focusout":ne="blur",ee=ll;break;case"beforeblur":case"afterblur":ee=ll;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Ps;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=fh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=Ph;break;case Gs:case Qs:case Xs:ee=vh;break;case Zs:ee=Lh;break;case"scroll":ee=mh;break;case"wheel":ee=Oh;break;case"copy":case"cut":case"paste":ee=yh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=Ls}var ie=(r&4)!==0,Ae=!ie&&e==="scroll",N=ie?A!==null?A+"Capture":null:A;ie=[];for(var y=F,T;y!==null;){T=y;var V=T.stateNode;if(T.tag===5&&V!==null&&(T=V,N!==null&&(V=Mn(y,N),V!=null&&ie.push(ei(y,V,T)))),Ae)break;y=y.return}0<ie.length&&(A=new ee(A,ne,null,t,$),U.push({event:A,listeners:ie}))}}if((r&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",ee=e==="mouseout"||e==="pointerout",A&&t!==ht&&(ne=t.relatedTarget||t.fromElement)&&(It(ne)||ne[Xr]))break e;if((ee||A)&&(A=$.window===$?$:(A=$.ownerDocument)?A.defaultView||A.parentWindow:window,ee?(ne=t.relatedTarget||t.toElement,ee=F,ne=ne?It(ne):null,ne!==null&&(Ae=Dt(ne),ne!==Ae||ne.tag!==5&&ne.tag!==6)&&(ne=null)):(ee=null,ne=F),ee!==ne)){if(ie=Ps,V="onMouseLeave",N="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Ls,V="onPointerLeave",N="onPointerEnter",y="pointer"),Ae=ee==null?A:mn(ee),T=ne==null?A:mn(ne),A=new ie(V,y+"leave",ee,t,$),A.target=Ae,A.relatedTarget=T,V=null,It($)===F&&(ie=new ie(N,y+"enter",ne,t,$),ie.target=T,ie.relatedTarget=Ae,V=ie),Ae=V,ee&&ne)r:{for(ie=ee,N=ne,y=0,T=ie;T;T=cn(T))y++;for(T=0,V=N;V;V=cn(V))T++;for(;0<y-T;)ie=cn(ie),y--;for(;0<T-y;)N=cn(N),T--;for(;y--;){if(ie===N||N!==null&&ie===N.alternate)break r;ie=cn(ie),N=cn(N)}ie=null}else ie=null;ee!==null&&au(U,A,ee,ie,!1),ne!==null&&Ae!==null&&au(U,Ae,ne,ie,!0)}}e:{if(A=F?mn(F):window,ee=A.nodeName&&A.nodeName.toLowerCase(),ee==="select"||ee==="input"&&A.type==="file")var ae=Bh;else if(Is(A))if($s)ae=Vh;else{ae=_h;var se=Uh}else(ee=A.nodeName)&&ee.toLowerCase()==="input"&&(A.type==="checkbox"||A.type==="radio")&&(ae=Kh);if(ae&&(ae=ae(e,F))){As(U,ae,t,$);break e}se&&se(e,A,F),e==="focusout"&&(se=A._wrapperState)&&se.controlled&&A.type==="number"&&C(A,"number",A.value)}switch(se=F?mn(F):window,e){case"focusin":(Is(se)||se.contentEditable==="true")&&(un=se,hl=F,Qn=null);break;case"focusout":Qn=hl=un=null;break;case"mousedown":ml=!0;break;case"contextmenu":case"mouseup":case"dragend":ml=!1,Ws(U,t,$);break;case"selectionchange":if(Wh)break;case"keydown":case"keyup":Ws(U,t,$)}var ue;if(sl)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else sn?Hs(e,t)&&(he="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(he="onCompositionStart");he&&(zs&&t.locale!=="ko"&&(sn||he!=="onCompositionStart"?he==="onCompositionEnd"&&sn&&(ue=Ts()):(bt=$,tl="value"in bt?bt.value:bt.textContent,sn=!0)),se=Vi(F,he),0<se.length&&(he=new Fs(he,e,null,t,$),U.push({event:he,listeners:se}),ue?he.data=ue:(ue=Ds(t),ue!==null&&(he.data=ue)))),(ue=Hh?Dh(e,t):Ih(e,t))&&(F=Vi(F,"onBeforeInput"),0<F.length&&($=new Fs("onBeforeInput","beforeinput",null,t,$),U.push({event:$,listeners:F}),$.data=ue))}nu(U,r)})}function ei(e,r,t){return{instance:e,listener:r,currentTarget:t}}function Vi(e,r){for(var t=r+"Capture",n=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Mn(e,t),l!=null&&n.unshift(ei(e,l,a)),l=Mn(e,r),l!=null&&n.push(ei(e,l,a))),e=e.return}return n}function cn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function au(e,r,t,n,a){for(var l=r._reactName,d=[];t!==null&&t!==n;){var m=t,f=m.alternate,F=m.stateNode;if(f!==null&&f===n)break;m.tag===5&&F!==null&&(m=F,a?(f=Mn(t,l),f!=null&&d.unshift(ei(t,f,m))):a||(f=Mn(t,l),f!=null&&d.push(ei(t,f,m)))),t=t.return}d.length!==0&&e.push({event:r,listeners:d})}var Xh=/\r\n?/g,Zh=/\u0000|\uFFFD/g;function lu(e){return(typeof e=="string"?e:""+e).replace(Xh,`
`).replace(Zh,"")}function Ji(e,r,t){if(r=lu(r),lu(e)!==r&&t)throw Error(s(425))}function qi(){}var kl=null,yl=null;function xl(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,em=typeof clearTimeout=="function"?clearTimeout:void 0,ou=typeof Promise=="function"?Promise:void 0,rm=typeof queueMicrotask=="function"?queueMicrotask:typeof ou<"u"?function(e){return ou.resolve(null).then(e).catch(tm)}:wl;function tm(e){setTimeout(function(){throw e})}function jl(e,r){var t=r,n=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(n===0){e.removeChild(a),Kn(r);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=a}while(t);Kn(r)}function kt(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function su(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),Vr="__reactFiber$"+hn,ri="__reactProps$"+hn,Xr="__reactContainer$"+hn,Sl="__reactEvents$"+hn,nm="__reactListeners$"+hn,im="__reactHandles$"+hn;function It(e){var r=e[Vr];if(r)return r;for(var t=e.parentNode;t;){if(r=t[Xr]||t[Vr]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=su(e);e!==null;){if(t=e[Vr])return t;e=su(e)}return r}e=t,t=e.parentNode}return null}function ti(e){return e=e[Vr]||e[Xr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Wi(e){return e[ri]||null}var Nl=[],pn=-1;function yt(e){return{current:e}}function Fe(e){0>pn||(e.current=Nl[pn],Nl[pn]=null,pn--)}function Te(e,r){pn++,Nl[pn]=e.current,e.current=r}var xt={},Xe=yt(xt),lr=yt(!1),At=xt;function fn(e,r){var t=e.type.contextTypes;if(!t)return xt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in t)a[l]=r[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),a}function or(e){return e=e.childContextTypes,e!=null}function Yi(){Fe(lr),Fe(Xe)}function uu(e,r,t){if(Xe.current!==xt)throw Error(s(168));Te(Xe,r),Te(lr,t)}function du(e,r,t){var n=e.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var a in n)if(!(a in r))throw Error(s(108,pe(e)||"Unknown",a));return K({},t,n)}function Gi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||xt,At=Xe.current,Te(Xe,e),Te(lr,lr.current),!0}function cu(e,r,t){var n=e.stateNode;if(!n)throw Error(s(169));t?(e=du(e,r,At),n.__reactInternalMemoizedMergedChildContext=e,Fe(lr),Fe(Xe),Te(Xe,e)):Fe(lr),Te(lr,t)}var Zr=null,Qi=!1,El=!1;function hu(e){Zr===null?Zr=[e]:Zr.push(e)}function am(e){Qi=!0,hu(e)}function wt(){if(!El&&Zr!==null){El=!0;var e=0,r=Ee;try{var t=Zr;for(Ee=1;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}Zr=null,Qi=!1}catch(a){throw Zr!==null&&(Zr=Zr.slice(e+1)),ps(Wa,wt),a}finally{Ee=r,El=!1}}return null}var gn=[],bn=0,Xi=null,Zi=0,yr=[],xr=0,$t=null,et=1,rt="";function Bt(e,r){gn[bn++]=Zi,gn[bn++]=Xi,Xi=e,Zi=r}function mu(e,r,t){yr[xr++]=et,yr[xr++]=rt,yr[xr++]=$t,$t=e;var n=et;e=rt;var a=32-Fr(n)-1;n&=~(1<<a),t+=1;var l=32-Fr(r)+a;if(30<l){var d=a-a%5;l=(n&(1<<d)-1).toString(32),n>>=d,a-=d,et=1<<32-Fr(r)+a|t<<a|n,rt=l+e}else et=1<<l|t<<a|n,rt=e}function Cl(e){e.return!==null&&(Bt(e,1),mu(e,1,0))}function Tl(e){for(;e===Xi;)Xi=gn[--bn],gn[bn]=null,Zi=gn[--bn],gn[bn]=null;for(;e===$t;)$t=yr[--xr],yr[xr]=null,rt=yr[--xr],yr[xr]=null,et=yr[--xr],yr[xr]=null}var pr=null,fr=null,ze=!1,zr=null;function pu(e,r){var t=Nr(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function fu(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,pr=e,fr=kt(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,pr=e,fr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=$t!==null?{id:et,overflow:rt}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=Nr(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,pr=e,fr=null,!0):!1;default:return!1}}function Rl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Pl(e){if(ze){var r=fr;if(r){var t=r;if(!fu(e,r)){if(Rl(e))throw Error(s(418));r=kt(t.nextSibling);var n=pr;r&&fu(e,r)?pu(n,t):(e.flags=e.flags&-4097|2,ze=!1,pr=e)}}else{if(Rl(e))throw Error(s(418));e.flags=e.flags&-4097|2,ze=!1,pr=e}}}function gu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;pr=e}function ea(e){if(e!==pr)return!1;if(!ze)return gu(e),ze=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!xl(e.type,e.memoizedProps)),r&&(r=fr)){if(Rl(e))throw bu(),Error(s(418));for(;r;)pu(e,r),r=kt(r.nextSibling)}if(gu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){fr=kt(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}fr=null}}else fr=pr?kt(e.stateNode.nextSibling):null;return!0}function bu(){for(var e=fr;e;)e=kt(e.nextSibling)}function vn(){fr=pr=null,ze=!1}function Fl(e){zr===null?zr=[e]:zr.push(e)}var lm=X.ReactCurrentBatchConfig;function ni(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(s(309));var n=t.stateNode}if(!n)throw Error(s(147,e));var a=n,l=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===l?r.ref:(r=function(d){var m=a.refs;d===null?delete m[l]:m[l]=d},r._stringRef=l,r)}if(typeof e!="string")throw Error(s(284));if(!t._owner)throw Error(s(290,e))}return e}function ra(e,r){throw e=Object.prototype.toString.call(r),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function vu(e){var r=e._init;return r(e._payload)}function ku(e){function r(N,y){if(e){var T=N.deletions;T===null?(N.deletions=[y],N.flags|=16):T.push(y)}}function t(N,y){if(!e)return null;for(;y!==null;)r(N,y),y=y.sibling;return null}function n(N,y){for(N=new Map;y!==null;)y.key!==null?N.set(y.key,y):N.set(y.index,y),y=y.sibling;return N}function a(N,y){return N=Pt(N,y),N.index=0,N.sibling=null,N}function l(N,y,T){return N.index=T,e?(T=N.alternate,T!==null?(T=T.index,T<y?(N.flags|=2,y):T):(N.flags|=2,y)):(N.flags|=1048576,y)}function d(N){return e&&N.alternate===null&&(N.flags|=2),N}function m(N,y,T,V){return y===null||y.tag!==6?(y=jo(T,N.mode,V),y.return=N,y):(y=a(y,T),y.return=N,y)}function f(N,y,T,V){var ae=T.type;return ae===Y?$(N,y,T.props.children,V,T.key):y!==null&&(y.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===He&&vu(ae)===y.type)?(V=a(y,T.props),V.ref=ni(N,y,T),V.return=N,V):(V=Na(T.type,T.key,T.props,null,N.mode,V),V.ref=ni(N,y,T),V.return=N,V)}function F(N,y,T,V){return y===null||y.tag!==4||y.stateNode.containerInfo!==T.containerInfo||y.stateNode.implementation!==T.implementation?(y=So(T,N.mode,V),y.return=N,y):(y=a(y,T.children||[]),y.return=N,y)}function $(N,y,T,V,ae){return y===null||y.tag!==7?(y=Yt(T,N.mode,V,ae),y.return=N,y):(y=a(y,T),y.return=N,y)}function U(N,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return y=jo(""+y,N.mode,T),y.return=N,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case L:return T=Na(y.type,y.key,y.props,null,N.mode,T),T.ref=ni(N,null,y),T.return=N,T;case M:return y=So(y,N.mode,T),y.return=N,y;case He:var V=y._init;return U(N,V(y._payload),T)}if(J(y)||I(y))return y=Yt(y,N.mode,T,null),y.return=N,y;ra(N,y)}return null}function A(N,y,T,V){var ae=y!==null?y.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return ae!==null?null:m(N,y,""+T,V);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case L:return T.key===ae?f(N,y,T,V):null;case M:return T.key===ae?F(N,y,T,V):null;case He:return ae=T._init,A(N,y,ae(T._payload),V)}if(J(T)||I(T))return ae!==null?null:$(N,y,T,V,null);ra(N,T)}return null}function ee(N,y,T,V,ae){if(typeof V=="string"&&V!==""||typeof V=="number")return N=N.get(T)||null,m(y,N,""+V,ae);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case L:return N=N.get(V.key===null?T:V.key)||null,f(y,N,V,ae);case M:return N=N.get(V.key===null?T:V.key)||null,F(y,N,V,ae);case He:var se=V._init;return ee(N,y,T,se(V._payload),ae)}if(J(V)||I(V))return N=N.get(T)||null,$(y,N,V,ae,null);ra(y,V)}return null}function ne(N,y,T,V){for(var ae=null,se=null,ue=y,he=y=0,qe=null;ue!==null&&he<T.length;he++){ue.index>he?(qe=ue,ue=null):qe=ue.sibling;var ke=A(N,ue,T[he],V);if(ke===null){ue===null&&(ue=qe);break}e&&ue&&ke.alternate===null&&r(N,ue),y=l(ke,y,he),se===null?ae=ke:se.sibling=ke,se=ke,ue=qe}if(he===T.length)return t(N,ue),ze&&Bt(N,he),ae;if(ue===null){for(;he<T.length;he++)ue=U(N,T[he],V),ue!==null&&(y=l(ue,y,he),se===null?ae=ue:se.sibling=ue,se=ue);return ze&&Bt(N,he),ae}for(ue=n(N,ue);he<T.length;he++)qe=ee(ue,N,he,T[he],V),qe!==null&&(e&&qe.alternate!==null&&ue.delete(qe.key===null?he:qe.key),y=l(qe,y,he),se===null?ae=qe:se.sibling=qe,se=qe);return e&&ue.forEach(function(Ft){return r(N,Ft)}),ze&&Bt(N,he),ae}function ie(N,y,T,V){var ae=I(T);if(typeof ae!="function")throw Error(s(150));if(T=ae.call(T),T==null)throw Error(s(151));for(var se=ae=null,ue=y,he=y=0,qe=null,ke=T.next();ue!==null&&!ke.done;he++,ke=T.next()){ue.index>he?(qe=ue,ue=null):qe=ue.sibling;var Ft=A(N,ue,ke.value,V);if(Ft===null){ue===null&&(ue=qe);break}e&&ue&&Ft.alternate===null&&r(N,ue),y=l(Ft,y,he),se===null?ae=Ft:se.sibling=Ft,se=Ft,ue=qe}if(ke.done)return t(N,ue),ze&&Bt(N,he),ae;if(ue===null){for(;!ke.done;he++,ke=T.next())ke=U(N,ke.value,V),ke!==null&&(y=l(ke,y,he),se===null?ae=ke:se.sibling=ke,se=ke);return ze&&Bt(N,he),ae}for(ue=n(N,ue);!ke.done;he++,ke=T.next())ke=ee(ue,N,he,ke.value,V),ke!==null&&(e&&ke.alternate!==null&&ue.delete(ke.key===null?he:ke.key),y=l(ke,y,he),se===null?ae=ke:se.sibling=ke,se=ke);return e&&ue.forEach(function(Am){return r(N,Am)}),ze&&Bt(N,he),ae}function Ae(N,y,T,V){if(typeof T=="object"&&T!==null&&T.type===Y&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case L:e:{for(var ae=T.key,se=y;se!==null;){if(se.key===ae){if(ae=T.type,ae===Y){if(se.tag===7){t(N,se.sibling),y=a(se,T.props.children),y.return=N,N=y;break e}}else if(se.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===He&&vu(ae)===se.type){t(N,se.sibling),y=a(se,T.props),y.ref=ni(N,se,T),y.return=N,N=y;break e}t(N,se);break}else r(N,se);se=se.sibling}T.type===Y?(y=Yt(T.props.children,N.mode,V,T.key),y.return=N,N=y):(V=Na(T.type,T.key,T.props,null,N.mode,V),V.ref=ni(N,y,T),V.return=N,N=V)}return d(N);case M:e:{for(se=T.key;y!==null;){if(y.key===se)if(y.tag===4&&y.stateNode.containerInfo===T.containerInfo&&y.stateNode.implementation===T.implementation){t(N,y.sibling),y=a(y,T.children||[]),y.return=N,N=y;break e}else{t(N,y);break}else r(N,y);y=y.sibling}y=So(T,N.mode,V),y.return=N,N=y}return d(N);case He:return se=T._init,Ae(N,y,se(T._payload),V)}if(J(T))return ne(N,y,T,V);if(I(T))return ie(N,y,T,V);ra(N,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,y!==null&&y.tag===6?(t(N,y.sibling),y=a(y,T),y.return=N,N=y):(t(N,y),y=jo(T,N.mode,V),y.return=N,N=y),d(N)):t(N,y)}return Ae}var kn=ku(!0),yu=ku(!1),ta=yt(null),na=null,yn=null,Ll=null;function zl(){Ll=yn=na=null}function Ol(e){var r=ta.current;Fe(ta),e._currentValue=r}function Ml(e,r,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),e===t)break;e=e.return}}function xn(e,r){na=e,Ll=yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(sr=!0),e.firstContext=null)}function wr(e){var r=e._currentValue;if(Ll!==e)if(e={context:e,memoizedValue:r,next:null},yn===null){if(na===null)throw Error(s(308));yn=e,na.dependencies={lanes:0,firstContext:e}}else yn=yn.next=e;return r}var Ut=null;function Hl(e){Ut===null?Ut=[e]:Ut.push(e)}function xu(e,r,t,n){var a=r.interleaved;return a===null?(t.next=t,Hl(r)):(t.next=a.next,a.next=t),r.interleaved=t,tt(e,n)}function tt(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var jt=!1;function Dl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wu(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function St(e,r,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ve&2)!==0){var a=n.pending;return a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r,tt(e,t)}return a=n.interleaved,a===null?(r.next=r,Hl(n)):(r.next=a.next,a.next=r),n.interleaved=r,tt(e,t)}function ia(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var n=r.lanes;n&=e.pendingLanes,t|=n,r.lanes=t,Qa(e,t)}}function ju(e,r){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var a=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?a=l=d:l=l.next=d,t=t.next}while(t!==null);l===null?a=l=r:l=l.next=r}else a=l=r;t={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function aa(e,r,t,n){var a=e.updateQueue;jt=!1;var l=a.firstBaseUpdate,d=a.lastBaseUpdate,m=a.shared.pending;if(m!==null){a.shared.pending=null;var f=m,F=f.next;f.next=null,d===null?l=F:d.next=F,d=f;var $=e.alternate;$!==null&&($=$.updateQueue,m=$.lastBaseUpdate,m!==d&&(m===null?$.firstBaseUpdate=F:m.next=F,$.lastBaseUpdate=f))}if(l!==null){var U=a.baseState;d=0,$=F=f=null,m=l;do{var A=m.lane,ee=m.eventTime;if((n&A)===A){$!==null&&($=$.next={eventTime:ee,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var ne=e,ie=m;switch(A=r,ee=t,ie.tag){case 1:if(ne=ie.payload,typeof ne=="function"){U=ne.call(ee,U,A);break e}U=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=ie.payload,A=typeof ne=="function"?ne.call(ee,U,A):ne,A==null)break e;U=K({},U,A);break e;case 2:jt=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,A=a.effects,A===null?a.effects=[m]:A.push(m))}else ee={eventTime:ee,lane:A,tag:m.tag,payload:m.payload,callback:m.callback,next:null},$===null?(F=$=ee,f=U):$=$.next=ee,d|=A;if(m=m.next,m===null){if(m=a.shared.pending,m===null)break;A=m,m=A.next,A.next=null,a.lastBaseUpdate=A,a.shared.pending=null}}while(!0);if($===null&&(f=U),a.baseState=f,a.firstBaseUpdate=F,a.lastBaseUpdate=$,r=a.shared.interleaved,r!==null){a=r;do d|=a.lane,a=a.next;while(a!==r)}else l===null&&(a.shared.lanes=0);Vt|=d,e.lanes=d,e.memoizedState=U}}function Su(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var n=e[r],a=n.callback;if(a!==null){if(n.callback=null,n=t,typeof a!="function")throw Error(s(191,a));a.call(n)}}}var ii={},Jr=yt(ii),ai=yt(ii),li=yt(ii);function _t(e){if(e===ii)throw Error(s(174));return e}function Il(e,r){switch(Te(li,r),Te(ai,e),Te(Jr,ii),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Br(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Br(r,e)}Fe(Jr),Te(Jr,r)}function wn(){Fe(Jr),Fe(ai),Fe(li)}function Nu(e){_t(li.current);var r=_t(Jr.current),t=Br(r,e.type);r!==t&&(Te(ai,e),Te(Jr,t))}function Al(e){ai.current===e&&(Fe(Jr),Fe(ai))}var Oe=yt(0);function la(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var $l=[];function Bl(){for(var e=0;e<$l.length;e++)$l[e]._workInProgressVersionPrimary=null;$l.length=0}var oa=X.ReactCurrentDispatcher,Ul=X.ReactCurrentBatchConfig,Kt=0,Me=null,Be=null,Ve=null,sa=!1,oi=!1,si=0,om=0;function Ze(){throw Error(s(321))}function _l(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!Lr(e[t],r[t]))return!1;return!0}function Kl(e,r,t,n,a,l){if(Kt=l,Me=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,oa.current=e===null||e.memoizedState===null?cm:hm,e=t(n,a),oi){l=0;do{if(oi=!1,si=0,25<=l)throw Error(s(301));l+=1,Ve=Be=null,r.updateQueue=null,oa.current=mm,e=t(n,a)}while(oi)}if(oa.current=ca,r=Be!==null&&Be.next!==null,Kt=0,Ve=Be=Me=null,sa=!1,r)throw Error(s(300));return e}function Vl(){var e=si!==0;return si=0,e}function qr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?Me.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function jr(){if(Be===null){var e=Me.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var r=Ve===null?Me.memoizedState:Ve.next;if(r!==null)Ve=r,Be=e;else{if(e===null)throw Error(s(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ve===null?Me.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function ui(e,r){return typeof r=="function"?r(e):r}function Jl(e){var r=jr(),t=r.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var n=Be,a=n.baseQueue,l=t.pending;if(l!==null){if(a!==null){var d=a.next;a.next=l.next,l.next=d}n.baseQueue=a=l,t.pending=null}if(a!==null){l=a.next,n=n.baseState;var m=d=null,f=null,F=l;do{var $=F.lane;if((Kt&$)===$)f!==null&&(f=f.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),n=F.hasEagerState?F.eagerState:e(n,F.action);else{var U={lane:$,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};f===null?(m=f=U,d=n):f=f.next=U,Me.lanes|=$,Vt|=$}F=F.next}while(F!==null&&F!==l);f===null?d=n:f.next=m,Lr(n,r.memoizedState)||(sr=!0),r.memoizedState=n,r.baseState=d,r.baseQueue=f,t.lastRenderedState=n}if(e=t.interleaved,e!==null){a=e;do l=a.lane,Me.lanes|=l,Vt|=l,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function ql(e){var r=jr(),t=r.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var n=t.dispatch,a=t.pending,l=r.memoizedState;if(a!==null){t.pending=null;var d=a=a.next;do l=e(l,d.action),d=d.next;while(d!==a);Lr(l,r.memoizedState)||(sr=!0),r.memoizedState=l,r.baseQueue===null&&(r.baseState=l),t.lastRenderedState=l}return[l,n]}function Eu(){}function Cu(e,r){var t=Me,n=jr(),a=r(),l=!Lr(n.memoizedState,a);if(l&&(n.memoizedState=a,sr=!0),n=n.queue,Wl(Pu.bind(null,t,n,e),[e]),n.getSnapshot!==r||l||Ve!==null&&Ve.memoizedState.tag&1){if(t.flags|=2048,di(9,Ru.bind(null,t,n,a,r),void 0,null),Je===null)throw Error(s(349));(Kt&30)!==0||Tu(t,r,a)}return a}function Tu(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=Me.updateQueue,r===null?(r={lastEffect:null,stores:null},Me.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function Ru(e,r,t,n){r.value=t,r.getSnapshot=n,Fu(r)&&Lu(e)}function Pu(e,r,t){return t(function(){Fu(r)&&Lu(e)})}function Fu(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!Lr(e,t)}catch{return!0}}function Lu(e){var r=tt(e,1);r!==null&&Dr(r,e,1,-1)}function zu(e){var r=qr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ui,lastRenderedState:e},r.queue=e,e=e.dispatch=dm.bind(null,Me,e),[r.memoizedState,e]}function di(e,r,t,n){return e={tag:e,create:r,destroy:t,deps:n,next:null},r=Me.updateQueue,r===null?(r={lastEffect:null,stores:null},Me.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,r.lastEffect=e)),e}function Ou(){return jr().memoizedState}function ua(e,r,t,n){var a=qr();Me.flags|=e,a.memoizedState=di(1|r,t,void 0,n===void 0?null:n)}function da(e,r,t,n){var a=jr();n=n===void 0?null:n;var l=void 0;if(Be!==null){var d=Be.memoizedState;if(l=d.destroy,n!==null&&_l(n,d.deps)){a.memoizedState=di(r,t,l,n);return}}Me.flags|=e,a.memoizedState=di(1|r,t,l,n)}function Mu(e,r){return ua(8390656,8,e,r)}function Wl(e,r){return da(2048,8,e,r)}function Hu(e,r){return da(4,2,e,r)}function Du(e,r){return da(4,4,e,r)}function Iu(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Au(e,r,t){return t=t!=null?t.concat([e]):null,da(4,4,Iu.bind(null,r,e),t)}function Yl(){}function $u(e,r){var t=jr();r=r===void 0?null:r;var n=t.memoizedState;return n!==null&&r!==null&&_l(r,n[1])?n[0]:(t.memoizedState=[e,r],e)}function Bu(e,r){var t=jr();r=r===void 0?null:r;var n=t.memoizedState;return n!==null&&r!==null&&_l(r,n[1])?n[0]:(e=e(),t.memoizedState=[e,r],e)}function Uu(e,r,t){return(Kt&21)===0?(e.baseState&&(e.baseState=!1,sr=!0),e.memoizedState=t):(Lr(t,r)||(t=vs(),Me.lanes|=t,Vt|=t,e.baseState=!0),r)}function sm(e,r){var t=Ee;Ee=t!==0&&4>t?t:4,e(!0);var n=Ul.transition;Ul.transition={};try{e(!1),r()}finally{Ee=t,Ul.transition=n}}function _u(){return jr().memoizedState}function um(e,r,t){var n=Tt(e);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},Ku(e))Vu(r,t);else if(t=xu(e,r,t,n),t!==null){var a=nr();Dr(t,e,n,a),Ju(t,r,n)}}function dm(e,r,t){var n=Tt(e),a={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ku(e))Vu(r,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=r.lastRenderedReducer,l!==null))try{var d=r.lastRenderedState,m=l(d,t);if(a.hasEagerState=!0,a.eagerState=m,Lr(m,d)){var f=r.interleaved;f===null?(a.next=a,Hl(r)):(a.next=f.next,f.next=a),r.interleaved=a;return}}catch{}finally{}t=xu(e,r,a,n),t!==null&&(a=nr(),Dr(t,e,n,a),Ju(t,r,n))}}function Ku(e){var r=e.alternate;return e===Me||r!==null&&r===Me}function Vu(e,r){oi=sa=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function Ju(e,r,t){if((t&4194240)!==0){var n=r.lanes;n&=e.pendingLanes,t|=n,r.lanes=t,Qa(e,t)}}var ca={readContext:wr,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},cm={readContext:wr,useCallback:function(e,r){return qr().memoizedState=[e,r===void 0?null:r],e},useContext:wr,useEffect:Mu,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,ua(4194308,4,Iu.bind(null,r,e),t)},useLayoutEffect:function(e,r){return ua(4194308,4,e,r)},useInsertionEffect:function(e,r){return ua(4,2,e,r)},useMemo:function(e,r){var t=qr();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var n=qr();return r=t!==void 0?t(r):r,n.memoizedState=n.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=um.bind(null,Me,e),[n.memoizedState,e]},useRef:function(e){var r=qr();return e={current:e},r.memoizedState=e},useState:zu,useDebugValue:Yl,useDeferredValue:function(e){return qr().memoizedState=e},useTransition:function(){var e=zu(!1),r=e[0];return e=sm.bind(null,e[1]),qr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var n=Me,a=qr();if(ze){if(t===void 0)throw Error(s(407));t=t()}else{if(t=r(),Je===null)throw Error(s(349));(Kt&30)!==0||Tu(n,r,t)}a.memoizedState=t;var l={value:t,getSnapshot:r};return a.queue=l,Mu(Pu.bind(null,n,l,e),[e]),n.flags|=2048,di(9,Ru.bind(null,n,l,t,r),void 0,null),t},useId:function(){var e=qr(),r=Je.identifierPrefix;if(ze){var t=rt,n=et;t=(n&~(1<<32-Fr(n)-1)).toString(32)+t,r=":"+r+"R"+t,t=si++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=om++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},hm={readContext:wr,useCallback:$u,useContext:wr,useEffect:Wl,useImperativeHandle:Au,useInsertionEffect:Hu,useLayoutEffect:Du,useMemo:Bu,useReducer:Jl,useRef:Ou,useState:function(){return Jl(ui)},useDebugValue:Yl,useDeferredValue:function(e){var r=jr();return Uu(r,Be.memoizedState,e)},useTransition:function(){var e=Jl(ui)[0],r=jr().memoizedState;return[e,r]},useMutableSource:Eu,useSyncExternalStore:Cu,useId:_u,unstable_isNewReconciler:!1},mm={readContext:wr,useCallback:$u,useContext:wr,useEffect:Wl,useImperativeHandle:Au,useInsertionEffect:Hu,useLayoutEffect:Du,useMemo:Bu,useReducer:ql,useRef:Ou,useState:function(){return ql(ui)},useDebugValue:Yl,useDeferredValue:function(e){var r=jr();return Be===null?r.memoizedState=e:Uu(r,Be.memoizedState,e)},useTransition:function(){var e=ql(ui)[0],r=jr().memoizedState;return[e,r]},useMutableSource:Eu,useSyncExternalStore:Cu,useId:_u,unstable_isNewReconciler:!1};function Or(e,r){if(e&&e.defaultProps){r=K({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function Gl(e,r,t,n){r=e.memoizedState,t=t(n,r),t=t==null?r:K({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ha={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var n=nr(),a=Tt(e),l=nt(n,a);l.payload=r,t!=null&&(l.callback=t),r=St(e,l,a),r!==null&&(Dr(r,e,a,n),ia(r,e,a))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var n=nr(),a=Tt(e),l=nt(n,a);l.tag=1,l.payload=r,t!=null&&(l.callback=t),r=St(e,l,a),r!==null&&(Dr(r,e,a,n),ia(r,e,a))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=nr(),n=Tt(e),a=nt(t,n);a.tag=2,r!=null&&(a.callback=r),r=St(e,a,n),r!==null&&(Dr(r,e,n,t),ia(r,e,n))}};function qu(e,r,t,n,a,l,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,d):r.prototype&&r.prototype.isPureReactComponent?!Gn(t,n)||!Gn(a,l):!0}function Wu(e,r,t){var n=!1,a=xt,l=r.contextType;return typeof l=="object"&&l!==null?l=wr(l):(a=or(r)?At:Xe.current,n=r.contextTypes,l=(n=n!=null)?fn(e,a):xt),r=new r(t,l),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ha,e.stateNode=r,r._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),r}function Yu(e,r,t,n){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,n),r.state!==e&&ha.enqueueReplaceState(r,r.state,null)}function Ql(e,r,t,n){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},Dl(e);var l=r.contextType;typeof l=="object"&&l!==null?a.context=wr(l):(l=or(r)?At:Xe.current,a.context=fn(e,l)),a.state=e.memoizedState,l=r.getDerivedStateFromProps,typeof l=="function"&&(Gl(e,r,l,t),a.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&ha.enqueueReplaceState(a,a.state,null),aa(e,t,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function jn(e,r){try{var t="",n=r;do t+=Z(n),n=n.return;while(n);var a=t}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:r,stack:a,digest:null}}function Xl(e,r,t){return{value:e,source:null,stack:t??null,digest:r??null}}function Zl(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var pm=typeof WeakMap=="function"?WeakMap:Map;function Gu(e,r,t){t=nt(-1,t),t.tag=3,t.payload={element:null};var n=r.value;return t.callback=function(){ka||(ka=!0,fo=n),Zl(e,r)},t}function Qu(e,r,t){t=nt(-1,t),t.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=r.value;t.payload=function(){return n(a)},t.callback=function(){Zl(e,r)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Zl(e,r),typeof n!="function"&&(Et===null?Et=new Set([this]):Et.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),t}function Xu(e,r,t){var n=e.pingCache;if(n===null){n=e.pingCache=new pm;var a=new Set;n.set(r,a)}else a=n.get(r),a===void 0&&(a=new Set,n.set(r,a));a.has(t)||(a.add(t),e=Tm.bind(null,e,r,t),r.then(e,e))}function Zu(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function ed(e,r,t,n,a){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=nt(-1,1),r.tag=2,St(t,r,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var fm=X.ReactCurrentOwner,sr=!1;function tr(e,r,t,n){r.child=e===null?yu(r,null,t,n):kn(r,e.child,t,n)}function rd(e,r,t,n,a){t=t.render;var l=r.ref;return xn(r,a),n=Kl(e,r,t,n,l,a),t=Vl(),e!==null&&!sr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,it(e,r,a)):(ze&&t&&Cl(r),r.flags|=1,tr(e,r,n,a),r.child)}function td(e,r,t,n,a){if(e===null){var l=t.type;return typeof l=="function"&&!wo(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=l,nd(e,r,l,n,a)):(e=Na(t.type,null,n,r,r.mode,a),e.ref=r.ref,e.return=r,r.child=e)}if(l=e.child,(e.lanes&a)===0){var d=l.memoizedProps;if(t=t.compare,t=t!==null?t:Gn,t(d,n)&&e.ref===r.ref)return it(e,r,a)}return r.flags|=1,e=Pt(l,n),e.ref=r.ref,e.return=r,r.child=e}function nd(e,r,t,n,a){if(e!==null){var l=e.memoizedProps;if(Gn(l,n)&&e.ref===r.ref)if(sr=!1,r.pendingProps=n=l,(e.lanes&a)!==0)(e.flags&131072)!==0&&(sr=!0);else return r.lanes=e.lanes,it(e,r,a)}return eo(e,r,t,n,a)}function id(e,r,t){var n=r.pendingProps,a=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Nn,gr),gr|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,Te(Nn,gr),gr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:t,Te(Nn,gr),gr|=n}else l!==null?(n=l.baseLanes|t,r.memoizedState=null):n=t,Te(Nn,gr),gr|=n;return tr(e,r,a,t),r.child}function ad(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function eo(e,r,t,n,a){var l=or(t)?At:Xe.current;return l=fn(r,l),xn(r,a),t=Kl(e,r,t,n,l,a),n=Vl(),e!==null&&!sr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,it(e,r,a)):(ze&&n&&Cl(r),r.flags|=1,tr(e,r,t,a),r.child)}function ld(e,r,t,n,a){if(or(t)){var l=!0;Gi(r)}else l=!1;if(xn(r,a),r.stateNode===null)pa(e,r),Wu(r,t,n),Ql(r,t,n,a),n=!0;else if(e===null){var d=r.stateNode,m=r.memoizedProps;d.props=m;var f=d.context,F=t.contextType;typeof F=="object"&&F!==null?F=wr(F):(F=or(t)?At:Xe.current,F=fn(r,F));var $=t.getDerivedStateFromProps,U=typeof $=="function"||typeof d.getSnapshotBeforeUpdate=="function";U||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==n||f!==F)&&Yu(r,d,n,F),jt=!1;var A=r.memoizedState;d.state=A,aa(r,n,d,a),f=r.memoizedState,m!==n||A!==f||lr.current||jt?(typeof $=="function"&&(Gl(r,t,$,n),f=r.memoizedState),(m=jt||qu(r,t,m,n,A,f,F))?(U||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=f),d.props=n,d.state=f,d.context=F,n=m):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{d=r.stateNode,wu(e,r),m=r.memoizedProps,F=r.type===r.elementType?m:Or(r.type,m),d.props=F,U=r.pendingProps,A=d.context,f=t.contextType,typeof f=="object"&&f!==null?f=wr(f):(f=or(t)?At:Xe.current,f=fn(r,f));var ee=t.getDerivedStateFromProps;($=typeof ee=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==U||A!==f)&&Yu(r,d,n,f),jt=!1,A=r.memoizedState,d.state=A,aa(r,n,d,a);var ne=r.memoizedState;m!==U||A!==ne||lr.current||jt?(typeof ee=="function"&&(Gl(r,t,ee,n),ne=r.memoizedState),(F=jt||qu(r,t,F,n,A,ne,f)||!1)?($||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(n,ne,f),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(n,ne,f)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&A===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&A===e.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=ne),d.props=n,d.state=ne,d.context=f,n=F):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&A===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&A===e.memoizedState||(r.flags|=1024),n=!1)}return ro(e,r,t,n,l,a)}function ro(e,r,t,n,a,l){ad(e,r);var d=(r.flags&128)!==0;if(!n&&!d)return a&&cu(r,t,!1),it(e,r,l);n=r.stateNode,fm.current=r;var m=d&&typeof t.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,e!==null&&d?(r.child=kn(r,e.child,null,l),r.child=kn(r,null,m,l)):tr(e,r,m,l),r.memoizedState=n.state,a&&cu(r,t,!0),r.child}function od(e){var r=e.stateNode;r.pendingContext?uu(e,r.pendingContext,r.pendingContext!==r.context):r.context&&uu(e,r.context,!1),Il(e,r.containerInfo)}function sd(e,r,t,n,a){return vn(),Fl(a),r.flags|=256,tr(e,r,t,n),r.child}var to={dehydrated:null,treeContext:null,retryLane:0};function no(e){return{baseLanes:e,cachePool:null,transitions:null}}function ud(e,r,t){var n=r.pendingProps,a=Oe.current,l=!1,d=(r.flags&128)!==0,m;if((m=d)||(m=e!==null&&e.memoizedState===null?!1:(a&2)!==0),m?(l=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Te(Oe,a&1),e===null)return Pl(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=n.children,e=n.fallback,l?(n=r.mode,l=r.child,d={mode:"hidden",children:d},(n&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=d):l=Ea(d,n,0,null),e=Yt(e,n,t,null),l.return=r,e.return=r,l.sibling=e,r.child=l,r.child.memoizedState=no(t),r.memoizedState=to,e):io(r,d));if(a=e.memoizedState,a!==null&&(m=a.dehydrated,m!==null))return gm(e,r,d,n,m,a,t);if(l){l=n.fallback,d=r.mode,a=e.child,m=a.sibling;var f={mode:"hidden",children:n.children};return(d&1)===0&&r.child!==a?(n=r.child,n.childLanes=0,n.pendingProps=f,r.deletions=null):(n=Pt(a,f),n.subtreeFlags=a.subtreeFlags&14680064),m!==null?l=Pt(m,l):(l=Yt(l,d,t,null),l.flags|=2),l.return=r,n.return=r,n.sibling=l,r.child=n,n=l,l=r.child,d=e.child.memoizedState,d=d===null?no(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},l.memoizedState=d,l.childLanes=e.childLanes&~t,r.memoizedState=to,n}return l=e.child,e=l.sibling,n=Pt(l,{mode:"visible",children:n.children}),(r.mode&1)===0&&(n.lanes=t),n.return=r,n.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=n,r.memoizedState=null,n}function io(e,r){return r=Ea({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function ma(e,r,t,n){return n!==null&&Fl(n),kn(r,e.child,null,t),e=io(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function gm(e,r,t,n,a,l,d){if(t)return r.flags&256?(r.flags&=-257,n=Xl(Error(s(422))),ma(e,r,d,n)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(l=n.fallback,a=r.mode,n=Ea({mode:"visible",children:n.children},a,0,null),l=Yt(l,a,d,null),l.flags|=2,n.return=r,l.return=r,n.sibling=l,r.child=n,(r.mode&1)!==0&&kn(r,e.child,null,d),r.child.memoizedState=no(d),r.memoizedState=to,l);if((r.mode&1)===0)return ma(e,r,d,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var m=n.dgst;return n=m,l=Error(s(419)),n=Xl(l,n,void 0),ma(e,r,d,n)}if(m=(d&e.childLanes)!==0,sr||m){if(n=Je,n!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(n.suspendedLanes|d))!==0?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,tt(e,a),Dr(n,e,a,-1))}return xo(),n=Xl(Error(s(421))),ma(e,r,d,n)}return a.data==="$?"?(r.flags|=128,r.child=e.child,r=Rm.bind(null,e),a._reactRetry=r,null):(e=l.treeContext,fr=kt(a.nextSibling),pr=r,ze=!0,zr=null,e!==null&&(yr[xr++]=et,yr[xr++]=rt,yr[xr++]=$t,et=e.id,rt=e.overflow,$t=r),r=io(r,n.children),r.flags|=4096,r)}function dd(e,r,t){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r),Ml(e.return,r,t)}function ao(e,r,t,n,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:a}:(l.isBackwards=r,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=t,l.tailMode=a)}function cd(e,r,t){var n=r.pendingProps,a=n.revealOrder,l=n.tail;if(tr(e,r,n.children,t),n=Oe.current,(n&2)!==0)n=n&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dd(e,t,r);else if(e.tag===19)dd(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Te(Oe,n),(r.mode&1)===0)r.memoizedState=null;else switch(a){case"forwards":for(t=r.child,a=null;t!==null;)e=t.alternate,e!==null&&la(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=r.child,r.child=null):(a=t.sibling,t.sibling=null),ao(r,!1,a,t,l);break;case"backwards":for(t=null,a=r.child,r.child=null;a!==null;){if(e=a.alternate,e!==null&&la(e)===null){r.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}ao(r,!0,t,null,l);break;case"together":ao(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function pa(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function it(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),Vt|=r.lanes,(t&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(s(153));if(r.child!==null){for(e=r.child,t=Pt(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=Pt(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function bm(e,r,t){switch(r.tag){case 3:od(r),vn();break;case 5:Nu(r);break;case 1:or(r.type)&&Gi(r);break;case 4:Il(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,a=r.memoizedProps.value;Te(ta,n._currentValue),n._currentValue=a;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(Te(Oe,Oe.current&1),r.flags|=128,null):(t&r.child.childLanes)!==0?ud(e,r,t):(Te(Oe,Oe.current&1),e=it(e,r,t),e!==null?e.sibling:null);Te(Oe,Oe.current&1);break;case 19:if(n=(t&r.childLanes)!==0,(e.flags&128)!==0){if(n)return cd(e,r,t);r.flags|=128}if(a=r.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Te(Oe,Oe.current),n)break;return null;case 22:case 23:return r.lanes=0,id(e,r,t)}return it(e,r,t)}var hd,lo,md,pd;hd=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},lo=function(){},md=function(e,r,t,n){var a=e.memoizedProps;if(a!==n){e=r.stateNode,_t(Jr.current);var l=null;switch(t){case"input":a=Fn(e,a),n=Fn(e,n),l=[];break;case"select":a=K({},a,{value:void 0}),n=K({},n,{value:void 0}),l=[];break;case"textarea":a=je(e,a),n=je(e,n),l=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=qi)}Pr(t,n);var d;t=null;for(F in a)if(!n.hasOwnProperty(F)&&a.hasOwnProperty(F)&&a[F]!=null)if(F==="style"){var m=a[F];for(d in m)m.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(p.hasOwnProperty(F)?l||(l=[]):(l=l||[]).push(F,null));for(F in n){var f=n[F];if(m=a!=null?a[F]:void 0,n.hasOwnProperty(F)&&f!==m&&(f!=null||m!=null))if(F==="style")if(m){for(d in m)!m.hasOwnProperty(d)||f&&f.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in f)f.hasOwnProperty(d)&&m[d]!==f[d]&&(t||(t={}),t[d]=f[d])}else t||(l||(l=[]),l.push(F,t)),t=f;else F==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,m=m?m.__html:void 0,f!=null&&m!==f&&(l=l||[]).push(F,f)):F==="children"?typeof f!="string"&&typeof f!="number"||(l=l||[]).push(F,""+f):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(p.hasOwnProperty(F)?(f!=null&&F==="onScroll"&&Pe("scroll",e),l||m===f||(l=[])):(l=l||[]).push(F,f))}t&&(l=l||[]).push("style",t);var F=l;(r.updateQueue=F)&&(r.flags|=4)}},pd=function(e,r,t,n){t!==n&&(r.flags|=4)};function ci(e,r){if(!ze)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function er(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(r)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=t,r}function vm(e,r,t){var n=r.pendingProps;switch(Tl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return er(r),null;case 1:return or(r.type)&&Yi(),er(r),null;case 3:return n=r.stateNode,wn(),Fe(lr),Fe(Xe),Bl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ea(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,zr!==null&&(vo(zr),zr=null))),lo(e,r),er(r),null;case 5:Al(r);var a=_t(li.current);if(t=r.type,e!==null&&r.stateNode!=null)md(e,r,t,n,a),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(s(166));return er(r),null}if(e=_t(Jr.current),ea(r)){n=r.stateNode,t=r.type;var l=r.memoizedProps;switch(n[Vr]=r,n[ri]=l,e=(r.mode&1)!==0,t){case"dialog":Pe("cancel",n),Pe("close",n);break;case"iframe":case"object":case"embed":Pe("load",n);break;case"video":case"audio":for(a=0;a<Xn.length;a++)Pe(Xn[a],n);break;case"source":Pe("error",n);break;case"img":case"image":case"link":Pe("error",n),Pe("load",n);break;case"details":Pe("toggle",n);break;case"input":Ln(n,l),Pe("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},Pe("invalid",n);break;case"textarea":$r(n,l),Pe("invalid",n)}Pr(t,l),a=null;for(var d in l)if(l.hasOwnProperty(d)){var m=l[d];d==="children"?typeof m=="string"?n.textContent!==m&&(l.suppressHydrationWarning!==!0&&Ji(n.textContent,m,e),a=["children",m]):typeof m=="number"&&n.textContent!==""+m&&(l.suppressHydrationWarning!==!0&&Ji(n.textContent,m,e),a=["children",""+m]):p.hasOwnProperty(d)&&m!=null&&d==="onScroll"&&Pe("scroll",n)}switch(t){case"input":ut(n),zn(n,l,!0);break;case"textarea":ut(n),Rr(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=qi)}n=a,r.updateQueue=n,n!==null&&(r.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Si(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=d.createElement(t,{is:n.is}):(e=d.createElement(t),t==="select"&&(d=e,n.multiple?d.multiple=!0:n.size&&(d.size=n.size))):e=d.createElementNS(e,t),e[Vr]=r,e[ri]=n,hd(e,r,!1,!1),r.stateNode=e;e:{switch(d=_r(t,n),t){case"dialog":Pe("cancel",e),Pe("close",e),a=n;break;case"iframe":case"object":case"embed":Pe("load",e),a=n;break;case"video":case"audio":for(a=0;a<Xn.length;a++)Pe(Xn[a],e);a=n;break;case"source":Pe("error",e),a=n;break;case"img":case"image":case"link":Pe("error",e),Pe("load",e),a=n;break;case"details":Pe("toggle",e),a=n;break;case"input":Ln(e,n),a=Fn(e,n),Pe("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=K({},n,{value:void 0}),Pe("invalid",e);break;case"textarea":$r(e,n),a=je(e,n),Pe("invalid",e);break;default:a=n}Pr(t,a),m=a;for(l in m)if(m.hasOwnProperty(l)){var f=m[l];l==="style"?Se(e,f):l==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Ur(e,f)):l==="children"?typeof f=="string"?(t!=="textarea"||f!=="")&&Ht(e,f):typeof f=="number"&&Ht(e,""+f):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(p.hasOwnProperty(l)?f!=null&&l==="onScroll"&&Pe("scroll",e):f!=null&&W(e,l,f,d))}switch(t){case"input":ut(e),zn(e,n,!1);break;case"textarea":ut(e),Rr(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ce(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?fe(e,!!n.multiple,l,!1):n.defaultValue!=null&&fe(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=qi)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return er(r),null;case 6:if(e&&r.stateNode!=null)pd(e,r,e.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(s(166));if(t=_t(li.current),_t(Jr.current),ea(r)){if(n=r.stateNode,t=r.memoizedProps,n[Vr]=r,(l=n.nodeValue!==t)&&(e=pr,e!==null))switch(e.tag){case 3:Ji(n.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ji(n.nodeValue,t,(e.mode&1)!==0)}l&&(r.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[Vr]=r,r.stateNode=n}return er(r),null;case 13:if(Fe(Oe),n=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ze&&fr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)bu(),vn(),r.flags|=98560,l=!1;else if(l=ea(r),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=r.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Vr]=r}else vn(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;er(r),l=!1}else zr!==null&&(vo(zr),zr=null),l=!0;if(!l)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=t,r):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Oe.current&1)!==0?Ue===0&&(Ue=3):xo())),r.updateQueue!==null&&(r.flags|=4),er(r),null);case 4:return wn(),lo(e,r),e===null&&Zn(r.stateNode.containerInfo),er(r),null;case 10:return Ol(r.type._context),er(r),null;case 17:return or(r.type)&&Yi(),er(r),null;case 19:if(Fe(Oe),l=r.memoizedState,l===null)return er(r),null;if(n=(r.flags&128)!==0,d=l.rendering,d===null)if(n)ci(l,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=la(e),d!==null){for(r.flags|=128,ci(l,!1),n=d.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=t,t=r.child;t!==null;)l=t,e=n,l.flags&=14680066,d=l.alternate,d===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=d.childLanes,l.lanes=d.lanes,l.child=d.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=d.memoizedProps,l.memoizedState=d.memoizedState,l.updateQueue=d.updateQueue,l.type=d.type,e=d.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Te(Oe,Oe.current&1|2),r.child}e=e.sibling}l.tail!==null&&Ie()>En&&(r.flags|=128,n=!0,ci(l,!1),r.lanes=4194304)}else{if(!n)if(e=la(d),e!==null){if(r.flags|=128,n=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),ci(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!ze)return er(r),null}else 2*Ie()-l.renderingStartTime>En&&t!==1073741824&&(r.flags|=128,n=!0,ci(l,!1),r.lanes=4194304);l.isBackwards?(d.sibling=r.child,r.child=d):(t=l.last,t!==null?t.sibling=d:r.child=d,l.last=d)}return l.tail!==null?(r=l.tail,l.rendering=r,l.tail=r.sibling,l.renderingStartTime=Ie(),r.sibling=null,t=Oe.current,Te(Oe,n?t&1|2:t&1),r):(er(r),null);case 22:case 23:return yo(),n=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(r.flags|=8192),n&&(r.mode&1)!==0?(gr&1073741824)!==0&&(er(r),r.subtreeFlags&6&&(r.flags|=8192)):er(r),null;case 24:return null;case 25:return null}throw Error(s(156,r.tag))}function km(e,r){switch(Tl(r),r.tag){case 1:return or(r.type)&&Yi(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return wn(),Fe(lr),Fe(Xe),Bl(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Al(r),null;case 13:if(Fe(Oe),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(s(340));vn()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Fe(Oe),null;case 4:return wn(),null;case 10:return Ol(r.type._context),null;case 22:case 23:return yo(),null;case 24:return null;default:return null}}var fa=!1,rr=!1,ym=typeof WeakSet=="function"?WeakSet:Set,te=null;function Sn(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){De(e,r,n)}else t.current=null}function oo(e,r,t){try{t()}catch(n){De(e,r,n)}}var fd=!1;function xm(e,r){if(kl=Mi,e=qs(),cl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var a=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var d=0,m=-1,f=-1,F=0,$=0,U=e,A=null;r:for(;;){for(var ee;U!==t||a!==0&&U.nodeType!==3||(m=d+a),U!==l||n!==0&&U.nodeType!==3||(f=d+n),U.nodeType===3&&(d+=U.nodeValue.length),(ee=U.firstChild)!==null;)A=U,U=ee;for(;;){if(U===e)break r;if(A===t&&++F===a&&(m=d),A===l&&++$===n&&(f=d),(ee=U.nextSibling)!==null)break;U=A,A=U.parentNode}U=ee}t=m===-1||f===-1?null:{start:m,end:f}}else t=null}t=t||{start:0,end:0}}else t=null;for(yl={focusedElem:e,selectionRange:t},Mi=!1,te=r;te!==null;)if(r=te,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,te=e;else for(;te!==null;){r=te;try{var ne=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ne!==null){var ie=ne.memoizedProps,Ae=ne.memoizedState,N=r.stateNode,y=N.getSnapshotBeforeUpdate(r.elementType===r.type?ie:Or(r.type,ie),Ae);N.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var T=r.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(V){De(r,r.return,V)}if(e=r.sibling,e!==null){e.return=r.return,te=e;break}te=r.return}return ne=fd,fd=!1,ne}function hi(e,r,t){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&oo(r,t,l)}a=a.next}while(a!==n)}}function ga(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var n=t.create;t.destroy=n()}t=t.next}while(t!==r)}}function so(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function gd(e){var r=e.alternate;r!==null&&(e.alternate=null,gd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Vr],delete r[ri],delete r[Sl],delete r[nm],delete r[im])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bd(e){return e.tag===5||e.tag===3||e.tag===4}function vd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function uo(e,r,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=qi));else if(n!==4&&(e=e.child,e!==null))for(uo(e,r,t),e=e.sibling;e!==null;)uo(e,r,t),e=e.sibling}function co(e,r,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(co(e,r,t),e=e.sibling;e!==null;)co(e,r,t),e=e.sibling}var Ye=null,Mr=!1;function Nt(e,r,t){for(t=t.child;t!==null;)kd(e,r,t),t=t.sibling}function kd(e,r,t){if(Kr&&typeof Kr.onCommitFiberUnmount=="function")try{Kr.onCommitFiberUnmount(Ri,t)}catch{}switch(t.tag){case 5:rr||Sn(t,r);case 6:var n=Ye,a=Mr;Ye=null,Nt(e,r,t),Ye=n,Mr=a,Ye!==null&&(Mr?(e=Ye,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Ye.removeChild(t.stateNode));break;case 18:Ye!==null&&(Mr?(e=Ye,t=t.stateNode,e.nodeType===8?jl(e.parentNode,t):e.nodeType===1&&jl(e,t),Kn(e)):jl(Ye,t.stateNode));break;case 4:n=Ye,a=Mr,Ye=t.stateNode.containerInfo,Mr=!0,Nt(e,r,t),Ye=n,Mr=a;break;case 0:case 11:case 14:case 15:if(!rr&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var l=a,d=l.destroy;l=l.tag,d!==void 0&&((l&2)!==0||(l&4)!==0)&&oo(t,r,d),a=a.next}while(a!==n)}Nt(e,r,t);break;case 1:if(!rr&&(Sn(t,r),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(m){De(t,r,m)}Nt(e,r,t);break;case 21:Nt(e,r,t);break;case 22:t.mode&1?(rr=(n=rr)||t.memoizedState!==null,Nt(e,r,t),rr=n):Nt(e,r,t);break;default:Nt(e,r,t)}}function yd(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new ym),r.forEach(function(n){var a=Pm.bind(null,e,n);t.has(n)||(t.add(n),n.then(a,a))})}}function Hr(e,r){var t=r.deletions;if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];try{var l=e,d=r,m=d;e:for(;m!==null;){switch(m.tag){case 5:Ye=m.stateNode,Mr=!1;break e;case 3:Ye=m.stateNode.containerInfo,Mr=!0;break e;case 4:Ye=m.stateNode.containerInfo,Mr=!0;break e}m=m.return}if(Ye===null)throw Error(s(160));kd(l,d,a),Ye=null,Mr=!1;var f=a.alternate;f!==null&&(f.return=null),a.return=null}catch(F){De(a,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)xd(r,e),r=r.sibling}function xd(e,r){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Hr(r,e),Wr(e),n&4){try{hi(3,e,e.return),ga(3,e)}catch(ie){De(e,e.return,ie)}try{hi(5,e,e.return)}catch(ie){De(e,e.return,ie)}}break;case 1:Hr(r,e),Wr(e),n&512&&t!==null&&Sn(t,t.return);break;case 5:if(Hr(r,e),Wr(e),n&512&&t!==null&&Sn(t,t.return),e.flags&32){var a=e.stateNode;try{Ht(a,"")}catch(ie){De(e,e.return,ie)}}if(n&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,d=t!==null?t.memoizedProps:l,m=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{m==="input"&&l.type==="radio"&&l.name!=null&&ji(a,l),_r(m,d);var F=_r(m,l);for(d=0;d<f.length;d+=2){var $=f[d],U=f[d+1];$==="style"?Se(a,U):$==="dangerouslySetInnerHTML"?Ur(a,U):$==="children"?Ht(a,U):W(a,$,U,F)}switch(m){case"input":rn(a,l);break;case"textarea":Gr(a,l);break;case"select":var A=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var ee=l.value;ee!=null?fe(a,!!l.multiple,ee,!1):A!==!!l.multiple&&(l.defaultValue!=null?fe(a,!!l.multiple,l.defaultValue,!0):fe(a,!!l.multiple,l.multiple?[]:"",!1))}a[ri]=l}catch(ie){De(e,e.return,ie)}}break;case 6:if(Hr(r,e),Wr(e),n&4){if(e.stateNode===null)throw Error(s(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(ie){De(e,e.return,ie)}}break;case 3:if(Hr(r,e),Wr(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{Kn(r.containerInfo)}catch(ie){De(e,e.return,ie)}break;case 4:Hr(r,e),Wr(e);break;case 13:Hr(r,e),Wr(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(po=Ie())),n&4&&yd(e);break;case 22:if($=t!==null&&t.memoizedState!==null,e.mode&1?(rr=(F=rr)||$,Hr(r,e),rr=F):Hr(r,e),Wr(e),n&8192){if(F=e.memoizedState!==null,(e.stateNode.isHidden=F)&&!$&&(e.mode&1)!==0)for(te=e,$=e.child;$!==null;){for(U=te=$;te!==null;){switch(A=te,ee=A.child,A.tag){case 0:case 11:case 14:case 15:hi(4,A,A.return);break;case 1:Sn(A,A.return);var ne=A.stateNode;if(typeof ne.componentWillUnmount=="function"){n=A,t=A.return;try{r=n,ne.props=r.memoizedProps,ne.state=r.memoizedState,ne.componentWillUnmount()}catch(ie){De(n,t,ie)}}break;case 5:Sn(A,A.return);break;case 22:if(A.memoizedState!==null){Sd(U);continue}}ee!==null?(ee.return=A,te=ee):Sd(U)}$=$.sibling}e:for($=null,U=e;;){if(U.tag===5){if($===null){$=U;try{a=U.stateNode,F?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(m=U.stateNode,f=U.memoizedProps.style,d=f!=null&&f.hasOwnProperty("display")?f.display:null,m.style.display=On("display",d))}catch(ie){De(e,e.return,ie)}}}else if(U.tag===6){if($===null)try{U.stateNode.nodeValue=F?"":U.memoizedProps}catch(ie){De(e,e.return,ie)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;$===U&&($=null),U=U.return}$===U&&($=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:Hr(r,e),Wr(e),n&4&&yd(e);break;case 21:break;default:Hr(r,e),Wr(e)}}function Wr(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(bd(t)){var n=t;break e}t=t.return}throw Error(s(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(Ht(a,""),n.flags&=-33);var l=vd(e);co(e,l,a);break;case 3:case 4:var d=n.stateNode.containerInfo,m=vd(e);uo(e,m,d);break;default:throw Error(s(161))}}catch(f){De(e,e.return,f)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function wm(e,r,t){te=e,wd(e)}function wd(e,r,t){for(var n=(e.mode&1)!==0;te!==null;){var a=te,l=a.child;if(a.tag===22&&n){var d=a.memoizedState!==null||fa;if(!d){var m=a.alternate,f=m!==null&&m.memoizedState!==null||rr;m=fa;var F=rr;if(fa=d,(rr=f)&&!F)for(te=a;te!==null;)d=te,f=d.child,d.tag===22&&d.memoizedState!==null?Nd(a):f!==null?(f.return=d,te=f):Nd(a);for(;l!==null;)te=l,wd(l),l=l.sibling;te=a,fa=m,rr=F}jd(e)}else(a.subtreeFlags&8772)!==0&&l!==null?(l.return=a,te=l):jd(e)}}function jd(e){for(;te!==null;){var r=te;if((r.flags&8772)!==0){var t=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:rr||ga(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!rr)if(t===null)n.componentDidMount();else{var a=r.elementType===r.type?t.memoizedProps:Or(r.type,t.memoizedProps);n.componentDidUpdate(a,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=r.updateQueue;l!==null&&Su(r,l,n);break;case 3:var d=r.updateQueue;if(d!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}Su(r,d,t)}break;case 5:var m=r.stateNode;if(t===null&&r.flags&4){t=m;var f=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&t.focus();break;case"img":f.src&&(t.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var $=F.memoizedState;if($!==null){var U=$.dehydrated;U!==null&&Kn(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}rr||r.flags&512&&so(r)}catch(A){De(r,r.return,A)}}if(r===e){te=null;break}if(t=r.sibling,t!==null){t.return=r.return,te=t;break}te=r.return}}function Sd(e){for(;te!==null;){var r=te;if(r===e){te=null;break}var t=r.sibling;if(t!==null){t.return=r.return,te=t;break}te=r.return}}function Nd(e){for(;te!==null;){var r=te;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{ga(4,r)}catch(f){De(r,t,f)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var a=r.return;try{n.componentDidMount()}catch(f){De(r,a,f)}}var l=r.return;try{so(r)}catch(f){De(r,l,f)}break;case 5:var d=r.return;try{so(r)}catch(f){De(r,d,f)}}}catch(f){De(r,r.return,f)}if(r===e){te=null;break}var m=r.sibling;if(m!==null){m.return=r.return,te=m;break}te=r.return}}var jm=Math.ceil,ba=X.ReactCurrentDispatcher,ho=X.ReactCurrentOwner,Sr=X.ReactCurrentBatchConfig,ve=0,Je=null,$e=null,Ge=0,gr=0,Nn=yt(0),Ue=0,mi=null,Vt=0,va=0,mo=0,pi=null,ur=null,po=0,En=1/0,at=null,ka=!1,fo=null,Et=null,ya=!1,Ct=null,xa=0,fi=0,go=null,wa=-1,ja=0;function nr(){return(ve&6)!==0?Ie():wa!==-1?wa:wa=Ie()}function Tt(e){return(e.mode&1)===0?1:(ve&2)!==0&&Ge!==0?Ge&-Ge:lm.transition!==null?(ja===0&&(ja=vs()),ja):(e=Ee,e!==0||(e=window.event,e=e===void 0?16:Cs(e.type)),e)}function Dr(e,r,t,n){if(50<fi)throw fi=0,go=null,Error(s(185));An(e,t,n),((ve&2)===0||e!==Je)&&(e===Je&&((ve&2)===0&&(va|=t),Ue===4&&Rt(e,Ge)),dr(e,n),t===1&&ve===0&&(r.mode&1)===0&&(En=Ie()+500,Qi&&wt()))}function dr(e,r){var t=e.callbackNode;lh(e,r);var n=Li(e,e===Je?Ge:0);if(n===0)t!==null&&fs(t),e.callbackNode=null,e.callbackPriority=0;else if(r=n&-n,e.callbackPriority!==r){if(t!=null&&fs(t),r===1)e.tag===0?am(Cd.bind(null,e)):hu(Cd.bind(null,e)),rm(function(){(ve&6)===0&&wt()}),t=null;else{switch(ks(n)){case 1:t=Wa;break;case 4:t=gs;break;case 16:t=Ti;break;case 536870912:t=bs;break;default:t=Ti}t=Md(t,Ed.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function Ed(e,r){if(wa=-1,ja=0,(ve&6)!==0)throw Error(s(327));var t=e.callbackNode;if(Cn()&&e.callbackNode!==t)return null;var n=Li(e,e===Je?Ge:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||r)r=Sa(e,n);else{r=n;var a=ve;ve|=2;var l=Rd();(Je!==e||Ge!==r)&&(at=null,En=Ie()+500,qt(e,r));do try{Em();break}catch(m){Td(e,m)}while(!0);zl(),ba.current=l,ve=a,$e!==null?r=0:(Je=null,Ge=0,r=Ue)}if(r!==0){if(r===2&&(a=Ya(e),a!==0&&(n=a,r=bo(e,a))),r===1)throw t=mi,qt(e,0),Rt(e,n),dr(e,Ie()),t;if(r===6)Rt(e,n);else{if(a=e.current.alternate,(n&30)===0&&!Sm(a)&&(r=Sa(e,n),r===2&&(l=Ya(e),l!==0&&(n=l,r=bo(e,l))),r===1))throw t=mi,qt(e,0),Rt(e,n),dr(e,Ie()),t;switch(e.finishedWork=a,e.finishedLanes=n,r){case 0:case 1:throw Error(s(345));case 2:Wt(e,ur,at);break;case 3:if(Rt(e,n),(n&130023424)===n&&(r=po+500-Ie(),10<r)){if(Li(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){nr(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=wl(Wt.bind(null,e,ur,at),r);break}Wt(e,ur,at);break;case 4:if(Rt(e,n),(n&4194240)===n)break;for(r=e.eventTimes,a=-1;0<n;){var d=31-Fr(n);l=1<<d,d=r[d],d>a&&(a=d),n&=~l}if(n=a,n=Ie()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*jm(n/1960))-n,10<n){e.timeoutHandle=wl(Wt.bind(null,e,ur,at),n);break}Wt(e,ur,at);break;case 5:Wt(e,ur,at);break;default:throw Error(s(329))}}}return dr(e,Ie()),e.callbackNode===t?Ed.bind(null,e):null}function bo(e,r){var t=pi;return e.current.memoizedState.isDehydrated&&(qt(e,r).flags|=256),e=Sa(e,r),e!==2&&(r=ur,ur=t,r!==null&&vo(r)),e}function vo(e){ur===null?ur=e:ur.push.apply(ur,e)}function Sm(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var a=t[n],l=a.getSnapshot;a=a.value;try{if(!Lr(l(),a))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Rt(e,r){for(r&=~mo,r&=~va,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-Fr(r),n=1<<t;e[t]=-1,r&=~n}}function Cd(e){if((ve&6)!==0)throw Error(s(327));Cn();var r=Li(e,0);if((r&1)===0)return dr(e,Ie()),null;var t=Sa(e,r);if(e.tag!==0&&t===2){var n=Ya(e);n!==0&&(r=n,t=bo(e,n))}if(t===1)throw t=mi,qt(e,0),Rt(e,r),dr(e,Ie()),t;if(t===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Wt(e,ur,at),dr(e,Ie()),null}function ko(e,r){var t=ve;ve|=1;try{return e(r)}finally{ve=t,ve===0&&(En=Ie()+500,Qi&&wt())}}function Jt(e){Ct!==null&&Ct.tag===0&&(ve&6)===0&&Cn();var r=ve;ve|=1;var t=Sr.transition,n=Ee;try{if(Sr.transition=null,Ee=1,e)return e()}finally{Ee=n,Sr.transition=t,ve=r,(ve&6)===0&&wt()}}function yo(){gr=Nn.current,Fe(Nn)}function qt(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,em(t)),$e!==null)for(t=$e.return;t!==null;){var n=t;switch(Tl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Yi();break;case 3:wn(),Fe(lr),Fe(Xe),Bl();break;case 5:Al(n);break;case 4:wn();break;case 13:Fe(Oe);break;case 19:Fe(Oe);break;case 10:Ol(n.type._context);break;case 22:case 23:yo()}t=t.return}if(Je=e,$e=e=Pt(e.current,null),Ge=gr=r,Ue=0,mi=null,mo=va=Vt=0,ur=pi=null,Ut!==null){for(r=0;r<Ut.length;r++)if(t=Ut[r],n=t.interleaved,n!==null){t.interleaved=null;var a=n.next,l=t.pending;if(l!==null){var d=l.next;l.next=a,n.next=d}t.pending=n}Ut=null}return e}function Td(e,r){do{var t=$e;try{if(zl(),oa.current=ca,sa){for(var n=Me.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}sa=!1}if(Kt=0,Ve=Be=Me=null,oi=!1,si=0,ho.current=null,t===null||t.return===null){Ue=1,mi=r,$e=null;break}e:{var l=e,d=t.return,m=t,f=r;if(r=Ge,m.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var F=f,$=m,U=$.tag;if(($.mode&1)===0&&(U===0||U===11||U===15)){var A=$.alternate;A?($.updateQueue=A.updateQueue,$.memoizedState=A.memoizedState,$.lanes=A.lanes):($.updateQueue=null,$.memoizedState=null)}var ee=Zu(d);if(ee!==null){ee.flags&=-257,ed(ee,d,m,l,r),ee.mode&1&&Xu(l,F,r),r=ee,f=F;var ne=r.updateQueue;if(ne===null){var ie=new Set;ie.add(f),r.updateQueue=ie}else ne.add(f);break e}else{if((r&1)===0){Xu(l,F,r),xo();break e}f=Error(s(426))}}else if(ze&&m.mode&1){var Ae=Zu(d);if(Ae!==null){(Ae.flags&65536)===0&&(Ae.flags|=256),ed(Ae,d,m,l,r),Fl(jn(f,m));break e}}l=f=jn(f,m),Ue!==4&&(Ue=2),pi===null?pi=[l]:pi.push(l),l=d;do{switch(l.tag){case 3:l.flags|=65536,r&=-r,l.lanes|=r;var N=Gu(l,f,r);ju(l,N);break e;case 1:m=f;var y=l.type,T=l.stateNode;if((l.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(Et===null||!Et.has(T)))){l.flags|=65536,r&=-r,l.lanes|=r;var V=Qu(l,m,r);ju(l,V);break e}}l=l.return}while(l!==null)}Fd(t)}catch(ae){r=ae,$e===t&&t!==null&&($e=t=t.return);continue}break}while(!0)}function Rd(){var e=ba.current;return ba.current=ca,e===null?ca:e}function xo(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Je===null||(Vt&268435455)===0&&(va&268435455)===0||Rt(Je,Ge)}function Sa(e,r){var t=ve;ve|=2;var n=Rd();(Je!==e||Ge!==r)&&(at=null,qt(e,r));do try{Nm();break}catch(a){Td(e,a)}while(!0);if(zl(),ve=t,ba.current=n,$e!==null)throw Error(s(261));return Je=null,Ge=0,Ue}function Nm(){for(;$e!==null;)Pd($e)}function Em(){for(;$e!==null&&!Qc();)Pd($e)}function Pd(e){var r=Od(e.alternate,e,gr);e.memoizedProps=e.pendingProps,r===null?Fd(e):$e=r,ho.current=null}function Fd(e){var r=e;do{var t=r.alternate;if(e=r.return,(r.flags&32768)===0){if(t=vm(t,r,gr),t!==null){$e=t;return}}else{if(t=km(t,r),t!==null){t.flags&=32767,$e=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,$e=null;return}}if(r=r.sibling,r!==null){$e=r;return}$e=r=e}while(r!==null);Ue===0&&(Ue=5)}function Wt(e,r,t){var n=Ee,a=Sr.transition;try{Sr.transition=null,Ee=1,Cm(e,r,t,n)}finally{Sr.transition=a,Ee=n}return null}function Cm(e,r,t,n){do Cn();while(Ct!==null);if((ve&6)!==0)throw Error(s(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(oh(e,l),e===Je&&($e=Je=null,Ge=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ya||(ya=!0,Md(Ti,function(){return Cn(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=Sr.transition,Sr.transition=null;var d=Ee;Ee=1;var m=ve;ve|=4,ho.current=null,xm(e,t),xd(t,e),qh(yl),Mi=!!kl,yl=kl=null,e.current=t,wm(t),Xc(),ve=m,Ee=d,Sr.transition=l}else e.current=t;if(ya&&(ya=!1,Ct=e,xa=a),l=e.pendingLanes,l===0&&(Et=null),rh(t.stateNode),dr(e,Ie()),r!==null)for(n=e.onRecoverableError,t=0;t<r.length;t++)a=r[t],n(a.value,{componentStack:a.stack,digest:a.digest});if(ka)throw ka=!1,e=fo,fo=null,e;return(xa&1)!==0&&e.tag!==0&&Cn(),l=e.pendingLanes,(l&1)!==0?e===go?fi++:(fi=0,go=e):fi=0,wt(),null}function Cn(){if(Ct!==null){var e=ks(xa),r=Sr.transition,t=Ee;try{if(Sr.transition=null,Ee=16>e?16:e,Ct===null)var n=!1;else{if(e=Ct,Ct=null,xa=0,(ve&6)!==0)throw Error(s(331));var a=ve;for(ve|=4,te=e.current;te!==null;){var l=te,d=l.child;if((te.flags&16)!==0){var m=l.deletions;if(m!==null){for(var f=0;f<m.length;f++){var F=m[f];for(te=F;te!==null;){var $=te;switch($.tag){case 0:case 11:case 15:hi(8,$,l)}var U=$.child;if(U!==null)U.return=$,te=U;else for(;te!==null;){$=te;var A=$.sibling,ee=$.return;if(gd($),$===F){te=null;break}if(A!==null){A.return=ee,te=A;break}te=ee}}}var ne=l.alternate;if(ne!==null){var ie=ne.child;if(ie!==null){ne.child=null;do{var Ae=ie.sibling;ie.sibling=null,ie=Ae}while(ie!==null)}}te=l}}if((l.subtreeFlags&2064)!==0&&d!==null)d.return=l,te=d;else e:for(;te!==null;){if(l=te,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:hi(9,l,l.return)}var N=l.sibling;if(N!==null){N.return=l.return,te=N;break e}te=l.return}}var y=e.current;for(te=y;te!==null;){d=te;var T=d.child;if((d.subtreeFlags&2064)!==0&&T!==null)T.return=d,te=T;else e:for(d=y;te!==null;){if(m=te,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:ga(9,m)}}catch(ae){De(m,m.return,ae)}if(m===d){te=null;break e}var V=m.sibling;if(V!==null){V.return=m.return,te=V;break e}te=m.return}}if(ve=a,wt(),Kr&&typeof Kr.onPostCommitFiberRoot=="function")try{Kr.onPostCommitFiberRoot(Ri,e)}catch{}n=!0}return n}finally{Ee=t,Sr.transition=r}}return!1}function Ld(e,r,t){r=jn(t,r),r=Gu(e,r,1),e=St(e,r,1),r=nr(),e!==null&&(An(e,1,r),dr(e,r))}function De(e,r,t){if(e.tag===3)Ld(e,e,t);else for(;r!==null;){if(r.tag===3){Ld(r,e,t);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Et===null||!Et.has(n))){e=jn(t,e),e=Qu(r,e,1),r=St(r,e,1),e=nr(),r!==null&&(An(r,1,e),dr(r,e));break}}r=r.return}}function Tm(e,r,t){var n=e.pingCache;n!==null&&n.delete(r),r=nr(),e.pingedLanes|=e.suspendedLanes&t,Je===e&&(Ge&t)===t&&(Ue===4||Ue===3&&(Ge&130023424)===Ge&&500>Ie()-po?qt(e,0):mo|=t),dr(e,r)}function zd(e,r){r===0&&((e.mode&1)===0?r=1:(r=Fi,Fi<<=1,(Fi&130023424)===0&&(Fi=4194304)));var t=nr();e=tt(e,r),e!==null&&(An(e,r,t),dr(e,t))}function Rm(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),zd(e,t)}function Pm(e,r){var t=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(s(314))}n!==null&&n.delete(r),zd(e,t)}var Od;Od=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||lr.current)sr=!0;else{if((e.lanes&t)===0&&(r.flags&128)===0)return sr=!1,bm(e,r,t);sr=(e.flags&131072)!==0}else sr=!1,ze&&(r.flags&1048576)!==0&&mu(r,Zi,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;pa(e,r),e=r.pendingProps;var a=fn(r,Xe.current);xn(r,t),a=Kl(null,r,n,e,a,t);var l=Vl();return r.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,or(n)?(l=!0,Gi(r)):l=!1,r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Dl(r),a.updater=ha,r.stateNode=a,a._reactInternals=r,Ql(r,n,e,t),r=ro(null,r,n,!0,l,t)):(r.tag=0,ze&&l&&Cl(r),tr(null,r,a,t),r=r.child),r;case 16:n=r.elementType;e:{switch(pa(e,r),e=r.pendingProps,a=n._init,n=a(n._payload),r.type=n,a=r.tag=Lm(n),e=Or(n,e),a){case 0:r=eo(null,r,n,e,t);break e;case 1:r=ld(null,r,n,e,t);break e;case 11:r=rd(null,r,n,e,t);break e;case 14:r=td(null,r,n,Or(n.type,e),t);break e}throw Error(s(306,n,""))}return r;case 0:return n=r.type,a=r.pendingProps,a=r.elementType===n?a:Or(n,a),eo(e,r,n,a,t);case 1:return n=r.type,a=r.pendingProps,a=r.elementType===n?a:Or(n,a),ld(e,r,n,a,t);case 3:e:{if(od(r),e===null)throw Error(s(387));n=r.pendingProps,l=r.memoizedState,a=l.element,wu(e,r),aa(r,n,null,t);var d=r.memoizedState;if(n=d.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=l,r.memoizedState=l,r.flags&256){a=jn(Error(s(423)),r),r=sd(e,r,n,t,a);break e}else if(n!==a){a=jn(Error(s(424)),r),r=sd(e,r,n,t,a);break e}else for(fr=kt(r.stateNode.containerInfo.firstChild),pr=r,ze=!0,zr=null,t=yu(r,null,n,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(vn(),n===a){r=it(e,r,t);break e}tr(e,r,n,t)}r=r.child}return r;case 5:return Nu(r),e===null&&Pl(r),n=r.type,a=r.pendingProps,l=e!==null?e.memoizedProps:null,d=a.children,xl(n,a)?d=null:l!==null&&xl(n,l)&&(r.flags|=32),ad(e,r),tr(e,r,d,t),r.child;case 6:return e===null&&Pl(r),null;case 13:return ud(e,r,t);case 4:return Il(r,r.stateNode.containerInfo),n=r.pendingProps,e===null?r.child=kn(r,null,n,t):tr(e,r,n,t),r.child;case 11:return n=r.type,a=r.pendingProps,a=r.elementType===n?a:Or(n,a),rd(e,r,n,a,t);case 7:return tr(e,r,r.pendingProps,t),r.child;case 8:return tr(e,r,r.pendingProps.children,t),r.child;case 12:return tr(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(n=r.type._context,a=r.pendingProps,l=r.memoizedProps,d=a.value,Te(ta,n._currentValue),n._currentValue=d,l!==null)if(Lr(l.value,d)){if(l.children===a.children&&!lr.current){r=it(e,r,t);break e}}else for(l=r.child,l!==null&&(l.return=r);l!==null;){var m=l.dependencies;if(m!==null){d=l.child;for(var f=m.firstContext;f!==null;){if(f.context===n){if(l.tag===1){f=nt(-1,t&-t),f.tag=2;var F=l.updateQueue;if(F!==null){F=F.shared;var $=F.pending;$===null?f.next=f:(f.next=$.next,$.next=f),F.pending=f}}l.lanes|=t,f=l.alternate,f!==null&&(f.lanes|=t),Ml(l.return,t,r),m.lanes|=t;break}f=f.next}}else if(l.tag===10)d=l.type===r.type?null:l.child;else if(l.tag===18){if(d=l.return,d===null)throw Error(s(341));d.lanes|=t,m=d.alternate,m!==null&&(m.lanes|=t),Ml(d,t,r),d=l.sibling}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===r){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}tr(e,r,a.children,t),r=r.child}return r;case 9:return a=r.type,n=r.pendingProps.children,xn(r,t),a=wr(a),n=n(a),r.flags|=1,tr(e,r,n,t),r.child;case 14:return n=r.type,a=Or(n,r.pendingProps),a=Or(n.type,a),td(e,r,n,a,t);case 15:return nd(e,r,r.type,r.pendingProps,t);case 17:return n=r.type,a=r.pendingProps,a=r.elementType===n?a:Or(n,a),pa(e,r),r.tag=1,or(n)?(e=!0,Gi(r)):e=!1,xn(r,t),Wu(r,n,a),Ql(r,n,a,t),ro(null,r,n,!0,e,t);case 19:return cd(e,r,t);case 22:return id(e,r,t)}throw Error(s(156,r.tag))};function Md(e,r){return ps(e,r)}function Fm(e,r,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nr(e,r,t,n){return new Fm(e,r,t,n)}function wo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lm(e){if(typeof e=="function")return wo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===me)return 11;if(e===Re)return 14}return 2}function Pt(e,r){var t=e.alternate;return t===null?(t=Nr(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Na(e,r,t,n,a,l){var d=2;if(n=e,typeof e=="function")wo(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case Y:return Yt(t.children,a,l,r);case P:d=8,a|=8;break;case Q:return e=Nr(12,t,r,a|2),e.elementType=Q,e.lanes=l,e;case xe:return e=Nr(13,t,r,a),e.elementType=xe,e.lanes=l,e;case be:return e=Nr(19,t,r,a),e.elementType=be,e.lanes=l,e;case Ne:return Ea(t,a,l,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oe:d=10;break e;case le:d=9;break e;case me:d=11;break e;case Re:d=14;break e;case He:d=16,n=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return r=Nr(d,t,r,a),r.elementType=e,r.type=n,r.lanes=l,r}function Yt(e,r,t,n){return e=Nr(7,e,n,r),e.lanes=t,e}function Ea(e,r,t,n){return e=Nr(22,e,n,r),e.elementType=Ne,e.lanes=t,e.stateNode={isHidden:!1},e}function jo(e,r,t){return e=Nr(6,e,null,r),e.lanes=t,e}function So(e,r,t){return r=Nr(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function zm(e,r,t,n,a){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ga(0),this.expirationTimes=Ga(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ga(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function No(e,r,t,n,a,l,d,m,f){return e=new zm(e,r,t,m,f),r===1?(r=1,l===!0&&(r|=8)):r=0,l=Nr(3,null,null,r),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Dl(l),e}function Om(e,r,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:M,key:n==null?null:""+n,children:e,containerInfo:r,implementation:t}}function Hd(e){if(!e)return xt;e=e._reactInternals;e:{if(Dt(e)!==e||e.tag!==1)throw Error(s(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(or(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(s(171))}if(e.tag===1){var t=e.type;if(or(t))return du(e,t,r)}return r}function Dd(e,r,t,n,a,l,d,m,f){return e=No(t,n,!0,e,a,l,d,m,f),e.context=Hd(null),t=e.current,n=nr(),a=Tt(t),l=nt(n,a),l.callback=r??null,St(t,l,a),e.current.lanes=a,An(e,a,n),dr(e,n),e}function Ca(e,r,t,n){var a=r.current,l=nr(),d=Tt(a);return t=Hd(t),r.context===null?r.context=t:r.pendingContext=t,r=nt(l,d),r.payload={element:e},n=n===void 0?null:n,n!==null&&(r.callback=n),e=St(a,r,d),e!==null&&(Dr(e,a,d,l),ia(e,a,d)),d}function Ta(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Id(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function Eo(e,r){Id(e,r),(e=e.alternate)&&Id(e,r)}function Mm(){return null}var Ad=typeof reportError=="function"?reportError:function(e){console.error(e)};function Co(e){this._internalRoot=e}Ra.prototype.render=Co.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(s(409));Ca(e,r,null,null)},Ra.prototype.unmount=Co.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Jt(function(){Ca(null,e,null,null)}),r[Xr]=null}};function Ra(e){this._internalRoot=e}Ra.prototype.unstable_scheduleHydration=function(e){if(e){var r=ws();e={blockedOn:null,target:e,priority:r};for(var t=0;t<gt.length&&r!==0&&r<gt[t].priority;t++);gt.splice(t,0,e),t===0&&Ns(e)}};function To(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $d(){}function Hm(e,r,t,n,a){if(a){if(typeof n=="function"){var l=n;n=function(){var F=Ta(d);l.call(F)}}var d=Dd(r,n,e,0,null,!1,!1,"",$d);return e._reactRootContainer=d,e[Xr]=d.current,Zn(e.nodeType===8?e.parentNode:e),Jt(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var m=n;n=function(){var F=Ta(f);m.call(F)}}var f=No(e,0,!1,null,null,!1,!1,"",$d);return e._reactRootContainer=f,e[Xr]=f.current,Zn(e.nodeType===8?e.parentNode:e),Jt(function(){Ca(r,f,t,n)}),f}function Fa(e,r,t,n,a){var l=t._reactRootContainer;if(l){var d=l;if(typeof a=="function"){var m=a;a=function(){var f=Ta(d);m.call(f)}}Ca(r,d,e,a)}else d=Hm(t,r,e,a,n);return Ta(d)}ys=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=In(r.pendingLanes);t!==0&&(Qa(r,t|1),dr(r,Ie()),(ve&6)===0&&(En=Ie()+500,wt()))}break;case 13:Jt(function(){var n=tt(e,1);if(n!==null){var a=nr();Dr(n,e,1,a)}}),Eo(e,1)}},Xa=function(e){if(e.tag===13){var r=tt(e,134217728);if(r!==null){var t=nr();Dr(r,e,134217728,t)}Eo(e,134217728)}},xs=function(e){if(e.tag===13){var r=Tt(e),t=tt(e,r);if(t!==null){var n=nr();Dr(t,e,r,n)}Eo(e,r)}},ws=function(){return Ee},js=function(e,r){var t=Ee;try{return Ee=e,r()}finally{Ee=t}},Qr=function(e,r,t){switch(r){case"input":if(rn(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var n=t[r];if(n!==e&&n.form===e.form){var a=Wi(n);if(!a)throw Error(s(90));kr(n),rn(n,a)}}}break;case"textarea":Gr(e,t);break;case"select":r=t.value,r!=null&&fe(e,!!t.multiple,r,!1)}},os=ko,ss=Jt;var Dm={usingClientEntryPoint:!1,Events:[ti,mn,Wi,as,ls,ko]},gi={findFiberByHostInstance:It,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Im={bundleType:gi.bundleType,version:gi.version,rendererPackageName:gi.rendererPackageName,rendererConfig:gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:X.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hs(e),e===null?null:e.stateNode},findFiberByHostInstance:gi.findFiberByHostInstance||Mm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var La=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!La.isDisabled&&La.supportsFiber)try{Ri=La.inject(Im),Kr=La}catch{}}return cr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dm,cr.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!To(r))throw Error(s(200));return Om(e,r,null,t)},cr.createRoot=function(e,r){if(!To(e))throw Error(s(299));var t=!1,n="",a=Ad;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),r=No(e,1,!1,null,null,t,!1,n,a),e[Xr]=r.current,Zn(e.nodeType===8?e.parentNode:e),new Co(r)},cr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=hs(r),e=e===null?null:e.stateNode,e},cr.flushSync=function(e){return Jt(e)},cr.hydrate=function(e,r,t){if(!Pa(r))throw Error(s(200));return Fa(null,e,r,!0,t)},cr.hydrateRoot=function(e,r,t){if(!To(e))throw Error(s(405));var n=t!=null&&t.hydratedSources||null,a=!1,l="",d=Ad;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),r=Dd(r,null,e,1,t??null,a,!1,l,d),e[Xr]=r.current,Zn(e),n)for(e=0;e<n.length;e++)t=n[e],a=t._getVersion,a=a(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,a]:r.mutableSourceEagerHydrationData.push(t,a);return new Ra(r)},cr.render=function(e,r,t){if(!Pa(r))throw Error(s(200));return Fa(null,e,r,!1,t)},cr.unmountComponentAtNode=function(e){if(!Pa(e))throw Error(s(40));return e._reactRootContainer?(Jt(function(){Fa(null,null,e,!1,function(){e._reactRootContainer=null,e[Xr]=null})}),!0):!1},cr.unstable_batchedUpdates=ko,cr.unstable_renderSubtreeIntoContainer=function(e,r,t,n){if(!Pa(t))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Fa(e,r,t,!1,n)},cr.version="18.3.1-next-f1338f8080-20240426",cr}var Yd;function Gm(){if(Yd)return Fo.exports;Yd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),Fo.exports=Ym(),Fo.exports}var Gd;function Qm(){if(Gd)return za;Gd=1;var o=Gm();return za.createRoot=o.createRoot,za.hydrateRoot=o.hydrateRoot,za}var Xm=Qm();const Zm="modulepreload",ep=function(o,u){return new URL(o,u).href},Qd={},Sc=function(u,s,h){let p=Promise.resolve();if(s&&s.length>0){let k=function(z){return Promise.all(z.map(j=>Promise.resolve(j).then(O=>({status:"fulfilled",value:O}),O=>({status:"rejected",reason:O}))))};const w=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),b=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));p=k(s.map(z=>{if(z=ep(z,h),z in Qd)return;Qd[z]=!0;const j=z.endsWith(".css"),O=j?'[rel="stylesheet"]':"";if(!!h)for(let H=w.length-1;H>=0;H--){const D=w[H];if(D.href===z&&(!j||D.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${z}"]${O}`))return;const R=document.createElement("link");if(R.rel=j?"stylesheet":Zm,j||(R.as="script"),R.crossOrigin="",R.href=z,b&&R.setAttribute("nonce",b),document.head.appendChild(R),j)return new Promise((H,D)=>{R.addEventListener("load",H),R.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${z}`)))})}))}function x(k){const w=new Event("vite:preloadError",{cancelable:!0});if(w.payload=k,window.dispatchEvent(w),!w.defaultPrevented)throw k}return p.then(k=>{for(const w of k||[])w.status==="rejected"&&x(w.reason);return u().catch(x)})};var jc;const rs=((jc=document.querySelector('meta[name="hb-root"]'))==null?void 0:jc.content)??"./",ot=new URL(rs,document.baseURI).pathname,Cr=/\/naeringargildi\/$/.test(new URL(".",document.baseURI).pathname)?"nutrition":/\/vorur\/$/.test(new URL(".",document.baseURI).pathname)?"products":"home",We=(o="")=>`${rs}${o}`,Gt=o=>Cr==="home"?o:`${rs}${o}`,Pn=ot,br="?v=mwc8nf7q",vr=[{slug:"karamelluklattar-med-jardhnetum-og-sjavarsalti",brand:"hberg",name:{is:"Karamelluklattar með jarðhnetum og sjávarsalti",en:"Karamelluklattar með jarðhnetum og sjávarsalti"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Karamellusúkkulaði (55,2%) (sykur, kakósmjör, MJÓLKURDUFT , ýruefni (E322 úr SOJA ), karamellubragðefni, náttúrúleg vanillubragðefni, paprikukrydd), JARÐHNETUR (44%), sjávarsalt (0,8%)",nutrition:"Næringargildi í 100 g: Orka 2377kJ/572 kkal Fita 40 g -Þar af mettuð 15 g Kolvetni 37 g -Þar af sykurtegundir 33 g Trefjar 3,8 g Prótein 14 g Salt 0,93 g",nutritionRows:[["Orka","2377kJ/572 kkal"],["Fita","40 g"],["-Þar af mettuð","15 g"],["Kolvetni","37 g"],["-Þar af sykurtegundir","33 g"],["Trefjar","3,8 g"],["Prótein","14 g"],["Salt","0,93 g"]],tags:["snakk"],tint:"#CB9583",allergens:["peanut","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/karamelluklattar-med-jardhnetum-og-sjavarsalti/",imageUrls:["https://hberg.is/wp-content/uploads/2021/10/karamelluklattar-jardhn-sjavarsalti.jpg","https://hberg.is/wp-content/uploads/2021/10/karamelluklattar-jardhn-sjavarsalti-1.jpg"]},{slug:"kokosflogur-med-karamellu-sjavarsalti",brand:"hberg",name:{is:"Kókosflögur með Karamellu & Sjávarsalti",en:"Kókosflögur með Karamellu & Sjávarsalti"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Kókosflögur, kókospálmasykur, sjávarsalt",nutrition:"Næringargildi í 100 g: Orka 2705 kJ/652 kkal Fita 50 g -Þar af mettuð 47 g Kolvetni 42 g -Þar af sykurtegundir 32 g Trefjar 7,0 g Prótein 5,0 g Salt 0,63 g",nutritionRows:[["Orka","2705 kJ/652 kkal"],["Fita","50 g"],["-Þar af mettuð","47 g"],["Kolvetni","42 g"],["-Þar af sykurtegundir","32 g"],["Trefjar","7,0 g"],["Prótein","5,0 g"],["Salt","0,63 g"]],tags:["snakk"],tint:"#C99481",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kokosflogur-med-karamellu-sjavarsalti/",imageUrls:["https://hberg.is/wp-content/uploads/2020/08/kokosflogur-1.jpg","https://hberg.is/wp-content/uploads/2020/08/kokosflogur-2.jpg"]},{slug:"fuglafodur",brand:"hberg",name:{is:"Fuglafóður",en:"Fuglafóður"},desc:{is:"Annað",en:"Annað"},ingredients:"Innihald: Sólblómafræ",nutrition:"",nutritionRows:[],tags:["annad"],tint:"#A4B5BC",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/fuglafodur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/08/fuglafodur-1.jpg"]},{slug:"linsubaunir-raudar",brand:"hberg",name:{is:"Linsubaunir rauðar",en:"Linsubaunir rauðar"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Rauðar linsubaunir",nutrition:"Næringargildi í 100 g: Orka 573 kJ/136 kkal Fita 0,4 g -Þar af mettuð 0,1 g Kolvetni 20 g -Þar af sykurtegundir 1,8 g Trefjar 7,9 g Prótein 9,0 g Salt 0 g",nutritionRows:[["Orka","573 kJ/136 kkal"],["Fita","0,4 g"],["-Þar af mettuð","0,1 g"],["Kolvetni","20 g"],["-Þar af sykurtegundir","1,8 g"],["Trefjar","7,9 g"],["Prótein","9,0 g"],["Salt","0 g"]],tags:["bakstur"],tint:"#D2BF9D",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/linsubaunir-raudar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/08/raudar-linsubaunir-1.jpg","https://hberg.is/wp-content/uploads/2020/08/raudar-linsubaunir-2.jpg"]},{slug:"hnetusmjor-1kg",brand:"hberg",name:{is:"Hnetusmjör 1Kg",en:"Hnetusmjör 1Kg"},desc:{is:"Hnetusmjör",en:"Hnetusmjör"},ingredients:"Innihald: JARÐHNETUR (97,5%), salt (1,5%), sólblómaolía. Hnetusmjör Uppskriftir & fróðleikur Fróðleikur Hnetusmjör til manneldis má rekja alla leið til Inka og Aztekeka í Suður-Ameríku en sú tegund af hnetusmjör var auðvitað mjög frábrugðið þeim framleiðsluvörum sem við þekkjum í dag. Nútíma saga hnetusmjörs byrjaði í Kanada og í raun ekki fyrr en undir í lok 19. aldar þegar efna & lyfjafræðingurinn Marcellus Gilmore Edson var veitt einkaleyfi á hnetusmjöri. Hnetusmjör er fyrst og fremst próteinríkt var í fyrstu ætlað þeim sem ættu í erfiðleikum með að tyggja mat en slíkt var algengt á þessum tíma. Næringarrík fæða Í hnetusmjöri má finna ríka uppsprettu (20% eða meira af daglegu gildi) trefja, E-vítamíni, pantóþensýru, fólati, níasíni og B6 vítamíni. Einnig má finna steinefni eins og mangan, magnesíum, fosfór, sink, kopar og natríum (bætt við sem salt við framleiðslu) ásamt þíamíni, ríbóflavíni, járni og kalíum. Uppskriftir Geggjað Boost og klárlega okkar uppáhalds skál Við sitjum ekki á gullinu og viljum því deila með ykkur boost uppskrift sem sló heldur betur í gegn hjá starfsfólki okkar og fjölskyldu. Lýsing: Ferskleiki með næringaríkri fylling sem skilar þér aukinni orku og vellíðan. Grunnur: Grísk jógúrt, banani, döðlur, mangó, jarðarber og hnetusmjör. Toppur: Granóla, kókoskaramell, hnetusmjör og jarðarber og banani Skammtið eftir smekk ♥",nutrition:"Næringargildi í 100 g: Orka 2604 kJ/626 kkal Fita 51 g -Þar af mettuð 7,4 g Kolvetni 13 g -Þar af sykurtegundir 4,7 g Trefjar 6,6 g Prótein 25 g Salt 1,5 g",nutritionRows:[["Orka","2604 kJ/626 kkal"],["Fita","51 g"],["-Þar af mettuð","7,4 g"],["Kolvetni","13 g"],["-Þar af sykurtegundir","4,7 g"],["Trefjar","6,6 g"],["Prótein","25 g"],["Salt","1,5 g"]],tags:["smjor"],tint:"#D3A854",allergens:["peanut"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/hnetusmjor-1kg/",imageUrls:["https://hberg.is/wp-content/uploads/2020/07/hnetusmjör-1-kg-mynd.png","https://hberg.is/wp-content/uploads/2020/07/hnetusmjör-1-kg-mynd.png"],weight:"1Kg"},{slug:"orkustykki",brand:"hberg",name:{is:"Orkustykki",en:"Orkustykki"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Döðlur (68%), kókos, kakó.",nutrition:"Næringargildi í 100 g: Orka 1698 kJ/406 kkal Fita 18 g -Þar af mettuð 15 g Kolvetni 61 g -Þar af sykurtegundir 45 g Trefjar 10 g Prótein 5,0 g Salt 0,04 g",nutritionRows:[["Orka","1698 kJ/406 kkal"],["Fita","18 g"],["-Þar af mettuð","15 g"],["Kolvetni","61 g"],["-Þar af sykurtegundir","45 g"],["Trefjar","10 g"],["Prótein","5,0 g"],["Salt","0,04 g"]],tags:["snakk"],tint:"#CA9685",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/orkustykki/",imageUrls:["https://hberg.is/wp-content/uploads/2020/06/orkustykki-dod-kokos-kako-50gr-5.jpg","https://hberg.is/wp-content/uploads/2020/06/orkustykki-dod-kokos-kako-50gr-2.jpg"]},{slug:"strasaet-erytritol",brand:"hberg",name:{is:"Strásæt Erýtrítól",en:"Strásæt Erýtrítól"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Erýthritól strásæta",nutrition:"Næringargildi í 100 g: Orka 0 kJ/0 kkal Fita 0 g -Þar af mettuð 0 g Kolvetni 0 g -Þar af sykurtegundir 0 g , Þar af Erýtritól 100 g Trefjar 0 g Prótein 0 g Salt 0 g",nutritionRows:[["Orka","0 kJ/0 kkal"],["Fita","0 g"],["-Þar af mettuð","0 g"],["Kolvetni","0 g"],["-Þar af sykurtegundir","0 g"],[", Þar af Erýtritól","100 g"],["Trefjar","0 g"],["Prótein","0 g"],["Salt","0 g"]],tags:["bakstur"],tint:"#D4C09C",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/strasaet-erytritol/",imageUrls:["https://hberg.is/wp-content/uploads/2020/05/strasaeta-2.jpg","https://hberg.is/wp-content/uploads/2020/05/strasaeta.jpg"]},{slug:"karamellu-mondlur-med-sukkuladi-sjavarsalti",brand:"hberg",name:{is:"Karamellu-Möndlur með Súkkulaði & Sjávarsalti",en:"Karamellu-Möndlur með Súkkulaði & Sjávarsalti"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Súkkulaði með karamellubragði (68%) (sykur, kakósmjör, MJÓLKURDUFT , kakómassi, ýruefni (E322 úr SOJA ), karamellubragðefni, krydd, náttúrulegt vanillu bragðefni), MÖNDLUR (30%), glúkósasíróp, húðunarefni (E414, E904), salt",nutrition:"Næringargildi í 100 g: Orka 2358 kJ/566kkal Fita 39 g -Þar af mettuð 15 g Kolvetni 43 g -Þar af sykurtegundir 40 g Trefjar 3,4 g Prótein 11 g Salt 0,45 g",nutritionRows:[["Orka","2358 kJ/566kkal"],["Fita","39 g"],["-Þar af mettuð","15 g"],["Kolvetni","43 g"],["-Þar af sykurtegundir","40 g"],["Trefjar","3,4 g"],["Prótein","11 g"],["Salt","0,45 g"]],tags:["snakk"],tint:"#CA9684",allergens:["nuts","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/karamellu-mondlur-med-sukkuladi-sjavarsalti/",imageUrls:["https://hberg.is/wp-content/uploads/2020/05/karamellu-mondlur_sukk-salt-2.jpg","https://hberg.is/wp-content/uploads/2020/05/karamellu-mondlur_sukk-salt.jpg"]},{slug:"heslihnetur-med-sukkuladi-afrit",brand:"hberg",name:{is:"Heslihnetur með súkkulaði",en:"Heslihnetur með súkkulaði"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Súkkulaði (78%) (sykur, MJÓLKURDUFT , kakómassi, kakósmjör, MYSUDUFT , ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), HESLIHNETUR (20%), glúkósasíróp, húðunarefni (E414, E904)",nutrition:"Heslihnetur með súkkulaði Næringargildi í 100 g: Orka 2264 kJ/543kkal Fita 34 g -Þar af mettuð 14 g Kolvetni 50 g -Þar af sykurtegundir 48 g Trefjar 3,8 g Prótein 8,0 g Salt 0,22 g",nutritionRows:[["Orka","2264 kJ/543kkal"],["Fita","34 g"],["-Þar af mettuð","14 g"],["Kolvetni","50 g"],["-Þar af sykurtegundir","48 g"],["Trefjar","3,8 g"],["Prótein","8,0 g"],["Salt","0,22 g"]],tags:["snakk"],tint:"#CD9481",allergens:["nuts","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/heslihnetur-med-sukkuladi-afrit/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/heslihnetur-med-sukkuladi-2.jpg"]},{slug:"wasabi-hnetur",brand:"hberg",name:{is:"Wasabi hnetur",en:"Wasabi hnetur"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: JARÐHNETUR (27,5%), HVEITI (22,1%), sykur, maíssterkja, maísmjöl, pálmaolía (vottuð), salt, sojasósa ( HVEITI , SOJABAUNIR , dextrín, vatn, salt, kojirækt, litarefni (E150c)), krydd (dextrín, þykkingarefni (E414), sinnepsbragðefni, pálmaolía, andoxunarefni (E392)), lyftiefni (E500), kartöflusterkja, bragðaukandi efni (E635), sítrónusýra (E330), litarefni (E141), wasabi (0,003%)",nutrition:"Wasabi hnetur Næringargildi í 100 g: Orka 1921 kJ/458 kkal Fita 19,3 g -Þar af mettuð 4,4 g Kolvetni 59,6 g -Þar af sykurtegundir 23,4 g Trefjar 2,8 g Prótein 10 g Salt 1,0 g",nutritionRows:[["Orka","1921 kJ/458 kkal"],["Fita","19,3 g"],["-Þar af mettuð","4,4 g"],["Kolvetni","59,6 g"],["-Þar af sykurtegundir","23,4 g"],["Trefjar","2,8 g"],["Prótein","10 g"],["Salt","1,0 g"]],tags:["snakk"],tint:"#CA9586",allergens:["peanut","gluten","soy","mustard"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/wasabi-hnetur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/wasabi-hnetur-2.jpg"]},{slug:"heslihnetur-med-irish-coffee-sukkuladi",brand:"hberg",name:{is:"Heslihnetur með Irish Coffee súkkulaði",en:"Heslihnetur með Irish Coffee súkkulaði"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Hvítt súkkulaði (77%) (sykur, kakósmjör, MJÓLKURDUFT , MYSUDUFT , ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), HESLIHNETUR (20%), glúkósasíróp, dökkt súkkulaði (1%) (sykur, kakómassi, kakósmjör, ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), húðunarefni (E414, E904), irish coffee bragðefni (0,3%)",nutrition:"Heslihnetur með Irish Coffee súkkulaði Næringargildi í 100 g: Orka 2351 kJ/564 kkal Fita 37 g -Þar af mettuð 15 g Kolvetni 51 g -Þar af sykurtegundir 50 g Trefjar 1,7 g Prótein 6,4 g Salt 0,29 g",nutritionRows:[["Orka","2351 kJ/564 kkal"],["Fita","37 g"],["-Þar af mettuð","15 g"],["Kolvetni","51 g"],["-Þar af sykurtegundir","50 g"],["Trefjar","1,7 g"],["Prótein","6,4 g"],["Salt","0,29 g"]],tags:["snakk"],tint:"#C99482",allergens:["nuts","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/heslihnetur-med-irish-coffee-sukkuladi/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/heslihnetur-irish.jpg"]},{slug:"piparmondlur",brand:"hberg",name:{is:"Piparmöndlur",en:"Piparmöndlur"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Súkkulaði (65%) (sykur, MJÓLKURDUFT , kakómassi, kakósmjör, MYSUDUFT , ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), MÖNDLUR, salmíakduft (4%) (sýrustillir (E510), lakkrísrót, pálmolía (vottuð)), kakósmjör.",nutrition:"Piparmöndlur Næringargildi í 100 g: Orka 2240 kJ/538 kkal Fita 35 g -Þar af mettuð 12 g Kolvetni 42 g -Þar af sykurtegundir 40 g Trefjar 5,1 g Prótein 10,8 g Salt 0,20 g",nutritionRows:[["Orka","2240 kJ/538 kkal"],["Fita","35 g"],["-Þar af mettuð","12 g"],["Kolvetni","42 g"],["-Þar af sykurtegundir","40 g"],["Trefjar","5,1 g"],["Prótein","10,8 g"],["Salt","0,20 g"]],tags:["snakk"],tint:"#CC9782",allergens:["nuts","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/piparmondlur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/pipar-mondlur.jpg"]},{slug:"kasjusmjor-2",brand:"hberg",name:{is:"Kasjúsmjör",en:"Kasjúsmjör"},desc:{is:"Hnetusmjör",en:"Hnetusmjör"},ingredients:"Innihald: KASJÚHNETUR (99,2%), sjávarsalt (0,8%)",nutrition:"Næringargildi í 100 g: Orka 2416 kJ/582 kkal Fita 44 g -Þar af mettuð 7,8 g Kolvetni 27 g -Þar af sykurtegundir 5,9 g Trefjar 3,3 g Prótein 18 g Salt 0,8 g",nutritionRows:[["Orka","2416 kJ/582 kkal"],["Fita","44 g"],["-Þar af mettuð","7,8 g"],["Kolvetni","27 g"],["-Þar af sykurtegundir","5,9 g"],["Trefjar","3,3 g"],["Prótein","18 g"],["Salt","0,8 g"]],tags:["smjor"],tint:"#D2AA5A",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kasjusmjor-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/04/kasjusmjor.jpg"]},{slug:"kasjusmjor",brand:"hberg",name:{is:"Möndlusmjör",en:"Möndlusmjör"},desc:{is:"Hnetusmjör",en:"Hnetusmjör"},ingredients:"Innihald: MÖNDLUR , sjávarsalt (0,8%)",nutrition:"Næringargildi í 100 g: Orka 2623 kJ/663 kkal Fita 49 g -Þar af mettuð 4,0 g Kolvetni 21 g -Þar af sykurtegundir 4,5 g Trefjar 12 g Prótein 21 g Salt 0,8 g",nutritionRows:[["Orka","2623 kJ/663 kkal"],["Fita","49 g"],["-Þar af mettuð","4,0 g"],["Kolvetni","21 g"],["-Þar af sykurtegundir","4,5 g"],["Trefjar","12 g"],["Prótein","21 g"],["Salt","0,8 g"]],tags:["smjor"],tint:"#D1AC5D",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kasjusmjor/",imageUrls:["https://hberg.is/wp-content/uploads/2020/04/mondlusmjor.jpg"]},{slug:"hnetusmjor",brand:"hberg",name:{is:"Hnetusmjör 340g",en:"Hnetusmjör 340g"},desc:{is:"Hnetusmjör",en:"Hnetusmjör"},ingredients:"Innihald: JARÐHNETUR (97,5%), salt (1,5%), sólblómaolía.",nutrition:"Næringargildi í 100 g: Orka 2604 kJ/626 kkal Fita 51 g -Þar af mettuð 7,4 g Kolvetni 13 g -Þar af sykurtegundir 4,7 g Trefjar 6,6 g Prótein 25 g Salt 1,5 g",nutritionRows:[["Orka","2604 kJ/626 kkal"],["Fita","51 g"],["-Þar af mettuð","7,4 g"],["Kolvetni","13 g"],["-Þar af sykurtegundir","4,7 g"],["Trefjar","6,6 g"],["Prótein","25 g"],["Salt","1,5 g"]],tags:["smjor"],tint:"#D3AB59",allergens:["peanut"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/hnetusmjor/",imageUrls:["https://hberg.is/wp-content/uploads/2020/04/Hnetusmjör340_Hberg.png","https://hberg.is/wp-content/uploads/2020/04/Hnetusmjör340_Hberg.png"],weight:"340g"},{slug:"granola-med-tronuberjum",brand:"hberg",name:{is:"Granóla með Trönuberjum",en:"Granóla með Trönuberjum"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Granóla (95%) (heilkornaflögur (61,5%) ( HAFRAR, HVEITI ), sykur, sólblómaolía, stökkt korn (hrísmjöl, HVEITI , sykur, maltað BYGG , salt), glúkósasíróp, hunang, lyftiefni (E500), kanill, karamellaður sykur, bragðefni, þrávarnarefni (E306)), trönuber (5%) (trönuber, hásykur, sólblómaolía)",nutrition:"Næringargildi í 100 g: Orka 1805 kJ/429 kkal Fita 13 g -Þar af mettuð 1,3 g Kolvetni 67 g -Þar af sykurtegundir 19 g Trefjar 5,9 g Prótein 8,8 g Salt 0,10 g",nutritionRows:[["Orka","1805 kJ/429 kkal"],["Fita","13 g"],["-Þar af mettuð","1,3 g"],["Kolvetni","67 g"],["-Þar af sykurtegundir","19 g"],["Trefjar","5,9 g"],["Prótein","8,8 g"],["Salt","0,10 g"]],tags:["snakk"],tint:"#CA9683",allergens:["gluten"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/granola-med-tronuberjum/",imageUrls:["https://hberg.is/wp-content/uploads/2020/04/granola-med-tronuberjum-2.jpg"]},{slug:"kajuhnetur-bortnar",brand:"hberg",name:{is:"Kasjúhnetur brotnar",en:"Kasjúhnetur brotnar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: KASJÚHNETUR",nutrition:"Kasjúhnetur brotnar Næringargildi í 100 g: Orka 2416 kJ/582 kkal Fita 44  g -Þar af mettuð 7,8 g Kolvetni 27 g -Þar af sykurtegundir 5,9 g Trefjar 3,3 g Prótein 18 g Salt 0,03 g",nutritionRows:[["Orka","2416 kJ/582 kkal"],["Fita","44  g"],["-Þar af mettuð","7,8 g"],["Kolvetni","27 g"],["-Þar af sykurtegundir","5,9 g"],["Trefjar","3,3 g"],["Prótein","18 g"],["Salt","0,03 g"]],tags:["hnetur"],tint:"#B0825E",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kajuhnetur-bortnar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kashuhnetur-brotnar-oristad-2.jpg"]},{slug:"mondlur-med-dokku-sukkuladi",brand:"hberg",name:{is:"Möndlur með dökku súkkulaði",en:"Möndlur með dökku súkkulaði"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Dökkt súkkulaði (68%) (sykur, kakómassi, kakósmjör, ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), MÖNDLUR (29%), glúkósasíróp, pálmaolía, húðunarefni (E414, E904)",nutrition:"Möndlur með dökku súkkulaði Næringargildi í 100 g: Orka 2268 kJ/546 kkal Fita 38 g -Þar af mettuð 15 g Kolvetni 37 g -Þar af sykurtegundir 34 g Trefjar 8,1 g Prótein 9,0 g Salt 0,01 g",nutritionRows:[["Orka","2268 kJ/546 kkal"],["Fita","38 g"],["-Þar af mettuð","15 g"],["Kolvetni","37 g"],["-Þar af sykurtegundir","34 g"],["Trefjar","8,1 g"],["Prótein","9,0 g"],["Salt","0,01 g"]],tags:["snakk"],tint:"#CC9683",allergens:["nuts","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlur-med-dokku-sukkuladi/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mondlur-med-dokku-sukkuladi-2.jpg"]},{slug:"kasjuhentur-med-sukkuladi",brand:"hberg",name:{is:"Kasjúhentur með súkkulaði",en:"Kasjúhentur með súkkulaði"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Súkkulaði (63%) (sykur, MJÓLKURDUFT , kakómassi, kakósmjör, MYSUDUFT , ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), KASJÚHNETUR (34%), glúkósasíróp, pálmaolía, húðunarefni (E414, E904)",nutrition:"Kasjúhnetur með súkkulaði Næringargildi í 100 g: Orka 2268 kJ/544kkal Fita 34 g -Þar af mettuð 13 g Kolvetni 48 g -Þar af sykurtegundir 39 g Trefjar 3,0 g Prótein 10 g Salt 0,18 g",nutritionRows:[["Orka","2268 kJ/544kkal"],["Fita","34 g"],["-Þar af mettuð","13 g"],["Kolvetni","48 g"],["-Þar af sykurtegundir","39 g"],["Trefjar","3,0 g"],["Prótein","10 g"],["Salt","0,18 g"]],tags:["snakk"],tint:"#CA9582",allergens:["nuts","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kasjuhentur-med-sukkuladi/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kasjuhnetur-med-sukkuladi-2.jpg","https://hberg.is/wp-content/uploads/2020/03/kasjuhnetur-med-sukkuladi.jpg"]},{slug:"valhnetukjarnar",brand:"hberg",name:{is:"Valhnetukjarnar",en:"Valhnetukjarnar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: VALHNETUR",nutrition:"Valhnetukjarnar Næringargildi í 100 g: Orka 2584 kJ/618kkal Fita 59 g -Þar af mettuð 3,4 g Kolvetni 9,9 g -Þar af sykurtegundir 1,1 g Trefjar 6,8 g Prótein 24 g Salt 0 g",nutritionRows:[["Orka","2584 kJ/618kkal"],["Fita","59 g"],["-Þar af mettuð","3,4 g"],["Kolvetni","9,9 g"],["-Þar af sykurtegundir","1,1 g"],["Trefjar","6,8 g"],["Prótein","24 g"],["Salt","0 g"]],tags:["hnetur"],tint:"#B5865F",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/valhnetukjarnar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/valhnetukjarnar-2.jpg"]},{slug:"tronuber-2",brand:"hberg",name:{is:"Trönuber",en:"Trönuber"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Trönuber (60%), hrásykur (39%), sólblómaolía (<1%)",nutrition:"Trönuber Næringargildi í 100 g: Orka 1305 kJ/308 kkal Fita 1,5 g -Þar af mettuð 0,2 g Kolvetni 71 g -Þar af sykurtegundir 65 g Trefjar 5,1 g Prótein 0,11 g Salt 0,01 g",nutritionRows:[["Orka","1305 kJ/308 kkal"],["Fita","1,5 g"],["-Þar af mettuð","0,2 g"],["Kolvetni","71 g"],["-Þar af sykurtegundir","65 g"],["Trefjar","5,1 g"],["Prótein","0,11 g"],["Salt","0,01 g"]],tags:["avextir"],tint:"#DE8E59",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/tronuber-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/tronuber.jpg"]},{slug:"sveskjur",brand:"hberg",name:{is:"Sveskjur",en:"Sveskjur"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Sveskjur, rotvarnarefni (E202) (<1%), jurtaolía (<1%)",nutrition:"Sveskjur Næringargildi í 100 g: Orka 1076 kJ/254 kkal Fita 0,2 g -Þar af mettuð 0,1 g Kolvetni 56,8 g -Þar af sykurtegundir 38,1 g Trefjar 7,1 g Prótein 2,7 g Salt 0 g",nutritionRows:[["Orka","1076 kJ/254 kkal"],["Fita","0,2 g"],["-Þar af mettuð","0,1 g"],["Kolvetni","56,8 g"],["-Þar af sykurtegundir","38,1 g"],["Trefjar","7,1 g"],["Prótein","2,7 g"],["Salt","0 g"]],tags:["avextir"],tint:"#E19159",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/sveskjur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/sveskjur-400grIMG_0754-2-of-2.jpg","https://hberg.is/wp-content/uploads/2020/03/sveskjur-400grIMG_0752-1-of-2.jpg"]},{slug:"salthnetur",brand:"hberg",name:{is:"Salthnetur",en:"Salthnetur"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: JARÐHNETUR , sólblómaolía, salt",nutrition:"Salthnetur Næringargildi í 100 g: Orka 2593 kJ/626 kkal Fita 50,6 g -Þar af mettuð 7,5 g Kolvetni 14,2 g -Þar af sykurtegundir 5,3 g Trefjar 6,8 g Prótein 20,9 g Salt 1,50 g",nutritionRows:[["Orka","2593 kJ/626 kkal"],["Fita","50,6 g"],["-Þar af mettuð","7,5 g"],["Kolvetni","14,2 g"],["-Þar af sykurtegundir","5,3 g"],["Trefjar","6,8 g"],["Prótein","20,9 g"],["Salt","1,50 g"]],tags:["hnetur"],tint:"#B5855D",allergens:["peanut"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/salthnetur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/salthnetur.jpg"]},{slug:"pistasiur",brand:"hberg",name:{is:"Pistasíur",en:"Pistasíur"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: PISTASÍURKJARNAR",nutrition:"Pistasíur Næringargildi í 100 g: Orka 2387 kJ/576 kkal Fita 45 g -Þar af mettuð 5,9 g Kolvetni 17 g -Þar af sykurtegundir 7,7 g Trefjar 11 g Prótein 20 g Salt 0,03 g",nutritionRows:[["Orka","2387 kJ/576 kkal"],["Fita","45 g"],["-Þar af mettuð","5,9 g"],["Kolvetni","17 g"],["-Þar af sykurtegundir","7,7 g"],["Trefjar","11 g"],["Prótein","20 g"],["Salt","0,03 g"]],tags:["hnetur"],tint:"#B4855F",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/pistasiur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/pistasiur-2.jpg"]},{slug:"pekan-hnetur",brand:"hberg",name:{is:"Pekan hnetur",en:"Pekan hnetur"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: PEKANHNETUR",nutrition:"Pekanhnetur Næringargildi í 100 g: Orka 2933 kJ/698 kkal Fita 69,8 g -Þar af mettuð 6,3 g Kolvetni 6,2 g -Þar af sykurtegundir 4,5 g Trefjar 9,4 g Prótein 10 g Salt 0,003 g",nutritionRows:[["Orka","2933 kJ/698 kkal"],["Fita","69,8 g"],["-Þar af mettuð","6,3 g"],["Kolvetni","6,2 g"],["-Þar af sykurtegundir","4,5 g"],["Trefjar","9,4 g"],["Prótein","10 g"],["Salt","0,003 g"]],tags:["hnetur"],tint:"#B2855E",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/pekan-hnetur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/pekanhnetur-2.jpg"]},{slug:"orkupokinn",brand:"hberg",name:{is:"Orkupokinn",en:"Orkupokinn"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Ristaðar hnetur ( JARÐHNETUR ( JARÐHNETUOLÍA , salt), KASJÚHNETUR , MÖNDLUR ), rúsínur (sólblómaolía, rotvarnarefni ( BRENNISTEINSDÍOXÍÐ )), trönuber (hrásykur, sólblómaolía)",nutrition:"Orkupokinn Næringargildi í 100 g: Orka 2145 kJ/515 kkal Fita 33 g -Þar af mettuð 4,5 g Kolvetni 36 g -Þar af sykurtegundir 22 g Trefjar 6,3 g Prótein 16 g Salt 0,64 g",nutritionRows:[["Orka","2145 kJ/515 kkal"],["Fita","33 g"],["-Þar af mettuð","4,5 g"],["Kolvetni","36 g"],["-Þar af sykurtegundir","22 g"],["Trefjar","6,3 g"],["Prótein","16 g"],["Salt","0,64 g"]],tags:["snakk"],tint:"#CC9784",allergens:["nuts","peanut","sulphites"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/orkupokinn/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/orku-pokinn-2.jpg"]},{slug:"party-pokinn",brand:"hberg",name:{is:"Partý pokinn",en:"Partý pokinn"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Kryddhjúpaðar jarðhnetur ( JARÐHNETUR , HVEITI , kartöflusterkja, kryddblanda (krydd, brauðraspur ( HVEITI , salt, lyftiefni (E503), paprika, kekkjavarnarefni (E551), rotvarnarefni (E306), turmerik), sólblómaolía, salt, sykur, hvítlaukur, lyftiefni (E500), náttúruleg bragðefni ( HVEITI )), JARÐHNETUR (sólblómaolía, salt (1%)), ristaðar MÖNDLUR , ristuð graskersfræ (pálmolía).",nutrition:"Partý pokinn Næringargildi í 100 g: Orka 2122 kJ/507 kkal Fita 30 g -Þar af mettuð 8,5 g Kolvetni 38 g -Þar af sykurtegundir 2,8 g Trefjar 9,6 g Prótein 17 g Salt 1,8 g",nutritionRows:[["Orka","2122 kJ/507 kkal"],["Fita","30 g"],["-Þar af mettuð","8,5 g"],["Kolvetni","38 g"],["-Þar af sykurtegundir","2,8 g"],["Trefjar","9,6 g"],["Prótein","17 g"],["Salt","1,8 g"]],tags:["snakk"],tint:"#CA9584",allergens:["nuts","peanut","gluten"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/party-pokinn/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/party-pokinn-2-1.jpg"]},{slug:"mondlur",brand:"hberg",name:{is:"Möndlur",en:"Möndlur"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: MÖNDLUR",nutrition:"Möndlur heilar með hýði Næringargildi í 100 g: Orka 2623 kJ/633 kkal Fita 49 g -Þar af mettuð 4,0 g Kolvetni 21 g -Þar af sykurtegundir 4,5 g Trefjar 12 g Prótein 21 g Salt 0 g",nutritionRows:[["Orka","2623 kJ/633 kkal"],["Fita","49 g"],["-Þar af mettuð","4,0 g"],["Kolvetni","21 g"],["-Þar af sykurtegundir","4,5 g"],["Trefjar","12 g"],["Prótein","21 g"],["Salt","0 g"]],tags:["hnetur"],tint:"#B4845C",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mondlur.jpg"]},{slug:"mondlur-sneiddar",brand:"hberg",name:{is:"Möndlur sneiddar",en:"Möndlur sneiddar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: MÖNDLUR",nutrition:"Möndlur sneiddar Næringargildi í 100 g: Orka 2703kJ/653 kkal Fita 52 g -Þar af mettuð 3,95 g Kolvetni 18,7 g -Þar af sykurtegundir 4,6 g Trefjar 9,9 g Prótein 21,4 g Salt 0,05 g",nutritionRows:[["Orka","2703kJ/653 kkal"],["Fita","52 g"],["-Þar af mettuð","3,95 g"],["Kolvetni","18,7 g"],["-Þar af sykurtegundir","4,6 g"],["Trefjar","9,9 g"],["Prótein","21,4 g"],["Salt","0,05 g"]],tags:["hnetur"],tint:"#B2835D",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlur-sneiddar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/möndlur-sneiddar.jpg"]},{slug:"mondlur-afhyddar",brand:"hberg",name:{is:"Möndlur afhýddar",en:"Möndlur afhýddar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: MÖNDLUR",nutrition:"Möndlur afhýddar Næringargildi í 100 g: Orka 2703kJ/653 kkal Fita 52 g -Þar af mettuð 3,95 g Kolvetni 18,7 g -Þar af sykurtegundir 4,6 g Trefjar 9,9 g Prótein 21,4 g Salt 0,05 g",nutritionRows:[["Orka","2703kJ/653 kkal"],["Fita","52 g"],["-Þar af mettuð","3,95 g"],["Kolvetni","18,7 g"],["-Þar af sykurtegundir","4,6 g"],["Trefjar","9,9 g"],["Prótein","21,4 g"],["Salt","0,05 g"]],tags:["hnetur"],tint:"#B58560",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlur-afhyddar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mondlur-afhyddar-2.jpg"]},{slug:"mondlur-hakkadar",brand:"hberg",name:{is:"Möndlur hakkaðar",en:"Möndlur hakkaðar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: MÖNDLUR",nutrition:"Möndlur hakkaðar Næringargildi í 100 g: Orka 2703kJ/653 kkal Fita 52 g -Þar af mettuð 3,95 g Kolvetni 18,7 g -Þar af sykurtegundir 4,6 g Trefjar 9,9 g Prótein 21,4 g Salt 0,05 g",nutritionRows:[["Orka","2703kJ/653 kkal"],["Fita","52 g"],["-Þar af mettuð","3,95 g"],["Kolvetni","18,7 g"],["-Þar af sykurtegundir","4,6 g"],["Trefjar","9,9 g"],["Prótein","21,4 g"],["Salt","0,05 g"]],tags:["hnetur"],tint:"#B4845D",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlur-hakkadar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mondlur-hakkadar-2.jpg"]},{slug:"kokosolia-lifraen-og-lyktarlaus",brand:"hberg",name:{is:"Kókosolía, lífræn og lyktarlaus",en:"Kókosolía, lífræn og lyktarlaus"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Lífræn kókoshnetuolía",nutrition:"Kókosolía, lífræn og lyktarlaus 500mL Næringargildi í 100 g: Orka 3700 kJ/900 kkal Fita 100  g -Þar af mettuð 91 g Kolvetni 0 g -Þar af sykurtegundir 0 g Trefjar 0 g Prótein 0 g Salt 0,01 g",nutritionRows:[["Orka","3700 kJ/900 kkal"],["Fita","100  g"],["-Þar af mettuð","91 g"],["Kolvetni","0 g"],["-Þar af sykurtegundir","0 g"],["Trefjar","0 g"],["Prótein","0 g"],["Salt","0,01 g"]],tags:["bakstur"],tint:"#D3BF9B",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kokosolia-lifraen-og-lyktarlaus/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kokosolia-lifraen-lyktarlaus.jpg"]},{slug:"kokosmjol",brand:"hberg",name:{is:"Kókosmjöl",en:"Kókosmjöl"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Kókosmjöl",nutrition:"Kókosmjöl Næringargildi í 100 g: Orka 2451 kJ/595 kkal Fita 56  g -Þar af mettuð 53,3 g Kolvetni 8 g -Þar af sykurtegundir 6,3 g Trefjar 17 g Prótein 6,3 g Salt 0,07 g",nutritionRows:[["Orka","2451 kJ/595 kkal"],["Fita","56  g"],["-Þar af mettuð","53,3 g"],["Kolvetni","8 g"],["-Þar af sykurtegundir","6,3 g"],["Trefjar","17 g"],["Prótein","6,3 g"],["Salt","0,07 g"]],tags:["bakstur"],tint:"#D4C0A2",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kokosmjol/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kokosmjol-2-of-2.jpg"]},{slug:"kokosflogur-2",brand:"hberg",name:{is:"Kókosflögur",en:"Kókosflögur"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Kókosflögur",nutrition:"Kókosflögur Næringargildi í 100 g: Orka 3055 kJ/740 kkal Fita 66  g -Þar af mettuð 56 g Kolvetni 7 g -Þar af sykurtegundir 7 g Trefjar 15 g Prótein 7 g Salt 0,02 g",nutritionRows:[["Orka","3055 kJ/740 kkal"],["Fita","66  g"],["-Þar af mettuð","56 g"],["Kolvetni","7 g"],["-Þar af sykurtegundir","7 g"],["Trefjar","15 g"],["Prótein","7 g"],["Salt","0,02 g"]],tags:["bakstur"],tint:"#D2BC9B",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kokosflogur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kokosflogur-2.jpg"]},{slug:"kinoafrae",brand:"hberg",name:{is:"Kínóafræ",en:"Kínóafræ"},desc:{is:"Fræ",en:"Fræ"},ingredients:"Innihald: Kínóafræ",nutrition:"Kínóafræ Næringargildi í 100 g: Orka 1698 kJ/402 kkal Fita 6  g -Þar af mettuð 0 g Kolvetni 70 g -Þar af sykurtegundir 0 g Trefjar 6 g Prótein 14 g Salt 0 g",nutritionRows:[["Orka","1698 kJ/402 kkal"],["Fita","6  g"],["-Þar af mettuð","0 g"],["Kolvetni","70 g"],["-Þar af sykurtegundir","0 g"],["Trefjar","6 g"],["Prótein","14 g"],["Salt","0 g"]],tags:["frae"],tint:"#A0AE80",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kinoafrae/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kinofrae-2.jpg"]},{slug:"kajuhnetur-heilarristadar",brand:"hberg",name:{is:"Kasjúhnetur heilar & ristaðar",en:"Kasjúhnetur heilar & ristaðar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: KASJÚHNETUR",nutrition:"Kasjúhnetur heilar og ristaðar Næringargildi í 100 g: Orka 2416 kJ/582 kkal Fita 44  g -Þar af mettuð 7,8 g Kolvetni 27 g -Þar af sykurtegundir 5,9 g Trefjar 3,3 g Prótein 18 g Salt 0,03 g",nutritionRows:[["Orka","2416 kJ/582 kkal"],["Fita","44  g"],["-Þar af mettuð","7,8 g"],["Kolvetni","27 g"],["-Þar af sykurtegundir","5,9 g"],["Trefjar","3,3 g"],["Prótein","18 g"],["Salt","0,03 g"]],tags:["hnetur"],tint:"#B3845E",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kajuhnetur-heilarristadar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kasjuhnetur-250gr-2-of-2.jpg","https://hberg.is/wp-content/uploads/2020/03/kasjuhnetur-250gr-1-of-2.jpg"]},{slug:"hampfrae-3",brand:"hberg",name:{is:"Hampfræ",en:"Hampfræ"},desc:{is:"Fræ",en:"Fræ"},ingredients:"Innihald: Hampfræ",nutrition:"Hampfræ Næringargildi í 100 g: Orka 2455kJ/592 kkal Fita 48  g -Þar af mettuð 5,2 g Kolvetni 3,1 g -Þar af sykurtegundir 2,6 g Trefjar 6,0 g Prótein 34 g Salt 0,03 g",nutritionRows:[["Orka","2455kJ/592 kkal"],["Fita","48  g"],["-Þar af mettuð","5,2 g"],["Kolvetni","3,1 g"],["-Þar af sykurtegundir","2,6 g"],["Trefjar","6,0 g"],["Prótein","34 g"],["Salt","0,03 g"]],tags:["frae"],tint:"#A2AF80",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/hampfrae-3/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/hampfrae-2.jpg"]},{slug:"heslihnetur-hakkadar-2",brand:"hberg",name:{is:"Heslihnetur hakkaðar",en:"Heslihnetur hakkaðar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: HESLIHNETUR",nutrition:"Heslihnetur hakkaðar og ristaðar Næringargildi í 100 g: Orka 2939 kJ/711 kkal Fita 62,4 g -Þar af mettuð 4,5 g Kolvetni 17,6 g -Þar af sykurtegundir 4,9 g Trefjar 9,4 g Prótein 15 g Salt 0 g",nutritionRows:[["Orka","2939 kJ/711 kkal"],["Fita","62,4 g"],["-Þar af mettuð","4,5 g"],["Kolvetni","17,6 g"],["-Þar af sykurtegundir","4,9 g"],["Trefjar","9,4 g"],["Prótein","15 g"],["Salt","0 g"]],tags:["hnetur"],tint:"#B3845E",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/heslihnetur-hakkadar-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/heslihnetur-2.jpg","https://hberg.is/wp-content/uploads/2020/03/heslihnetur-1.jpg"]},{slug:"heslihnetur-heilar",brand:"hberg",name:{is:"Heslihnetur heilar",en:"Heslihnetur heilar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: HESLIHNETUR",nutrition:"Næringargildi í 100 g: Orka 2700 kJ/654 kkal Fita 61 g -Þar af mettuð 4,5 g Kolvetni 7,0 g -Þar af sykurtegundir 4,3 g Trefjar 9,7 g Prótein 15 g Salt 0 g",nutritionRows:[["Orka","2700 kJ/654 kkal"],["Fita","61 g"],["-Þar af mettuð","4,5 g"],["Kolvetni","7,0 g"],["-Þar af sykurtegundir","4,3 g"],["Trefjar","9,7 g"],["Prótein","15 g"],["Salt","0 g"]],tags:["hnetur"],tint:"#B6875B",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/heslihnetur-heilar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/Heslihnetur-100gr-1-of-1.jpg","https://hberg.is/wp-content/uploads/2020/03/Heslihnetur-100gr-2.jpg"]},{slug:"avaxta-og-hnetublanda-2",brand:"hberg",name:{is:"Ávaxta & hnetublanda",en:"Ávaxta & hnetublanda"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Súkkulaði (sykur, MJÓLKURDUFT , kakómassi, kakósmjör, MYSUDUFT , ýruefni (E322 úr SOJA ), bragðefni), rúsínur, ananas, bananar, JARÐHNETUR , KASJÚHNETUR, MÖNDLUR , glúkósasýróp, kókosolía, JÓGÚRTDUFT , jógúrtbragðefni, húðunarefni (E414, E904), pálmaolía, sólblómaolía, rotvarnarefni ( BRENNISTEINSDÍOXÍÐ )",nutrition:"Ávaxta & hnetublanda Næringargildi í 100 g: Orka 2035 kJ/486 kkal Fita 24 g -Þar af mettuð 12 g Kolvetni 60 g -Þar af sykurtegundir 55 g Prótein 6,4 g Salt 0,29 g",nutritionRows:[["Orka","2035 kJ/486 kkal"],["Fita","24 g"],["-Þar af mettuð","12 g"],["Kolvetni","60 g"],["-Þar af sykurtegundir","55 g"],["Prótein","6,4 g"],["Salt","0,29 g"],["",""]],tags:["snakk"],tint:"#CB9483",allergens:["nuts","peanut","milk","soy","sulphites"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/avaxta-og-hnetublanda-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/avaxta-og-hnetublanda-2.jpg","https://hberg.is/wp-content/uploads/2020/03/avaxta-og-hnetublanda.jpg"]},{slug:"hampfrae-2",brand:"hberg",name:{is:"Stórar rúsínur",en:"Stórar rúsínur"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Rúsínur, sólblómaolía (<0,75%)",nutrition:"Stórar Rúsínur Næringargildi í 100 g: Orka 1377 kJ/324 kkal Fita 0 g -Þar af mettuð 0 g Kolvetni 78 g -Þar af sykurtegundir 61,2 g Trefjar 1 g Prótein 2,5 g Salt 0,06 g",nutritionRows:[["Orka","1377 kJ/324 kkal"],["Fita","0 g"],["-Þar af mettuð","0 g"],["Kolvetni","78 g"],["-Þar af sykurtegundir","61,2 g"],["Trefjar","1 g"],["Prótein","2,5 g"],["Salt","0,06 g"]],tags:["avextir"],tint:"#DF9058",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/hampfrae-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/Rúsínur-stórar.jpg"]},{slug:"granola-an-vidbaetts-sykurs-med-frostthurrkudum-jardarberjum",brand:"hberg",name:{is:"Granóla án viðbætts sykurs , með frostþurrkuðum jarðarberjum",en:"Granóla án viðbætts sykurs , með frostþurrkuðum jarðarberjum"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: HAFRAFLÖGUR (51%), trefjar úr síkóríurót (22,3%), HVEITI , repjuolía, stökkt maís- HVEITI (kurlaður maís, HVEITI , kurlað hveiti, maísmjöl) pressað maís- HVEITI (maís, HVEITI , salt) kókosmjöl (2%), frostþurrkuð jarðaber (1,5%), náttúruleg bragðefni, þráavarnarefni (E304, E306)",nutrition:"Granóla án viðbætts sykurs , með frostþurrkuðum jarðarberjum Næringargildi í 100 g: Orka 1770kJ/422 kkal Fita 11 g -Þar af mettuð 1,9 g Kolvetni 67 g -Þar af sykurtegundir 6,6 g Trefjar 4,8 g Prótein 11 g Salt 0,02 g",nutritionRows:[["Orka","1770kJ/422 kkal"],["Fita","11 g"],["-Þar af mettuð","1,9 g"],["Kolvetni","67 g"],["-Þar af sykurtegundir","6,6 g"],["Trefjar","4,8 g"],["Prótein","11 g"],["Salt","0,02 g"]],tags:["snakk"],tint:"#CC9684",allergens:["gluten"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/granola-an-vidbaetts-sykurs-med-frostthurrkudum-jardarberjum/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/sykurlaust-granola-jardaber-2.jpg","https://hberg.is/wp-content/uploads/2020/03/sykurlaust-granola-jardaber-1.jpg"]},{slug:"goji-ber-2",brand:"hberg",name:{is:"Goji ber",en:"Goji ber"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Goji ber",nutrition:"Næringargildi í 100 g: Orka 1258kJ/298 kkal Fita 1,5 g -Þar af mettuð 0,3 g Kolvetni 55 g -Þar af sykurtegundir 50 g Trefjar 10 g Prótein 11 g Salt 0,78 g",nutritionRows:[["Orka","1258kJ/298 kkal"],["Fita","1,5 g"],["-Þar af mettuð","0,3 g"],["Kolvetni","55 g"],["-Þar af sykurtegundir","50 g"],["Trefjar","10 g"],["Prótein","11 g"],["Salt","0,78 g"]],tags:["avextir"],tint:"#E3945D",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/goji-ber-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/goji-ber-2.jpg"]},{slug:"furuhnetur-2",brand:"hberg",name:{is:"Furuhnetur",en:"Furuhnetur"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: Furuhnetur",nutrition:"Furuhnetur Næringargildi í 100 g: Orka 3016 kJ/730 kkal Fita 68,4 g -Þar af mettuð 4,9 g Kolvetni 13,1 g -Þar af sykurtegundir 3,6 g Trefjar 3,7 g Prótein 13,7 g Salt 0,01 g",nutritionRows:[["Orka","3016 kJ/730 kkal"],["Fita","68,4 g"],["-Þar af mettuð","4,9 g"],["Kolvetni","13,1 g"],["-Þar af sykurtegundir","3,6 g"],["Trefjar","3,7 g"],["Prótein","13,7 g"],["Salt","0,01 g"]],tags:["hnetur"],tint:"#B4845C",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/furuhnetur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/furuhnetur-2.jpg"]},{slug:"fikjur-2",brand:"hberg",name:{is:"Fíkjur",en:"Fíkjur"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Fíkjur, hrísmjöl (<3%)",nutrition:"Fíkjur Næringargildi í 100 g: Orka 1088 kJ/257 kkal Fita 0,93 g -Þar af mettuð 0,14 g Kolvetni 54,1 g -Þar af sykurtegundir 47,9 g Trefjar 9,8 g Prótein 3,3 g Salt 0,03 g",nutritionRows:[["Orka","1088 kJ/257 kkal"],["Fita","0,93 g"],["-Þar af mettuð","0,14 g"],["Kolvetni","54,1 g"],["-Þar af sykurtegundir","47,9 g"],["Trefjar","9,8 g"],["Prótein","3,3 g"],["Salt","0,03 g"]],tags:["avextir"],tint:"#DC8E5A",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/fikjur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/fikjur-2.jpg"]},{slug:"dodlur-2",brand:"hberg",name:{is:"Döðlur",en:"Döðlur"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Döðlur, sólblómaolía (<0,2%)",nutrition:"Döðlu heilar og steinlausar Næringargildi í 100 g: Orka 1252 kJ/295 kkal Fita 0,2 g -Þar af mettuð 0,1 g Kolvetni 68 g -Þar af sykurtegundir 66 g Trefjar 4 g Prótein 3,3 g Salt 0,03 g",nutritionRows:[["Orka","1252 kJ/295 kkal"],["Fita","0,2 g"],["-Þar af mettuð","0,1 g"],["Kolvetni","68 g"],["-Þar af sykurtegundir","66 g"],["Trefjar","4 g"],["Prótein","3,3 g"],["Salt","0,03 g"]],tags:["avextir"],tint:"#DF905A",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/dodlur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/dodlur-2.jpg"]},{slug:"dodlur-saxadar-2",brand:"hberg",name:{is:"Döðlur saxaðar",en:"Döðlur saxaðar"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Döðlur, hrísmjöl (<3%)",nutrition:"Döðlu saxaðar Næringargildi í 100 g: Orka 1320 kJ/311 kkal Fita 0,2 g -Þar af mettuð 0,1 g Kolvetni 72 g -Þar af sykurtegundir 68 g Trefjar 4 g Prótein 3,3 g Salt 0,03 g",nutritionRows:[["Orka","1320 kJ/311 kkal"],["Fita","0,2 g"],["-Þar af mettuð","0,1 g"],["Kolvetni","72 g"],["-Þar af sykurtegundir","68 g"],["Trefjar","4 g"],["Prótein","3,3 g"],["Salt","0,03 g"]],tags:["avextir"],tint:"#DF8E57",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/dodlur-saxadar-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/dodlur-saxadar-2.jpg"]},{slug:"dodlusirop-2",brand:"hberg",name:{is:"Döðlusíróp",en:"Döðlusíróp"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Döðlur (100%)",nutrition:"Döðlusíróp Næringargildi í 100 g: Orka 1371 kJ/324 kkal Fita 0,1 g -Þar af mettuð 0 g Kolvetni 75 g -Þar af sykurtegundir 62 g Trefjar 7,8 g Prótein 2,0 g Salt 0,11 g",nutritionRows:[["Orka","1371 kJ/324 kkal"],["Fita","0,1 g"],["-Þar af mettuð","0 g"],["Kolvetni","75 g"],["-Þar af sykurtegundir","62 g"],["Trefjar","7,8 g"],["Prótein","2,0 g"],["Salt","0,11 g"]],tags:["bakstur"],tint:"#D5C29C",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/dodlusirop-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/dodlusyrop-1.jpg"]},{slug:"chilli-hriskokur",brand:"hberg",name:{is:"Chilli hrískökur",en:"Chilli hrískökur"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Hrísmjöl, pálmaolía (vottuð), sykur, tapíókasterkja, maltódextrín, salt, litarefni (E160c, E150c), paprikuþykkni, chili, sojasósa ( SOJABAUNIR , HVEITI , vatn, salt)",nutrition:"Apríkósur Næringargildi í 100 g: Orka 2297kJ/550 kkal Fita 33,3 g -Þar af mettuð 16,3 g Kolvetni 58 g -Þar af sykurtegundir 11,1 g Trefjar 1,5 g Prótein 3,9 g Salt 2,1 g",nutritionRows:[["Orka","2297kJ/550 kkal"],["Fita","33,3 g"],["-Þar af mettuð","16,3 g"],["Kolvetni","58 g"],["-Þar af sykurtegundir","11,1 g"],["Trefjar","1,5 g"],["Prótein","3,9 g"],["Salt","2,1 g"]],tags:["snakk"],tint:"#CB9582",allergens:["gluten","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/chilli-hriskokur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/chili-hriskokur.jpg"]},{slug:"aprikosur-2",brand:"hberg",name:{is:"Apríkósur",en:"Apríkósur"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Apríkósur, rotvarnarefni (<0,2%)( BRENNISTEINSDÍOXÍÐ )",nutrition:"Apríkósur Næringargildi í 100 g: Orka 1076 kJ/254 kkal Fita 0,51 g -Þar af mettuð 0,02 g Kolvetni 55 g -Þar af sykurtegundir 53 g Trefjar 7,3 g Prótein 3,4 g Salt 0,03 g",nutritionRows:[["Orka","1076 kJ/254 kkal"],["Fita","0,51 g"],["-Þar af mettuð","0,02 g"],["Kolvetni","55 g"],["-Þar af sykurtegundir","53 g"],["Trefjar","7,3 g"],["Prótein","3,4 g"],["Salt","0,03 g"]],tags:["avextir"],tint:"#DC8C5A",allergens:["sulphites"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/aprikosur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/aprikosur-2.jpg"]},{slug:"husk",brand:"hberg",name:{is:"Husk",en:"Husk"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Psyllium husk trefjar",nutrition:"Huskið er einstkalega trefjaríkt og gott fyrir meltinguna Næringargildi í 100 g: Orka 776kJ/194 kkal Fita 2 g -Þar af mettuð 0,2 g Kolvetni 2,5 g -Þar af sykurtegundir 0 g Trefjar 87,5 g Prótein 1,4 g Salt 0,33 g",nutritionRows:[["Orka","776kJ/194 kkal"],["Fita","2 g"],["-Þar af mettuð","0,2 g"],["Kolvetni","2,5 g"],["-Þar af sykurtegundir","0 g"],["Trefjar","87,5 g"],["Prótein","1,4 g"],["Salt","0,33 g"]],tags:["bakstur"],tint:"#D3BF9D",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/husk/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/husk-trefjar-2.jpg","https://hberg.is/wp-content/uploads/2020/03/husk-trefjar.jpg"]},{slug:"kokospalmasykur-2",brand:"hberg",name:{is:"Kókospálmasykur",en:"Kókospálmasykur"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Kókospálmasykur",nutrition:"Kókospálmasykur Næringargildi í 100 g: Orka 1634 kJ/385 kkal Fita 0 g -Þar af mettuð 0 g Kolvetni 94 g -Þar af sykurtegundir 83 g Trefjar 2,1 g Prótein 1,1 g Salt 0,17g",nutritionRows:[["Orka","1634 kJ/385 kkal"],["Fita","0 g"],["-Þar af mettuð","0 g"],["Kolvetni","94 g"],["-Þar af sykurtegundir","83 g"],["Trefjar","2,1 g"],["Prótein","1,1 g"],["Salt","0,17g"]],tags:["bakstur"],tint:"#D4C19E",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kokospalmasykur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kokos-palmasykur-2.jpg"]},{slug:"chia-frae-2",brand:"hberg",name:{is:"Chia fræ",en:"Chia fræ"},desc:{is:"Fræ",en:"Fræ"},ingredients:"Innihald: Chia fræ",nutrition:"Chia fræ Næringargildi í 100 g: Orka 2156 kJ/519 kkal Fita 28,6 g -Þar af mettuð 3,2 g Kolvetni 4,4 g -Þar af sykurtegundir 0 g Trefjar 37,7 g Prótein 15,6 g Salt 0,05 g",nutritionRows:[["Orka","2156 kJ/519 kkal"],["Fita","28,6 g"],["-Þar af mettuð","3,2 g"],["Kolvetni","4,4 g"],["-Þar af sykurtegundir","0 g"],["Trefjar","37,7 g"],["Prótein","15,6 g"],["Salt","0,05 g"]],tags:["frae"],tint:"#A4B281",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/chia-frae-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/chia-frae-2.jpg","https://hberg.is/wp-content/uploads/2020/03/chia-frae.jpg"]},{slug:"mondlumjol-2",brand:"hberg",name:{is:"Möndlumjöl",en:"Möndlumjöl"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: MÖNDLUMJÖL",nutrition:"Möndlumjölið er tilvalið í bakstur. Næringargildi í 100 g: Orka 2689kJ/650 kkal Fita 55 g -Þar af mettuð 4,3 g Kolvetni 7,2 g -Þar af sykurtegundir 3,8 g Trefjar 10 g Prótein 26,7 g Salt 0,07 g",nutritionRows:[["Orka","2689kJ/650 kkal"],["Fita","55 g"],["-Þar af mettuð","4,3 g"],["Kolvetni","7,2 g"],["-Þar af sykurtegundir","3,8 g"],["Trefjar","10 g"],["Prótein","26,7 g"],["Salt","0,07 g"]],tags:["bakstur"],tint:"#D3BF9E",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlumjol-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mondlumjol-2.jpg"]},{slug:"mexikano-snakk-2",brand:"hberg",name:{is:"Mexikano snakk",en:"Mexikano snakk"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Maísmjöl, maíssterkja, ostakrydd ( MJÓLK ), salt, tómatduft, sykur, chiliduft, ger, laukduft, litarefni (E160c), kekkjavarnarefni (E551)), pálmaolía (vottuð), salt",nutrition:"Bragðmikið og brakandi stökkt snakk, tilvalið til fyrir spilakvöldið, saumaklúbbinn eða jafvel á nammibarinn í veislunni. Næringargildi í 100 g: Orka 1562kJ/369 kkal Fita 5,3 g -Þar af mettuð 1,9 g Kolvetni 73,4 g -Þar af sykurtegundir 6,9 g Trefjar 2,9 g Prótein 5,6 g Salt 0,69 g",nutritionRows:[["Orka","1562kJ/369 kkal"],["Fita","5,3 g"],["-Þar af mettuð","1,9 g"],["Kolvetni","73,4 g"],["-Þar af sykurtegundir","6,9 g"],["Trefjar","2,9 g"],["Prótein","5,6 g"],["Salt","0,69 g"]],tags:["snakk"],tint:"#CB9484",allergens:["milk"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mexikano-snakk-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mexico-snakk-2.jpg"]},{slug:"solblomafrae-2",brand:"hberg",name:{is:"Sólblómafræ",en:"Sólblómafræ"},desc:{is:"Fræ",en:"Fræ"},ingredients:"Innihald: Sólblómafræ",nutrition:"Sólblómafræ eru einföld í bragi en einstaklega rík af E og B vítamínum, próteinrík og innihalda góðar olíur. Mikið notuð í brauðgerð og út á salöt, og ekki er verra hvað þau eru ódýr í innkaupum. Næringargildi í 100 g: Orka 2639kJ/637kkal Fita 51 g -Þar af mettuð 6,4 g Kolvetni 20 g -Þar af sykurtegundir 2,0 g Trefjar 9 g Prótein 20 g Salt 0,004 g",nutritionRows:[["Orka","2639kJ/637kkal"],["Fita","51 g"],["-Þar af mettuð","6,4 g"],["Kolvetni","20 g"],["-Þar af sykurtegundir","2,0 g"],["Trefjar","9 g"],["Prótein","20 g"],["Salt","0,004 g"]],tags:["frae"],tint:"#A1AF7F",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/solblomafrae-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/solblomafrae-2.jpg"]},{slug:"graskersfrae-2",brand:"hberg",name:{is:"Graskersfræ",en:"Graskersfræ"},desc:{is:"Fræ",en:"Fræ"},ingredients:"Innihald: Graskersfræ",nutrition:"Graskerafræ eru bragðmikil fræ með keim af hnetu og sætu. Þau eru góð uppspretta næringa- og steinefna, próteinrík, veita fosfór, kalíum, magnesíum, járn og zink. Graskersfræ hafa verið vinsæl í ýmsar uppskriftir, svo sem í salöt og brauðgerð. Næringargildi í 100 g: Orka 2300kJ/550 kkal Fita 34,1 g -Þar af mettuð 0,5 g Kolvetni 5,0 g -Þar af sykurtegundir 1,0 g Trefjar 7,8 g Prótein 32 g Salt 0,02 g",nutritionRows:[["Orka","2300kJ/550 kkal"],["Fita","34,1 g"],["-Þar af mettuð","0,5 g"],["Kolvetni","5,0 g"],["-Þar af sykurtegundir","1,0 g"],["Trefjar","7,8 g"],["Prótein","32 g"],["Salt","0,02 g"]],tags:["frae"],tint:"#A3B17F",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/graskersfrae-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/graskersfrae-2.jpg"]}],Yr=[{id:"nuts",is:"Hnetur",en:"Hnetur"},{id:"peanut",is:"Jarðhnetur",en:"Jarðhnetur"},{id:"milk",is:"Mjólk",en:"Mjólk"},{id:"gluten",is:"Glúten",en:"Glúten"},{id:"soy",is:"Soja",en:"Soja"},{id:"sesame",is:"Sesam",en:"Sesam"},{id:"sulphites",is:"Súlfít",en:"Súlfít"},{id:"mustard",is:"Sinnep",en:"Sinnep"}],ir={name:"H-Berg ehf.",email:"hberg@hberg.is",emailOrders:"pantanir@hberg.is",phone:"565 6500",phoneHref:"tel:+3545656500",address:"Grandatröð 12",postcode:"220 Hafnarfjörður",mapHref:"https://www.google.com/maps/search/?api=1&query=Grandatröð+12+Hafnarfjörður"},rp=[{name:"10-11",href:"https://www.10-11.is",note:{is:"",en:""}},{name:"Albína",href:"https://hberg.is/soluadilar/",note:{is:"Aðalstræti 91, 450 Patreksfjörður",en:"Aðalstræti 91, 450 Patreksfjörður"}},{name:"Bónus",href:"https://www.bonus.is",note:{is:"",en:""}},{name:"Fjarðarkaup",href:"https://www.fjardarkaup.is",note:{is:"Hólshraun 1, 220 Hafnarfjörður",en:"Hólshraun 1, 220 Hafnarfjörður"}},{name:"Fjölval",href:"https://hberg.is/soluadilar/",note:{is:"Þórsgata 10, 450 Patreksfjörður",en:"Þórsgata 10, 450 Patreksfjörður"}},{name:"Hagkaup",href:"https://www.hagkaup.is",note:{is:"",en:""}},{name:"Hlíðarkaup",href:"https://hberg.is/soluadilar/",note:{is:"Akurhlíð 1, 550 Sauðárkróki",en:"Akurhlíð 1, 550 Sauðárkróki"}},{name:"Iceland",href:"https://www.iceland.is",note:{is:"",en:""}},{name:"Kaupfélag Skagfirðinga",href:"https://www.ks.is",note:{is:"Ártorgi 1, 550 Sauðárkrókur",en:"Ártorgi 1, 550 Sauðárkrókur"}},{name:"Kaupfélag Steingrímsfjarðar",href:"https://www.ksholm.is",note:{is:"Höfðatúni 4, 510 Hólmavík",en:"Höfðatúni 4, 510 Hólmavík"}},{name:"Kaupfélag Vestur Húnvetninga",href:"https://www.kvh.is",note:{is:"Strandgötu 1, 530 Hvammstanga",en:"Strandgötu 1, 530 Hvammstanga"}},{name:"Krónan",href:"https://www.kronan.is",note:{is:"",en:""}},{name:"Melabúðin",href:"https://hberg.is/soluadilar/",note:{is:"Hagamel 39, 107 Reykjavík",en:"Hagamel 39, 107 Reykjavík"}},{name:"N1",href:"https://www.n1.is",note:{is:"",en:""}},{name:"Nettó",href:"https://www.netto.is",note:{is:"",en:""}},{name:"Olís",href:"https://www.olis.is",note:{is:"",en:""}},{name:"Samkaup",href:"https://www.samkaup.is",note:{is:"",en:""}},{name:"Skeljungur",href:"https://www.skeljungur.is",note:{is:"",en:""}},{name:"Vöruval Vestmannaeyjum",href:"https://hberg.is/soluadilar/",note:{is:"Vesturvegur 8, 902 Vestmannaeyjar",en:"Vesturvegur 8, 902 Vestmannaeyjar"}}],Ke=o=>vr.find(u=>u.slug===o),ar=(o,u="pack",s="m")=>`${Pn}hberg/p/${o}/${s==="s"?400:s==="m"?800:1200}.webp${br}`,Oo=(o,u)=>`${Pn}hberg/p/${o}/${u}${br}`;vr.slice(0,6).map(o=>o.slug);const Er={logadi:ir.name,heimili:`${ir.address}, ${ir.postcode}`,simi:ir.phone,simiHref:ir.phoneHref,netfang:ir.email,fjarofloun:ir.emailOrders,kort:ir.mapHref},tp="H-Berg ehf. var stofnað í júlí 2007 af Halldóri Berg Jónssyni og fjölskyldu, með það markmið að bjóða persónulega þjónustu á vönduðum og góðum vörum.",Mo={heroLinur:["Hnetur og","þurrkaðir ávextir"],heroAr:"frá H-Berg."},np=[{nafn:"Halldór Berg Jónsson · Framkvæmdastjóri",texti:"halldor@hberg.is",href:"mailto:halldor@hberg.is"},{nafn:"Helgi Berg Halldórsson · Sölustjóri matvörusviðs",texti:"helgi@hberg.is",href:"mailto:helgi@hberg.is"},{nafn:"Elísabet Jónsdóttir · Gæðastjóri",texti:"elisabet@hberg.is",href:"mailto:elisabet@hberg.is"},{nafn:"Ingi Már Björgvinsson · Sölumaður",texti:ir.email,href:`mailto:${ir.email}`}],ip={"@context":"https://schema.org","@type":"Organization",name:"H-Berg ehf.",url:"https://hberg.is",telephone:ir.phone,email:ir.email,foundingDate:"2007",address:{"@type":"PostalAddress",streetAddress:ir.address,postalCode:"220",addressLocality:"Hafnarfjörður",addressCountry:"IS"}},ap=o=>({img:o,n:Ke(o).name.is,grunnur:Ke(o).tint}),lp=["hnetusmjor","orkustykki","chia-frae-2","aprikosur-2","mondlur","graskersfrae-2","kasjusmjor-2"].map(o=>({...ap(o),k:1})),op=[[{t:"Hnetur"},{img:"laus:p00",n:"Hnetur",grunnur:"#B98B60"},{t:"og fræ,"}],[{t:"þurrkaðir ávextir"},{img:"laus:p06",n:"Ávextir",grunnur:"#DE935E"}],[{t:"hnetusmjör"},{img:"hnetusmjor",n:"Smjör",grunnur:"#D7B45D"},{t:"og súkkulaði."}]],sp={Hnetur:["laus:p00","laus:p02","laus:p01","laus:p05"],Ávextir:["laus:p06","laus:p08","laus:p07"],Smjör:["hnetusmjor","kasjusmjor","kasjusmjor-2"]},up=[{merki:"Hnetur",titill:"Hnetur",tegundir:["mondlur","kajuhnetur-heilarristadar","valhnetukjarnar","pistasiur"]},{merki:"Þurrkaðir ávextir",titill:"Ávextir",tegundir:["aprikosur-2","dodlur-2","fikjur-2","tronuber-2"]}].map(o=>({...o,tegundir:o.tegundir.map(u=>{const s=Ke(u);return{slug:u,n:s.name.is,d:s.weight??s.desc.is,lit:s.tint}})})),Nc=[{s:"hnetur",t:"Hnetur",d:"Hnetur frá H-Berg.",img:"kajuhnetur-bortnar",g:"#B98B60",filter:o=>o.tags.includes("hnetur")},{s:"avextir",t:"Þurrkaðir ávextir",d:"Þurrkaðir ávextir frá H-Berg.",img:"aprikosur-2",g:"#DE935E",filter:o=>o.tags.includes("avextir")},{s:"frae",t:"Fræ",d:"Fræ frá H-Berg.",img:"kinoafrae",g:"#A8B77D",filter:o=>o.tags.includes("frae")},{s:"smjor",t:"Hnetusmjör",d:"Hnetusmjör frá H-Berg.",img:"hnetusmjor-1kg",g:"#D7B45D",filter:o=>o.tags.includes("smjor")},{s:"snakk",t:"Súkkulaði og snakk",d:"Súkkulaði og snakk frá H-Berg.",img:"karamelluklattar-med-jardhnetum-og-sjavarsalti",g:"#CF9B89",filter:o=>o.tags.includes("snakk")},{s:"bakstur",t:"Bökunarvörur",d:"Bökunarvörur frá H-Berg.",img:"linsubaunir-raudar",g:"#D6C7A4",filter:o=>o.tags.includes("bakstur")},{s:"annad",t:"Annað",d:"Annað frá H-Berg.",img:"fuglafodur",g:"#A7B9BD",filter:o=>o.tags.includes("annad")}],dp=[{h:"Upphafið",r:[{t:"H-Berg stofnað af Halldóri Berg og fjölskyldu",a:"2007"},{t:"Súkkulaðihjúpaðar gráfíkjur og döðlukúlur",a:"2009"}]},{h:"Framleiðslan",r:[{t:"Framleiðsla hefst fyrir alvöru",a:"2010"},{t:"Byggt við húsnæðið í Grandatröð",a:"2019"}]}],cp=[{q:"Hvar fæst H-Berg?",a:"Söluaðilalistinn okkar telur 19 verslanir og verslanakeðjur. Úrval getur verið ólíkt milli verslana. Listinn segir ekki til um framboð einstakra vara."},{q:"Hvernig panta ég fyrir verslun?",a:"Pantanir fara á pantanir@hberg.is. Hér getur þú sett vörur og fjölda kassa á lista og opnað hann í tölvupóstinum þínum."},{q:"Hvar finn ég innihald og ofnæmisvalda?",a:"Opnaðu vöru til að sjá innihald og næringargildi af vef H-Berg. Ofnæmisupplýsingar eru staðfestar á umbúðum. Ónefnt efni þýðir ekki að vara sé laus við það."},{q:"Eru stærri pakkningar í boði?",a:"H-Berg pakkar í stærri einingar fyrir matvælafyrirtæki, matsölustaði og stóreldhús. Hafðu samband um stærðir og magn."},{q:"Hvar er H-Berg?",a:"Þú finnur okkur í Grandatröð 12, 220 Hafnarfirði."},{q:"Hvernig næ ég í ykkur?",a:"Hringdu í 565 6500 eða sendu tölvupóst á hberg@hberg.is."}];vr.filter(o=>!o.tags.includes("annad")).map(o=>({img:o.slug,n:o.name.is,d:o.desc.is,g:o.tint,a:(o.allergens??[]).map(u=>{var s;return(s=Yr.find(h=>h.id===u))==null?void 0:s.is}).filter(u=>!!u)}));const Xd=[{nafn:"Verslun",stutt:"Pöntunarlisti",hlekkur:"#poki",ord:"Opna pöntunarlistann",nota:"Veldu vörur og fjölda kassa. Opnaðu listann í tölvupósti til pantanir@hberg.is."},{nafn:"Stóreldhús",stutt:"Stærri pakkningar",hlekkur:"#staerra",ord:"Sjá stærri pakkningar",nota:"H-Berg pakkar í stærri einingar fyrir matvælafyrirtæki, matsölustaði og stóreldhús."},{nafn:"Innihald og ofnæmi",stutt:"Upplýsingar um vörur",hlekkur:"#ofnaemi",ord:"Skoða ofnæmisvalda",nota:"Skoðaðu hvaða ofnæmisvaldar eru nefndir í innihaldslýsingum. Staðfest á umbúðum."},{nafn:"Söluaðilar",stutt:"Hvar fæst H-Berg",hlekkur:"#hvar",ord:"Sjá söluaðila",nota:"Skoðaðu söluaðila H-Berg. Ekki er tilgreint hvaða vörur fást á hverjum stað."}],_e=Nc.map(o=>({s:o.s,t:o.t,items:vr.filter(o.filter)})),hp=`
.hb-root .hb-pop:has(.hb-nutrition){width:min(1400px,100%)}
.hb-nutrition{min-width:0}
.hb-nutrition h2{margin:0}
.hb-nutTools{display:flex;gap:1rem;margin:1.5rem 0 1rem}
.hb-nutTools label{display:grid;gap:.4rem;flex:1;min-width:0}
.hb-nutTools input,.hb-nutTools select{font:inherit;font-size:16px;min-height:48px;width:100%;border:1px solid var(--c-lina);border-radius:var(--r);background:var(--c-bg);color:inherit;padding:.6rem .8rem}
.hb-nutTools .hb-nutSort{display:none}
.hb-nutChips{display:flex;flex-wrap:wrap;gap:.4rem}
.hb-nutChips button{min-height:44px;max-width:100%;border:1px solid var(--c-lina);border-radius:999px;background:none;color:inherit;font:inherit;padding:.5rem .9rem;cursor:pointer}
.hb-nutChips button[aria-pressed="true"]{background:var(--c-ink);color:var(--c-bg)}
.hb-nutTable{overflow:auto;max-height:64dvh;border:1px solid var(--c-lina);border-radius:var(--r);isolation:isolate}
.hb-nutTable table{width:100%;border-collapse:separate;border-spacing:0;font-size:.85rem;font-variant-numeric:tabular-nums}
.hb-nutTable th,.hb-nutTable td{padding:.55rem .65rem;box-shadow:inset 0 -1px 0 var(--c-lina);text-align:right;background:var(--c-bg)}
.hb-nutTable tbody tr:nth-child(even)>*{background:color-mix(in srgb,var(--c-el) 35%,var(--c-bg))}
.hb-nutTable thead th{position:sticky;top:0;z-index:2}
.hb-nutTable th:first-child{position:sticky;left:0;z-index:1;min-width:230px;max-width:300px;text-align:left}
.hb-nutTable thead th:first-child{z-index:3}
.hb-nutTable thead button{font:inherit;font-weight:600;min-height:44px;border:0;background:none;color:inherit;white-space:nowrap;padding:0;cursor:pointer}
.hb-nutTable .sorted,.hb-nutTable tbody tr:nth-child(even)>.sorted,.hb-nutCards .sorted{background:color-mix(in srgb,var(--c-gull) 18%,var(--c-bg))}
.hb-nutTable td{white-space:nowrap}
.hb-nutTable small{display:block;color:var(--c-ink-med);font-size:inherit}
.hb-nutProduct{display:flex;align-items:center;gap:.6rem;border:0;background:none;color:inherit;font:inherit;text-align:left;min-height:44px;padding:0;cursor:pointer;font-weight:500;overflow-wrap:anywhere}
.hb-nutThumb{width:44px;height:52px;flex:none;border-radius:8px;display:grid;place-items:center;padding:4px}
.hb-nutThumb img{width:100%;height:100%;object-fit:contain}
.hb-nutAdd .hb-sett{font-size:0;padding:0;min-width:44px;width:44px;min-height:44px;height:44px}
.hb-nutAdd .hb-sett span{font-size:22px}
.hb-nutCards{display:none}
.hb-root .hb-vTafla{max-width:none}
.hb-root .hb-vTafla td{text-align:right;font-variant-numeric:tabular-nums}
.hb-vTafla tr.sub th{padding-left:1.2rem;color:var(--c-ink-med)}
.hb-vTafla tr.sub td{color:var(--c-ink-med)}
.hb-nutCompare{display:inline-flex;align-items:center;min-height:44px;background:none;border:0;padding:0;color:inherit;font:inherit;text-decoration:underline;cursor:pointer;margin-bottom:1rem}
@media(max-width:760px){
 .hb-nutTable{display:none}
 .hb-nutTools{flex-direction:column}
 .hb-nutTools .hb-nutSort{display:grid}
 .hb-nutCards{display:grid;gap:.8rem}
 .hb-nutCards article{border:1px solid var(--c-lina);border-radius:var(--r);padding:.8rem;min-width:0}
 .hb-nutCardHead{display:flex;gap:.5rem;align-items:center;justify-content:space-between}
 .hb-nutCardHead .hb-nutProduct{min-width:0}
 .hb-nutCards dl{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:.3rem;margin:.8rem 0 0;font-variant-numeric:tabular-nums}
 .hb-nutCards dl>div{padding:.5rem;border-bottom:1px solid var(--c-lina);min-width:0}
 .hb-nutCards dt{font-size:.8rem;color:var(--c-ink-med)}
 .hb-nutCards dd{margin:.2rem 0 0;font-size:.9rem;overflow-wrap:anywhere}
}
`,Zd=["energyKj","energyKcal","fat","saturated","carbohydrate","sugars","fibre","protein","salt"],mp={fat:/^Fita$/i,saturated:/mettuð/i,carbohydrate:/^Kolvetni$/i,sugars:/sykurtegundir/i,fibre:/^Trefjar$/i,protein:/^Prótein$/i,salt:/^Salt$/i};function pp(o){var c,b,z;const u=Object.fromEntries(Zd.map(j=>[j,null])),s=[],h=o.nutritionRows,p=((c=h.find(([j])=>/^Orka$/i.test(j)))==null?void 0:c[1])??((b=o.nutrition.match(/Orka\s+(.+?)(?=\s+Fita|$)/i))==null?void 0:b[1]);if(p)for(const j of p.split("/")){const O=j.trim().match(/^(\d+(?:[,.]\d+)?)\s*(kJ|kkal|kcal)$/i);O?u[/^kj$/i.test(O[2])?"energyKj":"energyKcal"]=Number(O[1].replace(",",".")):s.push(`Orka: ${j.trim()} (${p})`)}for(const[j,O]of Object.entries(mp)){const E=h.find(([D])=>O.test(D)),R={fat:"Fita",saturated:"Þar af mettuð",carbohydrate:"Kolvetni",sugars:"Þar af sykurtegundir",fibre:"Trefjar",protein:"Prótein",salt:"Salt"}[j],H=(E==null?void 0:E[1])??((z=o.nutrition.match(new RegExp(`${R}\\s+([^a-zþð]+g)`,"i")))==null?void 0:z[1]);if(H){const D=H.trim().match(/^(\d+(?:[,.]\d+)?)\s*g$/i);D?u[j]=Number(D[1].replace(",",".")):s.push(`${(E==null?void 0:E[0])??R}: ${H}`)}}const{energyKj:x,energyKcal:k}=u,w=x!==null&&k!==null?k===0?x===0?0:1:Math.abs(x-k*4.184)/(k*4.184):null;return{values:u,missing:Zd.filter(j=>u[j]===null),unparseable:s,noNutrition:!o.nutrition.trim()&&!h.length,energyDifference:w,inconsistent:w!==null&&w>.05}}const Ko=Object.fromEntries(vr.map(o=>[o.slug,pp(o).values])),Qt=[{key:"energyKj",title:"Orka"},{key:"fat",title:"Fita"},{key:"saturated",title:"Mettuð"},{key:"carbohydrate",title:"Kolvetni"},{key:"sugars",title:"Sykur"},{key:"fibre",title:"Trefjar"},{key:"protein",title:"Prótein"},{key:"salt",title:"Salt"}],Ho=o=>{var u;return((u=Qt.find(s=>s.key===o))==null?void 0:u.key)??"energyKj"},Do=o=>o===null?"Vantar":String(Math.round(o*1e3)/1e3).replace(".",",");function Rn(o,u){const s=Ko[o];return u==="energyKj"?`${s.energyKj===null?"Vantar":`${Do(s.energyKj)} kJ`} / ${s.energyKcal===null?"Vantar":`${Do(s.energyKcal)} kkal`}`:s[u]===null?"Vantar":`${Do(s[u])} g`}const Vo={"karamelluklattar-med-jardhnetum-og-sjavarsalti":{pack:[1200,1200],macros:[]},"kokosflogur-med-karamellu-sjavarsalti":{pack:[1200,1200],macros:[]},fuglafodur:{pack:[1200,1200],macros:[]},"linsubaunir-raudar":{pack:[1200,1200],macros:[]},"hnetusmjor-1kg":{pack:[1200,1200],macros:[]},orkustykki:{pack:[1200,1200],macros:[]},"strasaet-erytritol":{pack:[1200,1200],macros:[]},"karamellu-mondlur-med-sukkuladi-sjavarsalti":{pack:[1200,1200],macros:[]},"heslihnetur-med-sukkuladi-afrit":{pack:[1200,1200],macros:[]},"wasabi-hnetur":{pack:[1200,1200],macros:[]},"heslihnetur-med-irish-coffee-sukkuladi":{pack:[1200,1200],macros:[]},piparmondlur:{pack:[1200,1200],macros:[]},"kasjusmjor-2":{pack:[1200,1200],macros:[]},kasjusmjor:{pack:[1200,1200],macros:[]},hnetusmjor:{pack:[1200,1200],macros:[]},"granola-med-tronuberjum":{pack:[1200,1200],macros:[]},"kajuhnetur-bortnar":{pack:[1200,1200],macros:[]},"mondlur-med-dokku-sukkuladi":{pack:[1200,1200],macros:[]},"kasjuhentur-med-sukkuladi":{pack:[1200,1200],macros:[]},valhnetukjarnar:{pack:[1200,1200],macros:[]},"tronuber-2":{pack:[1200,1200],macros:[]},sveskjur:{pack:[1200,1200],macros:[]},salthnetur:{pack:[1200,1200],macros:[]},pistasiur:{pack:[1200,1200],macros:[]},"pekan-hnetur":{pack:[1200,1200],macros:[]},orkupokinn:{pack:[1200,1200],macros:[]},"party-pokinn":{pack:[1200,1200],macros:[]},mondlur:{pack:[1200,1200],macros:[]},"mondlur-sneiddar":{pack:[1200,1200],macros:[]},"mondlur-afhyddar":{pack:[1200,1200],macros:[]},"mondlur-hakkadar":{pack:[1200,1200],macros:[]},"kokosolia-lifraen-og-lyktarlaus":{pack:[1200,1200],macros:[]},kokosmjol:{pack:[1200,1200],macros:[]},"kokosflogur-2":{pack:[1200,1200],macros:[]},kinoafrae:{pack:[1200,1200],macros:[]},"kajuhnetur-heilarristadar":{pack:[1200,1200],macros:[]},"hampfrae-3":{pack:[1200,1200],macros:[]},"heslihnetur-hakkadar-2":{pack:[1200,1200],macros:[]},"heslihnetur-heilar":{pack:[1200,1200],macros:[]},"avaxta-og-hnetublanda-2":{pack:[1200,1200],macros:[]},"hampfrae-2":{pack:[1200,1200],macros:[]},"granola-an-vidbaetts-sykurs-med-frostthurrkudum-jardarberjum":{pack:[1200,1200],macros:[]},"goji-ber-2":{pack:[1200,1200],macros:[]},"furuhnetur-2":{pack:[1200,1200],macros:[]},"fikjur-2":{pack:[1200,1200],macros:[]},"dodlur-2":{pack:[1200,1200],macros:[]},"dodlur-saxadar-2":{pack:[1200,1200],macros:[]},"dodlusirop-2":{pack:[1200,1200],macros:[]},"chilli-hriskokur":{pack:[1200,1200],macros:[]},"aprikosur-2":{pack:[1200,1200],macros:[]},husk:{pack:[1200,1200],macros:[]},"kokospalmasykur-2":{pack:[1200,1200],macros:[]},"chia-frae-2":{pack:[1200,1200],macros:[]},"mondlumjol-2":{pack:[1200,1200],macros:[]},"mexikano-snakk-2":{pack:[1200,1200],macros:[]},"solblomafrae-2":{pack:[1200,1200],macros:[]},"graskersfrae-2":{pack:[1200,1200],macros:[]}},Oa=5,Io=10,ec=o=>{const u=new Date,s=p=>String(p).padStart(2,"0"),h=Array.from({length:4},()=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random()*32)]).join("");return`${o}-${String(u.getFullYear()).slice(2)}${s(u.getMonth()+1)}${s(u.getDate())}-${h}`},fp=o=>o>1048576?`${(o/1048576).toFixed(1)} MB`:`${Math.max(1,Math.round(o/1024))} kB`,gp=o=>/^\S+@\S+\.\S+$/.test(o.trim()),bp=`
.hb-eyd{display:grid;gap:1rem;min-width:0}
.hb-eydT{margin:0;font-family:var(--f-disp);font-weight:600;font-size:clamp(1.5rem,2.08vw,2.4rem);line-height:1.05;letter-spacing:-.01em}
.hb-eydL{margin:0;max-width:44ch}
.hb-eyd .hb-reitir{grid-template-columns:1fr 1fr}
.hb-reitir select{width:100%;border:0;background:var(--c-form);color:#172D4D;font:inherit;font-size:16px;appearance:none;-webkit-appearance:none;
  padding:1.7rem 2.6rem .55rem clamp(0.5rem,1.04vw,2.5rem);min-height:4.063vw;border-radius:var(--r,0);
  background-image:linear-gradient(45deg,transparent 50%,#172D4D 50%),linear-gradient(135deg,#172D4D 50%,transparent 50%);
  background-position:calc(100% - 1.3rem) 55%,calc(100% - .95rem) 55%;background-size:.4rem .4rem;background-repeat:no-repeat}
@media (max-width:991px){.hb-reitir select{min-height:6.51vw;padding-left:var(--gut)}}
@media (max-width:479px){.hb-reitir select{min-height:13.889vw;padding-left:clamp(1rem,4vw,6rem)}.hb-eyd .hb-reitir{grid-template-columns:1fr}}
.hb-eyd .hb-reitir label.valid select:not(:focus-visible),.hb-eyd .hb-reitir label.gott select:not(:focus-visible){outline:0}

.hb-reitir input,.hb-reitir textarea{padding-left:clamp(0.5rem,1.04vw,2.5rem)}
@media (max-width:991px){.hb-reitir input,.hb-reitir textarea{padding-left:clamp(0.5rem,1.6vw,2.5rem)}}
@media (max-width:479px){.hb-reitir input,.hb-reitir textarea{padding-left:clamp(1rem,4vw,6rem)}}
.hb-root a.hb-btn{color:var(--c-btn-t)}
.hb-root a.hb-btn.sc{color:var(--c-btn2-t)}
.hb-skra{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 1.4rem;cursor:pointer;position:relative;
  background:var(--c-btn2);color:var(--c-btn2-t);font-weight:500;font-size:.92rem;border-radius:999px;width:max-content}
.hb-skra input{position:absolute;inset:0;opacity:0;width:100%;height:100%;cursor:pointer;font-size:16px}
.hb-skra:has(input:focus-visible){outline:2px solid var(--c-rautt);outline-offset:3px}
.hb-skrar{display:flex;flex-wrap:wrap;gap:.4rem;list-style:none;margin:0;padding:0}
.hb-skrar li{display:inline-flex;align-items:center;gap:.5rem;padding:.15rem .25rem .15rem .8rem;border-radius:999px;background:var(--c-el);font-size:.85rem}
.hb-skrar button{width:36px;height:36px;border:0;background:none;cursor:pointer;font-size:1.2rem;color:inherit}
.hb-eydA{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center}
.hb-eydA .hb-btn{padding:.9rem 1.6rem}
.hb-eyd pre.hb-kvittun{margin:0;border-radius:var(--r,0);max-height:46svh;overflow:auto;-webkit-overflow-scrolling:touch}
.hb-eyd .hb-smatt{margin:0}
`;function Ec({cfg:o,lina:u,krefstLina:s=!1,formId:h,felaTakka:p=!1,onSkoda:x,onNytt:k,onEdit:w}){const c=S.useId(),b=S.useRef(null),z=`hb-eyd-${o.key}`,[j,O]=S.useState(()=>{let g={};try{g=JSON.parse(sessionStorage.getItem(z)||"{}")}catch{}return{...g,__ref:g.__ref||ec(o.ref)}}),[E,R]=S.useState({}),[H,D]=S.useState({}),[re,q]=S.useState("fylla"),[W,X]=S.useState([]),[L,M]=S.useState(""),[Y,P]=S.useState(!1);S.useEffect(()=>{try{sessionStorage.setItem(z,JSON.stringify(j))}catch{}},[j,z]);const Q=g=>j[g]??"",oe=(g,_)=>O(B=>({...B,[g]:_})),le=g=>`${o.key}-${g}`,me=()=>{const g={};for(const _ of o.fields)"required"in _&&_.required&&!Q(_.id).trim()&&(g[_.id]=`${_.label}: vantar`);return o.contactEither&&!Q("phone").trim()&&!Q("email").trim()&&(g.email="Netfang eða sími: vantar"),Q("email").trim()&&!gp(Q("email"))&&(g.email="Netfang: er ekki gilt"),s&&!(u!=null&&u.length)&&(g.__lina="Pöntunarlistinn er tómur, settu vörur á hann"),g};S.useEffect(()=>{R(g=>{const _=Object.keys(g);if(!_.length)return g;const B=me(),Z={};for(const de of _)B[de]&&(Z[de]=B[de]);return Object.keys(Z).length===_.length?g:Z})},[j,u]);const xe=g=>{g.preventDefault();const _=me();if(R(_),D(Object.fromEntries(o.fields.map(B=>[B.id,!0]))),Object.keys(_).length){const B=Object.keys(_).find(Z=>Z!=="__lina");B&&window.setTimeout(()=>{var Z;return(Z=document.getElementById(le(B)))==null?void 0:Z.focus()},0);return}x&&x(be),q("yfirfara"),window.setTimeout(()=>{var B;return(B=b.current)==null?void 0:B.scrollIntoView({block:"nearest",behavior:"auto"})},0)},be=S.useMemo(()=>{const g=[o.brief,`Tilvísun: ${j.__ref}`,""];for(const _ of o.fields){if(_.kind==="files")continue;const B=(j[_.id]??"").trim();B&&g.push(`${_.label}: ${B}`)}return u!=null&&u.length&&(g.push("","Vörur og magn:"),u.forEach(_=>g.push(`  ${_.magn} x ${_.n}`))),W.length&&g.push("",`Skjöl (hengd við tölvupóstinn): ${W.map(_=>_.name).join(", ")}`),g.join(`
`)},[j,u,W,o]),Re=`${o.subject}${o.subjectField&&Q(o.subjectField).trim()?`: ${Q(o.subjectField).trim()}`:""} (${j.__ref})`,He=`mailto:${o.to}?subject=${encodeURIComponent(Re)}&body=${encodeURIComponent(be)}`,Ne=async()=>{var g;try{await navigator.clipboard.writeText(be),P(!0)}catch{const _=document.getElementById(`${c}-brief`);if(_){const B=document.createRange();B.selectNodeContents(_);const Z=window.getSelection();Z==null||Z.removeAllRanges(),Z==null||Z.addRange(B),P(((g=document.execCommand)==null?void 0:g.call(document,"copy"))===!0)}}window.setTimeout(()=>P(!1),2400)},G=()=>{O({__ref:ec(o.ref)}),X([]),R({}),D({}),q("fylla"),k==null||k()},I=g=>{const _=[...g.target.files??[]];g.target.value="";const B=[],Z=[];for(const pe of _){if(!/^image\/|^application\/pdf$/.test(pe.type)){Z.push(`${pe.name}: aðeins myndir og PDF skjöl.`);continue}if(pe.size>Io*1048576){Z.push(`${pe.name}: stærri en ${Io} MB.`);continue}B.push(pe)}const de=[...W,...B];de.length>Oa&&Z.push(`Mest ${Oa} skrár.`),X(de.slice(0,Oa)),M(Z.join(" "))},K=g=>H[g.id]?E[g.id]?"villa":Q(g.id).trim()?"gott":"":"";if(re==="yfirfara")return i.jsxs("div",{className:"hb-eyd",ref:b,children:[i.jsx("p",{className:"hb-eydT",children:"Beiðnin þín er tilbúin"}),i.jsx("p",{className:"hb-eydL",children:"Svona les starfsmaður beiðnina. Allt sem þarf til að svara er á einum stað."}),i.jsx("pre",{className:"hb-kvittun",id:`${c}-brief`,tabIndex:0,"aria-label":"Beiðnin í heild",children:be}),i.jsxs("div",{className:"hb-eydA",children:[i.jsx("a",{className:"hb-btn",href:He,children:"Opna í tölvupósti"}),i.jsx("button",{type:"button",className:"hb-btn sc",onClick:Ne,children:Y?"Afritað":"Afrita texta"}),i.jsxs("button",{type:"button",className:"hb-nobg",onClick:()=>{q("fylla"),w==null||w()},children:["Breyta ",i.jsx("i",{children:"←"})]})]}),W.length>0&&i.jsxs("p",{className:"hb-smatt",children:["Skjöl fylgja ekki tölvupóstslinknum. Hengdu þau við þegar póstforritið opnast: ",W.map(g=>g.name).join(", "),"."]}),i.jsx("p",{className:"hb-smatt",children:"Ekkert er sent héðan. Þú opnar póstforritið þitt eða afritar textann og sendir þegar þú ert tilbúin/n."}),i.jsxs("button",{type:"button",className:"hb-nobg",onClick:G,children:["Byrja nýja beiðni ",i.jsx("i",{children:"→"})]})]});const v=Object.keys(E);return i.jsxs("form",{className:"hb-eyd",id:h,ref:b,onSubmit:xe,noValidate:!0,children:[o.title&&i.jsx("p",{className:"hb-eydT",children:o.title}),o.lead&&i.jsx("p",{className:"hb-eydL",children:o.lead}),i.jsx("div",{className:"hb-reitir",children:o.fields.map(g=>{const _=`${g.kind==="textarea"||"heild"in g&&g.heild?"heild ":""}${K(g)}`.trim();return g.kind==="files"?i.jsxs("div",{className:"heild",style:{display:"grid",gap:".6rem"},children:[i.jsx("span",{className:"hb-smatt",style:{margin:0},children:g.label}),i.jsxs("label",{className:"hb-skra",children:[i.jsx("input",{type:"file",multiple:!0,accept:"image/*,application/pdf",onChange:I}),"Velja skrár"]}),i.jsxs("p",{className:"hb-smatt",children:["Allt að ",Oa," skrár, hver að ",Io," MB, myndir eða PDF. Þú getur alltaf lýst þessu í orðum í staðinn."]}),L&&i.jsx("p",{className:"hb-villa",role:"status",children:L}),W.length>0&&i.jsx("ul",{className:"hb-skrar",children:W.map((B,Z)=>i.jsxs("li",{children:[B.name," ",i.jsx("small",{children:fp(B.size)}),i.jsx("button",{type:"button","aria-label":`Fjarlægja ${B.name}`,onClick:()=>X(W.filter((de,pe)=>pe!==Z)),children:"×"})]},`${B.name}${Z}`))})]},g.id):i.jsxs("label",{className:_,children:[i.jsxs("span",{className:"hb-lbl",children:[g.label,"required"in g&&g.required?" *":""]}),g.kind==="textarea"?i.jsx("textarea",{id:le(g.id),rows:g.rows??4,value:Q(g.id),"aria-invalid":E[g.id]?!0:void 0,"aria-required":"required"in g&&g.required?!0:void 0,"aria-describedby":E[g.id]?`${c}-errors`:void 0,onBlur:()=>D(B=>({...B,[g.id]:!0})),onChange:B=>oe(g.id,B.target.value)}):g.kind==="select"?i.jsxs("select",{id:le(g.id),value:Q(g.id),"aria-invalid":E[g.id]?!0:void 0,"aria-required":"required"in g&&g.required?!0:void 0,"aria-describedby":E[g.id]?`${c}-errors`:void 0,onBlur:()=>D(B=>({...B,[g.id]:!0})),onChange:B=>oe(g.id,B.target.value),children:[i.jsx("option",{value:"",children:"Veldu"}),g.options.map(B=>i.jsx("option",{value:B.v,children:B.t},B.v))]}):i.jsx("input",{id:le(g.id),type:g.kind==="qty"?"text":g.kind,inputMode:g.kind==="qty"?"numeric":g.kind==="tel"?"tel":g.kind==="email"?"email":void 0,pattern:g.kind==="qty"?"[0-9]*":void 0,autoComplete:"auto"in g?g.auto:void 0,placeholder:"placeholder"in g?g.placeholder:void 0,value:Q(g.id),"aria-invalid":E[g.id]?!0:void 0,"aria-required":"required"in g&&g.required?!0:void 0,"aria-describedby":E[g.id]?`${c}-errors`:void 0,onBlur:()=>D(B=>({...B,[g.id]:!0})),onChange:B=>oe(g.id,g.kind==="qty"?B.target.value.replace(/\D/g,"").slice(0,5):B.target.value)}),i.jsx("i",{})]},g.id)})}),v.length>0&&i.jsxs("p",{className:"hb-villa",id:`${c}-errors`,role:"alert",children:[v.map(g=>E[g]).join(". "),"."]}),!p&&i.jsx("div",{className:"hb-eydA",children:i.jsx("button",{type:"submit",className:"hb-btn stor",children:o.submit})}),i.jsx("p",{className:"hb-smatt",children:"Þú sérð beiðnina í heild áður en nokkuð fer af stað."})]})}const Ma=(o,u)=>({v:o,t:u}),vp=[{id:"person",kind:"text",label:"Nafn",required:!0,auto:"name"},{id:"phone",kind:"tel",label:"Sími",auto:"tel"},{id:"email",kind:"email",label:"Netfang",auto:"email"}],Cc={key:"spyrja",to:ir.email,ref:"HB",title:"Skilaboð til H-Berg",subject:"Fyrirspurn",subjectField:"topic",brief:"Fyrirspurn til H-Berg (H-Berg)",submit:"Skoða skilaboðin",contactEither:!0,fields:[{id:"topic",kind:"select",label:"Um hvað er spurt",required:!0,heild:!0,options:[Ma("Spurning um vöru","Spurning um vöru"),Ma("Ofnæmi eða innihald","Ofnæmi eða innihald"),Ma("Verslun eða heildsala","Verslun eða heildsala"),Ma("Annað","Annað")]},...vp,{id:"message",kind:"textarea",label:"Skilaboð",required:!0,rows:5}]},kp={...Cc,key:"staerra",to:ir.emailOrders,title:"Stærri pakkningar",subject:"Fyrirspurn um stærri pakkningar",lead:"Við pökkum í stærri einingar fyrir matvælafyrirtæki, matsölustaði og stóreldhús."},yp=o=>{var u;return((u=Yr.find(s=>s.id===o))==null?void 0:u.is.toLowerCase())||o},Ua=o=>{var u;return((u=Yr.find(s=>s.id===o))==null?void 0:u.is)||o},xp={nuts:"hneta",peanut:"jarðhneta",milk:"mjólkur",gluten:"glútens",soy:"soja",sesame:"sesams",sulphites:"súlfíta",mustard:"sinneps"},Ao=(o,u="og")=>o.length<2?o.join(""):o.slice(0,-1).join(", ")+` ${u} `+o[o.length-1],Zt=o=>`${o} ${o%10===1&&o%100!==11?"vara":"vörur"}`;function wp(o){const u=vr.filter(s=>!s.tags.includes("annad"));return{henta:u.filter(s=>{var h;return(h=s.allergens)==null?void 0:h.some(p=>o.includes(p))}),an:u.filter(s=>s.allergens!==null&&!s.allergens.some(h=>o.includes(h))),oljost:u.filter(s=>s.allergens===null)}}function Jo(o){var u;return(u=o.allergens)!=null&&u.length?`Inniheldur: ${o.allergens.map(Ua).join(", ")}`:"Enginn af skráðum ofnæmisvöldum nefndur í innihaldslýsingu."}const ts="Upplýsingarnar koma úr innihaldslýsingum H-Berg. Lestu alltaf á umbúðirnar. Hringdu í 565 6500 ef þú ert í vafa.",Tc="Jarðhnetur eru belgjurtir og eru taldar sér. Hnetur og jarðhnetur eru tveir ólíkir ofnæmisvaldar.";function Rc({target:o}){const u=S.useRef(null),[s,h]=S.useState({overflow:!1,start:!0,end:!1}),p=()=>{var k,w;return(w=(k=u.current)==null?void 0:k.parentElement)==null?void 0:w.querySelector(o)};S.useEffect(()=>{const k=p();if(!k)return;const w=()=>h({overflow:k.clientWidth>0&&k.scrollWidth>k.clientWidth+2,start:k.scrollLeft<2,end:k.scrollLeft+k.clientWidth>=k.scrollWidth-2}),c=new ResizeObserver(w);return c.observe(k),k.firstElementChild&&c.observe(k.firstElementChild),k.addEventListener("scroll",w,{passive:!0}),w(),()=>{c.disconnect(),k.removeEventListener("scroll",w)}},[o]);const x=k=>{const w=p();w==null||w.scrollBy({left:k*w.clientWidth*.65,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})};return i.jsxs("div",{ref:u,className:"hb-scrollArrows",hidden:!s.overflow,"aria-label":"Fleiri dálkar",children:[i.jsx("span",{children:"Fleiri dálkar"}),i.jsx("button",{type:"button","aria-label":"Fyrri dálkar",disabled:s.start,onClick:()=>x(-1),children:"←"}),i.jsx("button",{type:"button","aria-label":"Næstu dálkar",disabled:s.end,onClick:()=>x(1),children:"→"})]})}const rc={nuts:"M12 3C5 3 3 10 5 16s12 6 14-1S17 3 12 3ZM12 5v14M8 8l8 8",peanut:"M8 3c-5 0-6 6-2 9-4 5 0 10 4 9 3 0 3-4 5-5 6-2 7-8 3-11-4-4-6 1-10-2ZM7 7l3 2m-3 7 3 1m5-8 2 2",milk:"M9 3h6v4l3 4v10H6V11l3-4V3Zm0 4h6M6 12h12",gluten:"M12 3v18M12 9C6 9 5 6 5 4c5 0 7 2 7 5Zm0 5c6 0 7-3 7-5-5 0-7 2-7 5Zm0 5c-6 0-7-3-7-5 5 0 7 2 7 5Z",soy:"M5 19C2 9 10 2 20 4c1 11-5 18-15 15ZM7 17 17 7M9 14l-1-4m4 1 4 1",sesame:"M12 3C8 8 5 12 6 16s11 6 12 0S16 8 12 3ZM10 13l-1 3",sulphites:"M9 3h6M10 3v6L4 19c-1 2 1 2 8 2s9 0 8-2L14 9V3M7 15h10",mustard:"M12 3v7M8 6l4 3 4-3M8 12c-5 0-5 8 0 8s5-8 0-8Zm8 0c-5 0-5 8 0 8s5-8 0-8Z"};function qo({id:o}){return i.jsx("svg",{"aria-hidden":"true",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:rc[o]||rc.nuts})})}function _a({p:o,selected:u=[]}){return i.jsx("span",{className:"hb-allergenBadges",children:o.allergens===null?"Ofnæmisupplýsingar vantar":o.allergens.length?o.allergens.map(s=>i.jsxs("span",{title:"Inniheldur",className:u.includes(s)?"selected":"",children:[i.jsx(qo,{id:s}),u.includes(s)&&i.jsx("span",{"aria-hidden":"true",children:"! "}),Ua(s)]},s)):null})}function jp({text:o}){return i.jsx(i.Fragment,{children:o.split(new RegExp("((?<!\\p{L})\\p{Lu}{2,}(?!\\p{L}))","gu")).map((u,s)=>new RegExp("^(?:\\p{Lu}){2,}$","u").test(u)?i.jsx("mark",{children:u},s):u)})}const Pc={nuts:"hnetur",peanut:"jardhnetur",milk:"mjolk",gluten:"gluten",soy:"soja",sesame:"sesam",sulphites:"sulfit",mustard:"sinnep"};function tc(){var u;const o=((u=new URLSearchParams(window.location.search).get("forðast"))==null?void 0:u.split(","))||[];return Yr.filter(s=>o.includes(Pc[s.id])).map(s=>s.id)}function Sp(){const[o,u]=S.useState(tc);S.useEffect(()=>{const w=()=>u(tc());return window.addEventListener("popstate",w),()=>window.removeEventListener("popstate",w)},[]);const s=w=>{u(w);const c=new URL(window.location.href);w.length?c.searchParams.set("forðast",w.map(b=>Pc[b]).join(",")):c.searchParams.delete("forðast"),window.history.replaceState(window.history.state,"",c)},{an:h,henta:p,oljost:x}=wp(o),k=(w,c)=>i.jsxs("section",{className:`hb-allergenGroup ${c?"safe":"warning"}`,children:[i.jsxs("h3",{children:[i.jsx("span",{"aria-hidden":"true",children:c?"✓":"⚠"})," ",c?`Án ${Ao(o.map(b=>xp[b]))} samkvæmt innihaldslýsingu`:`Inniheldur ${Ao(o.map(yp),"eða")}`]}),i.jsx("p",{children:Zt(w.length)}),i.jsx("ul",{className:"hb-allergenResults",children:w.map(b=>i.jsx("li",{children:i.jsxs("button",{className:"hb-allergenCard",onClick:()=>Ce.open({k:"vara",slug:b.slug}),children:[i.jsx("span",{className:"hb-allergenPack",style:{background:b.tint},children:i.jsx("img",{src:ar(b.slug,"pack","s"),alt:"",width:"72",height:"80",loading:"lazy"})}),i.jsxs("span",{className:"hb-allergenName",children:[i.jsx("strong",{children:b.name.is}),!c&&i.jsxs("span",{className:"hb-allergenContains",children:["Inniheldur:"," ",Ao((b.allergens||[]).filter(z=>o.includes(z)).map(Ua))]}),i.jsx(_a,{p:b,selected:o})]})]})},b.slug))}),!w.length&&i.jsx("p",{children:c?"Engin vara fannst án þessara ofnæmisvalda í innihaldslýsingu.":"Engin vara inniheldur valda ofnæmisvalda samkvæmt innihaldslýsingu."})]});return i.jsxs("section",{className:"hb-form hb-ofn",id:"ofnaemi","aria-labelledby":"hb-ofn-t",children:[i.jsx("div",{className:"hb-flipar hb-disp",children:i.jsx("h2",{id:"hb-ofn-t",className:"hb-disp",children:"Ofnæmisvaldar"})}),i.jsx("div",{className:"hb-formP",children:i.jsxs("div",{className:"hb-quiz",children:[i.jsxs("div",{children:[i.jsx("p",{className:"hb-quizQ",id:"hb-ofn-q",children:"Hverju þarftu að forðast?"}),i.jsx("p",{children:"Þú getur valið fleiri en einn ofnæmisvald."}),i.jsx("div",{className:"hb-allergenChoices",role:"group","aria-labelledby":"hb-ofn-q",children:Yr.map(w=>i.jsxs("button",{"aria-pressed":o.includes(w.id),onClick:()=>s(o.includes(w.id)?o.filter(c=>c!==w.id):Yr.filter(c=>o.includes(c.id)||c.id===w.id).map(c=>c.id)),children:[i.jsx(qo,{id:w.id}),w.is,i.jsx("span",{"aria-hidden":"true",children:o.includes(w.id)?"✓":"+"})]},w.id))}),!!o.length&&i.jsx("button",{className:"hb-allergenClear",onClick:()=>s([]),children:"Hreinsa"}),i.jsx("p",{className:"hb-allergenNote",children:Tc}),i.jsx("p",{className:"hb-allergenDisclaimer",children:ts}),i.jsx("button",{className:"hb-allergenClear",onClick:()=>Ce.open({k:"ofnaemi"}),children:"Sjá allt ofnæmisyfirlitið →"}),i.jsx("button",{className:"hb-allergenClear",onClick:()=>Ce.open({k:"naering"}),children:"Sjá næringargildi allra vara"})]}),i.jsx("div",{className:"hb-allergenAnswer",children:o.length?i.jsxs(i.Fragment,{children:[i.jsxs("p",{role:"status",className:"hb-allergenCount",children:[Zt(h.length)," án valinna ofnæmisvalda samkvæmt innihaldslýsingu. ",Zt(p.length)," með valda ofnæmisvalda."]}),i.jsxs("div",{className:"hb-allergenFlow",children:[k(h,!0),k(p,!1),!!x.length&&i.jsxs("p",{children:["Ofnæmisupplýsingar vantar fyrir"," ",x.map(w=>w.name.is).join(", "),". Hringdu í 565 6500."]})]},o.join(","))]}):i.jsxs("div",{className:"hb-allergenPreview",children:[i.jsx("p",{children:"Veldu ofnæmisvald til að sjá hvaða vörur koma til greina samkvæmt innihaldslýsingu."}),i.jsx("p",{className:"hb-smatt",children:"Fjöldi vara sem innihalda hvern ofnæmisvald"}),i.jsx("ul",{children:Yr.map(w=>i.jsxs("li",{children:[i.jsx(qo,{id:w.id}),i.jsx("span",{children:w.is}),i.jsx("strong",{children:_e.flatMap(c=>c.items).filter(c=>{var b;return(b=c.allergens)==null?void 0:b.includes(w.id)}).length})]},w.id))})]})})]})})]})}function Np(){const[o,u]=S.useState(""),s=_e.filter(h=>!o||h.s===o);return i.jsxs(i.Fragment,{children:[i.jsx("p",{className:"hb-allergenDisclaimer",children:ts}),i.jsx("p",{children:Tc}),i.jsxs("label",{className:"hb-allergenFilter",children:["Vörulína",i.jsxs("select",{value:o,onChange:h=>u(h.target.value),children:[i.jsx("option",{value:"",children:"Allar vörulínur"}),_e.map(h=>i.jsx("option",{value:h.s,children:h.t},h.s))]})]}),i.jsx("p",{children:"● Inniheldur samkvæmt innihaldslýsingu. ○ Ekki nefnt í innihaldslýsingu."}),i.jsx(Rc,{target:".hb-allergenMatrix"}),i.jsx("div",{className:"hb-allergenMatrix",role:"region","aria-label":"Ofnæmisvaldar eftir vörum",tabIndex:0,children:i.jsxs("table",{children:[i.jsx("caption",{className:"hb-orderSr",children:"Ofnæmisvaldar eftir vörulínum og vörum"}),i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{scope:"col",children:"Vara"}),Yr.map(h=>i.jsx("th",{scope:"col",children:h.is},h.id))]})}),s.map(h=>i.jsxs("tbody",{children:[i.jsx("tr",{children:i.jsx("th",{className:"hb-allergenLine",colSpan:Yr.length+1,scope:"rowgroup",children:h.t})}),h.items.map(p=>i.jsxs("tr",{children:[i.jsx("th",{scope:"row",children:i.jsx("button",{onClick:()=>Ce.open({k:"vara",slug:p.slug}),children:p.name.is})}),Yr.map(x=>{var k,w;return i.jsxs("td",{children:[i.jsx("span",{"aria-hidden":"true",children:(k=p.allergens)!=null&&k.includes(x.id)?"●":"○"}),i.jsx("span",{className:"hb-orderSr",children:(w=p.allergens)!=null&&w.includes(x.id)?"Inniheldur":"Ekki nefnt í innihaldslýsingu"})]},x.id)})]},p.slug))]},h.s))]})}),i.jsx("div",{className:"hb-allergenMobile",children:s.map(h=>i.jsxs("section",{children:[i.jsx("h3",{children:h.t}),i.jsx("ul",{children:h.items.map(p=>i.jsx("li",{children:i.jsxs("button",{onClick:()=>Ce.open({k:"vara",slug:p.slug}),children:[i.jsx("strong",{children:p.name.is}),i.jsx(_a,{p})]})},p.slug))})]},h.s))})]})}let ki=null;const Wo=new Set,Ep=o=>(Wo.add(o),()=>{Wo.delete(o)}),Ce={open(o){if((o==null?void 0:o.k)==="naering"){const u=new URLSearchParams;o.sort&&u.set("rada",o.sort==="energyKj"?"orka":o.sort),o.line&&u.set("lina",o.line),window.location.assign(We(`naeringargildi/${u.size?`?${u}`:""}`));return}ki=o,Wo.forEach(u=>u())},close(){Ce.open(null)}},nc=()=>ki,Cp=()=>S.useSyncExternalStore(Ep,nc,nc),Tp=hp+`
.hb-popB{position:fixed;inset:0;z-index:84;background:rgba(16,32,56,.35);opacity:0;pointer-events:none;
  transition:opacity var(--motion-panel) var(--motion-emphasis)}
.hb-popB{visibility:hidden}
.hb-popB.opid{opacity:1;pointer-events:auto;visibility:visible}
.hb-popB:not(.opid){transition:opacity var(--motion-panel) var(--motion-emphasis),visibility 0s var(--motion-panel)}
.hb-pop{position:fixed;top:0;right:0;bottom:0;z-index:85;width:50vw;background:var(--c-bg);color:var(--c-ink);
  transform:translateX(100%);visibility:hidden;display:flex;flex-direction:column;
  transition:transform var(--motion-reveal) var(--motion-emphasis),visibility 0s var(--motion-reveal)}
.hb-pop.opid{transform:none;visibility:visible;transition:transform var(--motion-reveal) var(--motion-emphasis),visibility 0s}

@media (max-width:991px){.hb-pop{width:100vw}.hb-popB{display:none}}
.hb-popT{display:flex;justify-content:space-between;align-items:center;gap:1rem;
  padding:calc(var(--gut) + env(safe-area-inset-top)) var(--gut) var(--gut)}
.hb-popX{width:max(2.5vw,44px);height:max(2.5vw,44px);border:0;background:var(--c-hdr);color:var(--c-hdr-t);cursor:pointer;
  display:grid;place-items:center;flex:none;border-radius:999px}
.hb-popS{flex:1;overflow-y:auto;overscroll-behavior:contain;padding:0 var(--gut) calc(var(--gut) * 2 + env(safe-area-inset-bottom));
  -webkit-overflow-scrolling:touch}
.hb-popS .hb-mask > *{transform:translateY(105%);transition:transform var(--motion-reveal) var(--motion-out);transition-delay:calc(.25s + var(--i,0) * .06s)}
.hb-pop.opid .hb-popS .hb-mask > *{transform:none}
.hb-vMynd{background:var(--grunnur,var(--c-el));aspect-ratio:4/3;position:relative;margin-bottom:1.6rem;display:flex;align-items:center;justify-content:center;gap:4%;padding:7% 6%}
.hb-vMynd img{height:100%;width:auto;max-width:48%;object-fit:contain;border-radius:12px}
.hb-vMynd img + img{transform:rotate(5deg)}
.hb-vMynd.einn img{max-width:80%}
.hb-vMynd.ljos{aspect-ratio:auto;height:auto;padding:0}
.hb-vMynd.ljos img{width:100%;height:auto;max-width:100%;filter:none}
.hb-vDl{display:grid;grid-template-columns:auto 1fr;gap:.35rem 1.4rem;margin:1.4rem 0;font-variant-numeric:tabular-nums}
.hb-vDl dt{color:var(--c-ink-med)}
.hb-vDl dd{margin:0}
.hb-vAct{display:flex;gap:.6rem;flex-wrap:wrap;align-items:center}
.hb-vMerki{display:flex;gap:.4rem;flex-wrap:wrap;margin:0 0 1rem;padding:0;list-style:none}
.hb-vMerki li{padding:.15rem .7rem;border-radius:999px;background:var(--c-el2);font-size:.8rem;font-weight:500}
.hb-vMerki li.nytt{background:var(--c-gull)}
.hb-vTafla{width:100%;border-collapse:collapse;margin:0 0 1rem;max-width:34rem}
.hb-vTafla th,.hb-vTafla td{padding:.6rem .3rem;text-align:left;font-weight:400;box-shadow:inset 0 -1px 0 var(--c-lina)}
.hb-vTafla tr.hef th,.hb-vTafla tr.hef td{font-weight:600;color:var(--c-rautt)}
.hb-vTafla i{font-style:normal;display:inline-block;width:1.1em}
.hb-vMerkingar{display:flex;gap:.5rem;flex-wrap:wrap;margin:1rem 0}
.hb-vMerkingar button{min-height:44px;padding:0 1.1rem;border:1.5px solid var(--c-lina);background:none;cursor:pointer;color:inherit;font-size:.9rem;font-weight:500;border-radius:999px}
.hb-vMerkingar button[aria-pressed="true"]{background:var(--c-ink);color:var(--c-bg);border-color:var(--c-ink)}
.hb-vMid{margin:0 0 1.4rem;background:#fff;border-radius:var(--r,0);overflow:hidden}
.hb-vMid img{width:100%;height:auto}
.hb-vLjos{display:grid;grid-template-columns:1fr 1fr;gap:.5rem;margin:1.6rem 0 0}
.hb-vLjos img{width:100%;aspect-ratio:3/4;object-fit:cover;border-radius:var(--r,0);background:var(--c-el)}
.hb-fLisi{list-style:none;margin:1.6rem 0 0;padding:0}
.hb-fLisi li{display:grid;grid-template-columns:3.6rem minmax(0,1fr) auto;gap:.9rem;align-items:center;
  padding:.7rem 0;box-shadow:inset 0 -1px 0 var(--c-lina)}
.hb-fLisi .hb-fM{width:3.6rem;height:4rem;background:var(--grunnur,var(--c-el));display:flex;align-items:center;justify-content:center;padding:.3rem;border-radius:var(--r,0)}
.hb-fLisi .hb-fM img{height:100%;width:auto;max-width:100%;object-fit:contain}
.hb-fLisi button.hb-nafn{border:0;background:none;padding:0;cursor:pointer;color:inherit;text-align:left;font:inherit;font-weight:500;line-height:1.3;min-height:44px;display:flex;align-items:center}
.hb-fLisi small{display:block;color:var(--c-ink-med);font-size:.8rem}
.hb-fLisi .hb-sett{min-height:40px;padding:0 .8rem;font-size:.82rem}
@media (max-width:479px){.hb-fLisi li{grid-template-columns:3rem minmax(0,1fr)}.hb-fLisi li > :last-child{grid-column:2}
  .hb-fLisi .hb-fM{width:3rem;height:3.4rem}}
.hb-verslun{list-style:none;margin:1.6rem 0 2rem;padding:0;display:grid;gap:.35rem}
.hb-verslun a{display:grid;gap:.15rem;padding:1rem 1.1rem;background:var(--c-el);border-radius:var(--r,0);min-height:44px;transition:none}
.hb-verslun b{font-family:var(--f-disp);font-weight:600;font-size:1.5rem;line-height:1.1;letter-spacing:-.01em}
.hb-verslun span{font-size:.88rem;color:var(--c-ink-med)}
@media (hover:hover) and (pointer:fine){.hb-verslun a:hover{background:var(--c-el2)}}
.hb-pEgg{list-style:none;margin:1.4rem 0 2rem;padding:0;display:grid;grid-template-columns:repeat(3,1fr);gap:.35rem}
.hb-pEgg li{background:var(--grunnur);border-radius:var(--r,0);aspect-ratio:3/4;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:.7rem .5rem .6rem}
.hb-pEgg img{height:78%;width:auto;max-width:100%;object-fit:contain;border-radius:8px}
.hb-pEgg span{font-size:.8rem;font-weight:500;text-align:center;line-height:1.2}
.hb-matrix{overflow-x:auto;margin:1.4rem 0 1rem;-webkit-overflow-scrolling:touch;box-shadow:inset 0 0 0 1px var(--c-lina);border-radius:var(--r,0)}
.hb-matrix table{width:100%;min-width:36rem;border-collapse:collapse;font-size:.9rem}
.hb-matrix th,.hb-matrix td{padding:.5rem .6rem;text-align:center;white-space:nowrap;box-shadow:inset 0 -1px 0 var(--c-lina)}
.hb-matrix thead th{font-size:.74rem;letter-spacing:.06em;text-transform:capitalize;color:var(--c-ink-med);font-weight:500}
.hb-matrix thead th:first-child{position:sticky;left:0;z-index:2;background:var(--c-bg);box-shadow:inset 0 -1px 0 var(--c-lina),1px 0 0 var(--c-lina)}
.hb-matrix tbody th{z-index:1}
.hb-matrix tbody th{text-align:left;font-weight:500;position:sticky;left:0;background:var(--c-bg);box-shadow:inset 0 -1px 0 var(--c-lina),1px 0 0 var(--c-lina)}
.hb-matrix td.hef{font-weight:700;color:var(--c-rautt);background:color-mix(in srgb,var(--c-rautt) 7%,transparent)}
.hb-matrix td.oljost{color:var(--c-ink-max)}
`,Rp={};function Pp(){var O;const o=Cp();S.useEffect(()=>{const E=()=>{const R=new URLSearchParams(window.location.search);if(R.get("naering")==="1"&&Cr!=="nutrition"){const H=new URL(We("naeringargildi/"),location.href);for(const D of["rada","att","lina","leit"])R.has(D)&&H.searchParams.set(D,R.get(D));location.replace(H)}else(ki==null?void 0:ki.k)==="naering"&&Ce.close()};return E(),window.addEventListener("popstate",E),()=>window.removeEventListener("popstate",E)},[]);const u=S.useId(),s=S.useRef(null),h=S.useRef(null),[p,x]=S.useState(null),k=o!==null,w=S.useRef(null);o&&(w.current=o);const c=o??w.current;S.useEffect(()=>{x(null)},[c&&c.k==="vara"?c.slug:null]);const b=o?JSON.stringify(o):"";S.useEffect(()=>{var L;const E=s.current;if(!E||!k)return;document.activeElement!==E&&(h.current=document.activeElement);const R=[...E.parentElement.children].filter(M=>M!==E&&!M.classList.contains("hb-popB")&&!M.hasAttribute("inert"));R.forEach(M=>M.setAttribute("inert",""));const H=window.__hbLenis;H==null||H.stop();const D=window.scrollY,re=document.body.style,q={position:re.position,top:re.top,width:re.width};re.position="fixed",re.top=`-${D}px`,re.width="100%";const W=window.setTimeout(()=>{var M;return(M=document.documentElement.dataset.input!=="key"?E:E.querySelector(".hb-popX"))==null?void 0:M.focus({preventScroll:!0})},60);(L=E.querySelector(".hb-popS"))==null||L.scrollTo(0,0);const X=M=>{if(M.key==="Escape"){Ce.close();return}if(M.key!=="Tab")return;const Y=[...E.querySelectorAll('button,a[href],input,textarea,select,summary,[tabindex="0"]')].filter(P=>!P.hasAttribute("disabled")&&P.tabIndex>=0&&P.getClientRects().length&&getComputedStyle(P).visibility!=="hidden");Y.length&&(M.shiftKey&&(document.activeElement===Y[0]||document.activeElement===E)?(M.preventDefault(),Y[Y.length-1].focus()):!M.shiftKey&&document.activeElement===Y[Y.length-1]&&(M.preventDefault(),Y[0].focus()))};return window.addEventListener("keydown",X),()=>{var M,Y;R.forEach(P=>P.removeAttribute("inert")),window.clearTimeout(W),window.removeEventListener("keydown",X),re.position=q.position,re.top=q.top,re.width=q.width,window.scrollTo(0,D),H==null||H.scrollTo(D,{immediate:!0}),H==null||H.start(),(M=h.current)!=null&&M.isConnected&&h.current!==document.body&&h.current.getClientRects().length&&getComputedStyle(h.current).visibility!=="hidden"?h.current.focus({preventScroll:!0}):(Y=[...document.querySelectorAll('.hb-navL[aria-controls="hb-fell-vorur"],.hb-braud,#ofnaemi button')].find(P=>P.getClientRects().length&&getComputedStyle(P).visibility!=="hidden"))==null||Y.focus({preventScroll:!0})}},[k]),S.useEffect(()=>{var E,R,H;b&&((R=(E=s.current)==null?void 0:E.querySelector(".hb-popS"))==null||R.scrollTo(0,0),(H=s.current)==null||H.focus({preventScroll:!0}))},[b]);let z="",j=null;if((c==null?void 0:c.k)==="vara"){const E=Ke(c.slug);if(E){const R=Vo[E.slug];z=E.name.is;const H={ing:"Innihaldslýsing","nf-eu":"Næringargildi (ESB)","nf-us":"Næringargildi (US)"},D=[E.labels.ing?"ing":"",E.labels.nfEu?"nf-eu":"",E.labels.nfUs?"nf-us":""].filter(Boolean),re=q=>q==="ing"?R==null?void 0:R.ing:q==="nf-eu"?R==null?void 0:R.nfEu:R==null?void 0:R.nfUs;j=i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`hb-vMynd hb-mask${R!=null&&R.pack&&(R!=null&&R.open)?"":" einn"}`,style:{"--grunnur":E.tint},children:[R!=null&&R.pack?i.jsx("img",{src:ar(E.slug,"pack","m"),alt:`${E.name.is}, pakkning`,width:R.pack[0],height:R.pack[1]}):(O=R==null?void 0:R.macros)!=null&&O[0]?i.jsx("img",{src:Oo(E.slug,"m1.webp"),alt:E.name.is,width:R.macros[0][0],height:R.macros[0][1]}):null,R!=null&&R.pack&&(R!=null&&R.open)?i.jsx("img",{src:ar(E.slug,"open","m"),alt:`${E.name.is}, opinn poki`,width:R.open[0],height:R.open[1]}):null]}),i.jsx("div",{className:"hb-mask",children:i.jsx("p",{className:"hb-merki",style:{margin:0},children:"H-Berg"})}),i.jsx("div",{className:"hb-mask",children:i.jsx("h2",{className:"hb-sub",style:{"--i":1},children:E.name.is})}),i.jsx("p",{className:"hb-brod",style:{margin:"1rem 0 0"},children:E.desc.is}),(E.isNew||E.madeToOrder||E.season)&&i.jsxs("ul",{className:"hb-vMerki",style:{marginTop:"1rem"},children:[E.isNew&&i.jsx("li",{className:"nytt",children:"Nýtt"}),E.madeToOrder&&i.jsx("li",{children:"Framleitt eftir pöntun"}),E.season==="staerra"&&i.jsx("li",{children:"Stærri pakkningar"}),E.season==="jol"&&i.jsx("li",{children:"Jól"})]}),E.weight?i.jsxs("dl",{className:"hb-vDl",children:[i.jsx("dt",{children:"Þyngd"}),i.jsx("dd",{children:E.weight})]}):null,i.jsxs("div",{className:"hb-allergenBlock",children:[i.jsx("strong",{children:Jo(E)}),i.jsx("h3",{children:"Innihald"}),i.jsx("p",{children:i.jsx(jp,{text:E.ingredients||"Innihaldslýsingu vantar. Lestu á umbúðirnar."})}),i.jsx("p",{className:"hb-allergenDisclaimer",children:ts})]}),i.jsx("h3",{children:"Næringargildi í 100 g"}),i.jsx("table",{className:"hb-vTafla",children:i.jsx("tbody",{children:Qt.map(q=>i.jsxs(S.Fragment,{children:[i.jsxs("tr",{className:q.key==="saturated"||q.key==="sugars"?"sub":"",children:[i.jsx("th",{scope:"row",children:q.key==="saturated"?"þar af mettuð":q.key==="sugars"?"þar af sykurtegundir":q.title}),i.jsx("td",{children:Rn(E.slug,q.key)})]}),q.key==="sugars"&&E.nutritionRows.filter(W=>/Erýtr[ií]tól/i.test(W[0])).map(W=>i.jsxs("tr",{className:"sub",children:[i.jsx("th",{scope:"row",children:"þar af erýtritól"}),i.jsx("td",{children:W[1]})]},W[0]))]},q.key))})}),i.jsx("button",{type:"button",className:"hb-nutCompare",onClick:()=>{var q;return Ce.open({k:"naering",sort:"protein",line:(q=_e.find(W=>W.items.some(X=>X.slug===E.slug)))==null?void 0:q.s})},children:"Bera saman við aðrar vörur"}),D.length>0&&i.jsx("div",{className:"hb-vMerkingar",role:"group","aria-label":"Merkingar á umbúðum",children:D.map(q=>i.jsx("button",{type:"button","aria-pressed":p===q,onClick:()=>x(p===q?null:q),children:H[q]},q))}),p&&re(p)?i.jsx("div",{className:"hb-vMid",children:i.jsx("img",{src:Oo(E.slug,`${p}.webp`),width:re(p)[0],height:re(p)[1],alt:`${H[p]}, ${E.name.is}. Mynd af miða á umbúðum.`})}):null,i.jsx("div",{className:"hb-vAct",children:E.madeToOrder?i.jsx("button",{type:"button",className:"hb-btn hb-casH",onClick:()=>Ce.open({k:"staerra"}),children:"Panta fyrir félag"}):i.jsx(yi,{slug:E.slug})}),R!=null&&R.macros&&R.macros.length>(E.hasPack?0:1)?i.jsx("div",{className:"hb-vLjos",children:R.macros.map((q,W)=>!E.hasPack&&W===0?null:i.jsx("img",{src:Oo(E.slug,`m${W+1}-s.webp`),width:q[0],height:q[1],alt:`${E.name.is}, mynd ${W+1}`,loading:"lazy"},W))}):null]})}}else if((c==null?void 0:c.k)==="flokkur"){const E=_e.find(R=>R.s===c.s);z=(E==null?void 0:E.t)??"",j=E?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"hb-mask",children:i.jsxs("p",{className:"hb-merki",style:{margin:0},children:[E.items.length," vörur"]})}),i.jsx("div",{className:"hb-mask",children:i.jsx("h2",{className:"hb-disp",style:{"--i":1},children:E.t})}),i.jsx("div",{className:"hb-mask",style:{marginTop:"1rem"},children:i.jsx("p",{className:"hb-brod",style:{"--i":2},children:Rp[E.s]})}),i.jsx("ul",{className:"hb-fLisi",children:E.items.map(R=>i.jsxs("li",{children:[i.jsx("span",{className:"hb-fM",style:{"--grunnur":R.tint},children:R.hasPack?i.jsx("img",{src:ar(R.slug,"pack","s"),alt:"",width:50,height:56,loading:"lazy"}):i.jsx("b",{"aria-hidden":"true",children:R.name.is[0]})}),i.jsxs("span",{children:[i.jsx("button",{type:"button",className:"hb-nafn",onClick:()=>Ce.open({k:"vara",slug:R.slug}),children:R.name.is}),i.jsx("small",{children:Jo(R)})]}),R.madeToOrder?i.jsx("button",{type:"button",className:"hb-sett",onClick:()=>Ce.open({k:"staerra"}),children:"Panta fyrir félag"}):i.jsx(yi,{slug:R.slug})]},R.slug))})]}):null}else(c==null?void 0:c.k)==="hvar"?(z="Hvar fæst H-Berg",j=i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"hb-mask",children:i.jsx("p",{className:"hb-merki",style:{margin:0},children:"Hvar fæst H-Berg"})}),i.jsx("div",{className:"hb-mask",children:i.jsx("h2",{className:"hb-disp",style:{"--i":1},children:"Söluaðilar"})}),i.jsx("p",{className:"hb-brod",style:{marginTop:"1rem"},children:"Söluaðilar samkvæmt hberg.is. Ekki er tilgreint hvaða vörur fást á hverjum stað."}),i.jsx("ul",{className:"hb-verslun",children:rp.map(E=>i.jsx("li",{children:i.jsxs("a",{href:E.href,target:"_blank",rel:"noopener noreferrer",children:[i.jsx("b",{children:E.name}),i.jsx("span",{children:E.note.is})]})},E.name))}),i.jsx("p",{className:"hb-smatt",style:{marginBottom:"2rem"},children:"Hafðu samband við verslunina um úrval."})]})):(c==null?void 0:c.k)==="staerra"?(z="Stærri pakkningar",j=i.jsxs(i.Fragment,{children:[i.jsx("h2",{className:"hb-disp",children:"Stærri pakkningar"}),i.jsx("p",{className:"hb-brod",style:{margin:"1.5rem 0"},children:"H-Berg pakkar í stærri einingar fyrir matvælafyrirtæki, matsölustaði og stóreldhús. Spurðu okkur um pakkningar og magn."}),i.jsx(Ec,{cfg:kp})]})):(c==null?void 0:c.k)==="ofnaemi"&&(z="Ofnæmisyfirlit",j=i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"hb-mask",children:i.jsx("p",{className:"hb-merki",style:{margin:0},children:"Allt á einum stað"})}),i.jsx("div",{className:"hb-mask",children:i.jsx("h2",{className:"hb-disp",style:{"--i":1},children:"Ofnæmisyfirlit"})}),i.jsx(Np,{})]}));return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:`hb-popB${(c==null?void 0:c.k)==="vara"?" productSheet":""}${k?" opid":""}`,onClick:()=>Ce.close(),"data-bendill":"Loka","aria-hidden":"true"}),i.jsxs("div",{ref:s,tabIndex:-1,className:`hb-pop${(c==null?void 0:c.k)==="vara"?" hb-productSheet":""}${k?" opid":""}`,role:"dialog","aria-modal":"true","aria-labelledby":`${u}-t`,"data-lenis-prevent":"",children:[i.jsxs("div",{className:"hb-popT",children:[i.jsx("span",{id:`${u}-t`,className:"hb-merki",style:{margin:0},children:z}),i.jsx("button",{className:"hb-popX",onClick:()=>Ce.close(),"aria-label":"Loka",children:i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14","aria-hidden":"true",children:i.jsx("path",{d:"M1 1l12 12M13 1L1 13",stroke:"currentColor",strokeWidth:"1.4"})})})]}),i.jsx("div",{className:"hb-popS",children:j})]})]})}const ns="hberg-pantanir-v1";function ic(o){const u=String(o).trim().replace(/^(\d{6})-(\d{4})$/,"$1$2");if(!/^\d{10}$/.test(u)||!/[089]/.test(u[9]))return!1;const s=[...u].map(Number),h=s[0]*10+s[1],p=h>40?h-40:h,x=s[2]*10+s[3],k={8:1800,9:1900,0:2e3}[s[9]]+s[4]*10+s[5],w=new Date(Date.UTC(k,x-1,p));if(p<1||w.getUTCMonth()!==x-1||w.getUTCDate()!==p)return!1;const c=(11-s.slice(0,8).reduce((b,z,j)=>b+z*[3,2,7,6,5,4,3,2][j],0)%11)%11;return c!==10&&c===s[8]}function wi(o){if(!Array.isArray(o))return[];const u=new Set;return o.filter(s=>s&&typeof s.slug=="string"&&Number.isInteger(s.magn)&&s.magn>0&&s.magn<=9999&&typeof s.unit=="string"&&!u.has(s.slug)&&u.add(s.slug)).map(s=>({slug:s.slug,magn:s.magn,unit:s.unit,...typeof s.other=="string"?{other:s.other.slice(0,240)}:{}}))}function Fc(o){try{const u=JSON.parse(o.getItem(ns)||"null");return!u||typeof u.company!="object"||!u.company||!Array.isArray(u.orders)?null:{company:Object.fromEntries(Object.entries(u.company).filter(([,s])=>typeof s=="string")),orders:u.orders.filter(s=>s&&typeof s.date=="string"&&Number.isFinite(Date.parse(s.date))&&Array.isArray(s.lines)).slice(0,5).map(s=>({date:s.date,lines:wi(s.lines)}))}}catch{return null}}function Fp(o,u,s,h=new Date().toISOString()){try{const p=Fc(o),x={company:u,orders:[{date:h,lines:wi(s)},...(p==null?void 0:p.orders)||[]].slice(0,5)};return o.setItem(ns,JSON.stringify(x)),x}catch{return null}}function $o(o){try{return o.removeItem(ns),!0}catch{return!1}}function ac(o,u){return wi(o==null?void 0:o.lines).filter(s=>u.includes(s.slug)).map(s=>({...s}))}function lc(o){const u=String(o).replace(/\D/g,"").slice(0,10);return u.length>6?`${u.slice(0,6)}-${u.slice(6)}`:u}function lt(o,u,s){return o%10===1&&o%100!==11?u:s}function Lp(o){const u=new Map;for(const s of o)u.set(s.unit,(u.get(s.unit)||0)+s.magn);return[`${o.length} ${lt(o.length,"vara","vörur")}`,...[...u].sort(([s],[h])=>s.localeCompare(h)).map(([s,h])=>`${h} ${s==="kassar"?lt(h,"kassi","kassar"):s==="pokar"?lt(h,"poki","pokar"):s==="annad"?"aðrar einingar":s.replace(/^pokar/,lt(h,"poki","pokar"))}`)].join(" · ")}function zp(o,u,s=!1){const h=o.indexOf(u);return h<0?null:o[h+(s?-1:1)]||null}function Aa(o){const u=o.unit==="kassar"?lt(o.magn,"kassi","kassar"):o.unit==="pokar"?lt(o.magn,"poki","pokar"):o.unit==="annad"?"aðrar einingar":o.unit;return`${o.magn} ${u}${o.unit==="annad"&&o.other?` · ${o.other}`:""}`}function Op(o,u,s,h,p=""){return["Pöntun til H-Berg","",...h.map(x=>`${x.label}: ${o[x.key]||""}`),`Athugasemd um afhendingu: ${o.note||""}`,`Óskir um pöntun: ${p}`,"","Vörur:",...u.map(x=>`${s[x.slug]||x.slug} · ${Aa(x)}`)].join(`
`)}function Mp(o,u=3){const s=new Date(`${o}T12:00:00`),h=[];for(;h.length<u;)s.setDate(s.getDate()+1),s.getDay()!==0&&s.getDay()!==6&&h.push(`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`);return h}const ye={fast:150,ui:220,panel:320,reveal:480,out:"cubic-bezier(.16,1,.3,1)",emphasis:"cubic-bezier(.22,.8,.24,1)"},Hp=`
.hb-root {
  --motion-fast: ${ye.fast}ms;
  --motion-ui: ${ye.ui}ms;
  --motion-panel: ${ye.panel}ms;
  --motion-reveal: ${ye.reveal}ms;
  --motion-out: ${ye.out};
  --motion-emphasis: ${ye.emphasis};
  --ease: var(--motion-out);
  --ease-popup: var(--motion-emphasis);
  --ease-cas: var(--motion-out);
}
.hb-root :is(button, a, summary) {
  touch-action: manipulation;
  transition:
    transform var(--motion-fast) var(--motion-out),
    scale var(--motion-fast) var(--motion-out),
    opacity var(--motion-ui) var(--motion-out);
  min-height: 44px;
}
.hb-root :is(button, a, summary):focus-visible {
  outline: 2px solid var(--c-rautt);
  outline-offset: 3px;
}
.hb-root :is(button, a, summary):active {
  scale: 0.98;
}
.hb-root :is(.hb-btn,.hb-hnappur):active {transform:none}
.hb-root :is(button, a):disabled {
  scale: 1;
}
:where(.hb-root) a {
  display: inline-flex;
  align-items: center;
}
.hb-root a:not(.hb-hnappur),
.hb-orderLink,
.hb-allergenClear {
  position: relative;
  text-decoration: none;
}
.hb-root a:not(.hb-hnappur)::before,
.hb-orderLink::before,
.hb-allergenClear::before {
  content: "";
  position: absolute;
  inset: auto 0 0.15em;
  height: 1px;
  background: currentColor;
  pointer-events: none;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--motion-ui) var(--motion-out);
}
.hb-root a:not(.hb-hnappur):focus-visible::before,
.hb-orderLink:focus-visible::before,
.hb-allergenClear:focus-visible::before {
  transform: scaleX(1);
}
.hb-root :is(input, select, textarea) {
  font-size: 16px;
  max-width: 100%;
  min-width: 0;
}
.hb-root :is(h1,h2,h3,h4,h5,h6) {letter-spacing:-.01em}
.hb-root p {
  max-width: 70ch;
  overflow-wrap: anywhere;
}
.hb-root :is(section[id], [id].hb-kafli) {
  scroll-margin-top: calc(var(--haus-h, 64px) + 1rem);
}
.hb-root :is(.hb-reit, .hb-kort, .hb-lina2, .hb-allergenCard) {
  isolation: isolate;
  position: relative;
}
.hb-root :is(.hb-reit, .hb-kort, .hb-lina2, .hb-allergenCard)::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: var(--c-ink);
  opacity: 0;
  transition: opacity var(--motion-ui) var(--motion-out);
  z-index: 0;
}
.hb-root :is(.hb-reit, .hb-kort, .hb-lina2, .hb-allergenCard) img {
  transition:
    transform var(--motion-panel) var(--motion-out),
    scale var(--motion-panel) var(--motion-out);
}
@media (hover: hover) and (pointer: fine) {
  .hb-root :is(button, a, summary):hover {
    opacity: 0.88;
  }
  .hb-root a:not(.hb-hnappur):hover::before,
  .hb-orderLink:hover::before,
  .hb-allergenClear:hover::before {
    transform: scaleX(1);
  }
  .hb-root :is(.hb-reit, .hb-kort, .hb-lina2, .hb-allergenCard):hover img {
    scale: 1.03;
  }
  .hb-root :is(.hb-reit, .hb-kort, .hb-lina2, .hb-allergenCard):hover::after {
    opacity: 0.045;
  }
  .hb-order :is(.hb-unit button, .hb-orderIcon, .hb-orderRail button):hover {
    opacity: 0.72;
  }
}
.hb-order,
.hb-pokiBak,
.hb-pop,
.hb-popB {
  transition:
    opacity var(--motion-panel) var(--motion-out),
    transform var(--motion-panel) var(--motion-emphasis),
    visibility 0s var(--motion-panel);
}
.hb-order.on,
.hb-pokiBak.on,
.hb-pop.opid,
.hb-popB.opid {
  transition-delay: 0s;
}
.hb-pop {
  opacity: 0;
}
.hb-pop.opid {
  opacity: 1;
}
.hb-pop .hb-mask > * {
  transition-duration: var(--motion-reveal);
  transition-delay: 0s;
}
.hb-fell {
  display: grid;
  grid-template-rows: 0fr;
  padding: 0;
  overflow: hidden;
  transition:
    grid-template-rows var(--motion-ui) var(--motion-out),
    opacity var(--motion-ui) var(--motion-out),
    transform var(--motion-ui) var(--motion-out),
    visibility 0s var(--motion-ui);
}
.hb-fell.opid {
  grid-template-rows: 1fr;
  transition-delay: 0s;
}
.hb-fellInner {
  min-height: 0;
  overflow: hidden;
  padding-inline: 0.45rem;
}
.hb-fellInner > :first-child {
  margin-top: 0.45rem;
}
.hb-fellInner > :last-child {
  margin-bottom: 0.45rem;
}
.hb-faqB {
  transition: grid-template-rows var(--motion-panel) var(--motion-out);
}
.hb-faqB p {
  transition: opacity var(--motion-fast) var(--motion-out);
}
.hb-allergenFlow {
  animation: hb-allergenIn var(--motion-ui) var(--motion-out);
}
.hb-allergenChoices button[aria-pressed="true"] svg {
  animation: hb-chipIn var(--motion-ui) var(--motion-emphasis);
}
@keyframes hb-chipIn {
  from {
    transform: scale(0.85);
  }
  to {
    transform: scale(1);
  }
}
.hb-allergenBadges > span {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}
.hb-allergenBadges svg {
  width: 14px;
  height: 14px;
  flex: none;
}
.hb-allergenPreview {
  border: 1px solid #172d4d30;
  border-radius: 12px;
  padding: clamp(0.8rem, 2vw, 1.5rem);
}
.hb-allergenPreview > p {
  font-family: inherit;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 0 1rem;
}
.hb-allergenPreview ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem 1rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.hb-allergenPreview li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  font-size: 0.85rem;
}
.hb-allergenPreview li svg {
  flex: none;
  width: 18px;
  height: 18px;
}
.hb-allergenPreview li strong {
  margin-left: auto;
  font-variant-numeric: tabular-nums;
}
.hb-orderMain {
  container-type: inline-size;
  animation: hb-stepIn var(--motion-ui) var(--motion-out);
}
.hb-orderMain.step-leaving {
  animation: hb-stepOut var(--motion-fast) var(--motion-out) forwards;
}
@keyframes hb-stepIn {
  from {
    opacity: 0;
    transform: translateX(8px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes hb-stepOut {
  to {
    opacity: 0;
    transform: translateX(-6px);
  }
}
.hb-orderGroup {
  scroll-margin-top: 3.8rem;
}
.hb-orderGroup h3 {
  position: sticky;
  top: -1.5rem;
  z-index: 3;
  background: var(--c-bg);
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--c-lina);
}
.hb-orderRow {
  grid-template-columns: 72px minmax(0, 1fr);
  padding: 1rem 0.5rem;
  border-radius: 10px;
}
.hb-orderRow.has-order {
  background: color-mix(in srgb, var(--row-tint, var(--c-el)) 28%, var(--c-bg));
}
.hb-orderRow > .hb-amountUnit {
  grid-column: 2;
  width: 100%;
  max-width: 35rem;
}
.hb-amountUnit {
  grid-template-columns: 8.5rem minmax(0, 1fr);
  gap: 0.5rem;
}
.hb-unit {
  position: relative;
  display: grid;
  grid-template-columns: repeat(var(--unit-count), minmax(0, 1fr));
  gap: 0;
  isolation: isolate;
  min-width: 0;
}
.hb-unitPill {
  position: absolute;
  inset: 3px auto 3px 3px;
  width: calc((100% - 6px) / var(--unit-count));
  background: var(--c-ink);
  border-radius: 5px;
  z-index: -1;
  transform: translateX(calc(var(--unit-index) * 100%));
  transition: transform var(--motion-ui) var(--motion-emphasis);
}
.hb-order .hb-unit button {
  min-width: 0;
  padding: 0.3rem 0.4rem;
  font-size: 0.85rem;
  line-height: 1.15;
  overflow-wrap: anywhere;
  color: var(--c-ink);
  background: transparent;
}
.hb-order .hb-unit button[aria-checked="true"] {
  color: var(--c-bg);
  background: transparent;
}
.hb-unitDetail {
  grid-column: 1 / -1;
  font-size: 0.75rem;
  line-height: 1.4;
  color: var(--c-ink-med);
}
.hb-other,
.hb-orderNote {
  display: grid;
  gap: 0.4rem;
  grid-column: 1 / -1;
  font-size: 0.85rem;
  font-weight: 500;
  min-width: 0;
}
.hb-other input,
.hb-orderNote textarea {
  width: 100%;
  padding: 0.7rem;
  min-height: 44px;
  background: var(--c-form);
  border: 1px solid var(--c-lina);
  border-radius: 6px;
  font-size: 16px !important;
  font-weight: 400;
}
.hb-orderNote textarea {
  resize: vertical;
}
.hb-orderNotePreview {
  display: grid;
  gap: 0.3rem;
  white-space: pre-wrap;
  font-size: 0.9rem;
}
.hb-orderSummaryGroups > section:not(:has(li)) {
  display: none;
}
.hb-orderSummaryGroups h4 {
  font-size: 0.8rem;
  margin: 0.75rem 0 0.25rem;
  font-weight: 600;
  color: var(--c-ink-med);
}
.hb-orderLines .hb-summaryPresence {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  padding: 0;
  border: 0;
  gap: 0;
  opacity: 1;
  transition:
    grid-template-rows var(--motion-ui) var(--motion-out),
    opacity var(--motion-ui) var(--motion-out);
}
.hb-orderLines .hb-summaryPresence.exiting {
  grid-template-rows: 0fr;
  opacity: 0;
}
@starting-style {
  .hb-orderLines .hb-summaryPresence {
    grid-template-rows: 0fr;
    opacity: 0;
  }
}
.hb-summaryClip {
  min-height: 0;
  overflow: hidden;
}
.hb-summaryRow {
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr) 44px;
  align-items: start;
  gap: 0.65rem;
  padding: 0.85rem 0;
  border-top: 1px solid var(--c-lina);
}
.hb-summaryRow > img {
  width: 40px;
  height: 48px;
  object-fit: contain;
  border-radius: 5px;
}
.hb-summaryRow .hb-amountUnit {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
}
.hb-summaryRow .hb-magn {
  width: 100%;
}
.hb-summaryRow .hb-unit {
  width: 100%;
}
.hb-summaryRow small {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}
.hb-orderSlipBody {
  min-height: 0;
  overflow: auto;
}
.hb-orderSteps {
  position: relative;
  isolation: isolate;
}
.hb-orderSteps::before {
  content: "";
  position: absolute;
  left: 1rem;
  right: 1rem;
  top: 50%;
  height: 1px;
  background: var(--c-lina);
  z-index: -1;
}
.hb-orderSteps button {
  background: var(--c-bg);
  border-bottom: 0;
}
.hb-orderSteps button[aria-current="step"] > span {
  background: var(--c-ink);
  color: var(--c-bg);
}
.hb-orderFooter {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  border-top: 1px solid var(--c-lina);
  padding: 0.35rem 1.25rem calc(0.35rem + env(safe-area-inset-bottom));
  flex: none;
  font-size: 0.8rem;
}
.hb-orderFooter > span {
  margin-right: auto;
  max-width: 40ch;
}
.hb-orderFooter .hb-hnappur {
  padding: 0.5rem 0.8rem;
  min-height: 44px;
}
.hb-orderPrevious {
  margin-bottom: 1rem !important;
}
.hb-orderPrevious li {
  gap: 1rem;
  border-bottom: 1px solid var(--c-lina);
  padding: 0.5rem 0;
}
.hb-orderPrevious li > span {
  min-width: 0;
}
.hb-orderPrevious strong {
  display: block;
  overflow-wrap: anywhere;
  font-size: 0.9rem;
}
.hb-orderPrevious small {
  display: block;
  font-size: 0.8rem;
}
.hb-orderPrevious button {
  flex: none;
  font-size: 0.85rem;
}
.hb-orderFilter,
.hb-dateChips button {
  border: 1px solid var(--c-lina);
  border-radius: 999px;
  background: var(--c-form);
  padding: 0.5rem 0.8rem;
  min-height: 44px;
  font: inherit;
}
.hb-orderFilter[aria-pressed="true"],
.hb-dateChips button[aria-pressed="true"] {
  background: var(--c-ink);
  color: var(--c-bg);
}
.hb-orderFilter {
  justify-self: start;
}
.hb-dateChips,
.hb-orderReceiptActions {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
}
.hb-dateChips button {
  font-size: 0.8rem;
}
.hb-orderReceiptSlip dd {
  white-space: pre-wrap;
}
.hb-orderReceiptSlip li > span {
  white-space: normal;
  overflow-wrap: anywhere;
}
.hb-orderHelpBack {
  opacity: 0;
  transition: opacity var(--motion-ui) var(--motion-out);
}
.hb-orderHelpBack.on {
  opacity: 1;
}
.hb-orderHelp {
  transform: translateY(8px) scale(0.98);
  transition: transform var(--motion-ui) var(--motion-emphasis);
}
.hb-orderHelpBack.on .hb-orderHelp {
  transform: none;
}
@starting-style {
  .hb-orderHelpBack.on {
    opacity: 0;
  }
  .hb-orderHelpBack.on .hb-orderHelp {
    transform: translateY(8px) scale(0.98);
  }
}
@container (max-width:500px) {
  .hb-orderRow > .hb-amountUnit {
    grid-column: 1 / -1;
    grid-template-columns: 1fr;
  }
  .hb-orderRow .hb-magn {
    max-width: 100%;
    width: 100%;
  }
  .hb-orderGroup h3 {
    font-size: 1.4rem;
  }
}
@media (max-width: 1180px) and (min-width: 761px) {
  .hb-orderLayout {
    grid-template-columns: 122px minmax(0, 1fr) 288px;
  }
  .hb-orderLayout.is-details {
    grid-template-columns: minmax(0, 1fr) 288px;
  }
  .hb-orderMain {
    padding: 1rem;
  }
  .hb-orderGroup h3 {
    top: -1rem;
  }
}
@media (max-width: 760px) {
  .hb-orderRow > .hb-amountUnit {
    max-width: none;
  }
  .hb-orderHead {
    gap: 0.25rem 0.5rem;
  }
  .hb-orderHead h2 {
    font-size: clamp(1.3rem, 5vw, 1.8rem);
  }
  .hb-orderSteps {
    gap: 0;
  }
  .hb-orderSteps button {
    font-size: 0.75rem;
  }
  .hb-orderGroup h3 {
    top: -1rem;
  }
  .hb-orderSlip {
    display: grid;
    grid-template-rows: 56px 0fr;
    height: auto;
    max-height: 66%;
    flex-shrink: 1;
    transition: grid-template-rows var(--motion-panel) var(--motion-out);
    padding-bottom: 0;
  }
  .hb-orderSlip.expanded {
    height: auto;
    grid-template-rows: 56px 1fr;
  }
  .hb-orderSlipBody {
    min-height: 0;
    overflow: hidden;
  }
  .hb-orderSlipInner {
    max-height: calc(var(--order-height, 100dvh) * 0.43);
    overflow: auto;
    visibility: hidden;
    transition: visibility 0s var(--motion-panel);
  }
  .expanded .hb-orderSlipInner {
    visibility: visible;
    transition-delay: 0s;
  }
  .hb-orderFooter {
    gap: 0.5rem;
    padding-inline: 1rem;
  }
  .hb-orderFooter > span {
    font-size: 0.7rem;
  }
  .hb-orderPrevious li {
    flex-wrap: wrap;
    gap: 0.15rem;
  }
}
@media (max-width: 359px) {
  .hb-allergenChoices,
  .hb-allergenPreview ul {
    grid-template-columns: 1fr;
  }
  .hb-orderMain,
  .hb-orderSlipInner {
    padding-inline: 0.75rem;
  }
  .hb-orderSteps button {
    font-size: 0.7rem;
    gap: 0.2rem;
  }
  .hb-orderSteps button > span {
    width: 22px;
    height: 22px;
  }
}
@media (max-height: 650px) {
  .hb-orderHead {
    padding-block: 0.4rem;
    gap: 0.2rem 0.6rem;
  }
  .hb-orderEyebrow {
    display: none;
  }
  .hb-orderHead h2 {
    font-size: 1.4rem;
  }
  .hb-orderHead .hb-orderSteps {
    order: 0;
    width: auto;
  }
  .hb-orderSteps button {
    font-size: 0.75rem;
  }
  .hb-orderSteps button > span {
    width: 22px;
    height: 22px;
  }
  .hb-orderRail {
    padding-block: 0;
  }
  .hb-orderFooter {
    padding-block: 0.2rem;
  }
  .hb-orderHelp {
    max-height: calc(100dvh - 1rem);
  }
}
/* Bound content while the section surfaces and footer remain full bleed. */
.hb-root {
  --content-max: 112rem;
}
.hb-root
  :is(
    .hb-heroT,
    .hb-rist,
    .hb-umI,
    .hb-formP,
    .hb-faq,
    .hb-tolur,
    .hb-fotRod,
    .hb-fotBot
  ) {
  min-width: 0;
}
.hb-root .hb-disp {
  letter-spacing: -0.01em;
}
.hb-root :is(.hb-setning, .hb-galT) {
  max-width: 70rem;
  width: min(100%, 70rem);
}
.hb-root .hb-setning {
  padding-inline: var(--gut);
}
.hb-root .hb-umC {
  width: 50%;
  min-width: 0;
}
.hb-root .hb-faq {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
}
.hb-root .hb-panta {
  position: relative;
}
.hb-root .hb-pantaM {
  position: absolute;
  left: 100%;
  top: 0;
  width: var(--bw, 10rem);
  pointer-events: none;
  opacity: 0;
  transform: translateX(-8px);
  transition:
    transform var(--motion-ui) var(--motion-out),
    opacity var(--motion-ui) var(--motion-out);
}
@media (hover: hover) and (pointer: fine) {
  .hb-root .hb-panta:has(.hb-btn:hover, .hb-btn:focus-visible) .hb-pantaM {
    opacity: 1;
    transform: none;
  }
}
.hb-root .hb-panta:has(.hb-btn:focus-visible) .hb-pantaM {
  opacity: 1;
  transform: none;
}
.hb-root .hb-pop {
  width: min(50%, 56rem);
  max-width: 100%;
  height: 100dvh;
  max-height: 100dvh;
}
.hb-root .hb-pop:has(.hb-allergenMatrix) {
  width: min(1100px, 100%);
}
.hb-root .hb-popS {
  min-height: 0;
}
.hb-root .hb-popT {
  flex: none;
}
.hb-root .hb-fot {
  overflow-wrap: anywhere;
}
.hb-root .hb-reitir :is(input, textarea, select) {
  font-size: 16px;
  min-height: 48px;
}
@media (min-width: 1920px) {
  .hb-root {
    --gut: 2rem;
    --page-gut: max(2rem, calc((100vw - var(--content-max)) / 2));
    --col: 1.5rem;
  }
  .hb-root :is(.hb-kostir,.hb-saga,.hb-faq,.hb-wrap,.hb-form,.hb-yfirl,.hb-fot) {padding-inline:var(--page-gut)}
  .hb-root .hb-spjald:first-child {padding-left:var(--page-gut)}
  .hb-root .hb-spjald:nth-child(2) {padding-right:var(--page-gut)}
  .hb-root .hb-linurL {padding-inline:var(--page-gut)}
  .hb-root .hb-heroT {
    padding-inline: max(2rem, calc((100vw - var(--content-max)) / 2)) 2rem;
  }
  .hb-root .hb-rist {
    padding-inline: 2rem max(2rem, calc((100vw - var(--content-max)) / 2));
    gap: 1rem;
  }
  .hb-root .hb-kort {
    width: 31%;
    height: auto;
    aspect-ratio: 1.02;
  }
  .hb-root .hb-kortin {
    justify-content: center;
  }
  .hb-root .hb-umC {
    width: 50%;
  }
  .hb-root .hb-umI {
    max-width: 56rem;
  }
  .hb-root .hb-umC:first-child .hb-umI {
    margin-left: auto;
  }
  .hb-root .hb-umM {
    width: 10rem;
  }
  .hb-root .hb-lina2 {
    width: 42rem;
    height: 25rem;
  }
  .hb-root .hb-linurP {
    gap: 3rem;
  }
}
@media (max-width: 1180px) and (min-width: 992px) {
  .hb-root .hb-navL {
    padding-inline: 0.6rem;
    font-size: 0.85rem;
  }
  .hb-root .hb-heroT h1 {
    font-size: clamp(2.25rem, 4.17vw, 3.5rem);
  }
}
@media (max-width: 991px) {
  .hb-root .hb-pop {
    width: 100%;
  }
  .hb-root .hb-umK {flex-direction:column}
  .hb-root .hb-umC {
    width: 100%;
  }
  .hb-root .hb-pantaM {
    display: none;
  }
}
@media (max-width: 767px) {
  .hb-root .hb-quiz,
  .hb-root .hb-faq {
    grid-template-columns: minmax(0, 1fr);
  }
  .hb-root .hb-faqK {
    position: relative;
    top: auto;
    height: auto;
    min-height: 24rem;
    max-height: none;
  }
  .hb-root .hb-umI {
    grid-template-columns: minmax(0, 1fr);
  }
  .hb-root .hb-umT,
  .hb-root .hb-umQ {
    grid-column: 1;
    grid-row: auto;
  }
  .hb-root .hb-umM {
    width: clamp(5rem, 20vw, 9rem);
  }
  .hb-root .hb-tolur {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .hb-root .hb-tala {
    min-height: 17rem;
  }
  .hb-root .hb-valRod {
    grid-template-columns: minmax(0, 1fr);
  }
}
@media (max-width: 479px) {
  .hb-root .hb-faqT,
  .hb-root .hb-tolur {
    grid-template-columns: minmax(0, 1fr);
  }
  .hb-root .hb-kort {
    height: auto;
    min-height: 20rem;
    aspect-ratio: 1;
  }
  .hb-root .hb-kort h3 {
    font-size: clamp(1.4rem, 7.4vw, 2.1rem);
  }
  .hb-root .hb-galL li {
    width: clamp(7rem, 34vw, 10rem);
    height: clamp(9rem, 44vw, 13rem);
  }
  .hb-root .hb-heroT {
    padding-top: calc(var(--haus-h, 60px) + 2rem);
  }
}
@media (max-height: 650px) {
  .hb-root .hb-hero {
    height: auto;
    min-height: 100svh;
  }
  .hb-root .hb-heroT {
    padding-top: calc(var(--haus-h, 64px) + 2rem);
    padding-bottom: 2rem;
  }
  .hb-root .hb-rist {
    height: auto;
    min-height: 0;
    padding-top: calc(var(--haus-h, 64px) + 2rem);
    padding-bottom: 2rem;
  }
  .hb-root .hb-vorur {
    height: auto;
    min-height: 100svh;
  }
  .hb-root .hb-spjald {
    height: 100svh;
    min-height: 24rem;
  }
  .hb-root .hb-faqK {
    height: auto;
    min-height: 24rem;
    position: relative;
    top: auto;
  }
  .hb-root .hb-linurP {
    height: auto;
    min-height: 100svh;
  }
}
@media (max-height: 450px) and (max-width: 991px) {
  .hb-root .hb-hero {
    grid-template-columns: minmax(0, 1fr);
  }
  .hb-root .hb-rist {
    padding-top: 1rem;
  }
  .hb-root .hb-heroT h1 {
    font-size: clamp(2.25rem, 6vw, 3.5rem);
  }
  .hb-root .hb-valPan {
    max-height: calc(100dvh - var(--haus-h, 60px));
  }
  .hb-order .hb-orderSteps {
    order: 2;
    width: 100%;
  }
}

.hb-root :is(.hb-lit button,.hb-orderIcon,.hb-popX) {min-width:44px;min-height:44px}
.hb-root :is(.hb-haus .hb-pokiH,.hb-nav,.hb-navL) {min-height:clamp(44px,2.5vw,56px)}
.hb-root .hb-popX {width:clamp(44px,2.5vw,56px);height:clamp(44px,2.5vw,56px)}
.hb-root .hb-spjaldM {min-height:14rem}
.hb-root .hb-stika > * {min-width:0}
.hb-root .hb-stika b {overflow-wrap:anywhere}
@media (max-width:600px) {.hb-root .hb-takkar {flex-wrap:wrap}.hb-root .hb-takkar > * {min-width:0;white-space:normal;line-height:1.3}}
@media print {
  body:has(.hb-order.on .hb-orderReceiptSlip) > :not(:has(.hb-order.on)) {display:none!important}
  .hb-root:has(.hb-order.on .hb-orderReceiptSlip) > :not(.hb-order):not(style),
  .hb-order:has(.hb-orderReceiptSlip) .hb-orderHead,
  .hb-order:has(.hb-orderReceiptSlip) .hb-orderFooter,
  .hb-orderReceipt > :not(.hb-orderReceiptSlip) {display:none!important}

  body:has(.hb-order.on .hb-orderReceiptSlip) * {
    visibility: hidden !important;
    animation: none !important;
    transition: none !important;
  }
  body:has(.hb-order.on .hb-orderReceiptSlip),
  html:has(.hb-order.on .hb-orderReceiptSlip) {
    position: static !important;
    overflow: visible !important;
    height: auto !important;
  }
  .hb-root:has(.hb-orderReceiptSlip),
  .hb-order.on:has(.hb-orderReceiptSlip),
  .hb-order:has(.hb-orderReceiptSlip) .hb-orderLayout,
  .hb-order:has(.hb-orderReceiptSlip) .hb-orderMain,
  .hb-orderReceipt {
    display: block !important;
    position: static !important;
    height: auto !important;
    max-height: none !important;
    overflow: visible !important;
    transform: none !important;
    margin: 0 !important;
    padding: 0 !important;
  }
  .hb-orderReceiptSlip,
  .hb-orderReceiptSlip * {
    visibility: visible !important;
  }
  .hb-orderReceiptSlip {
    position: static !important;
    width: 100% !important;
    margin: 0 !important;
    background: white !important;
    color: black !important;
    border: 0 !important;
    box-shadow: none !important;
  }
  .hb-orderReceiptSlip li,
  .hb-orderReceiptSlip dl > div {
    break-inside: avoid;
  }
}
@media (prefers-reduced-motion: reduce) {
  .hb-root *,
  .hb-root *::before,
  .hb-root *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
}
`,Dp=`
.hb-pokiH{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;border:0;background:transparent;cursor:pointer;font:inherit;font-size:.92rem;color:inherit;min-height:44px;min-width:44px;padding:0 .2rem}
.hb-pokiH b{display:inline-grid;place-items:center;min-width:1.55rem;height:1.55rem;padding:0 .35rem;border-radius:999px;background:var(--c-gull);color:#172D4D;font-size:.8rem;font-weight:700;font-variant-numeric:tabular-nums}
.hb-sett{display:inline-flex;align-items:center;justify-content:center;gap:.45rem;border:0;cursor:pointer;font:inherit;font-size:.88rem;font-weight:500;min-height:44px;padding:.45rem .95rem;background:var(--c-ink);color:var(--c-bg);border-radius:999px;transition:none}
.hb-sett.komid{background:var(--c-rautt)}
.hb-pokiBak{position:fixed;inset:0;z-index:80;background:rgba(16,32,56,.42);opacity:0;visibility:hidden;transition:opacity var(--motion-ui) var(--motion-out),visibility 0s var(--motion-ui);pointer-events:none}
.hb-pokiBak.on{opacity:1;visibility:visible;pointer-events:auto;transition-delay:0s}
.hb-order{position:fixed;inset:0;top:var(--order-top,0px);height:var(--order-height,100dvh);z-index:81;max-width:1440px;margin-inline:auto;display:flex;flex-direction:column;background:var(--c-bg);color:var(--c-ink);opacity:0;transform:translateY(20px);visibility:hidden;transition:opacity var(--motion-ui) var(--motion-out),transform var(--motion-ui) var(--motion-out),visibility 0s var(--motion-ui);overscroll-behavior:contain;isolation:isolate}
.hb-order.on{opacity:1;transform:none;visibility:visible;transition-delay:0s}
.hb-order button,.hb-order input,.hb-order textarea,.hb-order select{font-family:inherit;font-size:16px;color:inherit}
.hb-order button{cursor:pointer;touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}.hb-order button:active{background:color-mix(in srgb,var(--c-ink) 8%,transparent)}.hb-order .hb-hnappur:active{background:var(--c-rautt)}
.hb-order button:disabled{opacity:.45;cursor:default}
.hb-order .hb-hnappur{color:var(--c-btn-t)}
.hb-unit{display:flex;gap:2px;padding:3px;min-height:44px;box-sizing:border-box;border:1px solid var(--c-lina);border-radius:8px;background:var(--c-form)}
.hb-order .hb-unit button{min-height:44px;flex:1;border:0;border-radius:5px;background:transparent;padding:0 .75rem;font-size:15px;color:color-mix(in srgb,var(--c-ink) 70%,transparent);transition:none}
.hb-order .hb-unit button[aria-checked=true]{background:var(--c-ink);color:var(--c-bg)}
.hb-orderLines .hb-unit{flex:1;min-width:0}.hb-order .hb-orderLines .hb-unit button{padding:0 .35rem;min-width:0}
@media (prefers-reduced-motion:reduce){.hb-order .hb-unit button{transition:none}}
.hb-orderHead{display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:calc(1rem + env(safe-area-inset-top)) 1.5rem 1rem;border-bottom:1px solid var(--c-lina);flex:none}
.hb-orderEyebrow{font-size:.8rem;color:var(--c-ink-med)}
.hb-orderHead h2{font-family:var(--f-disp);font-size:clamp(1.7rem,3vw,2.7rem);letter-spacing:-.01em;font-weight:800;line-height:1.1;margin:.15rem 0 0;overflow-wrap:anywhere}
.hb-orderIcon{display:inline-flex;align-items:center;justify-content:center;width:44px;height:44px;flex:none;border:0;background:transparent;color:inherit;padding:0;font-size:1.7rem!important}
.hb-orderLayout{display:grid;grid-template-columns:164px minmax(0,1fr) 328px;flex:1;min-height:0}
.hb-orderLayout.is-details{grid-template-columns:minmax(0,1fr) 360px}
.hb-orderLayout.is-details:has(.hb-orderReceipt){grid-template-columns:minmax(0,1fr)}
.hb-orderRail{padding:1.25rem .75rem;overflow-y:auto;border-right:1px solid var(--c-lina);overscroll-behavior:contain}
.hb-orderRail button{display:block;text-align:left;background:none;border:0;min-height:44px;width:100%;padding:.6rem .75rem;line-height:1.2;overflow-wrap:anywhere}
.hb-orderMain{min-width:0;overflow-y:auto;overscroll-behavior:contain;padding:1.5rem 1.5rem calc(2rem + env(safe-area-inset-bottom));scroll-padding-top:1rem;-webkit-overflow-scrolling:touch}
.hb-orderIntro{font-size:1rem;line-height:1.45;max-width:65ch;margin-bottom:1.5rem}
.hb-orderIntro p{margin:0 0 .5rem}
.hb-orderIntro p + p{color:var(--c-ink-med)}
.hb-orderLink{display:inline-flex;align-items:center;justify-content:center;gap:.4rem;min-height:44px;border:0;padding:.4rem .15rem;background:none;text-decoration:underline;text-underline-offset:3px;line-height:1.35;text-align:left;white-space:normal}
.hb-orderSearch{display:grid;gap:.4rem;margin-bottom:1.75rem}
.hb-orderSearch label{font-size:.9rem;font-weight:500}
.hb-orderSearch input{width:100%;min-height:48px;background:var(--c-form);border:1px solid var(--c-lina);border-radius:8px;padding:.7rem .9rem}
.hb-orderSearch button{justify-self:start;font-size:.9rem}
.hb-orderGroup{scroll-margin-top:1rem;margin:0 0 2rem}
.hb-orderGroup h3,.hb-orderForm h3,.hb-orderReceipt h3{font-family:var(--f-disp);font-weight:700;font-size:1.7rem;letter-spacing:-.01em;line-height:1.15;margin:0 0 1rem;overflow-wrap:anywhere}
.hb-orderGroup ul,.hb-orderLines,.hb-orderRemember ul{margin:0;padding:0;list-style:none}
.hb-orderRow{position:relative;display:grid;grid-template-columns:72px minmax(0,1fr) auto;align-items:center;gap:.8rem;padding:1rem 0;border-top:1px solid var(--c-lina)}
.hb-orderRow.has-order{background:color-mix(in srgb,var(--c-rautt) 5%,transparent)}
.hb-orderRow > img{width:72px;height:84px;object-fit:contain;border-radius:8px;padding:4px}
.hb-orderName{position:relative;min-width:0;padding-right:14px}
.hb-orderName strong,.hb-orderLines strong{display:block;font-size:1.06rem;font-weight:700;line-height:1.25;overflow-wrap:anywhere}
.hb-orderName small,.hb-orderLines small{display:block;font-size:.8rem;color:var(--c-ink-med);line-height:1.35;margin-top:.3rem}
.hb-orderTick{position:absolute;right:0;top:0;color:var(--c-rautt);font-size:.9rem}
.hb-orderTick > span{display:block;animation:hb-orderTick .25s ease-out}
@keyframes hb-orderTick{from{opacity:0}to{opacity:1}}
.hb-amountUnit{display:grid;gap:4px;width:300px;grid-template-columns:144px minmax(0,1fr);align-items:center;max-width:100%;flex:none}
.hb-magn{display:grid;grid-template-columns:44px minmax(0,1fr) 44px;min-height:44px;box-shadow:inset 0 0 0 1px var(--c-lina);border-radius:6px;background:var(--c-form);overflow:hidden}
.hb-magn button{width:44px;height:44px;border:0;background:transparent;color:inherit;font:inherit;font-size:1.1rem;cursor:pointer;padding:0}
.hb-magn:has(input:focus-visible){outline:2px solid var(--c-rautt);outline-offset:3px}
.hb-magnN{width:100%;min-width:0;height:44px;text-align:center;background:transparent;border:0;color:inherit;font:inherit;font-size:16px;font-weight:500;font-variant-numeric:tabular-nums;padding:0}
.hb-amountUnit select{min-height:44px;width:100%;border:1px solid var(--c-lina);background:var(--c-form);border-radius:6px;padding:.4rem .5rem;font-size:16px}
.hb-orderSlip{min-height:0;overflow:auto;border-left:1px solid var(--c-lina);background:var(--c-el);overscroll-behavior:contain}
.hb-orderSlipInner{padding:1.25rem;display:flex;flex-direction:column;gap:1rem}
.hb-orderSlipTitle{display:flex;align-items:center;justify-content:space-between;gap:.5rem}
.hb-orderSlipTitle h3{font-family:var(--f-disp);font-size:1.5rem;font-weight:700;letter-spacing:-.01em;margin:0;line-height:1.1}
.hb-orderLines li{display:grid;grid-template-columns:minmax(0,1fr) 44px;align-items:start;gap:.75rem .5rem;padding:1rem 0;border-top:1px solid var(--c-lina)}
.hb-orderLines .hb-amountUnit{grid-column:1 / -1;display:flex;width:100%;gap:.5rem}
.hb-orderLines .hb-magn{width:152px;flex:none}
.hb-orderLines select{min-width:0;flex:1}
.hb-orderBar{display:none}
.hb-orderNotice{font-size:.9rem;line-height:1.4;overflow-wrap:anywhere}
.hb-orderNotice:empty{display:none}
.hb-orderNotice button{display:block}
.hb-orderConfirm{border-block:1px solid var(--c-lina);padding:.5rem 0}
.hb-orderConfirm p{margin:.5rem 0}
.hb-orderConfirm button{margin-right:1rem}
.hb-orderForm{max-width:48rem;margin:0 auto;display:grid;gap:1rem}
.hb-orderForm > p{margin:0}
.hb-orderForm > button{justify-self:start}
.hb-orderFields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem}
.hb-orderFields label{display:grid;align-content:start;gap:.4rem;font-size:.9rem;font-weight:500;min-width:0}
.hb-orderFields input,.hb-orderFields textarea{width:100%;min-width:0;border:1px solid var(--c-lina);background:var(--c-form);padding:.75rem;min-height:48px;border-radius:6px;font-size:16px}
.hb-orderFields textarea{resize:vertical}
.hb-orderWide{grid-column:1 / -1}
.hb-orderError{font-size:.85rem;color:var(--c-ink);font-weight:700}
.hb-orderFields [aria-invalid="true"]{border:2px solid var(--c-rautt)}
.hb-orderCheck{display:flex;align-items:center;gap:.65rem;min-height:44px;font-size:1rem}
.hb-orderCheck input{width:22px;height:22px;flex:none;accent-color:var(--c-rautt)}
.hb-orderRemember{padding:1rem;background:var(--c-el);margin-bottom:1.5rem;border-radius:8px}
.hb-orderRemember .hb-hnappur{white-space:normal}
.hb-orderRemember li{display:flex;justify-content:space-between;align-items:center;gap:1rem;font-size:.9rem;border-bottom:1px solid var(--c-lina)}
.hb-orderRemember > button:last-child{font-size:.9rem}
.hb-orderReceipt{max-width:42rem;margin:1rem auto}
.hb-orderReceipt > span{font-size:2rem;color:var(--c-rautt)}
.hb-orderReceipt pre{font:inherit;font-size:.95rem;white-space:pre-wrap;overflow-wrap:anywhere;border-block:1px solid var(--c-lina);padding:1.5rem 0}
.hb-orderHelpBack{position:absolute;inset:0;z-index:4;background:rgba(16,32,56,.2);display:flex;justify-content:flex-end;align-items:flex-start;padding:6rem 2rem 2rem}
.hb-orderHelp{position:relative;width:25rem;max-width:100%;max-height:100%;overflow:auto;padding:1.5rem;background:var(--c-bg);box-shadow:0 12px 48px #10203830;border:1px solid var(--c-lina);border-radius:10px}
.hb-orderHelp > button{float:right;margin:-.75rem -.75rem 0 0}
.hb-orderHelp h3{font-family:var(--f-disp);font-weight:700;font-size:1.6rem;letter-spacing:-.01em;line-height:1.15;margin:0 2rem 1rem 0}
.hb-orderHelp p,.hb-orderHelp li{font-size:1rem;line-height:1.5}
.hb-orderSr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}
@media (min-width:1200px){.hb-order{inset:16px;top:calc(var(--order-top,0px) + 16px);height:calc(var(--order-height,100dvh) - 32px);border-radius:14px;overflow:hidden}}
@media (max-width:1100px) and (min-width:761px){.hb-orderLayout{grid-template-columns:132px minmax(0,1fr) 292px}.hb-orderMain{padding:1rem}.hb-orderRow{grid-template-columns:72px minmax(0,1fr)}.hb-orderRow > .hb-amountUnit{grid-column:2}.hb-orderSlipInner{padding:1rem}.hb-orderLines .hb-amountUnit{flex-wrap:wrap}.hb-orderLines select{flex-basis:100%}}
@media (max-width:760px){
.hb-orderHead{padding:calc(.65rem + env(safe-area-inset-top)) 1rem .65rem}.hb-orderEyebrow{font-size:.75rem}.hb-orderHead h2{font-size:1.8rem}
.hb-orderLayout,.hb-orderLayout.is-details{display:flex;flex-direction:column;position:relative;overflow:hidden}
.hb-orderRail{display:flex;flex:none;padding:.35rem .75rem;overflow-x:auto;overflow-y:hidden;border-right:0;border-bottom:1px solid var(--c-lina);gap:.5rem}
.hb-orderRail button{width:auto;white-space:nowrap;flex:none;padding:.5rem;font-size:.9rem}
.hb-orderMain{flex:1;min-height:0;padding:1rem 1rem calc(1rem + env(safe-area-inset-bottom))}
.hb-orderIntro{font-size:.95rem;margin-bottom:1rem}.hb-orderIntro button{font-size:inherit}
.hb-orderRow{grid-template-columns:72px minmax(0,1fr);gap:.6rem .8rem;padding:1rem 0}.hb-orderRow > .hb-amountUnit{grid-column:2;display:grid;grid-template-columns:minmax(0,1fr);width:100%;max-width:280px;gap:.5rem}.hb-orderRow .hb-magn{width:100%;flex:none}.hb-orderRow select{flex:1;min-width:92px;width:auto}
.hb-orderSlip{flex:none;height:56px;max-height:70%;overflow:hidden;border-left:0;border-top:1px solid var(--c-lina);transition:none;display:flex;flex-direction:column;padding-bottom:env(safe-area-inset-bottom);height:calc(56px + env(safe-area-inset-bottom))}
.hb-orderSlip.expanded{height:calc(var(--order-height,100dvh) * .64)}
.hb-orderBar{display:flex;align-items:center;justify-content:space-between;gap:1rem;min-height:56px;flex:none;width:100%;background:var(--c-ink);color:var(--c-bg)!important;border:0;text-align:left;padding:.75rem 1rem}
.hb-orderSlipInner{min-height:0;overflow-y:auto;overscroll-behavior:contain;padding:1rem;visibility:hidden;flex:1}.expanded .hb-orderSlipInner{visibility:visible}
.hb-orderSlipTitle h3{font-size:1.4rem}.hb-orderFields{grid-template-columns:minmax(0,1fr)}
.hb-orderHelpBack{padding:0;align-items:flex-end}.hb-orderHelp{width:100%;max-height:85%;border-radius:14px 14px 0 0;padding:1.5rem 1rem calc(1rem + env(safe-area-inset-bottom))}
.hb-orderForm .hb-hnappur{width:100%;padding:.8rem 1rem;text-align:center;line-height:1.3}
}
@media (max-width:520px){.hb-pokiH .hb-pokiO{display:none}}
@media (prefers-reduced-motion:reduce){.hb-order,.hb-pokiBak,.hb-orderSlip,.hb-sett{transition:none;transform:none}.hb-orderTick > span{animation:none}}

.hb-orderHead{flex-wrap:wrap}.hb-orderSteps{display:flex;gap:.6rem;align-items:center}.hb-orderSteps button{display:flex;gap:.4rem;align-items:center;background:none;border:0;min-height:44px;padding:.35rem .5rem;font-size:.9rem;border-bottom:2px solid transparent}.hb-orderSteps button[aria-current=step]{border-color:var(--c-ink);font-weight:700;opacity:1}.hb-orderSteps button>span{display:grid;place-items:center;border:1px solid currentColor;border-radius:50%;width:24px;height:24px;flex:none}.hb-orderHead>.hb-orderIcon{margin-left:auto}
.hb-orderRail button[aria-current=location]{background:var(--c-ink);color:var(--c-bg);border-radius:6px;font-weight:700}.hb-orderCategoryCount{display:inline-grid;place-items:center;margin-left:.5rem;border:1px solid currentColor;border-radius:50%;min-width:22px;height:22px;font-size:.75rem}
.hb-orderSearchBox{position:relative}.hb-orderSearchBox input{padding-right:48px}.hb-orderSearchBox>.hb-orderIcon{position:absolute;right:2px;top:2px}.hb-orderSearchBox input::-webkit-search-cancel-button{-webkit-appearance:none}
.hb-orderName{display:grid;gap:.4rem}.hb-orderName .hb-allergenBadges{margin-top:.1rem}.hb-orderName .hb-allergenBadges>span{font-size:.7rem}.hb-orderTotals{margin:0;font-size:1rem;line-height:1.5;font-weight:700;font-variant-numeric:tabular-nums}.hb-orderEmpty{border:1px solid var(--c-lina);padding:1.25rem;border-radius:8px}
.hb-orderForm{gap:1.5rem}.hb-orderFields{gap:1.25rem}.hb-orderForm>.hb-hnappur{min-height:52px}.hb-orderValid{font-size:.9rem;font-weight:700}.hb-orderReceipt{width:100%;max-width:48rem;margin:1rem auto 2rem;line-height:1.6}.hb-orderReceipt>h3{font-size:2.2rem}.hb-orderReceiptSlip{margin:2rem 0;padding:1.5rem;background:var(--c-el);border:1px solid var(--c-lina);border-radius:10px}.hb-orderReceiptSlip h4{font-family:var(--f-disp);font-size:1.6rem;margin:0 0 1rem}.hb-orderReceiptSlip dl{margin:0 0 1.5rem}.hb-orderReceiptSlip dl>div{display:grid;grid-template-columns:10rem minmax(0,1fr);gap:.7rem;padding:.4rem 0}.hb-orderReceiptSlip dt{font-size:.9rem}.hb-orderReceiptSlip dd{margin:0;overflow-wrap:anywhere;font-weight:500}.hb-orderReceiptSlip ul{list-style:none;padding:0;margin:0}.hb-orderReceiptSlip li{display:flex;justify-content:space-between;align-items:baseline;gap:1rem;padding:1rem 0;border-top:1px solid var(--c-lina)}.hb-orderReceiptSlip li strong{font-weight:500;line-height:1.4;overflow-wrap:anywhere}.hb-orderReceiptSlip li>span{white-space:nowrap;font-weight:700}.hb-orderReceipt summary{min-height:44px;cursor:pointer;padding:.5rem 0}
@media(max-width:1100px) and (min-width:761px){.hb-orderHead>div{flex:1}.hb-orderSteps{order:3;width:100%}}
@media(max-width:760px){.hb-orderHead>div{order:0}.hb-orderHead>.hb-orderIcon{order:1}.hb-orderSteps{order:2;width:100%;justify-content:space-between;gap:.2rem}.hb-orderSteps button{font-size:.8rem;gap:.3rem;padding:.2rem;flex:1;justify-content:center}.hb-orderReceiptSlip{padding:1rem}.hb-orderReceiptSlip dl>div{grid-template-columns:minmax(0,1fr);gap:.15rem}.hb-orderReceiptSlip li{flex-wrap:wrap;gap:.4rem}.hb-orderRow>.hb-amountUnit{grid-column:2}.hb-orderName{padding-right:12px}}

/* One phone bar (Claude 11-11): the order count toggle and Áfram share the footer; the separate bar and Loka go (× is in the header). */
.hb-orderFootCount{display:none}
@media (max-width:760px){
  .hb-orderBar{display:none!important}
  .hb-orderSlip:not(.expanded){height:0!important;border-top:0!important;padding-bottom:0!important}
  .hb-orderSlip.expanded{height:min(64dvh,calc(var(--order-height,100dvh) * .64))!important;border-top:1px solid var(--c-lina)!important}
  .hb-orderSlip{grid-template-rows:minmax(0,1fr)!important}
  .hb-orderSlip.expanded .hb-orderSlipBody{height:100%;min-height:0;display:flex;flex-direction:column}
  .hb-orderSlip.expanded .hb-orderSlipInner{visibility:visible;flex:1;min-height:0;overflow-y:auto}
  .hb-orderSlip{transition:height var(--motion-panel,.32s) var(--motion-out,ease-out)!important}
  .hb-orderFootHint,.hb-orderFootClose{display:none!important}
  .hb-orderFootCount{display:flex;align-items:center;gap:.5rem;min-height:48px;padding:0 .25rem;border:0;background:none;color:inherit;font-weight:600;font-size:1rem;margin-right:auto}
  .hb-orderFootCount span{transition:transform var(--motion-ui,.22s) var(--motion-out,ease-out)}
}
@media (max-width:380px){.hb-orderHead h2{font-size:1.45rem}.hb-orderHead>div{min-width:0;flex:1 1 0}}


/* Speed: off-screen product rows skip layout and paint until scrolled near. */
.hb-orderRow{content-visibility:auto;contain-intrinsic-size:auto 104px}
`,Yo=o=>["pokar","kassar",...o.bulkWeight?[`pokar af ${o.bulkWeight}`]:[],"annad"],Lc=o=>wi(o).filter(u=>{const s=Ke(u.slug);return s&&Yo(s).includes(u.unit)});let Ir=[];try{Ir=Lc(JSON.parse(sessionStorage.getItem("hb-poki")||"[]").map(o=>({...o,unit:o.unit||"kassar"})))}catch{}let Go=!1,vi={trigger:null,keyboard:!1};const Qo=new Set,Ha=()=>{try{sessionStorage.setItem("hb-poki",JSON.stringify(Ir))}catch{}Qo.forEach(o=>o())},zc=o=>(Qo.add(o),()=>{Qo.delete(o)}),Le={add(o){const u=Ir.find(s=>s.slug===o);this.set(o,((u==null?void 0:u.magn)||0)+1)},set(o,u,s,h){if(!Ke(o)||!Number.isFinite(u))return;const p=Ir.find(k=>k.slug===o),x={slug:o,magn:Math.min(9999,Math.max(0,Math.floor(u))),unit:s||(p==null?void 0:p.unit)||"kassar",other:h??(p==null?void 0:p.other)??""};Ir=x.magn?p?Ir.map(k=>k.slug===o?x:k):[...Ir,x]:Ir.filter(k=>k.slug!==o),Ha()},replace(o){Ir=Lc(o),Ha()},open(o,u){o&&!Go&&(vi={trigger:(u==null?void 0:u.currentTarget)||document.activeElement,keyboard:u?u.detail===0:document.documentElement.dataset.input==="key"},Ce.close()),Go=o,Ha()},clear(){Ir=[],Ha()}},oc=()=>Ir,sc=()=>Go,Oc=()=>S.useSyncExternalStore(zc,oc,oc),Ip=Dp;function Ap(){const o=Oc();return i.jsxs("button",{className:"hb-pokiH",onClick:u=>Le.open(!0,u),"aria-label":`Pöntunarlisti, ${o.length} vörur`,children:[i.jsx("span",{className:"hb-pokiO",children:"Pöntunarlisti"}),i.jsx("b",{children:o.length})]})}function yi({slug:o,label:u="Á listann"}){var p;const[s,h]=S.useState(!1);return S.useEffect(()=>{if(!s)return;const x=window.setTimeout(()=>h(!1),1200);return()=>clearTimeout(x)},[s]),i.jsxs("button",{type:"button",className:`hb-sett${s?" komid":""}`,onClick:()=>{Le.add(o),h(!0)},"aria-label":`Setja ${(p=Ke(o))==null?void 0:p.name.is} á pöntunarlistann`,children:[i.jsx("span",{"aria-hidden":"true",children:s?"✓":"+"})," ",s?"Komið á listann":u]})}function Mc(){return i.jsx("svg",{"aria-hidden":"true",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:i.jsx("path",{d:"M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"})})}function $p(o,u){var s;return[...((s=o.closest(".hb-order"))==null?void 0:s.querySelectorAll("input[data-amount-source]"))||[]].filter(h=>h.dataset.amountSource===u)}function Hc({p:o,line:u,source:s}){const[h,p]=S.useState(null),x=(u==null?void 0:u.magn)||0,k=S.useRef(null),w=S.useRef(x);S.useEffect(()=>{var j;w.current!==x&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&((j=k.current)==null||j.animate([{opacity:.45,transform:"translateY(2px)"},{opacity:1,transform:"translateY(0)"}],{duration:ye.fast,easing:ye.out})),w.current=x},[x]);const c=(u==null?void 0:u.unit)||"kassar",b=Yo(o),z=c==="pokar"?o.weight?`Neytendapakkning · ${o.weight}`:"Neytendapakkningar":c==="kassar"?o.iKassa?`${o.iKassa} pakkningar í kassa`:"Fjöldi í kassa staðfestur við pöntun":c==="annad"?"Lýstu pakkningu eða samsetningu":`Stærri pakkning · ${o.bulkWeight}`;return i.jsxs("div",{className:"hb-amountUnit",children:[i.jsxs("div",{className:"hb-magn",children:[i.jsx("button",{type:"button","aria-label":`Fækka ${o.name.is}`,disabled:!x,onClick:()=>Le.set(o.slug,x-1),children:"−"}),i.jsx("input",{ref:k,"aria-label":`Magn ${o.name.is}`,id:`${s}-${o.slug}`,className:"hb-magnN",inputMode:"numeric",enterKeyHint:"next","data-amount-source":s,"data-product":o.slug,onKeyDown:j=>{var R;if(j.key!=="Enter")return;j.preventDefault();const O=[...$p(j.currentTarget,s)],E=zp(O.map(H=>H.dataset.product),o.slug,j.shiftKey);(R=O.find(H=>H.dataset.product===E))==null||R.focus()},pattern:"[0-9]*",value:h??(x||""),placeholder:"0",onChange:j=>{const O=j.target.value.replace(/\D/g,"").slice(0,4);p(O),Le.set(o.slug,Number(O))},onBlur:()=>p(null)}),i.jsx("button",{type:"button","aria-label":`Fjölga ${o.name.is}`,onClick:()=>Le.set(o.slug,x+1),children:"+"})]}),i.jsxs("div",{className:"hb-unit",style:{"--unit-count":b.length,"--unit-index":b.indexOf(c)},role:"radiogroup","aria-label":`Eining ${o.name.is}`,onKeyDown:j=>{var H;if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(j.key))return;j.preventDefault();const O=Yo(o),E=O.indexOf((u==null?void 0:u.unit)||"kassar"),R=j.key==="Home"?0:j.key==="End"?O.length-1:(E+(j.key==="ArrowRight"||j.key==="ArrowDown"?1:-1)+O.length)%O.length;Le.set(o.slug,x||1,O[R]),(H=j.currentTarget.querySelectorAll("button")[R])==null||H.focus()},children:[i.jsx("span",{className:"hb-unitPill","aria-hidden":"true"}),b.map(j=>i.jsx("button",{type:"button",role:"radio",tabIndex:((u==null?void 0:u.unit)||"kassar")===j?0:-1,"aria-checked":((u==null?void 0:u.unit)||"kassar")===j,onClick:()=>Le.set(o.slug,x||1,j),children:j==="annad"?"Annað":j==="pokar"?"Pokar":j==="kassar"?"Kassar":"Stærri pakkning"},j))]}),i.jsx("small",{className:"hb-unitDetail",children:z}),c==="annad"&&i.jsxs("label",{className:"hb-other",htmlFor:`${s}-other-${o.slug}`,children:["Hvernig viltu fá þessa vöru?",i.jsx("input",{id:`${s}-other-${o.slug}`,maxLength:240,value:(u==null?void 0:u.other)||"",placeholder:"Til dæmis blandað í kassa",onChange:j=>Le.set(o.slug,x||1,"annad",j.target.value)})]})]})}const Xo=[{key:"company",label:"Fyrirtæki",required:!0,auto:"organization"},{key:"kt",label:"Kennitala",required:!0,inputMode:"numeric"},{key:"contact",label:"Tengiliður",auto:"name"},{key:"phone",label:"Sími",type:"tel",auto:"tel"},{key:"email",label:"Netfang",required:!0,type:"email",auto:"email"},{key:"address",label:"Afhendingarstaður",auto:"street-address"},{key:"date",label:"Óskuð afhending",type:"date"}],Bo=()=>{const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`},Dc=o=>`${o.name.is}${o.weight&&!o.name.is.toLowerCase().replace(/\s/g,"").includes(o.weight.toLowerCase().replace(/\s/g,""))?` ${o.weight}`:""}`,Bp=(o,u,s)=>Op(o,u,Object.fromEntries(vr.map(h=>[h.slug,Dc(h)])),Xo,s),Up=["sun.","mán.","þri.","mið.","fim.","fös.","lau."],_p=["jan.","feb.","mar.","apr.","maí","jún.","júl.","ágú.","sep.","okt.","nóv.","des."],uc=(o,u)=>`${u?Up[o.getDay()]+" ":""}${o.getDate()}. ${_p[o.getMonth()]}`;function Kp(){const o=Oc(),u=_e.flatMap(C=>C.items).flatMap(C=>o.filter(J=>J.slug===C.slug)),s=S.useSyncExternalStore(zc,sc,sc),h=S.useRef(!1);s&&(h.current=!0);const[p,x]=S.useState(!1);S.useEffect(()=>{const C=window;if(C.requestIdleCallback){const fe=C.requestIdleCallback(()=>x(!0),{timeout:5e3});return()=>{var je;return(je=C.cancelIdleCallback)==null?void 0:je.call(C,fe)}}const J=window.setTimeout(()=>x(!0),3e3);return()=>window.clearTimeout(J)},[]);const k=S.useRef(null),w=S.useRef(null),c=S.useRef(null),b=S.useId(),[z,j]=S.useState(""),[O,E]=S.useState("products"),[R,H]=S.useState(!1),[D,re]=S.useState(!1),[q,W]=S.useState(!1),[X,L]=S.useState(null),[M,Y]=S.useState(""),[P,Q]=S.useState({}),[oe,le]=S.useState({}),[me,xe]=S.useState(!1),[be,Re]=S.useState(null),[He,Ne]=S.useState(_e[0].s),[G,I]=S.useState(""),[K,v]=S.useState({company:{},lines:[],note:""}),[g,_]=S.useState(!1),[B,Z]=S.useState(()=>{try{return sessionStorage.getItem("hb-order-note")||""}catch{return""}});S.useEffect(()=>{try{sessionStorage.setItem("hb-order-note",B)}catch{}},[B]);const[de,pe]=S.useState(!1),ce=S.useRef();S.useEffect(()=>()=>clearTimeout(ce.current),[]);const[we,Qe]=S.useState(!1);S.useEffect(()=>{if(D){Qe(!0);return}const C=setTimeout(()=>Qe(!1),window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:ye.ui);return()=>clearTimeout(C)},[D]);const ut=S.useRef(!1);ut.current=D,S.useEffect(()=>{var Ni,On;if(!s)return;let C=null;try{C=Fc(localStorage)}catch{}Re(C),xe(!!C),C&&Q({...C.company,date:"",note:""}),W(!1),re(!1),H(!1);const J=k.current,fe=document.documentElement,je=document.body,$r=fe.style.overflow,Gr=je.style.overflow,Rr=window.scrollY,Si={position:je.style.position,top:je.style.top,width:je.style.width},Br=window.__hbLenis;Br==null||Br.stop(),fe.style.overflow="hidden",je.style.overflow="hidden",je.style.position="fixed",je.style.top=`-${Rr}px`,je.style.width="100%";const Mt=[...J.parentElement.children].filter(Se=>Se!==J&&!Se.classList.contains("hb-pokiBak")&&!Se.hasAttribute("inert"));Mt.forEach(Se=>Se.setAttribute("inert",""));const Ur=()=>{const Se=window.visualViewport;J.style.setProperty("--order-height",`${(Se==null?void 0:Se.height)||window.innerHeight}px`),J.style.setProperty("--order-top",`${(Se==null?void 0:Se.offsetTop)||0}px`)};Ur(),(Ni=window.visualViewport)==null||Ni.addEventListener("resize",Ur),(On=window.visualViewport)==null||On.addEventListener("scroll",Ur),window.addEventListener("resize",Ur);const Ht=window.setTimeout(()=>{var Se;return(Se=vi.keyboard?J.querySelector("button"):J)==null?void 0:Se.focus({preventScroll:!0})},30),dt=Se=>{var tn;if(Se.key==="Escape"){Se.preventDefault(),Se.stopImmediatePropagation(),ut.current?(re(!1),(tn=c.current)==null||tn.focus()):Le.open(!1);return}if(Se.key!=="Tab")return;const ct=ut.current?w.current:J,Pr=[...ct.querySelectorAll("button,a[href],input,select,textarea,summary")].filter(Qr=>!Qr.hasAttribute("disabled")&&Qr.tabIndex>=0&&Qr.getClientRects().length&&getComputedStyle(Qr).visibility!=="hidden"&&!Qr.closest("[hidden]")),_r=Pr[0],ht=Pr[Pr.length-1];if(!_r){Se.preventDefault(),ct.focus();return}Se.shiftKey&&(document.activeElement===_r||!Pr.includes(document.activeElement))?(Se.preventDefault(),ht.focus()):!Se.shiftKey&&(document.activeElement===ht||!ct.contains(document.activeElement))&&(Se.preventDefault(),_r.focus())};return window.addEventListener("keydown",dt,!0),()=>{var Se,ct,Pr,_r;clearTimeout(Ht),window.removeEventListener("keydown",dt,!0),(Se=window.visualViewport)==null||Se.removeEventListener("resize",Ur),(ct=window.visualViewport)==null||ct.removeEventListener("scroll",Ur),window.removeEventListener("resize",Ur),Mt.forEach(ht=>ht.removeAttribute("inert")),fe.style.overflow=$r,je.style.overflow=Gr,Object.assign(je.style,Si),window.scrollTo(0,Rr),Br==null||Br.start(),(Pr=vi.trigger)!=null&&Pr.isConnected&&vi.trigger.getClientRects().length?vi.trigger.focus({preventScroll:!0}):(_r=document.querySelector(".hb-braud"))==null||_r.focus({preventScroll:!0})}},[s]),S.useEffect(()=>{var C;D&&we&&((C=w.current)==null||C.focus({preventScroll:!0}))},[D,we]),S.useEffect(()=>{var J;if(!s)return;const C=k.current;(J=C==null?void 0:C.querySelector(".hb-orderMain"))==null||J.scrollTo(0,0)},[O,s]);const kr=C=>{var J;clearTimeout(ce.current),pe(!0),(J=k.current)==null||J.focus({preventScroll:!0}),ce.current=setTimeout(()=>{E(C),pe(!1),H(!1),W(!1)},window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:ye.fast)},Ot=C=>{Le.replace(ac(C,vr.map(J=>J.slug))),kr("products"),Y("Fyrri pöntun komin á listann. Þú getur breytt henni."),L(null)},Fn=C=>{L(u.filter(J=>J.slug===C).map(J=>({...J}))),Le.set(C,0),Y("Vara fjarlægð af listanum.")},Ln=()=>{let C=!1;try{C=$o(localStorage)}catch{}Re(null),xe(!1),Q({}),Y(C?"Upplýsingum hefur verið eytt úr þessu tæki.":"Ekki tókst að eyða vistuðum upplýsingum. Athugaðu stillingar vafrans."),L(null)},ji=C=>{var je,$r,Gr;C.preventDefault();const J={};if((je=P.company)!=null&&je.trim()||(J.company="Skrifaðu nafn fyrirtækisins."),ic(P.kt||"")||(J.kt="Skrifaðu gilda kennitölu með 10 tölustöfum."),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((($r=P.email)==null?void 0:$r.trim())||"")||(J.email="Skrifaðu gilt netfang."),P.date&&(!/^\d{4}-\d{2}-\d{2}$/.test(P.date)||P.date<Bo())&&(J.date="Veldu dag í dag eða síðar."),!u.length){kr("products"),Y("Veldu að minnsta kosti eina vöru.");return}if(le(J),Object.keys(J).length){(Gr=document.getElementById(`${b}-${Object.keys(J)[0]}`))==null||Gr.focus();return}const fe=Bp(P,u,B);if(me){let Rr=null;try{Rr=Fp(localStorage,{...P,date:"",note:""},u)}catch{}Re(Rr),Y(Rr?"":"Vafrinn leyfir ekki vistun á þessu tæki.")}else{try{$o(localStorage)}catch{}Re(null)}I(fe),v({company:{...P},lines:u.map(Rr=>({...Rr})),note:B}),window.location.href=`mailto:pantanir@hberg.is?subject=${encodeURIComponent(`Pöntun · ${P.company.trim()}`)}&body=${encodeURIComponent(fe)}`,kr("receipt")},rn=C=>C.toLocaleLowerCase("is").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ð/g,"d").replace(/þ/g,"th").replace(/æ/g,"ae"),zn=_e.map(C=>({...C,items:C.items.filter(J=>rn(`${J.name.is} ${C.t}`).includes(rn(z.trim()))&&(!g||u.some(fe=>fe.slug===J.slug)))})).filter(C=>C.items.length);return!s&&!h.current&&!p?null:i.jsxs(i.Fragment,{children:[i.jsx("div",{className:`hb-pokiBak${s?" on":""}`,onClick:()=>Le.open(!1),"aria-hidden":"true"}),i.jsxs("div",{ref:C=>{k.current=C,C==null||C.toggleAttribute("inert",!s)},tabIndex:-1,className:`hb-order${s?" on":""}`,role:"dialog","aria-modal":s?!0:void 0,"aria-labelledby":`${b}-title`,"aria-hidden":!s,"data-lenis-prevent":"",children:[i.jsxs("header",{className:"hb-orderHead",children:[i.jsxs("div",{children:[i.jsx("span",{className:"hb-orderEyebrow",children:"H-Berg fyrir fyrirtæki"}),i.jsx("h2",{id:`${b}-title`,children:O==="receipt"?"Pöntunin er tilbúin":"Pöntunarlistinn"})]}),i.jsx("nav",{className:"hb-orderSteps","aria-label":"Skref pöntunar",children:["products","company","receipt"].map((C,J)=>{const fe=["products","company","receipt"].indexOf(O);return i.jsxs("button",{disabled:J>=fe,"aria-current":C===O?"step":void 0,onClick:()=>kr(C),children:[i.jsx("span",{"aria-hidden":"true",children:J<fe?"✓":J+1}),["Vörur","Upplýsingar","Staðfesting"][J]]},C)})}),i.jsx("button",{className:"hb-orderIcon","aria-label":"Loka pöntun",onClick:()=>Le.open(!1),children:"×"})]}),i.jsxs("div",{className:`hb-orderLayout${O!=="products"?" is-details":""}`,children:[O==="products"&&i.jsx("nav",{className:"hb-orderRail","aria-label":"Vöruflokkar",children:_e.map(C=>i.jsxs("button",{"aria-current":He===C.s?"location":void 0,onClick:()=>{j(""),requestAnimationFrame(()=>{var J;return(J=document.getElementById(`${b}-group-${C.s}`))==null?void 0:J.scrollIntoView({block:"start",behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})})},children:[C.t,u.some(J=>C.items.some(fe=>fe.slug===J.slug))&&i.jsxs("b",{className:"hb-orderCategoryCount",children:[u.filter(J=>C.items.some(fe=>fe.slug===J.slug)).length,i.jsx("span",{className:"hb-orderSr",children:" pantaðar vörur"})]})]},C.s))}),i.jsxs("main",{className:`hb-orderMain${de?" step-leaving":""}`,onScroll:C=>{if(O!=="products")return;const J=C.currentTarget,fe=J.getBoundingClientRect().top,$r=[...J.querySelectorAll(".hb-orderGroup")].find(Gr=>Gr.getBoundingClientRect().bottom>fe+60);$r&&Ne($r.id.split("-group-")[1])},children:[O!=="receipt"&&i.jsxs("div",{className:"hb-orderIntro",children:[i.jsx("p",{children:"Þetta pöntunarform er eingöngu fyrir fyrirtæki: verslanir, veitingastaði, mötuneyti, hótel og aðra endursöluaðila."}),i.jsxs("p",{children:["Einstaklingar kaupa H-Berg í verslunum."," ",i.jsx("button",{className:"hb-orderLink",onClick:()=>{Le.open(!1),window.setTimeout(()=>Ce.open({k:"hvar"}),0)},children:"Hvar fæst H-Berg?"})]})]}),O==="products"&&i.jsxs(i.Fragment,{children:[!!(be!=null&&be.orders.length)&&i.jsxs("section",{className:"hb-orderRemember","aria-label":"Fyrri pantanir",children:[i.jsx("h3",{children:"Pantað áður"}),i.jsx("ul",{className:"hb-orderPrevious",children:ac({lines:wi(be.orders.flatMap(C=>C.lines))},vr.map(C=>C.slug)).map(C=>i.jsxs("li",{children:[i.jsxs("span",{children:[i.jsx("strong",{children:Ke(C.slug).name.is}),i.jsx("small",{children:Aa(C)})]}),i.jsx("button",{className:"hb-orderLink",onClick:()=>{Le.set(C.slug,C.magn,C.unit,C.other),Y("Vara komin á listann eins og síðast.")},children:"Sama og síðast"})]},C.slug))}),i.jsx("button",{className:"hb-hnappur",onClick:()=>Ot(be.orders[0]),children:"Panta það sama aftur"}),i.jsx("ul",{children:be.orders.map((C,J)=>i.jsxs("li",{children:[i.jsxs("span",{children:[uc(new Date(C.date),!1)," ","· ",C.lines.length," ",lt(C.lines.length,"vara","vörur")]}),i.jsxs("button",{className:"hb-orderLink",onClick:()=>Ot(C),children:["Nota aftur",i.jsxs("span",{className:"hb-orderSr",children:[" ","pöntun frá ",C.date.slice(0,10)]})]})]},`${C.date}-${J}`))}),i.jsx("button",{className:"hb-orderLink",onClick:Ln,children:"Gleyma mér"})]}),i.jsxs("div",{className:"hb-orderSearch",children:[i.jsx("label",{htmlFor:`${b}-search`,children:"Leita að vöru"}),i.jsxs("div",{className:"hb-orderSearchBox",children:[i.jsx("input",{id:`${b}-search`,type:"search",value:z,onChange:C=>j(C.target.value),placeholder:"Nafn vöru"}),!!z&&i.jsx("button",{className:"hb-orderIcon","aria-label":"Hreinsa leit",onClick:()=>{var C;j(""),(C=document.getElementById(`${b}-search`))==null||C.focus()},children:"×"})]}),i.jsxs("button",{className:"hb-orderFilter","aria-pressed":g,onClick:()=>_(C=>!C),children:[i.jsx("span",{"aria-hidden":"true",children:g?"✓":"+"})," ","Aðeins í pöntun"]}),i.jsxs("button",{ref:c,className:"hb-orderLink","aria-haspopup":"dialog","aria-expanded":D,"aria-controls":`${b}-help`,onClick:()=>re(!0),children:["Hvernig skrifa ég magnið? ",i.jsx("span",{"aria-hidden":"true",children:"ⓘ"})]})]}),!zn.length&&i.jsxs("div",{className:"hb-orderEmpty",role:"status",children:[i.jsx("h3",{children:"Engin vara fannst"}),i.jsx("p",{children:"Prófaðu annað orð eða skoðaðu allar vörurnar."}),i.jsx("button",{className:"hb-orderLink",onClick:()=>{j(""),_(!1)},children:"Sýna allar vörur"})]}),zn.map(C=>i.jsxs("section",{id:`${b}-group-${C.s}`,className:"hb-orderGroup",children:[i.jsx("h3",{children:C.t}),i.jsx("ul",{children:C.items.map(J=>{const fe=u.find(je=>je.slug===J.slug);return i.jsxs("li",{className:`hb-orderRow${fe?" has-order":""}`,style:{"--row-tint":J.tint},children:[i.jsx("img",{src:ar(J.slug,"pack","s"),alt:"",width:72,height:80,style:{background:J.tint},loading:"lazy"}),i.jsxs("div",{className:"hb-orderName",children:[i.jsx("strong",{children:J.name.is}),(J.weight||J.iKassa)&&i.jsxs("small",{children:[J.weight,J.iKassa?` · ${J.iKassa} pokar í kassa`:""]}),i.jsx(_a,{p:J}),i.jsx("span",{className:"hb-orderTick","aria-label":fe?"Á pöntunarlista":void 0,children:fe&&i.jsxs("span",{children:["✓"," ",i.jsx("span",{className:"hb-orderSr",children:"Á listanum"})]},fe.slug)})]}),i.jsx(Hc,{p:J,line:fe,source:`${b}-catalog`})]},J.slug)})})]},C.s))]}),O==="company"&&i.jsxs("form",{id:`${b}-form`,className:"hb-orderForm",noValidate:!0,onSubmit:ji,children:[i.jsx("button",{type:"button",className:"hb-orderLink",onClick:()=>kr("products"),children:"← Aftur í vörur"}),i.jsx("h3",{children:"Upplýsingar um fyrirtæki"}),i.jsx("p",{children:"Reitir merktir * eru nauðsynlegir."}),i.jsxs("div",{className:"hb-orderFields",children:[Xo.map(C=>i.jsxs("label",{htmlFor:`${b}-${C.key}`,children:[C.label,C.required?" *":"",i.jsx("input",{id:`${b}-${C.key}`,name:C.key,type:C.type||"text",autoComplete:C.auto,inputMode:C.inputMode,required:C.required,min:C.type==="date"?Bo():void 0,value:C.key==="kt"?lc(P.kt||""):P[C.key]||"",maxLength:C.key==="kt"?11:void 0,"aria-invalid":!!oe[C.key],"aria-describedby":oe[C.key]?`${b}-${C.key}-error`:void 0,onChange:J=>{Q(fe=>({...fe,[C.key]:C.key==="kt"?lc(J.target.value):J.target.value})),le(fe=>{const je={...fe};return delete je[C.key],je})}}),C.key==="date"&&i.jsx("span",{className:"hb-dateChips",children:Mp(Bo()).map(J=>i.jsx("button",{type:"button","aria-pressed":P.date===J,onClick:()=>{Q(fe=>({...fe,date:J})),le(fe=>{const je={...fe};return delete je.date,je})},children:uc(new Date(`${J}T12:00:00`),!0)},J))}),C.key==="kt"&&ic(P.kt||"")&&i.jsx("span",{className:"hb-orderValid",children:"✓ Gild kennitala"}),oe[C.key]&&i.jsx("span",{className:"hb-orderError",id:`${b}-${C.key}-error`,role:"alert",children:oe[C.key]})]},C.key)),i.jsxs("label",{className:"hb-orderWide",htmlFor:`${b}-note`,children:["Athugasemd um afhendingu",i.jsx("textarea",{id:`${b}-note`,rows:3,placeholder:"Til dæmis inngangur eða tengiliður við móttöku",value:P.note||"",onChange:C=>Q(J=>({...J,note:C.target.value}))})]})]}),i.jsxs("label",{className:"hb-orderCheck",children:[i.jsx("input",{type:"checkbox",checked:me,onChange:C=>{if(xe(C.target.checked),!C.target.checked){try{$o(localStorage)}catch{}Re(null)}}}),"Muna eftir mér á þessu tæki"]}),i.jsx("p",{className:"hb-smatt",children:"Upplýsingar um fyrirtækið og síðustu fimm pantanir eru vistaðar í þessum vafra ef þú velur að muna eftir þér."}),be&&i.jsx("button",{type:"button",className:"hb-orderLink",onClick:Ln,children:"Gleyma mér"}),i.jsx("p",{children:"Pöntunin opnast í tölvupóstforritinu þínu. Þar sendir þú hana til pantanir@hberg.is."}),i.jsx("button",{className:"hb-hnappur",type:"submit",children:"Opna pöntun í tölvupósti"})]}),O==="receipt"&&i.jsxs("section",{className:"hb-orderReceipt",children:[i.jsx("span",{"aria-hidden":"true",children:"✓"}),i.jsx("h3",{children:"Takk fyrir pöntunina"}),i.jsx("p",{children:"Pöntunin er tilbúin í tölvupóstforritinu þínu. Mundu að senda póstinn. H-Berg staðfestir magn, pakkningar og afhendingu þegar pöntunin berst."}),i.jsx("p",{children:"Ef tölvupóstforritið opnaðist ekki geturðu opnað póstinn aftur eða afritað textann hér fyrir neðan."}),i.jsx("a",{className:"hb-hnappur",href:`mailto:pantanir@hberg.is?subject=${encodeURIComponent("Pöntun til H-Berg")}&body=${encodeURIComponent(G)}`,children:"Opna tölvupóst aftur"}),i.jsxs("div",{className:"hb-orderReceiptActions",children:[i.jsx("button",{className:"hb-orderLink",onClick:()=>window.print(),children:"Prenta"}),i.jsx("button",{className:"hb-orderLink",onClick:async()=>{try{await navigator.clipboard.writeText(G),Y("Pöntun afrituð.")}catch{Y("Opnaðu texta pöntunar hér fyrir neðan til að afrita.")}},children:"Afrita pöntun"})]}),i.jsxs("div",{className:"hb-orderReceiptSlip",children:[i.jsx("h4",{children:"Pöntun til H-Berg"}),i.jsxs("dl",{children:[[...Xo,{key:"note",label:"Athugasemd um afhendingu"}].map(C=>i.jsxs("div",{children:[i.jsx("dt",{children:C.label}),i.jsx("dd",{children:K.company[C.key]||"Ekki tilgreint"})]},C.key)),K.note&&i.jsxs("div",{children:[i.jsx("dt",{children:"Óskir um pöntun"}),i.jsx("dd",{children:K.note})]})]}),i.jsx("ul",{children:K.lines.map(C=>i.jsxs("li",{children:[i.jsx("strong",{children:Dc(Ke(C.slug))}),i.jsx("span",{children:Aa(C)})]},C.slug))})]}),i.jsxs("details",{children:[i.jsx("summary",{children:"Texti pöntunar til að afrita"}),i.jsx("pre",{children:G})]}),i.jsx("button",{className:"hb-orderLink",onClick:()=>kr("company"),children:"← Aftur í upplýsingar"}),i.jsx("button",{className:"hb-orderLink",onClick:()=>{Le.clear(),I(""),Z(""),kr("products")},children:"Ný pöntun"})]})]},O),O!=="receipt"&&i.jsxs("aside",{className:`hb-orderSlip${R?" expanded":""}`,"aria-label":"Pöntunin þín",children:[i.jsxs("button",{className:"hb-orderBar","aria-expanded":R,"aria-controls":`${b}-slip`,onClick:()=>H(C=>!C),children:["Pöntun · ",u.length," ",lt(u.length,"vara","vörur")," ",i.jsx("span",{"aria-hidden":"true",children:R?"⌄":"⌃"})]}),i.jsx("div",{className:"hb-orderSlipBody",children:i.jsxs("div",{id:`${b}-slip`,className:"hb-orderSlipInner",children:[i.jsxs("div",{className:"hb-orderSlipTitle",children:[i.jsx("h3",{children:"Pöntunin þín"}),i.jsx("button",{className:"hb-orderIcon",disabled:!u.length,"aria-label":"Hreinsa pöntun",title:"Hreinsa pöntun",onClick:()=>W(!0),children:i.jsx(Mc,{})})]}),q&&i.jsxs("div",{className:"hb-orderConfirm",children:[i.jsx("p",{children:"Hreinsa alla pöntunina?"}),i.jsx("button",{className:"hb-orderLink",onClick:()=>{L(u.map(C=>({...C}))),Le.clear(),W(!1),Y("Pöntun hreinsuð.")},children:"Hreinsa pöntun"}),i.jsx("button",{className:"hb-orderLink",onClick:()=>W(!1),children:"Hætta við"})]}),!u.length&&i.jsx("p",{children:"Listinn er tómur. Skrifaðu magn við vörurnar sem þú vilt panta."}),i.jsx("div",{className:"hb-orderSummaryGroups",children:_e.map(C=>{const J=u.filter(fe=>C.items.some(je=>je.slug===fe.slug));return i.jsxs("section",{children:[i.jsx("h4",{children:C.t}),i.jsx(Vp,{lines:J,source:`${b}-slip`,remove:Fn})]},C.s)})}),i.jsx("p",{className:"hb-orderTotals",children:Lp(u)}),O==="products"&&i.jsxs("label",{className:"hb-orderNote",htmlFor:`${b}-order-note`,children:["Eitthvað sérstakt við pöntunina?",i.jsx("textarea",{id:`${b}-order-note`,rows:3,maxLength:2e3,value:B,placeholder:"Til dæmis hafið samband ef vara er ekki til",onChange:C=>Z(C.target.value)})]}),O==="company"&&B&&i.jsxs("p",{className:"hb-orderNotePreview",children:[i.jsx("strong",{children:"Óskir um pöntun"}),B]}),i.jsxs("div",{className:"hb-orderNotice",role:"status",children:[M,X&&i.jsx("button",{className:"hb-orderLink",onClick:()=>{Le.replace([...u,...X.filter(C=>!u.some(J=>J.slug===C.slug))]),L(null),Y("Pöntun endurheimt.")},children:"Afturkalla"})]}),i.jsx("button",{className:"hb-hnappur",disabled:!u.length,onClick:()=>kr(O==="company"?"products":"company"),children:O==="company"?"Breyta vörum":"Áfram í upplýsingar"}),!u.length&&i.jsx("p",{className:"hb-smatt",children:"Veldu vörur til að halda áfram."})]})})]})]}),i.jsxs("footer",{className:"hb-orderFooter",children:[O!=="receipt"&&i.jsxs("button",{type:"button",className:"hb-orderFootCount","aria-expanded":R,"aria-controls":`${b}-slip`,onClick:()=>H(C=>!C),children:["Pöntun · ",u.length," ",lt(u.length,"vara","vörur")," ",i.jsx("span",{"aria-hidden":"true",children:R?"⌄":"⌃"})]}),i.jsx("span",{className:"hb-orderFootHint",children:O==="products"?"Veldu magn og pakkningu":O==="company"?"H-Berg staðfestir pöntunina þegar hún berst":"Mundu að senda tölvupóstinn"}),i.jsx("button",{className:"hb-orderLink hb-orderFootClose",onClick:()=>Le.open(!1),children:"Loka"}),O==="products"&&i.jsx("button",{className:"hb-hnappur",disabled:!u.length,onClick:()=>kr("company"),children:"Áfram"})]}),O==="receipt"&&M&&i.jsx("p",{role:"status",children:M}),we&&i.jsx("div",{"aria-hidden":!D,ref:C=>C==null?void 0:C.toggleAttribute("inert",!D),className:`hb-orderHelpBack${D?" on":""}`,onClick:C=>{var J;C.target===C.currentTarget&&(re(!1),(J=c.current)==null||J.focus())},children:i.jsxs("div",{id:`${b}-help`,className:"hb-orderHelp",role:"dialog","aria-modal":"true","aria-labelledby":`${b}-help-title`,ref:w,tabIndex:-1,children:[i.jsx("button",{className:"hb-orderIcon","aria-label":"Loka magnhjálp",onClick:()=>{var C;re(!1),(C=c.current)==null||C.focus()},children:"×"}),i.jsx("h3",{id:`${b}-help-title`,children:"Hvernig skrifa ég magnið?"}),i.jsx("p",{children:"Skrifaðu fjöldann í reitinn og veldu einingu við hliðina."}),i.jsxs("ul",{children:[i.jsx("li",{children:"Pokar: fjöldi neytendapakkninga, þyngd birtist þegar hún er þekkt."}),i.jsx("li",{children:"Kassar: fjöldi heilla kassa, fjöldi í kassa staðfestur við pöntun."}),i.jsx("li",{children:"Stærri pakkning: aðeins í boði þegar stærð er staðfest."}),i.jsx("li",{children:"Annað: skrifaðu hvernig þú vilt fá vöruna í textareitinn."})]}),i.jsx("p",{children:"Pakkningar eru mismunandi eftir vörum. Þyngd birtist þegar hún er þekkt. H-Berg staðfestir pakkningar og fjölda poka í kassa þegar pöntunin berst."})]})})]})]})}function Vp({lines:o,source:u,remove:s}){const[h,p]=S.useState(o),x=JSON.stringify(o);return S.useEffect(()=>{p(w=>[...o,...w.filter(c=>!o.some(b=>b.slug===c.slug))]);const k=setTimeout(()=>p(o),window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:ye.ui);return()=>clearTimeout(k)},[x]),i.jsx("ul",{className:"hb-orderLines",children:h.map(k=>{const w=Ke(k.slug),c=!o.some(b=>b.slug===k.slug);return i.jsx("li",{className:`hb-summaryPresence${c?" exiting":""}`,ref:b=>b==null?void 0:b.toggleAttribute("inert",c),"aria-hidden":c||void 0,children:i.jsx("div",{className:"hb-summaryClip",children:i.jsxs("div",{className:"hb-summaryRow",children:[i.jsx("img",{src:ar(w.slug,"pack","s"),alt:"",width:40,height:48,style:{background:w.tint}}),i.jsxs("div",{children:[i.jsx("strong",{children:w.name.is}),i.jsx("small",{children:Aa(k)})]}),i.jsx("button",{className:"hb-orderIcon","aria-label":`Fjarlægja ${w.name.is}`,onClick:()=>s(k.slug),children:i.jsx(Mc,{})}),i.jsx(Hc,{p:w,line:k,source:u})]})})},k.slug)})})}const Jp={pappirHreint:"#FAF5EA"},Tr=()=>{var o;return typeof window<"u"&&((o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)").matches)===!0},$a=()=>{var o;return typeof window<"u"&&((o=window.matchMedia)==null?void 0:o.call(window,"(hover: hover) and (pointer: fine)").matches)===!0},Ic=()=>typeof window<"u"&&window.innerWidth<=991,Ac=()=>typeof window<"u"&&window.innerWidth<=479,Lt=o=>`${ot}hberg/fonts/${o}`,dc=[["--c-bg","#FAF5EA"],["--c-el","#F1E8D6"],["--c-el2","#E8DABC"],["--c-el3","#DBC8A0"],["--c-ink","#172D4D"],["--c-ink-med","rgba(23,45,77,.6)"],["--c-ink-max","rgba(23,45,77,.4)"],["--c-btn","#172D4D"],["--c-btn-t","#FAF5EA"],["--c-btn2","#FFFDF8"],["--c-btn2-t","#172D4D"],["--c-form","#FFFDF8"],["--c-rautt","#204A8E"],["--c-lina","rgba(23,45,77,.14)"]],Zo=typeof window<"u"&&new URLSearchParams(window.location.search).get("letur")==="gamalt";if(typeof document<"u"&&!Zo)for(const o of["YoungSerif-latin","InstrumentSans-latin"]){const u=Lt(`ys/${o}.woff2`);if(!document.head.querySelector(`link[data-hb-font="${o}"]`)){const s=document.createElement("link");s.rel="preload",s.as="font",s.type="font/woff2",s.crossOrigin="anonymous",s.href=u,s.dataset.hbFont=o,document.head.appendChild(s)}}const qp=`
/* Young Serif has one weight: the 100 to 900 range stops faux bold on 600 to 800 headings. */
@font-face{font-family:'HB Young';src:url('${Lt("ys/YoungSerif-latin.woff2")}') format('woff2');font-weight:100 900;font-style:normal;font-display:swap;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'HB Young';src:url('${Lt("ys/YoungSerif-latin-ext.woff2")}') format('woff2');font-weight:100 900;font-style:normal;font-display:swap;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,U+2020,U+20A0-20AB,U+20AD-20C4,U+2113}
@font-face{font-family:'HB Instrument';src:url('${Lt("ys/InstrumentSans-latin.woff2")}') format('woff2');font-weight:400 700;font-style:normal;font-display:swap;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'HB Instrument';src:url('${Lt("ys/InstrumentSans-latin-ext.woff2")}') format('woff2');font-weight:400 700;font-style:normal;font-display:swap;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,U+2020,U+20A0-20AB,U+20AD-20C4,U+2113}

@font-face{font-family:'HB Bricolage';src:url('${ot}hberg/fonts/bricolage-latin.woff2') format('woff2');
  font-weight:200 800;font-stretch:75% 100%;font-style:normal;font-display:swap;
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'HB Bricolage';src:url('${ot}hberg/fonts/bricolage-latinext.woff2') format('woff2');
  font-weight:200 800;font-style:normal;font-display:swap;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,U+2020,U+20A0-20AB,U+20AD-20C4,U+2113}
@font-face{font-family:'HB General';src:url('${Lt("GeneralSans-Regular.woff2")}') format('woff2');
  font-weight:400;font-style:normal;font-display:swap}
@font-face{font-family:'HB General';src:url('${Lt("GeneralSans-Medium.woff2")}') format('woff2');
  font-weight:500;font-style:normal;font-display:swap}
@font-face{font-family:'HB General';src:url('${Lt("GeneralSans-Semibold.woff2")}') format('woff2');
  font-weight:600;font-style:normal;font-display:swap}

${dc.map(([o,u])=>`@property ${o}{syntax:'<color>';inherits:true;initial-value:${u}}`).join(`
`)}


.hb-root{
  ${dc.map(([o,u])=>`${o}:${u};`).join(" ")}
  --c-gull:#BEA458; --c-hdr:#FFFDF8; --c-hdr-t:#172D4D;
  --c-flotur:var(--c-el);
  --ease:cubic-bezier(.17,.17,0,1);
  --ease-popup:cubic-bezier(.6,0,0,1);
  --ease-cas:cubic-bezier(.2,0,.1,1);
  --f-disp:${Zo?"'HB Bricolage',system-ui,sans-serif":"'HB Young',Georgia,serif"};
  
  --gut:clamp(0.5rem,2.0833vw,2.5rem);
  --gap:clamp(3rem,22.2222vh,9rem);
  --band:var(--gap);
  --col:clamp(0.5rem,1.0417vw,2.5rem);
  background:var(--c-bg); color:var(--c-ink);
  font-family:${Zo?"'HB General'":"'HB Instrument'"},system-ui,sans-serif;font-synthesis:none;
  font-size:clamp(16px,1.0417vw,19px); line-height:1.5;
  -webkit-font-smoothing:antialiased;
  transition:none;
  display:flex;flex-direction:column;row-gap:var(--gap);
  overflow-x:clip;
}
@media (max-width:991px){.hb-root{--gut:clamp(0.5rem,2.604vw,2.5rem);--gap:clamp(2.5rem,12.121vh,6rem);--col:clamp(0.5rem,1.302vw,2.5rem)}}
@media (max-width:479px){.hb-root{--gut:max(clamp(0.5rem,2.778vw,2.5rem),12px);--gap:clamp(2.5rem,12.5vh,5rem);--col:clamp(0.5rem,2.778vw,2.5rem)}}
.hb-root > main{display:contents}
.hb-root[data-theme="dark"]{--c-bg:#102038;--c-el:#213855;--c-el2:#2E4663;--c-el3:#3D5671;--c-ink:#FAF5EA;--c-ink-med:rgba(250,245,234,.7);--c-ink-max:rgba(250,245,234,.5);--c-btn:#FAF5EA;--c-btn-t:#172D4D;--c-lina:rgba(250,245,234,.2)}


.hb-root > main + *{margin-top:calc(-1 * var(--gap))}
.hb-root *,.hb-root *::before,.hb-root *::after{box-sizing:border-box}
.hb-root{touch-action:manipulation;-webkit-tap-highlight-color:rgba(211,32,42,.14)}
.hb-root{color-scheme:light}

html:has(.hb-root),body:has(.hb-root){background-color:#FAF5EA}
.hb-root :is(section[id],[id].hb-kafli){scroll-margin-top:calc(var(--haus-h,64px) + .75rem)}
.hb-root img{display:block;max-width:100%;height:auto}
.hb-root a{color:inherit;text-decoration:none}
.hb-root :focus-visible{outline:2px solid var(--c-rautt);outline-offset:3px}
:where(.hb-root) button{font:inherit;color:inherit}


.hb-disp{font-family:var(--f-disp);font-weight:800;overflow-wrap:break-word;hyphens:manual;letter-spacing:-.01em;line-height:1.04;
  font-size:clamp(1.5rem,4.17vw,5.25rem);margin:0;text-wrap:balance}
@media (max-width:991px){.hb-disp{font-size:clamp(1.5rem,6.25vw,5.25rem);line-height:1.04}}
@media (max-width:479px){.hb-disp{font-size:clamp(2rem,10vw,3rem);line-height:1.06}}
.hb-sub{font-family:var(--f-disp);font-weight:700;overflow-wrap:break-word;letter-spacing:-.01em;line-height:1.05;
  font-size:clamp(1.1rem,2.08vw,2.5rem);margin:0}
@media (max-width:991px){.hb-sub{font-size:clamp(1.1rem,3.255vw,2.5rem)}}
@media (max-width:479px){.hb-sub{font-size:clamp(1.5rem,max(1.35rem,6.4vw),5.25rem)}}
.hb-merki{font-size:.8rem;letter-spacing:.12em;text-transform:uppercase;font-weight:500;
  color:var(--c-ink-med);margin:0 0 1em}
.hb-brod{max-width:52ch;margin:0;color:var(--c-ink)}
.hb-daufur{color:var(--c-ink-med)}
.hb-smatt{font-size:.8rem;line-height:1.45;color:var(--c-ink-med);margin:.25rem 0 0}
.hb-verd{font-variant-numeric:tabular-nums;font-weight:500}
.hb-wrap{padding:0 var(--gut);position:relative}

.hb-midja{text-align:center;margin-left:auto;margin-right:auto}
@media (max-width:479px){.hb-midja{text-align:left;margin-left:0}}


.hb-mask{overflow:hidden;display:block}
.hb-maskP{padding-bottom:.16em;margin-bottom:-.16em}
.hb-maskP > .hb-up{transform:translateY(118%)}
.on .hb-maskP > .hb-up,.hb-maskP.on > .hb-up,.hb-maskP > .hb-up.on{transform:translateY(0)}
.hb-root.hb-allt .hb-maskP > .hb-up{transform:translateY(0)}

.hb-disp .hb-mask,.hb-sub .hb-mask{padding:.13em 0 .17em;margin:-.13em 0 -.17em}
.hb-disp .hb-lina,.hb-sub .hb-lina{transform:translateY(125%)}
.on .hb-disp .hb-lina,.hb-disp.on .hb-lina,.hb-disp .hb-lina.on,
.on .hb-sub .hb-lina,.hb-sub .hb-lina.on{transform:translateY(0)}
.hb-root.hb-allt .hb-disp .hb-lina,.hb-root.hb-allt .hb-sub .hb-lina{transform:translateY(0)}
.hb-up{transform:translateY(100%);transition:transform var(--dur,var(--motion-reveal)) var(--motion-out);transition-delay:var(--d,0s);will-change:transform}
.hb-lina{transform:translateY(108%)}
.on .hb-up,.hb-up.on{transform:translateY(0)}

@media (max-width:479px){.hb-hver > * .hb-up,.hb-hver > .hb-up{transition-delay:0s}}


.hb-btn{display:inline-flex;align-items:center;justify-content:center;white-space:nowrap;border:0;cursor:pointer;
  padding:clamp(0.5rem,1.042vw,2.5rem) clamp(0.5rem,2.865vw,2.5rem);min-height:44px;font-size:.92rem;font-weight:500;
  background:var(--c-btn);color:var(--c-btn-t);transition:transform var(--motion-fast) var(--motion-out)}
.hb-btn.sc{background:var(--c-btn2);color:var(--c-btn2-t)}
.hb-btn.stor{width:100%;padding:clamp(0.5rem,1.615vw,2.5rem) clamp(0.5rem,2.865vw,2.5rem)}
.hb-btn:active{transform:scale(.97)}
@media (max-width:991px){.hb-btn{padding:clamp(0.5rem,1.628vw,2.5rem) clamp(1rem,7.161vw,6rem)}.hb-btn.stor{padding:clamp(0.5rem,2.279vw,2.5rem) clamp(1rem,7.161vw,6rem)}}
@media (max-width:479px){.hb-btn{padding:clamp(0.5rem,3.472vw,2.5rem) clamp(1rem,9vw,6rem)}.hb-btn.stor{padding:clamp(1rem,4.861vw,6rem) clamp(1rem,9vw,6rem)}}
.hb-btn[disabled]{opacity:.45;cursor:not-allowed}

.hb-hnappur{display:inline-flex;align-items:center;justify-content:center;border:0;cursor:pointer;min-height:48px;padding:0 1.5rem;
  font-size:.95rem;font-weight:500;background:var(--c-btn);color:var(--c-btn-t)}
.hb-hnappur:active{transform:scale(.98)}


.hb-cas{display:inline-block;height:1.25em;line-height:1.25em;overflow:hidden;vertical-align:top}
.hb-casL{display:block;white-space:pre;height:1.25em}
.hb-casL > span{display:inline-block;transition:transform var(--cd,var(--motion-reveal)) var(--motion-out);
  transition-delay:calc(var(--i,0) * var(--cs,.02s))}
@media (hover:hover) and (pointer:fine){
  .hb-casH:hover .hb-casL > span,.hb-casH:focus-visible .hb-casL > span{transform:translateY(-100%)}
}


.hb-nobg{display:inline-flex;align-items:center;gap:.45em;min-height:44px;font-weight:500;cursor:pointer;
  background:none;border:0;padding:0;color:var(--c-ink);transition:none}
.hb-nobg i{font-style:normal;display:inline-block;transition:transform var(--motion-ui) var(--motion-out)}
@media (hover:hover) and (pointer:fine){.hb-nobg:hover{color:var(--c-ink-med)}.hb-nobg:hover i{transform:translateX(.417vw)}}


.hb-haus{position:fixed;z-index:60;top:2.0833vw;left:2.0833vw;right:2.0833vw;
  display:flex;align-items:flex-start;justify-content:space-between;pointer-events:none}
.hb-haus > *{pointer-events:auto}
.hb-merkid{display:inline-flex;line-height:0}
.hb-merkid img{height:clamp(44px,3.6vw,56px);width:auto}
.hb-hausH{display:flex;align-items:center;gap:.5rem;position:relative}
.hb-haus .hb-pokiH{background:var(--c-hdr);color:var(--c-hdr-t);min-height:max(2.5vw,44px);padding:0 1rem}
.hb-nav{display:flex;align-items:stretch;background:var(--c-hdr);color:var(--c-hdr-t);border-radius:999px;
  min-height:max(2.5vw,44px);padding:0 .35rem;box-shadow:0 1px 0 rgba(23,45,77,.06)}
.hb-navL{display:inline-flex;align-items:center;gap:.4rem;padding:0 1rem;font-size:.9rem;font-weight:500;white-space:nowrap;
  border:0;background:none;cursor:pointer;color:inherit;min-height:max(2.5vw,44px)}
.hb-navL svg{transition:transform var(--motion-ui) var(--motion-out)}
.hb-navL[aria-expanded="true"] svg{transform:rotate(180deg)}
.hb-navH{position:relative;display:flex}

.hb-fell{position:absolute;top:calc(100% + .5rem);left:0;min-width:15.5rem;background:var(--c-hdr);color:var(--c-hdr-t);
  border-radius:var(--r,14px);padding:.45rem;box-shadow:0 18px 40px -12px rgba(23,45,77,.28),0 0 0 1px rgba(23,45,77,.06);
  opacity:0;transform:translateY(-6px);transform-origin:top left;visibility:hidden;
  transition:opacity var(--motion-ui) var(--motion-out),transform var(--motion-ui) var(--motion-out),visibility 0s var(--motion-ui)}
.hb-fell.opid{opacity:1;transform:none;visibility:visible;transition:opacity var(--motion-ui) var(--motion-out),transform var(--motion-ui) var(--motion-out),visibility 0s}
.hb-fell a,.hb-fell button{display:flex;flex-direction:column;align-items:flex-start;width:100%;padding:.6rem .75rem;
  border:0;background:none;cursor:pointer;color:inherit;text-align:left;border-radius:calc(var(--r,14px) - 4px);font-size:.92rem}
.hb-fell small{font-size:.78rem;color:color-mix(in srgb,var(--c-hdr-t) 58%,transparent)}
@media (hover:hover) and (pointer:fine){.hb-fell a:hover,.hb-fell button:hover{background:var(--c-el)}}
.hb-fell a:focus-visible,.hb-fell button:focus-visible{outline:2px solid var(--c-rautt);outline-offset:-2px}
.hb-braud{display:none;width:44px;height:44px;border:0;background:var(--c-hdr);cursor:pointer;
  place-items:center;padding:0;flex:none;color:var(--c-hdr-t)}
.hb-braud span{position:relative;width:18px;height:10px;display:block}
.hb-braud i{position:absolute;left:0;right:0;height:1.5px;background:currentColor;display:block;
  transition:translate var(--motion-ui) var(--motion-out) var(--motion-ui),rotate var(--motion-ui) var(--motion-out) 0s,opacity var(--motion-fast) linear var(--motion-ui)}
.hb-braud i:nth-child(1){top:0}.hb-braud i:nth-child(2){top:4.25px}.hb-braud i:nth-child(3){top:8.5px}
.hb-haus.opin .hb-braud i{transition:translate var(--motion-ui) var(--motion-out) 0s,rotate var(--motion-ui) var(--motion-out) var(--motion-ui),opacity var(--motion-fast) linear 0s}
.hb-haus.opin .hb-braud i:nth-child(1){translate:0 4.25px;rotate:-45deg}
.hb-haus.opin .hb-braud i:nth-child(2){opacity:0}
.hb-haus.opin .hb-braud i:nth-child(3){translate:0 -4.25px;rotate:-135deg}


.hb-panK{position:absolute;top:100%;right:0;overflow:hidden;pointer-events:none;display:none}
.hb-pan{pointer-events:auto;background:var(--c-hdr);color:var(--c-hdr-t);transform:translateY(-101%);
  visibility:hidden;transition:transform var(--motion-panel) var(--motion-out),visibility 0s var(--motion-panel)}
.hb-pan.opid{transform:none;visibility:visible;transition:transform var(--motion-panel) var(--motion-out),visibility 0s}

@media (max-width:991px){
  .hb-haus{top:0;left:0;right:0;align-items:center;padding:calc(.5rem + env(safe-area-inset-top)) var(--gut) .5rem;
    background:color-mix(in srgb,var(--c-bg) 90%,transparent);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);
    box-shadow:inset 0 -1px 0 var(--c-lina);pointer-events:auto}
  .hb-merkid img{height:44px}
  .hb-hausH{position:static}
  .hb-nav{display:none}
  .hb-haus .hb-pokiH{background:transparent;color:var(--c-ink);padding:0 .3rem}
  .hb-braud{display:grid}
  .hb-panK{display:grid;left:0;right:0;top:100%}
}
.hb-valPan{padding:.6rem var(--gut) calc(1rem + env(safe-area-inset-bottom));max-height:calc(100svh - 64px);overflow:auto;
  overscroll-behavior:contain}
.hb-valKort{display:grid;grid-template-columns:1fr 1fr;gap:.5rem;margin-bottom:.6rem}
.hb-valKort a{background:var(--c-el);display:flex;flex-direction:column;align-items:center;gap:.4rem;padding:.9rem .5rem .7rem;
  font-size:.86rem;color:var(--c-hdr-t);border-radius:var(--r,14px)}
.hb-valKort img{height:96px;width:auto;object-fit:contain}
.hb-valHop{margin:.9rem 0 .35rem;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;font-weight:500;
  color:color-mix(in srgb,var(--c-hdr-t) 55%,transparent)}
.hb-valRod{display:grid;gap:2px}
.hb-valRod a{display:flex;align-items:center;min-height:52px;padding:0 .9rem;background:var(--c-el);overflow:hidden;border-radius:10px}
.hb-valRod a span{display:block;transform:translateY(105%);transition:transform var(--motion-ui) var(--motion-out)}
.hb-pan.opid .hb-valRod a span{transform:none;transition:transform var(--motion-reveal) var(--motion-out);transition-delay:calc(.08s + var(--i,0) * .04s)}
.hb-valPan .hb-btn{margin-top:.9rem}


.hb-bendill{position:fixed;top:0;left:0;z-index:90;pointer-events:none;border-radius:999px;
  display:grid;place-items:center;color:var(--c-btn-t);width:8.854vw;height:8.854vw;margin:clamp(-6rem,-4.427vw,-1rem) 0 0 clamp(-6rem,-4.427vw,-1rem);
  font-size:.92rem;font-weight:500;will-change:transform}
.hb-bendill i{display:block;position:absolute;inset:0;border-radius:inherit;background:var(--c-btn);
  transform:scale(.1177);transition:transform var(--motion-panel) var(--motion-out)}
.hb-bendill.stor i{transform:scale(1)}
.hb-bendill.yta i{transform:scale(.106)}
.hb-bendill.stor.yta i{transform:scale(.9)}
.hb-bendill b{position:relative;font-weight:500;opacity:0;transition:opacity var(--motion-ui) var(--motion-out)}
.hb-bendill.stor b{opacity:1}
.hb-bendill{opacity:0;transition:opacity var(--motion-panel) var(--motion-out)}.hb-bendill.syn{opacity:1}
.hb-root.hb-laest .hb-bendill{opacity:0!important}
@media (hover:none),(pointer:coarse){.hb-bendill{display:none}}

@media (prefers-reduced-motion:reduce){
  .hb-root *{transition:none !important;animation:none !important}
  .hb-up{transform:none !important}
}
.hb-root.hb-allt .hb-up{transform:translateY(0)}
`;function Wp(o=12e3){S.useEffect(()=>{const u=window.setTimeout(()=>{var s;(s=document.querySelector(".hb-root"))==null||s.classList.add("hb-allt")},o);return()=>window.clearTimeout(u)},[o])}function Yp(o="0px 0px -12% 0px",u=!1){const s=S.useRef(null);return S.useEffect(()=>{const h=s.current;if(!h)return;if(Tr()){h.classList.add("on");return}if(u&&Ac()){const x=[...h.children],k=new IntersectionObserver(w=>{w.forEach(c=>{c.isIntersecting&&(c.target.classList.add("on"),k.unobserve(c.target))})},{rootMargin:o,threshold:0});return x.forEach(w=>k.observe(w)),()=>k.disconnect()}const p=new IntersectionObserver(([x])=>{x.isIntersecting&&(h.classList.add("on"),p.disconnect())},{rootMargin:o,threshold:0});return p.observe(h),()=>p.disconnect()},[o,u]),s}function hr({as:o="div",className:u="",children:s,style:h,hver:p=!1,margin:x,id:k}){const w=Yp(x,p);return i.jsx(o,{ref:w,id:k,className:`${u}${p?" hb-hver":""}`,style:h,children:s})}const cc=()=>!$a(),zt=()=>window.__hbLenis;function Gp(){S.useEffect(()=>{if(Tr()||cc())return;let o=!0,u=0,s=null;return Sc(async()=>{const{default:h}=await import("./lenis-niKyKZQP.js");return{default:h}},[],import.meta.url).then(({default:h})=>{if(!o||(s=cc()?null:new h({duration:3,smoothWheel:!0,gestureOrientation:"vertical",allowNestedScroll:!0}),!s))return;s.scrollTo(0,{immediate:!0}),window.__hbLenis=s,document.querySelector(".hb-root.hb-hled")&&s.stop();let p=0;const x=z=>{u=0,s&&(s.raf(z),p=s.isScrolling?0:p+1,p<20&&!u&&(u=requestAnimationFrame(x)))},k=()=>{p=0,!u&&o&&(u=requestAnimationFrame(x))},w=s,c=w.scrollTo.bind(w),b=w.start.bind(w);w.scrollTo=(z,j)=>{c(z,j),k()},w.start=()=>{b(),k()},w.on("virtual-scroll",k),w.on("scroll",k),k()}),()=>{o=!1,cancelAnimationFrame(u),s==null||s.destroy(),delete window.__hbLenis}},[])}const Ar=o=>({"--d":`${(o*.12).toFixed(2)}s`});function Ka({text:o,className:u="",tag:s="h2",hold:h=0,id:p}){const x=o.split(" | ");return i.jsx(s,{className:u,id:p,children:x.map((k,w)=>i.jsx("span",{className:"hb-mask",children:i.jsx("span",{className:"hb-up hb-lina",style:{"--d":`${(h+w*.12).toFixed(2)}s`},children:k})},k+w))})}function $c({children:o}){return i.jsx("p",{className:"hb-merki",children:i.jsx("span",{className:"hb-mask",children:i.jsx("span",{className:"hb-up",children:o})})})}function st({t:o}){const u=[...o],s=Math.max(1,u.length),p=.15*(s>=5?1:Math.min(.8,Math.max(.45,s/5)))/s,x=u.map((k,w)=>i.jsx("span",{style:{"--i":w},children:k===" "?" ":k},w));return i.jsxs("span",{className:"hb-cas",style:{"--cd":"var(--motion-reveal)","--cs":`${p.toFixed(4)}s`},children:[i.jsx("span",{className:"hb-casL",children:x}),i.jsx("span",{className:"hb-casL","aria-hidden":"true",children:x})]})}function Qp(){const o=S.useRef(null),[u,s]=S.useState(""),[h,p]=S.useState(!1),[x,k]=S.useState(!1);return S.useEffect(()=>{if(!$a()||Tr())return;const w=o.current;if(!w)return;let c=-200,b=-200,z=-200,j=-200,O=0,E=0,R=!1;const H=()=>{z+=(c-z)*.18,j+=(b-j)*.18,w.style.transform=`translate3d(${z.toFixed(1)}px,${j.toFixed(1)}px,0)`,O=Math.abs(c-z)>.3||Math.abs(b-j)>.3?requestAnimationFrame(H):0},D=()=>{var P,Q;if(!R)return;const Y=(Q=(P=document.elementFromPoint(c,b))==null?void 0:P.closest)==null?void 0:Q.call(P,"[data-bendill]");s((Y==null?void 0:Y.dataset.bendill)??"")},re=Y=>{var Q,oe;c=Y.clientX,b=Y.clientY,R||(z=c,j=b,R=!0),k(!0),O||(O=requestAnimationFrame(H));const P=(oe=(Q=Y.target)==null?void 0:Q.closest)==null?void 0:oe.call(Q,"[data-bendill]");s((P==null?void 0:P.dataset.bendill)??"")},q=()=>{requestAnimationFrame(()=>requestAnimationFrame(D)),window.clearTimeout(E),E=window.setTimeout(D,120)},W=()=>{p(!0),window.setTimeout(()=>p(!1),200)},X=Y=>{Y.relatedTarget||(k(!1),s(""))},L=document.querySelector(".hb-root"),M=L?new MutationObserver(()=>{L.classList.contains("hb-laest")||D()}):null;return L&&M&&M.observe(L,{attributes:!0,attributeFilter:["class"]}),document.addEventListener("mouseout",X),window.addEventListener("pointermove",re,{passive:!0}),window.addEventListener("scroll",q,{passive:!0}),window.addEventListener("pointerdown",W,{passive:!0}),()=>{window.removeEventListener("pointermove",re),window.removeEventListener("scroll",q),window.removeEventListener("pointerdown",W),cancelAnimationFrame(O),window.clearTimeout(E),document.removeEventListener("mouseout",X),M==null||M.disconnect()}},[]),i.jsxs("div",{className:`hb-bendill${u?" stor":""}${h?" yta":""}${x?" syn":""}`,ref:o,"aria-hidden":"true",children:[i.jsx("i",{}),i.jsx("b",{children:u})]})}const Xp=()=>i.jsx("svg",{width:"9",height:"6",viewBox:"0 0 9 6","aria-hidden":"true",children:i.jsx("path",{d:"M1 1l3.5 3.5L8 1",fill:"none",stroke:"currentColor",strokeWidth:"1.3"})}),hc=[{t:"Vörur",id:"vorur",rows:[{h:We("vorur/"),t:"Allar vörulínur",d:"Hnetur, ávextir, fræ og hnetusmjör"},{h:We("vorur/"),t:"Hnetur og ávextir",d:"Tegundir og innihald"},{h:"#ofnaemi",t:"Ofnæmisvaldar",d:"Skoðaðu innihaldið"},{h:We("naeringargildi/"),t:"Næringargildi",d:"Allar vörur í einni töflu"},{h:"#hvar",t:"Hvar fæst H-Berg",d:"Söluaðilar H-Berg",fn:()=>Ce.open({k:"hvar"})}]},{t:"H-Berg",id:"hberg",rows:[{h:"#poki",t:"Pöntun fyrir verslanir",d:"Pöntunarlisti fyrir fyrirtæki",poki:!0},{h:"#staerra",t:"Stærri pakkningar",d:"Fyrir matvælafyrirtæki og stóreldhús",fn:()=>Ce.open({k:"staerra"})},{h:"#um",t:"Um okkur",d:"Fjölskyldufyrirtæki frá 2007"},{h:"#saga",t:"Gamalt og nýtt"},{h:"#spurt",t:"Spurt og svarað"}]}],Tn={h:"#erindi",t:"Hafa samband"};function en(o){if(!o.startsWith("#")){location.assign(o);return}if(Cr!=="home"&&!document.querySelector(o)){location.assign(Gt(o));return}const u=document.querySelector(o);if(!u)return;const s=document.querySelector(".hb-haus"),h=-(((s==null?void 0:s.getBoundingClientRect().height)??80)+16),p=zt();p?p.scrollTo(u,{offset:h}):window.scrollTo({top:u.getBoundingClientRect().top+window.scrollY+h,behavior:Tr()?"auto":"smooth"});const x=new URL(window.location.href);x.hash=o,history.replaceState(null,"",x)}function Zp(){const[o,u]=S.useState(null),s=S.useRef(null),h=S.useRef(0),p=o==="valmynd";S.useEffect(()=>{if(!o)return;const c=z=>{var O,E;if(z.key!=="Escape")return;const j=o;u(null),(E=(O=s.current)==null?void 0:O.querySelector(`[aria-controls="hb-fell-${j}"],.hb-braud`))==null||E.focus()},b=z=>{var j;(j=s.current)!=null&&j.contains(z.target)||u(null)};return window.addEventListener("keydown",c),window.addEventListener("pointerdown",b),()=>{window.removeEventListener("keydown",c),window.removeEventListener("pointerdown",b)}},[o]),S.useEffect(()=>{const c=()=>{var z,j;const b=(z=s.current)==null?void 0:z.getBoundingClientRect().height;b&&((j=document.querySelector(".hb-root"))==null||j.style.setProperty("--haus-h",`${Math.round(b)}px`))};return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]);const x=(c,b)=>{if(!b.poki&&!b.fn&&(!b.h.startsWith("#")||Cr!=="home")){u(null);return}c.preventDefault();const z=Ic();if(u(null),b.poki){const j={detail:c.detail,currentTarget:c.currentTarget};window.setTimeout(()=>Le.open(!0,j),z?400:0);return}if(b.fn){window.setTimeout(b.fn,z?400:0);return}window.setTimeout(()=>en(b.h),z?400:0)},k=c=>{$a()&&(window.clearTimeout(h.current),u(c))},w=()=>{$a()&&(window.clearTimeout(h.current),h.current=window.setTimeout(()=>u(c=>c==="valmynd"?c:null),180))};return i.jsxs("header",{ref:s,className:`hb-haus${p?" opin":""}`,children:[i.jsx("a",{className:"hb-merkid",href:We(),"aria-label":"H-Berg, á forsíðu",onClick:c=>{if(Cr!=="home")return;c.preventDefault(),u(null);const b=zt();b?b.scrollTo(0):window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})},children:i.jsx("img",{src:`${ot}hberg/brand/logo.svg${br}`,alt:"H-Berg",width:460,height:212,decoding:"async"})}),i.jsxs("div",{className:"hb-hausH",children:[i.jsxs("nav",{className:"hb-nav","aria-label":"Aðalvalmynd",children:[hc.map(c=>i.jsxs("div",{className:"hb-navH",onPointerEnter:()=>k(c.id),onPointerLeave:w,children:[i.jsxs("button",{className:"hb-navL","aria-expanded":o===c.id,"aria-controls":`hb-fell-${c.id}`,onClick:b=>{u(o===c.id?null:c.id);const z=b.detail===0;window.setTimeout(()=>{var O;const j=document.getElementById(`hb-fell-${c.id}`);(O=z?j==null?void 0:j.querySelector("a"):j)==null||O.focus({preventScroll:!0})},30)},children:[c.t,i.jsx(Xp,{})]}),i.jsx("div",{id:`hb-fell-${c.id}`,tabIndex:-1,className:`hb-fell${o===c.id?" opid":""}`,children:i.jsx("div",{className:"hb-fellInner",children:c.rows.map(b=>i.jsxs("a",{href:b.h.startsWith("#")?Gt(b.h):b.h,tabIndex:o===c.id?0:-1,onClick:z=>x(z,b),children:[b.t,b.d?i.jsx("small",{children:b.d}):null]},b.t))})})]},c.id)),i.jsx("a",{className:"hb-navL hb-casH",href:Gt(Tn.h),onClick:c=>x(c,Tn),children:i.jsx(st,{t:Tn.t})})]}),i.jsx(Ap,{}),i.jsx("button",{className:"hb-braud","aria-expanded":p,"aria-controls":"hb-valPan","aria-label":p?"Loka valmynd":"Opna valmynd",onClick:c=>{if(u(p?null:"valmynd"),!p){const b=c.detail===0;window.setTimeout(()=>{var j;const z=document.getElementById("hb-valPan");(j=b?z==null?void 0:z.querySelector("a"):z)==null||j.focus({preventScroll:!0})},30)}},children:i.jsxs("span",{children:[i.jsx("i",{}),i.jsx("i",{}),i.jsx("i",{})]})}),i.jsx("div",{className:"hb-panK",children:i.jsxs("div",{id:"hb-valPan",tabIndex:-1,className:`hb-pan hb-valPan${p?" opid":""}`,children:[i.jsxs("div",{className:"hb-valKort",children:[i.jsxs("a",{href:We("vorur/"),children:[i.jsx("img",{src:`${Pn}hberg/laus/p00.webp${br}`,alt:"",width:128,height:128,style:{height:64,width:"auto"}}),"Hnetur"]}),i.jsxs("a",{href:We("vorur/"),children:[i.jsx("img",{src:`${Pn}hberg/laus/p06.webp${br}`,alt:"",width:128,height:128,style:{height:64,width:"auto"}}),"Ávextir"]})]}),hc.map((c,b)=>i.jsxs("div",{children:[i.jsx("p",{className:"hb-valHop",children:c.t}),i.jsx("div",{className:"hb-valRod",children:c.rows.map((z,j)=>i.jsx("a",{href:z.h.startsWith("#")?Gt(z.h):z.h,tabIndex:p?0:-1,style:{"--i":b*4+j},onClick:O=>x(O,z),children:i.jsx("span",{children:z.t})},z.t))})]},c.id)),i.jsx("div",{className:"hb-valRod",style:{marginTop:".9rem"},children:i.jsx("a",{href:Gt(Tn.h),tabIndex:p?0:-1,style:{"--i":11},onClick:c=>x(c,Tn),children:i.jsx("span",{children:Tn.t})})}),i.jsx("button",{className:"hb-btn stor",tabIndex:p?0:-1,onClick:()=>{u(null),window.setTimeout(()=>Le.open(!0),400)},children:"Opna pöntunarlistann"})]})})]})]})}const Da=ye.reveal,ef=`
html:has(.hb-root.hb-laest){overflow:hidden}
.hb-root.hb-hled .hb-hero .hb-up{transform:translateY(125%) !important;transition:none !important}
.hb-root.hb-hledB0 .hb-heroP{transform:translateY(100vh)}
.hb-root.hb-hledB0 .hb-haus{visibility:hidden}
.hb-root.hb-hledU .hb-heroP{position:relative;z-index:96;will-change:transform}
.hb-root.hb-hledU .hb-haus{z-index:97;visibility:visible}
.hb-plota{position:fixed;inset:0;z-index:95;background:#204A8E;transform:translateY(100%);
  display:grid;place-items:center;pointer-events:none}
.hb-plotaM{overflow:hidden;width:min(58vw,19rem)}
.hb-plotaM img{width:100%;height:auto;display:block;transform:translateY(105%);transition:transform var(--motion-reveal) var(--motion-out) var(--motion-fast)}
.hb-plota.inn .hb-plotaM img{transform:none}
`,rf=()=>{var o;return((o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)").matches)===!0};function tf(){const[o,u]=S.useState(()=>typeof window>"u"?!1:rf()),[s,h]=S.useState(!1);return S.useEffect(()=>{var W,X;if(o)return;const p=document.querySelector(".hb-root"),x=document.querySelector(".hb-plota"),k=document.querySelector(".hb-heroP"),w=document.querySelector(".hb-haus");if(!p||!x||!k){u(!0);return}p.classList.add("hb-hled","hb-hledB0","hb-laest");const c=[],b=[];let z=!1;const j=()=>{var L,M;z||(z=!0,c.forEach(Y=>{try{Y.finish(),Y.cancel()}catch{}}),b.forEach(Y=>window.clearTimeout(Y)),p.classList.remove("hb-hled","hb-hledB0","hb-hledU","hb-laest"),k.style.transform="",w&&(w.style.transform=""),p.querySelectorAll('.hb-hero .hb-up, .hb-hero [class*="hb-"]').forEach(Y=>Y.classList.add("on")),(L=zt())==null||L.start(),(M=zt())==null||M.resize(),u(!0))},O=()=>{if(z)return;const L=!Ic();c.push(x.animate([{transform:"translateY(100%)"},{transform:"translateY(0)"}],{duration:ye.reveal,easing:ye.emphasis,fill:"forwards"})),h(!0),b.push(window.setTimeout(()=>{p.classList.remove("hb-hledB0"),p.classList.add("hb-hledU");const M=[{transform:"translateY(100vh)",easing:ye.emphasis},{transform:"translateY(31.9vh)",offset:1/3,easing:ye.out},{transform:"translateY(0)"}];c.push(k.animate(M,{duration:ye.reveal,fill:"forwards"})),L&&w&&c.push(w.animate(M,{duration:ye.reveal,fill:"forwards"}))},Da)),b.push(window.setTimeout(()=>{p.classList.remove("hb-hled"),p.querySelectorAll(".hb-hero .hb-heroT, .hb-hero .hb-rist").forEach(M=>M.classList.add("on"))},Da+ye.fast)),b.push(window.setTimeout(()=>{var M;p.classList.remove("hb-laest"),(M=zt())==null||M.start()},Da+ye.reveal)),b.push(window.setTimeout(j,Da+ye.reveal+ye.fast))};(W=zt())==null||W.stop();const E=[...p.querySelectorAll(".hb-hero img")],R=Promise.all([((X=document.fonts)==null?void 0:X.ready)??Promise.resolve(),...E.map(L=>L.complete?Promise.resolve():new Promise(M=>{L.addEventListener("load",M,{once:!0}),L.addEventListener("error",M,{once:!0})}))]),H=new Promise(L=>window.setTimeout(L,1200));Promise.race([R,H]).then(O);const D=window.setTimeout(j,12e3),re=()=>{document.hidden&&j()},q=L=>{L.persisted&&j()};return document.addEventListener("visibilitychange",re),window.addEventListener("pageshow",q),()=>{var L;z=!0,window.clearTimeout(D),b.forEach(M=>window.clearTimeout(M)),c.forEach(M=>M.cancel()),p.classList.remove("hb-hled","hb-hledB0","hb-hledU","hb-laest"),document.removeEventListener("visibilitychange",re),window.removeEventListener("pageshow",q),(L=zt())==null||L.start()}},[]),o?null:i.jsx("div",{className:`hb-plota${s?" inn":""}`,"aria-hidden":"true",children:i.jsx("div",{className:"hb-plotaM",children:i.jsx("img",{src:`${ot}hberg/brand/logo.svg${br}`,alt:"",width:820,height:378})})})}const mc=Array.from({length:40},(o,u)=>({src:`${Pn}hberg/laus/p${String(u).padStart(2,"0")}.webp${br}`,w:1,h:1,n:"",k:"laus"})),pc=(o,u,s)=>{const h=[],p=o.slice(0,u);for(let x=0;x<s;x++)p.length&&x%Math.ceil(s/p.length)===0&&h.push(p.shift()),h.push(mc[x*7%mc.length]);return h.concat(p)},fc=["mondlur","heslihnetur-med-sukkuladi-afrit","graskersfrae-2","kajuhnetur-heilarristadar","aprikosur-2","dodlur-2","hnetusmjor","tronuber-2","valhnetukjarnar","fikjur-2","kasjusmjor","kasjusmjor-2","pistasiur"],gc=vr.filter(o=>{var u;return((u=Vo[o.slug])==null?void 0:u.pack)&&["hnetur","avextir"].some(s=>o.tags.includes(s))}).sort((o,u)=>{const s=fc.indexOf(o.slug),h=fc.indexOf(u.slug);return(s<0?99:s)-(h<0?99:h)}).map(o=>{const[u,s]=Vo[o.slug].pack;return{src:o.slug,w:u,h:s,n:o.name.is,k:u/s>1.8?"stong":"poki"}}),nf=`
.hb-regn{position:relative}
.hb-regnH{padding:0 var(--gut);position:relative;z-index:3;pointer-events:none}
.hb-regnH p{margin:.9rem 0 0;max-width:34ch;opacity:.8}
.hb-svid{position:relative;z-index:1;height:clamp(30rem,82svh,52rem);margin-top:calc(clamp(8rem,22vh,14rem) * -1);
  overflow:hidden;touch-action:pan-y;user-select:none;-webkit-user-select:none}
.hb-svid img{position:absolute;left:0;top:0;will-change:transform;pointer-events:none;
  filter:drop-shadow(0 10px 14px rgba(28,18,12,.22));-webkit-user-drag:none}
@media (max-width:640px){.hb-svid{height:clamp(24rem,64svh,34rem);margin-top:-5rem}}
.hb-svid img.laus{filter:none}
.hb-svid.grip{cursor:grab}
.hb-svid.grip.held{cursor:grabbing}
.hb-golf{position:absolute;left:var(--gut);right:var(--gut);bottom:0;height:1px;background:var(--c-lina)}
`,af=()=>{var o;return((o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)").matches)===!0},Bc=()=>{var o;return((o=window.matchMedia)==null?void 0:o.call(window,"(hover: hover) and (pointer: fine)").matches)===!0};function lf(){const o=S.useRef(null),[u,s]=S.useState(!1);return S.useEffect(()=>{const h=o.current;if(!h)return;const p=new IntersectionObserver(([x])=>{x.isIntersecting&&(s(!0),p.disconnect())},{rootMargin:"100% 0px 100% 0px"});return p.observe(h),()=>p.disconnect()},[]),S.useEffect(()=>{if(!u)return;const h=o.current;if(!h)return;let p=!0,x=0,k=()=>{};return Sc(()=>import("./matter-CTsKdDyU.js").then(w=>w.m),[],import.meta.url).then(w=>{if(!p||!o.current)return;const c=w.default??w,{Engine:b,Bodies:z,Composite:j,Body:O,Sleeping:E}=c,R=h.clientWidth,H=h.clientHeight,D=R<640,re=Math.max(58,Math.min(118,R/(D?5.6:12.5))),q=D?pc(gc,0,54):pc(gc,0,120),W=b.create({enableSleeping:!0});W.gravity.y=1.15;const X=200;j.add(W.world,[z.rectangle(R/2,H+X/2,R*3,X,{isStatic:!0,friction:.9}),z.rectangle(-X/2,H/2-H,X,H*4,{isStatic:!0}),z.rectangle(R+X/2,H/2-H,X,H*4,{isStatic:!0})]);const L=[],M=[];q.forEach((I,K)=>{const v=I.k==="laus",g=I.k==="stong",_=v?re*(.42+Math.random()*.16):g?re*1.55:I.k==="egg"?re*.62:I.w/I.h*re*1.3,B=v?_:g||I.k==="egg"?_*(I.h/I.w):re*1.3,Z=v?R*(.3+.4*Math.random()):_/2+K*.618%1*(R-_),de=-B-K*(re*(v?.22:.55))-Math.random()*re,pe=v?z.circle(Z,de,_*.4,{restitution:.32,friction:.4,frictionAir:.01,density:.0016,angle:Math.random()*6.28}):z.rectangle(Z,de,_,B,{chamfer:{radius:Math.min(_,B)*.12},restitution:I.k==="stong"?.18:.28,friction:.6,frictionAir:.012,density:.0012,angle:(Math.random()-.5)*.9});O.setAngularVelocity(pe,(Math.random()-.5)*(v?.2:.08)),M.push(pe);const ce=document.createElement("img");ce.src=v?I.src:ar(I.src,"pack","s"),v&&(ce.className="laus"),ce.alt="",ce.decoding="async",ce.width=Math.round(_),ce.height=Math.round(B),ce.style.width=`${_}px`,ce.style.height=`${B}px`,ce.style.transform="translate3d(-999px,-999px,0)",h.appendChild(ce),L.push(ce)});const Y=()=>{for(let I=0;I<M.length;I++){const K=M[I],v=L[I];v.style.transform=`translate3d(${(K.position.x-v.width/2).toFixed(1)}px,${(K.position.y-v.height/2).toFixed(1)}px,0) rotate(${K.angle.toFixed(3)}rad)`}};if(af()){j.add(W.world,M);for(let I=0;I<1400;I++)b.update(W,1e3/60);Y(),k=()=>{L.forEach(I=>I.remove()),b.clear(W)};return}let P=0,Q=!1,oe=0,le=0;const me=()=>{var I;oe>=M.length||(j.add(W.world,M[oe]),oe++,le=window.setTimeout(me,((I=q[oe])==null?void 0:I.k)==="laus"?D?34:26:D?110:85))},xe=new IntersectionObserver(([I])=>{Q=I.isIntersecting,Q&&oe===0&&me(),Q&&!x&&(x=requestAnimationFrame(Re))},{threshold:.35});xe.observe(h);let be=performance.now();const Re=I=>{const K=Math.min(32,I-be);be=I,b.update(W,K),Y(),P=oe===M.length&&M.every(g=>g.isSleeping)?P+1:0,x=Q&&P<30?requestAnimationFrame(Re):0},He=()=>{!x&&Q&&(be=performance.now(),x=requestAnimationFrame(Re))},Ne=I=>{const K=h.getBoundingClientRect();return{x:I.clientX-K.left,y:I.clientY-K.top}},G=[];if(Bc()){h.classList.add("grip");let I=null;const K=_=>{const B=Ne(_),Z=c.Query.point(M,B)[0];if(!Z)return;_.preventDefault(),h.setPointerCapture(_.pointerId),E.set(Z,!1);const de=B.x-Z.position.x,pe=B.y-Z.position.y,ce=Math.cos(-Z.angle),we=Math.sin(-Z.angle);I=c.Constraint.create({pointA:B,bodyB:Z,pointB:{x:de*ce-pe*we,y:de*we+pe*ce},stiffness:.12,damping:.08,length:0}),j.add(W.world,I),h.classList.add("held"),He()},v=_=>{I&&(I.pointA=Ne(_),He())},g=()=>{I&&(j.remove(W.world,I),I=null,h.classList.remove("held"))};h.addEventListener("pointerdown",K),h.addEventListener("pointermove",v),h.addEventListener("pointerup",g),h.addEventListener("pointercancel",g),G.push(()=>{h.removeEventListener("pointerdown",K),h.removeEventListener("pointermove",v),h.removeEventListener("pointerup",g),h.removeEventListener("pointercancel",g)})}else{const I=K=>{const v=c.Query.point(M,Ne(K))[0];v&&(E.set(v,!1),O.setVelocity(v,{x:(Math.random()-.5)*6,y:-14}),O.setAngularVelocity(v,(Math.random()-.5)*.3),He())};h.addEventListener("pointerup",I),G.push(()=>h.removeEventListener("pointerup",I))}k=()=>{xe.disconnect(),window.clearTimeout(le),cancelAnimationFrame(x),G.forEach(I=>I()),L.forEach(I=>I.remove()),b.clear(W)}}),()=>{p=!1,k()}},[u]),i.jsxs("section",{className:"hb-regn","aria-labelledby":"hb-regn-t",children:[i.jsxs("div",{className:"hb-regnH",children:[i.jsx($c,{children:"Pokinn"}),i.jsx("h2",{id:"hb-regn-t",className:"hb-disp",children:"Hellt úr pokanum."}),i.jsx("p",{children:of()})]}),i.jsx("div",{className:"hb-svid",ref:o,"data-bendill":"Gríptu",role:"img","aria-label":"Pokar frá H-Berg og lausar hnetur og þurrkaðir ávextir í hrúgu."}),i.jsx("div",{style:{position:"relative",height:0},children:i.jsx("span",{className:"hb-golf"})})]})}function of(){return typeof window>"u"?"":Bc()?"Gríptu vöru og kastaðu henni.":"Pikkaðu á vöru og hún hoppar."}const sf=.19,uf=.16,df=14,cf=(o,u)=>{const s=o%u;return s>0?s-u:s},Uo=(o,u,s)=>o<u?u:o>s?s:o,hf=()=>{const[o,u]=S.useState(()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);return S.useEffect(()=>{const s=window.matchMedia("(prefers-reduced-motion: reduce)"),h=()=>u(s.matches);return s.addEventListener("change",h),()=>s.removeEventListener("change",h)},[]),o};function mf({speed:o=40,gap:u=72}){const s=S.useRef(null),h=S.useRef(null),p=S.useRef(null),[x,k]=S.useState(4),[w,c]=S.useState(!1),[b,z]=S.useState(!1),j=hf(),O=S.useRef(j);O.current=j;const E=S.useRef(!1);E.current=!w&&!j;const R=S.useRef(0),H=S.useRef(0),D=S.useRef(0),re=S.useRef(0),q=S.useCallback(()=>{const X=h.current;if(!X)return;const L=O.current?0:R.current-re.current;X.style.transform=`translate3d(${L.toFixed(2)}px,0,0)`},[]);return S.useLayoutEffect(()=>{const X=s.current,L=p.current;if(!X||!L)return;const M=()=>{const P=L.getBoundingClientRect().width,Q=P>0?P+u:0;re.current=Q,R.current=Q>0?Uo(R.current,-Q,Q):0,q();const oe=j||Q<=0?4:Uo(Math.ceil(X.getBoundingClientRect().width/Q)+3,4,df);k(le=>le===oe?le:oe)};M();const Y=new ResizeObserver(M);return Y.observe(X),Y.observe(L),()=>Y.disconnect()},[u,q,j]),S.useEffect(()=>{const X=s.current;if(!X)return;const L=new IntersectionObserver(M=>{const Y=M[M.length-1];Y&&z(Y.isIntersecting)},{rootMargin:"96px"});return L.observe(X),()=>L.disconnect()},[]),S.useEffect(()=>{if(j||!b)return;let X=0,L=0;const M=Y=>{X=requestAnimationFrame(M);const P=L?Math.min((Y-L)/1e3,.05):0;L=Y;const Q=re.current;if(Q<=0)return;D.current+=((E.current?1:0)-D.current)*(1-Math.exp(-P/sf));const oe=H.current*(1-Math.exp(-P/uf));H.current-=oe;let le=R.current-o*D.current*P+oe;D.current>.002&&Math.abs(H.current)<.25?(H.current=0,le=cf(le,Q)):le=Uo(le,-Q,Q),R.current=le,q()};return X=requestAnimationFrame(M),()=>cancelAnimationFrame(X)},[j,b,o,q]),S.useEffect(()=>{const X=()=>c(!1);return window.addEventListener("blur",X),()=>window.removeEventListener("blur",X)},[]),{viewportRef:s,trackRef:h,groupRef:p,copies:x,reduced:j,bind:{onPointerEnter:X=>{X.pointerType!=="touch"&&c(!0)},onPointerDown:()=>c(!0),onPointerUp:X=>{X.pointerType==="touch"&&c(!1)},onPointerCancel:()=>c(!1),onPointerLeave:()=>c(!1),onFocus:()=>c(!0),onBlur:()=>c(!1)}}}const pf=[{n:"Bónus",f:"bonus.webp",h:1},{n:"Krónan",f:"kronan.svg",h:.8},{n:"Hagkaup",f:"hagkaup.svg",h:1.05},{n:"Nettó",f:"netto.svg",h:.8},{n:"Fjarðarkaup",f:"fjardarkaup.png",h:1.15},{n:"Samkaup",f:"samkaup.svg",h:.8},{n:"10-11",f:"1011.png",h:1.05},{n:"N1",f:"n1.svg",h:1.1},{n:"Olís",f:"olis.svg",h:.85,k:"flis"},{n:"Kaupfélag Vestur-Húnvetninga",f:"kvh.svg",h:1}],ff=`
.hb-solu{position:relative;isolation:isolate;overflow:hidden;padding:clamp(1.4rem,2.4vw,2.2rem) 0}
.hb-soluT{margin:0 0 1.1rem;text-align:center;font-size:.78rem;letter-spacing:.14em;text-transform:uppercase;font-weight:500;color:var(--c-ink-med)}
.hb-soluV{overflow-y:hidden;outline:none;
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent);mask-image:linear-gradient(90deg,transparent,#000 9%,#000 91%,transparent)}
.hb-soluS{display:flex;width:max-content;align-items:center;will-change:transform}
.hb-soluS ul{display:flex;width:max-content;align-items:center;margin:0;padding:0;list-style:none}
.hb-soluS li{flex:none;display:flex;align-items:center}
.hb-soluS img{display:block;height:calc(clamp(30px,2.6vw,44px) * var(--h,1));width:auto;max-width:9.5rem;object-fit:contain;
  transition:transform var(--motion-panel) var(--motion-out)}
@media (hover:hover) and (pointer:fine){.hb-soluS li:hover img{transform:scale(1.06)}}
.hb-soluS li.flis{background:#172D4D;border-radius:12px;padding:.45rem .9rem}
.hb-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
`;function gf(){const{viewportRef:u,trackRef:s,groupRef:h,copies:p,reduced:x,bind:k}=mf({speed:34,gap:72}),w=x?1:p,c=x?0:1;return i.jsxs("section",{className:"hb-solu","aria-label":"Söluaðilar H-Berg",...k,children:[i.jsx("p",{className:"hb-soluT",children:"Fæst hjá 19 söluaðilum um allt land"}),i.jsx("div",{ref:u,className:"hb-soluV",tabIndex:x?0:void 0,style:{overflowX:x?"auto":"hidden"},children:i.jsx("div",{ref:s,className:"hb-soluS",style:{gap:72},children:Array.from({length:w},(b,z)=>i.jsx("ul",{ref:z===c?h:void 0,"aria-hidden":z===c?void 0:!0,style:{gap:72},children:pf.map(j=>i.jsxs("li",{className:j.k,children:[i.jsx("img",{src:`${Pn}hberg/solu/${j.f}${br}`,alt:"",style:{"--h":j.h},loading:"lazy",decoding:"async"}),z===c?i.jsx("span",{className:"hb-sr",children:j.n}):null]},j.f))},z))})})]})}const bf=`
.hb-lines,.hb-browser{padding-inline:var(--page-gut,var(--gut));min-width:0}
.hb-lines>h2,.hb-browserHeading h2{margin:0 0 1rem}
.hb-lines>p,.hb-browserHeading>p{margin:0 0 2rem}
.hb-linesGrid{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:clamp(.6rem,1.2vw,1.3rem)}
.hb-lineTile{grid-column:span 2;display:flex;flex-direction:column;position:relative;isolation:isolate;min-width:0;padding:0;border:0;border-radius:18px;overflow:hidden;color:#172D4D;text-align:left;cursor:pointer;transition:transform var(--motion-ui) var(--motion-out)}
.hb-lineTile:nth-child(5){grid-column:2/span 2}
.hb-lineTile::before{content:'';position:absolute;inset:0;background:#172D4D;opacity:0;pointer-events:none;z-index:-1;transition:opacity var(--motion-ui) var(--motion-out)}
.hb-lineArt{display:grid;place-items:center;aspect-ratio:1.4;width:100%;padding:1rem}
.hb-lineArt img{width:100%;height:100%;max-height:190px;object-fit:contain;transition:transform var(--motion-ui) var(--motion-out)}
.hb-lineText{display:flex;flex:1;flex-direction:column;gap:.65rem;padding:clamp(.8rem,1.4vw,1.4rem);background:#ffffffb8;width:100%}
.hb-lineCount{font-size:.8rem;font-variant-numeric:tabular-nums}
.hb-lineName{font-family:var(--f-disp);font-size:clamp(1.3rem,1.8vw,2rem);font-weight:700;line-height:1.06;letter-spacing:-.01em;overflow-wrap:anywhere}
.hb-lineDesc{font-size:.9rem;line-height:1.5;padding-bottom:.5rem}
.hb-linePill{display:flex;align-items:center;justify-content:space-between;gap:.4rem;min-height:44px;border:1px solid #172D4D;border-radius:999px;padding:.5rem .85rem;margin-top:auto;font-size:.85rem;font-weight:600}
.hb-browserHeading{max-width:55rem}
.hb-browserEyebrow{display:block;text-transform:uppercase;letter-spacing:.09em;font-size:.8rem;margin-bottom:1rem}
.hb-browserTools{display:grid;grid-template-columns:minmax(0,1fr) minmax(15rem,22rem);gap:1.1rem;align-items:end;border-block:1px solid var(--c-lina);padding-block:1.25rem}
.hb-browserChips,.hb-browserAvoid{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center}
.hb-browserChips button,.hb-browserAvoid button,.hb-browserSecondary{min-height:44px;border:1px solid var(--c-lina);border-radius:999px;background:transparent;color:inherit;font:inherit;font-size:.9rem;padding:.5rem .9rem;cursor:pointer}
.hb-browserChips button span{font-variant-numeric:tabular-nums;margin-left:.3rem;font-size:.8em}
.hb-browserChips button[aria-pressed=true],.hb-browserAvoid button[aria-pressed=true]{background:var(--c-ink);color:var(--c-bg);border-color:var(--c-ink)}
.hb-browserAvoid{grid-column:1/-1}
.hb-browserAvoid>span{margin-right:.3rem}
.hb-browserSearch{display:grid;gap:.4rem;font-size:.85rem}
.hb-browserSearch input{width:100%;min-width:0;min-height:48px;border:1px solid var(--c-lina);border-radius:8px;background:var(--c-form);color:inherit;font:inherit;font-size:16px;padding:.65rem .85rem}
.hb-browserStatus{display:flex;flex-wrap:wrap;align-items:baseline;justify-content:space-between;gap:.5rem 1rem;padding-block:1rem}
.hb-browserStatus p{margin:0;font-variant-numeric:tabular-nums}
.hb-browserHint{font-size:.8rem;color:var(--c-ink-med)}
.hb-browserLayout{display:grid;grid-template-columns:minmax(0,1fr) minmax(19rem,.58fr);gap:clamp(1rem,2.5vw,3rem);align-items:start}
.hb-browserGrid{position:relative;display:grid;grid-template-columns:repeat(auto-fill,minmax(9.5rem,1fr));gap:1.25rem .8rem;align-items:stretch;min-width:0}
.hb-browserTile{min-width:0;display:flex;flex-direction:column;gap:.6rem;border:2px solid transparent;border-radius:12px;background:transparent;color:inherit;padding:.35rem;text-align:left;cursor:pointer;content-visibility:auto;contain-intrinsic-size:auto 330px;overflow-wrap:anywhere;transition:transform var(--motion-ui) var(--motion-out)}
.hb-browserTile[aria-selected=true]{border-color:var(--c-ink);background:var(--c-el)}
.hb-browserArt{position:relative;display:block;aspect-ratio:1;width:100%;border-radius:8px;overflow:hidden}
.hb-browserArt img{position:absolute;inset:10%;width:80%;height:80%;object-fit:contain;transition:transform var(--motion-ui) var(--motion-out)}
.hb-browserCheck{position:absolute;top:.5rem;right:.5rem;background:var(--c-ink);color:var(--c-bg);border-radius:50%;width:24px;height:24px;text-align:center;display:none}
.hb-browserTile[aria-selected=true] .hb-browserCheck{display:block}
.hb-browserName{font-weight:600;font-size:.95rem;line-height:1.35}
.hb-browserTile .hb-allergenBadges{display:flex;flex-wrap:wrap;gap:.25rem;font-size:.7rem;line-height:1.4}
.hb-browserTile .hb-allergenBadges>span{padding:.2rem .35rem;gap:.2rem}
.hb-browserTile .hb-allergenBadges svg{width:14px;height:14px;flex:none}
.hb-browserDetail{position:sticky;top:calc(var(--haus-h,70px) + 1rem);min-width:0;padding:1rem;border:1px solid var(--c-lina);border-radius:16px;background:var(--c-el)}
.hb-detailLayers{position:relative}
.hb-detailLayers>div{background:var(--c-el)}
.hb-detailArt{position:relative;aspect-ratio:1.9;border-radius:10px;overflow:hidden}
.hb-detailArt img{position:absolute;inset:6%;height:88%;width:88%;object-fit:contain}
.hb-detailLine{margin:.85rem 0 .4rem;font-size:.8rem}
.hb-browserDetail h3{font:700 clamp(1.4rem,2vw,2.2rem)/1.06 var(--f-disp);letter-spacing:-.01em;margin:0 0 .7rem;overflow-wrap:anywhere}
.hb-browserDetail p{font-size:.85rem;line-height:1.45}
.hb-detailAllergens{font-weight:500}
.hb-detailBasis{margin-bottom:.3rem}
.hb-browserDetail dl{margin:0;font-size:.85rem;font-variant-numeric:tabular-nums}
.hb-browserDetail dl>div{display:grid;grid-template-columns:auto minmax(0,1fr);gap:.5rem;padding:.35rem 0;border-bottom:1px solid var(--c-lina)}
.hb-browserDetail dd{margin:0;text-align:right;overflow-wrap:anywhere}
.hb-browserLink{display:inline-flex;gap:.5rem;align-items:center;min-height:44px;padding:.4rem 0;border:0;background:none;color:inherit;text-decoration:underline;text-underline-offset:4px;cursor:pointer;font:inherit}
.hb-detailActions{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:.5rem}
.hb-detailActions .hb-sett{width:100%;min-height:48px;justify-content:center;font-size:.9rem;background:var(--c-ink);color:var(--c-bg);border-radius:999px}
.hb-browserDisclaimer{font-size:.78rem!important;line-height:1.5;color:var(--c-ink-med)}
@media(hover:hover) and (pointer:fine){
.hb-root .hb-lineTile:hover,.hb-root .hb-browserTile:hover{opacity:1}
.hb-lineTile:hover .hb-lineArt img{transform:translateY(-4px) scale(1.04)}
.hb-lineTile:hover::before{opacity:.08}
.hb-lineTile:hover .hb-linePill{background:#172D4D;color:#fff}
.hb-browserTile:hover .hb-browserArt img{transform:translateY(-3px) scale(1.04)}
}
.hb-root .hb-lineTile:active,.hb-root .hb-browserTile:active{scale:.98;transform:none}
@media(max-width:1199px) and (min-width:992px){.hb-browserGrid{grid-template-columns:repeat(auto-fill,minmax(8.5rem,1fr));gap:.8rem .4rem}.hb-browserLayout{grid-template-columns:minmax(0,1fr) minmax(18rem,.65fr)}}
@media(max-width:991px){
.hb-linesGrid{grid-template-columns:repeat(2,minmax(0,1fr))}
.hb-lineTile,.hb-lineTile:nth-child(5){grid-column:auto}
.hb-lineTile:last-child{grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr}
.hb-lineArt{aspect-ratio:1.6}
.hb-lineText{padding:1rem}
.hb-browserLayout{display:block}
.hb-browserGrid{grid-template-columns:repeat(3,minmax(0,1fr))}
.hb-browserTools{grid-template-columns:minmax(0,1fr)}
/* Wrap chips deliberately: all choices stay visible and no discovery rail remains. */
.hb-browserChips{flex-wrap:wrap}
.hb-browserSearch{max-width:100%}
.hb-root .hb-pop.hb-productSheet{top:auto;bottom:0;width:100%;height:92dvh;max-height:92dvh;border-radius:20px 20px 0 0;transform:translateY(100%)}
.hb-root .hb-pop.hb-productSheet.opid{transform:none}
.hb-root .hb-popB.productSheet{display:block}
}
@media(max-width:599px){
.hb-browserGrid{grid-template-columns:repeat(2,minmax(0,1fr));gap:.8rem .35rem}
.hb-lineName{font-size:1.3rem}
.hb-lineText{padding:.75rem;gap:.5rem}
.hb-lineArt{aspect-ratio:1.1;padding:.7rem}
.hb-lineDesc{font-size:.8rem;line-height:1.45}
.hb-linePill{font-size:.75rem;padding:.5rem .6rem}
.hb-browserChips button,.hb-browserAvoid button{font-size:.8rem;padding:.5rem .7rem}
.hb-browserName{font-size:.85rem}
.hb-browserTile{contain-intrinsic-size:auto 290px}
}
.hb-scrollArrows{display:flex;justify-content:flex-end;align-items:center;gap:.5rem;margin:.5rem 0;font-size:.8rem}
.hb-scrollArrows[hidden]{display:none}
.hb-scrollArrows button{width:44px;height:44px;border:1px solid var(--c-lina);border-radius:50%;background:var(--c-bg);color:inherit;cursor:pointer;font-size:1.2rem}
/* Other data scrollers use wrapping or a visible, sized next item plus edge fades. */
.hb-root .hb-kortin{flex-wrap:wrap;overflow:visible;scroll-snap-type:none}
.hb-root .hb-nutTable,.hb-root .hb-allergenMatrix{overflow-x:auto;scrollbar-width:thin}
@media(max-width:760px){
.hb-root .hb-orderRail{mask-image:linear-gradient(90deg,transparent,#000 12px,#000 calc(100% - 22px),transparent);padding-inline:1rem 2rem;scrollbar-width:thin;scroll-snap-type:x proximity}
.hb-root .hb-orderRail button{max-width:72%;min-width:100px;white-space:normal;flex:0 0 40%;scroll-snap-align:start}
}
@media(prefers-reduced-motion:reduce){
.hb-root .hb-lineTile,.hb-root .hb-lineArt img,.hb-root .hb-lineTile::before,.hb-root .hb-browserTile,.hb-root .hb-browserArt img{transition:none!important;animation:none!important}
.hb-root .hb-lineTile:hover .hb-lineArt img,.hb-root .hb-browserTile:hover .hb-browserArt img{transform:none}
}

/* Claude 11-11: every section lands below the fixed header when jumped to. */
.hb-root section[id]{scroll-margin-top:calc(var(--haus-h,64px) + 1.25rem)}
@media(max-width:991px){.hb-browserTile[aria-selected=true]{border-color:transparent;background:transparent}.hb-browserTile[aria-selected=true] .hb-browserCheck{display:none}}
`,vf=`
@view-transition{navigation:auto}
::view-transition-old(root),::view-transition-new(root){animation-duration:260ms;animation-timing-function:ease-out}
.hb-pageHeader{padding:calc(var(--haus-h,100px) + 4rem) var(--page-gut,var(--gut)) 3rem}
.hb-pageHeader nav{display:flex;gap:.7rem;align-items:center;font-size:.85rem;margin-bottom:2.5rem}
.hb-pageHeader nav a{min-height:44px;display:inline-flex;align-items:center}
.hb-pageHeader h1{font-size:clamp(3rem,6.5vw,6rem);margin:0 0 1.2rem}
.hb-pageHeader p{margin:0;max-width:52ch}
.hb-route-products .hb-browser{padding-block:2.5rem 6rem}
.hb-root .hb-linesCompact{padding-block:0 1.5rem}
.hb-linesCompact>h2,.hb-linesCompact>p{display:none}
.hb-root .hb-linesCompact .hb-linesGrid{grid-template-columns:repeat(7,minmax(0,1fr));gap:.65rem}
.hb-root .hb-linesCompact .hb-lineTile{display:flex;grid-column:auto;grid-template-columns:none;text-decoration:none}
.hb-linesCompact .hb-lineArt{height:112px;aspect-ratio:auto;padding:.7rem}
.hb-linesCompact .hb-lineArt img{max-height:90px}
.hb-linesCompact .hb-lineText{padding:.75rem;gap:.4rem}
.hb-linesCompact .hb-lineName{font-size:clamp(1rem,1.35vw,1.35rem)}
.hb-linesCompact .hb-lineDesc,.hb-linesCompact .hb-linePill{display:none}
.hb-route-nutrition .hb-nutrition{padding:0 var(--page-gut,var(--gut)) 6rem}
.hb-route-nutrition .hb-nutTable{max-height:75dvh}
.hb-route-nutrition .hb-nutAdd .hb-sett{font-size:.75rem;width:auto;min-width:100px;padding:.5rem;white-space:nowrap}
.hb-route-nutrition .hb-nutAdd .hb-sett span{font-size:1rem}
.hb-teaser{padding:clamp(3rem,6vw,6rem) var(--page-gut,var(--gut));min-width:0}
.hb-teaser h2{margin:0 0 1rem;font-size:clamp(2.2rem,4.5vw,4.5rem)}
.hb-teaser>p{margin:0 0 2rem}
.hb-featured{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:1rem}
.hb-featured a{display:flex;flex-direction:column;gap:.8rem;min-width:0;text-decoration:none;font-size:.9rem}
.hb-featured a>span{display:grid;place-items:center;aspect-ratio:1;border-radius:12px;overflow:hidden}
.hb-featured img{width:85%;height:85%;object-fit:contain;transition:transform var(--motion-ui) var(--motion-out)}
.hb-featured b{line-height:1.4;overflow-wrap:anywhere}
.hb-teaserActions{display:flex;flex-wrap:wrap;gap:1rem;margin-top:2rem;align-items:center}
.hb-teaserActions a{min-height:48px;display:inline-flex;align-items:center;justify-content:center;gap:1rem;text-decoration:none}
.hb-root .hb-lineTile{text-decoration:none}
.hb-lineTile::before,.hb-featured a::before{display:none!important}
@media(hover:hover) and (pointer:fine){.hb-featured a:hover img{transform:translateY(-3%) scale(1.04)}}
@media(max-width:1100px){.hb-root .hb-linesCompact .hb-linesGrid{grid-template-columns:repeat(4,minmax(0,1fr))}}
@media(max-width:991px){.hb-featured{grid-template-columns:repeat(4,minmax(0,1fr))}.hb-featured a:nth-child(n+5){display:none}}
@media(max-width:599px){
.hb-pageHeader{padding-top:calc(var(--haus-h,80px) + 2rem);padding-bottom:2rem}
.hb-pageHeader nav{margin-bottom:1.5rem}
.hb-root .hb-linesCompact .hb-linesGrid{grid-template-columns:repeat(2,minmax(0,1fr))}
.hb-root .hb-linesCompact .hb-lineTile{display:flex;flex-direction:row;align-items:center}
.hb-linesCompact .hb-lineArt{width:35%;height:88px;flex:none;padding:.3rem}
.hb-linesCompact .hb-lineText{min-width:0;align-self:stretch;justify-content:center;padding:.5rem}
.hb-linesCompact .hb-lineName{font-size:1rem}.hb-linesCompact .hb-lineCount{font-size:.7rem}
.hb-featured{grid-template-columns:repeat(2,minmax(0,1fr));gap:1.25rem .8rem}
}
@media(prefers-reduced-motion:reduce){
::view-transition-old(root),::view-transition-new(root){animation:none!important}
.hb-featured img{transition:none}.hb-featured a:hover img{transform:none}
}

/* Claude 11-11: subpages are one tight flow; the homepage section gap and the duplicate line row do not apply here. */
.hb-route-products,.hb-route-nutrition,.hb-route-products main,.hb-route-nutrition main{row-gap:0!important}
.hb-route-products .hb-linesCompact{display:none}
.hb-route-products .hb-pageHeader,.hb-route-nutrition .hb-pageHeader{padding-bottom:1.25rem}
.hb-route-products .hb-browser{padding-block:1rem 6rem}
`;function kf(o){var u;(u=document.querySelector('meta[name="theme-color"]'))==null||u.setAttribute("content",o)}function yf({children:o,footer:u,css:s}){Wp(),Gp(),S.useEffect(()=>{document.documentElement.lang="is",kf(Jp.pappirHreint);const p=location.hash;p||window.scrollTo(0,0);const x=p?window.setTimeout(()=>en(p),Cr==="home"?2800:100):0;return()=>clearTimeout(x)},[]);const h=document.referrer&&new URL(document.referrer).origin===location.origin&&new URL(document.referrer).pathname.startsWith(ot);return i.jsxs("div",{className:`hb-root hb-route-${Cr}`,id:"top",children:[i.jsxs("style",{children:[qp,s,Ip,ef,nf,Tp,bp,ff,Hp,bf,vf]}),i.jsx(Qp,{}),i.jsx(Zp,{}),i.jsx(Kp,{}),i.jsx(Pp,{}),Cr==="home"&&!h&&i.jsx(tf,{}),i.jsx("main",{children:o}),u]})}function xf(o,u,s,h){const p=new URL(window.location.href);p.searchParams.delete("naering"),p.searchParams.set("rada",o==="energyKj"?"orka":o);for(const[x,k]of[["att",u?"nidur":""],["lina",s],["leit",h]])k?p.searchParams.set(x,k):p.searchParams.delete(x);window.history.replaceState(null,"",p)}const bc=o=>o.toLocaleLowerCase("is").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ð/g,"d").replace(/þ/g,"th").replace(/æ/g,"ae");function wf({sort:o="energyKj",line:u=""}){const s=S.useId(),[h,p]=S.useState(()=>Ho(new URLSearchParams(location.search).get("rada")??o)),[x,k]=S.useState(()=>new URLSearchParams(window.location.search).get("att")==="nidur"),[w,c]=S.useState(()=>{var L;return((L=_e.find(M=>M.s===new URLSearchParams(location.search).get("lina")))==null?void 0:L.s)??u}),[b,z]=S.useState(()=>new URLSearchParams(window.location.search).get("leit")??""),j=S.useRef(null),O=S.useRef(new Map),E=S.useRef([]),R=()=>{var L;D.current=!0,E.current.forEach(M=>M.cancel()),E.current=[],O.current.clear(),(L=j.current)==null||L.querySelectorAll("[data-nutrition-row]").forEach(M=>{M.getClientRects().length&&O.current.set(M.dataset.nutritionRow,M.getBoundingClientRect().top)})},H=_e.filter(L=>!w||L.s===w).flatMap(L=>L.items.map(M=>({v:M,group:L.t}))).filter(({v:L,group:M})=>bc(`${L.name.is} ${M}`).includes(bc(b.trim()))).sort((L,M)=>{const Y=Ko[L.v.slug][h],P=Ko[M.v.slug][h];return Y===null||P===null?Y===P?L.v.name.is.localeCompare(M.v.name.is,"is"):Y===null?1:-1:(Y-P)*(x?-1:1)||L.v.name.is.localeCompare(M.v.name.is,"is")}),D=S.useRef(!1),re=S.useRef(!1);S.useEffect(()=>{re.current&&D.current&&xf(h,x,w,b),re.current=!0},[h,x,w,b]),S.useEffect(()=>{const L=()=>{var Y;const M=new URLSearchParams(location.search);D.current=!1,p(Ho(M.get("rada"))),k(M.get("att")==="nidur"),c(((Y=_e.find(P=>P.s===M.get("lina")))==null?void 0:Y.s)??""),z(M.get("leit")??"")};return addEventListener("popstate",L),()=>removeEventListener("popstate",L)},[]),S.useEffect(()=>()=>E.current.forEach(L=>L.cancel()),[]),S.useLayoutEffect(()=>{var L;window.matchMedia("(prefers-reduced-motion: reduce)").matches||(L=j.current)==null||L.querySelectorAll("[data-nutrition-row]").forEach(M=>{const Y=O.current.get(M.dataset.nutritionRow);if(Y===void 0||!M.getClientRects().length)return;const P=Y-M.getBoundingClientRect().top;P&&E.current.push(M.animate([{transform:`translateY(${P}px)`},{transform:"translateY(0)"}],{duration:ye.panel,easing:ye.out}))}),O.current.clear()},[h,x,w,b]);const q=L=>{R(),p(L),k(h===L?!x:!1)},W=L=>i.jsxs("button",{className:"hb-nutProduct",onClick:()=>Ce.open({k:"vara",slug:L.slug}),children:[i.jsx("span",{className:"hb-nutThumb",style:{background:L.tint},children:L.hasPack?i.jsx("img",{src:ar(L.slug,"pack","s"),alt:"",loading:"lazy",width:"36",height:"44"}):i.jsx("span",{"aria-hidden":"true",children:L.name.is[0]})}),i.jsx("span",{children:L.name.is.replace(/[-–—]/g," ")})]}),X=L=>i.jsx("span",{className:"hb-nutAdd",children:i.jsx(yi,{slug:L})});return i.jsxs("div",{className:"hb-nutrition",ref:j,children:[i.jsx("p",{className:"hb-allergenDisclaimer",children:"Lestu alltaf á umbúðirnar. Hringdu í 565 6500 ef þú ert í vafa."}),i.jsxs("div",{className:"hb-nutTools",children:[i.jsxs("label",{htmlFor:`${s}-search`,children:["Leita að vöru",i.jsx("input",{id:`${s}-search`,type:"search",value:b,onChange:L=>{R(),z(L.target.value)},placeholder:"Nafn vöru"})]}),i.jsxs("label",{className:"hb-nutSort",htmlFor:`${s}-sort`,children:["Raða eftir",i.jsx("select",{id:`${s}-sort`,value:`${h}:${x?"desc":"asc"}`,onChange:L=>{R();const[M,Y]=L.target.value.split(":");p(Ho(M)),k(Y==="desc")},children:Qt.flatMap(L=>[i.jsxs("option",{value:`${L.key}:asc`,children:[L.title," ↑"]},`${L.key}:asc`),i.jsxs("option",{value:`${L.key}:desc`,children:[L.title," ↓"]},`${L.key}:desc`)])})]})]}),i.jsx("div",{className:"hb-nutChips",role:"group","aria-label":"Vörulínur",children:[{s:"",t:"Allar vörur"},..._e].map(L=>i.jsx("button",{"aria-pressed":w===L.s,onClick:()=>{R(),c(L.s)},children:L.t.replace(/[-–—]/g," ")},L.s))}),i.jsxs("p",{role:"status",children:[H.length," vörur"]}),!H.length&&i.jsx("p",{children:"Engar vörur fundust. Prófaðu annað leitarorð eða aðra vörulínu."}),i.jsx(Rc,{target:".hb-nutTable"}),i.jsx("div",{className:"hb-nutTable",children:i.jsxs("table",{children:[i.jsx("caption",{className:"hb-orderSr",children:"Næringargildi allra vara í 100 g. Orka í kJ og kkal, önnur gildi í grömmum."}),i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{scope:"col",children:"Vara"}),Qt.map(L=>i.jsx("th",{scope:"col",className:h===L.key?"sorted":"","aria-sort":h===L.key?x?"descending":"ascending":"none",children:i.jsxs("button",{onClick:()=>q(L.key),children:[L.title,i.jsx("span",{"aria-hidden":"true",children:h===L.key?x?" ↓":" ↑":" ↕"})]})},L.key)),i.jsx("th",{scope:"col",children:i.jsx("span",{className:"hb-orderSr",children:"Pöntun"})})]})}),i.jsx("tbody",{children:H.map(({v:L})=>i.jsxs("tr",{"data-nutrition-row":`table:${L.slug}`,children:[i.jsx("th",{scope:"row",children:W(L)}),Qt.map(M=>i.jsx("td",{className:h===M.key?"sorted":"",children:M.key==="energyKj"?i.jsxs(i.Fragment,{children:[Rn(L.slug,M.key).split(" / ")[0],i.jsx("small",{children:Rn(L.slug,M.key).split(" / ")[1]})]}):Rn(L.slug,M.key)},M.key)),i.jsx("td",{children:X(L.slug)})]},L.slug))})]})}),i.jsx("div",{className:"hb-nutCards",children:H.map(({v:L})=>i.jsxs("article",{"data-nutrition-row":`card:${L.slug}`,children:[i.jsxs("div",{className:"hb-nutCardHead",children:[W(L),X(L.slug)]}),i.jsx("dl",{children:Qt.map(M=>i.jsxs("div",{className:h===M.key?"sorted":"",children:[i.jsx("dt",{children:M.title}),i.jsx("dd",{children:Rn(L.slug,M.key)})]},M.key))})]},L.slug))})]})}const jf="https://sndrstudio.is",Sf=ot,Nf=`
@font-face {
  font-family: 'ProjektBlackbirdIS';
  src: url('${Sf}fonts/blackbird/ProjektBlackbirdIS.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
`;function Ef({dark:o=!1,className:u="",english:s=!1}){const h=o?"rgba(255,255,255,0.72)":"rgba(23,23,23,0.72)",p=o?"#FF8A3D":"#C4531B";return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Nf}),i.jsxs("a",{href:jf,target:"_blank",rel:"noreferrer","aria-label":s?"Designed by SNDR Studio":"Hannað af SNDR Studio","data-logotype":!0,className:`inline-flex min-h-11 items-center gap-2 ${u}`,children:[i.jsxs("span",{style:{fontFamily:"'ProjektBlackbirdIS', sans-serif",color:h,fontSize:"15px",letterSpacing:"0.02em"},children:["SN",i.jsx("span",{style:{color:p},children:"✦"}),"DR"]}),i.jsx("span",{style:{fontFamily:"'Geist Mono', ui-monospace, 'SF Mono', Menlo, monospace",color:h,fontSize:"10.5px",letterSpacing:"0.1em",opacity:.85},children:"STUDIO"})]})]})}const Xt=o=>o.replace(/[-–—]/g," "),vc=o=>o.toLocaleLowerCase("is").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ð/g,"d").replace(/þ/g,"th").replace(/æ/g,"ae"),Cf=["nuts","peanut","milk","gluten"],Ia=o=>_e.find(u=>u.items.some(s=>s.slug===o)),Uc=o=>{var u;return((u=_e.find(s=>s.s===o))==null?void 0:u.s)??""},_o=()=>{const o=new URLSearchParams(window.location.search);return{line:o.get("naering")==="1"?"":Uc(o.get("lina")),slug:o.get("vara")??""}},Tf={hnetur:"Heilar, brotnar og sneiddar hnetur í matinn eða sem millimál.",avextir:"Döðlur, apríkósur og fleiri ávextir í bakstur og nesti.",frae:"Fræ til að strá yfir, blanda út í og baka með.",smjor:"Hnetusmjör á brauðið, í sósur og í bakstur.",snakk:"Súkkulaðihjúpaðar hnetur og snakk fyrir litlar sælustundir.",bakstur:"Hráefni í bakstur og matargerð fyrir heimili og eldhús.",annad:"Fleira úr úrvalinu okkar, meðal annars fuglafóður."};function kc({compact:o=!1}){return i.jsxs("section",{className:`hb-lines${o?" hb-linesCompact":""}`,id:"linur","aria-labelledby":"hb-lines-title",children:[i.jsx("h2",{id:"hb-lines-title",className:"hb-disp",children:"Vörulínur"}),i.jsx("p",{children:"Veldu vörulínu og skoðaðu allar vörurnar í henni."}),i.jsx("div",{className:"hb-linesGrid",children:Nc.map(u=>{var h;const s=_e.find(p=>p.s===u.s).items.length;return i.jsxs("a",{href:We(`vorur/?lina=${u.s}`),className:"hb-lineTile",style:{background:((h=Ke(u.img))==null?void 0:h.tint)??u.g},onClick:p=>{o&&(p.preventDefault(),window.dispatchEvent(new CustomEvent("hb-browser-line",{detail:u.s})),en("#allar-vorur"))},children:[i.jsx("span",{className:"hb-lineArt",children:i.jsx("img",{src:ar(u.img,"pack","m"),alt:"",width:"400",height:"450",loading:"lazy",decoding:"async"})}),i.jsxs("span",{className:"hb-lineText",children:[i.jsx("span",{className:"hb-lineCount",children:Zt(s)}),i.jsx("span",{className:"hb-lineName",children:u.t}),i.jsx("span",{className:"hb-lineDesc",children:Tf[u.s]}),i.jsxs("span",{className:"hb-linePill",children:["Skoða ",Zt(s)," ",i.jsx("span",{"aria-hidden":"true",children:"↗"})]})]})]},u.s)})})]})}function Rf({v:o}){const u=S.useRef(null),s=S.useRef(null),h=S.useRef(null);return S.useLayoutEffect(()=>{const p=u.current,x=s.current,k=h.current;if(k&&!Tr()){k.setAttribute("aria-hidden","true"),k.setAttribute("inert",""),Object.assign(k.style,{position:"absolute",inset:"0",pointerEvents:"none"}),x.appendChild(k);const w=k.animate([{opacity:1},{opacity:0}],{duration:ye.ui,easing:ye.out,fill:"forwards"}),c=p.animate([{opacity:0},{opacity:1}],{duration:ye.ui,easing:ye.out});return w.onfinish=()=>k.remove(),h.current=p.cloneNode(!0),()=>{w.cancel(),c.cancel(),k.remove()}}h.current=p.cloneNode(!0)},[o.slug]),i.jsx("aside",{className:"hb-browserDetail","aria-label":"Valin vara",children:i.jsx("div",{className:"hb-detailLayers",ref:s,children:i.jsxs("div",{ref:u,children:[i.jsx("div",{className:"hb-detailArt",style:{background:o.tint},children:i.jsx("img",{src:ar(o.slug,"pack","m"),alt:Xt(o.name.is),width:"400",height:"450",loading:"lazy",decoding:"async"})}),i.jsx("p",{className:"hb-detailLine",children:Ia(o.slug).t}),i.jsx("h3",{children:Xt(o.name.is)}),Xt(o.desc.is)!==Ia(o.slug).t&&i.jsx("p",{children:Xt(o.desc.is)}),i.jsx("p",{className:"hb-detailAllergens",children:o.allergens===null?"Inniheldur: Upplýsingar vantar.":Jo(o)}),i.jsx("p",{className:"hb-detailBasis",children:"Næringargildi í 100 g"}),i.jsx("dl",{children:Qt.filter(p=>["energyKj","fat","carbohydrate","protein","salt"].includes(p.key)).map(p=>i.jsxs("div",{children:[i.jsx("dt",{children:p.title}),i.jsx("dd",{children:Rn(o.slug,p.key)})]},p.key))}),i.jsxs("button",{className:"hb-browserLink",onClick:()=>Ce.open({k:"naering",line:Ia(o.slug).s}),children:["Öll næringargildi ",i.jsx("span",{"aria-hidden":"true",children:"↗"})]}),i.jsxs("div",{className:"hb-detailActions",children:[i.jsx(yi,{slug:o.slug,label:"Setja á pöntunarlistann"},o.slug),i.jsxs("button",{className:"hb-browserSecondary",onClick:()=>Ce.open({k:"vara",slug:o.slug}),children:["Nánar ",i.jsx("span",{"aria-hidden":"true",children:"↗"})]})]}),i.jsx("p",{className:"hb-browserDisclaimer",children:"Lestu alltaf á umbúðirnar. Ónefndur ofnæmisvaldur þýðir ekki að vara sé laus við hann."})]})})})}function Pf(){const o=S.useId(),[u,s]=S.useState(()=>_o().line),[h,p]=S.useState(()=>_o().slug),[x,k]=S.useState(""),[w,c]=S.useState([]),[b,z]=S.useState(()=>window.matchMedia("(max-width:991px)").matches);S.useEffect(()=>{const P=new URLSearchParams(location.search).get("vara");window.matchMedia("(max-width:991px)").matches&&P&&Ke(P)&&Ce.open({k:"vara",slug:P})},[]);const j=S.useRef(null),O=S.useRef(!1),E=S.useRef(new Map),R=S.useRef([]),H=S.useRef([]),D=S.useRef(0),re=_e.filter(P=>!u||P.s===u).flatMap(P=>P.items).filter(P=>vc(`${P.name.is} ${Ia(P.slug).t}`).includes(vc(x.trim()))),q=re.filter(P=>!w.length||P.allergens!==null&&!P.allergens.some(Q=>w.includes(Q))),W=q.find(P=>P.slug===h)??q[0],X=()=>{R.current.forEach(P=>P.cancel()),R.current=[],H.current.forEach(P=>P.remove()),H.current=[]},L=()=>{var P;window.clearTimeout(D.current),X(),E.current.clear(),!Tr()&&((P=j.current)==null||P.querySelectorAll("[data-browser-product]").forEach(Q=>{const oe=Q.getBoundingClientRect();oe.bottom>0&&oe.top<innerHeight&&E.current.set(Q.dataset.browserProduct,{rect:oe,clone:Q.cloneNode(!0)})}))};S.useLayoutEffect(()=>{if(Tr()||!j.current){E.current.clear();return}const P=j.current,Q=P.getBoundingClientRect(),oe=new Set(q.map(le=>le.slug));E.current.forEach(({rect:le,clone:me},xe)=>{if(oe.has(xe))return;me.removeAttribute("data-browser-product"),me.removeAttribute("id"),me.setAttribute("aria-hidden","true"),me.setAttribute("inert",""),Object.assign(me.style,{position:"absolute",top:`${le.top-Q.top}px`,left:`${le.left-Q.left}px`,width:`${le.width}px`,height:`${le.height}px`,pointerEvents:"none",zIndex:"2"}),P.appendChild(me),H.current.push(me);const be=me.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(.98)"}],{duration:ye.ui,easing:ye.out,fill:"forwards"});be.onfinish=()=>me.remove(),R.current.push(be)}),P.querySelectorAll("[data-browser-product]").forEach(le=>{const me=le.getBoundingClientRect(),xe=E.current.get(le.dataset.browserProduct);if(me.bottom<=0||me.top>=innerHeight)return;const be=xe?[{transform:`translate(${xe.rect.left-me.left}px,${xe.rect.top-me.top}px)`},{transform:"translate(0,0)"}]:[{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"translateY(0)"}];R.current.push(le.animate(be,{duration:ye.panel,easing:ye.out}))}),E.current.clear()},[u,x,w]),S.useEffect(()=>{W&&W.slug!==h&&p(W.slug)},[W==null?void 0:W.slug,h]),S.useEffect(()=>{const P=new URL(window.location.href);P.searchParams.get("naering")!=="1"&&O.current&&(u?P.searchParams.set("lina",u):P.searchParams.delete("lina"),h?P.searchParams.set("vara",h):P.searchParams.delete("vara"),window.history.replaceState(null,"",P))},[u,h]),S.useEffect(()=>{const P=window.matchMedia("(max-width:991px)"),Q=()=>{window.clearTimeout(D.current),z(P.matches)},oe=me=>{O.current=!0,L(),s(Uc(me.detail)),k(""),c([]),p("")},le=()=>{if(new URLSearchParams(location.search).get("naering")==="1")return;O.current=!1,L();const me=_o();s(me.line),p(me.slug),k(""),c([])};return P.addEventListener("change",Q),window.addEventListener("hb-browser-line",oe),window.addEventListener("popstate",le),()=>{P.removeEventListener("change",Q),window.removeEventListener("hb-browser-line",oe),window.removeEventListener("popstate",le),window.clearTimeout(D.current),X()}},[]);const M=P=>{window.clearTimeout(D.current),p(P.slug),b&&Ce.open({k:"vara",slug:P.slug})},Y=(P,Q)=>{var me,xe,be,Re;const oe=getComputedStyle(j.current).gridTemplateColumns.split(" ").length;let le=Q;if(P.key==="ArrowRight")le++;else if(P.key==="ArrowLeft")le--;else if(P.key==="ArrowDown")le+=oe;else if(P.key==="ArrowUp")le-=oe;else if(P.key==="Home")le=0;else if(P.key==="End")le=q.length-1;else if(P.key==="Enter"||P.key===" "){P.preventDefault(),M(q[Q]),b||Ce.open({k:"vara",slug:q[Q].slug});return}else return;P.preventDefault(),window.clearTimeout(D.current),le=Math.max(0,Math.min(q.length-1,le)),p(q[le].slug),(xe=(me=j.current)==null?void 0:me.querySelectorAll("[data-browser-product]")[le])==null||xe.focus({preventScroll:!0}),(Re=(be=j.current)==null?void 0:be.querySelectorAll("[data-browser-product]")[le])==null||Re.scrollIntoView({block:"nearest",behavior:"instant"})};return i.jsxs("section",{className:"hb-browser",id:"allar-vorur","aria-labelledby":`${o}-title`,onPointerDown:()=>{O.current=!0},onKeyDown:()=>{O.current=!0},children:[i.jsx("h2",{id:`${o}-title`,className:"hb-orderSr",children:"Allar vörur"}),i.jsxs("div",{className:"hb-browserTools",children:[i.jsx("div",{className:"hb-browserChips",role:"group","aria-label":"Vörulínur",children:[{s:"",t:"Allar",items:vr},..._e].map(P=>i.jsxs("button",{"aria-pressed":u===P.s,onClick:()=>{L(),s(P.s),p("")},children:[P.t," ",i.jsx("span",{children:P.items.length})]},P.s))}),i.jsxs("label",{className:"hb-browserSearch",htmlFor:`${o}-search`,children:["Leita að vöru",i.jsx("input",{id:`${o}-search`,type:"search",value:x,placeholder:"Nafn eða vörulína",onChange:P=>{L(),k(P.target.value),p("")}})]}),i.jsxs("div",{className:"hb-browserAvoid",role:"group","aria-label":"Fela vörur með ofnæmisvöldum",children:[i.jsx("span",{children:"Án:"}),Cf.map(P=>i.jsxs("button",{"aria-pressed":w.includes(P),onClick:()=>{L(),c(Q=>Q.includes(P)?Q.filter(oe=>oe!==P):[...Q,P]),p("")},children:[w.includes(P)&&i.jsx("span",{"aria-hidden":"true",children:"✓ "}),Ua(P).toLocaleLowerCase("is")]},P))]})]}),i.jsxs("div",{className:"hb-browserStatus",children:[i.jsxs("p",{role:"status",children:[Zt(q.length),w.length>0&&` · Falið vegna ofnæmisvals eða ófullnægjandi upplýsinga: ${Zt(re.length-q.length)}`]}),i.jsx("span",{className:"hb-browserHint",id:`${o}-hint`,children:b?"Veldu vöru til að sjá nánar.":"Örvatakkar velja vöru. Enter opnar nánar."})]}),w.length>0&&i.jsx("p",{className:"hb-browserDisclaimer",children:"Valið byggir á skráðu innihaldi. Lestu alltaf á umbúðirnar. Ónefndur ofnæmisvaldur þýðir ekki að vara sé laus við hann."}),!q.length&&i.jsxs("p",{children:["Engar vörur fundust. ",i.jsx("button",{className:"hb-browserLink",onClick:()=>{L(),s(""),k(""),c([])},children:"Sýna allar vörur"})]}),i.jsxs("div",{className:"hb-browserLayout",children:[i.jsx("div",{className:"hb-browserGrid",ref:j,role:"listbox","aria-label":"Vörur","aria-describedby":`${o}-hint`,children:q.map((P,Q)=>i.jsxs("button",{"data-browser-product":P.slug,className:"hb-browserTile",role:"option","aria-selected":(W==null?void 0:W.slug)===P.slug,tabIndex:(W==null?void 0:W.slug)===P.slug?0:-1,"aria-label":Xt(P.name.is),onKeyDown:oe=>Y(oe,Q),onClick:()=>M(P),onPointerEnter:oe=>{var le,me;b||oe.pointerType!=="mouse"||!matchMedia("(hover:hover) and (pointer:fine)").matches||(le=j.current)!=null&&le.contains(document.activeElement)&&((me=document.activeElement)!=null&&me.matches(":focus-visible"))||(window.clearTimeout(D.current),D.current=window.setTimeout(()=>p(P.slug),120))},onPointerLeave:()=>window.clearTimeout(D.current),children:[i.jsxs("span",{className:"hb-browserArt",style:{background:P.tint},children:[i.jsx("img",{src:ar(P.slug,"pack","s"),alt:"",width:"240",height:"270",loading:"lazy",decoding:"async"}),i.jsx("span",{className:"hb-browserCheck","aria-hidden":"true",children:"✓"})]}),i.jsx("span",{className:"hb-browserName",children:Xt(P.name.is)}),i.jsx(_a,{p:P})]},P.slug))}),W&&!b&&i.jsx(Rf,{v:W})]})]})}function Ff(){return i.jsxs("section",{className:"hb-teaser",id:"allar-vorur","aria-labelledby":"hb-teaser-title",children:[i.jsx("h2",{className:"hb-disp",id:"hb-teaser-title",children:"Allt H-Berg í einni hillu"}),i.jsx("p",{children:"57 vörur í sjö vörulínum, með innihaldi, ofnæmisvöldum og næringargildi."}),i.jsx("div",{className:"hb-featured",children:["mondlur","aprikosur-2","chia-frae-2","hnetusmjor","orkustykki","kasjusmjor-2"].map(o=>{const u=Ke(o);return i.jsxs("a",{href:We(`vorur/?vara=${o}`),children:[i.jsx("span",{style:{background:u.tint},children:i.jsx("img",{src:ar(o,"pack","s"),alt:"",width:"240",height:"270",loading:"lazy"})}),i.jsx("b",{children:Xt(u.name.is)})]},o)})}),i.jsxs("div",{className:"hb-teaserActions",children:[i.jsxs("a",{className:"hb-btn",href:We("vorur/"),children:["Skoða allar vörur ",i.jsx("span",{"aria-hidden":"true",children:"↗"})]}),i.jsxs("a",{className:"hb-browserSecondary",href:We("naeringargildi/"),children:["Næringargildi ",i.jsx("span",{"aria-hidden":"true",children:"↗"})]})]})]})}const Lf=`
.hb-ofn .hb-quiz {
  align-items: start;
  gap: clamp(1rem, 2vw, 2rem);
}
.hb-ofn .hb-flipar {
  display: block;
}
.hb-ofn .hb-formP {
  min-width: 0;
}
.hb-ofn h2 {
  margin: 0;
}
.hb-allergenChoices {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
  margin: 1.25rem 0 0.5rem;
}
.hb-allergenChoices button {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  min-width: 0;
  min-height: 48px;
  padding: 0.65rem 0.7rem;
  border: 1px solid #172d4d70;
  border-radius: 8px;
  background: transparent;
  color: #172d4d;
  font: inherit;
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
}
.hb-allergenChoices svg {
  flex: none;
}
.hb-allergenChoices button > span:last-child {
  margin-left: auto;
}
.hb-allergenChoices button[aria-pressed="true"] {
  background: #172d4d;
  color: #fff;
  border-color: #172d4d;
}
.hb-allergenClear {
  min-height: 44px;
  padding: 0.5rem 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
  text-align: left;
}
.hb-allergenNote,
.hb-allergenDisclaimer {
  font-size: 1rem;
  line-height: 1.5;
  margin: 1rem 0;
  max-width: 65ch;
}
.hb-allergenDisclaimer {
  padding: 1rem;
  border: 1px solid currentColor;
  border-radius: 8px;
  font-weight: 500;
}
.hb-allergenAnswer {
  min-width: 0;
  color: #172d4d;
}
.hb-allergenCount {
  font-size: 1rem;
  line-height: 1.5;
  margin: 0 0 1rem;
}
.hb-allergenGroup {
  border: 1px solid #172d4d45;
  border-radius: 10px;
  padding: 1rem;
  background: #ffffff60;
  margin-bottom: 1.25rem;
}
.hb-allergenGroup h3 {
  font-family: var(--f-disp);
  font-size: clamp(1.2rem, 1.7vw, 1.6rem);
  line-height: 1.25;
  margin: 0;
  overflow-wrap: anywhere;
}
.hb-allergenGroup h3 > span {
  display: inline-grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: #dbe8d6;
  color: #1d442b;
  font-family: inherit;
  font-size: 1.1rem;
}
.hb-allergenGroup.warning h3 > span {
  background: #f6dbc1;
  color: #653500;
}
.hb-allergenGroup > p {
  margin: 0.65rem 0;
}
.hb-allergenResults,
.hb-allergenMobile ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.5rem;
}
.hb-allergenCard {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  width: 100%;
  min-width: 0;
  padding: 0.5rem;
  border: 1px solid #172d4d25;
  border-radius: 8px;
  background: #fff9;
  color: #172d4d;
  text-align: left;
  font: inherit;
  cursor: pointer;
}
.hb-allergenPack {
  display: grid;
  place-items: center;
  border-radius: 6px;
  flex: none;
  width: 72px;
  height: 84px;
}
.hb-allergenPack img {
  object-fit: contain;
  width: 64px;
  height: 76px;
}
.hb-allergenName {
  display: grid;
  gap: 0.4rem;
  min-width: 0;
}
.hb-allergenName strong {
  font-size: 1rem;
  line-height: 1.3;
  overflow-wrap: anywhere;
}
.hb-allergenContains {
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.4;
}
.hb-allergenBadges {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  line-height: 1.4;
}
.hb-allergenBadges > span {
  display: inline-block;
  border: 1px solid currentColor;
  border-radius: 4px;
  padding: 2px 5px;
  font-size: 0.75rem;
  font-weight: 500;
}
.hb-allergenBadges > span.selected {
  font-weight: 700;
  background: #172d4d;
  color: white;
  border-color: #172d4d;
}
.hb-allergenFlow {
  animation: hb-allergenIn 0.22s ease-out;
}
@keyframes hb-allergenIn {
  from {
    opacity: 0.25;
    transform: translateY(5px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
.hb-allergenBlock {
  padding: 1rem;
  border: 2px solid var(--c-ink);
  border-radius: 8px;
  margin: 1.25rem 0;
  line-height: 1.6;
}
.hb-allergenBlock > strong {
  font-size: 1.15rem;
  display: block;
}
.hb-allergenBlock mark {
  background: #f2dfa3;
  color: #172d4d;
  font-weight: 700;
  padding: 0 0.12em;
}
.hb-allergenBlock .hb-allergenDisclaimer {
  border: 0;
  padding: 0;
  margin-bottom: 0;
}
.hb-allergenFilter {
  display: grid;
  gap: 0.5rem;
  margin: 1rem 0;
  font-weight: 700;
}
.hb-allergenFilter select {
  min-height: 48px;
  padding: 0.6rem;
  font: inherit;
  font-size: 16px;
  background: var(--c-bg);
  color: var(--c-ink);
  border: 1px solid currentColor;
  border-radius: 6px;
  width: 100%;
}
.hb-pop:has(.hb-allergenMatrix) {
  width: min(1100px, 100vw);
}
.hb-allergenMatrix {
  overflow: auto;
  max-height: 65dvh;
  isolation: isolate;
  border: 1px solid var(--c-lina);
  margin: 1rem 0;
}
.hb-allergenMatrix table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 0.85rem;
}
.hb-allergenMatrix th,
.hb-allergenMatrix td {
  padding: 0.65rem 0.5rem;
  border-bottom: 1px solid var(--c-lina);
  text-align: center;
}
.hb-allergenMatrix thead th {
  position: sticky;
  top: 0;
  z-index: 3;
  background: var(--c-bg);
  font-weight: 700;
}
.hb-allergenMatrix th:first-child {
  position: sticky;
  left: 0;
  z-index: 2;
  background: var(--c-bg);
  min-width: 180px;
  text-align: left;
}
.hb-allergenMatrix thead th:first-child {
  z-index: 4;
}
.hb-allergenMatrix .hb-allergenLine {
  background: var(--c-el);
  font-weight: 700;
}
.hb-allergenMatrix button,
.hb-allergenMobile button {
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  min-height: 44px;
  width: 100%;
  cursor: pointer;
}
.hb-allergenMatrix td {
  font-size: 1.1rem;
}
.hb-allergenMobile {
  display: none;
}
@media (max-width: 600px) {
  .hb-allergenMatrix {
    display: none;
  }
  .hb-allergenMobile {
    display: block;
  }
  .hb-allergenMobile section {
    margin: 1.5rem 0;
  }
  .hb-allergenMobile li {
    border-bottom: 1px solid var(--c-lina);
  }
  .hb-allergenMobile button {
    display: grid;
    gap: 0.5rem;
    padding: 0.85rem 0;
  }
  .hb-allergenGroup {
    padding: 0.75rem;
  }
  .hb-allergenCard {
    gap: 0.6rem;
    padding: 0.4rem;
  }
  .hb-allergenChoices {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (prefers-reduced-motion: reduce) {
  .hb-allergenFlow {
    animation: none;
  }
}
`,xi=ot,_c=o=>ar(o,"pack","m"),Ba=o=>o.startsWith("laus:")?`${xi}hberg/laus/${o.slice(5)}.webp${br}`:o.startsWith("hero:")?`${xi}hberg/hero/${o.slice(5)}.webp${br}`:ar(o,"pack","s");function zf(o,u,s,h){const p=3*o,x=3*(s-o)-p,k=1-p-x,w=3*u,c=3*(h-u)-w,b=1-w-c,z=E=>((k*E+x)*E+p)*E,j=E=>((b*E+c)*E+w)*E,O=E=>(3*k*E+2*x)*E+p;return E=>{if(E<=0)return 0;if(E>=1)return 1;let R=E;for(let H=0;H<6;H++){const D=z(R)-E,re=O(R);if(Math.abs(D)<1e-4||!re)break;R-=D/re}return j(Math.min(1,Math.max(0,R)))}}const Of=zf(.17,.17,.255,.902);function Mf(o,u=[]){const s=S.useRef(null);return S.useEffect(()=>{const h=s.current;if(!h)return;let p=0;const x=()=>{p=0,o(h)},k=()=>{p||(p=requestAnimationFrame(x))};return x(),window.addEventListener("scroll",k,{passive:!0}),window.addEventListener("resize",k),()=>{window.removeEventListener("scroll",k),window.removeEventListener("resize",k),cancelAnimationFrame(p)}},u),s}const Hf=`
@media(prefers-reduced-motion:reduce){
.hb-bendill{display:none!important}.hb-up,.hb-lina{transform:none!important}
}

.hb-reit img{filter:drop-shadow(0 18px 16px rgba(20,12,8,.30)) drop-shadow(0 3px 3px rgba(20,12,8,.25))}
.hb-spjaldM img{filter:drop-shadow(0 34px 30px rgba(20,12,8,.30)) drop-shadow(0 4px 4px rgba(20,12,8,.22))}
@media(hover:hover) and (pointer:fine){.hb-spjaldM:hover img.nu{transform:translateY(-3%)}}

@media (hover:none),(pointer:coarse){
  .hb-reit img,.hb-spjaldM img,.hb-galI img,.hb-lina2 figure img,.hb-faqM img,.hb-vMynd img,.hb-regn img{filter:none !important}
}

.hb-heroP{position:relative}

/* Svífandi hnetur (setningin): lausar hnetur sem lyftast og snúast hægt. */
.hb-svif{position:absolute;inset:0;z-index:-1;pointer-events:none}
.hb-svif > span{position:absolute;width:var(--s);aspect-ratio:1}
.hb-svif img{width:100%;height:100%;object-fit:contain;rotate:var(--r);animation:hbSvif var(--t) ease-in-out var(--w) infinite alternate;
  filter:drop-shadow(0 10px 12px rgba(40,24,10,.18))}
@keyframes hbSvif{from{translate:0 -10px;rotate:var(--r)}to{translate:0 12px;rotate:calc(var(--r) + 14deg)}}
.hb-hero{isolation:isolate;overflow:hidden;--mx:0;--my:0}
.hb-svifH{z-index:0;opacity:.42;clip-path:polygon(50% 0,100% 0,100% 100%,50% 100%)}.hb-heroT,.hb-rist{position:relative;z-index:1}.hb-hero::before{content:"";position:absolute;inset:0 0 0 50%;z-index:-1;background:var(--c-el)}.hb-hero .hb-rist{background:transparent}.hb-svifH > span{width:calc(var(--s) * .8)}.hb-svifH > span:nth-child(2n){filter:blur(1px) saturate(.65);opacity:.85}
.hb-svifH > span{transform:translate3d(calc(var(--mx) * var(--d) * -5px),calc(var(--my) * var(--d) * -4px),0) rotate(calc(var(--mx) * var(--d) * 2deg));will-change:transform}
@media (max-width:991px){.hb-hero::before{display:none}.hb-hero .hb-rist{background:var(--c-el)}.hb-svifH{clip-path:inset(0 0 92% 50%)}.hb-svifH > span:nth-child(n+3){display:none}.hb-svifH > span{top:4%!important;left:85%!important}.hb-svifH > span:nth-child(2){left:95%!important;top:2%!important}}
@media (max-width:479px){.hb-svif > span{width:calc(var(--s) * 1.2)}.hb-svifS{display:none}}
@media (prefers-reduced-motion:reduce){.hb-svif img{animation:none}.hb-svifH > span{transform:none;will-change:auto}}

/* Hero 30.10: upprunalega uppsetningin, betur gerð. Ferkantaðir reitir með vörumynd á eigin lit. */
.hb-hero .hb-heroT h1{font-size:clamp(2.6rem,5vw,6rem);font-weight:400;letter-spacing:-.012em;line-height:1.04}
.hb-heroT h1 .hb-mask{padding-bottom:.05em}
.hb-heroNe{margin-top:auto;display:grid;gap:1.4rem;max-width:36rem}
.hb-heroNe .hb-heroSlag{margin:0;font-size:clamp(1rem,1.15vw,1.15rem);line-height:1.5}
.hb-heroCta{margin:-8px;padding:8px}
.hb-heroCta > div{display:flex;flex-wrap:wrap;gap:.6rem}
.hb-reit{border:0;padding:0;cursor:pointer;border-radius:18px;
  transition:transform var(--motion-reveal) var(--motion-out)}
.hb-reit img{scale:1!important;filter:none!important;inset:auto!important;left:3%!important;top:50%!important;width:94%!important;height:auto!important;
  aspect-ratio:1;translate:0 -50%;object-fit:cover;
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent),linear-gradient(180deg,transparent,#000 8%,#000 92%,transparent);
  -webkit-mask-composite:source-in;mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent),linear-gradient(180deg,transparent,#000 8%,#000 92%,transparent);mask-composite:intersect}
@media (hover:hover) and (pointer:fine){
  .hb-reit:hover{transform:translateY(-4px);box-shadow:0 22px 34px -24px rgba(40,24,10,.5)}
  .hb-rist.on .hb-reit:hover img{transform:translateY(-2%) scale(1.03)!important;transition:transform var(--motion-reveal) var(--motion-out)!important}
}
@media (max-width:991px){.hb-heroNe{margin-top:2rem}}
@media (max-width:479px){.hb-heroCta .hb-btn{flex:1 1 100%;justify-content:center}}

/* Vörumyndir 30.10: ógegnsæjar myndir á eigin lit, enginn skuggi utan um ferninginn. */
.hb-spjaldM img,.hb-galI img,.hb-lina2 figure img,.hb-faqM img{filter:none!important;inset:0!important;width:100%!important;height:100%!important;object-fit:contain}
/* Ferningsmynd í óferningslaga reit: mjúkar brúnir svo hún renni inn í litinn. */
.hb-faqM img,.hb-spjaldM img,.hb-lina2 figure img,.hb-umM img{
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent),linear-gradient(180deg,transparent,#000 7%,#000 93%,transparent);
  -webkit-mask-composite:source-in;mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent),linear-gradient(180deg,transparent,#000 7%,#000 93%,transparent);
  mask-composite:intersect}
.hb-hero{height:min(100svh,62.5vw);min-height:34rem;display:grid;grid-template-columns:1fr 1fr;position:relative;background:var(--c-bg)}

.hb-heroT{display:flex;flex-direction:column;padding:max(clamp(2rem,12.96vh,12rem),calc(clamp(0.5rem,2.0833vw,2.5rem) + 56px + 1.5rem)) var(--gut) var(--gut) var(--gut)}
.hb-heroT h1{font-size:clamp(1.5rem,4.17vw,5.25rem)}
.hb-heroAr{color:var(--c-rautt)}
.hb-heroSlag{margin-top:auto;font-size:.86rem;color:var(--c-ink)}
.hb-rist{background:var(--c-el);display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(3,1fr);
  gap:clamp(0.5rem,1.04vw,2.5rem);padding:clamp(2rem,14.72svh,12rem) var(--gut) clamp(1rem,5svh,6rem) clamp(0.5rem,3.75vw,2.5rem);height:100%}
.hb-reit{margin:0;overflow:hidden;position:relative;background:var(--grunnur)}
.hb-reit img{position:absolute;inset:10% 9%;width:82%;height:80%;object-fit:contain;scale:var(--k,1);filter:drop-shadow(0 14px 18px rgba(28,18,12,.28))}
.hb-rist:not(.on) .hb-reit img{transform:translateY(125%)}
.hb-reit:nth-child(1){grid-area:1/1/2/2}.hb-reit:nth-child(2){grid-area:1/2/2/3}
.hb-reit:nth-child(3){grid-area:2/2/3/3}.hb-reit:nth-child(4){grid-area:2/3/3/4}
.hb-reit:nth-child(5){grid-area:2/4/3/5}.hb-reit:nth-child(6){grid-area:3/1/4/2}
.hb-reit:nth-child(7){grid-area:3/2/4/3}
@media (max-width:991px){
  .hb-hero{height:auto;min-height:0;grid-template-columns:1fr}
  .hb-heroT{padding:calc(var(--haus-h,60px) + clamp(1rem,9.091vh,6rem)) var(--gut) clamp(0.5rem,2.604vw,2.5rem)}
  .hb-heroT h1{font-size:clamp(1.5rem,7.292vw,5.25rem)}
  .hb-heroSlag{margin-top:2rem}
  .hb-rist{grid-template-columns:repeat(3,1fr);grid-template-rows:none;padding:clamp(0.5rem,2.604vw,2.5rem);height:auto}
  .hb-reit{aspect-ratio:3/4}
  .hb-reit:nth-child(n){grid-area:auto}
  .hb-reit:nth-child(1){grid-column:1}.hb-reit:nth-child(2){grid-column:2}
  .hb-reit:nth-child(3){grid-column:2}.hb-reit:nth-child(4){grid-column:3}
  .hb-reit:nth-child(5){display:none}
  .hb-reit:nth-child(6){grid-column:1}.hb-reit:nth-child(7){grid-column:2}
}
@media (max-width:479px){
  .hb-heroT{padding:calc(var(--haus-h,60px) + clamp(2rem,16vw,12rem)) var(--gut) clamp(1rem,5.556vw,6rem)}
  .hb-heroT h1{font-size:clamp(2.25rem,min(13.333vw,3.4rem),6rem)}
  .hb-rist{padding:clamp(0.5rem,2.778vw,2.5rem)}
}


.hb-tilvS{display:flex;justify-content:center;position:relative;isolation:isolate;padding:clamp(2rem,10vh,12rem) 0}
.hb-setning{width:56.6146vw;text-align:center}
@media (max-width:991px){.hb-setning{width:80.078vw}}
@media (max-width:479px){.hb-setning{width:auto;text-align:left;padding:0 var(--gut)}}
.hb-setL{display:block}
.hb-setL span{margin:0 .08em}
.hb-bitiM{display:inline-block;vertical-align:middle;width:calc(.81em * var(--b,1));height:.72em;
  overflow:hidden;position:relative;margin:0 .12em .12em;background:var(--grunnur)}
.hb-bitiM img{position:absolute;inset:6%;width:88%;height:88%;object-fit:contain;
  transform:translateY(115%);transition:transform var(--motion-reveal) var(--motion-out)}
.hb-bitiM img.nu{transform:none}
.hb-bitiM img.farin{transform:translateY(-115%)}


.hb-vorur{display:grid;grid-template-columns:1fr 1fr;height:100svh}
.hb-spjald{position:relative;display:flex;flex-direction:column;padding:var(--gut);overflow:hidden;background:var(--c-el)}
.hb-spjald:nth-child(2){background:var(--c-el2)}
.hb-spjaldM{position:relative;flex:1;overflow:hidden;cursor:pointer}
.hb-spjaldM img{position:absolute;inset:8% 10%;width:80%;height:84%;object-fit:contain;
  filter:drop-shadow(0 28px 34px rgba(28,18,12,.28));transform:translateY(130%);transition:transform var(--motion-reveal) var(--motion-out)}
.hb-spjaldM img.nu{transform:none}
.hb-spjaldM img.farin{transform:translateY(-130%)}
.hb-spjald:not(.on) .hb-spjaldM img.nu{transform:translateY(130%)}
.hb-root.hb-allt .hb-spjaldM img.nu{transform:none}
.hb-stika{display:grid;grid-template-columns:minmax(0,1fr) auto auto;gap:1.2rem;align-items:end;padding-top:1rem}
.hb-stika small{display:block;color:var(--c-ink-med);font-size:.78rem}
.hb-stika b{display:block;font-family:var(--f-disp);font-weight:600;font-size:clamp(1.1rem,1.9vw,2.5rem);letter-spacing:-.01em;line-height:1.05}
.hb-stika .hb-pk{font-size:.86rem;font-variant-numeric:tabular-nums}
.hb-lit{display:flex;flex-direction:column;gap:.4rem}
.hb-lit div{display:flex;gap:.25rem}
.hb-lit button{width:28px;height:28px;border:0;background:none;padding:0;cursor:pointer;display:grid;place-items:center}
.hb-lit button::before{content:'';width:16px;height:16px;border-radius:50%;background:var(--l);
  box-shadow:0 0 0 1.5px var(--c-bg),0 0 0 2.5px transparent;transition:none}
.hb-lit button[aria-pressed="true"]::before{box-shadow:0 0 0 2px var(--c-bg),0 0 0 3px var(--c-ink)}
.hb-takkar{display:flex;gap:.4rem}
.hb-takkar .hb-sett{background:var(--c-btn);color:var(--c-btn-t)}
@media (max-width:991px){
  .hb-vorur{grid-template-columns:1fr;height:auto}
  .hb-spjald{height:calc(100svh - 10.416vw)}
  .hb-stika b{font-size:clamp(1.1rem,3.6vw,2.5rem)}
}
@media (max-width:479px){
  .hb-spjald{height:calc(100svh - 22.223vw)}
  .hb-stika{grid-template-columns:1fr auto;row-gap:.8rem}
  .hb-stika b{font-size:clamp(1.5rem,7vw,5.25rem)}
  .hb-takkar{grid-column:1/-1}
  .hb-takkar > *{flex:1}
}


.hb-kostir{display:flex;flex-direction:column;row-gap:clamp(1rem,6.4815vh,6rem);padding:0 var(--gut)}
.hb-tolur{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--col)}
.hb-tala{background:var(--g);border-radius:24px;min-height:min(26vw,24rem);position:relative}
.hb-tala > div{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between;padding:clamp(1rem,1.6vw,1.8rem)}
.hb-tala b{font-family:var(--f-disp);font-weight:800;font-size:clamp(3rem,6.4vw,7rem);line-height:1;letter-spacing:-.01em;color:#1d2a40}
.hb-tala span{max-width:16ch;font-size:clamp(.95rem,1.1vw,1.15rem);line-height:1.3;color:#1d2a40;position:relative;z-index:1}
.hb-tala img{position:absolute;right:-6%;bottom:-8%;width:44%;rotate:-14deg;transition:rotate var(--motion-reveal) var(--motion-out),translate var(--motion-reveal) var(--motion-out);
  filter:drop-shadow(0 12px 14px rgba(40,24,10,.22))}
@media (hover:hover) and (pointer:fine){.hb-tala:hover img{rotate:12deg;translate:-6% -10%}}
@media (max-width:991px){.hb-tolur{grid-template-columns:1fr 1fr}.hb-tala{min-height:44vw}}
@media (max-width:479px){.hb-tolur{grid-template-columns:1fr}.hb-tala{min-height:52vw}.hb-tala img{width:30%}.hb-tala span{max-width:62%}}

.hb-kortin{display:flex;justify-content:space-between;gap:var(--col)}
.hb-kort{width:31.25vw;height:30.625vw;background:var(--c-el);position:relative;overflow:hidden}
.hb-kort:nth-child(2){background:var(--c-el3)}
.hb-kort > div{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between;padding:clamp(0.5rem,1.25vw,2.5rem)}
.hb-kort small{font-size:.8rem;color:var(--c-ink-med)}
.hb-kort h3{margin:0;font-weight:700;overflow-wrap:break-word;text-align:center;font-family:var(--f-disp);font-size:clamp(1.1rem,2.08vw,2.5rem);line-height:1.05;letter-spacing:-.01em;padding:0 8%}
.hb-kort i{font-style:normal;font-size:.8rem;font-variant-numeric:tabular-nums}
@media (max-width:991px){
  .hb-kostir{row-gap:clamp(0.5rem,2.273vh,2.5rem)}
  .hb-kortin{overflow-x:auto;scroll-snap-type:x mandatory;margin:0 calc(var(--gut) * -1);padding:0 var(--gut);scrollbar-width:none}
  .hb-kortin::-webkit-scrollbar{display:none}
  .hb-kort{flex:0 0 41.797vw;height:41.797vw;scroll-snap-align:start}
  .hb-kort h3{font-size:clamp(1.1rem,3.255vw,2.5rem)}
}
@media (max-width:479px){
  .hb-kostir{row-gap:clamp(0.5rem,3.125vh,2.5rem)}
  .hb-kortin{flex-direction:column;overflow:visible;margin:0;padding:0;gap:clamp(0.5rem,2.778vw,2.5rem)}
  .hb-kort{width:100%;flex:none;height:94.444vw}
  .hb-kort h3{font-size:clamp(1.5rem,7.4vw,5.25rem)}
  .hb-kort > div{padding:clamp(1rem,4vw,6rem)}
}


.hb-form{padding:0 var(--gut)}
.hb-flipar{display:flex;gap:clamp(0.5rem,2.5vw,2.5rem);align-items:baseline;margin-bottom:1.4rem;flex-wrap:wrap}
.hb-flipar button{border:0;background:none;padding:0;cursor:pointer;color:var(--c-ink-max);transition:none}
.hb-flipar button[aria-selected="true"]{color:var(--c-ink)}
.hb-flipar button::before{content:'';display:inline-block;width:.18em;height:.18em;border-radius:50%;background:currentColor;
  margin-right:.25em;vertical-align:.32em}
.hb-formP{background:var(--c-el);padding:clamp(0.5rem,1.6vw,2.5rem);display:grid;gap:1rem}
.hb-quiz{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:.35rem;align-items:stretch}
.hb-quizQ{margin:0 0 .8rem}
.hb-svar{background:var(--c-form);color:#172D4D;display:flex}
.hb-svarI{padding:clamp(0.5rem,1.6vw,2.5rem);display:flex;flex-direction:column;align-items:flex-start;gap:.9rem;width:100%;
  animation:hb-svarinn .45s var(--ease) both}
.hb-svarI.tomt{justify-content:center}
@keyframes hb-svarinn{from{transform:translateY(12px);opacity:0}to{transform:none;opacity:1}}
.hb-svarT{margin:0;font-family:var(--f-disp);font-size:clamp(1.1rem,1.6vw,2.5rem);line-height:1.2;letter-spacing:-.01em;max-width:30ch}
.hb-svarI .hb-btn{margin-top:auto}
.hb-lbl{display:block;font-size:.78rem;color:rgba(23,45,77,.6);position:absolute;left:1.04vw;top:.55rem;pointer-events:none}
.hb-reitir input,.hb-reitir textarea{padding-top:1.7rem !important}
@media (prefers-reduced-motion:reduce){.hb-svarI{animation:none}}
.hb-formP > p{margin:0}
.hb-val{display:grid;grid-template-columns:1fr 1fr;gap:.35rem}
.hb-val label{display:flex;align-items:center;justify-content:space-between;gap:1rem;background:var(--c-form);min-height:4.8vw;
  transition:none;
  padding:0 clamp(0.5rem,1.04vw,2.5rem);cursor:pointer;color:#172D4D}
.hb-val input{appearance:none;width:18px;height:18px;border-radius:50%;border:1px solid #172D4D;margin:0;flex:none;
  transition:none}
.hb-val input:checked{box-shadow:inset 0 0 0 4px #FFFDF8,inset 0 0 0 9px #172D4D}
.hb-val label span{display:grid;gap:.1rem;padding:.7rem 0}
.hb-val label b{font-weight:500}
.hb-val label small{font-size:.8rem;color:rgba(23,45,77,.6)}
.hb-val label.valid{background:#172D4D;color:#FFFDF8}
.hb-val label.valid small{color:rgba(255,253,248,.7)}
.hb-val label.valid input{border-color:#FFFDF8;box-shadow:inset 0 0 0 4px #172D4D,inset 0 0 0 9px #FFFDF8}
.hb-val label:has(input:focus-visible){outline:2px solid var(--c-rautt);outline-offset:2px}
@media (hover:hover) and (pointer:fine){.hb-val label:not(.valid):hover{background:#F4EDE3}}
.hb-nidur{background:var(--c-form);padding:1.2rem clamp(0.5rem,1.04vw,2.5rem);color:#172D4D;display:grid;gap:.7rem}
.hb-nidur p{margin:0}
.hb-nidur .hb-btn{justify-self:start}
.hb-reitir{display:grid;grid-template-columns:1fr 1fr;gap:.35rem}
.hb-reitir .heild{grid-column:1/-1}
.hb-reitir label{position:relative;display:block}
.hb-reitir input,.hb-reitir textarea{width:100%;border:0;background:var(--c-form);color:#172D4D;font:inherit;font-size:16px;
  padding:1.2rem 2.2rem 1.2rem clamp(0.5rem,1.04vw,2.5rem);min-height:4.063vw;border-radius:0}
.hb-reitir textarea{min-height:8rem;resize:vertical}
.hb-reitir label i{position:absolute;right:1rem;top:1.35rem;width:8px;height:8px;border-radius:50%;background:transparent;transition:none}
.hb-reitir label.gott i{background:#88C159}.hb-reitir label.villa i{background:#DC5B5B}
.hb-teymiL{display:grid;grid-template-columns:repeat(4,1fr);gap:.35rem;margin-top:.4rem}
.hb-teymiL div{background:var(--c-form);padding:.8rem clamp(0.5rem,1.04vw,2.5rem);color:#172D4D;font-size:.86rem}
.hb-teymiL b{display:block;font-weight:500}
.hb-teymiL a{text-decoration:underline;text-underline-offset:2px;display:inline-flex;min-height:32px;align-items:center}
@media (max-width:991px){.hb-form{padding:0}.hb-flipar{padding:0 var(--gut)}.hb-formP{max-width:none;padding:clamp(0.5rem,2.6vw,2.5rem) var(--gut)}
  .hb-val label,.hb-reitir input{min-height:6.51vw}.hb-teymiL{grid-template-columns:1fr 1fr}}
@media (max-width:991px){.hb-svarT{font-size:clamp(1.1rem,2.9vw,2.5rem)}.hb-svarI{padding:clamp(0.5rem,2.6vw,2.5rem)}.hb-lbl{left:1.6vw}}

@media (max-width:479px){
  .hb-flipar.hb-disp{font-size:1.02rem;letter-spacing:0;line-height:1.2;display:grid;grid-template-columns:1fr 1fr;gap:2px;
    margin:0 var(--gut) .6rem;padding:0;font-family:inherit;font-weight:500}
  .hb-flipar button{min-height:48px;background:var(--c-el);color:var(--c-ink-med);padding:0 .6rem}
  .hb-flipar button[aria-selected="true"]{background:var(--c-btn);color:var(--c-btn-t)}
  .hb-flipar button::before{display:none}
  .hb-quiz{grid-template-columns:1fr}
  .hb-svarT{font-size:clamp(1.5rem,5.4vw,5.25rem)}
  .hb-svarI{padding:clamp(1rem,5vw,6rem)}
  .hb-svarI .hb-btn{width:100%}
  .hb-lbl{left:4vw}
}
@media (max-width:479px){.hb-val,.hb-reitir{grid-template-columns:1fr}.hb-val label,.hb-reitir input{min-height:13.889vw}
  .hb-teymiL{grid-template-columns:1fr}}


.hb-um{display:flex;flex-direction:column;row-gap:clamp(1rem,5.1852vh,6rem)}
.hb-um > .hb-wrap{width:100%}
.hb-umK{display:flex}
.hb-umC{width:50vw;min-height:54.1667vh;background:var(--c-el);display:flex}
.hb-umI{flex:1;padding:var(--gut);display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);grid-template-rows:auto 1fr auto;gap:1.2rem clamp(0.5rem,2vw,2.5rem)}
.hb-umC:nth-child(2){background:var(--c-el3)}
.hb-umM{width:9vw;aspect-ratio:1;position:relative;overflow:hidden;background:var(--grunnur);border-radius:18px}
.hb-umM img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;transition:transform var(--motion-reveal) var(--motion-out)}
.hb-umM img + img{transform:translateY(135%)}
@media (hover:hover) and (pointer:fine){.hb-umC:hover .hb-umM img:first-child{transform:translateY(-135%)}
  .hb-umC:hover .hb-umM img + img{transform:none}}
.hb-umN b{display:block;font-weight:500}
.hb-umN small{color:var(--c-ink-med)}
.hb-umT{grid-column:2;grid-row:1/3;margin:0;font-size:.92rem}
.hb-umQ{grid-column:1/-1;margin:0;font-family:var(--f-disp);font-size:clamp(1.1rem,2.08vw,2.5rem);line-height:1.1;letter-spacing:-.01em;max-width:26ch}
@media (max-width:991px){.hb-umC{min-height:52.083vw}.hb-umM{width:14vw}.hb-umQ{font-size:clamp(1.1rem,3.255vw,2.5rem)}}
@media (max-width:479px){.hb-umK{flex-direction:column}.hb-umC{width:100%;min-height:auto}.hb-umI{grid-template-columns:1fr}
  .hb-umT{grid-column:1;grid-row:auto}.hb-umM{width:30vw}.hb-umQ{font-size:clamp(1.5rem,6.4vw,5.25rem)}}


.hb-saga{display:flex;flex-direction:column;row-gap:clamp(1rem,6.2963vh,6rem);padding:0 var(--gut)}
.hb-sagaH{display:grid;grid-template-columns:1fr 2fr;gap:var(--col);padding:1.2rem 0;box-shadow:inset 0 -1px 0 var(--c-lina)}
.hb-sagaH > p{margin:0;color:var(--c-ink-med);font-size:.92rem}
.hb-sagaR{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:baseline;gap:1rem;padding:.35rem 0}
.hb-sagaR span{display:inline-block;padding:.35rem clamp(0.5rem,.8333vw,2.5rem);margin-left:clamp(-2.5rem,-.8333vw,-0.5rem);transition:transform var(--motion-panel) var(--motion-out)}
.hb-sagaR b{font-family:var(--f-disp);font-weight:600;font-size:clamp(1.1rem,2.08vw,2.5rem);letter-spacing:-.01em;font-variant-numeric:tabular-nums}
@media (hover:hover) and (pointer:fine){.hb-sagaR:hover span{background:var(--c-form);color:#172D4D;transform:translateX(.8333vw)}}
@media (max-width:991px){.hb-sagaR b{font-size:clamp(1.1rem,3.255vw,2.5rem)}}
@media (max-width:479px){.hb-sagaH{grid-template-columns:1fr}.hb-sagaR b{font-size:clamp(1.5rem,6.4vw,5.25rem)}}


.hb-yfirl{display:flex;flex-direction:column;align-items:center;row-gap:clamp(1rem,4.4444vh,6rem);padding:0 var(--gut)}
.hb-yfirl .hb-sub{width:min(58vw,60rem);text-align:center}

.hb-panta{display:flex;align-items:center;gap:clamp(0.5rem,2.5vw,2.5rem);contain:layout}
.hb-panta p{margin:0;max-width:24ch;font-size:.92rem}
.hb-pantaM{width:0;overflow:hidden;flex-shrink:0;transition:none;height:max(3vw,44px)}
.hb-pantaM img{height:100%;width:auto;max-width:none;border-radius:10px;background:var(--grunnur)}

@media (max-width:991px){.hb-yfirl .hb-sub{width:80vw}.hb-panta{flex-direction:column;text-align:center}}
@media (max-width:479px){.hb-yfirl{align-items:flex-start}.hb-yfirl .hb-sub{width:auto;text-align:left}
  .hb-panta{align-items:flex-start;text-align:left}}


.hb-faq{display:grid;grid-template-columns:46.875vw 1fr;gap:var(--col);padding:0 var(--gut);align-items:start}
.hb-faqK{position:sticky;top:calc(var(--haus-h,64px) + 1.2rem);height:calc(100svh - var(--haus-h,64px) - 3.6rem);max-height:52rem;
  background:var(--fk,var(--c-el));transition:none;border-radius:24px;display:flex;flex-direction:column;
  justify-content:space-between;padding:clamp(1.1rem,1.6vw,1.8rem);overflow:hidden;color:#172D4D}
.hb-faqK .hb-disp{position:relative;z-index:2}
.hb-faqM{margin:0 -4%}
.hb-faqT{position:relative;z-index:2}
.hb-faqR{border-radius:14px}
.hb-faqM{position:relative;flex:1;overflow:hidden}
.hb-faqM img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;
  transform:translateY(135%);transition:transform var(--motion-reveal) var(--motion-out)}
.hb-faqM img.nu{transform:none}.hb-faqM img.farin{transform:translateY(-135%)}
.hb-faqT{display:flex;justify-content:space-between;gap:.5rem}
.hb-faqL{display:grid;gap:.35rem}
.hb-faqR{background:var(--c-form);color:#172D4D}
.hb-faqR button{width:100%;display:flex;justify-content:space-between;align-items:center;gap:1rem;border:0;background:none;
  padding:0 0 0 clamp(0.5rem,1.04vw,2.5rem);min-height:3.4rem;cursor:pointer;text-align:left;color:inherit;font-weight:500}
.hb-faqR button i{width:3.4rem;height:3.4rem;flex:none;display:grid;place-items:center;box-shadow:inset 1px 0 0 rgba(23,45,77,.08)}
.hb-faqR button svg{transition:transform var(--motion-panel) var(--motion-out)}
.hb-faqR.opid button svg{transform:rotate(45deg)}
.hb-faqB{display:grid;grid-template-rows:0fr;transition:grid-template-rows var(--motion-panel) var(--motion-out)}
.hb-faqR.opid .hb-faqB{grid-template-rows:1fr}
.hb-faqB > div{overflow:hidden}
.hb-faqB p{margin:0;padding:0 clamp(0.5rem,1.04vw,2.5rem) 1.1rem;max-width:60ch;opacity:0;transition:opacity var(--motion-fast) var(--motion-out)}
.hb-faqR.opid .hb-faqB p{opacity:1;transition-delay:.16s}
@media (max-width:991px){.hb-faq{grid-template-columns:46.094vw 1fr}.hb-faqK{height:75vw;top:calc(var(--haus-h,60px) + 1rem)}}
@media (max-width:479px){.hb-faqT{display:grid;grid-template-columns:1fr 1fr}.hb-faq{grid-template-columns:1fr}.hb-faqK{position:static;height:calc(100svh - 22.223vw);margin-bottom:clamp(1rem,9.375vh,6rem)}}


.hb-fotM{position:relative;overflow:hidden;background:#204A8E}
.hb-fot{background:#204A8E;color:#FAF5EA;padding:var(--gut) var(--gut) calc(var(--gut) + env(safe-area-inset-bottom));will-change:transform}
.hb-fotRod{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:1.5rem;font-size:.94rem;line-height:1.45}
.hb-fotRod > div{display:contents}.hb-fotRod > div > div{min-width:0}.hb-fotRod br{display:none}.hb-fot .hb-fotRod a{display:flex;overflow-wrap:anywhere}.hb-fotRod small{margin-bottom:.4rem}
.hb-fotRod small{display:block;opacity:.7;font-size:.78rem}
.hb-fot a{text-decoration:none;display:inline-flex;min-height:44px;min-width:44px;align-items:center}

.hb-fotUpp{border:0;background:none;color:inherit;cursor:pointer;display:inline-flex;align-items:center;gap:.4rem;min-height:44px;align-self:start;justify-self:end;padding:0}
.hb-fotMerki{width:clamp(12rem,26vw,24rem);margin:clamp(3rem,7vw,6rem) auto 2rem}
.hb-fotMerki img{width:100%;height:auto}
.hb-slogan{font-family:var(--f-disp);font-weight:700;font-size:clamp(1rem,11.7vw,12rem);line-height:1.08;letter-spacing:-.01em;
  white-space:nowrap;text-align:left;overflow:hidden;padding:.12em 0 .16em;margin:0 0 .5rem;user-select:none}
.hb-slogan span{display:inline-block;will-change:transform;transition:none}
.hb-slogan span > span{display:inline-block;transition:transform var(--motion-ui) var(--motion-out)}
.hb-fotBot{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:1.5rem;align-items:center;font-size:.85rem}.hb-fotBot > span:nth-child(2){grid-column:2 / 5}.hb-fotBot .hb-studioBadge{grid-column:5;justify-self:end;display:inline-flex;gap:.5rem;min-height:44px;white-space:nowrap}
@media (max-width:760px){.hb-fotRod{grid-template-columns:repeat(2,minmax(0,1fr));gap:1.5rem 1rem}.hb-fotUpp{grid-column:1 / -1;justify-self:start}.hb-fotBot{grid-template-columns:repeat(2,minmax(0,1fr));gap:.5rem 1rem}.hb-fotBot > span:nth-child(2){grid-column:1 / -1;grid-row:2}.hb-fotBot .hb-studioBadge{grid-column:2;grid-row:1}.hb-slogan{font-size:clamp(2.25rem,11.7vw,6rem);letter-spacing:-.01em}}


.hb-root{--r:clamp(10px,.9vw,16px)}
.hb-reit,.hb-kort,.hb-galI,.hb-formP,.hb-svar,.hb-val label,.hb-nidur,.hb-teymiL div,
.hb-reitir input,.hb-reitir textarea,.hb-lina2,.hb-lina2 figure,.hb-faqK,.hb-faqR,.hb-umM,.hb-vMynd,.hb-ofnK{border-radius:var(--r)}
.hb-lina2 figure{border-radius:var(--r) 0 0 var(--r)}
@media (max-width:991px){.hb-lina2 figure{border-radius:var(--r) var(--r) 0 0}}
.hb-bitiM{border-radius:.16em}
.hb-magn,.hb-tegund,.hb-reitur input,.hb-reitur textarea,.hb-kvittun,.hb-pokiH b{border-radius:var(--r)}
.hb-btn,.hb-hnappur,.hb-sett,.hb-haus .hb-pokiH,.hb-braud{border-radius:999px}
.hb-faqR{overflow:hidden}
.hb-disp{letter-spacing:-.01em}
.hb-lit div{flex-wrap:wrap;max-width:none;gap:0}
.hb-lit button{width:44px;height:44px}
@media (max-width:479px){.hb-lit div{max-width:132px}}
@media (max-width:1600px){.hb-stika{grid-template-columns:minmax(0,1fr) auto}.hb-takkar{grid-column:1/-1}}
@media (max-width:479px){.hb-slogan{font-size:clamp(2.25rem,min(13.4vw,4.4rem),6rem)}}
@media (min-width:992px){
  .hb-reit:nth-child(1){grid-area:1/1/2/2}.hb-reit:nth-child(2){grid-area:1/3/2/4}
  .hb-reit:nth-child(3){grid-area:2/2/3/3}.hb-reit:nth-child(4){grid-area:2/4/3/5}
  .hb-reit:nth-child(5){grid-area:3/1/4/2}.hb-reit:nth-child(6){grid-area:3/3/4/4}
  .hb-reit:nth-child(7){grid-area:3/4/4/5}
}
@media (max-width:991px){.hb-reit:nth-child(5){display:block}.hb-reit:nth-child(7){grid-column:3}}


${Lf}
`,Df=[{p:"p00",x:52,y:8,s:2.6,d:1.2,r:-18},{p:"p06",x:58,y:54,s:2.2,d:.8,r:24},{p:"p02",x:52,y:80,s:3,d:1.4,r:12},{p:"p08",x:60,y:5,s:2.4,d:1,r:-30},{p:"p05",x:90,y:6,s:2.8,d:1.3,r:40},{p:"p11",x:71,y:92,s:2.4,d:.9,r:-8},{p:"p14",x:94,y:89,s:2.2,d:1.1,r:16},{p:"p20",x:53,y:88,s:2.6,d:.7,r:-22}],If=["Bónus","Krónunni","Hagkaup","Nettó","Fjarðarkaupum","Melabúðinni","Samkaupum","10-11","Iceland","N1","Olís","Kaupfélagi Skagfirðinga","Hlíðarkaupum","Vöruvali","Albínu","Fjölvali","Skeljungi","Kaupfélagi Steingrímsfjarðar","Kaupfélagi V-Húnvetninga"];function Kc({listi:o=Df,k:u=""}){return i.jsx("div",{className:`hb-svif ${u}`,"aria-hidden":"true",children:o.map((s,h)=>i.jsx("span",{style:{left:`${s.x}%`,top:`${s.y}%`,"--s":`${s.s}vw`,"--d":s.d,"--r":`${s.r}deg`,"--t":`${7+h%4*1.7}s`,"--w":`${-h*1.3}s`},children:i.jsx("img",{src:`${xi}hberg/laus/${s.p}.webp${br}`,alt:"",width:160,height:160,decoding:"async"})},h))})}function Af(){const o=S.useRef(null);return S.useEffect(()=>{const u=o.current;if(!u||Tr()||!window.matchMedia("(hover:hover) and (pointer:fine)").matches)return;let s=0,h=0,p=0,x=0,k=0;const w=()=>{x+=(h-x)*.055,k+=(p-k)*.055,u.style.setProperty("--mx",x.toFixed(4)),u.style.setProperty("--my",k.toFixed(4)),s=Math.abs(h-x)>5e-4||Math.abs(p-k)>5e-4?requestAnimationFrame(w):0},c=z=>{const j=u.getBoundingClientRect();h=(z.clientX-j.left)/j.width-.5,p=(z.clientY-j.top)/j.height-.5,s||(s=requestAnimationFrame(w))},b=()=>{h=0,p=0,s||(s=requestAnimationFrame(w))};return u.addEventListener("pointermove",c),u.addEventListener("pointerleave",b),()=>{u.removeEventListener("pointermove",c),u.removeEventListener("pointerleave",b),cancelAnimationFrame(s)}},[]),i.jsx("div",{className:"hb-heroP",children:i.jsxs("section",{className:"hb-hero",id:"top",ref:o,children:[i.jsx(Kc,{k:"hb-svifH"}),i.jsxs(hr,{className:"hb-heroT",children:[i.jsxs("div",{children:[i.jsx($c,{children:"H-Berg · Grandatröð 12, Hafnarfirði"}),i.jsxs("h1",{className:"hb-disp",children:[Mo.heroLinur.map((u,s)=>i.jsx("span",{className:"hb-mask",children:i.jsx("span",{className:"hb-up hb-lina",style:Ar(s),children:u})},u)),i.jsx("span",{className:"hb-mask",children:i.jsx("span",{className:"hb-up hb-lina hb-heroAr",style:Ar(Mo.heroLinur.length),children:Mo.heroAr})})]})]}),i.jsxs("div",{className:"hb-heroNe",children:[i.jsx("p",{className:"hb-heroSlag hb-mask hb-maskP",children:i.jsxs("span",{className:"hb-up",style:{...Ar(3),"--dur":"var(--motion-reveal)"},children:[vr.length," vörur undir eigin merki, pakkaðar í Hafnarfirði. Fást í Bónus, Krónunni, Hagkaup og hjá ",If.length-3," öðrum söluaðilum."]})}),i.jsx("div",{className:"hb-heroCta hb-mask",children:i.jsxs("div",{className:"hb-up",style:Ar(4),children:[i.jsx("a",{className:"hb-btn hb-casH",href:We("vorur/"),children:i.jsx(st,{t:"Skoða vörurnar"})}),i.jsx("button",{className:"hb-btn sc hb-casH",onClick:u=>Le.open(!0,u),children:i.jsx(st,{t:"Pöntun fyrir verslanir"})})]})})]})]}),i.jsx(hr,{className:"hb-rist",children:lp.map((u,s)=>i.jsx("button",{className:"hb-reit hb-mask",style:{"--grunnur":u.grunnur},"data-bendill":"Skoða","aria-label":`${u.n}, nánar`,onClick:()=>Ce.open({k:"vara",slug:u.img.replace(/^hero:/,"")}),children:i.jsx("img",{className:"hb-up",style:Ar(s),src:ar(u.img.replace(/^hero:/,""),"pack","m"),alt:"",width:800,height:800,loading:s<4?"eager":"lazy",decoding:"async"})},u.img))})]})})}function $f({n:o,grunnur:u,b:s,fyrsta:h,hlid:p}){var z;const x=sp[o]??[h],[k,w]=S.useState(0),c=S.useRef(null);S.useEffect(()=>{if(x.length<2||Tr())return;let j=0,O=!1;const E=new IntersectionObserver(([H])=>{O=H.isIntersecting});c.current&&E.observe(c.current);const R=window.setTimeout(()=>{j=window.setInterval(()=>{O&&w(H=>(H+1)%x.length)},2e3)},700*p);return()=>{window.clearTimeout(R),window.clearInterval(j),E.disconnect()}},[x.length,p]);const b=(k-1+x.length)%x.length;return i.jsx("span",{className:"hb-bitiM",ref:c,style:{"--grunnur":((z=Ke(x[k]))==null?void 0:z.tint)??u,"--b":s??1},children:x.map((j,O)=>i.jsx("img",{src:Ba(j),alt:O===k?o:"",width:120,height:136,loading:"lazy",decoding:"async",className:O===k?"nu":O===b&&x.length>1?"farin":"",style:O!==k&&O!==b?{transition:"none"}:void 0},j))})}function Bf(){let o=0;return i.jsxs("section",{className:"hb-tilvS","aria-label":"H-Berg í einni setningu",children:[i.jsx(Kc,{k:"hb-svifS",listi:[{p:"p03",x:8,y:10,s:3.4,d:1,r:20},{p:"p09",x:86,y:4,s:4,d:1.3,r:-16},{p:"p12",x:90,y:78,s:3,d:.8,r:30},{p:"p17",x:12,y:74,s:3.8,d:1.2,r:-28},{p:"p24",x:52,y:96,s:2.6,d:.6,r:8}]}),i.jsx(hr,{margin:"0px 0px -25% 0px",children:i.jsx("h2",{className:"hb-disp hb-setning",children:op.map((u,s)=>i.jsx("span",{className:"hb-mask hb-setL",children:i.jsx("span",{className:"hb-up hb-lina",style:{...Ar(s),"--dur":"var(--motion-reveal)"},children:u.map((h,p)=>"t"in h?i.jsx("span",{children:h.t},p):i.jsx($f,{n:h.n,grunnur:h.grunnur,b:h.b,fyrsta:h.img,hlid:o++},p))})},s))})})]})}function Uf({s:o,i:u}){const[s,h]=S.useState(0),[p,x]=S.useState(-1),k=o.tegundir[s],w=()=>Ce.open({k:"vara",slug:k.slug});return i.jsxs(hr,{className:"hb-spjald",as:"article",style:{background:k.lit},children:[i.jsx("div",{className:"hb-spjaldM",role:"button",tabIndex:0,"aria-label":`${k.n}, nánar`,"data-bendill":"Skoða",onClick:w,onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),w())},children:o.tegundir.map((c,b)=>i.jsx("img",{src:_c(c.slug),alt:b===s?c.n:"",width:720,height:820,loading:"lazy",decoding:"async",className:b===s?"nu":b===p?"farin":"",style:b!==s&&b!==p?{transition:"none"}:{transitionDelay:p<0?`${.12*u}s`:"0s"}},c.slug))}),i.jsxs("div",{className:"hb-stika",children:[i.jsxs("div",{children:[i.jsx("small",{children:o.merki}),i.jsx("b",{children:k.n}),i.jsx("span",{className:"hb-pk",children:k.d})]}),i.jsxs("div",{className:"hb-lit",children:[i.jsx("small",{children:"Tegund"}),i.jsx("div",{role:"group","aria-label":`Tegundir af ${o.titill}`,children:o.tegundir.map((c,b)=>i.jsx("button",{"aria-pressed":b===s,"aria-label":c.n,style:{"--l":c.lit},onClick:()=>{b!==s&&(x(s),h(b))}},c.n))})]}),i.jsxs("div",{className:"hb-takkar",children:[i.jsx("button",{className:"hb-btn sc hb-casH",onClick:w,children:i.jsx(st,{t:"Nánar"})}),i.jsx(yi,{slug:k.slug})]})]})]})}function _f(){return i.jsx("section",{className:"hb-vorur",id:"vorur","aria-label":"Vörur",children:up.map((o,u)=>i.jsx(Uf,{s:o,i:u},o.titill))})}const Kf=[{n:"2007",t:"Stofnað af Halldóri Berg og fjölskyldu",g:"#F2C98A",h:"p00"},{n:String(vr.length),t:"Vörur undir merki H-Berg",g:"#E9B3A1",h:"p06"},{n:"19",t:"Söluaðilar um allt land, frá Bónus til Melabúðarinnar",g:"#C9D3A2",h:"p02"},{n:"800",t:"Fermetrar fyrir framleiðslu og pökkun í Hafnarfirði",g:"#B9CBD9",h:"p08"}];function Vf(){return i.jsxs("section",{className:"hb-kostir",children:[i.jsx(hr,{children:i.jsx(Ka,{className:"hb-disp",text:"H-Berg | frá 2007"})}),i.jsx(hr,{className:"hb-tolur",hver:!0,children:Kf.map((o,u)=>i.jsx("div",{className:"hb-tala hb-mask",style:{"--g":o.g},children:i.jsxs("div",{className:"hb-up",style:{...Ar(u),"--dur":"var(--motion-reveal)"},children:[i.jsx("b",{children:o.n}),i.jsx("span",{children:o.t}),i.jsx("img",{src:`${xi}hberg/laus/${o.h}.webp${br}`,alt:"",width:160,height:160,loading:"lazy"})]})},o.n))})]})}function Jf(){return i.jsx(Sp,{})}function qf(){const[o,u]=S.useState("quiz"),[s,h]=S.useState(null),p=s===null?null:Xd[s],x=(k,w)=>{k.hlekkur==="#poki"?Le.open(!0,w):k.hlekkur==="#staerra"?Ce.open({k:"staerra"}):k.hlekkur==="#hvar"?Ce.open({k:"hvar"}):en("#ofnaemi")};return i.jsxs("section",{className:"hb-form",id:"erindi",children:[i.jsxs("div",{className:"hb-flipar hb-disp",role:"tablist","aria-label":"Hafa samband",children:[i.jsx("button",{role:"tab",id:"hb-t1","aria-controls":"hb-tp","aria-selected":o==="quiz",onClick:()=>u("quiz"),children:"Hvert er erindið?"}),i.jsx("button",{role:"tab",id:"hb-t2","aria-controls":"hb-tp","aria-selected":o==="spyrja",onClick:()=>u("spyrja"),children:"Senda fyrirspurn"})]}),i.jsx(hr,{className:"hb-formP hb-mask",margin:"0px 0px -20% 0px",children:i.jsx("div",{className:"hb-up",id:"hb-tp",role:"tabpanel","aria-labelledby":o==="quiz"?"hb-t1":"hb-t2",style:{display:"grid",gap:"1rem"},children:o==="quiz"?i.jsxs("div",{className:"hb-quiz",children:[i.jsxs("div",{children:[i.jsx("p",{className:"hb-quizQ",id:"hb-quiz-q",children:"Hvað ert þú að leita að?"}),i.jsx("div",{className:"hb-val",role:"radiogroup","aria-labelledby":"hb-quiz-q",children:Xd.map((k,w)=>i.jsxs("label",{className:s===w?"valid":"",children:[i.jsxs("span",{children:[i.jsx("b",{children:k.nafn}),i.jsx("small",{children:k.stutt})]}),i.jsx("input",{type:"radio",name:"hb-erindi",checked:s===w,onChange:()=>h(w)})]},k.nafn))})]}),i.jsx("div",{className:"hb-svar","aria-live":"polite",children:p?i.jsxs("div",{className:"hb-svarI",children:[i.jsx("p",{className:"hb-merki",style:{margin:0,color:"rgba(23,45,77,.6)"},children:p.nafn}),i.jsx("p",{className:"hb-svarT",children:p.nota}),i.jsx("button",{className:"hb-btn hb-casH",onClick:k=>x(p,k),children:i.jsx(st,{t:p.ord})}),i.jsxs("button",{className:"hb-nobg",style:{color:"#172D4D"},onClick:()=>u("spyrja"),children:["Eða sendu okkur línu ",i.jsx("i",{children:"→"})]})]},p.nafn):i.jsxs("div",{className:"hb-svarI tomt",children:[i.jsx("p",{className:"hb-svarT",children:"Veldu erindi og þú sérð strax hvernig best er að snúa sér."}),i.jsxs("p",{className:"hb-smatt",style:{color:"rgba(23,45,77,.6)",margin:0},children:["Sími ",Er.simi," · ",Er.netfang]})]})})]}):i.jsxs(i.Fragment,{children:[i.jsx(Ec,{cfg:Cc}),i.jsx("div",{className:"hb-teymiL",children:np.map(k=>i.jsxs("div",{children:[i.jsx("b",{children:k.nafn}),i.jsx("a",{href:k.href,...k.href.startsWith("http")?{target:"_blank",rel:"noopener noreferrer"}:{},children:k.texti})]},k.nafn))})]})})})]})}function Wf(){const o=[{n:"H-Berg",m:"Fjölskyldufyrirtæki frá 2007",a:"mondlur",b:"kajuhnetur-heilarristadar",g:"#B98B60",t:"H-Berg var stofnað í júlí 2007 af Halldóri Berg Jónssyni og fjölskyldu. Við pökkum þurrkuðum ávöxtum og hnetum undir eigin vörumerki.",q:"Grandatröð 12, Hafnarfirði."},{n:"Framleiðslan",m:"Neytendaumbúðir og stærri einingar",a:"hnetusmjor",b:"kasjusmjor",g:"#D7B45D",t:"Við pökkum í neytendaumbúðir og stærri einingar fyrir matvælafyrirtæki, matsölustaði og stóreldhús. Við framleiðum líka H-Berg smjör.",q:"Hnetur, ávextir og smjör."}];return i.jsxs("section",{className:"hb-um",id:"um","aria-labelledby":"hb-um-t",children:[i.jsx(hr,{className:"hb-wrap",children:i.jsx(Ka,{id:"hb-um-t",className:"hb-disp",text:"Nokkur orð | um okkur"})}),i.jsx(hr,{className:"hb-umK",hver:!0,margin:"0px 0px -20% 0px",children:o.map((u,s)=>{var h,p,x;return i.jsx("article",{className:"hb-umC hb-mask",style:{"--grunnur":((h=Ke(u.a))==null?void 0:h.tint)??u.g},children:i.jsxs("div",{className:"hb-up hb-umI",style:{...Ar(s),"--dur":"var(--motion-reveal)"},children:[i.jsxs("div",{className:"hb-umM",children:[i.jsx("img",{src:Ba(u.a),style:{background:(p=Ke(u.a))==null?void 0:p.tint},alt:"",width:300,height:340,loading:"lazy"}),i.jsx("img",{src:Ba(u.b),style:{background:(x=Ke(u.b))==null?void 0:x.tint},alt:"",width:300,height:340,loading:"lazy"})]}),i.jsx("p",{className:"hb-umT",children:u.t}),i.jsxs("div",{className:"hb-umN",children:[i.jsx("b",{children:u.n}),i.jsx("small",{children:u.m})]}),i.jsx("p",{className:"hb-umQ",children:u.q})]})},u.n)})})]})}function Yf(){return i.jsxs("section",{className:"hb-saga",id:"saga",children:[i.jsx(hr,{children:i.jsx(Ka,{className:"hb-disp",text:"Gamalt og nýtt"})}),i.jsx(hr,{hver:!0,children:dp.map((o,u)=>i.jsxs("div",{className:"hb-sagaH hb-mask",children:[i.jsx("p",{className:"hb-up",style:{...Ar(u),"--dur":"var(--motion-reveal)"},children:o.h}),i.jsx("div",{className:"hb-up",style:{...Ar(u),"--dur":"var(--motion-reveal)"},children:o.r.map(s=>i.jsxs("div",{className:"hb-sagaR",children:[i.jsx("span",{children:s.t}),i.jsx("b",{children:s.a})]},s.t))})]},o.h))})]})}function Gf(){var u;const o=S.useRef(null);return S.useEffect(()=>{const s=o.current;if(!s)return;const h=()=>{var p;return(p=s.parentElement)==null?void 0:p.style.setProperty("--bw",`${s.offsetWidth||160}px`)};return s.complete?h():s.addEventListener("load",h,{once:!0}),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),i.jsxs("section",{className:"hb-yfirl","aria-label":"Í þeirra eigin orðum",children:[i.jsx(hr,{className:"hb-mask hb-maskP",margin:"0px 0px -20% 0px",children:i.jsxs("h2",{className:"hb-sub hb-up",style:{"--dur":"var(--motion-reveal)"},children:["„",tp,"“"]})}),i.jsxs("div",{className:"hb-panta",children:[i.jsx("p",{children:"Pantar þú fyrir verslun eða stóreldhús? Settu vörur á listann og opnaðu pöntunina í tölvupósti."}),i.jsx("span",{className:"hb-pantaM",children:i.jsx("img",{ref:o,style:{background:(u=Ke("kasjusmjor"))==null?void 0:u.tint},src:Ba("kasjusmjor"),alt:"",width:460,height:110})}),i.jsx("button",{className:"hb-btn hb-casH",onClick:s=>Le.open(!0,s),children:i.jsx(st,{t:"Opna pöntunarlistann"})})]})]})}function Qf(){var w;const[o,u]=S.useState(-1),s=["mondlur","heslihnetur-med-sukkuladi-afrit","kajuhnetur-heilarristadar","graskersfrae-2","aprikosur-2","dodlur-2"],[h,p]=S.useState(0),[x,k]=S.useState(-1);return i.jsxs("section",{className:"hb-faq",id:"spurt",children:[i.jsxs("div",{className:"hb-faqK",style:{"--fk":(w=Ke(s[h]))==null?void 0:w.tint},children:[i.jsx(hr,{children:i.jsx(Ka,{className:"hb-disp",text:"Spurt og | svarað"})}),i.jsx("div",{className:"hb-faqM",role:"button",tabIndex:0,"aria-label":"Næsta vörumynd",onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),k(h),p((h+1)%s.length))},"data-bendill":"Næsta",onClick:()=>{k(h),p((h+1)%s.length)},children:s.map((c,b)=>i.jsx("img",{src:_c(c),alt:"",width:400,height:450,loading:"lazy",className:b===h?"nu":b===x?"farin":"",style:b!==h&&b!==x?{transition:"none"}:void 0},c))}),i.jsxs("div",{className:"hb-faqT",children:[i.jsx("button",{className:"hb-btn hb-casH",onClick:()=>{k(h),p((h+1+Math.floor(Math.random()*(s.length-1)))%s.length)},children:i.jsx(st,{t:"Handahóf"})}),i.jsx("button",{className:"hb-btn sc hb-casH",onClick:()=>en("#linur"),children:i.jsx(st,{t:"Vörulínur"})})]})]}),i.jsx(hr,{className:"hb-faqL",hver:!0,children:cp.map((c,b)=>i.jsx("div",{className:`hb-faqR hb-mask${o===b?" opid":""}`,children:i.jsxs("div",{className:"hb-up",style:{...Ar(b%4),"--dur":"var(--motion-reveal)"},children:[i.jsxs("button",{"aria-expanded":o===b,"aria-controls":`hb-faq-answer-${b}`,onClick:()=>u(o===b?-1:b),children:[c.q,i.jsx("i",{children:i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12","aria-hidden":"true",children:i.jsx("path",{d:"M6 0v12M0 6h12",stroke:"currentColor",strokeWidth:"1.3"})})})]}),i.jsx("div",{className:"hb-faqB",id:`hb-faq-answer-${b}`,children:i.jsx("div",{children:i.jsx("p",{children:c.a})})})]})},c.q))})]})}const yc="Hnetur og ávextir",xc=["#BEA458","#F0CB1F","#FFFFFF","#B27FD0","#8FD06A"];function Xf(){const o=S.useRef(null),u=S.useRef(null),[s,h]=S.useState(0),p=S.useRef(!1);S.useEffect(()=>{var O,E;const c=o.current;if(!c)return;let b=!0;const z=()=>{if(!b)return;const R=u.current;if(R){const H=[...R.children].reduce((q,W)=>q+W.getBoundingClientRect().width,0),D=parseFloat(getComputedStyle(R).fontSize),re=H>0?D*R.clientWidth/H:D;Math.abs(re-D)>.05&&(R.style.fontSize=`${re}px`)}h(Math.ceil(c.getBoundingClientRect().height))};z();const j=new ResizeObserver(z);return j.observe(c),window.addEventListener("resize",z),(O=document.fonts)==null||O.addEventListener("loadingdone",z),(E=document.fonts)==null||E.ready.then(z),()=>{var R;b=!1,j.disconnect(),window.removeEventListener("resize",z),(R=document.fonts)==null||R.removeEventListener("loadingdone",z)}},[]);const x=Mf(c=>{const b=o.current,z=u.current;if(!b||!z)return;const j=[...z.children],O=Tr(),E=c.getBoundingClientRect(),R=window.innerHeight,H=E.height||1,D=O?1:Math.min(1,Math.max(0,(R-E.top)/H));Ac()?b.style.transform="":b.style.transform=`translate3d(0,${(-(1-D)*100).toFixed(2)}%,0)`;const q=.6+.04*(j.length-1);j.forEach((W,X)=>{const L=Of(Math.min(1,Math.max(0,(D*q-X*.04)/.6)));W.style.transform=`translate3d(0,${((1-L)*110).toFixed(2)}%,0)`}),p.current=D>=.95},[s]);S.useEffect(()=>{const c=u.current;if(!c||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let b=[];const z=()=>{b.forEach(O=>{O.style.color="",O.firstElementChild.style.transform=""}),b=[]},j=O=>{if(!p.current)return;const E=[...c.children];let R=-1,H=1/0;E.forEach((D,re)=>{const q=D.getBoundingClientRect(),W=Math.abs(O.clientX-(q.left+q.width/2));W<H&&q.width>0&&(H=W,R=re)}),!(R<0)&&(z(),[[0,.25],[-1,.125],[1,.125]].forEach(([D,re])=>{const q=E[R+D];!q||q.textContent===" "||(q.style.color=xc[(R+D)%xc.length],q.firstElementChild.style.transform=`translateY(${(-re*60).toFixed(1)}%)`,b.push(q))}))};return c.addEventListener("pointermove",j),c.addEventListener("pointerleave",z),()=>{c.removeEventListener("pointermove",j),c.removeEventListener("pointerleave",z)}},[]);const k=()=>{const c=zt();c?c.scrollTo(0):window.scrollTo({top:0,behavior:Tr()?"auto":"smooth"})},w=(c,b)=>{c.preventDefault(),Ce.open(b)};return i.jsx("div",{className:"hb-fotM",ref:x,style:{height:s||void 0},children:i.jsxs("footer",{className:"hb-fot",ref:o,children:[i.jsxs("div",{className:"hb-fotRod",children:[i.jsxs("div",{children:[i.jsxs("div",{children:[i.jsx("small",{children:"Hafa samband"}),i.jsx("a",{href:Er.simiHref,children:Er.simi}),i.jsx("br",{}),i.jsx("a",{href:`mailto:${Er.netfang}`,children:Er.netfang}),i.jsx("br",{}),i.jsx("a",{href:`mailto:${Er.fjarofloun}`,children:Er.fjarofloun})]}),i.jsxs("div",{children:[i.jsx("small",{children:"H-Berg"}),i.jsx("a",{href:We("vorur/"),children:"Vörur"}),i.jsx("br",{}),i.jsx("a",{href:We("vorur/"),children:"Allar vörulínur"}),i.jsx("br",{}),i.jsx("a",{href:Gt("#ofnaemi"),onClick:c=>{c.preventDefault(),en("#ofnaemi")},children:"Ofnæmisvaldar"}),i.jsx("br",{}),i.jsx("a",{href:We("naeringargildi/"),children:"Næringargildi"}),i.jsx("br",{}),i.jsx("a",{href:Gt("#spurt"),onClick:c=>{c.preventDefault(),en("#spurt")},children:"Spurt og svarað"})]}),i.jsxs("div",{children:[i.jsx("small",{children:"Fyrirtæki"}),i.jsx("a",{href:"#poki",onClick:c=>{c.preventDefault(),Le.open(!0,c)},children:"Pöntunarlisti"}),i.jsx("br",{}),i.jsx("a",{href:"#staerra",onClick:c=>w(c,{k:"staerra"}),children:"Stærri pakkningar"}),i.jsx("br",{}),i.jsx("a",{href:"#hvar",onClick:c=>w(c,{k:"hvar"}),children:"Hvar fæst H-Berg"}),i.jsx("br",{})]}),i.jsxs("div",{children:[i.jsx("small",{children:Er.logadi}),i.jsx("a",{href:Er.kort,target:"_blank",rel:"noopener noreferrer",children:Er.heimili})]})]}),i.jsxs("button",{className:"hb-fotUpp hb-casH",onClick:k,children:[i.jsx(st,{t:"Aftur upp"})," ↑"]})]}),i.jsx("div",{className:"hb-fotMerki",children:i.jsx("a",{href:We(),"aria-label":"H-Berg, forsíða",children:i.jsx("img",{src:`${xi}hberg/brand/logo.svg${br}`,alt:"H-Berg",width:280,height:129,loading:"lazy"})})}),i.jsx("p",{className:"hb-slogan",ref:u,"aria-label":yc,children:[...yc].map((c,b)=>i.jsx("span",{"aria-hidden":"true",children:i.jsx("span",{children:c===" "?" ":c})},b))}),i.jsxs("div",{className:"hb-fotBot",children:[i.jsx("span",{children:Er.logadi}),i.jsx("span",{children:"Fjölskyldufyrirtæki frá 2007"}),i.jsx(Ef,{dark:!0,className:"hb-studioBadge"})]})]})})}function Zf(){const o=Cr==="products"?"Vörur":"Næringargildi";return i.jsx(yf,{css:Hf,footer:i.jsx(Xf,{}),children:Cr==="home"?i.jsxs(i.Fragment,{children:[i.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(ip)}}),i.jsx(Af,{}),i.jsx(gf,{}),i.jsx(Bf,{}),i.jsx(_f,{}),i.jsx(Vf,{}),i.jsx(kc,{}),i.jsx(Ff,{}),i.jsx(Jf,{}),i.jsx(lf,{}),i.jsx(qf,{}),i.jsx(Wf,{}),i.jsx(Yf,{}),i.jsx(Gf,{}),i.jsx(Qf,{})]}):i.jsxs(i.Fragment,{children:[i.jsxs("header",{className:"hb-pageHeader",children:[i.jsxs("nav",{"aria-label":"Brauðmolar",children:[i.jsx("a",{href:We(),children:"H-Berg"}),i.jsx("span",{"aria-hidden":"true",children:"/"}),i.jsx("span",{"aria-current":"page",children:o})]}),i.jsx("h1",{className:"hb-disp",children:o}),i.jsx("p",{children:Cr==="products"?"Veldu vöru til að sjá innihald, næringargildi og setja hana á pöntunarlistann.":"Allar vörur H-Berg, gildi í 100 g."})]}),Cr==="products"?i.jsxs(i.Fragment,{children:[i.jsx(kc,{compact:!0}),i.jsx(Pf,{})]}):i.jsx(wf,{})]})})}function eg(){const[o,u]=S.useState(Tr);return S.useEffect(()=>{const s=matchMedia("(prefers-reduced-motion: reduce)"),h=()=>u(s.matches);return s.addEventListener("change",h),()=>s.removeEventListener("change",h)},[]),i.jsx(Zf,{},String(o))}const wc=document.documentElement,Vc=o=>{wc.getAttribute("data-input")!==o&&wc.setAttribute("data-input",o)};addEventListener("pointerdown",()=>Vc("pointer"),!0);addEventListener("keydown",o=>{o.key==="Shift"||o.key==="Control"||o.key==="Alt"||o.key==="Meta"||Vc("key")},!0);class rg extends Jm.Component{constructor(){super(...arguments);Bd(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?i.jsxs("main",{style:{padding:"15vh 6vw",fontFamily:"system-ui",color:"#1C130D"},children:[i.jsx("h1",{children:"Ekki tókst að opna síðuna."}),i.jsx("p",{children:"Reyndu aftur eða hafðu samband við H-Berg í síma 565 6500."}),i.jsx("button",{onClick:()=>location.reload(),children:"Reyna aftur"})]}):this.props.children}}Xm.createRoot(document.getElementById("root")).render(i.jsx(rg,{children:i.jsx(eg,{})}));export{ng as c,Um as g};
