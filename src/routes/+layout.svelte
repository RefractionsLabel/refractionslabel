<script lang="ts">
	import '../app.css';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';

	let { children } = $props();

	/** Same hero bg as /releases (no dedicated Events/Store/Radio assets). */
	const backgroundKeyBySegment: Record<string, string> = {
		events: 'Releases',
		store: 'Releases',
		radio: 'Releases'
	};

	const pageTitle = $derived.by(() => {
		const path = page.url.pathname.split('/')[1] || 'Refractions';
		return path.charAt(0).toUpperCase() + path.slice(1);
	});

	const bgURL = $derived.by(() => {
		const segment = page.url.pathname.split('/')[1] || 'Refractions';
		const bgKey =
			backgroundKeyBySegment[segment.toLowerCase()] ??
			segment.charAt(0).toUpperCase() + segment.slice(1);
		return `url(/WebBackgrounds/${bgKey}Background.jpg)`;
	});

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
