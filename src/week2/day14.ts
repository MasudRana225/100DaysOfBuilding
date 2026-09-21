// Generic API Wraper

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
