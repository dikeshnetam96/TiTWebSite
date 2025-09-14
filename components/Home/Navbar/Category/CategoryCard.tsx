// 'use client';
// import React from 'react'
// import Tilt from 'react-parallax-tilt';
// type Props = {
//      category: {
//     id: number;
//     description: string;
//     categoryName: string;
//     icon: React.JSX.Element;
// };
// }

// const CategoryCard = ({ category }: Props) => {
//   return (
//     <div className="h-full w-full min-h-[280px] p-6 bg-white dark:bg-gray-900 rounded-lg 
//                     shadow-md hover:shadow-xl dark:hover:shadow-blue-900 
//                     transition-shadow duration-300 text-left 
//                     hover:bg-gray-50 dark:hover:bg-gray-800">

//       <div className="mb-4">{category.icon}</div>

//       <h3 className="text-xl font-bold text-gray-800 dark:text-white">
//         {category.categoryName}
//       </h3>

//       <p className="text-base text-gray-600 dark:text-gray-400 mt-2">
//         {category.description}
//       </p>
//     </div>
//   );
// };





// export default CategoryCard



import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

type Category = {
  id: number;
  categoryName: string;
  description: string;
  openPosition?: number;
  icon: React.ReactNode;
};

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  const { icon, categoryName, description } = category;

  return (
    <article
      className="group relative h-full rounded-2xl border border-slate-200 dark:border-slate-800
                 bg-white/90 dark:bg-slate-900/60 backdrop-blur-sm
                 p-6 shadow-sm transition-all duration-300
                 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Top accent line appears on hover */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-1 rounded-t-2xl
                      bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500
                      opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-xl bg-cyan-50 ring-1 ring-cyan-100
                        dark:bg-cyan-900/20 dark:ring-cyan-800 p-3">
          {/* icon zoom on card hover or icon hover */}
          <span
            className="inline-flex transform transition-transform duration-300 ease-out
                       group-hover:scale-110 hover:scale-110"
          >
            {icon}
          </span>
        </div>

        <div className="text-left">
          <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
            {categoryName}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
            {description}
          </p>

          <button
            type="button"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium
                       text-cyan-700 hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-200
                       transition-colors"
          >
            Explore
            <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CategoryCard;
