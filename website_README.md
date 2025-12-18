# Artisan Sale Manager Documentation Website

This directory contains the Docusaurus-powered documentation website for Artisan Sale Manager.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development

1. **Install dependencies**
   ```bash
   cd website
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
website/
├── docs/                   # Documentation pages
│   ├── intro.md           # Introduction page
│   ├── getting-started/   # Getting started guides
│   ├── features/          # Feature documentation
│   ├── api/              # API reference
│   └── troubleshooting/  # Help & troubleshooting
├── src/
│   ├── components/       # React components
│   ├── css/             # Custom CSS
│   └── pages/           # Static pages (homepage, pricing)
├── static/              # Static assets (images, files)
├── blog/               # Blog posts (optional)
├── docusaurus.config.js # Site configuration
└── sidebars.js         # Documentation sidebar
```

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

### GitHub Pages (Automatic)
The site automatically deploys to GitHub Pages when you push to the main branch. The workflow is configured in `.github/workflows/deploy-docs.yml`.

### Manual Deployment
```bash
npm run build
npm run serve  # Test locally
```

### Custom Domain
To use a custom domain:

1. Add a `CNAME` file to `static/` with your domain
2. Update `url` and `baseUrl` in `docusaurus.config.js`
3. Configure DNS to point to GitHub Pages

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
