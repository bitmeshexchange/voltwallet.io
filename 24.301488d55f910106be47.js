(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1073:function(e,t,n){"use strict";n.r(t);n(560);var r,a,o=n(281),c=(n(561),n(166)),i=n(1),s=n.n(i),u=n(165),l=n(1034),f=n.n(l),p=n(19),y=n(1133),b=(n(559),n(138)),m=n(74),d=n(283),h=n(139),v=n(1138),O=n.n(v),g=n(1156),w=n(1048),j=n.n(w),E=n(17);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R,W,C=(r=Object(u.connect)((function(e){var t=e.user,n=e.wallet;e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){x(e,t,n[t])}))}return e}({},t,n)})),Object(m.withRouter)(a=r(a=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return r=this,a=(e=P(t)).call.apply(e,[this].concat(c)),n=!a||"object"!==S(a)&&"function"!=typeof a?k(r):a,x(k(n),"gotoBack",(function(){n.props.history.goBack()})),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.currentWallet,t=e.address,n=e.paymail,r=e.token,a=Object(E.b)(r),o=null,c=void 0;n&&((c=n.find((function(e){return 1===e.main})))||(c=n[0])),o=t?s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:j.a.tips},Object(p.a)("address_tips",a)),s.a.createElement("div",{className:j.a.qrcodeWrap},s.a.createElement(O.a,{value:t}),s.a.createElement("p",{className:j.a.address},t," ",t&&s.a.createElement(g.a,{text:t}))),n&&n.length>0&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:j.a.paymail_title},Object(p.a)("paymail_address")),s.a.createElement("p",{className:j.a.address},c.name,"@","volt.id"," ",c.name&&s.a.createElement(g.a,{text:"".concat(c.name,"@").concat("volt.id")})))):s.a.createElement("div",{className:j.a.wait},s.a.createElement("div",{className:j.a.qrcodeWrap},s.a.createElement(h.a,{type:"iconbsv1"})),s.a.createElement("div",{className:j.a.tips},Object(p.a)("inform_other")));var i=e.name;return s.a.createElement("div",{className:j.a.container},s.a.createElement("div",{className:j.a.title},i," ",Object(p.a)("address")),o,s.a.createElement(b.a,{onClick:this.gotoBack,type:"primary",className:"btn"},Object(p.a)("close")))}}])&&_(n.prototype,r),a&&_(n,a),t}(i.Component))||a)||a);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M,F=(R=Object(u.connect)((function(e){var t=e.user,n=e.wallet;e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){D(e,t,n[t])}))}return e}({},t,n)})),Object(m.withRouter)(W=R(W=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return r=this,a=(e=T(t)).call.apply(e,[this].concat(c)),n=!a||"object"!==A(a)&&"function"!=typeof a?B(r):a,D(B(n),"gotoBack",(function(){n.props.history.goBack()})),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props,t=(e.loading,e.address),n=this.props.currentWallet,r=n.paymail,a=n.token,o=Object(E.b)(a),c=n.name,i=void 0;return r&&((i=r.find((function(e){return 1===e.main})))||(i=r[0])),s.a.createElement("div",{className:j.a.container},s.a.createElement("div",{className:j.a.title},c," ",Object(p.a)("address")),s.a.createElement("div",{className:j.a.tips},Object(p.a)("address_tips",o)),s.a.createElement("div",{className:j.a.qrcodeWrap},s.a.createElement(O.a,{value:t}),s.a.createElement("p",{className:j.a.address},t," ",t&&s.a.createElement(g.a,{text:t}))),r&&r.length>0&&s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:j.a.paymail_title},Object(p.a)("paymail_address")),s.a.createElement("p",{className:j.a.address},i.name,"@","volt.id"," ",i.name&&s.a.createElement(g.a,{text:"".concat(i.name,"@").concat("volt.id")}))),s.a.createElement(b.a,{onClick:this.gotoBack,type:"primary",className:"btn"},Object(p.a)("close")))}}])&&I(n.prototype,r),a&&I(n,a),t}(i.Component))||W)||W);function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t,n,r,a,o,c){try{var i=e[o](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function G(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){z(o,r,a,c,i,"next",e)}function i(e){z(o,r,a,c,i,"throw",e)}c(void 0)}))}}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function K(e,t){return!t||"object"!==J(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"default",(function(){return V}));var V=Object(u.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){U(e,t,n[t])}))}return e}({},e.wallet,{loading:e.loading.effects["service/queryWallet"]})}))(M=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=K(this,L(t).call(this,e))).state={address:"",users:[],loading:!1},n}var n,r,a,i,u,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,e),n=t,(r=[{key:"ready",value:(l=G(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),t=this.props.match.params,n=t.type,r=t.id,2===parseInt(n)?this.createMultiAddress():this.createSingleAddress(),e.next=5,this.getWalletDetail(parseInt(r));case 5:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"createSingleAddress",value:(u=G(regeneratorRuntime.mark((function e(){var t,n,r,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.match,r=t.dispatch,a=n.params.id,e.next=4,r({type:"service/createSingleWalletAddress",payload:{wid:a}});case 4:o=e.sent,this.setState({address:o,loading:!1});case 6:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"createMultiAddress",value:(i=G(regeneratorRuntime.mark((function e(){var t,n,r,a,o,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.match,r=t.dispatch,a=n.params.id,e.next=4,r({type:"service/createMultiPartyAddress",payload:{wid:parseInt(a)}});case 4:return o=e.sent,this.setState({loading:!1}),e.next=8,r({type:"service/createMultiPartyAddress",payload:{wid:parseInt(a),type:2}});case 8:if(o.success){e.next=10;break}return e.abrupt("return",c.a.error("server_error"));case 10:(i=o.data.users)&&this.setState({users:i});case 12:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"componentWillReceiveProps",value:function(e){var t=this.props,n=t.allWallets,r=t.currentId;if(!(n.length<1||e.allWallets.length<1||-1==r||-1==e.currentId)){var a=e.allWallets[e.currentId].address;a&&a!==n[r].address&&this.ready()}}},{key:"render",value:function(){var e=this.props,t=e.match,n=e.loading,r=e.currentWallet;if(n||!r||!r.id)return s.a.createElement(d.a,null);var a=this.state,c=a.users,i=a.address,u=t.params.type,l=1===parseInt(u)?s.a.createElement(F,{address:i}):s.a.createElement(C,{users:c});return s.a.createElement("div",{className:f.a.container},this.renderSidebar(),s.a.createElement("div",{className:f.a.detail},s.a.createElement(o.a,{spinning:this.state.loading},l)))}}])&&H(n.prototype,r),a&&H(n,a),t}(y.a))||M},1156:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));n(561);var r=n(166),a=n(1),o=n.n(a),c=n(1210),i=n.n(c),s=n(139),u=n(19),l=n(1047),f=n.n(l);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,m(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"onCopySuccess",value:function(){r.a.success(Object(u.a)("copied"))}},{key:"render",value:function(){var e=this.props.label?this.props.label:o.a.createElement(s.a,{type:"iconcopy"});return o.a.createElement(i.a,{component:"span",onSuccess:this.onCopySuccess.bind(this),"data-clipboard-text":this.props.text,className:f.a.clipboard},e)}}])&&y(n.prototype,a),c&&y(n,c),t}(a.Component)}}]);