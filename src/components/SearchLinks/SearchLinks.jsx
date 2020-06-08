import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import "./SearchLinks.css";

/**
 * Компонент «разделы поиска»: оссылки на разделы поиска.
 * По клику перезагружает страницу.
 */
const SearchLinks = ({ links }) => {
  return (
    <div className="ui horizontal list links">
      {links.map(link => (
        <a href="#" className="item" key={shortid.generate()}>
          {link}
        </a>
      ))}
    </div>
  );
};

SearchLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default SearchLinks;
