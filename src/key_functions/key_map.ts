import { IKey } from '../types'
import rgbMap from '../rgb_map'
import mainKey from './main_key';
import modifierKey from './modifier_key';
import tildeKey from './tilde_key'

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
},
{
  ...mainKey,
    key_name: '3',
    hid_id: 32,
    row: 1,
    column: 3,
},
{
  ...mainKey,
    key_name: '4',
    hid_id: 33,
    row: 1,
    column: 4,
},
{
  ...mainKey,
    key_name: '5',
    hid_id: 34,
    row: 1,
    column: 5,
},
{
  ...mainKey,
    key_name: '6',
    hid_id: 35,
    row: 1,
    column: 6,
},
{
  ...mainKey,
    key_name: '7',
    hid_id: 36,
    row: 1,
    column: 7,
},
{
  ...mainKey,
    key_name: '8',
    hid_id: 37,
    row: 1,
    column: 8,
},
{
  ...mainKey,
    key_name: '9',
    hid_id: 38,
    row: 1,
    column: 9,
},
{
  ...mainKey,
    key_name: '0',
    hid_id: 39,
    row: 1,
    column: 10,
},
{
  ...mainKey,
    key_name: '-',
    hid_id: 45,
    row: 1,
    column: 11,
},
{
  ...mainKey,
    key_name: 'equal',
    hid_id: 46,
    row: 1,
    column: 12,
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
    key_name: 'right_control',
    commands: {
        off: () => {return [['TOGGLE_EBIAGI', null]]}
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

export default keyMap.map(parseKey)