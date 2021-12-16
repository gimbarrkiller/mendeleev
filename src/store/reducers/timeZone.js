import { SET_TIME_ZONE_DATA } from '../actions'

const initialState = {}

const timeZone = (state = initialState, action) => {
  switch (action.type) {
    case SET_TIME_ZONE_DATA:
      return ({
        ...action.data,
      })
    default:
      return state
  }
}
export default timeZone