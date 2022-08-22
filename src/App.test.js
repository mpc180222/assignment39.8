import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  render(<App />);
  
});

it("should match snapshot", () => {
  const { asFragment } = render(<App />)
  expect(asFragment()).toMatchSnapshot();
})
