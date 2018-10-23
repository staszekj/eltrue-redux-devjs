import React from 'react';
import {connect} from 'react-redux';
import MainAppCmp from 'app/components/main-app'

const MainApp = (props) => {
  return (<MainAppCmp {...props} />)

};

const mapStateToProps = state => (
  {
    test: state.test
  }
);

const mapDispatchToProps = dispatch => (
  {
    actions: {}
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);

