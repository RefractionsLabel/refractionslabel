<script lang="ts">
	import EmailForm from './EmailForm.svelte';

	type FooterLogo = {
		name: string;
		src: string;
		href: string;
	};

	// Update each href with the destination you want for that logo.
	const footerLogos: FooterLogo[] = [
		{ name: 'Subvert', src: '/Logos/SubvertWhite.png', href: 'https://subvert.fm/' },
		{
			name: 'Subtle Radio',
			src: '/Logos/SubtleRadioWhite.svg',
			href: 'https://www.subtleradio.com/residents/refractions'
		},
		{
			name: 'Camden Collective',
			src: '/Logos/camden_collective.png',
			href: 'https://camdencollective.co.uk/'
		},
		{
			name: 'Music Venue Properties',
			src: '/Logos/MVPWHITE.png',
			href: 'https://www.musicvenueproperties.com/'
		}
	];

	function openLogoLink(href: string) {
		if (!href || href === '#') return;
		const w = window.open(href, '_blank');
		if (w) w.opener = null;
	}
</script>

<footer
	class="flex w-full flex-col items-center gap-6 bg-footer p-4 lg:flex-row md:items-center md:justify-between md:gap-6"
>
	<p class="mx-4 max-w-md shrink-0 text-center !text-3xs md:!text-left lg:!text-xs">
		Refractions<span class="font-sans">®</span> is a registered trademark of Refractions Label Ltd.
		All rights reserved.
	</p>
	<div
		class="grid w-full max-w-xl grid-cols-2 place-items-center gap-3 md:flex-1 md:grid-cols-2 xl:grid-cols-4"
	>
		{#each footerLogos as logo (logo.src)}
			<button
				type="button"
				aria-label={logo.name}
				class="footer-logo-link"
				onclick={() => openLogoLink(logo.href)}
			>
				<img src={logo.src} alt={logo.name} class="footer-logo-image" />
			</button>
		{/each}
	</div>
	<div class="w-fit">
		<EmailForm alignEnd />
	</div>
</footer>

<style>
	.footer-logo-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 7.7rem;
		height: 3.3rem;
		padding: 0;
		border: 0;
		background: transparent;
		outline: none;
		opacity: 0.9;
		transition: opacity 150ms ease;
	}

	.footer-logo-link:hover {
		opacity: 1;
	}

	.footer-logo-image {
		max-width: 100%;
		max-height: 100%;
		width: auto;
		height: auto;
		object-fit: contain;
	}
</style>
