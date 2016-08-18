import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Routers from './routers'
import todoApp from './reducers/reducers'

import { Router, Route, hashHistory } from 'react-router'

import configureStore from './stores';

require('./sass/_main')

const store = configureStore();
render(
  <Provider store={store}>
    <Router history={hashHistory} routes={Routers} />
  </Provider>,
  document.getElementById('root')
)