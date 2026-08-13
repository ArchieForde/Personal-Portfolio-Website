import { useEffect, useState } from "react";

export default function ScrollOrbit() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const dashArray = `${circumference * 0.75} ${circumference * 0.25}`;
  const dashOffset = circumference * 0.75 * (1 - progress);

  return (
    <div
      className="fixed bottom-6 right-6 z-40 hidden md:block"
      style={{ width: 52, height: 52 }}
      aria-hidden="true"
    >
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        className="transform -rotate-90"
      >
        <circle
          cx="26"
          cy="26"
          r={radius}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="1.5"
          opacity="0.4"
        />
        <circle
          cx="26"
          cy="26"
          r={radius}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
          strokeDasharray={dashArray}
          strokeLinecap="round"
          style={{
            strokeDashoffset: dashOffset,
            transition: "stroke-dashoffset 0.1s linear",
          }}
        />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: `rotate(${360 * progress}deg)`,
          transition: "transform 0.1s linear",
        }}
      >
        <div
          className="h-1.5 w-1.5 rounded-full"
          style={{
            background: "var(--color-accent)",
            opacity: 0.7,
            boxShadow: "0 0 6px rgba(232, 135, 60, 0.5)",
          }}
        />
      </div>
    </div>
  );
}
