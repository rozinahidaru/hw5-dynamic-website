import React, { useState, Component } from 'react'
import { connect } from 'react-redux'

import { editIntro } from '../actions/index'

class EditIntro extends Component {
  constructor(props) {
    super(props)
    this.state = { description: '', img: '', editing: false }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const { description, img, editing } = this.state
    const { props } = this.props
    // const [editingState, editEditing] = useState(editing)
    // const [descrState, editDescription] = useState('')
    // const [imgState, editImage] = useState('')
    return (
      <form
        name="bioForm"
        onSubmit={e => {
          e.preventDefault()
          editIntro({ description, img })
          // editEditing(false)
          // this.setState({ description, img, editing: false })
          this.props.onIntroChanged(description, img, false)
          console.log(editing)
        }}
      >
        <div>
          <input type="text" name="description" placeholder="Enter your bio!" value={description} onChange={e => this.handleChange(e)} />
        </div>
        <div>
          <input type="text" name="img" placeholder="Insert your picture's URL!" value={img} onChange={e => this.handleChange(e)} />
        </div>
        <button
          type="button"
          onClick={() => this.props.onEditCanceled()}
        >
          Cancel Changes
        </button>
        <button type="submit">Save</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  editIntro: intro => dispatch(editIntro(intro)),
})

export default connect(null, mapDispatchToProps)(EditIntro)

/*
const EditIntro = data => {

//   const descrState = description ? intro.description : ''
//   const [description, editDescription] = useState(descrState)
//   const imgState = intro.img ? intro.img : ''
//   const [img, editImage] = useState(imgState)
  // const descrState = description
  // const imgState = img
  // const editingState = editing
  // const setEditing = (bool, editingState)
  const { intro } = data
  console.log('param: ', intro)
  const { description, img, editing } = intro
  console.log('at the start, editing = ', editing)
  const [editingState, editEditing] = useState(true)
  const [descrState, editDescription] = useState('')
  const [imgState, editImage] = useState('')

  // console.log('in editintro')

  return (
    <form
      name="bioForm"
      onSubmit={e => {
        e.preventDefault()
        editIntro({ description, img })
        // editEditing(false)
        editing = false
        console.log(editing, editingState)
      }}
    >
      <div>
        <input type="text" id="descr" placeholder="Enter your bio!" value={descrState} onChange={e => editDescription(e.target.value)} />
      </div>
      <div>
        <input type="text" id="img" placeholder="Insert your picture's URL!" value={imgState} onChange={e => editImage(e.target.value)} />
      </div>
      <button
        type="button"
        onClick={() => editEditing(false)}
      >
        Cancel Changes
      </button>
      <button type="submit">Save</button>
    </form>
  )
} */
