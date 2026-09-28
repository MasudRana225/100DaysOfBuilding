# Day 1 — BTC Price Printer

[Click here for day 1 code](./src/week1/day1.ts)

## Project

- **Name:** BTC Price Printer
- **Time:** 11:00 AM 09/05/26
- **What I learned:** Template literals vs string quotes for output
- **Difficulty:** None
- **How I solved it:** Simple fix - used a template literal
- **Tomorrow's project:** ETH gas formatter (mock) -   Day 2

# Day2 - ETH gas Formatter(mock)

[Click here for day 2 code](./src/week1/day2.ts)

## project

- **Name:** ETH Gas Formatter (mock)
- **Time:** 11.51 PM 
- **What I learned:** gwei vs wei unit conversion, function return objects
- **Difficulty:** None
- **How I solved it:** consfusion bet Gwei and wei. for Gwei we have to use 1e9 and for wei we have to use 1e18
- **Tomorrow's project:** Wallet address validator - Day 3


# Day 3 - Wallet address validator 

[Click here for day 3 code](./src/week1/day3.ts)
## project

- **Name:** Wallet Address Validator
- **Time:** 9.06 PM 
- **What I learned:** ASCII values in js. hex validation, string iteration, early returns case sensitivity, for of loops
- **One Difficulty:** Case sensitivity, if else, can't figure out how to use if else properly
- **How I solved it:** hint from claude and docs
- **Tomorrow's project:** Token converter — Day 4


# Day 4 - Token Converter

[Click here for day 4 code](./src/week1/day4.ts)

## Day 4 project
**Name**: Token Converter
**Time**: 9.49PM
**What I learned**: exponentiation (**), default parameters, return vs console.log
**One difficulty / how solved**: decimals confusion - resolved (default param vs override)
**Tomorrow's project**: Coin flip CLI — Day 5


# Day 5 - Coin Fliper:

[Click here for day 5 code](./src/week1/day5.ts)

- **Name:** Coin Flipper
- **Time:** 12:51 PM
- **What I learned** JS Date() object, unix timestamp.
- **One difficulty / how solved** confusion between seconds, milliseconds of timestamp -- ()


# Day 6 - JSON Portfolio

[Click here for day 6 code](./src/week1/day6.ts)

# Day 7 - Random Coin picker

[Click here for day 7 code](./src/week1/day7.ts)


# Day 8 - Timestamp formatter 

[Click here for day 8 code](./src/week2/day8.ts)

# Day - 9 Simple Watchlist

[Click here for day 9 code](./src/week2/day9.ts)

# Day-9 Project
- **Name:** Simple Watchlist
- **Time** 11:11 PM 9/14/26
- **What I learned** TS type annotation, Arrays push and splice methods, for of loops and how can a duplicate values can create skipping.
 - **One difficulty / how solved:** how to use the splice method and find index together inside for the for loops/ resolved by create a variable name index and hold the index value of item in it then use the splice method


# day - 10 is just review day from day 1 to 9

# day - 11 Typed Portfolio

[Click here for day 11 code](./src/week2/day11.ts)

- **Name:** Typed Portfolio
- **Time:** 2:02PM 16/9/26
- **What I learned** interface and Type annotation
- **One difficulty/How I solved:** Type annotation, I was confused how to use the portfolioItem interface as typed annotation for portfolio array, got help from a AI how to used type annotation


# Day 12 - Interface for Tokens

[Click here for day 12 code](./src/week2/day12.ts)

- **Name** Interface for Tokens
- **What I learned** Using interface Inside a interface
- **One difficulty** No difficulty

# Day 13 - enums
- **enum** An enum ("enumerated type") is a way to define a fixed, named set of possible values — you're telling TypeScript "this variable can only ever be one of these specific options, nothing else."
- **What I did today** just declare a enum for chain in day 12 code

# day 14 - Generic API Wrapper
[Click here for day 14 code](./src/week2/day14.ts)

- **Name** Generic API Wrapper
- **What I learned** Generics in TypeScript are a feature that allows you to write reusable, flexible code by passing types as arguments. They act as placeholders for types, enabling a single function, interface, or class to work with multiple data types while fully preserving type.
- **One difficulty** I passed Number instead of number in data : T. Now I know the difference between the Number and number. 


# day 15 - CLI Menus
[Click here to view the Day 15 code file](./src/week3/day15.ts)

- **Name** : CLI Menus
- **Time** 12:44 AM 26/9/26
- **What I learned**: readline module
- **One difficulty**  importing problem, encountered so many errors while importing readline module.

# day 16 Config files-
[Click here to view the Day 16 code file](./src/week3/day16.ts)
[config.ts file](./src/config.ts)
[types.ts file](./src/types.ts)

- **Time** 12:18AM 28/09/26
- **What I learned** How to create config files for any project, what should I write on config file and what should I not.
- **difficulty/How I solved** there was many problems I encounter today, 1. I felt so stupid today and my mind was telling I can't figure out how to write config files, I should quit even I quit But I return because I realize quiting because of feeling stupid was the reason I waste so much time. so from now no matter what happens I will go forward. 2. I was confused about what field should a config file have after some time with hints I solved A configuration file stores static structure, metadata, and core rules that stay constant while my program runs. it defines what options exist and how they are laid out, separating the structural data from the engine that actually executes the code.

- **Tomorrow's project** Day 17 - review day

# Day 17 - review day 

- **Time**11:36 PM 28/09/26
- **what I learned** Duplication causes drift and a missing import/export causes the scope clash. 
- **difficulty/how I solved** Global scope pollution solved by writing a empty export in day 6, 11,12 and Create mockPortfolio.ts for every file to import mockPortfolio without writing in every single file [mockPortfolio link](./src/mockPortfolio.ts)

- **Tomorrows Project** 