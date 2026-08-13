import { useState, useEffect } from "react";
import useScrolled from "./useScrolled";

const navLinks = [
  { to: "#profile", label: "Profile" },
  { to: "#education", label: "Education" },
  { to: "#projects", label: "Projects" },
  { to: "#skills", label: "Skills" },
  { to: "#contact", label: "Contact" },
];

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("a[href^='#']");
      if (!target) return;
      const id = target.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      setOpen(false);
      const nav = document.querySelector("nav");
      const offset = nav ? nav.getBoundingClientRect().height : 0;
      const top = el.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top, behavior: "smooth" });
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-ink/90 shadow-[0_8px_30px_-12px_rgba(232,135,60,0.15)] backdrop-blur-xl"
          : "border-b border-transparent bg-ink/60 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#hero"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="relative grid h-8 w-8 place-items-center rounded bg-gradient-to-br from-accent to-accent-2 font-mono text-sm font-bold text-ink">
            AF
          </span>
          <span className="font-heading text-sm font-semibold tracking-widest text-text">
            ARCHIE<span className="text-accent">.FORDE</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="nav-link"
            >
              {l.label}
            </a>
          ))}
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center border border-border text-text md:hidden"
        >
          <span className="font-mono text-lg leading-none">{open ? "✕" : "≡"}</span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-border transition-all duration-300 md:hidden ${
          open ? "max-h-64 border-t" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-6 py-2">
          {navLinks.map((l) => (
            <a
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              className="nav-link py-3"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <span
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-accent via-accent-2 to-accent"
        style={{ transform: `scaleX(var(--progress, 0))` }}
      />
    </nav>
  );
}
