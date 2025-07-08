<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import CodeBlock from '$lib/docs-components/CodeBlock.svelte';
</script>

<div class="space-y-8">
	<div>
		<h1 class="font-display mb-4 text-4xl">Button</h1>
		<p class="text-muted-foreground text-lg">
			Displays a button or a component that looks like a button.
		</p>
	</div>

	<div class="space-y-4">
		<h2 class="font-display text-2xl">Preview</h2>
		<div class="border-border bg-card rounded-lg border p-8">
			<div class="flex items-center justify-center">
				<Button>Click me</Button>
			</div>
		</div>
	</div>

	<div class="space-y-4">
		<h2 class="font-display text-2xl">Installation</h2>
		<CodeBlock language="bash" code="npm install @mosa-ui/button" />
	</div>

	<div class="space-y-4">
		<h2 class="font-display text-2xl">Usage</h2>
		<CodeBlock language="javascript" code={`import Button from '@mosa-ui/button';`} />
		<CodeBlock language="jsx" code={`<Button>Click me</Button>`} />
	</div>

	<div class="space-y-4">
		<h2 class="font-display text-2xl">Variants</h2>
		<p class="text-muted-foreground">The button component comes with four variants:</p>

		<div class="border-border bg-card rounded-lg border p-8">
			<div class="flex flex-wrap gap-4">
				<Button variant="primary">Primary</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="ghost">Ghost</Button>
			</div>
		</div>

		<CodeBlock
			language="jsx"
			code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="text">Text</Button>`}
		/>
	</div>

	<div class="space-y-4">
		<h2 class="font-display text-2xl">Sizes</h2>
		<p class="text-muted-foreground">The button component comes in three sizes:</p>

		<div class="border-border bg-card rounded-lg border p-8">
			<div class="flex items-center gap-4">
				<Button size="sm">Small</Button>
				<Button size="md">Medium</Button>
				<Button size="lg">Large</Button>
			</div>
		</div>

		<CodeBlock
			language="jsx"
			code={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
		/>
	</div>

	<div class="space-y-4">
		<h2 class="font-display text-2xl">Disabled State</h2>
		<p class="text-muted-foreground">Add the disabled prop to disable the button:</p>

		<div class="border-border bg-card rounded-lg border p-8">
			<div class="flex gap-4">
				<Button disabled>Disabled</Button>
				<Button variant="secondary" disabled>Disabled</Button>
			</div>
		</div>

		<CodeBlock
			language="jsx"
			code={`<Button disabled>Disabled</Button>
<Button variant="secondary" disabled>Disabled</Button>`}
		/>
	</div>

	<div class="space-y-4">
		<h2 class="font-display text-2xl">API Reference</h2>
		<div class="overflow-x-auto">
			<table class="w-full border-collapse">
				<thead>
					<tr class="border-border border-b">
						<th class="p-2 text-left font-medium">Prop</th>
						<th class="p-2 text-left font-medium">Type</th>
						<th class="p-2 text-left font-medium">Default</th>
						<th class="p-2 text-left font-medium">Description</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-border border-b">
						<td class="p-2 font-mono text-sm">variant</td>
						<td class="p-2 font-mono text-sm">'primary' | 'secondary' | 'outline' | 'text'</td>
						<td class="p-2 font-mono text-sm">'primary'</td>
						<td class="text-muted-foreground p-2">The visual style of the button</td>
					</tr>
					<tr class="border-border border-b">
						<td class="p-2 font-mono text-sm">size</td>
						<td class="p-2 font-mono text-sm">'sm' | 'md' | 'lg'</td>
						<td class="p-2 font-mono text-sm">'md'</td>
						<td class="text-muted-foreground p-2">The size of the button</td>
					</tr>
					<tr class="border-border border-b">
						<td class="p-2 font-mono text-sm">disabled</td>
						<td class="p-2 font-mono text-sm">boolean</td>
						<td class="p-2 font-mono text-sm">false</td>
						<td class="text-muted-foreground p-2">Whether the button is disabled</td>
					</tr>
					<tr class="border-border border-b">
						<td class="p-2 font-mono text-sm">type</td>
						<td class="p-2 font-mono text-sm">'button' | 'submit' | 'reset'</td>
						<td class="p-2 font-mono text-sm">'button'</td>
						<td class="text-muted-foreground p-2">The HTML button type</td>
					</tr>
					<tr class="border-border border-b">
						<td class="p-2 font-mono text-sm">onclick</td>
						<td class="p-2 font-mono text-sm">(event: MouseEvent) => void</td>
						<td class="p-2 font-mono text-sm">undefined</td>
						<td class="text-muted-foreground p-2">Click event handler</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
