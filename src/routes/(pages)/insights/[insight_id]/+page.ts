import type { PageLoad } from './$types';
import { marked } from 'marked'; // 1. Import the marked library

export const load: PageLoad = async ({ params }) => {
	const md = await import(`$lib/_content/insights/${params.insight_id}.md`);
	
	const content = marked(md.markdown); 

	const attributes = md.attributes;

	return { attributes, content }; 
};