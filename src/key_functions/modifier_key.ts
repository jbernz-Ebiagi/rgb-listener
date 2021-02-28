import rgbMap from "../rgb_map"
import { State, IKey, Command } from "../types"

const modifierKey = {
    commands: {
      on: (state: State, self: IKey): Command[] => {
        return [[ 'SET_MODIFIER', [self.param_name, true] ]]
      },
      off: (state: State, self: IKey): Command[] => {
        return [[ 'SET_MODIFIER', [self.param_name, false] ]]
      },
    },
    color: (state, self) => {
      if(state.modifiers[self.param_name]){
        return rgbMap['blue'][1]
      }
      return rgbMap['blue'][0]
    }
  }

  export default modifierKey