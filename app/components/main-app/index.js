import React from "react";
import './main-app.scss'
import TwoInputs from 'app/containers/two-inputs'
import TwoBars from 'app/components/two-bars'
import PropTypes from "prop-types";

const MainApp = props => {
  const {valueOne, valueTwo, result} = props;
  const valueOneAsString = valueOne + '';
  const valueTwoAsString = valueTwo + '';
  const resultAsString = result + '';

  return (
    <div className="main-app">
      <div className="header">
        <span className="header-value-1">{valueOneAsString}</span>&nbsp;+&nbsp;<span
        className="header-value-2">{valueTwoAsString}</span>&nbsp;=&nbsp;
        <span className="header-value-result">{resultAsString}</span>
      </div>
      <div className="body">
        <TwoBars {...props}/>
        <TwoInputs/>
      </div>

    </div>
  )
};

MainApp.propTypes = {
  valueOne: PropTypes.number.isRequired,
  valueTwo: PropTypes.number.isRequired,
  result: PropTypes.number.isRequired
};

export default MainApp
