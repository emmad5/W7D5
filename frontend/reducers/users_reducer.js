import {RECIEVE_CURRENT_USER, LOGOUT_USER} from '../actions/session_actions'

export default (state = {}, action) => {
  Object.freeze(state)

  switch(action.type) {
    case RECIEVE_CURRENT_USER:
      return action.user;
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
}
