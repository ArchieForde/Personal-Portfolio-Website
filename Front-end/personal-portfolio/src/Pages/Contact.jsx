import Section from "../Components/Section";
import Reveal from "../Components/Reveal";

const contacts = [
  { label: "Email", value: "[ you@example.com ]", href: "mailto:you@example.com" },
  { label: "LinkedIn", value: "[ linkedin.com/in/yourhandle ]", href: "#" },
  { label: "GitHub", value: "[ github.com/yourhandle ]", href: "#" },
  { label: "Location", value: "[ City, Country ]", href: "#" },
];

export default function Contact() {
  return (
    <Section
      eyebrow="Contact"
      title="Let's talk"
      subtitle="Open to quantitative finance, ML, and quantum computing opportunities. Reach out below."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {contacts.map((c, i) => (
          <Reveal key={c.label} delay={i * 100} className="card p-7">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">{c.label}</p>
            <a
              href={c.href}
              className="mt-2 block text-lg font-medium text-text transition-colors hover:text-accent"
            >
              {c.value}
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="card mt-8 p-8">
        <p className="text-lg text-text">
          [ OPTIONAL: a short note about how you prefer to be contacted, availability, or
          what kind of roles interest you. ]
        </p>
      </Reveal>
    </Section>
  );
}
