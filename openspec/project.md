# Project Context

## Purpose
- This project is a Next.js full-stack starter that provides authentication, database integration, and reusable UI building blocks.

## Tech Stack
- TypeScript
- Next.js App Router
- React
- Drizzle ORM
- PostgreSQL
- ESLint (Next.js 16)
- pnpm

## Project Conventions

### Code Style
- Follow `.editorconfig` for indentation and basic editor behavior.
- During normal development, do not run formatting or other style-only rewrites as part of the iterative coding loop.
- Type safety is mandatory during development. Do not allow type errors, explicit `any`, non-null assertions, or TS comment bypasses without explicit approval.
- Style differences are non-blocking during implementation.

### Architecture Patterns
- Prefer small composable functions and components.
- Keep server code under `src/server` and shared helpers under `src/lib`.
- Use framework conventions before adding custom configuration.

### Testing Strategy
- There is no dedicated test runner configured yet.
- `pnpm typecheck` and `pnpm check` are mandatory development gates for TypeScript and Next.js code changes.
- Prefer `pnpm verify` as the standard validation command during implementation.
- Code style differences (single/double quotes, semicolons, formatting) are not development gates.

### Git Workflow
- Use Conventional Commits for commit messages.
- Pre-commit runs `pnpm verify` after staged changes are prepared.

## Domain Context
- The repository includes auth flows, database schema management, and shared UI components for a full-stack starter application.

## Important Constraints
- Do not proactively change formatting, import order, or code style during feature work.
- Development validation must focus on TypeScript correctness and Next.js ESLint correctness rather than stylistic consistency.
- Avoid workflow friction for AI-generated code unless the issue is likely to break runtime behavior, type safety, or security.

## External Dependencies
- PostgreSQL
- Better Auth
- Drizzle ORM
- Next.js ecosystem packages
