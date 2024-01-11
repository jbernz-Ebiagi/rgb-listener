import rgbMap from "../rgb_map"
import { State, IKey, Command } from "../types"
import { parseXControl } from "./key_map"
import { flash } from "../animations"

const sectionKey = {
  xControls: [
    "select_section {param_name}"
  ],
  commands: {
    on: (state: State, self: IKey): Command[] => {
    //   return [['XCONTROL', parseXControl(self.xControls[0],self)]]
      return [['XCONTROL', parseXControl(self.xControls[0], self, state.sectionPage, state.sectionPageSize)]]
    },
    off: (state: State, self: IKey): Command[] => {
      return []
    }
  },
  color: (state, self) => {
    const section = state.ableton.sections[state.sectionPage*state.sectionPageSize + self.param_name]
    if (section) {
        if (section.brightness == 3){
            return flash(rgbMap[section.color][2])
        }
      return rgbMap[section.color][section.brightness]
    }
    return rgbMap['dark'][0]
  }
}

export default sectionKey