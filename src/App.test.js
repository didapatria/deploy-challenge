/* eslint-disable jest/valid-title */
import { render, cleanup, screen } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom'

import { Provider } from 'react-redux'
import store from './store'

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

afterEach(cleanup);

// Definition of test
describe('UI Test', () => {
  test('renders button register on navbar', () => {
    const register = screen.getByText(/Register/i)
    expect(register).toBeInTheDocument()
  });

  // test('renders image service', () => {
  //   const img_service = screen.getByRole('img')
  //   expect(img_service).toHaveAttribute('src', './img/img_service.png')
  //   expect(img_service).toHaveAttribute('alt', 'service')
  // });
})

describe('Functional Test', () => {
})

