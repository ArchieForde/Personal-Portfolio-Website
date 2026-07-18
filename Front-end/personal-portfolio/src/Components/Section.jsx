import Reveal from "./Reveal";

export default function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 py-20 md:py-28 ${className}`}>
      {(eyebrow || title) && (
        <Reveal className="mb-12 max-w-3xl">
          {eyebrow && (
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          )}
          {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
        </Reveal>
      )}
      {children}
    </section>
  );
}
