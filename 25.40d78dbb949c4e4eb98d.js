(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1175:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return z}));r(1775);var n,o=r(1779),i=r(0),a=r.n(i),c=r(1106),u=r.n(c),s=r(15),f=r(11),l=(r(604),r(140)),h=(r(1192),r(1196)),p=(r(605),r(172)),v=(r(1193),r(1195)),d=r(170);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function g(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function b(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){g(i,n,o,a,c,"next",e)}function c(e){g(i,n,o,a,c,"throw",e)}a(void 0)}))}}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=k(e);if(t){var o=k(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return S(this,r)}}function S(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=v.a.Item,R={labelCol:{span:3},wrapperCol:{span:16}},I=(v.a.create()(n=Object(d.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.user)}))(n=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(i,e);var t,r,n,o=j(i);function i(){var e;w(this,i);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return C(P(e=o.call.apply(o,[this].concat(r))),"handleSubmit",(function(t){t.preventDefault();var r=e.props,n=r.form,o=r.recoverCallback;n.validateFields(function(){var e=b(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t||(console.log("Received values of form: ",r),p.a.success(Object(s.a)("recover_account_title")),o&&o(r.seed));case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}())})),e}return t=i,(r=[{key:"render",value:function(){var e=this.props.form.getFieldDecorator;return a.a.createElement(v.a,m({onSubmit:this.handleSubmit},R),a.a.createElement(x,{label:Object(s.a)("mnemonic")},e("seed",{rules:[{required:!0}]})(a.a.createElement(h.a.TextArea,{rows:3,style:{width:650},placeholder:Object(s.a)("mnemonic_placeholder")}))),a.a.createElement("div",{className:"btn_wrap"},a.a.createElement(l.a,{className:"btn",type:"primary",htmlType:"submit"},Object(s.a)("recover"))))}}])&&_(t.prototype,r),n&&_(t,n),i}(i.Component))||n),r(1776)),A=r(1777);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=H(e);if(t){var o=H(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return B(this,r)}}function B(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?$(e):t}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var N=window.localStorage,q=window.sessionStorage,F=o.a.TabPane,U=f.b.TOKEN,K=f.b.SEED,V=f.b.PRIVACY,z=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&D(e,t)}(c,e);var t,r,n,i=L(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),W($(t=i.call(this,e)),"changeTab",(function(e){})),W($(t),"recoverCallback",(function(e){N.setItem(K,e),N.removeItem(V),q.removeItem(K),q.removeItem(U),setTimeout((function(){t.props.history.push({pathname:"/user/login"})}),2e3)})),W($(t),"backSignIn",(function(){t.props.history.push({pathname:"/user/signin"})})),q.getItem(U)||t.backSignIn(),t}return t=c,(r=[{key:"render",value:function(){return a.a.createElement("div",{className:u.a.container},a.a.createElement("div",{className:"logo"},a.a.createElement("i",{className:"iconfont"},"")),a.a.createElement("h3",{className:u.a.title},Object(s.a)("recover_old_wallet")),a.a.createElement(o.a,{defaultActiveKey:"1",onChange:this.changeTab},a.a.createElement(F,{tab:Object(s.a)("recover_with_backup"),key:"1"},a.a.createElement(A.a,{recoverCallback:this.recoverCallback})),a.a.createElement(F,{tab:Object(s.a)("backup_lost"),key:"2"},a.a.createElement(I.a,{recoverCallback:this.recoverCallback,backSignIn:this.backSignIn}))))}}])&&T(t.prototype,r),n&&T(t,n),c}(i.Component)},1322:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n,o,i,a,c=c||function(e,t){var r={},n=r.lib={},o=function(){},i=n.Base={extend:function(e){o.prototype=this;var t=new o;return e&&t.mixIn(e),t.hasOwnProperty("init")||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},a=n.WordArray=i.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||u).stringify(this)},concat:function(e){var t=this.words,r=e.words,n=this.sigBytes;if(e=e.sigBytes,this.clamp(),n%4)for(var o=0;o<e;o++)t[n+o>>>2]|=(r[o>>>2]>>>24-o%4*8&255)<<24-(n+o)%4*8;else if(65535<r.length)for(o=0;o<e;o+=4)t[n+o>>>2]=r[o>>>2];else t.push.apply(t,r);return this.sigBytes+=e,this},clamp:function(){var t=this.words,r=this.sigBytes;t[r>>>2]&=4294967295<<32-r%4*8,t.length=e.ceil(r/4)},clone:function(){var e=i.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var r=[],n=0;n<t;n+=4)r.push(4294967296*e.random()|0);return new a.init(r,t)}}),c=r.enc={},u=c.Hex={stringify:function(e){var t=e.words;e=e.sigBytes;for(var r=[],n=0;n<e;n++){var o=t[n>>>2]>>>24-n%4*8&255;r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n+=2)r[n>>>3]|=parseInt(e.substr(n,2),16)<<24-n%8*4;return new a.init(r,t/2)}},s=c.Latin1={stringify:function(e){var t=e.words;e=e.sigBytes;for(var r=[],n=0;n<e;n++)r.push(String.fromCharCode(t[n>>>2]>>>24-n%4*8&255));return r.join("")},parse:function(e){for(var t=e.length,r=[],n=0;n<t;n++)r[n>>>2]|=(255&e.charCodeAt(n))<<24-n%4*8;return new a.init(r,t)}},f=c.Utf8={stringify:function(e){try{return decodeURIComponent(escape(s.stringify(e)))}catch(e){throw Error("Malformed UTF-8 data")}},parse:function(e){return s.parse(unescape(encodeURIComponent(e)))}},l=n.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=f.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var r=this._data,n=r.words,o=r.sigBytes,i=this.blockSize,c=o/(4*i);if(t=(c=t?e.ceil(c):e.max((0|c)-this._minBufferSize,0))*i,o=e.min(4*t,o),t){for(var u=0;u<t;u+=i)this._doProcessBlock(n,u);u=n.splice(0,t),r.sigBytes-=o}return new a.init(u,o)},clone:function(){var e=i.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0});n.Hasher=l.extend({cfg:i.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,r){return new e.init(r).finalize(t)}},_createHmacHelper:function(e){return function(t,r){return new h.HMAC.init(e,r).finalize(t)}}});var h=r.algo={};return r}(Math);function u(e,t,r){return result=Array(),result.push(.299*e+.587*t+.114*r),result.push(128-.168736*e-.331264*t+.5*r),result.push(128+.5*e-.418688*t-.081312*r),result}function s(e,t,r){return result=Array(),result.push(e+1.402*(r-128)),result.push(e-.344136*(t-128)-.714136*(r-128)),result.push(e+1.772*(t-128)),result}function f(e,t,r){for(var n,o=0,i=0,a=1;a<20;a++)i+=e.charCodeAt(a);o+=41943e4*i,i=0;for(a=30;a<50;a++)i+=e.charCodeAt(a);o+=4194e3*i,i=0;for(a=70;a<90;a++)i+=e.charCodeAt(a);o+=41940*i,i=0;for(a=100;a<110;a++)i+=e.charCodeAt(a);o+=419*i;for(a=20;a<29;a++)o+=e.charCodeAt(a);for(a=90;a<99;a++)o+=e.charCodeAt(a);for(o%=t;n=o,-1!=r.indexOf(n);)o=(o+1)%t;return r.push(o),o}function l(e,t){return(t=void 0!==t&&t)?function(e){result=Array();for(var t=0;t<64;t++)result.push(Array());for(var r=0;r<3;r++)for(var n=0;n<8;n++)for(var o=0;o<8;o++){for(var i=0,a=0;a<8;a++)for(var c=0;c<8;c++){i+=(0==a?1/Math.sqrt(2):1)*(0==c?1/Math.sqrt(2):1)*e[8*a+c][r]*Math.cos((2*n+1)*a*Math.PI/16)*Math.cos((2*o+1)*c*Math.PI/16)}result[8*n+o].push(1/4*i)}return result}(e):function(e){result=Array();for(var t=0;t<64;t++)result.push(Array());for(var r=0;r<3;r++)for(var n=0;n<8;n++)for(var o=0;o<8;o++){for(var i=0==n?1/Math.sqrt(2):1,a=0==o?1/Math.sqrt(2):1,c=0,u=0;u<8;u++)for(var s=0;s<8;s++)c+=e[8*u+s][r]*Math.cos((2*u+1)*n*Math.PI/16)*Math.cos((2*s+1)*o*Math.PI/16);result[8*n+o].push(1/4*i*a*c)}return result}(e)}function h(e,t,r){for(var n=Math.floor(t/8),o=Math.floor(r/8),i=Array(),a=0;a<o;a++)for(var c=0;c<n;c++){for(var s=Array(),f=0;f<8;f++)for(var h=0;h<8;h++)s.push(u(e[4*((8*a+f)*t+8*c+h)],e[4*((8*a+f)*t+8*c+h)+1],e[4*((8*a+f)*t+8*c+h)+2]));i.push(l(s))}return i}function p(e,t,r,n){switch(n=void 0===n?0:parseInt(n)){case 1:return w(e,t,r,!0,11,15);case 2:return w(e,t,r,!0,9,20);case 3:return w(e,t,r,!0,5,30);case 4:return w(e,t,r,!0,5,35);case 5:return w(e,t,r,!0,5,50);case 0:default:return w(e,t,r)}}function v(e){for(var t=function(e){var t,r,n=[],o=0;e=encodeURI(e),t=e.length;for(;o<t;)r=e[o],o+=1,"%"!==r?n.push(r.charCodeAt(0)):(r=e[o]+e[o+1],n.push(parseInt(r,16)),o+=2);return n}(e),r=Array(),n=t.length,o=0;o<n;o++)for(var i=128;i>0;i=Math.floor(i/2))Math.floor(t[o]/i)?(r.push(!0),t[o]-=i):r.push(!1);return r}function d(e){return e%2==1?e-1:e}function y(e){return e%2==1?e:e+1}function m(e,t){var r=Math.floor(e/t);return r%2==1?r*t:(r+1)*t}function g(e,t){var r=Math.floor(e/t);return r%2==1?(r-1)*t:r*t}function b(e,t,r,n){var o=v(t);if((o.length+24)*n>e)return alert("TEXT TOO LONG!"),null;var i=function(e){for(var t=Array(),r=0;r<e;r++)t.push(!!Math.floor(2*Math.random()));return t}(e),a=o.length;r=String(c.SHA512(r));for(var u=Array(),s=e,l=0;l<a;l++)for(var h=0;h<n;h++)i[f(r,s,u)]=o[l],r=String(c.SHA512(r));for(h=0;h<24;h++)for(l=0;l<n;l++)i[f(r,s,u)]=!0,r=String(c.SHA512(r));return i}function w(e,t,r,n,o,i){n=void 0!==n&&n,r=void 0===r?"":r,o=void 0===o?5:o,i=void 0===i?30:i;var a=e,c=a.getContext("2d"),u=c.getImageData(0,0,a.width,a.height),f=n?h(u.data,a.width,a.height):null,p=n?3*f.length:3*Math.floor(u.data.length/4),v=b(p,t,r,n?o:1);return null==v?null:(n?function(e,t,r,n,o,i){t.length;for(var a=o.length/3,c=0;c<a;c++)t[c][0][0]=o[3*c]?m(t[c][0][0],i):g(t[c][0][0],i),t[c][0][1]=o[3*c+1]?m(t[c][0][1],i):g(t[c][0][1],i),t[c][0][2]=o[3*c+2]?m(t[c][0][2],i):g(t[c][0][2],i);for(var u,f=Math.floor(r/8),h=Math.floor(n/8),p=(Array(),0),v=0;v<h;v++)for(var d=0;d<f;d++){var y=l(t[p],!0);for(c=0;c<8;c++)for(var b=0;b<8;b++)for(var w=s(y[8*c+b][0],y[8*c+b][1],y[8*c+b][2]),_=0;_<3;_++)e[4*((8*v+c)*r+8*d+b)+_]=(u=w[_],(u=(u=Math.round(u))>255?255:u)<0?0:u);p++}for(c=0;c<e.length;c+=4)e[c+3]=255}(u.data,f,a.width,a.height,v,i):function(e,t){for(var r=0,n=0;n<e.data.length;n+=4)e.data[n]=t[r]?y(e.data[n]):d(e.data[n]),e.data[n+1]=t[r+1]?y(e.data[n+1]):d(e.data[n+1]),e.data[n+2]=t[r+2]?y(e.data[n+2]):d(e.data[n+2]),e.data[n+3]=255,r+=3}(u,v),c.putImageData(u,0,0),1)}o=(n=c).lib,i=o.Base,a=o.WordArray,(n=n.x64={}).Word=i.extend({init:function(e,t){this.high=e,this.low=t}}),n.WordArray=i.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:8*e.length},toX32:function(){for(var e=this.words,t=e.length,r=[],n=0;n<t;n++){var o=e[n];r.push(o.high),r.push(o.low)}return a.create(r,this.sigBytes)},clone:function(){for(var e=i.clone.call(this),t=e.words=this.words.slice(0),r=t.length,n=0;n<r;n++)t[n]=t[n].clone();return e}}),function(){function e(){return n.create.apply(n,arguments)}for(var t=c,r=t.lib.Hasher,n=(i=t.x64).Word,o=i.WordArray,i=t.algo,a=[e(1116352408,3609767458),e(1899447441,602891725),e(3049323471,3964484399),e(3921009573,2173295548),e(961987163,4081628472),e(1508970993,3053834265),e(2453635748,2937671579),e(2870763221,3664609560),e(3624381080,2734883394),e(310598401,1164996542),e(607225278,1323610764),e(1426881987,3590304994),e(1925078388,4068182383),e(2162078206,991336113),e(2614888103,633803317),e(3248222580,3479774868),e(3835390401,2666613458),e(4022224774,944711139),e(264347078,2341262773),e(604807628,2007800933),e(770255983,1495990901),e(1249150122,1856431235),e(1555081692,3175218132),e(1996064986,2198950837),e(2554220882,3999719339),e(2821834349,766784016),e(2952996808,2566594879),e(3210313671,3203337956),e(3336571891,1034457026),e(3584528711,2466948901),e(113926993,3758326383),e(338241895,168717936),e(666307205,1188179964),e(773529912,1546045734),e(1294757372,1522805485),e(1396182291,2643833823),e(1695183700,2343527390),e(1986661051,1014477480),e(2177026350,1206759142),e(2456956037,344077627),e(2730485921,1290863460),e(2820302411,3158454273),e(3259730800,3505952657),e(3345764771,106217008),e(3516065817,3606008344),e(3600352804,1432725776),e(4094571909,1467031594),e(275423344,851169720),e(430227734,3100823752),e(506948616,1363258195),e(659060556,3750685593),e(883997877,3785050280),e(958139571,3318307427),e(1322822218,3812723403),e(1537002063,2003034995),e(1747873779,3602036899),e(1955562222,1575990012),e(2024104815,1125592928),e(2227730452,2716904306),e(2361852424,442776044),e(2428436474,593698344),e(2756734187,3733110249),e(3204031479,2999351573),e(3329325298,3815920427),e(3391569614,3928383900),e(3515267271,566280711),e(3940187606,3454069534),e(4118630271,4000239992),e(116418474,1914138554),e(174292421,2731055270),e(289380356,3203993006),e(460393269,320620315),e(685471733,587496836),e(852142971,1086792851),e(1017036298,365543100),e(1126000580,2618297676),e(1288033470,3409855158),e(1501505948,4234509866),e(1607167915,987167468),e(1816402316,1246189591)],u=[],s=0;80>s;s++)u[s]=e();i=i.SHA512=r.extend({_doReset:function(){this._hash=new o.init([new n.init(1779033703,4089235720),new n.init(3144134277,2227873595),new n.init(1013904242,4271175723),new n.init(2773480762,1595750129),new n.init(1359893119,2917565137),new n.init(2600822924,725511199),new n.init(528734635,4215389547),new n.init(1541459225,327033209)])},_doProcessBlock:function(e,t){for(var r=(l=this._hash.words)[0],n=l[1],o=l[2],i=l[3],c=l[4],s=l[5],f=l[6],l=l[7],h=r.high,p=r.low,v=n.high,d=n.low,y=o.high,m=o.low,g=i.high,b=i.low,w=c.high,_=c.low,O=s.high,j=s.low,S=f.high,P=f.low,k=l.high,E=l.low,C=h,x=p,R=v,I=d,A=y,M=m,T=g,D=b,L=w,B=_,$=O,H=j,W=S,N=P,q=k,F=E,U=0;80>U;U++){var K=u[U];if(16>U)var V=K.high=0|e[t+2*U],z=K.low=0|e[t+2*U+1];else{V=((z=(V=u[U-15]).high)>>>1|(X=V.low)<<31)^(z>>>8|X<<24)^z>>>7;var X=(X>>>1|z<<31)^(X>>>8|z<<24)^(X>>>7|z<<25),Q=((z=(Q=u[U-2]).high)>>>19|(G=Q.low)<<13)^(z<<3|G>>>29)^z>>>6,G=(G>>>19|z<<13)^(G<<3|z>>>29)^(G>>>6|z<<26),J=(z=u[U-7]).high,Z=(Y=u[U-16]).high,Y=Y.low;V=(V=(V=V+J+((z=X+z.low)>>>0<X>>>0?1:0))+Q+((z=z+G)>>>0<G>>>0?1:0))+Z+((z=z+Y)>>>0<Y>>>0?1:0);K.high=V,K.low=z}J=L&$^~L&W,Y=B&H^~B&N,K=C&R^C&A^R&A;var ee=x&I^x&M^I&M,te=(X=(C>>>28|x<<4)^(C<<30|x>>>2)^(C<<25|x>>>7),Q=(x>>>28|C<<4)^(x<<30|C>>>2)^(x<<25|C>>>7),(G=a[U]).high),re=G.low;Z=q+((L>>>14|B<<18)^(L>>>18|B<<14)^(L<<23|B>>>9))+((G=F+((B>>>14|L<<18)^(B>>>18|L<<14)^(B<<23|L>>>9)))>>>0<F>>>0?1:0),q=W,F=N,W=$,N=H,$=L,H=B,L=T+(Z=(Z=(Z=Z+J+((G=G+Y)>>>0<Y>>>0?1:0))+te+((G=G+re)>>>0<re>>>0?1:0))+V+((G=G+z)>>>0<z>>>0?1:0))+((B=D+G|0)>>>0<D>>>0?1:0)|0,T=A,D=M,A=R,M=I,R=C,I=x,C=Z+(K=X+K+((z=Q+ee)>>>0<Q>>>0?1:0))+((x=G+z|0)>>>0<G>>>0?1:0)|0}p=r.low=p+x,r.high=h+C+(p>>>0<x>>>0?1:0),d=n.low=d+I,n.high=v+R+(d>>>0<I>>>0?1:0),m=o.low=m+M,o.high=y+A+(m>>>0<M>>>0?1:0),b=i.low=b+D,i.high=g+T+(b>>>0<D>>>0?1:0),_=c.low=_+B,c.high=w+L+(_>>>0<B>>>0?1:0),j=s.low=j+H,s.high=O+$+(j>>>0<H>>>0?1:0),P=f.low=P+N,f.high=S+W+(P>>>0<N>>>0?1:0),E=l.low=E+F,l.high=k+q+(E>>>0<F>>>0?1:0)},_doFinalize:function(){var e=this._data,t=e.words,r=8*this._nDataBytes,n=8*e.sigBytes;return t[n>>>5]|=128<<24-n%32,t[30+(n+128>>>10<<5)]=Math.floor(r/4294967296),t[31+(n+128>>>10<<5)]=r,e.sigBytes=4*t.length,this._process(),this._hash.toX32()},clone:function(){var e=r.clone.call(this);return e._hash=this._hash.clone(),e},blockSize:32}),t.SHA512=r._createHelper(i),t.HmacSHA512=r._createHmacHelper(i)}()},1776:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return $}));r(606);var n,o=r(299),i=(r(604),r(140)),a=(r(1192),r(1196)),c=(r(605),r(172)),u=(r(1193),r(1195)),s=r(0),f=r.n(s),l=r(170),h=r(4),p=r(1339),v=r.n(p),d=r(1106),y=r.n(d),m=r(15),g=r(11);function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function _(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function j(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}function S(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){j(i,n,o,a,c,"next",e)}function c(e){j(i,n,o,a,c,"throw",e)}a(void 0)}))}}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=R(e);if(t){var o=R(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return C(this,r)}}function C(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?x(e):t}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=u.a.Item,D={labelCol:{span:8},wrapperCol:{span:16}},L=window.sessionStorage;function B(e){var t=v.a.combine(e);return v.a.hex2str(t)}var $=u.a.create()(n=Object(l.connect)((function(e){var t=e.user,r=e.loading.effects;return A(A({},t),{},{loading:r["user/requestRecover"]||r["user/recover"]})}))(n=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(p,t);var r,n,s,l=E(p);function p(t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),M(x(r=l.call(this,t)),"getCode",S(regeneratorRuntime.mark((function e(){var t,n,o,i,a,u,s,f,l,h,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.props,n=t.trustee,o=t.dispatch,i=t.backSignIn,!((a=t.userTrustee).length<1)){e.next=4;break}return c.a.error(Object(m.a)("visit_expired")),e.abrupt("return",i&&i());case 4:u=!0,s=L.getItem(g.b.TOKEN),f=_(n),e.prev=7,f.s();case 9:if((l=f.n()).done){e.next=18;break}if(h=l.value,!(a.indexOf(h.id.toString())>-1)){e.next=16;break}return e.next=14,o({type:"user/requestRecover",payload:{token:s,pubkey:r.pubkey,trustee:h.name}});case 14:!0!==e.sent&&(u=!1);case 16:e.next=9;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(7),f.e(e.t0);case 23:return e.prev=23,f.f(),e.finish(23);case 26:u?(r.setState({getCode:!0}),p=window.sessionStorage.getItem(g.b.EMAIL),c.a.success(Object(m.a)("send_code_tips",p))):(c.a.error(Object(m.a)("visit_expired")),window.sessionStorage.removeItem(g.b.TOKEN),i&&i());case 27:case"end":return e.stop()}}),e,null,[[7,20,23,26]])})))),M(x(r),"handleSubmit",(function(t){t.preventDefault();var n=r.props,o=n.form,i=n.trustee,a=n.recoverCallback,u=n.dispatch,s=n.userTrustee;o.validateFields(function(){var t=S(regeneratorRuntime.mark((function t(n,o){var f,l,p,v,d,y,b,w,O;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=27;break}console.log("Received values of form: ",o),f=[],l=L.getItem(g.b.TOKEN),p=_(i),t.prev=5,p.s();case 7:if((v=p.n()).done){t.next=17;break}if(d=v.value,!(s.indexOf(d.id.toString())>-1)){t.next=15;break}return t.next=12,u({type:"user/recover",payload:{token:l,trustee:d.name,code:o.code}});case 12:(y=t.sent).code&&c.a.error(Object(m.a)("invalid_code_title")),y&&(b=Object(h.computeSecret)(r.privkey.toHex(),d.publicKey),w=e.from(y,"hex"),f.push(Object(h.decrypt)(b,w).toString()));case 15:t.next=7;break;case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(5),p.e(t.t0);case 22:return t.prev=22,p.f(),t.finish(22);case 25:O=B(f),f.length<2?c.a.error(Object(m.a)("invalid_code_title")):(c.a.success(Object(m.a)("recover_account_title")),a&&a(O));case 27:case"end":return t.stop()}}),t,null,[[5,19,22,25]])})));return function(e,r){return t.apply(this,arguments)}}())})),r.privkey=new h.PrivateKey,r.pubkey=r.privkey.toPublicKey().toHex(),r.state={getCode:!1},r}return r=p,(n=[{key:"render",value:function(){var e=this,t=this.props,r=t.form,n=t.loading,c=r.getFieldDecorator,s=void 0!==n&&n;return f.a.createElement(o.a,{spinning:s},f.a.createElement(u.a,w({onSubmit:function(t){return e.handleSubmit(t)}},D),f.a.createElement("p",{className:y.a.form_note},"Tips: ",Object(m.a)("maxthon_code_tips")),f.a.createElement("div",{className:y.a.email_account},f.a.createElement(T,{label:Object(m.a)("maxthon_code")},c("code",{rules:[{required:!0}]})(f.a.createElement(a.a,{style:{width:350},placeholder:Object(m.a)("input_email_code")})),f.a.createElement(i.a,{className:"btn_short",type:"primary",onClick:function(){return e.getCode()}},Object(m.a)("get_code")))),f.a.createElement("div",{className:"btn_wrap"},this.state.getCode&&f.a.createElement(i.a,{className:"btn",type:"primary",htmlType:"submit"},Object(m.a)("recover")))))}}])&&P(r.prototype,n),s&&P(r,s),p}(s.Component))||n)||n}).call(this,r(22).Buffer)},1777:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return k}));r(604);var n,o=r(140),i=(r(605),r(172)),a=(r(1193),r(1195)),c=r(0),u=r.n(c),s=r(170),f=r(1238),l=r.n(f),h=r(15),p=(r(1322),r(11)),v=r(4),d=r(1778);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=j(e);if(t){var o=j(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return _(this,r)}}function _(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k=a.a.create()(n=Object(s.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.user)}))(n=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(f,t);var r,n,c,s=w(f);function f(){var t;m(this,f);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return P(O(t=s.call.apply(s,[this].concat(n))),"state",{seed:""}),P(O(t),"encodeSeed",(function(r){var n=window.sessionStorage.getItem(p.b.SECRET),o=l()(n),a="";try{a=Object(v.decrypt)(o,e.from(r,"hex")).toString(),t.setState({seed:a})}catch(e){i.a.error(Object(h.a)("recover_photo_error"))}})),P(O(t),"uploadImage",(function(e){var r=e.target.files[0];r&&d.a.scanImage(r).then((function(e){t.encodeSeed(e)})).catch((function(e){console.log(e||"No QR code found.")}))})),P(O(t),"recover",(function(){var e=t.props.recoverCallback;i.a.success(Object(h.a)("recover_account_title")),e&&e(t.state.seed)})),t}return r=f,(n=[{key:"render",value:function(){var e=this;return u.a.createElement(a.a,{onSubmit:this.handleSubmit},u.a.createElement("div",{style:E.wrap1},u.a.createElement("input",{type:"file",id:"file-selector",accept:"image/*",onChange:function(t){return e.uploadImage(t)}})),u.a.createElement("div",{style:E.wrap},u.a.createElement(o.a,{className:"btn",type:"primary",onClick:function(){return e.recover()}},Object(h.a)("recover"))))}}])&&g(r.prototype,n),c&&g(r,c),f}(c.Component))||n)||n,E={wrap1:{marginTop:40,marginLeft:50},wrap:{textAlign:"center",marginTop:30}}}).call(this,r(22).Buffer)},1778:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r.d(t,"a",(function(){return i}));var i=function(){function e(t,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e.DEFAULT_CANVAS_SIZE;n(this,e),this.$video=t,this.$canvas=document.createElement("canvas"),this._onDecode=r,this._active=!1,this._paused=!1,this.$canvas.width=o,this.$canvas.height=o,this._sourceRect={x:0,y:0,width:o,height:o},this._onCanPlay=this._onCanPlay.bind(this),this._onPlay=this._onPlay.bind(this),this._onVisibilityChange=this._onVisibilityChange.bind(this),this.$video.addEventListener("canplay",this._onCanPlay),this.$video.addEventListener("play",this._onPlay),document.addEventListener("visibilitychange",this._onVisibilityChange),this._qrWorker=new Worker(e.WORKER_PATH)}var t,r,i;return t=e,i=[{key:"hasCamera",value:function(){return navigator.mediaDevices.enumerateDevices().then((function(e){return e.some((function(e){return"videoinput"===e.kind}))})).catch((function(){return!1}))}},{key:"scanImage",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],a=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=!1,u=new Promise((function(a,u){var s,f,l;n||(n=new Worker(e.WORKER_PATH),c=!0,n.postMessage({type:"inversionMode",data:"both"})),f=function(e){"qrResult"===e.data.type&&(n.removeEventListener("message",f),n.removeEventListener("error",l),clearTimeout(s),null!==e.data.data?a(e.data.data):u("QR code not found."))},l=function(e){n.removeEventListener("message",f),n.removeEventListener("error",l),clearTimeout(s);var t=e?e.message||e:"Unknown Error";u("Scanner error: "+t)},n.addEventListener("message",f),n.addEventListener("error",l),s=setTimeout((function(){return l("timeout")}),3e3),e._loadImage(t).then((function(t){var a=e._getImageData(t,r,o,i);n.postMessage({type:"decode",data:a},[a.data.buffer])})).catch(l)}));return r&&a&&(u=u.catch((function(){return e.scanImage(t,null,n,o,i)}))),u=u.finally((function(){c&&n.postMessage({type:"close"})}))}},{key:"_getImageData",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];r=r||document.createElement("canvas");var o=t&&t.x?t.x:0,i=t&&t.y?t.y:0,a=t&&t.width?t.width:e.width||e.videoWidth,c=t&&t.height?t.height:e.height||e.videoHeight;n||r.width===a&&r.height===c||(r.width=a,r.height=c);var u=r.getContext("2d",{alpha:!1});return u.imageSmoothingEnabled=!1,u.drawImage(e,o,i,a,c,0,0,r.width,r.height),u.getImageData(0,0,r.width,r.height)}},{key:"_loadImage",value:function(t){if(t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement||window.ImageBitmap&&t instanceof window.ImageBitmap||window.OffscreenCanvas&&t instanceof window.OffscreenCanvas)return Promise.resolve(t);if(t instanceof Image)return e._awaitImageLoad(t).then((function(){return t}));if(t instanceof File||t instanceof URL||"string"==typeof t){var r=new Image;return t instanceof File?r.src=URL.createObjectURL(t):r.src=t,e._awaitImageLoad(r).then((function(){return t instanceof File&&URL.revokeObjectURL(r.src),r}))}return Promise.reject("Unsupported image type.")}},{key:"_awaitImageLoad",value:function(e){return new Promise((function(t,r){var n,o;e.complete&&0!==e.naturalWidth?t():(n=function(){e.removeEventListener("load",n),e.removeEventListener("error",o),t()},o=function(){e.removeEventListener("load",n),e.removeEventListener("error",o),r("Image load error")},e.addEventListener("load",n),e.addEventListener("error",o))}))}}],(r=[{key:"destroy",value:function(){this.$video.removeEventListener("canplay",this._onCanPlay),this.$video.removeEventListener("play",this._onPlay),document.removeEventListener("visibilitychange",this._onVisibilityChange),this.stop(),this._qrWorker.postMessage({type:"close"})}},{key:"start",value:function(){var e=this;if(this._active&&!this._paused)return Promise.resolve();if("https:"!==window.location.protocol&&console.warn("The camera stream is only accessible if the page is transferred via https."),this._active=!0,this._paused=!1,document.hidden)return Promise.resolve();if(clearTimeout(this._offTimeout),this._offTimeout=null,this.$video.srcObject)return this.$video.play(),Promise.resolve();var t="environment";return this._getCameraStream("environment",!0).catch((function(){return t="user",e._getCameraStream()})).then((function(r){e.$video.srcObject=r,e._setVideoMirror(t)})).catch((function(t){throw e._active=!1,t}))}},{key:"stop",value:function(){this.pause(),this._active=!1}},{key:"pause",value:function(){var e=this;this._paused=!0,this._active&&(this.$video.pause(),this._offTimeout||(this._offTimeout=setTimeout((function(){var t=e.$video.srcObject&&e.$video.srcObject.getTracks()[0];t&&(t.stop(),e.$video.srcObject=null,e._offTimeout=null)}),300)))}},{key:"setGrayscaleWeights",value:function(e,t,r){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];this._qrWorker.postMessage({type:"grayscaleWeights",data:{red:e,green:t,blue:r,useIntegerApproximation:n}})}},{key:"setInversionMode",value:function(e){this._qrWorker.postMessage({type:"inversionMode",data:e})}},{key:"_onCanPlay",value:function(){this._updateSourceRect(),this.$video.play()}},{key:"_onPlay",value:function(){this._updateSourceRect(),this._scanFrame()}},{key:"_onVisibilityChange",value:function(){document.hidden?this.pause():this._active&&this.start()}},{key:"_updateSourceRect",value:function(){var e=Math.min(this.$video.videoWidth,this.$video.videoHeight),t=Math.round(2/3*e);this._sourceRect.width=this._sourceRect.height=t,this._sourceRect.x=(this.$video.videoWidth-t)/2,this._sourceRect.y=(this.$video.videoHeight-t)/2}},{key:"_scanFrame",value:function(){var t=this;if(!this._active||this.$video.paused||this.$video.ended)return!1;requestAnimationFrame((function(){e.scanImage(t.$video,t._sourceRect,t._qrWorker,t.$canvas,!0).then(t._onDecode,(function(e){t._active&&"QR code not found."!==e&&console.error(e)})).then((function(){return t._scanFrame()}))}))}},{key:"_getCameraStream",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=[{width:{min:1024}},{width:{min:768}},{}];return e&&(t&&(e={exact:e}),r.forEach((function(t){return t.facingMode=e}))),this._getMatchingCameraStream(r)}},{key:"_getMatchingCameraStream",value:function(e){var t=this;return 0===e.length?Promise.reject("Camera not found."):navigator.mediaDevices.getUserMedia({video:e.shift()}).catch((function(){return t._getMatchingCameraStream(e)}))}},{key:"_setVideoMirror",value:function(e){var t="user"===e?-1:1;this.$video.style.transform="scaleX("+t+")"}}])&&o(t.prototype,r),i&&o(t,i),e}();i.DEFAULT_CANVAS_SIZE=400,i.WORKER_PATH="qr-scanner-worker.min.js"}}]);