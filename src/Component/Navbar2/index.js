import React from "react";
//import { useContext, useEffect, useState } from 'react';
import "./navbar2.css";
import { FaFacebook } from "react-icons/fa";
import {Link} from "react-router-dom";
//import {FiTwitter} from "react-icons/Fi";

function Navbar2() {
  return (
    <div className="nav">
      <div className="nav1">
        <div className="icons">
          
            <FaFacebook style={{ color: "red" }} />
            <FaFacebook style={{ color: "white" }} />
            <FaFacebook style={{ color: "white" }} />
            <FaFacebook style={{ color: "white" }} />
            <FaFacebook style={{ color: "white" }} />
            <FaFacebook style={{ color: "white" }} />
          
        </div>
        
      <Link to="/"> <div className="logo" styele={{ color: "white" }}>
          
          STAR <br/> WARS
        </div>
        </Link> 
        <div className="search">
            <div ><input placeholder="search your favorite" size="30%" /></div>
            <div style={{color:"white", fontFamily:"fantasy"}}> log in </div>
            <div style={{color:"white" , fontFamily:"fantasy"}}> sign up </div>

        </div>
      </div>
      <div className="nav2">
         <Link to="/people" ><div className='item'> Pepple </div> </Link>  
            <div className='item'> fimls </div>
            <div className='item'> New </div>
            <div className='item'> Series </div>
            <div className='item'> comunity </div>
      </div>
    </div>
  );
}

export default Navbar2;
