import { combineReducers } from 'redux'

const introduction = (state = {}, action) => {
  const { type, intro } = action
  if (type === 'EDIT_INTRO') {
    return intro
  }
  return state
}

const editpost = (state = {}, action) => {
  const { type, post } = action
  if (type === 'EDIT_POST') {
    return post
  }
  return state
}

const addpost = (state = {}, action) => {
  const { type, post } = action
  if (type === 'ADD_POST') {
    return post
  }
  return state
}

const finalReducer = combineReducers({ introduction, editpost, addpost })

export default finalReducer
