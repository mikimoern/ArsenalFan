import React from 'react'
import "./footer.css"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import IconAcronis from "./../../assets/images/sponsor/acronis.svg?react"
import IconCodbary from "./../../assets/images/sponsor/codbary.svg?react"
import IconComAve from "./../../assets/images/sponsor/com_ave.svg?react"
import IconEtoro from "./../../assets/images/sponsor/etoro.svg?react"
import IconPremi from "./../../assets/images/sponsor/premi.svg?react"
import IconPL from "./../../assets/images/sponsor/premier_league.svg?react"
import IconSocios from "./../../assets/images/sponsor/socios.svg?react"
import IconStatSports from "./../../assets/images/sponsor/stat_sports.svg?react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <section className="footer_sponsor">
          <ul className="footer_sponsor__list">
            <li className="footer_sponsor__item">
              <a
                href="https://www.premierleague.com/"
                className="footer_sponsor__link"
                target="_blank"
              >
                <IconAcronis />
              </a>
            </li>
            <li className="footer_sponsor__item">
              <a
                href="https://statsports.com/arsenal"
                className="footer_sponsor__link"
                target="_blank"
              >
                <IconCodbary />
              </a>
            </li>
            <li className="footer_sponsor__item">
              <a
                href="https://www.socios.com/"
                className="footer_sponsor__link"
                target="_blank"
              >
                <IconComAve />
              </a>
            </li>
            <li className="footer_sponsor__item">
              <a
                href="https://drinkprime.uk/"
                className="footer_sponsor__link"
                target="_blank"
              >
                <IconPremi />
              </a>
            </li>
            <li className="footer_sponsor__item">
              <a
                href="https://www.acronis.com/en-gb/"
                className="footer_sponsor__link"
                target="_blank"
              >
                <IconEtoro />
              </a>
            </li>
            <li className="footer_sponsor__item">
              <a
                href="https://football.comave.com/"
                className="footer_sponsor__link"
                target="_blank"
              >
                <IconPL />
              </a>
            </li>
            <li className="footer_sponsor__item">
              <a
                href="https://www.etoro.com/"
                className="footer_sponsor__link"
                target="_blank"
              >
                <IconSocios />
              </a>
            </li>
            <li className="footer_sponsor__item">
              <a
                href="https://www.cadbury.co.uk/"
                className="footer_sponsor__link"
                target="_blank"
              >
                <IconStatSports />
              </a>
            </li>
          </ul>
        </section>
        <section className="footer_main">
          <div className="footer_main__text">
            <h4 className="footer_main__text_title">Arsenal Fan Website</h4>
            <p>
              This is an unofficial fan website dedicated to Arsenal Football
              Club. All trademarks and copyrights belong to their respective
              owners.
            </p>
          </div>
          <div className="footer_main__link">
            <h4 className="footer_main__text_title">Follow Arsenal</h4>
            <div className="footer_main__icons">
              <a href="https://facebook.com/arsenal" target="_blank">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com/arsenal" target="_blank">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com/arsenal" target="_blank">
                <Instagram size={24} />
              </a>
              <a href="https://youtube.com/arsenal" target="_blank">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </section>
        <section className="footer_bottom">
          <p>
            &copy; {new Date().getFullYear()} Arsenal Fan Website. By Alexandru Cordunian
          </p>
        </section>
      </div>
    </footer>
  );
}

export default Footer