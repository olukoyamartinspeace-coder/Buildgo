# Loading Screen Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a cinematic luxury loading screen to the BuildGo home page that covers the page on open, waits for real asset readiness, and reveals the hero with a premium transition.

**Architecture:** Inject a fixed overlay at z-index 99999 at the start of `<body>`. All animations use GPU-composited properties (`transform`, `opacity`, `filter`). Asset loading uses Promise-based tracking. No existing elements are modified.

**Tech Stack:** Vanilla CSS animations + JS Promises. No libraries.

**File:** `buildgo_home/code.html` (single-file page, inject into existing structure)

---

### Task 1: Inject loader HTML after `<body>`

**File:** Modify `buildgo_home/code.html`

- [ ] **Step 1: Read the file**

Run: PowerShell to read the file content

Find the position right after `<body ...>` tag to inject the loader div.

- [ ] **Step 2: Inject loader HTML**

Insert the following HTML right after the opening `<body>` tag (after `class="...">`):

```html
<div id="loader-overlay" style="position:fixed;inset:0;z-index:99999;background:#050505;overflow:hidden;display:flex;align-items:center;justify-content:center;will-change:transform,opacity">
  <div id="loader-bg" style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%, rgba(201,164,74,0.03) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.02) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(201,164,74,0.02) 0%, transparent 50%), #050505;will-change:background-position;animation:loaderBgShift 12s ease-in-out infinite"></div>
  <div id="loader-inner" style="position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:48px">
    <div id="loader-logo-wrap" style="position:relative;will-change:transform,opacity">
      <div id="loader-logo-glow" style="position:absolute;inset:-30px;background:radial-gradient(ellipse, rgba(201,164,74,0.15) 0%, transparent 70%);opacity:0;will-change:opacity"></div>
      <img id="loader-logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMM_E4cdjs5xOEbLlAcNmaX9bWfYIpR54K15A1ULXcPegCNzySjdmOeZ6l_IRM3OOncC7rcRhIwswaE65efnCuQtPK3w3zBcvFwHSFCCrf2B95nucvFG0NbhO10lZdBe2PDrdZh7A376FEeQEfyPZYL1hpGkFCaOdAkxxQBKTQL4q3yS5AjvxIok7W6nL_F4YcxILtQ0UMcytbGAtgXaOtpLW4cfgYoTIg660V-IL3Nt-PTzw8N7VI" alt="BuildGo" style="height:48px;width:auto;will-change:transform,opacity;opacity:0">
      <div id="loader-lightsweep" style="position:absolute;inset:0;background:linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%);transform:translateX(-100%);will-change:transform"></div>
    </div>
    <div id="loader-tagline" style="font-family:Montserrat,sans-serif;font-weight:300;font-size:14px;letter-spacing:0.35em;text-transform:uppercase;color:#ffffff;opacity:0.7;opacity:0;will-change:transform,opacity">Crafting Excellence</div>
    <div id="loader-line-container" style="width:240px;height:2px;background:rgba(255,255,255,0.06);border-radius:1px;overflow:hidden;position:relative">
      <div id="loader-line" style="width:0%;height:100%;background:#c9a44a;border-radius:1px;box-shadow:0 0 12px rgba(201,164,74,0.25);will-change:transform,width"></div>
      <div id="loader-line-glint" style="position:absolute;top:0;left:0;width:60px;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent);transform:translateX(-100%);will-change:transform"></div>
    </div>
    <div id="loader-message" style="font-family:Montserrat,sans-serif;font-weight:300;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.4);opacity:0;will-change:opacity">Preparing your luxury experience...</div>
  </div>
</div>
```

- [ ] **Step 3: Verify injection**

Check that the loader div is present directly after `<body>` and before `<header>`.

- [ ] **Step 4: Commit**

---

### Task 2: Add loader CSS animations to head

**File:** Modify `buildgo_home/code.html`

- [ ] **Step 1: Append loader CSS keyframes**

Add the following CSS at the end of the existing `<style>` block in `<head>`:

```css
/* Loader background shift */
@keyframes loaderBgShift{0%,100%{background-position:0% 50%,80% 20%,20% 80%,0% 0%}50%{background-position:100% 50%,60% 10%,40% 90%,0% 0%}}
/* Logo reveal */
@keyframes logoReveal{0%{opacity:0;transform:scale(0.9) rotate(0deg)}50%{opacity:1;transform:scale(1.05) rotate(2deg)}70%{opacity:1;transform:scale(1) rotate(0deg)}100%{opacity:1;transform:scale(1) rotate(0deg)}}
/* Logo glow pulse */
@keyframes logoGlowPulse{0%,100%{opacity:0}30%{opacity:1}60%{opacity:0.3}}
/* Light sweep across logo */
@keyframes lightSweep{0%{transform:translateX(-100%)}60%{transform:translateX(200%)}100%{transform:translateX(200%)}}
/* Line glint travel */
@keyframes lineGlint{0%{transform:translateX(-100%)}100%{transform:translateX(400%)}}
/* Tagline fade */
@keyframes taglineFade{0%{opacity:0;transform:translateY(8px)}100%{opacity:0.7;transform:translateY(0)}}
/* Message fade */
@keyframes messageFade{0%{opacity:0}100%{opacity:1}}
/* Reveal */
@keyframes loaderReveal{0%{transform:scale(1) translateY(0);opacity:1;filter:blur(0)}100%{transform:scale(1.02) translateY(-10%);opacity:0;filter:blur(4px)}}
/* BG blur increase */
@keyframes loaderBlur{0%{filter:blur(0)}100%{filter:blur(4px)}}
/* Loader complete (hidden state) */
.loader-hidden #loader-overlay{animation:loaderReveal 1s cubic-bezier(0.65,0,0.35,1) forwards;pointer-events:none}
.loader-hidden #loader-overlay #loader-inner{opacity:0;transition:opacity 0.4s ease}
/* Prevent scroll during load */
html.loading,html.loading body{overflow:hidden;height:100%}
```

- [ ] **Step 2: Add initial animation classes via inline style**

Do NOT use CSS animation initially — instead let the JS add animation classes when ready.

The CSS keyframes are defined globally. JS will set animation properties via inline styles or class toggles.

- [ ] **Step 3: Verify CSS is syntactically valid**

Check the style block for balanced braces.

- [ ] **Step 4: Commit**

---

### Task 3: Add loader JavaScript before `</body>`

**File:** Modify `buildgo_home/code.html`

- [ ] **Step 1: Add the loader JS block**

Insert a new `<script>` block after the existing counter animation script and before the DOMContentLoaded handler. The script should:

1. Add `loading` class to `<html>` to prevent scroll
2. Start all CSS animations on mount (logo, tagline, line, glint, background)
3. Track asset loading via Promises
4. On all ready, execute reveal animation
5. Handle 4s and 8s timeouts for accessibility text

```html
<script>
(function() {
  'use strict';
  var html = document.documentElement;
  html.classList.add('loading');

  var overlay = document.getElementById('loader-overlay');
  var logo = document.getElementById('loader-logo');
  var logoGlow = document.getElementById('loader-logo-glow');
  var sweep = document.getElementById('loader-lightsweep');
  var tagline = document.getElementById('loader-tagline');
  var line = document.getElementById('loader-line');
  var glint = document.getElementById('loader-line-glint');
  var msg = document.getElementById('loader-message');
  var video = document.getElementById('hero-video');

  function startAnimations() {
    logo.style.cssText = 'height:48px;width:auto;will-change:transform,opacity;animation:logoReveal 2.5s cubic-bezier(0.25,0.1,0.25,1) forwards';
    logoGlow.style.animation = 'logoGlowPulse 3s ease-out forwards';
    sweep.style.animation = 'lightSweep 4s ease-in-out 0.5s forwards';
    tagline.style.animation = 'taglineFade 1s ease-out 2.5s forwards';
    glint.style.animation = 'lineGlint 3s linear 0.5s infinite';
  }

  function setLineProgress(pct) {
    line.style.width = pct + '%';
  }

  function setMessage(text) {
    msg.textContent = text;
    msg.style.animation = 'messageFade 0.8s ease-out forwards';
  }

  // Start logo/tagline animations immediately
  startAnimations();

  // Asset loading promises
  var videoReady = new Promise(function(resolve) {
    if (!video) { resolve(); return; }
    if (video.readyState >= 2) { resolve(); return; }
    video.addEventListener('loadedmetadata', resolve, { once: true });
  });

  var fontsReady = document.fonts.ready;

  var pageLoaded = new Promise(function(resolve) {
    if (document.readyState === 'complete') { resolve(); return; }
    window.addEventListener('load', resolve, { once: true });
  });

  var layoutReady = new Promise(function(resolve) {
    requestAnimationFrame(function() { requestAnimationFrame(resolve); });
  });

  // Track line progress (visual feedback while loading)
  var lineProgress = 0;
  var lineInterval = setInterval(function() {
    if (lineProgress < 90) {
      lineProgress += 1 + Math.random() * 2;
      if (lineProgress > 90) lineProgress = 90;
      setLineProgress(lineProgress);
    }
  }, 200);

  // Accessibility timeouts
  var msgTimer1 = setTimeout(function() { setMessage('Preparing your luxury experience...'); }, 4000);
  var msgTimer2 = setTimeout(function() { setMessage('Optimizing assets...'); }, 8000);

  // When all assets ready
  Promise.all([videoReady, fontsReady, pageLoaded, layoutReady]).then(function() {
    clearInterval(lineInterval);
    clearTimeout(msgTimer1);
    clearTimeout(msgTimer2);
    msg.style.opacity = '0';
    setLineProgress(100);

    // Small pause then reveal
    setTimeout(function() {
      html.classList.remove('loading');
      overlay.style.animation = 'loaderReveal 1s cubic-bezier(0.65,0,0.35,1) forwards';
      overlay.style.pointerEvents = 'none';
      var inner = document.getElementById('loader-inner');
      if (inner) inner.style.transition = 'opacity 0.4s ease';
      if (inner) inner.style.opacity = '0';

      // Remove overlay from DOM after transition
      setTimeout(function() {
        overlay.style.display = 'none';
        document.body.removeChild(overlay);
      }, 1200);
    }, 400);
  });
})();
</script>
```

- [ ] **Step 2: Verify JS syntax**

Check for balanced braces, no undefined variables, no syntax errors.

- [ ] **Step 3: Commit**

---

### Task 4: Test and verify

- [ ] **Step 1: Verify server running**

Check http://localhost:8000/buildgo_home/code.html loads

- [ ] **Step 2: Verify loader appears**

Check that loading overlay is visible on first paint before any content

- [ ] **Step 3: Verify reveal works**

Check that overlay disappears after assets load and hero is visible beneath

- [ ] **Step 4: Verify no layout shift**

Check that page does not jump or flash white during transition

- [ ] **Step 5: Commit final**

---

### Task 5: Push to GitHub

- [ ] **Step 1: Add and commit all changes**

```bash
git add -A
git commit -m "feat: add cinematic luxury loading screen with asset-aware reveal"
```

- [ ] **Step 2: Push to origin**

```bash
git push origin main
```
