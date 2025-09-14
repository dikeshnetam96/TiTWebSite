// import SectionHeading from '@/components/Helper/SectionHeading';
// import React from 'react'
// import { FaFontAwesome, FaFontAwesomeAlt, FaFontAwesomeFlag, FaFontAwesomeLogoFull, FaLaptopCode } from 'react-icons/fa';
// import { GiTakeMyMoney } from 'react-icons/gi';
// import { IoMegaphoneOutline } from 'react-icons/io5';
// import { LiaCarSideSolid } from 'react-icons/lia';
// import { LuRocket } from 'react-icons/lu';
// import { MdDataThresholding, MdOutlineMedicalServices } from 'react-icons/md';
// import { PiBinaryLight, PiGenderNonbinaryDuotone, PiPaintBrushDuotone } from 'react-icons/pi';
// import { RiCustomerService2Fill, RiCustomerServiceFill } from 'react-icons/ri';
// import CategoryCard from './CategoryCard';
// import { FaSquareFontAwesomeStroke } from 'react-icons/fa6';
// import { BsClipboard2DataFill } from 'react-icons/bs';
// import { AiOutlineProduct } from 'react-icons/ai';
// import { SiAlwaysdata, SiCircuitverse } from 'react-icons/si';
// import { HiOutlineRocketLaunch } from 'react-icons/hi2';

// const categoryData = [
//     {
//         id: 1,
//         categoryName: "Data Engineering",
//         description: "We provide sustainable data-driven solutions to help businesses gain a competitive edge.",
//         openPosition: 2,
//         icon: <BsClipboard2DataFill className="w-10 h-10 text-blue-700 dark:text-white" />

//     },
//     {
//         id: 2,
//         categoryName: "Product Engineering",
//         description: "We transform legacy applications into advanced AI Applications to simplify your business operations.",
//         openPosition: 86,
//         icon: <AiOutlineProduct className="w-10 h-10 text-blue-700 dark:text-white" />

//     },
//     {
//         id: 3,
//         categoryName: "Generative AI",
//         description: "We create innovative AI-driven models that generate unique content to enhance customer engagement and streamline your business interactions.",
//         openPosition: 43,
//         icon: <SiAlwaysdata className="w-10 h-10 text-blue-700 dark:text-white" />

//     },
//     {
//         id: 4,
//         categoryName: "Quality Assurance",
//         description: "We deploy advanced automation to guarantee the highest quality and reliability in your products.",
//         openPosition: 12,
//         icon: <FaLaptopCode className="w-10 h-10 text-blue-700 dark:text-white" />
//     },
//     {
//         id: 5,
//         categoryName: "Design Studio",
//         description: "We deliver strategic, high-impact designs that drive user engagement, strengthen brand presence, and accelerate business outcomes.",
//         openPosition: 2,
//         icon: <SiCircuitverse className="w-10 h-10 text-blue-700 dark:text-white" />
//     },
//     {
//         id: 6,
//         categoryName: "Data Accelerator Package",
//         description: "We provide customized, high-performance data solutions that unlock actionable insights and drive business growth.",
//         openPosition: 2,
//         icon: <HiOutlineRocketLaunch className="w-10 h-10 text-blue-700 dark:text-white transform transition-transform duration-300 ease-out hover:scale-110" />
//     }
// ]

// const Category = () => {
//     return <div className="pt-16 pb-16 text-center">
//         <SectionHeading heading="Our Services" subHeading="We offer end-to-end future-ready solutions in data engineering, product engineering, cloud technology, and Artificial Intelligence/Machine Learning (AI/ML), with a specialized focus on data science. Each of our service verticals addresses a specific need and offers customized solutions to enhance efficiency, productivity, flexibility, and competitive edge." />
//         <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl: grid-cols-4 gap-6">
//             {categoryData.map((Category, index) => {
//                 return <div key={Category.id} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay={index * 50}>
//                     <CategoryCard category={Category} />
//                 </div>;
//             })}
//         </div>
//     </div>;
// };




'use client';

import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import { BsClipboard2DataFill } from 'react-icons/bs';
import { AiOutlineProduct } from 'react-icons/ai';
import { SiAlwaysdata, SiCircuitverse } from 'react-icons/si';
import { FaLaptopCode } from 'react-icons/fa';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import CategoryCard from './CategoryCard';

const categoryData = [
    {
        id: 1,
        categoryName: 'Data Engineering',
        description:
            'We provide sustainable data-driven solutions to help businesses gain a competitive edge.',
        icon: <BsClipboard2DataFill className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />,
    },
    {
        id: 2,
        categoryName: 'Product Engineering',
        description:
            'We transform legacy applications into advanced AI applications to simplify your business operations.',
        icon: <AiOutlineProduct className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />,
    },
    {
        id: 3,
        categoryName: 'Generative AI',
        description:
            'We create innovative AI-driven models that generate unique content to enhance engagement and streamline interactions.',
        icon: <SiAlwaysdata className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />,
    },
    {
        id: 4,
        categoryName: 'Quality Assurance',
        description:
            'We deploy advanced automation to guarantee the highest quality and reliability in your products.',
        icon: <FaLaptopCode className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />,
    },
    {
        id: 5,
        categoryName: 'Design Studio',
        description:
            'We deliver strategic, high-impact designs that drive user engagement and strengthen your brand.',
        icon: <SiCircuitverse className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />,
    },
    {
        id: 6,
        categoryName: 'Data Accelerator Package',
        description:
            'We provide customized, high-performance data solutions that unlock insights and drive growth.',
        icon: <HiOutlineRocketLaunch className="h-7 w-7 text-cyan-700 dark:text-cyan-300" />,
    },
];

const Category = () => {
    return (
        <section className="pt-16 pb-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <SectionHeading
                    heading="Our Services"
                    subHeading="End-to-end, future-ready solutions in data & product engineering, cloud, and AI/ML."
                />

                <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {categoryData.map((category, idx) => (
                        <div
                            key={category.id}
                            data-aos="fade-up"
                            data-aos-anchor-placement="top-center"
                            data-aos-delay={idx * 60}
                            className="h-full"
                        >
                            <CategoryCard category={category} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Category;
