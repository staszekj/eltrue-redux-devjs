import React from "react";
import './main-app.scss'
import TwoInputs from 'app/containers/two-inputs'
import TwoBars from 'app/components/two-bars'
import PropTypes from "prop-types";

const MainApp = props => {
  const {valueOne, valueTwo, valueResult} = props;
  return (
    <div className="main-app">
      <div className="header">
        <span className="header-value-1">{valueOne}</span>&nbsp;+&nbsp;<span
        className="header-value-2">{valueTwo}</span>&nbsp;=&nbsp;
        <span className="header-value-result">{valueResult}</span>
      </div>
      <div className="body">
        <div className="left-panel">
          <TwoBars {...props}/>
        </div>
        <div className="right-panel">
          <TwoInputs/>
        </div>
      </div>

    </div>
  )
};

MainApp.defaultProps = {
  valueOne: 50,
  valueTwo: 70,
  valueResult: 120
};

MainApp.propTypes = {
  valueOne: PropTypes.number,
  valueTwo: PropTypes.number,
  valueResult: PropTypes.number
};

export default MainApp
