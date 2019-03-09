import React from 'react'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

import Container from './Container'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Container />
      </Router>
    </div>
  )
}

export default App
