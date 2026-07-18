import Section from "../Components/Section";
import Reveal from "../Components/Reveal";

const education = [
  {
    title: "MSc Artificial Intelligence & Machine Learning",
    meta: "[ UNIVERSITY NAME ] · [ 2025–2027 ]",
    body: "Specialisation in Quantum Computing. [ Add core modules, thesis topic, and any distinctions. ]",
  },
  {
    title: "BSc / Previous Degree",
    meta: "[ UNIVERSITY NAME ] · [ YEAR–YEAR ]",
    body: "[ Add your prior degree, relevant coursework in maths/stats/CS, and achievements. ]",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "C++", "SQL", "Rust", "JavaScript"],
  },
  {
    title: "ML & Data",
    items: ["PyTorch", "scikit-learn", "Pandas", "NumPy", "Statsmodels"],
  },
  {
    title: "Quant & Finance",
    items: ["Time Series", "Stochastic Calc", "Optimisation", "Risk", "Pricing"],
  },
  {
    title: "Quantum",
    items: ["Qiskit", "Cirq", "QML", "Variational Algs", "Linear Algebra"],
  },
];

const timeline = [
  { year: "[ YEAR ]", event: "[ Milestone — e.g. started MSc in AI & ML ]" },
  { year: "[ YEAR ]", event: "[ Milestone — e.g. first quant internship ]" },
  { year: "[ YEAR ]", event: "[ Milestone — e.g. quantum computing research ]" },
  { year: "Now", event: "Building toward quant / quantum computing roles" },
];

export default function About() {
  return (
    <>
      <Section eyebrow="About" title="A bit about me">
        <Reveal className="max-w-3xl text-lg text-muted">
          <p>
            [ BIO PARAGRAPH 1: who you are, your background, and the thread that connects
            maths, programming and finance. ]
          </p>
          <p className="mt-4">
            [ BIO PARAGRAPH 2: your ambition — working in quantitative finance now, and
            moving into quantum computing further down the line. Mention the masters. ]
          </p>
        </Reveal>
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
