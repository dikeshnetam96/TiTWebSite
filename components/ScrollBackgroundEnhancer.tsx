'use client';

import { useEffect, useState } from 'react';

export default function ScrollBackgroundEnhancer() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [blur, setBlur] = useState(0);
    const [bgColor, setBgColor] = useState('rgba(255, 255, 255, 1)');
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = window.scrollY;
            const progress = maxScroll > 0 ? Math.min(scrolled / maxScroll, 1) : 0;

            setScrollProgress(progress);

            // Progressive blur effect (0 to 8px as you scroll)
            const blurAmount = Math.min(progress * 12, 8);
            setBlur(blurAmount);

            // Smooth color transition based on scroll
            // Light → Dark → Light cycle for visual interest
            const hue = (progress * 360) % 360;
            const saturation = 5 + progress * 8; // 5-13% (subtle)
            const lightness = isDark ? 8 + progress * 4 : 95 - progress * 5; // Adapts to dark mode

            setBgColor(
                `hsl(${hue}, ${saturation}%, ${lightness}%)`
            );
        };

        // Check if dark mode is active
        const checkDarkMode = () => {
            const isDarkMode = document.documentElement.classList.contains('dark');
            setIsDark(isDarkMode);
        };

        checkDarkMode();
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        document.addEventListener('DOMContentLoaded', checkDarkMode);

        // Watch for theme changes
        const observer = new MutationObserver(checkDarkMode);
        observer.observe(document.documentElement, { attributes: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('DOMContentLoaded', checkDarkMode);
            observer.disconnect();
        };
    }, [isDark]);

    return (
        <div
            className="fixed inset-0 pointer-events-none z-0"
            style={{
                backdropFilter: `blur(${blur}px)`,
                backgroundColor: bgColor,
                opacity: 0.02,
                transition: 'backdrop-filter 0.3s ease-out',
            }}
            aria-hidden="true"
        />
    );
}
