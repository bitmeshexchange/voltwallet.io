(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1074:function(e,t,n){"use strict";n.d(t,"a",(function(){return H}));var r,a,o=n(0),i=n.n(o),s=n(272),c=n(893),u=n.n(c),l=(n(274),n(18)),p=n(895),f=n.n(p),y=(n(417),n(273)),m=n(896),b=n.n(m),d=n(57),h=n(935),v=n(30);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _,x=(r=Object(s.connect)((function(e){var t=e.wallet;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.user,{},t,{loading:e.loading.effects["service/queryWallet"]})})),Object(d.withRouter)(a=r(a=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=O(this,k(t).call(this,e))).bgcs=[],n.state={joining:0,hideAmount:window.localStorage.getItem(v.a.HIDEAMOUNT)||0},n}var n,r,a,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,e),n=t,(r=[{key:"getWalletId",value:function(){var e=this.props,t=e.walletList,n=e.match.params.id;if(void 0===n)for(var r=0;r<t.length;r++){var a=t[r];a.join,a.status,n=a.id;break}return n}},{key:"joinWallet",value:(o=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),this.setState({joining:t}),e.next=4,this.props.dispatch({type:"service/joinWallet",payload:{wid:t}});case 4:n=e.sent,this.setState({joining:0}),n&&n.success&&this.props.dispatch({type:"service/updateWallet"});case 7:case"end":return e.stop()}}),e,this)})),s=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=o.apply(e,t);function i(e){g(a,n,r,i,s,"next",e)}function s(e){g(a,n,r,i,s,"throw",e)}i(void 0)}))},function(e){return s.apply(this,arguments)})},{key:"componentWillReceiveProps",value:function(e){e.hideAmount!==this.state.hideAmount&&this.setState({hideAmount:e.hideAmount})}},{key:"render",value:function(){var e=this.props,t=e.walletList,n=e.loading,r=e.match,a=parseInt(r.params.type)||1;if(0===t.length)return null;var o=this.state.hideAmount,s=this.getWalletId();return i.a.createElement(y.a,{spinning:n},i.a.createElement("div",{className:b.a.list},i.a.createElement("div",{className:b.a.list_content},t.map((function(e){var t=e.name,n=e.id,r=e.type,c=e.joinStatus,u=e.founder,l=e.status,p=e.balance,f=e.share,y=e.waitJoin,m=e.token,j=parseInt(n)===parseInt(s)?Object(h.c)(b.a.item_contrainer,b.a.current_item):b.a.item_contrainer,g=o?v.g:Object(h.b)(p),w=null,O=Object(v.b)(m);0===c?w=i.a.createElement("span",{className:b.a.join},"JOIN WALLET"):0===parseInt(l)&&(w=i.a.createElement("span",{className:b.a.wait_join},y," MEMBERS TO JOIN"));var k=i.a.createElement("div",{className:b.a.list_item},i.a.createElement("div",{className:b.a.wallet_name},t),2===r&&i.a.createElement("div",{className:b.a.wallet_info},w,f," members"),i.a.createElement("div",{className:b.a.wallet_desc},0===parseInt(l)?u:"".concat(g," ").concat(O)));return i.a.createElement(d.Link,{to:"/message/list/".concat(a,"/").concat(n),key:n,className:j},k)})))))}}])&&w(n.prototype,r),a&&w(n,a),t}(o.Component))||a)||a),I=n(127);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=Object(d.withRouter)(_=function(e){function t(e){var n,r,a,o,s,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=R(t).call(this,e),n=!a||"object"!==N(a)&&"function"!=typeof a?T(r):a,o=T(n),c=function(){var e=parseInt(n.props.match.params.type);return e||(e=1),i.a.createElement("div",{className:f.a.wallet_type},v.i.map((function(t,n){if(n>0)return i.a.createElement("div",{key:t.key,className:n===e?f.a.selected:""},i.a.createElement(d.Link,{to:"/message/list/".concat(n)},t.text))})))},(s="renderWalletMenu")in o?Object.defineProperty(o,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[s]=c,n.state={},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=parseInt(this.props.match.params.type);return e||(e=1),i.a.createElement("div",{className:f.a.list_container},this.renderWalletMenu(),i.a.createElement(x,{history:this.props.history}),i.a.createElement("div",{className:f.a.create_wallet},i.a.createElement(I.a,{type:"iconcreatewallet"}),i.a.createElement(d.Link,{to:"/message/createWallet/".concat(e)},Object(l.a)("create_wallet"))))}}])&&W(n.prototype,r),a&&W(n,a),t}(o.Component))||_;function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function A(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){L(o,r,a,i,s,"next",e)}function s(e){L(o,r,a,i,s,"throw",e)}i(void 0)}))}}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=B(this,q(t).call(this,e))).state={ready:!1},n}var n,r,a,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:(s=A(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.match.params,n=t.type,r=t.id,this.saveCurrentWallet(n,r);case 2:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"getWalletId",value:function(e,t){if(void 0===t)for(var n=0;n<e.length;n++){t=e[n].id;break}return t}},{key:"saveCurrentWallet",value:(o=A(regeneratorRuntime.mark((function e(t,n,r){var a,o,i,s,c,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,o=a.dispatch,i=a.match,s=this.props.walletList,t||(t=parseInt(i.params.type)||1),!(s.length<1)&&r){e.next=7;break}return e.next=6,o({type:"service/queryWallet",payload:{type:t}});case 6:s=e.sent;case 7:if(s&&!(s.length<1)){e.next=14;break}return this.lastId=-1,e.next=11,o({type:"wallet/save",payload:{currentWallet:{}}});case 11:return this.setState({ready:!0}),this.ready&&this.ready(parseInt(c)),e.abrupt("return");case 14:return c=this.getWalletId(s,n),this.lastId=c,u=s.find((function(e){return e.id===parseInt(c)})),e.next=19,o({type:"wallet/save",payload:{walletList:s,showWalletInfo:!1,currentWallet:u}});case 19:this.setState({ready:!0}),this.ready&&this.ready(parseInt(c));case 21:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return o.apply(this,arguments)})},{key:"loadTransactions",value:function(e){this.props.dispatch({type:"service/queryTransaction",payload:{wid:e}})}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.type,n=e.match.params.id,r=this.props.match.params.type,a=this.props.match.params.id;t===r&&void 0===n&&void 0===a||t===r&&n===a||this.lastId!==n&&this.saveCurrentWallet(t,n,t===r)}},{key:"renderSidebar",value:function(){return i.a.createElement(D,{type:this.props.type})}},{key:"render",value:function(){return i.a.createElement("div",{className:u.a.container},this.renderSidebar(),i.a.createElement("div",{className:u.a.detail}))}}])&&M(n.prototype,r),a&&M(n,a),t}(o.Component)},1077:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),a=n.n(r),o=n(127),i=n(897),s=n.n(i);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return u(this,t),p(this,f(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.className||s.a.icon;return a.a.createElement("div",{className:e},a.a.createElement(o.a,{type:"iconbsv1"}))}}])&&l(n.prototype,r),i&&l(n,i),t}(r.Component)},1079:function(e,t,n){var r={"./af":939,"./af.js":939,"./ar":940,"./ar-dz":941,"./ar-dz.js":941,"./ar-kw":942,"./ar-kw.js":942,"./ar-ly":943,"./ar-ly.js":943,"./ar-ma":944,"./ar-ma.js":944,"./ar-sa":945,"./ar-sa.js":945,"./ar-tn":946,"./ar-tn.js":946,"./ar.js":940,"./az":947,"./az.js":947,"./be":948,"./be.js":948,"./bg":949,"./bg.js":949,"./bm":950,"./bm.js":950,"./bn":951,"./bn.js":951,"./bo":952,"./bo.js":952,"./br":953,"./br.js":953,"./bs":954,"./bs.js":954,"./ca":955,"./ca.js":955,"./cs":956,"./cs.js":956,"./cv":957,"./cv.js":957,"./cy":958,"./cy.js":958,"./da":959,"./da.js":959,"./de":960,"./de-at":961,"./de-at.js":961,"./de-ch":962,"./de-ch.js":962,"./de.js":960,"./dv":963,"./dv.js":963,"./el":964,"./el.js":964,"./en-SG":965,"./en-SG.js":965,"./en-au":966,"./en-au.js":966,"./en-ca":967,"./en-ca.js":967,"./en-gb":968,"./en-gb.js":968,"./en-ie":969,"./en-ie.js":969,"./en-il":970,"./en-il.js":970,"./en-nz":971,"./en-nz.js":971,"./eo":972,"./eo.js":972,"./es":973,"./es-do":974,"./es-do.js":974,"./es-us":975,"./es-us.js":975,"./es.js":973,"./et":976,"./et.js":976,"./eu":977,"./eu.js":977,"./fa":978,"./fa.js":978,"./fi":979,"./fi.js":979,"./fo":980,"./fo.js":980,"./fr":981,"./fr-ca":982,"./fr-ca.js":982,"./fr-ch":983,"./fr-ch.js":983,"./fr.js":981,"./fy":984,"./fy.js":984,"./ga":985,"./ga.js":985,"./gd":986,"./gd.js":986,"./gl":987,"./gl.js":987,"./gom-latn":988,"./gom-latn.js":988,"./gu":989,"./gu.js":989,"./he":990,"./he.js":990,"./hi":991,"./hi.js":991,"./hr":992,"./hr.js":992,"./hu":993,"./hu.js":993,"./hy-am":994,"./hy-am.js":994,"./id":995,"./id.js":995,"./is":996,"./is.js":996,"./it":997,"./it-ch":998,"./it-ch.js":998,"./it.js":997,"./ja":999,"./ja.js":999,"./jv":1e3,"./jv.js":1e3,"./ka":1001,"./ka.js":1001,"./kk":1002,"./kk.js":1002,"./km":1003,"./km.js":1003,"./kn":1004,"./kn.js":1004,"./ko":1005,"./ko.js":1005,"./ku":1006,"./ku.js":1006,"./ky":1007,"./ky.js":1007,"./lb":1008,"./lb.js":1008,"./lo":1009,"./lo.js":1009,"./lt":1010,"./lt.js":1010,"./lv":1011,"./lv.js":1011,"./me":1012,"./me.js":1012,"./mi":1013,"./mi.js":1013,"./mk":1014,"./mk.js":1014,"./ml":1015,"./ml.js":1015,"./mn":1016,"./mn.js":1016,"./mr":1017,"./mr.js":1017,"./ms":1018,"./ms-my":1019,"./ms-my.js":1019,"./ms.js":1018,"./mt":1020,"./mt.js":1020,"./my":1021,"./my.js":1021,"./nb":1022,"./nb.js":1022,"./ne":1023,"./ne.js":1023,"./nl":1024,"./nl-be":1025,"./nl-be.js":1025,"./nl.js":1024,"./nn":1026,"./nn.js":1026,"./pa-in":1027,"./pa-in.js":1027,"./pl":1028,"./pl.js":1028,"./pt":1029,"./pt-br":1030,"./pt-br.js":1030,"./pt.js":1029,"./ro":1031,"./ro.js":1031,"./ru":1032,"./ru.js":1032,"./sd":1033,"./sd.js":1033,"./se":1034,"./se.js":1034,"./si":1035,"./si.js":1035,"./sk":1036,"./sk.js":1036,"./sl":1037,"./sl.js":1037,"./sq":1038,"./sq.js":1038,"./sr":1039,"./sr-cyrl":1040,"./sr-cyrl.js":1040,"./sr.js":1039,"./ss":1041,"./ss.js":1041,"./sv":1042,"./sv.js":1042,"./sw":1043,"./sw.js":1043,"./ta":1044,"./ta.js":1044,"./te":1045,"./te.js":1045,"./tet":1046,"./tet.js":1046,"./tg":1047,"./tg.js":1047,"./th":1048,"./th.js":1048,"./tl-ph":1049,"./tl-ph.js":1049,"./tlh":1050,"./tlh.js":1050,"./tr":1051,"./tr.js":1051,"./tzl":1052,"./tzl.js":1052,"./tzm":1053,"./tzm-latn":1054,"./tzm-latn.js":1054,"./tzm.js":1053,"./ug-cn":1055,"./ug-cn.js":1055,"./uk":1056,"./uk.js":1056,"./ur":1057,"./ur.js":1057,"./uz":1058,"./uz-latn":1059,"./uz-latn.js":1059,"./uz.js":1058,"./vi":1060,"./vi.js":1060,"./x-pseudo":1061,"./x-pseudo.js":1061,"./yo":1062,"./yo.js":1062,"./zh-cn":1063,"./zh-cn.js":1063,"./zh-hk":1064,"./zh-hk.js":1064,"./zh-tw":1065,"./zh-tw.js":1065};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=1079},927:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return me}));var r,a=n(0),o=n.n(a),i=n(272),s=n(893),c=n.n(s),u=n(18),l=n(1074),p=(n(418),n(128)),f=(n(1068),n(1069)),y=(n(417),n(273)),m=(n(419),n(156)),b=(n(937),n(938)),d=n(57),h=n(3),v=n(77),j=n.n(v),g=n(1077),w=n(30);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N,W,R,T=Object(i.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){function t(){return k(this,t),E(this,S(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=window.localStorage.getItem("VoltLocalCurrencyIndex")||0,t=w.e[e],n=this.props,r=n.price,a=n.value;if(!r.bsv)return null;if(1===parseInt(e))return"".concat(t.symbol).concat(a);if(0===parseInt(e)){var o=j()(r.bsv.cny).div(r.bsv.usd).multipliedBy(a).toFixed(2,1).toString();return"".concat(t.symbol).concat(o)}}}])&&P(n.prototype,r),a&&P(n,a),t}(a.Component))||r,z=n(917),D=n.n(z),C=n(935);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function M(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){A(o,r,a,i,s,"next",e)}function s(e){A(o,r,a,i,s,"throw",e)}i(void 0)}))}}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){Y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K,U=h.Transaction.Sighash,V=h.crypto.Signature,X=h.crypto.ECDSA,$=h.crypto.BN,Q=h.Transaction.Signature,Z=V.SIGHASH_ALL|V.SIGHASH_FORKID,ee=window.location.hostname,te=[Object(u.a)("owned"),Object(u.a)("buy_new")],ne=b.a.Item,re=(N=b.a.create(),W=Object(i.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return J({},t,{},n,{loading:r["service/queryPaymailById"],addLoading:r["service/addPaymail"],signLoading:r["service/signSingWalletMessage"],broadcasting:r["service/broadcast"]})})),Object(d.withRouter)(R=N(R=W(R=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=q(t).call(this,e),n=!a||"object"!==L(a)&&"function"!=typeof a?F(r):a,Y(F(n),"gotoBack",(function(){n.props.history.goBack()})),Y(F(n),"switchMenu",(function(e){n.setState({currentMenuIndex:e})})),Y(F(n),"price",(function(e){var t=window.localStorage.getItem("VoltLocalCurrencyIndex")||0,r=w.e[t],a=n.props.price;if(!a.bsv)return null;var o=a.bsv[r.key],i=j()(e).div(1e8).times(o).toFixed(2,1);return"".concat(r.symbol).concat(i)})),Y(F(n),"queryPaymail",function(){var e=M(regeneratorRuntime.mark((function e(t,r,a){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(/^[a-zA-Z0-9]{1,20}$/.test(r)){e.next=3;break}return e.abrupt("return",a(Object(u.a)("invalidPaymail")));case 3:return e.next=5,n.props.dispatch({type:"service/queryPaymail",payload:{name:r}});case 5:if(!((o=e.sent)>0)){e.next=8;break}return e.abrupt("return",a(Object(u.a)("existing")));case 8:if(0!==o){e.next=10;break}return e.abrupt("return",a());case 10:return e.abrupt("return",a("error"));case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),Y(F(n),"assignPrimary",function(){var e=M(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.dispatch({type:"service/setMainPaymail",payload:{wid:n.getWalletId(),id:t}});case 2:m.a.success(Object(u.a)("setting_success")),n.update();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Y(F(n),"handleSubmit",(function(e){e.preventDefault();var t=n.props,r=t.form,a=t.personalWallet;r.validateFields(function(){var e=M(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=6;break}if(!(n.getWalletId().toString()===a.id.toString()&&a.paymail.length<1)){e.next=3;break}return e.abrupt("return",n.addPaymail(r.name));case 3:return r=J({},r,{price:1,toAddress:"1NYBXEqtCuzwppJQ5XXzpuztGjaLvLwz2p",note:"Buy paymail "+r.name}),n.createTransaction(r),e.abrupt("return");case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())})),n.state={currentMenuIndex:0,personalWallet:{}},n}var n,r,a,i,s,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,e),n=t,(r=[{key:"getWalletId",value:function(){return this.props.match.params.id}},{key:"update",value:(c=M(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dispatch({type:"service/queryPaymailById",payload:{wid:this.getWalletId()}});case 2:this.setState({currentMenuIndex:0});case 3:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"createTransaction",value:(s=M(regeneratorRuntime.mark((function e(t){var n,r,a,o,i,s,c,l,p,f,y,b,d,v,g,w,O,k,P,E,S;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=this.props,r=n.personalWallet,n.match,a=n.price,o=j()(t.price).div(a.bsv.usd).toFixed(8,1).toString(),i=r.utxo,s=j()(o).multipliedBy(1e8),c=s.toString(),l=new h.Transaction,p=!0,f=!1,y=void 0,e.prev=9,b=i[Symbol.iterator]();!(p=(d=b.next()).done);p=!0)v=d.value,s.isGreaterThan(0)&&(g=v.address,w=v.txid,O=v.value,k=v.vout,1===v.status&&(l.from({txId:w,outputIndex:k,script:h.Script.buildPublicKeyHashOut(g).toString(),satoshis:O}),s=s.minus(O)));e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),f=!0,y=e.t0;case 17:e.prev=17,e.prev=18,p||null==b.return||b.return();case 20:if(e.prev=20,!f){e.next=23;break}throw y;case 23:return e.finish(20);case 24:return e.finish(17);case 25:if(!s.isGreaterThan(0)){e.next=27;break}return e.abrupt("return",m.a.error(Object(u.a)("lack_of_balance")));case 27:return P=j()(o).multipliedBy(1e8).toNumber(),l.to(t.toAddress,P),l.change(r.change_address),E=l.inputs.map((function(e,t){var n=e.output,r=n.script.toAddress().toString(),a=$.fromBuffer(U.sighash(l,Z,t,n.script,n.satoshisBN),{endian:"little"});return{address:r,hash:("0".repeat(8)+a.toString("hex")).slice(-64)}})),e.next=33,this.props.dispatch({type:"service/signSingWalletMessage",payload:E});case 33:return e.sent.forEach((function(e,t){var n=new V({r:new $(e.r,16),s:X.toLowS(new $(e.s,16))}),r=l.inputs[t];l.applySignature(new Q({publicKey:e.publicKey,prevTxId:r.prevTxId,outputIndex:r.outputIndex,inputIndex:t,sigtype:Z,signature:n}))})),e.next=37,this.props.dispatch({type:"service/broadcast",payload:{tx:l,note:t.note,value:c,wid:r.id,biz_data:t.toAddress}});case 37:(S=e.sent).success&&S.data.id?this.addPaymail(t.name):m.a.error("Transaction failed. ".concat(S.error));case 39:case"end":return e.stop()}}),e,this,[[9,13,17,25],[18,,20,24]])}))),function(e){return s.apply(this,arguments)})},{key:"addPaymail",value:(i=M(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dispatch({type:"service/addPaymail",payload:{wid:this.getWalletId(),name:t}});case 2:m.a.success(Object(u.a)("add_success")),this.update();case 4:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props,n=t.currentWallet,r=t.loading,a=t.form,i=t.addLoading,s=void 0!==i&&i,c=t.personalWallet,l=t.signLoading,m=void 0!==l&&l,d=t.broadcasting,h=void 0!==d&&d,v=n.paymail;if(r||!v)return null;var j,w,O=this.state.currentMenuIndex,k=a.getFieldDecorator;v&&v.length>0&&(j=v.find((function(e){return 1===e.main})),w=v.filter((function(e){return 0===e.main})),j||(j=v[0],w=v.slice(1)));var P="";return s?P="adding...":m?P="Signing...":h&&(P="Broadcasting"),o.a.createElement("div",{className:D.a.container},o.a.createElement(g.a,null),o.a.createElement("div",{className:D.a.title},Object(u.a)("wallet_paymail")),o.a.createElement("span",{className:D.a.goback,onClick:this.gotoBack}," ",Object(u.a)("cancel")),o.a.createElement("div",{className:D.a.tips},o.a.createElement("span",{style:{fontWeight:"bold"}},Object(u.a)("paymail_tips1"))," ",Object(u.a)("paymail_tips2")),o.a.createElement("div",{className:D.a.op_container},o.a.createElement("div",{className:D.a.op},te.map((function(t,n){return o.a.createElement("div",{className:O===n?Object(C.c)(D.a.item,D.a.current_item):D.a.item,key:t,onClick:function(){return e.switchMenu(n)}},t)})))),0===O&&o.a.createElement(y.a,{spinning:r},v&&v.length>0?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:D.a.label},Object(u.a)("primary_paymail")),o.a.createElement("div",{className:D.a.value},j?o.a.createElement("div",null,o.a.createElement("span",{className:D.a.name},j.name),"@",ee):Object(u.a)("no_main_paymail"))):o.a.createElement("div",{className:D.a.tips},Object(u.a)("no_paymail")),w&&w.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:D.a.label},Object(u.a)("other_paymail")),o.a.createElement("div",{className:D.a.paymails},o.a.createElement("div",null,w.map((function(t,n){return o.a.createElement("div",{className:D.a.value,key:t.id},o.a.createElement("div",null,o.a.createElement("span",{className:D.a.name},t.name),"@",ee),1===t.main?o.a.createElement("div",{className:D.a.primary},Object(u.a)("primary_paymail")):o.a.createElement("div",{className:D.a.action,onClick:function(){return e.assignPrimary(t.id)}},Object(u.a)("assign_primary")))})))))),1===O&&o.a.createElement(y.a,{spinning:s||m||h,tip:P},o.a.createElement(b.a,{onSubmit:this.handleSubmit},o.a.createElement(ne,{className:D.a.input},k("name",{initialValue:name,rules:[{required:!0},{validator:this.queryPaymail}]})(o.a.createElement(f.a,{addonAfter:"@".concat(ee)}))),o.a.createElement(p.a,{type:"primary",htmlType:"submit",className:D.a.btn},Object(u.a)("buy_for")," ",o.a.createElement(T,{value:1}))),c&&o.a.createElement("div",{className:D.a.tips},Object(u.a)("available_funds",{balance:this.price(c.balance),name:c.name}))))}}])&&B(n.prototype,r),a&&B(n,a),t}(a.Component))||R)||R)||R),ae=n(274);function oe(e){return(oe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e,t,n,r,a,o,i){try{var s=e[o](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,a)}function se(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ce(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ue(e,t){return!t||"object"!==oe(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function le(e){return(le=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var me=Object(i.connect)((function(e){var t=e.wallet,n=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){ye(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{loading:n["service/queryWallet"]||n["service/createSingleWalletAddress"]})}))(K=function(e){function t(){return se(this,t),ue(this,le(t).apply(this,arguments))}var n,r,a,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(t,e),n=t,(r=[{key:"getWalletId",value:function(){return this.props.match.params.id}},{key:"componentDidMount",value:(i=regeneratorRuntime.mark((function e(){var t,n,r,a,o,i,s,c,u,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params,n=t.type,r=t.id,e.next=3,this.saveCurrentWallet(n,r);case 3:return a=this.props,o=a.dispatch,i=a.match,s=a.walletList,e.next=6,o({type:"service/queryPaymailById",payload:{wid:this.getWalletId()}});case 6:if(1===parseInt(i.params.type)){e.next=13;break}return e.next=9,o({type:"service/queryWalletData",payload:{type:1}});case 9:u=e.sent,c=u[0],e.next=14;break;case 13:c=s.find((function(e){return 1===e.type}));case 14:return e.next=16,o({type:"service/createSingleWalletAddress",payload:{wid:c.id,type:2}});case 16:l=e.sent,c.change_address=l,this.setState({personalWallet:c});case 19:case"end":return e.stop()}}),e,this)})),s=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=i.apply(e,t);function o(e){ie(a,n,r,o,s,"next",e)}function s(e){ie(a,n,r,o,s,"throw",e)}o(void 0)}))},function(){return s.apply(this,arguments)})},{key:"render",value:function(){return this.props.loading?o.a.createElement(ae.a,null):o.a.createElement("div",{className:c.a.container},this.renderSidebar(),o.a.createElement("div",{className:c.a.detail},o.a.createElement(re,{personalWallet:this.state.personalWallet})))}}])&&ce(n.prototype,r),a&&ce(n,a),t}(l.a))||K},935:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return f}));n(1078);var r=n(934),a=n.n(r),o=n(77),i=n.n(o);window.location;function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),a()(e).format(t)):e}var c=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function u(e){return!!e&&c.test(e)}function l(){return Array.prototype.slice.call(arguments).join(" ")}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var n=e.substr(0,t[0]),r=e.substr(-t[1],t[1]);return n+"****"+r}}var f=function(e){return i()(e).div(1e8).toString()}}}]);