import React from "react";
import "./Social.scss";
import SocialMedias from "./social-medias/SocialMedias";

function Social() {
  return (
    <div className="social">
      <div className="social__text">
        <p className="social__text__subtitle">Социальные сети и сообщество</p>
        <h3 className="social__text__title">Присоединяйтесь</h3>
      </div>
      <SocialMedias classNameMedias="social__medias" classNameMedia="social__media" />
    </div>
  );
}

export default Social;
