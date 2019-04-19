import React from 'react'
import ReactDOM from 'react-dom'

import { Link } from 'react-router-dom'

export default class InfinitePlans extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cursor: 'pointer'
    }
  }

  componentDidMount() {
    const elem = ReactDOM.findDOMNode(this)
    elem.style.opacity = 0
    window.requestAnimationFrame(function() {
      elem.style.transition = '5500ms'
      elem.style.transitionDelay = 'opacity 2500ms'
      elem.style.transitionTimingFunction = 'ease-in'
      elem.style.opacity = 1
    })
  }

  handleClick = () => {
    this.setState({ cursor: 'none' })
  }

  render() {
    return (
      <div className="infinite-plans">
        <div className="vertically-centered">
          <p>
            <span className="hidden">
              I, chattering animal, spit purpoil—smiley to feel stupid Screaming
              the secrets of Myth-sized crust of thinghood{' '}
            </span>
            <Link
              id="thunders"
              className="link"
              to="/By-itself-time"
              onClick={this.handleClick}
            >
              thunder in the index
            </Link>
          </p>
          <p>
            <span className="hidden">
              I, chattering animal, spit purpoil—smiley to feel stupid Screaming
              the secrets of Myth-sized{' '}
            </span>
            <Link
              id="crust"
              className="link"
              to="/Parched-spirits"
              onClick={this.handleClick}
            >
              crust of thinghood
            </Link>
          </p>
          <p>
            <span className="hidden">
              I, chattering animal, spit purpoil—smiley to feel stupid Screaming
              the secrets of{' '}
            </span>
            <Link
              id="myth"
              className="link"
              to="/The-body-delighted"
              onClick={this.handleClick}
            >
              Myth-sized
            </Link>
          </p>
          <p>
            <span className="hidden">
              I, chattering animal, spit purpoil—smiley to feel stupid{' '}
            </span>
            <Link
              id="screaming"
              className="link"
              to="I-am-the-inheritor"
              onClick={this.handleClick}
            >
              Screaming the secrets of immobile life
            </Link>
          </p>
          <p>
            <span className="hidden">
              I, chattering animal, spit purpoil—smiley to{'..'}
            </span>
            <Link
              id="feel-stupid"
              className="link"
              to="/Prestigious-ghosts"
              onClick={this.handleClick}
            >
              feel stupid
            </Link>
            <span className="hidden">Screaming the secrets of </span>
            <Link
              id="cuckolded"
              className="link"
              to="/Prestigious-ghosts"
              onClick={this.handleClick}
            >
              cuckolded singers
            </Link>
          </p>
          <p>
            <span className="hidden">I, chattering animal, spit purpoil </span>
            <Link
              id="smiley"
              className="link"
              to="/a-continuous-flow-of-introductions"
              onClick={this.handleClick}
            >
              —smiley to know the taste{' '}
            </Link>
            <span className="hidden">
              eaming the secrets of cuckolded singers
            </span>
            <Link
              id="cannot-explain"
              className="link"
              to="/Pictorial-preoccupations"
              onClick={this.handleClick}
            >
              cannot explain
            </Link>
          </p>
          <p>
            <span className="hidden">I, chattering animal, </span>
            <Link
              id="spit-purpoil"
              className="link"
              to="scud-angel"
              onClick={this.handleClick}
            >
              spit purpoil
            </Link>
            <span className="hidden">
              —smiley to feel stupid Screaming the secrets of cuckolded
              singersss
            </span>
            <Link
              id="otherother-surrogates"
              className="link"
              to="/Pictorial-preoccupations"
              onClick={this.handleClick}
            >
              other surrogates
            </Link>
          </p>
          <p>
            <Link
              id="chattering"
              className={`link ${this.state.cursor}`}
              to="/The-crowd-presses-me"
              onClick={this.handleClick}
            >
              I, chattering, animal,
            </Link>
            <span className="hidden">
              spit purpoil—smiley to feel stupid Screaming the secrets of
              cuckolded singersss
            </span>
            <Link
              id="for-celibacy"
              className="link"
              to="/Pictorial-preoccupations"
              onClick={this.handleClick}
            >
              for celibacy
            </Link>
          </p>
          <p>
            <span className="hidden">I, chattering animal, </span>
            <Link
              id="laugh-at"
              className="link"
              to="/I-laugh-at-my-fierce-guest"
              onClick={this.handleClick}
            >
              laugh at my fierce guest
            </Link>
          </p>
          <p>
            <span className="hidden">I, chattering animal, laugh at my</span>
            <Link
              id="slow-thighs"
              className="link"
              to="/Regent-of-Interregnum"
              onClick={this.handleClick}
            >
              slow thighs almost dance guest
            </Link>
          </p>
          <p>
            <span className="hidden">
              I, chattering animal, laugh at my fierce guest
            </span>
            <Link
              id="would-prefer"
              className="link"
              to="/Hunters-behind-clouds"
              onClick={this.handleClick}
            >
              would prefer to kill
            </Link>
          </p>
          <p>
            <span className="hidden">
              I, chattering animal, laugh at my slow th
            </span>
            <Link
              id="than-to-torment"
              className="link"
              to="/Hunters-behind-clouds"
              onClick={this.handleClick}
            >
              than to torment
            </Link>
          </p>
          <p>
            <span className="hidden">
              I, chattering animal, laugh at my slow thighs would{' '}
            </span>
            <Link
              id="appease"
              className="link"
              to="/You-must-have-regard"
              onClick={this.handleClick}
            >
              appease all of your needs at once;
            </Link>
          </p>
          <p>
            <span className="hidden">I, chatterin</span>
            <Link
              id="you-are-not-allowed"
              className="link"
              to="/You-must-have-regard"
              onClick={this.handleClick}
            >
              you are not allowed to reach out for them
            </Link>
          </p>
        </div>
      </div>
    )
  }
}
