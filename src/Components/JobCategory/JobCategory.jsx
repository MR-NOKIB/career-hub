import React from 'react';

const JobCategory = ({category}) => {

    return (
        <div className='bg-[#7e8ffe12] rounded p-10'>
            <img className='h-[40px] w-[40px] mb-5' src={category.logo}alt="" />
            <h3 className='text-lg font-semibold mb-2'>{category.category_name}</h3>
            <p className='text-sm text-gray-400'>{category.availability}</p>
        </div>
    );
};

export default JobCategory;