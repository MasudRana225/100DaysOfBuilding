// CLI Menus
//The node:readline module in Node.js provides a built-in interface for reading data from a readable stream, such as terminal input (process.stdin), one line at a time. It is widely used to build command-line interfaces (CLIs), prompt users for input, and process large text files line-by-line

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
enum Chain {
    Bitcoin = "bitcoin",
    Ethereum = "ethereum",
    Solana = "solana"
}


interface Token{
    symbol: string;
    chain: Chain;
    decimals: number;
}

interface PortfolioItem {
    token: Token;
    holdingAmount: number;
    currentPrice: number;
}

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

// rl.question('1. View portfolio\n2. Exit\nChoose an option: ', (choice: string) => {
//   //with string choice, we can use strict equality checks to compare the input with the expected options. This ensures that the input is exactly what we expect, without any type coercion.
//   if (choice === '1') {
//     console.log('Portfolio:');
//     console.log(portfolio);
//   } else if (choice === '2') {
//     console.log('Exiting...');
//   } else {
//     console.log('Invalid choice. Please try again.');
//   }
//   rl.close();
// });
rl.question('1. View portfolio\n2. Exit\nChoose an option: ', (choice: string) => {
  //with number choice, we can convert the input string to a number and then use strict equality checks to compare it with the expected numeric options. This allows us to handle numeric input more effectively.
   const numericChoice = Number(choice);
  if (numericChoice === 1) {
    console.log('Portfolio:');
    console.log(portfolio);
  } else if (numericChoice === 2) {
    console.log('Exiting...');
  } else {
    console.log('Invalid choice. Please try again.');
  }
  rl.close();
});

