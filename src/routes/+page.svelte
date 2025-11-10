<script lang="ts">
	import EmailForm from '$lib/components/EmailForm.svelte';

	let menuItems = [
		{ title: 'RELEASES', link: '/releases' },
		{ title: 'INSIGHTS', link: '/insights' },
		{ title: 'RADIO', link: 'https://www.subtleradio.com/residents/refractions' },
		{ title: 'ABOUT', link: '/about' },
		{ title: 'CONTACT', link: '/contact' }
	];
</script>

<div class="flex min-h-screen flex-col p-6">
	<main class="flex flex-1 flex-col items-center justify-center pt-40">
		<img
			alt="Main Brand Logo and Title"
			src="/Logos/RefractionsLogoWhite.svg"
			class="block h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[42rem]"
		/>

		<nav
			class="mt-12 md:my-12 flex flex-col md:flex-row flex-nowrap md:flex-wrap md:items-center md:justify-center gap-x-6 gap-y-2 md:my-16 md:gap-x-10"
		>
			{#each menuItems as item}
				<a href={`${item.link}`}>{item.title}</a>
			{/each}
		</nav>
	</main>
	<footer
		class="w-full flex flex-col items-center justify-center text-center text-5xs sm:text-4xs md:text-3xs lg:text-2xs mb-10 space-y-4"
	>
		<EmailForm />

		<p class="!text-[12px]">
			Refractions<span class="font-serif">®</span> is a registered trademark of Refractions Label Ltd.
			All rights reserved.
		</p>
	</footer>
</div>
