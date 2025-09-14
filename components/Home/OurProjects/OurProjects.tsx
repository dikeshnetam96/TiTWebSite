// 'use client';
// import React, { useEffect } from 'react';
// import SectionHeading from '@/components/Helper/SectionHeading';
// import { FiArrowUpRight } from 'react-icons/fi';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const services = [
//   {
//     title: 'Customer Relationship Management (CRM) System',
//     description:
//       'A comprehensive solution that helps businesses manage and analyze customer interactions and data throughout the customer lifecycle. Our CRM system streamlines sales pipelines, improves customer service, enhances communication, and ultimately drives customer retention and revenue growth. Features include lead tracking, automated follow-ups, contact segmentation, sales forecasting, and analytics.',
//   },
//   {
//     title: 'Enterprise Resource Planning (ERP) System',
//     description:
//       'Our ERP solution integrates core business processes—such as accounting, inventory, procurement, HR, and supply chain—into a single, centralized platform. It ensures data consistency, reduces manual effort, and boosts operational efficiency across departments. With customizable modules and real-time reporting, it enables smarter decision-making and smooth scaling as your organization grows.',
//   },
//   {
//     title: 'Data Analytics Platform',
//     description:
//       'We offer a robust data analytics platform that transforms raw data into actionable insights. Our platform supports real-time dashboards, predictive analytics, and seamless integration with business intelligence tools to support data-driven decision-making.',
//   }
// ];

// const OurProjects = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//     });
//   }, []);

//   return (
//     <div className="pt-16 pb-16">
//       <SectionHeading heading="Our Projects" subHeading="See the projects we’re working on" />

//       <section className="py-8 px-4">
//         <div className="max-w-7xl mx-auto space-y-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group flex flex-col md:flex-row md:justify-between md:items-start 
//              h-full w-full min-h-[280px] p-6 
//              bg-white dark:bg-gray-900 
//              rounded-lg shadow-md 
//              hover:shadow-xl dark:hover:shadow-blue-900 
//              transition-shadow duration-300 text-left 
//              hover:bg-gray-50 dark:hover:bg-gray-800 
//              border border-gray-200 dark:border-gray-800"
//               data-aos="fade-up"
//               data-aos-anchor-placement="top-center"
//               data-aos-delay="50">

//               <div className="md:w-4/5">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 dark:group-hover:text-white transition-colors duration-200 dark:text-white">
//                   {service.title}
//                 </h2>
//                 <p className="text-gray-700 text-[1.05rem] leading-relaxed  dark:text-gray-400">
//                   {service.description}
//                 </p>
//               </div>
//               {/* <div className="mt-6 md:mt-0 md:w-1/5 flex justify-end items-start">
//                 <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
//                   <FiArrowUpRight size={20} />
//                 </button>
//               </div> */}
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OurProjects;



'use client';

import React, { useEffect } from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import { FiArrowUpRight, FiUsers, FiCpu, FiBarChart2 } from 'react-icons/fi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: 'Customer Relationship Management (CRM) System',
    description:
      'A comprehensive solution that helps businesses manage and analyze customer interactions and data throughout the customer lifecycle. Our CRM system streamlines sales pipelines, improves customer service, enhances communication, and ultimately drives customer retention and revenue growth. Features include lead tracking, automated follow-ups, contact segmentation, sales forecasting, and analytics.',
    icon: FiUsers,
  },
  {
    title: 'Enterprise Resource Planning (ERP) System',
    description:
      'Our ERP solution integrates core business processes—such as accounting, inventory, procurement, HR, and supply chain—into a single, centralized platform. It ensures data consistency, reduces manual effort, and boosts operational efficiency across departments. With customizable modules and real-time reporting, it enables smarter decision-making and smooth scaling as your organization grows.',
    icon: FiCpu,
  },
  {
    title: 'Data Analytics Platform',
    description:
      'We offer a robust data analytics platform that transforms raw data into actionable insights. Our platform supports real-time dashboards, predictive analytics, and seamless integration with business intelligence tools to support data-driven decision-making.',
    icon: FiBarChart2,
  },
];

const OurProjects = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="pt-16 pb-16">
      <SectionHeading heading="Our Projects" subHeading="See the projects we’re working on" />

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          {services.map(({ title, description, icon: Icon }, index) => (
            <article
              key={index}
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-delay="50"
              className="
                group relative overflow-hidden rounded-2xl
                border border-gray-200 dark:border-gray-800
                bg-white dark:bg-gray-900
                shadow-sm transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-gray-1o0 dark:hover:bg-gray-800
                hover:border-cyan-500/60 dark:hover:border-cyan-700/60
                hover:shadow-lg hover:shadow-cyan-200/20
                dark:hover:shadow-cyan-900/40
                focus-within:ring-2 focus-within:ring-cyan-500/40
              "
            >
              <div className="p-6 md:p-8 flex items-start gap-6">
                {/* Icon badge */}
                <span
                  className="
                    shrink-0 grid place-items-center w-14 h-14 rounded-xl
                    bg-cyan-100 text-cyan-700
                    dark:bg-cyan-900/40 dark:text-cyan-300
                    ring-1 ring-transparent group-hover:ring-cyan-300/50 dark:group-hover:ring-cyan-600/40
                    transition-transform duration-300 group-hover:scale-105
                  "
                >
                  <Icon className="w-7 h-7" />
                </span>

                {/* Content */}
                <div className="flex-1">
                  <h3
                    className="
                      text-2xl md:text-3xl font-semibold tracking-tight
                      text-slate-900 dark:text-white
                      transition-colors
                      group-hover:text-cyan-700 dark:group-hover:text-cyan-300
                    "
                  >
                    {title}
                  </h3>

                  <p className="mt-3 text-[1.05rem] leading-relaxed text-gray-700 dark:text-gray-400">
                    {description}
                  </p>

                  <div className="mt-6">
                    <button
                      aria-label="Explore project"
                      className="
                        inline-flex items-center gap-2 rounded-lg
                        px-5 py-2.5 text-sm font-medium text-white
                        bg-cyan-700 hover:bg-cyan-600
                        dark:hover:bg-cyan-500
                        focus-visible:outline-none
                        focus-visible:ring-2 focus-visible:ring-cyan-500/60
                        transition-colors
                      "
                    >
                      Explore <FiArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurProjects;
