import React, { useState, useEffect }  from 'react';
import { Navbar } from './components/Navbar/Navbar'
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList'
import { Itodo } from './interfaces';

const App: React.FunctionComponent = (props) => {
  const [todos, setTodos] = useState<Itodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Itodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandler = (title: string) => {
    const newTodo = {
      title: title,
      id: Date.now(),
      completed: false
    }

    // setTodos([newTodo, ...todos])
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed }
      }

      return todo
    }))
  }

  const removeHandler = (id: number) => {
    const shouldRemove = window.confirm('Are you sure you want to remove this item?');

    if (shouldRemove === true) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
    
  } 

  return <>
    <Navbar />
    <div className="container"> 
      <TodoForm onAdd={addHandler} />

      <TodoList
       todos={todos}
       onToggle={toggleHandler}
       onRemove={removeHandler}/>
    </div>
  </>
}

export default App;
