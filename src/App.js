import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import DemoRoutes from "./demos/Routes"
import DocLayout from "./docs/Layout"
import './app.scss'
import Index from './Index'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact children={<Index />} />
        <Route path="/demos" children={<DemoRoutes />} />
        <Route path="/docs" children={<DocLayout />} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}


export default App