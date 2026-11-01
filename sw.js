const CACHE_NAME = 'dadya-igor-arcade-v2';
const APP_FILES = ['./','./index.html','./manifest.webmanifest','./assets/app-icon.svg','./assets/batumi-pixel-waterfront.png','./assets/batumi-pixel-night.png','./assets/dadya-igor.png','./assets/dadya-igor-sixseven-v2.png','./assets/sarajishvili-bottle.png','./assets/batumi-dog.png','./assets/lari-5-pixel.png','./assets/shop-items-pixel.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{const copy=r.clone();caches.open(CACHE_NAME).then(cache=>cache.put(e.request,copy));return r}).catch(()=>caches.match('./index.html'))))});
