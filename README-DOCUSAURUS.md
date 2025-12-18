# Fish Network Documentation

This repository contains the Fish Network documentation site built with [Docusaurus](https://docusaurus.io/).

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

### Using SSH:

```bash
USE_SSH=true npm run deploy
```

### Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Project Structure

```
.
├── docs/                    # Documentation markdown files
├── src/
│   └── css/                # Custom CSS files
├── static/                 # Static files (images, etc.)
├── docusaurus.config.js    # Docusaurus configuration
├── sidebars.js            # Sidebar navigation configuration
└── package.json           # Dependencies and scripts
```

## Migrated from GitBook

This documentation was migrated from GitBook. The original GitBook content structure has been preserved with:

- Main documentation pages in `/docs`
- Nested section "The Next Layer of Crypto" in `/docs/the-next-layer-of-crypto-fish-network`
- Images referenced from `.gitbook/assets/`

## Learn More

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Fish Network](https://fishnetwork.io)

