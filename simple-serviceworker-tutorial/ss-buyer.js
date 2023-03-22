self.skipWaiting()

self.addEventListener('install', event => {
  event.waitUntil(
    console.log('I AM REGISTERED BUYER LOGIN !!')
  );
});

// self.addEventListener('activate', event => {
//   // event.waitUntil(clients.claim());
// });

self.onmessage = function(message) {
  // let sum = 0;
  // for(let i = 0; i < 1000000000; i++ ) {
  //   sum += i
  // }
  console.log(`${message.data} - ss-buyer`)
}

self.addEventListener("fetch", (event) => {
  // alert('ok')
  // event.respondWith(cacheFirst(event.request));
});