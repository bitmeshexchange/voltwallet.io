(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1044:function(e,t,n){"use strict";(function(e){n.d(t,"c",(function(){return f})),n.d(t,"e",(function(){return p})),n.d(t,"j",(function(){return d})),n.d(t,"i",(function(){return j})),n.d(t,"g",(function(){return y})),n.d(t,"h",(function(){return h})),n.d(t,"b",(function(){return v})),n.d(t,"d",(function(){return g})),n.d(t,"f",(function(){return w})),n.d(t,"a",(function(){return _}));n(1223);var r=n(1039),a=n.n(r),o=n(56),s=n.n(o),c=n(297),i=n(47),u=n.n(i).a.parse(window.location.search),l=window.location;function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),a()(e).format(t)):e}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";if(!e)return"";var n=e;"number"==typeof e?n=new Date(e):"string"==typeof e&&(n=new Date(+e));var r={"y+":n.getFullYear(),"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),"S+":n.getMilliseconds()};for(var a in r)if(new RegExp("("+a+")").test(t))if("y+"===a)t=t.replace(RegExp.$1,(""+r[a]).substr(4-RegExp.$1.length));else if("S+"===a){var o=RegExp.$1.length;o=1===o?3:o,t=t.replace(RegExp.$1,("00"+r[a]).substr((""+r[a]).length-1,o))}else t=t.replace(RegExp.$1,1===RegExp.$1.length?r[a]:("00"+r[a]).substr((""+r[a]).length));return t}var m=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function d(e){return!!e&&m.test(e)}function j(e){if(!e)return e;if(!parseFloat(e))return 0;for(var t="",n=0,r=(e=(e||0).toString()).split("."),a=r[0],o=a.length-1;o>=0;o--)n++,t=a.charAt(o)+t,n%3||0==o||(t=","+t);return 1===r.length?t:t+"."+r[1]}function y(){return Array.prototype.slice.call(arguments).join(" ")}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var n=e.substr(0,t[0]),r=e.substr(-t[1],t[1]);return n+"****"+r}}var b,v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(!e)return 0;var n=e.toString().split(".");return e.toString().indexOf("e")>-1||n[1]&&n[1].length>t?s()(e).toFixed(t):e},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return s()(e).div(Math.pow(10,t)).toString()},w=function(){var e=c.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,n=c.a[t];return n||(window.localStorage.removeItem("VoltLocalCurrencyIndex"),n=c.a[e]),n};function O(e,t,n,r,a){!function(e,t,n,r,a,o){if(e>n||e<t){var s,c="bigint"==typeof t?"n":"";throw s=o>3?0===t||t===BigInt(0)?">= 0".concat(c," and < 2").concat(c," ** ").concat(8*(o+1)).concat(c):">= -(2".concat(c," ** ").concat(8*(o+1)-1).concat(c,") and < 2 ** ")+"".concat(8*(o+1)-1).concat(c):">= ".concat(t).concat(c," and <= ").concat(n).concat(c),new errors.ERR_OUT_OF_RANGE("value",s,e)}!function(e,t,n){E(t,"offset"),(void 0===e[t]||void 0===e[t+n])&&function(e,t,n){if(Math.floor(e)!==e)throw E(e,n),new errors.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new errors.ERR_BUFFER_OUT_OF_BOUNDS;throw new errors.ERR_OUT_OF_RANGE(n||"offset",">= ".concat(n?1:0," and <= ").concat(t),e)}(t,e.length-(n+1))}(r,a,o)}(t,r,a,e,n,7);var o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;var s=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,n}function E(e,t){if("number"!=typeof e)throw new errors.ERR_INVALID_ARG_TYPE(t,"number",e)}e.prototype.writeBigUInt64LE=(b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return O(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"undefined"==typeof BigInt?BufferBigIntNotDefined:b);var _=function(e){return(u.wss&&u.wss.indexOf("voltpre.bitmesh.com")>-1||l.pathname.indexOf("test.html")>-1)&&(e=e.replace("volt.bitmesh.com","voltpre.bitmesh.com")),e}}).call(this,n(21).Buffer)},1199:function(e,t,n){"use strict";var r,a=n(0),o=n.n(a),s=n(167),c=(n(297),n(56)),i=n.n(c),u=n(11),l=n(1044);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=Object(l.f)(),w=Object(s.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(s,e);var t,n,r,a=j(s);function s(){return p(this,s),a.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=e.price,n=e.value,r=e.usd,a=e.exchangeRate,s=e.token,c=e.tokenAmount,l=u.v[s||1].name.toLowerCase();if(!t[l])return null;var f=null,p=g.currencyCode.toLowerCase();f=t[l][p]?t[l][p]:i()(t[l].usd).times(a[p]),r&&(f=i()(f).div(t[l].usd).multipliedBy(r));var m=0;return m=3===s?(m=(m=i()(n).times(f)).plus(c||0)).toFixed(2,1):i()(n).div(1e8).times(f).toFixed(2,1),o.a.createElement("span",null,g.symbol,m," ",g.currencyCode)}}])&&m(t.prototype,n),r&&m(t,r),s}(a.Component))||r;t.a=w},1203:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(0),a=n.n(r),o=n(73),s=n(968),c=n.n(s),i=n(11);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var a=j(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,s=m(u);function u(){return l(this,u),s.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){var e=this.props.className||c.a.icon,t=this.props.token||1;return a.a.createElement("div",{className:e},a.a.createElement(o.a,{type:Object(i.o)(t).icon}))}}])&&f(t.prototype,n),r&&f(t,r),u}(r.Component)},1224:function(e,t,n){var r={"./af":1060,"./af.js":1060,"./ar":1061,"./ar-dz":1062,"./ar-dz.js":1062,"./ar-kw":1063,"./ar-kw.js":1063,"./ar-ly":1064,"./ar-ly.js":1064,"./ar-ma":1065,"./ar-ma.js":1065,"./ar-sa":1066,"./ar-sa.js":1066,"./ar-tn":1067,"./ar-tn.js":1067,"./ar.js":1061,"./az":1068,"./az.js":1068,"./be":1069,"./be.js":1069,"./bg":1070,"./bg.js":1070,"./bm":1071,"./bm.js":1071,"./bn":1072,"./bn-bd":1073,"./bn-bd.js":1073,"./bn.js":1072,"./bo":1074,"./bo.js":1074,"./br":1075,"./br.js":1075,"./bs":1076,"./bs.js":1076,"./ca":1077,"./ca.js":1077,"./cs":1078,"./cs.js":1078,"./cv":1079,"./cv.js":1079,"./cy":1080,"./cy.js":1080,"./da":1081,"./da.js":1081,"./de":1082,"./de-at":1083,"./de-at.js":1083,"./de-ch":1084,"./de-ch.js":1084,"./de.js":1082,"./dv":1085,"./dv.js":1085,"./el":1086,"./el.js":1086,"./en-au":1087,"./en-au.js":1087,"./en-ca":1088,"./en-ca.js":1088,"./en-gb":1089,"./en-gb.js":1089,"./en-ie":1090,"./en-ie.js":1090,"./en-il":1091,"./en-il.js":1091,"./en-in":1092,"./en-in.js":1092,"./en-nz":1093,"./en-nz.js":1093,"./en-sg":1094,"./en-sg.js":1094,"./eo":1095,"./eo.js":1095,"./es":1096,"./es-do":1097,"./es-do.js":1097,"./es-mx":1098,"./es-mx.js":1098,"./es-us":1099,"./es-us.js":1099,"./es.js":1096,"./et":1100,"./et.js":1100,"./eu":1101,"./eu.js":1101,"./fa":1102,"./fa.js":1102,"./fi":1103,"./fi.js":1103,"./fil":1104,"./fil.js":1104,"./fo":1105,"./fo.js":1105,"./fr":1106,"./fr-ca":1107,"./fr-ca.js":1107,"./fr-ch":1108,"./fr-ch.js":1108,"./fr.js":1106,"./fy":1109,"./fy.js":1109,"./ga":1110,"./ga.js":1110,"./gd":1111,"./gd.js":1111,"./gl":1112,"./gl.js":1112,"./gom-deva":1113,"./gom-deva.js":1113,"./gom-latn":1114,"./gom-latn.js":1114,"./gu":1115,"./gu.js":1115,"./he":1116,"./he.js":1116,"./hi":1117,"./hi.js":1117,"./hr":1118,"./hr.js":1118,"./hu":1119,"./hu.js":1119,"./hy-am":1120,"./hy-am.js":1120,"./id":1121,"./id.js":1121,"./is":1122,"./is.js":1122,"./it":1123,"./it-ch":1124,"./it-ch.js":1124,"./it.js":1123,"./ja":1125,"./ja.js":1125,"./jv":1126,"./jv.js":1126,"./ka":1127,"./ka.js":1127,"./kk":1128,"./kk.js":1128,"./km":1129,"./km.js":1129,"./kn":1130,"./kn.js":1130,"./ko":1131,"./ko.js":1131,"./ku":1132,"./ku.js":1132,"./ky":1133,"./ky.js":1133,"./lb":1134,"./lb.js":1134,"./lo":1135,"./lo.js":1135,"./lt":1136,"./lt.js":1136,"./lv":1137,"./lv.js":1137,"./me":1138,"./me.js":1138,"./mi":1139,"./mi.js":1139,"./mk":1140,"./mk.js":1140,"./ml":1141,"./ml.js":1141,"./mn":1142,"./mn.js":1142,"./mr":1143,"./mr.js":1143,"./ms":1144,"./ms-my":1145,"./ms-my.js":1145,"./ms.js":1144,"./mt":1146,"./mt.js":1146,"./my":1147,"./my.js":1147,"./nb":1148,"./nb.js":1148,"./ne":1149,"./ne.js":1149,"./nl":1150,"./nl-be":1151,"./nl-be.js":1151,"./nl.js":1150,"./nn":1152,"./nn.js":1152,"./oc-lnc":1153,"./oc-lnc.js":1153,"./pa-in":1154,"./pa-in.js":1154,"./pl":1155,"./pl.js":1155,"./pt":1156,"./pt-br":1157,"./pt-br.js":1157,"./pt.js":1156,"./ro":1158,"./ro.js":1158,"./ru":1159,"./ru.js":1159,"./sd":1160,"./sd.js":1160,"./se":1161,"./se.js":1161,"./si":1162,"./si.js":1162,"./sk":1163,"./sk.js":1163,"./sl":1164,"./sl.js":1164,"./sq":1165,"./sq.js":1165,"./sr":1166,"./sr-cyrl":1167,"./sr-cyrl.js":1167,"./sr.js":1166,"./ss":1168,"./ss.js":1168,"./sv":1169,"./sv.js":1169,"./sw":1170,"./sw.js":1170,"./ta":1171,"./ta.js":1171,"./te":1172,"./te.js":1172,"./tet":1173,"./tet.js":1173,"./tg":1174,"./tg.js":1174,"./th":1175,"./th.js":1175,"./tk":1176,"./tk.js":1176,"./tl-ph":1177,"./tl-ph.js":1177,"./tlh":1178,"./tlh.js":1178,"./tr":1179,"./tr.js":1179,"./tzl":1180,"./tzl.js":1180,"./tzm":1181,"./tzm-latn":1182,"./tzm-latn.js":1182,"./tzm.js":1181,"./ug-cn":1183,"./ug-cn.js":1183,"./uk":1184,"./uk.js":1184,"./ur":1185,"./ur.js":1185,"./uz":1186,"./uz-latn":1187,"./uz-latn.js":1187,"./uz.js":1186,"./vi":1188,"./vi.js":1188,"./x-pseudo":1189,"./x-pseudo.js":1189,"./yo":1190,"./yo.js":1190,"./zh-cn":1191,"./zh-cn.js":1191,"./zh-hk":1192,"./zh-hk.js":1192,"./zh-mo":1193,"./zh-mo.js":1193,"./zh-tw":1194,"./zh-tw.js":1194};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=1224},998:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));n(469);var r,a=n(298),o=n(0),s=n.n(o),c=(n(477),n(167)),i=(n(56),n(1199)),u=n(300),l=n(1203),f=n(73),p=n(1044),m=n(981),d=n.n(m),j=n(16);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n,r,a,o,s){try{var c=e[o](s),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(r,a)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var a=x(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=Object(c.connect)((function(e){var t=e.user,n=e.wallet;return N(N({},t),n)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(c,e);var t,n,r,o=O(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),S(_(t=o.call(this,e)),"goBack",(function(){t.props.history.goBack()})),S(_(t),"switchArr",function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var r,a,o,s,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.state,a=r.showArr,o=r.inputAddress,s=r.inputTxid,c=r.inputTxidIndex,o.length<1?(t.setState({inputAddressLoading:!0}),i=[],s.forEach((function(e,t){var n="https://api.whatsonchain.com/v1/bsv/main/tx/hash/".concat(e);i.push(fetch(n).then((function(e){return e.json()})).then((function(e){o.push.apply(o,h(e.vout[c[t]].scriptPubKey.addresses))})))})),Promise.all(i).then((function(e){a[n]=!a[n],t.setState({showArr:a,inputAddressLoading:!1,inputAddress:o})}))):(a[n]=!a[n],t.setState({showArr:a}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){v(o,r,a,s,c,"next",e)}function c(e){v(o,r,a,s,c,"throw",e)}s(void 0)}))});return function(e){return n.apply(this,arguments)}}()),t.state={loading:!1,inputAddressLoading:!1,data:{},label:null,inputTxid:[],inputTxidIndex:[],inputAddress:[],outputAddress:[],outputValue:0,showArr:[!1,!1]},t}return t=c,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.transactions,r=t.location,a=t.match;if(!r.state||n.length<1||n[r.state.index].txid!=a.params.txid)return this.props.history.replace({pathname:"/money/home/0"});this.setState({loading:!0});var o=null,c=n[r.state.index],i=c.type,u=c.status;2==i?2==u&&(o=s.a.createElement("label",{className:d.a.success},Object(j.a)("tx_success"))):o=s.a.createElement("label",{className:d.a.success},Object(j.a)("receive"));var l=a.params.txid,f="https://api.whatsonchain.com/v1/bsv/main/tx/hash/".concat(l);fetch(f).then((function(e){return e.json()})).then((function(t){var n=[],r=[],a=[],s=0;t.vin.forEach((function(e){n.push(e.txid),r.push(e.vout)})),t.vout.forEach((function(e){a.push.apply(a,h(e.scriptPubKey.addresses)),s+=e.value})),e.setState({loading:!1,data:t,label:o,inputTxid:n,inputTxidIndex:r,outputAddress:a,outputValue:s})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;if(!this.props.location.state)return this.props.history.replace({pathname:"/money/home/0"}),null;var t=this.state,n=t.loading,r=t.data,o=t.label,c=t.inputAddress,m=t.outputAddress,y=t.showArr,h=t.outputValue,b=t.inputAddressLoading;if(n)return s.a.createElement(u.a,null);var v=this.props,g=v.currentWallet,w=v.transactions,O=v.feerate,E=v.location,_=r.confirmations,x=r.size,k=r.time,N=r.hash,S=g.name,R=w[E.state.index],P=R.note,A=R.type,z=R.price,D=2==A?"-":"+";return s.a.createElement("div",{style:{height:"100%",overflowY:"auto"}},s.a.createElement("div",{className:d.a.container},s.a.createElement("div",{className:d.a.w_info},s.a.createElement(l.a,{token:2}),s.a.createElement("div",{className:d.a.w_name},S),s.a.createElement("div",{className:d.a.tx_status},o),s.a.createElement("span",{className:d.a.goback,onClick:this.goBack}," ",Object(j.a)("back"))),s.a.createElement("div",{className:d.a.tx_info},s.a.createElement("div",{className:d.a.tx_row_1},s.a.createElement("div",{className:d.a.label},Object(j.a)("tx_amount")),s.a.createElement("div",{className:d.a.value},D," ",h," BSV / ",D," ",s.a.createElement(i.a,{value:1e8*h,token:1,usd:z}))),s.a.createElement("div",{className:d.a.tx_row},s.a.createElement("div",{className:d.a.tx_col,style:{width:150}},s.a.createElement("div",{className:d.a.label},Object(j.a)("confirmations")),s.a.createElement("div",{className:d.a.value},_)),s.a.createElement("div",{className:d.a.tx_col},s.a.createElement("div",{className:d.a.label},Object(j.a)("timestamp")),s.a.createElement("div",{className:d.a.value},Object(p.e)(1e3*k)))),s.a.createElement("div",{className:d.a.tx_row},s.a.createElement("div",{className:d.a.tx_col,style:{width:150}},s.a.createElement("div",{className:d.a.label},Object(j.a)("fee_rate")),s.a.createElement("div",{className:d.a.value},O.bsv2/1e3," sat/B")),s.a.createElement("div",{className:d.a.tx_col,style:{width:120}},s.a.createElement("div",{className:d.a.label},Object(j.a)("size")),s.a.createElement("div",{className:d.a.value},x)),s.a.createElement("div",{className:d.a.tx_col},s.a.createElement("div",{className:d.a.label},Object(j.a)("paid")),s.a.createElement("div",{className:d.a.value},Object(p.d)(O.bsv2/1e3*x)," BSV"))),s.a.createElement("div",{className:d.a.tx_row_1},s.a.createElement("div",{className:d.a.label},"TX ID"),s.a.createElement("div",{className:d.a.value},N)),s.a.createElement("div",{className:d.a.tx_row_1},s.a.createElement("div",{className:d.a.label},s.a.createElement("span",null,Object(j.a)("input_addresses")),s.a.createElement("span",{onClick:function(){return e.switchArr(0)}},y[0]?s.a.createElement(f.a,{type:"iconchevron",style:{transform:"rotateX(180deg)"}}):s.a.createElement(f.a,{type:"iconchevron"}))),b&&s.a.createElement(a.a,null),y[0]&&c&&c.map((function(e,t){return s.a.createElement("div",{className:d.a.value,key:e+t},e)}))),s.a.createElement("div",{className:d.a.tx_row_1},s.a.createElement("div",{className:d.a.label},s.a.createElement("span",null,Object(j.a)("output_addresses")),s.a.createElement("span",{onClick:function(){return e.switchArr(1)}},y[1]?s.a.createElement(f.a,{type:"iconchevron",style:{transform:"rotateX(180deg)"}}):s.a.createElement(f.a,{type:"iconchevron"}))),y[1]&&m.map((function(e,t){return s.a.createElement("div",{className:d.a.value,key:e+t},e)}))),s.a.createElement("div",{className:d.a.tx_row_1},s.a.createElement("div",{className:d.a.label},Object(j.a)("message")),s.a.createElement("div",{className:d.a.value},P)))))}}])&&g(t.prototype,n),r&&g(t,r),c}(o.Component))||r}}]);