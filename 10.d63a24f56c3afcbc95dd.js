(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1197:function(e,t,n){"use strict";var r,a=n(0),o=n.n(a),c=n(170),i=(n(115),n(32)),u=n.n(i),s=n(11),l=n(171);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=Object(l.h)(),w=Object(c.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var t,n,r,a=b(c);function c(){return p(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.price,n=e.value,r=e.usd,a=e.exchangeRate,c=e.token,i=e.tokenAmount,l=(s.s[c]||s.s[1]).name.toLowerCase();if(7===c&&(l="bsv"),!t[l])return null;var f=null,p=j.currencyCode.toLowerCase();f=t[l][p]?t[l][p]:u()(t[l].usd).times(a[p]),r&&(f=u()(f).div(t[l].usd).multipliedBy(r));var y=0;return y=3===c||6===c?(y=(y=u()(n).times(f)).plus(i||0)).toFixed(2,1):u()(n).div(1e8).times(f).toFixed(2,1),o.a.createElement("span",null,j.symbol,y," ",j.currencyCode)}}])&&y(t.prototype,n),r&&y(t,r),c}(a.Component))||r;t.a=w},1198:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r),o=n(67),c=n(1105),i=n.n(c),u=n(11);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e);var t,n,r,c=y(s);function s(){return l(this,s),c.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props.className||i.a.icon,t=this.props.token||1;return a.a.createElement("div",{className:e},a.a.createElement(o.a,{type:Object(u.l)(t).icon}))}}])&&f(t.prototype,n),r&&f(t,r),s}(r.Component)},1207:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),a=n.n(r),o=(n(67),n(1107)),c=n.n(o);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var a=y(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(i,e);var t,n,r,o=f(i);function i(){return u(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.name,n=e.style;if(e.size,!t)return null;var r=t.substr(0,1).toUpperCase();return a.a.createElement("div",{className:c.a.logo,style:n},r)}}])&&s(t.prototype,n),r&&s(t,r),i}(r.Component)},1229:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));n(605);var r=n(172),a=n(0),o=n.n(a),c=n(1251),i=n.n(c),u=n(67),s=n(15),l=n(1110),f=n.n(l);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var a=v(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(l,e);var t,n,a,c=d(l);function l(){return y(this,l),c.apply(this,arguments)}return t=l,(n=[{key:"onCopySuccess",value:function(){r.a.success(Object(s.a)("copied"))}},{key:"render",value:function(){var e=this.props.label?this.props.label:o.a.createElement(u.a,{type:"iconcopy"});return o.a.createElement(i.a,{component:"span",onSuccess:this.onCopySuccess.bind(this),"data-clipboard-text":this.props.text,className:f.a.clipboard},e)}}])&&m(t.prototype,n),a&&m(t,a),l}(a.Component)},1283:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));n(610);var r,a=n(304),o=(n(606),n(299)),c=n(0),i=n.n(c),u=n(170),s=n(171),l=n(33),f=n(67),p=n(1116),y=n.n(p),m=n(15);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){d(o,r,a,c,i,"next",e)}function i(e){d(o,r,a,c,i,"throw",e)}c(void 0)}))}}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var a=g(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=Object(u.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return k(k(k({},t),n),{},{partiesLoading:r["wallet/queryParties"]||r["wallet/checkOnline"]||!1})}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(b,e);var t,n,r,c,u,p=j(b);function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),(t=p.call(this,e)).state={loading:!1},t}return t=b,(n=[{key:"componentDidMount",value:(u=h(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.checkStatus();case 1:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"checkStatus",value:(c=h(regeneratorRuntime.mark((function e(){var t,n,r,a,o,c,i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.currentWallet,r=t.dispatch,this.setState({loading:!0}),n.parties){e.next=5;break}return e.next=5,r({type:"wallet/queryParties",payload:{id:n.id}});case 5:if(0!==n.status){e.next=8;break}return e.next=8,r({type:"wallet/checkOnline",payload:{id:n.id,users:n.parties}});case 8:if(a=this.props,o=a.approve,c=a.txid,i=n.parties,!(o&&o.length>0)){e.next=15;break}return e.next=13,l.a.querySignDetail(c);case 13:u=e.sent,i.forEach((function(e,t){i[t].time="";for(var n=0;n<u.length;n++)e.uid===u[n].uid&&(i[t].time=u[n].createtime,i[t].status=u[n].status)}));case 15:this.setState({parties:i}),this.setState({loading:!1});case 17:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.currentWallet,n=e.visible,r=e.partiesLoading,c=e.cancel,u=e.approve,l=e.st,p=t.name,b=t.share,d=t.status,h=t.createtime,v=this.state,O=v.parties,j=v.loading;return i.a.createElement(a.a,{width:600,title:null,visible:n,footer:null,onCancel:c},i.a.createElement("div",{className:y.a.body},i.a.createElement("div",{className:y.a.title},"".concat(p," - ").concat(Object(m.a)("key_share_members"))),i.a.createElement("div",{className:y.a.desc},Object(m.a)("created_on")," ",Object(s.d)(h)," | ",b," ",Object(m.a)("members")," ",u&&"| ".concat(u.length," ").concat(Object(m.a)("signee_signed"))),i.a.createElement(o.a,{spinning:r||j},O&&O.map((function(e,t){var n=e.user,r=e.online,a=e.uid,o=e.time;if(n)return 0===d?i.a.createElement("div",{className:y.a.item,key:n},i.a.createElement(f.a,{type:r?"iconicon-keyshare-member-online":"iconicon-keyshare-member-offline"}),i.a.createElement("span",{className:y.a.no},t+1),i.a.createElement("span",{className:y.a.email},n),1===e.status?i.a.createElement("span",{className:y.a.joined},Object(m.a)("joined").toUpperCase()):i.a.createElement("span",{className:y.a.pending},Object(m.a)("pending").toUpperCase())):i.a.createElement("div",{className:y.a.item,key:n},r?i.a.createElement(f.a,{type:"iconicon-keyshare-member-online"}):i.a.createElement(f.a,{type:"iconicon-keyshare-member-offline"}),i.a.createElement("span",{className:y.a.no},t+1),i.a.createElement("span",{className:y.a.email},n),u&&i.a.createElement("span",{className:y.a.time},Object(s.d)(o)),u&&(u.indexOf(a)>-1?i.a.createElement("span",{className:y.a.signed},Object(m.a)("signed").toUpperCase()):i.a.createElement("span",{className:y.a.pending},Object(m.a)(2===l?"unsigned2":"unsigned").toUpperCase())))})))))}}])&&v(t.prototype,n),r&&v(t,r),b}(c.Component))||r},622:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));n(1192);var r,a,o,c=n(1196),i=(n(605),n(172)),u=(n(1193),n(1195)),s=n(0),l=n.n(s),f=n(170),p=n(58),y=n(171),m=n(1197),b=n(67),d=n(1198),h=n(1207),v=n(1133),O=n.n(v),j=n(15),w=n(1283),g=n(301),E=n(11),k=n(1229);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw o}}}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function R(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){x(o,r,a,c,i,"next",e)}function i(e){x(o,r,a,c,i,"throw",e)}c(void 0)}))}}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=q(e);if(t){var a=q(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return I(this,n)}}function I(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?T(e):t}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){B(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=u.a.Item,M=(r=u.a.create(),a=Object(f.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return A(A(A({},t),n),{},{loading:r["service/queryWalletById"]||r["wallet/queryParties"]||r["service/queryPaymailById"]})})),Object(p.withRouter)(o=r(o=a(o=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(s,e);var t,n,r,a,o=D(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),B(T(t=o.call(this,e)),"gotoBack",(function(){var e=t.props.match.params,n=e.id,r=e.token,a=e.tk;a?t.props.history.push({pathname:"/money/list/".concat(n,"/").concat(r,",").concat(a)}):t.props.history.push({pathname:"/money/list/".concat(n)})})),B(T(t),"showMembers",(function(){t.setState({visible:!0})})),B(T(t),"hideMembers",(function(){t.setState({visible:!1})})),B(T(t),"editPaymail",(function(e){var n=t.props,r=n.currentWallet,a=n.userid,o=r.type,c=r.founderId;2===parseInt(o)&&c!==a?t.props.history.push({pathname:"/money/paymail_view/".concat(e)}):t.props.history.push({pathname:"/money/paymail/".concat(e)})})),B(T(t),"setName",(function(){t.setState({editing:!0})})),B(T(t),"handleSubmit",(function(e){e.preventDefault();var n=t.props,r=n.currentWallet,a=n.dispatch,o=n.match,c=n.form,u=o.params.id;c.validateFields(function(){var e=R(regeneratorRuntime.mark((function e(n,o){var c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=9;break}if((c=o.name.trim())!==r.name){e.next=4;break}return e.abrupt("return",t.setState({editing:!1}));case 4:return s=A(A({},o),{},{wid:parseInt(u)}),e.next=7,a({type:"service/setName",payload:s});case 7:e.sent&&(i.a.success(Object(j.a)("edit_name_success")),r.name=c,a({type:"wallet/saveCurrent",payload:r}),t.setState({editing:!1}));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())})),B(T(t),"archived",R(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.match.params.id,r=t.props.currentWallet.type,e.next=4,t.props.dispatch({type:"service/archive",payload:{wid:parseInt(n)}});case 4:if(a=e.sent){e.next=7;break}return e.abrupt("return",i.a.error(Object(j.a)("failure")));case 7:if(401!==a.code){e.next=9;break}return e.abrupt("return",i.a.error(Object(j.a)("failure")+Object(j.a)("archiveWithoutPermission")));case 9:if(402!==a.code){e.next=11;break}return e.abrupt("return",i.a.error(Object(j.a)("failure")+Object(j.a)("hasBalance")));case 11:if(403!==a.code){e.next=13;break}return e.abrupt("return",i.a.error(Object(j.a)("failure")+Object(j.a)("hasPaymail")));case 13:return i.a.success(Object(j.a)("archived_success")),e.next=16,t.props.dispatch({type:"service/updateWallet",payload:{type:parseInt(r)}});case 16:t.props.history.push({pathname:"/money/home/0"});case 17:case"end":return e.stop()}}),e)})))),t.init(),t.state={visible:!1,editing:!1},t}return t=s,(n=[{key:"init",value:(a=R(regeneratorRuntime.mark((function e(){var t,n,r,a,o,c,i,u,s,l,f,p,y,m,b,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.currentWallet,n=this.props,r=n.dispatch,a=n.match,o=parseInt(a.params.id),t.id===o){e.next=7;break}return e.next=6,r({type:"service/queryWalletById",payload:{wid:o}});case 6:t=e.sent;case 7:if(i=(c=t).type,u=c.token,l=(s=t).paymail,f=s.parties,p=s.founder,y=s.founderId,m=s.uid,1!==u){e.next=16;break}if(l&&!(l.length<1)){e.next=16;break}return e.next=13,r({type:"service/queryPaymailById",payload:{wid:o}});case 13:return l=e.sent,e.next=16,r({type:"wallet/saveCurrent",payload:A(A({},t),{},{paymail:l})});case 16:if(2!==parseInt(i)){e.next=28;break}if(f&&!(f.length<1)){e.next=23;break}return e.next=20,r({type:"wallet/queryParties",payload:{id:o}});case 20:return f=e.sent,e.next=23,r({type:"wallet/saveCurrent",payload:A(A({},t),{},{parties:f})});case 23:if(!(f&&f.length>0)||y){e.next=28;break}b=_(f);try{for(b.s();!(d=b.n()).done;)(h=d.value).uid===m&&(p=h.user,y=h.uid)}catch(e){b.e(e)}finally{b.f()}return e.next=28,r({type:"wallet/saveCurrent",payload:A(A({},t),{},{founder:p,founderId:y})});case 28:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props,n=t.currentWallet,r=t.loading;if(!n||!n.id||r)return l.a.createElement(g.a,null);var a=this.props,o=a.form,i=a.userid,s=a.wallets,f=a.match,p=n.id,v=n.createtime,P=n.name,_=n.type,S=n.token,x=n.paymail,R=n.founder,N=n.founderId,C=f.params,D=C.tk,I=C.token;I="0"===I?D:I;var T,q=n.total,W=o.getFieldDecorator,A=Object(E.e)(S);3!==S&&6!==S&&(q=Object(y.e)(q)),x&&x.length>0&&((T=x.find((function(e){return 1===e.main})))||(T=x[0]));var B=this.state.visible;return l.a.createElement("div",{className:O.a.container},l.a.createElement("div",{className:O.a.detail},l.a.createElement("div",{className:O.a.detail_container},D?l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement(h.a,{name:D})," "):l.a.createElement(d.a,{token:S}),l.a.createElement("div",{className:O.a.label},Object(j.a)("wallet_name")),l.a.createElement(u.a,{hideRequiredMark:!0},this.state.editing?l.a.createElement("div",{className:O.a.form},l.a.createElement(F,null,W("name",{initialValue:P,rules:[{required:!0}]})(l.a.createElement(c.a,{addonAfter:l.a.createElement("div",{onClick:this.handleSubmit},Object(j.a)("save"))})))):l.a.createElement("div",{className:O.a.value},P," ",(1===_||2===_&&i===N)&&l.a.createElement("span",{className:O.a.op_icon,onClick:this.setName},l.a.createElement(b.a,{type:"iconpencil"})))),2===_&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:O.a.label},Object(j.a)("key_share_members")),l.a.createElement("div",{className:O.a.value,onClick:this.showMembers,style:{cursor:"pointer"}},Object(j.a)("check_status")," ",l.a.createElement("span",{className:O.a.op_icon},l.a.createElement(b.a,{type:"iconicon-keyshare-member-online"}))),l.a.createElement("div",{className:O.a.label},Object(j.a)("wallet_owner")),l.a.createElement("div",{className:O.a.value},R)),1===S&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:O.a.label},Object(j.a)("wallet_paymail")),x&&x.length>0&&l.a.createElement("div",{className:O.a.value},T.name,"@","volt.id"),l.a.createElement("div",{onClick:function(){return e.editPaymail(p)},className:O.a.edit_paymail},2===_&&i!==N?Object(j.a)("view_paymail"):Object(j.a)("edit_paymail"))),l.a.createElement("div",{className:O.a.label},Object(j.a)("time_created")),l.a.createElement("div",{className:O.a.value1},Object(y.d)(v)),l.a.createElement("div",{className:O.a.label},Object(j.a)("current_balance")),l.a.createElement("div",{className:O.a.value1},q," ",A," | ",l.a.createElement(m.a,{token:S,value:n.total})),D&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:O.a.label},"Token ID"),l.a.createElement("div",{className:O.a.value1},I||D," ",l.a.createElement(k.a,{text:I||D}))),(1===_&&s[1].length>1||2==_)&&l.a.createElement("div",{className:O.a.label},l.a.createElement("span",{className:O.a.archived,onClick:this.archived},Object(j.a)("archived_account"))),l.a.createElement("span",{className:O.a.goback,onClick:this.gotoBack}," ",Object(j.a)("cancel")),B&&l.a.createElement(w.a,{visible:B,cancel:this.hideMembers}))))}}])&&N(t.prototype,n),r&&N(t,r),s}(s.Component))||o)||o)||o)}}]);