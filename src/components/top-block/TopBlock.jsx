import React from "react";
import "./TopBlock.scss";
import {topBlockMenu} from "../../utils/top-block-menu-array";
import TopBlockLink from "./top-block-link/TopBlockLink";

function TopBlock() {
  return (
    <div className="top-block">
      <h1 className='top-block__title'>Поддержка здесь</h1>
      <p className="top-block__subtitle">
        Мы любим общаться и рады всем отзывам, вопросам и предложениям.
        Выберите удобный способ
      </p>
      <nav className="top-block__contact-menu">
        {topBlockMenu.map((i, index) => (
          <TopBlockLink key={index} item={i} />
        ))}
      </nav>
    </div>
  );
}

export default TopBlock;
