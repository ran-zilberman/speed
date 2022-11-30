const program = require('commander');

import './commander/create-speed-app';

export function runCommand() {
    program.parse(process.argv);
}
