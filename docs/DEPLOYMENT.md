# 🚀 Deployment Guide

Complete guide for deploying your Proces360 website to various platforms.

---

## 📦 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All dependencies installed: `npm install`
- [ ] Build succeeds locally: `npm run build`
- [ ] No console errors in browser
- [ ] All links functional
- [ ] Mobile responsive tested
- [ ] Environment variables set (if any)
- [ ] Git repository initialized

---

## 🟢 Vercel (Recommended)

**Why Vercel:**
- Optimized for Next.js
- Automatic deployments from Git
- Edge network (fast globally)
- Free SSL certificates
- Easy domain setup

### Method 1: Vercel Dashboard

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Done!** Your site is live at `your-project.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd proces360-website
vercel

# Deploy to production
vercel --prod
```

### Custom Domain Setup

1. In Vercel dashboard, go to project settings
2. Click "Domains"
3. Add your domain (e.g., `www.proces360.com`)
4. Update DNS records as instructed
5. Wait for SSL certificate (automatic)

---

## 🔵 Netlify

**Steps:**

1. **Push to GitHub** (same as Vercel)

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import existing project"
   - Connect to your GitHub repo

3. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18.x or higher

4. **Deploy!**

### Netlify Configuration

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

---

## 🟠 AWS Amplify

**Steps:**

1. **Push to GitHub**

2. **AWS Amplify Console:**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect GitHub repository

3. **Build Settings:**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

4. **Deploy!**

---

## 🔴 DigitalOcean App Platform

**Steps:**

1. **Push to GitHub**

2. **DigitalOcean:**
   - Go to App Platform
   - Create App → Connect GitHub
   - Select repository

3. **Build Settings:**
   - Build command: `npm run build`
   - Run command: `npm start`
   - HTTP port: 3000

4. **Deploy!**

**Pricing:** ~$5/month for basic app

---

## ⚙️ Self-Hosted (VPS)

For complete control, host on your own server.

### Requirements

- Ubuntu 20.04+ or similar
- Node.js 18.x+
- Nginx (reverse proxy)
- PM2 (process manager)

### Steps

1. **SSH into your server:**
   ```bash
   ssh root@your-server-ip
   ```

2. **Install Node.js:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install PM2:**
   ```bash
   sudo npm install -g pm2
   ```

4. **Clone & Build:**
   ```bash
   git clone YOUR_REPO_URL
   cd proces360-website
   npm install
   npm run build
   ```

5. **Start with PM2:**
   ```bash
   pm2 start npm --name "proces360" -- start
   pm2 save
   pm2 startup
   ```

6. **Configure Nginx:**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **Restart Nginx:**
   ```bash
   sudo systemctl restart nginx
   ```

8. **SSL with Let's Encrypt:**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

## 🐳 Docker Deployment

### Dockerfile

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
```

### Build & Run

```bash
# Build image
docker build -t proces360-website .

# Run container
docker run -p 3000:3000 proces360-website
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
```

Run:
```bash
docker-compose up -d
```

---

## 🌐 Static Export (Optional)

For hosting on any static host (GitHub Pages, S3, etc.):

### Update `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

### Build:

```bash
npm run build
```

Output is in `out/` folder. Upload to any static host.

**Note:** Some features (like API routes) won't work with static export.

---

## 📊 Post-Deployment

### 1. Analytics Setup

**Google Analytics:**
Add to `app/layout.tsx`:

```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### 2. Performance Monitoring

Use:
- Vercel Analytics (built-in)
- Google PageSpeed Insights
- WebPageTest.org
- Lighthouse CI

### 3. SEO Setup

- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Submit to Google Search Console
- [ ] Add Open Graph meta tags
- [ ] Add schema.org structured data

---

## 🔧 Environment Variables

If you need environment variables:

### Local Development

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_GA_ID=GA_MEASUREMENT_ID
```

### Production (Vercel)

1. Go to project settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

---

## 🚨 Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use

```bash
# Kill process on port 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac:
lsof -ti:3000 | xargs kill
```

### GSAP/Lenis Not Working

Ensure "use client" directive is present in components using client-side libraries.

---

## 📞 Support

For deployment issues:
- 📧 Email: info@proces360.com
- 📱 Phone: +31 6 3018 5844

---

**Deployment Guide Version 2.0** 🚀
