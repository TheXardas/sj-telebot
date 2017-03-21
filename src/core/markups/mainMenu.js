import commands from '../constants/commands';

export default {
    keyboard: [
        [
            { text: commands.search },
            { text: commands.settings },
        ],
        [
            { text: commands.about },
            { text: commands.app },
        ],
    ],
    one_time_keyboard: true,
}
