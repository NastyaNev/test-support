import React from "react";
import "./CarouselArrow.scss";
import Carousel, { consts } from "react-elastic-carousel";
import arrowLeft from "../../../images/arrow-left.svg";
import arrowRight from "../../../images/arrow-right.svg";

function CarouselArrow({ type, onClick, isEdge }) {
  const pointer =
    type === consts.PREV ? (
      <img src={arrowLeft} alt="Стрелка влево" />
    ) : (
      <img src={arrowRight} alt="Стрелка вправо" />
    );

  return (
    <button onClick={onClick} disabled={isEdge}
    className="carousel-arrow"
    >
      {pointer}
    </button>
  );
}

export default CarouselArrow;
