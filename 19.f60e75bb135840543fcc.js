(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1087:function(t,e,r){"use strict";r.r(e);var n,o=r(1),a=r.n(o),i=r(57),c=r.n(i),u=r(15),l=r(1715),s=(r(563),r(138)),f=(r(1124),r(1125)),p=(r(1115),r(1121)),b=r(164),y=r(1146),h=r.n(y),m=r(1046),g=r.n(m),d=r(19),w=r(5);function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function O(){return(O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function S(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function P(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var T=p.a.Item,I={labelCol:{span:6},wrapperCol:{span:18}},C=u.b.SEED,B=u.b.PRIVACY,x=window.localStorage,W=window.sessionStorage,k=p.a.create()(n=Object(b.connect)((function(t){return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),n.forEach((function(e){P(t,e,r[e])}))}return t}({},t.user)}))(n=function(t){function e(){var t,r,n,o;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=this,o=(t=j(e)).call.apply(t,[this].concat(i)),r=!o||"object"!==v(o)&&"function"!=typeof o?_(n):o,P(_(r),"handleSubmit",(function(t){t.preventDefault();var e=r.props,n=e.form,o=e.gotoWallet;n.validateFields((function(t,e){if(!t){console.log("Received values of form: ",e);var r=x.getItem(C),n=h()(e.password),a=Object(w.encrypt)(n,r).toString("hex");x.setItem(B,"2"),x.setItem(C,a),W.setItem(C,r),o&&o()}}))})),P(_(r),"enterWallet",(function(){var t=r.props.gotoWallet,e=x.getItem(C);x.setItem(B,"1"),W.setItem(C,e),t&&t()})),r}var r,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(e,t),r=e,(n=[{key:"render",value:function(){var t=this.props.form.getFieldDecorator;return a.a.createElement(p.a,O({onSubmit:this.handleSubmit},I),a.a.createElement("h3",{className:g.a.title},Object(d.a)("set_password_note")),a.a.createElement(T,{label:Object(d.a)("password")},t("password",{rules:[{required:!0}]})(a.a.createElement(f.a.Password,{style:{width:350},placeholder:Object(d.a)("password_placeholder")}))),a.a.createElement("div",{className:"btn_wrap"},a.a.createElement(s.a,{className:"btn",type:"primary",onClick:this.enterWallet},Object(d.a)("without_password")),a.a.createElement(s.a,{className:"btn",type:"primary",htmlType:"submit"},Object(d.a)("enter_wallet"))))}}])&&S(r.prototype,n),o&&S(r,o),e}(o.Component))||n)||n;function A(t){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function N(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function D(t,e){return!e||"object"!==A(e)&&"function"!=typeof e?F(t):e}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function F(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function q(t,e){return(q=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}r.d(e,"default",(function(){return Y}));var M=window.location,U=c.a.parse(M.search.slice(1)),z=window.localStorage,H=window.sessionStorage,J=u.b.PRIVACY,L=u.b.UID,V=u.b.SEED,Y=function(t){function e(t){var r,n,o,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=D(this,R(e).call(this,t)),n=F(r),a=function(){r.props.history.push({pathname:"/money/home/0",query:U}),M.reload()},(o="gotoWallet")in n?Object.defineProperty(n,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[o]=a;var i=z.getItem(L),c=z.getItem(V);return i&&c?H.getItem(V)&&i?D(r,r.gotoWallet()):(H.setItem(V,c),D(r,r.gotoWallet())):D(r,t.history.replace("/user/entry"))}var r,n,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&q(t,e)}(e,t),r=e,(n=[{key:"render",value:function(){var t=z.getItem(J);return a.a.createElement("div",{className:g.a.container},a.a.createElement("div",{className:"logo"},a.a.createElement("i",{className:"iconfont"},"")),t?a.a.createElement(l.a,{gotoWallet:this.gotoWallet}):a.a.createElement(k,{gotoWallet:this.gotoWallet}))}}])&&N(r.prototype,n),o&&N(r,o),e}(o.Component)},1134:function(t,e){var r={utf8:{stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}};t.exports=r},1146:function(t,e,r){var n,o,a,i,c;n=r(1148),o=r(1134).utf8,a=r(1149),i=r(1134).bin,(c=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?i.stringToBytes(t):o.stringToBytes(t):a(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var r=n.bytesToWords(t),u=8*t.length,l=1732584193,s=-271733879,f=-1732584194,p=271733878,b=0;b<r.length;b++)r[b]=16711935&(r[b]<<8|r[b]>>>24)|4278255360&(r[b]<<24|r[b]>>>8);r[u>>>5]|=128<<u%32,r[14+(u+64>>>9<<4)]=u;var y=c._ff,h=c._gg,m=c._hh,g=c._ii;for(b=0;b<r.length;b+=16){var d=l,w=s,v=f,O=p;l=y(l,s,f,p,r[b+0],7,-680876936),p=y(p,l,s,f,r[b+1],12,-389564586),f=y(f,p,l,s,r[b+2],17,606105819),s=y(s,f,p,l,r[b+3],22,-1044525330),l=y(l,s,f,p,r[b+4],7,-176418897),p=y(p,l,s,f,r[b+5],12,1200080426),f=y(f,p,l,s,r[b+6],17,-1473231341),s=y(s,f,p,l,r[b+7],22,-45705983),l=y(l,s,f,p,r[b+8],7,1770035416),p=y(p,l,s,f,r[b+9],12,-1958414417),f=y(f,p,l,s,r[b+10],17,-42063),s=y(s,f,p,l,r[b+11],22,-1990404162),l=y(l,s,f,p,r[b+12],7,1804603682),p=y(p,l,s,f,r[b+13],12,-40341101),f=y(f,p,l,s,r[b+14],17,-1502002290),l=h(l,s=y(s,f,p,l,r[b+15],22,1236535329),f,p,r[b+1],5,-165796510),p=h(p,l,s,f,r[b+6],9,-1069501632),f=h(f,p,l,s,r[b+11],14,643717713),s=h(s,f,p,l,r[b+0],20,-373897302),l=h(l,s,f,p,r[b+5],5,-701558691),p=h(p,l,s,f,r[b+10],9,38016083),f=h(f,p,l,s,r[b+15],14,-660478335),s=h(s,f,p,l,r[b+4],20,-405537848),l=h(l,s,f,p,r[b+9],5,568446438),p=h(p,l,s,f,r[b+14],9,-1019803690),f=h(f,p,l,s,r[b+3],14,-187363961),s=h(s,f,p,l,r[b+8],20,1163531501),l=h(l,s,f,p,r[b+13],5,-1444681467),p=h(p,l,s,f,r[b+2],9,-51403784),f=h(f,p,l,s,r[b+7],14,1735328473),l=m(l,s=h(s,f,p,l,r[b+12],20,-1926607734),f,p,r[b+5],4,-378558),p=m(p,l,s,f,r[b+8],11,-2022574463),f=m(f,p,l,s,r[b+11],16,1839030562),s=m(s,f,p,l,r[b+14],23,-35309556),l=m(l,s,f,p,r[b+1],4,-1530992060),p=m(p,l,s,f,r[b+4],11,1272893353),f=m(f,p,l,s,r[b+7],16,-155497632),s=m(s,f,p,l,r[b+10],23,-1094730640),l=m(l,s,f,p,r[b+13],4,681279174),p=m(p,l,s,f,r[b+0],11,-358537222),f=m(f,p,l,s,r[b+3],16,-722521979),s=m(s,f,p,l,r[b+6],23,76029189),l=m(l,s,f,p,r[b+9],4,-640364487),p=m(p,l,s,f,r[b+12],11,-421815835),f=m(f,p,l,s,r[b+15],16,530742520),l=g(l,s=m(s,f,p,l,r[b+2],23,-995338651),f,p,r[b+0],6,-198630844),p=g(p,l,s,f,r[b+7],10,1126891415),f=g(f,p,l,s,r[b+14],15,-1416354905),s=g(s,f,p,l,r[b+5],21,-57434055),l=g(l,s,f,p,r[b+12],6,1700485571),p=g(p,l,s,f,r[b+3],10,-1894986606),f=g(f,p,l,s,r[b+10],15,-1051523),s=g(s,f,p,l,r[b+1],21,-2054922799),l=g(l,s,f,p,r[b+8],6,1873313359),p=g(p,l,s,f,r[b+15],10,-30611744),f=g(f,p,l,s,r[b+6],15,-1560198380),s=g(s,f,p,l,r[b+13],21,1309151649),l=g(l,s,f,p,r[b+4],6,-145523070),p=g(p,l,s,f,r[b+11],10,-1120210379),f=g(f,p,l,s,r[b+2],15,718787259),s=g(s,f,p,l,r[b+9],21,-343485551),l=l+d>>>0,s=s+w>>>0,f=f+v>>>0,p=p+O>>>0}return n.endian([l,s,f,p])})._ff=function(t,e,r,n,o,a,i){var c=t+(e&r|~e&n)+(o>>>0)+i;return(c<<a|c>>>32-a)+e},c._gg=function(t,e,r,n,o,a,i){var c=t+(e&n|r&~n)+(o>>>0)+i;return(c<<a|c>>>32-a)+e},c._hh=function(t,e,r,n,o,a,i){var c=t+(e^r^n)+(o>>>0)+i;return(c<<a|c>>>32-a)+e},c._ii=function(t,e,r,n,o,a,i){var c=t+(r^(e|~n))+(o>>>0)+i;return(c<<a|c>>>32-a)+e},c._blocksize=16,c._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var r=n.wordsToBytes(c(t,e));return e&&e.asBytes?r:e&&e.asString?i.bytesToString(r):n.bytesToHex(r)}},1148:function(t,e){var r,n;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&n.rotl(t,8)|4278255360&n.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=n.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var e=[],n=0;n<t.length;n+=3)for(var o=t[n]<<16|t[n+1]<<8|t[n+2],a=0;a<4;a++)8*n+6*a<=8*t.length?e.push(r.charAt(o>>>6*(3-a)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],n=0,o=0;n<t.length;o=++n%4)0!=o&&e.push((r.indexOf(t.charAt(n-1))&Math.pow(2,-2*o+8)-1)<<2*o|r.indexOf(t.charAt(n))>>>6-2*o);return e}},t.exports=n},1149:function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(r(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}(t)||!!t._isBuffer)}},1715:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return T}));r(563);var n,o=r(138),a=(r(567),r(23)),i=(r(1124),r(1125)),c=(r(1115),r(1121)),u=r(1),l=r.n(u),s=r(74),f=r(1146),p=r.n(f),b=r(1046),y=r.n(b),h=r(19),m=r(15),g=r(5);function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function S(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function j(t,e){return(j=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var E=c.a.Item,P={labelCol:{span:6},wrapperCol:{span:18}},T=c.a.create()(n=function(e){function r(){var e,n,o,a;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r);for(var i=arguments.length,c=new Array(i),u=0;u<i;u++)c[u]=arguments[u];return o=this,a=(e=O(r)).call.apply(e,[this].concat(c)),n=!a||"object"!==d(a)&&"function"!=typeof a?S(o):a,_(S(n),"state",{showError:!1}),_(S(n),"handleSubmit",(function(e){e.preventDefault();var r=n.props,o=r.form,a=r.gotoWallet;o.validateFields((function(e,r){if(!e){var o=p()(r.password),i=window.localStorage.getItem(m.b.SEED),c="";try{c=Object(g.decrypt)(o,t.from(i,"hex")).toString(),window.sessionStorage.setItem(m.b.SEED,c),a&&a()}catch(t){return n.setState({showError:!0})}}}))})),n}var n,u,f;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&j(t,e)}(r,e),n=r,(u=[{key:"render",value:function(){var t=this.state.showError,e=this.props.form.getFieldDecorator;return l.a.createElement(c.a,w({onSubmit:this.handleSubmit},P),l.a.createElement("h3",{className:y.a.title},Object(h.a)("signin")),l.a.createElement(E,{label:Object(h.a)("password")},e("password",{rules:[{required:!0}]})(l.a.createElement(i.a.Password,{style:{width:350},placeholder:Object(h.a)("password_placeholder")}))),l.a.createElement("div",{className:y.a.form_error_tips},t&&l.a.createElement(s.Link,{to:"/user/signin",style:{color:"#D0021B"}},Object(h.a)("reset_password_tips")," ",l.a.createElement(a.a,{type:"arrow-right"}))),l.a.createElement("div",{className:"btn_wrap"},l.a.createElement(o.a,{className:"btn",type:"primary",htmlType:"submit"},Object(h.a)("enter_wallet"))))}}])&&v(n.prototype,u),f&&v(n,f),r}(u.Component))||n}).call(this,r(20).Buffer)}}]);