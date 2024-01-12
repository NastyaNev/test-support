import React from "react";
import "./RefItem.scss";
import { NavLink } from "react-router-dom";
import refArrow from "../../../images/ref-arrow.svg";

function RefItem({ item }) {
  return (
    <div className="ref-item">
      <div className="ref-item__desctiption">
        <p className="ref-item__desctiption__title">{item.title}</p>
        <p
          className={
            item.text === null ? "value-null" : "ref-item__desctiption__text"
          }
        >
          {item.text}
        </p>
      </div>
      <img src={refArrow} alt="стрелка" className="ref-item__button" />
    </div>
  );
}

export default RefItem;
