import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect, useLocation, useHistory } from 'react-router-dom'
import './app.scss'
import Index from './Index'

function App() {
  return (
    <Router>
      <Route path="/" exact children={<Index />}></Route>

      <Redirect to="/" />
    </Router>
  )
}

function DocsRoutes() {

}

function demoRoutes() {

}

export default App