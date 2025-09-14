import Image from 'next/image';
import React from 'react';
import { BiCheck } from 'react-icons/bi';

const WhoAreWe = () => {
  return (
    <div className="pt-16 pb-16 ">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/** Image Content */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Image src="/image/whoweare.png" alt="img" width={1000} height={1000} />
          {/* <Image src="/image/a.png" alt = "img" width={1000} height={1000} /> */}
        </div>
        {/** Text Content */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay={150}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-8 lg:leading-16">Who We Are?</h1>
          <p className="mt-6  text-gray-700 dark:text-gray-300">
            TiT is a global innovative solution provider in data engineering, product engineering, cloud technology, and Artificial Intelligence/Machine Learning (AI/ML). We manage the entire data lifecycle seamlessly, from acquisition to transformation and analysis.
          </p><p className="mt-6  text-gray-700 dark:text-gray-300">
            With Generative AI and Large Language Models as our key offerings, we stay ahead of the technology curve. Imagine a scenario where interacting with your data store is as easy as asking a question in plain English and getting a straightforward answer with the accompanying SQL query. This makes data interactions super simple and boosts your decision-making experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;



// import Image from 'next/image';
// import React from 'react'
// import { BiCheck } from 'react-icons/bi';

// const Info = () => {
//   return (
//     <div className="pt-16 pb-16 ">
//       <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//         {/** Image Content */}
//         <div data-aos="fade-right" data-aos-anchor-placement="top-center">
//             <Image src="/image/a.png" alt = "img" width={1000} height={1000} />
//         </div>
//         {/** Text Content */}
//         <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay={150}>
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-8 lg:leading-16">Technical Approach & Capabilities</h1>
//             <p className="mt-6  text-gray-700 dark:text-gray-300">
//                 Our technical expertise and customer-centric approach make us use the best solutions for your needs. Explore our core capabilities to access best-in-class technologies and industry expertise.
//             </p>
//         <div className="mt-8 ">
//             <div className="flex items-center space-x-2 mb-4">
//                 <BiCheck className="w-7 h-7 text-pink-600" />
//                 <span className="text-gray-700 dark:text-gray-300 font-medium">
//                     Bring to the table win-win servival
//                 </span>
//             </div>
//             <div className="flex items-center space-x-2 mb-4">
//                 <BiCheck className="w-7 h-7 text-pink-600" />
//                 <span className="text-gray-700 dark:text-gray-300 font-medium">
//                     Capitalize on low hanging fruit to identify
//                 </span>
//             </div>
//             <div className="flex items-center space-x-2 mb-4">
//                 <BiCheck className="w-7 h-7 text-pink-600" />
//                 <span className="text-gray-700 dark:text-gray-300 font-medium">
//                     But i must explain to you how all this
//                 </span>
//             </div>
//         </div>
//         <div className="mt-8">
//             <button className="px-10 py-3 bg-blue-800 rounded-lg text-white text-center cursor-pointer hover:bg-blue-950 transition-all duration-300 ">Post a Job</button>
//         </div>
//         </div>
//       </div>
//     </div>
//   )
// };

// export default Info
