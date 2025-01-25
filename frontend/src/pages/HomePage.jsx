import React, { useEffect, useState } from "react";
import Hero from "../components/hero/Hero.jsx";
import MainTitle from "../components/mainTitle/MainTitle.jsx";
import MainNews from "../components/mainNews/MainNews.jsx";
import ClubStore from "../components/clubStore/ClubStore.jsx";
import SeeMoreBtn from "../components/seeMoreBtn/SeeMoreBtn.jsx";
import CardVideo from "../components/cardVideo/CardVideo.jsx";
import axios from "axios";

const Home = () => {

  const [lastVideos, setLastVideos] = useState([]);
  const [lastNews, setLastNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/videos/latest/");
        setLastVideos(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/news/latest/");
        setLastNews(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Hero />
      <main className="main">
        <div className="container">
          <MainTitle text="Latest News" />
          <MainNews newsData={lastNews} />
          <SeeMoreBtn text="See More News" path="/news" />
          <MainTitle text="Video" />
          <CardVideo videoList={lastVideos} />
          <SeeMoreBtn text="See More Video" path="/video" />
          <MainTitle text="Club Store" />
          <ClubStore />
        </div>
      </main>
    </>
  );
};

export default Home;
