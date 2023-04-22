import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const CountriesSlice = () => (
  <div>
    <h1>Country</h1>
  </div>
);

describe('Country', () => {
  test('render React component', () => {
    render(<CountriesSlice />);
    expect(screen.getByText('Country')).toBeInTheDocument();
  });
});
