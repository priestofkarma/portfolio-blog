/*! For license information please see component---src-pages-index-js-5c5334d1ea37fc5a88b7.js.LICENSE.txt */
(self.webpackChunkportfolio_blog=self.webpackChunkportfolio_blog||[]).push([[9678],{6360:function(e){"use strict";e.exports=JSON.parse('{"layout":"fullWidth","backgroundColor":"#082878","images":{"fallback":{"src":"/static/316341ea2f2651e55fc8fd433f7c30ec/33693/me.jpg","srcSet":"/static/316341ea2f2651e55fc8fd433f7c30ec/49fc4/me.jpg 750w,\\n/static/316341ea2f2651e55fc8fd433f7c30ec/8a24a/me.jpg 1080w,\\n/static/316341ea2f2651e55fc8fd433f7c30ec/52c30/me.jpg 1366w,\\n/static/316341ea2f2651e55fc8fd433f7c30ec/33693/me.jpg 1740w","sizes":"100vw"},"sources":[{"srcSet":"/static/316341ea2f2651e55fc8fd433f7c30ec/55ec1/me.webp 750w,\\n/static/316341ea2f2651e55fc8fd433f7c30ec/e82d9/me.webp 1080w,\\n/static/316341ea2f2651e55fc8fd433f7c30ec/b310a/me.webp 1366w,\\n/static/316341ea2f2651e55fc8fd433f7c30ec/4112c/me.webp 1740w","type":"image/webp","sizes":"100vw"}]},"width":1,"height":1.2545977011494254}')},7766:function(e,t,i){e.exports=function e(t,i,n){function r(a,s){if(!i[a]){if(!t[a]){if(o)return o(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var c=i[a]={exports:{}};t[a][0].call(c.exports,(function(e){var i=t[a][1][e];return r(i||e)}),c,c.exports,e,t,i,n)}return i[a].exports}for(var o=void 0,a=0;a<n.length;a++)r(n[a]);return r}({1:[function(e,t,i){"use strict";var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function s(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},i=0;i<10;i++)t["_"+String.fromCharCode(i)]=i;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}t.exports=s()?Object.assign:function(e,t){for(var i,s,l=a(e),c=1;c<arguments.length;c++){for(var h in i=Object(arguments[c]))r.call(i,h)&&(l[h]=i[h]);if(n){s=n(i);for(var u=0;u<s.length;u++)o.call(i,s[u])&&(l[s[u]]=i[s[u]])}}return l}},{}],2:[function(e,t,i){(function(e){(function(){var i,n,r,o,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:null!=e&&e.hrtime?(t.exports=function(){return(i()-a)/1e6},n=e.hrtime,o=(i=function(){var e;return 1e9*(e=n())[0]+e[1]})(),s=1e9*e.uptime(),a=o-s):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(this,e("_process"))},{_process:3}],3:[function(e,t,i){var n,r,o=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}function c(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var h,u=[],m=!1,d=-1;function p(){m&&h&&(m=!1,h.length?u=h.concat(u):d=-1,u.length&&f())}function f(){if(!m){var e=l(p);m=!0;for(var t=u.length;t;){for(h=u,u=[];++d<t;)h&&h[d].run();d=-1,t=u.length}h=null,m=!1,c(e)}}function v(e,t){this.fun=e,this.array=t}function w(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];u.push(new v(e,t)),1!==u.length||m||l(f)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=w,o.addListener=w,o.once=w,o.off=w,o.removeListener=w,o.removeAllListeners=w,o.emit=w,o.prependListener=w,o.prependOnceListener=w,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},{}],4:[function(e,t,n){(function(i){for(var n=e("performance-now"),r="undefined"==typeof window?i:window,o=["moz","webkit"],a="AnimationFrame",s=r["request"+a],l=r["cancel"+a]||r["cancelRequest"+a],c=0;!s&&c<o.length;c++)s=r[o[c]+"Request"+a],l=r[o[c]+"Cancel"+a]||r[o[c]+"CancelRequest"+a];if(!s||!l){var h=0,u=0,m=[],d=1e3/60;s=function(e){if(0===m.length){var t=n(),i=Math.max(0,d-(t-h));h=i+t,setTimeout((function(){var e=m.slice(0);m.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(h)}catch(i){setTimeout((function(){throw i}),0)}}),Math.round(i))}return m.push({handle:++u,callback:e,cancelled:!1}),u},l=function(e){for(var t=0;t<m.length;t++)m[t].handle===e&&(m[t].cancelled=!0)}}t.exports=function(e){return s.call(r,e)},t.exports.cancel=function(){l.apply(r,arguments)},t.exports.polyfill=function(){r.requestAnimationFrame=s,r.cancelAnimationFrame=l}}).call(this,void 0!==i.g?i.g:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"performance-now":2}],5:[function(e,t,i){"use strict";var n=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=e("raf"),a=e("object-assign"),s={propertyCache:{},vendors:[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],clamp:function(e,t,i){return t<i?e<t?t:e>i?i:e:e<i?i:e>t?t:e},data:function(e,t){return s.deserialize(e.getAttribute("data-"+t))},deserialize:function(e){return"true"===e||"false"!==e&&("null"===e?null:!isNaN(parseFloat(e))&&isFinite(e)?parseFloat(e):e)},camelCase:function(e){return e.replace(/-+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))},accelerate:function(e){s.css(e,"transform","translate3d(0,0,0) rotate(0.0001deg)"),s.css(e,"transform-style","preserve-3d"),s.css(e,"backface-visibility","hidden")},transformSupport:function(e){for(var t=document.createElement("div"),i=!1,n=null,r=!1,o=null,a=null,l=0,c=s.vendors.length;l<c;l++)if(null!==s.vendors[l]?(o=s.vendors[l][0]+"transform",a=s.vendors[l][1]+"Transform"):(o="transform",a="transform"),void 0!==t.style[a]){i=!0;break}switch(e){case"2D":r=i;break;case"3D":if(i){var h=document.body||document.createElement("body"),u=document.documentElement,m=u.style.overflow,d=!1;document.body||(d=!0,u.style.overflow="hidden",u.appendChild(h),h.style.overflow="hidden",h.style.background=""),h.appendChild(t),t.style[a]="translate3d(1px,1px,1px)",r=void 0!==(n=window.getComputedStyle(t).getPropertyValue(o))&&n.length>0&&"none"!==n,u.style.overflow=m,h.removeChild(t),d&&(h.removeAttribute("style"),h.parentNode.removeChild(h))}}return r},css:function(e,t,i){var n=s.propertyCache[t];if(!n)for(var r=0,o=s.vendors.length;r<o;r++)if(n=null!==s.vendors[r]?s.camelCase(s.vendors[r][1]+"-"+t):t,void 0!==e.style[n]){s.propertyCache[t]=n;break}e.style[n]=i}},l=30,c={relativeInput:!1,clipRelativeInput:!1,inputElement:null,hoverOnly:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5,pointerEvents:!1,precision:1,onReady:null,selector:null},h=function(){function e(t,i){r(this,e),this.element=t;var n={calibrateX:s.data(this.element,"calibrate-x"),calibrateY:s.data(this.element,"calibrate-y"),invertX:s.data(this.element,"invert-x"),invertY:s.data(this.element,"invert-y"),limitX:s.data(this.element,"limit-x"),limitY:s.data(this.element,"limit-y"),scalarX:s.data(this.element,"scalar-x"),scalarY:s.data(this.element,"scalar-y"),frictionX:s.data(this.element,"friction-x"),frictionY:s.data(this.element,"friction-y"),originX:s.data(this.element,"origin-x"),originY:s.data(this.element,"origin-y"),pointerEvents:s.data(this.element,"pointer-events"),precision:s.data(this.element,"precision"),relativeInput:s.data(this.element,"relative-input"),clipRelativeInput:s.data(this.element,"clip-relative-input"),hoverOnly:s.data(this.element,"hover-only"),inputElement:document.querySelector(s.data(this.element,"input-element")),selector:s.data(this.element,"selector")};for(var o in n)null===n[o]&&delete n[o];a(this,c,n,i),this.inputElement||(this.inputElement=this.element),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depthsX=[],this.depthsY=[],this.raf=null,this.bounds=null,this.elementPositionX=0,this.elementPositionY=0,this.elementWidth=0,this.elementHeight=0,this.elementCenterX=0,this.elementCenterY=0,this.elementRangeX=0,this.elementRangeY=0,this.calibrationX=0,this.calibrationY=0,this.inputX=0,this.inputY=0,this.motionX=0,this.motionY=0,this.velocityX=0,this.velocityY=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onDeviceMotion=this.onDeviceMotion.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onMotionTimer=this.onMotionTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.windowWidth=null,this.windowHeight=null,this.windowCenterX=null,this.windowCenterY=null,this.windowRadiusX=null,this.windowRadiusY=null,this.portrait=!1,this.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),this.motionSupport=!!window.DeviceMotionEvent&&!this.desktop,this.orientationSupport=!!window.DeviceOrientationEvent&&!this.desktop,this.orientationStatus=0,this.motionStatus=0,this.initialise()}return n(e,[{key:"initialise",value:function(){void 0===this.transform2DSupport&&(this.transform2DSupport=s.transformSupport("2D"),this.transform3DSupport=s.transformSupport("3D")),this.transform3DSupport&&s.accelerate(this.element),"static"===window.getComputedStyle(this.element).getPropertyValue("position")&&(this.element.style.position="relative"),this.pointerEvents||(this.element.style.pointerEvents="none"),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)}},{key:"doReadyCallback",value:function(){this.onReady&&this.onReady()}},{key:"updateLayers",value:function(){this.selector?this.layers=this.element.querySelectorAll(this.selector):this.layers=this.element.children,this.layers.length||console.warn("ParallaxJS: Your scene does not have any layers."),this.depthsX=[],this.depthsY=[];for(var e=0;e<this.layers.length;e++){var t=this.layers[e];this.transform3DSupport&&s.accelerate(t),t.style.position=e?"absolute":"relative",t.style.display="block",t.style.left=0,t.style.top=0;var i=s.data(t,"depth")||0;this.depthsX.push(s.data(t,"depth-x")||i),this.depthsY.push(s.data(t,"depth-y")||i)}}},{key:"updateDimensions",value:function(){this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.windowCenterX=this.windowWidth*this.originX,this.windowCenterY=this.windowHeight*this.originY,this.windowRadiusX=Math.max(this.windowCenterX,this.windowWidth-this.windowCenterX),this.windowRadiusY=Math.max(this.windowCenterY,this.windowHeight-this.windowCenterY)}},{key:"updateBounds",value:function(){this.bounds=this.inputElement.getBoundingClientRect(),this.elementPositionX=this.bounds.left,this.elementPositionY=this.bounds.top,this.elementWidth=this.bounds.width,this.elementHeight=this.bounds.height,this.elementCenterX=this.elementWidth*this.originX,this.elementCenterY=this.elementHeight*this.originY,this.elementRangeX=Math.max(this.elementCenterX,this.elementWidth-this.elementCenterX),this.elementRangeY=Math.max(this.elementCenterY,this.elementHeight-this.elementCenterY)}},{key:"queueCalibration",value:function(e){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,e)}},{key:"enable",value:function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=!1,window.addEventListener("deviceorientation",this.onDeviceOrientation),this.detectionTimer=setTimeout(this.onOrientationTimer,this.supportDelay)):this.motionSupport?(this.portrait=!1,window.addEventListener("devicemotion",this.onDeviceMotion),this.detectionTimer=setTimeout(this.onMotionTimer,this.supportDelay)):(this.calibrationX=0,this.calibrationY=0,this.portrait=!1,window.addEventListener("mousemove",this.onMouseMove),this.doReadyCallback()),window.addEventListener("resize",this.onWindowResize),this.raf=o(this.onAnimationFrame))}},{key:"disable",value:function(){this.enabled&&(this.enabled=!1,this.orientationSupport?window.removeEventListener("deviceorientation",this.onDeviceOrientation):this.motionSupport?window.removeEventListener("devicemotion",this.onDeviceMotion):window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("resize",this.onWindowResize),o.cancel(this.raf))}},{key:"calibrate",value:function(e,t){this.calibrateX=void 0===e?this.calibrateX:e,this.calibrateY=void 0===t?this.calibrateY:t}},{key:"invert",value:function(e,t){this.invertX=void 0===e?this.invertX:e,this.invertY=void 0===t?this.invertY:t}},{key:"friction",value:function(e,t){this.frictionX=void 0===e?this.frictionX:e,this.frictionY=void 0===t?this.frictionY:t}},{key:"scalar",value:function(e,t){this.scalarX=void 0===e?this.scalarX:e,this.scalarY=void 0===t?this.scalarY:t}},{key:"limit",value:function(e,t){this.limitX=void 0===e?this.limitX:e,this.limitY=void 0===t?this.limitY:t}},{key:"origin",value:function(e,t){this.originX=void 0===e?this.originX:e,this.originY=void 0===t?this.originY:t}},{key:"setInputElement",value:function(e){this.inputElement=e,this.updateDimensions()}},{key:"setPosition",value:function(e,t,i){t=t.toFixed(this.precision)+"px",i=i.toFixed(this.precision)+"px",this.transform3DSupport?s.css(e,"transform","translate3d("+t+","+i+",0)"):this.transform2DSupport?s.css(e,"transform","translate("+t+","+i+")"):(e.style.left=t,e.style.top=i)}},{key:"onOrientationTimer",value:function(){this.orientationSupport&&0===this.orientationStatus?(this.disable(),this.orientationSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onMotionTimer",value:function(){this.motionSupport&&0===this.motionStatus?(this.disable(),this.motionSupport=!1,this.enable()):this.doReadyCallback()}},{key:"onCalibrationTimer",value:function(){this.calibrationFlag=!0}},{key:"onWindowResize",value:function(){this.updateDimensions()}},{key:"onAnimationFrame",value:function(){this.updateBounds();var e=this.inputX-this.calibrationX,t=this.inputY-this.calibrationY;(Math.abs(e)>this.calibrationThreshold||Math.abs(t)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.motionX=this.calibrateX?t:this.inputY,this.motionY=this.calibrateY?e:this.inputX):(this.motionX=this.calibrateX?e:this.inputX,this.motionY=this.calibrateY?t:this.inputY),this.motionX*=this.elementWidth*(this.scalarX/100),this.motionY*=this.elementHeight*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.motionX=s.clamp(this.motionX,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.motionY=s.clamp(this.motionY,-this.limitY,this.limitY)),this.velocityX+=(this.motionX-this.velocityX)*this.frictionX,this.velocityY+=(this.motionY-this.velocityY)*this.frictionY;for(var i=0;i<this.layers.length;i++){var n=this.layers[i],r=this.depthsX[i],a=this.depthsY[i],l=this.velocityX*(r*(this.invertX?-1:1)),c=this.velocityY*(a*(this.invertY?-1:1));this.setPosition(n,l,c)}this.raf=o(this.onAnimationFrame)}},{key:"rotate",value:function(e,t){var i=(e||0)/l,n=(t||0)/l,r=this.windowHeight>this.windowWidth;this.portrait!==r&&(this.portrait=r,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.calibrationX=i,this.calibrationY=n),this.inputX=i,this.inputY=n}},{key:"onDeviceOrientation",value:function(e){var t=e.beta,i=e.gamma;null!==t&&null!==i&&(this.orientationStatus=1,this.rotate(t,i))}},{key:"onDeviceMotion",value:function(e){var t=e.rotationRate.beta,i=e.rotationRate.gamma;null!==t&&null!==i&&(this.motionStatus=1,this.rotate(t,i))}},{key:"onMouseMove",value:function(e){var t=e.clientX,i=e.clientY;if(this.hoverOnly&&(t<this.elementPositionX||t>this.elementPositionX+this.elementWidth||i<this.elementPositionY||i>this.elementPositionY+this.elementHeight))return this.inputX=0,void(this.inputY=0);this.relativeInput?(this.clipRelativeInput&&(t=Math.max(t,this.elementPositionX),t=Math.min(t,this.elementPositionX+this.elementWidth),i=Math.max(i,this.elementPositionY),i=Math.min(i,this.elementPositionY+this.elementHeight)),this.elementRangeX&&this.elementRangeY&&(this.inputX=(t-this.elementPositionX-this.elementCenterX)/this.elementRangeX,this.inputY=(i-this.elementPositionY-this.elementCenterY)/this.elementRangeY)):this.windowRadiusX&&this.windowRadiusY&&(this.inputX=(t-this.windowCenterX)/this.windowRadiusX,this.inputY=(i-this.windowCenterY)/this.windowRadiusY)}},{key:"destroy",value:function(){this.disable(),clearTimeout(this.calibrationTimer),clearTimeout(this.detectionTimer),this.element.removeAttribute("style");for(var e=0;e<this.layers.length;e++)this.layers[e].removeAttribute("style");delete this.element,delete this.layers}},{key:"version",value:function(){return"3.1.0"}}]),e}();t.exports=h},{"object-assign":1,raf:4}]},{},[5])(5)},287:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(7294),r=i(5444),o=i(6802),a={colors:["azure-light","indigo-light","pink-light","green-light"],getRndColor:function(){return this.colors[Math.floor(Math.random()*this.colors.length)]}},s=function(e){var t=e.nodeObj,i=e.postType,s=e.cardGradient,l=t.frontmatter,c=l.title,h=l.description,u=l.path,m=l.tags,d=l.featuredImage,p=l.featuredImageAlt,f=(0,o.d)(d);return n.createElement("li",null,n.createElement(r.Link,{to:u,title:h,className:"list-item "+(s?"card-gradient-"+s:"")},m&&n.createElement("div",{className:"tag-list"},m.map((function(e,t){return n.createElement("span",{className:"tag-list_item "+a.getRndColor(e),key:i+"-tag"+t},e)}))),d&&n.createElement(o.G,{loading:"lazy",className:"list-item_image",image:f,alt:p,quality:"100"}),n.createElement("div",{className:"list-item_info"},n.createElement("h3",{className:"h4 list-item_title"},c),n.createElement("p",{className:"list-item_text"},h))))},l=function(e){var t=e.title,i=e.linkTo,o=e.linkText;return n.createElement("div",{className:"section-caption"},n.createElement("h2",null,t),n.createElement(r.Link,{to:i},o,n.createElement("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 16 16","aria-hidden":"true",focusable:"false",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{fillRule:"evenodd",d:"M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z",clipRule:"evenodd"}),n.createElement("path",{fillRule:"evenodd",d:"M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z",clipRule:"evenodd"}))))},c=function(e){var t=e.title,i=e.query,r=e.postType,o=e.tagNameFilter,a=e.linkText;return n.createElement("div",{className:r+"-list-container posts-list-container"},t&&n.createElement(l,{title:t,linkTo:"/"+r,linkText:a}),n.createElement("ul",{className:"list"},i.edges.map((function(e,t){var i=e.node,a=i.frontmatter.tags;return o?a.filter((function(e){return e===o})).map((function(){return n.createElement(s,{nodeObj:i,postType:r,cardGradient:t+1,key:r+"ListItem"+t})})):n.createElement(s,{nodeObj:i,postType:r,cardGradient:t+1,key:r+"ListItem"+t})}))))}},7704:function(e,t,i){"use strict";i.r(t);var n=i(7294),r=i(9044),o=i(1248),a=i(5444),s=i(6802),l=i(287),c=i(2661),h=i(9869),u=i(7766),m=i.n(u);t.default=function(){(0,n.useEffect)((function(){var e=document.querySelector(".particles");new(m())(e,{invertX:!1,invertY:!1,hoverOnly:!0,clipRelativeInput:!0})}),[]);var e=(0,a.useStaticQuery)("3756445657");return n.createElement(r.Z,null,n.createElement(o.Z,null),n.createElement("section",{className:"hero-section"},n.createElement("div",{className:"particles"},n.createElement("svg",{"data-depth":"0.25",width:"68",height:"68",viewBox:"0 0 68 68",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M0 34C0 27.54 27.54 0 34 0C40.46 0 68 27.54 68 34C68 40.46 40.46 68 34 68C27.54 68 0 40.46 0 34Z",fill:"#74C69D"})),n.createElement("svg",{"data-depth":"0.1",width:"84",height:"84",viewBox:"0 0 84 84",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M6.77372 48.3952C0.47416 15.9868 2.43934 13.0733 34.8478 6.7737C67.2562 0.474146 70.1697 2.43933 76.4692 34.8477C82.7688 67.2562 80.8036 70.1697 48.3952 76.4692C15.9868 82.7688 13.0733 80.8036 6.77372 48.3952Z",fill:"#FADB5F"})),n.createElement("svg",{"data-depth":"0.2",width:"145",height:"145",viewBox:"0 0 145 145",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M16.9575 55.4657C20.5186 43.8179 77.7329 13.3965 89.3807 16.9576C101.029 20.5186 131.45 77.733 127.889 89.3808C124.328 101.029 67.1134 131.45 55.4656 127.889C43.8178 124.328 13.3964 67.1135 16.9575 55.4657Z",fill:"#7242F8"})),n.createElement("svg",{"data-depth":"0.5",width:"83",height:"83",viewBox:"0 0 83 83",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M46.1399 11.2325C48.8509 11.6631 71.9076 43.429 71.4769 46.14C71.0463 48.851 39.2804 71.9077 36.5694 71.477C33.8584 71.0463 10.8017 39.2805 11.2324 36.5694C11.6631 33.8584 43.4289 10.8018 46.1399 11.2325Z",fill:"#1085FA"})),n.createElement("svg",{"data-depth":"0.14",width:"100",height:"100",viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M21.3646 28.3516C42.729 0 42.729 0 71.0806 21.3644C99.4321 42.7289 99.4321 42.7289 78.0677 71.0804C56.7033 99.432 56.7033 99.432 28.3517 78.0676C0.00013572 56.7031 0.00013572 56.7031 21.3646 28.3516Z",fill:"#F34F63"}))),n.createElement("div",{className:"wrapper"},n.createElement("div",{className:"hero-section_wrapper"},n.createElement("h1",{className:"hero-title"},"Привет, я Женя ",n.createElement("span",null,"👋")),n.createElement("div",{className:"hero-description"},n.createElement("p",null,n.createElement("strong",null,"Веб-разработчик")," с двухлетним стажем, в основном работаю в аутсорсе.",n.createElement("strong",null," Верстаю сайты")," и натягиваю на ",n.createElement("b",null,"Wordpress :)")),n.createElement("p",null,"В настоящее время доступен для найма, не стесняйтесь связаться со мной, чтобы обсудить детали Вашего проекта.")),n.createElement(h.P,{to:"/about#write-me",className:"button",stripHash:!0,title:"Напишите мне!"},"Cвязаться со мной"),n.createElement("ul",{className:"soc-links"},c.$&&c.$.map((function(e,t){return n.createElement("li",{key:"socialitems-"+t},n.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer"},e.icon))})))))),n.createElement("section",{className:"about-section"},n.createElement("div",{className:"wrapper"},n.createElement("div",{className:"about-section_wrapper"},n.createElement("div",{className:"about-section_image"},n.createElement(s.S,{loading:"lazy",layout:"fullWidth",src:"../images/me.jpg",alt:"It`s me :)",__imageData:i(6360)}),n.createElement("ul",{className:"soc-links"},c.$&&c.$.map((function(e,t){return n.createElement("li",{key:"socialitems-"+t},n.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer"},e.icon))})))),n.createElement("div",{className:"about-section_text"},n.createElement("h4",null,"Мои услуги включают в себя:"),n.createElement("ul",null,n.createElement("li",null,"Вёрстка сайтов",n.createElement("ul",null,n.createElement("li",null,"на Tilda, лендинги на ",n.createElement("a",{href:"https://zero.tilda.cc/ru",target:"_blank",rel:"noreferrer"},"Zero Block")),n.createElement("li",null,"интеграция вёрстки в ",n.createElement("a",{href:"https://getcourse.ru/",target:"_blank",rel:"noreferrer"},"GetCourse")))),n.createElement("li",null,"Натяжка вёрстки на CMS ",n.createElement("a",{href:"https://wordpress.org",target:"_blank",rel:"noreferrer"},"WordPress")),n.createElement("li",null,"Различные правки по верстке и JavaScript"),n.createElement("li",null,"Различные правки на сайтах")),n.createElement("h4",null,"Я работаю с такими технологиями:"),n.createElement("ul",null,n.createElement("li",null,"HTML/CSS, SASS/SCSS, grid/flexbox"),n.createElement("li",null,"JavaScript, jQuery и плагины к нему"),n.createElement("li",null,"Tilda, WordPress, React, Gatsby, GetCourse"),n.createElement("li",null,"Adobe Photoshop, Figma, Avocode"),n.createElement("li",null,"Изучаю React, Gatsby")))),n.createElement(l.Z,{title:"Последние работы",postType:"projects",query:e.projects,linkText:"Все проекты"}),n.createElement(l.Z,{title:"Последние заметки",postType:"notes",query:e.notes,linkText:"Все заметки"}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-5c5334d1ea37fc5a88b7.js.map