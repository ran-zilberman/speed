import { Command } from 'commander';
import path from 'path';
import fs from 'fs';
import recursive from 'recursive-readdir';
import questions from '../questions';
import inquirer from 'inquirer';
import chalk from 'chalk';

export default new Command('scaffold')
.description('Generates a speed framework project into the current working directory.\nIs default command if none is specified')
.argument('[projectDirectory]', 'Directory to generate the project', './')
.action((projectDirectory, options) => {
    // inquire needed data for bootstrapping
    inquirer.prompt(questions).then(answers => {
       console.log(JSON.stringify(answers));
    });

    // create a directory if needed
    const sourcePath = path.dirname(require.resolve('speed-app-template'));
    const destinationPath = path.resolve(process.cwd(), projectDirectory);
    
    if (!fs.existsSync(destinationPath)) {
      fs.mkdirSync(destinationPath);
    }

    if (options.verbose) {
        console.log();
        console.log(chalk.greenBright(`Bootstrapping project in: ${destinationPath}`));
    }
    
    // scaffold into the directory
    recursive(sourcePath, (err, files) => {
        if (err) throw err;
        files.forEach((file) => {
            const relativePath = path.relative(sourcePath, file);
            const sourceFile = path.join(sourcePath, relativePath);
            const destinationFile = path.join(destinationPath, relativePath);
            if (fs.statSync(sourceFile).isDirectory()) {
                fs.mkdirSync(destinationFile, { recursive: true });
            } else {
                fs.copyFileSync(sourceFile, destinationFile);
            }
        });
        if (options.verbose) {
            console.log();
            console.log(`All files and directories copied successfully to ${destinationPath}`);
        }
    })
})
.option('-v, --verbose', 'enable verbose mode');