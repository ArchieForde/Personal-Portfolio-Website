import { useState } from "react";

export default function ProfilePhoto({
  src,
  alt = "Archie Forde",
  initials = "AF",
  className = "",
  size = "w-56 h-56",
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  const resolvedSrc = src || `${import.meta.env.BASE_URL}profile.jpeg`;

  return (
    <div className={`relative ${size} ${className}`}>
      <div className="profile-ring absolute -inset-1 rounded-full bg-gradient-to-br from-accent via-accent-2 to-quant opacity-70 blur-[2px]" />
      <div className="relative h-full w-full overflow-hidden rounded-full border border-border bg-surface">
        {!errored && (
          <img
            src={resolvedSrc}
            alt={alt}
            onLoad={() => setLoaded(true)}
            onError={() => setErrored(true)}
            className={`h-full w-full object-cover transition-opacity duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        {errored && (
          <div className="grid h-full w-full place-items-center bg-gradient-to-br from-surface to-ink-soft">
            <span className="font-mono text-4xl font-bold gradient-text">{initials}</span>
            <span className="absolute bottom-3 px-2 text-center font-mono text-[10px] uppercase tracking-widest text-muted">
              [ add /profile.jpg ]
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
