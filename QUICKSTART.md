# 🚀 Quick Start Guide - Fish Network Docusaurus Site

## Your GitBook content has been migrated to Docusaurus! 🎉

## ⚠️ IMPORTANT: Fix Node.js First

Your system has a Node.js library issue. You must fix this before running the site:

### Option 1: Fix with Homebrew (Quick)
```bash
brew reinstall icu4c
brew link icu4c --force
```

### Option 2: Use NVM (Recommended for long-term)
```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Restart your terminal, then:
nvm install 20
nvm use 20
nvm alias default 20
```

## 📦 Installation

Once Node.js is fixed:

```bash
cd /Users/newuser/gitbook_sync
npm install
```

## 🏃 Run Locally

Start the development server:

```bash
npm start
```

Visit: http://localhost:3000

The site will automatically reload when you make changes!

## 📁 Project Structure

```
gitbook_sync/
├── docs/                           # 📝 Your documentation files
│   ├── intro.md                   # Homepage (was README.md)
│   ├── the-billion-dollar-small-team-era.md
│   ├── the-crowdfunding-collapse.md
│   ├── ...
│   └── the-next-layer-of-crypto-fish-network/  # Nested section
│       ├── intro.md
│       ├── whats-wrong-with-usd.md
│       └── ...
├── static/                         # 🖼️ Static assets
│   ├── .gitbook/                  # Your GitBook images
│   └── img/                       # Docusaurus images
├── src/
│   └── css/
│       └── custom.css             # 🎨 Custom styling
├── docusaurus.config.js           # ⚙️ Main configuration
├── sidebars.js                    # 🗂️ Navigation structure
└── package.json                   # 📦 Dependencies

# Original GitBook files (kept for reference):
├── README.md                      # Original GitBook readme
├── SUMMARY.md                     # Original GitBook navigation
└── *.md files                     # Original markdown files
```

## ✏️ Making Changes

### Edit Content
1. Edit any file in `docs/` folder
2. Changes appear instantly in your browser (if `npm start` is running)
3. Commit changes to Git

### Add New Pages
1. Create a new `.md` file in `docs/`
2. Add frontmatter:
   ```markdown
   ---
   title: My New Page
   ---
   
   # My New Page
   
   Content here...
   ```
3. Add to `sidebars.js`:
   ```javascript
   {
     type: 'doc',
     id: 'my-new-page',
     label: 'My New Page',
   }
   ```

### Change Navigation
Edit `sidebars.js` to reorder or restructure the sidebar.

### Update Branding
- **Logo**: Replace `static/img/logo.svg`
- **Favicon**: Add `static/img/favicon.ico`
- **Colors**: Edit `src/css/custom.css`
- **Site info**: Edit `docusaurus.config.js`

## 🏗️ Build for Production

Create production-ready static files:

```bash
npm run build
```

Preview the production build:

```bash
npm run serve
```

## 🚀 Deploy

### GitHub Pages (Easiest)

1. Update `docusaurus.config.js`:
   ```javascript
   url: 'https://your-username.github.io',
   baseUrl: '/your-repo-name/',
   organizationName: 'your-username',
   projectName: 'your-repo-name',
   ```

2. Deploy:
   ```bash
   GIT_USER=your-username npm run deploy
   ```

### Netlify (Recommended)

1. Push to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`
5. Deploy! 🎉

### Vercel

1. Push to GitHub
2. Import repo in Vercel
3. Auto-detected, one-click deploy! 🎉

## 📚 What Was Migrated

✅ All markdown content from GitBook  
✅ Navigation structure (SUMMARY.md → sidebars.js)  
✅ All images from `.gitbook/assets/`  
✅ Document hierarchy and categories  
✅ Frontmatter and metadata  

## 🎯 Next Steps

1. **Fix Node.js** (see top of this file)
2. **Install dependencies**: `npm install`
3. **Start dev server**: `npm start`
4. **Customize branding** (logo, colors, site info)
5. **Review content** (check all pages load correctly)
6. **Deploy** (choose your platform)

## 📖 Learn More

- **Docusaurus Docs**: https://docusaurus.io/docs
- **Markdown Features**: https://docusaurus.io/docs/markdown-features
- **Configuration**: https://docusaurus.io/docs/configuration
- **Deployment**: https://docusaurus.io/docs/deployment

## 🆘 Troubleshooting

### "Library not loaded: libicui18n.74.dylib"
→ Fix Node.js (see top of this file)

### Images not showing
→ Check that `static/.gitbook/` folder exists  
→ Run `npm run clear` to clear cache

### Build errors
→ Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`  
→ Clear cache: `npm run clear`

### Port 3000 already in use
→ Kill the process: `lsof -ti:3000 | xargs kill`  
→ Or use a different port: `npm start -- --port 3001`

## 🎉 You're All Set!

Your GitBook documentation is now running on Docusaurus - a modern, fast, and flexible documentation platform!

**Questions?** Check out:
- `MIGRATION-NOTES.md` - Detailed migration info
- `DEPLOYMENT.md` - Deployment instructions
- `README-DOCUSAURUS.md` - Docusaurus basics

Happy documenting! 🚀

