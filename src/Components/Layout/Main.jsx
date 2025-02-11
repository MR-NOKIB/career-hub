import React, { useRef } from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    const featuredJobsRef = useRef(null);

    const scrollToFeaturedJobs = () => {
        if (featuredJobsRef.current) {
            featuredJobsRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div>
            <Header scrollToFeaturedJobs={scrollToFeaturedJobs}></Header>
            <Outlet context={{ featuredJobsRef }} ></Outlet>
        </div>
    );
};

export default Main;