import * as readline from "readline";
import {  menuConfig} from "../config";
import { Chain, PortfolioItem } from "../types";

const portfolio: PortfolioItem[] = [
    {
        token: {
            symbol: "BTC",
            chain: Chain.Bitcoin,
            decimals: 8
        },
        holdingAmount: 0.1,
        currentPrice: 78000
    },
    {
        token: {
            symbol: "ETH",
            chain: Chain.Ethereum,
            decimals: 18
        },
        holdingAmount: 1,
        currentPrice: 2500
    },
    {
        token: {
            symbol: "SOL",
            chain: Chain.Solana,
            decimals: 9
        },
        holdingAmount: 10,
        currentPrice: 105
    }
]

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
      console.log(portfolio);
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
