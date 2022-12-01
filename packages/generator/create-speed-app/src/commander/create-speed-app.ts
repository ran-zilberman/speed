import { Command } from 'commander';
import packageJson from '../../package.json';

import chalk from 'chalk';

let projectName;

export default new Command(packageJson.name)
.version(packageJson.version)
.description('Generates a speed framework project')
.argument('<project-directory>')
.usage(`${chalk.green('<project-directory>')} [options]`)
.action(name => {
    projectName = name;
})
.option("--verbose", "print additional logs");