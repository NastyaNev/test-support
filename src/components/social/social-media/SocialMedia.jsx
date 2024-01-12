import React from "react";
import "./SocialMedia.scss";

function SocialMedia({ item }) {
  return (
    <a href={item.link} className="social-media" target="_blank">
      <img src={item.icon} alt={item.name} className="social-media__icon" />
    </a>
  );
}

export default SocialMedia;
