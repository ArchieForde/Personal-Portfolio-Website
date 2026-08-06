import { Link } from "react-router-dom";
import SplitText from "../Components/SplitText";
import Reveal from "../Components/Reveal";
import Section from "../Components/Section";
import ProfilePhoto from "../Components/ProfilePhoto";

const focusAreas = [
  {
    tag: "Orbital Systems",
    title: "Satellite Engineering",
    body: "Design, analysis, and operation of satellite subsystems — power, thermal, attitude control, and communications payloads.",
    color: "text-accent",
  },
  {
    tag: "Launch & Deployment",
    title: "Launch Vehicle Integration",
    body: "Understanding launch environments, separation systems, and the mechanical and thermal challenges of reaching orbit.",
    color: "text-accent",
  },
  {
    tag: "Mission Operations",
    title: "Space Mission Ops",
    body: "Ground segment operations, telemetry analysis, orbit determination, and mission planning for LEO and GEO platforms.",
    color: "text-accent",
  }
];

const stats = [
  { value: "MSc", label: "Aerospace Satellite Engineering" },
  { value: "BSc 2:1", label: "Computer Science (Software Eng.)" },
  { value: "∞", label: "Drive for space exploration" },
];

export default function Home() {
  return (
    <>
      <section className="relative mx-auto flex min-h-[88vh] max-w-6xl items-start px-6 pt-20 pb-10">
        <div className="grid w-full grid-cols-1 items-start gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <Reveal className="mb-5">
              <span className="chip font-mono">Aerospace Engineer · MSc Satellite Engineering</span>
            </Reveal>

            <SplitText
              text="Archie Forde"
              className="text-6xl font-bold tracking-tight md:text-8xl"
              delay={60}
              duration={0.7}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              tag="h1"
            />

            <Reveal delay={200} className="mt-6 max-w-2xl">
              <p className="text-2xl font-medium text-text md:text-3xl">
                Aerospace Engineering · <span className="gradient-text">building toward Satellite Systems &amp; Space Mission Engineering</span>
              </p>
              <p className="mt-4 text-lg text-muted">
                Computer Science graduate transitioning into aerospace, focused on satellite engineering
                and space mission systems. I bring a strong technical foundation in software and systems
                engineering to the challenges of designing and operating spacecraft.
              </p>
            </Reveal>

            <Reveal delay={350} className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/about"
                className="rounded-lg bg-gradient-to-r from-accent to-accent-2 px-6 py-3 font-medium text-ink transition-transform hover:scale-[1.03]"
              >
                Explore My Work
              </Link>
              <Link
                to="/contact"
                className="rounded-lg border border-border px-6 py-3 font-medium text-text transition-colors hover:border-accent hover:text-accent"
              >
                Get in Touch
              </Link>
            </Reveal>
          </div>

          <Reveal delay={250} className="order-first flex justify-center -mt-2 md:order-none md:-mt-4">
            <ProfilePhoto size="w-44 h-44 md:w-64 md:h-64" />
          </Reveal>
        </div>
      </section>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 120}>
            <Link
              to="/about"
              className="card block p-6 no-underline transition-transform hover:scale-[1.02]"
            >
              <div className="text-3xl font-bold gradient-text">{s.value}</div>
              <div className="mt-1 text-sm text-muted">{s.label}</div>
            </Link>
          </Reveal>
        ))}
      </div>

      <Section
        eyebrow="Focus"
        title="Where I am building expertise"
        subtitle="Three converging domains that define my path into aerospace engineering."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {focusAreas.map((f, i) => (
            <Reveal key={f.tag} delay={i * 120} className="card p-7">
              <span className={`font-mono text-xs uppercase tracking-widest ${f.color}`}>
                {f.tag}
              </span>
              <h3 className="mt-3 text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-muted">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Now" title="Current trajectory">
        <Reveal className="card p-8">
          <p className="text-lg text-text">
            I am pursuing an MSc in Aerospace Satellite Engineering, building on my BSc in Computer
            Science with Software Engineering. My goal is to work on satellite systems — from
            subsystem design and integration to mission operations and space mission analysis.
            I am developing expertise in orbital mechanics, spacecraft thermal management,
            attitude and orbit control, and RF communications.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Satellite Systems", "Orbital Mechanics", "Thermal Engineering", "RF Communications", "Space Mission Design"].map((t) => (
              <span key={t} className="chip font-mono">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}