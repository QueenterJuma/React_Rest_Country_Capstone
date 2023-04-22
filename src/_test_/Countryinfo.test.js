import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from '../redux/store'
// import configureStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
import Countryinfo from '../pages/Countryinfo';
// const mockStore = configureStore([thunk]);
describe('Countryinfo component', () => {
  beforeEach(() => {
    store({
      country: {
        countryFiltered: [
          {
            name: { common: 'Test Country' },
            population: 1234567,
            timezones: ['UTC+1', 'UTC+2'],
            capital: 'Test Capital',
            languages: {
              eng: { name: 'English' },
              spa: { name: 'Spanish' },
            },
            subregion: 'Test Subregion',
            coatOfArms: { png: 'test.png', alt: 'Test Coat of Arms' },
          },
        ],
      },
    });
  });
  test('renders country information', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/code']}>
          <Route path="/:code">
            <Countryinfo />
          </Route>
        </MemoryRouter>
      </Provider>
    );
    // Wait for API call to complete
    await screen.findByText('Population: 1234567');
    // Check if component is rendered correctly
    expect(screen.getByText('Test Country')).toBeInTheDocument();
    expect(screen.getByText('Population: 1234567')).toBeInTheDocument();
    expect(screen.getByText('Time zone: UTC+1,UTC+2')).toBeInTheDocument();
    expect(screen.getByText('Capital: Test Capital')).toBeInTheDocument();
    expect(screen.getByText('Languages: English,Spanish')).toBeInTheDocument();
    expect(screen.getByText('Subregion: Test Subregion')).toBeInTheDocument();
    expect(screen.getByAltText('Test Coat of Arms')).toBeInTheDocument();
  });
});
