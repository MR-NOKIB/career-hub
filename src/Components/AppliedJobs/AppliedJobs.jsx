import React, { useEffect, useState } from 'react';
import { getAppliedJob } from '../../utilities/fakeDb';
import { useLoaderData } from 'react-router-dom';
import AppliedJobDetails from '../AppliedJobDetails/AppliedJobDetails';

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [appliedJobs, setAppliedJobs] = useState([]);
    useEffect(() => {
            fetch('/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    useEffect(() => {
        if (jobs.length > 0) {
          const storedJobs = getAppliedJob(); // Get applied job IDs
          let savedJobs = [];
    
          for (const id in storedJobs) {
            const foundJob = jobs.find((job) => job.id === parseInt(id)); // Find matching job
            if (foundJob) {
              savedJobs.push(foundJob);
            }
          }
          console.log(savedJobs)
          setAppliedJobs(savedJobs);
        }
      }, [jobs]);

    
    return (
        <div>
            <div className='bg-linear-to-r from-[#7e8ffe15] to-[#9873ff14] flex items-center content-center mx-auto'>
                <h2 className='text-4xl font-bold px-20 pb-30 pt-10 mx-auto'>Applied Jobs</h2>
            </div>
            <div>
                {
                    appliedJobs.map(job => <AppliedJobDetails
                    key={job.key}
                    job={job}
                    ></AppliedJobDetails>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;