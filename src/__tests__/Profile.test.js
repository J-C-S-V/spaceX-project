import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Rockets from '../components/Rockets';
import store from '../redux/store';

describe('Testing component rendering properly', () => {
  test('renders Profile component', () => {
    const rocket = render(
      <BrowserRouter>
        <Provider store={store}>
          <Rockets />
        </Provider>
      </BrowserRouter>,
    );
    expect(rocket).toMatchSnapshot();
  });
});
