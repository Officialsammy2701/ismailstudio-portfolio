// ============================================================
// src/data/portfolio.ts
// ─────────────────────────────────────────────────────────────
// Single source of truth for all portfolio content.
// Edit this file to update anything on the site — no need to
// dig through components. Just update here and everything
// reflects automatically.
// ============================================================

// ── Personal Info ─────────────────────────────────────────────
export const personal = {
  name: "Ismail Studio",
  fullName: "Ismail Akande",
  brandName: "Ismail Studio",
  title: "Computer Science Student · Developer · Creative",
  university: "University of Prince Edward Island (UPEI)",
  year: "Second Year",
  location: "Prince Edward Island, Canada",
  email: "hello.ismailstudio@gmail.com",
  bio: `Ismail Studio is where software meets expression. I build things
that live at the intersection of code, media, visuals, and sound —
experiences that feel human, not just functional. Most people keep
these disciplines separate. I connect them.`,
  // Used in the <title> tag and og:description
  siteDescription:
    "Ismail Studio — Software, film, and creative work by Ismail Akande. Computer Science Student at UPEI. Currently open to Summer 2025 internships.",
};

// ── Social / Contact Links ────────────────────────────────────
export const socials = {
  github: "https://github.com/Officialsammy2701",
  linkedin: "https://linkedin.com/in/ismail-akande",
  twitter: "https://twitter.com/sammy_2701",
  instagram: "https://instagram.com/officialsammy_2701",
  youtube: "https://youtube.com/@officialsammy07",
  tiktok: "https://tiktok.com/@officialsammy_2701",
  codepen: "https://codepen.io/ismailstudio",
  stackoverflow: "https://stackoverflow.com/users/20070617/ismailstudio",
  newsletter: "", // add your newsletter URL when ready (e.g. Substack)
};

// ── Skills ────────────────────────────────────────────────────
// Group skills by category. Add/remove freely.
export const skills = [
  {
    category: "Languages",
    items: [
      "JavaScript(ES6)",
      "Python",
      "TypeScript",
      "HTML",
      "CSS/Sass",
      "R",
      "SQL",
    ],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "MongoDB"],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git & GitHub",
      "Gulp & Grunt",
      "Chrome DevTools",
      "Vercel",
      "VS Code",
      "Figma",
    ],
  },
  {
    category: "Other",
    items: [
      "Tkinter",
      "Data Analysis",
      "Agile / Scrum",
      "Firebase",
      "Supabase",
    ],
  },
];

// ── Projects ──────────────────────────────────────────────────
export const projects = [
  {
    id: "powerpause",
    year: "2026",
    month: "March",
    title: "PowerPause",
    description:
      "A full-stack energy monitor that simulates ESP32 power readings, visualizes live usage, and projects your monthly electricity bill.",
    longDesc:
      "PowerPause bridges hardware and software — simulating real ESP32 microcontroller power readings, rendering live usage charts, and calculating projected monthly costs. Built with a dual-mode implementation: a Python backend for data simulation and a JavaScript frontend for real-time visualization. A glimpse into IoT-meets-web development.",
    tags: ["JavaScript", "Python", "CSS", "Full-Stack", "IoT"],
    github: "https://github.com/Officialsammy2701/PowerPause",
    live: "https://powerpause.vercel.app",
    featured: true,
    image: "/images/powerpause.png",
  },
  {
    id: "bibleflash",
    year: "2026",
    month: "February",
    title: "BibleFlash",
    description:
      "A PWA delivering daily Bible verses, motivational quotes, and affirmations as beautiful swipeable flashcards — with push notifications and offline support.",
    longDesc:
      "BibleFlash is a Progressive Web App built for daily inspiration. Swipeable flashcard UI, push notification reminders, and full offline capability via service workers. Installable on any device like a native app. A project that combined UX craft with real PWA engineering.",
    tags: ["JavaScript", "HTML", "CSS", "PWA", "Service Workers"],
    github: "https://github.com/Officialsammy2701/bibleflash",
    live: "https://officialsammy2701.github.io/bibleflash/",
    featured: true,
    image: "/images/bibleflash.png",
  },
  {
    id: "landscapes-in-motion",
    year: "2026",
    month: "January",
    title: "Landscapes in Motion",
    description:
      "Immersive landscape photography brought to life through 3D card depth effects and fluid motion interactions.",
    longDesc:
      "A creative frontend experiment turning static landscape photography into an immersive, motion-driven experience. Built with SCSS and vanilla JS, the 3D card tilt and parallax depth effects are CSS-powered with JS enhancing the interaction layer. Pure frontend craft.",
    tags: ["JavaScript", "SCSS", "HTML", "CSS Animations", "3D Effects"],
    github: "https://github.com/Officialsammy2701/Landscapes-in-Motion",
    live: "https://landscapes-in-motion.vercel.app/",
    featured: true,
    image: "/images/landscapes-in-motion.png",
  },
  {
    id: "ecommerce",
    year: "2023",
    month: "December",
    title: "E-Commerce Storefront",
    description:
      "A fully designed e-commerce website for a clothing brand — product listings, cart flow, and a clean shopping UI.",
    longDesc:
      "A front-end e-commerce build for a clothing brand, covering product grid layouts, filtering, cart interactions, and checkout flow. Focused on clean UI, mobile responsiveness, and realistic UX patterns you'd find in production storefronts.",
    tags: ["JavaScript", "CSS", "HTML", "E-Commerce", "UI/UX"],
    github: "https://github.com/Officialsammy2701/E-Commerce",
    live: "",
    featured: false,
    image: "/projects/ecommerce.png",
  },
  {
    id: "url-shortener",
    year: "2022",
    month: "November",
    title: "URL Shortener",
    description:
      "A clean URL shortening app integrating a third-party shortening API with a polished, responsive interface.",
    longDesc:
      "Built around a real URL shortening API, this project focuses on clean async JavaScript, error handling, clipboard integration, and persisting a history of shortened links in local storage. A solid API integration exercise with strong UI execution.",
    tags: ["JavaScript", "CSS", "HTML", "REST API"],
    github: "https://github.com/Officialsammy2701/url-shortening-api-master",
    live: "",
    featured: false,
    image: "/projects/url-shortener.png",
  },
  {
    id: "ip-tracker",
    year: "2022",
    month: "October",
    title: "IP Address Tracker",
    description:
      "Look up any IP address or domain and see its location pinned on an interactive map in real time.",
    longDesc:
      "Integrates the IPify and LeafletJS APIs to resolve any IP address or domain to a real-world location and render it on an interactive map. Covers API chaining, async/await patterns, and embedding live maps — all in a clean, minimal UI.",
    tags: ["JavaScript", "CSS", "HTML", "Leaflet.js", "REST API"],
    github: "https://github.com/Officialsammy2701/IP-Address-Tracker",
    live: "",
    featured: false,
    image: "/projects/ip-tracker.png",
  },
];

// ── Blog Posts ────────────────────────────────────────────────
export const blogPosts = [
  {
    slug: "building-ismail-studio",
    title: "Building Ismail Studio in Public",
    excerpt:
      "Why I decided to build a multi-disciplinary creative brand from scratch as a second-year CS student — and what that actually looks like week to week.",
    date: "2025-03-01",
    tags: ["Brand", "Career"],
    readTime: "4 min read",
  },
  {
    slug: "powerpause-devlog",
    title: "DevLog: Building PowerPause — IoT Meets the Web",
    excerpt:
      "How I built a full-stack energy monitor that simulates ESP32 hardware readings, renders live charts, and calculates your electricity bill.",
    date: "2025-03-10",
    tags: ["Project", "Full-Stack", "IoT"],
    readTime: "6 min read",
  },
];

// ── Resume ────────────────────────────────────────────────────
// Drop your resume PDF into /public/ and update the path below.
export const resumeUrl = "/resume.pdf";
