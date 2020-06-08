import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Widget from "../Widget/Widget";

/**
 * Компонент «посещаемое»: название и краткое описание.
 * По клику перезагружает страницу.
 */
const Popular = ({ popular }) => {
  return (
    <Widget title="Посещаемое">
      {popular.map(item => (
        <p key={shortid.generate()}>
          <a href="#">{item.title}</a> {item.subtitle}
        </p>
      ))}
    </Widget>
  );
};

Popular.propTypes = {
  popular: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired
    })
  )
};

export default Popular;
