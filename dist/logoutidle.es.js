var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,o=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,i=(e,i)=>{for(var a in i||(i={}))t.call(i,a)&&o(e,a,i[a]);if(n)for(var a of n(i))r.call(i,a)&&o(e,a,i[a]);return e};function a(e){let t;return function(){let n=this,r=arguments;t&&window.cancelAnimationFrame(t),t=window.requestAnimationFrame((function(){e.apply(n,r)}))}}export default e=>{const{inactive:t,reset:n,stop:r,idle:o,debounceTime:l}=i(i({},{inactive:()=>{},reset:()=>{},stop:()=>{},idle:9e5,debounceTime:1e3}),e);let s,c=[];const u=()=>{t(),clearInterval(d),clearTimeout(s),document.removeEventListener("mousemove",a),document.removeEventListener("keypress",v),window.removeEventListener("load",a)},m=()=>{clearTimeout(s),r()?u():(s=setTimeout(u,o),c.length>0&&(n(),c=[]))},d=()=>{0===c.length&&c.push("Q")},v=()=>{n(),c=[]};return window.addEventListener("load",a(m)),document.addEventListener("mousemove",a(m)),document.addEventListener("keypress",v),setInterval(d,l),!0};