# Project Profile: Developer Portfolio Website

## 🎯 Overview
This is a static portfolio website designed to showcase my identity, projects, professional experience, and technical skill set.

## 🛠️ Tech Stack & Coding Standards
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript (Strict type checking enforced)
- **Styling & UI:** TailwindCSS v4 + shadcn/ui (Nova Preset)
- **Code Style Rule:** ⚠️ **CRITICAL:** Always use **named exports**. Do NOT use default exports under any circumstances.

## 📂 Project Structure
Ensure all new files adhere strictly to this directory layout:
- `/app` - App Router pages, layouts, and routing logic.
- `/components` - Shared, reusable React components.
- `/components/ui` - Atomic UI components generated via shadcn/ui.
- `/lib` - Core utility functions, helpers, and shared configuration.
- `/public` - Static assets (images, icons, svgs).
- `/styles` - Global CSS files and Tailwind configurations.

## 💻 CLI Commands
Always use `bun` as the package manager and execution runtime:
* `bun dev` - Starts the local development server on port `3000`.
* `bun build` - Compiles and builds the production-ready static application.
* `bun lint` - Runs the ESLint suite to check for code quality and style violations.
* `bun start` - Boots up the production server post-build.

## 🤖 Agent Rules & Protocol
You must execute your workflows according to the following guardrails:
1. **Read Instructions First:** You **MUST** read and fully parse `AGENTS.md` before analyzing code or proposing any modifications.
2. **State Mutation Protocol:** Do not modify, create, or delete any files autonomously. Always present the proposed changes and explicitly **ask the user for permission** before execution.

## Design Theme

### Primary Colors

| Name | OKLCH Value | Hex Approx. | Usage |
|------|-------------|-------------|-------|
| Background | `oklch(0.97 0.01 85)` | #F7F5F0 | Page background |
| Foreground | `oklch(0.20 0.02 45)` | #2D2A26 | Primary text |
| Accent | `oklch(0.55 0.12 25)` | #B86B4A | Links, highlights, CTAs |

### Supporting Colors

| Name | OKLCH Value | Hex Approx. | Usage |
|------|-------------|-------------|-------|
| Card | `oklch(0.99 0.005 85)` | #FDFCFA | Card backgrounds |
| Secondary | `oklch(0.94 0.015 85)` | #EDE9E2 | Secondary backgrounds |
| Muted | `oklch(0.92 0.015 85)` | #E5E1DA | Subtle backgrounds |
| Muted Foreground | `oklch(0.45 0.02 45)` | #6B6560 | Secondary text |
| Border | `oklch(0.88 0.02 85)` | #D9D4CB | Borders, dividers |

---

## Typography

### Font Families

| Type | Font | Fallback | Usage |
|------|------|----------|-------|
| Sans | Inter | system-ui, sans-serif | Body text, UI |
| Serif | Playfair Display | Georgia, serif | Headings, emphasis |
| Mono | Geist Mono | monospace | Code, technical |

### Type Scale (Tailwind Classes)

```
text-6xl  - Hero headlines (font-serif)
text-4xl  - Section titles (font-serif)
text-2xl  - Card titles
text-xl   - Subheadings
text-lg   - Lead text
text-base - Body text
text-sm   - Secondary text, labels
text-xs   - Captions, metadata
```

---

## Spacing System

Based on Tailwind's default spacing scale:

| Size | Value | Usage |
|------|-------|-------|
| 4 | 1rem (16px) | Small gaps |
| 6 | 1.5rem (24px) | Component padding |
| 8 | 2rem (32px) | Section padding |
| 12 | 3rem (48px) | Large gaps |
| 16 | 4rem (64px) | Section margins |
| 20 | 5rem (80px) | Hero spacing |
| 24 | 6rem (96px) | Major sections |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| --radius | 0.5rem (8px) | Base radius |
| rounded-sm | 4px | Small elements |
| rounded-md | 6px | Buttons, inputs |
| rounded-lg | 8px | Cards |
| rounded-xl | 12px | Large cards |

---

## Design Principles

1. **Warmth** - Cream tones create an inviting, approachable feel
2. **Contrast** - Dark brown text on light backgrounds for readability
3. **Restraint** - Limited color palette maintains visual harmony
4. **Hierarchy** - Serif headings + sans-serif body creates clear structure
5. **Whitespace** - Generous spacing lets content breathe