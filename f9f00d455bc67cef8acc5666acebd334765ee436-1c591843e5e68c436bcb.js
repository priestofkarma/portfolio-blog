(self.webpackChunkportfolio_blog=self.webpackChunkportfolio_blog||[]).push([[5046],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(!a(e[l],i[l]))return!1;return!0}if(r&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!a(l.value[1],i.get(l.value[0])))return!1;return!0}if(n&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(l=c;0!=l--;)if(e[l]!==i[l])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!a(e[u[l]],i[u[l]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},1046:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return n.createElement(s,i({attr:i({},e.attr)},t),l(e.child))}}function s(e){var t=function(t){var r,o=e.attr,a=e.size,l=e.title,u=c(e,["attr","size","title"]),s=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},4839:function(e,t,r){"use strict";var n,o=r(7294),a=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){u.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},i.render=function(){return a.createElement(n,this.props)},o}(o.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},2450:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=f;var n=c(r(7294)),o=r(5444),a=c(r(5697)),i=r(9650);function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){var t=e.to,r=e.title,a=e.children,c=e.className,l=e.stripHash,s=void 0!==l&&l,f=e.gatsbyLinkProps,m=void 0===f?{}:f,p=e.onAnchorLinkClick,d=s?i.handleStrippedLinkClick:i.handleLinkClick,h=u(u({},m),{},{to:s?(0,i.stripHashedLocation)(t):t,onClick:function(e){return d(t,e,p)}});return r&&(h.title=r),c&&(h.className=c),n.default.createElement(o.Link,h,a||r)}f.propTypes={to:a.default.string.isRequired,title:a.default.string,className:a.default.string,stripHash:a.default.bool,gatsbyLinkProps:a.default.object,onAnchorLinkClick:a.default.func,children:a.default.node}},9869:function(e,t,r){"use strict";Object.defineProperty(t,"P",{enumerable:!0,get:function(){return n.AnchorLink}});var n=r(2450)},9044:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n=r(7294),o=r(5444),a=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1],a=function(){r((function(e){return!e}))};return n.createElement("header",{className:"header"},n.createElement("div",{className:"wrapper"},n.createElement("div",{className:"header-wrapper fadeInDown"},n.createElement("a",{href:"/",className:"logotype"},n.createElement("svg",{enableBackground:"new 0 0 512 512",overflow:"visible",height:"100",width:"100",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},n.createElement("g",{className:"mini-left"},n.createElement("path",{d:"m152.842 208.741 35.491-31.331 28.244-47.565c-45.401-34.461-96.383-56.454-98.53-57.373l-12.937-5.537-6.352 12.557c-1.078 2.133-26.575 52.908-39.04 109.272z",fill:"#023E7D"})),n.createElement("g",{className:"mini-right"},n.createElement("path",{d:"m359.158 208.741-35.491-31.331-28.244-47.565c45.401-34.461 96.383-56.454 98.53-57.373l12.937-5.537 6.352 12.557c1.079 2.134 26.576 52.909 39.041 109.272z",fill:"#023E7D"})),n.createElement("g",{className:"large-left"},n.createElement("path",{d:"m169.931 445.062h86.069v-30l-83.094-220.567c-23.53-11.337-48.797-17.085-75.098-17.085h-97.808v97.752c0 93.684 76.23 169.9 169.931 169.9z",fill:"#056fda"})),n.createElement("g",{className:"large-right"},n.createElement("path",{d:"m342.069 445.062h-86.069v-30l83.094-220.567c23.53-11.337 48.797-17.085 75.098-17.085h97.808v97.752c0 93.684-76.23 169.9-169.931 169.9z",fill:"#0353A4"})),n.createElement("g",{className:"middle"},n.createElement("path",{d:"m360 270.365c0 84.47-104 174.7-104 174.7l-9.32-7.4c-4.44-3.52-108.82-87.25-108.82-169.27 0-81.27 103.47-179.28 107.88-183.41l10.26-9.62s104 113.73 104 195z",fill:"#1085fa"}),n.createElement("path",{d:"m374.14 268.395c0 82.02-104.38 165.75-108.82 169.27l-9.32 7.4v-369.7l10.26 9.62c4.41 4.13 107.88 102.14 107.88 183.41z",fill:"#0377eb"})))),n.createElement("nav",{className:"header-menu "+(t?"toggle-active":"")},n.createElement("ul",null,n.createElement("li",null,n.createElement(o.Link,{to:"/projects",onClick:a},"Проекты")),n.createElement("li",null,n.createElement(o.Link,{to:"/notes",onClick:a},"Заметочки")),n.createElement("li",null,n.createElement(o.Link,{to:"/notes/instruments",onClick:a},"Инструменты")),n.createElement("li",null,n.createElement(o.Link,{to:"/about",onClick:a},"Обо мне")))),n.createElement("button",{className:"menu-toggle "+(t?"toggle-active":""),onClick:a},n.createElement("div",{className:"menu-toggle-icon"},n.createElement("span",null))))))},i=r(2661);var c=r(9869),l=r(6486),u=function(){var e=(0,o.useStaticQuery)(s);return n.createElement("footer",{className:"footer"},n.createElement("div",{className:"wrapper"},n.createElement("div",{className:"footer-wrapper"},n.createElement("div",{className:"footer-menu"},n.createElement("div",{className:"footer-menu_item"},n.createElement(o.Link,{to:"/tags",className:"first-link"},"Теги"),n.createElement("ul",{className:"footer-menu_list"},e.allTagsMdx.group.map((function(e,t){return n.createElement("li",{key:e+t},n.createElement(o.Link,{to:"/tags/"+l.kebabCase(e.fieldValue)+"/",title:e.fieldValue},e.fieldValue))})))),n.createElement("div",{className:"footer-menu_item"},n.createElement(o.Link,{to:"/projects",className:"first-link"},"Проекты"),n.createElement("ul",{className:"footer-menu_list"},e.allProjectsMdx.edges.map((function(e){var t,r,a,i=e.node;return n.createElement("li",{key:i.id},n.createElement(o.Link,{to:i.frontmatter.path,title:i.frontmatter.title},(t=i.frontmatter.name,r=25,(a=t.slice(0,r)).length<t.length&&(a+="..."),a)))})))),n.createElement("div",{className:"footer-menu_item"},n.createElement("p",{className:"first-link"},"Полезности"),n.createElement("ul",{className:"footer-menu_list"},n.createElement("li",null,n.createElement(o.Link,{to:"/notes/instruments",title:"Чем я пользуюсь"},"Инструменты")),n.createElement("li",null,n.createElement(c.P,{to:"/about#write-me",stripHash:!0,title:"Напишите мне!"},"Cвязаться со мной")))),n.createElement("div",{className:"footer-menu_item"},n.createElement("p",{className:"first-link"},"Соцсети"),n.createElement("ul",{className:"footer-menu_list"},i.$.map((function(e,t){return n.createElement("li",{key:"footerSocialItems-"+t},n.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer",title:e.name},e.name))}))))),n.createElement("div",{className:"footer-copyright"},n.createElement("span",null,"© 2021 by ",n.createElement("a",{href:"https://t.me/priestofkarma",target:"_blank",rel:"noreferrer"},"Zhenya Petrenko")," Все права защищены."),n.createElement("p",null,"В настоящее время доступен для найма, не стесняйтесь связаться со мной, чтобы обсудить детали Вашего проекта.")))))},s="1506208192",f=function(e){var t=e.clazzName,r=e.children;return(0,n.useEffect)((function(){var e=document.querySelector(".scroll-up");e&&(window.addEventListener("scroll",(function(t){window.pageYOffset>800?e.classList.add("scroll-up-active"):e.classList.remove("scroll-up-active")})),e.addEventListener("click",(function(){window.scroll({top:0,behavior:"smooth"})})))}),[]),n.createElement(n.Fragment,null,n.createElement(a,null),n.createElement("main",{className:"page_container "+(t||"")},r),n.createElement("div",{className:"scroll-up"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 492.004 492.004"},n.createElement("path",{d:"M484.14,226.886L306.46,49.202c-5.072-5.072-11.832-7.856-19.04-7.856c-7.216,0-13.972,2.788-19.044,7.856l-16.132,16.136 c-5.068,5.064-7.86,11.828-7.86,19.04c0,7.208,2.792,14.2,7.86,19.264L355.9,207.526H26.58C11.732,207.526,0,219.15,0,234.002 v22.812c0,14.852,11.732,27.648,26.58,27.648h330.496L252.248,388.926c-5.068,5.072-7.86,11.652-7.86,18.864 c0,7.204,2.792,13.88,7.86,18.948l16.132,16.084c5.072,5.072,11.828,7.836,19.044,7.836c7.208,0,13.968-2.8,19.04-7.872 l177.68-177.68c5.084-5.088,7.88-11.88,7.86-19.1C492.02,238.762,489.228,231.966,484.14,226.886z"}))),n.createElement(u,null))}},1633:function(e,t,r){"use strict";r.d(t,{Z:function(){return ge}});var n,o,a,i,c=r(7294),l=r(5697),u=r.n(l),s=r(4839),f=r.n(s),m=r(2993),p=r.n(m),d=r(6494),h=r.n(d),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",T="href",O="http-equiv",C="innerHTML",k="itemprop",A="name",S="property",j="rel",N="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},x="defaultTitle",I="defer",_="encodeSpecialCharacters",M="onChangeClientState",R="titleTemplate",D=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),z=[v.NOSCRIPT,v.SCRIPT,v.STYLE],H="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=J(e,v.TITLE),r=J(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=J(e,x);return t||n||void 0},Z=function(e){return J(e,M)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var a=n[o].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},G=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],l=c.toLowerCase();-1===t.indexOf(l)||r===j&&"canonical"===e[r].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==C&&c!==w&&c!==k||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],l=h()({},n[c],o[c]);n[c]=l}return e}),[]).reverse()},J=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:r.g.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,m=e.titleAttributes;le(v.BODY,n),le(v.HTML,o),ce(f,m);var p={baseTag:ue(v.BASE,r),linkTags:ue(v.LINK,a),metaTags:ue(v.META,i),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,s)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,d,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(v.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(H),o=n?n.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],u=t[l]||"";r.getAttribute(l)!==u&&r.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=a.indexOf(l);-1!==s&&a.splice(s,1)}for(var f=a.length-1;f>=0;f--)r.removeAttribute(a[f]);o.length===a.length?r.removeAttribute(H):r.getAttribute(H)!==i.join(",")&&r.setAttribute(H,i.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(H,"true"),o.some((function(e,t){return i=t,r.isEqualNode(e)}))?o.splice(i,1):a.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:a}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)},me=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[H]=!0,o=fe(r,n),[c.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=se(r),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[H]=!0,n);return Object.keys(t).forEach((function(e){var r=L[e]||e;if(r===C||r===w){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+K(n[t],r)+'"';return e?e+" "+o:o}),""),a=n.innerHTML||n.cssText||"",i=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,m=e.titleAttributes;return{base:me(v.BASE,t,n),bodyAttributes:me(y,r,n),htmlAttributes:me(g,o,n),link:me(v.LINK,a,n),meta:me(v.META,i,n),noscript:me(v.NOSCRIPT,c,n),script:me(v.SCRIPT,l,n),style:me(v.STYLE,u,n),title:me(v.TITLE,{title:f,titleAttributes:m},n)}},de=f()((function(e){return{baseTag:Q([T,P],e),bodyAttributes:$(y,e),defer:J(e,I),encode:J(e,_),htmlAttributes:$(g,e),linkTags:G(v.LINK,[j,T],e),metaTags:G(v.META,[A,E,O,S,k],e),noscriptTags:G(v.NOSCRIPT,[C],e),onChangeClientState:Z(e),scriptTags:G(v.SCRIPT,[N,C],e),styleTags:G(v.STYLE,[w],e),title:W(e),titleAttributes:$(b,e)}}),(function(e){oe&&re(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),pe)((function(){return null})),he=(o=de,i=a=function(e){function t(){return q(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return Y({},n,((t={})[r.type]=[].concat(n[r.type]||[],[Y({},o,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(n.type){case v.TITLE:return Y({},o,((t={})[n.type]=i,t.titleAttributes=Y({},a),t));case v.BODY:return Y({},o,{bodyAttributes:Y({},a)});case v.HTML:return Y({},o,{htmlAttributes:Y({},a)})}return Y({},o,((r={})[n.type]=Y({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=Y({},t);return Object.keys(e).forEach((function(t){var n;r=Y({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)}(U(o,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=U(e,["children"]),n=Y({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(o,n)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var ye=r(5444),ge=function(e){var t=e.pageTitle,r=e.pageDescription,n=e.pageImage,o=(0,ye.useStaticQuery)("2421551591").site.siteMetadata,a=o.title,i=o.description,l=o.image,u=o.siteUrl,s={title:t,description:r||i,image:""+u+(n||l)},f=(s.title?s.title+" |":"")+" "+a+" ";return c.createElement(he,{title:f},c.createElement("html",{lang:"ru",amp:!0}),c.createElement("meta",{name:"description",content:s.description}),c.createElement("meta",{name:"image",content:s.image}),c.createElement("meta",{property:"og:url",content:u}),c.createElement("meta",{property:"og:type",content:"website"}),c.createElement("meta",{property:"og:title",content:f}),c.createElement("meta",{property:"og:description",content:s.description}),c.createElement("meta",{property:"og:image",content:s.image}),c.createElement("meta",{property:"og:image:height",content:"300"}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),c.createElement("meta",{name:"twitter:image",content:s.image}),c.createElement("meta",{name:"twitter:title",content:f}),c.createElement("meta",{name:"twitter:description",content:s.description}))}},2661:function(e,t,r){"use strict";r.d(t,{$:function(){return l}});var n=r(7294),o=r(1046);function a(e){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}}]})(e)}var i=r(3201),c=r(9845),l=[{icon:n.createElement(i.VAJ,null),url:"tel:+380632071229",name:"Telephone"},{icon:n.createElement(i.Ww5,null),url:"https://t.me/priestofkarma",name:"Telegram"},{icon:n.createElement(c.Z8w,null),url:"https://www.instagram.com/karmasacrificer",name:"Instagram"},{icon:n.createElement(a,null),url:"https://github.com/priestofkarma",name:"GitHub"},{icon:n.createElement(i.Am9,null),url:"https://www.facebook.com/petrenko.evg",name:"Facebook"}]}}]);
//# sourceMappingURL=f9f00d455bc67cef8acc5666acebd334765ee436-1c591843e5e68c436bcb.js.map