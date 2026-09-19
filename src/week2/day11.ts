//Typed Portfolio Project

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