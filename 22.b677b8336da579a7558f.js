(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1033:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Q}));n(1227);var r,o,a=n(1234),c=(n(474),n(304)),s=(n(469),n(298)),i=n(0),u=n.n(i),l=n(167),f=n(11),p=n(1044),m=n(1196),y=n(1208),d=n(1197),h=n(301),b=n(73),v=(n(1192),n(1195)),j=(n(468),n(168)),g=n(66),w=n(16),k=n(986),O=n.n(k);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t,n,r,o,a,c){try{var s=e[a](c),i=s.value}catch(e){return void n(e)}s.done?t(i):Promise.resolve(i).then(r,o)}function _(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){S(a,r,o,c,s,"next",e)}function s(e){S(a,r,o,c,s,"throw",e)}c(void 0)}))}}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=N(e);if(t){var o=N(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}function R(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?T(e):t}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M,L=(r=Object(l.connect)((function(e){var t=e.user,n=e.wallet;return $($({},t),n)})),Object(g.withRouter)(o=r(o=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(c,e);var t,n,r,o,a=C(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),z(T(t=a.call(this,e)),"changeToken",function(){var e=_(regeneratorRuntime.mark((function e(n,r,o,a){var c,s,i,u,l,f,p,m,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.props,s=c.match,i=c.dispatch,u=c.createCallback,l=c.currentWallet,1===(f=l.token)||7===f?(p="".concat(n,"BsvToken"),m=o):3===f?(p="".concat(n,"EthToken"),m=r.toLowerCase()):6===f&&(p="".concat(n,"TrxToken"),m=r.toLowerCase()),e.next=5,i({type:"service/".concat(p),payload:{token:m,wid:parseInt(s.params.id)}});case 5:e.sent.success?((y=t.state.showList)[a].status="add"===n?1:0,t.setState({showList:y}),u(!0)):j.a.error(Object(w.a)("".concat(n,"_token_error")));case 7:case"end":return e.stop()}}),e)})));return function(t,n,r,o){return e.apply(this,arguments)}}()),z(T(t),"handleChange",(function(e){var n=e.target.value;if(!n)return t.setState({showList:t.state.userToken});var r=t.state.tokens,o=t.searchByKeywords(n,r);t.setState({showList:o})})),t.state={posting:!1,loading:!1,showList:[],tokens:[],userToken:[]},t}return t=c,(n=[{key:"componentDidMount",value:(o=_(regeneratorRuntime.mark((function e(){var t,n,r,o,a,c,s,i,u,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.props,n=t.ercToken,r=t.trcToken,o=t.bsvToken,a=t.bsvTestToken,c=this.props.currentWallet,s=c.balance.balance,1===(u=c.token)?(i=o,this.tk="bsv"):7===u?(i=a,this.tk="bsv"):3===u?(i=n,this.tk="eth"):6===u&&(i=r,this.tk="trx"),l=JSON.parse(JSON.stringify(i))||[],i&&i.length>0&&s.forEach((function(e){if(e){var t=l.findIndex((function(t){return t.symbol.toLowerCase()===(e.token||e.symbol).toLowerCase()}));t>-1&&(l[t].status=1),Object.assign(e,l[t])}})),this.setState({showList:s,tokens:l,userToken:s});case 8:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})},{key:"throttle",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=(new Date).getTime();return function(){var r=(new Date).getTime();r-n>t&&(e(),n=r)}}},{key:"escapeRegExpWildcards",value:function(e){var t=/([\(\[\{\\\^\$\}\]\)\?\*\+\.])/gim;return e&&t.test(e)?e.replace(t,"\\$1"):e}},{key:"searchByKeywords",value:function(e,t){var n=new RegExp(".*?"+this.escapeRegExpWildcards(e)+".*?","img");return t.filter((function(t){return n.test(t.name||t.token_name)||n.test(t.symbol||t.token_symbol)||e==t.address||e==t.id}))}},{key:"render",value:function(){var e=this,t=this.state.showList,n=this.props.currentWallet,r=f.r[n.token];return u.a.createElement("div",{className:O.a.container},u.a.createElement("div",{className:O.a.header},u.a.createElement("div",{className:O.a.title},Object(w.a)("add_token_accounts"))),u.a.createElement("div",{className:O.a.search},u.a.createElement(v.a,{className:O.a.search_input,placeholder:Object(w.a)("search_token_holder"),onChange:this.handleChange})),u.a.createElement("div",{className:O.a.token_list_wrap},u.a.createElement("div",{className:O.a.user_token_list},u.a.createElement("div",{className:O.a.token},u.a.createElement(m.a,{token:n.token,className:O.a.coin_icon}),u.a.createElement("span",{className:O.a.token_name},u.a.createElement("span",{style:{fontWeight:"bold"}},r.name)," | ",r.fullname)),t.map((function(t,n){if(t){var r=t.symbol,o=t.logoURI,a=t.name,c=(t.wid,t.id),s=t.status,i=t.token,l=t.token_logo,f=o||l;if(i!==e.tk)return u.a.createElement("div",{className:O.a.token,key:r+c+n},f?u.a.createElement("img",{src:f,width:"25",className:O.a.token_img}):u.a.createElement(y.a,{name:a,style:{width:25,height:25,lineHeight:"25px",fontSize:14,fontWeight:500,marginRight:8}}),u.a.createElement("span",{className:O.a.token_name},u.a.createElement("span",{style:{fontWeight:"bold"}},r)," | ",a),1===s?u.a.createElement("span",{onClick:function(){return e.changeToken("remove",r,c,n)}},u.a.createElement(b.a,{type:"iconicon-tokenswap-selected",style:{fontSize:"25px"}})):u.a.createElement("span",{onClick:function(){return e.changeToken("add",r,c,n)}},u.a.createElement("span",{className:O.a.circle})))}})))))}}])&&P(t.prototype,n),r&&P(t,r),c}(i.Component))||o)||o),I=n(979),W=n.n(I);function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function q(e,t,n,r,o,a,c){try{var s=e[a](c),i=s.value}catch(e){return void n(e)}s.done?t(i):Promise.resolve(i).then(r,o)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=J(e);if(t){var o=J(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return H(this,n)}}function H(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?Y(e):t}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e){return(J=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Q=Object(l.connect)((function(e){var t=e.wallet,n=e.loading.effects;return K(K({},t),{},{loading:n["service/queryWalletById"]||n["wallet/queryErcToken"]||n["wallet/queryTrcToken"]||n["wallet/queryBsvToken"]||!1})}))(M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&U(e,t)}(v,e);var t,n,r,o,i,l=B(v);function v(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),G(Y(t=l.call(this,e)),"switchDisplay",(function(){var e=t.state.hideAmount;t.props.dispatch({type:"user/switchDisplay"}),t.setState({hideAmount:!e})})),G(Y(t),"showDrawer",(function(){t.setState({drawer_visible:!0})})),G(Y(t),"closeDrawer",(function(){t.setState({drawer_visible:!1})})),G(Y(t),"renderTokenName",(function(e){var n=t.props.currentWallet,r=n.id,o=e.id,a=e.token,c=e.logoURI,i=(e.symbol,e.name),l=e.token_logo,p=f.r[n.token],d=null,h=null,b=c||l;return a===Object(f.e)(n.token).toLowerCase()||7===n.token&&e.is_bsv?(d=u.a.createElement(m.a,{token:n.token,className:W.a.coin_icon}),h="".concat(p.name," | ").concat(p.fullname)):(d=t.state.token_loading?u.a.createElement(s.a,{size:"small"}):b?u.a.createElement("img",{src:b,width:"25",className:W.a.token_img}):u.a.createElement(y.a,{name:i,style:{width:25,height:25,lineHeight:"25px",fontSize:14,fontWeight:500,marginRight:8}}),h=i?"".concat(a.toUpperCase()," | ").concat(i):a.toUpperCase()),u.a.createElement("div",{className:W.a.part1,onClick:function(){return t.gotoMessageList(r,a,o)}},d,u.a.createElement("div",{className:W.a.coin_name},u.a.createElement("div",{className:W.a.name_box},u.a.createElement("div",{className:W.a.name},h))))})),G(Y(t),"gotoInfoPage",(function(e){t.props.history.push({pathname:"/money/walletinfo/".concat(e)})})),G(Y(t),"renderInfo",(function(){var e=t.props,n=e.match,r=e.currentWallet,o=n.params.id,a=t.state.hideAmount,c=a?u.a.createElement(b.a,{type:"iconhide"}):u.a.createElement(b.a,{type:"iconshow"});return u.a.createElement("div",{className:W.a.info},u.a.createElement(m.a,{token:r.token}),u.a.createElement("div",{className:W.a.wallet_name,onClick:function(){return t.gotoInfoPage(o)}},r.name," ",u.a.createElement("span",null,u.a.createElement(b.a,{type:"iconwallet-info"}))),u.a.createElement("div",{className:W.a.total_assets},u.a.createElement("div",{className:W.a.total},a?f.o:u.a.createElement(d.a,{value:r.total,tokenAmount:r.usd,token:r.token})," ",u.a.createElement("span",{onClick:t.switchDisplay,className:W.a.show_balance},c))),u.a.createElement("div",{className:W.a.add},u.a.createElement("a",{className:"ant-dropdown-link",onClick:t.showDrawer},u.a.createElement(b.a,{type:"iconcreatewallet",style:{fontSize:18}}))))})),G(Y(t),"gotoMessageList",(function(e,n,r){var o=t.props,a=o.currentWallet,c=o.history;6===a.token&&"trx"!==n||3===a.token&&"eth"!==n?c.push({pathname:"/money/list/".concat(e,"/0,").concat(n)}):r&&"bsv"!==n?(n=n.replace("/","-"),c.push({pathname:"/money/list/".concat(e,"/").concat(r,",").concat(n)})):c.push({pathname:"/money/list/".concat(e)})})),G(Y(t),"gotoTransfer",(function(e,n){var r=t.props,o=r.currentWallet,a=r.history,c=o.id,s=o.token,i="/money/".concat(2===s?"sendbtc":3===s?"sendeth":6===s?"sendtrx":1!==s&&7!==s||!n||"bsv"===n?"sendbsv":"sendbsvtoken","/").concat(c);n&&e&&"bsv"!==n?i+="/".concat(e,",").concat(n):n&&(i+="/".concat(n)),a.push({pathname:i})})),G(Y(t),"gotoReceive",(function(e){t.props.history.push({pathname:"/money/receive/".concat(e)})})),G(Y(t),"goHome",(function(){t.props.history.push({pathname:"/money/home/0"})})),t.state={joining:0,receiveModalVisible:!1,hideAmount:window.localStorage.getItem(f.b.HIDEAMOUNT)||0,drawer_visible:!1,token_loading:!0},t}return t=v,(n=[{key:"getWalletId",value:function(){return parseInt(this.props.match.params.id)}},{key:"componentDidMount",value:function(){this.init()}},{key:"init",value:(o=regeneratorRuntime.mark((function e(){var t,n,r,o,a,c,s,i,u,l,f,p,m,y=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,n=t.dispatch,r=t.match,o=parseInt(r.params.id),e.next=4,n({type:"service/queryWalletById",payload:{wid:o}});case 4:return a=e.sent,c=this.props,s=c.ercToken,c.ercTokenTimestamp,i=c.trcToken,c.trcTokenTimestamp,u=c.bsvToken,c.bsvTokenTimestamp,1===(f=a.token)||7===f?(l=u,p="queryBsvToken",this.tk="bsv"):3===f?(l=s,p="queryErcToken",this.tk="eth"):6===f&&(l=i,p="queryTrcToken",this.tk="trx"),e.next=10,n({type:"wallet/".concat(p),payload:{}});case 10:return m=e.sent,l=m.tokens,a.balance&&a.balance.balance.forEach((function(e){var t;e&&!e.symbol&&e.token!==y.tk&&(t=6===a.token||3===a.token?l.find((function(t){return t.symbol.toLowerCase()===e.token})):l.find((function(t){var n=t.symbol||t.token_symbol;e.token,n.toLowerCase()})),Object.assign(e,t))})),e.next=15,n({type:"wallet/saveCurrent",payload:a});case 15:this.setState({token_loading:!1});case 16:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=o.apply(e,t);function c(e){q(a,n,r,c,s,"next",e)}function s(e){q(a,n,r,c,s,"throw",e)}c(void 0)}))},function(){return i.apply(this,arguments)})},{key:"createCallback",value:function(e){var t=this.props;(0,t.dispatch)({type:"service/queryWalletById",payload:{wid:t.currentWallet.id}})}},{key:"renderList",value:function(){var e=this,t=this.state.hideAmount,n=this.props.currentWallet;return u.a.createElement("div",{className:W.a.list_container,style:{height:473,padding:"25px 30px 0"}},n.balance&&n.balance.balance.map((function(r,o){if(r){var a=r.id,c=r.token,s=r.value;return r.address,r.symbol,r.logoURI,u.a.createElement("div",{className:W.a.list_item,key:a||c+o},e.renderTokenName(r),u.a.createElement("div",{className:W.a.part2},u.a.createElement("span",{className:W.a.amount},t?f.o:Object(p.c)(s,8))," ",u.a.createElement("span",{className:W.a.unit},c.toUpperCase())),u.a.createElement("div",{className:W.a.part3},u.a.createElement("div",{className:W.a.transfer,onClick:function(){return e.gotoTransfer(a,c)}},u.a.createElement(b.a,{type:"iconicon-send"})," ",Object(w.a)("transfer")),u.a.createElement("span",{className:W.a.receive,onClick:function(){return e.gotoReceive(n.id)}},u.a.createElement(b.a,{type:"iconreceive"})," ",Object(w.a)("collection"))))}})))}},{key:"renderAddressCreating",value:function(){return u.a.createElement(c.a,{title:Object(w.a)("collection"),visible:this.props.creatingAddress,footer:null,onCancel:this.hideReceiveDialog},u.a.createElement("div",{className:W.a.qrcodeWrap},u.a.createElement(h.a,{className:W.a.loading_container}),u.a.createElement("p",null,"Generating address")))}},{key:"render",value:function(){var e=this,t=this.props.loading;return u.a.createElement("div",{className:W.a.container},u.a.createElement(s.a,{spinning:t},this.renderInfo(),this.renderList()),this.renderAddressCreating(),u.a.createElement("span",{className:W.a.goback,onClick:this.goHome}," ",Object(w.a)("back")),this.state.drawer_visible&&u.a.createElement(a.a,{width:400,title:"",placement:"right",closable:!1,onClose:this.closeDrawer,visible:this.state.drawer_visible,getContainer:!1,style:{position:"absolute"}},u.a.createElement(L,{createCallback:function(t){return e.createCallback(t)}})))}}])&&F(t.prototype,n),r&&F(t,r),v}(i.Component))||M},1044:function(e,t,n){"use strict";n.d(t,"d",(function(){return y})),n.d(t,"f",(function(){return d})),n.d(t,"m",(function(){return b})),n.d(t,"l",(function(){return v})),n.d(t,"j",(function(){return j})),n.d(t,"k",(function(){return g})),n.d(t,"c",(function(){return w})),n.d(t,"e",(function(){return k})),n.d(t,"g",(function(){return O})),n.d(t,"b",(function(){return E})),n.d(t,"h",(function(){return S})),n.d(t,"a",(function(){return _})),n.d(t,"i",(function(){return P}));n(1201);var r=n(1039),o=n.n(r),a=n(55),c=n.n(a),s=n(297),i=n(11),u=n(56),l=n.n(u),f=n(4),p=l.a.parse(window.location.search),m=window.location;function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return e?("string"==typeof e&&/^\d+$/.test(e)&&(e=parseInt(e,10)),o()(e).format(t)):e}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";if(!e)return"";var n=e;"number"==typeof e?n=new Date(e):"string"==typeof e&&(n=new Date(+e));var r={"y+":n.getFullYear(),"M+":n.getMonth()+1,"d+":n.getDate(),"h+":n.getHours(),"m+":n.getMinutes(),"s+":n.getSeconds(),"q+":Math.floor((n.getMonth()+3)/3),"S+":n.getMilliseconds()};for(var o in r)if(new RegExp("("+o+")").test(t))if("y+"===o)t=t.replace(RegExp.$1,(""+r[o]).substr(4-RegExp.$1.length));else if("S+"===o){var a=RegExp.$1.length;a=1===a?3:a,t=t.replace(RegExp.$1,("00"+r[o]).substr((""+r[o]).length-1,a))}else t=t.replace(RegExp.$1,1===RegExp.$1.length?r[o]:("00"+r[o]).substr((""+r[o]).length));return t}var h=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;function b(e){return!!e&&h.test(e)}function v(e){if(!e)return e;if(!parseFloat(e))return 0;for(var t="",n=0,r=(e=(e||0).toString()).split("."),o=r[0],a=o.length-1;a>=0;a--)n++,t=o.charAt(a)+t,n%3||0==a||(t=","+t);return 1===r.length?t:t+"."+r[1]}function j(){return Array.prototype.slice.call(arguments).join(" ")}function g(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[2,7];if(e){if(e.length<t[0]+t[1])return e;var n=e.substr(0,t[0]),r=e.substr(-t[1],t[1]);return n+"****"+r}}var w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(!e)return 0;var n=e.toString().split(".");return e.toString().indexOf("e")>-1||n[1]&&n[1].length>t?c()(e).toFixed(t):e},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return e?c()(e).div(Math.pow(10,t)).toString():0},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;if(!e)return 0;var r=parseInt(t),o=e,a=i.r[r].decimal;a&&(o=c()(e).div("1e".concat(a)).toString());var s=o.toString().split(".");return o.toString().indexOf("e")>-1||s[1]&&s[1].length>n&&0!==n?c()(o).toFixed(n):o},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e?c()(e).div(Math.pow(10,t)).toString():0},S=function(){var e=s.a.findIndex((function(e){return"usd"===e.currencyCode.toLowerCase()})),t=window.localStorage.getItem("VoltLocalCurrencyIndex")||e,n=s.a[t];return n||(window.localStorage.removeItem("VoltLocalCurrencyIndex"),n=s.a[e]),n},_=function(e){var t="voltpre.bitmesh.com";return(p.wss&&p.wss.indexOf(t)>-1||m.pathname.indexOf("test.html")>-1)&&(e=e.replace("volt.id",t).replace("volt.bitmesh.com",t)),e},P=function(e,t){var n="";if(1===t&&(n="mainnet"),7===t&&(n="testnet"),!n)return!1;try{return new f.Address(e,n),!0}catch(e){return!1}}},1196:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(0),o=n.n(r),a=n(73),c=n(967),s=n.n(c),i=n(11);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}function y(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(u,e);var t,n,r,c=m(u);function u(){return l(this,u),c.apply(this,arguments)}return t=u,(n=[{key:"render",value:function(){var e=this.props.className||s.a.icon,t=this.props.token||1;return o.a.createElement("div",{className:e},o.a.createElement(a.a,{type:Object(i.l)(t).icon}))}}])&&f(t.prototype,n),r&&f(t,r),u}(r.Component)},1197:function(e,t,n){"use strict";var r,o=n(0),a=n.n(o),c=n(167),s=(n(297),n(55)),i=n.n(s),u=n(11),l=n(1044);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var o=b(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=Object(l.h)(),w=Object(c.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.wallet)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(c,e);var t,n,r,o=d(c);function c(){return p(this,c),o.apply(this,arguments)}return t=c,(n=[{key:"render",value:function(){var e=this.props,t=e.price,n=e.value,r=e.usd,o=e.exchangeRate,c=e.token,s=e.tokenAmount,l=(u.r[c]||u.r[1]).name.toLowerCase();if(7===c&&(l="bsv"),!t[l])return null;var f=null,p=g.currencyCode.toLowerCase();f=t[l][p]?t[l][p]:i()(t[l].usd).times(o[p]),r&&(f=i()(f).div(t[l].usd).multipliedBy(r));var m=0;return m=3===c||6===c?(m=(m=i()(n).times(f)).plus(s||0)).toFixed(2,1):i()(n).div(1e8).times(f).toFixed(2,1),a.a.createElement("span",null,g.symbol,m," ",g.currencyCode)}}])&&m(t.prototype,n),r&&m(t,r),c}(o.Component))||r;t.a=w},1202:function(e,t,n){var r={"./af":1051,"./af.js":1051,"./ar":1052,"./ar-dz":1053,"./ar-dz.js":1053,"./ar-kw":1054,"./ar-kw.js":1054,"./ar-ly":1055,"./ar-ly.js":1055,"./ar-ma":1056,"./ar-ma.js":1056,"./ar-sa":1057,"./ar-sa.js":1057,"./ar-tn":1058,"./ar-tn.js":1058,"./ar.js":1052,"./az":1059,"./az.js":1059,"./be":1060,"./be.js":1060,"./bg":1061,"./bg.js":1061,"./bm":1062,"./bm.js":1062,"./bn":1063,"./bn-bd":1064,"./bn-bd.js":1064,"./bn.js":1063,"./bo":1065,"./bo.js":1065,"./br":1066,"./br.js":1066,"./bs":1067,"./bs.js":1067,"./ca":1068,"./ca.js":1068,"./cs":1069,"./cs.js":1069,"./cv":1070,"./cv.js":1070,"./cy":1071,"./cy.js":1071,"./da":1072,"./da.js":1072,"./de":1073,"./de-at":1074,"./de-at.js":1074,"./de-ch":1075,"./de-ch.js":1075,"./de.js":1073,"./dv":1076,"./dv.js":1076,"./el":1077,"./el.js":1077,"./en-au":1078,"./en-au.js":1078,"./en-ca":1079,"./en-ca.js":1079,"./en-gb":1080,"./en-gb.js":1080,"./en-ie":1081,"./en-ie.js":1081,"./en-il":1082,"./en-il.js":1082,"./en-in":1083,"./en-in.js":1083,"./en-nz":1084,"./en-nz.js":1084,"./en-sg":1085,"./en-sg.js":1085,"./eo":1086,"./eo.js":1086,"./es":1087,"./es-do":1088,"./es-do.js":1088,"./es-mx":1089,"./es-mx.js":1089,"./es-us":1090,"./es-us.js":1090,"./es.js":1087,"./et":1091,"./et.js":1091,"./eu":1092,"./eu.js":1092,"./fa":1093,"./fa.js":1093,"./fi":1094,"./fi.js":1094,"./fil":1095,"./fil.js":1095,"./fo":1096,"./fo.js":1096,"./fr":1097,"./fr-ca":1098,"./fr-ca.js":1098,"./fr-ch":1099,"./fr-ch.js":1099,"./fr.js":1097,"./fy":1100,"./fy.js":1100,"./ga":1101,"./ga.js":1101,"./gd":1102,"./gd.js":1102,"./gl":1103,"./gl.js":1103,"./gom-deva":1104,"./gom-deva.js":1104,"./gom-latn":1105,"./gom-latn.js":1105,"./gu":1106,"./gu.js":1106,"./he":1107,"./he.js":1107,"./hi":1108,"./hi.js":1108,"./hr":1109,"./hr.js":1109,"./hu":1110,"./hu.js":1110,"./hy-am":1111,"./hy-am.js":1111,"./id":1112,"./id.js":1112,"./is":1113,"./is.js":1113,"./it":1114,"./it-ch":1115,"./it-ch.js":1115,"./it.js":1114,"./ja":1116,"./ja.js":1116,"./jv":1117,"./jv.js":1117,"./ka":1118,"./ka.js":1118,"./kk":1119,"./kk.js":1119,"./km":1120,"./km.js":1120,"./kn":1121,"./kn.js":1121,"./ko":1122,"./ko.js":1122,"./ku":1123,"./ku.js":1123,"./ky":1124,"./ky.js":1124,"./lb":1125,"./lb.js":1125,"./lo":1126,"./lo.js":1126,"./lt":1127,"./lt.js":1127,"./lv":1128,"./lv.js":1128,"./me":1129,"./me.js":1129,"./mi":1130,"./mi.js":1130,"./mk":1131,"./mk.js":1131,"./ml":1132,"./ml.js":1132,"./mn":1133,"./mn.js":1133,"./mr":1134,"./mr.js":1134,"./ms":1135,"./ms-my":1136,"./ms-my.js":1136,"./ms.js":1135,"./mt":1137,"./mt.js":1137,"./my":1138,"./my.js":1138,"./nb":1139,"./nb.js":1139,"./ne":1140,"./ne.js":1140,"./nl":1141,"./nl-be":1142,"./nl-be.js":1142,"./nl.js":1141,"./nn":1143,"./nn.js":1143,"./oc-lnc":1144,"./oc-lnc.js":1144,"./pa-in":1145,"./pa-in.js":1145,"./pl":1146,"./pl.js":1146,"./pt":1147,"./pt-br":1148,"./pt-br.js":1148,"./pt.js":1147,"./ro":1149,"./ro.js":1149,"./ru":1150,"./ru.js":1150,"./sd":1151,"./sd.js":1151,"./se":1152,"./se.js":1152,"./si":1153,"./si.js":1153,"./sk":1154,"./sk.js":1154,"./sl":1155,"./sl.js":1155,"./sq":1156,"./sq.js":1156,"./sr":1157,"./sr-cyrl":1158,"./sr-cyrl.js":1158,"./sr.js":1157,"./ss":1159,"./ss.js":1159,"./sv":1160,"./sv.js":1160,"./sw":1161,"./sw.js":1161,"./ta":1162,"./ta.js":1162,"./te":1163,"./te.js":1163,"./tet":1164,"./tet.js":1164,"./tg":1165,"./tg.js":1165,"./th":1166,"./th.js":1166,"./tk":1167,"./tk.js":1167,"./tl-ph":1168,"./tl-ph.js":1168,"./tlh":1169,"./tlh.js":1169,"./tr":1170,"./tr.js":1170,"./tzl":1171,"./tzl.js":1171,"./tzm":1172,"./tzm-latn":1173,"./tzm-latn.js":1173,"./tzm.js":1172,"./ug-cn":1174,"./ug-cn.js":1174,"./uk":1175,"./uk.js":1175,"./ur":1176,"./ur.js":1176,"./uz":1177,"./uz-latn":1178,"./uz-latn.js":1178,"./uz.js":1177,"./vi":1179,"./vi.js":1179,"./x-pseudo":1180,"./x-pseudo.js":1180,"./yo":1181,"./yo.js":1181,"./zh-cn":1182,"./zh-cn.js":1182,"./zh-hk":1183,"./zh-hk.js":1183,"./zh-mo":1184,"./zh-mo.js":1184,"./zh-tw":1185,"./zh-tw.js":1185};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=1202},1208:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var r=n(0),o=n.n(r),a=n(969),c=n.n(a);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(s,e);var t,n,r,a=f(s);function s(){return i(this,s),a.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=e.name,n=e.style;if(!t)return null;var r=t.substr(0,1).toUpperCase();return o.a.createElement("div",{className:c.a.logo,style:n},r)}}])&&u(t.prototype,n),r&&u(t,r),s}(r.Component)},1235:function(e,t,n){"use strict";e.exports=n(1271)},1271:function(e,t,n){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,a=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,s=r?Symbol.for("react.strict_mode"):60108,i=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,m=r?Symbol.for("react.forward_ref"):60112,y=r?Symbol.for("react.suspense"):60113,d=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,j=r?Symbol.for("react.fundamental"):60117,g=r?Symbol.for("react.responder"):60118,w=r?Symbol.for("react.scope"):60119;function k(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case f:case p:case c:case i:case s:case y:return e;default:switch(e=e&&e.$$typeof){case l:case m:case b:case h:case u:return e;default:return t}}case a:return t}}}function O(e){return k(e)===p}t.AsyncMode=f,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=u,t.Element=o,t.ForwardRef=m,t.Fragment=c,t.Lazy=b,t.Memo=h,t.Portal=a,t.Profiler=i,t.StrictMode=s,t.Suspense=y,t.isAsyncMode=function(e){return O(e)||k(e)===f},t.isConcurrentMode=O,t.isContextConsumer=function(e){return k(e)===l},t.isContextProvider=function(e){return k(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return k(e)===m},t.isFragment=function(e){return k(e)===c},t.isLazy=function(e){return k(e)===b},t.isMemo=function(e){return k(e)===h},t.isPortal=function(e){return k(e)===a},t.isProfiler=function(e){return k(e)===i},t.isStrictMode=function(e){return k(e)===s},t.isSuspense=function(e){return k(e)===y},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===c||e===p||e===i||e===s||e===y||e===d||"object"==typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===h||e.$$typeof===u||e.$$typeof===l||e.$$typeof===m||e.$$typeof===j||e.$$typeof===g||e.$$typeof===w||e.$$typeof===v)},t.typeOf=k}}]);