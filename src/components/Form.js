import React , { useEffect}from 'react'

 // this will allows to use the uuidv4 function from the 'uuid package to generate unique identifiers 
import { v4 as uuidv4} from "uuid";

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {

    const updateTodo = (title, id, completed) => {
        const newTodos = todos.map(todo =>
            todo.id === id ? { ...todo, title, completed } : todo
        );
        setTodos(newTodos);
        setEditTodo(null);
    };
    useEffect(()=>{
        if(editTodo){
         setInput(editTodo.title);   
        }else{
            setInput("")
        }
    }, [setInput, editTodo]
)

//   this will update the input state varibale whenever the user types into the todo list 
    const onInputChange =(event) =>{
       setInput(event.target.value); 
    }

// this line of code will handle the form submission events and prevent the default form submission 
    const onFormSubmit =(event)=>{
        event.preventDefault();
        if(!editTodo){
            setTodos([...todos,{id:uuidv4(), title: input, completed: false}]);
            setInput("");
        }else{
           updateTodo(input, editTodo.id, editTodo.completed) 
        }
       
    }

  return (
    <>
     {/* making form to add task in todos lists. */}
    <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Enter a todo......" 
        className='task-input'
        value={input}
        required onChange={onInputChange}/>



        {/* the editTodo? ok:add will change the the button to ok when we click on edit button */}
        <button className='button-add' type='submit'>
            {editTodo ? "OK" : "Add"}
        </button>
    </form>
    </>
  )
}

export default Form

