import React, { Component } from 'react';
import List from './List';
import Input from './Input';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todo: [
       { title: 'JavaScript覚える' } ,
       { title: 'jQuery覚える' } ,
       { title: 'ES2015覚える' } ,
       { title: 'React覚える' }
      ]
    };
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(value) {
    this.state.todo.push({ title: value });
    this.setState({ todo : this.state.todo });
  }

  deleteTodo(i) {
    this.state.todo.splice(i, 1);
    this.setState({ todo : this.state.todo });
  }

  render() {
    return (
      <div>
        <h1>TODOアプリ</h1>
        <List todo={this.state.todo} deleteTodo={this.deleteTodo}/>
        <Input addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
