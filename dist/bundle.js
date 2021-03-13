(()=>{"use strict";const e=function(e){var t=document.getElementById(e),n=document.getElementById("form2-message");t.addEventListener("input",(function(e){var t=e.target.value;e.target.value=t.replace(/[^А-Яа-яЁё ]/g,"").toUpperCase()})),n.addEventListener("input",(function(e){var t=e.target.value;e.target.value=t.replace(/[^А-Яа-яЁё 0-9.,!;:\-_()\?]/g,"").toUpperCase()}))},t=function(e){document.getElementById(e).addEventListener("input",(function(e){var t=!0,n=e.target.value;e.target.value=n.replace(/[^0-9\+]/g,"").replace(/(\+)+/g,(function(e,n){return t?(t=!1,n):""}))}))};function n(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){l=!0,c=e},f:function(){try{i||null==n.return||n.return()}finally{if(l)throw c}}}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const o=function(e){var t=document.getElementById(e),r=document.createElement("div");r.style.cssText="font-size: 2rem",r.style.color="#FFFFFF",t.addEventListener("submit",(function(c){c.preventDefault(),t.appendChild(r);for(var i=Array.from(t.querySelectorAll("input")),l=function(e){var t=i[e].getAttribute("name");if("user_email"===t){if(0===i[e].value.trim().length)throw r.textContent="Заполните email!",new Error("empty email field");i[e].addEventListener("input",(function(t){var n=i[e].value;i[e].value=n.replace(/[^A-Za-z@\-_.!~*']/g,"")}))}else if("user_name"===t&&i[e].value.trim().length<2)throw r.textContent="Длина поля имени - минимум 2 знака",new Error("name field too short (must be minimum 2 chars)")},u=0;u<i.length;u++)l(u);r.textContent="",r.classList.add("loader");var s,d={},m=n(new FormData(t).entries());try{for(m.s();!(s=m.n()).done;){var v=s.value;d[v[0]]=v[1]}}catch(e){m.e(e)}finally{m.f()}a(d,(function(){r.classList.remove("loader"),r.textContent="Спасибо! Мы скоро с вами свяжемся!",o(e)}),(function(e){r.classList.remove("loader"),r.textContent="Что-то пошло не так ...",console.error(e)}))}));var o=function(e){var t,r=n(document.getElementById(e).getElementsByTagName("input"));try{for(r.s();!(t=r.n()).done;)t.value.value=""}catch(e){r.e(e)}finally{r.f()}},a=function(e,t,n){var r=new XMLHttpRequest;r.addEventListener("readystatechange",(function(){4===r.readyState&&(200===r.status?t():n(r.status))})),r.open("POST","./server.php"),r.setRequestHeader("Content-Type","application/json"),r.send(JSON.stringify(e))}};var a,c,i,l,u,s,d,m,v,f,g,p,y,h,E,L,S,b,q,A,I,w=new Date;S=w.setDate(w.getDate()+2),b=document.querySelector("#timer-hours"),q=document.querySelector("#timer-minutes"),A=document.querySelector("#timer-seconds"),I=setInterval((function(){var e,t,n,r,o;e=(new Date(S).getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),n=Math.floor(e/60%60),r=(r=Math.floor(e/60/60))<10?"0"+r:r,n=n<10?"0"+n:n,t=t<10?"0"+t:t,e<=0&&(t=n=r="00"),(o={timeRemaining:e,hours:r,minutes:n,seconds:t}).timeRemaining<=0&&clearInterval(I),b.textContent=o.hours,q.textContent=o.minutes,A.textContent=o.seconds}),1e3),E=document.querySelector("menu"),L=!1,document.addEventListener("click",(function(e){var t=e.target,n=t.closest(".menu"),r=t.classList.contains("close-btn"),o=E.classList,a=t.closest("active-menu");n&&!L?(E.classList.toggle("active-menu"),L=!0):r||"a"===t.tagName.toLowerCase()?(E.classList.toggle("active-menu"),L=!1):a||"MENU"===t.tagName||"active-menu"!==o.toString()||(E.classList.toggle("active-menu"),L=!1)})),function(){var e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=0,r=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;t.forEach((function(t){t.addEventListener("click",(function(){e.style.display="block",r>768?(e.style.opacity=0,requestAnimationFrame(o),n=0):e.style.opacity=1}))})),e.addEventListener("click",(function(t){var n=t.target;n.classList.contains("popup-close")?e.style.display="none":(n=n.closest(".popup-content"))||(e.style.display="none")}));var o=function t(){requestAnimationFrame(t),++n/100<1&&(e.style.opacity=n/100)}}(),document.querySelectorAll("a[href]").forEach((function(e){e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href").substr(1);"close"!==n&&""!==n&&document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}))})),p=document.querySelector(".service-header"),y=p.querySelectorAll(".service-header-tab"),h=document.querySelectorAll(".service-tab"),p.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&y.forEach((function(e,n){e===t&&function(e){for(var t=0;t<h.length;t++)h[t],e===t?(y[t].classList.add("active"),h[t].classList.add("active"),h[t].classList.remove("d-none")):(y[t].classList.remove("active"),h[t].classList.remove("active"),h[t].classList.add("d-none"))}(n)}))})),function(){for(var e=document.querySelectorAll(".portfolio-item").length,t=document.querySelector(".portfolio-dots"),n=0;n<=e-1;n++){var r=document.createElement("li");r.classList.add("dot"),0===n&&r.classList.add("dot-active"),t.append(r)}}(),l=document.querySelectorAll(".portfolio-item"),document.querySelectorAll(".portfolio-btn"),u=document.querySelectorAll(".dot"),s=document.querySelector(".portfolio-content"),d=0,m=function(e,t,n){e[t].classList.remove(n)},v=function(e,t,n){e[t].classList.add(n)},f=function(){m(l,d,"portfolio-item-active"),m(u,d,"dot-active"),++d>=l.length&&(d=0),v(l,d,"portfolio-item-active"),v(u,d,"dot-active")},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;i=setInterval(f,e)},s.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".portfolio-btn, .dot")&&(m(l,d,"portfolio-item-active"),m(u,d,"dot-active"),t.matches("#arrow-right")?d++:t.matches("#arrow-left")?d--:t.matches(".dot")&&u.forEach((function(e,n){e===t&&(d=n)})),d>=l.length&&(d=0),d<0&&(d=l.length-1),v(l,d,"portfolio-item-active"),v(u,d,"dot-active"))})),s.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(i)})),s.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&g()})),g(2e3),function(){var e=document.querySelectorAll(".command__photo");e.forEach((function(e){e.addEventListener("mouseover",(function(e){t(e)}))})),e.forEach((function(e){e.addEventListener("mouseout",(function(e){t(e)}))}));var t=function(e){var t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t}}(),document.querySelectorAll(".calc-item").forEach((function(e){e.addEventListener("input",(function(e){var t=e.target.value;e.target.value=t.replace(/\D/g,"")}))})),e("form1-name"),e("form2-name"),e("form3-name"),document.getElementById("form2-email").addEventListener("input",(function(e){var t=e.target.value;e.target.value=t.replace(/[^A-Za-z@\-_.!~*']/g,"")})),t("form1-phone"),t("form2-phone"),t("form3-phone"),a=document.getElementById("form2"),c=a.querySelectorAll("input"),a.addEventListener("blur",(function(e){var t=document.getElementById("form2-name"),n=document.getElementById("form2-message");t.addEventListener("input",(function(e){var t=e.target.value;e.target.value=t.replace(/[^А-Яа-яЁё ]/g,"").toUpperCase()})),n.addEventListener("input",(function(e){var t=e.target.value;e.target.value=t.replace(/[^А-Яа-яЁё 0-9.,!;:\-_()\?]/g,"").toUpperCase()})),document.getElementById("form2-email").addEventListener("input",(function(e){var t=e.target.value;e.target.value=t.replace(/[^A-Za-z@\-_.!~*']/g,"")})),document.getElementById("form2-phone").addEventListener("input",(function(e){var t=!0,n=e.target.value;e.target.value=n.replace(/[^0-9\+]/g,"").replace(/(\+)+/g,(function(e,n){return t?(t=!1,n):""}))})),c.forEach((function(e){var t=e.value;t=(t=(t=(t=(t=(t=t.replace(/[ ]+/g," ")).replace(/[-]+/g,"-")).replace(/^[ ]+/g,"")).replace(/^[-]+/g,"")).replace(/[ ]+$/g,"")).replace(/[-]+$/g,""),"form2-name"===e.id&&(t=t.substring(0,1).toUpperCase()+t.substring(1).toLowerCase()),e.value=t}))}),!0),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),r=document.querySelector(".calc-square"),o=document.querySelector(".calc-day"),a=document.querySelector(".calc-count"),c=document.getElementById("total"),i=function(){var t=0,i=1,l=1,u=n.options[n.selectedIndex].value/10,s=+r.value;o.value&&o.value<5?l*=2:o.value&&o.value>=5&&o.value<10&&(l*=1.5),a.value>1&&(i+=(a.value-1)/10),u&&s&&(t=u*s*e*i*l),c.textContent=t,setTimeout(function(e){if(e<1e5)for(var n=function(e){setTimeout((function(){return c.textContent=e}),50)},r=0;r<=t;r++)n(r);else c.textContent=e}(t),500)};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&i()}))}(100),o("form1"),o("form2"),o("form3")})();