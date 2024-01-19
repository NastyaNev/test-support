import React from "react";
import "./QuestionCard.scss";
import { NavLink } from "react-router-dom";

function QuestionCard({ question }) {
  return (
      <NavLink className="question-card" to={question.way} target="_blank">
        <div className="question-card__question">
          <h4 className="question-card__question__title">{question.title}</h4>
          <p
            className={
              question.text === null
                ? "value-null"
                : "question-card__question__text"
            }
          >
            {question.text}
          </p>
        </div>
        <img
          className={
            question.img === null ? "value-null" : "question-card__img"
          }
          src={question.img}
          alt={question.title}
        />
      </NavLink>
  );
}

export default QuestionCard;
