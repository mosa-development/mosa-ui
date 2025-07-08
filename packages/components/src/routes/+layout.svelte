<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import ThemeToggle from '$lib/docs-components/ThemeToggle.svelte';
	import { theme } from '$lib/stores/theme.svelte.js';
	import '../app.css';

	let { children } = $props();

	let currentPath = $derived(page.url.pathname);

	const components = [
		{ name: 'Button', href: '/button' },
		{ name: 'Input', href: '/input' },
		{ name: 'Card', href: '/card' },
		{ name: 'Dialog', href: '/dialog' },
		{ name: 'Select', href: '/select' },
		{ name: 'Checkbox', href: '/checkbox' },
		{ name: 'Switch', href: '/switch' },
		{ name: 'Toast', href: '/toast' }
	];

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	$effect(() => {
		theme.init();
	});
</script>

<main class="bg-background text-foreground min-h-screen">
	<nav class="border-border bg-background/80 sticky top-0 z-20 h-16 border-b backdrop-blur-sm">
		<div class="container mx-auto flex h-full items-center justify-between px-6">
			<span class="font-display text-3xl">mosa.ui</span>
			<div class="flex items-center gap-4">
				<a
					href="https://github.com/yourusername/mosa-ui"
					class="text-muted-foreground hover:text-foreground transition-colors"
					aria-label="GitHub"
				>
					GitHub
				</a>
				<ThemeToggle />
			</div>
		</div>
	</nav>

	<div class="container mx-auto flex">
		<aside
			class="border-border sticky top-16 h-[calc(100vh-4rem)] w-64 overflow-y-auto border-r p-6"
		>
			<div class="space-y-6">
				<div>
					<h2 class="text-muted-foreground mb-3 text-sm font-semibold tracking-wider uppercase">
						Getting Started
					</h2>
					<nav class="space-y-1">
						<a
							href="/introduction"
							class="hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm transition-colors"
							class:bg-accent={currentPath === '/introduction'}
							class:text-accent-foreground={currentPath === '/introduction'}
						>
							Introduction
						</a>
						<a
							href="/installation"
							class="hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm transition-colors"
							class:bg-accent={currentPath === '/installation'}
							class:text-accent-foreground={currentPath === '/installation'}
						>
							Installation
						</a>
					</nav>
				</div>

				<div>
					<h2 class="text-muted-foreground mb-3 text-sm font-semibold tracking-wider uppercase">
						Components
					</h2>
					<nav class="space-y-1">
						{#each components as component}
							<a
								href={component.href}
								class="hover:bg-accent hover:text-accent-foreground block rounded-md px-3 py-2 text-sm transition-colors"
								class:bg-accent={currentPath === component.href}
								class:text-accent-foreground={currentPath === component.href}
							>
								{component.name}
							</a>
						{/each}
					</nav>
				</div>
			</div>
		</aside>

		<div class="flex-1 overflow-x-hidden">
			<div class="mx-auto max-w-4xl p-6 lg:p-8">
				{@render children()}
			</div>
		</div>
	</div>
</main>
