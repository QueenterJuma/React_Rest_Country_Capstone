import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import HomeInfo from '../components/Homeinfo';
import { oceaniaCountries } from '../redux/country/FetchCountry';
import '@testing-library/jest-dom/extend-expect';

describe('HomeInfo', () => {
  const mockStore = configureStore([thunk]);
  const initialState = {
    country: {
      Data: [
        {
          name: { common: 'United States' },
          population: 328239523,
          capital: 'Washington, D.C.',
          subregion: 'North America',
          languages: {
            eng: 'English',
          },
          flags: {
            png: 'https://restcountries.com/data/usa.png',
            alt: 'Flag of the United States',
          },
          cioc: 'USA',
        },
        {
          name: { common: 'Canada' },
          population: 37697183,
          capital: 'Ottawa',
          subregion: 'North America',
          languages: {
            eng: 'English',
            fra: 'French',
          },
          flags: {
            png: 'https://restcountries.com/data/can.png',
            alt: 'Flag of Canada',
          },
          cioc: 'CAN',
        },
      ],
      loading: false,
      oceania: ['Canberra'],
      FilterTerm: '',
    },
  };
  const store = mockStore(initialState);
  it('renders home info cards correctly', async () => {
    const { getByText, getAllByRole } = render(
      <Router>
        <Provider store={store}>
          <HomeInfo />
        </Provider>
      </Router>,
    );
    expect(getByText('United States')).toBeInTheDocument();
    expect(getByText('Canada')).toBeInTheDocument();
    const cards = getAllByRole('link');
    expect(cards).toHaveLength(2);
    await store.dispatch(oceaniaCountries());
    const state = store.getState();
    expect(state.country.oceania).toHaveLength(1);
  });
});
