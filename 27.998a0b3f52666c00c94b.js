(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1064:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return v}));t(559);var n=t(138),r=(t(562),t(23)),c=t(1),l=t.n(c),o=t(1065),i=t.n(o),s=t(19);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,a){return(p=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}var v=function(e){function a(){var e,t,n,r,c,l,o;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var i=arguments.length,s=new Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=this,r=(e=f(a)).call.apply(e,[this].concat(s)),t=!r||"object"!==m(r)&&"function"!=typeof r?b(n):r,c=b(t),o=function(){t.props.history.goBack()},(l="goBack")in c?Object.defineProperty(c,l,{value:o,enumerable:!0,configurable:!0,writable:!0}):c[l]=o,t}var t,c,o;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&p(e,a)}(a,e),t=a,(c=[{key:"render",value:function(){var e=this.props.sign?Object(s.a)("tobeSignedTrans"):Object(s.a)("signedTrans");return l.a.createElement("div",{className:i.a.container},l.a.createElement("div",{className:i.a.header},l.a.createElement("span",{className:i.a.left,onClick:this.goBack},l.a.createElement(r.a,{type:"left"})," ",Object(s.a)("back")),l.a.createElement("div",{className:i.a.title},e)),l.a.createElement("div",{className:i.a.list},l.a.createElement("div",{className:i.a.item},l.a.createElement("div",{className:i.a.label},Object(s.a)("originator")),l.a.createElement("div",{className:i.a.value},"采购部李部长")),l.a.createElement("div",{className:i.a.item},l.a.createElement("div",{className:i.a.label},Object(s.a)("receiver")),l.a.createElement("div",{className:i.a.value},"xxx技术有限公司")),l.a.createElement("div",{className:i.a.item},l.a.createElement("div",{className:i.a.label},Object(s.a)("amount")),l.a.createElement("div",{className:i.a.value},"100BSV")),l.a.createElement("div",{className:i.a.item},l.a.createElement("div",{className:i.a.label},"TXID"),l.a.createElement("div",{className:i.a.value},Object(s.a)("not_generate"))),l.a.createElement("div",{className:i.a.item},l.a.createElement("div",{className:i.a.label},Object(s.a)("signStatus")),l.a.createElement("div",{className:i.a.value},"3方签名交易，2方待签名")),l.a.createElement("div",{className:"btn_wrap"},l.a.createElement(n.a,{type:"primary",className:"btn"},Object(s.a)("signature")))))}}])&&u(t.prototype,c),o&&u(t,o),a}(c.Component)}}]);