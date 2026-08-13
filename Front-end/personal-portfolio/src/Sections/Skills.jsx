import Section from "../Components/Section";
import Reveal from "../Components/Reveal";

const skillGroups = [
  {
    title: "Technical Skills",
    items: [
      "Python",
      "C#",
      "C++",
      "MATLAB (MathWorks Certified)",
      "Simulink",
      "CAD / Onshape",
    ],
  },
  {
    title: "Engineering Foundations",
    items: [
      "Engineering Mathematics",
      "Newtonian Mechanics",
      "Thermodynamics",
      "Systems Design & Architecture",
    ],
  },
  {
    title: "Focus Areas",
    items: [
      "Spacecraft Mechanisms",
      "Deployable Mechanism Design",
      "Materials & Thermal Survival",
      "Systems Engineering",
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills" eyebrow="04 / Skills" title="Toolkit">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 120}>
            <div className="tech-card p-6 h-full">
              <p className="section-label mb-5">{group.title}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tech-badge">{item}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
