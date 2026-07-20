import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useScrolled from "./useScrolled";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 z-40 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-ink/85 shadow-[0_8px_30px_-12px_rgba(79,157,255,0.35)] backdrop-blur-xl"
          : "border-transparent bg-ink/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" className="nav-logo group relative flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent to-accent-2 font-mono text-sm font-bold text-ink transition-transform group-hover:scale-105">
            <span className="logo-glow absolute inset-0 rounded-lg bg-gradient-to-br from-accent to-accent-2" />
            AF
          </span>
          <span className="font-mono text-sm font-semibold tracking-widest text-text">
            ARCHIE<span className="text-accent">.FORDE</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 text-sm md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `group relative rounded-md px-3 py-2 transition-colors ${
                  isActive ? "text-accent" : "text-muted hover:text-text"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-gradient-to-r from-accent to-accent-2 transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text md:hidden"
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
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-md px-3 py-3 text-sm transition-colors ${
                  isActive ? "text-accent" : "text-muted hover:text-text"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </div>

      <span className="progress-bar absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-accent via-accent-2 to-quant" />
    </nav>
  );
}
