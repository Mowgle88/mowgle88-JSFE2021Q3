if(!self.define){let e,n={};const i=(i,r)=>(i=new URL(i+".js",r).href,n[i]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=n,document.head.appendChild(e)}else e=i,importScripts(i),n()})).then((()=>{let e=n[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let t={};const o=e=>i(e,s),c={module:{uri:s},exports:t,require:o};n[s]=Promise.all(r.map((e=>c[e]||o(e)))).then((e=>(l(...e),t)))}}define(["./workbox-791ba835"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"182bf0d045f1f6034e2d.png",revision:null},{url:"392911e7d052ed6df5b2.svg",revision:null},{url:"3aea63c76b1752d3ca7b.ttf",revision:null},{url:"479a08e91478158cb8c6.png",revision:null},{url:"5b7746578ce017174bdb.ttf",revision:null},{url:"b9a7cc3977f9b037ab4d.ttf",revision:null},{url:"fa960c139a59e294b7fc.png",revision:null},{url:"fed45f7038d32a910a1b.ttf",revision:null},{url:"index.html",revision:"074a78cc29f5af33bd950a2305b0a29e"},{url:"main.css",revision:"a97046a49c22a816b4c2053757cc796d"},{url:"main.js",revision:"7a51ac56c836789863d018527ca23e23"}],{})}));
