import React from 'react';
import { Link } from 'react-router-dom';

const AppliedJobDetails = ({ job }) => {
    const { logo, company_name, remote_or_onsite, job_type, job_title, location, salary, id } = job;
    return (
        <div className='max-w-[1200px] mx-auto px-6 mt-24'>
            <div className='border border-gray-300 rounded-lg p-10 mb-10 md:flex items-center justify-between'>
                <div className='md:flex items-center justify-between gap-6'>
                    <div className=' bg-gray-300 h-[240px]  w-[240px] md:flex md:flex-col flex flex-row content-center items-center justify-center rounded-lg'>
                        <img className='object-contain w-[150px] h' src={logo} alt="" />
                    </div>
                    <div>
                        <h6 className='text-lg font-bold'>{job_title}</h6>
                        <p className='text-gray-500 mb-4 '>{company_name}</p>
                        <div className=''>
                            <span className='px-4 py-2 border-2 border-[#7E90FE] rounded text-[#7E90FE] font-semibold mr-2'>{remote_or_onsite}</span>
                            <span className='px-4 py-2 border-2 border-[#7E90FE] rounded text-[#7E90FE] font-semibold'>{job_type}</span>
                        </div>
                        <div className='md:flex mt-7 gap-6'>
                            <span className='flex items-center contain-content gap-1'>
                                <img className='h-[16px] w-[16px]' src="../../../icons/location2.png" alt="" />
                                <p className='text-lg'> {location}</p>
                            </span>
                            <span className='flex items-center contain-content gap-1'>
                                <img className='h-[16px] w-[16px]' src="../../../icons/money.png" alt="" />
                                <p className='text-lg'>Salary: ${salary}</p>
                            </span>
                        </div>
                    </div>
                </div>
                <Link to={`/job/${id}`}>
                    <button className='text-md px-6 py-3 text-white font-bold rounded-lg hover:bg-[#9873FF] bg-[#7E90FE] mt-7'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AppliedJobDetails;