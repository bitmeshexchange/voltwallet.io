(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1078:function(e,t,n){"use strict";n.d(t,"a",(function(){return H}));var r,a,o=n(0),i=n.n(o),c=n(156),s=n(897),u=n.n(s),l=(n(275),n(18)),p=(n(427),n(280)),f=n(899),y=n.n(f),m=(n(421),n(274)),b=n(900),d=n.n(b),h=n(61),v=n(939),j=n(27);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N,x,I=(r=Object(c.connect)((function(e){var t=e.wallet;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.user,{},t,{loading:e.loading.effects["service/queryWallet"]})})),Object(h.withRouter)(a=r(a=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=E(this,P(t).call(this,e))).bgcs=[],n.state={joining:0,hideAmount:window.localStorage.getItem(j.a.HIDEAMOUNT)||0},n}var n,r,a,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,e),n=t,(r=[{key:"getWalletId",value:function(){var e=this.props,t=e.walletList,n=e.match.params.id;if(void 0===n)for(var r=0;r<t.length;r++){var a=t[r];a.join,a.status,n=a.id;break}return n}},{key:"joinWallet",value:(o=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),this.setState({joining:t}),e.next=4,this.props.dispatch({type:"service/joinWallet",payload:{wid:t}});case 4:n=e.sent,this.setState({joining:0}),n&&n.success&&this.props.dispatch({type:"service/updateWallet"});case 7:case"end":return e.stop()}}),e,this)})),c=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=o.apply(e,t);function i(e){w(a,n,r,i,c,"next",e)}function c(e){w(a,n,r,i,c,"throw",e)}i(void 0)}))},function(e){return c.apply(this,arguments)})},{key:"componentWillReceiveProps",value:function(e){e.hideAmount!==this.state.hideAmount&&this.setState({hideAmount:e.hideAmount})}},{key:"render",value:function(){var e=this.props,t=e.walletList,n=e.loading,r=e.match,a=parseInt(r.params.type)||1;if(0===t.length)return null;var o=this.state.hideAmount,c=this.getWalletId();return i.a.createElement(m.a,{spinning:n},i.a.createElement("div",{className:d.a.list},i.a.createElement("div",{className:d.a.list_content},t.map((function(e){var t=e.name,n=e.id,r=e.type,s=e.joinStatus,u=e.founder,l=e.status,p=e.balance,f=e.share,y=e.waitJoin,m=e.token,b=e.threshold,O=parseInt(n)===parseInt(c)?Object(v.c)(d.a.item_contrainer,d.a.current_item):d.a.item_contrainer,w=o?j.g:Object(v.b)(p),g=null,E=Object(j.b)(m);0===s?g=i.a.createElement("span",{className:d.a.join},"JOIN WALLET"):0===parseInt(l)&&(g=i.a.createElement("span",{className:d.a.wait_join},y," MEMBERS TO JOIN"));var P=i.a.createElement("div",{className:d.a.list_item},i.a.createElement("div",{className:d.a.wallet_name},i.a.createElement("span",{className:d.a.name,title:t},t," "),i.a.createElement("span",{className:d.a.wallet_no},b," | ",f)),2===r&&i.a.createElement("div",{className:d.a.wallet_info},g),i.a.createElement("div",{className:d.a.wallet_desc},0===parseInt(l)?u:"".concat(w," ").concat(E)));return i.a.createElement(h.Link,{to:"/message/list/".concat(a,"/").concat(n),key:n,className:O},P)})))))}}])&&g(n.prototype,r),a&&g(n,a),t}(o.Component))||a)||a),D=n(107);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q=(N=Object(c.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)})),Object(h.withRouter)(x=N(x=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=R(t).call(this,e),n=!a||"object"!==C(a)&&"function"!=typeof a?T(r):a,M(T(n),"renderWalletMenu",(function(){var e=parseInt(n.props.match.params.type);return e||(e=1),i.a.createElement("div",{className:y.a.wallet_type},j.i.map((function(t,r){return 2===r&&n.props.newMsg?i.a.createElement("div",{key:t.key,className:r===e?y.a.selected:""},i.a.createElement(h.Link,{to:"/message/list/".concat(r)},i.a.createElement(p.a,{dot:!0},t.text))):r>0?i.a.createElement("div",{key:t.key,className:r===e?y.a.selected:""},i.a.createElement(h.Link,{to:"/message/list/".concat(r)},t.text)):void 0})))})),n.state={},n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=parseInt(this.props.match.params.type);return e||(e=1),i.a.createElement("div",{className:y.a.list_container},this.renderWalletMenu(),i.a.createElement(I,{history:this.props.history}),i.a.createElement("div",{className:y.a.create_wallet},i.a.createElement(D.a,{type:"iconcreatewallet"}),i.a.createElement(h.Link,{to:"/message/createWallet/".concat(e)},Object(l.a)("create_wallet"))))}}])&&W(n.prototype,r),a&&W(n,a),t}(o.Component))||x)||x);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function B(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function J(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){B(o,r,a,i,c,"next",e)}function c(e){B(o,r,a,i,c,"throw",e)}i(void 0)}))}}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function G(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Y(e){return(Y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=G(this,Y(t).call(this,e))).state={ready:!1},n}var n,r,a,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:(c=J(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.match.params,n=t.type,r=t.id,this.saveCurrentWallet(n,r);case 2:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"getWalletId",value:function(e,t){if(void 0===t)for(var n=0;n<e.length;n++){t=e[n].id;break}return t}},{key:"saveCurrentWallet",value:(o=J(regeneratorRuntime.mark((function e(t,n,r){var a,o,i,c,s,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,o=a.dispatch,i=a.match,c=this.props.walletList,t||(t=parseInt(i.params.type)||1),!(c.length<1)&&r){e.next=7;break}return e.next=6,o({type:"service/queryWallet",payload:{type:t}});case 6:c=e.sent;case 7:if(c&&!(c.length<1)){e.next=14;break}return this.lastId=-1,e.next=11,o({type:"wallet/save",payload:{currentWallet:{}}});case 11:return this.setState({ready:!0}),this.ready&&this.ready(),e.abrupt("return");case 14:return s=this.getWalletId(c,n),this.lastId=s,u=c.find((function(e){return e.id===parseInt(s)})),e.next=19,o({type:"wallet/save",payload:{walletList:c,showWalletInfo:!1,currentWallet:u}});case 19:this.setState({ready:!0}),this.ready&&this.ready(parseInt(s));case 21:case"end":return e.stop()}}),e,this)}))),function(e,t,n){return o.apply(this,arguments)})},{key:"loadTransactions",value:function(e){e&&this.props.dispatch({type:"service/queryTransaction",payload:{wid:e}})}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.type,n=e.match.params.id,r=this.props.match.params.type,a=this.props.match.params.id;t===r&&void 0===n&&void 0===a||t===r&&n===a||this.lastId!==n&&this.saveCurrentWallet(t,n,t===r)}},{key:"renderSidebar",value:function(){return i.a.createElement(q,{type:this.props.type})}},{key:"render",value:function(){return i.a.createElement("div",{className:u.a.container},this.renderSidebar(),i.a.createElement("div",{className:u.a.detail}))}}])&&F(n.prototype,r),a&&F(n,a),t}(o.Component)},1080:function(e,t,n){"use strict";var r,a=n(0),o=n.n(a),i=n(156),c=n(278),s=n(78),u=n.n(s);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=Object(i.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){function t(){return p(this,t),y(this,m(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=c.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,n=c.a[t],r=this.props,a=r.price,i=r.value,s=r.usd,l=r.exchangeRate;if(!a.bsv)return null;var p=null,f=n.currencyCode.toLowerCase();p=a.bsv[f]?a.bsv[f]:u()(a.bsv.usd).times(l[f]),s&&(p=u()(p).div(a.bsv.usd).multipliedBy(s));var y=u()(i).div(1e8).times(p).toFixed(2,1);return o.a.createElement("span",null,n.symbol,y," ",n.currencyCode)}}])&&f(n.prototype,r),a&&f(n,a),t}(a.Component))||r;t.a=v},1083:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),a=n.n(r),o=n(107),i=n(901),c=n.n(i);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return u(this,t),p(this,f(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.className||c.a.icon;return a.a.createElement("div",{className:e},a.a.createElement(o.a,{type:"iconbsv1"}))}}])&&l(n.prototype,r),i&&l(n,i),t}(r.Component)},1085:function(e,t,n){var r={"./af":943,"./af.js":943,"./ar":944,"./ar-dz":945,"./ar-dz.js":945,"./ar-kw":946,"./ar-kw.js":946,"./ar-ly":947,"./ar-ly.js":947,"./ar-ma":948,"./ar-ma.js":948,"./ar-sa":949,"./ar-sa.js":949,"./ar-tn":950,"./ar-tn.js":950,"./ar.js":944,"./az":951,"./az.js":951,"./be":952,"./be.js":952,"./bg":953,"./bg.js":953,"./bm":954,"./bm.js":954,"./bn":955,"./bn.js":955,"./bo":956,"./bo.js":956,"./br":957,"./br.js":957,"./bs":958,"./bs.js":958,"./ca":959,"./ca.js":959,"./cs":960,"./cs.js":960,"./cv":961,"./cv.js":961,"./cy":962,"./cy.js":962,"./da":963,"./da.js":963,"./de":964,"./de-at":965,"./de-at.js":965,"./de-ch":966,"./de-ch.js":966,"./de.js":964,"./dv":967,"./dv.js":967,"./el":968,"./el.js":968,"./en-SG":969,"./en-SG.js":969,"./en-au":970,"./en-au.js":970,"./en-ca":971,"./en-ca.js":971,"./en-gb":972,"./en-gb.js":972,"./en-ie":973,"./en-ie.js":973,"./en-il":974,"./en-il.js":974,"./en-nz":975,"./en-nz.js":975,"./eo":976,"./eo.js":976,"./es":977,"./es-do":978,"./es-do.js":978,"./es-us":979,"./es-us.js":979,"./es.js":977,"./et":980,"./et.js":980,"./eu":981,"./eu.js":981,"./fa":982,"./fa.js":982,"./fi":983,"./fi.js":983,"./fo":984,"./fo.js":984,"./fr":985,"./fr-ca":986,"./fr-ca.js":986,"./fr-ch":987,"./fr-ch.js":987,"./fr.js":985,"./fy":988,"./fy.js":988,"./ga":989,"./ga.js":989,"./gd":990,"./gd.js":990,"./gl":991,"./gl.js":991,"./gom-latn":992,"./gom-latn.js":992,"./gu":993,"./gu.js":993,"./he":994,"./he.js":994,"./hi":995,"./hi.js":995,"./hr":996,"./hr.js":996,"./hu":997,"./hu.js":997,"./hy-am":998,"./hy-am.js":998,"./id":999,"./id.js":999,"./is":1e3,"./is.js":1e3,"./it":1001,"./it-ch":1002,"./it-ch.js":1002,"./it.js":1001,"./ja":1003,"./ja.js":1003,"./jv":1004,"./jv.js":1004,"./ka":1005,"./ka.js":1005,"./kk":1006,"./kk.js":1006,"./km":1007,"./km.js":1007,"./kn":1008,"./kn.js":1008,"./ko":1009,"./ko.js":1009,"./ku":1010,"./ku.js":1010,"./ky":1011,"./ky.js":1011,"./lb":1012,"./lb.js":1012,"./lo":1013,"./lo.js":1013,"./lt":1014,"./lt.js":1014,"./lv":1015,"./lv.js":1015,"./me":1016,"./me.js":1016,"./mi":1017,"./mi.js":1017,"./mk":1018,"./mk.js":1018,"./ml":1019,"./ml.js":1019,"./mn":1020,"./mn.js":1020,"./mr":1021,"./mr.js":1021,"./ms":1022,"./ms-my":1023,"./ms-my.js":1023,"./ms.js":1022,"./mt":1024,"./mt.js":1024,"./my":1025,"./my.js":1025,"./nb":1026,"./nb.js":1026,"./ne":1027,"./ne.js":1027,"./nl":1028,"./nl-be":1029,"./nl-be.js":1029,"./nl.js":1028,"./nn":1030,"./nn.js":1030,"./pa-in":1031,"./pa-in.js":1031,"./pl":1032,"./pl.js":1032,"./pt":1033,"./pt-br":1034,"./pt-br.js":1034,"./pt.js":1033,"./ro":1035,"./ro.js":1035,"./ru":1036,"./ru.js":1036,"./sd":1037,"./sd.js":1037,"./se":1038,"./se.js":1038,"./si":1039,"./si.js":1039,"./sk":1040,"./sk.js":1040,"./sl":1041,"./sl.js":1041,"./sq":1042,"./sq.js":1042,"./sr":1043,"./sr-cyrl":1044,"./sr-cyrl.js":1044,"./sr.js":1043,"./ss":1045,"./ss.js":1045,"./sv":1046,"./sv.js":1046,"./sw":1047,"./sw.js":1047,"./ta":1048,"./ta.js":1048,"./te":1049,"./te.js":1049,"./tet":1050,"./tet.js":1050,"./tg":1051,"./tg.js":1051,"./th":1052,"./th.js":1052,"./tl-ph":1053,"./tl-ph.js":1053,"./tlh":1054,"./tlh.js":1054,"./tr":1055,"./tr.js":1055,"./tzl":1056,"./tzl.js":1056,"./tzm":1057,"./tzm-latn":1058,"./tzm-latn.js":1058,"./tzm.js":1057,"./ug-cn":1059,"./ug-cn.js":1059,"./uk":1060,"./uk.js":1060,"./ur":1061,"./ur.js":1061,"./uz":1062,"./uz-latn":1063,"./uz-latn.js":1063,"./uz.js":1062,"./vi":1064,"./vi.js":1064,"./x-pseudo":1065,"./x-pseudo.js":1065,"./yo":1066,"./yo.js":1066,"./zh-cn":1067,"./zh-cn.js":1067,"./zh-hk":1068,"./zh-hk.js":1068,"./zh-tw":1069,"./zh-tw.js":1069};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=1085},1095:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));n(425);var r,a=n(279),o=(n(421),n(274)),i=n(0),c=n.n(i),s=n(156),u=n(939),l=n(107),p=n(907),f=n.n(p),y=n(18);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=Object(s.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{},n,{partiesLoading:r["wallet/queryParties"]||r["wallet/checkOnline"]||!1})}))(r=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=h(this,v(t).call(this,e))).state={},n}var n,r,i,s,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.checkStatus()}},{key:"checkStatus",value:(s=regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.currentWallet,r=t.dispatch,0!==n.status){e.next=4;break}return e.next=4,r({type:"wallet/checkOnline",payload:{id:n.id,users:n.parties}});case 4:if(n.parties){e.next=7;break}return e.next=7,r({type:"wallet/queryParties",payload:{id:n.id}});case 7:case"end":return e.stop()}}),e,this)})),p=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=s.apply(e,t);function o(e){b(a,n,r,o,i,"next",e)}function i(e){b(a,n,r,o,i,"throw",e)}o(void 0)}))},function(){return p.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.currentWallet,n=e.visible,r=e.partiesLoading,i=e.cancel,s=e.approve,p=t.createtime,m=t.name,b=(t.type,t.share),d=t.status,h=t.parties;return h&&h.sort((function(e,t){return new Date(e.updatetime).getTime()-new Date(t.updatetime).getTime()})),c.a.createElement(a.a,{width:600,title:null,visible:n,footer:null,onCancel:i},c.a.createElement("div",{className:f.a.body},c.a.createElement("div",{className:f.a.title},"".concat(m," - ").concat(Object(y.a)("key_share_members"))),c.a.createElement("div",{className:f.a.desc},Object(y.a)("created_on")," ",Object(u.a)(p)," | ",b," ",Object(y.a)("members")," ",s&&"| ".concat(s.length," ").concat(Object(y.a)("signee_signed"))),c.a.createElement(o.a,{spinning:r},h&&h.map((function(e,t){var n=e.user,r=e.online,a=e.uid;if(n)return 0===d?c.a.createElement("div",{className:f.a.item,key:n},c.a.createElement(l.a,{type:r?"iconicon-keyshare-member-online":"iconicon-keyshare-member-offline"}),c.a.createElement("span",{className:f.a.no},t+1),c.a.createElement("span",{className:f.a.email},n),1===e.status?c.a.createElement("span",{className:f.a.joined},"JOINED"):c.a.createElement("span",{className:f.a.pending},"PENDING")):c.a.createElement("div",{className:f.a.item,key:n},r?c.a.createElement(l.a,{type:"iconicon-keyshare-member-online"}):c.a.createElement(l.a,{type:"iconicon-keyshare-member-offline"}),c.a.createElement("span",{className:f.a.no},t+1),c.a.createElement("span",{className:f.a.email},n),s&&(s.indexOf(a)>-1?c.a.createElement("span",{className:f.a.signed},"SIGNED"):c.a.createElement("span",{className:f.a.pending},"UNSIGNED")))})))))}}])&&d(n.prototype,r),i&&d(n,i),t}(i.Component))||r},936:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return K}));var r,a,o,i=n(0),c=n.n(i),s=n(156),u=n(897),l=n.n(u),p=n(18),f=n(1078),y=(n(421),n(274)),m=(n(1072),n(1073)),b=(n(422),n(157)),d=(n(941),n(942)),h=n(61),v=n(939),j=n(1080),O=n(107),w=n(1083),g=n(920),E=n.n(g),P=n(1095),k=n(275),_=n(27);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){N(o,r,a,i,c,"next",e)}function c(e){N(o,r,a,i,c,"throw",e)}i(void 0)}))}}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var L,M=d.a.Item,q=window.location.hostname,A=(r=d.a.create(),a=Object(s.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return T({},t,{},n,{loading:r["service/queryWalletById"],loadingParties:r["wallet/queryParties"],loadingPaymail:r["service/queryPaymailById"]})})),Object(h.withRouter)(o=r(o=a(o=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=D(t).call(this,e),n=!a||"object"!==S(a)&&"function"!=typeof a?C(r):a,z(C(n),"gotoBack",(function(){n.props.history.goBack()})),z(C(n),"showMembers",(function(){n.setState({visible:!0})})),z(C(n),"hideMembers",(function(){n.setState({visible:!1})})),z(C(n),"editPaymail",(function(e){var t=n.props.match.params.type;t||(t=1),n.props.history.push("/message/paymail/".concat(t,"/").concat(e),{id:e})})),z(C(n),"setName",(function(){n.setState({editing:!0})})),z(C(n),"handleSubmit",(function(e){e.preventDefault();var t=n.props.match.params.id;n.props.form.validateFields(function(){var e=x(regeneratorRuntime.mark((function e(r,a){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=9;break}if(console.log("Received values of form: ",a),a.name.trim()!==n.props.currentWallet.name){e.next=4;break}return e.abrupt("return",n.setState({editing:!1}));case 4:return o=T({},a,{wid:parseInt(t)}),e.next=7,n.props.dispatch({type:"service/setName",payload:o});case 7:e.sent&&(b.a.success(Object(p.a)("edit_name_success")),n.updateWallet(),n.setState({editing:!1}));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())})),n.state={visible:!1,editing:!1},n}var n,r,a,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(t,e),n=t,(r=[{key:"updateWallet",value:(o=x(regeneratorRuntime.mark((function e(){var t,n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params,n=t.type,r=t.id,e.next=3,this.props.dispatch({type:"service/updateWallet",payload:{type:parseInt(n)}});case 3:return e.sent,a=this.props.walletList.find((function(e){return e.id===parseInt(r)})),e.next=7,this.props.dispatch({type:"wallet/saveCurrent",payload:a});case 7:this.setState({joining:!1});case 8:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props,n=(t.loading,t.loadingParties),r=t.currentWallet,a=t.form,o=t.loadingPaymail,i=a.getFieldDecorator,s=r.id,u=r.createtime,l=r.name,f=r.type,b=r.founder,h=r.balance,g=r.paymail,S=r.token;if(!s)return c.a.createElement(k.a,null);var N=Object(_.b)(S),x=this.state.visible;return c.a.createElement("div",{style:{height:"100%",overflowY:"auto"}},c.a.createElement("div",{className:E.a.container},c.a.createElement(w.a,null),c.a.createElement("div",{className:E.a.label},Object(p.a)("wallet_name")),c.a.createElement(d.a,{hideRequiredMark:!0},this.state.editing?c.a.createElement("div",{className:E.a.form},c.a.createElement(M,null,i("name",{initialValue:l,rules:[{required:!0}]})(c.a.createElement(m.a,{addonAfter:c.a.createElement("div",{onClick:this.handleSubmit},Object(p.a)("save"))})))):c.a.createElement("div",{className:E.a.value},l," ",c.a.createElement("span",{className:E.a.op_icon,onClick:this.setName},c.a.createElement(O.a,{type:"iconpencil"})))),2===f&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:E.a.label},Object(p.a)("key_share_members")),c.a.createElement("div",{className:E.a.value,onClick:this.showMembers,style:{cursor:"pointer"}},Object(p.a)("check_status")," ",c.a.createElement("span",{className:E.a.op_icon},c.a.createElement(O.a,{type:"iconicon-keyshare-member-online"}))),c.a.createElement("div",{className:E.a.label},Object(p.a)("wallet_owner")),c.a.createElement("div",{className:E.a.value},c.a.createElement(y.a,{spinning:n},b))),c.a.createElement("div",{className:E.a.label},Object(p.a)("wallet_paymail")),g&&g.length>0&&c.a.createElement(y.a,{spinning:o},g&&g.map((function(e){return c.a.createElement("div",{className:E.a.value,key:e.id},e.name,"@",q)}))),c.a.createElement("div",{onClick:function(){return e.editPaymail(s)},className:E.a.edit_paymail},Object(p.a)("edit_paymail")),c.a.createElement("div",{className:E.a.label},Object(p.a)("time_created")),c.a.createElement("div",{className:E.a.value1},Object(v.a)(u)),c.a.createElement("div",{className:E.a.label},Object(p.a)("current_balance")),c.a.createElement("div",{className:E.a.value1},Object(v.b)(h)," ",N," | ",c.a.createElement(j.a,{value:h})),c.a.createElement("span",{className:E.a.goback,onClick:this.gotoBack}," ",Object(p.a)("cancel")),x&&c.a.createElement(P.a,{visible:x,cancel:this.hideMembers})))}}])&&I(n.prototype,r),a&&I(n,a),t}(i.Component))||o)||o)||o);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function J(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function F(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Y(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function H(e,t){return(H=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var K=Object(s.connect)((function(e){var t=e.wallet;e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){$(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t)}))(L=function(e){function t(){return F(this,t),Y(this,U(t).apply(this,arguments))}var n,r,a,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&H(e,t)}(t,e),n=t,(r=[{key:"getWalletId",value:function(){return this.props.match.params.id}},{key:"ready",value:(o=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.dispatch,e.next=3,t({type:"wallet/queryParties",payload:{id:this.getWalletId()}});case 3:return e.next=5,t({type:"service/queryPaymailById",payload:{wid:this.getWalletId()}});case 5:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=o.apply(e,t);function i(e){J(a,n,r,i,c,"next",e)}function c(e){J(a,n,r,i,c,"throw",e)}i(void 0)}))},function(){return i.apply(this,arguments)})},{key:"render",value:function(){return c.a.createElement("div",{className:l.a.container},this.renderSidebar(),c.a.createElement("div",{className:l.a.detail},c.a.createElement(A,null)))}}])&&G(n.prototype,r),a&&G(n,a),t}(f.a))||L},939:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"b",(function(){return f}));n(1084);var r=n(938),a=n.n(r),o=n(78),i=n.n(o);window.location;function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),a()(e).format(t)):e}var s=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function u(e){return!!e&&s.test(e)}function l(){return Array.prototype.slice.call(arguments).join(" ")}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var n=e.substr(0,t[0]),r=e.substr(-t[1],t[1]);return n+"****"+r}}var f=function(e){return i()(e).div(1e8).toString()}}}]);