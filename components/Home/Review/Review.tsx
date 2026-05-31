'use client';
import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Review = () => {
  return (
    <div className="pt-16 pb-16">
        <SectionHeading heading="Client Testimonials" subHeading="What our clients say about working with TiT" />
        <div className="w-[80%] mx-auto mt-16">
            <Carousel
              showDots={false}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000} 
            > 
                <ReviewCard image="/image/u1.png" title="Reliable Delivery" username="Jessica D." userRole="Product Manager" quote="The team translated our requirements into a production-ready platform with clear communication and on-time delivery." />
                <ReviewCard image="/image/u2.png" title="Strong Technical Depth" username="Jason M." userRole="Engineering Lead" quote="Their cloud and data engineering expertise helped us improve system performance while reducing operational overhead." />
                <ReviewCard image="/image/u3.png" title="Great Collaboration" username="Jenny R." userRole="Operations Director" quote="From planning to release, TiT stayed proactive and accountable. We saw measurable impact within the first quarter." />
            </Carousel>
        </div>
    </div>
  );
}

export default Review
