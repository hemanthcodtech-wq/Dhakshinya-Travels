# React + Vite Travel Website Enhancement Prompt

## Objective

Enhance the **existing React + Vite Tirupati Balaji Tours & Travels website** into a premium, modern, visually rich **travel-booking platform**.

**Do NOT rebuild the application from scratch.** Inspect the existing React/Vite codebase first, preserve the current functionality, routes, API integrations, data, and components wherever possible, and progressively improve the UI/UX.

The website should feel like a combination of a **premium travel agency + modern booking platform**, with smooth animations, immersive imagery, excellent mobile responsiveness, and fast performance.

---

# 1. Design Direction

Use a premium **Tirupati spiritual travel** visual identity.

### Primary colors

- Deep Royal Blue: `#111B5E`
- Temple Blue: `#172A72`
- Golden Yellow: `#F4C400`
- Warm Gold: `#DFA900`
- White: `#FFFFFF`
- Soft Background: `#F7F8FC`
- Dark Text: `#111827`

Use gold primarily for:

- CTAs
- highlights
- active navigation
- icons
- borders
- decorative elements

Avoid making the entire website yellow.

---

# 2. Required Libraries

Use lightweight, production-friendly libraries where they provide real UX value.

### Animation

Use:

```bash
npm install framer-motion
```

Use **Framer Motion** for:

- scroll reveal animations
- fade/slide animations
- card hover animations
- hero entrance animation
- staggered sections
- modal animations
- mobile menu animation
- image zoom effects

Do not animate everything. Animations should feel premium and purposeful.

### Smooth scrolling

Use:

```bash
npm install lenis
```

Add smooth scrolling carefully without affecting accessibility or performance.

### Icons

Use:

```bash
npm install lucide-react
```

Use Lucide icons consistently instead of random emoji icons.

Examples:

- `MapPin`
- `Phone`
- `MessageCircle`
- `Calendar`
- `Clock`
- `Users`
- `Bus`
- `Car`
- `Plane`
- `Temple`
- `ArrowRight`
- `ChevronDown`
- `Star`
- `ShieldCheck`

### Carousels

Use:

```bash
npm install swiper
```

Use Swiper for:

- hero slides if needed
- fleet carousel
- popular tours
- destinations
- testimonials
- blog cards

Do not create unnecessary carousels.

### Optional

Use GSAP only if a section genuinely requires advanced timeline animation.

```bash
npm install gsap
```

Prefer **Framer Motion** for normal UI animation.

---

# 3. Global UX Requirements

Make the website:

- fully responsive
- mobile-first
- tablet-friendly
- desktop optimized
- accessible
- keyboard navigable
- fast
- SEO-friendly
- visually consistent

Avoid:

- excessive animation
- giant unnecessary JavaScript bundles
- animation on every element
- excessive gradients
- excessive glassmorphism
- huge shadows
- layout shifts
- slow-loading hero images

---

# 4. Header / Navbar Enhancement

Create a premium sticky navbar.

### Desktop

```text
Logo | Home | Cabs | Fleet | Tours | Destinations | Services | Blog | About | Contact | WhatsApp
```

Use a transparent navbar over the hero initially.

When scrolling:

```text
transparent → white/glass navbar
```

with:

- subtle shadow
- backdrop blur
- smooth transition
- smaller navbar height

### Navigation animation

Dropdown menus should:

- fade in
- slide down slightly
- have staggered menu items
- close smoothly

Use Framer Motion.

### Mobile

Create an animated mobile drawer.

Opening:

```text
right/left slide-in
+
background overlay
+
staggered menu items
```

---

# 5. Hero Section

This is the most important section.

Use the newly created **Tirupati Balaji bus image** as the main hero visual.

The hero should have a strong visual hierarchy.

### Layout

Desktop:

```text
LEFT
Headline
Description
CTA buttons
Trust indicators

RIGHT
Large bus / Tirumala visual
```

Use the bus image with:

- subtle parallax movement
- hover movement
- slow floating animation
- soft shadow
- responsive scaling

### Headline

Use:

```text
TRAVEL WITH TRUST.
JOURNEY WITH BLESSINGS.
```

Highlight selected words in gold.

### Supporting text

```text
Comfortable and reliable travel for
Tirupati Darshan, temple tours and
South India pilgrimage journeys.
```

### CTA

```text
Book a Cab
Explore Tours
```

### Hero image effects

When the user moves the mouse:

- image should move slightly
- background elements should move at a slower speed
- create subtle depth

Do NOT make the parallax excessive.

---

# 6. Hero Image Hover

Implement a premium image interaction.

Example behavior:

```text
Mouse movement
      ↓
small translateX/Y
      ↓
slight scale
      ↓
soft shadow change
```

Use Framer Motion.

The image must remain stable and never jump outside the viewport.

---

# 7. Booking Search Panel

Place a floating booking card overlapping the hero bottom.

Desktop:

```text
┌──────────────────────────────────────────────────────┐
│ FROM       TO          DATE       TRIP TYPE           │
│ Tirupati   Tirumala    Select     One Way / Round    │
│                                                      │
│                 [ SEARCH CABS ]                      │
└──────────────────────────────────────────────────────┘
```

Use:

- rounded 20px
- white background
- subtle shadow
- gold active states
- clean icons

Mobile:

Stack fields vertically.

---

# 8. Quick Services Section

Create 8 premium service cards:

1. One Way Cab
2. Round Trip
3. Local Sightseeing
4. Airport Taxi
5. Temple Darshan Taxi
6. Outstation Taxi
7. Corporate Travel
8. Premium Car Rental

### Card interaction

Default:

```text
icon
title
short description
```

Hover:

```text
card moves upward
image/icon scales
gold accent appears
arrow slides right
```

Use:

```text
whileHover={{ y: -8 }}
```

and subtle spring transitions.

---

# 9. Fleet Section

Create a premium fleet showcase.

### Categories

```text
Cars
Travellers
Buses
```

### Cars

- Sedan
- Swift Dzire
- Etios
- Ertiga
- Innova
- Innova Crysta

### Travellers

- Tempo Traveller 12 Seater
- Tempo Traveller 16 Seater
- Force Urbania

### Buses

- 20 Seater
- 27 Seater
- 40 Seater
- 50 Seater

Use a Swiper carousel.

Each vehicle card should contain:

```text
IMAGE

Vehicle Name
Passengers
AC
Luggage
Local / Outstation

[View Details]
[Book Now]
```

---

# 10. Fleet Image Hover

Vehicle images should have a premium interaction.

On hover:

```text
image scale: 1 → 1.06
```

Card:

```text
translateY(-6px)
```

Overlay:

```text
View Vehicle
```

appears smoothly.

Do not crop the vehicle incorrectly.

Use:

```css
object-fit: contain;
```

where appropriate.

---

# 11. Tirupati Local Tours

Create a visually rich section:

## Explore Tirupati

Display destinations such as:

- Tirumala
- Tirupati Balaji Temple
- Kapila Theertham
- Govindaraja Swamy Temple
- Padmavathi Temple
- ISKCON Temple
- Srinivasa Mangapuram
- Japali Theertham
- Akasha Ganga
- Papavinasanam
- Silathoranam
- Srikalahasti
- Kanipakam

Use large destination cards.

### Hover

Image:

```text
scale(1.08)
```

Content:

```text
translateY(-10px)
```

Add:

```text
Explore →
```

---

# 12. Tirumala / Spiritual Hero Section

Create a dedicated spiritual section using realistic Tirumala imagery.

Visual concept:

```text
Tirumala hills
+
temple architecture
+
lush green surroundings
+
warm golden light
```

Avoid artificial-looking mountains.

The environment should resemble the real Tirumala region.

Add a subtle dark gradient over the image so text remains readable.

---

# 13. Tour Packages

Create a premium package grid.

### Local

- Tirupati 5 Temples Tour
- Tirupati → Srikalahasti
- Tirupati → Kanipakam
- Tirupati → Golden Temple
- Tirupati → Tiruvannamalai

### South India

- Arunachalam
- Kanchipuram
- Mahabalipuram
- Srisailam
- Rameshwaram
- Madurai
- Kanyakumari
- Srirangam
- Chidambaram

Each package card:

```text
Image
Package title
Duration
Places covered
Starting price
Rating
[View Package]
```

Use animated hover effects.

---

# 14. Sliding Tour Cards

Use Swiper.

Desktop:

```text
3 cards visible
```

Tablet:

```text
2 cards
```

Mobile:

```text
1 card
```

Add:

- pagination
- navigation arrows
- touch/swipe
- autoplay only where useful

Do not autoplay too aggressively.

---

# 15. Airport Transfer Section

Create a premium airport transfer section.

```text
Airport Transfers

✈ Tirupati Airport
✈ Chennai Airport
✈ Bangalore Airport
✈ Hyderabad Airport
```

Use an airport/travel image on one side and cards on the other.

CTA:

```text
Book Airport Taxi
```

---

# 16. Services / Tour Categories

Create visual category cards:

- Temple Tours
- Hill Station Tours
- Adventure Tours
- Heritage Tours
- Beach & Backwater Tours
- Group Tours

Use large background images.

On hover:

```text
image zoom
+
dark overlay
+
title moves upward
+
ArrowRight appears
```

---

# 17. Why Choose Us

Create a clean trust section.

Cards:

### 24/7 Support

Always available for travel assistance.

### Experienced Drivers

Professional and reliable drivers.

### Clean Vehicles

Comfortable and well-maintained fleet.

### Transparent Pricing

No confusing hidden charges.

### On-Time Service

Reliable pickup and drop service.

### Easy Booking

Quick booking through web or WhatsApp.

Use animated counters/icons where appropriate.

---

# 18. Testimonials

Create a modern testimonial slider.

Each card:

```text
★★★★★

"Excellent service for our Tirupati trip."

Customer Name
Trip Type
```

Use Swiper.

Add subtle entrance animations.

---

# 19. Blog Section

Create:

## Travel & Pilgrimage Guide

Featured article:

```text
Large image
Large title
description
Read Article →
```

Then smaller cards:

- Tirumala Darshan Guide
- Best Places to Visit in Tirupati
- Tirupati to Srikalahasti
- Tirupati Local Temples
- Best Time to Visit Tirumala
- Tirupati Airport Guide
- Tirupati Travel Tips
- Thiruttani Temple Guide
- Srinivasa Mangapuram Guide

Blog cards should have image hover zoom.

---

# 20. Contact CTA

Create a full-width CTA near the bottom.

Use a beautiful Tirumala background.

Text:

```text
Planning Your Tirupati Journey?

Let us make your travel comfortable,
safe and memorable.
```

Buttons:

```text
Call Now
WhatsApp Us
Book a Cab
```

Use:

**+91 8688624758**

---

# 21. Contact Information

Use the existing business information:

```text
Tirupati Balaji Tours Travels

Phone:
+91 8688624758

Email:
Taxi@TirupatiBalajiToursTravels.com

Address:
10-12A, Balakrishna Puram,
Mangalam, Tirupati,
Andhra Pradesh, India

Availability:
24×7

Contact:
Mr. Sarath
```

Make phone and WhatsApp buttons clickable.

---

# 22. Footer

Create a large modern footer.

### Column 1

Company

- About Us
- Contact
- Careers
- Testimonials

### Column 2

Services

- Tirupati Cabs
- Airport Taxi
- Outstation Taxi
- Car Rental
- Bus Rental
- Tempo Traveller

### Column 3

Popular Tours

- Tirupati
- Srikalahasti
- Kanipakam
- Chennai
- Bangalore
- Kanchipuram
- Rameshwaram

### Column 4

Contact

- Phone
- WhatsApp
- Email
- Address

Add social icons.

---

# 23. Scroll Animations

Every major section should reveal naturally as the user scrolls.

Use Framer Motion.

Animation pattern:

```text
opacity: 0 → 1
y: 30 → 0
```

Duration:

```text
0.5s - 0.8s
```

Use stagger for card grids.

Example:

```text
Section enters
    ↓
heading
    ↓
description
    ↓
cards stagger in
```

Do not animate sections repeatedly every time the user scrolls unless necessary.

---

# 24. Image Reveal Effects

For major images:

```text
container overflow hidden
image scale 1.08
opacity 0
      ↓
scale 1
opacity 1
```

This creates a premium editorial-style reveal.

---

# 25. Section Dividers

Do not use boring straight separators everywhere.

Use subtle:

- curved transitions
- soft gradients
- oversized background shapes
- temple-inspired geometric patterns
- gold accent lines

Keep them extremely subtle.

---

# 26. Floating WhatsApp Button

Add a fixed WhatsApp button.

Position:

```text
bottom: 24px
right: 24px
```

Use a subtle pulse animation.

On hover:

```text
scale up
```

Tooltip:

```text
Chat with us
```

Do not make the pulse distracting.

---

# 27. Scroll-to-Top Button

When the user scrolls down approximately 500px, show a floating scroll-to-top button.

Animate:

```text
opacity
scale
```

Use Lucide `ArrowUp`.

---

# 28. Loading Experience

Do not display a blank white screen while the application loads.

Create a lightweight branded loader:

```text
TB
Tirupati Balaji
Tours & Travels
```

Use a subtle gold loading animation.

Avoid long loading screens.

---

# 29. Skeleton Loading

Where API data is loaded dynamically, use skeleton cards instead of blank areas.

Create reusable components:

```text
VehicleCardSkeleton
TourCardSkeleton
DestinationCardSkeleton
BlogCardSkeleton
```

---

# 30. Responsive Behavior

### Desktop ≥ 1280px

Use:

- wide hero
- 4-column service grid
- 3-column package grid
- large fleet cards

### Tablet

Use:

- 2-column grids
- compact navbar
- 2-column booking form

### Mobile

Use:

- single-column sections
- horizontal sliders
- sticky bottom booking CTA
- mobile drawer navigation
- large touch targets
- readable typography

Never allow horizontal page overflow.

---

# 31. Performance Requirements

This is extremely important.

### Images

Use:

```text
WebP / AVIF
```

where possible.

Implement:

```html
loading="lazy"
```

for below-the-fold images.

Hero image should be prioritized.

Use responsive images where possible.

Do not load 100+ images immediately.

---

# 32. Component Architecture

Keep the React project maintainable.

Suggested structure:

```text
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── MobileMenu.jsx
│   │
│   ├── hero/
│   │   ├── Hero.jsx
│   │   └── BookingWidget.jsx
│   │
│   ├── fleet/
│   │   ├── FleetSection.jsx
│   │   ├── VehicleCard.jsx
│   │   └── FleetTabs.jsx
│   │
│   ├── tours/
│   ├── destinations/
│   ├── services/
│   ├── testimonials/
│   ├── blog/
│   └── common/
│
├── data/
│   ├── vehicles.js
│   ├── tours.js
│   ├── destinations.js
│   ├── services.js
│   └── blog.js
│
├── pages/
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── Fleet.jsx
│   ├── Tours.jsx
│   ├── Destinations.jsx
│   ├── Blog.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
└── utils/
```

Do not duplicate vehicle/tour data directly inside components.

---

# 33. Routing

Preserve existing routes.

If routing needs improvement, use React Router.

Important:

**Refreshing any nested route must NOT redirect the user to Home.**

For example:

```text
/tours
/fleet
/destinations
/blog
/contact
```

must remain on the same page after browser refresh.

Configure SPA fallback correctly for Vite deployment.

---

# 34. SEO

Add proper:

- page titles
- meta descriptions
- semantic headings
- image alt text
- Open Graph metadata
- canonical URLs where appropriate

Use location-focused SEO naturally:

```text
Tirupati taxi
Tirupati cab service
Tirupati airport taxi
Tirupati tour packages
Tirupati sightseeing
Tirumala taxi
Tirupati bus rental
Tirupati tempo traveller
South India pilgrimage tours
```

Do not keyword-stuff.

---

# 35. Visual Quality Rules

The final result must NOT look like a generic AI-generated website.

Avoid:

- excessive rounded cards
- excessive gradients
- random glass effects
- too many floating blobs
- excessive shadows
- emoji-based UI
- inconsistent icon styles
- oversized text everywhere

Instead use:

- strong typography
- generous spacing
- real photography
- premium cards
- subtle animation
- gold accents
- realistic travel imagery
- consistent iconography
- strong visual hierarchy

---

# 36. Final Interaction Quality

Add small details that make the site feel polished:

- buttons with subtle hover transitions
- arrows moving on hover
- cards lifting slightly
- image zoom
- smooth dropdowns
- animated mobile navigation
- section reveal
- sticky navbar
- smooth scrolling
- active navigation indicator
- loading skeletons
- responsive carousels
- accessible focus states

Every interaction should feel **fast and intentional**.

---

# 37. Critical Instruction

Before modifying the application:

1. Inspect the existing project.
2. Identify the current components.
3. Identify existing routes.
4. Identify existing API calls.
5. Identify existing assets.
6. Reuse working components.
7. Do not unnecessarily replace the backend.
8. Do not break existing functionality.
9. Do not remove working features.
10. Refactor duplicated code where useful.

After implementation:

```text
npm run build
```

must succeed without errors.

Check:

- console errors
- broken images
- broken routes
- mobile layout
- tablet layout
- desktop layout
- navbar
- dropdowns
- carousels
- buttons
- WhatsApp links
- phone links
- forms
- animations

---

# Final Goal

Transform the current React + Vite application into a **premium Tirupati travel booking experience**.

The visual identity should communicate:

**Faith + Travel + Comfort + Trust + Premium Service**

The website should feel suitable for a real commercial travel company and should be significantly more modern, interactive, responsive and visually polished than the reference website.

Use the previously created **Tirupati Balaji bus hero image** as the primary visual direction and maintain a consistent **royal blue + temple gold + white** design system throughout the application.