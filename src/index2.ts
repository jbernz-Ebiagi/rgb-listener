import { State } from './types'
import wootingParser from './wooting_analog'
import wootingRGB from './wooting_rgb'
import hidBlocker from './hid_blocker'
import midiOut from './midi_out'
import abletonSocket from './ableton_socket'
import { runCommand, commandMapper } from './commands'

let interval

const Ebiagi = () => {

  let state : State = {
    modifiers: {
      'tab': false,
      'lshift': false,
      'lctrl': false,
      'lcommand': false,
      'lalt': false,
      'esc': false,
      'capslock': false
    },
    octave: 3,
    ableton: {
      clips: [],
      inputs: {},
      snaps: [],
      globalLoop: {},
      mfx: [],
      instr: [],
      loops: [],
      modules: [],
      ginstr: [],
      metronome: false,
      smart_record: {}
    },
    notes: [],
    midiOut: false,
    active: false
  }

  const modules = {
    hidBlocker: hidBlocker(),
    wootingRGB : wootingRGB(),
    midiOut: midiOut(),
    abletonSocket: abletonSocket()
  }

  wootingParser().connect(commandMapper.bind(null, state, modules))

  runCommand(['TOGGLE_EBIAGI', true], state, modules)

}

Ebiagi() //init
