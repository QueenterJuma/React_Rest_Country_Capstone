import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './country/CountryInfoSlice';

const store = configureStore({
  reducer: {
    country: countriesReducer,
  },
});

export default store;
