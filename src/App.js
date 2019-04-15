import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Fullscreen from 'react-full-screen'

import Container from './Container'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFull: false,
      button: 'hide',
      cursor: 'none'
    }
  }

  goFull = () => {
    this.setState({ isFull: true })
  }
  cursor = () => {
    this.setState({ button: 'show', cursor: 'default' })
    // clearTimeout(hide)
    setTimeout(() => this.setState({ button: 'hide', cursor: 'none' }), 1000)
    // setTimeout(() => this.setState({ cursor: 'none' }), 500)
  }
  hideCursor = () => {
    console.log('hide cursor')
    this.setState({ cursor: 'none' })
  }

  render() {
    return (
      <div
        id={this.state.cursor}
        className={`App ${this.state.cursor}`}
        onMouseMove={this.cursor}
        onClick={this.hideCursor}
      >
        <div id="button" className={this.state.button} onClick={this.goFull}>
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
