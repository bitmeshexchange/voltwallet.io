(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1083:function(e,t,r){"use strict";r.d(t,"a",(function(){return I}));r(1072);var n,o=r(1075),a=(r(420),r(20)),i=(r(422),r(129)),c=r(0),u=r.n(c),l=r(272),s=(r(425),[{name:"zh-cn",label:"简体中文",value:1},{name:"en-us",label:"English",value:2}]),f=r(899),p=r.n(f),y=r(30);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}document.domain.split(".").slice(document.domain.split(".").length-2).join(".");var w,E,S=window.localStorage.getItem(y.a.LANG),P=!1,_=!0,k=!1,x=void 0;try{for(var C,D=s[Symbol.iterator]();!(_=(C=D.next()).done);_=!0){if(C.value.name===S){P=!0;break}}}catch(e){k=!0,x=e}finally{try{_||null==D.return||D.return()}finally{if(k)throw x}}P||(S="zh-cn");var T=s.map((function(e){return e.name===S&&(w=e.label,E="flag-"+e.name),u.a.createElement(i.a.Item,{key:e.name},u.a.createElement("i",{className:[p.a.flag,p.a["flag-"+e.name]].join(" ")}),e.label)})),I=Object(l.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.user)}))(n=function(e){function t(){return m(this,t),v(this,d(t).apply(this,arguments))}var r,n,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,e),r=t,(n=[{key:"changeLang",value:function(e){var t=e.key;S!==t&&(this.props.dispatch({type:"user/save",payload:{lang:t}}),window.localStorage.setItem(y.a.LANG,t),window.location.reload())}},{key:"render",value:function(){var e=u.a.createElement(i.a,{onClick:this.changeLang.bind(this)},T);return u.a.createElement("div",{style:this.props.style,className:p.a.lang},u.a.createElement(o.a,{overlay:e},u.a.createElement("span",{className:"ant-dropdown-link"},u.a.createElement("i",{className:[p.a.flag,p.a[E]].join(" ")}),w," ",u.a.createElement(a.a,{type:"caret-down"}))))}}])&&h(r.prototype,n),c&&h(r,c),t}(c.Component))||n},1376:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return L}));r(418);var n,o=r(273),a=(r(417),r(128)),i=(r(1068),r(1069)),c=(r(419),r(156)),u=(r(937),r(938)),l=r(0),s=r.n(l),f=r(272),p=r(3),y=(r(34),r(894)),b=r.n(y),m=r(18),h=r(320),v=r(1377);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function j(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function w(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){j(a,n,o,i,c,"next",e)}function c(e){j(a,n,o,i,c,"throw",e)}i(void 0)}))}}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function P(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?k(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=u.a.Item,I={labelCol:{span:6},wrapperCol:{span:18}},R=p.crypto.ECDSA,A=p.crypto.Hash.sha256;function N(t,r){var n=A(e.from(t)),o=new p.PrivateKey(r);return R.sign(n,o).toString()}var L=u.a.create()(n=Object(f.connect)((function(e){var t=e.user,r=e.loading.effects;return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{loading:r["user/verifyEmail"]||r["user/register"]})}))(n=function(e){function t(){var e,r;E(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return D(k(r=P(this,(e=_(t)).call.apply(e,[this].concat(o)))),"handleSubmit",(function(e){e.preventDefault();var t=r.props,n=t.form,o=t.restore,a=t.email;n.validateFields(function(){var e=w(regeneratorRuntime.mark((function e(t,n){var i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=8;break}return console.log("Received values of form: ",n),e.next=4,r.props.dispatch({type:"user/verifyEmail",payload:{email:a,code:n.code}});case 4:if(i=e.sent){e.next=7;break}return e.abrupt("return",c.a.error(Object(m.a)("invalid_code")));case 7:i.uid?o(i):r.register(a,i.token);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}())})),D(k(r),"register",function(){var e=w(regeneratorRuntime.mark((function e(t,n){var o,a,i,u,l,s,f,y,b,d,g,j,w,E,S,P,_,k,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.props,a=o.trustee,o.dispatch,i=Object(v.a)(),u=i.seed,l=i.shares,e.next=4,Object(h.a)();case 4:return s=e.sent,f=s.get_random_key_pair(),y=O(f,2),b=y[0],d=y[1],g=s.get_encryption_key(b,d),j=p.HDPrivateKey.fromSeed(p.Mnemonic.fromString(u).toSeed()),w=j.hdPublicKey.toString(),E=j.deriveChild(0).privateKey,S=p.crypto.Hash.sha256(E.toBuffer()).slice(0,32),P={},l.forEach((function(e,t){var r=a[t],n=Object(p.computeSecret)(E.toBuffer(),r.publicKey);P[r.name]=Object(p.encrypt)(n,e).toString("hex")})),_=Object(p.encrypt)(S,[b,d].join(",")).toString("hex"),k=N(t,E),e.next=17,r.props.dispatch({type:"user/register",payload:{xpub:w,email:t,sig:k,ek:g,dk:_,shares:P,token:n}});case 17:(x=e.sent)?r.props.registerCallback(u,x):c.a.error(Object(m.a)("failedRegister"));case 19:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),r}var r,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=this.props,r=t.form,n=t.loading,c=r.getFieldDecorator,l=void 0!==n&&n;return s.a.createElement(o.a,{spinning:l},s.a.createElement(u.a,g({onSubmit:function(t){return e.handleSubmit(t)}},I),s.a.createElement(T,{label:Object(m.a)("volt_code")},c("code",{rules:[{required:!0}]})(s.a.createElement(i.a,{style:{width:350},placeholder:Object(m.a)("input_email_code")})),s.a.createElement(a.a,{className:"btn_short",type:"primary",htmlType:"submit"},Object(m.a)("verify"))),s.a.createElement("p",{className:b.a.form_note,style:{marginLeft:"11%"}},"Tips: ",Object(m.a)("verify_email_note"))))}}])&&S(r.prototype,n),l&&S(r,l),t}(l.Component))||n)||n}).call(this,r(17).Buffer)},1377:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(3),o=r(1133),a=r.n(o);function i(e){var t=a.a.combine(e);return a.a.hex2str(t)}function c(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2;;){var t=n.Mnemonic.fromRandom().toString(),r=a.a.str2hex(t),o=a.a.share(r,e,e),c=i(o);if(c===t)return{seed:c,shares:o}}}},930:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Q}));var n,o=r(0),a=r.n(o),i=r(894),c=r.n(i),u=r(18),l=r(58),s=(r(418),r(273)),f=(r(417),r(128)),p=(r(1068),r(1069)),y=(r(1372),r(1374)),b=(r(1373),r(1375)),m=(r(419),r(156)),h=(r(937),r(938)),v=r(272),d=r(1071),g=r.n(d);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function w(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function E(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){w(a,n,o,i,c,"next",e)}function c(e){w(a,n,o,i,c,"throw",e)}i(void 0)}))}}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _(e,t){return!t||"object"!==O(t)&&"function"!=typeof t?x(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var I=h.a.Item,R={labelCol:{span:6},wrapperCol:{span:18}},A="c51bbbac6fb44c41e87c718118359aea5ca63bca5356ffd5cbb6fba86d30165d",N=h.a.create()(n=Object(v.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.user,{loading:e.loading.effects["user/sendCode"]})}))(n=function(e){function t(){var e,r;S(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return T(x(r=_(this,(e=k(t)).call.apply(e,[this].concat(o)))),"state",{verified:!1}),T(x(r),"handleSubmit",(function(e){e.preventDefault();var t=r.props,n=t.form,o=t.callback;n.validateFields(function(){var e=E(regeneratorRuntime.mark((function e(t,n){var a,i,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=9;break}return console.log("Received values of form: ",n),a=n.email,i=(new Date).getTime(),c=g()([A,a,i].join("")),e.next=7,r.props.dispatch({type:"user/sendCode",payload:{email:a,t:i,h:c}});case 7:e.sent?(r.setState({email:a,verified:!0}),o&&o(a)):m.a.error(Object(u.a)("request_failed_title"));case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}())})),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.form,r=e.loading,n=t.getFieldDecorator,o=this.state,i=o.email,c=void 0!==r&&r;return o.verified?a.a.createElement(y.a,{style:{lineHeight:"32px"}},a.a.createElement(b.a,{span:6,style:{textAlign:"right"}},Object(u.a)("email"),a.a.createElement("span",{style:{margin:"0 8px 0 2px"}},":")),a.a.createElement(b.a,{span:18},i)):a.a.createElement(s.a,{spinning:c},a.a.createElement(h.a,j({onSubmit:this.handleSubmit},R),a.a.createElement(I,{label:Object(u.a)("enter_email")},n("email",{rules:[{required:!0},{type:"email"}],validateTrigger:"onBlur"})(a.a.createElement(p.a,{style:{width:350},placeholder:Object(u.a)("email_placeholder")})),a.a.createElement(f.a,{className:"btn_short",type:"primary",htmlType:"submit"},Object(u.a)("get_code"))),a.a.createElement("p",{style:{marginTop:15,marginLeft:"14%"}},"Tips: ",Object(u.a)("backup_note_2"))))}}])&&P(r.prototype,n),o&&P(r,o),t}(o.Component))||n)||n,L=r(1376),K=r(30),B=r(1083);function F(e){return(F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function M(e,t){return!t||"object"!==F(t)&&"function"!=typeof t?z(e):t}function V(e){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function J(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var U=window.localStorage,Y=window.sessionStorage,Q=function(e){function t(){var e,r;H(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return J(z(r=M(this,(e=V(t)).call.apply(e,[this].concat(o)))),"state",{email:""}),J(z(r),"emailVerifiedCallback",(function(e){r.setState({email:e})})),J(z(r),"registerCallback",(function(e,t){var n=K.a.UID,o=K.a.SEED,a=K.a.PRIVACY,i=K.a.SECRET;U.setItem(n,t.login_token),Y.setItem(i,t.secret),U.setItem(o,e),U.removeItem(a),Y.removeItem(o),r.props.history.push("/user/login")})),J(z(r),"restore",(function(e){var t=K.a.UID,n=K.a.TOKEN,o=K.a.EMAIL,a=K.a.SECRET;U.setItem(t,e.login_token),Y.setItem(n,e.token),Y.setItem(a,e.secret),Y.setItem(o,r.state.email),r.props.history.push("/user/restore")})),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.state.email;return a.a.createElement("div",{className:c.a.container},a.a.createElement(B.a,{style:{textAlign:"right"}}),a.a.createElement("div",{className:"logo"},a.a.createElement("i",{className:"iconfont"},"")),a.a.createElement("h3",{className:c.a.title},Object(u.a)("signup_or_recover")),a.a.createElement(N,{callback:this.emailVerifiedCallback}),e&&a.a.createElement(L.a,{email:e,restore:this.restore,registerCallback:this.registerCallback}),a.a.createElement("div",{style:{marginTop:20}},a.a.createElement(l.Link,{to:"/user/entry"},Object(u.a)("scanApp"))))}}])&&q(r.prototype,n),o&&q(r,o),t}(o.Component)}}]);