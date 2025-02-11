import React, { useContext } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { JobContext } from '../Job/Job';
import { addToDb } from '../../utilities/fakeDb';

const JobDetails = () => {
    const { jobs } = useLoaderData();
    const { id } = useParams();
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, location, contact_information, company_name } = jobs.find(job => job.id === parseInt(id));

    const handleAddJobToDb = (id) => {
        addToDb(id)
    }

    return (
        <div className='mb-24'>
            <section>
                <div className='bg-linear-to-r from-[#7e8ffe15] to-[#9873ff14] flex items-center content-center mx-auto'>
                    <h2 className='text-4xl font-bold px-20 pb-30 pt-10 mx-auto'>Job Details</h2>
                </div>
            </section>
            <section className='grid grid-cols-[2fr_1fr] gap-4 max-w-[1200px] mx-auto px-6 mt-24'>
                <div className='flex flex-col gap-10'>
                    <p className='font-bold '>Job Description: <span className='font-normal text-gray-700'>{job_description}</span></p>
                    <p className='font-bold '>Job Responsibility:<span className='font-normal text-gray-700 '>{job_responsibility}</span></p>
                    <span>
                        <p className='font-bold '>Educational Requirements: </p> <p className='text-gray-700'>{educational_requirements}</p>
                    </span>
                    <span>
                        <p className='font-bold '>Experiences: </p><p className='text-gray-700'>{experiences}</p>
                    </span>
                </div>
                <div>
                    <div className='bg-linear-to-r from-[#7e8ffe18] to-[#9873ff17] rounded-lg p-10 mb-4 flex flex-col gap-4'>
                        <div>
                            <div>
                                <h5 className='font-bold text-lg'>Job Details</h5>
                                <hr className='border-b text-blue-100 my-5' />
                            </div>
                            <div className='gap-6'>
                                <span className='flex items-center contain-center gap-1'>
                                    <img className='h-[16px] w-[16px]' src="../../../icons/money.png" alt="" />
                                    <p className='text-lg'>Salary: <span className='font-normal'>${salary}</span></p>
                                </span>
                                <span className='flex items-center contain-content gap-1'>
                                    <img className='h-[16px] w-[16px]' src="../../../icons/calendar.png" alt="" />
                                    <p className='font-semibold'>Job Title: <span className='font-normal'>{job_title}</span></p>
                                </span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h5 className='font-bold text-lg'>Contact Information</h5>
                                <hr className='border-b text-blue-100 my-5' />
                            </div>
                            <div>
                                <span className='flex items-center contain-content gap-1'>
                                    <img className='h-[16px] w-[16px]' src="../../../icons/phone.png" alt="" />
                                    <p className='font-semibold '>Phone: <span className='font-normal'>{contact_information.phone}</span></p>
                                </span>
                                <span className='flex items-center contain-content gap-1'>
                                    <img className='h-[16px] w-[16px]' src="../../../icons/email.png" alt="" />
                                    <p className='font-semibold'>Email: <span className='font-normal'>{contact_information.email}</span></p>
                                </span>
                                <span className='flex items-center contain-content gap-1'>
                                    <img className='h-[16px] w-[16px]' src="../../../icons/location2.png" alt="" />
                                    <p className='font-semibold'>Address: <span className='font-normal'>{contact_information.address}</span></p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => handleAddJobToDb(id)} className='w-full text-md px-6 py-3 text-white font-semibold rounded-lg hover:bg-[#9873FF] bg-[#7E90FE]'>Apply Now</button>
                </div>
            </section>
        </div>
    );
};

export default JobDetails;