# 🚀 Deployment Guide

## Quick Deployment to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. **Go to Vercel**: https://vercel.com/new
2. **Import Repository**: 
   - Click "Import Git Repository"
   - Select `eatsalad239/rene-charter-website`
   - Choose the branch `copilot/create-responsive-vercel-website`
3. **Configure Project**:
   - Framework: Next.js (auto-detected)
   - Build Command: `npm run build` (pre-filled)
   - Output Directory: `.next` (pre-filled)
4. **Environment Variables** (Optional for demo):
   ```
   NEXT_PUBLIC_WHOP_API_KEY=your_api_key_here
   NEXT_PUBLIC_WHOP_CLIENT_ID=your_client_id_here
   ```
5. **Deploy**: Click "Deploy"
6. **Done!** Your site will be live in ~2 minutes

### Option 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to project
cd rene-charter-website

# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

## Post-Deployment Steps

### 1. Add Hero Video
```bash
# Upload your video file to public folder
# Format: MP4, WebM (recommended: MP4)
# Size: Optimize to < 10MB for fast loading

# Update components/Hero.tsx
# Uncomment lines 7-14
# Update video source path
```

### 2. Configure Whop.com Payment

After receiving API credentials:

**Update `.env.local`:**
```env
NEXT_PUBLIC_WHOP_API_KEY=your_actual_key
NEXT_PUBLIC_WHOP_CLIENT_ID=your_actual_client_id
```

**Update `components/Booking.tsx`:**
```typescript
// Replace line 41 handleBooking function with:
const handleBooking = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Initialize Whop payment
  const whopClient = new WhopAPI({
    apiKey: process.env.NEXT_PUBLIC_WHOP_API_KEY,
    clientId: process.env.NEXT_PUBLIC_WHOP_CLIENT_ID
  });
  
  // Create checkout session
  try {
    const session = await whopClient.checkout.create({
      priceId: tour.priceId,
      quantity: numberOfGuests,
      metadata: {
        tourId: selectedTour,
        date: selectedDate,
        guests: numberOfGuests
      }
    });
    
    // Redirect to checkout
    window.location.href = session.url;
  } catch (error) {
    console.error('Payment error:', error);
    alert('Payment processing failed. Please try again.');
  }
};
```

**Add to Vercel Environment Variables:**
- Go to Project Settings → Environment Variables
- Add: `NEXT_PUBLIC_WHOP_API_KEY`
- Add: `NEXT_PUBLIC_WHOP_CLIENT_ID`
- Redeploy

### 3. Custom Domain (Optional)

1. Go to Vercel Dashboard → Project Settings → Domains
2. Add your domain (e.g., `renecharter.com`)
3. Update DNS records as instructed
4. Wait for SSL certificate (automatic)

### 4. Configure Email (Optional)

For contact form backend:

**Option A: Formspree**
```typescript
// In components/Contact.tsx, update form action:
<form 
  action="https://formspree.io/f/your-form-id" 
  method="POST"
  onSubmit={handleSubmit}
>
```

**Option B: SendGrid API**
```bash
npm install @sendgrid/mail
```

Create API route `app/api/contact/route.ts`:
```typescript
import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();
  
  const msg = {
    to: 'info@renecharter.com',
    from: 'noreply@renecharter.com',
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
  };
  
  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
```

## Performance Optimization

### Image Optimization
```bash
# Install sharp for Next.js image optimization
npm install sharp

# Add images to public/images/
# Use Next.js Image component:
import Image from 'next/image';

<Image 
  src="/images/boat.jpg" 
  alt="Boat" 
  width={800} 
  height={600}
  priority
/>
```

### Analytics

**Vercel Analytics:**
```bash
npm install @vercel/analytics

# Add to app/layout.tsx:
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## Monitoring

### Vercel Monitoring
- Go to Project → Analytics
- View: Performance, Usage, Errors
- Enable: Real User Monitoring (RUM)

### Error Tracking (Optional)
```bash
npm install @sentry/nextjs

# Run:
npx @sentry/wizard@latest -i nextjs

# Configure with your Sentry DSN
```

## Backup & Recovery

### Git Backup
```bash
# All code is in GitHub
# Branch: copilot/create-responsive-vercel-website
git clone https://github.com/eatsalad239/rene-charter-website
```

### Vercel Backup
- Vercel keeps deployment history
- Rollback available in Dashboard → Deployments
- Click any previous deployment → "Promote to Production"

## Troubleshooting

### Build Fails
```bash
# Check build locally:
npm run build

# Common issues:
# 1. Missing environment variables
# 2. TypeScript errors
# 3. Import errors

# View logs in Vercel Dashboard → Deployments → [Your Deploy] → Build Logs
```

### 404 Errors
- Ensure routes are correctly defined
- Check `next.config.ts` for redirects
- Verify file names in `app/` directory

### API Integration Issues
- Verify environment variables are set
- Check API keys are valid
- Review browser console for errors
- Check Vercel function logs

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Issues**: Create in repository
- **Vercel Support**: support@vercel.com

---

**Estimated Deployment Time**: 2-5 minutes
**First Deploy**: ~3 minutes (includes build)
**Subsequent Deploys**: ~1-2 minutes

✅ Ready to deploy!
