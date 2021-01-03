import React, { Component } from 'react'
import Header from './components/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/pages/About'
import './App.css';

export class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then((response) => response.json())
    .then((json) => this.setState({todos:json}));
  }

  toggleCheck = (id) => {
    return this.setState({todos: [...this.state.todos].map(todo=>{
      if(todo.id===id) {
        todo.completed = !todo.completed
      }
      return todo
    })})
  }

  delTodo = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: 'DELETE'
    })
    .then((response)=>this.setState({todos: [...this.state.todos].filter(todo=>todo.id !== id)}))
  }

  addTodo = (title) => {
    const data = { 
      title,
      completed: false
    }
    fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },    
      body: JSON.stringify(data)
    })
    .then((response)=> response.json())
    .then((json)=>this.setState({todos:[...this.state.todos, json]}))
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header/>
          <Route exact path="/todo-app">
            <AddTodo 
              addTodo={this.addTodo} 
            />
            <Todos 
              todos={this.state.todos} 
              toggleCheck={this.toggleCheck}
              delTodo={this.delTodo}
            />
          </Route>
          <Route path="/about" component={About}></Route>
        </div>
      </Router>
    )
  }

}

export default App
