(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1083:function(e,t,n){"use strict";n.d(t,"a",(function(){return T}));n(1072);var r,o=n(1075),a=(n(420),n(20)),i=(n(422),n(129)),c=n(0),l=n.n(c),u=n(272),f=(n(425),[{name:"zh-cn",label:"简体中文",value:1},{name:"en-us",label:"English",value:2}]),s=n(899),p=n.n(s),y=n(30);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}document.domain.split(".").slice(document.domain.split(".").length-2).join(".");var j,P,E=window.localStorage.getItem(y.a.LANG),S=!1,k=!0,_=!1,x=void 0;try{for(var N,D=f[Symbol.iterator]();!(k=(N=D.next()).done);k=!0){if(N.value.name===E){S=!0;break}}}catch(e){_=!0,x=e}finally{try{k||null==D.return||D.return()}finally{if(_)throw x}}S||(E="zh-cn");var I=f.map((function(e){return e.name===E&&(j=e.label,P="flag-"+e.name),l.a.createElement(i.a.Item,{key:e.name},l.a.createElement("i",{className:[p.a.flag,p.a["flag-"+e.name]].join(" ")}),e.label)})),T=Object(u.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.user)}))(r=function(e){function t(){return m(this,t),h(this,v(t).apply(this,arguments))}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),n=t,(r=[{key:"changeLang",value:function(e){var t=e.key;E!==t&&(this.props.dispatch({type:"user/save",payload:{lang:t}}),window.localStorage.setItem(y.a.LANG,t),window.location.reload())}},{key:"render",value:function(){var e=l.a.createElement(i.a,{onClick:this.changeLang.bind(this)},I);return l.a.createElement("div",{style:this.props.style,className:p.a.lang},l.a.createElement(o.a,{overlay:e},l.a.createElement("span",{className:"ant-dropdown-link"},l.a.createElement("i",{className:[p.a.flag,p.a[P]].join(" ")}),j," ",l.a.createElement(a.a,{type:"caret-down"}))))}}])&&d(n.prototype,r),c&&d(n,c),t}(c.Component))||r},1118:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(18);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var s=null;r.Component},923:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",(function(){return _}));n(418);var r=n(273),o=n(0),a=n.n(o),i=n(924),c=n.n(i),l=(n(425),n(58)),u=n(30),f=n(1084),s=n.n(f),p=n(3),y=n(105),b=n(127),m=n(119),d=(n(1071),n(18)),h=n(1083);n(1118);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){g(a,r,o,i,c,"next",e)}function c(e){g(a,r,o,i,c,"throw",e)}i(void 0)}))}}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var _=function(t){function n(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=(e=E(this,S(n).call(this))).refresh();return e.state=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{loading:!1}),e}var o,i,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(n,t),o=n,(i=[{key:"componentDidMount",value:function(){var t=this;this.polling=!0,setTimeout(O(regeneratorRuntime.mark((function n(){var r,o,a,i,c,l,f,s,b;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.polling){n.next=25;break}return n.next=3,Object(m.c)(2e3);case 3:return r=t.state,o=r.pb,a=r.pk,n.next=6,y.a.polling(o);case 6:if(i=n.sent,console.log("res",i),!i||!i.key){n.next=23;break}return t.setState({loading:!0}),c=i.key,l=i.data,f=i.token,n.prev=11,s=Object(p.computeSecret)(a.toHex(),c),b=Object(p.decrypt)(s,e.from(l,"hex")).toString(),window.localStorage.setItem(u.a.SEED,b),window.localStorage.setItem(u.a.UID,f),n.abrupt("return",window.location.href=u.h.redirect||"".concat(window.location.origin).concat(window.location.pathname));case 20:n.prev=20,n.t0=n.catch(11),console.log(n.t0);case 23:n.next=0;break;case 25:case"end":return n.stop()}}),n,null,[[11,20]])}))))}},{key:"componentWillUnmount",value:function(){this.polling=!1,window.clearInterval(this.lv)}},{key:"refresh",value:function(){var e=new p.PrivateKey,t=e.toPublicKey(),n={pk:e,pb:t.toString()};return this.setState(n),n}},{key:"render",value:function(){if(this.state.tempSeed)return this.renderFromSeed();var e=this.state.pb,t="https://volt.id/login?key=login&id=".concat(e);return a.a.createElement("div",{className:c.a.container},a.a.createElement(r.a,{spinning:this.state.loading},a.a.createElement("div",{className:c.a.qrcode_wrap},a.a.createElement("div",{className:c.a.logo},a.a.createElement(b.a,{type:"iconlogo-volt"})),a.a.createElement("div",{className:c.a.qrcode},a.a.createElement(s.a,{value:t,style:{width:"160px",height:"160px"}}))),a.a.createElement(h.a,{style:{textAlign:"right",marginTop:"10px",marginRight:"20px"}}),a.a.createElement("div",{className:c.a.tips},Object(d.a)("scanApp")),a.a.createElement("div",{className:c.a.download},a.a.createElement("a",{href:"https://volt.id/#/",target:"_blank",rel:"noopener noreferrer"},Object(d.a)("downloadApp"))),a.a.createElement("div",{style:{marginTop:20}},a.a.createElement(l.Link,{to:"/user/signin"},Object(d.a)("old_entry")))))}}])&&P(o.prototype,i),f&&P(o,f),n}(o.Component)}.call(this,n(17).Buffer)}}]);