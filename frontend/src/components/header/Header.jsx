import React, { useState } from "react";
import "./header.css";
import { Menu, X } from "lucide-react"; // Импортируем иконки

import AdidasImg from "./../../assets/images/adidas.png";
import RwandaImg from "./../../assets/images/rwanda.png";
import EmiratesImg from "./../../assets/images/emirates.png";
import SobhaImg from "./../../assets/images/sobha.png";
import Logo from "../logo/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const navItems = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: "Video", href: "/video" },
    { name: "Players", href: "/players" },
    { name: "Table", href: "/table" },
    { name: "About", href: "/about" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <header className="header">
      <div className="container container__header">
        <Logo />
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav__list">
            {navItems.map((item, index) => (
              <li key={index} className="nav__item">
                <a className="nav__link" href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="main_sponsor">
          <a
            href="https://www.adidas.co.uk/football"
            className="main_sponsor__link"
            target="_blank"
          >
            <img src={AdidasImg} alt="Adidas" className="main_sponsor__img" />
          </a>
          <a
            href="https://visitrwanda.com/"
            className="main_sponsor__link"
            target="_blank"
          >
            <img src={RwandaImg} alt="Rwanda" className="main_sponsor__img" />
          </a>
          <a
            href="https://www.emirates.com/uk/english/"
            className="main_sponsor__link"
            target="_blank"
          >
            <img
              src={EmiratesImg}
              alt="Emirates"
              className="main_sponsor__img"
            />
          </a>
          <a
            href="https://www.sobharealty.com/"
            className="main_sponsor__link"
            target="_blank"
          >
            <img src={SobhaImg} alt="SobhaImg" className="main_sponsor__img" />
          </a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
    </header>
  );
};

export default Header;