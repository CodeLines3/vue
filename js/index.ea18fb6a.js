export function __vite_legacy_guard(){import("data:text/javascript,")}import{bb as e,bK as r,a$ as o,bL as t}from"./vendor.4fb583f8.js";import{_ as s}from"./jspdf.27ef67d6.js";import{c as n,a}from"./vue-router.9ba8e1b7.js";import{U as i}from"./vue-echarts.1008b967.js";import{u as c,a as u,b as f,c as p,d as l,e as d}from"./echarts.e4b559a0.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();var m=(e,r)=>{const o=e.__vccOpts||e;for(const[t,s]of r)o[t]=s;return o};var b=m({},[["render",function(t,s){const n=r("router-view");return o(),e(n)}]]);const v=[{path:"/",component:()=>s((()=>import("./home.7c00b8f2.js")),["js/home.7c00b8f2.js","js/element-plus.030157d8.js","js/vendor.4fb583f8.js","js/gojs.352bf312.js","js/echarts.e4b559a0.js","js/html2canvas.59c11ffa.js","js/jspdf.27ef67d6.js","js/rxjs.1a2b7fc5.js","js/vue-router.9ba8e1b7.js","js/vue-echarts.1008b967.js"])}],_=n({history:a("/vue/"),routes:v});_.beforeEach(((e,r,o)=>{o()})),_.afterEach(((e,r)=>{})),c([u,f,p,l,d]);var h={install(e){e.component("v-chart",i)}};t(b).use(h).use(_).mount("#app");export{m as _};
