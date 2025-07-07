# Mosa UI

A modern, customizable component library built with SvelteKit and Tailwind CSS v4.

## Overview

Mosa UI is a monorepo containing reusable UI components and tools for building modern web applications. Built with performance, accessibility, and developer experience in mind.

### Packages

- **[@mosa-ui/components](./packages/components)** - Core component library with customizable, accessible components

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/mosa-ui.git
cd mosa-ui

# Install dependencies
pnpm install

# Start development
pnpm dev
```

## Development

### Commands

```bash
# Start development server
pnpm dev

# Build all packages
pnpm build

# Run type checking
pnpm check

# Run Storybook
pnpm --filter @mosa-ui/components storybook

# Create a changeset
pnpm changeset

# Release packages (maintainers only)
# See RELEASING.md for detailed instructions
```

### Project Structure

```
mosa-ui/
├── .changeset/           # Changeset configuration
├── .github/              # GitHub Actions workflows
│   └── workflows/
│       └── release.yml   # Automated release workflow
├── packages/             # Monorepo packages
│   └── components/       # Component library
│       ├── src/
│       │   ├── lib/      # Library source
│       │   └── routes/   # Development/preview app
│       └── package.json
├── RELEASING.md          # Release documentation
├── package.json          # Root package.json
├── pnpm-lock.yaml       # Lockfile
└── pnpm-workspace.yaml  # Workspace configuration
```

## Using the Component Library

To use @mosa-ui/components in your project:

```bash
# npm
npm install @mosa-ui/components

# pnpm
pnpm add @mosa-ui/components

# yarn
yarn add @mosa-ui/components
```

See the [component library documentation](./packages/components/README.md) for setup and usage instructions.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Create a changeset (`pnpm changeset`)
5. Commit your changes (`git commit -m 'feat: add amazing feature'`)
6. Push to your branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Commit Convention

We use conventional commits:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `chore:` - Maintenance tasks
- `refactor:` - Code refactoring
- `test:` - Test updates

## Releasing

For maintainers: See [RELEASING.md](./RELEASING.md) for detailed instructions on how to release new versions.

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/) - Web framework
- [Svelte 5](https://svelte.dev/) - UI framework
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Changesets](https://github.com/changesets/changesets) - Version management
- [pnpm](https://pnpm.io/) - Package manager
