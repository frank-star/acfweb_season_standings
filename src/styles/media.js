import { css } from 'styled-components'

const breakpoints = {
  xxl: 160,
  xl: 120,
  lg: 99.2,
  md: 76.8,
  sm: 57.6,
  xs: 48
}

export default (sizes = breakpoints) => Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}rem) {
      ${css(...args)}
    }
  `

  return acc
}, {})
