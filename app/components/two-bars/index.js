import React from "react";
import PropTypes from "prop-types";
import {LEFT_BAR, RIGHT_BAR} from "app/actions";

export const MAX_VALUE = 300;
export const TOO_BIG_DATA_MESSAGE = `Bigger than ${MAX_VALUE}. Please buy Premium Version.`;

const isBarTooBig = (barOneWidth, barTwoWidth) => barOneWidth + barTwoWidth > MAX_VALUE;

const BarContent = ({barOneWidth, barTwoWidth, leftClickHandler, rightClickHandler}) => {
  if (isBarTooBig(barOneWidth, barTwoWidth)) {
    return '';
  }

  const barOneLabel = barOneWidth !== 0 ? barOneWidth + '' : '';
  const barTwoLabel = barTwoWidth !== 0 ? barTwoWidth + '' : '';

  return (<div className="values">
    <div className="value-container value1" style={{width: barOneWidth}} onClick={leftClickHandler}><span
      className="text">{barOneLabel}</span></div>
    <div className="value-container value2" style={{width: barTwoWidth}} onClick={rightClickHandler}><span
      className="text">{barTwoLabel}</span></div>
  </div>)
};
BarContent.propTypes = {
  barOneWidth: PropTypes.number.isRequired,
  barTwoWidth: PropTypes.number.isRequired,
  rightClickHandler: PropTypes.func.isRequired,
  leftClickHandler: PropTypes.func.isRequired
};

const EmptyContent = ({barOneWidth, barTwoWidth}) => {
  if (!isBarTooBig(barOneWidth, barTwoWidth)) {
    return '';
  }
  return (<span>{TOO_BIG_DATA_MESSAGE}</span>)
};
EmptyContent.propTypes = {
  barOneWidth: PropTypes.number.isRequired,
  barTwoWidth: PropTypes.number.isRequired,
};

const TwoBars = ({valueOne, valueTwo, actions}) => {
  const barOneWidth = isNaN(valueOne) || valueOne < 0 ? 0 : valueOne;
  const barTwoWidth = isNaN(valueTwo) || valueTwo < 0 ? 0 : valueTwo;

  const leftClickHandler = () => {
    actions.twoBarsClick(LEFT_BAR)
  };

  const rightClickHandler = () => {
    actions.twoBarsClick(RIGHT_BAR)
  };

  return (
    <div className="left-panel">
      <BarContent
        barOneWidth={barOneWidth}
        barTwoWidth={barTwoWidth}
        rightClickHandler={rightClickHandler}
        leftClickHandler={leftClickHandler}
      />
      <EmptyContent barTwoWidth={barTwoWidth} barOneWidth={barOneWidth}/>
    </div>)
};

TwoBars.propTypes = {
  valueOne: PropTypes.number.isRequired,
  valueTwo: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    twoBarsClick: PropTypes.func.isRequired
  }).isRequired
};

export default TwoBars
