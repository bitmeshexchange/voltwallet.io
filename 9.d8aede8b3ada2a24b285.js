(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1081:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),a=n.n(r),s=n(107),o=n(902),c=n.n(o);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return u(this,t),j(this,f(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.props.className||c.a.icon;return a.a.createElement("div",{className:e},a.a.createElement(s.a,{type:"iconbsv1"}))}}])&&l(n.prototype,r),o&&l(n,o),t}(r.Component)},1086:function(e,t,n){var r={"./af":946,"./af.js":946,"./ar":947,"./ar-dz":948,"./ar-dz.js":948,"./ar-kw":949,"./ar-kw.js":949,"./ar-ly":950,"./ar-ly.js":950,"./ar-ma":951,"./ar-ma.js":951,"./ar-sa":952,"./ar-sa.js":952,"./ar-tn":953,"./ar-tn.js":953,"./ar.js":947,"./az":954,"./az.js":954,"./be":955,"./be.js":955,"./bg":956,"./bg.js":956,"./bm":957,"./bm.js":957,"./bn":958,"./bn.js":958,"./bo":959,"./bo.js":959,"./br":960,"./br.js":960,"./bs":961,"./bs.js":961,"./ca":962,"./ca.js":962,"./cs":963,"./cs.js":963,"./cv":964,"./cv.js":964,"./cy":965,"./cy.js":965,"./da":966,"./da.js":966,"./de":967,"./de-at":968,"./de-at.js":968,"./de-ch":969,"./de-ch.js":969,"./de.js":967,"./dv":970,"./dv.js":970,"./el":971,"./el.js":971,"./en-SG":972,"./en-SG.js":972,"./en-au":973,"./en-au.js":973,"./en-ca":974,"./en-ca.js":974,"./en-gb":975,"./en-gb.js":975,"./en-ie":976,"./en-ie.js":976,"./en-il":977,"./en-il.js":977,"./en-nz":978,"./en-nz.js":978,"./eo":979,"./eo.js":979,"./es":980,"./es-do":981,"./es-do.js":981,"./es-us":982,"./es-us.js":982,"./es.js":980,"./et":983,"./et.js":983,"./eu":984,"./eu.js":984,"./fa":985,"./fa.js":985,"./fi":986,"./fi.js":986,"./fo":987,"./fo.js":987,"./fr":988,"./fr-ca":989,"./fr-ca.js":989,"./fr-ch":990,"./fr-ch.js":990,"./fr.js":988,"./fy":991,"./fy.js":991,"./ga":992,"./ga.js":992,"./gd":993,"./gd.js":993,"./gl":994,"./gl.js":994,"./gom-latn":995,"./gom-latn.js":995,"./gu":996,"./gu.js":996,"./he":997,"./he.js":997,"./hi":998,"./hi.js":998,"./hr":999,"./hr.js":999,"./hu":1e3,"./hu.js":1e3,"./hy-am":1001,"./hy-am.js":1001,"./id":1002,"./id.js":1002,"./is":1003,"./is.js":1003,"./it":1004,"./it-ch":1005,"./it-ch.js":1005,"./it.js":1004,"./ja":1006,"./ja.js":1006,"./jv":1007,"./jv.js":1007,"./ka":1008,"./ka.js":1008,"./kk":1009,"./kk.js":1009,"./km":1010,"./km.js":1010,"./kn":1011,"./kn.js":1011,"./ko":1012,"./ko.js":1012,"./ku":1013,"./ku.js":1013,"./ky":1014,"./ky.js":1014,"./lb":1015,"./lb.js":1015,"./lo":1016,"./lo.js":1016,"./lt":1017,"./lt.js":1017,"./lv":1018,"./lv.js":1018,"./me":1019,"./me.js":1019,"./mi":1020,"./mi.js":1020,"./mk":1021,"./mk.js":1021,"./ml":1022,"./ml.js":1022,"./mn":1023,"./mn.js":1023,"./mr":1024,"./mr.js":1024,"./ms":1025,"./ms-my":1026,"./ms-my.js":1026,"./ms.js":1025,"./mt":1027,"./mt.js":1027,"./my":1028,"./my.js":1028,"./nb":1029,"./nb.js":1029,"./ne":1030,"./ne.js":1030,"./nl":1031,"./nl-be":1032,"./nl-be.js":1032,"./nl.js":1031,"./nn":1033,"./nn.js":1033,"./pa-in":1034,"./pa-in.js":1034,"./pl":1035,"./pl.js":1035,"./pt":1036,"./pt-br":1037,"./pt-br.js":1037,"./pt.js":1036,"./ro":1038,"./ro.js":1038,"./ru":1039,"./ru.js":1039,"./sd":1040,"./sd.js":1040,"./se":1041,"./se.js":1041,"./si":1042,"./si.js":1042,"./sk":1043,"./sk.js":1043,"./sl":1044,"./sl.js":1044,"./sq":1045,"./sq.js":1045,"./sr":1046,"./sr-cyrl":1047,"./sr-cyrl.js":1047,"./sr.js":1046,"./ss":1048,"./ss.js":1048,"./sv":1049,"./sv.js":1049,"./sw":1050,"./sw.js":1050,"./ta":1051,"./ta.js":1051,"./te":1052,"./te.js":1052,"./tet":1053,"./tet.js":1053,"./tg":1054,"./tg.js":1054,"./th":1055,"./th.js":1055,"./tl-ph":1056,"./tl-ph.js":1056,"./tlh":1057,"./tlh.js":1057,"./tr":1058,"./tr.js":1058,"./tzl":1059,"./tzl.js":1059,"./tzm":1060,"./tzm-latn":1061,"./tzm-latn.js":1061,"./tzm.js":1060,"./ug-cn":1062,"./ug-cn.js":1062,"./uk":1063,"./uk.js":1063,"./ur":1064,"./ur.js":1064,"./uz":1065,"./uz-latn":1066,"./uz-latn.js":1066,"./uz.js":1065,"./vi":1067,"./vi.js":1067,"./x-pseudo":1068,"./x-pseudo.js":1068,"./yo":1069,"./yo.js":1069,"./zh-cn":1070,"./zh-cn.js":1070,"./zh-hk":1071,"./zh-hk.js":1071,"./zh-tw":1072,"./zh-tw.js":1072};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id=1086},437:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));n(424);var r,a=n(275),s=(n(425),n(157)),o=n(0),c=n.n(o),i=n(156),u=n(61),l=n(1081),j=n(928),f=n.n(j),p=n(17),m=n(16),y=n(944),b=n(107);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n,r,a,s,o){try{var c=e[s](o),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,a)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=Object(i.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.user,{},e.wallet,{loading:e.loading.effects["service/queryArchive"]})}))(r=function(e){function t(e){var n,r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=O(t).call(this,e),n=!a||"object"!==d(a)&&"function"!=typeof a?g(r):a,E(g(n),"renderWalletMenu",(function(){var e=parseInt(n.props.match.params.type)||0;return c.a.createElement("div",{className:f.a.menu_list},c.a.createElement("div",{className:f.a.wallet_type},m.j.map((function(t,n){return c.a.createElement("div",{key:t.key,className:n===e?Object(y.c)(f.a.selected,f.a.wallet_type_item):f.a.wallet_type_item},c.a.createElement(u.Link,{to:"/archived/".concat(n)},t.text))}))))})),E(g(n),"gotoBack",(function(){n.props.history.push("/me")})),E(g(n),"renderInfo",(function(){return c.a.createElement("div",{className:f.a.info},c.a.createElement("div",{className:f.a.title},c.a.createElement("h1",null,Object(p.a)("manage_archived_accounts")),c.a.createElement("div",{className:f.a.cancel,onClick:n.gotoBack},Object(p.a)("cancel"))),n.renderWalletMenu())})),E(g(n),"unarchive",function(){var e,t=(e=regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.dispatch({type:"service/unArchive",payload:{wid:parseInt(r)}});case 2:if(a=e.sent){e.next=5;break}return e.abrupt("return",s.a.error(Object(p.a)("failure")));case 5:if(401!==a.code){e.next=7;break}return e.abrupt("return",s.a.error(Object(p.a)("failure")+Object(p.a)("archiveWithoutPermission")));case 7:return s.a.success(Object(p.a)("restore_success")),e.next=10,n.props.dispatch({type:"service/updateWallet",payload:{type:parseInt(t)}});case 10:n.props.history.push("/message/list/".concat(t,"/").concat(r));case 11:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function o(e){h(s,r,a,o,c,"next",e)}function c(e){h(s,r,a,o,c,"throw",e)}o(void 0)}))});return function(e,n){return t.apply(this,arguments)}}()),E(g(n),"renderAssetsList",(function(){var e=n.state.hideAmount,t=n.props,r=(t.currencyIndex,t.archiveWalletList);return c.a.createElement("div",{className:f.a.list_container},c.a.createElement("div",{className:f.a.list_content},c.a.createElement("div",{className:f.a.item_head},c.a.createElement("div",{className:f.a.part1},Object(p.a)("archived_accounts")),c.a.createElement("div",{className:f.a.part2},Object(p.a)("amount")),c.a.createElement("div",{className:f.a.part3},Object(p.a)("action"))),r.map((function(t){var r=t.id,a=t.share,s=t.threshold,o=t.name,i=t.balance,u=(t.address,t.token),j=t.joinStatus,d=t.frozen,h=t.status,v=t.type,O=(t.waitJoin,Object(m.b)(u));return 0===j||0===parseInt(h)?null:c.a.createElement("div",{className:f.a.list_item,key:r},c.a.createElement("div",{className:f.a.part1},c.a.createElement(l.a,{className:f.a.coin_icon}),c.a.createElement("div",{className:f.a.coin_name},c.a.createElement("span",{className:f.a.name},o),2===v&&c.a.createElement("span",{className:f.a.wallet_no},s," | ",a))),c.a.createElement("div",{className:f.a.part2},c.a.createElement("span",{className:f.a.amount},Object(y.b)(i))," ",c.a.createElement("span",{className:f.a.unit},O)," ",d>0&&c.a.createElement("span",{className:f.a.focus},Object(p.a)("frozen"),": ",e?m.h:Object(y.b)(d),O)),c.a.createElement("div",{className:f.a.part3},c.a.createElement("div",{className:f.a.unarchive,onClick:function(){return n.unarchive(v,r)}},c.a.createElement(b.a,{type:"iconicon-send"})," ",Object(p.a)("unarchive"))))}))))})),window.sessionStorage.getItem(m.a.SEED)||e.history.push("/user/login"),n.state={joining:0,hideAmount:window.localStorage.getItem(m.a.HIDEAMOUNT)||0},n}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.fetch()}},{key:"componentWillReceiveProps",value:function(e){var t=e.match.params.type;t!==this.props.match.params.type&&this.fetch(t)}},{key:"fetch",value:function(e){return e||(e=0),this.props.dispatch({type:"service/queryArchive",payload:{type:e}})}},{key:"render",value:function(){return c.a.createElement("div",{className:f.a.container},this.renderInfo(),c.a.createElement(a.a,{spinning:this.props.loading},this.renderAssetsList()))}}])&&v(n.prototype,r),o&&v(n,o),t}(o.Component))||r},944:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return j})),n.d(t,"b",(function(){return f}));n(1085);var r=n(943),a=n.n(r),s=n(63),o=n.n(s);window.location;function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),a()(e).format(t)):e}var i=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function u(e){return!!e&&i.test(e)}function l(){return Array.prototype.slice.call(arguments).join(" ")}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var n=e.substr(0,t[0]),r=e.substr(-t[1],t[1]);return n+"****"+r}}var f=function(e){return o()(e).div(1e8).toString()}}}]);