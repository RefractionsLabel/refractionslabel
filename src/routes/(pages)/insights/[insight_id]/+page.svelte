<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
	import { format } from 'date-fns';
	const { data } = $props();
	const { title, author, date } = data.attributes;
	console.log(data);
	const text = data.text;
</script>

<div
	class="main-content relative flex w-full md:!pt-20 flex-col items-center justify-start bg-white p-6 text-primary lg:w-[86vw] lg:!p-12 lg:!px-20"
>
	<div class="flex w-full">
		<button
			class="flex items-center justify-start cursor-pointer rounded-none !text-xs !mb-6 md:!text-sm border !border-primary !bg-primary text-white hover:!bg-white hover:text-primary hover:!border-primary"
			onclick={() => (window.location.href = '/insights')}>← Back to insights</button
		>
	</div>

	<div
		class="flex w-full justify-center mt-4 mb-2 text-ml sm:mb-4 bg-[url('/WebBackgrounds/InsightsBackground.jpg')] bg-cover"
	>
		<div
			class="bg-white my-10 text-primary py-0 px-6 border-0 font-bold uppercase mix-blend-lighten w-fit"
		>
			<h1 class="!text-ml leading-none md:!text-l lg:!text-xl !tracking-[4px] font-variation">{title}</h1>
		</div>
	</div>

	<div
		class="mt-4 flex w-full flex-col items-start gap-1 text-sm text-black
           lg:flex-row lg:items-center lg:justify-between lg:gap-0"
	>
		<p class="author">{author}</p>
		<p class="date">{format(date, 'do MMMM yyyy')}</p>
	</div>

	<div class="mt-4 text-start w-full normal-case text-primary text-sm md:text-ml lg:text-md min-h-86">
		{@html text}
	</div>
</div>
