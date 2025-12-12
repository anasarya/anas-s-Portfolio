# Portfolio Website

A modern, responsive portfolio website built with React.js featuring beautiful animations, WhatsApp integration, and a professional design.

## Features

- 🎨 Modern and responsive design
- 📱 Mobile-first approach
- 🎭 Smooth animations with Framer Motion
- 💬 WhatsApp integration for direct contact
- 📧 Email contact functionality
- 🚀 Fast and optimized performance
- 🎯 SEO-friendly structure
- 🌈 Beautiful color gradients and modern UI

## Pages

- **Home**: Hero section with your photo, skills showcase, featured projects, and client reviews
- **About**: Detailed information about your background, skills, experience, and education
- **Services**: Complete list of services offered with pricing and packages
- **Contact**: Multiple contact methods including WhatsApp integration and contact form

## Technologies Used

- React.js
- React Router DOM
- Framer Motion (animations)
- React Icons
- CSS3 with custom properties
- Google Fonts (Inter)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

### Personal Information

1. **Update Contact Information**: 
   - Edit phone numbers in `src/pages/Contact.js` and `src/components/Footer.js`
   - Replace `+923001234567` with your actual WhatsApp number
   - Update email addresses throughout the project

2. **Add Your Photo**:
   - Replace placeholder images in `src/pages/Home.js` and `src/pages/About.js`
   - Add your actual photos to the `public` folder and update image paths

3. **Update Projects**:
   - Edit the `projects` array in `src/pages/Home.js`
   - Add your actual project details, images, and links

4. **Customize Content**:
   - Update your name, bio, and description throughout the components
   - Modify skills, experience, and education in `src/pages/About.js`
   - Update services and pricing in `src/pages/Services.js`

### Styling

- Colors are defined in CSS custom properties in `src/App.css`
- Modify the `:root` section to change the color scheme
- All components use these variables for consistent theming

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Build the project:
```bash
npm run build
```

3. Deploy to Vercel:
```bash
vercel --prod
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `build` folder to [Netlify](https://netlify.com)

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add deployment scripts to package.json:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

## GitHub Setup

1. Initialize git repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub

3. Add remote and push:
```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

## WhatsApp Integration

The contact form automatically formats messages for WhatsApp. Users can:
- Fill out the contact form and send via WhatsApp
- Click quick WhatsApp buttons for instant messaging
- Use the WhatsApp contact in the footer

## Performance Optimization

- Lazy loading for images
- Optimized animations with Framer Motion
- Responsive images and modern CSS
- Minimal bundle size with tree shaking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, contact via:
- WhatsApp: [Your WhatsApp Number]
- Email: [Your Email]
- GitHub Issues: [Your GitHub Repo]

---

Made with ❤️ by Anas Ali