(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1171:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return $}));n(607);var r,o=n(300),a=(n(612),n(306)),i=(n(621),n(589)),c=(n(1261),n(1300)),l=(n(613),n(163)),s=n(0),u=n.n(s),p=n(170),f=n(67),y=n(11),m=n(171),b=n(1198),v=n(33),d=n.n(v);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=P(e);if(t){var o=P(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _,k=Object(m.h)(),S=Object(p.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){N(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(a,e);var t,n,r,o=E(a);function a(){return g(this,a),o.apply(this,arguments)}return t=a,(n=[{key:"change",value:function(e,t){var n=this.props,r=n.price,o=n.exchangeRate,a=(y.r[e]||y.r[1]).name.toLowerCase();if(7===e&&(a="bsv"),!r[a])return null;var i=null,c=k.currencyCode.toLowerCase();return i=r[a][c]?r[a][c]:d()(r[a].usd).times(o[c]),3===e||6===e?d()(t).times(i).toFixed(2,1):d()(t).div(1e8).times(i).toFixed(2,1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.wallets,r=t.type;if(!t.price.bsv)return null;var o=d()(0);return n[r]&&n[r].forEach((function(t){0!==parseInt(r)&&parseInt(r)!==t.type||7===t.token||(o=o.plus(e.change(t.token,t.total)),3===t.token&&(o=o.plus(t.usd)))})),o=o.toFixed(2,1),u.a.createElement("span",null,k.symbol,o.toString()," ",k.currencyCode)}}])&&O(t.prototype,n),r&&O(t,r),a}(s.Component))||r,x=n(303),R=n(74),T=n(17),D=n(1117),A=n.n(D);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function V(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){L(a,r,o,i,c,"next",e)}function c(e){L(a,r,o,i,c,"throw",e)}i(void 0)}))}}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(e,t){return(q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=z(e);if(t){var o=z(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return J(this,n)}}function J(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?X(e):t}function X(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e){return(z=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){H(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Y=u.a.createElement(l.a,null,u.a.createElement(l.a.Item,null,u.a.createElement(f.Link,{to:"/money/createWallet/1"},Object(T.a)("personal_wallet"))),u.a.createElement(l.a.Item,null,u.a.createElement(f.Link,{to:"/money/createWallet/2"},Object(T.a)("multiparty_wallet")))),$=Object(p.connect)((function(e){var t=e.user,n=e.wallet,r=e.loading.effects;return U(U(U({},t),n),{},{loading:r["service/queryWallet"],creatingAddress:r["service/createSingleWalletAddress"]||!1})}))(_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&q(e,t)}(v,e);var t,n,r,l,s,p=B(v);function v(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),H(X(t=p.call(this,e)),"switchDisplay",(function(){var e=t.state.hideAmount;t.props.dispatch({type:"user/switchDisplay"}),t.setState({hideAmount:!e})})),H(X(t),"renderWalletMenu",(function(){var e=parseInt(t.state.prevPropsType)||0;return u.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},u.a.createElement("div",{className:A.a.wallet_type},y.s.map((function(t,n){return u.a.createElement("div",{key:t.key,className:n===e?Object(m.j)(A.a.selected,A.a.wallet_type_item):A.a.wallet_type_item},u.a.createElement(f.Link,{to:"/money/home/".concat(n)},t.text))}))))})),H(X(t),"renderInfo",(function(){var e=t.props.wallets,n=t.state,r=n.hideAmount,o=n.prevPropsType;e[o]||t.fetch();var a=r?u.a.createElement(R.a,{type:"iconhide"}):u.a.createElement(R.a,{type:"iconshow"});return u.a.createElement("div",{className:A.a.info},t.renderWalletMenu(),u.a.createElement("div",{className:A.a.total_assets},u.a.createElement("div",{className:A.a.total},r?y.o:u.a.createElement(S,{wallets:e,type:o})," ",u.a.createElement("span",{onClick:t.switchDisplay,className:A.a.show_balance},a))),u.a.createElement("div",{className:A.a.add},u.a.createElement(c.a,{overlay:Y},u.a.createElement("a",{className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()}},u.a.createElement(R.a,{type:"iconcreatewallet",style:{fontSize:18}})))))})),H(X(t),"gotoMessageList",(function(e,n){var r="list";n&&y.r[n].hasTokens&&(r="tokenlist"),t.props.history.push({pathname:"/money/".concat(r,"/").concat(e)})})),H(X(t),"gotoTransfer",(function(e,n){var r;r=2===e?"sendbtc":3===e?"sendeth":6===e?"sendtrx":"sendbsv",t.props.history.push({pathname:"/money/".concat(r,"/").concat(n)})})),H(X(t),"gotoReceive",(function(e){t.props.history.push({pathname:"/money/receive/".concat(e)})})),H(X(t),"renderAssetsList",(function(){var e=t.state,n=e.hideAmount,r=e.prevPropsType,o=t.props.wallets[r];return u.a.createElement("div",{className:A.a.list_container},u.a.createElement("div",{className:A.a.list_content},u.a.createElement("div",{className:A.a.item_head},u.a.createElement("div",{className:A.a.part1},Object(T.a)("wallet")),u.a.createElement("div",{className:A.a.part2},Object(T.a)("amount")),u.a.createElement("div",{className:A.a.part3},Object(T.a)("action"))),o&&o.map((function(e){var r=e.id,o=e.share,a=e.threshold,c=e.name,l=e.token,s=e.joinStatus,p=e.frozen,f=e.status,v=e.type,d=e.waitJoin,h=e.balance;if(y.r[l]){var g=e.total,O=Object(y.e)(l);return g=Object(m.g)(g,l,8),0===s?u.a.createElement("div",{className:A.a.list_item,key:r},u.a.createElement("div",{className:A.a.part1,onClick:function(){return t.gotoMessageList(r)}},u.a.createElement(i.a,{dot:!0},u.a.createElement(b.a,{token:l,className:A.a.coin_icon})),u.a.createElement("div",{className:A.a.coin_name},u.a.createElement("span",{className:A.a.name},c),2===v&&u.a.createElement("span",{className:A.a.wallet_no},a," | ",o))),u.a.createElement("div",{className:A.a.part2},u.a.createElement("div",{className:A.a.join,onClick:function(){return t.joinWallet(r)}},Object(T.a)("join_wallet")))):0===parseInt(f)?u.a.createElement("div",{className:A.a.list_item,key:r},u.a.createElement("div",{className:A.a.part1,onClick:function(){return t.gotoMessageList(r)}},u.a.createElement(i.a,{dot:!0},u.a.createElement(b.a,{token:l,className:A.a.coin_icon})),u.a.createElement("div",{className:A.a.coin_name},u.a.createElement("span",{className:A.a.name},c),2===v&&u.a.createElement("span",{className:A.a.wallet_no},a," | ",o))),u.a.createElement("div",{className:A.a.part2},u.a.createElement("div",{className:A.a.wait_join},d,Object(T.a)("members_to_join"))),u.a.createElement("div",{className:A.a.part3})):u.a.createElement("div",{className:A.a.list_item,key:r},u.a.createElement("div",{className:A.a.part1,onClick:function(){return t.gotoMessageList(r,l)}},u.a.createElement(b.a,{token:l,className:A.a.coin_icon}),u.a.createElement("div",{className:A.a.coin_name},u.a.createElement("div",{className:A.a.name_box},u.a.createElement("div",{className:A.a.name},c),p>0&&u.a.createElement("div",{className:A.a.pending},"Pending TX -",n?y.o:Object(m.g)(p,l,8),O),3===l&&h&&h.nonce&&null===h.nonce.block&&u.a.createElement("div",{className:A.a.pending},"Pending TX")),2===v&&u.a.createElement("span",{className:A.a.wallet_no},a," | ",o))),u.a.createElement("div",{className:A.a.part2},u.a.createElement("span",{className:A.a.amount},n?y.o:g)," ",u.a.createElement("span",{className:A.a.unit},O)),u.a.createElement("div",{className:A.a.part3},u.a.createElement("div",{className:A.a.transfer,onClick:function(){return t.gotoTransfer(l,r)}},u.a.createElement(R.a,{type:"iconicon-send"})," ",Object(T.a)("transfer")),u.a.createElement("span",{className:A.a.receive,onClick:function(){return t.gotoReceive(r)}},u.a.createElement(R.a,{type:"iconreceive"})," ",Object(T.a)("collection"))))}}))))})),t.state={receiveModalVisible:!1,hideAmount:window.localStorage.getItem(y.b.HIDEAMOUNT)||0,prevPropsType:t.props.match.params.type},t}return t=v,n=[{key:"componentDidMount",value:function(){this.fetch()}},{key:"fetch",value:function(e){var t=this.props,n=t.wallets,r=t.dispatch,o=e?parseInt(this.state.prevPropsType):0;if(!(0===o&&n[1].length>0&&n[2].length>0)){var a=n[o];if(!(o>0&&a&&a.length>0))return r({type:"service/queryWallet",payload:{type:o}})}}},{key:"updateWallet",value:(s=V(regeneratorRuntime.mark((function e(){var t,n,r,o,a,i,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this._updating){e.next=2;break}return e.abrupt("return");case 2:return this._updating=!0,t=this.props,n=t.currentWallet,r=t.dispatch,o=n.type,e.next=7,r({type:"service/updateWallet",payload:{type:o}});case 7:if(!(a=e.sent)||!a.length){e.next=32;break}i=W(a),e.prev=10,i.s();case 12:if((c=i.n()).done){e.next=24;break}if(l=c.value,2===parseInt(l.type)){e.next=16;break}return e.abrupt("continue",22);case 16:if(!l.address){e.next=18;break}return e.abrupt("continue",22);case 18:if(1===parseInt(l.status)){e.next=20;break}return e.abrupt("continue",22);case 20:return e.next=22,this.props.dispatch({type:"service/createMultiPartyAddress",payload:{wid:l.id}});case 22:e.next=12;break;case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(10),i.e(e.t0);case 29:return e.prev=29,i.f(),e.finish(29);case 32:this._updating=!1;case 33:case"end":return e.stop()}}),e,this,[[10,26,29,32]])}))),function(){return s.apply(this,arguments)})},{key:"joinWallet",value:(l=V(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dispatch({type:"service/joinWallet",payload:{wid:t}});case 2:(n=e.sent)&&n.success&&this.updateWallet();case 4:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"renderAddressCreating",value:function(){return u.a.createElement(a.a,{title:Object(T.a)("collection"),visible:this.props.creatingAddress,footer:null,onCancel:this.hideReceiveDialog},u.a.createElement("div",{className:A.a.qrcodeWrap},u.a.createElement(x.a,{className:A.a.loading_container}),u.a.createElement("p",null,"Generating address")))}},{key:"render",value:function(){return u.a.createElement("div",{className:A.a.container},this.renderInfo(),u.a.createElement(o.a,{spinning:this.props.loading},this.renderAssetsList()),this.renderAddressCreating())}}],r=[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.match.params.type;return n!==t.prevPropsType?{prevPropsType:n}:null}}],n&&F(t.prototype,n),r&&F(t,r),v}(s.Component))||_},1198:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(0),o=n.n(r),a=n(74),i=n(1106),c=n.n(i),l=n(11);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(s,e);var t,n,r,i=y(s);function s(){return u(this,s),i.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props.className||c.a.icon,t=this.props.token||1;return o.a.createElement("div",{className:e},o.a.createElement(a.a,{type:Object(l.l)(t).icon}))}}])&&p(t.prototype,n),r&&p(t,r),s}(r.Component)},1261:function(e,t,n){"use strict";n(66),n(1116),n(605)},1300:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),c=n(6),l=n.n(c),s=n(173),u=n(5),p=n.n(u),f={adjustX:1,adjustY:1},y=[0,0],m={topLeft:{points:["bl","tl"],overflow:f,offset:[0,-4],targetOffset:y},topCenter:{points:["bc","tc"],overflow:f,offset:[0,-4],targetOffset:y},topRight:{points:["br","tr"],overflow:f,offset:[0,-4],targetOffset:y},bottomLeft:{points:["tl","bl"],overflow:f,offset:[0,4],targetOffset:y},bottomCenter:{points:["tc","bc"],overflow:f,offset:[0,4],targetOffset:y},bottomRight:{points:["tr","br"],overflow:f,offset:[0,4],targetOffset:y}},b=n(34),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var d=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return h.call(r),r.state="visible"in n?{visible:n.visible}:{visible:n.defaultVisible},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.getDerivedStateFromProps=function(e){return"visible"in e?{visible:e.visible}:null},t.prototype.getOverlayElement=function(){var e=this.props.overlay;return"function"==typeof e?e():e},t.prototype.getMenuElementOrLambda=function(){return"function"==typeof this.props.overlay?this.getMenuElement:this.getMenuElement()},t.prototype.getPopupDomNode=function(){return this.trigger.getPopupDomNode()},t.prototype.getOpenClassName=function(){var e=this.props,t=e.openClassName,n=e.prefixCls;return void 0!==t?t:n+"-open"},t.prototype.renderChildren=function(){var e=this.props.children,t=this.state.visible,n=e.props?e.props:{},o=p()(n.className,this.getOpenClassName());return t&&e?Object(r.cloneElement)(e,{className:o}):e},t.prototype.render=function(){var e=this.props,t=e.prefixCls,n=e.transitionName,r=e.animation,a=e.align,i=e.placement,c=e.getPopupContainer,l=e.showAction,u=e.hideAction,p=e.overlayClassName,f=e.overlayStyle,y=e.trigger,b=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["prefixCls","transitionName","animation","align","placement","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","trigger"]),d=u;return d||-1===y.indexOf("contextMenu")||(d=["click"]),o.a.createElement(s.a,v({},b,{prefixCls:t,ref:this.saveTrigger,popupClassName:p,popupStyle:f,builtinPlacements:m,action:y,showAction:l,hideAction:d||[],popupPlacement:i,popupAlign:a,popupTransitionName:n,popupAnimation:r,popupVisible:this.state.visible,afterPopupVisibleChange:this.afterVisibleChange,popup:this.getMenuElementOrLambda(),onPopupVisibleChange:this.onVisibleChange,getPopupContainer:c}),this.renderChildren())},t}(r.Component);d.propTypes={minOverlayWidthMatchTrigger:i.a.bool,onVisibleChange:i.a.func,onOverlayClick:i.a.func,prefixCls:i.a.string,children:i.a.any,transitionName:i.a.string,overlayClassName:i.a.string,openClassName:i.a.string,animation:i.a.any,align:i.a.object,overlayStyle:i.a.object,placement:i.a.string,overlay:i.a.oneOfType([i.a.node,i.a.func]),trigger:i.a.array,alignPoint:i.a.bool,showAction:i.a.array,hideAction:i.a.array,getPopupContainer:i.a.func,visible:i.a.bool,defaultVisible:i.a.bool},d.defaultProps={prefixCls:"rc-dropdown",trigger:["hover"],showAction:[],overlayClassName:"",overlayStyle:{},defaultVisible:!1,onVisibleChange:function(){},placement:"bottomLeft"};var h=function(){var e=this;this.onClick=function(t){var n=e.props,r=e.getOverlayElement().props;"visible"in n||e.setState({visible:!1}),n.onOverlayClick&&n.onOverlayClick(t),r.onClick&&r.onClick(t)},this.onVisibleChange=function(t){var n=e.props;"visible"in n||e.setState({visible:t}),n.onVisibleChange(t)},this.getMinOverlayWidthMatchTrigger=function(){var t=e.props,n=t.minOverlayWidthMatchTrigger,r=t.alignPoint;return"minOverlayWidthMatchTrigger"in e.props?n:!r},this.getMenuElement=function(){var t=e.props.prefixCls,n=e.getOverlayElement(),r={prefixCls:t+"-menu",onClick:e.onClick};return"string"==typeof n.type&&delete r.prefixCls,o.a.cloneElement(n,r)},this.afterVisibleChange=function(t){if(t&&e.getMinOverlayWidthMatchTrigger()){var n=e.getPopupDomNode(),r=l.a.findDOMNode(e);r&&n&&r.offsetWidth>n.offsetWidth&&(n.style.minWidth=r.offsetWidth+"px",e.trigger&&e.trigger._component&&e.trigger._component.alignInstance&&e.trigger._component.alignInstance.forceAlign())}},this.saveTrigger=function(t){e.trigger=t}};Object(b.polyfill)(d);var g=d,O=n(588),w=n(36),E=n(23),j=n(76);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object(j.a)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight");var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(i,e);var t,n,o,a=S(i);function i(){var e;return N(this,i),(e=a.apply(this,arguments)).renderOverlay=function(t){var n,o=e.props.overlay;n="function"==typeof o?o():o;var a=(n=r.Children.only(n)).props;Object(w.a)(!a.mode||"vertical"===a.mode,"Dropdown",'mode="'.concat(a.mode,"\" is not supported for Dropdown's Menu."));var i=a.selectable,c=void 0!==i&&i,l=a.focusable,s=void 0===l||l,u=r.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},r.createElement(E.a,{type:"right",className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"==typeof n.type?o:r.cloneElement(n,{mode:"vertical",selectable:c,focusable:s,expandIcon:u})},e.renderDropDown=function(t){var n,o=t.getPopupContainer,a=t.getPrefixCls,i=e.props,c=i.prefixCls,l=i.children,s=i.trigger,u=i.disabled,f=i.getPopupContainer,y=a("dropdown",c),m=r.Children.only(l),b=r.cloneElement(m,{className:p()(m.props.className,"".concat(y,"-trigger")),disabled:u}),v=u?[]:s;return v&&-1!==v.indexOf("contextMenu")&&(n=!0),r.createElement(g,C({alignPoint:n},e.props,{prefixCls:y,getPopupContainer:f||o,transitionName:e.getTransitionName(),trigger:v,overlay:function(){return e.renderOverlay(y)}}),b)},e}return t=i,(n=[{key:"getTransitionName",value:function(){var e=this.props,t=e.placement,n=void 0===t?"":t,r=e.transitionName;return void 0!==r?r:n.indexOf("top")>=0?"slide-down":"slide-up"}},{key:"render",value:function(){return r.createElement(O.a,null,this.renderDropDown)}}])&&_(t.prototype,n),o&&_(t,o),i}(r.Component);T.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1,placement:"bottomLeft"};var D=n(139);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=q(e);if(t){var o=q(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return F(this,n)}}function F(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var B=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},J=D.a.Group,X=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(i,e);var t,n,o,a=V(i);function i(){var e;return W(this,i),(e=a.apply(this,arguments)).renderButton=function(t){var n=t.getPopupContainer,o=t.getPrefixCls,a=e.props,i=a.prefixCls,c=a.type,l=a.disabled,s=a.onClick,u=a.htmlType,f=a.children,y=a.className,m=a.overlay,b=a.trigger,v=a.align,d=a.visible,h=a.onVisibleChange,g=a.placement,O=a.getPopupContainer,w=a.href,j=a.icon,P=void 0===j?r.createElement(E.a,{type:"ellipsis"}):j,C=a.title,N=B(a,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title"]),_=o("dropdown-button",i),k={align:v,overlay:m,disabled:l,trigger:l?[]:b,onVisibleChange:h,placement:g,getPopupContainer:O||n};return"visible"in e.props&&(k.visible=d),r.createElement(J,M({},N,{className:p()(_,y)}),r.createElement(D.a,{type:c,disabled:l,onClick:s,htmlType:u,href:w,title:C},f),r.createElement(T,k,r.createElement(D.a,{type:c},P)))},e}return t=i,(n=[{key:"render",value:function(){return r.createElement(O.a,null,this.renderButton)}}])&&I(t.prototype,n),o&&I(t,o),i}(r.Component);X.defaultProps={placement:"bottomRight",type:"default"},T.Button=X;t.a=T}}]);