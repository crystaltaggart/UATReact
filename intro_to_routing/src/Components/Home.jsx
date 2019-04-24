import React from "react";
import {Link} from 'react-router-dom';
import Navbar from "./Navlinks";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <h2>Home Page goes here </h2>
            <a href="/reload">Reload Bundle</a><br/>
            <Link to="/reload2">Link Example</Link>
            <hr/>
        </div>
    );
};

export default Home;