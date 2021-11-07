import rgbMap from "../rgb_map"
import { State, IKey, Command } from "../types"

const octaveKey = {
  xControls: [
    "select_snap {param_name}",
    "assign_snap {param_name}",
    "clear_snap {param_name}",
    "deselect_snap {param_name}",
    "woot_arp_on",
    "woot_arp_off"
  ],
  commands: {
    on: (state: State, self: IKey): Command[] => {
      if (state.modifiers.tab) {
        return [['XCONTROL', self.xControls[4]]]
      }
      if (state.modifiers.lalt) {
        return [['XCONTROL', self.xControls[1]]]
      }
      if (state.modifiers.lctrl) {
        return [['XCONTROL', self.xControls[2]]]
      }
      return [['XCONTROL', self.xControls[0]]]
    },
    off: (state: State, self: IKey): Command[] => {
      if (state.modifiers.tab) {
        if (state.modifiers.tab) {
          return [['XCONTROL', self.xControls[5]]]
        }
      }
      if (!state.modifiers.lalt && !state.modifiers.lctrl) {
        return [['XCONTROL', self.xControls[3]]]
      }
      return []
    }
  },
  color: (state, self) => {
    if (state.modifiers.tab) {
      if (state.ableton.woot_arp) {
        return rgbMap['gold'][state.ableton.woot_arp.device_on ? 1 : 0]
      }
      return rgbMap['dark'][0]
    }
    const snap = state.ableton.snaps[self.param_name]
    if (snap) {
      return rgbMap[snap.color][snap.brightness]
    }
    return rgbMap['dark'][0]
  }
}

export default octaveKey