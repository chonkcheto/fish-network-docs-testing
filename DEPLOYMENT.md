# Deployment Guide for Fish Network Docusaurus Site

## Prerequisites

Before deploying, you need to:

1. **Fix Node.js Installation** (if you encountered the icu4c library error):
   ```bash
   # Option 1: Reinstall icu4c
   brew reinstall icu4c
   brew link icu4c --force
   
   # Option 2: Use a Node version manager (recommended)
   # Install nvm (Node Version Manager)
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   
   # Install and use a stable Node version
   nvm install 20
   nvm use 20
   ```

2. **Install Dependencies**:
   ```bash
   cd /Users/newuser/gitbook_sync
   npm install
   ```

## Local Development

To preview the site locally:

```bash
npm start
```

This will start a development server at `http://localhost:3000`

## Build for Production

To create a production build:

```bash
npm run build
```

The static files will be generated in the `build/` directory.

## Deployment Options

### Option 1: GitHub Pages

1. Update `docusaurus.config.js` with your repository details:
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

### Option 2: Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy!

### Option 3: Vercel

1. Import your GitHub repository in Vercel
2. Vercel will auto-detect Docusaurus
3. Deploy with one click

### Option 4: Self-Hosted

After running `npm run build`, serve the `build` directory with any static file server:

```bash
# Using Node.js serve package
npx serve build

# Using Python
cd build && python -m http.server 8000

# Using nginx or Apache
# Copy the build folder to your web server root
```

## Configuration Updates

Before deploying, update these files:

1. **docusaurus.config.js**:
   - Update `url` to your production URL
   - Update `baseUrl` if not deploying to root
   - Update GitHub links
   - Update social media links in footer

2. **package.json**:
   - Update `name` if needed
   - Update `version` as you iterate

## Image Assets

All GitBook images have been copied to `static/.gitbook/assets/`. The markdown files reference them using relative paths that work with Docusaurus.

If images don't appear:
1. Ensure the `.gitbook` folder is in the `static/` directory
2. Check that image paths in markdown files start with `.gitbook/assets/`

## Troubleshooting

### Node.js Library Issues

If you see `Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.74.dylib`:
- Follow the Node.js reinstallation steps in Prerequisites
- Or use Docker to build/deploy

### Images Not Loading

- Check that `static/.gitbook/` exists
- Verify image file names match the references in markdown (case-sensitive)
- Clear Docusaurus cache: `npm run clear`

### Build Errors

- Clear cache: `npm run clear`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for broken markdown links

## Next Steps

1. ✅ Fix Node.js installation
2. ✅ Run `npm install`
3. ✅ Test locally with `npm start`
4. ✅ Update configuration files
5. ✅ Build with `npm run build`
6. ✅ Deploy to your chosen platform

## Support

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Docusaurus GitHub](https://github.com/facebook/docusaurus)
- [Fish Network Documentation](https://github.com/fish-network/docs)

