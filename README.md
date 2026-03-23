# 🚀 Ismail's Developer Portfolio

> Personal portfolio website built with **Next.js 14**, **Tailwind CSS**, and deployed on **Vercel**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## ✨ Features

- **Dark & techy aesthetic** — deep dark background, cyan accent system, dot-grid texture
- **Smooth animations** — scroll-triggered reveals, typing hero effect, floating scroll indicator
- **All key sections** — Hero, About, Projects, Skills, Contact, Blog
- **Working contact form** — emails land in your inbox via Nodemailer + Gmail
- **Full social links** — GitHub, LinkedIn, Twitter, Instagram, YouTube, TikTok, Discord
- **SEO ready** — Open Graph tags, per-page metadata, semantic HTML
- **Responsive** — mobile-first, hamburger nav, fluid grids
- **Single source of truth** — edit `src/data/portfolio.ts` to update everything

---

## 🗂 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Navbar, Footer, metadata)
│   ├── page.tsx            # Homepage (assembles all sections)
│   ├── not-found.tsx       # Custom 404 page
│   ├── api/
│   │   └── contact/
│   │       └── route.ts    # Contact form API (Nodemailer)
│   ├── projects/
│   │   └── page.tsx        # Full projects listing
│   └── blog/
│       ├── page.tsx        # Blog listing
│       └── [slug]/
│           └── page.tsx    # Individual post page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky nav with mobile menu
│   │   └── Footer.tsx      # Footer with social icons
│   ├── sections/
│   │   ├── Hero.tsx        # Full-viewport hero + typing animation
│   │   ├── About.tsx       # Bio, stats, currently section
│   │   ├── Projects.tsx    # Featured projects grid
│   │   ├── Skills.tsx      # Categorized skill badges
│   │   └── Contact.tsx     # Contact form + info cards
│   └── ui/
│       ├── Button.tsx      # Reusable button (solid / outline)
│       └── SectionHeader.tsx # Reusable section headings
├── data/
│   └── portfolio.ts        # ⭐ All your content lives here
└── styles/
    └── globals.css         # Fonts, CSS variables, base styles
```

---

## 🛠 Getting Started

### 1. Clone & install

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in:

```env
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_16_char_app_password   # Gmail App Password
EMAIL_TO=your_gmail@gmail.com
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

> 💡 Get a Gmail App Password at: https://myaccount.google.com/apppasswords

### 3. Run locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## ✏️ Customising Your Content

**All content is in one file:** `src/data/portfolio.ts`

| What you want to update | Where to edit |
|-------------------------|---------------|
| Name, bio, location     | `personal`    |
| GitHub, LinkedIn, socials | `socials`   |
| Skills & categories     | `skills`      |
| Projects                | `projects`    |
| Blog post stubs         | `blogPosts`   |
| Resume PDF path         | `resumeUrl`   |

Add project screenshots to `/public/projects/` and update the `image` field in each project.

---

## 🚀 Deploying to Vercel

```bash
# Push to GitHub first
git add .
git commit -m "feat: initial portfolio setup"
git push origin main
```

Then:
1. Go to [vercel.com](https://vercel.com) → **New Project**
2. Import your GitHub repo
3. Add your environment variables in **Project Settings → Environment Variables**
4. Click **Deploy** ✅

Every `git push` to `main` auto-deploys. That's it.

---

## 📝 Adding Real Blog Posts (Future)

The blog currently uses stub data from `portfolio.ts`. When you're ready to write:

1. Install `next-mdx-remote` or `Contentlayer`
2. Create `.mdx` files in `src/content/blog/`
3. Update `src/app/blog/[slug]/page.tsx` to render MDX

---

## 🧰 Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js 14](https://nextjs.org) | Framework (App Router) |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [Framer Motion](https://framer.motion.com) | Animations (ready to use) |
| [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) | Scroll-triggered reveals |
| [react-icons](https://react-icons.github.io) | Icon library |
| [Nodemailer](https://nodemailer.com) | Contact form emails |
| [react-hot-toast](https://react-hot-toast.com) | Toast notifications |
| [Vercel](https://vercel.com) | Hosting & deployment |

---

## 📌 Commit Message Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add projects section
fix: contact form email not sending
style: improve mobile nav spacing
content: add new project — expense tracker
chore: update dependencies
```

---

*Built by Ismail — CS Student @ UPEI | Open to Summer 2025 Internships*
