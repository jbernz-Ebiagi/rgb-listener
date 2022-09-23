import rgbMap from "../rgb_map"
import { State, IKey, Command } from "../types"
import { parseXControl } from "./key_map"

const tildeKey: IKey = {
  key_name: 'tilde',
  hid_id: 53,
  row: 1,
  column: 0,
  commands: {
    on: (state: State, self: IKey): Command[] => {
      if (state.modifiers.lshift) {
        return [['XCONTROL', parseXControl(self.xControls[0],self)]]
      }
      if (state.modifiers.esc) {
        return [['XCONTROL', parseXControl(self.xControls[1],self)]]
      }
      if (state.modifiers.lcommand) {
        return [['XCONTROL', parseXControl(self.xControls[2],self)]]
      }
      return []
    }
  },
  xControls: [
    'stop_all_loops',
    'rebuild_set',
    'rearm_all'
  ],
  color: (state, self) => {
    if (state.modifiers.lshift) {
      return rgbMap['blue'][1]
    }
    if (state.modifiers.esc) {
      return rgbMap['gold'][1]
    }
    return rgbMap['dark'][0]
  },
}

export default tildeKey