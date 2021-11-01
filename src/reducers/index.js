import { combineReducers } from 'redux'

// import introduction from './introduction'

const introduction = (state = {}, action) => {
  const { type, intro } = action
  if (type === 'EDIT_INTRO') {
    console.log('action returned true for editintro')
    return intro
  }
  console.log('returned false in action for edit intro')
  return state
}

const finalReducer = combineReducers({ introduction })

export default finalReducer
