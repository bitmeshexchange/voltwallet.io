(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1075:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));n(419);var r=n(156),o=n(0),a=n.n(o),s=n(1088),c=n.n(s),i=n(127),u=n(18),l=n(898),p=n.n(l);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return y(this,t),m(this,d(t).apply(this,arguments))}var n,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),n=t,(o=[{key:"onCopySuccess",value:function(){r.a.success(Object(u.a)("copied"))}},{key:"render",value:function(){var e=this.props.label?this.props.label:a.a.createElement(i.a,{type:"iconcopy"});return a.a.createElement(c.a,{component:"span",onSuccess:this.onCopySuccess.bind(this),"data-clipboard-text":this.props.text,className:p.a.clipboard},e)}}])&&b(n.prototype,o),s&&b(n,s),t}(o.Component)},1076:function(e,t,n){"use strict";var r,o=n(0),a=n.n(o),s=n(272),c=n(30),i=n(77),u=n.n(i);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=Object(s.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){function t(){return p(this,t),y(this,b(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=window.localStorage.getItem("VoltLocalCurrencyIndex")||0,t=c.e[e],n=this.props,r=n.price,o=n.value,s=n.usd;if(!r.bsv)return null;var i=r.bsv[t.key];s&&(i=u()(r.bsv[t.key]).div(r.bsv.usd).multipliedBy(s));var l=u()(o).div(1e8).times(i).toFixed(2,1);return a.a.createElement("span",null,t.symbol,l)}}])&&f(n.prototype,r),o&&f(n,o),t}(o.Component))||r;t.a=h},1077:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),o=n.n(r),a=n(127),s=n(897),c=n.n(s);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return u(this,t),p(this,f(t).apply(this,arguments))}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.className||c.a.icon;return o.a.createElement("div",{className:e},o.a.createElement(a.a,{type:"iconbsv1"}))}}])&&l(n.prototype,r),s&&l(n,s),t}(r.Component)},1079:function(e,t,n){var r={"./af":939,"./af.js":939,"./ar":940,"./ar-dz":941,"./ar-dz.js":941,"./ar-kw":942,"./ar-kw.js":942,"./ar-ly":943,"./ar-ly.js":943,"./ar-ma":944,"./ar-ma.js":944,"./ar-sa":945,"./ar-sa.js":945,"./ar-tn":946,"./ar-tn.js":946,"./ar.js":940,"./az":947,"./az.js":947,"./be":948,"./be.js":948,"./bg":949,"./bg.js":949,"./bm":950,"./bm.js":950,"./bn":951,"./bn.js":951,"./bo":952,"./bo.js":952,"./br":953,"./br.js":953,"./bs":954,"./bs.js":954,"./ca":955,"./ca.js":955,"./cs":956,"./cs.js":956,"./cv":957,"./cv.js":957,"./cy":958,"./cy.js":958,"./da":959,"./da.js":959,"./de":960,"./de-at":961,"./de-at.js":961,"./de-ch":962,"./de-ch.js":962,"./de.js":960,"./dv":963,"./dv.js":963,"./el":964,"./el.js":964,"./en-SG":965,"./en-SG.js":965,"./en-au":966,"./en-au.js":966,"./en-ca":967,"./en-ca.js":967,"./en-gb":968,"./en-gb.js":968,"./en-ie":969,"./en-ie.js":969,"./en-il":970,"./en-il.js":970,"./en-nz":971,"./en-nz.js":971,"./eo":972,"./eo.js":972,"./es":973,"./es-do":974,"./es-do.js":974,"./es-us":975,"./es-us.js":975,"./es.js":973,"./et":976,"./et.js":976,"./eu":977,"./eu.js":977,"./fa":978,"./fa.js":978,"./fi":979,"./fi.js":979,"./fo":980,"./fo.js":980,"./fr":981,"./fr-ca":982,"./fr-ca.js":982,"./fr-ch":983,"./fr-ch.js":983,"./fr.js":981,"./fy":984,"./fy.js":984,"./ga":985,"./ga.js":985,"./gd":986,"./gd.js":986,"./gl":987,"./gl.js":987,"./gom-latn":988,"./gom-latn.js":988,"./gu":989,"./gu.js":989,"./he":990,"./he.js":990,"./hi":991,"./hi.js":991,"./hr":992,"./hr.js":992,"./hu":993,"./hu.js":993,"./hy-am":994,"./hy-am.js":994,"./id":995,"./id.js":995,"./is":996,"./is.js":996,"./it":997,"./it-ch":998,"./it-ch.js":998,"./it.js":997,"./ja":999,"./ja.js":999,"./jv":1e3,"./jv.js":1e3,"./ka":1001,"./ka.js":1001,"./kk":1002,"./kk.js":1002,"./km":1003,"./km.js":1003,"./kn":1004,"./kn.js":1004,"./ko":1005,"./ko.js":1005,"./ku":1006,"./ku.js":1006,"./ky":1007,"./ky.js":1007,"./lb":1008,"./lb.js":1008,"./lo":1009,"./lo.js":1009,"./lt":1010,"./lt.js":1010,"./lv":1011,"./lv.js":1011,"./me":1012,"./me.js":1012,"./mi":1013,"./mi.js":1013,"./mk":1014,"./mk.js":1014,"./ml":1015,"./ml.js":1015,"./mn":1016,"./mn.js":1016,"./mr":1017,"./mr.js":1017,"./ms":1018,"./ms-my":1019,"./ms-my.js":1019,"./ms.js":1018,"./mt":1020,"./mt.js":1020,"./my":1021,"./my.js":1021,"./nb":1022,"./nb.js":1022,"./ne":1023,"./ne.js":1023,"./nl":1024,"./nl-be":1025,"./nl-be.js":1025,"./nl.js":1024,"./nn":1026,"./nn.js":1026,"./pa-in":1027,"./pa-in.js":1027,"./pl":1028,"./pl.js":1028,"./pt":1029,"./pt-br":1030,"./pt-br.js":1030,"./pt.js":1029,"./ro":1031,"./ro.js":1031,"./ru":1032,"./ru.js":1032,"./sd":1033,"./sd.js":1033,"./se":1034,"./se.js":1034,"./si":1035,"./si.js":1035,"./sk":1036,"./sk.js":1036,"./sl":1037,"./sl.js":1037,"./sq":1038,"./sq.js":1038,"./sr":1039,"./sr-cyrl":1040,"./sr-cyrl.js":1040,"./sr.js":1039,"./ss":1041,"./ss.js":1041,"./sv":1042,"./sv.js":1042,"./sw":1043,"./sw.js":1043,"./ta":1044,"./ta.js":1044,"./te":1045,"./te.js":1045,"./tet":1046,"./tet.js":1046,"./tg":1047,"./tg.js":1047,"./th":1048,"./th.js":1048,"./tl-ph":1049,"./tl-ph.js":1049,"./tlh":1050,"./tlh.js":1050,"./tr":1051,"./tr.js":1051,"./tzl":1052,"./tzl.js":1052,"./tzm":1053,"./tzm-latn":1054,"./tzm-latn.js":1054,"./tzm.js":1053,"./ug-cn":1055,"./ug-cn.js":1055,"./uk":1056,"./uk.js":1056,"./ur":1057,"./ur.js":1057,"./uz":1058,"./uz-latn":1059,"./uz-latn.js":1059,"./uz.js":1058,"./vi":1060,"./vi.js":1060,"./x-pseudo":1061,"./x-pseudo.js":1061,"./yo":1062,"./yo.js":1062,"./zh-cn":1063,"./zh-cn.js":1063,"./zh-hk":1064,"./zh-hk.js":1064,"./zh-tw":1065,"./zh-tw.js":1065};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=1079},431:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Z}));n(417);var r,o,a=n(273),s=(n(422),n(277)),c=(n(420),n(20),n(0)),i=n.n(c),u=n(272),l=n(58),p=n(1077),f=n(909),y=n.n(f),b=n(18),m=n(30),d=n(935),j=n(1075),h=n(1076),v=n(274),O=(n(430),n(401)),g=n(127),w=n(902),E=n.n(w),k=n(1083),P=n.n(k);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t,n,r,o,a,s){try{var c=e[a](s),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,o)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var z;r=Object(u.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{},n,{loading:r["service/queryWallet"],creatingAddress:r["service/createSingleWalletAddress"]||!1})})),Object(l.withRouter)(o=r(o=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=N(t).call(this,e),n=!o||"object"!==_(o)&&"function"!=typeof o?A(r):o,R(A(n),"hideReceiveDialog",(function(){n.setState({receiveAddress:""})})),n.state={},n}var n,r,o,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(t,e),n=t,(r=[{key:"renderReceiveModal",value:function(e){return this.state.receiveAddress,null}},{key:"createAddress",value:(a=regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(2!==parseInt(n)){e.next=8;break}if(r=this.props.walletList.filter((function(e){return e.id==t}))[0]){e.next=4;break}return e.abrupt("return");case 4:if(r.uid===this.props.userid){e.next=6;break}return e.abrupt("return");case 6:return this.props.dispatch({type:"service/createMultiPartyAddress",payload:{wid:t}}),e.abrupt("return");case 8:return e.next=10,this.props.dispatch({type:"service/createSingleWalletAddress",payload:{wid:t}});case 10:(o=e.sent)&&this.showReceiveDialog(o);case 12:case"end":return e.stop()}}),e,this)})),s=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=a.apply(e,t);function s(e){S(o,n,r,s,c,"next",e)}function c(e){S(o,n,r,s,c,"throw",e)}s(void 0)}))},function(e,t){return s.apply(this,arguments)})},{key:"showReceiveDialog",value:function(e){var t=this.props.id,n=this.props.match.params.type;n||(n=1),this.props.history.push("/message/receive/".concat(n,"/").concat(t),{id:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.address,r=t.id,o=t.type,a=t.btnClassname;return n?i.a.createElement("span",null,this.renderReceiveModal(n),i.a.createElement("span",{className:a,onClick:function(){return e.showReceiveDialog(n)}},i.a.createElement(g.a,{type:"iconreceive"})," ",Object(b.a)("collection"))):2===o?i.a.createElement(O.a,{title:Object(b.a)("need_all_online"),placement:"bottomRight"},i.a.createElement("span",{className:a,onClick:function(){e.createAddress(r,o)}},i.a.createElement(g.a,{type:"iconreceive"})," ",Object(b.a)("collection"))):i.a.createElement("span",{className:a,onClick:function(){e.createAddress(r,o)}},i.a.createElement(g.a,{type:"iconreceive"})," ",Object(b.a)("collection"))}}])&&x(n.prototype,r),o&&x(n,o),t}(c.Component))||o);function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t,n,r,o,a,s){try{var c=e[a](s),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,o)}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F;Object(u.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){Y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{},n,{loading:r["service/queryWallet"],creatingAddress:r["service/createSingleWalletAddress"]||!1})}))(z=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=T(t).call(this,e),n=!o||"object"!==W(o)&&"function"!=typeof o?L(r):o,Y(L(n),"hideReceiveDialog",(function(){n.setState({receiveAddress:""})})),n.state={},n}var n,r,o,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,e),n=t,(r=[{key:"renderReceiveModal",value:function(e){var t=this.state.receiveAddress==e;return i.a.createElement(s.a,{title:Object(b.a)("collection"),visible:t,footer:null,onCancel:this.hideReceiveDialog},i.a.createElement("div",{className:E.a.qrcodeWrap},i.a.createElement(P.a,{value:e}),i.a.createElement("p",null,e," ",i.a.createElement(j.a,{text:e}))))}},{key:"createAddress",value:(a=regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.a.info({title:"Tip",content:"Address will be created automaticly once all parties are online"}),e.next=3,this.props.dispatch({type:"service/createMultiPartyAddress",payload:{wid:t}});case 3:r=e.sent,console.log(r);case 5:case"end":return e.stop()}}),e,this)})),c=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=a.apply(e,t);function s(e){I(o,n,r,s,c,"next",e)}function c(e){I(o,n,r,s,c,"throw",e)}s(void 0)}))},function(e,t){return c.apply(this,arguments)})},{key:"showReceiveDialog",value:function(e){this.setState({receiveAddress:e})}},{key:"render",value:function(){var e=this,t=this.props,n=(t.children,t.address),r=t.id,o=t.type,a=t.btnClassname;return n?i.a.createElement("span",null,this.renderReceiveModal(n),i.a.createElement("span",{className:a,onClick:function(){return e.showReceiveDialog(n)}},i.a.createElement(g.a,{type:"iconreceive"})," ",Object(b.a)("collection"))):i.a.createElement("span",{className:a,onClick:function(){e.createAddress(r,o)}},i.a.createElement(g.a,{type:"iconreceive"})," ",Object(b.a)("collection"))}}])&&M(n.prototype,r),o&&M(n,o),t}(c.Component));function G(e){return(G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t,n,r,o,a,s){try{var c=e[a](s),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,o)}function J(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(e){H(a,r,o,s,c,"next",e)}function c(e){H(a,r,o,s,c,"throw",e)}s(void 0)}))}}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e){return(B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=Object(u.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){X(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{},n,{loading:r["service/queryWallet"],creatingAddress:r["service/createSingleWalletAddress"]||!1})}))(F=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=B(t).call(this,e),n=!o||"object"!==G(o)&&"function"!=typeof o?$(r):o,X($(n),"switchDisplay",(function(){var e=n.state.hideAmount;n.props.dispatch({type:"user/switchDisplay"}),n.setState({hideAmount:!e})})),X($(n),"renderWalletMenu",(function(){var e=parseInt(n.props.match.params.type)||0;return i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},i.a.createElement("div",{className:y.a.wallet_type},m.i.map((function(t,n){return i.a.createElement("div",{key:t.key,className:n===e?Object(d.c)(y.a.selected,y.a.wallet_type_item):y.a.wallet_type_item},i.a.createElement(l.Link,{to:"/money/home/".concat(n)},t.text))}))))})),X($(n),"renderInfo",(function(){var e=n.props,t=e.totalAssets,r=(e.currencyIndex,e.personalWalletAddress,e.walletList,n.state.hideAmount),o=r?i.a.createElement(g.a,{type:"iconhide"}):i.a.createElement(g.a,{type:"iconshow"});return i.a.createElement("div",{className:y.a.info},i.a.createElement(p.a,{className:y.a.icon}),n.renderWalletMenu(),i.a.createElement("div",{className:y.a.total},r?m.g:Object(d.b)(t)," ",i.a.createElement("span",null,"BSV")),i.a.createElement("div",{className:y.a.total_assets},i.a.createElement("span",{className:y.a.balance},r?m.g:i.a.createElement(h.a,{value:t})),i.a.createElement("span",{onClick:n.switchDisplay,className:y.a.show_balance},o)))})),X($(n),"gotoMessageList",(function(e,t){n.props.history.push("/message/list/".concat(e,"/").concat(t),{id:t})})),X($(n),"gotoTransfer",(function(e,t){n.props.history.push("/message/transfer/".concat(e,"/").concat(t),{id:t})})),X($(n),"gotoReceive",(function(e,t){n.props.history.push("/message/receive/".concat(e,"/").concat(t),{id:t})})),X($(n),"renderAssetsList",(function(){var e=n.state,t=(e.joining,e.hideAmount),r=n.props,o=(r.currencyIndex,r.walletList);return i.a.createElement("div",{className:y.a.list_container},i.a.createElement("div",{className:y.a.list_content},i.a.createElement("div",{className:y.a.item_head},i.a.createElement("div",{className:y.a.part1},Object(b.a)("wallet")),i.a.createElement("div",{className:y.a.part2},Object(b.a)("amount")),i.a.createElement("div",{className:y.a.part3},Object(b.a)("action"))),o.map((function(e){var r=e.id,o=e.share,a=e.threshold,s=e.name,c=e.balance,u=(e.address,e.token),l=e.joinStatus,f=e.frozen,j=e.status,h=e.type,v=(e.waitJoin,Object(m.b)(u));return 0===l||0===parseInt(j)?null:i.a.createElement("div",{className:y.a.list_item,key:r},i.a.createElement("div",{className:y.a.part1,onClick:function(){return n.gotoMessageList(h,r)}},i.a.createElement(p.a,{className:y.a.coin_icon}),i.a.createElement("div",{className:y.a.coin_name},s," ",2===h&&i.a.createElement(i.a.Fragment,null,a,"/",o))),i.a.createElement("div",{className:y.a.part2},i.a.createElement("span",{className:y.a.amount},t?m.g:Object(d.b)(c))," ",i.a.createElement("span",{className:y.a.unit},v)," ",f>0&&i.a.createElement("span",{className:y.a.focus},Object(b.a)("frozen"),": ",t?m.g:Object(d.b)(f),v)),i.a.createElement("div",{className:y.a.part3},i.a.createElement("div",{className:y.a.transfer,onClick:function(){return n.gotoTransfer(h,r)}},i.a.createElement(g.a,{type:"iconicon-send"})," ",Object(b.a)("transfer")),i.a.createElement("span",{className:y.a.receive,onClick:function(){return n.gotoReceive(h,r)}},i.a.createElement(g.a,{type:"iconreceive"})," ",Object(b.a)("collection"))))}))))})),window.sessionStorage.getItem(m.a.SEED)||e.history.push("/user/login"),n.state={joining:0,receiveModalVisible:!1,hideAmount:window.localStorage.getItem(m.a.HIDEAMOUNT)||0},n}var n,r,o,c,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;this.fetch(),this.timer&&clearInterval(this.timer),this.timer=setInterval((function(){e.updateWallet()}),5e3)}},{key:"componentWillUnmount",value:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.type;t!==this.props.match.params.type&&this.fetch(t)}},{key:"updateWallet",value:(u=J(regeneratorRuntime.mark((function e(){var t,n,r,o,a,s,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._updating){e.next=2;break}return e.abrupt("return");case 2:return this._updating=!0,t=this.props.match.params.type,e.next=6,this.props.dispatch({type:"service/updateWallet",payload:{type:t}});case 6:if(!(n=e.sent)||!n.length){e.next=40;break}r=!0,o=!1,a=void 0,e.prev=11,s=n[Symbol.iterator]();case 13:if(r=(c=s.next()).done){e.next=26;break}if(i=c.value,2===parseInt(i.type)){e.next=17;break}return e.abrupt("continue",23);case 17:if(!i.address){e.next=19;break}return e.abrupt("continue",23);case 19:if(1===parseInt(i.status)){e.next=21;break}return e.abrupt("continue",23);case 21:return e.next=23,this.props.dispatch({type:"service/createMultiPartyAddress",payload:{wid:i.id}});case 23:r=!0,e.next=13;break;case 26:e.next=32;break;case 28:e.prev=28,e.t0=e.catch(11),o=!0,a=e.t0;case 32:e.prev=32,e.prev=33,r||null==s.return||s.return();case 35:if(e.prev=35,!o){e.next=38;break}throw a;case 38:return e.finish(35);case 39:return e.finish(32);case 40:this._updating=!1;case 41:case"end":return e.stop()}}),e,this,[[11,28,32,40],[33,,35,39]])}))),function(){return u.apply(this,arguments)})},{key:"fetch",value:function(e){return e||(e=0),this.props.dispatch({type:"service/queryWallet",payload:{type:e}})}},{key:"joinWallet",value:(c=J(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({joining:t}),e.next=3,this.props.dispatch({type:"service/joinWallet",payload:{wid:t}});case 3:n=e.sent,this.setState({joining:0}),n&&n.success&&this.updateWallet();case 6:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},{key:"renderAddressCreating",value:function(){return i.a.createElement(s.a,{title:Object(b.a)("collection"),visible:this.props.creatingAddress,footer:null,onCancel:this.hideReceiveDialog},i.a.createElement("div",{className:y.a.qrcodeWrap},i.a.createElement(v.a,{className:y.a.loading_container}),i.a.createElement("p",null,"Generating address")))}},{key:"render",value:function(){return i.a.createElement("div",{className:y.a.container},this.renderInfo(),i.a.createElement(a.a,{spinning:this.props.loading},this.renderAssetsList()),this.renderAddressCreating())}}])&&V(n.prototype,r),o&&V(n,o),t}(c.Component))||F},935:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return f}));n(1078);var r=n(934),o=n.n(r),a=n(77),s=n.n(a);window.location;function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),o()(e).format(t)):e}var i=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function u(e){return!!e&&i.test(e)}function l(){return Array.prototype.slice.call(arguments).join(" ")}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var n=e.substr(0,t[0]),r=e.substr(-t[1],t[1]);return n+"****"+r}}var f=function(e){return s()(e).div(1e8).toString()}}}]);