<script>
	import EmailForm from './EmailForm.svelte';
</script>

<footer>
	<p>
		Refractions<span class="registered">®</span> is a registered trademark of Refractions Label Ltd.
		All rights reserved.
	</p>
	<a href="https://ffm.bio/refractionslabel">Connect on Socials</a>
	<EmailForm />
</footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: full;
		padding: 1rem 2rem;
		background-color: rgba(3, 24, 3);
	}

	p,
	a {
		font-size: 0.8rem;
		margin: 0 1rem;
	}

	.registered {
		font-family: serif;
	}

	@media (max-width: 600px) {
		footer {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;
		}
		p,
		a {
			text-align: center;
		}
	}

	@media (max-width: 400px) {
		footer {
			padding: 1rem 1rem;
		}
	}

	@media (max-width: 300px) {
		footer {
			padding: 1rem 0.5rem;
		}
	}
</style>
