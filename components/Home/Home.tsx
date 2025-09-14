'use client';
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Category from './Navbar/Category/Category'
import Job from './Job/Job'
import TopCompany from './TopCompany/TopCompany'
import Info from './Info/Info'
import Review from './Review/Review'
import Footer from './Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Whoarewe from './Whoarewe/Whoarewe';
import OurProjects from './OurProjects/OurProjects';


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
      <Hero />
      <Category />
      <OurProjects />
      {/* <Job /> */}
      <Whoarewe />
      <Info />
      <Review />
      <TopCompany />
    </div>
  )
}

export default Home
