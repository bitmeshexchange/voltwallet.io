(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1097:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"e",(function(){return s})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return m})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return y})),n.d(t,"c",(function(){return b})),n.d(t,"f",(function(){return v}));n(1109);var r=n(3),a=n.n(r),o=n(65),c=n.n(o),i=n(283);window.location;function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),a()(e).format(t)):e}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";if(!e)return"";var n=e;"number"==typeof e?n=new Date(e):"string"==typeof e&&(n=new Date(+e));var r={"y+":n.getFullYear(),"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),"S+":n.getMilliseconds()};for(var a in r)if(new RegExp("("+a+")").test(t))if("y+"===a)t=t.replace(RegExp.$1,(""+r[a]).substr(4-RegExp.$1.length));else if("S+"===a){var o=RegExp.$1.length;o=1===o?3:o,t=t.replace(RegExp.$1,("00"+r[a]).substr((""+r[a]).length-1,o))}else t=t.replace(RegExp.$1,1===RegExp.$1.length?r[a]:("00"+r[a]).substr((""+r[a]).length));return t}var l=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function p(e){return!!e&&l.test(e)}function f(){return Array.prototype.slice.call(arguments).join(" ")}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e)return e.length<t[0]+t[1]?e:e.substr(0,t[0])+"****"+e.substr(-t[1],t[1])}var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=e.toString().split(".");return n[1]&&n[1].length>t?c()(e).toFixed(t):e},y=function(e){return c()(e).div(1e8).toString()},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return c()(e).div(Math.pow(10,t)).toString()},v=function(){var e=i.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,n=i.a[t];return n||(window.localStorage.removeItem("VoltLocalCurrencyIndex"),n=i.a[e]),n}},1109:function(e,t,n){"use strict";
/*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */e.exports=function(e,t){if("string"==typeof e)return u(e);if("number"==typeof e)return i(e,t);return null},e.exports.format=i,e.exports.parse=u;var r=/\B(?=(\d{3})+(?!\d))/g,a=/(?:\.0*|(\.[^0]+)0+)$/,o={b:1,kb:1024,mb:1<<20,gb:1<<30,tb:1024*(1<<30)},c=/^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb)$/i;function i(e,t){if(!Number.isFinite(e))return null;var n=Math.abs(e),c=t&&t.thousandsSeparator||"",i=t&&t.unitSeparator||"",u=t&&void 0!==t.decimalPlaces?t.decimalPlaces:2,s=Boolean(t&&t.fixedDecimals),l=t&&t.unit||"";l&&o[l.toLowerCase()]||(l=n>=o.tb?"TB":n>=o.gb?"GB":n>=o.mb?"MB":n>=o.kb?"KB":"B");var p=(e/o[l.toLowerCase()]).toFixed(u);return s||(p=p.replace(a,"$1")),c&&(p=p.replace(r,c)),p+i+l}function u(e){if("number"==typeof e&&!isNaN(e))return e;if("string"!=typeof e)return null;var t,n=c.exec(e),r="b";return n?(t=parseFloat(n[1]),r=n[4].toLowerCase()):(t=parseInt(e,10),r="b"),Math.floor(o[r]*t)}},1112:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(1),a=n.n(r),o=n(137),c=n(1045),i=n.n(c),u=n(15);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,f(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.className||i.a.icon,t=this.props.token||1;return a.a.createElement("div",{className:e},a.a.createElement(o.a,{type:Object(u.m)(t).icon}))}}])&&l(n.prototype,r),c&&l(n,c),t}(r.Component)},581:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));n(564);var r,a=n(284),o=(n(565),n(165)),c=n(1),i=n.n(c),u=n(164),s=n(74),l=n(1112),p=n(1073),f=n.n(p),m=n(19),d=n(15),y=n(1097),b=n(137);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=Object(u.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){j(e,t,n[t])}))}return e}({},e.user,e.wallet,{loading:e.loading.effects["service/queryArchive"]})}))(r=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=w(t).call(this,e),n=!a||"object"!==v(a)&&"function"!=typeof a?E(r):a,j(E(n),"renderWalletMenu",(function(){var e=parseInt(n.props.match.params.type)||0;return i.a.createElement("div",{className:f.a.menu_list},i.a.createElement("div",{className:f.a.wallet_type},d.s.map((function(t,n){return i.a.createElement("div",{key:t.key,className:n===e?Object(y.g)(f.a.selected,f.a.wallet_type_item):f.a.wallet_type_item},i.a.createElement(s.Link,{to:"/me/archived/".concat(n)},t.text))}))))})),j(E(n),"gotoBack",(function(){n.props.history.push({pathname:"/me"})})),j(E(n),"renderInfo",(function(){return i.a.createElement("div",{className:f.a.info},i.a.createElement("div",{className:f.a.title},i.a.createElement("h1",null,Object(m.a)("manage_archived_accounts")),i.a.createElement("div",{className:f.a.cancel,onClick:n.gotoBack},Object(m.a)("cancel"))),n.renderWalletMenu())})),j(E(n),"unarchive",function(){var e,t=(e=regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.dispatch({type:"service/unArchive",payload:{wid:parseInt(r)}});case 2:if(a=e.sent){e.next=5;break}return e.abrupt("return",o.a.error(Object(m.a)("failure")));case 5:if(401!==a.code){e.next=7;break}return e.abrupt("return",o.a.error(Object(m.a)("failure")+Object(m.a)("archiveWithoutPermission")));case 7:return o.a.success(Object(m.a)("restore_success")),e.next=10,n.props.dispatch({type:"service/updateWallet",payload:{type:parseInt(t)}});case 10:n.props.history.push({pathname:"/money/list/".concat(r)});case 11:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){h(o,r,a,c,i,"next",e)}function i(e){h(o,r,a,c,i,"throw",e)}c(void 0)}))});return function(e,n){return t.apply(this,arguments)}}()),j(E(n),"renderAssetsList",(function(){var e=n.state.hideAmount,t=n.props,r=(t.currencyIndex,t.archiveWalletList);return i.a.createElement("div",{className:f.a.list_container},i.a.createElement("div",{className:f.a.list_content},i.a.createElement("div",{className:f.a.item_head},i.a.createElement("div",{className:f.a.part1},Object(m.a)("archived_accounts")),i.a.createElement("div",{className:f.a.part2},Object(m.a)("amount")),i.a.createElement("div",{className:f.a.part3},Object(m.a)("action"))),r.map((function(t){var r=t.id,a=t.share,o=t.threshold,c=t.name,u=(t.address,t.token),s=t.joinStatus,p=t.frozen,v=t.status,h=t.type,g=(t.waitJoin,t.total),w=Object(d.e)(u);return 0===s?null:0===parseInt(v)?null:(3!==u&&(g=Object(y.d)(g)),i.a.createElement("div",{className:f.a.list_item,key:r},i.a.createElement("div",{className:f.a.part1},i.a.createElement(l.a,{token:u,className:f.a.coin_icon}),i.a.createElement("div",{className:f.a.coin_name},i.a.createElement("span",{className:f.a.name},c),2===h&&i.a.createElement("span",{className:f.a.wallet_no},o," | ",a))),i.a.createElement("div",{className:f.a.part2},i.a.createElement("span",{className:f.a.amount},g)," ",i.a.createElement("span",{className:f.a.unit},w)," ",p>0&&i.a.createElement("span",{className:f.a.focus},Object(m.a)("frozen"),": ",e?d.p:Object(y.d)(p),w)),i.a.createElement("div",{className:f.a.part3},i.a.createElement("div",{className:f.a.unarchive,onClick:function(){return n.unarchive(h,r)}},i.a.createElement(b.a,{type:"iconicon-send"})," ",Object(m.a)("unarchive")))))}))))})),window.sessionStorage.getItem(d.b.SEED)||e.history.push({pathname:"/user/login"}),n.state={joining:0,hideAmount:window.localStorage.getItem(d.b.HIDEAMOUNT)||0},n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.fetch()}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.type;t!==this.props.match.params.type&&this.fetch(t)}},{key:"fetch",value:function(e){return e||(e=0),this.props.dispatch({type:"service/queryArchive",payload:{type:e}})}},{key:"render",value:function(){return i.a.createElement("div",{className:f.a.container},this.renderInfo(),i.a.createElement(a.a,{spinning:this.props.loading},this.renderAssetsList()))}}])&&g(n.prototype,r),c&&g(n,c),t}(c.Component))||r}}]);