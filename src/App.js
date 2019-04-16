import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Fullscreen from 'react-full-screen'

import Container from './Container'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFull: false
    }
  }
  goFull = () => {
    this.setState({ isFull: !this.state.isFull })
  }
  hideCursorOnClick = () => {
    this.setState({ cursor: 'none' })
  }

  render() {
    return (
      <div
        id={this.state.cursor}
        className={`App`}
        onClick={this.hideCursorOnClick}
      >
        <Router>
          <Fullscreen
            enabled={this.state.isFull}
            onChange={isFull => this.setState({ isFull })}
          >
            <div id="button" onClick={this.goFull}>
              {!this.state.isFull ? '< >' : '> <'}
            </div>
            <Container />
          </Fullscreen>
        </Router>
      </div>
    )
  }
}

export default App
