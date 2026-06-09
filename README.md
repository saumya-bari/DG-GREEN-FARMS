# DG Green Farms Indore — Luxury Resort & Staycation

This is a premium, high-performance Next.js 15 application designed for **DG Green Farms**, a luxury boutique resort in Indore. It features immersive WebGL components, fluid animations, and a mobile-first design.

## 🚀 Deployment Guide (Vercel)

Deploying this application to Vercel is straightforward. Follow these steps:

### 1. Prepare your Repository
If you haven't already, push your code to a Git provider (GitHub is recommended).

```bash
git init
git add .
git commit -m "Initial commit of DG Green Farms luxury site"
# Create a repo on GitHub, then link it:
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

### 2. Connect to Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New"** and select **"Project"**.
3. Import your repository from the list.

### 3. Project Configuration
- **Framework Preset**: Vercel will automatically detect **Next.js**.
- **Build Command**: `next build` (default).
- **Output Directory**: `.next` (default).

### 4. Environment Variables (Optional)
This app is designed to work out-of-the-box without keys. However, if you choose to re-enable AI features later:
- Add `GOOGLE_GENAI_API_KEY` in the **Environment Variables** section.

### 5. Deploy
Click **"Deploy"**. Your site will be live on a production-ready URL in less than 2 minutes.

---

## 🛠 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Rendering**: OGL (WebGL) for interactive threads and galleries
- **Components**: Radix UI & ShadCN UI

## ✒️ Credits
Developed with a focus on luxury aesthetics and performance.
