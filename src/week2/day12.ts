// Interface for Tokens

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
