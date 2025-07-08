<script>
	import { theme } from '$lib/stores/theme.svelte.js';
</script>

<button
	onclick={() => theme.toggle()}
	class=" bg-background text-foreground hover:bg-secondary rounded-lg p-2 transition-colors"
	aria-label="Toggle theme"
>
	{#if theme.value === 'light'}
		<div>Light</div>
	{:else}
		<div>Dark</div>
	{/if}
</button>
