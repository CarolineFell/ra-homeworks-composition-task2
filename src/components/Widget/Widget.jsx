import React from "react";
import PropTypes from "prop-types";

/**
 * Компонент «обёртка» для погоды, посещаемого, карты,телепрограммы и эфира.
 */
const Widget = props => {
  return (
    <div className="ui segment">
      <h3>
        <a href="/#">{props.title}</a>
      </h3>
      {props.children}
    </div>
  );
};

Widget.propTypes = {
  title: PropTypes.string.isRequired
};

export default Widget;
