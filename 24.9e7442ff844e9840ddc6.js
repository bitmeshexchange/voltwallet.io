(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1045:function(e,t,n){"use strict";(function(e){n.d(t,"d",(function(){return y})),n.d(t,"f",(function(){return d})),n.d(t,"m",(function(){return h})),n.d(t,"l",(function(){return j})),n.d(t,"j",(function(){return v})),n.d(t,"k",(function(){return g})),n.d(t,"c",(function(){return w})),n.d(t,"e",(function(){return k})),n.d(t,"g",(function(){return E})),n.d(t,"b",(function(){return _})),n.d(t,"h",(function(){return x})),n.d(t,"a",(function(){return R})),n.d(t,"i",(function(){return N}));n(1206);var r=n(1040),a=n.n(r),o=n(55),i=n.n(o),c=n(297),s=n(11),u=n(56),l=n.n(u),f=n(3),p=l.a.parse(window.location.search),m=window.location;function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),a()(e).format(t)):e}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";if(!e)return"";var n=e;"number"==typeof e?n=new Date(e):"string"==typeof e&&(n=new Date(+e));var r={"y+":n.getFullYear(),"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),"S+":n.getMilliseconds()};for(var a in r)if(new RegExp("("+a+")").test(t))if("y+"===a)t=t.replace(RegExp.$1,(""+r[a]).substr(4-RegExp.$1.length));else if("S+"===a){var o=RegExp.$1.length;o=1===o?3:o,t=t.replace(RegExp.$1,("00"+r[a]).substr((""+r[a]).length-1,o))}else t=t.replace(RegExp.$1,1===RegExp.$1.length?r[a]:("00"+r[a]).substr((""+r[a]).length));return t}var b=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function h(e){return!!e&&b.test(e)}function j(e){if(!e)return e;if(!parseFloat(e))return 0;for(var t="",n=0,r=(e=(e||0).toString()).split("."),a=r[0],o=a.length-1;o>=0;o--)n++,t=a.charAt(o)+t,n%3||0==o||(t=","+t);return 1===r.length?t:t+"."+r[1]}function v(){return Array.prototype.slice.call(arguments).join(" ")}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var n=e.substr(0,t[0]),r=e.substr(-t[1],t[1]);return n+"****"+r}}var O,w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(!e)return 0;var n=e.toString().split(".");return e.toString().indexOf("e")>-1||n[1]&&n[1].length>t?i()(e).toFixed(t):e},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return e?i()(e).div(Math.pow(10,t)).toString():0},E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;if(!e)return 0;var r=parseInt(t),a=e,o=s.t[r].decimal;o&&(a=i()(e).div("1e".concat(o)).toString());var c=a.toString().split(".");return a.toString().indexOf("e")>-1||c[1]&&c[1].length>n&&0!==n?i()(a).toFixed(n):a},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e?i()(e).div(Math.pow(10,t)).toString():0},x=function(){var e=c.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,n=c.a[t];return n||(window.localStorage.removeItem("VoltLocalCurrencyIndex"),n=c.a[e]),n};function S(e,t,n,r,a){!function(e,t,n,r,a,o){if(e>n||e<t){var i,c="bigint"==typeof t?"n":"";throw i=o>3?0===t||t===BigInt(0)?">= 0".concat(c," and < 2").concat(c," ** ").concat(8*(o+1)).concat(c):">= -(2".concat(c," ** ").concat(8*(o+1)-1).concat(c,") and < 2 ** ")+"".concat(8*(o+1)-1).concat(c):">= ".concat(t).concat(c," and <= ").concat(n).concat(c),new errors.ERR_OUT_OF_RANGE("value",i,e)}!function(e,t,n){P(t,"offset"),(void 0===e[t]||void 0===e[t+n])&&function(e,t,n){if(Math.floor(e)!==e)throw P(e,n),new errors.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new errors.ERR_BUFFER_OUT_OF_BOUNDS;throw new errors.ERR_OUT_OF_RANGE(n||"offset",">= ".concat(n?1:0," and <= ").concat(t),e)}(t,e.length-(n+1))}(r,a,o)}(t,r,a,e,n,7);var o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;var i=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i,n}function P(e,t){if("number"!=typeof e)throw new errors.ERR_INVALID_ARG_TYPE(t,"number",e)}e.prototype.writeBigUInt64LE=(O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return S(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"undefined"==typeof BigInt?BufferBigIntNotDefined:O);var R=function(e){var t="voltpre.bitmesh.com";return(p.wss&&p.wss.indexOf(t)>-1||m.pathname.indexOf("test.html")>-1)&&(e=e.replace("volt.id",t).replace("volt.bitmesh.com",t)),e},N=function(e,t){var n="";if(1===t&&(n="mainnet"),7===t&&(n="testnet"),!n)return!1;try{return new f.Address(e,n),!0}catch(e){return!1}}}).call(this,n(21).Buffer)},1202:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),a=n.n(r),o=n(73),i=n(966),c=n.n(i),s=n(11);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var a=d(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,i=m(u);function u(){return l(this,u),i.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){var e=this.props.className||c.a.icon,t=this.props.token||1;return a.a.createElement("div",{className:e},a.a.createElement(o.a,{type:Object(s.n)(t).icon}))}}])&&f(t.prototype,n),r&&f(t,r),u}(r.Component)},1203:function(e,t,n){"use strict";var r,a=n(0),o=n.n(a),i=n(167),c=(n(297),n(55)),s=n.n(c),u=n(11),l=n(1045);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=Object(l.h)(),O=Object(i.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,n,r,a=d(i);function i(){return p(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.price,n=e.value,r=e.usd,a=e.exchangeRate,i=e.token,c=e.tokenAmount,l=(u.t[i]||u.t[1]).name.toLowerCase();if(7===i&&(l="bsv"),!t[l])return null;var f=null,p=g.currencyCode.toLowerCase();f=t[l][p]?t[l][p]:s()(t[l].usd).times(a[p]),r&&(f=s()(f).div(t[l].usd).multipliedBy(r));var m=0;return m=3===i||6===i?(m=(m=s()(n).times(f)).plus(c||0)).toFixed(2,1):s()(n).div(1e8).times(f).toFixed(2,1),o.a.createElement("span",null,g.symbol,m," ",g.currencyCode)}}])&&m(t.prototype,n),r&&m(t,r),i}(a.Component))||r;t.a=O},1207:function(e,t,n){var r={"./af":1054,"./af.js":1054,"./ar":1055,"./ar-dz":1056,"./ar-dz.js":1056,"./ar-kw":1057,"./ar-kw.js":1057,"./ar-ly":1058,"./ar-ly.js":1058,"./ar-ma":1059,"./ar-ma.js":1059,"./ar-sa":1060,"./ar-sa.js":1060,"./ar-tn":1061,"./ar-tn.js":1061,"./ar.js":1055,"./az":1062,"./az.js":1062,"./be":1063,"./be.js":1063,"./bg":1064,"./bg.js":1064,"./bm":1065,"./bm.js":1065,"./bn":1066,"./bn-bd":1067,"./bn-bd.js":1067,"./bn.js":1066,"./bo":1068,"./bo.js":1068,"./br":1069,"./br.js":1069,"./bs":1070,"./bs.js":1070,"./ca":1071,"./ca.js":1071,"./cs":1072,"./cs.js":1072,"./cv":1073,"./cv.js":1073,"./cy":1074,"./cy.js":1074,"./da":1075,"./da.js":1075,"./de":1076,"./de-at":1077,"./de-at.js":1077,"./de-ch":1078,"./de-ch.js":1078,"./de.js":1076,"./dv":1079,"./dv.js":1079,"./el":1080,"./el.js":1080,"./en-au":1081,"./en-au.js":1081,"./en-ca":1082,"./en-ca.js":1082,"./en-gb":1083,"./en-gb.js":1083,"./en-ie":1084,"./en-ie.js":1084,"./en-il":1085,"./en-il.js":1085,"./en-in":1086,"./en-in.js":1086,"./en-nz":1087,"./en-nz.js":1087,"./en-sg":1088,"./en-sg.js":1088,"./eo":1089,"./eo.js":1089,"./es":1090,"./es-do":1091,"./es-do.js":1091,"./es-mx":1092,"./es-mx.js":1092,"./es-us":1093,"./es-us.js":1093,"./es.js":1090,"./et":1094,"./et.js":1094,"./eu":1095,"./eu.js":1095,"./fa":1096,"./fa.js":1096,"./fi":1097,"./fi.js":1097,"./fil":1098,"./fil.js":1098,"./fo":1099,"./fo.js":1099,"./fr":1100,"./fr-ca":1101,"./fr-ca.js":1101,"./fr-ch":1102,"./fr-ch.js":1102,"./fr.js":1100,"./fy":1103,"./fy.js":1103,"./ga":1104,"./ga.js":1104,"./gd":1105,"./gd.js":1105,"./gl":1106,"./gl.js":1106,"./gom-deva":1107,"./gom-deva.js":1107,"./gom-latn":1108,"./gom-latn.js":1108,"./gu":1109,"./gu.js":1109,"./he":1110,"./he.js":1110,"./hi":1111,"./hi.js":1111,"./hr":1112,"./hr.js":1112,"./hu":1113,"./hu.js":1113,"./hy-am":1114,"./hy-am.js":1114,"./id":1115,"./id.js":1115,"./is":1116,"./is.js":1116,"./it":1117,"./it-ch":1118,"./it-ch.js":1118,"./it.js":1117,"./ja":1119,"./ja.js":1119,"./jv":1120,"./jv.js":1120,"./ka":1121,"./ka.js":1121,"./kk":1122,"./kk.js":1122,"./km":1123,"./km.js":1123,"./kn":1124,"./kn.js":1124,"./ko":1125,"./ko.js":1125,"./ku":1126,"./ku.js":1126,"./ky":1127,"./ky.js":1127,"./lb":1128,"./lb.js":1128,"./lo":1129,"./lo.js":1129,"./lt":1130,"./lt.js":1130,"./lv":1131,"./lv.js":1131,"./me":1132,"./me.js":1132,"./mi":1133,"./mi.js":1133,"./mk":1134,"./mk.js":1134,"./ml":1135,"./ml.js":1135,"./mn":1136,"./mn.js":1136,"./mr":1137,"./mr.js":1137,"./ms":1138,"./ms-my":1139,"./ms-my.js":1139,"./ms.js":1138,"./mt":1140,"./mt.js":1140,"./my":1141,"./my.js":1141,"./nb":1142,"./nb.js":1142,"./ne":1143,"./ne.js":1143,"./nl":1144,"./nl-be":1145,"./nl-be.js":1145,"./nl.js":1144,"./nn":1146,"./nn.js":1146,"./oc-lnc":1147,"./oc-lnc.js":1147,"./pa-in":1148,"./pa-in.js":1148,"./pl":1149,"./pl.js":1149,"./pt":1150,"./pt-br":1151,"./pt-br.js":1151,"./pt.js":1150,"./ro":1152,"./ro.js":1152,"./ru":1153,"./ru.js":1153,"./sd":1154,"./sd.js":1154,"./se":1155,"./se.js":1155,"./si":1156,"./si.js":1156,"./sk":1157,"./sk.js":1157,"./sl":1158,"./sl.js":1158,"./sq":1159,"./sq.js":1159,"./sr":1160,"./sr-cyrl":1161,"./sr-cyrl.js":1161,"./sr.js":1160,"./ss":1162,"./ss.js":1162,"./sv":1163,"./sv.js":1163,"./sw":1164,"./sw.js":1164,"./ta":1165,"./ta.js":1165,"./te":1166,"./te.js":1166,"./tet":1167,"./tet.js":1167,"./tg":1168,"./tg.js":1168,"./th":1169,"./th.js":1169,"./tk":1170,"./tk.js":1170,"./tl-ph":1171,"./tl-ph.js":1171,"./tlh":1172,"./tlh.js":1172,"./tr":1173,"./tr.js":1173,"./tzl":1174,"./tzl.js":1174,"./tzm":1175,"./tzm-latn":1176,"./tzm-latn.js":1176,"./tzm.js":1175,"./ug-cn":1177,"./ug-cn.js":1177,"./uk":1178,"./uk.js":1178,"./ur":1179,"./ur.js":1179,"./uz":1180,"./uz-latn":1181,"./uz-latn.js":1181,"./uz.js":1180,"./vi":1182,"./vi.js":1182,"./x-pseudo":1183,"./x-pseudo.js":1183,"./yo":1184,"./yo.js":1184,"./zh-cn":1185,"./zh-cn.js":1185,"./zh-hk":1186,"./zh-hk.js":1186,"./zh-mo":1187,"./zh-mo.js":1187,"./zh-tw":1188,"./zh-tw.js":1188};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=1207},1361:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));n(475);var r,a=n(304),o=(n(469),n(298)),i=n(0),c=n.n(i),s=n(167),u=n(1045),l=n(31),f=n(73),p=n(980),m=n.n(p),y=n(16);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function h(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){b(o,r,a,i,c,"next",e)}function c(e){b(o,r,a,i,c,"throw",e)}i(void 0)}))}}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=w(e);if(t){var a=w(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=Object(s.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return E(E(E({},t),n),{},{partiesLoading:r["wallet/queryParties"]||r["wallet/checkOnline"]||!1})}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(d,e);var t,n,r,i,s,p=g(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=p.call(this,e)).state={loading:!1},t}return t=d,(n=[{key:"componentDidMount",value:(s=h(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.checkStatus();case 1:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"checkStatus",value:(i=h(regeneratorRuntime.mark((function e(){var t,n,r,a,o,i,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.currentWallet,r=t.dispatch,this.setState({loading:!0}),n.parties){e.next=5;break}return e.next=5,r({type:"wallet/queryParties",payload:{id:n.id}});case 5:if(0!==n.status){e.next=8;break}return e.next=8,r({type:"wallet/checkOnline",payload:{id:n.id,users:n.parties}});case 8:if(a=this.props,o=a.approve,i=a.txid,c=n.parties,!(o&&o.length>0)){e.next=15;break}return e.next=13,l.a.querySignDetail(i);case 13:s=e.sent,c.forEach((function(e,t){c[t].time="";for(var n=0;n<s.length;n++)e.uid===s[n].uid&&(c[t].time=s[n].createtime,c[t].status=s[n].status)}));case 15:this.setState({parties:c}),this.setState({loading:!1});case 17:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"render",value:function(){var e=this.props,t=e.currentWallet,n=e.visible,r=e.partiesLoading,i=e.cancel,s=e.approve,l=e.st,p=t.name,d=t.share,b=t.status,h=t.createtime,j=this.state,v=j.parties,g=j.loading;return c.a.createElement(a.a,{width:600,title:null,visible:n,footer:null,onCancel:i},c.a.createElement("div",{className:m.a.body},c.a.createElement("div",{className:m.a.title},"".concat(p," - ").concat(Object(y.a)("key_share_members"))),c.a.createElement("div",{className:m.a.desc},Object(y.a)("created_on")," ",Object(u.d)(h)," | ",d," ",Object(y.a)("members")," ",s&&"| ".concat(s.length," ").concat(Object(y.a)("signee_signed"))),c.a.createElement(o.a,{spinning:r||g},v&&v.map((function(e,t){var n=e.user,r=e.online,a=e.uid,o=e.time;if(n)return 0===b?c.a.createElement("div",{className:m.a.item,key:n},c.a.createElement(f.a,{type:r?"iconicon-keyshare-member-online":"iconicon-keyshare-member-offline"}),c.a.createElement("span",{className:m.a.no},t+1),c.a.createElement("span",{className:m.a.email},n),1===e.status?c.a.createElement("span",{className:m.a.joined},Object(y.a)("joined").toUpperCase()):c.a.createElement("span",{className:m.a.pending},Object(y.a)("pending").toUpperCase())):c.a.createElement("div",{className:m.a.item,key:n},r?c.a.createElement(f.a,{type:"iconicon-keyshare-member-online"}):c.a.createElement(f.a,{type:"iconicon-keyshare-member-offline"}),c.a.createElement("span",{className:m.a.no},t+1),c.a.createElement("span",{className:m.a.email},n),s&&c.a.createElement("span",{className:m.a.time},Object(u.d)(o)),s&&(s.indexOf(a)>-1?c.a.createElement("span",{className:m.a.signed},Object(y.a)("signed").toUpperCase()):c.a.createElement("span",{className:m.a.pending},Object(y.a)(2===l?"unsigned2":"unsigned").toUpperCase())))})))))}}])&&j(t.prototype,n),r&&j(t,r),d}(i.Component))||r},994:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));n(1198);var r,a,o,i=n(1201),c=(n(468),n(168)),s=(n(1199),n(1200)),u=n(0),l=n.n(u),f=n(167),p=n(66),m=n(1045),y=n(1203),d=n(73),b=n(1202),h=n(995),j=n.n(h),v=n(16),g=n(1361),O=n(301),w=n(11);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function x(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){x(o,r,a,i,c,"next",e)}function c(e){x(o,r,a,i,c,"throw",e)}i(void 0)}))}}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var a=C(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return I(this,n)}}function I(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?D(e):t}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){M(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=s.a.Item,A=(r=s.a.create(),a=Object(f.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return B(B(B({},t),n),{},{loading:r["service/queryWalletById"]||r["wallet/queryParties"]||r["service/queryPaymailById"]})})),Object(p.withRouter)(o=r(o=a(o=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(u,e);var t,n,r,a,o=N(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),M(D(t=o.call(this,e)),"gotoBack",(function(){var e=t.props.match.params.id;t.props.history.push({pathname:"/money/list/".concat(e)})})),M(D(t),"showMembers",(function(){t.setState({visible:!0})})),M(D(t),"hideMembers",(function(){t.setState({visible:!1})})),M(D(t),"editPaymail",(function(e){var n=t.props,r=n.currentWallet,a=n.userid,o=r.type,i=r.founderId;2===parseInt(o)&&i!==a?t.props.history.push({pathname:"/money/paymail_view/".concat(e)}):t.props.history.push({pathname:"/money/paymail/".concat(e)})})),M(D(t),"setName",(function(){t.setState({editing:!0})})),M(D(t),"handleSubmit",(function(e){e.preventDefault();var n=t.props,r=n.currentWallet,a=n.dispatch,o=n.match,i=n.form,s=o.params.id;i.validateFields(function(){var e=S(regeneratorRuntime.mark((function e(n,o){var i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=9;break}if((i=o.name.trim())!==r.name){e.next=4;break}return e.abrupt("return",t.setState({editing:!1}));case 4:return u=B(B({},o),{},{wid:parseInt(s)}),e.next=7,a({type:"service/setName",payload:u});case 7:e.sent&&(c.a.success(Object(v.a)("edit_name_success")),r.name=i,a({type:"wallet/saveCurrent",payload:r}),t.setState({editing:!1}));case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())})),M(D(t),"archived",S(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.match.params.id,r=t.props.currentWallet.type,e.next=4,t.props.dispatch({type:"service/archive",payload:{wid:parseInt(n)}});case 4:if(a=e.sent){e.next=7;break}return e.abrupt("return",c.a.error(Object(v.a)("failure")));case 7:if(401!==a.code){e.next=9;break}return e.abrupt("return",c.a.error(Object(v.a)("failure")+Object(v.a)("archiveWithoutPermission")));case 9:if(402!==a.code){e.next=11;break}return e.abrupt("return",c.a.error(Object(v.a)("failure")+Object(v.a)("hasBalance")));case 11:if(403!==a.code){e.next=13;break}return e.abrupt("return",c.a.error(Object(v.a)("failure")+Object(v.a)("hasPaymail")));case 13:return c.a.success(Object(v.a)("archived_success")),e.next=16,t.props.dispatch({type:"service/updateWallet",payload:{type:parseInt(r)}});case 16:t.props.history.push({pathname:"/money/home/0"});case 17:case"end":return e.stop()}}),e)})))),t.init(),t.state={visible:!1,editing:!1},t}return t=u,(n=[{key:"init",value:(a=S(regeneratorRuntime.mark((function e(){var t,n,r,a,o,i,c,s,u,l,f,p,m,y,d,b,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.currentWallet,n=this.props,r=n.dispatch,a=n.match,o=parseInt(a.params.id),t.id===o){e.next=7;break}return e.next=6,r({type:"service/queryWalletById",payload:{wid:o}});case 6:t=e.sent;case 7:if(c=(i=t).type,s=i.token,l=(u=t).paymail,f=u.parties,p=u.founder,m=u.founderId,y=u.uid,1!==s){e.next=16;break}if(l&&!(l.length<1)){e.next=16;break}return e.next=13,r({type:"service/queryPaymailById",payload:{wid:o}});case 13:return l=e.sent,e.next=16,r({type:"wallet/saveCurrent",payload:B(B({},t),{},{paymail:l})});case 16:if(2!==parseInt(c)){e.next=28;break}if(f&&!(f.length<1)){e.next=23;break}return e.next=20,r({type:"wallet/queryParties",payload:{id:o}});case 20:return f=e.sent,e.next=23,r({type:"wallet/saveCurrent",payload:B(B({},t),{},{parties:f})});case 23:if(!(f&&f.length>0)||m){e.next=28;break}d=E(f);try{for(d.s();!(b=d.n()).done;)(h=b.value).uid===y&&(p=h.user,m=h.uid)}catch(e){d.e(e)}finally{d.f()}return e.next=28,r({type:"wallet/saveCurrent",payload:B(B({},t),{},{founder:p,founderId:m})});case 28:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"render",value:function(){var e=this,t=this.props,n=t.currentWallet,r=t.loading;if(!n||!n.id||r)return l.a.createElement(O.a,null);var a,o=this.props,c=o.form,u=o.userid,f=o.wallets,p=n.id,h=n.createtime,k=n.name,E=n.type,_=n.token,x=n.paymail,S=n.founder,P=n.founderId,R=n.total,N=c.getFieldDecorator,I=Object(w.e)(_);3!==_&&6!==_&&(R=Object(m.e)(R)),x&&x.length>0&&((a=x.find((function(e){return 1===e.main})))||(a=x[0]));var D=this.state.visible;return l.a.createElement("div",{className:j.a.container},l.a.createElement("div",{className:j.a.detail},l.a.createElement("div",{className:j.a.detail_container},l.a.createElement(b.a,{token:_}),l.a.createElement("div",{className:j.a.label},Object(v.a)("wallet_name")),l.a.createElement(s.a,{hideRequiredMark:!0},this.state.editing?l.a.createElement("div",{className:j.a.form},l.a.createElement(F,null,N("name",{initialValue:k,rules:[{required:!0}]})(l.a.createElement(i.a,{addonAfter:l.a.createElement("div",{onClick:this.handleSubmit},Object(v.a)("save"))})))):l.a.createElement("div",{className:j.a.value},k," ",(1===E||2===E&&u===P)&&l.a.createElement("span",{className:j.a.op_icon,onClick:this.setName},l.a.createElement(d.a,{type:"iconpencil"})))),2===E&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:j.a.label},Object(v.a)("key_share_members")),l.a.createElement("div",{className:j.a.value,onClick:this.showMembers,style:{cursor:"pointer"}},Object(v.a)("check_status")," ",l.a.createElement("span",{className:j.a.op_icon},l.a.createElement(d.a,{type:"iconicon-keyshare-member-online"}))),l.a.createElement("div",{className:j.a.label},Object(v.a)("wallet_owner")),l.a.createElement("div",{className:j.a.value},S)),1===_&&l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:j.a.label},Object(v.a)("wallet_paymail")),x&&x.length>0&&l.a.createElement("div",{className:j.a.value},a.name,"@","volt.id"),l.a.createElement("div",{onClick:function(){return e.editPaymail(p)},className:j.a.edit_paymail},2===E&&u!==P?Object(v.a)("view_paymail"):Object(v.a)("edit_paymail"))),l.a.createElement("div",{className:j.a.label},Object(v.a)("time_created")),l.a.createElement("div",{className:j.a.value1},Object(m.d)(h)),l.a.createElement("div",{className:j.a.label},Object(v.a)("current_balance")),l.a.createElement("div",{className:j.a.value1},R," ",I," | ",l.a.createElement(y.a,{token:_,value:n.total})),(1===E&&f[1].length>1||2==E)&&l.a.createElement("div",{className:j.a.label},l.a.createElement("span",{className:j.a.archived,onClick:this.archived},Object(v.a)("archived_account"))),l.a.createElement("span",{className:j.a.goback,onClick:this.gotoBack}," ",Object(v.a)("cancel")),D&&l.a.createElement(g.a,{visible:D,cancel:this.hideMembers}))))}}])&&P(t.prototype,n),r&&P(t,r),u}(u.Component))||o)||o)||o)}}]);