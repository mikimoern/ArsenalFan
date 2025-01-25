import React from 'react'
import "./seeMoreBtn.css"
import RedBtn from '../redBtn/RedBtn'
import { Link } from "react-router";

const SeeMoreBtn = (props) => {
  return (
    <Link to={props.path} className="see_more">
      <div className="see_more__line"></div>
      <RedBtn text={props.text} />
      <div className="see_more__line"></div>
    </Link>
  );
}

export default SeeMoreBtn