!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("classnames"),require("noop"),require("react-backdrop")):"function"==typeof define&&define.amd?define(["react","classnames","noop","react-backdrop"],e):"object"==typeof exports?exports.ReactPopup=e(require("react"),require("classnames"),require("noop"),require("react-backdrop")):t.ReactPopup=e(t.react,t.classnames,t.noop,t["react-backdrop"])}(this,function(t,e,r,n){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="/",e(0)}([function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var o=r(2),a=n(o);t.exports=a.default},function(e,r){e.exports=t},function(t,e,r){(function(t){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},p=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}();r(6);var u=r(1),f=r(7),l=n(f),d=r(9),b=r(8),h=(n(b),function(e){function r(t){a(this,r);var e=i(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,t));return e.state={direction:t.direction,visible:!1,hidden:!0},e}return s(r,e),p(r,[{key:"render",value:function(){var e=this,r=this.props,n=r.direction,a=r.children,i=r.className,s=(r.visible,o(r,["direction","children","className","visible"]));return t.createElement("div",{className:"react-popup-container"},t.createElement("div",c({},s,{"data-visible":this.state.visible,onTransitionEnd:this._onTransitionEnd,hidden:this.state.hidden,"data-direction":n,className:(0,l.default)("react-popup",i)}),a),t.createElement(d.ReactBackdrop,{onClick:function(){e.hide()},visible:this.state.visible}))}}]),r}(d.ReactBackdrop));h.propTypes={className:u.PropTypes.string,direction:u.PropTypes.string},h.defaultProps={direction:"bottom"},e.default=h}).call(e,r(1))},function(t,e,r){e=t.exports=r(4)(),e.push([t.id,".react-popup{position:fixed;left:0;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:3;width:100%;color:#333;background:#eee;transition:transform .3s,-webkit-transform .3s}.react-popup[data-direction=top]{top:0}.react-popup[data-direction=top][data-visible=false]{-webkit-transform:translateY(-100%);transform:translateY(-100%)}.react-popup[data-direction=top][data-visible=true]{-webkit-transform:translateY(0);transform:translateY(0)}.react-popup[data-direction=bottom]{bottom:0}.react-popup[data-direction=bottom][data-visible=false]{-webkit-transform:translateY(100%);transform:translateY(100%)}.react-popup[data-direction=bottom][data-visible=true]{-webkit-transform:translateY(0);transform:translateY(0)}.react-popup[data-direction=left]{top:0}.react-popup[data-direction=left][data-visible=false]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.react-popup[data-direction=left][data-visible=true]{-webkit-transform:translateX(0);transform:translateX(0)}.react-popup[data-direction=right]{top:0}.react-popup[data-direction=right][data-visible=false]{-webkit-transform:translateX(100%);transform:translateX(100%)}.react-popup[data-direction=right][data-visible=true]{-webkit-transform:translateX(0);transform:translateX(0)}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var r=this[e];r[2]?t.push("@media "+r[2]+"{"+r[1]+"}"):t.push(r[1])}return t.join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),t.push(i))}},t}},function(t,e,r){function n(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=d[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(p(n.parts[a],e))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(p(n.parts[a],e));d[n.id]={id:n.id,refs:1,parts:i}}}}function o(t){for(var e=[],r={},n=0;n<t.length;n++){var o=t[n],a=o[0],i=o[1],s=o[2],c=o[3],p={css:i,media:s,sourceMap:c};r[a]?r[a].parts.push(p):e.push(r[a]={id:a,parts:[p]})}return e}function a(t,e){var r=v(),n=g[g.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),g.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function i(t){t.parentNode.removeChild(t);var e=g.indexOf(t);e>=0&&g.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",a(t,e),e}function c(t){var e=document.createElement("link");return e.rel="stylesheet",a(t,e),e}function p(t,e){var r,n,o;if(e.singleton){var a=y++;r=m||(m=s(e)),n=u.bind(null,r,a,!1),o=u.bind(null,r,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=c(e),n=l.bind(null,r),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(e),n=f.bind(null,r),o=function(){i(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}function u(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function f(t,e){var r=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}function l(t,e){var r=e.css,n=e.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},b=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},h=b(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=b(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,y=0,g=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var r=o(t);return n(r,e),function(t){for(var a=[],i=0;i<r.length;i++){var s=r[i],c=d[s.id];c.refs--,a.push(c)}if(t){var p=o(t);n(p,e)}for(var i=0;i<a.length;i++){var c=a[i];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete d[c.id]}}}};var x=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}()},function(t,e,r){var n=r(3);"string"==typeof n&&(n=[[t.id,n,""]]);r(5)(n,{});n.locals&&(t.exports=n.locals)},function(t,r){t.exports=e},function(t,e){t.exports=r},function(t,e){t.exports=n}])});
//# sourceMappingURL=react-popup.js.map