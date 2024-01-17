import React from "react";

function SocialMedia({ item, classNameMedia, handleMediaClick }) {
  return (
    <a href={item.link} target="_blank" onClick={handleMediaClick} >
      <img src={item.icon} alt={item.name} className={classNameMedia} />
    </a>
  );
}

export default SocialMedia;
