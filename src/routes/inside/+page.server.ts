import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';


export const load = async ({ cookies }) => {
	const unlocked: boolean = cookies.get('unlocked') === 'true';

	return { error: false, unlocked };
};

export const actions: Actions = {
	unlock: async ({ request, cookies }) => {
		const formData = await request.formData();
		const password = formData.get('password');
		// console.log(password, INSIDE_PASSWORD)

		if (password !== "pass") {
			return fail(400, { message: 'Incorrect password.' });
		} else {
			cookies.set('unlocked', 'true', { path: '/inside' });
		}
		redirect(303, '/inside');
	}
};
