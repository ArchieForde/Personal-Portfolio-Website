import Reveal from "./Reveal";

export default function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 py-20 md:py-28 ${className}`}>
      {(eyebrow || title) && (
        <Reveal className="mb-12 max-w-3xl">
          {eyebrow && (
            <p className="section-label mb-4">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
        </Reveal>
      )}
      {children}
    </section>
  );
}
