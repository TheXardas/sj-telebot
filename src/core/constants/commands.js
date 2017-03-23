const commands = {
    'start': 'Обо мне 🤖',
    'app': 'Мобильное приложение 📲',
    'settings': 'Настройки поиска ⚙️',
    'search': 'Поиск 🔍',
    'set_salary': 'Зарплата 💳',
    'set_salary_any': 'Любая 🤝',
    'set_profession': 'Должность 👔',
    'set_city': 'Город 🗺️️',
    'set_city_any': 'Любой город 🚂',
    'set_specialization': 'Специализация 🔧',
    'set_gender': 'Пол 👽',
    'set_gender_male': 'Мужчина 👨',
    'set_gender_female': 'Женщина 👩',
    'set_gender_unknown': 'Неважно 👹',
    'reset_settings': 'Сбросить все настройки 🗑️',
    'reset_settings_commit': 'Да, удалить настройки ☠️',
    'reset_profession': 'Любая профессия 💪',
    'vacancy': 'Карточка вакансии',
    'set_order': 'Сортировка ↕️',
    'set_order_date': 'По дате добавления 📅',
    'set_order_salary': 'По зарплате 💰',
    'back': 'Назад 🔙',
    'next_page': 'Еще ➡️️',
    DEFAULT: 'DEFAULT',
};

const keysByCommands = {};
Object.keys(commands).forEach((key) => {
    keysByCommands[commands[key]] = key;
});

export { keysByCommands };

export default commands;
