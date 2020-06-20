import React from 'react'
import PropTypes from 'prop-types'

import { Spinner } from './styled'

export default function Loader ({ overlay }) {
  return <Spinner overlay={overlay} />
}

Loader.propTypes = {
  overlay: PropTypes.bool
}
