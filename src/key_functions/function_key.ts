import rgbMap from "../rgb_map"
import { State, IKey, Command } from "../types"
import { parseXControl } from "./key_map"

const functionKey = {
  xControls: [
    'select_instrument {param_name}',
    'deselect_instrument {param_name}',
    'stop_instrument {param_name}',
    'assign_module {param_name},A',
    'assign_module {param_name},B'
  ],
  commands: {
    on: (state: State, self: IKey): Command[] => {
      if (state.modifiers.lshift) {
        return [['XCONTROL', parseXControl(self.xControls[2], self, state.instrumentPage, state.pageSize)]]
      }
      if (state.activeModules.A) {
        return [['XCONTROL', parseXControl(self.xControls[3], self, state.modulePage, state.pageSize)],['SELECT_MODULE', ['A']]]
      }
      if (state.activeModules.B) {
        return [['XCONTROL', parseXControl(self.xControls[4], self, state.modulePage, state.pageSize)],['SELECT_MODULE', ['B']]]
      }
      return [['XCONTROL', parseXControl(self.xControls[0], self, state.instrumentPage, state.pageSize)]]
    },
    off: (state: State, self: IKey): Command[] => {
      if (state.modifiers.esc || state.modifiers.lctrl || state.modifiers.lshift || state.activeModules.A || state.activeModules.B) {
        return []
      }
      return [['XCONTROL', parseXControl(self.xControls[1], self, state.instrumentPage, state.pageSize)]]
    }
  },
  color: (state, self) => {
    if (state.activeModules.A || state.activeModules.B) {
      const data = state.ableton.modules[state.modulePage*state.pageSize + self.param_name]
      if (data) {
        return rgbMap[data.color][data.brightness]
      }
      return rgbMap['dark'][0]
    }
    const data = state.ableton.instr[state.instrumentPage*state.pageSize + self.param_name]
    if (data) {
      return rgbMap[data.color][data.brightness]
    }
    return rgbMap['dark'][0]
  },
  pageable: true
}

export default functionKey