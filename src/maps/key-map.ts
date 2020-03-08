export interface IKey {
    key_name: string;
    commands: {
        on?: string
        off?: string
    };
    x_control?: string;
    hid_id: number;
    row: number;
    column: number;
}

export const keyMap:IKey[] = [
    {
        key_name: '1',
        commands: {
            on: 'send_midi_on:{hid_id}',
            off: 'send_midi_off:{hid_id}'
        },
        x_control: "select_loop {key_name}",
        hid_id: 30,
        row: 1,
        column: 1,
    },
    {
        key_name: '2',
        commands: {
            on: 'send_midi_on:{hid_id}',
            off: 'send_midi_off:{hid_id}'
        },
        x_control: "select_loop {key_name}",
        hid_id: 31,
        row: 1,
        column: 2,
    },
    {
        key_name: '3',
        commands: {
            on: 'send_midi_on:{hid_id}',
            off: 'send_midi_off:{hid_id}'
        },
        x_control: "select_loop {key_name}",
        hid_id: 32,
        row: 1,
        column: 3,
    },
    {
        key_name: '4',
        commands: {
            on: 'send_midi_on:{hid_id}',
            off: 'send_midi_off:{hid_id}'
        },
        x_control: "select_loop {key_name}",
        hid_id: 33,
        row: 1,
        column: 4,
    },
    {
        key_name: '5',
        commands: {
            on: 'send_midi_on:{hid_id}',
            off: 'send_midi_off:{hid_id}'
        },
        x_control: "select_loop {key_name}",
        hid_id: 34,
        row: 1,
        column: 5,
    },
    {
        key_name: '6',
        commands: {
            on: 'send_midi_on:{hid_id}',
            off: 'send_midi_off:{hid_id}'
        },
        x_control: "select_loop {key_name}",
        hid_id: 35,
        row: 1,
        column: 6,
    },
    {
        key_name: '7',
        commands: {
            on: 'send_midi_on:{hid_id}',
            off: 'send_midi_off:{hid_id}'
        },
        x_control: "select_loop {key_name}",
        hid_id: 36,
        row: 1,
        column: 7,
    },
    {
        key_name: '8',
        commands: {
            on: 'send_midi_on:{hid_id}',
            off: 'send_midi_off:{hid_id}'
        },
        x_control: "select_loop {key_name}",
        hid_id: 37,
        row: 1,
        column: 8,
    },
    {
        key_name: '9',
        commands: {
            on: 'send_midi_on:{hid_id}',
            off: 'send_midi_off:{hid_id}'
        },
        x_control: "select_loop {key_name}",
        hid_id: 38,
        row: 1,
        column: 9,
    },
    {
        key_name: '0',
        commands: {
            on: 'send_midi_on:{hid_id}',
            off: 'send_midi_off:{hid_id}'
        },
        x_control: "select_loop {key_name}",
        hid_id: 39,
        row: 1,
        column: 10,
    },
    {
        key_name: 'left_control',
        commands: {
            on: 'activate_modifier:ctrl',
            off: 'deactivate_modifier:ctrl'
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