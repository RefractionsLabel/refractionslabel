<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
	import { format } from 'date-fns';

	type EventAttributes = {
		title: string;
		date: string;
		venue: string;
		location: string;
		start_time: string;
		end_time: string;
		description: string;
		event_art: string;
		ticket_link: string;
	};

	type LabelEvent = {
		slug: string;
		attributes: EventAttributes;
		markdown: string;
	};

	type EventModule = {
		attributes: EventAttributes;
		markdown: string;
	};

	const eventsImport = import.meta.glob<EventModule>('$lib/_content/events/*.md', { eager: true });
	const events: Array<LabelEvent> = Object.entries(eventsImport)
		.map(([path, mod]: [string, EventModule]) => {
			const slug = path.split('/').at(-1)?.replace('.md', '') || '';
			const { attributes, markdown } = mod;
			return { slug, attributes, markdown } as LabelEvent;
		})
		.sort((a, b) => new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime());
</script>

<div class="main-content w-full !px-2 !py-10 sm:!px-4 lg:!px-20">
	<HighlightedHeader headerText="EVENTS"></HighlightedHeader>
	<div
		class="grid w-full grid-cols-1 gap-12 px-16 md:px-0
           md:grid-cols-2
           lg:grid-cols-3 md:gap-4 lg:gap-8"
	>
		{#each events as file (file.slug)}
			<button
				class="flex flex-col !w-full !bg-white p-3 text-center text-primary shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]
                       font-variation"
				onclick={() => (window.location.href = '/events/' + file.slug)}
			>
				<img
					class="mb-4 lg:mb-6 xl:mb-12 block aspect-[210/297] w-full object-cover border border-primary/20"
					src={file.attributes.event_art}
					alt="Artwork for {file.attributes.title}"
				/>
				<h2 class="md:py-0 leading-none text-primary text-l!">
					{file.attributes.title}
				</h2>
				<p class=" py-2 !text-primary text-sm!">
					{file.attributes.venue} · {format(file.attributes.date, 'd MMM yyyy')}
				</p>
			</button>
		{/each}
	</div>
</div>
