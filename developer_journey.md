# Day 1 — BTC Price Printer

## Code (TypeScript)

```typescript
let currentBTCPrice: number = 59000;

console.log(`currentBTCPrice: $${currentBTCPrice}`);
```

## Project

- **Name:** BTC Price Printer
- **Time:** 11:00 AM 09/05/26
- **What I learned:** Template literals vs string quotes for output
- **Difficulty:** None
- **How I solved it:** Simple fix - used a template literal
- **Tomorrow's project:** ETH gas formatter (mock) -   Day 2

# Day2 - ETH gas Formatter(mock)


```typescript
const gasPrice = 100 ; // 100 gwei
const gasUsed = 21000; // Typical gas used for a simple ETH transfer

function calculateGas(gasPrice: number, gasUsed: number): { gasInGwei: number; gasInETH: number } {
    const totalCostInGwei = gasPrice * gasUsed;
    const totalCostInETH = totalCostInGwei / 1e9;
    return { gasInGwei: totalCostInGwei, gasInETH: totalCostInETH };
}

const gasCosts = calculateGas(gasPrice, gasUsed);
console.log(`Gas Cost in Gwei: ${gasCosts.gasInGwei}`);
console.log(`Gas Cost in ETH: ${gasCosts.gasInETH}`);
```

## project

- **Name:** ETH Gas Formatter (mock)
- **Time:** 11.51 PM 
- **What I learned:** gwei vs wei unit conversion, function return objects
- **Difficulty:** None
- **How I solved it:** consfusion bet Gwei and wei. for Gwei we have to use 1e9 and for wei we have to use 1e18
- **Tomorrow's project:** Wallet address validator - Day 3


# Day 3 - Wallet address validator 

```typescript
const walletAddress = "0x1234567890abcdef1234568790abcdeF12345678";

function isValidWalletAddress(address: string): boolean {
  if (!address.startsWith("0x") || address.length !== 42) {
    return false;
  }

  for (const char of address.slice(2).toLowerCase()) {
    if(char < '0' || char > '9' && char < 'a' || char > 'f') {
      return false;
    }
  }
  return true;

}
console.log(isValidWalletAddress(walletAddress));
```
## project

- **Name:** Wallet Address Validator
- **Time:** 9.06 PM 
- **What I learned:** ASCII values in js. hex validation, string iteration, early returns case sensitivity, for of loops
- **One Difficulty:** Case sensitivity, if else, can't figure out how to use if else properly
- **How I solved it:** hint from claude and docs
- **Tomorrow's project:** Token converter — Day 4


# Day 4 - Token Converter

```typescript 

const rawAmount: number = 1000000000000000000;

function rawToHuman(rawAmount: number, decimals: number = 18) {
    return rawAmount / 10**decimals;
}
console.log(rawToHuman(5000000, 6));

const humanAmount: number = 1;
function humanToRaw(humanAmount: number, decimals: number = 18) {
  return humanAmount * 10**decimals;
}
console.log(humanToRaw(humanAmount, 18));
```

## Day 4 project
**Name**: Token Converter
**Time**: 9.49PM
**What I learned**: exponentiation (**), default parameters, return vs console.log
**One difficulty / how solved**: decimals confusion - resolved (default param vs override)
**Tomorrow's project**: Coin flip CLI — Day 5


# Day 5 - Coin Fliper:

```typescript 
function getHeadTail() {
    const random = Math.random();
    return random <= 0.5 ? 'Head' : 'Tail';
}
console.log(getHeadTail());
```
## Day 5 project

- **Name:** Coin Flipper
- **Time:** 12:51 PM
- **What I learned** JS Date() object, unix timestamp.
- **One difficulty / how solved** confusion between seconds, milliseconds of timestamp -- ()


# Day 6 - JSON Portfolio

```typescript
const portfolio = [
    {
        "TokenName": "BTC",
        "HoldingAmount": 0.5,
        "CurrentPrice": 30000
    },
    {
        "TokenName": "ETH",
        "HoldingAmount": 2,
        "CurrentPrice": 2000
    },
    {
        "TokenName": "SOL",
        "HoldingAmount": 10,
        "CurrentPrice": 50
    }

]

for (const holding of portfolio) {
    console.log(`Token: ${holding.TokenName}, Holding Amount: ${holding.HoldingAmount}, Current Price: ${holding.CurrentPrice}, Total Value: ${holding.HoldingAmount * holding.CurrentPrice}`);
}
``` 

# Day 7 - Random Coin picker

```typescript
const Coins = ["BTC", "ETH", "LTC", "XRP", "ADA", "DOT", "SOL", "DOGE", "BNB", "LINK"];

// const RandomCoin = Math.floor(Math.random() * Coins.length)
const RandomCoin = Math.floor(1 * Coins.length)
console.log(Coins[RandomCoin]);
// console.log(Coins.length);
```

# Day 8 - Timestamp formatter 

```typescript
const rawTimeStamp = 1789280132;

function convertTimeStampToDate(timeStamp: number) : Date{
    const milliseconds = timeStamp * 1000;
    return new Date(milliseconds)
}

const date = convertTimeStampToDate(rawTimeStamp);
console.log(date.toLocaleString());
console.log(date.toISOString());
```




# Day - 9 Simple Watchlist

```typescript
const watchlist: {name: string, price: number}[] = [];

function addToken(name: string, price: number) {
    watchlist.push({name, price})
}
addToken("BTC", 78000);
addToken("ETH", 2450);
addToken("SOL", 100);
addToken("SOL", 100);
addToken("SOL", 100);
addToken("SOL", 100);
addToken("XRP", 100);
addToken("BNB", 100);

function removeToken(name: string){
    for (const item of watchlist) {
        if(item.name === name){
            const index = watchlist.indexOf(item);
            watchlist.splice(index,1)
        }
    }
}

removeToken("SOL")
console.log(watchlist);
```

# Day-9 Project
- **Name:** Simple Watchlist
- **Time** 11:11 PM 9/14/26
- **What I learned** TS type annotation, Arrays push and splice methods, for of loops and how can a duplicate values can create skipping.
 - **One difficulty / how solved:** how to use the splice method and find index together inside for the for loops/ resolved by create a variable name index and hold the index value of item in it then use the splice method


# day - 10 is just review day from day 1 to 9

# day - 11 Typed Portfolio

```typescript
interface PortfolioItem {
    tokenName: string;
    holdingAmount: number;
    currentPrice: number;
}

const portfolio: PortfolioItem[] = [
    {
        tokenName: "BTC",
        holdingAmount: 0.5,
        currentPrice: 76000
    },
    {
        tokenName: "ETH",
        holdingAmount: 2,
        currentPrice: 2000
    },
    {
        tokenName: "SOL",
        holdingAmount: 10,
        currentPrice: 50
    }
];
```
- **Name:** Typed Portfolio
- **Time:** 2:02PM 16/9/26
- **What I learned** interface and Type annotation
- **One difficulty/How I solved:** Type annotation, I was confused how to use the portfolioItem interface as typed annotation for portfolio array, got help from a AI how to used type annotation


# Day 12 - Interface for Tokens

```typescript
interface Token{
    symbol: string;
    chain: string;
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
            chain: "bitcoin",
            decimals: 8
        },
        holdingAmount: 0.1,
        currentPrice: 78000
    },
    {
        token: {
            symbol: "ETH",
            chain: "ethereum",
            decimals: 18
        },
        holdingAmount: 1,
        currentPrice: 2500
    },
    {
        token: {
            symbol: "SOL",
            chain: "solana",
            decimals: 9
        },
        holdingAmount: 10,
        currentPrice: 105
    }
]

console.log(portfolio);
```
- **Name** Interface for Tokens
- **What I learned** Using interface Inside a interface
- **One difficulty** No difficulty

# Day 13 - enums
```typescript
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

console.log(portfolio);
```
- **enum** An enum ("enumerated type") is a way to define a fixed, named set of possible values — you're telling TypeScript "this variable can only ever be one of these specific options, nothing else."
- **What I did today** just declare a enum for chain in day 12 code

# day 14 - Generics

```typescript
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
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

const apiResponse: ApiResponse<Token> = {
    success: true,
    data: {
        symbol: "BTC",
        chain: Chain.Bitcoin,
        decimals: 9
    }
}

const currentPrice: ApiResponse<number> = {
    success: true,
    data: 2000
}

console.log(apiResponse);
console.log(currentPrice);
```

- **Name** Generic API Wrapper
- **What I learned** Generics in TypeScript are a feature that allows you to write reusable, flexible code by passing types as arguments. They act as placeholders for types, enabling a single function, interface, or class to work with multiple data types while fully preserving type.
- **One difficulty** I passed Number instead of number in data : T. Now I know the difference between the Number and number. 