import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const Statistics = () => {
    const assignments = [
        { name: "Assignment 1", marks: 50 },
        { name: "Assignment 2", marks: 52 },
        { name: "Assignment 3", marks: 54 },
        { name: "Assignment 4", marks: 56 },
        { name: "Assignment 5", marks: 58 },
        { name: "Assignment 6", marks: 59 },
        { name: "Assignment 7", marks: 60 },
        { name: "Assignment 8", marks: 55 }
    ];

    const totalMarks = assignments.reduce((sum, assignment) => sum + assignment.marks, 0);

    // Calculate the average
    const averageMarks = totalMarks / assignments.length;

    return (
        <div>
            <div className='bg-linear-to-r from-[#7e8ffe15] to-[#9873ff14] flex items-center content-center mx-auto'>
                <h2 className='text-4xl font-bold px-20 pb-30 pt-10 mx-auto'>Statistics</h2>
            </div>
            <div className='max-w-[1200px] mx-auto px-6 mb-24 mt-24 md:flex items-center gap-6 justify-center'>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="marks"
                        data={assignments}
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        fill="#8884d8"
                        label
                    >
                    </Pie>
                    <Tooltip></Tooltip>
                </PieChart>
                <div className='border-2 border-blue-200 p-20 rounded-md'>
                    <h6 className='font-bold'>Assignments Marks Analysis</h6>
                    <p>Assignments Running: <span className='font-semibold'>{assignments.length}</span></p>
                    <p>Assignments Completed: <span className='font-semibold'>8</span></p>
                    <p>Average Marks: <span className='font-semibold'>{averageMarks}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;