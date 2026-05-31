import React from 'react'
import Link from "next/link";

// /image/titlogodark.png
const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-200 dark:bg-gray-900">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 items-start">
        {/** 1st part */}
        <div className="xl:col-span-2">
          {/** Logo */}
          <div className="flex items-center space-x-2">
            {/* <div className="w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex items-center justify-center flex-col">
              <LuNetwork className="w-5 h-5 text-white dark:text-black" />
            </div> */}
            <h1 className="text-xl hidden sm:block md:text-2xl brand-text dark:text-white font-bold">TiT Pvt. Ltd.</h1>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">Building 14, DLF Phase 3, Cyber City, Gurgaon, Haryana 122022</p>
          {/** Call  */}
          <div className="mt-5">
            <h1 className="lg:text-xl text-base text-gray-700 dark:text-gray-300 font-medium">Call Us</h1>
            <p className="mt-1 text-gray-600 dark:text-gray-300 lg:text-lg text-base font-bold">+91 76928 08915</p>
          </div>
          {/** Address */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">New Delhi, India</p>
          <Link href="mailto:dikeshnetam96@gmail.com" className="text-sm text-gray-600 dark:text-gray-400 mt-2 block brand-link">
            dikeshnetam96@gmail.com
          </Link>
        </div>
        {/** 4th Part */}
        {/* <div className="space-y-6">
          <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">About</h1>
          <p className="footer_link">Job Pages</p>
          <p className="footer_link">Job Pages Alternatives</p>
          <p className="footer_link">Resume Page</p>
          <p className="footer_link">Blog</p>
          <p className="footer_link">Contact</p>
        </div> */}
        <div className="space-y-6">
          <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">Company</h1>

          <nav aria-label="Company links" className="flex flex-col gap-2">
            <Link href="/" className="footer_link block">Home</Link>
            <Link href="/employers" className="footer_link block">Employers</Link>
            <Link href="/crud" className="footer_link block">Careers</Link>
            <Link href="/blog" className="footer_link block">Blog</Link>
            <Link href="/connect" className="footer_link block">Contact Us</Link>
          </nav>
        </div>
      </div>
      <div className="pt-6 mt-10 border-t w-[90%] mx-auto border-gray-300 dark:border-gray-800">
        <p className="text-gray-500">Copyright © 2026 TiT Pvt. Ltd. | All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer


// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <div className="pt-16 pb-16 bg-gray-200 dark:bg-gray-900">
//       <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 items-start">
//         {/* 1st part */}
//         <div className="xl:col-span-2">
//           {/* Logo (circular, no border/ring) */}
//           <Link href="/" className="flex items-center gap-3">
//             <div className="h-10 w-10 rounded-full overflow-hidden">
//               {/* Light theme logo */}
//               <Image
//                 src="/image/titlogodark.png"
//                 alt="TiT logo"
//                 width={80}
//                 height={80}
//                 priority
//                 className="h-full w-full object-contain block dark:hidden"
//               />
//               {/* Dark theme logo */}
//               <Image
//                 src="/image/titlogodark.png"
//                 alt="TiT logo"
//                 width={80}
//                 height={80}
//                 priority
//                 className="h-full w-full object-contain hidden dark:block"
//               />
//             </div>

//             <h1 className="text-xl hidden sm:block md:text-2xl font-bold text-cyan-800 dark:text-white">
//               TiT
//             </h1>
//           </Link>

//           <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
//             Building 14, DLF Phase 3, Cyber City, Gurgaon, Haryana. Pin - 122022
//           </p>

//           {/* Call */}
//           <div className="mt-5">
//             <h1 className="lg:text-xl text-base text-gray-700 dark:text-gray-300 font-medium">
//               Call Us
//             </h1>
//             <p className="mt-1 text-gray-600 dark:text-gray-300 lg:text-lg text-base font-bold">
//               +91 76928 08915
//             </p>
//           </div>

//           {/* Address */}
//           <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">New Delhi</p>
//           <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">New Delhi, India</p>
//           <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">dikeshnetam96@gmail.com</p>
//         </div>

//         {/* 4th Part */}
//         <div className="space-y-6">
//           <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">About</h1>
//           <p className="footer_link">Job Pages</p>
//           <p className="footer_link">Job Pages Alternatives</p>
//           <p className="footer_link">Resume Page</p>
//           <p className="footer_link">Blog</p>
//           <p className="footer_link">Contact</p>
//         </div>
//       </div>

//       <div className="pt-6 mt-10 border-t w-[90%] mx-auto border-gray-300 dark:border-gray-800">
//         <p className="text-gray-500 dark:text-gray-400">
//           Copyright © 2025 TiT Pvt. Ltd. | All Rights Reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

