import React, { useState } from "react";
import "./Delivery.scss";
import share from "../../images/share.svg";
import chat from "../../images/chat-white.svg";
import call from "../../images/phone-button.svg";
import email from "../../images/email-button.svg";
import SocialMedias from "../../components/social/social-medias/SocialMedias";

function Delivery() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeOnBackgroundClick = () => {
    if (open) {
      setOpen(false);
    }
  };

  return (
    <main className="delivery-page">
      <div
        className={
          open ? "delivery-page__overlay" : "delivery-page__overlay-disabled"
        }
        onClick={closeOnBackgroundClick}
      ></div>
      <div className="delivery-page__title-container">
        <h2 className="delivery-page__title-container__title">
          Где работает доставка?
        </h2>
        <div
          className="delivery-page__title-container__share"
          onClick={handleClick}
        >
          <img src={share} alt="поделиться" />
        </div>
        <SocialMedias
          classNameMedias={
            open
              ? "delivery-page__title-container__share-menu delivery-page__title-container__share-menu_open"
              : "delivery-page__title-container__share-menu"
          }
          classNameMedia="delivery-page__title-container__share-menu_item"
          handleMediaClick={() => {
            setOpen(false);
          }}
        />
      </div>
      <p className="delivery-page__text">
        Это карта лояльности с вашим номером покупателя. Она бывает пластиковой
        или виртуальной. При входе в приложение или на сайт достаточно указать
        ваш номер телефона. Если к нему привязана карта «Давайте дружить!», она
        будет выбрана автоматически. Если нет, будет создана новая. Номер карты
        виден под вашим именем на главном экране приложения и в личном кабинете
        на сайте.
        <br /> Это карта лояльности с вашим номером покупателя. Она бывает
        пластиковой или виртуальной. При входе в приложение или на сайт
        достаточно указать ваш номер телефона. Если к нему привязана карта
        «Давайте дружить!», она будет выбрана автоматически. Если нет, будет
        создана новая. Номер карты виден под вашим именем на главном экране
        приложения и в личном кабинете на сайте.
        <br /> Это карта лояльности с вашим номером покупателя. Она бывает
        пластиковой или виртуальной. При входе в приложение или на сайт
        достаточно указать ваш номер телефона. Если к нему привязана карта
        «Давайте дружить!», она будет выбрана автоматически. Если нет, будет
        создана новая. Номер карты виден под вашим именем на главном экране
        приложения и в личном кабинете на сайте.
        <br />
        Это карта лояльности с вашим номером покупателя. Она бывает пластиковой
        или виртуальной. При входе в приложение или на сайт достаточно указать
        ваш номер телефона. Если к нему привязана карта «Давайте дружить!», она
        будет выбрана автоматически. Если нет, будет создана новая. Номер карты
        виден под вашим именем на главном экране приложения и в личном кабинете
        на сайте.
      </p>
      <span className="delivery-page__span">
        Проблема не решилась? Свяжитесь с нами, мы поможем
      </span>
      <div className="delivery-page__contacts">
        <button
          className="delivery-page__contacts__button"
          onClick={(e) => e.preventDefault()}
        >
          <img
            className="delivery-page__contacts__button__img"
            src={chat}
            alt="напсиать"
          />
          <span>Онлайн-чат</span>
        </button>

        <a href="#" className="delivery-page__contacts__button-medias">
          <img src={call} alt="позвонить" />
        </a>
        <a href="#" className="delivery-page__contacts__button-medias">
          <img src={email} alt="написать письмо" />
        </a>
      </div>
    </main>
  );
}

export default Delivery;
