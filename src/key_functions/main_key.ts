import rgbMap from "../rgb_map"
import { State, IKey, Command } from "../types"

const mainKey = {
  commands: {
    on: (state: State, self: IKey): Command[] => {
      if (state.modifiers.tab) {
        return [['NOTE_ON', self.midi_note + 12*state.octave]]
      }
      if (state.modifiers.lctrl) {
        return [['XCONTROL', self.xControls[1]]] //clear_loop
      }
      if (state.modifiers.lshift) {
        return [['XCONTROL', self.xControls[2]]] //stop_loop
      }
      if (state.modifiers.lalt) {
        return [['XCONTROL', self.xControls[3]]] //quantize_loop
      }
      return [['XCONTROL', self.xControls[0]]] //select_loop
    },
    off: (state: State, self: IKey): Command[] => {
      if (state.modifiers.tab) {
        return [['NOTE_OFF', self.midi_note + 12*state.octave]]
      }
      return [['NONE', null]]
    }
  },
  xControls: [
    'select_loop {key_name}',
    'clear_loop {key_name}',
    'stop_loop {key_name}',
    'quantize_loop {key_name}'
  ],
  color: (state, self) => {
    if (state.modifiers.tab) {
      if(state.notes[self.midi_note + 12*state.octave]){
        return rgbMap['green'][1]
      }
      if([1,3,6,8,10].includes(self.midi_note%12)){
        return rgbMap['purple'][1]
      }
      return rgbMap['white'][1]
    }
    const data = state.ableton.loops[self.key_name]
    if(data){
      return rgbMap[data.color][data.brightness]
    }
    return rgbMap['dark'][0]
  }
}

export default mainKey