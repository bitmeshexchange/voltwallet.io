(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1097:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return y})),n.d(t,"a",(function(){return m})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return h})),n.d(t,"f",(function(){return b}));n(1109);var r=n(3),a=n.n(r),o=n(58),i=n.n(o),c=n(283);window.location;function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),a()(e).format(t)):e}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";if(!e)return"";var n=e;"number"==typeof e?n=new Date(e):"string"==typeof e&&(n=new Date(+e));var r={"y+":n.getFullYear(),"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),"S+":n.getMilliseconds()};for(var a in r)if(new RegExp("("+a+")").test(t))if("y+"===a)t=t.replace(RegExp.$1,(""+r[a]).substr(4-RegExp.$1.length));else if("S+"===a){var o=RegExp.$1.length;o=1===o?3:o,t=t.replace(RegExp.$1,("00"+r[a]).substr((""+r[a]).length-1,o))}else t=t.replace(RegExp.$1,1===RegExp.$1.length?r[a]:("00"+r[a]).substr((""+r[a]).length));return t}var l=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function p(e){return!!e&&l.test(e)}function f(){return Array.prototype.slice.call(arguments).join(" ")}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e)return e.length<t[0]+t[1]?e:e.substr(0,t[0])+"****"+e.substr(-t[1],t[1])}var m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=e.toString().split(".");return e.toString().indexOf("e")>-1||n[1]&&n[1].length>t?i()(e).toFixed(t):e},d=function(e){return i()(e).div(1e8).toString()},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return i()(e).div(Math.pow(10,t)).toString()},b=function(){var e=c.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,n=c.a[t];return n||(window.localStorage.removeItem("VoltLocalCurrencyIndex"),n=c.a[e]),n}},1112:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(1),a=n.n(r),o=n(137),i=n(1045),c=n.n(i),s=n(15);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,f(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.className||c.a.icon,t=this.props.token||1;return a.a.createElement("div",{className:e},a.a.createElement(o.a,{type:Object(s.m)(t).icon}))}}])&&l(n.prototype,r),i&&l(n,i),t}(r.Component)},1122:function(e,t,n){"use strict";var r,a=n(1),o=n.n(a),i=n(164),c=(n(283),n(58)),s=n.n(c),u=n(15),l=n(1097);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=Object(l.f)(),v=Object(i.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({},e.wallet)}))(r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,m(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.price,n=e.value,r=e.usd,a=e.exchangeRate,i=e.token,c=e.tokenAmount,l=u.s[i||1].name.toLowerCase();if(!t[l])return null;var p=null,f=b.currencyCode.toLowerCase();p=t[l][f]?t[l][f]:s()(t[l].usd).times(a[f]),r&&(p=s()(p).div(t[l].usd).multipliedBy(r));var y=0;return y=3===i?(y=(y=s()(n).times(p)).plus(c||0)).toFixed(2,1):s()(n).div(1e8).times(p).toFixed(2,1),o.a.createElement("span",null,b.symbol,y," ",b.currencyCode)}}])&&f(n.prototype,r),a&&f(n,a),t}(a.Component))||r;t.a=v},1137:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(1),a=n.n(r),o=n(1044),i=n.n(o);n(19),n(1106);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){s(o,r,a,i,c,"next",e)}function c(e){s(o,r,a,i,c,"throw",e)}i(void 0)}))}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,f(t).call(this,e))).state={ready:!1},n}var n,r,o,c,s,m,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:(d=u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.currentWallet();case 1:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})},{key:"getWalletId",value:function(e,t){if(void 0===t)for(var n=0;n<e.length;n++){t=e[n].id;break}return t}},{key:"currentWallet",value:(m=u(regeneratorRuntime.mark((function e(){var t,n,r,a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.dispatch,r=t.match,a=this.props.currentWallet,o=r.params.id,a.id&&a.id===parseInt(o)){e.next=7;break}return e.next=6,n({type:"service/queryWalletById",payload:{wid:parseInt(o)}});case 6:a=e.sent;case 7:if(1!==a.type){e.next=13;break}if(a.address||a.deposit){e.next=13;break}return e.next=11,n({type:"service/createSingleWalletAddress",payload:{wid:o}});case 11:(i=e.sent)&&n({type:"wallet/saveCurrentAddress",payload:{address:i}});case 13:this.ready&&this.ready(parseInt(o));case 14:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)})},{key:"saveCurrentWallet",value:(s=u(regeneratorRuntime.mark((function e(t,n){var r,a,o,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props.dispatch,t=parseInt(t)||1,(a=this.props.wallets[t])&&!(a.length<1)){e.next=8;break}return e.next=6,r({type:"service/queryWallet",payload:{type:t}});case 6:(a=e.sent).length>0&&a.forEach(function(){var e=u(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==parseInt(t.type)||t.deposit&&t.deposit.address){e.next=3;break}return e.next=3,r({type:"service/createSingleWalletAddress",payload:{wid:t.id}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 8:return o=-1,a&&a.length>0&&(o=this.getWalletId(a,n)),i=this.props.allWallets[o],e.next=13,this.props.dispatch({type:"wallet/save",payload:{currentId:o,currentWallet:i}});case 13:if(!i||1!==parseInt(i.type)||i.deposit&&i.deposit.address){e.next=16;break}return e.next=16,r({type:"service/createSingleWalletAddress",payload:{wid:o}});case 16:this.setState({ready:!0}),(c=document.getElementById("J_currentWallet"))&&c.scrollIntoView(),this.ready&&this.ready(parseInt(o));case 20:case"end":return e.stop()}}),e,this)}))),function(e,t){return s.apply(this,arguments)})},{key:"getWalletDetail",value:(c=u(regeneratorRuntime.mark((function e(t){var n,r,a,o,i,c,s,u,l,p,f,y,m,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,r=n.dispatch,a=n.allWallets,o=n.currentWallet,i=n.ercTokenTimestamp,c=n.ercToken,s=a[t],o&&o.id==t&&(s=o),s){e.next=5;break}return e.abrupt("return");case 5:if(3===o.token&&c.length<1&&r({type:"wallet/queryErcToken",payload:{timestamp:i}}),s.parties&&!(s.parties.length<1)){e.next=11;break}return e.next=9,r({type:"wallet/queryParties",payload:{id:t}});case 9:u=e.sent,s.parties=u;case 11:if(s.paymail&&!(s.paymail.length<1)){e.next=16;break}return e.next=14,r({type:"service/queryPaymailById",payload:{wid:t}});case 14:l=e.sent,s.paymail=l;case 16:if(!(s.parties&&s.parties.length>0)){e.next=36;break}for(p=!0,f=!1,y=void 0,e.prev=20,m=s.parties[Symbol.iterator]();!(p=(d=m.next()).done);p=!0)(h=d.value).uid===s.uid&&(s.founder=h.user,s.founderId=h.uid);e.next=28;break;case 24:e.prev=24,e.t0=e.catch(20),f=!0,y=e.t0;case 28:e.prev=28,e.prev=29,p||null==m.return||m.return();case 31:if(e.prev=31,!f){e.next=34;break}throw y;case 34:return e.finish(31);case 35:return e.finish(28);case 36:r({type:"wallet/saveCurrent",payload:s});case 37:case"end":return e.stop()}}),e,this,[[20,24,28,36],[29,,31,35]])}))),function(e){return c.apply(this,arguments)})},{key:"loadTransactions",value:function(e){if(e&&-1!==e){var t=this.props,n=t.currentWallet,r=t.match.params.tk,a={wid:e};3===n.token&&(a.token=r||"eth"),this.props.dispatch({type:"service/queryTransaction",payload:a})}else this.props.dispatch({type:"wallet/saveTransaction",payload:{transactions:[]}})}},{key:"render",value:function(){return a.a.createElement("div",{className:i.a.container},a.a.createElement("div",{className:i.a.detail}))}}])&&l(n.prototype,r),o&&l(n,o),t}(r.Component)},1238:function(e,t,n){"use strict";var r,a=n(1),o=n.n(a),i=n(164),c=(n(283),n(58)),s=n.n(c),u=n(15),l=n(1097);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=Object(l.f)(),v=Object(i.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({},e.wallet)}))(r=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,m(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"change",value:function(e,t){var n=this.props.price,r=(u.s[e]||u.s[1]).name.toLowerCase(),a=null,o=b.currencyCode.toLowerCase();return a=n[r][o]?n[r][o]:s()(n[r].usd).times(exchangeRate[o]),3===e?s()(t).times(a).toFixed(2,1):s()(t).div(1e8).times(a).toFixed(2,1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.wallets,r=t.type;if(!t.price.bsv)return null;var a=s()(0);return n[r]&&n[r].forEach((function(t){0!==parseInt(r)&&parseInt(r)!==t.type||(a=a.plus(e.change(t.token,t.total)),3===t.token&&(a=a.plus(t.usd)))})),o.a.createElement("span",null,b.symbol,a.toString()," ",b.currencyCode)}}])&&f(n.prototype,r),a&&f(n,a),t}(a.Component))||r;t.a=v},582:function(e,t,n){"use strict";n.r(t);n(1168);var r,a,o=n(1173),i=(n(564),n(284)),c=(n(569),n(290)),s=n(1),u=n.n(s),l=n(164),p=n(74),f=n(15),y=n(1097),m=n(1112),d=n(1122),h=(n(1238),n(285)),b=n(137),v=n(1137),g=(n(1124),n(1125)),w=(n(565),n(165)),k=n(19),O=n(1065),E=n.n(O);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){_(o,r,a,i,c,"next",e)}function c(e){_(o,r,a,i,c,"throw",e)}i(void 0)}))}}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R,I=(r=Object(l.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){T(e,t,n[t])}))}return e}({},e.user,e.wallet,{loading:e.loading.effects["service/createSingleWallet"]})})),Object(p.withRouter)(a=r(a=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=C(t).call(this,e),n=!a||"object"!==j(a)&&"function"!=typeof a?P(r):a,T(P(n),"removeToken",function(){var e=S(regeneratorRuntime.mark((function e(t,r){var a,o,i,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props,o=a.match,i=a.dispatch,c=a.createCallback,e.next=3,i({type:"service/removeToken",payload:{token:t.toLowerCase(),wid:parseInt(o.params.id)}});case 3:e.sent?((s=n.state.showList)[r].status=0,n.setState({showList:s}),c(!0)):w.a.error(Object(k.a)("remove_token_error"));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),T(P(n),"addToken",function(){var e=S(regeneratorRuntime.mark((function e(t,r){var a,o,i,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props,o=a.match,i=a.dispatch,c=a.createCallback,e.next=3,i({type:"service/addToken",payload:{token:t.toLowerCase(),wid:parseInt(o.params.id)}});case 3:e.sent?((s=n.state.showList)[r].status=1,n.setState({showList:s}),c(!0)):w.a.error(Object(k.a)("add_token_error"));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),T(P(n),"handleChange",(function(e){var t=e.target.value;if(!t)return n.setState({showList:n.state.userToken});var r=n.state.tokens,a=n.searchByKeywords(t,r);n.setState({showList:a})})),n.state={posting:!1,loading:!1,showList:[],tokens:[],userToken:[]},n}var n,r,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:(o=S(regeneratorRuntime.mark((function e(){var t,n,r,a,o,i,c,s,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.ercToken,r=t.ercTokenTimestamp,a=this.props,o=a.currentWallet,i=a.dispatch,c=o.balance.balance,!(n.length<1)){e.next=11;break}return this.setState({loading:!0}),e.next=7,i({type:"wallet/queryErcToken",payload:{timestamp:r}});case 7:s=e.sent,n=s.tokens,r=new Date(s.timestamp).getTime(),this.setState({loading:!1});case 11:u=JSON.parse(JSON.stringify(n)),c.forEach((function(e){var t=u.findIndex((function(t){return t.symbol.toLowerCase()===e.token}));t>-1&&(u[t].status=1),Object.assign(e,u[t])})),this.setState({showList:c,tokens:u,userToken:c});case 14:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"throttle",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=(new Date).getTime();return function(){var r=(new Date).getTime();r-n>t&&(e(),n=r)}}},{key:"escapeRegExpWildcards",value:function(e){var t=/([\(\[\{\\\^\$\}\]\)\?\*\+\.])/gim;return e&&t.test(e)?e.replace(t,"\\$1"):e}},{key:"searchByKeywords",value:function(e,t){var n=new RegExp(".*?"+this.escapeRegExpWildcards(e)+".*?","img");return t.filter((function(t){return n.test(t.name)||n.test(t.symbol)||e==t.address}))}},{key:"render",value:function(){var e=this,t=this.state.showList;return u.a.createElement("div",{className:E.a.container},u.a.createElement("div",{className:E.a.header},u.a.createElement("div",{className:E.a.title},Object(k.a)("add_token_accounts"))),u.a.createElement("div",{className:E.a.search},u.a.createElement(g.a,{className:E.a.search_input,placeholder:Object(k.a)("search_token_holder"),onChange:this.handleChange})),u.a.createElement("div",{className:E.a.token_list_wrap},u.a.createElement("div",{className:E.a.user_token_list},u.a.createElement("div",{className:E.a.token},u.a.createElement(m.a,{token:3,className:E.a.coin_icon}),u.a.createElement("span",{className:E.a.token_name},u.a.createElement("span",{style:{fontWeight:"bold"}},"ETH")," | Ethereum")),t.map((function(t,n){var r=t.symbol,a=t.logoURI,o=t.name,i=(t.wid,t.id),c=t.status;if("eth"!==t.token)return u.a.createElement("div",{className:E.a.token,key:r+i},u.a.createElement("img",{src:a,width:"25",className:E.a.token_img}),u.a.createElement("span",{className:E.a.token_name},u.a.createElement("span",{style:{fontWeight:"bold"}},r)," | ",o),1===c?u.a.createElement("span",{onClick:function(){return e.removeToken(r,n)}},u.a.createElement(b.a,{type:"iconicon-tokenswap-selected",style:{fontSize:"25px"}})):u.a.createElement("span",{onClick:function(){return e.addToken(r,n)}},u.a.createElement("span",{className:E.a.circle})))})))))}}])&&x(n.prototype,r),a&&x(n,a),t}(s.Component))||a)||a),W=n(1055),D=n.n(W);n(58);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function M(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){A(o,r,a,i,c,"next",e)}function c(e){A(o,r,a,i,c,"throw",e)}i(void 0)}))}}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",(function(){return F}));var F=Object(l.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){U(e,t,n[t])}))}return e}({},t,n,{loading:r["service/queryWalletById"]||r["wallet/queryErcToken"]||r["wallet/saveCurrent"],creatingAddress:r["service/createSingleWalletAddress"]||!1})}))(R=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=$(t).call(this,e),n=!a||"object"!==L(a)&&"function"!=typeof a?B(r):a,U(B(n),"switchDisplay",(function(){var e=n.state.hideAmount;n.props.dispatch({type:"user/switchDisplay"}),n.setState({hideAmount:!e})})),U(B(n),"showDrawer",(function(){n.setState({drawer_visible:!0})})),U(B(n),"closeDrawer",(function(){n.setState({drawer_visible:!1})})),U(B(n),"renderTokenName",(function(e){e.id;var t=e.token,r=e.wid,a=e.logoURI,o=(e.symbol,e.name),i=null,c=null;return"eth"===t?(i=u.a.createElement(m.a,{token:3,className:D.a.coin_icon}),c="".concat(f.s[3].name," | ").concat(f.s[3].fullname)):(i=u.a.createElement("img",{src:a,width:"25",className:D.a.token_img}),c=o?"".concat(t.toUpperCase()," | ").concat(o):t.toUpperCase()),u.a.createElement("div",{className:D.a.part1,onClick:function(){return n.gotoMessageList(r,t)}},i,u.a.createElement("div",{className:D.a.coin_name},u.a.createElement("div",{className:D.a.name_box},u.a.createElement("div",{className:D.a.name},c))))})),U(B(n),"gotoInfoPage",(function(e){n.props.history.push({pathname:"/money/walletinfo/".concat(e)})})),U(B(n),"renderInfo",(function(){var e=n.props,t=e.match,r=e.currentWallet,a=t.params.id,o=n.state.hideAmount,i=o?u.a.createElement(b.a,{type:"iconhide"}):u.a.createElement(b.a,{type:"iconshow"});return u.a.createElement("div",{className:D.a.info},u.a.createElement(m.a,{token:3}),u.a.createElement("div",{className:D.a.wallet_name,onClick:function(){return n.gotoInfoPage(a)}},r.name," ",u.a.createElement("span",null,u.a.createElement(b.a,{type:"iconwallet-info"}))),u.a.createElement("div",{className:D.a.total_assets},u.a.createElement("div",{className:D.a.total},o?f.p:u.a.createElement(d.a,{value:r.total,tokenAmount:r.usd,token:3})," ",u.a.createElement("span",{onClick:n.switchDisplay,className:D.a.show_balance},i))),u.a.createElement("div",{className:D.a.add},u.a.createElement("a",{className:"ant-dropdown-link",onClick:n.showDrawer},u.a.createElement(b.a,{type:"iconcreatewallet",style:{fontSize:18}}))))})),U(B(n),"gotoMessageList",(function(e,t){n.props.history.push({pathname:"/money/list/".concat(e,"/").concat(t)})})),U(B(n),"gotoTransfer",(function(e,t){n.props.history.push({pathname:"/money/sendeth/".concat(e,"/").concat(t)})})),U(B(n),"gotoReceive",(function(e){n.props.history.push({pathname:"/money/receive/".concat(e)})})),U(B(n),"goHome",(function(){n.props.history.push({pathname:"/money/home/0"})})),n.state={joining:0,receiveModalVisible:!1,hideAmount:window.localStorage.getItem(f.b.HIDEAMOUNT)||0,drawer_visible:!1},n}var n,r,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,e),n=t,(r=[{key:"getWalletId",value:function(){return parseInt(this.props.match.params.id)}},{key:"ready",value:function(){this.getWalletDetail(this.getWalletId())}},{key:"componentDidMount",value:function(){this.updateEth()}},{key:"updateEth",value:(s=M(regeneratorRuntime.mark((function e(){var t,n,r,a,o,i=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading:!0}),t=[],n=this.props,r=n.dispatch,a=n.ercToken,o=n.ercTokenTimestamp,t.push(r({type:"service/queryWalletById",payload:{wid:this.getWalletId()}})),a.length<1&&t.push(r({type:"wallet/queryErcToken",payload:{timestamp:o}})),Promise.all(t).then(function(){var e=M(regeneratorRuntime.mark((function e(t){var n,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t[1]&&(a=t[1].tokens),t[0].balance&&((c=t[0].balance.balance).forEach((function(e,t){"eth"===e.token&&(n=e,o=t);var r=a.find((function(t){return e.token==t.symbol.toLowerCase()}));Object.assign(e,r)})),c.splice(o,1),c.unshift(n)),e.next=4,r({type:"wallet/saveCurrent",payload:t[0]});case 4:i.setState({loading:!1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"createCallback",value:function(e){this.updateEth()}},{key:"renderEthList",value:function(){var e=this,t=this.state.hideAmount,n=this.props.currentWallet;return n.id!==this.getWalletId()?u.a.createElement(h.a,null):u.a.createElement("div",{className:D.a.list_container,style:{height:413,padding:"25px 30px 0"}},n.balance&&n.balance.balance.map((function(n){var r=n.token,a=n.value,o=(n.address,n.wid);if(n.id,n.symbol,n.logoURI,o===e.getWalletId())return u.a.createElement("div",{className:D.a.list_item,key:r},e.renderTokenName(n),u.a.createElement("div",{className:D.a.part2},u.a.createElement("span",{className:D.a.amount},t?f.p:Object(y.a)(a))," ",u.a.createElement("span",{className:D.a.unit},r.toUpperCase())),u.a.createElement("div",{className:D.a.part3},u.a.createElement("div",{className:D.a.transfer,onClick:function(){return e.gotoTransfer(o,r)}},u.a.createElement(b.a,{type:"iconicon-send"})," ",Object(k.a)("transfer")),u.a.createElement("span",{className:D.a.receive,onClick:function(){return e.gotoReceive(o)}},u.a.createElement(b.a,{type:"iconreceive"})," ",Object(k.a)("collection"))))})))}},{key:"renderAddressCreating",value:function(){return u.a.createElement(c.a,{title:Object(k.a)("collection"),visible:this.props.creatingAddress,footer:null,onCancel:this.hideReceiveDialog},u.a.createElement("div",{className:D.a.qrcodeWrap},u.a.createElement(h.a,{className:D.a.loading_container}),u.a.createElement("p",null,"Generating address")))}},{key:"render",value:function(){var e=this,t=this.state.loading;return u.a.createElement("div",{className:D.a.container},u.a.createElement(i.a,{spinning:t},this.renderInfo(),this.renderEthList()),this.renderAddressCreating(),u.a.createElement("span",{className:D.a.goback,onClick:this.goHome}," ",Object(k.a)("back")),this.state.drawer_visible&&u.a.createElement(o.a,{width:400,title:"",placement:"right",closable:!1,onClose:this.closeDrawer,visible:this.state.drawer_visible,getContainer:!1,style:{position:"absolute"}},u.a.createElement(I,{createCallback:function(t){return e.createCallback(t)}})))}}])&&q(n.prototype,r),a&&q(n,a),t}(v.a))||R}}]);