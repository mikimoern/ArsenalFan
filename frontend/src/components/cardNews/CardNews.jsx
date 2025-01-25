import React from "react";
import "./cardNews.css";
import RedBtn from "../redBtn/RedBtn";
import { Link } from "react-router-dom";

const CardNews = (props) => {
  return (
    <div className="news__card_all">
      {props.newsData.map((news) => (
        <Link to={`/news/${news.slug}`} key={news.id} className="news__card">
          <img src={news.image} alt={news.title} className="news__card_img" />
          <div className="news__card_desc">
            <RedBtn text={news.category} />
            <h3 className="">{news.title}</h3>
            <p className="">{news.short_content}</p>
            <span className="news__card_date">{news.create_date}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardNews;