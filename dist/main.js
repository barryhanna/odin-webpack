(()=>{var t={679:(t,e,n)=>{t.exports=n.p+"restaurant.jpg"}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.p="",(()=>{"use strict";var t=n(679),e=n.n(t);function r(t){(new Image).src=e(),t.innerHTML=`\n\t\t\t<h2>Home</h2>\n\t\t\t<img src=${e()} alt="">\n\t\t\t<p>Welcome to Tasty Bytes</p>`}const i=function(t){t.innerHTML="\n\t\t\t<h2>About</h2>\n\t\t\t<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta possimus laboriosam excepturi deserunt totam commodi dolore sequi, animi magni est repellat et fugit nisi natus.</p>\n\t\t"},o=function(t){t.innerHTML="\n\t\t\t<h2>Contact</h2>\n\t\t\t<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perferendis pariatur impedit reiciendis repellendus, maiores in aspernatur ex soluta perspiciatis!</p>\n\t\t"},c=document.querySelector("#content"),s=document.querySelector("#home"),a=document.querySelector("#about"),u=document.querySelector("#contact");function p(t){c.innerHTML="",t(c)}s.addEventListener("click",(()=>p(r))),a.addEventListener("click",(()=>p(i))),u.addEventListener("click",(()=>p(o))),s.click()})()})();