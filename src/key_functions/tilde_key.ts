import rgbMap from "../rgb_map"
import { State, IKey, Command } from "../types"

const tildeKey: IKey = {
  key_name: 'tilde',
  hid_id: 53,
  row: 1,
  column: 0,
  commands: {
    on: (state: State, self: IKey): Command[] => {
      if (state.modifiers.lshift) {
        return [['XCONTROL', self.xControls[0]]]
      }
      if (state.modifiers.esc) {
        return [['XCONTROL', self.xControls[1]]]
      }
      return []
    }
  },
  xControls: [
    'stop_all_loops',
    'rebuild_set',
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