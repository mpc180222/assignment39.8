import React from 'react';


const Todo = ({todo, removeTodo, id}) => {

return(

    <div>
    <h2>{todo}</h2>
    <button data-testid={`remove-${todo}`} id = {id} onClick = {removeTodo}>X</button>
    </div>
)



}





export default Todo;