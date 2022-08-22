import React from 'react';
import { render, screen } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

it('renders without crashing', () => {
  render(<NewTodoForm />);
  
});

it("should match snapshot", () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();

})