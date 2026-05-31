// import React from "react";
// import { FiArrowUpRight } from "react-icons/fi";

// type Category = {
//   id: number;
//   categoryName: string;
//   description: string;
//   openPosition?: number;
//   icon: React.ReactNode;
// };

// const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
//   const { icon, categoryName, description } = category;

//   return (
//     <article
//       className="group relative h-full rounded-2xl border border-slate-200 dark:border-slate-800
//                  bg-white/90 dark:bg-slate-900/60 backdrop-blur-sm
//                  p-6 shadow-sm transition-all duration-300
//                  hover:-translate-y-1 hover:shadow-lg"
//     >
//       {/* Top accent line appears on hover */}
//       <div className="pointer-events-none absolute inset-x-0 -top-px h-1 rounded-t-2xl
//                       bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500
//                       opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//       <div className="flex items-start gap-4">
//         <div className="shrink-0 rounded-xl bg-cyan-50 ring-1 ring-cyan-100
//                         dark:bg-cyan-900/20 dark:ring-cyan-800 p-3">
//           {/* icon zoom on card hover or icon hover */}
//           <span
//             className="inline-flex transform transition-transform duration-300 ease-out
//                        group-hover:scale-110 hover:scale-110"
//           >
//             {icon}
//           </span>
//         </div>

//         <div className="text-left">
//           <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
//             {categoryName}
//           </h3>
//           <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
//             {description}
//           </p>

//           <button
//             type="button"
//             className="mt-4 inline-flex items-center gap-2 text-sm font-medium
//                        text-cyan-700 hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-200
//                        transition-colors"
//           >
//             Explore
//             <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
//           </button>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default CategoryCard;


'use client';

import React from 'react';

type Category = {
  id: number;
  categoryName: string;
  description: string;
  icon: React.ReactNode;
};

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <article
      className="
        group relative h-full
        bg-transparent
        transition-colors
        hover:bg-white hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]
        dark:hover:bg-neutral-900/60
      "
    >
      <div className="mx-auto max-w-xl px-6 py-12 text-center">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-full bg-cyan-50 dark:bg-cyan-900/20">
          {category.icon}
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {category.categoryName}
        </h3>

        <p className="mx-auto mt-4 max-w-prose text-neutral-700 dark:text-neutral-300">
          {category.description}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 text-cyan-700 dark:text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-sm font-medium">Learn more</span>
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </article>
  );
};

export default CategoryCard;
