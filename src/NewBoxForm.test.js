import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

it('renders without crashing', () => {
  render(<NewBoxForm/>);
  
});

it("should match snapshot", () => {
  const { asFragment } = render(<NewBoxForm />)
  expect(asFragment()).toMatchSnapshot();
})