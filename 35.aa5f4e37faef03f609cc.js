(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1168:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return M}));n(607);var a,r=n(300),s=(n(605),n(140)),c=(n(1196),n(1199)),o=(n(606),n(172)),i=(n(1197),n(1198)),u=(n(1231),n(1229)),l=n(0),m=n.n(l),p=n(170),f=n(48),d=n.n(f),h=n(11),v=n(67),y=n(1169),g=n.n(y),b=n(15),x=n(33),k=n.n(x),w=n(85);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t,n,a,r,s,c){try{var o=e[s](c),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(a,r)}function S(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var s=e.apply(t,n);function c(e){E(s,a,r,c,o,"next",e)}function o(e){E(s,a,r,c,o,"throw",e)}c(void 0)}))}}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,s=void 0;try{for(var c,o=e[Symbol.iterator]();!(a=(c=o.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,s=e}finally{try{a||null==o.return||o.return()}finally{if(r)throw s}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=P(e);if(t){var r=P(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return R(this,n)}}function R(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?I(e):t}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){C(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var F=n.n(w)()("bridge"),B=u.a.Option,q=i.a.Item,V={usdt:"iconusdt-logo",usdc:"iconcircle-usdc"},M=i.a.create()(a=Object(p.connect)((function(e){e.user;var t=e.wallet,n=e.loading.effects;return D(D({},t),{},{loading:n["service/queryWallet"],creatingAddress:n["service/createSingleWalletAddress"]||!1,committing:n["wallet/createTrxTx"]||n["service/trxTxBroadcast"]||n["service/createFtRoutecheckTx"]||n["service/createFtTransferTx"]||n["service/signSingWalletMessage"]||n["service/broadcastFtTransferTx"]||n["service/mergeUtxo"]||!1})}))(a=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(y,e);var t,n,a,l,p,f=N(y);function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),C(I(t=f.call(this,e)),"changeAsset",(function(e,n,a){n||(n=t.state.assetType),a||(a=t.props.wallets[1]);var r=O(n[e].tokensName,2),s=r[0],c=r[1],o=[],i=[];a.forEach((function(e){h.r[s].token===e.token&&o.push(e),h.r[c].token===e.token&&i.push(e)})),t.setState({assetIndex:e,fromTokenName:h.r[s].name,toTokenName:h.r[c].name,wallets1:o,wallets2:i}),t.changeWallet1(0,n,o),t.changeWallet2(0,n,i)})),C(I(t),"getToken",function(){var e=S(regeneratorRuntime.mark((function e(n,a){var r,s,c,o,i,u;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a||(a=t.state.assetType),1!==n.token||n.change){e.next=6;break}return e.next=4,t.createSingleAddress(n.id);case 4:r=e.sent,t.setState({change_address:r});case 6:if(n.balance){e.next=11;break}return e.next=9,t.props.dispatch({type:"service/queryWalletById",payload:{wid:n.id}});case 9:s=e.sent,n=s;case 11:return c=t.state,o=c.assetIndex,i=c.reverse,n.balance&&n.balance.balance.forEach((function(e){var t=a[o].tokens[i?1:0];e.id!==t.tokenId&&e.token.toUpperCase()!==t.name.toUpperCase()||(u=e)})),e.abrupt("return",u);case 14:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),C(I(t),"changeWallet1",function(){var e=S(regeneratorRuntime.mark((function e(n,a,r){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r||(r=t.state.wallets1),e.next=3,t.getToken(r[n],a);case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0={};case 6:s=e.t0,t.setState({fromAccountToken:s,fromAccountIndex:n});case 8:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()),C(I(t),"changeWallet2",function(){var e=S(regeneratorRuntime.mark((function e(n,a,r){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r||(r=t.state.wallets2),e.next=3,t.getToken(r[n],a);case 3:s=e.sent,t.setState({toAccountToken:s,toAccountIndex:n});case 5:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}()),C(I(t),"renderIcon",(function(e){var t=e.toLowerCase();return m.a.createElement(v.a,{type:V[t],style:{fontSize:30,marginRight:8}})})),C(I(t),"setMaxAmount",(function(){var e=t.state.fromAccountToken,n=void 0===e?{}:e;t.props.form.setFieldsValue({amount:n.value})})),C(I(t),"handleSubmit",(function(e){e.preventDefault();var n=t.state,a=n.wallets1,r=n.wallets2,s=(n.assetList,n.assetType),c=n.reverse;t.props.form.validateFields(function(){var e=S(regeneratorRuntime.mark((function e(n,i){var u,l,m,p,f,d,h,v,y,g,b,x,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=40;break}return console.log("Received values of form: ",i),u=i.fromAccount,l=i.toAccount,m=i.asset,p=i.amount,f=s[m],d=f.tokens[c?1:0],h=k()(p).multipliedBy(Math.pow(10,d.decimals)),h=BigInt(h).toString(),e.prev=7,e.next=10,t.fetchData("https://volt-bridge.xiangpengm.cn/Tron_BSV/prepayOrder/create",{orderType:c?"deposit":"mint",amount:h,tokenId:d.tokenId,receiveAddress:r[l].address},"POST");case 10:v=e.sent,F("create_order:",v),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),o.a.error(e.t0);case 17:if(g=(y=v).requestId,b=y.address,!c){e.next=24;break}return e.next=21,t.createBsvTransaction({fromAccount:a[u],toAccount:r[l],amount:h,currentAsset:f,receiveAddress:b});case 21:x=e.sent,e.next=27;break;case 24:return e.next=26,t.createTransaction({fromAccount:a[u],toAccount:r[l],amount:p,currentAsset:f,receiveAddress:b});case 26:x=e.sent;case 27:return F(x),e.next=30,t.fetchData("https://volt-bridge.xiangpengm.cn/Tron_BSV/notify/tx",{requestId:g,txId:x.txid},"POST");case 30:if(w=e.sent,F("confirm_order:",w),F(w),t.setState({amount:p}),!x.txid){e.next=38;break}t.setState({showResult:!0}),e.next=40;break;case 38:if(!x.message){e.next=40;break}return e.abrupt("return",o.a.error(x.message));case 40:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(t,n){return e.apply(this,arguments)}}())})),C(I(t),"createBsvTransaction",function(){var e=S(regeneratorRuntime.mark((function e(n){var a,r,s,c,o,i,u,l,m,p,f,d,h,v,y,g,x,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.amount,r=n.fromAccount,s=n.toAccount,c=n.currentAsset,o=n.receiveAddress,i=t.props.dispatch,u=r.change||t.state.change_address,l=c.tokens[1],m=l.tokenId,p=r.id,e.next=8,i({type:"service/createFtRoutecheckTx",payload:{receiver_address:o,receiver_amount:a,bsv_change_address:u,token_id:m,wid:p}});case 8:if(f=e.sent,!1,F("routecheckTxRes",f),f.success){e.next=28;break}if("MERGE_TOKEN_FIRST"!==f.message){e.next=25;break}return!0,e.next=16,i({type:"service/mergeUtxo",payload:{bsv_change_address:u,token_id:m,wid:p}});case 16:if(v=e.sent,F("mergeUtxoRes:",v),v.success){e.next=20;break}return e.abrupt("return",{message:v.message});case 20:d=v.data.hashlist,v.data.estimateFee,h=v.data.uniqId,e.next=26;break;case 25:return e.abrupt("return",{message:f.message});case 26:e.next=31;break;case 28:d=f.data.hashlist,f.data.estimateFee,h=f.data.uniqId;case 31:return e.next=33,i({type:"service/signSingWalletMessage",payload:d});case 33:return y=e.sent,F("routecheckSiglist",y),e.next=37,i({type:"service/createFtTransferTx",payload:{routecheck_siglist:y,uniqId:h,wid:p}});case 37:if(g=e.sent,F("transferTxRes",g),g.success){e.next=41;break}return e.abrupt("return",{message:g.message});case 41:return e.next=43,i({type:"service/signSingWalletMessage",payload:g.data.hashlist});case 43:return x=e.sent,F("transferSiglist",x),e.next=47,i({type:"service/broadcastFtTransferTx",payload:{transfer_siglist:x,wid:p,uniqId:g.data.uniqId,note:Object(b.a)("bridge_note").replace("%1",r.name).replace("%2",s.name),biz_data:r.address}});case 47:if(k=e.sent,F("broadcastRes",k),!k.success||!k.data){e.next=53;break}return e.abrupt("return",{txid:k.data.transfer_txid});case 53:return e.abrupt("return",{message:k.message||k.error});case 54:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C(I(t),"createTransaction",function(){var e=S(regeneratorRuntime.mark((function e(n){var a,r,s,c,i,u,l,m,p,f,d,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.amount,r=n.fromAccount,s=n.currentAsset,c=n.receiveAddress,i=t.props.dispatch,F(r,a),e.next=5,i({type:"wallet/createTrxTx",payload:{uid:r.uid,token:s.name.toLowerCase(),amount:a,wid:r.id,toAddress:c,changeAddress:r.change}});case 5:if(u=e.sent,F("sighash:",u),!u.message){e.next=9;break}return e.abrupt("return",o.a.error(u.message));case 9:return l="[object Array]"===Object.prototype.toString.call(u)?u:[u],e.next=12,i({type:"service/signSingWalletMessage",payload:l});case 12:return m=e.sent,F("sigs:",m),p=m[0],f=p.r,d=p.s,e.next=17,i({type:"service/trxTxBroadcast",payload:{sighash:u.sighash,note:Object(b.a)("bridge_note").replace("%1",r.name).replace("%2",toAccount.name),r:f,s:d,v:1}});case 17:return h=e.sent,F("trxTxBroadcast:",h),e.abrupt("return",h);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C(I(t),"reverse",(function(){var e=t.state,n=e.wallets1,a=e.wallets2,r=e.fromAccountIndex,s=e.toAccountIndex,c=e.reverse,o=e.assetType,i=a;a=n,n=i;var u=s;s=r,r=u,(c=!c)&&(s=0),t.setState({wallets1:n,wallets2:a,fromAccountIndex:r,toAccountIndex:s,reverse:c},(function(){t.props.form.setFieldsValue({fromAccount:r,toAccount:s}),t.changeWallet1(r,o,n),t.changeWallet2(s,o,a)}))})),C(I(t),"reset",(function(){t.setState({showResult:!1})})),t.state={assetList:[],assetType:[],assetIndex:0,wallets1:[],wallets2:[],fromAccountToken:{},toAccountToken:{},fromAccountIndex:0,toAccountIndex:0,fromTokenName:"",toTokenName:"",reverse:!1,loading:!1,committing:!1,showResult:!1},t}return t=y,(n=[{key:"fetchData",value:function(e,t){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";this.setState({committing:!0});var r={};if("POST"===a.toUpperCase())r={method:a,body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},F("post-params:",JSON.stringify(t));else if(t){var s=d.a.stringify(t);e=-1===e.indexOf("?")?e+"?"+s:e+"&"+s}return new Promise((function(t,a){fetch(e,r).then((function(e){return e.json()})).then((function(e){F("data:",e),e.success?t(e.data):t(e),n.setState({committing:!1})}))}))}},{key:"componentDidMount",value:function(){this.fetch()}},{key:"fetch",value:(p=S(regeneratorRuntime.mark((function e(){var t,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading:!0}),(t=[]).push(this.props.dispatch({type:"service/queryWallet",payload:{type:1}})),t.push(this.fetchData("https://volt-bridge.xiangpengm.cn/Tron_BSV/assetList")),Promise.all(t).then((function(e){var t=O(e,2),a=t[0],r=t[1];n.handleData(a,r.assetList),n.setState({loading:!1})}));case 5:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})},{key:"handleData",value:function(e,t){var n=[];t.forEach((function(e,t){n[t]={name:"",id:0,tokensName:[],tokens:[]},Object.keys(e).forEach((function(a){n[t].name=e[a].name,n[t].tokensName.push(a),n[t].tokens.push(e[a])}))})),F("list:",n),this.setState({assetList:t,assetType:n}),this.changeAsset(0,n,e)}},{key:"createSingleAddress",value:(l=S(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dispatch({type:"service/createSingleWalletAddress",payload:{wid:t,type:2}});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"renderForm",value:function(){var e=this,t=this.state,n=t.assetType,a=t.assetIndex,r=t.wallets1,o=t.fromAccountToken,l=t.fromTokenName,p=t.toTokenName,f=t.reverse,d=t.fromAccountIndex,y=t.toAccountIndex,x=(t.committing,this.props.form),w=x.getFieldDecorator,T=x.getFieldValue,E=n[a]||{},S=E.name||"",O=E.tokensName||[],A=this.state.wallets2;return m.a.createElement("div",{className:g.a.content},m.a.createElement(i.a,{onSubmit:this.handleSubmit},m.a.createElement("div",{className:g.a.wallets},m.a.createElement("div",{className:g.a.item},m.a.createElement("div",{className:g.a.label},Object(b.a)("from"),": ",O[f?1:0]," ",Object(b.a)("network")),m.a.createElement(q,null,w("fromAccount",{initialValue:d||0})(m.a.createElement(u.a,{style:{width:255},onChange:function(t){return e.changeWallet1(t)}},r.map((function(e,t){return m.a.createElement(B,{value:t,key:e.id},m.a.createElement("div",{className:g.a.wallet_item},m.a.createElement(v.a,{type:Object(h.l)(e.token).icon,style:{fontSize:30,marginRight:8}})," ",e.name))})))))),m.a.createElement("div",{className:g.a.switchIcon,onClick:this.reverse},m.a.createElement("div",{className:g.a.label}),m.a.createElement(v.a,{type:"iconicon-send-toggle",style:{fontSize:22,marginTop:14,fontWeight:500}})),m.a.createElement("div",{className:g.a.item},m.a.createElement("div",{className:g.a.label},Object(b.a)("to1"),": ",O[f?0:1]," ",Object(b.a)("network")),m.a.createElement(q,null,w("toAccount",{initialValue:y||0})(m.a.createElement(u.a,{style:{width:255},onChange:function(t){return e.changeWallet2(t)}},A.map((function(e,t){return m.a.createElement(B,{value:t,key:e.id},m.a.createElement("div",{className:g.a.wallet_item},m.a.createElement(v.a,{type:Object(h.l)(e.token).icon,style:{fontSize:30,marginRight:8}})," ",e.name))}))))))),m.a.createElement("div",{className:g.a.balance},Object(b.a)("balance"),":",m.a.createElement("span",{onClick:this.setMaxAmount},o.value||0," ",E?S:"USDC","(",f?p:l,")")),m.a.createElement("div",{className:g.a.tokens},m.a.createElement("div",{className:g.a.type},m.a.createElement(q,null,w("asset",{initialValue:a||0})(m.a.createElement(u.a,{style:{width:132},onChange:function(t){return e.changeAsset(t)}},n.map((function(t,n){return m.a.createElement(B,{value:n,key:t.name},m.a.createElement("div",{className:g.a.token_item},e.renderIcon(t.name),m.a.createElement("span",{className:g.a.name},t.name)))})))))),m.a.createElement(q,null,w("amount",{rules:[{required:!0}]})(m.a.createElement(c.a,{style:{width:450},className:g.a.amount,prefix:Object(b.a)("amount")})))),m.a.createElement("div",{className:g.a.receive},m.a.createElement("span",{className:g.a.receive_title},Object(b.a)("will_receive")," "),m.a.createElement(v.a,{type:"iconVector",style:{fontSize:20,marginLeft:15}}),m.a.createElement("span",{className:g.a.receive_amount},k()(T("amount")||0).multipliedBy(.998).toString()," ",S," (",f?l:p," network)")),m.a.createElement("div",{className:g.a.receive_tips},Object(b.a)("bridge_fee")),m.a.createElement("div",{className:g.a.btn_wrap},m.a.createElement(s.a,{type:"primary",htmlType:"submit",className:g.a.btn},Object(b.a)("convert_to").replace("%1","USDT").replace("%2",f?l:p)))))}},{key:"renderResult",value:function(){var e=this.state,t=e.assetType,n=e.assetIndex,a=e.fromTokenName,r=e.toTokenName,c=e.wallets1,o=e.fromAccountIndex,i=e.wallets2,u=e.toAccountIndex,l=e.amount,p=void 0===l?0:l,f=t[n].name;return m.a.createElement("div",{className:g.a.content_result},m.a.createElement("div",{className:g.a.sent_icon},m.a.createElement(v.a,{type:"iconsent",style:{fontSize:70}})),m.a.createElement("div",{className:g.a.result_title},Object(b.a)("result_title").replace("%1",f).replace("%2",c[o].name).replace("%3",i[u].name)),m.a.createElement("div",{className:g.a.result_desc},Object(b.a)("result_desc").replace("%1","".concat(p," ").concat(f,"(").concat(a,")")).replace("%2","".concat(p," ").concat(f,"(").concat(r,")"))),m.a.createElement("div",{className:g.a.btn_wrap},m.a.createElement(s.a,{type:"primary",className:g.a.btn,onClick:this.reset},Object(b.a)("close"))),m.a.createElement("div",{className:g.a.fee},Object(b.a)("network_fee")," 0.00001 BSV"))}},{key:"render",value:function(){var e=this.state.showResult;return m.a.createElement("div",{className:g.a.container},m.a.createElement("div",{className:g.a.title},Object(b.a)("bridge_title")),m.a.createElement(r.a,{spinning:this.props.loading||this.state.loading||this.state.committing||this.props.committing},e?this.renderResult():this.renderForm()))}}])&&_(t.prototype,n),a&&_(t,a),y}(l.Component))||a)||a}}]);