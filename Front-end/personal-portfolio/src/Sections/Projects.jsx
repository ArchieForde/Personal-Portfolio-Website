import Section from "../Components/Section";
import Reveal from "../Components/Reveal";

const projects = [
  {
    id: 1,
    title: "Deployable Spacecraft Mechanism",
    subtitle: "CAD Design & Analysis",
    status: "In Progress",
    statusColor: "text-accent",
    description:
      "Designing a deployable spacecraft mechanism (solar panel/antenna hinge) in Onshape, applying materials selection and thermal survival analysis for the space environment.",
    tags: ["Onshape", "CAD", "Mechanisms", "Thermal Analysis"],
    has3DViewer: true,
    placeholder: {
      image: true,
      writeup: true,
      outcome: true,
    },
  },
  {
    id: "placeholder-1",
    title: "Project Slot",
    subtitle: "Awaiting project",
    status: "Coming Soon",
    statusColor: "text-muted",
    description:
      "Additional coursework, research, or personal project entries will populate this slot as the MSc progresses.",
    tags: [],
    placeholder: true,
  },
  {
    id: "placeholder-2",
    title: "Project Slot",
    subtitle: "Awaiting project",
    status: "Coming Soon",
    statusColor: "text-muted",
    description:
      "Additional coursework, research, or personal project entries will populate this slot as the MSc progresses.",
    tags: [],
    placeholder: true,
  },
];

export default function Projects() {
  return (
    <Section id="projects" eyebrow="03 / Projects" title="Selected Work">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 120}>
            <div className="tech-card flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                    {project.subtitle}
                  </p>
                  <h3 className="font-heading mt-1 text-lg font-semibold text-text">
                    {project.title}
                  </h3>
                </div>
                <span className={`tech-badge shrink-0 ${project.statusColor}`}>
                  <span className="status-dot mr-1.5" />
                  {project.status}
                </span>
              </div>

              <p className="mt-4 flex-1 text-sm text-muted leading-relaxed">
                {project.description}
              </p>

              {project.tags.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge">{tag}</span>
                  ))}
                </div>
              )}

              {project.has3DViewer && (
                <div className="mt-5">
                  <div className="rounded border border-dashed border-border bg-surface/50 flex items-center justify-center" style={{ height: 180 }}>
                    <div className="text-center">
                      <svg className="h-8 w-8 mx-auto text-muted mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                      </svg>
                      <p className="font-mono text-xs text-muted">3D CAD Viewer</p>
                      <p className="font-mono text-[10px] text-muted/70 mt-1">Onshape embed — awaiting model link</p>
                    </div>
                  </div>
                </div>
              )}

              {project.placeholder && (
                <div className="mt-6 space-y-3">
                  <div className="h-32 rounded border border-dashed border-border bg-surface/50 flex items-center justify-center">
                    <span className="font-mono text-xs text-muted">[ CAD renders ]</span>
                  </div>
                  <div className="h-8 rounded border border-dashed border-border bg-surface/50 flex items-center justify-center">
                    <span className="font-mono text-xs text-muted">[ Write-up link ]</span>
                  </div>
                  <div className="h-8 rounded border border-dashed border-border bg-surface/50 flex items-center justify-center">
                    <span className="font-mono text-xs text-muted">[ Outcome / results ]</span>
                  </div>
                </div>
              )}

              {!project.placeholder && !project.has3DViewer && (
                <div className="mt-6 space-y-3">
                  <div className="h-32 rounded border border-dashed border-border bg-surface/50 flex items-center justify-center">
                    <span className="font-mono text-xs text-muted">[ CAD renders — pending ]</span>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-8 flex-1 rounded border border-dashed border-border bg-surface/50 flex items-center justify-center">
                      <span className="font-mono text-xs text-muted">[ Write-up ]</span>
                    </div>
                    <div className="h-8 flex-1 rounded border border-dashed border-border bg-surface/50 flex items-center justify-center">
                      <span className="font-mono text-xs text-muted">[ Outcome ]</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
