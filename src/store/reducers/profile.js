import { SET_PROFILE_DATA } from "../actions";

const initialState = {}

const profile = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      return ({
        ...action.data,
      })
    default:
      return state
  }
}
export default profile;