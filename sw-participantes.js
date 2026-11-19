/* EVO Missions · Participantes: guarda a página no aparelho para abrir sem internet.
   A lista de participantes NÃO passa por aqui: fica no localStorage do aparelho. */
const VERSION = "evo-participantes-v1.0";
const FILES = ["./participantes.html"];
self.addEventListener("install", e => e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("evo-participantes-") && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;
  const key = req;
  e.respondWith(caches.open(VERSION).then(async c => {
    const hit = await c.match(key, { ignoreSearch: true });
    const net = fetch(req).then(r => { if (r && r.ok) c.put(key, r.clone()); return r; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    return (await net) || new Response("Sem conexão e sem cópia salva. Abra a página uma vez com internet.", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
  }));
});
