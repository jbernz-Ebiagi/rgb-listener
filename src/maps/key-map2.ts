import { State, IKey, commands } from '../types'

const parseXControl = (control: string, key: IKey) => {
  control = control.replace(/{key_name}/g, key.key_name);
  return control.replace(/{param_name}/g, key.param_name);
}

const parseKey = (key: IKey) => {
  const parsedXControls = []
  if(key.xControls){
    for (let i = 0; i < key.xControls.length; i++) {
      parsedXControls[i] = parseXControl(key.xControls[i], key)
    }
  }
  return { ...key, xControls: parsedXControls }
}

const mainKey = {
  commands: {
    on: (state: State, self: IKey): { [key in keyof typeof commands]?: any }[] => {
      if (state.modifiers.tab) {
        return [{ 'NOTE_ON': self.midi_note }]
      }
      if (state.modifiers.lctrl) {
        return [{ 'XCONTROL': self.xControls[1] }] //clear_loop
      }
      if (state.modifiers.lshift) {
        return [{ 'XCONTROL': self.xControls[2] }] //stop_loop
      }
      if (state.modifiers.lalt) {
        return [{ 'XCONTROL': self.xControls[3] }] //quantize_loop
      }
      return [{ 'XCONTROL': self.xControls[0] }] //select_loop
    },
    off: (state: State, self: IKey): { [key in keyof typeof commands]?: any }[] => {
      if (state.modifiers.tab) {
        return [{ 'NOTE_OFF': self.midi_note }]
      }
      return [{ 'NONE': null }]
    }
  },
  xControls: [
    'select_loop {key_name}',
    'clear_loop {key_name}',
    'stop_loop {key_name}',
    'quantize_loop {key_name}'
  ]
}

const modifierKey = {
  commands: {
    on: (state: State, self: IKey): { [key in keyof typeof commands]?: any }[] => {
      return [{ 'ACTIVATE_MODIFIER': self.param_name }]
    },
    off: (state: State, self: IKey): { [key in keyof typeof commands]?: any }[] => {
      return [{ 'DEACTIVATE_MODIFIER': self.param_name }]
    },
  }
}

const keyMap: IKey[] = [
  {
    ...mainKey,
    key_name: '1',
    hid_id: 30,
    row: 1,
    column: 1,
    midi_note: 0
  },
  {
    ...modifierKey,
    key_name: 'left_shift',
    param_name: 'lshift',
    hid_id: 225,
    row: 5,
    column: 0,
},
]

export default keyMap.map(parseKey)