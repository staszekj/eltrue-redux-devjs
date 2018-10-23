import {connect} from 'react-redux'
import TwoInputs from "app/components/two-inputs";
import {twoInputsChange} from 'app/redux/two-inputs'
import {selectTwoInputsValueOne, selectTwoInputsValueTwo, selectTwoInputsResult} from 'app/selectors'

const mapStateToProps = state => {
  return {
    valueOne: selectTwoInputsValueOne(state),
    valueTwo: selectTwoInputsValueTwo(state),
    result: selectTwoInputsResult(state)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      twoInputsChange: (valueOne, valueTwo, result) => dispatch(twoInputsChange(valueOne, valueTwo, result))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TwoInputs);
