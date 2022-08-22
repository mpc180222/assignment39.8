import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

it('renders without crashing', () => {
  render(<TodoList />);
  
});

it("should match snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();

})

it("should remove one of the two initial todos", () => {
    const {queryByTestId} = render(<TodoList/>)
    const removeBtn = queryByTestId("remove-Wash dishes");
    fireEvent.click(removeBtn);
    expect(queryByTestId("remove-Wash dishes")).not.toBeInTheDocument();
  })

  it("should add a new todo", () => {
    const {queryByTestId, getByText} = render(<TodoList/>)
    const submitBtn = queryByTestId("submit-todo-input");
    const todoInput = queryByTestId("new-todo-input");
    fireEvent.change(todoInput, {target: {value: "diapers"}});
    fireEvent.click(submitBtn);
    expect(getByText("diapers")).toBeInTheDocument();
  })