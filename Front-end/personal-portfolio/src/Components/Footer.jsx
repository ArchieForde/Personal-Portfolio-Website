export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-ink-soft/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted md:flex-row">
        <p>© {new Date().getFullYear()} Archie Forde. All rights reserved.</p>
        <p className="font-mono text-xs tracking-widest">
          AI · ML · QUANTITATIVE FINANCE · QUANTUM COMPUTING
        </p>
      </div>
    </footer>
  );
}
