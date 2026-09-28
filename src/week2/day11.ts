//Typed Portfolio Project
export {} // This line is necessary to make this file a module and avoid global scope pollution
interface PortfolioItem {
    tokenName: string;
    holdingAmount: number;
    currentPrice: number;
}

 const portfolio11: PortfolioItem[] = [
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