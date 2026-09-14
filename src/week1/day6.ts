//JSON Portfolio

const portfolio = [
    {
        "TokenName": "BTC",
        "HoldingAmount": 0.5,
        "CurrentPrice": 30000
    },
    {
        "TokenName": "ETH",
        "HoldingAmount": 2,
        "CurrentPrice": 2000
    },
    {
        "TokenName": "SOL",
        "HoldingAmount": 10,
        "CurrentPrice": 50
    }

]

for (const holding of portfolio) {
    console.log(`Token: ${holding.TokenName}, Holding Amount: ${holding.HoldingAmount}, Current Price: ${holding.CurrentPrice}, Total Value: ${holding.HoldingAmount * holding.CurrentPrice}`);
}


