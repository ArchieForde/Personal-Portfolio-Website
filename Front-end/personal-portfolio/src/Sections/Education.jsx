import Section from "../Components/Section";
import Reveal from "../Components/Reveal";

const education = [
  {
    title: "MSc Aerospace Satellite Engineering",
    institution: "Northumbria University",
    period: "2026 – 2027",
    status: "In Progress",
    modules: [
      "Spacecraft Orbital Dynamics and Control",
      "Wireless Communication Systems",
      "Satellite Mission Design and Analysis",
      "Satellite Systems Engineering",
      "Future Materials",
      "Heat, Mass Transfer and Computational Fluid Dynamics",
    ],
  },
  {
    title: "BSc Computer Science with Software Engineering",
    institution: "University of Hull",
    period: "2022 – 2026",
    status: "2:1 Honours",
    modules: [
      "Advanced Programming (C# / C++)",
      "Databases & Networks",
      "Operating Systems",
      "Algorithms & Data Structures",
      "Software Engineering Principles",
    ],
  },
];

export default function Education() {
  return (
    <Section id="education" eyebrow="02 / Education" title="Academic Background">
      <div className="grid grid-cols-1 gap-8">
        {education.map((edu, i) => (
          <Reveal key={edu.title} delay={i * 120} className="tech-card p-6 md:p-8">
            <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="font-heading text-xl font-semibold text-text">
                  {edu.title}
                </h3>
                <p className="font-mono text-xs uppercase tracking-widest text-accent mt-1">
                  {edu.institution}
                </p>
              </div>
              <div className="mt-2 md:mt-0 flex flex-col items-start gap-1 md:items-end">
                <span className="font-mono text-xs text-muted">{edu.period}</span>
                <span className="tech-badge">{edu.status}</span>
              </div>
            </div>
            <div className="mt-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-3">
                Core Modules
              </p>
              <div className="flex flex-wrap gap-2">
                {edu.modules.map((m) => (
                  <span key={m} className="tech-badge">{m}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
