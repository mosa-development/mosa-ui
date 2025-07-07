# Release Guide

This guide explains how to release new versions of packages in the mosa-ui monorepo.

## Overview

We use [Changesets](https://github.com/changesets/changesets) for versioning and publishing. This ensures:

- Proper semantic versioning
- Automated changelog generation
- Coordinated releases across packages
- No accidental publishes

## Quick Start

1. Make your changes
2. Create a changeset: `pnpm changeset`
3. Commit and push
4. Merge the automated PR when ready to release

## Detailed Process

### 1. Making Changes

Work on your features or fixes as normal:

```bash
# Create a feature branch
git checkout -b feat/new-button-variant

# Make your changes
# Test locally with: pnpm dev

# Commit your changes
git add .
git commit -m "feat: add ghost button variant"
```

### 2. Creating a Changeset

Before pushing, create a changeset to document what changed:

```bash
pnpm changeset
```

This will prompt you to:

1. **Select packages** - Use space to select `@mosa-ui/components`, then press enter
2. **Choose version bump**:
   - `patch` - Bug fixes, small tweaks (0.0.x)
   - `minor` - New features, backwards compatible (0.x.0)
   - `major` - Breaking changes (x.0.0)
3. **Write a summary** - This becomes the changelog entry

Example changeset creation:

```
🦋 Which packages would you like to include? ›
◉ @mosa-ui/components

🦋 Which packages should have a major bump? › (none)
🦋 Which packages should have a minor bump? › (none)
🦋 Which packages should have a patch bump? › @mosa-ui/components

🦋 Please enter a summary for this change:
› Added ghost button variant with transparent background and border
```

### 3. Commit Message Format

We follow conventional commits for clarity:

```bash
# Features
git commit -m "feat: add ghost button variant"
git commit -m "feat(Button): add loading state prop"

# Fixes
git commit -m "fix: correct button hover state colors"
git commit -m "fix(theme): resolve color contrast issues"

# Documentation
git commit -m "docs: update button usage examples"

# Chores (dependency updates, configs)
git commit -m "chore: update dependencies"

# Breaking changes (add ! after type)
git commit -m "feat!: rename color prop to variant"
```

### 4. Changeset Message Guidelines

Write changesets as user-facing changelog entries:

✅ **Good examples:**

- "Added ghost and outline button variants with hover animations"
- "Fixed focus ring not appearing on disabled buttons"
- "Improved theme customization with CSS variable support"
- "Breaking: Renamed `color` prop to `variant` for consistency"

❌ **Avoid:**

- "fixed bug"
- "update button"
- "changes"

### 5. Pushing and Creating PR

```bash
# Add all files including the changeset
git add .
git commit -m "chore: add changeset"

# Push to your branch
git push origin feat/new-button-variant

# Create a PR to main branch
```

### 6. The Release Process

After your PR is merged to main:

1. **Automated PR Creation**
   - GitHub Actions creates a "Version Packages" PR
   - This PR contains version bumps and changelog updates
   - Multiple changesets are batched together

2. **Review the Version PR**
   - Check version bumps are correct
   - Review the generated changelog
   - Ensure all changes are documented

3. **Merge to Release**
   - Merge the Version PR when ready
   - This triggers npm publish automatically
   - Creates git tags and GitHub releases

## Version Bump Guidelines

### Patch Release (0.0.x)

- Bug fixes
- Minor style adjustments
- Documentation fixes
- Internal refactoring

### Minor Release (0.x.0)

- New features
- New components
- New props (with defaults)
- Performance improvements

### Major Release (x.0.0)

- Breaking changes
- Renamed/removed props
- Changed default behavior
- Major redesigns

## Common Scenarios

### Multiple Changes in One PR

Create separate changesets for distinct changes:

```bash
# First changeset for new feature
pnpm changeset
# Select package, choose minor, describe feature

# Second changeset for bug fix
pnpm changeset
# Select package, choose patch, describe fix
```

### Urgent Hotfix

1. Create changeset with clear description
2. Push directly to main (if allowed) or fast-track PR
3. Merge Version PR immediately

### Beta/Preview Releases

```bash
# Create a prerelease changeset
pnpm changeset pre enter beta

# Make changes and create changesets as normal
pnpm changeset

# Exit prerelease mode when done
pnpm changeset pre exit
```

## Troubleshooting

### "No changesets found"

- You forgot to create a changeset before pushing
- Run `pnpm changeset` and commit the generated file

### Version PR not appearing

- Check GitHub Actions tab for errors
- Ensure `.changeset` folder is not in `.gitignore`
- Verify changesets are committed

### Publish failed

- Check npm token is set in GitHub secrets
- Ensure you have publish permissions on npm
- Review GitHub Actions logs for specific errors

## Best Practices

1. **One changeset per logical change** - Don't bundle unrelated changes
2. **Write clear summaries** - Think "What would users want to know?"
3. **Review before merging** - Check the Version PR carefully
4. **Batch releases** - Let multiple PRs accumulate before releasing
5. **Communicate breaking changes** - Use major bumps and clear descriptions

## Emergency Procedures

If automated release fails after merging Version PR:

```bash
# Manually publish from your machine
cd packages/components
npm publish

# Create git tag
git tag v0.0.x
git push --tags
```
