import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import "./Currencies.css";

/**
 * Компонент «курс валют»: название и курс с изменениями.
 * По клику перезагружает страницу.
 */
const Currencies = ({ currency }) => {
  return (
    <div className="ui horizontal list currency">
      {currency.map(item => (
        <p className="item" key={shortid.generate()}>
          <b>
            <a href="#" className="link">{item.title}</a>
            {item.rate}
          </b>{" "}
          {item.growth}
        </p>
      ))}
    </div>
  );
};

Currencies.propTypes = {
  currency: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      rate: PropTypes.string.isRequired,
      growth: PropTypes.string.isRequired
    })
  )
};

export default Currencies;
