// app/components/ScrollThemeUntilLastTop.tsx
'use client';

import React, { useEffect, useState } from 'react';

type Props = {
    /** An element placed at the VERY TOP of your last section */
    lastSectionTopSelector?: string; // defaults to '#last-top'
    children: React.ReactNode;
};

export default function ScrollThemeUntilLastTop({
    lastSectionTopSelector = '#last-top',
    children,
}: Props) {
    const [mode, setMode] = useState<'dark' | 'light'>('dark');
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const sentinel = document.querySelector(lastSectionTopSelector) as HTMLElement | null;
            if (!sentinel) return;
            const top = sentinel.getBoundingClientRect().top;
            // black until last section's TOP reaches viewport TOP
            setMode(top <= 0 ? 'light' : 'dark');

            // Calculate scroll progress for additional effects
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
            setScrollProgress(progress);
        };

        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [lastSectionTopSelector]);

    return (
        <div
            className={[
                'min-h-screen transition-all duration-1000 ease-out',
                mode === 'dark' ? 'bg-gradient-to-b from-black via-gray-950 to-black text-white' : 'bg-gradient-to-b from-white via-gray-50 to-white text-black',
            ].join(' ')}
            style={{
                opacity: 0.98 + scrollProgress * 0.02,
            }}
        >
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
