<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
	import MouseScrollIndicator from '$lib/components/MouseScrollIndicator.svelte';
	import { fade } from 'svelte/transition';

	let { data, form } = $props();

	let atTop = $state(true);
	let menuOpen = $state(false);

	const isScrollAtTop = () => {
		atTop = window.scrollY < 10;
	};

	interface InfoSection {
		title: string;
		points: string[];
	}
	const infoSections: InfoSection[] = [
		{
			title: 'WHY',
			points: [
				'TO PUSH THE FOREFRONT OF INNOVATIVE AND UNCONVENTIONAL BASS MUSIC',
				'TO CHAMPION INDEPENDENCE AND THE INDEPENDENTS',
				'TO LOOK FORWARD AND OPERATE AS A TRULY 21ST CENTURY RECORD LABEL',
				'TO CONSISTENTLY DELIVER THE HIGHEST LEVEL OF QUALITY AND EXPERIENCE IN EVERYTHING WE DO'
			]
		},

		{
			title: 'HOW',
			points: [
				'EVERY RELEASE IS A CAMPAIGN',
				'FAIR AND ROBUST EXCLUSIVE LICENCE AGREEMENT, DRAFTED IN COLLABORATION WITH A MUSIC LAWYER',
				'BESPOKE ARTWORK AND VISUAL ASSETS',
				'MARKETING STRATEGY AND EXECUTION',
				'CUSTOM POST-RELEASE PERFORMANCE REPORT',
				'GLOBAL DISTRIBUTION AND PLAYLIST PITCHING',
				'TRANSPARENT, ON DEMAND ROYALTY DATA',
				'DJ AND RADIO PROMO',
				'TASTEMAKER CHANNEL PLACEMENTS'
			]
		},
		{
			title: 'WHO',
			points: [
				'REFRACTIONS IS THE CREATION OF MYSELF, JOE PARKER, A LONDON-BASED LABEL FOUNDER WITH <br> OVER A DECADE OF EXPERIENCE IN INDEPENDENT ELECTRONIC MUSIC.',
				'PRIOR TO STARTING REFRACTIONS, I WORKED AT ANJUNADEEP ASSISTING WITH LABEL <br> OPERATIONS, CAMPAIGN ROLLOUTS, EVENT COORDINATION, AND BOTH ONLINE AND OFFLINE <br> MARKETING.',
				'I PREVIOUSLY FOUNDED AND RAN A DIGITAL LABEL, RELEASING OVER 40 PROJECTS AND <br> REACHING MORE THAN 1.5 MILLION STREAMS. I HOLD A DEGREE IN MUSIC BUSINESS AND A <br> MASTER’S IN ENTERPRISE AND ENTREPRENEURSHIP, BOTH OF WHICH UNDERPIN THE STRUCTURE <br> AND VISION BEHIND REFRACTIONS.',
				'REFRACTIONS IS THE CULMINATION OF EVERYTHING I’VE LEARNED SO FAR. IT’S A LABEL BUILT ON <br> QUALITY, IN BOTH PRODUCT AND EXPERIENCE; PROFESSIONALISM, IN HOW WE OPERATE <br> AND INTERACT WITH THE WIDER INDUSTRY; AUTHENTICITY, IN THE PRODUCTS WE SELL AND THE <br> CULTURE WE PUSH; AND INDEPENDENCE, TO MAINTAIN INTEGRITY IN ALL WE DO.'
			]
		}
	];
</script>

<svelte:window on:scroll={isScrollAtTop} />

<div class="!my-0 w-full bg-cover bg-top bg-no-repeat text-white bg-[url('/WebBackgrounds/InsideNewBG.webp')]">
	{#if data.unlocked}
		<div class="mx-auto flex w-full max-w-[90vw] flex-col items-center px-4">
			<section
				class="relative flex min-h-screen w-full flex-col items-center justify-center py-24 text-center sm:py-32"
			>
				<a href="https://ref.ract.fm/links" target="_blank" rel="noopener noreferrer" class="block w-full max-w-[350px] sm:max-w-[400px] transition-opacity hover:opacity-80">
					<img
						alt="Main Brand Logo and Title"
						src="/Logos/RefractionsLogoWhite.svg"
						class="h-auto w-full max-w-[350px] sm:max-w-[400px]"
					/>
				</a>

				<div class="py-2 sm:py-4"></div>

				<p class="!text-sm tracking-wider sm:!text-ml">
					London-Based Bass Music Label & Culture Brand
				</p>

				{#if atTop}
					<div transition:fade={{ duration: 400 }} class="absolute bottom-10 left-1/2 -translate-x-1/2">
						<MouseScrollIndicator />
					</div>
				{/if}
			</section>

			<div class="flex w-full flex-col items-start gap-24 py-24 sm:gap-32 sm:py-32">
				{#each infoSections as section}
					<section class="w-full">
						<HighlightedHeader headerText={section.title} />
						{#each section.points as point}
							<p class="!mt-4 !text-sm md:!text-ml [font-variation-settings:'wght'_300,'wdth'_100]">
								{@html point}
							</p>
						{/each}
					</section>
				{/each}
			</div>

			<section class="flex flex-col items-center gap-8 text-center sm:mt-48">
				<a
					href="mailto:joe@refractionslabel.com"
					class="my-32 text-ml lowercase underline text-white transition-opacity hover:opacity-80"
					>joe@refractionslabel.com</a
				>
				<a href="/" aria-label="Main Website Link">
					<img
						src="/Logos/RefractionsLogomarkWhite.svg"
						alt="Refractions Logomark"
						width="40"
						class="transition-transform hover:scale-110"
					/>
				</a>
				<p class="!text-xs text-white">
					Refractions<span class="font-sans">®</span> is a registered trademark of Refractions Label Ltd.
					All rights reserved.
				</p>
			</section>
		</div>
	{:else}
		<div class="flex h-screen items-center justify-center">
			{#if form?.message}
				<p class="absolute top-1/4 text-center">{form.message}</p>
			{/if}
			<form method="POST" action="?/unlock">
				<input type="password" name="password" placeholder="Password" required />
				<button type="submit">Unlock</button>
			</form>
		</div>
	{/if}
</div>
