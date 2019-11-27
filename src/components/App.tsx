import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'overmind-react'

import store from '../store'
import Home from '../pages/Home'
import Header from './Header'
import Footer from './Footer'
import PlateModal from './PlateModal'

const App: React.FunctionComponent = () => (
  <Provider value={store}>
    <HashRouter>
      <Header mode="expanded" />

      <main>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </main>

      <Footer />
      <PlateModal />
    </HashRouter>
  </Provider>
)

export default App
