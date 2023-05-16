// import {configureStore} from '@reduxjs/toolkit';
import {combineReducers, legacy_createStore as createStore} from 'redux';
// import {applyMiddleware, combineReducers} from 'redux';
import inputReducer from './reducer';

const rootReducer = combineReducers({reducer: inputReducer});

const configStore = () => {
  return createStore(rootReducer);
};

export default configStore;
