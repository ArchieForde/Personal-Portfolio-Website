import Section from "../Components/Section";
import Reveal from "../Components/Reveal";
import ProfilePhoto from "../Components/ProfilePhoto";

const education = [
  {
    title: "MSc Artificial Intelligence & Machine Learning",
    meta: " Maastricht University · 2027–2029 ",
    body: "Specialisation in Quantum Computing. [ Add core modules, thesis topic, and any distinctions. ]",
  },
  {
    title: "BSc Computer Science with Software Engineering",
    meta: "University of Hull · 2022-2026",
    body: "[ Add your prior degree, relevant coursework in maths/stats/CS, and achievements. ]",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "C++", "SQL", "C#", "Bash"],
  },
  {
    title: "Security",
    items: ["Pen Testing", "Threat Modelling", "Cryptography", "Reverse Engineering", "Network Defence"],
  },
  {
    title: "AI Security",
    items: ["Adversarial ML", "Model Hardening", "Anomaly Detection", "PyTorch", "scikit-learn"],
  },
  {
    title: "Quantum",
    items: ["PQC", "QKD", "Qiskit", "Lattice-based Crypto", "Linear Algebra"],
  },
];

const timeline = [
  { year: "[ YEAR ]", event: "[ Milestone — e.g. started BSc Computer Science ]" },
  { year: "[ YEAR ]", event: "[ Milestone — e.g. first cybersecurity certification / internship ]" },
  { year: "[ YEAR ]", event: "[ Milestone — e.g. started MSc in Cybersecurity ]" },
  { year: "Now", event: "Building toward cybersecurity / quantum-safe security roles" },
];

export default function About() {
  return (
    <>
      <Section eyebrow="About" title="A bit about me">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[auto_1fr]">
          <Reveal className="flex justify-center md:justify-start">
            <ProfilePhoto size="w-40 h-40 md:w-52 md:h-52" />
          </Reveal>
          <Reveal className="max-w-3xl text-lg text-muted">
            <p>
              I'm Archie Forde, a Masters student in Cybersecurity with a specialisation in
              AI and Quantum Computing Security. My background sits at the intersection of
              mathematics, programming and security — the thread that draws me toward
              defending systems where rigorous analysis meets real-world threats.
            </p>
            <p className="mt-4">
              My immediate goal is to work in cybersecurity, applying penetration testing,
              threat modelling and AI-driven defence to protect critical infrastructure.
              Further down the line I want to specialise in quantum-safe security — and my
              Masters is the bridge between where I am now and that future.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section eyebrow="Education" title="Academic background">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {education.map((e, i) => (
            <Reveal key={e.title} delay={i * 120} className="card p-7">
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

      <Section eyebrow="Timeline" title="Trajectory">
        <div className="relative ml-3 border-l border-border">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 100} className="mb-8 ml-6">
              <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-accent" />
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
