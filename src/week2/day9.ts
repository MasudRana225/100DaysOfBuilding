//Simple Watchlist

const watchlist: {name: string, price: number}[] = [];

function addToken(name: string, price: number) {
    watchlist.push({name, price})
}
addToken("BTC", 78000);
addToken("ETH", 2450);
addToken("SOL", 100);
addToken("SOL", 100);
addToken("SOL", 100);
addToken("SOL", 100);
addToken("XRP", 100);
addToken("BNB", 100);

function removeToken(name: string){
    for (const item of watchlist) {
        if(item.name === name){
            const index = watchlist.indexOf(item);
            watchlist.splice(index,1)
        }
    }
}

removeToken("SOL")
console.log(watchlist);

