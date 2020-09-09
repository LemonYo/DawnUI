import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import ButtonPage from "./views/button/Index"
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/index" children={<ButtonPage />}></Route>
        <Redirect to="index" />
      </Switch>
    </Router>
  )
}
export default App