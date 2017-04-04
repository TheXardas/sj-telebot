import generateKeyboard from './generateKeyboard';
import config from '../../../config';
import commands from '../constants/commands';

export default async function showCurrentSpecializationsToSelect(store, msg, bot) {
    const limit = config.specializationButtonLimit;
    const page = await store.get(msg.chat.id, 'specializationPage') || 0;

    const firstEntry = page * limit;

    let allSpecializations = await store.getSpecializations();
    allSpecializations = allSpecializations.slice(0);
    // Добавляем вначало "без специализации". Такой хак, чтобы не сломать пагинацию
    allSpecializations.unshift({ name: commands.set_specialization_any });
    const specializationsToShow = allSpecializations.slice(firstEntry, firstEntry + limit);
    const specCommands = specializationsToShow.map(specialization => specialization.name);


    if (page > 0) {
        specCommands.push(commands.specialization_previous);
    }

    const maximumPage = Math.floor(allSpecializations.length / limit);
    if (page < maximumPage) {
        specCommands.push(commands.specialization_next);
    }

    specCommands.push(commands.back);

    bot.sendMessage(msg.chat.id, 'Выбирай', {
        reply_markup: generateKeyboard(specCommands)
    })
}
