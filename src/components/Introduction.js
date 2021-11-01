import React, { useState, Component } from 'react'
import { connect } from 'react-redux'
import EditIntro from './EditIntro'

class Introduction extends Component {
  constructor(props) {
    super(props)
    this.state = { description: 'Welcome! Start your bio by adding a little about yourself and an image.', img: '', editing: false }
    this.onIntroChanged = this.onIntroChanged.bind(this)
    this.onEditCanceled = this.onEditCanceled.bind(this)
  }

  onIntroChanged(newDescr, newImg, currEdit) {
    this.setState({ description: newDescr, img: newImg, editing: currEdit }, () => {
      console.log('intro changed by EditIntro')
    })
  }

  onEditCanceled() {
    const initialDescr = this.state.description
    const initialImg = this.state.img
    this.setState({ description: initialDescr, img: initialImg, editing: false }, () => {
      console.log('edits canceled by user in EditIntro')
    })
  }

  render() {
    const { description, img, editing } = this.state
    // const [editing, setEditing] = useState(false)
    /*
    console.log(editing)
    console.log(this.props)
    console.log(this.state) */
    return (
      <>
        <h1>Hey, this is me!</h1>
        {
              editing ? <EditIntro intro={this.state} onIntroChanged={this.onIntroChanged} onEditCanceled={this.onEditCanceled} />
                : (
                  <>
                    <div>
                      {description}
                    </div>
                    <img src={img} alt="" />
                    <div>
                      <button type="button" onClick={() => this.setState({ description, img, editing: true })}>Edit Bio</button>
                    </div>
                  </>
                )
          }

      </>
    )
  }
}

const mapStatetoProps = state => ({
  // intro: state.intro,
  description: state.description,
  img: state.img,
  editing: state.editing,
})

export default connect(mapStatetoProps)(Introduction)

/*
const Introduction = ({ intro }) => {
  this.state = { description: '', img: '' }
  const { description, img } = intro
  const [editing, setEditing] = useState(false)

  return (
    <>
      <div>
        <h1>Hey, this is me!</h1>
        {
            editing ? <EditIntro intro={{ description, img }} setEditing={setEditing} />
              : (
                <>
                  <body>
                    {description}
                  </body>
                  <img src={img} alt="" />
                  <button type="button" onClick={() => setEditing(true)}>Edit Bio</button>
                </>
              )
        }
      </div>

    </>
  )
}
*/
