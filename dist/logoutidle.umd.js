var __defProp=Object.defineProperty,__hasOwnProp=Object.prototype.hasOwnProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(e,o,t)=>o in e?__defProp(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,__assign=(e,o)=>{for(var t in o||(o={}))__hasOwnProp.call(o,t)&&__defNormalProp(e,t,o[t]);if(__getOwnPropSymbols)for(var t of __getOwnPropSymbols(o))__propIsEnum.call(o,t)&&__defNormalProp(e,t,o[t]);return e};!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(e="undefined"!=typeof globalThis?globalThis:e||self).logoutIdle=o()}(this,(function(){"use strict";function e(e){let o;return function(){let t=this,n=arguments;o&&window.cancelAnimationFrame(o),o=window.requestAnimationFrame((function(){e.apply(t,n)}))}}return o=>{const{inactive:t,reset:n,stop:r,idle:i,debounceTime:s}=__assign(__assign({},{inactive:()=>{},reset:()=>{},stop:()=>{},idle:9e5,debounceTime:1e3}),o);let l,a=[];const d=()=>{t(),clearInterval(u),clearTimeout(l),document.removeEventListener("mousemove",e),document.removeEventListener("keypress",m),window.removeEventListener("load",e)},p=()=>{clearTimeout(l),r()?d():(l=setTimeout(d,i),a.length>0&&(n(),a=[]))},u=()=>{0===a.length&&a.push("Q")},m=()=>{n(),a=[]};return window.addEventListener("load",e(p)),document.addEventListener("mousemove",e(p)),document.addEventListener("keypress",m),setInterval(u,s),!0}}));
