(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1087:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));n(1081);var r,o=n(1082),a=(n(423),n(21)),i=(n(428),n(129)),c=n(0),l=n.n(c),u=n(156),s=n(203),f=n.n(s),p=[{name:"zh-cn",label:"简体中文",value:1},{name:"en-us",label:"English",value:2}],y=n(903),b=n.n(y);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E="."+document.domain.split(".").slice(document.domain.split(".").length-2).join("."),k=f.a.get("lang")||navigator.language;k=k.toLowerCase();var P,S,_=!1,x=!0,D=!1,T=void 0;try{for(var C,N=p[Symbol.iterator]();!(x=(C=N.next()).done);x=!0){if(C.value.name===k){_=!0;break}}}catch(e){D=!0,T=e}finally{try{x||null==N.return||N.return()}finally{if(D)throw T}}_||(k="zh-cn");var H=p.map((function(e){return e.name===k&&(P=e.label,S="flag-"+e.name),l.a.createElement(i.a.Item,{key:e.name},l.a.createElement("i",{className:[b.a.flag,b.a["flag-"+e.name]].join(" ")}),e.label)})),I=Object(u.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.user)}))(r=function(e){function t(){return m(this,t),h(this,g(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(r=[{key:"changeLang",value:function(e){var t=e.key;k!==t&&(this.props.dispatch({type:"user/save",payload:{lang:t}}),f.a.remove("lang"),f.a.set("lang",t,{domain:E}),window.location.reload())}},{key:"render",value:function(){var e=l.a.createElement(i.a,{onClick:this.changeLang.bind(this)},H);return l.a.createElement("div",{style:this.props.style,className:b.a.lang},l.a.createElement(o.a,{overlay:e},l.a.createElement("span",{className:"ant-dropdown-link"},l.a.createElement("i",{className:[b.a.flag,b.a[S]].join(" ")}),P," ",l.a.createElement(a.a,{type:"down"}))))}}])&&v(n.prototype,r),c&&v(n,c),t}(c.Component))||r},1122:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),o=n.n(r),a=n(18);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=null,d=function(e){function t(){var e,n;c(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return y(f(n=u(this,(e=s(t)).call.apply(e,[this].concat(o)))),"saveBeforeInstallPromptEvent",(function(e){e.preventDefault(),b=e;var t=document.getElementById("J_addToDesk");t&&t.removeAttribute("hidden")})),y(f(n),"addToDesk",(function(e){b&&(b.prompt(),b.userChoice.then((function(e){e.outcome,b=null})))})),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){window.addEventListener("beforeinstallprompt",this.saveBeforeInstallPromptEvent)}},{key:"render",value:function(){var e=this;return window.matchMedia("(display-mode: standalone)").matches||!0===window.navigator.standalone?null:o.a.createElement("span",{onClick:function(t){return e.addToDesk(t)},style:this.props.style,id:"J_addToDesk",hidden:!0},Object(a.a)("add_to_desk"))}}])&&l(n.prototype,r),i&&l(n,i),t}(r.Component)},927:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return x}));n(421);var r=n(274),o=n(0),a=n.n(o),i=n(928),c=n.n(i),l=(n(203),n(61)),u=n(19),s=n(1088),f=n.n(s),p=n(4),y=n(105),b=n(107),d=n(120),m=(n(1075),n(18)),v=n(1087),h=n(1122);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){w(a,r,o,i,c,"next",e)}function c(e){w(a,r,o,i,c,"throw",e)}i(void 0)}))}}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var x=function(t){function n(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=(e=P(this,S(n).call(this))).refresh();return e.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){E(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{loading:!1}),e}var o,i,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(n,t),o=n,(i=[{key:"componentDidMount",value:function(){var e=this;this.polling=!0,this.pollingHandle();var t="hidden"in document?"hidden":"webkitHidden"in document?"webkitHidden":"mozHidden"in document?"mozHidden":null,n=t.replace(/hidden/i,"visibilitychange");document.addEventListener(n,(function(){document[t]?e.polling=!1:e.polling=!0,e.pollingHandle()}))}},{key:"pollingHandle",value:function(){var t=this;setTimeout(O(regeneratorRuntime.mark((function n(){var r,o,a,i,c,l,s,f,b;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.polling){n.next=25;break}return n.next=3,Object(d.c)(1e3);case 3:return r=t.state,o=r.pb,a=r.pk,n.next=6,y.a.polling(o);case 6:if(i=n.sent,console.log("res",i),!i||!i.key){n.next=23;break}return t.setState({loading:!0}),c=i.key,l=i.data,s=i.token,n.prev=11,f=Object(p.computeSecret)(a.toHex(),c),b=Object(p.decrypt)(f,e.from(l,"hex")).toString(),window.localStorage.setItem(u.a.SEED,b),window.localStorage.setItem(u.a.UID,s),n.abrupt("return",window.location.href=u.h.redirect||"".concat(window.location.origin).concat(window.location.pathname));case 20:n.prev=20,n.t0=n.catch(11),console.log(n.t0);case 23:n.next=0;break;case 25:case"end":return n.stop()}}),n,null,[[11,20]])}))))}},{key:"componentWillUnmount",value:function(){this.polling=!1,window.clearInterval(this.lv)}},{key:"refresh",value:function(){var e=new p.PrivateKey,t=e.toPublicKey(),n={pk:e,pb:t.toString()};return this.setState(n),n}},{key:"render",value:function(){if(this.state.tempSeed)return this.renderFromSeed();var e=this.state.pb,t="https://volt.id/login?key=login&id=".concat(e);return a.a.createElement("div",{className:c.a.container},a.a.createElement(r.a,{spinning:this.state.loading},a.a.createElement("div",{className:c.a.qrcode_wrap},a.a.createElement("div",{className:c.a.logo},a.a.createElement(b.a,{type:"iconlogo-volt"})),a.a.createElement("div",{className:c.a.qrcode},a.a.createElement(f.a,{value:t,style:{width:"160px",height:"160px"}})),a.a.createElement("div",{className:c.a.tips},Object(m.a)("scanApp"))),a.a.createElement(v.a,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"}}),a.a.createElement("div",{style:{marginTop:30}},a.a.createElement(h.a,{style:{color:"#2bb696",cursor:"pointer"}}))))}}])&&k(o.prototype,i),s&&k(o,s),n}(o.Component)}.call(this,n(17).Buffer)}}]);