(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1197:function(e,t,a){"use strict";var r,n=a(0),c=a.n(n),s=a(170),i=(a(115),a(32)),o=a.n(i),u=a(11),l=a(171);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=b(e);if(t){var n=b(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return v(this,a)}}function v(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var O=Object(l.h)(),_=Object(s.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.wallet)}))(r=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(s,e);var t,a,r,n=y(s);function s(){return d(this,s),n.apply(this,arguments)}return t=s,(a=[{key:"render",value:function(){var e=this.props,t=e.price,a=e.value,r=e.usd,n=e.exchangeRate,s=e.token,i=e.tokenAmount,l=(u.s[s]||u.s[1]).name.toLowerCase();if(7===s&&(l="bsv"),!t[l])return null;var p=null,d=O.currencyCode.toLowerCase();p=t[l][d]?t[l][d]:o()(t[l].usd).times(n[d]),r&&(p=o()(p).div(t[l].usd).multipliedBy(r));var m=0;return m=3===s||6===s?(m=(m=o()(a).times(p)).plus(i||0)).toFixed(2,1):o()(a).div(1e8).times(p).toFixed(2,1),c.a.createElement("span",null,O.symbol,m," ",O.currencyCode)}}])&&m(t.prototype,a),r&&m(t,r),s}(n.Component))||r;t.a=_},1256:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u}));var r=a(32),n=a.n(r);function c(e,t,a,r,n,c,s){try{var i=e[c](s),o=i.value}catch(e){return void a(e)}i.done?t(o):Promise.resolve(o).then(r,n)}function s(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var s=e.apply(t,a);function i(e){c(s,r,n,i,o,"next",e)}function o(e){c(s,r,n,i,o,"throw",e)}i(void 0)}))}}var i=function(){var e=s(regeneratorRuntime.mark((function e(t,a,r){var n,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r({type:"service/signSingWalletMessage",payload:a});case 2:return n=e.sent,e.next=5,r({type:"service/bsvTransfer",payload:{action_type:"sign",transferId:t,siglist:n}});case 5:if(c=e.sent,"sign"!==(s=c.data.type)){e.next=11;break}return e.next=10,i(c.data.transferId,c.data.hashlist,r);case 10:return e.abrupt("return",e.sent);case 11:if("success"!==s){e.next=13;break}return e.abrupt("return",c);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),o=function(){var e=s(regeneratorRuntime.mark((function e(t){var a,r,c,s,o,u,l,p,d,m,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.values,r=t.walletId,c=t.dispatch,s=t.change_address,o=t.token,u=a.toAddress,l=a.amount,p=a.note,d=a.sat||n()(l).multipliedBy(1e8).toString(),e.next=5,c({type:"service/bsvTransfer",payload:{action_type:"start_transfer",token_map_id:o,wid:r,list:[{type:"bsv",receiver_address:u,receiver_amount:d,change_address:s,note:p}]}});case 5:if((m=e.sent).success){e.next=8;break}return e.abrupt("return",m);case 8:return e.next=10,i(m.data.transferId,m.data.hashlist,c);case 10:if((f=e.sent).success){e.next=13;break}return e.abrupt("return",f);case 13:return e.abrupt("return",f);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=s(regeneratorRuntime.mark((function e(t){var a,r,c,s,o,u,l,p,d,m,f,y,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.values,r=t.walletId,c=t.dispatch,s=t.change_address,o=t.token,u=t.tokenId,l=t.decimal,p=a.amount,d=a.note,m=a.toAddress,f=a.sat||n()(p).multipliedBy(Math.pow(10,l)).toFixed(0),e.next=5,c({type:"service/bsvTransfer",payload:{action_type:"start_transfer",token_map_id:o,wid:r,list:[{type:"sensibleFt",receiver_address:m,receiver_amount:f,change_address:s,token_id:u,note:d}]}});case 5:if((y=e.sent).success){e.next=8;break}return e.abrupt("return",res);case 8:if(e.t0=d,!e.t0){e.next=12;break}return e.next=12,c({type:"service/bsvTransfer",payload:{action_type:"set_note",transferId:y.data.transferId,list:[d]}});case 12:return e.next=14,i(y.data.transferId,y.data.hashlist,c);case 14:if((v=e.sent).success){e.next=17;break}return e.abrupt("return",v);case 17:return e.abrupt("return",v);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},619:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return q}));a(606);var r,n,c,s=a(299),i=(a(1192),a(1196)),o=(a(604),a(140)),u=(a(605),a(172)),l=(a(1193),a(1195)),p=a(0),d=a.n(p),m=a(170),f=a(32),y=a.n(f),v=a(58),b=a(15),h=a(1109),g=a.n(h),O=a(11),_=a(115),w=a(171),E=a(1197),j=a(67),k=a(1228),x=a.n(k),N=a(4),R=a(1256);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t,a,r,n,c,s){try{var i=e[c](s),o=i.value}catch(e){return void a(e)}i.done?t(o):Promise.resolve(o).then(r,n)}function C(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var c=e.apply(t,a);function s(e){S(c,r,n,s,i,"next",e)}function i(e){S(c,r,n,s,i,"throw",e)}s(void 0)}))}}function F(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=D(e);if(t){var n=D(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return A(this,a)}}function A(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?W(e):t}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function M(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){z(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function z(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var L=Object(w.h)(),V=l.a.Item,q=(r=l.a.create(),n=Object(m.connect)((function(e){var t=e.user,a=e.wallet,r=e.loading.effects;return M(M(M({},t),a),{},{signing:r["service/signSingWalletMessage"],broadcasting:r["service/broadcast"],loading:r["service/queryWalletById"]||r["service/createSingleWalletAddress"]||r["service/createMultiPartyAddress"],creating:r["service/createMultiPartyTransaction"]||r["service/bsvTransfer"]})})),Object(v.withRouter)(c=r(c=n(c=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(f,e);var t,a,r,n,c,p,m=T(f);function f(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),z(W(t=m.call(this,e)),"handleSubmit",(function(e){e.preventDefault();var a=t.props,r=a.currentWallet,n=a.form,c=a.dispatch,s=r.token,i=r.type;n.validateFields(function(){var e=C(regeneratorRuntime.mark((function e(a,n){var o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a){e.next=31;break}if(o=n.toAddress,n.biz_data=o,!(1===r.token&&o.indexOf("@")>-1)){e.next=21;break}return e.next=6,c({type:"service/paymentDestination",payload:{paymail:o.trim(),wid:t.getWalletId()}});case 6:if(l=e.sent){e.next=9;break}return e.abrupt("return",u.a.error(Object(b.a)("invalid_address")));case 9:e.prev=9,N.Script.fromAddress(l),e.next=16;break;case 13:return e.prev=13,e.t0=e.catch(9),e.abrupt("return",u.a.error(Object(b.a)("invalid_address")));case 16:n.paymail=o,n.toAddress=l,n.biz_data="".concat(o," (").concat(l,")"),e.next=30;break;case 21:if((1!==s&&2!==s||"1"===o.substr(0,1))&&(7!==s||"m"===o.substr(0,1))){e.next=23;break}return e.abrupt("return",u.a.error(Object(b.a)("invalid_address")));case 23:e.prev=23,N.Script.fromAddress(o),e.next=30;break;case 27:return e.prev=27,e.t1=e.catch(23),e.abrupt("return",u.a.error(Object(b.a)("invalid_address")));case 30:1===i?t.createTransaction(n):t.createTransaction1(n);case 31:case"end":return e.stop()}}),e,null,[[9,13],[23,27]])})));return function(t,a){return e.apply(this,arguments)}}())})),z(W(t),"createTransaction",function(){var e=C(regeneratorRuntime.mark((function e(a){var r,n,c,s,i,o,l,p,d,m,f,v,b,h,g,_,E;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.getWalletId(),n=a.toAddress,c=a.amount,s=a.note,i=a.total,o=a.paymail,l=a.biz_data,p=t.props,d=p.currentWallet,m=p.dispatch,f=p.exchangeRate,v=d.type,b=d.token,h=t.state.change_address||d.deposit.address||d.address,g=y()(i),_=L.currencyCode.toLowerCase(),1!==parseInt(v)||!g.div(f[_]).isGreaterThan(O.c)){e.next=10;break}return t.setState({toAddress:n,biz_data:o||n,amount:c,note:s,showResult:"pay"}),e.abrupt("return");case 10:return e.next=12,Object(R.a)({values:a,dispatch:m,token:b,walletId:r,change_address:h});case 12:if(!(E=e.sent).message){e.next=15;break}return e.abrupt("return",u.a.error(tx_res.message));case 15:t.setState({toAddress:l,amount:c,note:s,showResult:"single",fee:Object(w.e)(E.data.totalEstimateFee)});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z(W(t),"createTransaction1",function(){var e=C(regeneratorRuntime.mark((function e(a){var r,n,c,s,i,o,l,p,d,m,f,v,h,g;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.getWalletId(),n=a.toAddress,c=a.amount,s=a.note,i=t.props,o=i.currentWallet,l=i.dispatch,p=o.type,d=o.token,m=t.state.change_address){e.next=7;break}return e.abrupt("return",u.a.error(Object(b.a)("need_all_online")));case 7:if(2!==parseInt(p)){e.next=21;break}return f=y()(c).multipliedBy(1e8).toString(),v={action_type:"start_transfer",token_map_id:d,wid:r,list:[{type:"bsv",receiver_address:n,receiver_amount:f,change_address:m,note:s}]},e.next=12,l({type:"service/getTransferEstimateFee",payload:M({},v)});case 12:return h=e.sent,e.next=15,l({type:"service/bsvMulTransfer",payload:v});case 15:if((g=e.sent).success){e.next=18;break}return e.abrupt("return",u.a.error(g.message));case 18:g.code=13,g.value=c,t.setState({showResult:"multi",toAddress:a.biz_data,amount:c,note:s,fee:Object(w.e)(h.data.estimateFee)});case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z(W(t),"changeBSV",(function(e){t.setFiatValue(e.target.value)})),z(W(t),"changeCurrency",(function(e){var a=t.props,r=a.form,n=a.currencyIndex,c=a.price,s=a.exchangeRate,i=a.currentWallet,o=_.a[n],u=e.target.value,l=O.s[i.token||1].name.toLowerCase();if(c[l]){var p=null,d=o.currencyCode.toLowerCase();p=c[l][d]?c[l][d]:y()(c[l].usd).times(s[d]),r.setFieldsValue({amount:u?y()(u).div(p).toFixed(8,1):0}),t.setState({amountCurrency:u?y()(u).div(p).toFixed(8,1):0,amountFiat:u||0})}})),z(W(t),"validate",(function(e,a,r){t.props.price;!a||y()(a).times(1e8).isLessThan(457)?r(Object(b.a)("amount_less_than")):r()})),z(W(t),"validateTotal",(function(e,a,r){var n=t.props,c=(n.price,n.form),s=(n.currentWallet,c.getFieldValue("amount"));y()(s).times(1e8).isLessThan(457)?r(Object(b.a)("amount_less_than")):r()})),z(W(t),"gotoBack",(function(){var e=t.props.match.params.id;t.props.history.push({pathname:"/money/list/".concat(e)})})),z(W(t),"finishPayOnPhone",(function(){t.props.dispatch({type:"wallet/save",payload:{current_payment_walletId:"",current_payment_t:"",current_payment_finish:!1}});var e=t.props.match.params.id;t.props.history.push({pathname:"/money/list/".concat(e)})})),z(W(t),"switchCurrency",(function(e){t.setState({currencyType:e})})),t.payment_t=Date.now().toString(),t.state={showResult:!1,amountCurrency:0,amountFiat:0},t}return t=f,(a=[{key:"getWalletId",value:function(){return parseInt(this.props.match.params.id)}},{key:"createSingleAddress",value:(p=C(regeneratorRuntime.mark((function e(){var t,a,r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.match,r=t.dispatch,n=a.params.id,e.next=4,r({type:"service/createSingleWalletAddress",payload:{wid:n,type:2}});case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})},{key:"createMultiAddress",value:(c=C(regeneratorRuntime.mark((function e(){var t,a,r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props,a=t.match,r=t.dispatch,n=a.params.id,e.next=4,r({type:"service/createMultiPartyAddress",payload:{wid:parseInt(n),type:2}});case 4:if(!(c=e.sent).msg){e.next=7;break}return e.abrupt("return",u.a.error(c.msg));case 7:return e.abrupt("return",c);case 8:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"renderSingleResult",value:function(){var e=this.state,t=e.toAddress,a=e.amount,r=e.note,n=e.fee,c=e.currencyType;return d.a.createElement("div",{className:g.a.result},d.a.createElement("div",{className:g.a.icon},d.a.createElement(j.a,{type:"iconsent"})),d.a.createElement("div",{className:g.a.title},Object(b.a)("payment_sent")),d.a.createElement("div",{className:g.a.desc},Object(b.a)("sent")," ",d.a.createElement("span",null,a," ",c)," ",Object(b.a)("to")," ",t),r&&d.a.createElement("div",{className:g.a.note},r),d.a.createElement("div",{className:g.a.btns},d.a.createElement(o.a,{type:"primary",className:g.a.btn,onClick:this.gotoBack},Object(b.a)("close"))),d.a.createElement("div",{className:g.a.fee},Object(b.a)("network_fee")," ",n," ",c))}},{key:"renderMultiResult",value:function(){var e=this.state,t=e.toAddress,a=e.amount,r=e.note,n=e.fee,c=e.currencyType;return d.a.createElement("div",{className:g.a.result},d.a.createElement("div",{className:g.a.icon},d.a.createElement(j.a,{type:"iconsigned"})),d.a.createElement("div",{className:g.a.title},Object(b.a)("tx_signed_you")),d.a.createElement("div",{className:g.a.desc},Object(b.a)("sign_tx_multi",a)," ",t),r&&d.a.createElement("div",{className:g.a.note},r),d.a.createElement("div",{className:g.a.btns},d.a.createElement(o.a,{type:"primary",className:g.a.btn,onClick:this.gotoBack},Object(b.a)("close"))),d.a.createElement("div",{className:g.a.fee},Object(b.a)("network_fee")," ",n," ",c))}},{key:"renderPay",value:function(){var e=this.state,t=e.toAddress,a=e.amount,r=e.note,n=e.biz_data,c=e.currencyType,s=r?encodeURIComponent(r):"",i="voltid:".concat(t,"?amount=").concat(a,"&label=").concat(s,"&walletId=").concat(this.props.match.params.id,"&biz_data=").concat(n,"&action=confirm_tx&t=").concat(this.payment_t);return d.a.createElement("div",{className:g.a.result_pay},d.a.createElement("div",{className:g.a.title},Object(b.a)("send_to")),d.a.createElement("div",{className:g.a.item},d.a.createElement("div",{className:g.a.label},Object(b.a)("to")),d.a.createElement("div",{className:g.a.value},n)),d.a.createElement("div",{className:g.a.item},d.a.createElement("div",{className:g.a.label},Object(b.a)("amount")),d.a.createElement("div",{className:g.a.value},a," ",c)),d.a.createElement("div",{className:g.a.item},d.a.createElement("div",{className:g.a.label},Object(b.a)("note")),d.a.createElement("div",{className:g.a.value},r)),d.a.createElement("div",{className:g.a.qrcode},d.a.createElement(x.a,{value:i})),d.a.createElement("div",{className:g.a.desc},Object(b.a)("payOnPhoneDesc",O.c)),d.a.createElement("div",{className:g.a.btns},d.a.createElement(o.a,{type:"primary",className:g.a.btn,onClick:this.gotoBack},Object(b.a)("close"))))}},{key:"renderPayResult",value:function(){var e=this.state,t=e.amount,a=e.note,r=e.biz_data,n=e.currencyType;return d.a.createElement("div",{className:g.a.result_pay},d.a.createElement("div",{className:g.a.icon},d.a.createElement(j.a,{type:"iconsent"})),d.a.createElement("div",{className:g.a.title},Object(b.a)("payment_sent")),d.a.createElement("div",{className:g.a.sub_title},Object(b.a)("payOnPhoneFinish")),d.a.createElement("div",{className:g.a.item},d.a.createElement("div",{className:g.a.label},Object(b.a)("to")),d.a.createElement("div",{className:g.a.value},r)),d.a.createElement("div",{className:g.a.item},d.a.createElement("div",{className:g.a.label},Object(b.a)("amount")),d.a.createElement("div",{className:g.a.value},t," ",n)),d.a.createElement("div",{className:g.a.item},d.a.createElement("div",{className:g.a.label},Object(b.a)("note")),d.a.createElement("div",{className:g.a.value},a)),d.a.createElement("div",{className:g.a.btns},d.a.createElement(o.a,{type:"primary",className:g.a.btn,onClick:this.finishPayOnPhone},Object(b.a)("close"))))}},{key:"componentDidMount",value:(n=C(regeneratorRuntime.mark((function e(){var t,a,r,n,c,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.dispatch,a=this.props.currentWallet,e.next=4,t({type:"service/queryWalletById",payload:{wid:this.getWalletId()}});case 4:if(a=e.sent,n=(r=a).type,c=r.token,2!==parseInt(n)){e.next=12;break}return e.next=9,this.createMultiAddress();case 9:e.t0=e.sent,e.next=15;break;case 12:return e.next=14,this.createSingleAddress();case 14:e.t0=e.sent;case 15:s=e.t0,this.setState({currencyType:Object(O.e)(c),change_address:s});case 17:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"setFiatValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=this.props,a=t.form,r=t.currencyIndex,n=t.price,c=t.exchangeRate,s=t.currentWallet,i=_.a[r],o=O.s[s.token||1].name.toLowerCase();if(7===s.token&&(o="bsv"),n[o]){var u=null,l=i.currencyCode.toLowerCase();u=n[o][l]?n[o][l]:y()(n[o].usd).times(c[l]),a.setFieldsValue({total:e?y()(e).multipliedBy(u).toFixed(8,1):0}),this.setState({amountCurrency:e||0,amountFiat:e?y()(e).multipliedBy(u).toFixed(8,1):0})}}},{key:"setAmount",value:function(e){this.props.form.setFieldsValue({amount:e}),this.setFiatValue(e)}},{key:"renderForm",value:function(){var e=this,t=this.props,a=t.current_payment_t,r=t.current_payment_finish;if(a===this.payment_t&&r)return this.renderPayResult();if("single"===this.state.showResult)return this.renderSingleResult();if("multi"===this.state.showResult)return this.renderMultiResult();if("pay"===this.state.showResult)return this.renderPay();var n=this.props,c=n.form,s=n.currencyIndex,u=n.currentWallet,p=(n.loading,n.creating),m=c.getFieldDecorator,f=_.a[s].currencyCode,y=u.total,v=u.frozen,h=u.name,j=u.type,k=u.threshold,x=u.token,N=this.state,R=N.currencyType,P=N.amountCurrency,S=N.amountFiat,C=Object(O.e)(x);return d.a.createElement("div",{className:g.a.container},d.a.createElement("div",{className:g.a.header},d.a.createElement("div",{className:g.a.title},Object(b.a)("send_to")),d.a.createElement("span",{className:g.a.goback,onClick:this.gotoBack}," ",Object(b.a)("cancel"))),d.a.createElement(l.a,{onSubmit:this.handleSubmit,hideRequiredMark:!0,className:g.a.content},d.a.createElement(V,null,m("toAddress",{rules:[{required:!0}]})(d.a.createElement(i.a,{allowClear:!0}))),d.a.createElement("div",{className:g.a.header},d.a.createElement("div",{className:g.a.title},Object(b.a)("from")," ",h)),d.a.createElement("div",{className:g.a.total},d.a.createElement("span",{onClick:function(){e.setAmount(Object(w.e)(y))}},d.a.createElement("span",{className:g.a.balance},Object(b.a)("balance"))," ",Object(w.e)(y)," ",C," | ",d.a.createElement(E.a,{token:x,value:y})),v>0&&d.a.createElement(d.a.Fragment,null," | ",Object(b.a)("frozen")," ",Object(w.e)(v)," ",C)),d.a.createElement("div",{className:g.a.amount_container},d.a.createElement(V,{style:{display:R===C?"block":"none",flex:1}},m("amount",{rules:[{validator:this.validate}]})(d.a.createElement(i.a,{onChange:this.changeBSV,style:{width:"100%"},allowClear:!0}))),d.a.createElement(V,{style:{display:R===C?"none":"block",flex:1}},m("total",{rules:[{validator:this.validateTotal}]})(d.a.createElement(i.a,{onChange:this.changeCurrency,style:{width:"100%"},allowClear:!0}))),d.a.createElement("div",{className:g.a.currency_content},[C,f].map((function(t){return d.a.createElement("div",{key:t,className:t===R?Object(w.j)(g.a.current_currency,g.a.currency_item):g.a.currency_item,onClick:function(){return e.switchCurrency(t)}},t)})))),d.a.createElement("div",{className:g.a.total_container},Object(b.a)("equivalent_to")," ",R===C?"".concat(S," ").concat(f):"".concat(P," ").concat(C)),d.a.createElement("div",{className:g.a.label},Object(b.a)("add_a_msg")),d.a.createElement(V,null,m("note")(d.a.createElement(i.a,null))),2===j&&d.a.createElement("div",{className:g.a.tips},d.a.createElement("span",{style:{fontWeight:"bold"}},Object(b.a)("notice"),":")," ",Object(b.a)("transfer_tips",k)),d.a.createElement("div",null,d.a.createElement(o.a,{type:"primary",loading:p,className:"btn",htmlType:"submit"},Object(b.a)("send")," ",R===C?"".concat(P," ").concat(C):"".concat(S," ").concat(f)))))}},{key:"render",value:function(){var e=this.props,t=e.signing,a=e.broadcasting,r=e.loading;return t?d.a.createElement(s.a,{tip:"Signing..."},this.renderForm()):a?d.a.createElement(s.a,{tip:"Broadcasting..."},this.renderForm()):r?d.a.createElement(s.a,null,this.renderForm()):this.renderForm()}}])&&F(t.prototype,a),r&&F(t,r),f}(p.Component))||c)||c)||c)}}]);