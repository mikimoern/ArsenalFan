import React from 'react'
import "./club.css"
import AboutHeroImg from "./../../assets/images/about_hero.jpg";
import HistoryImg from "./../../assets/images/history.jpg";
import StadiumImg from "./../../assets/images/about_stadium.jpg";

import { Trophy } from "lucide-react";
import { Star } from "lucide-react";

const Club = () => {
  return (
    <section className="club">
      <div className="club_hero">
        <img src={AboutHeroImg} alt="Arsenal FC" />
      </div>
      <div className="container">
        <div className="club__history">
          <div className="club__history_text">
            <h2>Rich History</h2>
            <p>
              Founded in 1886 by workers at the Royal Arsenal in Woolwich,
              Arsenal Football Club has grown to become one of England's most
              successful and prestigious football clubs. The club's move to
              North London in 1913 marked the beginning of a new era, leading to
              numerous achievements and a distinctive style of play.
            </p>
            <p>
              Arsenal was the first club from southern England to join the
              Football League in 1893, and it reached the First Division in
              1904. Relegated only once, in 1913, it continues the longest
              streak in the top division, and has won the second-most top-flight
              matches in English football history.
            </p>
          </div>
          <div className="club__history_img">
            <img src={HistoryImg} alt="Arsenal Logo" />
          </div>
        </div>
        <div className="club__achievements">
          <div className="club__achievements_title">
            <Trophy color="#e30613" size={32} />
            <h2>Major Achievements</h2>
          </div>
          <div className="club__achievements_wrap">
            <div className="club__achievements_card">
              <div className="club__achievements_card_info">
                <Star color="#e30613" />
                <h3>League Titles</h3>
              </div>
              <p className="club__achievements_card_desc">
                13 First Division/Premier League titles, making Arsenal one of
                the most successful clubs in English football history.
              </p>
            </div>
            <div className="club__achievements_card">
              <div className="club__achievements_card_info">
                <Star color="#e30613" />
                <h3>FA Cup Champions</h3>
              </div>
              <p className="club__achievements_card_desc">
                14 FA Cup victories, making Arsenal the most successful club in
                the competition's history.
              </p>
            </div>
            <div className="club__achievements_card">
              <div className="club__achievements_card_info">
                <Star color="#e30613" />
                <h3>The Invincibles</h3>
              </div>
              <p className="club__achievements_card_desc">
                Completed the 2003-04 Premier League season undefeated, a feat
                unmatched in modern English football.
              </p>
            </div>
          </div>
        </div>
        <div className="club__stadium">
          <div className="club__stadium_img">
            <img src={StadiumImg} alt="Arsenal Stadium" />
          </div>
          <div className="club__stadium_text">
            <h2>Emirates Stadium</h2>
            <p>
              The Emirates Stadium, Arsenal's home since 2006, is one of the
              most modern and impressive football venues in the world. With a
              capacity of over 60,000, it provides an unmatched matchday
              experience while maintaining the club's traditional values and
              atmosphere.
            </p>
            <div className="club__stadium_wrap">
              <div className="club__stadium_info">
                <p className="club__stadium_info_name">Capacity</p>
                <p className="club__stadium_info_num">60,704</p>
              </div>
              <div className="club__stadium_info">
                <p className="club__stadium_info_name">Opened</p>
                <p className="club__stadium_info_num">2006</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Club