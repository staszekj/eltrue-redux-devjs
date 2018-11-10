import {connect} from 'react-redux';
import MainApp from 'app/components/main-app'
import {twoBarsClick} from 'app/actions'
import {selectResultAsNumber, selectValueOneAsNumber, selectValueTwoAsNumber} from 'app/selectors'

const mapStateToProps = state => (
  {
    valueOne: selectValueOneAsNumber(state),
    valueTwo: selectValueTwoAsNumber(state),
    result: selectResultAsNumber(state),
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: {
      twoBarsClick: (barName) => dispatch(twoBarsClick(barName))
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);

