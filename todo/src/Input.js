import React, { Component } from 'react';

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

export default Input;
