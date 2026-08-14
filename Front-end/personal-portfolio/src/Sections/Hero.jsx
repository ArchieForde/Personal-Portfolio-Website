import Reveal from "../Components/Reveal";
import ProfilePhoto from "../Components/ProfilePhoto";

export default function Hero() {
  return (
    <section id="hero" className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pb-10">
      <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-[1fr_auto]">
        <div>
          <Reveal className="mb-6">
            <span className="section-label">
              MSC AEROSPACE SATELLITE ENGINEERING // 2026–2027
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-heading text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              Archie Forde
            </h1>
          </Reveal>

          <Reveal delay={240} className="mt-6">
            <p className="font-heading text-xl font-medium text-text md:text-2xl lg:text-3xl">
              Aerospace &amp; Astronautical Engineer in Training<br className="hidden sm:block" />
            </p>
          </Reveal>

          <Reveal delay={360} className="mt-6 max-w-xl">
            <p className="text-base text-muted md:text-lg">
              Computer Science graduate turned Aerospace Engineer in training. Building toward
              systems and mechanisms engineering across spacecraft, aircraft, and defence. 
              This is hardware that has to work right the first time.
            </p>
          </Reveal>

          <Reveal delay={480} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-heading text-sm font-semibold tracking-wide text-ink transition-transform hover:scale-[1.02]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 font-heading text-sm font-semibold tracking-wide text-text transition-colors hover:border-accent hover:text-accent"
            >
              Get in Touch
            </a>
          </Reveal>
        </div>

        <Reveal delay={200} className="order-first flex justify-center md:order-none md:justify-end">
          <ProfilePhoto size="w-44 h-44 md:w-64 md:h-64" />
        </Reveal>
      </div>

      <div className="absolute top-24 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-border to-transparent" />
        </div>
      </div>
    </section>
  );
}
