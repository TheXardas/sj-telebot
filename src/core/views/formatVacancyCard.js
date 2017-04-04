import formatSalary from './formatSalary';
import formatDate from './formatDate';

function renderAbout(vacancy) {
    if (!vacancy.aboutWork) {
        return '';
    }

    return `\n\n<b>О вакансии:</b>\n${vacancy.aboutWork}`;
}

function renderRequirements(vacancy) {
    if (!vacancy.requirements) {
        return '';
    }

    return `\n\n<b>Требования:</b>\n${vacancy.requirements}`;
}
function renderOffer(vacancy) {
    if (!vacancy.offer) {
        return '';
    }

    return `\n\n<b>Условия:</b>\n${vacancy.offer}`;
}

function renderCompanyInfo(vacancy) {
    return `\n\n<b>${vacancy.companyName}</b>\n${vacancy.aboutCompany}`;
}

export default function formatVacancyCard(vacancy, visibleBlock) {
    let result = `<a href="${vacancy.url}">${vacancy.profession}</a>`;
    result += '\nЗП ' + formatSalary(vacancy.paymentFrom, vacancy.paymentTo);
    result += `\nОпубликована ${formatDate(vacancy.publishedAt)}`;

    if (visibleBlock === 'aboutVacancy') {
        result += renderAbout(vacancy);
    }
    if (visibleBlock === 'vacancyRequirements') {
        result += renderRequirements(vacancy);
    }
    if (visibleBlock === 'vacancyReward') {
        result += renderOffer(vacancy);
    }
    if (visibleBlock === 'aboutCompanyVacancy') {
        result += renderCompanyInfo(vacancy);
    }
    return result;
}
