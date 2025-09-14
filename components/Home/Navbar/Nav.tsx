// "use client";
// import ThemeToggler from '@/components/Helper/ThemeToggler';
// import { NavLinks } from '@/constant/constant';
// import Image from 'next/image';
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react';
// import { HiBars3BottomRight } from 'react-icons/hi2';
// import { LuNetwork } from 'react-icons/lu';

// type Props = {
//   openNav: () => void;
// };

// const Nav = ({ openNav }: Props) => {
//   const [navBg, setNavBg] = useState(false);

//   useEffect(() => {
//     const handler = () => {
//       if (window.scrollY >= 90) setNavBg(true)
//       if (window.scrollY < 90) setNavBg(false)
//     };

//     window.addEventListener("scroll", handler)

//     return () => {
//       window.removeEventListener("scroll", handler);
//     };
//   }, []);

//   return <div className={`transition-all ${navBg ? "bg-white dark:bg-gray-900 shadow-md" : "fixed"} duration-200 h-[12vh] z-[10000] fixed w-full`}>
//     <div className="flex items-center h-full justify-between w-[92%] mx-auto">
//       <div className="flex items-center">
//         <div className="flex items-center space-x-2">
//           {/* LOGO */}
//           <div className="w-40 h-40 bg-white-800 rounded-full flex items-center justify-center flex-col">
//             {/* <LuNetwork className="w-5 h-5 text-white dark:text-black"/> */}
//             <Image src="/image/titlogo.png"
//               alt="TIT Logo"
//               width={80}
//               height={80}
//               className="object-contain" />
//           </div>
//         </div>
//         {/* NAVLINKS */}
//         <div className="hidden lg:flex items-center space-x-10">
//           {NavLinks.map((link) => {
//             return <Link key={link.id} href={link.url} className='text-base hover:text-cyan-700 dark:hover:text-cyan-200 font-medium transition-all duration-200'>
//               <p>{link.Label}</p>
//             </Link>
//           })}
//         </div>
//       </div>
//       {/* BUTTONS*/}
//       <div className="flex items-center space-x-4">
//         {/* Login/Register Button */}
//         <button className="px-8 py-2.5 text-xs sm:text-sm rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-900 dark:hover:text-cyan-200 transition-all duration-300" > Login / Register</button>
//         <button className="px-8 py-2.5 text-sm hidden sm:block cursor-pointer rounded-lg bg-cyan-700 hover:bg-cyan-900 trasition-all duration 300 text-white">Job Post</button>
//         {/* Theme Toggle */}
//         <ThemeToggler />
//         {/** Burger Menu */}
//         <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden" />
//       </div>
//     </div>
//   </div>;
// };

// export default Nav;


"use client";
import ThemeToggler from '@/components/Helper/ThemeToggler';
import { NavLinks } from '@/constant/constant';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { useTheme } from 'next-themes';

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div
      className={`transition-all ${navBg ? 'bg-white dark:bg-gray-900 shadow-md' : 'fixed'
        } duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[92%] mx-auto">
        {/* Left section: Logo + Links */}
        <div className="flex items-center">
          {/* Logo */}
          <div className="w-36 h-auto flex items-center justify-center">
            {theme === 'dark' ? (
              <Image
                src="/image/titlogodark.png" // dark mode logo
                alt="TIT Logo Dark"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            ) : (
              <Image
                src="/image/titlogo.png" // light mode logo
                alt="TIT Logo Light"
                width={80}
                height={80}
                className="object-contain"
                priority
              />
            )}
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center space-x-10 ml-4">
            {NavLinks.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="text-base hover:text-cyan-700 dark:hover:text-cyan-200 font-medium transition-all duration-200"
              >
                {link.Label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right section: Buttons */}
        <div className="flex items-center space-x-4">
          {/* Login Button */}
          {/* <button className="px-8 py-2.5 text-xs sm:text-sm rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-900 dark:hover:text-cyan-200 transition-all duration-300">
            Login / Register
          </button> */}

          {/* Job Post */}
          <Link
            href="/connect"
            className="px-8 py-2.5 text-sm hidden sm:inline-flex items-center justify-center
             cursor-pointer rounded-lg bg-cyan-700 hover:bg-cyan-900
             transition-all duration-300 text-white"
          >
            Contact Us
          </Link>

          {/* Theme Switch */}
          <ThemeToggler />

          {/* Mobile Menu Icon */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black dark:text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
