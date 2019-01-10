import React, { Component } from 'react';

function List(props){
  return (
    <ul>
      {props.todo.map( (todo, i) => {
        return <li key={i}> <input type="button" value="☓"
                              onClick={() => props.deleteTodo(i)}/> {todo.title}</li>
      })}
    </ul>
  )
};

class Input extends Component {
  constructor(props){
    super(props);
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo(){
    this.props.addTodo(this.refs.newText.value);
    this.refs.newText.value='';
  }
  render() {
    return (
      <div>
        <input type="text" ref="newText"/>
        <input type="button" value="追加" onClick={this.addTodo}/>
      </div>
    )
  }
};

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
