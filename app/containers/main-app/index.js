import React from 'react';
import {connect} from 'react-redux';
import MainAppCmp from 'app/components/main-app'
import {selectResultAsNumber, selectValueOneAsNumber, selectValueTwoAsNumber} from 'app/selectors'

const MainApp = (props) => {
  return (<MainAppCmp {...props} />)

};

const mapStateToProps = state => (
  {
    valueOne: selectValueOneAsNumber(state),
    valueTwo: selectValueTwoAsNumber(state),
    result: selectResultAsNumber(state),
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: {}
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);

