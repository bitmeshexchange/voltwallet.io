(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1080:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r,a=n(1),o=n.n(a),c=(n(576),n(165)),i=n(1141),l=n(287),s=n(1140),u=n(76),f=n(1120),p=n(1061),m=n.n(p),b=n(18);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O=Object(c.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){E(e,t,n[t])}))}return e}({},e.user,e.wallet)}))(r=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=h(t).call(this,e),n=!a||"object"!==d(a)&&"function"!=typeof a?g(r):a,E(g(n),"goBack",(function(){n.props.history.goBack()})),E(g(n),"switchArr",(function(e){var t=n.state.showArr;t[e]=!t[e],n.setState({showArr:t})})),n.state={loading:!1,data:{},label:null,inputAddress:[],outputAddress:[],showArr:[!0,!0]},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.transactions,r=t.location,a=t.match;if(!r.state||n.length<1||n[r.state.index].txid!=a.params.txid)return this.props.history.replace({pathname:"/money/home/0"});this.setState({loading:!0});var c=null,i=n[r.state.index],l=i.type,s=i.status;2==l?2==s&&(c=o.a.createElement("label",{className:m.a.success},Object(b.a)("tx_success"))):c=o.a.createElement("label",{className:m.a.success},Object(b.a)("receive"));var u=a.params.txid,f="https://chain.api.btc.com/v3/tx/".concat(u,"?verbose=3");fetch(f).then((function(e){return e.json()})).then((function(t){var n=t.data,r=[],a=[];n.inputs.forEach((function(e){r.push.apply(r,y(e.prev_addresses))})),n.outputs.forEach((function(e){a.push.apply(a,y(e.addresses))})),e.setState({loading:!1,data:n,label:c,inputAddress:r,outputAddress:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;if(!this.props.location.state)return this.props.history.replace({pathname:"/money/home/0"}),null;var t=this.state,n=t.loading,r=t.data,a=t.label,c=t.inputAddress,p=t.outputAddress,d=t.showArr;if(n)return o.a.createElement(l.a,null);var y=this.props,v=y.currentWallet,h=y.transactions,g=y.feerate,w=y.location,E=r.outputs_value,O=r.fee,j=r.confirmations,_=r.size,x=r.block_time,N=r.hash,S=v.name,k=h[w.state.index],P=k.note,C=k.type,A=k.price,M=2==C?"-":"+";return o.a.createElement("div",{style:{height:"100%",overflowY:"auto"}},o.a.createElement("div",{className:m.a.container},o.a.createElement("div",{className:m.a.w_info},o.a.createElement(s.a,{token:2}),o.a.createElement("div",{className:m.a.w_name},S),o.a.createElement("div",{className:m.a.tx_status},a),o.a.createElement("span",{className:m.a.goback,onClick:this.goBack}," ",Object(b.a)("back"))),o.a.createElement("div",{className:m.a.tx_info},o.a.createElement("div",{className:m.a.tx_row_1},o.a.createElement("div",{className:m.a.label},Object(b.a)("tx_amount")),o.a.createElement("div",{className:m.a.value},M," ",Object(f.d)(E)," BTC / ",M," ",o.a.createElement(i.a,{value:E,token:2,usd:A}))),o.a.createElement("div",{className:m.a.tx_row},o.a.createElement("div",{className:m.a.tx_col,style:{width:150}},o.a.createElement("div",{className:m.a.label},Object(b.a)("confirmations")),o.a.createElement("div",{className:m.a.value},j)),o.a.createElement("div",{className:m.a.tx_col},o.a.createElement("div",{className:m.a.label},Object(b.a)("timestamp")),o.a.createElement("div",{className:m.a.value},Object(f.e)(1e3*x)))),o.a.createElement("div",{className:m.a.tx_row},o.a.createElement("div",{className:m.a.tx_col,style:{width:150}},o.a.createElement("div",{className:m.a.label},Object(b.a)("fee_rate")),o.a.createElement("div",{className:m.a.value},Object(f.d)(g.btc)," sat/B")),o.a.createElement("div",{className:m.a.tx_col,style:{width:120}},o.a.createElement("div",{className:m.a.label},Object(b.a)("size")),o.a.createElement("div",{className:m.a.value},_)),o.a.createElement("div",{className:m.a.tx_col},o.a.createElement("div",{className:m.a.label},Object(b.a)("paid")),o.a.createElement("div",{className:m.a.value},Object(f.d)(O)," BTC"))),o.a.createElement("div",{className:m.a.tx_row_1},o.a.createElement("div",{className:m.a.label},"TX ID"),o.a.createElement("div",{className:m.a.value},N)),o.a.createElement("div",{className:m.a.tx_row_1},o.a.createElement("div",{className:m.a.label},o.a.createElement("span",null,Object(b.a)("input_addresses")),o.a.createElement("span",{onClick:function(){return e.switchArr(0)}},d[0]?o.a.createElement(u.a,{type:"iconchevron",style:{transform:"rotateX(180deg)"}}):o.a.createElement(u.a,{type:"iconchevron"}))),d[0]&&c.map((function(e){return o.a.createElement("div",{className:m.a.value,key:e},e)}))),o.a.createElement("div",{className:m.a.tx_row_1},o.a.createElement("div",{className:m.a.label},o.a.createElement("span",null,Object(b.a)("output_addresses")),o.a.createElement("span",{onClick:function(){return e.switchArr(1)}},d[1]?o.a.createElement(u.a,{type:"iconchevron",style:{transform:"rotateX(180deg)"}}):o.a.createElement(u.a,{type:"iconchevron"}))),d[1]&&p.map((function(e){return o.a.createElement("div",{className:m.a.value,key:e},e)}))),o.a.createElement("div",{className:m.a.tx_row_1},o.a.createElement("div",{className:m.a.label},Object(b.a)("message")),o.a.createElement("div",{className:m.a.value},P)))))}}])&&v(n.prototype,r),a&&v(n,a),t}(a.Component))||r},1120:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"e",(function(){return s})),n.d(t,"j",(function(){return f})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return m})),n.d(t,"h",(function(){return b})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return y})),n.d(t,"c",(function(){return v})),n.d(t,"f",(function(){return h}));n(1132);var r=n(3),a=n.n(r),o=n(59),c=n.n(o),i=n(284);window.location;function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),a()(e).format(t)):e}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";if(!e)return"";var n=e;"number"==typeof e?n=new Date(e):"string"==typeof e&&(n=new Date(+e));var r={"y+":n.getFullYear(),"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),"S+":n.getMilliseconds()};for(var a in r)if(new RegExp("("+a+")").test(t))if("y+"===a)t=t.replace(RegExp.$1,(""+r[a]).substr(4-RegExp.$1.length));else if("S+"===a){var o=RegExp.$1.length;o=1===o?3:o,t=t.replace(RegExp.$1,("00"+r[a]).substr((""+r[a]).length-1,o))}else t=t.replace(RegExp.$1,1===RegExp.$1.length?r[a]:("00"+r[a]).substr((""+r[a]).length));return t}var u=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function f(e){return!!e&&u.test(e)}function p(e){if(!e)return e;if(!parseFloat(e))return 0;for(var t="",n=0,r=(e=(e||0).toString()).split("."),a=r[0],o=a.length-1;o>=0;o--)n++,t=a.charAt(o)+t,n%3||0==o||(t=","+t);return 1===r.length?t:t+"."+r[1]}function m(){return Array.prototype.slice.call(arguments).join(" ")}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e)return e.length<t[0]+t[1]?e:e.substr(0,t[0])+"****"+e.substr(-t[1],t[1])}var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=e.toString().split(".");return e.toString().indexOf("e")>-1||n[1]&&n[1].length>t?c()(e).toFixed(t):e},y=function(e){return c()(e).div(1e8).toString()},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return c()(e).div(Math.pow(10,t)).toString()},h=function(){var e=i.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,n=i.a[t];return n||(window.localStorage.removeItem("VoltLocalCurrencyIndex"),n=i.a[e]),n}},1132:function(e,t,n){"use strict";
/*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */e.exports=function(e,t){if("string"==typeof e)return l(e);if("number"==typeof e)return i(e,t);return null},e.exports.format=i,e.exports.parse=l;var r=/\B(?=(\d{3})+(?!\d))/g,a=/(?:\.0*|(\.[^0]+)0+)$/,o={b:1,kb:1024,mb:1<<20,gb:1<<30,tb:1024*(1<<30)},c=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb)$/i;function i(e,t){if(!Number.isFinite(e))return null;var n=Math.abs(e),c=t&&t.thousandsSeparator||"",i=t&&t.unitSeparator||"",l=t&&void 0!==t.decimalPlaces?t.decimalPlaces:2,s=Boolean(t&&t.fixedDecimals),u=t&&t.unit||"";u&&o[u.toLowerCase()]||(u=n>=o.tb?"TB":n>=o.gb?"GB":n>=o.mb?"MB":n>=o.kb?"KB":"B");var f=(e/o[u.toLowerCase()]).toFixed(l);return s||(f=f.replace(a,"$1")),c&&(f=f.replace(r,c)),f+i+u}function l(e){if("number"==typeof e&&!isNaN(e))return e;if("string"!=typeof e)return null;var t,n=c.exec(e),r="b";return n?(t=parseFloat(n[1]),r=n[4].toLowerCase()):(t=parseInt(e,10),r="b"),Math.floor(o[r]*t)}},1140:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(1),a=n.n(r),o=n(76),c=n(1049),i=n.n(c),l=n(15);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.className||i.a.icon,t=this.props.token||1;return a.a.createElement("div",{className:e},a.a.createElement(o.a,{type:Object(l.n)(t).icon}))}}])&&u(n.prototype,r),c&&u(n,c),t}(r.Component)},1141:function(e,t,n){"use strict";var r,a=n(1),o=n.n(a),c=n(165),i=(n(284),n(59)),l=n.n(i),s=n(15),u=n(1120);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=Object(u.f)(),h=Object(c.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){y(e,t,n[t])}))}return e}({},e.wallet)}))(r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),m(this,b(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.price,n=e.value,r=e.usd,a=e.exchangeRate,c=e.token,i=e.tokenAmount,u=s.t[c||1].name.toLowerCase();if(!t[u])return null;var f=null,p=v.currencyCode.toLowerCase();f=t[u][p]?t[u][p]:l()(t[u].usd).times(a[p]),r&&(f=l()(f).div(t[u].usd).multipliedBy(r));var m=0;return m=3===c?(m=(m=l()(n).times(f)).plus(i||0)).toFixed(2,1):l()(n).div(1e8).times(f).toFixed(2,1),o.a.createElement("span",null,v.symbol,m," ",v.currencyCode)}}])&&p(n.prototype,r),a&&p(n,a),t}(a.Component))||r;t.a=h}}]);