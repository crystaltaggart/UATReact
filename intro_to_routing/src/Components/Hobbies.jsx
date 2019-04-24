import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Navbar from "./Navlinks";

const Hobbies = () => {
    return(
        <Fragment>
            <Navbar/>
        <h2>Hobbies</h2>
            <ul>
                <li><Link to="/hobbies/1">Working</Link></li>
                <li><Link to="/hobbies/2">More work</Link></li>
                <li><Link to="/hobbies/3">And more work</Link></li>
            </ul>
        </Fragment>
    ) ;
};

export default Hobbies;