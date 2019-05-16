import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

export { default as InfinitePlans } from './poems/infinite-plans'
export { default as AContinuousFlowOfIntroductions } from './poems/a-continuous-flow-of-introductions'
export { default as TheCrowdPressesMe } from './poems/The-crowd-presses-me'
export { default as ILaughAtMyFierceGuest } from './poems/I-laugh-at-my-fierce-guest'
export { default as PrestigiousGhosts } from './poems/Prestigious-Ghosts'
export { default as PictorialPreoccupations } from './poems/Pictorial-preoccupations'
export { default as HuntersBehindCoulds } from './poems/Hunters-behind-clouds'
export { default as TheBodyDelighted } from './poems/The-body-delighted'
export { default as RegentOfInterregnum } from './poems/Regent-of-Interregnum'
export { default as IAmTheInheritor } from './poems/I-am-the-inheritor'
export { default as ParchedSpirits } from './poems/Parched-spirits'
export { default as YouMustHaveRegard } from './poems/You-must-have-regard'
export { default as ByItselfTime } from './poems/By-itself-time'
export { default as ScudAngel } from './poems/scud-angel'

export { default as stylesInfinitePlans } from './poem-styles/infinite-plans.css'
export { default as stylesSubPoems } from './poem-styles/sub-poems.css'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.register()
