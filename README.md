# Personal Portfolio — Archie Forde

A professional portfolio site for cybersecurity, AI security, and hands-on security projects.

## Stack
- React 19 + Vite 7
- Tailwind CSS v4
- GSAP (`SplitText`, `ScrollTrigger`) for hero text & scroll animations

## Run locally

```bash
cd Front-end/personal-portfolio
npm install
npm run dev
```

## Deploy to GitHub Pages

```bash
cd Front-end/personal-portfolio
npm run deploy
```

This builds the site and pushes the `dist/` contents to the `gh-pages` branch.

## Live site

Hosted on GitHub Pages at:
`https://archieforde.github.io/Personal-Portfolio-Website/`

## Structure
- `src/Pages/` — Home, About, Projects, Contact
- `src/Components/` — Navbar, Footer, Section, Reveal, SplitText, ProfilePhoto, useScrolled

## Content placeholders
- Profile photo → `Front-end/personal-portfolio/public/profile.jpeg`
- Education, projects, certifications, and contact links are filled in `src/Pages/About.jsx`, `src/Pages/Projects.jsx`, and `src/Pages/Contact.jsx`