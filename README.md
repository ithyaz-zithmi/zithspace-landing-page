# Zithspace Landing Page

A modern, high-performance landing page for **Zithspace** — an integrated platform that unifies HRMS, Finance, Work Management, and Admin operations into one powerful suite.

Built with Next.js 15, React, and optimized for maximum speed and beautiful fluid animations.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, Server Components & Client Components)
- **Library:** [React 19](https://react.dev/)
- **Language:** TypeScript
- **Styling:** CSS Modules with modern CSS features (Variables, Animations, Flexbox/Grid)
- **Icons:** `react-icons` (Feather Icons)
- **Animations:** `framer-motion` for smooth UI transitions
- **Notifications:** `react-hot-toast` for elegant toast alerts
- **Form Handling & Email:** Next.js API Routes (`/api/demo-request`, `/api/newsletter`) paired with `nodemailer` for backend communication

## Features and Highlights

- **Dynamic Hero Section:** Automatically cycling features with corresponding dashboard previews, plus manual hover interaction.
- **Scroll-Aware Navigation:** A sticky header with a custom `IntersectionObserver` / scroll-tracking system that highlights the active section dynamically as you scroll.
- **Performance Optimized:**
  - `next/image` handles advanced automatic image optimization, lazy loading, and intelligent responsive sizing for the main hero banners and logos.
  - Component-level Code Splitting: All below-the-fold sections are dynamically imported using `next/dynamic` (`ssr: false`) to drastically reduce initial JS payload.
  - `next/font` for zero layout shift typography using the Inter font family.
- **Interactive Forms:** A fully functional "Request a Demo" modal overlay with locked background scrolling, loading states, and toast notifications.
- **Fully Responsive:** Seamlessly scales down from ultra-wide 4K monitors to tablets and mobile devices.

## Project Structure

```text
zithspace-landing-next/
├── public/                # Static assets (images, icons)
├── src/
│   ├── app/               # Next.js App Router root
│   │   ├── api/           # Backend API routes (demo-request, newsletter)
│   │   ├── globals.css    # Global CSS variables, resets, core styles
│   │   ├── layout.tsx     # Root layout structure and metadata
│   │   └── page.tsx       # Main landing page orchestrating all sections
│   ├── components/        # Reusable React components
│   │   ├── common/        # Shared components (Buttons, Containers, Modals, Section Headers)
│   │   ├── layout/        # Site-wide layout wrappers (Header, Footer, BottomNavigation)
│   │   └── sections/      # Individual landing page sections (Hero, Features, Pricing, etc.)
│   └── data/              # Static JSON payload data for the UI
├── next.config.ts         # Next.js configuration
└── package.json           # Dependencies and scripts required
```

## Getting Started

First, ensure you have Node.js installed, then clone the repository and install dependencies:

```bash
npm install
```

### Environment Variables

If you wish to test the lead-capture forms (Demo Request, Newsletter), you must configure your SMTP environment variables. Create a `.env.local` file in the root directory:

```env
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
CONTACT_EMAIL=target_email_where_leads_are_sent@example.com
```

### Running the Development Server

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### Building for Production

Compile an optimized production build:

```bash
npm run build
npm run start
```

## Maintenance Notes

- When adding new features in the future, standard above-the-fold components (like `<Hero />`) should be statically imported, whereas below-the-fold components (like `<FAQ />` and `<Footer />`) should use `dynamic` imports in `page.tsx` to preserve the low First Load JS score.
- Ensure that SVG images and remote host configuration (like CDN logos) are safely specified under the `images.remotePatterns` field inside `next.config.ts`.
