import React from "react";
import "./nav.css";
import {Outlet,Link} from "react-router-dom";

function Nav(){
    return (
        <>
        <nav>
            <ul className="content">
                <li>
                    <Link to="/" className="lll" >Registration</Link>
                </li>
                <li>
                    <Link to="/old" className="lll">Old Reg</Link>
                </li>
                <li>
                    <Link to="/tcgen" className="lll">TC generator</Link>
                </li>
                <li>
                    <Link to="/admin" className="lll">Admin Use</Link>
                </li>
            </ul>
        </nav>

        <Outlet/>
            
        </>
    );
}

export default Nav;