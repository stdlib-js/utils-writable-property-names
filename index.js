// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).writablePropertyNames=r()}(this,(function(){"use strict";var t=void 0!==Object.getOwnPropertyNames,r=Object.getOwnPropertyNames;function e(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function u(){return o&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var c=Object.prototype.hasOwnProperty;function f(t,r){return null!=t&&c.call(t,r)}var l="function"==typeof Symbol?Symbol.toStringTag:"";var a,p=u()?function(t){var r,e,n;if(null==t)return i.call(t);e=t[l],r=f(t,l);try{t[l]=void 0}catch(r){return i.call(t)}return n=i.call(t),r?t[l]=e:delete t[l],n}:function(t){return i.call(t)};function s(t){return"[object Arguments]"===p(t)}a=function(){return s(arguments)}();var y=a,b="function"==typeof Object.defineProperty?Object.defineProperty:null;var v,g=Object.defineProperty,d=Object.prototype,m=d.toString,h=d.__defineGetter__,j=d.__defineSetter__,w=d.__lookupGetter__,O=d.__lookupSetter__;v=function(){try{return b({},"x",{}),!0}catch(t){return!1}}()?g:function(t,r,e){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===m.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===m.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(w.call(t,r)||O.call(t,r)?(n=t.__proto__,t.__proto__=d,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,i="set"in e,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&h&&h.call(t,r,e.get),i&&j&&j.call(t,r,e.set),t};var _=v;function S(t,r,e){_(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function P(t){return"string"==typeof t}var E=String.prototype.valueOf;var I=u();function T(t){return"object"==typeof t&&(t instanceof String||(I?function(t){try{return E.call(t),!0}catch(t){return!1}}(t):"[object String]"===p(t)))}function A(t){return P(t)||T(t)}function N(t){return"number"==typeof t}S(A,"isPrimitive",P),S(A,"isObject",T);var k=Number,x=k.prototype.toString;var B=u();function V(t){return"object"==typeof t&&(t instanceof k||(B?function(t){try{return x.call(t),!0}catch(t){return!1}}(t):"[object Number]"===p(t)))}function F(t){return N(t)||V(t)}function L(t){return t!=t}function G(t){return N(t)&&L(t)}function Y(t){return V(t)&&L(t.valueOf())}function C(t){return G(t)||Y(t)}S(F,"isPrimitive",N),S(F,"isObject",V),S(C,"isPrimitive",G),S(C,"isObject",Y);var D=Number.POSITIVE_INFINITY,M=k.NEGATIVE_INFINITY,X=Math.floor;function H(t){return X(t)===t}function W(t){return t<D&&t>M&&H(t)}function R(t){return N(t)&&W(t)}function U(t){return V(t)&&W(t.valueOf())}function q(t){return R(t)||U(t)}S(q,"isPrimitive",R),S(q,"isObject",U);var z=Object.prototype.propertyIsEnumerable;var J=!z.call("beep","0");function K(t,r){var e;return null!=t&&(!(e=z.call(t,r))&&J&&A(t)?!G(r=+r)&&R(r)&&r>=0&&r<t.length:e)}var Q=Array.isArray?Array.isArray:function(t){return"[object Array]"===p(t)};var Z=y?s:function(t){return null!==t&&"object"==typeof t&&!Q(t)&&"number"==typeof t.length&&H(t.length)&&t.length>=0&&t.length<=4294967295&&f(t,"callee")&&!K(t,"callee")},$=Array.prototype.slice;function tt(t){return null!==t&&"object"==typeof t}S(tt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!Q(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(tt));var rt=K((function(){}),"prototype"),et=!K({toString:null},"toString");function nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&H(t.length)&&t.length>=0&&t.length<=9007199254740991}function ot(t,r,e){var n,o;if(!nt(t)&&!P(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!R(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(C(r)){for(;o<n;o++)if(C(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}var ut=/./;function it(t){return"boolean"==typeof t}var ct=Boolean.prototype.toString;var ft=u();function lt(t){return"object"==typeof t&&(t instanceof Boolean||(ft?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===p(t)))}function at(t){return it(t)||lt(t)}function pt(){return new Function("return this;")()}S(at,"isPrimitive",it),S(at,"isObject",lt);var st="object"==typeof self?self:null,yt="object"==typeof window?window:null,bt="object"==typeof global?global:null;var vt=function(t){if(arguments.length){if(!it(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return pt()}if(st)return st;if(yt)return yt;if(bt)return bt;throw new Error("unexpected error. Unable to resolve global object.")}(),gt=vt.document&&vt.document.childNodes,dt=Int8Array;function mt(){return/^\s*function\s*([^(]*)/i}var ht=/^\s*function\s*([^(]*)/i;function jt(t){var r,e,n,o;if(("Object"===(e=p(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=ht.exec(n.toString()))return r[1]}return tt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}S(mt,"REGEXP",ht);var wt="function"==typeof ut||"object"==typeof dt||"function"==typeof gt?function(t){return jt(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?jt(t).toLowerCase():r};function Ot(t){return t.constructor&&t.constructor.prototype===t}var _t=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],St="undefined"==typeof window?void 0:window;var Pt=function(){var t;if("undefined"===wt(St))return!1;for(t in St)try{-1===ot(_t,t)&&f(St,t)&&null!==St[t]&&"object"===wt(St[t])&&Ot(St[t])}catch(t){return!0}return!1}(),Et="undefined"!=typeof window;var It,Tt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];It=n?function(){return 2!==(e(arguments)||"").length}(1,2)?function(t){return Z(t)?e($.call(t)):e(t)}:e:function(t){var r,e,n,o,u,i,c;if(o=[],Z(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!f(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof t)&&!tt(t))return o;e=rt&&n}for(u in t)e&&"prototype"===u||!f(t,u)||o.push(String(u));if(et)for(r=function(t){if(!1===Et&&!Pt)return Ot(t);try{return Ot(t)}catch(t){return!1}}(t),c=0;c<Tt.length;c++)i=Tt[c],r&&"constructor"===i||!f(t,i)||o.push(String(i));return o};var At=It;var Nt=t?function(t){return r(Object(t))}:function(t){return At(Object(t))},kt=void 0!==Object.getOwnPropertyDescriptor,xt=Object.getOwnPropertyDescriptor;var Bt=kt?function(t,r){var e;return null==t||void 0===(e=xt(t,r))?null:e}:function(t,r){return f(t,r)?{configurable:!0,enumerable:!0,writable:!0,value:t[r]}:null};function Vt(t,r){var e=Bt(t,r);return null!==e&&(!0===e.writable||"function"==typeof e.set)}var Ft=Object;return function(t){var r,e,n;if(null==t)return[];for(r=Nt(Ft(t)),n=0,e=0;e<r.length;e++)Vt(t,r[e])&&(r[n]=r[e],n+=1);return r.length=n,r}}));
//# sourceMappingURL=index.js.map
