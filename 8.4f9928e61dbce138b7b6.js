(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1081:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),o=n.n(r),a=n(107),c=n(902),s=n.n(c);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return u(this,t),p(this,f(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.className||s.a.icon;return o.a.createElement("div",{className:e},o.a.createElement(a.a,{type:"iconbsv1"}))}}])&&l(n.prototype,r),c&&l(n,c),t}(r.Component)},1086:function(e,t,n){var r={"./af":946,"./af.js":946,"./ar":947,"./ar-dz":948,"./ar-dz.js":948,"./ar-kw":949,"./ar-kw.js":949,"./ar-ly":950,"./ar-ly.js":950,"./ar-ma":951,"./ar-ma.js":951,"./ar-sa":952,"./ar-sa.js":952,"./ar-tn":953,"./ar-tn.js":953,"./ar.js":947,"./az":954,"./az.js":954,"./be":955,"./be.js":955,"./bg":956,"./bg.js":956,"./bm":957,"./bm.js":957,"./bn":958,"./bn.js":958,"./bo":959,"./bo.js":959,"./br":960,"./br.js":960,"./bs":961,"./bs.js":961,"./ca":962,"./ca.js":962,"./cs":963,"./cs.js":963,"./cv":964,"./cv.js":964,"./cy":965,"./cy.js":965,"./da":966,"./da.js":966,"./de":967,"./de-at":968,"./de-at.js":968,"./de-ch":969,"./de-ch.js":969,"./de.js":967,"./dv":970,"./dv.js":970,"./el":971,"./el.js":971,"./en-SG":972,"./en-SG.js":972,"./en-au":973,"./en-au.js":973,"./en-ca":974,"./en-ca.js":974,"./en-gb":975,"./en-gb.js":975,"./en-ie":976,"./en-ie.js":976,"./en-il":977,"./en-il.js":977,"./en-nz":978,"./en-nz.js":978,"./eo":979,"./eo.js":979,"./es":980,"./es-do":981,"./es-do.js":981,"./es-us":982,"./es-us.js":982,"./es.js":980,"./et":983,"./et.js":983,"./eu":984,"./eu.js":984,"./fa":985,"./fa.js":985,"./fi":986,"./fi.js":986,"./fo":987,"./fo.js":987,"./fr":988,"./fr-ca":989,"./fr-ca.js":989,"./fr-ch":990,"./fr-ch.js":990,"./fr.js":988,"./fy":991,"./fy.js":991,"./ga":992,"./ga.js":992,"./gd":993,"./gd.js":993,"./gl":994,"./gl.js":994,"./gom-latn":995,"./gom-latn.js":995,"./gu":996,"./gu.js":996,"./he":997,"./he.js":997,"./hi":998,"./hi.js":998,"./hr":999,"./hr.js":999,"./hu":1e3,"./hu.js":1e3,"./hy-am":1001,"./hy-am.js":1001,"./id":1002,"./id.js":1002,"./is":1003,"./is.js":1003,"./it":1004,"./it-ch":1005,"./it-ch.js":1005,"./it.js":1004,"./ja":1006,"./ja.js":1006,"./jv":1007,"./jv.js":1007,"./ka":1008,"./ka.js":1008,"./kk":1009,"./kk.js":1009,"./km":1010,"./km.js":1010,"./kn":1011,"./kn.js":1011,"./ko":1012,"./ko.js":1012,"./ku":1013,"./ku.js":1013,"./ky":1014,"./ky.js":1014,"./lb":1015,"./lb.js":1015,"./lo":1016,"./lo.js":1016,"./lt":1017,"./lt.js":1017,"./lv":1018,"./lv.js":1018,"./me":1019,"./me.js":1019,"./mi":1020,"./mi.js":1020,"./mk":1021,"./mk.js":1021,"./ml":1022,"./ml.js":1022,"./mn":1023,"./mn.js":1023,"./mr":1024,"./mr.js":1024,"./ms":1025,"./ms-my":1026,"./ms-my.js":1026,"./ms.js":1025,"./mt":1027,"./mt.js":1027,"./my":1028,"./my.js":1028,"./nb":1029,"./nb.js":1029,"./ne":1030,"./ne.js":1030,"./nl":1031,"./nl-be":1032,"./nl-be.js":1032,"./nl.js":1031,"./nn":1033,"./nn.js":1033,"./pa-in":1034,"./pa-in.js":1034,"./pl":1035,"./pl.js":1035,"./pt":1036,"./pt-br":1037,"./pt-br.js":1037,"./pt.js":1036,"./ro":1038,"./ro.js":1038,"./ru":1039,"./ru.js":1039,"./sd":1040,"./sd.js":1040,"./se":1041,"./se.js":1041,"./si":1042,"./si.js":1042,"./sk":1043,"./sk.js":1043,"./sl":1044,"./sl.js":1044,"./sq":1045,"./sq.js":1045,"./sr":1046,"./sr-cyrl":1047,"./sr-cyrl.js":1047,"./sr.js":1046,"./ss":1048,"./ss.js":1048,"./sv":1049,"./sv.js":1049,"./sw":1050,"./sw.js":1050,"./ta":1051,"./ta.js":1051,"./te":1052,"./te.js":1052,"./tet":1053,"./tet.js":1053,"./tg":1054,"./tg.js":1054,"./th":1055,"./th.js":1055,"./tl-ph":1056,"./tl-ph.js":1056,"./tlh":1057,"./tlh.js":1057,"./tr":1058,"./tr.js":1058,"./tzl":1059,"./tzl.js":1059,"./tzm":1060,"./tzm-latn":1061,"./tzm-latn.js":1061,"./tzm.js":1060,"./ug-cn":1062,"./ug-cn.js":1062,"./uk":1063,"./uk.js":1063,"./ur":1064,"./ur.js":1064,"./uz":1065,"./uz-latn":1066,"./uz-latn.js":1066,"./uz.js":1065,"./vi":1067,"./vi.js":1067,"./x-pseudo":1068,"./x-pseudo.js":1068,"./yo":1069,"./yo.js":1069,"./zh-cn":1070,"./zh-cn.js":1070,"./zh-hk":1071,"./zh-hk.js":1071,"./zh-tw":1072,"./zh-tw.js":1072};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=1086},1087:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));n(425);var r=n(157),o=n(0),a=n.n(o),c=n(1103),s=n.n(c),i=n(107),u=n(17),l=n(907),p=n.n(l);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return y(this,t),m(this,d(t).apply(this,arguments))}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),n=t,(o=[{key:"onCopySuccess",value:function(){r.a.success(Object(u.a)("copied"))}},{key:"render",value:function(){var e=this.props.label?this.props.label:a.a.createElement(i.a,{type:"iconcopy"});return a.a.createElement(s.a,{component:"span",onSuccess:this.onCopySuccess.bind(this),"data-clipboard-text":this.props.text,className:p.a.clipboard},e)}}])&&b(n.prototype,o),c&&b(n,c),t}(o.Component)},1088:function(e,t,n){"use strict";var r,o=n(0),a=n.n(o),c=n(156),s=n(279),i=n(63),u=n.n(i);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=Object(c.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){function t(){return p(this,t),y(this,b(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=s.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,n=s.a[t],r=this.props,o=r.price,c=r.value,i=r.usd,l=r.exchangeRate;if(!o.bsv)return null;var p=null,f=n.currencyCode.toLowerCase();p=o.bsv[f]?o.bsv[f]:u()(o.bsv.usd).times(l[f]),i&&(p=u()(p).div(o.bsv.usd).multipliedBy(i));var y=u()(c).div(1e8).times(p).toFixed(2,1);return a.a.createElement("span",null,n.symbol,y," ",n.currencyCode)}}])&&f(n.prototype,r),o&&f(n,o),t}(o.Component))||r;t.a=h},438:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Z}));n(424);var r,o,a=n(275),c=(n(428),n(280)),s=(n(426),n(21),n(0)),i=n.n(s),u=n(156),l=n(61),p=n(1081),f=n(916),y=n.n(f),b=n(17),m=n(16),d=n(944),j=n(1087),h=n(1088),v=n(276),O=(n(436),n(288)),g=n(107),w=n(909),E=n.n(w),k=n(1089),P=n.n(k);function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t,n,r,o,a,c){try{var s=e[a](c),i=s.value}catch(e){return void n(e)}s.done?t(i):Promise.resolve(i).then(r,o)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var z;r=Object(u.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){R(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{},n,{loading:r["service/queryWallet"],creatingAddress:r["service/createSingleWalletAddress"]||!1})})),Object(l.withRouter)(o=r(o=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=N(t).call(this,e),n=!o||"object"!==_(o)&&"function"!=typeof o?C(r):o,R(C(n),"hideReceiveDialog",(function(){n.setState({receiveAddress:""})})),n.state={},n}var n,r,o,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,e),n=t,(r=[{key:"renderReceiveModal",value:function(e){return this.state.receiveAddress,null}},{key:"createAddress",value:(a=regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(2!==parseInt(n)){e.next=8;break}if(r=this.props.allWallets[t]){e.next=4;break}return e.abrupt("return");case 4:if(r.uid===this.props.userid){e.next=6;break}return e.abrupt("return");case 6:return this.props.dispatch({type:"service/createMultiPartyAddress",payload:{wid:t}}),e.abrupt("return");case 8:return e.next=10,this.props.dispatch({type:"service/createSingleWalletAddress",payload:{wid:t}});case 10:(o=e.sent)&&this.showReceiveDialog(o);case 12:case"end":return e.stop()}}),e,this)})),c=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=a.apply(e,t);function c(e){S(o,n,r,c,s,"next",e)}function s(e){S(o,n,r,c,s,"throw",e)}c(void 0)}))},function(e,t){return c.apply(this,arguments)})},{key:"showReceiveDialog",value:function(e){var t=this.props.id,n=this.props.match.params.type;n||(n=1),this.props.history.push("/message/receive/".concat(n,"/").concat(t),{id:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.address,r=t.id,o=t.type,a=t.btnClassname;return n?i.a.createElement("span",null,this.renderReceiveModal(n),i.a.createElement("span",{className:a,onClick:function(){return e.showReceiveDialog(n)}},i.a.createElement(g.a,{type:"iconreceive"})," ",Object(b.a)("collection"))):2===o?i.a.createElement(O.a,{title:Object(b.a)("need_all_online"),placement:"bottomRight"},i.a.createElement("span",{className:a,onClick:function(){e.createAddress(r,o)}},i.a.createElement(g.a,{type:"iconreceive"})," ",Object(b.a)("collection"))):i.a.createElement("span",{className:a,onClick:function(){e.createAddress(r,o)}},i.a.createElement(g.a,{type:"iconreceive"})," ",Object(b.a)("collection"))}}])&&x(n.prototype,r),o&&x(n,o),t}(s.Component))||o);function W(e){return(W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(e,t,n,r,o,a,c){try{var s=e[a](c),i=s.value}catch(e){return void n(e)}s.done?t(i):Promise.resolve(i).then(r,o)}function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var H;Object(u.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{},n,{loading:r["service/queryWallet"],creatingAddress:r["service/createSingleWalletAddress"]||!1})}))(z=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=I(t).call(this,e),n=!o||"object"!==W(o)&&"function"!=typeof o?L(r):o,G(L(n),"hideReceiveDialog",(function(){n.setState({receiveAddress:""})})),n.state={},n}var n,r,o,a,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(t,e),n=t,(r=[{key:"renderReceiveModal",value:function(e){var t=this.state.receiveAddress==e;return i.a.createElement(c.a,{title:Object(b.a)("collection"),visible:t,footer:null,onCancel:this.hideReceiveDialog},i.a.createElement("div",{className:E.a.qrcodeWrap},i.a.createElement(P.a,{value:e}),i.a.createElement("p",null,e," ",i.a.createElement(j.a,{text:e}))))}},{key:"createAddress",value:(a=regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.a.info({title:"Tip",content:"Address will be created automaticly once all parties are online"}),e.next=3,this.props.dispatch({type:"service/createMultiPartyAddress",payload:{wid:t}});case 3:r=e.sent,console.log(r);case 5:case"end":return e.stop()}}),e,this)})),s=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=a.apply(e,t);function c(e){M(o,n,r,c,s,"next",e)}function s(e){M(o,n,r,c,s,"throw",e)}c(void 0)}))},function(e,t){return s.apply(this,arguments)})},{key:"showReceiveDialog",value:function(e){this.setState({receiveAddress:e})}},{key:"render",value:function(){var e=this,t=this.props,n=(t.children,t.address),r=t.id,o=t.type,a=t.btnClassname;return n?i.a.createElement("span",null,this.renderReceiveModal(n),i.a.createElement("span",{className:a,onClick:function(){return e.showReceiveDialog(n)}},i.a.createElement(g.a,{type:"iconreceive"})," ",Object(b.a)("collection"))):i.a.createElement("span",{className:a,onClick:function(){e.createAddress(r,o)}},i.a.createElement(g.a,{type:"iconreceive"})," ",Object(b.a)("collection"))}}])&&T(n.prototype,r),o&&T(n,o),t}(s.Component));function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t,n,r,o,a,c){try{var s=e[a](c),i=s.value}catch(e){return void n(e)}s.done?t(i):Promise.resolve(i).then(r,o)}function V(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){U(a,r,o,c,s,"next",e)}function s(e){U(a,r,o,c,s,"throw",e)}c(void 0)}))}}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e,t){return(K=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Z=Object(u.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){X(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{},n,{loading:r["service/queryWallet"],creatingAddress:r["service/createSingleWalletAddress"]||!1})}))(H=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=F(t).call(this,e),n=!o||"object"!==J(o)&&"function"!=typeof o?$(r):o,X($(n),"switchDisplay",(function(){var e=n.state.hideAmount;n.props.dispatch({type:"user/switchDisplay"}),n.setState({hideAmount:!e})})),X($(n),"renderWalletMenu",(function(){var e=parseInt(n.type)||0;return i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},i.a.createElement("div",{className:y.a.wallet_type},m.j.map((function(t,n){return i.a.createElement("div",{key:t.key,className:n===e?Object(d.c)(y.a.selected,y.a.wallet_type_item):y.a.wallet_type_item},i.a.createElement(l.Link,{to:"/money/home/".concat(n)},t.text))}))))})),X($(n),"renderInfo",(function(){var e=n.props,t=(e.totalAssets,e.balances),r=n.state.hideAmount,o=r?i.a.createElement(g.a,{type:"iconhide"}):i.a.createElement(g.a,{type:"iconshow"});return i.a.createElement("div",{className:y.a.info},i.a.createElement(p.a,{className:y.a.icon}),n.renderWalletMenu(),i.a.createElement("div",{className:y.a.total},r?m.h:Object(d.b)(t[n.type])," ",i.a.createElement("span",null,"BSV")),i.a.createElement("div",{className:y.a.total_assets},i.a.createElement("span",{className:y.a.balance},r?m.h:i.a.createElement(h.a,{value:t[n.type]})),i.a.createElement("span",{onClick:n.switchDisplay,className:y.a.show_balance},o)))})),X($(n),"gotoMessageList",(function(e,t){n.props.history.push("/message/list/".concat(e,"/").concat(t),{id:t})})),X($(n),"gotoTransfer",(function(e,t){n.props.history.push("/message/transfer/".concat(e,"/").concat(t),{id:t})})),X($(n),"gotoReceive",(function(e,t){n.props.history.push("/message/receive/".concat(e,"/").concat(t),{id:t})})),X($(n),"renderAssetsList",(function(){var e=n.state,t=(e.joining,e.hideAmount),r=n.props.wallets[n.type];return i.a.createElement("div",{className:y.a.list_container},i.a.createElement("div",{className:y.a.list_content},i.a.createElement("div",{className:y.a.item_head},i.a.createElement("div",{className:y.a.part1},Object(b.a)("wallet")),i.a.createElement("div",{className:y.a.part2},Object(b.a)("amount")),i.a.createElement("div",{className:y.a.part3},Object(b.a)("action"))),r&&r.map((function(e){var r=e.id,o=e.share,a=e.threshold,c=e.name,s=e.balance,u=(e.address,e.token),l=e.joinStatus,f=e.frozen,j=e.status,h=e.type,v=(e.waitJoin,Object(m.b)(u));return 0===l||0===parseInt(j)?null:i.a.createElement("div",{className:y.a.list_item,key:r},i.a.createElement("div",{className:y.a.part1,onClick:function(){return n.gotoMessageList(h,r)}},i.a.createElement(p.a,{className:y.a.coin_icon}),i.a.createElement("div",{className:y.a.coin_name},i.a.createElement("span",{className:y.a.name},c),2===h&&i.a.createElement("span",{className:y.a.wallet_no},a," | ",o))),i.a.createElement("div",{className:y.a.part2},i.a.createElement("span",{className:y.a.amount},t?m.h:Object(d.b)(s))," ",i.a.createElement("span",{className:y.a.unit},v)," ",f>0&&i.a.createElement("span",{className:y.a.focus},Object(b.a)("frozen"),": ",t?m.h:Object(d.b)(f),v)),i.a.createElement("div",{className:y.a.part3},i.a.createElement("div",{className:y.a.transfer,onClick:function(){return n.gotoTransfer(h,r)}},i.a.createElement(g.a,{type:"iconicon-send"})," ",Object(b.a)("transfer")),i.a.createElement("span",{className:y.a.receive,onClick:function(){return n.gotoReceive(h,r)}},i.a.createElement(g.a,{type:"iconreceive"})," ",Object(b.a)("collection"))))}))))})),n.state={joining:0,receiveModalVisible:!1,hideAmount:window.localStorage.getItem(m.a.HIDEAMOUNT)||0},n.type=n.props.match.params.type,n}var n,r,o,s,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&K(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.fetch()}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.type;t!==this.props.match.params.type&&(this.type=t,this.fetch(t))}},{key:"updateWallet",value:(u=V(regeneratorRuntime.mark((function e(){var t,n,r,o,a,c,s,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._updating){e.next=2;break}return e.abrupt("return");case 2:return this._updating=!0,t=this.props.match.params.type,e.next=6,this.props.dispatch({type:"service/updateWallet",payload:{type:t}});case 6:if(!(n=e.sent)||!n.length){e.next=40;break}r=!0,o=!1,a=void 0,e.prev=11,c=n[Symbol.iterator]();case 13:if(r=(s=c.next()).done){e.next=26;break}if(i=s.value,2===parseInt(i.type)){e.next=17;break}return e.abrupt("continue",23);case 17:if(!i.address){e.next=19;break}return e.abrupt("continue",23);case 19:if(1===parseInt(i.status)){e.next=21;break}return e.abrupt("continue",23);case 21:return e.next=23,this.props.dispatch({type:"service/createMultiPartyAddress",payload:{wid:i.id}});case 23:r=!0,e.next=13;break;case 26:e.next=32;break;case 28:e.prev=28,e.t0=e.catch(11),o=!0,a=e.t0;case 32:e.prev=32,e.prev=33,r||null==c.return||c.return();case 35:if(e.prev=35,!o){e.next=38;break}throw a;case 38:return e.finish(35);case 39:return e.finish(32);case 40:this._updating=!1;case 41:case"end":return e.stop()}}),e,this,[[11,28,32,40],[33,,35,39]])}))),function(){return u.apply(this,arguments)})},{key:"fetch",value:function(e){e||(e=this.type||0);var t=this.props.wallets[e];if(!(t&&t.length>0))return this.props.dispatch({type:"service/queryWallet",payload:{type:e}})}},{key:"joinWallet",value:(s=V(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({joining:t}),e.next=3,this.props.dispatch({type:"service/joinWallet",payload:{wid:t}});case 3:n=e.sent,this.setState({joining:0}),n&&n.success&&this.updateWallet();case 6:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)})},{key:"renderAddressCreating",value:function(){return i.a.createElement(c.a,{title:Object(b.a)("collection"),visible:this.props.creatingAddress,footer:null,onCancel:this.hideReceiveDialog},i.a.createElement("div",{className:y.a.qrcodeWrap},i.a.createElement(v.a,{className:y.a.loading_container}),i.a.createElement("p",null,"Generating address")))}},{key:"render",value:function(){return i.a.createElement("div",{className:y.a.container},this.renderInfo(),i.a.createElement(a.a,{spinning:this.props.loading},this.renderAssetsList()),this.renderAddressCreating())}}])&&B(n.prototype,r),o&&B(n,o),t}(s.Component))||H},944:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return f}));n(1085);var r=n(943),o=n.n(r),a=n(63),c=n.n(a);window.location;function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),o()(e).format(t)):e}var i=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function u(e){return!!e&&i.test(e)}function l(){return Array.prototype.slice.call(arguments).join(" ")}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var n=e.substr(0,t[0]),r=e.substr(-t[1],t[1]);return n+"****"+r}}var f=function(e){return c()(e).div(1e8).toString()}}}]);