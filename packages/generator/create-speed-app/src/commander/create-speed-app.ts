import { Command } from 'commander';
import questions from '../questions';
import inquirer from 'inquirer';
import chalk from 'chalk';

export default new Command('scaffold')
.description('Generates a speed framework project into the current working directory.\nIs default command if none is specified')
.action(() => {
    inquirer.prompt(questions).then(answers => console.log(JSON.stringify(answers)));
})
.option("--verbose", "print additional logs");