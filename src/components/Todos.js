import React, { Component } from 'react'
import TodoItem from './TodoItem'

export class Todos extends Component {
    
    render() {
        return (
            this.props.todos.map(todo=>
            <TodoItem 
                key={todo.id} 
                todo={todo} 
                toggleCheck={this.props.toggleCheck}
                delTodo={this.props.delTodo} />)
        )
    }
}

export default Todos
