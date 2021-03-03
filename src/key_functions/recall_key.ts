import rgbMap from "../rgb_map"
import { Command, IKey, State } from "../types"

const recallKey = {
    commands: {
        on: (state: State, self: IKey): Command[] => {
          return [['XCONTROL', self.xControls[0]]]
        }
    },
    color: () => { return rgbMap['white'][0]},
    xControls: ['recall_snap {param_name}']
}

export default recallKey