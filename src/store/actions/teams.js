import { api } from '../../api'
import { teams as consts } from '../constants'

export const getTeams = () => async dispatch => {
  try {
    dispatch({
      type: consts.FETCH_TEAMS
    })

    const response = await api.get('/temp/serie_a_competition.json')

    const teams = response.data.SoccerFeed.SoccerDocument
    const transformedArray = []

    teams.Team.forEach(team => {
      return teams.Competition.TeamStandings.TeamRecord.forEach(record => {
        const teamId = record['@attributes'].TeamRef

        if (team['@attributes'].uID === teamId) {
          transformedArray.push({
            id: +teamId.substr(1),
            Name: team.Name,
            Cover: `http://images.akamai.opta.net/football/team/badges_150/${teamId.substr(1)}.png`,
            ...record.Standing
          })
        }
      })
    })

    dispatch({
      type: consts.RECEIVE_TEAMS,
      payload: transformedArray
    })
  } catch (error) {
    dispatch({
      type: consts.FAIL_TEAMS
    })
  }
}
