<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
	import { format } from 'date-fns';
	const { data } = $props();
	const { title, author, date, description } = data.attributes;
	const text = data.text;
</script>

<div class="main-content insight-detail-content">
	<button class="back-button" onclick={() => (window.location.href = '/insights')}
		>← Back to insights</button
	>
	<div class="title-container">
		<HighlightedHeader headerText={title}></HighlightedHeader>
	</div>
	<div class="author-and-date">
		<p class="author">{author}</p>
		<p class="date">{format(date, 'do MMMM yyyy')}</p>
	</div>
	<p class="description">{@html text}</p>
</div>

<style>
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
</style>
