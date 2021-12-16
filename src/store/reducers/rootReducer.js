import { combineReducers } from 'redux'

import profile from './profile'
import timeZone from './timeZone'
import login from './login'

const rootReducer = combineReducers({
  profile,
  timeZone,
  login,
})

export default rootReducer