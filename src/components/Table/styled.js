import styled from 'styled-components/macro'
import RcTable from 'rc-table'

import { colors } from '../../styles'

const Table = styled(RcTable)`
  table {
    width: 100%;
    border-spacing: 0 .5rem;

    .rc-table-thead {
      font-size: 1.1rem;

      tr {
        background-color: ${colors.white};

        .rc-table-cell {
          font-weight: 400;
          padding: 1.6rem 2.8rem;

          &:first-child {
            border-radius: .86rem 0 0 .86rem;
            text-align: left;
          }

          &:last-child {
            border-radius: 0 .86rem .86rem 0;
          }
        }
      }
    }

    .rc-table-tbody {
      font-size: 1.2rem;

      .rc-table-row {
        background-color: ${colors.white};

        &.row-selected {
          background-color: ${colors.brown};
          color: ${colors.white};
        }

        .rc-table-cell {
          padding: .8rem 2.8rem;

          &:not(:first-child) {
            text-align: center;
          }

          &:first-child {
            border-radius: .86rem 0 0 .86rem;
          }

          &:last-child {
            border-radius: 0 .86rem .86rem 0;
          }
        }
      }
    }
  }
`

export {
  Table
}
