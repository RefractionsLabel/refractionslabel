<script lang="ts">
	import { tick } from 'svelte';

	let { alignEnd = false }: { alignEnd?: boolean } = $props();

	let subscribeHorizBtn: HTMLButtonElement | undefined = $state();
	let subscribeMobileBtn: HTMLButtonElement | undefined = $state();
	let allLinksBtn: HTMLButtonElement | undefined = $state();

	function openAllLinks() {
		const w = window.open('http://ref.ract.fm/links', '_blank');
		if (w) w.opener = null;
	}

	function syncAllLinksWidth() {
		if (!allLinksBtn) return;
		const h = subscribeHorizBtn?.getBoundingClientRect().width ?? 0;
		const m = subscribeMobileBtn?.getBoundingClientRect().width ?? 0;
		const source = Math.max(h, m);
		if (source > 0) {
			allLinksBtn.style.width = `${Math.ceil(source)}px`;
		}
	}

	$effect(() => {
		if (!alignEnd) {
			if (allLinksBtn) allLinksBtn.style.width = '';
			return;
		}

		subscribeHorizBtn;
		subscribeMobileBtn;
		allLinksBtn;

		let ro: ResizeObserver | undefined;
		const onResize = () => syncAllLinksWidth();
		let cancelled = false;

		void tick().then(() => {
			if (cancelled) return;
			syncAllLinksWidth();
			ro = new ResizeObserver(syncAllLinksWidth);
			if (subscribeHorizBtn) ro.observe(subscribeHorizBtn);
			if (subscribeMobileBtn) ro.observe(subscribeMobileBtn);
			window.addEventListener('resize', onResize);
		});

		return () => {
			cancelled = true;
			ro?.disconnect();
			window.removeEventListener('resize', onResize);
			if (allLinksBtn) allLinksBtn.style.width = '';
		};
	});
</script>

<div
	class="flex w-fit max-w-full min-w-0 flex-col gap-2 {alignEnd
		? 'self-end items-end'
		: 'mx-auto items-center'}"
>
	<p
		class="m-0 w-full !text-3xs uppercase tracking-wider text-white xl:!text-xs [font-variation-settings:'wght'_400,'wdth'_100] {alignEnd
			? 'text-left'
			: 'text-center'}"
	>
		Mailing list
	</p>
	<div
		id="mlb2-25336436"
		class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-25336436 w-full min-w-0 max-w-full {alignEnd
			? 'email-form--align-end'
			: ''}"
	>
	<div class="ml-form-align-center">
		<div class="ml-form-embedWrapper embedForm">
			<div class="ml-form-embedBody ml-form-embedBodyHorizontal row-form">
				<div class="ml-form-embedContent" style="margin-bottom: 0px; "></div>

				<form
					class="ml-block-form"
					action="https://assets.mailerlite.com/jsonp/1484010/forms/152931341720094068/subscribe"
					data-code=""
					method="post"
					target="_blank"
				>
					<div class="ml-form-formContent horozintalForm">
						<div class="ml-form-horizontalRow">
							<div class="ml-input-horizontal mr-2">
								<div style="width: 100%;" class="horizontal-fields">
									<div
										class="ml-field-group ml-field-email ml-validate-email ml-validate-required min-w-72 !w-full"
									>
										<input
											type="email"
											class="form-control !w-full placeholder:text-center placeholder:text-white !py-3 !text-xs xl:!text-sm"
											data-inputmask=""
											name="fields[email]"
											placeholder="Email Address"
											autocomplete="email"
										/>
									</div>
								</div>
							</div>

							<div class="ml-button-horizontal primary">
								<button
									type="submit"
									class="primary !py-3 !text-xs xl:!text-sm"
									bind:this={subscribeHorizBtn}
								>
									Subscribe
								</button>

								<button disabled style="display: none;" type="button" class="loading">
									<div class="ml-form-embedSubmitLoad"></div>
									<span class="sr-only">Loading...</span>
								</button>
							</div>
						</div>
					</div>

					<input type="hidden" name="ml-submit" value="1" />

					<div class="ml-mobileButton-horizontal">
						<button
							style="border-radius: none;"
							type="submit"
							class="primary"
							bind:this={subscribeMobileBtn}
						>
							Subscribe
						</button>
						<button disabled style="display: none;" type="button" class="loading">
							<div class="ml-form-embedSubmitLoad"></div>
							<span class="sr-only">Loading...</span>
						</button>
					</div>
					<input type="hidden" name="anticsrf" value="true" />
				</form>
			</div>

			<div class="ml-form-successBody row-success" style="display: none">
				<div class="ml-form-successContent">
					<h2>Thank you!</h2>
					<p>You have successfully joined our subscriber list.</p>
				</div>
			</div>
		</div>
	</div>
	</div>

	{#if alignEnd}
		<button
			type="button"
			class="primary mt-3 shrink-0 self-end !py-3 !text-xs uppercase xl:!text-sm"
			bind:this={allLinksBtn}
			onclick={openAllLinks}
		>
			ALL LINKS
		</button>
	{/if}
</div>

<style>
	@keyframes ml-form-embedSubmitLoad {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.ml-form-horizontalRow {
		display: flex;
	}

	/* Right-align MailerLite row when footer uses alignEnd */
	:global(.email-form--align-end) :global(.ml-form-align-center) {
		display: flex;
		justify-content: flex-end;
		width: 100%;
	}

	.ml-form-successContent h2 {
		font-size: 2em;
	}
	.ml-form-successContent p {
		font-size: 1em;
	}

	.ml-mobileButton-horizontal {
		display: none;
		border-radius: none;
	}

	@media only screen and (max-width: 300px) {
		#mlb2-25336436.ml-form-embedContainer
			.ml-form-embedWrapper
			.ml-form-embedBody
			.ml-form-formContent.horozintalForm {
			padding: 0 0 10px 0 !important;
		}
		.ml-form-formContent.horozintalForm .ml-button-horizontal {
			display: none !important;
		}
		.ml-mobileButton-horizontal {
			display: inline-block !important;
			margin-bottom: 20px;
			width: 100%;
		}
		.ml-form-formContent.horozintalForm .ml-form-horizontalRow .ml-input-horizontal > div {
			padding-bottom: 0px !important;
		}
	}

	input[type='email'] {
		margin-right: 1rem;
	}

	button {
		border-radius: none;
	}

	@media only screen and (max-width: 300px) {
		.ml-form-formContent.horozintalForm .ml-form-horizontalRow .horizontal-fields {
			margin-bottom: 10px !important;
			width: 100% !important;
		}
	}
</style>
