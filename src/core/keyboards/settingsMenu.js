import commands from '../constants/commands';

export default {
    keyboard: [
        [
            { text: commands.set_profession },
            { text: commands.set_salary },
            { text: commands.set_city },
        ],
        [
            { text: commands.set_specialization },
            { text: commands.set_gender },
            { text: commands.set_order },
        ],
        [
            { text: commands.reset_settings },
            { text: commands.back },
        ]
    ],
    one_time_keyboard: true,
}
