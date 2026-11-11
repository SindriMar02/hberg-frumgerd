var xm=Object.defineProperty;var wm=(o,d,s)=>d in o?xm(o,d,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[d]=s;var Rd=(o,d,s)=>wm(o,typeof d!="symbol"?d+"":d,s);(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))m(p);new MutationObserver(p=>{for(const y of p)if(y.type==="childList")for(const S of y.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&m(S)}).observe(document,{childList:!0,subtree:!0});function s(p){const y={};return p.integrity&&(y.integrity=p.integrity),p.referrerPolicy&&(y.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?y.credentials="include":p.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function m(p){if(p.ep)return;p.ep=!0;const y=s(p);fetch(p.href,y)}})();var Cf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function jm(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ko={exports:{}},di={},yo={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function Sm(){if(Td)return me;Td=1;var o=Symbol.for("react.element"),d=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),S=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),x=Symbol.iterator;function L(v){return v===null||typeof v!="object"?null:(v=x&&v[x]||v["@@iterator"],typeof v=="function"?v:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,I={};function B(v,g,_){this.props=v,this.context=g,this.refs=I,this.updater=_||P}B.prototype.isReactComponent={},B.prototype.setState=function(v,g){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,g,"setState")},B.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function G(){}G.prototype=B.prototype;function Z(v,g,_){this.props=v,this.context=g,this.refs=I,this.updater=_||P}var te=Z.prototype=new G;te.constructor=Z,R(te,B.prototype),te.isPureReactComponent=!0;var ee=Array.isArray,Q=Object.prototype.hasOwnProperty,K={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function ie(v,g,_){var H,J={},se=null,ce=null;if(g!=null)for(H in g.ref!==void 0&&(ce=g.ref),g.key!==void 0&&(se=""+g.key),g)Q.call(g,H)&&!W.hasOwnProperty(H)&&(J[H]=g[H]);var ue=arguments.length-2;if(ue===1)J.children=_;else if(1<ue){for(var ve=Array(ue),Ge=0;Ge<ue;Ge++)ve[Ge]=arguments[Ge+2];J.children=ve}if(v&&v.defaultProps)for(H in ue=v.defaultProps,ue)J[H]===void 0&&(J[H]=ue[H]);return{$$typeof:o,type:v,key:se,ref:ce,props:J,_owner:K.current}}function ae(v,g){return{$$typeof:o,type:v.type,key:g,ref:v.ref,props:v.props,_owner:v._owner}}function pe(v){return typeof v=="object"&&v!==null&&v.$$typeof===o}function we(v){var g={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(_){return g[_]})}var _e=/\/+/g;function Fe(v,g){return typeof v=="object"&&v!==null&&v.key!=null?we(""+v.key):g.toString(36)}function je(v,g,_,H,J){var se=typeof v;(se==="undefined"||se==="boolean")&&(v=null);var ce=!1;if(v===null)ce=!0;else switch(se){case"string":case"number":ce=!0;break;case"object":switch(v.$$typeof){case o:case d:ce=!0}}if(ce)return ce=v,J=J(ce),v=H===""?"."+Fe(ce,0):H,ee(J)?(_="",v!=null&&(_=v.replace(_e,"$&/")+"/"),je(J,g,_,"",function(Ge){return Ge})):J!=null&&(pe(J)&&(J=ae(J,_+(!J.key||ce&&ce.key===J.key?"":(""+J.key).replace(_e,"$&/")+"/")+v)),g.push(J)),1;if(ce=0,H=H===""?".":H+":",ee(v))for(var ue=0;ue<v.length;ue++){se=v[ue];var ve=H+Fe(se,ue);ce+=je(se,g,_,ve,J)}else if(ve=L(v),typeof ve=="function")for(v=ve.call(v),ue=0;!(se=v.next()).done;)se=se.value,ve=H+Fe(se,ue++),ce+=je(se,g,_,ve,J);else if(se==="object")throw g=String(v),Error("Objects are not valid as a React child (found: "+(g==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":g)+"). If you meant to render a collection of children, use an array instead.");return ce}function Le(v,g,_){if(v==null)return v;var H=[],J=0;return je(v,H,"","",function(se){return g.call(_,se,J++)}),H}function ze(v){if(v._status===-1){var g=v._result;g=g(),g.then(function(_){(v._status===0||v._status===-1)&&(v._status=1,v._result=_)},function(_){(v._status===0||v._status===-1)&&(v._status=2,v._result=_)}),v._status===-1&&(v._status=0,v._result=g)}if(v._status===1)return v._result.default;throw v._result}var ye={current:null},V={transition:null},z={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function U(){throw Error("act(...) is not supported in production builds of React.")}return me.Children={map:Le,forEach:function(v,g,_){Le(v,function(){g.apply(this,arguments)},_)},count:function(v){var g=0;return Le(v,function(){g++}),g},toArray:function(v){return Le(v,function(g){return g})||[]},only:function(v){if(!pe(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},me.Component=B,me.Fragment=s,me.Profiler=p,me.PureComponent=Z,me.StrictMode=m,me.Suspense=c,me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=z,me.act=U,me.cloneElement=function(v,g,_){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var H=R({},v.props),J=v.key,se=v.ref,ce=v._owner;if(g!=null){if(g.ref!==void 0&&(se=g.ref,ce=K.current),g.key!==void 0&&(J=""+g.key),v.type&&v.type.defaultProps)var ue=v.type.defaultProps;for(ve in g)Q.call(g,ve)&&!W.hasOwnProperty(ve)&&(H[ve]=g[ve]===void 0&&ue!==void 0?ue[ve]:g[ve])}var ve=arguments.length-2;if(ve===1)H.children=_;else if(1<ve){ue=Array(ve);for(var Ge=0;Ge<ve;Ge++)ue[Ge]=arguments[Ge+2];H.children=ue}return{$$typeof:o,type:v.type,key:J,ref:se,props:H,_owner:ce}},me.createContext=function(v){return v={$$typeof:S,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:y,_context:v},v.Consumer=v},me.createElement=ie,me.createFactory=function(v){var g=ie.bind(null,v);return g.type=v,g},me.createRef=function(){return{current:null}},me.forwardRef=function(v){return{$$typeof:E,render:v}},me.isValidElement=pe,me.lazy=function(v){return{$$typeof:F,_payload:{_status:-1,_result:v},_init:ze}},me.memo=function(v,g){return{$$typeof:k,type:v,compare:g===void 0?null:g}},me.startTransition=function(v){var g=V.transition;V.transition={};try{v()}finally{V.transition=g}},me.unstable_act=U,me.useCallback=function(v,g){return ye.current.useCallback(v,g)},me.useContext=function(v){return ye.current.useContext(v)},me.useDebugValue=function(){},me.useDeferredValue=function(v){return ye.current.useDeferredValue(v)},me.useEffect=function(v,g){return ye.current.useEffect(v,g)},me.useId=function(){return ye.current.useId()},me.useImperativeHandle=function(v,g,_){return ye.current.useImperativeHandle(v,g,_)},me.useInsertionEffect=function(v,g){return ye.current.useInsertionEffect(v,g)},me.useLayoutEffect=function(v,g){return ye.current.useLayoutEffect(v,g)},me.useMemo=function(v,g){return ye.current.useMemo(v,g)},me.useReducer=function(v,g,_){return ye.current.useReducer(v,g,_)},me.useRef=function(v){return ye.current.useRef(v)},me.useState=function(v){return ye.current.useState(v)},me.useSyncExternalStore=function(v,g,_){return ye.current.useSyncExternalStore(v,g,_)},me.useTransition=function(){return ye.current.useTransition()},me.version="18.3.1",me}var Fd;function Uo(){return Fd||(Fd=1,yo.exports=Sm()),yo.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function Nm(){if(Ld)return di;Ld=1;var o=Uo(),d=Symbol.for("react.element"),s=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,p=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function S(E,c,k){var F,x={},L=null,P=null;k!==void 0&&(L=""+k),c.key!==void 0&&(L=""+c.key),c.ref!==void 0&&(P=c.ref);for(F in c)m.call(c,F)&&!y.hasOwnProperty(F)&&(x[F]=c[F]);if(E&&E.defaultProps)for(F in c=E.defaultProps,c)x[F]===void 0&&(x[F]=c[F]);return{$$typeof:d,type:E,key:L,ref:P,props:x,_owner:p.current}}return di.Fragment=s,di.jsx=S,di.jsxs=S,di}var zd;function Em(){return zd||(zd=1,ko.exports=Nm()),ko.exports}var i=Em(),T=Uo();const Cm=jm(T);var Na={},xo={exports:{}},ur={},wo={exports:{}},jo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function Pm(){return Md||(Md=1,(function(o){function d(V,z){var U=V.length;V.push(z);e:for(;0<U;){var v=U-1>>>1,g=V[v];if(0<p(g,z))V[v]=z,V[U]=g,U=v;else break e}}function s(V){return V.length===0?null:V[0]}function m(V){if(V.length===0)return null;var z=V[0],U=V.pop();if(U!==z){V[0]=U;e:for(var v=0,g=V.length,_=g>>>1;v<_;){var H=2*(v+1)-1,J=V[H],se=H+1,ce=V[se];if(0>p(J,U))se<g&&0>p(ce,J)?(V[v]=ce,V[se]=U,v=se):(V[v]=J,V[H]=U,v=H);else if(se<g&&0>p(ce,U))V[v]=ce,V[se]=U,v=se;else break e}}return z}function p(V,z){var U=V.sortIndex-z.sortIndex;return U!==0?U:V.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var y=performance;o.unstable_now=function(){return y.now()}}else{var S=Date,E=S.now();o.unstable_now=function(){return S.now()-E}}var c=[],k=[],F=1,x=null,L=3,P=!1,R=!1,I=!1,B=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(V){for(var z=s(k);z!==null;){if(z.callback===null)m(k);else if(z.startTime<=V)m(k),z.sortIndex=z.expirationTime,d(c,z);else break;z=s(k)}}function ee(V){if(I=!1,te(V),!R)if(s(c)!==null)R=!0,ze(Q);else{var z=s(k);z!==null&&ye(ee,z.startTime-V)}}function Q(V,z){R=!1,I&&(I=!1,G(ie),ie=-1),P=!0;var U=L;try{for(te(z),x=s(c);x!==null&&(!(x.expirationTime>z)||V&&!we());){var v=x.callback;if(typeof v=="function"){x.callback=null,L=x.priorityLevel;var g=v(x.expirationTime<=z);z=o.unstable_now(),typeof g=="function"?x.callback=g:x===s(c)&&m(c),te(z)}else m(c);x=s(c)}if(x!==null)var _=!0;else{var H=s(k);H!==null&&ye(ee,H.startTime-z),_=!1}return _}finally{x=null,L=U,P=!1}}var K=!1,W=null,ie=-1,ae=5,pe=-1;function we(){return!(o.unstable_now()-pe<ae)}function _e(){if(W!==null){var V=o.unstable_now();pe=V;var z=!0;try{z=W(!0,V)}finally{z?Fe():(K=!1,W=null)}}else K=!1}var Fe;if(typeof Z=="function")Fe=function(){Z(_e)};else if(typeof MessageChannel<"u"){var je=new MessageChannel,Le=je.port2;je.port1.onmessage=_e,Fe=function(){Le.postMessage(null)}}else Fe=function(){B(_e,0)};function ze(V){W=V,K||(K=!0,Fe())}function ye(V,z){ie=B(function(){V(o.unstable_now())},z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(V){V.callback=null},o.unstable_continueExecution=function(){R||P||(R=!0,ze(Q))},o.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<V?Math.floor(1e3/V):5},o.unstable_getCurrentPriorityLevel=function(){return L},o.unstable_getFirstCallbackNode=function(){return s(c)},o.unstable_next=function(V){switch(L){case 1:case 2:case 3:var z=3;break;default:z=L}var U=L;L=z;try{return V()}finally{L=U}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(V,z){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var U=L;L=V;try{return z()}finally{L=U}},o.unstable_scheduleCallback=function(V,z,U){var v=o.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?v+U:v):U=v,V){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=U+g,V={id:F++,callback:z,priorityLevel:V,startTime:U,expirationTime:g,sortIndex:-1},U>v?(V.sortIndex=U,d(k,V),s(c)===null&&V===s(k)&&(I?(G(ie),ie=-1):I=!0,ye(ee,U-v))):(V.sortIndex=g,d(c,V),R||P||(R=!0,ze(Q))),V},o.unstable_shouldYield=we,o.unstable_wrapCallback=function(V){var z=L;return function(){var U=L;L=z;try{return V.apply(this,arguments)}finally{L=U}}}})(jo)),jo}var Od;function Rm(){return Od||(Od=1,wo.exports=Pm()),wo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function Tm(){if(Hd)return ur;Hd=1;var o=Uo(),d=Rm();function s(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,p={};function y(e,r){S(e,r),S(e+"Capture",r)}function S(e,r){for(p[e]=r,e=0;e<r.length;e++)m.add(r[e])}var E=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),c=Object.prototype.hasOwnProperty,k=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,F={},x={};function L(e){return c.call(x,e)?!0:c.call(F,e)?!1:k.test(e)?x[e]=!0:(F[e]=!0,!1)}function P(e,r,t,n){if(t!==null&&t.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function R(e,r,t,n){if(r===null||typeof r>"u"||P(e,r,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function I(e,r,t,n,a,l,u){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=t,this.propertyName=e,this.type=r,this.sanitizeURL=l,this.removeEmptyString=u}var B={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){B[e]=new I(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var r=e[0];B[r]=new I(r,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){B[e]=new I(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){B[e]=new I(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){B[e]=new I(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){B[e]=new I(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){B[e]=new I(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){B[e]=new I(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){B[e]=new I(e,5,!1,e.toLowerCase(),null,!1,!1)});var G=/[\-:]([a-z])/g;function Z(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var r=e.replace(G,Z);B[r]=new I(r,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var r=e.replace(G,Z);B[r]=new I(r,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var r=e.replace(G,Z);B[r]=new I(r,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){B[e]=new I(e,1,!1,e.toLowerCase(),null,!1,!1)}),B.xlinkHref=new I("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){B[e]=new I(e,1,!1,e.toLowerCase(),null,!0,!0)});function te(e,r,t,n){var a=B.hasOwnProperty(r)?B[r]:null;(a!==null?a.type!==0:n||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(R(r,t,a,n)&&(t=null),n||a===null?L(r)&&(t===null?e.removeAttribute(r):e.setAttribute(r,""+t)):a.mustUseProperty?e[a.propertyName]=t===null?a.type===3?!1:"":t:(r=a.attributeName,n=a.attributeNamespace,t===null?e.removeAttribute(r):(a=a.type,t=a===3||a===4&&t===!0?"":""+t,n?e.setAttributeNS(n,r,t):e.setAttribute(r,t))))}var ee=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),K=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),ie=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),pe=Symbol.for("react.provider"),we=Symbol.for("react.context"),_e=Symbol.for("react.forward_ref"),Fe=Symbol.for("react.suspense"),je=Symbol.for("react.suspense_list"),Le=Symbol.for("react.memo"),ze=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),V=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,v;function g(e){if(v===void 0)try{throw Error()}catch(t){var r=t.stack.trim().match(/\n( *(at )?)/);v=r&&r[1]||""}return`
`+v+e}var _=!1;function H(e,r){if(!e||_)return"";_=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(C){var n=C}Reflect.construct(e,[],r)}else{try{r.call()}catch(C){n=C}e.call(r.prototype)}else{try{throw Error()}catch(C){n=C}e()}}catch(C){if(C&&n&&typeof C.stack=="string"){for(var a=C.stack.split(`
`),l=n.stack.split(`
`),u=a.length-1,h=l.length-1;1<=u&&0<=h&&a[u]!==l[h];)h--;for(;1<=u&&0<=h;u--,h--)if(a[u]!==l[h]){if(u!==1||h!==1)do if(u--,h--,0>h||a[u]!==l[h]){var f=`
`+a[u].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=u&&0<=h);break}}}finally{_=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?g(e):""}function J(e){switch(e.tag){case 5:return g(e.type);case 16:return g("Lazy");case 13:return g("Suspense");case 19:return g("SuspenseList");case 0:case 2:case 15:return e=H(e.type,!1),e;case 11:return e=H(e.type.render,!1),e;case 1:return e=H(e.type,!0),e;default:return""}}function se(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case K:return"Portal";case ae:return"Profiler";case ie:return"StrictMode";case Fe:return"Suspense";case je:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case we:return(e.displayName||"Context")+".Consumer";case pe:return(e._context.displayName||"Context")+".Provider";case _e:var r=e.render;return e=e.displayName,e||(e=r.displayName||r.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Le:return r=e.displayName||null,r!==null?r:se(e.type)||"Memo";case ze:r=e._payload,e=e._init;try{return se(e(r))}catch{}}return null}function ce(e){var r=e.type;switch(e.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=r.render,e=e.displayName||e.name||"",r.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(r);case 8:return r===ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var r=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ge(e){var r=ve(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,r),n=""+e[r];if(!e.hasOwnProperty(r)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var a=t.get,l=t.set;return Object.defineProperty(e,r,{configurable:!0,get:function(){return a.call(this)},set:function(u){n=""+u,l.call(this,u)}}),Object.defineProperty(e,r,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[r]}}}}function ot(e){e._valueTracker||(e._valueTracker=Ge(e))}function fr(e){if(!e)return!1;var r=e._valueTracker;if(!r)return!0;var t=r.getValue(),n="";return e&&(n=ve(e)?e.checked?"true":"false":e.value),e=n,e!==t?(r.setValue(e),!0):!1}function Lt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sn(e,r){var t=r.checked;return U({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function Nn(e,r){var t=r.defaultValue==null?"":r.defaultValue,n=r.checked!=null?r.checked:r.defaultChecked;t=ue(r.value!=null?r.value:t),e._wrapperState={initialChecked:n,initialValue:t,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function fi(e,r){r=r.checked,r!=null&&te(e,"checked",r,!1)}function Wt(e,r){fi(e,r);var t=ue(r.value),n=r.type;if(t!=null)n==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}r.hasOwnProperty("value")?j(e,r.type,t):r.hasOwnProperty("defaultValue")&&j(e,r.type,ue(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(e.defaultChecked=!!r.defaultChecked)}function En(e,r,t){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var n=r.type;if(!(n!=="submit"&&n!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+e._wrapperState.initialValue,t||r===e.value||(e.value=r),e.defaultValue=r}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function j(e,r,t){(r!=="number"||Lt(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var A=Array.isArray;function he(e,r,t,n){if(e=e.options,r){r={};for(var a=0;a<t.length;a++)r["$"+t[a]]=!0;for(t=0;t<e.length;t++)a=r.hasOwnProperty("$"+e[t].value),e[t].selected!==a&&(e[t].selected=a),a&&n&&(e[t].defaultSelected=!0)}else{for(t=""+ue(t),r=null,a=0;a<e.length;a++){if(e[a].value===t){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}r!==null||e[a].disabled||(r=e[a])}r!==null&&(r.selected=!0)}}function be(e,r){if(r.dangerouslySetInnerHTML!=null)throw Error(s(91));return U({},r,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hr(e,r){var t=r.value;if(t==null){if(t=r.children,r=r.defaultValue,t!=null){if(r!=null)throw Error(s(92));if(A(t)){if(1<t.length)throw Error(s(93));t=t[0]}r=t}r==null&&(r=""),t=r}e._wrapperState={initialValue:ue(t)}}function Wr(e,r){var t=ue(r.value),n=ue(r.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),r.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),n!=null&&(e.defaultValue=""+n)}function jr(e){var r=e.textContent;r===e._wrapperState.initialValue&&r!==""&&r!==null&&(e.value=r)}function gi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ir(e,r){return e==null||e==="http://www.w3.org/1999/xhtml"?gi(r):e==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var zt,Dr=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,t,n,a){MSApp.execUnsafeLocalFunction(function(){return e(r,t,n,a)})}:e})(function(e,r){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=r;else{for(zt=zt||document.createElement("div"),zt.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=zt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;r.firstChild;)e.appendChild(r.firstChild)}});function Mt(e,r){if(r){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=r;return}}e.textContent=r}var st={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vi=["Webkit","ms","Moz","O"];Object.keys(st).forEach(function(e){vi.forEach(function(r){r=r+e.charAt(0).toUpperCase()+e.substring(1),st[r]=st[e]})});function Cn(e,r,t){return r==null||typeof r=="boolean"||r===""?"":t||typeof r!="number"||r===0||st.hasOwnProperty(e)&&st[e]?(""+r).trim():r+"px"}function ke(e,r){e=e.style;for(var t in r)if(r.hasOwnProperty(t)){var n=t.indexOf("--")===0,a=Cn(t,r[t],n);t==="float"&&(t="cssFloat"),n?e.setProperty(t,a):e[t]=a}}var ut=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sr(e,r){if(r){if(ut[e]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(s(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(s(61))}if(r.style!=null&&typeof r.style!="object")throw Error(s(62))}}function Br(e,r){if(e.indexOf("-")===-1)return typeof r.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dt=null;function Yt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yr=null,Gt=null,Qt=null;function Jo(e){if(e=Yn(e)){if(typeof Yr!="function")throw Error(s(280));var r=e.stateNode;r&&(r=_i(r),Yr(e.stateNode,e.type,r))}}function qo(e){Gt?Qt?Qt.push(e):Qt=[e]:Gt=e}function Wo(){if(Gt){var e=Gt,r=Qt;if(Qt=Gt=null,Jo(e),r)for(e=0;e<r.length;e++)Jo(r[e])}}function Yo(e,r){return e(r)}function Go(){}var Oa=!1;function Qo(e,r,t){if(Oa)return e(r,t);Oa=!0;try{return Yo(e,r,t)}finally{Oa=!1,(Gt!==null||Qt!==null)&&(Go(),Wo())}}function Pn(e,r){var t=e.stateNode;if(t===null)return null;var n=_i(t);if(n===null)return null;t=n[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(s(231,r,typeof t));return t}var Ha=!1;if(E)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){Ha=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{Ha=!1}function Cc(e,r,t,n,a,l,u,h,f){var C=Array.prototype.slice.call(arguments,3);try{r.apply(t,C)}catch(O){this.onError(O)}}var Tn=!1,bi=null,ki=!1,Ia=null,Pc={onError:function(e){Tn=!0,bi=e}};function Rc(e,r,t,n,a,l,u,h,f){Tn=!1,bi=null,Cc.apply(Pc,arguments)}function Tc(e,r,t,n,a,l,u,h,f){if(Rc.apply(this,arguments),Tn){if(Tn){var C=bi;Tn=!1,bi=null}else throw Error(s(198));ki||(ki=!0,Ia=C)}}function Ot(e){var r=e,t=e;if(e.alternate)for(;r.return;)r=r.return;else{e=r;do r=e,(r.flags&4098)!==0&&(t=r.return),e=r.return;while(e)}return r.tag===3?t:null}function Xo(e){if(e.tag===13){var r=e.memoizedState;if(r===null&&(e=e.alternate,e!==null&&(r=e.memoizedState)),r!==null)return r.dehydrated}return null}function Zo(e){if(Ot(e)!==e)throw Error(s(188))}function Fc(e){var r=e.alternate;if(!r){if(r=Ot(e),r===null)throw Error(s(188));return r!==e?null:e}for(var t=e,n=r;;){var a=t.return;if(a===null)break;var l=a.alternate;if(l===null){if(n=a.return,n!==null){t=n;continue}break}if(a.child===l.child){for(l=a.child;l;){if(l===t)return Zo(a),e;if(l===n)return Zo(a),r;l=l.sibling}throw Error(s(188))}if(t.return!==n.return)t=a,n=l;else{for(var u=!1,h=a.child;h;){if(h===t){u=!0,t=a,n=l;break}if(h===n){u=!0,n=a,t=l;break}h=h.sibling}if(!u){for(h=l.child;h;){if(h===t){u=!0,t=l,n=a;break}if(h===n){u=!0,n=l,t=a;break}h=h.sibling}if(!u)throw Error(s(189))}}if(t.alternate!==n)throw Error(s(190))}if(t.tag!==3)throw Error(s(188));return t.stateNode.current===t?e:r}function es(e){return e=Fc(e),e!==null?rs(e):null}function rs(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var r=rs(e);if(r!==null)return r;e=e.sibling}return null}var ts=d.unstable_scheduleCallback,ns=d.unstable_cancelCallback,Lc=d.unstable_shouldYield,zc=d.unstable_requestPaint,Ie=d.unstable_now,Mc=d.unstable_getCurrentPriorityLevel,Da=d.unstable_ImmediatePriority,is=d.unstable_UserBlockingPriority,yi=d.unstable_NormalPriority,Oc=d.unstable_LowPriority,as=d.unstable_IdlePriority,xi=null,_r=null;function Hc(e){if(_r&&typeof _r.onCommitFiberRoot=="function")try{_r.onCommitFiberRoot(xi,e,void 0,(e.current.flags&128)===128)}catch{}}var Nr=Math.clz32?Math.clz32:Bc,Ic=Math.log,Dc=Math.LN2;function Bc(e){return e>>>=0,e===0?32:31-(Ic(e)/Dc|0)|0}var wi=64,ji=4194304;function Fn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Si(e,r){var t=e.pendingLanes;if(t===0)return 0;var n=0,a=e.suspendedLanes,l=e.pingedLanes,u=t&268435455;if(u!==0){var h=u&~a;h!==0?n=Fn(h):(l&=u,l!==0&&(n=Fn(l)))}else u=t&~a,u!==0?n=Fn(u):l!==0&&(n=Fn(l));if(n===0)return 0;if(r!==0&&r!==n&&(r&a)===0&&(a=n&-n,l=r&-r,a>=l||a===16&&(l&4194240)!==0))return r;if((n&4)!==0&&(n|=t&16),r=e.entangledLanes,r!==0)for(e=e.entanglements,r&=n;0<r;)t=31-Nr(r),a=1<<t,n|=e[t],r&=~a;return n}function _c(e,r){switch(e){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uc(e,r){for(var t=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var u=31-Nr(l),h=1<<u,f=a[u];f===-1?((h&t)===0||(h&n)!==0)&&(a[u]=_c(h,r)):f<=r&&(e.expiredLanes|=h),l&=~h}}function Ba(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ls(){var e=wi;return wi<<=1,(wi&4194240)===0&&(wi=64),e}function _a(e){for(var r=[],t=0;31>t;t++)r.push(e);return r}function Ln(e,r,t){e.pendingLanes|=r,r!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,r=31-Nr(r),e[r]=t}function $c(e,r){var t=e.pendingLanes&~r;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=r,e.mutableReadLanes&=r,e.entangledLanes&=r,r=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<t;){var a=31-Nr(t),l=1<<a;r[a]=0,n[a]=-1,e[a]=-1,t&=~l}}function Ua(e,r){var t=e.entangledLanes|=r;for(e=e.entanglements;t;){var n=31-Nr(t),a=1<<n;a&r|e[n]&r&&(e[n]|=r),t&=~a}}var xe=0;function os(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ss,$a,us,ds,cs,Aa=!1,Ni=[],ct=null,ht=null,mt=null,zn=new Map,Mn=new Map,pt=[],Ac="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hs(e,r){switch(e){case"focusin":case"focusout":ct=null;break;case"dragenter":case"dragleave":ht=null;break;case"mouseover":case"mouseout":mt=null;break;case"pointerover":case"pointerout":zn.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(r.pointerId)}}function On(e,r,t,n,a,l){return e===null||e.nativeEvent!==l?(e={blockedOn:r,domEventName:t,eventSystemFlags:n,nativeEvent:l,targetContainers:[a]},r!==null&&(r=Yn(r),r!==null&&$a(r)),e):(e.eventSystemFlags|=n,r=e.targetContainers,a!==null&&r.indexOf(a)===-1&&r.push(a),e)}function Kc(e,r,t,n,a){switch(r){case"focusin":return ct=On(ct,e,r,t,n,a),!0;case"dragenter":return ht=On(ht,e,r,t,n,a),!0;case"mouseover":return mt=On(mt,e,r,t,n,a),!0;case"pointerover":var l=a.pointerId;return zn.set(l,On(zn.get(l)||null,e,r,t,n,a)),!0;case"gotpointercapture":return l=a.pointerId,Mn.set(l,On(Mn.get(l)||null,e,r,t,n,a)),!0}return!1}function ms(e){var r=Ht(e.target);if(r!==null){var t=Ot(r);if(t!==null){if(r=t.tag,r===13){if(r=Xo(t),r!==null){e.blockedOn=r,cs(e.priority,function(){us(t)});return}}else if(r===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ei(e){if(e.blockedOn!==null)return!1;for(var r=e.targetContainers;0<r.length;){var t=Va(e.domEventName,e.eventSystemFlags,r[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);dt=n,t.target.dispatchEvent(n),dt=null}else return r=Yn(t),r!==null&&$a(r),e.blockedOn=t,!1;r.shift()}return!0}function ps(e,r,t){Ei(e)&&t.delete(r)}function Vc(){Aa=!1,ct!==null&&Ei(ct)&&(ct=null),ht!==null&&Ei(ht)&&(ht=null),mt!==null&&Ei(mt)&&(mt=null),zn.forEach(ps),Mn.forEach(ps)}function Hn(e,r){e.blockedOn===r&&(e.blockedOn=null,Aa||(Aa=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Vc)))}function In(e){function r(a){return Hn(a,e)}if(0<Ni.length){Hn(Ni[0],e);for(var t=1;t<Ni.length;t++){var n=Ni[t];n.blockedOn===e&&(n.blockedOn=null)}}for(ct!==null&&Hn(ct,e),ht!==null&&Hn(ht,e),mt!==null&&Hn(mt,e),zn.forEach(r),Mn.forEach(r),t=0;t<pt.length;t++)n=pt[t],n.blockedOn===e&&(n.blockedOn=null);for(;0<pt.length&&(t=pt[0],t.blockedOn===null);)ms(t),t.blockedOn===null&&pt.shift()}var Xt=ee.ReactCurrentBatchConfig,Ci=!0;function Jc(e,r,t,n){var a=xe,l=Xt.transition;Xt.transition=null;try{xe=1,Ka(e,r,t,n)}finally{xe=a,Xt.transition=l}}function qc(e,r,t,n){var a=xe,l=Xt.transition;Xt.transition=null;try{xe=4,Ka(e,r,t,n)}finally{xe=a,Xt.transition=l}}function Ka(e,r,t,n){if(Ci){var a=Va(e,r,t,n);if(a===null)sl(e,r,n,Pi,t),hs(e,n);else if(Kc(a,e,r,t,n))n.stopPropagation();else if(hs(e,n),r&4&&-1<Ac.indexOf(e)){for(;a!==null;){var l=Yn(a);if(l!==null&&ss(l),l=Va(e,r,t,n),l===null&&sl(e,r,n,Pi,t),l===a)break;a=l}a!==null&&n.stopPropagation()}else sl(e,r,n,null,t)}}var Pi=null;function Va(e,r,t,n){if(Pi=null,e=Yt(n),e=Ht(e),e!==null)if(r=Ot(e),r===null)e=null;else if(t=r.tag,t===13){if(e=Xo(r),e!==null)return e;e=null}else if(t===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;e=null}else r!==e&&(e=null);return Pi=e,null}function fs(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Mc()){case Da:return 1;case is:return 4;case yi:case Oc:return 16;case as:return 536870912;default:return 16}default:return 16}}var ft=null,Ja=null,Ri=null;function gs(){if(Ri)return Ri;var e,r=Ja,t=r.length,n,a="value"in ft?ft.value:ft.textContent,l=a.length;for(e=0;e<t&&r[e]===a[e];e++);var u=t-e;for(n=1;n<=u&&r[t-n]===a[l-n];n++);return Ri=a.slice(e,1<n?1-n:void 0)}function Ti(e){var r=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&r===13&&(e=13)):e=r,e===10&&(e=13),32<=e||e===13?e:0}function Fi(){return!0}function vs(){return!1}function dr(e){function r(t,n,a,l,u){this._reactName=t,this._targetInst=a,this.type=n,this.nativeEvent=l,this.target=u,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(t=e[h],this[h]=t?t(l):l[h]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Fi:vs,this.isPropagationStopped=vs,this}return U(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Fi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Fi)},persist:function(){},isPersistent:Fi}),r}var Zt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qa=dr(Zt),Dn=U({},Zt,{view:0,detail:0}),Wc=dr(Dn),Wa,Ya,Bn,Li=U({},Dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bn&&(Bn&&e.type==="mousemove"?(Wa=e.screenX-Bn.screenX,Ya=e.screenY-Bn.screenY):Ya=Wa=0,Bn=e),Wa)},movementY:function(e){return"movementY"in e?e.movementY:Ya}}),bs=dr(Li),Yc=U({},Li,{dataTransfer:0}),Gc=dr(Yc),Qc=U({},Dn,{relatedTarget:0}),Ga=dr(Qc),Xc=U({},Zt,{animationName:0,elapsedTime:0,pseudoElement:0}),Zc=dr(Xc),eh=U({},Zt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rh=dr(eh),th=U({},Zt,{data:0}),ks=dr(th),nh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ih={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ah={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lh(e){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(e):(e=ah[e])?!!r[e]:!1}function Qa(){return lh}var oh=U({},Dn,{key:function(e){if(e.key){var r=nh[e.key]||e.key;if(r!=="Unidentified")return r}return e.type==="keypress"?(e=Ti(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ih[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qa,charCode:function(e){return e.type==="keypress"?Ti(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ti(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sh=dr(oh),uh=U({},Li,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ys=dr(uh),dh=U({},Dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qa}),ch=dr(dh),hh=U({},Zt,{propertyName:0,elapsedTime:0,pseudoElement:0}),mh=dr(hh),ph=U({},Li,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fh=dr(ph),gh=[9,13,27,32],Xa=E&&"CompositionEvent"in window,_n=null;E&&"documentMode"in document&&(_n=document.documentMode);var vh=E&&"TextEvent"in window&&!_n,xs=E&&(!Xa||_n&&8<_n&&11>=_n),ws=" ",js=!1;function Ss(e,r){switch(e){case"keyup":return gh.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ns(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var en=!1;function bh(e,r){switch(e){case"compositionend":return Ns(r);case"keypress":return r.which!==32?null:(js=!0,ws);case"textInput":return e=r.data,e===ws&&js?null:e;default:return null}}function kh(e,r){if(en)return e==="compositionend"||!Xa&&Ss(e,r)?(e=gs(),Ri=Ja=ft=null,en=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return xs&&r.locale!=="ko"?null:r.data;default:return null}}var yh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Es(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r==="input"?!!yh[e.type]:r==="textarea"}function Cs(e,r,t,n){qo(n),r=Ii(r,"onChange"),0<r.length&&(t=new qa("onChange","change",null,t,n),e.push({event:t,listeners:r}))}var Un=null,$n=null;function xh(e){Vs(e,0)}function zi(e){var r=ln(e);if(fr(r))return e}function wh(e,r){if(e==="change")return r}var Ps=!1;if(E){var Za;if(E){var el="oninput"in document;if(!el){var Rs=document.createElement("div");Rs.setAttribute("oninput","return;"),el=typeof Rs.oninput=="function"}Za=el}else Za=!1;Ps=Za&&(!document.documentMode||9<document.documentMode)}function Ts(){Un&&(Un.detachEvent("onpropertychange",Fs),$n=Un=null)}function Fs(e){if(e.propertyName==="value"&&zi($n)){var r=[];Cs(r,$n,e,Yt(e)),Qo(xh,r)}}function jh(e,r,t){e==="focusin"?(Ts(),Un=r,$n=t,Un.attachEvent("onpropertychange",Fs)):e==="focusout"&&Ts()}function Sh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zi($n)}function Nh(e,r){if(e==="click")return zi(r)}function Eh(e,r){if(e==="input"||e==="change")return zi(r)}function Ch(e,r){return e===r&&(e!==0||1/e===1/r)||e!==e&&r!==r}var Er=typeof Object.is=="function"?Object.is:Ch;function An(e,r){if(Er(e,r))return!0;if(typeof e!="object"||e===null||typeof r!="object"||r===null)return!1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var a=t[n];if(!c.call(r,a)||!Er(e[a],r[a]))return!1}return!0}function Ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zs(e,r){var t=Ls(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=r&&n>=r)return{node:t,offset:r-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Ls(t)}}function Ms(e,r){return e&&r?e===r?!0:e&&e.nodeType===3?!1:r&&r.nodeType===3?Ms(e,r.parentNode):"contains"in e?e.contains(r):e.compareDocumentPosition?!!(e.compareDocumentPosition(r)&16):!1:!1}function Os(){for(var e=window,r=Lt();r instanceof e.HTMLIFrameElement;){try{var t=typeof r.contentWindow.location.href=="string"}catch{t=!1}if(t)e=r.contentWindow;else break;r=Lt(e.document)}return r}function rl(e){var r=e&&e.nodeName&&e.nodeName.toLowerCase();return r&&(r==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||r==="textarea"||e.contentEditable==="true")}function Ph(e){var r=Os(),t=e.focusedElem,n=e.selectionRange;if(r!==t&&t&&t.ownerDocument&&Ms(t.ownerDocument.documentElement,t)){if(n!==null&&rl(t)){if(r=n.start,e=n.end,e===void 0&&(e=r),"selectionStart"in t)t.selectionStart=r,t.selectionEnd=Math.min(e,t.value.length);else if(e=(r=t.ownerDocument||document)&&r.defaultView||window,e.getSelection){e=e.getSelection();var a=t.textContent.length,l=Math.min(n.start,a);n=n.end===void 0?l:Math.min(n.end,a),!e.extend&&l>n&&(a=n,n=l,l=a),a=zs(t,l);var u=zs(t,n);a&&u&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(r=r.createRange(),r.setStart(a.node,a.offset),e.removeAllRanges(),l>n?(e.addRange(r),e.extend(u.node,u.offset)):(r.setEnd(u.node,u.offset),e.addRange(r)))}}for(r=[],e=t;e=e.parentNode;)e.nodeType===1&&r.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<r.length;t++)e=r[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rh=E&&"documentMode"in document&&11>=document.documentMode,rn=null,tl=null,Kn=null,nl=!1;function Hs(e,r,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;nl||rn==null||rn!==Lt(n)||(n=rn,"selectionStart"in n&&rl(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Kn&&An(Kn,n)||(Kn=n,n=Ii(tl,"onSelect"),0<n.length&&(r=new qa("onSelect","select",null,r,t),e.push({event:r,listeners:n}),r.target=rn)))}function Mi(e,r){var t={};return t[e.toLowerCase()]=r.toLowerCase(),t["Webkit"+e]="webkit"+r,t["Moz"+e]="moz"+r,t}var tn={animationend:Mi("Animation","AnimationEnd"),animationiteration:Mi("Animation","AnimationIteration"),animationstart:Mi("Animation","AnimationStart"),transitionend:Mi("Transition","TransitionEnd")},il={},Is={};E&&(Is=document.createElement("div").style,"AnimationEvent"in window||(delete tn.animationend.animation,delete tn.animationiteration.animation,delete tn.animationstart.animation),"TransitionEvent"in window||delete tn.transitionend.transition);function Oi(e){if(il[e])return il[e];if(!tn[e])return e;var r=tn[e],t;for(t in r)if(r.hasOwnProperty(t)&&t in Is)return il[e]=r[t];return e}var Ds=Oi("animationend"),Bs=Oi("animationiteration"),_s=Oi("animationstart"),Us=Oi("transitionend"),$s=new Map,As="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gt(e,r){$s.set(e,r),y(r,[e])}for(var al=0;al<As.length;al++){var ll=As[al],Th=ll.toLowerCase(),Fh=ll[0].toUpperCase()+ll.slice(1);gt(Th,"on"+Fh)}gt(Ds,"onAnimationEnd"),gt(Bs,"onAnimationIteration"),gt(_s,"onAnimationStart"),gt("dblclick","onDoubleClick"),gt("focusin","onFocus"),gt("focusout","onBlur"),gt(Us,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),y("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),y("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),y("onBeforeInput",["compositionend","keypress","textInput","paste"]),y("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),y("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),y("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vn));function Ks(e,r,t){var n=e.type||"unknown-event";e.currentTarget=t,Tc(n,r,void 0,e),e.currentTarget=null}function Vs(e,r){r=(r&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],a=n.event;n=n.listeners;e:{var l=void 0;if(r)for(var u=n.length-1;0<=u;u--){var h=n[u],f=h.instance,C=h.currentTarget;if(h=h.listener,f!==l&&a.isPropagationStopped())break e;Ks(a,h,C),l=f}else for(u=0;u<n.length;u++){if(h=n[u],f=h.instance,C=h.currentTarget,h=h.listener,f!==l&&a.isPropagationStopped())break e;Ks(a,h,C),l=f}}}if(ki)throw e=Ia,ki=!1,Ia=null,e}function Ee(e,r){var t=r[pl];t===void 0&&(t=r[pl]=new Set);var n=e+"__bubble";t.has(n)||(Js(r,e,2,!1),t.add(n))}function ol(e,r,t){var n=0;r&&(n|=4),Js(t,e,n,r)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function Jn(e){if(!e[Hi]){e[Hi]=!0,m.forEach(function(t){t!=="selectionchange"&&(Lh.has(t)||ol(t,!1,e),ol(t,!0,e))});var r=e.nodeType===9?e:e.ownerDocument;r===null||r[Hi]||(r[Hi]=!0,ol("selectionchange",!1,r))}}function Js(e,r,t,n){switch(fs(r)){case 1:var a=Jc;break;case 4:a=qc;break;default:a=Ka}t=a.bind(null,r,t,e),a=void 0,!Ha||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(r,t,{capture:!0,passive:a}):e.addEventListener(r,t,!0):a!==void 0?e.addEventListener(r,t,{passive:a}):e.addEventListener(r,t,!1)}function sl(e,r,t,n,a){var l=n;if((r&1)===0&&(r&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var h=n.stateNode.containerInfo;if(h===a||h.nodeType===8&&h.parentNode===a)break;if(u===4)for(u=n.return;u!==null;){var f=u.tag;if((f===3||f===4)&&(f=u.stateNode.containerInfo,f===a||f.nodeType===8&&f.parentNode===a))return;u=u.return}for(;h!==null;){if(u=Ht(h),u===null)return;if(f=u.tag,f===5||f===6){n=l=u;continue e}h=h.parentNode}}n=n.return}Qo(function(){var C=l,O=Yt(t),D=[];e:{var M=$s.get(e);if(M!==void 0){var q=qa,X=e;switch(e){case"keypress":if(Ti(t)===0)break e;case"keydown":case"keyup":q=sh;break;case"focusin":X="focus",q=Ga;break;case"focusout":X="blur",q=Ga;break;case"beforeblur":case"afterblur":q=Ga;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=bs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Gc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=ch;break;case Ds:case Bs:case _s:q=Zc;break;case Us:q=mh;break;case"scroll":q=Wc;break;case"wheel":q=fh;break;case"copy":case"cut":case"paste":q=rh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=ys}var re=(r&4)!==0,De=!re&&e==="scroll",w=re?M!==null?M+"Capture":null:M;re=[];for(var b=C,N;b!==null;){N=b;var $=N.stateNode;if(N.tag===5&&$!==null&&(N=$,w!==null&&($=Pn(b,w),$!=null&&re.push(qn(b,$,N)))),De)break;b=b.return}0<re.length&&(M=new q(M,X,null,t,O),D.push({event:M,listeners:re}))}}if((r&7)===0){e:{if(M=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",M&&t!==dt&&(X=t.relatedTarget||t.fromElement)&&(Ht(X)||X[Gr]))break e;if((q||M)&&(M=O.window===O?O:(M=O.ownerDocument)?M.defaultView||M.parentWindow:window,q?(X=t.relatedTarget||t.toElement,q=C,X=X?Ht(X):null,X!==null&&(De=Ot(X),X!==De||X.tag!==5&&X.tag!==6)&&(X=null)):(q=null,X=C),q!==X)){if(re=bs,$="onMouseLeave",w="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(re=ys,$="onPointerLeave",w="onPointerEnter",b="pointer"),De=q==null?M:ln(q),N=X==null?M:ln(X),M=new re($,b+"leave",q,t,O),M.target=De,M.relatedTarget=N,$=null,Ht(O)===C&&(re=new re(w,b+"enter",X,t,O),re.target=N,re.relatedTarget=De,$=re),De=$,q&&X)r:{for(re=q,w=X,b=0,N=re;N;N=nn(N))b++;for(N=0,$=w;$;$=nn($))N++;for(;0<b-N;)re=nn(re),b--;for(;0<N-b;)w=nn(w),N--;for(;b--;){if(re===w||w!==null&&re===w.alternate)break r;re=nn(re),w=nn(w)}re=null}else re=null;q!==null&&qs(D,M,q,re,!1),X!==null&&De!==null&&qs(D,De,X,re,!0)}}e:{if(M=C?ln(C):window,q=M.nodeName&&M.nodeName.toLowerCase(),q==="select"||q==="input"&&M.type==="file")var ne=wh;else if(Es(M))if(Ps)ne=Eh;else{ne=Sh;var le=jh}else(q=M.nodeName)&&q.toLowerCase()==="input"&&(M.type==="checkbox"||M.type==="radio")&&(ne=Nh);if(ne&&(ne=ne(e,C))){Cs(D,ne,t,O);break e}le&&le(e,M,C),e==="focusout"&&(le=M._wrapperState)&&le.controlled&&M.type==="number"&&j(M,"number",M.value)}switch(le=C?ln(C):window,e){case"focusin":(Es(le)||le.contentEditable==="true")&&(rn=le,tl=C,Kn=null);break;case"focusout":Kn=tl=rn=null;break;case"mousedown":nl=!0;break;case"contextmenu":case"mouseup":case"dragend":nl=!1,Hs(D,t,O);break;case"selectionchange":if(Rh)break;case"keydown":case"keyup":Hs(D,t,O)}var oe;if(Xa)e:{switch(e){case"compositionstart":var de="onCompositionStart";break e;case"compositionend":de="onCompositionEnd";break e;case"compositionupdate":de="onCompositionUpdate";break e}de=void 0}else en?Ss(e,t)&&(de="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(de="onCompositionStart");de&&(xs&&t.locale!=="ko"&&(en||de!=="onCompositionStart"?de==="onCompositionEnd"&&en&&(oe=gs()):(ft=O,Ja="value"in ft?ft.value:ft.textContent,en=!0)),le=Ii(C,de),0<le.length&&(de=new ks(de,e,null,t,O),D.push({event:de,listeners:le}),oe?de.data=oe:(oe=Ns(t),oe!==null&&(de.data=oe)))),(oe=vh?bh(e,t):kh(e,t))&&(C=Ii(C,"onBeforeInput"),0<C.length&&(O=new ks("onBeforeInput","beforeinput",null,t,O),D.push({event:O,listeners:C}),O.data=oe))}Vs(D,r)})}function qn(e,r,t){return{instance:e,listener:r,currentTarget:t}}function Ii(e,r){for(var t=r+"Capture",n=[];e!==null;){var a=e,l=a.stateNode;a.tag===5&&l!==null&&(a=l,l=Pn(e,t),l!=null&&n.unshift(qn(e,l,a)),l=Pn(e,r),l!=null&&n.push(qn(e,l,a))),e=e.return}return n}function nn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qs(e,r,t,n,a){for(var l=r._reactName,u=[];t!==null&&t!==n;){var h=t,f=h.alternate,C=h.stateNode;if(f!==null&&f===n)break;h.tag===5&&C!==null&&(h=C,a?(f=Pn(t,l),f!=null&&u.unshift(qn(t,f,h))):a||(f=Pn(t,l),f!=null&&u.push(qn(t,f,h)))),t=t.return}u.length!==0&&e.push({event:r,listeners:u})}var zh=/\r\n?/g,Mh=/\u0000|\uFFFD/g;function Ws(e){return(typeof e=="string"?e:""+e).replace(zh,`
`).replace(Mh,"")}function Di(e,r,t){if(r=Ws(r),Ws(e)!==r&&t)throw Error(s(425))}function Bi(){}var ul=null,dl=null;function cl(e,r){return e==="textarea"||e==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var hl=typeof setTimeout=="function"?setTimeout:void 0,Oh=typeof clearTimeout=="function"?clearTimeout:void 0,Ys=typeof Promise=="function"?Promise:void 0,Hh=typeof queueMicrotask=="function"?queueMicrotask:typeof Ys<"u"?function(e){return Ys.resolve(null).then(e).catch(Ih)}:hl;function Ih(e){setTimeout(function(){throw e})}function ml(e,r){var t=r,n=0;do{var a=t.nextSibling;if(e.removeChild(t),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(n===0){e.removeChild(a),In(r);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=a}while(t);In(r)}function vt(e){for(;e!=null;e=e.nextSibling){var r=e.nodeType;if(r===1||r===3)break;if(r===8){if(r=e.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return e}function Gs(e){e=e.previousSibling;for(var r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(r===0)return e;r--}else t==="/$"&&r++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Ur="__reactFiber$"+an,Wn="__reactProps$"+an,Gr="__reactContainer$"+an,pl="__reactEvents$"+an,Dh="__reactListeners$"+an,Bh="__reactHandles$"+an;function Ht(e){var r=e[Ur];if(r)return r;for(var t=e.parentNode;t;){if(r=t[Gr]||t[Ur]){if(t=r.alternate,r.child!==null||t!==null&&t.child!==null)for(e=Gs(e);e!==null;){if(t=e[Ur])return t;e=Gs(e)}return r}e=t,t=e.parentNode}return null}function Yn(e){return e=e[Ur]||e[Gr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function ln(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function _i(e){return e[Wn]||null}var fl=[],on=-1;function bt(e){return{current:e}}function Ce(e){0>on||(e.current=fl[on],fl[on]=null,on--)}function Se(e,r){on++,fl[on]=e.current,e.current=r}var kt={},Qe=bt(kt),ir=bt(!1),It=kt;function sn(e,r){var t=e.type.contextTypes;if(!t)return kt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===r)return n.__reactInternalMemoizedMaskedChildContext;var a={},l;for(l in t)a[l]=r[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=a),a}function ar(e){return e=e.childContextTypes,e!=null}function Ui(){Ce(ir),Ce(Qe)}function Qs(e,r,t){if(Qe.current!==kt)throw Error(s(168));Se(Qe,r),Se(ir,t)}function Xs(e,r,t){var n=e.stateNode;if(r=r.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var a in n)if(!(a in r))throw Error(s(108,ce(e)||"Unknown",a));return U({},t,n)}function $i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kt,It=Qe.current,Se(Qe,e),Se(ir,ir.current),!0}function Zs(e,r,t){var n=e.stateNode;if(!n)throw Error(s(169));t?(e=Xs(e,r,It),n.__reactInternalMemoizedMergedChildContext=e,Ce(ir),Ce(Qe),Se(Qe,e)):Ce(ir),Se(ir,t)}var Qr=null,Ai=!1,gl=!1;function eu(e){Qr===null?Qr=[e]:Qr.push(e)}function _h(e){Ai=!0,eu(e)}function yt(){if(!gl&&Qr!==null){gl=!0;var e=0,r=xe;try{var t=Qr;for(xe=1;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}Qr=null,Ai=!1}catch(a){throw Qr!==null&&(Qr=Qr.slice(e+1)),ts(Da,yt),a}finally{xe=r,gl=!1}}return null}var un=[],dn=0,Ki=null,Vi=0,gr=[],vr=0,Dt=null,Xr=1,Zr="";function Bt(e,r){un[dn++]=Vi,un[dn++]=Ki,Ki=e,Vi=r}function ru(e,r,t){gr[vr++]=Xr,gr[vr++]=Zr,gr[vr++]=Dt,Dt=e;var n=Xr;e=Zr;var a=32-Nr(n)-1;n&=~(1<<a),t+=1;var l=32-Nr(r)+a;if(30<l){var u=a-a%5;l=(n&(1<<u)-1).toString(32),n>>=u,a-=u,Xr=1<<32-Nr(r)+a|t<<a|n,Zr=l+e}else Xr=1<<l|t<<a|n,Zr=e}function vl(e){e.return!==null&&(Bt(e,1),ru(e,1,0))}function bl(e){for(;e===Ki;)Ki=un[--dn],un[dn]=null,Vi=un[--dn],un[dn]=null;for(;e===Dt;)Dt=gr[--vr],gr[vr]=null,Zr=gr[--vr],gr[vr]=null,Xr=gr[--vr],gr[vr]=null}var cr=null,hr=null,Pe=!1,Cr=null;function tu(e,r){var t=xr(5,null,null,0);t.elementType="DELETED",t.stateNode=r,t.return=e,r=e.deletions,r===null?(e.deletions=[t],e.flags|=16):r.push(t)}function nu(e,r){switch(e.tag){case 5:var t=e.type;return r=r.nodeType!==1||t.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(e.stateNode=r,cr=e,hr=vt(r.firstChild),!0):!1;case 6:return r=e.pendingProps===""||r.nodeType!==3?null:r,r!==null?(e.stateNode=r,cr=e,hr=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(t=Dt!==null?{id:Xr,overflow:Zr}:null,e.memoizedState={dehydrated:r,treeContext:t,retryLane:1073741824},t=xr(18,null,null,0),t.stateNode=r,t.return=e,e.child=t,cr=e,hr=null,!0):!1;default:return!1}}function kl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yl(e){if(Pe){var r=hr;if(r){var t=r;if(!nu(e,r)){if(kl(e))throw Error(s(418));r=vt(t.nextSibling);var n=cr;r&&nu(e,r)?tu(n,t):(e.flags=e.flags&-4097|2,Pe=!1,cr=e)}}else{if(kl(e))throw Error(s(418));e.flags=e.flags&-4097|2,Pe=!1,cr=e}}}function iu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;cr=e}function Ji(e){if(e!==cr)return!1;if(!Pe)return iu(e),Pe=!0,!1;var r;if((r=e.tag!==3)&&!(r=e.tag!==5)&&(r=e.type,r=r!=="head"&&r!=="body"&&!cl(e.type,e.memoizedProps)),r&&(r=hr)){if(kl(e))throw au(),Error(s(418));for(;r;)tu(e,r),r=vt(r.nextSibling)}if(iu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,r=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(r===0){hr=vt(e.nextSibling);break e}r--}else t!=="$"&&t!=="$!"&&t!=="$?"||r++}e=e.nextSibling}hr=null}}else hr=cr?vt(e.stateNode.nextSibling):null;return!0}function au(){for(var e=hr;e;)e=vt(e.nextSibling)}function cn(){hr=cr=null,Pe=!1}function xl(e){Cr===null?Cr=[e]:Cr.push(e)}var Uh=ee.ReactCurrentBatchConfig;function Gn(e,r,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(s(309));var n=t.stateNode}if(!n)throw Error(s(147,e));var a=n,l=""+e;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===l?r.ref:(r=function(u){var h=a.refs;u===null?delete h[l]:h[l]=u},r._stringRef=l,r)}if(typeof e!="string")throw Error(s(284));if(!t._owner)throw Error(s(290,e))}return e}function qi(e,r){throw e=Object.prototype.toString.call(r),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":e))}function lu(e){var r=e._init;return r(e._payload)}function ou(e){function r(w,b){if(e){var N=w.deletions;N===null?(w.deletions=[b],w.flags|=16):N.push(b)}}function t(w,b){if(!e)return null;for(;b!==null;)r(w,b),b=b.sibling;return null}function n(w,b){for(w=new Map;b!==null;)b.key!==null?w.set(b.key,b):w.set(b.index,b),b=b.sibling;return w}function a(w,b){return w=Pt(w,b),w.index=0,w.sibling=null,w}function l(w,b,N){return w.index=N,e?(N=w.alternate,N!==null?(N=N.index,N<b?(w.flags|=2,b):N):(w.flags|=2,b)):(w.flags|=1048576,b)}function u(w){return e&&w.alternate===null&&(w.flags|=2),w}function h(w,b,N,$){return b===null||b.tag!==6?(b=mo(N,w.mode,$),b.return=w,b):(b=a(b,N),b.return=w,b)}function f(w,b,N,$){var ne=N.type;return ne===W?O(w,b,N.props.children,$,N.key):b!==null&&(b.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ze&&lu(ne)===b.type)?($=a(b,N.props),$.ref=Gn(w,b,N),$.return=w,$):($=va(N.type,N.key,N.props,null,w.mode,$),$.ref=Gn(w,b,N),$.return=w,$)}function C(w,b,N,$){return b===null||b.tag!==4||b.stateNode.containerInfo!==N.containerInfo||b.stateNode.implementation!==N.implementation?(b=po(N,w.mode,$),b.return=w,b):(b=a(b,N.children||[]),b.return=w,b)}function O(w,b,N,$,ne){return b===null||b.tag!==7?(b=qt(N,w.mode,$,ne),b.return=w,b):(b=a(b,N),b.return=w,b)}function D(w,b,N){if(typeof b=="string"&&b!==""||typeof b=="number")return b=mo(""+b,w.mode,N),b.return=w,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Q:return N=va(b.type,b.key,b.props,null,w.mode,N),N.ref=Gn(w,null,b),N.return=w,N;case K:return b=po(b,w.mode,N),b.return=w,b;case ze:var $=b._init;return D(w,$(b._payload),N)}if(A(b)||z(b))return b=qt(b,w.mode,N,null),b.return=w,b;qi(w,b)}return null}function M(w,b,N,$){var ne=b!==null?b.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return ne!==null?null:h(w,b,""+N,$);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Q:return N.key===ne?f(w,b,N,$):null;case K:return N.key===ne?C(w,b,N,$):null;case ze:return ne=N._init,M(w,b,ne(N._payload),$)}if(A(N)||z(N))return ne!==null?null:O(w,b,N,$,null);qi(w,N)}return null}function q(w,b,N,$,ne){if(typeof $=="string"&&$!==""||typeof $=="number")return w=w.get(N)||null,h(b,w,""+$,ne);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Q:return w=w.get($.key===null?N:$.key)||null,f(b,w,$,ne);case K:return w=w.get($.key===null?N:$.key)||null,C(b,w,$,ne);case ze:var le=$._init;return q(w,b,N,le($._payload),ne)}if(A($)||z($))return w=w.get(N)||null,O(b,w,$,ne,null);qi(b,$)}return null}function X(w,b,N,$){for(var ne=null,le=null,oe=b,de=b=0,Ve=null;oe!==null&&de<N.length;de++){oe.index>de?(Ve=oe,oe=null):Ve=oe.sibling;var ge=M(w,oe,N[de],$);if(ge===null){oe===null&&(oe=Ve);break}e&&oe&&ge.alternate===null&&r(w,oe),b=l(ge,b,de),le===null?ne=ge:le.sibling=ge,le=ge,oe=Ve}if(de===N.length)return t(w,oe),Pe&&Bt(w,de),ne;if(oe===null){for(;de<N.length;de++)oe=D(w,N[de],$),oe!==null&&(b=l(oe,b,de),le===null?ne=oe:le.sibling=oe,le=oe);return Pe&&Bt(w,de),ne}for(oe=n(w,oe);de<N.length;de++)Ve=q(oe,w,de,N[de],$),Ve!==null&&(e&&Ve.alternate!==null&&oe.delete(Ve.key===null?de:Ve.key),b=l(Ve,b,de),le===null?ne=Ve:le.sibling=Ve,le=Ve);return e&&oe.forEach(function(Rt){return r(w,Rt)}),Pe&&Bt(w,de),ne}function re(w,b,N,$){var ne=z(N);if(typeof ne!="function")throw Error(s(150));if(N=ne.call(N),N==null)throw Error(s(151));for(var le=ne=null,oe=b,de=b=0,Ve=null,ge=N.next();oe!==null&&!ge.done;de++,ge=N.next()){oe.index>de?(Ve=oe,oe=null):Ve=oe.sibling;var Rt=M(w,oe,ge.value,$);if(Rt===null){oe===null&&(oe=Ve);break}e&&oe&&Rt.alternate===null&&r(w,oe),b=l(Rt,b,de),le===null?ne=Rt:le.sibling=Rt,le=Rt,oe=Ve}if(ge.done)return t(w,oe),Pe&&Bt(w,de),ne;if(oe===null){for(;!ge.done;de++,ge=N.next())ge=D(w,ge.value,$),ge!==null&&(b=l(ge,b,de),le===null?ne=ge:le.sibling=ge,le=ge);return Pe&&Bt(w,de),ne}for(oe=n(w,oe);!ge.done;de++,ge=N.next())ge=q(oe,w,de,ge.value,$),ge!==null&&(e&&ge.alternate!==null&&oe.delete(ge.key===null?de:ge.key),b=l(ge,b,de),le===null?ne=ge:le.sibling=ge,le=ge);return e&&oe.forEach(function(ym){return r(w,ym)}),Pe&&Bt(w,de),ne}function De(w,b,N,$){if(typeof N=="object"&&N!==null&&N.type===W&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case Q:e:{for(var ne=N.key,le=b;le!==null;){if(le.key===ne){if(ne=N.type,ne===W){if(le.tag===7){t(w,le.sibling),b=a(le,N.props.children),b.return=w,w=b;break e}}else if(le.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===ze&&lu(ne)===le.type){t(w,le.sibling),b=a(le,N.props),b.ref=Gn(w,le,N),b.return=w,w=b;break e}t(w,le);break}else r(w,le);le=le.sibling}N.type===W?(b=qt(N.props.children,w.mode,$,N.key),b.return=w,w=b):($=va(N.type,N.key,N.props,null,w.mode,$),$.ref=Gn(w,b,N),$.return=w,w=$)}return u(w);case K:e:{for(le=N.key;b!==null;){if(b.key===le)if(b.tag===4&&b.stateNode.containerInfo===N.containerInfo&&b.stateNode.implementation===N.implementation){t(w,b.sibling),b=a(b,N.children||[]),b.return=w,w=b;break e}else{t(w,b);break}else r(w,b);b=b.sibling}b=po(N,w.mode,$),b.return=w,w=b}return u(w);case ze:return le=N._init,De(w,b,le(N._payload),$)}if(A(N))return X(w,b,N,$);if(z(N))return re(w,b,N,$);qi(w,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,b!==null&&b.tag===6?(t(w,b.sibling),b=a(b,N),b.return=w,w=b):(t(w,b),b=mo(N,w.mode,$),b.return=w,w=b),u(w)):t(w,b)}return De}var hn=ou(!0),su=ou(!1),Wi=bt(null),Yi=null,mn=null,wl=null;function jl(){wl=mn=Yi=null}function Sl(e){var r=Wi.current;Ce(Wi),e._currentValue=r}function Nl(e,r,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&r)!==r?(e.childLanes|=r,n!==null&&(n.childLanes|=r)):n!==null&&(n.childLanes&r)!==r&&(n.childLanes|=r),e===t)break;e=e.return}}function pn(e,r){Yi=e,wl=mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&r)!==0&&(lr=!0),e.firstContext=null)}function br(e){var r=e._currentValue;if(wl!==e)if(e={context:e,memoizedValue:r,next:null},mn===null){if(Yi===null)throw Error(s(308));mn=e,Yi.dependencies={lanes:0,firstContext:e}}else mn=mn.next=e;return r}var _t=null;function El(e){_t===null?_t=[e]:_t.push(e)}function uu(e,r,t,n){var a=r.interleaved;return a===null?(t.next=t,El(r)):(t.next=a.next,a.next=t),r.interleaved=t,et(e,n)}function et(e,r){e.lanes|=r;var t=e.alternate;for(t!==null&&(t.lanes|=r),t=e,e=e.return;e!==null;)e.childLanes|=r,t=e.alternate,t!==null&&(t.childLanes|=r),t=e,e=e.return;return t.tag===3?t.stateNode:null}var xt=!1;function Cl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function du(e,r){e=e.updateQueue,r.updateQueue===e&&(r.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function rt(e,r){return{eventTime:e,lane:r,tag:0,payload:null,callback:null,next:null}}function wt(e,r,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(fe&2)!==0){var a=n.pending;return a===null?r.next=r:(r.next=a.next,a.next=r),n.pending=r,et(e,t)}return a=n.interleaved,a===null?(r.next=r,El(n)):(r.next=a.next,a.next=r),n.interleaved=r,et(e,t)}function Gi(e,r,t){if(r=r.updateQueue,r!==null&&(r=r.shared,(t&4194240)!==0)){var n=r.lanes;n&=e.pendingLanes,t|=n,r.lanes=t,Ua(e,t)}}function cu(e,r){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var a=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var u={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?a=l=u:l=l.next=u,t=t.next}while(t!==null);l===null?a=l=r:l=l.next=r}else a=l=r;t={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=r:e.next=r,t.lastBaseUpdate=r}function Qi(e,r,t,n){var a=e.updateQueue;xt=!1;var l=a.firstBaseUpdate,u=a.lastBaseUpdate,h=a.shared.pending;if(h!==null){a.shared.pending=null;var f=h,C=f.next;f.next=null,u===null?l=C:u.next=C,u=f;var O=e.alternate;O!==null&&(O=O.updateQueue,h=O.lastBaseUpdate,h!==u&&(h===null?O.firstBaseUpdate=C:h.next=C,O.lastBaseUpdate=f))}if(l!==null){var D=a.baseState;u=0,O=C=f=null,h=l;do{var M=h.lane,q=h.eventTime;if((n&M)===M){O!==null&&(O=O.next={eventTime:q,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,next:null});e:{var X=e,re=h;switch(M=r,q=t,re.tag){case 1:if(X=re.payload,typeof X=="function"){D=X.call(q,D,M);break e}D=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=re.payload,M=typeof X=="function"?X.call(q,D,M):X,M==null)break e;D=U({},D,M);break e;case 2:xt=!0}}h.callback!==null&&h.lane!==0&&(e.flags|=64,M=a.effects,M===null?a.effects=[h]:M.push(h))}else q={eventTime:q,lane:M,tag:h.tag,payload:h.payload,callback:h.callback,next:null},O===null?(C=O=q,f=D):O=O.next=q,u|=M;if(h=h.next,h===null){if(h=a.shared.pending,h===null)break;M=h,h=M.next,M.next=null,a.lastBaseUpdate=M,a.shared.pending=null}}while(!0);if(O===null&&(f=D),a.baseState=f,a.firstBaseUpdate=C,a.lastBaseUpdate=O,r=a.shared.interleaved,r!==null){a=r;do u|=a.lane,a=a.next;while(a!==r)}else l===null&&(a.shared.lanes=0);At|=u,e.lanes=u,e.memoizedState=D}}function hu(e,r,t){if(e=r.effects,r.effects=null,e!==null)for(r=0;r<e.length;r++){var n=e[r],a=n.callback;if(a!==null){if(n.callback=null,n=t,typeof a!="function")throw Error(s(191,a));a.call(n)}}}var Qn={},$r=bt(Qn),Xn=bt(Qn),Zn=bt(Qn);function Ut(e){if(e===Qn)throw Error(s(174));return e}function Pl(e,r){switch(Se(Zn,r),Se(Xn,e),Se($r,Qn),e=r.nodeType,e){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Ir(null,"");break;default:e=e===8?r.parentNode:r,r=e.namespaceURI||null,e=e.tagName,r=Ir(r,e)}Ce($r),Se($r,r)}function fn(){Ce($r),Ce(Xn),Ce(Zn)}function mu(e){Ut(Zn.current);var r=Ut($r.current),t=Ir(r,e.type);r!==t&&(Se(Xn,e),Se($r,t))}function Rl(e){Xn.current===e&&(Ce($r),Ce(Xn))}var Re=bt(0);function Xi(e){for(var r=e;r!==null;){if(r.tag===13){var t=r.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Tl=[];function Fl(){for(var e=0;e<Tl.length;e++)Tl[e]._workInProgressVersionPrimary=null;Tl.length=0}var Zi=ee.ReactCurrentDispatcher,Ll=ee.ReactCurrentBatchConfig,$t=0,Te=null,Ue=null,Ae=null,ea=!1,ei=!1,ri=0,$h=0;function Xe(){throw Error(s(321))}function zl(e,r){if(r===null)return!1;for(var t=0;t<r.length&&t<e.length;t++)if(!Er(e[t],r[t]))return!1;return!0}function Ml(e,r,t,n,a,l){if($t=l,Te=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Zi.current=e===null||e.memoizedState===null?Jh:qh,e=t(n,a),ei){l=0;do{if(ei=!1,ri=0,25<=l)throw Error(s(301));l+=1,Ae=Ue=null,r.updateQueue=null,Zi.current=Wh,e=t(n,a)}while(ei)}if(Zi.current=na,r=Ue!==null&&Ue.next!==null,$t=0,Ae=Ue=Te=null,ea=!1,r)throw Error(s(300));return e}function Ol(){var e=ri!==0;return ri=0,e}function Ar(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?Te.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function kr(){if(Ue===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Ue.next;var r=Ae===null?Te.memoizedState:Ae.next;if(r!==null)Ae=r,Ue=e;else{if(e===null)throw Error(s(310));Ue=e,e={memoizedState:Ue.memoizedState,baseState:Ue.baseState,baseQueue:Ue.baseQueue,queue:Ue.queue,next:null},Ae===null?Te.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function ti(e,r){return typeof r=="function"?r(e):r}function Hl(e){var r=kr(),t=r.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var n=Ue,a=n.baseQueue,l=t.pending;if(l!==null){if(a!==null){var u=a.next;a.next=l.next,l.next=u}n.baseQueue=a=l,t.pending=null}if(a!==null){l=a.next,n=n.baseState;var h=u=null,f=null,C=l;do{var O=C.lane;if(($t&O)===O)f!==null&&(f=f.next={lane:0,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null}),n=C.hasEagerState?C.eagerState:e(n,C.action);else{var D={lane:O,action:C.action,hasEagerState:C.hasEagerState,eagerState:C.eagerState,next:null};f===null?(h=f=D,u=n):f=f.next=D,Te.lanes|=O,At|=O}C=C.next}while(C!==null&&C!==l);f===null?u=n:f.next=h,Er(n,r.memoizedState)||(lr=!0),r.memoizedState=n,r.baseState=u,r.baseQueue=f,t.lastRenderedState=n}if(e=t.interleaved,e!==null){a=e;do l=a.lane,Te.lanes|=l,At|=l,a=a.next;while(a!==e)}else a===null&&(t.lanes=0);return[r.memoizedState,t.dispatch]}function Il(e){var r=kr(),t=r.queue;if(t===null)throw Error(s(311));t.lastRenderedReducer=e;var n=t.dispatch,a=t.pending,l=r.memoizedState;if(a!==null){t.pending=null;var u=a=a.next;do l=e(l,u.action),u=u.next;while(u!==a);Er(l,r.memoizedState)||(lr=!0),r.memoizedState=l,r.baseQueue===null&&(r.baseState=l),t.lastRenderedState=l}return[l,n]}function pu(){}function fu(e,r){var t=Te,n=kr(),a=r(),l=!Er(n.memoizedState,a);if(l&&(n.memoizedState=a,lr=!0),n=n.queue,Dl(bu.bind(null,t,n,e),[e]),n.getSnapshot!==r||l||Ae!==null&&Ae.memoizedState.tag&1){if(t.flags|=2048,ni(9,vu.bind(null,t,n,a,r),void 0,null),Ke===null)throw Error(s(349));($t&30)!==0||gu(t,r,a)}return a}function gu(e,r,t){e.flags|=16384,e={getSnapshot:r,value:t},r=Te.updateQueue,r===null?(r={lastEffect:null,stores:null},Te.updateQueue=r,r.stores=[e]):(t=r.stores,t===null?r.stores=[e]:t.push(e))}function vu(e,r,t,n){r.value=t,r.getSnapshot=n,ku(r)&&yu(e)}function bu(e,r,t){return t(function(){ku(r)&&yu(e)})}function ku(e){var r=e.getSnapshot;e=e.value;try{var t=r();return!Er(e,t)}catch{return!0}}function yu(e){var r=et(e,1);r!==null&&Fr(r,e,1,-1)}function xu(e){var r=Ar();return typeof e=="function"&&(e=e()),r.memoizedState=r.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ti,lastRenderedState:e},r.queue=e,e=e.dispatch=Vh.bind(null,Te,e),[r.memoizedState,e]}function ni(e,r,t,n){return e={tag:e,create:r,destroy:t,deps:n,next:null},r=Te.updateQueue,r===null?(r={lastEffect:null,stores:null},Te.updateQueue=r,r.lastEffect=e.next=e):(t=r.lastEffect,t===null?r.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,r.lastEffect=e)),e}function wu(){return kr().memoizedState}function ra(e,r,t,n){var a=Ar();Te.flags|=e,a.memoizedState=ni(1|r,t,void 0,n===void 0?null:n)}function ta(e,r,t,n){var a=kr();n=n===void 0?null:n;var l=void 0;if(Ue!==null){var u=Ue.memoizedState;if(l=u.destroy,n!==null&&zl(n,u.deps)){a.memoizedState=ni(r,t,l,n);return}}Te.flags|=e,a.memoizedState=ni(1|r,t,l,n)}function ju(e,r){return ra(8390656,8,e,r)}function Dl(e,r){return ta(2048,8,e,r)}function Su(e,r){return ta(4,2,e,r)}function Nu(e,r){return ta(4,4,e,r)}function Eu(e,r){if(typeof r=="function")return e=e(),r(e),function(){r(null)};if(r!=null)return e=e(),r.current=e,function(){r.current=null}}function Cu(e,r,t){return t=t!=null?t.concat([e]):null,ta(4,4,Eu.bind(null,r,e),t)}function Bl(){}function Pu(e,r){var t=kr();r=r===void 0?null:r;var n=t.memoizedState;return n!==null&&r!==null&&zl(r,n[1])?n[0]:(t.memoizedState=[e,r],e)}function Ru(e,r){var t=kr();r=r===void 0?null:r;var n=t.memoizedState;return n!==null&&r!==null&&zl(r,n[1])?n[0]:(e=e(),t.memoizedState=[e,r],e)}function Tu(e,r,t){return($t&21)===0?(e.baseState&&(e.baseState=!1,lr=!0),e.memoizedState=t):(Er(t,r)||(t=ls(),Te.lanes|=t,At|=t,e.baseState=!0),r)}function Ah(e,r){var t=xe;xe=t!==0&&4>t?t:4,e(!0);var n=Ll.transition;Ll.transition={};try{e(!1),r()}finally{xe=t,Ll.transition=n}}function Fu(){return kr().memoizedState}function Kh(e,r,t){var n=Et(e);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},Lu(e))zu(r,t);else if(t=uu(e,r,t,n),t!==null){var a=tr();Fr(t,e,n,a),Mu(t,r,n)}}function Vh(e,r,t){var n=Et(e),a={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))zu(r,a);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=r.lastRenderedReducer,l!==null))try{var u=r.lastRenderedState,h=l(u,t);if(a.hasEagerState=!0,a.eagerState=h,Er(h,u)){var f=r.interleaved;f===null?(a.next=a,El(r)):(a.next=f.next,f.next=a),r.interleaved=a;return}}catch{}finally{}t=uu(e,r,a,n),t!==null&&(a=tr(),Fr(t,e,n,a),Mu(t,r,n))}}function Lu(e){var r=e.alternate;return e===Te||r!==null&&r===Te}function zu(e,r){ei=ea=!0;var t=e.pending;t===null?r.next=r:(r.next=t.next,t.next=r),e.pending=r}function Mu(e,r,t){if((t&4194240)!==0){var n=r.lanes;n&=e.pendingLanes,t|=n,r.lanes=t,Ua(e,t)}}var na={readContext:br,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useInsertionEffect:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useMutableSource:Xe,useSyncExternalStore:Xe,useId:Xe,unstable_isNewReconciler:!1},Jh={readContext:br,useCallback:function(e,r){return Ar().memoizedState=[e,r===void 0?null:r],e},useContext:br,useEffect:ju,useImperativeHandle:function(e,r,t){return t=t!=null?t.concat([e]):null,ra(4194308,4,Eu.bind(null,r,e),t)},useLayoutEffect:function(e,r){return ra(4194308,4,e,r)},useInsertionEffect:function(e,r){return ra(4,2,e,r)},useMemo:function(e,r){var t=Ar();return r=r===void 0?null:r,e=e(),t.memoizedState=[e,r],e},useReducer:function(e,r,t){var n=Ar();return r=t!==void 0?t(r):r,n.memoizedState=n.baseState=r,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},n.queue=e,e=e.dispatch=Kh.bind(null,Te,e),[n.memoizedState,e]},useRef:function(e){var r=Ar();return e={current:e},r.memoizedState=e},useState:xu,useDebugValue:Bl,useDeferredValue:function(e){return Ar().memoizedState=e},useTransition:function(){var e=xu(!1),r=e[0];return e=Ah.bind(null,e[1]),Ar().memoizedState=e,[r,e]},useMutableSource:function(){},useSyncExternalStore:function(e,r,t){var n=Te,a=Ar();if(Pe){if(t===void 0)throw Error(s(407));t=t()}else{if(t=r(),Ke===null)throw Error(s(349));($t&30)!==0||gu(n,r,t)}a.memoizedState=t;var l={value:t,getSnapshot:r};return a.queue=l,ju(bu.bind(null,n,l,e),[e]),n.flags|=2048,ni(9,vu.bind(null,n,l,t,r),void 0,null),t},useId:function(){var e=Ar(),r=Ke.identifierPrefix;if(Pe){var t=Zr,n=Xr;t=(n&~(1<<32-Nr(n)-1)).toString(32)+t,r=":"+r+"R"+t,t=ri++,0<t&&(r+="H"+t.toString(32)),r+=":"}else t=$h++,r=":"+r+"r"+t.toString(32)+":";return e.memoizedState=r},unstable_isNewReconciler:!1},qh={readContext:br,useCallback:Pu,useContext:br,useEffect:Dl,useImperativeHandle:Cu,useInsertionEffect:Su,useLayoutEffect:Nu,useMemo:Ru,useReducer:Hl,useRef:wu,useState:function(){return Hl(ti)},useDebugValue:Bl,useDeferredValue:function(e){var r=kr();return Tu(r,Ue.memoizedState,e)},useTransition:function(){var e=Hl(ti)[0],r=kr().memoizedState;return[e,r]},useMutableSource:pu,useSyncExternalStore:fu,useId:Fu,unstable_isNewReconciler:!1},Wh={readContext:br,useCallback:Pu,useContext:br,useEffect:Dl,useImperativeHandle:Cu,useInsertionEffect:Su,useLayoutEffect:Nu,useMemo:Ru,useReducer:Il,useRef:wu,useState:function(){return Il(ti)},useDebugValue:Bl,useDeferredValue:function(e){var r=kr();return Ue===null?r.memoizedState=e:Tu(r,Ue.memoizedState,e)},useTransition:function(){var e=Il(ti)[0],r=kr().memoizedState;return[e,r]},useMutableSource:pu,useSyncExternalStore:fu,useId:Fu,unstable_isNewReconciler:!1};function Pr(e,r){if(e&&e.defaultProps){r=U({},r),e=e.defaultProps;for(var t in e)r[t]===void 0&&(r[t]=e[t]);return r}return r}function _l(e,r,t,n){r=e.memoizedState,t=t(n,r),t=t==null?r:U({},r,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var ia={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,r,t){e=e._reactInternals;var n=tr(),a=Et(e),l=rt(n,a);l.payload=r,t!=null&&(l.callback=t),r=wt(e,l,a),r!==null&&(Fr(r,e,a,n),Gi(r,e,a))},enqueueReplaceState:function(e,r,t){e=e._reactInternals;var n=tr(),a=Et(e),l=rt(n,a);l.tag=1,l.payload=r,t!=null&&(l.callback=t),r=wt(e,l,a),r!==null&&(Fr(r,e,a,n),Gi(r,e,a))},enqueueForceUpdate:function(e,r){e=e._reactInternals;var t=tr(),n=Et(e),a=rt(t,n);a.tag=2,r!=null&&(a.callback=r),r=wt(e,a,n),r!==null&&(Fr(r,e,n,t),Gi(r,e,n))}};function Ou(e,r,t,n,a,l,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,u):r.prototype&&r.prototype.isPureReactComponent?!An(t,n)||!An(a,l):!0}function Hu(e,r,t){var n=!1,a=kt,l=r.contextType;return typeof l=="object"&&l!==null?l=br(l):(a=ar(r)?It:Qe.current,n=r.contextTypes,l=(n=n!=null)?sn(e,a):kt),r=new r(t,l),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=ia,e.stateNode=r,r._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),r}function Iu(e,r,t,n){e=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(t,n),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(t,n),r.state!==e&&ia.enqueueReplaceState(r,r.state,null)}function Ul(e,r,t,n){var a=e.stateNode;a.props=t,a.state=e.memoizedState,a.refs={},Cl(e);var l=r.contextType;typeof l=="object"&&l!==null?a.context=br(l):(l=ar(r)?It:Qe.current,a.context=sn(e,l)),a.state=e.memoizedState,l=r.getDerivedStateFromProps,typeof l=="function"&&(_l(e,r,l,t),a.state=e.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(r=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),r!==a.state&&ia.enqueueReplaceState(a,a.state,null),Qi(e,t,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function gn(e,r){try{var t="",n=r;do t+=J(n),n=n.return;while(n);var a=t}catch(l){a=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:r,stack:a,digest:null}}function $l(e,r,t){return{value:e,source:null,stack:t??null,digest:r??null}}function Al(e,r){try{console.error(r.value)}catch(t){setTimeout(function(){throw t})}}var Yh=typeof WeakMap=="function"?WeakMap:Map;function Du(e,r,t){t=rt(-1,t),t.tag=3,t.payload={element:null};var n=r.value;return t.callback=function(){ca||(ca=!0,io=n),Al(e,r)},t}function Bu(e,r,t){t=rt(-1,t),t.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=r.value;t.payload=function(){return n(a)},t.callback=function(){Al(e,r)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){Al(e,r),typeof n!="function"&&(St===null?St=new Set([this]):St.add(this));var u=r.stack;this.componentDidCatch(r.value,{componentStack:u!==null?u:""})}),t}function _u(e,r,t){var n=e.pingCache;if(n===null){n=e.pingCache=new Yh;var a=new Set;n.set(r,a)}else a=n.get(r),a===void 0&&(a=new Set,n.set(r,a));a.has(t)||(a.add(t),e=um.bind(null,e,r,t),r.then(e,e))}function Uu(e){do{var r;if((r=e.tag===13)&&(r=e.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return e;e=e.return}while(e!==null);return null}function $u(e,r,t,n,a){return(e.mode&1)===0?(e===r?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(r=rt(-1,1),r.tag=2,wt(t,r,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Gh=ee.ReactCurrentOwner,lr=!1;function rr(e,r,t,n){r.child=e===null?su(r,null,t,n):hn(r,e.child,t,n)}function Au(e,r,t,n,a){t=t.render;var l=r.ref;return pn(r,a),n=Ml(e,r,t,n,l,a),t=Ol(),e!==null&&!lr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,tt(e,r,a)):(Pe&&t&&vl(r),r.flags|=1,rr(e,r,n,a),r.child)}function Ku(e,r,t,n,a){if(e===null){var l=t.type;return typeof l=="function"&&!ho(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(r.tag=15,r.type=l,Vu(e,r,l,n,a)):(e=va(t.type,null,n,r,r.mode,a),e.ref=r.ref,e.return=r,r.child=e)}if(l=e.child,(e.lanes&a)===0){var u=l.memoizedProps;if(t=t.compare,t=t!==null?t:An,t(u,n)&&e.ref===r.ref)return tt(e,r,a)}return r.flags|=1,e=Pt(l,n),e.ref=r.ref,e.return=r,r.child=e}function Vu(e,r,t,n,a){if(e!==null){var l=e.memoizedProps;if(An(l,n)&&e.ref===r.ref)if(lr=!1,r.pendingProps=n=l,(e.lanes&a)!==0)(e.flags&131072)!==0&&(lr=!0);else return r.lanes=e.lanes,tt(e,r,a)}return Kl(e,r,t,n,a)}function Ju(e,r,t){var n=r.pendingProps,a=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(bn,mr),mr|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:e,cachePool:null,transitions:null},r.updateQueue=null,Se(bn,mr),mr|=e,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:t,Se(bn,mr),mr|=n}else l!==null?(n=l.baseLanes|t,r.memoizedState=null):n=t,Se(bn,mr),mr|=n;return rr(e,r,a,t),r.child}function qu(e,r){var t=r.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(r.flags|=512,r.flags|=2097152)}function Kl(e,r,t,n,a){var l=ar(t)?It:Qe.current;return l=sn(r,l),pn(r,a),t=Ml(e,r,t,n,l,a),n=Ol(),e!==null&&!lr?(r.updateQueue=e.updateQueue,r.flags&=-2053,e.lanes&=~a,tt(e,r,a)):(Pe&&n&&vl(r),r.flags|=1,rr(e,r,t,a),r.child)}function Wu(e,r,t,n,a){if(ar(t)){var l=!0;$i(r)}else l=!1;if(pn(r,a),r.stateNode===null)la(e,r),Hu(r,t,n),Ul(r,t,n,a),n=!0;else if(e===null){var u=r.stateNode,h=r.memoizedProps;u.props=h;var f=u.context,C=t.contextType;typeof C=="object"&&C!==null?C=br(C):(C=ar(t)?It:Qe.current,C=sn(r,C));var O=t.getDerivedStateFromProps,D=typeof O=="function"||typeof u.getSnapshotBeforeUpdate=="function";D||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==n||f!==C)&&Iu(r,u,n,C),xt=!1;var M=r.memoizedState;u.state=M,Qi(r,n,u,a),f=r.memoizedState,h!==n||M!==f||ir.current||xt?(typeof O=="function"&&(_l(r,t,O,n),f=r.memoizedState),(h=xt||Ou(r,t,h,n,M,f,C))?(D||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(r.flags|=4194308)):(typeof u.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=n,r.memoizedState=f),u.props=n,u.state=f,u.context=C,n=h):(typeof u.componentDidMount=="function"&&(r.flags|=4194308),n=!1)}else{u=r.stateNode,du(e,r),h=r.memoizedProps,C=r.type===r.elementType?h:Pr(r.type,h),u.props=C,D=r.pendingProps,M=u.context,f=t.contextType,typeof f=="object"&&f!==null?f=br(f):(f=ar(t)?It:Qe.current,f=sn(r,f));var q=t.getDerivedStateFromProps;(O=typeof q=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(h!==D||M!==f)&&Iu(r,u,n,f),xt=!1,M=r.memoizedState,u.state=M,Qi(r,n,u,a);var X=r.memoizedState;h!==D||M!==X||ir.current||xt?(typeof q=="function"&&(_l(r,t,q,n),X=r.memoizedState),(C=xt||Ou(r,t,C,n,M,X,f)||!1)?(O||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(n,X,f),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(n,X,f)),typeof u.componentDidUpdate=="function"&&(r.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&M===e.memoizedState||(r.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&M===e.memoizedState||(r.flags|=1024),r.memoizedProps=n,r.memoizedState=X),u.props=n,u.state=X,u.context=f,n=C):(typeof u.componentDidUpdate!="function"||h===e.memoizedProps&&M===e.memoizedState||(r.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||h===e.memoizedProps&&M===e.memoizedState||(r.flags|=1024),n=!1)}return Vl(e,r,t,n,l,a)}function Vl(e,r,t,n,a,l){qu(e,r);var u=(r.flags&128)!==0;if(!n&&!u)return a&&Zs(r,t,!1),tt(e,r,l);n=r.stateNode,Gh.current=r;var h=u&&typeof t.getDerivedStateFromError!="function"?null:n.render();return r.flags|=1,e!==null&&u?(r.child=hn(r,e.child,null,l),r.child=hn(r,null,h,l)):rr(e,r,h,l),r.memoizedState=n.state,a&&Zs(r,t,!0),r.child}function Yu(e){var r=e.stateNode;r.pendingContext?Qs(e,r.pendingContext,r.pendingContext!==r.context):r.context&&Qs(e,r.context,!1),Pl(e,r.containerInfo)}function Gu(e,r,t,n,a){return cn(),xl(a),r.flags|=256,rr(e,r,t,n),r.child}var Jl={dehydrated:null,treeContext:null,retryLane:0};function ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function Qu(e,r,t){var n=r.pendingProps,a=Re.current,l=!1,u=(r.flags&128)!==0,h;if((h=u)||(h=e!==null&&e.memoizedState===null?!1:(a&2)!==0),h?(l=!0,r.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Se(Re,a&1),e===null)return yl(r),e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((r.mode&1)===0?r.lanes=1:e.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(u=n.children,e=n.fallback,l?(n=r.mode,l=r.child,u={mode:"hidden",children:u},(n&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=u):l=ba(u,n,0,null),e=qt(e,n,t,null),l.return=r,e.return=r,l.sibling=e,r.child=l,r.child.memoizedState=ql(t),r.memoizedState=Jl,e):Wl(r,u));if(a=e.memoizedState,a!==null&&(h=a.dehydrated,h!==null))return Qh(e,r,u,n,h,a,t);if(l){l=n.fallback,u=r.mode,a=e.child,h=a.sibling;var f={mode:"hidden",children:n.children};return(u&1)===0&&r.child!==a?(n=r.child,n.childLanes=0,n.pendingProps=f,r.deletions=null):(n=Pt(a,f),n.subtreeFlags=a.subtreeFlags&14680064),h!==null?l=Pt(h,l):(l=qt(l,u,t,null),l.flags|=2),l.return=r,n.return=r,n.sibling=l,r.child=n,n=l,l=r.child,u=e.child.memoizedState,u=u===null?ql(t):{baseLanes:u.baseLanes|t,cachePool:null,transitions:u.transitions},l.memoizedState=u,l.childLanes=e.childLanes&~t,r.memoizedState=Jl,n}return l=e.child,e=l.sibling,n=Pt(l,{mode:"visible",children:n.children}),(r.mode&1)===0&&(n.lanes=t),n.return=r,n.sibling=null,e!==null&&(t=r.deletions,t===null?(r.deletions=[e],r.flags|=16):t.push(e)),r.child=n,r.memoizedState=null,n}function Wl(e,r){return r=ba({mode:"visible",children:r},e.mode,0,null),r.return=e,e.child=r}function aa(e,r,t,n){return n!==null&&xl(n),hn(r,e.child,null,t),e=Wl(r,r.pendingProps.children),e.flags|=2,r.memoizedState=null,e}function Qh(e,r,t,n,a,l,u){if(t)return r.flags&256?(r.flags&=-257,n=$l(Error(s(422))),aa(e,r,u,n)):r.memoizedState!==null?(r.child=e.child,r.flags|=128,null):(l=n.fallback,a=r.mode,n=ba({mode:"visible",children:n.children},a,0,null),l=qt(l,a,u,null),l.flags|=2,n.return=r,l.return=r,n.sibling=l,r.child=n,(r.mode&1)!==0&&hn(r,e.child,null,u),r.child.memoizedState=ql(u),r.memoizedState=Jl,l);if((r.mode&1)===0)return aa(e,r,u,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var h=n.dgst;return n=h,l=Error(s(419)),n=$l(l,n,void 0),aa(e,r,u,n)}if(h=(u&e.childLanes)!==0,lr||h){if(n=Ke,n!==null){switch(u&-u){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(n.suspendedLanes|u))!==0?0:a,a!==0&&a!==l.retryLane&&(l.retryLane=a,et(e,a),Fr(n,e,a,-1))}return co(),n=$l(Error(s(421))),aa(e,r,u,n)}return a.data==="$?"?(r.flags|=128,r.child=e.child,r=dm.bind(null,e),a._reactRetry=r,null):(e=l.treeContext,hr=vt(a.nextSibling),cr=r,Pe=!0,Cr=null,e!==null&&(gr[vr++]=Xr,gr[vr++]=Zr,gr[vr++]=Dt,Xr=e.id,Zr=e.overflow,Dt=r),r=Wl(r,n.children),r.flags|=4096,r)}function Xu(e,r,t){e.lanes|=r;var n=e.alternate;n!==null&&(n.lanes|=r),Nl(e.return,r,t)}function Yl(e,r,t,n,a){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:a}:(l.isBackwards=r,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=t,l.tailMode=a)}function Zu(e,r,t){var n=r.pendingProps,a=n.revealOrder,l=n.tail;if(rr(e,r,n.children,t),n=Re.current,(n&2)!==0)n=n&1|2,r.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=r.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xu(e,t,r);else if(e.tag===19)Xu(e,t,r);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===r)break e;for(;e.sibling===null;){if(e.return===null||e.return===r)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Se(Re,n),(r.mode&1)===0)r.memoizedState=null;else switch(a){case"forwards":for(t=r.child,a=null;t!==null;)e=t.alternate,e!==null&&Xi(e)===null&&(a=t),t=t.sibling;t=a,t===null?(a=r.child,r.child=null):(a=t.sibling,t.sibling=null),Yl(r,!1,a,t,l);break;case"backwards":for(t=null,a=r.child,r.child=null;a!==null;){if(e=a.alternate,e!==null&&Xi(e)===null){r.child=a;break}e=a.sibling,a.sibling=t,t=a,a=e}Yl(r,!0,t,null,l);break;case"together":Yl(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function la(e,r){(r.mode&1)===0&&e!==null&&(e.alternate=null,r.alternate=null,r.flags|=2)}function tt(e,r,t){if(e!==null&&(r.dependencies=e.dependencies),At|=r.lanes,(t&r.childLanes)===0)return null;if(e!==null&&r.child!==e.child)throw Error(s(153));if(r.child!==null){for(e=r.child,t=Pt(e,e.pendingProps),r.child=t,t.return=r;e.sibling!==null;)e=e.sibling,t=t.sibling=Pt(e,e.pendingProps),t.return=r;t.sibling=null}return r.child}function Xh(e,r,t){switch(r.tag){case 3:Yu(r),cn();break;case 5:mu(r);break;case 1:ar(r.type)&&$i(r);break;case 4:Pl(r,r.stateNode.containerInfo);break;case 10:var n=r.type._context,a=r.memoizedProps.value;Se(Wi,n._currentValue),n._currentValue=a;break;case 13:if(n=r.memoizedState,n!==null)return n.dehydrated!==null?(Se(Re,Re.current&1),r.flags|=128,null):(t&r.child.childLanes)!==0?Qu(e,r,t):(Se(Re,Re.current&1),e=tt(e,r,t),e!==null?e.sibling:null);Se(Re,Re.current&1);break;case 19:if(n=(t&r.childLanes)!==0,(e.flags&128)!==0){if(n)return Zu(e,r,t);r.flags|=128}if(a=r.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Se(Re,Re.current),n)break;return null;case 22:case 23:return r.lanes=0,Ju(e,r,t)}return tt(e,r,t)}var ed,Gl,rd,td;ed=function(e,r){for(var t=r.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===r)break;for(;t.sibling===null;){if(t.return===null||t.return===r)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},Gl=function(){},rd=function(e,r,t,n){var a=e.memoizedProps;if(a!==n){e=r.stateNode,Ut($r.current);var l=null;switch(t){case"input":a=Sn(e,a),n=Sn(e,n),l=[];break;case"select":a=U({},a,{value:void 0}),n=U({},n,{value:void 0}),l=[];break;case"textarea":a=be(e,a),n=be(e,n),l=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Bi)}Sr(t,n);var u;t=null;for(C in a)if(!n.hasOwnProperty(C)&&a.hasOwnProperty(C)&&a[C]!=null)if(C==="style"){var h=a[C];for(u in h)h.hasOwnProperty(u)&&(t||(t={}),t[u]="")}else C!=="dangerouslySetInnerHTML"&&C!=="children"&&C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&C!=="autoFocus"&&(p.hasOwnProperty(C)?l||(l=[]):(l=l||[]).push(C,null));for(C in n){var f=n[C];if(h=a!=null?a[C]:void 0,n.hasOwnProperty(C)&&f!==h&&(f!=null||h!=null))if(C==="style")if(h){for(u in h)!h.hasOwnProperty(u)||f&&f.hasOwnProperty(u)||(t||(t={}),t[u]="");for(u in f)f.hasOwnProperty(u)&&h[u]!==f[u]&&(t||(t={}),t[u]=f[u])}else t||(l||(l=[]),l.push(C,t)),t=f;else C==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,h=h?h.__html:void 0,f!=null&&h!==f&&(l=l||[]).push(C,f)):C==="children"?typeof f!="string"&&typeof f!="number"||(l=l||[]).push(C,""+f):C!=="suppressContentEditableWarning"&&C!=="suppressHydrationWarning"&&(p.hasOwnProperty(C)?(f!=null&&C==="onScroll"&&Ee("scroll",e),l||h===f||(l=[])):(l=l||[]).push(C,f))}t&&(l=l||[]).push("style",t);var C=l;(r.updateQueue=C)&&(r.flags|=4)}},td=function(e,r,t,n){t!==n&&(r.flags|=4)};function ii(e,r){if(!Pe)switch(e.tailMode){case"hidden":r=e.tail;for(var t=null;r!==null;)r.alternate!==null&&(t=r),r=r.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?r||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ze(e){var r=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(r)for(var a=e.child;a!==null;)t|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)t|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=t,r}function Zh(e,r,t){var n=r.pendingProps;switch(bl(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(r),null;case 1:return ar(r.type)&&Ui(),Ze(r),null;case 3:return n=r.stateNode,fn(),Ce(ir),Ce(Qe),Fl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(r)?r.flags|=4:e===null||e.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Cr!==null&&(oo(Cr),Cr=null))),Gl(e,r),Ze(r),null;case 5:Rl(r);var a=Ut(Zn.current);if(t=r.type,e!==null&&r.stateNode!=null)rd(e,r,t,n,a),e.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!n){if(r.stateNode===null)throw Error(s(166));return Ze(r),null}if(e=Ut($r.current),Ji(r)){n=r.stateNode,t=r.type;var l=r.memoizedProps;switch(n[Ur]=r,n[Wn]=l,e=(r.mode&1)!==0,t){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<Vn.length;a++)Ee(Vn[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Nn(n,l),Ee("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},Ee("invalid",n);break;case"textarea":Hr(n,l),Ee("invalid",n)}Sr(t,l),a=null;for(var u in l)if(l.hasOwnProperty(u)){var h=l[u];u==="children"?typeof h=="string"?n.textContent!==h&&(l.suppressHydrationWarning!==!0&&Di(n.textContent,h,e),a=["children",h]):typeof h=="number"&&n.textContent!==""+h&&(l.suppressHydrationWarning!==!0&&Di(n.textContent,h,e),a=["children",""+h]):p.hasOwnProperty(u)&&h!=null&&u==="onScroll"&&Ee("scroll",n)}switch(t){case"input":ot(n),En(n,l,!0);break;case"textarea":ot(n),jr(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=Bi)}n=a,r.updateQueue=n,n!==null&&(r.flags|=4)}else{u=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=gi(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=u.createElement(t,{is:n.is}):(e=u.createElement(t),t==="select"&&(u=e,n.multiple?u.multiple=!0:n.size&&(u.size=n.size))):e=u.createElementNS(e,t),e[Ur]=r,e[Wn]=n,ed(e,r,!1,!1),r.stateNode=e;e:{switch(u=Br(t,n),t){case"dialog":Ee("cancel",e),Ee("close",e),a=n;break;case"iframe":case"object":case"embed":Ee("load",e),a=n;break;case"video":case"audio":for(a=0;a<Vn.length;a++)Ee(Vn[a],e);a=n;break;case"source":Ee("error",e),a=n;break;case"img":case"image":case"link":Ee("error",e),Ee("load",e),a=n;break;case"details":Ee("toggle",e),a=n;break;case"input":Nn(e,n),a=Sn(e,n),Ee("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=U({},n,{value:void 0}),Ee("invalid",e);break;case"textarea":Hr(e,n),a=be(e,n),Ee("invalid",e);break;default:a=n}Sr(t,a),h=a;for(l in h)if(h.hasOwnProperty(l)){var f=h[l];l==="style"?ke(e,f):l==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Dr(e,f)):l==="children"?typeof f=="string"?(t!=="textarea"||f!=="")&&Mt(e,f):typeof f=="number"&&Mt(e,""+f):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(p.hasOwnProperty(l)?f!=null&&l==="onScroll"&&Ee("scroll",e):f!=null&&te(e,l,f,u))}switch(t){case"input":ot(e),En(e,n,!1);break;case"textarea":ot(e),jr(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ue(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?he(e,!!n.multiple,l,!1):n.defaultValue!=null&&he(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Bi)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ze(r),null;case 6:if(e&&r.stateNode!=null)td(e,r,e.memoizedProps,n);else{if(typeof n!="string"&&r.stateNode===null)throw Error(s(166));if(t=Ut(Zn.current),Ut($r.current),Ji(r)){if(n=r.stateNode,t=r.memoizedProps,n[Ur]=r,(l=n.nodeValue!==t)&&(e=cr,e!==null))switch(e.tag){case 3:Di(n.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Di(n.nodeValue,t,(e.mode&1)!==0)}l&&(r.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[Ur]=r,r.stateNode=n}return Ze(r),null;case 13:if(Ce(Re),n=r.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Pe&&hr!==null&&(r.mode&1)!==0&&(r.flags&128)===0)au(),cn(),r.flags|=98560,l=!1;else if(l=Ji(r),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(s(318));if(l=r.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Ur]=r}else cn(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ze(r),l=!1}else Cr!==null&&(oo(Cr),Cr=null),l=!0;if(!l)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=t,r):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(r.child.flags|=8192,(r.mode&1)!==0&&(e===null||(Re.current&1)!==0?$e===0&&($e=3):co())),r.updateQueue!==null&&(r.flags|=4),Ze(r),null);case 4:return fn(),Gl(e,r),e===null&&Jn(r.stateNode.containerInfo),Ze(r),null;case 10:return Sl(r.type._context),Ze(r),null;case 17:return ar(r.type)&&Ui(),Ze(r),null;case 19:if(Ce(Re),l=r.memoizedState,l===null)return Ze(r),null;if(n=(r.flags&128)!==0,u=l.rendering,u===null)if(n)ii(l,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=r.child;e!==null;){if(u=Xi(e),u!==null){for(r.flags|=128,ii(l,!1),n=u.updateQueue,n!==null&&(r.updateQueue=n,r.flags|=4),r.subtreeFlags=0,n=t,t=r.child;t!==null;)l=t,e=n,l.flags&=14680066,u=l.alternate,u===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=u.childLanes,l.lanes=u.lanes,l.child=u.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=u.memoizedProps,l.memoizedState=u.memoizedState,l.updateQueue=u.updateQueue,l.type=u.type,e=u.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return Se(Re,Re.current&1|2),r.child}e=e.sibling}l.tail!==null&&Ie()>kn&&(r.flags|=128,n=!0,ii(l,!1),r.lanes=4194304)}else{if(!n)if(e=Xi(u),e!==null){if(r.flags|=128,n=!0,t=e.updateQueue,t!==null&&(r.updateQueue=t,r.flags|=4),ii(l,!0),l.tail===null&&l.tailMode==="hidden"&&!u.alternate&&!Pe)return Ze(r),null}else 2*Ie()-l.renderingStartTime>kn&&t!==1073741824&&(r.flags|=128,n=!0,ii(l,!1),r.lanes=4194304);l.isBackwards?(u.sibling=r.child,r.child=u):(t=l.last,t!==null?t.sibling=u:r.child=u,l.last=u)}return l.tail!==null?(r=l.tail,l.rendering=r,l.tail=r.sibling,l.renderingStartTime=Ie(),r.sibling=null,t=Re.current,Se(Re,n?t&1|2:t&1),r):(Ze(r),null);case 22:case 23:return uo(),n=r.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(r.flags|=8192),n&&(r.mode&1)!==0?(mr&1073741824)!==0&&(Ze(r),r.subtreeFlags&6&&(r.flags|=8192)):Ze(r),null;case 24:return null;case 25:return null}throw Error(s(156,r.tag))}function em(e,r){switch(bl(r),r.tag){case 1:return ar(r.type)&&Ui(),e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 3:return fn(),Ce(ir),Ce(Qe),Fl(),e=r.flags,(e&65536)!==0&&(e&128)===0?(r.flags=e&-65537|128,r):null;case 5:return Rl(r),null;case 13:if(Ce(Re),e=r.memoizedState,e!==null&&e.dehydrated!==null){if(r.alternate===null)throw Error(s(340));cn()}return e=r.flags,e&65536?(r.flags=e&-65537|128,r):null;case 19:return Ce(Re),null;case 4:return fn(),null;case 10:return Sl(r.type._context),null;case 22:case 23:return uo(),null;case 24:return null;default:return null}}var oa=!1,er=!1,rm=typeof WeakSet=="function"?WeakSet:Set,Y=null;function vn(e,r){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Me(e,r,n)}else t.current=null}function Ql(e,r,t){try{t()}catch(n){Me(e,r,n)}}var nd=!1;function tm(e,r){if(ul=Ci,e=Os(),rl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var a=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var u=0,h=-1,f=-1,C=0,O=0,D=e,M=null;r:for(;;){for(var q;D!==t||a!==0&&D.nodeType!==3||(h=u+a),D!==l||n!==0&&D.nodeType!==3||(f=u+n),D.nodeType===3&&(u+=D.nodeValue.length),(q=D.firstChild)!==null;)M=D,D=q;for(;;){if(D===e)break r;if(M===t&&++C===a&&(h=u),M===l&&++O===n&&(f=u),(q=D.nextSibling)!==null)break;D=M,M=D.parentNode}D=q}t=h===-1||f===-1?null:{start:h,end:f}}else t=null}t=t||{start:0,end:0}}else t=null;for(dl={focusedElem:e,selectionRange:t},Ci=!1,Y=r;Y!==null;)if(r=Y,e=r.child,(r.subtreeFlags&1028)!==0&&e!==null)e.return=r,Y=e;else for(;Y!==null;){r=Y;try{var X=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(X!==null){var re=X.memoizedProps,De=X.memoizedState,w=r.stateNode,b=w.getSnapshotBeforeUpdate(r.elementType===r.type?re:Pr(r.type,re),De);w.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var N=r.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch($){Me(r,r.return,$)}if(e=r.sibling,e!==null){e.return=r.return,Y=e;break}Y=r.return}return X=nd,nd=!1,X}function ai(e,r,t){var n=r.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,l!==void 0&&Ql(r,t,l)}a=a.next}while(a!==n)}}function sa(e,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var t=r=r.next;do{if((t.tag&e)===e){var n=t.create;t.destroy=n()}t=t.next}while(t!==r)}}function Xl(e){var r=e.ref;if(r!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof r=="function"?r(e):r.current=e}}function id(e){var r=e.alternate;r!==null&&(e.alternate=null,id(r)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(r=e.stateNode,r!==null&&(delete r[Ur],delete r[Wn],delete r[pl],delete r[Dh],delete r[Bh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ad(e){return e.tag===5||e.tag===3||e.tag===4}function ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zl(e,r,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?t.nodeType===8?t.parentNode.insertBefore(e,r):t.insertBefore(e,r):(t.nodeType===8?(r=t.parentNode,r.insertBefore(e,t)):(r=t,r.appendChild(e)),t=t._reactRootContainer,t!=null||r.onclick!==null||(r.onclick=Bi));else if(n!==4&&(e=e.child,e!==null))for(Zl(e,r,t),e=e.sibling;e!==null;)Zl(e,r,t),e=e.sibling}function eo(e,r,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,r?t.insertBefore(e,r):t.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(eo(e,r,t),e=e.sibling;e!==null;)eo(e,r,t),e=e.sibling}var Je=null,Rr=!1;function jt(e,r,t){for(t=t.child;t!==null;)od(e,r,t),t=t.sibling}function od(e,r,t){if(_r&&typeof _r.onCommitFiberUnmount=="function")try{_r.onCommitFiberUnmount(xi,t)}catch{}switch(t.tag){case 5:er||vn(t,r);case 6:var n=Je,a=Rr;Je=null,jt(e,r,t),Je=n,Rr=a,Je!==null&&(Rr?(e=Je,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Je.removeChild(t.stateNode));break;case 18:Je!==null&&(Rr?(e=Je,t=t.stateNode,e.nodeType===8?ml(e.parentNode,t):e.nodeType===1&&ml(e,t),In(e)):ml(Je,t.stateNode));break;case 4:n=Je,a=Rr,Je=t.stateNode.containerInfo,Rr=!0,jt(e,r,t),Je=n,Rr=a;break;case 0:case 11:case 14:case 15:if(!er&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var l=a,u=l.destroy;l=l.tag,u!==void 0&&((l&2)!==0||(l&4)!==0)&&Ql(t,r,u),a=a.next}while(a!==n)}jt(e,r,t);break;case 1:if(!er&&(vn(t,r),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(h){Me(t,r,h)}jt(e,r,t);break;case 21:jt(e,r,t);break;case 22:t.mode&1?(er=(n=er)||t.memoizedState!==null,jt(e,r,t),er=n):jt(e,r,t);break;default:jt(e,r,t)}}function sd(e){var r=e.updateQueue;if(r!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new rm),r.forEach(function(n){var a=cm.bind(null,e,n);t.has(n)||(t.add(n),n.then(a,a))})}}function Tr(e,r){var t=r.deletions;if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];try{var l=e,u=r,h=u;e:for(;h!==null;){switch(h.tag){case 5:Je=h.stateNode,Rr=!1;break e;case 3:Je=h.stateNode.containerInfo,Rr=!0;break e;case 4:Je=h.stateNode.containerInfo,Rr=!0;break e}h=h.return}if(Je===null)throw Error(s(160));od(l,u,a),Je=null,Rr=!1;var f=a.alternate;f!==null&&(f.return=null),a.return=null}catch(C){Me(a,r,C)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)ud(r,e),r=r.sibling}function ud(e,r){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tr(r,e),Kr(e),n&4){try{ai(3,e,e.return),sa(3,e)}catch(re){Me(e,e.return,re)}try{ai(5,e,e.return)}catch(re){Me(e,e.return,re)}}break;case 1:Tr(r,e),Kr(e),n&512&&t!==null&&vn(t,t.return);break;case 5:if(Tr(r,e),Kr(e),n&512&&t!==null&&vn(t,t.return),e.flags&32){var a=e.stateNode;try{Mt(a,"")}catch(re){Me(e,e.return,re)}}if(n&4&&(a=e.stateNode,a!=null)){var l=e.memoizedProps,u=t!==null?t.memoizedProps:l,h=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{h==="input"&&l.type==="radio"&&l.name!=null&&fi(a,l),Br(h,u);var C=Br(h,l);for(u=0;u<f.length;u+=2){var O=f[u],D=f[u+1];O==="style"?ke(a,D):O==="dangerouslySetInnerHTML"?Dr(a,D):O==="children"?Mt(a,D):te(a,O,D,C)}switch(h){case"input":Wt(a,l);break;case"textarea":Wr(a,l);break;case"select":var M=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!l.multiple;var q=l.value;q!=null?he(a,!!l.multiple,q,!1):M!==!!l.multiple&&(l.defaultValue!=null?he(a,!!l.multiple,l.defaultValue,!0):he(a,!!l.multiple,l.multiple?[]:"",!1))}a[Wn]=l}catch(re){Me(e,e.return,re)}}break;case 6:if(Tr(r,e),Kr(e),n&4){if(e.stateNode===null)throw Error(s(162));a=e.stateNode,l=e.memoizedProps;try{a.nodeValue=l}catch(re){Me(e,e.return,re)}}break;case 3:if(Tr(r,e),Kr(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{In(r.containerInfo)}catch(re){Me(e,e.return,re)}break;case 4:Tr(r,e),Kr(e);break;case 13:Tr(r,e),Kr(e),a=e.child,a.flags&8192&&(l=a.memoizedState!==null,a.stateNode.isHidden=l,!l||a.alternate!==null&&a.alternate.memoizedState!==null||(no=Ie())),n&4&&sd(e);break;case 22:if(O=t!==null&&t.memoizedState!==null,e.mode&1?(er=(C=er)||O,Tr(r,e),er=C):Tr(r,e),Kr(e),n&8192){if(C=e.memoizedState!==null,(e.stateNode.isHidden=C)&&!O&&(e.mode&1)!==0)for(Y=e,O=e.child;O!==null;){for(D=Y=O;Y!==null;){switch(M=Y,q=M.child,M.tag){case 0:case 11:case 14:case 15:ai(4,M,M.return);break;case 1:vn(M,M.return);var X=M.stateNode;if(typeof X.componentWillUnmount=="function"){n=M,t=M.return;try{r=n,X.props=r.memoizedProps,X.state=r.memoizedState,X.componentWillUnmount()}catch(re){Me(n,t,re)}}break;case 5:vn(M,M.return);break;case 22:if(M.memoizedState!==null){hd(D);continue}}q!==null?(q.return=M,Y=q):hd(D)}O=O.sibling}e:for(O=null,D=e;;){if(D.tag===5){if(O===null){O=D;try{a=D.stateNode,C?(l=a.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(h=D.stateNode,f=D.memoizedProps.style,u=f!=null&&f.hasOwnProperty("display")?f.display:null,h.style.display=Cn("display",u))}catch(re){Me(e,e.return,re)}}}else if(D.tag===6){if(O===null)try{D.stateNode.nodeValue=C?"":D.memoizedProps}catch(re){Me(e,e.return,re)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===e)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===e)break e;for(;D.sibling===null;){if(D.return===null||D.return===e)break e;O===D&&(O=null),D=D.return}O===D&&(O=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:Tr(r,e),Kr(e),n&4&&sd(e);break;case 21:break;default:Tr(r,e),Kr(e)}}function Kr(e){var r=e.flags;if(r&2){try{e:{for(var t=e.return;t!==null;){if(ad(t)){var n=t;break e}t=t.return}throw Error(s(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(Mt(a,""),n.flags&=-33);var l=ld(e);eo(e,l,a);break;case 3:case 4:var u=n.stateNode.containerInfo,h=ld(e);Zl(e,h,u);break;default:throw Error(s(161))}}catch(f){Me(e,e.return,f)}e.flags&=-3}r&4096&&(e.flags&=-4097)}function nm(e,r,t){Y=e,dd(e)}function dd(e,r,t){for(var n=(e.mode&1)!==0;Y!==null;){var a=Y,l=a.child;if(a.tag===22&&n){var u=a.memoizedState!==null||oa;if(!u){var h=a.alternate,f=h!==null&&h.memoizedState!==null||er;h=oa;var C=er;if(oa=u,(er=f)&&!C)for(Y=a;Y!==null;)u=Y,f=u.child,u.tag===22&&u.memoizedState!==null?md(a):f!==null?(f.return=u,Y=f):md(a);for(;l!==null;)Y=l,dd(l),l=l.sibling;Y=a,oa=h,er=C}cd(e)}else(a.subtreeFlags&8772)!==0&&l!==null?(l.return=a,Y=l):cd(e)}}function cd(e){for(;Y!==null;){var r=Y;if((r.flags&8772)!==0){var t=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:er||sa(5,r);break;case 1:var n=r.stateNode;if(r.flags&4&&!er)if(t===null)n.componentDidMount();else{var a=r.elementType===r.type?t.memoizedProps:Pr(r.type,t.memoizedProps);n.componentDidUpdate(a,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=r.updateQueue;l!==null&&hu(r,l,n);break;case 3:var u=r.updateQueue;if(u!==null){if(t=null,r.child!==null)switch(r.child.tag){case 5:t=r.child.stateNode;break;case 1:t=r.child.stateNode}hu(r,u,t)}break;case 5:var h=r.stateNode;if(t===null&&r.flags&4){t=h;var f=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&t.focus();break;case"img":f.src&&(t.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var C=r.alternate;if(C!==null){var O=C.memoizedState;if(O!==null){var D=O.dehydrated;D!==null&&In(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}er||r.flags&512&&Xl(r)}catch(M){Me(r,r.return,M)}}if(r===e){Y=null;break}if(t=r.sibling,t!==null){t.return=r.return,Y=t;break}Y=r.return}}function hd(e){for(;Y!==null;){var r=Y;if(r===e){Y=null;break}var t=r.sibling;if(t!==null){t.return=r.return,Y=t;break}Y=r.return}}function md(e){for(;Y!==null;){var r=Y;try{switch(r.tag){case 0:case 11:case 15:var t=r.return;try{sa(4,r)}catch(f){Me(r,t,f)}break;case 1:var n=r.stateNode;if(typeof n.componentDidMount=="function"){var a=r.return;try{n.componentDidMount()}catch(f){Me(r,a,f)}}var l=r.return;try{Xl(r)}catch(f){Me(r,l,f)}break;case 5:var u=r.return;try{Xl(r)}catch(f){Me(r,u,f)}}}catch(f){Me(r,r.return,f)}if(r===e){Y=null;break}var h=r.sibling;if(h!==null){h.return=r.return,Y=h;break}Y=r.return}}var im=Math.ceil,ua=ee.ReactCurrentDispatcher,ro=ee.ReactCurrentOwner,yr=ee.ReactCurrentBatchConfig,fe=0,Ke=null,Be=null,qe=0,mr=0,bn=bt(0),$e=0,li=null,At=0,da=0,to=0,oi=null,or=null,no=0,kn=1/0,nt=null,ca=!1,io=null,St=null,ha=!1,Nt=null,ma=0,si=0,ao=null,pa=-1,fa=0;function tr(){return(fe&6)!==0?Ie():pa!==-1?pa:pa=Ie()}function Et(e){return(e.mode&1)===0?1:(fe&2)!==0&&qe!==0?qe&-qe:Uh.transition!==null?(fa===0&&(fa=ls()),fa):(e=xe,e!==0||(e=window.event,e=e===void 0?16:fs(e.type)),e)}function Fr(e,r,t,n){if(50<si)throw si=0,ao=null,Error(s(185));Ln(e,t,n),((fe&2)===0||e!==Ke)&&(e===Ke&&((fe&2)===0&&(da|=t),$e===4&&Ct(e,qe)),sr(e,n),t===1&&fe===0&&(r.mode&1)===0&&(kn=Ie()+500,Ai&&yt()))}function sr(e,r){var t=e.callbackNode;Uc(e,r);var n=Si(e,e===Ke?qe:0);if(n===0)t!==null&&ns(t),e.callbackNode=null,e.callbackPriority=0;else if(r=n&-n,e.callbackPriority!==r){if(t!=null&&ns(t),r===1)e.tag===0?_h(fd.bind(null,e)):eu(fd.bind(null,e)),Hh(function(){(fe&6)===0&&yt()}),t=null;else{switch(os(n)){case 1:t=Da;break;case 4:t=is;break;case 16:t=yi;break;case 536870912:t=as;break;default:t=yi}t=jd(t,pd.bind(null,e))}e.callbackPriority=r,e.callbackNode=t}}function pd(e,r){if(pa=-1,fa=0,(fe&6)!==0)throw Error(s(327));var t=e.callbackNode;if(yn()&&e.callbackNode!==t)return null;var n=Si(e,e===Ke?qe:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||r)r=ga(e,n);else{r=n;var a=fe;fe|=2;var l=vd();(Ke!==e||qe!==r)&&(nt=null,kn=Ie()+500,Vt(e,r));do try{om();break}catch(h){gd(e,h)}while(!0);jl(),ua.current=l,fe=a,Be!==null?r=0:(Ke=null,qe=0,r=$e)}if(r!==0){if(r===2&&(a=Ba(e),a!==0&&(n=a,r=lo(e,a))),r===1)throw t=li,Vt(e,0),Ct(e,n),sr(e,Ie()),t;if(r===6)Ct(e,n);else{if(a=e.current.alternate,(n&30)===0&&!am(a)&&(r=ga(e,n),r===2&&(l=Ba(e),l!==0&&(n=l,r=lo(e,l))),r===1))throw t=li,Vt(e,0),Ct(e,n),sr(e,Ie()),t;switch(e.finishedWork=a,e.finishedLanes=n,r){case 0:case 1:throw Error(s(345));case 2:Jt(e,or,nt);break;case 3:if(Ct(e,n),(n&130023424)===n&&(r=no+500-Ie(),10<r)){if(Si(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){tr(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=hl(Jt.bind(null,e,or,nt),r);break}Jt(e,or,nt);break;case 4:if(Ct(e,n),(n&4194240)===n)break;for(r=e.eventTimes,a=-1;0<n;){var u=31-Nr(n);l=1<<u,u=r[u],u>a&&(a=u),n&=~l}if(n=a,n=Ie()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*im(n/1960))-n,10<n){e.timeoutHandle=hl(Jt.bind(null,e,or,nt),n);break}Jt(e,or,nt);break;case 5:Jt(e,or,nt);break;default:throw Error(s(329))}}}return sr(e,Ie()),e.callbackNode===t?pd.bind(null,e):null}function lo(e,r){var t=oi;return e.current.memoizedState.isDehydrated&&(Vt(e,r).flags|=256),e=ga(e,r),e!==2&&(r=or,or=t,r!==null&&oo(r)),e}function oo(e){or===null?or=e:or.push.apply(or,e)}function am(e){for(var r=e;;){if(r.flags&16384){var t=r.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var a=t[n],l=a.getSnapshot;a=a.value;try{if(!Er(l(),a))return!1}catch{return!1}}}if(t=r.child,r.subtreeFlags&16384&&t!==null)t.return=r,r=t;else{if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Ct(e,r){for(r&=~to,r&=~da,e.suspendedLanes|=r,e.pingedLanes&=~r,e=e.expirationTimes;0<r;){var t=31-Nr(r),n=1<<t;e[t]=-1,r&=~n}}function fd(e){if((fe&6)!==0)throw Error(s(327));yn();var r=Si(e,0);if((r&1)===0)return sr(e,Ie()),null;var t=ga(e,r);if(e.tag!==0&&t===2){var n=Ba(e);n!==0&&(r=n,t=lo(e,n))}if(t===1)throw t=li,Vt(e,0),Ct(e,r),sr(e,Ie()),t;if(t===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=r,Jt(e,or,nt),sr(e,Ie()),null}function so(e,r){var t=fe;fe|=1;try{return e(r)}finally{fe=t,fe===0&&(kn=Ie()+500,Ai&&yt())}}function Kt(e){Nt!==null&&Nt.tag===0&&(fe&6)===0&&yn();var r=fe;fe|=1;var t=yr.transition,n=xe;try{if(yr.transition=null,xe=1,e)return e()}finally{xe=n,yr.transition=t,fe=r,(fe&6)===0&&yt()}}function uo(){mr=bn.current,Ce(bn)}function Vt(e,r){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Oh(t)),Be!==null)for(t=Be.return;t!==null;){var n=t;switch(bl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ui();break;case 3:fn(),Ce(ir),Ce(Qe),Fl();break;case 5:Rl(n);break;case 4:fn();break;case 13:Ce(Re);break;case 19:Ce(Re);break;case 10:Sl(n.type._context);break;case 22:case 23:uo()}t=t.return}if(Ke=e,Be=e=Pt(e.current,null),qe=mr=r,$e=0,li=null,to=da=At=0,or=oi=null,_t!==null){for(r=0;r<_t.length;r++)if(t=_t[r],n=t.interleaved,n!==null){t.interleaved=null;var a=n.next,l=t.pending;if(l!==null){var u=l.next;l.next=a,n.next=u}t.pending=n}_t=null}return e}function gd(e,r){do{var t=Be;try{if(jl(),Zi.current=na,ea){for(var n=Te.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}ea=!1}if($t=0,Ae=Ue=Te=null,ei=!1,ri=0,ro.current=null,t===null||t.return===null){$e=1,li=r,Be=null;break}e:{var l=e,u=t.return,h=t,f=r;if(r=qe,h.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var C=f,O=h,D=O.tag;if((O.mode&1)===0&&(D===0||D===11||D===15)){var M=O.alternate;M?(O.updateQueue=M.updateQueue,O.memoizedState=M.memoizedState,O.lanes=M.lanes):(O.updateQueue=null,O.memoizedState=null)}var q=Uu(u);if(q!==null){q.flags&=-257,$u(q,u,h,l,r),q.mode&1&&_u(l,C,r),r=q,f=C;var X=r.updateQueue;if(X===null){var re=new Set;re.add(f),r.updateQueue=re}else X.add(f);break e}else{if((r&1)===0){_u(l,C,r),co();break e}f=Error(s(426))}}else if(Pe&&h.mode&1){var De=Uu(u);if(De!==null){(De.flags&65536)===0&&(De.flags|=256),$u(De,u,h,l,r),xl(gn(f,h));break e}}l=f=gn(f,h),$e!==4&&($e=2),oi===null?oi=[l]:oi.push(l),l=u;do{switch(l.tag){case 3:l.flags|=65536,r&=-r,l.lanes|=r;var w=Du(l,f,r);cu(l,w);break e;case 1:h=f;var b=l.type,N=l.stateNode;if((l.flags&128)===0&&(typeof b.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(St===null||!St.has(N)))){l.flags|=65536,r&=-r,l.lanes|=r;var $=Bu(l,h,r);cu(l,$);break e}}l=l.return}while(l!==null)}kd(t)}catch(ne){r=ne,Be===t&&t!==null&&(Be=t=t.return);continue}break}while(!0)}function vd(){var e=ua.current;return ua.current=na,e===null?na:e}function co(){($e===0||$e===3||$e===2)&&($e=4),Ke===null||(At&268435455)===0&&(da&268435455)===0||Ct(Ke,qe)}function ga(e,r){var t=fe;fe|=2;var n=vd();(Ke!==e||qe!==r)&&(nt=null,Vt(e,r));do try{lm();break}catch(a){gd(e,a)}while(!0);if(jl(),fe=t,ua.current=n,Be!==null)throw Error(s(261));return Ke=null,qe=0,$e}function lm(){for(;Be!==null;)bd(Be)}function om(){for(;Be!==null&&!Lc();)bd(Be)}function bd(e){var r=wd(e.alternate,e,mr);e.memoizedProps=e.pendingProps,r===null?kd(e):Be=r,ro.current=null}function kd(e){var r=e;do{var t=r.alternate;if(e=r.return,(r.flags&32768)===0){if(t=Zh(t,r,mr),t!==null){Be=t;return}}else{if(t=em(t,r),t!==null){t.flags&=32767,Be=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$e=6,Be=null;return}}if(r=r.sibling,r!==null){Be=r;return}Be=r=e}while(r!==null);$e===0&&($e=5)}function Jt(e,r,t){var n=xe,a=yr.transition;try{yr.transition=null,xe=1,sm(e,r,t,n)}finally{yr.transition=a,xe=n}return null}function sm(e,r,t,n){do yn();while(Nt!==null);if((fe&6)!==0)throw Error(s(327));t=e.finishedWork;var a=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if($c(e,l),e===Ke&&(Be=Ke=null,qe=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||ha||(ha=!0,jd(yi,function(){return yn(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=yr.transition,yr.transition=null;var u=xe;xe=1;var h=fe;fe|=4,ro.current=null,tm(e,t),ud(t,e),Ph(dl),Ci=!!ul,dl=ul=null,e.current=t,nm(t),zc(),fe=h,xe=u,yr.transition=l}else e.current=t;if(ha&&(ha=!1,Nt=e,ma=a),l=e.pendingLanes,l===0&&(St=null),Hc(t.stateNode),sr(e,Ie()),r!==null)for(n=e.onRecoverableError,t=0;t<r.length;t++)a=r[t],n(a.value,{componentStack:a.stack,digest:a.digest});if(ca)throw ca=!1,e=io,io=null,e;return(ma&1)!==0&&e.tag!==0&&yn(),l=e.pendingLanes,(l&1)!==0?e===ao?si++:(si=0,ao=e):si=0,yt(),null}function yn(){if(Nt!==null){var e=os(ma),r=yr.transition,t=xe;try{if(yr.transition=null,xe=16>e?16:e,Nt===null)var n=!1;else{if(e=Nt,Nt=null,ma=0,(fe&6)!==0)throw Error(s(331));var a=fe;for(fe|=4,Y=e.current;Y!==null;){var l=Y,u=l.child;if((Y.flags&16)!==0){var h=l.deletions;if(h!==null){for(var f=0;f<h.length;f++){var C=h[f];for(Y=C;Y!==null;){var O=Y;switch(O.tag){case 0:case 11:case 15:ai(8,O,l)}var D=O.child;if(D!==null)D.return=O,Y=D;else for(;Y!==null;){O=Y;var M=O.sibling,q=O.return;if(id(O),O===C){Y=null;break}if(M!==null){M.return=q,Y=M;break}Y=q}}}var X=l.alternate;if(X!==null){var re=X.child;if(re!==null){X.child=null;do{var De=re.sibling;re.sibling=null,re=De}while(re!==null)}}Y=l}}if((l.subtreeFlags&2064)!==0&&u!==null)u.return=l,Y=u;else e:for(;Y!==null;){if(l=Y,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:ai(9,l,l.return)}var w=l.sibling;if(w!==null){w.return=l.return,Y=w;break e}Y=l.return}}var b=e.current;for(Y=b;Y!==null;){u=Y;var N=u.child;if((u.subtreeFlags&2064)!==0&&N!==null)N.return=u,Y=N;else e:for(u=b;Y!==null;){if(h=Y,(h.flags&2048)!==0)try{switch(h.tag){case 0:case 11:case 15:sa(9,h)}}catch(ne){Me(h,h.return,ne)}if(h===u){Y=null;break e}var $=h.sibling;if($!==null){$.return=h.return,Y=$;break e}Y=h.return}}if(fe=a,yt(),_r&&typeof _r.onPostCommitFiberRoot=="function")try{_r.onPostCommitFiberRoot(xi,e)}catch{}n=!0}return n}finally{xe=t,yr.transition=r}}return!1}function yd(e,r,t){r=gn(t,r),r=Du(e,r,1),e=wt(e,r,1),r=tr(),e!==null&&(Ln(e,1,r),sr(e,r))}function Me(e,r,t){if(e.tag===3)yd(e,e,t);else for(;r!==null;){if(r.tag===3){yd(r,e,t);break}else if(r.tag===1){var n=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(St===null||!St.has(n))){e=gn(t,e),e=Bu(r,e,1),r=wt(r,e,1),e=tr(),r!==null&&(Ln(r,1,e),sr(r,e));break}}r=r.return}}function um(e,r,t){var n=e.pingCache;n!==null&&n.delete(r),r=tr(),e.pingedLanes|=e.suspendedLanes&t,Ke===e&&(qe&t)===t&&($e===4||$e===3&&(qe&130023424)===qe&&500>Ie()-no?Vt(e,0):to|=t),sr(e,r)}function xd(e,r){r===0&&((e.mode&1)===0?r=1:(r=ji,ji<<=1,(ji&130023424)===0&&(ji=4194304)));var t=tr();e=et(e,r),e!==null&&(Ln(e,r,t),sr(e,t))}function dm(e){var r=e.memoizedState,t=0;r!==null&&(t=r.retryLane),xd(e,t)}function cm(e,r){var t=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(t=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(s(314))}n!==null&&n.delete(r),xd(e,t)}var wd;wd=function(e,r,t){if(e!==null)if(e.memoizedProps!==r.pendingProps||ir.current)lr=!0;else{if((e.lanes&t)===0&&(r.flags&128)===0)return lr=!1,Xh(e,r,t);lr=(e.flags&131072)!==0}else lr=!1,Pe&&(r.flags&1048576)!==0&&ru(r,Vi,r.index);switch(r.lanes=0,r.tag){case 2:var n=r.type;la(e,r),e=r.pendingProps;var a=sn(r,Qe.current);pn(r,t),a=Ml(null,r,n,e,a,t);var l=Ol();return r.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ar(n)?(l=!0,$i(r)):l=!1,r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Cl(r),a.updater=ia,r.stateNode=a,a._reactInternals=r,Ul(r,n,e,t),r=Vl(null,r,n,!0,l,t)):(r.tag=0,Pe&&l&&vl(r),rr(null,r,a,t),r=r.child),r;case 16:n=r.elementType;e:{switch(la(e,r),e=r.pendingProps,a=n._init,n=a(n._payload),r.type=n,a=r.tag=mm(n),e=Pr(n,e),a){case 0:r=Kl(null,r,n,e,t);break e;case 1:r=Wu(null,r,n,e,t);break e;case 11:r=Au(null,r,n,e,t);break e;case 14:r=Ku(null,r,n,Pr(n.type,e),t);break e}throw Error(s(306,n,""))}return r;case 0:return n=r.type,a=r.pendingProps,a=r.elementType===n?a:Pr(n,a),Kl(e,r,n,a,t);case 1:return n=r.type,a=r.pendingProps,a=r.elementType===n?a:Pr(n,a),Wu(e,r,n,a,t);case 3:e:{if(Yu(r),e===null)throw Error(s(387));n=r.pendingProps,l=r.memoizedState,a=l.element,du(e,r),Qi(r,n,null,t);var u=r.memoizedState;if(n=u.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:u.cache,pendingSuspenseBoundaries:u.pendingSuspenseBoundaries,transitions:u.transitions},r.updateQueue.baseState=l,r.memoizedState=l,r.flags&256){a=gn(Error(s(423)),r),r=Gu(e,r,n,t,a);break e}else if(n!==a){a=gn(Error(s(424)),r),r=Gu(e,r,n,t,a);break e}else for(hr=vt(r.stateNode.containerInfo.firstChild),cr=r,Pe=!0,Cr=null,t=su(r,null,n,t),r.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(cn(),n===a){r=tt(e,r,t);break e}rr(e,r,n,t)}r=r.child}return r;case 5:return mu(r),e===null&&yl(r),n=r.type,a=r.pendingProps,l=e!==null?e.memoizedProps:null,u=a.children,cl(n,a)?u=null:l!==null&&cl(n,l)&&(r.flags|=32),qu(e,r),rr(e,r,u,t),r.child;case 6:return e===null&&yl(r),null;case 13:return Qu(e,r,t);case 4:return Pl(r,r.stateNode.containerInfo),n=r.pendingProps,e===null?r.child=hn(r,null,n,t):rr(e,r,n,t),r.child;case 11:return n=r.type,a=r.pendingProps,a=r.elementType===n?a:Pr(n,a),Au(e,r,n,a,t);case 7:return rr(e,r,r.pendingProps,t),r.child;case 8:return rr(e,r,r.pendingProps.children,t),r.child;case 12:return rr(e,r,r.pendingProps.children,t),r.child;case 10:e:{if(n=r.type._context,a=r.pendingProps,l=r.memoizedProps,u=a.value,Se(Wi,n._currentValue),n._currentValue=u,l!==null)if(Er(l.value,u)){if(l.children===a.children&&!ir.current){r=tt(e,r,t);break e}}else for(l=r.child,l!==null&&(l.return=r);l!==null;){var h=l.dependencies;if(h!==null){u=l.child;for(var f=h.firstContext;f!==null;){if(f.context===n){if(l.tag===1){f=rt(-1,t&-t),f.tag=2;var C=l.updateQueue;if(C!==null){C=C.shared;var O=C.pending;O===null?f.next=f:(f.next=O.next,O.next=f),C.pending=f}}l.lanes|=t,f=l.alternate,f!==null&&(f.lanes|=t),Nl(l.return,t,r),h.lanes|=t;break}f=f.next}}else if(l.tag===10)u=l.type===r.type?null:l.child;else if(l.tag===18){if(u=l.return,u===null)throw Error(s(341));u.lanes|=t,h=u.alternate,h!==null&&(h.lanes|=t),Nl(u,t,r),u=l.sibling}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===r){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}rr(e,r,a.children,t),r=r.child}return r;case 9:return a=r.type,n=r.pendingProps.children,pn(r,t),a=br(a),n=n(a),r.flags|=1,rr(e,r,n,t),r.child;case 14:return n=r.type,a=Pr(n,r.pendingProps),a=Pr(n.type,a),Ku(e,r,n,a,t);case 15:return Vu(e,r,r.type,r.pendingProps,t);case 17:return n=r.type,a=r.pendingProps,a=r.elementType===n?a:Pr(n,a),la(e,r),r.tag=1,ar(n)?(e=!0,$i(r)):e=!1,pn(r,t),Hu(r,n,a),Ul(r,n,a,t),Vl(null,r,n,!0,e,t);case 19:return Zu(e,r,t);case 22:return Ju(e,r,t)}throw Error(s(156,r.tag))};function jd(e,r){return ts(e,r)}function hm(e,r,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xr(e,r,t,n){return new hm(e,r,t,n)}function ho(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mm(e){if(typeof e=="function")return ho(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_e)return 11;if(e===Le)return 14}return 2}function Pt(e,r){var t=e.alternate;return t===null?(t=xr(e.tag,r,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=r,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,r=e.dependencies,t.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function va(e,r,t,n,a,l){var u=2;if(n=e,typeof e=="function")ho(e)&&(u=1);else if(typeof e=="string")u=5;else e:switch(e){case W:return qt(t.children,a,l,r);case ie:u=8,a|=8;break;case ae:return e=xr(12,t,r,a|2),e.elementType=ae,e.lanes=l,e;case Fe:return e=xr(13,t,r,a),e.elementType=Fe,e.lanes=l,e;case je:return e=xr(19,t,r,a),e.elementType=je,e.lanes=l,e;case ye:return ba(t,a,l,r);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pe:u=10;break e;case we:u=9;break e;case _e:u=11;break e;case Le:u=14;break e;case ze:u=16,n=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return r=xr(u,t,r,a),r.elementType=e,r.type=n,r.lanes=l,r}function qt(e,r,t,n){return e=xr(7,e,n,r),e.lanes=t,e}function ba(e,r,t,n){return e=xr(22,e,n,r),e.elementType=ye,e.lanes=t,e.stateNode={isHidden:!1},e}function mo(e,r,t){return e=xr(6,e,null,r),e.lanes=t,e}function po(e,r,t){return r=xr(4,e.children!==null?e.children:[],e.key,r),r.lanes=t,r.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},r}function pm(e,r,t,n,a){this.tag=r,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function fo(e,r,t,n,a,l,u,h,f){return e=new pm(e,r,t,h,f),r===1?(r=1,l===!0&&(r|=8)):r=0,l=xr(3,null,null,r),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cl(l),e}function fm(e,r,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:K,key:n==null?null:""+n,children:e,containerInfo:r,implementation:t}}function Sd(e){if(!e)return kt;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(s(170));var r=e;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ar(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(s(171))}if(e.tag===1){var t=e.type;if(ar(t))return Xs(e,t,r)}return r}function Nd(e,r,t,n,a,l,u,h,f){return e=fo(t,n,!0,e,a,l,u,h,f),e.context=Sd(null),t=e.current,n=tr(),a=Et(t),l=rt(n,a),l.callback=r??null,wt(t,l,a),e.current.lanes=a,Ln(e,a,n),sr(e,n),e}function ka(e,r,t,n){var a=r.current,l=tr(),u=Et(a);return t=Sd(t),r.context===null?r.context=t:r.pendingContext=t,r=rt(l,u),r.payload={element:e},n=n===void 0?null:n,n!==null&&(r.callback=n),e=wt(a,r,u),e!==null&&(Fr(e,a,u,l),Gi(e,a,u)),u}function ya(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ed(e,r){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<r?t:r}}function go(e,r){Ed(e,r),(e=e.alternate)&&Ed(e,r)}function gm(){return null}var Cd=typeof reportError=="function"?reportError:function(e){console.error(e)};function vo(e){this._internalRoot=e}xa.prototype.render=vo.prototype.render=function(e){var r=this._internalRoot;if(r===null)throw Error(s(409));ka(e,r,null,null)},xa.prototype.unmount=vo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var r=e.containerInfo;Kt(function(){ka(null,e,null,null)}),r[Gr]=null}};function xa(e){this._internalRoot=e}xa.prototype.unstable_scheduleHydration=function(e){if(e){var r=ds();e={blockedOn:null,target:e,priority:r};for(var t=0;t<pt.length&&r!==0&&r<pt[t].priority;t++);pt.splice(t,0,e),t===0&&ms(e)}};function bo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Pd(){}function vm(e,r,t,n,a){if(a){if(typeof n=="function"){var l=n;n=function(){var C=ya(u);l.call(C)}}var u=Nd(r,n,e,0,null,!1,!1,"",Pd);return e._reactRootContainer=u,e[Gr]=u.current,Jn(e.nodeType===8?e.parentNode:e),Kt(),u}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var h=n;n=function(){var C=ya(f);h.call(C)}}var f=fo(e,0,!1,null,null,!1,!1,"",Pd);return e._reactRootContainer=f,e[Gr]=f.current,Jn(e.nodeType===8?e.parentNode:e),Kt(function(){ka(r,f,t,n)}),f}function ja(e,r,t,n,a){var l=t._reactRootContainer;if(l){var u=l;if(typeof a=="function"){var h=a;a=function(){var f=ya(u);h.call(f)}}ka(r,u,e,a)}else u=vm(t,r,e,a,n);return ya(u)}ss=function(e){switch(e.tag){case 3:var r=e.stateNode;if(r.current.memoizedState.isDehydrated){var t=Fn(r.pendingLanes);t!==0&&(Ua(r,t|1),sr(r,Ie()),(fe&6)===0&&(kn=Ie()+500,yt()))}break;case 13:Kt(function(){var n=et(e,1);if(n!==null){var a=tr();Fr(n,e,1,a)}}),go(e,1)}},$a=function(e){if(e.tag===13){var r=et(e,134217728);if(r!==null){var t=tr();Fr(r,e,134217728,t)}go(e,134217728)}},us=function(e){if(e.tag===13){var r=Et(e),t=et(e,r);if(t!==null){var n=tr();Fr(t,e,r,n)}go(e,r)}},ds=function(){return xe},cs=function(e,r){var t=xe;try{return xe=e,r()}finally{xe=t}},Yr=function(e,r,t){switch(r){case"input":if(Wt(e,t),r=t.name,t.type==="radio"&&r!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<t.length;r++){var n=t[r];if(n!==e&&n.form===e.form){var a=_i(n);if(!a)throw Error(s(90));fr(n),Wt(n,a)}}}break;case"textarea":Wr(e,t);break;case"select":r=t.value,r!=null&&he(e,!!t.multiple,r,!1)}},Yo=so,Go=Kt;var bm={usingClientEntryPoint:!1,Events:[Yn,ln,_i,qo,Wo,so]},ui={findFiberByHostInstance:Ht,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},km={bundleType:ui.bundleType,version:ui.version,rendererPackageName:ui.rendererPackageName,rendererConfig:ui.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=es(e),e===null?null:e.stateNode},findFiberByHostInstance:ui.findFiberByHostInstance||gm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sa.isDisabled&&Sa.supportsFiber)try{xi=Sa.inject(km),_r=Sa}catch{}}return ur.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bm,ur.createPortal=function(e,r){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bo(r))throw Error(s(200));return fm(e,r,null,t)},ur.createRoot=function(e,r){if(!bo(e))throw Error(s(299));var t=!1,n="",a=Cd;return r!=null&&(r.unstable_strictMode===!0&&(t=!0),r.identifierPrefix!==void 0&&(n=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),r=fo(e,1,!1,null,null,t,!1,n,a),e[Gr]=r.current,Jn(e.nodeType===8?e.parentNode:e),new vo(r)},ur.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var r=e._reactInternals;if(r===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=es(r),e=e===null?null:e.stateNode,e},ur.flushSync=function(e){return Kt(e)},ur.hydrate=function(e,r,t){if(!wa(r))throw Error(s(200));return ja(null,e,r,!0,t)},ur.hydrateRoot=function(e,r,t){if(!bo(e))throw Error(s(405));var n=t!=null&&t.hydratedSources||null,a=!1,l="",u=Cd;if(t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),r=Nd(r,null,e,1,t??null,a,!1,l,u),e[Gr]=r.current,Jn(e),n)for(e=0;e<n.length;e++)t=n[e],a=t._getVersion,a=a(t._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[t,a]:r.mutableSourceEagerHydrationData.push(t,a);return new xa(r)},ur.render=function(e,r,t){if(!wa(r))throw Error(s(200));return ja(null,e,r,!1,t)},ur.unmountComponentAtNode=function(e){if(!wa(e))throw Error(s(40));return e._reactRootContainer?(Kt(function(){ja(null,null,e,!1,function(){e._reactRootContainer=null,e[Gr]=null})}),!0):!1},ur.unstable_batchedUpdates=so,ur.unstable_renderSubtreeIntoContainer=function(e,r,t,n){if(!wa(t))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return ja(e,r,t,!1,n)},ur.version="18.3.1-next-f1338f8080-20240426",ur}var Id;function Fm(){if(Id)return xo.exports;Id=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(d){console.error(d)}}return o(),xo.exports=Tm(),xo.exports}var Dd;function Lm(){if(Dd)return Na;Dd=1;var o=Fm();return Na.createRoot=o.createRoot,Na.hydrateRoot=o.hydrateRoot,Na}var zm=Lm();function Mm(o){var d;(d=document.querySelector('meta[name="theme-color"]'))==null||d.setAttribute("content",o)}const Om="modulepreload",Hm=function(o,d){return new URL(o,d).href},Bd={},sc=function(d,s,m){let p=Promise.resolve();if(s&&s.length>0){let S=function(F){return Promise.all(F.map(x=>Promise.resolve(x).then(L=>({status:"fulfilled",value:L}),L=>({status:"rejected",reason:L}))))};const E=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),k=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));p=S(s.map(F=>{if(F=Hm(F,m),F in Bd)return;Bd[F]=!0;const x=F.endsWith(".css"),L=x?'[rel="stylesheet"]':"";if(!!m)for(let I=E.length-1;I>=0;I--){const B=E[I];if(B.href===F&&(!x||B.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${F}"]${L}`))return;const R=document.createElement("link");if(R.rel=x?"stylesheet":Om,x||(R.as="script"),R.crossOrigin="",R.href=F,k&&R.setAttribute("nonce",k),document.head.appendChild(R),x)return new Promise((I,B)=>{R.addEventListener("load",I),R.addEventListener("error",()=>B(new Error(`Unable to preload CSS for ${F}`)))})}))}function y(S){const E=new Event("vite:preloadError",{cancelable:!0});if(E.payload=S,window.dispatchEvent(E),!E.defaultPrevented)throw S}return p.then(S=>{for(const E of S||[])E.status==="rejected"&&y(E.reason);return d().catch(y)})},wn="./",pr="?v=mwc4ggyd",Mr=[{slug:"karamelluklattar-med-jardhnetum-og-sjavarsalti",brand:"hberg",name:{is:"Karamelluklattar með jarðhnetum og sjávarsalti",en:"Karamelluklattar með jarðhnetum og sjávarsalti"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Karamellusúkkulaði (55,2%) (sykur, kakósmjör, MJÓLKURDUFT , ýruefni (E322 úr SOJA ), karamellubragðefni, náttúrúleg vanillubragðefni, paprikukrydd), JARÐHNETUR (44%), sjávarsalt (0,8%)",nutrition:"Næringargildi í 100 g: Orka 2377kJ/572 kkal Fita 40 g -Þar af mettuð 15 g Kolvetni 37 g -Þar af sykurtegundir 33 g Trefjar 3,8 g Prótein 14 g Salt 0,93 g",nutritionRows:[["Orka","2377kJ/572 kkal"],["Fita","40 g"],["-Þar af mettuð","15 g"],["Kolvetni","37 g"],["-Þar af sykurtegundir","33 g"],["Trefjar","3,8 g"],["Prótein","14 g"],["Salt","0,93 g"]],tags:["snakk"],tint:"#CB9583",allergens:["peanut","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/karamelluklattar-med-jardhnetum-og-sjavarsalti/",imageUrls:["https://hberg.is/wp-content/uploads/2021/10/karamelluklattar-jardhn-sjavarsalti.jpg","https://hberg.is/wp-content/uploads/2021/10/karamelluklattar-jardhn-sjavarsalti-1.jpg"]},{slug:"kokosflogur-med-karamellu-sjavarsalti",brand:"hberg",name:{is:"Kókosflögur með Karamellu & Sjávarsalti",en:"Kókosflögur með Karamellu & Sjávarsalti"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Kókosflögur, kókospálmasykur, sjávarsalt",nutrition:"Næringargildi í 100 g: Orka 2705/652 kkal Fita 50 g -Þar af mettuð 47 g Kolvetni 42 g -Þar af sykurtegundir 32 g Trefjar 7,0 g Prótein 5,0 g Salt 0,63 g",nutritionRows:[["Orka","2705/652 kkal"],["Fita","50 g"],["-Þar af mettuð","47 g"],["Kolvetni","42 g"],["-Þar af sykurtegundir","32 g"],["Trefjar","7,0 g"],["Prótein","5,0 g"],["Salt","0,63 g"]],tags:["snakk"],tint:"#C99481",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kokosflogur-med-karamellu-sjavarsalti/",imageUrls:["https://hberg.is/wp-content/uploads/2020/08/kokosflogur-1.jpg","https://hberg.is/wp-content/uploads/2020/08/kokosflogur-2.jpg"]},{slug:"fuglafodur",brand:"hberg",name:{is:"Fuglafóður",en:"Fuglafóður"},desc:{is:"Annað",en:"Annað"},ingredients:"Innihald: Sólblómafræ",nutrition:"",nutritionRows:[],tags:["annad"],tint:"#A4B5BC",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/fuglafodur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/08/fuglafodur-1.jpg"]},{slug:"linsubaunir-raudar",brand:"hberg",name:{is:"Linsubaunir rauðar",en:"Linsubaunir rauðar"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Rauðar linsubaunir",nutrition:"Næringargildi í 100 g: Orka 573/136 kkal Fita 0,4 g -Þar af mettuð 0,1 g Kolvetni 20 g -Þar af sykurtegundir 1,8 g Trefjar 7,9 g Prótein 9,0 g Salt 0 g",nutritionRows:[["Orka","573/136 kkal"],["Fita","0,4 g"],["-Þar af mettuð","0,1 g"],["Kolvetni","20 g"],["-Þar af sykurtegundir","1,8 g"],["Trefjar","7,9 g"],["Prótein","9,0 g"],["Salt","0 g"]],tags:["bakstur"],tint:"#D2BF9D",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/linsubaunir-raudar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/08/raudar-linsubaunir-1.jpg","https://hberg.is/wp-content/uploads/2020/08/raudar-linsubaunir-2.jpg"]},{slug:"hnetusmjor-1kg",brand:"hberg",name:{is:"Hnetusmjör 1Kg",en:"Hnetusmjör 1Kg"},desc:{is:"Hnetusmjör",en:"Hnetusmjör"},ingredients:"Innihald: JARÐHNETUR (97,5%), salt (1,5%), sólblómaolía. Hnetusmjör Uppskriftir & fróðleikur Fróðleikur Hnetusmjör til manneldis má rekja alla leið til Inka og Aztekeka í Suður-Ameríku en sú tegund af hnetusmjör var auðvitað mjög frábrugðið þeim framleiðsluvörum sem við þekkjum í dag. Nútíma saga hnetusmjörs byrjaði í Kanada og í raun ekki fyrr en undir í lok 19. aldar þegar efna & lyfjafræðingurinn Marcellus Gilmore Edson var veitt einkaleyfi á hnetusmjöri. Hnetusmjör er fyrst og fremst próteinríkt var í fyrstu ætlað þeim sem ættu í erfiðleikum með að tyggja mat en slíkt var algengt á þessum tíma. Næringarrík fæða Í hnetusmjöri má finna ríka uppsprettu (20% eða meira af daglegu gildi) trefja, E-vítamíni, pantóþensýru, fólati, níasíni og B6 vítamíni. Einnig má finna steinefni eins og mangan, magnesíum, fosfór, sink, kopar og natríum (bætt við sem salt við framleiðslu) ásamt þíamíni, ríbóflavíni, járni og kalíum. Uppskriftir Geggjað Boost og klárlega okkar uppáhalds skál Við sitjum ekki á gullinu og viljum því deila með ykkur boost uppskrift sem sló heldur betur í gegn hjá starfsfólki okkar og fjölskyldu. Lýsing: Ferskleiki með næringaríkri fylling sem skilar þér aukinni orku og vellíðan. Grunnur: Grísk jógúrt, banani, döðlur, mangó, jarðarber og hnetusmjör. Toppur: Granóla, kókoskaramell, hnetusmjör og jarðarber og banani Skammtið eftir smekk ♥",nutrition:"Næringargildi í 100 g: Orka 2604 kJ/626 kkal Fita 51 g -Þar af mettuð 7,4 g Kolvetni 13 g -Þar af sykurtegundir 4,7 g Trefjar 6,6 g Prótein 25 g Salt 1,5 g",nutritionRows:[["Orka","2604 kJ/626 kkal"],["Fita","51 g"],["-Þar af mettuð","7,4 g"],["Kolvetni","13 g"],["-Þar af sykurtegundir","4,7 g"],["Trefjar","6,6 g"],["Prótein","25 g"],["Salt","1,5 g"]],tags:["smjor"],tint:"#D3A854",allergens:["peanut"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/hnetusmjor-1kg/",imageUrls:["https://hberg.is/wp-content/uploads/2020/07/hnetusmjör-1-kg-mynd.png","https://hberg.is/wp-content/uploads/2020/07/hnetusmjör-1-kg-mynd.png"],weight:"1Kg"},{slug:"orkustykki",brand:"hberg",name:{is:"Orkustykki",en:"Orkustykki"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Döðlur (68%), kókos, kakó.",nutrition:"Næringargildi í 100 g: Orka 1698 kJ/406 kkal Fita 18 g -Þar af mettuð 15 g Kolvetni 61 g -Þar af sykurtegundir 45 g Trefjar 10 g Prótein 5,0 g Salt 0,04 g",nutritionRows:[["Orka","1698 kJ/406 kkal"],["Fita","18 g"],["-Þar af mettuð","15 g"],["Kolvetni","61 g"],["-Þar af sykurtegundir","45 g"],["Trefjar","10 g"],["Prótein","5,0 g"],["Salt","0,04 g"]],tags:["snakk"],tint:"#CA9685",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/orkustykki/",imageUrls:["https://hberg.is/wp-content/uploads/2020/06/orkustykki-dod-kokos-kako-50gr-5.jpg","https://hberg.is/wp-content/uploads/2020/06/orkustykki-dod-kokos-kako-50gr-2.jpg"]},{slug:"strasaet-erytritol",brand:"hberg",name:{is:"Strásæt Erýtrítól",en:"Strásæt Erýtrítól"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Erýthritól strásæta",nutrition:"Næringargildi í 100 g: Orka 0 kJ/0 kkal Fita 0 g -Þar af mettuð 0 g Kolvetni 0 g -Þar af sykurtegundir 0 g , Þar af Erýtritól 100 g Trefjar 0 g Prótein 0 g Salt 0 g",nutritionRows:[["Orka","0 kJ/0 kkal"],["Fita","0 g"],["-Þar af mettuð","0 g"],["Kolvetni","0 g"],["-Þar af sykurtegundir","0 g"],[", Þar af Erýtritól","100 g"],["Trefjar","0 g"],["Prótein","0 g"],["Salt","0 g"]],tags:["bakstur"],tint:"#D4C09C",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/strasaet-erytritol/",imageUrls:["https://hberg.is/wp-content/uploads/2020/05/strasaeta-2.jpg","https://hberg.is/wp-content/uploads/2020/05/strasaeta.jpg"]},{slug:"karamellu-mondlur-med-sukkuladi-sjavarsalti",brand:"hberg",name:{is:"Karamellu-Möndlur með Súkkulaði & Sjávarsalti",en:"Karamellu-Möndlur með Súkkulaði & Sjávarsalti"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Súkkulaði með karamellubragði (68%) (sykur, kakósmjör, MJÓLKURDUFT , kakómassi, ýruefni (E322 úr SOJA ), karamellubragðefni, krydd, náttúrulegt vanillu bragðefni), MÖNDLUR (30%), glúkósasíróp, húðunarefni (E414, E904), salt",nutrition:"Næringargildi í 100 g: Orka 2358 kJ/566kkal Fita 39 g -Þar af mettuð 15 g Kolvetni 43 g -Þar af sykurtegundir 40 g Trefjar 3,4 g Prótein 11 g Salt 0,45 g",nutritionRows:[["Orka","2358 kJ/566kkal"],["Fita","39 g"],["-Þar af mettuð","15 g"],["Kolvetni","43 g"],["-Þar af sykurtegundir","40 g"],["Trefjar","3,4 g"],["Prótein","11 g"],["Salt","0,45 g"]],tags:["snakk"],tint:"#CA9684",allergens:["nuts","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/karamellu-mondlur-med-sukkuladi-sjavarsalti/",imageUrls:["https://hberg.is/wp-content/uploads/2020/05/karamellu-mondlur_sukk-salt-2.jpg","https://hberg.is/wp-content/uploads/2020/05/karamellu-mondlur_sukk-salt.jpg"]},{slug:"heslihnetur-med-sukkuladi-afrit",brand:"hberg",name:{is:"Heslihnetur með súkkulaði",en:"Heslihnetur með súkkulaði"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Súkkulaði (78%) (sykur, MJÓLKURDUFT , kakómassi, kakósmjör, MYSUDUFT , ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), HESLIHNETUR (20%), glúkósasíróp, húðunarefni (E414, E904)",nutrition:"Heslihnetur með súkkulaði Næringargildi í 100 g: Orka 2264 kJ/543kkal Fita 34 g -Þar af mettuð 14 g Kolvetni 50 g -Þar af sykurtegundir 48 g Trefjar 3,8 g Prótein 8,0 g Salt 0,22 g",nutritionRows:[["Orka","2264 kJ/543kkal"],["Fita","34 g"],["-Þar af mettuð","14 g"],["Kolvetni","50 g"],["-Þar af sykurtegundir","48 g"],["Trefjar","3,8 g"],["Prótein","8,0 g"],["Salt","0,22 g"]],tags:["snakk"],tint:"#CD9481",allergens:["nuts","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/heslihnetur-med-sukkuladi-afrit/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/heslihnetur-med-sukkuladi-2.jpg"]},{slug:"wasabi-hnetur",brand:"hberg",name:{is:"Wasabi hnetur",en:"Wasabi hnetur"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: JARÐHNETUR (27,5%), HVEITI (22,1%), sykur, maíssterkja, maísmjöl, pálmaolía (vottuð), salt, sojasósa ( HVEITI , SOJABAUNIR , dextrín, vatn, salt, kojirækt, litarefni (E150c)), krydd (dextrín, þykkingarefni (E414), sinnepsbragðefni, pálmaolía, andoxunarefni (E392)), lyftiefni (E500), kartöflusterkja, bragðaukandi efni (E635), sítrónusýra (E330), litarefni (E141), wasabi (0,003%)",nutrition:"Wasabi hnetur Næringargildi í 100 g: Orka 1921 kJ/458 kkal Fita 19,3 g -Þar af mettuð 4,4 g Kolvetni 59,6 g -Þar af sykurtegundir 23,4 g Trefjar 2,8 g Prótein 10 g Salt 1,0 g",nutritionRows:[["Orka","1921 kJ/458 kkal"],["Fita","19,3 g"],["-Þar af mettuð","4,4 g"],["Kolvetni","59,6 g"],["-Þar af sykurtegundir","23,4 g"],["Trefjar","2,8 g"],["Prótein","10 g"],["Salt","1,0 g"]],tags:["snakk"],tint:"#CA9586",allergens:["peanut","gluten","soy","mustard"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/wasabi-hnetur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/wasabi-hnetur-2.jpg"]},{slug:"heslihnetur-med-irish-coffee-sukkuladi",brand:"hberg",name:{is:"Heslihnetur með Irish Coffee súkkulaði",en:"Heslihnetur með Irish Coffee súkkulaði"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Hvítt súkkulaði (77%) (sykur, kakósmjör, MJÓLKURDUFT , MYSUDUFT , ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), HESLIHNETUR (20%), glúkósasíróp, dökkt súkkulaði (1%) (sykur, kakómassi, kakósmjör, ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), húðunarefni (E414, E904), irish coffee bragðefni (0,3%)",nutrition:"Heslihnetur með Irish Coffee súkkulaði Næringargildi í 100 g: Orka 2351 kJ/564 kkal Fita 37 g -Þar af mettuð 15 g Kolvetni 51 g -Þar af sykurtegundir 50 g Trefjar 1,7 g Prótein 6,4 g Salt 0,29 g",nutritionRows:[["Orka","2351 kJ/564 kkal"],["Fita","37 g"],["-Þar af mettuð","15 g"],["Kolvetni","51 g"],["-Þar af sykurtegundir","50 g"],["Trefjar","1,7 g"],["Prótein","6,4 g"],["Salt","0,29 g"]],tags:["snakk"],tint:"#C99482",allergens:["nuts","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/heslihnetur-med-irish-coffee-sukkuladi/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/heslihnetur-irish.jpg"]},{slug:"piparmondlur",brand:"hberg",name:{is:"Piparmöndlur",en:"Piparmöndlur"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Súkkulaði (65%) (sykur, MJÓLKURDUFT , kakómassi, kakósmjör, MYSUDUFT , ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), MÖNDLUR, salmíakduft (4%) (sýrustillir (E510), lakkrísrót, pálmolía (vottuð)), kakósmjör.",nutrition:"Piparmöndlur Næringargildi í 100 g: Orka 2240 kJ/538 kkal Fita 35 g -Þar af mettuð 12 g Kolvetni 42 g -Þar af sykurtegundir 40 g Trefjar 5,1 g Prótein 10,8 g Salt 0,20 g",nutritionRows:[["Orka","2240 kJ/538 kkal"],["Fita","35 g"],["-Þar af mettuð","12 g"],["Kolvetni","42 g"],["-Þar af sykurtegundir","40 g"],["Trefjar","5,1 g"],["Prótein","10,8 g"],["Salt","0,20 g"]],tags:["snakk"],tint:"#CC9782",allergens:["nuts","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/piparmondlur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/pipar-mondlur.jpg"]},{slug:"kasjusmjor-2",brand:"hberg",name:{is:"Kasjúsmjör",en:"Kasjúsmjör"},desc:{is:"Hnetusmjör",en:"Hnetusmjör"},ingredients:"Innihald: KASJÚHNETUR (99,2%), sjávarsalt (0,8%)",nutrition:"Næringargildi í 100 g: Orka 2416 kJ/582 kkal Fita 44 g -Þar af mettuð 7,8 g Kolvetni 27 g -Þar af sykurtegundir 5,9 g Trefjar 3,3 g Prótein 18 g Salt 0,8 g",nutritionRows:[["Orka","2416 kJ/582 kkal"],["Fita","44 g"],["-Þar af mettuð","7,8 g"],["Kolvetni","27 g"],["-Þar af sykurtegundir","5,9 g"],["Trefjar","3,3 g"],["Prótein","18 g"],["Salt","0,8 g"]],tags:["smjor"],tint:"#D2AA5A",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kasjusmjor-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/04/kasjusmjor.jpg"]},{slug:"kasjusmjor",brand:"hberg",name:{is:"Möndlusmjör",en:"Möndlusmjör"},desc:{is:"Hnetusmjör",en:"Hnetusmjör"},ingredients:"Innihald: MÖNDLUR , sjávarsalt (0,8%)",nutrition:"Næringargildi í 100 g: Orka 2623 kJ/663 kkal Fita 49 g -Þar af mettuð 4,0 g Kolvetni 21 g -Þar af sykurtegundir 4,5 g Trefjar 12 g Prótein 21 g Salt 0,8 g",nutritionRows:[["Orka","2623 kJ/663 kkal"],["Fita","49 g"],["-Þar af mettuð","4,0 g"],["Kolvetni","21 g"],["-Þar af sykurtegundir","4,5 g"],["Trefjar","12 g"],["Prótein","21 g"],["Salt","0,8 g"]],tags:["smjor"],tint:"#D1AC5D",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kasjusmjor/",imageUrls:["https://hberg.is/wp-content/uploads/2020/04/mondlusmjor.jpg"]},{slug:"hnetusmjor",brand:"hberg",name:{is:"Hnetusmjör 340g",en:"Hnetusmjör 340g"},desc:{is:"Hnetusmjör",en:"Hnetusmjör"},ingredients:"Innihald: JARÐHNETUR (97,5%), salt (1,5%), sólblómaolía.",nutrition:"Næringargildi í 100 g: Orka 2604 kJ/626 kkal Fita 51 g -Þar af mettuð 7,4 g Kolvetni 13 g -Þar af sykurtegundir 4,7 g Trefjar 6,6 g Prótein 25 g Salt 1,5 g",nutritionRows:[["Orka","2604 kJ/626 kkal"],["Fita","51 g"],["-Þar af mettuð","7,4 g"],["Kolvetni","13 g"],["-Þar af sykurtegundir","4,7 g"],["Trefjar","6,6 g"],["Prótein","25 g"],["Salt","1,5 g"]],tags:["smjor"],tint:"#D3AB59",allergens:["peanut"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/hnetusmjor/",imageUrls:["https://hberg.is/wp-content/uploads/2020/04/Hnetusmjör340_Hberg.png","https://hberg.is/wp-content/uploads/2020/04/Hnetusmjör340_Hberg.png"],weight:"340g"},{slug:"granola-med-tronuberjum",brand:"hberg",name:{is:"Granóla með Trönuberjum",en:"Granóla með Trönuberjum"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Granóla (95%) (heilkornaflögur (61,5%) ( HAFRAR, HVEITI ), sykur, sólblómaolía, stökkt korn (hrísmjöl, HVEITI , sykur, maltað BYGG , salt), glúkósasíróp, hunang, lyftiefni (E500), kanill, karamellaður sykur, bragðefni, þrávarnarefni (E306)), trönuber (5%) (trönuber, hásykur, sólblómaolía)",nutrition:"Næringargildi í 100 g: Orka 1805 kJ/429 kkal Fita 13 g -Þar af mettuð 1,3 g Kolvetni 67 g -Þar af sykurtegundir 19 g Trefjar 5,9 g Prótein 8,8 g Salt 0,10 g",nutritionRows:[["Orka","1805 kJ/429 kkal"],["Fita","13 g"],["-Þar af mettuð","1,3 g"],["Kolvetni","67 g"],["-Þar af sykurtegundir","19 g"],["Trefjar","5,9 g"],["Prótein","8,8 g"],["Salt","0,10 g"]],tags:["snakk"],tint:"#CA9683",allergens:["gluten"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/granola-med-tronuberjum/",imageUrls:["https://hberg.is/wp-content/uploads/2020/04/granola-med-tronuberjum-2.jpg"]},{slug:"kajuhnetur-bortnar",brand:"hberg",name:{is:"Kasjúhnetur brotnar",en:"Kasjúhnetur brotnar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: KASJÚHNETUR",nutrition:"Kasjúhnetur brotnar Næringargildi í 100 g: Orka 2416 kJ/582 kkal Fita 44  g -Þar af mettuð 7,8 g Kolvetni 27 g -Þar af sykurtegundir 5,9 g Trefjar 3,3 g Prótein 18 g Salt 0,03 g",nutritionRows:[["Orka","2416 kJ/582 kkal"],["Fita","44  g"],["-Þar af mettuð","7,8 g"],["Kolvetni","27 g"],["-Þar af sykurtegundir","5,9 g"],["Trefjar","3,3 g"],["Prótein","18 g"],["Salt","0,03 g"]],tags:["hnetur"],tint:"#B0825E",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kajuhnetur-bortnar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kashuhnetur-brotnar-oristad-2.jpg"]},{slug:"mondlur-med-dokku-sukkuladi",brand:"hberg",name:{is:"Möndlur með dökku súkkulaði",en:"Möndlur með dökku súkkulaði"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Dökkt súkkulaði (68%) (sykur, kakómassi, kakósmjör, ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), MÖNDLUR (29%), glúkósasíróp, pálmaolía, húðunarefni (E414, E904)",nutrition:"Möndlur með dökku súkkulaði Næringargildi í 100 g: Orka 2268 kJ/546 kkal Fita 38 g -Þar af mettuð 15 g Kolvetni 37 g -Þar af sykurtegundir 34 g Trefjar 8,1 g Prótein 9,0 g Salt 0,01 g",nutritionRows:[["Orka","2268 kJ/546 kkal"],["Fita","38 g"],["-Þar af mettuð","15 g"],["Kolvetni","37 g"],["-Þar af sykurtegundir","34 g"],["Trefjar","8,1 g"],["Prótein","9,0 g"],["Salt","0,01 g"]],tags:["snakk"],tint:"#CC9683",allergens:["nuts","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlur-med-dokku-sukkuladi/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mondlur-med-dokku-sukkuladi-2.jpg"]},{slug:"kasjuhentur-med-sukkuladi",brand:"hberg",name:{is:"Kasjúhentur með súkkulaði",en:"Kasjúhentur með súkkulaði"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Súkkulaði (63%) (sykur, MJÓLKURDUFT , kakómassi, kakósmjör, MYSUDUFT , ýruefni (E322 úr SOJA ), náttúrulegt bragðefni), KASJÚHNETUR (34%), glúkósasíróp, pálmaolía, húðunarefni (E414, E904)",nutrition:"Kasjúhnetur með súkkulaði Næringargildi í 100 g: Orka 2268 kJ/544kkal Fita 34 g -Þar af mettuð 13 g Kolvetni 48 g -Þar af sykurtegundir 39 g Trefjar 3,0 g Prótein 10 g Salt 0,18 g",nutritionRows:[["Orka","2268 kJ/544kkal"],["Fita","34 g"],["-Þar af mettuð","13 g"],["Kolvetni","48 g"],["-Þar af sykurtegundir","39 g"],["Trefjar","3,0 g"],["Prótein","10 g"],["Salt","0,18 g"]],tags:["snakk"],tint:"#CA9582",allergens:["nuts","milk","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kasjuhentur-med-sukkuladi/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kasjuhnetur-med-sukkuladi-2.jpg","https://hberg.is/wp-content/uploads/2020/03/kasjuhnetur-med-sukkuladi.jpg"]},{slug:"valhnetukjarnar",brand:"hberg",name:{is:"Valhnetukjarnar",en:"Valhnetukjarnar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: VALHNETUR",nutrition:"Valhnetukjarnar Næringargildi í 100 g: Orka 2584 kJ/618kkal Fita 59 g -Þar af mettuð 3,4 g Kolvetni 9,9 g -Þar af sykurtegundir 1,1 g Trefjar 6,8 g Prótein 24 g Salt 0 g",nutritionRows:[["Orka","2584 kJ/618kkal"],["Fita","59 g"],["-Þar af mettuð","3,4 g"],["Kolvetni","9,9 g"],["-Þar af sykurtegundir","1,1 g"],["Trefjar","6,8 g"],["Prótein","24 g"],["Salt","0 g"]],tags:["hnetur"],tint:"#B5865F",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/valhnetukjarnar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/valhnetukjarnar-2.jpg"]},{slug:"tronuber-2",brand:"hberg",name:{is:"Trönuber",en:"Trönuber"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Trönuber (60%), hrásykur (39%), sólblómaolía (<1%)",nutrition:"Trönuber Næringargildi í 100 g: Orka 1305 kJ/308 kkal Fita 1,5 g -Þar af mettuð 0,2 g Kolvetni 71 g -Þar af sykurtegundir 65 g Trefjar 5,1 g Prótein 0,11 g Salt 0,01 g",nutritionRows:[["Orka","1305 kJ/308 kkal"],["Fita","1,5 g"],["-Þar af mettuð","0,2 g"],["Kolvetni","71 g"],["-Þar af sykurtegundir","65 g"],["Trefjar","5,1 g"],["Prótein","0,11 g"],["Salt","0,01 g"]],tags:["avextir"],tint:"#DE8E59",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/tronuber-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/tronuber.jpg"]},{slug:"sveskjur",brand:"hberg",name:{is:"Sveskjur",en:"Sveskjur"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Sveskjur, rotvarnarefni (E202) (<1%), jurtaolía (<1%)",nutrition:"Sveskjur Næringargildi í 100 g: Orka 1076 kJ/254 kkal Fita 0,2 g -Þar af mettuð 0,1 g Kolvetni 56,8 g -Þar af sykurtegundir 38,1 g Trefjar 7,1 g Prótein 2,7 g Salt 0 g",nutritionRows:[["Orka","1076 kJ/254 kkal"],["Fita","0,2 g"],["-Þar af mettuð","0,1 g"],["Kolvetni","56,8 g"],["-Þar af sykurtegundir","38,1 g"],["Trefjar","7,1 g"],["Prótein","2,7 g"],["Salt","0 g"]],tags:["avextir"],tint:"#E19159",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/sveskjur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/sveskjur-400grIMG_0754-2-of-2.jpg","https://hberg.is/wp-content/uploads/2020/03/sveskjur-400grIMG_0752-1-of-2.jpg"]},{slug:"salthnetur",brand:"hberg",name:{is:"Salthnetur",en:"Salthnetur"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: JARÐHNETUR , sólblómaolía, salt",nutrition:"Salthnetur Næringargildi í 100 g: Orka 2593 kJ/626 kkal Fita 50,6 g -Þar af mettuð 7,5 g Kolvetni 14,2 g -Þar af sykurtegundir 5,3 g Trefjar 6,8 g Prótein 20,9 g Salt 1,50 g",nutritionRows:[["Orka","2593 kJ/626 kkal"],["Fita","50,6 g"],["-Þar af mettuð","7,5 g"],["Kolvetni","14,2 g"],["-Þar af sykurtegundir","5,3 g"],["Trefjar","6,8 g"],["Prótein","20,9 g"],["Salt","1,50 g"]],tags:["hnetur"],tint:"#B5855D",allergens:["peanut"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/salthnetur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/salthnetur.jpg"]},{slug:"pistasiur",brand:"hberg",name:{is:"Pistasíur",en:"Pistasíur"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: PISTASÍURKJARNAR",nutrition:"Pistasíur Næringargildi í 100 g: Orka 2387 kJ/576 kkal Fita 45 g -Þar af mettuð 5,9 g Kolvetni 17 g -Þar af sykurtegundir 7,7 g Trefjar 11 g Prótein 20 g Salt 0,03 g",nutritionRows:[["Orka","2387 kJ/576 kkal"],["Fita","45 g"],["-Þar af mettuð","5,9 g"],["Kolvetni","17 g"],["-Þar af sykurtegundir","7,7 g"],["Trefjar","11 g"],["Prótein","20 g"],["Salt","0,03 g"]],tags:["hnetur"],tint:"#B4855F",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/pistasiur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/pistasiur-2.jpg"]},{slug:"pekan-hnetur",brand:"hberg",name:{is:"Pekan hnetur",en:"Pekan hnetur"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: PEKANHNETUR",nutrition:"Pekanhnetur Næringargildi í 100 g: Orka 2933 kJ/698 kkal Fita 69,8 g -Þar af mettuð 6,3 g Kolvetni 6,2 g -Þar af sykurtegundir 4,5 g Trefjar 9,4 g Prótein 10 g Salt 0,003 g",nutritionRows:[["Orka","2933 kJ/698 kkal"],["Fita","69,8 g"],["-Þar af mettuð","6,3 g"],["Kolvetni","6,2 g"],["-Þar af sykurtegundir","4,5 g"],["Trefjar","9,4 g"],["Prótein","10 g"],["Salt","0,003 g"]],tags:["hnetur"],tint:"#B2855E",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/pekan-hnetur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/pekanhnetur-2.jpg"]},{slug:"orkupokinn",brand:"hberg",name:{is:"Orkupokinn",en:"Orkupokinn"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Ristaðar hnetur ( JARÐHNETUR ( JARÐHNETUOLÍA , salt), KASJÚHNETUR , MÖNDLUR ), rúsínur (sólblómaolía, rotvarnarefni ( BRENNISTEINSDÍOXÍÐ )), trönuber (hrásykur, sólblómaolía)",nutrition:"Orkupokinn Næringargildi í 100 g: Orka 2145 kJ/515 kkal Fita 33 g -Þar af mettuð 4,5 g Kolvetni 36 g -Þar af sykurtegundir 22 g Trefjar 6,3 g Prótein 16 g Salt 0,64 g",nutritionRows:[["Orka","2145 kJ/515 kkal"],["Fita","33 g"],["-Þar af mettuð","4,5 g"],["Kolvetni","36 g"],["-Þar af sykurtegundir","22 g"],["Trefjar","6,3 g"],["Prótein","16 g"],["Salt","0,64 g"]],tags:["snakk"],tint:"#CC9784",allergens:["nuts","peanut","sulphites"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/orkupokinn/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/orku-pokinn-2.jpg"]},{slug:"party-pokinn",brand:"hberg",name:{is:"Partý pokinn",en:"Partý pokinn"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Kryddhjúpaðar jarðhnetur ( JARÐHNETUR , HVEITI , kartöflusterkja, kryddblanda (krydd, brauðraspur ( HVEITI , salt, lyftiefni (E503), paprika, kekkjavarnarefni (E551), rotvarnarefni (E306), turmerik), sólblómaolía, salt, sykur, hvítlaukur, lyftiefni (E500), náttúruleg bragðefni ( HVEITI )), JARÐHNETUR (sólblómaolía, salt (1%)), ristaðar MÖNDLUR , ristuð graskersfræ (pálmolía).",nutrition:"Partý pokinn Næringargildi í 100 g: Orka 2122 kJ/507 kkal Fita 30 g -Þar af mettuð 8,5 g Kolvetni 38 g -Þar af sykurtegundir 2,8 g Trefjar 9,6 g Prótein 17 g Salt 1,8 g",nutritionRows:[["Orka","2122 kJ/507 kkal"],["Fita","30 g"],["-Þar af mettuð","8,5 g"],["Kolvetni","38 g"],["-Þar af sykurtegundir","2,8 g"],["Trefjar","9,6 g"],["Prótein","17 g"],["Salt","1,8 g"]],tags:["snakk"],tint:"#CA9584",allergens:["nuts","peanut","gluten"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/party-pokinn/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/party-pokinn-2-1.jpg"]},{slug:"mondlur",brand:"hberg",name:{is:"Möndlur",en:"Möndlur"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: MÖNDLUR",nutrition:"Möndlur heilar með hýði Næringargildi í 100 g: Orka 2623 kJ/633 kkal Fita 49 g -Þar af mettuð 4,0 g Kolvetni 21 g -Þar af sykurtegundir 4,5 g Trefjar 12 g Prótein 21 g Salt 0 g",nutritionRows:[["Orka","2623 kJ/633 kkal"],["Fita","49 g"],["-Þar af mettuð","4,0 g"],["Kolvetni","21 g"],["-Þar af sykurtegundir","4,5 g"],["Trefjar","12 g"],["Prótein","21 g"],["Salt","0 g"]],tags:["hnetur"],tint:"#B4845C",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mondlur.jpg"]},{slug:"mondlur-sneiddar",brand:"hberg",name:{is:"Möndlur sneiddar",en:"Möndlur sneiddar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: MÖNDLUR",nutrition:"Möndlur sneiddar Næringargildi í 100 g: Orka 2703kJ/653 kkal Fita 52 g -Þar af mettuð 3,95 g Kolvetni 18,7 g -Þar af sykurtegundir 4,6 g Trefjar 9,9 g Prótein 21,4 g Salt 0,05 g",nutritionRows:[["Orka","2703kJ/653 kkal"],["Fita","52 g"],["-Þar af mettuð","3,95 g"],["Kolvetni","18,7 g"],["-Þar af sykurtegundir","4,6 g"],["Trefjar","9,9 g"],["Prótein","21,4 g"],["Salt","0,05 g"]],tags:["hnetur"],tint:"#B2835D",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlur-sneiddar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/möndlur-sneiddar.jpg"]},{slug:"mondlur-afhyddar",brand:"hberg",name:{is:"Möndlur afhýddar",en:"Möndlur afhýddar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: MÖNDLUR",nutrition:"Möndlur afhýddar Næringargildi í 100 g: Orka 2703kJ/653 kkal Fita 52 g -Þar af mettuð 3,95 g Kolvetni 18,7 g -Þar af sykurtegundir 4,6 g Trefjar 9,9 g Prótein 21,4 g Salt 0,05 g",nutritionRows:[["Orka","2703kJ/653 kkal"],["Fita","52 g"],["-Þar af mettuð","3,95 g"],["Kolvetni","18,7 g"],["-Þar af sykurtegundir","4,6 g"],["Trefjar","9,9 g"],["Prótein","21,4 g"],["Salt","0,05 g"]],tags:["hnetur"],tint:"#B58560",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlur-afhyddar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mondlur-afhyddar-2.jpg"]},{slug:"mondlur-hakkadar",brand:"hberg",name:{is:"Möndlur hakkaðar",en:"Möndlur hakkaðar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: MÖNDLUR",nutrition:"Möndlur hakkaðar Næringargildi í 100 g: Orka 2703kJ/653 kkal Fita 52 g -Þar af mettuð 3,95 g Kolvetni 18,7 g -Þar af sykurtegundir 4,6 g Trefjar 9,9 g Prótein 21,4 g Salt 0,05 g",nutritionRows:[["Orka","2703kJ/653 kkal"],["Fita","52 g"],["-Þar af mettuð","3,95 g"],["Kolvetni","18,7 g"],["-Þar af sykurtegundir","4,6 g"],["Trefjar","9,9 g"],["Prótein","21,4 g"],["Salt","0,05 g"]],tags:["hnetur"],tint:"#B4845D",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlur-hakkadar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mondlur-hakkadar-2.jpg"]},{slug:"kokosolia-lifraen-og-lyktarlaus",brand:"hberg",name:{is:"Kókosolía, lífræn og lyktarlaus",en:"Kókosolía, lífræn og lyktarlaus"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Lífræn kókoshnetuolía",nutrition:"Kókosolía, lífræn og lyktarlaus 500mL Næringargildi í 100 g: Orka 3700 kJ/900 kkal Fita 100  g -Þar af mettuð 91 g Kolvetni 0 g -Þar af sykurtegundir 0 g Trefjar 0 g Prótein 0 g Salt 0,01 g",nutritionRows:[["Orka","3700 kJ/900 kkal"],["Fita","100  g"],["-Þar af mettuð","91 g"],["Kolvetni","0 g"],["-Þar af sykurtegundir","0 g"],["Trefjar","0 g"],["Prótein","0 g"],["Salt","0,01 g"]],tags:["bakstur"],tint:"#D3BF9B",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kokosolia-lifraen-og-lyktarlaus/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kokosolia-lifraen-lyktarlaus.jpg"]},{slug:"kokosmjol",brand:"hberg",name:{is:"Kókosmjöl",en:"Kókosmjöl"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Kókosmjöl",nutrition:"Kókosmjöl Næringargildi í 100 g: Orka 2451 kJ/595 kkal Fita 56  g -Þar af mettuð 53,3 g Kolvetni 8 g -Þar af sykurtegundir 6,3 g Trefjar 17 g Prótein 6,3 g Salt 0,07 g",nutritionRows:[["Orka","2451 kJ/595 kkal"],["Fita","56  g"],["-Þar af mettuð","53,3 g"],["Kolvetni","8 g"],["-Þar af sykurtegundir","6,3 g"],["Trefjar","17 g"],["Prótein","6,3 g"],["Salt","0,07 g"]],tags:["bakstur"],tint:"#D4C0A2",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kokosmjol/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kokosmjol-2-of-2.jpg"]},{slug:"kokosflogur-2",brand:"hberg",name:{is:"Kókosflögur",en:"Kókosflögur"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Kókosflögur",nutrition:"Kókosflögur Næringargildi í 100 g: Orka 3055 kJ/740 kkal Fita 66  g -Þar af mettuð 56 g Kolvetni 7 g -Þar af sykurtegundir 7 g Trefjar 15 g Prótein 7 g Salt 0,02 g",nutritionRows:[["Orka","3055 kJ/740 kkal"],["Fita","66  g"],["-Þar af mettuð","56 g"],["Kolvetni","7 g"],["-Þar af sykurtegundir","7 g"],["Trefjar","15 g"],["Prótein","7 g"],["Salt","0,02 g"]],tags:["bakstur"],tint:"#D2BC9B",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kokosflogur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kokosflogur-2.jpg"]},{slug:"kinoafrae",brand:"hberg",name:{is:"Kínóafræ",en:"Kínóafræ"},desc:{is:"Fræ",en:"Fræ"},ingredients:"Innihald: Kínóafræ",nutrition:"Kínóafræ Næringargildi í 100 g: Orka 1698 kJ/402 kkal Fita 6  g -Þar af mettuð 0 g Kolvetni 70 g -Þar af sykurtegundir 0 g Trefjar 6 g Prótein 14 g Salt 0 g",nutritionRows:[["Orka","1698 kJ/402 kkal"],["Fita","6  g"],["-Þar af mettuð","0 g"],["Kolvetni","70 g"],["-Þar af sykurtegundir","0 g"],["Trefjar","6 g"],["Prótein","14 g"],["Salt","0 g"]],tags:["frae"],tint:"#A0AE80",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kinoafrae/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kinofrae-2.jpg"]},{slug:"kajuhnetur-heilarristadar",brand:"hberg",name:{is:"Kasjúhnetur heilar & ristaðar",en:"Kasjúhnetur heilar & ristaðar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: KASJÚHNETUR",nutrition:"Kasjúhnetur heilar og ristaðar Næringargildi í 100 g: Orka 2416 kJ/582 kkal Fita 44  g -Þar af mettuð 7,8 g Kolvetni 27 g -Þar af sykurtegundir 5,9 g Trefjar 3,3 g Prótein 18 g Salt 0,03 g",nutritionRows:[["Orka","2416 kJ/582 kkal"],["Fita","44  g"],["-Þar af mettuð","7,8 g"],["Kolvetni","27 g"],["-Þar af sykurtegundir","5,9 g"],["Trefjar","3,3 g"],["Prótein","18 g"],["Salt","0,03 g"]],tags:["hnetur"],tint:"#B3845E",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kajuhnetur-heilarristadar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kasjuhnetur-250gr-2-of-2.jpg","https://hberg.is/wp-content/uploads/2020/03/kasjuhnetur-250gr-1-of-2.jpg"]},{slug:"hampfrae-3",brand:"hberg",name:{is:"Hampfræ",en:"Hampfræ"},desc:{is:"Fræ",en:"Fræ"},ingredients:"Innihald: Hampfræ",nutrition:"Hampfræ Næringargildi í 100 g: Orka 2455kJ/592 kkal Fita 48  g -Þar af mettuð 5,2 g Kolvetni 3,1 g -Þar af sykurtegundir 2,6 g Trefjar 6,0 g Prótein 34 g Salt 0,03 g",nutritionRows:[["Orka","2455kJ/592 kkal"],["Fita","48  g"],["-Þar af mettuð","5,2 g"],["Kolvetni","3,1 g"],["-Þar af sykurtegundir","2,6 g"],["Trefjar","6,0 g"],["Prótein","34 g"],["Salt","0,03 g"]],tags:["frae"],tint:"#A2AF80",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/hampfrae-3/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/hampfrae-2.jpg"]},{slug:"heslihnetur-hakkadar-2",brand:"hberg",name:{is:"Heslihnetur hakkaðar",en:"Heslihnetur hakkaðar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: HESLIHNETUR",nutrition:"Heslihnetur hakkaðar og ristaðar Næringargildi í 100 g: Orka 2939 kJ/711 kkal Fita 62,4 g -Þar af mettuð 4,5 g Kolvetni 17,6 g -Þar af sykurtegundir 4,9 g Trefjar 9,4 g Prótein 15 g Salt 0 g",nutritionRows:[["Orka","2939 kJ/711 kkal"],["Fita","62,4 g"],["-Þar af mettuð","4,5 g"],["Kolvetni","17,6 g"],["-Þar af sykurtegundir","4,9 g"],["Trefjar","9,4 g"],["Prótein","15 g"],["Salt","0 g"]],tags:["hnetur"],tint:"#B3845E",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/heslihnetur-hakkadar-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/heslihnetur-2.jpg","https://hberg.is/wp-content/uploads/2020/03/heslihnetur-1.jpg"]},{slug:"heslihnetur-heilar",brand:"hberg",name:{is:"Heslihnetur heilar",en:"Heslihnetur heilar"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: HESLIHNETUR",nutrition:"Næringargildi í 100 g: Orka 2700 kJ/654 kkal Fita 61 g -Þar af mettuð 4,5 g Kolvetni 7,0 g -Þar af sykurtegundir 4,3 g Trefjar 9,7 g Prótein 15 g Salt 0 g",nutritionRows:[["Orka","2700 kJ/654 kkal"],["Fita","61 g"],["-Þar af mettuð","4,5 g"],["Kolvetni","7,0 g"],["-Þar af sykurtegundir","4,3 g"],["Trefjar","9,7 g"],["Prótein","15 g"],["Salt","0 g"]],tags:["hnetur"],tint:"#B6875B",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/heslihnetur-heilar/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/Heslihnetur-100gr-1-of-1.jpg","https://hberg.is/wp-content/uploads/2020/03/Heslihnetur-100gr-2.jpg"]},{slug:"avaxta-og-hnetublanda-2",brand:"hberg",name:{is:"Ávaxta & hnetublanda",en:"Ávaxta & hnetublanda"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Súkkulaði (sykur, MJÓLKURDUFT , kakómassi, kakósmjör, MYSUDUFT , ýruefni (E322 úr SOJA ), bragðefni), rúsínur, ananas, bananar, JARÐHNETUR , KASJÚHNETUR, MÖNDLUR , glúkósasýróp, kókosolía, JÓGÚRTDUFT , jógúrtbragðefni, húðunarefni (E414, E904), pálmaolía, sólblómaolía, rotvarnarefni ( BRENNISTEINSDÍOXÍÐ )",nutrition:"Ávaxta & hnetublanda Næringargildi í 100 g: Orka 2035 kJ/486 kkal Fita 24 g -Þar af mettuð 12 g Kolvetni 60 g -Þar af sykurtegundir 55 g Prótein 6,4 g Salt 0,29 g",nutritionRows:[["Orka","2035 kJ/486 kkal"],["Fita","24 g"],["-Þar af mettuð","12 g"],["Kolvetni","60 g"],["-Þar af sykurtegundir","55 g"],["Prótein","6,4 g"],["Salt","0,29 g"],["",""]],tags:["snakk"],tint:"#CB9483",allergens:["nuts","peanut","milk","soy","sulphites"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/avaxta-og-hnetublanda-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/avaxta-og-hnetublanda-2.jpg","https://hberg.is/wp-content/uploads/2020/03/avaxta-og-hnetublanda.jpg"]},{slug:"hampfrae-2",brand:"hberg",name:{is:"Stórar rúsínur",en:"Stórar rúsínur"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Rúsínur, sólblómaolía (<0,75%)",nutrition:"Stórar Rúsínur Næringargildi í 100 g: Orka 1377 kJ/324 kkal Fita 0 g -Þar af mettuð 0 g Kolvetni 78 g -Þar af sykurtegundir 61,2 g Trefjar 1 g Prótein 2,5 g Salt 0,06 g",nutritionRows:[["Orka","1377 kJ/324 kkal"],["Fita","0 g"],["-Þar af mettuð","0 g"],["Kolvetni","78 g"],["-Þar af sykurtegundir","61,2 g"],["Trefjar","1 g"],["Prótein","2,5 g"],["Salt","0,06 g"]],tags:["avextir"],tint:"#DF9058",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/hampfrae-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/Rúsínur-stórar.jpg"]},{slug:"granola-an-vidbaetts-sykurs-med-frostthurrkudum-jardarberjum",brand:"hberg",name:{is:"Granóla án viðbætts sykurs , með frostþurrkuðum jarðarberjum",en:"Granóla án viðbætts sykurs , með frostþurrkuðum jarðarberjum"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: HAFRAFLÖGUR (51%), trefjar úr síkóríurót (22,3%), HVEITI , repjuolía, stökkt maís- HVEITI (kurlaður maís, HVEITI , kurlað hveiti, maísmjöl) pressað maís- HVEITI (maís, HVEITI , salt) kókosmjöl (2%), frostþurrkuð jarðaber (1,5%), náttúruleg bragðefni, þráavarnarefni (E304, E306)",nutrition:"Granóla án viðbætts sykurs , með frostþurrkuðum jarðarberjum Næringargildi í 100 g: Orka 1770kJ/422 kkal Fita 11 g -Þar af mettuð 1,9 g Kolvetni 67 g -Þar af sykurtegundir 6,6 g Trefjar 4,8 g Prótein 11 g Salt 0,02 g",nutritionRows:[["Orka","1770kJ/422 kkal"],["Fita","11 g"],["-Þar af mettuð","1,9 g"],["Kolvetni","67 g"],["-Þar af sykurtegundir","6,6 g"],["Trefjar","4,8 g"],["Prótein","11 g"],["Salt","0,02 g"]],tags:["snakk"],tint:"#CC9684",allergens:["gluten"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/granola-an-vidbaetts-sykurs-med-frostthurrkudum-jardarberjum/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/sykurlaust-granola-jardaber-2.jpg","https://hberg.is/wp-content/uploads/2020/03/sykurlaust-granola-jardaber-1.jpg"]},{slug:"goji-ber-2",brand:"hberg",name:{is:"Goji ber",en:"Goji ber"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Goji ber",nutrition:"Næringargildi í 100 g: Orka 1258kJ/298 kkal Fita 1,5 g -Þar af mettuð 0,3 g Kolvetni 55 g -Þar af sykurtegundir 50 g Trefjar 10 g Prótein 11 g Salt 0,78 g",nutritionRows:[["Orka","1258kJ/298 kkal"],["Fita","1,5 g"],["-Þar af mettuð","0,3 g"],["Kolvetni","55 g"],["-Þar af sykurtegundir","50 g"],["Trefjar","10 g"],["Prótein","11 g"],["Salt","0,78 g"]],tags:["avextir"],tint:"#E3945D",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/goji-ber-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/goji-ber-2.jpg"]},{slug:"furuhnetur-2",brand:"hberg",name:{is:"Furuhnetur",en:"Furuhnetur"},desc:{is:"Hnetur",en:"Hnetur"},ingredients:"Innihald: Furuhnetur",nutrition:"Furuhnetur Næringargildi í 100 g: Orka 3016 kJ/730 kkal Fita 68,4 g -Þar af mettuð 4,9 g Kolvetni 13,1 g -Þar af sykurtegundir 3,6 g Trefjar 3,7 g Prótein 13,7 g Salt 0,01 g",nutritionRows:[["Orka","3016 kJ/730 kkal"],["Fita","68,4 g"],["-Þar af mettuð","4,9 g"],["Kolvetni","13,1 g"],["-Þar af sykurtegundir","3,6 g"],["Trefjar","3,7 g"],["Prótein","13,7 g"],["Salt","0,01 g"]],tags:["hnetur"],tint:"#B4845C",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/furuhnetur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/furuhnetur-2.jpg"]},{slug:"fikjur-2",brand:"hberg",name:{is:"Fíkjur",en:"Fíkjur"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Fíkjur, hrísmjöl (<3%)",nutrition:"Fíkjur Næringargildi í 100 g: Orka 1088 kJ/257 kkal Fita 0,93 g -Þar af mettuð 0,14 g Kolvetni 54,1 g -Þar af sykurtegundir 47,9 g Trefjar 9,8 g Prótein 3,3 g Salt 0,03 g",nutritionRows:[["Orka","1088 kJ/257 kkal"],["Fita","0,93 g"],["-Þar af mettuð","0,14 g"],["Kolvetni","54,1 g"],["-Þar af sykurtegundir","47,9 g"],["Trefjar","9,8 g"],["Prótein","3,3 g"],["Salt","0,03 g"]],tags:["avextir"],tint:"#DC8E5A",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/fikjur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/fikjur-2.jpg"]},{slug:"dodlur-2",brand:"hberg",name:{is:"Döðlur",en:"Döðlur"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Döðlur, sólblómaolía (<0,2%)",nutrition:"Döðlu heilar og steinlausar Næringargildi í 100 g: Orka 1252 kJ/295 kkal Fita 0,2 g -Þar af mettuð 0,1 g Kolvetni 68 g -Þar af sykurtegundir 66 g Trefjar 4 g Prótein 3,3 g Salt 0,03 g",nutritionRows:[["Orka","1252 kJ/295 kkal"],["Fita","0,2 g"],["-Þar af mettuð","0,1 g"],["Kolvetni","68 g"],["-Þar af sykurtegundir","66 g"],["Trefjar","4 g"],["Prótein","3,3 g"],["Salt","0,03 g"]],tags:["avextir"],tint:"#DF905A",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/dodlur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/dodlur-2.jpg"]},{slug:"dodlur-saxadar-2",brand:"hberg",name:{is:"Döðlur saxaðar",en:"Döðlur saxaðar"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Döðlur, hrísmjöl (<3%)",nutrition:"Döðlu saxaðar Næringargildi í 100 g: Orka 1320 kJ/311 kkal Fita 0,2 g -Þar af mettuð 0,1 g Kolvetni 72 g -Þar af sykurtegundir 68 g Trefjar 4 g Prótein 3,3 g Salt 0,03 g",nutritionRows:[["Orka","1320 kJ/311 kkal"],["Fita","0,2 g"],["-Þar af mettuð","0,1 g"],["Kolvetni","72 g"],["-Þar af sykurtegundir","68 g"],["Trefjar","4 g"],["Prótein","3,3 g"],["Salt","0,03 g"]],tags:["avextir"],tint:"#DF8E57",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/dodlur-saxadar-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/dodlur-saxadar-2.jpg"]},{slug:"dodlusirop-2",brand:"hberg",name:{is:"Döðlusíróp",en:"Döðlusíróp"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Döðlur (100%)",nutrition:"Döðlusíróp Næringargildi í 100 g: Orka 1371 kJ/324 kkal Fita 0,1 g -Þar af mettuð 0 g Kolvetni 75 g -Þar af sykurtegundir 62 g Trefjar 7,8 g Prótein 2,0 g Salt 0,11 g",nutritionRows:[["Orka","1371 kJ/324 kkal"],["Fita","0,1 g"],["-Þar af mettuð","0 g"],["Kolvetni","75 g"],["-Þar af sykurtegundir","62 g"],["Trefjar","7,8 g"],["Prótein","2,0 g"],["Salt","0,11 g"]],tags:["bakstur"],tint:"#D5C29C",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/dodlusirop-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/dodlusyrop-1.jpg"]},{slug:"chilli-hriskokur",brand:"hberg",name:{is:"Chilli hrískökur",en:"Chilli hrískökur"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Hrísmjöl, pálmaolía (vottuð), sykur, tapíókasterkja, maltódextrín, salt, litarefni (E160c, E150c), paprikuþykkni, chili, sojasósa ( SOJABAUNIR , HVEITI , vatn, salt)",nutrition:"Apríkósur Næringargildi í 100 g: Orka 2297kJ/550 kkal Fita 33,3 g -Þar af mettuð 16,3 g Kolvetni 58 g -Þar af sykurtegundir 11,1 g Trefjar 1,5 g Prótein 3,9 g Salt 2,1 g",nutritionRows:[["Orka","2297kJ/550 kkal"],["Fita","33,3 g"],["-Þar af mettuð","16,3 g"],["Kolvetni","58 g"],["-Þar af sykurtegundir","11,1 g"],["Trefjar","1,5 g"],["Prótein","3,9 g"],["Salt","2,1 g"]],tags:["snakk"],tint:"#CB9582",allergens:["gluten","soy"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/chilli-hriskokur/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/chili-hriskokur.jpg"]},{slug:"aprikosur-2",brand:"hberg",name:{is:"Apríkósur",en:"Apríkósur"},desc:{is:"Þurrkaðir ávextir",en:"Þurrkaðir ávextir"},ingredients:"Innihald: Apríkósur, rotvarnarefni (<0,2%)( BRENNISTEINSDÍOXÍÐ )",nutrition:"Apríkósur Næringargildi í 100 g: Orka 1076 kJ/254 kkal Fita 0,51 g -Þar af mettuð 0,02 g Kolvetni 55 g -Þar af sykurtegundir 53 g Trefjar 7,3 g Prótein 3,4 g Salt 0,03 g",nutritionRows:[["Orka","1076 kJ/254 kkal"],["Fita","0,51 g"],["-Þar af mettuð","0,02 g"],["Kolvetni","55 g"],["-Þar af sykurtegundir","53 g"],["Trefjar","7,3 g"],["Prótein","3,4 g"],["Salt","0,03 g"]],tags:["avextir"],tint:"#DC8C5A",allergens:["sulphites"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/aprikosur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/aprikosur-2.jpg"]},{slug:"husk",brand:"hberg",name:{is:"Husk",en:"Husk"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Psyllium husk trefjar",nutrition:"Huskið er einstkalega trefjaríkt og gott fyrir meltinguna Næringargildi í 100 g: Orka 776kJ/194 kkal Fita 2 g -Þar af mettuð 0,2 g Kolvetni 2,5 g -Þar af sykurtegundir 0 g Trefjar 87,5 g Prótein 1,4 g Salt 0,33 g",nutritionRows:[["Orka","776kJ/194 kkal"],["Fita","2 g"],["-Þar af mettuð","0,2 g"],["Kolvetni","2,5 g"],["-Þar af sykurtegundir","0 g"],["Trefjar","87,5 g"],["Prótein","1,4 g"],["Salt","0,33 g"]],tags:["bakstur"],tint:"#D3BF9D",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/husk/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/husk-trefjar-2.jpg","https://hberg.is/wp-content/uploads/2020/03/husk-trefjar.jpg"]},{slug:"kokospalmasykur-2",brand:"hberg",name:{is:"Kókospálmasykur",en:"Kókospálmasykur"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: Kókospálmasykur",nutrition:"Kókospálmasykur Næringargildi í 100 g: Orka 1634 kJ/385 kkal Fita 0 g -Þar af mettuð 0 g Kolvetni 94 g -Þar af sykurtegundir 83 g Trefjar 2,1 g Prótein 1,1 g Salt 0,17g",nutritionRows:[["Orka","1634 kJ/385 kkal"],["Fita","0 g"],["-Þar af mettuð","0 g"],["Kolvetni","94 g"],["-Þar af sykurtegundir","83 g"],["Trefjar","2,1 g"],["Prótein","1,1 g"],["Salt","0,17g"]],tags:["bakstur"],tint:"#D4C19E",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/kokospalmasykur-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/kokos-palmasykur-2.jpg"]},{slug:"chia-frae-2",brand:"hberg",name:{is:"Chia fræ",en:"Chia fræ"},desc:{is:"Fræ",en:"Fræ"},ingredients:"Innihald: Chia fræ",nutrition:"Chia fræ Næringargildi í 100 g: Orka 2156 kJ/519 kkal Fita 28,6 g -Þar af mettuð 3,2 g Kolvetni 4,4 g -Þar af sykurtegundir 0 g Trefjar 37,7 g Prótein 15,6 g Salt 0,05 g",nutritionRows:[["Orka","2156 kJ/519 kkal"],["Fita","28,6 g"],["-Þar af mettuð","3,2 g"],["Kolvetni","4,4 g"],["-Þar af sykurtegundir","0 g"],["Trefjar","37,7 g"],["Prótein","15,6 g"],["Salt","0,05 g"]],tags:["frae"],tint:"#A4B281",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/chia-frae-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/chia-frae-2.jpg","https://hberg.is/wp-content/uploads/2020/03/chia-frae.jpg"]},{slug:"mondlumjol-2",brand:"hberg",name:{is:"Möndlumjöl",en:"Möndlumjöl"},desc:{is:"Bökunarvörur",en:"Bökunarvörur"},ingredients:"Innihald: MÖNDLUMJÖL",nutrition:"Möndlumjölið er tilvalið í bakstur. Næringargildi í 100 g: Orka 2689kJ/650 kkal Fita 55 g -Þar af mettuð 4,3 g Kolvetni 7,2 g -Þar af sykurtegundir 3,8 g Trefjar 10 g Prótein 26,7 g Salt 0,07 g",nutritionRows:[["Orka","2689kJ/650 kkal"],["Fita","55 g"],["-Þar af mettuð","4,3 g"],["Kolvetni","7,2 g"],["-Þar af sykurtegundir","3,8 g"],["Trefjar","10 g"],["Prótein","26,7 g"],["Salt","0,07 g"]],tags:["bakstur"],tint:"#D3BF9E",allergens:["nuts"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mondlumjol-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mondlumjol-2.jpg"]},{slug:"mexikano-snakk-2",brand:"hberg",name:{is:"Mexikano snakk",en:"Mexikano snakk"},desc:{is:"Súkkulaði og snakk",en:"Súkkulaði og snakk"},ingredients:"Innihald: Maísmjöl, maíssterkja, ostakrydd ( MJÓLK ), salt, tómatduft, sykur, chiliduft, ger, laukduft, litarefni (E160c), kekkjavarnarefni (E551)), pálmaolía (vottuð), salt",nutrition:"Bragðmikið og brakandi stökkt snakk, tilvalið til fyrir spilakvöldið, saumaklúbbinn eða jafvel á nammibarinn í veislunni. Næringargildi í 100 g: Orka 1562kJ/369 kkal Fita 5,3 g -Þar af mettuð 1,9 g Kolvetni 73,4 g -Þar af sykurtegundir 6,9 g Trefjar 2,9 g Prótein 5,6 g Salt 0,69 g",nutritionRows:[["Orka","1562kJ/369 kkal"],["Fita","5,3 g"],["-Þar af mettuð","1,9 g"],["Kolvetni","73,4 g"],["-Þar af sykurtegundir","6,9 g"],["Trefjar","2,9 g"],["Prótein","5,6 g"],["Salt","0,69 g"]],tags:["snakk"],tint:"#CB9484",allergens:["milk"],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/mexikano-snakk-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/mexico-snakk-2.jpg"]},{slug:"solblomafrae-2",brand:"hberg",name:{is:"Sólblómafræ",en:"Sólblómafræ"},desc:{is:"Fræ",en:"Fræ"},ingredients:"Innihald: Sólblómafræ",nutrition:"Sólblómafræ eru einföld í bragi en einstaklega rík af E og B vítamínum, próteinrík og innihalda góðar olíur. Mikið notuð í brauðgerð og út á salöt, og ekki er verra hvað þau eru ódýr í innkaupum. Næringargildi í 100 g: Orka 2639kJ/637kkal Fita 51 g -Þar af mettuð 6,4 g Kolvetni 20 g -Þar af sykurtegundir 2,0 g Trefjar 9 g Prótein 20 g Salt 0,004 g",nutritionRows:[["Orka","2639kJ/637kkal"],["Fita","51 g"],["-Þar af mettuð","6,4 g"],["Kolvetni","20 g"],["-Þar af sykurtegundir","2,0 g"],["Trefjar","9 g"],["Prótein","20 g"],["Salt","0,004 g"]],tags:["frae"],tint:"#A1AF7F",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/solblomafrae-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/solblomafrae-2.jpg"]},{slug:"graskersfrae-2",brand:"hberg",name:{is:"Graskersfræ",en:"Graskersfræ"},desc:{is:"Fræ",en:"Fræ"},ingredients:"Innihald: Graskersfræ",nutrition:"Graskerafræ eru bragðmikil fræ með keim af hnetu og sætu. Þau eru góð uppspretta næringa- og steinefna, próteinrík, veita fosfór, kalíum, magnesíum, járn og zink. Graskersfræ hafa verið vinsæl í ýmsar uppskriftir, svo sem í salöt og brauðgerð. Næringargildi í 100 g: Orka 2300kJ/550 kkal Fita 34,1 g -Þar af mettuð 0,5 g Kolvetni 5,0 g -Þar af sykurtegundir 1,0 g Trefjar 7,8 g Prótein 32 g Salt 0,02 g",nutritionRows:[["Orka","2300kJ/550 kkal"],["Fita","34,1 g"],["-Þar af mettuð","0,5 g"],["Kolvetni","5,0 g"],["-Þar af sykurtegundir","1,0 g"],["Trefjar","7,8 g"],["Prótein","32 g"],["Salt","0,02 g"]],tags:["frae"],tint:"#A3B17F",allergens:[],unverified:[],labels:{},hasPack:!0,hasOpen:!1,macros:0,source:"https://hberg.is/vorur/graskersfrae-2/",imageUrls:["https://hberg.is/wp-content/uploads/2020/03/graskersfrae-2.jpg"]}],Jr=[{id:"nuts",is:"Hnetur",en:"Hnetur"},{id:"peanut",is:"Jarðhnetur",en:"Jarðhnetur"},{id:"milk",is:"Mjólk",en:"Mjólk"},{id:"gluten",is:"Glúten",en:"Glúten"},{id:"soy",is:"Soja",en:"Soja"},{id:"sesame",is:"Sesam",en:"Sesam"},{id:"sulphites",is:"Súlfít",en:"Súlfít"},{id:"mustard",is:"Sinnep",en:"Sinnep"}],nr={name:"H-Berg ehf.",email:"hberg@hberg.is",emailOrders:"pantanir@hberg.is",phone:"565 6500",phoneHref:"tel:+3545656500",address:"Grandatröð 12",postcode:"220 Hafnarfjörður",mapHref:"https://www.google.com/maps/search/?api=1&query=Grandatröð+12+Hafnarfjörður"},Im=[{name:"10-11",href:"https://www.10-11.is",note:{is:"",en:""}},{name:"Albína",href:"https://hberg.is/soluadilar/",note:{is:"Aðalstræti 91, 450 Patreksfjörður",en:"Aðalstræti 91, 450 Patreksfjörður"}},{name:"Bónus",href:"https://www.bonus.is",note:{is:"",en:""}},{name:"Fjarðarkaup",href:"https://www.fjardarkaup.is",note:{is:"Hólshraun 1, 220 Hafnarfjörður",en:"Hólshraun 1, 220 Hafnarfjörður"}},{name:"Fjölval",href:"https://hberg.is/soluadilar/",note:{is:"Þórsgata 10, 450 Patreksfjörður",en:"Þórsgata 10, 450 Patreksfjörður"}},{name:"Hagkaup",href:"https://www.hagkaup.is",note:{is:"",en:""}},{name:"Hlíðarkaup",href:"https://hberg.is/soluadilar/",note:{is:"Akurhlíð 1, 550 Sauðárkróki",en:"Akurhlíð 1, 550 Sauðárkróki"}},{name:"Iceland",href:"https://www.iceland.is",note:{is:"",en:""}},{name:"Kaupfélag Skagfirðinga",href:"https://www.ks.is",note:{is:"Ártorgi 1, 550 Sauðárkrókur",en:"Ártorgi 1, 550 Sauðárkrókur"}},{name:"Kaupfélag Steingrímsfjarðar",href:"https://www.ksholm.is",note:{is:"Höfðatúni 4, 510 Hólmavík",en:"Höfðatúni 4, 510 Hólmavík"}},{name:"Kaupfélag Vestur Húnvetninga",href:"https://www.kvh.is",note:{is:"Strandgötu 1, 530 Hvammstanga",en:"Strandgötu 1, 530 Hvammstanga"}},{name:"Krónan",href:"https://www.kronan.is",note:{is:"",en:""}},{name:"Melabúðin",href:"https://hberg.is/soluadilar/",note:{is:"Hagamel 39, 107 Reykjavík",en:"Hagamel 39, 107 Reykjavík"}},{name:"N1",href:"https://www.n1.is",note:{is:"",en:""}},{name:"Nettó",href:"https://www.netto.is",note:{is:"",en:""}},{name:"Olís",href:"https://www.olis.is",note:{is:"",en:""}},{name:"Samkaup",href:"https://www.samkaup.is",note:{is:"",en:""}},{name:"Skeljungur",href:"https://www.skeljungur.is",note:{is:"",en:""}},{name:"Vöruval Vestmannaeyjum",href:"https://hberg.is/soluadilar/",note:{is:"Vesturvegur 8, 902 Vestmannaeyjar",en:"Vesturvegur 8, 902 Vestmannaeyjar"}}],We=o=>Mr.find(d=>d.slug===o),qr=(o,d="pack",s="m")=>`${wn}hberg/p/${o}/${s==="s"?400:s==="m"?800:1200}.webp${pr}`,So=(o,d)=>`${wn}hberg/p/${o}/${d}${pr}`;Mr.slice(0,6).map(o=>o.slug);const wr={logadi:nr.name,heimili:`${nr.address}, ${nr.postcode}`,simi:nr.phone,simiHref:nr.phoneHref,netfang:nr.email,fjarofloun:nr.emailOrders,kort:nr.mapHref},Dm="H-Berg ehf. var stofnað í júlí 2007 af Halldóri Berg Jónssyni og fjölskyldu, með það markmið að bjóða persónulega þjónustu á vönduðum og góðum vörum.",No={heroLinur:["Hnetur og","þurrkaðir ávextir"],heroAr:"frá H-Berg."},Bm=[{nafn:"Halldór Berg Jónsson · Framkvæmdastjóri",texti:"halldor@hberg.is",href:"mailto:halldor@hberg.is"},{nafn:"Helgi Berg Halldórsson · Sölustjóri matvörusviðs",texti:"helgi@hberg.is",href:"mailto:helgi@hberg.is"},{nafn:"Elísabet Jónsdóttir · Gæðastjóri",texti:"elisabet@hberg.is",href:"mailto:elisabet@hberg.is"},{nafn:"Ingi Már Björgvinsson · Sölumaður",texti:nr.email,href:`mailto:${nr.email}`}],_m={"@context":"https://schema.org","@type":"Organization",name:"H-Berg ehf.",url:"https://hberg.is",telephone:nr.phone,email:nr.email,foundingDate:"2007",address:{"@type":"PostalAddress",streetAddress:nr.address,postalCode:"220",addressLocality:"Hafnarfjörður",addressCountry:"IS"}},Um=o=>({img:o,n:We(o).name.is,grunnur:We(o).tint}),$m=["hnetusmjor","orkustykki","chia-frae-2","aprikosur-2","mondlur","graskersfrae-2","kasjusmjor-2"].map(o=>({...Um(o),k:1})),Am=[[{t:"Hnetur"},{img:"laus:p00",n:"Hnetur",grunnur:"#B98B60"},{t:"og fræ,"}],[{t:"þurrkaðir ávextir"},{img:"laus:p06",n:"Ávextir",grunnur:"#DE935E"}],[{t:"hnetusmjör"},{img:"hnetusmjor",n:"Smjör",grunnur:"#D7B45D"},{t:"og súkkulaði."}]],Km={Hnetur:["laus:p00","laus:p02","laus:p01","laus:p05"],Ávextir:["laus:p06","laus:p08","laus:p07"],Smjör:["hnetusmjor","kasjusmjor","kasjusmjor-2"]},Vm=[{merki:"Hnetur",titill:"Hnetur",tegundir:["mondlur","kajuhnetur-heilarristadar","valhnetukjarnar","pistasiur"]},{merki:"Þurrkaðir ávextir",titill:"Ávextir",tegundir:["aprikosur-2","dodlur-2","fikjur-2","tronuber-2"]}].map(o=>({...o,tegundir:o.tegundir.map(d=>{const s=We(d);return{slug:d,n:s.name.is,d:s.weight??s.desc.is,lit:s.tint}})})),uc=[{s:"hnetur",t:"Hnetur",d:"Hnetur frá H-Berg.",img:"kajuhnetur-bortnar",g:"#B98B60",filter:o=>o.tags.includes("hnetur")},{s:"avextir",t:"Þurrkaðir ávextir",d:"Þurrkaðir ávextir frá H-Berg.",img:"aprikosur-2",g:"#DE935E",filter:o=>o.tags.includes("avextir")},{s:"frae",t:"Fræ",d:"Fræ frá H-Berg.",img:"kinoafrae",g:"#A8B77D",filter:o=>o.tags.includes("frae")},{s:"smjor",t:"Hnetusmjör",d:"Hnetusmjör frá H-Berg.",img:"hnetusmjor-1kg",g:"#D7B45D",filter:o=>o.tags.includes("smjor")},{s:"snakk",t:"Súkkulaði og snakk",d:"Súkkulaði og snakk frá H-Berg.",img:"karamelluklattar-med-jardhnetum-og-sjavarsalti",g:"#CF9B89",filter:o=>o.tags.includes("snakk")},{s:"bakstur",t:"Bökunarvörur",d:"Bökunarvörur frá H-Berg.",img:"linsubaunir-raudar",g:"#D6C7A4",filter:o=>o.tags.includes("bakstur")},{s:"annad",t:"Annað",d:"Annað frá H-Berg.",img:"fuglafodur",g:"#A7B9BD",filter:o=>o.tags.includes("annad")}],Jm=[{h:"Upphafið",r:[{t:"H-Berg stofnað af Halldóri Berg og fjölskyldu",a:"2007"},{t:"Súkkulaðihjúpaðar gráfíkjur og döðlukúlur",a:"2009"}]},{h:"Framleiðslan",r:[{t:"Framleiðsla hefst fyrir alvöru",a:"2010"},{t:"Byggt við húsnæðið í Grandatröð",a:"2019"}]}],qm=[{q:"Hvar fæst H-Berg?",a:"Söluaðilalistinn okkar telur 19 verslanir og verslanakeðjur. Úrval getur verið ólíkt milli verslana. Listinn segir ekki til um framboð einstakra vara."},{q:"Hvernig panta ég fyrir verslun?",a:"Pantanir fara á pantanir@hberg.is. Hér getur þú sett vörur og fjölda kassa á lista og opnað hann í tölvupóstinum þínum."},{q:"Hvar finn ég innihald og ofnæmisvalda?",a:"Opnaðu vöru til að sjá innihald og næringargildi af vef H-Berg. Ofnæmisupplýsingar eru staðfestar á umbúðum. Ónefnt efni þýðir ekki að vara sé laus við það."},{q:"Eru stærri pakkningar í boði?",a:"H-Berg pakkar í stærri einingar fyrir matvælafyrirtæki, matsölustaði og stóreldhús. Hafðu samband um stærðir og magn."},{q:"Hvar er H-Berg?",a:"Þú finnur okkur í Grandatröð 12, 220 Hafnarfirði."},{q:"Hvernig næ ég í ykkur?",a:"Hringdu í 565 6500 eða sendu tölvupóst á hberg@hberg.is."}],Wm=Mr.filter(o=>!o.tags.includes("annad")).map(o=>({img:o.slug,n:o.name.is,d:o.desc.is,g:o.tint,a:(o.allergens??[]).map(d=>{var s;return(s=Jr.find(m=>m.id===d))==null?void 0:s.is}).filter(d=>!!d)})),_d=[{nafn:"Verslun",stutt:"Pöntunarlisti",hlekkur:"#poki",ord:"Opna pöntunarlistann",nota:"Veldu vörur og fjölda kassa. Opnaðu listann í tölvupósti til pantanir@hberg.is."},{nafn:"Stóreldhús",stutt:"Stærri pakkningar",hlekkur:"#staerra",ord:"Sjá stærri pakkningar",nota:"H-Berg pakkar í stærri einingar fyrir matvælafyrirtæki, matsölustaði og stóreldhús."},{nafn:"Innihald og ofnæmi",stutt:"Upplýsingar um vörur",hlekkur:"#ofnaemi",ord:"Skoða ofnæmisvalda",nota:"Skoðaðu hvaða ofnæmisvaldar eru nefndir í innihaldslýsingum. Staðfest á umbúðum."},{nafn:"Söluaðilar",stutt:"Hvar fæst H-Berg",hlekkur:"#hvar",ord:"Sjá söluaðila",nota:"Skoðaðu söluaðila H-Berg. Ekki er tilgreint hvaða vörur fást á hverjum stað."}],Vr=uc.map(o=>({s:o.s,t:o.t,items:Mr.filter(o.filter)})),Lo={"karamelluklattar-med-jardhnetum-og-sjavarsalti":{pack:[1200,1200],macros:[]},"kokosflogur-med-karamellu-sjavarsalti":{pack:[1200,1200],macros:[]},fuglafodur:{pack:[1200,1200],macros:[]},"linsubaunir-raudar":{pack:[1200,1200],macros:[]},"hnetusmjor-1kg":{pack:[1200,1200],macros:[]},orkustykki:{pack:[1200,1200],macros:[]},"strasaet-erytritol":{pack:[1200,1200],macros:[]},"karamellu-mondlur-med-sukkuladi-sjavarsalti":{pack:[1200,1200],macros:[]},"heslihnetur-med-sukkuladi-afrit":{pack:[1200,1200],macros:[]},"wasabi-hnetur":{pack:[1200,1200],macros:[]},"heslihnetur-med-irish-coffee-sukkuladi":{pack:[1200,1200],macros:[]},piparmondlur:{pack:[1200,1200],macros:[]},"kasjusmjor-2":{pack:[1200,1200],macros:[]},kasjusmjor:{pack:[1200,1200],macros:[]},hnetusmjor:{pack:[1200,1200],macros:[]},"granola-med-tronuberjum":{pack:[1200,1200],macros:[]},"kajuhnetur-bortnar":{pack:[1200,1200],macros:[]},"mondlur-med-dokku-sukkuladi":{pack:[1200,1200],macros:[]},"kasjuhentur-med-sukkuladi":{pack:[1200,1200],macros:[]},valhnetukjarnar:{pack:[1200,1200],macros:[]},"tronuber-2":{pack:[1200,1200],macros:[]},sveskjur:{pack:[1200,1200],macros:[]},salthnetur:{pack:[1200,1200],macros:[]},pistasiur:{pack:[1200,1200],macros:[]},"pekan-hnetur":{pack:[1200,1200],macros:[]},orkupokinn:{pack:[1200,1200],macros:[]},"party-pokinn":{pack:[1200,1200],macros:[]},mondlur:{pack:[1200,1200],macros:[]},"mondlur-sneiddar":{pack:[1200,1200],macros:[]},"mondlur-afhyddar":{pack:[1200,1200],macros:[]},"mondlur-hakkadar":{pack:[1200,1200],macros:[]},"kokosolia-lifraen-og-lyktarlaus":{pack:[1200,1200],macros:[]},kokosmjol:{pack:[1200,1200],macros:[]},"kokosflogur-2":{pack:[1200,1200],macros:[]},kinoafrae:{pack:[1200,1200],macros:[]},"kajuhnetur-heilarristadar":{pack:[1200,1200],macros:[]},"hampfrae-3":{pack:[1200,1200],macros:[]},"heslihnetur-hakkadar-2":{pack:[1200,1200],macros:[]},"heslihnetur-heilar":{pack:[1200,1200],macros:[]},"avaxta-og-hnetublanda-2":{pack:[1200,1200],macros:[]},"hampfrae-2":{pack:[1200,1200],macros:[]},"granola-an-vidbaetts-sykurs-med-frostthurrkudum-jardarberjum":{pack:[1200,1200],macros:[]},"goji-ber-2":{pack:[1200,1200],macros:[]},"furuhnetur-2":{pack:[1200,1200],macros:[]},"fikjur-2":{pack:[1200,1200],macros:[]},"dodlur-2":{pack:[1200,1200],macros:[]},"dodlur-saxadar-2":{pack:[1200,1200],macros:[]},"dodlusirop-2":{pack:[1200,1200],macros:[]},"chilli-hriskokur":{pack:[1200,1200],macros:[]},"aprikosur-2":{pack:[1200,1200],macros:[]},husk:{pack:[1200,1200],macros:[]},"kokospalmasykur-2":{pack:[1200,1200],macros:[]},"chia-frae-2":{pack:[1200,1200],macros:[]},"mondlumjol-2":{pack:[1200,1200],macros:[]},"mexikano-snakk-2":{pack:[1200,1200],macros:[]},"solblomafrae-2":{pack:[1200,1200],macros:[]},"graskersfrae-2":{pack:[1200,1200],macros:[]}},Ea=5,Eo=10,Ud=o=>{const d=new Date,s=p=>String(p).padStart(2,"0"),m=Array.from({length:4},()=>"ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[Math.floor(Math.random()*32)]).join("");return`${o}-${String(d.getFullYear()).slice(2)}${s(d.getMonth()+1)}${s(d.getDate())}-${m}`},Ym=o=>o>1048576?`${(o/1048576).toFixed(1)} MB`:`${Math.max(1,Math.round(o/1024))} kB`,Gm=o=>/^\S+@\S+\.\S+$/.test(o.trim()),Qm=`
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
`;function dc({cfg:o,lina:d,krefstLina:s=!1,formId:m,felaTakka:p=!1,onSkoda:y,onNytt:S,onEdit:E}){const c=T.useId(),k=T.useRef(null),F=`hb-eyd-${o.key}`,[x,L]=T.useState(()=>{let g={};try{g=JSON.parse(sessionStorage.getItem(F)||"{}")}catch{}return{...g,__ref:g.__ref||Ud(o.ref)}}),[P,R]=T.useState({}),[I,B]=T.useState({}),[G,Z]=T.useState("fylla"),[te,ee]=T.useState([]),[Q,K]=T.useState(""),[W,ie]=T.useState(!1);T.useEffect(()=>{try{sessionStorage.setItem(F,JSON.stringify(x))}catch{}},[x,F]);const ae=g=>x[g]??"",pe=(g,_)=>L(H=>({...H,[g]:_})),we=g=>`${o.key}-${g}`,_e=()=>{const g={};for(const _ of o.fields)"required"in _&&_.required&&!ae(_.id).trim()&&(g[_.id]=`${_.label}: vantar`);return o.contactEither&&!ae("phone").trim()&&!ae("email").trim()&&(g.email="Netfang eða sími: vantar"),ae("email").trim()&&!Gm(ae("email"))&&(g.email="Netfang: er ekki gilt"),s&&!(d!=null&&d.length)&&(g.__lina="Pöntunarlistinn er tómur, settu vörur á hann"),g};T.useEffect(()=>{R(g=>{const _=Object.keys(g);if(!_.length)return g;const H=_e(),J={};for(const se of _)H[se]&&(J[se]=H[se]);return Object.keys(J).length===_.length?g:J})},[x,d]);const Fe=g=>{g.preventDefault();const _=_e();if(R(_),B(Object.fromEntries(o.fields.map(H=>[H.id,!0]))),Object.keys(_).length){const H=Object.keys(_).find(J=>J!=="__lina");H&&window.setTimeout(()=>{var J;return(J=document.getElementById(we(H)))==null?void 0:J.focus()},0);return}y&&y(je),Z("yfirfara"),window.setTimeout(()=>{var H;return(H=k.current)==null?void 0:H.scrollIntoView({block:"nearest",behavior:"auto"})},0)},je=T.useMemo(()=>{const g=[o.brief,`Tilvísun: ${x.__ref}`,""];for(const _ of o.fields){if(_.kind==="files")continue;const H=(x[_.id]??"").trim();H&&g.push(`${_.label}: ${H}`)}return d!=null&&d.length&&(g.push("","Vörur og magn:"),d.forEach(_=>g.push(`  ${_.magn} x ${_.n}`))),te.length&&g.push("",`Skjöl (hengd við tölvupóstinn): ${te.map(_=>_.name).join(", ")}`),g.join(`
`)},[x,d,te,o]),Le=`${o.subject}${o.subjectField&&ae(o.subjectField).trim()?`: ${ae(o.subjectField).trim()}`:""} (${x.__ref})`,ze=`mailto:${o.to}?subject=${encodeURIComponent(Le)}&body=${encodeURIComponent(je)}`,ye=async()=>{var g;try{await navigator.clipboard.writeText(je),ie(!0)}catch{const _=document.getElementById(`${c}-brief`);if(_){const H=document.createRange();H.selectNodeContents(_);const J=window.getSelection();J==null||J.removeAllRanges(),J==null||J.addRange(H),ie(((g=document.execCommand)==null?void 0:g.call(document,"copy"))===!0)}}window.setTimeout(()=>ie(!1),2400)},V=()=>{L({__ref:Ud(o.ref)}),ee([]),R({}),B({}),Z("fylla"),S==null||S()},z=g=>{const _=[...g.target.files??[]];g.target.value="";const H=[],J=[];for(const ce of _){if(!/^image\/|^application\/pdf$/.test(ce.type)){J.push(`${ce.name}: aðeins myndir og PDF skjöl.`);continue}if(ce.size>Eo*1048576){J.push(`${ce.name}: stærri en ${Eo} MB.`);continue}H.push(ce)}const se=[...te,...H];se.length>Ea&&J.push(`Mest ${Ea} skrár.`),ee(se.slice(0,Ea)),K(J.join(" "))},U=g=>I[g.id]?P[g.id]?"villa":ae(g.id).trim()?"gott":"":"";if(G==="yfirfara")return i.jsxs("div",{className:"hb-eyd",ref:k,children:[i.jsx("p",{className:"hb-eydT",children:"Beiðnin þín er tilbúin"}),i.jsx("p",{className:"hb-eydL",children:"Svona les starfsmaður beiðnina. Allt sem þarf til að svara er á einum stað."}),i.jsx("pre",{className:"hb-kvittun",id:`${c}-brief`,tabIndex:0,"aria-label":"Beiðnin í heild",children:je}),i.jsxs("div",{className:"hb-eydA",children:[i.jsx("a",{className:"hb-btn",href:ze,children:"Opna í tölvupósti"}),i.jsx("button",{type:"button",className:"hb-btn sc",onClick:ye,children:W?"Afritað":"Afrita texta"}),i.jsxs("button",{type:"button",className:"hb-nobg",onClick:()=>{Z("fylla"),E==null||E()},children:["Breyta ",i.jsx("i",{children:"←"})]})]}),te.length>0&&i.jsxs("p",{className:"hb-smatt",children:["Skjöl fylgja ekki tölvupóstslinknum. Hengdu þau við þegar póstforritið opnast: ",te.map(g=>g.name).join(", "),"."]}),i.jsx("p",{className:"hb-smatt",children:"Ekkert er sent héðan. Þú opnar póstforritið þitt eða afritar textann og sendir þegar þú ert tilbúin/n."}),i.jsxs("button",{type:"button",className:"hb-nobg",onClick:V,children:["Byrja nýja beiðni ",i.jsx("i",{children:"→"})]})]});const v=Object.keys(P);return i.jsxs("form",{className:"hb-eyd",id:m,ref:k,onSubmit:Fe,noValidate:!0,children:[o.title&&i.jsx("p",{className:"hb-eydT",children:o.title}),o.lead&&i.jsx("p",{className:"hb-eydL",children:o.lead}),i.jsx("div",{className:"hb-reitir",children:o.fields.map(g=>{const _=`${g.kind==="textarea"||"heild"in g&&g.heild?"heild ":""}${U(g)}`.trim();return g.kind==="files"?i.jsxs("div",{className:"heild",style:{display:"grid",gap:".6rem"},children:[i.jsx("span",{className:"hb-smatt",style:{margin:0},children:g.label}),i.jsxs("label",{className:"hb-skra",children:[i.jsx("input",{type:"file",multiple:!0,accept:"image/*,application/pdf",onChange:z}),"Velja skrár"]}),i.jsxs("p",{className:"hb-smatt",children:["Allt að ",Ea," skrár, hver að ",Eo," MB, myndir eða PDF. Þú getur alltaf lýst þessu í orðum í staðinn."]}),Q&&i.jsx("p",{className:"hb-villa",role:"status",children:Q}),te.length>0&&i.jsx("ul",{className:"hb-skrar",children:te.map((H,J)=>i.jsxs("li",{children:[H.name," ",i.jsx("small",{children:Ym(H.size)}),i.jsx("button",{type:"button","aria-label":`Fjarlægja ${H.name}`,onClick:()=>ee(te.filter((se,ce)=>ce!==J)),children:"×"})]},`${H.name}${J}`))})]},g.id):i.jsxs("label",{className:_,children:[i.jsxs("span",{className:"hb-lbl",children:[g.label,"required"in g&&g.required?" *":""]}),g.kind==="textarea"?i.jsx("textarea",{id:we(g.id),rows:g.rows??4,value:ae(g.id),"aria-invalid":P[g.id]?!0:void 0,"aria-required":"required"in g&&g.required?!0:void 0,"aria-describedby":P[g.id]?`${c}-errors`:void 0,onBlur:()=>B(H=>({...H,[g.id]:!0})),onChange:H=>pe(g.id,H.target.value)}):g.kind==="select"?i.jsxs("select",{id:we(g.id),value:ae(g.id),"aria-invalid":P[g.id]?!0:void 0,"aria-required":"required"in g&&g.required?!0:void 0,"aria-describedby":P[g.id]?`${c}-errors`:void 0,onBlur:()=>B(H=>({...H,[g.id]:!0})),onChange:H=>pe(g.id,H.target.value),children:[i.jsx("option",{value:"",children:"Veldu"}),g.options.map(H=>i.jsx("option",{value:H.v,children:H.t},H.v))]}):i.jsx("input",{id:we(g.id),type:g.kind==="qty"?"text":g.kind,inputMode:g.kind==="qty"?"numeric":g.kind==="tel"?"tel":g.kind==="email"?"email":void 0,pattern:g.kind==="qty"?"[0-9]*":void 0,autoComplete:"auto"in g?g.auto:void 0,placeholder:"placeholder"in g?g.placeholder:void 0,value:ae(g.id),"aria-invalid":P[g.id]?!0:void 0,"aria-required":"required"in g&&g.required?!0:void 0,"aria-describedby":P[g.id]?`${c}-errors`:void 0,onBlur:()=>B(H=>({...H,[g.id]:!0})),onChange:H=>pe(g.id,g.kind==="qty"?H.target.value.replace(/\D/g,"").slice(0,5):H.target.value)}),i.jsx("i",{})]},g.id)})}),v.length>0&&i.jsxs("p",{className:"hb-villa",id:`${c}-errors`,role:"alert",children:[v.map(g=>P[g]).join(". "),"."]}),!p&&i.jsx("div",{className:"hb-eydA",children:i.jsx("button",{type:"submit",className:"hb-btn stor",children:o.submit})}),i.jsx("p",{className:"hb-smatt",children:"Þú sérð beiðnina í heild áður en nokkuð fer af stað."})]})}const Ca=(o,d)=>({v:o,t:d}),Xm=[{id:"person",kind:"text",label:"Nafn",required:!0,auto:"name"},{id:"phone",kind:"tel",label:"Sími",auto:"tel"},{id:"email",kind:"email",label:"Netfang",auto:"email"}],cc={key:"spyrja",to:nr.email,ref:"HB",title:"Skilaboð til H-Berg",subject:"Fyrirspurn",subjectField:"topic",brief:"Fyrirspurn til H-Berg (H-Berg)",submit:"Skoða skilaboðin",contactEither:!0,fields:[{id:"topic",kind:"select",label:"Um hvað er spurt",required:!0,heild:!0,options:[Ca("Spurning um vöru","Spurning um vöru"),Ca("Ofnæmi eða innihald","Ofnæmi eða innihald"),Ca("Verslun eða heildsala","Verslun eða heildsala"),Ca("Annað","Annað")]},...Xm,{id:"message",kind:"textarea",label:"Skilaboð",required:!0,rows:5}]},Zm={...cc,key:"staerra",to:nr.emailOrders,title:"Stærri pakkningar",subject:"Fyrirspurn um stærri pakkningar",lead:"Við pökkum í stærri einingar fyrir matvælafyrirtæki, matsölustaði og stóreldhús."},ep=o=>{var d;return((d=Jr.find(s=>s.id===o))==null?void 0:d.is.toLowerCase())||o},$o=o=>{var d;return((d=Jr.find(s=>s.id===o))==null?void 0:d.is)||o},rp={nuts:"hneta",peanut:"jarðhneta",milk:"mjólkur",gluten:"glútens",soy:"soja",sesame:"sesams",sulphites:"súlfíta",mustard:"sinneps"},Co=(o,d="og")=>o.length<2?o.join(""):o.slice(0,-1).join(", ")+` ${d} `+o[o.length-1],Po=o=>`${o} ${o%10===1&&o%100!==11?"vara":"vörur"}`;function tp(o){const d=Mr.filter(s=>!s.tags.includes("annad"));return{henta:d.filter(s=>{var m;return(m=s.allergens)==null?void 0:m.some(p=>o.includes(p))}),an:d.filter(s=>s.allergens!==null&&!s.allergens.some(m=>o.includes(m))),oljost:d.filter(s=>s.allergens===null)}}function $d(o){var d;return(d=o.allergens)!=null&&d.length?`Inniheldur: ${o.allergens.map($o).join(", ")}`:"Enginn af skráðum ofnæmisvöldum nefndur í innihaldslýsingu."}const Ta="Upplýsingarnar koma úr innihaldslýsingum H-Berg. Lestu alltaf á umbúðirnar. Hringdu í 565 6500 ef þú ert í vafa.",hc="Jarðhnetur eru belgjurtir og eru taldar sér. Hnetur og jarðhnetur eru tveir ólíkir ofnæmisvaldar.",Ad={nuts:"M12 3C5 3 3 10 5 16s12 6 14-1S17 3 12 3ZM12 5v14M8 8l8 8",peanut:"M8 3c-5 0-6 6-2 9-4 5 0 10 4 9 3 0 3-4 5-5 6-2 7-8 3-11-4-4-6 1-10-2ZM7 7l3 2m-3 7 3 1m5-8 2 2",milk:"M9 3h6v4l3 4v10H6V11l3-4V3Zm0 4h6M6 12h12",gluten:"M12 3v18M12 9C6 9 5 6 5 4c5 0 7 2 7 5Zm0 5c6 0 7-3 7-5-5 0-7 2-7 5Zm0 5c-6 0-7-3-7-5 5 0 7 2 7 5Z",soy:"M5 19C2 9 10 2 20 4c1 11-5 18-15 15ZM7 17 17 7M9 14l-1-4m4 1 4 1",sesame:"M12 3C8 8 5 12 6 16s11 6 12 0S16 8 12 3ZM10 13l-1 3",sulphites:"M9 3h6M10 3v6L4 19c-1 2 1 2 8 2s9 0 8-2L14 9V3M7 15h10",mustard:"M12 3v7M8 6l4 3 4-3M8 12c-5 0-5 8 0 8s5-8 0-8Zm8 0c-5 0-5 8 0 8s5-8 0-8Z"};function zo({id:o}){return i.jsx("svg",{"aria-hidden":"true",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:i.jsx("path",{d:Ad[o]||Ad.nuts})})}function Ao({p:o,selected:d=[]}){return i.jsx("span",{className:"hb-allergenBadges",children:o.allergens===null?"Ofnæmisupplýsingar vantar":o.allergens.length?o.allergens.map(s=>i.jsxs("span",{title:"Inniheldur",className:d.includes(s)?"selected":"",children:[i.jsx(zo,{id:s}),d.includes(s)&&i.jsx("span",{"aria-hidden":"true",children:"! "}),$o(s)]},s)):i.jsx("span",{children:"Enginn nefndur í innihaldi"})})}function np({text:o}){return i.jsx(i.Fragment,{children:o.split(new RegExp("((?<!\\p{L})\\p{Lu}{2,}(?!\\p{L}))","gu")).map((d,s)=>new RegExp("^(?:\\p{Lu}){2,}$","u").test(d)?i.jsx("mark",{children:d},s):d)})}const mc={nuts:"hnetur",peanut:"jardhnetur",milk:"mjolk",gluten:"gluten",soy:"soja",sesame:"sesam",sulphites:"sulfit",mustard:"sinnep"};function Kd(){var d;const o=((d=new URLSearchParams(window.location.search).get("forðast"))==null?void 0:d.split(","))||[];return Jr.filter(s=>o.includes(mc[s.id])).map(s=>s.id)}function ip(){const[o,d]=T.useState(Kd);T.useEffect(()=>{const E=()=>d(Kd());return window.addEventListener("popstate",E),()=>window.removeEventListener("popstate",E)},[]);const s=E=>{d(E);const c=new URL(window.location.href);E.length?c.searchParams.set("forðast",E.map(k=>mc[k]).join(",")):c.searchParams.delete("forðast"),window.history.replaceState(window.history.state,"",c)},{an:m,henta:p,oljost:y}=tp(o),S=(E,c)=>i.jsxs("section",{className:`hb-allergenGroup ${c?"safe":"warning"}`,children:[i.jsxs("h3",{children:[i.jsx("span",{"aria-hidden":"true",children:c?"✓":"⚠"})," ",c?`Án ${Co(o.map(k=>rp[k]))} samkvæmt innihaldslýsingu`:`Inniheldur ${Co(o.map(ep),"eða")}`]}),i.jsx("p",{children:Po(E.length)}),i.jsx("ul",{className:"hb-allergenResults",children:E.map(k=>i.jsx("li",{children:i.jsxs("button",{className:"hb-allergenCard",onClick:()=>He.open({k:"vara",slug:k.slug}),children:[i.jsx("span",{className:"hb-allergenPack",style:{background:k.tint},children:i.jsx("img",{src:qr(k.slug,"pack","s"),alt:"",width:"72",height:"80",loading:"lazy"})}),i.jsxs("span",{className:"hb-allergenName",children:[i.jsx("strong",{children:k.name.is}),!c&&i.jsxs("span",{className:"hb-allergenContains",children:["Inniheldur:"," ",Co((k.allergens||[]).filter(F=>o.includes(F)).map($o))]}),i.jsx(Ao,{p:k,selected:o})]})]})},k.slug))}),!E.length&&i.jsx("p",{children:c?"Engin vara fannst án þessara ofnæmisvalda í innihaldslýsingu.":"Engin vara inniheldur valda ofnæmisvalda samkvæmt innihaldslýsingu."})]});return i.jsxs("section",{className:"hb-form hb-ofn",id:"ofnaemi","aria-labelledby":"hb-ofn-t",children:[i.jsx("div",{className:"hb-flipar hb-disp",children:i.jsx("h2",{id:"hb-ofn-t",className:"hb-disp",children:"Ofnæmisvaldar"})}),i.jsx("div",{className:"hb-formP",children:i.jsxs("div",{className:"hb-quiz",children:[i.jsxs("div",{children:[i.jsx("p",{className:"hb-quizQ",id:"hb-ofn-q",children:"Hverju þarftu að forðast?"}),i.jsx("p",{children:"Þú getur valið fleiri en einn ofnæmisvald."}),i.jsx("div",{className:"hb-allergenChoices",role:"group","aria-labelledby":"hb-ofn-q",children:Jr.map(E=>i.jsxs("button",{"aria-pressed":o.includes(E.id),onClick:()=>s(o.includes(E.id)?o.filter(c=>c!==E.id):Jr.filter(c=>o.includes(c.id)||c.id===E.id).map(c=>c.id)),children:[i.jsx(zo,{id:E.id}),E.is,i.jsx("span",{"aria-hidden":"true",children:o.includes(E.id)?"✓":"+"})]},E.id))}),!!o.length&&i.jsx("button",{className:"hb-allergenClear",onClick:()=>s([]),children:"Hreinsa"}),i.jsx("p",{className:"hb-allergenNote",children:hc}),i.jsx("p",{className:"hb-allergenDisclaimer",children:Ta}),i.jsx("button",{className:"hb-allergenClear",onClick:()=>He.open({k:"ofnaemi"}),children:"Sjá allt ofnæmisyfirlitið →"})]}),i.jsx("div",{className:"hb-allergenAnswer",children:o.length?i.jsxs(i.Fragment,{children:[i.jsxs("p",{role:"status",className:"hb-allergenCount",children:[Po(m.length)," án valinna ofnæmisvalda samkvæmt innihaldslýsingu. ",Po(p.length)," með valda ofnæmisvalda."]}),i.jsxs("div",{className:"hb-allergenFlow",children:[S(m,!0),S(p,!1),!!y.length&&i.jsxs("p",{children:["Ofnæmisupplýsingar vantar fyrir"," ",y.map(E=>E.name.is).join(", "),". Hringdu í 565 6500."]})]},o.join(","))]}):i.jsxs("div",{className:"hb-allergenPreview",children:[i.jsx("p",{children:"Veldu ofnæmisvald til að sjá hvaða vörur koma til greina samkvæmt innihaldslýsingu."}),i.jsx("p",{className:"hb-smatt",children:"Fjöldi vara sem innihalda hvern ofnæmisvald"}),i.jsx("ul",{children:Jr.map(E=>i.jsxs("li",{children:[i.jsx(zo,{id:E.id}),i.jsx("span",{children:E.is}),i.jsx("strong",{children:Vr.flatMap(c=>c.items).filter(c=>{var k;return(k=c.allergens)==null?void 0:k.includes(E.id)}).length})]},E.id))})]})})]})})]})}function ap(){const[o,d]=T.useState(""),s=Vr.filter(m=>!o||m.s===o);return i.jsxs(i.Fragment,{children:[i.jsx("p",{className:"hb-allergenDisclaimer",children:Ta}),i.jsx("p",{children:hc}),i.jsxs("label",{className:"hb-allergenFilter",children:["Vörulína",i.jsxs("select",{value:o,onChange:m=>d(m.target.value),children:[i.jsx("option",{value:"",children:"Allar vörulínur"}),Vr.map(m=>i.jsx("option",{value:m.s,children:m.t},m.s))]})]}),i.jsx("p",{children:"● Inniheldur samkvæmt innihaldslýsingu. ○ Ekki nefnt í innihaldslýsingu."}),i.jsx("div",{className:"hb-allergenMatrix",role:"region","aria-label":"Ofnæmisvaldar eftir vörum",tabIndex:0,children:i.jsxs("table",{children:[i.jsx("caption",{className:"hb-orderSr",children:"Ofnæmisvaldar eftir vörulínum og vörum"}),i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{scope:"col",children:"Vara"}),Jr.map(m=>i.jsx("th",{scope:"col",children:m.is},m.id))]})}),s.map(m=>i.jsxs("tbody",{children:[i.jsx("tr",{children:i.jsx("th",{className:"hb-allergenLine",colSpan:Jr.length+1,scope:"rowgroup",children:m.t})}),m.items.map(p=>i.jsxs("tr",{children:[i.jsx("th",{scope:"row",children:i.jsx("button",{onClick:()=>He.open({k:"vara",slug:p.slug}),children:p.name.is})}),Jr.map(y=>{var S,E;return i.jsxs("td",{children:[i.jsx("span",{"aria-hidden":"true",children:(S=p.allergens)!=null&&S.includes(y.id)?"●":"○"}),i.jsx("span",{className:"hb-orderSr",children:(E=p.allergens)!=null&&E.includes(y.id)?"Inniheldur":"Ekki nefnt í innihaldslýsingu"})]},y.id)})]},p.slug))]},m.s))]})}),i.jsx("div",{className:"hb-allergenMobile",children:s.map(m=>i.jsxs("section",{children:[i.jsx("h3",{children:m.t}),i.jsx("ul",{children:m.items.map(p=>i.jsx("li",{children:i.jsxs("button",{onClick:()=>He.open({k:"vara",slug:p.slug}),children:[i.jsx("strong",{children:p.name.is}),i.jsx(Ao,{p})]})},p.slug))})]},m.s))})]})}let Mo=null;const Fa=new Set,lp=o=>(Fa.add(o),()=>{Fa.delete(o)}),He={open(o){Mo=o,Fa.forEach(d=>d())},close(){Mo=null,Fa.forEach(o=>o())}},Vd=()=>Mo,op=()=>T.useSyncExternalStore(lp,Vd,Vd),sp=`
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
`,up={};function dp(){var L;const o=op(),d=T.useId(),s=T.useRef(null),m=T.useRef(null),[p,y]=T.useState(null),S=o!==null,E=T.useRef(null);o&&(E.current=o);const c=o??E.current;T.useEffect(()=>{y(null)},[c&&c.k==="vara"?c.slug:null]);const k=o?JSON.stringify(o):"";T.useEffect(()=>{var Q;const P=s.current;if(!P||!S)return;document.activeElement!==P&&(m.current=document.activeElement);const R=[...P.parentElement.children].filter(K=>K!==P&&!K.classList.contains("hb-popB")&&!K.hasAttribute("inert"));R.forEach(K=>K.setAttribute("inert",""));const I=window.__hbLenis;I==null||I.stop();const B=window.scrollY,G=document.body.style,Z={position:G.position,top:G.top,width:G.width};G.position="fixed",G.top=`-${B}px`,G.width="100%";const te=window.setTimeout(()=>{var K;return(K=document.documentElement.dataset.input==="pointer"?P:P.querySelector(".hb-popX"))==null?void 0:K.focus({preventScroll:!0})},60);(Q=P.querySelector(".hb-popS"))==null||Q.scrollTo(0,0);const ee=K=>{if(K.key==="Escape"){He.close();return}if(K.key!=="Tab")return;const W=[...P.querySelectorAll('button,a[href],input,textarea,select,summary,[tabindex="0"]')].filter(ie=>!ie.hasAttribute("disabled")&&ie.tabIndex>=0&&ie.getClientRects().length&&getComputedStyle(ie).visibility!=="hidden");W.length&&(K.shiftKey&&(document.activeElement===W[0]||document.activeElement===P)?(K.preventDefault(),W[W.length-1].focus()):!K.shiftKey&&document.activeElement===W[W.length-1]&&(K.preventDefault(),W[0].focus()))};return window.addEventListener("keydown",ee),()=>{var K,W;R.forEach(ie=>ie.removeAttribute("inert")),window.clearTimeout(te),window.removeEventListener("keydown",ee),G.position=Z.position,G.top=Z.top,G.width=Z.width,window.scrollTo(0,B),I==null||I.scrollTo(B,{immediate:!0}),I==null||I.start(),(K=m.current)!=null&&K.isConnected?m.current.focus({preventScroll:!0}):(W=document.querySelector("#ofnaemi button"))==null||W.focus({preventScroll:!0})}},[S]),T.useEffect(()=>{var P,R,I;k&&((R=(P=s.current)==null?void 0:P.querySelector(".hb-popS"))==null||R.scrollTo(0,0),(I=s.current)==null||I.focus({preventScroll:!0}))},[k]);let F="",x=null;if((c==null?void 0:c.k)==="vara"){const P=We(c.slug);if(P){const R=Lo[P.slug];F=P.name.is;const I={ing:"Innihaldslýsing","nf-eu":"Næringargildi (ESB)","nf-us":"Næringargildi (US)"},B=[P.labels.ing?"ing":"",P.labels.nfEu?"nf-eu":"",P.labels.nfUs?"nf-us":""].filter(Boolean),G=Z=>Z==="ing"?R==null?void 0:R.ing:Z==="nf-eu"?R==null?void 0:R.nfEu:R==null?void 0:R.nfUs;x=i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:`hb-vMynd hb-mask${R!=null&&R.pack&&(R!=null&&R.open)?"":" einn"}`,style:{"--grunnur":P.tint},children:[R!=null&&R.pack?i.jsx("img",{src:qr(P.slug,"pack","m"),alt:`${P.name.is}, pakkning`,width:R.pack[0],height:R.pack[1]}):(L=R==null?void 0:R.macros)!=null&&L[0]?i.jsx("img",{src:So(P.slug,"m1.webp"),alt:P.name.is,width:R.macros[0][0],height:R.macros[0][1]}):null,R!=null&&R.pack&&(R!=null&&R.open)?i.jsx("img",{src:qr(P.slug,"open","m"),alt:`${P.name.is}, opinn poki`,width:R.open[0],height:R.open[1]}):null]}),i.jsx("div",{className:"hb-mask",children:i.jsx("p",{className:"hb-merki",style:{margin:0},children:"H-Berg"})}),i.jsx("div",{className:"hb-mask",children:i.jsx("h2",{className:"hb-sub",style:{"--i":1},children:P.name.is})}),i.jsx("p",{className:"hb-brod",style:{margin:"1rem 0 0"},children:P.desc.is}),(P.isNew||P.madeToOrder||P.season)&&i.jsxs("ul",{className:"hb-vMerki",style:{marginTop:"1rem"},children:[P.isNew&&i.jsx("li",{className:"nytt",children:"Nýtt"}),P.madeToOrder&&i.jsx("li",{children:"Framleitt eftir pöntun"}),P.season==="staerra"&&i.jsx("li",{children:"Stærri pakkningar"}),P.season==="jol"&&i.jsx("li",{children:"Jól"})]}),P.weight?i.jsxs("dl",{className:"hb-vDl",children:[i.jsx("dt",{children:"Þyngd"}),i.jsx("dd",{children:P.weight})]}):null,i.jsxs("div",{className:"hb-allergenBlock",children:[i.jsx("strong",{children:$d(P)}),i.jsx("h3",{children:"Innihald"}),i.jsx("p",{children:i.jsx(np,{text:P.ingredients||"Innihaldslýsingu vantar. Lestu á umbúðirnar."})}),i.jsx("p",{className:"hb-allergenDisclaimer",children:Ta})]}),i.jsx("h3",{children:"Næringargildi í 100 g"}),!P.nutritionRows.length&&i.jsx("p",{children:"Ekki birt á vefnum."}),i.jsx("table",{className:"hb-vTafla",children:i.jsx("tbody",{children:P.nutritionRows.map((Z,te)=>i.jsxs("tr",{children:[i.jsx("th",{scope:"row",children:Z[0]}),i.jsx("td",{children:Z[1]})]},te))})}),i.jsx("a",{href:P.source,target:"_blank",rel:"noopener noreferrer",children:"Heimild á hberg.is ↗"}),B.length>0&&i.jsx("div",{className:"hb-vMerkingar",role:"group","aria-label":"Merkingar á umbúðum",children:B.map(Z=>i.jsx("button",{type:"button","aria-pressed":p===Z,onClick:()=>y(p===Z?null:Z),children:I[Z]},Z))}),p&&G(p)?i.jsx("div",{className:"hb-vMid",children:i.jsx("img",{src:So(P.slug,`${p}.webp`),width:G(p)[0],height:G(p)[1],alt:`${I[p]}, ${P.name.is}. Mynd af miða á umbúðum.`})}):null,i.jsx("p",{className:"hb-smatt",style:{marginBottom:"1.4rem"},children:Ta}),i.jsx("div",{className:"hb-vAct",children:P.madeToOrder?i.jsx("button",{type:"button",className:"hb-btn hb-casH",onClick:()=>He.open({k:"staerra"}),children:"Panta fyrir félag"}):i.jsx(Do,{slug:P.slug})}),R!=null&&R.macros&&R.macros.length>(P.hasPack?0:1)?i.jsx("div",{className:"hb-vLjos",children:R.macros.map((Z,te)=>!P.hasPack&&te===0?null:i.jsx("img",{src:So(P.slug,`m${te+1}-s.webp`),width:Z[0],height:Z[1],alt:`${P.name.is}, mynd ${te+1}`,loading:"lazy"},te))}):null]})}}else if((c==null?void 0:c.k)==="flokkur"){const P=Vr.find(R=>R.s===c.s);F=(P==null?void 0:P.t)??"",x=P?i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"hb-mask",children:i.jsxs("p",{className:"hb-merki",style:{margin:0},children:[P.items.length," vörur"]})}),i.jsx("div",{className:"hb-mask",children:i.jsx("h2",{className:"hb-disp",style:{"--i":1},children:P.t})}),i.jsx("div",{className:"hb-mask",style:{marginTop:"1rem"},children:i.jsx("p",{className:"hb-brod",style:{"--i":2},children:up[P.s]})}),i.jsx("ul",{className:"hb-fLisi",children:P.items.map(R=>i.jsxs("li",{children:[i.jsx("span",{className:"hb-fM",style:{"--grunnur":R.tint},children:R.hasPack?i.jsx("img",{src:qr(R.slug,"pack","s"),alt:"",width:50,height:56,loading:"lazy"}):i.jsx("b",{"aria-hidden":"true",children:R.name.is[0]})}),i.jsxs("span",{children:[i.jsx("button",{type:"button",className:"hb-nafn",onClick:()=>He.open({k:"vara",slug:R.slug}),children:R.name.is}),i.jsx("small",{children:$d(R)})]}),R.madeToOrder?i.jsx("button",{type:"button",className:"hb-sett",onClick:()=>He.open({k:"staerra"}),children:"Panta fyrir félag"}):i.jsx(Do,{slug:R.slug})]},R.slug))})]}):null}else(c==null?void 0:c.k)==="hvar"?(F="Hvar fæst H-Berg",x=i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"hb-mask",children:i.jsx("p",{className:"hb-merki",style:{margin:0},children:"Hvar fæst H-Berg"})}),i.jsx("div",{className:"hb-mask",children:i.jsx("h2",{className:"hb-disp",style:{"--i":1},children:"Söluaðilar"})}),i.jsx("p",{className:"hb-brod",style:{marginTop:"1rem"},children:"Söluaðilar samkvæmt hberg.is. Ekki er tilgreint hvaða vörur fást á hverjum stað."}),i.jsx("ul",{className:"hb-verslun",children:Im.map(P=>i.jsx("li",{children:i.jsxs("a",{href:P.href,target:"_blank",rel:"noopener noreferrer",children:[i.jsx("b",{children:P.name}),i.jsx("span",{children:P.note.is})]})},P.name))}),i.jsx("p",{className:"hb-smatt",style:{marginBottom:"2rem"},children:"Hafðu samband við verslunina um úrval."})]})):(c==null?void 0:c.k)==="staerra"?(F="Stærri pakkningar",x=i.jsxs(i.Fragment,{children:[i.jsx("h2",{className:"hb-disp",children:"Stærri pakkningar"}),i.jsx("p",{className:"hb-brod",style:{margin:"1.5rem 0"},children:"H-Berg pakkar í stærri einingar fyrir matvælafyrirtæki, matsölustaði og stóreldhús. Spurðu okkur um pakkningar og magn."}),i.jsx(dc,{cfg:Zm})]})):(c==null?void 0:c.k)==="ofnaemi"&&(F="Ofnæmisyfirlit",x=i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"hb-mask",children:i.jsx("p",{className:"hb-merki",style:{margin:0},children:"Allt á einum stað"})}),i.jsx("div",{className:"hb-mask",children:i.jsx("h2",{className:"hb-disp",style:{"--i":1},children:"Ofnæmisyfirlit"})}),i.jsx(ap,{})]}));return i.jsxs(i.Fragment,{children:[i.jsx("div",{className:`hb-popB${S?" opid":""}`,onClick:()=>He.close(),"data-bendill":"Loka","aria-hidden":"true"}),i.jsxs("div",{ref:s,tabIndex:-1,className:`hb-pop${S?" opid":""}`,role:"dialog","aria-modal":"true","aria-labelledby":`${d}-t`,"data-lenis-prevent":"",children:[i.jsxs("div",{className:"hb-popT",children:[i.jsx("span",{id:`${d}-t`,className:"hb-merki",style:{margin:0},children:F}),i.jsx("button",{className:"hb-popX",onClick:()=>He.close(),"aria-label":"Loka",children:i.jsx("svg",{width:"14",height:"14",viewBox:"0 0 14 14","aria-hidden":"true",children:i.jsx("path",{d:"M1 1l12 12M13 1L1 13",stroke:"currentColor",strokeWidth:"1.4"})})})]}),i.jsx("div",{className:"hb-popS",children:x})]})]})}const Ko="hberg-pantanir-v1";function Jd(o){const d=String(o).trim().replace(/^(\d{6})-(\d{4})$/,"$1$2");if(!/^\d{10}$/.test(d)||!/[089]/.test(d[9]))return!1;const s=[...d].map(Number),m=s[0]*10+s[1],p=m>40?m-40:m,y=s[2]*10+s[3],S={8:1800,9:1900,0:2e3}[s[9]]+s[4]*10+s[5],E=new Date(Date.UTC(S,y-1,p));if(p<1||E.getUTCMonth()!==y-1||E.getUTCDate()!==p)return!1;const c=(11-s.slice(0,8).reduce((k,F,x)=>k+F*[3,2,7,6,5,4,3,2][x],0)%11)%11;return c!==10&&c===s[8]}function pi(o){if(!Array.isArray(o))return[];const d=new Set;return o.filter(s=>s&&typeof s.slug=="string"&&Number.isInteger(s.magn)&&s.magn>0&&s.magn<=9999&&typeof s.unit=="string"&&!d.has(s.slug)&&d.add(s.slug)).map(s=>({slug:s.slug,magn:s.magn,unit:s.unit,...typeof s.other=="string"?{other:s.other.slice(0,240)}:{}}))}function pc(o){try{const d=JSON.parse(o.getItem(Ko)||"null");return!d||typeof d.company!="object"||!d.company||!Array.isArray(d.orders)?null:{company:Object.fromEntries(Object.entries(d.company).filter(([,s])=>typeof s=="string")),orders:d.orders.filter(s=>s&&typeof s.date=="string"&&Number.isFinite(Date.parse(s.date))&&Array.isArray(s.lines)).slice(0,5).map(s=>({date:s.date,lines:pi(s.lines)}))}}catch{return null}}function cp(o,d,s,m=new Date().toISOString()){try{const p=pc(o),y={company:d,orders:[{date:m,lines:pi(s)},...(p==null?void 0:p.orders)||[]].slice(0,5)};return o.setItem(Ko,JSON.stringify(y)),y}catch{return null}}function Ro(o){try{return o.removeItem(Ko),!0}catch{return!1}}function qd(o,d){return pi(o==null?void 0:o.lines).filter(s=>d.includes(s.slug)).map(s=>({...s}))}function Wd(o){const d=String(o).replace(/\D/g,"").slice(0,10);return d.length>6?`${d.slice(0,6)}-${d.slice(6)}`:d}function it(o,d,s){return o%10===1&&o%100!==11?d:s}function hp(o){const d=new Map;for(const s of o)d.set(s.unit,(d.get(s.unit)||0)+s.magn);return[`${o.length} ${it(o.length,"vara","vörur")}`,...[...d].sort(([s],[m])=>s.localeCompare(m)).map(([s,m])=>`${m} ${s==="kassar"?it(m,"kassi","kassar"):s==="pokar"?it(m,"poki","pokar"):s==="annad"?"aðrar einingar":s.replace(/^pokar/,it(m,"poki","pokar"))}`)].join(" · ")}function mp(o,d,s=!1){const m=o.indexOf(d);return m<0?null:o[m+(s?-1:1)]||null}function La(o){const d=o.unit==="kassar"?it(o.magn,"kassi","kassar"):o.unit==="pokar"?it(o.magn,"poki","pokar"):o.unit==="annad"?"aðrar einingar":o.unit;return`${o.magn} ${d}${o.unit==="annad"&&o.other?` · ${o.other}`:""}`}function pp(o,d,s,m,p=""){return["Pöntun til H-Berg","",...m.map(y=>`${y.label}: ${o[y.key]||""}`),`Athugasemd um afhendingu: ${o.note||""}`,`Óskir um pöntun: ${p}`,"","Vörur:",...d.map(y=>`${s[y.slug]||y.slug} · ${La(y)}`)].join(`
`)}function fp(o,d=3){const s=new Date(`${o}T12:00:00`),m=[];for(;m.length<d;)s.setDate(s.getDate()+1),s.getDay()!==0&&s.getDay()!==6&&m.push(`${s.getFullYear()}-${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`);return m}const Oe={fast:150,ui:220,panel:320,reveal:480,out:"cubic-bezier(.16,1,.3,1)",emphasis:"cubic-bezier(.22,.8,.24,1)"},gp=`
.hb-root {
  --motion-fast: ${Oe.fast}ms;
  --motion-ui: ${Oe.ui}ms;
  --motion-panel: ${Oe.panel}ms;
  --motion-reveal: ${Oe.reveal}ms;
  --motion-out: ${Oe.out};
  --motion-emphasis: ${Oe.emphasis};
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
`,vp=`
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
`,Oo=o=>["pokar","kassar",...o.bulkWeight?[`pokar af ${o.bulkWeight}`]:[],"annad"],fc=o=>pi(o).filter(d=>{const s=We(d.slug);return s&&Oo(s).includes(d.unit)});let Lr=[];try{Lr=fc(JSON.parse(sessionStorage.getItem("hb-poki")||"[]").map(o=>({...o,unit:o.unit||"kassar"})))}catch{}let Ho=!1,ci={trigger:null,keyboard:!1};const Io=new Set,Pa=()=>{try{sessionStorage.setItem("hb-poki",JSON.stringify(Lr))}catch{}Io.forEach(o=>o())},gc=o=>(Io.add(o),()=>{Io.delete(o)}),Ne={add(o){const d=Lr.find(s=>s.slug===o);this.set(o,((d==null?void 0:d.magn)||0)+1)},set(o,d,s,m){if(!We(o)||!Number.isFinite(d))return;const p=Lr.find(S=>S.slug===o),y={slug:o,magn:Math.min(9999,Math.max(0,Math.floor(d))),unit:s||(p==null?void 0:p.unit)||"kassar",other:m??(p==null?void 0:p.other)??""};Lr=y.magn?p?Lr.map(S=>S.slug===o?y:S):[...Lr,y]:Lr.filter(S=>S.slug!==o),Pa()},replace(o){Lr=fc(o),Pa()},open(o,d){o&&!Ho&&(ci={trigger:(d==null?void 0:d.currentTarget)||document.activeElement,keyboard:d?d.detail===0:document.documentElement.dataset.input==="key"},He.close()),Ho=o,Pa()},clear(){Lr=[],Pa()}},Yd=()=>Lr,Gd=()=>Ho,vc=()=>T.useSyncExternalStore(gc,Yd,Yd),bp=vp;function kp(){const o=vc();return i.jsxs("button",{className:"hb-pokiH",onClick:d=>Ne.open(!0,d),"aria-label":`Pöntunarlisti, ${o.length} vörur`,children:[i.jsx("span",{className:"hb-pokiO",children:"Pöntunarlisti"}),i.jsx("b",{children:o.length})]})}function Do({slug:o}){var m;const[d,s]=T.useState(!1);return T.useEffect(()=>{if(!d)return;const p=window.setTimeout(()=>s(!1),1200);return()=>clearTimeout(p)},[d]),i.jsxs("button",{type:"button",className:`hb-sett${d?" komid":""}`,onClick:()=>{Ne.add(o),s(!0)},"aria-label":`Setja ${(m=We(o))==null?void 0:m.name.is} á pöntunarlistann`,children:[i.jsx("span",{"aria-hidden":"true",children:d?"✓":"+"})," ",d?"Komið á listann":"Á listann"]})}function bc(){return i.jsx("svg",{"aria-hidden":"true",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:i.jsx("path",{d:"M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"})})}function yp(o,d){var s;return[...((s=o.closest(".hb-order"))==null?void 0:s.querySelectorAll("input[data-amount-source]"))||[]].filter(m=>m.dataset.amountSource===d)}function kc({p:o,line:d,source:s}){const[m,p]=T.useState(null),y=(d==null?void 0:d.magn)||0,S=T.useRef(null),E=T.useRef(y);T.useEffect(()=>{var x;E.current!==y&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&((x=S.current)==null||x.animate([{opacity:.45,transform:"translateY(2px)"},{opacity:1,transform:"translateY(0)"}],{duration:Oe.fast,easing:Oe.out})),E.current=y},[y]);const c=(d==null?void 0:d.unit)||"kassar",k=Oo(o),F=c==="pokar"?o.weight?`Neytendapakkning · ${o.weight}`:"Neytendapakkningar":c==="kassar"?o.iKassa?`${o.iKassa} pakkningar í kassa`:"Fjöldi í kassa staðfestur við pöntun":c==="annad"?"Lýstu pakkningu eða samsetningu":`Stærri pakkning · ${o.bulkWeight}`;return i.jsxs("div",{className:"hb-amountUnit",children:[i.jsxs("div",{className:"hb-magn",children:[i.jsx("button",{type:"button","aria-label":`Fækka ${o.name.is}`,disabled:!y,onClick:()=>Ne.set(o.slug,y-1),children:"−"}),i.jsx("input",{ref:S,"aria-label":`Magn ${o.name.is}`,id:`${s}-${o.slug}`,className:"hb-magnN",inputMode:"numeric",enterKeyHint:"next","data-amount-source":s,"data-product":o.slug,onKeyDown:x=>{var R;if(x.key!=="Enter")return;x.preventDefault();const L=[...yp(x.currentTarget,s)],P=mp(L.map(I=>I.dataset.product),o.slug,x.shiftKey);(R=L.find(I=>I.dataset.product===P))==null||R.focus()},pattern:"[0-9]*",value:m??(y||""),placeholder:"0",onChange:x=>{const L=x.target.value.replace(/\D/g,"").slice(0,4);p(L),Ne.set(o.slug,Number(L))},onBlur:()=>p(null)}),i.jsx("button",{type:"button","aria-label":`Fjölga ${o.name.is}`,onClick:()=>Ne.set(o.slug,y+1),children:"+"})]}),i.jsxs("div",{className:"hb-unit",style:{"--unit-count":k.length,"--unit-index":k.indexOf(c)},role:"radiogroup","aria-label":`Eining ${o.name.is}`,onKeyDown:x=>{var I;if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(x.key))return;x.preventDefault();const L=Oo(o),P=L.indexOf((d==null?void 0:d.unit)||"kassar"),R=x.key==="Home"?0:x.key==="End"?L.length-1:(P+(x.key==="ArrowRight"||x.key==="ArrowDown"?1:-1)+L.length)%L.length;Ne.set(o.slug,y||1,L[R]),(I=x.currentTarget.querySelectorAll("button")[R])==null||I.focus()},children:[i.jsx("span",{className:"hb-unitPill","aria-hidden":"true"}),k.map(x=>i.jsx("button",{type:"button",role:"radio",tabIndex:((d==null?void 0:d.unit)||"kassar")===x?0:-1,"aria-checked":((d==null?void 0:d.unit)||"kassar")===x,onClick:()=>Ne.set(o.slug,y||1,x),children:x==="annad"?"Annað":x==="pokar"?"Pokar":x==="kassar"?"Kassar":"Stærri pakkning"},x))]}),i.jsx("small",{className:"hb-unitDetail",children:F}),c==="annad"&&i.jsxs("label",{className:"hb-other",htmlFor:`${s}-other-${o.slug}`,children:["Hvernig viltu fá þessa vöru?",i.jsx("input",{id:`${s}-other-${o.slug}`,maxLength:240,value:(d==null?void 0:d.other)||"",placeholder:"Til dæmis blandað í kassa",onChange:x=>Ne.set(o.slug,y||1,"annad",x.target.value)})]})]})}const Bo=[{key:"company",label:"Fyrirtæki",required:!0,auto:"organization"},{key:"kt",label:"Kennitala",required:!0,inputMode:"numeric"},{key:"contact",label:"Tengiliður",auto:"name"},{key:"phone",label:"Sími",type:"tel",auto:"tel"},{key:"email",label:"Netfang",required:!0,type:"email",auto:"email"},{key:"address",label:"Afhendingarstaður",auto:"street-address"},{key:"date",label:"Óskuð afhending",type:"date"}],To=()=>{const o=new Date;return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`},yc=o=>`${o.name.is}${o.weight&&!o.name.is.toLowerCase().replace(/\s/g,"").includes(o.weight.toLowerCase().replace(/\s/g,""))?` ${o.weight}`:""}`,xp=(o,d,s)=>pp(o,d,Object.fromEntries(Mr.map(m=>[m.slug,yc(m)])),Bo,s);function wp(){const o=vc(),d=Vr.flatMap(j=>j.items).flatMap(j=>o.filter(A=>A.slug===j.slug)),s=T.useSyncExternalStore(gc,Gd,Gd),m=T.useRef(!1);s&&(m.current=!0);const[p,y]=T.useState(!1);T.useEffect(()=>{const j=window;if(j.requestIdleCallback){const he=j.requestIdleCallback(()=>y(!0),{timeout:5e3});return()=>{var be;return(be=j.cancelIdleCallback)==null?void 0:be.call(j,he)}}const A=window.setTimeout(()=>y(!0),3e3);return()=>window.clearTimeout(A)},[]);const S=T.useRef(null),E=T.useRef(null),c=T.useRef(null),k=T.useId(),[F,x]=T.useState(""),[L,P]=T.useState("products"),[R,I]=T.useState(!1),[B,G]=T.useState(!1),[Z,te]=T.useState(!1),[ee,Q]=T.useState(null),[K,W]=T.useState(""),[ie,ae]=T.useState({}),[pe,we]=T.useState({}),[_e,Fe]=T.useState(!1),[je,Le]=T.useState(null),[ze,ye]=T.useState(Vr[0].s),[V,z]=T.useState(""),[U,v]=T.useState({company:{},lines:[],note:""}),[g,_]=T.useState(!1),[H,J]=T.useState(()=>{try{return sessionStorage.getItem("hb-order-note")||""}catch{return""}});T.useEffect(()=>{try{sessionStorage.setItem("hb-order-note",H)}catch{}},[H]);const[se,ce]=T.useState(!1),ue=T.useRef();T.useEffect(()=>()=>clearTimeout(ue.current),[]);const[ve,Ge]=T.useState(!1);T.useEffect(()=>{if(B){Ge(!0);return}const j=setTimeout(()=>Ge(!1),window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:Oe.ui);return()=>clearTimeout(j)},[B]);const ot=T.useRef(!1);ot.current=B,T.useEffect(()=>{var vi,Cn;if(!s)return;let j=null;try{j=pc(localStorage)}catch{}Le(j),Fe(!!j),j&&ae({...j.company,date:"",note:""}),te(!1),G(!1),I(!1);const A=S.current,he=document.documentElement,be=document.body,Hr=he.style.overflow,Wr=be.style.overflow,jr=window.scrollY,gi={position:be.style.position,top:be.style.top,width:be.style.width},Ir=window.__hbLenis;Ir==null||Ir.stop(),he.style.overflow="hidden",be.style.overflow="hidden",be.style.position="fixed",be.style.top=`-${jr}px`,be.style.width="100%";const zt=[...A.parentElement.children].filter(ke=>ke!==A&&!ke.classList.contains("hb-pokiBak")&&!ke.hasAttribute("inert"));zt.forEach(ke=>ke.setAttribute("inert",""));const Dr=()=>{const ke=window.visualViewport;A.style.setProperty("--order-height",`${(ke==null?void 0:ke.height)||window.innerHeight}px`),A.style.setProperty("--order-top",`${(ke==null?void 0:ke.offsetTop)||0}px`)};Dr(),(vi=window.visualViewport)==null||vi.addEventListener("resize",Dr),(Cn=window.visualViewport)==null||Cn.addEventListener("scroll",Dr),window.addEventListener("resize",Dr);const Mt=window.setTimeout(()=>{var ke;return(ke=ci.keyboard?A.querySelector("button"):A)==null?void 0:ke.focus({preventScroll:!0})},30),st=ke=>{var Yt;if(ke.key==="Escape"){ke.preventDefault(),ke.stopImmediatePropagation(),ot.current?(G(!1),(Yt=c.current)==null||Yt.focus()):Ne.open(!1);return}if(ke.key!=="Tab")return;const ut=ot.current?E.current:A,Sr=[...ut.querySelectorAll("button,a[href],input,select,textarea,summary")].filter(Yr=>!Yr.hasAttribute("disabled")&&Yr.tabIndex>=0&&Yr.getClientRects().length&&getComputedStyle(Yr).visibility!=="hidden"&&!Yr.closest("[hidden]")),Br=Sr[0],dt=Sr[Sr.length-1];if(!Br){ke.preventDefault(),ut.focus();return}ke.shiftKey&&(document.activeElement===Br||!Sr.includes(document.activeElement))?(ke.preventDefault(),dt.focus()):!ke.shiftKey&&(document.activeElement===dt||!ut.contains(document.activeElement))&&(ke.preventDefault(),Br.focus())};return window.addEventListener("keydown",st,!0),()=>{var ke,ut,Sr,Br;clearTimeout(Mt),window.removeEventListener("keydown",st,!0),(ke=window.visualViewport)==null||ke.removeEventListener("resize",Dr),(ut=window.visualViewport)==null||ut.removeEventListener("scroll",Dr),window.removeEventListener("resize",Dr),zt.forEach(dt=>dt.removeAttribute("inert")),he.style.overflow=Hr,be.style.overflow=Wr,Object.assign(be.style,gi),window.scrollTo(0,jr),Ir==null||Ir.start(),(Sr=ci.trigger)!=null&&Sr.isConnected&&ci.trigger.getClientRects().length?ci.trigger.focus({preventScroll:!0}):(Br=document.querySelector(".hb-braud"))==null||Br.focus({preventScroll:!0})}},[s]),T.useEffect(()=>{var j;B&&ve&&((j=E.current)==null||j.focus({preventScroll:!0}))},[B,ve]),T.useEffect(()=>{var A;if(!s)return;const j=S.current;(A=j==null?void 0:j.querySelector(".hb-orderMain"))==null||A.scrollTo(0,0)},[L,s]);const fr=j=>{var A;clearTimeout(ue.current),ce(!0),(A=S.current)==null||A.focus({preventScroll:!0}),ue.current=setTimeout(()=>{P(j),ce(!1),I(!1),te(!1)},window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:Oe.fast)},Lt=j=>{Ne.replace(qd(j,Mr.map(A=>A.slug))),fr("products"),W("Fyrri pöntun komin á listann. Þú getur breytt henni."),Q(null)},Sn=j=>{Q(d.filter(A=>A.slug===j).map(A=>({...A}))),Ne.set(j,0),W("Vara fjarlægð af listanum.")},Nn=()=>{let j=!1;try{j=Ro(localStorage)}catch{}Le(null),Fe(!1),ae({}),W(j?"Upplýsingum hefur verið eytt úr þessu tæki.":"Ekki tókst að eyða vistuðum upplýsingum. Athugaðu stillingar vafrans."),Q(null)},fi=j=>{var be,Hr,Wr;j.preventDefault();const A={};if((be=ie.company)!=null&&be.trim()||(A.company="Skrifaðu nafn fyrirtækisins."),Jd(ie.kt||"")||(A.kt="Skrifaðu gilda kennitölu með 10 tölustöfum."),/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(((Hr=ie.email)==null?void 0:Hr.trim())||"")||(A.email="Skrifaðu gilt netfang."),ie.date&&(!/^\d{4}-\d{2}-\d{2}$/.test(ie.date)||ie.date<To())&&(A.date="Veldu dag í dag eða síðar."),!d.length){fr("products"),W("Veldu að minnsta kosti eina vöru.");return}if(we(A),Object.keys(A).length){(Wr=document.getElementById(`${k}-${Object.keys(A)[0]}`))==null||Wr.focus();return}const he=xp(ie,d,H);if(_e){let jr=null;try{jr=cp(localStorage,{...ie,date:"",note:""},d)}catch{}Le(jr),W(jr?"":"Vafrinn leyfir ekki vistun á þessu tæki.")}else{try{Ro(localStorage)}catch{}Le(null)}z(he),v({company:{...ie},lines:d.map(jr=>({...jr})),note:H}),window.location.href=`mailto:pantanir@hberg.is?subject=${encodeURIComponent(`Pöntun · ${ie.company.trim()}`)}&body=${encodeURIComponent(he)}`,fr("receipt")},Wt=j=>j.toLocaleLowerCase("is").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/ð/g,"d").replace(/þ/g,"th").replace(/æ/g,"ae"),En=Vr.map(j=>({...j,items:j.items.filter(A=>Wt(`${A.name.is} ${j.t}`).includes(Wt(F.trim()))&&(!g||d.some(he=>he.slug===A.slug)))})).filter(j=>j.items.length);return!s&&!m.current&&!p?null:i.jsxs(i.Fragment,{children:[i.jsx("div",{className:`hb-pokiBak${s?" on":""}`,onClick:()=>Ne.open(!1),"aria-hidden":"true"}),i.jsxs("div",{ref:j=>{S.current=j,j==null||j.toggleAttribute("inert",!s)},tabIndex:-1,className:`hb-order${s?" on":""}`,role:"dialog","aria-modal":s?!0:void 0,"aria-labelledby":`${k}-title`,"aria-hidden":!s,"data-lenis-prevent":"",children:[i.jsxs("header",{className:"hb-orderHead",children:[i.jsxs("div",{children:[i.jsx("span",{className:"hb-orderEyebrow",children:"H-Berg fyrir fyrirtæki"}),i.jsx("h2",{id:`${k}-title`,children:L==="receipt"?"Pöntunin er tilbúin":"Pöntunarlistinn"})]}),i.jsx("nav",{className:"hb-orderSteps","aria-label":"Skref pöntunar",children:["products","company","receipt"].map((j,A)=>{const he=["products","company","receipt"].indexOf(L);return i.jsxs("button",{disabled:A>=he,"aria-current":j===L?"step":void 0,onClick:()=>fr(j),children:[i.jsx("span",{"aria-hidden":"true",children:A<he?"✓":A+1}),["Vörur","Upplýsingar","Staðfesting"][A]]},j)})}),i.jsx("button",{className:"hb-orderIcon","aria-label":"Loka pöntun",onClick:()=>Ne.open(!1),children:"×"})]}),i.jsxs("div",{className:`hb-orderLayout${L!=="products"?" is-details":""}`,children:[L==="products"&&i.jsx("nav",{className:"hb-orderRail","aria-label":"Vöruflokkar",children:Vr.map(j=>i.jsxs("button",{"aria-current":ze===j.s?"location":void 0,onClick:()=>{x(""),requestAnimationFrame(()=>{var A;return(A=document.getElementById(`${k}-group-${j.s}`))==null?void 0:A.scrollIntoView({block:"start",behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"})})},children:[j.t,d.some(A=>j.items.some(he=>he.slug===A.slug))&&i.jsxs("b",{className:"hb-orderCategoryCount",children:[d.filter(A=>j.items.some(he=>he.slug===A.slug)).length,i.jsx("span",{className:"hb-orderSr",children:" pantaðar vörur"})]})]},j.s))}),i.jsxs("main",{className:`hb-orderMain${se?" step-leaving":""}`,onScroll:j=>{if(L!=="products")return;const A=j.currentTarget,he=A.getBoundingClientRect().top,Hr=[...A.querySelectorAll(".hb-orderGroup")].find(Wr=>Wr.getBoundingClientRect().bottom>he+60);Hr&&ye(Hr.id.split("-group-")[1])},children:[L!=="receipt"&&i.jsxs("div",{className:"hb-orderIntro",children:[i.jsx("p",{children:"Þetta pöntunarform er eingöngu fyrir fyrirtæki: verslanir, veitingastaði, mötuneyti, hótel og aðra endursöluaðila."}),i.jsxs("p",{children:["Einstaklingar kaupa H-Berg í verslunum."," ",i.jsx("button",{className:"hb-orderLink",onClick:()=>{Ne.open(!1),window.setTimeout(()=>He.open({k:"hvar"}),0)},children:"Hvar fæst H-Berg?"})]})]}),L==="products"&&i.jsxs(i.Fragment,{children:[!!(je!=null&&je.orders.length)&&i.jsxs("section",{className:"hb-orderRemember","aria-label":"Fyrri pantanir",children:[i.jsx("h3",{children:"Pantað áður"}),i.jsx("ul",{className:"hb-orderPrevious",children:qd({lines:pi(je.orders.flatMap(j=>j.lines))},Mr.map(j=>j.slug)).map(j=>i.jsxs("li",{children:[i.jsxs("span",{children:[i.jsx("strong",{children:We(j.slug).name.is}),i.jsx("small",{children:La(j)})]}),i.jsx("button",{className:"hb-orderLink",onClick:()=>{Ne.set(j.slug,j.magn,j.unit,j.other),W("Vara komin á listann eins og síðast.")},children:"Sama og síðast"})]},j.slug))}),i.jsx("button",{className:"hb-hnappur",onClick:()=>Lt(je.orders[0]),children:"Panta það sama aftur"}),i.jsx("ul",{children:je.orders.map((j,A)=>i.jsxs("li",{children:[i.jsxs("span",{children:[new Intl.DateTimeFormat("is-IS",{day:"numeric",month:"short"}).format(new Date(j.date))," ","· ",j.lines.length," ",it(j.lines.length,"vara","vörur")]}),i.jsxs("button",{className:"hb-orderLink",onClick:()=>Lt(j),children:["Nota aftur",i.jsxs("span",{className:"hb-orderSr",children:[" ","pöntun frá ",j.date.slice(0,10)]})]})]},`${j.date}-${A}`))}),i.jsx("button",{className:"hb-orderLink",onClick:Nn,children:"Gleyma mér"})]}),i.jsxs("div",{className:"hb-orderSearch",children:[i.jsx("label",{htmlFor:`${k}-search`,children:"Leita að vöru"}),i.jsxs("div",{className:"hb-orderSearchBox",children:[i.jsx("input",{id:`${k}-search`,type:"search",value:F,onChange:j=>x(j.target.value),placeholder:"Nafn vöru"}),!!F&&i.jsx("button",{className:"hb-orderIcon","aria-label":"Hreinsa leit",onClick:()=>{var j;x(""),(j=document.getElementById(`${k}-search`))==null||j.focus()},children:"×"})]}),i.jsxs("button",{className:"hb-orderFilter","aria-pressed":g,onClick:()=>_(j=>!j),children:[i.jsx("span",{"aria-hidden":"true",children:g?"✓":"+"})," ","Aðeins í pöntun"]}),i.jsxs("button",{ref:c,className:"hb-orderLink","aria-haspopup":"dialog","aria-expanded":B,"aria-controls":`${k}-help`,onClick:()=>G(!0),children:["Hvernig skrifa ég magnið? ",i.jsx("span",{"aria-hidden":"true",children:"ⓘ"})]})]}),!En.length&&i.jsxs("div",{className:"hb-orderEmpty",role:"status",children:[i.jsx("h3",{children:"Engin vara fannst"}),i.jsx("p",{children:"Prófaðu annað orð eða skoðaðu allar vörurnar."}),i.jsx("button",{className:"hb-orderLink",onClick:()=>{x(""),_(!1)},children:"Sýna allar vörur"})]}),En.map(j=>i.jsxs("section",{id:`${k}-group-${j.s}`,className:"hb-orderGroup",children:[i.jsx("h3",{children:j.t}),i.jsx("ul",{children:j.items.map(A=>{const he=d.find(be=>be.slug===A.slug);return i.jsxs("li",{className:`hb-orderRow${he?" has-order":""}`,style:{"--row-tint":A.tint},children:[i.jsx("img",{src:qr(A.slug,"pack","s"),alt:"",width:72,height:80,style:{background:A.tint},loading:"lazy"}),i.jsxs("div",{className:"hb-orderName",children:[i.jsx("strong",{children:A.name.is}),(A.weight||A.iKassa)&&i.jsxs("small",{children:[A.weight,A.iKassa?` · ${A.iKassa} pokar í kassa`:""]}),i.jsx(Ao,{p:A}),i.jsx("span",{className:"hb-orderTick","aria-label":he?"Á pöntunarlista":void 0,children:he&&i.jsxs("span",{children:["✓"," ",i.jsx("span",{className:"hb-orderSr",children:"Á listanum"})]},he.slug)})]}),i.jsx(kc,{p:A,line:he,source:`${k}-catalog`})]},A.slug)})})]},j.s))]}),L==="company"&&i.jsxs("form",{id:`${k}-form`,className:"hb-orderForm",noValidate:!0,onSubmit:fi,children:[i.jsx("button",{type:"button",className:"hb-orderLink",onClick:()=>fr("products"),children:"← Aftur í vörur"}),i.jsx("h3",{children:"Upplýsingar um fyrirtæki"}),i.jsx("p",{children:"Reitir merktir * eru nauðsynlegir."}),i.jsxs("div",{className:"hb-orderFields",children:[Bo.map(j=>i.jsxs("label",{htmlFor:`${k}-${j.key}`,children:[j.label,j.required?" *":"",i.jsx("input",{id:`${k}-${j.key}`,name:j.key,type:j.type||"text",autoComplete:j.auto,inputMode:j.inputMode,required:j.required,min:j.type==="date"?To():void 0,value:j.key==="kt"?Wd(ie.kt||""):ie[j.key]||"",maxLength:j.key==="kt"?11:void 0,"aria-invalid":!!pe[j.key],"aria-describedby":pe[j.key]?`${k}-${j.key}-error`:void 0,onChange:A=>{ae(he=>({...he,[j.key]:j.key==="kt"?Wd(A.target.value):A.target.value})),we(he=>{const be={...he};return delete be[j.key],be})}}),j.key==="date"&&i.jsx("span",{className:"hb-dateChips",children:fp(To()).map(A=>i.jsx("button",{type:"button","aria-pressed":ie.date===A,onClick:()=>{ae(he=>({...he,date:A})),we(he=>{const be={...he};return delete be.date,be})},children:new Intl.DateTimeFormat("is-IS",{weekday:"short",day:"numeric",month:"short"}).format(new Date(`${A}T12:00:00`))},A))}),j.key==="kt"&&Jd(ie.kt||"")&&i.jsx("span",{className:"hb-orderValid",children:"✓ Gild kennitala"}),pe[j.key]&&i.jsx("span",{className:"hb-orderError",id:`${k}-${j.key}-error`,role:"alert",children:pe[j.key]})]},j.key)),i.jsxs("label",{className:"hb-orderWide",htmlFor:`${k}-note`,children:["Athugasemd um afhendingu",i.jsx("textarea",{id:`${k}-note`,rows:3,placeholder:"Til dæmis inngangur eða tengiliður við móttöku",value:ie.note||"",onChange:j=>ae(A=>({...A,note:j.target.value}))})]})]}),i.jsxs("label",{className:"hb-orderCheck",children:[i.jsx("input",{type:"checkbox",checked:_e,onChange:j=>{if(Fe(j.target.checked),!j.target.checked){try{Ro(localStorage)}catch{}Le(null)}}}),"Muna eftir mér á þessu tæki"]}),i.jsx("p",{className:"hb-smatt",children:"Upplýsingar um fyrirtækið og síðustu fimm pantanir eru vistaðar í þessum vafra ef þú velur að muna eftir þér."}),je&&i.jsx("button",{type:"button",className:"hb-orderLink",onClick:Nn,children:"Gleyma mér"}),i.jsx("p",{children:"Pöntunin opnast í tölvupóstforritinu þínu. Þar sendir þú hana til pantanir@hberg.is."}),i.jsx("button",{className:"hb-hnappur",type:"submit",children:"Opna pöntun í tölvupósti"})]}),L==="receipt"&&i.jsxs("section",{className:"hb-orderReceipt",children:[i.jsx("span",{"aria-hidden":"true",children:"✓"}),i.jsx("h3",{children:"Takk fyrir pöntunina"}),i.jsx("p",{children:"Pöntunin er tilbúin í tölvupóstforritinu þínu. Mundu að senda póstinn. H-Berg staðfestir magn, pakkningar og afhendingu þegar pöntunin berst."}),i.jsx("p",{children:"Ef tölvupóstforritið opnaðist ekki geturðu opnað póstinn aftur eða afritað textann hér fyrir neðan."}),i.jsx("a",{className:"hb-hnappur",href:`mailto:pantanir@hberg.is?subject=${encodeURIComponent("Pöntun til H-Berg")}&body=${encodeURIComponent(V)}`,children:"Opna tölvupóst aftur"}),i.jsxs("div",{className:"hb-orderReceiptActions",children:[i.jsx("button",{className:"hb-orderLink",onClick:()=>window.print(),children:"Prenta"}),i.jsx("button",{className:"hb-orderLink",onClick:async()=>{try{await navigator.clipboard.writeText(V),W("Pöntun afrituð.")}catch{W("Opnaðu texta pöntunar hér fyrir neðan til að afrita.")}},children:"Afrita pöntun"})]}),i.jsxs("div",{className:"hb-orderReceiptSlip",children:[i.jsx("h4",{children:"Pöntun til H-Berg"}),i.jsxs("dl",{children:[[...Bo,{key:"note",label:"Athugasemd um afhendingu"}].map(j=>i.jsxs("div",{children:[i.jsx("dt",{children:j.label}),i.jsx("dd",{children:U.company[j.key]||"Ekki tilgreint"})]},j.key)),U.note&&i.jsxs("div",{children:[i.jsx("dt",{children:"Óskir um pöntun"}),i.jsx("dd",{children:U.note})]})]}),i.jsx("ul",{children:U.lines.map(j=>i.jsxs("li",{children:[i.jsx("strong",{children:yc(We(j.slug))}),i.jsx("span",{children:La(j)})]},j.slug))})]}),i.jsxs("details",{children:[i.jsx("summary",{children:"Texti pöntunar til að afrita"}),i.jsx("pre",{children:V})]}),i.jsx("button",{className:"hb-orderLink",onClick:()=>fr("company"),children:"← Aftur í upplýsingar"}),i.jsx("button",{className:"hb-orderLink",onClick:()=>{Ne.clear(),z(""),J(""),fr("products")},children:"Ný pöntun"})]})]},L),L!=="receipt"&&i.jsxs("aside",{className:`hb-orderSlip${R?" expanded":""}`,"aria-label":"Pöntunin þín",children:[i.jsxs("button",{className:"hb-orderBar","aria-expanded":R,"aria-controls":`${k}-slip`,onClick:()=>I(j=>!j),children:["Pöntun · ",d.length," ",it(d.length,"vara","vörur")," ",i.jsx("span",{"aria-hidden":"true",children:R?"⌄":"⌃"})]}),i.jsx("div",{className:"hb-orderSlipBody",children:i.jsxs("div",{id:`${k}-slip`,className:"hb-orderSlipInner",children:[i.jsxs("div",{className:"hb-orderSlipTitle",children:[i.jsx("h3",{children:"Pöntunin þín"}),i.jsx("button",{className:"hb-orderIcon",disabled:!d.length,"aria-label":"Hreinsa pöntun",title:"Hreinsa pöntun",onClick:()=>te(!0),children:i.jsx(bc,{})})]}),Z&&i.jsxs("div",{className:"hb-orderConfirm",children:[i.jsx("p",{children:"Hreinsa alla pöntunina?"}),i.jsx("button",{className:"hb-orderLink",onClick:()=>{Q(d.map(j=>({...j}))),Ne.clear(),te(!1),W("Pöntun hreinsuð.")},children:"Hreinsa pöntun"}),i.jsx("button",{className:"hb-orderLink",onClick:()=>te(!1),children:"Hætta við"})]}),!d.length&&i.jsx("p",{children:"Listinn er tómur. Skrifaðu magn við vörurnar sem þú vilt panta."}),i.jsx("div",{className:"hb-orderSummaryGroups",children:Vr.map(j=>{const A=d.filter(he=>j.items.some(be=>be.slug===he.slug));return i.jsxs("section",{children:[i.jsx("h4",{children:j.t}),i.jsx(jp,{lines:A,source:`${k}-slip`,remove:Sn})]},j.s)})}),i.jsx("p",{className:"hb-orderTotals",children:hp(d)}),L==="products"&&i.jsxs("label",{className:"hb-orderNote",htmlFor:`${k}-order-note`,children:["Eitthvað sérstakt við pöntunina?",i.jsx("textarea",{id:`${k}-order-note`,rows:3,maxLength:2e3,value:H,placeholder:"Til dæmis hafið samband ef vara er ekki til",onChange:j=>J(j.target.value)})]}),L==="company"&&H&&i.jsxs("p",{className:"hb-orderNotePreview",children:[i.jsx("strong",{children:"Óskir um pöntun"}),H]}),i.jsxs("div",{className:"hb-orderNotice",role:"status",children:[K,ee&&i.jsx("button",{className:"hb-orderLink",onClick:()=>{Ne.replace([...d,...ee.filter(j=>!d.some(A=>A.slug===j.slug))]),Q(null),W("Pöntun endurheimt.")},children:"Afturkalla"})]}),i.jsx("button",{className:"hb-hnappur",disabled:!d.length,onClick:()=>fr(L==="company"?"products":"company"),children:L==="company"?"Breyta vörum":"Áfram í upplýsingar"}),!d.length&&i.jsx("p",{className:"hb-smatt",children:"Veldu vörur til að halda áfram."})]})})]})]}),i.jsxs("footer",{className:"hb-orderFooter",children:[L!=="receipt"&&i.jsxs("button",{type:"button",className:"hb-orderFootCount","aria-expanded":R,"aria-controls":`${k}-slip`,onClick:()=>I(j=>!j),children:["Pöntun · ",d.length," ",it(d.length,"vara","vörur")," ",i.jsx("span",{"aria-hidden":"true",children:R?"⌄":"⌃"})]}),i.jsx("span",{className:"hb-orderFootHint",children:L==="products"?"Veldu magn og pakkningu":L==="company"?"H-Berg staðfestir pöntunina þegar hún berst":"Mundu að senda tölvupóstinn"}),i.jsx("button",{className:"hb-orderLink hb-orderFootClose",onClick:()=>Ne.open(!1),children:"Loka"}),L==="products"&&i.jsx("button",{className:"hb-hnappur",disabled:!d.length,onClick:()=>fr("company"),children:"Áfram"})]}),L==="receipt"&&K&&i.jsx("p",{role:"status",children:K}),ve&&i.jsx("div",{"aria-hidden":!B,ref:j=>j==null?void 0:j.toggleAttribute("inert",!B),className:`hb-orderHelpBack${B?" on":""}`,onClick:j=>{var A;j.target===j.currentTarget&&(G(!1),(A=c.current)==null||A.focus())},children:i.jsxs("div",{id:`${k}-help`,className:"hb-orderHelp",role:"dialog","aria-modal":"true","aria-labelledby":`${k}-help-title`,ref:E,tabIndex:-1,children:[i.jsx("button",{className:"hb-orderIcon","aria-label":"Loka magnhjálp",onClick:()=>{var j;G(!1),(j=c.current)==null||j.focus()},children:"×"}),i.jsx("h3",{id:`${k}-help-title`,children:"Hvernig skrifa ég magnið?"}),i.jsx("p",{children:"Skrifaðu fjöldann í reitinn og veldu einingu við hliðina."}),i.jsxs("ul",{children:[i.jsx("li",{children:"Pokar: fjöldi neytendapakkninga, þyngd birtist þegar hún er þekkt."}),i.jsx("li",{children:"Kassar: fjöldi heilla kassa, fjöldi í kassa staðfestur við pöntun."}),i.jsx("li",{children:"Stærri pakkning: aðeins í boði þegar stærð er staðfest."}),i.jsx("li",{children:"Annað: skrifaðu hvernig þú vilt fá vöruna í textareitinn."})]}),i.jsx("p",{children:"Pakkningar eru mismunandi eftir vörum. Þyngd birtist þegar hún er þekkt. H-Berg staðfestir pakkningar og fjölda poka í kassa þegar pöntunin berst."})]})})]})]})}function jp({lines:o,source:d,remove:s}){const[m,p]=T.useState(o),y=JSON.stringify(o);return T.useEffect(()=>{p(E=>[...o,...E.filter(c=>!o.some(k=>k.slug===c.slug))]);const S=setTimeout(()=>p(o),window.matchMedia("(prefers-reduced-motion: reduce)").matches?0:Oe.ui);return()=>clearTimeout(S)},[y]),i.jsx("ul",{className:"hb-orderLines",children:m.map(S=>{const E=We(S.slug),c=!o.some(k=>k.slug===S.slug);return i.jsx("li",{className:`hb-summaryPresence${c?" exiting":""}`,ref:k=>k==null?void 0:k.toggleAttribute("inert",c),"aria-hidden":c||void 0,children:i.jsx("div",{className:"hb-summaryClip",children:i.jsxs("div",{className:"hb-summaryRow",children:[i.jsx("img",{src:qr(E.slug,"pack","s"),alt:"",width:40,height:48,style:{background:E.tint}}),i.jsxs("div",{children:[i.jsx("strong",{children:E.name.is}),i.jsx("small",{children:La(S)})]}),i.jsx("button",{className:"hb-orderIcon","aria-label":`Fjarlægja ${E.name.is}`,onClick:()=>s(S.slug),children:i.jsx(bc,{})}),i.jsx(kc,{p:E,line:S,source:d})]})})},S.slug)})})}const Sp={pappirHreint:"#FAF5EA"},Or=()=>{var o;return typeof window<"u"&&((o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)").matches)===!0},za=()=>{var o;return typeof window<"u"&&((o=window.matchMedia)==null?void 0:o.call(window,"(hover: hover) and (pointer: fine)").matches)===!0},Ma=()=>typeof window<"u"&&window.innerWidth<=991,xc=()=>typeof window<"u"&&window.innerWidth<=479,Tt=o=>`./hberg/fonts/${o}`,Qd=[["--c-bg","#FAF5EA"],["--c-el","#F1E8D6"],["--c-el2","#E8DABC"],["--c-el3","#DBC8A0"],["--c-ink","#172D4D"],["--c-ink-med","rgba(23,45,77,.6)"],["--c-ink-max","rgba(23,45,77,.4)"],["--c-btn","#172D4D"],["--c-btn-t","#FAF5EA"],["--c-btn2","#FFFDF8"],["--c-btn2-t","#172D4D"],["--c-form","#FFFDF8"],["--c-rautt","#204A8E"],["--c-lina","rgba(23,45,77,.14)"]],_o=typeof window<"u"&&new URLSearchParams(window.location.search).get("letur")==="gamalt";if(typeof document<"u"&&!_o)for(const o of["YoungSerif-latin","InstrumentSans-latin"]){const d=Tt(`ys/${o}.woff2`);if(!document.head.querySelector(`link[data-hb-font="${o}"]`)){const s=document.createElement("link");s.rel="preload",s.as="font",s.type="font/woff2",s.crossOrigin="anonymous",s.href=d,s.dataset.hbFont=o,document.head.appendChild(s)}}const Np=`
/* Young Serif has one weight: the 100 to 900 range stops faux bold on 600 to 800 headings. */
@font-face{font-family:'HB Young';src:url('${Tt("ys/YoungSerif-latin.woff2")}') format('woff2');font-weight:100 900;font-style:normal;font-display:swap;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'HB Young';src:url('${Tt("ys/YoungSerif-latin-ext.woff2")}') format('woff2');font-weight:100 900;font-style:normal;font-display:swap;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,U+2020,U+20A0-20AB,U+20AD-20C4,U+2113}
@font-face{font-family:'HB Instrument';src:url('${Tt("ys/InstrumentSans-latin.woff2")}') format('woff2');font-weight:400 700;font-style:normal;font-display:swap;unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'HB Instrument';src:url('${Tt("ys/InstrumentSans-latin-ext.woff2")}') format('woff2');font-weight:400 700;font-style:normal;font-display:swap;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,U+2020,U+20A0-20AB,U+20AD-20C4,U+2113}

@font-face{font-family:'HB Bricolage';src:url('./hberg/fonts/bricolage-latin.woff2') format('woff2');
  font-weight:200 800;font-stretch:75% 100%;font-style:normal;font-display:swap;
  unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}
@font-face{font-family:'HB Bricolage';src:url('./hberg/fonts/bricolage-latinext.woff2') format('woff2');
  font-weight:200 800;font-style:normal;font-display:swap;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,U+2020,U+20A0-20AB,U+20AD-20C4,U+2113}
@font-face{font-family:'HB General';src:url('${Tt("GeneralSans-Regular.woff2")}') format('woff2');
  font-weight:400;font-style:normal;font-display:swap}
@font-face{font-family:'HB General';src:url('${Tt("GeneralSans-Medium.woff2")}') format('woff2');
  font-weight:500;font-style:normal;font-display:swap}
@font-face{font-family:'HB General';src:url('${Tt("GeneralSans-Semibold.woff2")}') format('woff2');
  font-weight:600;font-style:normal;font-display:swap}

${Qd.map(([o,d])=>`@property ${o}{syntax:'<color>';inherits:true;initial-value:${d}}`).join(`
`)}


.hb-root{
  ${Qd.map(([o,d])=>`${o}:${d};`).join(" ")}
  --c-gull:#BEA458; --c-hdr:#FFFDF8; --c-hdr-t:#172D4D;
  --c-flotur:var(--c-el);
  --ease:cubic-bezier(.17,.17,0,1);
  --ease-popup:cubic-bezier(.6,0,0,1);
  --ease-cas:cubic-bezier(.2,0,.1,1);
  --f-disp:${_o?"'HB Bricolage',system-ui,sans-serif":"'HB Young',Georgia,serif"};
  
  --gut:clamp(0.5rem,2.0833vw,2.5rem);
  --gap:clamp(3rem,22.2222vh,9rem);
  --band:var(--gap);
  --col:clamp(0.5rem,1.0417vw,2.5rem);
  background:var(--c-bg); color:var(--c-ink);
  font-family:${_o?"'HB General'":"'HB Instrument'"},system-ui,sans-serif;font-synthesis:none;
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


.hb-disp{font-family:var(--f-disp);font-weight:800;overflow-wrap:anywhere;letter-spacing:-.01em;line-height:1.04;
  font-size:clamp(1.5rem,4.17vw,5.25rem);margin:0;text-wrap:balance}
@media (max-width:991px){.hb-disp{font-size:clamp(1.5rem,6.25vw,5.25rem);line-height:1.04}}
@media (max-width:479px){.hb-disp{font-size:clamp(2.25rem,min(12vw,3.2rem),6rem);line-height:1.06}}
.hb-sub{font-family:var(--f-disp);font-weight:700;overflow-wrap:anywhere;letter-spacing:-.01em;line-height:1.05;
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
`;function Ep(o=12e3){T.useEffect(()=>{const d=window.setTimeout(()=>{var s;(s=document.querySelector(".hb-root"))==null||s.classList.add("hb-allt")},o);return()=>window.clearTimeout(d)},[o])}function Cp(o="0px 0px -12% 0px",d=!1){const s=T.useRef(null);return T.useEffect(()=>{const m=s.current;if(!m)return;if(Or()){m.classList.add("on");return}if(d&&xc()){const y=[...m.children],S=new IntersectionObserver(E=>{E.forEach(c=>{c.isIntersecting&&(c.target.classList.add("on"),S.unobserve(c.target))})},{rootMargin:o,threshold:0});return y.forEach(E=>S.observe(E)),()=>S.disconnect()}const p=new IntersectionObserver(([y])=>{y.isIntersecting&&(m.classList.add("on"),p.disconnect())},{rootMargin:o,threshold:0});return p.observe(m),()=>p.disconnect()},[o,d]),s}function Ye({as:o="div",className:d="",children:s,style:m,hver:p=!1,margin:y,id:S}){const E=Cp(y,p);return i.jsx(o,{ref:E,id:S,className:`${d}${p?" hb-hver":""}`,style:m,children:s})}const Xd=()=>!za(),Ft=()=>window.__hbLenis;function Pp(){T.useEffect(()=>{if(Or()||Xd())return;let o=!0,d=0,s=null;return sc(async()=>{const{default:m}=await import("./lenis-niKyKZQP.js");return{default:m}},[],import.meta.url).then(({default:m})=>{if(!o||(s=Xd()?null:new m({duration:3,smoothWheel:!0,gestureOrientation:"vertical",allowNestedScroll:!0}),!s))return;s.scrollTo(0,{immediate:!0}),window.__hbLenis=s,document.querySelector(".hb-root.hb-hled")&&s.stop();let p=0;const y=F=>{d=0,s&&(s.raf(F),p=s.isScrolling?0:p+1,p<20&&!d&&(d=requestAnimationFrame(y)))},S=()=>{p=0,!d&&o&&(d=requestAnimationFrame(y))},E=s,c=E.scrollTo.bind(E),k=E.start.bind(E);E.scrollTo=(F,x)=>{c(F,x),S()},E.start=()=>{k(),S()},E.on("virtual-scroll",S),E.on("scroll",S),S()}),()=>{o=!1,cancelAnimationFrame(d),s==null||s.destroy(),delete window.__hbLenis}},[])}const zr=o=>({"--d":`${(o*.12).toFixed(2)}s`});function jn({text:o,className:d="",tag:s="h2",hold:m=0,id:p}){const y=o.split(" | ");return i.jsx(s,{className:d,id:p,children:y.map((S,E)=>i.jsx("span",{className:"hb-mask",children:i.jsx("span",{className:"hb-up hb-lina",style:{"--d":`${(m+E*.12).toFixed(2)}s`},children:S})},S+E))})}function wc({children:o}){return i.jsx("p",{className:"hb-merki",children:i.jsx("span",{className:"hb-mask",children:i.jsx("span",{className:"hb-up",children:o})})})}function lt({t:o}){const d=[...o],s=Math.max(1,d.length),p=.15*(s>=5?1:Math.min(.8,Math.max(.45,s/5)))/s,y=d.map((S,E)=>i.jsx("span",{style:{"--i":E},children:S===" "?" ":S},E));return i.jsxs("span",{className:"hb-cas",style:{"--cd":"var(--motion-reveal)","--cs":`${p.toFixed(4)}s`},children:[i.jsx("span",{className:"hb-casL",children:y}),i.jsx("span",{className:"hb-casL","aria-hidden":"true",children:y})]})}function Rp(){const o=T.useRef(null),[d,s]=T.useState(""),[m,p]=T.useState(!1),[y,S]=T.useState(!1);return T.useEffect(()=>{if(!za()||Or())return;const E=o.current;if(!E)return;let c=-200,k=-200,F=-200,x=-200,L=0,P=0,R=!1;const I=()=>{F+=(c-F)*.18,x+=(k-x)*.18,E.style.transform=`translate3d(${F.toFixed(1)}px,${x.toFixed(1)}px,0)`,L=Math.abs(c-F)>.3||Math.abs(k-x)>.3?requestAnimationFrame(I):0},B=()=>{var ie,ae;if(!R)return;const W=(ae=(ie=document.elementFromPoint(c,k))==null?void 0:ie.closest)==null?void 0:ae.call(ie,"[data-bendill]");s((W==null?void 0:W.dataset.bendill)??"")},G=W=>{var ae,pe;c=W.clientX,k=W.clientY,R||(F=c,x=k,R=!0),S(!0),L||(L=requestAnimationFrame(I));const ie=(pe=(ae=W.target)==null?void 0:ae.closest)==null?void 0:pe.call(ae,"[data-bendill]");s((ie==null?void 0:ie.dataset.bendill)??"")},Z=()=>{requestAnimationFrame(()=>requestAnimationFrame(B)),window.clearTimeout(P),P=window.setTimeout(B,120)},te=()=>{p(!0),window.setTimeout(()=>p(!1),200)},ee=W=>{W.relatedTarget||(S(!1),s(""))},Q=document.querySelector(".hb-root"),K=Q?new MutationObserver(()=>{Q.classList.contains("hb-laest")||B()}):null;return Q&&K&&K.observe(Q,{attributes:!0,attributeFilter:["class"]}),document.addEventListener("mouseout",ee),window.addEventListener("pointermove",G,{passive:!0}),window.addEventListener("scroll",Z,{passive:!0}),window.addEventListener("pointerdown",te,{passive:!0}),()=>{window.removeEventListener("pointermove",G),window.removeEventListener("scroll",Z),window.removeEventListener("pointerdown",te),cancelAnimationFrame(L),window.clearTimeout(P),document.removeEventListener("mouseout",ee),K==null||K.disconnect()}},[]),i.jsxs("div",{className:`hb-bendill${d?" stor":""}${m?" yta":""}${y?" syn":""}`,ref:o,"aria-hidden":"true",children:[i.jsx("i",{}),i.jsx("b",{children:d})]})}const Tp=()=>i.jsx("svg",{width:"9",height:"6",viewBox:"0 0 9 6","aria-hidden":"true",children:i.jsx("path",{d:"M1 1l3.5 3.5L8 1",fill:"none",stroke:"currentColor",strokeWidth:"1.3"})}),Zd=[{t:"Vörur",id:"vorur",rows:[{h:"#linur",t:"Allar vörulínur",d:"Hnetur, ávextir, fræ og hnetusmjör"},{h:"#vorur",t:"Hnetur og ávextir",d:"Tegundir og innihald"},{h:"#ofnaemi",t:"Ofnæmisvaldar",d:"Skoðaðu innihaldið"},{h:"#hvar",t:"Hvar fæst H-Berg",d:"Söluaðilar H-Berg",fn:()=>He.open({k:"hvar"})}]},{t:"H-Berg",id:"hberg",rows:[{h:"#poki",t:"Pöntun fyrir verslanir",d:"Pöntunarlisti fyrir fyrirtæki",poki:!0},{h:"#staerra",t:"Stærri pakkningar",d:"Fyrir matvælafyrirtæki og stóreldhús",fn:()=>He.open({k:"staerra"})},{h:"#um",t:"Um okkur",d:"Fjölskyldufyrirtæki frá 2007"},{h:"#saga",t:"Gamalt og nýtt"},{h:"#spurt",t:"Spurt og svarað"}]}],xn={h:"#erindi",t:"Hafa samband"};function at(o){const d=document.querySelector(o);if(!d)return;const s=document.querySelector(".hb-haus"),m=Ma()?-(((s==null?void 0:s.getBoundingClientRect().height)??60)+12):-24,p=Ft();p?p.scrollTo(d,{offset:m}):window.scrollTo({top:d.getBoundingClientRect().top+window.scrollY+m,behavior:Or()?"auto":"smooth"}),history.replaceState(null,"",o)}function Fp(){const[o,d]=T.useState(null),s=T.useRef(null),m=T.useRef(0),p=o==="valmynd";T.useEffect(()=>{if(!o)return;const c=F=>{var L,P;if(F.key!=="Escape")return;const x=o;d(null),(P=(L=s.current)==null?void 0:L.querySelector(`[aria-controls="hb-fell-${x}"],.hb-braud`))==null||P.focus()},k=F=>{var x;(x=s.current)!=null&&x.contains(F.target)||d(null)};return window.addEventListener("keydown",c),window.addEventListener("pointerdown",k),()=>{window.removeEventListener("keydown",c),window.removeEventListener("pointerdown",k)}},[o]),T.useEffect(()=>{const c=()=>{var F,x;const k=(F=s.current)==null?void 0:F.getBoundingClientRect().height;k&&((x=document.querySelector(".hb-root"))==null||x.style.setProperty("--haus-h",`${Math.round(k)}px`))};return c(),window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]);const y=(c,k)=>{c.preventDefault();const F=Ma();if(d(null),k.poki){const x={detail:c.detail,currentTarget:c.currentTarget};window.setTimeout(()=>Ne.open(!0,x),F?400:0);return}if(k.fn){window.setTimeout(k.fn,F?400:0);return}window.setTimeout(()=>at(k.h),F?400:0)},S=c=>{za()&&(window.clearTimeout(m.current),d(c))},E=()=>{za()&&(window.clearTimeout(m.current),m.current=window.setTimeout(()=>d(c=>c==="valmynd"?c:null),180))};return i.jsxs("header",{ref:s,className:`hb-haus${p?" opin":""}`,children:[i.jsx("a",{className:"hb-merkid",href:"#top","aria-label":"H-Berg, á forsíðu",onClick:c=>{c.preventDefault(),d(null);const k=Ft();k?k.scrollTo(0):window.scrollTo({top:0,behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})},children:i.jsx("img",{src:`./hberg/brand/logo.svg${pr}`,alt:"H-Berg",width:460,height:212,decoding:"async"})}),i.jsxs("div",{className:"hb-hausH",children:[i.jsxs("nav",{className:"hb-nav","aria-label":"Aðalvalmynd",children:[Zd.map(c=>i.jsxs("div",{className:"hb-navH",onPointerEnter:()=>S(c.id),onPointerLeave:E,children:[i.jsxs("button",{className:"hb-navL","aria-expanded":o===c.id,"aria-controls":`hb-fell-${c.id}`,onClick:k=>{d(o===c.id?null:c.id);const F=k.detail===0;window.setTimeout(()=>{var L;const x=document.getElementById(`hb-fell-${c.id}`);(L=F?x==null?void 0:x.querySelector("a"):x)==null||L.focus({preventScroll:!0})},30)},children:[c.t,i.jsx(Tp,{})]}),i.jsx("div",{id:`hb-fell-${c.id}`,tabIndex:-1,className:`hb-fell${o===c.id?" opid":""}`,children:i.jsx("div",{className:"hb-fellInner",children:c.rows.map(k=>i.jsxs("a",{href:k.h,tabIndex:o===c.id?0:-1,onClick:F=>y(F,k),children:[k.t,k.d?i.jsx("small",{children:k.d}):null]},k.h))})})]},c.id)),i.jsx("a",{className:"hb-navL hb-casH",href:xn.h,onClick:c=>y(c,xn),children:i.jsx(lt,{t:xn.t})})]}),i.jsx(kp,{}),i.jsx("button",{className:"hb-braud","aria-expanded":p,"aria-controls":"hb-valPan","aria-label":p?"Loka valmynd":"Opna valmynd",onClick:c=>{if(d(p?null:"valmynd"),!p){const k=c.detail===0;window.setTimeout(()=>{var x;const F=document.getElementById("hb-valPan");(x=k?F==null?void 0:F.querySelector("a"):F)==null||x.focus({preventScroll:!0})},30)}},children:i.jsxs("span",{children:[i.jsx("i",{}),i.jsx("i",{}),i.jsx("i",{})]})}),i.jsx("div",{className:"hb-panK",children:i.jsxs("div",{id:"hb-valPan",tabIndex:-1,className:`hb-pan hb-valPan${p?" opid":""}`,children:[i.jsxs("div",{className:"hb-valKort",children:[i.jsxs("a",{href:"#vorur",onClick:c=>y(c,{h:"#vorur"}),children:[i.jsx("img",{src:`${wn}hberg/laus/p00.webp${pr}`,alt:"",width:128,height:128,style:{height:64,width:"auto"}}),"Hnetur"]}),i.jsxs("a",{href:"#vorur",onClick:c=>y(c,{h:"#vorur"}),children:[i.jsx("img",{src:`${wn}hberg/laus/p06.webp${pr}`,alt:"",width:128,height:128,style:{height:64,width:"auto"}}),"Ávextir"]})]}),Zd.map((c,k)=>i.jsxs("div",{children:[i.jsx("p",{className:"hb-valHop",children:c.t}),i.jsx("div",{className:"hb-valRod",children:c.rows.map((F,x)=>i.jsx("a",{href:F.h,tabIndex:p?0:-1,style:{"--i":k*4+x},onClick:L=>y(L,F),children:i.jsx("span",{children:F.t})},F.h))})]},c.id)),i.jsx("div",{className:"hb-valRod",style:{marginTop:".9rem"},children:i.jsx("a",{href:xn.h,tabIndex:p?0:-1,style:{"--i":11},onClick:c=>y(c,xn),children:i.jsx("span",{children:xn.t})})}),i.jsx("button",{className:"hb-btn stor",tabIndex:p?0:-1,onClick:()=>{d(null),window.setTimeout(()=>Ne.open(!0),400)},children:"Opna pöntunarlistann"})]})})]})]})}const Ra=Oe.reveal,Lp=`
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
`,zp=()=>{var o;return((o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)").matches)===!0};function Mp(){const[o,d]=T.useState(()=>typeof window>"u"?!1:zp()),[s,m]=T.useState(!1);return T.useEffect(()=>{var te,ee;if(o)return;const p=document.querySelector(".hb-root"),y=document.querySelector(".hb-plota"),S=document.querySelector(".hb-heroP"),E=document.querySelector(".hb-haus");if(!p||!y||!S){d(!0);return}p.classList.add("hb-hled","hb-hledB0","hb-laest");const c=[],k=[];let F=!1;const x=()=>{var Q,K;F||(F=!0,c.forEach(W=>{try{W.finish(),W.cancel()}catch{}}),k.forEach(W=>window.clearTimeout(W)),p.classList.remove("hb-hled","hb-hledB0","hb-hledU","hb-laest"),S.style.transform="",E&&(E.style.transform=""),p.querySelectorAll('.hb-hero .hb-up, .hb-hero [class*="hb-"]').forEach(W=>W.classList.add("on")),(Q=Ft())==null||Q.start(),(K=Ft())==null||K.resize(),d(!0))},L=()=>{if(F)return;const Q=!Ma();c.push(y.animate([{transform:"translateY(100%)"},{transform:"translateY(0)"}],{duration:Oe.reveal,easing:Oe.emphasis,fill:"forwards"})),m(!0),k.push(window.setTimeout(()=>{p.classList.remove("hb-hledB0"),p.classList.add("hb-hledU");const K=[{transform:"translateY(100vh)",easing:Oe.emphasis},{transform:"translateY(31.9vh)",offset:1/3,easing:Oe.out},{transform:"translateY(0)"}];c.push(S.animate(K,{duration:Oe.reveal,fill:"forwards"})),Q&&E&&c.push(E.animate(K,{duration:Oe.reveal,fill:"forwards"}))},Ra)),k.push(window.setTimeout(()=>{p.classList.remove("hb-hled"),p.querySelectorAll(".hb-hero .hb-heroT, .hb-hero .hb-rist").forEach(K=>K.classList.add("on"))},Ra+Oe.fast)),k.push(window.setTimeout(()=>{var K;p.classList.remove("hb-laest"),(K=Ft())==null||K.start()},Ra+Oe.reveal)),k.push(window.setTimeout(x,Ra+Oe.reveal+Oe.fast))};(te=Ft())==null||te.stop();const P=[...p.querySelectorAll(".hb-hero img")],R=Promise.all([((ee=document.fonts)==null?void 0:ee.ready)??Promise.resolve(),...P.map(Q=>Q.complete?Promise.resolve():new Promise(K=>{Q.addEventListener("load",K,{once:!0}),Q.addEventListener("error",K,{once:!0})}))]),I=new Promise(Q=>window.setTimeout(Q,1200));Promise.race([R,I]).then(L);const B=window.setTimeout(x,12e3),G=()=>{document.hidden&&x()},Z=Q=>{Q.persisted&&x()};return document.addEventListener("visibilitychange",G),window.addEventListener("pageshow",Z),()=>{var Q;F=!0,window.clearTimeout(B),k.forEach(K=>window.clearTimeout(K)),c.forEach(K=>K.cancel()),p.classList.remove("hb-hled","hb-hledB0","hb-hledU","hb-laest"),document.removeEventListener("visibilitychange",G),window.removeEventListener("pageshow",Z),(Q=Ft())==null||Q.start()}},[]),o?null:i.jsx("div",{className:`hb-plota${s?" inn":""}`,"aria-hidden":"true",children:i.jsx("div",{className:"hb-plotaM",children:i.jsx("img",{src:`./hberg/brand/logo.svg${pr}`,alt:"",width:820,height:378})})})}const ec=Array.from({length:40},(o,d)=>({src:`${wn}hberg/laus/p${String(d).padStart(2,"0")}.webp${pr}`,w:1,h:1,n:"",k:"laus"})),rc=(o,d,s)=>{const m=[],p=o.slice(0,d);for(let y=0;y<s;y++)p.length&&y%Math.ceil(s/p.length)===0&&m.push(p.shift()),m.push(ec[y*7%ec.length]);return m.concat(p)},tc=["mondlur","heslihnetur-med-sukkuladi-afrit","graskersfrae-2","kajuhnetur-heilarristadar","aprikosur-2","dodlur-2","hnetusmjor","tronuber-2","valhnetukjarnar","fikjur-2","kasjusmjor","kasjusmjor-2","pistasiur"],nc=Mr.filter(o=>{var d;return((d=Lo[o.slug])==null?void 0:d.pack)&&["hnetur","avextir"].some(s=>o.tags.includes(s))}).sort((o,d)=>{const s=tc.indexOf(o.slug),m=tc.indexOf(d.slug);return(s<0?99:s)-(m<0?99:m)}).map(o=>{const[d,s]=Lo[o.slug].pack;return{src:o.slug,w:d,h:s,n:o.name.is,k:d/s>1.8?"stong":"poki"}}),Op=`
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
`,Hp=()=>{var o;return((o=window.matchMedia)==null?void 0:o.call(window,"(prefers-reduced-motion: reduce)").matches)===!0},jc=()=>{var o;return((o=window.matchMedia)==null?void 0:o.call(window,"(hover: hover) and (pointer: fine)").matches)===!0};function Ip(){const o=T.useRef(null),[d,s]=T.useState(!1);return T.useEffect(()=>{const m=o.current;if(!m)return;const p=new IntersectionObserver(([y])=>{y.isIntersecting&&(s(!0),p.disconnect())},{rootMargin:"100% 0px 100% 0px"});return p.observe(m),()=>p.disconnect()},[]),T.useEffect(()=>{if(!d)return;const m=o.current;if(!m)return;let p=!0,y=0,S=()=>{};return sc(()=>import("./matter-B4VUMHZ3.js").then(E=>E.m),[],import.meta.url).then(E=>{if(!p||!o.current)return;const c=E.default??E,{Engine:k,Bodies:F,Composite:x,Body:L,Sleeping:P}=c,R=m.clientWidth,I=m.clientHeight,B=R<640,G=Math.max(58,Math.min(118,R/(B?5.6:12.5))),Z=B?rc(nc,0,54):rc(nc,0,120),te=k.create({enableSleeping:!0});te.gravity.y=1.15;const ee=200;x.add(te.world,[F.rectangle(R/2,I+ee/2,R*3,ee,{isStatic:!0,friction:.9}),F.rectangle(-ee/2,I/2-I,ee,I*4,{isStatic:!0}),F.rectangle(R+ee/2,I/2-I,ee,I*4,{isStatic:!0})]);const Q=[],K=[];Z.forEach((z,U)=>{const v=z.k==="laus",g=z.k==="stong",_=v?G*(.42+Math.random()*.16):g?G*1.55:z.k==="egg"?G*.62:z.w/z.h*G*1.3,H=v?_:g||z.k==="egg"?_*(z.h/z.w):G*1.3,J=v?R*(.3+.4*Math.random()):_/2+U*.618%1*(R-_),se=-H-U*(G*(v?.22:.55))-Math.random()*G,ce=v?F.circle(J,se,_*.4,{restitution:.32,friction:.4,frictionAir:.01,density:.0016,angle:Math.random()*6.28}):F.rectangle(J,se,_,H,{chamfer:{radius:Math.min(_,H)*.12},restitution:z.k==="stong"?.18:.28,friction:.6,frictionAir:.012,density:.0012,angle:(Math.random()-.5)*.9});L.setAngularVelocity(ce,(Math.random()-.5)*(v?.2:.08)),K.push(ce);const ue=document.createElement("img");ue.src=v?z.src:qr(z.src,"pack","s"),v&&(ue.className="laus"),ue.alt="",ue.decoding="async",ue.width=Math.round(_),ue.height=Math.round(H),ue.style.width=`${_}px`,ue.style.height=`${H}px`,ue.style.transform="translate3d(-999px,-999px,0)",m.appendChild(ue),Q.push(ue)});const W=()=>{for(let z=0;z<K.length;z++){const U=K[z],v=Q[z];v.style.transform=`translate3d(${(U.position.x-v.width/2).toFixed(1)}px,${(U.position.y-v.height/2).toFixed(1)}px,0) rotate(${U.angle.toFixed(3)}rad)`}};if(Hp()){x.add(te.world,K);for(let z=0;z<1400;z++)k.update(te,1e3/60);W(),S=()=>{Q.forEach(z=>z.remove()),k.clear(te)};return}let ie=0,ae=!1,pe=0,we=0;const _e=()=>{var z;pe>=K.length||(x.add(te.world,K[pe]),pe++,we=window.setTimeout(_e,((z=Z[pe])==null?void 0:z.k)==="laus"?B?34:26:B?110:85))},Fe=new IntersectionObserver(([z])=>{ae=z.isIntersecting,ae&&pe===0&&_e(),ae&&!y&&(y=requestAnimationFrame(Le))},{threshold:.35});Fe.observe(m);let je=performance.now();const Le=z=>{const U=Math.min(32,z-je);je=z,k.update(te,U),W(),ie=pe===K.length&&K.every(g=>g.isSleeping)?ie+1:0,y=ae&&ie<30?requestAnimationFrame(Le):0},ze=()=>{!y&&ae&&(je=performance.now(),y=requestAnimationFrame(Le))},ye=z=>{const U=m.getBoundingClientRect();return{x:z.clientX-U.left,y:z.clientY-U.top}},V=[];if(jc()){m.classList.add("grip");let z=null;const U=_=>{const H=ye(_),J=c.Query.point(K,H)[0];if(!J)return;_.preventDefault(),m.setPointerCapture(_.pointerId),P.set(J,!1);const se=H.x-J.position.x,ce=H.y-J.position.y,ue=Math.cos(-J.angle),ve=Math.sin(-J.angle);z=c.Constraint.create({pointA:H,bodyB:J,pointB:{x:se*ue-ce*ve,y:se*ve+ce*ue},stiffness:.12,damping:.08,length:0}),x.add(te.world,z),m.classList.add("held"),ze()},v=_=>{z&&(z.pointA=ye(_),ze())},g=()=>{z&&(x.remove(te.world,z),z=null,m.classList.remove("held"))};m.addEventListener("pointerdown",U),m.addEventListener("pointermove",v),m.addEventListener("pointerup",g),m.addEventListener("pointercancel",g),V.push(()=>{m.removeEventListener("pointerdown",U),m.removeEventListener("pointermove",v),m.removeEventListener("pointerup",g),m.removeEventListener("pointercancel",g)})}else{const z=U=>{const v=c.Query.point(K,ye(U))[0];v&&(P.set(v,!1),L.setVelocity(v,{x:(Math.random()-.5)*6,y:-14}),L.setAngularVelocity(v,(Math.random()-.5)*.3),ze())};m.addEventListener("pointerup",z),V.push(()=>m.removeEventListener("pointerup",z))}S=()=>{Fe.disconnect(),window.clearTimeout(we),cancelAnimationFrame(y),V.forEach(z=>z()),Q.forEach(z=>z.remove()),k.clear(te)}}),()=>{p=!1,S()}},[d]),i.jsxs("section",{className:"hb-regn","aria-labelledby":"hb-regn-t",children:[i.jsxs("div",{className:"hb-regnH",children:[i.jsx(wc,{children:"Pokinn"}),i.jsx("h2",{id:"hb-regn-t",className:"hb-disp",children:"Hellt úr pokanum."}),i.jsx("p",{children:Dp()})]}),i.jsx("div",{className:"hb-svid",ref:o,"data-bendill":"Gríptu",role:"img","aria-label":"Pokar frá H-Berg og lausar hnetur og þurrkaðir ávextir í hrúgu."}),i.jsx("div",{style:{position:"relative",height:0},children:i.jsx("span",{className:"hb-golf"})})]})}function Dp(){return typeof window>"u"?"":jc()?"Gríptu vöru og kastaðu henni.":"Pikkaðu á vöru og hún hoppar."}const Bp="https://sndrstudio.is",_p="./",Up=`
@font-face {
  font-family: 'ProjektBlackbirdIS';
  src: url('${_p}fonts/blackbird/ProjektBlackbirdIS.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
`;function $p({dark:o=!1,className:d="",english:s=!1}){const m=o?"rgba(255,255,255,0.72)":"rgba(23,23,23,0.72)",p=o?"#FF8A3D":"#C4531B";return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Up}),i.jsxs("a",{href:Bp,target:"_blank",rel:"noreferrer","aria-label":s?"Designed by SNDR Studio":"Hannað af SNDR Studio","data-logotype":!0,className:`inline-flex min-h-11 items-center gap-2 ${d}`,children:[i.jsxs("span",{style:{fontFamily:"'ProjektBlackbirdIS', sans-serif",color:m,fontSize:"15px",letterSpacing:"0.02em"},children:["SN",i.jsx("span",{style:{color:p},children:"✦"}),"DR"]}),i.jsx("span",{style:{fontFamily:"'Geist Mono', ui-monospace, 'SF Mono', Menlo, monospace",color:m,fontSize:"10.5px",letterSpacing:"0.1em",opacity:.85},children:"STUDIO"})]})]})}const Ap=.19,Kp=.16,Vp=14,Jp=(o,d)=>{const s=o%d;return s>0?s-d:s},Fo=(o,d,s)=>o<d?d:o>s?s:o,qp=()=>{const[o,d]=T.useState(()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);return T.useEffect(()=>{const s=window.matchMedia("(prefers-reduced-motion: reduce)"),m=()=>d(s.matches);return s.addEventListener("change",m),()=>s.removeEventListener("change",m)},[]),o};function Wp({speed:o=40,gap:d=72}){const s=T.useRef(null),m=T.useRef(null),p=T.useRef(null),[y,S]=T.useState(4),[E,c]=T.useState(!1),[k,F]=T.useState(!1),x=qp(),L=T.useRef(x);L.current=x;const P=T.useRef(!1);P.current=!E&&!x;const R=T.useRef(0),I=T.useRef(0),B=T.useRef(0),G=T.useRef(0),Z=T.useCallback(()=>{const ee=m.current;if(!ee)return;const Q=L.current?0:R.current-G.current;ee.style.transform=`translate3d(${Q.toFixed(2)}px,0,0)`},[]);return T.useLayoutEffect(()=>{const ee=s.current,Q=p.current;if(!ee||!Q)return;const K=()=>{const ie=Q.getBoundingClientRect().width,ae=ie>0?ie+d:0;G.current=ae,R.current=ae>0?Fo(R.current,-ae,ae):0,Z();const pe=x||ae<=0?4:Fo(Math.ceil(ee.getBoundingClientRect().width/ae)+3,4,Vp);S(we=>we===pe?we:pe)};K();const W=new ResizeObserver(K);return W.observe(ee),W.observe(Q),()=>W.disconnect()},[d,Z,x]),T.useEffect(()=>{const ee=s.current;if(!ee)return;const Q=new IntersectionObserver(K=>{const W=K[K.length-1];W&&F(W.isIntersecting)},{rootMargin:"96px"});return Q.observe(ee),()=>Q.disconnect()},[]),T.useEffect(()=>{if(x||!k)return;let ee=0,Q=0;const K=W=>{ee=requestAnimationFrame(K);const ie=Q?Math.min((W-Q)/1e3,.05):0;Q=W;const ae=G.current;if(ae<=0)return;B.current+=((P.current?1:0)-B.current)*(1-Math.exp(-ie/Ap));const pe=I.current*(1-Math.exp(-ie/Kp));I.current-=pe;let we=R.current-o*B.current*ie+pe;B.current>.002&&Math.abs(I.current)<.25?(I.current=0,we=Jp(we,ae)):we=Fo(we,-ae,ae),R.current=we,Z()};return ee=requestAnimationFrame(K),()=>cancelAnimationFrame(ee)},[x,k,o,Z]),T.useEffect(()=>{const ee=()=>c(!1);return window.addEventListener("blur",ee),()=>window.removeEventListener("blur",ee)},[]),{viewportRef:s,trackRef:m,groupRef:p,copies:y,reduced:x,bind:{onPointerEnter:ee=>{ee.pointerType!=="touch"&&c(!0)},onPointerDown:()=>c(!0),onPointerUp:ee=>{ee.pointerType==="touch"&&c(!1)},onPointerCancel:()=>c(!1),onPointerLeave:()=>c(!1),onFocus:()=>c(!0),onBlur:()=>c(!1)}}}const Yp=[{n:"Bónus",f:"bonus.webp",h:1},{n:"Krónan",f:"kronan.svg",h:.8},{n:"Hagkaup",f:"hagkaup.svg",h:1.05},{n:"Nettó",f:"netto.svg",h:.8},{n:"Fjarðarkaup",f:"fjardarkaup.png",h:1.15},{n:"Samkaup",f:"samkaup.svg",h:.8},{n:"10-11",f:"1011.png",h:1.05},{n:"N1",f:"n1.svg",h:1.1},{n:"Olís",f:"olis.svg",h:.85,k:"flis"},{n:"Kaupfélag Vestur-Húnvetninga",f:"kvh.svg",h:1}],Gp=`
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
`;function Qp(){const{viewportRef:d,trackRef:s,groupRef:m,copies:p,reduced:y,bind:S}=Wp({speed:34,gap:72}),E=y?1:p,c=y?0:1;return i.jsxs("section",{className:"hb-solu","aria-label":"Söluaðilar H-Berg",...S,children:[i.jsx("p",{className:"hb-soluT",children:"Fæst hjá 19 söluaðilum um allt land"}),i.jsx("div",{ref:d,className:"hb-soluV",tabIndex:y?0:void 0,style:{overflowX:y?"auto":"hidden"},children:i.jsx("div",{ref:s,className:"hb-soluS",style:{gap:72},children:Array.from({length:E},(k,F)=>i.jsx("ul",{ref:F===c?m:void 0,"aria-hidden":F===c?void 0:!0,style:{gap:72},children:Yp.map(x=>i.jsxs("li",{className:x.k,children:[i.jsx("img",{src:`${wn}hberg/solu/${x.f}${pr}`,alt:"",style:{"--h":x.h},loading:"lazy",decoding:"async"}),F===c?i.jsx("span",{className:"hb-sr",children:x.n}):null]},x.f))},F))})})]})}const Xp=`
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
`,hi="./",Vo=o=>qr(o,"pack","m"),mi=o=>o.startsWith("laus:")?`${hi}hberg/laus/${o.slice(5)}.webp${pr}`:o.startsWith("hero:")?`${hi}hberg/hero/${o.slice(5)}.webp${pr}`:qr(o,"pack","s");function Zp(o,d,s,m){const p=3*o,y=3*(s-o)-p,S=1-p-y,E=3*d,c=3*(m-d)-E,k=1-E-c,F=P=>((S*P+y)*P+p)*P,x=P=>((k*P+c)*P+E)*P,L=P=>(3*S*P+2*y)*P+p;return P=>{if(P<=0)return 0;if(P>=1)return 1;let R=P;for(let I=0;I<6;I++){const B=F(R)-P,G=L(R);if(Math.abs(B)<1e-4||!G)break;R-=B/G}return x(Math.min(1,Math.max(0,R)))}}const ef=Zp(.17,.17,.255,.902);function Sc(o,d=[]){const s=T.useRef(null);return T.useEffect(()=>{const m=s.current;if(!m)return;let p=0;const y=()=>{p=0,o(m)},S=()=>{p||(p=requestAnimationFrame(y))};return y(),window.addEventListener("scroll",S,{passive:!0}),window.addEventListener("resize",S),()=>{window.removeEventListener("scroll",S),window.removeEventListener("resize",S),cancelAnimationFrame(p)}},d),s}const rf=`
@media(prefers-reduced-motion:reduce){
.hb-linur{height:auto!important}.hb-linurP{position:relative!important;height:auto!important;overflow:visible!important}
.hb-linurL{overflow-x:auto;transform:none!important}.hb-lina2{transform:none!important}
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
.hb-kort h3{margin:0;font-weight:700;overflow-wrap:anywhere;text-align:center;font-family:var(--f-disp);font-size:clamp(1.1rem,2.08vw,2.5rem);line-height:1.05;letter-spacing:-.01em;padding:0 8%}
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


.hb-gal{display:flex;flex-direction:column;row-gap:clamp(1rem,9.2593vh,6rem)}
.hb-galT{width:62vw}
.hb-galK{overflow:hidden;padding:clamp(1rem,4.5vh,6rem) 0 0}
.hb-galL{display:flex;gap:clamp(0.5rem,.7vw,2.5rem);padding:0 var(--gut);list-style:none;margin:0;width:max-content}
.hb-galW{position:relative}
.hb-galNav{display:none}
.hb-galL li{width:21.1111vh;flex:none;display:flex;flex-direction:column;gap:.75rem}
.hb-galI{display:block;width:100%;height:25.9259vh;flex:none;border:0;padding:0;cursor:pointer;background:var(--g);position:relative;
  transform-origin:50% 100%;transition:transform var(--motion-reveal) var(--motion-out);overflow:hidden}
.hb-galI img{position:absolute;inset:10%;width:80%;height:80%;object-fit:contain;filter:drop-shadow(0 10px 14px rgba(28,18,12,.3));
  transform:translateY(130%);transition:transform var(--dur,var(--motion-reveal)) var(--motion-out);transition-delay:var(--d,0s)}
.on .hb-galI img{transform:none}
@media (hover:hover) and (pointer:fine) and (min-width:992px){
  .hb-galL li{overflow:visible}
.hb-galK{padding-top:clamp(1rem,9vh,6rem);margin-top:clamp(-6rem,-4.5vh,-1rem)}
  .hb-galL li:hover .hb-galI{transform:scale(1.3)}
  .hb-galL li:hover ~ li .hb-galI{transform:translateX(15%)}
  .hb-galL li:has(~ li:hover) .hb-galI{transform:translateX(-15%)}
}
/* caption under the tile: a sibling of the zooming button, so it never scales; fades in on hover */
.hb-galL li{position:relative}
/* caption is always visible under the tile (no hover discovery); the tile keeps its own height so nothing clips */
.hb-galInfo{position:relative;display:grid;gap:.2rem;text-align:left;color:var(--c-ink);font-size:clamp(.8rem,.85vw,.95rem);line-height:1.3;pointer-events:none}
.hb-galInfo b{font-weight:500;overflow-wrap:anywhere;hyphens:auto;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.hb-galInfo small{color:var(--c-ink-med);font-size:.85em;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
@media (hover:hover) and (pointer:fine){
  /* the strip scrolls like a normal row: trackpad swipe, drag, or the arrows */
  .hb-galK{overflow-x:auto;overflow-y:hidden;scrollbar-width:none;padding-bottom:3.4rem;cursor:grab;user-select:none;-webkit-user-select:none}
  .hb-galK::-webkit-scrollbar{display:none}
  .hb-galK.drag{cursor:grabbing}
  .hb-galK.drag .hb-galI{pointer-events:none}
  .hb-galNav{display:flex;gap:.5rem;position:absolute;right:var(--gut);bottom:calc(100% + .25rem);z-index:4}
  .hb-galNav button{width:2.75rem;height:2.75rem;border-radius:50%;border:1px solid var(--c-lina);background:transparent;color:var(--c-ink);
    display:grid;place-items:center;cursor:pointer;transition:opacity var(--motion-ui) var(--motion-out)}
  .hb-galNav button:hover:not(:disabled){background:var(--c-ink);color:var(--c-bg)}
  .hb-galNav button:disabled{opacity:.3;cursor:default}
}
@media (hover:hover) and (pointer:fine) and (max-width:991px){.hb-galK{padding-top:2rem;margin-top:-1rem}.hb-galL li{overflow:visible}}
@media (max-width:991px){
  .hb-gal{row-gap:clamp(0.5rem,3.788vh,2.5rem)}
  .hb-galT{width:auto;padding:0 var(--gut)}
  .hb-galK{overflow-x:auto;scroll-snap-type:x proximity;scrollbar-width:none;padding-top:0}
  .hb-galK::-webkit-scrollbar{display:none}
  .hb-galL li{width:14.714vw;scroll-snap-align:start}.hb-galI{height:19.01vw}
}
@media (max-width:479px){.hb-gal{row-gap:clamp(0.5rem,3.75vh,2.5rem)}.hb-galL li{width:34.167vw}.hb-galI{height:44.444vw}}


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


.hb-linur{position:relative}
.hb-linurP{position:sticky;top:0;height:100svh;display:flex;flex-direction:column;justify-content:center;gap:clamp(1rem,6.2963vh,6rem);overflow:hidden}
.hb-linurL{display:flex;gap:var(--col);padding:0 var(--gut);will-change:transform}
.hb-lina2{flex:none;width:44.1667vw;height:24.7396vw;display:grid;grid-template-columns:1fr 1fr;border:0;padding:0;cursor:pointer;
  text-align:left;background:var(--c-el3);color:var(--c-ink);will-change:transform;position:relative}
.hb-lina2:nth-child(3n+2){background:var(--c-el2)}.hb-lina2:nth-child(3n+3){background:var(--c-el)}
.hb-lina2 figure{margin:0;background:var(--g);position:relative;overflow:hidden}
.hb-lina2 figure img{position:absolute;inset:12%;width:76%;height:76%;object-fit:contain;filter:drop-shadow(0 12px 16px rgba(28,18,12,.28));
  transition:transform var(--motion-reveal) var(--motion-out)}

.hb-lina2 > div{display:flex;flex-direction:column;padding:clamp(0.5rem,1.25vw,2.5rem);gap:.6rem}
.hb-lina2 h3{margin:0;font-family:var(--f-disp);font-weight:600;font-size:clamp(1.1rem,2.08vw,2.5rem);line-height:1.05;letter-spacing:-.01em}
.hb-lina2 p{margin:0;font-size:.86rem;color:var(--c-ink-med)}
.hb-lina2 .hb-lf{margin-top:auto;display:flex;justify-content:space-between;font-size:.8rem}
@media (max-width:991px){
  .hb-linur{height:auto !important}
  .hb-linurP{position:relative;height:auto;overflow:visible}
  .hb-linurL{overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;transform:none !important}
  .hb-linurL::-webkit-scrollbar{display:none}
  .hb-lina2{width:39.063vw;height:52.083vw;grid-template-columns:1fr;grid-template-rows:1.1fr 1fr;scroll-snap-align:start;transform:none !important}
  .hb-lina2 h3{font-size:clamp(1.1rem,3.255vw,2.5rem)}
}
@media (max-width:479px){.hb-lina2{width:83.333vw;height:111.111vw}.hb-lina2 h3{font-size:clamp(1.5rem,7vw,5.25rem)}.hb-lina2 > div{padding:clamp(1rem,4vw,6rem)}}


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


${Xp}
`,tf=[{p:"p00",x:52,y:8,s:2.6,d:1.2,r:-18},{p:"p06",x:58,y:54,s:2.2,d:.8,r:24},{p:"p02",x:52,y:80,s:3,d:1.4,r:12},{p:"p08",x:60,y:5,s:2.4,d:1,r:-30},{p:"p05",x:90,y:6,s:2.8,d:1.3,r:40},{p:"p11",x:71,y:92,s:2.4,d:.9,r:-8},{p:"p14",x:94,y:89,s:2.2,d:1.1,r:16},{p:"p20",x:53,y:88,s:2.6,d:.7,r:-22}],nf=["Bónus","Krónunni","Hagkaup","Nettó","Fjarðarkaupum","Melabúðinni","Samkaupum","10-11","Iceland","N1","Olís","Kaupfélagi Skagfirðinga","Hlíðarkaupum","Vöruvali","Albínu","Fjölvali","Skeljungi","Kaupfélagi Steingrímsfjarðar","Kaupfélagi V-Húnvetninga"];function Nc({listi:o=tf,k:d=""}){return i.jsx("div",{className:`hb-svif ${d}`,"aria-hidden":"true",children:o.map((s,m)=>i.jsx("span",{style:{left:`${s.x}%`,top:`${s.y}%`,"--s":`${s.s}vw`,"--d":s.d,"--r":`${s.r}deg`,"--t":`${7+m%4*1.7}s`,"--w":`${-m*1.3}s`},children:i.jsx("img",{src:`${hi}hberg/laus/${s.p}.webp${pr}`,alt:"",width:160,height:160,decoding:"async"})},m))})}function af(){const o=T.useRef(null);return T.useEffect(()=>{const d=o.current;if(!d||Or()||!window.matchMedia("(hover:hover) and (pointer:fine)").matches)return;let s=0,m=0,p=0,y=0,S=0;const E=()=>{y+=(m-y)*.055,S+=(p-S)*.055,d.style.setProperty("--mx",y.toFixed(4)),d.style.setProperty("--my",S.toFixed(4)),s=Math.abs(m-y)>5e-4||Math.abs(p-S)>5e-4?requestAnimationFrame(E):0},c=F=>{const x=d.getBoundingClientRect();m=(F.clientX-x.left)/x.width-.5,p=(F.clientY-x.top)/x.height-.5,s||(s=requestAnimationFrame(E))},k=()=>{m=0,p=0,s||(s=requestAnimationFrame(E))};return d.addEventListener("pointermove",c),d.addEventListener("pointerleave",k),()=>{d.removeEventListener("pointermove",c),d.removeEventListener("pointerleave",k),cancelAnimationFrame(s)}},[]),i.jsx("div",{className:"hb-heroP",children:i.jsxs("section",{className:"hb-hero",id:"top",ref:o,children:[i.jsx(Nc,{k:"hb-svifH"}),i.jsxs(Ye,{className:"hb-heroT",children:[i.jsxs("div",{children:[i.jsx(wc,{children:"H-Berg · Grandatröð 12, Hafnarfirði"}),i.jsxs("h1",{className:"hb-disp",children:[No.heroLinur.map((d,s)=>i.jsx("span",{className:"hb-mask",children:i.jsx("span",{className:"hb-up hb-lina",style:zr(s),children:d})},d)),i.jsx("span",{className:"hb-mask",children:i.jsx("span",{className:"hb-up hb-lina hb-heroAr",style:zr(No.heroLinur.length),children:No.heroAr})})]})]}),i.jsxs("div",{className:"hb-heroNe",children:[i.jsx("p",{className:"hb-heroSlag hb-mask hb-maskP",children:i.jsxs("span",{className:"hb-up",style:{...zr(3),"--dur":"var(--motion-reveal)"},children:[Mr.length," vörur undir eigin merki, pakkaðar í Hafnarfirði. Fást í Bónus, Krónunni, Hagkaup og hjá ",nf.length-3," öðrum söluaðilum."]})}),i.jsx("div",{className:"hb-heroCta hb-mask",children:i.jsxs("div",{className:"hb-up",style:zr(4),children:[i.jsx("button",{className:"hb-btn hb-casH",onClick:()=>at("#vorur"),children:i.jsx(lt,{t:"Skoða vörurnar"})}),i.jsx("button",{className:"hb-btn sc hb-casH",onClick:d=>Ne.open(!0,d),children:i.jsx(lt,{t:"Pöntun fyrir verslanir"})})]})})]})]}),i.jsx(Ye,{className:"hb-rist",children:$m.map((d,s)=>i.jsx("button",{className:"hb-reit hb-mask",style:{"--grunnur":d.grunnur},"data-bendill":"Skoða","aria-label":`${d.n}, nánar`,onClick:()=>He.open({k:"vara",slug:d.img.replace(/^hero:/,"")}),children:i.jsx("img",{className:"hb-up",style:zr(s),src:qr(d.img.replace(/^hero:/,""),"pack","m"),alt:"",width:800,height:800,loading:s<4?"eager":"lazy",decoding:"async"})},d.img))})]})})}function lf({n:o,grunnur:d,b:s,fyrsta:m,hlid:p}){var F;const y=Km[o]??[m],[S,E]=T.useState(0),c=T.useRef(null);T.useEffect(()=>{if(y.length<2||Or())return;let x=0,L=!1;const P=new IntersectionObserver(([I])=>{L=I.isIntersecting});c.current&&P.observe(c.current);const R=window.setTimeout(()=>{x=window.setInterval(()=>{L&&E(I=>(I+1)%y.length)},2e3)},700*p);return()=>{window.clearTimeout(R),window.clearInterval(x),P.disconnect()}},[y.length,p]);const k=(S-1+y.length)%y.length;return i.jsx("span",{className:"hb-bitiM",ref:c,style:{"--grunnur":((F=We(y[S]))==null?void 0:F.tint)??d,"--b":s??1},children:y.map((x,L)=>i.jsx("img",{src:mi(x),alt:L===S?o:"",width:120,height:136,loading:"lazy",decoding:"async",className:L===S?"nu":L===k&&y.length>1?"farin":"",style:L!==S&&L!==k?{transition:"none"}:void 0},x))})}function of(){let o=0;return i.jsxs("section",{className:"hb-tilvS","aria-label":"H-Berg í einni setningu",children:[i.jsx(Nc,{k:"hb-svifS",listi:[{p:"p03",x:8,y:10,s:3.4,d:1,r:20},{p:"p09",x:86,y:4,s:4,d:1.3,r:-16},{p:"p12",x:90,y:78,s:3,d:.8,r:30},{p:"p17",x:12,y:74,s:3.8,d:1.2,r:-28},{p:"p24",x:52,y:96,s:2.6,d:.6,r:8}]}),i.jsx(Ye,{margin:"0px 0px -25% 0px",children:i.jsx("h2",{className:"hb-disp hb-setning",children:Am.map((d,s)=>i.jsx("span",{className:"hb-mask hb-setL",children:i.jsx("span",{className:"hb-up hb-lina",style:{...zr(s),"--dur":"var(--motion-reveal)"},children:d.map((m,p)=>"t"in m?i.jsx("span",{children:m.t},p):i.jsx(lf,{n:m.n,grunnur:m.grunnur,b:m.b,fyrsta:m.img,hlid:o++},p))})},s))})})]})}function sf({s:o,i:d}){const[s,m]=T.useState(0),[p,y]=T.useState(-1),S=o.tegundir[s],E=()=>He.open({k:"vara",slug:S.slug});return i.jsxs(Ye,{className:"hb-spjald",as:"article",style:{background:S.lit},children:[i.jsx("div",{className:"hb-spjaldM",role:"button",tabIndex:0,"aria-label":`${S.n}, nánar`,"data-bendill":"Skoða",onClick:E,onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),E())},children:o.tegundir.map((c,k)=>i.jsx("img",{src:Vo(c.slug),alt:k===s?c.n:"",width:720,height:820,loading:"lazy",decoding:"async",className:k===s?"nu":k===p?"farin":"",style:k!==s&&k!==p?{transition:"none"}:{transitionDelay:p<0?`${.12*d}s`:"0s"}},c.slug))}),i.jsxs("div",{className:"hb-stika",children:[i.jsxs("div",{children:[i.jsx("small",{children:o.merki}),i.jsx("b",{children:S.n}),i.jsx("span",{className:"hb-pk",children:S.d})]}),i.jsxs("div",{className:"hb-lit",children:[i.jsx("small",{children:"Tegund"}),i.jsx("div",{role:"group","aria-label":`Tegundir af ${o.titill}`,children:o.tegundir.map((c,k)=>i.jsx("button",{"aria-pressed":k===s,"aria-label":c.n,style:{"--l":c.lit},onClick:()=>{k!==s&&(y(s),m(k))}},c.n))})]}),i.jsxs("div",{className:"hb-takkar",children:[i.jsx("button",{className:"hb-btn sc hb-casH",onClick:E,children:i.jsx(lt,{t:"Nánar"})}),i.jsx(Do,{slug:S.slug})]})]})]})}function uf(){return i.jsx("section",{className:"hb-vorur",id:"vorur","aria-label":"Vörur",children:Vm.map((o,d)=>i.jsx(sf,{s:o,i:d},o.titill))})}const df=[{n:"2007",t:"Stofnað af Halldóri Berg og fjölskyldu",g:"#F2C98A",h:"p00"},{n:String(Mr.length),t:"Vörur undir merki H-Berg",g:"#E9B3A1",h:"p06"},{n:"19",t:"Söluaðilar um allt land, frá Bónus til Melabúðarinnar",g:"#C9D3A2",h:"p02"},{n:"800",t:"Fermetrar fyrir framleiðslu og pökkun í Hafnarfirði",g:"#B9CBD9",h:"p08"}];function cf(){return i.jsxs("section",{className:"hb-kostir",children:[i.jsx(Ye,{children:i.jsx(jn,{className:"hb-disp",text:"H-Berg | frá 2007"})}),i.jsx(Ye,{className:"hb-tolur",hver:!0,children:df.map((o,d)=>i.jsx("div",{className:"hb-tala hb-mask",style:{"--g":o.g},children:i.jsxs("div",{className:"hb-up",style:{...zr(d),"--dur":"var(--motion-reveal)"},children:[i.jsx("b",{children:o.n}),i.jsx("span",{children:o.t}),i.jsx("img",{src:`${hi}hberg/laus/${o.h}.webp${pr}`,alt:"",width:160,height:160,loading:"lazy"})]})},o.n))})]})}function hf(){return i.jsxs("section",{className:"hb-gal","aria-labelledby":"hb-gal-t",children:[i.jsx(Ye,{className:"hb-galT hb-midja",margin:"0px 0px -40% 0px",children:i.jsx(jn,{id:"hb-gal-t",className:"hb-disp",text:"Allt H-Berg | í einni | hillu"})}),i.jsxs("div",{className:"hb-galW",children:[i.jsx(mf,{}),i.jsx("div",{className:"hb-galK",children:i.jsx(Ye,{as:"ul",className:"hb-galL",margin:"0px 0px -40% 0px",children:Wm.map((o,d)=>i.jsxs("li",{children:[i.jsx("button",{className:"hb-galI",style:{"--g":o.g,"--d":`${(Math.min(d,10)*.06).toFixed(2)}s`},"data-bendill":"Skoða","aria-label":`${o.n}, nánar`,onClick:()=>He.open({k:"vara",slug:o.img}),children:i.jsx("img",{src:mi(o.img),alt:"",width:300,height:340,loading:"lazy",decoding:"async"})}),i.jsxs("span",{className:"hb-galInfo","aria-hidden":"true",children:[i.jsx("b",{children:o.n}),i.jsx("small",{children:o.a.length>0?`${o.d} · Inniheldur ${o.a.join(", ").toLowerCase()}`:o.d})]})]},o.img))})})]})]})}const ic=({d:o})=>i.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16","aria-hidden":"true",children:i.jsx("path",{d:o,fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})});function mf(){const[o,d]=T.useState([!0,!1]);T.useEffect(()=>{const m=document.querySelector(".hb-galK");if(!m)return;const p=()=>d([m.scrollLeft<4,m.scrollLeft>m.scrollWidth-m.clientWidth-4]);return p(),m.addEventListener("scroll",p,{passive:!0}),window.addEventListener("resize",p),()=>{m.removeEventListener("scroll",p),window.removeEventListener("resize",p)}},[]);const s=m=>{const p=document.querySelector(".hb-galK");p&&p.scrollBy({left:m*p.clientWidth*.8,behavior:Or()?"auto":"smooth"})};return i.jsxs("div",{className:"hb-galNav",children:[i.jsx("button",{type:"button","aria-label":"Fyrri vörur",disabled:o[0],onClick:()=>s(-1),children:i.jsx(ic,{d:"M10 3 5 8l5 5"})}),i.jsx("button",{type:"button","aria-label":"Næstu vörur",disabled:o[1],onClick:()=>s(1),children:i.jsx(ic,{d:"M6 3l5 5-5 5"})})]})}function pf(){return T.useEffect(()=>{const o=document.querySelector(".hb-galK"),d=document.querySelector(".hb-galL");if(!o||!d)return;const s=new IntersectionObserver(([L])=>{L.isIntersecting&&(d.querySelectorAll("img").forEach(P=>{P.loading="eager"}),s.disconnect())},{rootMargin:"100% 0px"});if(s.observe(o),!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return()=>s.disconnect();let m=0,p=0,y=!1,S=!1;const E=L=>{L.button===0&&(y=!0,S=!1,m=L.clientX,p=o.scrollLeft)},c=L=>{if(!y)return;const P=L.clientX-m;!S&&Math.abs(P)>6&&(S=!0,o.classList.add("drag")),S&&(L.preventDefault(),o.scrollLeft=p-P)},k=L=>{L.preventDefault(),L.stopPropagation()},F=()=>{y&&(y=!1,S&&(o.classList.remove("drag"),o.addEventListener("click",k,{capture:!0}),window.setTimeout(()=>o.removeEventListener("click",k,{capture:!0}),0)))},x=L=>L.preventDefault();return o.addEventListener("mousedown",E),o.addEventListener("dragstart",x),window.addEventListener("mousemove",c),window.addEventListener("mouseup",F),()=>{s.disconnect(),o.removeEventListener("mousedown",E),o.removeEventListener("dragstart",x),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",F)}},[]),null}function ff(){return i.jsx(ip,{})}function gf(){const[o,d]=T.useState("quiz"),[s,m]=T.useState(null),p=s===null?null:_d[s],y=(S,E)=>{S.hlekkur==="#poki"?Ne.open(!0,E):S.hlekkur==="#staerra"?He.open({k:"staerra"}):S.hlekkur==="#hvar"?He.open({k:"hvar"}):at("#ofnaemi")};return i.jsxs("section",{className:"hb-form",id:"erindi",children:[i.jsxs("div",{className:"hb-flipar hb-disp",role:"tablist","aria-label":"Hafa samband",children:[i.jsx("button",{role:"tab",id:"hb-t1","aria-controls":"hb-tp","aria-selected":o==="quiz",onClick:()=>d("quiz"),children:"Hvert er erindið?"}),i.jsx("button",{role:"tab",id:"hb-t2","aria-controls":"hb-tp","aria-selected":o==="spyrja",onClick:()=>d("spyrja"),children:"Senda fyrirspurn"})]}),i.jsx(Ye,{className:"hb-formP hb-mask",margin:"0px 0px -20% 0px",children:i.jsx("div",{className:"hb-up",id:"hb-tp",role:"tabpanel","aria-labelledby":o==="quiz"?"hb-t1":"hb-t2",style:{display:"grid",gap:"1rem"},children:o==="quiz"?i.jsxs("div",{className:"hb-quiz",children:[i.jsxs("div",{children:[i.jsx("p",{className:"hb-quizQ",id:"hb-quiz-q",children:"Hvað ert þú að leita að?"}),i.jsx("div",{className:"hb-val",role:"radiogroup","aria-labelledby":"hb-quiz-q",children:_d.map((S,E)=>i.jsxs("label",{className:s===E?"valid":"",children:[i.jsxs("span",{children:[i.jsx("b",{children:S.nafn}),i.jsx("small",{children:S.stutt})]}),i.jsx("input",{type:"radio",name:"hb-erindi",checked:s===E,onChange:()=>m(E)})]},S.nafn))})]}),i.jsx("div",{className:"hb-svar","aria-live":"polite",children:p?i.jsxs("div",{className:"hb-svarI",children:[i.jsx("p",{className:"hb-merki",style:{margin:0,color:"rgba(23,45,77,.6)"},children:p.nafn}),i.jsx("p",{className:"hb-svarT",children:p.nota}),i.jsx("button",{className:"hb-btn hb-casH",onClick:S=>y(p,S),children:i.jsx(lt,{t:p.ord})}),i.jsxs("button",{className:"hb-nobg",style:{color:"#172D4D"},onClick:()=>d("spyrja"),children:["Eða sendu okkur línu ",i.jsx("i",{children:"→"})]})]},p.nafn):i.jsxs("div",{className:"hb-svarI tomt",children:[i.jsx("p",{className:"hb-svarT",children:"Veldu erindi og þú sérð strax hvernig best er að snúa sér."}),i.jsxs("p",{className:"hb-smatt",style:{color:"rgba(23,45,77,.6)",margin:0},children:["Sími ",wr.simi," · ",wr.netfang]})]})})]}):i.jsxs(i.Fragment,{children:[i.jsx(dc,{cfg:cc}),i.jsx("div",{className:"hb-teymiL",children:Bm.map(S=>i.jsxs("div",{children:[i.jsx("b",{children:S.nafn}),i.jsx("a",{href:S.href,...S.href.startsWith("http")?{target:"_blank",rel:"noopener noreferrer"}:{},children:S.texti})]},S.nafn))})]})})})]})}function vf(){const o=[{n:"H-Berg",m:"Fjölskyldufyrirtæki frá 2007",a:"mondlur",b:"kajuhnetur-heilarristadar",g:"#B98B60",t:"H-Berg var stofnað í júlí 2007 af Halldóri Berg Jónssyni og fjölskyldu. Við pökkum þurrkuðum ávöxtum og hnetum undir eigin vörumerki.",q:"Grandatröð 12, Hafnarfirði."},{n:"Framleiðslan",m:"Neytendaumbúðir og stærri einingar",a:"hnetusmjor",b:"kasjusmjor",g:"#D7B45D",t:"Við pökkum í neytendaumbúðir og stærri einingar fyrir matvælafyrirtæki, matsölustaði og stóreldhús. Við framleiðum líka H-Berg smjör.",q:"Hnetur, ávextir og smjör."}];return i.jsxs("section",{className:"hb-um",id:"um","aria-labelledby":"hb-um-t",children:[i.jsx(Ye,{className:"hb-wrap",children:i.jsx(jn,{id:"hb-um-t",className:"hb-disp",text:"Nokkur orð | um okkur"})}),i.jsx(Ye,{className:"hb-umK",hver:!0,margin:"0px 0px -20% 0px",children:o.map((d,s)=>{var m,p,y;return i.jsx("article",{className:"hb-umC hb-mask",style:{"--grunnur":((m=We(d.a))==null?void 0:m.tint)??d.g},children:i.jsxs("div",{className:"hb-up hb-umI",style:{...zr(s),"--dur":"var(--motion-reveal)"},children:[i.jsxs("div",{className:"hb-umM",children:[i.jsx("img",{src:mi(d.a),style:{background:(p=We(d.a))==null?void 0:p.tint},alt:"",width:300,height:340,loading:"lazy"}),i.jsx("img",{src:mi(d.b),style:{background:(y=We(d.b))==null?void 0:y.tint},alt:"",width:300,height:340,loading:"lazy"})]}),i.jsx("p",{className:"hb-umT",children:d.t}),i.jsxs("div",{className:"hb-umN",children:[i.jsx("b",{children:d.n}),i.jsx("small",{children:d.m})]}),i.jsx("p",{className:"hb-umQ",children:d.q})]})},d.n)})})]})}function bf(){return i.jsxs("section",{className:"hb-saga",id:"saga",children:[i.jsx(Ye,{children:i.jsx(jn,{className:"hb-disp",text:"Gamalt og nýtt"})}),i.jsx(Ye,{hver:!0,children:Jm.map((o,d)=>i.jsxs("div",{className:"hb-sagaH hb-mask",children:[i.jsx("p",{className:"hb-up",style:{...zr(d),"--dur":"var(--motion-reveal)"},children:o.h}),i.jsx("div",{className:"hb-up",style:{...zr(d),"--dur":"var(--motion-reveal)"},children:o.r.map(s=>i.jsxs("div",{className:"hb-sagaR",children:[i.jsx("span",{children:s.t}),i.jsx("b",{children:s.a})]},s.t))})]},o.h))})]})}function kf(){const d=Sc(s=>{var P;const m=s.querySelector(".hb-linurL");if(!m)return;const p=[...m.children];if(Ma()||Or()){p.forEach(R=>{R.style.transform=""});return}const y=s.getBoundingClientRect(),S=y.height-window.innerHeight,E=Math.min(1,Math.max(0,-y.top/Math.max(1,S))),c=p.length,k=E*(c-1),F=((P=p[0])==null?void 0:P.offsetWidth)??0,x=p[c-1],L=m.clientWidth-(x?x.offsetLeft+F:0);p.forEach((R,I)=>{if(I===0){R.style.transform="";return}const B=Math.min(1,Math.max(0,k-(I-1)));let G=-F*.8*I*B;I===c-1&&(G=Math.max(G,L*B-F*.2*B)),R.style.transform=`translate3d(${G.toFixed(1)}px,0,0)`})});return i.jsx("section",{className:"hb-linur",id:"linur",ref:d,style:{height:"calc(100svh + 400svh)"},children:i.jsxs("div",{className:"hb-linurP",children:[i.jsx(Ye,{className:"hb-wrap",children:i.jsx(jn,{className:"hb-disp",text:"Vörulínur"})}),i.jsx("div",{className:"hb-linurL",children:uc.map(s=>{var p;const m=Vr.find(y=>y.s===s.s);return i.jsxs("button",{className:"hb-lina2","data-bendill":"Opna",style:{"--g":((p=We(s.img))==null?void 0:p.tint)??s.g},onClick:()=>He.open({k:"flokkur",s:s.s}),children:[i.jsx("figure",{children:i.jsx("img",{src:Vo(s.img),alt:"",width:400,height:450,loading:"lazy"})}),i.jsxs("div",{children:[i.jsx("h3",{children:s.t}),i.jsx("p",{children:s.d}),i.jsxs("span",{className:"hb-lf",children:[i.jsxs("span",{children:[(m==null?void 0:m.items.length)??0," vörur"]}),i.jsx("span",{children:"Skoða ↗"})]})]})]},s.s)})})]})})}function yf(){var d;const o=T.useRef(null);return T.useEffect(()=>{const s=o.current;if(!s)return;const m=()=>{var p;return(p=s.parentElement)==null?void 0:p.style.setProperty("--bw",`${s.offsetWidth||160}px`)};return s.complete?m():s.addEventListener("load",m,{once:!0}),window.addEventListener("resize",m),()=>window.removeEventListener("resize",m)},[]),i.jsxs("section",{className:"hb-yfirl","aria-label":"Í þeirra eigin orðum",children:[i.jsx(Ye,{className:"hb-mask hb-maskP",margin:"0px 0px -20% 0px",children:i.jsxs("h2",{className:"hb-sub hb-up",style:{"--dur":"var(--motion-reveal)"},children:["„",Dm,"“"]})}),i.jsxs("div",{className:"hb-panta",children:[i.jsx("p",{children:"Pantar þú fyrir verslun eða stóreldhús? Settu vörur á listann og opnaðu pöntunina í tölvupósti."}),i.jsx("span",{className:"hb-pantaM",children:i.jsx("img",{ref:o,style:{background:(d=We("kasjusmjor"))==null?void 0:d.tint},src:mi("kasjusmjor"),alt:"",width:460,height:110})}),i.jsx("button",{className:"hb-btn hb-casH",onClick:s=>Ne.open(!0,s),children:i.jsx(lt,{t:"Opna pöntunarlistann"})})]})]})}function xf(){var E;const[o,d]=T.useState(-1),s=["mondlur","heslihnetur-med-sukkuladi-afrit","kajuhnetur-heilarristadar","graskersfrae-2","aprikosur-2","dodlur-2"],[m,p]=T.useState(0),[y,S]=T.useState(-1);return i.jsxs("section",{className:"hb-faq",id:"spurt",children:[i.jsxs("div",{className:"hb-faqK",style:{"--fk":(E=We(s[m]))==null?void 0:E.tint},children:[i.jsx(Ye,{children:i.jsx(jn,{className:"hb-disp",text:"Spurt og | svarað"})}),i.jsx("div",{className:"hb-faqM",role:"button",tabIndex:0,"aria-label":"Næsta vörumynd",onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),S(m),p((m+1)%s.length))},"data-bendill":"Næsta",onClick:()=>{S(m),p((m+1)%s.length)},children:s.map((c,k)=>i.jsx("img",{src:Vo(c),alt:"",width:400,height:450,loading:"lazy",className:k===m?"nu":k===y?"farin":"",style:k!==m&&k!==y?{transition:"none"}:void 0},c))}),i.jsxs("div",{className:"hb-faqT",children:[i.jsx("button",{className:"hb-btn hb-casH",onClick:()=>{S(m),p((m+1+Math.floor(Math.random()*(s.length-1)))%s.length)},children:i.jsx(lt,{t:"Handahóf"})}),i.jsx("button",{className:"hb-btn sc hb-casH",onClick:()=>at("#linur"),children:i.jsx(lt,{t:"Vörulínur"})})]})]}),i.jsx(Ye,{className:"hb-faqL",hver:!0,children:qm.map((c,k)=>i.jsx("div",{className:`hb-faqR hb-mask${o===k?" opid":""}`,children:i.jsxs("div",{className:"hb-up",style:{...zr(k%4),"--dur":"var(--motion-reveal)"},children:[i.jsxs("button",{"aria-expanded":o===k,"aria-controls":`hb-faq-answer-${k}`,onClick:()=>d(o===k?-1:k),children:[c.q,i.jsx("i",{children:i.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12","aria-hidden":"true",children:i.jsx("path",{d:"M6 0v12M0 6h12",stroke:"currentColor",strokeWidth:"1.3"})})})]}),i.jsx("div",{className:"hb-faqB",id:`hb-faq-answer-${k}`,children:i.jsx("div",{children:i.jsx("p",{children:c.a})})})]})},c.q))})]})}const ac="Hnetur og ávextir",lc=["#BEA458","#F0CB1F","#FFFFFF","#B27FD0","#8FD06A"];function wf(){const o=T.useRef(null),d=T.useRef(null),[s,m]=T.useState(0),p=T.useRef(!1);T.useEffect(()=>{var L,P;const c=o.current;if(!c)return;let k=!0;const F=()=>{if(!k)return;const R=d.current;if(R){const I=[...R.children].reduce((Z,te)=>Z+te.getBoundingClientRect().width,0),B=parseFloat(getComputedStyle(R).fontSize),G=I>0?B*R.clientWidth/I:B;Math.abs(G-B)>.05&&(R.style.fontSize=`${G}px`)}m(Math.ceil(c.getBoundingClientRect().height))};F();const x=new ResizeObserver(F);return x.observe(c),window.addEventListener("resize",F),(L=document.fonts)==null||L.addEventListener("loadingdone",F),(P=document.fonts)==null||P.ready.then(F),()=>{var R;k=!1,x.disconnect(),window.removeEventListener("resize",F),(R=document.fonts)==null||R.removeEventListener("loadingdone",F)}},[]);const y=Sc(c=>{const k=o.current,F=d.current;if(!k||!F)return;const x=[...F.children],L=Or(),P=c.getBoundingClientRect(),R=window.innerHeight,I=P.height||1,B=L?1:Math.min(1,Math.max(0,(R-P.top)/I));xc()?k.style.transform="":k.style.transform=`translate3d(0,${(-(1-B)*100).toFixed(2)}%,0)`;const Z=.6+.04*(x.length-1);x.forEach((te,ee)=>{const Q=ef(Math.min(1,Math.max(0,(B*Z-ee*.04)/.6)));te.style.transform=`translate3d(0,${((1-Q)*110).toFixed(2)}%,0)`}),p.current=B>=.95},[s]);T.useEffect(()=>{const c=d.current;if(!c||!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let k=[];const F=()=>{k.forEach(L=>{L.style.color="",L.firstElementChild.style.transform=""}),k=[]},x=L=>{if(!p.current)return;const P=[...c.children];let R=-1,I=1/0;P.forEach((B,G)=>{const Z=B.getBoundingClientRect(),te=Math.abs(L.clientX-(Z.left+Z.width/2));te<I&&Z.width>0&&(I=te,R=G)}),!(R<0)&&(F(),[[0,.25],[-1,.125],[1,.125]].forEach(([B,G])=>{const Z=P[R+B];!Z||Z.textContent===" "||(Z.style.color=lc[(R+B)%lc.length],Z.firstElementChild.style.transform=`translateY(${(-G*60).toFixed(1)}%)`,k.push(Z))}))};return c.addEventListener("pointermove",x),c.addEventListener("pointerleave",F),()=>{c.removeEventListener("pointermove",x),c.removeEventListener("pointerleave",F)}},[]);const S=()=>{const c=Ft();c?c.scrollTo(0):window.scrollTo({top:0,behavior:Or()?"auto":"smooth"})},E=(c,k)=>{c.preventDefault(),He.open(k)};return i.jsx("div",{className:"hb-fotM",ref:y,style:{height:s||void 0},children:i.jsxs("footer",{className:"hb-fot",ref:o,children:[i.jsxs("div",{className:"hb-fotRod",children:[i.jsxs("div",{children:[i.jsxs("div",{children:[i.jsx("small",{children:"Hafa samband"}),i.jsx("a",{href:wr.simiHref,children:wr.simi}),i.jsx("br",{}),i.jsx("a",{href:`mailto:${wr.netfang}`,children:wr.netfang}),i.jsx("br",{}),i.jsx("a",{href:`mailto:${wr.fjarofloun}`,children:wr.fjarofloun})]}),i.jsxs("div",{children:[i.jsx("small",{children:"H-Berg"}),i.jsx("a",{href:"#vorur",onClick:c=>{c.preventDefault(),at("#vorur")},children:"Vörur"}),i.jsx("br",{}),i.jsx("a",{href:"#linur",onClick:c=>{c.preventDefault(),at("#linur")},children:"Vörulínur"}),i.jsx("br",{}),i.jsx("a",{href:"#ofnaemi",onClick:c=>{c.preventDefault(),at("#ofnaemi")},children:"Ofnæmisvaldar"}),i.jsx("br",{}),i.jsx("a",{href:"#spurt",onClick:c=>{c.preventDefault(),at("#spurt")},children:"Spurt og svarað"})]}),i.jsxs("div",{children:[i.jsx("small",{children:"Fyrirtæki"}),i.jsx("a",{href:"#poki",onClick:c=>{c.preventDefault(),Ne.open(!0,c)},children:"Pöntunarlisti"}),i.jsx("br",{}),i.jsx("a",{href:"#staerra",onClick:c=>E(c,{k:"staerra"}),children:"Stærri pakkningar"}),i.jsx("br",{}),i.jsx("a",{href:"#hvar",onClick:c=>E(c,{k:"hvar"}),children:"Hvar fæst H-Berg"}),i.jsx("br",{})]}),i.jsxs("div",{children:[i.jsx("small",{children:wr.logadi}),i.jsx("a",{href:wr.kort,target:"_blank",rel:"noopener noreferrer",children:wr.heimili})]})]}),i.jsxs("button",{className:"hb-fotUpp hb-casH",onClick:S,children:[i.jsx(lt,{t:"Aftur upp"})," ↑"]})]}),i.jsx("div",{className:"hb-fotMerki",children:i.jsx("a",{href:"#top","aria-label":"H-Berg, forsíða",children:i.jsx("img",{src:`${hi}hberg/brand/logo.svg${pr}`,alt:"H-Berg",width:280,height:129,loading:"lazy"})})}),i.jsx("p",{className:"hb-slogan",ref:d,"aria-label":ac,children:[...ac].map((c,k)=>i.jsx("span",{"aria-hidden":"true",children:i.jsx("span",{children:c===" "?" ":c})},k))}),i.jsxs("div",{className:"hb-fotBot",children:[i.jsx("span",{children:wr.logadi}),i.jsx("span",{children:"Fjölskyldufyrirtæki frá 2007"}),i.jsx($p,{dark:!0,className:"hb-studioBadge"})]})]})})}function jf(){return Ep(),Pp(),T.useEffect(()=>{const o=document.title,d=document.documentElement.lang;document.title="H-Berg | Hnetur og ávextir frá 2007",document.documentElement.lang="is",Mm(Sp.pappirHreint);const s=window.location.hash,m=s.length>1?window.setTimeout(()=>at(s),2800):0;return()=>{window.clearTimeout(m),Ne.open(!1),He.close(),document.title=o,document.documentElement.lang=d}},[]),i.jsxs("div",{className:"hb-root",children:[i.jsxs("style",{children:[Np,rf,bp,Lp,Op,sp,Qm,Gp,gp]}),i.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(_m)}}),i.jsx(Rp,{}),i.jsx(Fp,{}),i.jsx(wp,{}),i.jsx(dp,{}),i.jsx(Mp,{}),i.jsx(pf,{}),i.jsxs("main",{children:[i.jsx(af,{}),i.jsx(Qp,{}),i.jsx(of,{}),i.jsx(uf,{}),i.jsx(cf,{}),i.jsx(hf,{}),i.jsx(ff,{}),i.jsx(Ip,{}),i.jsx(gf,{}),i.jsx(vf,{}),i.jsx(bf,{}),i.jsx(kf,{}),i.jsx(yf,{}),i.jsx(xf,{}),i.jsx(wf,{})]})]})}function Sf(){const[o,d]=T.useState(Or);return T.useEffect(()=>{const s=matchMedia("(prefers-reduced-motion: reduce)"),m=()=>d(s.matches);return s.addEventListener("change",m),()=>s.removeEventListener("change",m)},[]),i.jsx(jf,{},String(o))}const oc=document.documentElement,Ec=o=>{oc.getAttribute("data-input")!==o&&oc.setAttribute("data-input",o)};addEventListener("pointerdown",()=>Ec("pointer"),!0);addEventListener("keydown",o=>{o.key==="Shift"||o.key==="Control"||o.key==="Alt"||o.key==="Meta"||Ec("key")},!0);class Nf extends Cm.Component{constructor(){super(...arguments);Rd(this,"state",{failed:!1})}static getDerivedStateFromError(){return{failed:!0}}render(){return this.state.failed?i.jsxs("main",{style:{padding:"15vh 6vw",fontFamily:"system-ui",color:"#1C130D"},children:[i.jsx("h1",{children:"Ekki tókst að opna síðuna."}),i.jsx("p",{children:"Reyndu aftur eða hafðu samband við H-Berg í síma 565 6500."}),i.jsx("button",{onClick:()=>location.reload(),children:"Reyna aftur"})]}):this.props.children}}zm.createRoot(document.getElementById("root")).render(i.jsx(Nf,{children:i.jsx(Sf,{})}));export{Cf as c,jm as g};
