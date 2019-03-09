import React from 'react'
import { Link } from 'react-router-dom'

export default class InfinitePlans extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = event => {
    const id = event.target.id
    console.log(event.target.id)
  }

  render() {
    return (
      <div className="infinite-plans">
        <p>
          <span className="hidden">
            I, chattering animal, spit purpoil—smiley to feel stupid Screaming
            the secrets of Myth-sized crust of thinghood{' '}
          </span>
          <Link
            id="thunders"
            className="link"
            to="/By-itself-time"
            onClick={event => this.handleClick(event)}
          >
            thunders in the index
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
            onClick={event => this.handleClick(event)}
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
            onClick={event => this.handleClick(event)}
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
            onClick={event => this.handleClick(event)}
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
            onClick={event => this.handleClick(event)}
          >
            feel stupid
          </Link>
          <span className="hidden">Screaming the secrets of </span>
          <Link
            id="cuckolded"
            className="link"
            to="/Prestigious-ghosts"
            onClick={event => this.handleClick(event)}
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
            onClick={event => this.handleClick(event)}
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
            onClick={event => this.handleClick(event)}
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
            onClick={event => this.handleClick(event)}
          >
            spit purpoil
          </Link>
          <span className="hidden">
            —smiley to feel stupid Screaming the secrets of cuckolded singersss
          </span>
          <Link
            id="otherother-surrogates"
            className="link"
            to="/Pictorial-preoccupations"
            onClick={event => this.handleClick(event)}
          >
            other surrogates
          </Link>
        </p>
        <p>
          <Link
            id="chattering"
            className="link"
            to="/The-crowd-presses-me"
            onClick={event => this.handleClick(event)}
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
            onClick={event => this.handleClick(event)}
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
            onClick={event => this.handleClick(event)}
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
            onClick={event => this.handleClick(event)}
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
            onClick={event => this.handleClick(event)}
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
            onClick={event => this.handleClick(event)}
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
            onClick={event => this.handleClick(event)}
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
            onClick={event => this.handleClick(event)}
          >
            you are not allowed to reach out for them
          </Link>
        </p>
      </div>
    )
  }
}
