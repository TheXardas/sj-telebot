import commands from '../constants/commands';

export default {
    keyboard: [
        [
            { text: commands.set_gender_male },
            { text: commands.set_gender_female },
        ],
        [
            { text: commands.set_gender_unknown },
            { text: commands.back },
        ],
    ],
    one_time_keyboard: true,
}
