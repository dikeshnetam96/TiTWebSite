// app/blog/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog — Under Maintenance",
    description: "Our blog is temporarily unavailable while we make improvements.",
    robots: { index: false },
};

export default function BlogMaintenancePage() {
    return (
        <main className="min-h-screen pt-[14vh] px-4">
            <section className="mx-auto max-w-3xl">
                {/* Card */}
                <div
                    className="rounded-2xl border border-gray-200 dark:border-gray-800
                     bg-white/80 dark:bg-gray-900/70 backdrop-blur
                     shadow-lg p-8 md:p-10 text-center"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full px-3 py-1
                          bg-cyan-50 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-200
                          text-xs font-semibold">
                        <span className="inline-block h-2 w-2 rounded-full bg-cyan-600 dark:bg-cyan-300 animate-pulse" />
                        Under Maintenance
                    </div>

                    {/* Icon + spinner */}
                    <div className="mx-auto mt-6 mb-6 h-20 w-20 relative">
                        <span className="absolute inset-0 rounded-full border-4 border-cyan-600/30 border-t-cyan-600 animate-spin" />
                        <div className="absolute inset-0 grid place-items-center">
                            {/* Inline SVG so you don't need any assets */}
                            <svg
                                viewBox="0 0 24 24"
                                className="h-10 w-10 text-cyan-700 dark:text-cyan-300"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path d="M3 21h18M7 21V7a5 5 0 0 1 10 0v14" />
                                <path d="M7 11h10M7 15h10" />
                            </svg>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                        We’re polishing the blog
                    </h1>

                    {/* Copy */}
                    <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                        Our blog is temporarily down while we roll out improvements.
                        We’ll be back shortly with fresh stories and updates.
                    </p>

                    {/* CTA buttons */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-lg px-5 py-2.5
                         bg-cyan-700 hover:bg-cyan-900 text-white
                         transition-colors"
                        >
                            Back to Home
                        </Link>

                        <Link
                            href="/connect"
                            className="inline-flex items-center justify-center rounded-lg px-5 py-2.5
                         border border-gray-300 dark:border-gray-700
                         text-gray-800 dark:text-gray-200
                         hover:bg-gray-50 dark:hover:bg-gray-800
                         transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Small footer note */}
                    <p className="mt-6 text-xs text-gray-500 dark:text-gray-500">
                        Status: updating content &amp; design • Last checked just now
                    </p>
                </div>
            </section>
        </main>
    );
}
