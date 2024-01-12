import React from "react";
import "./Delivery.scss";
import share from "../../images/share.svg";
import chat from "../../images/chat-white.svg";
import call from "../../images/phone-button.svg";
import email from "../../images/email-button.svg";

function Delivery() {
  return (
    <main className="delivery-page">
      <div className="delivery-page__title-container">
        <h2 className="delivery-page__title-container__title">
          Где работает доставка?
        </h2>
        <img className="delivery-page__title-container__share" src={share} alt="поделиться" />
      </div>
      <p className="delivery-page__text">
        Это карта лояльности с вашим номером покупателя. Она бывает пластиковой
        или виртуальной. При входе в приложение или на сайт достаточно указать
        ваш номер телефона. Если к нему привязана карта «Давайте дружить!», она
        будет выбрана автоматически. Если нет, будет создана новая. Номер карты
        виден под вашим именем на главном экране приложения и в личном кабинете
        на сайте.<br/> Это карта лояльности с вашим номером покупателя. Она бывает
        пластиковой или виртуальной. При входе в приложение или на сайт
        достаточно указать ваш номер телефона. Если к нему привязана карта
        «Давайте дружить!», она будет выбрана автоматически. Если нет, будет
        создана новая. Номер карты виден под вашим именем на главном экране
        приложения и в личном кабинете на сайте.<br/> Это карта лояльности с вашим
        номером покупателя. Она бывает пластиковой или виртуальной. При входе в
        приложение или на сайт достаточно указать ваш номер телефона. Если к
        нему привязана карта «Давайте дружить!», она будет выбрана
        автоматически. Если нет, будет создана новая. Номер карты виден под
        вашим именем на главном экране приложения и в личном кабинете на сайте.<br/>
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
        <button className="delivery-page__contacts__button" onClick={e => e.preventDefault()}>
          <img src={chat} alt="напсиать" />
          <span>Онлайн-чат</span>
        </button>
        <img src={call} alt="позвонить" className="delivery-page__contacts__button-medias" />
        <img src={email} alt="написать письмо" />
      </div>
    </main>
  );
}

export default Delivery;
