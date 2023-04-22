import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Home from '../pages/Home';
import store from '../redux/store';

describe('Home', () => {
  test('renders correctly', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
