import moment from 'moment';

export default function formatDate(timestamp) {
    let date = new Date(timestamp * 1000);
    let currentDate = new Date();
    let m = moment(date).locale('ru');

    if (date.getFullYear() === currentDate.getFullYear() && date.getDate() === currentDate.getDate()) {
        return m.format('HH:mm');
    } else if (date.getFullYear() === currentDate.getFullYear() && date.getDate() === (currentDate.getDate() - 1)) {
        return 'вчера';
    } else if (date.getFullYear() === currentDate.getFullYear()) {
        return m.format('DD MMMM');
    } else {
        return m.format('DD MMMM YYYY');
    }
};