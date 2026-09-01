<script lang="ts">
	import { format } from 'date-fns';
	import { marked } from 'marked';

	const { data } = $props();
	const {
		title,
		venue,
		location,
		date,
		start_time,
		end_time,
		event_art,
		lineup,
		ticket_link,
		description
	} = data.attributes;

	// YAML 1.1 parses an unquoted 19:00 as a base-60 integer (19*60 = 1140),
	// so a time may arrive as a number of minutes rather than a string.
	const toTime = (v: string | number | null | undefined): string => {
		if (v === null || v === undefined || v === '') return '';
		if (typeof v === 'number') {
			const h = Math.floor(v / 60);
			const m = v % 60;
			return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
		}
		return String(v).trim();
	};

	const times = [toTime(start_time), toTime(end_time)].filter(Boolean).join(' – ');
	// Decap writes the lineup list as [{ artist: 'Name' }]; older entries may be plain strings.
	const acts: string[] = (Array.isArray(lineup) ? lineup : [])
		.map((a: string | { artist?: string }) => (typeof a === 'string' ? a : (a?.artist ?? '')))
		.map((a: string) => a.trim())
		.filter(Boolean);
	const body = marked.parse(description ?? '');
</script>

<div class="main-content flex w-full flex-col gap-8 lg:w-[72vw]">
	<div class="text-primary bg-white p-6 md:p-12">
		<div class="flex w-full flex-col md:flex-row md:justify-between items-center">
			<button
				class="flex items-center justify-start cursor-pointer rounded-none !text-xs !mb-6 md:!text-sm border !border-primary !bg-primary text-white hover:!bg-white hover:text-primary hover:!border-primary"
				onclick={() => (window.location.href = '/events')}>← Back to events</button
			>
			<p class="!text-sm text-primary !mb-4">
				{format(date, 'd MMMM yyyy')}{times ? ' · ' + times : ''}
			</p>
		</div>
		<div class="grid w-full grid-cols-1 gap-4 md:grid-cols-[2fr_3fr] md:gap-12">
			<div class="flex flex-col">
				<div class="cover-art w-full">
					<img
						src={event_art}
						alt="Artwork for {title}"
						class="aspect-[210/297] w-full object-cover"
					/>
				</div>
				{#if ticket_link}
					<div class="mt-6 flex justify-center md:justify-start">
						<a
							href={ticket_link}
							target="_blank"
							rel="noopener noreferrer"
							class="flex h-[42px] w-fit cursor-pointer items-center rounded-none border-2 border-primary bg-transparent px-6 text-center text-ml text-primary no-underline transition-all duration-300 hover:bg-primary hover:text-white"
						>
							Tickets
						</a>
					</div>
				{/if}
			</div>
			<div class="flex flex-col">
				<div class="info flex flex-col gap-2 md:gap-4">
					<div class="text-primary py-0 border-0 font-bold uppercase w-fit">
						<h1 class="!text-lg !tracking-[2px] leading-none font-variation">
							{title}
						</h1>
					</div>
					<div class="text-ml leading-none uppercase">
						{venue}{location ? ', ' + location : ''}
					</div>
					{#if acts.length}
						<div class="text-sm leading-none uppercase text-primary">
							{acts.join(' · ')}
						</div>
					{/if}

					<div
						class="event-description text-sm max-w-none normal-case text-primary mt-4 md:mt-12"
					>
						{@html body}
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* marked wraps the description in <p>, which would pick up the global
	   p { text-md } rule; pin it to text-sm so it matches the radio pages. */
	:global(.event-description p) {
		font-size: var(--text-sm);
		margin: 0;
	}
	:global(.event-description p + p) {
		margin-top: 1rem;
	}
	:global(.event-description a) {
		text-decoration: underline;
	}
	/* Bold: variable font wght axis overrides font-weight, so set it explicitly */
	:global(.event-description strong) {
		font-weight: 700;
		font-variation-settings:
			'wght' 700,
			'wdth' 100;
		font-size: inherit !important;
	}
	/* Italic */
	:global(.event-description em) {
		font-style: italic;
	}
</style>
