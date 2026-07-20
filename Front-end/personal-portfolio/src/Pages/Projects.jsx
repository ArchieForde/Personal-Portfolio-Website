import Section from "../Components/Section";
import Reveal from "../Components/Reveal";
import { useEffect } from "react";

const projects = [
  {
    category: "Tooling",
    title: "Python Port Scanner",
    body: "Developed a custom port scanner in Python using socket programming and TCP/IP fundamentals. Used it to identify open services and assess vulnerability exposure on test environments.",
    tags: ["Python", "Sockets", "TCP/IP", "Vulnerability Assessment"],
    link: "https://github.com/ArchieForde/Port_Scanner",
  },
  {
    category: "In Progress",
    title: "Log-Based Intrusion Detection: Rule-Based vs. Machine Learning Anomaly Detection",
    body: "Hands-on, code-based project — writing Python to parse real log data and build both a rule-based detector and an ML-based one using Isolation Forest. Comparing detection results between the two approaches to understand the trade-offs between signature-based and anomaly-based detection.",
    tags: ["IDS/IPS", "Snort", "Machine Learning", "Python", "Network Security"],
  },
  {
    category: "Security Operations · Ongoing",
    title: "Home Security Operations Lab",
    body: "Built a home SOC lab using Wazuh SIEM, Kali Linux, and Metasploitable 2. Generated and investigated real security events to understand alerting, log analysis, and incident detection workflows.",
    tags: ["Wazuh", "Kali Linux", "Metasploitable 2", "SIEM", "Log Analysis"],
  },
  {
    category: "AI Security · Internship",
    title: "AI NLP Prototype — The Open Group",
    body: "Internship project focused on data preprocessing, prompt engineering, and secure data handling. Presented findings and prototype results to senior leadership.",
    tags: ["NLP", "Python", "Prompt Engineering", "Secure Data Handling"],
  },
];

export default function Projects() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const hash = window.location.hash;
      if (!hash) return;
      const el = document.querySelector(hash);
      if (!el) return;
      const nav = document.querySelector("nav");
      const offset = nav ? nav.getBoundingClientRect().height : 0;
      const top = el.getBoundingClientRect().top + window.scrollY - offset - 16;
      window.scrollTo({ top, behavior: "smooth" });
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      subtitle="A selection of hands-on security and AI projects I've built to deepen my practical skills."
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
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="credential-preview mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 font-medium text-text transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_12px_40px_-12px_rgba(79,157,255,0.35)]"
              >
                View Project
                <span className="text-sm">↗</span>
              </a>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
