<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';

	interface Association {
		name: string;
		logoSrc: string;
		altText: string;
		href: string;
	}

	let associations: Association[] = [
		{
			name: 'Camden Collective',
			logoSrc: '/Logos/camden_collective.webp',
			altText: 'Camden Collective Logo',
			href: 'https://camdencollective.co.uk/'
		},
		{
			name: 'Subtle',
			logoSrc: '/Logos/Subtle_Logo.png',
			altText: 'Subtle Logo',
			href: '#'
		},
		{
			name: 'Subvert - The Collectively Owned Music Marketplace',
			logoSrc: '/Logos/SubvertWhite.png',
			altText: 'Subvert Logo',
			href: 'https://subvert.fm/'
		},
		{
			name: 'MusicVenueProperties | Conserving & Preserving Grassroots Music Venues',
			logoSrc: '/Logos/MVPWHITE.png',
			altText: 'MVP Logo',
			href: 'https://musicvenueproperties.com/'
		}
	];
</script>

<div class="main-content w-full px-4 lg:!px-32 lg:py-10">
	<HighlightedHeader headerText="ABOUT"></HighlightedHeader>

	<div class="w-full flex items-center flex-col justify-center bg-white p-6 md:p-12">
		<div class="text-center mb-10 text-primary py-0 px-6 border-0 font-bold uppercase w-fit">
			<h1 class="!text-l sm:!text-xl !tracking-[1px] font-variation">Associations</h1>
		</div>

		<div class="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
			{#each associations as association}
				<a
					href={association.href}
					target="_blank"
					class="flex aspect-square items-center justify-center bg-primary p-6 transition-transform duration-300 hover:scale-105 md:p-8"
				>
					<img src={association.logoSrc} alt={association.altText} class="object-contain" />
				</a>
			{/each}
		</div>
	</div>
</div>
