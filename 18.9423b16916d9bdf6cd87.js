(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1078:function(e,t,r){"use strict";r.d(t,"a",(function(){return K}));var n,a,o=r(0),s=r.n(o),i=r(156),c=r(897),u=r.n(c),l=(r(275),r(18)),p=(r(427),r(280)),f=r(899),d=r.n(f),m=(r(421),r(274)),y=r(900),b=r.n(y),h=r(61),v=r(939),j=r(27);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P,N,I=(n=Object(i.connect)((function(e){var t=e.wallet;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.user,{},t,{loading:e.loading.effects["service/queryWallet"]})})),Object(h.withRouter)(a=n(a=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=k(this,E(t).call(this,e))).bgcs=[],r.state={joining:0,hideAmount:window.localStorage.getItem(j.a.HIDEAMOUNT)||0},r}var r,n,a,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(t,e),r=t,(n=[{key:"getWalletId",value:function(){var e=this.props,t=e.walletList,r=e.match.params.id;if(void 0===r)for(var n=0;n<t.length;n++){var a=t[n];a.join,a.status,r=a.id;break}return r}},{key:"joinWallet",value:(o=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),this.setState({joining:t}),e.next=4,this.props.dispatch({type:"service/joinWallet",payload:{wid:t}});case 4:r=e.sent,this.setState({joining:0}),r&&r.success&&this.props.dispatch({type:"service/updateWallet"});case 7:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(r,n){var a=o.apply(e,t);function s(e){O(a,r,n,s,i,"next",e)}function i(e){O(a,r,n,s,i,"throw",e)}s(void 0)}))},function(e){return i.apply(this,arguments)})},{key:"componentWillReceiveProps",value:function(e){e.hideAmount!==this.state.hideAmount&&this.setState({hideAmount:e.hideAmount})}},{key:"render",value:function(){var e=this.props,t=e.walletList,r=e.loading,n=e.match,a=parseInt(n.params.type)||1;if(0===t.length)return null;var o=this.state.hideAmount,i=this.getWalletId();return s.a.createElement(m.a,{spinning:r},s.a.createElement("div",{className:b.a.list},s.a.createElement("div",{className:b.a.list_content},t.map((function(e){var t=e.name,r=e.id,n=e.type,c=e.joinStatus,u=e.founder,l=e.status,p=e.balance,f=e.share,d=e.waitJoin,m=e.token,y=e.threshold,g=parseInt(r)===parseInt(i)?Object(v.c)(b.a.item_contrainer,b.a.current_item):b.a.item_contrainer,O=o?j.g:Object(v.b)(p),w=null,k=Object(j.b)(m);0===c?w=s.a.createElement("span",{className:b.a.join},"JOIN WALLET"):0===parseInt(l)&&(w=s.a.createElement("span",{className:b.a.wait_join},d," MEMBERS TO JOIN"));var E=s.a.createElement("div",{className:b.a.list_item},s.a.createElement("div",{className:b.a.wallet_name},s.a.createElement("span",{className:b.a.name,title:t},t," "),s.a.createElement("span",{className:b.a.wallet_no},y," | ",f)),2===n&&s.a.createElement("div",{className:b.a.wallet_info},w),s.a.createElement("div",{className:b.a.wallet_desc},0===parseInt(l)?u:"".concat(O," ").concat(k)));return s.a.createElement(h.Link,{to:"/message/list/".concat(a,"/").concat(r),key:r,className:g},E)})))))}}])&&w(r.prototype,n),a&&w(r,a),t}(o.Component))||a)||a),R=r(107);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function A(e){return(A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var M=(P=Object(i.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.wallet)})),Object(h.withRouter)(N=P(N=function(e){function t(e){var r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=A(t).call(this,e),r=!a||"object"!==C(a)&&"function"!=typeof a?W(n):a,F(W(r),"renderWalletMenu",(function(){var e=parseInt(r.props.match.params.type);return e||(e=1),s.a.createElement("div",{className:d.a.wallet_type},j.i.map((function(t,n){return 2===n&&r.props.newMsg?s.a.createElement("div",{key:t.key,className:n===e?d.a.selected:""},s.a.createElement(h.Link,{to:"/message/list/".concat(n)},s.a.createElement(p.a,{dot:!0},t.text))):n>0?s.a.createElement("div",{key:t.key,className:n===e?d.a.selected:""},s.a.createElement(h.Link,{to:"/message/list/".concat(n)},t.text)):void 0})))})),r.state={},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=parseInt(this.props.match.params.type);return e||(e=1),s.a.createElement("div",{className:d.a.list_container},this.renderWalletMenu(),s.a.createElement(I,{history:this.props.history}),s.a.createElement("div",{className:d.a.create_wallet},s.a.createElement(R.a,{type:"iconcreatewallet"}),s.a.createElement(h.Link,{to:"/message/createWallet/".concat(e)},Object(l.a)("create_wallet"))))}}])&&T(r.prototype,n),a&&T(r,a),t}(o.Component))||N)||N);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function q(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){B(o,n,a,s,i,"next",e)}function i(e){B(o,n,a,s,i,"throw",e)}s(void 0)}))}}function V(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function G(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var K=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=G(this,H(t).call(this,e))).state={ready:!1},r}var r,n,a,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:(i=q(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.match.params,r=t.type,n=t.id,this.saveCurrentWallet(r,n);case 2:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"getWalletId",value:function(e,t){if(void 0===t)for(var r=0;r<e.length;r++){t=e[r].id;break}return t}},{key:"saveCurrentWallet",value:(o=q(regeneratorRuntime.mark((function e(t,r,n){var a,o,s,i,c,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,o=a.dispatch,s=a.match,i=this.props.walletList,t||(t=parseInt(s.params.type)||1),!(i.length<1)&&n){e.next=8;break}return e.next=6,o({type:"service/queryWallet",payload:{type:t}});case 6:(i=e.sent).forEach(function(){var e=q(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((1!==parseInt(t.type)||t.deposit)&&t.deposit.address){e.next=3;break}return e.next=3,o({type:"service/createSingleWalletAddress",payload:{wid:t.id}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 8:if(i&&!(i.length<1)){e.next=15;break}return this.lastId=-1,e.next=12,o({type:"wallet/save",payload:{currentWallet:{}}});case 12:return this.setState({ready:!0}),this.ready&&this.ready(),e.abrupt("return");case 15:return c=this.getWalletId(i,r),this.lastId=c,u=i.find((function(e){return e.id===parseInt(c)})),e.next=20,o({type:"wallet/save",payload:{walletList:i,showWalletInfo:!1,currentWallet:u}});case 20:this.setState({ready:!0}),this.ready&&this.ready(parseInt(c));case 22:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return o.apply(this,arguments)})},{key:"loadTransactions",value:function(e){e&&this.props.dispatch({type:"service/queryTransaction",payload:{wid:e}})}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.type,r=e.match.params.id,n=this.props.match.params.type,a=this.props.match.params.id;t===n&&void 0===r&&void 0===a||t===n&&r===a||this.lastId!==r&&this.saveCurrentWallet(t,r,t===n)}},{key:"renderSidebar",value:function(){return s.a.createElement(M,{type:this.props.type})}},{key:"render",value:function(){return s.a.createElement("div",{className:u.a.container},this.renderSidebar(),s.a.createElement("div",{className:u.a.detail}))}}])&&V(r.prototype,n),a&&V(r,a),t}(o.Component)},1080:function(e,t,r){"use strict";var n,a=r(0),o=r.n(a),s=r(156),i=r(278),c=r(78),u=r.n(c);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=Object(s.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.wallet)}))(n=function(e){function t(){return p(this,t),d(this,m(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=i.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,r=i.a[t],n=this.props,a=n.price,s=n.value,c=n.usd,l=n.exchangeRate;if(!a.bsv)return null;var p=null,f=r.currencyCode.toLowerCase();p=a.bsv[f]?a.bsv[f]:u()(a.bsv.usd).times(l[f]),c&&(p=u()(p).div(a.bsv.usd).multipliedBy(c));var d=u()(s).div(1e8).times(p).toFixed(2,1);return o.a.createElement("span",null,r.symbol,d," ",r.currencyCode)}}])&&f(r.prototype,n),a&&f(r,a),t}(a.Component))||n;t.a=v},1085:function(e,t,r){var n={"./af":943,"./af.js":943,"./ar":944,"./ar-dz":945,"./ar-dz.js":945,"./ar-kw":946,"./ar-kw.js":946,"./ar-ly":947,"./ar-ly.js":947,"./ar-ma":948,"./ar-ma.js":948,"./ar-sa":949,"./ar-sa.js":949,"./ar-tn":950,"./ar-tn.js":950,"./ar.js":944,"./az":951,"./az.js":951,"./be":952,"./be.js":952,"./bg":953,"./bg.js":953,"./bm":954,"./bm.js":954,"./bn":955,"./bn.js":955,"./bo":956,"./bo.js":956,"./br":957,"./br.js":957,"./bs":958,"./bs.js":958,"./ca":959,"./ca.js":959,"./cs":960,"./cs.js":960,"./cv":961,"./cv.js":961,"./cy":962,"./cy.js":962,"./da":963,"./da.js":963,"./de":964,"./de-at":965,"./de-at.js":965,"./de-ch":966,"./de-ch.js":966,"./de.js":964,"./dv":967,"./dv.js":967,"./el":968,"./el.js":968,"./en-SG":969,"./en-SG.js":969,"./en-au":970,"./en-au.js":970,"./en-ca":971,"./en-ca.js":971,"./en-gb":972,"./en-gb.js":972,"./en-ie":973,"./en-ie.js":973,"./en-il":974,"./en-il.js":974,"./en-nz":975,"./en-nz.js":975,"./eo":976,"./eo.js":976,"./es":977,"./es-do":978,"./es-do.js":978,"./es-us":979,"./es-us.js":979,"./es.js":977,"./et":980,"./et.js":980,"./eu":981,"./eu.js":981,"./fa":982,"./fa.js":982,"./fi":983,"./fi.js":983,"./fo":984,"./fo.js":984,"./fr":985,"./fr-ca":986,"./fr-ca.js":986,"./fr-ch":987,"./fr-ch.js":987,"./fr.js":985,"./fy":988,"./fy.js":988,"./ga":989,"./ga.js":989,"./gd":990,"./gd.js":990,"./gl":991,"./gl.js":991,"./gom-latn":992,"./gom-latn.js":992,"./gu":993,"./gu.js":993,"./he":994,"./he.js":994,"./hi":995,"./hi.js":995,"./hr":996,"./hr.js":996,"./hu":997,"./hu.js":997,"./hy-am":998,"./hy-am.js":998,"./id":999,"./id.js":999,"./is":1e3,"./is.js":1e3,"./it":1001,"./it-ch":1002,"./it-ch.js":1002,"./it.js":1001,"./ja":1003,"./ja.js":1003,"./jv":1004,"./jv.js":1004,"./ka":1005,"./ka.js":1005,"./kk":1006,"./kk.js":1006,"./km":1007,"./km.js":1007,"./kn":1008,"./kn.js":1008,"./ko":1009,"./ko.js":1009,"./ku":1010,"./ku.js":1010,"./ky":1011,"./ky.js":1011,"./lb":1012,"./lb.js":1012,"./lo":1013,"./lo.js":1013,"./lt":1014,"./lt.js":1014,"./lv":1015,"./lv.js":1015,"./me":1016,"./me.js":1016,"./mi":1017,"./mi.js":1017,"./mk":1018,"./mk.js":1018,"./ml":1019,"./ml.js":1019,"./mn":1020,"./mn.js":1020,"./mr":1021,"./mr.js":1021,"./ms":1022,"./ms-my":1023,"./ms-my.js":1023,"./ms.js":1022,"./mt":1024,"./mt.js":1024,"./my":1025,"./my.js":1025,"./nb":1026,"./nb.js":1026,"./ne":1027,"./ne.js":1027,"./nl":1028,"./nl-be":1029,"./nl-be.js":1029,"./nl.js":1028,"./nn":1030,"./nn.js":1030,"./pa-in":1031,"./pa-in.js":1031,"./pl":1032,"./pl.js":1032,"./pt":1033,"./pt-br":1034,"./pt-br.js":1034,"./pt.js":1033,"./ro":1035,"./ro.js":1035,"./ru":1036,"./ru.js":1036,"./sd":1037,"./sd.js":1037,"./se":1038,"./se.js":1038,"./si":1039,"./si.js":1039,"./sk":1040,"./sk.js":1040,"./sl":1041,"./sl.js":1041,"./sq":1042,"./sq.js":1042,"./sr":1043,"./sr-cyrl":1044,"./sr-cyrl.js":1044,"./sr.js":1043,"./ss":1045,"./ss.js":1045,"./sv":1046,"./sv.js":1046,"./sw":1047,"./sw.js":1047,"./ta":1048,"./ta.js":1048,"./te":1049,"./te.js":1049,"./tet":1050,"./tet.js":1050,"./tg":1051,"./tg.js":1051,"./th":1052,"./th.js":1052,"./tl-ph":1053,"./tl-ph.js":1053,"./tlh":1054,"./tlh.js":1054,"./tr":1055,"./tr.js":1055,"./tzl":1056,"./tzl.js":1056,"./tzm":1057,"./tzm-latn":1058,"./tzm-latn.js":1058,"./tzm.js":1057,"./ug-cn":1059,"./ug-cn.js":1059,"./uk":1060,"./uk.js":1060,"./ur":1061,"./ur.js":1061,"./uz":1062,"./uz-latn":1063,"./uz-latn.js":1063,"./uz.js":1062,"./vi":1064,"./vi.js":1064,"./x-pseudo":1065,"./x-pseudo.js":1065,"./yo":1066,"./yo.js":1066,"./zh-cn":1067,"./zh-cn.js":1067,"./zh-hk":1068,"./zh-hk.js":1068,"./zh-tw":1069,"./zh-tw.js":1069};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=1085},937:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return ie}));var n,a,o,s=r(0),i=r.n(s),c=r(156),u=r(897),l=r.n(u),p=r(18),f=r(1078),d=(r(421),r(274)),m=(r(1072),r(1073)),y=(r(420),r(128)),b=(r(422),r(157)),h=(r(941),r(942)),v=r(4),j=r(78),g=r.n(j),O=r(192),w=r.n(O),k=r(61),E=r(105),S=r(919),_=r.n(S),x=r(27),P=r(278),N=r(58),I=r.n(N),R=r(939),C=r(1080),T=r(107);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function z(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){W(o,n,a,s,i,"next",e)}function i(e){W(o,n,a,s,i,"throw",e)}s(void 0)}))}}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var V,G=v.Transaction.Sighash,H=v.crypto.Signature,J=v.crypto.ECDSA,K=v.crypto.BN,Y=v.Transaction.Signature,U=H.SIGHASH_ALL|H.SIGHASH_FORKID,$=w()().encode,Q=(I.a.parse(location.search.slice(1)),h.a.Item),X=(n=h.a.create(),a=Object(c.connect)((function(e){var t=e.user,r=e.wallet,n=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{},r,{signing:n["service/signSingWalletMessage"],broadcasting:n["service/broadcast"],loading:n["service/queryWalletById"]||n["service/createSingleWalletAddress"]||n["service/createMultiPartyAddress"],creating:n["service/createMultiPartyTransaction"]})})),Object(k.withRouter)(o=n(o=a(o=function(e){function t(e){var r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=F(t).call(this,e),r=!a||"object"!==A(a)&&"function"!=typeof a?M(n):a,q(M(r),"validAddress",function(){var e=z(regeneratorRuntime.mark((function e(t,n,a){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.indexOf("@")>-1)){e.next=10;break}return e.next=3,r.props.dispatch({type:"service/paymentDestination",payload:{paymail:n}});case 3:if(!(o=e.sent)){e.next=9;break}return r.setState({toAddress:o}),e.abrupt("return",a());case 9:return e.abrupt("return",a(Object(p.a)("invalid_address")));case 10:return e.prev=10,v.Script.fromAddress(n),e.abrupt("return",a());case 15:return e.prev=15,e.t0=e.catch(10),e.abrupt("return",a(Object(p.a)("invalid_address")));case 18:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t,r,n){return e.apply(this,arguments)}}()),q(M(r),"handleSubmit",(function(e){e.preventDefault(),r.props.form.validateFields((function(e,t){if(!e){if(console.log("Received values of form: ",t),t.biz_data=t.toAddress,t.toAddress.indexOf("@")>-1){var n=t.toAddress;t.toAddress=r.state.toAddress,t.biz_data=n+" (".concat(r.state.toAddress,")")}r.createTransaction(t)}}))})),q(M(r),"createTransaction",function(){var e=z(regeneratorRuntime.mark((function e(t){var n,a,o,s,i,c,u,l,f,d,m,y,h,j,O,w,k,S,_,x,P,N,I,C,T,A,W,z,D,F;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=t.toAddress,a=t.amount,o=t.note,s=r.getWalletId(),i=new v.Transaction,c=r.props.currentWallet,u=c.utxo,l=c.type,f=g()(a).multipliedBy(1e8),d=f.toString(),m=!0,y=!1,h=void 0,e.prev=9,j=u[Symbol.iterator]();!(m=(O=j.next()).done);m=!0)w=O.value,f.isGreaterThan(0)&&(k=w.address,S=w.txid,_=w.value,x=w.vout,1===w.status&&(i.from({txId:S,outputIndex:x,script:v.Script.buildPublicKeyHashOut(k).toString(),satoshis:_}),f=f.minus(_)));e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),y=!0,h=e.t0;case 17:e.prev=17,e.prev=18,m||null==j.return||j.return();case 20:if(e.prev=20,!y){e.next=23;break}throw h;case 23:return e.finish(20);case 24:return e.finish(17);case 25:if(!f.isGreaterThan(0)){e.next=27;break}return e.abrupt("return",b.a.error(Object(p.a)("lack_of_balance")));case 27:if(P=g()(a).multipliedBy(1e8).toNumber(),N=r.props.currentWallet,(I=r.state.change_address)||(I=N.deposit.address||N.address),"0"!==f.toString()){e.next=36;break}i.change(n),d=g()(a).multipliedBy(1e8).minus(i.getFee()).toString(),e.next=41;break;case 36:if(i.to(n,P),i.change(I),!f.plus(i.getFee()).plus(456).isGreaterThan(0)){e.next=41;break}return t.amount=Object(R.b)(N.balance),e.abrupt("return",r.createTransaction(t));case 41:if(1!==parseInt(l)){e.next=53;break}return C=i.inputs.map((function(e,t){var r=e.output,n=r.script.toAddress().toString(),a=K.fromBuffer(G.sighash(i,U,t,r.script,r.satoshisBN),{endian:"little"});return{address:n,hash:("0".repeat(8)+a.toString("hex")).slice(-64)}})),e.next=45,r.props.dispatch({type:"service/signSingWalletMessage",payload:C});case 45:return e.sent.forEach((function(e,t){var r=new H({r:new K(e.r,16),s:J.toLowS(new K(e.s,16))}),n=i.inputs[t];i.applySignature(new Y({publicKey:e.publicKey,prevTxId:n.prevTxId,outputIndex:n.outputIndex,inputIndex:t,sigtype:U,signature:r}))})),e.next=49,r.props.dispatch({type:"service/broadcast",payload:{tx:i,note:o,value:d,wid:s,biz_data:t.biz_data}});case 49:return T=e.sent,A=g()(i.getFee()).div(1e8).toString(),T.success&&T.data.id?r.setState({toAddress:t.biz_data,amount:g()(d).div(1e8).toString(),note:o,showResult:"single",fee:A}):b.a.error("Transaction failed. ".concat(T.error)),e.abrupt("return");case 53:if(2!==parseInt(l)){e.next=59;break}return W=g()(i.getFee()).div(1e8).toString(),e.next=57,r.props.dispatch({type:"service/createMultiPartyTransaction",payload:{tx:i,note:o,value:d,wid:s,biz_data:t.biz_data}});case 57:(z=e.sent).success&&z.data.id?r.setState({showResult:"multi",toAddress:t.biz_data,amount:g()(d).div(1e8).toString(),note:o,fee:W}):b.a.error("Transaction failed. ".concat(z.error));case 59:return D=r.props.userid,e.next=62,E.a.createTransaction({raw:$(i.toObject()).toString("hex"),wid:s,value:P,uid:D});case 62:if(!(F=e.sent).id){e.next=67;break}return e.next=66,E.a.approveTransaction({uid:D,id:F.id});case 66:r.setState({showResult:"multi",toAddress:t.biz_data,amount:a,note:o});case 67:case"end":return e.stop()}}),e,null,[[9,13,17,25],[18,,20,24]])})));return function(t){return e.apply(this,arguments)}}()),q(M(r),"changeBSV",(function(e){r.setFiatValue(e.target.value)})),q(M(r),"changeCurrency",(function(e){var t=r.props,n=t.form,a=t.currencyIndex,o=t.price,s=t.exchangeRate,i=P.a[a],c=e.target.value;if(o.bsv){var u=null,l=i.currencyCode.toLowerCase();u=o.bsv[l]?o.bsv[l]:g()(o.bsv.usd).times(s[l]),n.setFieldsValue({amount:c?g()(c).div(u).toFixed(8,1):0}),r.setState({amountCurrency:c?g()(c).div(u).toFixed(8,1):0,amountFiat:c||0})}})),q(M(r),"validate",(function(e,t,n){var a=r.props.price,o=g()(t).times(a.bsv.usd);g()(t).times(1e8).isLessThan(457)?n(Object(p.a)("amount_less_than")):o.isGreaterThan(1e3)?n(Object(p.a)("amount_more_than")):n()})),q(M(r),"validateTotal",(function(e,t,n){var a=r.props,o=a.price,s=a.form.getFieldValue("amount"),i=g()(s).times(o.bsv.usd);g()(s).times(1e8).isLessThan(457)?n(Object(p.a)("amount_less_than")):i.isGreaterThan(1e3)?n(Object(p.a)("amount_more_than")):n()})),q(M(r),"gotoBack",(function(){r.props.history.goBack()})),q(M(r),"switchCurrency",(function(e){r.setState({currencyType:e})})),r.state={showResult:!1,amountCurrency:0,amountFiat:0},r}var r,n,a,o,s,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(t,e),r=t,(n=[{key:"getWalletId",value:function(){return this.props.match.params.id}},{key:"createSingleAddress",value:(c=z(regeneratorRuntime.mark((function e(){var t,r,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,r=t.match,n=t.dispatch,a=r.params.id,e.next=4,n({type:"service/createSingleWalletAddress",payload:{wid:a,type:2}});case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"createMultiAddress",value:(s=z(regeneratorRuntime.mark((function e(){var t,r,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,r=t.match,n=t.dispatch,a=r.params.id,e.next=4,n({type:"service/createMultiPartyAddress",payload:{wid:parseInt(a),type:2}});case 4:if((o=e.sent).success){e.next=7;break}return e.abrupt("return",b.a.error("server_error"));case 7:return e.abrupt("return",o.data.address);case 8:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"renderSingleResult",value:function(){var e=this.state,t=e.toAddress,r=e.amount,n=e.note,a=e.fee,o=Object(x.b)(this.props.currentWallet.token);return i.a.createElement("div",{className:_.a.result},i.a.createElement("div",{className:_.a.icon},i.a.createElement(T.a,{type:"iconsent"})),i.a.createElement("div",{className:_.a.title},Object(p.a)("payment_sent")),i.a.createElement("div",{className:_.a.desc},Object(p.a)("sent")," ",i.a.createElement("span",null,r," ",o)," ",Object(p.a)("to")," ",t),n&&i.a.createElement("div",{className:_.a.note},n),i.a.createElement("div",{className:_.a.btns},i.a.createElement(y.a,{type:"primary",className:_.a.btn,onClick:this.gotoBack},Object(p.a)("close"))),i.a.createElement("div",{className:_.a.fee},Object(p.a)("network_fee")," ",a," ",o))}},{key:"renderMultiResult",value:function(){var e=this.state,t=e.toAddress,r=e.amount,n=e.note,a=e.fee,o=Object(x.b)(this.props.currentWallet.token);return i.a.createElement("div",{className:_.a.result},i.a.createElement("div",{className:_.a.icon},i.a.createElement(T.a,{type:"iconsigned"})),i.a.createElement("div",{className:_.a.title},Object(p.a)("tx_signed_you")),i.a.createElement("div",{className:_.a.desc},Object(p.a)("sign_tx_multi",r)," ",t),n&&i.a.createElement("div",{className:_.a.note},n),i.a.createElement("div",{className:_.a.btns},i.a.createElement(y.a,{type:"primary",className:_.a.btn,onClick:this.gotoBack},Object(p.a)("close"))),i.a.createElement("div",{className:_.a.fee},Object(p.a)("network_fee")," ",a," ",o))}},{key:"componentDidMount",value:(o=z(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dispatch({type:"service/queryWalletById",payload:{wid:this.getWalletId()}});case 2:if(t=this.props.match.params.type,2!==parseInt(t)){e.next=9;break}return e.next=6,this.createMultiAddress();case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,this.createSingleAddress();case 11:e.t0=e.sent;case 12:r=e.t0,this.setState({currencyType:Object(x.b)(this.props.currentWallet.token),change_address:r});case 14:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"setFiatValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this.props,r=t.form,n=t.currencyIndex,a=t.price,o=t.exchangeRate,s=P.a[n];if(a.bsv){var i=null,c=s.currencyCode.toLowerCase();i=a.bsv[c]?a.bsv[c]:g()(a.bsv.usd).times(o[c]),r.setFieldsValue({total:e?g()(e).multipliedBy(i).toFixed(8,1):0}),this.setState({amountCurrency:e||0,amountFiat:e?g()(e).multipliedBy(i).toFixed(8,1):0})}}},{key:"setAmount",value:function(e){this.props.form.setFieldsValue({amount:e}),this.setFiatValue(e)}},{key:"renderForm",value:function(){var e=this;if("single"===this.state.showResult)return this.renderSingleResult();if("multi"===this.state.showResult)return this.renderMultiResult();var t=this.props,r=t.form,n=t.currencyIndex,a=t.currentWallet,o=(t.loading,t.creating),s=r.getFieldDecorator,c=P.a[n].currencyCode,u=a.balance,l=a.frozen,f=a.name,d=a.type,b=a.threshold,v=a.token,j=this.state,g=j.currencyType,O=j.amountCurrency,w=j.amountFiat,k=Object(x.b)(v);return i.a.createElement("div",{className:_.a.container},i.a.createElement("div",{className:_.a.header},i.a.createElement("div",{className:_.a.title},Object(p.a)("send_to")),i.a.createElement("span",{className:_.a.goback,onClick:this.gotoBack}," ",Object(p.a)("cancel"))),i.a.createElement(h.a,{onSubmit:this.handleSubmit,hideRequiredMark:!0,className:_.a.content},i.a.createElement(Q,null,s("toAddress",{rules:[{required:!0},{validator:this.validAddress}]})(i.a.createElement(m.a,{allowClear:!0}))),i.a.createElement("div",{className:_.a.header},i.a.createElement("div",{className:_.a.title},Object(p.a)("from")," ",f)),i.a.createElement("div",{className:_.a.total},i.a.createElement("a",{href:"javascript:;",onClick:function(){e.setAmount(Object(R.b)(u))}},i.a.createElement("span",{className:_.a.balance},Object(p.a)("balance"))," ",Object(R.b)(u)," ",k," | ",i.a.createElement(C.a,{value:u})),l>0&&i.a.createElement(i.a.Fragment,null," | ",Object(p.a)("frozen")," ",Object(R.b)(l)," ",k)),i.a.createElement("div",{className:_.a.amount_container},i.a.createElement(Q,{style:{display:g===k?"block":"none",flex:1}},s("amount",{rules:[{validator:this.validate}]})(i.a.createElement(m.a,{onChange:this.changeBSV,style:{width:"100%"},allowClear:!0}))),i.a.createElement(Q,{style:{display:g===k?"none":"block",flex:1}},s("total",{rules:[{validator:this.validateTotal}]})(i.a.createElement(m.a,{onChange:this.changeCurrency,style:{width:"100%"},allowClear:!0}))),i.a.createElement("div",{className:_.a.currency_content},[k,c].map((function(t){return i.a.createElement("div",{key:t,className:t===g?Object(R.c)(_.a.current_currency,_.a.currency_item):_.a.currency_item,onClick:function(){return e.switchCurrency(t)}},t)})))),i.a.createElement("div",{className:_.a.total_container},Object(p.a)("equivalent_to")," ",g===k?"".concat(w," ").concat(c):"".concat(O," ").concat(k)),i.a.createElement("div",{className:_.a.label},Object(p.a)("add_a_msg")),i.a.createElement(Q,null,s("note")(i.a.createElement(m.a,null))),2===d&&i.a.createElement("div",{className:_.a.tips},i.a.createElement("span",{style:{fontWeight:"bold"}},Object(p.a)("notice"),":")," ",Object(p.a)("transfer_tips",b)),i.a.createElement("div",null,i.a.createElement(y.a,{type:"primary",loading:o,className:"btn",htmlType:"submit"},Object(p.a)("send")," ",g===k?"".concat(O," ").concat(k):"".concat(w," ").concat(c)))))}},{key:"render",value:function(){var e=this.props,t=e.signing,r=e.broadcasting,n=e.loading;return t?i.a.createElement(d.a,{tip:"Signing..."},this.renderForm()):r?i.a.createElement(d.a,{tip:"Broadcasting..."},this.renderForm()):n?i.a.createElement(d.a,null,this.renderForm()):this.renderForm()}}])&&D(r.prototype,n),a&&D(r,a),t}(s.Component))||o)||o)||o);function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function te(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function re(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ie=Object(c.connect)((function(e){var t=e.wallet;e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){se(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t)}))(V=function(e){function t(){return ee(this,t),re(this,ne(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return i.a.createElement("div",{className:l.a.container},this.renderSidebar(),i.a.createElement("div",{className:l.a.detail},i.a.createElement(X,null)))}}])&&te(r.prototype,n),a&&te(r,a),t}(f.a))||V},939:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return p})),r.d(t,"b",(function(){return f}));r(1084);var n=r(938),a=r.n(n),o=r(78),s=r.n(o);window.location;function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),a()(e).format(t)):e}var c=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function u(e){return!!e&&c.test(e)}function l(){return Array.prototype.slice.call(arguments).join(" ")}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var r=e.substr(0,t[0]),n=e.substr(-t[1],t[1]);return r+"****"+n}}var f=function(e){return s()(e).div(1e8).toString()}}}]);