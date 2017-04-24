// В каждой строчке не больше трех кнопок
const BUTTONS_IN_A_ROW = 3;

function alignButtons(commands) {
    // Превращаем команды в кнопки
    const buttons = commands.map(command => ({ text: command }));

    if (buttons.length === 4) {
        return [
            [
                buttons[0], buttons[1],
            ],
            [
                buttons[2], buttons[3]
            ],
        ];
    }

    // Собираем клавиатуру по строчно.
    const buttonRows = [];
    while (buttons.length > 0) {
        buttonRows.push(buttons.splice(0, BUTTONS_IN_A_ROW));
    }

    return buttonRows;
}

export default function generateKeyboard(commands) {
    const buttonRows = alignButtons(commands);
    return {
        keyboard: buttonRows,
        resize_keyboard: true,
        one_time_keyboard: true,
    }
}
