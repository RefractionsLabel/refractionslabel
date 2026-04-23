<script lang="ts">
	import EmailForm from './EmailForm.svelte';

	type FooterLogo = {
		name: string;
		src: string;
		href: string;
		small?: boolean;
		nudge?: string;
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
			href: 'https://camdencollective.co.uk/',
			small: true,
			nudge: '-2rem'
		},
		{
			name: 'Music Venue Properties',
			src: '/Logos/MVPWHITE.png',
			href: 'https://www.musicvenueproperties.com/',
			small: true,
			nudge: '-4.5rem'
		}
	];

	function openLogoLink(href: string) {
		if (!href || href === '#') return;
		const w = window.open(href, '_blank');
		if (w) w.opener = null;
	}

	function openAllLinks() {
		const w = window.open('http://ref.ract.fm/links', '_blank');
		if (w) w.opener = null;
	}
</script>

<footer
	class="flex w-full flex-col items-center gap-6 bg-footer p-4 lg:flex-row lg:items-center lg:justify-between lg:gap-4"
>
	<p class="text-center !text-[0.675rem] lg:!text-[0.75rem] whitespace-nowrap shrink-0">
		Refractions<span class="font-sans">®</span> is a registered trademark of Refractions Label Ltd.
	</p>
	<button
		type="button"
		class="primary !py-2 !px-12 !text-[0.75rem] uppercase xl:!text-3xs shrink-0"
		onclick={openAllLinks}
	>
		ALL LINKS
	</button>
	<div
		class="grid w-full max-w-xl grid-cols-2 place-items-center gap-x-1 gap-y-1 md:grid-cols-2 xl:grid-cols-4"
	>
		{#each footerLogos as logo (logo.src)}
			<button
				type="button"
				aria-label={logo.name}
				class="footer-logo-link {logo.small ? 'footer-logo-link--small' : ''}"
				style={logo.nudge ? `transform: translateX(${logo.nudge})` : ''}
				onclick={() => openLogoLink(logo.href)}
			>
				<img src={logo.src} alt={logo.name} class="footer-logo-image" />
			</button>
		{/each}
	</div>
	<div class="min-w-0 w-full max-w-full lg:w-fit">
		<EmailForm alignEnd compact />
	</div>
</footer>

<style>
	.footer-logo-link {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 7rem;
		height: 3rem;
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

	.footer-logo-link--small {
		width: 5.5rem;
		height: 2.25rem;
	}

	.footer-logo-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
