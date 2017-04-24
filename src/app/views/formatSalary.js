
// TODO implement parsing in command
export function formatSalaryRange(from, to) {
    const frm = parseInt(from, 10);
    const t = parseInt(to, 10);
    if (!frm && !t) {
        return 'по договоренности';
    }

    let result = '';
    if (frm) {
        result += `от ${frm}`;
    }
    if (t) {
        result += ` до ${t}`;
    }
    return result;
}

export default function formatSalary(salary) {
    return formatSalaryRange(salary);
}

