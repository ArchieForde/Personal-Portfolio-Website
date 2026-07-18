import Section from "../Components/Section";
import Reveal from "../Components/Reveal";

const projects = [
  {
    category: "Quantum Computing",
    title: "[ Project Title — e.g. Variational Quantum Eigensolver ]",
    body: "[ 1–2 sentences on the problem, the quantum approach, and results. Link the repo/paper. ]",
    tags: ["Qiskit", "QML", "Python"],
    link: "#",
  },
  {
    category: "Quant Finance",
    title: "[ Project Title — e.g. Options Pricing with Monte Carlo ]",
    body: "[ Describe the model, data, and what you learned or improved. Add metrics. ]",
    tags: ["C++", "Stochastic", "Pandas"],
    link: "#",
  },
  {
    category: "Machine Learning",
    title: "[ Project Title — e.g. Deep Learning for Time Series ]",
    body: "[ Describe the architecture, dataset, and performance. Mention frameworks. ]",
    tags: ["PyTorch", "NLP", "NumPy"],
    link: "#",
  },
  {
    category: "Research",
    title: "[ Project Title — e.g. Thesis / Literature Review ]",
    body: "[ Summarise the research question and your contribution or findings. ]",
    tags: ["Research", "Writing"],
    link: "#",
  },
  {
    category: "Open Source",
    title: "[ Project Title — e.g. Library / Tooling ]",
    body: "[ What it does, who uses it, and your role in building it. ]",
    tags: ["OSS", "Rust"],
    link: "#",
  },
  {
    category: "Competition",
    title: "[ Project Title — e.g. Kaggle / Quant Challenge ]",
    body: "[ The challenge, your approach, and your placement or key insight. ]",
    tags: ["Kaggle", "Modelling"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <Section
      eyebrow="Projects"
      title="Selected work"
      subtitle="A focus on machine learning, quantitative finance, and quantum computing. Replace these placeholders with your real work."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 100} className="card flex flex-col p-7">
            <span className="font-mono text-xs uppercase tracking-widest text-quant">
              {p.category}
            </span>
            <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
            <p className="mt-3 flex-1 text-sm text-muted">{p.body}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="chip font-mono">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.link}
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              [ View → ]
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
