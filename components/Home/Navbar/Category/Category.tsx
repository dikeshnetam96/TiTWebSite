// 'use client';

// import SectionHeading from '@/components/Helper/SectionHeading';
// import React from 'react';
// import { BsClipboard2DataFill } from 'react-icons/bs';
// import { AiOutlineProduct } from 'react-icons/ai';
// import { SiAlwaysdata, SiCircuitverse } from 'react-icons/si';
// import { FaLaptopCode } from 'react-icons/fa';
// import { HiOutlineRocketLaunch } from 'react-icons/hi2';
// import CategoryCard from './CategoryCard';

// const categoryData = [
//     {
//         id: 1,
//         categoryName: 'Data Engineering',
//         description:
//             'We provide sustainable data-driven solutions to help businesses gain a competitive edge.',
//         icon: <BsClipboard2DataFill className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />,
//     },
//     {
//         id: 2,
//         categoryName: 'Product Engineering',
//         description:
//             'We transform legacy applications into advanced AI applications to simplify your business operations.',
//         icon: <AiOutlineProduct className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />,
//     },
//     {
//         id: 3,
//         categoryName: 'Generative AI',
//         description:
//             'We create innovative AI-driven models that generate unique content to enhance engagement and streamline interactions.',
//         icon: <SiAlwaysdata className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />,
//     },
//     {
//         id: 4,
//         categoryName: 'Quality Assurance',
//         description:
//             'We deploy advanced automation to guarantee the highest quality and reliability in your products.',
//         icon: <FaLaptopCode className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />,
//     },
//     {
//         id: 5,
//         categoryName: 'Design Studio',
//         description:
//             'We deliver strategic, high-impact designs that drive user engagement and strengthen your brand.',
//         icon: <SiCircuitverse className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />,
//     },
//     {
//         id: 6,
//         categoryName: 'Data Accelerator Package',
//         description:
//             'We provide customized, high-performance data solutions that unlock insights and drive growth.',
//         icon: <HiOutlineRocketLaunch className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />,
//     },
// ];

// const Category = () => {
//     return (
//         <section className="pt-16 pb-16">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
//                 <SectionHeading
//                     heading="Our Services"
//                     subHeading="End-to-end, future-ready solutions in data & product engineering, cloud, and AI/ML."
//                 />

//                 <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
//                     {categoryData.map((category, idx) => (
//                         <div
//                             key={category.id}
//                             data-aos="fade-up"
//                             data-aos-anchor-placement="top-center"
//                             data-aos-delay={idx * 30}
//                             className="h-full"
//                         >
//                             <CategoryCard category={category} />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Category;

'use client';

import React from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import { BsClipboard2DataFill } from 'react-icons/bs';
import { AiOutlineProduct } from 'react-icons/ai';
import { SiAlwaysdata, SiCircuitverse } from 'react-icons/si';
import { FaLaptopCode } from 'react-icons/fa';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

/** Lightweight rich text:
 *  - [[...]]  -> extra-bold highlight
 *  - **...**  -> bold
 */
const RichText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
    const tokens = text.split(/(\[\[.*?]]|\*\*.*?\*\*)/g).filter(Boolean);
    return (
        <p className={className}>
            {tokens.map((t, i) => {
                if (t.startsWith('[[') && t.endsWith(']]')) {
                    const inner = t.slice(2, -2);
                    return (
                        <strong key={i} className="font-extrabold text-neutral-900 dark:text-neutral-100">
                            {inner}
                        </strong>
                    );
                }
                if (t.startsWith('**') && t.endsWith('**')) {
                    const inner = t.slice(2, -2);
                    return <strong key={i} className="font-semibold">{inner}</strong>;
                }
                return <span key={i}>{t}</span>;
            })}
        </p>
    );
};

type Item = {
    id: number;
    categoryName: string;
    description: string;
    icon: React.ReactNode;
};

const categoryData: Item[] = [
    {
        id: 1,
        categoryName: 'Data Engineering',
        description:
            'We provide [[sustainable data-driven solutions]] to help businesses gain a **competitive edge**.',
        icon: <BsClipboard2DataFill className="h-8 w-8 brand-text" />,
    },
    {
        id: 2,
        categoryName: 'Product Engineering',
        description:
            'We transform [[legacy applications]] into **advanced AI applications** to simplify your business operations.',
        icon: <AiOutlineProduct className="h-8 w-8 brand-text" />,
    },
    {
        id: 3,
        categoryName: 'Generative AI',
        description:
            'We create innovative [[AI-driven models]] that generate **unique content** to enhance engagement and streamline interactions.',
        icon: <SiAlwaysdata className="h-8 w-8 brand-text" />,
    },
    {
        id: 4,
        categoryName: 'Quality Assurance',
        description:
            'We deploy [[advanced automation]] to guarantee the **highest quality** and reliability in your products.',
        icon: <FaLaptopCode className="h-8 w-8 brand-text" />,
    },
    {
        id: 5,
        categoryName: 'Design Studio',
        description:
            'We deliver [[strategic, high-impact designs]] that drive **user engagement** and strengthen your brand.',
        icon: <SiCircuitverse className="h-8 w-8 brand-text" />,
    },
    {
        id: 6,
        categoryName: 'Data Accelerator Package',
        description:
            'We provide [[customized, high-performance data solutions]] that unlock **insights** and drive growth.',
        icon: <HiOutlineRocketLaunch className="h-8 w-8 brand-text" />,
    },
];

const Category = () => {
    return (
        <section className="py-20 lg:py-24">
            {/* Heading */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <SectionHeading
                    heading="Our Services"
                    subHeading="End-to-end, future-ready solutions in data & product engineering, cloud, and AI/ML."
                />
            </div>

            {/* Grid container */}
            <div className="mt-14">
                <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
                    <div
                        className="
              rounded-3xl overflow-hidden
              border border-neutral-200/70 dark:border-neutral-800
              grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0
              sm:[&>*]:border-l sm:[&>*]:border-neutral-200/60 dark:sm:[&>*]:border-neutral-800
            "
                    >
                        {categoryData.map((item, idx) => {
                            const alt =
                                idx % 2 === 0
                                    ? 'bg-white dark:bg-neutral-950'
                                    : 'bg-neutral-50/70 dark:bg-neutral-900/50';

                            return (
                                <article
                                    key={item.id}
                                    className={`
                    ${alt}
                    transition-all duration-300 will-change-transform
                    hover:shadow-xl hover:shadow-neutral-900/5 hover:-translate-y-0.5
                    dark:hover:shadow-black/20
                  `}
                                    data-aos="fade-up"
                                    data-aos-anchor-placement="top-center"
                                    data-aos-delay={idx * 40}
                                >
                                    <div className="mx-auto max-w-xl px-8 py-14 text-center">
                                        {/* Icon */}
                                        <div className="mx-auto mb-7 grid h-20 w-20 place-items-center rounded-full brand-icon-surface ring-1 ring-gray-200/80 dark:ring-gray-700/70">
                                            {item.icon}
                                        </div>

                                        {/* Title + accent bar */}
                                        <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                                            {item.categoryName}
                                        </h3>
                                        <div className="mx-auto mt-3 h-1.5 w-20 rounded-full bg-gradient-to-r from-[var(--brand-600)] to-[var(--brand-700)]" />

                                        {/* Description */}
                                        <RichText
                                            text={item.description}
                                            className="mx-auto mt-6 max-w-prose text-base md:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300"
                                        />
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Category;
