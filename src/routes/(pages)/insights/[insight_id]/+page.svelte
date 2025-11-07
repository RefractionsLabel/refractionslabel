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
		class="flex w-full justify-center mt-4 mb-2 text-ml sm:mb-4 sm:text-md lg:text-xxl bg-[url('/WebBackgrounds/InsightsBackground.jpg')] bg-cover"
	>
		<HighlightedHeader headerText={title}></HighlightedHeader>
	</div>

	<div
		class="mt-4 flex w-full flex-col items-start gap-1 text-sm text-black
           lg:flex-row lg:items-center lg:justify-between lg:gap-0"
	>
		<p class="author">{author}</p>
		<p class="date">{format(date, 'do MMMM yyyy')}</p>
	</div>

	<div class="mt-4 text-start w-full normal-case text-primary text-md min-h-86">
		{@html text}
	</div>
</div>

<!-- <style>
	.insight-detail-content {
		background-color: white;
		color: rgb(3, 24, 3);
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		width: 72vw;
		padding: 3rem;
	}

	.author-and-date {
		display: flex;
		color: black;
		justify-content: space-between;
		margin-top: 1rem;
		padding: 0 1rem;
		width: 90%;

		p {
			font-size: var(--fs-sm);
		}
	}

	.back-button {
		background-color: rgb(3, 24, 3);
		color: white;
		border-radius: 0;
		font-size: var(--fs-sm);
		cursor: pointer;
		margin-bottom: 2rem;
		position: absolute;
		top: 2.5rem;
		left: 3rem;
		z-index: 2;
	}

	.description {
		text-transform: none;
		margin-top: 1rem;
		width: 90%;
	}

	.title-container {
		width: 90%;
		display: flex;
		justify-content: center;
		background-color: rgb(3, 24, 3);
		font-size: var(--fs-xxl);
		margin-top: 5rem;
		margin-bottom: 1rem;
	}

	p {
		color: rgb(3, 24, 3);
	}

	@media (max-width: 900px) {
		.title-container {
			font-size: var(--fs-md);
		}
		.author-and-date {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.2rem;
		}
	}

	@media (max-width: 600px) {
		.title-container {
			font-size: var(--fs-ml);
			margin-top: 2rem;
			margin-bottom: 0.5rem;
		}
		.back-button {
			font-size: var(--fs-xs);
			top: 0.5rem;
			left: 0.5rem;
		}
		.description,
		.author-and-date {
			font-size: var(--fs-sm);
		}
	}

	@media (max-width: 400px) {
		.author-and-date,
		.author-and-date {
			font-size: var(--fs-md);
		}
	}
</style> -->
