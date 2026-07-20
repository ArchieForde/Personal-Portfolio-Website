import Section from "../Components/Section";
import Reveal from "../Components/Reveal";
import ProfilePhoto from "../Components/ProfilePhoto";
import { useEffect, useState } from "react";

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

function CredentialCard({ image, name }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="credential-preview mt-5 w-full overflow-hidden rounded-xl border border-border bg-surface text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(79,157,255,0.35)]"
      >
        <div className="flex items-center justify-between border-b border-border bg-surface-2 px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-xs text-muted">Credential</span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-accent">Click to view</span>
        </div>
        <CredentialThumbnail src={image} alt={`${name} credential`} />
      </button>
      {open && <CredentialModal src={image} alt={`${name} credential`} onClose={() => setOpen(false)} />}
    </>
  );
}

function CredentialModal({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="credential-modal" onClick={onClose}>
      <div className="credential-modal-backdrop" />
      <div className="credential-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-border bg-surface-2 px-5 py-3">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">Credential Preview</span>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted transition-colors hover:text-text hover:border-accent"
          >
            ✕
          </button>
        </div>
        <div className="p-4">
          {src.toLowerCase().endsWith(".pdf") ? (
            <embed src={src} type="application/pdf" className="w-full rounded-lg" style={{ height: "65vh" }} />
          ) : (
            <img src={src} alt={alt} className="max-h-[65vh] w-full rounded-lg object-contain" />
          )}
        </div>
      </div>
    </div>
  );
}

const education = [
  {
    title: "BSc Computer Science with Software Engineering",
    meta: "University of Hull · 2022–2026",
    body: "2:1 Honours. Relevant modules: Databases & Networks, Advanced Programming (C#/C++), Operating Systems, Algorithms & Data Structures.",
  },
];

const skillGroups = [
  {
    title: "Security",
    items: ["SIEM", "Log Analysis", "Incident Response", "Vulnerability Assessment", "Threat Detection", "Network Defence", "Pen Testing"],
  },
  {
    title: "Languages",
    items: ["Python", "C++", "SQL", "C#", "Bash"],
  },
  {
    title: "AI Security (Exploring)",
    items: ["Adversarial ML", "Model Hardening", "Anomaly Detection", "Prompt Engineering", "Secure Data Handling"],
  },
  {
    title: "Quantum (Future focus)",
    items: ["PQC", "QKD", "Qiskit", "Lattice-based Crypto", "Linear Algebra"],
  },
];

const certifications = [
  {
    name: "Google Cybersecurity Certification",
    issuer: "Google · 2025",
    body: "This certification covered foundational cybersecurity concepts, including network security, cryptography, and incident response. It included hands-on labs simulating real-world scenarios, which helped me understand how to detect and respond to threats effectively. The skills gained are directly applicable to SOC operations and defensive security practices.",
    image: "/Google Cyber cert.pdf",
  },
  {
    name: "Foundation Level Threat Intelligence Analyst",
    issuer: "ArcX · 2026",
    body: "This certification focused on the fundamentals of threat intelligence, including data collection, analysis, and reporting. It provided insights into identifying and understanding cyber threats, as well as how to use threat intelligence to inform security strategies. The knowledge gained is valuable for roles in threat detection and incident response.",
    image: "/ArcXcertificate.pdf",
  },
];

const timeline = [
  { year: "2022", event: "Started BSc Computer Science with Software Engineering at University of Hull" },
  { year: "2026", event: "Graduated 2:1 now focusing on security, systems, and defence" },
  { year: "2026", event: "Completed 2 certifications; built home SOC lab and security tools" },
  { year: "Now", event: "Building toward graduate cyber security roles such as SOC Analyst, threat detection, IR" },
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
      <Section eyebrow="About" title="A bit about me">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr]">
          <Reveal className="flex justify-center md:justify-start">
            <ProfilePhoto size="w-40 h-40 md:w-52 md:h-52" />
          </Reveal>
          <Reveal className="max-w-3xl text-lg text-muted">
            <p>
              I'm Archie Forde, a Computer Science graduate with a focused interest in cyber
              security and risk management. I learn through building with examples such as setting up my own lab
              environments, writing tools from scratch, and investigating how real attacks
              and defences actually work, rather than just studying the theory.
            </p>
            <p className="mt-4">
              My immediate goal is a graduate role in cyber security such as SOC analysis, threat
              detection, and incident response. Longer-term, I'm interested in
              where the field is heading: how AI is reshaping both attack and defence, and
              how post-quantum cryptography will change security as quantum computing
              matures.
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
              <ul className="mt-4 space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="font-mono text-sm text-text">
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="certifications" eyebrow="Certifications" title="Credentials">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={i * 120} className="card flex flex-col p-7">
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                {c.issuer}
              </span>
              <h3 className="mt-2 text-xl font-semibold">{c.name}</h3>
              <p className="mt-3 text-muted">{c.body}</p>
              {c.image && (
                <CredentialCard image={c.image} name={c.name} />
              )}
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
