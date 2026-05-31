'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
    FiPhone, FiMail, FiMapPin, FiArrowRight, FiCheckCircle, FiXCircle, FiX,
} from 'react-icons/fi';

type ToastState = { open: boolean; type: 'success' | 'error'; message: string };
type ApiResponse = { message?: string; error?: string };
type JsonPayload = Record<string, string>;

export default function ConnectPage() {
    const [submitting, setSubmitting] = useState(false);
    const [toast, setToast] = useState<ToastState>({ open: false, type: 'success', message: '' });

    // Simple in-view animation (no external libs)
    const leftRef = useRef<HTMLDivElement | null>(null);
    const rightRef = useRef<HTMLDivElement | null>(null);
    const [leftIn, setLeftIn] = useState(false);
    const [rightIn, setRightIn] = useState(false);

    useEffect(() => {
        const opts: IntersectionObserverInit = { root: null, rootMargin: '0px', threshold: 0.15 };
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (!e.isIntersecting) return;
                if (e.target === leftRef.current) setLeftIn(true);
                if (e.target === rightRef.current) setRightIn(true);
            });
        }, opts);

        if (leftRef.current) io.observe(leftRef.current);
        if (rightRef.current) io.observe(rightRef.current);
        return () => io.disconnect();
    }, []);

    function showToast(message: string, type: 'success' | 'error' = 'success') {
        setToast({ open: true, type, message });
        setTimeout(() => setToast((t) => ({ ...t, open: false })), 2400);
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSubmitting(true);

        const formEl = e.currentTarget as HTMLFormElement;
        const fd = new FormData(formEl);
        const payload = Object.fromEntries(fd.entries()) as JsonPayload;

        try {
            // If your app is deployed under a path prefix, set NEXT_PUBLIC_BASE_PATH="/prefix"
            const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
            const res = await fetch(`${base}/api/tit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            // Guard: avoid parsing HTML error pages as JSON
            const ct = res.headers.get('content-type') || '';
            const isJson = ct.includes('application/json');

            if (!isJson) {
                const text = await res.text();
                showToast(text || `${res.status} ${res.statusText}`, 'error');
                return;
            }

            const data = (await res.json()) as ApiResponse;
            if (!res.ok) {
                showToast(data?.error || 'Request failed', 'error');
                return;
            }

            formEl.reset();
            showToast(data?.message ?? 'Thanks! Your message has been sent.', 'success');
        } catch (err: unknown) {
            const msg =
                err instanceof Error ? err.message :
                    typeof err === 'string' ? err :
                        'Something went wrong. Please try again.';
            showToast(msg, 'error');
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <main className="relative min-h-screen pt-[14vh] pb-16 bg-white dark:bg-gray-950">
            {/* Floating toast */}
            <div
                className={[
                    'fixed left-1/2 z-[100] -translate-x-1/2 transition-all duration-300',
                    toast.open ? 'bottom-8 opacity-100' : '-bottom-20 opacity-0 pointer-events-none',
                ].join(' ')}
                aria-live="polite"
                role="status"
            >
                <div
                    className={[
                        'relative flex items-center gap-3 rounded-2xl px-4 py-3 backdrop-blur-xl border shadow-xl',
                        toast.type === 'success'
                            ? 'bg-white/80 dark:bg-gray-900/80 border-emerald-300/40 dark:border-emerald-500/30'
                            : 'bg-white/80 dark:bg-gray-900/80 border-rose-300/40 dark:border-rose-500/30',
                    ].join(' ')}
                >
                    {toast.type === 'success' ? (
                        <FiCheckCircle className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                        <FiXCircle className="h-6 w-6 text-rose-600 dark:text-rose-400" />
                    )}
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{toast.message}</p>
                    <button
                        aria-label="Close notification"
                        onClick={() => setToast((t) => ({ ...t, open: false }))}
                        className="ml-1 p-1 rounded-md text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        <FiX className="h-4 w-4" />
                    </button>
                </div>
            </div>

            <div className="mx-auto w-[92%] max-w-7xl">
                {/* Header */}
                <header className="text-center mb-10 sm:mb-14">
                    <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Connect with us
                    </h1>
                    <p className="mt-3 text-gray-600 dark:text-gray-400">
                        Tell us a bit about your project and we’ll get back to you soon.
                    </p>
                </header>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Left card */}
                    <aside
                        ref={leftRef}
                        className={[
                            'rounded-2xl border border-slate-200/70 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm p-6 sm:p-8',
                            'transition-all duration-700 ease-out will-change-transform transform',
                            leftIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8',
                        ].join(' ')}
                    >
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                            Let’s build something great
                        </h2>
                        <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                            We specialize in data engineering, product engineering, cloud, and AI/ML.
                            Share your goals—our team will reach out with next steps.
                        </p>

                        <div className="mt-6 space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center">
                                    <FiPhone className="h-5 w-5 text-cyan-700 dark:text-cyan-300" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Call</p>
                                    <p className="text-gray-600 dark:text-gray-400">+91 76928 08915</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center">
                                    <FiMail className="h-5 w-5 text-cyan-700 dark:text-cyan-300" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Email</p>
                                    <p className="text-gray-600 dark:text-gray-400">dikeshnetam96@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-xl bg-cyan-50 dark:bg-cyan-900/20 flex items-center justify-center">
                                    <FiMapPin className="h-5 w-5 text-cyan-700 dark:text-cyan-300" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">Office</p>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Building 14, DLF Phase 3, Cyber City, Gurgaon, Haryana 122022
                                    </p>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Right form */}
                    <div
                        ref={rightRef}
                        className={[
                            'rounded-2xl border border-slate-200/70 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm p-6 sm:p-8',
                            'transition-all duration-700 ease-out will-change-transform transform',
                            rightIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8',
                        ].join(' ')}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Your full name"
                                        className="mt-2 w-full rounded-xl border border-slate-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/70"
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
                                        placeholder="you@company.com"
                                        className="mt-2 w-full rounded-xl border border-slate-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/70"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="query" className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                                    Query
                                </label>
                                <textarea
                                    id="query"
                                    name="query"
                                    rows={5}
                                    required
                                    placeholder="How can we help?"
                                    className="mt-2 w-full rounded-xl border border-slate-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4 py-3 outline-none resize-y focus:ring-2 focus:ring-cyan-500/70"
                                />
                            </div>

                            <div className="flex flex-wrap items-center justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={(ev) => (ev.currentTarget.form as HTMLFormElement | null)?.reset()}
                                    className="px-4 py-2 rounded-lg border border-slate-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-slate-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-500/60"
                                >
                                    Clear
                                </button>

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-700 hover:bg-cyan-900 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/70 disabled:opacity-60"
                                >
                                    {submitting ? (
                                        <>
                                            <span className="relative flex h-4 w-4">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/70 opacity-75" />
                                                <span className="relative inline-flex rounded-full h-4 w-4 bg-white" />
                                            </span>
                                            Sending…
                                        </>
                                    ) : (
                                        <>
                                            Send message
                                            <FiArrowRight className="h-4 w-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
}
