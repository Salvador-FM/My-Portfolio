# AGENTS.md

## Key Commands

- `pnpm install` - Install dependencies (use pnpm, not npm)
- `pnpm start` - Dev server (shorthand: `ng serve`)
- `pnpm build` - Production build
- `pnpm serve:ssr:my-page` - Run SSR server (after build)

## SSR Workflow

Always run `pnpm build` before `pnpm serve:ssr:my-page`. The SSR entry is `dist/my-page/server/server.mjs`.

## Architecture

- **Entry**: `src/main.ts` (client), `src/server.ts` (SSR)
- **Pages**: `src/app/pages/` - standalone page components
- **Services**: `src/app/services/` - singleton services with signals
- **i18n**: JSON files in `public/assets/i18n/` (`en.json`, `es.json`)

## Important Conventions

- Standalone components are **default** in Angular v21; do NOT add `standalone: true`
- Use signals for state; prefer `input()`/`output()` functions over decorators
- Host bindings go in `@Component.host` object, not `@HostBinding`/`@HostListener`
- Use native control flow (`@if`, `@for`, `@switch`) not `*ngIf`, `*ngFor`

## Full Guidelines

See `.github/copilot-instructions.md` for detailed Angular/TypeScript best practices.