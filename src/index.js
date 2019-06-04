import React from 'react'
import ReactDOM from 'react-dom'
import ExampleComponent from './components/ExampleComponent'

const app = document.getElementById('app')

ReactDOM.render(
  <ExampleComponent myProp="functional" />,
  app
)