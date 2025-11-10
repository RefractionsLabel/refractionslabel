<script lang="ts">
	let atTop = $state(true);
	let menuOpen = $state(false);

	const isScrollAtTop = () => {
		atTop = window.scrollY < 10;
	};

	const toggleMenu = () => {
		menuOpen = !menuOpen;
	};

	const closeMenu = () => {
		menuOpen = false;
	};

	let navlinks = [
		{ title: 'RELEASES', link: '/releases' },
		{ title: 'INSIGHTS', link: '/insights' },
		{ title: 'RADIO', link: 'https://www.subtleradio.com/residents/refractions' },
		{ title: 'ABOUT', link: '/about' },
		{ title: 'CONTACT', link: '/contact' }
	];
</script>

<svelte:window on:scroll={isScrollAtTop} />

<header
	class="fixed inset-x-0 top-0 z-[99] flex w-full items-center justify-between px-[2%] py-10 bg-primary/80 transition-all duration-400"
>
	<a href="/" aria-label="Home">
		<div
			class="bg-no-repeat transition-all duration-400 h-10 w-40 bg-[url(/Logos/RefractionsLogoWhite.svg)] md:w-52"
		></div>
	</a>

	<button
		class="z-50 block cursor-pointer border-none !bg-transparent hover:!bg-transparent p-2 md:hidden"
		aria-label="Toggle menu"
		aria-expanded={menuOpen}
		onclick={toggleMenu}
	>
		<span
			class="block h-0.5 w-7 bg-white transition-all duration-300 ease-in-out my-1.5
				{menuOpen ? 'translate-y-2 rotate-45' : ''}
			"
		></span>
		<span
			class="block h-0.5 w-7 bg-white transition-all duration-300 ease-in-out my-1.5
				{menuOpen ? 'opacity-0' : ''}
			"
		></span>
		<span
			class="block h-0.5 w-7 bg-white transition-all duration-300 ease-in-out my-1.5
				{menuOpen ? '-translate-y-2 -rotate-45' : ''}
			"
		></span>
	</button>

	<nav
		class="
			absolute left-0 right-0 top-full bg-primary/95 flex text-center flex-col overflow-hidden
			transition-all duration-400 ease-in-out md:static md:flex md:flex-row md:items-center md:bg-transparent md:p-0
			{menuOpen ? ' opacity-100' : 'max-h-0 opacity-0'}
			md:max-h-none md:opacity-100
		"
	>
		<div class="flex flex-col px-[2%] gap-4 py-6 pb-12 md:flex-row md:p-0 md:gap-18">
			{#each navlinks as link}
				<a
					href={link.link}
					class="nav-link py-3 text-white hover:text-gray-300 transition-colors md:py-0 border-b border-gray-100/10"
					onclick={closeMenu}
				>
					{link.title}
				</a>
			{/each}
		</div>
	</nav>
</header>
