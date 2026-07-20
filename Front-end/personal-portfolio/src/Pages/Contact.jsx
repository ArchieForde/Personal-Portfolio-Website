import Section from "../Components/Section";
import Reveal from "../Components/Reveal";

const contacts = [
  {
    label: "Email",
    sub: "archieforde18@gmail.com",
    href: "mailto:archieforde18@gmail.com",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    sub: "linkedin.com/in/archie-forde",
    href: "https://www.linkedin.com/in/archie-forde-234097265",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    sub: "github.com/ArchieForde",
    href: "https://github.com/ArchieForde",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Location",
    sub: "UK · Open to relocate",
    href: "#",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <Section
      eyebrow="Contact"
      title="Let's talk"
      subtitle="Open to cybersecurity, AI security, and quantum-safe security roles. Reach out below."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {contacts.map((c, i) => {
          const external = c.href.startsWith("http");
          return (
            <Reveal key={c.label} delay={i * 100} className="card group">
              <a
                href={c.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-7 transition-colors"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface-2 font-mono text-sm font-bold text-accent ring-1 ring-border transition-colors group-hover:bg-accent group-hover:text-ink">
                  {c.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-lg font-medium text-text">{c.label}</span>
                  <span className="block truncate font-mono text-xs text-muted">
                    {c.sub}
                    {external && <span className="ml-1 text-accent">↗</span>}
                  </span>
                </span>
              </a>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={200} className="card mt-8 p-8">
        <p className="text-lg text-text">
          I'm currently building toward a graduate role in cyber security, with a longer-term
          interest in AI-driven defence and post-quantum cryptography. I'm keen to connect
          about <span className="gradient-text">SOC analyst roles, security research, or
          related opportunities</span>. The fastest way to reach me is email · I usually
          reply within a day.
        </p>
      </Reveal>
    </Section>
  );
}
