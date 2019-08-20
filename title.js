const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const title = fs.readFileSync(path.join(__dirname, 'title.txt'));

console.log(
    chalk.yellow.bold(title),
    '\n',
    chalk.blue.bold('                  Learn JS by building basic Chrome extensions (') + chalk.red.bold('Learn.js') + chalk.blue.bold(')'),
    '\n\n'
);
