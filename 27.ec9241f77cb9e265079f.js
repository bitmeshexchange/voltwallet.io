(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1078:function(e,t,r){"use strict";r.r(t);r(561);var n,a,o=r(282),i=(r(562),r(166)),c=r(1),s=r.n(c),u=r(165),l=r(1037),p=r.n(l),f=r(19),y=r(1131),d=(r(560),r(139)),m=r(75),b=(r(283),r(138)),h=r(1159),v=r.n(h),w=r(1221),g=r(1055),O=r.n(g),j=r(15);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var W,N,R=(n=Object(u.connect)((function(e){var t=e.user,r=e.wallet;e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){P(e,t,r[t])}))}return e}({},t,r)})),Object(m.withRouter)(a=n(a=function(e){function t(){var e,r,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return n=this,a=(e=x(t)).call.apply(e,[this].concat(i)),r=!a||"object"!==k(a)&&"function"!=typeof a?S(n):a,P(S(r),"gotoBack",(function(){var e=r.props.match.params.id;r.props.history.push({pathname:"/money/list/".concat(e)})})),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.currentWallet,t=e.paymail,r=e.token,n=e.address||e.deposit,a=Object(j.d)(r),o=null,i=void 0;t&&((i=t.find((function(e){return 1===e.main})))||(i=t[0])),o=n?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:O.a.tips},Object(f.a)("address_tips",a)),s.a.createElement("div",{className:O.a.qrcodeWrap},s.a.createElement(v.a,{value:n}),s.a.createElement("p",{className:O.a.address},n," ",n&&s.a.createElement(w.a,{text:n}))),t&&t.length>0&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:O.a.paymail_title},Object(f.a)("paymail_address")),s.a.createElement("p",{className:O.a.address},i.name,"@","volt.id"," ",i.name&&s.a.createElement(w.a,{text:"".concat(i.name,"@").concat("volt.id")})))):s.a.createElement("div",{className:O.a.wait},s.a.createElement("div",{className:O.a.qrcodeWrap},s.a.createElement(b.a,{type:"iconbsv1"})),s.a.createElement("div",{className:O.a.tips},Object(f.a)("inform_other")));var c=e.name;return s.a.createElement("div",{className:O.a.container},s.a.createElement("div",{className:O.a.title},c," ",Object(f.a)("address")),o,s.a.createElement(d.a,{onClick:this.gotoBack,type:"primary",className:"btn"},Object(f.a)("close")))}}])&&E(r.prototype,n),a&&E(r,a),t}(c.Component))||a)||a);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var D,M=(W=Object(u.connect)((function(e){var t=e.user,r=e.wallet;e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){B(e,t,r[t])}))}return e}({},t,r)})),Object(m.withRouter)(N=W(N=function(e){function t(){var e,r,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return n=this,a=(e=C(t)).call.apply(e,[this].concat(i)),r=!a||"object"!==I(a)&&"function"!=typeof a?A(n):a,B(A(r),"gotoBack",(function(){var e=r.props,t=e.match,n=e.currentWallet,a=e.history,o=t.params.id;3===n.token?a.push({pathname:"/money/eth/".concat(o)}):a.push({pathname:"/money/list/".concat(o)})})),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=(e.loading,e.address),r=this.props.currentWallet,n=r.paymail,a=r.token,o=Object(j.d)(a),i=r.name,c=void 0;return n&&((c=n.find((function(e){return 1===e.main})))||(c=n[0])),s.a.createElement("div",{className:O.a.container},s.a.createElement("div",{className:O.a.title},i," ",Object(f.a)("address")),s.a.createElement("div",{className:O.a.tips},Object(f.a)("address_tips",o)),s.a.createElement("div",{className:O.a.qrcodeWrap},s.a.createElement(v.a,{value:t}),s.a.createElement("p",{className:O.a.address},t," ",t&&s.a.createElement(w.a,{text:t}))),n&&n.length>0&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:O.a.paymail_title},Object(f.a)("paymail_address")),s.a.createElement("p",{className:O.a.address},c.name,"@","volt.id"," ",c.name&&s.a.createElement(w.a,{text:"".concat(c.name,"@").concat("volt.id")}))),s.a.createElement(d.a,{onClick:this.gotoBack,type:"primary",className:"btn"},Object(f.a)("close")))}}])&&T(r.prototype,n),a&&T(r,a),t}(c.Component))||N)||N);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t,r,n,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,a)}function V(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){J(o,n,a,i,c,"next",e)}function c(e){J(o,n,a,i,c,"throw",e)}i(void 0)}))}}function z(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function G(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"default",(function(){return Q}));var Q=Object(u.connect)((function(e){var t=e.wallet,r=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){L(e,t,r[t])}))}return e}({},t,{loading:r["service/queryWalletById"]||r.createMultiPartyAddress||r.createSingleWalletAddress})}))(D=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=G(this,H(t).call(this,e))).state={address:"",users:[]},r}var r,n,a,c,u,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,e),r=t,(n=[{key:"ready",value:(l=V(regeneratorRuntime.mark((function e(){var t,r,n,a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.currentWallet,r=t.type,n=t.token,a=t.address,o=t.deposit,3!==n){e.next=4;break}if(!a&&!o){e.next=4;break}return e.abrupt("return");case 4:return i=this.props.match.params.id,2===parseInt(r)?this.createMultiAddress():this.createSingleAddress(),e.next=8,this.getWalletDetail(parseInt(i));case 8:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"createSingleAddress",value:(u=V(regeneratorRuntime.mark((function e(){var t,r,n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,r=t.match,n=t.dispatch,a=r.params.id,e.next=4,n({type:"service/createSingleWalletAddress",payload:{wid:a}});case 4:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"createMultiAddress",value:(c=V(regeneratorRuntime.mark((function e(){var t,r,n,a,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,r=t.match,n=t.dispatch,a=r.params.id,e.next=4,n({type:"service/createMultiPartyAddress",payload:{wid:parseInt(a)}});case 4:return o=e.sent,e.next=7,n({type:"service/createMultiPartyAddress",payload:{wid:parseInt(a),type:2}});case 7:if(o.success){e.next=9;break}return e.abrupt("return",i.a.error("server_error"));case 9:(c=o.data.users)&&this.setState({users:c});case 11:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.loading,r=e.currentWallet,n=this.state.users,a=r.type,i=r.address,c=r.deposit,u=1===parseInt(a)?s.a.createElement(M,{address:i||c}):s.a.createElement(R,{users:n});return s.a.createElement("div",{className:p.a.container},s.a.createElement("div",{className:p.a.detail},s.a.createElement(o.a,{spinning:!!t},u)))}}])&&z(r.prototype,n),a&&z(r,a),t}(y.a))||D},1131:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(1),a=r.n(n),o=r(1037),i=r.n(o);r(19),r(1100);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t,r,n,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,a)}function u(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){s(o,n,a,i,c,"next",e)}function c(e){s(o,n,a,i,c,"throw",e)}i(void 0)}))}}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=p(this,f(t).call(this,e))).state={ready:!1},r}var r,n,o,c,s,d,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:(m=u(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.currentWallet();case 1:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)})},{key:"getWalletId",value:function(e,t){if(void 0===t)for(var r=0;r<e.length;r++){t=e[r].id;break}return t}},{key:"currentWallet",value:(d=u(regeneratorRuntime.mark((function e(){var t,r,n,a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,r=t.dispatch,n=t.match,a=this.props.currentWallet,o=n.params.id,a.id&&a.id===parseInt(o)){e.next=7;break}return e.next=6,r({type:"service/queryWalletById",payload:{wid:parseInt(o)}});case 6:a=e.sent;case 7:if(1!==a.type){e.next=13;break}if(a.address||a.deposit){e.next=13;break}return e.next=11,r({type:"service/createSingleWalletAddress",payload:{wid:o}});case 11:(i=e.sent)&&r({type:"wallet/saveCurrentAddress",payload:{address:i}});case 13:this.ready&&this.ready(parseInt(o));case 14:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})},{key:"saveCurrentWallet",value:(s=u(regeneratorRuntime.mark((function e(t,r){var n,a,o,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props.dispatch,t=parseInt(t)||1,(a=this.props.wallets[t])&&!(a.length<1)){e.next=8;break}return e.next=6,n({type:"service/queryWallet",payload:{type:t}});case 6:(a=e.sent).length>0&&a.forEach(function(){var e=u(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==parseInt(t.type)||t.deposit&&t.deposit.address){e.next=3;break}return e.next=3,n({type:"service/createSingleWalletAddress",payload:{wid:t.id}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 8:return o=-1,a&&a.length>0&&(o=this.getWalletId(a,r)),i=this.props.allWallets[o],e.next=13,this.props.dispatch({type:"wallet/save",payload:{currentId:o,currentWallet:i}});case 13:if(!i||1!==parseInt(i.type)||i.deposit&&i.deposit.address){e.next=16;break}return e.next=16,n({type:"service/createSingleWalletAddress",payload:{wid:o}});case 16:this.setState({ready:!0}),(c=document.getElementById("J_currentWallet"))&&c.scrollIntoView(),this.ready&&this.ready(parseInt(o));case 20:case"end":return e.stop()}}),e,this)}))),function(e,t){return s.apply(this,arguments)})},{key:"getWalletDetail",value:(c=u(regeneratorRuntime.mark((function e(t){var r,n,a,o,i,c,s,u,l,p,f,y,d,m,b;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props,n=r.dispatch,a=r.allWallets,o=r.currentWallet,i=r.ercTokenTimestamp,c=r.ercToken,s=a[t],o&&o.id==t&&(s=o),s){e.next=5;break}return e.abrupt("return");case 5:if(3===o.token&&c.length<1&&n({type:"wallet/queryErcToken",payload:{timestamp:i}}),s.parties&&!(s.parties.length<1)){e.next=11;break}return e.next=9,n({type:"wallet/queryParties",payload:{id:t}});case 9:u=e.sent,s.parties=u;case 11:if(s.paymail&&!(s.paymail.length<1)){e.next=16;break}return e.next=14,n({type:"service/queryPaymailById",payload:{wid:t}});case 14:l=e.sent,s.paymail=l;case 16:if(!(s.parties&&s.parties.length>0)){e.next=36;break}for(p=!0,f=!1,y=void 0,e.prev=20,d=s.parties[Symbol.iterator]();!(p=(m=d.next()).done);p=!0)(b=m.value).uid===s.uid&&(s.founder=b.user,s.founderId=b.uid);e.next=28;break;case 24:e.prev=24,e.t0=e.catch(20),f=!0,y=e.t0;case 28:e.prev=28,e.prev=29,p||null==d.return||d.return();case 31:if(e.prev=31,!f){e.next=34;break}throw y;case 34:return e.finish(31);case 35:return e.finish(28);case 36:n({type:"wallet/saveCurrent",payload:s});case 37:case"end":return e.stop()}}),e,this,[[20,24,28,36],[29,,31,35]])}))),function(e){return c.apply(this,arguments)})},{key:"loadTransactions",value:function(e){if(e&&-1!==e){var t=this.props,r=t.currentWallet,n=t.match.params.tk,a={wid:e};3===r.token&&(a.token=n||"eth"),this.props.dispatch({type:"service/queryTransaction",payload:a})}else this.props.dispatch({type:"wallet/saveTransaction",payload:{transactions:[]}})}},{key:"render",value:function(){return a.a.createElement("div",{className:i.a.container},a.a.createElement("div",{className:i.a.detail}))}}])&&l(r.prototype,n),o&&l(r,o),t}(n.Component)},1221:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));r(562);var n=r(166),a=r(1),o=r.n(a),i=r(1257),c=r.n(i),s=r(138),u=r(19),l=r(1054),p=r.n(l);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,m(t).apply(this,arguments))}var r,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),r=t,(a=[{key:"onCopySuccess",value:function(){n.a.success(Object(u.a)("copied"))}},{key:"render",value:function(){var e=this.props.label?this.props.label:o.a.createElement(s.a,{type:"iconcopy"});return o.a.createElement(c.a,{component:"span",onSuccess:this.onCopySuccess.bind(this),"data-clipboard-text":this.props.text,className:p.a.clipboard},e)}}])&&y(r.prototype,a),i&&y(r,i),t}(a.Component)}}]);