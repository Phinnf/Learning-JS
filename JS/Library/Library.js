import dayjs from "dayjs";
import chalk from "chalk";

const currentDate = dayjs().format(`DD/MM/YY HH:mm:ss`);

console.log(`Time: ${currentDate}`);

console.log(chalk.green(`Hello JS`))