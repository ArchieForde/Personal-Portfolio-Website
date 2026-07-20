import Section from "../Components/Section";
import Reveal from "../Components/Reveal";

const contacts = [
  {
    label: "Email",
    sub: "archieforde18@gmail.com",
    href: "mailto:archieforde18@gmail.com",
    glyph: "@",
  },
  {
    label: "LinkedIn",
    sub: "archie-forde-234097265",
    href: "https://www.linkedin.com/in/archie-forde-234097265",
    glyph: "in",
  },
  {
    label: "GitHub",
    sub: "ArchieForde",
    href: "https://github.com/ArchieForde",
    glyph: "GH",
  },
  {
    label: "Location",
    sub: "Maastricht, Netherlands",
    href: "#",
    glyph: "⌖",
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
                  {c.glyph}
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
          I'm currently focused on my Masters in Cybersecurity with a specialisation in
          AI and Quantum Computing Security. I'm keen to connect about
          <span className="gradient-text"> offensive security, AI defence, or quantum-safe
          crypto</span> roles, research, or collaborations. The fastest way to reach me is
          email — I usually reply within a day.
        </p>
      </Reveal>
    </Section>
  );
}
