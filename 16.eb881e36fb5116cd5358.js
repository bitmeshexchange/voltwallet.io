(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1199:function(e,t,a){"use strict";var n,r=a(0),c=a.n(r),o=a(170),s=(a(115),a(33)),i=a.n(s),l=a(11),u=a(171);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=b(e);if(t){var r=b(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return v(this,a)}}function v(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var O=Object(u.h)(),E=Object(o.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.wallet)}))(n=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(o,e);var t,a,n,r=y(o);function o(){return p(this,o),r.apply(this,arguments)}return t=o,(a=[{key:"render",value:function(){var e=this.props,t=e.price,a=e.value,n=e.usd,r=e.exchangeRate,o=e.token,s=e.tokenAmount,u=(l.r[o]||l.r[1]).name.toLowerCase();if(7===o&&(u="bsv"),!t[u])return null;var m=null,p=O.currencyCode.toLowerCase();m=t[u][p]?t[u][p]:i()(t[u].usd).times(r[p]),n&&(m=i()(m).div(t[u].usd).multipliedBy(n));var f=0;return f=3===o||6===o?(f=(f=i()(a).times(m)).plus(s||0)).toFixed(2,1):i()(a).div(1e8).times(m).toFixed(2,1),c.a.createElement("span",null,O.symbol,f," ",O.currencyCode)}}])&&f(t.prototype,a),n&&f(t,n),o}(r.Component))||n;t.a=E},623:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return V}));a(607);var n,r,c,o=a(300),s=(a(1194),a(1197)),i=(a(605),a(139)),l=(a(606),a(172)),u=(a(1195),a(1196)),m=a(0),p=a.n(m),f=a(170),d=a(33),y=a.n(d),v=a(67),b=a(17),h=a(1112),g=a.n(h),O=a(11),E=a(115),j=a(171),w=a(1199),k=a(74),_=a(1229),N=a.n(_);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t,a,n,r,c,o){try{var s=e[c](o),i=s.value}catch(e){return void a(e)}s.done?t(i):Promise.resolve(i).then(n,r)}function C(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var c=e.apply(t,a);function o(e){x(c,n,r,o,s,"next",e)}function s(e){x(c,n,r,o,s,"throw",e)}o(void 0)}))}}function R(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=D(e);if(t){var r=D(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return T(this,a)}}function T(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?B(e):t}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(Object(a),!0).forEach((function(t){A(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var L=u.a.Item,V=(n=u.a.create(),r=Object(f.connect)((function(e){var t=e.user,a=e.wallet,n=e.loading.effects;return W(W(W({},t),a),{},{signing:n["service/signSingWalletMessage"],broadcasting:n["service/broadcast"],loading:n["service/queryWalletById"]||n["wallet/saveCurrent"],gasLoading:n["service/queryGasPrice"],creating:n["service/createMultiPartyTransaction"]})})),Object(v.withRouter)(c=n(c=r(c=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&S(e,t)}(m,e);var t,a,n,r,c=F(m);function m(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),A(B(t=c.call(this,e)),"handleSubmit",(function(e){e.preventDefault(),t.props.form.validateFields(function(){var e=C(regeneratorRuntime.mark((function e(a,n){var r,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=10;break}if(r=n.amount,r=y()(r),c=t.getCurBalance(),o=0,c&&(o=c.value),!(r>o)){e.next=9;break}return l.a.error(Object(b.a)("lack_of_balance")),e.abrupt("return");case 9:t.createTransaction(n);case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())})),A(B(t),"createTransaction",function(){var e=C(regeneratorRuntime.mark((function e(a){var n,r,c,o,s,i,u,m,p,f,d,y,v,b;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props,r=n.currentWallet,c=n.dispatch,o=a.toAddress,s=a.amount,i=a.note,t.state.tokenId,u=r.change,m=t.getWalletId(),r.balance,e.next=8,c({type:"wallet/createTrxTx",payload:{uid:r.uid,token:t.c.toLowerCase(),amount:s,wid:m,toAddress:o,changeAddress:u}});case 8:if(!(p=e.sent).message){e.next=11;break}return e.abrupt("return",l.a.error(p.message));case 11:return f="[object Array]"===Object.prototype.toString.call(p)?p:[p],e.next=14,c({type:"service/signSingWalletMessage",payload:f});case 14:return d=e.sent,y=d[0],v=y.r,b=y.s,e.next=18,c({type:"service/trxTxBroadcast",payload:{sighash:p.sighash,r:v,s:b,v:1}});case 18:e.sent?t.setState({toAddress:o,amount:s,note:i,showResult:"single",fee:p.fee}):l.a.error("Transaction failed. ".concat(result.error||result.message));case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),A(B(t),"changeBSV",(function(e){t.setFiatValue(e.target.value)})),A(B(t),"changeCurrency",(function(e){var a=t.props,n=a.form,r=a.currencyIndex,c=a.price,o=a.exchangeRate,s=a.currentWallet,i=E.a[r],l=e.target.value,u=O.r[s.token||1].name.toLowerCase();if(c[u]){var m=null,p=i.currencyCode.toLowerCase();m=c[u][p]?c[u][p]:y()(c[u].usd).times(o[p]),n.setFieldsValue({amount:l?y()(l).div(m).toFixed(8,1):0}),t.setState({amountCurrency:l?y()(l).div(m).toFixed(8,1):0,amountFiat:l||0})}})),A(B(t),"validate",(function(e,a,n){t.props.price;!a||y()(a).times(1e8).isLessThan(457)?n(Object(b.a)("amount_less_than")):n()})),A(B(t),"validateTotal",(function(e,a,n){var r=t.props,c=r.price,o=r.form,s=r.currentWallet,i=o.getFieldValue("amount"),l=O.r[s.token||1].name.toLowerCase();y()(i).times(c[l].usd);y()(i).times(1e8).isLessThan(457)?n(Object(b.a)("amount_less_than")):n()})),A(B(t),"gotoBack",(function(){var e=t.props.match.params.id;t.props.history.push({pathname:"/money/list/".concat(e)})})),A(B(t),"finishPayOnPhone",(function(){t.props.dispatch({type:"wallet/save",payload:{current_payment_walletId:"",current_payment_t:"",current_payment_finish:!1}});var e=t.props.match.params,a=(e.type,e.id);t.props.history.push({pathname:"/money/list/".concat(a)})})),A(B(t),"switchCurrency",(function(e){t.setState({currencyType:e})}));var a=e.match.params.tk,n=void 0===a?"trx":a;return t.payment_t=Date.now().toString(),t.c=n.toUpperCase(),t.state={showResult:!1,amountCurrency:0,amountFiat:0,gasPriceArr:[],currentGasPriceIndex:2,currencyType:n&&"trx"!==n?n:"TRX",nonce:-1},t}return t=m,(a=[{key:"getWalletId",value:function(){return parseInt(this.props.match.params.id)}},{key:"componentDidMount",value:(r=C(regeneratorRuntime.mark((function e(){var t,a,n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.dispatch,t.currentWallet,n=this.props,r=n.trcToken,c=n.trcTokenTimestamp,e.next=4,a({type:"service/queryWalletById",payload:{wid:this.getWalletId()}});case 4:if(r&&!(r.length<1)){e.next=8;break}return e.next=7,a({type:"wallet/queryTrcToken",payload:{timestamp:c}});case 7:e.sent;case 8:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"renderSingleResult",value:function(){var e=this.state,t=e.toAddress,a=e.amount,n=e.note,r=e.fee;return p.a.createElement("div",{className:g.a.result},p.a.createElement("div",{className:g.a.icon},p.a.createElement(k.a,{type:"iconsent"})),p.a.createElement("div",{className:g.a.title},Object(b.a)("payment_sent")),p.a.createElement("div",{className:g.a.desc},Object(b.a)("sent")," ",p.a.createElement("span",null,a," ",this.c)," ",Object(b.a)("to")," ",t),n&&p.a.createElement("div",{className:g.a.note},n),p.a.createElement("div",{className:g.a.btns},p.a.createElement(i.a,{type:"primary",className:g.a.btn,onClick:this.gotoBack},Object(b.a)("close"))),r&&p.a.createElement("div",{className:g.a.fee},Object(b.a)("network_fee")," ",r," TRX"))}},{key:"renderMultiResult",value:function(){var e=this.state,t=e.toAddress,a=e.amount,n=e.note,r=e.fee;return p.a.createElement("div",{className:g.a.result},p.a.createElement("div",{className:g.a.icon},p.a.createElement(k.a,{type:"iconsigned"})),p.a.createElement("div",{className:g.a.title},Object(b.a)("tx_signed_you")),p.a.createElement("div",{className:g.a.desc},Object(b.a)("sign_tx_multi","".concat(a," ").concat(this.c))," ",t),n&&p.a.createElement("div",{className:g.a.note},n),p.a.createElement("div",{className:g.a.btns},p.a.createElement(i.a,{type:"primary",className:g.a.btn,onClick:this.gotoBack},Object(b.a)("close"))),p.a.createElement("div",{className:g.a.fee},Object(b.a)("network_fee")," ",r," TRX"))}},{key:"renderPay",value:function(){var e=this.state,t=e.toAddress,a=e.amount,n=e.note,r=e.biz_data,c=n?encodeURIComponent(n):"",o="voltid:".concat(t,"?amount=").concat(a,"&label=").concat(c,"&walletId=").concat(this.props.match.params.id,"&token=").concat(this.c,"&biz_data=").concat(r,"&action=confirm_tx&t=").concat(this.payment_t);return p.a.createElement("div",{className:g.a.result_pay},p.a.createElement("div",{className:g.a.title},Object(b.a)("send_to")),p.a.createElement("div",{className:g.a.item},p.a.createElement("div",{className:g.a.label},Object(b.a)("to")),p.a.createElement("div",{className:g.a.value},r)),p.a.createElement("div",{className:g.a.item},p.a.createElement("div",{className:g.a.label},Object(b.a)("amount")),p.a.createElement("div",{className:g.a.value},a," ",this.c)),p.a.createElement("div",{className:g.a.item},p.a.createElement("div",{className:g.a.label},Object(b.a)("note")),p.a.createElement("div",{className:g.a.value},n)),p.a.createElement("div",{className:g.a.qrcode},p.a.createElement(N.a,{value:o})),p.a.createElement("div",{className:g.a.desc},Object(b.a)("payOnPhoneDesc",O.c)),p.a.createElement("div",{className:g.a.btns},p.a.createElement(i.a,{type:"primary",className:g.a.btn,onClick:this.gotoBack},Object(b.a)("close"))))}},{key:"renderPayResult",value:function(){var e=this.state,t=e.amount,a=e.note,n=e.biz_data;return p.a.createElement("div",{className:g.a.result_pay},p.a.createElement("div",{className:g.a.icon},p.a.createElement(k.a,{type:"iconsent"})),p.a.createElement("div",{className:g.a.title},Object(b.a)("payment_sent")),p.a.createElement("div",{className:g.a.sub_title},Object(b.a)("payOnPhoneFinish")),p.a.createElement("div",{className:g.a.item},p.a.createElement("div",{className:g.a.label},Object(b.a)("to")),p.a.createElement("div",{className:g.a.value},n)),p.a.createElement("div",{className:g.a.item},p.a.createElement("div",{className:g.a.label},Object(b.a)("amount")),p.a.createElement("div",{className:g.a.value},t," ",this.c)),p.a.createElement("div",{className:g.a.item},p.a.createElement("div",{className:g.a.label},Object(b.a)("note")),p.a.createElement("div",{className:g.a.value},a)),p.a.createElement("div",{className:g.a.btns},p.a.createElement(i.a,{type:"primary",className:g.a.btn,onClick:this.finishPayOnPhone},Object(b.a)("close"))))}},{key:"getCurBalance",value:function(){var e=this.props,t=e.match,a=e.currentWallet,n=e.trcToken,r=a.balance.balance,c=t.params.tk;c||(c="trx");var o=r.find((function(e){return e.token==c})),s=n.find((function(e){return e.symbol.toLowerCase()==c}));return Object.assign(o,s)}},{key:"getTrxBalance",value:function(){return this.props.currentWallet.balance.balance.find((function(e){return"trx"===e.token}))}},{key:"setFiatValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this.props,a=t.form,n=t.currencyIndex,r=t.price,c=t.exchangeRate,o=t.currentWallet,s=E.a[n],i=O.r[o.token||1].name.toLowerCase();if(r[i]){var l=null,u=s.currencyCode.toLowerCase();l=r[i][u]?r[i][u]:y()(r[i].usd).times(c[u]),a.setFieldsValue({total:e?y()(e).multipliedBy(l).toFixed(8,1):0}),this.setState({amountCurrency:e||0,amountFiat:e?y()(e).multipliedBy(l).toFixed(8,1):0})}}},{key:"setAmount",value:function(e){this.props.form.setFieldsValue({amount:e}),this.setFiatValue(e)}},{key:"selectGasFee",value:function(e){this.setState({currentGasPriceIndex:e})}},{key:"renderForm",value:function(){var e=this,t=this.props,a=t.current_payment_t,n=t.current_payment_finish;if(a===this.payment_t&&n)return this.renderPayResult();if("single"===this.state.showResult)return this.renderSingleResult();if("multi"===this.state.showResult)return this.renderMultiResult();if("pay"===this.state.showResult)return this.renderPay();var r=this.props,c=r.form,o=r.currencyIndex,l=r.currentWallet,m=r.match,f=r.creating,d=(r.gasLoading,c.getFieldDecorator),y=E.a[o].currencyCode,v=l.frozen,h=l.name,k=l.type,_=l.threshold,N=l.token;if(!l.id||!l.balance)return null;var P=this.state,x=P.amountCurrency,C=P.amountFiat,R=P.currencyType,S=(P.gasPriceArr,P.currentGasPriceIndex,this.getCurBalance()),F=m.params.tk,T=void 0===F?"trx":F,B="trx"===T,D=0;S&&(D=S.value);var I=Object(O.e)(N);return B||(I=T.toUpperCase()),p.a.createElement("div",{className:g.a.container},p.a.createElement("div",{className:g.a.header},p.a.createElement("div",{className:g.a.title},Object(b.a)("send_to")),p.a.createElement("span",{className:g.a.goback,onClick:this.gotoBack}," ",Object(b.a)("cancel"))),p.a.createElement(u.a,{onSubmit:this.handleSubmit,hideRequiredMark:!0,className:g.a.content},p.a.createElement(L,null,d("toAddress",{rules:[{required:!0}]})(p.a.createElement(s.a,{allowClear:!0}))),p.a.createElement("div",{className:g.a.header},p.a.createElement("div",{className:g.a.title},Object(b.a)("from")," ",h)),p.a.createElement("div",{className:g.a.total},p.a.createElement("span",{onClick:function(){e.setAmount(D)}},p.a.createElement("span",{className:g.a.balance},Object(b.a)("balance"))," ",D," ",I," ",B&&p.a.createElement(p.a.Fragment,null,"| ",p.a.createElement(w.a,{token:N,value:D}))),v>0&&p.a.createElement(p.a.Fragment,null," | ",Object(b.a)("frozen")," ",v," ",I)),p.a.createElement("div",{className:g.a.amount_container},p.a.createElement(L,{style:{display:R!==I&&B?"none":"block",flex:1}},d("amount",{rules:[{validator:this.validate}]})(p.a.createElement(s.a,{onChange:this.changeBSV,style:{width:"100%"},allowClear:!0}))),p.a.createElement(L,{style:{display:R!==I&&B?"block":"none",flex:1}},d("total",{rules:[{validator:this.validateTotal}]})(p.a.createElement(s.a,{onChange:this.changeCurrency,style:{width:"100%"},allowClear:!0}))),B?p.a.createElement("div",{className:g.a.currency_content},[I,y].map((function(t){return p.a.createElement("div",{key:t,className:t===R?Object(j.j)(g.a.current_currency,g.a.currency_item):g.a.currency_item,onClick:function(){return e.switchCurrency(t)}},t)}))):p.a.createElement("div",{className:g.a.currency_content},p.a.createElement("div",{className:Object(j.j)(g.a.current_currency,g.a.currency_item)},I))),p.a.createElement("div",{className:g.a.total_container},B&&p.a.createElement(p.a.Fragment,null,Object(b.a)("equivalent_to")," ",R===I?"".concat(C," ").concat(y):"".concat(x," ").concat(I))),p.a.createElement("div",{className:g.a.label},Object(b.a)("add_a_msg")),p.a.createElement(L,null,d("note")(p.a.createElement(s.a,null))),2===k&&p.a.createElement("div",{className:g.a.tips},p.a.createElement("span",{style:{fontWeight:"bold"}},Object(b.a)("notice"),":")," ",Object(b.a)("transfer_tips",_)),p.a.createElement("div",null,p.a.createElement(i.a,{type:"primary",loading:f,className:"btn",htmlType:"submit"},Object(b.a)("send")," ",R!==I&&B?"".concat(C," ").concat(y):"".concat(x," ").concat(I)))))}},{key:"render",value:function(){var e=this.props,t=e.signing,a=e.broadcasting,n=e.loading;return t?p.a.createElement(o.a,{tip:"Signing..."},this.renderForm()):a?p.a.createElement(o.a,{tip:"Broadcasting..."},this.renderForm()):n?p.a.createElement(o.a,null,this.renderForm()):this.renderForm()}}])&&R(t.prototype,a),n&&R(t,n),m}(m.Component))||c)||c)||c)}}]);