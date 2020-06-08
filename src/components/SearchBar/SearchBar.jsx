import React from "react";
import PropTypes from "prop-types";
import SearchLinks from "../SearchLinks/SearchLinks";
import SearchExample from "../SearchExample/SearchExample";
import "./SearchBar.css";

/**
 * Компонент «строка поиска»: разделы поиска, строка поиска и образец запроса.
 * По клику перезагружает страницу.
 */
const SearchBar = ({ links, example }) => {
  return (
    <React.Fragment>
      <SearchLinks links={links} />
      <div className="ui fluid action input">
        <a href="#">
          <img src="https://pr-sotnikov.ru/d/1280px-yandex_official_logosvg.png" className="image-yandex" alt="yandex-logo" />
        </a>
        <input type="text" placeholder="" />
        <div className="ui button">Найти</div>
      </div>
      <SearchExample example={example} />
    </React.Fragment>
  );
};

SearchBar.propTypes = {
  example: PropTypes.string.isRequired,
};

export default SearchBar;
