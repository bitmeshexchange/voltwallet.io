(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1032:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return G}));n(469);var r,o=n(298),a=(n(474),n(304)),i=(n(483),n(452)),s=(n(1270),n(1310)),c=(n(475),n(160)),l=n(0),u=n.n(l),p=n(167),f=n(66),m=n(11),y=n(1044),d=n(1196),b=n(55),h=n.n(b);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k(e);if(t){var o=k(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return E(this,n)}}function E(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N,_=Object(y.h)(),x=Object(p.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(a,e);var t,n,r,o=w(a);function a(){return g(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"change",value:function(e,t){var n=this.props,r=n.price,o=n.exchangeRate,a=(m.r[e]||m.r[1]).name.toLowerCase();if(7===e&&(a="bsv"),!r[a])return null;var i=null,s=_.currencyCode.toLowerCase();return i=r[a][s]?r[a][s]:h()(r[a].usd).times(o[s]),3===e||6===e?h()(t).times(i).toFixed(2,1):h()(t).div(1e8).times(i).toFixed(2,1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.wallets,r=t.type;if(!t.price.bsv)return null;var o=h()(0);return n[r]&&n[r].forEach((function(t){0!==parseInt(r)&&parseInt(r)!==t.type||7===t.token||(o=o.plus(e.change(t.token,t.total)),3===t.token&&(o=o.plus(t.usd)))})),o=o.toFixed(2,1),u.a.createElement("span",null,_.symbol,o.toString()," ",_.currencyCode)}}])&&j(t.prototype,n),r&&j(t,r),a}(l.Component))||r,S=n(301),R=n(73),D=n(16),T=n(979),M=n.n(T);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return z(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function W(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){L(a,r,o,i,s,"next",e)}function s(e){L(a,r,o,i,s,"throw",e)}i(void 0)}))}}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return(F=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function $(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=H(e);if(t){var o=H(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return q(this,n)}}function q(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?Y(e):t}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){J(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=u.a.createElement(c.a,null,u.a.createElement(c.a.Item,null,u.a.createElement(f.Link,{to:"/money/createWallet/1"},Object(D.a)("personal_wallet"))),u.a.createElement(c.a.Item,null,u.a.createElement(f.Link,{to:"/money/createWallet/2"},Object(D.a)("multiparty_wallet")))),G=Object(p.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return B(B(B({},t),n),{},{loading:r["service/queryWallet"],creatingAddress:r["service/createSingleWalletAddress"]||!1})}))(N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&F(e,t)}(b,e);var t,n,r,c,l,p=$(b);function b(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,b),J(Y(t=p.call(this,e)),"switchDisplay",(function(){var e=t.state.hideAmount;t.props.dispatch({type:"user/switchDisplay"}),t.setState({hideAmount:!e})})),J(Y(t),"renderWalletMenu",(function(){var e=parseInt(t.state.prevPropsType)||0;return u.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},u.a.createElement("div",{className:M.a.wallet_type},m.s.map((function(t,n){return u.a.createElement("div",{key:t.key,className:n===e?Object(y.j)(M.a.selected,M.a.wallet_type_item):M.a.wallet_type_item},u.a.createElement(f.Link,{to:"/money/home/".concat(n)},t.text))}))))})),J(Y(t),"renderInfo",(function(){var e=t.props.wallets,n=t.state,r=n.hideAmount,o=n.prevPropsType;e[o]||t.fetch();var a=r?u.a.createElement(R.a,{type:"iconhide"}):u.a.createElement(R.a,{type:"iconshow"});return u.a.createElement("div",{className:M.a.info},t.renderWalletMenu(),u.a.createElement("div",{className:M.a.total_assets},u.a.createElement("div",{className:M.a.total},r?m.o:u.a.createElement(x,{wallets:e,type:o})," ",u.a.createElement("span",{onClick:t.switchDisplay,className:M.a.show_balance},a))),u.a.createElement("div",{className:M.a.add},u.a.createElement(s.a,{overlay:X},u.a.createElement("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},u.a.createElement(R.a,{type:"iconcreatewallet",style:{fontSize:18}})))))})),J(Y(t),"gotoMessageList",(function(e,n){var r="list";n&&m.r[n].hasTokens&&(r="tokenlist"),t.props.history.push({pathname:"/money/".concat(r,"/").concat(e)})})),J(Y(t),"gotoTransfer",(function(e,n){var r;r=2===e?"sendbtc":3===e?"sendeth":6===e?"sendtrx":"sendbsv",t.props.history.push({pathname:"/money/".concat(r,"/").concat(n)})})),J(Y(t),"gotoReceive",(function(e){t.props.history.push({pathname:"/money/receive/".concat(e)})})),J(Y(t),"renderAssetsList",(function(){var e=t.state,n=e.hideAmount,r=e.prevPropsType,o=t.props.wallets[r];return u.a.createElement("div",{className:M.a.list_container},u.a.createElement("div",{className:M.a.list_content},u.a.createElement("div",{className:M.a.item_head},u.a.createElement("div",{className:M.a.part1},Object(D.a)("wallet")),u.a.createElement("div",{className:M.a.part2},Object(D.a)("amount")),u.a.createElement("div",{className:M.a.part3},Object(D.a)("action"))),o&&o.map((function(e){var r=e.id,o=e.share,a=e.threshold,s=e.name,c=e.token,l=e.joinStatus,p=e.frozen,f=e.status,b=e.type,h=e.waitJoin,v=e.balance;if(m.r[c]){var g=e.total,j=Object(m.e)(c);return g=Object(y.g)(g,c,8),0===l?u.a.createElement("div",{className:M.a.list_item,key:r},u.a.createElement("div",{className:M.a.part1,onClick:function(){return t.gotoMessageList(r)}},u.a.createElement(i.a,{dot:!0},u.a.createElement(d.a,{token:c,className:M.a.coin_icon})),u.a.createElement("div",{className:M.a.coin_name},u.a.createElement("span",{className:M.a.name},s),2===b&&u.a.createElement("span",{className:M.a.wallet_no},a," | ",o))),u.a.createElement("div",{className:M.a.part2},u.a.createElement("div",{className:M.a.join,onClick:function(){return t.joinWallet(r)}},Object(D.a)("join_wallet")))):0===parseInt(f)?u.a.createElement("div",{className:M.a.list_item,key:r},u.a.createElement("div",{className:M.a.part1,onClick:function(){return t.gotoMessageList(r)}},u.a.createElement(i.a,{dot:!0},u.a.createElement(d.a,{token:c,className:M.a.coin_icon})),u.a.createElement("div",{className:M.a.coin_name},u.a.createElement("span",{className:M.a.name},s),2===b&&u.a.createElement("span",{className:M.a.wallet_no},a," | ",o))),u.a.createElement("div",{className:M.a.part2},u.a.createElement("div",{className:M.a.wait_join},h,Object(D.a)("members_to_join"))),u.a.createElement("div",{className:M.a.part3})):u.a.createElement("div",{className:M.a.list_item,key:r},u.a.createElement("div",{className:M.a.part1,onClick:function(){return t.gotoMessageList(r,c)}},u.a.createElement(d.a,{token:c,className:M.a.coin_icon}),u.a.createElement("div",{className:M.a.coin_name},u.a.createElement("div",{className:M.a.name_box},u.a.createElement("div",{className:M.a.name},s),p>0&&u.a.createElement("div",{className:M.a.pending},"Pending TX -",n?m.o:Object(y.g)(p,c,8),j),3===c&&v&&v.nonce&&null===v.nonce.block&&u.a.createElement("div",{className:M.a.pending},"Pending TX")),2===b&&u.a.createElement("span",{className:M.a.wallet_no},a," | ",o))),u.a.createElement("div",{className:M.a.part2},u.a.createElement("span",{className:M.a.amount},n?m.o:g)," ",u.a.createElement("span",{className:M.a.unit},j)),u.a.createElement("div",{className:M.a.part3},u.a.createElement("div",{className:M.a.transfer,onClick:function(){return t.gotoTransfer(c,r)}},u.a.createElement(R.a,{type:"iconicon-send"})," ",Object(D.a)("transfer")),u.a.createElement("span",{className:M.a.receive,onClick:function(){return t.gotoReceive(r)}},u.a.createElement(R.a,{type:"iconreceive"})," ",Object(D.a)("collection"))))}}))))})),t.state={receiveModalVisible:!1,hideAmount:window.localStorage.getItem(m.b.HIDEAMOUNT)||0,prevPropsType:t.props.match.params.type},t}return t=b,n=[{key:"componentDidMount",value:function(){this.fetch()}},{key:"fetch",value:function(e){var t=this.props,n=t.wallets,r=t.dispatch,o=e?parseInt(this.state.prevPropsType):0;if(!(0===o&&n[1].length>0&&n[2].length>0)){var a=n[o];if(!(o>0&&a&&a.length>0))return r({type:"service/queryWallet",payload:{type:o}})}}},{key:"updateWallet",value:(l=W(regeneratorRuntime.mark((function e(){var t,n,r,o,a,i,s,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._updating){e.next=2;break}return e.abrupt("return");case 2:return this._updating=!0,t=this.props,n=t.currentWallet,r=t.dispatch,o=n.type,e.next=7,r({type:"service/updateWallet",payload:{type:o}});case 7:if(!(a=e.sent)||!a.length){e.next=32;break}i=I(a),e.prev=10,i.s();case 12:if((s=i.n()).done){e.next=24;break}if(c=s.value,2===parseInt(c.type)){e.next=16;break}return e.abrupt("continue",22);case 16:if(!c.address){e.next=18;break}return e.abrupt("continue",22);case 18:if(1===parseInt(c.status)){e.next=20;break}return e.abrupt("continue",22);case 20:return e.next=22,this.props.dispatch({type:"service/createMultiPartyAddress",payload:{wid:c.id}});case 22:e.next=12;break;case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(10),i.e(e.t0);case 29:return e.prev=29,i.f(),e.finish(29);case 32:this._updating=!1;case 33:case"end":return e.stop()}}),e,this,[[10,26,29,32]])}))),function(){return l.apply(this,arguments)})},{key:"joinWallet",value:(c=W(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dispatch({type:"service/joinWallet",payload:{wid:t}});case 2:(n=e.sent)&&n.success&&this.updateWallet();case 4:case"end":return e.stop()}}),e,this)}))),function(e){return c.apply(this,arguments)})},{key:"renderAddressCreating",value:function(){return u.a.createElement(a.a,{title:Object(D.a)("collection"),visible:this.props.creatingAddress,footer:null,onCancel:this.hideReceiveDialog},u.a.createElement("div",{className:M.a.qrcodeWrap},u.a.createElement(S.a,{className:M.a.loading_container}),u.a.createElement("p",null,"Generating address")))}},{key:"render",value:function(){return u.a.createElement("div",{className:M.a.container},this.renderInfo(),u.a.createElement(o.a,{spinning:this.props.loading},this.renderAssetsList()),this.renderAddressCreating())}}],r=[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.match.params.type;return n!==t.prevPropsType?{prevPropsType:n}:null}}],n&&V(t.prototype,n),r&&V(t,r),b}(l.Component))||N},1044:function(e,t,n){"use strict";n.d(t,"d",(function(){return y})),n.d(t,"f",(function(){return d})),n.d(t,"m",(function(){return h})),n.d(t,"l",(function(){return v})),n.d(t,"j",(function(){return g})),n.d(t,"k",(function(){return j})),n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return w})),n.d(t,"g",(function(){return E})),n.d(t,"b",(function(){return k})),n.d(t,"h",(function(){return C})),n.d(t,"a",(function(){return P})),n.d(t,"i",(function(){return N}));n(1201);var r=n(1039),o=n.n(r),a=n(55),i=n.n(a),s=n(297),c=n(11),l=n(56),u=n.n(l),p=n(4),f=u.a.parse(window.location.search),m=window.location;function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),o()(e).format(t)):e}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";if(!e)return"";var n=e;"number"==typeof e?n=new Date(e):"string"==typeof e&&(n=new Date(+e));var r={"y+":n.getFullYear(),"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),"S+":n.getMilliseconds()};for(var o in r)if(new RegExp("("+o+")").test(t))if("y+"===o)t=t.replace(RegExp.$1,(""+r[o]).substr(4-RegExp.$1.length));else if("S+"===o){var a=RegExp.$1.length;a=1===a?3:a,t=t.replace(RegExp.$1,("00"+r[o]).substr((""+r[o]).length-1,a))}else t=t.replace(RegExp.$1,1===RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length));return t}var b=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function h(e){return!!e&&b.test(e)}function v(e){if(!e)return e;if(!parseFloat(e))return 0;for(var t="",n=0,r=(e=(e||0).toString()).split("."),o=r[0],a=o.length-1;a>=0;a--)n++,t=o.charAt(a)+t,n%3||0==a||(t=","+t);return 1===r.length?t:t+"."+r[1]}function g(){return Array.prototype.slice.call(arguments).join(" ")}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var n=e.substr(0,t[0]),r=e.substr(-t[1],t[1]);return n+"****"+r}}var O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(!e)return 0;var n=e.toString().split(".");return e.toString().indexOf("e")>-1||n[1]&&n[1].length>t?i()(e).toFixed(t):e},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return e?i()(e).div(Math.pow(10,t)).toString():0},E=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;if(!e)return 0;var r=parseInt(t),o=e,a=c.r[r].decimal;a&&(o=i()(e).div("1e".concat(a)).toString());var s=o.toString().split(".");return o.toString().indexOf("e")>-1||s[1]&&s[1].length>n&&0!==n?i()(o).toFixed(n):o},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e?i()(e).div(Math.pow(10,t)).toString():0},C=function(){var e=s.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,n=s.a[t];return n||(window.localStorage.removeItem("VoltLocalCurrencyIndex"),n=s.a[e]),n},P=function(e){var t="voltpre.bitmesh.com";return(f.wss&&f.wss.indexOf(t)>-1||m.pathname.indexOf("test.html")>-1)&&(e=e.replace("volt.id",t).replace("volt.bitmesh.com",t)),e},N=function(e,t){var n="";if(1===t&&(n="mainnet"),7===t&&(n="testnet"),!n)return!1;try{return new p.Address(e,n),!0}catch(e){return!1}}},1196:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(0),o=n.n(r),a=n(73),i=n(967),s=n.n(i),c=n(11);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(l,e);var t,n,r,i=m(l);function l(){return u(this,l),i.apply(this,arguments)}return t=l,(n=[{key:"render",value:function(){var e=this.props.className||s.a.icon,t=this.props.token||1;return o.a.createElement("div",{className:e},o.a.createElement(a.a,{type:Object(c.l)(t).icon}))}}])&&p(t.prototype,n),r&&p(t,r),l}(r.Component)},1202:function(e,t,n){var r={"./af":1051,"./af.js":1051,"./ar":1052,"./ar-dz":1053,"./ar-dz.js":1053,"./ar-kw":1054,"./ar-kw.js":1054,"./ar-ly":1055,"./ar-ly.js":1055,"./ar-ma":1056,"./ar-ma.js":1056,"./ar-sa":1057,"./ar-sa.js":1057,"./ar-tn":1058,"./ar-tn.js":1058,"./ar.js":1052,"./az":1059,"./az.js":1059,"./be":1060,"./be.js":1060,"./bg":1061,"./bg.js":1061,"./bm":1062,"./bm.js":1062,"./bn":1063,"./bn-bd":1064,"./bn-bd.js":1064,"./bn.js":1063,"./bo":1065,"./bo.js":1065,"./br":1066,"./br.js":1066,"./bs":1067,"./bs.js":1067,"./ca":1068,"./ca.js":1068,"./cs":1069,"./cs.js":1069,"./cv":1070,"./cv.js":1070,"./cy":1071,"./cy.js":1071,"./da":1072,"./da.js":1072,"./de":1073,"./de-at":1074,"./de-at.js":1074,"./de-ch":1075,"./de-ch.js":1075,"./de.js":1073,"./dv":1076,"./dv.js":1076,"./el":1077,"./el.js":1077,"./en-au":1078,"./en-au.js":1078,"./en-ca":1079,"./en-ca.js":1079,"./en-gb":1080,"./en-gb.js":1080,"./en-ie":1081,"./en-ie.js":1081,"./en-il":1082,"./en-il.js":1082,"./en-in":1083,"./en-in.js":1083,"./en-nz":1084,"./en-nz.js":1084,"./en-sg":1085,"./en-sg.js":1085,"./eo":1086,"./eo.js":1086,"./es":1087,"./es-do":1088,"./es-do.js":1088,"./es-mx":1089,"./es-mx.js":1089,"./es-us":1090,"./es-us.js":1090,"./es.js":1087,"./et":1091,"./et.js":1091,"./eu":1092,"./eu.js":1092,"./fa":1093,"./fa.js":1093,"./fi":1094,"./fi.js":1094,"./fil":1095,"./fil.js":1095,"./fo":1096,"./fo.js":1096,"./fr":1097,"./fr-ca":1098,"./fr-ca.js":1098,"./fr-ch":1099,"./fr-ch.js":1099,"./fr.js":1097,"./fy":1100,"./fy.js":1100,"./ga":1101,"./ga.js":1101,"./gd":1102,"./gd.js":1102,"./gl":1103,"./gl.js":1103,"./gom-deva":1104,"./gom-deva.js":1104,"./gom-latn":1105,"./gom-latn.js":1105,"./gu":1106,"./gu.js":1106,"./he":1107,"./he.js":1107,"./hi":1108,"./hi.js":1108,"./hr":1109,"./hr.js":1109,"./hu":1110,"./hu.js":1110,"./hy-am":1111,"./hy-am.js":1111,"./id":1112,"./id.js":1112,"./is":1113,"./is.js":1113,"./it":1114,"./it-ch":1115,"./it-ch.js":1115,"./it.js":1114,"./ja":1116,"./ja.js":1116,"./jv":1117,"./jv.js":1117,"./ka":1118,"./ka.js":1118,"./kk":1119,"./kk.js":1119,"./km":1120,"./km.js":1120,"./kn":1121,"./kn.js":1121,"./ko":1122,"./ko.js":1122,"./ku":1123,"./ku.js":1123,"./ky":1124,"./ky.js":1124,"./lb":1125,"./lb.js":1125,"./lo":1126,"./lo.js":1126,"./lt":1127,"./lt.js":1127,"./lv":1128,"./lv.js":1128,"./me":1129,"./me.js":1129,"./mi":1130,"./mi.js":1130,"./mk":1131,"./mk.js":1131,"./ml":1132,"./ml.js":1132,"./mn":1133,"./mn.js":1133,"./mr":1134,"./mr.js":1134,"./ms":1135,"./ms-my":1136,"./ms-my.js":1136,"./ms.js":1135,"./mt":1137,"./mt.js":1137,"./my":1138,"./my.js":1138,"./nb":1139,"./nb.js":1139,"./ne":1140,"./ne.js":1140,"./nl":1141,"./nl-be":1142,"./nl-be.js":1142,"./nl.js":1141,"./nn":1143,"./nn.js":1143,"./oc-lnc":1144,"./oc-lnc.js":1144,"./pa-in":1145,"./pa-in.js":1145,"./pl":1146,"./pl.js":1146,"./pt":1147,"./pt-br":1148,"./pt-br.js":1148,"./pt.js":1147,"./ro":1149,"./ro.js":1149,"./ru":1150,"./ru.js":1150,"./sd":1151,"./sd.js":1151,"./se":1152,"./se.js":1152,"./si":1153,"./si.js":1153,"./sk":1154,"./sk.js":1154,"./sl":1155,"./sl.js":1155,"./sq":1156,"./sq.js":1156,"./sr":1157,"./sr-cyrl":1158,"./sr-cyrl.js":1158,"./sr.js":1157,"./ss":1159,"./ss.js":1159,"./sv":1160,"./sv.js":1160,"./sw":1161,"./sw.js":1161,"./ta":1162,"./ta.js":1162,"./te":1163,"./te.js":1163,"./tet":1164,"./tet.js":1164,"./tg":1165,"./tg.js":1165,"./th":1166,"./th.js":1166,"./tk":1167,"./tk.js":1167,"./tl-ph":1168,"./tl-ph.js":1168,"./tlh":1169,"./tlh.js":1169,"./tr":1170,"./tr.js":1170,"./tzl":1171,"./tzl.js":1171,"./tzm":1172,"./tzm-latn":1173,"./tzm-latn.js":1173,"./tzm.js":1172,"./ug-cn":1174,"./ug-cn.js":1174,"./uk":1175,"./uk.js":1175,"./ur":1176,"./ur.js":1176,"./uz":1177,"./uz-latn":1178,"./uz-latn.js":1178,"./uz.js":1177,"./vi":1179,"./vi.js":1179,"./x-pseudo":1180,"./x-pseudo.js":1180,"./yo":1181,"./yo.js":1181,"./zh-cn":1182,"./zh-cn.js":1182,"./zh-hk":1183,"./zh-hk.js":1183,"./zh-mo":1184,"./zh-mo.js":1184,"./zh-tw":1185,"./zh-tw.js":1185};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=1202},1270:function(e,t,n){"use strict";n(65),n(978),n(467)},1310:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),s=n(5),c=n.n(s),l=n(170),u=n(3),p=n.n(u),f={adjustX:1,adjustY:1},m=[0,0],y={topLeft:{points:["bl","tl"],overflow:f,offset:[0,-4],targetOffset:m},topCenter:{points:["bc","tc"],overflow:f,offset:[0,-4],targetOffset:m},topRight:{points:["br","tr"],overflow:f,offset:[0,-4],targetOffset:m},bottomLeft:{points:["tl","bl"],overflow:f,offset:[0,4],targetOffset:m},bottomCenter:{points:["tc","bc"],overflow:f,offset:[0,4],targetOffset:m},bottomRight:{points:["tr","br"],overflow:f,offset:[0,4],targetOffset:m}},d=n(32),b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var h=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return v.call(r),r.state="visible"in n?{visible:n.visible}:{visible:n.defaultVisible},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.getDerivedStateFromProps=function(e){return"visible"in e?{visible:e.visible}:null},t.prototype.getOverlayElement=function(){var e=this.props.overlay;return"function"==typeof e?e():e},t.prototype.getMenuElementOrLambda=function(){return"function"==typeof this.props.overlay?this.getMenuElement:this.getMenuElement()},t.prototype.getPopupDomNode=function(){return this.trigger.getPopupDomNode()},t.prototype.getOpenClassName=function(){var e=this.props,t=e.openClassName,n=e.prefixCls;return void 0!==t?t:n+"-open"},t.prototype.renderChildren=function(){var e=this.props.children,t=this.state.visible,n=e.props?e.props:{},o=p()(n.className,this.getOpenClassName());return t&&e?Object(r.cloneElement)(e,{className:o}):e},t.prototype.render=function(){var e=this.props,t=e.prefixCls,n=e.transitionName,r=e.animation,a=e.align,i=e.placement,s=e.getPopupContainer,c=e.showAction,u=e.hideAction,p=e.overlayClassName,f=e.overlayStyle,m=e.trigger,d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["prefixCls","transitionName","animation","align","placement","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","trigger"]),h=u;return h||-1===m.indexOf("contextMenu")||(h=["click"]),o.a.createElement(l.a,b({},d,{prefixCls:t,ref:this.saveTrigger,popupClassName:p,popupStyle:f,builtinPlacements:y,action:m,showAction:c,hideAction:h||[],popupPlacement:i,popupAlign:a,popupTransitionName:n,popupAnimation:r,popupVisible:this.state.visible,afterPopupVisibleChange:this.afterVisibleChange,popup:this.getMenuElementOrLambda(),onPopupVisibleChange:this.onVisibleChange,getPopupContainer:s}),this.renderChildren())},t}(r.Component);h.propTypes={minOverlayWidthMatchTrigger:i.a.bool,onVisibleChange:i.a.func,onOverlayClick:i.a.func,prefixCls:i.a.string,children:i.a.any,transitionName:i.a.string,overlayClassName:i.a.string,openClassName:i.a.string,animation:i.a.any,align:i.a.object,overlayStyle:i.a.object,placement:i.a.string,overlay:i.a.oneOfType([i.a.node,i.a.func]),trigger:i.a.array,alignPoint:i.a.bool,showAction:i.a.array,hideAction:i.a.array,getPopupContainer:i.a.func,visible:i.a.bool,defaultVisible:i.a.bool},h.defaultProps={prefixCls:"rc-dropdown",trigger:["hover"],showAction:[],overlayClassName:"",overlayStyle:{},defaultVisible:!1,onVisibleChange:function(){},placement:"bottomLeft"};var v=function(){var e=this;this.onClick=function(t){var n=e.props,r=e.getOverlayElement().props;"visible"in n||e.setState({visible:!1}),n.onOverlayClick&&n.onOverlayClick(t),r.onClick&&r.onClick(t)},this.onVisibleChange=function(t){var n=e.props;"visible"in n||e.setState({visible:t}),n.onVisibleChange(t)},this.getMinOverlayWidthMatchTrigger=function(){var t=e.props,n=t.minOverlayWidthMatchTrigger,r=t.alignPoint;return"minOverlayWidthMatchTrigger"in e.props?n:!r},this.getMenuElement=function(){var t=e.props.prefixCls,n=e.getOverlayElement(),r={prefixCls:t+"-menu",onClick:e.onClick};return"string"==typeof n.type&&delete r.prefixCls,o.a.cloneElement(n,r)},this.afterVisibleChange=function(t){if(t&&e.getMinOverlayWidthMatchTrigger()){var n=e.getPopupDomNode(),r=c.a.findDOMNode(e);r&&n&&r.offsetWidth>n.offsetWidth&&(n.style.minWidth=r.offsetWidth+"px",e.trigger&&e.trigger._component&&e.trigger._component.alignInstance&&e.trigger._component.alignInstance.forceAlign())}},this.saveTrigger=function(t){e.trigger=t}};Object(d.polyfill)(h);var g=h,j=n(309),O=n(34),w=n(22),E=n(75);function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return S(this,n)}}function S(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object(E.a)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight");var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(i,e);var t,n,o,a=x(i);function i(){var e;return P(this,i),(e=a.apply(this,arguments)).renderOverlay=function(t){var n,o=e.props.overlay;n="function"==typeof o?o():o;var a=(n=r.Children.only(n)).props;Object(O.a)(!a.mode||"vertical"===a.mode,"Dropdown",'mode="'.concat(a.mode,"\" is not supported for Dropdown's Menu."));var i=a.selectable,s=void 0!==i&&i,c=a.focusable,l=void 0===c||c,u=r.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},r.createElement(w.a,{type:"right",className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"==typeof n.type?o:r.cloneElement(n,{mode:"vertical",selectable:s,focusable:l,expandIcon:u})},e.renderDropDown=function(t){var n,o=t.getPopupContainer,a=t.getPrefixCls,i=e.props,s=i.prefixCls,c=i.children,l=i.trigger,u=i.disabled,f=i.getPopupContainer,m=a("dropdown",s),y=r.Children.only(c),d=r.cloneElement(y,{className:p()(y.props.className,"".concat(m,"-trigger")),disabled:u}),b=u?[]:l;return b&&-1!==b.indexOf("contextMenu")&&(n=!0),r.createElement(g,C({alignPoint:n},e.props,{prefixCls:m,getPopupContainer:f||o,transitionName:e.getTransitionName(),trigger:b,overlay:function(){return e.renderOverlay(m)}}),d)},e}return t=i,(n=[{key:"getTransitionName",value:function(){var e=this.props,t=e.placement,n=void 0===t?"":t,r=e.transitionName;return void 0!==r?r:n.indexOf("top")>=0?"slide-down":"slide-up"}},{key:"render",value:function(){return r.createElement(j.a,null,this.renderDropDown)}}])&&N(t.prototype,n),o&&N(t,o),i}(r.Component);D.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1,placement:"bottomLeft"};var T=n(137);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function W(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=F(e);if(t){var o=F(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return V(this,n)}}function V(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var $=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},q=T.a.Group,Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(i,e);var t,n,o,a=W(i);function i(){var e;return I(this,i),(e=a.apply(this,arguments)).renderButton=function(t){var n=t.getPopupContainer,o=t.getPrefixCls,a=e.props,i=a.prefixCls,s=a.type,c=a.disabled,l=a.onClick,u=a.htmlType,f=a.children,m=a.className,y=a.overlay,d=a.trigger,b=a.align,h=a.visible,v=a.onVisibleChange,g=a.placement,j=a.getPopupContainer,O=a.href,E=a.icon,k=void 0===E?r.createElement(w.a,{type:"ellipsis"}):E,C=a.title,P=$(a,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title"]),N=o("dropdown-button",i),_={align:b,overlay:y,disabled:c,trigger:c?[]:d,onVisibleChange:v,placement:g,getPopupContainer:j||n};return"visible"in e.props&&(_.visible=h),r.createElement(q,A({},P,{className:p()(N,m)}),r.createElement(T.a,{type:s,disabled:c,onClick:l,htmlType:u,href:O,title:C},f),r.createElement(D,_,r.createElement(T.a,{type:s},k)))},e}return t=i,(n=[{key:"render",value:function(){return r.createElement(j.a,null,this.renderButton)}}])&&z(t.prototype,n),o&&z(t,o),i}(r.Component);Y.defaultProps={placement:"bottomRight",type:"default"},D.Button=Y;t.a=D}}]);