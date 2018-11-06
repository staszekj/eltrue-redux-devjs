import React from "react";
import ReactDOM from "react-dom";
import MainApp from "app/containers/main-app";
import {create} from 'app/redux'
import {Provider} from 'react-redux';

const newStore = create();

ReactDOM.render(
  <Provider store={newStore}>
    <MainApp/>
  </Provider>,

  document.querySelector('#main-app')
);
