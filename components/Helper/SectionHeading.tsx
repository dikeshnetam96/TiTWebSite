import React from 'react';

type Props = {
  heading: string;
  subHeading: string;
};

const SectionHeading = ({ heading, subHeading }: Props) => {
  return (
    <div
      className="w-[90%] max-w-4xl mx-auto text-center"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-delay="100" // Optional: tweak or remove
    >
      <h1 className="text-3xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 dark:text-white tracking-tight leading-tight">
        {heading}
      </h1>
      <p className="mt-4 text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
        {subHeading}
      </p>
    </div>
  );
};

export default SectionHeading;
