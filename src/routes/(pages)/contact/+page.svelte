<script lang="ts">
	import EmailFormBlack from '$lib/components/EmailFormBlack.svelte';
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';
</script>

<div class="main-content contact-content">
	<HighlightedHeader headerText="CONTACT"></HighlightedHeader>

	<section class="contact-panel">
		<div class="org-block">
			<h3 class="panel-title">REFRACTIONS LABEL LTD</h3>
			<address class="address-block">
				Collective Auction Rooms<br />
				5-7 Buck Street<br />
				London<br />
				United Kingdom<br />
				NW1 8NJ
			</address>
		</div>

		<div class="contact-emails">
			<p>
				GENERAL:
				<a href="mailto:hello@refractionslabel.com">hello@refractionslabel.com</a>
			</p>
			<p>
				DEMOS:
				<a href="mailto:demo@refractionslabel.com">demo@refractionslabel.com</a>
			</p>
		</div>

		<button id="connect" class="social-button">CONNECT ON SOCIALS</button>

		<div class="newsletter">
			<h3>NEWSLETTER</h3>
			<EmailFormBlack />
		</div>
	</section>
</div>

<style>
	.contact-content {
		width: 72vw;
		padding: 2.5rem 2rem 2.5rem 2rem;
		height: auto;
	}

	.contact-panel {
		background: white;
		color: rgb(3, 24, 3);
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-auto-rows: auto;
		gap: 3rem;
		padding: 4rem;
		align-items: flex-start;
		width: 100%;
		box-sizing: border-box;
		height: auto;
	}

	.org-block {
		display: grid;
		gap: 1rem;
		align-content: start;
	}

	.panel-title {
		font-size: var(--fs-xl);
		margin: 0 0 1rem 0;
	}

	.address-block {
		text-transform: none;
		font-style: normal;
		font-variation-settings:
			'wght' 400,
			'wdth' 80;
		line-height: 1;
		font-size: var(--fs-ml);
	}

	.social-button {
		background: rgba(3, 24, 3, 0.9);
		color: white;
		border: none;
		padding: 1rem 1.5rem;
		font-size: var(--fs-xs);
		cursor: pointer;
		margin-top: 5rem;
	}

	.contact-emails {
		position: relative;
		top: 40%;
	}

	.contact-emails p {
		color: rgba(3, 24, 3, 0.9);
		margin: 0 0 1rem 0;
		font-size: var(--fs-sm);
	}

	.contact-emails a {
		color: rgba(3, 24, 3, 0.9);
		text-decoration: underline;
		text-transform: lowercase;
		font-size: var(--fs-sm);
	}

	.newsletter h3 {
		font-size: var(--fs-l);
		text-align: center;
		margin: 0 0 0.2rem 0;
		letter-spacing: 0.2rem;
	}

	/* Responsive tweaks */
	@media (max-width: 1200px) {
		.contact-content {
			width: 86vw;
		}
		.contact-panel {
			padding: 2.5rem;
			gap: 2rem;
		}
	}

	@media (max-width: 900px) {
		.contact-content {
			width: 92vw;
		}
		.contact-panel {
			grid-template-columns: 1fr;
			grid-auto-rows: auto;
		}

		.social-button {
			margin-top: 0;
		}

		.newsletter h3,
		.contact-emails {
			text-align: left;
			align-items: start;
		}
	}
</style>
