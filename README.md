# rene-charter-website

A modern, responsive Vercel-powered charter business website for Rene, featuring a hero video section, checkout system inspired by FareHarbor, and Whop.com payment integration.

## Features

- **Responsive Design**: Mobile-first design that works seamlessly across all devices
- **Hero Video Section**: Full-width hero section with video background (video to be uploaded)
- **Navigation**: Sticky navigation with mobile hamburger menu
- **Services Section**: Showcase of charter services
- **Fleet Section**: Display of available vessels with details
- **Booking System**: Interactive booking interface inspired by FareHarbor
- **Payment Integration**: Ready for Whop.com API integration (placeholder in demo mode)
- **Contact Form**: Contact section with form submission
- **SEO Optimized**: Built with Next.js for optimal SEO performance

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/eatsalad239/rene-charter-website.git
cd rene-charter-website
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Vercel Deployment (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Add environment variables in Vercel project settings
5. Deploy!

Alternatively, use the Vercel CLI:
```bash
npm install -g vercel
vercel
```

## Configuration

### Hero Video

To add your hero video:
1. Place your video file in `/public` directory (e.g., `hero-video.mp4`)
2. Update `components/Hero.tsx` to uncomment the video element and update the src path

### API Integration

#### Whop.com Payment Integration

After receiving API credentials:
1. Add to `.env.local`:
```
NEXT_PUBLIC_WHOP_API_KEY=your_api_key
NEXT_PUBLIC_WHOP_CLIENT_ID=your_client_id
```
2. Update `components/Booking.tsx` to integrate the Whop.com payment API

#### FareHarbor Integration (Optional)

If using FareHarbor:
1. Add to `.env.local`:
```
NEXT_PUBLIC_FAREHARBOR_SHORTNAME=your_shortname
```
2. Integrate FareHarbor booking widget in the booking section

## Project Structure

```
rene-charter-website/
├── app/
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Header navigation
│   ├── Hero.tsx          # Hero section with video
│   ├── Services.tsx      # Services showcase
│   ├── Fleet.tsx         # Fleet display
│   ├── Booking.tsx       # Booking system
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── public/               # Static assets
├── .env.example          # Environment variables template
└── vercel.json          # Vercel configuration
```

## Scripts

- `npm run dev` - Start development server (with Turbopack)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is private and proprietary to Rene Charter.

## Support

For questions or support, contact: info@renecharter.com
