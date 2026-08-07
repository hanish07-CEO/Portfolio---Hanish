# How to Deploy to Render (onrender.com)

This full-stack portfolio application (React + Express + Gemini AI Assistant API) is fully configured for effortless deployment on [Render](https://render.com).

---

## 🚀 Option 1: Automatic Blueprint Deployment (Recommended)

Because a `render.yaml` blueprint file is provided in this repository, Render can auto-configure everything:

1. **Push your code to GitHub**:
   - Create a repository on GitHub (e.g. `hanish-portfolio`).
   - Push this codebase to your repository.

2. **Connect to Render**:
   - Go to [dashboard.render.com](https://dashboard.render.com/) and log in or create a free account.
   - Click **New +** → Select **Blueprint**.
   - Connect your GitHub repository.
   - Render will detect `render.yaml` and pre-fill all build and start settings!

3. **Set Environment Variables (Optional)**:
   - Under Environment Variables, add `GEMINI_API_KEY` if you want the interactive AI Portfolio Assistant enabled.

4. **Click Apply**:
   - Render will build and deploy your app. You'll get a free HTTPS link like `https://hanish-portfolio.onrender.com`.

---

## 🛠️ Option 2: Manual Web Service Deployment

If you prefer setting up the Web Service manually on Render:

1. Log in to [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** → Select **Web Service**.
3. Connect your GitHub repository.
4. Fill in the following fields:
   - **Name**: `hanish-portfolio` (or your preferred name)
   - **Environment**: `Node`
   - **Region**: Choose the closest region (e.g. Singapore / US)
   - **Branch**: `main`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`
5. **Environment Variables**:
   - `NODE_ENV` = `production`
   - `GEMINI_API_KEY` = *(Your Google Gemini API Key)*
6. Click **Create Web Service**.

---

## ⚡ Option 3: Static Site Deployment (Frontend Only)

If you only want to host the static React frontend without the Express backend:

1. Click **New +** → Select **Static Site**.
2. Connect your GitHub repository.
3. Configure settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Click **Create Static Site**.

---

## 🔧 Fix for `Cannot find module '/opt/render/project/src/dist/server.cjs'`

If you encountered `Error: Cannot find module '/opt/render/project/src/dist/server.cjs'`:

1. **Root Cause**: Render's build process failed to execute `esbuild` after `vite build` due to missing binary permissions or shell operators when invoked under Bun or Render's runner.
2. **Solution Applied**:
   - Created a standalone JavaScript build script `build.js` that programmatically builds both Vite client assets and bundles `server.ts` into `dist/server.cjs` using Node API.
   - Updated `package.json` so `"build": "node build.js"` works identically across Node, Bun, and Render's environment.
   - All build dependencies (`esbuild`, `vite`, `@tailwindcss/vite`) are placed in `dependencies` so Render installs them during build phase.
3. **How to Redeploy on Render**:
   - Commit and push all files (`package.json`, `build.js`, `render.yaml`) to your GitHub repo (`git push origin main`).
   - In Render Dashboard for **Portfolio---Hanish**, click **Manual Deploy** → **Clear build cache & deploy**.
   - Render will run `npm run build` (which executes `node build.js`) and start `node dist/server.cjs` cleanly!

