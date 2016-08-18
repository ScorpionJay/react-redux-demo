import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo,completeTodo ,fetchList} from '../actions/actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'

class App extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, reducerTodos } = this.props
    return (
      <div>
        Find
      </div>
    )
  }
}


function map(state) {
  console.log("state" , state )
  return {
    reducerTodos: state.todos
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(map)(App)