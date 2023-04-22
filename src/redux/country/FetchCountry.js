import { createAsyncThunk } from '@reduxjs/toolkit';

export const oceaniaCountries = createAsyncThunk(
  'countries/oceania',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const filterByCode = createAsyncThunk(
  'countries/filterByCode',
  async (code, thunkAPI) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${code}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const filterByCapital = createAsyncThunk(
  'countries/filterByCapital',
  async (capital, thunkAPI) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/capital/${capital}`,
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
