<div id="mlb2-25336436" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-25336436">
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
								<button type="submit" class="primary !py-3 !text-xs xl:!text-sm">Subscribe</button>

								<button disabled style="display: none;" type="button" class="loading">
									<div class="ml-form-embedSubmitLoad"></div>
									<span class="sr-only">Loading...</span>
								</button>
							</div>
						</div>
					</div>

					<input type="hidden" name="ml-submit" value="1" />

					<div class="ml-mobileButton-horizontal">
						<button style="border-radius: none;" type="submit" class="primary">Subscribe</button>
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
