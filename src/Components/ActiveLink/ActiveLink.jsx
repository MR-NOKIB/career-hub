import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to}
            className={({ isActive }) =>
                isActive
                    ? " bg-linear-to-r from-[#7E90FE] to-[#9873FF] text-transparent bg-clip-text text-lg"
                    : ""
            }
        >
            {
                children
            }
        </NavLink>
    );
};

export default ActiveLink;