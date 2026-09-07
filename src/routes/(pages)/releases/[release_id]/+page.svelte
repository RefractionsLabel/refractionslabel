<script lang="ts">
	import { format } from 'date-fns';
	import { marked } from 'marked';

	const { data } = $props();
	const { title, artist, date, cover_art, buy_link, embed_snippet, description } = data.attributes;

	// The CMS writes "N/A" when a release has no player, so treat that as empty.
	const embedHtml =
		typeof embed_snippet === 'string' &&
		embed_snippet.trim() !== '' &&
		embed_snippet.trim().toUpperCase() !== 'N/A'
			? embed_snippet
			: null;

	const body = marked.parse(description ?? '');
</script>

<div class="main-content flex w-full flex-col gap-8 lg:w-[72vw]">
	<div class="text-primary bg-white p-6 md:p-12">
		<div class="flex w-full flex-col md:flex-row md:justify-between items-center">
			<button
				class="flex items-center justify-start cursor-pointer rounded-none !text-xs !mb-6 md:!text-sm border !border-primary !bg-primary text-white hover:!bg-white hover:text-primary hover:!border-primary"
				onclick={() => (window.location.href = '/releases')}>← Back to releases</button
			>
			<p class="!text-sm text-primary !mb-4">{format(date, 'd MMMM yyyy')}</p>
		</div>
		<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-[2fr_3fr] md:gap-12">
			<div class="flex flex-col">
				<div class="cover-art w-full">
					<img
						src={cover_art}
						alt="Cover art for {title}"
						class="aspect-square w-full object-cover"
					/>
				</div>
				{#if embedHtml}
					<div class="embed-container w-full mt-10">
						{@html embedHtml}
					</div>
				{/if}
			</div>
			<div class="flex flex-col justify-between">
				<div class="info flex flex-col gap-2 md:gap-4">
					<div class="text-primary py-0 border-0 font-bold uppercase w-fit">
						<h1 class="!text-lg !tracking-[2px] leading-none font-variation">
							{title}
						</h1>
					</div>
					<div class="text-ml leading-none uppercase">
						{artist}
					</div>

					<div
						class="release-description text-sm max-w-none normal-case text-primary mt-4 md:mt-12"
					>
						{@html body}
					</div>
				</div>
				{#if buy_link}
					<div class="mt-10 lg:mt-0 flex justify-center md:justify-start">
						<a
							href={buy_link}
							target="_blank"
							rel="noopener noreferrer"
							class="flex h-[42px] w-fit cursor-pointer items-center rounded-none border-2 border-primary bg-transparent px-6 text-center text-ml text-primary no-underline transition-all duration-300 hover:bg-primary hover:text-white"
						>
							Buy / Stream
						</a>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	/* marked wraps the description in <p>, which would pick up the global
	   p { text-md } rule; pin it to text-sm so it matches the radio pages. */
	:global(.release-description p) {
		font-size: var(--text-sm);
		margin: 0;
	}
	:global(.release-description p + p) {
		margin-top: 1rem;
	}
	:global(.release-description a) {
		text-decoration: underline;
	}
	/* Bold: variable font wght axis overrides font-weight, so set it explicitly */
	:global(.release-description strong) {
		font-weight: 700;
		font-variation-settings:
			'wght' 700,
			'wdth' 100;
		font-size: inherit !important;
	}
	/* Italic */
	:global(.release-description em) {
		font-style: italic;
	}
</style>
