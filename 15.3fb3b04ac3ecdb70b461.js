(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1198:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(0),a=n.n(r),o=n(67),c=n(1105),i=n.n(c),u=n(11);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e);var t,n,r,c=m(s);function s(){return l(this,s),c.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props.className||i.a.icon,t=this.props.token||1;return a.a.createElement("div",{className:e},a.a.createElement(o.a,{type:Object(u.l)(t).icon}))}}])&&f(t.prototype,n),r&&f(t,r),s}(r.Component)},624:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));n(606);var r,a=n(299),o=(n(605),n(172)),c=n(0),i=n.n(c),u=n(170),s=n(58),l=n(1198),f=n(1139),p=n.n(f),m=n(15),y=n(11),b=n(171),h=n(67);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=_(e);if(t){var a=_(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=Object(u.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return P(P(P({},t),n),{},{loading:r["service/queryArchive"]})}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(u,e);var t,n,r,c=w(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),k(g(t=c.call(this,e)),"renderWalletMenu",(function(){var e=parseInt(t.props.match.params.type)||0;return i.a.createElement("div",{className:p.a.menu_list},i.a.createElement("div",{className:p.a.wallet_type},y.t.map((function(t,n){return i.a.createElement("div",{key:t.key,className:n===e?Object(b.j)(p.a.selected,p.a.wallet_type_item):p.a.wallet_type_item},i.a.createElement(s.Link,{to:"/me/archived/".concat(n)},t.text))}))))})),k(g(t),"gotoBack",(function(){t.props.history.push({pathname:"/me"})})),k(g(t),"renderInfo",(function(){return i.a.createElement("div",{className:p.a.info},i.a.createElement("div",{className:p.a.title},i.a.createElement("h1",null,Object(m.a)("manage_archived_accounts")),i.a.createElement("div",{className:p.a.cancel,onClick:t.gotoBack},Object(m.a)("cancel"))),t.renderWalletMenu())})),k(g(t),"unarchive",function(){var e,n=(e=regeneratorRuntime.mark((function e(n,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.dispatch({type:"service/unArchive",payload:{wid:parseInt(r)}});case 2:if(a=e.sent){e.next=5;break}return e.abrupt("return",o.a.error(Object(m.a)("failure")));case 5:if(401!==a.code){e.next=7;break}return e.abrupt("return",o.a.error(Object(m.a)("failure")+Object(m.a)("archiveWithoutPermission")));case 7:o.a.success(Object(m.a)("restore_success")),t.props.history.push({pathname:"/money/list/".concat(r)});case 9:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){d(o,r,a,c,i,"next",e)}function i(e){d(o,r,a,c,i,"throw",e)}c(void 0)}))});return function(e,t){return n.apply(this,arguments)}}()),k(g(t),"renderAssetsList",(function(){var e=t.state.hideAmount,n=t.props,r=(n.currencyIndex,n.archiveWalletList);return i.a.createElement("div",{className:p.a.list_container},i.a.createElement("div",{className:p.a.list_content},i.a.createElement("div",{className:p.a.item_head},i.a.createElement("div",{className:p.a.part1},Object(m.a)("archived_accounts")),i.a.createElement("div",{className:p.a.part2},Object(m.a)("amount")),i.a.createElement("div",{className:p.a.part3},Object(m.a)("action"))),r.map((function(n){var r=n.id,a=n.share,o=n.threshold,c=n.name,u=(n.address,n.token),s=n.joinStatus,f=n.frozen,v=n.status,d=n.type,O=(n.waitJoin,n.total),j=Object(y.e)(u);return 0===s||0===parseInt(v)?null:(3!==u&&(O=Object(b.e)(O)),i.a.createElement("div",{className:p.a.list_item,key:r},i.a.createElement("div",{className:p.a.part1},i.a.createElement(l.a,{token:u,className:p.a.coin_icon}),i.a.createElement("div",{className:p.a.coin_name},i.a.createElement("span",{className:p.a.name},c),2===d&&i.a.createElement("span",{className:p.a.wallet_no},o," | ",a))),i.a.createElement("div",{className:p.a.part2},i.a.createElement("span",{className:p.a.amount},O)," ",i.a.createElement("span",{className:p.a.unit},j)," ",f>0&&i.a.createElement("span",{className:p.a.focus},Object(m.a)("frozen"),": ",e?y.o:Object(b.e)(f),j)),i.a.createElement("div",{className:p.a.part3},i.a.createElement("div",{className:p.a.unarchive,onClick:function(){return t.unarchive(d,r)}},i.a.createElement(h.a,{type:"iconicon-send"})," ",Object(m.a)("unarchive")))))}))))})),window.sessionStorage.getItem(y.b.SEED)||e.history.push({pathname:"/user/login"}),t.state={joining:0,hideAmount:window.localStorage.getItem(y.b.HIDEAMOUNT)||0},t}return t=u,(n=[{key:"componentDidMount",value:function(){this.fetch()}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.type;t!==this.props.match.params.type&&this.fetch(t)}},{key:"fetch",value:function(e){return e||(e=0),this.props.dispatch({type:"service/queryArchive",payload:{type:e}})}},{key:"render",value:function(){return i.a.createElement("div",{className:p.a.container},this.renderInfo(),i.a.createElement(a.a,{spinning:this.props.loading},this.renderAssetsList()))}}])&&O(t.prototype,n),r&&O(t,r),u}(c.Component))||r}}]);