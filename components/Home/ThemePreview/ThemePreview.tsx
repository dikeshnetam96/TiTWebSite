"use client";

import { useEffect, useRef } from "react";

const previewPages = [
    { theme: "dark", title: "Preview 1", body: "Dark → white text" },
    { theme: "light", title: "Preview 2", body: "Light → black text" },
    { theme: "dark", title: "Preview 3", body: "Flips as you scroll" },
    { theme: "light", title: "Preview 4", body: "No libs required" },
    { theme: "dark", title: "Preview 5", body: "IO picks dominant panel" },
    { theme: "light", title: "Preview 6", body: "Done!" },
];

export default function ThemePreview() {
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const html = document.documentElement;
        const box = boxRef.current;
        if (!box) return;

        const sections = Array.from(
            box.querySelectorAll<HTMLElement>("[data-theme]")
        );
        const ratios = new Map<Element, number>();

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => ratios.set(e.target, e.intersectionRatio));
                let top: Element | null = null;
                let best = 0;
                ratios.forEach((r, el) => { if (r > best) { best = r; top = el; } });
                if (top) {
                    const nextTheme = (top as HTMLElement).dataset.theme;
                    if (nextTheme === "dark") html.classList.add("dark");
                    else html.classList.remove("dark");
                }
            },
            {
                // Observe within the preview scroller only
                root: box,
                threshold: Array.from({ length: 21 }, (_, i) => i / 20),
                rootMargin: "0px 0px -8% 0px",
            }
        );

        sections.forEach((s) => io.observe(s));
        return () => io.disconnect();
    }, []);

    return (
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 my-10">
            <div className="text-center mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
                    Theme Flip Preview
                </h2>
                <p className="text-sm text-black/70 dark:text-white/70">
                    Scroll inside the phone mock—theme toggles globally as panels change.
                </p>
            </div>

            {/* Phone-like scroll box */}
            <div
                ref={boxRef}
                className="
          relative mx-auto w-full max-w-md h-[520px] overflow-y-auto
          rounded-[28px] border border-black/10 dark:border-white/10
          shadow-[0_10px_30px_rgba(0,0,0,.2)] bg-white dark:bg-black
          transition-colors duration-300
        "
            >
                {/* Top notch / camera cutout (purely visual) */}
                <div className="sticky top-0 z-10 h-8 bg-transparent flex items-center justify-center">
                    <span className="block w-24 h-1.5 bg-black/20 dark:bg-white/20 rounded-full" />
                </div>

                {/* Preview pages */}
                <div className="divide-y divide-black/10 dark:divide-white/10">
                    {previewPages.map((p, i) => (
                        <article
                            key={i}
                            data-theme={p.theme}
                            className={`
                min-h-[420px] px-6 py-8
                flex flex-col items-center justify-center text-center
                transition-colors duration-300
                ${p.theme === "dark" ? "bg-black text-white" : "bg-white text-black"}
              `}
                        >
                            <h3 className="text-2xl font-extrabold tracking-tight">
                                {p.title}
                            </h3>
                            <p className="mt-3 text-base opacity-75">{p.body}</p>

                            <div className="mt-8 flex gap-2">
                                <span className="px-3 py-1 text-xs rounded-full border border-current/20">
                                    {p.theme.toUpperCase()}
                                </span>
                                <span className="px-3 py-1 text-xs rounded-full border border-current/20">
                                    IntersectionObserver
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <p className="mt-3 text-center text-xs text-black/60 dark:text-white/60">
                Tip: Open DevTools and toggle dark mode classes to see global changes.
            </p>
        </section>
    );
}
