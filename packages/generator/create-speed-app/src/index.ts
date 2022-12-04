import { program } from 'commander';
import createSpeedApp from './commander/create-speed-app';

const packageJson = require('../package.json')

export function runCommand() {
    program
        .version(packageJson.version)
        .addCommand(createSpeedApp, { isDefault: true });
    program.parse(process.argv);
}
