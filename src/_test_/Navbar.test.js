import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import store from '../redux/store';

describe('Navbar rendering', () => {
  test('Navbar renders without crashing', () => {
    const render = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>,
    );
    expect(render).toMatchSnapshot();
  });
});
