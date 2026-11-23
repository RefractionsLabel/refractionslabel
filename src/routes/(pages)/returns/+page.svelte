<script lang="ts">
	import HighlightedHeader from '$lib/components/HighlightedHeader.svelte';

	// Keep this page in step with the packing slip. If one changes, change the other.
	const ordersEmail = 'orders@refractionslabel.com';

	const formFields = [
		'Goods',
		'Ordered on / received on',
		'Order number',
		'Name of consumer(s)',
		'Address of consumer(s)',
		'Signature of consumer(s)',
		'Date'
	];
</script>

<svelte:head>
	<meta
		name="description"
		content="Cancellations, returns and refunds for orders from Refractions Label Ltd."
	/>
</svelte:head>

<div class="main-content w-full px-4 lg:!px-32 lg:py-10">
	<HighlightedHeader headerText="RETURNS" />

	<section class="returns w-full bg-white p-6 text-primary normal-case md:p-10 xl:p-16">
		<h2>Cancellations</h2>
		<p>
			Orders may be cancelled before dispatch by emailing
			<a href="mailto:{ordersEmail}">{ordersEmail}</a> with the order number. The full amount paid will
			be refunded within 14 days.
		</p>

		<h2>Returns</h2>
		<p>
			Orders may be cancelled within 14 days of delivery by emailing
			<a href="mailto:{ordersEmail}">{ordersEmail}</a> with the order number. Items must be returned
			within 14 days of confirmation, in the condition received, to:
		</p>
		<address>
			Refractions Label Ltd<br />
			Collective Auction Rooms<br />
			5-7 Buck Street<br />
			London NW1 8NJ<br />
			United Kingdom
		</address>
		<p>
			Return postage is paid by the customer. The item price and standard delivery charge will be
			refunded within 14 days of receipt of the items or proof of postage.
		</p>

		<h2>Damaged or faulty items</h2>
		<p>
			Email <a href="mailto:{ordersEmail}">{ordersEmail}</a> within 30 days of delivery with the order
			number and a photograph. A replacement or full refund, including postage, will be provided.
		</p>
		<p>Your statutory rights are not affected.</p>

		<!-- Collapsed to keep the page short; the form is still on the page and
		     opens with one click, which is all the regulations ask for. -->
		<details id="cancellation-form">
			<summary><h2>Cancellation form</h2></summary>
			<p>Optional. Email is sufficient.</p>
			<div class="form">
				<p class="form-to">
					To: Refractions Label Ltd, Collective Auction Rooms, 5-7 Buck Street, London NW1 8NJ,
					United Kingdom<br />
					{ordersEmail}
				</p>
				<p>
					I/We* hereby give notice that I/We* cancel my/our* contract of sale of the following
					goods:
				</p>
				<dl>
					{#each formFields as field (field)}
						<div class="field">
							<dt>{field}</dt>
							<dd></dd>
						</div>
					{/each}
				</dl>
				<p class="form-note">
					* Delete as appropriate. Signature required only if this form is sent on paper.
				</p>
			</div>
		</details>

		<p class="company">
			Refractions Label Ltd. Registered in England and Wales, company no. 16285919. Registered
			office: Collective Auction Rooms, 5-7 Buck Street, London NW1 8NJ, United Kingdom.
		</p>
	</section>
</div>

<style>
	/* The global p rule is text-md and h2 is text-l; pin this page to the
	   release-page body size so the policy reads as running text. */
	.returns p,
	.returns address {
		font-size: var(--text-sm);
		line-height: 1.5;
		font-style: normal;
		margin: 0 0 1rem;
		max-width: 48rem;
	}

	.returns h2 {
		font-family: 'podium-sharp-variable', sans-serif;
		font-variation-settings:
			'wght' 700,
			'wdth' 50;
		font-size: var(--text-ml);
		line-height: 1;
		letter-spacing: 0.03125em;
		text-transform: uppercase;
		margin: 2.5rem 0 1rem;
		scroll-margin-top: 10rem;
	}

	.returns h2:first-child {
		margin-top: 0;
	}

	.returns details {
		margin-top: 2.5rem;
	}

	.returns summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		max-width: 48rem;
		padding-bottom: 0.75rem;
		border-bottom: 1px solid rgb(3 24 3 / 0.2);
		cursor: pointer;
		list-style: none;
	}

	.returns summary::-webkit-details-marker {
		display: none;
	}

	.returns summary::after {
		content: '+';
		font-size: var(--text-ml);
		line-height: 1;
	}

	.returns details[open] summary::after {
		content: '−';
	}

	.returns details[open] summary {
		margin-bottom: 1rem;
	}

	.returns summary h2 {
		margin: 0;
	}

	.returns a {
		text-decoration: underline;
	}

	.returns address {
		padding-left: 1rem;
		border-left: 2px solid currentColor;
	}

	.returns .form {
		border: 2px solid currentColor;
		padding: 1.5rem;
		max-width: 48rem;
	}

	.returns .form-to {
		padding-bottom: 1rem;
		border-bottom: 1px solid rgb(3 24 3 / 0.2);
	}

	.returns dl {
		margin: 0.5rem 0 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
	}

	/* Label on the left, a ruled line to write on to its right; stacked on phones. */
	.returns .field {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0.25rem;
	}

	@media (min-width: 640px) {
		.returns .field {
			grid-template-columns: 16rem 1fr;
			align-items: end;
			gap: 1rem;
		}
	}

	.returns dt {
		font-size: var(--text-xs);
		color: rgb(3 24 3 / 0.7);
	}

	.returns dd {
		margin: 0;
		height: 1.75rem;
		border-bottom: 1px solid currentColor;
	}

	.returns .form-note {
		font-size: var(--text-xs);
		color: rgb(3 24 3 / 0.7);
		margin: 0;
	}

	.returns .company {
		font-size: var(--text-xs);
		color: rgb(3 24 3 / 0.7);
		margin: 2.5rem 0 0;
	}
</style>
