<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
	import { format } from 'date-fns';

	type InsightAttributes = {
		title: string;
		date: string;
		author: string;
		description: string;
	};

	type Insight = {
		slug: string;
		attributes: InsightAttributes;
		markdown: string;
	};

	let insightsFiles: Array<Insight> = $state([]);

	const insightsImport = import.meta.glob('$lib/_content/insights/*.md');
	for (const path in insightsImport) {
		insightsImport[path]().then((mod) => {
			const slug = path.split('/').at(-1)?.replace('.md', '') || '';
			const { attributes, markdown } = mod as Insight;
			insightsFiles.push({ slug, attributes, markdown } as Insight);
		});
	}
</script>

<div class="main-content w-full px-4 lg:!px-32 lg:py-10">
	<HighlightedHeader headerText="INSIGHTS"></HighlightedHeader>

	<div class="flex w-full flex-wrap items-center justify-between gap-16 lg:items-stretch">
		{#each insightsFiles as file}
			<button
				class="relative flex !w-full !h-[300px] md:!h-[400px] !p-4 justify-center items-center gap-4 !bg-white !text-black hover:!bg-white/80
               shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-[80%] [font-variation-settings:'wght'_700,'wdth'_50] lg:!p-12"
				onclick={() => (window.location.href = '/insights/' + file.slug)}
			>
				<div class="hidden lg:block lg:h-full lg:w-2/5 lg:overflow-hidden">
					<img src="/WebBackgrounds/AboutBackground.jpg" alt="Image for {file.attributes.title}" />
				</div>

				<div class="flex w-full flex-col justify-start overflow-hidden lg:w-3/5 md:p-4">
					<h3 class="text-left !text-black leading-[0.85] !text-l md:!text-lg">
						The weather is beautiful and the sun is shining brightly today
					</h3>

					<div
						class="flex gap-4 items-center justify-between md:gap-0"
					>
						<p class="author">
							{file.attributes.author}
						</p>
						<p class="date">
							{format(file.attributes.date, 'do MMM yyyy')}
						</p>
					</div>

					<p class="mt-6 text-left !text-sm md:!text-ml normal-case !text-black">
						{file.attributes.description.slice(0, 60) + '...'}
					</p>
				</div>
			</button>
		{/each}
	</div>
</div>
