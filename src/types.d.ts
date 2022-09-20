export interface IKey {
	key_name: string;
	commands?: {
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
	'esc' |
	'capslock'

export type CommandTypes =
	'NOTE_ON' |
	'NOTE_OFF'|
	'XCONTROL'|
	'TOGGLE_MODIFIER' |
	'SET_MODIFIER' |
	'TOGGLE_EBIAGI' |
	'CHANGE_OCTAVE' |
	'FLUSH_MIDI' |
	'TOGGLE_AS' |
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
	notes: number[],
	active: boolean,
	midiOut: boolean
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
  globalLoop: {color?: string, brightness?: number},
  mfx: [],
  instr: [],
  loops: {},
  modules: [],
  ginstr: [],
  metronome: boolean,
  smart_record: {color?: string, brightness?: number}
  woot_arp: {device_on: number}
  active_crossfade: boolean
}