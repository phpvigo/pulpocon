importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/22236edace783dfe2cbf.js",
    "revision": "53f9d0381a622ddb62b13c37f4a2efba"
  },
  {
    "url": "/_nuxt/430418e306825a0b8991.js",
    "revision": "eb52bcc554226ad13c636297b1e7344d"
  },
  {
    "url": "/_nuxt/5538a7f12c5ed425b929.js",
    "revision": "7092f3561d3de7d086dc04d221ce1489"
  },
  {
    "url": "/_nuxt/69eddb94cb3fc0510a66.css",
    "revision": "941df2c0cfda3b11de2909451d4e6ea1"
  },
  {
    "url": "/_nuxt/9838b4f0d563e12d872f.css",
    "revision": "585dac7f6af0a9d3611365be2343a2ef"
  },
  {
    "url": "/_nuxt/a0fbe0612506df8020ae.js",
    "revision": "8d612ae4beb0028e49c8302e4b6a5d60"
  },
  {
    "url": "/_nuxt/b5247770333959d04c91.js",
    "revision": "df03d3135f2854a14dc1c482c40ec19e"
  },
  {
    "url": "/_nuxt/c926f7489537406caf75.js",
    "revision": "8dc89f0806b850ae4e192ba7fd372028"
  },
  {
    "url": "/_nuxt/e00da40677dda1984c55.js",
    "revision": "35a1bb4f98a8c2fd3b818f2bccbaadaf"
  }
], {
  "cacheId": "PHPulpo-Con-2020",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
