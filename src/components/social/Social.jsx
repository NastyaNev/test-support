import React from "react";
import "./Social.scss";
import { socialMedias } from "../../utils/social-medias-array";
import SocialMedia from "./social-media/SocialMedia";

function Social() {
  return (
    <div className="social">
      <div className="social__text">
        <p className="social__text__subtitle">Социальные сети и сообщество</p>
        <h3 className="social__text__title">Присоединяйтесь</h3>
      </div>
      <nav className="social__medias">
        {socialMedias.map((i, index) => (
          <SocialMedia key={index} item={i} />
        ))}
      </nav>
    </div>
  );
}

export default Social;
