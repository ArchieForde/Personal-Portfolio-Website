import { Link } from "react-router-dom";
import SplitText from "../Components/SplitText";
import Reveal from "../Components/Reveal";
import Section from "../Components/Section";
import ProfilePhoto from "../Components/ProfilePhoto";

const focusAreas = [
  {
    tag: "Security",
    title: "Cybersecurity",
    body: "SOC analysis, threat detection, incident response, and defensive security. Where I'm building real, hands-on experience right now.",
    color: "text-quant",
  },
  {
    tag: "AI Security (Exploring)",
    title: "AI-Powered Defence",
    body: "How AI changes both attack and defence. It is a genuine long-term interest I'm building toward.",
    color: "text-accent",
  },
  {
    tag: "Quantum-Safe (Future focus)",
    title: "Quantum-Safe Security",
    body: "Post-quantum cryptography and how security adapts as quantum computing matures.",
    color: "text-accent-2",
  },
];

const stats = [
  { value: "2:1", label: "BSc Computer Science (Software Eng.)" },
  { value: "2", label: "Certifications completed" },
  { value: "∞", label: "Curiosity for hard problems" },
];

export default function Home() {
  return (
    <>
      <section className="relative mx-auto flex min-h-[88vh] max-w-6xl items-start px-6 pt-20 pb-10">
        <div className="grid w-full grid-cols-1 items-start gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <Reveal className="mb-5">
              <span className="chip font-mono">Computer Science Graduate · Open to Cyber Security Opportunities</span>
            </Reveal>

            <SplitText
              text="Archie Forde"
              className="text-6xl font-bold tracking-tight md:text-8xl"
              delay={60}
              duration={0.7}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              tag="h1"
            />

            <Reveal delay={200} className="mt-6 max-w-2xl">
              <p className="text-2xl font-medium text-text md:text-3xl">
                Cybersecurity · <span className="gradient-text">building toward SOC Analysis &amp; Defensive Security</span>
              </p>
              <p className="mt-4 text-lg text-muted">
                Computer Science graduate with a hands-on, self-directed approach to security.
                I build things to understand how they break, and how to defend them.
              </p>
            </Reveal>

            <Reveal delay={350} className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="rounded-lg bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-medium text-ink transition-transform hover:scale-[1.03]"
              >
                View Projects
              </Link>
              <Link
                to="/contact"
                className="rounded-lg border border-border px-6 py-3 font-medium text-text transition-colors hover:border-accent hover:text-accent"
              >
                Get in Touch
              </Link>
            </Reveal>
          </div>

          <Reveal delay={250} className="order-first flex justify-center -mt-2 md:order-none md:-mt-4">
            <ProfilePhoto size="w-44 h-44 md:w-64 md:h-64" />
          </Reveal>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
        {stats.map((s, i) => {
          const isCert = s.label === "Certifications completed";
          const isDegree = s.label.startsWith("BSc Computer Science");
          const isLink = isCert || isDegree;
          const to = isCert ? "/about#certifications" : isDegree ? "/about#education" : null;

          if (isLink) {
            return (
              <Reveal key={s.label} delay={i * 120}>
                <Link
                  to={to}
                  className="card block p-6 no-underline transition-transform hover:scale-[1.02]"
                >
                  <div className="text-3xl font-bold gradient-text">{s.value}</div>
                  <div className="mt-1 text-sm text-muted">{s.label}</div>
                </Link>
              </Reveal>
            );
          }

          return (
            <Reveal key={s.label} delay={i * 120}>
              <Link
                to="/projects"
                className="card block p-6 no-underline transition-transform hover:scale-[1.02]"
              >
                <div className="text-3xl font-bold gradient-text">{s.value}</div>
                <div className="mt-1 text-sm text-muted">{s.label}</div>
              </Link>
            </Reveal>
          );
        })}
      </div>

      <Section
        eyebrow="Focus"
        title="Where I operate"
        subtitle="Three converging interests that define my work and where I'm heading next."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {focusAreas.map((f, i) => (
            <Reveal key={f.tag} delay={i * 120} className="card p-7">
              <span className={`font-mono text-xs uppercase tracking-widest ${f.color}`}>
                {f.tag}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-muted">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Now" title="Current trajectory">
        <Reveal className="card p-8">
          <p className="text-lg text-text">
            Computer Science graduate focused on gaining real security experience in SOC
            analysis, threat detection, and incident response. For the future, I'm interested
            in how AI and ML reshapes both attack and defence, and how post-quantum cryptography
            will change security as quantum computing matures.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Python", "C++", "Wireshark", "Burp Suite", "Linux", "SIEM"].map((t) => (
              <span key={t} className="chip font-mono">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}
