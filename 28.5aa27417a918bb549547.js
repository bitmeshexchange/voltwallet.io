(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1140:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));n(607);var r,a=n(300),o=n(0),c=n.n(o),i=(n(615),n(170)),u=(n(33),n(1199)),s=n(303),l=n(1198),f=n(74),p=n(171),m=n(1115),y=n.n(m),b=n(17);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var a=x(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=Object(i.connect)((function(e){var t=e.user,n=e.wallet;return P(P({},t),n)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(i,e);var t,n,r,o=j(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),S(_(t=o.call(this,e)),"goBack",(function(){t.props.history.goBack()})),S(_(t),"switchArr",function(){var e,n=(e=regeneratorRuntime.mark((function e(n){var r,a,o,c,i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.state,a=r.showArr,o=r.inputAddress,c=r.inputTxid,i=r.inputTxidIndex,o.length<1?(t.setState({inputAddressLoading:!0}),u=[],c.forEach((function(e,t){var n="https://api.whatsonchain.com/v1/bsv/main/tx/hash/".concat(e);u.push(fetch(n).then((function(e){return e.json()})).then((function(e){var n=e.vout[i[t]].scriptPubKey.addresses;n&&o.push.apply(o,v(n))})))})),Promise.all(u).then((function(e){a[n]=!a[n],t.setState({showArr:a,inputAddressLoading:!1,inputAddress:o})}))):(a[n]=!a[n],t.setState({showArr:a}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){O(o,r,a,c,i,"next",e)}function i(e){O(o,r,a,c,i,"throw",e)}c(void 0)}))});return function(e){return n.apply(this,arguments)}}()),t.state={loading:!1,inputAddressLoading:!1,data:{},label:null,inputTxid:[],inputTxidIndex:[],inputAddress:[],outputAddress:[],outputValue:0,showArr:[!1,!1]},t}return t=i,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.transactions,r=t.location,a=t.match;if(!r.state)return this.props.history.replace({pathname:"/money/home/0"});this.setState({loading:!0});var o=null,i=n[r.state.index],u=i.type,s=i.status;2==u?2==s&&(o=c.a.createElement("label",{className:y.a.success},Object(b.a)("tx_success"))):o=c.a.createElement("label",{className:y.a.success},Object(b.a)("receive"));var l=a.params.txid,f="https://api.whatsonchain.com/v1/bsv/main/tx/hash/".concat(l);fetch(f).then((function(e){return e.json()})).then((function(t){var n=[],r=[],a=[],c=0;t.vin.forEach((function(e){n.push(e.txid),r.push(e.vout)})),t.vout.forEach((function(e){e.scriptPubKey.addresses&&a.push.apply(a,v(e.scriptPubKey.addresses)),c+=e.value})),e.setState({loading:!1,data:t,label:o,inputTxid:n,inputTxidIndex:r,outputAddress:a,outputValue:c})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;if(!this.props.location.state)return this.props.history.replace({pathname:"/money/home/0"}),null;var t=this.state,n=t.loading,r=t.data,o=t.label,i=t.inputAddress,m=t.outputAddress,d=t.showArr,v=t.outputValue,h=t.inputAddressLoading;if(n)return c.a.createElement(s.a,null);var O=this.props,w=O.currentWallet,E=O.transactions,j=O.feerate,g=O.location,_=r.confirmations,x=r.size,N=r.time,P=r.hash,S=w.name,k=E[g.state.index],A=k.note,R=k.type,D=k.price,C=2==R?"-":"+";return c.a.createElement("div",{style:{height:"100%",overflowY:"auto"}},c.a.createElement("div",{className:y.a.container},c.a.createElement("div",{className:y.a.w_info},c.a.createElement(l.a,{token:1}),c.a.createElement("div",{className:y.a.w_name},S),c.a.createElement("div",{className:y.a.tx_status},o),c.a.createElement("span",{className:y.a.goback,onClick:this.goBack}," ",Object(b.a)("back"))),c.a.createElement("div",{className:y.a.tx_info},c.a.createElement("div",{className:y.a.tx_row_1},c.a.createElement("div",{className:y.a.label},Object(b.a)("tx_amount")),c.a.createElement("div",{className:y.a.value},C," ",v," BSV / ",C," ",c.a.createElement(u.a,{value:1e8*v,token:1,usd:D}))),c.a.createElement("div",{className:y.a.tx_row},c.a.createElement("div",{className:y.a.tx_col,style:{width:150}},c.a.createElement("div",{className:y.a.label},Object(b.a)("confirmations")),c.a.createElement("div",{className:y.a.value},_)),c.a.createElement("div",{className:y.a.tx_col},c.a.createElement("div",{className:y.a.label},Object(b.a)("timestamp")),c.a.createElement("div",{className:y.a.value},Object(p.f)(1e3*N)))),c.a.createElement("div",{className:y.a.tx_row},c.a.createElement("div",{className:y.a.tx_col,style:{width:150}},c.a.createElement("div",{className:y.a.label},Object(b.a)("fee_rate")),c.a.createElement("div",{className:y.a.value},j.bsv2/1e3," sat/B")),c.a.createElement("div",{className:y.a.tx_col,style:{width:120}},c.a.createElement("div",{className:y.a.label},Object(b.a)("size")),c.a.createElement("div",{className:y.a.value},x)),c.a.createElement("div",{className:y.a.tx_col},c.a.createElement("div",{className:y.a.label},Object(b.a)("paid")),c.a.createElement("div",{className:y.a.value},Object(p.e)(j.bsv2/1e3*x)," BSV"))),c.a.createElement("div",{className:y.a.tx_row_1},c.a.createElement("div",{className:y.a.label},"TX ID"),c.a.createElement("div",{className:y.a.value},P)),c.a.createElement("div",{className:y.a.tx_row_1},c.a.createElement("div",{className:y.a.label},c.a.createElement("span",null,Object(b.a)("input_addresses")),c.a.createElement("span",{onClick:function(){return e.switchArr(0)}},d[0]?c.a.createElement(f.a,{type:"iconchevron",style:{transform:"rotateX(180deg)"}}):c.a.createElement(f.a,{type:"iconchevron"}))),h&&c.a.createElement(a.a,null),d[0]&&i&&i.map((function(e,t){return c.a.createElement("div",{className:y.a.value,key:e+t},e)}))),c.a.createElement("div",{className:y.a.tx_row_1},c.a.createElement("div",{className:y.a.label},c.a.createElement("span",null,Object(b.a)("output_addresses")),c.a.createElement("span",{onClick:function(){return e.switchArr(1)}},d[1]?c.a.createElement(f.a,{type:"iconchevron",style:{transform:"rotateX(180deg)"}}):c.a.createElement(f.a,{type:"iconchevron"}))),d[1]&&m.map((function(e,t){return c.a.createElement("div",{className:y.a.value,key:e+t},e)}))),c.a.createElement("div",{className:y.a.tx_row_1},c.a.createElement("div",{className:y.a.label},Object(b.a)("message")),c.a.createElement("div",{className:y.a.value},A)))))}}])&&w(t.prototype,n),r&&w(t,r),i}(o.Component))||r},1198:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(0),a=n.n(r),o=n(74),c=n(1106),i=n.n(c),u=n(11);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var a=b(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e);var t,n,r,c=m(s);function s(){return l(this,s),c.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props.className||i.a.icon,t=this.props.token||1;return a.a.createElement("div",{className:e},a.a.createElement(o.a,{type:Object(u.l)(t).icon}))}}])&&f(t.prototype,n),r&&f(t,r),s}(r.Component)},1199:function(e,t,n){"use strict";var r,a=n(0),o=n.n(a),c=n(170),i=(n(115),n(33)),u=n.n(i),s=n(11),l=n(171);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var a=v(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=Object(l.h)(),E=Object(c.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,n,r,a=b(c);function c(){return p(this,c),a.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.price,n=e.value,r=e.usd,a=e.exchangeRate,c=e.token,i=e.tokenAmount,l=(s.r[c]||s.r[1]).name.toLowerCase();if(7===c&&(l="bsv"),!t[l])return null;var f=null,p=w.currencyCode.toLowerCase();f=t[l][p]?t[l][p]:u()(t[l].usd).times(a[p]),r&&(f=u()(f).div(t[l].usd).multipliedBy(r));var m=0;return m=3===c||6===c?(m=(m=u()(n).times(f)).plus(i||0)).toFixed(2,1):u()(n).div(1e8).times(f).toFixed(2,1),o.a.createElement("span",null,w.symbol,m," ",w.currencyCode)}}])&&m(t.prototype,n),r&&m(t,r),c}(a.Component))||r;t.a=E}}]);