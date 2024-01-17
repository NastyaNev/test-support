import React from "react";
import SocialMedia from "../social-media/SocialMedia";
import { socialMedias } from "../../../utils/social-medias-array";

function SocialMedias({ classNameMedias, classNameMedia, handleMediaClick}) {
  return (
    <nav className={classNameMedias}>
      {socialMedias.map((i, index) => (
        <SocialMedia key={index} item={i} classNameMedia={classNameMedia} handleMediaClick={handleMediaClick} />
      ))}
    </nav>
  );
}

export default SocialMedias;
