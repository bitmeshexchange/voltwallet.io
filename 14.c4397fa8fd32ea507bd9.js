(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1301:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));n(1261);var r,o=n(1300),a=(n(609),n(23)),i=(n(613),n(163)),c=n(0),l=n.n(c),u=n(170),s=n(218),f=n.n(s),p=[{name:"zh-cn",label:"简体中文",value:1},{name:"en-us",label:"English",value:2}],y=n(1113),m=n.n(y);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=O(e);if(t){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S="."+document.domain.split(".").slice(document.domain.split(".").length-2).join("."),P=f.a.get("lang")||navigator.language;P=P.toLowerCase();var _,x,D,R=!1,N=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}(p);try{for(N.s();!(_=N.n()).done;){if(_.value.name===P){R=!0;break}}}catch(e){N.e(e)}finally{N.f()}R||(P="zh-cn");var T=p.map((function(e){return e.name===P&&(x=e.label,D="flag-"+e.name),l.a.createElement(i.a.Item,{key:e.name},l.a.createElement("i",{className:[m.a.flag,m.a["flag-"+e.name]].join(" ")}),e.label)})),I=Object(u.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.user)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(u,e);var t,n,r,c=g(u);function u(){return b(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"changeLang",value:function(e){var t=e.key;P!==t&&(this.props.dispatch({type:"user/save",payload:{lang:t}}),f.a.remove("lang"),f.a.set("lang",t,{domain:S}),window.location.reload())}},{key:"render",value:function(){var e=l.a.createElement(i.a,{onClick:this.changeLang.bind(this)},T);return l.a.createElement("div",{style:this.props.style,className:m.a.lang},l.a.createElement(o.a,{overlay:e},l.a.createElement("span",{className:"ant-dropdown-link"},l.a.createElement("i",{className:[m.a.flag,m.a[D]].join(" ")}),x," ",l.a.createElement(a.a,{type:"down"}))))}}])&&h(t.prototype,n),r&&h(t,r),u}(c.Component))||r},1347:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));n(609);var r=n(23),o=n(0),a=n.n(o),i=n(17);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=null,h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(p,e);var t,n,o,c=f(p);function p(){var e;l(this,p);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return d(y(e=c.call.apply(c,[this].concat(n))),"saveBeforeInstallPromptEvent",(function(e){e.preventDefault(),b=e;var t=document.getElementById("J_addToDesk");t&&t.removeAttribute("hidden")})),d(y(e),"addToDesk",(function(e){b&&(b.prompt(),b.userChoice.then((function(e){e.outcome,b=null})))})),e}return t=p,(n=[{key:"componentDidMount",value:function(){window.addEventListener("beforeinstallprompt",this.saveBeforeInstallPromptEvent)}},{key:"render",value:function(){var e=this;return window.matchMedia("(display-mode: standalone)").matches||!0===window.navigator.standalone?null:a.a.createElement("span",{onClick:function(t){return e.addToDesk(t)},style:this.props.style,id:"J_addToDesk",hidden:!0}," ",a.a.createElement(r.a,{type:"download"}),Object(i.a)("add_to_desk"))}}])&&u(t.prototype,n),o&&u(t,o),p}(o.Component)},627:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return D}));n(607);var r=n(300),o=n(0),a=n.n(o),i=n(1143),c=n.n(i),l=(n(218),n(67),n(11)),u=n(1229),s=n.n(u),f=n(4),p=n(32),y=n(74),m=n(167),d=(n(1240),n(17)),b=n(1301),h=n(1347);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){g(a,r,o,i,c,"next",e)}function c(e){g(a,r,o,i,c,"throw",e)}i(void 0)}))}}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return _(this,n)}}function _(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var D=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(v,t);var n,o,i,u=P(v);function v(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v);var t=(e=u.call(this)).refresh();return e.state=E(E({},t),{},{loading:!1,date:(new Date).getTime()}),e}return n=v,(o=[{key:"componentDidMount",value:function(){var e=this;this.polling=!0,this.pollingHandle();var t="hidden"in document?"hidden":"webkitHidden"in document?"webkitHidden":"mozHidden"in document?"mozHidden":null,n=t.replace(/hidden/i,"visibilitychange");document.addEventListener(n,(function(){document[t]?e.polling=!1:e.polling=!0,e.pollingHandle()})),window.localStorage.removeItem(l.b.LOGOUTIME)}},{key:"pollingHandle",value:function(){var t=this,n=0;setTimeout(w(regeneratorRuntime.mark((function r(){var o,a,i,c,u,s,y,d,b;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.polling){r.next=29;break}return n>9&&(n=0,t.setState({date:(new Date).getTime()})),n++,r.next=5,Object(m.c)(1e3);case 5:return o=t.state,a=o.pb,i=o.pk,r.next=8,p.a.polling(a);case 8:if(!(c=r.sent)||!c.key){r.next=27;break}if(t.setState({loading:!0}),u=c.key,s=c.data,y=c.token,r.prev=12,d=Object(f.computeSecret)(i.toHex(),u),b=Object(f.decrypt)(d,e.from(s,"hex")).toString(),window.sessionStorage.setItem(l.b.SEED,b),window.sessionStorage.setItem(l.b.UID,y),"tokens"!==t.props.match.params.type){r.next=20;break}return r.abrupt("return",window.location.href="".concat(window.location.origin).concat(window.location.search,"#/tokens/create"));case 20:return r.abrupt("return",window.location.href=l.p.redirect||"".concat(window.location.origin).concat(window.location.pathname).concat(window.location.search));case 24:r.prev=24,r.t0=r.catch(12),console.log(r.t0);case 27:r.next=0;break;case 29:case"end":return r.stop()}}),r,null,[[12,24]])}))))}},{key:"componentWillUnmount",value:function(){this.polling=!1,window.clearInterval(this.lv)}},{key:"refresh",value:function(){var e=new f.PrivateKey,t=e.toPublicKey();return{pk:e,pb:t.toString()}}},{key:"render",value:function(){if(this.state.tempSeed)return this.renderFromSeed();var e=this.state,t=e.pb,n=e.date,o="https://volt.id/login?key=login&id=".concat(t,"&t=").concat(n),i=this.props.match.params.type;return"tokens"===i?a.a.createElement("div",{className:c.a.container},a.a.createElement(r.a,{spinning:this.state.loading},a.a.createElement("div",{className:c.a.qrcode_wrap},a.a.createElement("div",{className:c.a.title},"Tokenize"),a.a.createElement("div",{className:c.a.desc},"Issue and manage your own utility token"),a.a.createElement("div",{className:c.a.qrcode},a.a.createElement(s.a,{value:o,style:{width:"160px",height:"160px"}})),a.a.createElement("div",{className:c.a.tips},Object(d.a)("scanApp"))),a.a.createElement(b.a,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"}}),a.a.createElement("div",{className:c.a.tk_desc},"BTP is a layer 1 token protocol based on Bitcoin, built with sCrypt smart contract language"))):"vusd"===i?a.a.createElement("div",{className:c.a.container},a.a.createElement(r.a,{spinning:this.state.loading},a.a.createElement("div",{className:c.a.qrcode_wrap,style:{backgroundColor:"#2F80ED"}},a.a.createElement("div",{className:c.a.title},"vUSD Interchange"),a.a.createElement("div",{className:c.a.qrcode},a.a.createElement(s.a,{value:o,style:{width:"160px",height:"160px"}})),a.a.createElement("div",{className:c.a.tips},Object(d.a)("scanApp")),a.a.createElement("div",{className:c.a.desc},"Please ensure you have USDC in your Volt account")),a.a.createElement(b.a,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"}}),a.a.createElement("div",{className:c.a.tk_desc},Object(d.a)("token_desc"),a.a.createElement("a",{style:{color:"#2F80ED",marginLeft:25},href:"http://volt.id/#/vtoken",target:"_blank  "},Object(d.a)("vtoken_destroy"))),a.a.createElement("div",{className:c.a.brands},a.a.createElement(y.a,{type:"iconlogo-maxthon",style:{fontSize:100,marginRight:40}}),a.a.createElement(y.a,{type:"iconlogo-showpay-interchange2",style:{fontSize:100,marginRight:40}}),a.a.createElement(y.a,{type:"iconlogo-volt-interchange",style:{fontSize:100}})))):a.a.createElement("div",{className:c.a.container},a.a.createElement(r.a,{spinning:this.state.loading},a.a.createElement("div",{className:c.a.qrcode_wrap},a.a.createElement("div",{className:c.a.logo},a.a.createElement(y.a,{type:"iconlogo-volt"})),a.a.createElement("div",{className:c.a.qrcode},a.a.createElement(s.a,{value:o,style:{width:"160px",height:"160px"}})),a.a.createElement("div",{className:c.a.tips},Object(d.a)("scanApp"))),a.a.createElement(b.a,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"}}),a.a.createElement("div",{style:{marginTop:30}},a.a.createElement(h.a,{style:{color:"#2bb696",cursor:"pointer",fontSize:20}}))))}}])&&k(n.prototype,o),i&&k(n,i),v}(o.Component)}.call(this,n(22).Buffer)}}]);