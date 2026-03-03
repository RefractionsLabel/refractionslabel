<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';

	let { children } = $props();

	const pageTitle = $derived.by(() => {
		const path = page.url.pathname.split('/')[1] || 'Refractions';
		return path.charAt(0).toUpperCase() + path.slice(1);
	});
	const bgURL = $derived(`url(/WebBackgrounds/${pageTitle}Background.jpg)`);

	afterNavigate(() => {
		window.scrollTo(0, 0);
	});
</script>

<svelte:head><title>{pageTitle}</title></svelte:head>

<div
	class="overflow-hidden sm:overflow-visible sm:bg-top fixed top-0 left-0 m-0 h-full w-full bg-[#031704] p-0 z-[-1] bg-cover bg-no-repeat"
	style:background-image={bgURL}
></div>

<div class="min-h-screen">
	{@render children()}
</div>
