import React from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import Widget from "../Widget/Widget";
import "./ProgramTV.css";

/**
 * Компонент «телепрограмма»: названия и каналы.
 * По клику перезагружает страницу.
 */
const ProgramTV = ({ tv }) => {
  return (
    <Widget title="Телепрограмма">
      {tv.map(item => (
        <p key={shortid.generate()}>
          <b>
            {item.time}
            <a href="#" className="link link-tv">{item.title}</a>
          </b>{" "}
          <a href="#" className="link">{item.channel}</a>
        </p>
      ))}
    </Widget>
  );
};

ProgramTV.propTypes = {
  tv: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      channel: PropTypes.string.isRequired
    })
  )
};

export default ProgramTV;
