import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import App from './app'
import PureApp from './pure-app'

import store from './store'

ReactDOM.render(
  <div className="container">
    <PureApp />
  </div>,
  document.getElementById('view'),
)
