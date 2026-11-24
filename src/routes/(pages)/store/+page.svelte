<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
	import { getStoreItems } from '$lib/store';

	const items = getStoreItems();
</script>

<div class="main-content w-full !px-2 !py-10 sm:!px-4 lg:!px-20">
	<HighlightedHeader headerText="STORE"></HighlightedHeader>
	{#if items.length}
		<!-- Same card grid as /releases, with the price under the artist line. -->
		<div
			class="grid w-full grid-cols-1 gap-12 px-16 md:px-0
           md:grid-cols-2
           lg:grid-cols-3 md:gap-4 lg:gap-8"
		>
			{#each items as item (item.slug)}
				<button
					class="flex flex-col !w-full !bg-white p-3 text-center text-primary shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]
                       font-variation"
					onclick={() => (window.location.href = '/store/' + item.slug)}
				>
					<img
						class="mb-4 lg:mt-2 lg:mb-6 xl:mb-12 block aspect-square w-full object-cover border border-primary/20"
						src={item.attributes.cover_art}
						alt={item.attributes.image_alt ?? `Cover art for ${item.attributes.title}`}
					/>
					<h2 class="md:py-0 leading-none text-primary text-l!">
						{item.attributes.title}
					</h2>
					{#if item.attributes.artist}
						<p class="pt-2 !text-primary text-sm! uppercase">{item.attributes.artist}</p>
					{/if}
					{#if String(item.attributes.price ?? '').trim()}
						<p class="pt-1 pb-2 !text-primary text-sm!">{item.attributes.price}</p>
					{:else}
						<div class="pb-2"></div>
					{/if}
				</button>
			{/each}
		</div>
	{:else}
		<div class="bg-white my-10 text-primary py-[1em] px-6 font-bold uppercase w-fit">
			<p class="leading-none text-center !text-md md:!text-l !tracking-[2px] font-variation">
				COMING SOON
			</p>
		</div>
	{/if}
</div>
