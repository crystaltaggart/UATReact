import React from "react";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <NavLink to={"/home"} className={'navbar'} activeClassName={'active'}>Home</NavLink>
            <NavLink to={"/hobbies"} className={'navbar'} activeClassName={'active'}>Hobbies</NavLink>
            <NavLink to={"/projects"} className={'navbar'} activeClassName={'active'}>Projects</NavLink>
        </div>
    );
};

export default Navbar;