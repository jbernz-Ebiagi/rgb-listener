import { State, HidEvent, Command, CommandTypes, ModifierTypes } from './types'
import keyMap from './key_functions/key_map'
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

const _enable = (state: State, modules) => {
  modules.hidBlocker.block()
  modules.wootingRGB.start(state)
  modules.abletonSocket.start(state)
  state.active = true
}

const _disable = (state: State, modules) => {
  modules.hidBlocker.unblock()
  modules.wootingRGB.stop()
  modules.abletonSocket.stop()
  state.active = false
}

const sendNoteOn = (note: number, state: State, modules) => {
  modules.midiOut.sendNoteOn(1, note)
}

const sendNoteOff = (note: number, state: State, modules) => {
  modules.midiOut.sendNoteOff(1, note)
}

const sendXControl = (xControl: string, state: State, modules) => {
  const note = xControlMap[xControl]
  modules.midiOut.sendNoteOn(note[0], note[1])
}

const commandMap : {
  [K in CommandTypes]: (param: any, state: State, modules) => void
} = {
  'TOGGLE_EBIAGI':  toggleEbiagi,
  'TOGGLE_MODIFIER': toggleModifier,
  'SET_MODIFIER': setModifier,
  'NOTE_ON': sendNoteOn,
  'NOTE_OFF': sendNoteOff,
  'XCONTROL': sendXControl,
  'NONE': () => {return}
}

export const commandMapper = (state: State, modules, hidList: HidEvent[]) => {
  for (const e of hidList) {
    for (const key of keyMap) {
      if (key.hid_id == e.hid_id) {
        if (e.pressed) {
          if (key.commands.on){
            for (const command of key.commands.on(state, key)) {
              runCommand(command, state, modules)
            }
          }
        }
        else {
          if (key.commands.off){
            for (const command of key.commands.off(state, key)) {
              runCommand(command, state, modules)
            }
          }
        }
      }
    }
  }
}

export const runCommand = (command: Command, state: State, modules) => {
  console.log(command)
  commandMap[command[0]](command[1], state, modules)
}