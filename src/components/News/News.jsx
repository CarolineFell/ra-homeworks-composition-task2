import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

/**
 * Компонент «новости»: заголовки новостей.
 * По клику перезагружает страницу.
 */
const News = ({ news }) => {
  return (
    <div className="ui list">
      {news.map(item => (
        <p className="news-item" key={shortid.generate()}>
          <i className={`${item.sourceIcon} icon`}></i>
          <a href="/#" className="link">{item.text}</a>
        </p>
      ))}
    </div>
  );
};

News.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      sourceIcon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default News;
