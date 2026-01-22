# Muhozi Ntawari Devis - Personal Portfolio Website

A modern, responsive, and high-performance personal portfolio website built with **HTML5**, **CSS3**, and **Vanilla JavaScript** (no frameworks).

## 🎯 Features

### Core Features
✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices  
✅ **Dark/Light Mode** - Theme toggle with persistent local storage  
✅ **Smooth Animations** - Subtle micro-interactions and scroll animations  
✅ **High Performance** - Fast loading, optimized assets, minimal dependencies  
✅ **SEO Optimized** - Semantic HTML5, meta tags, structured data  
✅ **Accessibility** - WCAG compliant, keyboard navigation, screen reader friendly  

### Sections
1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **About Me** - Biography, education, and career goals with stats
3. **Skills Section** - Interactive skill cards with progress bars
4. **Projects Section** - Dynamic project cards with detailed modals
5. **Certificates Section** - Educational achievements with expandable details
6. **Contact Section** - Contact form with validation and social links
7. **Navigation** - Responsive navbar with mobile menu
8. **Footer** - Professional footer with quick links

### Extra Features
- 🔝 Back-to-top button
- 📱 Mobile-first responsive design
- 🎨 Gradient accents and modern UI
- ⚡ Smooth scrolling
- 🔍 Scroll animations
- 💾 Local storage for theme preference
- 🔐 Form validation
- 🎭 Accessible modals

## 📁 Project Structure

```
Portfolio/
├── index.html           # Main HTML file (semantic structure)
├── style.css           # Comprehensive CSS with animations
├── main.js             # Vanilla JavaScript (modular)
├── assets/
│   ├── images/         # Project and certificate images
│   └── icons/          # SVG icons and assets
├── README.md           # This file
└── .gitignore         # Git configuration
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime, etc.) - *optional*
- Git - *optional, for version control*

### Local Setup

#### Option 1: Simple File Opening
1. Download or clone this repository
2. Navigate to the portfolio directory
3. Double-click `index.html` to open in your default browser
4. The portfolio is fully functional immediately!

#### Option 2: Using Python (Recommended)
To avoid CORS issues with local assets:

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

#### Option 3: Using Node.js HTTP Server
```bash
# Install globally (one-time)
npm install -g http-server

# Run in portfolio directory
http-server
```

Then open: `http://localhost:8080`

#### Option 4: Using VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## 📝 Customization Guide

### Update Personal Information

**In `index.html`:**
```html
<!-- Hero Section -->
<h1 class="hero-title">Your Name</h1>
<p class="hero-subtitle">Your Title</p>
<p class="hero-description">Your mission statement...</p>

<!-- About Section -->
<h3>Your Bio</h3>
<p>Your about text...</p>
```

### Modify Skills

**In `main.js`, update `skillsData` array:**
```javascript
const skillsData = [
    { 
        name: 'JavaScript', 
        icon: 'JS', 
        level: 95,      // 0-100 percentage
        color: '#f7df1e' 
    },
    // Add more skills...
];
```

### Add Projects

**In `main.js`, update `projectsData` array:**
```javascript
const projectsData = [
    {
        id: 1,
        title: 'Project Name',
        description: 'Short description',
        icon: '🚀',
        status: 'done',  // or 'pending'
        fullDescription: 'Detailed project description...',
        technologies: ['Tech1', 'Tech2', 'Tech3'],
        image: 'assets/images/project.jpg',
        links: {
            github: 'https://github.com/...',
            live: 'https://project-url.com'
        }
    }
];
```

### Add Certificates

**In `main.js`, update `certificatesData` array:**
```javascript
const certificatesData = [
    {
        id: 1,
        title: 'Certificate Name',
        issuer: 'Organization',
        year: '2024',
        summary: 'Brief description...',
        icon: '🎓',
        fullDescription: 'Detailed description...',
        skillsGained: ['Skill1', 'Skill2'],
        certificateLink: 'https://certificate-url.com'
    }
];
```

### Change Colors

**In `style.css`, modify CSS variables:**
```css
:root {
    --primary: #6366f1;        /* Main brand color */
    --secondary: #8b5cf6;      /* Secondary color */
    --accent: #ec4899;         /* Accent color */
    --success: #10b981;        /* Success color */
    /* ... modify other colors ... */
}
```

### Update Social Links

**In `index.html`, find the social links section:**
```html
<a href="https://github.com/your-username" target="_blank">
    <!-- Update URL -->
</a>
```

### Customize Fonts

**In `style.css` and `index.html`:**
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap');

:root {
    --font-primary: 'Your Font', sans-serif;
}
```

## 🎨 Customization Tips

### Change Theme Colors
1. Open `style.css`
2. Find `:root` selector (line ~10)
3. Modify the color variables
4. Changes apply automatically

### Add Custom Animations
1. Add new `@keyframes` in `style.css`
2. Apply to elements using `animation` property
3. Adjust timing in `--transition-*` variables

### Modify Responsive Breakpoints
Find media queries at the bottom of `style.css`:
```css
@media (max-width: 768px) { /* tablet */ }
@media (max-width: 480px) { /* mobile */ }
```

## 📦 Adding Assets

### Add Project Images
1. Save images to `assets/images/`
2. Update project data with image path:
```javascript
image: 'assets/images/your-image.jpg'
```

### Add Icons
1. Use Unicode/Emoji for quick icons
2. Or add SVG files to `assets/icons/`
3. Reference in HTML using `<img>` or `<svg>`

## 🚀 Deployment

### GitHub Pages (Free & Easy)

1. Create a GitHub account if you don't have one
2. Create a new repository named `your-username.github.io`
3. Clone the repository:
```bash
git clone https://github.com/your-username/your-username.github.io
```
4. Copy all portfolio files to the repository
5. Commit and push:
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```
6. Your portfolio is live at: `https://your-username.github.io`

### Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your GitHub repository
4. Click "Deploy"
5. Your site is live with automatic deployments!

### Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Click "Deploy"
6. Done! Your portfolio is live

### Traditional Hosting

1. Choose a hosting provider (Bluehost, GoDaddy, HostGator, etc.)
2. Upload files via FTP or file manager
3. Point domain to hosting provider
4. Portfolio is live!

## 🔒 Security Considerations

- **Contact Form**: Currently logs to console. For production, set up a backend service:
  - Node.js + Express
  - Python + Flask
  - PHP with mail function
  - Third-party service (Formspree, Netlify Forms)

Example with Formspree:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields -->
</form>
```

## ⚡ Performance Optimization

### Current Optimizations
✅ Minified CSS and JavaScript  
✅ Semantic HTML5  
✅ CSS Grid + Flexbox (modern layout)  
✅ No external dependencies  
✅ Optimized Google Fonts with font-display: swap  
✅ Lazy loading ready for images  

### Further Optimization
- Compress images using [TinyPNG](https://tinypng.com)
- Use WebP format for images
- Enable gzip compression on server
- Use CDN for global distribution

## ♿ Accessibility Features

✅ Semantic HTML5 structure  
✅ ARIA labels and roles  
✅ Keyboard navigation  
✅ High contrast colors  
✅ Alt text for images  
✅ Focus indicators  
✅ Reduced motion support  

## 🔍 SEO Features

✅ Meta tags (description, viewport, author)  
✅ Semantic HTML5  
✅ Proper heading hierarchy  
✅ Optimized images with alt text  
✅ Fast page load time  
✅ Mobile-responsive design  

### Additional SEO Tips
1. Add meta description (in `<head>`)
2. Create `sitemap.xml`
3. Add `robots.txt`
4. Set up Google Analytics
5. Submit to Google Search Console

## 🐛 Troubleshooting

### Images not showing
- Check file paths are correct
- Use relative paths: `assets/images/image.jpg`
- Ensure image files exist in correct folder

### Styles not applying
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file path in HTML
- Verify CSS syntax

### JavaScript not working
- Open browser console (F12)
- Check for error messages
- Ensure JavaScript file is linked in HTML
- Check for conflicting global variables

### Contact form not working
- This is a frontend-only demo
- Implement backend for real form submission
- See "Security Considerations" section

### Dark mode not persisting
- Check if localStorage is enabled
- Check browser privacy settings
- Clear cookies and try again

## 📚 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full |
| Edge    | ✅ Full |
| IE 11   | ⚠️ Limited |

## 📊 File Size Analysis

- `index.html`: ~25 KB
- `style.css`: ~45 KB
- `main.js`: ~35 KB
- **Total**: ~105 KB (highly optimized!)

## 🎓 Learning Resources

If you want to understand and modify this portfolio:

### HTML5
- [MDN HTML Guide](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3C HTML Standard](https://html.spec.whatwg.org/)

### CSS3
- [MDN CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS-Tricks](https://css-tricks.com)

### JavaScript
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info)

### Web Performance
- [Web.dev Performance](https://web.dev/performance/)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)

## 📄 License

This portfolio template is free to use and modify for personal or commercial purposes.

## 🤝 Contributing

Found a bug? Want to improve something?

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 💡 Tips for Success

1. **Update Content Regularly** - Keep your portfolio fresh
2. **Use Professional Photos** - High-quality images matter
3. **Write Clear Descriptions** - Make it easy for recruiters to understand your work
4. **Keep it Simple** - Don't overcomplicate the design
5. **Test Everything** - Check on different devices and browsers
6. **Monitor Performance** - Use Lighthouse to check performance
7. **Get Feedback** - Ask friends/colleagues for feedback
8. **Update Projects** - Add new work as you complete it

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the code comments in files
3. Check browser console (F12) for errors
4. Reach out via contact form or social links

## 🎉 Version History

### v1.0 (Current)
- Initial portfolio release
- All core features implemented
- Fully responsive design
- Dark/Light mode
- Dynamic content from JavaScript arrays
- Form validation
- SEO optimized
- Accessibility compliant

---

**Built with ❤️ using HTML5, CSS3, and Vanilla JavaScript**

Last Updated: January 15, 2026
