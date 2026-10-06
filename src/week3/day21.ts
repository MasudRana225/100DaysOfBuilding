import fs from "fs";
import readline from "readline";
import { menuConfig } from "../config";
import { Chain, PortfolioItem } from "../types";
const portfolioFile: string = 'portfolio.json'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


function checkFileExists(filePath: string){
    if(fs.existsSync(filePath)){
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        return fileContent ? JSON.parse(fileContent) : []
    } else{
         return [];
    }
}


function addUserInput(userInput: PortfolioItem){
    const portfolioData = checkFileExists(portfolioFile);
        portfolioData.push(userInput);
        fs.writeFileSync("portfolio.json", JSON.stringify(portfolioData, null, 2));
        console.log("Asset added successfully. \n");
 showPortfolio()
}

function promptAddAsset() {
    console.log("\n--- Add New Asset ---");
    rl.question("Enter token symbol: ", (symbol) => {
        rl.question("Enter Chain: ", (chain) => {
            if(!Object.values(Chain).includes(chain.trim() as Chain)) {
                console.log(`Invalid chain. Please enter one of the following: ${Object.values(Chain).join(', ')}`);
                return promptAddAsset();
            }
            rl.question("Enter decimals: ",(decimals) => {
                 if(Number.isNaN(parseFloat(decimals))) {
                            console.log("Invalid input. Please enter valid numbers for decimals.");
                            return promptAddAsset();
                        }
                rl.question("Enter holding amount: ", (holdingAmount) => {
                     if(Number.isNaN(parseFloat(holdingAmount))) {
                            console.log("Invalid input. Please enter valid numbers for holding amount.");
                            return promptAddAsset();
                        }
                    rl.question("Enter current price: ", (currentPrice) => {
                        if(Number.isNaN(parseFloat(currentPrice))) {
                            console.log("Invalid input. Please enter valid numbers for current price.");
                            return promptAddAsset();
                        }
                        const newAsset: PortfolioItem = {
                            token: {
                                symbol: symbol.trim(),
                                chain: chain.trim() as Chain,
                                decimals: parseInt(decimals)
                            },
                            holdingAmount: parseFloat(holdingAmount),
                            currentPrice: parseFloat(currentPrice)
                        };
                        addUserInput(newAsset);
                    })
                })
            })
        })
    })
    
}

function showPortfolio(){
    console.log(menuConfig.appName);
    console.log("=".repeat(menuConfig.appName.length));

    rl.question(menuConfig.menuOptions.join('\n') + '\nChoose an option:', (choice: string) => {
        const numericChoice = Number(choice)

        if(numericChoice === 1){
            console.log(checkFileExists(portfolioFile));
            showPortfolio();
        } else if( numericChoice === 2) {
            promptAddAsset()
        } else if( numericChoice === 3) {
            console.log('Exiting....');
            rl.close();
        }else{
            console.log('Invalid choice. Please try again');    
            showPortfolio();        
        }
    })
}
showPortfolio()