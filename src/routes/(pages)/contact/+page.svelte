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
		},
		{
			id: 'connect',
			title: 'ALL LINKS',
			url: 'http://ref.ract.fm/links/'
		}
	];
</script>

<div class="main-content w-full px-4 lg:!px-32 lg:py-10">
	<HighlightedHeader headerText="CONTACT" />

	<section
		class="h-auto w-full md:box-border
    bg-white text-primary flex flex-col gap-8 justify-center p-6 md:p-10 xl:p-16"
	>
		<div>
			<h3
				class="!text-ml md:!text-ml xl:!text-l !tracking-[0.5px] xl:!tracking-[1px] font-variation leading-none text-center"
			>
				REFRACTIONS LABEL LTD
			</h3>

			<address
				class="!text-xs md:!text-sm xl:!text-ml font-normal not-italic leading-6 md:leading-7 uppercase-case text-center"
			>
				Collective Auction Rooms<br />
				5-7 Buck Street<br />
				London<br />
				United Kingdom<br />
				NW1 8NJ
			</address>
		</div>

		<div class="mt-10 flex flex-col gap-2 md:mt-0">
			<EmailFormBlack />

			{#each socialButtons as socialButton}
				<button
					id={socialButton.id}
					onclick={() => window.open(socialButton.url, '_blank')}
					class={`!w-full !border-2 !border-primary !bg-primary !py-3 !text-xs !text-white xl:!text-sm hover:!border-primary hover:!bg-transparent hover:!text-primary ${socialButton.lowercase ? '!normal-case' : ''}`}
				>
					{socialButton.title}
				</button>
			{/each}
		</div>
	</section>
</div>
