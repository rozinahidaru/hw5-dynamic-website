import React, { Component } from 'react'
import { connect } from 'react-redux'
import EditPost from './EditPost'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '', descr: '', img: '', editing: false,
    }
    this.onEditCanceled = this.onEditCanceled.bind(this)
    this.onPostChanged = this.onPostChanged.bind(this)
    // this.onPostAdded = this.onPostAdded.bind(this)
  }

  onPostChanged(newTitle, newDescr, newImg, currEdit) {
    this.setState({
      title: newTitle, descr: newDescr, img: newImg, editing: currEdit,
    }, () => {
      console.log('post edited by user')
    })
  }

  onEditCanceled() {
    const initialTitle = this.state.title
    const initialDescr = this.state.description
    const initialImg = this.state.img
    this.setState({
      title: initialTitle, descr: initialDescr, img: initialImg, editing: false,
    }, () => {
      console.log('edits canceled by user in EditPost')
    })
  }

  render() {
    const {
      title, descr, img, editing,
    } = this.state

    return (
      <>
        <h2>Published Posts</h2>
        <div>
          <button
            type="button"
            onClick={() => this.setState({
              title, descr, img, editing: true,
            })}
          >
            Add Post
          </button>
        </div>
        {
            editing ? <EditPost post={this.state} onPostChanged={this.onPostChanged} onEditCanceled={this.onEditCanceled} />
              : (
                <>
                  <div>{title}</div>
                  <div>
                    {descr}
                  </div>
                  <img src={img} alt="" />
                  <div>
                    <button type="button" onClick={() => this.setState({ title, descr, img, editing: true })}>Edit Post</button>
                  </div>
                </>
              )
        }
      </>
    )
  }
}

const mapStatetoProps = state => ({
  title: state.title,
  descr: state.descr,
  img: state.img,
  editing: state.editing,
})

export default connect(mapStatetoProps)(Post)
