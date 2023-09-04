(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,'body {\n  font-family: Arial, sans-serif;\n  background-color: #f0f0f0;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n#darkOverlay {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1;\n}\n\np {\n  padding: 10px;\n}\n\nheader,\nfooter {\n  flex-shrink: 0;\n  background-color: #e2d7d7;\n  padding: 20px;\n  display: flex;\n  align-items: center;\n}\n\nmain {\n  display: flex;\n  flex-grow: 1;\n  padding: 20px;\n  padding-top: 10px;\n  background-color: rgb(254, 254, 254);\n}\n\n.projects-tab {\n  flex: 0.5;\n  padding: 20px;\n  padding-top: 10px;\n  border-right: solid 1px #e2d7d7;\n  cursor: pointer;\n}\n\n.projects-tab-header:hover,\n.tasks-tab-header:hover,\n.projects-tab-header-delete:hover {\n  background-color: #e7d2d2;\n}\n\n.tasks-tab {\n  flex: 1;\n  padding: 20px;\n  padding-top: 10px;\n}\n\n/* Projects Input form , ommited by default */\n\n.projects-form-popup,\n.task-form-popup {\n  display: none;\n  text-align: center;\n  flex-direction: column;\n  align-items: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #fff;\n  padding: 20px;\n  z-index: 2;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  border-radius: 20px;\n  width: 300px;\n}\n\n.form-container {\n  flex-direction: column;\n  align-items: center;\n  gap: 3px;\n  border: 3px solid #f1f1f1;\n  width: fit-content;\n  padding: 10px 20px;\n  margin-top: 10px;\n  border-radius: 20px;\n}\n\n.form-container input[type="text"],\n.form-container input[type="number"] {\n  width: 90%;\n  padding: 15px;\n  margin: 5px 0 22px 0;\n  border: none;\n  background: #f1f1f1;\n  border-radius: 5px;\n}\n\n/* When the inputs get focus, do something */\n.form-container input[type="text"]:focus,\n.form-container input[type="number"]:focus {\n  background-color: #ddd;\n  outline: none;\n}\n\n/* Set a style for the submit/login button */\n.form-container .btn {\n  background-color: #04aa6d;\n  color: white;\n  padding: 16px 20px;\n  border: none;\n  cursor: pointer;\n  width: 100%;\n  margin-bottom: 10px;\n  margin-top: 10px;\n  opacity: 0.8;\n  border-radius: 10px;\n}\n\n.form-container .close-button {\n  background-color: red;\n}\n\n.form-container .btn:hover,\n.open-button:hover {\n  opacity: 1;\n}\n\n.project-card {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 10px;\n  align-items: center;\n  height: 25px;\n  border-radius: 30px;\n  margin-top: 30px;\n}\n\n.project-delete-btn {\n  border: none;\n  cursor: pointer;\n  background-color: rgb(219, 83, 83);\n  border-radius: 30px;\n  height: 25px;\n}\n\n.project-selected {\n  background-color: #04aa6d;\n  opacity: 0.8;\n}\n\n.project-selected:hover {\n  opacity: 1;\n}\n\n.project-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.task-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n\n.task-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  border: 0.5px solid #04aa6d;\n  border-radius: 10px;\n  background: #ffffff;\n  padding: 20px;\n  width: 150px;\n  height: 150px;\n}\n\n.tasks-tab-header {\n  margin-bottom: 30px;\n}\n',""]);const u=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var u=0;u<this.length;u++){var d=this[u][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),a&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=a):s[4]="".concat(a)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],u=0;u<e.length;u++){var d=e[u],c=r.base?d[0]+r.base:d[0],s=o[c]||0,l="".concat(c," ").concat(s);o[c]=s+1;var f=n(l),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==f)t[f].references++,t[f].updater(m);else{var h=a(m,r);r.byIndex=u,t.splice(u,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var u=n(o[i]);t[u].references--}for(var d=r(e,a),c=0;c<o.length;c++){var s=n(o[c]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}o=d}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),u=n(565),d=n.n(u),c=n(216),s=n.n(c),l=n(589),f=n.n(l),m=n(28),h={};function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function p(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function v(e){p(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===g(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function b(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function y(e){p(1,arguments);var t=v(e),n=t.getUTCDay(),r=(n<1?7:0)+n-1;return t.setUTCDate(t.getUTCDate()-r),t.setUTCHours(0,0,0,0),t}function w(e){p(1,arguments);var t=v(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=y(r),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=y(o);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}h.styleTagTransform=f(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=s(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var x={};function k(){return x}function T(e,t){var n,r,a,o,i,u,d,c;p(1,arguments);var s=k(),l=b(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.weekStartsOn)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==a?a:s.weekStartsOn)&&void 0!==r?r:null===(d=s.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var f=v(e),m=f.getUTCDay(),h=(m<l?7:0)+m-l;return f.setUTCDate(f.getUTCDate()-h),f.setUTCHours(0,0,0,0),f}function C(e,t){var n,r,a,o,i,u,d,c;p(1,arguments);var s=v(e),l=s.getUTCFullYear(),f=k(),m=b(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:f.firstWeekContainsDate)&&void 0!==r?r:null===(d=f.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1);if(!(m>=1&&m<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(l+1,0,m),h.setUTCHours(0,0,0,0);var g=T(h,t),y=new Date(0);y.setUTCFullYear(l,0,m),y.setUTCHours(0,0,0,0);var w=T(y,t);return s.getTime()>=g.getTime()?l+1:s.getTime()>=w.getTime()?l:l-1}function M(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const S=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return M("yy"===t?r%100:r,t.length)},D=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):M(n+1,2)},E=function(e,t){return M(e.getUTCDate(),t.length)},P=function(e,t){return M(e.getUTCHours()%12||12,t.length)},U=function(e,t){return M(e.getUTCHours(),t.length)},j=function(e,t){return M(e.getUTCMinutes(),t.length)},W=function(e,t){return M(e.getUTCSeconds(),t.length)},O=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return M(Math.floor(r*Math.pow(10,n-3)),t.length)};var Y={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return S(e,t)},Y:function(e,t,n,r){var a=C(e,r),o=a>0?a:1-a;return"YY"===t?M(o%100,2):"Yo"===t?n.ordinalNumber(o,{unit:"year"}):M(o,t.length)},R:function(e,t){return M(w(e),t.length)},u:function(e,t){return M(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return M(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return M(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return D(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return M(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){p(1,arguments);var n=v(e),r=T(n,t).getTime()-function(e,t){var n,r,a,o,i,u,d,c;p(1,arguments);var s=k(),l=b(null!==(n=null!==(r=null!==(a=null!==(o=null==t?void 0:t.firstWeekContainsDate)&&void 0!==o?o:null==t||null===(i=t.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==a?a:s.firstWeekContainsDate)&&void 0!==r?r:null===(d=s.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==n?n:1),f=C(e,t),m=new Date(0);return m.setUTCFullYear(f,0,l),m.setUTCHours(0,0,0,0),T(m,t)}(n,t).getTime();return Math.round(r/6048e5)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):M(a,t.length)},I:function(e,t,n){var r=function(e){p(1,arguments);var t=v(e),n=y(t).getTime()-function(e){p(1,arguments);var t=w(e),n=new Date(0);return n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0),y(n)}(t).getTime();return Math.round(n/6048e5)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):M(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):E(e,t)},D:function(e,t,n){var r=function(e){p(1,arguments);var t=v(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=n-t.getTime();return Math.floor(r/864e5)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):M(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(o);case"ee":return M(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),o=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(o);case"cc":return M(o,t.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return M(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return P(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):U(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):M(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):M(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):j(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):W(e,t)},S:function(e,t){return O(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return N(a);case"XXXX":case"XX":return L(a);default:return L(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return N(a);case"xxxx":case"xx":return L(a);default:return L(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+q(a,":");default:return"GMT"+L(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+q(a,":");default:return"GMT"+L(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return M(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return M((r._originalDate||e).getTime(),t.length)}};function q(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),o=r%60;if(0===o)return n+String(a);var i=t||"";return n+String(a)+i+M(o,2)}function N(e,t){return e%60==0?(e>0?"-":"+")+M(Math.abs(e)/60,2):L(e,t)}function L(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+M(Math.floor(a/60),2)+n+M(a%60,2)}const B=Y;var H=function(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},I=function(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}};const F={p:I,P:function(e,t){var n,r=e.match(/(P+)(p+)?/)||[],a=r[1],o=r[2];if(!o)return H(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",H(a,t)).replace("{{time}}",I(o,t))}};var A=["D","DD"],z=["YY","YYYY"];function G(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var Q={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function R(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const X={date:R({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:R({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:R({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var J={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function _(e){return function(t,n){var r;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&e.formattingValues){var a=e.defaultFormattingWidth||e.defaultWidth,o=null!=n&&n.width?String(n.width):a;r=e.formattingValues[o]||e.formattingValues[a]}else{var i=e.defaultWidth,u=null!=n&&n.width?String(n.width):e.defaultWidth;r=e.values[u]||e.values[i]}return r[e.argumentCallback?e.argumentCallback(t):t]}}const Z={ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:_({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:_({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:_({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:_({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:_({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function V(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],o=t.match(a);if(!o)return null;var i,u=o[0],d=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(d)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(u))return n}(d):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(u))return n}(d);return i=e.valueCallback?e.valueCallback(c):c,{value:i=n.valueCallback?n.valueCallback(i):i,rest:t.slice(u.length)}}}var K,$={ordinalNumber:(K={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(K.matchPattern);if(!n)return null;var r=n[0],a=e.match(K.parsePattern);if(!a)return null;var o=K.valueCallback?K.valueCallback(a[0]):a[0];return{value:o=t.valueCallback?t.valueCallback(o):o,rest:e.slice(r.length)}}),era:V({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:V({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:V({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:V({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:V({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const ee={code:"en-US",formatDistance:function(e,t,n){var r,a=Q[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:X,formatRelative:function(e,t,n,r){return J[e]},localize:Z,match:$,options:{weekStartsOn:0,firstWeekContainsDate:1}};var te=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ne=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,re=/^'([^]*?)'?$/,ae=/''/g,oe=/[a-zA-Z]/;function ie(e,t,n){var r,a,o,i,u,d,c,s,l,f,m,h,y,w,x,T,C,M;p(2,arguments);var S=String(t),D=k(),E=null!==(r=null!==(a=null==n?void 0:n.locale)&&void 0!==a?a:D.locale)&&void 0!==r?r:ee,P=b(null!==(o=null!==(i=null!==(u=null!==(d=null==n?void 0:n.firstWeekContainsDate)&&void 0!==d?d:null==n||null===(c=n.locale)||void 0===c||null===(s=c.options)||void 0===s?void 0:s.firstWeekContainsDate)&&void 0!==u?u:D.firstWeekContainsDate)&&void 0!==i?i:null===(l=D.locale)||void 0===l||null===(f=l.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==o?o:1);if(!(P>=1&&P<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var U=b(null!==(m=null!==(h=null!==(y=null!==(w=null==n?void 0:n.weekStartsOn)&&void 0!==w?w:null==n||null===(x=n.locale)||void 0===x||null===(T=x.options)||void 0===T?void 0:T.weekStartsOn)&&void 0!==y?y:D.weekStartsOn)&&void 0!==h?h:null===(C=D.locale)||void 0===C||null===(M=C.options)||void 0===M?void 0:M.weekStartsOn)&&void 0!==m?m:0);if(!(U>=0&&U<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!E.localize)throw new RangeError("locale must contain localize property");if(!E.formatLong)throw new RangeError("locale must contain formatLong property");var j=v(e);if(!function(e){if(p(1,arguments),!function(e){return p(1,arguments),e instanceof Date||"object"===g(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var t=v(e);return!isNaN(Number(t))}(j))throw new RangeError("Invalid time value");var W=function(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}(j),O=function(e,t){return p(2,arguments),function(e,t){p(2,arguments);var n=v(e).getTime(),r=b(t);return new Date(n+r)}(e,-b(t))}(j,W),Y={firstWeekContainsDate:P,weekStartsOn:U,locale:E,_originalDate:j};return S.match(ne).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,F[t])(e,E.formatLong):e})).join("").match(te).map((function(r){if("''"===r)return"'";var a,o,i=r[0];if("'"===i)return(o=(a=r).match(re))?o[1].replace(ae,"'"):a;var u,d=B[i];if(d)return null!=n&&n.useAdditionalWeekYearTokens||(u=r,-1===z.indexOf(u))||G(r,t,String(e)),null!=n&&n.useAdditionalDayOfYearTokens||!function(e){return-1!==A.indexOf(e)}(r)||G(r,t,String(e)),d(O,r,E.localize,Y);if(i.match(oe))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return r})).join("")}const ue=[{project:"General",tasks:[],selected:!0}];function de(){return ue}function ce(e,t){ue[e].tasks.push(t)}function se(e){e.preventDefault();const t=document.getElementById("proj-name"),n=t.value.trim();de().length<5&&""!==n?(function(e){const t=function(e){return{project:e,tasks:[],selected:!1}}(e);ue.push(t)}(n),t.value="",fe()):alert("Maximum of 5 projects achieved. Upgrade to premium to get full access."),le()}function le(){document.getElementById("proj-name").value="";const e=document.querySelector(".projects-form-popup"),t=document.getElementById("darkOverlay");e.style.display="none",t.style.display="none"}function fe(){let e=de();const t=document.querySelector(".project-container");t.innerHTML="",e.forEach(((n,r)=>{const a=document.createElement("div");a.classList.add("project-card"),e[r].selected&&a.classList.add("project-selected"),t.appendChild(a);const o=document.createElement("h2");if(o.classList.add("project-created"),o.textContent=n.project,a.appendChild(o),e.length>1){const e=document.createElement("button");e.classList.add("project-delete-btn"),e.textContent="Remove",a.appendChild(e),e.addEventListener("click",(()=>{!function(e){(function(e){ue.splice(e,1)})(e),fe()}(r)}))}})),function(){const e=document.querySelectorAll(".project-card"),t=de();e.forEach(((e,n)=>{e.addEventListener("click",(()=>{t.forEach((e=>e.selected=!1)),t[n].selected=!0,fe(),he()}))}))}(),console.log(e)}function me(e){const t=de();e.preventDefault();const n=document.getElementById("task-name").value,r=document.getElementById("description-task").value,a=document.getElementById("due-date-task").value,o=document.getElementById("projects-switch");ce(parseInt(o.value),{task:n,description:r,duedate:a,creation:ie(new Date,"yyyy-MM-dd")}),function(){const e=document.querySelector(".task-form-popup"),t=document.getElementById("darkOverlay");e.style.display="none",t.style.display="none"}(),he(),console.log(t)}function he(){let e=0;const t=de(),n=document.querySelector(".task-container");n.innerHTML="";for(let n=0;n<t.length;n++)!0===t[n].selected&&(e=n);for(let r=0;r<t[e].tasks.length;r++){const a=document.createElement("div");a.classList.add("task-card"),n.appendChild(a);const o=document.createElement("h2");o.textContent=t[e].tasks[r].task,a.appendChild(o);const i=document.createElement("p");i.textContent=t[e].tasks[r].description,a.appendChild(i);const u=document.createElement("p");u.textContent=t[e].tasks[r].duedate,a.appendChild(u)}}(function(){const e=document.querySelector(".projects-tab-header"),t=document.querySelector(".projects-form-popup"),n=document.getElementById("darkOverlay");e.addEventListener("click",(()=>{t.style.display="flex",n.style.display="block"}));const r=document.querySelector(".submit-button"),a=document.querySelector(".close-button");r.addEventListener("click",se),a.addEventListener("click",le)})(),function(){const e=document.querySelector(".tasks-tab-header"),t=document.querySelector(".task-form-popup"),n=document.getElementById("darkOverlay");e.addEventListener("click",(()=>{t.style.display="flex",n.style.display="block",function(){const e=document.getElementById("task-name"),t=document.getElementById("description-task"),n=document.getElementById("due-date-task");e.value="",t.value="",n.value="";const r=document.getElementById("projects-switch");r.innerHTML="";de().forEach(((e,t)=>{const n=document.createElement("option");n.value=t,n.textContent=e.project,r.appendChild(n)}))}()})),document.querySelector(".submit-task-btn").addEventListener("click",me)}(),fe(),console.log("hello")})()})();