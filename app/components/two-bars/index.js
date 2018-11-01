import React from "react";
import PropTypes from "prop-types";
import {LEFT_BAR, RIGHT_BAR} from "app/actions";

const TwoBars = ({valueOne, valueTwo, actions}) => {
  const barOneWidth = isNaN(valueOne) ? 0 : valueOne;
  const barTwoWidth = isNaN(valueTwo) ? 0 : valueTwo;

  const leftClickHandler = () => {
    actions.twoBarsClick(LEFT_BAR)
  };

  const rightClickHandler = () => {
    actions.twoBarsClick(RIGHT_BAR)
  };

  return (
    <div className="left-panel">
      <div className="values">
        <div className="value-container value1" style={{width: barOneWidth}} onClick={leftClickHandler}><span
          className="text">{barOneWidth}</span></div>
        <div className="value-container value2" style={{width: barTwoWidth}} onClick={rightClickHandler}><span
          className="text">{barTwoWidth}</span></div>
      </div>
    </div>
  )
};

TwoBars.propTypes = {
  valueOne: PropTypes.number.isRequired,
  valueTwo: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    twoBarsClick: PropTypes.func.isRequired
  })
};

export default TwoBars
