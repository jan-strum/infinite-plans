import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styled from 'styled-components'

import InfinitePlans from './poems/infinite-plans'
import AContinuousFlowOfIntroductions from './poems/a-continuous-flow-of-introductions'
import TheCrowdPressesMe from './poems/The-crowd-presses-me'
import ILaughAtMyFierceGuest from './poems/I-laugh-at-my-fierce-guest'
import PrestigiousGhosts from './poems/Prestigious-Ghosts'
import PictorialPreoccupations from './poems/Pictorial-preoccupations'
import HuntersBehindCoulds from './poems/Hunters-behind-clouds'
import TheBodyDelighted from './poems/The-body-delighted'
import RegentOfInterregnum from './poems/Regent-of-Interregnum'
import IAmTheInheritor from './poems/I-am-the-inheritor'
import ParchedSpirits from './poems/Parched-spirits'
import YouMustHaveRegard from './poems/You-must-have-regard'
import ByItselfTime from './poems/By-itself-time'
import ScudAngel from './poems/scud-angel'

import './poem-styles/infinite-plans.css'
import './poem-styles/sub-poems.css'

const Container = ({ location }) => {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 5500, exit: 1500 }}
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
              <Route
                path="/Pictorial-preoccupations"
                component={PictorialPreoccupations}
              />
              <Route
                path="/Hunters-behind-clouds"
                component={HuntersBehindCoulds}
              />
              <Route path="/The-body-delighted" component={TheBodyDelighted} />
              <Route
                path="/Regent-of-Interregnum"
                component={RegentOfInterregnum}
              />
              <Route path="/I-am-the-inheritor" component={IAmTheInheritor} />
              <Route path="/Parched-spirits" component={ParchedSpirits} />
              <Route
                path="/You-must-have-regard"
                component={YouMustHaveRegard}
              />
              <Route path="/By-itself-time" component={ByItselfTime} />
              <Route path="/scud-angel" component={ScudAngel} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition-property: opacity;
    transition-delay: 2500ms;
    transition-duration: 5500ms;
    transition-function: ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 1500ms ease-out;
  }

  p,
  span {
    margin-left: 0 auto;
    margin-right: 0 auto;
  }

  width: 100%;
`

export default withRouter(Container)