# SnaxSa Website

This is the local Next.js website project. It includes the product catalogue, individual flavour pages, combos, cart, and supplied product images.

## Run locally

1. Install Node.js 20 or newer.
2. Copy `.env.example` to `.env.local` and fill in the service values you use.
3. In this folder, run:

   ```bash
   npm ci
   npm run dev
   ```

4. Open `http://localhost:3000`.

## Production hosting

The project can be deployed to Vercel or to a Node.js host that supports Next.js.

1. Upload/extract this project or connect its Git repository to your host.
2. Configure the variables from `.env.example` in the host's environment settings. Do not commit `.env.local` or paste secret values into public files.
3. Use `npm ci` for install and `npm run build` for the build command.
4. For a Node.js server, use `npm start` after the build. For Vercel, import the project and use the default Next.js build settings.

Firebase credentials are needed for newsletter, contact, and bulk-order form submissions. `GROQ_API_KEY` enables the chat and contact AI response. The public contact, social, and store settings have working defaults in `lib/site-config.ts`; update them through the `NEXT_PUBLIC_*` variables before launch.

The cart's **Check Out** button prepares the order and opens WhatsApp. This bundle does not include a card-payment gateway.

## Project map

- `app/` — Next.js routes and API endpoints
- `components/` — page sections and reusable UI
- `data/` — product and page content
- `lib/` — site configuration and service clients
- `public/` — supplied product photography, videos, and other static assets

The live website is not changed by this source bundle.
