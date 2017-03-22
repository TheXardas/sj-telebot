import commands from '../constants/commands';

export default function formatCommandLink(commandAlias) {
    const command = commands[commandAlias];
    return `/${commandAlias} - ${command}`
}