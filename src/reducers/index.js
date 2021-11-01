import { combineReducers } from 'redux'

import introduction from './introduction'

const rootReducer = combineReducers({ introduction })
console.log('in action intro')

export default rootReducer
