import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Header from './Header'
import Footer from './Footer'

const App: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Header mode="expanded" />

      <main>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </main>

      <Footer />
    </HashRouter>
  )
}

export default App
