import React from 'react'
import { Link } from 'react-router-dom'

export default class InfinitePlans extends React.Component {
  constructor(props) {
    super(props)
    this.container = React.createRef()
  }

  handleClick = event => {
    const id = event.target.id
    // console.log(event.target.id)
    const source = document.querySelector(`#${id}`)
    // console.log('source offsetTop', source.offsetTop)
    const target = document.querySelector(`.ruler #${id}-target`)
    // console.log('target offsetTop', target.offsetTop)

    // const { x, y } = source.getBoundingClientRect()
    // const sourceDimensions = { x, y }
    // console.log('source dimensions', sourceDimensions)

    const { x, y } = target.getBoundingClientRect()
    const targetDimensions = { x, y }
    console.log('target dimensions', targetDimensions)
  }

  render() {
    return (
      <div className="infinite-plans">
        <p>
          <span className="hidden">
            I, chattering animal, spit purpoil—smiley to feel stupid Screaming
            the secrets of Myth-sized crust of thinghood{' '}
          </span>
          <span id="thunders" onClick={event => this.handleClick(event)}>
            thunders in the index
          </span>
        </p>
        <p>
          <span className="hidden">
            I, chattering animal, spit purpoil—smiley to feel stupid Screaming
            the secrets of Myth-sized{' '}
          </span>
          <span id="crust" onClick={event => this.handleClick(event)}>
            crust of thinghood
          </span>
        </p>
        <p>
          <span className="hidden">
            I, chattering animal, spit purpoil—smiley to feel stupid Screaming
            the secrets of{' '}
          </span>
          <span id="myth" onClick={event => this.handleClick(event)}>
            Myth-sized
          </span>
        </p>
        <p>
          <span className="hidden">
            I, chattering animal, spit purpoil—smiley to feel stupid{' '}
          </span>
          <span id="screaming" onClick={event => this.handleClick(event)}>
            Screaming the secrets of immobile life
          </span>
        </p>
        <p>
          <span className="hidden">
            I, chattering animal, spit purpoil—smiley to{' '}
          </span>
          feel stupid <span className="hidden">Screaming the secrets of </span>
          <span id="cuckolded" onClick={event => this.handleClick(event)}>
            cuckolded singers
          </span>
        </p>
        <p>
          <span className="hidden">I, chattering animal, spit purpoil </span>
          <span id="smiley" onClick={event => this.handleClick(event)}>
            —smiley to know the taste{' '}
          </span>
          <span className="hidden">
            eaming the secrets of cuckolded singers
          </span>
          <span id="cannot-explain" onClick={event => this.handleClick(event)}>
            cannot explain
          </span>
        </p>
        <p>
          <span className="hidden">I, chattering animal, </span>spit purpoil
          <span className="hidden">
            —smiley to feel stupid Screaming the secrets of cuckolded singersss
          </span>
          <span
            id="otherother-surrogates"
            onClick={event => this.handleClick(event)}
          >
            other surrogates
          </span>
        </p>
        <p>
          <span
            className="link"
            to="/The-crowd-presses-me"
            id="chattering"
            // style={{ textDecoration: 'none' }}
            // ref={this.container}
            onClick={event => this.handleClick(event)}
          >
            I, chattering, animal,
          </span>
          <span className="hidden">
            spit purpoil—smiley to feel stupid Screaming the secrets of
            cuckolded singersss
          </span>
          <span id="for-celibacy" onClick={event => this.handleClick(event)}>
            for celibacy
          </span>
        </p>
        <p>
          <span className="hidden">I, chattering animal, </span>
          <span id="laugh-at" onClick={event => this.handleClick(event)}>
            laugh at my fierce guest
          </span>
        </p>
        <p>
          <span className="hidden">I, chattering animal, laugh at my</span>
          <span id="slow-thighs" onClick={event => this.handleClick(event)}>
            slow thighs almost dance guest
          </span>
        </p>
        <p>
          <span className="hidden">
            I, chattering animal, laugh at my fierce guest
          </span>
          <span id="would-prefer" onClick={event => this.handleClick(event)}>
            would prefer to kill
          </span>
        </p>
        <p>
          <span className="hidden">
            I, chattering animal, laugh at my slow th
          </span>
          <span id="than-to-torment" onClick={event => this.handleClick(event)}>
            than to torment
          </span>
        </p>
        <p>
          <span className="hidden">
            I, chattering animal, laugh at my slow thighs would{' '}
          </span>
          <span id="appease" onClick={event => this.handleClick(event)}>
            appease all of your needs at once;
          </span>
        </p>
        <p>
          <span className="hidden">I, chatterin</span>
          <span
            id="you-are-not-allowed"
            onClick={event => this.handleClick(event)}
          >
            you are not allowed to reach out for them
          </span>
        </p>
      </div>
    )
  }
}
