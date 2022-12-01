import { program } from 'commander'

import createSpeedApp from './commander/create-speed-app';

export function runCommand() {
    program.addCommand(createSpeedApp);
    program.parse(process.argv);
}
