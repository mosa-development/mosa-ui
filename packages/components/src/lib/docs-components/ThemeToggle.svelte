<script lang="ts">
	import { theme } from '$lib/stores/theme.svelte.js';
	import sunIcon from '@iconify-icons/lucide/sun';
	import moonIcon from '@iconify-icons/lucide/moon';
	import Icon from '@iconify/svelte';
</script>

<button
	onclick={() => theme.toggle()}
	class="text-foreground hover:text-primary focus-visible:ring-ring relative cursor-pointer rounded-lg
	       p-2 transition-all duration-300
	       focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
	aria-label="Toggle theme"
>
	<div class="relative h-5 w-5">
		<div
			class="absolute inset-0 transform transition-all duration-300
			       {theme.value === 'light' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0'}"
		>
			<Icon icon={sunIcon} width={20} height={20} />
		</div>

		<div
			class="absolute inset-0 transform transition-all duration-300
			       {theme.value === 'dark' ? 'scale-100 rotate-0 opacity-100' : 'scale-0 -rotate-90 opacity-0'}"
		>
			<Icon icon={moonIcon} width={20} height={20} />
		</div>
	</div>
</button>
