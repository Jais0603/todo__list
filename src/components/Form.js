import React from 'react'

 // this will allows to use the uuidv4 function from the 'uuid package to generate unique identifiers 
import { v4 as uuidv4} from "uuid";


const Form = ({input, setInput, todos, setTodos}) => {

//   this will update the input state varibale whenever the user types into the todo list 
    const onInputChange =(event) =>{
       setInput(event.target.value); 
    }



// this line of code will handle the form submission events and prevent the default form submission 
    const onFormSubmit =(event)=>{
        event.preventDefault();
        setTodos([...todos,{id:uuidv4(), title: input, completed: false}]);
        setInput("")
    }


  return (
    <>
     {/* making form to add task in todos lists. */}
    <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Enter a todo......" 
        className='task-input'
        value={input}
        required onChange={onInputChange}/>
        <button className='button-add' type='submit'>ADD</button>
    </form>
    </>
  )
}

export default Form
