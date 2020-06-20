import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useShallowEqualSelector } from '../../hooks'

import { Layout } from '../../components'

export default ({
  component: Component,
  ...rest
}) => {
  const auth = useShallowEqualSelector(state => state.auth)

  if (!auth.isLogged) return <Redirect to='/' />

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  )
}
