(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{929:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return E}));a(423);var n=a(128),r=(a(426),a(21)),c=a(0),o=a.n(c),l=a(930),i=a.n(l),s=a(17);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?v(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var E=function(e){function t(){var e,a;m(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return d(v(a=b(this,(e=p(t)).call.apply(e,[this].concat(r)))),"goBack",(function(){a.props.history.goBack()})),a}var a,c,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),a=t,(c=[{key:"render",value:function(){var e=this.props.sign?Object(s.a)("tobeSignedTrans"):Object(s.a)("signedTrans");return o.a.createElement("div",{className:i.a.container},o.a.createElement("div",{className:i.a.header},o.a.createElement("span",{className:i.a.left,onClick:this.goBack},o.a.createElement(r.a,{type:"left"})," ",Object(s.a)("back")),o.a.createElement("div",{className:i.a.title},e)),o.a.createElement("div",{className:i.a.list},o.a.createElement("div",{className:i.a.item},o.a.createElement("div",{className:i.a.label},Object(s.a)("originator")),o.a.createElement("div",{className:i.a.value},"采购部李部长")),o.a.createElement("div",{className:i.a.item},o.a.createElement("div",{className:i.a.label},Object(s.a)("receiver")),o.a.createElement("div",{className:i.a.value},"xxx技术有限公司")),o.a.createElement("div",{className:i.a.item},o.a.createElement("div",{className:i.a.label},Object(s.a)("amount")),o.a.createElement("div",{className:i.a.value},"100BSV")),o.a.createElement("div",{className:i.a.item},o.a.createElement("div",{className:i.a.label},"TXID"),o.a.createElement("div",{className:i.a.value},Object(s.a)("not_generate"))),o.a.createElement("div",{className:i.a.item},o.a.createElement("div",{className:i.a.label},Object(s.a)("signStatus")),o.a.createElement("div",{className:i.a.value},"3方签名交易，2方待签名")),o.a.createElement("div",{className:"btn_wrap"},o.a.createElement(n.a,{type:"primary",className:"btn"},Object(s.a)("signature")))))}}])&&f(a.prototype,c),l&&f(a,l),t}(c.Component)}}]);