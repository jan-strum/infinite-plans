import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css'

import InfinitePlans from './poems/infinite-plans'
import './styles/infinite-plans.css'
import AContinuousFlowOfIntroductions from './poems/a-continuous-flow-of-introductions'
import './styles/a-continuous-flow-of-introductions.css'
import TheCrowdPressesMe from './poems/The-crowd-presses-me'
import './styles/The-crowd-presses-me.css'
import ILaughAtMyFierceGuest from './poems/I-laugh-at-my-fierce-guest'
import './styles/I-laugh-at-my-fierce-guest.css'
import PrestigiousGhosts from './poems/Prestigious-Ghosts'
import './styles/Prestigious-Ghosts.css'

const Ruler = () => {
  return (
    <div className="ruler">
      {/* <InfinitePlans /> */}
      <AContinuousFlowOfIntroductions />
      <TheCrowdPressesMe />
      <ILaughAtMyFierceGuest />
      <PrestigiousGhosts />
    </div>
  )
}

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/infinite-plans" />}
          />
          <Route path="/infinite-plans" component={InfinitePlans} />
          <Route
            path="/a-continuous-flow-of-introductions"
            component={AContinuousFlowOfIntroductions}
          />
          <Route path="/The-crowd-presses-me" component={TheCrowdPressesMe} />
          <Route
            path="/I-laugh-at-my-fierce-guest"
            component={ILaughAtMyFierceGuest}
          />
          <Route path="/Prestigious-ghosts" component={PrestigiousGhosts} />
        </div>
      </Router>
      <Ruler />
    </div>
  )
}

export default App
