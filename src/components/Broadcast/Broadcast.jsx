import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import Widget from "../Widget/Widget";
import "./Broadcast.css";

/**
 * Компонент «эфир»: название и канал.
 * По клику перезагружает страницу.
 */
const Broadcast = ({ broadcasts }) => {
  return (
    <Widget title="Эфир">
      {broadcasts.map(item => (
        <p key={shortid.generate()}>
          <b>
            <a href="#" className="link">{item.title}</a>
          </b>
          <a href="#" className="link">{item.channel}</a>
        </p>
      ))}
    </Widget>
  );
};

Broadcast.propTypes = {
  broadcasts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      channel: PropTypes.string.isRequired
    })
  )
};

export default Broadcast;
