import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import { Link } from 'react-router-dom';

const Header = ({ to, scrollToFeaturedJobs }) => {
    return (
        <div className='bg-linear-to-r from-[#7e8ffe15] to-[#9873ff14]'>
            <div className='flex justify-between items-center max-w-[1200px] mx-auto px-6 py-10'>
                <Link className="h-[44px] w-[120px] flex items-center" to="/">
                    <img className='fill-current' src="../../../logo/CareerHub.png" alt="" />
                </Link>

                <div className='flex gap-3 font-medium'>
                    <ActiveLink className="" to="/statistics">
                        <span className="hover:text-[#7E90FE] font-bold px-3 py-2">Statistics</span>
                    </ActiveLink>
                    <ActiveLink className="" to="/applied-jobs">
                        <span className="hover:text-[#7E90FE] font-bold px-3 py-2">Applied Jobs</span>
                    </ActiveLink>
                    <ActiveLink className="" to="/blog">
                        <span className="hover:text-[#7E90FE] font-bold px-3 py-2">Blog</span>
                    </ActiveLink>
                </div>

                <Link className="mr-10">
                    <button onClick={scrollToFeaturedJobs} className='text-md px-6 py-3 text-white font-bold rounded-lg hover:bg-[#9873FF] bg-[#7E90FE]'>Start Applying</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;