import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const md = await import(`$lib/_content/insights/${params.insight_id}.md`);
	return {
		attributes: md.attributes,
		content: md.markdown
	};
};