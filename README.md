# Relovella website

A lightweight React/Vite brand showcase for Relovella.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`. Vercel should use `dist` as the output directory.

## Configure Facebook

Open `src/data/siteConfig.js` and replace the empty `facebookUrl` value with the official Facebook page URL. Until then, every Facebook call-to-action is visibly disabled and marked “Soon.”

## Replace images

All image paths and collection content are centralized in `src/data/siteConfig.js`. Replace the files under `public/assets/` while keeping the same filenames, or update the paths in that configuration file. Missing images automatically render a neutral branded placeholder.
