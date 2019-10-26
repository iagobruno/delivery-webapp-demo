import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'

const App: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </HashRouter>
  )
}

export default App
