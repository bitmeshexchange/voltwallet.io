(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1067:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return P}));n(560);var o=n(281),r=n(1),a=n.n(r),i=n(1068),c=n.n(i),l=(n(216),n(74),n(17)),u=n(1138),f=n.n(u),s=n(5),p=n(84),y=n(139),d=n(130),m=(n(1114),n(19)),b=n(1134),v=n(1213);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,n,o,r,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(o,r)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function i(e){g(a,o,r,i,c,"next",e)}function c(e){g(a,o,r,i,c,"throw",e)}i(void 0)}))}}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function E(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=function(t){function n(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=(e=E(this,k(n).call(this))).refresh();return e.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){O(e,t,n[t])}))}return e}({},t,{loading:!1,date:(new Date).getTime()}),e}var r,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(n,t),r=n,(i=[{key:"componentDidMount",value:function(){var e=this;this.polling=!0,this.pollingHandle();var t="hidden"in document?"hidden":"webkitHidden"in document?"webkitHidden":"mozHidden"in document?"mozHidden":null,n=t.replace(/hidden/i,"visibilitychange");document.addEventListener(n,(function(){document[t]?e.polling=!1:e.polling=!0,e.pollingHandle()})),window.localStorage.removeItem(l.a.LOGOUTIME)}},{key:"pollingHandle",value:function(){var t=this,n=0;setTimeout(w(regeneratorRuntime.mark((function o(){var r,a,i,c,u,f,y,m,b;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(!t.polling){o.next=27;break}return n>9&&(n=0,t.setState({date:(new Date).getTime()})),n++,o.next=5,Object(d.c)(1e3);case 5:return r=t.state,a=r.pb,i=r.pk,o.next=8,p.a.polling(a);case 8:if(c=o.sent,console.log("res",c),!c||!c.key){o.next=25;break}return t.setState({loading:!0}),u=c.key,f=c.data,y=c.token,o.prev=13,m=Object(s.computeSecret)(i.toHex(),u),b=Object(s.decrypt)(m,e.from(f,"hex")).toString(),window.sessionStorage.setItem(l.a.SEED,b),window.sessionStorage.setItem(l.a.UID,y),o.abrupt("return",window.location.href=l.m.redirect||"".concat(window.location.origin).concat(window.location.pathname).concat(window.location.search));case 22:o.prev=22,o.t0=o.catch(13),console.log(o.t0);case 25:o.next=0;break;case 27:case"end":return o.stop()}}),o,null,[[13,22]])}))))}},{key:"componentWillUnmount",value:function(){this.polling=!1,window.clearInterval(this.lv)}},{key:"refresh",value:function(){var e=new s.PrivateKey,t=e.toPublicKey(),n={pk:e,pb:t.toString()};return this.setState(n),n}},{key:"render",value:function(){if(this.state.tempSeed)return this.renderFromSeed();var e=this.state,t=e.pb,n=e.date,r="https://volt.id/login?key=login&id=".concat(t,"&t=").concat(n);return a.a.createElement("div",{className:c.a.container},a.a.createElement(o.a,{spinning:this.state.loading},a.a.createElement("div",{className:c.a.qrcode_wrap},a.a.createElement("div",{className:c.a.logo},a.a.createElement(y.a,{type:"iconlogo-volt"})),a.a.createElement("div",{className:c.a.qrcode},a.a.createElement(f.a,{value:r,style:{width:"160px",height:"160px"}})),a.a.createElement("div",{className:c.a.tips},Object(m.a)("scanApp"))),a.a.createElement(b.a,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"}}),a.a.createElement("div",{style:{marginTop:30}},a.a.createElement(v.a,{style:{color:"#2bb696",cursor:"pointer",fontSize:20}}))))}}])&&j(r.prototype,i),u&&j(r,u),n}(r.Component)}.call(this,n(20).Buffer)},1134:function(e,t,n){"use strict";n(1111);var o,r=n(1115),a=(n(562),n(23)),i=(n(565),n(168)),c=n(1),l=n.n(c),u=n(165),f=n(216),s=n.n(f),p=[{name:"zh-cn",label:"简体中文",value:1},{name:"en-us",label:"English",value:2}],y=n(1038),d=n.n(y);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return I}));var O="."+document.domain.split(".").slice(document.domain.split(".").length-2).join("."),j=s.a.get("lang")||navigator.language;j=j.toLowerCase();var E,k,S=!1,P=!0,_=!1,x=void 0;try{for(var T,D=p[Symbol.iterator]();!(P=(T=D.next()).done);P=!0){if(T.value.name===j){S=!0;break}}}catch(e){_=!0,x=e}finally{try{P||null==D.return||D.return()}finally{if(_)throw x}}S||(j="zh-cn");var C=p.map((function(e){return e.name===j&&(E=e.label,k="flag-"+e.name),l.a.createElement(i.a.Item,{key:e.name},l.a.createElement("i",{className:[d.a.flag,d.a["flag-"+e.name]].join(" ")}),e.label)})),I=Object(u.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){w(e,t,n[t])}))}return e}({},e.user)}))(o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,h(t).apply(this,arguments))}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(o=[{key:"changeLang",value:function(e){var t=e.key;j!==t&&(this.props.dispatch({type:"user/save",payload:{lang:t}}),s.a.remove("lang"),s.a.set("lang",t,{domain:O}),window.location.reload())}},{key:"render",value:function(){var e=l.a.createElement(i.a,{onClick:this.changeLang.bind(this)},C);return l.a.createElement("div",{style:this.props.style,className:d.a.lang},l.a.createElement(r.a,{overlay:e},l.a.createElement("span",{className:"ant-dropdown-link"},l.a.createElement("i",{className:[d.a.flag,d.a[k]].join(" ")}),E," ",l.a.createElement(a.a,{type:"down"}))))}}])&&b(n.prototype,o),c&&b(n,c),t}(c.Component))||o},1213:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(562);var o=n(23),r=n(1),a=n.n(r),i=n(19);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=null,d=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return o=this,n=!(r=(e=u(t)).call.apply(e,[this].concat(i)))||"object"!==c(r)&&"function"!=typeof r?f(o):r,p(f(n),"saveBeforeInstallPromptEvent",(function(e){e.preventDefault(),y=e;var t=document.getElementById("J_addToDesk");t&&t.removeAttribute("hidden")})),p(f(n),"addToDesk",(function(e){y&&(y.prompt(),y.userChoice.then((function(e){e.outcome,y=null})))})),n}var n,r,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){window.addEventListener("beforeinstallprompt",this.saveBeforeInstallPromptEvent)}},{key:"render",value:function(){var e=this;return window.matchMedia("(display-mode: standalone)").matches||!0===window.navigator.standalone?null:a.a.createElement("span",{onClick:function(t){return e.addToDesk(t)},style:this.props.style,id:"J_addToDesk",hidden:!0}," ",a.a.createElement(o.a,{type:"download"}),Object(i.a)("add_to_desk"))}}])&&l(n.prototype,r),d&&l(n,d),t}(r.Component)}}]);