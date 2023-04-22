import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import Countryinfo from '../pages/Countryinfo';
import '@testing-library/jest-dom/extend-expect';

describe('Countryinfo', () => {
  const mockStore = configureStore();
  const initialState = {
    country: {
      countryFiltered: [
        {
          name: { common: 'United States' },
          population: 328239523,
          capital: 'Washington, D.C.',
          subregion: 'North America',
          languages: {
            eng: 'English',
          },
          timezones: [
            'UTC-12:00',
            'UTC-11:00',
            'UTC-10:00',
            'UTC-09:00',
            'UTC-08:00',
            'UTC-07:00',
            'UTC-06:00',
            'UTC-05:00',
            'UTC-04:00',
            'UTC+10:00',
            'UTC+12:00',
          ],
        },
      ],
    },
  };
  const store = mockStore(initialState);
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <Provider store={store}>
            <Countryinfo />
          </Provider>
        </MemoryRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders country name correctly', () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Countryinfo />
        </Provider>
      </MemoryRouter>,
    );
    expect(screen.getByText('United States')).toBeInTheDocument();
    expect(screen.getByText(328239523)).toBeInTheDocument();
    expect(screen.getByText('North America')).toBeInTheDocument();
  });
});
