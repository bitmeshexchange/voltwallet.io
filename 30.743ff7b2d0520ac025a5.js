(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1088:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));n(563);var r,o=n(139),a=n(1),i=n.n(a),c=n(165),u=(n(76),n(1196)),s=n(287),f=n(1089),l=n.n(f),p=n(18),m=n(1124);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,r,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){b(a,r,o,i,c,"next",e)}function c(e){b(a,r,o,i,c,"throw",e)}i(void 0)}))}}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object(p.a)("add_use"),Object(p.a)("create_manage");var E=Object(c.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O(e,t,n[t])}))}return e}({},e.token,{loading:e.loading.effects["service/queryTokenList"]})}))(r=function(e){function t(e){var n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=v(t).call(this,e),n=!o||"object"!==d(o)&&"function"!=typeof o?g(r):o,O(g(n),"renderInfo",(function(){return i.a.createElement("div",{className:l.a.info},i.a.createElement("div",{className:l.a.tokens_title},Object(p.a)("tokens_title")," ",i.a.createElement("span",null,"BETA")),i.a.createElement("div",{className:l.a.tokens_desc},Object(p.a)("tokens_desc")))})),O(g(n),"gotoToken",(function(e,t){var r="/money/bsv/".concat(e);n.props.history.push({pathname:r})})),O(g(n),"renderTokensList",(function(){var e=n.props,t=(e.tokens,e.loading),r=n.state.data;return t?i.a.createElement(s.a,null):i.a.createElement("div",{className:l.a.list_container},i.a.createElement("div",{className:l.a.list_content},r&&r.map((function(e){var t=e.id,r=(e.token,e.tokenName),o=e.tokenSymbol,a=e.tokenValue,c=e.wid,s=e.logoUrl,f=e.decimalNum;return i.a.createElement("div",{className:l.a.list_item,key:t},i.a.createElement("div",{className:l.a.part1,onClick:function(){return n.gotoToken(c,r)}},i.a.createElement("div",{className:l.a.coin_icon},s?i.a.createElement("img",{src:Object(m.a)(s),className:l.a.logo}):i.a.createElement(u.a,{name:r,style:{width:25,height:25,lineHeight:"25px",fontSize:14,fontWeight:500}})),i.a.createElement("div",{className:l.a.coin_name},i.a.createElement("span",{className:l.a.name},o," | ",r))),i.a.createElement("div",{className:l.a.part2},i.a.createElement("span",{className:l.a.amount},Object(m.e)(a,f||8))," ",i.a.createElement("span",{className:l.a.unit})))}))))})),O(g(n),"gotoCreateToken",(function(){n.props.history.push({pathname:"/tokens/create"})}));n.props.match.params.type;return n.state={data:[],loading:!1},n}var n,r,a,c,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:(f=y(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.fetch();case 1:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{key:"fetch",value:(c=y(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dispatch({type:"service/queryTokenList"});case 2:t=e.sent,this.setState({data:t.token});case 4:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:l.a.container},this.renderInfo(),this.renderTokensList(),i.a.createElement("div",{className:l.a.btn_container},i.a.createElement(o.a,{type:"primary",className:l.a.btn,onClick:function(){return e.gotoCreateToken()}},Object(p.a)("create_token"))))}}])&&h(n.prototype,r),a&&h(n,a),t}(a.Component))||r},1124:function(e,t,n){"use strict";(function(e){n.d(t,"c",(function(){return l})),n.d(t,"f",(function(){return p})),n.d(t,"k",(function(){return d})),n.d(t,"j",(function(){return b})),n.d(t,"h",(function(){return y})),n.d(t,"i",(function(){return h})),n.d(t,"b",(function(){return g})),n.d(t,"e",(function(){return w})),n.d(t,"d",(function(){return O})),n.d(t,"g",(function(){return E})),n.d(t,"a",(function(){return N}));n(1141);var r=n(3),o=n.n(r),a=n(60),i=n.n(a),c=n(284),u=n(52),s=n.n(u).a.parse(window.location.search),f=window.location;function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),o()(e).format(t)):e}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";if(!e)return"";var n=e;"number"==typeof e?n=new Date(e):"string"==typeof e&&(n=new Date(+e));var r={"y+":n.getFullYear(),"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),"S+":n.getMilliseconds()};for(var o in r)if(new RegExp("("+o+")").test(t))if("y+"===o)t=t.replace(RegExp.$1,(""+r[o]).substr(4-RegExp.$1.length));else if("S+"===o){var a=RegExp.$1.length;a=1===a?3:a,t=t.replace(RegExp.$1,("00"+r[o]).substr((""+r[o]).length-1,a))}else t=t.replace(RegExp.$1,1===RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length));return t}var m=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function d(e){return!!e&&m.test(e)}function b(e){if(!e)return e;if(!parseFloat(e))return 0;for(var t="",n=0,r=(e=(e||0).toString()).split("."),o=r[0],a=o.length-1;a>=0;a--)n++,t=o.charAt(a)+t,n%3||0==a||(t=","+t);return 1===r.length?t:t+"."+r[1]}function y(){return Array.prototype.slice.call(arguments).join(" ")}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e)return e.length<t[0]+t[1]?e:e.substr(0,t[0])+"****"+e.substr(-t[1],t[1])}var v,g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(!e)return 0;var n=e.toString().split(".");return e.toString().indexOf("e")>-1||n[1]&&n[1].length>t?i()(e).toFixed(t):e},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return i()(e).div(Math.pow(10,t)).toString()},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return i()(e).div(Math.pow(10,t)).toString()},E=function(){var e=c.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,n=c.a[t];return n||(window.localStorage.removeItem("VoltLocalCurrencyIndex"),n=c.a[e]),n};function _(e,t,n,r,o){!function(e,t,n,r,o,a){if(e>n||e<t){var i,c="bigint"==typeof t?"n":"";throw i=a>3?0===t||t===BigInt(0)?">= 0".concat(c," and < 2").concat(c," ** ").concat(8*(a+1)).concat(c):">= -(2".concat(c," ** ").concat(8*(a+1)-1).concat(c,") and < 2 ** ")+"".concat(8*(a+1)-1).concat(c):">= ".concat(t).concat(c," and <= ").concat(n).concat(c),new errors.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){k(t,"offset"),(void 0===e[t]||void 0===e[t+n])&&function(e,t,n){if(Math.floor(e)!==e)throw k(e,n),new errors.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new errors.ERR_BUFFER_OUT_OF_BOUNDS;throw new errors.ERR_OUT_OF_RANGE(n||"offset",">= ".concat(n?1:0," and <= ").concat(t),e)}(t,e.length-(n+1))}(r,o,a)}(t,r,o,e,n,7);var a=Number(t&BigInt(4294967295));e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a;var i=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i,n}function k(e,t){if("number"!=typeof e)throw new errors.ERR_INVALID_ARG_TYPE(t,"number",e)}e.prototype.writeBigUInt64LE=(v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return _(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"undefined"==typeof BigInt?BufferBigIntNotDefined:v);var N=function(e){return(s.wss&&s.wss.indexOf("voltpre.bitmesh.com")>-1||f.pathname.indexOf("test.html")>-1)&&(e=e.replace("volt.bitmesh.com","voltpre.bitmesh.com")),e}}).call(this,n(20).Buffer)},1141:function(e,t,n){"use strict";
/*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */e.exports=function(e,t){if("string"==typeof e)return u(e);if("number"==typeof e)return c(e,t);return null},e.exports.format=c,e.exports.parse=u;var r=/\B(?=(\d{3})+(?!\d))/g,o=/(?:\.0*|(\.[^0]+)0+)$/,a={b:1,kb:1024,mb:1<<20,gb:1<<30,tb:1024*(1<<30)},i=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb)$/i;function c(e,t){if(!Number.isFinite(e))return null;var n=Math.abs(e),i=t&&t.thousandsSeparator||"",c=t&&t.unitSeparator||"",u=t&&void 0!==t.decimalPlaces?t.decimalPlaces:2,s=Boolean(t&&t.fixedDecimals),f=t&&t.unit||"";f&&a[f.toLowerCase()]||(f=n>=a.tb?"TB":n>=a.gb?"GB":n>=a.mb?"MB":n>=a.kb?"KB":"B");var l=(e/a[f.toLowerCase()]).toFixed(u);return s||(l=l.replace(o,"$1")),i&&(l=l.replace(r,i)),l+c+f}function u(e){if("number"==typeof e&&!isNaN(e))return e;if("string"!=typeof e)return null;var t,n=i.exec(e),r="b";return n?(t=parseFloat(n[1]),r=n[4].toLowerCase()):(t=parseInt(e,10),r="b"),Math.floor(a[r]*t)}},1196:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(1),o=n.n(r),a=n(1053),i=n.n(a);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,f(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.name,n=e.style;if(!t)return null;var r=t.substr(0,1).toUpperCase();return o.a.createElement("div",{className:i.a.logo,style:n},r)}}])&&u(n.prototype,r),a&&u(n,a),t}(r.Component)}}]);