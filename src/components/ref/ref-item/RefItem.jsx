import React, { useState } from "react";
import "./RefItem.scss";
import refArrow from "../../../images/ref-arrow.svg";
import refArrowDown from "../../../images/ref-arrow-down.svg";

function RefItem({ item }) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    const text = e.target.querySelector(".ref-item__description__text");

    setOpen(!open);

    if (!item.shortText) {
      text.classList.toggle("value-null");
    }
    text.classList.toggle("ref-item__description__text-open");
  };

  return (
    <div className="ref-item" onClick={handleClick}>
      <div className="ref-item__description">
        <p className="ref-item__description__title">{item.title}</p>
        <p
          className={
            item.shortText
              ? "ref-item__description__text"
              : "ref-item__description__text value-null"
          }
        >
          {item.text}
        </p>
      </div>
      <img
        src={open ? refArrowDown : refArrow}
        alt="стрелка"
        className="ref-item__button"
      />
    </div>
  );
}

export default RefItem;
