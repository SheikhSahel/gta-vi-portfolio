"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  color: string;
  alpha: number;
};

const PARTICLE_COLORS = ["#ffad36", "#ff4d94", "#00f0ff"];

export function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resizeCanvas = () => {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    resizeCanvas();

    const particles: Particle[] = Array.from({ length: reducedMotion ? 0 : 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 1,
      speedY: -(Math.random() * 0.5 + 0.2),
      speedX: (Math.random() - 0.5) * 0.3,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
      alpha: Math.random() * 0.6 + 0.2,
    }));

    const render = () => {
      if (document.visibilityState === "hidden" || reducedMotion) return;

      context.clearRect(0, 0, width, height);
      context.strokeStyle = "rgba(255, 255, 255, 0.02)";
      context.lineWidth = 1;

      for (let x = 0; x < width; x += 60) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }

      for (let y = 0; y < height; y += 60) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      particles.forEach((particle) => {
        particle.y += particle.speedY;
        particle.x += particle.speedX;

        if (particle.y < 0) {
          particle.y = height;
          particle.x = Math.random() * width;
        }

        context.fillStyle = particle.color;
        context.globalAlpha = particle.alpha;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      });

      context.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") render();
    };

    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-accent-pink/15 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-accent-turquoise/15 blur-[140px]" />
      <div className="absolute right-[10%] top-[40%] h-[400px] w-[400px] rounded-full bg-accent-amber/10 blur-[130px]" />
      <canvas ref={canvasRef} className="h-full w-full opacity-70" />
    </div>
  );
}
