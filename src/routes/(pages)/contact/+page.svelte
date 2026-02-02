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
			title: 'ELSEWHERE',
			url: 'http://ref.ract.fm/links/'
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
    bg-white text-primary flex flex-col gap-8 justify-center min-h-[50vh] md:min-h-[60vh] p-6 md:p-10 xl:p-16"
	>
		<div>
			<h3
				class="!text-l md:!text-l xl:!text-xl !tracking-[1px] xl:!tracking-[2px] font-variation leading-none"
			>
				REFRACTIONS LABEL LTD
			</h3>

			<address
				class="!text-sm md:!text-ml xl:!text-md font-normal not-italic md:leading-10 uppercase-case"
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
					class={`!border-2 !border-primary !w-full !text-xs lg:!text-ml !bg-primary p-4 md:!py-6 md:!px-6 !text-white !lg:mt-20 hover:!bg-transparent hover:!text-primary hover:!border-primary ${socialButton.lowercase ? '!normal-case' : ''}`}
				>
					{socialButton.title}
				</button>
			{/each}
		</div>
	</section>
</div>
