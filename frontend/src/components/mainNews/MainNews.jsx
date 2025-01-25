import React from "react";
import "./MainNews.css";

import RedBtn from "../redBtn/RedBtn";
import CardNews from "../cardNews/CardNews";
import { Link } from "react-router-dom";

const MainNews = (props) => {

  if (!props.newsData || props.newsData.length === 0) {
    return <p>No news available</p>;
  }  

  const mainNews = props.newsData[0]; 
  const otherNews = props.newsData.slice(1); 

  return (
    <section className="news">
      <Link to={`/news/${mainNews.slug}`} className="news__main">
        <div className="news__link">
          <img
            src={mainNews.image}
            alt={mainNews.title}
            className="news__link_img"
          />
        </div>
        <div className="news__grad"></div>
        <div className="news__main_desc">
          <RedBtn text={mainNews.category} />
          <h3>{mainNews.title}</h3>
          <p>{mainNews.short_content}</p>
          <span className="news__main_date">{mainNews.create_date}</span>
        </div>
      </Link>

      <CardNews newsData={otherNews} />
    </section>
  );
};

export default MainNews