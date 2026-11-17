//Cache
import { existsSync, readFileSync, writeFileSync } from 'fs';
import { Market, fetchMarkets, EXPECTED_MARKET_COUNT } from './day34';

const OUTPUT_FILE = 'markets.json';
const CACHE_TTL_MS = 60_000; // 1 minute in milliseconds

interface Snapshot {
    timestamp: string;
    count: number;
    markets: Market[];
}

function loadHistory(): Snapshot | null{
    if(!existsSync(OUTPUT_FILE)) return null;
    return JSON.parse(readFileSync(OUTPUT_FILE, "utf-8"));
}

async function getMarkets(): Promise<Market[]> {
    const last = loadHistory();

    //serve from cache if the last snapshot is fresh
    if(last){
        const ageMS = Date.now() - new Date(last.timestamp).getTime();
        if (ageMS < CACHE_TTL_MS) {
            const waitSec = Math.ceil((CACHE_TTL_MS - ageMS) / 1000);
            console.log(`Returning ${last.count} cached markets from ${last.timestamp}`);
            console.log(`Markets don't change within 60 seconds. Try again in ${waitSec}`);
            return last.markets;
        }
    }

    // if code comes here that means, Cache is missing or stale, so call the API 
    const markets = await fetchMarkets();

    //Only cache a successful, non-empty fetch
    if(markets.length > 0 && markets.length === EXPECTED_MARKET_COUNT) {
        const snapshot: Snapshot = {
            timestamp: new Date().toISOString(),
            count: markets.length,
            markets,
        };
        writeFileSync(OUTPUT_FILE, JSON.stringify(snapshot, null, 2));
        console.log(`Saved ${markets.length} markets at ${snapshot.timestamp}`);
    }else{
        console.log("Fetch returned partial market or no markets, so nothing was cached.");
    }

    return markets;
}
getMarkets()
.then(markets => console.log(`Got ${markets.length} markets.`))
.catch(error => console.error("Error:", error));