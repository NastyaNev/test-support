import React from 'react';
import "./SocialMedia.scss";

function SocialMedia({ item }) {
  return (
    <a className='social-media' href={item.link} target="_blank">
        <img src={item.icon} alt={item.name} />
        <span className="social-media__text">{item.name}</span>
    </a>
  )
}

export default SocialMedia