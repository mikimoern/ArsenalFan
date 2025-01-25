import React from 'react'
import './logo.css'
import LogoImg from './../../assets/images/logo.png'

const Logo = () => {
  return (
    <div className="logo">
      <a href="/">
        <img src={LogoImg} alt="" />
      </a>
    </div>
  );
}

export default Logo