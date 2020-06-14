import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import "./MainLinks.css";

/**
 * Компонент «основные разделы новостей»: названия разделов.
 * По клику перезагружает страницу.
 */
const MainLinks = ({ links }) => {
  return (
    <div className="ui horizontal bulleted">
      {links.map(link => (
        <a href="/#" className="link" key={shortid.generate()}>
          {link}
        </a>
      ))}
    </div>
  );
};

MainLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string.isRequired)
};

export default MainLinks;
