<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
	import { format } from 'date-fns';

	type RadioAttributes = {
		title: string;
		date: string;
		series: string;
		description: string;
		episode_art: string;
		listen_link: string;
		embed_snippet: string;
	};

	type RadioEpisode = {
		slug: string;
		attributes: RadioAttributes;
		markdown: string;
	};

	let episodes: RadioEpisode[] = $state([]);

	const radioImport = import.meta.glob('$lib/_content/radio/*.md');
	Promise.all(
		Object.entries(radioImport).map(([path, importFn]) =>
			(importFn as () => Promise<RadioEpisode>)().then((mod) => {
				const slug = path.split('/').at(-1)?.replace('.md', '') || '';
				const { attributes, markdown } = mod;
				return { slug, attributes, markdown } as RadioEpisode;
			})
		)
	).then((items) => {
		episodes = items.sort(
			(a, b) => new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime()
		);
	});
</script>

<div class="main-content w-full !px-2 !py-10 sm:!px-4 lg:!px-20">
	<HighlightedHeader headerText="RADIO"></HighlightedHeader>
	<div
		class="grid w-full grid-cols-1 gap-12 px-16 md:px-0
           md:grid-cols-2
           lg:grid-cols-3 md:gap-4 lg:gap-8"
	>
		{#each episodes as file}
			<button
				class="flex flex-col !w-full !bg-white p-3 text-center text-primary shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]
                       font-variation"
				onclick={() => (window.location.href = '/radio/' + file.slug)}
			>
				<img
					class="mx-auto lg:mt-2 lg:mb-6 xl:mb-12 block h-auto border border-primary/20"
					src={file.attributes.episode_art}
					alt="Artwork for {file.attributes.title}"
				/>
				<h2 class="mt-4 md:my-0 md:py-0 leading-none text-primary text-l!">
					{file.attributes.title}
				</h2>
				<p class=" py-2 !text-primary text-sm!">{file.attributes.series}</p>
				<p class="!text-primary/80 !text-2xs md:!text-xs">
					{format(file.attributes.date, 'd MMMM yyyy')}
				</p>
			</button>
		{/each}
	</div>
</div>
