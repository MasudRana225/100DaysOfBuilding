//Pagination
export interface Market {
    question: string;
    id: string;
    slug: string;
    clobTokenIds: string[];
}
const limit = 5;

async function fetchPage(offset: number): Promise<Market[] | null> {
    const maxRetries = 3;
    for(let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const response = await fetch(`https://gamma-api.polymarket.com/markets?closed=false&limit=${limit}&offset=${offset}`)
            if(response.ok) {
                const page: Market [] = await response.json()
                return page;
            }

            const is429 = response.status === 429;
            const is5xx = response.status >= 500 && response.status < 600;
            if(is429 || is5xx) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }else {
                console.error(`HTTP error! status: ${response.status}`);
                break; // Exit the loop for non-retryable errors
            }
        } catch (error) {
            console.log(`❌ failed: ${error}`);
            
            if(attempt === maxRetries) {
                console.log("Giving up, max retries reached");
                break; 
            }
            const waitMs = 1000 * 2 ** (attempt - 1); //1s, 2s, 4s
            console.log(`Waiting ${waitMs}ms before retry....`);
            await new Promise((resolve) => setTimeout(resolve, waitMs))             
        }
    }
    return null; 
}

async function fetchMarkets(){
    const allMarkets: Market[] = [];
    let offset = 0;
    const totalRequest = 3;

    for(let i = 0; i <totalRequest; i++) {
        try {
            const markets = await fetchPage(offset)
            if(!markets) {
                console.log(`No markets returned for this page at Offset: ${offset}`);                
                break;
            }
            allMarkets.push(...markets.map(m => ({
                question: m.question,
                id: m.id,
                slug: m.slug,
                clobTokenIds: m.clobTokenIds
                })))
            console.log(`Fetched ${markets.length} markets for this page at Offset: ${offset}`);
            offset += limit;
        } catch (error) {
            console.error('something went wrong', offset, error);
            
        }
    }
    return allMarkets;
}
fetchMarkets().then(markets => {
    console.log("Fetched markets:", markets, `Total markets fetched: ${markets.length}`);
}).catch(error => {
    console.error("Error in fetchMarkets:", error);
})

