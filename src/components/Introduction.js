import React, { useState } from 'react'
import { connect } from 'react-redux'
import EditIntro from './EditIntro'

const Introduction = ({ intro = EditIntro.intro }) => {
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

const mapStatetoProps = state => ({
  intro: state.intro,
})

export default connect(mapStatetoProps)(Introduction)
