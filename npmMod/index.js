const chalk = require('chalk');

console.log(chalk.green.bold.inverse("Success"));

const v = require('validator');
const res = v.isEmail("xyzs.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));