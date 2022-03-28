import React, { useState } from 'react';
//mock data
import data from "./data.json";
//components
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from './components/TodoForm';

function App() {
  
  const [ todoList, setTodoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = todoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setTodoList(mapped);
  }

  const handleFilter = () => {
    let filtered = todoList.filter(task => {
      return !task.complete;
    });
    setTodoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...todoList];
    copy = [...copy, { id: todoList.length + 1, task: userInput, complete: false }];
    setTodoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <TodoList todoList={todoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      <TodoForm addTask={addTask}/>
    </div>
  );
}

export default App;
