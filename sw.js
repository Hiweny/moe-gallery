/* ============================================================
   MoeGallery Service Worker — Lolicon API CORS Proxy
   Service Workers run in a privileged context and can make
   cross-origin requests without CORS restrictions.
   ============================================================ */

const LOLICON_ORIGIN = 'api.lolicon.app';

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Only proxy requests to the Lolicon API
  if (url.hostname !== LOLICON_ORIGIN) return;

  event.respondWith(handleLoliconRequest(event.request));
});

async function handleLoliconRequest(request) {
  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400'
      }
    });
  }

  try {
    // Service Workers can make cross-origin fetches without CORS blocking
    const response = await fetch(request);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({
      error: '代理请求失败: ' + err.message
    }), {
      status: 502,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}