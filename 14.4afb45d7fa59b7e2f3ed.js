(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1067:function(e,t){var r={utf8:{stringToBytes:function(e){return r.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(r.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],r=0;r<e.length;r++)t.push(255&e.charCodeAt(r));return t},bytesToString:function(e){for(var t=[],r=0;r<e.length;r++)t.push(String.fromCharCode(e[r]));return t.join("")}}};e.exports=r},1071:function(e,t,r){var n,o,a,i,c;n=r(1072),o=r(1067).utf8,a=r(1073),i=r(1067).bin,(c=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?i.stringToBytes(e):o.stringToBytes(e):a(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var r=n.bytesToWords(e),u=8*e.length,s=1732584193,l=-271733879,f=-1732584194,p=271733878,y=0;y<r.length;y++)r[y]=16711935&(r[y]<<8|r[y]>>>24)|4278255360&(r[y]<<24|r[y]>>>8);r[u>>>5]|=128<<u%32,r[14+(u+64>>>9<<4)]=u;var b=c._ff,h=c._gg,m=c._hh,g=c._ii;for(y=0;y<r.length;y+=16){var d=s,v=l,w=f,O=p;s=b(s,l,f,p,r[y+0],7,-680876936),p=b(p,s,l,f,r[y+1],12,-389564586),f=b(f,p,s,l,r[y+2],17,606105819),l=b(l,f,p,s,r[y+3],22,-1044525330),s=b(s,l,f,p,r[y+4],7,-176418897),p=b(p,s,l,f,r[y+5],12,1200080426),f=b(f,p,s,l,r[y+6],17,-1473231341),l=b(l,f,p,s,r[y+7],22,-45705983),s=b(s,l,f,p,r[y+8],7,1770035416),p=b(p,s,l,f,r[y+9],12,-1958414417),f=b(f,p,s,l,r[y+10],17,-42063),l=b(l,f,p,s,r[y+11],22,-1990404162),s=b(s,l,f,p,r[y+12],7,1804603682),p=b(p,s,l,f,r[y+13],12,-40341101),f=b(f,p,s,l,r[y+14],17,-1502002290),s=h(s,l=b(l,f,p,s,r[y+15],22,1236535329),f,p,r[y+1],5,-165796510),p=h(p,s,l,f,r[y+6],9,-1069501632),f=h(f,p,s,l,r[y+11],14,643717713),l=h(l,f,p,s,r[y+0],20,-373897302),s=h(s,l,f,p,r[y+5],5,-701558691),p=h(p,s,l,f,r[y+10],9,38016083),f=h(f,p,s,l,r[y+15],14,-660478335),l=h(l,f,p,s,r[y+4],20,-405537848),s=h(s,l,f,p,r[y+9],5,568446438),p=h(p,s,l,f,r[y+14],9,-1019803690),f=h(f,p,s,l,r[y+3],14,-187363961),l=h(l,f,p,s,r[y+8],20,1163531501),s=h(s,l,f,p,r[y+13],5,-1444681467),p=h(p,s,l,f,r[y+2],9,-51403784),f=h(f,p,s,l,r[y+7],14,1735328473),s=m(s,l=h(l,f,p,s,r[y+12],20,-1926607734),f,p,r[y+5],4,-378558),p=m(p,s,l,f,r[y+8],11,-2022574463),f=m(f,p,s,l,r[y+11],16,1839030562),l=m(l,f,p,s,r[y+14],23,-35309556),s=m(s,l,f,p,r[y+1],4,-1530992060),p=m(p,s,l,f,r[y+4],11,1272893353),f=m(f,p,s,l,r[y+7],16,-155497632),l=m(l,f,p,s,r[y+10],23,-1094730640),s=m(s,l,f,p,r[y+13],4,681279174),p=m(p,s,l,f,r[y+0],11,-358537222),f=m(f,p,s,l,r[y+3],16,-722521979),l=m(l,f,p,s,r[y+6],23,76029189),s=m(s,l,f,p,r[y+9],4,-640364487),p=m(p,s,l,f,r[y+12],11,-421815835),f=m(f,p,s,l,r[y+15],16,530742520),s=g(s,l=m(l,f,p,s,r[y+2],23,-995338651),f,p,r[y+0],6,-198630844),p=g(p,s,l,f,r[y+7],10,1126891415),f=g(f,p,s,l,r[y+14],15,-1416354905),l=g(l,f,p,s,r[y+5],21,-57434055),s=g(s,l,f,p,r[y+12],6,1700485571),p=g(p,s,l,f,r[y+3],10,-1894986606),f=g(f,p,s,l,r[y+10],15,-1051523),l=g(l,f,p,s,r[y+1],21,-2054922799),s=g(s,l,f,p,r[y+8],6,1873313359),p=g(p,s,l,f,r[y+15],10,-30611744),f=g(f,p,s,l,r[y+6],15,-1560198380),l=g(l,f,p,s,r[y+13],21,1309151649),s=g(s,l,f,p,r[y+4],6,-145523070),p=g(p,s,l,f,r[y+11],10,-1120210379),f=g(f,p,s,l,r[y+2],15,718787259),l=g(l,f,p,s,r[y+9],21,-343485551),s=s+d>>>0,l=l+v>>>0,f=f+w>>>0,p=p+O>>>0}return n.endian([s,l,f,p])})._ff=function(e,t,r,n,o,a,i){var c=e+(t&r|~t&n)+(o>>>0)+i;return(c<<a|c>>>32-a)+t},c._gg=function(e,t,r,n,o,a,i){var c=e+(t&n|r&~n)+(o>>>0)+i;return(c<<a|c>>>32-a)+t},c._hh=function(e,t,r,n,o,a,i){var c=e+(t^r^n)+(o>>>0)+i;return(c<<a|c>>>32-a)+t},c._ii=function(e,t,r,n,o,a,i){var c=e+(r^(t|~n))+(o>>>0)+i;return(c<<a|c>>>32-a)+t},c._blocksize=16,c._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var r=n.wordsToBytes(c(e,t));return t&&t.asBytes?r:t&&t.asString?i.bytesToString(r):n.bytesToHex(r)}},1072:function(e,t){var r,n;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=n.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],r=0,n=0;r<e.length;r++,n+=8)t[n>>>5]|=e[r]<<24-n%32;return t},wordsToBytes:function(e){for(var t=[],r=0;r<32*e.length;r+=8)t.push(e[r>>>5]>>>24-r%32&255);return t},bytesToHex:function(e){for(var t=[],r=0;r<e.length;r++)t.push((e[r]>>>4).toString(16)),t.push((15&e[r]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var t=[],n=0;n<e.length;n+=3)for(var o=e[n]<<16|e[n+1]<<8|e[n+2],a=0;a<4;a++)8*n+6*a<=8*e.length?t.push(r.charAt(o>>>6*(3-a)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],n=0,o=0;n<e.length;o=++n%4)0!=o&&t.push((r.indexOf(e.charAt(n-1))&Math.pow(2,-2*o+8)-1)<<2*o|r.indexOf(e.charAt(n))>>>6-2*o);return t}},e.exports=n},1073:function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},1370:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return C}));r(418);var n,o=r(128),a=(r(420),r(20)),i=(r(1068),r(1069)),c=(r(937),r(938)),u=r(0),s=r.n(u),l=r(58),f=r(1071),p=r.n(f),y=r(894),b=r.n(y),h=r(18),m=r(30),g=r(3);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?_(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=c.a.Item,I={labelCol:{span:6},wrapperCol:{span:18}},C=c.a.create()(n=function(t){function r(){var t,n;w(this,r);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return P(_(n=j(this,(t=S(r)).call.apply(t,[this].concat(a)))),"state",{showError:!1}),P(_(n),"handleSubmit",(function(t){t.preventDefault();var r=n.props,o=r.form,a=r.gotoWallet;o.validateFields((function(t,r){if(!t){console.log("Received values of form: ",r);var o=p()(r.password),i=window.localStorage.getItem(m.a.SEED),c="";try{c=Object(g.decrypt)(o,e.from(i,"hex")).toString(),window.sessionStorage.setItem(m.a.SEED,c),a&&a()}catch(e){return n.setState({showError:!0})}}}))})),n}var n,u,f;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(r,t),n=r,(u=[{key:"render",value:function(){var e=this.state.showError,t=this.props.form.getFieldDecorator;return s.a.createElement(c.a,v({onSubmit:this.handleSubmit},I),s.a.createElement("h3",{className:b.a.title},Object(h.a)("signin")),s.a.createElement(T,{label:Object(h.a)("password")},t("password",{rules:[{required:!0}]})(s.a.createElement(i.a.Password,{style:{width:350},placeholder:Object(h.a)("password_placeholder")}))),s.a.createElement("div",{className:b.a.form_error_tips},e&&s.a.createElement(l.Link,{to:"/user/signin",style:{color:"#D0021B"}},Object(h.a)("reset_password_tips")," ",s.a.createElement(a.a,{type:"arrow-right"}))),s.a.createElement("div",{className:"btn_wrap"},s.a.createElement(o.a,{className:"btn",type:"primary",htmlType:"submit"},Object(h.a)("enter_wallet"))))}}])&&O(n.prototype,u),f&&O(n,f),r}(u.Component))||n}).call(this,r(17).Buffer)},929:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return K}));var n,o=r(0),a=r.n(o),i=r(894),c=r.n(i),u=r(18),s=r(30),l=r(1370),f=(r(418),r(128)),p=(r(1068),r(1069)),y=(r(937),r(938)),b=r(272),h=r(1071),m=r.n(h),g=r(3);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function j(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?_(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var I=y.a.Item,C={labelCol:{span:6},wrapperCol:{span:18}},B=s.a.SEED,x=s.a.PRIVACY,D=window.localStorage,W=window.sessionStorage,k=y.a.create()(n=Object(b.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.user)}))(n=function(e){function t(){var e,r;w(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return T(_(r=j(this,(e=S(t)).call.apply(e,[this].concat(o)))),"handleSubmit",(function(e){e.preventDefault();var t=r.props,n=t.form,o=t.gotoWallet;n.validateFields((function(e,t){if(!e){console.log("Received values of form: ",t);var r=D.getItem(B),n=m()(t.password),a=Object(g.encrypt)(n,r).toString("hex");D.setItem(x,"2"),D.setItem(B,a),W.setItem(B,r),o&&o()}}))})),T(_(r),"enterWallet",(function(){var e=r.props.gotoWallet,t=D.getItem(B);D.setItem(x,"1"),W.setItem(B,t),e&&e()})),r}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return a.a.createElement(y.a,v({onSubmit:this.handleSubmit},C),a.a.createElement("h3",{className:c.a.title},Object(u.a)("set_password_note")),a.a.createElement(I,{label:Object(u.a)("password")},e("password",{rules:[{required:!0}]})(a.a.createElement(p.a.Password,{style:{width:350},placeholder:Object(u.a)("password_placeholder")}))),a.a.createElement("div",{className:"btn_wrap"},a.a.createElement(f.a,{className:"btn",type:"primary",onClick:this.enterWallet},Object(u.a)("without_password")),a.a.createElement(f.a,{className:"btn",type:"primary",htmlType:"submit"},Object(u.a)("enter_wallet"))))}}])&&O(r.prototype,n),o&&O(r,o),t}(o.Component))||n)||n,A=r(56),N=r.n(A);function R(e){return(R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e,t){return!t||"object"!==R(t)&&"function"!=typeof t?U(e):t}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var H=window.location,J=N.a.parse(H.search.slice(1)),L=window.localStorage,V=window.sessionStorage,Y=s.a.PRIVACY,Z=s.a.UID,G=s.a.SEED,K=function(e){function t(e){var r,n,o,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=q(this,M(t).call(this,e)),n=U(r),a=function(){r.props.history.push({pathname:"/money/home/0",query:J}),H.reload()},(o="gotoWallet")in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a;var i=L.getItem(Z),c=L.getItem(G);return i&&c?(V.getItem(G)&&i||V.setItem(G,c),q(r,r.gotoWallet())):q(r,e.history.replace("/user/signin"))}var r,n,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=L.getItem(Y);return a.a.createElement("div",{className:c.a.container},a.a.createElement("div",{className:"logo"},a.a.createElement("i",{className:"iconfont"},"")),e?a.a.createElement(l.a,{gotoWallet:this.gotoWallet}):a.a.createElement(k,{gotoWallet:this.gotoWallet}))}}])&&F(r.prototype,n),o&&F(r,o),t}(o.Component)}}]);