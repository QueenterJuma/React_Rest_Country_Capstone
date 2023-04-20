import { createSlice } from '@reduxjs/toolkit';
import {
  oceaniaCountries,
  filterByCode,
  filterByCapital,
} from './FetchCountry';
// filterByCode,
// filterByCapital,

const initialState = {
  Data: [],
  countryFiltered: [],
  loading: false,
  oceania: '',
  FilterTerm: '',
  message: '',
  error: false,
  success: false,
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    get: (state) => {
      const newState = { ...state };
      newState.message = '';
      newState.oceania = '';
      newState.countryFiltered = [];
      newState.loading = false;
      newState.success = false;
      newState.error = false;
      return newState;
    },
    getOcenia: (state, action) => {
      const newState = { ...state };
      newState.oceania = action.payload;
      return newState;
    },
    getFilterTerm: (state, action) => {
      const newState = { ...state };
      newState.FilterTerm = action.payload;
      return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(oceaniaCountries.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(oceaniaCountries.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.Data = action.payload;
        newState.success = true;
        return newState;
      })
      .addCase(oceaniaCountries.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.Data = [];
        newState.message = action.payload;
        newState.error = true;
        return newState;
      })
      .addCase(filterByCode.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(filterByCode.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        // newState.message = action.payload;
        newState.error = true;
        newState.countryFiltered = action.payload;
        return newState;
      })
      .addCase(filterByCode.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.Data = action.payload;
        newState.success = true;
        return newState;
      })
      .addCase(filterByCapital.pending, (state) => {
        const newState = { ...state };
        newState.loading = true;
        return newState;
      })
      .addCase(filterByCapital.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.message = action.payload;
        newState.error = true;
        newState.countryFiltered = [];
        return newState;
      })
      .addCase(filterByCapital.rejected, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.Data = action.payload;
        newState.success = true;
        return newState;
      });
  },
});

export const { get, getFilterTerm, getOcenia } = countriesSlice.actions;
export default countriesSlice.reducer;
