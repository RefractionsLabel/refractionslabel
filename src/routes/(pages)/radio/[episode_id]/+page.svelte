<script lang="ts">
	import { format } from 'date-fns';

	const { data } = $props();
	const { title, series, date, episode_art, listen_link, embed_snippet, description } =
		data.attributes;

	const embedHtml =
		typeof embed_snippet === 'string' &&
		embed_snippet.trim() !== '' &&
		embed_snippet.trim().toUpperCase() !== 'N/A'
			? embed_snippet
			: null;
</script>

<div class="main-content flex w-full flex-col gap-8 lg:w-[72vw]">
	<div class="text-primary bg-white p-6 md:p-12">
		<div class="flex w-full flex-col md:flex-row md:justify-between items-center">
			<button
				class="flex items-center justify-start cursor-pointer rounded-none !text-xs !mb-6 md:!text-sm border !border-primary !bg-primary text-white hover:!bg-white hover:text-primary hover:!border-primary"
				onclick={() => (window.location.href = '/radio')}>← Back to radio</button
			>
			<p class="!text-sm text-primary !mb-4">{format(date, 'd MMMM yyyy')}</p>
		</div>
		<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-[2fr_3fr] md:gap-12">
			<div class="flex flex-col">
				<div class="cover-art w-full">
					<img src={episode_art} alt="Episode artwork for {title}" class="h-auto w-full" />
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
						{series}
					</div>

					<div class="text-sm max-w-none normal-case text-primary mt-4 md:mt-12">
						{@html description}
					</div>
				</div>
				<div class="mt-20 md:mt-0">
					<a
						href={listen_link}
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-[42px] w-fit cursor-pointer items-center rounded-none border-2 border-primary bg-transparent px-6 text-center text-ml text-primary no-underline transition-all duration-300 hover:bg-primary hover:text-white"
					>
						Stream/Download
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
