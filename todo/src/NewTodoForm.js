import React, { useState } from 'react';
import TodoList from './TodoList';

const NewTodoForm = ({addTodo}) => {

    const INITIAL_STATE = {
        todo: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleSubmit = (e) => {

        e.preventDefault();
        addTodo({todo: formData.todo})
        setFormData(INITIAL_STATE);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData, [name]: value
        }))

    }

    return(

        <form onSubmit = {handleSubmit}>
            <input data-testid="new-todo-input" name = "todo" placeholder = "new todo" value = {formData.todo} onChange = {handleChange}></input>    
        <button data-testid = "submit-todo-input">Add todo</button>
        </form>


    )


}

export default NewTodoForm;