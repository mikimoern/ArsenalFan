import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, Tag, ArrowLeft } from "lucide-react";
import "./newsSingle.css";
import axios from "axios";

const NewsSingle = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://127.0.0.1:8000/api/news/${slug}/`);
        setNewsItem(res.data); // install one news item
        setError(null);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("News not found");
        setNewsItem(null); // We are dropping the news
      } finally {
        setLoading(false); // Finishing the download
      }
    };

    fetchData();
  }, [slug]);

  // If the data is loading, show the loading indicator
  if (loading) {
    return <p>Loading...</p>;
  }

  // If an error occurs (for example, news item not found), we display a message
  if (error) {
    return (
      <div className="news_err">
        <button onClick={() => navigate(-1)} className="news_sing__btn_back">
          <ArrowLeft className="news_sing__btn_arrow" />
          Back
        </button>
        <div className="news_err__wrap">
          <h2 className="news_err__text">404 News not found</h2>
        </div>
      </div>
    );
  }

  if (!newsItem) {
    return (
      <div className="news_err">
        <button onClick={() => navigate(-1)} className="news_sing__btn_back">
          <ArrowLeft className="news_sing__btn_arrow" />
          Back
        </button>
        <div className="news_err__wrap">
          <h2 className="news_err__text"> 404 News not found</h2>
        </div>
      </div>
    );
  }

  return (
    <section className="news_sing">
      <button onClick={() => navigate(-1)} className="news_sing__btn_back">
        <ArrowLeft className="news_sing__btn_arrow" />
        Back
      </button>

      <article className="news_sing__card">
        <div className="news_sing__card_top">
          <img
            src={newsItem.image}
            alt={newsItem.title}
            className="news_sing__card_img"
          />
          <div className="news_sing__card_gradient" />
          <h1 className="news_sing__card_title">{newsItem.title}</h1>
        </div>

        <div className="news_sing__card_bottom">
          <div className="news_sing__card_info">
            <span className="news_sing__card_calendar">
              <Calendar />
              {newsItem.create_date}
            </span>
            <span className="news_sing__card_cat">
              <Tag />
              {newsItem.category}
            </span>
          </div>

          <div className="news_sing__card_text">
            <p>{newsItem.full_content}</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default NewsSingle;
