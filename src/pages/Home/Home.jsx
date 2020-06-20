import React from 'react'
import { Link } from 'react-router-dom'

import { Home } from './styled'

export default () => (
  <Home>
    <Link to='/standings/456'>Go to Standings</Link>
  </Home>
)
