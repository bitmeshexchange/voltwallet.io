(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1090:function(e,t,n){"use strict";n.d(t,"a",(function(){return H}));n(1087);var r,o=n(1088),a=(n(423),n(21)),i=(n(428),n(129)),c=n(0),l=n.n(c),u=n(156),f=n(203),s=n.n(f),p=[{name:"zh-cn",label:"简体中文",value:1},{name:"en-us",label:"English",value:2}],y=n(904),b=n.n(y);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E="."+document.domain.split(".").slice(document.domain.split(".").length-2).join("."),P=s.a.get("lang")||navigator.language;P=P.toLowerCase();var k,S,_=!1,x=!0,D=!1,T=void 0;try{for(var C,I=p[Symbol.iterator]();!(x=(C=I.next()).done);x=!0){if(C.value.name===P){_=!0;break}}}catch(e){D=!0,T=e}finally{try{x||null==I.return||I.return()}finally{if(D)throw T}}_||(P="zh-cn");var N=p.map((function(e){return e.name===P&&(k=e.label,S="flag-"+e.name),l.a.createElement(i.a.Item,{key:e.name},l.a.createElement("i",{className:[b.a.flag,b.a["flag-"+e.name]].join(" ")}),e.label)})),H=Object(u.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.user)}))(r=function(e){function t(){return m(this,t),h(this,g(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,e),n=t,(r=[{key:"changeLang",value:function(e){var t=e.key;P!==t&&(this.props.dispatch({type:"user/save",payload:{lang:t}}),s.a.remove("lang"),s.a.set("lang",t,{domain:E}),window.location.reload())}},{key:"render",value:function(){var e=l.a.createElement(i.a,{onClick:this.changeLang.bind(this)},N);return l.a.createElement("div",{style:this.props.style,className:b.a.lang},l.a.createElement(o.a,{overlay:e},l.a.createElement("span",{className:"ant-dropdown-link"},l.a.createElement("i",{className:[b.a.flag,b.a[S]].join(" ")}),k," ",l.a.createElement(a.a,{type:"down"}))))}}])&&v(n.prototype,r),c&&v(n,c),t}(c.Component))||r},1125:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),o=n.n(r),a=n(18);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?s(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=null,d=function(e){function t(){var e,n;c(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return y(s(n=u(this,(e=f(t)).call.apply(e,[this].concat(o)))),"saveBeforeInstallPromptEvent",(function(e){e.preventDefault(),b=e;var t=document.getElementById("J_addToDesk");t&&t.removeAttribute("hidden")})),y(s(n),"addToDesk",(function(e){b&&(b.prompt(),b.userChoice.then((function(e){e.outcome,b=null})))})),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){window.addEventListener("beforeinstallprompt",this.saveBeforeInstallPromptEvent)}},{key:"render",value:function(){var e=this;return window.matchMedia("(display-mode: standalone)").matches||!0===window.navigator.standalone?null:o.a.createElement("span",{onClick:function(t){return e.addToDesk(t)},style:this.props.style,id:"J_addToDesk",hidden:!0},Object(a.a)("add_to_desk"))}}])&&l(n.prototype,r),i&&l(n,i),t}(r.Component)},930:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return _}));n(421);var r=n(274),o=n(0),a=n.n(o),i=n(931),c=n.n(i),l=(n(203),n(61),n(19)),u=n(1091),f=n.n(u),s=n(4),p=n(105),y=n(107),b=n(120),d=(n(1078),n(18)),m=n(1090),v=n(1125);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){g(a,r,o,i,c,"next",e)}function c(e){g(a,r,o,i,c,"throw",e)}i(void 0)}))}}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(t){function n(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=(e=P(this,k(n).call(this))).refresh();return e.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{loading:!1}),e}var o,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(n,t),o=n,(i=[{key:"componentDidMount",value:function(){var e=this;this.polling=!0,this.pollingHandle();var t="hidden"in document?"hidden":"webkitHidden"in document?"webkitHidden":"mozHidden"in document?"mozHidden":null,n=t.replace(/hidden/i,"visibilitychange");document.addEventListener(n,(function(){document[t]?e.polling=!1:e.polling=!0,e.pollingHandle()})),window.localStorage.removeItem(l.a.LOGOUTIME)}},{key:"pollingHandle",value:function(){var t=this;setTimeout(w(regeneratorRuntime.mark((function n(){var r,o,a,i,c,u,f,y,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.polling){n.next=25;break}return n.next=3,Object(b.c)(1e3);case 3:return r=t.state,o=r.pb,a=r.pk,n.next=6,p.a.polling(o);case 6:if(i=n.sent,console.log("res",i),!i||!i.key){n.next=23;break}return t.setState({loading:!0}),c=i.key,u=i.data,f=i.token,n.prev=11,y=Object(s.computeSecret)(a.toHex(),c),d=Object(s.decrypt)(y,e.from(u,"hex")).toString(),window.localStorage.setItem(l.a.SEED,d),window.localStorage.setItem(l.a.UID,f),n.abrupt("return",window.location.href=l.h.redirect||"".concat(window.location.origin).concat(window.location.pathname).concat(window.location.search));case 20:n.prev=20,n.t0=n.catch(11),console.log(n.t0);case 23:n.next=0;break;case 25:case"end":return n.stop()}}),n,null,[[11,20]])}))))}},{key:"componentWillUnmount",value:function(){this.polling=!1,window.clearInterval(this.lv)}},{key:"refresh",value:function(){var e=new s.PrivateKey,t=e.toPublicKey(),n={pk:e,pb:t.toString()};return this.setState(n),n}},{key:"render",value:function(){if(this.state.tempSeed)return this.renderFromSeed();var e=this.state.pb,t="https://volt.id/login?key=login&id=".concat(e);return a.a.createElement("div",{className:c.a.container},a.a.createElement(r.a,{spinning:this.state.loading},a.a.createElement("div",{className:c.a.qrcode_wrap},a.a.createElement("div",{className:c.a.logo},a.a.createElement(y.a,{type:"iconlogo-volt"})),a.a.createElement("div",{className:c.a.qrcode},a.a.createElement(f.a,{value:t,style:{width:"160px",height:"160px"}})),a.a.createElement("div",{className:c.a.tips},Object(d.a)("scanApp"))),a.a.createElement(m.a,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"}}),a.a.createElement("div",{style:{marginTop:30}},a.a.createElement(v.a,{style:{color:"#2bb696",cursor:"pointer"}}))))}}])&&E(o.prototype,i),u&&E(o,u),n}(o.Component)}.call(this,n(17).Buffer)}}]);