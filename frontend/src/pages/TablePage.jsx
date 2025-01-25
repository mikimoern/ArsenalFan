import React from 'react'
import MainTitle from "../components/mainTitle/MainTitle";
import TablePL from '../components/tablePL/TablePL';


const Table = () => {
  return (
    <main className="table">
        <div className='container'>
            <MainTitle text="Premier League Table 2024/25" />
            <TablePL />
        </div>
    </main>
  );
}

export default Table