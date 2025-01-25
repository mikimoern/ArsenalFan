import React from 'react'
import './clubStore.css'
import HomeKit from './../../assets/images/home.png'
import AwayKit from './../../assets/images/away.png'
import ThirdKit from "./../../assets/images/third.png";
import GoalkeeperKit from "./../../assets/images/goalkeeper.png";

const ClubStore = () => {
  return (
    <section className="store">
      <div className="store-wrap__card">
        <a
          className="store__card"
          href="https://arsenaldirect.arsenal.com/Football-Shirts-and-Kit/Home/c/home-kit"
          target="_blank"
        >
          <img src={HomeKit} alt="Home kit" />
          <span>Home Kit</span>
        </a>
        <a
          className="store__card"
          href="https://arsenaldirect.arsenal.com/Football-Shirts-and-Kit/Away/c/away-kit"
          target="_blank"
        >
          <img src={AwayKit} alt="Away kit" />
          <span>Away Kit</span>
        </a>
        <a
          className="store__card"
          href="https://arsenaldirect.arsenal.com/Football-Shirts-and-Kit/Third/c/third-kit"
          target="_blank"
        >
          <img src={ThirdKit} alt="Third kit" />
          <span>Third Kit</span>
        </a>
        <a
          className="store__card"
          href="https://arsenaldirect.arsenal.com/Football-Shirts-and-Kit/Goalkeeper/c/goalkeeper"
          target="_blank"
        >
          <img src={GoalkeeperKit} alt="Goalkeeper kit" />
          <span>Goalkeeper Kit</span>
        </a>
      </div>
    </section>
  );
}

export default ClubStore