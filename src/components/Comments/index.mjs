import {Component} from 'react'

import './index.css'

// eslint-disable-next-line no-unused-vars

import {v4} from 'uuid'

// eslint-disable-next-line no-unused-vars

const initialContainerBackgroundClassNames = [
  'amber',

  'blue',

  'orange',

  'emerald',

  'teal',

  'red',

  'light-blue',
]

// Write your code here

class Comments extends Component {
  render() {
    return (
      <div className="bg">
        <h1>Comments</h1>

        <div className="comment-section">
          <div className="form-section">
            <p>say something about 4.0 tech</p>

            <form onSubmit={this.addComment}>
              <input type="text" className="input" />

              <br />

              <textarea type="text" rows="4" cols="21" className="input" />

              <br />

              <button type="submit">Add Comment</button>
            </form>
          </div>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img"
            />
          </div>
        </div>

        <hr className="line" />
      </div>
    )
  }
}

export default Comments
