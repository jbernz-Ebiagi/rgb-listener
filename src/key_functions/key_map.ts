import { IKey } from '../types'
import rgbMap from '../rgb_map'
import mainKey from './main_key';
import modifierKey from './modifier_key';
import tildeKey from './tilde_key'
import functionKey from './function_key'

const keyMap: IKey[] = [
  tildeKey,
  {
    ...mainKey,
    key_name: '1',
    hid_id: 30,
    row: 1,
    column: 1,
    midi_note: 0
  },
  {
    ...mainKey,
    key_name: '2',
    hid_id: 31,
    row: 1,
    column: 2,
    midi_note: 1
  },
  {
    ...mainKey,
    key_name: '3',
    hid_id: 32,
    row: 1,
    column: 3,
    midi_note: 2
  },
  {
    ...mainKey,
    key_name: '4',
    hid_id: 33,
    row: 1,
    column: 4,
    midi_note: 3
  },
  {
    ...mainKey,
    key_name: '5',
    hid_id: 34,
    row: 1,
    column: 5,
    midi_note: 4
  },
  {
    ...mainKey,
    key_name: '6',
    hid_id: 35,
    row: 1,
    column: 6,
    midi_note: 5
  },
  {
    ...mainKey,
    key_name: '7',
    hid_id: 36,
    row: 1,
    column: 7,
    midi_note: 6
  },
  {
    ...mainKey,
    key_name: '8',
    hid_id: 37,
    row: 1,
    column: 8,
    midi_note: 7
  },
  {
    ...mainKey,
    key_name: '9',
    hid_id: 38,
    row: 1,
    column: 9,
    midi_note: 8
  },
  {
    ...mainKey,
    key_name: '0',
    hid_id: 39,
    row: 1,
    column: 10,
    midi_note: 9
  },
  {
    ...mainKey,
    key_name: '-',
    hid_id: 45,
    row: 1,
    column: 11,
    midi_note: 10
  },
  {
    ...mainKey,
    key_name: 'equal',
    hid_id: 46,
    row: 1,
    column: 12,
    midi_note: 11
  },
  {
    ...mainKey,
    key_name: 'q',
    hid_id: 20,
    row: 2,
    column: 1,
    midi_note: 12
  },
  {
    ...mainKey,
    key_name: 'w',
    hid_id: 26,
    row: 2,
    column: 2,
    midi_note: 13
  },
  {
    ...mainKey,
    key_name: 'e',
    hid_id: 8,
    row: 2,
    column: 3,
    midi_note: 14
  },
  {
    ...mainKey,
    key_name: 'r',
    hid_id: 21,
    row: 2,
    column: 4,
    midi_note: 15
  },
  {
    ...mainKey,
    key_name: 't',
    hid_id: 23,
    row: 2,
    column: 5,
    midi_note: 16
  },
  {
    ...mainKey,
    key_name: 'y',
    hid_id: 28,
    row: 2,
    column: 6,
    midi_note: 17
  },
  {
    ...mainKey,
    key_name: 'u',
    hid_id: 24,
    row: 2,
    column: 7,
    midi_note: 18
  },
  {
    ...mainKey,
    key_name: 'i',
    hid_id: 12,
    row: 2,
    column: 8,
    midi_note: 19
  },
  {
    ...mainKey,
    key_name: 'o',
    hid_id: 18,
    row: 2,
    column: 9,
    midi_note: 20
  },
  {
    ...mainKey,
    key_name: 'p',
    hid_id: 19,
    row: 2,
    column: 10,
    midi_note: 21
  },
  {
    ...mainKey,
    key_name: 'lb',
    hid_id: 47,
    row: 2,
    column: 11,
    midi_note: 22
  },
  {
    ...mainKey,
    key_name: 'rb',
    hid_id: 48,
    row: 2,
    column: 12,
    midi_note: 23
  },
  {
    ...mainKey,
    key_name: 'a',
    hid_id: 4,
    row: 3,
    column: 1,
    midi_note: 24
  },
  {
    ...mainKey,
    key_name: 's',
    hid_id: 22,
    row: 3,
    column: 2,
    midi_note: 25
  },
  {
    ...mainKey,
    key_name: 'd',
    hid_id: 7,
    row: 3,
    column: 3,
    midi_note: 26
  },
  {
    ...mainKey,
    key_name: 'f',
    hid_id: 9,
    row: 3,
    column: 4,
    midi_note: 27
  },
  {
    ...mainKey,
    key_name: 'g',
    hid_id: 10,
    row: 3,
    column: 5,
    midi_note: 28
  },
  {
    ...mainKey,
    key_name: 'h',
    hid_id: 11,
    row: 3,
    column: 6,
    midi_note: 29
  },
  {
    ...mainKey,
    key_name: 'j',
    hid_id: 13,
    row: 3,
    column: 7,
    midi_note: 30
  },
  {
    ...mainKey,
    key_name: 'k',
    hid_id: 14,
    row: 3,
    column: 8,
    midi_note: 31
  },
  {
    ...mainKey,
    key_name: 'l',
    hid_id: 15,
    row: 3,
    column: 9,
    midi_note: 32
  },
  {
    ...mainKey,
    key_name: 'semi',
    hid_id: 51,
    row: 3,
    column: 10,
    midi_note: 33
  },
  {
    ...mainKey,
    key_name: 'apos',
    hid_id: 52,
    row: 3,
    column: 11,
    midi_note: 34
  },
  {
    ...mainKey,
    key_name: 'z',
    hid_id: 29,
    row: 4,
    column: 2,
    midi_note: 35
  },
  {
    ...mainKey,
    key_name: 'x',
    hid_id: 27,
    row: 4,
    column: 3,
    midi_note: 36
  },
  {
    ...mainKey,
    key_name: 'c',
    hid_id: 6,
    row: 4,
    column: 4,
    midi_note: 37
  },
  {
    ...mainKey,
    key_name: 'v',
    hid_id: 25,
    row: 4,
    column: 5,
    midi_note: 38
  },
  {
    ...mainKey,
    key_name: 'b',
    hid_id: 5,
    row: 4,
    column: 6,
    midi_note: 39
  },
  {
    ...mainKey,
    key_name: 'n',
    hid_id: 17,
    row: 4,
    column: 7,
    midi_note: 40
  },
  {
    ...mainKey,
    key_name: 'm',
    hid_id: 16,
    row: 4,
    column: 8,
    midi_note: 41
  },
  {
    ...mainKey,
    key_name: ',',
    hid_id: 54,
    row: 4,
    column: 9,
    midi_note: 42
  },
  {
    ...mainKey,
    key_name: '.',
    hid_id: 55,
    row: 4,
    column: 10,
    midi_note: 43
  },
  {
    ...mainKey,
    key_name: 'slash',
    hid_id: 56,
    row: 4,
    column: 11,
    midi_note: 44
  },
  {
    ...functionKey,
    key_name: 'f1',
    param_name: 0,
    hid_id: 58,
    row: 0,
    column: 2,
  },
  {
    ...functionKey,
    key_name: 'f2',
    param_name: 1,
    hid_id: 59,
    row: 0,
    column: 3,
  },
  {
    ...functionKey,
    key_name: 'f3',
    param_name: 2,
    hid_id: 60,
    row: 0,
    column: 4,
  },
  {
    ...functionKey,
    key_name: 'f4',
    param_name: 3,
    hid_id: 61,
    row: 0,
    column: 5,
  },
  {
    ...functionKey,
    key_name: 'f5',
    param_name: 4,
    hid_id: 62,
    row: 0,
    column: 6,
  },
  {
    ...functionKey,
    key_name: 'f6',
    param_name: 5,
    hid_id: 63,
    row: 0,
    column: 7,
  },
  {
    ...functionKey,
    key_name: 'f7',
    param_name: 6,
    hid_id: 64,
    row: 0,
    column: 8,
  },
  {
    ...functionKey,
    key_name: 'f8',
    param_name: 7,
    hid_id: 65,
    row: 0,
    column: 9,
  },
  {
    ...functionKey,
    key_name: 'f9',
    param_name: 8,
    hid_id: 66,
    row: 0,
    column: 10,
  },
  {
    ...functionKey,
    key_name: 'f10',
    param_name: 9,
    hid_id: 67,
    row: 0,
    column: 11,
  },
  {
    ...functionKey,
    key_name: 'f11',
    param_name: 10,
    hid_id: 68,
    row: 0,
    column: 12,
  },
  {
    ...functionKey,
    key_name: 'f12',
    param_name: 11,
    hid_id: 69,
    row: 0,
    column: 13,
  },
  {
    ...modifierKey,
    key_name: 'escape',
    param_name: 'esc',
    hid_id: 41,
    row: 0,
    column: 0,
  },
  {
    ...modifierKey,
    key_name: 'tab',
    param_name: 'tab',
    hid_id: 43,
    row: 2,
    column: 0,
  },
  {
    ...modifierKey,
    key_name: 'left_shift',
    param_name: 'lshift',
    hid_id: 225,
    row: 4,
    column: 0,
  },
  {
    ...modifierKey,
    key_name: 'left_control',
    param_name: 'lctrl',
    hid_id: 224,
    row: 5,
    column: 0,
  },
  {
    ...modifierKey,
    key_name: 'left_command',
    param_name: 'lcommand',
    hid_id: 227,
    row: 5,
    column: 1,
  },
  {
    ...modifierKey,
    key_name: 'left_alt',
    param_name: 'lalt',
    hid_id: 226,
    row: 5,
    column: 2,
  },
  {
    key_name: 'right_control',
    commands: {
      off: () => { return [['TOGGLE_EBIAGI', null]] }
    },
    color: (state, self) => {
      return rgbMap['green'][0]
    },
    hid_id: 228,
    row: 5,
    column: 13,
  },
]

const parseXControl = (control: string, key: IKey) => {
  control = control.replace(/{key_name}/g, key.key_name);
  return control.replace(/{param_name}/g, key.param_name as string);
}

const parseKey = (key: IKey) => {
  const parsedXControls = []
  if (key.xControls) {
    for (let i = 0; i < key.xControls.length; i++) {
      parsedXControls[i] = parseXControl(key.xControls[i], key)
    }
  }
  return { ...key, xControls: parsedXControls }
}

export default keyMap.map(parseKey)