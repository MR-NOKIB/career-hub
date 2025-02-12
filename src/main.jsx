/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Layout/Main.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Blog from './Components/Blog/Blog.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => {

          const categoriesRes = await fetch('/categories.json');
          const jobsRes = await fetch('/jobs.json');

          const categoriesData = await categoriesRes.json();
          const jobsData = await jobsRes.json();

          return { categories: categoriesData, jobs: jobsData };
        },
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: async () => {
          const jobsRes = await fetch('/jobs.json');
          const jobsData = await jobsRes.json();
          return { jobs: jobsData };
        }
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
