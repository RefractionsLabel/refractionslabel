<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head><title>Refractions</title></svelte:head>

<div class="fixed top-0 left-0 m-0 h-full w-full bg-[#031704] p-0 z-[-1]"></div>

<div class="min-h-screen">
	{@render children()}
</div>
