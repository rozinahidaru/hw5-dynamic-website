/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../actions'

class AddPost extends Component {
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
          this.props.onPostAdded(title, descr, img, false)
          addPost({ title: title.value, descr: descr.value, img: img.value })
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
          Cancel Post
        </button>
        <button type="submit">Post!</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  editPost: post => dispatch(addPost(post)),
})

export default connect(null, mapDispatchToProps)(AddPost)
