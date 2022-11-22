import { Command } from 'commander';
const chalk  = require("chalk");

export function init(): Command {
    const program = new Command();
    program
        .description('Generates a speed framework project')
        .argument(chalk.green('<project-directory>'), 'Project directory to bootstrap')

    return program;    
}

export function run(commandLine: Command) {
    commandLine.parse(process.argv);
}