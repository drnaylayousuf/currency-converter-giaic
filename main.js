#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red `${"*".repeat(50)}`);
console.log(chalk.redBright.underline(`\n\t\"WELCOME IN CURRENCY CONVERTER\"\t\n`));
console.log(chalk.red `${"*".repeat(50)}`);
const currency = {
    "United States Dollar": 1, // Base Currency is USD
    "Euro": 0.93,
    "Chinese Yuan": 7.24,
    "Pound sterling": 0.79,
    "Australian Dollar": 1.51,
    "Canadian Dollar": 1.37,
    "Thai Baht": 36.80,
    "Turkish lira": 32.35,
    "Saudi Riyal": 3.75,
    "Qatari Riyal": 3.64,
    "Pakistani Rupees": 277.42,
    "Indian Rupees": 83.38,
};
let converter = await inquirer.prompt([
    {
        name: "currencychangefrom",
        message: chalk.greenBright("By Which Currency You Want to Change From ?"),
        type: "list",
        choices: ["United States Dollar", "Euro", "Chinese Yuan", "Pound sterling", "Australian Dollar", "Canadian Dollar", "Thai Baht", "Turkish lira", "Saudi Riyal", "Qatari Riyal", "Pakistani Rupees", "Indian Rupees"]
    },
    {
        name: "currencychangeto",
        message: chalk.yellowBright("By Which Currency Would you Like to Change InTo ?"),
        type: "list",
        choices: ["United States Dollar", "Euro", "Chinese Yuan", "Pound sterling", "Australian Dollar", "Canadian Dollar", "Thai Baht", "Turkish lira", "Saudi Riyal", "Qatari Riyal", "Pakistani Rupees", "Indian Rupees"]
    },
    {
        name: "amount",
        message: chalk.blueBright("Enter The Amount You Want To Convert ?"),
        type: "number"
    }
]);
let changefrom = currency[converter.currencychangefrom];
let changeto = currency[converter.currencychangeto];
let amountlist = converter.amount;
amountlist = Math.round(amountlist * 100) / 100;
// tofixed() we can also used to fixed  alternate of mathround()
let baseCurrency = amountlist / changefrom;
let currencyConverter = baseCurrency * changeto;
console.log(`\n${chalk.magenta(converter.currencychangefrom)} = ${chalk.yellow(amountlist)}
  ${chalk.red("Convert To")} 
${chalk.magenta(converter.currencychangeto)} = ${chalk.yellow(currencyConverter)}.`);
console.log(chalk.redBright `\n\t======= THE END =======  \t\n`);
