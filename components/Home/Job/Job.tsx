import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react'
import JobCard from './JobCard';

const jobs = [
    {
        id: 1,
        image: "/image/j1.png",
        title: "Software Engineer",
        location: "London, UK",
        jobType: "Full Time",
        urgency: "Urgent"
    },
    {
        id: 2,
        image: "/image/j2.png",
        title: "Recruiting Coordinator",
        location: "Manchester, UK",
        jobType: "Full Time",
        urgency: "Urgent"
    },
    {
        id: 3,
        image: "/image/j3.png",
        title: "Product Manager, Studio",
        location: "Birmingham, UK",
        jobType: "Contract",
        urgency: "Urgent"
    },
    {
        id: 4,
        image: "/image/j4.png",
        title: "Senior Product Designer",
        location: "Bristol, UK",
        jobType: "Full Time",
        urgency: "Urgent"
    },
    {
        id: 5,
        image: "/image/j5.png",
        title: "Product Manager, Risk",
        location: "Edinburgh, UK",
        jobType: "Contract",
        urgency: "Private"
    },
    {
        id: 6,
        image: "/image/j6.png",
        title: "Technical Architect",
        location: "Leeds, UK",
        jobType: "Full Time",
        urgency: "Private"
    },
    {
        id: 7,
        image: "/image/j7.png",
        title: "Web Developer",
        location: "Brighton, UK",
        jobType: "Part Time",
        urgency: "Urgent"
    },
    {
        id: 8,
        image: "/image/j8.png",
        title: "Senior Product Designer",
        location: "Glasgow, UK",
        jobType: "Contract",
        urgency: "Private"
    },
    {
        id: 9,
        image: "/image/j9.png",
        title: "Senior BI Analyst",
        location: "sheffield, UK",
        jobType: "Full Time",
        urgency: "Private"
    },
]

const Job = () => {
    return (<div className="pt-16 pb-16">
        <SectionHeading heading="Featured Job" subHeading="Know your worth and find the job that qualify your life" />
        <div className="w-[95%] sm:w-[80%] mt-16 mx-auto grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center">
            {jobs.map((job, index) => {
                return <div key={job.id} data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay={index * 50}>
                    <JobCard job={job} />
                </div>
            })}
        </div>
        <div className="mt-10 text-center">
            <button className="px-10 py-4 bg-cyan-700 text-white cursor-pointer rounded-lg hover:bg-cyan-800 transition-all duration-200 ">
                Load More Listing
            </button>
        </div>
    </div>)
};

export default Job
