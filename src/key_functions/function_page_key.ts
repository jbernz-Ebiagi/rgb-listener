import rgbMap from "../rgb_map"
import { State, IKey, Command } from "../types"

const functionKey = {
  xControls: [],
  commands: {
    on: (state: State, self: IKey): Command[] => {
      if (state.activeModules.A || state.activeModules.B) {
        return [['MODULE_PAGE', self.param_name]]
      }
      return [['INSTRUMENT_PAGE', self.param_name]]
    }
  },
  color: (state, self) => {
    let page
    let maxPages
    if (state.activeModules.A || state.activeModules.B) {
      page = state.modulePage
      maxPages = Math.floor(state.ableton.modules.length/state.pageSize)+1
    } else {
      page = state.instrumentPage
      maxPages = Math.floor(state.ableton.instr.length/state.pageSize)+1
    }
    if (self.param_name == 1 && page < maxPages - 1) {
      return rgbMap['white'][1]
    } else if (self.param_name == -1 && page > 0) {
      return rgbMap['white'][1]
    }
    return rgbMap['dark'][0]
  }
}

export default functionKey