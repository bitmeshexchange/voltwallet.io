(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1087:function(e,t,n){"use strict";n(62),n(903),n(420)},1088:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(1),i=n.n(a),l=n(5),c=n.n(l),s=n(158),p=n(3),u=n.n(p),f={adjustX:1,adjustY:1},y=[0,0],b={topLeft:{points:["bl","tl"],overflow:f,offset:[0,-4],targetOffset:y},topCenter:{points:["bc","tc"],overflow:f,offset:[0,-4],targetOffset:y},topRight:{points:["br","tr"],overflow:f,offset:[0,-4],targetOffset:y},bottomLeft:{points:["tl","bl"],overflow:f,offset:[0,4],targetOffset:y},bottomCenter:{points:["tc","bc"],overflow:f,offset:[0,4],targetOffset:y},bottomRight:{points:["tr","br"],overflow:f,offset:[0,4],targetOffset:y}},m=n(31),g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};var v=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return h.call(r),r.state="visible"in n?{visible:n.visible}:{visible:n.defaultVisible},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.getDerivedStateFromProps=function(e){return"visible"in e?{visible:e.visible}:null},t.prototype.getOverlayElement=function(){var e=this.props.overlay;return"function"==typeof e?e():e},t.prototype.getMenuElementOrLambda=function(){return"function"==typeof this.props.overlay?this.getMenuElement:this.getMenuElement()},t.prototype.getPopupDomNode=function(){return this.trigger.getPopupDomNode()},t.prototype.getOpenClassName=function(){var e=this.props,t=e.openClassName,n=e.prefixCls;return void 0!==t?t:n+"-open"},t.prototype.renderChildren=function(){var e=this.props.children,t=this.state.visible,n=e.props?e.props:{},o=u()(n.className,this.getOpenClassName());return t&&e?Object(r.cloneElement)(e,{className:o}):e},t.prototype.render=function(){var e=this.props,t=e.prefixCls,n=e.transitionName,r=e.animation,a=e.align,i=e.placement,l=e.getPopupContainer,c=e.showAction,p=e.hideAction,u=e.overlayClassName,f=e.overlayStyle,y=e.trigger,m=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["prefixCls","transitionName","animation","align","placement","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","trigger"]),v=p;return v||-1===y.indexOf("contextMenu")||(v=["click"]),o.a.createElement(s.a,g({},m,{prefixCls:t,ref:this.saveTrigger,popupClassName:u,popupStyle:f,builtinPlacements:b,action:y,showAction:c,hideAction:v||[],popupPlacement:i,popupAlign:a,popupTransitionName:n,popupAnimation:r,popupVisible:this.state.visible,afterPopupVisibleChange:this.afterVisibleChange,popup:this.getMenuElementOrLambda(),onPopupVisibleChange:this.onVisibleChange,getPopupContainer:l}),this.renderChildren())},t}(r.Component);v.propTypes={minOverlayWidthMatchTrigger:i.a.bool,onVisibleChange:i.a.func,onOverlayClick:i.a.func,prefixCls:i.a.string,children:i.a.any,transitionName:i.a.string,overlayClassName:i.a.string,openClassName:i.a.string,animation:i.a.any,align:i.a.object,overlayStyle:i.a.object,placement:i.a.string,overlay:i.a.oneOfType([i.a.node,i.a.func]),trigger:i.a.array,alignPoint:i.a.bool,showAction:i.a.array,hideAction:i.a.array,getPopupContainer:i.a.func,visible:i.a.bool,defaultVisible:i.a.bool},v.defaultProps={prefixCls:"rc-dropdown",trigger:["hover"],showAction:[],overlayClassName:"",overlayStyle:{},defaultVisible:!1,onVisibleChange:function(){},placement:"bottomLeft"};var h=function(){var e=this;this.onClick=function(t){var n=e.props,r=e.getOverlayElement().props;"visible"in n||e.setState({visible:!1}),n.onOverlayClick&&n.onOverlayClick(t),r.onClick&&r.onClick(t)},this.onVisibleChange=function(t){var n=e.props;"visible"in n||e.setState({visible:t}),n.onVisibleChange(t)},this.getMinOverlayWidthMatchTrigger=function(){var t=e.props,n=t.minOverlayWidthMatchTrigger,r=t.alignPoint;return"minOverlayWidthMatchTrigger"in e.props?n:!r},this.getMenuElement=function(){var t=e.props.prefixCls,n=e.getOverlayElement(),r={prefixCls:t+"-menu",onClick:e.onClick};return"string"==typeof n.type&&delete r.prefixCls,o.a.cloneElement(n,r)},this.afterVisibleChange=function(t){if(t&&e.getMinOverlayWidthMatchTrigger()){var n=e.getPopupDomNode(),r=c.a.findDOMNode(e);r&&n&&r.offsetWidth>n.offsetWidth&&(n.style.minWidth=r.offsetWidth+"px",e.trigger&&e.trigger._component&&e.trigger._component.alignInstance&&e.trigger._component.alignInstance.forceAlign())}},this.saveTrigger=function(t){e.trigger=t}};Object(m.polyfill)(v);var d=v,O=n(419),w=n(34),j=n(21),C=n(70);function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object(C.a)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight");var T=function(e){function t(){var e;return N(this,t),(e=k(this,_(t).apply(this,arguments))).renderOverlay=function(t){var n,o=e.props.overlay;n="function"==typeof o?o():o;var a=(n=r.Children.only(n)).props;Object(w.a)(!a.mode||"vertical"===a.mode,"Dropdown",'mode="'.concat(a.mode,"\" is not supported for Dropdown's Menu."));var i=a.selectable,l=void 0!==i&&i,c=a.focusable,s=void 0===c||c,p=r.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},r.createElement(j.a,{type:"right",className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"==typeof n.type?o:r.cloneElement(n,{mode:"vertical",selectable:l,focusable:s,expandIcon:p})},e.renderDropDown=function(t){var n,o=t.getPopupContainer,a=t.getPrefixCls,i=e.props,l=i.prefixCls,c=i.children,s=i.trigger,p=i.disabled,f=i.getPopupContainer,y=a("dropdown",l),b=r.Children.only(c),m=r.cloneElement(b,{className:u()(b.props.className,"".concat(y,"-trigger")),disabled:p}),g=p?[]:s;return g&&-1!==g.indexOf("contextMenu")&&(n=!0),r.createElement(d,E({alignPoint:n},e.props,{prefixCls:y,getPopupContainer:f||o,transitionName:e.getTransitionName(),trigger:g,overlay:function(){return e.renderOverlay(y)}}),m)},e}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,e),n=t,(o=[{key:"getTransitionName",value:function(){var e=this.props,t=e.placement,n=void 0===t?"":t,r=e.transitionName;return void 0!==r?r:n.indexOf("top")>=0?"slide-down":"slide-up"}},{key:"render",value:function(){return r.createElement(O.a,null,this.renderDropDown)}}])&&S(n.prototype,o),a&&S(n,a),t}(r.Component);T.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1,placement:"bottomLeft"};var D=n(128);function M(e){return(M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function A(e,t){return!t||"object"!==M(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},z=D.a.Group,J=function(e){function t(){var e;return I(this,t),(e=A(this,R(t).apply(this,arguments))).renderButton=function(t){var n=t.getPopupContainer,o=t.getPrefixCls,a=e.props,i=a.prefixCls,l=a.type,c=a.disabled,s=a.onClick,p=a.htmlType,f=a.children,y=a.className,b=a.overlay,m=a.trigger,g=a.align,v=a.visible,h=a.onVisibleChange,d=a.placement,O=a.getPopupContainer,w=a.href,C=a.icon,P=void 0===C?r.createElement(j.a,{type:"ellipsis"}):C,E=a.title,N=B(a,["prefixCls","type","disabled","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title"]),S=o("dropdown-button",i),k={align:g,overlay:b,disabled:c,trigger:c?[]:m,onVisibleChange:h,placement:d,getPopupContainer:O||n};return"visible"in e.props&&(k.visible=v),r.createElement(z,V({},N,{className:u()(S,y)}),r.createElement(D.a,{type:l,disabled:c,onClick:s,htmlType:p,href:w,title:E},f),r.createElement(T,k,r.createElement(D.a,{type:l},P)))},e}var n,o,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){return r.createElement(O.a,null,this.renderButton)}}])&&L(n.prototype,o),a&&L(n,a),t}(r.Component);J.defaultProps={placement:"bottomRight",type:"default"},T.Button=J;t.a=T},1090:function(e,t,n){"use strict";n.d(t,"a",(function(){return V}));n(1087);var r,o=n(1088),a=(n(423),n(21)),i=(n(428),n(129)),l=n(0),c=n.n(l),s=n(156),p=n(203),u=n.n(p),f=[{name:"zh-cn",label:"简体中文",value:1},{name:"en-us",label:"English",value:2}],y=n(904),b=n.n(y);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var C="."+document.domain.split(".").slice(document.domain.split(".").length-2).join("."),P=u.a.get("lang")||navigator.language;P=P.toLowerCase();var E,N,S=!1,k=!0,_=!1,x=void 0;try{for(var T,D=f[Symbol.iterator]();!(k=(T=D.next()).done);k=!0){if(T.value.name===P){S=!0;break}}}catch(e){_=!0,x=e}finally{try{k||null==D.return||D.return()}finally{if(_)throw x}}S||(P="zh-cn");var M=f.map((function(e){return e.name===P&&(E=e.label,N="flag-"+e.name),c.a.createElement(i.a.Item,{key:e.name},c.a.createElement("i",{className:[b.a.flag,b.a["flag-"+e.name]].join(" ")}),e.label)})),V=Object(s.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.user)}))(r=function(e){function t(){return g(this,t),h(this,d(t).apply(this,arguments))}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,e),n=t,(r=[{key:"changeLang",value:function(e){var t=e.key;P!==t&&(this.props.dispatch({type:"user/save",payload:{lang:t}}),u.a.remove("lang"),u.a.set("lang",t,{domain:C}),window.location.reload())}},{key:"render",value:function(){var e=c.a.createElement(i.a,{onClick:this.changeLang.bind(this)},M);return c.a.createElement("div",{style:this.props.style,className:b.a.lang},c.a.createElement(o.a,{overlay:e},c.a.createElement("span",{className:"ant-dropdown-link"},c.a.createElement("i",{className:[b.a.flag,b.a[N]].join(" ")}),E," ",c.a.createElement(a.a,{type:"down"}))))}}])&&v(n.prototype,r),l&&v(n,l),t}(l.Component))||r},929:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));n(1087);var r,o=n(1088),a=(n(423),n(21)),i=(n(428),n(129)),l=n(0),c=n.n(l),s=n(156),p=n(906),u=n.n(p),f=n(18),y=n(1090),b=n(19);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var j=Object(s.connect)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){w(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.user)}))(r=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,o=v(t).call(this,e),n=!o||"object"!==m(o)&&"function"!=typeof o?h(r):o,w(h(n),"changeMenu",(function(e){n.setState({currencyIndex:e}),window.localStorage.setItem("VoltLocalCurrencyIndex",e),n.props.dispatch({type:"user/save",payload:{currencyIndex:e}})})),w(h(n),"renderCurrencyMenu",(function(){return c.a.createElement(i.a,null,b.e.map((function(e,t){return c.a.createElement(i.a.Item,{key:e.key},c.a.createElement("span",{onClick:function(){return n.changeMenu(t)}},e.title))})))})),w(h(n),"goBack",(function(){n.props.history.goBack()})),n.state={currencyIndex:e.currencyIndex},n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){var e=this.state.currencyIndex;return c.a.createElement("div",{className:u.a.container},c.a.createElement("div",{className:u.a.header},c.a.createElement("span",{className:u.a.left,onClick:this.goBack},c.a.createElement(a.a,{type:"left"})," ",Object(f.a)("back")),c.a.createElement("div",{className:u.a.title},Object(f.a)("settings"))),c.a.createElement("div",{className:u.a.content},c.a.createElement("div",{className:u.a.item},c.a.createElement("div",{className:u.a.part1},Object(f.a)("currency")),c.a.createElement("div",{className:u.a.part2},c.a.createElement(o.a,{overlay:this.renderCurrencyMenu()},c.a.createElement("span",null,b.e[e].title," ",c.a.createElement(a.a,{type:"caret-down"}))))),c.a.createElement("div",{className:u.a.item},c.a.createElement("div",{className:u.a.part1},Object(f.a)("language")),c.a.createElement("div",{className:u.a.part2},c.a.createElement(y.a,null)))))}}])&&g(n.prototype,r),l&&g(n,l),t}(l.Component))||r}}]);