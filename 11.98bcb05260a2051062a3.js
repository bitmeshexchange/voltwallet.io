(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1043:function(e,t,n){"use strict";(function(e){n.d(t,"c",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"j",(function(){return m})),n.d(t,"i",(function(){return d})),n.d(t,"g",(function(){return h})),n.d(t,"h",(function(){return b})),n.d(t,"b",(function(){return g})),n.d(t,"d",(function(){return j})),n.d(t,"f",(function(){return w})),n.d(t,"a",(function(){return E}));n(1223);var r=n(1039),o=n.n(r),a=n(56),c=n.n(a),i=n(297),s=n(47),u=n.n(s).a.parse(window.location.search),l=window.location;function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),o()(e).format(t)):e}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";if(!e)return"";var n=e;"number"==typeof e?n=new Date(e):"string"==typeof e&&(n=new Date(+e));var r={"y+":n.getFullYear(),"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),"S+":n.getMilliseconds()};for(var o in r)if(new RegExp("("+o+")").test(t))if("y+"===o)t=t.replace(RegExp.$1,(""+r[o]).substr(4-RegExp.$1.length));else if("S+"===o){var a=RegExp.$1.length;a=1===a?3:a,t=t.replace(RegExp.$1,("00"+r[o]).substr((""+r[o]).length-1,a))}else t=t.replace(RegExp.$1,1===RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length));return t}var y=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function m(e){return!!e&&y.test(e)}function d(e){if(!e)return e;if(!parseFloat(e))return 0;for(var t="",n=0,r=(e=(e||0).toString()).split("."),o=r[0],a=o.length-1;a>=0;a--)n++,t=o.charAt(a)+t,n%3||0==a||(t=","+t);return 1===r.length?t:t+"."+r[1]}function h(){return Array.prototype.slice.call(arguments).join(" ")}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var n=e.substr(0,t[0]),r=e.substr(-t[1],t[1]);return n+"****"+r}}var v,g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(!e)return 0;var n=e.toString().split(".");return e.toString().indexOf("e")>-1||n[1]&&n[1].length>t?c()(e).toFixed(t):e},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return c()(e).div(Math.pow(10,t)).toString()},w=function(){var e=i.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,n=i.a[t];return n||(window.localStorage.removeItem("VoltLocalCurrencyIndex"),n=i.a[e]),n};function O(e,t,n,r,o){!function(e,t,n,r,o,a){if(e>n||e<t){var c,i="bigint"==typeof t?"n":"";throw c=a>3?0===t||t===BigInt(0)?">= 0".concat(i," and < 2").concat(i," ** ").concat(8*(a+1)).concat(i):">= -(2".concat(i," ** ").concat(8*(a+1)-1).concat(i,") and < 2 ** ")+"".concat(8*(a+1)-1).concat(i):">= ".concat(t).concat(i," and <= ").concat(n).concat(i),new errors.ERR_OUT_OF_RANGE("value",c,e)}!function(e,t,n){k(t,"offset"),(void 0===e[t]||void 0===e[t+n])&&function(e,t,n){if(Math.floor(e)!==e)throw k(e,n),new errors.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new errors.ERR_BUFFER_OUT_OF_BOUNDS;throw new errors.ERR_OUT_OF_RANGE(n||"offset",">= ".concat(n?1:0," and <= ").concat(t),e)}(t,e.length-(n+1))}(r,o,a)}(t,r,o,e,n,7);var a=Number(t&BigInt(4294967295));e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a;var c=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=c,c>>=8,e[n++]=c,c>>=8,e[n++]=c,c>>=8,e[n++]=c,n}function k(e,t){if("number"!=typeof e)throw new errors.ERR_INVALID_ARG_TYPE(t,"number",e)}e.prototype.writeBigUInt64LE=(v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return O(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"undefined"==typeof BigInt?BufferBigIntNotDefined:v);var E=function(e){return(u.wss&&u.wss.indexOf("voltpre.bitmesh.com")>-1||l.pathname.indexOf("test.html")>-1)&&(e=e.replace("volt.id","voltpre.bitmesh.com")),e}}).call(this,n(21).Buffer)},1198:function(e,t,n){"use strict";var r,o=n(0),a=n.n(o),c=n(167),i=(n(297),n(56)),s=n.n(i),u=n(11),l=n(1043);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=Object(l.f)(),w=Object(c.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var t,n,r,o=d(c);function c(){return p(this,c),o.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.price,n=e.value,r=e.usd,o=e.exchangeRate,c=e.token,i=e.tokenAmount,l=u.v[c||1].name.toLowerCase();if(!t[l])return null;var f=null,p=j.currencyCode.toLowerCase();f=t[l][p]?t[l][p]:s()(t[l].usd).times(o[p]),r&&(f=s()(f).div(t[l].usd).multipliedBy(r));var y=0;return y=3===c?(y=(y=s()(n).times(f)).plus(i||0)).toFixed(2,1):s()(n).div(1e8).times(f).toFixed(2,1),a.a.createElement("span",null,j.symbol,y," ",j.currencyCode)}}])&&y(t.prototype,n),r&&y(t,r),c}(o.Component))||r;t.a=w},1203:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(0),o=n.n(r),a=n(73),c=n(968),i=n.n(c),s=n(11);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,c=y(u);function u(){return l(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){var e=this.props.className||i.a.icon,t=this.props.token||1;return o.a.createElement("div",{className:e},o.a.createElement(a.a,{type:Object(s.o)(t).icon}))}}])&&f(t.prototype,n),r&&f(t,r),u}(r.Component)},1224:function(e,t,n){var r={"./af":1059,"./af.js":1059,"./ar":1060,"./ar-dz":1061,"./ar-dz.js":1061,"./ar-kw":1062,"./ar-kw.js":1062,"./ar-ly":1063,"./ar-ly.js":1063,"./ar-ma":1064,"./ar-ma.js":1064,"./ar-sa":1065,"./ar-sa.js":1065,"./ar-tn":1066,"./ar-tn.js":1066,"./ar.js":1060,"./az":1067,"./az.js":1067,"./be":1068,"./be.js":1068,"./bg":1069,"./bg.js":1069,"./bm":1070,"./bm.js":1070,"./bn":1071,"./bn-bd":1072,"./bn-bd.js":1072,"./bn.js":1071,"./bo":1073,"./bo.js":1073,"./br":1074,"./br.js":1074,"./bs":1075,"./bs.js":1075,"./ca":1076,"./ca.js":1076,"./cs":1077,"./cs.js":1077,"./cv":1078,"./cv.js":1078,"./cy":1079,"./cy.js":1079,"./da":1080,"./da.js":1080,"./de":1081,"./de-at":1082,"./de-at.js":1082,"./de-ch":1083,"./de-ch.js":1083,"./de.js":1081,"./dv":1084,"./dv.js":1084,"./el":1085,"./el.js":1085,"./en-au":1086,"./en-au.js":1086,"./en-ca":1087,"./en-ca.js":1087,"./en-gb":1088,"./en-gb.js":1088,"./en-ie":1089,"./en-ie.js":1089,"./en-il":1090,"./en-il.js":1090,"./en-in":1091,"./en-in.js":1091,"./en-nz":1092,"./en-nz.js":1092,"./en-sg":1093,"./en-sg.js":1093,"./eo":1094,"./eo.js":1094,"./es":1095,"./es-do":1096,"./es-do.js":1096,"./es-mx":1097,"./es-mx.js":1097,"./es-us":1098,"./es-us.js":1098,"./es.js":1095,"./et":1099,"./et.js":1099,"./eu":1100,"./eu.js":1100,"./fa":1101,"./fa.js":1101,"./fi":1102,"./fi.js":1102,"./fil":1103,"./fil.js":1103,"./fo":1104,"./fo.js":1104,"./fr":1105,"./fr-ca":1106,"./fr-ca.js":1106,"./fr-ch":1107,"./fr-ch.js":1107,"./fr.js":1105,"./fy":1108,"./fy.js":1108,"./ga":1109,"./ga.js":1109,"./gd":1110,"./gd.js":1110,"./gl":1111,"./gl.js":1111,"./gom-deva":1112,"./gom-deva.js":1112,"./gom-latn":1113,"./gom-latn.js":1113,"./gu":1114,"./gu.js":1114,"./he":1115,"./he.js":1115,"./hi":1116,"./hi.js":1116,"./hr":1117,"./hr.js":1117,"./hu":1118,"./hu.js":1118,"./hy-am":1119,"./hy-am.js":1119,"./id":1120,"./id.js":1120,"./is":1121,"./is.js":1121,"./it":1122,"./it-ch":1123,"./it-ch.js":1123,"./it.js":1122,"./ja":1124,"./ja.js":1124,"./jv":1125,"./jv.js":1125,"./ka":1126,"./ka.js":1126,"./kk":1127,"./kk.js":1127,"./km":1128,"./km.js":1128,"./kn":1129,"./kn.js":1129,"./ko":1130,"./ko.js":1130,"./ku":1131,"./ku.js":1131,"./ky":1132,"./ky.js":1132,"./lb":1133,"./lb.js":1133,"./lo":1134,"./lo.js":1134,"./lt":1135,"./lt.js":1135,"./lv":1136,"./lv.js":1136,"./me":1137,"./me.js":1137,"./mi":1138,"./mi.js":1138,"./mk":1139,"./mk.js":1139,"./ml":1140,"./ml.js":1140,"./mn":1141,"./mn.js":1141,"./mr":1142,"./mr.js":1142,"./ms":1143,"./ms-my":1144,"./ms-my.js":1144,"./ms.js":1143,"./mt":1145,"./mt.js":1145,"./my":1146,"./my.js":1146,"./nb":1147,"./nb.js":1147,"./ne":1148,"./ne.js":1148,"./nl":1149,"./nl-be":1150,"./nl-be.js":1150,"./nl.js":1149,"./nn":1151,"./nn.js":1151,"./oc-lnc":1152,"./oc-lnc.js":1152,"./pa-in":1153,"./pa-in.js":1153,"./pl":1154,"./pl.js":1154,"./pt":1155,"./pt-br":1156,"./pt-br.js":1156,"./pt.js":1155,"./ro":1157,"./ro.js":1157,"./ru":1158,"./ru.js":1158,"./sd":1159,"./sd.js":1159,"./se":1160,"./se.js":1160,"./si":1161,"./si.js":1161,"./sk":1162,"./sk.js":1162,"./sl":1163,"./sl.js":1163,"./sq":1164,"./sq.js":1164,"./sr":1165,"./sr-cyrl":1166,"./sr-cyrl.js":1166,"./sr.js":1165,"./ss":1167,"./ss.js":1167,"./sv":1168,"./sv.js":1168,"./sw":1169,"./sw.js":1169,"./ta":1170,"./ta.js":1170,"./te":1171,"./te.js":1171,"./tet":1172,"./tet.js":1172,"./tg":1173,"./tg.js":1173,"./th":1174,"./th.js":1174,"./tk":1175,"./tk.js":1175,"./tl-ph":1176,"./tl-ph.js":1176,"./tlh":1177,"./tlh.js":1177,"./tr":1178,"./tr.js":1178,"./tzl":1179,"./tzl.js":1179,"./tzm":1180,"./tzm-latn":1181,"./tzm-latn.js":1181,"./tzm.js":1180,"./ug-cn":1182,"./ug-cn.js":1182,"./uk":1183,"./uk.js":1183,"./ur":1184,"./ur.js":1184,"./uz":1185,"./uz-latn":1186,"./uz-latn.js":1186,"./uz.js":1185,"./vi":1187,"./vi.js":1187,"./x-pseudo":1188,"./x-pseudo.js":1188,"./yo":1189,"./yo.js":1189,"./zh-cn":1190,"./zh-cn.js":1190,"./zh-hk":1191,"./zh-hk.js":1191,"./zh-mo":1192,"./zh-mo.js":1192,"./zh-tw":1193,"./zh-tw.js":1193};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=1224},1251:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),o=n.n(r),a=n(967),c=n.n(a);n(16);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw a}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}function f(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){l(a,r,o,c,i,"next",e)}function i(e){l(a,r,o,c,i,"throw",e)}c(void 0)}))}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(l,e);var t,n,r,a,i,u=m(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=u.call(this,e)).state={ready:!1},t}return t=l,(n=[{key:"componentDidMount",value:function(){this.currentWallet()}},{key:"getWalletId",value:function(e,t){if(void 0===t)for(var n=0;n<e.length;n++){t=e[n].id;break}return t}},{key:"currentWallet",value:(i=f(regeneratorRuntime.mark((function e(){var t,n,r,o,a,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.dispatch,r=t.match,o=this.props.currentWallet,a=r.params.id,e.next=5,n({type:"service/queryWalletById",payload:{wid:parseInt(a)}});case 5:if(1!==(o=e.sent).type){e.next=12;break}if(o.address||o.deposit){e.next=12;break}return e.next=10,n({type:"service/createSingleWalletAddress",payload:{wid:a}});case 10:(c=e.sent)&&n({type:"wallet/saveCurrentAddress",payload:{address:c}});case 12:if(o.change||3===o.token){e.next=17;break}return e.next=15,n({type:2===o.type?"service/createMultiPartyAddress":"service/createSingleWalletAddress",payload:{wid:a,type:2}});case 15:(i=e.sent)&&n({type:"wallet/saveCurrentChangeAddress",payload:{address:i}});case 17:this.ready&&this.ready(parseInt(a));case 18:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"getWalletDetail",value:(a=f(regeneratorRuntime.mark((function e(t){var n,r,o,a,c,i,u,l,f,p,y,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,r=n.dispatch,o=n.allWallets,a=n.currentWallet,c=n.ercTokenTimestamp,i=n.ercToken,n.bsvTokenTimestamp,n.bsvToken,u=o[t],a&&a.id==t&&(u=a),u){e.next=5;break}return e.abrupt("return");case 5:if(3===a.token&&i.length<1&&r({type:"wallet/queryErcToken",payload:{timestamp:c}}),u.parties&&!(u.parties.length<1)){e.next=11;break}return e.next=9,r({type:"wallet/queryParties",payload:{id:t}});case 9:l=e.sent,u.parties=l;case 11:if(u.paymail&&!(u.paymail.length<1)){e.next=16;break}return e.next=14,r({type:"service/queryPaymailById",payload:{wid:t}});case 14:f=e.sent,u.paymail=f;case 16:if(u.parties&&u.parties.length>0){p=s(u.parties);try{for(p.s();!(y=p.n()).done;)(m=y.value).uid===u.uid&&(u.founder=m.user,u.founderId=m.uid)}catch(e){p.e(e)}finally{p.f()}}r({type:"wallet/saveCurrent",payload:u});case 18:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"render",value:function(){return o.a.createElement("div",{className:c.a.container},o.a.createElement("div",{className:c.a.detail}))}}])&&p(t.prototype,n),r&&p(t,r),l}(r.Component)},1389:function(e,t,n){"use strict";var r,o=n(0),a=n.n(o),c=n(167),i=(n(297),n(56)),s=n.n(i),u=n(11),l=n(1043);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=Object(l.f)(),w=Object(c.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var t,n,r,o=d(c);function c(){return p(this,c),o.apply(this,arguments)}return t=c,(n=[{key:"change",value:function(e,t){var n=this.props.price,r=(u.v[e]||u.v[1]).name.toLowerCase(),o=null,a=j.currencyCode.toLowerCase();return o=n[r][a]?n[r][a]:s()(n[r].usd).times(exchangeRate[a]),3===e?s()(t).times(o).toFixed(2,1):s()(t).div(1e8).times(o).toFixed(2,1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.wallets,r=t.type;if(!t.price.bsv)return null;var o=s()(0);return n[r]&&n[r].forEach((function(t){0!==parseInt(r)&&parseInt(r)!==t.type||(o=o.plus(e.change(t.token,t.total)),3===t.token&&(o=o.plus(t.usd)))})),o=o.toFixed(2,1),a.a.createElement("span",null,j.symbol,o.toString()," ",j.currencyCode)}}])&&y(t.prototype,n),r&&y(t,r),c}(o.Component))||r;t.a=w},491:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));n(1247);var r,o,a=n(1250),c=(n(469),n(298)),i=(n(474),n(303)),s=n(0),u=n.n(s),l=n(167),f=n(66),p=n(11),y=n(1043),m=n(1203),d=n(1198),h=(n(1389),n(300)),b=n(73),v=n(1251),g=(n(1204),n(1207)),j=(n(468),n(168)),w=n(16),O=n(982),k=n.n(O);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){_(a,r,o,c,i,"next",e)}function i(e){_(a,r,o,c,i,"throw",e)}c(void 0)}))}}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=D(e);if(t){var o=D(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return C(this,n)}}function C(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W,L=(r=Object(l.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return I(I(I({},t),n),{},{loading:r["service/createSingleWallet"]})})),Object(f.withRouter)(o=r(o=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(c,e);var t,n,r,o,a=x(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),A(N(t=a.call(this,e)),"removeToken",function(){var e=S(regeneratorRuntime.mark((function e(n,r){var o,a,c,i,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.props,a=o.match,c=o.dispatch,i=o.createCallback,e.next=3,c({type:"service/removeToken",payload:{token:n.toLowerCase(),wid:parseInt(a.params.id)}});case 3:e.sent?((s=t.state.showList)[r].status=0,t.setState({showList:s}),i(!0)):j.a.error(Object(w.a)("remove_token_error"));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),A(N(t),"addToken",function(){var e=S(regeneratorRuntime.mark((function e(n,r){var o,a,c,i,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.props,a=o.match,c=o.dispatch,i=o.createCallback,e.next=3,c({type:"service/addToken",payload:{token:n.toLowerCase(),wid:parseInt(a.params.id)}});case 3:e.sent?((s=t.state.showList)[r].status=1,t.setState({showList:s}),i(!0)):j.a.error(Object(w.a)("add_token_error"));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),A(N(t),"handleChange",(function(e){var n=e.target.value;if(!n)return t.setState({showList:t.state.userToken});var r=t.state.tokens,o=t.searchByKeywords(n,r);t.setState({showList:o})})),t.state={posting:!1,loading:!1,showList:[],tokens:[],userToken:[]},t}return t=c,(n=[{key:"componentDidMount",value:(o=S(regeneratorRuntime.mark((function e(){var t,n,r,o,a,c,i,s,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.ercToken,r=t.ercTokenTimestamp,o=this.props,a=o.currentWallet,c=o.dispatch,i=a.balance.balance,!(n.length<1)){e.next=11;break}return this.setState({loading:!0}),e.next=7,c({type:"wallet/queryErcToken",payload:{timestamp:r}});case 7:s=e.sent,n=s.tokens,r=new Date(s.timestamp).getTime(),this.setState({loading:!1});case 11:u=JSON.parse(JSON.stringify(n)),i.forEach((function(e){var t=u.findIndex((function(t){return t.symbol.toLowerCase()===e.token}));t>-1&&(u[t].status=1),Object.assign(e,u[t])})),this.setState({showList:i,tokens:u,userToken:i});case 14:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"throttle",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=(new Date).getTime();return function(){var r=(new Date).getTime();r-n>t&&(e(),n=r)}}},{key:"escapeRegExpWildcards",value:function(e){var t=/([\(\[\{\\\^\$\}\]\)\?\*\+\.])/gim;return e&&t.test(e)?e.replace(t,"\\$1"):e}},{key:"searchByKeywords",value:function(e,t){var n=new RegExp(".*?"+this.escapeRegExpWildcards(e)+".*?","img");return t.filter((function(t){return n.test(t.name)||n.test(t.symbol)||e==t.address}))}},{key:"render",value:function(){var e=this,t=this.state.showList;return u.a.createElement("div",{className:k.a.container},u.a.createElement("div",{className:k.a.header},u.a.createElement("div",{className:k.a.title},Object(w.a)("add_token_accounts"))),u.a.createElement("div",{className:k.a.search},u.a.createElement(g.a,{className:k.a.search_input,placeholder:Object(w.a)("search_token_holder"),onChange:this.handleChange})),u.a.createElement("div",{className:k.a.token_list_wrap},u.a.createElement("div",{className:k.a.user_token_list},u.a.createElement("div",{className:k.a.token},u.a.createElement(m.a,{token:3,className:k.a.coin_icon}),u.a.createElement("span",{className:k.a.token_name},u.a.createElement("span",{style:{fontWeight:"bold"}},"ETH")," | Ethereum")),t.map((function(t,n){var r=t.symbol,o=t.logoURI,a=t.name,c=(t.wid,t.id),i=t.status;if("eth"!==t.token)return u.a.createElement("div",{className:k.a.token,key:r+c},u.a.createElement("img",{src:o,width:"25",className:k.a.token_img}),u.a.createElement("span",{className:k.a.token_name},u.a.createElement("span",{style:{fontWeight:"bold"}},r)," | ",a),1===i?u.a.createElement("span",{onClick:function(){return e.removeToken(r,n)}},u.a.createElement(b.a,{type:"iconicon-tokenswap-selected",style:{fontSize:"25px"}})):u.a.createElement("span",{onClick:function(){return e.addToken(r,n)}},u.a.createElement("span",{className:k.a.circle})))})))))}}])&&P(t.prototype,n),r&&P(t,r),c}(s.Component))||o)||o),z=n(977),M=n.n(z);n(56);function B(e){return(B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function U(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}function F(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){U(a,r,o,c,i,"next",e)}function i(e){U(a,r,o,c,i,"throw",e)}c(void 0)}))}}function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function H(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=J(e);if(t){var o=J(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Y(this,n)}}function Y(e,t){return!t||"object"!==B(t)&&"function"!=typeof t?G(e):t}function G(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=Object(l.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return K(K(K({},t),n),{},{loading:r["service/queryWalletById"]||r["wallet/queryErcToken"]||r["wallet/saveCurrent"],creatingAddress:r["service/createSingleWalletAddress"]||!1})}))(W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(l,e);var t,n,r,o,s=H(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),Q(G(t=s.call(this,e)),"switchDisplay",(function(){var e=t.state.hideAmount;t.props.dispatch({type:"user/switchDisplay"}),t.setState({hideAmount:!e})})),Q(G(t),"showDrawer",(function(){t.setState({drawer_visible:!0})})),Q(G(t),"closeDrawer",(function(){t.setState({drawer_visible:!1})})),Q(G(t),"renderTokenName",(function(e){e.id;var n=e.token,r=e.wid,o=e.logoURI,a=(e.symbol,e.name),c=null,i=null;return"eth"===n?(c=u.a.createElement(m.a,{token:3,className:M.a.coin_icon}),i="".concat(p.v[3].name," | ").concat(p.v[3].fullname)):(c=u.a.createElement("img",{src:o,width:"25",className:M.a.token_img}),i=a?"".concat(n.toUpperCase()," | ").concat(a):n.toUpperCase()),u.a.createElement("div",{className:M.a.part1,onClick:function(){return t.gotoMessageList(r,n)}},c,u.a.createElement("div",{className:M.a.coin_name},u.a.createElement("div",{className:M.a.name_box},u.a.createElement("div",{className:M.a.name},i))))})),Q(G(t),"gotoInfoPage",(function(e){t.props.history.push({pathname:"/money/walletinfo/".concat(e)})})),Q(G(t),"renderInfo",(function(){var e=t.props,n=e.match,r=e.currentWallet,o=n.params.id,a=t.state.hideAmount,c=a?u.a.createElement(b.a,{type:"iconhide"}):u.a.createElement(b.a,{type:"iconshow"});return u.a.createElement("div",{className:M.a.info},u.a.createElement(m.a,{token:3}),u.a.createElement("div",{className:M.a.wallet_name,onClick:function(){return t.gotoInfoPage(o)}},r.name," ",u.a.createElement("span",null,u.a.createElement(b.a,{type:"iconwallet-info"}))),u.a.createElement("div",{className:M.a.total_assets},u.a.createElement("div",{className:M.a.total},a?p.r:u.a.createElement(d.a,{value:r.total,tokenAmount:r.usd,token:3})," ",u.a.createElement("span",{onClick:t.switchDisplay,className:M.a.show_balance},c))),u.a.createElement("div",{className:M.a.add},u.a.createElement("a",{className:"ant-dropdown-link",onClick:t.showDrawer},u.a.createElement(b.a,{type:"iconcreatewallet",style:{fontSize:18}}))))})),Q(G(t),"gotoMessageList",(function(e,n){t.props.history.push({pathname:"/money/list/".concat(e,"/0,").concat(n)})})),Q(G(t),"gotoTransfer",(function(e,n){t.props.history.push({pathname:"/money/transfer/3/".concat(e,"/").concat(n)})})),Q(G(t),"gotoReceive",(function(e){t.props.history.push({pathname:"/money/receive/".concat(e)})})),Q(G(t),"goHome",(function(){t.props.history.push({pathname:"/money/home/0"})})),t.state={joining:0,receiveModalVisible:!1,hideAmount:window.localStorage.getItem(p.b.HIDEAMOUNT)||0,drawer_visible:!1},t}return t=l,(n=[{key:"getWalletId",value:function(){return parseInt(this.props.match.params.id)}},{key:"ready",value:function(){this.getWalletDetail(this.getWalletId())}},{key:"componentDidMount",value:function(){this.updateEth()}},{key:"updateEth",value:(o=F(regeneratorRuntime.mark((function e(){var t,n,r,o,a,c=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading:!0}),t=[],n=this.props,r=n.dispatch,o=n.ercToken,a=n.ercTokenTimestamp,t.push(r({type:"service/queryWalletById",payload:{wid:this.getWalletId()}})),o.length<1&&t.push(r({type:"wallet/queryErcToken",payload:{timestamp:a}})),Promise.all(t).then(function(){var e=F(regeneratorRuntime.mark((function e(t){var n,a,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t[1]&&(o=t[1].tokens),t[0].balance&&((i=t[0].balance.balance).forEach((function(e,t){"eth"===e.token&&(n=e,a=t);var r=o.find((function(t){return e.token==t.symbol.toLowerCase()}));Object.assign(e,r)})),i.splice(a,1),i.unshift(n)),e.next=4,r({type:"wallet/saveCurrent",payload:t[0]});case 4:c.setState({loading:!1});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"createCallback",value:function(e){this.updateEth()}},{key:"renderEthList",value:function(){var e=this,t=this.state.hideAmount,n=this.props.currentWallet;return n.id!==this.getWalletId()?u.a.createElement(h.a,null):u.a.createElement("div",{className:M.a.list_container,style:{height:473,padding:"25px 30px 0"}},n.balance&&n.balance.balance.map((function(n){var r=n.token,o=n.value,a=(n.address,n.wid);if(n.id,n.symbol,n.logoURI,a===e.getWalletId())return u.a.createElement("div",{className:M.a.list_item,key:r},e.renderTokenName(n),u.a.createElement("div",{className:M.a.part2},u.a.createElement("span",{className:M.a.amount},t?p.r:Object(y.b)(o))," ",u.a.createElement("span",{className:M.a.unit},r.toUpperCase())),u.a.createElement("div",{className:M.a.part3},u.a.createElement("div",{className:M.a.transfer,onClick:function(){return e.gotoTransfer(a,r)}},u.a.createElement(b.a,{type:"iconicon-send"})," ",Object(w.a)("transfer")),u.a.createElement("span",{className:M.a.receive,onClick:function(){return e.gotoReceive(a)}},u.a.createElement(b.a,{type:"iconreceive"})," ",Object(w.a)("collection"))))})))}},{key:"renderAddressCreating",value:function(){return u.a.createElement(i.a,{title:Object(w.a)("collection"),visible:this.props.creatingAddress,footer:null,onCancel:this.hideReceiveDialog},u.a.createElement("div",{className:M.a.qrcodeWrap},u.a.createElement(h.a,{className:M.a.loading_container}),u.a.createElement("p",null,"Generating address")))}},{key:"render",value:function(){var e=this,t=this.state.loading;return u.a.createElement("div",{className:M.a.container},u.a.createElement(c.a,{spinning:t},this.renderInfo(),this.renderEthList()),this.renderAddressCreating(),u.a.createElement("span",{className:M.a.goback,onClick:this.goHome}," ",Object(w.a)("back")),this.state.drawer_visible&&u.a.createElement(a.a,{width:400,title:"",placement:"right",closable:!1,onClose:this.closeDrawer,visible:this.state.drawer_visible,getContainer:!1,style:{position:"absolute"}},u.a.createElement(L,{createCallback:function(t){return e.createCallback(t)}})))}}])&&q(t.prototype,n),r&&q(t,r),l}(v.a))||W}}]);