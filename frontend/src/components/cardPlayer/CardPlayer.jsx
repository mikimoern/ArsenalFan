import React from "react";
import "./CardPlayer.css";

const CardPlayer = ({ player }) => {
  const { photo, name, number, appearances, minutes, goals } = player;

  return (
    <div className="player_card">
      <img src={photo} alt={name} className="player_card__portrait" />
      <div className="player_card__info">
        <h4 className="player_card__name">{name}</h4>
        <p className="player_card__number">{"#" + number}</p>
      </div>
      <div className="player_card__stats">
        <h6>Season Stats</h6>
        <div className="player_card__stats_wrap">
          <div className="player_card__stats_info">
            <span className="player_card__stats_num">{appearances}</span>
            <p className="player_card__stats_title">Appearances</p>
          </div>
          <div className="player_card__stats_info">
            <span className="player_card__stats_num">{minutes}</span>
            <p className="player_card__stats_title">Minutes</p>
          </div>
          <div className="player_card__stats_info">
            <span className="player_card__stats_num">{goals}</span>
            <p className="player_card__stats_title">Goals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPlayer;