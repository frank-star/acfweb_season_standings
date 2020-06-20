import styled, { css } from 'styled-components/macro'
import { size } from 'polished'

import { spinner } from './images'

import { colors } from '../../styles'

const Spinner = styled.div`
  ${size('100%', '100%')};
  background: url(${spinner}) no-repeat center / 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6.4rem 0;

  ${({ overlay }) => overlay && css`
    background-color: ${colors.white};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
  `}
`

export {
  Spinner
}
