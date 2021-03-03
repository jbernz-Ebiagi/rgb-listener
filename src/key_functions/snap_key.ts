import rgbMap from "../rgb_map"
import { State, IKey, Command } from "../types"

const octaveKey = {
    xControls: [
        "select_snap {param_name}",
        "assign_snap {param_name}",
        "clear_snap {param_name}",
        "deselect_snap {param_name}"
    ],
  commands: {
    on: (state: State, self: IKey): Command[] => {
      if (state.modifiers.lalt) {
        return [['XCONTROL', self.xControls[1]]]
      }
      if (state.modifiers.lctrl) {
        return [['XCONTROL', self.xControls[2]]]
      }
      return [['XCONTROL', self.xControls[0]]]
    },
    off: (state: State, self: IKey): Command[] => {
        if (!state.modifiers.lalt && !state.modifiers.lctrl) {
          return [['XCONTROL', self.xControls[3]]]
        }
        return []
      }
  },
  color: (state, self) => {
    const snap = state.ableton.snaps[self.param_name]
    if(snap){
        return rgbMap[snap.color][snap.brightness]
    }
    return rgbMap['dark'][0]
  }
}

export default octaveKey