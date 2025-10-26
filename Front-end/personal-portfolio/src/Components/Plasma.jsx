// src/Components/Plasma.jsx
import { useEffect, useRef, useState } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 0.5, 0.2];
  return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255];
};

const vertex = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;
  for (vec2 r = iResolution.xy, Q; ++i < 60.; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y));
    p.z -= 4.;
    S = p;
    d = p.y-T;
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05);
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T));
    z+= d = abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4;
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }
  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}
`;

export const Plasma = ({
  color = "#ffffff",
  speed = 1,
  direction = "forward",
  scale = 1,
  opacity = 1,
  mouseInteractive = true,
}) => {
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const [fallbackMode, setFallbackMode] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Quick WebGL2 support check:
    const canvasTest = document.createElement("canvas");
    const gl2 = canvasTest.getContext("webgl2");
    if (!gl2) {
      console.warn("WebGL2 not supported — Plasma will use fallback background.");
      setFallbackMode(true);
      return;
    }

    let renderer, gl, canvas, program, mesh, ro, raf;
    try {
      const useCustomColor = color ? 1.0 : 0.0;
      const customColorRgb = color ? hexToRgb(color) : [1, 1, 1];
      const directionMultiplier = direction === "reverse" ? -1.0 : 1.0;

      renderer = new Renderer({
        webgl: 2,
        alpha: true,
        antialias: false,
        dpr: Math.min(window.devicePixelRatio || 1, 2),
      });
      gl = renderer.gl;
      canvas = gl.canvas;

      // ensure canvas fills parent and doesn't block interactions
      canvas.style.display = "block";
      canvas.style.position = "absolute";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.pointerEvents = "none"; // important — don't block UI
      canvas.style.zIndex = "0";

      container.appendChild(canvas);

      const geometry = new Triangle(gl);

      program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
          iTime: { value: 0 },
          iResolution: { value: new Float32Array([1, 1]) },
          uCustomColor: { value: new Float32Array(customColorRgb) },
          uUseCustomColor: { value: useCustomColor },
          uSpeed: { value: speed * 0.4 },
          uDirection: { value: directionMultiplier },
          uScale: { value: scale },
          uOpacity: { value: opacity },
          uMouse: { value: new Float32Array([0, 0]) },
          uMouseInteractive: { value: mouseInteractive ? 1.0 : 0.0 },
        },
      });

      mesh = new Mesh(gl, { geometry, program });

      const handleMouseMove = (e) => {
        if (!mouseInteractive) return;
        const rect = container.getBoundingClientRect();
        mousePos.current.x = e.clientX - rect.left;
        mousePos.current.y = e.clientY - rect.top;
        const mu = program.uniforms.uMouse.value;
        mu[0] = mousePos.current.x;
        mu[1] = mousePos.current.y;
      };

      if (mouseInteractive) {
        container.addEventListener("mousemove", handleMouseMove);
      }

      const setSize = () => {
        const rect = container.getBoundingClientRect();
        const width = Math.max(1, Math.floor(rect.width));
        const height = Math.max(1, Math.floor(rect.height));
        renderer.setSize(width, height);
        const res = program.uniforms.iResolution.value;
        res[0] = gl.drawingBufferWidth;
        res[1] = gl.drawingBufferHeight;
      };

      ro = new ResizeObserver(setSize);
      ro.observe(container);
      setSize();

      const t0 = performance.now();
      const loop = (t) => {
        let timeValue = (t - t0) * 0.001;
        if (direction === "pingpong") {
          const cycle = Math.sin(timeValue * 0.5) * (direction === "reverse" ? -1.0 : 1.0);
          program.uniforms.uDirection.value = cycle;
        }
        program.uniforms.iTime.value = timeValue;
        renderer.render({ scene: mesh });
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    } catch (err) {
      console.error("Plasma initialization failed:", err);
      setFallbackMode(true);
    }

    return () => {
      try {
        cancelAnimationFrame(raf);
      } catch {}
      try {
        ro?.disconnect();
      } catch {}
      if (mouseInteractive && container) container.removeEventListener("mousemove", () => {});
      try {
        if (container && canvas && container.contains(canvas)) container.removeChild(canvas);
      } catch {}
      // best-effort cleanup of GL
      try {
        gl?.getExtension("WEBGL_lose_context")?.loseContext();
      } catch {}
    };
  }, [color, speed, direction, scale, opacity, mouseInteractive]);

  // fallback simple visual if WebGL2 unavailable or shader failed
  if (fallbackMode) {
    const gradient = `radial-gradient(circle at 30% 20%, ${color}33, #000000 60%)`;
    return (
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
          background: gradient,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
    );
  }

  return <div ref={containerRef} className="w-full h-full overflow-hidden relative" />;
};

export default Plasma;
