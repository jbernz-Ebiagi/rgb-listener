import rgbMap from "../rgb_map"
import { Command, IKey, State } from "../types"
import { parseXControl } from "./key_map"

const recallKey = {
    commands: {
        on: (state: State, self: IKey): Command[] => {
          return [['XCONTROL', parseXControl(self.xControls[0],self)]]
        }
    },
    color: () => { return rgbMap['white'][0]},
    xControls: ['recall_snap {param_name}']
}

export default recallKey