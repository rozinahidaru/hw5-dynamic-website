// website action objects

export const editIntro = intro => ({
  type: 'EDIT_INTRO',
  intro,
})

export const editPost = post => ({
  type: 'EDIT_POST',
  post,
})

export const addPost = post => ({
  type: 'ADD_POST',
  post,
})
