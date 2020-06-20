import { teams as consts } from '../constants'

const initialState = {
  isFetching: false,
  list: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case consts.FETCH_TEAMS:
      return {
        ...state,
        isFetching: true
      }

    case consts.RECEIVE_TEAMS:
      return {
        isFetching: false,
        list: action.payload
      }

    case consts.FAIL_TEAMS:
      return {
        ...state,
        isFetching: false
      }

    default:
      return state
  }
}
