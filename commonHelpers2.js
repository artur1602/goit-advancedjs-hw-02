import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as m,i as f}from"./assets/vendor-77e16229.js";const r=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start"),h=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),y=document.querySelector("[data-minutes]"),p=document.querySelector("[data-seconds]");o.disabled=!0;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(n){n[0]<Date.now()?f.error({title:"Error",message:"Please choose a date in the future"}):o.disabled=!1}};o.addEventListener("click",q);function q(){o.disabled=!0,r.disabled=!0;const n=setInterval(()=>{const s=Date.now(),a=new Date(r.value)-s;a<1e3&&clearInterval(n);function c(e){const d=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:u,seconds:l}}const t=c(a);h.textContent=t.days.toString().padStart(2,0),S.textContent=t.hours.toString().padStart(2,0),y.textContent=t.minutes.toString().padStart(2,0),p.textContent=t.seconds.toString().padStart(2,0)},1e3)}m(r,D);
//# sourceMappingURL=commonHelpers2.js.map
