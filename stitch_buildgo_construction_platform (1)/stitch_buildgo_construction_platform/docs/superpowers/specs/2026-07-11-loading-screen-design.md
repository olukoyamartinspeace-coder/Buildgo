# Loading Screen — Cinematic Luxury Preloader

## Objective
Add a premium cinematic loading overlay to the BuildGo home page that appears instantly on page open and transitions seamlessly into the existing scroll-driven hero section.

## Constraints
- Do NOT modify any existing sections (navigation, hero, services, projects, about, testimonials, contact, footer).
- Only add the loading experience as an overlay.
- The hero must render underneath the loader during load (no white flash, no layout shift).
- 60 FPS, GPU-accelerated (only `transform`, `opacity`, `filter`).

## Architecture

```
<body>
  <div id="loader-overlay">      ← NEW: fixed overlay, z-index 99999
    <!-- Animated background -->
    <!-- Logo + tagline -->
    <!-- Loading line -->
    <!-- Accessibility text -->
  </div>
  <header>...</header>            ← EXISTING, unchanged
  <main>
    <section id="scroll-hero">... ← EXISTING, renders underneath loader
    ...other sections...
  </main>
  <footer>...</footer>
</body>
```

## Components

### 1. Loader Overlay
- `position: fixed; inset: 0; z-index: 99999; background: #050505; overflow: hidden`
- Prevents body scrolling while visible (`overflow: hidden` on html/body via JS)
- Removed from DOM flow after reveal

### 2. Animated Background
- Multiple CSS gradient layers with slow `@keyframes` shift
- Three gradients: dark base + gold accent sweep + volumetric light
- Movement is barely perceptible — takes 8-12s to complete a cycle
- No particles, no flashy effects

### 3. Logo Reveal
- Same BuildGo logo src as header
- CSS animation sequence (3s total):
  - 0.0s: `opacity: 0; scale: 0.9; rotate: 0deg`
  - 0.5s: fade in complete
  - 0.5-1.5s: scale 0.9→1, rotate 0→2→0deg
  - 1.0-2.0s: gold `drop-shadow(#c9a44a)` glow, then fade out
  - 2.0-3.0s: hold at final state

### 4. Luxury Typography
- "CRAFTING EXCELLENCE" — Montserrat (already loaded), `font-weight: 300`
- `text-transform: uppercase; letter-spacing: 0.35em; color: #ffffff; opacity: 0.7`
- Fades in at 2.5s (after logo settles)

### 5. Gold Loading Line
- Container: centered, `width: 240px; height: 2px; background: rgba(255,255,255,0.08)`
- Inner line: `width: 0% → 100%`, gold `background: #c9a44a`, `box-shadow: 0 0 12px #c9a44a44`
- Duration: matches actual asset loading (not a fixed time)
- Soft reflection travels across via pseudo-element animation

### 6. Micro Animations (CSS only)
- Light sweep over logo: pseudo-element with `linear-gradient` animating `translateX`
- Reflection on loading line: `skewX` gradient that slides left-to-right
- Background gradient: `background-position` shifts over 12s loop

### 7. Asset Loading
Promise-based, resolves when ALL are ready:

| Asset | Signal |
|-------|--------|
| Hero video | `loadedmetadata` event |
| Web fonts | `document.fonts.ready` |
| Images + CSS | `window` `load` event |
| Layout computed | 1x `requestAnimationFrame` |

### 8. Accessibility
- 4s timeout: "Preparing your luxury experience..." fades in
- 8s timeout: "Optimizing assets..." replaces above
- Text is centered below the loading line, `font-size: 12px; letter-spacing: 0.2em; opacity: 0.6`

### 9. Reveal Transition
Duration: 900-1200ms, RAF-synced:

| Step | Timing | Animation |
|------|--------|-----------|
| 1 | 0ms | Loading line finishes (already at 100%) |
| 2 | 0ms | Logo begins to dim: `opacity: 1 → 0.6` |
| 3 | 100ms | `backdrop-filter: blur(0) → blur(4px)` on overlay |
| 4 | 200ms | Overlay `transform: scale(1) → scale(1.02)` |
| 5 | 300ms | Overlay `opacity: 1 → 0` |
| 6 | 600ms | Overlay `translateY(0) → translateY(-10%)` |
| 7 | 900-1200ms | All complete, overlay set to `display: none` |

### 10. Hero Handoff
- Hero section is already rendered underneath (video playing, content at initial hidden state)
- After loader reveals, the scroll-driven hero animation is active immediately
- No flash, no jump, no layout shift

## Colors
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#050505` | Overlay fill |
| Gold | `#c9a44a` | Loading line, logo glow |
| Gold glow | `#c9a44a44` | Box-shadow on line |
| Text primary | `#ffffff` | Tagline |
| Text muted | `rgba(255,255,255,0.6)` | Accessibility text |

## Performance
- All animations: `transform`, `opacity`, `filter` only
- `will-change: transform, opacity` on overlay, logo, line
- CSS animations use GPU compositing
- JS only for asset tracking and reveal timing

## Mobile
- Same structure
- Reduce `backdrop-filter: blur(2px)` (less intense)
- Same font sizes
- No particle count (no particles to begin with)
