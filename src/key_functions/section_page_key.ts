import rgbMap from "../rgb_map"
import { State, IKey, Command } from "../types"

const sectionPageKey = {
  xControls: [],
  commands: {
    on: (state: State, self: IKey): Command[] => {
      return [['SECTION_PAGE', self.param_name]]
    }
  },
  color: (state, self) => {
    let page = state.sectionPage
    let maxPages = Math.floor(state.ableton.sections.length/state.sectionPageSize)+1
    if (self.param_name == 1 && page < maxPages - 1) {
      return rgbMap['white'][1]
    } else if (self.param_name == -1 && page > 0) {
      return rgbMap['white'][1]
    }
    return rgbMap['dark'][0]
  }
}

export default sectionPageKey