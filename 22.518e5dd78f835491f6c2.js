(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1174:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return X}));n(1221);var r,o,a=n(1229),c=(n(612),n(304)),i=(n(607),n(299)),s=n(0),u=n.n(s),l=n(170),f=n(11),p=n(171),y=n(1199),m=n(1209),b=n(1200),h=n(302),d=n(67),v=(n(1195),n(1198)),w=(n(606),n(172)),g=n(58),k=n(15),O=n(1125),E=n.n(O);function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){_(a,r,o,c,i,"next",e)}function i(e){_(a,r,o,c,i,"throw",e)}c(void 0)}))}}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(e,t){return!t||"object"!==j(t)&&"function"!=typeof t?N(e):t}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){L(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var W,I=(r=Object(l.connect)((function(e){var t=e.user,n=e.wallet;return $($({},t),n)})),Object(g.withRouter)(o=r(o=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(c,e);var t,n,r,o,a=R(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),L(N(t=a.call(this,e)),"changeToken",function(){var e=S(regeneratorRuntime.mark((function e(n,r,o,a){var c,i,s,u,l,f,p,y,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.props,i=c.match,s=c.dispatch,u=c.createCallback,l=c.currentWallet,1===(f=l.token)||7===f?(p="".concat(n,"BsvToken"),y=o):3===f?(p="".concat(n,"EthToken"),y=r.toLowerCase()):6===f&&(p="".concat(n,"TrxToken"),y=r.toLowerCase()),e.next=5,s({type:"service/".concat(p),payload:{token:y,wid:parseInt(i.params.id)}});case 5:e.sent.success?((m=t.state.showList)[a].status="add"===n?1:0,t.setState({showList:m}),u(!0)):w.a.error(Object(k.a)("".concat(n,"_token_error")));case 7:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}()),L(N(t),"handleChange",(function(e){var n=e.target.value;if(!n)return t.setState({showList:t.state.userToken});var r=t.state.tokens,o=t.searchByKeywords(n,r);t.setState({showList:o})})),t.state={posting:!1,loading:!1,showList:[],tokens:[],userToken:[]},t}return t=c,(n=[{key:"componentDidMount",value:(o=S(regeneratorRuntime.mark((function e(){var t,n,r,o,a,c,i,s,u,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props,n=t.ercToken,r=t.trcToken,o=t.bsvToken,a=t.bsvTestToken,c=this.props.currentWallet,i=c.balance.balance,1===(u=c.token)?(s=o,this.tk="bsv"):7===u?(s=a,this.tk="bsv"):3===u?(s=n,this.tk="eth"):6===u&&(s=r,this.tk="trx"),l=JSON.parse(JSON.stringify(s))||[],s&&s.length>0&&i.forEach((function(e){if(e){var t=l.findIndex((function(t){return t.symbol.toLowerCase()===(e.token||e.symbol).toLowerCase()}));t>-1&&(l[t].status=1),Object.assign(e,l[t])}})),this.setState({showList:i,tokens:l,userToken:i});case 8:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"throttle",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=(new Date).getTime();return function(){var r=(new Date).getTime();r-n>t&&(e(),n=r)}}},{key:"escapeRegExpWildcards",value:function(e){var t=/([\(\[\{\\\^\$\}\]\)\?\*\+\.])/gim;return e&&t.test(e)?e.replace(t,"\\$1"):e}},{key:"searchByKeywords",value:function(e,t){var n=new RegExp(".*?"+this.escapeRegExpWildcards(e)+".*?","img");return t.filter((function(t){return n.test(t.name||t.token_name)||n.test(t.symbol||t.token_symbol)||e==t.address||e==t.id}))}},{key:"render",value:function(){var e=this,t=this.state.showList,n=this.props.currentWallet,r=f.s[n.token];return u.a.createElement("div",{className:E.a.container},u.a.createElement("div",{className:E.a.header},u.a.createElement("div",{className:E.a.title},Object(k.a)("add_token_accounts"))),u.a.createElement("div",{className:E.a.search},u.a.createElement(v.a,{className:E.a.search_input,placeholder:Object(k.a)("search_token_holder"),onChange:this.handleChange})),u.a.createElement("div",{className:E.a.token_list_wrap},u.a.createElement("div",{className:E.a.user_token_list},u.a.createElement("div",{className:E.a.token},u.a.createElement(y.a,{token:n.token,className:E.a.coin_icon}),u.a.createElement("span",{className:E.a.token_name},u.a.createElement("span",{style:{fontWeight:"bold"}},r.name)," | ",r.fullname)),t.map((function(t,n){if(t){var r=t.symbol,o=t.logoURI,a=t.name,c=(t.wid,t.id),i=t.status,s=t.token,l=t.token_logo,f=o||l;if(s!==e.tk)return u.a.createElement("div",{className:E.a.token,key:r+c+n},f?u.a.createElement("img",{src:f,width:"25",className:E.a.token_img}):u.a.createElement(m.a,{name:a,style:{width:25,height:25,lineHeight:"25px",fontSize:14,fontWeight:500,marginRight:8}}),u.a.createElement("span",{className:E.a.token_name},u.a.createElement("span",{style:{fontWeight:"bold"}},r)," | ",a),1===i?u.a.createElement("span",{onClick:function(){return e.changeToken("remove",r,c,n)}},u.a.createElement(d.a,{type:"iconicon-tokenswap-selected",style:{fontSize:"25px"}})):u.a.createElement("span",{onClick:function(){return e.changeToken("add",r,c,n)}},u.a.createElement("span",{className:E.a.circle})))}})))))}}])&&P(t.prototype,n),r&&P(t,r),c}(s.Component))||o)||o),M=n(1116),A=n.n(M);function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t,n,r,o,a,c){try{var i=e[a](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,o)}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=K(e);if(t){var o=K(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return H(this,n)}}function H(e,t){return!t||"object"!==q(t)&&"function"!=typeof t?J(e):t}function J(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){Q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=Object(l.connect)((function(e){var t=e.wallet,n=e.loading.effects;return G(G({},t),{},{loading:n["service/queryWalletById"]||n["wallet/queryErcToken"]||n["wallet/queryTrcToken"]||n["wallet/queryBsvToken"]||!1})}))(W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(v,e);var t,n,r,o,s,l=F(v);function v(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),Q(J(t=l.call(this,e)),"switchDisplay",(function(){var e=t.state.hideAmount;t.props.dispatch({type:"user/switchDisplay"}),t.setState({hideAmount:!e})})),Q(J(t),"showDrawer",(function(){t.setState({drawer_visible:!0})})),Q(J(t),"closeDrawer",(function(){t.setState({drawer_visible:!1})})),Q(J(t),"renderTokenName",(function(e){var n=t.props.currentWallet,r=n.id,o=e.id,a=e.token,c=e.logoURI,s=e.name,l=e.token_logo,p=f.s[n.token],b=null,h=null,d=c||l;return a===Object(f.e)(n.token).toLowerCase()||7===n.token&&e.is_bsv?(b=u.a.createElement(y.a,{token:n.token,className:A.a.coin_icon}),h="".concat(p.name," | ").concat(p.fullname)):(b=t.state.token_loading?u.a.createElement(i.a,{size:"small"}):d?u.a.createElement("img",{src:d,width:"25",className:A.a.token_img}):u.a.createElement(m.a,{name:s,size:"25",style:{width:25,height:25,lineHeight:"25px",fontSize:14,fontWeight:500,marginRight:8}}),h=s?"".concat(a.toUpperCase()," | ").concat(s):a.toUpperCase()),u.a.createElement("div",{className:A.a.part1,onClick:function(){return t.gotoMessageList(r,a,o)}},b,u.a.createElement("div",{className:A.a.coin_name},u.a.createElement("div",{className:A.a.name_box},u.a.createElement("div",{className:A.a.name},h))))})),Q(J(t),"gotoInfoPage",(function(e){t.props.history.push({pathname:"/money/walletinfo/".concat(e)})})),Q(J(t),"renderInfo",(function(){var e=t.props,n=e.match,r=e.currentWallet,o=n.params.id,a=t.state.hideAmount,c=a?u.a.createElement(d.a,{type:"iconhide"}):u.a.createElement(d.a,{type:"iconshow"});return u.a.createElement("div",{className:A.a.info},u.a.createElement(y.a,{token:r.token}),u.a.createElement("div",{className:A.a.wallet_name,onClick:function(){return t.gotoInfoPage(o)}},r.name," ",u.a.createElement("span",null,u.a.createElement(d.a,{type:"iconwallet-info"}))),u.a.createElement("div",{className:A.a.total_assets},u.a.createElement("div",{className:A.a.total},a?f.o:u.a.createElement(b.a,{value:7===r.token?0:r.total,tokenAmount:r.usd,token:r.token}),u.a.createElement("span",{onClick:t.switchDisplay,className:A.a.show_balance},c))),u.a.createElement("div",{className:A.a.add},u.a.createElement("a",{className:"ant-dropdown-link",onClick:t.showDrawer},u.a.createElement(d.a,{type:"iconcreatewallet",style:{fontSize:18}}))))})),Q(J(t),"gotoMessageList",(function(e,n,r){var o=t.props,a=o.currentWallet,c=o.history;6===a.token&&"trx"!==n||3===a.token&&"eth"!==n?c.push({pathname:"/money/list/".concat(e,"/0,").concat(n)}):r&&"bsv"!==n?(n=n.replace("/","-"),c.push({pathname:"/money/list/".concat(e,"/").concat(r,",").concat(n)})):c.push({pathname:"/money/list/".concat(e)})})),Q(J(t),"gotoTransfer",(function(e,n){var r=t.props,o=r.currentWallet,a=r.history,c=o.id,i=o.token,s="/money/".concat(2===i?"sendbtc":3===i?"sendeth":6===i?"sendtrx":1!==i&&7!==i||!n||"bsv"===n?"sendbsv":"sendbsvtoken","/").concat(c);n&&e&&"bsv"!==n?(n=n.replace("/","-"),s+="/".concat(e,",").concat(n)):n&&(s+="/".concat(n)),a.push({pathname:s})})),Q(J(t),"gotoReceive",(function(e){t.props.history.push({pathname:"/money/receive/".concat(e)})})),Q(J(t),"goHome",(function(){t.props.history.push({pathname:"/money/home/0"})})),t.state={joining:0,receiveModalVisible:!1,hideAmount:window.localStorage.getItem(f.b.HIDEAMOUNT)||0,drawer_visible:!1,token_loading:!0},t}return t=v,(n=[{key:"getWalletId",value:function(){return parseInt(this.props.match.params.id)}},{key:"componentDidMount",value:function(){this.init()}},{key:"init",value:(o=regeneratorRuntime.mark((function e(){var t,n,r,o,a,c,i,s,u,l,f,p,y,m=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.dispatch,r=t.match,o=parseInt(r.params.id),e.next=4,n({type:"service/queryWalletById",payload:{wid:o}});case 4:return a=e.sent,c=this.props,i=c.ercToken,c.ercTokenTimestamp,s=c.trcToken,c.trcTokenTimestamp,u=c.bsvToken,c.bsvTokenTimestamp,1===(f=a.token)||7===f?(l=u,p="queryBsvToken",this.tk="bsv"):3===f?(l=i,p="queryErcToken",this.tk="eth"):6===f&&(l=s,p="queryTrcToken",this.tk="trx"),e.next=10,n({type:"wallet/".concat(p),payload:{}});case 10:return y=e.sent,l=y.tokens,a.balance&&a.balance.balance.forEach((function(e){var t;e&&!e.symbol&&e.token!==m.tk&&(t=6===a.token||3===a.token?l.find((function(t){return t.symbol.toLowerCase()===e.token})):l.find((function(t){var n=t.symbol||t.token_symbol;e.token,n.toLowerCase()})),Object.assign(e,t))})),e.next=15,n({type:"wallet/saveCurrent",payload:a});case 15:this.setState({token_loading:!1});case 16:case"end":return e.stop()}}),e,this)})),s=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=o.apply(e,t);function c(e){z(a,n,r,c,i,"next",e)}function i(e){z(a,n,r,c,i,"throw",e)}c(void 0)}))},function(){return s.apply(this,arguments)})},{key:"createCallback",value:function(e){var t=this.props;(0,t.dispatch)({type:"service/queryWalletById",payload:{wid:t.currentWallet.id}})}},{key:"renderList",value:function(){var e=this,t=this.state.hideAmount,n=this.props.currentWallet;return u.a.createElement("div",{className:A.a.list_container,style:{height:473,padding:"25px 30px 0"}},n.balance&&n.balance.balance.map((function(r,o){if(r){var a=r.id,c=r.token,i=r.value;return r.address,r.symbol,r.logoURI,u.a.createElement("div",{className:A.a.list_item,key:a||c+o},e.renderTokenName(r),u.a.createElement("div",{className:A.a.part2},u.a.createElement("span",{className:A.a.amount},t?f.o:Object(p.c)(i,8))," ",u.a.createElement("span",{className:A.a.unit},c.toUpperCase())),u.a.createElement("div",{className:A.a.part3},u.a.createElement("div",{className:A.a.transfer,onClick:function(){return e.gotoTransfer(a,c)}},u.a.createElement(d.a,{type:"iconicon-send"})," ",Object(k.a)("transfer")),u.a.createElement("span",{className:A.a.receive,onClick:function(){return e.gotoReceive(n.id)}},u.a.createElement(d.a,{type:"iconreceive"})," ",Object(k.a)("collection"))))}})))}},{key:"renderAddressCreating",value:function(){return u.a.createElement(c.a,{title:Object(k.a)("collection"),visible:this.props.creatingAddress,footer:null,onCancel:this.hideReceiveDialog},u.a.createElement("div",{className:A.a.qrcodeWrap},u.a.createElement(h.a,{className:A.a.loading_container}),u.a.createElement("p",null,"Generating address")))}},{key:"render",value:function(){var e=this,t=this.props.loading;return u.a.createElement("div",{className:A.a.container},u.a.createElement(i.a,{spinning:t},this.renderInfo(),this.renderList()),this.renderAddressCreating(),u.a.createElement("span",{className:A.a.goback,onClick:this.goHome}," ",Object(k.a)("back")),this.state.drawer_visible&&u.a.createElement(a.a,{width:400,title:"",placement:"right",closable:!1,onClose:this.closeDrawer,visible:this.state.drawer_visible,getContainer:!1,style:{position:"absolute"}},u.a.createElement(I,{createCallback:function(t){return e.createCallback(t)}})))}}])&&B(t.prototype,n),r&&B(t,r),v}(s.Component))||W},1199:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(0),o=n.n(r),a=n(67),c=n(1106),i=n.n(c),s=n(11);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,c=y(u);function u(){return l(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){var e=this.props.className||i.a.icon,t=this.props.token||1;return o.a.createElement("div",{className:e},o.a.createElement(a.a,{type:Object(s.l)(t).icon}))}}])&&f(t.prototype,n),r&&f(t,r),u}(r.Component)},1200:function(e,t,n){"use strict";var r,o=n(0),a=n.n(o),c=n(170),i=(n(115),n(33)),s=n.n(i),u=n(11),l=n(171);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=Object(l.h)(),k=Object(c.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(c,e);var t,n,r,o=b(c);function c(){return p(this,c),o.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.price,n=e.value,r=e.usd,o=e.exchangeRate,c=e.token,i=e.tokenAmount,l=(u.s[c]||u.s[1]).name.toLowerCase();if(7===c&&(l="bsv"),!t[l])return null;var f=null,p=g.currencyCode.toLowerCase();f=t[l][p]?t[l][p]:s()(t[l].usd).times(o[p]),r&&(f=s()(f).div(t[l].usd).multipliedBy(r));var y=0;return y=3===c||6===c?(y=(y=s()(n).times(f)).plus(i||0)).toFixed(2,1):s()(n).div(1e8).times(f).toFixed(2,1),a.a.createElement("span",null,g.symbol,y," ",g.currencyCode)}}])&&y(t.prototype,n),r&&y(t,r),c}(o.Component))||r;t.a=k},1209:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),o=n.n(r),a=(n(67),n(1108)),c=n.n(a);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(i,e);var t,n,r,a=f(i);function i(){return s(this,i),a.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.name,n=e.style;if(e.size,!t)return null;var r=t.substr(0,1).toUpperCase();return o.a.createElement("div",{className:c.a.logo,style:n},r)}}])&&u(t.prototype,n),r&&u(t,r),i}(r.Component)},1243:function(e,t,n){"use strict";e.exports=n(1263)},1263:function(e,t,n){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,y=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,b=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,d=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,w=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,k=r?Symbol.for("react.scope"):60119;function O(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case c:case s:case i:case m:return e;default:switch(e=e&&e.$$typeof){case l:case y:case d:case h:case u:return e;default:return t}}case a:return t}}}function E(e){return O(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=y,t.Fragment=c,t.Lazy=d,t.Memo=h,t.Portal=a,t.Profiler=s,t.StrictMode=i,t.Suspense=m,t.isAsyncMode=function(e){return E(e)||O(e)===f},t.isConcurrentMode=E,t.isContextConsumer=function(e){return O(e)===l},t.isContextProvider=function(e){return O(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return O(e)===y},t.isFragment=function(e){return O(e)===c},t.isLazy=function(e){return O(e)===d},t.isMemo=function(e){return O(e)===h},t.isPortal=function(e){return O(e)===a},t.isProfiler=function(e){return O(e)===s},t.isStrictMode=function(e){return O(e)===i},t.isSuspense=function(e){return O(e)===m},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===p||e===s||e===i||e===m||e===b||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===h||e.$$typeof===u||e.$$typeof===l||e.$$typeof===y||e.$$typeof===w||e.$$typeof===g||e.$$typeof===k||e.$$typeof===v)},t.typeOf=O}}]);