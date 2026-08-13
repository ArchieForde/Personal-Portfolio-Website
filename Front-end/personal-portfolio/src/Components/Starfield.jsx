import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let frame = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.1 + 0.3,
      speed: Math.random() * 0.12 + 0.04,
      baseOpacity: Math.random() * 0.25 + 0.08,
      drift: (Math.random() - 0.5) * 0.05,
      phase: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.04 + 0.01,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        const twinkle = Math.sin(frame * star.twinkleSpeed + star.phase);
        const alpha = Math.max(0.02, star.baseOpacity * (0.5 + 0.5 * twinkle));
        ctx.fillStyle = `rgba(226, 232, 240, ${alpha})`;
        ctx.fill();

        star.y -= star.speed;
        star.x += star.drift;
        if (star.y < -10) {
          star.y = canvas.height + 10;
          star.x = Math.random() * canvas.width;
        }
        if (star.x < -10) star.x = canvas.width + 10;
        if (star.x > canvas.width + 10) star.x = -10;
      });
    };

    const animate = () => {
      frame++;
      if (frame % 3 === 0) draw();
      animationId = requestAnimationFrame(animate);
    };

    draw();
    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
