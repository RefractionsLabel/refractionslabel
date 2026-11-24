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
</script>

<footer
	class="flex w-full flex-col items-center gap-6 bg-footer p-4 min-[1366px]:flex-row min-[1366px]:items-center min-[1366px]:justify-between min-[1366px]:gap-4"
>
	<p class="text-center !text-[0.55rem] sm:!text-[0.675rem] min-[1366px]:!text-[0.75rem] shrink-0">
		<!-- Each part stays on one line; on narrow phones the links drop below. -->
		<span class="whitespace-nowrap"
			>Refractions<span class="font-sans">®</span> is a registered trademark of Refractions Label Ltd.</span
		>
		<span class="ml-1 whitespace-nowrap"
			><span aria-hidden="true" class="mx-2">·</span>
			<a
				href="http://ref.ract.fm/links"
				target="_blank"
				rel="noopener noreferrer"
				class="underline underline-offset-2 hover:opacity-80">All links</a
			>
			<span aria-hidden="true" class="mx-2">·</span>
			<a href="/returns" class="underline underline-offset-2 hover:opacity-80"
				>Returns & cancellations</a
			></span
		>
	</p>
	<!-- Three columns at the old per-logo width (max-w-xl / 4 × 3 = 27rem), so the
	     logos keep the spacing they had when Subvert was the fourth. -->
	<div
		class="grid min-[1366px]:w-full min-[1366px]:max-w-[27rem] [grid-template-columns:repeat(3,auto)] min-[1366px]:grid-cols-3 place-items-center gap-x-1 gap-y-1"
	>
		{#each footerLogos as logo (logo.src)}
			<button
				type="button"
				aria-label={logo.name}
				class="footer-logo-link {logo.small ? 'footer-logo-link--small' : ''}"
				style={logo.nudge ? `--logo-nudge: ${logo.nudge}` : ''}
				onclick={() => openLogoLink(logo.href)}
			>
				<img src={logo.src} alt={logo.name} class="footer-logo-image" />
			</button>
		{/each}
	</div>
	<div class="min-w-0 w-full max-w-full min-[1366px]:w-fit flex justify-center min-[1366px]:block">
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

	@media (min-width: 1366px) {
		.footer-logo-link {
			transform: translateX(var(--logo-nudge, 0));
		}
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
