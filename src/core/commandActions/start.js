import mainMenuKeyboard from '../keyboards/mainMenu';
import formatCommandLink from '../views/formatCommandLink';

const text = `Я могу найти тебе работу.
Просто напиши, какую работу ищешь.
Можно настроить поиск для более точных результатов.
Еще через мобильное приложение искать удобнее.

${formatCommandLink('search')}
${formatCommandLink('settings')}
${formatCommandLink('app')}
${formatCommandLink('start')}
`;

export default function start(store, msg, bot) {
    bot.sendMessage(msg.chat.id, text, { reply_markup: mainMenuKeyboard });
}
