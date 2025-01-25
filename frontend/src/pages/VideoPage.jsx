import React, { useEffect, useState } from "react";
import MainTitle from "../components/mainTitle/MainTitle.jsx";
import Pagination from "../components/pagination/Pagination.jsx";

import CardVideo from "../components/cardVideo/CardVideo.jsx";
import axios from "axios";

const Video = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;


  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/videos/");
        setVideos(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = videos.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className="main">
      <div className="container">
        <MainTitle text="All Video" />
        <CardVideo videoList={currentData} />
        <Pagination
          currentPage={currentPage}
          totalItems={videos.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
};

export default Video;
