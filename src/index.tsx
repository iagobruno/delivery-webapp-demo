import * as React from 'react'
import { render } from 'react-dom'
import './polyfills'
import App from './components/App'

render(
  <App/>,
  document.querySelector('#root')
)
