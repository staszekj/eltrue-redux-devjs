import React from "react";
import './main-app.scss'
import TwoInputs from 'app/containers/two-inputs'
import TwoBars from 'app/components/two-bars'
import PropTypes from "prop-types";

const formatValue = value => isNaN(value) ? '_' : value + '';

const MainApp = props => {
  const {valueOne, valueTwo, result, actions} = props;
  const valueOneAsString = formatValue(valueOne);
  const valueTwoAsString = formatValue(valueTwo);
  const resultAsString = formatValue(result);

  return (
    <div className="main-app">
      {/*<div className="header">*/}
      {/*<span className="header-value-1">{valueOneAsString}</span>&nbsp;+&nbsp;<span*/}
      {/*className="header-value-2">{valueTwoAsString}</span>&nbsp;=&nbsp;*/}
      {/*<span className="header-value-result">{resultAsString}</span>*/}
      {/*</div>*/}
      <div className="main">
        {/*<TwoBars*/}
        {/*valueOne={valueOne}*/}
        {/*valueTwo={valueTwo}*/}
        {/*actions={actions}*/}
        {/*/>*/}
        <TwoInputs/>
      </div>

    </div>
  )
};

MainApp.propTypes = {
  valueOne: PropTypes.number.isRequired,
  valueTwo: PropTypes.number.isRequired,
  result: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    twoBarsClick: PropTypes.func.isRequired
  }).isRequired
};

export default MainApp
