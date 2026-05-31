// 'use client';

// import React, { useEffect, useRef, useState } from 'react';

// type ApiResponse = { message?: string; error?: string };
// type JsonPayload = Record<string, string>;

// export default function TITHero() {
//     /** Parallax bg */
//     const bgRef = useRef<HTMLDivElement>(null);
//     const heroRef = useRef<HTMLElement>(null);

//     useEffect(() => {
//         const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
//         if (prefersReduced) return;

//         const bg = bgRef.current!;
//         const hero = heroRef.current!;
//         let target = 0, current = 0;
//         const speed = 0.08;
//         const strength = 0.35;

//         const onScroll = () => {
//             const rect = hero.getBoundingClientRect();
//             const scrolledInHero = Math.min(Math.max(-rect.top, 0), rect.height);
//             target = scrolledInHero * strength;
//         };

//         let rafId = 0;
//         const tick = () => {
//             current += (target - current) * speed;
//             bg.style.transform = `translate3d(0, ${-current}px, 0) scale(1.1)`;
//             rafId = requestAnimationFrame(tick);
//         };

//         window.addEventListener('scroll', onScroll, { passive: true });
//         onScroll();
//         tick();
//         return () => {
//             window.removeEventListener('scroll', onScroll);
//             cancelAnimationFrame(rafId);
//         };
//     }, []);

//     /** Contact modal state + handlers */
//     const [open, setOpen] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [resultOpen, setResultOpen] = useState(false);
//     const [resultMsg, setResultMsg] = useState('');
//     const [resultOk, setResultOk] = useState<boolean>(true);

//     const dialogRef = useRef<HTMLDivElement | null>(null);
//     const firstFieldRef = useRef<HTMLInputElement | null>(null);

//     useEffect(() => {
//         const onKeyDown = (e: KeyboardEvent) => {
//             if (e.key === 'Escape') {
//                 if (resultOpen) setResultOpen(false);
//                 else setOpen(false);
//             }
//         };
//         document.addEventListener('keydown', onKeyDown);
//         return () => document.removeEventListener('keydown', onKeyDown);
//     }, [resultOpen]);

//     useEffect(() => {
//         if (open) setTimeout(() => firstFieldRef.current?.focus(), 0);
//     }, [open]);

//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const formEl = e.currentTarget as HTMLFormElement;
//         setLoading(true);
//         setResultOpen(false);

//         try {
//             const form = new FormData(formEl);
//             const payload = Object.fromEntries(form.entries()) as JsonPayload;

//             const res = await fetch('/api/tit', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(payload),
//             });

//             const data = (await res.json()) as ApiResponse;
//             if (!res.ok) throw new Error(data?.error || 'Request failed');

//             formEl.reset();
//             setOpen(false);
//             setResultOk(true);
//             setResultMsg(data?.message ?? 'Thanks! Your message has been sent.');
//         } catch (err: unknown) {
//             const msg =
//                 err instanceof Error ? err.message :
//                     typeof err === 'string' ? err :
//                         'Something went wrong. Please try again.';
//             setResultOk(false);
//             setResultMsg(msg);
//         } finally {
//             setLoading(false);
//             setResultOpen(true);
//         }
//     };

//     /** ENTER ANIMATIONS (mount) */
//     const [mounted, setMounted] = useState(false);
//     useEffect(() => {
//         // Delay a tick so transitions fire after first paint
//         const id = requestAnimationFrame(() => setMounted(true));
//         return () => cancelAnimationFrame(id);
//     }, []);

//     // Utility to toggle initial/entered class names
//     const enter = (entered: string, initial = 'opacity-0 translate-y-6') =>
//         `${mounted ? entered : initial} transition-all duration-700 ease-out motion-reduce:transition-none`;

//     return (
//         <main
//             ref={heroRef}
//             className="relative min-h-[100svh] w-full overflow-hidden bg-black text-white"
//         >
//             {/* Background (image + gentle vignettes) */}
//             <div className="pointer-events-none absolute inset-0">
//                 <div
//                     ref={bgRef}
//                     className={enter('opacity-100 scale-100', 'opacity-0 scale-[1.04]') + ' absolute inset-[-5vh_0] will-change-transform'}
//                     style={{
//                         backgroundImage: 'url(/image/handshake.png)',
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                         transform: 'translate3d(0,0,0) scale(1.1)',
//                         filter: 'saturate(1.05) contrast(1.02)',
//                         transitionDuration: '900ms',
//                     }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/75" />
//                 <div className="absolute inset-0 [background:radial-gradient(120%_90%_at_50%_-10%,rgba(255,255,255,.08),transparent_60%)]" />
//             </div>

//             {/* Content */}
//             <div className="relative z-10 mx-auto max-w-[1280px] px-6 pt-28 pb-20 md:px-10 lg:px-14 lg:pt-36">
//                 {/* Badge */}
//                 <div
//                     className={
//                         enter('opacity-100 translate-y-0', 'opacity-0 translate-y-4') +
//                         ' mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 text-sm tracking-wide backdrop-blur'
//                     }
//                     style={{ transitionDelay: mounted ? '80ms' : '0ms' }}
//                 >
//                     <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
//                     TIT • Product & IT Solutions
//                 </div>

//                 {/* Heading */}
//                 <h1
//                     className={
//                         enter('opacity-100 translate-y-0', 'opacity-0 translate-y-3') +
//                         ' leading-[0.95] font-extrabold text-[2.7rem] sm:text-[3.6rem] md:text-[4.8rem] lg:text-[5.6rem]'
//                     }
//                     style={{ transitionDelay: mounted ? '180ms' : '0ms' }}
//                 >
//                     We are people
//                     <br />
//                     making <span className="text-white/90">products</span>
//                     <br />
//                     for people.
//                 </h1>

//                 {/* Paragraph */}
//                 <p
//                     className={
//                         enter('opacity-100 translate-y-0', 'opacity-0 translate-y-3') +
//                         ' mt-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl'
//                     }
//                     style={{ transitionDelay: mounted ? '300ms' : '0ms' }}
//                 >
//                     We’re a team of developers, strategists, designers, and engineers building delightful
//                     products people love. Scroll to see the smooth parallax background. Ready to connect?
//                 </p>

//                 {/* CTA row */}
//                 <div
//                     className={
//                         enter('opacity-100 translate-y-0', 'opacity-0 translate-y-3') +
//                         ' mt-12 flex flex-wrap items-center gap-4'
//                     }
//                     style={{ transitionDelay: mounted ? '420ms' : '0ms' }}
//                 >
//                     {/* Primary CTA → opens contact modal */}
//                     <button
//                         onClick={() => setOpen(true)}
//                         className="rounded-full bg-white px-6 py-3 font-medium text-black shadow-sm transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
//                         aria-label="Open contact form"
//                     >
//                         Let’s talk
//                     </button>

//                     {/* Secondary links (optional) */}
//                     <a
//                         href="mailto:hello@example.com"
//                         className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-white/90 hover:bg-white/10"
//                     >
//                         Email
//                     </a>
//                     <a
//                         href="tel:+1234567890"
//                         className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-white/90 hover:bg-white/10"
//                     >
//                         Call
//                     </a>
//                     <a
//                         href="https://wa.me/7692808915"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-white/90 hover:bg-white/10"
//                         aria-label="Connect via WhatsApp"
//                     >
//                         WhatsApp
//                     </a>
//                 </div>
//             </div>

//             {/* Contact Modal */}
//             <div className={`fixed inset-0 z-[60] ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
//                 {/* Backdrop */}
//                 <div
//                     className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
//                     onClick={() => setOpen(false)}
//                 />
//                 {/* Panel */}
//                 <div
//                     role="dialog"
//                     aria-modal="true"
//                     aria-labelledby="contact-title"
//                     ref={dialogRef}
//                     className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
//             w-[90%] max-w-lg rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800
//             transition-all ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
//                 >
//                     <div className="p-6 sm:p-8">
//                         <div className="flex items-start justify-between gap-6">
//                             <div>
//                                 <h2 id="contact-title" className="text-2xl font-bold text-gray-900 dark:text-white">
//                                     Contact us
//                                 </h2>
//                                 <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
//                                     Tell us a bit about your project and we’ll get back to you.
//                                 </p>
//                             </div>
//                             <button
//                                 onClick={() => setOpen(false)}
//                                 className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200
//                   focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 rounded-md"
//                                 aria-label="Close contact form"
//                             >
//                                 ✕
//                             </button>
//                         </div>

//                         <form onSubmit={handleSubmit} className="mt-6 space-y-5">
//                             <div>
//                                 <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
//                                     Name
//                                 </label>
//                                 <input
//                                     ref={firstFieldRef}
//                                     id="name"
//                                     name="name"
//                                     type="text"
//                                     required
//                                     className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700
//                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
//                     px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/70"
//                                     placeholder="Your full name"
//                                 />
//                             </div>

//                             <div>
//                                 <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
//                                     Email
//                                 </label>
//                                 <input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     required
//                                     className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700
//                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
//                     px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/70"
//                                     placeholder="you@company.com"
//                                 />
//                             </div>

//                             <div>
//                                 <label htmlFor="query" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
//                                     Query
//                                 </label>
//                                 <textarea
//                                     id="query"
//                                     name="query"
//                                     required
//                                     rows={4}
//                                     className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700
//                     bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
//                     px-4 py-2.5 outline-none resize-y focus:ring-2 focus:ring-blue-500/70"
//                                     placeholder="How can we help?"
//                                 />
//                             </div>

//                             <div className="flex items-center justify-end gap-3 pt-2">
//                                 <button
//                                     type="button"
//                                     onClick={() => setOpen(false)}
//                                     className="rounded-full border border-gray-300 px-5 py-2.5 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     disabled={loading}
//                                     className="rounded-full bg-black px-6 py-2.5 text-white transition hover:bg-black/90 disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-white/90"
//                                 >
//                                     {loading ? 'Sending…' : 'Send message'}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//             {/* Full-screen loader overlay */}
//             {loading && (
//                 <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm">
//                     <div
//                         role="status"
//                         aria-live="polite"
//                         className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 shadow-xl"
//                     >
//                         <div className="h-12 w-12 rounded-full border-4 border-gray-300 dark:border-gray-700 border-t-black animate-spin" />
//                         <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Sending your message…</p>
//                         <span className="sr-only">Loading</span>
//                     </div>
//                 </div>
//             )}

//             {/* Result popup */}
//             {resultOpen && (
//                 <div className="fixed inset-0 z-[75] flex items-center justify-center bg-black/40">
//                     <div className="w-[92%] max-w-sm rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-2xl text-center">
//                         <div
//                             className={`mx-auto mb-3 h-12 w-12 rounded-full flex items-center justify-center ${resultOk
//                                     ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
//                                     : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
//                                 }`}
//                         >
//                             {resultOk ? '✓' : '✕'}
//                         </div>
//                         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                             {resultOk ? 'Message sent' : 'Something went wrong'}
//                         </h3>
//                         <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{resultMsg}</p>
//                         <button
//                             onClick={() => setResultOpen(false)}
//                             className="mt-5 rounded-full bg-black px-5 py-2.5 text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
//                         >
//                             OK
//                         </button>
//                     </div>
//                 </div>
//             )}

//             {/* Optional step indicator */}
//             <div className="pointer-events-none absolute bottom-10 right-10 z-10 hidden items-center gap-3 lg:flex">
//                 <span className="text-8xl font-black leading-none text-white/10">01</span>
//                 <span className="h-3 w-3 rounded-full bg-white/70" />
//             </div>
//         </main>
//     );
// }


'use client';

import React, { useEffect, useRef, useState } from 'react';

type ApiResponse = { message?: string; error?: string };
type JsonPayload = Record<string, string>;

export default function TITHero() {
    /** Parallax + Zoom bg */
    const bgRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        const bg = bgRef.current!;
        const hero = heroRef.current!;

        // Easing state (Y and scale)
        let targetY = 0, currentY = 0;
        let targetScale = 1.1, currentScale = 1.1;

        const speed = 0.08;      // easing (0..1)
        const strength = 0.35;   // translate intensity
        const baseScale = 1.1;   // starting scale
        const maxExtra = 0.15;   // extra scale added at bottom (1.1 -> 1.25 max)

        const onScroll = () => {
            const rect = hero.getBoundingClientRect();
            const inView = Math.min(Math.max(-rect.top, 0), rect.height);      // 0..height
            const progress = rect.height ? inView / rect.height : 0;           // 0..1

            // parallax target
            targetY = inView * strength;

            // zoom target (subtle): at top 1.1 -> near bottom 1.25
            targetScale = baseScale + progress * maxExtra;

            // (If you want zoom-out while scrolling, flip it)
            // targetScale = baseScale + (1 - progress) * maxExtra;
        };

        let rafId = 0;
        const tick = () => {
            // ease both values
            currentY += (targetY - currentY) * speed;
            currentScale += (targetScale - currentScale) * speed;

            bg.style.transform = `translate3d(0, ${-currentY}px, 0) scale(${currentScale})`;
            rafId = requestAnimationFrame(tick);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        tick();

        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    /** Contact modal state + handlers (unchanged) */
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultOpen, setResultOpen] = useState(false);
    const [resultMsg, setResultMsg] = useState('');
    const [resultOk, setResultOk] = useState<boolean>(true);

    const dialogRef = useRef<HTMLDivElement | null>(null);
    const firstFieldRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (resultOpen) setResultOpen(false);
                else setOpen(false);
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [resultOpen]);

    useEffect(() => {
        if (open) setTimeout(() => firstFieldRef.current?.focus(), 0);
    }, [open]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formEl = e.currentTarget as HTMLFormElement;
        setLoading(true);
        setResultOpen(false);
        try {
            const form = new FormData(formEl);
            const payload = Object.fromEntries(form.entries()) as JsonPayload;
            const res = await fetch('/api/tit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = (await res.json()) as ApiResponse;
            if (res.ok) {
                formEl.reset();
                setOpen(false);
                setResultOk(true);
                setResultMsg(data?.message ?? 'Thanks! Your message has been sent.');
            } else {
                setResultOk(false);
                setResultMsg(data?.error || 'Request failed');
            }
        } catch (err: unknown) {
            const msg =
                err instanceof Error ? err.message :
                    typeof err === 'string' ? err :
                        'Something went wrong. Please try again.';
            setResultOk(false);
            setResultMsg(msg);
        } finally {
            setLoading(false);
            setResultOpen(true);
        }
    };

    /** ENTER ANIMATIONS (mount) */
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        const id = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(id);
    }, []);
    const enter = (entered: string, initial = 'opacity-0 translate-y-6') =>
        `${mounted ? entered : initial} transition-all duration-700 ease-out motion-reduce:transition-none`;

    return (
        <main ref={heroRef} className="relative min-h-[100svh] w-full overflow-hidden bg-black text-white">
            {/* Background (image + vignettes) */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    ref={bgRef}
                    className={
                        enter('opacity-100', 'opacity-0') +
                        ' absolute inset-[-5vh_0] will-change-transform'
                    }
                    style={{
                        backgroundImage: 'url(/image/handshake.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        // transform is driven by JS above
                        filter: 'saturate(1.05) contrast(1.02)',
                        transitionDuration: '900ms',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/75" />
                <div className="absolute inset-0 [background:radial-gradient(120%_90%_at_50%_-10%,rgba(255,255,255,.08),transparent_60%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-[1280px] px-6 pt-28 pb-20 md:px-10 lg:px-14 lg:pt-36">
                <div
                    className={
                        enter('opacity-100 translate-y-0', 'opacity-0 translate-y-4') +
                        ' mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2 text-sm tracking-wide backdrop-blur'
                    }
                    style={{ transitionDelay: mounted ? '80ms' : '0ms' }}
                >
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                    TiT Pvt. Ltd. • Product and IT Solutions
                </div>

                <h1
                    className={
                        enter('opacity-100 translate-y-0', 'opacity-0 translate-y-3') +
                        ' leading-[0.95] font-extrabold text-[2.7rem] sm:text-[3.6rem] md:text-[4.8rem] lg:text-[5.6rem]'
                    }
                    style={{ transitionDelay: mounted ? '180ms' : '0ms' }}
                >
                    Engineering products
                    <br />
                    and platforms
                    <br />
                    that move business forward.
                </h1>

                <p
                    className={
                        enter('opacity-100 translate-y-0', 'opacity-0 translate-y-3') +
                        ' mt-8 max-w-3xl text-lg leading-relaxed text-white/85 md:text-xl'
                    }
                    style={{ transitionDelay: mounted ? '300ms' : '0ms' }}
                >
                    We help organizations scale through product engineering, data platforms,
                    cloud modernization, and AI/ML solutions designed for measurable outcomes.
                </p>

                <div
                    className={
                        enter('opacity-100 translate-y-0', 'opacity-0 translate-y-3') +
                        ' mt-12 flex flex-wrap items-center gap-4'
                    }
                    style={{ transitionDelay: mounted ? '420ms' : '0ms' }}
                >
                    <button
                        onClick={() => setOpen(true)}
                        className="rounded-full bg-white px-6 py-3 font-medium text-black shadow-sm transition hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                        aria-label="Open contact form"
                    >
                        Book a consultation
                    </button>

                    <a
                        href="mailto:dikeshnetam96@gmail.com"
                        className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-white/90 hover:bg-white/10"
                    >
                        Email
                    </a>
                    <a
                        href="tel:+917692808915"
                        className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-white/90 hover:bg-white/10"
                    >
                        Call
                    </a>
                    <a
                        href="https://wa.me/7692808915"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-white/90 hover:bg-white/10"
                        aria-label="Connect via WhatsApp"
                    >
                        WhatsApp
                    </a>
                </div>
            </div>

            {/* Contact Modal (unchanged UI, wired to state) */}
            <div className={`fixed inset-0 z-[60] ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
                <div
                    className={`absolute inset-0 bg-black/50 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setOpen(false)}
                />
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="contact-title"
                    ref={dialogRef}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-[90%] max-w-lg rounded-2xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800
            transition-all ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                >
                    <div className="p-6 sm:p-8">
                        <div className="flex items-start justify-between gap-6">
                            <div>
                                <h2 id="contact-title" className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Contact us
                                </h2>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                    Tell us a bit about your project and we’ll get back to you.
                                </p>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70 rounded-md"
                                aria-label="Close contact form"
                            >
                                ✕
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                                    Name
                                </label>
                                <input
                                    ref={firstFieldRef}
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                    px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/70"
                                    placeholder="Your full name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                    px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/70"
                                    placeholder="you@company.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="query" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                                    Query
                                </label>
                                <textarea
                                    id="query"
                                    name="query"
                                    required
                                    rows={4}
                                    className="mt-2 w-full rounded-lg border border-gray-300 dark:border-gray-700
                    bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                    px-4 py-2.5 outline-none resize-y focus:ring-2 focus:ring-blue-500/70"
                                    placeholder="How can we help?"
                                />
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-2">
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="rounded-full border border-gray-300 px-5 py-2.5 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="rounded-full bg-black px-6 py-2.5 text-white transition hover:bg-black/90 disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-white/90"
                                >
                                    {loading ? 'Sending…' : 'Send message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {loading && (
                <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div
                        role="status"
                        aria-live="polite"
                        className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 shadow-xl"
                    >
                        <div className="h-12 w-12 rounded-full border-4 border-gray-300 dark:border-gray-700 border-t-black animate-spin" />
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Sending your message…</p>
                        <span className="sr-only">Loading</span>
                    </div>
                </div>
            )}

            {resultOpen && (
                <div className="fixed inset-0 z-[75] flex items-center justify-center bg-black/40">
                    <div className="w-[92%] max-w-sm rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 shadow-2xl text-center">
                        <div
                            className={`mx-auto mb-3 h-12 w-12 rounded-full flex items-center justify-center ${resultOk
                                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                                    : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                                }`}
                        >
                            {resultOk ? '✓' : '✕'}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            {resultOk ? 'Message sent' : 'Something went wrong'}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{resultMsg}</p>
                        <button
                            onClick={() => setResultOpen(false)}
                            className="mt-5 rounded-full bg-black px-5 py-2.5 text-white transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                        >
                            OK
                        </button>
                    </div>
                </div>
            )}

            <div className="pointer-events-none absolute bottom-10 right-10 z-10 hidden items-center gap-3 lg:flex">
                <span className="text-8xl font-black leading-none text-white/10">01</span>
                <span className="h-3 w-3 rounded-full bg-white/70" />
            </div>
        </main>
    );
}
