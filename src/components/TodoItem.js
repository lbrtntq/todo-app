import React, { Component } from 'react'


export class TodoItem extends Component {

    getStyle = () => {
        return { 
            backgroundColor: '#f3f3f3', 
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title, completed } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p> 
                    <input 
                        type="checkbox"
                        onChange={this.props.toggleCheck.bind(this,id)}
                        checked={completed}
                    /> { } 
                    {title} { } 
                    <button 
                        style={btnStyle}
                        onClick={this.props.delTodo.bind(this,id)}
                        className="btn-del">X
                    </button>
                </p>
            </div>
        )
    }
}


const btnStyle = {
    background: 'rgb(247 56 56)',
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default TodoItem
