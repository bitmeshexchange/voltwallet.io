(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1078:function(e,t,r){"use strict";var n,a=r(0),o=r.n(a),s=r(156),i=r(277),c=r(69),u=r.n(c);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=Object(s.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.wallet)}))(n=function(e){function t(){return p(this,t),d(this,m(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=i.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,r=i.a[t],n=this.props,a=n.price,s=n.value,c=n.usd,l=n.exchangeRate;if(!a.bsv)return null;var p=null,f=r.currencyCode.toLowerCase();p=a.bsv[f]?a.bsv[f]:u()(a.bsv.usd).times(l[f]),c&&(p=u()(p).div(a.bsv.usd).multipliedBy(c));var d=u()(s).div(1e8).times(p).toFixed(2,1);return o.a.createElement("span",null,r.symbol,d," ",r.currencyCode)}}])&&f(r.prototype,n),a&&f(r,a),t}(a.Component))||n;t.a=v},1084:function(e,t,r){"use strict";r.d(t,"a",(function(){return U}));var n,a,o=r(0),s=r.n(o),i=r(156),c=r(898),u=r.n(c),l=(r(275),r(18)),p=(r(427),r(281)),f=r(901),d=r.n(f),m=(r(421),r(274)),y=r(902),b=r.n(y),h=r(61),v=r(942),j=r(19);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var P,N,I=(n=Object(i.connect)((function(e){var t=e.wallet;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.user,{},t,{loading:e.loading.effects["service/queryWallet"]})})),Object(h.withRouter)(a=n(a=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=k(this,E(t).call(this,e))).bgcs=[],r.state={joining:0,hideAmount:window.localStorage.getItem(j.a.HIDEAMOUNT)||0},r}var r,n,a,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,e),r=t,(n=[{key:"getWalletId",value:function(){var e=this.props,t=e.match,r=e.wallets,n=t.params.id,a=r[t.params.type];if(void 0===n)for(var o=0;o<a.length;o++){var s=a[o];s.join,s.status,n=s.id;break}return n}},{key:"joinWallet",value:(o=regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),this.setState({joining:t}),e.next=4,this.props.dispatch({type:"service/joinWallet",payload:{wid:t}});case 4:r=e.sent,this.setState({joining:0}),r&&r.success&&this.props.dispatch({type:"service/updateWallet"});case 7:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(r,n){var a=o.apply(e,t);function s(e){O(a,r,n,s,i,"next",e)}function i(e){O(a,r,n,s,i,"throw",e)}s(void 0)}))},function(e){return i.apply(this,arguments)})},{key:"componentWillReceiveProps",value:function(e){e.hideAmount!==this.state.hideAmount&&this.setState({hideAmount:e.hideAmount})}},{key:"render",value:function(){var e=this.props,t=e.loading,r=e.match,n=e.wallets,a=parseInt(r.params.type)||1,o=n[a];if(0===o.length)return null;var i=this.state.hideAmount,c=this.getWalletId();return s.a.createElement(m.a,{spinning:t},s.a.createElement("div",{className:b.a.list,id:"J_walletList"},s.a.createElement("div",{className:b.a.list_content},o.map((function(e){var t=e.name,r=e.id,n=e.type,o=e.joinStatus,u=e.founder,l=e.status,p=e.balance,f=e.share,d=e.waitJoin,m=e.token,y=e.threshold,g=parseInt(r)===parseInt(c)?Object(v.c)(b.a.item_contrainer,b.a.current_item):b.a.item_contrainer,O=(i?j.g:Object(v.b)(p),null);Object(j.b)(m),0===o?O=s.a.createElement("span",{className:b.a.join},"JOIN WALLET"):0===parseInt(l)&&(O=s.a.createElement("span",{className:b.a.wait_join},d," MEMBERS TO JOIN"));var w=s.a.createElement("div",{className:b.a.list_item},s.a.createElement("div",{className:b.a.wallet_name},s.a.createElement("span",{className:b.a.name,title:t},t," "),2===n&&s.a.createElement("span",{className:b.a.wallet_no},y," | ",f)),2===n&&s.a.createElement("div",{className:b.a.wallet_info},O),0===parseInt(l)&&s.a.createElement("div",{className:b.a.wallet_desc},u));return s.a.createElement(h.Link,{to:"/message/list/".concat(a,"/").concat(r),key:r,className:g,id:parseInt(r)===parseInt(c)?"J_currentWallet":null},w)})))))}}])&&w(r.prototype,n),a&&w(r,a),t}(o.Component))||a)||a),R=r(107);function C(e){return(C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function A(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function W(e,t){return!t||"object"!==C(t)&&"function"!=typeof t?D(e):t}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=(P=Object(i.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.wallet)})),Object(h.withRouter)(N=P(N=function(e){function t(){var e,r;T(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return M(D(r=W(this,(e=z(t)).call.apply(e,[this].concat(a)))),"renderWalletMenu",(function(){var e=parseInt(r.props.match.params.type);return e||(e=1),s.a.createElement("div",{className:d.a.wallet_type},j.i.map((function(t,n){return 2===n&&r.props.newMsg?s.a.createElement("div",{key:t.key,className:n===e?d.a.selected:""},s.a.createElement(h.Link,{to:"/message/list/".concat(n)},s.a.createElement(p.a,{dot:!0},t.text))):n>0?s.a.createElement("div",{key:t.key,className:n===e?d.a.selected:""},s.a.createElement(h.Link,{to:"/message/list/".concat(n)},t.text)):void 0})))})),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=parseInt(this.props.match.params.type);return e||(e=1),s.a.createElement("div",{className:d.a.list_container},this.renderWalletMenu(),s.a.createElement(I,{history:this.props.history}),s.a.createElement("div",{className:d.a.create_wallet},s.a.createElement(R.a,{type:"iconcreatewallet"}),s.a.createElement(h.Link,{to:"/message/createWallet/".concat(e)},Object(l.a)("create_wallet"))))}}])&&A(r.prototype,n),a&&A(r,a),t}(o.Component))||N)||N);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function G(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){V(o,n,a,s,i,"next",e)}function i(e){V(o,n,a,s,i,"throw",e)}s(void 0)}))}}function H(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function J(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Y(e,t){return(Y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var U=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=J(this,K(t).call(this,e))).state={ready:!1},r}var r,n,a,o,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Y(e,t)}(t,e),r=t,(n=[{key:"componentDidMount",value:(c=G(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props.match.params,r=t.type,n=t.id,this.saveCurrentWallet(r,n);case 2:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"getWalletId",value:function(e,t){if(void 0===t)for(var r=0;r<e.length;r++){t=e[r].id;break}return t}},{key:"saveCurrentWallet",value:(i=G(regeneratorRuntime.mark((function e(t,r,n){var a,o,s,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=this.props,o=a.dispatch,s=a.match,t||(t=parseInt(s.params.type)||1),(i=this.props.wallets[t])&&!(i.length<1)){e.next=8;break}return e.next=6,o({type:"service/queryWallet",payload:{type:t}});case 6:(i=e.sent).forEach(function(){var e=G(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==parseInt(t.type)||t.deposit&&t.deposit.address){e.next=3;break}return e.next=3,o({type:"service/createSingleWalletAddress",payload:{wid:t.id}});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 8:return c=-1,i&&i.length>0&&(c=this.getWalletId(i,r)),e.next=12,this.props.dispatch({type:"wallet/save",payload:{currentId:c}});case 12:this.setState({ready:!0}),document.getElementById("J_currentWallet").scrollIntoView(),this.ready&&this.ready(parseInt(c));case 16:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return i.apply(this,arguments)})},{key:"getWalletDetail",value:(o=G(regeneratorRuntime.mark((function e(t){var r,n,a,o,s,i,c,u,l,p,f,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.props,n=r.dispatch,a=r.allWallets,o=a[t],e.next=4,n({type:"wallet/queryParties",payload:{id:t}});case 4:return s=e.sent,e.next=7,n({type:"service/queryPaymailById",payload:{wid:t}});case 7:if(i=e.sent,!(s&&s.length>0)){e.next=28;break}for(c=!0,u=!1,l=void 0,e.prev=12,p=s[Symbol.iterator]();!(c=(f=p.next()).done);c=!0)(d=f.value).uid===o.uid&&(o.founder=d.user,o.founderId=d.uid);e.next=20;break;case 16:e.prev=16,e.t0=e.catch(12),u=!0,l=e.t0;case 20:e.prev=20,e.prev=21,c||null==p.return||p.return();case 23:if(e.prev=23,!u){e.next=26;break}throw l;case 26:return e.finish(23);case 27:return e.finish(20);case 28:o.paymail=i,n({type:"wallet/saveCurrent",payload:o});case 30:case"end":return e.stop()}}),e,this,[[12,16,20,28],[21,,23,27]])}))),function(e){return o.apply(this,arguments)})},{key:"loadTransactions",value:function(e){e&&-1!==e?this.props.dispatch({type:"service/queryTransaction",payload:{wid:e}}):this.props.dispatch({type:"wallet/saveTransaction",payload:{transactions:[]}})}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.type,r=e.match.params.id,n=this.props.match.params.type,a=this.props.match.params.id;t===n&&void 0===r&&void 0===a||t===n&&r===a||this.props.currentId!==r&&this.saveCurrentWallet(t,r,t===n)}},{key:"renderSidebar",value:function(){return s.a.createElement(L,{type:this.props.type})}},{key:"render",value:function(){return s.a.createElement("div",{className:u.a.container},this.renderSidebar(),s.a.createElement("div",{className:u.a.detail}))}}])&&H(r.prototype,n),a&&H(r,a),t}(o.Component)},1086:function(e,t,r){var n={"./af":944,"./af.js":944,"./ar":945,"./ar-dz":946,"./ar-dz.js":946,"./ar-kw":947,"./ar-kw.js":947,"./ar-ly":948,"./ar-ly.js":948,"./ar-ma":949,"./ar-ma.js":949,"./ar-sa":950,"./ar-sa.js":950,"./ar-tn":951,"./ar-tn.js":951,"./ar.js":945,"./az":952,"./az.js":952,"./be":953,"./be.js":953,"./bg":954,"./bg.js":954,"./bm":955,"./bm.js":955,"./bn":956,"./bn.js":956,"./bo":957,"./bo.js":957,"./br":958,"./br.js":958,"./bs":959,"./bs.js":959,"./ca":960,"./ca.js":960,"./cs":961,"./cs.js":961,"./cv":962,"./cv.js":962,"./cy":963,"./cy.js":963,"./da":964,"./da.js":964,"./de":965,"./de-at":966,"./de-at.js":966,"./de-ch":967,"./de-ch.js":967,"./de.js":965,"./dv":968,"./dv.js":968,"./el":969,"./el.js":969,"./en-SG":970,"./en-SG.js":970,"./en-au":971,"./en-au.js":971,"./en-ca":972,"./en-ca.js":972,"./en-gb":973,"./en-gb.js":973,"./en-ie":974,"./en-ie.js":974,"./en-il":975,"./en-il.js":975,"./en-nz":976,"./en-nz.js":976,"./eo":977,"./eo.js":977,"./es":978,"./es-do":979,"./es-do.js":979,"./es-us":980,"./es-us.js":980,"./es.js":978,"./et":981,"./et.js":981,"./eu":982,"./eu.js":982,"./fa":983,"./fa.js":983,"./fi":984,"./fi.js":984,"./fo":985,"./fo.js":985,"./fr":986,"./fr-ca":987,"./fr-ca.js":987,"./fr-ch":988,"./fr-ch.js":988,"./fr.js":986,"./fy":989,"./fy.js":989,"./ga":990,"./ga.js":990,"./gd":991,"./gd.js":991,"./gl":992,"./gl.js":992,"./gom-latn":993,"./gom-latn.js":993,"./gu":994,"./gu.js":994,"./he":995,"./he.js":995,"./hi":996,"./hi.js":996,"./hr":997,"./hr.js":997,"./hu":998,"./hu.js":998,"./hy-am":999,"./hy-am.js":999,"./id":1e3,"./id.js":1e3,"./is":1001,"./is.js":1001,"./it":1002,"./it-ch":1003,"./it-ch.js":1003,"./it.js":1002,"./ja":1004,"./ja.js":1004,"./jv":1005,"./jv.js":1005,"./ka":1006,"./ka.js":1006,"./kk":1007,"./kk.js":1007,"./km":1008,"./km.js":1008,"./kn":1009,"./kn.js":1009,"./ko":1010,"./ko.js":1010,"./ku":1011,"./ku.js":1011,"./ky":1012,"./ky.js":1012,"./lb":1013,"./lb.js":1013,"./lo":1014,"./lo.js":1014,"./lt":1015,"./lt.js":1015,"./lv":1016,"./lv.js":1016,"./me":1017,"./me.js":1017,"./mi":1018,"./mi.js":1018,"./mk":1019,"./mk.js":1019,"./ml":1020,"./ml.js":1020,"./mn":1021,"./mn.js":1021,"./mr":1022,"./mr.js":1022,"./ms":1023,"./ms-my":1024,"./ms-my.js":1024,"./ms.js":1023,"./mt":1025,"./mt.js":1025,"./my":1026,"./my.js":1026,"./nb":1027,"./nb.js":1027,"./ne":1028,"./ne.js":1028,"./nl":1029,"./nl-be":1030,"./nl-be.js":1030,"./nl.js":1029,"./nn":1031,"./nn.js":1031,"./pa-in":1032,"./pa-in.js":1032,"./pl":1033,"./pl.js":1033,"./pt":1034,"./pt-br":1035,"./pt-br.js":1035,"./pt.js":1034,"./ro":1036,"./ro.js":1036,"./ru":1037,"./ru.js":1037,"./sd":1038,"./sd.js":1038,"./se":1039,"./se.js":1039,"./si":1040,"./si.js":1040,"./sk":1041,"./sk.js":1041,"./sl":1042,"./sl.js":1042,"./sq":1043,"./sq.js":1043,"./sr":1044,"./sr-cyrl":1045,"./sr-cyrl.js":1045,"./sr.js":1044,"./ss":1046,"./ss.js":1046,"./sv":1047,"./sv.js":1047,"./sw":1048,"./sw.js":1048,"./ta":1049,"./ta.js":1049,"./te":1050,"./te.js":1050,"./tet":1051,"./tet.js":1051,"./tg":1052,"./tg.js":1052,"./th":1053,"./th.js":1053,"./tl-ph":1054,"./tl-ph.js":1054,"./tlh":1055,"./tlh.js":1055,"./tr":1056,"./tr.js":1056,"./tzl":1057,"./tzl.js":1057,"./tzm":1058,"./tzm-latn":1059,"./tzm-latn.js":1059,"./tzm.js":1058,"./ug-cn":1060,"./ug-cn.js":1060,"./uk":1061,"./uk.js":1061,"./ur":1062,"./ur.js":1062,"./uz":1063,"./uz-latn":1064,"./uz-latn.js":1064,"./uz.js":1063,"./vi":1065,"./vi.js":1065,"./x-pseudo":1066,"./x-pseudo.js":1066,"./yo":1067,"./yo.js":1067,"./zh-cn":1068,"./zh-cn.js":1068,"./zh-hk":1069,"./zh-hk.js":1069,"./zh-tw":1070,"./zh-tw.js":1070};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=1086},940:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return ie}));var n,a,o,s=r(0),i=r.n(s),c=r(156),u=r(898),l=r.n(u),p=r(18),f=r(1084),d=(r(421),r(274)),m=(r(1075),r(1076)),y=(r(420),r(128)),b=(r(422),r(157)),h=(r(1071),r(1072)),v=r(4),j=r(69),g=r.n(j),O=r(192),w=r.n(O),k=r(61),E=r(105),_=r(921),S=r.n(_),x=r(19),P=r(277),N=r(58),I=r.n(N),R=r(942),C=r(1078),T=r(107);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t,r,n,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void r(e)}i.done?t(c):Promise.resolve(c).then(n,a)}function z(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function s(e){W(o,n,a,s,i,"next",e)}function i(e){W(o,n,a,s,i,"throw",e)}s(void 0)}))}}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var V,G=v.Transaction.Sighash,H=v.crypto.Signature,J=v.crypto.ECDSA,K=v.crypto.BN,Y=v.Transaction.Signature,U=H.SIGHASH_ALL|H.SIGHASH_FORKID,$=w()().encode,Q=(I.a.parse(location.search.slice(1)),h.a.Item),X=(n=h.a.create(),a=Object(c.connect)((function(e){var t=e.user,r=e.wallet,n=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{},r,{signing:n["service/signSingWalletMessage"],broadcasting:n["service/broadcast"],loading:n["service/queryWalletById"]||n["service/createSingleWalletAddress"]||n["service/createMultiPartyAddress"],creating:n["service/createMultiPartyTransaction"]})})),Object(k.withRouter)(o=n(o=a(o=function(e){function t(e){var r,n,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,a=F(t).call(this,e),r=!a||"object"!==A(a)&&"function"!=typeof a?B(n):a,q(B(r),"validAddress",function(){var e=z(regeneratorRuntime.mark((function e(t,n,a){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.indexOf("@")>-1)){e.next=10;break}return e.next=3,r.props.dispatch({type:"service/paymentDestination",payload:{paymail:n.trim()}});case 3:if(!(o=e.sent)){e.next=9;break}return r.setState({toAddress:o}),e.abrupt("return",a());case 9:return e.abrupt("return",a(Object(p.a)("invalid_address")));case 10:return e.prev=10,v.Script.fromAddress(n),e.abrupt("return",a());case 15:return e.prev=15,e.t0=e.catch(10),e.abrupt("return",a(Object(p.a)("invalid_address")));case 18:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t,r,n){return e.apply(this,arguments)}}()),q(B(r),"handleSubmit",(function(e){e.preventDefault(),r.props.form.validateFields((function(e,t){if(!e){if(t.biz_data=t.toAddress,t.toAddress.indexOf("@")>-1){var n=t.toAddress;t.toAddress=r.state.toAddress,t.biz_data=n+" (".concat(r.state.toAddress,")")}r.createTransaction(t)}}))})),q(B(r),"createTransaction",function(){var e=z(regeneratorRuntime.mark((function e(t){var n,a,o,s,i,c,u,l,f,d,m,y,h,j,O,w,k,_,S,x,P,N,I,C,T,A,W,z,D,F;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=t.toAddress,a=t.amount,o=t.note,s=r.getWalletId(),i=new v.Transaction,c=r.props.currentWallet,u=c.utxo,l=c.type,f=g()(a).multipliedBy(1e8),d=f.toString(),m=!0,y=!1,h=void 0,e.prev=9,j=u[Symbol.iterator]();!(m=(O=j.next()).done);m=!0)w=O.value,f.isGreaterThan(0)&&(k=w.address,_=w.txid,S=w.value,x=w.vout,1===w.status&&(i.from({txId:_,outputIndex:x,script:v.Script.buildPublicKeyHashOut(k).toString(),satoshis:S}),f=f.minus(S)));e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),y=!0,h=e.t0;case 17:e.prev=17,e.prev=18,m||null==j.return||j.return();case 20:if(e.prev=20,!y){e.next=23;break}throw h;case 23:return e.finish(20);case 24:return e.finish(17);case 25:if(!f.isGreaterThan(0)){e.next=27;break}return e.abrupt("return",b.a.error(Object(p.a)("lack_of_balance")));case 27:if(P=g()(a).multipliedBy(1e8).toNumber(),N=r.props.currentWallet,(I=r.state.change_address)||(I=N.deposit.address||N.address),"0"!==f.toString()){e.next=36;break}i.change(n),d=g()(a).multipliedBy(1e8).minus(i.getFee()).toString(),e.next=41;break;case 36:if(i.to(n,P),i.change(I),!f.plus(i.getFee()).plus(456).isGreaterThan(0)){e.next=41;break}return t.amount=Object(R.b)(N.balance),e.abrupt("return",r.createTransaction(t));case 41:if(1!==parseInt(l)){e.next=53;break}return C=i.inputs.map((function(e,t){var r=e.output,n=r.script.toAddress().toString(),a=K.fromBuffer(G.sighash(i,U,t,r.script,r.satoshisBN),{endian:"little"});return{address:n,hash:("0".repeat(8)+a.toString("hex")).slice(-64)}})),e.next=45,r.props.dispatch({type:"service/signSingWalletMessage",payload:C});case 45:return e.sent.forEach((function(e,t){var r=new H({r:new K(e.r,16),s:J.toLowS(new K(e.s,16))}),n=i.inputs[t];i.applySignature(new Y({publicKey:e.publicKey,prevTxId:n.prevTxId,outputIndex:n.outputIndex,inputIndex:t,sigtype:U,signature:r}))})),e.next=49,r.props.dispatch({type:"service/broadcast",payload:{tx:i,note:o,value:d,wid:s,biz_data:t.biz_data}});case 49:return T=e.sent,A=g()(i.getFee()).div(1e8).toString(),T.success&&T.data.id?r.setState({toAddress:t.biz_data,amount:g()(d).div(1e8).toString(),note:o,showResult:"single",fee:A}):b.a.error("Transaction failed. ".concat(T.error)),e.abrupt("return");case 53:if(2!==parseInt(l)){e.next=59;break}return W=g()(i.getFee()).div(1e8).toString(),e.next=57,r.props.dispatch({type:"service/createMultiPartyTransaction",payload:{tx:i,note:o,value:d,wid:s,biz_data:t.biz_data}});case 57:(z=e.sent).success&&z.data.id?r.setState({showResult:"multi",toAddress:t.biz_data,amount:g()(d).div(1e8).toString(),note:o,fee:W}):b.a.error("Transaction failed. ".concat(z.error));case 59:return D=r.props.userid,e.next=62,E.a.createTransaction({raw:$(i.toObject()).toString("hex"),wid:s,value:P,uid:D});case 62:if(!(F=e.sent).id){e.next=67;break}return e.next=66,E.a.approveTransaction({uid:D,id:F.id});case 66:r.setState({showResult:"multi",toAddress:t.biz_data,amount:a,note:o});case 67:case"end":return e.stop()}}),e,null,[[9,13,17,25],[18,,20,24]])})));return function(t){return e.apply(this,arguments)}}()),q(B(r),"changeBSV",(function(e){r.setFiatValue(e.target.value)})),q(B(r),"changeCurrency",(function(e){var t=r.props,n=t.form,a=t.currencyIndex,o=t.price,s=t.exchangeRate,i=P.a[a],c=e.target.value;if(o.bsv){var u=null,l=i.currencyCode.toLowerCase();u=o.bsv[l]?o.bsv[l]:g()(o.bsv.usd).times(s[l]),n.setFieldsValue({amount:c?g()(c).div(u).toFixed(8,1):0}),r.setState({amountCurrency:c?g()(c).div(u).toFixed(8,1):0,amountFiat:c||0})}})),q(B(r),"validate",(function(e,t,n){var a=r.props.price,o=g()(t).times(a.bsv.usd);g()(t).times(1e8).isLessThan(457)?n(Object(p.a)("amount_less_than")):o.isGreaterThan(1e3)?n(Object(p.a)("amount_more_than")):n()})),q(B(r),"validateTotal",(function(e,t,n){var a=r.props,o=a.price,s=a.form.getFieldValue("amount"),i=g()(s).times(o.bsv.usd);g()(s).times(1e8).isLessThan(457)?n(Object(p.a)("amount_less_than")):i.isGreaterThan(1e3)?n(Object(p.a)("amount_more_than")):n()})),q(B(r),"gotoBack",(function(){r.props.history.goBack()})),q(B(r),"switchCurrency",(function(e){r.setState({currencyType:e})})),r.state={showResult:!1,amountCurrency:0,amountFiat:0},r}var r,n,a,o,s,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(t,e),r=t,(n=[{key:"getWalletId",value:function(){return this.props.match.params.id}},{key:"createSingleAddress",value:(c=z(regeneratorRuntime.mark((function e(){var t,r,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,r=t.match,n=t.dispatch,a=r.params.id,e.next=4,n({type:"service/createSingleWalletAddress",payload:{wid:a,type:2}});case 4:return o=e.sent,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"createMultiAddress",value:(s=z(regeneratorRuntime.mark((function e(){var t,r,n,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,r=t.match,n=t.dispatch,a=r.params.id,e.next=4,n({type:"service/createMultiPartyAddress",payload:{wid:parseInt(a),type:2}});case 4:if((o=e.sent).success){e.next=7;break}return e.abrupt("return",b.a.error("server_error"));case 7:return e.abrupt("return",o.data.address);case 8:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"renderSingleResult",value:function(){var e=this.state,t=e.toAddress,r=e.amount,n=e.note,a=e.fee,o=Object(x.b)(this.props.currentWallet.token);return i.a.createElement("div",{className:S.a.result},i.a.createElement("div",{className:S.a.icon},i.a.createElement(T.a,{type:"iconsent"})),i.a.createElement("div",{className:S.a.title},Object(p.a)("payment_sent")),i.a.createElement("div",{className:S.a.desc},Object(p.a)("sent")," ",i.a.createElement("span",null,r," ",o)," ",Object(p.a)("to")," ",t),n&&i.a.createElement("div",{className:S.a.note},n),i.a.createElement("div",{className:S.a.btns},i.a.createElement(y.a,{type:"primary",className:S.a.btn,onClick:this.gotoBack},Object(p.a)("close"))),i.a.createElement("div",{className:S.a.fee},Object(p.a)("network_fee")," ",a," ",o))}},{key:"renderMultiResult",value:function(){var e=this.state,t=e.toAddress,r=e.amount,n=e.note,a=e.fee,o=Object(x.b)(this.props.currentWallet.token);return i.a.createElement("div",{className:S.a.result},i.a.createElement("div",{className:S.a.icon},i.a.createElement(T.a,{type:"iconsigned"})),i.a.createElement("div",{className:S.a.title},Object(p.a)("tx_signed_you")),i.a.createElement("div",{className:S.a.desc},Object(p.a)("sign_tx_multi",r)," ",t),n&&i.a.createElement("div",{className:S.a.note},n),i.a.createElement("div",{className:S.a.btns},i.a.createElement(y.a,{type:"primary",className:S.a.btn,onClick:this.gotoBack},Object(p.a)("close"))),i.a.createElement("div",{className:S.a.fee},Object(p.a)("network_fee")," ",a," ",o))}},{key:"componentDidMount",value:(o=z(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dispatch({type:"service/queryWalletById",payload:{wid:this.getWalletId()}});case 2:if(t=this.props.match.params.type,2!==parseInt(t)){e.next=9;break}return e.next=6,this.createMultiAddress();case 6:e.t0=e.sent,e.next=12;break;case 9:return e.next=11,this.createSingleAddress();case 11:e.t0=e.sent;case 12:r=e.t0,this.setState({currencyType:Object(x.b)(this.props.currentWallet.token),change_address:r});case 14:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"setFiatValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this.props,r=t.form,n=t.currencyIndex,a=t.price,o=t.exchangeRate,s=P.a[n];if(a.bsv){var i=null,c=s.currencyCode.toLowerCase();i=a.bsv[c]?a.bsv[c]:g()(a.bsv.usd).times(o[c]),r.setFieldsValue({total:e?g()(e).multipliedBy(i).toFixed(8,1):0}),this.setState({amountCurrency:e||0,amountFiat:e?g()(e).multipliedBy(i).toFixed(8,1):0})}}},{key:"setAmount",value:function(e){this.props.form.setFieldsValue({amount:e}),this.setFiatValue(e)}},{key:"renderForm",value:function(){var e=this;if("single"===this.state.showResult)return this.renderSingleResult();if("multi"===this.state.showResult)return this.renderMultiResult();var t=this.props,r=t.form,n=t.currencyIndex,a=t.currentWallet,o=(t.loading,t.creating),s=r.getFieldDecorator,c=P.a[n].currencyCode,u=a.balance,l=a.frozen,f=a.name,d=a.type,b=a.threshold,v=a.token,j=this.state,g=j.currencyType,O=j.amountCurrency,w=j.amountFiat,k=Object(x.b)(v);return i.a.createElement("div",{className:S.a.container},i.a.createElement("div",{className:S.a.header},i.a.createElement("div",{className:S.a.title},Object(p.a)("send_to")),i.a.createElement("span",{className:S.a.goback,onClick:this.gotoBack}," ",Object(p.a)("cancel"))),i.a.createElement(h.a,{onSubmit:this.handleSubmit,hideRequiredMark:!0,className:S.a.content},i.a.createElement(Q,null,s("toAddress",{rules:[{required:!0},{validator:this.validAddress}]})(i.a.createElement(m.a,{allowClear:!0}))),i.a.createElement("div",{className:S.a.header},i.a.createElement("div",{className:S.a.title},Object(p.a)("from")," ",f)),i.a.createElement("div",{className:S.a.total},i.a.createElement("a",{href:"javascript:;",onClick:function(){e.setAmount(Object(R.b)(u))}},i.a.createElement("span",{className:S.a.balance},Object(p.a)("balance"))," ",Object(R.b)(u)," ",k," | ",i.a.createElement(C.a,{value:u})),l>0&&i.a.createElement(i.a.Fragment,null," | ",Object(p.a)("frozen")," ",Object(R.b)(l)," ",k)),i.a.createElement("div",{className:S.a.amount_container},i.a.createElement(Q,{style:{display:g===k?"block":"none",flex:1}},s("amount",{rules:[{validator:this.validate}]})(i.a.createElement(m.a,{onChange:this.changeBSV,style:{width:"100%"},allowClear:!0}))),i.a.createElement(Q,{style:{display:g===k?"none":"block",flex:1}},s("total",{rules:[{validator:this.validateTotal}]})(i.a.createElement(m.a,{onChange:this.changeCurrency,style:{width:"100%"},allowClear:!0}))),i.a.createElement("div",{className:S.a.currency_content},[k,c].map((function(t){return i.a.createElement("div",{key:t,className:t===g?Object(R.c)(S.a.current_currency,S.a.currency_item):S.a.currency_item,onClick:function(){return e.switchCurrency(t)}},t)})))),i.a.createElement("div",{className:S.a.total_container},Object(p.a)("equivalent_to")," ",g===k?"".concat(w," ").concat(c):"".concat(O," ").concat(k)),i.a.createElement("div",{className:S.a.label},Object(p.a)("add_a_msg")),i.a.createElement(Q,null,s("note")(i.a.createElement(m.a,null))),2===d&&i.a.createElement("div",{className:S.a.tips},i.a.createElement("span",{style:{fontWeight:"bold"}},Object(p.a)("notice"),":")," ",Object(p.a)("transfer_tips",b)),i.a.createElement("div",null,i.a.createElement(y.a,{type:"primary",loading:o,className:"btn",htmlType:"submit"},Object(p.a)("send")," ",g===k?"".concat(O," ").concat(k):"".concat(w," ").concat(c)))))}},{key:"render",value:function(){var e=this.props,t=e.signing,r=e.broadcasting,n=e.loading;return t?i.a.createElement(d.a,{tip:"Signing..."},this.renderForm()):r?i.a.createElement(d.a,{tip:"Broadcasting..."},this.renderForm()):n?i.a.createElement(d.a,null,this.renderForm()):this.renderForm()}}])&&D(r.prototype,n),a&&D(r,a),t}(s.Component))||o)||o)||o);function Z(e){return(Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ee(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function te(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function re(e,t){return!t||"object"!==Z(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ne(e){return(ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e,t){return(ae=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ie=Object(c.connect)((function(e){var t=e.wallet;e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){se(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t)}))(V=function(e){function t(){return ee(this,t),re(this,ne(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ae(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){return i.a.createElement("div",{className:l.a.container},this.renderSidebar(),i.a.createElement("div",{className:l.a.detail},i.a.createElement(X,null)))}}])&&te(r.prototype,n),a&&te(r,a),t}(f.a))||V},942:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"e",(function(){return u})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return p})),r.d(t,"b",(function(){return f}));r(1085);var n=r(941),a=r.n(n),o=r(69),s=r.n(o);window.location;function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),a()(e).format(t)):e}var c=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function u(e){return!!e&&c.test(e)}function l(){return Array.prototype.slice.call(arguments).join(" ")}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var r=e.substr(0,t[0]),n=e.substr(-t[1],t[1]);return r+"****"+n}}var f=function(e){return s()(e).div(1e8).toString()}}}]);