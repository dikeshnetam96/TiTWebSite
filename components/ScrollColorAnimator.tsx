'use client';

import { useEffect, useRef } from 'react';

type ColorStop = {
  section: string;
  colors: {
    from: string;    // gradient start
    to: string;      // gradient end
    accent: string;  // accent/glow color
  };
};

const colorStops: ColorStop[] = [
  {
    section: 'hero',
    colors: {
      from: 'rgb(0, 0, 0)',
      to: 'rgb(20, 30, 50)',
      accent: 'rgb(75, 139, 202)',
    },
  },
  {
    section: 'projects',
    colors: {
      from: 'rgb(10, 15, 25)',
      to: 'rgb(30, 40, 60)',
      accent: 'rgb(100, 160, 220)',
    },
  },
  {
    section: 'experience',
    colors: {
      from: 'rgb(20, 25, 40)',
      to: 'rgb(40, 50, 70)',
      accent: 'rgb(120, 180, 240)',
    },
  },
  {
    section: 'contact',
    colors: {
      from: 'rgb(0, 0, 0)',
      to: 'rgb(25, 35, 55)',
      accent: 'rgb(90, 150, 210)',
    },
  },
];

export default function ScrollColorAnimator() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const updateColors = () => {
      const scrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = totalScroll > 0 ? scrollY / totalScroll : 0;

      // Get current color stop based on scroll position
      const index = Math.floor(scrollProgress * (colorStops.length - 1));
      const nextIndex = Math.min(index + 1, colorStops.length - 1);
      const localProgress = (scrollProgress * (colorStops.length - 1)) % 1;

      const current = colorStops[index];
      const next = colorStops[nextIndex];

      // Interpolate RGB values
      const interpolateColor = (c1: string, c2: string, t: number): string => {
        const parse = (rgb: string): [number, number, number] => {
          const match = rgb.match(/\d+/g);
          return match ? [+match[0], +match[1], +match[2]] : [0, 0, 0];
        };

        const [r1, g1, b1] = parse(c1);
        const [r2, g2, b2] = parse(c2);

        const r = Math.round(r1 + (r2 - r1) * t);
        const g = Math.round(g1 + (g2 - g1) * t);
        const b = Math.round(b1 + (b2 - b1) * t);

        return `rgb(${r}, ${g}, ${b})`;
      };

      const fromColor = interpolateColor(current.colors.from, next.colors.from, localProgress);
      const toColor = interpolateColor(current.colors.to, next.colors.to, localProgress);
      const accentColor = interpolateColor(current.colors.accent, next.colors.accent, localProgress);

      overlay.style.background = `linear-gradient(135deg, ${fromColor} 0%, ${toColor} 100%)`;
      overlay.style.setProperty('--accent-color', accentColor);
    };

    window.addEventListener('scroll', updateColors, { passive: true });
    updateColors();

    return () => window.removeEventListener('scroll', updateColors);
  }, []);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-5 transition-[background] duration-300 ease-out"
      style={{
        '--accent-color': 'rgb(75, 139, 202)',
      } as React.CSSProperties}
    />
  );
}
