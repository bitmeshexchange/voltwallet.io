(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1145:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));n(604);var r,o=n(140),a=n(0),c=n.n(a),i=n(170),u=n(1229),s=n(1207),f=n(301),l=n(1146),p=n.n(l),y=n(15),m=n(171);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function v(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){h(a,r,o,c,i,"next",e)}function i(e){h(a,r,o,c,i,"throw",e)}c(void 0)}))}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return w(this,n)}}function w(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?j(e):t}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=Object(i.connect)((function(e){var t=e.token,n=e.loading.effects;return E(E({},t),{},{loading:n["service/queryTokenList"]})}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(b,e);var t,n,r,a,i,l=g(b);function b(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),P(j(t=l.call(this,e)),"renderInfo",(function(){return c.a.createElement("div",{className:p.a.info},c.a.createElement("div",{className:p.a.tokens_title},Object(y.a)("tokens_title")," ",c.a.createElement("span",null,"BETA")),c.a.createElement("div",{className:p.a.tokens_desc},Object(y.a)("tokens_desc")))})),P(j(t),"gotoToken",(function(e,n){var r="/money/tokenlist/".concat(e);t.props.history.push({pathname:r})})),P(j(t),"renderTokensList",(function(){var e=t.props,n=(e.tokens,e.loading),r=t.state.data;return n?c.a.createElement(f.a,null):c.a.createElement("div",{className:p.a.list_container},c.a.createElement("div",{className:p.a.list_content},c.a.createElement("div",{className:p.a.item_head},c.a.createElement("div",{className:p.a.part1},Object(y.a)("token")),c.a.createElement("div",{className:p.a.part2},Object(y.a)("token_supply")),c.a.createElement("div",{className:p.a.part3},Object(y.a)("tokenId"))),r&&r.map((function(e,n){var r=e.id,o=e.token_name,a=e.token_symbol,i=e.token_amount,f=e.issuer_wid,l=e.token_logo,y=e.token_decimal;if(i>0)return c.a.createElement("div",{className:p.a.list_item,key:r+n},c.a.createElement("div",{className:p.a.part1,onClick:function(){return t.gotoToken(f,o)}},c.a.createElement("div",{className:p.a.coin_icon},l?c.a.createElement("img",{src:Object(m.a)(l),className:p.a.logo}):c.a.createElement(s.a,{name:o,style:{width:25,height:25,lineHeight:"25px",fontSize:14,fontWeight:500}})),c.a.createElement("div",{className:p.a.coin_name},c.a.createElement("span",{className:p.a.name},a," | ",o))),c.a.createElement("div",{className:p.a.part2},c.a.createElement("span",{className:p.a.amount},Object(m.e)(i,y))," ",c.a.createElement("span",{className:p.a.unit})),c.a.createElement("div",{className:p.a.part3},c.a.createElement("span",{className:p.a.tokenId,title:r},Object(m.l)(r,[6,7])," ",c.a.createElement(u.a,{text:r}))))}))))})),P(j(t),"gotoCreateToken",(function(){t.props.history.push({pathname:"/tokens/create"})}));t.props.match.params.type;return t.state={data:[],loading:!1},t}return t=b,(n=[{key:"componentDidMount",value:(i=v(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.fetch();case 1:case"end":return e.stop()}}),e,this)}))),function(){return i.apply(this,arguments)})},{key:"fetch",value:(a=v(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dispatch({type:"service/queryTokenList"});case 2:t=e.sent,this.setState({data:t.list});case 4:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:p.a.container},this.renderInfo(),this.renderTokensList(),c.a.createElement("div",{className:p.a.btn_container},c.a.createElement(o.a,{type:"primary",className:p.a.btn,onClick:function(){return e.gotoCreateToken()}},Object(y.a)("create_token"))))}}])&&d(t.prototype,n),r&&d(t,r),b}(a.Component))||r},1207:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),o=n.n(r),a=(n(67),n(1107)),c=n.n(a);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(i,e);var t,n,r,a=l(i);function i(){return u(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.name,n=e.style;if(e.size,!t)return null;var r=t.substr(0,1).toUpperCase();return o.a.createElement("div",{className:c.a.logo,style:n},r)}}])&&s(t.prototype,n),r&&s(t,r),i}(r.Component)},1229:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));n(605);var r=n(172),o=n(0),a=n.n(o),c=n(1251),i=n.n(c),u=n(67),s=n(15),f=n(1110),l=n.n(f);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(f,e);var t,n,o,c=h(f);function f(){return y(this,f),c.apply(this,arguments)}return t=f,(n=[{key:"onCopySuccess",value:function(){r.a.success(Object(s.a)("copied"))}},{key:"render",value:function(){var e=this.props.label?this.props.label:a.a.createElement(u.a,{type:"iconcopy"});return a.a.createElement(i.a,{component:"span",onSuccess:this.onCopySuccess.bind(this),"data-clipboard-text":this.props.text,className:l.a.clipboard},e)}}])&&m(t.prototype,n),o&&m(t,o),f}(o.Component)}}]);