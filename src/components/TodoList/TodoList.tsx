import React from 'react'
import { Itodo } from '../../interfaces'

type TodoListProps = {
    todos: Itodo[]
    onToggle(id: number): void 
    onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ( { todos, onRemove, onToggle } ) => {
    if (todos.length === 0) {
        return <p className="center">All done! Keep up the good work!</p>
    }

    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if (todo.completed) {
                    classes.push('completed')
                }

                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input type="checkbox"
                             checked={todo.completed} 
                             onChange={onToggle.bind(null, todo.id)}></input>
                            <span>{todo.title}</span>
                            <i className="material-icons red-text"
                            onClick={() => onRemove(todo.id)}>delete</i>
                        </label>
                    </li> 
                )
            })}
            
        </ul>
    )
}