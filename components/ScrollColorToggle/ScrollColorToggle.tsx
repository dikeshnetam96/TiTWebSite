// app/components/ScrollColorToggle.tsx (Next.js / React + Tailwind)
// Usage: import and render <ScrollColorToggle /> in a page (e.g., app/page.tsx)
// Effect: Background flips on EVERY full-screen page you pass while scrolling up or down
// (black on page 0, white on page 1, black on page 2, ...). Smooth transitions included.

"use client";
import { useEffect, useMemo, useState } from "react";

export default function ScrollColorToggle() {
    // You can extend this palette if you want more than two steps
    // e.g., ["dark", "light", "dark", "light"] or a custom color map below
    const palette = useMemo<("dark" | "light")[]>(() => ["dark", "light"], []);

    const [pageIndex, setPageIndex] = useState(0);
    const mode = palette[pageIndex % palette.length];

    useEffect(() => {
        const onScroll = () => {
            const vh = Math.max(1, window.innerHeight); // avoid div-by-zero on rare cases
            const y = window.scrollY;
            // Round to nearest page so color switches when you cross the midpoint between pages
            const idx = Math.max(0, Math.round(y / vh));
            setPageIndex(idx);
        };

        onScroll(); // initialize
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
                // Page container takes as many screens as sections below
                "min-h-screen w-full transition-colors duration-700 ease-out",
                mode === "dark" ? "bg-black text-white" : "bg-white text-black",
                // Optional: enable section-by-section paging feel
                "snap-y snap-mandatory overflow-y-auto h-screen",
            ].join(" ")}
        >
            {/* Sticky header (optional) */}
            <header className="sticky top-0 z-10">
                <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-semibold tracking-tight">TiT</h1>
                    <nav className="text-sm opacity-80">Scroll to switch theme (each page)</nav>
                </div>
            </header>

            {/* SECTION 1 (Page 0): Dark */}
            <section className="min-h-screen grid place-items-center snap-start">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome</h2>
                    <p className="text-base md:text-lg opacity-80">
                        Page 0. Background is <span className="font-medium">dark</span>. Scroll to Page 1 and it flips to light.
                    </p>
                    <div className="mt-10 animate-bounce text-sm opacity-70">↓ Scroll</div>
                </div>
            </section>

            {/* SECTION 2 (Page 1): Light */}
            <section className="min-h-screen grid place-items-center snap-start">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Now Light</h2>
                    <p className="text-base md:text-lg opacity-80">
                        Page 1. The theme toggles every full viewport you move, both on scroll down and back up.
                    </p>
                </div>
            </section>

            {/* SECTION 3 (Page 2): Dark again */}
            <section className="min-h-screen grid place-items-center snap-start">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Dark Again</h2>
                    <p className="text-base md:text-lg opacity-80">
                        Page 2. Scroll up or down—color switches every page.
                    </p>
                </div>
            </section>

            {/* SECTION 4 (Page 3): Light again */}
            <section className="min-h-screen grid place-items-center snap-start">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Light Again</h2>
                    <p className="text-base md:text-lg opacity-80">
                        Page 3. You can add more sections—theme will keep alternating.
                    </p>
                </div>
            </section>

            {/* Extra content */}
            <section className="min-h-[60vh] grid place-items-center snap-start">
                <div className="mx-auto max-w-3xl px-6 text-center">
                    <h3 className="text-2xl font-semibold mb-2">Customize</h3>
                    <ul className="space-y-2 text-left mx-auto max-w-md">
                        <li>
                            • Want a custom color map? Replace <code>palette</code> with something like
                            {" "}
                            <code>[&quot;dark&quot;, &quot;light&quot;, &quot;light&quot;, &quot;dark&quot;]</code>.
                        </li>
                        <li>
                            • Prefer section-based detection? Use <code>IntersectionObserver</code> on each
                            <code>section</code> and compute which is most visible.
                        </li>
                        <li>
                            • Add <code>scroll-snap</code> classes (already included) for crisp page-by-page scroll.
                        </li>
                    </ul>
                </div>
            </section>
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
