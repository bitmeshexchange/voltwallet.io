(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1132:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return A}));a(607);var r,n,s,c=a(299),i=(a(605),a(140)),o=(a(1195),a(1198)),u=(a(606),a(172)),l=(a(1196),a(1197)),p=a(0),d=a.n(p),m=a(170),f=a(32),b=a.n(f),y=a(58),v=a(15),h=a(1111),g=a.n(h),k=a(171),_=a(67);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t,a,r,n,s,c){try{var i=e[s](c),o=i.value}catch(e){return void a(e)}i.done?t(o):Promise.resolve(o).then(r,n)}function E(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var s=e.apply(t,a);function c(e){w(s,r,n,c,i,"next",e)}function i(e){w(s,r,n,c,i,"throw",e)}c(void 0)}))}}function j(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=T(e);if(t){var n=T(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return N(this,a)}}function N(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?R(e):t}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){B(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function B(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var W=l.a.Item,A=(r=l.a.create(),n=Object(m.connect)((function(e){var t=e.user,a=e.wallet,r=e.loading.effects;return P(P(P({},t),a),{},{creatingTx:r["service/createFtRoutecheckTx"]||r["service/createFtTransferTx"]||r["service/bsvTransfer"],signing:r["service/signSingWalletMessage"],broadcasting:r["service/broadcastFtTransferTx"],loading:r["service/queryWalletById"]||r["service/createSingleWalletAddress"]||r["service/createMultiPartyAddress"]||r["service/queryBsvToken"],creating:r["service/createMultiPartyTransaction"]})})),Object(y.withRouter)(s=r(s=n(s=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(m,e);var t,a,r,n,s,p=S(m);function m(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),B(R(t=p.call(this,e)),"handleSubmit",(function(e){e.preventDefault();var a=t.props.currentWallet,r=a.type;t.props.form.validateFields(function(){var e=E(regeneratorRuntime.mark((function e(n,s){var c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=25;break}if(c=s.toAddress,s.biz_data=c,!(c.indexOf("@")>-1)){e.next=21;break}return e.next=6,t.props.dispatch({type:"service/paymentDestination",payload:{paymail:c.trim()}});case 6:if(i=e.sent){e.next=9;break}return e.abrupt("return",u.a.error(Object(v.a)("invalid_address")));case 9:e.prev=9,Script.fromAddress(i),e.next=16;break;case 13:return e.prev=13,e.t0=e.catch(9),e.abrupt("return",u.a.error(Object(v.a)("invalid_address")));case 16:s.paymail=c,s.toAddress=i,s.biz_data="".concat(c," (").concat(i,")"),e.next=24;break;case 21:if(Object(k.i)(c,a.token)){e.next=24;break}return e.abrupt("return",u.a.error(Object(v.a)("invalid_address")));case 24:1===parseInt(r)?t.createTransaction(s):t.createTransaction1(s);case 25:case"end":return e.stop()}}),e,null,[[9,13]])})));return function(t,a){return e.apply(this,arguments)}}())})),B(R(t),"sign",function(){var e=E(regeneratorRuntime.mark((function e(a,r){var n,s,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.dispatch,e.next=3,n({type:"service/signSingWalletMessage",payload:r});case 3:return s=e.sent,e.next=6,n({type:"service/bsvTransfer",payload:{action_type:"sign",transferId:a,siglist:s}});case 6:if((c=e.sent).success){e.next=9;break}return e.abrupt("return",u.a.error(c.msg||c.message));case 9:if("sign"!==(i=c.data.type)){e.next=14;break}return e.next=13,t.sign(c.data.transferId,c.data.hashlist);case 13:return e.abrupt("return",e.sent);case 14:if("success"!==i){e.next=16;break}return e.abrupt("return",c);case 16:return e.abrupt("return",c);case 17:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),B(R(t),"createTransaction",function(){var e=E(regeneratorRuntime.mark((function e(a){var r,n,s,c,i,o,l,p,d,m,f,y,v,h,g;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.props,n=r.currentWallet,s=r.dispatch,c=r.match,i=a.amount,o=a.note,l=a.toAddress,p=a.biz_data,d=n.token,m=t.getWalletId(),f=c.params.token,y=n.change||t.state.change_address,v=b()(i).multipliedBy(Math.pow(10,t.cur_balance.decimals||t.cur_balance.token_decimal)).toFixed(0),e.next=9,s({type:"service/bsvTransfer",payload:{action_type:"start_transfer",token_map_id:d,wid:m,list:[{type:"sensibleFt",receiver_address:l,receiver_amount:v,change_address:y,token_id:f,note:o}]}});case 9:if((h=e.sent).success){e.next=12;break}return e.abrupt("return",u.a.error(h.message));case 12:return e.next=14,t.sign(h.data.transferId,h.data.hashlist);case 14:if((g=e.sent).success){e.next=17;break}return e.abrupt("return",u.a.error("Transaction failed. ".concat(g.message)));case 17:t.setState({toAddress:p,amount:i,note:o,fee:Object(k.e)(g.data.totalEstimateFee),showResult:"single"}),t.props.dispatch({type:"service/queryWalletById",payload:{wid:m}});case 19:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),B(R(t),"createTransaction1",function(){var e=E(regeneratorRuntime.mark((function e(a){var r,n,s,c,i,o,l,p,d,m,f,y,v,h,g,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.getWalletId(),n=a.toAddress,s=a.amount,c=a.note,i=t.props,o=i.currentWallet,l=i.dispatch,p=i.match,d=p.params.token,m=o.type,f=o.token,y=o.change||t.state.change_address,2!==parseInt(m)){e.next=20;break}return v=b()(s).multipliedBy(Math.pow(10,t.cur_balance.decimals||t.cur_balance.token_decimal)).toFixed(0),h={action_type:"start_transfer",token_map_id:f,wid:r,list:[{type:"sensibleFt",receiver_address:n,receiver_amount:v,change_address:y,codehash:d.substr(0,40),genesis:d.substr(40),token_id:d,note:c}]},e.next=11,l({type:"service/getTransferEstimateFee",payload:P({},h)});case 11:return g=e.sent,e.next=14,l({type:"service/bsvMulTransfer",payload:h});case 14:if((_=e.sent).success){e.next=17;break}return e.abrupt("return",u.a.error(_.message));case 17:_.code=13,_.value=s,t.setState({showResult:"multi",toAddress:a.biz_data,amount:s,note:c,fee:Object(k.e)(g.data.estimateFee)});case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),B(R(t),"changeBSV",(function(e){t.setState({amountCurrency:e.target.value||0})})),B(R(t),"validate",(function(e,t,a){!(t=parseFloat(t))||b()(t).times(1e8).isLessThan(457)?a(Object(v.a)("amount_less_than")):a()})),B(R(t),"gotoBack",(function(){var e=t.props.match.params.id;t.props.history.push({pathname:"/money/tokenlist/".concat(e)})})),B(R(t),"renderForm",(function(){var e=t.props,a=e.form,r=e.currentWallet,n=e.creating,s=a.getFieldDecorator,c=r.name,u=r.type,p=r.threshold,m=(r.balance,t.state),f=m.amountCurrency,b=m.symbol,y=t.cur_balance?t.cur_balance.value:0;return d.a.createElement("div",{className:g.a.container},d.a.createElement("div",{className:g.a.header},d.a.createElement("div",{className:g.a.title},Object(v.a)("send_to")),d.a.createElement("span",{className:g.a.goback,onClick:t.gotoBack}," ",Object(v.a)("cancel"))),d.a.createElement(l.a,{onSubmit:t.handleSubmit,hideRequiredMark:!0,className:g.a.content},d.a.createElement(W,null,s("toAddress",{rules:[{required:!0}]})(d.a.createElement(o.a,{allowClear:!0}))),d.a.createElement("div",{className:g.a.header},d.a.createElement("div",{className:g.a.title},Object(v.a)("from")," ",c)),d.a.createElement("div",{className:g.a.total},d.a.createElement("span",{onClick:function(){t.setAmount(y)}},d.a.createElement("span",{className:g.a.balance},Object(v.a)("balance"))," ",y," ",b)),d.a.createElement("div",{className:g.a.amount_container},d.a.createElement(W,{style:{flex:1}},s("amount",{rules:[{validator:t.validate}]})(d.a.createElement(o.a,{onChange:t.changeBSV,style:{width:"100%"},allowClear:!0}))),d.a.createElement("div",{className:g.a.currency_content},d.a.createElement("div",{className:Object(k.j)(g.a.current_currency,g.a.currency_item)},b))),d.a.createElement("div",{className:g.a.label},Object(v.a)("add_a_msg")),d.a.createElement(W,null,s("note")(d.a.createElement(o.a,null))),2===u&&d.a.createElement("div",{className:g.a.tips},d.a.createElement("span",{style:{fontWeight:"bold"}},Object(v.a)("notice"),":")," ",Object(v.a)("transfer_tips",p)),d.a.createElement("div",null,d.a.createElement(i.a,{type:"primary",loading:n,className:"btn",htmlType:"submit"},Object(v.a)("send")," ",f," ",b))))}));var a=e.match.params.tk;return t.payment_t=Date.now().toString(),t.state={showResult:!1,amountCurrency:0,symbol:a,currentWallet:{}},t}return t=m,(a=[{key:"componentDidMount",value:function(){this.fetch()}},{key:"fetch",value:(s=E(regeneratorRuntime.mark((function e(){var t,a,r,n,s,c,i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.dispatch,e.next=3,t({type:"service/queryWalletById",payload:{wid:this.getWalletId()}});case 3:if(a=e.sent,r=this.props,n=r.bsvToken,s=r.bsvTokenTimestamp,n&&!(n.length<1)){e.next=9;break}return e.next=8,t({type:"service/queryBsvToken",payload:{timestamp:s}});case 8:e.sent;case 9:if(c=a.type,i=a.change,a.balance&&(this.cur_balance=this.getCurBalance()),i||1!==c){e.next=16;break}return e.next=14,this.createSingleAddress();case 14:o=e.sent,this.setState({change_address:o});case 16:case"end":return e.stop()}}),e,this)}))),function(){return s.apply(this,arguments)})},{key:"createSingleAddress",value:(n=E(regeneratorRuntime.mark((function e(){var t,a,r,n,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.match,r=t.dispatch,n=a.params.id,e.next=4,r({type:"service/createSingleWalletAddress",payload:{wid:n,type:2}});case 4:return s=e.sent,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"getWalletId",value:function(){return parseInt(this.props.match.params.id)}},{key:"renderSingleResult",value:function(){var e=this.state,t=e.toAddress,a=e.amount,r=e.note,n=e.symbol,s=e.fee;return d.a.createElement("div",{className:g.a.result},d.a.createElement("div",{className:g.a.icon},d.a.createElement(_.a,{type:"iconsent"})),d.a.createElement("div",{className:g.a.title},Object(v.a)("payment_sent")),d.a.createElement("div",{className:g.a.desc},Object(v.a)("sent")," ",d.a.createElement("span",null,a," ",n)," ",Object(v.a)("to")," ",t),r&&d.a.createElement("div",{className:g.a.note},r),d.a.createElement("div",{className:g.a.btns},d.a.createElement(i.a,{type:"primary",className:g.a.btn,onClick:this.gotoBack},Object(v.a)("close"))),d.a.createElement("div",{className:g.a.fee},Object(v.a)("network_fee")," ",s," BSV"))}},{key:"renderMultiResult",value:function(){var e=this.state,t=e.toAddress,a=e.amount,r=e.note,n=e.fee;return d.a.createElement("div",{className:g.a.result},d.a.createElement("div",{className:g.a.icon},d.a.createElement(_.a,{type:"iconsigned"})),d.a.createElement("div",{className:g.a.title},Object(v.a)("tx_signed_you")),d.a.createElement("div",{className:g.a.desc},Object(v.a)("sign_tx_multi",a)," ",t),r&&d.a.createElement("div",{className:g.a.note},r),d.a.createElement("div",{className:g.a.btns},d.a.createElement(i.a,{type:"primary",className:g.a.btn,onClick:this.gotoBack},Object(v.a)("close"))),d.a.createElement("div",{className:g.a.fee},Object(v.a)("network_fee")," ",n," BSV"))}},{key:"getCurBalance",value:function(){var e=this.props,t=e.currentWallet,a=e.bsvToken,r=e.match,n=t.balance.balance,s=r.params.token,c=n.find((function(e){return e&&e.id==s})),i=a.find((function(e){return e&&e.tokenId==s}));return Object.assign(c,i)}},{key:"setAmount",value:function(e){this.props.form.setFieldsValue({amount:e}),this.setState({amountCurrency:e||0})}},{key:"render",value:function(){var e=this.state.showResult,t=this.props,a=t.signing,r=t.broadcasting,n=t.loading,s=t.current_payment_t,i=t.current_payment_finish,o=t.creatingTx;return s===this.payment_t&&i?this.renderPayResult():"single"===e?this.renderSingleResult():"multi"===e?this.renderMultiResult():o?d.a.createElement(c.a,{tip:"CreatingTx..."},this.renderForm()):a?d.a.createElement(c.a,{tip:"Signing..."},this.renderForm()):r?d.a.createElement(c.a,{tip:"Broadcasting..."},this.renderForm()):n?d.a.createElement(c.a,null,this.renderForm()):this.renderForm()}}])&&j(t.prototype,a),r&&j(t,r),m}(p.Component))||s)||s)||s)}}]);