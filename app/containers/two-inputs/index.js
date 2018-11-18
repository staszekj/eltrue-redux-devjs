import {connect} from 'react-redux'
import TwoInputs from "app/components/two-inputs";
import {twoInputsChange, selectValueOne, selectValueTwo} from 'app/redux/two-inputs'
import {isResultMod10} from 'app/selectors'

const mapStateToProps = state => {
  return {
    valueOne: selectValueOne(state),
    valueTwo: selectValueTwo(state),
    isResultMod10: isResultMod10(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      twoInputsChange: (valueOne, valueTwo) => dispatch(twoInputsChange(valueOne, valueTwo))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TwoInputs);
