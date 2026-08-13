import Section from "../Components/Section";
import Reveal from "../Components/Reveal";

const experience = [
  {
    role: "Software Engineering Intern",
    company: "The Open Group",
    period: "Jun – Oct 2023",
    description:
      "Developed a prototype AI NLP model within a structured enterprise engineering environment. Presented technical findings to senior leadership, demonstrating clear communication of complex concepts to a non-technical audience.",
    outcomes: [
      "Prototype AI NLP model delivered",
      "Technical presentation to senior leadership",
      "Cross-functional collaboration in enterprise setting",
    ],
  },
];

export default function Experience() {
  return (
    <Section id="experience" eyebrow="06 / Experience" title="Work Experience">
      <div className="grid grid-cols-1 gap-8">
        {experience.map((role, i) => (
          <Reveal key={role.company} delay={i * 120}>
            <div className="tech-card p-6 md:p-8">
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-text">
                    {role.role}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-widest text-accent mt-1">
                    {role.company}
                  </p>
                </div>
                <span className="font-mono text-xs text-muted mt-2 md:mt-0">
                  {role.period}
                </span>
              </div>

              <p className="mt-5 text-muted leading-relaxed max-w-3xl">
                {role.description}
              </p>

              <div className="mt-6">
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted mb-3">
                  Key Outcomes
                </p>
                <ul className="space-y-2">
                  {role.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3 text-sm text-text/80">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
