import { RECIEVE_ERRORS } from '../actions/session_actions'

export default (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECIEVE_ERRORS:
      return action.errors
    default:
      return state
  }
} 