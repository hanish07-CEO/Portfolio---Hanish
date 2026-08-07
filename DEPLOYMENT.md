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

## 🔧 Permanent Fix for `Cannot find module server.cjs`

If your Render deployment logs showed `Error: Cannot find module '/opt/render/project/src/dist/server.cjs'`:

### 💡 Why it happened:
Render ran `npm start` before running `npm run build` (or Render was set up with `src` as root directory where build command was omitted or executed in a sub-folder).

### 🛡️ Permanent Self-Healing Fix Implemented:
1. **On-Demand Build-on-Start (`start.js`)**: `start.js` automatically searches all candidate paths (`./dist`, `./src/dist`, `../dist`). If `server.cjs` is missing, `start.js` automatically invokes `build.js` on the spot before starting Node!
2. **Dual Sync (`build.js`)**: `build.js` builds both the Vite client SPA and Express server, automatically mirroring the output into both root `./dist/` and `./src/dist/`.
3. **Resilient Static Resolution (`server.ts`)**: Express detects and serves client assets regardless of whether Node was launched from `/` or `/src`.

### 🚀 How to trigger the successful deploy:
1. Push the latest code to your GitHub repository (`git push origin main`).
2. On Render Dashboard (**Portfolio---Hanish**), click **Manual Deploy** → **Clear build cache & deploy**.
3. Render will start cleanly without any module or build errors!


