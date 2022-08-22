import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from './Todo';

it('renders without crashing', () => {
  render(<Todo />);
  
});

it("should match snapshot", () => {
  const { asFragment } = render(<Todo />);
  expect(asFragment()).toMatchSnapshot();

})