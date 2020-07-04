export interface IKey {
    key_name: string;
    commands: {
        on?: string
        off?: string
    };
    x_control?: {};
    param_name?: string;
    hid_id: number;
    midi_note?: number;
    row: number;
    column: number;
}

const loopXControls = {
    none: "select_loop {key_name} : deselect_loop {key_name}",
    lctrl: "clear_loop {key_name}",
    lshift: "stop_loop {key_name}",
    lcommand: "quantize_loop {key_name}"
}

const mfxXControls = {
    none: "select_mfx {param_name} : deselect_mfx {param_name}",
    lalt: "select_mfx {param_name} : deselect_mfx {param_name}"
}

const gfxXControls = {
    none: "select_gfx {param_name} : deselect_gfx {param_name}",
    lalt: "select_gfx {param_name} : deselect_gfx {param_name}"
}

const recordControls = {
    none: "select_global_loop {param_name}",
    lshift: "stop_global_loop {param_name}",
    lctrl: "clear_global_loop {param_name}"
}

const inputXControls = {
    none: "select_input {param_name}: deselect_input {param_name}"
}

const instrXControls = {
    none: "select_instrument {param_name}: deselect_instrument {param_name}",
    esc: "activate_module {param_name}",
    'esc,lctrl': "clear_module {param_name}"
}

export const keyMap:IKey[] = [
    {
        key_name: 'tilde',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: {
            lshift: "stop_all_loops",
            esc: "rebuild_set"
        },
        hid_id: 53,
        row: 1,
        column: 0,
    },
    {
        key_name: '1',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 30,
        row: 1,
        column: 1,
    },
    {
        key_name: '2',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 31,
        row: 1,
        column: 2,
    },
    {
        key_name: '3',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 32,
        row: 1,
        column: 3,
    },
    {
        key_name: '4',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 33,
        row: 1,
        column: 4,
    },
    {
        key_name: '5',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 34,
        row: 1,
        column: 5,
    },
    {
        key_name: '6',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 35,
        row: 1,
        column: 6,
    },
    {
        key_name: '7',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 36,
        row: 1,
        column: 7,
    },
    {
        key_name: '8',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 37,
        row: 1,
        column: 8,
    },
    {
        key_name: '9',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 38,
        row: 1,
        column: 9,
    },
    {
        key_name: '0',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 39,
        row: 1,
        column: 10,
    },
    {
        key_name: '-',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 45,
        row: 1,
        column: 11,
    },
    {
        key_name: '=',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 46,
        row: 1,
        column: 12,
    },
    {
        key_name: 'q',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 20,
        row: 2,
        column: 1,
    },
    {
        key_name: 'w',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 26,
        row: 2,
        column: 2,
    },
    {
        key_name: 'e',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 8,
        row: 2,
        column: 3,
    },
    {
        key_name: 'r',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 21,
        row: 2,
        column: 4,
    },
    {
        key_name: 't',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 23,
        row: 2,
        column: 5,
    },
    {
        key_name: 'y',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 28,
        row: 2,
        column: 6,
    },
    {
        key_name: 'u',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 24,
        row: 2,
        column: 7,
    },
    {
        key_name: 'i',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 12,
        row: 2,
        column: 8,
    },
    {
        key_name: 'o',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 18,
        row: 2,
        column: 9,
    },
    {
        key_name: 'p',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 19,
        row: 2,
        column: 10,
    },
    {
        key_name: 'lb',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 47,
        row: 2,
        column: 11,
    },
    {
        key_name: 'rb',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 48,
        row: 2,
        column: 12,
    },
    {
        key_name: 'a',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 4,
        row: 3,
        column: 1,
    },
    {
        key_name: 's',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 22,
        row: 3,
        column: 2,
    },
    {
        key_name: 'd',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 7,
        row: 3,
        column: 3,
    },
    {
        key_name: 'f',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 9,
        row: 3,
        column: 4,
    },
    {
        key_name: 'g',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 10,
        row: 3,
        column: 5,
    },
    {
        key_name: 'h',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 11,
        row: 3,
        column: 6,
    },
    {
        key_name: 'j',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 13,
        row: 3,
        column: 7,
    },
    {
        key_name: 'k',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 14,
        row: 3,
        column: 8,
    },
    {
        key_name: 'l',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 15,
        row: 3,
        column: 9,
    },
    {
        key_name: ';',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 51,
        row: 3,
        column: 10,
    },
    {
        key_name: 'apos',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 52,
        row: 3,
        column: 11,
    },
    {
        key_name: 'z',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 29,
        row: 4,
        column: 2,
    },
    {
        key_name: 'x',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 27,
        row: 4,
        column: 3,
    },
    {
        key_name: 'c',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 6,
        row: 4,
        column: 4,
    },
    {
        key_name: 'v',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 25,
        row: 4,
        column: 5,
    },
    {
        key_name: 'b',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 5,
        row: 4,
        column: 6,
    },
    {
        key_name: 'n',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 17,
        row: 4,
        column: 7,
    },
    {
        key_name: 'm',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 16,
        row: 4,
        column: 8,
    },
    {
        key_name: ',',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 54,
        row: 4,
        column: 9,
    },
    {
        key_name: '.',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 55,
        row: 4,
        column: 10,
    },
    {
        key_name: '/',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: loopXControls,
        hid_id: 38,
        row: 4,
        column: 11,
    },
    {
        key_name: 'spacebar',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: {
            none: 'mute_all_loops : unmute_all_loops'
        },
        hid_id: 44,
        row: 5,
        column: 5,
    },
    {
        key_name: 'f1',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: mfxXControls,
        param_name: 'MFX1',
        hid_id: 58,
        row: 0,
        column: 2,
    },
    {
        key_name: 'f2',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: mfxXControls,
        param_name: 'MFX2',
        hid_id: 59,
        row: 0,
        column: 3,
    },
    {
        key_name: 'f3',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: mfxXControls,
        param_name: 'MFX3',
        hid_id: 60,
        row: 0,
        column: 4,
    },
    {
        key_name: 'f4',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: mfxXControls,
        param_name: 'MFX4',
        hid_id: 61,
        row: 0,
        column: 5,
    },
    {
        key_name: 'f5',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: instrXControls,
        param_name: 'INSTR1',
        hid_id: 62,
        row: 0,
        column: 6,
    },
    {
        key_name: 'f6',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: instrXControls,
        param_name: 'INSTR2',
        hid_id: 63,
        row: 0,
        column: 7,
    },
    {
        key_name: 'f7',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: instrXControls,
        param_name: 'INSTR3',
        hid_id: 64,
        row: 0,
        column: 8,
    },
    {
        key_name: 'f8',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: instrXControls,
        param_name: 'INSTR4',
        hid_id: 65,
        row: 0,
        column: 9,
    },
    {
        key_name: 'f9',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: instrXControls,
        param_name: 'INSTR5',
        hid_id: 66,
        row: 0,
        column: 10,
    },
    {
        key_name: 'f10',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: instrXControls,
        param_name: 'INSTR6',
        hid_id: 67,
        row: 0,
        column: 11,
    },
    {
        key_name: 'f11',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: instrXControls,
        param_name: 'INSTR7',
        hid_id: 68,
        row: 0,
        column: 12,
    },
    {
        key_name: 'f12',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: instrXControls,
        param_name: 'INSTR8',
        hid_id: 69,
        row: 0,
        column: 13,
    },
    {
        key_name: 'insert',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: recordControls,
        param_name: 'RECORD1',
        hid_id: 73,
        row: 1,
        column: 14,
    },
    {
        key_name: 'home',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: recordControls,
        param_name: 'RECORD2',
        hid_id: 74,
        row: 1,
        column: 15,
    },
    {
        key_name: 'page_up',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: recordControls,
        param_name: 'RECORD3',
        hid_id: 75,
        row: 1,
        column: 16,
    },
    {
        key_name: 'delete',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: gfxXControls,
        param_name: 'GFX1',
        hid_id: 76,
        row: 2,
        column: 14,
    },
    {
        key_name: 'end',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: gfxXControls,
        param_name: 'GFX2',
        hid_id: 77,
        row: 2,
        column: 15,
    },
    {
        key_name: 'page_down',
        commands: {
            on: 'send_midi_on:{mod_channel}|{hid_id}',
            off: 'send_midi_off:{mod_channel}|{hid_id}'
        },
        x_control: gfxXControls,
        param_name: 'GFX3',
        hid_id: 78,
        row: 2,
        column: 16,
    },
    {
        key_name: 'escape',
        commands: {
            on: 'activate_modifier:esc',
            off: 'deactivate_modifier:esc'
        },
        hid_id: 41,
        row: 0,
        column: 0,
    },
    {
        key_name: 'left_shift',
        commands: {
            on: 'activate_modifier:lshift',
            off: 'deactivate_modifier:lshift'
        },
        hid_id: 225,
        row: 5,
        column: 0,
    },
    {
        key_name: 'left_control',
        commands: {
            on: 'activate_modifier:lctrl',
            off: 'deactivate_modifier:lctrl'
        },
        hid_id: 224,
        row: 5,
        column: 0,
    },
    {
        key_name: 'left_command',
        commands: {
            on: 'activate_modifier:lcommand',
            off: 'deactivate_modifier:lcommand'
        },
        hid_id: 227,
        row: 5,
        column: 1,
    },
    {
        key_name: 'left_alt',
        commands: {
            on: 'activate_modifier:lalt',
            off: 'deactivate_modifier:lalt'
        },
        hid_id: 226,
        row: 5,
        column: 2,
    },
    {
        key_name: 'right_shift',
        commands: {
            on: 'send_midi_on:{mod_channel}|{midi_note}',
            off: 'send_midi_off:{mod_channel}|{midi_note}'
        },
        x_control: {
            none: 'toggle_input {param_name}'
        },
        param_name: 'LINE',
        hid_id: 229,
        midi_note: 79,
        row: 4,
        column: 13,
    },
    {
        key_name: 'right_alt',
        commands: {
            on: 'send_midi_on:{mod_channel}|{midi_note}',
            off: 'send_midi_off:{mod_channel}|{midi_note}'
        },
        x_control: inputXControls,
        param_name: 'AS',
        hid_id: 230,
        midi_note: 70,
        row: 5,
        column: 10,
    },
    {
        key_name: 'right_command',
        commands: {
            on: 'send_midi_on:{mod_channel}|{midi_note}',
            off: 'send_midi_off:{mod_channel}|{midi_note}'
        },
        x_control: inputXControls,
        param_name: 'CBORD',
        hid_id: 231,
        midi_note: 71,
        row: 5,
        column: 11,
    },
    {
        key_name: 'fn',
        commands: {
            on: 'send_midi_on:{mod_channel}|{midi_note}',
            off: 'send_midi_off:{mod_channel}|{midi_note}'
        },
        x_control: inputXControls,
        param_name: 'NANOK',
        hid_id: 769,
        midi_note: 72,
        row: 5,
        column: 12,
    },
    {
        key_name: 'right_control',
        commands: {
            off: 'toggle_keyboard:'
        },
        hid_id: 228,
        row: 5,
        column: 13,
    },
]