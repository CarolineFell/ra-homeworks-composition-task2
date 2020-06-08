import React from "react";
import PropTypes from "prop-types";
import "./SearchExample.css";

/**
 * Компонент «образец запроса»: образец запроса.
 * По клику перезагружает страницу.
 */
const SearchExample = ({ example }) => {
  return (
    <div>
      <p className="example">
        <b>Найдётся всё, например, </b> <a href="#">{example}</a>
      </p>
    </div>
  );
};

SearchExample.propTypes = {
  example: PropTypes.string.isRequired
};

export default SearchExample;
