import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { history } from './helpers'

import { Loader } from './components'

import { PublicRoute } from './routes'

const Home = lazy(() => import('./pages/Home'))
const Standings = lazy(() => import('./pages/Standings'))

export default () => (
  <Router history={history}>
    <Suspense fallback={<Loader overlay />}>
      <Switch>
        <PublicRoute path='/' component={Home} exact />
        <PublicRoute path='/standings/:id' component={Standings} />

        <Redirect from='*' to='/' />
      </Switch>
    </Suspense>
  </Router>
)
