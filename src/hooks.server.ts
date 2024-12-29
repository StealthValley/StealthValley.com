import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

const healthcheck: Handle = async ({ event, resolve }) => {
	if (event.url.pathname === '/healthcheck') {
		return new Response('OK', {
			headers: {
				'Content-Type': 'text/plain'
			}
		});
	}

	return resolve(event);
};

export const handle = sequence(healthcheck);