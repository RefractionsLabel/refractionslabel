<script lang="ts">
	import EmailForm from './EmailForm.svelte';
</script>

<footer
	class="flex w-full flex-col items-center gap-6 bg-footer p-4 md:flex-row md:items-center md:justify-between md:gap-4"
>
	<p class="mx-4 max-w-md shrink-0 text-center !text-3xs md:!text-left lg:!text-xs">
		Refractions<span class="font-sans">®</span> is a registered trademark of Refractions Label Ltd.
		All rights reserved.
	</p>
	<div class="w-fit">
		<EmailForm alignEnd />
	</div>
</footer>
