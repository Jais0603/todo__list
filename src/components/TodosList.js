import React from 'react';

const TodosList = ({ todos, setTodos , setEditTodo}) => {
    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };


    const handleComplete = (id) => {
        setTodos(
            todos.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: !item.completed };
                }
                return item;
            })
        );
    };


    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };



    return (
        <div>
            {todos.map((todo) => (
                <li className='list-item' key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        className={'list ${todo.completed ? "completed": ""}'}
                        onChange={(event) => event.preventDefault()} />
                    <div>
                        <button className='button-complete task-button' onClick={() => handleComplete(todo.id)}>
                            <i className='fa fa-check-circle' />
                        </button>
                        <button className='button-edit task-button' onClick={() => handleEdit(todo.id)}>
                            <i className='fa fa-edit' />
                        </button>
                        <button className='button-delete task-button' onClick={() => handleDelete(todo.id)}>
                            <i className='fa fa-trash' />
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default TodosList;