import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='bg-linear-to-r from-[#7e8ffe15] to-[#9873ff14] flex items-center content-center mx-auto'>
                <h2 className='text-4xl font-bold px-20 pb-30 pt-10 mx-auto'>Blogs</h2>
            </div>
            <div className='max-w-[1200px] mx-auto px-6 mb-24 mt-10 md:flex md:flex-col gap-6'>
                <p className='flex flex-col bg-linear-to-r from-[#7e8ffe15] to-[#9873ff14] rounded-lg p-10'>
                    <span className='text-lg font-bold'>When should you use context API?</span>
                    - The Context API is a feature of React that allows you to share data between components without having to pass props down through every level of the component tree. It's a way to manage global state in your application. Using the Context API can simplify your code and avoid the need to pass props down through multiple levels of your component tree. It can also make your code more efficient, as you don't need to re-render components that don't depend on the data being passed down.
                </p>
                <p className='flex flex-col bg-linear-to-r from-[#7e8ffe15] to-[#9873ff14] rounded-lg p-10'>
                    <span className='text-lg font-bold'>What is a custom hook?</span>
                    - A custom hook is a function in React that uses one or more of the built-in hooks and encapsulates a specific piece of functionality or logic. Custom hooks allow you to extract reusable logic from your components and share it across your application. The name of a custom hook must start with "use" to make it clear that it is a hook and to follow the naming convention of React hooks. Custom hooks are created by combining existing hooks and logic into a reusable function. They can take arguments like regular functions and can return any value or object that a regular function can.
                </p>
                <p className='flex flex-col bg-linear-to-r from-[#7e8ffe15] to-[#9873ff14] rounded-lg p-10'>
                    <span className='text-lg font-bold'>What is useRef?</span>
                    - useRef is a hook in React that allows you to create a mutable reference that persists across renders. It can be used to reference DOM elements, store previous values, or maintain state that doesn't trigger a re-render. Unlike state, updating a ref using the .current property does not trigger a re-render of the component. This makes useRef useful for managing mutable values that you don't want to trigger a re-render.
                </p>
                <p className='flex flex-col bg-linear-to-r from-[#7e8ffe15] to-[#9873ff14] rounded-lg p-10'>
                    <span className='text-lg font-bold'>What is useMemo?</span>
                    - useMemo is a hook in React that allows you to optimize the performance of your application by memoizing the results of a function. Memoization is a technique used to cache the results of an expensive function, so that if the function is called again with the same arguments, the cached result is returned instead of recomputing the function. useMemo takes two arguments: the first argument is a function that returns a value, and the second argument is an array of dependencies. The function passed as the first argument will only be executed when any of the dependencies in the second argument have changed.
                </p>
            </div>
        </div>
    );
};

export default Blog;