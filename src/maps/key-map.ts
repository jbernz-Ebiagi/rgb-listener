export interface IKey {
    key_name: string;
    commands: {
        on?: string
        off?: string
    };
    x_control?: {};
    hid_id: number;
    row: number;
    column: number;
}

const loopXControls = {
    none: "select_loop {key_name} : deselect_loop {key_name}",
    lctrl: "clear_loop {key_name}",
    lshift: "stop_loop {key_name}",
}

export const keyMap:IKey[] = [
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
        key_name: 'hyphen',
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
        key_name: 'equal_sign',
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
        key_name: 'open_bracket',
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
        key_name: 'close_bracket',
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
        key_name: 'semicolon',
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
        key_name: 'quote',
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
        key_name: 'comma',
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
        key_name: 'period',
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
        key_name: 'slash',
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
        key_name: 'right_control',
        commands: {
            on: 'toggle_keyboard:'
        },
        hid_id: 228,
        row: 5,
        column: 13,
    },
]