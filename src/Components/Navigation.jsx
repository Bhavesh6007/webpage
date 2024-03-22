import React from "react";
// import './App.css'

const Navigation = () =>{
    return(
        <>
        <nav className="container">
      <div className="logo">
      <img src="/Images/brand_logo.png" className="logo" alt="Website Logo" />
      </div>
      <ul>
        <li  href="#">Main</li>
        <li href="#">Location</li>
        <li href="#">Contact</li>
        <li href="#">About Us</li>
      </ul>
      <button className="btnlogin">Login</button>
    </nav>
  
        </>
    )

}
export default Navigation