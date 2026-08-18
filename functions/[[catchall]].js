const ALLOWED_PATHS = new Set(['/', '/robots.txt', '/favicon.ico', '/favicon.svg']);

export async function onRequest(context) {
	const { request, next } = context;
	const path = new URL(request.url).pathname;

	if (ALLOWED_PATHS.has(path)) {
		return next();
	}

	return new Response('Gone', {
		status: 410,
		headers: { 'content-type': 'text/plain; charset=utf-8' },
	});
}
