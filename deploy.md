# Deployment Guide

## Quick Deployment to Vercel

1. **Build the project**:
```bash
npm run build
```

2. **Install Vercel CLI** (if not already installed):
```bash
npm i -g vercel
```

3. **Deploy**:
```bash
vercel --prod
```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Set build command: `npm run build`
   - Set output directory: `build`

## GitHub Repository Setup

1. **Initialize Git**:
```bash
git init
git add .
git commit -m "Initial portfolio website"
```

2. **Create GitHub Repository**:
   - Go to GitHub.com
   - Click "New Repository"
   - Name it "portfolio-website"
   - Don't initialize with README (we already have one)

3. **Push to GitHub**:
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main
```

## Customization Checklist

Before deploying, make sure to update:

- [ ] Replace all placeholder phone numbers with your actual WhatsApp number
- [ ] Update email addresses throughout the project
- [ ] Add your actual photos (replace placeholder images)
- [ ] Update your name, bio, and personal information
- [ ] Modify projects array with your actual projects
- [ ] Update skills, experience, and education sections
- [ ] Customize services and pricing
- [ ] Update social media links
- [ ] Test WhatsApp integration with your number

## Environment Variables (if needed)

If you add any API keys or sensitive data, create a `.env` file:

```
REACT_APP_EMAIL_SERVICE_ID=your_service_id
REACT_APP_EMAIL_TEMPLATE_ID=your_template_id
REACT_APP_EMAIL_PUBLIC_KEY=your_public_key
```

## Domain Setup (Optional)

After deployment, you can add a custom domain:

1. **Vercel**: Go to your project dashboard → Settings → Domains
2. **Add your domain** and follow DNS configuration instructions

## SSL Certificate

Both Vercel and Netlify provide free SSL certificates automatically.

## Performance Tips

- Optimize images before adding them
- Use WebP format for better compression
- Test on mobile devices
- Check loading speed with Google PageSpeed Insights

## Maintenance

- Regularly update dependencies: `npm update`
- Monitor for security vulnerabilities: `npm audit`
- Keep content fresh and updated
- Monitor analytics and user feedback