# @mosa-ui/components

A modern, customizable component library built with SvelteKit and Tailwind CSS.

## Features

- Built with Tailwind CSS v4 for modern styling
- Svelte 5 with the latest syntax and runes
- Tree-shakeable components
- Full TypeScript support
- Accessibility-focused
- Fully customizable with Tailwind utilities
- Clean, composable component APIs

## GitHub repo

View on GitHub: **[Mosa UI repo](https://github.com/mosa-development/mosa-ui)**

## Documentation

View our interactive component documentation: **[Mosa UI docs](https://mosa-development.github.io/mosa-ui)**

## Installation

### Step 1: Install the package

```bash
# npm
npm install @mosa-ui/components

# pnpm
pnpm add @mosa-ui/components

# yarn
yarn add @mosa-ui/components
```

> **Note**: This package requires `svelte@^5.0.0` and `tailwindcss@^4.0.0` as peer dependencies. If you're using SvelteKit with Tailwind CSS v4, you should already have these installed.

### Step 2: Configure Tailwind CSS

Create a `tailwind.config.ts` file in your project root (if you don't have one already):

```ts
import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@mosa-ui/components/**/*.{js,svelte,ts}'
	]
} satisfies Config;
```

### Step 3: Import styles

In your app's main CSS file (usually `src/app.css`):

```css
@config '../tailwind.config.ts';
@import 'tailwindcss';
@import '@mosa-ui/components/styles';
```

### Step 4: Import CSS in your layout

In your `src/routes/+layout.svelte`:

```svelte
<script>
	import '../app.css';
</script>

<slot />
```

## Updating the Package

To update @mosa-ui/components to the latest version:

```bash
# npm
npm update @mosa-ui/components        # Updates within version range (e.g., ^0.0.3)
npm install @mosa-ui/components@latest # Updates to absolute latest version

# pnpm
pnpm update @mosa-ui/components        # Updates within version range
pnpm update @mosa-ui/components@latest # Updates to absolute latest version

# yarn
yarn upgrade @mosa-ui/components       # Updates within version range
yarn add @mosa-ui/components@latest    # Updates to absolute latest version
```

> **Note**: The difference between `update` and `install/add @latest`:
>
> - `update` respects the version range in your package.json (e.g., `^0.0.3` won't update to `0.1.0`)
> - `@latest` always gets the newest version regardless of your package.json constraints

To check for available updates:

```bash
# npm
npm outdated @mosa-ui/components

# pnpm
pnpm outdated @mosa-ui/components

# yarn
yarn outdated @mosa-ui/components
```

## Usage

Import and use components in your Svelte application:

```svelte
<script>
	import { Button } from '@mosa-ui/components';
</script>

<Button variant="primary" size="md" onclick={() => alert('Clicked!')}>Click me</Button>
```

For detailed component documentation, examples, and API references, visit our **[component documentation](https://mosa-development.github.io/mosa-ui)**.

## Theme Customization

The component library uses CSS custom properties (via Tailwind v4 theme variables) that you can override to match your brand.

### Available Theme Variables

Add these to your `app.css` after the imports to customize the theme:

```css
@theme {
	/* Primary brand color */
	--color-primary: rgb(59 130 246);
	--color-primary-foreground: rgb(248 250 252);

	/* Secondary color (for secondary actions) */
	--color-secondary: rgb(241 245 249);
	--color-secondary-foreground: rgb(15 23 42);

	/* Destructive color (for dangerous actions) */
	--color-destructive: rgb(239 68 68);
	--color-destructive-foreground: rgb(254 242 242);

	/* UI colors */
	--color-border: rgb(226 232 240);
	--color-ring: rgb(59 130 246);
	--color-background: rgb(255 255 255);
	--color-foreground: rgb(2 8 23);
}
```

### Example: Dark Mode

```css
/* Define dark mode colors */
@media (prefers-color-scheme: dark) {
	@theme {
		--color-primary: rgb(96 165 250);
		--color-primary-foreground: rgb(15 23 42);
		--color-secondary: rgb(30 41 59);
		--color-secondary-foreground: rgb(226 232 240);
		--color-destructive: rgb(220 38 38);
		--color-destructive-foreground: rgb(254 226 226);
		--color-border: rgb(51 65 85);
		--color-background: rgb(15 23 42);
		--color-foreground: rgb(241 245 249);
	}
}
```

## Advanced Customization

### Override Individual Components

You can override specific component instances using Tailwind classes:

```svelte
<script>
	import { Button, cn } from '@mosa-ui/components';

	let isActive = false;
</script>

<!-- Complete override -->
<Button class="rounded-full border-0 bg-gradient-to-r from-purple-500 to-pink-500 px-8 text-white">
	Gradient Button
</Button>

<!-- Conditional styling -->
<Button class={cn('transition-transform', isActive && 'scale-105 shadow-xl')}>
	{isActive ? 'Active' : 'Inactive'}
</Button>
```

### Using the cn Utility

The library exports a `cn` utility function for combining classes:

```svelte
<script>
	import { cn } from '@mosa-ui/components';

	let condition = true;

	const classes = cn('base-class', condition && 'conditional-class', 'another-class');
</script>
```

## Troubleshooting

### Components are unstyled

Make sure you've:

1. Configured Tailwind to scan the component library files (Step 2)
2. Imported the styles in the correct order (Step 3)
3. Restarted your dev server after configuration changes

### Custom colors not working

Ensure your `@theme` variables are defined after the component library import:

```css
@config './tailwind.config.ts';
@import 'tailwindcss';
@import '@mosa-ui/components/styles';

/* Your custom theme AFTER imports */
@theme {
	--color-primary: rgb(147 51 234);
}
```

### TypeScript errors

Make sure you're using Svelte 5 and have the latest TypeScript configuration for Svelte.

## Repository

Find the source code and contribute on **[GitHub](https://github.com/mosa-development/mosa-ui)**.

## Development

### Project Structure

```
packages/components/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   └── index.ts
│   │   ├── styles/
│   │   │   └── theme.css
│   │   └── index.ts
│   └── ...
└── package.json
```

### Storybook

View the component in Storybook:

```bash
git clone https://github.com/mosa-development/mosa-ui.git
cd mosa-ui
pnpm install
pnpm --filter @mosa-ui/components storybook
```

### Building

```bash
pnpm build
```

### Testing

```bash
pnpm test
```

## License

MIT © mosa.dev
