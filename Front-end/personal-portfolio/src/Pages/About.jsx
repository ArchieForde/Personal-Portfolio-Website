import Section from "../Components/Section";
import Reveal from "../Components/Reveal";
import ProfilePhoto from "../Components/ProfilePhoto";
import { useEffect } from "react";

function CredentialThumbnail({ src, alt }) {
  const isPdf = src.toLowerCase().endsWith(".pdf");
  if (isPdf) {
    return (
      <div className="flex h-48 w-full flex-col items-center justify-center gap-3 bg-ink-soft/60" aria-label={alt}>
        <svg className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h2.25m10.5-11.25h2.25c.621 0 1.125.504 1.125 1.125v7.5c0 .621-.504 1.125-1.125 1.125h-2.25m-11.25 0v6.75m0 0l3-3m-3 3l-3-3" />
        </svg>
        <span className="font-mono text-xs text-muted">Click to view credential</span>
      </div>
    );
  }
  return (
    <img src={src} alt={alt} className="h-48 w-full object-cover" />
  );
}

function SkillBar({ name, level }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-20 shrink-0 font-mono text-sm text-text">{name}</span>
      <div className="flex flex-1 gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
              i < level ? "bg-gradient-to-r from-accent to-accent-2" : "bg-border"
          }`}
          />
        ))}
      </div>
      <span className="w-8 text-right font-mono text-xs text-muted">{level}/5</span>
    </div>
  );
}

const education = [
  {
    title: "MSc Aerospace Satellite Engineering",
    meta: "In Progress · 2026–2027",
    body: "Specialising in satellite subsystem design, orbital mechanics, space mission analysis, and spacecraft thermal and power systems. Building on a BSc in Computer Science with a focus on software and systems engineering.",
  },
  {
    title: "BSc Computer Science with Software Engineering",
    meta: "University of Hull · 2022–2026",
    body: "2:1 Honours. Relevant modules: Databases & Networks, Advanced Programming (C#/C++), Operating Systems, Algorithms & Data Structures.",
  },
];

const skillGroups = [
  {
    title: "Space Systems",
    items: ["Orbital Mechanics", "Attitude & Orbit Control", "Spacecraft Thermal", "Power Systems", "RF Communications"],
  },
  {
    title: "Programming",
    items: [
      { name: "Python", level: 4 },
      { name: "C/C++", level: 3 },
      { name: "MATLAB", level: 3 },
      { name: "Bash", level: 3 },
    ],
  },
  {
    title: "Engineering Tools",
    items: ["CAD (SolidWorks)", "Simulink", "STK (Systems Tool Kit)", "ANSYS", "Git & Linux"],
  },
  {
    title: "Engineering Fundamentals",
    items: ["Systems Engineering", "Signal Processing", "Control Theory", "Project Management", "Technical Reporting"],
  },
];

const timeline = [
  { year: "2022", event: "Started BSc Computer Science with Software Engineering at University of Hull" },
  { year: "2023", event: "Completed internship at The Open Group" },
  { year: "2026", event: "Graduated with 2:1; commenced MSc in Aerospace Satellite Engineering" },
  { year: "Now", event: "Building expertise in satellite systems, orbital mechanics, and space mission engineering" },
];

export default function About() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const hash = window.location.hash;
      if (!hash) return;
      const el = document.querySelector(hash);
      if (!el) return;
      const nav = document.querySelector("nav");
      const offset = nav ? nav.getBoundingClientRect().height : 0;
      const top = el.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top, behavior: "smooth" });
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Section eyebrow="About" title="About me">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr]">
          <Reveal className="flex justify-center md:justify-start">
            <ProfilePhoto size="w-40 h-40 md:w-52 md:h-52" />
          </Reveal>
          <Reveal className="max-w-3xl text-lg text-muted">
            <p>
              I'm Archie Forde, a Computer Science graduate transitioning into aerospace engineering.
              I am currently pursuing an MSc in Aerospace Satellite Engineering, driven by a passion
              for space systems and the challenge of building hardware and software that operates
              in the harsh environment of orbit.
            </p>
            <p className="mt-4">
              I bring a strong software engineering foundation to spacecraft systems — from embedded
              firmware and ground software to mission planning and data analysis. I learn by building,
              whether that means simulating orbital dynamics, designing thermal models, or writing
              tools to process satellite telemetry.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section id="education" eyebrow="Education" title="Academic background">
        <div className="grid grid-cols-1 gap-6 md:justify-items-center">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 120} className="card p-7 md:max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">{e.meta}</p>
              <h3 className="mt-2 text-xl font-semibold">{e.title}</h3>
              <p className="mt-3 text-muted">{e.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Skills" title="Toolkit">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 100} className="card p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {g.items.map((it) => (
                  <li key={typeof it === "string" ? it : it.name}>
                    {typeof it === "string" ? (
                      <span className="font-mono text-sm text-text">{it}</span>
                    ) : (
                      <SkillBar name={it.name} level={it.level} />
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Timeline" title="Trajectory">
        <div className="relative ml-3 border-l border-border pl-8">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 100} className="mb-8 relative">
              <span className="timeline-dot absolute -left-[21px] top-1 h-3 w-3 rounded-full bg-accent ring-4 ring-ink" />
              <p className="font-mono text-xs uppercase tracking-widest text-accent-2">
                {t.year}
              </p>
              <p className="mt-1 text-text">{t.event}</p>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}