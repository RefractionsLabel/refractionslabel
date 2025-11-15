import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

import { INSIDE_PASSWORD } from '$env/static/private';

export const load = async ({ cookies }) => {
	const unlocked: boolean = cookies.get('unlocked') === 'true';

	return { error: false, unlocked };
};

export const actions: Actions = {
	unlock: async ({ request, cookies }) => {
		const formData = await request.formData();
		const password = formData.get('password');

		if (!password || password !== INSIDE_PASSWORD) {
			return fail(400, { message: 'Incorrect password.' });
		}

		cookies.set('unlocked', 'true', {
			path: '/inside',
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 14 // 14 days
		});

		throw redirect(303, '/inside');
	}
};
