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
    let result = `[${vacancy.companyName}]`;
    result += `\n<a href="${vacancy.url}">${vacancy.profession}</a>`;
    result += '\nЗП ' + formatSalary(vacancy.paymentFrom, vacancy.paymentTo);
    result += `\nОпубликована ${formatDate(vacancy.publishedAt)}`;

    switch (visibleBlock) {
        case 'vacancyRequirements':
            result += renderRequirements(vacancy);
            break;
        case 'vacancyReward':
            result += renderOffer(vacancy);
            break;
        case 'aboutCompanyVacancy':
            result += renderCompanyInfo(vacancy);
            break;
        case 'aboutVacancy':
        default:
            result += renderAbout(vacancy);
            break;
    }
    return result;
}
