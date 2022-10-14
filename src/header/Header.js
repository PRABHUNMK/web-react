import React from "react";
import "./headercss.css";
import Nav from "./nav";
import Old from "./old";
import Reg from "./reg";
import Admin from "./admin";
import Tcgen from "./tcgen";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function Header(){
    return (
        <div className="headercss">
        <div className="header1">
        <h1>Government college of technology, coimbatore.<br></br>Date Sheet</h1>

        </div>
           
           
           <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav/>}>
                <Route index element={<Reg/>}/>
                <Route path="old" element={<Old/>}/>
                <Route path="admin" element={<Admin/>}/>
                <Route path="tcgen" element={<Tcgen/>}/>

                </Route>
            </Routes>
           </BrowserRouter>
           

        </div>
    );
}

export default Header;