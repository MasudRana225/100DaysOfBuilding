//JSON Portfolio

const portfolio = [
    {
        "tokenName": "BTC",
        "holdingAmount": 0.5,
        "currentPrice": 30000
    },
    {
        "tokenName": "ETH",
        "holdingAmount": 2,
        "currentPrice": 2000
    },
    {
        "tokenName": "SOL",
        "holdingAmount": 10,
        "currentPrice": 50
    }

]

for (const holding of portfolio) {
    console.log(`Token: ${holding.tokenName}, Holding Amount: ${holding.holdingAmount}, Current Price: ${holding.currentPrice}, Total Value: ${holding.holdingAmount * holding.currentPrice}`);
}


