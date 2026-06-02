// 'use client';

// import React, { useEffect } from 'react';
// import SectionHeading from '@/components/Helper/SectionHeading';
// import { FiArrowUpRight, FiUsers, FiCpu, FiBarChart2 } from 'react-icons/fi';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const services = [
//   {
//     title: 'Customer Relationship Management (CRM) System',
//     description:
//       'A comprehensive solution that helps businesses manage and analyze customer interactions and data throughout the customer lifecycle. Our CRM system streamlines sales pipelines, improves customer service, enhances communication, and ultimately drives customer retention and revenue growth. Features include lead tracking, automated follow-ups, contact segmentation, sales forecasting, and analytics.',
//     icon: FiUsers,
//   },
//   {
//     title: 'Enterprise Resource Planning (ERP) System',
//     description:
//       'Our ERP solution integrates core business processes—such as accounting, inventory, procurement, HR, and supply chain—into a single, centralized platform. It ensures data consistency, reduces manual effort, and boosts operational efficiency across departments. With customizable modules and real-time reporting, it enables smarter decision-making and smooth scaling as your organization grows.',
//     icon: FiCpu,
//   },
//   {
//     title: 'Data Analytics Platform',
//     description:
//       'We offer a robust data analytics platform that transforms raw data into actionable insights. Our platform supports real-time dashboards, predictive analytics, and seamless integration with business intelligence tools to support data-driven decision-making.',
//     icon: FiBarChart2,
//   },
// ];

// const OurProjects = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <div className="pt-16 pb-16">
//       <SectionHeading heading="Our Projects" subHeading="See the projects we’re working on" />

//       <section className="py-8 px-4">
//         <div className="max-w-7xl mx-auto space-y-8">
//           {services.map(({ title, description, icon: Icon }, index) => (
//             <article
//               key={index}
//               data-aos="fade-up"
//               data-aos-anchor-placement="top-center"
//               data-aos-delay="50"
//               className="
//                 group relative overflow-hidden rounded-2xl
//                 border border-gray-200 dark:border-gray-800
//                 bg-white dark:bg-gray-900
//                 shadow-sm transition-all duration-300
//                 hover:-translate-y-0.5
//                 hover:bg-gray-1o0 dark:hover:bg-gray-800
//                 hover:border-cyan-500/60 dark:hover:border-cyan-700/60
//                 hover:shadow-lg hover:shadow-cyan-200/20
//                 dark:hover:shadow-cyan-900/40
//                 focus-within:ring-2 focus-within:ring-cyan-500/40
//               "
//             >
//               <div className="p-6 md:p-8 flex items-start gap-6">
//                 {/* Icon badge */}
//                 <span
//                   className="
//                     shrink-0 grid place-items-center w-14 h-14 rounded-xl
//                     bg-cyan-100 text-cyan-700
//                     dark:bg-cyan-900/40 dark:text-cyan-300
//                     ring-1 ring-transparent group-hover:ring-cyan-300/50 dark:group-hover:ring-cyan-600/40
//                     transition-transform duration-300 group-hover:scale-105
//                   "
//                 >
//                   <Icon className="w-7 h-7" />
//                 </span>

//                 {/* Content */}
//                 <div className="flex-1">
//                   <h3
//                     className="
//                       text-2xl md:text-3xl font-semibold tracking-tight
//                       text-slate-900 dark:text-white
//                       transition-colors
//                       group-hover:text-cyan-700 dark:group-hover:text-cyan-300
//                     "
//                   >
//                     {title}
//                   </h3>

//                   <p className="mt-3 text-[1.05rem] leading-relaxed text-gray-700 dark:text-gray-400">
//                     {description}
//                   </p>

//                   <div className="mt-6">
//                     <button
//                       aria-label="Explore project"
//                       className="
//                         inline-flex items-center gap-2 rounded-lg
//                         px-5 py-2.5 text-sm font-medium text-white
//                         bg-cyan-700 hover:bg-cyan-600
//                         dark:hover:bg-cyan-500
//                         focus-visible:outline-none
//                         focus-visible:ring-2 focus-visible:ring-cyan-500/60
//                         transition-colors
//                       "
//                     >
//                       Explore <FiArrowUpRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OurProjects;




'use client';

import React, { useEffect, useRef } from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import { FiArrowUpRight, FiUsers, FiCpu, FiBarChart2 } from 'react-icons/fi';

type Item = {
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const services: Item[] = [
  {
    title: 'Customer Relationship Management (CRM) System',
    description:
      'A comprehensive solution that helps businesses manage and analyze customer interactions and data throughout the customer lifecycle. Our CRM system streamlines sales pipelines, improves customer service, enhances communication, and ultimately drives customer retention and revenue growth. Features include lead tracking, automated follow-ups, contact segmentation, sales forecasting, and analytics.',
    icon: FiUsers,
  },
  {
    title: 'Enterprise Resource Planning (ERP) System',
    description:
      'Our ERP integrates accounting, inventory, procurement, HR, and supply chain into one platform. It reduces manual work, ensures data consistency, and enables faster, smarter decisions with real-time reporting and modular scaling.',
    icon: FiCpu,
  },
  {
    title: 'Data Analytics Platform',
    description:
      'Turn raw data into action with real-time dashboards, predictive analytics, and BI integrations. Low-latency pipelines power decisions across ops, product, and growth.',
    icon: FiBarChart2,
  },
];

const OurProjects: React.FC = () => {
  const stageRef = useRef<HTMLElement>(null);

  // Lightweight reveal-on-scroll (no AOS)
  useEffect(() => {
    const nodes = Array.from(
      (stageRef.current ?? document).querySelectorAll<HTMLElement>('[data-reveal]')
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute('data-visible', 'true');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    nodes.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={stageRef}
      className="relative overflow-hidden bg-black text-white py-16 lg:py-20"
    >
      {/* Animated background: soft grid + beams + grain */}
      <div className="pointer-events-none absolute inset-0">
        {/* dim grid */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            background:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,.07) 1px, transparent 1px)',
            backgroundSize: '22px 22px',
            mask: 'radial-gradient(80% 60% at 50% 20%, #000 30%, transparent 100%)',
            WebkitMask: 'radial-gradient(80% 60% at 50% 20%, #000 30%, transparent 100%)',
            filter: 'blur(.2px)',
          }}
        />
        {/* gentle moving beams */}
        <div
          className="absolute inset-0 animate-[floaty_18s_ease-in-out_infinite_alternate]"
          style={{
            background:
              'radial-gradient(40% 20% at 80% -10%, rgba(75, 139, 202, .2), transparent 60%), radial-gradient(50% 25% at 10% 0%, rgba(37, 99, 162, .16), transparent 60%), radial-gradient(30% 18% at 50% 110%, rgba(30, 58, 95, .2), transparent 60%)',
          }}
        />
        {/* film grain */}
        <div
          className="absolute inset-0 opacity-[.06] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.25'/></svg>\")",
          }}
        />
      </div>

      {/* Heading block (keeps your component, forces light text) */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* <span
          data-reveal
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wider backdrop-blur border border-white/10 opacity-0 translate-y-4"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
          Our Projects */}
        {/* </span> */}

        <div className="text-white">
          <div className="text-white">
            <SectionHeading
              heading="Results-driven builds for modern teams"
              subHeading="A quick look at flagship initiatives from TIT—tailored platforms that scale, delight, and perform."
            />
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div className="relative z-10 mx-auto mt-10 max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {services.map(({ title, description, icon: Icon }, i) => {
            const glow =
              i === 0
                ? 'from-[#4b8bca]/30'
                : i === 1
                  ? 'from-[#2563a2]/28'
                  : 'from-[#1e3a5f]/32';

            return (
              <article
                key={title}
                data-reveal
                className="col-span-12 md:col-span-6 lg:col-span-4 relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#0f1014] to-[#0b0c10] shadow-[0_10px_30px_rgba(0,0,0,.45)] transition-all duration-300 opacity-0 translate-y-4 hover:-translate-y-1 hover:border-white/20"
              >
                {/* top glow accent */}
                <div
                  className={`pointer-events-none absolute -inset-x-10 -top-20 h-40 blur-2xl bg-gradient-to-r ${glow} to-transparent`}
                />
                <div className="relative p-6 md:p-7 flex items-start gap-5">
                  {/* Icon badge */}
                  <span className="shrink-0 grid place-items-center w-14 h-14 rounded-xl bg-white/10 border border-white/10 ring-1 ring-transparent transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-6 w-6 text-white/90" />
                  </span>

                  {/* Copy */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
                    <p className="mt-3 text-[0.98rem] leading-relaxed text-white/70">{description}</p>

                    <div className="mt-5">
                      <button
                        aria-label={`Explore ${title}`}
                        className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium btn-dark-section transition-colors"
                      >
                        Explore <FiArrowUpRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* keyframes + reveal helper */}
      <style jsx global>{`
        @keyframes floaty {
          0% { transform: translateY(0); }
          100% { transform: translateY(-18px); }
        }
        [data-reveal] {
          transition: opacity .6s ease, transform .6s ease;
        }
        [data-reveal][data-visible='true'] {
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style>
    </section>
  );
};

export default OurProjects;
