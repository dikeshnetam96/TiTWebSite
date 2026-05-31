// app/components/ScrollColorToggle.tsx (Next.js / React + Tailwind)
// Usage: import and render <ScrollColorToggle /> in a page (e.g., app/page.tsx)
// Effect: Background smoothly alternates between dark and light every full-screen page
// (black on page 0, white on page 1, black on page 2, ...). Smooth transitions included.

"use client";
import { useEffect, useMemo, useState } from "react";

export default function ScrollColorToggle() {
    // Palette for professional software company site
    const palette = useMemo<("dark" | "light")[]>(() => ["dark", "light"], []);

    const [pageIndex, setPageIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const mode = palette[pageIndex % palette.length];

    useEffect(() => {
        const onScroll = () => {
            const vh = Math.max(1, window.innerHeight);
            const y = window.scrollY;
            const idx = Math.max(0, Math.round(y / vh));
            const progress = (y % vh) / vh;
            
            setPageIndex(idx);
            setScrollProgress(progress);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <div
            className={[
                "min-h-screen w-full transition-all duration-1000 ease-out",
                mode === "dark" 
                    ? "bg-gradient-to-b from-black via-gray-900 to-black text-white" 
                    : "bg-gradient-to-b from-white via-gray-50 to-white text-gray-900",
            ].join(" ")}
            style={{
                opacity: 0.95 + scrollProgress * 0.05,
            }}
        >
            {/* Professional header */}
            <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/20 dark:bg-white/5">
                <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-bold tracking-tight">TiT</h1>
                    <nav className="text-sm opacity-70">Smooth scroll experience</nav>
                </div>
            </header>

            {/* Content sections here */}
            <div className="relative z-10">
                {/* Sections will be added here */}
            </div>
        </div>
    );
}

/*
Notes
-----
1) This version updates the theme on EVERY page boundary using the current page index:
     const idx = Math.round(window.scrollY / window.innerHeight)
   That means when you scroll up or down across the halfway point between pages, it flips.

2) If you want exact flip at the *top* of each page (not midpoint), change Math.round to Math.floor.

3) For truly section-aware toggling (best for mixed-height sections), track the most visible
   section via IntersectionObserver and map section index → color.
*/
