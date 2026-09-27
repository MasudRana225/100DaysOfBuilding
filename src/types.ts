export enum Chain {
    Bitcoin = "bitcoin",
    Ethereum = "ethereum",
    Solana = "solana"
}


export interface Token{
    symbol: string;
    chain: Chain;
    decimals: number;
}

export interface PortfolioItem {
    token: Token;
    holdingAmount: number;
    currentPrice: number;
}