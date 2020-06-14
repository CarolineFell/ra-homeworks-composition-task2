import React from "react";
import "./Advertising.css";

/**
 * Компонент «реклама»: изображение, заголовок и описание.
 * По клику перезагружает страницу.
 */
const Advertising = ({ item }) => {
  return (
    <div className="ui fluid card">
      <a className="image" href="/#">
        <img src={item.image} alt="advertising" />
      </a>
      <div className="content">
        <a className="header" href="/#">{item.title}</a>
        <p className="meta">{item.description}</p>
      </div>
    </div>
  );
};

export default Advertising;
