import Section from "../Components/Section";
import Reveal from "../Components/Reveal";

export default function Profile() {
  return (
    <Section id="profile" eyebrow="01 / Profile" title="About">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[auto_1fr] md:items-start">
        <Reveal className="flex justify-center md:justify-start">
          <div className="relative">
            <div className="crosshair absolute -top-3 -left-3 h-3 w-3" />
            <div className="crosshair absolute -bottom-3 -right-3 h-3 w-3" />
            <div className="hairline-left pl-6">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                Computer Science (BSc 2:1)
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-accent mt-1">
                Aerospace Satellite Engineering (MSc)
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="max-w-3xl space-y-6 text-muted">
          <p className="text-base md:text-lg leading-relaxed text-text/90">
            Computer Science graduate (2:1, University of Hull) transitioning into Aerospace
            Engineering via an MSc at Northumbria University, with a focus on spacecraft
            mechanisms, deployable mechanism design, and materials/thermal survival in extreme
            environments. Self-directed technical preparation is underway alongside formal study.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            My CS background gives me a strong foundation in systems thinking, software architecture,
            and analytical problem-solving which are skills that are all directly transferable to aerospace systems
            engineering. Now I am actively building the hardware and physics grounding needed
            to design mechanisms that survive launch, deploy reliably on orbit, and operate across
            thermal extremes.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            This portfolio tracks that transition: the coursework, the independent study, the CAD
            models, and eventually the flight hardware.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
