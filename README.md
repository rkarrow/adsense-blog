# TechPulse Global - AdSense Ready Next.js + MongoDB Blog

A high-performance, SEO-optimized, and Google AdSense-compliant Web Publication built with **Next.js 14 (App Router)**, **React**, **Tailwind CSS**, and **MongoDB (Mongoose)**.

---

## 🚀 Key Features

* **100% Google AdSense Ready:**
  * Auto-injects Google AdSense Script via `NEXT_PUBLIC_ADSENSE_CLIENT_ID`.
  * Pre-configured Ad Slots: Header Leaderboard (728x90), In-Article Responsive Units, and Bottom Units.
  * Compliant with Google Ad Placement policies.
* **Mandatory AdSense Approval Pages Included:**
  * `/privacy-policy` (Full Google DART cookies, GDPR, CCPA clauses)
  * `/terms-conditions`
  * `/about` (Editorial integrity, peer-review standards & team bios)
  * `/contact` (Interactive contact form & response guarantee)
* **Maximum SEO & Core Web Vitals:**
  * Server-Side Rendering (SSR) & Incremental Static Regeneration (ISR).
  * Dynamic OpenGraph & Twitter Cards.
  * Schema.org (`TechArticle` JSON-LD) Rich Snippets.
  * Dynamic `sitemap.xml` and `robots.txt` automatically allowing `Mediapartners-Google`.
* **Full-Stack MongoDB Integration:**
  * Mongoose models for articles, categories, authors, and tags.
  * `/admin` portal to create, draft, and publish new articles.
  * Instant 1-click database seeding (`/api/seed`) with high-CPC technology & finance articles.

---

## 🛠️ Getting Started

### 1. Install Node.js
If you haven't installed Node.js yet:
* Download the LTS version from [https://nodejs.org](https://nodejs.org) and install it on your computer.

### 2. Install Project Dependencies
Open your terminal in the project directory (`/Users/rashmika/Desktop/adsense`) and run:
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser!

---

## 🗄️ Setting Up Free MongoDB Atlas (Cloud Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and register a free account.
2. Create a **Free Shared Cluster (M0)**.
3. In **Database Access**, create a user (e.g. `admin` and a secure password).
4. In **Network Access**, click "Add IP Address" and select **Allow Access from Anywhere** (`0.0.0.0/0`).
5. Click **Connect** > **Drivers (Node.js)** and copy your connection string:
   ```env
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/adsense_blog?retryWrites=true&w=majority
   ```
6. Paste your string into `.env.local`.

---

## 💰 Connecting Google AdSense

1. Once you apply for AdSense at [https://adsense.google.com](https://adsense.google.com), you will receive a Publisher ID (`pub-XXXXXXXXXXXXXXXX`).
2. Open `.env.local` and update:
   ```env
   NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
   ```
3. Restart the dev server or redeploy. All ad units and auto-ads will activate automatically!

---

## 🌐 1-Click Free Deployment (Vercel)

1. Push this project to your GitHub account (`git init`, `git add .`, `git commit -m "Initial commit"`).
2. Go to [Vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Add your Environment Variables (`MONGODB_URI`, `NEXT_PUBLIC_ADSENSE_CLIENT_ID`, `NEXT_PUBLIC_SITE_URL`).
5. Click **Deploy**. Your website will be live worldwide on SSL in under 60 seconds!
