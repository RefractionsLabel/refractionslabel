<script module lang="ts">
	// Shared across every preview on the page so only one plays at a time.
	let current: HTMLAudioElement | null = null;

	// Decoding never makes a sound, so an offline context avoids the autoplay
	// warning a live AudioContext raises when created before any user gesture.
	let decoder: OfflineAudioContext | null = null;
	const getDecoder = () => (decoder ??= new OfflineAudioContext(1, 1, 44100));
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	/** Energy buckets kept from the decode; bars are regrouped from these. */
	const RESOLUTION = 512;
	/** Bar width and bar + gap, in CSS pixels. Bars are sized to the rendered
	 *  width rather than stretched, which aliases badly on narrow screens. */
	const BAR = 3;
	const PITCH = 5;
	/** Keeps near-silent stretches visible as a sliver rather than a gap. */
	const MIN_BAR = 0.06;
	const SEEK_STEP = 5;

	const { src, label }: { src: string; label: string } = $props();

	let root: HTMLDivElement;
	let audio: HTMLAudioElement;

	let paused = $state(true);
	let currentTime = $state(0);
	let mediaDuration = $state(0);
	let decodedDuration = $state(0);
	let energy = $state<number[]>([]);
	let width = $state(0);

	// The audio element uses preload="none", so until it is played the decoded
	// buffer is the only source of the clip length.
	const total = $derived(mediaDuration || decodedDuration);
	const progress = $derived(total ? currentTime / total : 0);
	const started = $derived(!paused || currentTime > 0);
	const count = $derived(
		Math.min(RESOLUTION, Math.max(0, Math.floor((width + PITCH - BAR) / PITCH)))
	);
	const bars = $derived(toBars(energy, count));

	const toTime = (s: number): string => {
		const whole = Math.floor(s || 0);
		return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`;
	};

	/** Mean square per bucket, across all channels. */
	const toEnergy = (buffer: AudioBuffer): number[] => {
		const channels = Array.from({ length: buffer.numberOfChannels }, (_, c) =>
			buffer.getChannelData(c)
		);
		const size = Math.max(1, Math.floor(buffer.length / RESOLUTION));
		return Array.from({ length: RESOLUTION }, (_, b) => {
			let sum = 0;
			for (const data of channels) {
				for (let i = b * size, end = Math.min(i + size, data.length); i < end; i++) {
					sum += data[i] * data[i];
				}
			}
			return sum / (size * channels.length);
		});
	};

	/** RMS per bar rather than peak: mastered tracks sit near 0 dBFS throughout,
	 *  so peaks draw a flat block while RMS still shows intros and breakdowns.
	 *  A hoisted declaration because SSR evaluates `bars` above eagerly. */
	function toBars(energy: number[], n: number): number[] {
		if (!energy.length) return Array(n).fill(MIN_BAR);
		const levels = Array.from({ length: n }, (_, b) => {
			const start = Math.floor((b * energy.length) / n);
			const end = Math.max(start + 1, Math.floor(((b + 1) * energy.length) / n));
			let sum = 0;
			for (let i = start; i < end; i++) sum += energy[i];
			return Math.sqrt(sum / (end - start));
		});
		const loudest = Math.max(...levels) || 1;
		return levels.map((v) => Math.max(MIN_BAR, v / loudest));
	}

	// If the file can't be fetched (e.g. an external URL without CORS) or decoded,
	// the waveform stays flat but the audio element can still play it.
	const loadWaveform = async () => {
		try {
			const res = await fetch(src);
			if (!res.ok) return;
			const buffer = await getDecoder().decodeAudioData(await res.arrayBuffer());
			decodedDuration = buffer.duration;
			energy = toEnergy(buffer);
		} catch {
			// Leave the placeholder bars in place.
		}
	};

	const onplay = () => {
		if (current && current !== audio) current.pause();
		current = audio;
	};

	const seekTo = (seconds: number) => {
		if (!total) return;
		currentTime = Math.min(Math.max(seconds, 0), total);
	};

	const onclick = (e: MouseEvent) => {
		const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
		seekTo(((e.clientX - rect.left) / rect.width) * total);
		paused = false;
	};

	const onkeydown = (e: KeyboardEvent) => {
		const target = {
			ArrowRight: currentTime + SEEK_STEP,
			ArrowUp: currentTime + SEEK_STEP,
			ArrowLeft: currentTime - SEEK_STEP,
			ArrowDown: currentTime - SEEK_STEP,
			Home: 0,
			End: total
		}[e.key];
		if (target === undefined) return;
		e.preventDefault();
		seekTo(target);
	};

	// Previews are only fetched once the tracklist is near the viewport.
	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				observer.disconnect();
				loadWaveform();
			},
			{ rootMargin: '200px' }
		);
		observer.observe(root);
		return () => {
			observer.disconnect();
			audio.pause();
			if (current === audio) current = null;
		};
	});
</script>

<div bind:this={root} class="flex items-center gap-3">
	<audio
		bind:this={audio}
		bind:paused
		bind:currentTime
		bind:duration={mediaDuration}
		{src}
		preload="none"
		{onplay}
		onended={() => (currentTime = 0)}
	></audio>
	<button
		type="button"
		class="play"
		aria-label="{paused ? 'Play' : 'Pause'} preview of {label}"
		onclick={() => (paused = !paused)}
	>
		<svg viewBox="0 0 10 10" aria-hidden="true">
			{#if paused}
				<path d="M2 1 L9 5 L2 9 Z" />
			{:else}
				<rect x="2" y="1" width="2" height="8" />
				<rect x="6" y="1" width="2" height="8" />
			{/if}
		</svg>
	</button>
	<div
		bind:clientWidth={width}
		role="slider"
		tabindex="0"
		aria-label="Seek preview of {label}"
		aria-valuemin={0}
		aria-valuemax={Math.round(total)}
		aria-valuenow={Math.round(currentTime)}
		aria-valuetext="{toTime(currentTime)} of {toTime(total)}"
		class="h-8 min-w-0 grow cursor-pointer outline-offset-4 focus-visible:outline-1 focus-visible:outline-primary"
		{onclick}
		{onkeydown}
	>
		<svg
			viewBox="0 0 {width || 1} 32"
			preserveAspectRatio="none"
			class="h-full w-full"
			aria-hidden="true"
		>
			{#each bars as level, i (i)}
				<rect
					x={i * PITCH}
					y={16 - level * 16}
					width={BAR}
					height={level * 32}
					class={i / count < progress ? 'fill-primary' : 'fill-primary/25'}
				/>
			{/each}
		</svg>
	</div>
	{#if total}
		<!-- Narrow screens show the clip length at rest and the elapsed time once started. -->
		<span class="shrink-0 whitespace-nowrap !text-xs tabular-nums text-primary/50">
			<span class="sm:hidden">{toTime(started ? currentTime : total)}</span>
			<span class="hidden sm:inline">{toTime(currentTime)} / {toTime(total)}</span>
		</span>
	{/if}
</div>

<style>
	/* Scoped so it outranks the unlayered global button rules in app.css. */
	.play {
		display: flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		padding: 0;
		border: 1px solid var(--color-primary);
		background: transparent;
		color: var(--color-primary);
		transition:
			background-color 200ms,
			color 200ms;
	}
	.play:hover,
	.play:focus-visible {
		background: var(--color-primary);
		color: white;
	}
	.play svg {
		width: 0.7rem;
		height: 0.7rem;
		fill: currentColor;
	}
</style>
