import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const md = await import(`$lib/_content/radio/${params.episode_id}.md`);
	return { attributes: md.attributes };
};
