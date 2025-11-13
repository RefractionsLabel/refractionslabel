<script lang="ts">
	import EmailFormBlack from '$lib/components/EmailFormBlack.svelte';
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';

	interface socialButton {
		id: string;
		title: string;
		url: string;
		lowercase?: boolean;
	}

	const socialButtons: socialButton[] = [
		{
			id: 'connect',
			title: 'CONNECT ON SOCIALS',
			url: 'https://www.instagram.com/refractionslabel/'
		},
		{
			id: 'email',
			title: 'hello@refractionslabel.com',
			url: 'mailto:hello@refractionslabel.com',
			lowercase: true
		},
		{
			id: 'demoEmail',
			title: 'demo@refractionslabel.com',
			url: 'mailto:demo@refractionslabel.com',
			lowercase: true
		}
	];
</script>

<div class="main-content w-full px-4 lg:!px-32 lg:py-10">
	<HighlightedHeader headerText="CONTACT" />

	<section
		class="h-auto w-full md:box-border
    bg-white text-primary flex justify-center min-h-[60vh] p-10 xl:p-16"
	>
		<div class=" grid grid-cols-1 md:grid-cols-2 w-[70vw] md:mt-10">
			<div class="grid content-start gap-4">
				<h3 class="font-variation mb-4 text-xl leading-[.9]">REFRACTIONS LABEL LTD</h3>
				<address
					class="text-ml md:text-md font-normal not-italic leading-9 normal-case [font-variation-settings:'wght'_400,'wdth'_80]"
				>
					Collective Auction Rooms<br />
					5-7 Buck Street<br />
					London<br />
					United Kingdom<br />
					NW1 8NJ
				</address>
			</div>

			<div class="flex flex-col gap-4 lg:gap-6 mt-10 md:mt-0">
				<EmailFormBlack />

				{#each socialButtons as socialButton}
					<button
						id={socialButton.id}
						onclick={() => window.open(socialButton.url, '_blank')}
						class={`!border-2 !border-primary !w-full !text-4xs sm:!text-xs lg:!text-md !bg-primary !py-6 !px-6 !text-white !lg:mt-20 hover:!bg-transparent hover:!text-primary hover:!border-primary ${socialButton.lowercase ? '!normal-case' : ''}`}
					>
						{socialButton.title}
					</button>
				{/each}
			</div>
		</div>
	</section>
</div>
