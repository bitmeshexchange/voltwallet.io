(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1074:function(e,t,r){"use strict";r.d(t,"a",(function(){return V}));var n,a,o=r(0),s=r.n(o),i=r(272),c=r(893),u=r.n(c),l=(r(274),r(18)),p=r(895),f=r.n(p),m=(r(417),r(273)),d=r(896),y=r.n(d),b=r(57),h=r(935),v=r(30);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function w(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P,x=(n=Object(i.connect)((function(e){var t=e.wallet;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.user,{},t,{loading:e.loading.effects["service/queryWallet"]})})),Object(b.withRouter)(a=n(a=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=w(this,k(t).call(this,e))).bgcs=[],r.state={joining:0,hideAmount:window.localStorage.getItem(v.a.HIDEAMOUNT)||0},r}var r,n,a,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),r=t,(n=[{key:"getWalletId",value:function(){var e=this.props,t=e.walletList,r=e.match.params.id;if(void 0===r)for(var n=0;n<t.length;n++){var a=t[n];a.join,a.status,r=a.id;break}return r}},{key:"joinWallet",value:(o=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),this.setState({joining:t}),e.next=4,this.props.dispatch({type:"service/joinWallet",payload:{wid:t}});case 4:r=e.sent,this.setState({joining:0}),r&&r.success&&this.props.dispatch({type:"service/updateWallet"});case 7:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(r,n){var a=o.apply(e,t);function s(e){g(a,r,n,s,i,"next",e)}function i(e){g(a,r,n,s,i,"throw",e)}s(void 0)}))},function(e){return i.apply(this,arguments)})},{key:"componentWillReceiveProps",value:function(e){e.hideAmount!==this.state.hideAmount&&this.setState({hideAmount:e.hideAmount})}},{key:"render",value:function(){var e=this.props,t=e.walletList,r=e.loading,n=e.match,a=parseInt(n.params.type)||1;if(0===t.length)return null;var o=this.state.hideAmount,i=this.getWalletId();return s.a.createElement(m.a,{spinning:r},s.a.createElement("div",{className:y.a.list},s.a.createElement("div",{className:y.a.list_content},t.map((function(e){var t=e.name,r=e.id,n=e.type,c=e.joinStatus,u=e.founder,l=e.status,p=e.balance,f=e.share,m=e.waitJoin,d=e.token,j=parseInt(r)===parseInt(i)?Object(h.c)(y.a.item_contrainer,y.a.current_item):y.a.item_contrainer,g=o?v.g:Object(h.b)(p),O=null,w=Object(v.b)(d);0===c?O=s.a.createElement("span",{className:y.a.join},"JOIN WALLET"):0===parseInt(l)&&(O=s.a.createElement("span",{className:y.a.wait_join},m," MEMBERS TO JOIN"));var k=s.a.createElement("div",{className:y.a.list_item},s.a.createElement("div",{className:y.a.wallet_name},t),2===n&&s.a.createElement("div",{className:y.a.wallet_info},O,f," members"),s.a.createElement("div",{className:y.a.wallet_desc},0===parseInt(l)?u:"".concat(g," ").concat(w)));return s.a.createElement(b.Link,{to:"/message/list/".concat(a,"/").concat(r),key:r,className:j},k)})))))}}])&&O(r.prototype,n),a&&O(r,a),t}(o.Component))||a)||a),N=r(127);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var A=Object(b.withRouter)(P=function(e){function t(e){var r,n,a,o,i,c;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=T(t).call(this,e),r=!a||"object"!==I(a)&&"function"!=typeof a?W(n):a,o=W(r),c=function(){var e=parseInt(r.props.match.params.type);return e||(e=1),s.a.createElement("div",{className:f.a.wallet_type},v.i.map((function(t,r){if(r>0)return s.a.createElement("div",{key:t.key,className:r===e?f.a.selected:""},s.a.createElement(b.Link,{to:"/message/list/".concat(r)},t.text))})))},(i="renderWalletMenu")in o?Object.defineProperty(o,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):o[i]=c,r.state={},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=parseInt(this.props.match.params.type);return e||(e=1),s.a.createElement("div",{className:f.a.list_container},this.renderWalletMenu(),s.a.createElement(x,{history:this.props.history}),s.a.createElement("div",{className:f.a.create_wallet},s.a.createElement(N.a,{type:"iconcreatewallet"}),s.a.createElement(b.Link,{to:"/message/createWallet/".concat(e)},Object(l.a)("create_wallet"))))}}])&&R(r.prototype,n),a&&R(r,a),t}(o.Component))||P;function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function z(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){D(o,n,a,s,i,"next",e)}function i(e){D(o,n,a,s,i,"throw",e)}s(void 0)}))}}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function B(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var V=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=B(this,L(t).call(this,e))).state={ready:!1},r}var r,n,a,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:(i=z(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.match.params,r=t.type,n=t.id,this.saveCurrentWallet(r,n);case 2:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"getWalletId",value:function(e,t){if(void 0===t)for(var r=0;r<e.length;r++){t=e[r].id;break}return t}},{key:"saveCurrentWallet",value:(o=z(regeneratorRuntime.mark((function e(t,r,n){var a,o,s,i,c,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,o=a.dispatch,s=a.match,i=this.props.walletList,t||(t=parseInt(s.params.type)||1),!(i.length<1)&&n){e.next=7;break}return e.next=6,o({type:"service/queryWallet",payload:{type:t}});case 6:i=e.sent;case 7:if(i&&!(i.length<1)){e.next=14;break}return this.lastId=-1,e.next=11,o({type:"wallet/save",payload:{currentWallet:{}}});case 11:return this.setState({ready:!0}),this.ready&&this.ready(parseInt(c)),e.abrupt("return");case 14:return c=this.getWalletId(i,r),this.lastId=c,u=i.find((function(e){return e.id===parseInt(c)})),e.next=19,o({type:"wallet/save",payload:{walletList:i,showWalletInfo:!1,currentWallet:u}});case 19:this.setState({ready:!0}),this.ready&&this.ready(parseInt(c));case 21:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return o.apply(this,arguments)})},{key:"loadTransactions",value:function(e){this.props.dispatch({type:"service/queryTransaction",payload:{wid:e}})}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.type,r=e.match.params.id,n=this.props.match.params.type,a=this.props.match.params.id;t===n&&void 0===r&&void 0===a||t===n&&r===a||this.lastId!==r&&this.saveCurrentWallet(t,r,t===n)}},{key:"renderSidebar",value:function(){return s.a.createElement(A,{type:this.props.type})}},{key:"render",value:function(){return s.a.createElement("div",{className:u.a.container},this.renderSidebar(),s.a.createElement("div",{className:u.a.detail}))}}])&&M(r.prototype,n),a&&M(r,a),t}(o.Component)},1076:function(e,t,r){"use strict";var n,a=r(0),o=r.n(a),s=r(272),i=r(30),c=r(77),u=r.n(c);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=Object(s.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.wallet)}))(n=function(e){function t(){return p(this,t),m(this,d(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=window.localStorage.getItem("VoltLocalCurrencyIndex")||0,t=i.e[e],r=this.props,n=r.price,a=r.value,s=r.usd;if(!n.bsv)return null;var c=n.bsv[t.key];s&&(c=u()(n.bsv[t.key]).div(n.bsv.usd).multipliedBy(s));var l=u()(a).div(1e8).times(c).toFixed(2,1);return o.a.createElement("span",null,t.symbol,l)}}])&&f(r.prototype,n),a&&f(r,a),t}(a.Component))||n;t.a=v},1079:function(e,t,r){var n={"./af":939,"./af.js":939,"./ar":940,"./ar-dz":941,"./ar-dz.js":941,"./ar-kw":942,"./ar-kw.js":942,"./ar-ly":943,"./ar-ly.js":943,"./ar-ma":944,"./ar-ma.js":944,"./ar-sa":945,"./ar-sa.js":945,"./ar-tn":946,"./ar-tn.js":946,"./ar.js":940,"./az":947,"./az.js":947,"./be":948,"./be.js":948,"./bg":949,"./bg.js":949,"./bm":950,"./bm.js":950,"./bn":951,"./bn.js":951,"./bo":952,"./bo.js":952,"./br":953,"./br.js":953,"./bs":954,"./bs.js":954,"./ca":955,"./ca.js":955,"./cs":956,"./cs.js":956,"./cv":957,"./cv.js":957,"./cy":958,"./cy.js":958,"./da":959,"./da.js":959,"./de":960,"./de-at":961,"./de-at.js":961,"./de-ch":962,"./de-ch.js":962,"./de.js":960,"./dv":963,"./dv.js":963,"./el":964,"./el.js":964,"./en-SG":965,"./en-SG.js":965,"./en-au":966,"./en-au.js":966,"./en-ca":967,"./en-ca.js":967,"./en-gb":968,"./en-gb.js":968,"./en-ie":969,"./en-ie.js":969,"./en-il":970,"./en-il.js":970,"./en-nz":971,"./en-nz.js":971,"./eo":972,"./eo.js":972,"./es":973,"./es-do":974,"./es-do.js":974,"./es-us":975,"./es-us.js":975,"./es.js":973,"./et":976,"./et.js":976,"./eu":977,"./eu.js":977,"./fa":978,"./fa.js":978,"./fi":979,"./fi.js":979,"./fo":980,"./fo.js":980,"./fr":981,"./fr-ca":982,"./fr-ca.js":982,"./fr-ch":983,"./fr-ch.js":983,"./fr.js":981,"./fy":984,"./fy.js":984,"./ga":985,"./ga.js":985,"./gd":986,"./gd.js":986,"./gl":987,"./gl.js":987,"./gom-latn":988,"./gom-latn.js":988,"./gu":989,"./gu.js":989,"./he":990,"./he.js":990,"./hi":991,"./hi.js":991,"./hr":992,"./hr.js":992,"./hu":993,"./hu.js":993,"./hy-am":994,"./hy-am.js":994,"./id":995,"./id.js":995,"./is":996,"./is.js":996,"./it":997,"./it-ch":998,"./it-ch.js":998,"./it.js":997,"./ja":999,"./ja.js":999,"./jv":1e3,"./jv.js":1e3,"./ka":1001,"./ka.js":1001,"./kk":1002,"./kk.js":1002,"./km":1003,"./km.js":1003,"./kn":1004,"./kn.js":1004,"./ko":1005,"./ko.js":1005,"./ku":1006,"./ku.js":1006,"./ky":1007,"./ky.js":1007,"./lb":1008,"./lb.js":1008,"./lo":1009,"./lo.js":1009,"./lt":1010,"./lt.js":1010,"./lv":1011,"./lv.js":1011,"./me":1012,"./me.js":1012,"./mi":1013,"./mi.js":1013,"./mk":1014,"./mk.js":1014,"./ml":1015,"./ml.js":1015,"./mn":1016,"./mn.js":1016,"./mr":1017,"./mr.js":1017,"./ms":1018,"./ms-my":1019,"./ms-my.js":1019,"./ms.js":1018,"./mt":1020,"./mt.js":1020,"./my":1021,"./my.js":1021,"./nb":1022,"./nb.js":1022,"./ne":1023,"./ne.js":1023,"./nl":1024,"./nl-be":1025,"./nl-be.js":1025,"./nl.js":1024,"./nn":1026,"./nn.js":1026,"./pa-in":1027,"./pa-in.js":1027,"./pl":1028,"./pl.js":1028,"./pt":1029,"./pt-br":1030,"./pt-br.js":1030,"./pt.js":1029,"./ro":1031,"./ro.js":1031,"./ru":1032,"./ru.js":1032,"./sd":1033,"./sd.js":1033,"./se":1034,"./se.js":1034,"./si":1035,"./si.js":1035,"./sk":1036,"./sk.js":1036,"./sl":1037,"./sl.js":1037,"./sq":1038,"./sq.js":1038,"./sr":1039,"./sr-cyrl":1040,"./sr-cyrl.js":1040,"./sr.js":1039,"./ss":1041,"./ss.js":1041,"./sv":1042,"./sv.js":1042,"./sw":1043,"./sw.js":1043,"./ta":1044,"./ta.js":1044,"./te":1045,"./te.js":1045,"./tet":1046,"./tet.js":1046,"./tg":1047,"./tg.js":1047,"./th":1048,"./th.js":1048,"./tl-ph":1049,"./tl-ph.js":1049,"./tlh":1050,"./tlh.js":1050,"./tr":1051,"./tr.js":1051,"./tzl":1052,"./tzl.js":1052,"./tzm":1053,"./tzm-latn":1054,"./tzm-latn.js":1054,"./tzm.js":1053,"./ug-cn":1055,"./ug-cn.js":1055,"./uk":1056,"./uk.js":1056,"./ur":1057,"./ur.js":1057,"./uz":1058,"./uz-latn":1059,"./uz-latn.js":1059,"./uz.js":1058,"./vi":1060,"./vi.js":1060,"./x-pseudo":1061,"./x-pseudo.js":1061,"./yo":1062,"./yo.js":1062,"./zh-cn":1063,"./zh-cn.js":1063,"./zh-hk":1064,"./zh-hk.js":1064,"./zh-tw":1065,"./zh-tw.js":1065};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=1079},933:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return se}));var n,a,o,s=r(0),i=r.n(s),c=r(272),u=r(893),l=r.n(u),p=r(18),f=r(1074),m=(r(417),r(273)),d=(r(1068),r(1069)),y=(r(418),r(128)),b=(r(419),r(156)),h=(r(937),r(938)),v=r(3),j=r(77),g=r.n(j),O=r(191),w=r.n(O),k=r(57),E=r(105),S=r(915),_=r.n(S),P=r(30),x=r(65),N=r.n(x),I=r(935),R=r(1076),T=r(127);function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function A(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){C(o,n,a,s,i,"next",e)}function i(e){C(o,n,a,s,i,"throw",e)}s(void 0)}))}}function F(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var q,V=v.Transaction.Sighash,H=v.crypto.Signature,G=v.crypto.ECDSA,J=v.crypto.BN,K=v.Transaction.Signature,Y=H.SIGHASH_ALL|H.SIGHASH_FORKID,U=w()().encode,$=(N.a.parse(location.search.slice(1)),h.a.Item),Q=(n=h.a.create(),a=Object(c.connect)((function(e){var t=e.user,r=e.wallet,n=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{},r,{signing:n["service/signSingWalletMessage"],broadcasting:n["service/broadcast"],loading:n["service/queryWalletById"]||n["service/createSingleWalletAddress"]||n["service/createMultiPartyAddress"],creating:n["service/createMultiPartyTransaction"]})})),Object(k.withRouter)(o=n(o=a(o=function(e){function t(e){var r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=D(t).call(this,e),r=!a||"object"!==W(a)&&"function"!=typeof a?z(n):a,L(z(r),"validAddress",function(){var e=A(regeneratorRuntime.mark((function e(t,r,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v.Script.fromAddress(r),e.abrupt("return",n());case 5:return e.prev=5,e.t0=e.catch(0),e.abrupt("return",n(Object(p.a)("invalid_address")));case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t,r,n){return e.apply(this,arguments)}}()),L(z(r),"handleSubmit",(function(e){e.preventDefault(),r.props.form.validateFields((function(e,t){e||(console.log("Received values of form: ",t),r.createTransaction(t))}))})),L(z(r),"createTransaction",function(){var e=A(regeneratorRuntime.mark((function e(t){var n,a,o,s,i,c,u,l,f,m,d,y,h,j,O,w,k,S,_,P,x,N,R,T,W,C,A,F,D,z;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=t.toAddress,a=t.amount,o=t.note,s=r.getWalletId(),i=new v.Transaction,c=r.props.currentWallet,u=c.utxo,l=c.type,f=g()(a).multipliedBy(1e8),m=f.toString(),d=!0,y=!1,h=void 0,e.prev=9,j=u[Symbol.iterator]();!(d=(O=j.next()).done);d=!0)w=O.value,f.isGreaterThan(0)&&(k=w.address,S=w.txid,_=w.value,P=w.vout,1===w.status&&(i.from({txId:S,outputIndex:P,script:v.Script.buildPublicKeyHashOut(k).toString(),satoshis:_}),f=f.minus(_)));e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),y=!0,h=e.t0;case 17:e.prev=17,e.prev=18,d||null==j.return||j.return();case 20:if(e.prev=20,!y){e.next=23;break}throw h;case 23:return e.finish(20);case 24:return e.finish(17);case 25:if(!f.isGreaterThan(0)){e.next=27;break}return e.abrupt("return",b.a.error(Object(p.a)("lack_of_balance")));case 27:if(x=g()(a).multipliedBy(1e8).toNumber(),N=r.props.currentWallet,(R=r.state.change_address)||(R=N.deposit.address||N.address),"0"!==f.toString()){e.next=36;break}i.change(n),m=g()(a).multipliedBy(1e8).minus(i.getFee()).toString(),e.next=41;break;case 36:if(i.to(n,x),i.change(R),!f.plus(i.getFee()).isGreaterThan(0)){e.next=41;break}return t.amount=Object(I.b)(N.balance),e.abrupt("return",r.createTransaction(t));case 41:if(1!==parseInt(l)){e.next=53;break}return T=i.inputs.map((function(e,t){var r=e.output,n=r.script.toAddress().toString(),a=J.fromBuffer(V.sighash(i,Y,t,r.script,r.satoshisBN),{endian:"little"});return{address:n,hash:("0".repeat(8)+a.toString("hex")).slice(-64)}})),e.next=45,r.props.dispatch({type:"service/signSingWalletMessage",payload:T});case 45:return e.sent.forEach((function(e,t){var r=new H({r:new J(e.r,16),s:G.toLowS(new J(e.s,16))}),n=i.inputs[t];i.applySignature(new K({publicKey:e.publicKey,prevTxId:n.prevTxId,outputIndex:n.outputIndex,inputIndex:t,sigtype:Y,signature:r}))})),e.next=49,r.props.dispatch({type:"service/broadcast",payload:{tx:i,note:o,value:m,wid:s,biz_data:n}});case 49:return W=e.sent,C=g()(i.getFee()).div(1e8).toString(),W.success&&W.data.id?r.setState({toAddress:n,amount:g()(m).div(1e8).toString(),note:o,showResult:"single",fee:C}):b.a.error("Transaction failed. ".concat(W.error)),e.abrupt("return");case 53:if(2!==parseInt(l)){e.next=59;break}return A=g()(i.getFee()).div(1e8).toString(),e.next=57,r.props.dispatch({type:"service/createMultiPartyTransaction",payload:{tx:i,note:o,value:m,wid:s,biz_data:n}});case 57:(F=e.sent).success&&F.data.id?r.setState({showResult:"multi",toAddress:n,amount:g()(m).div(1e8).toString(),note:o,fee:A}):b.a.error("Transaction failed. ".concat(F.error));case 59:return D=r.props.userid,e.next=62,E.a.createTransaction({raw:U(i.toObject()).toString("hex"),wid:s,value:x,uid:D});case 62:if(!(z=e.sent).id){e.next=67;break}return e.next=66,E.a.approveTransaction({uid:D,id:z.id});case 66:r.setState({showResult:"multi",toAddress:n,amount:a,note:o});case 67:case"end":return e.stop()}}),e,null,[[9,13,17,25],[18,,20,24]])})));return function(t){return e.apply(this,arguments)}}()),L(z(r),"changeBSV",(function(e){r.setFiatValue(e.target.value)})),L(z(r),"changeCurrency",(function(e){var t=r.props,n=t.form,a=t.currencyIndex,o=t.price,s=P.e[a].key,i=e.target.value;o.bsv&&(n.setFieldsValue({amount:i?g()(i).div(o.bsv[s]).toFixed(8,1):0}),r.setState({amountCurrency:i?g()(i).div(o.bsv[s]).toFixed(8,1):0,amountFiat:i||0}))})),L(z(r),"validate",(function(e,t,r){t>0?r():r(Object(p.a)("amount_less_than"))})),L(z(r),"gotoBack",(function(){r.props.history.goBack()})),L(z(r),"switchCurrency",(function(e){r.setState({currencyType:e})})),r.state={showResult:!1,amountCurrency:0,amountFiat:0},r}var r,n,a,o,s,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,e),r=t,(n=[{key:"getWalletId",value:function(){return this.props.match.params.id}},{key:"createSingleAddress",value:(c=A(regeneratorRuntime.mark((function e(){var t,r,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,r=t.match,n=t.dispatch,a=r.params.id,e.next=4,n({type:"service/createSingleWalletAddress",payload:{wid:a,type:2}});case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"createMultiAddress",value:(s=A(regeneratorRuntime.mark((function e(){var t,r,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,r=t.match,n=t.dispatch,a=r.params.id,e.next=4,n({type:"service/createMultiPartyAddress",payload:{wid:parseInt(a),type:2}});case 4:if((o=e.sent).success){e.next=7;break}return e.abrupt("return",b.a.error("server_error"));case 7:return e.abrupt("return",o.data.address);case 8:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"renderSingleResult",value:function(){var e=this.state,t=e.toAddress,r=e.amount,n=e.note,a=e.fee,o=Object(P.b)(this.props.currentWallet.token);return i.a.createElement("div",{className:_.a.result},i.a.createElement("div",{className:_.a.icon},i.a.createElement(T.a,{type:"iconsent"})),i.a.createElement("div",{className:_.a.title},Object(p.a)("payment_sent")),i.a.createElement("div",{className:_.a.desc},Object(p.a)("sent")," ",i.a.createElement("span",null,r," ",o)," ",Object(p.a)("to")," ",t),n&&i.a.createElement("div",{className:_.a.note},n),i.a.createElement("div",{className:_.a.btns},i.a.createElement(y.a,{type:"primary",className:_.a.btn,onClick:this.gotoBack},Object(p.a)("close"))),i.a.createElement("div",{className:_.a.fee},Object(p.a)("network_fee")," ",a," ",o))}},{key:"renderMultiResult",value:function(){var e=this.state,t=e.toAddress,r=e.amount,n=e.note,a=e.fee,o=Object(P.b)(this.props.currentWallet.token);return i.a.createElement("div",{className:_.a.result},i.a.createElement("div",{className:_.a.icon},i.a.createElement(T.a,{type:"iconsigned"})),i.a.createElement("div",{className:_.a.title},Object(p.a)("tx_signed_you")),i.a.createElement("div",{className:_.a.desc},Object(p.a)("sign_tx_multi",r)," ",t),n&&i.a.createElement("div",{className:_.a.note},n),i.a.createElement("div",{className:_.a.btns},i.a.createElement(y.a,{type:"primary",className:_.a.btn,onClick:this.gotoBack},Object(p.a)("close"))),i.a.createElement("div",{className:_.a.fee},Object(p.a)("network_fee")," ",a," ",o))}},{key:"componentDidMount",value:(o=A(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dispatch({type:"service/queryWalletById",payload:{wid:this.getWalletId()}});case 2:if(t=this.props.match.params.type,2!==parseInt(t)){e.next=9;break}return e.next=6,this.createMultiAddress();case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,this.createSingleAddress();case 11:e.t0=e.sent;case 12:r=e.t0,this.setState({currencyType:Object(P.b)(this.props.currentWallet.token),change_address:r});case 14:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"setFiatValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this.props,r=t.form,n=t.currencyIndex,a=t.price,o=P.e[n].key;a.bsv&&(r.setFieldsValue({total:e?g()(e).multipliedBy(a.bsv[o]).toFixed(2,1):0}),this.setState({amountCurrency:e||0,amountFiat:e?g()(e).multipliedBy(a.bsv[o]).toFixed(2,1):0}))}},{key:"setAmount",value:function(e){this.props.form.setFieldsValue({amount:e}),this.setFiatValue(e)}},{key:"renderForm",value:function(){var e=this;if("single"===this.state.showResult)return this.renderSingleResult();if("multi"===this.state.showResult)return this.renderMultiResult();var t=this.props,r=t.form,n=t.currencyIndex,a=t.currentWallet,o=(t.loading,t.creating),s=r.getFieldDecorator,c=P.e[n].title,u=a.balance,l=a.frozen,f=a.name,m=a.type,b=a.threshold,v=a.token,j=this.state,g=j.currencyType,O=j.amountCurrency,w=j.amountFiat,k=Object(P.b)(v);return i.a.createElement("div",{className:_.a.container},i.a.createElement("div",{className:_.a.header},i.a.createElement("div",{className:_.a.title},Object(p.a)("send_to")),i.a.createElement("span",{className:_.a.goback,onClick:this.gotoBack}," ",Object(p.a)("cancel"))),i.a.createElement(h.a,{onSubmit:this.handleSubmit,hideRequiredMark:!0,className:_.a.content},i.a.createElement($,null,s("toAddress",{rules:[{required:!0},{validator:this.validAddress}]})(i.a.createElement(d.a,{allowClear:!0}))),i.a.createElement("div",{className:_.a.header},i.a.createElement("div",{className:_.a.title},Object(p.a)("from")," ",f)),i.a.createElement("div",{className:_.a.total},i.a.createElement("a",{href:"javascript:;",onClick:function(){e.setAmount(Object(I.b)(u))}},i.a.createElement("span",{className:_.a.balance},Object(p.a)("balance"))," ",Object(I.b)(u)," ",k," | ",i.a.createElement(R.a,{value:u})),l>0&&i.a.createElement(i.a.Fragment,null," | ",Object(p.a)("frozen")," ",Object(I.b)(l)," ",k)),i.a.createElement("div",{className:_.a.amount_container},i.a.createElement($,{style:{display:g===k?"block":"none",flex:1}},s("amount",{rules:[{validator:this.validate}]})(i.a.createElement(d.a,{onChange:this.changeBSV,style:{width:"100%"},allowClear:!0}))),i.a.createElement($,{style:{display:g===k?"none":"block",flex:1}},s("total")(i.a.createElement(d.a,{onChange:this.changeCurrency,style:{width:"100%"},allowClear:!0}))),i.a.createElement("div",{className:_.a.currency_content},[k,c].map((function(t){return i.a.createElement("div",{key:t,className:t===g?Object(I.c)(_.a.current_currency,_.a.currency_item):_.a.currency_item,onClick:function(){return e.switchCurrency(t)}},t)})))),i.a.createElement("div",{className:_.a.total_container},Object(p.a)("equivalent_to")," ",g===k?"".concat(w," ").concat(c):"".concat(O," ").concat(k)),i.a.createElement("div",{className:_.a.label},Object(p.a)("add_a_msg")),i.a.createElement($,null,s("note")(i.a.createElement(d.a,null))),2===m&&i.a.createElement("div",{className:_.a.tips},i.a.createElement("span",{style:{fontWeight:"bold"}},Object(p.a)("notice"),":")," ",Object(p.a)("transfer_tips",b)),i.a.createElement("div",null,i.a.createElement(y.a,{type:"primary",loading:o,className:"btn",htmlType:"submit"},Object(p.a)("send")," ",g===k?"".concat(O," ").concat(k):"".concat(w," ").concat(c)))))}},{key:"render",value:function(){var e=this.props,t=e.signing,r=e.broadcasting,n=e.loading;return t?i.a.createElement(m.a,{tip:"Signing..."},this.renderForm()):r?i.a.createElement(m.a,{tip:"Broadcasting..."},this.renderForm()):n?i.a.createElement(m.a,null,this.renderForm()):this.renderForm()}}])&&F(r.prototype,n),a&&F(r,a),t}(s.Component))||o)||o)||o);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ee(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function te(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function re(e){return(re=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ne(e,t){return(ne=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var se=Object(c.connect)((function(e){var t=e.wallet;e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){oe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t)}))(q=function(e){function t(){return Z(this,t),te(this,re(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ne(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return i.a.createElement("div",{className:l.a.container},this.renderSidebar(),i.a.createElement("div",{className:l.a.detail},i.a.createElement(Q,null)))}}])&&ee(r.prototype,n),a&&ee(r,a),t}(f.a))||q},935:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return p})),r.d(t,"b",(function(){return f}));r(1078);var n=r(934),a=r.n(n),o=r(77),s=r.n(o);window.location;function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),a()(e).format(t)):e}var c=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function u(e){return!!e&&c.test(e)}function l(){return Array.prototype.slice.call(arguments).join(" ")}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var r=e.substr(0,t[0]),n=e.substr(-t[1],t[1]);return r+"****"+n}}var f=function(e){return s()(e).div(1e8).toString()}}}]);