<script lang="ts">
	let atTop = $state(true);
	let menuOpen = $state(false);

	const isScrollAtTop = () => {
		atTop = window.scrollY < 10;
	};

	const closeMenu = () => {
		menuOpen = false;
	};
</script>

<svelte:window onscroll={isScrollAtTop} />

<header
	class="fixed inset-x-0 top-0 z-[99] box-border flex w-full items-center justify-between px-[2%] overflow-visible bg-primary/80 transition-all duration-400 py-3"
>
	<a href="/" aria-label="Home">
		<div
			class="bg-no-repeat transition-all duration-400 h-10 w-40 bg-[url(/Logos/RefractionsLogoWhite.svg)] md:w-52"
		></div>
	</a>

	<button
		class="z-50 block cursor-pointer border-none bg-transparent p-2 md:hidden"
		aria-label="Toggle menu"
		aria-expanded={menuOpen}
		onclick={() => (menuOpen = !menuOpen)}
	>
		<span class="block h-0.5 w-7 my-1.5 bg-white transition-transform duration-300 ease-in-out"
		></span>
		<span class="block h-0.5 w-7 my-1.5 bg-white transition-transform duration-300 ease-in-out"
		></span>
		<span class="block h-0.5 w-7 my-1.5 bg-white transition-transform duration-300 ease-in-out"
		></span>
	</button>

	<nav
		class="
      absolute top-full inset-x-0 flex-col bg-primary/95 transition-all
      {menuOpen ? 'flex' : 'hidden'}

      md:relative md:top-auto md:flex md:flex-row gap-6 md:items-center md:bg-transparent md:p-0"
	>
		<a href="/releases" class="nav-link !m-0" onclick={closeMenu}>RELEASES</a>
		<a href="/insights" class="nav-link !m-0" onclick={closeMenu}>INSIGHTS</a>
		<a href="/about" class="nav-link !m-0" onclick={closeMenu}>ABOUT</a>
		<a href="/contact" class="nav-link !m-0" onclick={closeMenu}>CONTACT</a>
	</nav>
</header>

<style>
	/* .nav-link {
		@apply m-0 block border-t border-white/10 p-4 text-center text-lg
        md:mx-4 md:border-none md:p-4 md:text-xl lg:mx-8;
	} */
	nav.flex-col > .nav-link:first-child {
		@apply border-t-0;
	}
</style>
