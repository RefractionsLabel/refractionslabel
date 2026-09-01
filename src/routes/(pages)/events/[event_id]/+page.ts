import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const md = await import(`$lib/_content/events/${params.event_id}.md`);
	return { attributes: md.attributes };
};
