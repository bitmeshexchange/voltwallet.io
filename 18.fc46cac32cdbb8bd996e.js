(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1078:function(e,t,r){"use strict";r.d(t,"a",(function(){return G}));var n,a,o=r(0),s=r.n(o),i=r(156),c=r(896),u=r.n(c),l=(r(275),r(18)),p=(r(426),r(279)),f=r(898),y=r.n(f),m=(r(420),r(274)),b=r(899),d=r.n(b),j=r(61),h=r(938),v=r(27);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function P(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var N,x,W=(n=Object(i.connect)((function(e){var t=e.wallet;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.user,{},t,{loading:e.loading.effects["service/queryWallet"]})})),Object(j.withRouter)(a=n(a=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=P(this,E(t).call(this,e))).bgcs=[],r.state={joining:0,hideAmount:window.localStorage.getItem(v.a.HIDEAMOUNT)||0},r}var r,n,a,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,e),r=t,(n=[{key:"getWalletId",value:function(){var e=this.props,t=e.walletList,r=e.match.params.id;if(void 0===r)for(var n=0;n<t.length;n++){var a=t[n];a.join,a.status,r=a.id;break}return r}},{key:"joinWallet",value:(o=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),this.setState({joining:t}),e.next=4,this.props.dispatch({type:"service/joinWallet",payload:{wid:t}});case 4:r=e.sent,this.setState({joining:0}),r&&r.success&&this.props.dispatch({type:"service/updateWallet"});case 7:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(r,n){var a=o.apply(e,t);function s(e){w(a,r,n,s,i,"next",e)}function i(e){w(a,r,n,s,i,"throw",e)}s(void 0)}))},function(e){return i.apply(this,arguments)})},{key:"componentWillReceiveProps",value:function(e){e.hideAmount!==this.state.hideAmount&&this.setState({hideAmount:e.hideAmount})}},{key:"render",value:function(){var e=this.props,t=e.walletList,r=e.loading,n=e.match,a=parseInt(n.params.type)||1;if(0===t.length)return null;var o=this.state.hideAmount,i=this.getWalletId();return s.a.createElement(m.a,{spinning:r},s.a.createElement("div",{className:d.a.list},s.a.createElement("div",{className:d.a.list_content},t.map((function(e){var t=e.name,r=e.id,n=e.type,c=e.joinStatus,u=e.founder,l=e.status,p=e.balance,f=e.share,y=e.waitJoin,m=e.token,b=parseInt(r)===parseInt(i)?Object(h.c)(d.a.item_contrainer,d.a.current_item):d.a.item_contrainer,O=o?v.g:Object(h.b)(p),w=null,g=Object(v.b)(m);0===c?w=s.a.createElement("span",{className:d.a.join},"JOIN WALLET"):0===parseInt(l)&&(w=s.a.createElement("span",{className:d.a.wait_join},y," MEMBERS TO JOIN"));var P=s.a.createElement("div",{className:d.a.list_item},s.a.createElement("div",{className:d.a.wallet_name},t),2===n&&s.a.createElement("div",{className:d.a.wallet_info},w,f," members"),s.a.createElement("div",{className:d.a.wallet_desc},0===parseInt(l)?u:"".concat(O," ").concat(g)));return s.a.createElement(j.Link,{to:"/message/list/".concat(a,"/").concat(r),key:r,className:b},P)})))))}}])&&g(r.prototype,n),a&&g(r,a),t}(o.Component))||a)||a),I=r(107);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var q=(N=Object(i.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.wallet)})),Object(j.withRouter)(x=N(x=function(e){function t(e){var r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=z(t).call(this,e),r=!a||"object"!==R(a)&&"function"!=typeof a?A(n):a,M(A(r),"renderWalletMenu",(function(){var e=parseInt(r.props.match.params.type);return e||(e=1),s.a.createElement("div",{className:y.a.wallet_type},v.i.map((function(t,n){return 2===n&&r.props.newMsg?s.a.createElement("div",{key:t.key,className:n===e?y.a.selected:""},s.a.createElement(j.Link,{to:"/message/list/".concat(n)},s.a.createElement(p.a,{dot:!0},t.text))):n>0?s.a.createElement("div",{key:t.key,className:n===e?y.a.selected:""},s.a.createElement(j.Link,{to:"/message/list/".concat(n)},t.text)):void 0})))})),r.state={},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=parseInt(this.props.match.params.type);return e||(e=1),s.a.createElement("div",{className:y.a.list_container},this.renderWalletMenu(),s.a.createElement(W,{history:this.props.history}),s.a.createElement("div",{className:y.a.create_wallet},s.a.createElement(I.a,{type:"iconcreatewallet"}),s.a.createElement(j.Link,{to:"/message/createWallet/".concat(e)},Object(l.a)("create_wallet"))))}}])&&D(r.prototype,n),a&&D(r,a),t}(o.Component))||x)||x);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function J(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){B(o,n,a,s,i,"next",e)}function i(e){B(o,n,a,s,i,"throw",e)}s(void 0)}))}}function Y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function H(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var G=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=H(this,U(t).call(this,e))).state={ready:!1},r}var r,n,a,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:(i=J(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.match.params,r=t.type,n=t.id,this.saveCurrentWallet(r,n);case 2:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"getWalletId",value:function(e,t){if(void 0===t)for(var r=0;r<e.length;r++){t=e[r].id;break}return t}},{key:"saveCurrentWallet",value:(o=J(regeneratorRuntime.mark((function e(t,r,n){var a,o,s,i,c,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,o=a.dispatch,s=a.match,i=this.props.walletList,t||(t=parseInt(s.params.type)||1),!(i.length<1)&&n){e.next=7;break}return e.next=6,o({type:"service/queryWallet",payload:{type:t}});case 6:i=e.sent;case 7:if(i&&!(i.length<1)){e.next=14;break}return this.lastId=-1,e.next=11,o({type:"wallet/save",payload:{currentWallet:{}}});case 11:return this.setState({ready:!0}),this.ready&&this.ready(),e.abrupt("return");case 14:return c=this.getWalletId(i,r),this.lastId=c,u=i.find((function(e){return e.id===parseInt(c)})),e.next=19,o({type:"wallet/save",payload:{walletList:i,showWalletInfo:!1,currentWallet:u}});case 19:this.setState({ready:!0}),this.ready&&this.ready(parseInt(c));case 21:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return o.apply(this,arguments)})},{key:"loadTransactions",value:function(e){e&&this.props.dispatch({type:"service/queryTransaction",payload:{wid:e}})}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.type,r=e.match.params.id,n=this.props.match.params.type,a=this.props.match.params.id;t===n&&void 0===r&&void 0===a||t===n&&r===a||this.lastId!==r&&this.saveCurrentWallet(t,r,t===n)}},{key:"renderSidebar",value:function(){return s.a.createElement(q,{type:this.props.type})}},{key:"render",value:function(){return s.a.createElement("div",{className:u.a.container},this.renderSidebar(),s.a.createElement("div",{className:u.a.detail}))}}])&&Y(r.prototype,n),a&&Y(r,a),t}(o.Component)},1079:function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));r(421);var n=r(157),a=r(0),o=r.n(a),s=r(1094),i=r.n(s),c=r(107),u=r(18),l=r(903),p=r.n(l);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return y(this,t),b(this,d(t).apply(this,arguments))}var r,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),r=t,(a=[{key:"onCopySuccess",value:function(){n.a.success(Object(u.a)("copied"))}},{key:"render",value:function(){var e=this.props.label?this.props.label:o.a.createElement(c.a,{type:"iconcopy"});return o.a.createElement(i.a,{component:"span",onSuccess:this.onCopySuccess.bind(this),"data-clipboard-text":this.props.text,className:p.a.clipboard},e)}}])&&m(r.prototype,a),s&&m(r,s),t}(a.Component)},1085:function(e,t,r){var n={"./af":942,"./af.js":942,"./ar":943,"./ar-dz":944,"./ar-dz.js":944,"./ar-kw":945,"./ar-kw.js":945,"./ar-ly":946,"./ar-ly.js":946,"./ar-ma":947,"./ar-ma.js":947,"./ar-sa":948,"./ar-sa.js":948,"./ar-tn":949,"./ar-tn.js":949,"./ar.js":943,"./az":950,"./az.js":950,"./be":951,"./be.js":951,"./bg":952,"./bg.js":952,"./bm":953,"./bm.js":953,"./bn":954,"./bn.js":954,"./bo":955,"./bo.js":955,"./br":956,"./br.js":956,"./bs":957,"./bs.js":957,"./ca":958,"./ca.js":958,"./cs":959,"./cs.js":959,"./cv":960,"./cv.js":960,"./cy":961,"./cy.js":961,"./da":962,"./da.js":962,"./de":963,"./de-at":964,"./de-at.js":964,"./de-ch":965,"./de-ch.js":965,"./de.js":963,"./dv":966,"./dv.js":966,"./el":967,"./el.js":967,"./en-SG":968,"./en-SG.js":968,"./en-au":969,"./en-au.js":969,"./en-ca":970,"./en-ca.js":970,"./en-gb":971,"./en-gb.js":971,"./en-ie":972,"./en-ie.js":972,"./en-il":973,"./en-il.js":973,"./en-nz":974,"./en-nz.js":974,"./eo":975,"./eo.js":975,"./es":976,"./es-do":977,"./es-do.js":977,"./es-us":978,"./es-us.js":978,"./es.js":976,"./et":979,"./et.js":979,"./eu":980,"./eu.js":980,"./fa":981,"./fa.js":981,"./fi":982,"./fi.js":982,"./fo":983,"./fo.js":983,"./fr":984,"./fr-ca":985,"./fr-ca.js":985,"./fr-ch":986,"./fr-ch.js":986,"./fr.js":984,"./fy":987,"./fy.js":987,"./ga":988,"./ga.js":988,"./gd":989,"./gd.js":989,"./gl":990,"./gl.js":990,"./gom-latn":991,"./gom-latn.js":991,"./gu":992,"./gu.js":992,"./he":993,"./he.js":993,"./hi":994,"./hi.js":994,"./hr":995,"./hr.js":995,"./hu":996,"./hu.js":996,"./hy-am":997,"./hy-am.js":997,"./id":998,"./id.js":998,"./is":999,"./is.js":999,"./it":1e3,"./it-ch":1001,"./it-ch.js":1001,"./it.js":1e3,"./ja":1002,"./ja.js":1002,"./jv":1003,"./jv.js":1003,"./ka":1004,"./ka.js":1004,"./kk":1005,"./kk.js":1005,"./km":1006,"./km.js":1006,"./kn":1007,"./kn.js":1007,"./ko":1008,"./ko.js":1008,"./ku":1009,"./ku.js":1009,"./ky":1010,"./ky.js":1010,"./lb":1011,"./lb.js":1011,"./lo":1012,"./lo.js":1012,"./lt":1013,"./lt.js":1013,"./lv":1014,"./lv.js":1014,"./me":1015,"./me.js":1015,"./mi":1016,"./mi.js":1016,"./mk":1017,"./mk.js":1017,"./ml":1018,"./ml.js":1018,"./mn":1019,"./mn.js":1019,"./mr":1020,"./mr.js":1020,"./ms":1021,"./ms-my":1022,"./ms-my.js":1022,"./ms.js":1021,"./mt":1023,"./mt.js":1023,"./my":1024,"./my.js":1024,"./nb":1025,"./nb.js":1025,"./ne":1026,"./ne.js":1026,"./nl":1027,"./nl-be":1028,"./nl-be.js":1028,"./nl.js":1027,"./nn":1029,"./nn.js":1029,"./pa-in":1030,"./pa-in.js":1030,"./pl":1031,"./pl.js":1031,"./pt":1032,"./pt-br":1033,"./pt-br.js":1033,"./pt.js":1032,"./ro":1034,"./ro.js":1034,"./ru":1035,"./ru.js":1035,"./sd":1036,"./sd.js":1036,"./se":1037,"./se.js":1037,"./si":1038,"./si.js":1038,"./sk":1039,"./sk.js":1039,"./sl":1040,"./sl.js":1040,"./sq":1041,"./sq.js":1041,"./sr":1042,"./sr-cyrl":1043,"./sr-cyrl.js":1043,"./sr.js":1042,"./ss":1044,"./ss.js":1044,"./sv":1045,"./sv.js":1045,"./sw":1046,"./sw.js":1046,"./ta":1047,"./ta.js":1047,"./te":1048,"./te.js":1048,"./tet":1049,"./tet.js":1049,"./tg":1050,"./tg.js":1050,"./th":1051,"./th.js":1051,"./tl-ph":1052,"./tl-ph.js":1052,"./tlh":1053,"./tlh.js":1053,"./tr":1054,"./tr.js":1054,"./tzl":1055,"./tzl.js":1055,"./tzm":1056,"./tzm-latn":1057,"./tzm-latn.js":1057,"./tzm.js":1056,"./ug-cn":1058,"./ug-cn.js":1058,"./uk":1059,"./uk.js":1059,"./ur":1060,"./ur.js":1060,"./uz":1061,"./uz-latn":1062,"./uz-latn.js":1062,"./uz.js":1061,"./vi":1063,"./vi.js":1063,"./x-pseudo":1064,"./x-pseudo.js":1064,"./yo":1065,"./yo.js":1065,"./zh-cn":1066,"./zh-cn.js":1066,"./zh-hk":1067,"./zh-hk.js":1067,"./zh-tw":1068,"./zh-tw.js":1068};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=1085},931:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return ne}));r(420);var n,a,o=r(274),s=(r(421),r(157)),i=r(0),c=r.n(i),u=r(156),l=r(896),p=r.n(l),f=r(18),y=r(1078),m=(r(419),r(128)),b=r(61),d=(r(275),r(107)),j=r(1088),h=r.n(j),v=r(1079),O=r(907),w=r.n(O),g=r(27);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?N(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R,D,z=window.location.hostname,A=(n=Object(u.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.user,{},e.wallet,{loadingPaymail:e.loading.effects["service/queryPaymailById"]})})),Object(b.withRouter)(a=n(a=function(e){function t(){var e,r;E(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return I(N(r=_(this,(e=S(t)).call.apply(e,[this].concat(a)))),"gotoBack",(function(){r.props.history.goBack()})),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=(e.loading,e.match,e.currentWallet),r=e.loadingPaymail,n=t.address,a=t.paymail,s=t.token,i=Object(g.b)(s),u=null,l=void 0;a&&((l=a.find((function(e){return 1===e.main})))||(l=a[0])),u=n?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:w.a.tips},Object(f.a)("address_tips",i)),c.a.createElement("div",{className:w.a.qrcodeWrap},c.a.createElement(h.a,{value:n}),c.a.createElement("p",{className:w.a.address},n," ",c.a.createElement(v.a,{text:n}))),a&&a.length>0&&c.a.createElement(o.a,{spinning:r},c.a.createElement("div",{className:w.a.paymail_title},Object(f.a)("paymail_address")),c.a.createElement("p",{className:w.a.address},l.name,"@",z," ",c.a.createElement(v.a,{text:"".concat(l.name,"@").concat(z)})))):c.a.createElement("div",{className:w.a.wait},c.a.createElement("div",{className:w.a.qrcodeWrap},c.a.createElement(d.a,{type:"iconbsv1"})),c.a.createElement("div",{className:w.a.tips},Object(f.a)("inform_other")));var p=t.name;return c.a.createElement("div",{className:w.a.container},c.a.createElement("div",{className:w.a.title},p," ",Object(f.a)("address")),u,c.a.createElement(m.a,{onClick:this.gotoBack,type:"primary",className:"btn"},Object(f.a)("close")))}}])&&k(r.prototype,n),a&&k(r,a),t}(i.Component))||a)||a);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?B(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var U,F=window.location.hostname,G=(R=Object(u.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){H(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.user,{},e.wallet,{loadingPaymail:e.loading.effects["service/queryPaymailById"]})})),Object(b.withRouter)(D=R(D=function(e){function t(){var e,r;T(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return H(B(r=q(this,(e=L(t)).call.apply(e,[this].concat(a)))),"gotoBack",(function(){r.props.history.goBack()})),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.currentWallet,r=e.loadingPaymail,n=e.address;if(!n)return null;var a=t.paymail,s=t.token,i=Object(g.b)(s),u=t.name,l=void 0;return a&&((l=a.find((function(e){return 1===e.main})))||(l=a[0])),c.a.createElement("div",{className:w.a.container},c.a.createElement("div",{className:w.a.title},u," ",Object(f.a)("address")),c.a.createElement("div",{className:w.a.tips},Object(f.a)("address_tips",i)),c.a.createElement("div",{className:w.a.qrcodeWrap},c.a.createElement(h.a,{value:n}),c.a.createElement("p",{className:w.a.address},n," ",c.a.createElement(v.a,{text:n}))),a&&a.length>0&&c.a.createElement(o.a,{spinning:r},c.a.createElement("div",{className:w.a.paymail_title},Object(f.a)("paymail_address")),c.a.createElement("p",{className:w.a.address},l.name,"@",F," ",c.a.createElement(v.a,{text:"".concat(l.name,"@").concat(F)}))),c.a.createElement(m.a,{onClick:this.gotoBack,type:"primary",className:"btn"},Object(f.a)("close")))}}])&&M(r.prototype,n),a&&M(r,a),t}(i.Component))||D)||D);function $(e){return($="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function K(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function Q(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){K(o,n,a,s,i,"next",e)}function i(e){K(o,n,a,s,i,"throw",e)}s(void 0)}))}}function V(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function X(e,t){return!t||"object"!==$(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Z(e){return(Z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ne=Object(u.connect)((function(e){var t=e.wallet,r=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){re(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{loading:r["service/queryWallet"],createAddress:r["service/createMultiPartyAddress"]||r["service/createSingleWalletAddress"]})}))(U=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=X(this,Z(t).call(this,e))).state={address:"",users:[]},r}var r,n,a,i,u,l,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:(f=Q(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params,r=t.type,n=t.id,this.saveCurrentWallet(r,n),2===parseInt(r)?this.createMultiAddress():this.createSingleAddress(),e.next=5,this.props.dispatch({type:"service/queryPaymailById",payload:{wid:parseInt(n)}});case 5:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{key:"ready",value:(l=Q(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=this.props.match.params).type,t.id;case 1:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"createSingleAddress",value:(u=Q(regeneratorRuntime.mark((function e(){var t,r,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,r=t.match,n=t.dispatch,a=r.params.id,e.next=4,n({type:"service/createSingleWalletAddress",payload:{wid:a}});case 4:o=e.sent,this.setState({address:o});case 6:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"createMultiAddress",value:(i=Q(regeneratorRuntime.mark((function e(){var t,r,n,a,o,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,r=t.match,n=t.walletList,a=t.dispatch,o=r.params.id,n.filter((function(e){return e.id==o}))[0]){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,a({type:"service/createMultiPartyAddress",payload:{wid:parseInt(o)}});case 7:return i=e.sent,e.next=10,a({type:"service/createMultiPartyAddress",payload:{wid:parseInt(o),type:2}});case 10:if(i.success){e.next=12;break}return e.abrupt("return",s.a.error("server_error"));case 12:(c=i.data.users)&&this.setState({users:c});case 14:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"componentWillReceiveProps",value:function(e){var t=e.currentWallet.address;t&&t!==this.props.currentWallet.address&&this.ready()}},{key:"render",value:function(){var e=this.props,t=e.loading,r=e.match,n=this.state,a=n.users,s=n.address,i=t||this.props.createAddress,u=r.params.type,l=1===parseInt(u)?c.a.createElement(G,{address:s}):c.a.createElement(A,{users:a});return c.a.createElement("div",{className:p.a.container},this.renderSidebar(),c.a.createElement("div",{className:p.a.detail},i?c.a.createElement("div",{className:p.a.loading},c.a.createElement(o.a,null)):l))}}])&&V(r.prototype,n),a&&V(r,a),t}(y.a))||U},938:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return p})),r.d(t,"b",(function(){return f}));r(1084);var n=r(937),a=r.n(n),o=r(78),s=r.n(o);window.location;function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),a()(e).format(t)):e}var c=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function u(e){return!!e&&c.test(e)}function l(){return Array.prototype.slice.call(arguments).join(" ")}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var r=e.substr(0,t[0]),n=e.substr(-t[1],t[1]);return r+"****"+n}}var f=function(e){return s()(e).div(1e8).toString()}}}]);