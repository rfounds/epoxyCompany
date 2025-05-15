# 1st Gen Epoxy - Premium Epoxy Flooring Company Website

A modern, responsive website for 1st Gen Epoxy, a family-owned epoxy flooring company based in Oklahoma. This website showcases their services, benefits, and provides a contact form for potential customers.

## Project Overview

This website is built using Next.js, React, and modern web technologies to create a visually appealing and functional online presence for 1st Gen Epoxy. The site features a realistic marbled epoxy background that represents the company's premium flooring services.

## Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (React framework)
- **Styling**: CSS-in-JS with inline styles
- **Fonts**: Google Fonts (Roboto and Oswald)
- **Form Handling**: Formspree integration
- **Deployment**: Vercel (recommended)

## Project Structure

```
├── app/                  # Next.js app directory
│   ├── page.jsx          # Main page component
│   └── layout.js         # Root layout
├── components/           # React components
│   ├── AnimatedButton.jsx # Button components with animations
│   ├── layout/           # Layout components
│   │   ├── Navbar.jsx    # Navigation bar component
│   │   └── Footer.jsx    # Footer component
│   └── sections/         # Page section components
│       ├── HeroSection.jsx
│       ├── AboutSection.jsx
│       ├── ServicesSection.jsx
│       ├── WhyChooseUsSection.jsx
│       ├── CallToActionSection.jsx
│       ├── TestimonialsSection.jsx
│       └── ContactSection.jsx
├── data/                 # Data files
│   └── services.js       # Services, finishes, and benefits data
├── public/               # Static assets
│   └── images/           # Image files
│       ├── logo.svg      # Company logo
│       └── marbled-epoxy-bg.svg # Background image
└── styles/               # Global styles
```

## Component Structure

The website has been organized into modular components for better maintainability:

1. **Layout Components**:
   - `Navbar.jsx`: Navigation bar with links to page sections
   - `Footer.jsx`: Footer with contact information and social media links

2. **Section Components**:
   - `HeroSection.jsx`: Main hero section with background and CTA buttons
   - `AboutSection.jsx`: Company description and mission
   - `ServicesSection.jsx`: List of services and finishes offered
   - `WhyChooseUsSection.jsx`: Benefits of choosing 1st Gen Epoxy
   - `CallToActionSection.jsx`: Secondary CTA section
   - `TestimonialsSection.jsx`: Client testimonials (placeholder)
   - `ContactSection.jsx`: Contact form for quote requests

3. **Utility Components**:
   - `AnimatedButton.jsx`: Button components with hover animations

## Data Structure

The website uses a structured data approach for services and benefits:

- `applications`: List of floor types and applications
- `finishes`: Available epoxy finishes and customizations
- `benefits`: Company benefits and selling points

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Company Colors

The website uses a consistent color scheme defined in `page.jsx`:

```javascript
const companyColors = {
  primary: '#b83d99',    // Pink/Purple
  secondary: '#189ccd',  // Blue
  background: '#0a0a0a',  // Near Black
};
```

### Form Integration

The contact form uses Formspree. Replace the placeholder ID in `ContactSection.jsx` with your actual Formspree form ID:

```javascript
<form id="contact-form" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST">
```

## Deployment

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com/new) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
