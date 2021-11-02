import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import App from './src/App'
import finalReducer from './src/reducers/index'

const store = createStore(finalReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
)
