import Section from "../Components/Section";
import Reveal from "../Components/Reveal";

const projects = [
  {
    category: "Offensive Security",
    title: "[ Project Title — e.g. Custom Exploit Development ]",
    body: "[ Describe the target, methodology, and impact. Include tools used and CVEs if applicable. ]",
    tags: ["Python", "Burp Suite", "Networking"],
    link: "#",
  },
  {
    category: "AI Security",
    title: "[ Project Title — e.g. Adversarial Attack on Image Classifier ]",
    body: "[ Describe the model, attack vector, and defence mechanism tested. Include accuracy drop metrics. ]",
    tags: ["PyTorch", "Adversarial ML", "Python"],
    link: "#",
  },
  {
    category: "Quantum-Safe Crypto",
    title: "[ Project Title — e.g. Lattice-Based Key Exchange Implementation ]",
    body: "[ Describe the algorithm, implementation language, and performance benchmarks. ]",
    tags: ["C++", "Qiskit", "OpenSSL"],
    link: "#",
  },
  {
    category: "Research",
    title: "[ Project Title — e.g. Post-Quantum Cryptography Survey ]",
    body: "[ Summarise the research question, methodology, and your contribution or findings. ]",
    tags: ["Research", "Writing", "NIST PQC"],
    link: "#",
  },
  {
    category: "Tooling",
    title: "[ Project Title — e.g. Custom Recon Automation Framework ]",
    body: "[ What it does, who uses it, and your role in building it. Mention automation and scale. ]",
    tags: ["OSS", "Python", "Automation"],
    link: "#",
  },
  {
    category: "Capture The Flag",
    title: "[ Project Title — e.g. CTF Writeup / Competition ]",
    body: "[ The challenge category, your approach, and the flag or key insight you uncovered. ]",
    tags: ["CTF", "Forensics", "Crypto"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <Section
      eyebrow="Projects"
      title="Selected work"
      subtitle="A focus on cybersecurity, AI-powered defence, and quantum-safe security. Replace these placeholders with your real work."
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
