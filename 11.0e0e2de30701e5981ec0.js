(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1124:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"j",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return y})),n.d(t,"h",(function(){return m})),n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"c",(function(){return v})),n.d(t,"f",(function(){return g}));n(1140);var r=n(3),a=n.n(r),o=n(60),i=n.n(o),c=n(284);window.location;function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),a()(e).format(t)):e}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";if(!e)return"";var n=e;"number"==typeof e?n=new Date(e):"string"==typeof e&&(n=new Date(+e));var r={"y+":n.getFullYear(),"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),"S+":n.getMilliseconds()};for(var a in r)if(new RegExp("("+a+")").test(t))if("y+"===a)t=t.replace(RegExp.$1,(""+r[a]).substr(4-RegExp.$1.length));else if("S+"===a){var o=RegExp.$1.length;o=1===o?3:o,t=t.replace(RegExp.$1,("00"+r[a]).substr((""+r[a]).length-1,o))}else t=t.replace(RegExp.$1,1===RegExp.$1.length?r[a]:("00"+r[a]).substr((""+r[a]).length));return t}var l=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function f(e){return!!e&&l.test(e)}function p(e){if(!e)return e;if(!parseFloat(e))return 0;for(var t="",n=0,r=(e=(e||0).toString()).split("."),a=r[0],o=a.length-1;o>=0;o--)n++,t=a.charAt(o)+t,n%3||0==o||(t=","+t);return 1===r.length?t:t+"."+r[1]}function y(){return Array.prototype.slice.call(arguments).join(" ")}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e)return e.length<t[0]+t[1]?e:e.substr(0,t[0])+"****"+e.substr(-t[1],t[1])}var d,h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(!e)return 0;var n=e.toString().split(".");return e.toString().indexOf("e")>-1||n[1]&&n[1].length>t?i()(e).toFixed(t):e},b=function(e){return i()(e).div(1e8).toString()},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return i()(e).div(Math.pow(10,t)).toString()},g=function(){var e=c.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,n=c.a[t];return n||(window.localStorage.removeItem("VoltLocalCurrencyIndex"),n=c.a[e]),n};function w(e,t,n,r,a){!function(e,t,n,r,a,o){if(e>n||e<t){var i,c="bigint"==typeof t?"n":"";throw i=o>3?0===t||t===BigInt(0)?">= 0".concat(c," and < 2").concat(c," ** ").concat(8*(o+1)).concat(c):">= -(2".concat(c," ** ").concat(8*(o+1)-1).concat(c,") and < 2 ** ")+"".concat(8*(o+1)-1).concat(c):">= ".concat(t).concat(c," and <= ").concat(n).concat(c),new errors.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){k(t,"offset"),(void 0===e[t]||void 0===e[t+n])&&function(e,t,n){if(Math.floor(e)!==e)throw k(e,n),new errors.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new errors.ERR_BUFFER_OUT_OF_BOUNDS;throw new errors.ERR_OUT_OF_RANGE(n||"offset",">= ".concat(n?1:0," and <= ").concat(t),e)}(t,e.length-(n+1))}(r,a,o)}(t,r,a,e,n,7);var o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;var i=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i,n}function k(e,t){if("number"!=typeof e)throw new errors.ERR_INVALID_ARG_TYPE(t,"number",e)}e.prototype.writeBigUInt64LE=(d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return w(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"undefined"==typeof BigInt?BufferBigIntNotDefined:d)}).call(this,n(20).Buffer)},1140:function(e,t,n){"use strict";
/*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */e.exports=function(e,t){if("string"==typeof e)return s(e);if("number"==typeof e)return c(e,t);return null},e.exports.format=c,e.exports.parse=s;var r=/\B(?=(\d{3})+(?!\d))/g,a=/(?:\.0*|(\.[^0]+)0+)$/,o={b:1,kb:1024,mb:1<<20,gb:1<<30,tb:1024*(1<<30)},i=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb)$/i;function c(e,t){if(!Number.isFinite(e))return null;var n=Math.abs(e),i=t&&t.thousandsSeparator||"",c=t&&t.unitSeparator||"",s=t&&void 0!==t.decimalPlaces?t.decimalPlaces:2,u=Boolean(t&&t.fixedDecimals),l=t&&t.unit||"";l&&o[l.toLowerCase()]||(l=n>=o.tb?"TB":n>=o.gb?"GB":n>=o.mb?"MB":n>=o.kb?"KB":"B");var f=(e/o[l.toLowerCase()]).toFixed(s);return u||(f=f.replace(a,"$1")),i&&(f=f.replace(r,i)),f+c+l}function s(e){if("number"==typeof e&&!isNaN(e))return e;if("string"!=typeof e)return null;var t,n=i.exec(e),r="b";return n?(t=parseFloat(n[1]),r=n[4].toLowerCase()):(t=parseInt(e,10),r="b"),Math.floor(o[r]*t)}},1150:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(1),a=n.n(r),o=n(76),i=n(1050),c=n.n(i),s=n(15);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.className||c.a.icon,t=this.props.token||1;return a.a.createElement("div",{className:e},a.a.createElement(o.a,{type:Object(s.n)(t).icon}))}}])&&l(n.prototype,r),i&&l(n,i),t}(r.Component)},1151:function(e,t,n){"use strict";var r,a=n(1),o=n.n(a),i=n(165),c=(n(284),n(60)),s=n.n(c),u=n(15),l=n(1124);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=Object(l.f)(),v=Object(i.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({},e.wallet)}))(r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,m(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.price,n=e.value,r=e.usd,a=e.exchangeRate,i=e.token,c=e.tokenAmount,l=u.t[i||1].name.toLowerCase();if(!t[l])return null;var f=null,p=b.currencyCode.toLowerCase();f=t[l][p]?t[l][p]:s()(t[l].usd).times(a[p]),r&&(f=s()(f).div(t[l].usd).multipliedBy(r));var y=0;return y=3===i?(y=(y=s()(n).times(f)).plus(c||0)).toFixed(2,1):s()(n).div(1e8).times(f).toFixed(2,1),o.a.createElement("span",null,b.symbol,y," ",b.currencyCode)}}])&&p(n.prototype,r),a&&p(n,a),t}(a.Component))||r;t.a=v},1186:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(1),a=n.n(r),o=n(1049),i=n.n(o);n(18),n(1143);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){s(o,r,a,i,c,"next",e)}function c(e){s(o,r,a,i,c,"throw",e)}i(void 0)}))}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=f(this,p(t).call(this,e))).state={ready:!1},n}var n,r,o,c,s,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:(m=u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.currentWallet();case 1:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)})},{key:"getWalletId",value:function(e,t){if(void 0===t)for(var n=0;n<e.length;n++){t=e[n].id;break}return t}},{key:"currentWallet",value:(s=u(regeneratorRuntime.mark((function e(){var t,n,r,a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.dispatch,r=t.match,a=this.props.currentWallet,o=r.params.id,a.id&&a.id===parseInt(o)){e.next=7;break}return e.next=6,n({type:"service/queryWalletById",payload:{wid:parseInt(o)}});case 6:a=e.sent;case 7:if(1!==a.type){e.next=13;break}if(a.address||a.deposit){e.next=13;break}return e.next=11,n({type:"service/createSingleWalletAddress",payload:{wid:o}});case 11:(i=e.sent)&&n({type:"wallet/saveCurrentAddress",payload:{address:i}});case 13:this.ready&&this.ready(parseInt(o));case 14:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"getWalletDetail",value:(c=u(regeneratorRuntime.mark((function e(t){var n,r,a,o,i,c,s,u,l,f,p,y,m,d,h,b,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,r=n.dispatch,a=n.allWallets,o=n.currentWallet,i=n.ercTokenTimestamp,c=n.ercToken,s=n.bsvTokenTimestamp,u=n.bsvToken,l=a[t],o&&o.id==t&&(l=o),l){e.next=5;break}return e.abrupt("return");case 5:if(3===o.token&&c.length<1&&r({type:"wallet/queryErcToken",payload:{timestamp:i}}),1===o.token&&u.length<1&&r({type:"service/queryBsvToken",payload:{timestamp:s}}),l.parties&&!(l.parties.length<1)){e.next=12;break}return e.next=10,r({type:"wallet/queryParties",payload:{id:t}});case 10:f=e.sent,l.parties=f;case 12:if(l.paymail&&!(l.paymail.length<1)){e.next=17;break}return e.next=15,r({type:"service/queryPaymailById",payload:{wid:t}});case 15:p=e.sent,l.paymail=p;case 17:if(!(l.parties&&l.parties.length>0)){e.next=37;break}for(y=!0,m=!1,d=void 0,e.prev=21,h=l.parties[Symbol.iterator]();!(y=(b=h.next()).done);y=!0)(v=b.value).uid===l.uid&&(l.founder=v.user,l.founderId=v.uid);e.next=29;break;case 25:e.prev=25,e.t0=e.catch(21),m=!0,d=e.t0;case 29:e.prev=29,e.prev=30,y||null==h.return||h.return();case 32:if(e.prev=32,!m){e.next=35;break}throw d;case 35:return e.finish(32);case 36:return e.finish(29);case 37:r({type:"wallet/saveCurrent",payload:l});case 38:case"end":return e.stop()}}),e,this,[[21,25,29,37],[30,,32,36]])}))),function(e){return c.apply(this,arguments)})},{key:"loadTransactions",value:function(e){if(e&&-1!==e){var t=this.props,n=t.currentWallet,r=t.match.params.tk,a={wid:e};3===n.token&&(a.token=r||"eth"),this.props.dispatch({type:"service/queryTransaction",payload:a})}else this.props.dispatch({type:"wallet/saveTransaction",payload:{transactions:[]}})}},{key:"render",value:function(){return a.a.createElement("div",{className:i.a.container},a.a.createElement("div",{className:i.a.detail}))}}])&&l(n.prototype,r),o&&l(n,o),t}(r.Component)},1344:function(e,t,n){"use strict";var r,a=n(1),o=n.n(a),i=n(165),c=(n(284),n(60)),s=n.n(c),u=n(15),l=n(1124);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=Object(l.f)(),v=Object(i.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({},e.wallet)}))(r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,m(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"change",value:function(e,t){var n=this.props.price,r=(u.t[e]||u.t[1]).name.toLowerCase(),a=null,o=b.currencyCode.toLowerCase();return a=n[r][o]?n[r][o]:s()(n[r].usd).times(exchangeRate[o]),3===e?s()(t).times(a).toFixed(2,1):s()(t).div(1e8).times(a).toFixed(2,1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.wallets,r=t.type;if(!t.price.bsv)return null;var a=s()(0);return n[r]&&n[r].forEach((function(t){0!==parseInt(r)&&parseInt(r)!==t.type||(a=a.plus(e.change(t.token,t.total)),3===t.token&&(a=a.plus(t.usd)))})),o.a.createElement("span",null,b.symbol,a.toString()," ",b.currencyCode)}}])&&p(n.prototype,r),a&&p(n,a),t}(a.Component))||r;t.a=v},588:function(e,t,n){"use strict";n.r(t);n(1196);var r,a,o=n(1206),i=(n(565),n(285)),c=(n(570),n(292)),s=n(1),u=n.n(s),l=n(165),f=n(69),p=n(15),y=n(1124),m=n(1150),d=n(1151),h=(n(1344),n(288)),b=n(76),v=n(1186),g=(n(1152),n(1157)),w=(n(564),n(166)),k=n(18),O=n(1063),E=n.n(O);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){j(o,r,a,i,c,"next",e)}function c(e){j(o,r,a,i,c,"throw",e)}i(void 0)}))}}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var T,I=(r=Object(l.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){R(e,t,n[t])}))}return e}({},e.user,e.wallet,{loading:e.loading.effects["service/createSingleWallet"]})})),Object(f.withRouter)(a=r(a=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=P(t).call(this,e),n=!a||"object"!==_(a)&&"function"!=typeof a?C(r):a,R(C(n),"removeToken",function(){var e=S(regeneratorRuntime.mark((function e(t,r){var a,o,i,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props,o=a.match,i=a.dispatch,c=a.createCallback,e.next=3,i({type:"service/removeToken",payload:{token:t.toLowerCase(),wid:parseInt(o.params.id)}});case 3:e.sent?((s=n.state.showList)[r].status=0,n.setState({showList:s}),c(!0)):w.a.error(Object(k.a)("remove_token_error"));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),R(C(n),"addToken",function(){var e=S(regeneratorRuntime.mark((function e(t,r){var a,o,i,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props,o=a.match,i=a.dispatch,c=a.createCallback,e.next=3,i({type:"service/addToken",payload:{token:t.toLowerCase(),wid:parseInt(o.params.id)}});case 3:e.sent?((s=n.state.showList)[r].status=1,n.setState({showList:s}),c(!0)):w.a.error(Object(k.a)("add_token_error"));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),R(C(n),"handleChange",(function(e){var t=e.target.value;if(!t)return n.setState({showList:n.state.userToken});var r=n.state.tokens,a=n.searchByKeywords(t,r);n.setState({showList:a})})),n.state={posting:!1,loading:!1,showList:[],tokens:[],userToken:[]},n}var n,r,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:(o=S(regeneratorRuntime.mark((function e(){var t,n,r,a,o,i,c,s,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.ercToken,r=t.ercTokenTimestamp,a=this.props,o=a.currentWallet,i=a.dispatch,c=o.balance.balance,!(n.length<1)){e.next=11;break}return this.setState({loading:!0}),e.next=7,i({type:"wallet/queryErcToken",payload:{timestamp:r}});case 7:s=e.sent,n=s.tokens,r=new Date(s.timestamp).getTime(),this.setState({loading:!1});case 11:u=JSON.parse(JSON.stringify(n)),c.forEach((function(e){var t=u.findIndex((function(t){return t.symbol.toLowerCase()===e.token}));t>-1&&(u[t].status=1),Object.assign(e,u[t])})),this.setState({showList:c,tokens:u,userToken:c});case 14:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"throttle",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=(new Date).getTime();return function(){var r=(new Date).getTime();r-n>t&&(e(),n=r)}}},{key:"escapeRegExpWildcards",value:function(e){var t=/([\(\[\{\\\^\$\}\]\)\?\*\+\.])/gim;return e&&t.test(e)?e.replace(t,"\\$1"):e}},{key:"searchByKeywords",value:function(e,t){var n=new RegExp(".*?"+this.escapeRegExpWildcards(e)+".*?","img");return t.filter((function(t){return n.test(t.name)||n.test(t.symbol)||e==t.address}))}},{key:"render",value:function(){var e=this,t=this.state.showList;return u.a.createElement("div",{className:E.a.container},u.a.createElement("div",{className:E.a.header},u.a.createElement("div",{className:E.a.title},Object(k.a)("add_token_accounts"))),u.a.createElement("div",{className:E.a.search},u.a.createElement(g.a,{className:E.a.search_input,placeholder:Object(k.a)("search_token_holder"),onChange:this.handleChange})),u.a.createElement("div",{className:E.a.token_list_wrap},u.a.createElement("div",{className:E.a.user_token_list},u.a.createElement("div",{className:E.a.token},u.a.createElement(m.a,{token:3,className:E.a.coin_icon}),u.a.createElement("span",{className:E.a.token_name},u.a.createElement("span",{style:{fontWeight:"bold"}},"ETH")," | Ethereum")),t.map((function(t,n){var r=t.symbol,a=t.logoURI,o=t.name,i=(t.wid,t.id),c=t.status;if("eth"!==t.token)return u.a.createElement("div",{className:E.a.token,key:r+i},u.a.createElement("img",{src:a,width:"25",className:E.a.token_img}),u.a.createElement("span",{className:E.a.token_name},u.a.createElement("span",{style:{fontWeight:"bold"}},r)," | ",o),1===c?u.a.createElement("span",{onClick:function(){return e.removeToken(r,n)}},u.a.createElement(b.a,{type:"iconicon-tokenswap-selected",style:{fontSize:"25px"}})):u.a.createElement("span",{onClick:function(){return e.addToken(r,n)}},u.a.createElement("span",{className:E.a.circle})))})))))}}])&&x(n.prototype,r),a&&x(n,a),t}(s.Component))||a)||a),D=n(1059),L=n.n(D);n(60);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function A(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){W(o,r,a,i,c,"next",e)}function c(e){W(o,r,a,i,c,"throw",e)}i(void 0)}))}}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",(function(){return H}));var H=Object(l.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){$(e,t,n[t])}))}return e}({},t,n,{loading:r["service/queryWalletById"]||r["wallet/queryErcToken"]||r["wallet/saveCurrent"],creatingAddress:r["service/createSingleWalletAddress"]||!1})}))(T=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=F(t).call(this,e),n=!a||"object"!==B(a)&&"function"!=typeof a?q(r):a,$(q(n),"switchDisplay",(function(){var e=n.state.hideAmount;n.props.dispatch({type:"user/switchDisplay"}),n.setState({hideAmount:!e})})),$(q(n),"showDrawer",(function(){n.setState({drawer_visible:!0})})),$(q(n),"closeDrawer",(function(){n.setState({drawer_visible:!1})})),$(q(n),"renderTokenName",(function(e){e.id;var t=e.token,r=e.wid,a=e.logoURI,o=(e.symbol,e.name),i=null,c=null;return"eth"===t?(i=u.a.createElement(m.a,{token:3,className:L.a.coin_icon}),c="".concat(p.t[3].name," | ").concat(p.t[3].fullname)):(i=u.a.createElement("img",{src:a,width:"25",className:L.a.token_img}),c=o?"".concat(t.toUpperCase()," | ").concat(o):t.toUpperCase()),u.a.createElement("div",{className:L.a.part1,onClick:function(){return n.gotoMessageList(r,t)}},i,u.a.createElement("div",{className:L.a.coin_name},u.a.createElement("div",{className:L.a.name_box},u.a.createElement("div",{className:L.a.name},c))))})),$(q(n),"gotoInfoPage",(function(e){n.props.history.push({pathname:"/money/walletinfo/".concat(e)})})),$(q(n),"renderInfo",(function(){var e=n.props,t=e.match,r=e.currentWallet,a=t.params.id,o=n.state.hideAmount,i=o?u.a.createElement(b.a,{type:"iconhide"}):u.a.createElement(b.a,{type:"iconshow"});return u.a.createElement("div",{className:L.a.info},u.a.createElement(m.a,{token:3}),u.a.createElement("div",{className:L.a.wallet_name,onClick:function(){return n.gotoInfoPage(a)}},r.name," ",u.a.createElement("span",null,u.a.createElement(b.a,{type:"iconwallet-info"}))),u.a.createElement("div",{className:L.a.total_assets},u.a.createElement("div",{className:L.a.total},o?p.q:u.a.createElement(d.a,{value:r.total,tokenAmount:r.usd,token:3})," ",u.a.createElement("span",{onClick:n.switchDisplay,className:L.a.show_balance},i))),u.a.createElement("div",{className:L.a.add},u.a.createElement("a",{className:"ant-dropdown-link",onClick:n.showDrawer},u.a.createElement(b.a,{type:"iconcreatewallet",style:{fontSize:18}}))))})),$(q(n),"gotoMessageList",(function(e,t){n.props.history.push({pathname:"/money/list/".concat(e,"/").concat(t)})})),$(q(n),"gotoTransfer",(function(e,t){n.props.history.push({pathname:"/money/transfer/3/".concat(e,"/").concat(t)})})),$(q(n),"gotoReceive",(function(e){n.props.history.push({pathname:"/money/receive/".concat(e)})})),$(q(n),"goHome",(function(){n.props.history.push({pathname:"/money/home/0"})})),n.state={joining:0,receiveModalVisible:!1,hideAmount:window.localStorage.getItem(p.b.HIDEAMOUNT)||0,drawer_visible:!1},n}var n,r,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,e),n=t,(r=[{key:"getWalletId",value:function(){return parseInt(this.props.match.params.id)}},{key:"ready",value:function(){this.getWalletDetail(this.getWalletId())}},{key:"componentDidMount",value:function(){this.updateEth()}},{key:"updateEth",value:(s=A(regeneratorRuntime.mark((function e(){var t,n,r,a,o,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading:!0}),t=[],n=this.props,r=n.dispatch,a=n.ercToken,o=n.ercTokenTimestamp,t.push(r({type:"service/queryWalletById",payload:{wid:this.getWalletId()}})),a.length<1&&t.push(r({type:"wallet/queryErcToken",payload:{timestamp:o}})),Promise.all(t).then(function(){var e=A(regeneratorRuntime.mark((function e(t){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t[1]&&(a=t[1].tokens),t[0].balance&&((c=t[0].balance.balance).forEach((function(e,t){"eth"===e.token&&(n=e,o=t);var r=a.find((function(t){return e.token==t.symbol.toLowerCase()}));Object.assign(e,r)})),c.splice(o,1),c.unshift(n)),e.next=4,r({type:"wallet/saveCurrent",payload:t[0]});case 4:i.setState({loading:!1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"createCallback",value:function(e){this.updateEth()}},{key:"renderEthList",value:function(){var e=this,t=this.state.hideAmount,n=this.props.currentWallet;return n.id!==this.getWalletId()?u.a.createElement(h.a,null):u.a.createElement("div",{className:L.a.list_container,style:{height:473,padding:"25px 30px 0"}},n.balance&&n.balance.balance.map((function(n){var r=n.token,a=n.value,o=(n.address,n.wid);if(n.id,n.symbol,n.logoURI,o===e.getWalletId())return u.a.createElement("div",{className:L.a.list_item,key:r},e.renderTokenName(n),u.a.createElement("div",{className:L.a.part2},u.a.createElement("span",{className:L.a.amount},t?p.q:Object(y.a)(a))," ",u.a.createElement("span",{className:L.a.unit},r.toUpperCase())),u.a.createElement("div",{className:L.a.part3},u.a.createElement("div",{className:L.a.transfer,onClick:function(){return e.gotoTransfer(o,r)}},u.a.createElement(b.a,{type:"iconicon-send"})," ",Object(k.a)("transfer")),u.a.createElement("span",{className:L.a.receive,onClick:function(){return e.gotoReceive(o)}},u.a.createElement(b.a,{type:"iconreceive"})," ",Object(k.a)("collection"))))})))}},{key:"renderAddressCreating",value:function(){return u.a.createElement(c.a,{title:Object(k.a)("collection"),visible:this.props.creatingAddress,footer:null,onCancel:this.hideReceiveDialog},u.a.createElement("div",{className:L.a.qrcodeWrap},u.a.createElement(h.a,{className:L.a.loading_container}),u.a.createElement("p",null,"Generating address")))}},{key:"render",value:function(){var e=this,t=this.state.loading;return u.a.createElement("div",{className:L.a.container},u.a.createElement(i.a,{spinning:t},this.renderInfo(),this.renderEthList()),this.renderAddressCreating(),u.a.createElement("span",{className:L.a.goback,onClick:this.goHome}," ",Object(k.a)("back")),this.state.drawer_visible&&u.a.createElement(o.a,{width:400,title:"",placement:"right",closable:!1,onClose:this.closeDrawer,visible:this.state.drawer_visible,getContainer:!1,style:{position:"absolute"}},u.a.createElement(I,{createCallback:function(t){return e.createCallback(t)}})))}}])&&M(n.prototype,r),a&&M(n,a),t}(v.a))||T}}]);