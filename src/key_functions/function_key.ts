import rgbMap from "../rgb_map"
import { State, IKey, Command } from "../types"

const functionKey = {
    xControls: [
        'select_instrument {param_name}',
        'deselect_instrument {param_name}',
        'stop_instrument {param_name}',
        'activate_module {param_name}',
        'reset_module {param_name'
      ],
  commands: {
    on: (state: State, self: IKey): Command[] => {
      if (state.modifiers.lshift) {
        return [['XCONTROL', self.xControls[2]]]
      }
      if (state.modifiers.esc) {
        return [['XCONTROL', self.xControls[3]]]
      }
      if (state.modifiers.esc && state.modifiers.lctrl) {
        return [['XCONTROL', self.xControls[4]]] 
      }
      return [['XCONTROL', self.xControls[0]]] 
    },
    off: (state: State, self: IKey): Command[] => {
        if (state.modifiers.lshift) {
            return [['XCONTROL', self.xControls[0]]]
        }
        return [['XCONTROL', self.xControls[0]]] 
    }
  },
  color: (state, self) => {
    if (state.modifiers.esc) {
        const data = state.ableton.modules[self.param_name]
        if(data){
          return rgbMap[data.color][data.brightness]
        }
        return rgbMap['dark'][0]
    }
    const data = state.ableton.instr[self.param_name]
    if(data){
      return rgbMap[data.color][data.brightness]
    }
    return rgbMap['dark'][0]
  }
}

export default functionKey