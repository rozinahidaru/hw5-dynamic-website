import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddPost from './AddPost'
import Post from './Post'

class PostList extends Component {
  constructor(props) {
    super(props) /*
    this.state = {
      title: '', descr: '', img: '', adding: false,
    } */
    this.state = { postList: new Map(), count: 0 }
    this.onPostAdded = this.onPostAdded.bind(this)
    // this.onPostCanceled = this.onPostCanceled.bind(this)
    // const postList = this.state
    // console.log(postList)
    const count = 0
  }

  onPostAdded(title, descr, img, adding) {
    /*
    this.setState({
      title, descr, img, adding,
    }, () => {
      console.log('new post by user')
    }) */
    const { postList, count } = this.state
    const post = { title, descr, img }
    postList.set(count + 1, post)
    // this.setState({postList: postList.set(this.count, post)})
    // const postList = this.state
    console.log(postList)
    // postList.set(this.count, post)
    // console.log(postList)
  }
  /*
  onPostCanceled() {
    const initialTitle = this.state.title
    const initialDescr = this.state.description
    const initialImg = this.state.img
    this.setState({
      title: initialTitle, descr: initialDescr, img: initialImg, editing: false,
    }, () => {
      console.log('edits canceled by user in EditPost')
    })
  } */

  listPosts() {
    const { posts } = this.state
    console.log(posts)
    posts.forEach(post => <Post {... post} />)
  }

  render() {
    const {
      title, descr, img, adding,
    } = this.state

    return (
      <>
        <h2>Published Posts</h2>
        <div>
          <button
            type="button"
            onClick={() => this.setState({
              title, descr, img, adding: true,
            })}
          >
            Add Post
          </button>
        </div>
        {
            adding ? <AddPost onPostAdded={this.onPostAdded} onPostCanceled={this.onPostCanceled} />
              : (
                <>
                  <div>{title}</div>
                  <div>
                    {descr}
                  </div>
                  <img src={img} alt="" />
                </>
              )
        }
        <ul>
          {
            this.state.postList.forEach(post => <Post {... post} />)
            // this.listPosts()
          }
        </ul>
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

export default connect(mapStatetoProps)(PostList)
