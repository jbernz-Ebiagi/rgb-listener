import rgbMap from "../rgb_map"
import { State, IKey, Command } from "../types"
import { parseXControl } from "./key_map"

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
        return [['XCONTROL', parseXControl(self.xControls[4],self)]]
      }
      if (state.modifiers.lalt) {
        return [['XCONTROL', parseXControl(self.xControls[1],self)]]
      }
      if (state.modifiers.lctrl) {
        return [['XCONTROL', parseXControl(self.xControls[2],self)]]
      }
      return [['XCONTROL', parseXControl(self.xControls[0],self)]]
    },
    off: (state: State, self: IKey): Command[] => {
      if (state.modifiers.tab) {
        if (state.modifiers.tab) {
          return [['XCONTROL', parseXControl(self.xControls[5],self)]]
        }
      }
      if (!state.modifiers.lalt && !state.modifiers.lctrl) {
        return [['XCONTROL', parseXControl(self.xControls[3],self)]]
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