'use client';

import { useEffect, useRef } from 'react';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationStyle?: 'fade' | 'gradient' | 'blur' | 'scale';
}

export default function ScrollAnimatedSection({
  children,
  className = '',
  animationStyle = 'fade',
}: ScrollAnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateAnimation = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate progress: -1 (above) → 0 (middle) → 1 (below)
      const progress = (viewportHeight / 2 - rect.top) / viewportHeight;
      
      if (animationStyle === 'fade') {
        const opacity = Math.min(1, Math.max(0.3, 1 - Math.abs(progress) * 0.5));
        section.style.opacity = opacity.toString();
      } else if (animationStyle === 'gradient') {
        const hue = (progress * 120 + 200) % 360;
        const bgGradient = `linear-gradient(135deg, hsl(${hue}, 70%, 20%), hsl(${hue + 20}, 70%, 15%))`;
        section.style.background = bgGradient;
      } else if (animationStyle === 'blur') {
        const blur = Math.max(0, Math.abs(progress) * 3);
        section.style.filter = `blur(${blur}px)`;
      } else if (animationStyle === 'scale') {
        const scale = Math.max(0.95, 1 - Math.abs(progress) * 0.1);
        section.style.transform = `scale(${scale})`;
      }
    };

    window.addEventListener('scroll', updateAnimation, { passive: true });
    updateAnimation();

    return () => window.removeEventListener('scroll', updateAnimation);
  }, [animationStyle]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  );
}
