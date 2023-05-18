import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import store from '../redux/store';

describe('renders component properly', () => {
  test('renders Header component', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('displays the logo properly', () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    const logoElement = getByAltText('logo');
    expect(logoElement).toMatchSnapshot();
  });
});
