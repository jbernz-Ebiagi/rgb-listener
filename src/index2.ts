import { State, HidEvent, commands } from './types'
import wootingAnalog from './wooting_analog'
import keyMap from './maps/key-map2'

let state : State = {
  modifiers: {
    'tab': false,
    'lshift': false,
    'lctrl': false,
    'lcommand': false,
    'lalt': false,
    'esc': false
  },
  octave: 3,
  ableton: {}
}

const commandMapper = (hidList: HidEvent[]) => {
  for(const e of hidList){
    for(const key of keyMap){
      if(key.hid_id == e.hid_id){
        if(e.pressed){
          for(const command of key.commands.on(state, key)){
            runCommand(command)
          }
        }
        else{
          for(const command of key.commands.off(state, key)){
            runCommand(command)
          }
        }
      }
    }
  }
}

const runCommand = (command: {[key in keyof typeof commands]?: any} ) => {
  for(const name in command){
    console.log(name)
    console.log(command[name])
    switch (name){
      case 'TOGGLE_AS':
      //     robot.keyTap('`', ['alt'])
          break;
      case 'TOGGLE_KEYBOARD':
      //     this.active ? this.disable() : this.enable();
          break;
      case 'TOGGLE_MODIFIER':
        state.modifiers[command[name]] = !state.modifiers[command[name]]
          break;
      case 'ACTIVATE_MODIFIER':
        state.modifiers[command[name]] = true
          break;
      case 'DEACTIVATE_MODIFIER':
        state.modifiers[command[name]] = false
          break;
      case 'NOTE_ON':
          // this.midi.sendNoteOn(parseInt(params[0]), parseInt(params[1]));
          break;
      case 'NOTE_OFF':
          // this.midi.sendNoteOff(parseInt(params[0]), parseInt(params[1]));
          break;
      case 'XCONTROL':
            // this.midi.sendNoteOff(parseInt(params[0]), parseInt(params[1]));
          break;
      case 'NONE':
        break
      default:
          console.log(`command "${name}" not found`);
    }  
  }
}

const Ebiagi = () => {

  wootingAnalog.connect(commandMapper)
  // this.hid = new HidBlocker().initialize(this);

}

Ebiagi()