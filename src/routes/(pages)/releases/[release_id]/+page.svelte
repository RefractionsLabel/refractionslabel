<script lang="ts">
	import ReleaseDetail from '$lib/components/ReleaseDetail.svelte';

	const { data } = $props();
</script>

<ReleaseDetail attributes={data.attributes} backHref="/releases" backLabel="Back to releases" />
