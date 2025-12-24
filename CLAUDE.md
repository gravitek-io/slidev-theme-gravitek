# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a custom Slidev theme for Gravitek presentations. Slidev is a Markdown-based presentation framework for developers. This theme package provides layouts, components, and styling that align with Gravitek's brand identity.

## Commands

### Development
- `npm run dev` - Start development server with hot reload, opens `example.md` for preview
- `npm run build` - Build the example presentation to static files
- `npm run export` - Export example presentation to PDF
- `npm run screenshot` - Export example presentation to PNG format

### Note on Package Manager
This project uses `pnpm` (indicated by `pnpm-lock.yaml`), though npm commands work due to compatibility.

## Architecture

### Theme Structure

**Layouts** (`/layouts/*.vue`)
- Vue components that define slide page structures
- Available layouts: `cover`, `cover-and-image`, `intro`, `section`, `two-cols-top`
- Layouts can accept props from slide frontmatter (e.g., `gitRepo`, `image`, `imageWidth`)
- Each layout is used by setting `layout: <name>` in slide frontmatter

**Components** (`/components/*.vue`)
- Reusable Vue components for slide content
- `InsightBox`: Highlighted information blocks with types (info, tip, warning, danger)
- Components are auto-imported and available in all slides

**Styles** (`/styles/`)
- `index.ts`: Style entry point, imports Slidev base styles + custom CSS
- `layout.css`: Custom CSS using UnoCSS utilities, defines styling per layout
- Uses CSS custom properties (e.g., `--slidev-theme-primary`) for theming

**Global Components**
- `global-bottom.vue`: Footer component rendered on all slides (except cover layouts)
- Shows Gravitek logo and presentation title
- Uses `useSlideContext()` to access Slidev context and hide on specific layouts

**Configuration**
- `uno.config.ts`: UnoCSS configuration defining Gravitek brand colors
- `setup/shiki.ts`: Code syntax highlighting theme configuration (Vitesse light/dark)
- `package.json`: Theme metadata and defaults (fonts, colors, transitions)

### Brand Colors (UnoCSS)
- `gravitek-primary`: #45BA6B (green)
- `gravitek-secondary`: #666666 (gray)
- `gravitek-accent`: #a259ff (purple)

### Key Technical Points

1. **Theme Inheritance**: Inherits base Slidev layouts via `@slidev/client/styles/layouts-base.css`
2. **CDN Assets**: Theme logos are served via jsDelivr CDN (`https://cdn.jsdelivr.net/gh/gravitek-io/slidev-theme-gravitek@main/public/`) to avoid requiring users to manually copy assets. This works because the repository is public.
3. **Layout Detection**: `global-bottom.vue` uses `$slidev.nav.currentLayout` to conditionally render based on current slide layout
4. **Prop System**: Layouts can receive typed props from slide frontmatter for customization
5. **Scoped Styling**: Uses UnoCSS utilities (`@apply`) for responsive, utility-first styling

## Development Workflow

When modifying the theme:
1. Edit Vue layouts/components or CSS files
2. Check changes in `example.md` via `npm run dev`
3. Update `example.md` to showcase new features
4. Test export functionality before releasing

## Important Notes

- All source code must be in English
- Theme is published as `@gravitek/slidev-theme-gravitek` on npm
- Node.js >=18.0.0 required
- Users install via frontmatter: `theme: @gravitek/slidev-theme-gravitek`
