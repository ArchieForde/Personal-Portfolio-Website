import Section from "../Components/Section";
import Reveal from "../Components/Reveal";

const contacts = [
  {
    label: "Email",
    sub: "archieforde7@gmail.com",
    href: "mailto:archieforde7@gmail.com",
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
    label: "Location",
    sub: "EU Citizen · UK Citizen · Dual National · Open to Relocation",
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
      subtitle="Open to aerospace and satellite engineering opportunities. Reach out below."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {contacts.filter((c) => c.label !== "Location").map((c, i) => {
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
        {contacts.filter((c) => c.label === "Location").map((c) => {
          return (
            <div key={c.label} className="sm:col-span-2 flex justify-center">
              <Reveal delay={2 * 100} className="card group">
                <div className="flex items-center gap-4 p-7 transition-colors">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-surface-2 font-mono text-sm font-bold text-accent ring-1 ring-border">
                    {c.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-lg font-medium text-text">{c.label}</span>
                    <span className="block truncate font-mono text-xs text-muted">
                      {c.sub}
                    </span>
                  </span>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>

      <Reveal delay={200} className="card mt-8 p-8">
        <p className="text-lg text-text">
          I am currently pursuing an MSc in Aerospace Satellite Engineering and am keen to connect
          about <span className="gradient-text">space mission engineering, satellite systems, or
          related opportunities</span>. The fastest way to reach me is email · I usually
          reply within a day.
        </p>
      </Reveal>
    </Section>
  );
}