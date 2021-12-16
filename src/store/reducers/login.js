import { SET_LOGIN_DATA } from '../actions'

const initialState = {}

const login = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_DATA:
      return action.payload
    default:
      return state
  }
}
export default login;