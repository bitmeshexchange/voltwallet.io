(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1016:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return u})),n.d(t,"i",(function(){return f})),n.d(t,"g",(function(){return p})),n.d(t,"h",(function(){return m})),n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return y})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return b}));n(1188);var r=n(1009),a=n.n(r),o=n(55),s=n.n(o),c=n(297);window.location;function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),a()(e).format(t)):e}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";if(!e)return"";var n=e;"number"==typeof e?n=new Date(e):"string"==typeof e&&(n=new Date(+e));var r={"y+":n.getFullYear(),"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),"S+":n.getMilliseconds()};for(var a in r)if(new RegExp("("+a+")").test(t))if("y+"===a)t=t.replace(RegExp.$1,(""+r[a]).substr(4-RegExp.$1.length));else if("S+"===a){var o=RegExp.$1.length;o=1===o?3:o,t=t.replace(RegExp.$1,("00"+r[a]).substr((""+r[a]).length-1,o))}else t=t.replace(RegExp.$1,1===RegExp.$1.length?r[a]:("00"+r[a]).substr((""+r[a]).length));return t}var l=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function f(e){return!!e&&l.test(e)}function p(){return Array.prototype.slice.call(arguments).join(" ")}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var n=e.substr(0,t[0]),r=e.substr(-t[1],t[1]);return n+"****"+r}}var j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(!e)return 0;var n=e.toString().split(".");return e.toString().indexOf("e")>-1||n[1]&&n[1].length>t?s()(e).toFixed(t):e},y=function(e){return e?s()(e).div(1e8).toString():0},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;return s()(e).div(Math.pow(10,t)).toString()},b=function(){var e=c.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,n=c.a[t];return n||(window.localStorage.removeItem("VoltLocalCurrencyIndex"),n=c.a[e]),n}},1162:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r),o=n(137),s=n(964),c=n.n(s),i=n(11);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var a=y(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,s=m(u);function u(){return l(this,u),s.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){var e=this.props.className||c.a.icon,t=this.props.token||1;return a.a.createElement("div",{className:e},a.a.createElement(o.a,{type:Object(i.m)(t).icon}))}}])&&f(t.prototype,n),r&&f(t,r),u}(r.Component)},1163:function(e,t,n){"use strict";var r,a=n(0),o=n.n(a),s=n(166),c=(n(297),n(55)),i=n.n(c),u=n(11),l=n(1016);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=Object(l.f)(),O=Object(s.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(s,e);var t,n,r,a=y(s);function s(){return p(this,s),a.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=e.price,n=e.value,r=e.usd,a=e.exchangeRate,s=e.token,c=e.tokenAmount,l=u.s[s||1].name.toLowerCase();if(!t[l])return null;var f=null,p=g.currencyCode.toLowerCase();f=t[l][p]?t[l][p]:i()(t[l].usd).times(a[p]),r&&(f=i()(f).div(t[l].usd).multipliedBy(r));var m=0;return m=3===s||6===s?(m=(m=i()(n).times(f)).plus(c||0)).toFixed(2,1):i()(n).div(1e8).times(f).toFixed(2,1),o.a.createElement("span",null,g.symbol,m," ",g.currencyCode)}}])&&m(t.prototype,n),r&&m(t,r),s}(a.Component))||r;t.a=O},1189:function(e,t,n){var r={"./af":1026,"./af.js":1026,"./ar":1027,"./ar-dz":1028,"./ar-dz.js":1028,"./ar-kw":1029,"./ar-kw.js":1029,"./ar-ly":1030,"./ar-ly.js":1030,"./ar-ma":1031,"./ar-ma.js":1031,"./ar-sa":1032,"./ar-sa.js":1032,"./ar-tn":1033,"./ar-tn.js":1033,"./ar.js":1027,"./az":1034,"./az.js":1034,"./be":1035,"./be.js":1035,"./bg":1036,"./bg.js":1036,"./bm":1037,"./bm.js":1037,"./bn":1038,"./bn-bd":1039,"./bn-bd.js":1039,"./bn.js":1038,"./bo":1040,"./bo.js":1040,"./br":1041,"./br.js":1041,"./bs":1042,"./bs.js":1042,"./ca":1043,"./ca.js":1043,"./cs":1044,"./cs.js":1044,"./cv":1045,"./cv.js":1045,"./cy":1046,"./cy.js":1046,"./da":1047,"./da.js":1047,"./de":1048,"./de-at":1049,"./de-at.js":1049,"./de-ch":1050,"./de-ch.js":1050,"./de.js":1048,"./dv":1051,"./dv.js":1051,"./el":1052,"./el.js":1052,"./en-au":1053,"./en-au.js":1053,"./en-ca":1054,"./en-ca.js":1054,"./en-gb":1055,"./en-gb.js":1055,"./en-ie":1056,"./en-ie.js":1056,"./en-il":1057,"./en-il.js":1057,"./en-in":1058,"./en-in.js":1058,"./en-nz":1059,"./en-nz.js":1059,"./en-sg":1060,"./en-sg.js":1060,"./eo":1061,"./eo.js":1061,"./es":1062,"./es-do":1063,"./es-do.js":1063,"./es-mx":1064,"./es-mx.js":1064,"./es-us":1065,"./es-us.js":1065,"./es.js":1062,"./et":1066,"./et.js":1066,"./eu":1067,"./eu.js":1067,"./fa":1068,"./fa.js":1068,"./fi":1069,"./fi.js":1069,"./fil":1070,"./fil.js":1070,"./fo":1071,"./fo.js":1071,"./fr":1072,"./fr-ca":1073,"./fr-ca.js":1073,"./fr-ch":1074,"./fr-ch.js":1074,"./fr.js":1072,"./fy":1075,"./fy.js":1075,"./ga":1076,"./ga.js":1076,"./gd":1077,"./gd.js":1077,"./gl":1078,"./gl.js":1078,"./gom-deva":1079,"./gom-deva.js":1079,"./gom-latn":1080,"./gom-latn.js":1080,"./gu":1081,"./gu.js":1081,"./he":1082,"./he.js":1082,"./hi":1083,"./hi.js":1083,"./hr":1084,"./hr.js":1084,"./hu":1085,"./hu.js":1085,"./hy-am":1086,"./hy-am.js":1086,"./id":1087,"./id.js":1087,"./is":1088,"./is.js":1088,"./it":1089,"./it-ch":1090,"./it-ch.js":1090,"./it.js":1089,"./ja":1091,"./ja.js":1091,"./jv":1092,"./jv.js":1092,"./ka":1093,"./ka.js":1093,"./kk":1094,"./kk.js":1094,"./km":1095,"./km.js":1095,"./kn":1096,"./kn.js":1096,"./ko":1097,"./ko.js":1097,"./ku":1098,"./ku.js":1098,"./ky":1099,"./ky.js":1099,"./lb":1100,"./lb.js":1100,"./lo":1101,"./lo.js":1101,"./lt":1102,"./lt.js":1102,"./lv":1103,"./lv.js":1103,"./me":1104,"./me.js":1104,"./mi":1105,"./mi.js":1105,"./mk":1106,"./mk.js":1106,"./ml":1107,"./ml.js":1107,"./mn":1108,"./mn.js":1108,"./mr":1109,"./mr.js":1109,"./ms":1110,"./ms-my":1111,"./ms-my.js":1111,"./ms.js":1110,"./mt":1112,"./mt.js":1112,"./my":1113,"./my.js":1113,"./nb":1114,"./nb.js":1114,"./ne":1115,"./ne.js":1115,"./nl":1116,"./nl-be":1117,"./nl-be.js":1117,"./nl.js":1116,"./nn":1118,"./nn.js":1118,"./oc-lnc":1119,"./oc-lnc.js":1119,"./pa-in":1120,"./pa-in.js":1120,"./pl":1121,"./pl.js":1121,"./pt":1122,"./pt-br":1123,"./pt-br.js":1123,"./pt.js":1122,"./ro":1124,"./ro.js":1124,"./ru":1125,"./ru.js":1125,"./sd":1126,"./sd.js":1126,"./se":1127,"./se.js":1127,"./si":1128,"./si.js":1128,"./sk":1129,"./sk.js":1129,"./sl":1130,"./sl.js":1130,"./sq":1131,"./sq.js":1131,"./sr":1132,"./sr-cyrl":1133,"./sr-cyrl.js":1133,"./sr.js":1132,"./ss":1134,"./ss.js":1134,"./sv":1135,"./sv.js":1135,"./sw":1136,"./sw.js":1136,"./ta":1137,"./ta.js":1137,"./te":1138,"./te.js":1138,"./tet":1139,"./tet.js":1139,"./tg":1140,"./tg.js":1140,"./th":1141,"./th.js":1141,"./tk":1142,"./tk.js":1142,"./tl-ph":1143,"./tl-ph.js":1143,"./tlh":1144,"./tlh.js":1144,"./tr":1145,"./tr.js":1145,"./tzl":1146,"./tzl.js":1146,"./tzm":1147,"./tzm-latn":1148,"./tzm-latn.js":1148,"./tzm.js":1147,"./ug-cn":1149,"./ug-cn.js":1149,"./uk":1150,"./uk.js":1150,"./ur":1151,"./ur.js":1151,"./uz":1152,"./uz-latn":1153,"./uz-latn.js":1153,"./uz.js":1152,"./vi":1154,"./vi.js":1154,"./x-pseudo":1155,"./x-pseudo.js":1155,"./yo":1156,"./yo.js":1156,"./zh-cn":1157,"./zh-cn.js":1157,"./zh-hk":1158,"./zh-hk.js":1158,"./zh-mo":1159,"./zh-mo.js":1159,"./zh-tw":1160,"./zh-tw.js":1160};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=1189},994:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var r,a=n(0),o=n.n(a),s=(n(477),n(166)),c=n(1163),i=n(299),u=n(1162),l=n(137),f=n(1016),p=n(976),m=n.n(p),j=n(19);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=E(e);if(t){var a=E(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?w(e):t}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=Object(s.connect)((function(e){var t=e.user,n=e.wallet;return _(_({},t),n)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(s,e);var t,n,r,a=g(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),x(w(t=a.call(this,e)),"goBack",(function(){t.props.history.goBack()})),x(w(t),"switchArr",(function(e){var n=t.state.showArr;n[e]=!n[e],t.setState({showArr:n})})),t.state={loading:!1,data:{},label:null,inputAddress:[],outputAddress:[],showArr:[!0,!0]},t}return t=s,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.transactions,r=t.location,a=t.match;if(!r.state||n.length<1||n[r.state.index].txid!=a.params.txid)return this.props.history.replace({pathname:"/money/home/0"});this.setState({loading:!0});var s=null,c=n[r.state.index],i=c.type,u=c.status;2==i?2==u&&(s=o.a.createElement("label",{className:m.a.success},Object(j.a)("tx_success"))):s=o.a.createElement("label",{className:m.a.success},Object(j.a)("receive"));var l=a.params.txid,f="https://chain.api.btc.com/v3/tx/".concat(l,"?verbose=3");fetch(f).then((function(e){return e.json()})).then((function(t){var n=t.data,r=[],a=[];n.inputs.forEach((function(e){r.push.apply(r,d(e.prev_addresses))})),n.outputs.forEach((function(e){a.push.apply(a,d(e.addresses))})),e.setState({loading:!1,data:n,label:s,inputAddress:r,outputAddress:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;if(!this.props.location.state)return this.props.history.replace({pathname:"/money/home/0"}),null;var t=this.state,n=t.loading,r=t.data,a=t.label,s=t.inputAddress,p=t.outputAddress,y=t.showArr;if(n)return o.a.createElement(i.a,null);var d=this.props,b=d.currentWallet,v=d.transactions,h=d.feerate,g=d.location,O=r.outputs_value,w=r.fee,E=r.confirmations,k=r.size,_=r.block_time,x=r.hash,N=b.name,S=v[g.state.index],P=S.note,z=S.type,R=S.price,D=2==z?"-":"+";return o.a.createElement("div",{style:{height:"100%",overflowY:"auto"}},o.a.createElement("div",{className:m.a.container},o.a.createElement("div",{className:m.a.w_info},o.a.createElement(u.a,{token:2}),o.a.createElement("div",{className:m.a.w_name},N),o.a.createElement("div",{className:m.a.tx_status},a),o.a.createElement("span",{className:m.a.goback,onClick:this.goBack}," ",Object(j.a)("back"))),o.a.createElement("div",{className:m.a.tx_info},o.a.createElement("div",{className:m.a.tx_row_1},o.a.createElement("div",{className:m.a.label},Object(j.a)("tx_amount")),o.a.createElement("div",{className:m.a.value},D," ",Object(f.d)(O)," BTC / ",D," ",o.a.createElement(c.a,{value:O,token:2,usd:R}))),o.a.createElement("div",{className:m.a.tx_row},o.a.createElement("div",{className:m.a.tx_col,style:{width:150}},o.a.createElement("div",{className:m.a.label},Object(j.a)("confirmations")),o.a.createElement("div",{className:m.a.value},E)),o.a.createElement("div",{className:m.a.tx_col},o.a.createElement("div",{className:m.a.label},Object(j.a)("timestamp")),o.a.createElement("div",{className:m.a.value},Object(f.e)(1e3*_)))),o.a.createElement("div",{className:m.a.tx_row},o.a.createElement("div",{className:m.a.tx_col,style:{width:150}},o.a.createElement("div",{className:m.a.label},Object(j.a)("fee_rate")),o.a.createElement("div",{className:m.a.value},Object(f.d)(h.btc)," sat/B")),o.a.createElement("div",{className:m.a.tx_col,style:{width:120}},o.a.createElement("div",{className:m.a.label},Object(j.a)("size")),o.a.createElement("div",{className:m.a.value},k)),o.a.createElement("div",{className:m.a.tx_col},o.a.createElement("div",{className:m.a.label},Object(j.a)("paid")),o.a.createElement("div",{className:m.a.value},Object(f.d)(w)," BTC"))),o.a.createElement("div",{className:m.a.tx_row_1},o.a.createElement("div",{className:m.a.label},"TX ID"),o.a.createElement("div",{className:m.a.value},x)),o.a.createElement("div",{className:m.a.tx_row_1},o.a.createElement("div",{className:m.a.label},o.a.createElement("span",null,Object(j.a)("input_addresses")),o.a.createElement("span",{onClick:function(){return e.switchArr(0)}},y[0]?o.a.createElement(l.a,{type:"iconchevron",style:{transform:"rotateX(180deg)"}}):o.a.createElement(l.a,{type:"iconchevron"}))),y[0]&&s.map((function(e){return o.a.createElement("div",{className:m.a.value,key:e},e)}))),o.a.createElement("div",{className:m.a.tx_row_1},o.a.createElement("div",{className:m.a.label},o.a.createElement("span",null,Object(j.a)("output_addresses")),o.a.createElement("span",{onClick:function(){return e.switchArr(1)}},y[1]?o.a.createElement(l.a,{type:"iconchevron",style:{transform:"rotateX(180deg)"}}):o.a.createElement(l.a,{type:"iconchevron"}))),y[1]&&p.map((function(e){return o.a.createElement("div",{className:m.a.value,key:e},e)}))),o.a.createElement("div",{className:m.a.tx_row_1},o.a.createElement("div",{className:m.a.label},Object(j.a)("message")),o.a.createElement("div",{className:m.a.value},P)))))}}])&&v(t.prototype,n),r&&v(t,r),s}(a.Component))||r}}]);