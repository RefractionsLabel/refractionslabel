<script lang="ts">
	import EmailForm from '$lib/components/EmailForm.svelte';

	let menuItems = [
		{ title: 'RELEASES', link: '/releases' },
		{ title: 'RADIO', link: '/radio' },
		{ title: 'EVENTS', link: '/events' },
		{ title: 'INSIGHTS', link: '/insights' },
		{ title: 'STORE', link: '/store' },
		{ title: 'CONTACT', link: '/contact' }
	];
</script>

<div class="flex min-h-screen flex-col p-6">
	<main class="flex flex-1 flex-col items-center justify-center pt-40">
		<img
			alt="Main Brand Logo and Title"
			src="/Logos/RefractionsLogoWhite.svg"
			class="block h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[32rem]"
		/>

		<nav
			class="mt-12 relative flex flex-col md:flex-row flex-nowrap md:flex-wrap md:items-center md:justify-center gap-x-6 gap-y-2 md:my-16 md:gap-x-10"
		>
			{#each menuItems as item (item.title)}
				<a
					href={`${item.link}`}
					target={item.link.startsWith('http') ? '_blank' : undefined}
					rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
					class="text-xs no-underline [font-variation-settings:'wght'_400,'wdth'_100] lg:text-sm xl:text-ml p-4 hover:bg-white duration-400 text-white hover:text-gray-300 transition-colors lg:mx-8"
					>{item.title}</a
				>
			{/each}
			<!-- {#if atTop}
				<div transition:fade={{ duration: 400 }} class="absolute bottom-[-80px] left-1/2">
					<MouseScrollIndicator />
				</div>
			{/if} -->
		</nav>
	</main>
	<footer
		class="w-full flex flex-col items-center justify-center text-center text-5xs sm:text-4xs md:text-3xs lg:text-2xs mb-6 space-y-10"
	>
		<EmailForm />

		<p class="!text-[12px]">
			Refractions<span class="font-sans">®</span> is a registered trademark of Refractions Label Ltd.
			All rights reserved.
		</p>
	</footer>
</div>
