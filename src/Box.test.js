import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Box from './Box';

it('renders without crashing', () => {
  render(<Box widthData='100' heightData='100' colorData='orange'    />);
  
});

it("should match snapshot", () => {
  const { asFragment } = render(<Box />)
  expect(asFragment()).toMatchSnapshot();
})