import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as p,i as C}from"./assets/vendor-77e16229.js";const b="/goit-js-hw-10/assets/bi_x-octagon-80ee8afe.svg";function o(t){return String(t).padStart(2,"0")}const x={title:"Error",titleColor:"rgba(255, 255, 255, 1)",titleSize:"16px",message:"Please choose a date in the future",messageColor:"rgba(255, 255, 255, 1)",background:"rgba(239, 64, 64, 1)",iconUrl:b,position:"topRight",progressBarColor:"rgba(255, 255, 255, 1)"};let m=null;const s=document.querySelector('[type="button"]'),r=document.querySelector(".timer"),S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){m=t[0],m<=new Date?(C.error(x),s.disabled=!0):s.disabled=!1}};p("#datetime-picker",S);s.addEventListener("click",()=>{s.disabled=!0,v()});function v(){const e=r.querySelector("[data-days]"),a=r.querySelector("[data-hours]"),c=r.querySelector("[data-minutes]"),i=r.querySelector("[data-seconds]"),u=setInterval(d,1e3);function d(){const l=new Date().getTime(),n=m-l;if(n<=0){clearInterval(u),e.textContent="00",a.textContent="00",c.textContent="00",i.textContent="00";return}const{days:f,hours:h,minutes:y,seconds:g}=D(n);e.textContent=o(f),a.textContent=o(h),c.textContent=o(y),i.textContent=o(g)}}function D(t){const u=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),n=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:d,minutes:l,seconds:n}}
//# sourceMappingURL=commonHelpers.js.map
