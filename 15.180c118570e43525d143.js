(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1222:function(e,t,n){"use strict";n(1189);var a,r=n(1195),o=(n(568),n(23)),i=(n(571),n(141)),c=n(1),l=n.n(c),u=n(165),s=n(216),p=n.n(s),f=[{name:"zh-cn",label:"简体中文",value:1},{name:"en-us",label:"English",value:2}],m=n(1057),d=n.n(m);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return C}));var E="."+document.domain.split(".").slice(document.domain.split(".").length-2).join("."),O=p.a.get("lang")||navigator.language;O=O.toLowerCase();var k,j,S=!1,_=!0,P=!1,x=void 0;try{for(var N,T=f[Symbol.iterator]();!(_=(N=T.next()).done);_=!0){if(N.value.name===O){S=!0;break}}}catch(e){P=!0,x=e}finally{try{_||null==T.return||T.return()}finally{if(P)throw x}}S||(O="zh-cn");var D=f.map((function(e){return e.name===O&&(k=e.label,j="flag-"+e.name),l.a.createElement(i.a.Item,{key:e.name},l.a.createElement("i",{className:[d.a.flag,d.a["flag-"+e.name]].join(" ")}),e.label)})),C=Object(u.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){w(e,t,n[t])}))}return e}({},e.user)}))(a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,v(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(a=[{key:"changeLang",value:function(e){var t=e.key;O!==t&&(this.props.dispatch({type:"user/save",payload:{lang:t}}),p.a.remove("lang"),p.a.set("lang",t,{domain:E}),window.location.reload())}},{key:"render",value:function(){var e=l.a.createElement(i.a,{onClick:this.changeLang.bind(this)},D);return l.a.createElement("div",{style:this.props.style,className:d.a.lang},l.a.createElement(r.a,{overlay:e},l.a.createElement("span",{className:"ant-dropdown-link"},l.a.createElement("i",{className:[d.a.flag,d.a[j]].join(" ")}),k," ",l.a.createElement(o.a,{type:"down"}))))}}])&&b(n.prototype,a),c&&b(n,c),t}(c.Component))||a},1327:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(568);var a=n(23),r=n(1),o=n.n(r),i=n(18);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=null,d=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return a=this,n=!(r=(e=u(t)).call.apply(e,[this].concat(i)))||"object"!==c(r)&&"function"!=typeof r?s(a):r,f(s(n),"saveBeforeInstallPromptEvent",(function(e){e.preventDefault(),m=e;var t=document.getElementById("J_addToDesk");t&&t.removeAttribute("hidden")})),f(s(n),"addToDesk",(function(e){m&&(m.prompt(),m.userChoice.then((function(e){e.outcome,m=null})))})),n}var n,r,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){window.addEventListener("beforeinstallprompt",this.saveBeforeInstallPromptEvent)}},{key:"render",value:function(){var e=this;return window.matchMedia("(display-mode: standalone)").matches||!0===window.navigator.standalone?null:o.a.createElement("span",{onClick:function(t){return e.addToDesk(t)},style:this.props.style,id:"J_addToDesk",hidden:!0}," ",o.a.createElement(a.a,{type:"download"}),Object(i.a)("add_to_desk"))}}])&&l(n.prototype,r),d&&l(n,d),t}(r.Component)},584:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return _}));n(566);var a=n(285),r=n(1),o=n.n(r),i=n(1085),c=n.n(i),l=(n(216),n(68),n(15)),u=n(1192),s=n.n(u),p=n(5),f=n(75),m=n(76),d=n(131),y=(n(1175),n(18)),b=n(1222),h=n(1327);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,n,a,r,o,i){try{var c=e[o](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(a,r)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function i(e){g(o,a,r,i,c,"next",e)}function c(e){g(o,a,r,i,c,"throw",e)}i(void 0)}))}}function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function k(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(t){function n(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=(e=k(this,j(n).call(this))).refresh();return e.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){E(e,t,n[t])}))}return e}({},t,{loading:!1,date:(new Date).getTime()}),e}var r,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(n,t),r=n,(i=[{key:"componentDidMount",value:function(){var e=this;this.polling=!0,this.pollingHandle();var t="hidden"in document?"hidden":"webkitHidden"in document?"webkitHidden":"mozHidden"in document?"mozHidden":null,n=t.replace(/hidden/i,"visibilitychange");document.addEventListener(n,(function(){document[t]?e.polling=!1:e.polling=!0,e.pollingHandle()})),window.localStorage.removeItem(l.b.LOGOUTIME)}},{key:"pollingHandle",value:function(){var t=this,n=0;setTimeout(w(regeneratorRuntime.mark((function a(){var r,o,i,c,u,s,m,y,b;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!t.polling){a.next=30;break}return n>9&&(n=0,t.setState({date:(new Date).getTime()})),n++,a.next=5,Object(d.c)(1e3);case 5:return r=t.state,o=r.pb,i=r.pk,a.next=8,f.a.polling(o);case 8:if(c=a.sent,console.log("res",c),!c||!c.key){a.next=28;break}if(t.setState({loading:!0}),u=c.key,s=c.data,m=c.token,a.prev=13,y=Object(p.computeSecret)(i.toHex(),u),b=Object(p.decrypt)(y,e.from(s,"hex")).toString(),window.sessionStorage.setItem(l.b.SEED,b),window.sessionStorage.setItem(l.b.UID,m),"tokens"!==t.props.match.params.type){a.next=21;break}return a.abrupt("return",window.location.href="".concat(window.location.origin).concat(window.location.search,"#/tokens/create"));case 21:return a.abrupt("return",window.location.href=l.r.redirect||"".concat(window.location.origin).concat(window.location.pathname).concat(window.location.search));case 25:a.prev=25,a.t0=a.catch(13),console.log(a.t0);case 28:a.next=0;break;case 30:case"end":return a.stop()}}),a,null,[[13,25]])}))))}},{key:"componentWillUnmount",value:function(){this.polling=!1,window.clearInterval(this.lv)}},{key:"refresh",value:function(){var e=new p.PrivateKey,t=e.toPublicKey(),n={pk:e,pb:t.toString()};return this.setState(n),n}},{key:"render",value:function(){if(this.state.tempSeed)return this.renderFromSeed();var e=this.state,t=e.pb,n=e.date,r="https://volt.id/login?key=login&id=".concat(t,"&t=").concat(n),i=this.props.match.params.type;return"tokens"===i?o.a.createElement("div",{className:c.a.container},o.a.createElement(a.a,{spinning:this.state.loading},o.a.createElement("div",{className:c.a.qrcode_wrap},o.a.createElement("div",{className:c.a.title},"Tokenize"),o.a.createElement("div",{className:c.a.desc},"Issue and manage your own utility token"),o.a.createElement("div",{className:c.a.qrcode},o.a.createElement(s.a,{value:r,style:{width:"160px",height:"160px"}})),o.a.createElement("div",{className:c.a.tips},Object(y.a)("scanApp"))),o.a.createElement(b.a,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"}}),o.a.createElement("div",{className:c.a.tk_desc},"UTP is a layer 1 token protocol based on Bitcoin, built with sCrypt smart contract language"))):"vusd"===i?o.a.createElement("div",{className:c.a.container},o.a.createElement(a.a,{spinning:this.state.loading},o.a.createElement("div",{className:c.a.qrcode_wrap,style:{backgroundColor:"#2F80ED"}},o.a.createElement("div",{className:c.a.title},"vUSD Interchange"),o.a.createElement("div",{className:c.a.qrcode},o.a.createElement(s.a,{value:r,style:{width:"160px",height:"160px"}})),o.a.createElement("div",{className:c.a.tips},Object(y.a)("scanApp")),o.a.createElement("div",{className:c.a.desc},"Please ensure you have USDC in your Volt account")),o.a.createElement(b.a,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"}}),o.a.createElement("div",{className:c.a.tk_desc},Object(y.a)("token_desc"),o.a.createElement("a",{style:{color:"#2F80ED",marginLeft:25},href:"http://volt.id/#/vtoken",target:"_blank  "},Object(y.a)("vtoken_destroy"))),o.a.createElement("div",{className:c.a.brands},o.a.createElement(m.a,{type:"iconlogo-maxthon",style:{fontSize:100,marginRight:40}}),o.a.createElement(m.a,{type:"iconlogo-showpay-interchange2",style:{fontSize:100,marginRight:40}}),o.a.createElement(m.a,{type:"iconlogo-volt-interchange",style:{fontSize:100}})))):o.a.createElement("div",{className:c.a.container},o.a.createElement(a.a,{spinning:this.state.loading},o.a.createElement("div",{className:c.a.qrcode_wrap},o.a.createElement("div",{className:c.a.logo},o.a.createElement(m.a,{type:"iconlogo-volt"})),o.a.createElement("div",{className:c.a.qrcode},o.a.createElement(s.a,{value:r,style:{width:"160px",height:"160px"}})),o.a.createElement("div",{className:c.a.tips},Object(y.a)("scanApp"))),o.a.createElement(b.a,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"}}),o.a.createElement("div",{style:{marginTop:30}},o.a.createElement(h.a,{style:{color:"#2bb696",cursor:"pointer",fontSize:20}}))))}}])&&O(r.prototype,i),u&&O(r,u),n}(r.Component)}.call(this,n(20).Buffer)}}]);