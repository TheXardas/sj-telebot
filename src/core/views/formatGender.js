
export default function formatGender(gender) {
    switch (gender) {
        case 'male':
            return 'мужской';
        case 'female':
            return 'женский';
        default:
            return '';
    }
}
