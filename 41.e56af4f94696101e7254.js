(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1025:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));a(471);var n=a(22),r=a(0),c=a.n(r),o=(a(73),a(1026)),i=a.n(o),l=a(16);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=v(e);if(t){var r=v(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return d(this,a)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(s,e);var t,a,r,o=p(s);function s(){var e;u(this,s);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return y(b(e=o.call.apply(o,[this].concat(a))),"state",{activeIndex:0}),y(b(e),"switchTab",(function(t){e.setState({activeIndex:t})})),y(b(e),"gotoDetail",(function(t){e.props.history.push({pathname:"/swap/records/".concat(t)})})),y(b(e),"back",(function(){e.props.history.goBack()})),e}return t=s,(a=[{key:"render",value:function(){var e=this,t=this.state.activeIndex;return c.a.createElement("div",{className:i.a.container},c.a.createElement("div",{className:i.a.tp},c.a.createElement("div",{className:i.a.title},Object(l.a)("tx_records")),c.a.createElement("div",{className:i.a.close,onClick:this.back},c.a.createElement(n.a,{type:"close",style:{color:"#2F80ED"}}))),c.a.createElement("div",{className:i.a.hd},[Object(l.a)("all"),Object(l.a)("exchange"),Object(l.a)("deposit")].map((function(a,n){return c.a.createElement("div",{className:n===t?i.a.currentTab:i.a.tab,onClick:function(){return e.switchTab(n)},key:a},a)}))),c.a.createElement("div",{className:i.a.bd},c.a.createElement("div",{className:i.a.item,onClick:function(){return e.gotoDetail(1)}},c.a.createElement("div",{className:i.a.line},c.a.createElement("div",{className:i.a.item_title},c.a.createElement(n.a,{type:"swap",style:{color:"#2F80ED",fontSize:15,marginRight:10,fontWeight:"bold"}}),c.a.createElement("div",{className:i.a.item_name},"Swap BSV to VUSD")),c.a.createElement("div",{className:i.a.date},"2020/08/08")),c.a.createElement("div",{className:i.a.line1},"Sent 5 BSV  |  Received 1021.977 VUSD"),c.a.createElement("div",{className:i.a.line1},c.a.createElement("div",{className:i.a.fee},"Fee 0.1% =  $1.023"),c.a.createElement("a",{className:i.a.link,href:"",target:"_blank"},"View onchain TX"))),c.a.createElement("div",{className:i.a.item},c.a.createElement("div",{className:i.a.line},c.a.createElement("div",{className:i.a.item_title},c.a.createElement(n.a,{type:"download",style:{color:"#2F80ED",fontSize:15,marginRight:10,fontWeight:"bold"}}),c.a.createElement("div",{className:i.a.item_name},"Deposit 782.23 USDC")),c.a.createElement("div",{className:i.a.date},"2020/08/08")),c.a.createElement("div",{className:i.a.line1},c.a.createElement("div",null,"Originating address"),c.a.createElement("a",{className:i.a.link,href:"",target:"_blank"},"1up232...90NZx")),c.a.createElement("div",{className:i.a.line1},c.a.createElement("div",{className:i.a.fee},"Received address"),c.a.createElement("a",{className:i.a.link,href:"",target:"_blank"},"1dZ050...70BAe")))))}}])&&m(t.prototype,a),r&&m(t,r),s}(r.Component)}}]);