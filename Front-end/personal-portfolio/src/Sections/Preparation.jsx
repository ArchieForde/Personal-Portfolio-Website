import Section from "../Components/Section";
import Reveal from "../Components/Reveal";

const preparation = [
  {
    title: "MATLAB Onramp",
    provider: "MathWorks",
    status: "Completed",
  },
  {
    title: "Simulink Onramp",
    provider: "MathWorks",
    status: "Completed",
  },
  {
    title: "Onshape Fundamentals: CAD",
    provider: "Onshape Learning Center",
    status: "In Progress",
  },
  {
    title: "Applied Mathematics & Physics Rebuild",
    provider: "Independent Study",
    status: "Ongoing",
    detail: "Calculus, linear algebra, differential equations, Newtonian mechanics",
  },
];

export default function Preparation() {
  return (
    <Section id="preparation" eyebrow="05 / Preparation" title="Building Toward It">
      <Reveal className="max-w-3xl">
        <p className="text-lg text-muted mb-10">
          Formal study provides the framework; this section documents the targeted, self-directed
          preparation that bridges the gap between my CS degree and the physics/hardware
          fluency required for spacecraft mechanisms engineering.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {preparation.map((item, i) => (
          <Reveal key={item.title} delay={i * 100}>
            <div className="tech-card p-5 flex flex-col gap-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading text-base font-semibold text-text">
                    {item.title}
                  </h3>
                  <p className="font-mono text-xs text-muted mt-0.5">{item.provider}</p>
                </div>
                <span className={`tech-badge shrink-0 ${
                  item.status === "Completed" ? "text-accent border-accent/30" :
                  item.status === "In Progress" ? "text-accent" : "text-muted"
                }`}>
                  {item.status}
                </span>
              </div>
              {item.detail && (
                <p className="text-sm text-muted mt-2 leading-relaxed">{item.detail}</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
