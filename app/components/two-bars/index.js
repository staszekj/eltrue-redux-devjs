import React from "react";
import PropTypes from "prop-types";

const TwoBars = ({valueOne, valueTwo}) => {
  return (
    <div className="left-panel">
      <div className="values">
        <div className="value-container value1" style={{width: valueOne}}><span className="text">{valueOne}</span></div>
        <div className="value-container value2" style={{width: valueTwo}}><span className="text">{valueTwo}</span></div>
      </div>
    </div>
  )
};

TwoBars.propTypes = {
  valueOne: PropTypes.number.isRequired,
  valueTwo: PropTypes.number.isRequired
};

export default TwoBars
