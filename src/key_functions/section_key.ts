import rgbMap from "../rgb_map"
import { State, IKey, Command } from "../types"
import { parseXControl } from "./key_map"
import { flash } from "../animations"

const sectionKey = {
  commands: {
    on: (state: State, self: IKey): Command[] => {
      if (state.modifiers.lshift) {
        return [['XCONTROL', parseXControl(self.xControls[1],self, state.sectionPage, state.sectionPageSize)]] //stop_loop
      }
      if (state.modifiers.lalt) {
        return [['XCONTROL', parseXControl(self.xControls[3],self, state.sectionPage, state.sectionPageSize)]]
      }
      if (state.modifiers.lctrl) {
        return [['XCONTROL', parseXControl(self.xControls[4],self, state.sectionPage, state.sectionPageSize)]] 
      }
      return [['XCONTROL', parseXControl(self.xControls[0],self, state.sectionPage, state.sectionPageSize)]] //select_loop
    },
    off: (state: State, self: IKey): Command[] => {
      return [['XCONTROL', parseXControl(self.xControls[2],self, state.sectionPage, state.sectionPageSize)]]
    }
  },
  xControls: [
    'select_section {param_name}',
    'stop_section {param_name}',
    'deselect_section {param_name}',
    "assign_snap {param_name}",
    "clear_snap {param_name}",
  ],
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