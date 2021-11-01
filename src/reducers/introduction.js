const introduction = (state = {}, action) => {
  const { type, intro } = action
  if (type === 'EDIT_INTRO') {
    return intro
  }
  return state
}

export default introduction
