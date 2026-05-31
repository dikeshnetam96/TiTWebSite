'use client';
import React, { useEffect } from 'react'
import Category from './Navbar/Category/Category'
import TopCompany from './TopCompany/TopCompany'
import Info from './Info/Info'
import Review from './Review/Review'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Whoarewe from './Whoarewe/Whoarewe';
import OurProjects from './OurProjects/OurProjects';
import Experience from './Experience/Experience';
import TITHero from './Hero/TiTHero';


const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom'

      });
    };

    initAOS();
  }, []);

  return (
    <div className="overflow-hidden" >
      <TITHero />
      {/* <Hero /> */}
      <Category />
      <OurProjects />
      <Experience />
      {/* <Job /> */}
      <Whoarewe />
      <Info />
      <Review />
      <TopCompany />
      {/* <ScrollColorToggle /> */}
    </div>
  )
}

export default Home


// 'use client';

// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// import Hero from './Hero/Hero';
// import Category from './Navbar/Category/Category';
// import Job from './Job/Job';
// import TopCompany from './TopCompany/TopCompany';
// import Info from './Info/Info';
// import Review from './Review/Review';
// import Footer from './Footer/Footer';
// import Whoarewe from './Whoarewe/Whoarewe';
// import OurProjects from './OurProjects/OurProjects';

// import ScrollColorToggle from '../ScrollColorToggle/ScrollColorToggle';

// // NEW: wrapper that keeps theme black until the top of the last section hits viewport top
// import ScrollThemeUntilLastTop from '../ScrollThemeUntilLastTop';

// const Home = () => {
//   useEffect(() => {
//     const initAOS = async () => {
//       await import('aos');
//       AOS.init({
//         duration: 1000,
//         easing: 'ease',
//         once: true,
//         anchorPlacement: 'top-bottom',
//       });
//     };
//     initAOS();
//   }, []);

//   return (
//     // changed from overflow-hidden (blocks scrolling) to overflow-x-hidden (prevents sideways scroll only)
//     <ScrollThemeUntilLastTop /* uses default sentinel '#last-top' */>
//       <div className="overflow-x-hidden">
//         <Hero />
//         <Category />
//         <OurProjects />
//         {/* <Job /> */}
//         <Whoarewe />
//         <Info />
//         <Review />
//         <TopCompany />

//         {/* LAST SECTION: put the sentinel as the VERY FIRST child */}
//         <section id="last-section">
//           <div id="last-top" aria-hidden="true" className="h-0 w-0" />
//           <ScrollColorToggle />
//         </section>

//         {/* If you want a footer, keep it OUTSIDE last-section so it shows after theme flips */}
//         {/* <Footer /> */}
//       </div>
//     </ScrollThemeUntilLastTop>
//   );
// };

// export default Home;
