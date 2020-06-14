import React from "react";
import { banner } from "../../data/widgetData";

/**
 * Компонент «реклама»: баннер.
 * По клику перезагружает страницу.
 */
const Banner = () => {
  return (
    <a className="ui large centered leaderboard test ad" href="/#" data-text={banner}>
      <span>Banner here</span>
    </a>
  );
};

export default Banner;