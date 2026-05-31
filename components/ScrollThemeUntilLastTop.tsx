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

    useEffect(() => {
        const onScroll = () => {
            const sentinel = document.querySelector(lastSectionTopSelector) as HTMLElement | null;
            if (!sentinel) return;
            const top = sentinel.getBoundingClientRect().top;
            // black until last section's TOP reaches viewport TOP
            setMode(top <= 0 ? 'light' : 'dark');
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
                'min-h-screen transition-colors duration-700 ease-out',
                mode === 'dark' ? 'bg-black text-white' : 'bg-white text-black',
            ].join(' ')}
        >
            {children}
        </div>
    );
}
