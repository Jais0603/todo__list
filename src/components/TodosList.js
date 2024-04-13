import React from 'react'

const TodosList = ({todos, setTodos}) => {
  return (
    <div>
      {todos.map((todo) => (
    <li className='todo-list' key={todo.id}>
        <input 
            type="text" 
            value={todo.title}
            className='list' 
            onChange={(event) => event.preventDefault()} /> {/* Corrected this line */}
        <div>
        <button className='button-complete task-button'>
        <i className='fa fa-check-circle' />
        </button>
        <button className='button-edit task-button'>
        <i className='fa fa-edit' />
        </button>
        <button className='button-delete task-button'>
        <i className='fa fa-trash' />
        </button>

        </div>
    </li>
))}
</div>
  );
};

export default TodosList;
