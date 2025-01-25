import React, { useState } from "react";
import "./cardVideo.css";

const CardVideo = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handlePlayClick = (video) => {
    if (window.innerWidth <= 768) {
      //On mobile devices and tablets we play videos without pop-ups
      setSelectedVideo(video);
    } else {
      // On desktops, open a pop-up
      setSelectedVideo(video);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };

  return (
    <div className="video_card">
      {props.videoList.map((video) => (
        <div className="video_card__wrap" key={video.id}>
          <video controlsList="nodownload" muted>
            <source src={video.video_file} type="video/mp4" />
          </video>
          <div
            className="video_card__play"
            onClick={() => handlePlayClick(video)}
          ></div>
          <div className="video_card__info">
            <h4 className="video_card__title">{video.title}</h4>
            <span className="video_card__time">{video.duration}</span>
          </div>
        </div>
      ))}

      {/* Pop-up window for desktops */}
      {isModalOpen && (
        <div className="video_modal">
          <div className="video_modal__content">
            <button className="video_modal__close" onClick={handleCloseModal}>
              ×
            </button>
            <video controls autoPlay>
              <source src={selectedVideo.video_file} type="video/mp4" />
            </video>
          </div>
        </div>
      )}

      {/* Pop-up window for mob and table */}
      {selectedVideo && window.innerWidth <= 768 && (
        <div className="video_mobile">
          <video controls autoPlay>
            <source src={selectedVideo.video_file} type="video/mp4" />
          </video>
          <button
            className="video_mobile__close"
            onClick={() => setSelectedVideo(null)}
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default CardVideo;
