import Section from "../Components/Section";
import Reveal from "../Components/Reveal";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Projects"
      subtitle="Hands-on work and research in satellite engineering and aerospace systems. This section will be updated as I progress through my MSc."
    >
      <Reveal className="card p-8 text-center">
        <p className="text-lg text-muted">
          My project portfolio is being built during my MSc in Aerospace Satellite Engineering.
          Check back soon for satellite subsystem design, orbital simulations, and space mission
          analysis work.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["Orbital Mechanics", "Satellite Design", "Thermal Analysis", "Mission Planning"].map((t) => (
            <span key={t} className="chip font-mono">
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}