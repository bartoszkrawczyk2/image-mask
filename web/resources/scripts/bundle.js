!function t(e,n,o){function i(a,l){if(!n[a]){if(!e[a]){var u="function"==typeof require&&require;if(!l&&u)return u(a,!0);if(r)return r(a,!0);var h=new Error("Cannot find module '"+a+"'");throw h.code="MODULE_NOT_FOUND",h}var s=n[a]={exports:{}};e[a][0].call(s.exports,function(t){var n=e[a][1][t];return i(n?n:t)},s,s.exports,t,e,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var i=t("./modules/imagemask"),r=o(i),a=new r["default"](document.getElementById("img"));img.remove(),document.body.appendChild(a),a.mask([[0,.95],[.8,.95,1,.7],[1,1],[0,1]])},{"./modules/imagemask":2}],2:[function(t,e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t("blueimp-canvas-to-blob"),n["default"]=function(){var t=arguments.length<=0||void 0===arguments[0]?new Image:arguments[0],e=!(arguments.length<=1||void 0===arguments[1])&&arguments[1],n=document.createElement("canvas"),o=n.getContext("2d");return n.width=t.width,n.height=t.height,o.drawImage(t,0,0),o.fillStyle="#000",n.mask=function(){var n=arguments.length<=0||void 0===arguments[0]?[]:arguments[0];o.globalCompositeOperation="source-over",o.drawImage(t,0,0),o.globalCompositeOperation="destination-out",o.beginPath(),o.moveTo(e?n[0][0]:n[0][0]*this.width,e?n[0][1]:n[0][1]*this.height);for(var i=1;i<n.length;i++)6===n[i].length?o.bezierCurveTo(e?n[i][0]:n[i][0]*this.width,e?n[i][1]:n[i][1]*this.height,e?n[i][2]:n[i][2]*this.width,e?n[i][3]:n[i][3]*this.height,e?n[i][4]:n[i][2]*this.width,e?n[i][5]:n[i][3]*this.height):4===n[i].length?o.quadraticCurveTo(e?n[i][0]:n[i][0]*this.width,e?n[i][1]:n[i][1]*this.height,e?n[i][2]:n[i][2]*this.width,e?n[i][3]:n[i][3]*this.height):o.lineTo(e?n[i][0]:n[i][0]*this.width,e?n[i][1]:n[i][1]*this.height);return o.closePath(),o.fill(),this},n.getImg=function(){var t=this,e=arguments.length<=0||void 0===arguments[0]?function(){}:arguments[0];n.toBlob(function(n){var o=new Image;o.src=URL.createObjectURL(n),e.call(t,o)})},n},e.exports=n["default"]},{"blueimp-canvas-to-blob":3}],3:[function(t,e,n){!function(t){"use strict";var n=t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype,o=t.Blob&&function(){try{return Boolean(new Blob)}catch(t){return!1}}(),i=o&&t.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(t){return!1}}(),r=t.BlobBuilder||t.WebKitBlobBuilder||t.MozBlobBuilder||t.MSBlobBuilder,a=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,l=(o||r)&&t.atob&&t.ArrayBuffer&&t.Uint8Array&&function(t){var e,n,l,u,h,s,d,c,f;if(e=t.match(a),!e)throw new Error("invalid data URI");for(n=e[2]?e[1]:"text/plain"+(e[3]||";charset=US-ASCII"),l=!!e[4],u=t.slice(e[0].length),h=l?atob(u):decodeURIComponent(u),s=new ArrayBuffer(h.length),d=new Uint8Array(s),c=0;c<h.length;c+=1)d[c]=h.charCodeAt(c);return o?new Blob([i?d:s],{type:n}):(f=new r,f.append(s),f.getBlob(n))};t.HTMLCanvasElement&&!n.toBlob&&(n.mozGetAsFile?n.toBlob=function(t,e,o){t(o&&n.toDataURL&&l?l(this.toDataURL(e,o)):this.mozGetAsFile("blob",e))}:n.toDataURL&&l&&(n.toBlob=function(t,e,n){t(l(this.toDataURL(e,n)))})),"function"==typeof define&&define.amd?define(function(){return l}):"object"==typeof e&&e.exports?e.exports=l:t.dataURLtoBlob=l}(window)},{}]},{},[1]);
//# sourceMappingURL=bundle.js.map