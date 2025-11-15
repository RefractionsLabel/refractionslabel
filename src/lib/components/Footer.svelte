<script lang="ts">
	import EmailForm from './EmailForm.svelte';
</script>

<footer
	class="flex w-full flex-col md:flex-row items-center justify-center lg:!justify-between gap-4 bg-primary p-4"
>
	<p class="mx-4 text-center md:!text-left !text-5xs md:!w-72 lg:!text-xs lg:!w-fit">
		Refractions<span class="font-sans">®</span> is a registered trademark of Refractions Label Ltd.
		All rights reserved.
	</p>
	<a href="https://ffm.bio/refractionslabel" class="mx-4 text-center text-4xs sm:text-left"
		>Connect on Socials</a
	>

	<EmailForm />
</footer>
