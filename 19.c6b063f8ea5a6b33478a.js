(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1067:function(t,e){var n={utf8:{stringToBytes:function(t){return n.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(n.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],n=0;n<t.length;n++)e.push(255&t.charCodeAt(n));return e},bytesToString:function(t){for(var e=[],n=0;n<t.length;n++)e.push(String.fromCharCode(t[n]));return e.join("")}}};t.exports=n},1071:function(t,e,n){var r,o,i,a,c;r=n(1072),o=n(1067).utf8,i=n(1073),a=n(1067).bin,(c=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?a.stringToBytes(t):o.stringToBytes(t):i(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var n=r.bytesToWords(t),u=8*t.length,s=1732584193,f=-271733879,l=-1732584194,p=271733878,h=0;h<n.length;h++)n[h]=16711935&(n[h]<<8|n[h]>>>24)|4278255360&(n[h]<<24|n[h]>>>8);n[u>>>5]|=128<<u%32,n[14+(u+64>>>9<<4)]=u;var y=c._ff,b=c._gg,g=c._hh,d=c._ii;for(h=0;h<n.length;h+=16){var v=s,m=f,w=l,O=p;s=y(s,f,l,p,n[h+0],7,-680876936),p=y(p,s,f,l,n[h+1],12,-389564586),l=y(l,p,s,f,n[h+2],17,606105819),f=y(f,l,p,s,n[h+3],22,-1044525330),s=y(s,f,l,p,n[h+4],7,-176418897),p=y(p,s,f,l,n[h+5],12,1200080426),l=y(l,p,s,f,n[h+6],17,-1473231341),f=y(f,l,p,s,n[h+7],22,-45705983),s=y(s,f,l,p,n[h+8],7,1770035416),p=y(p,s,f,l,n[h+9],12,-1958414417),l=y(l,p,s,f,n[h+10],17,-42063),f=y(f,l,p,s,n[h+11],22,-1990404162),s=y(s,f,l,p,n[h+12],7,1804603682),p=y(p,s,f,l,n[h+13],12,-40341101),l=y(l,p,s,f,n[h+14],17,-1502002290),s=b(s,f=y(f,l,p,s,n[h+15],22,1236535329),l,p,n[h+1],5,-165796510),p=b(p,s,f,l,n[h+6],9,-1069501632),l=b(l,p,s,f,n[h+11],14,643717713),f=b(f,l,p,s,n[h+0],20,-373897302),s=b(s,f,l,p,n[h+5],5,-701558691),p=b(p,s,f,l,n[h+10],9,38016083),l=b(l,p,s,f,n[h+15],14,-660478335),f=b(f,l,p,s,n[h+4],20,-405537848),s=b(s,f,l,p,n[h+9],5,568446438),p=b(p,s,f,l,n[h+14],9,-1019803690),l=b(l,p,s,f,n[h+3],14,-187363961),f=b(f,l,p,s,n[h+8],20,1163531501),s=b(s,f,l,p,n[h+13],5,-1444681467),p=b(p,s,f,l,n[h+2],9,-51403784),l=b(l,p,s,f,n[h+7],14,1735328473),s=g(s,f=b(f,l,p,s,n[h+12],20,-1926607734),l,p,n[h+5],4,-378558),p=g(p,s,f,l,n[h+8],11,-2022574463),l=g(l,p,s,f,n[h+11],16,1839030562),f=g(f,l,p,s,n[h+14],23,-35309556),s=g(s,f,l,p,n[h+1],4,-1530992060),p=g(p,s,f,l,n[h+4],11,1272893353),l=g(l,p,s,f,n[h+7],16,-155497632),f=g(f,l,p,s,n[h+10],23,-1094730640),s=g(s,f,l,p,n[h+13],4,681279174),p=g(p,s,f,l,n[h+0],11,-358537222),l=g(l,p,s,f,n[h+3],16,-722521979),f=g(f,l,p,s,n[h+6],23,76029189),s=g(s,f,l,p,n[h+9],4,-640364487),p=g(p,s,f,l,n[h+12],11,-421815835),l=g(l,p,s,f,n[h+15],16,530742520),s=d(s,f=g(f,l,p,s,n[h+2],23,-995338651),l,p,n[h+0],6,-198630844),p=d(p,s,f,l,n[h+7],10,1126891415),l=d(l,p,s,f,n[h+14],15,-1416354905),f=d(f,l,p,s,n[h+5],21,-57434055),s=d(s,f,l,p,n[h+12],6,1700485571),p=d(p,s,f,l,n[h+3],10,-1894986606),l=d(l,p,s,f,n[h+10],15,-1051523),f=d(f,l,p,s,n[h+1],21,-2054922799),s=d(s,f,l,p,n[h+8],6,1873313359),p=d(p,s,f,l,n[h+15],10,-30611744),l=d(l,p,s,f,n[h+6],15,-1560198380),f=d(f,l,p,s,n[h+13],21,1309151649),s=d(s,f,l,p,n[h+4],6,-145523070),p=d(p,s,f,l,n[h+11],10,-1120210379),l=d(l,p,s,f,n[h+2],15,718787259),f=d(f,l,p,s,n[h+9],21,-343485551),s=s+v>>>0,f=f+m>>>0,l=l+w>>>0,p=p+O>>>0}return r.endian([s,f,l,p])})._ff=function(t,e,n,r,o,i,a){var c=t+(e&n|~e&r)+(o>>>0)+a;return(c<<i|c>>>32-i)+e},c._gg=function(t,e,n,r,o,i,a){var c=t+(e&r|n&~r)+(o>>>0)+a;return(c<<i|c>>>32-i)+e},c._hh=function(t,e,n,r,o,i,a){var c=t+(e^n^r)+(o>>>0)+a;return(c<<i|c>>>32-i)+e},c._ii=function(t,e,n,r,o,i,a){var c=t+(n^(e|~r))+(o>>>0)+a;return(c<<i|c>>>32-i)+e},c._blocksize=16,c._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var n=r.wordsToBytes(c(t,e));return e&&e.asBytes?n:e&&e.asString?a.bytesToString(n):r.bytesToHex(n)}},1072:function(t,e){var n,r;n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],n=0,r=0;n<t.length;n++,r+=8)e[r>>>5]|=t[n]<<24-r%32;return e},wordsToBytes:function(t){for(var e=[],n=0;n<32*t.length;n+=8)e.push(t[n>>>5]>>>24-n%32&255);return e},bytesToHex:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var e=[],r=0;r<t.length;r+=3)for(var o=t[r]<<16|t[r+1]<<8|t[r+2],i=0;i<4;i++)8*r+6*i<=8*t.length?e.push(n.charAt(o>>>6*(3-i)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],r=0,o=0;r<t.length;o=++r%4)0!=o&&e.push((n.indexOf(t.charAt(r-1))&Math.pow(2,-2*o+8)-1)<<2*o|n.indexOf(t.charAt(r))>>>6-2*o);return e}},t.exports=r},1073:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},923:function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"default",(function(){return T}));n(417);var r=n(273),o=n(0),i=n.n(o),a=n(924),c=n.n(a),u=(n(425),n(30)),s=n(1083),f=n.n(s),l=n(3),p=n(105),h=n(127),y=n(119),b=(n(1071),n(18));function g(t){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}function v(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){d(i,r,o,a,c,"next",t)}function c(t){d(i,r,o,a,c,"throw",t)}a(void 0)}))}}function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function O(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function S(t,e){return!e||"object"!==g(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function x(t,e){return(x=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var T=function(e){function n(){var t;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var e=(t=S(this,j(n).call(this))).refresh();return t.state=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{loading:!1}),t}var o,a,s;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&x(t,e)}(n,e),o=n,(a=[{key:"componentDidMount",value:function(){var e=this;this.polling=!0,setTimeout(v(regeneratorRuntime.mark((function n(){var r,o,i,a,c,s,f,h,b;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,Object(y.c)(5e3);case 3:return r=e.state,o=r.pb,i=r.pk,n.next=6,p.a.polling(o);case 6:if(a=n.sent,console.log("res",a),!a||!a.key){n.next=23;break}return e.setState({loading:!0}),c=a.key,s=a.data,f=a.token,n.prev=11,h=Object(l.computeSecret)(i.toHex(),c),b=Object(l.decrypt)(h,t.from(s,"hex")).toString(),window.localStorage.setItem(u.a.SEED,b),window.localStorage.setItem(u.a.UID,f),n.abrupt("return",window.location.href=u.h.redirect||"".concat(window.location.origin).concat(window.location.pathname));case 20:n.prev=20,n.t0=n.catch(11),console.log(n.t0);case 23:n.next=0;break;case 25:case"end":return n.stop()}}),n,null,[[11,20]])}))))}},{key:"componentWillUnmount",value:function(){this.polling=!1,window.clearInterval(this.lv)}},{key:"refresh",value:function(){var t=new l.PrivateKey,e=t.toPublicKey(),n={pk:t,pb:e.toString()};return this.setState(n),n}},{key:"render",value:function(){if(this.state.tempSeed)return this.renderFromSeed();var t=this.state.pb,e="https://voltwallet.io/login?key=login&id=".concat(t);return i.a.createElement("div",{className:c.a.container},i.a.createElement(r.a,{spinning:this.state.loading},i.a.createElement("div",{className:c.a.qrcode_wrap},i.a.createElement("div",{className:c.a.logo},i.a.createElement(h.a,{type:"iconlogo-volt"})),i.a.createElement("div",{className:c.a.qrcode},i.a.createElement(f.a,{value:e,style:{width:"160px",height:"160px"}}))),i.a.createElement("div",{className:c.a.tips},Object(b.a)("scanApp")),i.a.createElement("div",{className:c.a.download},i.a.createElement("a",{href:"https://github.com/bitmeshexchange/laxo.io/releases/download/1.1.0/LaxoWallet-1.1.1.dmg",target:"_blank",rel:"noopener noreferrer"},Object(b.a)("downloadApp")))))}}])&&O(o.prototype,a),s&&O(o,s),n}(o.Component)}.call(this,n(17).Buffer)}}]);