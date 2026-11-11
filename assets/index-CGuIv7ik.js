var Om=Object.defineProperty;var Hm=(o,u,s)=>u in o?Om(o,u,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[u]=s;var Dd=(o,u,s)=>Hm(o,typeof u!="symbol"?u+"":u,s);(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))h(p);new MutationObserver(p=>{for(const x of p)if(x.type==="childList")for(const k of x.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&h(k)}).observe(document,{childList:!0,subtree:!0});function s(p){const x={};return p.integrity&&(x.integrity=p.integrity),p.referrerPolicy&&(x.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?x.credentials="include":p.crossOrigin==="anonymous"?x.credentials="omit":x.credentials="same-origin",x}function h(p){if(p.ep)return;p.ep=!0;const x=s(p);fetch(p.href,x)}})();var Gf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Dm(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Eo={exports:{}},mi={},Co={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function Im(){if(Id)return ge;Id=1;var o=Symbol.for("react.element"),u=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),k=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),j=Symbol.iterator;function M(b){return b===null||typeof b!="object"?null:(b=j&&b[j]||b["@@iterator"],typeof b=="function"?b:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,O={};function H(b,g,K){this.props=b,this.context=g,this.refs=O,this.updater=K||E}H.prototype.isReactComponent={},H.prototype.setState=function(b,g){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,g,"setState")},H.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function re(){}re.prototype=H.prototype;function q(b,g,K){this.props=b,this.context=g,this.refs=O,this.updater=K||E}var R=q.prototype=new re;R.constructor=q,P(R,H.prototype),R.isPureReactComponent=!0;var A=Array.isArray,G=Object.prototype.hasOwnProperty,_={current:null},X={key:!0,ref:!0,__self:!0,__source:!0};function L(b,g,K){var $,Z={},de=null,pe=null;if(g!=null)for($ in g.ref!==void 0&&(pe=g.ref),g.key!==void 0&&(de=""+g.key),g)G.call(g,$)&&!X.hasOwnProperty($)&&(Z[$]=g[$]);var ce=arguments.length-2;if(ce===1)Z.children=K;else if(1<ce){for(var je=Array(ce),Ge=0;Ge<ce;Ge++)je[Ge]=arguments[Ge+2];Z.children=je}if(b&&b.defaultProps)for($ in ce=b.defaultProps,ce)Z[$]===void 0&&(Z[$]=ce[$]);return{$$typeof:o,type:b,key:de,ref:pe,props:Z,_owner:_.current}}function Q(b,g){return{$$typeof:o,type:b.type,key:g,ref:b.ref,props:b.props,_owner:b._owner}}function oe(b){return typeof b=="object"&&b!==null&&b.$$typeof===o}function le(b){var g={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(K){return g[K]})}var me=/\/+/g;function we(b,g){return typeof b=="object"&&b!==null&&b.key!=null?le(""+b.key):g.toString(36)}function be(b,g,K,$,Z){var de=typeof b;(de==="undefined"||de==="boolean")&&(b=null);var pe=!1;if(b===null)pe=!0;else switch(de){case"string":case"number":pe=!0;break;case"object":switch(b.$$typeof){case o:case u:pe=!0}}if(pe)return pe=b,Z=Z(pe),b=$===""?"."+we(pe,0):$,A(Z)?(K="",b!=null&&(K=b.replace(me,"$&/")+"/"),be(Z,g,K,"",function(Ge){return Ge})):Z!=null&&(oe(Z)&&(Z=Q(Z,K+(!Z.key||pe&&pe.key===Z.key?"":(""+Z.key).replace(me,"$&/")+"/")+b)),g.push(Z)),1;if(pe=0,$=$===""?".":$+":",A(b))for(var ce=0;ce<b.length;ce++){de=b[ce];var je=$+we(de,ce);pe+=be(de,g,K,je,Z)}else if(je=M(b),typeof je=="function")for(b=je.call(b),ce=0;!(de=b.next()).done;)de=de.value,je=$+we(de,ce++),pe+=be(de,g,K,je,Z);else if(de==="object")throw g=String(b),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return pe}function Re(b,g,K){if(b==null)return b;var $=[],Z=0;return be(b,$,"","",function(de){return g.call(K,de,Z++)}),$}function He(b){if(b._status===-1){var g=b._result;g=g(),g.then(function(K){(b._status===0||b._status===-1)&&(b._status=1,b._result=K)},function(K){(b._status===0||b._status===-1)&&(b._status=2,b._result=K)}),b._status===-1&&(b._status=0,b._result=g)}if(b._status===1)return b._result.default;throw b._result}var Ee={current:null},W={transition:null},D={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:W,ReactCurrentOwner:_};function V(){throw Error("act(...) is not supported in production builds of React.")}return ge.Children={map:Re,forEach:function(b,g,K){Re(b,function(){g.apply(this,arguments)},K)},count:function(b){var g=0;return Re(b,function(){g++}),g},toArray:function(b){return Re(b,function(g){return g})||[]},only:function(b){if(!oe(b))throw Error("React.Children.only expected to receive a single React element child.");return b}},ge.Component=H,ge.Fragment=s,ge.Profiler=p,ge.PureComponent=q,ge.StrictMode=h,ge.Suspense=c,ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,ge.act=V,ge.cloneElement=function(b,g,K){if(b==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+b+".");var $=P({},b.props),Z=b.key,de=b.ref,pe=b._owner;if(g!=null){if(g.ref!==void 0&&(de=g.ref,pe=_.current),g.key!==void 0&&(Z=""+g.key),b.type&&b.type.defaultProps)var ce=b.type.defaultProps;for(je in g)G.call(g,je)&&!X.hasOwnProperty(je)&&($[je]=g[je]===void 0&&ce!==void 0?ce[je]:g[je])}var je=arguments.length-2;if(je===1)$.children=K;else if(1<je){ce=Array(je);for(var Ge=0;Ge<je;Ge++)ce[Ge]=arguments[Ge+2];$.children=ce}return{$$typeof:o,type:b.type,key:Z,ref:de,props:$,_owner:pe}},ge.createContext=function(b){return b={$$typeof:k,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},b.Provider={$$typeof:x,_context:b},b.Consumer=b},ge.createElement=L,ge.createFactory=function(b){var g=L.bind(null,b);return g.type=b,g},ge.createRef=function(){return{current:null}},ge.forwardRef=function(b){return{$$typeof:w,render:b}},ge.isValidElement=oe,ge.lazy=function(b){return{$$typeof:z,_payload:{_status:-1,_result:b},_init:He}},ge.memo=function(b,g){return{$$typeof:v,type:b,compare:g===void 0?null:g}},ge.startTransition=function(b){var g=W.transition;W.transition={};try{b()}finally{W.transition=g}},ge.unstable_act=V,ge.useCallback=function(b,g){return Ee.current.useCallback(b,g)},ge.useContext=function(b){return Ee.current.useContext(b)},ge.useDebugValue=function(){},ge.useDeferredValue=function(b){return Ee.current.useDeferredValue(b)},ge.useEffect=function(b,g){return Ee.current.useEffect(b,g)},ge.useId=function(){return Ee.current.useId()},ge.useImperativeHandle=function(b,g,K){return Ee.current.useImperativeHandle(b,g,K)},ge.useInsertionEffect=function(b,g){return Ee.current.useInsertionEffect(b,g)},ge.useLayoutEffect=function(b,g){return Ee.current.useLayoutEffect(b,g)},ge.useMemo=function(b,g){return Ee.current.useMemo(b,g)},ge.useReducer=function(b,g,K){return Ee.current.useReducer(b,g,K)},ge.useRef=function(b){return Ee.current.useRef(b)},ge.useState=function(b){return Ee.current.useState(b)},ge.useSyncExternalStore=function(b,g,K){return Ee.current.useSyncExternalStore(b,g,K)},ge.useTransition=function(){return Ee.current.useTransition()},ge.version="18.3.1",ge}var Bd;function Go(){return Bd||(Bd=1,Co.exports=Im()),Co.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ad;function Bm(){if(Ad)return mi;Ad=1;var o=Go(),u=Symbol.for("react.element"),s=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function k(w,c,v){var z,j={},M=null,E=null;v!==void 0&&(M=""+v),c.key!==void 0&&(M=""+c.key),c.ref!==void 0&&(E=c.ref);for(z in c)h.call(c,z)&&!x.hasOwnProperty(z)&&(j[z]=c[z]);if(w&&w.defaultProps)for(z in c=w.defaultProps,c)j[z]===void 0&&(j[z]=c[z]);return{$$typeof:u,type:w,key:M,ref:E,props:j,_owner:p.current}}return mi.Fragment=s,mi.jsx=k,mi.jsxs=k,mi}var $d;function Am(){return $d||($d=1,Eo.exports=Bm()),Eo.exports}var i=Am(),S=Go();const $m=Dm(S);var Pa={},To={exports:{}},ur={},Po={exports:{}},Ro={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function Um(){return Ud||(Ud=1,(function(o){function u(W,D){var V=W.length;W.push(D);e:for(;0<V;){var b=V-1>>>1,g=W[b];if(0<p(g,D))W[b]=D,W[V]=g,V=b;else break e}}function s(W){return W.length===0?null:W[0]}function h(W){if(W.length===0)return null;var D=W[0],V=W.pop();if(V!==D){W[0]=V;e:for(var b=0,g=W.length,K=g>>>1;b<K;){var $=2*(b+1)-1,Z=W[$],de=$+1,pe=W[de];if(0>p(Z,V))de<g&&0>p(pe,Z)?(W[b]=pe,W[de]=V,b=de):(W[b]=Z,W[$]=V,b=$);else if(de<g&&0>p(pe,V))W[b]=pe,W[de]=V,b=de;else break e}}return D}function p(W,D){var V=W.sortIndex-D.sortIndex;return V!==0?V:W.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var x=performance;o.unstable_now=function(){return x.now()}}else{var k=Date,w=k.now();o.unstable_now=function(){return k.now()-w}}var c=[],v=[],z=1,j=null,M=3,E=!1,P=!1,O=!1,H=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(W){for(var D=s(v);D!==null;){if(D.callback===null)h(v);else if(D.startTime<=W)h(v),D.sortIndex=D.expirationTime,u(c,D);else break;D=s(v)}}function A(W){if(O=!1,R(W),!P)if(s(c)!==null)P=!0,He(G);else{var D=s(v);D!==null&&Ee(A,D.startTime-W)}}function G(W,D){P=!1,O&&(O=!1,re(L),L=-1),E=!0;var V=M;try{for(R(D),j=s(c);j!==null&&(!(j.expirationTime>D)||W&&!le());){var b=j.callback;if(typeof b=="function"){j.callback=null,M=j.priorityLevel;var g=b(j.expirationTime<=D);D=o.unstable_now(),typeof g=="function"?j.callback=g:j===s(c)&&h(c),R(D)}else h(c);j=s(c)}if(j!==null)var K=!0;else{var $=s(v);$!==null&&Ee(A,$.startTime-D),K=!1}return K}finally{j=null,M=V,E=!1}}var _=!1,X=null,L=-1,Q=5,oe=-1;function le(){return!(o.unstable_now()-oe<Q)}function me(){if(X!==null){var W=o.unstable_now();oe=W;var D=!0;try{D=X(!0,W)}finally{D?we():(_=!1,X=null)}}else _=!1}var we;if(typeof q=="function")we=function(){q(me)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Re=be.port2;be.port1.onmessage=me,we=function(){Re.postMessage(null)}}else we=function(){H(me,0)};function He(W){X=W,_||(_=!0,we())}function Ee(W,D){L=H(function(){W(o.unstable_now())},D)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(W){W.callback=null},o.unstable_continueExecution=function(){P||E||(P=!0,He(G))},o.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<W?Math.floor(1e3/W):5},o.unstable_getCurrentPriorityLevel=function(){return M},o.unstable_getFirstCallbackNode=function(){return s(c)},o.unstable_next=function(W){switch(M){case 1:case 2:case 3:var D=3;break;default:D=M}var V=M;M=D;try{return W()}finally{M=V}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(W,D){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var V=M;M=W;try{return D()}finally{M=V}},o.unstable_scheduleCallback=function(W,D,V){var b=o.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?b+V:b):V=b,W){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=V+g,W={id:z++,callback:D,priorityLevel:W,startTime:V,expirationTime:g,sortIndex:-1},V>b?(W.sortIndex=V,u(v,W),s(c)===null&&W===s(v)&&(O?(re(L),L=-1):O=!0,Ee(A,V-b))):(W.sortIndex=g,u(c,W),P||E||(P=!0,He(G))),W},o.unstable_shouldYield=le,o.unstable_wrapCallback=function(W){var D=M;return function(){var V=M;M=D;try{return W.apply(this,arguments)}finally{M=V}}}})(Ro)),Ro}var _d;function _m(){return _d||(_d=1,Po.exports=Um()),Po.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kd;function Km(){if(Kd)return ur;Kd=1;var o=Go(),u=_m();function s(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h=new Set,p={};function x(e,r){k(e,r),k(e+"Capture",r)}function k(e,r){for(p[e]=r,e=0;e<r.length;e++)h.add(r[e])}var w=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),c=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z={},j={};function M(e){return c.call(j,e)?!0:c.call(z,e)?!1:v.test(e)?j[e]=!0:(z[e]=!0,!1)}function E(e,r,t,n){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P(e,r,t,n){if(r===null||typeof r>"u"||E(e,r,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function O(e,r,t,n,a,l,d){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=l,this.removeEmptyString=d}var H={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){H[e]=new O(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];H[r]=new O(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){H[e]=new O(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){H[e]=new O(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){H[e]=new O(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){H[e]=new O(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){H[e]=new O(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){H[e]=new O(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){H[e]=new O(e,5,!1,e.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function q(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(re,q);H[r]=new O(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(re,q);H[r]=new O(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(re,q);H[r]=new O(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){H[e]=new O(e,1,!1,e.toLowerCase(),null,!1,!1)}),H.xlinkHref=new O("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){H[e]=new O(e,1,!1,e.toLowerCase(),null,!0,!0)});function R(e,r,t,n){var a=H.hasOwnProperty(r)?H[r]:null;(a!==null?a.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(P(r,t,a,n)&&(t=null),n||a===null?M(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(r=a.attributeName,n=a.attributeNamespace,t===null?e.removeAttribute(r):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,n?e.setAttributeNS(n,r,t):e.setAttribute(r,t))))}var A=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,G=Symbol.for("react.element"),_=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),le=Symbol.for("react.context"),me=Symbol.for("react.forward_ref"),we=Symbol.for("react.suspense"),be=Symbol.for("react.suspense_list"),Re=Symbol.for("react.memo"),He=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),W=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,b;function g(e){if(b===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);b=r&&r[1]||""}return`
`+b+e}var K=!1;function $(e,r){if(!e||K)return"";K=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(F){var n=F}Reflect.construct(e,[],r)}else{try{r.call()}catch(F){n=F}e.call(r.prototype)}else{try{throw Error()}catch(F){n=F}e()}}catch(F){if(F&&n&&typeof F.stack=="string"){for(var a=F.stack.split(`
`),l=n.stack.split(`
`),d=a.length-1,m=l.length-1;1<=d&&0<=m&&a[d]!==l[m];)m--;for(;1<=d&&0<=m;d--,m--)if(a[d]!==l[m]){if(d!==1||m!==1)do if(d--,m--,0>m||a[d]!==l[m]){var f=`
`+a[d].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=d&&0<=m);break}}}finally{K=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?g(e):""}function Z(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1),e;case 11:return e=$(e.type.render,!1),e;case 1:return e=$(e.type,!0),e;default:return""}}function de(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case X:return"Fragment";case _:return"Portal";case Q:return"Profiler";case L:return"StrictMode";case we:return"Suspense";case be:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case le:return(e.displayName||"Context")+".Consumer";case oe:return(e._context.displayName||"Context")+".Provider";case me:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Re:return r=e.displayName||null,r!==null?r:de(e.type)||"Memo";case He:r=e._payload,e=e._init;try{return de(e(r))}catch{}}return null}function pe(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return de(r);case 8:return r===L?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function je(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ge(e){var r=je(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),n=""+e[r];if(!e.hasOwnProperty(r)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,l=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return a.call(this)},set:function(d){n=""+d,l.call(this,d)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function ot(e){e._valueTracker||(e._valueTracker=Ge(e))}function vr(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),n="";return e&&(n=je(e)?e.checked?"true":"false":e.value),e=n,e!==t?(r.setValue(e),!0):!1}function Lt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cn(e,r){var t=r.checked;return V({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Tn(e,r){var t=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;t=ce(r.value!=null?r.value:t),e._wrapperState={initialChecked:n,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ki(e,r){r=r.checked,r!=null&&R(e,"checked",r,!1)}function Gt(e,r){ki(e,r);var t=ce(r.value),n=r.type;if(t!=null)n==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?C(e,r.type,t):r.hasOwnProperty("defaultValue")&&C(e,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function Pn(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function C(e,r,t){(r!=="number"||Lt(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var Y=Array.isArray;function fe(e,r,t,n){if(e=e.options,r){r={};for(var a=0;a<t.length;a++)r["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=r.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&n&&(e[t].defaultSelected=!0)}else{for(t=""+ce(t),r=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}r!==null||e[a].disabled||(r=e[a])}r!==null&&(r.selected=!0)}}function Se(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(s(91));return V({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ir(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(s(92));if(Y(t)){if(1<t.length)throw Error(s(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:ce(t)}}function Wr(e,r){var t=ce(r.value),n=ce(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),n!=null&&(e.defaultValue=""+n)}function Cr(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function yi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Br(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?yi(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zt,Ar=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,t,n,a){MSApp.execUnsafeLocalFunction(function(){return e(r,t,n,a)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(zt=zt||document.createElement("div"),zt.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=zt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Mt(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var st={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xi=["Webkit","ms","Moz","O"];Object.keys(st).forEach(function(e){xi.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),st[r]=st[e]})});function Rn(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||st.hasOwnProperty(e)&&st[e]?(""+r).trim():r+"px"}function Ne(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var n=t.indexOf("--")===0,a=Rn(t,r[t],n);t==="float"&&(t="cssFloat"),n?e.setProperty(t,a):e[t]=a}}var ut=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tr(e,r){if(r){if(ut[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(s(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(s(61))}if(r.style!=null&&typeof r.style!="object")throw Error(s(62))}}function $r(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dt=null;function Qt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gr=null,Xt=null,Zt=null;function es(e){if(e=Xn(e)){if(typeof Gr!="function")throw Error(s(280));var r=e.stateNode;r&&(r=Ki(r),Gr(e.stateNode,e.type,r))}}function rs(e){Xt?Zt?Zt.push(e):Zt=[e]:Xt=e}function ts(){if(Xt){var e=Xt,r=Zt;if(Zt=Xt=null,es(e),r)for(e=0;e<r.length;e++)es(r[e])}}function ns(e,r){return e(r)}function is(){}var Ua=!1;function as(e,r,t){if(Ua)return e(r,t);Ua=!0;try{return ns(e,r,t)}finally{Ua=!1,(Xt!==null||Zt!==null)&&(is(),ts())}}function Fn(e,r){var t=e.stateNode;if(t===null)return null;var n=Ki(t);if(n===null)return null;t=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,r,typeof t));return t}var _a=!1;if(w)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){_a=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{_a=!1}function $c(e,r,t,n,a,l,d,m,f){var F=Array.prototype.slice.call(arguments,3);try{r.apply(t,F)}catch(B){this.onError(B)}}var zn=!1,wi=null,ji=!1,Ka=null,Uc={onError:function(e){zn=!0,wi=e}};function _c(e,r,t,n,a,l,d,m,f){zn=!1,wi=null,$c.apply(Uc,arguments)}function Kc(e,r,t,n,a,l,d,m,f){if(_c.apply(this,arguments),zn){if(zn){var F=wi;zn=!1,wi=null}else throw Error(s(198));ji||(ji=!0,Ka=F)}}function Ot(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function ls(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function os(e){if(Ot(e)!==e)throw Error(s(188))}function Vc(e){var r=e.alternate;if(!r){if(r=Ot(e),r===null)throw Error(s(188));return r!==e?null:e}for(var t=e,n=r;;){var a=t.return;if(a===null)break;var l=a.alternate;if(l===null){if(n=a.return,n!==null){t=n;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===t)return os(a),e;if(l===n)return os(a),r;l=l.sibling}throw Error(s(188))}if(t.return!==n.return)t=a,n=l;else{for(var d=!1,m=a.child;m;){if(m===t){d=!0,t=a,n=l;break}if(m===n){d=!0,n=a,t=l;break}m=m.sibling}if(!d){for(m=l.child;m;){if(m===t){d=!0,t=l,n=a;break}if(m===n){d=!0,n=l,t=a;break}m=m.sibling}if(!d)throw Error(s(189))}}if(t.alternate!==n)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:r}function ss(e){return e=Vc(e),e!==null?us(e):null}function us(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=us(e);if(r!==null)return r;e=e.sibling}return null}var ds=u.unstable_scheduleCallback,cs=u.unstable_cancelCallback,Jc=u.unstable_shouldYield,qc=u.unstable_requestPaint,Ie=u.unstable_now,Yc=u.unstable_getCurrentPriorityLevel,Va=u.unstable_ImmediatePriority,hs=u.unstable_UserBlockingPriority,Si=u.unstable_NormalPriority,Wc=u.unstable_LowPriority,ms=u.unstable_IdlePriority,Ni=null,Ur=null;function Gc(e){if(Ur&&typeof Ur.onCommitFiberRoot=="function")try{Ur.onCommitFiberRoot(Ni,e,void 0,(e.current.flags&128)===128)}catch{}}var Pr=Math.clz32?Math.clz32:Zc,Qc=Math.log,Xc=Math.LN2;function Zc(e){return e>>>=0,e===0?32:31-(Qc(e)/Xc|0)|0}var Ei=64,Ci=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ti(e,r){var t=e.pendingLanes;if(t===0)return 0;var n=0,a=e.suspendedLanes,l=e.pingedLanes,d=t&268435455;if(d!==0){var m=d&~a;m!==0?n=Mn(m):(l&=d,l!==0&&(n=Mn(l)))}else d=t&~a,d!==0?n=Mn(d):l!==0&&(n=Mn(l));if(n===0)return 0;if(r!==0&&r!==n&&(r&a)===0&&(a=n&-n,l=r&-r,a>=l||a===16&&(l&4194240)!==0))return r;if((n&4)!==0&&(n|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=n;0<r;)t=31-Pr(r),a=1<<t,n|=e[t],r&=~a;return n}function eh(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rh(e,r){for(var t=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var d=31-Pr(l),m=1<<d,f=a[d];f===-1?((m&t)===0||(m&n)!==0)&&(a[d]=eh(m,r)):f<=r&&(e.expiredLanes|=m),l&=~m}}function Ja(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ps(){var e=Ei;return Ei<<=1,(Ei&4194240)===0&&(Ei=64),e}function qa(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function On(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Pr(r),e[r]=t}function th(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Pr(t),l=1<<a;r[a]=0,n[a]=-1,e[a]=-1,t&=~l}}function Ya(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var n=31-Pr(t),a=1<<n;a&r|e[n]&r&&(e[n]|=r),t&=~a}}var Ce=0;function fs(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var gs,Wa,bs,vs,ks,Ga=!1,Pi=[],ct=null,ht=null,mt=null,Hn=new Map,Dn=new Map,pt=[],nh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ys(e,r){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":Hn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Dn.delete(r.pointerId)}}function In(e,r,t,n,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:r,domEventName:t,eventSystemFlags:n,nativeEvent:l,targetContainers:[a]},r!==null&&(r=Xn(r),r!==null&&Wa(r)),e):(e.eventSystemFlags|=n,r=e.targetContainers,a!==null&&r.indexOf(a)===-1&&r.push(a),e)}function ih(e,r,t,n,a){switch(r){case"focusin":return ct=In(ct,e,r,t,n,a),!0;case"dragenter":return ht=In(ht,e,r,t,n,a),!0;case"mouseover":return mt=In(mt,e,r,t,n,a),!0;case"pointerover":var l=a.pointerId;return Hn.set(l,In(Hn.get(l)||null,e,r,t,n,a)),!0;case"gotpointercapture":return l=a.pointerId,Dn.set(l,In(Dn.get(l)||null,e,r,t,n,a)),!0}return!1}function xs(e){var r=Ht(e.target);if(r!==null){var t=Ot(r);if(t!==null){if(r=t.tag,r===13){if(r=ls(t),r!==null){e.blockedOn=r,ks(e.priority,function(){bs(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ri(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=Xa(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);dt=n,t.target.dispatchEvent(n),dt=null}else return r=Xn(t),r!==null&&Wa(r),e.blockedOn=t,!1;r.shift()}return!0}function ws(e,r,t){Ri(e)&&t.delete(r)}function ah(){Ga=!1,ct!==null&&Ri(ct)&&(ct=null),ht!==null&&Ri(ht)&&(ht=null),mt!==null&&Ri(mt)&&(mt=null),Hn.forEach(ws),Dn.forEach(ws)}function Bn(e,r){e.blockedOn===r&&(e.blockedOn=null,Ga||(Ga=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,ah)))}function An(e){function r(a){return Bn(a,e)}if(0<Pi.length){Bn(Pi[0],e);for(var t=1;t<Pi.length;t++){var n=Pi[t];n.blockedOn===e&&(n.blockedOn=null)}}for(ct!==null&&Bn(ct,e),ht!==null&&Bn(ht,e),mt!==null&&Bn(mt,e),Hn.forEach(r),Dn.forEach(r),t=0;t<pt.length;t++)n=pt[t],n.blockedOn===e&&(n.blockedOn=null);for(;0<pt.length&&(t=pt[0],t.blockedOn===null);)xs(t),t.blockedOn===null&&pt.shift()}var en=A.ReactCurrentBatchConfig,Fi=!0;function lh(e,r,t,n){var a=Ce,l=en.transition;en.transition=null;try{Ce=1,Qa(e,r,t,n)}finally{Ce=a,en.transition=l}}function oh(e,r,t,n){var a=Ce,l=en.transition;en.transition=null;try{Ce=4,Qa(e,r,t,n)}finally{Ce=a,en.transition=l}}function Qa(e,r,t,n){if(Fi){var a=Xa(e,r,t,n);if(a===null)fl(e,r,n,Li,t),ys(e,n);else if(ih(a,e,r,t,n))n.stopPropagation();else if(ys(e,n),r&4&&-1<nh.indexOf(e)){for(;a!==null;){var l=Xn(a);if(l!==null&&gs(l),l=Xa(e,r,t,n),l===null&&fl(e,r,n,Li,t),l===a)break;a=l}a!==null&&n.stopPropagation()}else fl(e,r,n,null,t)}}var Li=null;function Xa(e,r,t,n){if(Li=null,e=Qt(n),e=Ht(e),e!==null)if(r=Ot(e),r===null)e=null;else if(t=r.tag,t===13){if(e=ls(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Li=e,null}function js(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yc()){case Va:return 1;case hs:return 4;case Si:case Wc:return 16;case ms:return 536870912;default:return 16}default:return 16}}var ft=null,Za=null,zi=null;function Ss(){if(zi)return zi;var e,r=Za,t=r.length,n,a="value"in ft?ft.value:ft.textContent,l=a.length;for(e=0;e<t&&r[e]===a[e];e++);var d=t-e;for(n=1;n<=d&&r[t-n]===a[l-n];n++);return zi=a.slice(e,1<n?1-n:void 0)}function Mi(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function Ns(){return!1}function hr(e){function r(t,n,a,l,d){this._reactName=t,this._targetInst=a,this.type=n,this.nativeEvent=l,this.target=d,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(t=e[m],this[m]=t?t(l):l[m]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Oi:Ns,this.isPropagationStopped=Ns,this}return V(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),r}var rn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=hr(rn),$n=V({},rn,{view:0,detail:0}),sh=hr($n),rl,tl,Un,Hi=V({},$n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:il,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Un&&(Un&&e.type==="mousemove"?(rl=e.screenX-Un.screenX,tl=e.screenY-Un.screenY):tl=rl=0,Un=e),rl)},movementY:function(e){return"movementY"in e?e.movementY:tl}}),Es=hr(Hi),uh=V({},Hi,{dataTransfer:0}),dh=hr(uh),ch=V({},$n,{relatedTarget:0}),nl=hr(ch),hh=V({},rn,{animationName:0,elapsedTime:0,pseudoElement:0}),mh=hr(hh),ph=V({},rn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),fh=hr(ph),gh=V({},rn,{data:0}),Cs=hr(gh),bh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yh(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=kh[e])?!!r[e]:!1}function il(){return yh}var xh=V({},$n,{key:function(e){if(e.key){var r=bh[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:il,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wh=hr(xh),jh=V({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ts=hr(jh),Sh=V({},$n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:il}),Nh=hr(Sh),Eh=V({},rn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ch=hr(Eh),Th=V({},Hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ph=hr(Th),Rh=[9,13,27,32],al=w&&"CompositionEvent"in window,_n=null;w&&"documentMode"in document&&(_n=document.documentMode);var Fh=w&&"TextEvent"in window&&!_n,Ps=w&&(!al||_n&&8<_n&&11>=_n),Rs=" ",Fs=!1;function Ls(e,r){switch(e){case"keyup":return Rh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tn=!1;function Lh(e,r){switch(e){case"compositionend":return zs(r);case"keypress":return r.which!==32?null:(Fs=!0,Rs);case"textInput":return e=r.data,e===Rs&&Fs?null:e;default:return null}}function zh(e,r){if(tn)return e==="compositionend"||!al&&Ls(e,r)?(e=Ss(),zi=Za=ft=null,tn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Ps&&r.locale!=="ko"?null:r.data;default:return null}}var Mh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ms(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!Mh[e.type]:r==="textarea"}function Os(e,r,t,n){rs(n),r=$i(r,"onChange"),0<r.length&&(t=new el("onChange","change",null,t,n),e.push({event:t,listeners:r}))}var Kn=null,Vn=null;function Oh(e){Zs(e,0)}function Di(e){var r=sn(e);if(vr(r))return e}function Hh(e,r){if(e==="change")return r}var Hs=!1;if(w){var ll;if(w){var ol="oninput"in document;if(!ol){var Ds=document.createElement("div");Ds.setAttribute("oninput","return;"),ol=typeof Ds.oninput=="function"}ll=ol}else ll=!1;Hs=ll&&(!document.documentMode||9<document.documentMode)}function Is(){Kn&&(Kn.detachEvent("onpropertychange",Bs),Vn=Kn=null)}function Bs(e){if(e.propertyName==="value"&&Di(Vn)){var r=[];Os(r,Vn,e,Qt(e)),as(Oh,r)}}function Dh(e,r,t){e==="focusin"?(Is(),Kn=r,Vn=t,Kn.attachEvent("onpropertychange",Bs)):e==="focusout"&&Is()}function Ih(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Di(Vn)}function Bh(e,r){if(e==="click")return Di(r)}function Ah(e,r){if(e==="input"||e==="change")return Di(r)}function $h(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Rr=typeof Object.is=="function"?Object.is:$h;function Jn(e,r){if(Rr(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var a=t[n];if(!c.call(r,a)||!Rr(e[a],r[a]))return!1}return!0}function As(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $s(e,r){var t=As(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=r&&n>=r)return{node:t,offset:r-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=As(t)}}function Us(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Us(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function _s(){for(var e=window,r=Lt();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=Lt(e.document)}return r}function sl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Uh(e){var r=_s(),t=e.focusedElem,n=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&Us(t.ownerDocument.documentElement,t)){if(n!==null&&sl(t)){if(r=n.start,e=n.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,l=Math.min(n.start,a);n=n.end===void 0?l:Math.min(n.end,a),!e.extend&&l>n&&(a=n,n=l,l=a),a=$s(t,l);var d=$s(t,n);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(r=r.createRange(),r.setStart(a.node,a.offset),e.removeAllRanges(),l>n?(e.addRange(r),e.extend(d.node,d.offset)):(r.setEnd(d.node,d.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _h=w&&"documentMode"in document&&11>=document.documentMode,nn=null,ul=null,qn=null,dl=!1;function Ks(e,r,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;dl||nn==null||nn!==Lt(n)||(n=nn,"selectionStart"in n&&sl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),qn&&Jn(qn,n)||(qn=n,n=$i(ul,"onSelect"),0<n.length&&(r=new el("onSelect","select",null,r,t),e.push({event:r,listeners:n}),r.target=nn)))}function Ii(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var an={animationend:Ii("Animation","AnimationEnd"),animationiteration:Ii("Animation","AnimationIteration"),animationstart:Ii("Animation","AnimationStart"),transitionend:Ii("Transition","TransitionEnd")},cl={},Vs={};w&&(Vs=document.createElement("div").style,"AnimationEvent"in window||(delete an.animationend.animation,delete an.animationiteration.animation,delete an.animationstart.animation),"TransitionEvent"in window||delete an.transitionend.transition);function Bi(e){if(cl[e])return cl[e];if(!an[e])return e;var r=an[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in Vs)return cl[e]=r[t];return e}var Js=Bi("animationend"),qs=Bi("animationiteration"),Ys=Bi("animationstart"),Ws=Bi("transitionend"),Gs=new Map,Qs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gt(e,r){Gs.set(e,r),x(r,[e])}for(var hl=0;hl<Qs.length;hl++){var ml=Qs[hl],Kh=ml.toLowerCase(),Vh=ml[0].toUpperCase()+ml.slice(1);gt(Kh,"on"+Vh)}gt(Js,"onAnimationEnd"),gt(qs,"onAnimationIteration"),gt(Ys,"onAnimationStart"),gt("dblclick","onDoubleClick"),gt("focusin","onFocus"),gt("focusout","onBlur"),gt(Ws,"onTransitionEnd"),k("onMouseEnter",["mouseout","mouseover"]),k("onMouseLeave",["mouseout","mouseover"]),k("onPointerEnter",["pointerout","pointerover"]),k("onPointerLeave",["pointerout","pointerover"]),x("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),x("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),x("onBeforeInput",["compositionend","keypress","textInput","paste"]),x("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),x("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yn));function Xs(e,r,t){var n=e.type||"unknown-event";e.currentTarget=t,Kc(n,r,void 0,e),e.currentTarget=null}function Zs(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],a=n.event;n=n.listeners;e:{var l=void 0;if(r)for(var d=n.length-1;0<=d;d--){var m=n[d],f=m.instance,F=m.currentTarget;if(m=m.listener,f!==l&&a.isPropagationStopped())break e;Xs(a,m,F),l=f}else for(d=0;d<n.length;d++){if(m=n[d],f=m.instance,F=m.currentTarget,m=m.listener,f!==l&&a.isPropagationStopped())break e;Xs(a,m,F),l=f}}}if(ji)throw e=Ka,ji=!1,Ka=null,e}function Fe(e,r){var t=r[xl];t===void 0&&(t=r[xl]=new Set);var n=e+"__bubble";t.has(n)||(eu(r,e,2,!1),t.add(n))}function pl(e,r,t){var n=0;r&&(n|=4),eu(t,e,n,r)}var Ai="_reactListening"+Math.random().toString(36).slice(2);function Wn(e){if(!e[Ai]){e[Ai]=!0,h.forEach(function(t){t!=="selectionchange"&&(Jh.has(t)||pl(t,!1,e),pl(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Ai]||(r[Ai]=!0,pl("selectionchange",!1,r))}}function eu(e,r,t,n){switch(js(r)){case 1:var a=lh;break;case 4:a=oh;break;default:a=Qa}t=a.bind(null,r,t,e),a=void 0,!_a||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(r,t,{capture:!0,passive:a}):e.addEventListener(r,t,!0):a!==void 0?e.addEventListener(r,t,{passive:a}):e.addEventListener(r,t,!1)}function fl(e,r,t,n,a){var l=n;if((r&1)===0&&(r&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var m=n.stateNode.containerInfo;if(m===a||m.nodeType===8&&m.parentNode===a)break;if(d===4)for(d=n.return;d!==null;){var f=d.tag;if((f===3||f===4)&&(f=d.stateNode.containerInfo,f===a||f.nodeType===8&&f.parentNode===a))return;d=d.return}for(;m!==null;){if(d=Ht(m),d===null)return;if(f=d.tag,f===5||f===6){n=l=d;continue e}m=m.parentNode}}n=n.return}as(function(){var F=l,B=Qt(t),U=[];e:{var I=Gs.get(e);if(I!==void 0){var ee=el,ne=e;switch(e){case"keypress":if(Mi(t)===0)break e;case"keydown":case"keyup":ee=wh;break;case"focusin":ne="focus",ee=nl;break;case"focusout":ne="blur",ee=nl;break;case"beforeblur":case"afterblur":ee=nl;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Es;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=dh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=Nh;break;case Js:case qs:case Ys:ee=mh;break;case Ws:ee=Ch;break;case"scroll":ee=sh;break;case"wheel":ee=Ph;break;case"copy":case"cut":case"paste":ee=fh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=Ts}var ie=(r&4)!==0,Be=!ie&&e==="scroll",N=ie?I!==null?I+"Capture":null:I;ie=[];for(var y=F,T;y!==null;){T=y;var J=T.stateNode;if(T.tag===5&&J!==null&&(T=J,N!==null&&(J=Fn(y,N),J!=null&&ie.push(Gn(y,J,T)))),Be)break;y=y.return}0<ie.length&&(I=new ee(I,ne,null,t,B),U.push({event:I,listeners:ie}))}}if((r&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",ee=e==="mouseout"||e==="pointerout",I&&t!==dt&&(ne=t.relatedTarget||t.fromElement)&&(Ht(ne)||ne[Qr]))break e;if((ee||I)&&(I=B.window===B?B:(I=B.ownerDocument)?I.defaultView||I.parentWindow:window,ee?(ne=t.relatedTarget||t.toElement,ee=F,ne=ne?Ht(ne):null,ne!==null&&(Be=Ot(ne),ne!==Be||ne.tag!==5&&ne.tag!==6)&&(ne=null)):(ee=null,ne=F),ee!==ne)){if(ie=Es,J="onMouseLeave",N="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Ts,J="onPointerLeave",N="onPointerEnter",y="pointer"),Be=ee==null?I:sn(ee),T=ne==null?I:sn(ne),I=new ie(J,y+"leave",ee,t,B),I.target=Be,I.relatedTarget=T,J=null,Ht(B)===F&&(ie=new ie(N,y+"enter",ne,t,B),ie.target=T,ie.relatedTarget=Be,J=ie),Be=J,ee&&ne)r:{for(ie=ee,N=ne,y=0,T=ie;T;T=ln(T))y++;for(T=0,J=N;J;J=ln(J))T++;for(;0<y-T;)ie=ln(ie),y--;for(;0<T-y;)N=ln(N),T--;for(;y--;){if(ie===N||N!==null&&ie===N.alternate)break r;ie=ln(ie),N=ln(N)}ie=null}else ie=null;ee!==null&&ru(U,I,ee,ie,!1),ne!==null&&Be!==null&&ru(U,Be,ne,ie,!0)}}e:{if(I=F?sn(F):window,ee=I.nodeName&&I.nodeName.toLowerCase(),ee==="select"||ee==="input"&&I.type==="file")var ae=Hh;else if(Ms(I))if(Hs)ae=Ah;else{ae=Ih;var se=Dh}else(ee=I.nodeName)&&ee.toLowerCase()==="input"&&(I.type==="checkbox"||I.type==="radio")&&(ae=Bh);if(ae&&(ae=ae(e,F))){Os(U,ae,t,B);break e}se&&se(e,I,F),e==="focusout"&&(se=I._wrapperState)&&se.controlled&&I.type==="number"&&C(I,"number",I.value)}switch(se=F?sn(F):window,e){case"focusin":(Ms(se)||se.contentEditable==="true")&&(nn=se,ul=F,qn=null);break;case"focusout":qn=ul=nn=null;break;case"mousedown":dl=!0;break;case"contextmenu":case"mouseup":case"dragend":dl=!1,Ks(U,t,B);break;case"selectionchange":if(_h)break;case"keydown":case"keyup":Ks(U,t,B)}var ue;if(al)e:{switch(e){case"compositionstart":var he="onCompositionStart";break e;case"compositionend":he="onCompositionEnd";break e;case"compositionupdate":he="onCompositionUpdate";break e}he=void 0}else tn?Ls(e,t)&&(he="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(he="onCompositionStart");he&&(Ps&&t.locale!=="ko"&&(tn||he!=="onCompositionStart"?he==="onCompositionEnd"&&tn&&(ue=Ss()):(ft=B,Za="value"in ft?ft.value:ft.textContent,tn=!0)),se=$i(F,he),0<se.length&&(he=new Cs(he,e,null,t,B),U.push({event:he,listeners:se}),ue?he.data=ue:(ue=zs(t),ue!==null&&(he.data=ue)))),(ue=Fh?Lh(e,t):zh(e,t))&&(F=$i(F,"onBeforeInput"),0<F.length&&(B=new Cs("onBeforeInput","beforeinput",null,t,B),U.push({event:B,listeners:F}),B.data=ue))}Zs(U,r)})}function Gn(e,r,t){return{instance:e,listener:r,currentTarget:t}}function $i(e,r){for(var t=r+"Capture",n=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Fn(e,t),l!=null&&n.unshift(Gn(e,l,a)),l=Fn(e,r),l!=null&&n.push(Gn(e,l,a))),e=e.return}return n}function ln(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ru(e,r,t,n,a){for(var l=r._reactName,d=[];t!==null&&t!==n;){var m=t,f=m.alternate,F=m.stateNode;if(f!==null&&f===n)break;m.tag===5&&F!==null&&(m=F,a?(f=Fn(t,l),f!=null&&d.unshift(Gn(t,f,m))):a||(f=Fn(t,l),f!=null&&d.push(Gn(t,f,m)))),t=t.return}d.length!==0&&e.push({event:r,listeners:d})}var qh=/\r\n?/g,Yh=/\u0000|\uFFFD/g;function tu(e){return(typeof e=="string"?e:""+e).replace(qh,`
`).replace(Yh,"")}function Ui(e,r,t){if(r=tu(r),tu(e)!==r&&t)throw Error(s(425))}function _i(){}var gl=null,bl=null;function vl(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var kl=typeof setTimeout=="function"?setTimeout:void 0,Wh=typeof clearTimeout=="function"?clearTimeout:void 0,nu=typeof Promise=="function"?Promise:void 0,Gh=typeof queueMicrotask=="function"?queueMicrotask:typeof nu<"u"?function(e){return nu.resolve(null).then(e).catch(Qh)}:kl;function Qh(e){setTimeout(function(){throw e})}function yl(e,r){var t=r,n=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(n===0){e.removeChild(a),An(r);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=a}while(t);An(r)}function bt(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function iu(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var on=Math.random().toString(36).slice(2),_r="__reactFiber$"+on,Qn="__reactProps$"+on,Qr="__reactContainer$"+on,xl="__reactEvents$"+on,Xh="__reactListeners$"+on,Zh="__reactHandles$"+on;function Ht(e){var r=e[_r];if(r)return r;for(var t=e.parentNode;t;){if(r=t[Qr]||t[_r]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=iu(e);e!==null;){if(t=e[_r])return t;e=iu(e)}return r}e=t,t=e.parentNode}return null}function Xn(e){return e=e[_r]||e[Qr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Ki(e){return e[Qn]||null}var wl=[],un=-1;function vt(e){return{current:e}}function Le(e){0>un||(e.current=wl[un],wl[un]=null,un--)}function Te(e,r){un++,wl[un]=e.current,e.current=r}var kt={},Qe=vt(kt),ir=vt(!1),Dt=kt;function dn(e,r){var t=e.type.contextTypes;if(!t)return kt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in t)a[l]=r[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),a}function ar(e){return e=e.childContextTypes,e!=null}function Vi(){Le(ir),Le(Qe)}function au(e,r,t){if(Qe.current!==kt)throw Error(s(168));Te(Qe,r),Te(ir,t)}function lu(e,r,t){var n=e.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var a in n)if(!(a in r))throw Error(s(108,pe(e)||"Unknown",a));return V({},t,n)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,Dt=Qe.current,Te(Qe,e),Te(ir,ir.current),!0}function ou(e,r,t){var n=e.stateNode;if(!n)throw Error(s(169));t?(e=lu(e,r,Dt),n.__reactInternalMemoizedMergedChildContext=e,Le(ir),Le(Qe),Te(Qe,e)):Le(ir),Te(ir,t)}var Xr=null,qi=!1,jl=!1;function su(e){Xr===null?Xr=[e]:Xr.push(e)}function em(e){qi=!0,su(e)}function yt(){if(!jl&&Xr!==null){jl=!0;var e=0,r=Ce;try{var t=Xr;for(Ce=1;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}Xr=null,qi=!1}catch(a){throw Xr!==null&&(Xr=Xr.slice(e+1)),ds(Va,yt),a}finally{Ce=r,jl=!1}}return null}var cn=[],hn=0,Yi=null,Wi=0,kr=[],yr=0,It=null,Zr=1,et="";function Bt(e,r){cn[hn++]=Wi,cn[hn++]=Yi,Yi=e,Wi=r}function uu(e,r,t){kr[yr++]=Zr,kr[yr++]=et,kr[yr++]=It,It=e;var n=Zr;e=et;var a=32-Pr(n)-1;n&=~(1<<a),t+=1;var l=32-Pr(r)+a;if(30<l){var d=a-a%5;l=(n&(1<<d)-1).toString(32),n>>=d,a-=d,Zr=1<<32-Pr(r)+a|t<<a|n,et=l+e}else Zr=1<<l|t<<a|n,et=e}function Sl(e){e.return!==null&&(Bt(e,1),uu(e,1,0))}function Nl(e){for(;e===Yi;)Yi=cn[--hn],cn[hn]=null,Wi=cn[--hn],cn[hn]=null;for(;e===It;)It=kr[--yr],kr[yr]=null,et=kr[--yr],kr[yr]=null,Zr=kr[--yr],kr[yr]=null}var mr=null,pr=null,ze=!1,Fr=null;function du(e,r){var t=Sr(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function cu(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,mr=e,pr=bt(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,mr=e,pr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=It!==null?{id:Zr,overflow:et}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=Sr(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,mr=e,pr=null,!0):!1;default:return!1}}function El(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Cl(e){if(ze){var r=pr;if(r){var t=r;if(!cu(e,r)){if(El(e))throw Error(s(418));r=bt(t.nextSibling);var n=mr;r&&cu(e,r)?du(n,t):(e.flags=e.flags&-4097|2,ze=!1,mr=e)}}else{if(El(e))throw Error(s(418));e.flags=e.flags&-4097|2,ze=!1,mr=e}}}function hu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mr=e}function Gi(e){if(e!==mr)return!1;if(!ze)return hu(e),ze=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!vl(e.type,e.memoizedProps)),r&&(r=pr)){if(El(e))throw mu(),Error(s(418));for(;r;)du(e,r),r=bt(r.nextSibling)}if(hu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){pr=bt(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}pr=null}}else pr=mr?bt(e.stateNode.nextSibling):null;return!0}function mu(){for(var e=pr;e;)e=bt(e.nextSibling)}function mn(){pr=mr=null,ze=!1}function Tl(e){Fr===null?Fr=[e]:Fr.push(e)}var rm=A.ReactCurrentBatchConfig;function Zn(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(s(309));var n=t.stateNode}if(!n)throw Error(s(147,e));var a=n,l=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===l?r.ref:(r=function(d){var m=a.refs;d===null?delete m[l]:m[l]=d},r._stringRef=l,r)}if(typeof e!="string")throw Error(s(284));if(!t._owner)throw Error(s(290,e))}return e}function Qi(e,r){throw e=Object.prototype.toString.call(r),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function pu(e){var r=e._init;return r(e._payload)}function fu(e){function r(N,y){if(e){var T=N.deletions;T===null?(N.deletions=[y],N.flags|=16):T.push(y)}}function t(N,y){if(!e)return null;for(;y!==null;)r(N,y),y=y.sibling;return null}function n(N,y){for(N=new Map;y!==null;)y.key!==null?N.set(y.key,y):N.set(y.index,y),y=y.sibling;return N}function a(N,y){return N=Tt(N,y),N.index=0,N.sibling=null,N}function l(N,y,T){return N.index=T,e?(T=N.alternate,T!==null?(T=T.index,T<y?(N.flags|=2,y):T):(N.flags|=2,y)):(N.flags|=1048576,y)}function d(N){return e&&N.alternate===null&&(N.flags|=2),N}function m(N,y,T,J){return y===null||y.tag!==6?(y=yo(T,N.mode,J),y.return=N,y):(y=a(y,T),y.return=N,y)}function f(N,y,T,J){var ae=T.type;return ae===X?B(N,y,T.props.children,J,T.key):y!==null&&(y.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===He&&pu(ae)===y.type)?(J=a(y,T.props),J.ref=Zn(N,y,T),J.return=N,J):(J=xa(T.type,T.key,T.props,null,N.mode,J),J.ref=Zn(N,y,T),J.return=N,J)}function F(N,y,T,J){return y===null||y.tag!==4||y.stateNode.containerInfo!==T.containerInfo||y.stateNode.implementation!==T.implementation?(y=xo(T,N.mode,J),y.return=N,y):(y=a(y,T.children||[]),y.return=N,y)}function B(N,y,T,J,ae){return y===null||y.tag!==7?(y=qt(T,N.mode,J,ae),y.return=N,y):(y=a(y,T),y.return=N,y)}function U(N,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return y=yo(""+y,N.mode,T),y.return=N,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case G:return T=xa(y.type,y.key,y.props,null,N.mode,T),T.ref=Zn(N,null,y),T.return=N,T;case _:return y=xo(y,N.mode,T),y.return=N,y;case He:var J=y._init;return U(N,J(y._payload),T)}if(Y(y)||D(y))return y=qt(y,N.mode,T,null),y.return=N,y;Qi(N,y)}return null}function I(N,y,T,J){var ae=y!==null?y.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return ae!==null?null:m(N,y,""+T,J);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case G:return T.key===ae?f(N,y,T,J):null;case _:return T.key===ae?F(N,y,T,J):null;case He:return ae=T._init,I(N,y,ae(T._payload),J)}if(Y(T)||D(T))return ae!==null?null:B(N,y,T,J,null);Qi(N,T)}return null}function ee(N,y,T,J,ae){if(typeof J=="string"&&J!==""||typeof J=="number")return N=N.get(T)||null,m(y,N,""+J,ae);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case G:return N=N.get(J.key===null?T:J.key)||null,f(y,N,J,ae);case _:return N=N.get(J.key===null?T:J.key)||null,F(y,N,J,ae);case He:var se=J._init;return ee(N,y,T,se(J._payload),ae)}if(Y(J)||D(J))return N=N.get(T)||null,B(y,N,J,ae,null);Qi(y,J)}return null}function ne(N,y,T,J){for(var ae=null,se=null,ue=y,he=y=0,Ve=null;ue!==null&&he<T.length;he++){ue.index>he?(Ve=ue,ue=null):Ve=ue.sibling;var ke=I(N,ue,T[he],J);if(ke===null){ue===null&&(ue=Ve);break}e&&ue&&ke.alternate===null&&r(N,ue),y=l(ke,y,he),se===null?ae=ke:se.sibling=ke,se=ke,ue=Ve}if(he===T.length)return t(N,ue),ze&&Bt(N,he),ae;if(ue===null){for(;he<T.length;he++)ue=U(N,T[he],J),ue!==null&&(y=l(ue,y,he),se===null?ae=ue:se.sibling=ue,se=ue);return ze&&Bt(N,he),ae}for(ue=n(N,ue);he<T.length;he++)Ve=ee(ue,N,he,T[he],J),Ve!==null&&(e&&Ve.alternate!==null&&ue.delete(Ve.key===null?he:Ve.key),y=l(Ve,y,he),se===null?ae=Ve:se.sibling=Ve,se=Ve);return e&&ue.forEach(function(Pt){return r(N,Pt)}),ze&&Bt(N,he),ae}function ie(N,y,T,J){var ae=D(T);if(typeof ae!="function")throw Error(s(150));if(T=ae.call(T),T==null)throw Error(s(151));for(var se=ae=null,ue=y,he=y=0,Ve=null,ke=T.next();ue!==null&&!ke.done;he++,ke=T.next()){ue.index>he?(Ve=ue,ue=null):Ve=ue.sibling;var Pt=I(N,ue,ke.value,J);if(Pt===null){ue===null&&(ue=Ve);break}e&&ue&&Pt.alternate===null&&r(N,ue),y=l(Pt,y,he),se===null?ae=Pt:se.sibling=Pt,se=Pt,ue=Ve}if(ke.done)return t(N,ue),ze&&Bt(N,he),ae;if(ue===null){for(;!ke.done;he++,ke=T.next())ke=U(N,ke.value,J),ke!==null&&(y=l(ke,y,he),se===null?ae=ke:se.sibling=ke,se=ke);return ze&&Bt(N,he),ae}for(ue=n(N,ue);!ke.done;he++,ke=T.next())ke=ee(ue,N,he,ke.value,J),ke!==null&&(e&&ke.alternate!==null&&ue.delete(ke.key===null?he:ke.key),y=l(ke,y,he),se===null?ae=ke:se.sibling=ke,se=ke);return e&&ue.forEach(function(Mm){return r(N,Mm)}),ze&&Bt(N,he),ae}function Be(N,y,T,J){if(typeof T=="object"&&T!==null&&T.type===X&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case G:e:{for(var ae=T.key,se=y;se!==null;){if(se.key===ae){if(ae=T.type,ae===X){if(se.tag===7){t(N,se.sibling),y=a(se,T.props.children),y.return=N,N=y;break e}}else if(se.elementType===ae||typeof ae=="object"&&ae!==null&&ae.$$typeof===He&&pu(ae)===se.type){t(N,se.sibling),y=a(se,T.props),y.ref=Zn(N,se,T),y.return=N,N=y;break e}t(N,se);break}else r(N,se);se=se.sibling}T.type===X?(y=qt(T.props.children,N.mode,J,T.key),y.return=N,N=y):(J=xa(T.type,T.key,T.props,null,N.mode,J),J.ref=Zn(N,y,T),J.return=N,N=J)}return d(N);case _:e:{for(se=T.key;y!==null;){if(y.key===se)if(y.tag===4&&y.stateNode.containerInfo===T.containerInfo&&y.stateNode.implementation===T.implementation){t(N,y.sibling),y=a(y,T.children||[]),y.return=N,N=y;break e}else{t(N,y);break}else r(N,y);y=y.sibling}y=xo(T,N.mode,J),y.return=N,N=y}return d(N);case He:return se=T._init,Be(N,y,se(T._payload),J)}if(Y(T))return ne(N,y,T,J);if(D(T))return ie(N,y,T,J);Qi(N,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,y!==null&&y.tag===6?(t(N,y.sibling),y=a(y,T),y.return=N,N=y):(t(N,y),y=yo(T,N.mode,J),y.return=N,N=y),d(N)):t(N,y)}return Be}var pn=fu(!0),gu=fu(!1),Xi=vt(null),Zi=null,fn=null,Pl=null;function Rl(){Pl=fn=Zi=null}function Fl(e){var r=Xi.current;Le(Xi),e._currentValue=r}function Ll(e,r,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),e===t)break;e=e.return}}function gn(e,r){Zi=e,Pl=fn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(lr=!0),e.firstContext=null)}function xr(e){var r=e._currentValue;if(Pl!==e)if(e={context:e,memoizedValue:r,next:null},fn===null){if(Zi===null)throw Error(s(308));fn=e,Zi.dependencies={lanes:0,firstContext:e}}else fn=fn.next=e;return r}var At=null;function zl(e){At===null?At=[e]:At.push(e)}function bu(e,r,t,n){var a=r.interleaved;return a===null?(t.next=t,zl(r)):(t.next=a.next,a.next=t),r.interleaved=t,rt(e,n)}function rt(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var xt=!1;function Ml(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vu(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tt(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function wt(e,r,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ve&2)!==0){var a=n.pending;return a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r,rt(e,t)}return a=n.interleaved,a===null?(r.next=r,zl(n)):(r.next=a.next,a.next=r),n.interleaved=r,rt(e,t)}function ea(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var n=r.lanes;n&=e.pendingLanes,t|=n,r.lanes=t,Ya(e,t)}}function ku(e,r){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var a=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?a=l=d:l=l.next=d,t=t.next}while(t!==null);l===null?a=l=r:l=l.next=r}else a=l=r;t={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function ra(e,r,t,n){var a=e.updateQueue;xt=!1;var l=a.firstBaseUpdate,d=a.lastBaseUpdate,m=a.shared.pending;if(m!==null){a.shared.pending=null;var f=m,F=f.next;f.next=null,d===null?l=F:d.next=F,d=f;var B=e.alternate;B!==null&&(B=B.updateQueue,m=B.lastBaseUpdate,m!==d&&(m===null?B.firstBaseUpdate=F:m.next=F,B.lastBaseUpdate=f))}if(l!==null){var U=a.baseState;d=0,B=F=f=null,m=l;do{var I=m.lane,ee=m.eventTime;if((n&I)===I){B!==null&&(B=B.next={eventTime:ee,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var ne=e,ie=m;switch(I=r,ee=t,ie.tag){case 1:if(ne=ie.payload,typeof ne=="function"){U=ne.call(ee,U,I);break e}U=ne;break e;case 3:ne.flags=ne.flags&-65537|128;case 0:if(ne=ie.payload,I=typeof ne=="function"?ne.call(ee,U,I):ne,I==null)break e;U=V({},U,I);break e;case 2:xt=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,I=a.effects,I===null?a.effects=[m]:I.push(m))}else ee={eventTime:ee,lane:I,tag:m.tag,payload:m.payload,callback:m.callback,next:null},B===null?(F=B=ee,f=U):B=B.next=ee,d|=I;if(m=m.next,m===null){if(m=a.shared.pending,m===null)break;I=m,m=I.next,I.next=null,a.lastBaseUpdate=I,a.shared.pending=null}}while(!0);if(B===null&&(f=U),a.baseState=f,a.firstBaseUpdate=F,a.lastBaseUpdate=B,r=a.shared.interleaved,r!==null){a=r;do d|=a.lane,a=a.next;while(a!==r)}else l===null&&(a.shared.lanes=0);_t|=d,e.lanes=d,e.memoizedState=U}}function yu(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var n=e[r],a=n.callback;if(a!==null){if(n.callback=null,n=t,typeof a!="function")throw Error(s(191,a));a.call(n)}}}var ei={},Kr=vt(ei),ri=vt(ei),ti=vt(ei);function $t(e){if(e===ei)throw Error(s(174));return e}function Ol(e,r){switch(Te(ti,r),Te(ri,e),Te(Kr,ei),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Br(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Br(r,e)}Le(Kr),Te(Kr,r)}function bn(){Le(Kr),Le(ri),Le(ti)}function xu(e){$t(ti.current);var r=$t(Kr.current),t=Br(r,e.type);r!==t&&(Te(ri,e),Te(Kr,t))}function Hl(e){ri.current===e&&(Le(Kr),Le(ri))}var Me=vt(0);function ta(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Dl=[];function Il(){for(var e=0;e<Dl.length;e++)Dl[e]._workInProgressVersionPrimary=null;Dl.length=0}var na=A.ReactCurrentDispatcher,Bl=A.ReactCurrentBatchConfig,Ut=0,Oe=null,$e=null,_e=null,ia=!1,ni=!1,ii=0,tm=0;function Xe(){throw Error(s(321))}function Al(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!Rr(e[t],r[t]))return!1;return!0}function $l(e,r,t,n,a,l){if(Ut=l,Oe=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,na.current=e===null||e.memoizedState===null?lm:om,e=t(n,a),ni){l=0;do{if(ni=!1,ii=0,25<=l)throw Error(s(301));l+=1,_e=$e=null,r.updateQueue=null,na.current=sm,e=t(n,a)}while(ni)}if(na.current=oa,r=$e!==null&&$e.next!==null,Ut=0,_e=$e=Oe=null,ia=!1,r)throw Error(s(300));return e}function Ul(){var e=ii!==0;return ii=0,e}function Vr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?Oe.memoizedState=_e=e:_e=_e.next=e,_e}function wr(){if($e===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=$e.next;var r=_e===null?Oe.memoizedState:_e.next;if(r!==null)_e=r,$e=e;else{if(e===null)throw Error(s(310));$e=e,e={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},_e===null?Oe.memoizedState=_e=e:_e=_e.next=e}return _e}function ai(e,r){return typeof r=="function"?r(e):r}function _l(e){var r=wr(),t=r.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var n=$e,a=n.baseQueue,l=t.pending;if(l!==null){if(a!==null){var d=a.next;a.next=l.next,l.next=d}n.baseQueue=a=l,t.pending=null}if(a!==null){l=a.next,n=n.baseState;var m=d=null,f=null,F=l;do{var B=F.lane;if((Ut&B)===B)f!==null&&(f=f.next={lane:0,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null}),n=F.hasEagerState?F.eagerState:e(n,F.action);else{var U={lane:B,action:F.action,hasEagerState:F.hasEagerState,eagerState:F.eagerState,next:null};f===null?(m=f=U,d=n):f=f.next=U,Oe.lanes|=B,_t|=B}F=F.next}while(F!==null&&F!==l);f===null?d=n:f.next=m,Rr(n,r.memoizedState)||(lr=!0),r.memoizedState=n,r.baseState=d,r.baseQueue=f,t.lastRenderedState=n}if(e=t.interleaved,e!==null){a=e;do l=a.lane,Oe.lanes|=l,_t|=l,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function Kl(e){var r=wr(),t=r.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var n=t.dispatch,a=t.pending,l=r.memoizedState;if(a!==null){t.pending=null;var d=a=a.next;do l=e(l,d.action),d=d.next;while(d!==a);Rr(l,r.memoizedState)||(lr=!0),r.memoizedState=l,r.baseQueue===null&&(r.baseState=l),t.lastRenderedState=l}return[l,n]}function wu(){}function ju(e,r){var t=Oe,n=wr(),a=r(),l=!Rr(n.memoizedState,a);if(l&&(n.memoizedState=a,lr=!0),n=n.queue,Vl(Eu.bind(null,t,n,e),[e]),n.getSnapshot!==r||l||_e!==null&&_e.memoizedState.tag&1){if(t.flags|=2048,li(9,Nu.bind(null,t,n,a,r),void 0,null),Ke===null)throw Error(s(349));(Ut&30)!==0||Su(t,r,a)}return a}function Su(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=Oe.updateQueue,r===null?(r={lastEffect:null,stores:null},Oe.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function Nu(e,r,t,n){r.value=t,r.getSnapshot=n,Cu(r)&&Tu(e)}function Eu(e,r,t){return t(function(){Cu(r)&&Tu(e)})}function Cu(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!Rr(e,t)}catch{return!0}}function Tu(e){var r=rt(e,1);r!==null&&Or(r,e,1,-1)}function Pu(e){var r=Vr();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ai,lastRenderedState:e},r.queue=e,e=e.dispatch=am.bind(null,Oe,e),[r.memoizedState,e]}function li(e,r,t,n){return e={tag:e,create:r,destroy:t,deps:n,next:null},r=Oe.updateQueue,r===null?(r={lastEffect:null,stores:null},Oe.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,r.lastEffect=e)),e}function Ru(){return wr().memoizedState}function aa(e,r,t,n){var a=Vr();Oe.flags|=e,a.memoizedState=li(1|r,t,void 0,n===void 0?null:n)}function la(e,r,t,n){var a=wr();n=n===void 0?null:n;var l=void 0;if($e!==null){var d=$e.memoizedState;if(l=d.destroy,n!==null&&Al(n,d.deps)){a.memoizedState=li(r,t,l,n);return}}Oe.flags|=e,a.memoizedState=li(1|r,t,l,n)}function Fu(e,r){return aa(8390656,8,e,r)}function Vl(e,r){return la(2048,8,e,r)}function Lu(e,r){return la(4,2,e,r)}function zu(e,r){return la(4,4,e,r)}function Mu(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Ou(e,r,t){return t=t!=null?t.concat([e]):null,la(4,4,Mu.bind(null,r,e),t)}function Jl(){}function Hu(e,r){var t=wr();r=r===void 0?null:r;var n=t.memoizedState;return n!==null&&r!==null&&Al(r,n[1])?n[0]:(t.memoizedState=[e,r],e)}function Du(e,r){var t=wr();r=r===void 0?null:r;var n=t.memoizedState;return n!==null&&r!==null&&Al(r,n[1])?n[0]:(e=e(),t.memoizedState=[e,r],e)}function Iu(e,r,t){return(Ut&21)===0?(e.baseState&&(e.baseState=!1,lr=!0),e.memoizedState=t):(Rr(t,r)||(t=ps(),Oe.lanes|=t,_t|=t,e.baseState=!0),r)}function nm(e,r){var t=Ce;Ce=t!==0&&4>t?t:4,e(!0);var n=Bl.transition;Bl.transition={};try{e(!1),r()}finally{Ce=t,Bl.transition=n}}function Bu(){return wr().memoizedState}function im(e,r,t){var n=Et(e);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},Au(e))$u(r,t);else if(t=bu(e,r,t,n),t!==null){var a=tr();Or(t,e,n,a),Uu(t,r,n)}}function am(e,r,t){var n=Et(e),a={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(Au(e))$u(r,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=r.lastRenderedReducer,l!==null))try{var d=r.lastRenderedState,m=l(d,t);if(a.hasEagerState=!0,a.eagerState=m,Rr(m,d)){var f=r.interleaved;f===null?(a.next=a,zl(r)):(a.next=f.next,f.next=a),r.interleaved=a;return}}catch{}finally{}t=bu(e,r,a,n),t!==null&&(a=tr(),Or(t,e,n,a),Uu(t,r,n))}}function Au(e){var r=e.alternate;return e===Oe||r!==null&&r===Oe}function $u(e,r){ni=ia=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function Uu(e,r,t){if((t&4194240)!==0){var n=r.lanes;n&=e.pendingLanes,t|=n,r.lanes=t,Ya(e,t)}}var oa={readContext:xr,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},lm={readContext:xr,useCallback:function(e,r){return Vr().memoizedState=[e,r===void 0?null:r],e},useContext:xr,useEffect:Fu,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,aa(4194308,4,Mu.bind(null,r,e),t)},useLayoutEffect:function(e,r){return aa(4194308,4,e,r)},useInsertionEffect:function(e,r){return aa(4,2,e,r)},useMemo:function(e,r){var t=Vr();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var n=Vr();return r=t!==void 0?t(r):r,n.memoizedState=n.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=im.bind(null,Oe,e),[n.memoizedState,e]},useRef:function(e){var r=Vr();return e={current:e},r.memoizedState=e},useState:Pu,useDebugValue:Jl,useDeferredValue:function(e){return Vr().memoizedState=e},useTransition:function(){var e=Pu(!1),r=e[0];return e=nm.bind(null,e[1]),Vr().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var n=Oe,a=Vr();if(ze){if(t===void 0)throw Error(s(407));t=t()}else{if(t=r(),Ke===null)throw Error(s(349));(Ut&30)!==0||Su(n,r,t)}a.memoizedState=t;var l={value:t,getSnapshot:r};return a.queue=l,Fu(Eu.bind(null,n,l,e),[e]),n.flags|=2048,li(9,Nu.bind(null,n,l,t,r),void 0,null),t},useId:function(){var e=Vr(),r=Ke.identifierPrefix;if(ze){var t=et,n=Zr;t=(n&~(1<<32-Pr(n)-1)).toString(32)+t,r=":"+r+"R"+t,t=ii++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=tm++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},om={readContext:xr,useCallback:Hu,useContext:xr,useEffect:Vl,useImperativeHandle:Ou,useInsertionEffect:Lu,useLayoutEffect:zu,useMemo:Du,useReducer:_l,useRef:Ru,useState:function(){return _l(ai)},useDebugValue:Jl,useDeferredValue:function(e){var r=wr();return Iu(r,$e.memoizedState,e)},useTransition:function(){var e=_l(ai)[0],r=wr().memoizedState;return[e,r]},useMutableSource:wu,useSyncExternalStore:ju,useId:Bu,unstable_isNewReconciler:!1},sm={readContext:xr,useCallback:Hu,useContext:xr,useEffect:Vl,useImperativeHandle:Ou,useInsertionEffect:Lu,useLayoutEffect:zu,useMemo:Du,useReducer:Kl,useRef:Ru,useState:function(){return Kl(ai)},useDebugValue:Jl,useDeferredValue:function(e){var r=wr();return $e===null?r.memoizedState=e:Iu(r,$e.memoizedState,e)},useTransition:function(){var e=Kl(ai)[0],r=wr().memoizedState;return[e,r]},useMutableSource:wu,useSyncExternalStore:ju,useId:Bu,unstable_isNewReconciler:!1};function Lr(e,r){if(e&&e.defaultProps){r=V({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function ql(e,r,t,n){r=e.memoizedState,t=t(n,r),t=t==null?r:V({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var sa={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var n=tr(),a=Et(e),l=tt(n,a);l.payload=r,t!=null&&(l.callback=t),r=wt(e,l,a),r!==null&&(Or(r,e,a,n),ea(r,e,a))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var n=tr(),a=Et(e),l=tt(n,a);l.tag=1,l.payload=r,t!=null&&(l.callback=t),r=wt(e,l,a),r!==null&&(Or(r,e,a,n),ea(r,e,a))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=tr(),n=Et(e),a=tt(t,n);a.tag=2,r!=null&&(a.callback=r),r=wt(e,a,n),r!==null&&(Or(r,e,n,t),ea(r,e,n))}};function _u(e,r,t,n,a,l,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,d):r.prototype&&r.prototype.isPureReactComponent?!Jn(t,n)||!Jn(a,l):!0}function Ku(e,r,t){var n=!1,a=kt,l=r.contextType;return typeof l=="object"&&l!==null?l=xr(l):(a=ar(r)?Dt:Qe.current,n=r.contextTypes,l=(n=n!=null)?dn(e,a):kt),r=new r(t,l),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=sa,e.stateNode=r,r._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),r}function Vu(e,r,t,n){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,n),r.state!==e&&sa.enqueueReplaceState(r,r.state,null)}function Yl(e,r,t,n){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},Ml(e);var l=r.contextType;typeof l=="object"&&l!==null?a.context=xr(l):(l=ar(r)?Dt:Qe.current,a.context=dn(e,l)),a.state=e.memoizedState,l=r.getDerivedStateFromProps,typeof l=="function"&&(ql(e,r,l,t),a.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&sa.enqueueReplaceState(a,a.state,null),ra(e,t,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,r){try{var t="",n=r;do t+=Z(n),n=n.return;while(n);var a=t}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:r,stack:a,digest:null}}function Wl(e,r,t){return{value:e,source:null,stack:t??null,digest:r??null}}function Gl(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var um=typeof WeakMap=="function"?WeakMap:Map;function Ju(e,r,t){t=tt(-1,t),t.tag=3,t.payload={element:null};var n=r.value;return t.callback=function(){fa||(fa=!0,ho=n),Gl(e,r)},t}function qu(e,r,t){t=tt(-1,t),t.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=r.value;t.payload=function(){return n(a)},t.callback=function(){Gl(e,r)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Gl(e,r),typeof n!="function"&&(St===null?St=new Set([this]):St.add(this));var d=r.stack;this.componentDidCatch(r.value,{componentStack:d!==null?d:""})}),t}function Yu(e,r,t){var n=e.pingCache;if(n===null){n=e.pingCache=new um;var a=new Set;n.set(r,a)}else a=n.get(r),a===void 0&&(a=new Set,n.set(r,a));a.has(t)||(a.add(t),e=jm.bind(null,e,r,t),r.then(e,e))}function Wu(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function Gu(e,r,t,n,a){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=tt(-1,1),r.tag=2,wt(t,r,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var dm=A.ReactCurrentOwner,lr=!1;function rr(e,r,t,n){r.child=e===null?gu(r,null,t,n):pn(r,e.child,t,n)}function Qu(e,r,t,n,a){t=t.render;var l=r.ref;return gn(r,a),n=$l(e,r,t,n,l,a),t=Ul(),e!==null&&!lr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,nt(e,r,a)):(ze&&t&&Sl(r),r.flags|=1,rr(e,r,n,a),r.child)}function Xu(e,r,t,n,a){if(e===null){var l=t.type;return typeof l=="function"&&!ko(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=l,Zu(e,r,l,n,a)):(e=xa(t.type,null,n,r,r.mode,a),e.ref=r.ref,e.return=r,r.child=e)}if(l=e.child,(e.lanes&a)===0){var d=l.memoizedProps;if(t=t.compare,t=t!==null?t:Jn,t(d,n)&&e.ref===r.ref)return nt(e,r,a)}return r.flags|=1,e=Tt(l,n),e.ref=r.ref,e.return=r,r.child=e}function Zu(e,r,t,n,a){if(e!==null){var l=e.memoizedProps;if(Jn(l,n)&&e.ref===r.ref)if(lr=!1,r.pendingProps=n=l,(e.lanes&a)!==0)(e.flags&131072)!==0&&(lr=!0);else return r.lanes=e.lanes,nt(e,r,a)}return Ql(e,r,t,n,a)}function ed(e,r,t){var n=r.pendingProps,a=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(yn,fr),fr|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,Te(yn,fr),fr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:t,Te(yn,fr),fr|=n}else l!==null?(n=l.baseLanes|t,r.memoizedState=null):n=t,Te(yn,fr),fr|=n;return rr(e,r,a,t),r.child}function rd(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function Ql(e,r,t,n,a){var l=ar(t)?Dt:Qe.current;return l=dn(r,l),gn(r,a),t=$l(e,r,t,n,l,a),n=Ul(),e!==null&&!lr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,nt(e,r,a)):(ze&&n&&Sl(r),r.flags|=1,rr(e,r,t,a),r.child)}function td(e,r,t,n,a){if(ar(t)){var l=!0;Ji(r)}else l=!1;if(gn(r,a),r.stateNode===null)da(e,r),Ku(r,t,n),Yl(r,t,n,a),n=!0;else if(e===null){var d=r.stateNode,m=r.memoizedProps;d.props=m;var f=d.context,F=t.contextType;typeof F=="object"&&F!==null?F=xr(F):(F=ar(t)?Dt:Qe.current,F=dn(r,F));var B=t.getDerivedStateFromProps,U=typeof B=="function"||typeof d.getSnapshotBeforeUpdate=="function";U||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==n||f!==F)&&Vu(r,d,n,F),xt=!1;var I=r.memoizedState;d.state=I,ra(r,n,d,a),f=r.memoizedState,m!==n||I!==f||ir.current||xt?(typeof B=="function"&&(ql(r,t,B,n),f=r.memoizedState),(m=xt||_u(r,t,m,n,I,f,F))?(U||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(r.flags|=4194308)):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=f),d.props=n,d.state=f,d.context=F,n=m):(typeof d.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{d=r.stateNode,vu(e,r),m=r.memoizedProps,F=r.type===r.elementType?m:Lr(r.type,m),d.props=F,U=r.pendingProps,I=d.context,f=t.contextType,typeof f=="object"&&f!==null?f=xr(f):(f=ar(t)?Dt:Qe.current,f=dn(r,f));var ee=t.getDerivedStateFromProps;(B=typeof ee=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(m!==U||I!==f)&&Vu(r,d,n,f),xt=!1,I=r.memoizedState,d.state=I,ra(r,n,d,a);var ne=r.memoizedState;m!==U||I!==ne||ir.current||xt?(typeof ee=="function"&&(ql(r,t,ee,n),ne=r.memoizedState),(F=xt||_u(r,t,F,n,I,ne,f)||!1)?(B||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(n,ne,f),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(n,ne,f)),typeof d.componentDidUpdate=="function"&&(r.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&I===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&I===e.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=ne),d.props=n,d.state=ne,d.context=f,n=F):(typeof d.componentDidUpdate!="function"||m===e.memoizedProps&&I===e.memoizedState||(r.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&I===e.memoizedState||(r.flags|=1024),n=!1)}return Xl(e,r,t,n,l,a)}function Xl(e,r,t,n,a,l){rd(e,r);var d=(r.flags&128)!==0;if(!n&&!d)return a&&ou(r,t,!1),nt(e,r,l);n=r.stateNode,dm.current=r;var m=d&&typeof t.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,e!==null&&d?(r.child=pn(r,e.child,null,l),r.child=pn(r,null,m,l)):rr(e,r,m,l),r.memoizedState=n.state,a&&ou(r,t,!0),r.child}function nd(e){var r=e.stateNode;r.pendingContext?au(e,r.pendingContext,r.pendingContext!==r.context):r.context&&au(e,r.context,!1),Ol(e,r.containerInfo)}function id(e,r,t,n,a){return mn(),Tl(a),r.flags|=256,rr(e,r,t,n),r.child}var Zl={dehydrated:null,treeContext:null,retryLane:0};function eo(e){return{baseLanes:e,cachePool:null,transitions:null}}function ad(e,r,t){var n=r.pendingProps,a=Me.current,l=!1,d=(r.flags&128)!==0,m;if((m=d)||(m=e!==null&&e.memoizedState===null?!1:(a&2)!==0),m?(l=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Te(Me,a&1),e===null)return Cl(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(d=n.children,e=n.fallback,l?(n=r.mode,l=r.child,d={mode:"hidden",children:d},(n&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=d):l=wa(d,n,0,null),e=qt(e,n,t,null),l.return=r,e.return=r,l.sibling=e,r.child=l,r.child.memoizedState=eo(t),r.memoizedState=Zl,e):ro(r,d));if(a=e.memoizedState,a!==null&&(m=a.dehydrated,m!==null))return cm(e,r,d,n,m,a,t);if(l){l=n.fallback,d=r.mode,a=e.child,m=a.sibling;var f={mode:"hidden",children:n.children};return(d&1)===0&&r.child!==a?(n=r.child,n.childLanes=0,n.pendingProps=f,r.deletions=null):(n=Tt(a,f),n.subtreeFlags=a.subtreeFlags&14680064),m!==null?l=Tt(m,l):(l=qt(l,d,t,null),l.flags|=2),l.return=r,n.return=r,n.sibling=l,r.child=n,n=l,l=r.child,d=e.child.memoizedState,d=d===null?eo(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},l.memoizedState=d,l.childLanes=e.childLanes&~t,r.memoizedState=Zl,n}return l=e.child,e=l.sibling,n=Tt(l,{mode:"visible",children:n.children}),(r.mode&1)===0&&(n.lanes=t),n.return=r,n.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=n,r.memoizedState=null,n}function ro(e,r){return r=wa({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function ua(e,r,t,n){return n!==null&&Tl(n),pn(r,e.child,null,t),e=ro(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function cm(e,r,t,n,a,l,d){if(t)return r.flags&256?(r.flags&=-257,n=Wl(Error(s(422))),ua(e,r,d,n)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(l=n.fallback,a=r.mode,n=wa({mode:"visible",children:n.children},a,0,null),l=qt(l,a,d,null),l.flags|=2,n.return=r,l.return=r,n.sibling=l,r.child=n,(r.mode&1)!==0&&pn(r,e.child,null,d),r.child.memoizedState=eo(d),r.memoizedState=Zl,l);if((r.mode&1)===0)return ua(e,r,d,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var m=n.dgst;return n=m,l=Error(s(419)),n=Wl(l,n,void 0),ua(e,r,d,n)}if(m=(d&e.childLanes)!==0,lr||m){if(n=Ke,n!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(n.suspendedLanes|d))!==0?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,rt(e,a),Or(n,e,a,-1))}return vo(),n=Wl(Error(s(421))),ua(e,r,d,n)}return a.data==="$?"?(r.flags|=128,r.child=e.child,r=Sm.bind(null,e),a._reactRetry=r,null):(e=l.treeContext,pr=bt(a.nextSibling),mr=r,ze=!0,Fr=null,e!==null&&(kr[yr++]=Zr,kr[yr++]=et,kr[yr++]=It,Zr=e.id,et=e.overflow,It=r),r=ro(r,n.children),r.flags|=4096,r)}function ld(e,r,t){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r),Ll(e.return,r,t)}function to(e,r,t,n,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:a}:(l.isBackwards=r,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=t,l.tailMode=a)}function od(e,r,t){var n=r.pendingProps,a=n.revealOrder,l=n.tail;if(rr(e,r,n.children,t),n=Me.current,(n&2)!==0)n=n&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ld(e,t,r);else if(e.tag===19)ld(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Te(Me,n),(r.mode&1)===0)r.memoizedState=null;else switch(a){case"forwards":for(t=r.child,a=null;t!==null;)e=t.alternate,e!==null&&ta(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=r.child,r.child=null):(a=t.sibling,t.sibling=null),to(r,!1,a,t,l);break;case"backwards":for(t=null,a=r.child,r.child=null;a!==null;){if(e=a.alternate,e!==null&&ta(e)===null){r.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}to(r,!0,t,null,l);break;case"together":to(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function da(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function nt(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),_t|=r.lanes,(t&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(s(153));if(r.child!==null){for(e=r.child,t=Tt(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=Tt(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function hm(e,r,t){switch(r.tag){case 3:nd(r),mn();break;case 5:xu(r);break;case 1:ar(r.type)&&Ji(r);break;case 4:Ol(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,a=r.memoizedProps.value;Te(Xi,n._currentValue),n._currentValue=a;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(Te(Me,Me.current&1),r.flags|=128,null):(t&r.child.childLanes)!==0?ad(e,r,t):(Te(Me,Me.current&1),e=nt(e,r,t),e!==null?e.sibling:null);Te(Me,Me.current&1);break;case 19:if(n=(t&r.childLanes)!==0,(e.flags&128)!==0){if(n)return od(e,r,t);r.flags|=128}if(a=r.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Te(Me,Me.current),n)break;return null;case 22:case 23:return r.lanes=0,ed(e,r,t)}return nt(e,r,t)}var sd,no,ud,dd;sd=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},no=function(){},ud=function(e,r,t,n){var a=e.memoizedProps;if(a!==n){e=r.stateNode,$t(Kr.current);var l=null;switch(t){case"input":a=Cn(e,a),n=Cn(e,n),l=[];break;case"select":a=V({},a,{value:void 0}),n=V({},n,{value:void 0}),l=[];break;case"textarea":a=Se(e,a),n=Se(e,n),l=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=_i)}Tr(t,n);var d;t=null;for(F in a)if(!n.hasOwnProperty(F)&&a.hasOwnProperty(F)&&a[F]!=null)if(F==="style"){var m=a[F];for(d in m)m.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else F!=="dangerouslySetInnerHTML"&&F!=="children"&&F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&F!=="autoFocus"&&(p.hasOwnProperty(F)?l||(l=[]):(l=l||[]).push(F,null));for(F in n){var f=n[F];if(m=a!=null?a[F]:void 0,n.hasOwnProperty(F)&&f!==m&&(f!=null||m!=null))if(F==="style")if(m){for(d in m)!m.hasOwnProperty(d)||f&&f.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in f)f.hasOwnProperty(d)&&m[d]!==f[d]&&(t||(t={}),t[d]=f[d])}else t||(l||(l=[]),l.push(F,t)),t=f;else F==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,m=m?m.__html:void 0,f!=null&&m!==f&&(l=l||[]).push(F,f)):F==="children"?typeof f!="string"&&typeof f!="number"||(l=l||[]).push(F,""+f):F!=="suppressContentEditableWarning"&&F!=="suppressHydrationWarning"&&(p.hasOwnProperty(F)?(f!=null&&F==="onScroll"&&Fe("scroll",e),l||m===f||(l=[])):(l=l||[]).push(F,f))}t&&(l=l||[]).push("style",t);var F=l;(r.updateQueue=F)&&(r.flags|=4)}},dd=function(e,r,t,n){t!==n&&(r.flags|=4)};function oi(e,r){if(!ze)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ze(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(r)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=t,r}function mm(e,r,t){var n=r.pendingProps;switch(Nl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(r),null;case 1:return ar(r.type)&&Vi(),Ze(r),null;case 3:return n=r.stateNode,bn(),Le(ir),Le(Qe),Il(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gi(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Fr!==null&&(fo(Fr),Fr=null))),no(e,r),Ze(r),null;case 5:Hl(r);var a=$t(ti.current);if(t=r.type,e!==null&&r.stateNode!=null)ud(e,r,t,n,a),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(s(166));return Ze(r),null}if(e=$t(Kr.current),Gi(r)){n=r.stateNode,t=r.type;var l=r.memoizedProps;switch(n[_r]=r,n[Qn]=l,e=(r.mode&1)!==0,t){case"dialog":Fe("cancel",n),Fe("close",n);break;case"iframe":case"object":case"embed":Fe("load",n);break;case"video":case"audio":for(a=0;a<Yn.length;a++)Fe(Yn[a],n);break;case"source":Fe("error",n);break;case"img":case"image":case"link":Fe("error",n),Fe("load",n);break;case"details":Fe("toggle",n);break;case"input":Tn(n,l),Fe("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},Fe("invalid",n);break;case"textarea":Ir(n,l),Fe("invalid",n)}Tr(t,l),a=null;for(var d in l)if(l.hasOwnProperty(d)){var m=l[d];d==="children"?typeof m=="string"?n.textContent!==m&&(l.suppressHydrationWarning!==!0&&Ui(n.textContent,m,e),a=["children",m]):typeof m=="number"&&n.textContent!==""+m&&(l.suppressHydrationWarning!==!0&&Ui(n.textContent,m,e),a=["children",""+m]):p.hasOwnProperty(d)&&m!=null&&d==="onScroll"&&Fe("scroll",n)}switch(t){case"input":ot(n),Pn(n,l,!0);break;case"textarea":ot(n),Cr(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=_i)}n=a,r.updateQueue=n,n!==null&&(r.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=yi(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=d.createElement(t,{is:n.is}):(e=d.createElement(t),t==="select"&&(d=e,n.multiple?d.multiple=!0:n.size&&(d.size=n.size))):e=d.createElementNS(e,t),e[_r]=r,e[Qn]=n,sd(e,r,!1,!1),r.stateNode=e;e:{switch(d=$r(t,n),t){case"dialog":Fe("cancel",e),Fe("close",e),a=n;break;case"iframe":case"object":case"embed":Fe("load",e),a=n;break;case"video":case"audio":for(a=0;a<Yn.length;a++)Fe(Yn[a],e);a=n;break;case"source":Fe("error",e),a=n;break;case"img":case"image":case"link":Fe("error",e),Fe("load",e),a=n;break;case"details":Fe("toggle",e),a=n;break;case"input":Tn(e,n),a=Cn(e,n),Fe("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=V({},n,{value:void 0}),Fe("invalid",e);break;case"textarea":Ir(e,n),a=Se(e,n),Fe("invalid",e);break;default:a=n}Tr(t,a),m=a;for(l in m)if(m.hasOwnProperty(l)){var f=m[l];l==="style"?Ne(e,f):l==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Ar(e,f)):l==="children"?typeof f=="string"?(t!=="textarea"||f!=="")&&Mt(e,f):typeof f=="number"&&Mt(e,""+f):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(p.hasOwnProperty(l)?f!=null&&l==="onScroll"&&Fe("scroll",e):f!=null&&R(e,l,f,d))}switch(t){case"input":ot(e),Pn(e,n,!1);break;case"textarea":ot(e),Cr(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ce(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?fe(e,!!n.multiple,l,!1):n.defaultValue!=null&&fe(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=_i)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ze(r),null;case 6:if(e&&r.stateNode!=null)dd(e,r,e.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(s(166));if(t=$t(ti.current),$t(Kr.current),Gi(r)){if(n=r.stateNode,t=r.memoizedProps,n[_r]=r,(l=n.nodeValue!==t)&&(e=mr,e!==null))switch(e.tag){case 3:Ui(n.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ui(n.nodeValue,t,(e.mode&1)!==0)}l&&(r.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[_r]=r,r.stateNode=n}return Ze(r),null;case 13:if(Le(Me),n=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ze&&pr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)mu(),mn(),r.flags|=98560,l=!1;else if(l=Gi(r),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=r.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[_r]=r}else mn(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ze(r),l=!1}else Fr!==null&&(fo(Fr),Fr=null),l=!0;if(!l)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=t,r):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Me.current&1)!==0?Ue===0&&(Ue=3):vo())),r.updateQueue!==null&&(r.flags|=4),Ze(r),null);case 4:return bn(),no(e,r),e===null&&Wn(r.stateNode.containerInfo),Ze(r),null;case 10:return Fl(r.type._context),Ze(r),null;case 17:return ar(r.type)&&Vi(),Ze(r),null;case 19:if(Le(Me),l=r.memoizedState,l===null)return Ze(r),null;if(n=(r.flags&128)!==0,d=l.rendering,d===null)if(n)oi(l,!1);else{if(Ue!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(d=ta(e),d!==null){for(r.flags|=128,oi(l,!1),n=d.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=t,t=r.child;t!==null;)l=t,e=n,l.flags&=14680066,d=l.alternate,d===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=d.childLanes,l.lanes=d.lanes,l.child=d.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=d.memoizedProps,l.memoizedState=d.memoizedState,l.updateQueue=d.updateQueue,l.type=d.type,e=d.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Te(Me,Me.current&1|2),r.child}e=e.sibling}l.tail!==null&&Ie()>xn&&(r.flags|=128,n=!0,oi(l,!1),r.lanes=4194304)}else{if(!n)if(e=ta(d),e!==null){if(r.flags|=128,n=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),oi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!ze)return Ze(r),null}else 2*Ie()-l.renderingStartTime>xn&&t!==1073741824&&(r.flags|=128,n=!0,oi(l,!1),r.lanes=4194304);l.isBackwards?(d.sibling=r.child,r.child=d):(t=l.last,t!==null?t.sibling=d:r.child=d,l.last=d)}return l.tail!==null?(r=l.tail,l.rendering=r,l.tail=r.sibling,l.renderingStartTime=Ie(),r.sibling=null,t=Me.current,Te(Me,n?t&1|2:t&1),r):(Ze(r),null);case 22:case 23:return bo(),n=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(r.flags|=8192),n&&(r.mode&1)!==0?(fr&1073741824)!==0&&(Ze(r),r.subtreeFlags&6&&(r.flags|=8192)):Ze(r),null;case 24:return null;case 25:return null}throw Error(s(156,r.tag))}function pm(e,r){switch(Nl(r),r.tag){case 1:return ar(r.type)&&Vi(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return bn(),Le(ir),Le(Qe),Il(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Hl(r),null;case 13:if(Le(Me),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(s(340));mn()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Le(Me),null;case 4:return bn(),null;case 10:return Fl(r.type._context),null;case 22:case 23:return bo(),null;case 24:return null;default:return null}}var ca=!1,er=!1,fm=typeof WeakSet=="function"?WeakSet:Set,te=null;function kn(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){De(e,r,n)}else t.current=null}function io(e,r,t){try{t()}catch(n){De(e,r,n)}}var cd=!1;function gm(e,r){if(gl=Fi,e=_s(),sl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var a=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var d=0,m=-1,f=-1,F=0,B=0,U=e,I=null;r:for(;;){for(var ee;U!==t||a!==0&&U.nodeType!==3||(m=d+a),U!==l||n!==0&&U.nodeType!==3||(f=d+n),U.nodeType===3&&(d+=U.nodeValue.length),(ee=U.firstChild)!==null;)I=U,U=ee;for(;;){if(U===e)break r;if(I===t&&++F===a&&(m=d),I===l&&++B===n&&(f=d),(ee=U.nextSibling)!==null)break;U=I,I=U.parentNode}U=ee}t=m===-1||f===-1?null:{start:m,end:f}}else t=null}t=t||{start:0,end:0}}else t=null;for(bl={focusedElem:e,selectionRange:t},Fi=!1,te=r;te!==null;)if(r=te,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,te=e;else for(;te!==null;){r=te;try{var ne=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ne!==null){var ie=ne.memoizedProps,Be=ne.memoizedState,N=r.stateNode,y=N.getSnapshotBeforeUpdate(r.elementType===r.type?ie:Lr(r.type,ie),Be);N.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var T=r.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(J){De(r,r.return,J)}if(e=r.sibling,e!==null){e.return=r.return,te=e;break}te=r.return}return ne=cd,cd=!1,ne}function si(e,r,t){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&io(r,t,l)}a=a.next}while(a!==n)}}function ha(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var n=t.create;t.destroy=n()}t=t.next}while(t!==r)}}function ao(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function hd(e){var r=e.alternate;r!==null&&(e.alternate=null,hd(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[_r],delete r[Qn],delete r[xl],delete r[Xh],delete r[Zh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function md(e){return e.tag===5||e.tag===3||e.tag===4}function pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||md(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lo(e,r,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=_i));else if(n!==4&&(e=e.child,e!==null))for(lo(e,r,t),e=e.sibling;e!==null;)lo(e,r,t),e=e.sibling}function oo(e,r,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(oo(e,r,t),e=e.sibling;e!==null;)oo(e,r,t),e=e.sibling}var qe=null,zr=!1;function jt(e,r,t){for(t=t.child;t!==null;)fd(e,r,t),t=t.sibling}function fd(e,r,t){if(Ur&&typeof Ur.onCommitFiberUnmount=="function")try{Ur.onCommitFiberUnmount(Ni,t)}catch{}switch(t.tag){case 5:er||kn(t,r);case 6:var n=qe,a=zr;qe=null,jt(e,r,t),qe=n,zr=a,qe!==null&&(zr?(e=qe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):qe.removeChild(t.stateNode));break;case 18:qe!==null&&(zr?(e=qe,t=t.stateNode,e.nodeType===8?yl(e.parentNode,t):e.nodeType===1&&yl(e,t),An(e)):yl(qe,t.stateNode));break;case 4:n=qe,a=zr,qe=t.stateNode.containerInfo,zr=!0,jt(e,r,t),qe=n,zr=a;break;case 0:case 11:case 14:case 15:if(!er&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var l=a,d=l.destroy;l=l.tag,d!==void 0&&((l&2)!==0||(l&4)!==0)&&io(t,r,d),a=a.next}while(a!==n)}jt(e,r,t);break;case 1:if(!er&&(kn(t,r),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(m){De(t,r,m)}jt(e,r,t);break;case 21:jt(e,r,t);break;case 22:t.mode&1?(er=(n=er)||t.memoizedState!==null,jt(e,r,t),er=n):jt(e,r,t);break;default:jt(e,r,t)}}function gd(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new fm),r.forEach(function(n){var a=Nm.bind(null,e,n);t.has(n)||(t.add(n),n.then(a,a))})}}function Mr(e,r){var t=r.deletions;if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];try{var l=e,d=r,m=d;e:for(;m!==null;){switch(m.tag){case 5:qe=m.stateNode,zr=!1;break e;case 3:qe=m.stateNode.containerInfo,zr=!0;break e;case 4:qe=m.stateNode.containerInfo,zr=!0;break e}m=m.return}if(qe===null)throw Error(s(160));fd(l,d,a),qe=null,zr=!1;var f=a.alternate;f!==null&&(f.return=null),a.return=null}catch(F){De(a,r,F)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)bd(r,e),r=r.sibling}function bd(e,r){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mr(r,e),Jr(e),n&4){try{si(3,e,e.return),ha(3,e)}catch(ie){De(e,e.return,ie)}try{si(5,e,e.return)}catch(ie){De(e,e.return,ie)}}break;case 1:Mr(r,e),Jr(e),n&512&&t!==null&&kn(t,t.return);break;case 5:if(Mr(r,e),Jr(e),n&512&&t!==null&&kn(t,t.return),e.flags&32){var a=e.stateNode;try{Mt(a,"")}catch(ie){De(e,e.return,ie)}}if(n&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,d=t!==null?t.memoizedProps:l,m=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{m==="input"&&l.type==="radio"&&l.name!=null&&ki(a,l),$r(m,d);var F=$r(m,l);for(d=0;d<f.length;d+=2){var B=f[d],U=f[d+1];B==="style"?Ne(a,U):B==="dangerouslySetInnerHTML"?Ar(a,U):B==="children"?Mt(a,U):R(a,B,U,F)}switch(m){case"input":Gt(a,l);break;case"textarea":Wr(a,l);break;case"select":var I=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var ee=l.value;ee!=null?fe(a,!!l.multiple,ee,!1):I!==!!l.multiple&&(l.defaultValue!=null?fe(a,!!l.multiple,l.defaultValue,!0):fe(a,!!l.multiple,l.multiple?[]:"",!1))}a[Qn]=l}catch(ie){De(e,e.return,ie)}}break;case 6:if(Mr(r,e),Jr(e),n&4){if(e.stateNode===null)throw Error(s(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(ie){De(e,e.return,ie)}}break;case 3:if(Mr(r,e),Jr(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{An(r.containerInfo)}catch(ie){De(e,e.return,ie)}break;case 4:Mr(r,e),Jr(e);break;case 13:Mr(r,e),Jr(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(co=Ie())),n&4&&gd(e);break;case 22:if(B=t!==null&&t.memoizedState!==null,e.mode&1?(er=(F=er)||B,Mr(r,e),er=F):Mr(r,e),Jr(e),n&8192){if(F=e.memoizedState!==null,(e.stateNode.isHidden=F)&&!B&&(e.mode&1)!==0)for(te=e,B=e.child;B!==null;){for(U=te=B;te!==null;){switch(I=te,ee=I.child,I.tag){case 0:case 11:case 14:case 15:si(4,I,I.return);break;case 1:kn(I,I.return);var ne=I.stateNode;if(typeof ne.componentWillUnmount=="function"){n=I,t=I.return;try{r=n,ne.props=r.memoizedProps,ne.state=r.memoizedState,ne.componentWillUnmount()}catch(ie){De(n,t,ie)}}break;case 5:kn(I,I.return);break;case 22:if(I.memoizedState!==null){yd(U);continue}}ee!==null?(ee.return=I,te=ee):yd(U)}B=B.sibling}e:for(B=null,U=e;;){if(U.tag===5){if(B===null){B=U;try{a=U.stateNode,F?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(m=U.stateNode,f=U.memoizedProps.style,d=f!=null&&f.hasOwnProperty("display")?f.display:null,m.style.display=Rn("display",d))}catch(ie){De(e,e.return,ie)}}}else if(U.tag===6){if(B===null)try{U.stateNode.nodeValue=F?"":U.memoizedProps}catch(ie){De(e,e.return,ie)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;B===U&&(B=null),U=U.return}B===U&&(B=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:Mr(r,e),Jr(e),n&4&&gd(e);break;case 21:break;default:Mr(r,e),Jr(e)}}function Jr(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(md(t)){var n=t;break e}t=t.return}throw Error(s(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(Mt(a,""),n.flags&=-33);var l=pd(e);oo(e,l,a);break;case 3:case 4:var d=n.stateNode.containerInfo,m=pd(e);lo(e,m,d);break;default:throw Error(s(161))}}catch(f){De(e,e.return,f)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function bm(e,r,t){te=e,vd(e)}function vd(e,r,t){for(var n=(e.mode&1)!==0;te!==null;){var a=te,l=a.child;if(a.tag===22&&n){var d=a.memoizedState!==null||ca;if(!d){var m=a.alternate,f=m!==null&&m.memoizedState!==null||er;m=ca;var F=er;if(ca=d,(er=f)&&!F)for(te=a;te!==null;)d=te,f=d.child,d.tag===22&&d.memoizedState!==null?xd(a):f!==null?(f.return=d,te=f):xd(a);for(;l!==null;)te=l,vd(l),l=l.sibling;te=a,ca=m,er=F}kd(e)}else(a.subtreeFlags&8772)!==0&&l!==null?(l.return=a,te=l):kd(e)}}function kd(e){for(;te!==null;){var r=te;if((r.flags&8772)!==0){var t=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:er||ha(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!er)if(t===null)n.componentDidMount();else{var a=r.elementType===r.type?t.memoizedProps:Lr(r.type,t.memoizedProps);n.componentDidUpdate(a,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=r.updateQueue;l!==null&&yu(r,l,n);break;case 3:var d=r.updateQueue;if(d!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}yu(r,d,t)}break;case 5:var m=r.stateNode;if(t===null&&r.flags&4){t=m;var f=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&t.focus();break;case"img":f.src&&(t.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var F=r.alternate;if(F!==null){var B=F.memoizedState;if(B!==null){var U=B.dehydrated;U!==null&&An(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}er||r.flags&512&&ao(r)}catch(I){De(r,r.return,I)}}if(r===e){te=null;break}if(t=r.sibling,t!==null){t.return=r.return,te=t;break}te=r.return}}function yd(e){for(;te!==null;){var r=te;if(r===e){te=null;break}var t=r.sibling;if(t!==null){t.return=r.return,te=t;break}te=r.return}}function xd(e){for(;te!==null;){var r=te;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{ha(4,r)}catch(f){De(r,t,f)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var a=r.return;try{n.componentDidMount()}catch(f){De(r,a,f)}}var l=r.return;try{ao(r)}catch(f){De(r,l,f)}break;case 5:var d=r.return;try{ao(r)}catch(f){De(r,d,f)}}}catch(f){De(r,r.return,f)}if(r===e){te=null;break}var m=r.sibling;if(m!==null){m.return=r.return,te=m;break}te=r.return}}var vm=Math.ceil,ma=A.ReactCurrentDispatcher,so=A.ReactCurrentOwner,jr=A.ReactCurrentBatchConfig,ve=0,Ke=null,Ae=null,Ye=0,fr=0,yn=vt(0),Ue=0,ui=null,_t=0,pa=0,uo=0,di=null,or=null,co=0,xn=1/0,it=null,fa=!1,ho=null,St=null,ga=!1,Nt=null,ba=0,ci=0,mo=null,va=-1,ka=0;function tr(){return(ve&6)!==0?Ie():va!==-1?va:va=Ie()}function Et(e){return(e.mode&1)===0?1:(ve&2)!==0&&Ye!==0?Ye&-Ye:rm.transition!==null?(ka===0&&(ka=ps()),ka):(e=Ce,e!==0||(e=window.event,e=e===void 0?16:js(e.type)),e)}function Or(e,r,t,n){if(50<ci)throw ci=0,mo=null,Error(s(185));On(e,t,n),((ve&2)===0||e!==Ke)&&(e===Ke&&((ve&2)===0&&(pa|=t),Ue===4&&Ct(e,Ye)),sr(e,n),t===1&&ve===0&&(r.mode&1)===0&&(xn=Ie()+500,qi&&yt()))}function sr(e,r){var t=e.callbackNode;rh(e,r);var n=Ti(e,e===Ke?Ye:0);if(n===0)t!==null&&cs(t),e.callbackNode=null,e.callbackPriority=0;else if(r=n&-n,e.callbackPriority!==r){if(t!=null&&cs(t),r===1)e.tag===0?em(jd.bind(null,e)):su(jd.bind(null,e)),Gh(function(){(ve&6)===0&&yt()}),t=null;else{switch(fs(n)){case 1:t=Va;break;case 4:t=hs;break;case 16:t=Si;break;case 536870912:t=ms;break;default:t=Si}t=Fd(t,wd.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function wd(e,r){if(va=-1,ka=0,(ve&6)!==0)throw Error(s(327));var t=e.callbackNode;if(wn()&&e.callbackNode!==t)return null;var n=Ti(e,e===Ke?Ye:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||r)r=ya(e,n);else{r=n;var a=ve;ve|=2;var l=Nd();(Ke!==e||Ye!==r)&&(it=null,xn=Ie()+500,Vt(e,r));do try{xm();break}catch(m){Sd(e,m)}while(!0);Rl(),ma.current=l,ve=a,Ae!==null?r=0:(Ke=null,Ye=0,r=Ue)}if(r!==0){if(r===2&&(a=Ja(e),a!==0&&(n=a,r=po(e,a))),r===1)throw t=ui,Vt(e,0),Ct(e,n),sr(e,Ie()),t;if(r===6)Ct(e,n);else{if(a=e.current.alternate,(n&30)===0&&!km(a)&&(r=ya(e,n),r===2&&(l=Ja(e),l!==0&&(n=l,r=po(e,l))),r===1))throw t=ui,Vt(e,0),Ct(e,n),sr(e,Ie()),t;switch(e.finishedWork=a,e.finishedLanes=n,r){case 0:case 1:throw Error(s(345));case 2:Jt(e,or,it);break;case 3:if(Ct(e,n),(n&130023424)===n&&(r=co+500-Ie(),10<r)){if(Ti(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){tr(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=kl(Jt.bind(null,e,or,it),r);break}Jt(e,or,it);break;case 4:if(Ct(e,n),(n&4194240)===n)break;for(r=e.eventTimes,a=-1;0<n;){var d=31-Pr(n);l=1<<d,d=r[d],d>a&&(a=d),n&=~l}if(n=a,n=Ie()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*vm(n/1960))-n,10<n){e.timeoutHandle=kl(Jt.bind(null,e,or,it),n);break}Jt(e,or,it);break;case 5:Jt(e,or,it);break;default:throw Error(s(329))}}}return sr(e,Ie()),e.callbackNode===t?wd.bind(null,e):null}function po(e,r){var t=di;return e.current.memoizedState.isDehydrated&&(Vt(e,r).flags|=256),e=ya(e,r),e!==2&&(r=or,or=t,r!==null&&fo(r)),e}function fo(e){or===null?or=e:or.push.apply(or,e)}function km(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var a=t[n],l=a.getSnapshot;a=a.value;try{if(!Rr(l(),a))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ct(e,r){for(r&=~uo,r&=~pa,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-Pr(r),n=1<<t;e[t]=-1,r&=~n}}function jd(e){if((ve&6)!==0)throw Error(s(327));wn();var r=Ti(e,0);if((r&1)===0)return sr(e,Ie()),null;var t=ya(e,r);if(e.tag!==0&&t===2){var n=Ja(e);n!==0&&(r=n,t=po(e,n))}if(t===1)throw t=ui,Vt(e,0),Ct(e,r),sr(e,Ie()),t;if(t===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Jt(e,or,it),sr(e,Ie()),null}function go(e,r){var t=ve;ve|=1;try{return e(r)}finally{ve=t,ve===0&&(xn=Ie()+500,qi&&yt())}}function Kt(e){Nt!==null&&Nt.tag===0&&(ve&6)===0&&wn();var r=ve;ve|=1;var t=jr.transition,n=Ce;try{if(jr.transition=null,Ce=1,e)return e()}finally{Ce=n,jr.transition=t,ve=r,(ve&6)===0&&yt()}}function bo(){fr=yn.current,Le(yn)}function Vt(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Wh(t)),Ae!==null)for(t=Ae.return;t!==null;){var n=t;switch(Nl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Vi();break;case 3:bn(),Le(ir),Le(Qe),Il();break;case 5:Hl(n);break;case 4:bn();break;case 13:Le(Me);break;case 19:Le(Me);break;case 10:Fl(n.type._context);break;case 22:case 23:bo()}t=t.return}if(Ke=e,Ae=e=Tt(e.current,null),Ye=fr=r,Ue=0,ui=null,uo=pa=_t=0,or=di=null,At!==null){for(r=0;r<At.length;r++)if(t=At[r],n=t.interleaved,n!==null){t.interleaved=null;var a=n.next,l=t.pending;if(l!==null){var d=l.next;l.next=a,n.next=d}t.pending=n}At=null}return e}function Sd(e,r){do{var t=Ae;try{if(Rl(),na.current=oa,ia){for(var n=Oe.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}ia=!1}if(Ut=0,_e=$e=Oe=null,ni=!1,ii=0,so.current=null,t===null||t.return===null){Ue=1,ui=r,Ae=null;break}e:{var l=e,d=t.return,m=t,f=r;if(r=Ye,m.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var F=f,B=m,U=B.tag;if((B.mode&1)===0&&(U===0||U===11||U===15)){var I=B.alternate;I?(B.updateQueue=I.updateQueue,B.memoizedState=I.memoizedState,B.lanes=I.lanes):(B.updateQueue=null,B.memoizedState=null)}var ee=Wu(d);if(ee!==null){ee.flags&=-257,Gu(ee,d,m,l,r),ee.mode&1&&Yu(l,F,r),r=ee,f=F;var ne=r.updateQueue;if(ne===null){var ie=new Set;ie.add(f),r.updateQueue=ie}else ne.add(f);break e}else{if((r&1)===0){Yu(l,F,r),vo();break e}f=Error(s(426))}}else if(ze&&m.mode&1){var Be=Wu(d);if(Be!==null){(Be.flags&65536)===0&&(Be.flags|=256),Gu(Be,d,m,l,r),Tl(vn(f,m));break e}}l=f=vn(f,m),Ue!==4&&(Ue=2),di===null?di=[l]:di.push(l),l=d;do{switch(l.tag){case 3:l.flags|=65536,r&=-r,l.lanes|=r;var N=Ju(l,f,r);ku(l,N);break e;case 1:m=f;var y=l.type,T=l.stateNode;if((l.flags&128)===0&&(typeof y.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(St===null||!St.has(T)))){l.flags|=65536,r&=-r,l.lanes|=r;var J=qu(l,m,r);ku(l,J);break e}}l=l.return}while(l!==null)}Cd(t)}catch(ae){r=ae,Ae===t&&t!==null&&(Ae=t=t.return);continue}break}while(!0)}function Nd(){var e=ma.current;return ma.current=oa,e===null?oa:e}function vo(){(Ue===0||Ue===3||Ue===2)&&(Ue=4),Ke===null||(_t&268435455)===0&&(pa&268435455)===0||Ct(Ke,Ye)}function ya(e,r){var t=ve;ve|=2;var n=Nd();(Ke!==e||Ye!==r)&&(it=null,Vt(e,r));do try{ym();break}catch(a){Sd(e,a)}while(!0);if(Rl(),ve=t,ma.current=n,Ae!==null)throw Error(s(261));return Ke=null,Ye=0,Ue}function ym(){for(;Ae!==null;)Ed(Ae)}function xm(){for(;Ae!==null&&!Jc();)Ed(Ae)}function Ed(e){var r=Rd(e.alternate,e,fr);e.memoizedProps=e.pendingProps,r===null?Cd(e):Ae=r,so.current=null}function Cd(e){var r=e;do{var t=r.alternate;if(e=r.return,(r.flags&32768)===0){if(t=mm(t,r,fr),t!==null){Ae=t;return}}else{if(t=pm(t,r),t!==null){t.flags&=32767,Ae=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ue=6,Ae=null;return}}if(r=r.sibling,r!==null){Ae=r;return}Ae=r=e}while(r!==null);Ue===0&&(Ue=5)}function Jt(e,r,t){var n=Ce,a=jr.transition;try{jr.transition=null,Ce=1,wm(e,r,t,n)}finally{jr.transition=a,Ce=n}return null}function wm(e,r,t,n){do wn();while(Nt!==null);if((ve&6)!==0)throw Error(s(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(th(e,l),e===Ke&&(Ae=Ke=null,Ye=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ga||(ga=!0,Fd(Si,function(){return wn(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=jr.transition,jr.transition=null;var d=Ce;Ce=1;var m=ve;ve|=4,so.current=null,gm(e,t),bd(t,e),Uh(bl),Fi=!!gl,bl=gl=null,e.current=t,bm(t),qc(),ve=m,Ce=d,jr.transition=l}else e.current=t;if(ga&&(ga=!1,Nt=e,ba=a),l=e.pendingLanes,l===0&&(St=null),Gc(t.stateNode),sr(e,Ie()),r!==null)for(n=e.onRecoverableError,t=0;t<r.length;t++)a=r[t],n(a.value,{componentStack:a.stack,digest:a.digest});if(fa)throw fa=!1,e=ho,ho=null,e;return(ba&1)!==0&&e.tag!==0&&wn(),l=e.pendingLanes,(l&1)!==0?e===mo?ci++:(ci=0,mo=e):ci=0,yt(),null}function wn(){if(Nt!==null){var e=fs(ba),r=jr.transition,t=Ce;try{if(jr.transition=null,Ce=16>e?16:e,Nt===null)var n=!1;else{if(e=Nt,Nt=null,ba=0,(ve&6)!==0)throw Error(s(331));var a=ve;for(ve|=4,te=e.current;te!==null;){var l=te,d=l.child;if((te.flags&16)!==0){var m=l.deletions;if(m!==null){for(var f=0;f<m.length;f++){var F=m[f];for(te=F;te!==null;){var B=te;switch(B.tag){case 0:case 11:case 15:si(8,B,l)}var U=B.child;if(U!==null)U.return=B,te=U;else for(;te!==null;){B=te;var I=B.sibling,ee=B.return;if(hd(B),B===F){te=null;break}if(I!==null){I.return=ee,te=I;break}te=ee}}}var ne=l.alternate;if(ne!==null){var ie=ne.child;if(ie!==null){ne.child=null;do{var Be=ie.sibling;ie.sibling=null,ie=Be}while(ie!==null)}}te=l}}if((l.subtreeFlags&2064)!==0&&d!==null)d.return=l,te=d;else e:for(;te!==null;){if(l=te,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:si(9,l,l.return)}var N=l.sibling;if(N!==null){N.return=l.return,te=N;break e}te=l.return}}var y=e.current;for(te=y;te!==null;){d=te;var T=d.child;if((d.subtreeFlags&2064)!==0&&T!==null)T.return=d,te=T;else e:for(d=y;te!==null;){if(m=te,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:ha(9,m)}}catch(ae){De(m,m.return,ae)}if(m===d){te=null;break e}var J=m.sibling;if(J!==null){J.return=m.return,te=J;break e}te=m.return}}if(ve=a,yt(),Ur&&typeof Ur.onPostCommitFiberRoot=="function")try{Ur.onPostCommitFiberRoot(Ni,e)}catch{}n=!0}return n}finally{Ce=t,jr.transition=r}}return!1}function Td(e,r,t){r=vn(t,r),r=Ju(e,r,1),e=wt(e,r,1),r=tr(),e!==null&&(On(e,1,r),sr(e,r))}function De(e,r,t){if(e.tag===3)Td(e,e,t);else for(;r!==null;){if(r.tag===3){Td(r,e,t);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(St===null||!St.has(n))){e=vn(t,e),e=qu(r,e,1),r=wt(r,e,1),e=tr(),r!==null&&(On(r,1,e),sr(r,e));break}}r=r.return}}function jm(e,r,t){var n=e.pingCache;n!==null&&n.delete(r),r=tr(),e.pingedLanes|=e.suspendedLanes&t,Ke===e&&(Ye&t)===t&&(Ue===4||Ue===3&&(Ye&130023424)===Ye&&500>Ie()-co?Vt(e,0):uo|=t),sr(e,r)}function Pd(e,r){r===0&&((e.mode&1)===0?r=1:(r=Ci,Ci<<=1,(Ci&130023424)===0&&(Ci=4194304)));var t=tr();e=rt(e,r),e!==null&&(On(e,r,t),sr(e,t))}function Sm(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),Pd(e,t)}function Nm(e,r){var t=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(s(314))}n!==null&&n.delete(r),Pd(e,t)}var Rd;Rd=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||ir.current)lr=!0;else{if((e.lanes&t)===0&&(r.flags&128)===0)return lr=!1,hm(e,r,t);lr=(e.flags&131072)!==0}else lr=!1,ze&&(r.flags&1048576)!==0&&uu(r,Wi,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;da(e,r),e=r.pendingProps;var a=dn(r,Qe.current);gn(r,t),a=$l(null,r,n,e,a,t);var l=Ul();return r.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ar(n)?(l=!0,Ji(r)):l=!1,r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ml(r),a.updater=sa,r.stateNode=a,a._reactInternals=r,Yl(r,n,e,t),r=Xl(null,r,n,!0,l,t)):(r.tag=0,ze&&l&&Sl(r),rr(null,r,a,t),r=r.child),r;case 16:n=r.elementType;e:{switch(da(e,r),e=r.pendingProps,a=n._init,n=a(n._payload),r.type=n,a=r.tag=Cm(n),e=Lr(n,e),a){case 0:r=Ql(null,r,n,e,t);break e;case 1:r=td(null,r,n,e,t);break e;case 11:r=Qu(null,r,n,e,t);break e;case 14:r=Xu(null,r,n,Lr(n.type,e),t);break e}throw Error(s(306,n,""))}return r;case 0:return n=r.type,a=r.pendingProps,a=r.elementType===n?a:Lr(n,a),Ql(e,r,n,a,t);case 1:return n=r.type,a=r.pendingProps,a=r.elementType===n?a:Lr(n,a),td(e,r,n,a,t);case 3:e:{if(nd(r),e===null)throw Error(s(387));n=r.pendingProps,l=r.memoizedState,a=l.element,vu(e,r),ra(r,n,null,t);var d=r.memoizedState;if(n=d.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},r.updateQueue.baseState=l,r.memoizedState=l,r.flags&256){a=vn(Error(s(423)),r),r=id(e,r,n,t,a);break e}else if(n!==a){a=vn(Error(s(424)),r),r=id(e,r,n,t,a);break e}else for(pr=bt(r.stateNode.containerInfo.firstChild),mr=r,ze=!0,Fr=null,t=gu(r,null,n,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(mn(),n===a){r=nt(e,r,t);break e}rr(e,r,n,t)}r=r.child}return r;case 5:return xu(r),e===null&&Cl(r),n=r.type,a=r.pendingProps,l=e!==null?e.memoizedProps:null,d=a.children,vl(n,a)?d=null:l!==null&&vl(n,l)&&(r.flags|=32),rd(e,r),rr(e,r,d,t),r.child;case 6:return e===null&&Cl(r),null;case 13:return ad(e,r,t);case 4:return Ol(r,r.stateNode.containerInfo),n=r.pendingProps,e===null?r.child=pn(r,null,n,t):rr(e,r,n,t),r.child;case 11:return n=r.type,a=r.pendingProps,a=r.elementType===n?a:Lr(n,a),Qu(e,r,n,a,t);case 7:return rr(e,r,r.pendingProps,t),r.child;case 8:return rr(e,r,r.pendingProps.children,t),r.child;case 12:return rr(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(n=r.type._context,a=r.pendingProps,l=r.memoizedProps,d=a.value,Te(Xi,n._currentValue),n._currentValue=d,l!==null)if(Rr(l.value,d)){if(l.children===a.children&&!ir.current){r=nt(e,r,t);break e}}else for(l=r.child,l!==null&&(l.return=r);l!==null;){var m=l.dependencies;if(m!==null){d=l.child;for(var f=m.firstContext;f!==null;){if(f.context===n){if(l.tag===1){f=tt(-1,t&-t),f.tag=2;var F=l.updateQueue;if(F!==null){F=F.shared;var B=F.pending;B===null?f.next=f:(f.next=B.next,B.next=f),F.pending=f}}l.lanes|=t,f=l.alternate,f!==null&&(f.lanes|=t),Ll(l.return,t,r),m.lanes|=t;break}f=f.next}}else if(l.tag===10)d=l.type===r.type?null:l.child;else if(l.tag===18){if(d=l.return,d===null)throw Error(s(341));d.lanes|=t,m=d.alternate,m!==null&&(m.lanes|=t),Ll(d,t,r),d=l.sibling}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===r){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}rr(e,r,a.children,t),r=r.child}return r;case 9:return a=r.type,n=r.pendingProps.children,gn(r,t),a=xr(a),n=n(a),r.flags|=1,rr(e,r,n,t),r.child;case 14:return n=r.type,a=Lr(n,r.pendingProps),a=Lr(n.type,a),Xu(e,r,n,a,t);case 15:return Zu(e,r,r.type,r.pendingProps,t);case 17:return n=r.type,a=r.pendingProps,a=r.elementType===n?a:Lr(n,a),da(e,r),r.tag=1,ar(n)?(e=!0,Ji(r)):e=!1,gn(r,t),Ku(r,n,a),Yl(r,n,a,t),Xl(null,r,n,!0,e,t);case 19:return od(e,r,t);case 22:return ed(e,r,t)}throw Error(s(156,r.tag))};function Fd(e,r){return ds(e,r)}function Em(e,r,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sr(e,r,t,n){return new Em(e,r,t,n)}function ko(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cm(e){if(typeof e=="function")return ko(e)?1:0;if(e!=null){if(e=e.$$typeof,e===me)return 11;if(e===Re)return 14}return 2}function Tt(e,r){var t=e.alternate;return t===null?(t=Sr(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function xa(e,r,t,n,a,l){var d=2;if(n=e,typeof e=="function")ko(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case X:return qt(t.children,a,l,r);case L:d=8,a|=8;break;case Q:return e=Sr(12,t,r,a|2),e.elementType=Q,e.lanes=l,e;case we:return e=Sr(13,t,r,a),e.elementType=we,e.lanes=l,e;case be:return e=Sr(19,t,r,a),e.elementType=be,e.lanes=l,e;case Ee:return wa(t,a,l,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oe:d=10;break e;case le:d=9;break e;case me:d=11;break e;case Re:d=14;break e;case He:d=16,n=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return r=Sr(d,t,r,a),r.elementType=e,r.type=n,r.lanes=l,r}function qt(e,r,t,n){return e=Sr(7,e,n,r),e.lanes=t,e}function wa(e,r,t,n){return e=Sr(22,e,n,r),e.elementType=Ee,e.lanes=t,e.stateNode={isHidden:!1},e}function yo(e,r,t){return e=Sr(6,e,null,r),e.lanes=t,e}function xo(e,r,t){return r=Sr(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function Tm(e,r,t,n,a){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qa(0),this.expirationTimes=qa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qa(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function wo(e,r,t,n,a,l,d,m,f){return e=new Tm(e,r,t,m,f),r===1?(r=1,l===!0&&(r|=8)):r=0,l=Sr(3,null,null,r),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ml(l),e}function Pm(e,r,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:n==null?null:""+n,children:e,containerInfo:r,implementation:t}}function Ld(e){if(!e)return kt;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(s(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ar(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(s(171))}if(e.tag===1){var t=e.type;if(ar(t))return lu(e,t,r)}return r}function zd(e,r,t,n,a,l,d,m,f){return e=wo(t,n,!0,e,a,l,d,m,f),e.context=Ld(null),t=e.current,n=tr(),a=Et(t),l=tt(n,a),l.callback=r??null,wt(t,l,a),e.current.lanes=a,On(e,a,n),sr(e,n),e}function ja(e,r,t,n){var a=r.current,l=tr(),d=Et(a);return t=Ld(t),r.context===null?r.context=t:r.pendingContext=t,r=tt(l,d),r.payload={element:e},n=n===void 0?null:n,n!==null&&(r.callback=n),e=wt(a,r,d),e!==null&&(Or(e,a,d,l),ea(e,a,d)),d}function Sa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Md(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function jo(e,r){Md(e,r),(e=e.alternate)&&Md(e,r)}function Rm(){return null}var Od=typeof reportError=="function"?reportError:function(e){console.error(e)};function So(e){this._internalRoot=e}Na.prototype.render=So.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(s(409));ja(e,r,null,null)},Na.prototype.unmount=So.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Kt(function(){ja(null,e,null,null)}),r[Qr]=null}};function Na(e){this._internalRoot=e}Na.prototype.unstable_scheduleHydration=function(e){if(e){var r=vs();e={blockedOn:null,target:e,priority:r};for(var t=0;t<pt.length&&r!==0&&r<pt[t].priority;t++);pt.splice(t,0,e),t===0&&xs(e)}};function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ea(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Hd(){}function Fm(e,r,t,n,a){if(a){if(typeof n=="function"){var l=n;n=function(){var F=Sa(d);l.call(F)}}var d=zd(r,n,e,0,null,!1,!1,"",Hd);return e._reactRootContainer=d,e[Qr]=d.current,Wn(e.nodeType===8?e.parentNode:e),Kt(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var m=n;n=function(){var F=Sa(f);m.call(F)}}var f=wo(e,0,!1,null,null,!1,!1,"",Hd);return e._reactRootContainer=f,e[Qr]=f.current,Wn(e.nodeType===8?e.parentNode:e),Kt(function(){ja(r,f,t,n)}),f}function Ca(e,r,t,n,a){var l=t._reactRootContainer;if(l){var d=l;if(typeof a=="function"){var m=a;a=function(){var f=Sa(d);m.call(f)}}ja(r,d,e,a)}else d=Fm(t,r,e,a,n);return Sa(d)}gs=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=Mn(r.pendingLanes);t!==0&&(Ya(r,t|1),sr(r,Ie()),(ve&6)===0&&(xn=Ie()+500,yt()))}break;case 13:Kt(function(){var n=rt(e,1);if(n!==null){var a=tr();Or(n,e,1,a)}}),jo(e,1)}},Wa=function(e){if(e.tag===13){var r=rt(e,134217728);if(r!==null){var t=tr();Or(r,e,134217728,t)}jo(e,134217728)}},bs=function(e){if(e.tag===13){var r=Et(e),t=rt(e,r);if(t!==null){var n=tr();Or(t,e,r,n)}jo(e,r)}},vs=function(){return Ce},ks=function(e,r){var t=Ce;try{return Ce=e,r()}finally{Ce=t}},Gr=function(e,r,t){switch(r){case"input":if(Gt(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var n=t[r];if(n!==e&&n.form===e.form){var a=Ki(n);if(!a)throw Error(s(90));vr(n),Gt(n,a)}}}break;case"textarea":Wr(e,t);break;case"select":r=t.value,r!=null&&fe(e,!!t.multiple,r,!1)}},ns=go,is=Kt;var Lm={usingClientEntryPoint:!1,Events:[Xn,sn,Ki,rs,ts,go]},hi={findFiberByHostInstance:Ht,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zm={bundleType:hi.bundleType,version:hi.version,rendererPackageName:hi.rendererPackageName,rendererConfig:hi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ss(e),e===null?null:e.stateNode},findFiberByHostInstance:hi.findFiberByHostInstance||Rm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{Ni=Ta.inject(zm),Ur=Ta}catch{}}return ur.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lm,ur.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!No(r))throw Error(s(200));return Pm(e,r,null,t)},ur.createRoot=function(e,r){if(!No(e))throw Error(s(299));var t=!1,n="",a=Od;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),r=wo(e,1,!1,null,null,t,!1,n,a),e[Qr]=r.current,Wn(e.nodeType===8?e.parentNode:e),new So(r)},ur.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=ss(r),e=e===null?null:e.stateNode,e},ur.flushSync=function(e){return Kt(e)},ur.hydrate=function(e,r,t){if(!Ea(r))throw Error(s(200));return Ca(null,e,r,!0,t)},ur.hydrateRoot=function(e,r,t){if(!No(e))throw Error(s(405));var n=t!=null&&t.hydratedSources||null,a=!1,l="",d=Od;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),r=zd(r,null,e,1,t??null,a,!1,l,d),e[Qr]=r.current,Wn(e),n)for(e=0;e<n.length;e++)t=n[e],a=t._getVersion,a=a(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,a]:r.mutableSourceEagerHydrationData.push(t,a);return new Na(r)},ur.render=function(e,r,t){if(!Ea(r))throw Error(s(200));return Ca(null,e,r,!1,t)},ur.unmountComponentAtNode=function(e){if(!Ea(e))throw Error(s(40));return e._reactRootContainer?(Kt(function(){Ca(null,null,e,!1,function(){e._reactRootContainer=null,e[Qr]=null})}),!0):!1},ur.unstable_batchedUpdates=go,ur.unstable_renderSubtreeIntoContainer=function(e,r,t,n){if(!Ea(t))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Ca(e,r,t,!1,n)},ur.version="18.3.1-next-f1338f8080-20240426",ur}var Vd;function Vm(){if(Vd)return To.exports;Vd=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(u){console.error(u)}}return o(),To.exports=Km(),To.exports}var Jd;function Jm(){if(Jd)return Pa;Jd=1;var o=Vm();return Pa.createRoot=o.createRoot,Pa.hydrateRoot=o.hydrateRoot,Pa}var qm=Jm();function Ym(o){var u;(u=document.querySelector('meta[name="theme-color"]'))==null||u.setAttribute("content",o)}const Wm="modulepreload",Gm=function(o,u){return new URL(o,u).href},qd={},vc=function(u,s,h){let p=Promise.resolve();if(s&&s.length>0){let k=function(z){return Promise.all(z.map(j=>Promise.resolve(j).then(M=>({status:"fulfilled",value:M}),M=>({status:"rejected",reason:M}))))};const w=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),v=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));p=k(s.map(z=>{if(z=Gm(z,h),z in qd)return;qd[z]=!0;const j=z.endsWith(".css"),M=j?'[rel="stylesheet"]':"";if(!!h)for(let O=w.length-1;O>=0;O--){const H=w[O];if(H.href===z&&(!j||H.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${z}"]${M}`))return;const P=document.createElement("link");if(P.rel=j?"stylesheet":Wm,j||(P.as="script"),P.crossOrigin="",P.href=z,v&&P.setAttribute("nonce",v),document.head.appendChild(P),j)return new Promise((O,H)=>{P.addEventListener("load",O),P.addEventListener("error",()=>H(new Error(`Unable to preload CSS for ${z}`)))})}))}function x(k){const w=new Event("vite:preloadError",{cancelable:!0});if(w.payload=k,window.dispatchEvent(w),!w.defaultPrevented)throw k}return p.then(k=>{for(const w of k||[])w.status==="rejected"&&x(w.reason);return u().catch(x)})},En="./",gr="?v=mwc6b86r",br=[{slug:"karamelluklattar-med-jardhnetum-og-sjavarsalti",brand:"hberg",name:{is:"Karamelluklattar með jarðhnetum og sjávarsalti",en:"Karamelluklattar með jarðhnetum og sjávarsalti"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Karamellusúkkulaði (55,2%) (sykur, kakósmjör, MJÓLKURDUFT , ýruefni (E322 úr SOJA ), karamellubragðefni, náttúrúleg vanillubragðefni, paprikukrydd), JARÐHNETUR (44%), sjávarsalt (0,8%)",nutrition:"Næringargildi í 100 g: Orka 2377kJ/572 kkal Fita 40 g -Þar af mettuð 15 g Kolvetni 37 g -Þar af sykurtegundir 33 g Trefjar 3,8 g Prótein 14 g Salt 0,93 g",nutritionRows:[["Orka","2377kJ/572 kkal"],["Fita","40 g"],["-Þar af mettuð","15 g"],["Kolvetni","37 g"],["-Þar af sykurtegundir","33 g"],["Trefjar","3,8 g"],["Prótein","14 g"],["Salt","0,93 g"]],tags:["snakk"],tint:"#CB9583",allergens:["peanut","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/karamelluklattar-med-jardhnetum-og-sjavarsalti/",imageUrls:["https://hberg.is/wp-content/uploads/2021/10/karamelluklattar-jardhn-sjavarsalti.jpg","https://hberg.is/wp-content/uploads/2021/10/karamelluklattar-jardhn-sjavarsalti-1.jpg"]},{slug:"kokosflogur-med-karamellu-sjavarsalti",brand:"hberg",name:{is:"Kókosflögur með Karamellu & Sjávarsalti",en:"Kókosflögur með Karamellu & Sjávarsalti"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Kókosflögur, kókospálmasykur, sjávarsalt",nutrition:"Næringargildi í 100 g: Orka 2705 kJ/652 kkal Fita 50 g -Þar af mettuð 47 g Kolvetni 42 g -Þar af sykurtegundir 32 g Trefjar 7,0 g Prótein 5,0 g Salt 0,63 g",nutritionRows:[["Orka","2705 kJ/652 kkal"],["Fita","50 g"],["-Þar af mettuð","47 g"],["Kolvetni","42 g"],["-Þar af sykurtegundir","32 g"],["Trefjar","7,0 g"],["Prótein","5,0 g"],["Salt","0,63 g"]],tags:["snakk"],tint:"#C99481",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kokosflogur-med-karamellu-sjavarsalti/",imageUrls:["https://hberg.is/wp-content/uploads/2020/08/kokosflogur-1.jpg","https://hberg.is/wp-content/uploads/2020/08/kokosflogur-2.jpg"]},{slug:"fuglafodur",brand:"hberg",name:{is:"Fuglafóður",en:"Fuglafóður"},desc:{is:"Annað",en:"Annað"},ingredients:"Innihald: Sólblómafræ",nutrition:"",nutritionRows:[],tags:["annad"],tint:"#A4B5BC",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/fuglafodur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/08/fuglafodur-1.jpg"]},{slug:"linsubaunir-raudar",brand:"hberg",name:{is:"Linsubaunir rauðar",en:"Linsubaunir rauðar"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Rauðar linsubaunir",nutrition:"Næringargildi í 100 g: Orka 573 kJ/136 kkal Fita 0,4 g -Þar af mettuð 0,1 g Kolvetni 20 g -Þar af sykurtegundir 1,8 g Trefjar 7,9 g Prótein 9,0 g Salt 0 g",nutritionRows:[["Orka","573 kJ/136 kkal"],["Fita","0,4 g"],["-Þar af mettuð","0,1 g"],["Kolvetni","20 g"],["-Þar af sykurtegundir","1,8 g"],["Trefjar","7,9 g"],["Prótein","9,0 g"],["Salt","0 g"]],tags:["bakstur"],tint:"#D2BF9D",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/linsubaunir-raudar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/08/raudar-linsubaunir-1.jpg","https://hberg.is/wp-content/uploads/2020/08/raudar-linsubaunir-2.jpg"]},{slug:"hnetusmjor-1kg",brand:"hberg",name:{is:"Hnetusmjör 1Kg",en:"Hnetusmjör 1Kg"},desc:{is:"Hnetusmjör",en:"Hnetusmjör"},ingredients:"Innihald: JARÐHNETUR (97,5%), salt (1,5%), sólblómaolía. Hnetusmjör Uppskriftir & fróðleikur Fróðleikur Hnetusmjör til manneldis má rekja alla leið til Inka og Aztekeka í Suður-Ameríku en sú tegund af hnetusmjör var auðvitað mjög frábrugðið þeim framleiðsluvörum sem við þekkjum í dag. Nútíma saga hnetusmjörs byrjaði í Kanada og í raun ekki fyrr en undir í lok 19. aldar þegar efna & lyfjafræðingurinn Marcellus Gilmore Edson var veitt einkaleyfi á hnetusmjöri. Hnetusmjör er fyrst og fremst próteinríkt var í fyrstu ætlað þeim sem ættu í erfiðleikum með að tyggja mat en slíkt var algengt á þessum tíma. Næringarrík fæða Í hnetusmjöri má finna ríka uppsprettu (20% eða meira af daglegu gildi) trefja, E-vítamíni, pantóþensýru, fólati, níasíni og B6 vítamíni. Einnig má finna steinefni eins og mangan, magnesíum, fosfór, sink, kopar og natríum (bætt við sem salt við framleiðslu) ásamt þíamíni, ríbóflavíni, járni og kalíum. Uppskriftir Geggjað Boost og klárlega okkar uppáhalds skál Við sitjum ekki á gullinu og viljum því deila með ykkur boost uppskrift sem sló heldur betur í gegn hjá starfsfólki okkar og fjölskyldu. Lýsing: Ferskleiki með næringaríkri fylling sem skilar þér aukinni orku og vellíðan. Grunnur: Grísk jógúrt, banani, döðlur, mangó, jarðarber og hnetusmjör. Toppur: Granóla, kókoskaramell, hnetusmjör og jarðarber og banani Skammtið eftir smekk ♥",nutrition:"Næringargildi í 100 g: Orka 2604 kJ/626 kkal Fita 51 g -Þar af mettuð 7,4 g Kolvetni 13 g -Þar af sykurtegundir 4,7 g Trefjar 6,6 g Prótein 25 g Salt 1,5 g",nutritionRows:[["Orka","2604 kJ/626 kkal"],["Fita","51 g"],["-Þar af mettuð","7,4 g"],["Kolvetni","13 g"],["-Þar af sykurtegundir","4,7 g"],["Trefjar","6,6 g"],["Prótein","25 g"],["Salt","1,5 g"]],tags:["smjor"],tint:"#D3A854",allergens:["peanut"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/hnetusmjor-1kg/",imageUrls:["https://hberg.is/wp-content/uploads/2020/07/hnetusmjör-1-kg-mynd.png","https://hberg.is/wp-content/uploads/2020/07/hnetusmjör-1-kg-mynd.png"],weight:"1Kg"},{slug:"orkustykki",brand:"hberg",name:{is:"Orkustykki",en:"Orkustykki"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Döðlur (68%), kókos, kakó.",nutrition:"Næringargildi í 100 g: Orka 1698 kJ/406 kkal Fita 18 g -Þar af mettuð 15 g Kolvetni 61 g -Þar af sykurtegundir 45 g Trefjar 10 g Prótein 5,0 g Salt 0,04 g",nutritionRows:[["Orka","1698 kJ/406 kkal"],["Fita","18 g"],["-Þar af mettuð","15 g"],["Kolvetni","61 g"],["-Þar af sykurtegundir","45 g"],["Trefjar","10 g"],["Prótein","5,0 g"],["Salt","0,04 g"]],tags:["snakk"],tint:"#CA9685",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/orkustykki/",imageUrls:["https://hberg.is/wp-content/uploads/2020/06/orkustykki-dod-kokos-kako-50gr-5.jpg","https://hberg.is/wp-content/uploads/2020/06/orkustykki-dod-kokos-kako-50gr-2.jpg"]},{slug:"strasaet-erytritol",brand:"hberg",name:{is:"Strásæt Erýtrítól",en:"Strásæt Erýtrítól"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Erýthritól strásæta",nutrition:"Næringargildi í 100 g: Orka 0 kJ/0 kkal Fita 0 g -Þar af mettuð 0 g Kolvetni 0 g -Þar af sykurtegundir 0 g , Þar af Erýtritól 100 g Trefjar 0 g Prótein 0 g Salt 0 g",nutritionRows:[["Orka","0 kJ/0 kkal"],["Fita","0 g"],["-Þar af mettuð","0 g"],["Kolvetni","0 g"],["-Þar af sykurtegundir","0 g"],[", Þar af Erýtritól","100 g"],["Trefjar","0 g"],["Prótein","0 g"],["Salt","0 g"]],tags:["bakstur"],tint:"#D4C09C",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/strasaet-erytritol/",imageUrls:["https://hberg.is/wp-content/uploads/2020/05/strasaeta-2.jpg","https://hberg.is/wp-content/uploads/2020/05/strasaeta.jpg"]},{slug:"karamellu-mondlur-med-sukkuladi-sjavarsalti",brand:"hberg",name:{is:"Karamellu-Möndlur með Súkkulaði & Sjávarsalti",en:"Karamellu-Möndlur með Súkkulaði & Sjávarsalti"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Súkkulaði með karamellubragði (68%) (sykur, kakósmjör, MJÓLKURDUFT , kakómassi, ýruefni (E322 úr SOJA ), karamellubragðefni, krydd, náttúrulegt vanillu bragðefni), MÖNDLUR (30%), glúkósasíróp, húðunarefni (E414, E904), salt",nutrition:"Næringargildi í 100 g: Orka 2358 kJ/566kkal Fita 39 g -Þar af mettuð 15 g Kolvetni 43 g -Þar af sykurtegundir 40 g Trefjar 3,4 g Prótein 11 g Salt 0,45 g",nutritionRows:[["Orka","2358 kJ/566kkal"],["Fita","39 g"],["-Þar af mettuð","15 g"],["Kolvetni","43 g"],["-Þar af sykurtegundir","40 g"],["Trefjar","3,4 g"],["Prótein","11 g"],["Salt","0,45 g"]],tags:["snakk"],tint:"#CA9684",allergens:["nuts","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/karamellu-mondlur-med-sukkuladi-sjavarsalti/",imageUrls:["https://hberg.is/wp-content/uploads/2020/05/karamellu-mondlur_sukk-salt-2.jpg","https://hberg.is/wp-content/uploads/2020/05/karamellu-mondlur_sukk-salt.jpg"]},{slug:"heslihnetur-med-sukkuladi-afrit",brand:"hberg",name:{is:"Heslihnetur með súkkulaði",en:"Heslihnetur með súkkulaði"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Súkkulaði (78%) (sykur, MJÓLKURDUFT , kakómassi, kakósmjör, MYSUDUFT , ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), HESLIHNETUR (20%), glúkósasíróp, húðunarefni (E414, E904)",nutrition:"Heslihnetur með súkkulaði Næringargildi í 100 g: Orka 2264 kJ/543kkal Fita 34 g -Þar af mettuð 14 g Kolvetni 50 g -Þar af sykurtegundir 48 g Trefjar 3,8 g Prótein 8,0 g Salt 0,22 g",nutritionRows:[["Orka","2264 kJ/543kkal"],["Fita","34 g"],["-Þar af mettuð","14 g"],["Kolvetni","50 g"],["-Þar af sykurtegundir","48 g"],["Trefjar","3,8 g"],["Prótein","8,0 g"],["Salt","0,22 g"]],tags:["snakk"],tint:"#CD9481",allergens:["nuts","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/heslihnetur-med-sukkuladi-afrit/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/heslihnetur-med-sukkuladi-2.jpg"]},{slug:"wasabi-hnetur",brand:"hberg",name:{is:"Wasabi hnetur",en:"Wasabi hnetur"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: JARÐHNETUR (27,5%), HVEITI (22,1%), sykur, maíssterkja, maísmjöl, pálmaolía (vottuð), salt, sojasósa ( HVEITI , SOJABAUNIR , dextrín, vatn, salt, kojirækt, litarefni (E150c)), krydd (dextrín, þykkingarefni (E414), sinnepsbragðefni, pálmaolía, andoxunarefni (E392)), lyftiefni (E500), kartöflusterkja, bragðaukandi efni (E635), sítrónusýra (E330), litarefni (E141), wasabi (0,003%)",nutrition:"Wasabi hnetur Næringargildi í 100 g: Orka 1921 kJ/458 kkal Fita 19,3 g -Þar af mettuð 4,4 g Kolvetni 59,6 g -Þar af sykurtegundir 23,4 g Trefjar 2,8 g Prótein 10 g Salt 1,0 g",nutritionRows:[["Orka","1921 kJ/458 kkal"],["Fita","19,3 g"],["-Þar af mettuð","4,4 g"],["Kolvetni","59,6 g"],["-Þar af sykurtegundir","23,4 g"],["Trefjar","2,8 g"],["Prótein","10 g"],["Salt","1,0 g"]],tags:["snakk"],tint:"#CA9586",allergens:["peanut","gluten","soy","mustard"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/wasabi-hnetur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/wasabi-hnetur-2.jpg"]},{slug:"heslihnetur-med-irish-coffee-sukkuladi",brand:"hberg",name:{is:"Heslihnetur með Irish Coffee súkkulaði",en:"Heslihnetur með Irish Coffee súkkulaði"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Hvítt súkkulaði (77%) (sykur, kakósmjör, MJÓLKURDUFT , MYSUDUFT , ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), HESLIHNETUR (20%), glúkósasíróp, dökkt súkkulaði (1%) (sykur, kakómassi, kakósmjör, ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), húðunarefni (E414, E904), irish coffee bragðefni (0,3%)",nutrition:"Heslihnetur með Irish Coffee súkkulaði Næringargildi í 100 g: Orka 2351 kJ/564 kkal Fita 37 g -Þar af mettuð 15 g Kolvetni 51 g -Þar af sykurtegundir 50 g Trefjar 1,7 g Prótein 6,4 g Salt 0,29 g",nutritionRows:[["Orka","2351 kJ/564 kkal"],["Fita","37 g"],["-Þar af mettuð","15 g"],["Kolvetni","51 g"],["-Þar af sykurtegundir","50 g"],["Trefjar","1,7 g"],["Prótein","6,4 g"],["Salt","0,29 g"]],tags:["snakk"],tint:"#C99482",allergens:["nuts","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/heslihnetur-med-irish-coffee-sukkuladi/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/heslihnetur-irish.jpg"]},{slug:"piparmondlur",brand:"hberg",name:{is:"Piparmöndlur",en:"Piparmöndlur"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Súkkulaði (65%) (sykur, MJÓLKURDUFT , kakómassi, kakósmjör, MYSUDUFT , ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), MÖNDLUR, salmíakduft (4%) (sýrustillir (E510), lakkrísrót, pálmolía (vottuð)), kakósmjör.",nutrition:"Piparmöndlur Næringargildi í 100 g: Orka 2240 kJ/538 kkal Fita 35 g -Þar af mettuð 12 g Kolvetni 42 g -Þar af sykurtegundir 40 g Trefjar 5,1 g Prótein 10,8 g Salt 0,20 g",nutritionRows:[["Orka","2240 kJ/538 kkal"],["Fita","35 g"],["-Þar af mettuð","12 g"],["Kolvetni","42 g"],["-Þar af sykurtegundir","40 g"],["Trefjar","5,1 g"],["Prótein","10,8 g"],["Salt","0,20 g"]],tags:["snakk"],tint:"#CC9782",allergens:["nuts","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/piparmondlur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/pipar-mondlur.jpg"]},{slug:"kasjusmjor-2",brand:"hberg",name:{is:"Kasjúsmjör",en:"Kasjúsmjör"},desc:{is:"Hnetusmjör",en:"Hnetusmjör"},ingredients:"Innihald: KASJÚHNETUR (99,2%), sjávarsalt (0,8%)",nutrition:"Næringargildi í 100 g: Orka 2416 kJ/582 kkal Fita 44 g -Þar af mettuð 7,8 g Kolvetni 27 g -Þar af sykurtegundir 5,9 g Trefjar 3,3 g Prótein 18 g Salt 0,8 g",nutritionRows:[["Orka","2416 kJ/582 kkal"],["Fita","44 g"],["-Þar af mettuð","7,8 g"],["Kolvetni","27 g"],["-Þar af sykurtegundir","5,9 g"],["Trefjar","3,3 g"],["Prótein","18 g"],["Salt","0,8 g"]],tags:["smjor"],tint:"#D2AA5A",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kasjusmjor-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/04/kasjusmjor.jpg"]},{slug:"kasjusmjor",brand:"hberg",name:{is:"Möndlusmjör",en:"Möndlusmjör"},desc:{is:"Hnetusmjör",en:"Hnetusmjör"},ingredients:"Innihald: MÖNDLUR , sjávarsalt (0,8%)",nutrition:"Næringargildi í 100 g: Orka 2623 kJ/663 kkal Fita 49 g -Þar af mettuð 4,0 g Kolvetni 21 g -Þar af sykurtegundir 4,5 g Trefjar 12 g Prótein 21 g Salt 0,8 g",nutritionRows:[["Orka","2623 kJ/663 kkal"],["Fita","49 g"],["-Þar af mettuð","4,0 g"],["Kolvetni","21 g"],["-Þar af sykurtegundir","4,5 g"],["Trefjar","12 g"],["Prótein","21 g"],["Salt","0,8 g"]],tags:["smjor"],tint:"#D1AC5D",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kasjusmjor/",imageUrls:["https://hberg.is/wp-content/uploads/2020/04/mondlusmjor.jpg"]},{slug:"hnetusmjor",brand:"hberg",name:{is:"Hnetusmjör 340g",en:"Hnetusmjör 340g"},desc:{is:"Hnetusmjör",en:"Hnetusmjör"},ingredients:"Innihald: JARÐHNETUR (97,5%), salt (1,5%), sólblómaolía.",nutrition:"Næringargildi í 100 g: Orka 2604 kJ/626 kkal Fita 51 g -Þar af mettuð 7,4 g Kolvetni 13 g -Þar af sykurtegundir 4,7 g Trefjar 6,6 g Prótein 25 g Salt 1,5 g",nutritionRows:[["Orka","2604 kJ/626 kkal"],["Fita","51 g"],["-Þar af mettuð","7,4 g"],["Kolvetni","13 g"],["-Þar af sykurtegundir","4,7 g"],["Trefjar","6,6 g"],["Prótein","25 g"],["Salt","1,5 g"]],tags:["smjor"],tint:"#D3AB59",allergens:["peanut"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/hnetusmjor/",imageUrls:["https://hberg.is/wp-content/uploads/2020/04/Hnetusmjör340_Hberg.png","https://hberg.is/wp-content/uploads/2020/04/Hnetusmjör340_Hberg.png"],weight:"340g"},{slug:"granola-med-tronuberjum",brand:"hberg",name:{is:"Granóla með Trönuberjum",en:"Granóla með Trönuberjum"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Granóla (95%) (heilkornaflögur (61,5%) ( HAFRAR, HVEITI ), sykur, sólblómaolía, stökkt korn (hrísmjöl, HVEITI , sykur, maltað BYGG , salt), glúkósasíróp, hunang, lyftiefni (E500), kanill, karamellaður sykur, bragðefni, þrávarnarefni (E306)), trönuber (5%) (trönuber, hásykur, sólblómaolía)",nutrition:"Næringargildi í 100 g: Orka 1805 kJ/429 kkal Fita 13 g -Þar af mettuð 1,3 g Kolvetni 67 g -Þar af sykurtegundir 19 g Trefjar 5,9 g Prótein 8,8 g Salt 0,10 g",nutritionRows:[["Orka","1805 kJ/429 kkal"],["Fita","13 g"],["-Þar af mettuð","1,3 g"],["Kolvetni","67 g"],["-Þar af sykurtegundir","19 g"],["Trefjar","5,9 g"],["Prótein","8,8 g"],["Salt","0,10 g"]],tags:["snakk"],tint:"#CA9683",allergens:["gluten"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/granola-med-tronuberjum/",imageUrls:["https://hberg.is/wp-content/uploads/2020/04/granola-med-tronuberjum-2.jpg"]},{slug:"kajuhnetur-bortnar",brand:"hberg",name:{is:"Kasjúhnetur brotnar",en:"Kasjúhnetur brotnar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: KASJÚHNETUR",nutrition:"Kasjúhnetur brotnar Næringargildi í 100 g: Orka 2416 kJ/582 kkal Fita 44  g -Þar af mettuð 7,8 g Kolvetni 27 g -Þar af sykurtegundir 5,9 g Trefjar 3,3 g Prótein 18 g Salt 0,03 g",nutritionRows:[["Orka","2416 kJ/582 kkal"],["Fita","44  g"],["-Þar af mettuð","7,8 g"],["Kolvetni","27 g"],["-Þar af sykurtegundir","5,9 g"],["Trefjar","3,3 g"],["Prótein","18 g"],["Salt","0,03 g"]],tags:["hnetur"],tint:"#B0825E",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kajuhnetur-bortnar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kashuhnetur-brotnar-oristad-2.jpg"]},{slug:"mondlur-med-dokku-sukkuladi",brand:"hberg",name:{is:"Möndlur með dökku súkkulaði",en:"Möndlur með dökku súkkulaði"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Dökkt súkkulaði (68%) (sykur, kakómassi, kakósmjör, ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), MÖNDLUR (29%), glúkósasíróp, pálmaolía, húðunarefni (E414, E904)",nutrition:"Möndlur með dökku súkkulaði Næringargildi í 100 g: Orka 2268 kJ/546 kkal Fita 38 g -Þar af mettuð 15 g Kolvetni 37 g -Þar af sykurtegundir 34 g Trefjar 8,1 g Prótein 9,0 g Salt 0,01 g",nutritionRows:[["Orka","2268 kJ/546 kkal"],["Fita","38 g"],["-Þar af mettuð","15 g"],["Kolvetni","37 g"],["-Þar af sykurtegundir","34 g"],["Trefjar","8,1 g"],["Prótein","9,0 g"],["Salt","0,01 g"]],tags:["snakk"],tint:"#CC9683",allergens:["nuts","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlur-med-dokku-sukkuladi/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mondlur-med-dokku-sukkuladi-2.jpg"]},{slug:"kasjuhentur-med-sukkuladi",brand:"hberg",name:{is:"Kasjúhentur með súkkulaði",en:"Kasjúhentur með súkkulaði"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Súkkulaði (63%) (sykur, MJÓLKURDUFT , kakómassi, kakósmjör, MYSUDUFT , ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), KASJÚHNETUR (34%), glúkósasíróp, pálmaolía, húðunarefni (E414, E904)",nutrition:"Kasjúhnetur með súkkulaði Næringargildi í 100 g: Orka 2268 kJ/544kkal Fita 34 g -Þar af mettuð 13 g Kolvetni 48 g -Þar af sykurtegundir 39 g Trefjar 3,0 g Prótein 10 g Salt 0,18 g",nutritionRows:[["Orka","2268 kJ/544kkal"],["Fita","34 g"],["-Þar af mettuð","13 g"],["Kolvetni","48 g"],["-Þar af sykurtegundir","39 g"],["Trefjar","3,0 g"],["Prótein","10 g"],["Salt","0,18 g"]],tags:["snakk"],tint:"#CA9582",allergens:["nuts","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kasjuhentur-med-sukkuladi/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kasjuhnetur-med-sukkuladi-2.jpg","https://hberg.is/wp-content/uploads/2020/03/kasjuhnetur-med-sukkuladi.jpg"]},{slug:"valhnetukjarnar",brand:"hberg",name:{is:"Valhnetukjarnar",en:"Valhnetukjarnar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: VALHNETUR",nutrition:"Valhnetukjarnar Næringargildi í 100 g: Orka 2584 kJ/618kkal Fita 59 g -Þar af mettuð 3,4 g Kolvetni 9,9 g -Þar af sykurtegundir 1,1 g Trefjar 6,8 g Prótein 24 g Salt 0 g",nutritionRows:[["Orka","2584 kJ/618kkal"],["Fita","59 g"],["-Þar af mettuð","3,4 g"],["Kolvetni","9,9 g"],["-Þar af sykurtegundir","1,1 g"],["Trefjar","6,8 g"],["Prótein","24 g"],["Salt","0 g"]],tags:["hnetur"],tint:"#B5865F",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/valhnetukjarnar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/valhnetukjarnar-2.jpg"]},{slug:"tronuber-2",brand:"hberg",name:{is:"Trönuber",en:"Trönuber"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Trönuber (60%), hrásykur (39%), sólblómaolía (<1%)",nutrition:"Trönuber Næringargildi í 100 g: Orka 1305 kJ/308 kkal Fita 1,5 g -Þar af mettuð 0,2 g Kolvetni 71 g -Þar af sykurtegundir 65 g Trefjar 5,1 g Prótein 0,11 g Salt 0,01 g",nutritionRows:[["Orka","1305 kJ/308 kkal"],["Fita","1,5 g"],["-Þar af mettuð","0,2 g"],["Kolvetni","71 g"],["-Þar af sykurtegundir","65 g"],["Trefjar","5,1 g"],["Prótein","0,11 g"],["Salt","0,01 g"]],tags:["avextir"],tint:"#DE8E59",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/tronuber-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/tronuber.jpg"]},{slug:"sveskjur",brand:"hberg",name:{is:"Sveskjur",en:"Sveskjur"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Sveskjur, rotvarnarefni (E202) (<1%), jurtaolía (<1%)",nutrition:"Sveskjur Næringargildi í 100 g: Orka 1076 kJ/254 kkal Fita 0,2 g -Þar af mettuð 0,1 g Kolvetni 56,8 g -Þar af sykurtegundir 38,1 g Trefjar 7,1 g Prótein 2,7 g Salt 0 g",nutritionRows:[["Orka","1076 kJ/254 kkal"],["Fita","0,2 g"],["-Þar af mettuð","0,1 g"],["Kolvetni","56,8 g"],["-Þar af sykurtegundir","38,1 g"],["Trefjar","7,1 g"],["Prótein","2,7 g"],["Salt","0 g"]],tags:["avextir"],tint:"#E19159",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/sveskjur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/sveskjur-400grIMG_0754-2-of-2.jpg","https://hberg.is/wp-content/uploads/2020/03/sveskjur-400grIMG_0752-1-of-2.jpg"]},{slug:"salthnetur",brand:"hberg",name:{is:"Salthnetur",en:"Salthnetur"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: JARÐHNETUR , sólblómaolía, salt",nutrition:"Salthnetur Næringargildi í 100 g: Orka 2593 kJ/626 kkal Fita 50,6 g -Þar af mettuð 7,5 g Kolvetni 14,2 g -Þar af sykurtegundir 5,3 g Trefjar 6,8 g Prótein 20,9 g Salt 1,50 g",nutritionRows:[["Orka","2593 kJ/626 kkal"],["Fita","50,6 g"],["-Þar af mettuð","7,5 g"],["Kolvetni","14,2 g"],["-Þar af sykurtegundir","5,3 g"],["Trefjar","6,8 g"],["Prótein","20,9 g"],["Salt","1,50 g"]],tags:["hnetur"],tint:"#B5855D",allergens:["peanut"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/salthnetur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/salthnetur.jpg"]},{slug:"pistasiur",brand:"hberg",name:{is:"Pistasíur",en:"Pistasíur"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: PISTASÍURKJARNAR",nutrition:"Pistasíur Næringargildi í 100 g: Orka 2387 kJ/576 kkal Fita 45 g -Þar af mettuð 5,9 g Kolvetni 17 g -Þar af sykurtegundir 7,7 g Trefjar 11 g Prótein 20 g Salt 0,03 g",nutritionRows:[["Orka","2387 kJ/576 kkal"],["Fita","45 g"],["-Þar af mettuð","5,9 g"],["Kolvetni","17 g"],["-Þar af sykurtegundir","7,7 g"],["Trefjar","11 g"],["Prótein","20 g"],["Salt","0,03 g"]],tags:["hnetur"],tint:"#B4855F",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/pistasiur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/pistasiur-2.jpg"]},{slug:"pekan-hnetur",brand:"hberg",name:{is:"Pekan hnetur",en:"Pekan hnetur"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: PEKANHNETUR",nutrition:"Pekanhnetur Næringargildi í 100 g: Orka 2933 kJ/698 kkal Fita 69,8 g -Þar af mettuð 6,3 g Kolvetni 6,2 g -Þar af sykurtegundir 4,5 g Trefjar 9,4 g Prótein 10 g Salt 0,003 g",nutritionRows:[["Orka","2933 kJ/698 kkal"],["Fita","69,8 g"],["-Þar af mettuð","6,3 g"],["Kolvetni","6,2 g"],["-Þar af sykurtegundir","4,5 g"],["Trefjar","9,4 g"],["Prótein","10 g"],["Salt","0,003 g"]],tags:["hnetur"],tint:"#B2855E",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/pekan-hnetur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/pekanhnetur-2.jpg"]},{slug:"orkupokinn",brand:"hberg",name:{is:"Orkupokinn",en:"Orkupokinn"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Ristaðar hnetur ( JARÐHNETUR ( JARÐHNETUOLÍA , salt), KASJÚHNETUR , MÖNDLUR ), rúsínur (sólblómaolía, rotvarnarefni ( BRENNISTEINSDÍOXÍÐ )), trönuber (hrásykur, sólblómaolía)",nutrition:"Orkupokinn Næringargildi í 100 g: Orka 2145 kJ/515 kkal Fita 33 g -Þar af mettuð 4,5 g Kolvetni 36 g -Þar af sykurtegundir 22 g Trefjar 6,3 g Prótein 16 g Salt 0,64 g",nutritionRows:[["Orka","2145 kJ/515 kkal"],["Fita","33 g"],["-Þar af mettuð","4,5 g"],["Kolvetni","36 g"],["-Þar af sykurtegundir","22 g"],["Trefjar","6,3 g"],["Prótein","16 g"],["Salt","0,64 g"]],tags:["snakk"],tint:"#CC9784",allergens:["nuts","peanut","sulphites"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/orkupokinn/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/orku-pokinn-2.jpg"]},{slug:"party-pokinn",brand:"hberg",name:{is:"Partý pokinn",en:"Partý pokinn"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Kryddhjúpaðar jarðhnetur ( JARÐHNETUR , HVEITI , kartöflusterkja, kryddblanda (krydd, brauðraspur ( HVEITI , salt, lyftiefni (E503), paprika, kekkjavarnarefni (E551), rotvarnarefni (E306), turmerik), sólblómaolía, salt, sykur, hvítlaukur, lyftiefni (E500), náttúruleg bragðefni ( HVEITI )), JARÐHNETUR (sólblómaolía, salt (1%)), ristaðar MÖNDLUR , ristuð graskersfræ (pálmolía).",nutrition:"Partý pokinn Næringargildi í 100 g: Orka 2122 kJ/507 kkal Fita 30 g -Þar af mettuð 8,5 g Kolvetni 38 g -Þar af sykurtegundir 2,8 g Trefjar 9,6 g Prótein 17 g Salt 1,8 g",nutritionRows:[["Orka","2122 kJ/507 kkal"],["Fita","30 g"],["-Þar af mettuð","8,5 g"],["Kolvetni","38 g"],["-Þar af sykurtegundir","2,8 g"],["Trefjar","9,6 g"],["Prótein","17 g"],["Salt","1,8 g"]],tags:["snakk"],tint:"#CA9584",allergens:["nuts","peanut","gluten"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/party-pokinn/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/party-pokinn-2-1.jpg"]},{slug:"mondlur",brand:"hberg",name:{is:"Möndlur",en:"Möndlur"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: MÖNDLUR",nutrition:"Möndlur heilar með hýði Næringargildi í 100 g: Orka 2623 kJ/633 kkal Fita 49 g -Þar af mettuð 4,0 g Kolvetni 21 g -Þar af sykurtegundir 4,5 g Trefjar 12 g Prótein 21 g Salt 0 g",nutritionRows:[["Orka","2623 kJ/633 kkal"],["Fita","49 g"],["-Þar af mettuð","4,0 g"],["Kolvetni","21 g"],["-Þar af sykurtegundir","4,5 g"],["Trefjar","12 g"],["Prótein","21 g"],["Salt","0 g"]],tags:["hnetur"],tint:"#B4845C",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mondlur.jpg"]},{slug:"mondlur-sneiddar",brand:"hberg",name:{is:"Möndlur sneiddar",en:"Möndlur sneiddar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: MÖNDLUR",nutrition:"Möndlur sneiddar Næringargildi í 100 g: Orka 2703kJ/653 kkal Fita 52 g -Þar af mettuð 3,95 g Kolvetni 18,7 g -Þar af sykurtegundir 4,6 g Trefjar 9,9 g Prótein 21,4 g Salt 0,05 g",nutritionRows:[["Orka","2703kJ/653 kkal"],["Fita","52 g"],["-Þar af mettuð","3,95 g"],["Kolvetni","18,7 g"],["-Þar af sykurtegundir","4,6 g"],["Trefjar","9,9 g"],["Prótein","21,4 g"],["Salt","0,05 g"]],tags:["hnetur"],tint:"#B2835D",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlur-sneiddar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/möndlur-sneiddar.jpg"]},{slug:"mondlur-afhyddar",brand:"hberg",name:{is:"Möndlur afhýddar",en:"Möndlur afhýddar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: MÖNDLUR",nutrition:"Möndlur afhýddar Næringargildi í 100 g: Orka 2703kJ/653 kkal Fita 52 g -Þar af mettuð 3,95 g Kolvetni 18,7 g -Þar af sykurtegundir 4,6 g Trefjar 9,9 g Prótein 21,4 g Salt 0,05 g",nutritionRows:[["Orka","2703kJ/653 kkal"],["Fita","52 g"],["-Þar af mettuð","3,95 g"],["Kolvetni","18,7 g"],["-Þar af sykurtegundir","4,6 g"],["Trefjar","9,9 g"],["Prótein","21,4 g"],["Salt","0,05 g"]],tags:["hnetur"],tint:"#B58560",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlur-afhyddar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mondlur-afhyddar-2.jpg"]},{slug:"mondlur-hakkadar",brand:"hberg",name:{is:"Möndlur hakkaðar",en:"Möndlur hakkaðar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: MÖNDLUR",nutrition:"Möndlur hakkaðar Næringargildi í 100 g: Orka 2703kJ/653 kkal Fita 52 g -Þar af mettuð 3,95 g Kolvetni 18,7 g -Þar af sykurtegundir 4,6 g Trefjar 9,9 g Prótein 21,4 g Salt 0,05 g",nutritionRows:[["Orka","2703kJ/653 kkal"],["Fita","52 g"],["-Þar af mettuð","3,95 g"],["Kolvetni","18,7 g"],["-Þar af sykurtegundir","4,6 g"],["Trefjar","9,9 g"],["Prótein","21,4 g"],["Salt","0,05 g"]],tags:["hnetur"],tint:"#B4845D",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlur-hakkadar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mondlur-hakkadar-2.jpg"]},{slug:"kokosolia-lifraen-og-lyktarlaus",brand:"hberg",name:{is:"Kókosolía, lífræn og lyktarlaus",en:"Kókosolía, lífræn og lyktarlaus"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Lífræn kókoshnetuolía",nutrition:"Kókosolía, lífræn og lyktarlaus 500mL Næringargildi í 100 g: Orka 3700 kJ/900 kkal Fita 100  g -Þar af mettuð 91 g Kolvetni 0 g -Þar af sykurtegundir 0 g Trefjar 0 g Prótein 0 g Salt 0,01 g",nutritionRows:[["Orka","3700 kJ/900 kkal"],["Fita","100  g"],["-Þar af mettuð","91 g"],["Kolvetni","0 g"],["-Þar af sykurtegundir","0 g"],["Trefjar","0 g"],["Prótein","0 g"],["Salt","0,01 g"]],tags:["bakstur"],tint:"#D3BF9B",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kokosolia-lifraen-og-lyktarlaus/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kokosolia-lifraen-lyktarlaus.jpg"]},{slug:"kokosmjol",brand:"hberg",name:{is:"Kókosmjöl",en:"Kókosmjöl"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Kókosmjöl",nutrition:"Kókosmjöl Næringargildi í 100 g: Orka 2451 kJ/595 kkal Fita 56  g -Þar af mettuð 53,3 g Kolvetni 8 g -Þar af sykurtegundir 6,3 g Trefjar 17 g Prótein 6,3 g Salt 0,07 g",nutritionRows:[["Orka","2451 kJ/595 kkal"],["Fita","56  g"],["-Þar af mettuð","53,3 g"],["Kolvetni","8 g"],["-Þar af sykurtegundir","6,3 g"],["Trefjar","17 g"],["Prótein","6,3 g"],["Salt","0,07 g"]],tags:["bakstur"],tint:"#D4C0A2",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kokosmjol/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kokosmjol-2-of-2.jpg"]},{slug:"kokosflogur-2",brand:"hberg",name:{is:"Kókosflögur",en:"Kókosflögur"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Kókosflögur",nutrition:"Kókosflögur Næringargildi í 100 g: Orka 3055 kJ/740 kkal Fita 66  g -Þar af mettuð 56 g Kolvetni 7 g -Þar af sykurtegundir 7 g Trefjar 15 g Prótein 7 g Salt 0,02 g",nutritionRows:[["Orka","3055 kJ/740 kkal"],["Fita","66  g"],["-Þar af mettuð","56 g"],["Kolvetni","7 g"],["-Þar af sykurtegundir","7 g"],["Trefjar","15 g"],["Prótein","7 g"],["Salt","0,02 g"]],tags:["bakstur"],tint:"#D2BC9B",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kokosflogur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kokosflogur-2.jpg"]},{slug:"kinoafrae",brand:"hberg",name:{is:"Kínóafræ",en:"Kínóafræ"},desc:{is:"Fræ",en:"Fræ"},ingredients:"Innihald: Kínóafræ",nutrition:"Kínóafræ Næringargildi í 100 g: Orka 1698 kJ/402 kkal Fita 6  g -Þar af mettuð 0 g Kolvetni 70 g -Þar af sykurtegundir 0 g Trefjar 6 g Prótein 14 g Salt 0 g",nutritionRows:[["Orka","1698 kJ/402 kkal"],["Fita","6  g"],["-Þar af mettuð","0 g"],["Kolvetni","70 g"],["-Þar af sykurtegundir","0 g"],["Trefjar","6 g"],["Prótein","14 g"],["Salt","0 g"]],tags:["frae"],tint:"#A0AE80",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kinoafrae/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kinofrae-2.jpg"]},{slug:"kajuhnetur-heilarristadar",brand:"hberg",name:{is:"Kasjúhnetur heilar & ristaðar",en:"Kasjúhnetur heilar & ristaðar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: KASJÚHNETUR",nutrition:"Kasjúhnetur heilar og ristaðar Næringargildi í 100 g: Orka 2416 kJ/582 kkal Fita 44  g -Þar af mettuð 7,8 g Kolvetni 27 g -Þar af sykurtegundir 5,9 g Trefjar 3,3 g Prótein 18 g Salt 0,03 g",nutritionRows:[["Orka","2416 kJ/582 kkal"],["Fita","44  g"],["-Þar af mettuð","7,8 g"],["Kolvetni","27 g"],["-Þar af sykurtegundir","5,9 g"],["Trefjar","3,3 g"],["Prótein","18 g"],["Salt","0,03 g"]],tags:["hnetur"],tint:"#B3845E",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kajuhnetur-heilarristadar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kasjuhnetur-250gr-2-of-2.jpg","https://hberg.is/wp-content/uploads/2020/03/kasjuhnetur-250gr-1-of-2.jpg"]},{slug:"hampfrae-3",brand:"hberg",name:{is:"Hampfræ",en:"Hampfræ"},desc:{is:"Fræ",en:"Fræ"},ingredients:"Innihald: Hampfræ",nutrition:"Hampfræ Næringargildi í 100 g: Orka 2455kJ/592 kkal Fita 48  g -Þar af mettuð 5,2 g Kolvetni 3,1 g -Þar af sykurtegundir 2,6 g Trefjar 6,0 g Prótein 34 g Salt 0,03 g",nutritionRows:[["Orka","2455kJ/592 kkal"],["Fita","48  g"],["-Þar af mettuð","5,2 g"],["Kolvetni","3,1 g"],["-Þar af sykurtegundir","2,6 g"],["Trefjar","6,0 g"],["Prótein","34 g"],["Salt","0,03 g"]],tags:["frae"],tint:"#A2AF80",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/hampfrae-3/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/hampfrae-2.jpg"]},{slug:"heslihnetur-hakkadar-2",brand:"hberg",name:{is:"Heslihnetur hakkaðar",en:"Heslihnetur hakkaðar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: HESLIHNETUR",nutrition:"Heslihnetur hakkaðar og ristaðar Næringargildi í 100 g: Orka 2939 kJ/711 kkal Fita 62,4 g -Þar af mettuð 4,5 g Kolvetni 17,6 g -Þar af sykurtegundir 4,9 g Trefjar 9,4 g Prótein 15 g Salt 0 g",nutritionRows:[["Orka","2939 kJ/711 kkal"],["Fita","62,4 g"],["-Þar af mettuð","4,5 g"],["Kolvetni","17,6 g"],["-Þar af sykurtegundir","4,9 g"],["Trefjar","9,4 g"],["Prótein","15 g"],["Salt","0 g"]],tags:["hnetur"],tint:"#B3845E",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/heslihnetur-hakkadar-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/heslihnetur-2.jpg","https://hberg.is/wp-content/uploads/2020/03/heslihnetur-1.jpg"]},{slug:"heslihnetur-heilar",brand:"hberg",name:{is:"Heslihnetur heilar",en:"Heslihnetur heilar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: HESLIHNETUR",nutrition:"Næringargildi í 100 g: Orka 2700 kJ/654 kkal Fita 61 g -Þar af mettuð 4,5 g Kolvetni 7,0 g -Þar af sykurtegundir 4,3 g Trefjar 9,7 g Prótein 15 g Salt 0 g",nutritionRows:[["Orka","2700 kJ/654 kkal"],["Fita","61 g"],["-Þar af mettuð","4,5 g"],["Kolvetni","7,0 g"],["-Þar af sykurtegundir","4,3 g"],["Trefjar","9,7 g"],["Prótein","15 g"],["Salt","0 g"]],tags:["hnetur"],tint:"#B6875B",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/heslihnetur-heilar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/Heslihnetur-100gr-1-of-1.jpg","https://hberg.is/wp-content/uploads/2020/03/Heslihnetur-100gr-2.jpg"]},{slug:"avaxta-og-hnetublanda-2",brand:"hberg",name:{is:"Ávaxta & hnetublanda",en:"Ávaxta & hnetublanda"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Súkkulaði (sykur, MJÓLKURDUFT , kakómassi, kakósmjör, MYSUDUFT , ýruefni (E322 úr SOJA ), bragðefni), rúsínur, ananas, bananar, JARÐHNETUR , KASJÚHNETUR, MÖNDLUR , glúkósasýróp, kókosolía, JÓGÚRTDUFT , jógúrtbragðefni, húðunarefni (E414, E904), pálmaolía, sólblómaolía, rotvarnarefni ( BRENNISTEINSDÍOXÍÐ )",nutrition:"Ávaxta & hnetublanda Næringargildi í 100 g: Orka 2035 kJ/486 kkal Fita 24 g -Þar af mettuð 12 g Kolvetni 60 g -Þar af sykurtegundir 55 g Prótein 6,4 g Salt 0,29 g",nutritionRows:[["Orka","2035 kJ/486 kkal"],["Fita","24 g"],["-Þar af mettuð","12 g"],["Kolvetni","60 g"],["-Þar af sykurtegundir","55 g"],["Prótein","6,4 g"],["Salt","0,29 g"],["",""]],tags:["snakk"],tint:"#CB9483",allergens:["nuts","peanut","milk","soy","sulphites"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/avaxta-og-hnetublanda-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/avaxta-og-hnetublanda-2.jpg","https://hberg.is/wp-content/uploads/2020/03/avaxta-og-hnetublanda.jpg"]},{slug:"hampfrae-2",brand:"hberg",name:{is:"Stórar rúsínur",en:"Stórar rúsínur"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Rúsínur, sólblómaolía (<0,75%)",nutrition:"Stórar Rúsínur Næringargildi í 100 g: Orka 1377 kJ/324 kkal Fita 0 g -Þar af mettuð 0 g Kolvetni 78 g -Þar af sykurtegundir 61,2 g Trefjar 1 g Prótein 2,5 g Salt 0,06 g",nutritionRows:[["Orka","1377 kJ/324 kkal"],["Fita","0 g"],["-Þar af mettuð","0 g"],["Kolvetni","78 g"],["-Þar af sykurtegundir","61,2 g"],["Trefjar","1 g"],["Prótein","2,5 g"],["Salt","0,06 g"]],tags:["avextir"],tint:"#DF9058",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/hampfrae-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/Rúsínur-stórar.jpg"]},{slug:"granola-an-vidbaetts-sykurs-med-frostthurrkudum-jardarberjum",brand:"hberg",name:{is:"Granóla án viðbætts sykurs , með frostþurrkuðum jarðarberjum",en:"Granóla án viðbætts sykurs , með frostþurrkuðum jarðarberjum"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: HAFRAFLÖGUR (51%), trefjar úr síkóríurót (22,3%), HVEITI , repjuolía, stökkt maís- HVEITI (kurlaður maís, HVEITI , kurlað hveiti, maísmjöl) pressað maís- HVEITI (maís, HVEITI , salt) kókosmjöl (2%), frostþurrkuð jarðaber (1,5%), náttúruleg bragðefni, þráavarnarefni (E304, E306)",nutrition:"Granóla án viðbætts sykurs , með frostþurrkuðum jarðarberjum Næringargildi í 100 g: Orka 1770kJ/422 kkal Fita 11 g -Þar af mettuð 1,9 g Kolvetni 67 g -Þar af sykurtegundir 6,6 g Trefjar 4,8 g Prótein 11 g Salt 0,02 g",nutritionRows:[["Orka","1770kJ/422 kkal"],["Fita","11 g"],["-Þar af mettuð","1,9 g"],["Kolvetni","67 g"],["-Þar af sykurtegundir","6,6 g"],["Trefjar","4,8 g"],["Prótein","11 g"],["Salt","0,02 g"]],tags:["snakk"],tint:"#CC9684",allergens:["gluten"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/granola-an-vidbaetts-sykurs-med-frostthurrkudum-jardarberjum/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/sykurlaust-granola-jardaber-2.jpg","https://hberg.is/wp-content/uploads/2020/03/sykurlaust-granola-jardaber-1.jpg"]},{slug:"goji-ber-2",brand:"hberg",name:{is:"Goji ber",en:"Goji ber"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Goji ber",nutrition:"Næringargildi í 100 g: Orka 1258kJ/298 kkal Fita 1,5 g -Þar af mettuð 0,3 g Kolvetni 55 g -Þar af sykurtegundir 50 g Trefjar 10 g Prótein 11 g Salt 0,78 g",nutritionRows:[["Orka","1258kJ/298 kkal"],["Fita","1,5 g"],["-Þar af mettuð","0,3 g"],["Kolvetni","55 g"],["-Þar af sykurtegundir","50 g"],["Trefjar","10 g"],["Prótein","11 g"],["Salt","0,78 g"]],tags:["avextir"],tint:"#E3945D",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/goji-ber-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/goji-ber-2.jpg"]},{slug:"furuhnetur-2",brand:"hberg",name:{is:"Furuhnetur",en:"Furuhnetur"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: Furuhnetur",nutrition:"Furuhnetur Næringargildi í 100 g: Orka 3016 kJ/730 kkal Fita 68,4 g -Þar af mettuð 4,9 g Kolvetni 13,1 g -Þar af sykurtegundir 3,6 g Trefjar 3,7 g Prótein 13,7 g Salt 0,01 g",nutritionRows:[["Orka","3016 kJ/730 kkal"],["Fita","68,4 g"],["-Þar af mettuð","4,9 g"],["Kolvetni","13,1 g"],["-Þar af sykurtegundir","3,6 g"],["Trefjar","3,7 g"],["Prótein","13,7 g"],["Salt","0,01 g"]],tags:["hnetur"],tint:"#B4845C",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/furuhnetur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/furuhnetur-2.jpg"]},{slug:"fikjur-2",brand:"hberg",name:{is:"Fíkjur",en:"Fíkjur"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Fíkjur, hrísmjöl (<3%)",nutrition:"Fíkjur Næringargildi í 100 g: Orka 1088 kJ/257 kkal Fita 0,93 g -Þar af mettuð 0,14 g Kolvetni 54,1 g -Þar af sykurtegundir 47,9 g Trefjar 9,8 g Prótein 3,3 g Salt 0,03 g",nutritionRows:[["Orka","1088 kJ/257 kkal"],["Fita","0,93 g"],["-Þar af mettuð","0,14 g"],["Kolvetni","54,1 g"],["-Þar af sykurtegundir","47,9 g"],["Trefjar","9,8 g"],["Prótein","3,3 g"],["Salt","0,03 g"]],tags:["avextir"],tint:"#DC8E5A",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/fikjur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/fikjur-2.jpg"]},{slug:"dodlur-2",brand:"hberg",name:{is:"Döðlur",en:"Döðlur"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Döðlur, sólblómaolía (<0,2%)",nutrition:"Döðlu heilar og steinlausar Næringargildi í 100 g: Orka 1252 kJ/295 kkal Fita 0,2 g -Þar af mettuð 0,1 g Kolvetni 68 g -Þar af sykurtegundir 66 g Trefjar 4 g Prótein 3,3 g Salt 0,03 g",nutritionRows:[["Orka","1252 kJ/295 kkal"],["Fita","0,2 g"],["-Þar af mettuð","0,1 g"],["Kolvetni","68 g"],["-Þar af sykurtegundir","66 g"],["Trefjar","4 g"],["Prótein","3,3 g"],["Salt","0,03 g"]],tags:["avextir"],tint:"#DF905A",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/dodlur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/dodlur-2.jpg"]},{slug:"dodlur-saxadar-2",brand:"hberg",name:{is:"Döðlur saxaðar",en:"Döðlur saxaðar"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Döðlur, hrísmjöl (<3%)",nutrition:"Döðlu saxaðar Næringargildi í 100 g: Orka 1320 kJ/311 kkal Fita 0,2 g -Þar af mettuð 0,1 g Kolvetni 72 g -Þar af sykurtegundir 68 g Trefjar 4 g Prótein 3,3 g Salt 0,03 g",nutritionRows:[["Orka","1320 kJ/311 kkal"],["Fita","0,2 g"],["-Þar af mettuð","0,1 g"],["Kolvetni","72 g"],["-Þar af sykurtegundir","68 g"],["Trefjar","4 g"],["Prótein","3,3 g"],["Salt","0,03 g"]],tags:["avextir"],tint:"#DF8E57",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/dodlur-saxadar-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/dodlur-saxadar-2.jpg"]},{slug:"dodlusirop-2",brand:"hberg",name:{is:"Döðlusíróp",en:"Döðlusíróp"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Döðlur (100%)",nutrition:"Döðlusíróp Næringargildi í 100 g: Orka 1371 kJ/324 kkal Fita 0,1 g -Þar af mettuð 0 g Kolvetni 75 g -Þar af sykurtegundir 62 g Trefjar 7,8 g Prótein 2,0 g Salt 0,11 g",nutritionRows:[["Orka","1371 kJ/324 kkal"],["Fita","0,1 g"],["-Þar af mettuð","0 g"],["Kolvetni","75 g"],["-Þar af sykurtegundir","62 g"],["Trefjar","7,8 g"],["Prótein","2,0 g"],["Salt","0,11 g"]],tags:["bakstur"],tint:"#D5C29C",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/dodlusirop-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/dodlusyrop-1.jpg"]},{slug:"chilli-hriskokur",brand:"hberg",name:{is:"Chilli hrískökur",en:"Chilli hrískökur"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Hrísmjöl, pálmaolía (vottuð), sykur, tapíókasterkja, maltódextrín, salt, litarefni (E160c, E150c), paprikuþykkni, chili, sojasósa ( SOJABAUNIR , HVEITI , vatn, salt)",nutrition:"Apríkósur Næringargildi í 100 g: Orka 2297kJ/550 kkal Fita 33,3 g -Þar af mettuð 16,3 g Kolvetni 58 g -Þar af sykurtegundir 11,1 g Trefjar 1,5 g Prótein 3,9 g Salt 2,1 g",nutritionRows:[["Orka","2297kJ/550 kkal"],["Fita","33,3 g"],["-Þar af mettuð","16,3 g"],["Kolvetni","58 g"],["-Þar af sykurtegundir","11,1 g"],["Trefjar","1,5 g"],["Prótein","3,9 g"],["Salt","2,1 g"]],tags:["snakk"],tint:"#CB9582",allergens:["gluten","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/chilli-hriskokur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/chili-hriskokur.jpg"]},{slug:"aprikosur-2",brand:"hberg",name:{is:"Apríkósur",en:"Apríkósur"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Apríkósur, rotvarnarefni (<0,2%)( BRENNISTEINSDÍOXÍÐ )",nutrition:"Apríkósur Næringargildi í 100 g: Orka 1076 kJ/254 kkal Fita 0,51 g -Þar af mettuð 0,02 g Kolvetni 55 g -Þar af sykurtegundir 53 g Trefjar 7,3 g Prótein 3,4 g Salt 0,03 g",nutritionRows:[["Orka","1076 kJ/254 kkal"],["Fita","0,51 g"],["-Þar af mettuð","0,02 g"],["Kolvetni","55 g"],["-Þar af sykurtegundir","53 g"],["Trefjar","7,3 g"],["Prótein","3,4 g"],["Salt","0,03 g"]],tags:["avextir"],tint:"#DC8C5A",allergens:["sulphites"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/aprikosur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/aprikosur-2.jpg"]},{slug:"husk",brand:"hberg",name:{is:"Husk",en:"Husk"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Psyllium husk trefjar",nutrition:"Huskið er einstkalega trefjaríkt og gott fyrir meltinguna Næringargildi í 100 g: Orka 776kJ/194 kkal Fita 2 g -Þar af mettuð 0,2 g Kolvetni 2,5 g -Þar af sykurtegundir 0 g Trefjar 87,5 g Prótein 1,4 g Salt 0,33 g",nutritionRows:[["Orka","776kJ/194 kkal"],["Fita","2 g"],["-Þar af mettuð","0,2 g"],["Kolvetni","2,5 g"],["-Þar af sykurtegundir","0 g"],["Trefjar","87,5 g"],["Prótein","1,4 g"],["Salt","0,33 g"]],tags:["bakstur"],tint:"#D3BF9D",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/husk/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/husk-trefjar-2.jpg","https://hberg.is/wp-content/uploads/2020/03/husk-trefjar.jpg"]},{slug:"kokospalmasykur-2",brand:"hberg",name:{is:"Kókospálmasykur",en:"Kókospálmasykur"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Kókospálmasykur",nutrition:"Kókospálmasykur Næringargildi í 100 g: Orka 1634 kJ/385 kkal Fita 0 g -Þar af mettuð 0 g Kolvetni 94 g -Þar af sykurtegundir 83 g Trefjar 2,1 g Prótein 1,1 g Salt 0,17g",nutritionRows:[["Orka","1634 kJ/385 kkal"],["Fita","0 g"],["-Þar af mettuð","0 g"],["Kolvetni","94 g"],["-Þar af sykurtegundir","83 g"],["Trefjar","2,1 g"],["Prótein","1,1 g"],["Salt","0,17g"]],tags:["bakstur"],tint:"#D4C19E",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kokospalmasykur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kokos-palmasykur-2.jpg"]},{slug:"chia-frae-2",brand:"hberg",name:{is:"Chia fræ",en:"Chia fræ"},desc:{is:"Fræ",en:"Fræ"},ingredients:"Innihald: Chia fræ",nutrition:"Chia fræ Næringargildi í 100 g: Orka 2156 kJ/519 kkal Fita 28,6 g -Þar af mettuð 3,2 g Kolvetni 4,4 g -Þar af sykurtegundir 0 g Trefjar 37,7 g Prótein 15,6 g Salt 0,05 g",nutritionRows:[["Orka","2156 kJ/519 kkal"],["Fita","28,6 g"],["-Þar af mettuð","3,2 g"],["Kolvetni","4,4 g"],["-Þar af sykurtegundir","0 g"],["Trefjar","37,7 g"],["Prótein","15,6 g"],["Salt","0,05 g"]],tags:["frae"],tint:"#A4B281",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/chia-frae-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/chia-frae-2.jpg","https://hberg.is/wp-content/uploads/2020/03/chia-frae.jpg"]},{slug:"mondlumjol-2",brand:"hberg",name:{is:"Möndlumjöl",en:"Möndlumjöl"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: MÖNDLUMJÖL",nutrition:"Möndlumjölið er tilvalið í bakstur. Næringargildi í 100 g: Orka 2689kJ/650 kkal Fita 55 g -Þar af mettuð 4,3 g Kolvetni 7,2 g -Þar af sykurtegundir 3,8 g Trefjar 10 g Prótein 26,7 g Salt 0,07 g",nutritionRows:[["Orka","2689kJ/650 kkal"],["Fita","55 g"],["-Þar af mettuð","4,3 g"],["Kolvetni","7,2 g"],["-Þar af sykurtegundir","3,8 g"],["Trefjar","10 g"],["Prótein","26,7 g"],["Salt","0,07 g"]],tags:["bakstur"],tint:"#D3BF9E",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlumjol-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mondlumjol-2.jpg"]},{slug:"mexikano-snakk-2",brand:"hberg",name:{is:"Mexikano snakk",en:"Mexikano snakk"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Maísmjöl, maíssterkja, ostakrydd ( MJÓLK ), salt, tómatduft, sykur, chiliduft, ger, laukduft, litarefni (E160c), kekkjavarnarefni (E551)), pálmaolía (vottuð), salt",nutrition:"Bragðmikið og brakandi stökkt snakk, tilvalið til fyrir spilakvöldið, saumaklúbbinn eða jafvel á nammibarinn í veislunni. Næringargildi í 100 g: Orka 1562kJ/369 kkal Fita 5,3 g -Þar af mettuð 1,9 g Kolvetni 73,4 g -Þar af sykurtegundir 6,9 g Trefjar 2,9 g Prótein 5,6 g Salt 0,69 g",nutritionRows:[["Orka","1562kJ/369 kkal"],["Fita","5,3 g"],["-Þar af mettuð","1,9 g"],["Kolvetni","73,4 g"],["-Þar af sykurtegundir","6,9 g"],["Trefjar","2,9 g"],["Prótein","5,6 g"],["Salt","0,69 g"]],tags:["snakk"],tint:"#CB9484",allergens:["milk"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mexikano-snakk-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mexico-snakk-2.jpg"]},{slug:"solblomafrae-2",brand:"hberg",name:{is:"Sólblómafræ",en:"Sólblómafræ"},desc:{is:"Fræ",en:"Fræ"},ingredients:"Innihald: Sólblómafræ",nutrition:"Sólblómafræ eru einföld í bragi en einstaklega rík af E og B vítamínum, próteinrík og innihalda góðar olíur. Mikið notuð í brauðgerð og út á salöt, og ekki er verra hvað þau eru ódýr í innkaupum. Næringargildi í 100 g: Orka 2639kJ/637kkal Fita 51 g -Þar af mettuð 6,4 g Kolvetni 20 g -Þar af sykurtegundir 2,0 g Trefjar 9 g Prótein 20 g Salt 0,004 g",nutritionRows:[["Orka","2639kJ/637kkal"],["Fita","51 g"],["-Þar af mettuð","6,4 g"],["Kolvetni","20 g"],["-Þar af sykurtegundir","2,0 g"],["Trefjar","9 g"],["Prótein","20 g"],["Salt","0,004 g"]],tags:["frae"],tint:"#A1AF7F",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/solblomafrae-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/solblomafrae-2.jpg"]},{slug:"graskersfrae-2",brand:"hberg",name:{is:"Graskersfræ",en:"Graskersfræ"},desc:{is:"Fræ",en:"Fræ"},ingredients:"Innihald: Graskersfræ",nutrition:"Graskerafræ eru bragðmikil fræ með keim af hnetu og sætu. Þau eru góð uppspretta næringa- og steinefna, próteinrík, veita fosfór, kalíum, magnesíum, járn og zink. Graskersfræ hafa verið vinsæl í ýmsar uppskriftir, svo sem í salöt og brauðgerð. Næringargildi í 100 g: Orka 2300kJ/550 kkal Fita 34,1 g -Þar af mettuð 0,5 g Kolvetni 5,0 g -Þar af sykurtegundir 1,0 g Trefjar 7,8 g Prótein 32 g Salt 0,02 g",nutritionRows:[["Orka","2300kJ/550 kkal"],["Fita","34,1 g"],["-Þar af mettuð","0,5 g"],["Kolvetni","5,0 g"],["-Þar af sykurtegundir","1,0 g"],["Trefjar","7,8 g"],["Prótein","32 g"],["Salt","0,02 g"]],tags:["frae"],tint:"#A3B17F",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/graskersfrae-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/graskersfrae-2.jpg"]}],Yr=[{id:"nuts",is:"Hnetur",en:"Hnetur"},{id:"peanut",is:"Jarðhnetur",en:"Jarðhnetur"},{id:"milk",is:"Mjólk",en:"Mjólk"},{id:"gluten",is:"Glúten",en:"Glúten"},{id:"soy",is:"Soja",en:"Soja"},{id:"sesame",is:"Sesam",en:"Sesam"},{id:"sulphites",is:"Súlfít",en:"Súlfít"},{id:"mustard",is:"Sinnep",en:"Sinnep"}],nr={name:"H-Berg ehf.",email:"hberg@hberg.is",emailOrders:"pantanir@hberg.is",phone:"565 6500",phoneHref:"tel:+3545656500",address:"Grandatröð 12",postcode:"220 Hafnarfjörður",mapHref:"https://www.google.com/maps/search/?api=1&query=Grandatröð+12+Hafnarfjörður"},Qm=[{name:"10-11",href:"https://www.10-11.is",note:{is:"",en:""}},{name:"Albína",href:"https://hberg.is/soluadilar/",note:{is:"Aðalstræti 91, 450 Patreksfjörður",en:"Aðalstræti 91, 450 Patreksfjörður"}},{name:"Bónus",href:"https://www.bonus.is",note:{is:"",en:""}},{name:"Fjarðarkaup",href:"https://www.fjardarkaup.is",note:{is:"Hólshraun 1, 220 Hafnarfjörður",en:"Hólshraun 1, 220 Hafnarfjörður"}},{name:"Fjölval",href:"https://hberg.is/soluadilar/",note:{is:"Þórsgata 10, 450 Patreksfjörður",en:"Þórsgata 10, 450 Patreksfjörður"}},{name:"Hagkaup",href:"https://www.hagkaup.is",note:{is:"",en:""}},{name:"Hlíðarkaup",href:"https://hberg.is/soluadilar/",note:{is:"Akurhlíð 1, 550 Sauðárkróki",en:"Akurhlíð 1, 550 Sauðárkróki"}},{name:"Iceland",href:"https://www.iceland.is",note:{is:"",en:""}},{name:"Kaupfélag Skagfirðinga",href:"https://www.ks.is",note:{is:"Ártorgi 1, 550 Sauðárkrókur",en:"Ártorgi 1, 550 Sauðárkrókur"}},{name:"Kaupfélag Steingrímsfjarðar",href:"https://www.ksholm.is",note:{is:"Höfðatúni 4, 510 Hólmavík",en:"Höfðatúni 4, 510 Hólmavík"}},{name:"Kaupfélag Vestur Húnvetninga",href:"https://www.kvh.is",note:{is:"Strandgötu 1, 530 Hvammstanga",en:"Strandgötu 1, 530 Hvammstanga"}},{name:"Krónan",href:"https://www.kronan.is",note:{is:"",en:""}},{name:"Melabúðin",href:"https://hberg.is/soluadilar/",note:{is:"Hagamel 39, 107 Reykjavík",en:"Hagamel 39, 107 Reykjavík"}},{name:"N1",href:"https://www.n1.is",note:{is:"",en:""}},{name:"Nettó",href:"https://www.netto.is",note:{is:"",en:""}},{name:"Olís",href:"https://www.olis.is",note:{is:"",en:""}},{name:"Samkaup",href:"https://www.samkaup.is",note:{is:"",en:""}},{name:"Skeljungur",href:"https://www.skeljungur.is",note:{is:"",en:""}},{name:"Vöruval Vestmannaeyjum",href:"https://hberg.is/soluadilar/",note:{is:"Vesturvegur 8, 902 Vestmannaeyjar",en:"Vesturvegur 8, 902 Vestmannaeyjar"}}],We=o=>br.find(u=>u.slug===o),dr=(o,u="pack",s="m")=>`${En}hberg/p/${o}/${s==="s"?400:s==="m"?800:1200}.webp${gr}`,Fo=(o,u)=>`${En}hberg/p/${o}/${u}${gr}`;br.slice(0,6).map(o=>o.slug);const Nr={logadi:nr.name,heimili:`${nr.address}, ${nr.postcode}`,simi:nr.phone,simiHref:nr.phoneHref,netfang:nr.email,fjarofloun:nr.emailOrders,kort:nr.mapHref},Xm="H-Berg ehf. var stofnað í júlí 2007 af Halldóri Berg Jónssyni og fjölskyldu, með það markmið að bjóða persónulega þjónustu á vönduðum og góðum vörum.",Lo={heroLinur:["Hnetur og","þurrkaðir ávextir"],heroAr:"frá H-Berg."},Zm=[{nafn:"Halldór Berg Jónsson · Framkvæmdastjóri",texti:"halldor@hberg.is",href:"mailto:halldor@hberg.is"},{nafn:"Helgi Berg Halldórsson · Sölustjóri matvörusviðs",texti:"helgi@hberg.is",href:"mailto:helgi@hberg.is"},{nafn:"Elísabet Jónsdóttir · Gæðastjóri",texti:"elisabet@hberg.is",href:"mailto:elisabet@hberg.is"},{nafn:"Ingi Már Björgvinsson · Sölumaður",texti:nr.email,href:`mailto:${nr.email}`}],ep={"@context":"https://schema.org","@type":"Organization",name:"H-Berg ehf.",url:"https://hberg.is",telephone:nr.phone,email:nr.email,foundingDate:"2007",address:{"@type":"PostalAddress",streetAddress:nr.address,postalCode:"220",addressLocality:"Hafnarfjörður",addressCountry:"IS"}},rp=o=>({img:o,n:We(o).name.is,grunnur:We(o).tint}),tp=["hnetusmjor","orkustykki","chia-frae-2","aprikosur-2","mondlur","graskersfrae-2","kasjusmjor-2"].map(o=>({...rp(o),k:1})),np=[[{t:"Hnetur"},{img:"laus:p00",n:"Hnetur",grunnur:"#B98B60"},{t:"og fræ,"}],[{t:"þurrkaðir ávextir"},{img:"laus:p06",n:"Ávextir",grunnur:"#DE935E"}],[{t:"hnetusmjör"},{img:"hnetusmjor",n:"Smjör",grunnur:"#D7B45D"},{t:"og súkkulaði."}]],ip={Hnetur:["laus:p00","laus:p02","laus:p01","laus:p05"],Ávextir:["laus:p06","laus:p08","laus:p07"],Smjör:["hnetusmjor","kasjusmjor","kasjusmjor-2"]},ap=[{merki:"Hnetur",titill:"Hnetur",tegundir:["mondlur","kajuhnetur-heilarristadar","valhnetukjarnar","pistasiur"]},{merki:"Þurrkaðir ávextir",titill:"Ávextir",tegundir:["aprikosur-2","dodlur-2","fikjur-2","tronuber-2"]}].map(o=>({...o,tegundir:o.tegundir.map(u=>{const s=We(u);return{slug:u,n:s.name.is,d:s.weight??s.desc.is,lit:s.tint}})})),kc=[{s:"hnetur",t:"Hnetur",d:"Hnetur frá H-Berg.",img:"kajuhnetur-bortnar",g:"#B98B60",filter:o=>o.tags.includes("hnetur")},{s:"avextir",t:"Þurrkaðir ávextir",d:"Þurrkaðir ávextir frá H-Berg.",img:"aprikosur-2",g:"#DE935E",filter:o=>o.tags.includes("avextir")},{s:"frae",t:"Fræ",d:"Fræ frá H-Berg.",img:"kinoafrae",g:"#A8B77D",filter:o=>o.tags.includes("frae")},{s:"smjor",t:"Hnetusmjör",d:"Hnetusmjör frá H-Berg.",img:"hnetusmjor-1kg",g:"#D7B45D",filter:o=>o.tags.includes("smjor")},{s:"snakk",t:"Súkkulaði og snakk",d:"Súkkulaði og snakk frá H-Berg.",img:"karamelluklattar-med-jardhnetum-og-sjavarsalti",g:"#CF9B89",filter:o=>o.tags.includes("snakk")},{s:"bakstur",t:"Bökunarvörur",d:"Bökunarvörur frá H-Berg.",img:"linsubaunir-raudar",g:"#D6C7A4",filter:o=>o.tags.includes("bakstur")},{s:"annad",t:"Annað",d:"Annað frá H-Berg.",img:"fuglafodur",g:"#A7B9BD",filter:o=>o.tags.includes("annad")}],lp=[{h:"Upphafið",r:[{t:"H-Berg stofnað af Halldóri Berg og fjölskyldu",a:"2007"},{t:"Súkkulaðihjúpaðar gráfíkjur og döðlukúlur",a:"2009"}]},{h:"Framleiðslan",r:[{t:"Framleiðsla hefst fyrir alvöru",a:"2010"},{t:"Byggt við húsnæðið í Grandatröð",a:"2019"}]}],op=[{q:"Hvar fæst H-Berg?",a:"Söluaðilalistinn okkar telur 19 verslanir og verslanakeðjur. Úrval getur verið ólíkt milli verslana. Listinn segir ekki til um framboð einstakra vara."},{q:"Hvernig panta ég fyrir verslun?",a:"Pantanir fara á pantanir@hberg.is. Hér getur þú sett vörur og fjölda kassa á lista og opnað hann í tölvupóstinum þínum."},{q:"Hvar finn ég innihald og ofnæmisvalda?",a:"Opnaðu vöru til að sjá innihald og næringargildi af vef H-Berg. Ofnæmisupplýsingar eru staðfestar á umbúðum. Ónefnt efni þýðir ekki að vara sé laus við það."},{q:"Eru stærri pakkningar í boði?",a:"H-Berg pakkar í stærri einingar fyrir matvælafyrirtæki, matsölustaði og stóreldhús. Hafðu samband um stærðir og magn."},{q:"Hvar er H-Berg?",a:"Þú finnur okkur í Grandatröð 12, 220 Hafnarfirði."},{q:"Hvernig næ ég í ykkur?",a:"Hringdu í 565 6500 eða sendu tölvupóst á hberg@hberg.is."}];br.filter(o=>!o.tags.includes("annad")).map(o=>({img:o.slug,n:o.name.is,d:o.desc.is,g:o.tint,a:(o.allergens??[]).map(u=>{var s;return(s=Yr.find(h=>h.id===u))==null?void 0:s.is}).filter(u=>!!u)}));const Yd=[{nafn:"Verslun",stutt:"Pöntunarlisti",hlekkur:"#poki",ord:"Opna pöntunarlistann",nota:"Veldu vörur og fjölda kassa. Opnaðu listann í tölvupósti til pantanir@hberg.is."},{nafn:"Stóreldhús",stutt:"Stærri pakkningar",hlekkur:"#staerra",ord:"Sjá stærri pakkningar",nota:"H-Berg pakkar í stærri einingar fyrir matvælafyrirtæki, matsölustaði og stóreldhús."},{nafn:"Innihald og ofnæmi",stutt:"Upplýsingar um vörur",hlekkur:"#ofnaemi",ord:"Skoða ofnæmisvalda",nota:"Skoðaðu hvaða ofnæmisvaldar eru nefndir í innihaldslýsingum. Staðfest á umbúðum."},{nafn:"Söluaðilar",stutt:"Hvar fæst H-Berg",hlekkur:"#hvar",ord:"Sjá söluaðila",nota:"Skoðaðu söluaðila H-Berg. Ekki er tilgreint hvaða vörur fást á hverjum stað."}],Je=kc.map(o=>({s:o.s,t:o.t,items:br.filter(o.filter)})),Wd=["energyKj","energyKcal","fat","saturated","carbohydrate","sugars","fibre","protein","salt"],sp={fat:/^Fita$/i,saturated:/mettuð/i,carbohydrate:/^Kolvetni$/i,sugars:/sykurtegundir/i,fibre:/^Trefjar$/i,protein:/^Prótein$/i,salt:/^Salt$/i};function up(o){var c,v,z;const u=Object.fromEntries(Wd.map(j=>[j,null])),s=[],h=o.nutritionRows,p=((c=h.find(([j])=>/^Orka$/i.test(j)))==null?void 0:c[1])??((v=o.nutrition.match(/Orka\s+(.+?)(?=\s+Fita|$)/i))==null?void 0:v[1]);if(p)for(const j of p.split("/")){const M=j.trim().match(/^(\d+(?:[,.]\d+)?)\s*(kJ|kkal|kcal)$/i);M?u[/^kj$/i.test(M[2])?"energyKj":"energyKcal"]=Number(M[1].replace(",",".")):s.push(`Orka: ${j.trim()} (${p})`)}for(const[j,M]of Object.entries(sp)){const E=h.find(([H])=>M.test(H)),P={fat:"Fita",saturated:"Þar af mettuð",carbohydrate:"Kolvetni",sugars:"Þar af sykurtegundir",fibre:"Trefjar",protein:"Prótein",salt:"Salt"}[j],O=(E==null?void 0:E[1])??((z=o.nutrition.match(new RegExp(`${P}\\s+([^a-zþð]+g)`,"i")))==null?void 0:z[1]);if(O){const H=O.trim().match(/^(\d+(?:[,.]\d+)?)\s*g$/i);H?u[j]=Number(H[1].replace(",",".")):s.push(`${(E==null?void 0:E[0])??P}: ${O}`)}}const{energyKj:x,energyKcal:k}=u,w=x!==null&&k!==null?k===0?x===0?0:1:Math.abs(x-k*4.184)/(k*4.184):null;return{values:u,missing:Wd.filter(j=>u[j]===null),unparseable:s,noNutrition:!o.nutrition.trim()&&!h.length,energyDifference:w,inconsistent:w!==null&&w>.05}}const Ao=Object.fromEntries(br.map(o=>[o.slug,up(o).values])),Yt=[{key:"energyKj",title:"Orka"},{key:"fat",title:"Fita"},{key:"saturated",title:"Mettuð"},{key:"carbohydrate",title:"Kolvetni"},{key:"sugars",title:"Sykur"},{key:"fibre",title:"Trefjar"},{key:"protein",title:"Prótein"},{key:"salt",title:"Salt"}],yc=o=>{var u;return((u=Yt.find(s=>s.key===o))==null?void 0:u.key)??"energyKj"},zo=o=>o===null?"Vantar":String(Math.round(o*1e3)/1e3).replace(".",",");function Sn(o,u){const s=Ao[o];return u==="energyKj"?`${s.energyKj===null?"Vantar":`${zo(s.energyKj)} kJ`} / ${s.energyKcal===null?"Vantar":`${zo(s.energyKcal)} kkal`}`:s[u]===null?"Vantar":`${zo(s[u])} g`}function xc({target:o}){const u=S.useRef(null),[s,h]=S.useState({overflow:!1,start:!0,end:!1}),p=()=>{var k,w;return(w=(k=u.current)==null?void 0:k.parentElement)==null?void 0:w.querySelector(o)};S.useEffect(()=>{const k=p();if(!k)return;const w=()=>h({overflow:k.clientWidth>0&&k.scrollWidth>k.clientWidth+2,start:k.scrollLeft<2,end:k.scrollLeft+k.clientWidth>=k.scrollWidth-2}),c=new ResizeObserver(w);return c.observe(k),k.firstElementChild&&c.observe(k.firstElementChild),k.addEventListener("scroll",w,{passive:!0}),w(),()=>{c.disconnect(),k.removeEventListener("scroll",w)}},[o]);const x=k=>{const w=p();w==null||w.scrollBy({left:k*w.clientWidth*.65,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})};return i.jsxs("div",{ref:u,className:"hb-scrollArrows",hidden:!s.overflow,"aria-label":"Fleiri dálkar",children:[i.jsx("span",{children:"Fleiri dálkar"}),i.jsx("button",{type:"button","aria-label":"Fyrri dálkar",disabled:s.start,onClick:()=>x(-1),children:"←"}),i.jsx("button",{type:"button","aria-label":"Næstu dálkar",disabled:s.end,onClick:()=>x(1),children:"→"})]})}const ye={fast:150,ui:220,panel:320,reveal:480,out:"cubic-bezier(.16,1,.3,1)",emphasis:"cubic-bezier(.22,.8,.24,1)"},dp=`
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
`;function cp(o,u,s,h){const p=new URL(window.location.href);p.searchParams.set("naering","1"),p.searchParams.set("rada",o==="energyKj"?"orka":o);for(const[x,k]of[["att",u?"nidur":""],["lina",s],["leit",h]])k?p.searchParams.set(x,k):p.searchParams.delete(x);window.history.replaceState(null,"",p)}const Gd=o=>o.toLocaleLowerCase("is").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ð/g,"d").replace(/þ/g,"th").replace(/æ/g,"ae");function hp({sort:o="energyKj",line:u=""}){const s=S.useId(),[h,p]=S.useState(o),[x,k]=S.useState(()=>new URLSearchParams(window.location.search).get("att")==="nidur"),[w,c]=S.useState(u),[v,z]=S.useState(()=>new URLSearchParams(window.location.search).get("leit")??""),j=S.useRef(null),M=S.useRef(new Map),E=S.useRef([]),P=()=>{var R;E.current.forEach(A=>A.cancel()),E.current=[],M.current.clear(),(R=j.current)==null||R.querySelectorAll("[data-nutrition-row]").forEach(A=>{A.getClientRects().length&&M.current.set(A.dataset.nutritionRow,A.getBoundingClientRect().top)})},O=Je.filter(R=>!w||R.s===w).flatMap(R=>R.items.map(A=>({v:A,group:R.t}))).filter(({v:R,group:A})=>Gd(`${R.name.is} ${A}`).includes(Gd(v.trim()))).sort((R,A)=>{const G=Ao[R.v.slug][h],_=Ao[A.v.slug][h];return G===null||_===null?G===_?R.v.name.is.localeCompare(A.v.name.is,"is"):G===null?1:-1:(G-_)*(x?-1:1)||R.v.name.is.localeCompare(A.v.name.is,"is")});S.useEffect(()=>{cp(h,x,w,v)},[h,x,w,v]),S.useEffect(()=>()=>E.current.forEach(R=>R.cancel()),[]),S.useLayoutEffect(()=>{var R;window.matchMedia("(prefers-reduced-motion: reduce)").matches||(R=j.current)==null||R.querySelectorAll("[data-nutrition-row]").forEach(A=>{const G=M.current.get(A.dataset.nutritionRow);if(G===void 0||!A.getClientRects().length)return;const _=G-A.getBoundingClientRect().top;_&&E.current.push(A.animate([{transform:`translateY(${_}px)`},{transform:"translateY(0)"}],{duration:ye.panel,easing:ye.out}))}),M.current.clear()},[h,x,w,v]);const H=R=>{P(),p(R),k(h===R?!x:!1)},re=R=>i.jsxs("button",{className:"hb-nutProduct",onClick:()=>xe.open({k:"vara",slug:R.slug}),children:[i.jsx("span",{className:"hb-nutThumb",style:{background:R.tint},children:R.hasPack?i.jsx("img",{src:dr(R.slug,"pack","s"),alt:"",loading:"lazy",width:"36",height:"44"}):i.jsx("span",{"aria-hidden":"true",children:R.name.is[0]})}),i.jsx("span",{children:R.name.is.replace(/[-–—]/g," ")})]}),q=R=>i.jsx("span",{className:"hb-nutAdd",children:i.jsx(gi,{slug:R})});return i.jsxs("div",{className:"hb-nutrition",ref:j,children:[i.jsx("h2",{className:"hb-disp",children:"Næringargildi"}),i.jsx("p",{children:"Allar vörur H-Berg, gildi í 100 g."}),i.jsx("p",{className:"hb-allergenDisclaimer",children:"Lestu alltaf á umbúðirnar. Hringdu í 565 6500 ef þú ert í vafa."}),i.jsxs("div",{className:"hb-nutTools",children:[i.jsxs("label",{htmlFor:`${s}-search`,children:["Leita að vöru",i.jsx("input",{id:`${s}-search`,type:"search",value:v,onChange:R=>{P(),z(R.target.value)},placeholder:"Nafn vöru"})]}),i.jsxs("label",{className:"hb-nutSort",htmlFor:`${s}-sort`,children:["Raða eftir",i.jsx("select",{id:`${s}-sort`,value:`${h}:${x?"desc":"asc"}`,onChange:R=>{P();const[A,G]=R.target.value.split(":");p(yc(A)),k(G==="desc")},children:Yt.flatMap(R=>[i.jsxs("option",{value:`${R.key}:asc`,children:[R.title," ↑"]},`${R.key}:asc`),i.jsxs("option",{value:`${R.key}:desc`,children:[R.title," ↓"]},`${R.key}:desc`)])})]})]}),i.jsx("div",{className:"hb-nutChips",role:"group","aria-label":"Vörulínur",children:[{s:"",t:"Allar vörur"},...Je].map(R=>i.jsx("button",{"aria-pressed":w===R.s,onClick:()=>{P(),c(R.s)},children:R.t.replace(/[-–—]/g," ")},R.s))}),i.jsxs("p",{role:"status",children:[O.length," vörur"]}),!O.length&&i.jsx("p",{children:"Engar vörur fundust. Prófaðu annað leitarorð eða aðra vörulínu."}),i.jsx(xc,{target:".hb-nutTable"}),i.jsx("div",{className:"hb-nutTable",children:i.jsxs("table",{children:[i.jsx("caption",{className:"hb-orderSr",children:"Næringargildi allra vara í 100 g. Orka í kJ og kkal, önnur gildi í grömmum."}),i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{scope:"col",children:"Vara"}),Yt.map(R=>i.jsx("th",{scope:"col",className:h===R.key?"sorted":"","aria-sort":h===R.key?x?"descending":"ascending":"none",children:i.jsxs("button",{onClick:()=>H(R.key),children:[R.title,i.jsx("span",{"aria-hidden":"true",children:h===R.key?x?" ↓":" ↑":" ↕"})]})},R.key)),i.jsx("th",{scope:"col",children:i.jsx("span",{className:"hb-orderSr",children:"Pöntun"})})]})}),i.jsx("tbody",{children:O.map(({v:R})=>i.jsxs("tr",{"data-nutrition-row":`table:${R.slug}`,children:[i.jsx("th",{scope:"row",children:re(R)}),Yt.map(A=>i.jsx("td",{className:h===A.key?"sorted":"",children:A.key==="energyKj"?i.jsxs(i.Fragment,{children:[Sn(R.slug,A.key).split(" / ")[0],i.jsx("small",{children:Sn(R.slug,A.key).split(" / ")[1]})]}):Sn(R.slug,A.key)},A.key)),i.jsx("td",{children:q(R.slug)})]},R.slug))})]})}),i.jsx("div",{className:"hb-nutCards",children:O.map(({v:R})=>i.jsxs("article",{"data-nutrition-row":`card:${R.slug}`,children:[i.jsxs("div",{className:"hb-nutCardHead",children:[re(R),q(R.slug)]}),i.jsx("dl",{children:Yt.map(A=>i.jsxs("div",{className:h===A.key?"sorted":"",children:[i.jsx("dt",{children:A.title}),i.jsx("dd",{children:Sn(R.slug,A.key)})]},A.key))})]},R.slug))})]})}const mp=`
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
`,$o={"karamelluklattar-med-jardhnetum-og-sjavarsalti":{pack:[1200,1200],macros:[]},"kokosflogur-med-karamellu-sjavarsalti":{pack:[1200,1200],macros:[]},fuglafodur:{pack:[1200,1200],macros:[]},"linsubaunir-raudar":{pack:[1200,1200],macros:[]},"hnetusmjor-1kg":{pack:[1200,1200],macros:[]},orkustykki:{pack:[1200,1200],macros:[]},"strasaet-erytritol":{pack:[1200,1200],macros:[]},"karamellu-mondlur-med-sukkuladi-sjavarsalti":{pack:[1200,1200],macros:[]},"heslihnetur-med-sukkuladi-afrit":{pack:[1200,1200],macros:[]},"wasabi-hnetur":{pack:[1200,1200],macros:[]},"heslihnetur-med-irish-coffee-sukkuladi":{pack:[1200,1200],macros:[]},piparmondlur:{pack:[1200,1200],macros:[]},"kasjusmjor-2":{pack:[1200,1200],macros:[]},kasjusmjor:{pack:[1200,1200],macros:[]},hnetusmjor:{pack:[1200,1200],macros:[]},"granola-med-tronuberjum":{pack:[1200,1200],macros:[]},"kajuhnetur-bortnar":{pack:[1200,1200],macros:[]},"mondlur-med-dokku-sukkuladi":{pack:[1200,1200],macros:[]},"kasjuhentur-med-sukkuladi":{pack:[1200,1200],macros:[]},valhnetukjarnar:{pack:[1200,1200],macros:[]},"tronuber-2":{pack:[1200,1200],macros:[]},sveskjur:{pack:[1200,1200],macros:[]},salthnetur:{pack:[1200,1200],macros:[]},pistasiur:{pack:[1200,1200],macros:[]},"pekan-hnetur":{pack:[1200,1200],macros:[]},orkupokinn:{pack:[1200,1200],macros:[]},"party-pokinn":{pack:[1200,1200],macros:[]},mondlur:{pack:[1200,1200],macros:[]},"mondlur-sneiddar":{pack:[1200,1200],macros:[]},"mondlur-afhyddar":{pack:[1200,1200],macros:[]},"mondlur-hakkadar":{pack:[1200,1200],macros:[]},"kokosolia-lifraen-og-lyktarlaus":{pack:[1200,1200],macros:[]},kokosmjol:{pack:[1200,1200],macros:[]},"kokosflogur-2":{pack:[1200,1200],macros:[]},kinoafrae:{pack:[1200,1200],macros:[]},"kajuhnetur-heilarristadar":{pack:[1200,1200],macros:[]},"hampfrae-3":{pack:[1200,1200],macros:[]},"heslihnetur-hakkadar-2":{pack:[1200,1200],macros:[]},"heslihnetur-heilar":{pack:[1200,1200],macros:[]},"avaxta-og-hnetublanda-2":{pack:[1200,1200],macros:[]},"hampfrae-2":{pack:[1200,1200],macros:[]},"granola-an-vidbaetts-sykurs-med-frostthurrkudum-jardarberjum":{pack:[1200,1200],macros:[]},"goji-ber-2":{pack:[1200,1200],macros:[]},"furuhnetur-2":{pack:[1200,1200],macros:[]},"fikjur-2":{pack:[1200,1200],macros:[]},"dodlur-2":{pack:[1200,1200],macros:[]},"dodlur-saxadar-2":{pack:[1200,1200],macros:[]},"dodlusirop-2":{pack:[1200,1200],macros:[]},"chilli-hriskokur":{pack:[1200,1200],macros:[]},"aprikosur-2":{pack:[1200,1200],macros:[]},husk:{pack:[1200,1200],macros:[]},"kokospalmasykur-2":{pack:[1200,1200],macros:[]},"chia-frae-2":{pack:[1200,1200],macros:[]},"mondlumjol-2":{pack:[1200,1200],macros:[]},"mexikano-snakk-2":{pack:[1200,1200],macros:[]},"solblomafrae-2":{pack:[1200,1200],macros:[]},"graskersfrae-2":{pack:[1200,1200],macros:[]}},Ra=5,Mo=10,Qd=o=>{const u=new Date,s=p=>String(p).padStart(2,"0"),h=Array.from({length:4},()=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random()*32)]).join("");return`${o}-${String(u.getFullYear()).slice(2)}${s(u.getMonth()+1)}${s(u.getDate())}-${h}`},pp=o=>o>1048576?`${(o/1048576).toFixed(1)} MB`:`${Math.max(1,Math.round(o/1024))} kB`,fp=o=>/^\S+@\S+\.\S+$/.test(o.trim()),gp=`
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
`;function wc({cfg:o,lina:u,krefstLina:s=!1,formId:h,felaTakka:p=!1,onSkoda:x,onNytt:k,onEdit:w}){const c=S.useId(),v=S.useRef(null),z=`hb-eyd-${o.key}`,[j,M]=S.useState(()=>{let g={};try{g=JSON.parse(sessionStorage.getItem(z)||"{}")}catch{}return{...g,__ref:g.__ref||Qd(o.ref)}}),[E,P]=S.useState({}),[O,H]=S.useState({}),[re,q]=S.useState("fylla"),[R,A]=S.useState([]),[G,_]=S.useState(""),[X,L]=S.useState(!1);S.useEffect(()=>{try{sessionStorage.setItem(z,JSON.stringify(j))}catch{}},[j,z]);const Q=g=>j[g]??"",oe=(g,K)=>M($=>({...$,[g]:K})),le=g=>`${o.key}-${g}`,me=()=>{const g={};for(const K of o.fields)"required"in K&&K.required&&!Q(K.id).trim()&&(g[K.id]=`${K.label}: vantar`);return o.contactEither&&!Q("phone").trim()&&!Q("email").trim()&&(g.email="Netfang eða sími: vantar"),Q("email").trim()&&!fp(Q("email"))&&(g.email="Netfang: er ekki gilt"),s&&!(u!=null&&u.length)&&(g.__lina="Pöntunarlistinn er tómur, settu vörur á hann"),g};S.useEffect(()=>{P(g=>{const K=Object.keys(g);if(!K.length)return g;const $=me(),Z={};for(const de of K)$[de]&&(Z[de]=$[de]);return Object.keys(Z).length===K.length?g:Z})},[j,u]);const we=g=>{g.preventDefault();const K=me();if(P(K),H(Object.fromEntries(o.fields.map($=>[$.id,!0]))),Object.keys(K).length){const $=Object.keys(K).find(Z=>Z!=="__lina");$&&window.setTimeout(()=>{var Z;return(Z=document.getElementById(le($)))==null?void 0:Z.focus()},0);return}x&&x(be),q("yfirfara"),window.setTimeout(()=>{var $;return($=v.current)==null?void 0:$.scrollIntoView({block:"nearest",behavior:"auto"})},0)},be=S.useMemo(()=>{const g=[o.brief,`Tilvísun: ${j.__ref}`,""];for(const K of o.fields){if(K.kind==="files")continue;const $=(j[K.id]??"").trim();$&&g.push(`${K.label}: ${$}`)}return u!=null&&u.length&&(g.push("","Vörur og magn:"),u.forEach(K=>g.push(`  ${K.magn} x ${K.n}`))),R.length&&g.push("",`Skjöl (hengd við tölvupóstinn): ${R.map(K=>K.name).join(", ")}`),g.join(`
`)},[j,u,R,o]),Re=`${o.subject}${o.subjectField&&Q(o.subjectField).trim()?`: ${Q(o.subjectField).trim()}`:""} (${j.__ref})`,He=`mailto:${o.to}?subject=${encodeURIComponent(Re)}&body=${encodeURIComponent(be)}`,Ee=async()=>{var g;try{await navigator.clipboard.writeText(be),L(!0)}catch{const K=document.getElementById(`${c}-brief`);if(K){const $=document.createRange();$.selectNodeContents(K);const Z=window.getSelection();Z==null||Z.removeAllRanges(),Z==null||Z.addRange($),L(((g=document.execCommand)==null?void 0:g.call(document,"copy"))===!0)}}window.setTimeout(()=>L(!1),2400)},W=()=>{M({__ref:Qd(o.ref)}),A([]),P({}),H({}),q("fylla"),k==null||k()},D=g=>{const K=[...g.target.files??[]];g.target.value="";const $=[],Z=[];for(const pe of K){if(!/^image\/|^application\/pdf$/.test(pe.type)){Z.push(`${pe.name}: aðeins myndir og PDF skjöl.`);continue}if(pe.size>Mo*1048576){Z.push(`${pe.name}: stærri en ${Mo} MB.`);continue}$.push(pe)}const de=[...R,...$];de.length>Ra&&Z.push(`Mest ${Ra} skrár.`),A(de.slice(0,Ra)),_(Z.join(" "))},V=g=>O[g.id]?E[g.id]?"villa":Q(g.id).trim()?"gott":"":"";if(re==="yfirfara")return i.jsxs("div",{className:"hb-eyd",ref:v,children:[i.jsx("p",{className:"hb-eydT",children:"Beiðnin þín er tilbúin"}),i.jsx("p",{className:"hb-eydL",children:"Svona les starfsmaður beiðnina. Allt sem þarf til að svara er á einum stað."}),i.jsx("pre",{className:"hb-kvittun",id:`${c}-brief`,tabIndex:0,"aria-label":"Beiðnin í heild",children:be}),i.jsxs("div",{className:"hb-eydA",children:[i.jsx("a",{className:"hb-btn",href:He,children:"Opna í tölvupósti"}),i.jsx("button",{type:"button",className:"hb-btn sc",onClick:Ee,children:X?"Afritað":"Afrita texta"}),i.jsxs("button",{type:"button",className:"hb-nobg",onClick:()=>{q("fylla"),w==null||w()},children:["Breyta ",i.jsx("i",{children:"←"})]})]}),R.length>0&&i.jsxs("p",{className:"hb-smatt",children:["Skjöl fylgja ekki tölvupóstslinknum. Hengdu þau við þegar póstforritið opnast: ",R.map(g=>g.name).join(", "),"."]}),i.jsx("p",{className:"hb-smatt",children:"Ekkert er sent héðan. Þú opnar póstforritið þitt eða afritar textann og sendir þegar þú ert tilbúin/n."}),i.jsxs("button",{type:"button",className:"hb-nobg",onClick:W,children:["Byrja nýja beiðni ",i.jsx("i",{children:"→"})]})]});const b=Object.keys(E);return i.jsxs("form",{className:"hb-eyd",id:h,ref:v,onSubmit:we,noValidate:!0,children:[o.title&&i.jsx("p",{className:"hb-eydT",children:o.title}),o.lead&&i.jsx("p",{className:"hb-eydL",children:o.lead}),i.jsx("div",{className:"hb-reitir",children:o.fields.map(g=>{const K=`${g.kind==="textarea"||"heild"in g&&g.heild?"heild ":""}${V(g)}`.trim();return g.kind==="files"?i.jsxs("div",{className:"heild",style:{display:"grid",gap:".6rem"},children:[i.jsx("span",{className:"hb-smatt",style:{margin:0},children:g.label}),i.jsxs("label",{className:"hb-skra",children:[i.jsx("input",{type:"file",multiple:!0,accept:"image/*,application/pdf",onChange:D}),"Velja skrár"]}),i.jsxs("p",{className:"hb-smatt",children:["Allt að ",Ra," skrár, hver að ",Mo," MB, myndir eða PDF. Þú getur alltaf lýst þessu í orðum í staðinn."]}),G&&i.jsx("p",{className:"hb-villa",role:"status",children:G}),R.length>0&&i.jsx("ul",{className:"hb-skrar",children:R.map(($,Z)=>i.jsxs("li",{children:[$.name," ",i.jsx("small",{children:pp($.size)}),i.jsx("button",{type:"button","aria-label":`Fjarlægja ${$.name}`,onClick:()=>A(R.filter((de,pe)=>pe!==Z)),children:"×"})]},`${$.name}${Z}`))})]},g.id):i.jsxs("label",{className:K,children:[i.jsxs("span",{className:"hb-lbl",children:[g.label,"required"in g&&g.required?" *":""]}),g.kind==="textarea"?i.jsx("textarea",{id:le(g.id),rows:g.rows??4,value:Q(g.id),"aria-invalid":E[g.id]?!0:void 0,"aria-required":"required"in g&&g.required?!0:void 0,"aria-describedby":E[g.id]?`${c}-errors`:void 0,onBlur:()=>H($=>({...$,[g.id]:!0})),onChange:$=>oe(g.id,$.target.value)}):g.kind==="select"?i.jsxs("select",{id:le(g.id),value:Q(g.id),"aria-invalid":E[g.id]?!0:void 0,"aria-required":"required"in g&&g.required?!0:void 0,"aria-describedby":E[g.id]?`${c}-errors`:void 0,onBlur:()=>H($=>({...$,[g.id]:!0})),onChange:$=>oe(g.id,$.target.value),children:[i.jsx("option",{value:"",children:"Veldu"}),g.options.map($=>i.jsx("option",{value:$.v,children:$.t},$.v))]}):i.jsx("input",{id:le(g.id),type:g.kind==="qty"?"text":g.kind,inputMode:g.kind==="qty"?"numeric":g.kind==="tel"?"tel":g.kind==="email"?"email":void 0,pattern:g.kind==="qty"?"[0-9]*":void 0,autoComplete:"auto"in g?g.auto:void 0,placeholder:"placeholder"in g?g.placeholder:void 0,value:Q(g.id),"aria-invalid":E[g.id]?!0:void 0,"aria-required":"required"in g&&g.required?!0:void 0,"aria-describedby":E[g.id]?`${c}-errors`:void 0,onBlur:()=>H($=>({...$,[g.id]:!0})),onChange:$=>oe(g.id,g.kind==="qty"?$.target.value.replace(/\D/g,"").slice(0,5):$.target.value)}),i.jsx("i",{})]},g.id)})}),b.length>0&&i.jsxs("p",{className:"hb-villa",id:`${c}-errors`,role:"alert",children:[b.map(g=>E[g]).join(". "),"."]}),!p&&i.jsx("div",{className:"hb-eydA",children:i.jsx("button",{type:"submit",className:"hb-btn stor",children:o.submit})}),i.jsx("p",{className:"hb-smatt",children:"Þú sérð beiðnina í heild áður en nokkuð fer af stað."})]})}const Fa=(o,u)=>({v:o,t:u}),bp=[{id:"person",kind:"text",label:"Nafn",required:!0,auto:"name"},{id:"phone",kind:"tel",label:"Sími",auto:"tel"},{id:"email",kind:"email",label:"Netfang",auto:"email"}],jc={key:"spyrja",to:nr.email,ref:"HB",title:"Skilaboð til H-Berg",subject:"Fyrirspurn",subjectField:"topic",brief:"Fyrirspurn til H-Berg (H-Berg)",submit:"Skoða skilaboðin",contactEither:!0,fields:[{id:"topic",kind:"select",label:"Um hvað er spurt",required:!0,heild:!0,options:[Fa("Spurning um vöru","Spurning um vöru"),Fa("Ofnæmi eða innihald","Ofnæmi eða innihald"),Fa("Verslun eða heildsala","Verslun eða heildsala"),Fa("Annað","Annað")]},...bp,{id:"message",kind:"textarea",label:"Skilaboð",required:!0,rows:5}]},vp={...jc,key:"staerra",to:nr.emailOrders,title:"Stærri pakkningar",subject:"Fyrirspurn um stærri pakkningar",lead:"Við pökkum í stærri einingar fyrir matvælafyrirtæki, matsölustaði og stóreldhús."},kp=o=>{var u;return((u=Yr.find(s=>s.id===o))==null?void 0:u.is.toLowerCase())||o},Ba=o=>{var u;return((u=Yr.find(s=>s.id===o))==null?void 0:u.is)||o},yp={nuts:"hneta",peanut:"jarðhneta",milk:"mjólkur",gluten:"glútens",soy:"soja",sesame:"sesams",sulphites:"súlfíta",mustard:"sinneps"},Oo=(o,u="og")=>o.length<2?o.join(""):o.slice(0,-1).join(", ")+` ${u} `+o[o.length-1],Wt=o=>`${o} ${o%10===1&&o%100!==11?"vara":"vörur"}`;function xp(o){const u=br.filter(s=>!s.tags.includes("annad"));return{henta:u.filter(s=>{var h;return(h=s.allergens)==null?void 0:h.some(p=>o.includes(p))}),an:u.filter(s=>s.allergens!==null&&!s.allergens.some(h=>o.includes(h))),oljost:u.filter(s=>s.allergens===null)}}function Uo(o){var u;return(u=o.allergens)!=null&&u.length?`Inniheldur: ${o.allergens.map(Ba).join(", ")}`:"Enginn af skráðum ofnæmisvöldum nefndur í innihaldslýsingu."}const Qo="Upplýsingarnar koma úr innihaldslýsingum H-Berg. Lestu alltaf á umbúðirnar. Hringdu í 565 6500 ef þú ert í vafa.",Sc="Jarðhnetur eru belgjurtir og eru taldar sér. Hnetur og jarðhnetur eru tveir ólíkir ofnæmisvaldar.",Xd={nuts:"M12 3C5 3 3 10 5 16s12 6 14-1S17 3 12 3ZM12 5v14M8 8l8 8",peanut:"M8 3c-5 0-6 6-2 9-4 5 0 10 4 9 3 0 3-4 5-5 6-2 7-8 3-11-4-4-6 1-10-2ZM7 7l3 2m-3 7 3 1m5-8 2 2",milk:"M9 3h6v4l3 4v10H6V11l3-4V3Zm0 4h6M6 12h12",gluten:"M12 3v18M12 9C6 9 5 6 5 4c5 0 7 2 7 5Zm0 5c6 0 7-3 7-5-5 0-7 2-7 5Zm0 5c-6 0-7-3-7-5 5 0 7 2 7 5Z",soy:"M5 19C2 9 10 2 20 4c1 11-5 18-15 15ZM7 17 17 7M9 14l-1-4m4 1 4 1",sesame:"M12 3C8 8 5 12 6 16s11 6 12 0S16 8 12 3ZM10 13l-1 3",sulphites:"M9 3h6M10 3v6L4 19c-1 2 1 2 8 2s9 0 8-2L14 9V3M7 15h10",mustard:"M12 3v7M8 6l4 3 4-3M8 12c-5 0-5 8 0 8s5-8 0-8Zm8 0c-5 0-5 8 0 8s5-8 0-8Z"};function _o({id:o}){return i.jsx("svg",{"aria-hidden":"true",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:Xd[o]||Xd.nuts})})}function Aa({p:o,selected:u=[]}){return i.jsx("span",{className:"hb-allergenBadges",children:o.allergens===null?"Ofnæmisupplýsingar vantar":o.allergens.length?o.allergens.map(s=>i.jsxs("span",{title:"Inniheldur",className:u.includes(s)?"selected":"",children:[i.jsx(_o,{id:s}),u.includes(s)&&i.jsx("span",{"aria-hidden":"true",children:"! "}),Ba(s)]},s)):null})}function wp({text:o}){return i.jsx(i.Fragment,{children:o.split(new RegExp("((?<!\\p{L})\\p{Lu}{2,}(?!\\p{L}))","gu")).map((u,s)=>new RegExp("^(?:\\p{Lu}){2,}$","u").test(u)?i.jsx("mark",{children:u},s):u)})}const Nc={nuts:"hnetur",peanut:"jardhnetur",milk:"mjolk",gluten:"gluten",soy:"soja",sesame:"sesam",sulphites:"sulfit",mustard:"sinnep"};function Zd(){var u;const o=((u=new URLSearchParams(window.location.search).get("forðast"))==null?void 0:u.split(","))||[];return Yr.filter(s=>o.includes(Nc[s.id])).map(s=>s.id)}function jp(){const[o,u]=S.useState(Zd);S.useEffect(()=>{const w=()=>u(Zd());return window.addEventListener("popstate",w),()=>window.removeEventListener("popstate",w)},[]);const s=w=>{u(w);const c=new URL(window.location.href);w.length?c.searchParams.set("forðast",w.map(v=>Nc[v]).join(",")):c.searchParams.delete("forðast"),window.history.replaceState(window.history.state,"",c)},{an:h,henta:p,oljost:x}=xp(o),k=(w,c)=>i.jsxs("section",{className:`hb-allergenGroup ${c?"safe":"warning"}`,children:[i.jsxs("h3",{children:[i.jsx("span",{"aria-hidden":"true",children:c?"✓":"⚠"})," ",c?`Án ${Oo(o.map(v=>yp[v]))} samkvæmt innihaldslýsingu`:`Inniheldur ${Oo(o.map(kp),"eða")}`]}),i.jsx("p",{children:Wt(w.length)}),i.jsx("ul",{className:"hb-allergenResults",children:w.map(v=>i.jsx("li",{children:i.jsxs("button",{className:"hb-allergenCard",onClick:()=>xe.open({k:"vara",slug:v.slug}),children:[i.jsx("span",{className:"hb-allergenPack",style:{background:v.tint},children:i.jsx("img",{src:dr(v.slug,"pack","s"),alt:"",width:"72",height:"80",loading:"lazy"})}),i.jsxs("span",{className:"hb-allergenName",children:[i.jsx("strong",{children:v.name.is}),!c&&i.jsxs("span",{className:"hb-allergenContains",children:["Inniheldur:"," ",Oo((v.allergens||[]).filter(z=>o.includes(z)).map(Ba))]}),i.jsx(Aa,{p:v,selected:o})]})]})},v.slug))}),!w.length&&i.jsx("p",{children:c?"Engin vara fannst án þessara ofnæmisvalda í innihaldslýsingu.":"Engin vara inniheldur valda ofnæmisvalda samkvæmt innihaldslýsingu."})]});return i.jsxs("section",{className:"hb-form hb-ofn",id:"ofnaemi","aria-labelledby":"hb-ofn-t",children:[i.jsx("div",{className:"hb-flipar hb-disp",children:i.jsx("h2",{id:"hb-ofn-t",className:"hb-disp",children:"Ofnæmisvaldar"})}),i.jsx("div",{className:"hb-formP",children:i.jsxs("div",{className:"hb-quiz",children:[i.jsxs("div",{children:[i.jsx("p",{className:"hb-quizQ",id:"hb-ofn-q",children:"Hverju þarftu að forðast?"}),i.jsx("p",{children:"Þú getur valið fleiri en einn ofnæmisvald."}),i.jsx("div",{className:"hb-allergenChoices",role:"group","aria-labelledby":"hb-ofn-q",children:Yr.map(w=>i.jsxs("button",{"aria-pressed":o.includes(w.id),onClick:()=>s(o.includes(w.id)?o.filter(c=>c!==w.id):Yr.filter(c=>o.includes(c.id)||c.id===w.id).map(c=>c.id)),children:[i.jsx(_o,{id:w.id}),w.is,i.jsx("span",{"aria-hidden":"true",children:o.includes(w.id)?"✓":"+"})]},w.id))}),!!o.length&&i.jsx("button",{className:"hb-allergenClear",onClick:()=>s([]),children:"Hreinsa"}),i.jsx("p",{className:"hb-allergenNote",children:Sc}),i.jsx("p",{className:"hb-allergenDisclaimer",children:Qo}),i.jsx("button",{className:"hb-allergenClear",onClick:()=>xe.open({k:"ofnaemi"}),children:"Sjá allt ofnæmisyfirlitið →"}),i.jsx("button",{className:"hb-allergenClear",onClick:()=>xe.open({k:"naering"}),children:"Sjá næringargildi allra vara"})]}),i.jsx("div",{className:"hb-allergenAnswer",children:o.length?i.jsxs(i.Fragment,{children:[i.jsxs("p",{role:"status",className:"hb-allergenCount",children:[Wt(h.length)," án valinna ofnæmisvalda samkvæmt innihaldslýsingu. ",Wt(p.length)," með valda ofnæmisvalda."]}),i.jsxs("div",{className:"hb-allergenFlow",children:[k(h,!0),k(p,!1),!!x.length&&i.jsxs("p",{children:["Ofnæmisupplýsingar vantar fyrir"," ",x.map(w=>w.name.is).join(", "),". Hringdu í 565 6500."]})]},o.join(","))]}):i.jsxs("div",{className:"hb-allergenPreview",children:[i.jsx("p",{children:"Veldu ofnæmisvald til að sjá hvaða vörur koma til greina samkvæmt innihaldslýsingu."}),i.jsx("p",{className:"hb-smatt",children:"Fjöldi vara sem innihalda hvern ofnæmisvald"}),i.jsx("ul",{children:Yr.map(w=>i.jsxs("li",{children:[i.jsx(_o,{id:w.id}),i.jsx("span",{children:w.is}),i.jsx("strong",{children:Je.flatMap(c=>c.items).filter(c=>{var v;return(v=c.allergens)==null?void 0:v.includes(w.id)}).length})]},w.id))})]})})]})})]})}function Sp(){const[o,u]=S.useState(""),s=Je.filter(h=>!o||h.s===o);return i.jsxs(i.Fragment,{children:[i.jsx("p",{className:"hb-allergenDisclaimer",children:Qo}),i.jsx("p",{children:Sc}),i.jsxs("label",{className:"hb-allergenFilter",children:["Vörulína",i.jsxs("select",{value:o,onChange:h=>u(h.target.value),children:[i.jsx("option",{value:"",children:"Allar vörulínur"}),Je.map(h=>i.jsx("option",{value:h.s,children:h.t},h.s))]})]}),i.jsx("p",{children:"● Inniheldur samkvæmt innihaldslýsingu. ○ Ekki nefnt í innihaldslýsingu."}),i.jsx(xc,{target:".hb-allergenMatrix"}),i.jsx("div",{className:"hb-allergenMatrix",role:"region","aria-label":"Ofnæmisvaldar eftir vörum",tabIndex:0,children:i.jsxs("table",{children:[i.jsx("caption",{className:"hb-orderSr",children:"Ofnæmisvaldar eftir vörulínum og vörum"}),i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{scope:"col",children:"Vara"}),Yr.map(h=>i.jsx("th",{scope:"col",children:h.is},h.id))]})}),s.map(h=>i.jsxs("tbody",{children:[i.jsx("tr",{children:i.jsx("th",{className:"hb-allergenLine",colSpan:Yr.length+1,scope:"rowgroup",children:h.t})}),h.items.map(p=>i.jsxs("tr",{children:[i.jsx("th",{scope:"row",children:i.jsx("button",{onClick:()=>xe.open({k:"vara",slug:p.slug}),children:p.name.is})}),Yr.map(x=>{var k,w;return i.jsxs("td",{children:[i.jsx("span",{"aria-hidden":"true",children:(k=p.allergens)!=null&&k.includes(x.id)?"●":"○"}),i.jsx("span",{className:"hb-orderSr",children:(w=p.allergens)!=null&&w.includes(x.id)?"Inniheldur":"Ekki nefnt í innihaldslýsingu"})]},x.id)})]},p.slug))]},h.s))]})}),i.jsx("div",{className:"hb-allergenMobile",children:s.map(h=>i.jsxs("section",{children:[i.jsx("h3",{children:h.t}),i.jsx("ul",{children:h.items.map(p=>i.jsx("li",{children:i.jsxs("button",{onClick:()=>xe.open({k:"vara",slug:p.slug}),children:[i.jsx("strong",{children:p.name.is}),i.jsx(Aa,{p})]})},p.slug))})]},h.s))})]})}let fi=null,Ec=0,La;const Ko=new Set,Np=o=>(Ko.add(o),()=>{Ko.delete(o)}),xe={open(o){if((o==null?void 0:o.k)==="naering"&&(Ec+=1,new URLSearchParams(window.location.search).get("naering")!=="1"&&(La=new URLSearchParams(window.location.search).get("lina"))),(o==null?void 0:o.k)!=="naering"){const u=new URL(window.location.href),s=u.searchParams.get("naering")==="1";for(const h of["naering","rada","att","leit"])u.searchParams.delete(h);s&&(La?u.searchParams.set("lina",La):u.searchParams.delete("lina"),La=void 0),window.history.replaceState(null,"",u)}fi=o,Ko.forEach(u=>u())},close(){xe.open(null)}},ec=()=>fi,Ep=()=>S.useSyncExternalStore(Np,ec,ec),Cp=mp+`
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
`,Tp={};function Pp(){var M;const o=Ep();S.useEffect(()=>{const E=()=>{var O;const P=new URLSearchParams(window.location.search);P.get("naering")==="1"?xe.open({k:"naering",sort:yc(P.get("rada")),line:(O=Je.find(H=>H.s===P.get("lina")))==null?void 0:O.s}):(fi==null?void 0:fi.k)==="naering"&&xe.close()};return E(),window.addEventListener("popstate",E),()=>window.removeEventListener("popstate",E)},[]);const u=S.useId(),s=S.useRef(null),h=S.useRef(null),[p,x]=S.useState(null),k=o!==null,w=S.useRef(null);o&&(w.current=o);const c=o??w.current;S.useEffect(()=>{x(null)},[c&&c.k==="vara"?c.slug:null]);const v=o?JSON.stringify(o):"";S.useEffect(()=>{var G;const E=s.current;if(!E||!k)return;document.activeElement!==E&&(h.current=document.activeElement);const P=[...E.parentElement.children].filter(_=>_!==E&&!_.classList.contains("hb-popB")&&!_.hasAttribute("inert"));P.forEach(_=>_.setAttribute("inert",""));const O=window.__hbLenis;O==null||O.stop();const H=window.scrollY,re=document.body.style,q={position:re.position,top:re.top,width:re.width};re.position="fixed",re.top=`-${H}px`,re.width="100%";const R=window.setTimeout(()=>{var _;return(_=document.documentElement.dataset.input!=="key"?E:E.querySelector(".hb-popX"))==null?void 0:_.focus({preventScroll:!0})},60);(G=E.querySelector(".hb-popS"))==null||G.scrollTo(0,0);const A=_=>{if(_.key==="Escape"){xe.close();return}if(_.key!=="Tab")return;const X=[...E.querySelectorAll('button,a[href],input,textarea,select,summary,[tabindex="0"]')].filter(L=>!L.hasAttribute("disabled")&&L.tabIndex>=0&&L.getClientRects().length&&getComputedStyle(L).visibility!=="hidden");X.length&&(_.shiftKey&&(document.activeElement===X[0]||document.activeElement===E)?(_.preventDefault(),X[X.length-1].focus()):!_.shiftKey&&document.activeElement===X[X.length-1]&&(_.preventDefault(),X[0].focus()))};return window.addEventListener("keydown",A),()=>{var _,X;P.forEach(L=>L.removeAttribute("inert")),window.clearTimeout(R),window.removeEventListener("keydown",A),re.position=q.position,re.top=q.top,re.width=q.width,window.scrollTo(0,H),O==null||O.scrollTo(H,{immediate:!0}),O==null||O.start(),(_=h.current)!=null&&_.isConnected&&h.current!==document.body&&h.current.getClientRects().length&&getComputedStyle(h.current).visibility!=="hidden"?h.current.focus({preventScroll:!0}):(X=[...document.querySelectorAll('.hb-navL[aria-controls="hb-fell-vorur"],.hb-braud,#ofnaemi button')].find(L=>L.getClientRects().length&&getComputedStyle(L).visibility!=="hidden"))==null||X.focus({preventScroll:!0})}},[k]),S.useEffect(()=>{var E,P,O;v&&((P=(E=s.current)==null?void 0:E.querySelector(".hb-popS"))==null||P.scrollTo(0,0),(O=s.current)==null||O.focus({preventScroll:!0}))},[v]);let z="",j=null;if((c==null?void 0:c.k)==="vara"){const E=We(c.slug);if(E){const P=$o[E.slug];z=E.name.is;const O={ing:"Innihaldslýsing","nf-eu":"Næringargildi (ESB)","nf-us":"Næringargildi (US)"},H=[E.labels.ing?"ing":"",E.labels.nfEu?"nf-eu":"",E.labels.nfUs?"nf-us":""].filter(Boolean),re=q=>q==="ing"?P==null?void 0:P.ing:q==="nf-eu"?P==null?void 0:P.nfEu:P==null?void 0:P.nfUs;j=i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`hb-vMynd hb-mask${P!=null&&P.pack&&(P!=null&&P.open)?"":" einn"}`,style:{"--grunnur":E.tint},children:[P!=null&&P.pack?i.jsx("img",{src:dr(E.slug,"pack","m"),alt:`${E.name.is}, pakkning`,width:P.pack[0],height:P.pack[1]}):(M=P==null?void 0:P.macros)!=null&&M[0]?i.jsx("img",{src:Fo(E.slug,"m1.webp"),alt:E.name.is,width:P.macros[0][0],height:P.macros[0][1]}):null,P!=null&&P.pack&&(P!=null&&P.open)?i.jsx("img",{src:dr(E.slug,"open","m"),alt:`${E.name.is}, opinn poki`,width:P.open[0],height:P.open[1]}):null]}),i.jsx("div",{className:"hb-mask",children:i.jsx("p",{className:"hb-merki",style:{margin:0},children:"H-Berg"})}),i.jsx("div",{className:"hb-mask",children:i.jsx("h2",{className:"hb-sub",style:{"--i":1},children:E.name.is})}),i.jsx("p",{className:"hb-brod",style:{margin:"1rem 0 0"},children:E.desc.is}),(E.isNew||E.madeToOrder||E.season)&&i.jsxs("ul",{className:"hb-vMerki",style:{marginTop:"1rem"},children:[E.isNew&&i.jsx("li",{className:"nytt",children:"Nýtt"}),E.madeToOrder&&i.jsx("li",{children:"Framleitt eftir pöntun"}),E.season==="staerra"&&i.jsx("li",{children:"Stærri pakkningar"}),E.season==="jol"&&i.jsx("li",{children:"Jól"})]}),E.weight?i.jsxs("dl",{className:"hb-vDl",children:[i.jsx("dt",{children:"Þyngd"}),i.jsx("dd",{children:E.weight})]}):null,i.jsxs("div",{className:"hb-allergenBlock",children:[i.jsx("strong",{children:Uo(E)}),i.jsx("h3",{children:"Innihald"}),i.jsx("p",{children:i.jsx(wp,{text:E.ingredients||"Innihaldslýsingu vantar. Lestu á umbúðirnar."})}),i.jsx("p",{className:"hb-allergenDisclaimer",children:Qo})]}),i.jsx("h3",{children:"Næringargildi í 100 g"}),i.jsx("table",{className:"hb-vTafla",children:i.jsx("tbody",{children:Yt.map(q=>i.jsxs(S.Fragment,{children:[i.jsxs("tr",{className:q.key==="saturated"||q.key==="sugars"?"sub":"",children:[i.jsx("th",{scope:"row",children:q.key==="saturated"?"þar af mettuð":q.key==="sugars"?"þar af sykurtegundir":q.title}),i.jsx("td",{children:Sn(E.slug,q.key)})]}),q.key==="sugars"&&E.nutritionRows.filter(R=>/Erýtr[ií]tól/i.test(R[0])).map(R=>i.jsxs("tr",{className:"sub",children:[i.jsx("th",{scope:"row",children:"þar af erýtritól"}),i.jsx("td",{children:R[1]})]},R[0]))]},q.key))})}),i.jsx("button",{type:"button",className:"hb-nutCompare",onClick:()=>{var q;return xe.open({k:"naering",sort:"protein",line:(q=Je.find(R=>R.items.some(A=>A.slug===E.slug)))==null?void 0:q.s})},children:"Bera saman við aðrar vörur"}),H.length>0&&i.jsx("div",{className:"hb-vMerkingar",role:"group","aria-label":"Merkingar á umbúðum",children:H.map(q=>i.jsx("button",{type:"button","aria-pressed":p===q,onClick:()=>x(p===q?null:q),children:O[q]},q))}),p&&re(p)?i.jsx("div",{className:"hb-vMid",children:i.jsx("img",{src:Fo(E.slug,`${p}.webp`),width:re(p)[0],height:re(p)[1],alt:`${O[p]}, ${E.name.is}. Mynd af miða á umbúðum.`})}):null,i.jsx("div",{className:"hb-vAct",children:E.madeToOrder?i.jsx("button",{type:"button",className:"hb-btn hb-casH",onClick:()=>xe.open({k:"staerra"}),children:"Panta fyrir félag"}):i.jsx(gi,{slug:E.slug})}),P!=null&&P.macros&&P.macros.length>(E.hasPack?0:1)?i.jsx("div",{className:"hb-vLjos",children:P.macros.map((q,R)=>!E.hasPack&&R===0?null:i.jsx("img",{src:Fo(E.slug,`m${R+1}-s.webp`),width:q[0],height:q[1],alt:`${E.name.is}, mynd ${R+1}`,loading:"lazy"},R))}):null]})}}else if((c==null?void 0:c.k)==="flokkur"){const E=Je.find(P=>P.s===c.s);z=(E==null?void 0:E.t)??"",j=E?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"hb-mask",children:i.jsxs("p",{className:"hb-merki",style:{margin:0},children:[E.items.length," vörur"]})}),i.jsx("div",{className:"hb-mask",children:i.jsx("h2",{className:"hb-disp",style:{"--i":1},children:E.t})}),i.jsx("div",{className:"hb-mask",style:{marginTop:"1rem"},children:i.jsx("p",{className:"hb-brod",style:{"--i":2},children:Tp[E.s]})}),i.jsx("ul",{className:"hb-fLisi",children:E.items.map(P=>i.jsxs("li",{children:[i.jsx("span",{className:"hb-fM",style:{"--grunnur":P.tint},children:P.hasPack?i.jsx("img",{src:dr(P.slug,"pack","s"),alt:"",width:50,height:56,loading:"lazy"}):i.jsx("b",{"aria-hidden":"true",children:P.name.is[0]})}),i.jsxs("span",{children:[i.jsx("button",{type:"button",className:"hb-nafn",onClick:()=>xe.open({k:"vara",slug:P.slug}),children:P.name.is}),i.jsx("small",{children:Uo(P)})]}),P.madeToOrder?i.jsx("button",{type:"button",className:"hb-sett",onClick:()=>xe.open({k:"staerra"}),children:"Panta fyrir félag"}):i.jsx(gi,{slug:P.slug})]},P.slug))})]}):null}else(c==null?void 0:c.k)==="hvar"?(z="Hvar fæst H-Berg",j=i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"hb-mask",children:i.jsx("p",{className:"hb-merki",style:{margin:0},children:"Hvar fæst H-Berg"})}),i.jsx("div",{className:"hb-mask",children:i.jsx("h2",{className:"hb-disp",style:{"--i":1},children:"Söluaðilar"})}),i.jsx("p",{className:"hb-brod",style:{marginTop:"1rem"},children:"Söluaðilar samkvæmt hberg.is. Ekki er tilgreint hvaða vörur fást á hverjum stað."}),i.jsx("ul",{className:"hb-verslun",children:Qm.map(E=>i.jsx("li",{children:i.jsxs("a",{href:E.href,target:"_blank",rel:"noopener noreferrer",children:[i.jsx("b",{children:E.name}),i.jsx("span",{children:E.note.is})]})},E.name))}),i.jsx("p",{className:"hb-smatt",style:{marginBottom:"2rem"},children:"Hafðu samband við verslunina um úrval."})]})):(c==null?void 0:c.k)==="staerra"?(z="Stærri pakkningar",j=i.jsxs(i.Fragment,{children:[i.jsx("h2",{className:"hb-disp",children:"Stærri pakkningar"}),i.jsx("p",{className:"hb-brod",style:{margin:"1.5rem 0"},children:"H-Berg pakkar í stærri einingar fyrir matvælafyrirtæki, matsölustaði og stóreldhús. Spurðu okkur um pakkningar og magn."}),i.jsx(wc,{cfg:vp})]})):(c==null?void 0:c.k)==="naering"?(z="Næringargildi",j=i.jsx(hp,{sort:c.sort,line:c.line},Ec)):(c==null?void 0:c.k)==="ofnaemi"&&(z="Ofnæmisyfirlit",j=i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"hb-mask",children:i.jsx("p",{className:"hb-merki",style:{margin:0},children:"Allt á einum stað"})}),i.jsx("div",{className:"hb-mask",children:i.jsx("h2",{className:"hb-disp",style:{"--i":1},children:"Ofnæmisyfirlit"})}),i.jsx(Sp,{})]}));return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:`hb-popB${(c==null?void 0:c.k)==="vara"?" productSheet":""}${k?" opid":""}`,onClick:()=>xe.close(),"data-bendill":"Loka","aria-hidden":"true"}),i.jsxs("div",{ref:s,tabIndex:-1,className:`hb-pop${(c==null?void 0:c.k)==="vara"?" hb-productSheet":""}${k?" opid":""}`,role:"dialog","aria-modal":"true","aria-labelledby":`${u}-t`,"data-lenis-prevent":"",children:[i.jsxs("div",{className:"hb-popT",children:[i.jsx("span",{id:`${u}-t`,className:"hb-merki",style:{margin:0},children:z}),i.jsx("button",{className:"hb-popX",onClick:()=>xe.close(),"aria-label":"Loka",children:i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14","aria-hidden":"true",children:i.jsx("path",{d:"M1 1l12 12M13 1L1 13",stroke:"currentColor",strokeWidth:"1.4"})})})]}),i.jsx("div",{className:"hb-popS",children:j})]})]})}const Xo="hberg-pantanir-v1";function rc(o){const u=String(o).trim().replace(/^(\d{6})-(\d{4})$/,"$1$2");if(!/^\d{10}$/.test(u)||!/[089]/.test(u[9]))return!1;const s=[...u].map(Number),h=s[0]*10+s[1],p=h>40?h-40:h,x=s[2]*10+s[3],k={8:1800,9:1900,0:2e3}[s[9]]+s[4]*10+s[5],w=new Date(Date.UTC(k,x-1,p));if(p<1||w.getUTCMonth()!==x-1||w.getUTCDate()!==p)return!1;const c=(11-s.slice(0,8).reduce((v,z,j)=>v+z*[3,2,7,6,5,4,3,2][j],0)%11)%11;return c!==10&&c===s[8]}function vi(o){if(!Array.isArray(o))return[];const u=new Set;return o.filter(s=>s&&typeof s.slug=="string"&&Number.isInteger(s.magn)&&s.magn>0&&s.magn<=9999&&typeof s.unit=="string"&&!u.has(s.slug)&&u.add(s.slug)).map(s=>({slug:s.slug,magn:s.magn,unit:s.unit,...typeof s.other=="string"?{other:s.other.slice(0,240)}:{}}))}function Cc(o){try{const u=JSON.parse(o.getItem(Xo)||"null");return!u||typeof u.company!="object"||!u.company||!Array.isArray(u.orders)?null:{company:Object.fromEntries(Object.entries(u.company).filter(([,s])=>typeof s=="string")),orders:u.orders.filter(s=>s&&typeof s.date=="string"&&Number.isFinite(Date.parse(s.date))&&Array.isArray(s.lines)).slice(0,5).map(s=>({date:s.date,lines:vi(s.lines)}))}}catch{return null}}function Rp(o,u,s,h=new Date().toISOString()){try{const p=Cc(o),x={company:u,orders:[{date:h,lines:vi(s)},...(p==null?void 0:p.orders)||[]].slice(0,5)};return o.setItem(Xo,JSON.stringify(x)),x}catch{return null}}function Ho(o){try{return o.removeItem(Xo),!0}catch{return!1}}function tc(o,u){return vi(o==null?void 0:o.lines).filter(s=>u.includes(s.slug)).map(s=>({...s}))}function nc(o){const u=String(o).replace(/\D/g,"").slice(0,10);return u.length>6?`${u.slice(0,6)}-${u.slice(6)}`:u}function at(o,u,s){return o%10===1&&o%100!==11?u:s}function Fp(o){const u=new Map;for(const s of o)u.set(s.unit,(u.get(s.unit)||0)+s.magn);return[`${o.length} ${at(o.length,"vara","vörur")}`,...[...u].sort(([s],[h])=>s.localeCompare(h)).map(([s,h])=>`${h} ${s==="kassar"?at(h,"kassi","kassar"):s==="pokar"?at(h,"poki","pokar"):s==="annad"?"aðrar einingar":s.replace(/^pokar/,at(h,"poki","pokar"))}`)].join(" · ")}function Lp(o,u,s=!1){const h=o.indexOf(u);return h<0?null:o[h+(s?-1:1)]||null}function Ha(o){const u=o.unit==="kassar"?at(o.magn,"kassi","kassar"):o.unit==="pokar"?at(o.magn,"poki","pokar"):o.unit==="annad"?"aðrar einingar":o.unit;return`${o.magn} ${u}${o.unit==="annad"&&o.other?` · ${o.other}`:""}`}function zp(o,u,s,h,p=""){return["Pöntun til H-Berg","",...h.map(x=>`${x.label}: ${o[x.key]||""}`),`Athugasemd um afhendingu: ${o.note||""}`,`Óskir um pöntun: ${p}`,"","Vörur:",...u.map(x=>`${s[x.slug]||x.slug} · ${Ha(x)}`)].join(`
`)}function Mp(o,u=3){const s=new Date(`${o}T12:00:00`),h=[];for(;h.length<u;)s.setDate(s.getDate()+1),s.getDay()!==0&&s.getDay()!==6&&h.push(`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`);return h}const Op=`
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
`,Vo=o=>["pokar","kassar",...o.bulkWeight?[`pokar af ${o.bulkWeight}`]:[],"annad"],Tc=o=>vi(o).filter(u=>{const s=We(u.slug);return s&&Vo(s).includes(u.unit)});let Hr=[];try{Hr=Tc(JSON.parse(sessionStorage.getItem("hb-poki")||"[]").map(o=>({...o,unit:o.unit||"kassar"})))}catch{}let Jo=!1,pi={trigger:null,keyboard:!1};const qo=new Set,za=()=>{try{sessionStorage.setItem("hb-poki",JSON.stringify(Hr))}catch{}qo.forEach(o=>o())},Pc=o=>(qo.add(o),()=>{qo.delete(o)}),Pe={add(o){const u=Hr.find(s=>s.slug===o);this.set(o,((u==null?void 0:u.magn)||0)+1)},set(o,u,s,h){if(!We(o)||!Number.isFinite(u))return;const p=Hr.find(k=>k.slug===o),x={slug:o,magn:Math.min(9999,Math.max(0,Math.floor(u))),unit:s||(p==null?void 0:p.unit)||"kassar",other:h??(p==null?void 0:p.other)??""};Hr=x.magn?p?Hr.map(k=>k.slug===o?x:k):[...Hr,x]:Hr.filter(k=>k.slug!==o),za()},replace(o){Hr=Tc(o),za()},open(o,u){o&&!Jo&&(pi={trigger:(u==null?void 0:u.currentTarget)||document.activeElement,keyboard:u?u.detail===0:document.documentElement.dataset.input==="key"},xe.close()),Jo=o,za()},clear(){Hr=[],za()}},ic=()=>Hr,ac=()=>Jo,Rc=()=>S.useSyncExternalStore(Pc,ic,ic),Hp=Op;function Dp(){const o=Rc();return i.jsxs("button",{className:"hb-pokiH",onClick:u=>Pe.open(!0,u),"aria-label":`Pöntunarlisti, ${o.length} vörur`,children:[i.jsx("span",{className:"hb-pokiO",children:"Pöntunarlisti"}),i.jsx("b",{children:o.length})]})}function gi({slug:o,label:u="Á listann"}){var p;const[s,h]=S.useState(!1);return S.useEffect(()=>{if(!s)return;const x=window.setTimeout(()=>h(!1),1200);return()=>clearTimeout(x)},[s]),i.jsxs("button",{type:"button",className:`hb-sett${s?" komid":""}`,onClick:()=>{Pe.add(o),h(!0)},"aria-label":`Setja ${(p=We(o))==null?void 0:p.name.is} á pöntunarlistann`,children:[i.jsx("span",{"aria-hidden":"true",children:s?"✓":"+"})," ",s?"Komið á listann":u]})}function Fc(){return i.jsx("svg",{"aria-hidden":"true",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:i.jsx("path",{d:"M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"})})}function Ip(o,u){var s;return[...((s=o.closest(".hb-order"))==null?void 0:s.querySelectorAll("input[data-amount-source]"))||[]].filter(h=>h.dataset.amountSource===u)}function Lc({p:o,line:u,source:s}){const[h,p]=S.useState(null),x=(u==null?void 0:u.magn)||0,k=S.useRef(null),w=S.useRef(x);S.useEffect(()=>{var j;w.current!==x&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&((j=k.current)==null||j.animate([{opacity:.45,transform:"translateY(2px)"},{opacity:1,transform:"translateY(0)"}],{duration:ye.fast,easing:ye.out})),w.current=x},[x]);const c=(u==null?void 0:u.unit)||"kassar",v=Vo(o),z=c==="pokar"?o.weight?`Neytendapakkning · ${o.weight}`:"Neytendapakkningar":c==="kassar"?o.iKassa?`${o.iKassa} pakkningar í kassa`:"Fjöldi í kassa staðfestur við pöntun":c==="annad"?"Lýstu pakkningu eða samsetningu":`Stærri pakkning · ${o.bulkWeight}`;return i.jsxs("div",{className:"hb-amountUnit",children:[i.jsxs("div",{className:"hb-magn",children:[i.jsx("button",{type:"button","aria-label":`Fækka ${o.name.is}`,disabled:!x,onClick:()=>Pe.set(o.slug,x-1),children:"−"}),i.jsx("input",{ref:k,"aria-label":`Magn ${o.name.is}`,id:`${s}-${o.slug}`,className:"hb-magnN",inputMode:"numeric",enterKeyHint:"next","data-amount-source":s,"data-product":o.slug,onKeyDown:j=>{var P;if(j.key!=="Enter")return;j.preventDefault();const M=[...Ip(j.currentTarget,s)],E=Lp(M.map(O=>O.dataset.product),o.slug,j.shiftKey);(P=M.find(O=>O.dataset.product===E))==null||P.focus()},pattern:"[0-9]*",value:h??(x||""),placeholder:"0",onChange:j=>{const M=j.target.value.replace(/\D/g,"").slice(0,4);p(M),Pe.set(o.slug,Number(M))},onBlur:()=>p(null)}),i.jsx("button",{type:"button","aria-label":`Fjölga ${o.name.is}`,onClick:()=>Pe.set(o.slug,x+1),children:"+"})]}),i.jsxs("div",{className:"hb-unit",style:{"--unit-count":v.length,"--unit-index":v.indexOf(c)},role:"radiogroup","aria-label":`Eining ${o.name.is}`,onKeyDown:j=>{var O;if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(j.key))return;j.preventDefault();const M=Vo(o),E=M.indexOf((u==null?void 0:u.unit)||"kassar"),P=j.key==="Home"?0:j.key==="End"?M.length-1:(E+(j.key==="ArrowRight"||j.key==="ArrowDown"?1:-1)+M.length)%M.length;Pe.set(o.slug,x||1,M[P]),(O=j.currentTarget.querySelectorAll("button")[P])==null||O.focus()},children:[i.jsx("span",{className:"hb-unitPill","aria-hidden":"true"}),v.map(j=>i.jsx("button",{type:"button",role:"radio",tabIndex:((u==null?void 0:u.unit)||"kassar")===j?0:-1,"aria-checked":((u==null?void 0:u.unit)||"kassar")===j,onClick:()=>Pe.set(o.slug,x||1,j),children:j==="annad"?"Annað":j==="pokar"?"Pokar":j==="kassar"?"Kassar":"Stærri pakkning"},j))]}),i.jsx("small",{className:"hb-unitDetail",children:z}),c==="annad"&&i.jsxs("label",{className:"hb-other",htmlFor:`${s}-other-${o.slug}`,children:["Hvernig viltu fá þessa vöru?",i.jsx("input",{id:`${s}-other-${o.slug}`,maxLength:240,value:(u==null?void 0:u.other)||"",placeholder:"Til dæmis blandað í kassa",onChange:j=>Pe.set(o.slug,x||1,"annad",j.target.value)})]})]})}const Yo=[{key:"company",label:"Fyrirtæki",required:!0,auto:"organization"},{key:"kt",label:"Kennitala",required:!0,inputMode:"numeric"},{key:"contact",label:"Tengiliður",auto:"name"},{key:"phone",label:"Sími",type:"tel",auto:"tel"},{key:"email",label:"Netfang",required:!0,type:"email",auto:"email"},{key:"address",label:"Afhendingarstaður",auto:"street-address"},{key:"date",label:"Óskuð afhending",type:"date"}],Do=()=>{const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`},zc=o=>`${o.name.is}${o.weight&&!o.name.is.toLowerCase().replace(/\s/g,"").includes(o.weight.toLowerCase().replace(/\s/g,""))?` ${o.weight}`:""}`,Bp=(o,u,s)=>zp(o,u,Object.fromEntries(br.map(h=>[h.slug,zc(h)])),Yo,s),Ap=["sun.","mán.","þri.","mið.","fim.","fös.","lau."],$p=["jan.","feb.","mar.","apr.","maí","jún.","júl.","ágú.","sep.","okt.","nóv.","des."],lc=(o,u)=>`${u?Ap[o.getDay()]+" ":""}${o.getDate()}. ${$p[o.getMonth()]}`;function Up(){const o=Rc(),u=Je.flatMap(C=>C.items).flatMap(C=>o.filter(Y=>Y.slug===C.slug)),s=S.useSyncExternalStore(Pc,ac,ac),h=S.useRef(!1);s&&(h.current=!0);const[p,x]=S.useState(!1);S.useEffect(()=>{const C=window;if(C.requestIdleCallback){const fe=C.requestIdleCallback(()=>x(!0),{timeout:5e3});return()=>{var Se;return(Se=C.cancelIdleCallback)==null?void 0:Se.call(C,fe)}}const Y=window.setTimeout(()=>x(!0),3e3);return()=>window.clearTimeout(Y)},[]);const k=S.useRef(null),w=S.useRef(null),c=S.useRef(null),v=S.useId(),[z,j]=S.useState(""),[M,E]=S.useState("products"),[P,O]=S.useState(!1),[H,re]=S.useState(!1),[q,R]=S.useState(!1),[A,G]=S.useState(null),[_,X]=S.useState(""),[L,Q]=S.useState({}),[oe,le]=S.useState({}),[me,we]=S.useState(!1),[be,Re]=S.useState(null),[He,Ee]=S.useState(Je[0].s),[W,D]=S.useState(""),[V,b]=S.useState({company:{},lines:[],note:""}),[g,K]=S.useState(!1),[$,Z]=S.useState(()=>{try{return sessionStorage.getItem("hb-order-note")||""}catch{return""}});S.useEffect(()=>{try{sessionStorage.setItem("hb-order-note",$)}catch{}},[$]);const[de,pe]=S.useState(!1),ce=S.useRef();S.useEffect(()=>()=>clearTimeout(ce.current),[]);const[je,Ge]=S.useState(!1);S.useEffect(()=>{if(H){Ge(!0);return}const C=setTimeout(()=>Ge(!1),window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:ye.ui);return()=>clearTimeout(C)},[H]);const ot=S.useRef(!1);ot.current=H,S.useEffect(()=>{var xi,Rn;if(!s)return;let C=null;try{C=Cc(localStorage)}catch{}Re(C),we(!!C),C&&Q({...C.company,date:"",note:""}),R(!1),re(!1),O(!1);const Y=k.current,fe=document.documentElement,Se=document.body,Ir=fe.style.overflow,Wr=Se.style.overflow,Cr=window.scrollY,yi={position:Se.style.position,top:Se.style.top,width:Se.style.width},Br=window.__hbLenis;Br==null||Br.stop(),fe.style.overflow="hidden",Se.style.overflow="hidden",Se.style.position="fixed",Se.style.top=`-${Cr}px`,Se.style.width="100%";const zt=[...Y.parentElement.children].filter(Ne=>Ne!==Y&&!Ne.classList.contains("hb-pokiBak")&&!Ne.hasAttribute("inert"));zt.forEach(Ne=>Ne.setAttribute("inert",""));const Ar=()=>{const Ne=window.visualViewport;Y.style.setProperty("--order-height",`${(Ne==null?void 0:Ne.height)||window.innerHeight}px`),Y.style.setProperty("--order-top",`${(Ne==null?void 0:Ne.offsetTop)||0}px`)};Ar(),(xi=window.visualViewport)==null||xi.addEventListener("resize",Ar),(Rn=window.visualViewport)==null||Rn.addEventListener("scroll",Ar),window.addEventListener("resize",Ar);const Mt=window.setTimeout(()=>{var Ne;return(Ne=pi.keyboard?Y.querySelector("button"):Y)==null?void 0:Ne.focus({preventScroll:!0})},30),st=Ne=>{var Qt;if(Ne.key==="Escape"){Ne.preventDefault(),Ne.stopImmediatePropagation(),ot.current?(re(!1),(Qt=c.current)==null||Qt.focus()):Pe.open(!1);return}if(Ne.key!=="Tab")return;const ut=ot.current?w.current:Y,Tr=[...ut.querySelectorAll("button,a[href],input,select,textarea,summary")].filter(Gr=>!Gr.hasAttribute("disabled")&&Gr.tabIndex>=0&&Gr.getClientRects().length&&getComputedStyle(Gr).visibility!=="hidden"&&!Gr.closest("[hidden]")),$r=Tr[0],dt=Tr[Tr.length-1];if(!$r){Ne.preventDefault(),ut.focus();return}Ne.shiftKey&&(document.activeElement===$r||!Tr.includes(document.activeElement))?(Ne.preventDefault(),dt.focus()):!Ne.shiftKey&&(document.activeElement===dt||!ut.contains(document.activeElement))&&(Ne.preventDefault(),$r.focus())};return window.addEventListener("keydown",st,!0),()=>{var Ne,ut,Tr,$r;clearTimeout(Mt),window.removeEventListener("keydown",st,!0),(Ne=window.visualViewport)==null||Ne.removeEventListener("resize",Ar),(ut=window.visualViewport)==null||ut.removeEventListener("scroll",Ar),window.removeEventListener("resize",Ar),zt.forEach(dt=>dt.removeAttribute("inert")),fe.style.overflow=Ir,Se.style.overflow=Wr,Object.assign(Se.style,yi),window.scrollTo(0,Cr),Br==null||Br.start(),(Tr=pi.trigger)!=null&&Tr.isConnected&&pi.trigger.getClientRects().length?pi.trigger.focus({preventScroll:!0}):($r=document.querySelector(".hb-braud"))==null||$r.focus({preventScroll:!0})}},[s]),S.useEffect(()=>{var C;H&&je&&((C=w.current)==null||C.focus({preventScroll:!0}))},[H,je]),S.useEffect(()=>{var Y;if(!s)return;const C=k.current;(Y=C==null?void 0:C.querySelector(".hb-orderMain"))==null||Y.scrollTo(0,0)},[M,s]);const vr=C=>{var Y;clearTimeout(ce.current),pe(!0),(Y=k.current)==null||Y.focus({preventScroll:!0}),ce.current=setTimeout(()=>{E(C),pe(!1),O(!1),R(!1)},window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:ye.fast)},Lt=C=>{Pe.replace(tc(C,br.map(Y=>Y.slug))),vr("products"),X("Fyrri pöntun komin á listann. Þú getur breytt henni."),G(null)},Cn=C=>{G(u.filter(Y=>Y.slug===C).map(Y=>({...Y}))),Pe.set(C,0),X("Vara fjarlægð af listanum.")},Tn=()=>{let C=!1;try{C=Ho(localStorage)}catch{}Re(null),we(!1),Q({}),X(C?"Upplýsingum hefur verið eytt úr þessu tæki.":"Ekki tókst að eyða vistuðum upplýsingum. Athugaðu stillingar vafrans."),G(null)},ki=C=>{var Se,Ir,Wr;C.preventDefault();const Y={};if((Se=L.company)!=null&&Se.trim()||(Y.company="Skrifaðu nafn fyrirtækisins."),rc(L.kt||"")||(Y.kt="Skrifaðu gilda kennitölu með 10 tölustöfum."),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(((Ir=L.email)==null?void 0:Ir.trim())||"")||(Y.email="Skrifaðu gilt netfang."),L.date&&(!/^\d{4}-\d{2}-\d{2}$/.test(L.date)||L.date<Do())&&(Y.date="Veldu dag í dag eða síðar."),!u.length){vr("products"),X("Veldu að minnsta kosti eina vöru.");return}if(le(Y),Object.keys(Y).length){(Wr=document.getElementById(`${v}-${Object.keys(Y)[0]}`))==null||Wr.focus();return}const fe=Bp(L,u,$);if(me){let Cr=null;try{Cr=Rp(localStorage,{...L,date:"",note:""},u)}catch{}Re(Cr),X(Cr?"":"Vafrinn leyfir ekki vistun á þessu tæki.")}else{try{Ho(localStorage)}catch{}Re(null)}D(fe),b({company:{...L},lines:u.map(Cr=>({...Cr})),note:$}),window.location.href=`mailto:pantanir@hberg.is?subject=${encodeURIComponent(`Pöntun · ${L.company.trim()}`)}&body=${encodeURIComponent(fe)}`,vr("receipt")},Gt=C=>C.toLocaleLowerCase("is").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ð/g,"d").replace(/þ/g,"th").replace(/æ/g,"ae"),Pn=Je.map(C=>({...C,items:C.items.filter(Y=>Gt(`${Y.name.is} ${C.t}`).includes(Gt(z.trim()))&&(!g||u.some(fe=>fe.slug===Y.slug)))})).filter(C=>C.items.length);return!s&&!h.current&&!p?null:i.jsxs(i.Fragment,{children:[i.jsx("div",{className:`hb-pokiBak${s?" on":""}`,onClick:()=>Pe.open(!1),"aria-hidden":"true"}),i.jsxs("div",{ref:C=>{k.current=C,C==null||C.toggleAttribute("inert",!s)},tabIndex:-1,className:`hb-order${s?" on":""}`,role:"dialog","aria-modal":s?!0:void 0,"aria-labelledby":`${v}-title`,"aria-hidden":!s,"data-lenis-prevent":"",children:[i.jsxs("header",{className:"hb-orderHead",children:[i.jsxs("div",{children:[i.jsx("span",{className:"hb-orderEyebrow",children:"H-Berg fyrir fyrirtæki"}),i.jsx("h2",{id:`${v}-title`,children:M==="receipt"?"Pöntunin er tilbúin":"Pöntunarlistinn"})]}),i.jsx("nav",{className:"hb-orderSteps","aria-label":"Skref pöntunar",children:["products","company","receipt"].map((C,Y)=>{const fe=["products","company","receipt"].indexOf(M);return i.jsxs("button",{disabled:Y>=fe,"aria-current":C===M?"step":void 0,onClick:()=>vr(C),children:[i.jsx("span",{"aria-hidden":"true",children:Y<fe?"✓":Y+1}),["Vörur","Upplýsingar","Staðfesting"][Y]]},C)})}),i.jsx("button",{className:"hb-orderIcon","aria-label":"Loka pöntun",onClick:()=>Pe.open(!1),children:"×"})]}),i.jsxs("div",{className:`hb-orderLayout${M!=="products"?" is-details":""}`,children:[M==="products"&&i.jsx("nav",{className:"hb-orderRail","aria-label":"Vöruflokkar",children:Je.map(C=>i.jsxs("button",{"aria-current":He===C.s?"location":void 0,onClick:()=>{j(""),requestAnimationFrame(()=>{var Y;return(Y=document.getElementById(`${v}-group-${C.s}`))==null?void 0:Y.scrollIntoView({block:"start",behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})})},children:[C.t,u.some(Y=>C.items.some(fe=>fe.slug===Y.slug))&&i.jsxs("b",{className:"hb-orderCategoryCount",children:[u.filter(Y=>C.items.some(fe=>fe.slug===Y.slug)).length,i.jsx("span",{className:"hb-orderSr",children:" pantaðar vörur"})]})]},C.s))}),i.jsxs("main",{className:`hb-orderMain${de?" step-leaving":""}`,onScroll:C=>{if(M!=="products")return;const Y=C.currentTarget,fe=Y.getBoundingClientRect().top,Ir=[...Y.querySelectorAll(".hb-orderGroup")].find(Wr=>Wr.getBoundingClientRect().bottom>fe+60);Ir&&Ee(Ir.id.split("-group-")[1])},children:[M!=="receipt"&&i.jsxs("div",{className:"hb-orderIntro",children:[i.jsx("p",{children:"Þetta pöntunarform er eingöngu fyrir fyrirtæki: verslanir, veitingastaði, mötuneyti, hótel og aðra endursöluaðila."}),i.jsxs("p",{children:["Einstaklingar kaupa H-Berg í verslunum."," ",i.jsx("button",{className:"hb-orderLink",onClick:()=>{Pe.open(!1),window.setTimeout(()=>xe.open({k:"hvar"}),0)},children:"Hvar fæst H-Berg?"})]})]}),M==="products"&&i.jsxs(i.Fragment,{children:[!!(be!=null&&be.orders.length)&&i.jsxs("section",{className:"hb-orderRemember","aria-label":"Fyrri pantanir",children:[i.jsx("h3",{children:"Pantað áður"}),i.jsx("ul",{className:"hb-orderPrevious",children:tc({lines:vi(be.orders.flatMap(C=>C.lines))},br.map(C=>C.slug)).map(C=>i.jsxs("li",{children:[i.jsxs("span",{children:[i.jsx("strong",{children:We(C.slug).name.is}),i.jsx("small",{children:Ha(C)})]}),i.jsx("button",{className:"hb-orderLink",onClick:()=>{Pe.set(C.slug,C.magn,C.unit,C.other),X("Vara komin á listann eins og síðast.")},children:"Sama og síðast"})]},C.slug))}),i.jsx("button",{className:"hb-hnappur",onClick:()=>Lt(be.orders[0]),children:"Panta það sama aftur"}),i.jsx("ul",{children:be.orders.map((C,Y)=>i.jsxs("li",{children:[i.jsxs("span",{children:[lc(new Date(C.date),!1)," ","· ",C.lines.length," ",at(C.lines.length,"vara","vörur")]}),i.jsxs("button",{className:"hb-orderLink",onClick:()=>Lt(C),children:["Nota aftur",i.jsxs("span",{className:"hb-orderSr",children:[" ","pöntun frá ",C.date.slice(0,10)]})]})]},`${C.date}-${Y}`))}),i.jsx("button",{className:"hb-orderLink",onClick:Tn,children:"Gleyma mér"})]}),i.jsxs("div",{className:"hb-orderSearch",children:[i.jsx("label",{htmlFor:`${v}-search`,children:"Leita að vöru"}),i.jsxs("div",{className:"hb-orderSearchBox",children:[i.jsx("input",{id:`${v}-search`,type:"search",value:z,onChange:C=>j(C.target.value),placeholder:"Nafn vöru"}),!!z&&i.jsx("button",{className:"hb-orderIcon","aria-label":"Hreinsa leit",onClick:()=>{var C;j(""),(C=document.getElementById(`${v}-search`))==null||C.focus()},children:"×"})]}),i.jsxs("button",{className:"hb-orderFilter","aria-pressed":g,onClick:()=>K(C=>!C),children:[i.jsx("span",{"aria-hidden":"true",children:g?"✓":"+"})," ","Aðeins í pöntun"]}),i.jsxs("button",{ref:c,className:"hb-orderLink","aria-haspopup":"dialog","aria-expanded":H,"aria-controls":`${v}-help`,onClick:()=>re(!0),children:["Hvernig skrifa ég magnið? ",i.jsx("span",{"aria-hidden":"true",children:"ⓘ"})]})]}),!Pn.length&&i.jsxs("div",{className:"hb-orderEmpty",role:"status",children:[i.jsx("h3",{children:"Engin vara fannst"}),i.jsx("p",{children:"Prófaðu annað orð eða skoðaðu allar vörurnar."}),i.jsx("button",{className:"hb-orderLink",onClick:()=>{j(""),K(!1)},children:"Sýna allar vörur"})]}),Pn.map(C=>i.jsxs("section",{id:`${v}-group-${C.s}`,className:"hb-orderGroup",children:[i.jsx("h3",{children:C.t}),i.jsx("ul",{children:C.items.map(Y=>{const fe=u.find(Se=>Se.slug===Y.slug);return i.jsxs("li",{className:`hb-orderRow${fe?" has-order":""}`,style:{"--row-tint":Y.tint},children:[i.jsx("img",{src:dr(Y.slug,"pack","s"),alt:"",width:72,height:80,style:{background:Y.tint},loading:"lazy"}),i.jsxs("div",{className:"hb-orderName",children:[i.jsx("strong",{children:Y.name.is}),(Y.weight||Y.iKassa)&&i.jsxs("small",{children:[Y.weight,Y.iKassa?` · ${Y.iKassa} pokar í kassa`:""]}),i.jsx(Aa,{p:Y}),i.jsx("span",{className:"hb-orderTick","aria-label":fe?"Á pöntunarlista":void 0,children:fe&&i.jsxs("span",{children:["✓"," ",i.jsx("span",{className:"hb-orderSr",children:"Á listanum"})]},fe.slug)})]}),i.jsx(Lc,{p:Y,line:fe,source:`${v}-catalog`})]},Y.slug)})})]},C.s))]}),M==="company"&&i.jsxs("form",{id:`${v}-form`,className:"hb-orderForm",noValidate:!0,onSubmit:ki,children:[i.jsx("button",{type:"button",className:"hb-orderLink",onClick:()=>vr("products"),children:"← Aftur í vörur"}),i.jsx("h3",{children:"Upplýsingar um fyrirtæki"}),i.jsx("p",{children:"Reitir merktir * eru nauðsynlegir."}),i.jsxs("div",{className:"hb-orderFields",children:[Yo.map(C=>i.jsxs("label",{htmlFor:`${v}-${C.key}`,children:[C.label,C.required?" *":"",i.jsx("input",{id:`${v}-${C.key}`,name:C.key,type:C.type||"text",autoComplete:C.auto,inputMode:C.inputMode,required:C.required,min:C.type==="date"?Do():void 0,value:C.key==="kt"?nc(L.kt||""):L[C.key]||"",maxLength:C.key==="kt"?11:void 0,"aria-invalid":!!oe[C.key],"aria-describedby":oe[C.key]?`${v}-${C.key}-error`:void 0,onChange:Y=>{Q(fe=>({...fe,[C.key]:C.key==="kt"?nc(Y.target.value):Y.target.value})),le(fe=>{const Se={...fe};return delete Se[C.key],Se})}}),C.key==="date"&&i.jsx("span",{className:"hb-dateChips",children:Mp(Do()).map(Y=>i.jsx("button",{type:"button","aria-pressed":L.date===Y,onClick:()=>{Q(fe=>({...fe,date:Y})),le(fe=>{const Se={...fe};return delete Se.date,Se})},children:lc(new Date(`${Y}T12:00:00`),!0)},Y))}),C.key==="kt"&&rc(L.kt||"")&&i.jsx("span",{className:"hb-orderValid",children:"✓ Gild kennitala"}),oe[C.key]&&i.jsx("span",{className:"hb-orderError",id:`${v}-${C.key}-error`,role:"alert",children:oe[C.key]})]},C.key)),i.jsxs("label",{className:"hb-orderWide",htmlFor:`${v}-note`,children:["Athugasemd um afhendingu",i.jsx("textarea",{id:`${v}-note`,rows:3,placeholder:"Til dæmis inngangur eða tengiliður við móttöku",value:L.note||"",onChange:C=>Q(Y=>({...Y,note:C.target.value}))})]})]}),i.jsxs("label",{className:"hb-orderCheck",children:[i.jsx("input",{type:"checkbox",checked:me,onChange:C=>{if(we(C.target.checked),!C.target.checked){try{Ho(localStorage)}catch{}Re(null)}}}),"Muna eftir mér á þessu tæki"]}),i.jsx("p",{className:"hb-smatt",children:"Upplýsingar um fyrirtækið og síðustu fimm pantanir eru vistaðar í þessum vafra ef þú velur að muna eftir þér."}),be&&i.jsx("button",{type:"button",className:"hb-orderLink",onClick:Tn,children:"Gleyma mér"}),i.jsx("p",{children:"Pöntunin opnast í tölvupóstforritinu þínu. Þar sendir þú hana til pantanir@hberg.is."}),i.jsx("button",{className:"hb-hnappur",type:"submit",children:"Opna pöntun í tölvupósti"})]}),M==="receipt"&&i.jsxs("section",{className:"hb-orderReceipt",children:[i.jsx("span",{"aria-hidden":"true",children:"✓"}),i.jsx("h3",{children:"Takk fyrir pöntunina"}),i.jsx("p",{children:"Pöntunin er tilbúin í tölvupóstforritinu þínu. Mundu að senda póstinn. H-Berg staðfestir magn, pakkningar og afhendingu þegar pöntunin berst."}),i.jsx("p",{children:"Ef tölvupóstforritið opnaðist ekki geturðu opnað póstinn aftur eða afritað textann hér fyrir neðan."}),i.jsx("a",{className:"hb-hnappur",href:`mailto:pantanir@hberg.is?subject=${encodeURIComponent("Pöntun til H-Berg")}&body=${encodeURIComponent(W)}`,children:"Opna tölvupóst aftur"}),i.jsxs("div",{className:"hb-orderReceiptActions",children:[i.jsx("button",{className:"hb-orderLink",onClick:()=>window.print(),children:"Prenta"}),i.jsx("button",{className:"hb-orderLink",onClick:async()=>{try{await navigator.clipboard.writeText(W),X("Pöntun afrituð.")}catch{X("Opnaðu texta pöntunar hér fyrir neðan til að afrita.")}},children:"Afrita pöntun"})]}),i.jsxs("div",{className:"hb-orderReceiptSlip",children:[i.jsx("h4",{children:"Pöntun til H-Berg"}),i.jsxs("dl",{children:[[...Yo,{key:"note",label:"Athugasemd um afhendingu"}].map(C=>i.jsxs("div",{children:[i.jsx("dt",{children:C.label}),i.jsx("dd",{children:V.company[C.key]||"Ekki tilgreint"})]},C.key)),V.note&&i.jsxs("div",{children:[i.jsx("dt",{children:"Óskir um pöntun"}),i.jsx("dd",{children:V.note})]})]}),i.jsx("ul",{children:V.lines.map(C=>i.jsxs("li",{children:[i.jsx("strong",{children:zc(We(C.slug))}),i.jsx("span",{children:Ha(C)})]},C.slug))})]}),i.jsxs("details",{children:[i.jsx("summary",{children:"Texti pöntunar til að afrita"}),i.jsx("pre",{children:W})]}),i.jsx("button",{className:"hb-orderLink",onClick:()=>vr("company"),children:"← Aftur í upplýsingar"}),i.jsx("button",{className:"hb-orderLink",onClick:()=>{Pe.clear(),D(""),Z(""),vr("products")},children:"Ný pöntun"})]})]},M),M!=="receipt"&&i.jsxs("aside",{className:`hb-orderSlip${P?" expanded":""}`,"aria-label":"Pöntunin þín",children:[i.jsxs("button",{className:"hb-orderBar","aria-expanded":P,"aria-controls":`${v}-slip`,onClick:()=>O(C=>!C),children:["Pöntun · ",u.length," ",at(u.length,"vara","vörur")," ",i.jsx("span",{"aria-hidden":"true",children:P?"⌄":"⌃"})]}),i.jsx("div",{className:"hb-orderSlipBody",children:i.jsxs("div",{id:`${v}-slip`,className:"hb-orderSlipInner",children:[i.jsxs("div",{className:"hb-orderSlipTitle",children:[i.jsx("h3",{children:"Pöntunin þín"}),i.jsx("button",{className:"hb-orderIcon",disabled:!u.length,"aria-label":"Hreinsa pöntun",title:"Hreinsa pöntun",onClick:()=>R(!0),children:i.jsx(Fc,{})})]}),q&&i.jsxs("div",{className:"hb-orderConfirm",children:[i.jsx("p",{children:"Hreinsa alla pöntunina?"}),i.jsx("button",{className:"hb-orderLink",onClick:()=>{G(u.map(C=>({...C}))),Pe.clear(),R(!1),X("Pöntun hreinsuð.")},children:"Hreinsa pöntun"}),i.jsx("button",{className:"hb-orderLink",onClick:()=>R(!1),children:"Hætta við"})]}),!u.length&&i.jsx("p",{children:"Listinn er tómur. Skrifaðu magn við vörurnar sem þú vilt panta."}),i.jsx("div",{className:"hb-orderSummaryGroups",children:Je.map(C=>{const Y=u.filter(fe=>C.items.some(Se=>Se.slug===fe.slug));return i.jsxs("section",{children:[i.jsx("h4",{children:C.t}),i.jsx(_p,{lines:Y,source:`${v}-slip`,remove:Cn})]},C.s)})}),i.jsx("p",{className:"hb-orderTotals",children:Fp(u)}),M==="products"&&i.jsxs("label",{className:"hb-orderNote",htmlFor:`${v}-order-note`,children:["Eitthvað sérstakt við pöntunina?",i.jsx("textarea",{id:`${v}-order-note`,rows:3,maxLength:2e3,value:$,placeholder:"Til dæmis hafið samband ef vara er ekki til",onChange:C=>Z(C.target.value)})]}),M==="company"&&$&&i.jsxs("p",{className:"hb-orderNotePreview",children:[i.jsx("strong",{children:"Óskir um pöntun"}),$]}),i.jsxs("div",{className:"hb-orderNotice",role:"status",children:[_,A&&i.jsx("button",{className:"hb-orderLink",onClick:()=>{Pe.replace([...u,...A.filter(C=>!u.some(Y=>Y.slug===C.slug))]),G(null),X("Pöntun endurheimt.")},children:"Afturkalla"})]}),i.jsx("button",{className:"hb-hnappur",disabled:!u.length,onClick:()=>vr(M==="company"?"products":"company"),children:M==="company"?"Breyta vörum":"Áfram í upplýsingar"}),!u.length&&i.jsx("p",{className:"hb-smatt",children:"Veldu vörur til að halda áfram."})]})})]})]}),i.jsxs("footer",{className:"hb-orderFooter",children:[M!=="receipt"&&i.jsxs("button",{type:"button",className:"hb-orderFootCount","aria-expanded":P,"aria-controls":`${v}-slip`,onClick:()=>O(C=>!C),children:["Pöntun · ",u.length," ",at(u.length,"vara","vörur")," ",i.jsx("span",{"aria-hidden":"true",children:P?"⌄":"⌃"})]}),i.jsx("span",{className:"hb-orderFootHint",children:M==="products"?"Veldu magn og pakkningu":M==="company"?"H-Berg staðfestir pöntunina þegar hún berst":"Mundu að senda tölvupóstinn"}),i.jsx("button",{className:"hb-orderLink hb-orderFootClose",onClick:()=>Pe.open(!1),children:"Loka"}),M==="products"&&i.jsx("button",{className:"hb-hnappur",disabled:!u.length,onClick:()=>vr("company"),children:"Áfram"})]}),M==="receipt"&&_&&i.jsx("p",{role:"status",children:_}),je&&i.jsx("div",{"aria-hidden":!H,ref:C=>C==null?void 0:C.toggleAttribute("inert",!H),className:`hb-orderHelpBack${H?" on":""}`,onClick:C=>{var Y;C.target===C.currentTarget&&(re(!1),(Y=c.current)==null||Y.focus())},children:i.jsxs("div",{id:`${v}-help`,className:"hb-orderHelp",role:"dialog","aria-modal":"true","aria-labelledby":`${v}-help-title`,ref:w,tabIndex:-1,children:[i.jsx("button",{className:"hb-orderIcon","aria-label":"Loka magnhjálp",onClick:()=>{var C;re(!1),(C=c.current)==null||C.focus()},children:"×"}),i.jsx("h3",{id:`${v}-help-title`,children:"Hvernig skrifa ég magnið?"}),i.jsx("p",{children:"Skrifaðu fjöldann í reitinn og veldu einingu við hliðina."}),i.jsxs("ul",{children:[i.jsx("li",{children:"Pokar: fjöldi neytendapakkninga, þyngd birtist þegar hún er þekkt."}),i.jsx("li",{children:"Kassar: fjöldi heilla kassa, fjöldi í kassa staðfestur við pöntun."}),i.jsx("li",{children:"Stærri pakkning: aðeins í boði þegar stærð er staðfest."}),i.jsx("li",{children:"Annað: skrifaðu hvernig þú vilt fá vöruna í textareitinn."})]}),i.jsx("p",{children:"Pakkningar eru mismunandi eftir vörum. Þyngd birtist þegar hún er þekkt. H-Berg staðfestir pakkningar og fjölda poka í kassa þegar pöntunin berst."})]})})]})]})}function _p({lines:o,source:u,remove:s}){const[h,p]=S.useState(o),x=JSON.stringify(o);return S.useEffect(()=>{p(w=>[...o,...w.filter(c=>!o.some(v=>v.slug===c.slug))]);const k=setTimeout(()=>p(o),window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:ye.ui);return()=>clearTimeout(k)},[x]),i.jsx("ul",{className:"hb-orderLines",children:h.map(k=>{const w=We(k.slug),c=!o.some(v=>v.slug===k.slug);return i.jsx("li",{className:`hb-summaryPresence${c?" exiting":""}`,ref:v=>v==null?void 0:v.toggleAttribute("inert",c),"aria-hidden":c||void 0,children:i.jsx("div",{className:"hb-summaryClip",children:i.jsxs("div",{className:"hb-summaryRow",children:[i.jsx("img",{src:dr(w.slug,"pack","s"),alt:"",width:40,height:48,style:{background:w.tint}}),i.jsxs("div",{children:[i.jsx("strong",{children:w.name.is}),i.jsx("small",{children:Ha(k)})]}),i.jsx("button",{className:"hb-orderIcon","aria-label":`Fjarlægja ${w.name.is}`,onClick:()=>s(k.slug),children:i.jsx(Fc,{})}),i.jsx(Lc,{p:w,line:k,source:u})]})})},k.slug)})})}const Kp={pappirHreint:"#FAF5EA"},Er=()=>{var o;return typeof window<"u"&&((o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)").matches)===!0},Da=()=>{var o;return typeof window<"u"&&((o=window.matchMedia)==null?void 0:o.call(window,"(hover: hover) and (pointer: fine)").matches)===!0},Zo=()=>typeof window<"u"&&window.innerWidth<=991,Mc=()=>typeof window<"u"&&window.innerWidth<=479,Rt=o=>`./hberg/fonts/${o}`,oc=[["--c-bg","#FAF5EA"],["--c-el","#F1E8D6"],["--c-el2","#E8DABC"],["--c-el3","#DBC8A0"],["--c-ink","#172D4D"],["--c-ink-med","rgba(23,45,77,.6)"],["--c-ink-max","rgba(23,45,77,.4)"],["--c-btn","#172D4D"],["--c-btn-t","#FAF5EA"],["--c-btn2","#FFFDF8"],["--c-btn2-t","#172D4D"],["--c-form","#FFFDF8"],["--c-rautt","#204A8E"],["--c-lina","rgba(23,45,77,.14)"]],Wo=typeof window<"u"&&new URLSearchParams(window.location.search).get("letur")==="gamalt";if(typeof document<"u"&&!Wo)for(const o of["YoungSerif-latin","InstrumentSans-latin"]){const u=Rt(`ys/${o}.woff2`);if(!document.head.querySelector(`link[data-hb-font="${o}"]`)){const s=document.createElement("link");s.rel="preload",s.as="font",s.type="font/woff2",s.crossOrigin="anonymous",s.href=u,s.dataset.hbFont=o,document.head.appendChild(s)}}const Vp=`
/* Young Serif has one weight: the 100 to 900 range stops faux bold on 600 to 800 headings. */
@font-face{font-family:'HB Young';src:url('${Rt("ys/YoungSerif-latin.woff2")}') format('woff2');font-weight:100 900;font-style:normal;font-display:swap;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'HB Young';src:url('${Rt("ys/YoungSerif-latin-ext.woff2")}') format('woff2');font-weight:100 900;font-style:normal;font-display:swap;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,U+2020,U+20A0-20AB,U+20AD-20C4,U+2113}
@font-face{font-family:'HB Instrument';src:url('${Rt("ys/InstrumentSans-latin.woff2")}') format('woff2');font-weight:400 700;font-style:normal;font-display:swap;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'HB Instrument';src:url('${Rt("ys/InstrumentSans-latin-ext.woff2")}') format('woff2');font-weight:400 700;font-style:normal;font-display:swap;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,U+2020,U+20A0-20AB,U+20AD-20C4,U+2113}

@font-face{font-family:'HB Bricolage';src:url('./hberg/fonts/bricolage-latin.woff2') format('woff2');
  font-weight:200 800;font-stretch:75% 100%;font-style:normal;font-display:swap;
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'HB Bricolage';src:url('./hberg/fonts/bricolage-latinext.woff2') format('woff2');
  font-weight:200 800;font-style:normal;font-display:swap;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,U+2020,U+20A0-20AB,U+20AD-20C4,U+2113}
@font-face{font-family:'HB General';src:url('${Rt("GeneralSans-Regular.woff2")}') format('woff2');
  font-weight:400;font-style:normal;font-display:swap}
@font-face{font-family:'HB General';src:url('${Rt("GeneralSans-Medium.woff2")}') format('woff2');
  font-weight:500;font-style:normal;font-display:swap}
@font-face{font-family:'HB General';src:url('${Rt("GeneralSans-Semibold.woff2")}') format('woff2');
  font-weight:600;font-style:normal;font-display:swap}

${oc.map(([o,u])=>`@property ${o}{syntax:'<color>';inherits:true;initial-value:${u}}`).join(`
`)}


.hb-root{
  ${oc.map(([o,u])=>`${o}:${u};`).join(" ")}
  --c-gull:#BEA458; --c-hdr:#FFFDF8; --c-hdr-t:#172D4D;
  --c-flotur:var(--c-el);
  --ease:cubic-bezier(.17,.17,0,1);
  --ease-popup:cubic-bezier(.6,0,0,1);
  --ease-cas:cubic-bezier(.2,0,.1,1);
  --f-disp:${Wo?"'HB Bricolage',system-ui,sans-serif":"'HB Young',Georgia,serif"};
  
  --gut:clamp(0.5rem,2.0833vw,2.5rem);
  --gap:clamp(3rem,22.2222vh,9rem);
  --band:var(--gap);
  --col:clamp(0.5rem,1.0417vw,2.5rem);
  background:var(--c-bg); color:var(--c-ink);
  font-family:${Wo?"'HB General'":"'HB Instrument'"},system-ui,sans-serif;font-synthesis:none;
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
`;function Jp(o=12e3){S.useEffect(()=>{const u=window.setTimeout(()=>{var s;(s=document.querySelector(".hb-root"))==null||s.classList.add("hb-allt")},o);return()=>window.clearTimeout(u)},[o])}function qp(o="0px 0px -12% 0px",u=!1){const s=S.useRef(null);return S.useEffect(()=>{const h=s.current;if(!h)return;if(Er()){h.classList.add("on");return}if(u&&Mc()){const x=[...h.children],k=new IntersectionObserver(w=>{w.forEach(c=>{c.isIntersecting&&(c.target.classList.add("on"),k.unobserve(c.target))})},{rootMargin:o,threshold:0});return x.forEach(w=>k.observe(w)),()=>k.disconnect()}const p=new IntersectionObserver(([x])=>{x.isIntersecting&&(h.classList.add("on"),p.disconnect())},{rootMargin:o,threshold:0});return p.observe(h),()=>p.disconnect()},[o,u]),s}function cr({as:o="div",className:u="",children:s,style:h,hver:p=!1,margin:x,id:k}){const w=qp(x,p);return i.jsx(o,{ref:w,id:k,className:`${u}${p?" hb-hver":""}`,style:h,children:s})}const sc=()=>!Da(),Ft=()=>window.__hbLenis;function Yp(){S.useEffect(()=>{if(Er()||sc())return;let o=!0,u=0,s=null;return vc(async()=>{const{default:h}=await import("./lenis-niKyKZQP.js");return{default:h}},[],import.meta.url).then(({default:h})=>{if(!o||(s=sc()?null:new h({duration:3,smoothWheel:!0,gestureOrientation:"vertical",allowNestedScroll:!0}),!s))return;s.scrollTo(0,{immediate:!0}),window.__hbLenis=s,document.querySelector(".hb-root.hb-hled")&&s.stop();let p=0;const x=z=>{u=0,s&&(s.raf(z),p=s.isScrolling?0:p+1,p<20&&!u&&(u=requestAnimationFrame(x)))},k=()=>{p=0,!u&&o&&(u=requestAnimationFrame(x))},w=s,c=w.scrollTo.bind(w),v=w.start.bind(w);w.scrollTo=(z,j)=>{c(z,j),k()},w.start=()=>{v(),k()},w.on("virtual-scroll",k),w.on("scroll",k),k()}),()=>{o=!1,cancelAnimationFrame(u),s==null||s.destroy(),delete window.__hbLenis}},[])}const Dr=o=>({"--d":`${(o*.12).toFixed(2)}s`});function $a({text:o,className:u="",tag:s="h2",hold:h=0,id:p}){const x=o.split(" | ");return i.jsx(s,{className:u,id:p,children:x.map((k,w)=>i.jsx("span",{className:"hb-mask",children:i.jsx("span",{className:"hb-up hb-lina",style:{"--d":`${(h+w*.12).toFixed(2)}s`},children:k})},k+w))})}function Oc({children:o}){return i.jsx("p",{className:"hb-merki",children:i.jsx("span",{className:"hb-mask",children:i.jsx("span",{className:"hb-up",children:o})})})}function lt({t:o}){const u=[...o],s=Math.max(1,u.length),p=.15*(s>=5?1:Math.min(.8,Math.max(.45,s/5)))/s,x=u.map((k,w)=>i.jsx("span",{style:{"--i":w},children:k===" "?" ":k},w));return i.jsxs("span",{className:"hb-cas",style:{"--cd":"var(--motion-reveal)","--cs":`${p.toFixed(4)}s`},children:[i.jsx("span",{className:"hb-casL",children:x}),i.jsx("span",{className:"hb-casL","aria-hidden":"true",children:x})]})}function Wp(){const o=S.useRef(null),[u,s]=S.useState(""),[h,p]=S.useState(!1),[x,k]=S.useState(!1);return S.useEffect(()=>{if(!Da()||Er())return;const w=o.current;if(!w)return;let c=-200,v=-200,z=-200,j=-200,M=0,E=0,P=!1;const O=()=>{z+=(c-z)*.18,j+=(v-j)*.18,w.style.transform=`translate3d(${z.toFixed(1)}px,${j.toFixed(1)}px,0)`,M=Math.abs(c-z)>.3||Math.abs(v-j)>.3?requestAnimationFrame(O):0},H=()=>{var L,Q;if(!P)return;const X=(Q=(L=document.elementFromPoint(c,v))==null?void 0:L.closest)==null?void 0:Q.call(L,"[data-bendill]");s((X==null?void 0:X.dataset.bendill)??"")},re=X=>{var Q,oe;c=X.clientX,v=X.clientY,P||(z=c,j=v,P=!0),k(!0),M||(M=requestAnimationFrame(O));const L=(oe=(Q=X.target)==null?void 0:Q.closest)==null?void 0:oe.call(Q,"[data-bendill]");s((L==null?void 0:L.dataset.bendill)??"")},q=()=>{requestAnimationFrame(()=>requestAnimationFrame(H)),window.clearTimeout(E),E=window.setTimeout(H,120)},R=()=>{p(!0),window.setTimeout(()=>p(!1),200)},A=X=>{X.relatedTarget||(k(!1),s(""))},G=document.querySelector(".hb-root"),_=G?new MutationObserver(()=>{G.classList.contains("hb-laest")||H()}):null;return G&&_&&_.observe(G,{attributes:!0,attributeFilter:["class"]}),document.addEventListener("mouseout",A),window.addEventListener("pointermove",re,{passive:!0}),window.addEventListener("scroll",q,{passive:!0}),window.addEventListener("pointerdown",R,{passive:!0}),()=>{window.removeEventListener("pointermove",re),window.removeEventListener("scroll",q),window.removeEventListener("pointerdown",R),cancelAnimationFrame(M),window.clearTimeout(E),document.removeEventListener("mouseout",A),_==null||_.disconnect()}},[]),i.jsxs("div",{className:`hb-bendill${u?" stor":""}${h?" yta":""}${x?" syn":""}`,ref:o,"aria-hidden":"true",children:[i.jsx("i",{}),i.jsx("b",{children:u})]})}const Gp=()=>i.jsx("svg",{width:"9",height:"6",viewBox:"0 0 9 6","aria-hidden":"true",children:i.jsx("path",{d:"M1 1l3.5 3.5L8 1",fill:"none",stroke:"currentColor",strokeWidth:"1.3"})}),uc=[{t:"Vörur",id:"vorur",rows:[{h:"#linur",t:"Allar vörulínur",d:"Hnetur, ávextir, fræ og hnetusmjör"},{h:"#allar-vorur",t:"Hnetur og ávextir",d:"Tegundir og innihald"},{h:"#ofnaemi",t:"Ofnæmisvaldar",d:"Skoðaðu innihaldið"},{h:"?naering=1",t:"Næringargildi",d:"Allar vörur í einni töflu",fn:()=>xe.open({k:"naering"})},{h:"#hvar",t:"Hvar fæst H-Berg",d:"Söluaðilar H-Berg",fn:()=>xe.open({k:"hvar"})}]},{t:"H-Berg",id:"hberg",rows:[{h:"#poki",t:"Pöntun fyrir verslanir",d:"Pöntunarlisti fyrir fyrirtæki",poki:!0},{h:"#staerra",t:"Stærri pakkningar",d:"Fyrir matvælafyrirtæki og stóreldhús",fn:()=>xe.open({k:"staerra"})},{h:"#um",t:"Um okkur",d:"Fjölskyldufyrirtæki frá 2007"},{h:"#saga",t:"Gamalt og nýtt"},{h:"#spurt",t:"Spurt og svarað"}]}],jn={h:"#erindi",t:"Hafa samband"};function qr(o){const u=document.querySelector(o);if(!u)return;const s=document.querySelector(".hb-haus"),h=Zo()?-(((s==null?void 0:s.getBoundingClientRect().height)??60)+12):-24,p=Ft();p?p.scrollTo(u,{offset:h}):window.scrollTo({top:u.getBoundingClientRect().top+window.scrollY+h,behavior:Er()?"auto":"smooth"});const x=new URL(window.location.href);x.hash=o,history.replaceState(null,"",x)}function Qp(){const[o,u]=S.useState(null),s=S.useRef(null),h=S.useRef(0),p=o==="valmynd";S.useEffect(()=>{if(!o)return;const c=z=>{var M,E;if(z.key!=="Escape")return;const j=o;u(null),(E=(M=s.current)==null?void 0:M.querySelector(`[aria-controls="hb-fell-${j}"],.hb-braud`))==null||E.focus()},v=z=>{var j;(j=s.current)!=null&&j.contains(z.target)||u(null)};return window.addEventListener("keydown",c),window.addEventListener("pointerdown",v),()=>{window.removeEventListener("keydown",c),window.removeEventListener("pointerdown",v)}},[o]),S.useEffect(()=>{const c=()=>{var z,j;const v=(z=s.current)==null?void 0:z.getBoundingClientRect().height;v&&((j=document.querySelector(".hb-root"))==null||j.style.setProperty("--haus-h",`${Math.round(v)}px`))};return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]);const x=(c,v)=>{c.preventDefault();const z=Zo();if(u(null),v.poki){const j={detail:c.detail,currentTarget:c.currentTarget};window.setTimeout(()=>Pe.open(!0,j),z?400:0);return}if(v.fn){window.setTimeout(v.fn,z?400:0);return}window.setTimeout(()=>qr(v.h),z?400:0)},k=c=>{Da()&&(window.clearTimeout(h.current),u(c))},w=()=>{Da()&&(window.clearTimeout(h.current),h.current=window.setTimeout(()=>u(c=>c==="valmynd"?c:null),180))};return i.jsxs("header",{ref:s,className:`hb-haus${p?" opin":""}`,children:[i.jsx("a",{className:"hb-merkid",href:"#top","aria-label":"H-Berg, á forsíðu",onClick:c=>{c.preventDefault(),u(null);const v=Ft();v?v.scrollTo(0):window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})},children:i.jsx("img",{src:`./hberg/brand/logo.svg${gr}`,alt:"H-Berg",width:460,height:212,decoding:"async"})}),i.jsxs("div",{className:"hb-hausH",children:[i.jsxs("nav",{className:"hb-nav","aria-label":"Aðalvalmynd",children:[uc.map(c=>i.jsxs("div",{className:"hb-navH",onPointerEnter:()=>k(c.id),onPointerLeave:w,children:[i.jsxs("button",{className:"hb-navL","aria-expanded":o===c.id,"aria-controls":`hb-fell-${c.id}`,onClick:v=>{u(o===c.id?null:c.id);const z=v.detail===0;window.setTimeout(()=>{var M;const j=document.getElementById(`hb-fell-${c.id}`);(M=z?j==null?void 0:j.querySelector("a"):j)==null||M.focus({preventScroll:!0})},30)},children:[c.t,i.jsx(Gp,{})]}),i.jsx("div",{id:`hb-fell-${c.id}`,tabIndex:-1,className:`hb-fell${o===c.id?" opid":""}`,children:i.jsx("div",{className:"hb-fellInner",children:c.rows.map(v=>i.jsxs("a",{href:v.h,tabIndex:o===c.id?0:-1,onClick:z=>x(z,v),children:[v.t,v.d?i.jsx("small",{children:v.d}):null]},v.h))})})]},c.id)),i.jsx("a",{className:"hb-navL hb-casH",href:jn.h,onClick:c=>x(c,jn),children:i.jsx(lt,{t:jn.t})})]}),i.jsx(Dp,{}),i.jsx("button",{className:"hb-braud","aria-expanded":p,"aria-controls":"hb-valPan","aria-label":p?"Loka valmynd":"Opna valmynd",onClick:c=>{if(u(p?null:"valmynd"),!p){const v=c.detail===0;window.setTimeout(()=>{var j;const z=document.getElementById("hb-valPan");(j=v?z==null?void 0:z.querySelector("a"):z)==null||j.focus({preventScroll:!0})},30)}},children:i.jsxs("span",{children:[i.jsx("i",{}),i.jsx("i",{}),i.jsx("i",{})]})}),i.jsx("div",{className:"hb-panK",children:i.jsxs("div",{id:"hb-valPan",tabIndex:-1,className:`hb-pan hb-valPan${p?" opid":""}`,children:[i.jsxs("div",{className:"hb-valKort",children:[i.jsxs("a",{href:"#vorur",onClick:c=>x(c,{h:"#vorur"}),children:[i.jsx("img",{src:`${En}hberg/laus/p00.webp${gr}`,alt:"",width:128,height:128,style:{height:64,width:"auto"}}),"Hnetur"]}),i.jsxs("a",{href:"#vorur",onClick:c=>x(c,{h:"#vorur"}),children:[i.jsx("img",{src:`${En}hberg/laus/p06.webp${gr}`,alt:"",width:128,height:128,style:{height:64,width:"auto"}}),"Ávextir"]})]}),uc.map((c,v)=>i.jsxs("div",{children:[i.jsx("p",{className:"hb-valHop",children:c.t}),i.jsx("div",{className:"hb-valRod",children:c.rows.map((z,j)=>i.jsx("a",{href:z.h,tabIndex:p?0:-1,style:{"--i":v*4+j},onClick:M=>x(M,z),children:i.jsx("span",{children:z.t})},z.h))})]},c.id)),i.jsx("div",{className:"hb-valRod",style:{marginTop:".9rem"},children:i.jsx("a",{href:jn.h,tabIndex:p?0:-1,style:{"--i":11},onClick:c=>x(c,jn),children:i.jsx("span",{children:jn.t})})}),i.jsx("button",{className:"hb-btn stor",tabIndex:p?0:-1,onClick:()=>{u(null),window.setTimeout(()=>Pe.open(!0),400)},children:"Opna pöntunarlistann"})]})})]})]})}const Ma=ye.reveal,Xp=`
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
`,Zp=()=>{var o;return((o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)").matches)===!0};function ef(){const[o,u]=S.useState(()=>typeof window>"u"?!1:Zp()),[s,h]=S.useState(!1);return S.useEffect(()=>{var R,A;if(o)return;const p=document.querySelector(".hb-root"),x=document.querySelector(".hb-plota"),k=document.querySelector(".hb-heroP"),w=document.querySelector(".hb-haus");if(!p||!x||!k){u(!0);return}p.classList.add("hb-hled","hb-hledB0","hb-laest");const c=[],v=[];let z=!1;const j=()=>{var G,_;z||(z=!0,c.forEach(X=>{try{X.finish(),X.cancel()}catch{}}),v.forEach(X=>window.clearTimeout(X)),p.classList.remove("hb-hled","hb-hledB0","hb-hledU","hb-laest"),k.style.transform="",w&&(w.style.transform=""),p.querySelectorAll('.hb-hero .hb-up, .hb-hero [class*="hb-"]').forEach(X=>X.classList.add("on")),(G=Ft())==null||G.start(),(_=Ft())==null||_.resize(),u(!0))},M=()=>{if(z)return;const G=!Zo();c.push(x.animate([{transform:"translateY(100%)"},{transform:"translateY(0)"}],{duration:ye.reveal,easing:ye.emphasis,fill:"forwards"})),h(!0),v.push(window.setTimeout(()=>{p.classList.remove("hb-hledB0"),p.classList.add("hb-hledU");const _=[{transform:"translateY(100vh)",easing:ye.emphasis},{transform:"translateY(31.9vh)",offset:1/3,easing:ye.out},{transform:"translateY(0)"}];c.push(k.animate(_,{duration:ye.reveal,fill:"forwards"})),G&&w&&c.push(w.animate(_,{duration:ye.reveal,fill:"forwards"}))},Ma)),v.push(window.setTimeout(()=>{p.classList.remove("hb-hled"),p.querySelectorAll(".hb-hero .hb-heroT, .hb-hero .hb-rist").forEach(_=>_.classList.add("on"))},Ma+ye.fast)),v.push(window.setTimeout(()=>{var _;p.classList.remove("hb-laest"),(_=Ft())==null||_.start()},Ma+ye.reveal)),v.push(window.setTimeout(j,Ma+ye.reveal+ye.fast))};(R=Ft())==null||R.stop();const E=[...p.querySelectorAll(".hb-hero img")],P=Promise.all([((A=document.fonts)==null?void 0:A.ready)??Promise.resolve(),...E.map(G=>G.complete?Promise.resolve():new Promise(_=>{G.addEventListener("load",_,{once:!0}),G.addEventListener("error",_,{once:!0})}))]),O=new Promise(G=>window.setTimeout(G,1200));Promise.race([P,O]).then(M);const H=window.setTimeout(j,12e3),re=()=>{document.hidden&&j()},q=G=>{G.persisted&&j()};return document.addEventListener("visibilitychange",re),window.addEventListener("pageshow",q),()=>{var G;z=!0,window.clearTimeout(H),v.forEach(_=>window.clearTimeout(_)),c.forEach(_=>_.cancel()),p.classList.remove("hb-hled","hb-hledB0","hb-hledU","hb-laest"),document.removeEventListener("visibilitychange",re),window.removeEventListener("pageshow",q),(G=Ft())==null||G.start()}},[]),o?null:i.jsx("div",{className:`hb-plota${s?" inn":""}`,"aria-hidden":"true",children:i.jsx("div",{className:"hb-plotaM",children:i.jsx("img",{src:`./hberg/brand/logo.svg${gr}`,alt:"",width:820,height:378})})})}const dc=Array.from({length:40},(o,u)=>({src:`${En}hberg/laus/p${String(u).padStart(2,"0")}.webp${gr}`,w:1,h:1,n:"",k:"laus"})),cc=(o,u,s)=>{const h=[],p=o.slice(0,u);for(let x=0;x<s;x++)p.length&&x%Math.ceil(s/p.length)===0&&h.push(p.shift()),h.push(dc[x*7%dc.length]);return h.concat(p)},hc=["mondlur","heslihnetur-med-sukkuladi-afrit","graskersfrae-2","kajuhnetur-heilarristadar","aprikosur-2","dodlur-2","hnetusmjor","tronuber-2","valhnetukjarnar","fikjur-2","kasjusmjor","kasjusmjor-2","pistasiur"],mc=br.filter(o=>{var u;return((u=$o[o.slug])==null?void 0:u.pack)&&["hnetur","avextir"].some(s=>o.tags.includes(s))}).sort((o,u)=>{const s=hc.indexOf(o.slug),h=hc.indexOf(u.slug);return(s<0?99:s)-(h<0?99:h)}).map(o=>{const[u,s]=$o[o.slug].pack;return{src:o.slug,w:u,h:s,n:o.name.is,k:u/s>1.8?"stong":"poki"}}),rf=`
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
`,tf=()=>{var o;return((o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)").matches)===!0},Hc=()=>{var o;return((o=window.matchMedia)==null?void 0:o.call(window,"(hover: hover) and (pointer: fine)").matches)===!0};function nf(){const o=S.useRef(null),[u,s]=S.useState(!1);return S.useEffect(()=>{const h=o.current;if(!h)return;const p=new IntersectionObserver(([x])=>{x.isIntersecting&&(s(!0),p.disconnect())},{rootMargin:"100% 0px 100% 0px"});return p.observe(h),()=>p.disconnect()},[]),S.useEffect(()=>{if(!u)return;const h=o.current;if(!h)return;let p=!0,x=0,k=()=>{};return vc(()=>import("./matter-OMF4MZ3z.js").then(w=>w.m),[],import.meta.url).then(w=>{if(!p||!o.current)return;const c=w.default??w,{Engine:v,Bodies:z,Composite:j,Body:M,Sleeping:E}=c,P=h.clientWidth,O=h.clientHeight,H=P<640,re=Math.max(58,Math.min(118,P/(H?5.6:12.5))),q=H?cc(mc,0,54):cc(mc,0,120),R=v.create({enableSleeping:!0});R.gravity.y=1.15;const A=200;j.add(R.world,[z.rectangle(P/2,O+A/2,P*3,A,{isStatic:!0,friction:.9}),z.rectangle(-A/2,O/2-O,A,O*4,{isStatic:!0}),z.rectangle(P+A/2,O/2-O,A,O*4,{isStatic:!0})]);const G=[],_=[];q.forEach((D,V)=>{const b=D.k==="laus",g=D.k==="stong",K=b?re*(.42+Math.random()*.16):g?re*1.55:D.k==="egg"?re*.62:D.w/D.h*re*1.3,$=b?K:g||D.k==="egg"?K*(D.h/D.w):re*1.3,Z=b?P*(.3+.4*Math.random()):K/2+V*.618%1*(P-K),de=-$-V*(re*(b?.22:.55))-Math.random()*re,pe=b?z.circle(Z,de,K*.4,{restitution:.32,friction:.4,frictionAir:.01,density:.0016,angle:Math.random()*6.28}):z.rectangle(Z,de,K,$,{chamfer:{radius:Math.min(K,$)*.12},restitution:D.k==="stong"?.18:.28,friction:.6,frictionAir:.012,density:.0012,angle:(Math.random()-.5)*.9});M.setAngularVelocity(pe,(Math.random()-.5)*(b?.2:.08)),_.push(pe);const ce=document.createElement("img");ce.src=b?D.src:dr(D.src,"pack","s"),b&&(ce.className="laus"),ce.alt="",ce.decoding="async",ce.width=Math.round(K),ce.height=Math.round($),ce.style.width=`${K}px`,ce.style.height=`${$}px`,ce.style.transform="translate3d(-999px,-999px,0)",h.appendChild(ce),G.push(ce)});const X=()=>{for(let D=0;D<_.length;D++){const V=_[D],b=G[D];b.style.transform=`translate3d(${(V.position.x-b.width/2).toFixed(1)}px,${(V.position.y-b.height/2).toFixed(1)}px,0) rotate(${V.angle.toFixed(3)}rad)`}};if(tf()){j.add(R.world,_);for(let D=0;D<1400;D++)v.update(R,1e3/60);X(),k=()=>{G.forEach(D=>D.remove()),v.clear(R)};return}let L=0,Q=!1,oe=0,le=0;const me=()=>{var D;oe>=_.length||(j.add(R.world,_[oe]),oe++,le=window.setTimeout(me,((D=q[oe])==null?void 0:D.k)==="laus"?H?34:26:H?110:85))},we=new IntersectionObserver(([D])=>{Q=D.isIntersecting,Q&&oe===0&&me(),Q&&!x&&(x=requestAnimationFrame(Re))},{threshold:.35});we.observe(h);let be=performance.now();const Re=D=>{const V=Math.min(32,D-be);be=D,v.update(R,V),X(),L=oe===_.length&&_.every(g=>g.isSleeping)?L+1:0,x=Q&&L<30?requestAnimationFrame(Re):0},He=()=>{!x&&Q&&(be=performance.now(),x=requestAnimationFrame(Re))},Ee=D=>{const V=h.getBoundingClientRect();return{x:D.clientX-V.left,y:D.clientY-V.top}},W=[];if(Hc()){h.classList.add("grip");let D=null;const V=K=>{const $=Ee(K),Z=c.Query.point(_,$)[0];if(!Z)return;K.preventDefault(),h.setPointerCapture(K.pointerId),E.set(Z,!1);const de=$.x-Z.position.x,pe=$.y-Z.position.y,ce=Math.cos(-Z.angle),je=Math.sin(-Z.angle);D=c.Constraint.create({pointA:$,bodyB:Z,pointB:{x:de*ce-pe*je,y:de*je+pe*ce},stiffness:.12,damping:.08,length:0}),j.add(R.world,D),h.classList.add("held"),He()},b=K=>{D&&(D.pointA=Ee(K),He())},g=()=>{D&&(j.remove(R.world,D),D=null,h.classList.remove("held"))};h.addEventListener("pointerdown",V),h.addEventListener("pointermove",b),h.addEventListener("pointerup",g),h.addEventListener("pointercancel",g),W.push(()=>{h.removeEventListener("pointerdown",V),h.removeEventListener("pointermove",b),h.removeEventListener("pointerup",g),h.removeEventListener("pointercancel",g)})}else{const D=V=>{const b=c.Query.point(_,Ee(V))[0];b&&(E.set(b,!1),M.setVelocity(b,{x:(Math.random()-.5)*6,y:-14}),M.setAngularVelocity(b,(Math.random()-.5)*.3),He())};h.addEventListener("pointerup",D),W.push(()=>h.removeEventListener("pointerup",D))}k=()=>{we.disconnect(),window.clearTimeout(le),cancelAnimationFrame(x),W.forEach(D=>D()),G.forEach(D=>D.remove()),v.clear(R)}}),()=>{p=!1,k()}},[u]),i.jsxs("section",{className:"hb-regn","aria-labelledby":"hb-regn-t",children:[i.jsxs("div",{className:"hb-regnH",children:[i.jsx(Oc,{children:"Pokinn"}),i.jsx("h2",{id:"hb-regn-t",className:"hb-disp",children:"Hellt úr pokanum."}),i.jsx("p",{children:af()})]}),i.jsx("div",{className:"hb-svid",ref:o,"data-bendill":"Gríptu",role:"img","aria-label":"Pokar frá H-Berg og lausar hnetur og þurrkaðir ávextir í hrúgu."}),i.jsx("div",{style:{position:"relative",height:0},children:i.jsx("span",{className:"hb-golf"})})]})}function af(){return typeof window>"u"?"":Hc()?"Gríptu vöru og kastaðu henni.":"Pikkaðu á vöru og hún hoppar."}const lf="https://sndrstudio.is",of="./",sf=`
@font-face {
  font-family: 'ProjektBlackbirdIS';
  src: url('${of}fonts/blackbird/ProjektBlackbirdIS.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
`;function uf({dark:o=!1,className:u="",english:s=!1}){const h=o?"rgba(255,255,255,0.72)":"rgba(23,23,23,0.72)",p=o?"#FF8A3D":"#C4531B";return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:sf}),i.jsxs("a",{href:lf,target:"_blank",rel:"noreferrer","aria-label":s?"Designed by SNDR Studio":"Hannað af SNDR Studio","data-logotype":!0,className:`inline-flex min-h-11 items-center gap-2 ${u}`,children:[i.jsxs("span",{style:{fontFamily:"'ProjektBlackbirdIS', sans-serif",color:h,fontSize:"15px",letterSpacing:"0.02em"},children:["SN",i.jsx("span",{style:{color:p},children:"✦"}),"DR"]}),i.jsx("span",{style:{fontFamily:"'Geist Mono', ui-monospace, 'SF Mono', Menlo, monospace",color:h,fontSize:"10.5px",letterSpacing:"0.1em",opacity:.85},children:"STUDIO"})]})]})}const df=.19,cf=.16,hf=14,mf=(o,u)=>{const s=o%u;return s>0?s-u:s},Io=(o,u,s)=>o<u?u:o>s?s:o,pf=()=>{const[o,u]=S.useState(()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);return S.useEffect(()=>{const s=window.matchMedia("(prefers-reduced-motion: reduce)"),h=()=>u(s.matches);return s.addEventListener("change",h),()=>s.removeEventListener("change",h)},[]),o};function ff({speed:o=40,gap:u=72}){const s=S.useRef(null),h=S.useRef(null),p=S.useRef(null),[x,k]=S.useState(4),[w,c]=S.useState(!1),[v,z]=S.useState(!1),j=pf(),M=S.useRef(j);M.current=j;const E=S.useRef(!1);E.current=!w&&!j;const P=S.useRef(0),O=S.useRef(0),H=S.useRef(0),re=S.useRef(0),q=S.useCallback(()=>{const A=h.current;if(!A)return;const G=M.current?0:P.current-re.current;A.style.transform=`translate3d(${G.toFixed(2)}px,0,0)`},[]);return S.useLayoutEffect(()=>{const A=s.current,G=p.current;if(!A||!G)return;const _=()=>{const L=G.getBoundingClientRect().width,Q=L>0?L+u:0;re.current=Q,P.current=Q>0?Io(P.current,-Q,Q):0,q();const oe=j||Q<=0?4:Io(Math.ceil(A.getBoundingClientRect().width/Q)+3,4,hf);k(le=>le===oe?le:oe)};_();const X=new ResizeObserver(_);return X.observe(A),X.observe(G),()=>X.disconnect()},[u,q,j]),S.useEffect(()=>{const A=s.current;if(!A)return;const G=new IntersectionObserver(_=>{const X=_[_.length-1];X&&z(X.isIntersecting)},{rootMargin:"96px"});return G.observe(A),()=>G.disconnect()},[]),S.useEffect(()=>{if(j||!v)return;let A=0,G=0;const _=X=>{A=requestAnimationFrame(_);const L=G?Math.min((X-G)/1e3,.05):0;G=X;const Q=re.current;if(Q<=0)return;H.current+=((E.current?1:0)-H.current)*(1-Math.exp(-L/df));const oe=O.current*(1-Math.exp(-L/cf));O.current-=oe;let le=P.current-o*H.current*L+oe;H.current>.002&&Math.abs(O.current)<.25?(O.current=0,le=mf(le,Q)):le=Io(le,-Q,Q),P.current=le,q()};return A=requestAnimationFrame(_),()=>cancelAnimationFrame(A)},[j,v,o,q]),S.useEffect(()=>{const A=()=>c(!1);return window.addEventListener("blur",A),()=>window.removeEventListener("blur",A)},[]),{viewportRef:s,trackRef:h,groupRef:p,copies:x,reduced:j,bind:{onPointerEnter:A=>{A.pointerType!=="touch"&&c(!0)},onPointerDown:()=>c(!0),onPointerUp:A=>{A.pointerType==="touch"&&c(!1)},onPointerCancel:()=>c(!1),onPointerLeave:()=>c(!1),onFocus:()=>c(!0),onBlur:()=>c(!1)}}}const gf=[{n:"Bónus",f:"bonus.webp",h:1},{n:"Krónan",f:"kronan.svg",h:.8},{n:"Hagkaup",f:"hagkaup.svg",h:1.05},{n:"Nettó",f:"netto.svg",h:.8},{n:"Fjarðarkaup",f:"fjardarkaup.png",h:1.15},{n:"Samkaup",f:"samkaup.svg",h:.8},{n:"10-11",f:"1011.png",h:1.05},{n:"N1",f:"n1.svg",h:1.1},{n:"Olís",f:"olis.svg",h:.85,k:"flis"},{n:"Kaupfélag Vestur-Húnvetninga",f:"kvh.svg",h:1}],bf=`
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
`;function vf(){const{viewportRef:u,trackRef:s,groupRef:h,copies:p,reduced:x,bind:k}=ff({speed:34,gap:72}),w=x?1:p,c=x?0:1;return i.jsxs("section",{className:"hb-solu","aria-label":"Söluaðilar H-Berg",...k,children:[i.jsx("p",{className:"hb-soluT",children:"Fæst hjá 19 söluaðilum um allt land"}),i.jsx("div",{ref:u,className:"hb-soluV",tabIndex:x?0:void 0,style:{overflowX:x?"auto":"hidden"},children:i.jsx("div",{ref:s,className:"hb-soluS",style:{gap:72},children:Array.from({length:w},(v,z)=>i.jsx("ul",{ref:z===c?h:void 0,"aria-hidden":z===c?void 0:!0,style:{gap:72},children:gf.map(j=>i.jsxs("li",{className:j.k,children:[i.jsx("img",{src:`${En}hberg/solu/${j.f}${gr}`,alt:"",style:{"--h":j.h},loading:"lazy",decoding:"async"}),z===c?i.jsx("span",{className:"hb-sr",children:j.n}):null]},j.f))},z))})})]})}const Nn=o=>o.replace(/[-–—]/g," "),pc=o=>o.toLocaleLowerCase("is").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ð/g,"d").replace(/þ/g,"th").replace(/æ/g,"ae"),kf=["nuts","peanut","milk","gluten"],Oa=o=>Je.find(u=>u.items.some(s=>s.slug===o)),Dc=o=>{var u;return((u=Je.find(s=>s.s===o))==null?void 0:u.s)??""},Bo=()=>{const o=new URLSearchParams(window.location.search);return{line:o.get("naering")==="1"?"":Dc(o.get("lina")),slug:o.get("vara")??""}},yf={hnetur:"Heilar, brotnar og sneiddar hnetur í matinn eða sem millimál.",avextir:"Döðlur, apríkósur og fleiri ávextir í bakstur og nesti.",frae:"Fræ til að strá yfir, blanda út í og baka með.",smjor:"Hnetusmjör á brauðið, í sósur og í bakstur.",snakk:"Súkkulaðihjúpaðar hnetur og snakk fyrir litlar sælustundir.",bakstur:"Hráefni í bakstur og matargerð fyrir heimili og eldhús.",annad:"Fleira úr úrvalinu okkar, meðal annars fuglafóður."};function xf(){return i.jsxs("section",{className:"hb-lines",id:"linur","aria-labelledby":"hb-lines-title",children:[i.jsx("h2",{id:"hb-lines-title",className:"hb-disp",children:"Vörulínur"}),i.jsx("p",{children:"Veldu vörulínu og skoðaðu allar vörurnar í henni."}),i.jsx("div",{className:"hb-linesGrid",children:kc.map(o=>{var s;const u=Je.find(h=>h.s===o.s).items.length;return i.jsxs("button",{className:"hb-lineTile",style:{background:((s=We(o.img))==null?void 0:s.tint)??o.g},onClick:()=>{window.dispatchEvent(new CustomEvent("hb-browser-line",{detail:o.s})),qr("#allar-vorur")},children:[i.jsx("span",{className:"hb-lineArt",children:i.jsx("img",{src:dr(o.img,"pack","m"),alt:"",width:"400",height:"450",loading:"lazy",decoding:"async"})}),i.jsxs("span",{className:"hb-lineText",children:[i.jsx("span",{className:"hb-lineCount",children:Wt(u)}),i.jsx("span",{className:"hb-lineName",children:o.t}),i.jsx("span",{className:"hb-lineDesc",children:yf[o.s]}),i.jsxs("span",{className:"hb-linePill",children:["Skoða ",Wt(u)," ",i.jsx("span",{"aria-hidden":"true",children:"↗"})]})]})]},o.s)})})]})}function wf({v:o}){const u=S.useRef(null),s=S.useRef(null),h=S.useRef(null);return S.useLayoutEffect(()=>{const p=u.current,x=s.current,k=h.current;if(k&&!Er()){k.setAttribute("aria-hidden","true"),k.setAttribute("inert",""),Object.assign(k.style,{position:"absolute",inset:"0",pointerEvents:"none"}),x.appendChild(k);const w=k.animate([{opacity:1},{opacity:0}],{duration:ye.ui,easing:ye.out,fill:"forwards"}),c=p.animate([{opacity:0},{opacity:1}],{duration:ye.ui,easing:ye.out});return w.onfinish=()=>k.remove(),h.current=p.cloneNode(!0),()=>{w.cancel(),c.cancel(),k.remove()}}h.current=p.cloneNode(!0)},[o.slug]),i.jsx("aside",{className:"hb-browserDetail","aria-label":"Valin vara",children:i.jsx("div",{className:"hb-detailLayers",ref:s,children:i.jsxs("div",{ref:u,children:[i.jsx("div",{className:"hb-detailArt",style:{background:o.tint},children:i.jsx("img",{src:dr(o.slug,"pack","m"),alt:Nn(o.name.is),width:"400",height:"450",loading:"lazy",decoding:"async"})}),i.jsx("p",{className:"hb-detailLine",children:Oa(o.slug).t}),i.jsx("h3",{children:Nn(o.name.is)}),Nn(o.desc.is)!==Oa(o.slug).t&&i.jsx("p",{children:Nn(o.desc.is)}),i.jsx("p",{className:"hb-detailAllergens",children:o.allergens===null?"Inniheldur: Upplýsingar vantar.":Uo(o)}),i.jsx("p",{className:"hb-detailBasis",children:"Næringargildi í 100 g"}),i.jsx("dl",{children:Yt.filter(p=>["energyKj","fat","carbohydrate","protein","salt"].includes(p.key)).map(p=>i.jsxs("div",{children:[i.jsx("dt",{children:p.title}),i.jsx("dd",{children:Sn(o.slug,p.key)})]},p.key))}),i.jsxs("button",{className:"hb-browserLink",onClick:()=>xe.open({k:"naering",line:Oa(o.slug).s}),children:["Öll næringargildi ",i.jsx("span",{"aria-hidden":"true",children:"↗"})]}),i.jsxs("div",{className:"hb-detailActions",children:[i.jsx(gi,{slug:o.slug,label:"Setja á pöntunarlistann"},o.slug),i.jsxs("button",{className:"hb-browserSecondary",onClick:()=>xe.open({k:"vara",slug:o.slug}),children:["Nánar ",i.jsx("span",{"aria-hidden":"true",children:"↗"})]})]}),i.jsx("p",{className:"hb-browserDisclaimer",children:"Lestu alltaf á umbúðirnar. Ónefndur ofnæmisvaldur þýðir ekki að vara sé laus við hann."})]})})})}function jf(){const o=S.useId(),[u,s]=S.useState(()=>Bo().line),[h,p]=S.useState(()=>Bo().slug),[x,k]=S.useState(""),[w,c]=S.useState([]),[v,z]=S.useState(()=>window.matchMedia("(max-width:991px)").matches),j=S.useRef(null),M=S.useRef(typeof window<"u"&&/[?&](vara|lina)=/.test(window.location.search)),E=S.useRef(new Map),P=S.useRef([]),O=S.useRef([]),H=S.useRef(0),re=Je.filter(L=>!u||L.s===u).flatMap(L=>L.items).filter(L=>pc(`${L.name.is} ${Oa(L.slug).t}`).includes(pc(x.trim()))),q=re.filter(L=>!w.length||L.allergens!==null&&!L.allergens.some(Q=>w.includes(Q))),R=q.find(L=>L.slug===h)??q[0],A=()=>{P.current.forEach(L=>L.cancel()),P.current=[],O.current.forEach(L=>L.remove()),O.current=[]},G=()=>{var L;window.clearTimeout(H.current),A(),E.current.clear(),!Er()&&((L=j.current)==null||L.querySelectorAll("[data-browser-product]").forEach(Q=>{const oe=Q.getBoundingClientRect();oe.bottom>0&&oe.top<innerHeight&&E.current.set(Q.dataset.browserProduct,{rect:oe,clone:Q.cloneNode(!0)})}))};S.useLayoutEffect(()=>{if(Er()||!j.current){E.current.clear();return}const L=j.current,Q=L.getBoundingClientRect(),oe=new Set(q.map(le=>le.slug));E.current.forEach(({rect:le,clone:me},we)=>{if(oe.has(we))return;me.removeAttribute("data-browser-product"),me.removeAttribute("id"),me.setAttribute("aria-hidden","true"),me.setAttribute("inert",""),Object.assign(me.style,{position:"absolute",top:`${le.top-Q.top}px`,left:`${le.left-Q.left}px`,width:`${le.width}px`,height:`${le.height}px`,pointerEvents:"none",zIndex:"2"}),L.appendChild(me),O.current.push(me);const be=me.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(.98)"}],{duration:ye.ui,easing:ye.out,fill:"forwards"});be.onfinish=()=>me.remove(),P.current.push(be)}),L.querySelectorAll("[data-browser-product]").forEach(le=>{const me=le.getBoundingClientRect(),we=E.current.get(le.dataset.browserProduct);if(me.bottom<=0||me.top>=innerHeight)return;const be=we?[{transform:`translate(${we.rect.left-me.left}px,${we.rect.top-me.top}px)`},{transform:"translate(0,0)"}]:[{opacity:0,transform:"translateY(8px)"},{opacity:1,transform:"translateY(0)"}];P.current.push(le.animate(be,{duration:ye.panel,easing:ye.out}))}),E.current.clear()},[u,x,w]),S.useEffect(()=>{R&&R.slug!==h&&p(R.slug)},[R==null?void 0:R.slug,h]),S.useEffect(()=>{const L=new URL(window.location.href);L.searchParams.get("naering")!=="1"&&M.current&&(u?L.searchParams.set("lina",u):L.searchParams.delete("lina"),h?L.searchParams.set("vara",h):L.searchParams.delete("vara"),window.history.replaceState(null,"",L))},[u,h]),S.useEffect(()=>{const L=window.matchMedia("(max-width:991px)"),Q=()=>{window.clearTimeout(H.current),z(L.matches)},oe=me=>{M.current=!0,G(),s(Dc(me.detail)),k(""),c([]),p("")},le=()=>{if(new URLSearchParams(location.search).get("naering")==="1")return;G();const me=Bo();s(me.line),p(me.slug),k(""),c([])};return L.addEventListener("change",Q),window.addEventListener("hb-browser-line",oe),window.addEventListener("popstate",le),()=>{L.removeEventListener("change",Q),window.removeEventListener("hb-browser-line",oe),window.removeEventListener("popstate",le),window.clearTimeout(H.current),A()}},[]);const _=L=>{window.clearTimeout(H.current),p(L.slug),v&&xe.open({k:"vara",slug:L.slug})},X=(L,Q)=>{var me,we,be,Re;const oe=getComputedStyle(j.current).gridTemplateColumns.split(" ").length;let le=Q;if(L.key==="ArrowRight")le++;else if(L.key==="ArrowLeft")le--;else if(L.key==="ArrowDown")le+=oe;else if(L.key==="ArrowUp")le-=oe;else if(L.key==="Home")le=0;else if(L.key==="End")le=q.length-1;else if(L.key==="Enter"||L.key===" "){L.preventDefault(),_(q[Q]),v||xe.open({k:"vara",slug:q[Q].slug});return}else return;L.preventDefault(),window.clearTimeout(H.current),le=Math.max(0,Math.min(q.length-1,le)),p(q[le].slug),(we=(me=j.current)==null?void 0:me.querySelectorAll("[data-browser-product]")[le])==null||we.focus({preventScroll:!0}),(Re=(be=j.current)==null?void 0:be.querySelectorAll("[data-browser-product]")[le])==null||Re.scrollIntoView({block:"nearest",behavior:"instant"})};return i.jsxs("section",{className:"hb-browser",id:"allar-vorur","aria-labelledby":`${o}-title`,onPointerDown:()=>{M.current=!0},onKeyDown:()=>{M.current=!0},children:[i.jsxs("div",{className:"hb-browserHeading",children:[i.jsx("span",{className:"hb-browserEyebrow",children:"Allar vörur"}),i.jsx("h2",{id:`${o}-title`,className:"hb-disp",children:"Allt H-Berg í einni hillu"}),i.jsx("p",{children:"Veldu vöru til að sjá innihald, næringargildi og setja hana á pöntunarlistann."})]}),i.jsxs("div",{className:"hb-browserTools",children:[i.jsx("div",{className:"hb-browserChips",role:"group","aria-label":"Vörulínur",children:[{s:"",t:"Allar",items:br},...Je].map(L=>i.jsxs("button",{"aria-pressed":u===L.s,onClick:()=>{G(),s(L.s),p("")},children:[L.t," ",i.jsx("span",{children:L.items.length})]},L.s))}),i.jsxs("label",{className:"hb-browserSearch",htmlFor:`${o}-search`,children:["Leita að vöru",i.jsx("input",{id:`${o}-search`,type:"search",value:x,placeholder:"Nafn eða vörulína",onChange:L=>{G(),k(L.target.value),p("")}})]}),i.jsxs("div",{className:"hb-browserAvoid",role:"group","aria-label":"Fela vörur með ofnæmisvöldum",children:[i.jsx("span",{children:"Án:"}),kf.map(L=>i.jsxs("button",{"aria-pressed":w.includes(L),onClick:()=>{G(),c(Q=>Q.includes(L)?Q.filter(oe=>oe!==L):[...Q,L]),p("")},children:[w.includes(L)&&i.jsx("span",{"aria-hidden":"true",children:"✓ "}),Ba(L).toLocaleLowerCase("is")]},L))]})]}),i.jsxs("div",{className:"hb-browserStatus",children:[i.jsxs("p",{role:"status",children:[Wt(q.length),w.length>0&&` · Falið vegna ofnæmisvals eða ófullnægjandi upplýsinga: ${Wt(re.length-q.length)}`]}),i.jsx("span",{className:"hb-browserHint",id:`${o}-hint`,children:v?"Veldu vöru til að sjá nánar.":"Örvatakkar velja vöru. Enter opnar nánar."})]}),w.length>0&&i.jsx("p",{className:"hb-browserDisclaimer",children:"Valið byggir á skráðu innihaldi. Lestu alltaf á umbúðirnar. Ónefndur ofnæmisvaldur þýðir ekki að vara sé laus við hann."}),!q.length&&i.jsxs("p",{children:["Engar vörur fundust. ",i.jsx("button",{className:"hb-browserLink",onClick:()=>{G(),s(""),k(""),c([])},children:"Sýna allar vörur"})]}),i.jsxs("div",{className:"hb-browserLayout",children:[i.jsx("div",{className:"hb-browserGrid",ref:j,role:"listbox","aria-label":"Vörur","aria-describedby":`${o}-hint`,children:q.map((L,Q)=>i.jsxs("button",{"data-browser-product":L.slug,className:"hb-browserTile",role:"option","aria-selected":(R==null?void 0:R.slug)===L.slug,tabIndex:(R==null?void 0:R.slug)===L.slug?0:-1,"aria-label":Nn(L.name.is),onKeyDown:oe=>X(oe,Q),onClick:()=>_(L),onPointerEnter:oe=>{var le,me;v||oe.pointerType!=="mouse"||!matchMedia("(hover:hover) and (pointer:fine)").matches||(le=j.current)!=null&&le.contains(document.activeElement)&&((me=document.activeElement)!=null&&me.matches(":focus-visible"))||(window.clearTimeout(H.current),H.current=window.setTimeout(()=>p(L.slug),120))},onPointerLeave:()=>window.clearTimeout(H.current),children:[i.jsxs("span",{className:"hb-browserArt",style:{background:L.tint},children:[i.jsx("img",{src:dr(L.slug,"pack","s"),alt:"",width:"240",height:"270",loading:"lazy",decoding:"async"}),i.jsx("span",{className:"hb-browserCheck","aria-hidden":"true",children:"✓"})]}),i.jsx("span",{className:"hb-browserName",children:Nn(L.name.is)}),i.jsx(Aa,{p:L})]},L.slug))}),R&&!v&&i.jsx(wf,{v:R})]})]})}const Sf=`
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
`,Nf=`
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
`,bi="./",Ic=o=>dr(o,"pack","m"),Ia=o=>o.startsWith("laus:")?`${bi}hberg/laus/${o.slice(5)}.webp${gr}`:o.startsWith("hero:")?`${bi}hberg/hero/${o.slice(5)}.webp${gr}`:dr(o,"pack","s");function Ef(o,u,s,h){const p=3*o,x=3*(s-o)-p,k=1-p-x,w=3*u,c=3*(h-u)-w,v=1-w-c,z=E=>((k*E+x)*E+p)*E,j=E=>((v*E+c)*E+w)*E,M=E=>(3*k*E+2*x)*E+p;return E=>{if(E<=0)return 0;if(E>=1)return 1;let P=E;for(let O=0;O<6;O++){const H=z(P)-E,re=M(P);if(Math.abs(H)<1e-4||!re)break;P-=H/re}return j(Math.min(1,Math.max(0,P)))}}const Cf=Ef(.17,.17,.255,.902);function Tf(o,u=[]){const s=S.useRef(null);return S.useEffect(()=>{const h=s.current;if(!h)return;let p=0;const x=()=>{p=0,o(h)},k=()=>{p||(p=requestAnimationFrame(x))};return x(),window.addEventListener("scroll",k,{passive:!0}),window.addEventListener("resize",k),()=>{window.removeEventListener("scroll",k),window.removeEventListener("resize",k),cancelAnimationFrame(p)}},u),s}const Pf=`
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


${Nf}
`,Rf=[{p:"p00",x:52,y:8,s:2.6,d:1.2,r:-18},{p:"p06",x:58,y:54,s:2.2,d:.8,r:24},{p:"p02",x:52,y:80,s:3,d:1.4,r:12},{p:"p08",x:60,y:5,s:2.4,d:1,r:-30},{p:"p05",x:90,y:6,s:2.8,d:1.3,r:40},{p:"p11",x:71,y:92,s:2.4,d:.9,r:-8},{p:"p14",x:94,y:89,s:2.2,d:1.1,r:16},{p:"p20",x:53,y:88,s:2.6,d:.7,r:-22}],Ff=["Bónus","Krónunni","Hagkaup","Nettó","Fjarðarkaupum","Melabúðinni","Samkaupum","10-11","Iceland","N1","Olís","Kaupfélagi Skagfirðinga","Hlíðarkaupum","Vöruvali","Albínu","Fjölvali","Skeljungi","Kaupfélagi Steingrímsfjarðar","Kaupfélagi V-Húnvetninga"];function Bc({listi:o=Rf,k:u=""}){return i.jsx("div",{className:`hb-svif ${u}`,"aria-hidden":"true",children:o.map((s,h)=>i.jsx("span",{style:{left:`${s.x}%`,top:`${s.y}%`,"--s":`${s.s}vw`,"--d":s.d,"--r":`${s.r}deg`,"--t":`${7+h%4*1.7}s`,"--w":`${-h*1.3}s`},children:i.jsx("img",{src:`${bi}hberg/laus/${s.p}.webp${gr}`,alt:"",width:160,height:160,decoding:"async"})},h))})}function Lf(){const o=S.useRef(null);return S.useEffect(()=>{const u=o.current;if(!u||Er()||!window.matchMedia("(hover:hover) and (pointer:fine)").matches)return;let s=0,h=0,p=0,x=0,k=0;const w=()=>{x+=(h-x)*.055,k+=(p-k)*.055,u.style.setProperty("--mx",x.toFixed(4)),u.style.setProperty("--my",k.toFixed(4)),s=Math.abs(h-x)>5e-4||Math.abs(p-k)>5e-4?requestAnimationFrame(w):0},c=z=>{const j=u.getBoundingClientRect();h=(z.clientX-j.left)/j.width-.5,p=(z.clientY-j.top)/j.height-.5,s||(s=requestAnimationFrame(w))},v=()=>{h=0,p=0,s||(s=requestAnimationFrame(w))};return u.addEventListener("pointermove",c),u.addEventListener("pointerleave",v),()=>{u.removeEventListener("pointermove",c),u.removeEventListener("pointerleave",v),cancelAnimationFrame(s)}},[]),i.jsx("div",{className:"hb-heroP",children:i.jsxs("section",{className:"hb-hero",id:"top",ref:o,children:[i.jsx(Bc,{k:"hb-svifH"}),i.jsxs(cr,{className:"hb-heroT",children:[i.jsxs("div",{children:[i.jsx(Oc,{children:"H-Berg · Grandatröð 12, Hafnarfirði"}),i.jsxs("h1",{className:"hb-disp",children:[Lo.heroLinur.map((u,s)=>i.jsx("span",{className:"hb-mask",children:i.jsx("span",{className:"hb-up hb-lina",style:Dr(s),children:u})},u)),i.jsx("span",{className:"hb-mask",children:i.jsx("span",{className:"hb-up hb-lina hb-heroAr",style:Dr(Lo.heroLinur.length),children:Lo.heroAr})})]})]}),i.jsxs("div",{className:"hb-heroNe",children:[i.jsx("p",{className:"hb-heroSlag hb-mask hb-maskP",children:i.jsxs("span",{className:"hb-up",style:{...Dr(3),"--dur":"var(--motion-reveal)"},children:[br.length," vörur undir eigin merki, pakkaðar í Hafnarfirði. Fást í Bónus, Krónunni, Hagkaup og hjá ",Ff.length-3," öðrum söluaðilum."]})}),i.jsx("div",{className:"hb-heroCta hb-mask",children:i.jsxs("div",{className:"hb-up",style:Dr(4),children:[i.jsx("button",{className:"hb-btn hb-casH",onClick:()=>qr("#allar-vorur"),children:i.jsx(lt,{t:"Skoða vörurnar"})}),i.jsx("button",{className:"hb-btn sc hb-casH",onClick:u=>Pe.open(!0,u),children:i.jsx(lt,{t:"Pöntun fyrir verslanir"})})]})})]})]}),i.jsx(cr,{className:"hb-rist",children:tp.map((u,s)=>i.jsx("button",{className:"hb-reit hb-mask",style:{"--grunnur":u.grunnur},"data-bendill":"Skoða","aria-label":`${u.n}, nánar`,onClick:()=>xe.open({k:"vara",slug:u.img.replace(/^hero:/,"")}),children:i.jsx("img",{className:"hb-up",style:Dr(s),src:dr(u.img.replace(/^hero:/,""),"pack","m"),alt:"",width:800,height:800,loading:s<4?"eager":"lazy",decoding:"async"})},u.img))})]})})}function zf({n:o,grunnur:u,b:s,fyrsta:h,hlid:p}){var z;const x=ip[o]??[h],[k,w]=S.useState(0),c=S.useRef(null);S.useEffect(()=>{if(x.length<2||Er())return;let j=0,M=!1;const E=new IntersectionObserver(([O])=>{M=O.isIntersecting});c.current&&E.observe(c.current);const P=window.setTimeout(()=>{j=window.setInterval(()=>{M&&w(O=>(O+1)%x.length)},2e3)},700*p);return()=>{window.clearTimeout(P),window.clearInterval(j),E.disconnect()}},[x.length,p]);const v=(k-1+x.length)%x.length;return i.jsx("span",{className:"hb-bitiM",ref:c,style:{"--grunnur":((z=We(x[k]))==null?void 0:z.tint)??u,"--b":s??1},children:x.map((j,M)=>i.jsx("img",{src:Ia(j),alt:M===k?o:"",width:120,height:136,loading:"lazy",decoding:"async",className:M===k?"nu":M===v&&x.length>1?"farin":"",style:M!==k&&M!==v?{transition:"none"}:void 0},j))})}function Mf(){let o=0;return i.jsxs("section",{className:"hb-tilvS","aria-label":"H-Berg í einni setningu",children:[i.jsx(Bc,{k:"hb-svifS",listi:[{p:"p03",x:8,y:10,s:3.4,d:1,r:20},{p:"p09",x:86,y:4,s:4,d:1.3,r:-16},{p:"p12",x:90,y:78,s:3,d:.8,r:30},{p:"p17",x:12,y:74,s:3.8,d:1.2,r:-28},{p:"p24",x:52,y:96,s:2.6,d:.6,r:8}]}),i.jsx(cr,{margin:"0px 0px -25% 0px",children:i.jsx("h2",{className:"hb-disp hb-setning",children:np.map((u,s)=>i.jsx("span",{className:"hb-mask hb-setL",children:i.jsx("span",{className:"hb-up hb-lina",style:{...Dr(s),"--dur":"var(--motion-reveal)"},children:u.map((h,p)=>"t"in h?i.jsx("span",{children:h.t},p):i.jsx(zf,{n:h.n,grunnur:h.grunnur,b:h.b,fyrsta:h.img,hlid:o++},p))})},s))})})]})}function Of({s:o,i:u}){const[s,h]=S.useState(0),[p,x]=S.useState(-1),k=o.tegundir[s],w=()=>xe.open({k:"vara",slug:k.slug});return i.jsxs(cr,{className:"hb-spjald",as:"article",style:{background:k.lit},children:[i.jsx("div",{className:"hb-spjaldM",role:"button",tabIndex:0,"aria-label":`${k.n}, nánar`,"data-bendill":"Skoða",onClick:w,onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),w())},children:o.tegundir.map((c,v)=>i.jsx("img",{src:Ic(c.slug),alt:v===s?c.n:"",width:720,height:820,loading:"lazy",decoding:"async",className:v===s?"nu":v===p?"farin":"",style:v!==s&&v!==p?{transition:"none"}:{transitionDelay:p<0?`${.12*u}s`:"0s"}},c.slug))}),i.jsxs("div",{className:"hb-stika",children:[i.jsxs("div",{children:[i.jsx("small",{children:o.merki}),i.jsx("b",{children:k.n}),i.jsx("span",{className:"hb-pk",children:k.d})]}),i.jsxs("div",{className:"hb-lit",children:[i.jsx("small",{children:"Tegund"}),i.jsx("div",{role:"group","aria-label":`Tegundir af ${o.titill}`,children:o.tegundir.map((c,v)=>i.jsx("button",{"aria-pressed":v===s,"aria-label":c.n,style:{"--l":c.lit},onClick:()=>{v!==s&&(x(s),h(v))}},c.n))})]}),i.jsxs("div",{className:"hb-takkar",children:[i.jsx("button",{className:"hb-btn sc hb-casH",onClick:w,children:i.jsx(lt,{t:"Nánar"})}),i.jsx(gi,{slug:k.slug})]})]})]})}function Hf(){return i.jsx("section",{className:"hb-vorur",id:"vorur","aria-label":"Vörur",children:ap.map((o,u)=>i.jsx(Of,{s:o,i:u},o.titill))})}const Df=[{n:"2007",t:"Stofnað af Halldóri Berg og fjölskyldu",g:"#F2C98A",h:"p00"},{n:String(br.length),t:"Vörur undir merki H-Berg",g:"#E9B3A1",h:"p06"},{n:"19",t:"Söluaðilar um allt land, frá Bónus til Melabúðarinnar",g:"#C9D3A2",h:"p02"},{n:"800",t:"Fermetrar fyrir framleiðslu og pökkun í Hafnarfirði",g:"#B9CBD9",h:"p08"}];function If(){return i.jsxs("section",{className:"hb-kostir",children:[i.jsx(cr,{children:i.jsx($a,{className:"hb-disp",text:"H-Berg | frá 2007"})}),i.jsx(cr,{className:"hb-tolur",hver:!0,children:Df.map((o,u)=>i.jsx("div",{className:"hb-tala hb-mask",style:{"--g":o.g},children:i.jsxs("div",{className:"hb-up",style:{...Dr(u),"--dur":"var(--motion-reveal)"},children:[i.jsx("b",{children:o.n}),i.jsx("span",{children:o.t}),i.jsx("img",{src:`${bi}hberg/laus/${o.h}.webp${gr}`,alt:"",width:160,height:160,loading:"lazy"})]})},o.n))})]})}function Bf(){return i.jsx(jp,{})}function Af(){const[o,u]=S.useState("quiz"),[s,h]=S.useState(null),p=s===null?null:Yd[s],x=(k,w)=>{k.hlekkur==="#poki"?Pe.open(!0,w):k.hlekkur==="#staerra"?xe.open({k:"staerra"}):k.hlekkur==="#hvar"?xe.open({k:"hvar"}):qr("#ofnaemi")};return i.jsxs("section",{className:"hb-form",id:"erindi",children:[i.jsxs("div",{className:"hb-flipar hb-disp",role:"tablist","aria-label":"Hafa samband",children:[i.jsx("button",{role:"tab",id:"hb-t1","aria-controls":"hb-tp","aria-selected":o==="quiz",onClick:()=>u("quiz"),children:"Hvert er erindið?"}),i.jsx("button",{role:"tab",id:"hb-t2","aria-controls":"hb-tp","aria-selected":o==="spyrja",onClick:()=>u("spyrja"),children:"Senda fyrirspurn"})]}),i.jsx(cr,{className:"hb-formP hb-mask",margin:"0px 0px -20% 0px",children:i.jsx("div",{className:"hb-up",id:"hb-tp",role:"tabpanel","aria-labelledby":o==="quiz"?"hb-t1":"hb-t2",style:{display:"grid",gap:"1rem"},children:o==="quiz"?i.jsxs("div",{className:"hb-quiz",children:[i.jsxs("div",{children:[i.jsx("p",{className:"hb-quizQ",id:"hb-quiz-q",children:"Hvað ert þú að leita að?"}),i.jsx("div",{className:"hb-val",role:"radiogroup","aria-labelledby":"hb-quiz-q",children:Yd.map((k,w)=>i.jsxs("label",{className:s===w?"valid":"",children:[i.jsxs("span",{children:[i.jsx("b",{children:k.nafn}),i.jsx("small",{children:k.stutt})]}),i.jsx("input",{type:"radio",name:"hb-erindi",checked:s===w,onChange:()=>h(w)})]},k.nafn))})]}),i.jsx("div",{className:"hb-svar","aria-live":"polite",children:p?i.jsxs("div",{className:"hb-svarI",children:[i.jsx("p",{className:"hb-merki",style:{margin:0,color:"rgba(23,45,77,.6)"},children:p.nafn}),i.jsx("p",{className:"hb-svarT",children:p.nota}),i.jsx("button",{className:"hb-btn hb-casH",onClick:k=>x(p,k),children:i.jsx(lt,{t:p.ord})}),i.jsxs("button",{className:"hb-nobg",style:{color:"#172D4D"},onClick:()=>u("spyrja"),children:["Eða sendu okkur línu ",i.jsx("i",{children:"→"})]})]},p.nafn):i.jsxs("div",{className:"hb-svarI tomt",children:[i.jsx("p",{className:"hb-svarT",children:"Veldu erindi og þú sérð strax hvernig best er að snúa sér."}),i.jsxs("p",{className:"hb-smatt",style:{color:"rgba(23,45,77,.6)",margin:0},children:["Sími ",Nr.simi," · ",Nr.netfang]})]})})]}):i.jsxs(i.Fragment,{children:[i.jsx(wc,{cfg:jc}),i.jsx("div",{className:"hb-teymiL",children:Zm.map(k=>i.jsxs("div",{children:[i.jsx("b",{children:k.nafn}),i.jsx("a",{href:k.href,...k.href.startsWith("http")?{target:"_blank",rel:"noopener noreferrer"}:{},children:k.texti})]},k.nafn))})]})})})]})}function $f(){const o=[{n:"H-Berg",m:"Fjölskyldufyrirtæki frá 2007",a:"mondlur",b:"kajuhnetur-heilarristadar",g:"#B98B60",t:"H-Berg var stofnað í júlí 2007 af Halldóri Berg Jónssyni og fjölskyldu. Við pökkum þurrkuðum ávöxtum og hnetum undir eigin vörumerki.",q:"Grandatröð 12, Hafnarfirði."},{n:"Framleiðslan",m:"Neytendaumbúðir og stærri einingar",a:"hnetusmjor",b:"kasjusmjor",g:"#D7B45D",t:"Við pökkum í neytendaumbúðir og stærri einingar fyrir matvælafyrirtæki, matsölustaði og stóreldhús. Við framleiðum líka H-Berg smjör.",q:"Hnetur, ávextir og smjör."}];return i.jsxs("section",{className:"hb-um",id:"um","aria-labelledby":"hb-um-t",children:[i.jsx(cr,{className:"hb-wrap",children:i.jsx($a,{id:"hb-um-t",className:"hb-disp",text:"Nokkur orð | um okkur"})}),i.jsx(cr,{className:"hb-umK",hver:!0,margin:"0px 0px -20% 0px",children:o.map((u,s)=>{var h,p,x;return i.jsx("article",{className:"hb-umC hb-mask",style:{"--grunnur":((h=We(u.a))==null?void 0:h.tint)??u.g},children:i.jsxs("div",{className:"hb-up hb-umI",style:{...Dr(s),"--dur":"var(--motion-reveal)"},children:[i.jsxs("div",{className:"hb-umM",children:[i.jsx("img",{src:Ia(u.a),style:{background:(p=We(u.a))==null?void 0:p.tint},alt:"",width:300,height:340,loading:"lazy"}),i.jsx("img",{src:Ia(u.b),style:{background:(x=We(u.b))==null?void 0:x.tint},alt:"",width:300,height:340,loading:"lazy"})]}),i.jsx("p",{className:"hb-umT",children:u.t}),i.jsxs("div",{className:"hb-umN",children:[i.jsx("b",{children:u.n}),i.jsx("small",{children:u.m})]}),i.jsx("p",{className:"hb-umQ",children:u.q})]})},u.n)})})]})}function Uf(){return i.jsxs("section",{className:"hb-saga",id:"saga",children:[i.jsx(cr,{children:i.jsx($a,{className:"hb-disp",text:"Gamalt og nýtt"})}),i.jsx(cr,{hver:!0,children:lp.map((o,u)=>i.jsxs("div",{className:"hb-sagaH hb-mask",children:[i.jsx("p",{className:"hb-up",style:{...Dr(u),"--dur":"var(--motion-reveal)"},children:o.h}),i.jsx("div",{className:"hb-up",style:{...Dr(u),"--dur":"var(--motion-reveal)"},children:o.r.map(s=>i.jsxs("div",{className:"hb-sagaR",children:[i.jsx("span",{children:s.t}),i.jsx("b",{children:s.a})]},s.t))})]},o.h))})]})}function _f(){var u;const o=S.useRef(null);return S.useEffect(()=>{const s=o.current;if(!s)return;const h=()=>{var p;return(p=s.parentElement)==null?void 0:p.style.setProperty("--bw",`${s.offsetWidth||160}px`)};return s.complete?h():s.addEventListener("load",h,{once:!0}),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),i.jsxs("section",{className:"hb-yfirl","aria-label":"Í þeirra eigin orðum",children:[i.jsx(cr,{className:"hb-mask hb-maskP",margin:"0px 0px -20% 0px",children:i.jsxs("h2",{className:"hb-sub hb-up",style:{"--dur":"var(--motion-reveal)"},children:["„",Xm,"“"]})}),i.jsxs("div",{className:"hb-panta",children:[i.jsx("p",{children:"Pantar þú fyrir verslun eða stóreldhús? Settu vörur á listann og opnaðu pöntunina í tölvupósti."}),i.jsx("span",{className:"hb-pantaM",children:i.jsx("img",{ref:o,style:{background:(u=We("kasjusmjor"))==null?void 0:u.tint},src:Ia("kasjusmjor"),alt:"",width:460,height:110})}),i.jsx("button",{className:"hb-btn hb-casH",onClick:s=>Pe.open(!0,s),children:i.jsx(lt,{t:"Opna pöntunarlistann"})})]})]})}function Kf(){var w;const[o,u]=S.useState(-1),s=["mondlur","heslihnetur-med-sukkuladi-afrit","kajuhnetur-heilarristadar","graskersfrae-2","aprikosur-2","dodlur-2"],[h,p]=S.useState(0),[x,k]=S.useState(-1);return i.jsxs("section",{className:"hb-faq",id:"spurt",children:[i.jsxs("div",{className:"hb-faqK",style:{"--fk":(w=We(s[h]))==null?void 0:w.tint},children:[i.jsx(cr,{children:i.jsx($a,{className:"hb-disp",text:"Spurt og | svarað"})}),i.jsx("div",{className:"hb-faqM",role:"button",tabIndex:0,"aria-label":"Næsta vörumynd",onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),k(h),p((h+1)%s.length))},"data-bendill":"Næsta",onClick:()=>{k(h),p((h+1)%s.length)},children:s.map((c,v)=>i.jsx("img",{src:Ic(c),alt:"",width:400,height:450,loading:"lazy",className:v===h?"nu":v===x?"farin":"",style:v!==h&&v!==x?{transition:"none"}:void 0},c))}),i.jsxs("div",{className:"hb-faqT",children:[i.jsx("button",{className:"hb-btn hb-casH",onClick:()=>{k(h),p((h+1+Math.floor(Math.random()*(s.length-1)))%s.length)},children:i.jsx(lt,{t:"Handahóf"})}),i.jsx("button",{className:"hb-btn sc hb-casH",onClick:()=>qr("#linur"),children:i.jsx(lt,{t:"Vörulínur"})})]})]}),i.jsx(cr,{className:"hb-faqL",hver:!0,children:op.map((c,v)=>i.jsx("div",{className:`hb-faqR hb-mask${o===v?" opid":""}`,children:i.jsxs("div",{className:"hb-up",style:{...Dr(v%4),"--dur":"var(--motion-reveal)"},children:[i.jsxs("button",{"aria-expanded":o===v,"aria-controls":`hb-faq-answer-${v}`,onClick:()=>u(o===v?-1:v),children:[c.q,i.jsx("i",{children:i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12","aria-hidden":"true",children:i.jsx("path",{d:"M6 0v12M0 6h12",stroke:"currentColor",strokeWidth:"1.3"})})})]}),i.jsx("div",{className:"hb-faqB",id:`hb-faq-answer-${v}`,children:i.jsx("div",{children:i.jsx("p",{children:c.a})})})]})},c.q))})]})}const fc="Hnetur og ávextir",gc=["#BEA458","#F0CB1F","#FFFFFF","#B27FD0","#8FD06A"];function Vf(){const o=S.useRef(null),u=S.useRef(null),[s,h]=S.useState(0),p=S.useRef(!1);S.useEffect(()=>{var M,E;const c=o.current;if(!c)return;let v=!0;const z=()=>{if(!v)return;const P=u.current;if(P){const O=[...P.children].reduce((q,R)=>q+R.getBoundingClientRect().width,0),H=parseFloat(getComputedStyle(P).fontSize),re=O>0?H*P.clientWidth/O:H;Math.abs(re-H)>.05&&(P.style.fontSize=`${re}px`)}h(Math.ceil(c.getBoundingClientRect().height))};z();const j=new ResizeObserver(z);return j.observe(c),window.addEventListener("resize",z),(M=document.fonts)==null||M.addEventListener("loadingdone",z),(E=document.fonts)==null||E.ready.then(z),()=>{var P;v=!1,j.disconnect(),window.removeEventListener("resize",z),(P=document.fonts)==null||P.removeEventListener("loadingdone",z)}},[]);const x=Tf(c=>{const v=o.current,z=u.current;if(!v||!z)return;const j=[...z.children],M=Er(),E=c.getBoundingClientRect(),P=window.innerHeight,O=E.height||1,H=M?1:Math.min(1,Math.max(0,(P-E.top)/O));Mc()?v.style.transform="":v.style.transform=`translate3d(0,${(-(1-H)*100).toFixed(2)}%,0)`;const q=.6+.04*(j.length-1);j.forEach((R,A)=>{const G=Cf(Math.min(1,Math.max(0,(H*q-A*.04)/.6)));R.style.transform=`translate3d(0,${((1-G)*110).toFixed(2)}%,0)`}),p.current=H>=.95},[s]);S.useEffect(()=>{const c=u.current;if(!c||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let v=[];const z=()=>{v.forEach(M=>{M.style.color="",M.firstElementChild.style.transform=""}),v=[]},j=M=>{if(!p.current)return;const E=[...c.children];let P=-1,O=1/0;E.forEach((H,re)=>{const q=H.getBoundingClientRect(),R=Math.abs(M.clientX-(q.left+q.width/2));R<O&&q.width>0&&(O=R,P=re)}),!(P<0)&&(z(),[[0,.25],[-1,.125],[1,.125]].forEach(([H,re])=>{const q=E[P+H];!q||q.textContent===" "||(q.style.color=gc[(P+H)%gc.length],q.firstElementChild.style.transform=`translateY(${(-re*60).toFixed(1)}%)`,v.push(q))}))};return c.addEventListener("pointermove",j),c.addEventListener("pointerleave",z),()=>{c.removeEventListener("pointermove",j),c.removeEventListener("pointerleave",z)}},[]);const k=()=>{const c=Ft();c?c.scrollTo(0):window.scrollTo({top:0,behavior:Er()?"auto":"smooth"})},w=(c,v)=>{c.preventDefault(),xe.open(v)};return i.jsx("div",{className:"hb-fotM",ref:x,style:{height:s||void 0},children:i.jsxs("footer",{className:"hb-fot",ref:o,children:[i.jsxs("div",{className:"hb-fotRod",children:[i.jsxs("div",{children:[i.jsxs("div",{children:[i.jsx("small",{children:"Hafa samband"}),i.jsx("a",{href:Nr.simiHref,children:Nr.simi}),i.jsx("br",{}),i.jsx("a",{href:`mailto:${Nr.netfang}`,children:Nr.netfang}),i.jsx("br",{}),i.jsx("a",{href:`mailto:${Nr.fjarofloun}`,children:Nr.fjarofloun})]}),i.jsxs("div",{children:[i.jsx("small",{children:"H-Berg"}),i.jsx("a",{href:"#vorur",onClick:c=>{c.preventDefault(),qr("#vorur")},children:"Vörur"}),i.jsx("br",{}),i.jsx("a",{href:"#linur",onClick:c=>{c.preventDefault(),qr("#linur")},children:"Vörulínur"}),i.jsx("br",{}),i.jsx("a",{href:"#ofnaemi",onClick:c=>{c.preventDefault(),qr("#ofnaemi")},children:"Ofnæmisvaldar"}),i.jsx("br",{}),i.jsx("a",{href:"?naering=1",onClick:c=>{c.preventDefault(),xe.open({k:"naering"})},children:"Næringargildi"}),i.jsx("br",{}),i.jsx("a",{href:"#spurt",onClick:c=>{c.preventDefault(),qr("#spurt")},children:"Spurt og svarað"})]}),i.jsxs("div",{children:[i.jsx("small",{children:"Fyrirtæki"}),i.jsx("a",{href:"#poki",onClick:c=>{c.preventDefault(),Pe.open(!0,c)},children:"Pöntunarlisti"}),i.jsx("br",{}),i.jsx("a",{href:"#staerra",onClick:c=>w(c,{k:"staerra"}),children:"Stærri pakkningar"}),i.jsx("br",{}),i.jsx("a",{href:"#hvar",onClick:c=>w(c,{k:"hvar"}),children:"Hvar fæst H-Berg"}),i.jsx("br",{})]}),i.jsxs("div",{children:[i.jsx("small",{children:Nr.logadi}),i.jsx("a",{href:Nr.kort,target:"_blank",rel:"noopener noreferrer",children:Nr.heimili})]})]}),i.jsxs("button",{className:"hb-fotUpp hb-casH",onClick:k,children:[i.jsx(lt,{t:"Aftur upp"})," ↑"]})]}),i.jsx("div",{className:"hb-fotMerki",children:i.jsx("a",{href:"#top","aria-label":"H-Berg, forsíða",children:i.jsx("img",{src:`${bi}hberg/brand/logo.svg${gr}`,alt:"H-Berg",width:280,height:129,loading:"lazy"})})}),i.jsx("p",{className:"hb-slogan",ref:u,"aria-label":fc,children:[...fc].map((c,v)=>i.jsx("span",{"aria-hidden":"true",children:i.jsx("span",{children:c===" "?" ":c})},v))}),i.jsxs("div",{className:"hb-fotBot",children:[i.jsx("span",{children:Nr.logadi}),i.jsx("span",{children:"Fjölskyldufyrirtæki frá 2007"}),i.jsx(uf,{dark:!0,className:"hb-studioBadge"})]})]})})}function Jf(){return Jp(),Yp(),S.useEffect(()=>{const o=document.title,u=document.documentElement.lang;document.title="H-Berg | Hnetur og ávextir frá 2007",document.documentElement.lang="is",Ym(Kp.pappirHreint);const s=window.location.hash,h=s.length>1?window.setTimeout(()=>qr(s),2800):0;return()=>{window.clearTimeout(h),Pe.open(!1),xe.close(),document.title=o,document.documentElement.lang=u}},[]),i.jsxs("div",{className:"hb-root",children:[i.jsxs("style",{children:[Vp,Pf,Hp,Xp,rf,Cp,gp,bf,dp,Sf]}),i.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(ep)}}),i.jsx(Wp,{}),i.jsx(Qp,{}),i.jsx(Up,{}),i.jsx(Pp,{}),i.jsx(ef,{}),i.jsxs("main",{children:[i.jsx(Lf,{}),i.jsx(vf,{}),i.jsx(Mf,{}),i.jsx(Hf,{}),i.jsx(If,{}),i.jsx(xf,{}),i.jsx(jf,{}),i.jsx(Bf,{}),i.jsx(nf,{}),i.jsx(Af,{}),i.jsx($f,{}),i.jsx(Uf,{}),i.jsx(_f,{}),i.jsx(Kf,{}),i.jsx(Vf,{})]})]})}function qf(){const[o,u]=S.useState(Er);return S.useEffect(()=>{const s=matchMedia("(prefers-reduced-motion: reduce)"),h=()=>u(s.matches);return s.addEventListener("change",h),()=>s.removeEventListener("change",h)},[]),i.jsx(Jf,{},String(o))}const bc=document.documentElement,Ac=o=>{bc.getAttribute("data-input")!==o&&bc.setAttribute("data-input",o)};addEventListener("pointerdown",()=>Ac("pointer"),!0);addEventListener("keydown",o=>{o.key==="Shift"||o.key==="Control"||o.key==="Alt"||o.key==="Meta"||Ac("key")},!0);class Yf extends $m.Component{constructor(){super(...arguments);Dd(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?i.jsxs("main",{style:{padding:"15vh 6vw",fontFamily:"system-ui",color:"#1C130D"},children:[i.jsx("h1",{children:"Ekki tókst að opna síðuna."}),i.jsx("p",{children:"Reyndu aftur eða hafðu samband við H-Berg í síma 565 6500."}),i.jsx("button",{onClick:()=>location.reload(),children:"Reyna aftur"})]}):this.props.children}}qm.createRoot(document.getElementById("root")).render(i.jsx(Yf,{children:i.jsx(qf,{})}));export{Gf as c,Dm as g};
