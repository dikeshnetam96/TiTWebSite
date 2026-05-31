'use client';

import React from 'react';

type Milestone = {
    title: string;      // e.g. "2021 SI"
    subtitle: string;   // e.g. "Consultant"
};

type ExperienceProps = {
    kicker?: string;         // small icon + title row
    title?: string;          // big headline (left block)
    highlight?: string;      // scoped bold words in title
    blurb?: string;          // gray paragraph (left block)
    years?: string;          // big number, e.g. "9.8"
    yearsCaption?: string;   // "Years of operational expertise"
    milestones?: Milestone[]; // timeline chips
};

const dot = (
    <span className="inline-block h-2 w-2 rounded-full bg-black dark:bg-white align-middle" />
);

const Experience: React.FC<ExperienceProps> = ({
    kicker = `What's On Our Minds`,
    title = 'A VISION TO CREATE AN COMFORTABLE ACCESS TO',
    highlight = 'TRANSFORM BUSINESS ONLINE',
    blurb = `We strive to create local opportunities, growth, and impact in every country around the world. 
We're committed to achieving business and financial success while leaving a positive imprint on society - 
delivering what we call Performance with Purpose.`,
    years = '9.8',
    yearsCaption = 'Years of operational expertise',
    milestones = [
        { title: '2021 SI', subtitle: 'Consultant' },
        { title: '2023 HQ.AI', subtitle: 'Launch' },
        { title: '2024 IoT', subtitle: 'Intered' },
    ],
}) => {
    return (
        <section className="relative overflow-hidden py-16 sm:py-20">
            {/* subtle floating dots (decor) */}
            <span className="pointer-events-none absolute -top-6 left-[52%] h-5 w-5 rounded-full bg-black/90 dark:bg-white/90" />
            <span className="pointer-events-none absolute top-24 right-[18%] h-1.5 w-1.5 rounded-full bg-black/70 dark:bg-white/70" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Kicker */}
                <div className="mb-8 flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-black text-white text-xl dark:bg-white dark:text-black">
                        ♥
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        {kicker}
                    </h2>
                </div>

                <div className="grid grid-cols-1 items-start gap-y-12 lg:grid-cols-12 lg:gap-x-12">
                    {/* Left: headline + blurb */}
                    <div className="lg:col-span-6">
                        <h3 className="text-2xl sm:text-3xl font-black tracking-wide leading-tight">
                            {title}{' '}
                            <span className="block sm:inline text-black dark:text-white">
                                {highlight}
                            </span>
                        </h3>

                        <p className="mt-6 text-lg leading-8 text-neutral-700 dark:text-neutral-300">
                            {blurb}
                        </p>
                    </div>

                    {/* Right: years + caption + timeline */}
                    <div className="lg:col-span-6">
                        <div className="flex items-start gap-6">
                            {/* small divider + dot before the number (desktop only) */}
                            <div className="mt-6 hidden shrink-0 items-center gap-3 lg:flex">
                                <div className="h-px w-24 bg-black/60 dark:bg-white/60" />
                                {dot}
                            </div>

                            <div>
                                <div className="flex items-end gap-4">
                                    <span className="text-[96px] leading-none font-black sm:text-[120px] md:text-[140px]">
                                        {years}
                                    </span>
                                    <span className="mb-2 text-3xl font-extrabold">•</span>
                                </div>
                                <p className="mt-2 max-w-[22ch] text-xl font-medium uppercase tracking-wide">
                                    {yearsCaption}
                                </p>

                                {/* Timeline chips */}
                                <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
                                    {milestones.map((m, i) => (
                                        <React.Fragment key={m.title + i}>
                                            <div className="rounded-2xl bg-neutral-100 dark:bg-neutral-800 px-5 py-4">
                                                <div className="text-xl font-semibold">{m.title}</div>
                                                <div className="text-neutral-600 dark:text-neutral-300">
                                                    {m.subtitle}
                                                </div>
                                            </div>

                                            {/* arrow between chips (not after last) */}
                                            {i < milestones.length - 1 && (
                                                <span
                                                    aria-hidden
                                                    className="text-2xl sm:text-3xl text-neutral-500"
                                                >
                                                    →
                                                </span>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
