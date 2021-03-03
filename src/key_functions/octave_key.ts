import rgbMap from "../rgb_map"
import { State, IKey, Command } from "../types"

const octaveKey = {
  commands: {
    on: (state: State, self: IKey): Command[] => {
      if (state.modifiers.tab) {
        if (state.modifiers.esc) {
          return [['FLUSH_MIDI', null]]
        }
        return [['CHANGE_OCTAVE', self.param_name]]
      }
      return []
    }
  },
  color: (state, self) => {
    if (state.modifiers.tab) {
      if (state.octave == 0) {
        return rgbMap['red'][1]
      }
      if (state.octave == 1) {
        return rgbMap['orange'][1]
      }
      if (state.octave == 2) {
        return rgbMap['gold'][1]
      }
      if (state.octave == 3) {
        return rgbMap['green'][1]
      }
      if (state.octave == 4) {
        return rgbMap['blue'][1]
      }
      if (state.octave == 5) {
        return rgbMap['lavender'][1]
      }
    }
    return rgbMap['dark'][0]
  }
}

export default octaveKey