(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1077:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));n(422);var r=n(157),o=n(0),a=n.n(o),s=n(1096),c=n.n(s),i=n(107),u=n(18),l=n(903),p=n.n(l);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return y(this,t),m(this,d(t).apply(this,arguments))}var n,o,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),n=t,(o=[{key:"onCopySuccess",value:function(){r.a.success(Object(u.a)("copied"))}},{key:"render",value:function(){var e=this.props.label?this.props.label:a.a.createElement(i.a,{type:"iconcopy"});return a.a.createElement(c.a,{component:"span",onSuccess:this.onCopySuccess.bind(this),"data-clipboard-text":this.props.text,className:p.a.clipboard},e)}}])&&b(n.prototype,o),s&&b(n,s),t}(o.Component)},1078:function(e,t,n){"use strict";var r,o=n(0),a=n.n(o),s=n(156),c=n(277),i=n(69),u=n.n(i);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h=Object(s.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){function t(){return p(this,t),y(this,b(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=c.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,n=c.a[t],r=this.props,o=r.price,s=r.value,i=r.usd,l=r.exchangeRate;if(!o.bsv)return null;var p=null,f=n.currencyCode.toLowerCase();p=o.bsv[f]?o.bsv[f]:u()(o.bsv.usd).times(l[f]),i&&(p=u()(p).div(o.bsv.usd).multipliedBy(i));var y=u()(s).div(1e8).times(p).toFixed(2,1);return a.a.createElement("span",null,n.symbol,y," ",n.currencyCode)}}])&&f(n.prototype,r),o&&f(n,o),t}(o.Component))||r;t.a=h},1081:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),o=n.n(r),a=n(107),s=n(900),c=n.n(s);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){return u(this,t),p(this,f(t).apply(this,arguments))}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.className||c.a.icon;return o.a.createElement("div",{className:e},o.a.createElement(a.a,{type:"iconbsv1"}))}}])&&l(n.prototype,r),s&&l(n,s),t}(r.Component)},1086:function(e,t,n){var r={"./af":944,"./af.js":944,"./ar":945,"./ar-dz":946,"./ar-dz.js":946,"./ar-kw":947,"./ar-kw.js":947,"./ar-ly":948,"./ar-ly.js":948,"./ar-ma":949,"./ar-ma.js":949,"./ar-sa":950,"./ar-sa.js":950,"./ar-tn":951,"./ar-tn.js":951,"./ar.js":945,"./az":952,"./az.js":952,"./be":953,"./be.js":953,"./bg":954,"./bg.js":954,"./bm":955,"./bm.js":955,"./bn":956,"./bn.js":956,"./bo":957,"./bo.js":957,"./br":958,"./br.js":958,"./bs":959,"./bs.js":959,"./ca":960,"./ca.js":960,"./cs":961,"./cs.js":961,"./cv":962,"./cv.js":962,"./cy":963,"./cy.js":963,"./da":964,"./da.js":964,"./de":965,"./de-at":966,"./de-at.js":966,"./de-ch":967,"./de-ch.js":967,"./de.js":965,"./dv":968,"./dv.js":968,"./el":969,"./el.js":969,"./en-SG":970,"./en-SG.js":970,"./en-au":971,"./en-au.js":971,"./en-ca":972,"./en-ca.js":972,"./en-gb":973,"./en-gb.js":973,"./en-ie":974,"./en-ie.js":974,"./en-il":975,"./en-il.js":975,"./en-nz":976,"./en-nz.js":976,"./eo":977,"./eo.js":977,"./es":978,"./es-do":979,"./es-do.js":979,"./es-us":980,"./es-us.js":980,"./es.js":978,"./et":981,"./et.js":981,"./eu":982,"./eu.js":982,"./fa":983,"./fa.js":983,"./fi":984,"./fi.js":984,"./fo":985,"./fo.js":985,"./fr":986,"./fr-ca":987,"./fr-ca.js":987,"./fr-ch":988,"./fr-ch.js":988,"./fr.js":986,"./fy":989,"./fy.js":989,"./ga":990,"./ga.js":990,"./gd":991,"./gd.js":991,"./gl":992,"./gl.js":992,"./gom-latn":993,"./gom-latn.js":993,"./gu":994,"./gu.js":994,"./he":995,"./he.js":995,"./hi":996,"./hi.js":996,"./hr":997,"./hr.js":997,"./hu":998,"./hu.js":998,"./hy-am":999,"./hy-am.js":999,"./id":1e3,"./id.js":1e3,"./is":1001,"./is.js":1001,"./it":1002,"./it-ch":1003,"./it-ch.js":1003,"./it.js":1002,"./ja":1004,"./ja.js":1004,"./jv":1005,"./jv.js":1005,"./ka":1006,"./ka.js":1006,"./kk":1007,"./kk.js":1007,"./km":1008,"./km.js":1008,"./kn":1009,"./kn.js":1009,"./ko":1010,"./ko.js":1010,"./ku":1011,"./ku.js":1011,"./ky":1012,"./ky.js":1012,"./lb":1013,"./lb.js":1013,"./lo":1014,"./lo.js":1014,"./lt":1015,"./lt.js":1015,"./lv":1016,"./lv.js":1016,"./me":1017,"./me.js":1017,"./mi":1018,"./mi.js":1018,"./mk":1019,"./mk.js":1019,"./ml":1020,"./ml.js":1020,"./mn":1021,"./mn.js":1021,"./mr":1022,"./mr.js":1022,"./ms":1023,"./ms-my":1024,"./ms-my.js":1024,"./ms.js":1023,"./mt":1025,"./mt.js":1025,"./my":1026,"./my.js":1026,"./nb":1027,"./nb.js":1027,"./ne":1028,"./ne.js":1028,"./nl":1029,"./nl-be":1030,"./nl-be.js":1030,"./nl.js":1029,"./nn":1031,"./nn.js":1031,"./pa-in":1032,"./pa-in.js":1032,"./pl":1033,"./pl.js":1033,"./pt":1034,"./pt-br":1035,"./pt-br.js":1035,"./pt.js":1034,"./ro":1036,"./ro.js":1036,"./ru":1037,"./ru.js":1037,"./sd":1038,"./sd.js":1038,"./se":1039,"./se.js":1039,"./si":1040,"./si.js":1040,"./sk":1041,"./sk.js":1041,"./sl":1042,"./sl.js":1042,"./sq":1043,"./sq.js":1043,"./sr":1044,"./sr-cyrl":1045,"./sr-cyrl.js":1045,"./sr.js":1044,"./ss":1046,"./ss.js":1046,"./sv":1047,"./sv.js":1047,"./sw":1048,"./sw.js":1048,"./ta":1049,"./ta.js":1049,"./te":1050,"./te.js":1050,"./tet":1051,"./tet.js":1051,"./tg":1052,"./tg.js":1052,"./th":1053,"./th.js":1053,"./tl-ph":1054,"./tl-ph.js":1054,"./tlh":1055,"./tlh.js":1055,"./tr":1056,"./tr.js":1056,"./tzl":1057,"./tzl.js":1057,"./tzm":1058,"./tzm-latn":1059,"./tzm-latn.js":1059,"./tzm.js":1058,"./ug-cn":1060,"./ug-cn.js":1060,"./uk":1061,"./uk.js":1061,"./ur":1062,"./ur.js":1062,"./uz":1063,"./uz-latn":1064,"./uz-latn.js":1064,"./uz.js":1063,"./vi":1065,"./vi.js":1065,"./x-pseudo":1066,"./x-pseudo.js":1066,"./yo":1067,"./yo.js":1067,"./zh-cn":1068,"./zh-cn.js":1068,"./zh-hk":1069,"./zh-hk.js":1069,"./zh-tw":1070,"./zh-tw.js":1070};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=1086},1117:function(e,t,n){"use strict";n(432);var r,o,a=n(280),s=(n(424),n(279),n(0)),c=n.n(s),i=n(156),u=n(61),l=n(107),p=(n(904),n(1087),n(1077),n(18));function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t,n,r,o,a,s){try{var c=e[a](s),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,o)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r=Object(i.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{},n,{loading:r["service/queryWallet"],creatingAddress:r["service/createSingleWalletAddress"]||!1})})),Object(u.withRouter)(o=r(o=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=m(t).call(this,e),n=!o||"object"!==f(o)&&"function"!=typeof o?d(r):o,v(d(n),"hideReceiveDialog",(function(){n.setState({receiveAddress:""})})),n.state={},n}var n,r,o,s,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),n=t,(r=[{key:"renderReceiveModal",value:function(e){return this.state.receiveAddress,null}},{key:"createAddress",value:(s=regeneratorRuntime.mark((function e(t,n){var r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(2!==parseInt(n)){e.next=8;break}if(r=this.props.allWallets[t]){e.next=4;break}return e.abrupt("return");case 4:if(r.uid===this.props.userid){e.next=6;break}return e.abrupt("return");case 6:return this.props.dispatch({type:"service/createMultiPartyAddress",payload:{wid:t}}),e.abrupt("return");case 8:return e.next=10,this.props.dispatch({type:"service/createSingleWalletAddress",payload:{wid:t}});case 10:(o=e.sent)&&this.showReceiveDialog(o);case 12:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=s.apply(e,t);function a(e){y(o,n,r,a,c,"next",e)}function c(e){y(o,n,r,a,c,"throw",e)}a(void 0)}))},function(e,t){return i.apply(this,arguments)})},{key:"showReceiveDialog",value:function(e){var t=this.props.id,n=this.props.match.params.type;n||(n=1),this.props.history.push("/message/receive/".concat(n,"/").concat(t),{id:t})}},{key:"render",value:function(){var e=this,t=this.props,n=t.address,r=t.id,o=t.type,s=t.btnClassname;return n?c.a.createElement("span",null,this.renderReceiveModal(n),c.a.createElement("span",{className:s,onClick:function(){return e.showReceiveDialog(n)}},c.a.createElement(l.a,{type:"iconreceive"})," ",Object(p.a)("collection"))):2===o?c.a.createElement(a.a,{title:Object(p.a)("need_all_online"),placement:"bottomRight"},c.a.createElement("span",{className:s,onClick:function(){e.createAddress(r,o)}},c.a.createElement(l.a,{type:"iconreceive"})," ",Object(p.a)("collection"))):c.a.createElement("span",{className:s,onClick:function(){e.createAddress(r,o)}},c.a.createElement(l.a,{type:"iconreceive"})," ",Object(p.a)("collection"))}}])&&b(n.prototype,r),o&&b(n,o),t}(s.Component))||o)},1118:function(e,t,n){"use strict";n(424);var r,o=n(279),a=n(0),s=n.n(a),c=n(156),i=n(904),u=n.n(i),l=n(1087),p=n.n(l),f=n(1077),y=n(107),b=n(18);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n,r,o,a,s){try{var c=e[a](s),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,o)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object(c.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{},n,{loading:r["service/queryWallet"],creatingAddress:r["service/createSingleWalletAddress"]||!1})}))(r=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=h(t).call(this,e),n=!o||"object"!==m(o)&&"function"!=typeof o?v(r):o,w(v(n),"hideReceiveDialog",(function(){n.setState({receiveAddress:""})})),n.state={},n}var n,r,a,c,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(r=[{key:"renderReceiveModal",value:function(e){var t=this.state.receiveAddress==e;return s.a.createElement(o.a,{title:Object(b.a)("collection"),visible:t,footer:null,onCancel:this.hideReceiveDialog},s.a.createElement("div",{className:u.a.qrcodeWrap},s.a.createElement(p.a,{value:e}),s.a.createElement("p",null,e," ",s.a.createElement(f.a,{text:e}))))}},{key:"createAddress",value:(c=regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.a.info({title:"Tip",content:"Address will be created automaticly once all parties are online"}),e.next=3,this.props.dispatch({type:"service/createMultiPartyAddress",payload:{wid:t}});case 3:r=e.sent,console.log(r);case 5:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(n,r){var o=c.apply(e,t);function a(e){d(o,n,r,a,s,"next",e)}function s(e){d(o,n,r,a,s,"throw",e)}a(void 0)}))},function(e,t){return i.apply(this,arguments)})},{key:"showReceiveDialog",value:function(e){this.setState({receiveAddress:e})}},{key:"render",value:function(){var e=this,t=this.props,n=(t.children,t.address),r=t.id,o=t.type,a=t.btnClassname;return n?s.a.createElement("span",null,this.renderReceiveModal(n),s.a.createElement("span",{className:a,onClick:function(){return e.showReceiveDialog(n)}},s.a.createElement(y.a,{type:"iconreceive"})," ",Object(b.a)("collection"))):s.a.createElement("span",{className:a,onClick:function(){e.createAddress(r,o)}},s.a.createElement(y.a,{type:"iconreceive"})," ",Object(b.a)("collection"))}}])&&j(n.prototype,r),a&&j(n,a),t}(a.Component))},434:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));n(421);var r,o=n(274),a=(n(424),n(279)),s=(n(423),n(21),n(0)),c=n.n(s),i=n(156),u=n(61),l=n(1081),p=n(915),f=n.n(p),y=n(18),b=n(19),m=n(942),d=(n(1077),n(1078)),j=n(275),h=(n(1117),n(1118),n(107));function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,n,r,o,a,s){try{var c=e[a](s),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,o)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function s(e){O(a,r,o,s,c,"next",e)}function c(e){O(a,r,o,s,c,"throw",e)}s(void 0)}))}}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=Object(i.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{},n,{loading:r["service/queryWallet"],creatingAddress:r["service/createSingleWalletAddress"]||!1})}))(r=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=E(t).call(this,e),n=!o||"object"!==v(o)&&"function"!=typeof o?k(r):o,S(k(n),"switchDisplay",(function(){var e=n.state.hideAmount;n.props.dispatch({type:"user/switchDisplay"}),n.setState({hideAmount:!e})})),S(k(n),"renderWalletMenu",(function(){var e=parseInt(n.type)||0;return c.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},c.a.createElement("div",{className:f.a.wallet_type},b.i.map((function(t,n){return c.a.createElement("div",{key:t.key,className:n===e?Object(m.c)(f.a.selected,f.a.wallet_type_item):f.a.wallet_type_item},c.a.createElement(u.Link,{to:"/money/home/".concat(n)},t.text))}))))})),S(k(n),"renderInfo",(function(){var e=n.props,t=(e.totalAssets,e.balances),r=n.state.hideAmount,o=r?c.a.createElement(h.a,{type:"iconhide"}):c.a.createElement(h.a,{type:"iconshow"});return c.a.createElement("div",{className:f.a.info},c.a.createElement(l.a,{className:f.a.icon}),n.renderWalletMenu(),c.a.createElement("div",{className:f.a.total},r?b.g:Object(m.b)(t[n.type])," ",c.a.createElement("span",null,"BSV")),c.a.createElement("div",{className:f.a.total_assets},c.a.createElement("span",{className:f.a.balance},r?b.g:c.a.createElement(d.a,{value:t[n.type]})),c.a.createElement("span",{onClick:n.switchDisplay,className:f.a.show_balance},o)))})),S(k(n),"gotoMessageList",(function(e,t){n.props.history.push("/message/list/".concat(e,"/").concat(t),{id:t})})),S(k(n),"gotoTransfer",(function(e,t){n.props.history.push("/message/transfer/".concat(e,"/").concat(t),{id:t})})),S(k(n),"gotoReceive",(function(e,t){n.props.history.push("/message/receive/".concat(e,"/").concat(t),{id:t})})),S(k(n),"renderAssetsList",(function(){var e=n.state,t=(e.joining,e.hideAmount),r=n.props.wallets[n.type];return c.a.createElement("div",{className:f.a.list_container},c.a.createElement("div",{className:f.a.list_content},c.a.createElement("div",{className:f.a.item_head},c.a.createElement("div",{className:f.a.part1},Object(y.a)("wallet")),c.a.createElement("div",{className:f.a.part2},Object(y.a)("amount")),c.a.createElement("div",{className:f.a.part3},Object(y.a)("action"))),r&&r.map((function(e){var r=e.id,o=e.share,a=e.threshold,s=e.name,i=e.balance,u=(e.address,e.token),p=e.joinStatus,d=e.frozen,j=e.status,v=e.type,O=(e.waitJoin,Object(b.b)(u));return 0===p||0===parseInt(j)?null:c.a.createElement("div",{className:f.a.list_item,key:r},c.a.createElement("div",{className:f.a.part1,onClick:function(){return n.gotoMessageList(v,r)}},c.a.createElement(l.a,{className:f.a.coin_icon}),c.a.createElement("div",{className:f.a.coin_name},c.a.createElement("span",{className:f.a.name},s),2===v&&c.a.createElement("span",{className:f.a.wallet_no},a," | ",o))),c.a.createElement("div",{className:f.a.part2},c.a.createElement("span",{className:f.a.amount},t?b.g:Object(m.b)(i))," ",c.a.createElement("span",{className:f.a.unit},O)," ",d>0&&c.a.createElement("span",{className:f.a.focus},Object(y.a)("frozen"),": ",t?b.g:Object(m.b)(d),O)),c.a.createElement("div",{className:f.a.part3},c.a.createElement("div",{className:f.a.transfer,onClick:function(){return n.gotoTransfer(v,r)}},c.a.createElement(h.a,{type:"iconicon-send"})," ",Object(y.a)("transfer")),c.a.createElement("span",{className:f.a.receive,onClick:function(){return n.gotoReceive(v,r)}},c.a.createElement(h.a,{type:"iconreceive"})," ",Object(y.a)("collection"))))}))))})),window.sessionStorage.getItem(b.a.SEED)||e.history.push("/user/login"),n.state={joining:0,receiveModalVisible:!1,hideAmount:window.localStorage.getItem(b.a.HIDEAMOUNT)||0},n.type=n.props.match.params.type,n}var n,r,s,i,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.fetch()}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.type;t!==this.props.match.params.type&&(this.type=t,this.fetch(t))}},{key:"updateWallet",value:(p=g(regeneratorRuntime.mark((function e(){var t,n,r,o,a,s,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._updating){e.next=2;break}return e.abrupt("return");case 2:return this._updating=!0,t=this.props.match.params.type,e.next=6,this.props.dispatch({type:"service/updateWallet",payload:{type:t}});case 6:if(!(n=e.sent)||!n.length){e.next=40;break}r=!0,o=!1,a=void 0,e.prev=11,s=n[Symbol.iterator]();case 13:if(r=(c=s.next()).done){e.next=26;break}if(i=c.value,2===parseInt(i.type)){e.next=17;break}return e.abrupt("continue",23);case 17:if(!i.address){e.next=19;break}return e.abrupt("continue",23);case 19:if(1===parseInt(i.status)){e.next=21;break}return e.abrupt("continue",23);case 21:return e.next=23,this.props.dispatch({type:"service/createMultiPartyAddress",payload:{wid:i.id}});case 23:r=!0,e.next=13;break;case 26:e.next=32;break;case 28:e.prev=28,e.t0=e.catch(11),o=!0,a=e.t0;case 32:e.prev=32,e.prev=33,r||null==s.return||s.return();case 35:if(e.prev=35,!o){e.next=38;break}throw a;case 38:return e.finish(35);case 39:return e.finish(32);case 40:this._updating=!1;case 41:case"end":return e.stop()}}),e,this,[[11,28,32,40],[33,,35,39]])}))),function(){return p.apply(this,arguments)})},{key:"fetch",value:function(e){e||(e=this.type||0);var t=this.props.wallets[e];if(!(t&&t.length>0))return this.props.dispatch({type:"service/queryWallet",payload:{type:e}})}},{key:"joinWallet",value:(i=g(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({joining:t}),e.next=3,this.props.dispatch({type:"service/joinWallet",payload:{wid:t}});case 3:n=e.sent,this.setState({joining:0}),n&&n.success&&this.updateWallet();case 6:case"end":return e.stop()}}),e,this)}))),function(e){return i.apply(this,arguments)})},{key:"renderAddressCreating",value:function(){return c.a.createElement(a.a,{title:Object(y.a)("collection"),visible:this.props.creatingAddress,footer:null,onCancel:this.hideReceiveDialog},c.a.createElement("div",{className:f.a.qrcodeWrap},c.a.createElement(j.a,{className:f.a.loading_container}),c.a.createElement("p",null,"Generating address")))}},{key:"render",value:function(){return c.a.createElement("div",{className:f.a.container},this.renderInfo(),c.a.createElement(o.a,{spinning:this.props.loading},this.renderAssetsList()),this.renderAddressCreating())}}])&&w(n.prototype,r),s&&w(n,s),t}(s.Component))||r},942:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return f}));n(1085);var r=n(941),o=n.n(r),a=n(69),s=n.n(a);window.location;function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),o()(e).format(t)):e}var i=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function u(e){return!!e&&i.test(e)}function l(){return Array.prototype.slice.call(arguments).join(" ")}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var n=e.substr(0,t[0]),r=e.substr(-t[1],t[1]);return n+"****"+r}}var f=function(e){return s()(e).div(1e8).toString()}}}]);