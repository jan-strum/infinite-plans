import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Fullscreen from 'react-full-screen'

import Container from './Container'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFull: false,
      cursorVisibility: 'none',
      button: 'hide'
    }
    this.timer = null
  }
  hideOnClick = () => {
    this.setState({ cursorVisibility: 'none', buttonVisibility: 'hide' })
  }
  onMouseMove = () => {
    this.setState({ cursorVisibility: 'default', buttonVisibility: 'display' })
    if (this.timer) clearTimeout(this.timer)
    this.timer = setTimeout(
      () =>
        this.setState({ cursorVisibility: 'none', buttonVisibility: 'hide' }),
      500
    )
  }
  goFull = () => {
    this.setState({ isFull: !this.state.isFull })
  }

  render() {
    return (
      <div
        className={`App ${this.state.cursorVisibility}`}
        onClick={this.hideOnClick}
        onMouseMove={this.onMouseMove}
      >
        <Router>
          <Fullscreen
            enabled={this.state.isFull}
            onChange={isFull => this.setState({ isFull })}
          >
            <div
              id="button"
              className={this.state.buttonVisibility}
              onClick={this.goFull}
            >
              {!this.state.isFull ? '< >' : '> <'}
            </div>
            <Container
              cursorVisibility={this.state.cursorVisibility}
              hideOnClick={this.hideOnClick}
            />
          </Fullscreen>
        </Router>
      </div>
    )
  }
}

export default App
