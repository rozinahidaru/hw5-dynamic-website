/*
import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/App'

ReactDOM.render(<App />, document.getElementById('react-root'))
*/

import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import App from './src/App'
import rootReducer from './src/reducers/index'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-root'),
)
