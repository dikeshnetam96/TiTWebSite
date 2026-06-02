import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BiCheck } from 'react-icons/bi';

const Info = () => {
    return (
            <div className="pt-16 pb-16 section-decor">
                <div className="pointer-events-none pattern-dot-grid" />
                <div className="pointer-events-none pattern-blob pattern-blob--right" />
                <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                {/** Image Content */}
                <div data-aos="fade-right" data-aos-anchor-placement="top-center">
                    <Image src="/image/technical.png" alt="Technical approach and capabilities" width={1000} height={1000} />
                </div>
                {/** Text Content */}
                <div data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay={150}>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-8 lg:leading-16">Technical Approach and Capabilities</h1>
                    <p className="mt-6  text-gray-700 dark:text-gray-300">
                        Our customer-first engineering approach helps teams build reliable, secure, and scalable digital products. We combine deep technical expertise with domain knowledge to deliver practical results.
                    </p>
                    <div className="mt-8 ">
                        <div className="flex items-center space-x-2 mb-4">
                            <BiCheck className="w-7 h-7 brand-text" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                End-to-end delivery from discovery to production support
                            </span>
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <BiCheck className="w-7 h-7 brand-text" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                Cloud-native architecture and modern DevOps practices
                            </span>
                        </div>
                        <div className="flex items-center space-x-2 mb-4">
                            <BiCheck className="w-7 h-7 brand-text" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                AI and data solutions aligned to measurable business goals
                            </span>
                        </div>
                    </div>
                    <div className="mt-8">
                        <Link href="/connect" className="inline-block px-10 py-3 rounded-lg text-white text-center cursor-pointer transition-all duration-300 btn-dark-section">
                            Book a consultation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Info
