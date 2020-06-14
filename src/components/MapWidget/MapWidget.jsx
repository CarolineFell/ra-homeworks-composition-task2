import React from "react";
import Widget from "../Widget/Widget";
import { map } from "../../data/widgetData";

/**
 * Компонент «карта»: названия разделов.
 * По клику перезагружает страницу.
 */
const MapWidget = () => {
  return (
    <Widget title={map.title}>
      <a href="/#">{map.link}</a>
    </Widget>
  );
};

export default MapWidget;
