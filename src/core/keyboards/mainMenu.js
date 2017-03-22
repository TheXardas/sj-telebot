import commands from '../constants/commands';

export default {
    keyboard: [
        [
            { text: commands.search },
            { text: commands.settings },
        ],
        [
            { text: commands.app },
            { text: commands.start },
        ],
    ],
    one_time_keyboard: true,
}
