<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';

	let { children } = $props();

	let bgURL = $state('url(/WebBackgrounds/RefractionsBackground.jpg)');
	let pageTitle = $state('Refractions');

	afterNavigate(() => {
		window.scrollTo(0, 0);
		const path = page.url.pathname.split('/')[1] || 'Refractions';
		pageTitle = path.charAt(0).toUpperCase() + path.slice(1);
		bgURL = `url(/WebBackgrounds/${pageTitle}Background.jpg)`;
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
