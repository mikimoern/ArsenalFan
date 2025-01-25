import React from 'react'
import "./hero.css"
import StadiumImg from "./../../assets/images/stadium.avif";


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__img">
        <img src={StadiumImg} alt="stadium" />
      </div>
      <div className="hero__text">
        <h1>Welcome to Arsenal</h1>
        <p>
          Experience the passion, pride and tradition of one of England's most
          successful football clubs
        </p>
      </div>
    </section>
  );
}

export default Hero