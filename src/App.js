import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Fullscreen from 'react-full-screen'

import Container from './Container'

class App extends React.Component {
  constructor(props) {
    console.log('constructor')
    super(props)
    this.state = {
      isFull: false
    }
  }
  goFull = () => {
    this.setState({ isFull: true })
  }
  hideCursorOnClick = () => {
    this.setState({ cursor: 'none' })
  }

  render() {
    console.log('render')
    return (
      <div
        id={this.state.cursor}
        className={`App`}
        onClick={this.hideCursorOnClick}
      >
        <div id="button" onClick={this.goFull}>
          {'< >'}
        </div>
        <Router>
          <Fullscreen
            enabled={this.state.isFull}
            onChange={isFull => this.setState({ isFull })}
          >
            <Container />
          </Fullscreen>
        </Router>
      </div>
    )
  }
}

export default App
