'use client';
import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TopCompanyCard from './TopCompanyCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const CompanyData = [
    {
        id:1,
        image:"/image/c1.png",
        name:"udemy",
        location:"London, UK",
        position:"20",
    },
    {
        id:2,
        image:"/image/c2.png",
        name:"Stripe",
        location:"Kolkata, India",
        position:"20",
    },
    {
        id:3,
        image:"/image/c3.png",
        name:"Dropbox",
        location:"Lahor, Pakistan",
        position:"30",
    },
    {
        id:4,
        image:"/image/c4.png",
        name:"Figma",
        location:"Dhaka, Bangladesh",
        position:"40",
    }
]

const TopCompany = () => {
  return (
  <div className="pt-16 pb-16">
    <SectionHeading heading="Top Company Registered" subHeading="Some of the companies we've helped recruit excellent applicants over the years" />
    <div className="w-[80%] mx-auto mt-16">
        <Carousel
  showDots={false}
  responsive={responsive}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000} 
  >
  {CompanyData.map((data)=>{
    return <TopCompanyCard key={data.id} data={data} />
  })}
</Carousel>;
    </div>
  </div>
  );
};

export default TopCompany;