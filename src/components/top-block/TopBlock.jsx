import React from "react";
import "./TopBlock.scss";
import SocialMedia from "../social/social-media/SocialMedia";
import chat from "../../images/social/chat.svg";
import phone from "../../images/social/phone.svg";
import email from "../../images/social/email.svg";
import star from "../../images/social/star.svg";

function TopBlock() {
  const menu = [
    {
      name: "Онлайн-чат",
      icon: `${chat}`,
      link: "*",
    },
    {
      name: "Позвонить",
      icon: `${phone}`,
      link: "*",
    },
    {
      name: "Почта",
      icon: `${email}`,
      link: "*",
    },
    {
      name: "Отзыв о сайте",
      icon: `${star}`,
      link: "*",
    },
  ];

  return (
    <div className="top-block">
      <h1 className='top-block__title'>Поддержка здесь</h1>
      <p className="top-block__subtitle">
        Мы любим общаться и рады всем отзывам, вопросам и предложениям.
        Выберите удобный способ
      </p>
      <nav className="top-block__contact-menu">
        {menu.map((i, index) => (
          <SocialMedia key={index} item={i} />
        ))}
      </nav>
    </div>
  );
}

export default TopBlock;
