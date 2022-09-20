import rgbMap from "../rgb_map"
import { State, IKey, Command } from "../types"

const functionKey = {
  xControls: [
    'select_instrument {param_name}',
    'deselect_instrument {param_name}',
    'stop_instrument {param_name}',
    'assign_module {param_name} A',
    'assign_module {param_name} B'
  ],
  commands: {
    on: (state: State, self: IKey): Command[] => {
      if (state.modifiers.lshift) {
        return [['XCONTROL', self.xControls[2]]]
      }
      if (state.activeModules.A) {
        return [['XCONTROL', self.xControls[3]]]
      }
      if (state.activeModules.B) {
        return [['XCONTROL', self.xControls[4]]]
      }
      return [['XCONTROL', self.xControls[0]]]
    },
    off: (state: State, self: IKey): Command[] => {
      if (state.modifiers.esc || state.modifiers.lctrl || state.modifiers.lshift) {
        return []
      }
      return [['XCONTROL', self.xControls[1]]]
    }
  },
  color: (state, self) => {
    if (state.activeModules.A || state.activeModules.B) {
      const data = state.ableton.modules[self.param_name]
      if (data) {
        return rgbMap[data.color][data.brightness]
      }
      return rgbMap['dark'][0]
    }
    const data = state.ableton.instr[self.param_name]
    if (data) {
      return rgbMap[data.color][data.brightness]
    }
    return rgbMap['dark'][0]
  },
  pageable: true
}

export default functionKey