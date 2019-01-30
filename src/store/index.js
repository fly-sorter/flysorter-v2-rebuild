import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import partsReducer from '../store/reducers/parts-reducer.js';
import editReducer from '../store/reducers/edit-reducer.js';
import saveReducer from '../store/reducers/save-reducer.js';

let reducers = combineReducers({
  parts: partsReducer,
  edit: editReducer,
  save: saveReducer,
});

const store = () => 
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;