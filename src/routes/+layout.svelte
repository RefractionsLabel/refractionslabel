<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';

	let { children } = $props();

	let bgURL = $state('url(/WebBackgrounds/RefractionsBackground.jpg)');
	let pageTitle = $state('Refractions');

	/** Same hero bg as /releases (no dedicated Events/Store assets). */
	const backgroundKeyBySegment: Record<string, string> = {
		events: 'Releases',
		store: 'Releases'
	};

	afterNavigate(() => {
		window.scrollTo(0, 0);
		const segment = page.url.pathname.split('/')[1] || 'Refractions';
		pageTitle = segment.charAt(0).toUpperCase() + segment.slice(1);
		const bgKey =
			backgroundKeyBySegment[segment.toLowerCase()] ??
			segment.charAt(0).toUpperCase() + segment.slice(1);
		bgURL = `url(/WebBackgrounds/${bgKey}Background.jpg)`;
	});
</script>

<svelte:head><title>{pageTitle}</title></svelte:head>

<div
	class="overflow-hidden sm:overflow-visible sm:bg-top fixed top-0 left-0 m-0 h-full w-full bg-white p-0 z-[-1] bg-cover bg-no-repeat transition-width duration-300"
	style:background-image={bgURL}
></div>

<div class="min-h-screen">
	{@render children()}
</div>
