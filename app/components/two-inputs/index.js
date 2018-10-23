import React from "react";
import PropTypes from 'prop-types'

const TwoInputs = props => {
  const {actions, valueOne, valueTwo} = props;
  const {inputsTwoChange} = actions;
  const onChange = e => {
    inputsTwoChange(e.target.value, 10, 100);
  };

  return (
    <div>
      <input className="input1" value={valueOne} onChange={onChange}/>
      <input className="input2" value={valueTwo} onChange={onChange}/>
    </div>
  )
};

TwoInputs.propTypes = {
  valueOne: PropTypes.number.isRequired,
  valueTwo: PropTypes.number.isRequired,
  actions: PropTypes.shape({
    twoInputsChange: PropTypes.func.isRequired
  })
};

export default TwoInputs
