import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import todoApp from './reducers/reducers'

import { Router, Route, browserHistory } from 'react-router'

import configureStore from './stores';
// let store = createStore(todoApp)
const store = configureStore();
render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)