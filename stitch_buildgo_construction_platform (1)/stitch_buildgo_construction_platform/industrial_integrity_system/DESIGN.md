---
name: Industrial Integrity System
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbdad9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#e9e8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#303031'
  inverse-on-surface: '#f2f0f0'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#a63b00'
  on-secondary: '#ffffff'
  secondary-container: '#fc6c29'
  on-secondary-container: '#5a1c00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb599'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#7f2b00'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
  headline-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The design system is engineered to project strength, precision, and architectural expertise. It targets stakeholders in construction, civil engineering, and large-scale infrastructure development. The visual language evokes a sense of "built to last" through heavy structural elements and high-contrast layouts.

The aesthetic blends **Modern Corporate** with **Subtle Industrialism**. It utilizes a rigorous grid system, sharp edges, and deliberate negative space to create a professional, authoritative presence. Large, impactful typography and architectural blueprint textures underscore the engineering focus, ensuring the UI feels as grounded as the projects it represents.

## Colors

The palette is rooted in the "Safety & Steel" aesthetic of a modern construction site. 

- **Deep Charcoal (#1A1A1A):** Used for primary backgrounds, hero sections, and high-level headings to provide a solid, structural foundation.
- **Industrial Orange (#F26522):** The action color. It is used sparingly for primary buttons, alerts, progress indicators, and key highlights to draw immediate attention, mimicking site safety markers.
- **Clean White (#FFFFFF):** Utilized for content backgrounds and body sections to maintain high legibility and a professional "blueprint" feel.
- **Neutral Silver (#F5F5F5):** Provides tonal variation for surface backgrounds, preventing eye strain in data-heavy modules.

## Typography

Typography in this design system is built for authority and clarity. 

**Montserrat** is the display face, chosen for its geometric strength and architectural heritage. Large headlines should use heavy weights (700-800) to command attention and represent structural solidity.

**Inter** handles all body copy and UI labels. It provides exceptional legibility for technical specifications, project descriptions, and data tables. Labels and utility text utilize semi-bold weights and uppercase styling to differentiate them from prose.

## Layout & Spacing

This design system employs a **12-column fixed grid** for desktop, transitioning to a **4-column fluid grid** for mobile. The layout emphasizes vertical blocks of high contrast (alternating Charcoal and White sections) to create clear narrative pacing.

Spacing follows a strict 8px base unit. Wide margins and generous gutters (32px) are used to prevent technical content from feeling cluttered. Alignment is strictly left-justified for headings and body to reinforce a sense of order and precision. Project galleries should utilize a "masonry" or "asymmetric grid" to add visual interest to geometric architectural photography.

## Elevation & Depth

To maintain a "solid" feel, this design system avoids soft, floating shadows. Instead, it uses **Tonal Layers** and **Bold Outlines** to define hierarchy.

- **Level 0 (Floor):** Primary background colors (Charcoal or White).
- **Level 1 (Surface):** Light gray (#F5F5F5) backgrounds for cards and input fields.
- **Level 2 (Active):** High-contrast borders (1px Solid) in Industrial Orange or Deep Charcoal to indicate selection or focus.
- **Industrial Textures:** Very subtle grid-line overlays or blueprint-style patterns are used in hero backgrounds to provide depth without adding visual noise.

## Shapes

The shape language is **Sharp**. Rounded corners are avoided to reflect the hard edges of steel, glass, and concrete. 

All buttons, input fields, and cards feature 90-degree angles. This uncompromising geometry reinforces the brand's commitment to precision engineering and structural integrity. Imagery should also be framed in sharp containers, with diagonal "cut-out" details used sparingly for call-to-action blocks to mimic architectural drafting angles.

## Components

### Buttons
Primary buttons are solid Industrial Orange with White text. Hover states transition to a slightly darker shade (#D9541B) with a subtle 2px inset border on the bottom. Secondary buttons use a heavy Charcoal outline with no fill.

### Cards
Service and Project cards feature a top-aligned image with a sharp 1px border. Text content within the card is padded generously. On hover, project cards should reveal a subtle overlay in Industrial Orange with technical project details (e.g., "SQ FT," "LOCATION").

### Input Fields
Fields utilize a light gray background (#F5F5F5) with a bottom-only 2px border in Charcoal. Upon focus, the border transitions to Industrial Orange.

### Lists & Tables
Data lists for engineering specs use alternating row tints and monospaced digits (Inter) for perfect alignment. Bullet points are replaced with small orange squares to maintain the geometric theme.

### Progress Indicators
Used for project completion phases, these are thick, horizontal bars in Charcoal with an Industrial Orange fill.