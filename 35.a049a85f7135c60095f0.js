(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1168:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return V}));a(607);var n,r=a(300),s=(a(605),a(140)),c=(a(1196),a(1199)),o=(a(606),a(172)),i=(a(1197),a(1198)),u=(a(1231),a(1229)),l=a(0),m=a.n(l),p=a(170),d=a(48),f=a.n(d),v=a(11),h=a(67),y=a(1169),g=a.n(y),b=a(15),x=a(33),k=a.n(x),w=a(85);function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(e,t,a,n,r,s,c){try{var o=e[s](c),i=o.value}catch(e){return void a(e)}o.done?t(i):Promise.resolve(i).then(n,r)}function S(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var s=e.apply(t,a);function c(e){E(s,n,r,c,o,"next",e)}function o(e){E(s,n,r,c,o,"throw",e)}c(void 0)}))}}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,s=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw s}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function _(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=P(e);if(t){var r=P(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return R(this,a)}}function R(e,t){return!t||"object"!==T(t)&&"function"!=typeof t?I(e):t}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){C(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var F=a.n(w)()("bridge"),B=u.a.Option,q=i.a.Item,M={usdt:"iconusdt-logo",usdc:"iconcircle-usdc","usdc-volt":"iconcircle-usdc","usdt-volt":"iconusdt-logo"},V=i.a.create()(n=Object(p.connect)((function(e){e.user;var t=e.wallet,a=e.loading.effects;return W(W({},t),{},{loading:a["service/queryWallet"],creatingAddress:a["service/createSingleWalletAddress"]||!1,committing:a["wallet/createTrxTx"]||a["service/trxTxBroadcast"]||a["service/createFtRoutecheckTx"]||a["service/createFtTransferTx"]||a["service/signSingWalletMessage"]||a["service/broadcastFtTransferTx"]||a["service/mergeUtxo"]||!1})}))(n=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(x,e);var t,a,n,l,p,d,y=j(x);function x(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,x),C(I(t=y.call(this,e)),"changeAsset",(function(e,a,n){var r=t.state,s=r.fromAccountIndex,c=r.toAccountIndex,o=r.assetType;a||(a=o),n||(n=t.props.wallets[1]);var i=A(a[e].tokensName,2),u=i[0],l=i[1],m=t.state,p=m.wallets1,d=m.wallets2;(!p||p.length<1)&&(!d||d.length<1)&&(n.forEach((function(e){v.r[u].token===e.token&&p.push(e),v.r[l].token===e.token&&d.push(e)})),t.setState({fromTokenName:v.r[u].name,toTokenName:v.r[l].name,wallets1:p,wallets2:d})),t.setState({assetIndex:e}),t.changeWallet1(s||0,a,p,e),t.changeWallet2(c||0,a,d,e)})),C(I(t),"getToken",function(){var e=S(regeneratorRuntime.mark((function e(a,n){var r,s,c,o,i,u=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=u.length>2&&void 0!==u[2]?u[2]:-1,n||(n=t.state.assetType),1!==a.token||a.change){e.next=7;break}return e.next=5,t.createSingleAddress(a.id);case 5:s=e.sent,t.setState({change_address:s});case 7:if(a.balance){e.next=12;break}return e.next=10,t.props.dispatch({type:"service/queryWalletById",payload:{wid:a.id}});case 10:c=e.sent,a=c;case 12:return o=t.state.reverse,-1===r&&(r=t.state.assetIndex),a.balance&&a.balance.balance.forEach((function(e){var a=n[r].tokens[o?1:0];(e.id||e.token_id)!==a.tokenId&&e.token.toUpperCase()!==a.name.toUpperCase()||(i=e,t.setState({currentTokenName:e.token||a.name}))})),e.abrupt("return",i);case 17:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),C(I(t),"changeWallet1",function(){var e=S(regeneratorRuntime.mark((function e(a,n,r,s){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r||(r=t.state.wallets1),e.next=3,t.getToken(r[a],n,s);case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0={};case 6:c=e.t0,t.setState({fromAccountToken:c,fromAccountIndex:a});case 8:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}()),C(I(t),"changeWallet2",function(){var e=S(regeneratorRuntime.mark((function e(a,n,r,s){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r||(r=t.state.wallets2),e.next=3,t.getToken(r[a],n,s);case 3:c=e.sent,t.setState({toAccountToken:c,toAccountIndex:a});case 5:case"end":return e.stop()}}),e)})));return function(t,a,n,r){return e.apply(this,arguments)}}()),C(I(t),"renderIcon",(function(e){var t=e.toLowerCase();return m.a.createElement(h.a,{type:M[t],style:{fontSize:20}})})),C(I(t),"setMaxAmount",(function(){var e=t.state.fromAccountToken,a=void 0===e?{}:e;t.props.form.setFieldsValue({amount:a.value})})),C(I(t),"handleSubmit",(function(e){e.preventDefault();var a=t.state,n=a.wallets1,r=a.wallets2,s=(a.currentTokenName,a.assetType),c=a.reverse;t.props.form.validateFields(function(){var e=S(regeneratorRuntime.mark((function e(a,i){var u,l,m,p,d,f,v,h,y,g,x,w,T;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=44;break}if(console.log("Received values of form: ",i),u=i.fromAccount,l=i.toAccount,m=i.asset,p=i.amount,d=s[m],!(p>d.max||p<d.min)){e.next=6;break}return e.abrupt("return",o.a.error(Object(b.a)("amount_limit").replace("%1",d.min).replace("%2",d.max).replace(/%3/g,d.name)));case 6:return f=d.tokens[c?1:0],v=k()(p).multipliedBy(Math.pow(10,f.decimals)),v=BigInt(v).toString(),e.prev=9,e.next=12,t.fetchData("https://vab.volt.id/Tron_BSV/prepayOrder/create",{orderType:c?"deposit":"mint",amount:v,tokenId:f.tokenId,receiveAddress:r[l].address},"POST");case 12:h=e.sent,F("create_order:",h),e.next=19;break;case 16:return e.prev=16,e.t0=e.catch(9),e.abrupt("return",o.a.error(e.t0));case 19:if(h.success||h.address){e.next=21;break}return e.abrupt("return",o.a.error(h.message));case 21:if(g=(y=h).requestId,x=y.address,!c){e.next=28;break}return e.next=25,t.createBsvTransaction({fromAccount:n[u],toAccount:r[l],amount:v,currentAsset:d,receiveAddress:x});case 25:w=e.sent,e.next=31;break;case 28:return e.next=30,t.createCoinTransaction({fromAccount:n[u],toAccount:r[l],amount:p,currentAsset:d,receiveAddress:x});case 30:w=e.sent;case 31:return F(w),e.next=34,t.fetchData("https://vab.volt.id/Tron_BSV/notify/tx",{requestId:g,txId:w.txid},"POST");case 34:if(T=e.sent,F("confirm_order:",T),t.setState({amount:p}),!w.txid){e.next=41;break}t.setState({showResult:!0}),e.next=43;break;case 41:if(!w.message){e.next=43;break}return e.abrupt("return",o.a.error(w.message));case 43:t.updateData();case 44:case"end":return e.stop()}}),e,null,[[9,16]])})));return function(t,a){return e.apply(this,arguments)}}())})),C(I(t),"createBsvTransaction",function(){var e=S(regeneratorRuntime.mark((function e(a){var n,r,s,c,o,i,u,l,m,p,d,f,v,h,y,g,x,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.amount,r=a.fromAccount,s=a.toAccount,c=a.currentAsset,o=a.receiveAddress,i=t.props.dispatch,u=r.change||t.state.change_address,l=c.tokens[1],m=l.tokenId,p=r.id,e.next=8,i({type:"service/createFtRoutecheckTx",payload:{receiver_address:o,receiver_amount:n,bsv_change_address:u,token_id:m,wid:p}});case 8:if(d=e.sent,!1,F("routecheckTxRes",d),d.success){e.next=28;break}if("MERGE_TOKEN_FIRST"!==d.message){e.next=25;break}return!0,e.next=16,i({type:"service/mergeUtxo",payload:{bsv_change_address:u,token_id:m,wid:p}});case 16:if(h=e.sent,F("mergeUtxoRes:",h),h.success){e.next=20;break}return e.abrupt("return",{message:h.message});case 20:f=h.data.hashlist,h.data.estimateFee,v=h.data.uniqId,e.next=26;break;case 25:return e.abrupt("return",{message:d.message});case 26:e.next=31;break;case 28:f=d.data.hashlist,d.data.estimateFee,v=d.data.uniqId;case 31:return e.next=33,i({type:"service/signSingWalletMessage",payload:f});case 33:return y=e.sent,F("routecheckSiglist",y),e.next=37,i({type:"service/createFtTransferTx",payload:{routecheck_siglist:y,uniqId:v,wid:p}});case 37:if(g=e.sent,F("transferTxRes",g),g.success){e.next=41;break}return e.abrupt("return",{message:g.message});case 41:return e.next=43,i({type:"service/signSingWalletMessage",payload:g.data.hashlist});case 43:return x=e.sent,F("transferSiglist",x),e.next=47,i({type:"service/broadcastFtTransferTx",payload:{transfer_siglist:x,wid:p,uniqId:g.data.uniqId,note:Object(b.a)("bridge_note").replace("%1",r.name).replace("%2",s.name),biz_data:r.address}});case 47:if(k=e.sent,F("broadcastRes",k),!k.success||!k.data){e.next=53;break}return e.abrupt("return",{txid:k.data.transfer_txid});case 53:return e.abrupt("return",{message:k.message||k.error});case 54:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C(I(t),"createCoinTransaction",function(){var e=S(regeneratorRuntime.mark((function e(a){var n,r,s,c,i,u,l,m,p,d,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.amount,r=a.fromAccount,a.currentAsset,s=a.receiveAddress,c=t.props.dispatch,i=t.state.currentTokenName,F(r,n),e.next=6,c({type:"wallet/createTrxTx",payload:{uid:r.uid,token:i.toLowerCase(),amount:n,wid:r.id,toAddress:s,note:Object(b.a)("bridge_note").replace("%1",r.name).replace("%2",toAccount.name),changeAddress:r.change}});case 6:if(u=e.sent,F("sighash:",u),!u.message){e.next=10;break}return e.abrupt("return",o.a.error(u.message));case 10:return l="[object Array]"===Object.prototype.toString.call(u)?u:[u],e.next=13,c({type:"service/signSingWalletMessage",payload:l});case 13:return m=e.sent,F("sigs:",m),p=m[0],d=p.r,f=p.s,e.next=18,c({type:"service/trxTxBroadcast",payload:{sighash:u.sighash,r:d,s:f,v:1}});case 18:return v=e.sent,F("trxTxBroadcast:",v),e.abrupt("return",v);case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C(I(t),"reverse",(function(){var e=t.state,a=e.wallets1,n=e.wallets2,r=e.fromAccountIndex,s=e.toAccountIndex,c=e.reverse,o=e.assetType,i=n;n=a,a=i;var u=s;s=r,r=u,(c=!c)&&(s=0),t.setState({wallets1:a,wallets2:n,fromAccountIndex:r,toAccountIndex:s,reverse:c},(function(){t.props.form.setFieldsValue({fromAccount:r,toAccount:s}),t.changeWallet1(r,o,a),t.changeWallet2(s,o,n)}))})),C(I(t),"reset",(function(){t.setState({showResult:!1})})),C(I(t),"validator",(function(e,a,n){var r=t.state,s=r.assetType[r.assetIndex]||{};if(a<s.min||a>s.max)return n(Object(b.a)("amount_limit").replace("%1",s.min).replace("%2",s.max).replace(/%3/g,s.name));n()})),t.state={assetList:[],assetType:[],assetIndex:0,wallets1:[],wallets2:[],fromAccountToken:{},toAccountToken:{},fromAccountIndex:0,toAccountIndex:0,fromTokenName:"",toTokenName:"",reverse:!1,loading:!1,committing:!1,showResult:!1,rate:0},t}return t=x,(a=[{key:"fetchData",value:function(e,t){var a=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";this.setState({committing:!0});var r={};if("POST"===n.toUpperCase())r={method:n,body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},F("post-params:",JSON.stringify(t));else if(t){var s=f.a.stringify(t);e=-1===e.indexOf("?")?e+"?"+s:e+"&"+s}return new Promise((function(t,n){fetch(e,r).then((function(e){return e.json()})).then((function(e){F("data:",e),e.success?t(e.data):t(e),a.setState({committing:!1})}))}))}},{key:"componentDidMount",value:function(){this.fetch()}},{key:"fetch",value:(d=S(regeneratorRuntime.mark((function e(){var t,a=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=[]).push(this.props.dispatch({type:"service/queryWallet",payload:{type:1}})),t.push(this.fetchData("https://vab.volt.id/Tron_BSV/assetList")),t.push(this.fetchData("https://vab.volt.id/Tron_BSV/info")),Promise.all(t).then((function(e){var t=A(e,3),n=t[0],r=t[1],s=t[2];a.handleData(n,r);var c=s.feeRateNumerator/s.feeRateDenominator;a.setState({loading:!1,rate:c})}));case 5:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})},{key:"updateData",value:(p=S(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.dispatch({type:"service/queryWallet",payload:{type:1}});case 1:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})},{key:"handleData",value:function(e,t){var a=[];t.forEach((function(e,t){var n=e.assetList[0];a[t]={name:e.tokenName,icon:e.tokenIconUrl,tokensName:[n.type,"BSV"],tokens:[n[n.type],n.BSV],max:n.amountLimitMaximum,min:n.amountLimitMinimum}})),F("list:",a),this.setState({assetList:t,assetType:a}),this.changeAsset(0,a,e)}},{key:"createSingleAddress",value:(l=S(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dispatch({type:"service/createSingleWalletAddress",payload:{wid:t,type:2}});case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return l.apply(this,arguments)})},{key:"renderForm",value:function(){var e=this,t=this.state,a=t.assetType,n=t.assetIndex,r=t.wallets1,o=t.fromAccountToken,l=t.fromTokenName,p=t.toTokenName,d=t.reverse,f=t.fromAccountIndex,y=t.toAccountIndex,x=t.rate,w=this.props.form,T=w.getFieldDecorator,E=w.getFieldValue,S=a[n]||{},A=S.name||"",O=S.tokensName||[],_=this.state.wallets2,N=E("amount");return m.a.createElement("div",{className:g.a.content},m.a.createElement(i.a,{onSubmit:this.handleSubmit},m.a.createElement("div",{className:g.a.wallets},m.a.createElement("div",{className:g.a.item},m.a.createElement("div",{className:g.a.label},Object(b.a)("from"),": ",O[d?1:0]," ",Object(b.a)("network")),m.a.createElement(q,null,T("fromAccount",{initialValue:f||0})(m.a.createElement(u.a,{style:{width:255},onChange:function(t){return e.changeWallet1(t)}},r.map((function(e,t){return m.a.createElement(B,{value:t,key:e.id},m.a.createElement("div",{className:g.a.wallet_item},m.a.createElement(h.a,{type:Object(v.l)(e.token).icon,style:{fontSize:30,marginRight:8}})," ",e.name))})))))),m.a.createElement("div",{className:g.a.switchIcon,onClick:this.reverse},m.a.createElement("div",{className:g.a.label}),m.a.createElement(h.a,{type:"iconicon-send-toggle",style:{fontSize:22,marginTop:14,fontWeight:500}})),m.a.createElement("div",{className:g.a.item},m.a.createElement("div",{className:g.a.label},Object(b.a)("to1"),": ",O[d?0:1]," ",Object(b.a)("network")),m.a.createElement(q,null,T("toAccount",{initialValue:y||0})(m.a.createElement(u.a,{style:{width:255},onChange:function(t){return e.changeWallet2(t)}},_.map((function(e,t){return m.a.createElement(B,{value:t,key:e.id},m.a.createElement("div",{className:g.a.wallet_item},m.a.createElement(h.a,{type:Object(v.l)(e.token).icon,style:{fontSize:30,marginRight:8}})," ",e.name))}))))))),m.a.createElement("div",{className:g.a.balance},Object(b.a)("balance"),":",m.a.createElement("span",{onClick:this.setMaxAmount},o.value||0," ",S?A:"USDC","(",d?p:l,")")),m.a.createElement("div",{className:g.a.tokens},m.a.createElement("div",{className:g.a.type},m.a.createElement(q,null,T("asset",{initialValue:n||0})(m.a.createElement(u.a,{style:{width:150},onChange:function(t){return e.changeAsset(t)}},a.map((function(t,a){return m.a.createElement(B,{value:a,key:t.name},m.a.createElement("div",{className:g.a.token_item},m.a.createElement("span",{style:{marginRight:8}},e.renderIcon(t.name)),m.a.createElement("span",{className:g.a.name},t.name)))})))))),m.a.createElement(q,null,T("amount",{rules:[{validator:this.validator,required:!0}]})(m.a.createElement(c.a,{style:{width:432},className:g.a.amount,prefix:Object(b.a)("amount")})))),m.a.createElement("div",{className:g.a.receive},m.a.createElement("span",{className:g.a.receive_title},Object(b.a)("will_receive")," "),m.a.createElement(h.a,{type:"iconEqualyuedenghao",style:{fontSize:16,marginLeft:10}}),m.a.createElement("span",{className:g.a.receive_amount},isNaN(N)?0:k()(E("amount")||0).multipliedBy(1-x).toString()," ",A," (",d?l:p," network)")),m.a.createElement("div",{className:g.a.receive_tips},Object(b.a)("bridge_fee","".concat(100*x,"%"))),m.a.createElement("div",{className:g.a.btn_wrap},m.a.createElement(s.a,{type:"primary",htmlType:"submit",className:g.a.btn},Object(b.a)("convert_to").replace("%1",A).replace("%2",d?l:p)))))}},{key:"renderResult",value:function(){var e=this.state,t=e.assetType,a=e.assetIndex,n=e.fromTokenName,r=e.toTokenName,c=e.wallets1,o=e.fromAccountIndex,i=e.wallets2,u=e.toAccountIndex,l=e.amount,p=void 0===l?0:l,d=e.reverse,f=e.rate,v=t[a]||{},y=v.tokens[d?1:0],x=v.name;return m.a.createElement("div",{className:g.a.content_result},m.a.createElement("div",{className:g.a.sent_icon},m.a.createElement(h.a,{type:"iconsent",style:{fontSize:70}})),m.a.createElement("div",{className:g.a.result_title},Object(b.a)("result_title").replace("%1",x).replace("%2",c[o].name).replace("%3",i[u].name)),m.a.createElement("div",{className:g.a.result_desc},Object(b.a)("result_desc").replace("%1","".concat(p," ").concat(x,"(").concat(d?r:n,")")).replace("%2","".concat(p*(1-f)," ").concat(x,"(").concat(d?n:r,")")),"(",y.confirmations," ",Object(b.a)("confirmations"),")"),m.a.createElement("div",{className:g.a.btn_wrap},m.a.createElement(s.a,{type:"primary",className:g.a.btn,onClick:this.reset},Object(b.a)("close"))))}},{key:"render",value:function(){var e=this.state.showResult;return m.a.createElement("div",{className:g.a.container},m.a.createElement("div",{className:g.a.title},Object(b.a)("bridge_title")),m.a.createElement(r.a,{spinning:this.props.loading||this.state.loading||this.state.committing||this.props.committing},e?this.renderResult():this.renderForm()))}}])&&_(t.prototype,a),n&&_(t,n),x}(l.Component))||n)||n}}]);