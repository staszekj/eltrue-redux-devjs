import React from "react";
import PropTypes from "prop-types";

const TwoBars = ({valueOne, valueTwo}) => {
  return (
    <div className="values">
      <div className="value-container value1"><span className="text">{valueOne}</span></div>
      <div className="value-container value2"><span className="text">{valueTwo}</span></div>
    </div>
  )
};

TwoBars.propTypes = {
  valueOne: PropTypes.number,
  valueTwo: PropTypes.number
};

export default TwoBars
