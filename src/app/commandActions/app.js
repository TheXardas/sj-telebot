import mainMenuKeyboard from '../keyboards/mainMenu';
import links from '../constants/links';

const text = `Вот ссылки. Качай отсюда, бротюнь:
<a href="${links.apps.apple}">Apple 🍎</a>
<a href="${links.apps.android}">Android 🤖</a>
<a href="${links.apps.windows}">Windows 🌠</a>`;

export default function app(store, msg, bot) {
    return bot.sendMessage(msg.chat.id, text, {
        reply_markup: mainMenuKeyboard,
        parse_mode: 'Html',
        disable_web_page_preview: true,
    });
}
