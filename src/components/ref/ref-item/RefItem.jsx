import React, { useState } from "react";
import "./RefItem.scss";
import refArrow from "../../../images/ref-arrow.svg";
import refArrowDown from "../../../images/ref-arrow-down.svg";

function RefItem({ item }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const textClassName = () => {
    if (open) {
      return "ref-item__description__text ref-item__description__text-open";
    } else {
      return item.shortText
        ? "ref-item__description__text"
        : "ref-item__description__text value-null";
    }
  };

  return (
    <div className="ref-item" onClick={handleClick}>
      <div className="ref-item__description">
        <p className="ref-item__description__title">{item.title}</p>
        <p className={textClassName()}>{item.text}</p>
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
