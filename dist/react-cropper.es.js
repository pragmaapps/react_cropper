import e,{useRef as r,useEffect as o}from"react";import t from"cropperjs";var n=function(){return n=Object.assign||function(e){for(var r,o=1,t=arguments.length;o<t;o++)for(var n in r=arguments[o])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},n.apply(this,arguments)};function a(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]])}return o}var c=["aspectRatio","autoCrop","autoCropArea","background","center","checkCrossOrigin","checkOrientation","cropBoxMovable","cropBoxResizable","data","dragMode","guides","highlight","initialAspectRatio","minCanvasHeight","minCanvasWidth","minContainerHeight","minContainerWidth","minCropBoxHeight","minCropBoxWidth","modal","movable","preview","responsive","restore","rotatable","scalable","toggleDragModeOnDblclick","viewMode","wheelZoomRatio","zoomOnTouch","zoomOnWheel","zoomable","cropstart","cropmove","cropend","crop","zoom","ready"],i={opacity:0,maxWidth:"100%"},l=e.forwardRef((function(l,s){var u=a(l,[]),p=u.dragMode,d=void 0===p?"crop":p,v=u.src,f=u.style,m=u.className;u.crossOrigin;var y=u.scaleX,b=u.scaleY,g=u.enable,h=u.zoomTo,O=u.rotateTo;u.alt;var T=u.ready,z=u.onInitialized,C=a(u,["dragMode","src","style","className","crossOrigin","scaleX","scaleY","enable","zoomTo","rotateTo","alt","ready","onInitialized"]),w={scaleY:b,scaleX:y,enable:g,zoomTo:h,rotateTo:O},x=function(){for(var o=[],t=0;t<arguments.length;t++)o[t]=arguments[t];var n=r(null);return e.useEffect((function(){o.forEach((function(e){e&&("function"==typeof e?e(n.current):e.current=n.current)}))}),[o]),n}(s,r(null));o((function(){var e;(null===(e=x.current)||void 0===e?void 0:e.cropper)&&"number"==typeof h&&x.current.cropper.zoomTo(h)}),[u.zoomTo]),o((function(){var e;(null===(e=x.current)||void 0===e?void 0:e.cropper)&&void 0!==v&&x.current.cropper.reset().clear().replace(v)}),[v]),o((function(){if(null!==x.current){var e=new t(x.current,n(n({dragMode:d},C),{ready:function(e){null!==e.currentTarget&&function(e,r){void 0===r&&(r={});var o=r.enable,t=void 0===o||o,n=r.scaleX,a=void 0===n?1:n,c=r.scaleY,i=void 0===c?1:c,l=r.zoomTo,s=void 0===l?0:l,u=r.rotateTo;t?e.enable():e.disable(),e.scaleX(a),e.scaleY(i),void 0!==u&&e.rotateTo(u),s>0&&e.zoomTo(s)}(e.currentTarget.cropper,w),T&&T(e)}}));z&&z(e)}return function(){var e,r;null===(r=null===(e=x.current)||void 0===e?void 0:e.cropper)||void 0===r||r.destroy()}}),[x]);var j=function(e){return c.reduce((function(e,r){var o=e,t=r;return o[t],a(o,["symbol"==typeof t?t:t+""])}),e)}(n({},C));return e.createElement("div",{style:f,className:m},e.createElement("canvas",n({},j,{style:i,ref:x})))}));export{l as Cropper,l as default};