const inlineCommands = {
    'aboutVacancy': 'О вакансии',
    'vacancyRequirements': 'Требования',
    'vacancyReward': 'Условия',
    'aboutCompanyVacancy': 'О компании',
    'prevVacancyPage': 'Назад',
    'nextVacancyPage': 'Еще',
};

const keysByCommands = {};
Object.keys(inlineCommands).forEach((key) => {
    keysByCommands[inlineCommands[key]] = key;
});

export { keysByCommands };

export default inlineCommands;