var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,o)=>(o=n==null?{}:e(i(n)),s(r||!n||!n.__esModule||!a.call(n,`default`)?t(o,`default`,{value:n,enumerable:!0}):o,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function S(){}var C={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function ne(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return ne(e.type,t,e.props)}function w(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ie(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ae=/\/+/g;function oe(e,t){return typeof e==`object`&&e&&e.key!=null?ie(``+e.key):t.toString(36)}function se(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(S,S):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ce(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ce(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+oe(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(ae,`$&/`)+`/`),ce(o,r,i,``,function(e){return e})):o!=null&&(w(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(ae,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+oe(a,u),c+=ce(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+oe(a,u++),c+=ce(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ce(se(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function le(e,t,n){if(e==null)return e;var r=[],i=0;return ce(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ue(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},E={map:le,forEach:function(e,t,n){le(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return le(e,function(){t++}),t},toArray:function(e){return le(e,function(e){return e})||[]},only:function(e){if(!w(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=E,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return C.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!te.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ne(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)te.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ne(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=w,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ue}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=C.T,n={};C.T=n;try{var r=e(),i=C.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(S,T)}catch(e){T(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),C.T=t}},e.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},e.use=function(e){return C.H.use(e)},e.useActionState=function(e,t,n){return C.H.useActionState(e,t,n)},e.useCallback=function(e,t){return C.H.useCallback(e,t)},e.useContext=function(e){return C.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return C.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return C.H.useEffect(e,t)},e.useEffectEvent=function(e){return C.H.useEffectEvent(e)},e.useId=function(){return C.H.useId()},e.useImperativeHandle=function(e,t,n){return C.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return C.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return C.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return C.H.useMemo(e,t)},e.useOptimistic=function(e,t){return C.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return C.H.useReducer(e,t,n)},e.useRef=function(e){return C.H.useRef(e)},e.useState=function(e){return C.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return C.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return C.H.useTransition()},e.version=`19.2.8`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m){if(n(c)!==null)m=!0,ee||(ee=!0,w());else{var t=n(l);t!==null&&oe(x,t.startTime-e)}}}var ee=!1,S=-1,C=5,te=-1;function ne(){return g?!0:!(e.unstable_now()-te<C)}function re(){if(g=!1,ee){var t=e.unstable_now();te=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(S),S=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&oe(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}}}finally{i?w():ee=!1}}}var w;if(typeof y==`function`)w=function(){y(re)};else if(typeof MessageChannel<`u`){var ie=new MessageChannel,ae=ie.port2;ie.port1.onmessage=re,w=function(){ae.postMessage(null)}}else w=function(){_(re,0)};function oe(t,n){S=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(S),S=-1):h=!0,oe(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,w()))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`){if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)}},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`){if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)}},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),S=Symbol.for(`react.context`),C=Symbol.for(`react.forward_ref`),te=Symbol.for(`react.suspense`),ne=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),w=Symbol.for(`react.lazy`),ie=Symbol.for(`react.activity`),ae=Symbol.for(`react.memo_cache_sentinel`),oe=Symbol.iterator;function se(e){return typeof e!=`object`||!e?null:(e=oe&&e[oe]||e[`@@iterator`],typeof e==`function`?e:null)}var ce=Symbol.for(`react.client.reference`);function le(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ce?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case te:return`Suspense`;case ne:return`SuspenseList`;case ie:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case S:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case C:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?le(e.type)||`Memo`:t;case w:t=e._payload,e=e._init;try{return le(e(t))}catch{}}return null}var ue=Array.isArray,T=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,de={pending:!1,data:null,method:null,action:null},fe=[],pe=-1;function me(e){return{current:e}}function he(e){0>pe||(e.current=fe[pe],fe[pe]=null,pe--)}function D(e,t){pe++,fe[pe]=e.current,e.current=t}var ge=me(null),O=me(null),k=me(null),_e=me(null);function ve(e,t){switch(D(k,t),D(O,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}he(ge),D(ge,e)}function ye(){he(ge),he(O),he(k)}function A(e){e.memoizedState!==null&&D(_e,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(O,e),D(ge,n))}function be(e){O.current===e&&(he(ge),he(O)),_e.current===e&&(he(_e),Qf._currentValue=de)}var xe,Se;function Ce(e){if(xe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);xe=t&&t[1]||``,Se=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+xe+e+Se}var we=!1;function j(e,t){if(!e||we)return``;we=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{we=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ce(n):``}function Te(e,t){switch(e.tag){case 26:case 27:case 5:return Ce(e.type);case 16:return Ce(`Lazy`);case 13:return e.child!==t&&t!==null?Ce(`Suspense Fallback`):Ce(`Suspense`);case 19:return Ce(`SuspenseList`);case 0:case 15:return j(e.type,!1);case 11:return j(e.type.render,!1);case 1:return j(e.type,!0);case 31:return Ce(`Activity`);default:return``}}function Ee(e){try{var t=``,n=null;do t+=Te(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var De=Object.prototype.hasOwnProperty,Oe=t.unstable_scheduleCallback,ke=t.unstable_cancelCallback,Ae=t.unstable_shouldYield,je=t.unstable_requestPaint,Me=t.unstable_now,Ne=t.unstable_getCurrentPriorityLevel,Pe=t.unstable_ImmediatePriority,Fe=t.unstable_UserBlockingPriority,Ie=t.unstable_NormalPriority,Le=t.unstable_LowPriority,Re=t.unstable_IdlePriority,ze=t.log,Be=t.unstable_setDisableYieldValue,Ve=null,He=null;function Ue(e){if(typeof ze==`function`&&Be(e),He&&typeof He.setStrictMode==`function`)try{He.setStrictMode(Ve,e)}catch{}}var We=Math.clz32?Math.clz32:qe,Ge=Math.log,Ke=Math.LN2;function qe(e){return e>>>=0,e===0?32:31-(Ge(e)/Ke|0)|0}var Je=256,Ye=262144,Xe=4194304;function Ze(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Qe(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ze(n))):i=Ze(o):i=Ze(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ze(n))):i=Ze(o)):i=Ze(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function $e(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function et(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tt(){var e=Xe;return Xe<<=1,!(Xe&62914560)&&(Xe=4194304),e}function nt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function it(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-We(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&at(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function at(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-We(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=E.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function dt(e,t){var n=E.p;try{return E.p=e,t()}finally{E.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[pt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return De.call(Nt,e)?!0:De.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t)){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e!==n&&(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Wt=/[\n"\\]/g;function Gt(e){return e.replace(Wt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Kt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Jt(e,o,Rt(n)):Jt(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function qt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function Jt(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Yt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Zt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ue(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Qt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $t=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function en(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||$t.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function tn(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&en(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&en(e,o,t[o])}function nn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var rn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),an=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function on(e){return an.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function sn(){}var cn=null;function ln(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var un=null,dn=null;function fn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Kt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Gt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));Kt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:Xt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Yt(e,!!n.multiple,t,!1)}}}var pn=!1;function mn(e,t,n){if(pn)return e(t,n);pn=!0;try{return e(t)}finally{if(pn=!1,(un!==null||dn!==null)&&(bu(),un&&(t=un,e=dn,dn=un=null,fn(t),e)))for(t=0;t<e.length;t++)fn(e[t])}}function hn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=e!==`button`&&e!==`input`&&e!==`select`&&e!==`textarea`),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var gn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),_n=!1;if(gn)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){_n=!0}}),window.addEventListener(`test`,vn,vn),window.removeEventListener(`test`,vn,vn)}catch{_n=!1}var yn=null,bn=null,xn=null;function Sn(){if(xn)return xn;var e,t=bn,n=t.length,r,i=`value`in yn?yn.value:yn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return xn=i.slice(e,1<r?1-r:void 0)}function Cn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wn(){return!0}function Tn(){return!1}function En(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?wn:Tn,this.isPropagationStopped=Tn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=wn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=wn)},persist:function(){},isPersistent:wn}),t}var Dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=En(Dn),kn=h({},Dn,{view:0,detail:0}),An=En(kn),jn,Mn,Nn,Pn=h({},kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Nn&&(Nn&&e.type===`mousemove`?(jn=e.screenX-Nn.screenX,Mn=e.screenY-Nn.screenY):Mn=jn=0,Nn=e),jn)},movementY:function(e){return`movementY`in e?e.movementY:Mn}}),Fn=En(Pn),In=En(h({},Pn,{dataTransfer:0})),Ln=En(h({},kn,{relatedTarget:0})),Rn=En(h({},Dn,{animationName:0,elapsedTime:0,pseudoElement:0})),zn=En(h({},Dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Bn=En(h({},Dn,{data:0})),Vn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Hn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Un={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Wn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Un[e])?!!t[e]:!1}function Gn(){return Wn}var Kn=En(h({},kn,{key:function(e){if(e.key){var t=Vn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Cn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Hn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gn,charCode:function(e){return e.type===`keypress`?Cn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Cn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),qn=En(h({},Pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Jn=En(h({},kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gn})),Yn=En(h({},Dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Xn=En(h({},Pn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Zn=En(h({},Dn,{newState:0,oldState:0})),Qn=[9,13,27,32],$n=gn&&`CompositionEvent`in window,er=null;gn&&`documentMode`in document&&(er=document.documentMode);var tr=gn&&`TextEvent`in window&&!er,nr=gn&&(!$n||er&&8<er&&11>=er),rr=` `,ir=!1;function ar(e,t){switch(e){case`keyup`:return Qn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function or(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var sr=!1;function cr(e,t){switch(e){case`compositionend`:return or(t);case`keypress`:return t.which===32?(ir=!0,rr):null;case`textInput`:return e=t.data,e===rr&&ir?null:e;default:return null}}function lr(e,t){if(sr)return e===`compositionend`||!$n&&ar(e,t)?(e=Sn(),xn=bn=yn=null,sr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return nr&&t.locale!==`ko`?null:t.data;default:return null}}var ur={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!ur[e.type]:t===`textarea`}function fr(e,t,n,r){un?dn?dn.push(r):dn=[r]:un=r,t=Ed(t,`onChange`),0<t.length&&(n=new On(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var pr=null,mr=null;function hr(e){yd(e,0)}function gr(e){if(Ht(wt(e)))return e}function _r(e,t){if(e===`change`)return t}var vr=!1;if(gn){var yr;if(gn){var br=`oninput`in document;if(!br){var xr=document.createElement(`div`);xr.setAttribute(`oninput`,`return;`),br=typeof xr.oninput==`function`}yr=br}else yr=!1;vr=yr&&(!document.documentMode||9<document.documentMode)}function Sr(){pr&&(pr.detachEvent(`onpropertychange`,Cr),mr=pr=null)}function Cr(e){if(e.propertyName===`value`&&gr(mr)){var t=[];fr(t,mr,e,ln(e)),mn(hr,t)}}function wr(e,t,n){e===`focusin`?(Sr(),pr=t,mr=n,pr.attachEvent(`onpropertychange`,Cr)):e===`focusout`&&Sr()}function Tr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return gr(mr)}function Er(e,t){if(e===`click`)return gr(t)}function Dr(e,t){if(e===`input`||e===`change`)return gr(t)}function Or(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var kr=typeof Object.is==`function`?Object.is:Or;function Ar(e,t){if(kr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!De.call(t,i)||!kr(e[i],t[i]))return!1}return!0}function jr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mr(e,t){var n=jr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=jr(n)}}function Nr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function Fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ir=gn&&`documentMode`in document&&11>=document.documentMode,Lr=null,Rr=null,zr=null,Br=!1;function Vr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Br||Lr==null||Lr!==Ut(r)||(r=Lr,`selectionStart`in r&&Fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zr&&Ar(zr,r)||(zr=r,r=Ed(Rr,`onSelect`),0<r.length&&(t=new On(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Lr)))}function Hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Ur={animationend:Hr(`Animation`,`AnimationEnd`),animationiteration:Hr(`Animation`,`AnimationIteration`),animationstart:Hr(`Animation`,`AnimationStart`),transitionrun:Hr(`Transition`,`TransitionRun`),transitionstart:Hr(`Transition`,`TransitionStart`),transitioncancel:Hr(`Transition`,`TransitionCancel`),transitionend:Hr(`Transition`,`TransitionEnd`)},Wr={},Gr={};gn&&(Gr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),`TransitionEvent`in window||delete Ur.transitionend.transition);function Kr(e){if(Wr[e])return Wr[e];if(!Ur[e])return e;var t=Ur[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Gr)return Wr[e]=t[n];return e}var qr=Kr(`animationend`),Jr=Kr(`animationiteration`),Yr=Kr(`animationstart`),Xr=Kr(`transitionrun`),Zr=Kr(`transitionstart`),Qr=Kr(`transitioncancel`),$r=Kr(`transitionend`),ei=new Map,ti=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ti.push(`scrollEnd`);function ni(e,t){ei.set(e,t),kt(t,[e])}var ri=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ii=[],ai=0,oi=0;function si(){for(var e=ai,t=oi=ai=0;t<e;){var n=ii[t];ii[t++]=null;var r=ii[t];ii[t++]=null;var i=ii[t];ii[t++]=null;var a=ii[t];if(ii[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&di(n,i,a)}}function ci(e,t,n,r){ii[ai++]=e,ii[ai++]=t,ii[ai++]=n,ii[ai++]=r,oi|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function li(e,t,n,r){return ci(e,t,n,r),fi(e)}function ui(e,t){return ci(e,null,null,t),fi(e)}function di(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-We(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function fi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var pi={};function mi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(e,t,n,r){return new mi(e,t,n,r)}function gi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _i(e,t){var n=e.alternate;return n===null?(n=hi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)gi(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ie:return e=hi(31,n,t,a),e.elementType=ie,e.lanes=o,e;case y:return bi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=hi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case te:return e=hi(13,n,t,a),e.elementType=te,e.lanes=o,e;case ne:return e=hi(19,n,t,a),e.elementType=ne,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case S:s=10;break a;case ee:s=9;break a;case C:s=11;break a;case re:s=14;break a;case w:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=hi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function bi(e,t,n,r){return e=hi(7,e,r,t),e.lanes=n,e}function xi(e,t,n){return e=hi(6,e,null,t),e.lanes=n,e}function Si(e){var t=hi(18,null,null,0);return t.stateNode=e,t}function Ci(e,t,n){return t=hi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var wi=new WeakMap;function Ti(e,t){if(typeof e==`object`&&e){var n=wi.get(e);return n===void 0?(t={value:e,source:t,stack:Ee(t)},wi.set(e,t),t):n}return{value:e,source:t,stack:Ee(t)}}var Ei=[],Di=0,Oi=null,ki=0,Ai=[],ji=0,Mi=null,Ni=1,Pi=``;function Fi(e,t){Ei[Di++]=ki,Ei[Di++]=Oi,Oi=e,ki=t}function Ii(e,t,n){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Mi=e;var r=Ni;e=Pi;var i=32-We(r)-1;r&=~(1<<i),n+=1;var a=32-We(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ni=1<<32-We(t)+i|n<<i|r,Pi=a+e}else Ni=1<<a|n<<i|r,Pi=e}function Li(e){e.return!==null&&(Fi(e,1),Ii(e,1,0))}function Ri(e){for(;e===Oi;)Oi=Ei[--Di],Ei[Di]=null,ki=Ei[--Di],Ei[Di]=null;for(;e===Mi;)Mi=Ai[--ji],Ai[ji]=null,Pi=Ai[--ji],Ai[ji]=null,Ni=Ai[--ji],Ai[ji]=null}function zi(e,t){Ai[ji++]=Ni,Ai[ji++]=Pi,Ai[ji++]=Mi,Ni=t.id,Pi=t.overflow,Mi=e}var Bi=null,M=null,N=!1,Vi=null,Hi=!1,Ui=Error(i(519));function Wi(e){throw Xi(Ti(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ui}function Gi(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),qt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Zt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=sn),t=!0):t=!1,t||Wi(e,!0)}function Ki(e){for(Bi=e.return;Bi;)switch(Bi.tag){case 5:case 31:case 13:Hi=!1;return;case 27:case 3:Hi=!0;return;default:Bi=Bi.return}}function qi(e){if(e!==Bi)return!1;if(!N)return Ki(e),N=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=n===`form`||n===`button`||Ud(e.type,e.memoizedProps)),n=!n),n&&M&&Wi(e),Ki(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));M=uf(e)}else t===27?(t=M,Zd(e.type)?(e=lf,lf=null,M=e):M=t):M=Bi?cf(e.stateNode.nextSibling):null;return!0}function Ji(){M=Bi=null,N=!1}function Yi(){var e=Vi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),Vi=null),e}function Xi(e){Vi===null?Vi=[e]:Vi.push(e)}var Zi=me(null),Qi=null,$i=null;function ea(e,t,n){D(Zi,t._currentValue),t._currentValue=n}function ta(e){e._currentValue=Zi.current,he(Zi)}function na(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ra(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),na(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),na(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function ia(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;kr(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ra(t,e,n,r),t.flags|=262144}function aa(e){for(e=e.firstContext;e!==null;){if(!kr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function oa(e){Qi=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function sa(e){return la(Qi,e)}function ca(e,t){return Qi===null&&oa(e),la(e,t)}function la(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},$i===null){if(e===null)throw Error(i(308));$i=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else $i=$i.next=t;return n}var ua=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},da=t.unstable_scheduleCallback,fa=t.unstable_NormalPriority,P={$$typeof:S,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pa(){return{controller:new ua,data:new Map,refCount:0}}function ma(e){e.refCount--,e.refCount===0&&da(fa,function(){e.controller.abort()})}var ha=null,ga=0,_a=0,va=null;function ya(e,t){if(ha===null){var n=ha=[];ga=0,_a=dd(),va={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ga++,t.then(ba,ba),t}function ba(){if(--ga===0&&ha!==null){va!==null&&(va.status=`fulfilled`);var e=ha;ha=null,_a=0,va=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function xa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Sa=T.S;T.S=function(e,t){eu=Me(),typeof t==`object`&&t&&typeof t.then==`function`&&ya(e,t),Sa!==null&&Sa(e,t)};var Ca=me(null);function wa(){var e=Ca.current;return e===null?K.pooledCache:e}function Ta(e,t){t===null?D(Ca,Ca.current):D(Ca,t.pool)}function Ea(){var e=wa();return e===null?null:{parent:P._currentValue,pool:e}}var Da=Error(i(460)),Oa=Error(i(474)),ka=Error(i(542)),Aa={then:function(){}};function ja(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ma(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(sn,sn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e;default:if(typeof t.status==`string`)t.then(sn,sn);else{if(e=K,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ia(e),e}throw Pa=t,Da}}function Na(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Pa=e,Da):e}}var Pa=null;function Fa(){if(Pa===null)throw Error(i(459));var e=Pa;return Pa=null,e}function Ia(e){if(e===Da||e===ka)throw Error(i(483))}var La=null,Ra=0;function za(e){var t=Ra;return Ra+=1,La===null&&(La=[]),Ma(La,e,t)}function Ba(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Va(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ha(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=_i(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===w&&Na(i)===t.type)?(t=a(t,n.props),Ba(t,n),t.return=e,t):(t=yi(n.type,n.key,n.props,null,e.mode,r),Ba(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ci(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=bi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=xi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=yi(t.type,t.key,t.props,null,e.mode,n),Ba(n,t),n.return=e,n;case v:return t=Ci(t,e.mode,n),t.return=e,t;case w:return t=Na(t),f(e,t,n)}if(ue(t)||se(t))return t=bi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,za(t),n);if(t.$$typeof===S)return f(e,ca(e,t),n);Va(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case w:return n=Na(n),p(e,t,n,r)}if(ue(n)||se(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,za(n),r);if(n.$$typeof===S)return p(e,t,ca(e,n),r);Va(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case w:return r=Na(r),m(e,t,n,r,i)}if(ue(r)||se(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,za(r),i);if(r.$$typeof===S)return m(e,t,n,ca(t,r),i);Va(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),N&&Fi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return N&&Fi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),N&&Fi(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),N&&Fi(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return N&&Fi(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),N&&Fi(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===w&&Na(l)===r.type){n(e,r.sibling),c=a(r,o.props),Ba(c,o),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}o.type===y?(c=bi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=yi(o.type,o.key,o.props,null,e.mode,c),Ba(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l){if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}n(e,r);break}t(e,r),r=r.sibling}c=Ci(o,e.mode,c),c.return=e,e=c}return s(e);case w:return o=Na(o),b(e,r,o,c)}if(ue(o))return h(e,r,o,c);if(se(o)){if(l=se(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,za(o),c);if(o.$$typeof===S)return b(e,r,ca(e,o),c);Va(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=xi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{Ra=0;var i=b(e,t,n,r);return La=null,i}catch(t){if(t===Da||t===ka)throw t;var a=hi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ua=Ha(!0),Wa=Ha(!1),Ga=!1;function Ka(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function qa(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=fi(e),di(e,null,n),t}return ci(e,r,t,n),fi(e)}function Xa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Za(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Qa=!1;function $a(){if(Qa){var e=va;if(e!==null)throw e}}function eo(e,t,n,r){Qa=!1;var i=e.updateQueue;Ga=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===_a&&(Qa=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ga=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function to(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function no(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)to(n[e],t)}var ro=me(null),io=me(0);function ao(e,t){e=Wl,D(io,e),D(ro,t),Wl=e|t.baseLanes}function oo(){D(io,Wl),D(ro,ro.current)}function so(){Wl=io.current,he(ro),he(io)}var co=me(null),lo=null;function uo(e){var t=e.alternate;D(F,F.current&1),D(co,e),lo===null&&(t===null||ro.current!==null||t.memoizedState!==null)&&(lo=e)}function fo(e){D(F,F.current),D(co,e),lo===null&&(lo=e)}function po(e){e.tag===22?(D(F,F.current),D(co,e),lo===null&&(lo=e)):mo(e)}function mo(){D(F,F.current),D(co,co.current)}function ho(e){he(co),lo===e&&(lo=null),he(F)}var F=me(0);function go(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,I=null,L=null,R=null,vo=!1,yo=!1,bo=!1,xo=0,So=0,Co=null,wo=0;function z(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!kr(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return _o=a,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,T.H=e===null||e.memoizedState===null?Hs:Us,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){T.H=Vs;var t=L!==null&&L.next!==null;if(_o=0,R=L=I=null,vo=!1,So=0,Co=null,t)throw Error(i(300));e===null||V||(e=e.dependencies,e!==null&&aa(e)&&(V=!0))}function Oo(e,t,n,r){I=e;var a=0;do{if(yo&&(Co=null),So=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,R=L=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}T.H=Ws,o=t(n,r)}while(yo);return o}function ko(){var e=T.H,t=e.useState()[0];return t=typeof t.then==`function`?Fo(t):t,e=e.useState()[0],(L===null?null:L.memoizedState)!==e&&(I.flags|=1024),t}function Ao(){var e=xo!==0;return xo=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}_o=0,R=L=I=null,yo=!1,So=xo=0,Co=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return R===null?I.memoizedState=R=e:R=R.next=e,R}function B(){if(L===null){var e=I.alternate;e=e===null?null:e.memoizedState}else e=L.next;var t=R===null?I.memoizedState:R.next;if(t!==null)R=t,L=e;else{if(e===null)throw I.alternate===null?Error(i(467)):Error(i(310));L=e,e={memoizedState:L.memoizedState,baseState:L.baseState,baseQueue:L.baseQueue,queue:L.queue,next:null},R===null?I.memoizedState=R=e:R=R.next=e}return R}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fo(e){var t=So;return So+=1,Co===null&&(Co=[]),e=Ma(Co,e,t),t=I,(R===null?t.memoizedState:R.next)===null&&(t=t.alternate,T.H=t===null||t.memoizedState===null?Hs:Us),e}function Io(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Fo(e);if(e.$$typeof===S)return sa(e)}throw Error(i(438,String(e)))}function Lo(e){var t=null,n=I.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=I.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Po(),I.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ae;return t.index++,n}function Ro(e,t){return typeof t==`function`?t(e):t}function zo(e){return Bo(B(),L,e)}function Bo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(_o&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===_a&&(d=!0);else if((_o&p)===p){u=u.next,p===_a&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,I.lanes|=p,Gl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,I.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!kr(o,e.memoizedState)&&(V=!0,d&&(n=va,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Vo(e){var t=B(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);kr(o,t.memoizedState)||(V=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ho(e,t,n){var r=I,a=B(),o=N;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!kr((L||a).memoizedState,n);if(s&&(a.memoizedState=n,V=!0),a=a.queue,ps(Go.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||R!==null&&R.memoizedState.tag&1){if(r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,a,n,t),null),K===null)throw Error(i(349));o||_o&127||Uo(r,t,n)}return n}function Uo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=I.updateQueue,t===null?(t=Po(),I.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wo(e,t,n,r){t.value=n,t.getSnapshot=r,Ko(t)&&qo(e)}function Go(e,t,n){return n(function(){Ko(t)&&qo(e)})}function Ko(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!kr(e,n)}catch{return!0}}function qo(e){var t=ui(e,2);t!==null&&hu(t,e,2)}function Jo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:e},t}function Yo(e,t,n,r){return e.baseState=n,Bo(e,L,typeof r==`function`?r:Ro)}function Xo(e,t,n,r,a){if(Rs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};T.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Zo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Zo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=T.T,o={};T.T=o;try{var s=n(i,r),c=T.S;c!==null&&c(o,s),Qo(e,t,s)}catch(n){es(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),T.T=a}}else try{a=n(i,r),Qo(e,t,a)}catch(n){es(e,t,n)}}function Qo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){$o(e,t,n)},function(n){return es(e,t,n)}):$o(e,t,n)}function $o(e,t,n){t.status=`fulfilled`,t.value=n,ts(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Zo(e,n)))}function es(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ts(t),t=t.next;while(t!==r)}e.action=null}function ts(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ns(e,t){return t}function rs(e,t){if(N){var n=K.formState;if(n!==null){a:{var r=I;if(N){if(M){b:{for(var i=M,a=Hi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){M=cf(i.nextSibling),r=i.data===`F!`;break a}}Wi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ns,lastRenderedState:t},n.queue=r,n=Fs.bind(null,I,r),r.dispatch=n,r=Jo(!1),a=Ls.bind(null,I,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Xo.bind(null,I,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function is(e){return as(B(),L,e)}function as(e,t,n){if(t=Bo(e,t,ns)[0],e=zo(Ro)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Fo(t)}catch(e){throw e===Da?ka:e}else r=t;t=B();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(I.flags|=2048,cs(9,{destroy:void 0},os.bind(null,i,n),null)),[r,a,e]}function os(e,t){e.action=t}function ss(e){var t=B(),n=L;if(n!==null)return as(t,n,e);B(),t=t.memoizedState,n=B();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function cs(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=I.updateQueue,t===null&&(t=Po(),I.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ls(){return B().memoizedState}function us(e,t,n,r){var i=No();I.flags|=e,i.memoizedState=cs(1|t,{destroy:void 0},n,r===void 0?null:r)}function ds(e,t,n,r){var i=B();r=r===void 0?null:r;var a=i.memoizedState.inst;L!==null&&r!==null&&To(r,L.memoizedState.deps)?i.memoizedState=cs(t,a,n,r):(I.flags|=e,i.memoizedState=cs(1|t,a,n,r))}function fs(e,t){us(8390656,8,e,t)}function ps(e,t){ds(2048,8,e,t)}function ms(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=Po(),I.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function hs(e){var t=B().memoizedState;return ms({ref:t,nextImpl:e}),function(){if(G&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function gs(e,t){return ds(4,2,e,t)}function _s(e,t){return ds(4,4,e,t)}function vs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ys(e,t,n){n=n==null?null:n.concat([e]),ds(4,4,vs.bind(null,t,e),n)}function bs(){}function xs(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ss(e,t){var n=B();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r}function Cs(e,t,n){return n===void 0||_o&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),I.lanes|=e,Gl|=e,n)}function ws(e,t,n,r){return kr(n,t)?n:ro.current===null?!(_o&42)||_o&1073741824&&!(J&261930)?(V=!0,e.memoizedState=n):(e=mu(),I.lanes|=e,Gl|=e,t):(e=Cs(e,n,r),kr(e,t)||(V=!0),e)}function Ts(e,t,n,r,i){var a=E.p;E.p=a!==0&&8>a?a:8;var o=T.T,s={};T.T=s,Ls(e,!1,t,n);try{var c=i(),l=T.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Is(e,t,xa(c,r),pu(e)):Is(e,t,r,pu(e))}catch(n){Is(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{E.p=a,o!==null&&s.types!==null&&(o.types=s.types),T.T=o}}function Es(){}function Ds(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=Os(e).queue;Ts(e,a,t,de,n===null?Es:function(){return ks(e),n(r)})}function Os(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:de,baseState:de,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:de},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=Os(e);t.next===null&&(t=e.alternate.memoizedState),Is(e,t.next.queue,{},pu())}function As(){return sa(Qf)}function js(){return B().memoizedState}function Ms(){return B().memoizedState}function Ns(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ja(n);var r=Ya(t,e,n);r!==null&&(hu(r,t,n),Xa(r,t,n)),t={cache:pa()},e.payload=t;return}t=t.return}}function Ps(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Rs(e)?zs(t,n):(n=li(e,t,n,r),n!==null&&(hu(n,e,r),Bs(n,t,r)))}function Fs(e,t,n){Is(e,t,n,pu())}function Is(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rs(e))zs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,kr(s,o))return ci(e,t,i,0),K===null&&si(),!1}catch{}if(n=li(e,t,i,r),n!==null)return hu(n,e,r),Bs(n,t,r),!0}return!1}function Ls(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Rs(e)){if(t)throw Error(i(479))}else t=li(e,n,r,2),t!==null&&hu(t,e,2)}function Rs(e){var t=e.alternate;return e===I||t!==null&&t===I}function zs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Bs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var Vs={readContext:sa,use:Io,useCallback:z,useContext:z,useEffect:z,useImperativeHandle:z,useLayoutEffect:z,useInsertionEffect:z,useMemo:z,useReducer:z,useRef:z,useState:z,useDebugValue:z,useDeferredValue:z,useTransition:z,useSyncExternalStore:z,useId:z,useHostTransitionStatus:z,useFormState:z,useActionState:z,useOptimistic:z,useMemoCache:z,useCacheRefresh:z};Vs.useEffectEvent=z;var Hs={readContext:sa,use:Io,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:sa,useEffect:fs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),us(4194308,4,vs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return us(4194308,4,e,t)},useInsertionEffect:function(e,t){us(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){Ue(!0);try{n(t)}finally{Ue(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ps.bind(null,I,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,n=Fs.bind(null,I,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:bs,useDeferredValue:function(e,t){return Cs(No(),e,t)},useTransition:function(){var e=Jo(!1);return e=Ts.bind(null,I,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=I,a=No();if(N){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),K===null)throw Error(i(349));J&127||Uo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,fs(Go.bind(null,r,o,e),[e]),r.flags|=2048,cs(9,{destroy:void 0},Wo.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=K.identifierPrefix;if(N){var n=Pi,r=Ni;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=xo++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=wo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:As,useFormState:rs,useActionState:rs,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ls.bind(null,I,!0,n),n.dispatch=t,[e,t]},useMemoCache:Lo,useCacheRefresh:function(){return No().memoizedState=Ns.bind(null,I)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(G&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Us={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:zo,useRef:ls,useState:function(){return zo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){return ws(B(),L.memoizedState,e,t)},useTransition:function(){var e=zo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:is,useActionState:is,useOptimistic:function(e,t){return Yo(B(),L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Us.useEffectEvent=hs;var Ws={readContext:sa,use:Io,useCallback:xs,useContext:sa,useEffect:ps,useImperativeHandle:ys,useInsertionEffect:gs,useLayoutEffect:_s,useMemo:Ss,useReducer:Vo,useRef:ls,useState:function(){return Vo(Ro)},useDebugValue:bs,useDeferredValue:function(e,t){var n=B();return L===null?Cs(n,e,t):ws(n,L.memoizedState,e,t)},useTransition:function(){var e=Vo(Ro)[0],t=B().memoizedState;return[typeof e==`boolean`?e:Fo(e),t]},useSyncExternalStore:Ho,useId:js,useHostTransitionStatus:As,useFormState:ss,useActionState:ss,useOptimistic:function(e,t){var n=B();return L===null?(n.baseState=e,[e,n.queue.dispatch]):Yo(n,L,e,t)},useMemoCache:Lo,useCacheRefresh:Ms};Ws.useEffectEvent=hs;function Gs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ks={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ja(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ya(e,i,r),t!==null&&(hu(t,e,r),Xa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ja(n);r.tag=2,t!=null&&(r.callback=t),t=Ya(e,r,n),t!==null&&(hu(t,e,n),Xa(t,e,n))}};function qs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Ar(n,r)||!Ar(i,a):!0}function Js(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ks.enqueueReplaceState(t,t.state,null)}function Ys(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Xs(e){ri(e)}function Zs(e){console.error(e)}function Qs(e){ri(e)}function $s(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function ec(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){return n=Ja(n),n.tag=3,n.payload={element:null},n.callback=function(){$s(e,t)},n}function nc(e){return e=Ja(e),e.tag=3,e}function rc(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){ec(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){ec(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ic(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&ia(t,n,a,!0),n=co.current,n!==null){switch(n.tag){case 31:case 13:return lo===null?Du():n.alternate===null&&X===0&&(X=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===Aa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(N)return t=co.current,t===null?(r!==Ui&&(t=Error(i(423),{cause:r}),Xi(Ti(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ti(r,n),a=tc(e.stateNode,r,a),Za(e,a),X!==4&&(X=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Ui&&(e=Error(i(422),{cause:r}),Xi(Ti(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ti(o,n),Xl===null?Xl=[o]:Xl.push(o),X!==4&&(X=2),t===null)return!0;r=Ti(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=tc(n.stateNode,r,e),Za(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=nc(a),rc(a,e,n,r),Za(n,a),!1}n=n.return}while(n!==null);return!1}var ac=Error(i(461)),V=!1;function oc(e,t,n,r){t.child=e===null?Wa(t,null,n,r):Ua(t,e.child,n,r)}function sc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return oa(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&s&&Li(t),t.flags|=1,oc(e,t,r,i),t.child)}function cc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!gi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,lc(e,t,a,r,i)):(e=yi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Mc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Ar:n,n(o,r)&&e.ref===t.ref)return jc(e,t,i)}return t.flags|=1,e=_i(a,r),e.ref=t.ref,e.return=t,t.child=e}function lc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ar(a,r)&&e.ref===t.ref){if(V=!1,t.pendingProps=r=a,Mc(e,i))e.flags&131072&&(V=!0);else return t.lanes=e.lanes,jc(e,t,i)}}return _c(e,t,n,r,i)}function uc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return fc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ta(t,a===null?null:a.cachePool),a===null?oo():ao(t,a),po(t);else return r=t.lanes=536870912,fc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ta(t,null),oo(),mo(t)):(Ta(t,a.cachePool),ao(t,a),mo(t),t.memoizedState=null);return oc(e,t,i,n),t.child}function dc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function fc(e,t,n,r,i){var a=wa();return a=a===null?null:{parent:P._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ta(t,null),oo(),po(t),e!==null&&ia(e,t,r,!0),t.childLanes=i,null}function pc(e,t){return t=Ec({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function mc(e,t,n){return Ua(t,e.child,null,n),e=pc(t,t.pendingProps),e.flags|=2,ho(t),t.memoizedState=null,e}function hc(e,t,n){var r=t.pendingProps,a=!!(t.flags&128);if(t.flags&=-129,e===null){if(N){if(r.mode===`hidden`)return e=pc(t,r),t.lanes=536870912,dc(null,e);if(fo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return t.lanes=536870912,null}return pc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(fo(t),a){if(t.flags&256)t.flags&=-257,t=mc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558))}else if(V||ia(e,t,n,!1),a=(n&e.childLanes)!==0,V||a){if(r=K,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ui(e,s),hu(r,e,s),ac;Du(),t=mc(e,t,n)}else e=o.treeContext,M=cf(s.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=pc(t,r),t.flags|=4096;return t}return e=_i(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function _c(e,t,n,r,i){return oa(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!V?(jo(e,t,i),jc(e,t,i)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,i),t.child)}function vc(e,t,n,r,i,a){return oa(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!V?(jo(e,t,a),jc(e,t,a)):(N&&r&&Li(t),t.flags|=1,oc(e,t,n,a),t.child)}function yc(e,t,n,r,i){if(oa(t),t.stateNode===null){var a=pi,o=n.contextType;typeof o==`object`&&o&&(a=sa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Ks,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ka(t),o=n.contextType,a.context=typeof o==`object`&&o?sa(o):pi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Gs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Ks.enqueueReplaceState(a,a.state,null),eo(t,r,a,i),$a(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Ys(n,s);a.props=c;var l=a.context,u=n.contextType;o=pi,typeof u==`object`&&u&&(o=sa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Js(t,a,r,o),Ga=!1;var f=t.memoizedState;a.state=f,eo(t,r,a,i),$a(),l=t.memoizedState,s||f!==l||Ga?(typeof d==`function`&&(Gs(t,n,d,r),l=t.memoizedState),(c=Ga||qs(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,qa(e,t),o=t.memoizedProps,u=Ys(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=pi,typeof l==`object`&&l&&(c=sa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Js(t,a,r,c),Ga=!1,f=t.memoizedState,a.state=f,eo(t,r,a,i),$a();var p=t.memoizedState;o!==d||f!==p||Ga||e!==null&&e.dependencies!==null&&aa(e.dependencies)?(typeof s==`function`&&(Gs(t,n,s,r),p=t.memoizedState),(u=Ga||qs(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&aa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,gc(e,t),r=!!(t.flags&128),a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ua(t,e.child,null,i),t.child=Ua(t,null,n,i)):oc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=jc(e,t,i),e}function bc(e,t,n,r){return Ji(),t.flags|=256,oc(e,t,n,r),t.child}var xc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sc(e){return{baseLanes:e,cachePool:Ea()}}function Cc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function wc(e,t,n){var r=t.pendingProps,a=!1,o=!!(t.flags&128),s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:!!(F.current&2)),s&&(a=!0,t.flags&=-129),s=!!(t.flags&32),t.flags&=-33,e===null){if(N){if(a?uo(t):mo(t),(e=M)?(e=rf(e,Hi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Mi===null?null:{id:Ni,overflow:Pi},retryLane:536870912,hydrationErrors:null},n=Si(e),n.return=t,t.child=n,Bi=t,M=null)):e=null,e===null)throw Wi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(mo(t),a=t.mode,c=Ec({mode:`hidden`,children:c},a),r=bi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(null,r)):(uo(t),Tc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(uo(t),t.flags&=-257,t=Dc(e,t,n)):t.memoizedState===null?(mo(t),c=r.fallback,a=t.mode,r=Ec({mode:`visible`,children:r.children},a),c=bi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ua(t,e.child,null,n),r=t.child,r.memoizedState=Sc(n),r.childLanes=Cc(e,s,n),t.memoizedState=xc,t=dc(null,r)):(mo(t),t.child=e.child,t.flags|=128,t=null);else if(uo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Xi({value:r,source:null,stack:null}),t=Dc(e,t,n)}else if(V||ia(e,t,n,!1),s=(n&e.childLanes)!==0,V||s){if(s=K,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ui(e,r),hu(s,e,r),ac;af(c)||Du(),t=Dc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,M=cf(c.nextSibling),Bi=t,N=!0,Vi=null,Hi=!1,e!==null&&zi(t,e),t=Tc(t,r.children),t.flags|=4096);return t}return a?(mo(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=_i(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=bi(c,a,n,null),c.flags|=2):c=_i(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,dc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Sc(n):(a=c.cachePool,a===null?a=Ea():(l=P._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=Cc(e,s,n),t.memoizedState=xc,dc(e.child,r)):(uo(t),n=e.child,e=n.sibling,n=_i(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Tc(e,t){return t=Ec({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Ec(e,t){return e=hi(22,e,null,t),e.lanes=0,e}function Dc(e,t,n){return Ua(t,e.child,null,n),e=Tc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Oc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),na(e.return,t,n)}function kc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=F.current,s=!!(o&2);if(s?(o=o&1|2,t.flags|=128):o&=1,D(F,o),oc(e,t,r,n),r=N?ki:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oc(e,n,t);else if(e.tag===19)Oc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&go(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),kc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&go(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}kc(t,!0,n,null,a,r);break;case`together`:kc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function jc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0){if(e!==null){if(ia(e,t,n,!1),(n&t.childLanes)===0)return null}else return null}if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=_i(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_i(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Mc(e,t){return(e.lanes&t)!==0||(e=e.dependencies,!!(e!==null&&aa(e)))}function Nc(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),ea(t,P,e.memoizedState.cache),Ji();break;case 27:case 5:A(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,fo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(uo(t),e=jc(e,t,n),e===null?null:e.sibling):wc(e,t,n):(uo(t),t.flags|=128,null);uo(t);break;case 19:var i=!!(e.flags&128);if(r=(n&t.childLanes)!==0,r||=(ia(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(F,F.current),r)break;return null;case 22:return t.lanes=0,uc(e,t,n,t.pendingProps);case 24:ea(t,P,e.memoizedState.cache)}return jc(e,t,n)}function Pc(e,t,n){if(e!==null){if(e.memoizedProps!==t.pendingProps)V=!0;else{if(!Mc(e,n)&&!(t.flags&128))return V=!1,Nc(e,t,n);V=!!(e.flags&131072)}}else V=!1,N&&t.flags&1048576&&Ii(t,ki,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Na(t.elementType),t.type=e,typeof e==`function`)gi(e)?(r=Ys(e,r),t.tag=1,t=yc(null,t,e,r,n)):(t.tag=0,t=_c(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===C){t.tag=11,t=sc(null,t,e,r,n);break a}if(a===re){t.tag=14,t=cc(null,t,e,r,n);break a}}throw t=le(e)||e,Error(i(306,t,``))}}return t;case 0:return _c(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Ys(r,t.pendingProps),yc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,qa(e,t),eo(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ea(t,P,r),r!==o.cache&&ra(t,[P],n,!0),$a(),r=s.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=bc(e,t,r,n);break a}if(r!==a){a=Ti(Error(i(424)),t),Xi(a),t=bc(e,t,r,n);break a}switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(M=cf(e.firstChild),Bi=t,N=!0,Vi=null,Hi=!0,n=Wa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ji(),r===a){t=jc(e,t,n);break a}oc(e,t,r,n)}t=t.child}return t;case 26:return gc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:N||(n=t.type,e=t.pendingProps,r=Bd(k.current).createElement(n),r[pt]=t,r[mt]=e,Pd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return A(t),e===null&&N&&(r=t.stateNode=ff(t.type,t.pendingProps,k.current),Bi=t,Hi=!0,a=M,Zd(t.type)?(lf=a,M=cf(r.firstChild)):M=a),oc(e,t,t.pendingProps.children,n),gc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&N&&((a=r=M)&&(r=tf(r,t.type,t.pendingProps,Hi),r===null?a=!1:(t.stateNode=r,Bi=t,M=cf(r.firstChild),Hi=!1,a=!0)),a||Wi(t)),A(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),gc(e,t),oc(e,t,r,n),t.child;case 6:return e===null&&N&&((e=n=M)&&(n=nf(n,t.pendingProps,Hi),n===null?e=!1:(t.stateNode=n,Bi=t,M=null,e=!0)),e||Wi(t)),null;case 13:return wc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ua(t,null,r,n):oc(e,t,r,n),t.child;case 11:return sc(e,t,t.type,t.pendingProps,n);case 7:return oc(e,t,t.pendingProps,n),t.child;case 8:return oc(e,t,t.pendingProps.children,n),t.child;case 12:return oc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ea(t,t.type,r.value),oc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,oa(t),a=sa(a),r=r(a),t.flags|=1,oc(e,t,r,n),t.child;case 14:return cc(e,t,t.type,t.pendingProps,n);case 15:return lc(e,t,t.type,t.pendingProps,n);case 19:return Ac(e,t,n);case 31:return hc(e,t,n);case 22:return uc(e,t,n,t.pendingProps);case 24:return oa(t),r=sa(P),e===null?(a=wa(),a===null&&(a=K,o=pa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ka(t),ea(t,P,a)):((e.lanes&n)!==0&&(qa(e,t),eo(t,null,null,n),$a()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ea(t,P,r),r!==a.cache&&ra(t,[P],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ea(t,P,r))),oc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Fc(e){e.flags|=4}function Ic(e,t,n,r,i){if((t=!!(e.mode&32))&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i){if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Pa=Aa,Oa}}else e.flags&=-16777217}function Lc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t)){if(wu())e.flags|=8192;else throw Pa=Aa,Oa}}function Rc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:tt(),e.lanes|=t,Yl|=t)}function zc(e,t){if(!N)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function H(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bc(e,t,n){var r=t.pendingProps;switch(Ri(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H(t),null;case 1:return H(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ta(P),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(qi(t)?Fc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Yi())),H(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Fc(t),o===null?(H(t),Ic(t,a,null,r,n)):(H(t),Lc(t,o))):o?o===e.memoizedState?(H(t),t.flags&=-16777217):(Fc(t),H(t),Lc(t,o)):(e=e.memoizedProps,e!==r&&Fc(t),H(t),Ic(t,a,e,r,n)),null;case 27:if(be(t),n=k.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}e=ge.current,qi(t)?Gi(t,e):(e=ff(a,r,n),t.stateNode=e,Fc(t))}return H(t),null;case 5:if(be(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return H(t),null}if(o=ge.current,qi(t))Gi(t,o);else{var s=Bd(k.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Fc(t)}}return H(t),Ic(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Fc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=k.current,qi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Bi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Wi(t,!0)}else e=Bd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return H(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=qi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),e=!1}else n=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ho(t),t):(ho(t),null);if(t.flags&128)throw Error(i(558))}return H(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=qi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else Ji(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;H(t),a=!1}else a=Yi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ho(t),t):(ho(t),null)}return ho(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Rc(t,t.updateQueue),H(t),null);case 4:return ye(),e===null&&Sd(t.stateNode.containerInfo),H(t),null;case 10:return ta(t.type),H(t),null;case 19:if(he(F),r=t.memoizedState,r===null)return H(t),null;if(a=!!(t.flags&128),o=r.rendering,o===null){if(a)zc(r,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=go(e),o!==null){for(t.flags|=128,zc(r,!1),e=o.updateQueue,t.updateQueue=e,Rc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)vi(n,e),n=n.sibling;return D(F,F.current&1|2),N&&Fi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Me()>tu&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}}else{if(!a){if(e=go(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Rc(t,e),zc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!N)return H(t),null}else 2*Me()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,zc(r,!1),t.lanes=4194304)}r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(H(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Me(),e.sibling=null,n=F.current,D(F,a?n&1|2:n&1),N&&Fi(t,r.treeForkCount),e);case 22:case 23:return ho(t),so(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(H(t),t.subtreeFlags&6&&(t.flags|=8192)):H(t),n=t.updateQueue,n!==null&&Rc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&he(Ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ta(P),H(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Vc(e,t){switch(Ri(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ta(P),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return be(t),null;case 31:if(t.memoizedState!==null){if(ho(t),t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ho(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ji()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(F),null;case 4:return ye(),null;case 10:return ta(t.type),null;case 22:case 23:return ho(t),so(),e!==null&&he(Ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ta(P),null;case 25:return null;default:return null}}function Hc(e,t){switch(Ri(t),t.tag){case 3:ta(P),ye();break;case 26:case 27:case 5:be(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&ho(t);break;case 13:ho(t);break;case 19:he(F);break;case 10:ta(t.type);break;case 22:case 23:ho(t),so(),e!==null&&he(Ca);break;case 24:ta(P)}}function Uc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Wc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Gc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{no(t,n)}catch(t){Z(e,e.return,t)}}}function Kc(e,t,n){n.props=Ys(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function qc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Jc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null){if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}}function Yc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Xc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[mt]=t}catch(t){Z(e,e.return,t)}}function Zc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Qc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Zc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $c(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for($c(e,t,n),e=e.sibling;e!==null;)$c(e,t,n),e=e.sibling}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[pt]=e,t[mt]=n}catch(t){Z(e,e.return,t)}}var nl=!1,U=!1,rl=!1,il=typeof WeakSet==`function`?WeakSet:Set,al=null;function ol(e,t){if(e=e.containerInfo,Rd=sp,e=Pr(e),Fr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,al=t;al!==null;)if(t=al,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,al=e;else for(;al!==null;){switch(t=al,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Ys(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,al=e;break}al=t.return}}function sl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Uc(5,n);break;case 1:if(xl(e,n),r&4){if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Ys(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}}r&64&&Gc(n),r&512&&qc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{no(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&tl(n);case 26:case 5:xl(e,n),t===null&&r&4&&Yc(n),r&512&&qc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||nl,!r){t=t!==null&&t.memoizedState!==null||U,i=nl;var a=U;nl=r,(U=t)&&!a?Cl(e,n,!!(n.subtreeFlags&8772)):xl(e,n),nl=i,U=a}break;case 30:break;default:xl(e,n)}}function cl(e){var t=e.alternate;t!==null&&(e.alternate=null,cl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var W=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(He&&typeof He.onCommitFiberUnmount==`function`)try{He.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:U||Jc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:U||Jc(n,t);var r=W,i=ll;Zd(n.type)&&(W=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),W=r,ll=i;break;case 5:U||Jc(n,t);case 6:if(r=W,i=ll,W=null,ul(e,t,n),W=r,ll=i,W!==null){if(ll)try{(W.nodeType===9?W.body:W.nodeName===`HTML`?W.ownerDocument.body:W).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{W.removeChild(n.stateNode)}catch(e){Z(n,t,e)}}break;case 18:W!==null&&(ll?(e=W,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(W,n.stateNode));break;case 4:r=W,i=ll,W=n.stateNode.containerInfo,ll=!0,ul(e,t,n),W=r,ll=i;break;case 0:case 11:case 14:case 15:Wc(2,n,t),U||Wc(4,n,t),ul(e,t,n);break;case 1:U||(Jc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Kc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:U=(r=U)||n.memoizedState!==null,ul(e,t,n),U=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new il),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new il),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){W=c.stateNode,ll=!1;break a}break;case 5:W=c.stateNode,ll=!1;break a;case 3:case 4:W=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(W===null)throw Error(i(160));dl(o,s,a),W=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Wc(3,e,e.return),Uc(3,e),Wc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&64&&nl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null){if(r===null){if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[pt]=e,Et(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Et(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode)}else e.stateNode=If(a,r,e.memoizedProps)}else o===r?r===null&&e.stateNode!==null&&Xc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),n!==null&&r&4&&Xc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(U||n===null||Jc(n,n.return)),e.flags&32){a=e.stateNode;try{Qt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Xc(e,a,n===null?a:n.memoizedProps)),r&1024&&(rl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}rl&&(rl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=Me()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=nl,d=U;if(nl=u||a,U=d||l,gl(t,e),U=d,nl=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||nl||U||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Zc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;el(e,Qc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Qt(o,``),n.flags&=-33),el(e,Qc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;$c(e,Qc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)sl(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Wc(4,t,t.return),Sl(t);break;case 1:Jc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Kc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Jc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=!!(t.subtreeFlags&8772),t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Uc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)to(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Gc(a),qc(a,a.return);break;case 27:tl(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&Yc(a),qc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),qc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ma(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Uc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ma(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,!!(t.subtreeFlags&10256)||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=!!(t.subtreeFlags&10256)||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Uc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Wc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Il(e)):Pl(e);break;default:Pl(e)}}function Il(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];al=r,Ll(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wc(8,t,t.return),Il(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Il(t));break;default:Il(t)}e=e.sibling}}function Ll(e,t){for(;al!==null;){var n=al;switch(n.tag){case 0:case 11:case 15:Wc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ma(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,al=r;else a:for(n=e;al!==null;){r=al;var i=r.sibling,a=r.return;if(cl(r),r===n){al=null;break a}if(i!==null){i.return=a,al=i;break a}al=a}}}var Rl={getCacheForType:function(e){var t=sa(P),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return sa(P).controller.signal}},zl=typeof WeakMap==`function`?WeakMap:Map,G=0,K=null,q=null,J=0,Y=0,Bl=null,Vl=!1,Hl=!1,Ul=!1,Wl=0,X=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return G&2&&J!==0?J&-J:T.T===null?ut():dd()}function mu(){if(Jl===0){if(!(J&536870912)||N){var e=Ye;Ye<<=1,!(Ye&3932160)&&(Ye=262144),Jl=e}else Jl=536870912}return e=co.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===K&&(Y===2||Y===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,J,Jl,!1)),rt(e,n),(!(G&2)||e!==K)&&(e===K&&(!(G&2)&&(Kl|=n),X===4&&yu(e,J,Jl,!1)),rd(e))}function gu(e,t,n){if(G&6)throw Error(i(327));var r=!n&&!(t&127)&&(t&e.expiredLanes)===0||$e(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Hl&&!r&&yu(e,t,0,!1);break}if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Ul&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Vl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-Me(),10<a)){if(yu(r,t,Jl,!Vl),Qe(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Vl,o,null,-0,0)}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sn},Ml(t,a,d);var m=(a&62914560)===a?$l-Me():(a&4194048)===a?eu-Me():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!kr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-We(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&at(e,n,t)}function bu(){return G&6?!0:(id(0,!1),!1)}function xu(){if(q!==null){if(Y===0)var e=q.return;else e=q,$i=Qi=null,Mo(e),La=null,Ra=0,e=q;for(;e!==null;)Hc(e.alternate,e),e=e.return;q=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),K=e,q=n=_i(e.current,null),J=t,Y=0,Bl=null,Vl=!1,Hl=$e(e,t),Ul=!1,Yl=Jl=ql=Kl=Gl=X=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-We(r),a=1<<i;t|=e[i],r&=~a}return Wl=t,si(),n}function Cu(e,t){I=null,T.H=Vs,t===Da||t===ka?(t=Fa(),Y=3):t===Oa?(t=Fa(),Y=4):Y=t===ac?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Bl=t,q===null&&(X=1,$s(e,Ti(t,e.current)))}function wu(){var e=co.current;return e===null?!0:(J&4194048)===J?lo===null:(J&62914560)===J||J&536870912?e===lo:!1}function Tu(){var e=T.H;return T.H=Vs,e===null?Vs:e}function Eu(){var e=T.A;return T.A=Rl,e}function Du(){X=4,Vl||(J&4194048)!==J&&co.current!==null||(Hl=!0),!(Gl&134217727)&&!(Kl&134217727)||K===null||yu(K,J,Jl,!1)}function Ou(e,t,n){var r=G;G|=2;var i=Tu(),a=Eu();(K!==e||J!==t)&&(nu=null,Su(e,t)),t=!1;var o=X;a:do try{if(Y!==0&&q!==null){var s=q,c=Bl;switch(Y){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:co.current===null&&(t=!0);var l=Y;if(Y=0,Bl=null,Pu(e,s,c,l),n&&Hl){o=0;break a}break;default:l=Y,Y=0,Bl=null,Pu(e,s,c,l)}}ku(),o=X;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,$i=Qi=null,G=r,T.H=i,T.A=a,q===null&&(K=null,J=0,si()),o}function ku(){for(;q!==null;)Mu(q)}function Au(e,t){var n=G;G|=2;var r=Tu(),a=Eu();K!==e||J!==t?(nu=null,tu=Me()+500,Su(e,t)):Hl=$e(e,t);a:do try{if(Y!==0&&q!==null){t=q;var o=Bl;b:switch(Y){case 1:Y=0,Bl=null,Pu(e,t,o,1);break;case 2:case 9:if(ja(o)){Y=0,Bl=null,Nu(t);break}t=function(){Y!==2&&Y!==9||K!==e||(Y=7),rd(e)},o.then(t,t);break a;case 3:Y=7;break a;case 4:Y=5;break a;case 7:ja(o)?(Y=0,Bl=null,Nu(t)):(Y=0,Bl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Y=0,Bl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Fu(u))}break b}}Y=0,Bl=null,Pu(e,t,o,5);break;case 6:Y=0,Bl=null,Pu(e,t,o,6);break;case 8:xu(),X=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return $i=Qi=null,T.H=r,T.A=a,G=n,q===null?(K=null,J=0,si(),X):0}function ju(){for(;q!==null&&!Ae();)Mu(q)}function Mu(e){var t=Pc(e.alternate,e,Wl);e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=vc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Mo(t);default:Hc(n,t),t=q=vi(t,Wl),t=Pc(n,t,Wl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):q=t}function Pu(e,t,n,r){$i=Qi=null,Mo(t),La=null,Ra=0;var i=t.return;try{if(ic(e,i,t,n,J)){X=1,$s(e,Ti(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;X=1,$s(e,Ti(n,e.current)),q=null;return}t.flags&32768?(N||r===1?e=!0:Hl||J&536870912?e=!1:(Vl=e=!0,(r===2||r===9||r===3||r===6)&&(r=co.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Vl);return}e=t.return;var n=Bc(t.alternate,t,Wl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);X===0&&(X=5)}function Iu(e,t){do{var n=Vc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);X=6,q=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(G&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=oi,it(e,n,o,s,c,l),e===K&&(q=K=null,J=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Ie,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=!!(t.flags&13878),t.subtreeFlags&13878||r){r=T.T,T.T=null,a=E.p,E.p=2,s=G,G|=4;try{ol(e,t,n)}finally{G=s,E.p=a,T.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=!!(t.flags&13878);if(t.subtreeFlags&13878||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{vl(t,e);var a=zd,o=Pr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Nr(s.ownerDocument.documentElement,s)){if(c!==null&&Fr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Mr(s,h),v=Mr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{G=i,E.p=r,T.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=!!(t.flags&8772);if(t.subtreeFlags&8772||n){n=T.T,T.T=null;var r=E.p;E.p=2;var i=G;G|=4;try{sl(e,t.alternate,t)}finally{G=i,E.p=r,T.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,je();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),lt(n),t=t.stateNode,He&&typeof He.onCommitFiberRoot==`function`)try{He.onCommitFiberRoot(Ve,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=T.T,i=E.p,E.p=2,T.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{T.T=t,E.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ma(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=lt(su),r=T.T,a=E.p;try{E.p=32>n?32:n,T.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,G&6)throw Error(i(331));var c=G;if(G|=4,Fl(o.current),Dl(o,o.current,s,n),G=c,id(0,!1),He&&typeof He.onPostCommitFiberRoot==`function`)try{He.onPostCommitFiberRoot(Ve,o)}catch{}return!0}finally{E.p=a,T.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ti(n,t),t=tc(e.stateNode,t,2),e=Ya(e,t,2),e!==null&&(rt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ti(n,e),n=nc(2),r=Ya(t,n,2),r!==null&&(rc(n,r,t,e),rt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new zl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Ul=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,K===e&&(J&n)===n&&(X===4||X===3&&(J&62914560)===J&&300>Me()-$l?!(G&2)&&Su(e,0):ql|=n,Yl===J&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=tt()),e=ui(e,t),e!==null&&(rt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Oe(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t){if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-We(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=J,a=Qe(r,r===K?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||$e(r,a)||(n=!0,ld(r,a))}r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Me(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-We(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=et(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=K,n=J,n=Qe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Y===2||Y===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ke(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||$e(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&ke(r),lt(n)){case 2:case 8:n=Fe;break;case 32:n=Ie;break;case 268435456:n=Re;break;default:n=Ie}return r=cd.bind(null,e),n=Oe(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&ke(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=J;return r=Qe(e,e===K?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Me()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){G&6?Oe(Pe,ad):od()})}function dd(){if(nd===0){var e=_a;e===0&&(e=Je,Je<<=1,!(Je&261888)&&(Je=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:on(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new On(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Ds(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Ds(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ti.length;hd++){var gd=ti[hd];ni(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ni(qr,`onAnimationEnd`),ni(Jr,`onAnimationIteration`),ni(Yr,`onAnimationStart`),ni(`dblclick`,`onDoubleClick`),ni(`focusin`,`onFocus`),ni(`focusout`,`onBlur`),ni(Xr,`onTransitionRun`),ni(Zr,`onTransitionStart`),ni(Qr,`onTransitionCancel`),ni($r,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=!!(t&4);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ri(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!_n||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}mn(function(){var r=a,i=ln(n),s=[];a:{var c=ei.get(e);if(c!==void 0){var l=On,u=e;switch(e){case`keypress`:if(Cn(n)===0)break a;case`keydown`:case`keyup`:l=Kn;break;case`focusin`:u=`focus`,l=Ln;break;case`focusout`:u=`blur`,l=Ln;break;case`beforeblur`:case`afterblur`:l=Ln;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Fn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=In;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Jn;break;case qr:case Jr:case Yr:l=Rn;break;case $r:l=Yn;break;case`scroll`:case`scrollend`:l=An;break;case`wheel`:l=Xn;break;case`copy`:case`cut`:case`paste`:l=zn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=qn;break;case`toggle`:case`beforetoggle`:l=Zn}var d=!!(t&4),f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=hn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==cn&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Fn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=qn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=_r;else if(dr(c)){if(vr)v=Dr;else{v=Tr;var y=wr}}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&nn(r.elementType)&&(v=_r):v=Er;if(v&&=v(e,r)){fr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Jt(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(dr(y)||y.contentEditable===`true`)&&(Lr=y,Rr=r,zr=null);break;case`focusout`:zr=Rr=Lr=null;break;case`mousedown`:Br=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Br=!1,Vr(s,n,i);break;case`selectionchange`:if(Ir)break;case`keydown`:case`keyup`:Vr(s,n,i)}var b;if($n)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else sr?ar(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(nr&&n.locale!==`ko`&&(sr||x!==`onCompositionStart`?x===`onCompositionEnd`&&sr&&(b=Sn()):(yn=i,bn=`value`in yn?yn.value:yn.textContent,sr=!0)),y=Ed(r,x),0<y.length&&(x=new Bn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=or(n),b!==null&&(x.data=b)))),(b=tr?cr(e,n):lr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Bn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=hn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=hn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=hn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=hn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Qt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:tn(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}if(typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null))),r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=on(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=on(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=rn.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:tn(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Qt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Qt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=sn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}qt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Yt(e,!!r,n,!0):Yt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Zt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(nn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Kt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Yt(e,!!n,n?[]:``,!1):Yt(e,!!n,t,!0)):Yt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Xt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(nn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e!==Wd&&(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8){if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body)}n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8){if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++}n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r){if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e}else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=E.d;E.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Gt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Gt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Gt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Gt(n.imageSizes)+`"]`)):i+=`[href="`+Gt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Gt(r)+`"][href="`+Gt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Tt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Et(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=k.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Gt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Et(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Gt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Gt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Et(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:S,Provider:null,Consumer:null,_currentValue:de,_currentValue2:de,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nt(0),this.hiddenUpdates=nt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=hi(3,null,null,t),e.current=a,a.stateNode=e,t=pa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ka(a),e}function tp(e){return e?(e=pi,e):pi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ja(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ya(e,r,t),n!==null&&(hu(n,e,t),Xa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ui(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ct(t);var n=ui(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=2,up(e,t,n,r)}finally{E.p=a,T.T=i}}function lp(e,t,n,r){var i=T.T;T.T=null;var a=E.p;try{E.p=8,up(e,t,n,r)}finally{E.p=a,T.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ze(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-We(o);s.entanglements[1]|=c,o&=~c}rd(a),!(G&6)&&(tu=Me()+500,id(0,!1))}}break;case 31:case 13:s=ui(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=ln(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Ne()){case Pe:return 2;case Fe:return 8;case Ie:case Le:return 32;case Re:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cn=r,n.target.dispatchEvent(r),cn=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,Ds(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:T,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ve=zp.inject(Rp),He=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Xs,s=Zs,c=Qs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ht]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),b=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),x=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),ee=e=>{let t=x(e);return t.charAt(0).toUpperCase()+t.slice(1)},S={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},C=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},te=(0,_.createContext)({}),ne=()=>(0,_.useContext)(te),re=(0,_.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:l=24,strokeWidth:u=2,absoluteStrokeWidth:d=!1,color:f=`currentColor`,className:p=``}=ne()??{},m=r??d?Number(n??u)*24/Number(t??l):n??u;return(0,_.createElement)(`svg`,{ref:c,...S,width:t??l??S.width,height:t??l??S.height,stroke:e??f,strokeWidth:m,className:y(`lucide`,p,i),...!a&&!C(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,_.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),w=(e,t)=>{let n=(0,_.forwardRef)(({className:n,...r},i)=>(0,_.createElement)(re,{ref:i,iconNode:t,className:y(`lucide-${b(ee(e))}`,`lucide-${e}`,n),...r}));return n.displayName=ee(e),n},ie=w(`calendar-days`,[[`path`,{d:`M8 2v3`,key:`1ioesn`}],[`path`,{d:`M16 2v3`,key:`otl347`}],[`rect`,{x:`3`,y:`3`,width:`18`,height:`18`,rx:`2`,key:`h1oib`}],[`path`,{d:`M3 9h18`,key:`1pudct`}],[`path`,{d:`M8 13h.01`,key:`1sbv64`}],[`path`,{d:`M12 13h.01`,key:`y0uutt`}],[`path`,{d:`M16 13h.01`,key:`wip0gl`}],[`path`,{d:`M8 17h.01`,key:`p3bg7i`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}],[`path`,{d:`M16 17h.01`,key:`ql8jdd`}]]),ae=w(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),oe=w(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),se=w(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),ce=w(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),le=w(`chevron-up`,[[`path`,{d:`m18 15-6-6-6 6`,key:`153udz`}]]),ue=w(`copy`,[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]),T=w(`house`,[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]]),E=w(`menu`,[[`path`,{d:`M4 5h16`,key:`1tepv9`}],[`path`,{d:`M4 12h16`,key:`1lakjw`}],[`path`,{d:`M4 19h16`,key:`1djgab`}]]),de=w(`message-square-text`,[[`path`,{d:`M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z`,key:`18887p`}],[`path`,{d:`M7 11h10`,key:`1twpyw`}],[`path`,{d:`M7 15h6`,key:`d9of3u`}],[`path`,{d:`M7 7h8`,key:`af5zfr`}]]),fe=w(`phone`,[[`path`,{d:`M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384`,key:`9njp5v`}]]),pe=w(`refresh-cw`,[[`path`,{d:`M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,key:`v9h5vc`}],[`path`,{d:`M21 3v5h-5`,key:`1q7to0`}],[`path`,{d:`M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,key:`3uifl3`}],[`path`,{d:`M8 16H3v5`,key:`1cv678`}]]),me=w(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),he=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),D=o(((e,t)=>{t.exports=he()})),ge=m(),O=D(),k=e=>`https://img.hostify.com/400000158/property/${e}-lg.jpg`,_e=`PEGAR_AQUI_LA_URL_DEL_APPS_SCRIPT_DE_CALENDARIO`;function ve(e){return String(e??``).normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase()}var ye=(0,_.createContext)(``);function A({text:e}){let t=(0,_.useContext)(ye),n=e==null?``:String(e),r=(t||``).trim();if(!r)return(0,O.jsx)(O.Fragment,{children:n});let i=ve(n),a=ve(r);if(!a||!i.includes(a))return(0,O.jsx)(O.Fragment,{children:n});let o=[],s=0,c;for(;(c=i.indexOf(a,s))!==-1;)c>s&&o.push(n.slice(s,c)),o.push((0,O.jsx)(`mark`,{className:`bg-yellow-200 text-slate-900 rounded px-0.5`,children:n.slice(c,c+a.length)},c)),s=c+a.length;return s<n.length&&o.push(n.slice(s)),(0,O.jsx)(O.Fragment,{children:o})}var be={url:`https://p.localbird.io/zafiro-jaco/browse`,resumen:`Catálogo de 121 experiencias y tours cerca de Jacó (Localbird), con chat de concierge (Luna) para armar itinerarios o resolver dudas.`,categorias:[`Tours de aventura`,`Tours aéreos y traslados`,`ATV`,`Avistamiento de aves`,`Paseos en bote/yate`,`Canopy`,`Alquiler de auto/ATV`,`Tours de cocodrilos y manglares`,`Pesca`,`Cabalgatas`,`Tours por la ciudad de Jacó`,`Kayak y SUP`,`Tours de naturaleza`,`Chef privado`,`Spa y masajes`,`Clases de surf`,`Cascadas`,`Rafting`,`Yoga y bienestar`],destacados:[{nombre:`Isla Tortuga One Day Cruise`,precio:`Desde $150`},{nombre:`Massage by Isaura`,precio:`Desde $80`},{nombre:`10 Waterfalls Hike`,precio:`Desde $72`},{nombre:`Extreme Full-day Adventure Park in Jaco`,precio:`Desde $210`},{nombre:`Private Lunch Chef in Jaco`,precio:`Desde $280`},{nombre:`Paragliding Experience in Jaco`,precio:`Desde $160`},{nombre:`Surf Lesson with Personal Instructor`,precio:`Desde $70`},{nombre:`Thrilling Horseback Riding, Waterfall & ATV Adventure`,precio:`Desde $131`}]},xe={url:`https://p.localbird.io/zafiro-tamarindo`,resumen:`Guía de experiencias, traslados y tours cerca de Tamarindo (Localbird), con chat de concierge (Luna) para armar el itinerario.`,categorias:[],destacados:[]};function Se(){return[{id:`welcome-playa-es`,title:`Welcome Message (Español)`,body:`¡Hola! 😊

Nos alegra mucho recibirte. Con gusto estaremos coordinando todo para tu llegada.

Para poder gestionar la autorización de ingreso en la caseta de seguridad, por favor envíanos la siguiente información:

- Nombre completo de todos los huéspedes
- Cédula o pasaporte de todos los huéspedes
- Cantidad total de huéspedes y cuántos son adultos
- Placa del vehículo (si vienen en carro)

Con esta información podemos coordinar tu autorización de entrada a tiempo. ¡Muchas gracias por tu colaboración! Será un placer recibirte y darte la bienvenida.`},{id:`welcome-playa-en`,title:`Welcome Message`,body:`Hi there! 😊

We're so happy to welcome you! We'll be glad to coordinate everything for your arrival.

To manage your entry authorization at the security gate, please send us the following information:

- Full name of all guests
- ID or passport number for all guests
- Total number of guests and how many are adults
- Vehicle license plate (if arriving by car)

With this information we can coordinate your entry authorization ahead of time. Thank you so much for your help! We look forward to welcoming you.`}]}function Ce(){return[{id:`checkout-playa-es`,title:`Check Out (Español)`,body:`¡Hola! 😊

Esperamos que hayas disfrutado muchísimo tu estadía con nosotros. ¡Fue un placer recibirte!

Recordá que el check-out es a las 11:00 AM. Antes de salir, por favor:

- Cerrá con llave puertas y ventanas.
- Apagá el aire acondicionado, las luces y los electrodomésticos.
- Dejá las llaves y controles donde te indicaron al llegar.
- Sacá la basura al lugar correspondiente.
- Dejá los platos lavados o en el lavavajillas.
- Revisá que no se te quede nada personal.

Si necesitás un poco más de tiempo, avisanos con anticipación y con gusto lo coordinamos según disponibilidad.

Si la pasaste bien, nos ayudaría muchísimo que nos dejes una reseña — orienta a los próximos huéspedes y significa mucho para nosotros.

¡Gracias por elegirnos, esperamos verte de nuevo pronto!`},{id:`checkout-playa-en`,title:`Check Out`,body:`Hi there! 😊

We really hope you had an amazing time staying with us — it was a pleasure hosting you!

Just a reminder that check-out is at 11:00 AM. Before you go, please:

- Lock all doors and windows.
- Turn off the air conditioning, lights, and electronics.
- Leave the keys and remotes where they were given to you at check-in.
- Take the trash to the designated area.
- Leave the dishes washed or in the dishwasher.
- Double-check you haven't left any personal items behind.

If you need a bit more time, just let us know in advance and we'll be happy to coordinate based on availability.

If you had a great stay, we'd really appreciate a review — it means a lot to us and helps future guests.

Thank you for choosing us, we hope to host you again soon!`}]}var we={sanjose:{label:`San José`,dot:`bg-indigo-500`,badgeBg:`bg-indigo-50`,badgeText:`text-indigo-700`,pillActive:`bg-indigo-600`,ring:`ring-indigo-200`},jaco:{label:`Jacó`,dot:`bg-amber-500`,badgeBg:`bg-amber-50`,badgeText:`text-amber-700`,pillActive:`bg-amber-600`,ring:`ring-amber-200`},guanacaste:{label:`Guanacaste`,dot:`bg-emerald-500`,badgeBg:`bg-emerald-50`,badgeText:`text-emerald-700`,pillActive:`bg-emerald-600`,ring:`ring-emerald-200`}},j={checkInGeneral:`3:00 PM`,checkOutGeneral:`11:00 AM`,general:{formulario:{texto:`Enviar el formulario o el correo en las mañanas (idealmente antes de las 11) de las reservas que ingresarán en el día.`,link:`https://docs.google.com/forms/d/e/1FAIpQLSe3mnUmQeWruJvsPMnOVt2uLG4HPneCRWPLeh0j5ao4_jdvkw/viewform`,linkLabel:`Formulario Urban Escalante`,espaciosObligatorios:`Todo lo que aparece con asterisco rojo en el formulario es obligatorio. Los nombres de los invitados idealmente deben incluirse (si el huésped manda la información a tiempo); si no llega a tiempo, se envía sin esa información. El nombre del huésped principal siempre es obligatorio.`},comunicacion:{titulo:`Cómo contestar mensajes`,bullets:[`Idealmente no dejar pasar más de 1-2 horas sin respuesta.`,`Responder con alta atención al cliente, buscando solucionar con mucha amabilidad todo lo que se pueda (al final se busca una buena reseña).`,`Horario de atención: 8am a 10pm (de ser posible).`,`Ya se cuenta con mensajes automáticos de check-in, instrucciones y check-out — enfocarse en atender dudas y consultas puntuales del huésped.`]},reservaDirecta:{url:`https://www.zafiropm.com/`,nota:`Link general de reserva directa con Zafiro PM (el mismo para todas las propiedades) — mejor tarifa, sin comisiones de la plataforma.`},mensajesFrecuentes:[{id:`solicitud-datos-ingreso`,title:`Solicitud de datos para autorizar ingreso`,body:`¡Hola! 😊 Estamos muy contentos y ansiosos de recibirlos en la casa.

Para poder gestionar la autorización de ingreso, ¿serían tan amables de compartirnos los nombres completos y números de cédula de todos los huéspedes? Además, si vienen en vehículo, agradeceríamos que nos indiquen el número de placa.

Muchas gracias por la información. Será un gusto recibirlos y esperamos que disfruten muchísimo su estadía. ¡Estamos para servirles en todo lo que necesiten!`}],contactos:[{label:`Chofer / Taxi (Edwin)`,value:`8865-5664`,note:`Solo si es de madrugada. Decir que es para recoger un cliente de parte de Michelle y Álvaro, Urbn Escalante.`},{label:`Limpieza Praia (Felipe)`,value:`Coordinar directo`,note:`Llamar si se necesita limpieza en Praia.`},{label:`Golf cart Hacienda Pinilla (Paulina Suárez)`,value:`+506 8483 6903`,note:`Sea Scape Rentals`},{label:`Correo Qbo Skyhomes`,value:`recepcion@condominioqbo.com`},{label:`Anfitrión Zafiro PM (WhatsApp general)`,value:`+506 8888-7777`,note:`Número de anfitrión que aparece en las guías digitales de huésped (auditoria.zafiropm.com).`}],faqs:[{q:`¿Puedo hacer early check in?`,a:`Si el apartamento está disponible, no hay problema aunque sea temprano. Si hay huéspedes, se le explica que se debe limpiar una vez que salen, pero puede dejar las maletas en el apartamento mientras se limpia, y se le avisa cuando puede ingresar.`},{q:`¿Puedo hacer late check out?`,a:`De ser posible se les deja salir MÁXIMO a las 12pm. Si requieren más tiempo, se les indica que podemos guardar las maletas en bodega hasta máximo las 4pm, y que pueden quedarse en áreas comunes; la llave debe entregarse en recepción a la hora acordada. (Coordinar con limpieza para que guarden las maletas).`},{q:`Reporte de algún daño en el apartamento`,a:`Solicitar fotografías de lo reportado. Si es de limpieza, coordinar con el equipo de limpieza. Si es aire acondicionado o falla general, indicar al huésped que se va a coordinar con mantenimiento — y reportármelo a mí directamente para coordinarlo.`},{q:`Recomendaciones de actividades o restaurantes`,a:`En la pestaña NEIGHBORHOOD están las recomendaciones de restaurantes de la zona. Solo enviar o modificar de ser necesario.`},{q:`Visitas`,a:`En ninguna propiedad se permiten visitas adicionales a las personas registradas en la reserva.`}]},masterTable:[{property:`Urban Escalante`,unit:`Mountain City View 2307`,pax:`6`,parqueo:`S2P34`,forms:`SI`,correo:`NO`,whatsapp:`NO`,app:`NO`,propertyId:`urban-escalante`},{property:`Urban Escalante`,unit:`Gourmet Terrace 1208B`,pax:`4`,parqueo:`N5P22`,forms:`SI`,correo:`NO`,whatsapp:`NO`,app:`NO`,propertyId:`urban-escalante`},{property:`Urban Escalante`,unit:`Vistas de Volcanes 1411`,pax:`6`,parqueo:`N4P25`,forms:`SI`,correo:`NO`,whatsapp:`NO`,app:`NO`,propertyId:`urban-escalante`},{property:`Qbo Skyhomes`,unit:`1422`,pax:`4`,parqueo:`Parqueo 304`,forms:`NO`,correo:`recepcion@condominioqbo.com`,whatsapp:`NO`,app:`NO`,propertyId:`qbo`},{property:`Hermosa Palms`,unit:`23A`,pax:`8`,parqueo:`2 parqueos o dejar afuera todo bien`,forms:`NO`,correo:`NO`,whatsapp:`SI`,app:`NO`,propertyId:`hermosa-palms`},{property:`Hermosa Palms`,unit:`Hermosa Palms Zafiro 23B`,pax:`6`,parqueo:`2 parqueos o dejar afuera todo bien`,forms:`NO`,correo:`NO`,whatsapp:`SI`,app:`NO`,propertyId:`hermosa-palms`},{property:`Casa Praia`,unit:`37-38-40-41-42-43`,pax:`8`,parqueo:`1 parqueo y visitas`,forms:`NO`,correo:`NO`,whatsapp:`SI`,app:`NO`,propertyId:`praia`},{property:`Casa Mística`,unit:`Barca 5`,pax:`8`,parqueo:`2 parqueos y visitas`,forms:`NO`,correo:`NO`,whatsapp:`SI`,app:`SI (ADITUM)`,propertyId:`casa-mistica`},{property:`Arenas - Casa Celeste`,unit:`Casa Celeste`,pax:`5`,parqueo:`2 parqueos o dejar afuera todo bien`,forms:`SI`,correo:`NO`,whatsapp:`—`,app:`SI (TREA)`,propertyId:`arenas`},{property:`Villa Verde - Oasis`,unit:`Casa Oasis (# casa 1-2-3-3)`,pax:`5`,parqueo:`2 parqueos o dejar afuera todo bien`,forms:`NO`,correo:`NO`,whatsapp:`SI`,app:`SI (ADITUM)`,propertyId:`villa-verde`},{property:`Casa Levita - Nosara Estates`,unit:`Casa Levita`,pax:`8`,parqueo:`3-4 parqueos`,forms:`No`,correo:`NO`,whatsapp:`NO`,app:`NO`,propertyId:`nosara-estates`},{property:`Del Roble Refuge - Hacienda Pinilla`,unit:`Hacienda Pinilla — Palma Real (LPR 241)`,pax:`10`,parqueo:`2 parqueos`,forms:`No`,correo:`NO`,whatsapp:`NO`,app:`SI (HAC)`,propertyId:`del-roble`},{property:`Malinches - Hacienda Pinilla`,unit:`Hacienda Pinilla — Casa Malinches`,pax:`8`,parqueo:`2 parqueos`,forms:`No`,correo:`NO`,whatsapp:`NO`,app:`SI (HAC)`,propertyId:`malinches`},{property:`Heavenly Highlands (FarmStay)`,unit:`San José / Santa Ana`,pax:`6`,parqueo:`—`,forms:`—`,correo:`—`,whatsapp:`—`,app:`—`,propertyId:`farmstay`}],properties:[{id:`urban-escalante`,group:`sanjose`,name:`Urban Escalante`,zone:`San José · Barrio Escalante`,owner:`Varo & Michi`,quickInfo:[[`Check in`,`3:00 PM`],[`Check out`,`11:00 AM`],[`Correo recepción`,`NO`],[`WhatsApp caseta`,`NO`],[`Ingreso app`,`NO`]],units:[{id:`u2307`,name:`Mountain City View`,num:`2307`,pax:`6`,parqueo:`S2P34`,forms:`SI`,correo:`NO`,whatsapp:`NO`,app:`NO`,extra:[[`WiFi`,`APT2307-5G / mountainview`]],checkin:[{id:`u2307-checkin`,title:`Check In Mountain City View (2307) (Español)`,body:`¡Hola de nuevo! 😊

Tu llegada está a punto de llegar! Aquí tienes algunas instrucciones importantes.

¡Queremos que te sientas como en casa y disfrutes de tu estancia en este espacio diseñado para ti! Es importante mencionar que este apartamento es un hogar, por favor trátalo como tratarías el espacio de tu amigo o familia, realmente te agradeceríamos que pudieras revisar nuestras normas de la casa accediendo a este enlace: https://www.dropbox.com/s/9z69jm67eorgboj/Moutain%26City_House%20Rules.pdf?dl=0

Cuando llegues al edificio, ve al vestíbulo. Avísale al conserje que vas a APT: 2307. Por favor, presenta el documento de identificación de todos los huéspedes (como el pasaporte, documento de identidad, permiso de conducir, etc.) y entrega al conserje el número de apartamento para que pueda acelerar el proceso de llegada y darte la tarjeta de acceso y la llave del apartamento. Si solicitaste una plaza de estacionamiento para tu estancia, será S2P34.

Debes escanear un código QR con las normas del edificio, así que ayúdanos a cumplir esos acuerdos.

Recuerda que el registro de entrada es a las 15:00 y el de salida a las 11:00.

Hemos dejado algunos artículos en la cocina para tu comodidad: café costarricense, pimienta negra, aceite de oliva, sal y otras especias.

Las siguientes zonas comunes están abiertas al público, no se permiten bebidas alcohólicas ni drogas.

HORARIO DE LAS ZONAS COMUNES:
- PISCINA: de 5:00 A. M. a 9:00 P. M. (Cerrado por mantenimiento: LUNES, MIÉRCOLES y VIERNES de 3:00 P. M. a 4:00 P. M.) Esta se encuentra en el 7mo piso.
- GIMNASIO: 3:30 A. M. a 10:30 P. M. (Cerrado por limpieza de 11:00 A. M. a 12:00 A. M.) Este se encuentra en el 7mo piso.
- COWORKING, SALA DE YOGA y SALÓN: de 8:00 A. M. a 11:00 P. M. Este se encuentra en el piso 29.
- ZONAS COMUNES, AZOTEA, SALA de televisión, TERRAZA: de 8:00 A. M. a 11:00 P. M. Se encuentran en el piso 29.
(Es necesario reservar las salas de reuniones, sujeto a disponibilidad)

Te rogamos que cuides la ropa de cama y las toallas, que tengas cuidado de no mancharlas ni dañarlas. Estamos en casa, no en un hotel.

Aquí encontrarás la información del wifi:
Nombre wifi: APT2307-5G
Contraseña: mountainview

Esperamos que te sientas como en casa en este hermoso espacio, y si falta algo, no dudes en ponerte en contacto con nuestro equipo para preguntar.

Enviarnos un mensaje a través de Airbnb es siempre la mejor opción.

Gracias a ti, que tengas una buena estancia.
Varo y Michi`},{id:`u2307-checkin-en`,title:`Check In Mountain City View (2307)`,body:`Hi again! 😊

Your arrival is coming up! Here are some important instructions.

We want you to feel at home and enjoy your stay in this space designed for you! It's important to mention that this apartment is a home, please treat it as you would treat your friend or family's space — we'd really appreciate it if you could review our house rules by accessing this link: https://www.dropbox.com/s/9z69jm67eorgboj/Moutain%26City_House%20Rules.pdf?dl=0

When you arrive at the building, go to the lobby. Let the concierge know you're going to APT: 2307. Please present the ID of all guests (passport, ID card, driver's license, etc.) and give the concierge the apartment number so they can speed up the check-in process and give you the access card and apartment key. If you requested a parking spot for your stay, it will be S2P34.

You'll need to scan a QR code with the building rules, so please help us follow those agreements.

Remember that check-in is at 15:00 and check-out is at 11:00.

We've left some items in the kitchen for your convenience: Costa Rican coffee, black pepper, olive oil, salt, and other spices.

The following common areas are open to the public; alcohol and drugs are not allowed.

COMMON AREAS SCHEDULE:
- POOL: 5:00 AM to 9:00 PM (Closed for maintenance: MONDAY, WEDNESDAY and FRIDAY from 3:00 PM to 4:00 PM). Located on the 7th floor.
- GYM: 3:30 AM to 10:30 PM (Closed for cleaning from 11:00 AM to 12:00 PM). Located on the 7th floor.
- CO-WORKING, YOGA ROOM & LOUNGE: 8:00 AM to 11:00 PM. Located on the 29th floor.
- COMMON AREAS, ROOFTOP, TV ROOM, TERRACE: 8:00 AM to 11:00 PM. Located on the 29th floor.
(Meeting rooms need to be reserved, subject to availability)

We kindly ask that you take care of the bedding and towels, being careful not to stain or damage them. We're a home, not a hotel.

Here's the WiFi info:
WiFi name: APT2307-5G
Password: mountainview

We hope you feel at home in this beautiful space, and if anything is missing, please don't hesitate to reach out to our team to ask.

Messaging us through Airbnb is always the best option.

Thank you, have a great stay.
Varo y Michi`}]},{id:`u1208b`,name:`Gourmet Terrace`,num:`1208B`,pax:`4`,parqueo:`N5P22`,forms:`SI`,correo:`NO`,whatsapp:`NO`,app:`NO`,rooms:[`Habitación 1: Cama Queen`,`Habitación 2: Cama Queen`],extra:[[`Distribución`,`2 habitaciones, capacidad máxima 4 personas`],[`WiFi`,`APT1208B / PuraVida`]],checkin:[{id:`u1208b-checkin`,title:`Check In Gourmet Terrace (1208B) (Español)`,body:`¡Hola de nuevo! 😊

Tu llegada está a punto de llegar! Aquí tienes algunas instrucciones importantes.

¡Queremos que te sientas como en casa y disfrutes de tu estancia en este espacio diseñado para ti! Es importante mencionar que este apartamento es un hogar, por favor trátalo como tratarías el espacio de tu amigo o familia, realmente te agradeceríamos que pudieras revisar nuestras normas de la casa accediendo a este enlace: https://www.dropbox.com/s/9z69jm67eorgboj/Moutain%26City_House%20Rules.pdf?dl=0

Cuando llegues al edificio, ve al vestíbulo. Avísale al conserje que vas a APT: 1208B. Por favor, presenta el documento de identificación de todos los huéspedes (como el pasaporte, documento de identidad, permiso de conducir, etc.) y entrega al conserje el número de apartamento para que pueda acelerar el proceso de llegada y darte la tarjeta de acceso y la llave del apartamento.

Debes escanear un código QR con las normas del edificio, así que ayúdanos a cumplir esos acuerdos.

Recuerda que el registro de entrada es a las 15:00 y el de salida a las 11:00.

Hemos dejado algunos artículos en la cocina para tu comodidad: café costarricense, pimienta negra, aceite de oliva, sal y otras especias.

Las siguientes zonas comunes están abiertas al público, no se permiten bebidas alcohólicas ni drogas.

HORARIO DE LAS ZONAS COMUNES:
- PISCINA: de 5:00 A. M. a 9:00 P. M. (Cerrado por mantenimiento: LUNES, MIÉRCOLES y VIERNES de 3:00 P. M. a 4:00 P. M.) Esta se encuentra en el 7mo piso.
- GIMNASIO: 3:30 A. M. a 10:30 P. M. (Cerrado por limpieza de 11:00 A. M. a 12:00 A. M.) Este se encuentra en el 7mo piso.
- COWORKING, SALA DE YOGA y SALÓN: de 8:00 A. M. a 11:00 P. M. Este se encuentra en el piso 29.
- ZONAS COMUNES, AZOTEA, SALA de televisión, TERRAZA: de 8:00 A. M. a 11:00 P. M. Se encuentran en el piso 29.
(Es necesario reservar las salas de reuniones, sujeto a disponibilidad)

Te rogamos que cuides la ropa de cama y las toallas, que tengas cuidado de no mancharlas ni dañarlas. Estamos en casa, no en un hotel.

Aquí encontrarás la información del wifi:
Nombre del wifi: APT1208B
Contraseña: PuraVida

Esperamos que te sientas como en casa en este hermoso espacio, y si falta algo, no dudes en ponerte en contacto con nuestro equipo para preguntar.

Enviarnos un mensaje a través de Airbnb es siempre la mejor opción.

Gracias a ti, que tengas una buena estancia.
Varo y Michi`},{id:`u1208b-checkin-en`,title:`Check In Gourmet Terrace (1208B)`,body:`Hi again! 😊

Your arrival is coming up! Here are some important instructions.

We want you to feel at home and enjoy your stay in this space designed for you! It's important to mention that this apartment is a home, please treat it as you would treat your friend or family's space — we'd really appreciate it if you could review our house rules by accessing this link: https://www.dropbox.com/s/9z69jm67eorgboj/Moutain%26City_House%20Rules.pdf?dl=0

When you arrive at the building, go to the lobby. Let the concierge know you're going to APT: 1208B. Please present the ID of all guests (passport, ID card, driver's license, etc.) and give the concierge the apartment number so they can speed up the check-in process and give you the access card and apartment key.

You'll need to scan a QR code with the building rules, so please help us follow those agreements.

Remember that check-in is at 15:00 and check-out is at 11:00.

We've left some items in the kitchen for your convenience: Costa Rican coffee, black pepper, olive oil, salt, and other spices.

The following common areas are open to the public; alcohol and drugs are not allowed.

COMMON AREAS SCHEDULE:
- POOL: 5:00 AM to 9:00 PM (Closed for maintenance: MONDAY, WEDNESDAY and FRIDAY from 3:00 PM to 4:00 PM). Located on the 7th floor.
- GYM: 3:30 AM to 10:30 PM (Closed for cleaning from 11:00 AM to 12:00 PM). Located on the 7th floor.
- CO-WORKING, YOGA ROOM & LOUNGE: 8:00 AM to 11:00 PM. Located on the 29th floor.
- COMMON AREAS, ROOFTOP, TV ROOM, TERRACE: 8:00 AM to 11:00 PM. Located on the 29th floor.
(Meeting rooms need to be reserved, subject to availability)

We kindly ask that you take care of the bedding and towels, being careful not to stain or damage them. We're a home, not a hotel.

Here's the WiFi info:
WiFi name: APT1208B
Password: PuraVida

We hope you feel at home in this beautiful space, and if anything is missing, please don't hesitate to reach out to our team to ask.

Messaging us through Airbnb is always the best option.

Thank you, have a great stay.
Varo y Michi`}]},{id:`u1411`,name:`Vistas de Volcanes`,num:`1411`,pax:`6`,parqueo:`N4P25`,forms:`SI`,correo:`NO`,whatsapp:`NO`,app:`NO`,extra:[[`WiFi`,`APTO 1411 / PuraVida`]],checkin:[{id:`u1411-checkin`,title:`Check In Vistas de Volcanes (1411) (Español)`,body:`¡Hola de nuevo! 😊

Tu llegada está a punto de llegar! Aquí tienes algunas instrucciones importantes.

¡Queremos que te sientas como en casa y disfrutes de tu estancia en este espacio diseñado para ti! Es importante mencionar que este apartamento es un hogar, por favor trátalo como tratarías el espacio de tu amigo o familia, realmente te agradeceríamos que pudieras revisar nuestras normas de la casa accediendo a este enlace: https://www.dropbox.com/s/9z69jm67eorgboj/Moutain%26City_House%20Rules.pdf?dl=0

Cuando llegues al edificio, ve al vestíbulo. Avísale al conserje que vas a APT: 1411. Por favor, presenta el documento de identificación de todos los huéspedes (como el pasaporte, documento de identidad, permiso de conducir, etc.) y entrega al conserje el número de apartamento para que pueda acelerar el proceso de llegada y darte la tarjeta de acceso y la llave del apartamento. Si solicitaste una plaza de estacionamiento para tu estancia, será N4P25.

Debes escanear un código QR con las normas del edificio, así que ayúdanos a cumplir esos acuerdos.

Recuerda que el registro de entrada es a las 15:00 y el de salida a las 11:00.

Hemos dejado algunos artículos en la cocina para tu comodidad: café costarricense, pimienta negra, aceite de oliva, sal y otras especias.

Las siguientes zonas comunes están abiertas al público, no se permiten bebidas alcohólicas ni drogas.

HORARIO DE LAS ZONAS COMUNES:
- PISCINA: de 5:00 A. M. a 9:00 P. M. (Cerrado por mantenimiento: LUNES, MIÉRCOLES y VIERNES de 3:00 P. M. a 4:00 P. M.) Esta se encuentra en el 7mo piso.
- GIMNASIO: 3:30 A. M. a 10:30 P. M. (Cerrado por limpieza de 11:00 A. M. a 12:00 A. M.) Este se encuentra en el 7mo piso.
- COWORKING, SALA DE YOGA y SALÓN: de 8:00 A. M. a 11:00 P. M. Este se encuentra en el piso 29.
- ZONAS COMUNES, AZOTEA, SALA de televisión, TERRAZA: de 8:00 A. M. a 11:00 P. M. Se encuentran en el piso 29.
(Es necesario reservar las salas de reuniones, sujeto a disponibilidad)

Te rogamos que cuides la ropa de cama y las toallas, que tengas cuidado de no mancharlas ni dañarlas. Estamos en casa, no en un hotel.

Aquí encontrarás la información del wifi:
Nombre del wifi: APTO 1411
Contraseña: PuraVida

Esperamos que te sientas como en casa en este hermoso espacio, y si falta algo, no dudes en ponerte en contacto con nuestro equipo para preguntar.

Enviarnos un mensaje a través de Airbnb es siempre la mejor opción.

Gracias a ti, que tengas una buena estancia.
Varo y Michi`},{id:`u1411-checkin-en`,title:`Check In Vistas de Volcanes (1411)`,body:`Hi again! 😊

Your arrival is coming up! Here are some important instructions.

We want you to feel at home and enjoy your stay in this space designed for you! It's important to mention that this apartment is a home, please treat it as you would treat your friend or family's space — we'd really appreciate it if you could review our house rules by accessing this link: https://www.dropbox.com/s/9z69jm67eorgboj/Moutain%26City_House%20Rules.pdf?dl=0

When you arrive at the building, go to the lobby. Let the concierge know you're going to APT: 1411. Please present the ID of all guests (passport, ID card, driver's license, etc.) and give the concierge the apartment number so they can speed up the check-in process and give you the access card and apartment key. If you requested a parking spot for your stay, it will be N4P25.

You'll need to scan a QR code with the building rules, so please help us follow those agreements.

Remember that check-in is at 15:00 and check-out is at 11:00.

We've left some items in the kitchen for your convenience: Costa Rican coffee, black pepper, olive oil, salt, and other spices.

The following common areas are open to the public; alcohol and drugs are not allowed.

COMMON AREAS SCHEDULE:
- POOL: 5:00 AM to 9:00 PM (Closed for maintenance: MONDAY, WEDNESDAY and FRIDAY from 3:00 PM to 4:00 PM). Located on the 7th floor.
- GYM: 3:30 AM to 10:30 PM (Closed for cleaning from 11:00 AM to 12:00 PM). Located on the 7th floor.
- CO-WORKING, YOGA ROOM & LOUNGE: 8:00 AM to 11:00 PM. Located on the 29th floor.
- COMMON AREAS, ROOFTOP, TV ROOM, TERRACE: 8:00 AM to 11:00 PM. Located on the 29th floor.
(Meeting rooms need to be reserved, subject to availability)

We kindly ask that you take care of the bedding and towels, being careful not to stain or damage them. We're a home, not a hotel.

Here's the WiFi info:
WiFi name: APTO 1411
Password: PuraVida

We hope you feel at home in this beautiful space, and if anything is missing, please don't hesitate to reach out to our team to ask.

Messaging us through Airbnb is always the best option.

Thank you, have a great stay.
Varo y Michi`}]}],rules:[`POOL: 5AM–9PM (cerrado por mantenimiento lun/mié/vie 3–4PM). Piso 7.`,`GYM: 3:30AM–10:30PM (cerrado limpieza 11AM–12MD). Piso 7.`,`COWORKING, YOGA ROOM & LOUNGE: 8AM–11PM. Piso 29.`,`ÁREAS COMUNES, ROOFTOP, TV ROOM, TERRACE: 8AM–11PM. Piso 29. (Reserva de salas sujeta a disponibilidad)`],messages:[{id:`urban-checkin`,title:`Check In`,body:`Hello again [guest first name]. Your arrival It's almost here! Here you have some important instructions.

We want you to feel at home and enjoy your stay in this space designed for you! It's important to mention that this apartment is a home, please treat it as you would treat your friend or family's space, we would really appreciate if you can review our house rules by accessing this link: https://www.dropbox.com/s/9z69jm67eorgboj/Moutain%26City_House%20Rules.pdf?dl=0

[check-in method]

We have left some items in the kitchen for your convenience: Costa Rican coffee, black pepper, olive oil, salt and other spices.

The following common areas are open to public, alcohol or drugs are not allowed.

COMMON AREAS SCHEDULE:
- POOL: 5AM - 9PM (Closed for maintenance: MON, WED & FRI from 3PM to 4PM). Located on the 7th floor.
- GYM: 3:30AM - 10:30PM (Closed for cleaning from 11AM to 12MD). Located on the 7th floor.
- COWORKING, YOGA ROOM & LOUNGE: 8AM to 11PM. Located on the 29th floor.
- COMMON AREAS, ROOFTOP, TV ROOM, TERRACE: 8AM to 11PM. Located on the 29th floor. (Meeting rooms reservation needed, subject to availability)

We kindly request you take care of the sheet bedding and towels, be careful about stain or damage them, we are home not a hotel.

Wifi Name: [wifi name]
Password: [wifi password]

We hope you feel at home in this beautiful space, and if anything is missing, please don't hesitate to reach out to our team to ask! Messaging us through Airbnb is always the best option.

Thank you, have a good stay.
Varo & Michi`},{id:`urban-checkin-es`,title:`Check In (Español)`,body:`Hola de nuevo, [nombre del huésped]. ¡Tu llegada está muy cerca! Aquí tenés algunas instrucciones importantes.

¡Queremos que te sientas como en casa y disfrutes tu estadía en este espacio diseñado para vos! Es importante mencionar que este apartamento es un hogar, por favor trátalo como tratarías el espacio de tu amigo o familia — te agradeceríamos que revisés nuestras normas de la casa accediendo a este enlace: https://www.dropbox.com/s/9z69jm67eorgboj/Moutain%26City_House%20Rules.pdf?dl=0

[método de check-in]

Dejamos algunos artículos en la cocina para tu comodidad: café costarricense, pimienta negra, aceite de oliva, sal y otras especias.

Las siguientes zonas comunes están abiertas al público; no se permiten bebidas alcohólicas ni drogas.

HORARIO DE LAS ZONAS COMUNES:
- PISCINA: 5AM–9PM (cerrada por mantenimiento lunes, miércoles y viernes de 3PM a 4PM). Piso 7.
- GIMNASIO: 3:30AM–10:30PM (cerrado por limpieza de 11AM a 12MD). Piso 7.
- COWORKING, SALA DE YOGA Y SALÓN: 8AM a 11PM. Piso 29.
- ZONAS COMUNES, AZOTEA, SALA DE TV, TERRAZA: 8AM a 11PM. Piso 29. (Se necesita reservar las salas, sujeto a disponibilidad)

Te pedimos por favor cuidar la ropa de cama y las toallas, evitando mancharlas o dañarlas — estamos en un hogar, no en un hotel.

Nombre del WiFi: [nombre del wifi]
Contraseña: [contraseña del wifi]

Esperamos que te sientas como en casa en este hermoso espacio, y si falta algo, no dudes en contactar a nuestro equipo para preguntar. Escribirnos por Airbnb siempre es la mejor opción.

Gracias, que tengas una buena estadía.
Varo & Michi`},{id:`urban-checkout`,title:`Check Out`,body:`Hello [guest first name], we sincerely hope you had an amazing time during your stay at [listing name]. We wanted to take a moment to express our gratitude and remind you that check-out is today at [checkout time].

When you're ready to leave, kindly drop off the keys along with the access card at the lobby. Before you go, please double-check that all windows, doors, and faucets are securely closed, and that all lights and electronic devices are switched off.

We want to make sure that you didn't leave anything behind, so we'll be conducting a thorough inspection of the unit.

If you ever plan to return to the area, please don't hesitate to reach out to us. We would be absolutely thrilled to have the opportunity to host you again.

Have an absolutely fantastic day!

Warm regards,
Varo & Michi`},{id:`urban-welcome`,title:`Welcome Message`,body:`Hi [guest first name]

Thank you so much for choosing our place among many options. We are very happy that you are staying with us in our place [listing name]

Prior arriving to the building, we will need the following information from you and all your guests:
- First and last name
- ID/Passport Number
- Nationality
- Email address of the main guest

This information is mandatory, at your check in the concierge will ask for your passport for this information.

We're happy to help with any recommendations for eating, drinking or touring. We will send more details the day prior to your arrival.

HOW TO GET THERE?
It is very simple to get to the building. You can search on Google Maps or Waze for "URBN Escalante" and you will have the address displayed. Otherwise, let your taxi or transportation driver know that you are going 200mts south of Parque Francia in Barrio Escalante, San Jose.

Make sure you CHECK IN FIRST, and then they will give you parking instructions. We will be sending you more details the day prior your check in date and will send you a confirmation email. Have a nice day! We hope to see you soon.

Have a safe trip.
Varo and Michi, your hosts.`},{id:`urban-welcome-es`,title:`Welcome Message (Español)`,body:`¡Hola! 😊

Nos alegra mucho recibirte en nuestro alojamiento en Barrio Escalante. Con gusto estaremos coordinando todo para tu llegada.

Para poder gestionar la autorización de ingreso, por favor envíanos la siguiente información de todos los huéspedes:
- Nombre completo
- Número de identificación (cédula o pasaporte)
- Nacionalidad

Adicionalmente, necesitamos únicamente el correo electrónico del huésped principal.

Esta información es obligatoria — al hacer el check-in, el conserje va a pedir el pasaporte para confirmarla. Con gusto te recomendamos lugares para comer, tomar algo o pasear; te vamos a enviar más detalles el día antes de tu llegada.

¿CÓMO LLEGAR?
Es muy sencillo llegar al edificio. Podés buscar en Google Maps o Waze "URBN Escalante" y te va a mostrar la dirección exacta. Si vas en taxi o servicio de transporte, indicales que es 200 metros al sur del Parque Francia, en Barrio Escalante, San José.

Asegurate de hacer el CHECK IN PRIMERO, y luego te van a dar las instrucciones de parqueo. Te vamos a enviar más detalles el día antes de tu llegada, junto con un correo de confirmación. ¡Que tengas un buen viaje! Esperamos verte pronto.

Con cariño,
Varo y Michi, tus anfitriones.`}]},{id:`qbo`,group:`sanjose`,name:`Qbo Skyhomes`,zone:`San José · Rohrmoser`,owner:`Varo & Michi`,quickInfo:[[`Check in`,`3:00 PM`],[`Check out`,`11:00 AM`],[`Correo recepción`,`recepcion@condominioqbo.com`],[`WhatsApp caseta`,`NO`],[`Ingreso app`,`NO`]],units:[{id:`u1422`,name:`Apartamento`,num:`1422`,pax:`4`,parqueo:`304`,forms:`NO`,correo:`recepcion@condominioqbo.com`,whatsapp:`NO`,app:`NO`,extra:[[`WiFi`,`JunglyPH / PuraVida`]],checkin:[{id:`u1422-checkin`,title:`Check In Qbo 1422 (Español)`,body:`¡Hola de nuevo! 😊

¡Tu llegada está casi aquí!

¡Queremos que te sientas como en casa y disfrutes de tu estancia en este espacio diseñado para ti! Es importante mencionar que este apartamento es un hogar, así que trátalo como tratarías el espacio de tu amigo o familiar.

Cuando llegues a Q-Bo Skyhomes, puedes aparcar delante del edificio. Entra y avisa al conserje de que te vas a alojar en el apartamento 1422. Te darán acceso al apartamento, encontrarás la tarjeta de acceso y la llave en el apartamento, así que cuídalas bien.

Plaza de aparcamiento:
Si has solicitado una plaza de aparcamiento, después de hacer el registro de entrada y tener tu tarjeta de acceso, puedes aparcar tu coche. El aparcamiento se encuentra en la parte trasera del edificio (norte), en el tercer piso (304). Una vez que hayas aparcado, puedes coger el ascensor por la rampa, pulsar 1 (primer piso) y dirigirte a los ascensores por el vestíbulo. Con la tarjeta en la mano, colócala en la caja de acceso negra y pulsa 14.

Hemos dejado algunos artículos en la cocina para tu comodidad: café costarricense, pimienta negra, aceite de oliva, sal y otras especias.

Te agradeceríamos que revisaras las normas de la casa.

HORARIO DE LAS ZONAS COMUNES:
Jacuzzis de contraste (planta 2): abierto de lunes a domingo de 5:00 a 22:00 horas. Cerrado por mantenimiento los lunes de 9:00 a 13:00 horas y los viernes de 10:00 a 12:00 horas.
Piscina semiolímpica: abierta de lunes a domingo de 5:00 a 22:00 horas. Cerrada por mantenimiento los lunes de 9:00 a 13:00 horas y los viernes de 10:00 a 12:00 horas.
GIMNASIO (pesas en el piso 2, cardio en el piso 15): abierto de lunes a domingo de 5:00 a 22:00 horas.
Sauna y spa: abierto de lunes a domingo de 7:00 a 22:00 horas. Las reservas se realizan a través de nosotros, por lo que si deseas utilizarlo, envíanos un mensaje (sujeto a disponibilidad).
Sala de masajes: abierta de lunes a domingo de 7:00 a 22:00 horas. Las reservas se realizan a través de nosotros, por lo que si deseas utilizarla, envíanos un mensaje (sujeto a disponibilidad).
Co-Working: Abierto de lunes a domingo de 7:00 a.m. a 12:00 p.m. El tiempo máximo de reserva de las salas es de 2 horas. Las reservas se realizan a través de nosotros, por lo que si deseas utilizarlo, envíanos un mensaje (sujeto a disponibilidad).
Jacuzzi (planta 15): Abierto de lunes a domingo de 7:00 a.m. a 10:00 p.m. El horario de burbujas es de lunes a viernes: de 10:00 a.m. a 12:00 p.m. / de 2:00 p.m. a 4:00 p.m. / de 6:00 p.m. a 10:00 p.m.; sábados y domingos: de 7:00 a.m. a 10:00 p.m.

Ten en cuenta que cualquier daño en las zonas dará lugar a una penalización por las reparaciones que el huésped deberá cubrir. No está permitido fumar ni consumir alcohol.

Te rogamos que cuides la ropa de cama y las toallas. Ten cuidado de no manchar ni dañarlas, ya que este es un alojamiento, no un hotel. Si se detecta algún daño, se cobrará una tarifa de 35 dólares por artículo dañado.

Después de tu salida, inspeccionaremos el apartamento. Si algún artículo está dañado, manchado o perdido, te informaremos y procederemos con un cargo si corresponde.

Aquí tienes la información del wifi:
Nombre de la red wifi: JunglyPH
Contraseña: PuraVida

Esperamos que te sientas como en casa en este hermoso espacio y, si falta algo, no dudes en ponerte en contacto con nuestro equipo para preguntar.

Enviarnos mensajes a través de Airbnb es siempre la mejor opción.

Gracias y que tengas una buena estancia.
Varo y Michi`},{id:`u1422-checkin-en`,title:`Check In Qbo 1422`,body:`Hello again, [guest first name]

Your arrival is almost here!

We want you to feel at home and enjoy your stay in this space designed for you! It's important to mention that this apartment is a home, so please treat it as you would treat your friend or family's space.

When you arrive at Q-Bo Skyhomes, you can park in front of the building. Enter and let the concierge know that you are staying in apartment 1422. They will give you access to the apartment, you will find the access card and the key at the apartment, so please take good care of them.

Parking Spot:
If you requested a parking spot, after you check in and have your access card, you can park your car. Parking is located at the back of the building (North), on the 3rd floor (306). Once you are parked, you can take the elevator by the ramp, press 1 (first floor), and head to the elevators by the lobby. With your card in hand, place it on the black access box and press 14.

We have left some items in the kitchen for your convenience: Costa Rican coffee, black pepper, olive oil, salt, and other spices.

We appreciate if you can review our house rules.

COMMON AREAS SCHEDULE:
Contrast Jacuzzis (Floor 2): Open Monday to Sunday from 5:00 a.m. to 10:00 p.m. Closed for maintenance on Mondays from 9 a.m. to 1 p.m. and Fridays from 10 a.m. to 12 p.m.
Semi-Olympic Pool: Open Monday to Sunday from 5:00 a.m. to 10:00 p.m. Closed for maintenance on Mondays from 9 a.m. to 1 p.m. and Fridays from 10 a.m. to 12 p.m.
GYM (Weights on Floor 2, Cardio on Floor 15): Open Monday to Sunday from 5:00 a.m. to 10:00 p.m.
Sauna and Spa: Open Monday to Sunday from 7:00 a.m. to 10:00 p.m. Reservations are made through us (subject to availability).
Massage Room: Open Monday to Sunday from 7:00 a.m. to 10:00 p.m. Reservations are made through us (subject to availability).
Co-Working: Open Monday to Sunday from 7:00 a.m. to 12:00 p.m. The maximum reservation time for rooms is 2 hours. Reservations are made through us (subject to availability).
Jacuzzi (Floor 15): Open Monday to Sunday from 7:00 a.m. to 10:00 p.m. Bubble hours are Monday-Friday: 10:00 a.m. to 12:00 p.m. / 2:00 p.m. to 4:00 p.m. / 6:00 p.m. to 10:00 p.m.; Saturdays and Sundays: 7:00 a.m. to 10:00 p.m.

Please note that any damage to the areas will result in a penalty fee for repairs that the guest must cover. Smoking and alcohol consumption are not allowed.

We kindly request you take care of the bedding and towels. Be careful not to stain or damage them, as this is a home, not a hotel. If any damage is detected, a fee of $35 per damaged item will be charged.

After your check-out, we will inspect the apartment. If any items are damaged, stained, or lost, we'll inform you and proceed with a charge if applicable.

Wifi Name: JunglyPH
Password: PuraVida

We hope you feel at home in this beautiful space, and if anything is missing, please don't hesitate to reach out to our team to ask!

Messaging us through Airbnb is always the best option.

Thank you, and have a good stay.
Varo & Michi`}]}],rules:[`Contrast Jacuzzis (piso 2): 5AM–10PM. Cerrado lun 9AM–1PM y vie 10AM–12PM.`,`Piscina Semi-Olímpica: 5AM–10PM. Mismos cierres por mantenimiento.`,`GYM (pesas piso 2, cardio piso 15): 5AM–10PM.`,`Sauna y Spa: 7AM–10PM. Reserva por nosotros (sujeto a disponibilidad).`,`Sala de masajes: 7AM–10PM. Reserva por nosotros (sujeto a disponibilidad).`,`Co-Working: 7AM–12PM. Máximo 2h por reserva; reserva por nosotros.`,`Jacuzzi (piso 15): 7AM–10PM. Horas de burbujas lun–vie 10–12 / 2–4 / 6–10PM; sáb–dom 7AM–10PM.`,`Daño a áreas comunes: penalidad a cargo del huésped. No fumar ni alcohol.`,`Daño a blancos: $35 por artículo dañado.`],correoTemplate:{id:`qbo-correo`,title:`Correo diario a recepción (huéspedes del día)`,body:`Buenos dias, Adjunto la información de los huéspedes de hoy:

huesped principal:
[nombre huésped principal]

huéspedes en total:
[cantidad] personas

fecha: [fechas de estadía]

Parqueo [número]

Gracias, saludos.`},messages:[{id:`qbo-checkout`,title:`Check Out`,body:`Hello [guest first name], we sincerely hope you had an amazing time during your stay at [listing name]. We wanted to take a moment to express our gratitude and remind you that check-out is today at [checkout time].

When you're ready to leave, kindly drop off the keys along with the access card at the apartment. Before you go, please double-check that all windows, doors, and faucets are securely closed, and that all lights and electronic devices are switched off.

We want to make sure that you didn't leave anything behind, so we'll be conducting a thorough inspection of the unit.

We kindly ask you to consider leaving us a review. Your feedback means the world to us and helps us maintain the high-quality service we strive for.

If you ever plan to return to the area, please don't hesitate to reach out to us. We would be absolutely thrilled to have the opportunity to host you again.

Have an absolutely fantastic day!

Warm regards,
Varo & Michi`},{id:`qbo-welcome`,title:`Welcome Message`,body:`Hi [guest first name]

Thank you so much for choosing our place among many options. We're thrilled to have you stay with us at Skyhome Mountain & Park Views!

Before your arrival, we'll need a few details from you and your guests:
First and last name
ID/Passport number
Email address of the main guest
Parking space needed: YES/NO

This information is required, and our concierge will ask for your passports at check-in to verify these details.

If you need parking, please let us know before your check-in so we can have everything ready for you. We're also happy to provide recommendations for places to eat, drink, or visit, so don't hesitate to ask!

HOW TO GET THERE?
Getting to the building is easy. Just search for "Q-Bo Skyhomes" on Google Maps or Waze to find the exact address. If you're using a taxi or transportation service, you can tell them that you're going to the building in front of Parque del Café in Rohrmoser, San José.

We'll send you more details the day before your check-in and a confirmation email. Have a great day, and we look forward to welcoming you soon!

Safe travels,
Varo and Michi, your hosts`}]},{id:`hermosa-palms`,group:`jaco`,name:`Hermosa Palms`,zone:`Jacó · Playa Hermosa`,owner:`Gustavo y Bruno`,quickInfo:[[`Check in`,`3:00 PM`],[`Check out`,`11:00 AM`],[`Early check in`,`Dejar maletas desde 12PM (no pueden entrar a la casa)`],[`Beach club`,`8AM–10PM (no todas las casas tienen acceso, hay restaurante y spa)`],[`Puertas`,`Llave física (candado en la entrada)`],[`TV`,`Streaming, sin cable`],[`Parqueos`,`2 vehículos`],[`Mascotas`,`Solo de servicio`],[`Visitantes`,`Solo estadías +5 días y con identificación`],[`Check in interno`,`Enviar mensaje con datos de huéspedes, fechas y # casa antes de las 11AM`],[`Parrilla`,`No hay, cocina totalmente equipada`]],publicInfo:{amenities:[`WiFi`,`A/C`,`Cocina equipada`,`Piscina`,`Parqueo gratis`,`TV`,`Cafetera`,`Agua caliente`,`Acceso a la playa`,`BBQ grill`,`Secadora de pelo`,`Jacuzzi (23A)`],nearby:[`10 min — Mini Market Calle Hermosa`,`15 min — Farmacia`,`15 min — Royal Butterflies`,`15 min — The Park at Ocean Ranch`,`15 min — Jacó`,`2 h — Aeropuerto Internacional Juan Santamaría`,{text:`Vida Hermosa Bar and Restaurant — Restaurante de mariscos ★4.5 (1635 reseñas)`,url:`https://maps.google.com/?cid=6973166465829797315`},{text:`PuddleFish Brewery — Cervecería ★4.6 (808 reseñas)`,url:`https://maps.google.com/?cid=13116553035606468819`},{text:`Cafe Bohio — Café ★4.7 (274 reseñas)`,url:`https://maps.google.com/?cid=15684692709591387144`},{text:`Mahi Mahi Restaurant — Restaurante ★4.3 (206 reseñas)`,url:`https://maps.google.com/?cid=13015114035591487407`},{text:`Restaurante Vista Hermosa — Restaurante de mariscos ★4.4 (960 reseñas)`,url:`https://maps.google.com/?cid=10605020768466844964`}],rules:[`El acceso al Beach Club está incluido con la tarjeta de afiliado; reponerla cuesta $50 si se pierde.`,`Respetar las reglas de la piscina (es de uso del condominio).`,`No se permite recibir visitas por política del condominio.`,`Prohibido colgar ropa o toallas visibles desde la zona de piscina.`,`Volumen moderado después de las 10:00 pm.`,`No fumar dentro de la casa (aplica cargo de limpieza y posibles penalidades).`,`No mover el mobiliario de lugar.`,`No se permiten fiestas ni eventos.`,`Mascotas a discreción del anfitrión; no pueden subirse a camas ni sofás.`,`Capacidad máxima 6-8 personas según la unidad; todos los huéspedes deben estar identificados.`,`Solo puede ingresar antes del check-in la gente pre-registrada.`,`Uso de drogas ilegales: se reporta a las autoridades y se pide desalojar.`]},localExperiences:be,messages:[...Se(),...Ce()],units:[{id:`u23a`,name:`Casa 23A`,num:`23A`,pax:`8`,parqueo:`2 parqueos o dejar afuera todo bien`,accessCode:`Código de caja: #1991`,forms:`NO`,correo:`NO`,whatsapp:`SI`,app:`NO`,listing:{title:`Hermosa Palms Breeze & Beach Club`,url:`https://zafiropm.hostify.club/listing/400017387`,guests:8,bedrooms:3,beds:5,bathrooms:2,description:`Dúplex en comunidad cerrada frente al mar. Sala, cocina equipada, comedor exterior, bar, 2 baños completos, terraza en la azotea y 3 habitaciones. Parqueo para 3 vehículos, jardín trasero y acceso al Beach Club con spa, restaurante, bar y cafetería.`,images:[k(`1f457b222695fd78a6a5a827e8a0363b`),k(`0516210dfb86d01bd7b0cd5e8a8f5024`),k(`032c92a01fa55b2c1ba5a71c2944f367`),k(`d9392fb064c2d52285cd0d5585ee8a44`),k(`4adb9a5afb2bf23527326420859ca97e`)]},rooms:[`Habitación 1: Cama king`,`Habitación 2: Cama king`,`Habitación 3: 2 camas individuales`,`2 baños separados de las habitaciones`],extra:[[`Distribución`,`3 habitaciones, 4 camas, 2 baños`],[`Internet 1er piso`,`ITALMEX / chupichingon`],[`Internet 2do piso`,`ITALMEX 2D / chupichingonup`],[`Piscina`,`9AM–9PM`]],guiaDigital:{url:`https://auditoria.zafiropm.com/g/afbdc39b-756b-49e7-ad29-9e06d1ac1d9c`,nota:`Guía digital confirmada como link fijo de esta propiedad (Zafiro confirmó que Místico usa el mismo patrón). Check-out confirmado: 11:00 AM.`,comoLlegar:`https://maps.google.com/maps?daddr=9.5620728020015,-84.582859615869`},checkin:[{id:`23a-checkin`,title:`Check In Casa 23A`,body:`Hello.
Your arrival is just around the corner and we want to make sure it goes as smoothly as possible. If you have not yet provided the information requested in the previous message, please do so, as without it, entry will not be possible.

Arrival links:
Waze: https://waze.com/ul/hd1ey7k83b
Google Maps: https://goo.gl/maps/wocaUdp4KHJrEZzm7

Arrival and departure instructions:
Please provide the vehicle registration number, full names and identification documents of all guests of legal age to enter the main entrance of the condominium.

Entrance to the house:
At the main entrance, you will check in with the security staff, identifying yourself and your visitors. Ask the guard to direct you to house #23A. Once there, use the safe box at the main door to access the keys (code: #1991).

General information

First-floor Internet:
Username: ITALMEX
Password: chupichingon

Second-floor Internet:
Username: ITALMEX 2D
Password: chupichingonup

Pool access:
The condo facilities, including the pool, are available for guest use from 9 a.m. to 9 p.m.

Mod cons:
Free use of gas barbecue and access to beach club. Please note that charges may apply for any repairs or losses.

House Rules:
*Access to the Beach Club is included; A replacement card costs $50 if lost.
* Respect the pool rules to avoid interruptions.
*Visitors are not allowed due to condominium policies.
* Avoid drying clothes visible from the pool area.
*Glass objects are not allowed in the pool area.
*Moderate noise after 10:00 p.m.
* Smoking prohibited inside; Fees and penalties apply.
* Clean and wash kitchen utensils after using them.
* DO NOT rearrange furniture.
* Parties or events are not allowed.
*Pets allowed at our discretion; an additional charge applies.
*Guests must be identified; The accommodation capacity is 8 people.
*Visitors or additional people beyond the reservation are not allowed.
* The consumption of illegal drugs is not allowed.
*In case of loss of the access card, a replacement fee of $35 will be applied. If the towels or cloths become irreversibly stained, a charge of $40 will also be applied.
* Lastly, as this is an Airbnb community and a private family home, please respect and keep the property clean before departure.

We look forward to your stay!

Kind regards,
Zafiro Property Managment`},{id:`23a-checkin-es`,title:`Check In Casa 23A (Español)`,body:`Hola.
Tu llegada está a punto de llegar y queremos asegurarnos de que todo salga lo mejor posible. Si aún no has proporcionado la información solicitada en el mensaje anterior, te rogamos que lo hagas, ya que sin ella no será posible el ingreso.

Enlaces de llegada:
Waze: https://waze.com/ul/hd1ey7k83b
Google Maps: https://goo.gl/maps/wocaUdp4KHJrEZzm7

Instrucciones de llegada y salida:
Por favor proporcioná el número de placa del vehículo, los nombres completos y los documentos de identificación de todos los huéspedes mayores de edad, para poder ingresar por la entrada principal del condominio.

Entrada a la casa:
En la entrada principal, vas a registrarte con el personal de seguridad, identificándote a vos y a tus visitantes. Pedile al guarda que te indique cómo llegar a la casa #23A. Una vez ahí, usá la caja de seguridad en la puerta principal para acceder a las llaves (código: #1991).

Información general

Internet primer piso:
Usuario: ITALMEX
Contraseña: chupichingon

Internet segundo piso:
Usuario: ITALMEX 2D
Contraseña: chupichingonup

Acceso a la piscina:
Las instalaciones del condominio, incluyendo la piscina, están disponibles para uso de los huéspedes de 9 a.m. a 9 p.m.

Comodidades:
Uso libre de parrilla a gas y acceso al beach club. Tené en cuenta que pueden aplicar cargos por reparaciones o pérdidas.

Reglas de la casa:
- El acceso al Beach Club está incluido; una tarjeta de reemplazo cuesta $50 si se pierde.
- Respetá las reglas de la piscina para evitar interrupciones.
- No se permiten visitas por las políticas del condominio.
- Evitá colgar ropa visible desde la zona de la piscina.
- No se permiten objetos de vidrio en la zona de la piscina.
- Ruido moderado después de las 10:00 p.m.
- Prohibido fumar dentro; aplican tarifas y penalizaciones.
- Limpiá y lavá los utensilios de cocina después de usarlos.
- NO reordenes los muebles.
- No se permiten fiestas ni eventos.
- Se admiten mascotas a nuestra discreción; aplica un cargo adicional.
- Los huéspedes deben estar identificados; la capacidad del alojamiento es de 8 personas.
- No se permiten visitas ni personas adicionales a la reserva.
- No está permitido el consumo de drogas ilegales.
- En caso de pérdida de la tarjeta de acceso, se aplicará una tarifa de reemplazo de $35. Si las toallas o paños se manchan de forma irreversible, también se aplicará un cargo de $40.
- Por último, como esta es una comunidad de Airbnb y una vivienda familiar privada, por favor respetá y mantené la propiedad limpia antes de la salida.

¡Esperamos tu estadía!

Saludos cordiales,
Zafiro Property Managment`}]},{id:`u23b`,name:`Hermosa Palms Zafiro 23B`,num:`23B`,pax:`6`,parqueo:`2 parqueos o dejar afuera todo bien`,accessCode:`Código de caja: 3287`,forms:`NO`,correo:`NO`,whatsapp:`SI`,app:`NO`,listing:{title:`Hermosa Palms Refuge Beach Front Club House`,url:`https://zafiropm.hostify.club/listing/400013842`,guests:6,bedrooms:3,beds:4,bathrooms:2,description:`Casa "Refugio Hermosa" dentro del Refugio Nacional de Vida Silvestre Playa Hermosa. Habitación principal con cama king, segunda habitación con cama king y balcón, tercera con dos camas individuales. Sala y cocina de concepto abierto, terraza para comer entre la naturaleza, y acceso al Beach Club con piscina vista al mar y restaurante.`,images:[k(`29ecd8f305461b8437ab2d85ce826c88`),k(`a3c33b5f63319b034d25ed210839b6a4`),k(`9f61d33c2a578b7a314d95f75713bd47`),k(`ce0d5b90e907e3f9f6d7979cb6b58850`),k(`922e9a4ea8aaf892b72b873df633e8d8`)]},rooms:[`Habitación 1: Cama king`,`Habitación 2: Cama queen, 1 cama individual`,`Habitación 3: Cama queen, 1 cama individual`,`2 baños separados de las habitaciones`],extra:[[`Distribución`,`3 habitaciones, 5 camas, 2 baños`],[`Internet`,`CASA 23 / Casahermosa23`],[`Piscina`,`8AM–10PM`]],checkin:[{id:`23b-checkin`,title:`Check In Casa 23B`,body:`Hello
Your arrival is just around the corner and we want to make sure it goes as smoothly as possible. If you have not yet provided the information requested in the previous message, please do so, as without it, entry will not be possible.

Arrival links:
Waze: https://waze.com/ul/hd1ey7k83b
Google Maps: https://goo.gl/maps/wocaUdp4KHJrEZzm7

Arrival and departure instructions:
Please provide the vehicle registration number, full names and identification documents of all guests of legal age to enter the main entrance of the condominium.

Entrance to the house:
At the main entrance, guests will check in with security staff, identifying themselves and their visitors. Ask the guard to tell you how to get to house #23B. Once there, use the safe at the front door to access the keys (code: 3287).

General information

Internet:
User: CASA 23
Password: Casahermosa23

Pool access:
The condo facilities, including the pool, are available for guest use from 8 am to 10 pm

Mod cons:
Free use of gas barbecue and access to beach club. Please note that charges may apply for any repairs or losses.

House Rules:
*Access to the Beach Club is included; A replacement card costs $50 if lost.
* Respect the pool rules to avoid interruptions.
*Visitors are not allowed due to condominium policies.
* Avoid drying clothes visible from the pool area.
*Glass objects are not allowed in the pool area.
*Moderate noise after 10:00 p.m.
* Smoking prohibited inside; Fees and penalties apply.
* Clean and wash kitchen utensils after using them.
* DO NOT rearrange furniture.
* Parties or events are not allowed.
*Pets allowed at our discretion; an additional charge applies.
*Guests must be identified; The accommodation capacity is 6 people.
*Visitors or additional people beyond the reservation are not allowed.
* The consumption of illegal drugs is not allowed.
*In case of loss of the access card, a replacement fee of $35 will be applied. If the towels or cloths become irreversibly stained, a charge of $40 will also be applied.
* Lastly, as this is an Airbnb community and a private family home, please respect and keep the property clean before departure.

We look forward to your stay!

Kind regards,
Zafiro Property Managment`},{id:`23b-checkin-es`,title:`Check In Casa 23B (Español)`,body:`Hola
Tu llegada está a punto de llegar y queremos asegurarnos de que todo salga lo mejor posible. Si aún no has proporcionado la información solicitada en el mensaje anterior, te rogamos que lo hagas, ya que sin ella no será posible el ingreso.

Enlaces de llegada:
Waze: https://waze.com/ul/hd1ey7k83b
Google Maps: https://goo.gl/maps/wocaUdp4KHJrEZzm7

Instrucciones de llegada y salida:
Por favor proporcioná el número de placa del vehículo, los nombres completos y los documentos de identificación de todos los huéspedes mayores de edad, para poder ingresar por la entrada principal del condominio.

Entrada a la casa:
En la entrada principal, los huéspedes van a registrarse con el personal de seguridad, identificándose ellos y sus visitantes. Pedile al guarda que te indique cómo llegar a la casa #23B. Una vez ahí, usá la caja de seguridad en la puerta principal para acceder a las llaves (código: 3287).

Información general

Internet:
Usuario: CASA 23
Contraseña: Casahermosa23

Acceso a la piscina:
Las instalaciones del condominio, incluyendo la piscina, están disponibles para uso de los huéspedes de 8 a.m. a 10 p.m.

Comodidades:
Uso libre de parrilla a gas y acceso al beach club. Tené en cuenta que pueden aplicar cargos por reparaciones o pérdidas.

Reglas de la casa:
- El acceso al Beach Club está incluido; una tarjeta de reemplazo cuesta $50 si se pierde.
- Respetá las reglas de la piscina para evitar interrupciones.
- No se permiten visitas por las políticas del condominio.
- Evitá colgar ropa visible desde la zona de la piscina.
- No se permiten objetos de vidrio en la zona de la piscina.
- Ruido moderado después de las 10:00 p.m.
- Prohibido fumar dentro; aplican tarifas y penalizaciones.
- Limpiá y lavá los utensilios de cocina después de usarlos.
- NO reordenes los muebles.
- No se permiten fiestas ni eventos.
- Se admiten mascotas a nuestra discreción; aplica un cargo adicional.
- Los huéspedes deben estar identificados; la capacidad del alojamiento es de 6 personas.
- No se permiten visitas ni personas adicionales a la reserva.
- No está permitido el consumo de drogas ilegales.
- En caso de pérdida de la tarjeta de acceso, se aplicará una tarifa de reemplazo de $35. Si las toallas o paños se manchan de forma irreversible, también se aplicará un cargo de $40.
- Por último, como esta es una comunidad de Airbnb y una vivienda familiar privada, por favor respetá y mantené la propiedad limpia antes de la salida.

¡Esperamos tu estadía!

Saludos cordiales,
Zafiro Property Managment`}]}]},{id:`del-roble`,group:`guanacaste`,name:`Del Roble Refuge - Hacienda Pinilla`,zone:`Guanacaste · Hacienda Pinilla (Lagos de Palma Real)`,owner:`Melissa Marie`,quickInfo:[[`Check in`,`3:00 PM`],[`Check out`,`11:00 AM`],[`Early check in`,`Dejar maletas desde 12PM (no pueden entrar a la casa)`],[`Beach club`,`Sí tiene`],[`Puertas`,`Llave física (candado en la entrada)`],[`TV`,`Streaming, sin cable`],[`Parqueos`,`2 vehículos + visitas`],[`Mascotas`,`$50/día, no en estadías de 5 días`],[`Visitantes`,`Solo estadías +5 días y con identificación`],[`Check in interno`,`App HAC, enviar QR para ingresar`],[`Parrilla`,`Sí hay`],[`Limpieza`,`LPR 241`],[`Dirección`,`Lagos de Palma Real, Hacienda Pinilla, Tamarindo, 50309`],[`Acceso`,`Desde Aeropuerto Liberia (LIR): ~1h15. Desde San José (SJO): ~4.5-5h. Se recomienda alquilar auto; dentro de Hacienda Pinilla conviene auto, carrito de golf o bicicleta.`],[`Número de casa`,`Casa #41, Lagos de Palma Real (confirmado — el mensaje de check-in viejo decía #42 por error, ya corregido)`]],publicInfo:{amenities:[`WiFi`,`A/C`,`Piscina`,`Jacuzzi`,`Cocina equipada`,`Parqueo gratis`,`Cancha de golf`,`Tenis`,`Concierge`,`TV cable`,`Caja fuerte`,`Comunidad cerrada`,`Bicicletas`],nearby:[`Lola's — Restaurante ★4.4 (2471 reseñas)`,`El Mercadito de Tamarindo Food and Cocktail Market — Restaurante ★4.6 (2691 reseñas)`,`El Chiringuito — Restaurante ★4.3 (1227 reseñas)`,`Langosta Beach Club — Restaurante ★4.3 (811 reseñas)`,`Dragonfly Bar & Grill — Restaurante ★4.7 (1036 reseñas)`],rules:[`Respetar los horarios de check-in / check-out salvo acuerdo previo.`,`No se permiten fiestas ni eventos.`,`No exceder el máximo de ocupación.`,`Silencio después de las 10:00 pm.`,`No fumar dentro de la propiedad.`,`Mascotas solo con aprobación previa.`,`Cuidar la casa como si fuera propia; reportar cualquier daño de inmediato.`,`Seguir todas las reglas del residencial Hacienda Pinilla durante la estadía.`]},localExperiences:xe,units:[{id:`roble-241`,name:`Unidad`,num:`LPR 241`,pax:`10`,parqueo:`2 parqueos`,accessCode:`Código de caja: #4102`,forms:`No`,correo:`NO`,whatsapp:`NO`,app:`SI (HAC)`,guiaDigital:{url:`https://auditoria.zafiropm.com/g/31bf8720-3645-47bb-ae7e-0ba3ea3bf945`,nota:`Guía digital de esta unidad.`,comoLlegar:`https://maps.google.com/maps?daddr=10.252623753755,-85.850157275922`},listing:{title:`Del Roble Refuge, Hacienda Pinilla, Beach House`,url:`https://zafiropm.hostify.club/listing/400035799`,guests:10,bedrooms:3,beds:5,bathrooms:4.5,description:`Villa de estilo español dentro de Hacienda Pinilla, con habitaciones amplias cada una con baño privado. Vive de forma indoor-outdoor con acceso a Beach Club, cancha de golf, canchas de tenis y senderos para bicicleta dentro de más de 4,500 acres de terreno preservado.`,images:[k(`7eb119ea7d1b7b0d2348fc2b927f211f`),k(`897ace8bc9633a82ccc67fec842f9c68`),k(`f3930fc9a8e974ebae13de1b07d9d6ac`),k(`985ae3932a79d5c18712726fbd7c96fd`),k(`9836f1d27642fb12d1d1f7ddf0b64cee`)]},rooms:[`Habitación 1: Cama king`,`Habitación 2: Cama queen, 1 individual`,`Habitación 3: Cama queen, 1 individual`,`3.5 baños`],extra:[[`Distribución`,`3 habitaciones, 5 camas, 3.5 baños`],[`Internet`,`LPR 241 (4102) / PinillaLagos241`],[`Piscina`,`8AM–9PM`]]}],messages:[...Se(),{id:`roble-checkin`,title:`Check In`,body:`Hello!
Your arrival day is here and we want to make sure it goes as smoothly as possible. If you have not yet provided the information requested in the previous message, please do so, as without it, entry will not be possible.

Arrival links:
Waze: Hacienda Pinilla (MAIN ENTRANCE) - https://waze.com/ul/hd1ffrq5b7
Lagos de palma Real (ONCE YOU ARE INSIDE HACIENDA PINILLA) - https://waze.com/ul/hd1ffqd1cv
Google Maps: https://goo.gl/maps/wocaUdp4KHJrEZzm7

Entrance to the house:
At the main entrance, you will check in with the security staff, identifying yourself and your visitors. Ask the guard to direct you to house #41 In Lagos de Palma Real. Once there, use the safe box at the main door to access the keys (code: #4102).

General information

Internet:
Username: LPR 241
Password: PinillaLagos241

Pool access:
The condo facilities, including the pool, are available for guest use from 8 a.m. to 9 p.m.

House Rules:
* Respect the pool rules to avoid interruptions.
*Visitors are not allowed due to condominium policies.
*Glass objects are not allowed in the pool area.
*Moderate noise after 10:00 p.m.
* Smoking prohibited inside; Fees and penalties apply.
* Clean and wash kitchen utensils after using them.
* DO NOT rearrange furniture.
* Parties or events are not allowed.
*Pets allowed at our discretion; an additional charge applies.
*Guests must be identified before the arrival so authorization can be sent to security.
* The consumption of illegal drugs is not allowed.
If the towels or cloths become irreversibly stained, a charge of $40 will also be applied.
* Lastly, as this is an Airbnb community and a private family home, please respect and keep the property clean before departure.

Beach access:
You have full access to all the beaches inside Hacienda Pinilla. The beaches closer to the House are called Playa Mansita and Playa Langosta, they have amazing sunsets to check out.

General Map inside Hacienda Pinilla:
https://www.flipsnack.com/CCC967BBDC9/general-map-hacienda-pinilla/full-view.html

Lagos de Palma Real Map: (Your unit 241)
https://www.flipsnack.com/CCC967BBDC9/palma-real-residential-map/full-view.html

Golf cart information:
We recommend this supplier in case you need to rent a golf cart
Sea Scape Rentals (Paulina Suarez) phone number +50684836903

We look forward to your stay!

Kind regards,
Zafiro Property Management`},{id:`roble-checkin-es`,title:`Check In (Español)`,body:`¡Holaaa!

Tu día de llegada ya está aquí y queremos asegurarnos de que todo vaya lo mejor posible. Si aún no has proporcionado la información solicitada en el mensaje anterior, te rogamos que lo hagas, ya que sin ella no será posible la entrada.

Enlaces de llegada:
Waze: Hacienda Pinilla (ENTRADA PRINCIPAL)
https://waze.com/ul/hd1ffrq5b7

Lagos de Palma Real (UNA VEZ QUE ESTÉS DENTRO DE HACIENDA PINILLA)
https://waze.com/ul/hd1ffqd1cv

Google Maps: https://goo.gl/maps/wocaUdp4KHJrEZzm7

Entrada a la casa:
En la entrada principal, te registrarás con el personal de seguridad, identificándote a ti y a tus visitantes. Pídele al guardia que te dirija a la casa n.º 41 en Lagos de Palma Real. Una vez allí, utiliza la caja fuerte de la puerta principal para acceder a las llaves.
Código: 4102

Información general

Internet:
Nombre: 4102
Contraseña: PinillaLagos241

Acceso a la piscina:
Las instalaciones del apartamento, incluida la piscina, están disponibles para el uso de los huéspedes de 8:00 a 21:00 horas.

Reglas de la casa:
- Respetar las reglas de la piscina para evitar interrupciones.
- No se permiten visitas debido a las políticas del condominio.
- No se permiten objetos de vidrio en la zona de la alberca.
- Ruido moderado después de las 22:00 h.
- Prohibido fumar en el interior; se aplican tarifas y penalizaciones.
- Limpia y lava los utensilios de cocina después de usarlos.
- NO REORDENES los muebles.
- Las fiestas o eventos no están permitidas.
- Se admiten mascotas a nuestra discreción; se aplica un cargo adicional.
- Los huéspedes deben identificarse antes de la llegada para que se pueda enviar la autorización al servicio de seguridad.
- No está permitido el consumo de drogas ilegales.
Si las toallas o los paños se manchan irreversiblemente, también se aplicará un cargo de 40 $.
- Por último, como se trata de una comunidad de Airbnb y una vivienda familiar privada, respeta y mantén la propiedad limpia antes de la salida.

Acceso a la playa:
Tienes acceso completo a todas las playas dentro de Hacienda Pinilla. Las playas más cercanas a la casa se llaman Playa Mansita y Playa Langosta, tienen puestas de sol increíbles para ver.

Mapa general dentro de Hacienda Pinilla:
https://www.flipsnack.com/CCC967BBDC9/general-map-hacienda-pinilla/full-view.html

Mapa de Lagos de Palma Real: (Tu unidad 241)
https://www.flipsnack.com/CCC967BBDC9/palma-real-residential-map/full-view.html

Información sobre el carrito de golf:
Recomendamos este proveedor en caso de que necesites alquilar un carrito de golf.
Sea Scape Rentals (Paulina Suarez) número de teléfono +50684836903

¡Esperamos tu estancia!

Saludos cordiales,
Zafiro Property Management`},...Ce()]},{id:`casa-mistica`,group:`jaco`,name:`Casa Mística`,zone:`Jacó · Playa Hermosa (Místico)`,owner:`Jose Alberto`,quickInfo:[[`Check in`,`3:00 PM`],[`Check out`,`11:00 AM`],[`Early check in`,`Dejar maletas desde 12PM (no pueden entrar a la casa)`],[`Beach club`,`No tiene, hay café cerca de las caballerizas`],[`Puertas`,`Llave física (la dan los guardas)`],[`TV`,`Streaming, sin cable`],[`Parqueos`,`2 vehículos + visitas`],[`Mascotas`,`No se permiten`],[`Visitantes`,`Solo estadías +5 días y con identificación`],[`Check in interno`,`Enviar mensaje con datos de huéspedes, fechas y # casa antes de las 11AM`],[`Parrilla`,`No hay, cocina totalmente equipada`]],publicInfo:{amenities:[`WiFi`,`A/C`,`Piscina`,`Cocina equipada`,`Parqueo gratis`,`TV`,`Agua caliente`,`Vista al lago`,`Lavadora`],note:`La ficha pública de esta propiedad no detalla reglas de la casa; para dudas específicas usar el link de la ficha.`},localExperiences:be,guiaDigital:{url:`https://auditoria.zafiropm.com/g/a52dbe38-b076-45d0-b128-615ea8cddb10`,nota:`Guía digital que recibe el huésped al llegar (dirección con Google Maps, checklist de salida, wifi/keypad, reglas, botón de emergencias 911, link de reseña en Airbnb y link de reserva directa).`,comoLlegar:`https://maps.google.com/maps?daddr=9.5627822318555,-84.576035575269`},units:[{id:`barca5`,name:`Barca 5`,num:`Barca 5`,pax:`8`,parqueo:`Espacio #5 (asignado exclusivamente a Barca 5)`,forms:`NO`,correo:`NO`,whatsapp:`SI`,app:`SI (ADITUM)`,listing:{title:`Mística Lakeside House (Místico)`,url:`https://zafiropm.hostify.club/listing/400030821`,guests:8,bedrooms:3,beds:3,bathrooms:2.5,description:`Casa dentro del residencial Místico, frente al lago. 3 habitaciones, cocina completamente equipada, piscina y vista al lago muy tranquila. A pocos minutos de Jacó y Herradura.`,images:[k(`c027856b8bec4f91f299a2a4e97dff72`),k(`8f7483e2eb3743b4a3126cbe7d05e9d1`),k(`ab64a3470e7c82668c64630d0b24fd77`),k(`1ea877f516ca9187aea619b24ce4501a`),k(`5f9d127d02e8d2a37ac79ae799e225b3`)]},rooms:[`Habitación 1: Cama queen`,`Habitación 2: Cama queen`,`Habitación 3: 1 camarote cama queen`,`2.5 baños separados de las habitaciones`],extra:[[`Distribución`,`3 habitaciones, 5 camas, 2.5 baños`],[`WiFi`,`TicoPassCasa5ONU / Jose2024$`],[`KeyPad`,`74742`]]}],messages:[...Se(),{id:`mistica-ingreso`,title:`Check In (Español)`,body:`Muy buenas tardes:

Esperamos sinceramente que te encuentres muy bien y que tu viaje haya sido placentero. Nos complace darte la bienvenida y brindarte las indicaciones necesarias para tu ingreso a la propiedad.

Al llegar a Místico, por favor dirígete al puesto de seguridad para realizar tu registro de ingreso. Indica al oficial de seguridad que te diriges a Barca 5; él te proporcionará las llaves correspondientes.

Una vez que hayas ingresado al residencial, podrás estacionar tu vehículo en el espacio de parqueo número 5, el cual está asignado exclusivamente a Barca 5.

KeyPad de la puerta: 74742

Con respecto al WIFI:
El usuario sería: TicoPassCasa5ONU
La clave: Jose2024$

Por favor, no dudes en comunicarte con nosotros si surge alguna pregunta o si necesitas asistencia adicional durante tu estadía. Estamos a tu disposición para ayudarte en lo que necesites y deseamos que disfrutes al máximo tu tiempo con nosotros.

¡Que tengas una excelente estadía!`},{id:`mistica-ingreso-en`,title:`Check In`,body:`Good afternoon:

We sincerely hope you are doing well and that your trip was a pleasant one. We're happy to welcome you and give you the instructions you'll need to enter the property.

Upon arriving at Místico, please head to the security post to complete your entry check-in. Let the security officer know you're heading to Barca 5; he'll provide you with the corresponding keys.

Once you've entered the residential community, you can park your vehicle in parking spot number 5, which is assigned exclusively to Barca 5.

Door KeyPad: 74742

Regarding the WIFI:
Username: TicoPassCasa5ONU
Password: Jose2024$

Please don't hesitate to reach out if you have any questions or need additional assistance during your stay. We're here to help with whatever you need, and we hope you enjoy your time with us to the fullest.

Have a wonderful stay!`},...Ce()]},{id:`praia`,group:`jaco`,name:`Casa Praia`,zone:`Jacó · The Town at Praia`,owner:`Bruno Casalvolone`,note:`En las guías de cada propiedad está la información de la clave y del internet.`,quickInfo:[[`Check in`,`3:00 PM`],[`Check out`,`11:00 AM`],[`Early check in`,`Dejar maletas desde 12PM (no pueden entrar a la casa)`],[`Beach club`,`Sí`],[`Puertas`,`Código; si falla, candado con llave física a la par`],[`TV`,`Streaming, sin cable`],[`Parqueos`,`1 vehículo + visitas sujeto a disponibilidad`],[`Mascotas`,`Solo de servicio`],[`Visitantes`,`Solo estadías +5 días y con identificación`],[`Check in interno`,`Enviar mensaje con datos de huéspedes, fechas y # casa antes de las 11AM`],[`Parrilla`,`Llamar a Felipe si se necesita limpieza`]],publicInfo:{amenities:[`WiFi`,`A/C`,`Piscina privada`,`Piscina infantil`,`Cocina equipada`,`Parqueo gratis`,`Gimnasio`,`BBQ`,`Lavadora`,`Secadora`,`TV`,`Workspace`,`Cargador EV`],nearby:[{text:`Koko — Restaurante ★4.6 (1123 reseñas)`,url:`https://maps.google.com/?cid=1347495756619901181`},{text:`Vida Hermosa Bar and Restaurant — Restaurante de mariscos ★4.5 (1635 reseñas)`,url:`https://maps.google.com/?cid=6973166465829797315`},{text:`Restaurant Green Room Jaco — Restaurante ★4.4 (1688 reseñas)`,url:`https://maps.google.com/?cid=9084303398156280050`},{text:`Soda Garabito — Restaurante ★4.6 (2382 reseñas)`,url:`https://maps.google.com/?cid=12181984869846835961`},{text:`Orange Pub — Bar ★4.0 (570 reseñas)`,url:`https://maps.google.com/?cid=13042613877878419361`}],rules:[`Solo pueden ingresar los huéspedes registrados en la reserva; visitas no autorizadas serán rechazadas por seguridad.`,`Cualquier visita debe aprobarse con el anfitrión de antemano.`,`Horario de silencio: 10:00 pm a 7:00 am.`,`La piscina y zona de BBQ son exclusivas de los huéspedes registrados; supervisar niños en todo momento.`,`No fiestas, no música alta, no fumar dentro de la casa.`,`Enjuagar la arena antes de entrar a la casa o piscina.`,`Comunidad cerrada con seguridad 24/7 — cerrar siempre el portón principal.`,`Cuidar la casa como propia y reportar cualquier daño de inmediato.`]},localExperiences:be,messages:[...Se(),...Ce()],units:[{id:`praia43`,name:`Praia 43`,num:`43`,pax:`8`,parqueo:`1 parqueo y visitas`,forms:`NO`,correo:`NO`,whatsapp:`SI`,app:`NO`,rooms:[`Habitación 1 y 3: Cama king`,`Habitación 2: 1 cama king, 1 camarote`,`Baños completos separados de las habitaciones`],extra:[[`Distribución`,`3 habitaciones, 3 baños`],[`WiFi`,`Praia 43 / cocodrilo`],[`KeyPad`,`567763`]],checkin:[{id:`praia43-checkin`,title:`Check In Praia 43`,body:`Hello,

We're so excited to welcome you! Your stay is just around the corner, so here's everything you need for a smooth and easy check-in.

Default check-in time: 15:00
Default check-out time: 11:00

Location:
The Town at Praia – Jacó, Puntarenas, Costa Rica
(Only 1 minute from the beach and downtown Jacó)

Arrival links:
Waze: https://waze.com/ul/hd1ey7k83b
Google Maps: https://maps.app.goo.gl/dmUxn1Sz7tCZYmRDA

Early check-in or late check-out must be requested in advance and are subject to availability, depending on arrivals or departures that day. If not requested or confirmed, please respect these times so our cleaning team can prepare the house properly.

Check-in & House Access:
When you arrive, please stop by the community security gate and give your name. They'll point you straight to your assigned house.

Access details for your home:
- KeyPad Code: 567763
- Wifi Name: Praia 43
- Wifi Password: cocodrilo

How to Unlock the Door:
1. Touch the keypad to wake it up.
2. Enter your code: 567763
3. You'll hear a beep and see a confirmation light, then you can open the door.
4. If it doesn't open, wait a few seconds and re-enter the code slowly.
After 5 incorrect attempts, the keypad will lock for 1 minute as a safety feature.

How to Lock the Door:
- From inside: turn the thumb-turn knob until the bolt extends.
- From outside: close the door and press the lock icon on the keypad, or simply wait if auto-lock is enabled (it will lock itself after a few seconds).

Quick House Rules:
- Only registered guests allowed inside.
- No parties or loud music.
- No smoking inside the house.
- Please keep furniture in its place.
- Respect Maximum occupancy of the listing.

If you need anything before or during your stay, we're here for you. Enjoy your time at Praia!`},{id:`praia43-checkin-es`,title:`Check In Praia 43 (Español)`,body:`¡Hola!

¡Estamos muy emocionados de recibirte! Tu estadía está a la vuelta de la esquina, así que aquí tenés todo lo que necesitás para un check-in fácil y sin contratiempos.

Hora de check-in: 3:00 PM
Hora de check-out: 11:00 AM

Ubicación:
The Town at Praia – Jacó, Puntarenas, Costa Rica
(A solo 1 minuto de la playa y del centro de Jacó)

Enlaces de llegada:
Waze: https://waze.com/ul/hd1ey7k83b
Google Maps: https://maps.app.goo.gl/dmUxn1Sz7tCZYmRDA

El early check-in o late check-out se debe solicitar con anticipación y está sujeto a disponibilidad, según las llegadas o salidas de ese día. Si no se solicita o confirma, por favor respetá estos horarios para que nuestro equipo de limpieza pueda preparar la casa correctamente.

Check-in y acceso a la casa:
Al llegar, por favor pasá por la caseta de seguridad de la comunidad y dá tu nombre. Ellos te van a indicar exactamente cómo llegar a tu casa asignada.

Datos de acceso a tu casa:
- Código del KeyPad: 567763
- Nombre de la red WiFi: Praia 43
- Contraseña del WiFi: cocodrilo

Cómo abrir la puerta:
1. Tocá el teclado para activarlo.
2. Ingresá tu código: 567763
3. Vas a escuchar un beep y ver una luz de confirmación, y ahí podés abrir la puerta.
4. Si no abre, esperá unos segundos y volvé a ingresar el código despacio.
Después de 5 intentos incorrectos, el teclado se bloquea por 1 minuto como medida de seguridad.

Cómo cerrar la puerta:
- Desde adentro: girá la perilla hasta que el pasador se extienda.
- Desde afuera: cerrá la puerta y presioná el ícono de candado en el teclado, o simplemente esperá si el bloqueo automático está activado (se cierra solo después de unos segundos).

Reglas rápidas de la casa:
- Solo se permite el ingreso de huéspedes registrados.
- No se permiten fiestas ni música alta.
- No fumar dentro de la casa.
- Por favor mantené los muebles en su lugar.
- Respetá la capacidad máxima de la propiedad.

Cualquier cosa que necesités antes o durante tu estadía, estamos para ayudarte. ¡Disfrutá tu tiempo en Praia!`}],guiaDigital:{url:`https://auditoria.zafiropm.com/g/9fb36a72-02b6-4426-9805-d5f81800f5f4`,nota:`Guía digital de esta unidad (probablemente link fijo por propiedad, igual que Casa Mística). Trae también: instrucciones de A/C automático, cómo cerrar sesión de streaming, aviso de personal de mantenimiento uniformado, y checklist de basura/salida.`,comoLlegar:`https://maps.google.com/maps?daddr=9.6045936308635,-84.620826888391`},listing:{title:`The Town Praia 43`,url:`https://zafiropm.hostify.club/listing/400036456`,guests:8,bedrooms:3,beds:4,bathrooms:3,description:`Villa de 3 habitaciones y 3 baños completos en Casa Praia, Jacó. Piscina privada, zona de BBQ y espacios abiertos que combinan diseño moderno con confort tropical. Acceso al beach club de Casa Praia con jardines, restaurante y acceso directo al mar.`,images:[k(`bc6ae54d59939c52f26cc910f4d7209c`),k(`04b9f378079b320d6be213a2d26ddcb4`),k(`5463bbc6dd573cd0cb17bc25c4b32ef1`),k(`91c0d359db754c9dff8b4f17eda7e0de`),k(`bf21c11577b3e86789589c278c17c842`)]}},{id:`praia40`,name:`Praia 40`,num:`40`,pax:`6`,parqueo:`1 parqueo y visitas`,forms:`NO`,correo:`NO`,whatsapp:`SI`,app:`NO`,rooms:[`Habitación 1: Cama king`,`Habitación 2: 1 cama king, 1 camarote`,`2 baños completos separados de las habitaciones`],extra:[[`Distribución`,`2 habitaciones, 2.5 baños`],[`WiFi`,`Praia 40 / monocongo`],[`Touch Pad`,`225043`]],checkin:[{id:`praia40-checkin`,title:`Check In Praia 40`,body:`Hello,

We're so excited to welcome you! Your stay is just around the corner, so here's everything you need for a smooth and easy check-in.

Default check-in time: 15:00
Default check-out time: 11:00

Location:
The Town at Praia – Jacó, Puntarenas, Costa Rica
(Only 1 minute from the beach and downtown Jacó)

Arrival links:
Waze: https://waze.com/ul/hd1ey7k83b
Google Maps: https://maps.app.goo.gl/dmUxn1Sz7tCZYmRDA

Early check-in or late check-out must be requested in advance and are subject to availability, depending on arrivals or departures that day. If not requested or confirmed, please respect these times so our cleaning team can prepare the house properly.

Check-in & House Access:
When you arrive, please stop by the community security gate and give your name. They'll point you straight to your assigned house.

Access details for your home:
- Touch Pad Code: 225043
- Wifi Name: Praia 40
- Wifi Password: monocongo

How to Unlock the Door:
1. Touch the pad to wake it up.
2. Enter your code: 225043
3. You'll hear a beep and see a confirmation light, then you can open the door.
4. If it doesn't open, wait a few seconds and re-enter the code slowly.
After 5 incorrect attempts, the pad will lock for 1 minute as a safety feature.

How to Lock the Door:
- From inside: turn the thumb-turn knob until the bolt extends.
- From outside: close the door and press the lock icon on the pad, or simply wait if auto-lock is enabled (it will lock itself after a few seconds).

Quick House Rules:
- Only registered guests allowed inside.
- No parties or loud music.
- No smoking inside the house.
- Please keep furniture in its place.
- Respect Maximum occupancy of the listing.

If you need anything before or during your stay, we're here for you. Enjoy your time at Praia!`},{id:`praia40-checkin-es`,title:`Check In Praia 40 (Español)`,body:`¡Hola!

¡Estamos muy emocionados de recibirte! Tu estadía está a la vuelta de la esquina, así que aquí tenés todo lo que necesitás para un check-in fácil y sin contratiempos.

Hora de check-in: 3:00 PM
Hora de check-out: 11:00 AM

Ubicación:
The Town at Praia – Jacó, Puntarenas, Costa Rica
(A solo 1 minuto de la playa y del centro de Jacó)

Enlaces de llegada:
Waze: https://waze.com/ul/hd1ey7k83b
Google Maps: https://maps.app.goo.gl/dmUxn1Sz7tCZYmRDA

El early check-in o late check-out se debe solicitar con anticipación y está sujeto a disponibilidad, según las llegadas o salidas de ese día. Si no se solicita o confirma, por favor respetá estos horarios para que nuestro equipo de limpieza pueda preparar la casa correctamente.

Check-in y acceso a la casa:
Al llegar, por favor pasá por la caseta de seguridad de la comunidad y dá tu nombre. Ellos te van a indicar exactamente cómo llegar a tu casa asignada.

Datos de acceso a tu casa:
- Código del Touch Pad: 225043
- Nombre de la red WiFi: Praia 40
- Contraseña del WiFi: monocongo

Cómo abrir la puerta:
1. Tocá el teclado para activarlo.
2. Ingresá tu código: 225043
3. Vas a escuchar un beep y ver una luz de confirmación, y ahí podés abrir la puerta.
4. Si no abre, esperá unos segundos y volvé a ingresar el código despacio.
Después de 5 intentos incorrectos, el teclado se bloquea por 1 minuto como medida de seguridad.

Cómo cerrar la puerta:
- Desde adentro: girá la perilla hasta que el pasador se extienda.
- Desde afuera: cerrá la puerta y presioná el ícono de candado en el teclado, o simplemente esperá si el bloqueo automático está activado (se cierra solo después de unos segundos).

Reglas rápidas de la casa:
- Solo se permite el ingreso de huéspedes registrados.
- No se permiten fiestas ni música alta.
- No fumar dentro de la casa.
- Por favor mantené los muebles en su lugar.
- Respetá la capacidad máxima de la propiedad.

Cualquier cosa que necesités antes o durante tu estadía, estamos para ayudarte. ¡Disfrutá tu tiempo en Praia!`}],guiaDigital:{url:`https://auditoria.zafiropm.com/g/7af6a4b3-0869-4f66-9abd-01163252e9e9`,nota:`Guía digital de esta unidad. Trae también: instrucciones de A/C automático, cómo cerrar sesión de streaming, aviso de personal de mantenimiento uniformado, y checklist de basura/salida (mismo patrón que Praia 43).`,comoLlegar:`https://maps.google.com/maps?daddr=9.6079416891972,-84.615829569836`},listing:{title:`The Town Praia 40`,url:`https://zafiropm.hostify.club/listing/400036453`,guests:6,bedrooms:2,beds:3,bathrooms:2.5,description:`Casa de playa de 2 habitaciones con piscina privada, zona de BBQ y living abierto hacia el exterior. Cocina completamente equipada y acceso al beach club exclusivo de Casa Praia.`,images:[k(`dbc09f458c880412953a5e675715da76`),k(`c5f8db6409f97af0a8cc2f00a2a1cc36`),k(`2eed956163317799ed2bba583a0e901c`),k(`ff7152f7fe7ba4e5e77dafabb6364db6`),k(`d637af34b8ef04cbc4d3fbbe5fc8812f`)]}},{id:`praia38`,name:`Praia 38`,num:`38`,pax:`6`,parqueo:`1 parqueo y visitas`,forms:`NO`,correo:`NO`,whatsapp:`SI`,app:`NO`,rooms:[`Habitación 1: Cama king`,`Habitación 2: 1 cama king, 1 camarote`,`2 baños completos separados de las habitaciones`],extra:[[`Distribución`,`2 habitaciones, 2.5 baños`],[`WiFi`,`Praia 38 / colablanca`],[`KeyPad`,`531262`]],checkin:[{id:`praia38-checkin`,title:`Check In Praia 38`,body:`Hello,

We're so excited to welcome you! Your stay is just around the corner, so here's everything you need for a smooth and easy check-in.

Default check-in time: 15:00
Default check-out time: 11:00

Location:
The Town at Praia – Jacó, Puntarenas, Costa Rica
(Only 1 minute from the beach and downtown Jacó)

Arrival links:
Waze: https://waze.com/ul/hd1ey7k83b
Google Maps: https://maps.app.goo.gl/dmUxn1Sz7tCZYmRDA

Early check-in or late check-out must be requested in advance and are subject to availability, depending on arrivals or departures that day. If not requested or confirmed, please respect these times so our cleaning team can prepare the house properly.

Check-in & House Access:
When you arrive, please stop by the community security gate and give your name. They'll point you straight to your assigned house.

Access details for your home:
- KeyPad Code: 531262
- Wifi Name: Praia 38
- Wifi Password: colablanca

How to Unlock the Door:
1. Touch the keypad to wake it up.
2. Enter your code: 531262
3. You'll hear a beep and see a confirmation light, then you can open the door.
4. If it doesn't open, wait a few seconds and re-enter the code slowly.
After 5 incorrect attempts, the keypad will lock for 1 minute as a safety feature.

How to Lock the Door:
- From inside: turn the thumb-turn knob until the bolt extends.
- From outside: close the door and press the lock icon on the keypad, or simply wait if auto-lock is enabled (it will lock itself after a few seconds).

Quick House Rules:
- Only registered guests allowed inside.
- No parties or loud music.
- No smoking inside the house.
- Please keep furniture in its place.
- Respect Maximum occupancy of the listing.

If you need anything before or during your stay, we're here for you. Enjoy your time at Praia!`},{id:`praia38-checkin-es`,title:`Check In Praia 38 (Español)`,body:`¡Hola!

¡Estamos muy emocionados de recibirte! Tu estadía está a la vuelta de la esquina, así que aquí tenés todo lo que necesitás para un check-in fácil y sin contratiempos.

Hora de check-in: 3:00 PM
Hora de check-out: 11:00 AM

Ubicación:
The Town at Praia – Jacó, Puntarenas, Costa Rica
(A solo 1 minuto de la playa y del centro de Jacó)

Enlaces de llegada:
Waze: https://waze.com/ul/hd1ey7k83b
Google Maps: https://maps.app.goo.gl/dmUxn1Sz7tCZYmRDA

El early check-in o late check-out se debe solicitar con anticipación y está sujeto a disponibilidad, según las llegadas o salidas de ese día. Si no se solicita o confirma, por favor respetá estos horarios para que nuestro equipo de limpieza pueda preparar la casa correctamente.

Check-in y acceso a la casa:
Al llegar, por favor pasá por la caseta de seguridad de la comunidad y dá tu nombre. Ellos te van a indicar exactamente cómo llegar a tu casa asignada.

Datos de acceso a tu casa:
- Código del KeyPad: 531262
- Nombre de la red WiFi: Praia 38
- Contraseña del WiFi: colablanca

Cómo abrir la puerta:
1. Tocá el teclado para activarlo.
2. Ingresá tu código: 531262
3. Vas a escuchar un beep y ver una luz de confirmación, y ahí podés abrir la puerta.
4. Si no abre, esperá unos segundos y volvé a ingresar el código despacio.
Después de 5 intentos incorrectos, el teclado se bloquea por 1 minuto como medida de seguridad.

Cómo cerrar la puerta:
- Desde adentro: girá la perilla hasta que el pasador se extienda.
- Desde afuera: cerrá la puerta y presioná el ícono de candado en el teclado, o simplemente esperá si el bloqueo automático está activado (se cierra solo después de unos segundos).

Reglas rápidas de la casa:
- Solo se permite el ingreso de huéspedes registrados.
- No se permiten fiestas ni música alta.
- No fumar dentro de la casa.
- Por favor mantené los muebles en su lugar.
- Respetá la capacidad máxima de la propiedad.

Cualquier cosa que necesités antes o durante tu estadía, estamos para ayudarte. ¡Disfrutá tu tiempo en Praia!`}],guiaDigital:{url:`https://auditoria.zafiropm.com/g/887c7fd2-491d-481b-a203-7a3b4aa7907e`,nota:`Guía digital de esta unidad (mismo patrón que Praia 40/43: A/C automático, cerrar sesión de streaming, personal de mantenimiento uniformado, checklist de basura/salida).`,comoLlegar:`https://maps.google.com/maps?daddr=9.606667,-84.6166641`},listing:{title:`The Town Praia 38`,url:`https://zafiropm.hostify.club/listing/400036454`,guests:6,bedrooms:2,beds:3,bathrooms:2.5,description:`Villa tropical moderna en Casa Praia, Jacó. Piscina privada, BBQ exterior y acceso al beach club exclusivo. Cerca de restaurantes, playas de surf y parques naturales.`,images:[k(`6856b2f39844ec56586d982ef9a7b8fd`),k(`2b10c1db5785b3a858a18c2ae9616df5`),k(`e040d0b27d176c5bda3e031cc2b0e36f`),k(`8c3607178a08da5a743e48d7cb97700b`),k(`1c8ed934bdb7c85b90920f1e4902305e`)]}},{id:`praia37`,name:`Praia 37`,num:`37`,pax:`6`,parqueo:`1 parqueo y visitas`,forms:`NO`,correo:`NO`,whatsapp:`SI`,app:`NO`,rooms:[`Habitación 1: Cama king`,`Habitación 2: 1 cama king, 1 camarote`,`2 baños completos separados de las habitaciones`],extra:[[`Distribución`,`2 habitaciones, 2.5 baños`],[`WiFi`,`Praia 37 / tortugabaula`],[`KeyPad`,`841323`]],checkin:[{id:`praia37-checkin`,title:`Check In Praia 37`,body:`Hello,

We're so excited to welcome you! Your stay is just around the corner, so here's everything you need for a smooth and easy check-in.

Default check-in time: 15:00
Default check-out time: 11:00

Location:
The Town at Praia – Jacó, Puntarenas, Costa Rica
(Only 1 minute from the beach and downtown Jacó)

Arrival links:
Waze: https://waze.com/ul/hd1eyds8pj
Google Maps: https://maps.app.goo.gl/dmUxn1Sz7tCZYmRDA

Early check-in or late check-out must be requested in advance and are subject to availability, depending on arrivals or departures that day. If not requested or confirmed, please respect these times so our cleaning team can prepare the house properly.

Check-in & House Access:
When you arrive, please stop by the community security gate and give your name. They'll point you straight to your assigned house.

Access details for your home:
- KeyPad Code: 841323
- Wifi Name: Praia 37
- Wifi Password: tortugabaula

How to Unlock the Door:
1. Touch the keypad to wake it up.
2. Enter your code: 841323
3. You'll hear a beep and see a confirmation light, then you can open the door.
4. If it doesn't open, wait a few seconds and re-enter the code slowly.
After 5 incorrect attempts, the keypad will lock for 1 minute as a safety feature.

How to Lock the Door:
- From inside: turn the thumb-turn knob until the bolt extends.
- From outside: close the door and press the lock icon on the keypad, or simply wait if auto-lock is enabled (it will lock itself after a few seconds).

Quick House Rules:
- Only registered guests allowed inside.
- No parties or loud music.
- No smoking inside the house.
- Please keep furniture in its place.
- Respect Maximum occupancy of the listing.

If you need anything before or during your stay, we're here for you. Enjoy your time at Praia!`},{id:`praia37-checkin-es`,title:`Check In Praia 37 (Español)`,body:`¡Hola!

¡Estamos muy emocionados de recibirte! Tu estadía está a la vuelta de la esquina, así que aquí tenés todo lo que necesitás para un check-in fácil y sin contratiempos.

Hora de check-in: 3:00 PM
Hora de check-out: 11:00 AM

Ubicación:
The Town at Praia – Jacó, Puntarenas, Costa Rica
(A solo 1 minuto de la playa y del centro de Jacó)

Enlaces de llegada:
Waze: https://waze.com/ul/hd1eyds8pj
Google Maps: https://maps.app.goo.gl/dmUxn1Sz7tCZYmRDA

El early check-in o late check-out se debe solicitar con anticipación y está sujeto a disponibilidad, según las llegadas o salidas de ese día. Si no se solicita o confirma, por favor respetá estos horarios para que nuestro equipo de limpieza pueda preparar la casa correctamente.

Check-in y acceso a la casa:
Al llegar, por favor pasá por la caseta de seguridad de la comunidad y dá tu nombre. Ellos te van a indicar exactamente cómo llegar a tu casa asignada.

Datos de acceso a tu casa:
- Código del KeyPad: 841323
- Nombre de la red WiFi: Praia 37
- Contraseña del WiFi: tortugabaula

Cómo abrir la puerta:
1. Tocá el teclado para activarlo.
2. Ingresá tu código: 841323
3. Vas a escuchar un beep y ver una luz de confirmación, y ahí podés abrir la puerta.
4. Si no abre, esperá unos segundos y volvé a ingresar el código despacio.
Después de 5 intentos incorrectos, el teclado se bloquea por 1 minuto como medida de seguridad.

Cómo cerrar la puerta:
- Desde adentro: girá la perilla hasta que el pasador se extienda.
- Desde afuera: cerrá la puerta y presioná el ícono de candado en el teclado, o simplemente esperá si el bloqueo automático está activado (se cierra solo después de unos segundos).

Reglas rápidas de la casa:
- Solo se permite el ingreso de huéspedes registrados.
- No se permiten fiestas ni música alta.
- No fumar dentro de la casa.
- Por favor mantené los muebles en su lugar.
- Respetá la capacidad máxima de la propiedad.

Cualquier cosa que necesités antes o durante tu estadía, estamos para ayudarte. ¡Disfrutá tu tiempo en Praia!`}],comoLlegar:`https://maps.app.goo.gl/dmUxn1Sz7tCZYmRDA`,listing:{title:`The Town Praia 37`,url:`https://zafiropm.hostify.club/listing/400036455`,guests:6,bedrooms:2,beds:3,bathrooms:2.5,description:`Villa contemporánea a pasos del mar en Casa Praia, Jacó. Piscina privada, BBQ y diseño tropical elegante. A 40 minutos del Parque Nacional Manuel Antonio.`,images:[k(`bdbe6242f79dd8b1d2a4f96dd03651d4`),k(`aa44087bc53c881223beb1002f0f08bb`),k(`a6cc3c872a9246818fedcb2569331a69`),k(`9ae067a47abccc4aaf0c2eee5144a285`),k(`19924dd33af02da18fd147a80549c461`)]}},{id:`praia42`,name:`Praia 42`,num:`42`,pax:`6`,parqueo:`1 parqueo y visitas`,forms:`NO`,correo:`NO`,whatsapp:`SI`,app:`NO`,rooms:[`Habitación 1: Cama king`,`Habitación 2: 1 cama king, 1 camarote`,`2 baños completos separados de las habitaciones`],extra:[[`Distribución`,`2 habitaciones, 2.5 baños`],[`WiFi`,`Praia 42 / laparoja`],[`KeyPad`,`755714`]],checkin:[{id:`praia42-checkin`,title:`Check In Praia 42`,body:`Hello,

We're so excited to welcome you! Your stay is just around the corner, so here's everything you need for a smooth and easy check-in.

Default check-in time: 15:00
Default check-out time: 11:00

Location:
The Town at Praia – Jacó, Puntarenas, Costa Rica
(Only 1 minute from the beach and downtown Jacó)

Arrival links:
Waze: https://waze.com/ul/hd1eyds8pj
Google Maps: https://maps.app.goo.gl/dmUxn1Sz7tCZYmRDA

Early check-in or late check-out must be requested in advance and are subject to availability, depending on arrivals or departures that day. If not requested or confirmed, please respect these times so our cleaning team can prepare the house properly.

Check-in & House Access:
When you arrive, please stop by the community security gate and give your name. They'll point you straight to your assigned house.

Access details for your home:
- KeyPad Code: 755714
- Wifi Name: Praia 42
- Wifi Password: laparoja

How to Unlock the Door:
1. Touch the keypad to wake it up.
2. Enter your code: 755714
3. You'll hear a beep and see a confirmation light, then you can open the door.
4. If it doesn't open, wait a few seconds and re-enter the code slowly.
After 5 incorrect attempts, the keypad will lock for 1 minute as a safety feature.

How to Lock the Door:
- From inside: turn the thumb-turn knob until the bolt extends.
- From outside: close the door and press the lock icon on the keypad, or simply wait if auto-lock is enabled (it will lock itself after a few seconds).

Quick House Rules:
- Only registered guests allowed inside.
- No parties or loud music.
- No smoking inside the house.
- Please keep furniture in its place.
- Respect Maximum occupancy of the listing.

If you need anything before or during your stay, we're here for you. Enjoy your time at Praia!`},{id:`praia42-checkin-es`,title:`Check In Praia 42 (Español)`,body:`¡Hola!

¡Estamos muy emocionados de recibirte! Tu estadía está a la vuelta de la esquina, así que aquí tenés todo lo que necesitás para un check-in fácil y sin contratiempos.

Hora de check-in: 3:00 PM
Hora de check-out: 11:00 AM

Ubicación:
The Town at Praia – Jacó, Puntarenas, Costa Rica
(A solo 1 minuto de la playa y del centro de Jacó)

Enlaces de llegada:
Waze: https://waze.com/ul/hd1eyds8pj
Google Maps: https://maps.app.goo.gl/dmUxn1Sz7tCZYmRDA

El early check-in o late check-out se debe solicitar con anticipación y está sujeto a disponibilidad, según las llegadas o salidas de ese día. Si no se solicita o confirma, por favor respetá estos horarios para que nuestro equipo de limpieza pueda preparar la casa correctamente.

Check-in y acceso a la casa:
Al llegar, por favor pasá por la caseta de seguridad de la comunidad y dá tu nombre. Ellos te van a indicar exactamente cómo llegar a tu casa asignada.

Datos de acceso a tu casa:
- Código del KeyPad: 755714
- Nombre de la red WiFi: Praia 42
- Contraseña del WiFi: laparoja

Cómo abrir la puerta:
1. Tocá el teclado para activarlo.
2. Ingresá tu código: 755714
3. Vas a escuchar un beep y ver una luz de confirmación, y ahí podés abrir la puerta.
4. Si no abre, esperá unos segundos y volvé a ingresar el código despacio.
Después de 5 intentos incorrectos, el teclado se bloquea por 1 minuto como medida de seguridad.

Cómo cerrar la puerta:
- Desde adentro: girá la perilla hasta que el pasador se extienda.
- Desde afuera: cerrá la puerta y presioná el ícono de candado en el teclado, o simplemente esperá si el bloqueo automático está activado (se cierra solo después de unos segundos).

Reglas rápidas de la casa:
- Solo se permite el ingreso de huéspedes registrados.
- No se permiten fiestas ni música alta.
- No fumar dentro de la casa.
- Por favor mantené los muebles en su lugar.
- Respetá la capacidad máxima de la propiedad.

Cualquier cosa que necesités antes o durante tu estadía, estamos para ayudarte. ¡Disfrutá tu tiempo en Praia!`}],comoLlegar:`https://maps.app.goo.gl/dmUxn1Sz7tCZYmRDA`,listing:{title:`The Town Praia 42`,url:`https://zafiropm.hostify.club/listing/400036451`,guests:6,bedrooms:2,beds:3,bathrooms:2.5,description:`Villa luminosa de 2 habitaciones en la comunidad segura de Casa Praia, con piscina privada, BBQ y diseño tropical moderno. A 40 minutos del Parque Nacional Manuel Antonio.`,images:[k(`ca7ebcb5f28368aaa77da86eac4c3f20`),k(`bb7d1cbccf8415e3c70eb5b28bad5604`),k(`f4fb0b9775991e7db757ba1cd5595477`),k(`f505cc9a43e3b8a7f4cd0f794ffef050`),k(`81a4e6168f745d6f9bcd25e38e851138`)]}},{id:`praia41`,name:`Praia 41`,num:`41`,pax:`6`,parqueo:`1 parqueo y visitas`,forms:`NO`,correo:`NO`,whatsapp:`SI`,app:`NO`,rooms:[`Habitación 1: Cama king`,`Habitación 2: 1 cama king, 1 camarote`,`2 baños completos separados de las habitaciones`],extra:[[`Distribución`,`2 habitaciones, 2.5 baños`],[`WiFi`,`Praia 41 / osoperezoso`],[`KeyPad`,`703571`]],checkin:[{id:`praia41-checkin`,title:`Check In Praia 41`,body:`Hello,

We're so excited to welcome you! Your stay is just around the corner, so here's everything you need for a smooth and easy check-in.

Default check-in time: 15:00
Default check-out time: 11:00

Location:
The Town at Praia – Jacó, Puntarenas, Costa Rica
(Only 1 minute from the beach and downtown Jacó)

Arrival links:
Waze: https://waze.com/ul/hd1eyds8pj
Google Maps: https://maps.app.goo.gl/dmUxn1Sz7tCZYmRDA

Early check-in or late check-out must be requested in advance and are subject to availability, depending on arrivals or departures that day. If not requested or confirmed, please respect these times so our cleaning team can prepare the house properly.

Check-in & House Access:
When you arrive, please stop by the community security gate and give your name. They'll point you straight to your assigned house.

Access details for your home:
- KeyPad Code: 703571
- Wifi Name: Praia 41
- Wifi Password: osoperezoso

How to Unlock the Door:
1. Touch the keypad to wake it up.
2. Enter your code: 703571
3. You'll hear a beep and see a confirmation light, then you can open the door.
4. If it doesn't open, wait a few seconds and re-enter the code slowly.
After 5 incorrect attempts, the keypad will lock for 1 minute as a safety feature.

How to Lock the Door:
- From inside: turn the thumb-turn knob until the bolt extends.
- From outside: close the door and press the lock icon on the keypad, or simply wait if auto-lock is enabled (it will lock itself after a few seconds).

Quick House Rules:
- Only registered guests allowed inside.
- No parties or loud music.
- No smoking inside the house.
- Please keep furniture in its place.
- Respect Maximum occupancy of the listing.

If you need anything before or during your stay, we're here for you. Enjoy your time at Praia!`},{id:`praia41-checkin-es`,title:`Check In Praia 41 (Español)`,body:`¡Hola!

¡Estamos muy emocionados de recibirte! Tu estadía está a la vuelta de la esquina, así que aquí tenés todo lo que necesitás para un check-in fácil y sin contratiempos.

Hora de check-in: 3:00 PM
Hora de check-out: 11:00 AM

Ubicación:
The Town at Praia – Jacó, Puntarenas, Costa Rica
(A solo 1 minuto de la playa y del centro de Jacó)

Enlaces de llegada:
Waze: https://waze.com/ul/hd1eyds8pj
Google Maps: https://maps.app.goo.gl/dmUxn1Sz7tCZYmRDA

El early check-in o late check-out se debe solicitar con anticipación y está sujeto a disponibilidad, según las llegadas o salidas de ese día. Si no se solicita o confirma, por favor respetá estos horarios para que nuestro equipo de limpieza pueda preparar la casa correctamente.

Check-in y acceso a la casa:
Al llegar, por favor pasá por la caseta de seguridad de la comunidad y dá tu nombre. Ellos te van a indicar exactamente cómo llegar a tu casa asignada.

Datos de acceso a tu casa:
- Código del KeyPad: 703571
- Nombre de la red WiFi: Praia 41
- Contraseña del WiFi: osoperezoso

Cómo abrir la puerta:
1. Tocá el teclado para activarlo.
2. Ingresá tu código: 703571
3. Vas a escuchar un beep y ver una luz de confirmación, y ahí podés abrir la puerta.
4. Si no abre, esperá unos segundos y volvé a ingresar el código despacio.
Después de 5 intentos incorrectos, el teclado se bloquea por 1 minuto como medida de seguridad.

Cómo cerrar la puerta:
- Desde adentro: girá la perilla hasta que el pasador se extienda.
- Desde afuera: cerrá la puerta y presioná el ícono de candado en el teclado, o simplemente esperá si el bloqueo automático está activado (se cierra solo después de unos segundos).

Reglas rápidas de la casa:
- Solo se permite el ingreso de huéspedes registrados.
- No se permiten fiestas ni música alta.
- No fumar dentro de la casa.
- Por favor mantené los muebles en su lugar.
- Respetá la capacidad máxima de la propiedad.

Cualquier cosa que necesités antes o durante tu estadía, estamos para ayudarte. ¡Disfrutá tu tiempo en Praia!`}],comoLlegar:`https://maps.app.goo.gl/dmUxn1Sz7tCZYmRDA`,listing:{title:`The Town Praia 41`,url:`https://zafiropm.hostify.club/listing/400036452`,guests:6,bedrooms:2,beds:3,bathrooms:2.5,description:`Villa de playa tropical-moderna en Casa Praia. Piscina privada, BBQ y diseño sereno, a pasos de los mejores surf breaks, restaurantes y vida nocturna de Jacó.`,images:[k(`338da820c51669c649232a6da45c1cf5`),k(`4b56ff1f1d1260df0d5f43cc3ef1ff72`),k(`c1d8b0fc609708c798fb4a2117a0f5b2`),k(`6ebdbc118f18f2540203d75fcfbb2f51`),k(`91f0d67cab626ade5b8ab4bc6d43f739`)]}}]},{id:`villa-verde`,group:`jaco`,name:`Villa Verde - Oasis`,zone:`Herradura · Quebrada Ganado`,owner:`—`,note:`El check-in interno queda tal cual estaba documentado. La distribución y fotos de cada Oasis se agregaron desde la ficha pública de Zafiro PM.`,quickInfo:[[`Casa`,`Casa Oasis (# casa 1-2-3-4)`],[`Parqueo`,`2 parqueos o dejar afuera todo bien`],[`Formulario`,`NO`],[`WhatsApp caseta`,`SI`],[`Ingreso app`,`SI (ADITUM)`]],publicInfo:{amenities:[`WiFi`,`A/C`,`Piscina`,`Jacuzzi`,`Cocina equipada`,`Parqueo gratis`,`TV`,`Cafetera`,`Agua caliente`,`Comunidad con cancha de tenis`],nearby:[{text:`Auto Mercado - Plaza Herradura — Supermercado ★4.6 (2661 reseñas)`,url:`https://maps.google.com/?cid=7653150027407056972`},{text:`Starbucks Herradura — Café ★4.4 (206 reseñas)`,url:`https://maps.google.com/?cid=4446705884878298959`},{text:`Vista Mar — Restaurante ★4.5 (865 reseñas)`,url:`https://maps.google.com/?cid=944886647740401927`},{text:`Burger King Herradura — Comida rápida ★4.1 (224 reseñas)`,url:`https://maps.google.com/?cid=5561051188339974401`},{text:`La Ostra — Restaurante de mariscos ★4.4 (1432 reseñas)`,url:`https://maps.google.com/?cid=16224617731805690279`}],rules:[`No fumar dentro de la propiedad.`,`No se permiten fiestas ni eventos.`,`Silencio después de las 10:00 pm.`,`Cerrar puertas y ventanas al salir; apagar el A/C cuando no se use.`,`Mascotas no permitidas.`,`Parquear correctamente sin bloquear las aceras.`,`Botar la basura en los contenedores de la entrada del condominio.`,`No colgar ropa en la terraza.`,`No se permiten visitas por política del condominio.`,`No objetos de vidrio en el área de piscina.`,`No mover el mobiliario.`,`Todos los huéspedes deben estar identificados y respetar el máximo de ocupación; no se permiten personas adicionales a la reserva.`,`Prohibido el uso de drogas ilegales.`]},localExperiences:be,units:[{id:`oasis1`,name:`Oasis 1`,num:`1`,pax:`5`,accessCode:`Lockbox cerca de la puerta: código 0501. Deslizar la tapa negra hacia abajo para ver los discos del código, ingresarlo, y jalar el panel frontal para abrir. Adentro está la llave. Al salir: volver a poner la llave, cerrar firme, y revolver los números para bloquearla.`,extra:[[`WiFi`,`Oasis del Pacifico / Casa52026`],[`Dirección`,`Casas Oasis del Pacifico, Villa Verde, Quebrada Ganado, Puntarenas`]],checkin:[{id:`oasis1-checkin`,title:`Check In Oasis 1`,body:`Hello,

Welcome to Casas Oasis del Pacifico at Villa Verde, Quebrada Ganado!

We're excited to host you. Here's everything you need for a smooth arrival.

Default check-in time: 15:00
Default check-out time: 11:00

Location:
Villa Verde – Quebrada Ganado, Puntarenas, Costa Rica
(A quiet area just a short drive from Jaco Beach)

Arrival links:
Google Maps: https://maps.app.goo.gl/KPJS8oMQr49c2tqB6
Waze: https://waze.com/ul/hd1ez602wn

Early check-in or late check-out must be requested in advance and are subject to availability.

Check-in & Access
Upon arrival, please stop at the security gate and provide your name. They will guide you to your unit. Please make sure you have completed the check-in form in advance, as security will need this information to validate your access. If the form has not been submitted, entry may be delayed.

Access details:
- Lockbox Code: 0501
- Wifi Name: Oasis del Pacifico
- Wifi Password: Casa52026

How to open the lockbox
1. Locate the lockbox near the entrance door
2. Slide the black cover down to reveal the code dials
3. Enter your code: 0501
4. Pull the front panel to open the box
5. Inside you will find the key to access the unit
After taking the key, please close the lockbox and scramble the code.

How to close it
1. Place the key back inside
2. Close the lockbox firmly
3. Change the code numbers to lock it securely

Quick house guidelines
- Only registered guests allowed
- No parties or loud music
- No smoking inside
- Please take care of the space
- Respect maximum occupancy

If you need anything before or during your stay, we're here to help.
Enjoy your stay at Villa Verde,`},{id:`oasis1-checkin-es`,title:`Check In Oasis 1 (Español)`,body:`¡Hola!

¡Bienvenido/a a Casas Oasis del Pacifico en Villa Verde, Quebrada Ganado!

Estamos muy emocionados de recibirte. Aquí tenés todo lo que necesitás para una llegada sin contratiempos.

Hora de check-in: 3:00 PM
Hora de check-out: 11:00 AM

Ubicación:
Villa Verde – Quebrada Ganado, Puntarenas, Costa Rica
(Una zona tranquila a poca distancia en auto de Playa Jacó)

Enlaces de llegada:
Google Maps: https://maps.app.goo.gl/KPJS8oMQr49c2tqB6
Waze: https://waze.com/ul/hd1ez602wn

El early check-in o late check-out se debe solicitar con anticipación y está sujeto a disponibilidad.

Check-in y acceso:
Al llegar, por favor detenete en la caseta de seguridad y dá tu nombre. Ahí te van a guiar hasta tu unidad. Asegurate de haber completado el formulario de check-in con anticipación, ya que seguridad necesita esa información para autorizar tu acceso. Si el formulario no fue enviado, el ingreso puede demorarse.

Datos de acceso:
- Código del Lockbox: 0501
- Nombre de la red WiFi: Oasis del Pacifico
- Contraseña del WiFi: Casa52026

Cómo abrir el lockbox:
1. Ubicá el lockbox cerca de la puerta de entrada.
2. Deslizá la tapa negra hacia abajo para ver los discos del código.
3. Ingresá tu código: 0501
4. Jalá el panel frontal para abrirlo.
5. Adentro vas a encontrar la llave para ingresar a la unidad.
Después de sacar la llave, por favor cerrá el lockbox y desordená el código.

Cómo cerrarlo:
1. Volvé a poner la llave adentro.
2. Cerrá el lockbox firmemente.
3. Cambiá los números del código para dejarlo bloqueado correctamente.

Reglas rápidas de la casa:
- Solo se permite el ingreso de huéspedes registrados.
- No se permiten fiestas ni música alta.
- No fumar dentro de la unidad.
- Por favor cuidá el espacio.
- Respetá la capacidad máxima.

Cualquier cosa que necesités antes o durante tu estadía, estamos para ayudarte.
¡Disfrutá tu estadía en Villa Verde!`}],comoLlegar:`https://maps.app.goo.gl/KPJS8oMQr49c2tqB6`,listing:{title:`Oasis 1 Near Jaco Beach Spacious Great Value Stay`,url:`https://zafiropm.hostify.club/listing/400041272`,guests:5,bedrooms:2,beds:3,bathrooms:1,description:`Unidad en Villa Verde, Quebrada Ganado, a pocos minutos de Playa Jacó. Áreas amplias, cocina funcional y ambiente privado; buena relación espacio/precio fuera del bullicio de Jacó.`,images:[k(`f8f22d01629a5cd32ab3b798bd3d65a9`),k(`62fc73b3857643816b3ce769485b7436`),k(`b7bceb31d81cf975a3fab2479f5b0c92`),k(`43ae2850757036ea0575dbaa33c640a1`),k(`674b5266ae68ef2b7f9226c7330435a4`)]}},{id:`oasis2`,name:`Oasis 2`,num:`2`,pax:`5`,accessCode:`Caja de seguridad (lockbox) cerca de la puerta: código 0502. Deslizar la tapa negra hacia abajo para ver los discos del código, ingresarlo, y jalar el panel frontal para abrir. Adentro está la llave. Al salir: volver a poner la llave, cerrar firme, y revolver los números para bloquearla.`,extra:[[`WiFi`,`Oasis del Pacifico / Casa52026`],[`Dirección`,`Condominio Villa Verde, Quebrada Ganado, Puntarenas`]],checkin:[{id:`oasis2-checkin`,title:`Check In Oasis 2`,body:`Hello,

Welcome to Casas Oasis del Pacifico at Villa Verde, Quebrada Ganado!

We're excited to host you. Here's everything you need for a smooth arrival.

Default check-in time: 15:00
Default check-out time: 11:00

Location:
Villa Verde – Quebrada Ganado, Puntarenas, Costa Rica
(A quiet area just a short drive from Jaco Beach)

Arrival links:
Google Maps: https://maps.app.goo.gl/KPJS8oMQr49c2tqB6
Waze: https://waze.com/ul/hd1ez602wn

Early check-in or late check-out must be requested in advance and are subject to availability.

Check-in & Access
Upon arrival, please stop at the security gate and provide your name. They will guide you to your unit. Please make sure you have completed the check-in form in advance, as security will need this information to validate your access. If the form has not been submitted, entry may be delayed.

Access details:
- Lockbox Code: 0502
- Wifi Name: Oasis del Pacifico
- Wifi Password: Casa52026

How to open the lockbox
1. Locate the lockbox near the entrance door
2. Slide the black cover down to reveal the code dials
3. Enter your code: 0502
4. Pull the front panel to open the box
5. Inside you will find the key to access the unit
After taking the key, please close the lockbox and scramble the code.

How to close it
1. Place the key back inside
2. Close the lockbox firmly
3. Change the code numbers to lock it securely

Quick house guidelines
- Only registered guests allowed
- No parties or loud music
- No smoking inside
- Please take care of the space
- Respect maximum occupancy

If you need anything before or during your stay, we're here to help.
Enjoy your stay at Villa Verde,`},{id:`oasis2-checkin-es`,title:`Check In Oasis 2 (Español)`,body:`¡Hola!

¡Bienvenido/a a Casas Oasis del Pacifico en Villa Verde, Quebrada Ganado!

Estamos muy emocionados de recibirte. Aquí tenés todo lo que necesitás para una llegada sin contratiempos.

Hora de check-in: 3:00 PM
Hora de check-out: 11:00 AM

Ubicación:
Villa Verde – Quebrada Ganado, Puntarenas, Costa Rica
(Una zona tranquila a poca distancia en auto de Playa Jacó)

Enlaces de llegada:
Google Maps: https://maps.app.goo.gl/KPJS8oMQr49c2tqB6
Waze: https://waze.com/ul/hd1ez602wn

El early check-in o late check-out se debe solicitar con anticipación y está sujeto a disponibilidad.

Check-in y acceso:
Al llegar, por favor detenete en la caseta de seguridad y dá tu nombre. Ahí te van a guiar hasta tu unidad. Asegurate de haber completado el formulario de check-in con anticipación, ya que seguridad necesita esa información para autorizar tu acceso. Si el formulario no fue enviado, el ingreso puede demorarse.

Datos de acceso:
- Código del Lockbox: 0502
- Nombre de la red WiFi: Oasis del Pacifico
- Contraseña del WiFi: Casa52026

Cómo abrir el lockbox:
1. Ubicá el lockbox cerca de la puerta de entrada.
2. Deslizá la tapa negra hacia abajo para ver los discos del código.
3. Ingresá tu código: 0502
4. Jalá el panel frontal para abrirlo.
5. Adentro vas a encontrar la llave para ingresar a la unidad.
Después de sacar la llave, por favor cerrá el lockbox y desordená el código.

Cómo cerrarlo:
1. Volvé a poner la llave adentro.
2. Cerrá el lockbox firmemente.
3. Cambiá los números del código para dejarlo bloqueado correctamente.

Reglas rápidas de la casa:
- Solo se permite el ingreso de huéspedes registrados.
- No se permiten fiestas ni música alta.
- No fumar dentro de la unidad.
- Por favor cuidá el espacio.
- Respetá la capacidad máxima.

Cualquier cosa que necesités antes o durante tu estadía, estamos para ayudarte.
¡Disfrutá tu estadía en Villa Verde!`}],guiaDigital:{url:`https://auditoria.zafiropm.com/g/8940c5db-dcd9-494c-92f4-c903e8adf035`,nota:`Guía digital de esta unidad.`,comoLlegar:`https://maps.google.com/maps?daddr=9.7146185666351,-84.638650417328`},listing:{title:`Oasis 2 Near Jaco Quiet And Comfortable Apartment`,url:`https://zafiropm.hostify.club/listing/400041273`,guests:5,bedrooms:2,beds:3,bathrooms:1,description:`Unidad en Villa Verde, Quebrada Ganado, a pocos minutos de Playa Jacó. Áreas amplias, cocina funcional y ambiente privado; buena relación espacio/precio fuera del bullicio de Jacó.`,images:[k(`934c0630e5d9fa70b851dbd82a7f30ae`),k(`d5462e1a225dc78c973910da361afe33`),k(`851f29408ca2cf588edc79b97ac9a77b`),k(`02976134392c17f1b420629206bcfa6d`),k(`5a93580429b886bf6a32f8a5ac0f9716`)]}},{id:`oasis3`,name:`Oasis 3`,num:`3`,pax:`5`,accessCode:`Lockbox cerca de la puerta: código 0503. Deslizar la tapa negra hacia abajo para ver los discos del código, ingresarlo, y jalar el panel frontal para abrir. Adentro está la llave. Al salir: volver a poner la llave, cerrar firme, y revolver los números para bloquearla.`,extra:[[`WiFi`,`Oasis del Pacifico / Casa52026`],[`Dirección`,`Casas Oasis del Pacifico, Villa Verde, Quebrada Ganado, Puntarenas`]],checkin:[{id:`oasis3-checkin`,title:`Check In Oasis 3`,body:`Hello,

Welcome to Casas Oasis del Pacifico at Villa Verde, Quebrada Ganado!

We're excited to host you. Here's everything you need for a smooth arrival.

Default check-in time: 15:00
Default check-out time: 11:00

Location:
Villa Verde – Quebrada Ganado, Puntarenas, Costa Rica
(A quiet area just a short drive from Jaco Beach)

Arrival links:
Google Maps: https://maps.app.goo.gl/KPJS8oMQr49c2tqB6
Waze: https://waze.com/ul/hd1ez602wn

Early check-in or late check-out must be requested in advance and are subject to availability.

Check-in & Access
Upon arrival, please stop at the security gate and provide your name. They will guide you to your unit. Please make sure you have completed the check-in form in advance, as security will need this information to validate your access. If the form has not been submitted, entry may be delayed.

Access details:
- Lockbox Code: 0503
- Wifi Name: Oasis del Pacifico
- Wifi Password: Casa52026

How to open the lockbox
1. Locate the lockbox near the entrance door
2. Slide the black cover down to reveal the code dials
3. Enter your code: 0503
4. Pull the front panel to open the box
5. Inside you will find the key to access the unit
After taking the key, please close the lockbox and scramble the code.

How to close it
1. Place the key back inside
2. Close the lockbox firmly
3. Change the code numbers to lock it securely

Quick house guidelines
- Only registered guests allowed
- No parties or loud music
- No smoking inside
- Please take care of the space
- Respect maximum occupancy

If you need anything before or during your stay, we're here to help.
Enjoy your stay at Villa Verde,`},{id:`oasis3-checkin-es`,title:`Check In Oasis 3 (Español)`,body:`¡Hola!

¡Bienvenido/a a Casas Oasis del Pacifico en Villa Verde, Quebrada Ganado!

Estamos muy emocionados de recibirte. Aquí tenés todo lo que necesitás para una llegada sin contratiempos.

Hora de check-in: 3:00 PM
Hora de check-out: 11:00 AM

Ubicación:
Villa Verde – Quebrada Ganado, Puntarenas, Costa Rica
(Una zona tranquila a poca distancia en auto de Playa Jacó)

Enlaces de llegada:
Google Maps: https://maps.app.goo.gl/KPJS8oMQr49c2tqB6
Waze: https://waze.com/ul/hd1ez602wn

El early check-in o late check-out se debe solicitar con anticipación y está sujeto a disponibilidad.

Check-in y acceso:
Al llegar, por favor detenete en la caseta de seguridad y dá tu nombre. Ahí te van a guiar hasta tu unidad. Asegurate de haber completado el formulario de check-in con anticipación, ya que seguridad necesita esa información para autorizar tu acceso. Si el formulario no fue enviado, el ingreso puede demorarse.

Datos de acceso:
- Código del Lockbox: 0503
- Nombre de la red WiFi: Oasis del Pacifico
- Contraseña del WiFi: Casa52026

Cómo abrir el lockbox:
1. Ubicá el lockbox cerca de la puerta de entrada.
2. Deslizá la tapa negra hacia abajo para ver los discos del código.
3. Ingresá tu código: 0503
4. Jalá el panel frontal para abrirlo.
5. Adentro vas a encontrar la llave para ingresar a la unidad.
Después de sacar la llave, por favor cerrá el lockbox y desordená el código.

Cómo cerrarlo:
1. Volvé a poner la llave adentro.
2. Cerrá el lockbox firmemente.
3. Cambiá los números del código para dejarlo bloqueado correctamente.

Reglas rápidas de la casa:
- Solo se permite el ingreso de huéspedes registrados.
- No se permiten fiestas ni música alta.
- No fumar dentro de la unidad.
- Por favor cuidá el espacio.
- Respetá la capacidad máxima.

Cualquier cosa que necesités antes o durante tu estadía, estamos para ayudarte.
¡Disfrutá tu estadía en Villa Verde!`}],comoLlegar:`https://maps.app.goo.gl/KPJS8oMQr49c2tqB6`,listing:{title:`Oasis 3 Best Value Near Jacó Peaceful Stay`,url:`https://zafiropm.hostify.club/listing/400041271`,guests:5,bedrooms:2,beds:3,bathrooms:1,description:`Unidad en Villa Verde, Quebrada Ganado, a pocos minutos de Playa Jacó. Áreas amplias, cocina funcional y ambiente privado; buena relación espacio/precio fuera del bullicio de Jacó.`,images:[k(`c122fcca0e4b8122654d36e954ad0506`),k(`450b840cc7700c73941e433bc08dcdc2`),k(`893cc5c65b1179d8468dd23b39862d7d`),k(`d816e09a4af7136ba8604fd0caffa0b8`),k(`08ff77938f90293294e27fd7ccfdfb3a`)]}},{id:`oasis4`,name:`Oasis 4`,num:`4`,pax:`5`,accessCode:`Lockbox cerca de la puerta: código 0504. Deslizar la tapa negra hacia abajo para ver los discos del código, ingresarlo, y jalar el panel frontal para abrir. Adentro está la llave. Al salir: volver a poner la llave, cerrar firme, y revolver los números para bloquearla.`,extra:[[`WiFi`,`Oasis del Pacifico / Casa52026`],[`Dirección`,`Casas Oasis del Pacifico, Villa Verde, Quebrada Ganado, Puntarenas`]],checkin:[{id:`oasis4-checkin`,title:`Check In Oasis 4`,body:`Hello,

Welcome to Casas Oasis del Pacifico at Villa Verde, Quebrada Ganado!

We're excited to host you. Here's everything you need for a smooth arrival.

Default check-in time: 15:00
Default check-out time: 11:00

Location:
Villa Verde – Quebrada Ganado, Puntarenas, Costa Rica
(A quiet area just a short drive from Jaco Beach)

Arrival links:
Google Maps: https://maps.app.goo.gl/KPJS8oMQr49c2tqB6
Waze: https://waze.com/ul/hd1ez602wn

Early check-in or late check-out must be requested in advance and are subject to availability.

Check-in & Access
Upon arrival, please stop at the security gate and provide your name. They will guide you to your unit. Please make sure you have completed the check-in form in advance, as security will need this information to validate your access. If the form has not been submitted, entry may be delayed.

Access details:
- Lockbox Code: 0504
- Wifi Name: Oasis del Pacifico
- Wifi Password: Casa52026

How to open the lockbox
1. Locate the lockbox near the entrance door
2. Slide the black cover down to reveal the code dials
3. Enter your code: 0504
4. Pull the front panel to open the box
5. Inside you will find the key to access the unit
After taking the key, please close the lockbox and scramble the code.

How to close it
1. Place the key back inside
2. Close the lockbox firmly
3. Change the code numbers to lock it securely

Quick house guidelines
- Only registered guests allowed
- No parties or loud music
- No smoking inside
- Please take care of the space
- Respect maximum occupancy

If you need anything before or during your stay, we're here to help.
Enjoy your stay at Villa Verde,`},{id:`oasis4-checkin-es`,title:`Check In Oasis 4 (Español)`,body:`¡Hola!

¡Bienvenido/a a Casas Oasis del Pacifico en Villa Verde, Quebrada Ganado!

Estamos muy emocionados de recibirte. Aquí tenés todo lo que necesitás para una llegada sin contratiempos.

Hora de check-in: 3:00 PM
Hora de check-out: 11:00 AM

Ubicación:
Villa Verde – Quebrada Ganado, Puntarenas, Costa Rica
(Una zona tranquila a poca distancia en auto de Playa Jacó)

Enlaces de llegada:
Google Maps: https://maps.app.goo.gl/KPJS8oMQr49c2tqB6
Waze: https://waze.com/ul/hd1ez602wn

El early check-in o late check-out se debe solicitar con anticipación y está sujeto a disponibilidad.

Check-in y acceso:
Al llegar, por favor detenete en la caseta de seguridad y dá tu nombre. Ahí te van a guiar hasta tu unidad. Asegurate de haber completado el formulario de check-in con anticipación, ya que seguridad necesita esa información para autorizar tu acceso. Si el formulario no fue enviado, el ingreso puede demorarse.

Datos de acceso:
- Código del Lockbox: 0504
- Nombre de la red WiFi: Oasis del Pacifico
- Contraseña del WiFi: Casa52026

Cómo abrir el lockbox:
1. Ubicá el lockbox cerca de la puerta de entrada.
2. Deslizá la tapa negra hacia abajo para ver los discos del código.
3. Ingresá tu código: 0504
4. Jalá el panel frontal para abrirlo.
5. Adentro vas a encontrar la llave para ingresar a la unidad.
Después de sacar la llave, por favor cerrá el lockbox y desordená el código.

Cómo cerrarlo:
1. Volvé a poner la llave adentro.
2. Cerrá el lockbox firmemente.
3. Cambiá los números del código para dejarlo bloqueado correctamente.

Reglas rápidas de la casa:
- Solo se permite el ingreso de huéspedes registrados.
- No se permiten fiestas ni música alta.
- No fumar dentro de la unidad.
- Por favor cuidá el espacio.
- Respetá la capacidad máxima.

Cualquier cosa que necesités antes o durante tu estadía, estamos para ayudarte.
¡Disfrutá tu estadía en Villa Verde!`}],comoLlegar:`https://maps.app.goo.gl/KPJS8oMQr49c2tqB6`,listing:{title:`Oasis 4 Jaco Area Spacious Home Quiet Location`,url:`https://zafiropm.hostify.club/listing/400041270`,guests:5,bedrooms:2,beds:3,bathrooms:1,description:`Unidad en Villa Verde, Quebrada Ganado, a pocos minutos de Playa Jacó. Áreas amplias, cocina funcional y ambiente privado; buena relación espacio/precio fuera del bullicio de Jacó.`,images:[k(`83fdffe2f08e6ed2218649c44397c9cc`),k(`d881c06404ce45034d27da28f2c66d10`),k(`7e3cb536d19a6ca8a3d39867d303a095`),k(`25cf910fec42502ddda343d8c6680d3e`),k(`d5ced698591c778d557ed282f1fc6a42`)]}}],messages:[...Se(),{id:`villaverde-checkin`,title:`Check In Villa Verde (Español)`,body:`Importante: si no se llenó el formulario con todos los nombres completos de los huéspedes, no van a dejar entrar. Hay que ingresar también a la app y enviar un mensaje a la caseta de seguridad con los nombres completos antes de la llegada.`},{id:`villaverde-checkin-en`,title:`Check In Villa Verde`,body:`Important: if the form hasn't been filled out with the full names of all guests, entry will not be allowed. You'll also need to log into the app and send a message to the security gate with the full names before arrival.`},...Ce()]},{id:`arenas`,group:`jaco`,name:`Arenas - Casa Celeste`,zone:`Herradura`,owner:`—`,note:`Distribución y fotos agregadas desde la ficha pública de Zafiro PM (Condominio Arenas).`,quickInfo:[[`Casa`,`Casa Celeste`],[`Check in`,`3:00 PM`],[`Check out`,`11:00 AM`],[`Parqueo`,`2 parqueos o dejar afuera todo bien`],[`Formulario`,`SI`],[`Ingreso app`,`SI (TREA)`]],publicInfo:{amenities:[`WiFi`,`A/C`,`Piscinas (3)`,`Gimnasio`,`Cocina equipada`,`Parqueo gratis`,`Cancha básket/fútbol/vóley`,`Juegos infantiles (3)`,`Ping pong y billar`,`Workspace`,`Lavadora`,`BBQ`],nearby:[{text:`Koko — Restaurante ★4.6 (1119 reseñas)`,url:`https://maps.google.com/?cid=1347495756619901181`},{text:`Soda Garabito — Restaurante ★4.6 (2380 reseñas)`,url:`https://maps.google.com/?cid=12181984869846835961`},{text:`Restaurant Green Room Jaco — Restaurante ★4.4 (1688 reseñas)`,url:`https://maps.google.com/?cid=9084303398156280050`},{text:`El Hicaco Seafood — Restaurante de mariscos ★4.3 (1170 reseñas)`,url:`https://maps.google.com/?cid=12821907371088116548`},{text:`Orange Pub — Bar ★4.0 (570 reseñas)`,url:`https://maps.google.com/?cid=13042613877878419361`}],rules:[`No se permiten fiestas ni eventos.`,`No fumar dentro de la propiedad.`,`Mascotas permitidas (consultar condiciones).`,`Horario silencioso de 10:00 pm a 7:00 am.`]},localExperiences:be,messages:[...Se(),...Ce()],units:[{id:`arenas-celeste`,name:`Casa Celeste`,num:``,pax:`6`,accessCode:`Cerradura inteligente en puerta principal: código 3287 (tocar el teclado para activar la pantalla, ingresar el código, y presionar ✓ para confirmar)`,extra:[[`WiFi`,`Maki playa / Perrofoca2024`]],checkin:[{id:`arenas-checkin`,title:`Check In Casa Celeste (Arenas) (Español)`,body:`¡Hola! 😊

Tu llegada está a punto de llegar y queremos asegurarnos de que todo salga lo mejor posible.

Al llegar al Condominio Arenas, por favor detente en la caseta de seguridad y da tu nombre — te van a guiar hasta la casa.

Acceso a la casa:
La puerta principal tiene cerradura inteligente (smart lock). Para abrirla:
1. Tocá suavemente el teclado con la palma de la mano para activar la pantalla.
2. Ingresá el código: 3287
3. Presioná el botón ✓ para confirmar.
4. Si el código es correcto, la puerta se destraba automáticamente.

WiFi:
Red: Maki playa
Contraseña: Perrofoca2024

Cualquier duda antes o durante tu estadía, no dudes en escribirnos. ¡Que disfrutes tu tiempo en Arenas!`},{id:`arenas-checkin-en`,title:`Check In Casa Celeste (Arenas)`,body:`Hi there! 😊

Your arrival is right around the corner and we want to make sure everything goes as smoothly as possible.

When you get to Condominio Arenas, please stop at the security gate and give your name — they'll guide you to the house.

House access:
The front door has a smart lock. To open it:
1. Gently tap the keypad with your palm to wake up the screen.
2. Enter the code: 3287
3. Press the ✓ button to confirm.
4. If the code is correct, the door will unlock automatically.

WiFi:
Network: Maki playa
Password: Perrofoca2024

If you have any questions before or during your stay, feel free to reach out. Enjoy your time at Arenas!`}],guiaDigital:{url:`https://auditoria.zafiropm.com/g/d945f352-85b0-4c42-ad30-9d274bdd714b`,nota:`Guía digital de esta unidad. La dirección en la guía dice "Playa Hermosa" aunque la propiedad es en Herradura — posible error de la plantilla, no de la ubicación real.`,comoLlegar:`https://maps.google.com/maps?daddr=9.6645545,-84.6353114`},listing:{title:`Family House in Herradura | Near Jacó | Near Beach`,url:`https://zafiropm.hostify.club/listing/400038676`,guests:6,bedrooms:2,beds:4,bathrooms:2,description:`Condominio Arenas: comunidad cerrada en Herradura con piscina estilo resort, casa club, zonas verdes, juegos infantiles y cancha deportiva. Cocina totalmente equipada, habitaciones con A/C, terraza privada y wifi rápido. A 2 minutos de Plaza Herradura (Auto Mercado) y cerca de Los Sueños Marina.`,images:[k(`23f0952cdae08cbc548b8877f697c029`),k(`91ce57c956881b0120b65794ce901e68`),k(`e378a231d3d3257aa4664e4821f5ff48`),k(`ead3cdfbc17a34a14fdbb47595efcc97`),k(`2b68f0163ac69ea04a241823b6c469cb`)]}}]},{id:`nosara-estates`,group:`guanacaste`,name:`Casa Levita - Nosara Estates`,zone:`Nosara`,owner:`—`,note:`Distribución y fotos agregadas desde la ficha pública de Zafiro PM (Lévita Nosara).`,quickInfo:[[`Casa`,`Casa Levita`],[`Parqueo`,`3-4 parqueos`],[`Formulario`,`No`],[`Ingreso app`,`NO`],[`Zona`,`El condominio se llama Nosara Estates y está ubicado en una zona muy tranquila y rodeada de naturaleza. En carro, aproximadamente está a 15–20 minutos de Playa Garza y unos 20–30 minutos de Playa Guiones. El pueblo de Nosara también queda a pocos minutos en carro, donde encontrarán restaurantes, cafés y diferentes comercios.`]],publicInfo:{amenities:[`WiFi`,`A/C`,`Piscina privada`,`Calefacción`,`Cocina equipada`,`Parqueo gratis`,`Vista al mar y montaña`,`Concierge`,`Terraza`,`Caja fuerte`,`Lavadora/secadora`],rules:[`No fiestas ni eventos — es una comunidad residencial tranquila (Nosara Estates).`,`No fumar ni vapear en la propiedad.`,`Horario de silencio 10 pm–7 am.`,`Se requiere vehículo 4x4 para el último tramo (camino de lastre) — manejar con cuidado.`,`No alimentar a los monos; mantener puertas y mosquiteros cerrados.`,`Ducharse antes de usar la piscina; avisar de inmediato si algo necesita atención.`]},messages:[...Se(),...Ce()],units:[{id:`levita`,name:`Casa Levita`,num:``,pax:`6`,checkin:[{id:`levita-checkin`,title:`Check In Casa Levita (genérico, Español)`,body:`¡Hola! 😊

Tu día de llegada ya está aquí y queremos asegurarnos de que todo vaya lo mejor posible.

Check-in: 3:00 PM
Check-out: 11:00 AM

Se recomienda vehículo 4x4 para el último tramo de camino de lastre hacia la propiedad — manejar con cuidado.

⚠️ Nota interna: todavía no tenemos registrado el código de acceso ni los datos de WiFi de esta propiedad en el sistema — completar antes de enviar este mensaje a un huésped real, o coordinar el ingreso directamente con el equipo de la zona.

Reglas de la casa:
- No fiestas ni eventos — es una comunidad residencial tranquila.
- No fumar ni vapear en la propiedad.
- Horario de silencio 10 pm–7 am.
- No alimentar a los monos; mantener puertas y mosquiteros cerrados.

¡Esperamos tu estancia!`},{id:`levita-checkin-en`,title:`Check In Casa Levita (generic)`,body:`Hi there! 😊

Your arrival day is here and we want to make sure everything goes as smoothly as possible.

Check-in: 3:00 PM
Check-out: 11:00 AM

A 4x4 vehicle is recommended for the last stretch of gravel road to the property — please drive carefully.

⚠️ Internal note: we still don't have the access code or WiFi details for this property registered in the system — complete before sending this message to a real guest, or coordinate check-in directly with the local team.

House rules:
- No parties or events — it's a quiet residential community.
- No smoking or vaping on the property.
- Quiet hours 10 pm–7 am.
- Please don't feed the monkeys; keep doors and screens closed.

We look forward to your stay!`}],listing:{title:`Lévita Nosara — Mountain-Top Retreat with Ocean View`,url:`https://zafiropm.hostify.club/listing/400045451`,guests:6,bedrooms:4,beds:4,bathrooms:3,description:`Casa de arquitectura moderna en la montaña de Nosara, con paredes de vidrio que se abren hacia la selva y vista al mar. Piscina privada, terraza y 4 habitaciones con vista propia. Se recomienda 4x4 para el último tramo de camino de lastre.`,images:[k(`70b7f08207fdd9ce172b6023a1dc16a5`),k(`a64e8943e33f5af7d8c0851fb022db0f`),k(`24dfa5908d5385a5c30ce43f7209e788`),k(`f963ae98b0b4a960f63f4fdefb0e3ffe`),k(`d602aa8dad0e18d77da6ad162190720b`)]}}]},{id:`malinches`,group:`guanacaste`,name:`Malinches - Hacienda Pinilla`,zone:`Guanacaste · Hacienda Pinilla`,owner:`—`,note:`Distribución y fotos agregadas desde la ficha pública de Zafiro PM (Casa Malinches 26A).`,quickInfo:[[`Casa`,`Casa Malinches 26A`],[`Parqueo`,`2 parqueos`],[`Formulario`,`No`],[`Ingreso app`,`SI (HAC)`],[`Beach Club`,`Para reservar/ingresar, reportarlo al grupo de WhatsApp "Malinches BeachClub" para que autoricen el acceso`],[`Acceso`,`Desde Aeropuerto Liberia (LIR): ~1h15. Desde San José (SJO): ~4.5-5h. Se recomienda alquilar auto; dentro de Hacienda Pinilla conviene auto, carrito de golf o bicicleta para moverse.`]],publicInfo:{amenities:[`WiFi`,`A/C`,`Piscina`,`Gimnasio`,`Beach club (reservar vía WhatsApp "Malinches BeachClub")`,`Cocina equipada`,`Parqueo gratis`,`Cancha de golf`,`Tenis`,`Workspace`,`Chef disponible`,`Terraza cubierta`],nearby:[`Lola's — Restaurante ★4.4 (2471 reseñas en Google)`,`El Mercadito de Tamarindo Food and Cocktail Market — Restaurante ★4.6 (2689 reseñas)`,`El Chiringuito — Restaurante ★4.3 (1227 reseñas)`,`Pangas Tamarindo — Restaurante ★4.5 (1190 reseñas)`,`Langosta Beach Club — Restaurante ★4.3 (810 reseñas)`],rules:[`Respetar los horarios de check-in / check-out salvo acuerdo previo.`,`No se permiten fiestas ni eventos.`,`No exceder el máximo de ocupación.`,`Silencio después de las 10:00 pm.`,`No fumar dentro de la propiedad.`,`Cuidar la casa como propia; reportar cualquier daño de inmediato.`,`Seguir todas las reglas del residencial Hacienda Pinilla.`]},localExperiences:xe,messages:[...Se(),...Ce()],guiaDigital:{url:`https://auditoria.zafiropm.com/g/404be756-9ca0-4ae5-9cbb-b8113449cf18`,nota:`Guía digital que recibe el huésped al llegar (cómo llegar desde Liberia/SJO, checklist de salida, wifi/main gate/keypad, reglas, recomendaciones locales, botón de emergencias 911, reseña y reserva directa).`,comoLlegar:`https://maps.google.com/maps?daddr=10.258694448142,-85.833212037249`},units:[{id:`malinches-26a`,name:`Casa Malinches 26A`,num:`26A`,pax:`8`,extra:[[`WiFi`,`Mnet26A / SurfMalinches26A`],[`Main Gate`,`2102#`],[`Keypad`,`1407`]],checkin:[{id:`malinches-checkin`,title:`Check In Casa Malinches 26A (Español)`,body:`¡Hola! 😊

Tu día de llegada ya está aquí y queremos asegurarnos de que todo vaya lo mejor posible. Si aún no has proporcionado la información solicitada en el mensaje anterior, te rogamos que lo hagas, ya que sin ella no será posible la entrada.

Ubicación:
Los Malinches, Hacienda Pinilla, Guanacaste, Costa Rica

Enlace de llegada:
Google Maps: https://maps.google.com/maps?daddr=10.258694448142,-85.833212037249

Entrada a la casa:
En la entrada principal, te registrarás con el personal de seguridad, identificándote a ti y a tus visitantes. Pídele al guardia que te dirija a la Casa Malinches 26A.

Código del portón principal (Main Gate): 2102#
Código del Keypad de la casa: 1407

Información general

Internet:
Red: Mnet26A
Contraseña: SurfMalinches26A

Reglas de la casa:
- No se permiten visitas debido a las políticas del condominio.
- No se permiten objetos de vidrio en la zona de la piscina.
- Ruido moderado después de las 10:00 pm.
- Prohibido fumar en el interior; se aplican tarifas y penalizaciones.
- Limpia y lava los utensilios de cocina después de usarlos.
- NO reordenes los muebles.
- Las fiestas o eventos no están permitidas.
- Se admiten mascotas a discreción; se aplica un cargo adicional.
- Los huéspedes deben identificarse antes de la llegada para que se pueda enviar la autorización al servicio de seguridad.
- No está permitido el consumo de drogas ilegales.
- Si las toallas o los paños se manchan irreversiblemente, se aplicará un cargo de $40.
- Por último, como se trata de una comunidad de Airbnb y una vivienda familiar privada, respeta y mantén la propiedad limpia antes de la salida.

¡Esperamos tu estancia!

Saludos cordiales,
Zafiro Property Management`},{id:`malinches-checkin-en`,title:`Check In Casa Malinches 26A`,body:`Hi there! 😊

Your arrival day is almost here and we want to make sure everything goes as smoothly as possible. If you haven't yet provided the information requested in the previous message, please do so, as entry won't be possible without it.

Location:
Los Malinches, Hacienda Pinilla, Guanacaste, Costa Rica

Arrival link:
Google Maps: https://maps.google.com/maps?daddr=10.258694448142,-85.833212037249

Entering the house:
At the main entrance, you'll check in with security staff, identifying yourself and your visitors. Ask the guard to direct you to Casa Malinches 26A.

Main Gate code: 2102#
House Keypad code: 1407

General information

Internet:
Network: Mnet26A
Password: SurfMalinches26A

House Rules:
- Visitors are not allowed due to condominium policies.
- Glass objects are not allowed in the pool area.
- Moderate noise after 10:00 pm.
- Smoking prohibited inside; fees and penalties apply.
- Clean and wash kitchen utensils after using them.
- DO NOT rearrange furniture.
- Parties or events are not allowed.
- Pets are allowed at our discretion; an additional charge applies.
- Guests must be identified before arrival so authorization can be sent to security.
- The consumption of illegal drugs is not allowed.
- If towels or linens become irreversibly stained, a $40 charge will also apply.
- Lastly, as this is an Airbnb community and a private family home, please respect and keep the property clean before departure.

We look forward to your stay!

Kind regards,
Zafiro Property Management`}],listing:{title:`Casa Malinches 26A Nature Retreat`,url:`https://zafiropm.hostify.club/listing/400041562`,guests:8,bedrooms:4,beds:4,bathrooms:4.5,description:`Villa de lujo dentro de Hacienda Pinilla, con habitaciones amplias cada una con baño privado y terraza cubierta indoor-outdoor. Acceso al Beach Club con piscina infinita frente al mar, gimnasio, cancha de golf, tenis y senderos para bicicleta. Cerca de Avellanas y Tamarindo.`,images:[k(`96f1f975078763afd7d15ae2c9264666`),k(`f7e8670c20867bacd21ea7a7531acc80`),k(`e0f82ea212bb6a20f055833ae67303fd`),k(`4043756ff7aa6b1fface6e8a9aae2416`),k(`76e05c0eb33e6fa64a56cc7c22bcfef8`)]}}]},{id:`farmstay`,group:`sanjose`,name:`Heavenly Highlands (FarmStay)`,zone:`San José · Santa Ana / Tabarcia`,owner:`Bruno y Erica`,note:`Propiedad nueva del portal de Zafiro PM. Aún no tiene proceso operativo interno documentado (códigos, wifi, mensajes de check-in) — solo la ficha pública.`,quickInfo:[[`Check in`,`3:00 PM`],[`Check out`,`11:00 AM`],[`Acceso`,`Último tramo de camino lastreado, muy empinado — se recomienda SUV`]],publicInfo:{amenities:[`WiFi`,`A/C`,`Chimenea interior/exterior`,`Fogata`,`Horno de pizza`,`Cocina completa`,`Parqueo gratis`,`Self check-in con clave`,`Recomendaciones de niñera`,`Acceso para silla de ruedas`,`Mascota en la propiedad`],rules:[`No mover el mobiliario.`,`No se permiten sustancias ilegales en la propiedad.`,`No se permiten huéspedes no registrados.`,`Prohibido el uso comercial de la propiedad.`,`No publicar fotos en redes sociales que comprometan la privacidad de la propiedad.`,`Ruido mínimo entre 10 pm y 8 am.`,`No fumar en ningún área de la propiedad.`,`Mascotas bienvenidas solo si se acordaron previamente.`,`Respetar los límites de la propiedad — salir de ellos se considera invasión de propiedad privada vecina.`],note:`El camino de acceso es seguro pero angosto y empinado; el último kilómetro no está pavimentado, se recomienda SUV.`},messages:[{id:`farmstay-welcome-es`,title:`Welcome Message (Español)`,body:`¡Hola! 😊

Nos alegra mucho recibirte en Heavenly Highlands. Con gusto estaremos coordinando todo para tu llegada.

Para poder gestionar tu ingreso, por favor envíanos la siguiente información:

- Nombre completo de todos los huéspedes
- Cédula o pasaporte de todos los huéspedes
- Cantidad total de huéspedes y cuántos son adultos
- Placa del vehículo (recomendamos SUV por el camino de acceso)

Con esta información podemos coordinar tu llegada a tiempo. ¡Muchas gracias por tu colaboración! Será un placer recibirte.`},{id:`farmstay-welcome-en`,title:`Welcome Message`,body:`Hi there! 😊

We're so happy to welcome you to Heavenly Highlands! We'll be glad to coordinate everything for your arrival.

To manage your arrival, please send us the following information:

- Full name of all guests
- ID or passport number for all guests
- Total number of guests and how many are adults
- Vehicle license plate (an SUV is recommended for the access road)

With this information we can coordinate your arrival ahead of time. Thank you so much for your help! We look forward to welcoming you.`},...Ce()],units:[{id:`farmstay-main`,name:`Heavenly Highlands`,num:``,pax:`6`,checkin:[{id:`farmstay-checkin`,title:`Check In Heavenly Highlands (genérico, Español)`,body:`¡Hola! 😊

Tu día de llegada ya está aquí y queremos asegurarnos de que todo vaya lo mejor posible.

Check-in: 3:00 PM
Check-out: 11:00 AM

El camino de acceso es seguro pero angosto y empinado; el último tramo no está pavimentado, se recomienda SUV.

⚠️ Nota interna: todavía no tenemos registrado el código de acceso (self check-in) ni los datos de WiFi de esta propiedad en el sistema — completar antes de enviar este mensaje a un huésped real.

Reglas de la casa:
- No se permiten sustancias ilegales en la propiedad.
- No se permiten huéspedes no registrados.
- Ruido mínimo entre 10 pm y 8 am.
- No fumar en ningún área de la propiedad.
- Mascotas bienvenidas solo si se acordaron previamente.

¡Esperamos tu estancia!`},{id:`farmstay-checkin-en`,title:`Check In Heavenly Highlands (generic)`,body:`Hi there! 😊

Your arrival day is here and we want to make sure everything goes as smoothly as possible.

Check-in: 3:00 PM
Check-out: 11:00 AM

The access road is safe but narrow and steep; the last stretch is unpaved, an SUV is recommended.

⚠️ Internal note: we still don't have the access code (self check-in) or WiFi details for this property registered in the system — complete before sending this message to a real guest.

House rules:
- No illegal substances allowed on the property.
- No unregistered guests allowed.
- Minimal noise between 10 pm and 8 am.
- No smoking anywhere on the property.
- Pets welcome only if agreed upon in advance.

We look forward to your stay!`}],listing:{title:`FarmStay Family Vacation: Nature, Views, Wellness`,url:`https://zafiropm.hostify.club/listing/400013844`,guests:6,bedrooms:2,beds:3,bathrooms:1,description:`Finca familiar en las montañas cerca de Santa Ana, con huerta, árboles frutales, cabras, un burrito y gallinas. Arquitectura moderna con fachada oscura, terrazas panorámicas, horno de pizza y senderos privados. Ideal para desconectar en familia con vistas espectaculares.`,images:[k(`1a59c739b642176be7e95108d89c673e`),k(`1132a74a57ef05ffa59f7ab637e8b75e`),k(`6e9f035992531bd0b7fd08e9388889fd`),k(`f13aa5ee6f7a066fa9ee97aef56f939a`),k(`4d31c8c3c096ac211ff41c8f3e11483f`)]}}]}]},Te=Object.fromEntries(j.properties.map(e=>[e.id,e.group]));function Ee(){return(0,O.jsx)(`a`,{href:`https://t.me/Zafirocrbot`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Chat en Telegram`,className:`fixed bottom-5 right-5 z-[60] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95`,style:{boxShadow:`0 8px 24px rgba(0,0,0,0.35)`},children:(0,O.jsxs)(`svg`,{viewBox:`0 0 240 240`,width:`56`,height:`56`,children:[(0,O.jsx)(`circle`,{cx:`120`,cy:`120`,r:`120`,fill:`#29A9EB`}),(0,O.jsx)(`path`,{fill:`white`,d:`M170.6,72.3l-20.3,95.6c-1.5,6.8-5.5,8.5-11.2,5.3l-31-22.9l-15,14.4c-1.7,1.7-3.1,3.1-6.2,3.1l2.2-31.6l57.5-52c2.5-2.2-0.5-3.5-3.9-1.2l-71.1,44.8l-30.7-9.6c-6.7-2.1-6.8-6.7,1.4-9.9l120.1-46.3C167.5,60.1,172.2,63.4,170.6,72.3z`})]})})}function De({size:e=16,className:t=``}){return(0,O.jsxs)(`svg`,{width:e,height:e,viewBox:`0 0 24 28`,fill:`none`,className:t,xmlns:`http://www.w3.org/2000/svg`,children:[(0,O.jsx)(`path`,{d:`M12 1 L21 8 L12 27 L3 8 Z`,stroke:`currentColor`,strokeWidth:`1.4`,strokeLinejoin:`round`,fill:`none`}),(0,O.jsx)(`path`,{d:`M3 8 L21 8`,stroke:`currentColor`,strokeWidth:`1`}),(0,O.jsx)(`path`,{d:`M7.5 8 L12 1 L16.5 8`,stroke:`currentColor`,strokeWidth:`1`}),(0,O.jsx)(`path`,{d:`M7.5 8 L12 27`,stroke:`currentColor`,strokeWidth:`1`}),(0,O.jsx)(`path`,{d:`M16.5 8 L12 27`,stroke:`currentColor`,strokeWidth:`1`}),(0,O.jsx)(`path`,{d:`M3 8 L12 12 L21 8`,stroke:`currentColor`,strokeWidth:`1`}),(0,O.jsx)(`path`,{d:`M12 12 L12 27`,stroke:`currentColor`,strokeWidth:`1`})]})}function Oe({text:e,small:t}){let[n,r]=(0,_.useState)(!1);return(0,O.jsxs)(`button`,{onClick:async()=>{try{await navigator.clipboard.writeText(e)}catch{let t=document.createElement(`textarea`);t.value=e,document.body.appendChild(t),t.select(),document.execCommand(`copy`),document.body.removeChild(t)}r(!0),setTimeout(()=>r(!1),1600)},className:`flex items-center gap-1.5 rounded-full font-medium transition-all active:scale-95 ${n?`bg-emerald-600 text-white`:`bg-blue-900 text-white active:bg-blue-950`} ${t?`px-3 py-1.5 text-xs`:`px-4 py-2 text-sm`}`,children:[n?(0,O.jsx)(ae,{size:t?14:16}):(0,O.jsx)(ue,{size:t?14:16}),n?`Copiado`:`Copiar`]})}function ke(e){return(e||``).replace(/\s*\(español\)\s*$/i,``).trim()}function Ae(e){return/\(español\)/i.test(e||``)}function je(e){let t=(e||``).toLowerCase();return/welcome|bienvenida/.test(t)?`bienvenida`:/check[\s-]?in/.test(t)?`checkin`:/check[\s-]?out/.test(t)?`checkout`:`otro`}var Me={checkin:{card:`#eef3ee`,border:`#dbe6db`,body:`#ffffff`},checkout:{card:`#f5eeee`,border:`#e6dbdb`,body:`#ffffff`},bienvenida:{card:`#f1f5f9`,border:`#cbd5e1`,body:`#ffffff`},otro:{card:`#ffffff`,border:`#e2e8f0`,body:`#f8fafc`}};function Ne(e){let t=[],n={};(e||[]).forEach(e=>{let r=ke(e.title);r in n||(n[r]=t.length,t.push({base:r,variantes:[]})),t[n[r]].variantes.push({lang:Ae(e.title)?`es`:`en`,msg:e})});let r={bienvenida:0,checkin:1,checkout:2,otro:3};return t.forEach((e,t)=>{e._orden=t}),t.sort((e,t)=>{let n=r[je(e.base)]-r[je(t.base)];return n===0?e._orden-t._orden:n}),t}function Pe(e){let t=e||``,n=t.match(/(^|\n)\s*⚠️\s*Nota interna:?\s*([\s\S]*?)(?=\n\s*\n|$)/i);return n?{nota:n[2].trim(),cuerpo:t.replace(n[0],``).replace(/\n{3,}/g,`

`).trim()}:{nota:null,cuerpo:t}}function Fe({msg:e,variantes:t,baseTitle:n}){let r=t||[{lang:Ae(e.title)?`es`:`en`,msg:e}],i=n||ke(e.title),[a,o]=(0,_.useState)(0),[s,c]=(0,_.useState)(!0),l=r[Math.min(a,r.length-1)].msg,u=Me[je(i)],{nota:d,cuerpo:f}=Pe(l.body);return(0,O.jsxs)(`div`,{className:`rounded-2xl border overflow-hidden min-w-0`,style:{backgroundColor:u.card,borderColor:u.border},children:[(0,O.jsxs)(`button`,{onClick:()=>c(!s),className:`w-full flex items-center justify-between px-4 py-3 text-left`,children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-2 min-w-0`,children:[(0,O.jsx)(de,{size:16,className:`text-blue-900 shrink-0`}),(0,O.jsx)(`span`,{className:`font-semibold text-slate-800 text-sm truncate`,children:(0,O.jsx)(A,{text:i})}),d&&(0,O.jsx)(`span`,{className:`shrink-0 inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-100 border border-amber-300 rounded-full px-2 py-0.5`,children:`⚠️ Falta info`})]}),s?(0,O.jsx)(le,{size:18,className:`text-slate-400 shrink-0`}):(0,O.jsx)(oe,{size:18,className:`text-slate-400 shrink-0`})]}),s&&(0,O.jsxs)(`div`,{className:`px-4 pb-4`,children:[d&&(0,O.jsx)(`div`,{className:`text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mb-3`,children:(0,O.jsx)(A,{text:d})}),r.length>1&&(0,O.jsx)(`div`,{className:`flex gap-1.5 mb-3`,children:r.map((e,t)=>(0,O.jsx)(`button`,{onClick:()=>o(t),className:`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${t===a?`bg-blue-900 text-white`:`bg-white text-slate-600 border border-slate-300`}`,children:e.lang===`es`?`🇪🇸 Español`:`🇬🇧 English`},e.lang))}),(0,O.jsx)(`pre`,{className:`whitespace-pre-wrap break-words font-sans text-[13px] leading-relaxed text-slate-600 rounded-xl p-3 mb-3 max-h-72 overflow-y-auto`,style:{backgroundColor:u.body},children:(0,O.jsx)(A,{text:f})}),(0,O.jsx)(Oe,{text:f})]})]})}function Ie({images:e,index:t,title:n,onClose:r,onNav:i}){return(0,ge.createPortal)((0,O.jsxs)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center`,style:{backgroundColor:`rgba(0,0,0,0.92)`},onClick:r,children:[(0,O.jsx)(`button`,{onClick:r,className:`absolute top-4 right-4 text-white p-2 rounded-full`,style:{backgroundColor:`rgba(255,255,255,0.15)`},"aria-label":`Cerrar`,children:(0,O.jsx)(me,{size:22})}),e.length>1&&(0,O.jsx)(`button`,{onClick:e=>{e.stopPropagation(),i(-1)},className:`absolute left-2 sm:left-4 text-white p-2 rounded-full`,style:{backgroundColor:`rgba(255,255,255,0.15)`},"aria-label":`Anterior`,children:(0,O.jsx)(se,{size:26})}),(0,O.jsx)(`img`,{src:e[t],alt:n,onClick:e=>e.stopPropagation(),className:`max-h-[85vh] max-w-[92vw] object-contain rounded-lg`}),e.length>1&&(0,O.jsx)(`button`,{onClick:e=>{e.stopPropagation(),i(1)},className:`absolute right-2 sm:right-4 text-white p-2 rounded-full`,style:{backgroundColor:`rgba(255,255,255,0.15)`},"aria-label":`Siguiente`,children:(0,O.jsx)(ce,{size:26})}),(0,O.jsxs)(`div`,{className:`absolute bottom-4 text-white text-xs`,style:{opacity:.8},children:[t+1,` / `,e.length]})]}),document.body)}function Le({listing:e}){let[t,n]=(0,_.useState)(null);return(0,O.jsxs)(`div`,{className:`rounded-2xl border border-slate-200 bg-white overflow-hidden min-w-0`,children:[(0,O.jsxs)(`div`,{className:`relative`,children:[(0,O.jsx)(`div`,{className:`flex gap-2 overflow-x-auto p-2 no-scrollbar snap-x snap-mandatory scroll-pl-2`,children:e.images.map((t,r)=>(0,O.jsx)(`button`,{onClick:()=>n(r),className:`shrink-0 snap-start`,children:(0,O.jsx)(`img`,{src:t,alt:e.title,className:`h-32 w-48 sm:h-36 sm:w-52 object-cover rounded-xl bg-slate-100`,loading:`lazy`})},r))}),e.images.length>1&&(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(`div`,{className:`pointer-events-none absolute top-2 bottom-2 right-2 w-10 bg-gradient-to-l from-white to-transparent rounded-r-xl`}),(0,O.jsxs)(`span`,{className:`pointer-events-none absolute top-3 right-3 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full`,style:{backgroundColor:`rgba(0,0,0,0.6)`},children:[e.images.length,` fotos`]})]})]}),(0,O.jsxs)(`div`,{className:`px-4 pb-4 pt-1 min-w-0`,children:[(0,O.jsx)(`p`,{className:`font-semibold text-slate-800 text-sm`,children:(0,O.jsx)(A,{text:e.title})}),(0,O.jsxs)(`div`,{className:`flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-slate-500 mt-1 mb-2`,children:[(0,O.jsxs)(`span`,{children:[e.guests,` huéspedes`]}),(0,O.jsx)(`span`,{children:`·`}),(0,O.jsxs)(`span`,{children:[e.bedrooms,` hab.`]}),(0,O.jsx)(`span`,{children:`·`}),(0,O.jsxs)(`span`,{children:[e.beds,` camas`]}),(0,O.jsx)(`span`,{children:`·`}),(0,O.jsxs)(`span`,{children:[e.bathrooms,` baños`]})]}),(0,O.jsx)(`p`,{className:`text-sm text-slate-600 leading-relaxed mb-3 break-words`,children:(0,O.jsx)(A,{text:e.description})}),e.images.length>1&&(0,O.jsxs)(`button`,{onClick:()=>n(0),className:`text-xs text-slate-500 mb-2 flex items-center gap-1`,children:[`Ver las `,e.images.length,` fotos en pantalla completa `,(0,O.jsx)(ce,{size:12})]}),(0,O.jsx)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer`,className:`text-blue-900 text-xs font-semibold underline`,children:`Ver ficha pública en Zafiro PM ↗`})]}),t!==null&&(0,O.jsx)(Ie,{images:e.images,index:t,title:e.title,onClose:()=>n(null),onNav:t=>{n(n=>(n+t+e.images.length)%e.images.length)}})]})}function Re({k:e,v:t}){return(0,O.jsxs)(`div`,{className:`flex justify-between gap-3 py-1.5 border-b border-slate-100 last:border-0 text-sm break-inside-avoid`,children:[(0,O.jsx)(`span`,{className:`text-slate-500 shrink-0`,children:(0,O.jsx)(A,{text:e})}),(0,O.jsx)(`span`,{className:`text-slate-800 font-medium text-right break-words min-w-0`,children:(0,O.jsx)(A,{text:t})})]})}function ze({guia:e}){return(0,O.jsxs)(`div`,{className:`rounded-2xl border border-slate-200 bg-white p-4 space-y-2`,children:[e.nota&&(0,O.jsx)(`p`,{className:`text-sm text-slate-600 mb-1`,children:e.nota}),e.comoLlegar&&(0,O.jsx)(`a`,{href:e.comoLlegar,target:`_blank`,rel:`noreferrer`,className:`block text-blue-900 text-sm font-semibold underline break-all`,children:`Cómo llegar (Google Maps) ↗`}),(0,O.jsx)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer`,className:`block text-blue-900 text-sm font-semibold underline break-all`,children:`Abrir guía digital ↗`}),e.whatsappConcierge&&(0,O.jsx)(`a`,{href:e.whatsappConcierge,target:`_blank`,rel:`noreferrer`,className:`block text-blue-900 text-sm underline break-all`,children:`WhatsApp concierge de experiencias (Localbird) ↗`}),e.linkReview&&(0,O.jsx)(`a`,{href:e.linkReview,target:`_blank`,rel:`noreferrer`,className:`block text-blue-900 text-sm underline break-all`,children:`Link de reseña en Airbnb ↗`}),e.linkReservaDirecta&&(0,O.jsx)(`a`,{href:e.linkReservaDirecta,target:`_blank`,rel:`noreferrer`,className:`block text-blue-900 text-sm underline break-all`,children:`Link de reserva directa (Zafiro PM) ↗`})]})}function Be({unit:e}){let[t,n]=(0,_.useState)(!0),r=e.rooms&&e.rooms.length||e.extra&&e.extra.length||e.checkin||e.listing||e.guiaDigital;return(0,O.jsxs)(`div`,{className:`rounded-2xl border border-slate-200 bg-white p-4 min-w-0`,children:[(0,O.jsxs)(`div`,{className:`flex items-start justify-between gap-2`,children:[(0,O.jsxs)(`p`,{className:`font-semibold text-slate-800 text-sm break-words`,children:[(0,O.jsx)(A,{text:e.name}),e.num?` · ${e.num}`:``]}),r&&(0,O.jsxs)(`button`,{onClick:()=>n(!t),className:`text-blue-900 text-xs font-medium shrink-0 flex items-center gap-0.5`,children:[t?`Ocultar`:`Detalle`,` `,t?(0,O.jsx)(le,{size:14}):(0,O.jsx)(oe,{size:14})]})]}),(0,O.jsxs)(`div`,{className:`mt-2 space-y-0.5 min-w-0`,children:[(0,O.jsx)(Re,{k:`Pax`,v:e.pax}),e.parqueo&&(0,O.jsx)(Re,{k:`Parqueo`,v:e.parqueo}),e.accessCode&&(0,O.jsx)(Re,{k:`Acceso`,v:e.accessCode}),e.forms&&(0,O.jsx)(Re,{k:`Formulario`,v:e.forms}),e.correo&&(0,O.jsx)(Re,{k:`Correo recepción`,v:e.correo}),e.whatsapp&&(0,O.jsx)(Re,{k:`WhatsApp caseta`,v:e.whatsapp}),e.app&&(0,O.jsx)(Re,{k:`Ingreso app`,v:e.app})]}),t&&(0,O.jsxs)(`div`,{className:`mt-3 pt-3 border-t border-slate-100 space-y-3 min-w-0`,children:[e.extra&&e.extra.length>0&&(0,O.jsx)(`div`,{children:e.extra.map(([e,t])=>(0,O.jsx)(Re,{k:e,v:t},e))}),e.rooms&&e.rooms.length>0&&(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1`,children:`Habitaciones`}),(0,O.jsx)(`ul`,{className:`space-y-1`,children:e.rooms.map((e,t)=>(0,O.jsxs)(`li`,{className:`text-sm text-slate-700 flex gap-2`,children:[(0,O.jsx)(`span`,{className:`text-blue-800`,children:`•`}),(0,O.jsx)(A,{text:e})]},t))})]}),e.listing&&(0,O.jsx)(Le,{listing:e.listing}),e.guiaDigital&&(0,O.jsx)(ze,{guia:e.guiaDigital}),!e.guiaDigital&&e.comoLlegar&&(0,O.jsx)(`a`,{href:e.comoLlegar,target:`_blank`,rel:`noreferrer`,className:`block text-blue-900 text-sm font-semibold underline break-all`,children:`Cómo llegar (Google Maps) ↗`}),e.checkin&&(Array.isArray(e.checkin)?Ne(e.checkin).map(e=>(0,O.jsx)(Fe,{msg:e.variantes[0].msg,variantes:e.variantes,baseTitle:e.base},e.base)):(0,O.jsx)(Fe,{msg:e.checkin}))]})]})}function Ve({property:e}){let t=we[e.group];return(0,O.jsxs)(`div`,{className:`space-y-4`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-2 flex-wrap`,children:[(0,O.jsx)(`h2`,{className:`text-xl font-bold text-slate-900`,children:(0,O.jsx)(A,{text:e.name})}),t&&(0,O.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 text-xs font-semibold px-2 py-0.5 rounded-full ${t.badgeBg} ${t.badgeText}`,children:[(0,O.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full ${t.dot}`}),t.label]})]}),(0,O.jsxs)(`p`,{className:`text-sm text-slate-500`,children:[(0,O.jsx)(A,{text:e.zone}),e.owner&&e.owner!==`—`?(0,O.jsxs)(O.Fragment,{children:[` · Dueño: `,(0,O.jsx)(A,{text:e.owner})]}):``]})]}),e.note&&(0,O.jsx)(`div`,{className:`rounded-xl bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-800`,children:(0,O.jsx)(A,{text:e.note})}),e.quickInfo&&e.quickInfo.length>0&&(0,O.jsxs)(`div`,{className:`rounded-2xl border border-slate-200 bg-white p-4`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2`,children:`Datos generales`}),(0,O.jsx)(`div`,{className:`lg:columns-2 lg:gap-x-8`,children:e.quickInfo.map(([e,t])=>(0,O.jsx)(Re,{k:e,v:t},e))})]}),e.rules&&e.rules.length>0&&(0,O.jsxs)(`div`,{className:`rounded-2xl border border-slate-200 bg-white p-4`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2`,children:`Horarios de áreas comunes`}),(0,O.jsx)(`ul`,{className:`space-y-1.5 lg:columns-2 lg:gap-x-8`,children:e.rules.map((e,t)=>(0,O.jsxs)(`li`,{className:`text-sm text-slate-700 flex gap-2 break-inside-avoid`,children:[(0,O.jsx)(`span`,{className:`text-blue-800`,children:`•`}),(0,O.jsx)(A,{text:e})]},t))})]}),e.units&&e.units.length>0&&(0,O.jsxs)(`div`,{className:`space-y-2 min-w-0`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide px-1`,children:`Unidades`}),(0,O.jsx)(`div`,{className:`grid gap-3 lg:grid-cols-2 min-w-0`,children:e.units.map(e=>(0,O.jsx)(Be,{unit:e},e.id))})]}),e.correoTemplate&&(0,O.jsxs)(`div`,{className:`space-y-2`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide px-1`,children:`Correo interno`}),(0,O.jsx)(Fe,{msg:e.correoTemplate})]}),e.messages&&e.messages.length>0&&(0,O.jsxs)(`div`,{className:`space-y-2`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide px-1`,children:`Mensajes para el huésped`}),(0,O.jsx)(`div`,{className:`grid gap-3 lg:grid-cols-2 min-w-0`,children:Ne(e.messages).map(e=>(0,O.jsx)(Fe,{msg:e.variantes[0].msg,variantes:e.variantes,baseTitle:e.base},e.base))})]}),e.publicInfo&&(0,O.jsxs)(`div`,{className:`space-y-2`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide px-1`,children:`Amenidades y reglas · ficha pública Zafiro PM`}),(0,O.jsx)(Ue,{info:e.publicInfo})]}),e.localExperiences&&(0,O.jsxs)(`div`,{className:`space-y-2`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide px-1`,children:`Experiencias y actividades cercanas · Localbird`}),(0,O.jsx)(He,{info:e.localExperiences})]}),e.guiaDigital&&(0,O.jsxs)(`div`,{className:`space-y-2`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide px-1`,children:`Guía digital del huésped`}),(0,O.jsx)(ze,{guia:e.guiaDigital})]})]})}function He({info:e}){let[t,n]=(0,_.useState)(!0);return(0,O.jsxs)(`div`,{className:`rounded-2xl border border-slate-200 bg-white overflow-hidden min-w-0`,children:[(0,O.jsxs)(`button`,{onClick:()=>n(!t),className:`w-full flex items-center justify-between px-4 py-3 text-left`,children:[(0,O.jsx)(`span`,{className:`font-semibold text-slate-800 text-sm`,children:`Tours, actividades y experiencias`}),t?(0,O.jsx)(le,{size:18,className:`text-slate-400 shrink-0`}):(0,O.jsx)(oe,{size:18,className:`text-slate-400 shrink-0`})]}),t&&(0,O.jsxs)(`div`,{className:`px-4 pb-4 space-y-4`,children:[(0,O.jsx)(`p`,{className:`text-sm text-slate-600 break-words`,children:e.resumen}),e.categorias&&e.categorias.length>0&&(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2`,children:`Categorías`}),(0,O.jsx)(`div`,{className:`flex flex-wrap gap-1.5`,children:e.categorias.map((e,t)=>(0,O.jsx)(`span`,{className:`text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-lg`,children:e},t))})]}),e.destacados&&e.destacados.length>0&&(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2`,children:`Algunas destacadas`}),(0,O.jsx)(`ul`,{className:`space-y-1.5`,children:e.destacados.map((e,t)=>(0,O.jsxs)(`li`,{className:`text-sm text-slate-700 flex justify-between gap-2`,children:[(0,O.jsx)(`span`,{children:e.nombre}),(0,O.jsx)(`span`,{className:`text-slate-400 shrink-0`,children:e.precio})]},t))}),(0,O.jsx)(`p`,{className:`text-xs text-slate-400 italic mt-2`,children:`Precios y ofertas cambian seguido — confirmar siempre en el link antes de citarle un precio a un huésped.`})]}),(0,O.jsx)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer`,className:`text-blue-900 text-xs font-semibold underline`,children:`Ver todas las experiencias en Localbird ↗`})]})]})}function Ue({info:e}){let[t,n]=(0,_.useState)(!0),r=(e.rules||[]).map(e=>`• ${e}`).join(`
`);return(0,O.jsxs)(`div`,{className:`rounded-2xl border border-slate-200 bg-white overflow-hidden min-w-0`,children:[(0,O.jsxs)(`button`,{onClick:()=>n(!t),className:`w-full flex items-center justify-between px-4 py-3 text-left`,children:[(0,O.jsx)(`span`,{className:`font-semibold text-slate-800 text-sm`,children:`Amenidades y reglas de la casa`}),t?(0,O.jsx)(le,{size:18,className:`text-slate-400 shrink-0`}):(0,O.jsx)(oe,{size:18,className:`text-slate-400 shrink-0`})]}),t&&(0,O.jsxs)(`div`,{className:`px-4 pb-4 space-y-4`,children:[e.amenities&&e.amenities.length>0&&(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2`,children:`Amenidades`}),(0,O.jsx)(`div`,{className:`flex flex-wrap gap-1.5`,children:e.amenities.map((e,t)=>(0,O.jsx)(`span`,{className:`text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-lg`,children:(0,O.jsx)(A,{text:e})},t))})]}),e.nearby&&e.nearby.length>0&&(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2`,children:`Cerca de la propiedad`}),(0,O.jsx)(`ul`,{className:`space-y-1`,children:e.nearby.map((e,t)=>{let n=e&&typeof e==`object`,r=n?e.text:e;return(0,O.jsxs)(`li`,{className:`text-sm text-slate-700 flex gap-2 break-words`,children:[(0,O.jsx)(`span`,{className:`text-blue-800`,children:`•`}),n?(0,O.jsx)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer`,className:`text-blue-900 underline`,children:(0,O.jsx)(A,{text:r})}):(0,O.jsx)(A,{text:r})]},t)})})]}),e.rules&&e.rules.length>0&&(0,O.jsxs)(`div`,{children:[(0,O.jsxs)(`div`,{className:`flex items-center justify-between mb-2`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide`,children:`Reglas de la casa`}),(0,O.jsx)(Oe,{text:r,small:!0})]}),(0,O.jsx)(`ul`,{className:`space-y-1.5`,children:e.rules.map((e,t)=>(0,O.jsxs)(`li`,{className:`text-sm text-slate-700 flex gap-2 break-words`,children:[(0,O.jsx)(`span`,{className:`text-blue-800`,children:`•`}),(0,O.jsx)(A,{text:e})]},t))})]}),e.note&&(0,O.jsx)(`p`,{className:`text-xs text-slate-400 italic`,children:(0,O.jsx)(A,{text:e.note})})]})]})}function We({label:e,value:t}){let n=/^(SI|S[Ií])/i.test(t)||t.toUpperCase().startsWith(`SI`);return(0,O.jsxs)(`span`,{className:`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${t===`—`?`bg-slate-100 text-slate-400`:n?`bg-emerald-50 text-emerald-700`:`bg-slate-100 text-slate-500`}`,title:e,children:[e,`: `,t.length>14?t.slice(0,14)+`…`:t]})}function Ge({row:e,onOpen:t}){let n=we[Te[e.propertyId]];return(0,O.jsxs)(`button`,{onClick:()=>t(e.propertyId),className:`w-full text-left rounded-2xl border border-slate-200 bg-white p-3.5 flex items-center gap-3 active:bg-slate-50 transition-colors relative overflow-hidden`,children:[n&&(0,O.jsx)(`span`,{className:`absolute left-0 top-0 bottom-0 w-1 ${n.dot}`}),(0,O.jsxs)(`div`,{className:`min-w-0 flex-1 pl-1.5`,children:[(0,O.jsx)(`p`,{className:`font-semibold text-slate-800 text-sm truncate`,children:e.property}),(0,O.jsxs)(`p`,{className:`text-xs text-slate-500 truncate mt-0.5`,children:[e.unit,` · Pax `,e.pax]}),(0,O.jsxs)(`p`,{className:`text-xs text-slate-400 truncate mt-0.5`,children:[`Parqueo: `,e.parqueo]}),(0,O.jsxs)(`div`,{className:`flex flex-wrap gap-1 mt-1.5`,children:[(0,O.jsx)(We,{label:`Form`,value:e.forms}),(0,O.jsx)(We,{label:`WSP`,value:e.whatsapp}),(0,O.jsx)(We,{label:`App`,value:e.app})]})]}),(0,O.jsx)(ce,{size:18,className:`text-slate-300 shrink-0`})]})}var Ke={airbnb:{bg:`#FF5A5F`,label:`Airbnb`,inicial:`A`},booking:{bg:`#003580`,label:`Booking.com`,inicial:`B`},vrbo:{bg:`#3D67FF`,label:`Vrbo`,inicial:`V`},manual:{bg:`#64748b`,label:`Bloqueo manual`,inicial:`M`},otro:{bg:`#94a3b8`,label:`Otro`,inicial:`?`}},qe={sanjose:`#6366f1`,jaco:`#f59e0b`,guanacaste:`#10b981`,otro:`#94a3b8`};function Je(e){return e.toISOString().slice(0,10)}function Ye(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function Xe(e,t){return Math.round((new Date(t)-new Date(e))/864e5)}var Ze=[`D`,`L`,`M`,`M`,`J`,`V`,`S`],Qe=[`ene`,`feb`,`mar`,`abr`,`may`,`jun`,`jul`,`ago`,`sep`,`oct`,`nov`,`dic`];function $e(){let e=new Date;e.setHours(0,0,0,0);let t=[`airbnb`,`booking`,`vrbo`],n=[`María José`,`John Smith`,`Alexandra Z.`,`Rosa Kamelia`,`Jonathan P.`,`Kelsey Layne`,`Fabrizio R.`,null],r=42,i=()=>(r=(r*9301+49297)%233280,r/233280),a=[];return j.properties.forEach(r=>{(r.units||[]).forEach(o=>{let s=[],c=-Math.floor(i()*10);for(let r=0;r<4;r++){c+=Math.floor(i()*4)+1;let r=Math.floor(i()*6)+2;s.push({inicio:Je(Ye(e,c)),fin:Je(Ye(e,c+r)),fuente:t[Math.floor(i()*t.length)],huesped:n[Math.floor(i()*n.length)]}),c+=r}a.push({propertyId:r.id,propertyName:r.name,unitId:o.id,unitName:o.num?`${o.name} ${o.num}`:o.name,reservas:s})})}),{actualizado:null,esEjemplo:!0,propiedades:a}}function et(){let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(!0),[i,a]=(0,_.useState)(0),o=()=>{if(r(!0),_e.includes(`PEGAR_AQUI`)){t($e()),r(!1);return}fetch(_e).then(e=>e.json()).then(e=>{t(e),r(!1)}).catch(()=>{t($e()),r(!1)})};(0,_.useEffect)(()=>{o()},[]);let s=(0,_.useMemo)(()=>{let e=new Date;return e.setHours(0,0,0,0),e},[]),c=(0,_.useMemo)(()=>Ye(s,i),[s,i]),l=(0,_.useMemo)(()=>Array.from({length:21},(e,t)=>Ye(c,t)),[c]),u=l[l.length-1],d=(0,_.useMemo)(()=>{if(!e)return[];let t={};j.properties.forEach(e=>{t[e.id]=e.group});let n={},r=[];e.propiedades.forEach(e=>{n[e.propertyId]||(n[e.propertyId]={propertyName:e.propertyName,group:t[e.propertyId]||`otro`,unidades:[]},r.push(e.propertyId)),n[e.propertyId].unidades.push(e)});let i={sanjose:[],jaco:[],guanacaste:[],otro:[]};return r.forEach(e=>{let t=n[e];(i[t.group]||i.otro).push(t)}),[`sanjose`,`jaco`,`guanacaste`,`otro`].filter(e=>i[e].length>0).map(e=>({region:e,propiedades:i[e]}))},[e]);return n?(0,O.jsx)(`p`,{className:`text-sm text-slate-400 text-center pt-10`,children:`Cargando calendario…`}):(0,O.jsxs)(`div`,{className:`space-y-4 pb-6`,children:[e.esEjemplo&&(0,O.jsx)(`div`,{className:`rounded-xl bg-amber-50 border border-amber-200 px-3 py-2 text-xs text-amber-800`,children:`⚠️ Mostrando datos de ejemplo — todavía no está configurada la sincronización real con Airbnb/Booking.`}),(0,O.jsxs)(`div`,{className:`flex flex-wrap items-center justify-between gap-2`,children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,O.jsx)(`button`,{onClick:()=>a(e=>e-7),className:`w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 active:bg-slate-100`,"aria-label":`Semana anterior`,children:(0,O.jsx)(se,{size:16})}),(0,O.jsx)(`button`,{onClick:()=>a(0),className:`px-3 h-8 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-600 active:bg-slate-100`,children:`Hoy`}),(0,O.jsx)(`button`,{onClick:()=>a(e=>e+7),className:`w-8 h-8 rounded-lg border border-slate-200 bg-white flex items-center justify-center text-slate-600 active:bg-slate-100`,"aria-label":`Semana siguiente`,children:(0,O.jsx)(ce,{size:16})}),(0,O.jsxs)(`span`,{className:`text-xs text-slate-500 ml-1 hidden sm:inline`,children:[Qe[c.getMonth()],` `,c.getDate(),` – `,Qe[u.getMonth()],` `,u.getDate()]})]}),(0,O.jsxs)(`button`,{onClick:o,className:`flex items-center gap-1.5 px-3 h-8 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-600 active:bg-slate-100`,children:[(0,O.jsx)(pe,{size:13}),`Actualizar`]})]}),(0,O.jsx)(`div`,{className:`flex flex-wrap gap-3`,children:Object.entries(Ke).map(([e,t])=>(0,O.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,O.jsx)(`span`,{className:`w-2.5 h-2.5 rounded-sm shrink-0`,style:{backgroundColor:t.bg}}),(0,O.jsx)(`span`,{className:`text-[11px] text-slate-500`,children:t.label})]},e))}),(0,O.jsx)(`div`,{className:`rounded-2xl border border-slate-200 bg-white overflow-hidden`,children:(0,O.jsx)(`div`,{className:`overflow-auto max-h-[65vh]`,children:(0,O.jsxs)(`div`,{style:{minWidth:`980px`},children:[(0,O.jsxs)(`div`,{className:`flex sticky top-0 z-10 bg-white border-b border-slate-200`,children:[(0,O.jsx)(`div`,{className:`w-[140px] shrink-0 px-3 py-2 text-[11px] font-bold text-slate-500 uppercase tracking-wide border-r border-slate-200`,children:`Unidad`}),(0,O.jsx)(`div`,{className:`flex-1 grid`,style:{gridTemplateColumns:`repeat(21, minmax(40px, 1fr))`},children:l.map((e,t)=>{let n=Je(e)===Je(s),r=e.getDay()===0||e.getDay()===6;return(0,O.jsxs)(`div`,{className:`text-center py-2 border-r border-slate-300 ${r?`bg-slate-50`:``} ${n?`bg-blue-50`:``}`,children:[(0,O.jsx)(`div`,{className:`text-[10px] ${n?`text-blue-900 font-bold`:`text-slate-400`}`,children:Ze[e.getDay()]}),(0,O.jsx)(`div`,{className:`text-xs ${n?`text-blue-900 font-bold`:`text-slate-700 font-medium`}`,children:e.getDate()})]},t)})})]}),d.map(e=>{let t=we[e.region]||{label:`Otras`,dot:`bg-slate-400`,badgeText:`text-slate-500`};return(0,O.jsxs)(`div`,{style:{borderLeft:`4px solid ${qe[e.region]||`#94a3b8`}`},children:[(0,O.jsxs)(`div`,{className:`px-3 py-1.5 bg-slate-100 border-b border-slate-200 flex items-center gap-1.5`,children:[(0,O.jsx)(`span`,{className:`w-2 h-2 rounded-full ${t.dot}`}),(0,O.jsx)(`span`,{className:`text-[11px] font-bold uppercase tracking-wide ${t.badgeText}`,children:t.label})]}),e.propiedades.map(e=>(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`div`,{className:`px-3 py-1.5 bg-slate-50 border-b border-slate-100`,children:(0,O.jsx)(`span`,{className:`text-[11px] font-bold text-slate-600`,children:(0,O.jsx)(A,{text:e.propertyName})})}),e.unidades.map(e=>{let t=(e.reservas||[]).map(e=>{let t=Xe(c,e.inicio)+.5,n=Xe(c,e.fin)+.5,r=Math.max(0,Math.min(21,t)),i=Math.max(0,Math.min(21,n));return{...e,leftPct:r/21*100,widthPct:(i-r)/21*100}}).filter(e=>e.widthPct>0);return(0,O.jsxs)(`div`,{className:`flex border-b border-slate-100 last:border-b-0`,children:[(0,O.jsx)(`div`,{className:`w-[140px] shrink-0 px-3 py-2.5 text-xs text-slate-700 border-r border-slate-200 flex items-center`,children:(0,O.jsx)(A,{text:e.unitName})}),(0,O.jsxs)(`div`,{className:`flex-1 grid relative`,style:{gridTemplateColumns:`repeat(21, minmax(40px, 1fr))`,gridTemplateRows:`40px`},children:[l.map((e,t)=>{let n=e.getDay()===0||e.getDay()===6,r=Je(e)===Je(s);return(0,O.jsx)(`div`,{style:{gridColumn:t+1,gridRow:1},className:`border-r border-slate-300 ${n?`bg-slate-50/60`:``} ${r?`bg-blue-50/60`:``}`},t)}),t.map((e,t)=>{let n=Ke[e.fuente]||Ke.otro;return(0,O.jsxs)(`div`,{title:`${n.label}${e.huesped?` — `+e.huesped:``}: ${e.inicio} → ${e.fin}`,style:{position:`absolute`,left:`${e.leftPct}%`,width:`${e.widthPct}%`,top:`50%`,transform:`translateY(-50%)`,backgroundColor:n.bg},className:`h-6 rounded-md opacity-90 hover:opacity-100 cursor-default flex items-center gap-1 px-1 overflow-hidden`,children:[(0,O.jsx)(`span`,{className:`w-4 h-4 rounded-full bg-white flex items-center justify-center text-[9px] font-bold shrink-0`,style:{color:n.bg},children:n.inicial}),e.huesped&&(0,O.jsx)(`span`,{className:`text-[10px] font-semibold text-white truncate`,children:e.huesped})]},t)})]})]},e.unitId)})]},e.propertyName))]},e.region)})]})})}),e.actualizado&&(0,O.jsxs)(`p`,{className:`text-[11px] text-slate-400 text-center`,children:[`Última actualización: `,new Date(e.actualizado).toLocaleString(`es-CR`)]})]})}function tt({general:e,checkInGeneral:t,checkOutGeneral:n,masterTable:r,onOpenProperty:i}){return(0,O.jsxs)(`div`,{className:`space-y-4`,children:[(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`h2`,{className:`text-xl font-bold text-slate-900`,children:`Inicio`}),(0,O.jsx)(`p`,{className:`text-sm text-slate-500`,children:`Información general y acceso rápido a cada propiedad`})]}),(0,O.jsxs)(`div`,{className:`grid gap-3 lg:grid-cols-2 lg:items-start`,children:[(0,O.jsxs)(`div`,{className:`rounded-2xl border border-slate-200 bg-white p-4`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2`,children:`Horario estándar`}),(0,O.jsx)(Re,{k:`Check in`,v:t}),(0,O.jsx)(Re,{k:`Check out`,v:n})]}),(0,O.jsxs)(`div`,{className:`rounded-2xl border border-slate-200 bg-white p-4`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2`,children:`Formulario diario`}),(0,O.jsx)(`p`,{className:`text-sm text-slate-700 mb-2`,children:(0,O.jsx)(A,{text:e.formulario.texto})}),(0,O.jsx)(`a`,{href:e.formulario.link,target:`_blank`,rel:`noreferrer`,className:`text-blue-900 text-sm font-medium underline break-all`,children:e.formulario.linkLabel}),e.formulario.espaciosObligatorios&&(0,O.jsx)(`p`,{className:`text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100`,children:(0,O.jsx)(A,{text:e.formulario.espaciosObligatorios})})]})]}),e.comunicacion&&(0,O.jsxs)(`div`,{className:`rounded-2xl border border-slate-200 bg-white p-4`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2`,children:e.comunicacion.titulo}),(0,O.jsx)(`ul`,{className:`space-y-1.5`,children:e.comunicacion.bullets.map((e,t)=>(0,O.jsxs)(`li`,{className:`text-sm text-slate-700 flex gap-2`,children:[(0,O.jsx)(`span`,{className:`text-blue-800`,children:`•`}),(0,O.jsx)(A,{text:e})]},t))})]}),e.reservaDirecta&&(0,O.jsxs)(`div`,{className:`rounded-2xl border border-slate-200 bg-white p-4`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2`,children:`Reserva directa (Zafiro PM)`}),(0,O.jsx)(`p`,{className:`text-sm text-slate-600 mb-2`,children:e.reservaDirecta.nota}),(0,O.jsx)(`a`,{href:e.reservaDirecta.url,target:`_blank`,rel:`noreferrer`,className:`text-blue-900 text-sm font-semibold underline break-all`,children:`Abrir zafiropm.com ↗`})]}),e.mensajesFrecuentes&&e.mensajesFrecuentes.length>0&&(0,O.jsxs)(`div`,{className:`space-y-2`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide px-1`,children:`Mensajes frecuentes · listos para copiar`}),(0,O.jsx)(`div`,{className:`grid gap-3 lg:grid-cols-2 min-w-0`,children:e.mensajesFrecuentes.map(e=>(0,O.jsx)(Fe,{msg:e},e.id))})]}),(0,O.jsxs)(`div`,{className:`space-y-2`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide px-1`,children:`Contactos rápidos`}),(0,O.jsx)(`div`,{className:`grid gap-3 sm:grid-cols-2 lg:grid-cols-3`,children:e.contactos.map(e=>(0,O.jsxs)(`div`,{className:`rounded-2xl border border-slate-200 bg-white p-4 flex items-center justify-between gap-3`,children:[(0,O.jsxs)(`div`,{className:`min-w-0`,children:[(0,O.jsxs)(`p`,{className:`text-sm font-semibold text-slate-800 flex items-center gap-1.5`,children:[(0,O.jsx)(fe,{size:13,className:`text-blue-900 shrink-0`}),` `,(0,O.jsx)(A,{text:e.label})]}),(0,O.jsx)(`p`,{className:`text-sm text-slate-600`,children:(0,O.jsx)(A,{text:e.value})}),e.note&&(0,O.jsx)(`p`,{className:`text-xs text-slate-400 mt-0.5`,children:(0,O.jsx)(A,{text:e.note})})]}),(0,O.jsx)(Oe,{text:e.value,small:!0})]},e.label))})]}),(0,O.jsxs)(`div`,{className:`space-y-2`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide px-1`,children:`Preguntas frecuentes`}),(0,O.jsx)(`div`,{className:`grid gap-3 lg:grid-cols-2 min-w-0`,children:e.faqs.map(e=>(0,O.jsx)(Fe,{msg:{title:e.q,body:e.a}},e.q))})]}),(0,O.jsxs)(`div`,{className:`space-y-3`,children:[(0,O.jsx)(`p`,{className:`text-xs font-semibold text-slate-500 uppercase tracking-wide px-1`,children:`Cuadro de propiedades · toca para ver el detalle`}),[`sanjose`,`jaco`,`guanacaste`].map(e=>{let t=r.filter(t=>Te[t.propertyId]===e);if(t.length===0)return null;let n=we[e];return(0,O.jsxs)(`div`,{className:`space-y-2`,children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-1.5 px-1`,children:[(0,O.jsx)(`span`,{className:`w-2 h-2 rounded-full ${n.dot}`}),(0,O.jsx)(`p`,{className:`text-xs font-bold ${n.badgeText}`,children:n.label})]}),(0,O.jsx)(`div`,{className:`grid gap-3 sm:grid-cols-2 lg:grid-cols-3`,children:t.map((e,t)=>(0,O.jsx)(Ge,{row:e,onOpen:i},t))})]},e)})]})]})}function nt(){let[e,t]=(0,_.useState)(`home`),[n,r]=(0,_.useState)(``),[i,a]=(0,_.useState)(!1),[o,s]=(0,_.useState)(``),c=(0,_.useMemo)(()=>[...j.properties].sort((e,t)=>e.name.localeCompare(t.name,`es`)),[]),l=(0,_.useMemo)(()=>[{id:`home`,name:`Inicio`,icon:!0,group:null},...c.map(e=>({id:e.id,name:e.name,group:e.group}))],[c]),u=(0,_.useMemo)(()=>{let e=[],t=(t,n,r,i)=>{e.push({label:t,sub:n,propertyId:r,text:ve(i)})};return(j.general.mensajesFrecuentes||[]).forEach(e=>{t(e.title,`Inicio · Mensajes frecuentes`,`home`,`${e.title} ${e.body}`)}),(j.general.contactos||[]).forEach(e=>{t(e.label,`Inicio · Contactos rápidos`,`home`,`${e.label} ${e.value} ${e.note||``}`)}),(j.general.faqs||[]).forEach(e=>{t(e.q,`Inicio · Preguntas frecuentes`,`home`,`${e.q} ${e.a}`)}),j.general.comunicacion&&t(j.general.comunicacion.titulo,`Inicio`,`home`,`${j.general.comunicacion.titulo} ${j.general.comunicacion.bullets.join(` `)}`),j.general.formulario&&t(`Formulario diario`,`Inicio`,`home`,`${j.general.formulario.texto} ${j.general.formulario.espaciosObligatorios||``}`),j.properties.forEach(e=>{if(t(e.name,e.zone,e.id,`${e.name} ${e.zone} ${e.owner||``} ${e.note||``}`),(e.quickInfo||[]).forEach(([n,r])=>{t(`${n}: ${r}`,e.name,e.id,`${e.name} ${n} ${r}`)}),(e.rules||[]).forEach(n=>{t(n.length>70?n.slice(0,70)+`…`:n,`${e.name} · Horarios`,e.id,`${e.name} ${n}`)}),e.correoTemplate&&t(e.correoTemplate.title,e.name,e.id,`${e.name} ${e.correoTemplate.title} ${e.correoTemplate.body}`),(e.messages||[]).forEach(n=>{t(n.title,e.name,e.id,`${e.name} ${n.title} ${n.body}`)}),e.publicInfo){let n=e.publicInfo;n.amenities&&n.amenities.length&&t(`Amenidades`,e.name,e.id,`${e.name} amenidades ${n.amenities.join(` `)}`),(n.rules||[]).forEach(n=>{t(n.length>70?n.slice(0,70)+`…`:n,`${e.name} · Reglas de la casa`,e.id,`${e.name} ${n}`)}),(n.nearby||[]).forEach(n=>{let r=n&&typeof n==`object`?n.text:n;t(r,`${e.name} · Cerca de la propiedad`,e.id,`${e.name} ${r}`)}),n.note&&t(n.note.length>70?n.note.slice(0,70)+`…`:n.note,e.name,e.id,`${e.name} ${n.note}`)}e.localExperiences&&t(`Experiencias y actividades cercanas`,e.name,e.id,`${e.name} tours actividades experiencias localbird ${e.localExperiences.resumen} ${(e.localExperiences.categorias||[]).join(` `)} ${(e.localExperiences.destacados||[]).map(e=>e.nombre).join(` `)}`),e.guiaDigital&&t(`Guía digital del huésped`,e.name,e.id,`${e.name} guia digital huesped ${e.guiaDigital.nota||``}`),(e.units||[]).forEach(n=>{let r=[n.name,n.num,n.pax,n.parqueo,n.accessCode,n.forms,n.correo,n.whatsapp,n.app].filter(Boolean).join(` `);t(`${n.name}${n.num?` · ${n.num}`:``}`,e.name,e.id,`${e.name} ${r}`),(n.extra||[]).forEach(([r,i])=>{t(`${r}: ${i}`,`${e.name} · ${n.name}`,e.id,`${e.name} ${n.name} ${r} ${i}`)}),(n.rooms||[]).forEach(r=>{t(r,`${e.name} · ${n.name} · Habitaciones`,e.id,`${e.name} ${n.name} ${r}`)}),n.checkin&&(Array.isArray(n.checkin)?n.checkin:[n.checkin]).forEach(r=>{t(r.title,e.name,e.id,`${e.name} ${n.name} ${r.title} ${r.body}`)}),n.listing&&t(n.listing.title,`${e.name} · ficha pública`,e.id,`${e.name} ${n.name} ${n.listing.title} ${n.listing.description}`),n.guiaDigital&&t(`Guía digital del huésped`,`${e.name} · ${n.name}`,e.id,`${e.name} ${n.name} guia digital huesped ${n.guiaDigital.nota||``}`)})}),e},[]),d=(0,_.useMemo)(()=>{let e=ve(n.trim());if(!e)return[];let t=new Set,r=[];for(let n of u){if(!n.text.includes(e))continue;let i=n.propertyId+`|`+n.label;if(!t.has(i)&&(t.add(i),r.push(n),r.length>=20))break}return r},[n,u]),[f,p]=(0,_.useState)(!1),m=j.properties.find(t=>t.id===e),h=(e,n)=>{t(e),r(``),a(!1),s(n||``),window.scrollTo({top:0,behavior:`smooth`})};return(0,O.jsxs)(`div`,{className:`min-h-screen w-full max-w-full bg-slate-50 pb-10`,children:[(0,O.jsx)(Ee,{}),(0,O.jsx)(`div`,{className:`sticky top-0 z-20 bg-white border-b border-slate-200 shadow-sm`,children:(0,O.jsxs)(`div`,{className:`max-w-6xl mx-auto`,children:[(0,O.jsxs)(`div`,{className:`px-4 sm:px-6 lg:px-8 pt-3 pb-2 flex items-center gap-2`,children:[(0,O.jsxs)(`button`,{onClick:()=>h(`home`),className:`flex items-center gap-2 min-w-0 shrink-0 lg:flex-initial text-left`,children:[(0,O.jsx)(`div`,{className:`w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center shrink-0`,children:(0,O.jsx)(De,{size:17,className:`text-white`})}),(0,O.jsxs)(`div`,{className:`min-w-0`,children:[(0,O.jsx)(`p`,{className:`font-bold text-slate-900 text-sm leading-tight whitespace-nowrap`,children:`Property Management`}),(0,O.jsx)(`p`,{className:`text-[11px] text-slate-400 leading-tight`,children:`Panel interno · Varo & Michi`})]})]}),(0,O.jsxs)(`div`,{className:`hidden lg:block flex-1 max-w-sm relative ml-2`,children:[(0,O.jsx)(`input`,{value:n,onChange:e=>r(e.target.value),onFocus:()=>p(!0),onBlur:()=>setTimeout(()=>p(!1),150),placeholder:`Buscar en el contenido... (ej. 42, S2P34, wifi)`,className:`w-full rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-800`}),f&&n.trim()&&(0,O.jsx)(`div`,{className:`absolute left-0 right-0 top-full mt-1 bg-white rounded-2xl border border-slate-200 shadow-lg max-h-80 overflow-y-auto z-30`,children:d.length===0?(0,O.jsxs)(`p`,{className:`text-sm text-slate-400 px-4 py-3`,children:[`Sin resultados para "`,n,`"`]}):d.map((e,t)=>(0,O.jsxs)(`button`,{onMouseDown:()=>h(e.propertyId,n),className:`w-full text-left px-4 py-2.5 border-b border-slate-100 last:border-0 hover:bg-slate-50`,children:[(0,O.jsx)(`p`,{className:`text-sm font-medium text-slate-800 truncate`,children:e.label}),(0,O.jsx)(`p`,{className:`text-xs text-slate-400 truncate`,children:e.sub})]},t))})]}),(0,O.jsx)(`div`,{className:`flex-1 lg:hidden`}),(0,O.jsx)(`button`,{onClick:()=>a(e=>!e),className:`shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-slate-600 bg-slate-100 active:bg-slate-200`,"aria-label":`Abrir menú`,children:i?(0,O.jsx)(me,{size:18}):(0,O.jsx)(E,{size:18})})]}),(0,O.jsxs)(`div`,{className:`lg:hidden px-4 sm:px-6 pb-2 relative`,children:[(0,O.jsx)(`input`,{value:n,onChange:e=>r(e.target.value),onFocus:()=>p(!0),onBlur:()=>setTimeout(()=>p(!1),150),placeholder:`Buscar en el contenido... (ej. 42, S2P34, wifi)`,className:`w-full rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-blue-800`}),f&&n.trim()&&(0,O.jsx)(`div`,{className:`absolute left-4 right-4 sm:left-6 top-full mt-1 bg-white rounded-2xl border border-slate-200 shadow-lg max-h-80 overflow-y-auto z-30`,children:d.length===0?(0,O.jsxs)(`p`,{className:`text-sm text-slate-400 px-4 py-3`,children:[`Sin resultados para "`,n,`"`]}):d.map((e,t)=>(0,O.jsxs)(`button`,{onMouseDown:()=>h(e.propertyId,n),className:`w-full text-left px-4 py-2.5 border-b border-slate-100 last:border-0 hover:bg-slate-50`,children:[(0,O.jsx)(`p`,{className:`text-sm font-medium text-slate-800 truncate`,children:e.label}),(0,O.jsx)(`p`,{className:`text-xs text-slate-400 truncate`,children:e.sub})]},t))})]}),i&&(0,O.jsx)(`div`,{className:`px-4 sm:px-6 lg:px-8 pb-3 max-h-[60vh] overflow-y-auto`,children:(0,O.jsxs)(`div`,{className:`flex flex-col gap-1 border-t border-slate-100 pt-2`,children:[(0,O.jsxs)(`button`,{onClick:()=>h(`home`),className:`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${e===`home`?`bg-blue-900 text-white`:`text-slate-600 active:bg-slate-100`}`,children:[(0,O.jsx)(T,{size:14}),`Inicio`]}),(0,O.jsxs)(`button`,{onClick:()=>h(`calendario`),className:`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${e===`calendario`?`bg-blue-900 text-white`:`text-slate-600 active:bg-slate-100`}`,children:[(0,O.jsx)(ie,{size:14}),`Calendario`]}),[`sanjose`,`jaco`,`guanacaste`].map(t=>{let n=l.filter(e=>e.group===t);if(n.length===0)return null;let r=we[t];return(0,O.jsxs)(`div`,{className:`mt-2`,children:[(0,O.jsxs)(`p`,{className:`flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide px-3 mb-1 ${r.badgeText}`,children:[(0,O.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full ${r.dot}`}),r.label]}),(0,O.jsx)(`div`,{className:`lg:grid lg:grid-cols-3 lg:gap-1`,children:n.map(t=>(0,O.jsx)(`button`,{onClick:()=>h(t.id),className:`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${e===t.id?`${r.pillActive} text-white`:`text-slate-600 active:bg-slate-100`}`,children:t.name},t.id))})]},t)})]})})]})}),(0,O.jsx)(`div`,{className:`px-4 sm:px-6 lg:px-8 pt-4 max-w-6xl mx-auto`,children:(0,O.jsx)(ye.Provider,{value:o,children:e===`home`?(0,O.jsx)(tt,{general:j.general,checkInGeneral:j.checkInGeneral,checkOutGeneral:j.checkOutGeneral,masterTable:j.masterTable,onOpenProperty:h}):e===`calendario`?(0,O.jsx)(et,{}):m?(0,O.jsx)(Ve,{property:m}):(0,O.jsx)(`p`,{className:`text-sm text-slate-400 text-center pt-10`,children:`Selecciona una propiedad arriba.`})})}),(0,O.jsx)(`style`,{children:`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        html, body { max-width: 100%; overflow-x: hidden; }
        img { max-width: 100%; }
      `})]})}(0,v.createRoot)(document.getElementById(`root`)).render((0,O.jsx)(_.StrictMode,{children:(0,O.jsx)(nt,{})}));