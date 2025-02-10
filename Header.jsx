import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = ({to}) => {
    return (
        <div>
            <ActiveLink to="/"> <img src="../../assets/logo/CareerHub.png" alt="" /></ActiveLink>
            <ActiveLink>Hello</ActiveLink>
            <ActiveLink></ActiveLink>
            <ActiveLink></ActiveLink>
            <ActiveLink></ActiveLink>
        </div>
    );
};

export default Header;