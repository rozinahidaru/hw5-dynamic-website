/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editPost } from '../actions'

class EditPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '', descr: '', img: '', editing: false,
    }
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const {
      title, descr, img, editing,
    } = this.state

    return (
      <form
        name="postForm"
        onSubmit={e => {
          e.preventDefault()
          console.log(this.props)
          this.props.onPostChanged(title, descr, img, false)
          console.log(editing)
        }}
      >
        <div>
          <input type="text" name="title" placeholder="Enter post title" value={title} onChange={e => this.handleChange(e)} />
        </div>
        <div>
          <input type="text" name="descr" placeholder="Enter post description" value={descr} onChange={e => this.handleChange(e)} />
        </div>
        <div>
          <input type="text" name="img" placeholder="Insert picture URL" value={img} onChange={e => this.handleChange(e)} />
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
  editPost: post => dispatch(editPost(post)),
})

export default connect(null, mapDispatchToProps)(EditPost)
