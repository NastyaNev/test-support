import React from 'react';
import "./TopBlockLink.scss";

function TopBlockLink({ item }) {
  return (
    <a className='top-block-link' href={item.link} target="_blank">
        <img src={item.icon} alt={item.name} />
        <span className="top-block-link__text">{item.name}</span>
    </a>
  )
}

export default TopBlockLink