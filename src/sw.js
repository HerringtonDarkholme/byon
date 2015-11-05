importScripts('/src/cache-polyfill.js')

self.addEventListener('install', function(e) {
  console.log('installing service worker!')
  e.waitUntil(
      caches.open('byon').then(function(cache) {
        console.log('opened cache')
        cache.addAll(['/src/'])
      })
  )
})

self.addEventListener('fetch', function(e) {
  console.groupCollapsed(e.request.url)
  console.log('intercept')

  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response)  {
        console.log('cache hit')
        console.groupEnd()
        return response
      }
      console.log('cache miss')
      var fetchRequest = e.request.clone()
      return fetch(fetchRequest).then(function(response) {
        console.log('real fetched')
        if (!response || response.status !== 200 || response.type !== 'basic') {
          console.log('non cachable')
          console.groupEnd()
          return response
        }
        var responseToCache = response.clone()
        caches.open('byon').then(function(cache) {
          console.log('cached')
          cache.put(e.request, responseToCache)
        })
        console.groupEnd()
        return response
      })
    })
  )
})
