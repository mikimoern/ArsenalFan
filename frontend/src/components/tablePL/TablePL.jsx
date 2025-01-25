import React, { useEffect, useState } from "react";
import "./table.css";
import axios from "axios";


const TablePL = () => {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/table/");
        setTables(res.data);
        console.log("Data received:", res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table__wraper">
      <table className="table__league">
        <thead>
          <tr className="column-title">
            <th>Pos</th>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>DIF</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {tables.map((team, index) => (
            <tr
              key={index}
              className={`rows-title ${
                team.team === "Arsenal" ? "highlight-red" : ""
              }`}
            >
              <td>{index + 1}</td>
              <td>{team.team}</td>
              <td>{team.played}</td>
              <td>{team.won}</td>
              <td>{team.drawn}</td>
              <td>{team.lost}</td>
              <td>{team.goalsFor}</td>
              <td>{team.goalsAgainst}</td>
              <td>{team.difference}</td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePL;
