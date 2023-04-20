import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const url = 'https://restcountries.com/v3.1/region/oceania';
// 'https://restcountries.com/v3.1/region/africa';

export const oceaniaCountries = createAsyncThunk(
  'countries/oceania',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// export default oceaniaCountries;

export const filterByCode = createAsyncThunk(
  'countries/filterByCode',
  async (code, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/alpha?codes=${code}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const filterByCapital = createAsyncThunk(
  'countries/filterByCapital',
  async (capital, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/capital/${capital}`
      );
      // const data = await response.axios();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
