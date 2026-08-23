# Setup & Installation Guide

This guide walks through setting up the **Saad Mughal Portfolio** (`sedmugen/portfolio`) locally for development, testing, and production deployment.

---

## 1. Prerequisites

Before starting, ensure your local environment satisfies the following requirements:

| Dependency | Minimum Version | Recommended Version | Verification Command |
| :--- | :--- | :--- | :--- |
| **Node.js** | `v18.18.0` | `v20.x` or `v22.x` (LTS) | `node --version` |
| **npm** | `v9.0.0` | `v10.x` | `npm --version` |
| **Git** | `v2.30.0` | Latest | `git --version` |

---

## 2. Clone the Repository

Clone the repository to your local machine using Git:

```bash
git clone https://github.com/sedmugen/portfolio.git
cd portfolio
```

---

## 3. Install Dependencies

Install the project dependencies using `npm`:

```bash
npm install
```

This installs:
- **Core Framework**: `next` (v15.5+), `react` (v19.0), `react-dom` (v19.0)
- **Animation & Styling**: `framer-motion` (v12.4+), `tailwindcss` (v3.4+), `clsx`, `tailwind-merge`
- **Developer Tooling**: `typescript` (v5.7+), `@types/*`, `eslint`, `eslint-config-next`, `postcss`, `autoprefixer`

---

## 4. Environment Configuration

1. Copy the example environment template to create a local `.env.local` file:
   ```bash
   cp .env.example .env.local
   ```

2. Configure environment variables inside `.env.local`:
   ```bash
   # Canonical Base URL (used for OpenGraph and canonical links)
   NEXT_PUBLIC_SITE_URL=http://localhost:3000

   # Optional: Analytics and performance monitoring tokens
   # NEXT_PUBLIC_ANALYTICS_ID=
   ```

---

## 5. Development Server

Start the Next.js local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at:
```
http://localhost:3000
```

### Key Development Routes
- `http://localhost:3000/` — Homepage (Hero & Selected Work)
- `http://localhost:3000/work` — All Projects Catalog
- `http://localhost:3000/work/bench` — Example Case Study (Featured Tier)
- `http://localhost:3000/work/super-pong` — Example Case Study (Projects Tier)
- `http://localhost:3000/about` — Profile & Disciplines
- `http://localhost:3000/contact` — Inquiry Gateway

---

## 6. Build & Quality Verification

Run the full build and verification pipeline to test static compilation and code style:

```bash
# 1. Run ESLint static analysis
npm run lint

# 2. Compile static production build (SSG)
npm run build

# 3. Serve production build locally
npm run start
```

---

## 7. Production Deployment (Vercel)

The repository is pre-configured for zero-config deployments on [Vercel](https://vercel.com/):

1. Push your changes to GitHub:
   ```bash
   git push origin main
   ```
2. Import the repository in your Vercel Dashboard.
3. Configure the environment variable:
   - `NEXT_PUBLIC_SITE_URL`: Set to your production domain (e.g. `https://saadmughal.vercel.app` or custom domain).
4. Deploy. Vercel automatically runs `npm run build` and distributes the static assets globally across its Edge Network.
