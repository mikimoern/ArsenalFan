import React, { useEffect, useState } from "react";
import MainTitle from "../components/mainTitle/MainTitle.jsx";
import CardPlayer from "../components/cardPlayer/CardPlayer.jsx";
import axios from "axios";

const Players = () => {
  const positions = ["Goalkeeper", "Defender", "Midfielder", "Forward"]
  const [players, setPlayers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/players/")
        setPlayers(res.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <main className="main">
      <div className="container">
        <MainTitle text="Players" />
        <section className="players">
          {positions.map((position) => (
            <div key={position}>
              <h4 className="players_pos">{position}s</h4>
              <div className="players__wrap">
                {players
                  .filter((player) => player.position === position)
                  .map((player) => (
                    <CardPlayer key={player.id} player={player} />
                  ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Players;