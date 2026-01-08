<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
	import { format } from 'date-fns';

	type ReleaseAttributes = {
		title: string;
		date: string;
		artist: string;
		description: string;
		cover_art: string;
		buy_link: string;
		embed_snippet: string;
	};

	type Release = {
		slug: string;
		attributes: ReleaseAttributes;
		markdown: string;
	};

	let releasesFiles: Array<Release> = $state([]);

	const releasesImport = import.meta.glob('$lib/_content/releases/*.md');
	for (const path in releasesImport) {
		releasesImport[path]().then((mod) => {
			const slug = path.split('/').at(-1)?.replace('.md', '') || '';
			const { attributes, markdown } = mod as Release;
			releasesFiles.push({ slug, attributes, markdown } as Release);
		});
	}
</script>

<div class="main-content w-full !px-2 !py-10 sm:!px-4 lg:!px-20">
	<HighlightedHeader headerText="RELEASES"></HighlightedHeader>
	<div
		class="grid w-full grid-cols-1 gap-12 px-16 md:px-0
           md:grid-cols-2
           lg:grid-cols-3 md:gap-4 lg:gap-8"
	>
		{#each releasesFiles as file}
			<button
				class="flex flex-col !w-full !bg-white p-3 text-center text-primary shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]
                       font-variation"
				onclick={() => (window.location.href = '/releases-preview/' + file.slug)}
			>
				<img
					class="mx-auto lg:my-6 xl:my-12 block h-auto w-4/5 border border-primary/20"
					src={file.attributes.cover_art}
					alt="Cover art for {file.attributes.title}"
				/>
				<h2 class="mt-4 md:my-0 md:py-0 leading-none text-primary text-l!">{file.attributes.title}</h2>
				<p class=" py-2 !text-primary text-sm!">{file.attributes.artist}</p>
			</button>
		{/each}
	</div>
</div>
