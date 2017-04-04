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

export default function formatVacancyCard(vacancy) {
    let result = `<a href="${vacancy.url}">${vacancy.profession}</a>`;
    result += '\nЗП ' + formatSalary(vacancy.paymentFrom, vacancy.paymentTo);
    result += `\nОпубликована ${formatDate(vacancy.publishedAt)}`;
    result += renderAbout(vacancy);
    result += renderRequirements(vacancy);
    result += renderOffer(vacancy);
    result += renderCompanyInfo(vacancy);
    result += `\n<a href="${vacancy.url}">Отклинуться на сайте</a>`;
    return result;
}
