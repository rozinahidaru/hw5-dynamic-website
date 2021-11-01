import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editIntro } from '../actions/index'

const EditIntro = ({ setEditing, intro }) => {
  const descrState = intro.description ? intro.description : ''
  const [description, setDescription] = useState(descrState)
  const imgState = intro.img ? intro.img : ''
  const [img, setImage] = useState(imgState)

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
        <input type="text" id="descr" placeholder="Enter your bio!" value={img} onChange={e => setDescription(e.target.value)} />
      </div>
      <div>
        <input type="text" id="img" placeholder="Insert your picture's URL!" value={img} onChange={e => setImage(e.target.value)} />
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
