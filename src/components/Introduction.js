import React, { useState, Component } from 'react'
import { connect } from 'react-redux'
import EditIntro from './EditIntro'
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

class Introduction extends Component {
  constructor(props) {
    super(props)
    this.state = { description: 'Welcome! Start your bio by adding a little about yourself and an image.', img: '', editing: false }
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
        <div>
          <h1>Hey, this is me!</h1>
          {
              editing ? <EditIntro intro={{ description, img, editing }} setEditing={editing} />
                : (
                  <>
                    <body>
                      {description}
                    </body>
                    <img src={img} alt="" />
                    <button type="button" onClick={() => this.setState({ description, img, editing: true })}>Edit Bio</button>
                  </>
                )
          }
        </div>

      </>
    )
  }
}

const mapStatetoProps = state => ({
  intro: state.intro,
})

export default connect(mapStatetoProps)(Introduction)
