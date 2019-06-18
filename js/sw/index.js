
// self.addEventListener('install', function(event) {
//   console('hello from index.js in sw');

//   });

// self.addEventListener('activate', function(event) {
//   event.waitUntil(
//     // TODO: remove the old cache
//     // caches.delete('wittr-static-v1').then(function(cache){

//     // })
//     console.log('hello')
//   );
// });



// self.addEventListener('install', function(event) {
//   event.waitUntil(
//       // TODO: change the site's theme, eg swap the vars in public/scss/_theme.scss
//       // Ensure at least $primary-color changes
//       // TODO: change cache name to 'wittr-static-v2'
//     caches.open('restaurant-cache-v1').then(function(cache) {
//       return cache.addAll([
//         '/',
//         'js/main.js',
//         'js/restaurant_info.js',
//         'img/1.jpg',
//         'img/2.jpg',
//         'img/3.jpg',
//         'img/4.jpg',
//         'img/5.jpg',
//         'img/6.jpg',
//         'img/7.jpg',
//         'img/8.jpg',
//         'img/9.jpg',
//         'img/10.jpg',
//         'css/styles.css'
//         ]);
//       })
//     );   
//    });
