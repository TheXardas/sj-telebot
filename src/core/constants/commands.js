const commands = {
    'about': 'Обо мне 🤖',
    'app': 'Мобильное приложение 📲',
    'settings': 'Настройки поиска ⚙️',
    'search': 'Поиск 🔍',
    'set_salary': 'Зарплата 💳',
    'set_city': 'Город 🗺️️',
    'set_specialization': 'Специализация 🔧',
    'set_gender': 'Пол 👽',
    'set_gender_male': 'Мужчина 👨',
    'set_gender_female': 'Женщина 👩',
    'set_gender_unknown': 'Неважно 👹',

    'set_order': 'Сортировка ↕️',
    'back': 'Назад 🔙',
    DEFAULT: 'DEFAULT',
};

const keysByCommands = {};
Object.keys(commands).forEach((key) => {
    keysByCommands[commands[key]] = key;
});

export { keysByCommands };

export default commands;
