(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1001:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return f})),n.d(t,"b",(function(){return p}));n(1148);var r=n(1e3),a=n.n(r),o=n(64),s=n.n(o);window.location;function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),a()(e).format(t)):e}var i=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function u(e){return!!e&&i.test(e)}function l(){return Array.prototype.slice.call(arguments).join(" ")}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var n=e.substr(0,t[0]),r=e.substr(-t[1],t[1]);return n+"****"+r}}var p=function(e){return s()(e).div(1e8).toString()}},1142:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(0),a=n.n(r),o=n(111),s=n(958),c=n.n(s);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(i,e);var t,n,r,s=p(i);function i(){return u(this,i),s.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this.props.className||c.a.icon;return a.a.createElement("div",{className:e},a.a.createElement(o.a,{type:"iconbsv1"}))}}])&&l(t.prototype,n),r&&l(t,r),i}(r.Component)},1149:function(e,t,n){var r={"./af":1003,"./af.js":1003,"./ar":1004,"./ar-dz":1005,"./ar-dz.js":1005,"./ar-kw":1006,"./ar-kw.js":1006,"./ar-ly":1007,"./ar-ly.js":1007,"./ar-ma":1008,"./ar-ma.js":1008,"./ar-sa":1009,"./ar-sa.js":1009,"./ar-tn":1010,"./ar-tn.js":1010,"./ar.js":1004,"./az":1011,"./az.js":1011,"./be":1012,"./be.js":1012,"./bg":1013,"./bg.js":1013,"./bm":1014,"./bm.js":1014,"./bn":1015,"./bn.js":1015,"./bo":1016,"./bo.js":1016,"./br":1017,"./br.js":1017,"./bs":1018,"./bs.js":1018,"./ca":1019,"./ca.js":1019,"./cs":1020,"./cs.js":1020,"./cv":1021,"./cv.js":1021,"./cy":1022,"./cy.js":1022,"./da":1023,"./da.js":1023,"./de":1024,"./de-at":1025,"./de-at.js":1025,"./de-ch":1026,"./de-ch.js":1026,"./de.js":1024,"./dv":1027,"./dv.js":1027,"./el":1028,"./el.js":1028,"./en-au":1029,"./en-au.js":1029,"./en-ca":1030,"./en-ca.js":1030,"./en-gb":1031,"./en-gb.js":1031,"./en-ie":1032,"./en-ie.js":1032,"./en-il":1033,"./en-il.js":1033,"./en-in":1034,"./en-in.js":1034,"./en-nz":1035,"./en-nz.js":1035,"./en-sg":1036,"./en-sg.js":1036,"./eo":1037,"./eo.js":1037,"./es":1038,"./es-do":1039,"./es-do.js":1039,"./es-us":1040,"./es-us.js":1040,"./es.js":1038,"./et":1041,"./et.js":1041,"./eu":1042,"./eu.js":1042,"./fa":1043,"./fa.js":1043,"./fi":1044,"./fi.js":1044,"./fil":1045,"./fil.js":1045,"./fo":1046,"./fo.js":1046,"./fr":1047,"./fr-ca":1048,"./fr-ca.js":1048,"./fr-ch":1049,"./fr-ch.js":1049,"./fr.js":1047,"./fy":1050,"./fy.js":1050,"./ga":1051,"./ga.js":1051,"./gd":1052,"./gd.js":1052,"./gl":1053,"./gl.js":1053,"./gom-deva":1054,"./gom-deva.js":1054,"./gom-latn":1055,"./gom-latn.js":1055,"./gu":1056,"./gu.js":1056,"./he":1057,"./he.js":1057,"./hi":1058,"./hi.js":1058,"./hr":1059,"./hr.js":1059,"./hu":1060,"./hu.js":1060,"./hy-am":1061,"./hy-am.js":1061,"./id":1062,"./id.js":1062,"./is":1063,"./is.js":1063,"./it":1064,"./it-ch":1065,"./it-ch.js":1065,"./it.js":1064,"./ja":1066,"./ja.js":1066,"./jv":1067,"./jv.js":1067,"./ka":1068,"./ka.js":1068,"./kk":1069,"./kk.js":1069,"./km":1070,"./km.js":1070,"./kn":1071,"./kn.js":1071,"./ko":1072,"./ko.js":1072,"./ku":1073,"./ku.js":1073,"./ky":1074,"./ky.js":1074,"./lb":1075,"./lb.js":1075,"./lo":1076,"./lo.js":1076,"./lt":1077,"./lt.js":1077,"./lv":1078,"./lv.js":1078,"./me":1079,"./me.js":1079,"./mi":1080,"./mi.js":1080,"./mk":1081,"./mk.js":1081,"./ml":1082,"./ml.js":1082,"./mn":1083,"./mn.js":1083,"./mr":1084,"./mr.js":1084,"./ms":1085,"./ms-my":1086,"./ms-my.js":1086,"./ms.js":1085,"./mt":1087,"./mt.js":1087,"./my":1088,"./my.js":1088,"./nb":1089,"./nb.js":1089,"./ne":1090,"./ne.js":1090,"./nl":1091,"./nl-be":1092,"./nl-be.js":1092,"./nl.js":1091,"./nn":1093,"./nn.js":1093,"./oc-lnc":1094,"./oc-lnc.js":1094,"./pa-in":1095,"./pa-in.js":1095,"./pl":1096,"./pl.js":1096,"./pt":1097,"./pt-br":1098,"./pt-br.js":1098,"./pt.js":1097,"./ro":1099,"./ro.js":1099,"./ru":1100,"./ru.js":1100,"./sd":1101,"./sd.js":1101,"./se":1102,"./se.js":1102,"./si":1103,"./si.js":1103,"./sk":1104,"./sk.js":1104,"./sl":1105,"./sl.js":1105,"./sq":1106,"./sq.js":1106,"./sr":1107,"./sr-cyrl":1108,"./sr-cyrl.js":1108,"./sr.js":1107,"./ss":1109,"./ss.js":1109,"./sv":1110,"./sv.js":1110,"./sw":1111,"./sw.js":1111,"./ta":1112,"./ta.js":1112,"./te":1113,"./te.js":1113,"./tet":1114,"./tet.js":1114,"./tg":1115,"./tg.js":1115,"./th":1116,"./th.js":1116,"./tk":1117,"./tk.js":1117,"./tl-ph":1118,"./tl-ph.js":1118,"./tlh":1119,"./tlh.js":1119,"./tr":1120,"./tr.js":1120,"./tzl":1121,"./tzl.js":1121,"./tzm":1122,"./tzm-latn":1123,"./tzm-latn.js":1123,"./tzm.js":1122,"./ug-cn":1124,"./ug-cn.js":1124,"./uk":1125,"./uk.js":1125,"./ur":1126,"./ur.js":1126,"./uz":1127,"./uz-latn":1128,"./uz-latn.js":1128,"./uz.js":1127,"./vi":1129,"./vi.js":1129,"./x-pseudo":1130,"./x-pseudo.js":1130,"./yo":1131,"./yo.js":1131,"./zh-cn":1132,"./zh-cn.js":1132,"./zh-hk":1133,"./zh-hk.js":1133,"./zh-mo":1134,"./zh-mo.js":1134,"./zh-tw":1135,"./zh-tw.js":1135};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=1149},1150:function(e,t,n){"use strict";var r,a=n(0),o=n.n(a),s=n(165),c=n(291),i=n(64),u=n.n(i);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var a=d(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=Object(s.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(s,e);var t,n,r,a=m(s);function s(){return f(this,s),a.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=c.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,n=c.a[t],r=this.props,a=r.price,s=r.value,i=r.usd,l=r.exchangeRate;if(!a.bsv)return null;var f=null,p=n.currencyCode.toLowerCase();f=a.bsv[p]?a.bsv[p]:u()(a.bsv.usd).times(l[p]),i&&(f=u()(f).div(a.bsv.usd).multipliedBy(i));var y=u()(s).div(1e8).times(f).toFixed(2,1);return o.a.createElement("span",null,n.symbol,y," ",n.currencyCode)}}])&&p(t.prototype,n),r&&p(t,r),s}(a.Component))||r;t.a=v},466:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));n(455);var r,a=n(288),o=(n(462),n(296)),s=(n(457),n(22),n(0)),c=n.n(s),i=n(165),u=n(62),l=n(16),f=n(1001),p=n(1142),y=n(1150),m=n(289),j=n(111),d=n(18),b=n(974),h=n.n(b);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw o}}}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t,n,r,a,o,s){try{var c=e[o](s),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,a)}function k(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){O(o,r,a,s,c,"next",e)}function c(e){O(o,r,a,s,c,"throw",e)}s(void 0)}))}}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var a=x(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return S(this,n)}}function S(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=Object(i.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return z(z(z({},t),n),{},{loading:r["service/queryWallet"],creatingAddress:r["service/createSingleWalletAddress"]||!1})}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(v,e);var t,n,r,s,i,b=P(v);function v(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),D(N(t=b.call(this,e)),"switchDisplay",(function(){var e=t.state.hideAmount;t.props.dispatch({type:"user/switchDisplay"}),t.setState({hideAmount:!e})})),D(N(t),"renderWalletMenu",(function(){var e=parseInt(t.type)||0;return c.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},c.a.createElement("div",{className:h.a.wallet_type},l.k.map((function(t,n){return c.a.createElement("div",{key:t.key,className:n===e?Object(f.c)(h.a.selected,h.a.wallet_type_item):h.a.wallet_type_item},c.a.createElement(u.Link,{to:"/money/home/".concat(n)},t.text))}))))})),D(N(t),"renderInfo",(function(){var e=t.props,n=(e.totalAssets,e.balances),r=t.state.hideAmount,a=r?c.a.createElement(j.a,{type:"iconhide"}):c.a.createElement(j.a,{type:"iconshow"});return c.a.createElement("div",{className:h.a.info},c.a.createElement(p.a,{className:h.a.icon}),t.renderWalletMenu(),c.a.createElement("div",{className:h.a.total},r?l.i:Object(f.b)(n[t.type])," ",c.a.createElement("span",null,"BSV")),c.a.createElement("div",{className:h.a.total_assets},c.a.createElement("span",{className:h.a.balance},r?l.i:c.a.createElement(y.a,{value:n[t.type]})),c.a.createElement("span",{onClick:t.switchDisplay,className:h.a.show_balance},a)))})),D(N(t),"gotoMessageList",(function(e,n){t.props.history.push({pathname:"/message/list/".concat(e,"/").concat(n),state:{id:n}})})),D(N(t),"gotoTransfer",(function(e,n){t.props.history.push({pathname:"/message/transfer/".concat(e,"/").concat(n),state:{id:n}})})),D(N(t),"gotoReceive",(function(e,n){t.props.history.push({pathname:"/message/receive/".concat(e,"/").concat(n),state:{id:n}})})),D(N(t),"renderAssetsList",(function(){var e=t.state,n=(e.joining,e.hideAmount),r=t.props.wallets[t.type];return c.a.createElement("div",{className:h.a.list_container},c.a.createElement("div",{className:h.a.list_content},c.a.createElement("div",{className:h.a.item_head},c.a.createElement("div",{className:h.a.part1},Object(d.a)("wallet")),c.a.createElement("div",{className:h.a.part2},Object(d.a)("amount")),c.a.createElement("div",{className:h.a.part3},Object(d.a)("action"))),r&&r.map((function(e){var r=e.id,a=e.share,o=e.threshold,s=e.name,i=e.balance,u=(e.address,e.token),y=e.joinStatus,m=e.frozen,b=e.status,v=e.type,g=(e.waitJoin,Object(l.b)(u));return 0===y||0===parseInt(b)?null:c.a.createElement("div",{className:h.a.list_item,key:r},c.a.createElement("div",{className:h.a.part1,onClick:function(){return t.gotoMessageList(v,r)}},c.a.createElement(p.a,{className:h.a.coin_icon}),c.a.createElement("div",{className:h.a.coin_name},c.a.createElement("span",{className:h.a.name},s),2===v&&c.a.createElement("span",{className:h.a.wallet_no},o," | ",a))),c.a.createElement("div",{className:h.a.part2},c.a.createElement("span",{className:h.a.amount},n?l.i:Object(f.b)(i))," ",c.a.createElement("span",{className:h.a.unit},g)," ",m>0&&c.a.createElement("span",{className:h.a.focus},Object(d.a)("frozen"),": ",n?l.i:Object(f.b)(m),g)),c.a.createElement("div",{className:h.a.part3},c.a.createElement("div",{className:h.a.transfer,onClick:function(){return t.gotoTransfer(v,r)}},c.a.createElement(j.a,{type:"iconicon-send"})," ",Object(d.a)("transfer")),c.a.createElement("span",{className:h.a.receive,onClick:function(){return t.gotoReceive(v,r)}},c.a.createElement(j.a,{type:"iconreceive"})," ",Object(d.a)("collection"))))}))))})),t.state={joining:0,receiveModalVisible:!1,hideAmount:window.localStorage.getItem(l.a.HIDEAMOUNT)||0},t.type=t.props.match.params.type,t}return t=v,(n=[{key:"componentDidMount",value:function(){this.fetch()}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.type;t!==this.props.match.params.type&&(this.type=t,this.fetch(t))}},{key:"updateWallet",value:(i=k(regeneratorRuntime.mark((function e(){var t,n,r,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._updating){e.next=2;break}return e.abrupt("return");case 2:return this._updating=!0,t=this.props.match.params.type,e.next=6,this.props.dispatch({type:"service/updateWallet",payload:{type:t}});case 6:if(!(n=e.sent)||!n.length){e.next=31;break}r=g(n),e.prev=9,r.s();case 11:if((a=r.n()).done){e.next=23;break}if(o=a.value,2===parseInt(o.type)){e.next=15;break}return e.abrupt("continue",21);case 15:if(!o.address){e.next=17;break}return e.abrupt("continue",21);case 17:if(1===parseInt(o.status)){e.next=19;break}return e.abrupt("continue",21);case 19:return e.next=21,this.props.dispatch({type:"service/createMultiPartyAddress",payload:{wid:o.id}});case 21:e.next=11;break;case 23:e.next=28;break;case 25:e.prev=25,e.t0=e.catch(9),r.e(e.t0);case 28:return e.prev=28,r.f(),e.finish(28);case 31:this._updating=!1;case 32:case"end":return e.stop()}}),e,this,[[9,25,28,31]])}))),function(){return i.apply(this,arguments)})},{key:"fetch",value:function(e){var t=this.props,n=t.wallets,r=t.dispatch,a=e?parseInt(this.type):0;if(!(0===a&&n[1].length>0&&n[2].length>0)){var o=n[a];if(!(a>0&&o&&o.length>0))return r({type:"service/queryWallet",payload:{type:a}})}}},{key:"joinWallet",value:(s=k(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({joining:t}),e.next=3,this.props.dispatch({type:"service/joinWallet",payload:{wid:t}});case 3:n=e.sent,this.setState({joining:0}),n&&n.success&&this.updateWallet();case 6:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)})},{key:"renderAddressCreating",value:function(){return c.a.createElement(o.a,{title:Object(d.a)("collection"),visible:this.props.creatingAddress,footer:null,onCancel:this.hideReceiveDialog},c.a.createElement("div",{className:h.a.qrcodeWrap},c.a.createElement(m.a,{className:h.a.loading_container}),c.a.createElement("p",null,"Generating address")))}},{key:"render",value:function(){return c.a.createElement("div",{className:h.a.container},this.renderInfo(),c.a.createElement(a.a,{spinning:this.props.loading},this.renderAssetsList()),this.renderAddressCreating())}}])&&E(t.prototype,n),r&&E(t,r),v}(s.Component))||r}}]);