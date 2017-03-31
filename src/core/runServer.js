import TelegramBot from 'node-telegram-bot-api';
import config from '../../config';
import store from './store';
import processMessage from './processMessage';
import getAndSaveDictionaries from './getAndSaveDictionaries';
import createSchema from './createSchema';

export default function runServer() {
    const token = config.apiKey;

    createSchema();

    // Грузим словарные значения.
    getAndSaveDictionaries(store).then(() => {

        const bot = new TelegramBot(token, { polling: true });

        // Listen for any kind of message. There are different kinds of
        // messages.
        bot.on('message', (msg) => {
            processMessage(store, msg, bot);
        });

        const answer = {
            opa: 'Опочки-попо!',
            valera: 'Опа, Валера!! Валера, начинается, Валера!',
        };

        bot.on('callback_query', (msg) => {
            bot.answerCallbackQuery(msg.id, answer[msg.data]);
            console.log(msg);
        });
    });
}
