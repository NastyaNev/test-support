import "./Faq.scss";
import React, { useEffect, useRef, useState } from "react";
import Carousel, { consts } from "react-elastic-carousel";
import CarouselArrow from "./carousel-arrow/CarouselArrow";
import RenderComponent from "./render-component/RenderComponent";
import QuestionCard from "./question-card/QuestionCard";
import { questions } from "../../utils/questions-array";

function Faq() {
  const carousel = useRef();
  const [disabledPrevArrow, setDisabledPrevArrow] = useState(true);
  const [disabledNextArrow, setDisabledNextArrow] = useState(true);

  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, [width]);

  const breakPoints = [
    { width: 1, itemsToShow: width / (1280 / 1208) / 307.072, itemsToScroll: 1 },
    { width: 1280, itemsToShow: width / (1280 / 1208) / 307.072, itemsToScroll: 2 },
    { width: 1842, itemsToShow: 6, itemsToScroll: 2 },
  ]

  return (
    <div className="faq">
      <h3 className="faq__title">Часто задаваемые вопросы</h3>
      <div className="faq__carousel">
        <div className="faq__carousel__arrows">
          <CarouselArrow
            type={consts.PREV}
            onClick={(e) => {
              e.preventDefault();
              carousel.current.slidePrev();
            }}
            isEdge={disabledPrevArrow}
          />
          <CarouselArrow
            type={consts.NEXT}
            onClick={(e) => {
              e.preventDefault();
              carousel.current.slideNext();
            }}
            isEdge={disabledNextArrow}
          />
        </div>
        <Carousel
          breakPoints={breakPoints}
          ref={carousel}
          pagination={false}
          renderArrow={({ type, onClick, isEdge }) => {
            return (
              <RenderComponent
                type={type}
                isEdge={isEdge}
                updateDisabledState={(type, isEdge) => {
                  if (type === consts.PREV && disabledPrevArrow != isEdge) {
                    setDisabledPrevArrow(isEdge);
                  }

                  if (type === consts.NEXT && disabledNextArrow != isEdge) {
                    setDisabledNextArrow(isEdge);
                  }
                }}
              />
            );
          }}
        >
          {questions.map((question, index) => (
            <QuestionCard key={index} question={question} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Faq;
