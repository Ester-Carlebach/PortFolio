# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical Notes

**IMPORTANT DEPLOYMENT CONSTRAINTS:**
- This application runs in the cloud with continuous deployment
- Every commit triggers an automatic deployment to production
- Never create changes that introduce errors or break the build
- Always test thoroughly before committing
- Run `npm run build` locally to verify production build succeeds before committing

**CODE STYLE:**
- Do not add comments to the code
- Do not use emojis in code or commit messages

## Project Overview

This is an interactive 3D portfolio website for Ester Carlebach, built with React 19, Three.js, and GSAP. The project showcases experience, skills, and projects through immersive 3D graphics and animations. Based on a JavaScript Mastery tutorial.

## Tech Stack

- **Frontend**: React 19
- **3D Graphics**: Three.js (v0.174.0), React Three Fiber, @react-three/drei
- **Animation**: GSAP 3.12.7 with ScrollTrigger
- **Styling**: Tailwind CSS 4 with Vite plugin
- **Build Tool**: Vite 6.2.0
- **Email Service**: EmailJS (contact form)
- **Post-processing**: @react-three/postprocessing for bloom effects
- **Internationalization**: react-i18next for Hebrew/English translations

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run lint     # Run ESLint checks
npm run preview  # Preview production build locally
```

## Architecture Overview

### Application Structure

- **Single-page application**: No routing library. Uses scroll-based navigation with hash anchors (`#about`, `#experience`, `#skills`, `#contact`)
- **Component Organization**:
  - `src/sections/` - Main page sections (Hero, AboutMe, Experience, Contact, TechStack, Testimonials, Footer)
  - `src/components/` - Reusable UI components (Button, TitleHeader, GlowCard, etc.)
  - `src/components/models/` - 3D scene components organized by section
  - `src/constants/index.js` - Centralized data store for ALL content (navigation, experience, tech stack, testimonials, social links)

### 3D Rendering Pattern

Each major section with 3D content has its own isolated `<Canvas>` component:
- **Hero section**: `HeroExperience.jsx` - Room model with particle system and selective bloom effect
- **Contact section**: `ContactExperience.jsx` - Computer model with lighting
- **Tech Stack**: `TechIconCardExperience.jsx` - Animated 3D tech logos

**Key pattern**: 3D components are structured as:
1. Experience component (Canvas wrapper with camera, lighting setup)
2. Individual model components (Room, Computer, tech logos)
3. Lights components for scene-specific lighting
4. Use `Suspense` for async 3D model loading

### State Management

Minimal state management approach:
- React hooks (`useState`, `useRef`, `useEffect`) for local component state
- No global state manager (no Redux, Zustand, or Context API)
- `useGSAP` hook from GSAP for animation orchestration
- All portfolio content is static and defined in `src/constants/index.js`

### Animation Strategy

- **GSAP with ScrollTrigger**: Primary animation library for scroll-based effects
- **Experience timeline**: Uses GSAP timeline with ScrollTrigger for card reveal animations
- **Three.js animations**: Frame-based animations for 3D objects (particles, floating effects)
- **Selective Bloom**: Post-processing effect applied to specific 3D objects for glow

### 3D Models

- **Format**: GLTF (`.glb` files)
- **Location**: `/public/models/`
- **Loading**: `useGLTF` hook from @react-three/drei
- **Models include**: room, computer, tech logos (React, Python, Node.js, Three.js, Git)

### Internationalization (i18n)

The site supports Hebrew and English with full RTL support:
- **Language Detection**: URL parameter `?lang=he` or `?lang=en`
- **Translation Files**: `src/i18n/locales/en/` and `src/i18n/locales/he/`
- **Translation Namespaces**: navigation, hero, about, experience, skills, contact, showcase, common
- **RTL Support**: Custom CSS in `src/styles/rtl.css` for Hebrew layout
- **Language Toggle**: Capsule-style toggle in NavBar with EN/עב buttons
- **Important**: All text content is in translation files, NOT in constants

## Environment Setup

The contact form requires EmailJS credentials in `.env`:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Key Architecture Patterns

1. **Canvas Isolation**: Each 3D scene is rendered in its own `<Canvas>` component to prevent conflicts
2. **Constants-driven Content**: All portfolio data (experience, tech stack, testimonials) lives in `src/constants/index.js` - modify there to update content
3. **Component Composition**: Reusable components (Button, TitleHeader, GlowCard) used throughout sections
4. **Suspense Boundaries**: Used in 3D experiences for graceful handling of async model loading
5. **Responsive Design**: Uses `react-responsive` for conditional rendering based on screen size

## Data Flow

```
src/constants/index.js → Section components → Render
```

All content (navigation links, experience cards, tech stack, testimonials, social links) is defined in constants and consumed by section components. No API calls or dynamic data fetching.

## Critical Files

- [src/App.jsx](src/App.jsx) - Main application component with all sections
- [src/constants/index.js](src/constants/index.js) - Portfolio data (skills, tech stack - NOT text content)
- [src/i18n/config.js](src/i18n/config.js) - i18n configuration and initialization
- [src/i18n/locales/](src/i18n/locales/) - Translation files for Hebrew and English
- [src/components/models/hero_models/HeroExperience.jsx](src/components/models/hero_models/HeroExperience.jsx) - Reference implementation for 3D scene setup
- [src/sections/Experience.jsx](src/sections/Experience.jsx) - Reference implementation for GSAP ScrollTrigger animations
- [vite.config.js](vite.config.js) - Build configuration
- [.env](.env) - Environment variables for EmailJS
