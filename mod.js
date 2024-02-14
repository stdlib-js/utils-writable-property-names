// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=void 0!==Object.getOwnPropertyNames,e=Object,t=e.getOwnPropertyNames;function n(r){return Object.keys(Object(r))}var i=void 0!==Object.keys;var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function a(){return o&&"symbol"==typeof Symbol.toStringTag}var u=Object.prototype.toString;var c=Object.prototype.hasOwnProperty;function l(r,e){return null!=r&&c.call(r,e)}var f="function"==typeof Symbol?Symbol:void 0,s="function"==typeof f?f.toStringTag:"";var p=a()?function(r){var e,t,n;if(null==r)return u.call(r);t=r[s],e=l(r,s);try{r[s]=void 0}catch(e){return u.call(r)}return n=u.call(r),e?r[s]=t:delete r[s],n}:function(r){return u.call(r)};function g(r){return"[object Arguments]"===p(r)}var d=function(){return g(arguments)}(),y="function"==typeof Object.defineProperty?Object.defineProperty:null;var b=Object.defineProperty;function h(r){return"number"==typeof r}function v(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function w(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+v(i):v(i)+r,n&&(r="-"+r)),r}var m=String.prototype.toLowerCase,j=String.prototype.toUpperCase;function O(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!h(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=w(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=w(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===j.call(r.specifier)?j.call(t):m.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function S(r){return"string"==typeof r}var E=Math.abs,_=String.prototype.toLowerCase,k=String.prototype.toUpperCase,x=String.prototype.replace,I=/e\+(\d)$/,T=/e-(\d)$/,P=/^(\d+)$/,A=/^(\d+)e/,V=/\.0$/,F=/\.0*e/,N=/(\..*[^0])0*e/;function $(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!h(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":E(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=x.call(t,N,"$1e"),t=x.call(t,F,"e"),t=x.call(t,V,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=x.call(t,I,"e+0$1"),t=x.call(t,T,"e-0$1"),r.alternate&&(t=x.call(t,P,"$1."),t=x.call(t,A,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===k.call(r.specifier)?k.call(t):_.call(t)}function C(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function B(r,e,t){var n=e-r.length;return n<0?r:r=t?r+C(n):C(n)+r}var L=String.fromCharCode,R=isNaN,G=Array.isArray;function W(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function X(r){var e,t,n,i,o,a,u,c,l;if(!G(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(S(n=r[c]))a+=n;else{if(e=void 0!==n.precision,!(n=W(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,R(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,R(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=O(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!R(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=R(o)?String(n.arg):L(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=$(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=w(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=B(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var Z=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function M(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Y(r){var e,t,n,i;for(t=[],i=0,n=Z.exec(r);n;)(e=r.slice(i,Z.lastIndex-n[0].length)).length&&t.push(e),t.push(M(n)),i=Z.lastIndex,n=Z.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function D(r){return"string"==typeof r}function U(r){var e,t;if(!D(r))throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Y(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return X.apply(null,e)}var H,z=Object.prototype,q=z.toString,J=z.__defineGetter__,K=z.__defineSetter__,Q=z.__lookupGetter__,rr=z.__lookupSetter__;H=function(){try{return y({},"x",{}),!0}catch(r){return!1}}()?b:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===q.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===q.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Q.call(r,e)||rr.call(r,e)?(n=r.__proto__,r.__proto__=z,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&J&&J.call(r,e,t.get),a&&K&&K.call(r,e,t.set),r};var er=H;function tr(r,e,t){er(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function nr(r){return"string"==typeof r}var ir=String.prototype.valueOf;var or=a();function ar(r){return"object"==typeof r&&(r instanceof String||(or?function(r){try{return ir.call(r),!0}catch(r){return!1}}(r):"[object String]"===p(r)))}function ur(r){return nr(r)||ar(r)}function cr(r){return"number"==typeof r}tr(ur,"isPrimitive",nr),tr(ur,"isObject",ar);var lr=Number,fr=lr.prototype.toString;var sr=a();function pr(r){return"object"==typeof r&&(r instanceof lr||(sr?function(r){try{return fr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===p(r)))}function gr(r){return cr(r)||pr(r)}function dr(r){return r!=r}function yr(r){return cr(r)&&dr(r)}function br(r){return pr(r)&&dr(r.valueOf())}function hr(r){return yr(r)||br(r)}tr(gr,"isPrimitive",cr),tr(gr,"isObject",pr),tr(hr,"isPrimitive",yr),tr(hr,"isObject",br);var vr=Number.POSITIVE_INFINITY,wr=lr.NEGATIVE_INFINITY,mr=Math.floor;function jr(r){return mr(r)===r}function Or(r){return r<vr&&r>wr&&jr(r)}function Sr(r){return cr(r)&&Or(r)}function Er(r){return pr(r)&&Or(r.valueOf())}function _r(r){return Sr(r)||Er(r)}tr(_r,"isPrimitive",Sr),tr(_r,"isObject",Er);var kr=Object.prototype.propertyIsEnumerable;var xr=!kr.call("beep","0");function Ir(r,e){var t;return null!=r&&(!(t=kr.call(r,e))&&xr&&ur(r)?!yr(e=+e)&&Sr(e)&&e>=0&&e<r.length:t)}var Tr=Array.isArray?Array.isArray:function(r){return"[object Array]"===p(r)};var Pr=d?g:function(r){return null!==r&&"object"==typeof r&&!Tr(r)&&"number"==typeof r.length&&jr(r.length)&&r.length>=0&&r.length<=4294967295&&l(r,"callee")&&!Ir(r,"callee")},Ar=Array.prototype.slice;function Vr(r){return null!==r&&"object"==typeof r}tr(Vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!Tr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Vr));var Fr=Ir((function(){}),"prototype"),Nr=!Ir({toString:null},"toString");function $r(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&jr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Cr(r,e,t){var n,i;if(!$r(r)&&!nr(r))throw new TypeError(U("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Sr(t))throw new TypeError(U("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(hr(e)){for(;i<n;i++)if(hr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}var Br=/./;function Lr(r){return"boolean"==typeof r}var Rr=Boolean,Gr=Boolean.prototype.toString;var Wr=a();function Xr(r){return"object"==typeof r&&(r instanceof Rr||(Wr?function(r){try{return Gr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===p(r)))}function Zr(r){return Lr(r)||Xr(r)}function Mr(){return new Function("return this;")()}tr(Zr,"isPrimitive",Lr),tr(Zr,"isObject",Xr);var Yr="object"==typeof self?self:null,Dr="object"==typeof window?window:null,Ur="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Hr="object"==typeof Ur?Ur:null,zr="object"==typeof globalThis?globalThis:null;var qr=function(r){if(arguments.length){if(!Lr(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Mr()}if(zr)return zr;if(Yr)return Yr;if(Dr)return Dr;if(Hr)return Hr;throw new Error("unexpected error. Unable to resolve global object.")}(),Jr=qr.document&&qr.document.childNodes,Kr=Int8Array;function Qr(){return/^\s*function\s*([^(]*)/i}var re=/^\s*function\s*([^(]*)/i;function ee(r){var e,t,n,i;if(("Object"===(t=p(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=re.exec(n.toString()))return e[1]}return Vr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}tr(Qr,"REGEXP",re);var te="function"==typeof Br||"object"==typeof Kr||"function"==typeof Jr?function(r){return ee(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ee(r).toLowerCase():e};function ne(r){return r.constructor&&r.constructor.prototype===r}var ie=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],oe="undefined"==typeof window?void 0:window;var ae=function(){var r;if("undefined"===te(oe))return!1;for(r in oe)try{-1===Cr(ie,r)&&l(oe,r)&&null!==oe[r]&&"object"===te(oe[r])&&ne(oe[r])}catch(r){return!0}return!1}(),ue="undefined"!=typeof window;var ce=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var le=i?function(){return 2!==(n(arguments)||"").length}(1,2)?function(r){return Pr(r)?n(Ar.call(r)):n(r)}:n:function(r){var e,t,n,i,o,a,u;if(i=[],Pr(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!l(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!Vr(r))return i;t=Fr&&n}for(o in r)t&&"prototype"===o||!l(r,o)||i.push(String(o));if(Nr)for(e=function(r){if(!1===ue&&!ae)return ne(r);try{return ne(r)}catch(r){return!1}}(r),u=0;u<ce.length;u++)a=ce[u],e&&"constructor"===a||!l(r,a)||i.push(String(a));return i};var fe=r?function(r){return t(e(r))}:function(r){return le(e(r))},se=void 0!==Object.getOwnPropertyDescriptor,pe=Object.getOwnPropertyDescriptor;var ge=se?function(r,e){var t;return null==r||void 0===(t=pe(r,e))?null:t}:function(r,e){return l(r,e)?{configurable:!0,enumerable:!0,writable:!0,value:r[e]}:null};function de(r,e){var t=ge(r,e);return null!==t&&(!0===t.writable||"function"==typeof t.set)}function ye(r){var t,n,i;if(null==r)return[];for(t=fe(e(r)),i=0,n=0;n<t.length;n++)de(r,t[n])&&(t[i]=t[n],i+=1);return t.length=i,t}export{ye as default};
//# sourceMappingURL=mod.js.map
