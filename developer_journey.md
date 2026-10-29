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

- **Tomorrows Project** Day 21: Node.js: read/write portfolio JSON.

# day 21: reading and writing a file with Node's fs module.
[click here for day 21 code](./src/week3/day21.ts)

- **Time** 11: 16PM 05/10/26
- **What I learned:** Node's fs(fileSystem) module, fs.existsSync() to check if a file exists, fs.readFileSync() to read a files content, fs.writeFileSync() to create a file. Also learned how to collect data from user in cli, enums exists at runtime as a real object.
I didn't know I can collect userInput in cli one after another using rl.question and by puting rl.question inside the callback of the previous one. The callback only runs once the user has answered. Lastly forced user to use Chain enum instead of typing any string, then the decimals, holdingAmount, currentPrice checks if user don't type a valid number input it will give a warning message and restart.
- **difficulty/how I solved:** confused in checkFileExists()functions if else block, if block reads the file and returns the content if file exist but else block returns console.log which is undefined and undefined is falsy, so the if(portfolioData) fails in addUserInput function() which leads to failure of file create and asset adding, solved it by checkFileExists()functions else block returning a empty array if file doesn't exist[], which is truthy value and portfolio data now is always true, So fs.writeFileSync writes text to a file, creates the file if it's missing, and replaces the entire contents if it exists no need to check portfolioData is true or not that's why I removed if/else block from addUserInput.

- **Tomorrows Project** day 22: env vars.

# Day - 22 - env vars
[Click here for day 22 code](./src/week4/day22.ts)
- **Time tooks me to complete** 2 days form oct 10 to oct 12(approximately 4 hours in 2 days)
- **What I learned** An .env file(environment file) is a simple text file used in software development to store sensitive data and configuration settings like API keys, database passwords, and crypto wallet addresses, private keys outside of your actual source code. this keeps your secrets safe and prevents them from being accidentally leaked an platforms like github. Never forget to gitignored your .env file before pushing code to github. Today I learned how to import dotenv module and initialize .env file at the start of the script. also learned how to handle missing keys, and How to validate an API key from pulling a response from real API with the API key
- **difficulty/how I solved:** I was encountering a .env loading problem. because I was running day22.ts from masud@main-pc:~/buildingWithClaude/src/week4$ since dotenv look for .env file in the cwd(current working directory) but my .env file was located in project root. So when I run day22.ts from masud@main-pc:~/buildingWithClaude$ it works and loaded .env file properly.

- **Tomorros Project** Logger,

# Day - 23 Logger
[Click here for day 23 code](./src/week4/day23.ts)

- **Time tooks me to complete** 90 Minutes oct 14, 2026
- **what I learned** A logger is a small function(or module) that every part of your program calls instead of console.log. It's job is to make every line of output follow the same format.
When it happened (a timestamp, which you already know from Day 8)
How serious it is (a “level”, commonly INFO, WARN, ERROR)
The message itself
- **One difficulty/How I solved** No difficulty.
- **Tomorrow's project** Day 24, file watcher.

# Day -24 file Watcher:
[Click here the day 24 code](./src/week4/day24.ts)

- **Time** 12:28AM 20/10/2026
- **What I learned**new fs.watch module, How it monitor changes in a files and report.
- **one difficulty** duplicate report. I mixed up throttling and debouncing. 
- **how I solved** using throttling, 
- **Note**for today's script throttling is fine but in future I have to use debouncing.
            Throttling:  Executes immediately on the first event, then blocks everything else for 100ms.
            debouncing: • Waits until the events stop firing for 100ms before executing.

- **Tomorrows Project** Day 25, CSV export.

# Day - 25 CSV export:
[click here to see day day25 code](./src/week4/day25.ts)

- **Time** 11:00PM 24/10/26
- **What I learned** Today I learned how to read a JSON file and export to a CSV file.
- **one difficulty/How I solved it** Nested object problem. I solved it by mapping an array to transform its elements. I used .map() to transform each portfolio object into a CSV row string.
- **Tomorrows Project** day 26 review


# Day -26 CoinGecko fetcher
[click here for code](./src/week5/day31.ts)

- **Time** 3.06PM 10/29/2026
- **What I learned** How async function works, how to fetch data a real api with API key, how to parse api response and catch errors without without letting the error propagate out of the fetchBTCPrice function.
- **one difficulty/How I solved** none
- **Tomorrows Project** Polymarket markets fetcher


