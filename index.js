import TelegramBot from 'node-telegram-bot-api';
import config from './config';

const token = config.apiKey;

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});



// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message', {
        reply_markup: {
            /*keyboard: [
                [
                    { text: 'Hey!' },
                    { text: 'fucko' },
                ],
                [
                    { text: 'cmon!' },
                ],
            ],
            one_time_keyboard: true,*/
            inline_keyboard: [
                [{text: 'Опачки!', callback_data: 'opa'}],
                [{text: '*бум*', callback_data: 'valera'}],
            ]

        },
    });
});

const answer = {
    opa: 'Опочки-попо!',
    valera: 'Опа, Валера!! Валера, начинается, Валера!',
};

bot.on('callback_query', (msg) => {
    bot.answerCallbackQuery(msg.id, answer[msg.data]);
    console.log(msg);
});

