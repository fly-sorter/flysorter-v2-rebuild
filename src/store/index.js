import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import partsReducer from '../store/reducers/parts-reducer.js';

let reducers = combineReducers({
  parts: partsReducer,
});

const store = () => 
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;