import React from "react";
import "./SocialMedia.scss";

function SocialMedia({ item, classNameMedia, handleMediaClick }) {
  return (
    <a href={item.link} onClick={handleMediaClick} className="social-media">
      <img src={item.icon} alt={item.name} className={classNameMedia} />
    </a>
  );
}

export default SocialMedia;
