'use strict';
self.addEventListener('install', (event) => {});
self.addEventListener('activate', (event) => {});
self.addEventListener('fetch', (event) => {});
importScripts("sw-toolbox.js");
toolbox.precache(['index.php','/css/main.bundle.css']);
toolbox.router.get("/images/*", toolbox.cacheFirst); 
toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});
