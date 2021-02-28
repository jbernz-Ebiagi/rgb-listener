export interface IKey {
	key_name: string;
	commands: {
		on?: (state: State, self: IKey) => Command[]
		off?: (state: State, self: IKey) => Command[]
	};
	xControls?: string[];
	color: (state: State, self: IKey) => RGB
	param_name?: string|number;
	hid_id: number;
	midi_note?: number;
	row: number;
	column: number;
}

export type ModifierTypes =
	'tab' |
	'lshift' |
	'lctrl' |
	'lcommand' |
	'lalt' |
	'esc'

export type CommandTypes =
	'NOTE_ON' |
	'NOTE_OFF'|
	'XCONTROL'|
	'TOGGLE_MODIFIER' |
	'SET_MODIFIER' |
	'TOGGLE_EBIAGI' |
	'NONE'

export type Command = [CommandTypes, any] 

export type RGB = {
	r: number;
	g: number;
	b: number;
}

export interface State {
	modifiers: { [key in ModifierTypes]: boolean },
	octave: number,
	ableton: AbletonData,
	active: boolean
}

export interface HidEvent {
	hid_id: number
	velocity: number
	pressed: boolean
}

interface AbletonData {
  clips: [],
  inputs: {},
  snaps: [],
  globalLoop: {},
  mfx: [],
  instr: [],
  loops: {},
  modules: [],
  ginstr: [],
  metronome: false 
}