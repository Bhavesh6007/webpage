import React from "react";
// import './App.css';

const HeroSection= () =>{

    return(
        <>
      <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST </h1>
              <p>
                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR 
                SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
                OUR 
                SHOES.
              </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p> Also Avilable  On</p>
            <div className=" brand-icons">
                <img src="/Images/amazon.png" alt="Amzon Logo"/>
                <img src="/Images/flipkart.png" alt="Flipcart Logo"/>
            </div>
            </div>
            </div>
            <div className="shoe-image">
                <img src="/Images/shoe_image.png" className="hero_image" alt="Shoe Images"/>          
        </div>
      </main>
        </>

    )
}
export default HeroSection;