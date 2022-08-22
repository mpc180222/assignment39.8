import React, { useState } from 'react';
import Todo from './Todo';
import {v4 as uuid} from "uuid";
import NewTodoForm from './NewTodoForm';

const TodoList = () => {

    const INITIAL_STATE = [ 
        {todo: 'Mow lawn',
        id: uuid()},
        {todo: 'Wash dishes',
        id: uuid()}
    ]

    const [todoData, setTodoData] = useState(INITIAL_STATE);

    const addTodo = (newTodo) => {setTodoData(todoData => [...todoData, {...newTodo, id: uuid()}] )}
    const removeTodo = (e) => {
        console.log(e.target.id)
        setTodoData(todoData.filter(item => item.id !== e.target.id))

    }

    return(
        <div>
            {todoData.map(item => <Todo todo = {item.todo} id = {item.id} removeTodo = {removeTodo} />)}
            <NewTodoForm addTodo={addTodo} />
        </div>


    )


}


export default TodoList;