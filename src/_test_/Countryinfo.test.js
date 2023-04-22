import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Countryinfo = () => (
  <div>
    <h1>Country</h1>
  </div>
);

describe('Country', () => {
  test('render React component', () => {
    render(<Countryinfo />);
    expect(screen.getByText('Country')).toBeInTheDocument();
  });
});
