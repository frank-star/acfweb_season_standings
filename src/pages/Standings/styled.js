import styled from 'styled-components/macro'
import { size } from 'polished'

const Standings = styled.div`
`

const Teams = styled.div`
`

Teams.Overflow = styled.div`
  width: 100%;
  max-width: 92rem;
  overflow-x: auto;

  .rc-table {
    min-width: 78rem;
  }
`

Teams.Position = styled.div`
  font-weight: 900;
  font-size: 1.6rem;
`

Teams.Item = styled.div`
  display: flex;
  align-items: center;
`

Teams.Item.Cover = styled.div`
  ${size('3.2rem', '3.2rem')};
  background: url(${({ src }) => src}) no-repeat center / contain;
`

Teams.Item.Name = styled.div`
  font-weight: 600;
  margin-left: .8rem;
`

export {
  Standings,
  Teams
}
