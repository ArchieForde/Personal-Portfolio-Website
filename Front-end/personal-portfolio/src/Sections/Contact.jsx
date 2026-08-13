import Section from "../Components/Section";
import Reveal from "../Components/Reveal";

const contacts = [
  {
    label: "Email",
    value: "archieforde7@gmail.com",
    href: "mailto:archieforde7@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/archie-forde",
    href: "https://www.linkedin.com/in/archie-forde-234097265",
    external: true,
  },
];

export default function Contact() {
  return (
    <Section id="contact" eyebrow="07 / Contact" title="Contact">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {contacts.map((contact, i) => (
          <Reveal key={contact.label} delay={i * 100}>
            <a
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              className="tech-card block p-6 transition-colors hover:border-accent/40"
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                {contact.label}
              </p>
              <p className="font-heading mt-1 text-base font-medium text-text">
                {contact.value}
              </p>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-12 tech-card p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-2">
              Status
            </p>
            <p className="font-heading text-lg font-medium text-text">
              MSc in progress
            </p>
            <p className="text-sm text-muted mt-1">
              Open to placement and graduate opportunities in spacecraft systems and mechanisms
              engineering.
            </p>
          </div>
          <div className="flex items-center gap-2 text-accent">
            <span className="status-dot" />
            <span className="font-mono text-xs tracking-widest uppercase">
              Available for opportunities
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={300} className="mt-6">
        <a
          href="/cv.pdf"
          download
          className="tech-card inline-flex items-center gap-3 px-6 py-4 transition-colors hover:border-accent/40"
        >
          <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Download
            </p>
            <p className="font-heading text-sm font-semibold text-text">
              Technical Profile — CV.PDF
            </p>
          </div>
        </a>
      </Reveal>
    </Section>
  );
}
