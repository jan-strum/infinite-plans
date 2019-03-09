import React from 'react'
import styled from 'styled-components'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

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

const Container = ({ location }) => {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 600, exit: 600 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
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
              <Route
                path="/The-crowd-presses-me"
                component={TheCrowdPressesMe}
              />
              <Route
                path="/I-laugh-at-my-fierce-guest"
                component={ILaughAtMyFierceGuest}
              />
              <Route path="/Prestigious-ghosts" component={PrestigiousGhosts} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 600ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 600ms ease-in;
  }

  // div.transition-group {
  //   position: relative;
  // }

  section.route-section {
    // position: absolute;
    // width: 100%;
    // top: 0;
    // left: 0;
  }
`

export default withRouter(Container)
