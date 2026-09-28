import {Chain, PortfolioItem } from "./types";

export const mockPortfolio: PortfolioItem[] = [
    {
        token: {
            symbol: "BTC",
            chain: Chain.Bitcoin,
            decimals: 8
        },
        holdingAmount: 0.5,
        currentPrice: 30000
    },
    {
        token: {
            symbol: "ETH",
            chain: Chain.Ethereum,
            decimals: 18
        },
        holdingAmount: 2,
        currentPrice: 2000
    },
    {
        token: {
            symbol: "SOL",
            chain: Chain.Solana,
            decimals: 9
        },
        holdingAmount: 10,
        currentPrice: 100
    }
];