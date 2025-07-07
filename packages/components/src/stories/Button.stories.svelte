<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from '../lib/components/Button/Button.svelte';

	const { Story } = defineMeta({
		title: 'Components/Button',
		component: Button,
		tags: ['autodocs'],
		args: {
			variant: 'primary',
			size: 'md',
			disabled: false,
			type: 'button'
		},
		parameters: {
			docs: {
				description: {
					component: `
A versatile button component for triggering actions.

## Usage

\`\`\`svelte
<Button variant="primary" size="md" onclick={handleClick}>
  Click me
</Button>
\`\`\`

## Variants

- **primary** - Use for main call-to-action buttons
- **secondary** - Use for secondary actions  
- **destructive** - Use for dangerous actions (delete, remove, etc.)
- **text** - Use for minimal, inline buttons

## Sizes

- **sm** - Small buttons for tight spaces
- **md** - Default size for most use cases
- **lg** - Large buttons for prominent actions

## Examples

\`\`\`svelte
<!-- Primary action -->
<Button variant="primary">Save Changes</Button>

<!-- Destructive action -->
<Button variant="destructive">Delete Account</Button>

<!-- Form buttons -->
<Button type="submit">Submit Form</Button>
<Button type="reset" variant="secondary">Reset</Button>

<!-- Custom styled -->
<Button class="rounded-full shadow-lg">Custom Style</Button>
\`\`\`
					`
				}
			}
		},
		argTypes: {
			variant: {
				control: { type: 'select' },
				options: ['primary', 'secondary', 'destructive', 'text'],
				description: 'Visual style of the button',
				table: {
					type: { summary: '"primary" | "secondary" | "destructive" | "text"' },
					defaultValue: { summary: 'primary' }
				}
			},
			size: {
				control: { type: 'select' },
				options: ['sm', 'md', 'lg'],
				description: 'Size of the button',
				table: {
					type: { summary: '"sm" | "md" | "lg"' },
					defaultValue: { summary: 'md' }
				}
			},
			disabled: {
				control: { type: 'select' },
				options: [true, false],
				description: 'Disables the button',
				table: {
					type: { summary: 'boolean' },
					defaultValue: { summary: 'false' }
				}
			},
			type: {
				control: false,
				description: 'HTML button type',
				table: {
					type: { summary: '"button" | "submit" | "reset"' },
					defaultValue: { summary: 'button' }
				}
			},
			class: {
				control: false,
				description: 'Additional CSS classes',
				table: {
					type: { summary: 'string' }
				}
			},
			onclick: {
				control: false,
				description: 'Click handler',
				table: {
					type: { summary: '(event: MouseEvent) => void' }
				}
			},
			children: {
				control: false,
				description: 'Button content',
				table: {
					type: { summary: 'Snippet' }
				}
			}
		}
	});
</script>

<Story name="Button" args={{ variant: 'primary' }}>Click me</Story>
