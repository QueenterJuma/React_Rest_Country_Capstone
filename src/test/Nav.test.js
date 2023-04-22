import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';
import '@testing-library/jest-dom/extend-expect';

describe('Navbar', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders without errors', () => {
    const { getByRole } = render(<Navbar />);
    const navbarElement = getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });
});
