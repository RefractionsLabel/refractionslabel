<script lang="ts">
	import { format } from 'date-fns';
	import { marked } from 'marked';
	import TrackPreview from '$lib/components/TrackPreview.svelte';

	type Track = {
		title: string;
		artist?: string;
		duration?: string | number;
		side?: string;
		/** Path to a short audio clip uploaded through the CMS. */
		preview?: string;
	};

	/** Consecutive tracks sharing a side/disc label, e.g. "A" or "Disc 1". */
	type TrackGroup = {
		label: string;
		tracks: Track[];
	};

	const { data } = $props();
	const {
		title,
		artist,
		cat_no,
		date,
		cover_art,
		buy_link,
		buy_label,
		embed_snippet,
		description
	} = data.attributes;

	const catNo = String(cat_no ?? '').trim();
	const buyLabel = String(buy_label ?? '').trim() || 'Buy / Stream';

	const tracklist: Track[] = Array.isArray(data.attributes.tracklist)
		? data.attributes.tracklist.filter((t: Track) => t && t.title)
		: [];

	// Tracks keep their order and are grouped by the side/disc label they carry,
	// so a release can be flat (no labels), A/B sides, or Disc 1 / Disc 2.
	const groups: TrackGroup[] = tracklist.reduce((acc: TrackGroup[], track: Track) => {
		const label = String(track.side ?? '').trim();
		const current = acc.at(-1);
		if (current && current.label === label) current.tracks.push(track);
		else acc.push({ label, tracks: [track] });
		return acc;
	}, []);

	// YAML 1.1 parses an unquoted 5:42 as a base-60 integer (5*60 + 42 = 342),
	// so a duration may arrive as a number of seconds rather than a string.
	const toDuration = (v: string | number | null | undefined): string => {
		if (v === null || v === undefined || v === '') return '';
		if (typeof v === 'number') {
			const m = Math.floor(v / 60);
			const s = v % 60;
			return `${m}:${String(s).padStart(2, '0')}`;
		}
		return String(v).trim();
	};

	// An untouched CMS file field is saved as "" rather than omitted.
	const previewSrc = (v: string | null | undefined): string =>
		typeof v === 'string' ? v.trim() : '';

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
			<p class="!text-sm text-primary !mb-4">
				{catNo ? catNo + ' · ' : ''}{format(date, 'd MMMM yyyy')}
			</p>
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
					<!-- The release artist is always shown in caps; track artists and the
					     listing cards keep whatever casing was typed in the CMS. -->
					<div class="text-ml leading-none uppercase">
						{artist}
					</div>

					<div class="release-description text-sm max-w-none normal-case text-primary mt-2 md:mt-4">
						{@html body}
					</div>
				</div>
				{#if buy_link}
					<!-- justify-between drops the gap to zero once the description fills the
					     column, so keep a floor under the button rather than lg:mt-0. -->
					<div class="mt-10 md:mt-12 flex justify-center md:justify-start">
						<a
							href={buy_link}
							target="_blank"
							rel="noopener noreferrer"
							class="flex h-[42px] w-fit cursor-pointer items-center rounded-none border-2 border-primary bg-transparent px-6 text-center text-ml text-primary no-underline transition-all duration-300 hover:bg-primary hover:text-white"
						>
							{buyLabel}
						</a>
					</div>
				{/if}
			</div>
		</div>
		{#if tracklist.length}
			<div class="tracklist mt-10 border-t border-primary/20 pt-3 md:mt-16 md:pt-4">
				<!-- Tracking matches the release title: its 2px at text-lg is 0.03125em. -->
				<h2 class="!text-ml font-variation leading-none uppercase !tracking-[0.03125em]">
					Tracklist
				</h2>
				{#each groups as group, g (g)}
					{#if group.label}
						<!-- The global `h3 { margin: 0 }` in app.css is unlayered, so these
						     margins need `!` to apply. Each label hugs its own tracks. -->
						<h3
							class="!text-sm font-variation !-mb-1 uppercase !tracking-[2px] text-primary/60 {g ===
							0
								? '!mt-4'
								: '!mt-6 md:!mt-7'}"
						>
							{group.label}
						</h3>
					{/if}
					<ol class="!m-0 flex flex-col !p-0 {group.label ? '' : '!mt-4 md:!mt-6'}">
						{#each group.tracks as track, i (i)}
							<li
								class="flex flex-col border-b border-primary/10 py-2 !text-sm normal-case !list-none last:border-b-0"
							>
								<div class="flex items-baseline gap-3">
									<span class="w-6 shrink-0 tabular-nums text-primary/50">
										{String(i + 1).padStart(2, '0')}
									</span>
									<span class="grow">
										{#if track.artist}{track.artist}{' — '}{/if}{track.title}
									</span>
									{#if toDuration(track.duration)}
										<span class="shrink-0 tabular-nums text-primary/50"
											>{toDuration(track.duration)}</span
										>
									{/if}
								</div>
								{#if previewSrc(track.preview)}
									<!-- pl-9 = the number column (w-6) + gap-3, so the player sits under the title. -->
									<div class="pt-2 pl-9">
										<TrackPreview
											src={previewSrc(track.preview)}
											label={track.artist ? `${track.artist} — ${track.title}` : track.title}
										/>
									</div>
								{/if}
							</li>
						{/each}
					</ol>
				{/each}
			</div>
		{/if}
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
