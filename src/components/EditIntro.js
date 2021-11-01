import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editIntro } from '../actions/index'

const EditIntro = ({ description, img, editing }) => {
/*
  const descrState = description ? intro.description : ''
  const [description, editDescription] = useState(descrState)
  const imgState = intro.img ? intro.img : ''
  const [img, editImage] = useState(imgState) */
  // const descrState = description
  // const imgState = img
  // const editingState = editing
  // const setEditing = (bool, editingState)
  const [editingState, setEditing] = useState(editing)
  const [descrState, editDescription] = useState(description)
  const [imgState, editImage] = useState(img)

  // console.log('in editintro')

  return (
    <form
      name="bioForm"
      onSubmit={e => {
        e.preventDefault()
        editIntro({ description, img })
        setEditing(false)
      }}
    >
      <div>
        <input type="text" id="descr" placeholder="Enter your bio!" value={img} onChange={e => editDescription(e.target.value)} />
      </div>
      <div>
        <input type="text" id="img" placeholder="Insert your picture's URL!" value={img} onChange={e => editImage(e.target.value)} />
      </div>
      <button type="button" onClick={() => setEditing(false)}>Cancel Changes</button>
      <button type="submit">Save</button>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  editIntro: intro => dispatch(editIntro(intro)),
})

export default connect(null, mapDispatchToProps)(EditIntro)
