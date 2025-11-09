# 🚀 Deployment Guide - AI-Generated Professional CV Website

## Quick Deployment to Vercel (Recommended)

### Prerequisites
- GitHub account with your repository
- Vercel account (free tier available)
- Repository pushed to GitHub

### Step-by-Step Deployment

#### 1. Prepare Your Repository
```bash
# Ensure all changes are committed
git add .
git commit -m "Prepare for deployment"

# Push to GitHub (replace with your repository URL)
git remote add origin https://github.com/yourusername/ai-cv-website.git
git branch -M main
git push -u origin main
```

#### 2. Deploy with Vercel
1. **Visit [vercel.com](https://vercel.com)** and sign in with GitHub
2. **Click "New Project"**
3. **Import your repository** from GitHub
4. **Configure deployment settings:**
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

#### 3. Deploy
- Click **"Deploy"**
- Wait for the build process to complete
- Get your live URL (e.g., `https://your-project.vercel.app`)

### Environment Variables (if needed)
```bash
# Add in Vercel dashboard under Settings > Environment Variables
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Alternative Deployment Options

### Netlify
1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `out`
3. Add to `next.config.js`:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   module.exports = nextConfig
   ```

### GitHub Pages
1. Add GitHub Actions workflow (`.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

### Custom Server
```bash
# Build the application
npm run build

# Start the production server
npm run start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "cv-website" -- start
```

## Domain Configuration

### Custom Domain with Vercel
1. Go to your Vercel project dashboard
2. Navigate to **Settings > Domains**
3. Add your custom domain
4. Configure DNS settings with your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.19
   ```

### SSL Certificate
- Vercel automatically provides SSL certificates
- For custom deployments, use Let's Encrypt or Cloudflare

## Performance Optimization

### Build Optimization
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression
  compress: true,
  
  // Optimize images
  images: {
    domains: ['example.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Enable experimental features
  experimental: {
    optimizeCss: true,
  }
}

module.exports = nextConfig
```

### Analytics Integration
```bash
# Install Vercel Analytics
npm install @vercel/analytics

# Add to layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function Layout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## SEO Optimization

### Sitemap Generation
```javascript
// Add to next.config.js
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ]
  }
}
```

### Meta Tags
```typescript
// In layout.tsx
export const metadata = {
  title: 'Your Name - Professional CV',
  description: 'Professional CV showcasing skills and experience',
  keywords: 'developer, portfolio, cv, resume',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name - Professional CV',
    description: 'Professional CV showcasing skills and experience',
    url: 'https://yourname.dev',
    siteName: 'Your Name CV',
    images: [
      {
        url: 'https://yourname.dev/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}
```

## Monitoring & Maintenance

### Error Tracking
```bash
# Install Sentry
npm install @sentry/nextjs

# Configure in next.config.js
const { withSentryConfig } = require('@sentry/nextjs')

module.exports = withSentryConfig(nextConfig, {
  silent: true,
  org: "your-org",
  project: "your-project",
})
```

### Performance Monitoring
- Use Vercel Analytics for basic metrics
- Google PageSpeed Insights for performance analysis
- Lighthouse CI for automated performance testing

## Security Best Practices

### Content Security Policy
```javascript
// Add to next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
          }
        ]
      }
    ]
  }
}
```

### Environment Security
- Never commit sensitive data to Git
- Use environment variables for API keys
- Enable Vercel's security headers

## Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear Next.js cache
rm -rf .next

# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npm run type-check
```

#### Deployment Issues
- Check build logs in Vercel dashboard
- Verify all environment variables are set
- Ensure Node.js version compatibility

#### Performance Issues
- Optimize images (use next/image)
- Implement lazy loading
- Minimize bundle size

## Post-Deployment Checklist

### ✅ Functional Testing
- [ ] Test all navigation links
- [ ] Verify dark/light mode toggle
- [ ] Check responsive design on multiple devices
- [ ] Test contact form functionality
- [ ] Validate all external links

### ✅ Performance Testing
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test loading speed with slow 3G
- [ ] Verify Core Web Vitals metrics
- [ ] Check bundle size optimization

### ✅ SEO Testing
- [ ] Verify meta tags and Open Graph data
- [ ] Test social media sharing
- [ ] Submit sitemap to search engines
- [ ] Check mobile-friendliness

### ✅ Security Testing
- [ ] Verify SSL certificate
- [ ] Check security headers
- [ ] Test for XSS vulnerabilities
- [ ] Validate CORS policies

## Continuous Deployment

### GitHub Actions Example
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build
```

---

## 🎉 Success!

Your AI-Generated Professional CV Website is now live and ready to showcase your skills to the world!

**Remember to:**
- Update content with your personal information
- Monitor performance and user feedback
- Keep dependencies updated
- Regularly backup your code

**Live URL:** `https://your-project.vercel.app`

---

**Need help?** Check the [README.md](./README.md) or create an issue in the repository.