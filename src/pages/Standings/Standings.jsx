import React, { useEffect, useCallback } from 'react'
import { teams as teamsActions } from '../../store/actions'

import {
  useActions,
  useShallowEqualSelector
} from '../../hooks'

import {
  Loader,
  Table
} from '../../components'

import {
  Standings,
  Teams
} from './styled'

export default ({ match }) => {
  const teams = useShallowEqualSelector(state => state.teams)

  const [teamsDispatch] = useActions([teamsActions])
  const getTeams = useCallback(teamsDispatch.getTeams, [teamsDispatch])

  useEffect(() => {
    getTeams()
  }, [])

  return (
    <Standings>
      <Teams>
        {!teams.isFetching ? (
          <Teams.Overflow>
            <Table
              rowClassName={row => row.id === +match.params.id ? 'row-selected' : ''}
              rowKey='Position'
              data={teams.list}
              columns={[
                {
                  title: 'Positions',
                  dataIndex: 'Position',
                  key: 'Position',
                  render: el => <Teams.Position>{el}</Teams.Position>
                },
                {
                  dataIndex: 'Name',
                  key: 'Name',
                  render: (el, cols) => (
                    <Teams.Item>
                      <Teams.Item.Cover src={cols.Cover} />
                      <Teams.Item.Name>{el}</Teams.Item.Name>
                    </Teams.Item>
                  )
                },
                {
                  title: 'Pts.',
                  dataIndex: 'Points',
                  key: 'Points',
                  render: row => <strong>{row}</strong>
                },
                {
                  title: 'P.',
                  dataIndex: 'Played',
                  key: 'Played'
                },
                {
                  title: 'W.',
                  dataIndex: 'Won',
                  key: 'Won'
                },
                {
                  title: 'D.',
                  dataIndex: 'Drawn',
                  key: 'Drawn'
                },
                {
                  title: 'L.',
                  dataIndex: 'Lost',
                  key: 'Lost'
                },
                {
                  title: 'GF.',
                  dataIndex: 'gf',
                  key: 'gf',
                  render: () => <span>0</span>
                },
                {
                  title: 'GA.',
                  dataIndex: 'ga',
                  key: 'ga',
                  render: () => <span>0</span>
                },
                {
                  title: 'GD.',
                  dataIndex: 'gd',
                  key: 'gd',
                  render: () => <span>0</span>
                }
              ]}
            />
          </Teams.Overflow>
        ) : <Loader />}
      </Teams>
    </Standings>
  )
}
