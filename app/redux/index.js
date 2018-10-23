import thunk from 'redux-thunk';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import twoInputs from 'app/redux/two-inputs'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({twoInputs});
export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
