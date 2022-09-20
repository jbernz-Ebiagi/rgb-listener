import { State } from './types'
import wootingParser from './wooting_analog'
import wootingRGB from './wooting_rgb'
import hidBlocker from './hid_blocker'
import midiOut from './midi_out'
import abletonSocket from './ableton_socket'
import { runCommand, commandMapper } from './commands'
import { exec } from 'child_process'

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
      smart_record: {},
      woot_arp: {device_on: 0},
      active_crossfade: false,
      active_modules: {}
    },
    notes: [],
    midiOut: false,
    active: false,
    activeModules: {
      A: false,
      B: false
    }
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

const exitHandler = () => {
  exec("sudo pmset -b sleep 5; sudo pmset -b disablesleep 0")
}

//do something when app is closing
process.on('exit', exitHandler.bind(null,{cleanup:true}))

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, {exit:true}))

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, {exit:true}))
process.on('SIGUSR2', exitHandler.bind(null, {exit:true}))

//catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, {exit:true}))

Ebiagi() //init
