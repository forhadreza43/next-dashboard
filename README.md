# Acme Dashboard

A modern, full-stack dashboard application built with Next.js, TypeScript, Tailwind CSS, NextAuth, and Neon/Postgres. Features include authentication, customer and invoice management, and a responsive UI.

## Features

- Next.js App Router (app/ directory)
- TypeScript for type safety
- Tailwind CSS for styling
- NextAuth for authentication (credentials-based)
- Neon/Postgres for database
- Vercel deployment ready

## Getting Started

### 1. Clone the repository

```bash
pnpm create next-app --example <this-repo>
# or
git clone https://github.com/forhadreza43/next-dashboard.git
cd next-dashboard
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env

DATABASE_URL=... # Your Neon/Postgres connection string
POSTGRES_URL=... # (Optional) Used by some libraries
NEXTAUTH_URL=http://localhost:3000 # For local dev
AUTH_URL=http://localhost:3000 # For local dev
AUTH_SECRET=... # Generate with `openssl rand -base64 32`

```

For production (Vercel), set:

```env
NEXTAUTH_URL=https://your-vercel-domain.vercel.app
AUTH_URL=https://your-vercel-domain.vercel.app
```

### 4. Run locally

```bash
pnpm dev
```

App will be available at [http://localhost:3000](http://localhost:3000)

## Project Structure

```text
└── 📁app
    └── 📁dashboard
        └── 📁customers
            ├── page.tsx
        └── 📁invoices
            └── 📁[id]
                └── 📁edit
                    ├── not-found.tsx
                    ├── page.tsx
            └── 📁create
                ├── page.tsx
            ├── error.tsx
            ├── page.tsx
        ├── layout.tsx
        ├── page.tsx
    └── 📁lib
        ├── actions.ts
        ├── data.ts
        ├── definitions.ts
        ├── placeholder-data.ts
        ├── utils.ts
    └── 📁login
        ├── page.tsx
    └── 📁query
        ├── route.ts
    └── 📁seed
        ├── route.ts
    └── 📁ui
        └── 📁customers
            ├── table.tsx
        └── 📁dashboard
            ├── cards.tsx
            ├── latest-invoices.tsx
            ├── nav-links.tsx
            ├── revenue-chart.tsx
            ├── sidenav.tsx
        └── 📁invoices
            ├── breadcrumbs.tsx
            ├── buttons.tsx
            ├── create-form.tsx
            ├── edit-form.tsx
            ├── pagination.tsx
            ├── status.tsx
            ├── table.tsx
        ├── acme-logo.tsx
        ├── button.tsx
        ├── fonts.tsx
        ├── global.css
        ├── login-form.tsx
        ├── search.tsx
        ├── skeletons.tsx
    ├── layout.tsx
    └── page.tsx
```

---

Built by [forhadreza43](https://github.com/forhadreza43) with Next.js, Neon, and Vercel.
