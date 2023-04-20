import { configureStore } from '@reduxjs/toolkit';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';
import countriesReducer from './country/CountryInfoSlice';

// const store = createStore(rootReducer, applyMiddleware(thunk));

const store = configureStore({
  reducer: {
    country: countriesReducer,
  },
});

export default store;
