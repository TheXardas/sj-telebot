import TelegramBot from 'node-telegram-bot-api';
import config from '../../config';
//import store from '../app/store';
import store from '../app/dbStore';
import processMessage from './processMessage';
import processInlineMessage from './processInlineMessage';
import getAndSaveDictionaries from '../app/getAndSaveDictionaries';
import createSchema from '../app/createSchema';

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

        bot.on('callback_query', (msg) => {
            processInlineMessage(store, msg, bot);
        });
    });
}
