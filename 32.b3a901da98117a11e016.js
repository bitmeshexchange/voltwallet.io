(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1134:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var r,a,o=n(0),c=n.n(o),i=n(170),u=n(67),l=n(1198),s=n(1120),f=n.n(s),p=n(17);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var a=w(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=(r=Object(i.connect)((function(e){return g({},e.wallet)})),Object(u.withRouter)(a=r(a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(u,e);var t,n,r,a,o,i=d(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),E(O(t=i.call(this,e)),"gotoBack",(function(){var e=t.props.match.params.id;t.props.history.push({pathname:"/money/walletinfo/".concat(e)})})),t.init(),t.state={currentMenuIndex:0,drawer_visible:!1},t}return t=u,(n=[{key:"init",value:(a=regeneratorRuntime.mark((function e(){var t,n,r,a,o,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.currentWallet,n=this.props,r=n.dispatch,a=n.match,o=parseInt(a.params.id),t.id===o){e.next=7;break}return e.next=6,r({type:"service/queryWalletById",payload:{wid:o}});case 6:t=e.sent;case 7:if(c=t.token,i=t.paymail,1!==c){e.next=16;break}if(i&&!(i.length<1)){e.next=16;break}return e.next=13,r({type:"service/queryPaymailById",payload:{wid:o}});case 13:return i=e.sent,e.next=16,r({type:"wallet/saveCurrent",payload:g(g({},t),{},{paymail:i})});case 16:case"end":return e.stop()}}),e,this)})),o=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=a.apply(e,t);function c(e){m(o,n,r,c,i,"next",e)}function i(e){m(o,n,r,c,i,"throw",e)}c(void 0)}))},function(){return o.apply(this,arguments)})},{key:"getWalletId",value:function(){return this.props.match.params.id}},{key:"render",value:function(){var e,t,n=this.props.currentWallet,r=n.paymail,a=n.token,o=this.state.currentMenuIndex;return r&&r.length>0&&(e=r.find((function(e){return 1===e.main})),t=r.filter((function(e){return 0===e.main})),e||(e=r[0],t=r.slice(1))),c.a.createElement("div",{className:f.a.container},c.a.createElement("div",{className:f.a.detail},c.a.createElement("div",{className:f.a.paymail_container},c.a.createElement(l.a,{token:a}),c.a.createElement("div",{className:f.a.title},Object(p.a)("wallet_paymail")),c.a.createElement("span",{className:f.a.goback,onClick:this.gotoBack}," ",Object(p.a)("cancel")),c.a.createElement("div",{className:f.a.tips},Object(p.a)("view_paymail_desc")),0===o&&c.a.createElement(c.a.Fragment,null,r&&r.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:f.a.label},Object(p.a)("primary_paymail")),c.a.createElement("div",{className:f.a.value},e?c.a.createElement("div",null,c.a.createElement("span",{className:f.a.name},e.name),"@","volt.id"):Object(p.a)("no_main_paymail"))):c.a.createElement("div",{className:f.a.tips},Object(p.a)("no_paymail")),t&&t.length>0&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:f.a.label},Object(p.a)("other_paymail")),c.a.createElement("div",{className:f.a.paymails},c.a.createElement("div",null,t.map((function(e,t){return c.a.createElement("div",{className:f.a.value,key:e.id},c.a.createElement("div",null,c.a.createElement("span",{className:f.a.name},e.name),"@","volt.id"),1===e.main&&c.a.createElement("div",{className:f.a.primary},Object(p.a)("primary_paymail")))})))))))))}}])&&b(t.prototype,n),r&&b(t,r),u}(o.Component))||a)||a)},1198:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(0),a=n.n(r),o=n(74),c=n(1106),i=n.n(c),u=n(11);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(l,e);var t,n,r,c=y(l);function l(){return s(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e=this.props.className||i.a.icon,t=this.props.token||1;return a.a.createElement("div",{className:e},a.a.createElement(o.a,{type:Object(u.l)(t).icon}))}}])&&f(t.prototype,n),r&&f(t,r),l}(r.Component)}}]);