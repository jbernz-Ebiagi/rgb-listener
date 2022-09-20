import rgbMap from "../rgb_map"
import { State, IKey, Command } from "../types"

const functionKey = {
  xControls: [
    'target_module {param_name}',
    'clear_module {param_name}'
  ],
  commands: {
    on: (state: State, self: IKey): Command[] => {
      if (state.modifiers.lctrl) {
        return [['XCONTROL', self.xControls[1]]]
      }
      if(state.ableton.active_modules[self.param_name] == undefined){
        return [['SELECT_MODULE', [self.param_name]]]
      }
      return [['XCONTROL', self.xControls[0]]]

    },
    off: (state: State, self: IKey): Command[] => {
      return []
    }
  },
  color: (state, self) => {
    const data = state.ableton.active_modules[self.param_name]
    if (data != undefined && data.color != undefined) {
      return rgbMap[data.color][1]
    }
    else if (state.activeModules[self.param_name]){
      return rgbMap['red'][2]
    }
    return rgbMap['red'][0]
  }
}

export default functionKey