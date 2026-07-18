import { Link } from "react-router-dom";
import SplitText from "../Components/SplitText";
import Reveal from "../Components/Reveal";
import Section from "../Components/Section";

const focusAreas = [
  {
    tag: "Quant",
    title: "Quantitative Finance",
    body: "Applying statistical modelling, optimisation and machine learning to markets, pricing and risk.",
    color: "text-quant",
  },
  {
    tag: "AI / ML",
    title: "Artificial Intelligence",
    body: "Deep learning, probabilistic modelling and data-driven systems — the core of my masters focus.",
    color: "text-accent",
  },
  {
    tag: "Quantum",
    title: "Quantum Computing",
    body: "Quantum algorithms, QML and variational methods — the specialisation I'm building toward.",
    color: "text-accent-2",
  },
];

const stats = [
  { value: "MSc", label: "AI & ML (Quantum Spec.)" },
  { value: "3+", label: "Years of programming" },
  { value: "∞", label: "Curiosity for hard problems" },
];

export default function Home() {
  return (
    <>
      <section className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col items-start justify-center px-6 py-24">
        <Reveal className="mb-5">
          <span className="chip font-mono">[ YOUR STATUS — e.g. MSc Candidate, Open to Roles ]</span>
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
            AI &amp; Machine Learning — <span className="gradient-text">specialising in Quantum Computing</span>
          </p>
          <p className="mt-4 text-lg text-muted">
            [ ONE-LINE PITCH: e.g. Aspiring quant building at the intersection of machine
            learning, finance and quantum computation. ]
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

        <div className="mt-20 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 120} className="card p-6">
              <div className="text-3xl font-bold gradient-text">{s.value}</div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

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
            [ PARAGRAPH: briefly describe what you're doing right now — your masters
            application/studies, what you're learning, and the kind of quant / quantum
            roles you're targeting. Keep it confident and concrete. ]
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Python", "PyTorch", "C++", "Qiskit", "Pandas", "NumPy"].map((t) => (
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
