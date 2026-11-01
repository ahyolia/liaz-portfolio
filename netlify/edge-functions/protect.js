// Basic Auth pour le volet académique (/academique et /academique/*).
// Les chemins sont déclarés dans netlify.toml.
// Les identifiants sont lus dans les variables d'environnement Netlify :
// PROF_USER et PROF_PASS (jamais en dur dans le code).

const REALM = 'Volet academique';

// Comparaison à durée constante pour ne pas divulguer d'info via le temps de réponse
function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function unauthorized() {
  return new Response('Authentification requise.', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
      'Cache-Control': 'no-store',
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

export default async (request, context) => {
  const expectedUser = Netlify.env.get('PROF_USER');
  const expectedPass = Netlify.env.get('PROF_PASS');

  // Variables absentes : on bloque plutôt que d'ouvrir l'accès
  if (!expectedUser || !expectedPass) {
    return new Response('Accès non configuré.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }

  const header = request.headers.get('authorization') || '';
  const [scheme, encoded] = header.split(' ');
  if (scheme !== 'Basic' || !encoded) return unauthorized();

  let decoded;
  try {
    decoded = new TextDecoder().decode(Uint8Array.from(atob(encoded), (c) => c.charCodeAt(0)));
  } catch {
    return unauthorized();
  }

  const separator = decoded.indexOf(':');
  if (separator === -1) return unauthorized();
  const user = decoded.slice(0, separator);
  const pass = decoded.slice(separator + 1);

  if (!safeEqual(user, expectedUser) || !safeEqual(pass, expectedPass)) {
    return unauthorized();
  }

  // Accès autorisé : on sert la page, sans cache partagé ni indexation
  const response = await context.next();
  const headers = new Headers(response.headers);
  headers.set('Cache-Control', 'private, no-store');
  headers.set('X-Robots-Tag', 'noindex, nofollow');
  return new Response(response.body, { status: response.status, headers });
};
