import React from 'react';
import { useLoaderData } from 'react-router-dom';
import JobCategory from '../JobCategory/JobCategory';
import Job from '../Job/Job';

const Home = () => {
    const { categories, jobs } = useLoaderData();
    console.log(categories);
    return (
        <div className=''>
            <section className='bg-linear-to-r from-[#7e8ffe15] to-[#9873ff14]'>
                <div className=' max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-6 items-center content-center pt-10 mb-16 '>
                    <div className=''>
                        <h1 className='text-7xl font-bold mb-7'>One Step <br /> Closer To Your <br /><span className='bg-linear-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text'>Dream Job</span></h1>
                        <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <button className='text-md px-6 py-3 text-white font-bold rounded-lg hover:bg-[#9873FF] bg-[#7E90FE] mt-7'>Get Started</button>
                    </div>
                    <div className=''>
                        <img className='' src="../../../images/user.png" alt="" />
                    </div>
                </div>
            </section>
            <section className='max-w-[1200px] mx-auto px-6'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-4xl font-bold mb-2'>Job Category List</h2>
                    <p className='text-sm'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid md:grid-cols-4 gap-6 mt-11 mb-32'>
                    {
                        categories.map(category => <JobCategory
                            key={category.id}
                            category={category}
                        ></JobCategory>)
                    }
                </div>
            </section>
            <section className='mb-10 max-w-[1200px] mx-auto px-6'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-4xl font-bold mb-2'>Featured Jobs</h2>
                    <p className='text-sm'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid md:grid-cols-2 gap-6 mt-10'>
                    {
                        jobs.map(job =>
                            <Job key={job.id}
                                job={job}
                            ></Job>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;