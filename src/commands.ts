import { State, HidEvent, Command, CommandTypes, ModifierTypes } from './types'
import {keyMap} from './key_functions/key_map'
import {keyTap} from 'robotjs'
import { clear } from 'console'
import { ChildProcess, exec } from 'child_process'
import { ECANCELED } from 'constants'

const xControlMap = require('../dist/X-Controls.json')

const toggleModifier = (modifier: ModifierTypes, state: State) => {
  state.modifiers[modifier] = !state.modifiers[modifier]
}

const setModifier = (params: [ModifierTypes, boolean], state: State) => {
  state.modifiers[params[0]] = params[1]
}

const toggleEbiagi = (emptyParam, state: State, modules) => {
  state.active ? _disable(state, modules) : _enable(state, modules)
}

let caffeine:ChildProcess

const _enable = (state: State, modules) => {
  exec('sudo pmset -b sleep 0; sudo pmset -b disablesleep 1sudo pmset -b sleep 0; sudo pmset -b disablesleep 1',)
  modules.hidBlocker.block()
  modules.wootingRGB.start(state)
  modules.abletonSocket.start(state)
  state.active = true
}

const _disable = (state: State, modules) => {
  exec("sudo pmset -b sleep 5; sudo pmset -b disablesleep 0")
  modules.hidBlocker.unblock()
  modules.wootingRGB.stop()
  modules.abletonSocket.stop()
  state.active = false
}

let midiOutDebounce
const _triggerMidiOut = (state: State) => {
  state.midiOut = true
  if (midiOutDebounce) {
    clearTimeout(midiOutDebounce)
  }
  midiOutDebounce = setTimeout(() => {
    state.midiOut = false
  }, 300)
}

const sendNoteOn = (note: number, state: State, modules, velocity) => {
  _triggerMidiOut(state)
  modules.midiOut.sendNoteOn(0, note, velocity)
  state.notes[note] = 1
}

const sendNoteOff = (note: number, state: State, modules) => {
  _triggerMidiOut(state)
  modules.midiOut.sendNoteOff(0, note)
  state.notes[note] = 0
}

const sendXControl = (xControl: string, state: State, modules) => {
  const note = xControlMap[parseXControl(xControl)]
  modules.midiOut.sendNoteOn(note[0], note[1])
}

const changeOctave = (by: number, state: State) => {
  state.octave = state.octave + by
  if (state.octave < 0) state.octave = 0
  if (state.octave > 5) state.octave = 5
}

const flushMidi = (note: number, state: State, modules) => {
  for(let i=0; i< 128; i++){
    modules.midiOut.sendNoteOff(0, i)
  }
  state.notes = []
}

const toggleAS = () => {
  keyTap('`',['alt'])
}

const selectModule = (slot: string, state: State) => {
  state.activeModules[slot] = !state.activeModules[slot]
}

const commandMap : {
  [K in CommandTypes]: (param: any, state: State, modules, velocity?: number) => void
} = {
  'TOGGLE_EBIAGI':  toggleEbiagi,
  'TOGGLE_MODIFIER': toggleModifier,
  'SET_MODIFIER': setModifier,
  'NOTE_ON': sendNoteOn,
  'NOTE_OFF': sendNoteOff,
  'XCONTROL': sendXControl,
  'CHANGE_OCTAVE': changeOctave,
  'SELECT_MODULE': selectModule,
  'FLUSH_MIDI': flushMidi,
  'TOGGLE_AS': toggleAS,
  'NONE': () => {return}
}

export const commandMapper = (state: State, modules, hidList: HidEvent[]) => {
  for (const e of hidList) {
    for (const key of keyMap) {
      if (key.hid_id == e.hid_id) {
        if (e.pressed) {
          console.log(key)
          if (key.commands.on){
            for (const command of key.commands.on(state, key)) {
              runCommand(command, state, modules, e.velocity)
            }
          }
        }
        else {
          if (key.commands.off){
            for (const command of key.commands.off(state, key)) {
              runCommand(command, state, modules, 0)
            }
          }
        }
      }
    }
  }
}

export const runCommand = (command: Command, state: State, modules, velocity: number=127) => {
  if(!state.active && command[0] != 'TOGGLE_EBIAGI') return
  console.log(command)
  commandMap[command[0]](command[1], state, modules, velocity)
}