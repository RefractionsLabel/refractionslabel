<script lang="ts">
	import EmailFormBlack from '$lib/components/EmailFormBlack.svelte';
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
</script>

<div class="main-content p-10 lg:w-[86vw] xl:w-[72vw]">
	<HighlightedHeader headerText="CONTACT"></HighlightedHeader>

	<section
		class="h-auto w-full md:box-border
    bg-white text-primary
    grid grid-cols-1 items-start
    gap-8 p-10
    lg:grid-cols-2
    xl:gap-12 xl:p-16"
	>
		<div class="grid content-start gap-4">
			<h3 class="panel-title mb-4 text-xl">REFRACTIONS LABEL LTD</h3>
			<address
				class="address-block text-ml font-normal not-italic leading-none normal-case [font-variation-settings:'wght'_400,'wdth'_80]"
			>
				Collective Auction Rooms<br />
				5-7 Buck Street<br />
				London<br />
				United Kingdom<br />
				NW1 8NJ
			</address>
		</div>

		<div class="contact-emails lg:relative lg:top-[40%]">
			<p class="mb-4 text-xs md:text-sm text-primary/90">
				GENERAL:
				<a
					href="mailto:hello@refractionslabel.com"
					class="text-sm text-primary/90 lowercase underline">hello@refractionslabel.com</a
				>
			</p>
			<p class="text-xs md:text-sm text-primary/90">
				DEMOS:
				<a
					href="mailto:demo@refractionslabel.com"
					class="text-sm text-primary/90 lowercase underline">demo@refractionslabel.com</a
				>
			</p>
		</div>

		<button
			id="connect"
			class="social-button mt-0 border-none bg-primary/90 py-4 px-6 text-xs text-white lg:mt-20"
		>
			CONNECT ON SOCIALS
		</button>

		<div class="newsletter">
			<h3 class="mb-[0.2rem] text-left text-l tracking-[0.2rem] lg:text-center">NEWSLETTER</h3>
			<EmailFormBlack />
		</div>
	</section>
</div>
