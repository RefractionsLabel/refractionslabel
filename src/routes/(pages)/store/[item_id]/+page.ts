import { error } from '@sveltejs/kit';
import { getStoreItem } from '$lib/store';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const item = getStoreItem(params.item_id);
	if (!item) error(404, 'Not found');
	return { attributes: item.attributes };
};
