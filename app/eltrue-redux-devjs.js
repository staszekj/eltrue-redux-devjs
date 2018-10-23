import React from "react";
import ReactDOM from "react-dom";
import MainApp from "app/containers/main-app";
import store from 'app/redux'
import {Provider} from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <MainApp/>
  </Provider>,

  document.querySelector('#main-app')
);
