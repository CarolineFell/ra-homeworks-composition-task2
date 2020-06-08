import React from "react";
import PropTypes from "prop-types";
import Widget from "../Widget/Widget";
import "./WeatherWidget.css";

/**
 * Компонент «погода»: оссылки на разделы поиска.
 * По клику перезагружает страницу.
 */
const WeatherWidget = ({ weather, moment }) => {
  const currentWeather = moment.hour() < 10 ? weather.night : weather.day;
  return (
    <Widget title="Погода" className="weather">
      <div className="weather-degrees">
        <b className="current-degrees">+{currentWeather}&deg;</b>
      </div>
      <div className="weather-degrees">
        <p>Утром +{weather.day},</p>
        <p>днём +{weather.night}</p>
      </div>
    </Widget>
  );
};

WeatherWidget.propTypes = {
  currentWeather: PropTypes.shape({
    day: PropTypes.number.isRequired,
    night: PropTypes.number.isRequired
  }),
  moment: PropTypes.object
};

export default WeatherWidget;
