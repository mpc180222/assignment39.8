import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', () => {
  render(<BoxList/>);
  
});

it("should match snapshot", () => {
  const { asFragment } = render(<BoxList />)
  expect(asFragment()).toMatchSnapshot();
})

it("should render a new orange box, and delete said box", () => {
   
    const {queryByTestId} = render(<BoxList />)
    const widthInput = queryByTestId("new-box-width-input");
    const heightInput = queryByTestId("new-box-height-input");
    const colorInput = queryByTestId("new-box-color-input");
    const submitBtn = queryByTestId("new-box-submit-btn");

    
    fireEvent.change(widthInput, {target: {value: '100'}});
    fireEvent.change(heightInput, {target: {value: '100'}});
    fireEvent.change(colorInput, {target: {value: 'orange'}});
    fireEvent.click(submitBtn);
    expect(queryByTestId("orange")).toBeInTheDocument();
    const removeBtn = queryByTestId("remove-orange");
    fireEvent.click(removeBtn);

})

it("should delete the blue box from initial state", () => {
    const {queryByTestId} = render(<BoxList />)
    expect(queryByTestId("blue")).toBeInTheDocument();
    const removeBtn = queryByTestId("remove-blue");
    fireEvent.click(removeBtn);
    expect(queryByTestId("blue")).not.toBeInTheDocument();
    
})