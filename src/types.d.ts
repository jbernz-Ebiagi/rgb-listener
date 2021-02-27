export interface IKey {
	key_name: string;
	commands: {
		on?: (state: State, self: IKey) => { [key in keyof typeof commands]?: any }[]
		off?: (state: State, self: IKey) => { [key in keyof typeof commands]?: any }[]
	};
	xControls?: string[];
	param_name?: string;
	hid_id: number;
	midi_note?: number;
	row: number;
	column: number;
}

export enum modifiers {
	'tab',
	'lshift',
	'lctrl',
	'lcommand',
	'lalt',
	'esc'
}

export enum commands {
	'NOTE_ON',
	'NOTE_OFF',
	'XCONTROL',
	'TOGGLE_MODIFIER',
	'ACTIVATE_MODIFIER',
	'DEACTIVATE_MODIFIER',
	'NONE'
}

export interface State {
	modifiers: { [key in keyof typeof modifiers]: boolean },
	octave: number,
	ableton: { [ key : string] : any }
}

export interface HidEvent {
	hid_id: number
	velocity: number
	pressed: boolean
}