if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let d={};const a=e=>c(e,n),f={module:{uri:n},exports:d,require:a};s[n]=Promise.all(i.map((e=>f[e]||a(e)))).then((e=>(r(...e),d)))}}define(["./workbox-4fa9025f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Pdf-Editor-cache"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/canvas-36908b82.js",revision:null},{url:"css/401.css",revision:"f998d7a33315beebe022d41299b588b0"},{url:"css/404.css",revision:"28974868014ebcce41b3949a6fd0010c"},{url:"css/index.css",revision:"372fe3f1771d560b53a6509e6cba2d47"},{url:"css/index2.css",revision:"aebcd42373f2ae73548065a3bbc51bc5"},{url:"index.html",revision:"ce7386fd530b3cce3a48df9c26c07dd5"},{url:"js/401.js",revision:"7ee8d6e5b4ee95a30bf821ea2e1567b9"},{url:"js/404.js",revision:"af8a688572c6e9d46a3c53f91460f3ee"},{url:"js/clipper-lib.js",revision:"e534b32ad99331d2107036c2a15ff7dc"},{url:"js/element-plus.js",revision:"da47ebab0191ecb922181d88cc97f54f"},{url:"js/fabric.js",revision:"9ec3f1f36361e6d2fc64f147d5e08aed"},{url:"js/index.js",revision:"9aa567b799178828f0fc96d8bb9ddcb5"},{url:"js/index3.js",revision:"a0e5582785367c0254370d3a850a4c63"},{url:"js/lodash-es.js",revision:"c6c44fb9cabacee1ca42dce8218b7123"},{url:"js/opentype.js.js",revision:"405e574efcd43585ff116e27d5576e08"},{url:"js/vue.js",revision:"594675befd78c8eb33115292a6db8f17"},{url:"js/workbox-window.prod.es5.js",revision:"824ea3e0af150012551ef7120b3e21a8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.CacheFirst({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.CacheFirst({cacheName:"image-cache",plugins:[]}),"GET")}));
