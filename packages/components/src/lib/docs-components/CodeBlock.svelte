<!-- src/lib/docs-components/CodeBlock.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { createHighlighter, type Highlighter, type BundledLanguage } from 'shiki';
	import { theme } from '$lib/stores/theme.svelte.js';

	interface Props {
		code: string;
		language?: BundledLanguage;
		filename?: string;
	}

	let { code, language = 'javascript', filename }: Props = $props();

	let highlighter: Highlighter | null = $state(null);
	let highlightedCode = $state('');
	let copied = $state(false);

	onMount(async () => {
		highlighter = await createHighlighter({
			themes: ['github-dark', 'github-light'],
			langs: ['javascript', 'typescript', 'svelte', 'bash', 'css', 'html', 'jsx', 'tsx', 'json']
		});

		updateHighlightedCode();
	});

	$effect(() => {
		if (highlighter) {
			updateHighlightedCode();
		}
	});

	function updateHighlightedCode() {
		if (!highlighter) return;

		const currentTheme = theme.value === 'dark' ? 'github-dark' : 'github-light';
		highlightedCode = highlighter.codeToHtml(code, {
			lang: language,
			theme: currentTheme
		});
	}

	async function copyToClipboard() {
		await navigator.clipboard.writeText(code);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<div class="group border-border relative overflow-hidden rounded-lg border">
	{#if filename}
		<div class="bg-muted text-muted-foreground border-border border-b px-4 py-2 text-sm">
			{filename}
		</div>
	{/if}

	<div class="relative">
		<button
			onclick={copyToClipboard}
			class="bg-background/80 border-border text-foreground hover:bg-muted hover:text-foreground absolute
			       top-3 right-3 z-10 rounded-md border
			       px-3 py-1.5 text-xs font-medium
			       backdrop-blur-sm transition-opacity"
			aria-label="Copy code"
		>
			{copied ? 'Copied!' : 'Copy'}
		</button>

		{#if highlightedCode}
			<div class="overflow-x-auto p-4">
				{@html highlightedCode}
			</div>
		{:else}
			<pre class="bg-muted overflow-x-auto p-4"><code class="font-mono text-sm">{code}</code></pre>
		{/if}
	</div>
</div>

<style>
	:global(.shiki),
	:global(.shiki span) {
		background-color: transparent !important;
	}
</style>
