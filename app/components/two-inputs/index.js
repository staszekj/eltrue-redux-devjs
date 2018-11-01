import React from "react";
import PropTypes from 'prop-types'

const TwoInputs = props => {
  const {actions, valueOne, valueTwo} = props;
  const {twoInputsChange} = actions;
  const valueOneOnChange = event => {
    twoInputsChange(event.target.value, valueTwo);
  };
  const valueTwoOnChange = event => {
    twoInputsChange(valueOne, event.target.value);
  };

  const extraClassName = props.isResultMod10 ? 'background-color-green' : '';

  return (
    <div className={`right-panel ${extraClassName}`}>
      <input className="input1" value={valueOne} onChange={valueOneOnChange}/>
      <input className="input2" value={valueTwo} onChange={valueTwoOnChange}/>
    </div>
  )
};

TwoInputs.propTypes = {
  valueOne: PropTypes.string.isRequired,
  valueTwo: PropTypes.string.isRequired,
  isResultMod10: PropTypes.bool.isRequired,
  actions: PropTypes.shape({
    twoInputsChange: PropTypes.func.isRequired
  })
};

export default TwoInputs
