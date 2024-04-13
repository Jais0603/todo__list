import React,{useState} from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TodosList from './components/TodosList';

const App =()=> {
// useState hooks enable the component to keep track of and update the input value and the list of todos as the component renders and interacts with the user.

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
      <Header/>
        </div>
        <div>
{/* this line of code passes down the state variables and their respective update functions 'setInput' and 'setTodods' as props to child component form. */}
          <Form 
          input ={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          />
        </div>
        <div>
          <TodosList 
          todos ={todos} 
          setTodos={setTodos} 
          setEditTodo={setEditTodo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
