// Registering Service Worker
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//       navigator.serviceWorker.register('js/sw/index.js').then(function(registration) {
//             // Registration was successful
//             console.log('Service Worker registration successful with scope:', registration);
//         }, function(err) {
//             // registration failed :(
//             console.log('ServiceWorker registration failed:', err);
//         });
//     });
//   }


self.addEventListener('install', function(event) {
    // Perform install steps

    var CACHE_NAME = 'my-site-cache-v1';
    var urlsToCache = [
        '/',
        'css/styles.css',
        'js/main.js',
        'img/1.jpg'
    ];

    self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
    });



  });

  