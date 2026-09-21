// Interface for Tokens

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
