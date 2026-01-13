# Artisan Sale Manager Documentation Website

This directory contains the Docusaurus-powered documentation website for Artisan Sale Manager.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm start
   ```
   
   This opens `http://localhost:3000` with live reload.

3. **Build for production**
   ```bash
   npm run build
   ```
   
   Generates static files in the `build` directory.

## 📁 Project Structure

```
├── docs/                   # Documentation pages (Markdown)
│   ├── intro.md           # Introduction page
│   └── features/          # Feature documentation
│       └── shortcodes.md  # Shortcode documentation
├── src/
│   ├── components/       # React components
│   ├── css/             # Custom CSS
│   └── pages/           # React pages
│       └── index.js     # Homepage (React component)
├── static/              # Static assets (images, files)
│   └── CNAME           # Custom domain configuration
├── build/              # Generated static files (after build)
├── docusaurus.config.js # Site configuration
├── sidebars.js         # Documentation sidebar
└── package.json        # Dependencies and scripts
```

## 🌐 Site Structure

### URL Structure
- **Homepage**: `artisansalemanager.com/` (React landing page)
- **Documentation**: `artisansalemanager.com/docs/` (Markdown docs)
- **Individual docs**: `artisansalemanager.com/docs/intro`, `/docs/features/shortcodes`

### Current Pages
- `src/pages/index.js` - Homepage with hero, features, stats, and CTAs
- `docs/intro.md` - Welcome and getting started guide  
- `docs/features/shortcodes.md` - Shortcode documentation

### Broken Links (To Fix)
The build shows warnings for missing pages that are referenced:
- `/blog` - Blog section (not implemented)
- `/docs/getting-started` - Getting started guide (not implemented)
- `/docs/features` - Features overview (not implemented) 
- `/docs/api` - API reference (not implemented)
- `/pricing` - Pricing page (not implemented)

## 🔧 Configuration

### Site Settings
Edit `docusaurus.config.js` to update:
- Site title and tagline
- URL and base URL for deployment
- GitHub repository links
- Navigation menu items

### Sidebar Navigation
Edit `sidebars.js` to modify the documentation structure.

### Custom Styling
Add custom CSS in `src/css/custom.css`.

## 🚀 Deployment

### GitHub Pages
The site can be deployed to GitHub Pages. Make sure to:
1. Enable GitHub Pages in repository settings
2. Set custom domain to `artisansalemanager.com`
3. The `static/CNAME` file contains the correct domain

### Manual Deployment
```bash
npm run build
npm run serve  # Test locally
```

### Custom Domain
The site is configured for `artisansalemanager.com`:

1. ✅ `static/CNAME` contains `artisansalemanager.com`
2. ✅ `docusaurus.config.js` has correct URL configuration
3. ✅ DNS points to GitHub Pages IPs (185.199.108-111.153)

## 📝 Writing Documentation

### Adding New Pages
1. Create a new `.md` file in the appropriate `docs/` subdirectory
2. Add frontmatter with `sidebar_position` if needed
3. Update `sidebars.js` if creating new sections

### Markdown Features
Docusaurus supports:
- Standard Markdown
- MDX (React components in Markdown)
- Code syntax highlighting
- Admonitions (tips, warnings, etc.)
- Tabs and other interactive elements

### Example Page Structure
```markdown
---
sidebar_position: 1
title: Page Title
description: Page description for SEO
---

# Page Title

Content goes here...

## Section

More content...

```php
// Code examples with syntax highlighting
function example() {
    return 'Hello World';
}
```
```

## 🎨 Customization

### Current Setup
- **Homepage**: React component (`src/pages/index.js`) with hero section, features, and CTAs
- **Documentation**: Markdown files in `docs/` folder
- **Hybrid approach**: Marketing pages (React) + Documentation (Markdown)

### Branding
- Update logo in `static/img/`
- Modify colors in `src/css/custom.css`
- Update favicon in `static/img/favicon.ico`

### Components
Create reusable React components in `src/components/` for:
- Feature showcases
- Pricing tables
- Interactive examples
- Custom layouts

### Plugins
Add Docusaurus plugins in `docusaurus.config.js` for:
- Analytics (Google Analytics, etc.)
- Search (Algolia DocSearch)
- Additional markdown features
- Custom functionality

## 🔍 SEO & Analytics

### Built-in SEO
Docusaurus includes:
- Automatic sitemap generation
- Meta tags from frontmatter
- Open Graph tags
- JSON-LD structured data

### Adding Analytics
Add Google Analytics or other tracking in `docusaurus.config.js`:

```javascript
gtag: {
  trackingID: 'G-XXXXXXXXXX',
  anonymizeIP: true,
},
```

## 🤝 Contributing

### Documentation Guidelines
- Use clear, concise language
- Include code examples where helpful
- Add screenshots for UI-related features
- Test all links and code snippets
- Follow the existing structure and style

### Review Process
1. Create feature branch for documentation changes
2. Test locally with `npm start`
3. Submit pull request
4. Review and merge to main branch
5. Automatic deployment to GitHub Pages

## 📚 Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [MDX Documentation](https://mdxjs.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## 🆘 Troubleshooting

### Build Errors
- Check Node.js version (18+ required)
- Clear cache: `npm run clear`
- Delete `node_modules` and reinstall

### Deployment Issues
- Verify GitHub Pages is enabled in repository settings
- Check workflow logs in GitHub Actions tab
- Ensure `docusaurus.config.js` has correct URLs

### Local Development Issues
- Port 3000 already in use: `npm start -- --port 3001`
- Hot reload not working: Check firewall settings
- CSS not updating: Clear browser cache
