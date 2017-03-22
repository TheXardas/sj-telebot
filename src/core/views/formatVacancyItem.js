import commands, { keysByCommands } from '../constants/commands';
import formatSalary from './formatSalary';
import formatDate from './formatDate';

export default function formatVacancyItem(vacancy) {
    return `
[${vacancy.companyName}]
<b>${vacancy.profession}</b>
${formatSalary(vacancy.paymentFrom, vacancy.paymentTo)}
Опубликована: ${formatDate(vacancy.publishedAt)}
/${keysByCommands[commands.vacancy]}_${vacancy.id}`;
}
