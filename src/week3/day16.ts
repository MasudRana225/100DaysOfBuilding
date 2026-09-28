import * as readline from "readline";
import {  menuConfig} from "../config";
import {mockPortfolio } from "../mockPortfolio";


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function displayMenu() {
  console.log(`\n${menuConfig.appName}`);
  console.log("=".repeat(menuConfig.appName.length));

  rl.question(menuConfig.menuOptions.join('\n') + '\nChoose an option: '  , (choice: string) => {
    //with number choice, we can convert the input string to a number and then use strict equality checks to compare it with the expected numeric options. This allows us to handle numeric input more effectively.
     const numericChoice = Number(choice);
    if (numericChoice === 1) {
      console.log('Portfolio:');
      console.log(mockPortfolio);
        rl.close();
    } else if (numericChoice === 2) {
      console.log('Exiting...');
      rl.close();
    } else {
      console.log('Invalid choice. Please try again.');
      displayMenu();
    }
  });
}
displayMenu();
